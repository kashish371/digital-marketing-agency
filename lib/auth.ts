import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import { getDatabase, COLLECTIONS } from './mongodb'
import type { User } from './types'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-in-production'
)

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function createToken(userId: string): Promise<string> {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(JWT_SECRET)
}

export async function verifyToken(token: string): Promise<{ userId: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { userId: string }
  } catch {
    return null
  }
}

export async function getSession(): Promise<User | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value

  if (!token) return null

  const payload = await verifyToken(token)
  if (!payload) return null

  try {
    const db = await getDatabase()
    const { ObjectId } = await import('mongodb')
    const user = await db.collection<User>(COLLECTIONS.USERS).findOne({ 
      _id: new ObjectId(payload.userId) 
    })
    
    if (!user) return null
    
    // Don't return password
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword as User
  } catch {
    return null
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('auth-token')
}

// Initialize admin user if not exists
export async function initializeAdmin() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminEmail || !adminPassword) {
    console.log('Admin credentials not configured')
    return
  }

  try {
    const db = await getDatabase()
    const existingAdmin = await db.collection<User>(COLLECTIONS.USERS).findOne({ 
      email: adminEmail 
    })

    if (!existingAdmin) {
      const hashedPassword = await hashPassword(adminPassword)
      await db.collection<User>(COLLECTIONS.USERS).insertOne({
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin',
        role: 'admin',
        createdAt: new Date(),
      })
      console.log('Admin user created')
    }
  } catch (error) {
    console.error('Error initializing admin:', error)
  }
}
