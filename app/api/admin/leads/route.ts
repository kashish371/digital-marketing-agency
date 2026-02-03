import { NextRequest, NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import { getDatabase, COLLECTIONS } from '@/lib/mongodb'
import { getSession } from '@/lib/auth'
import type { Contact } from '@/lib/types'

export async function GET() {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const db = await getDatabase()
    const leads = await db
      .collection<Contact>(COLLECTIONS.CONTACTS)
      .find({})
      .sort({ createdAt: -1 })
      .toArray()

    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Get leads error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Lead ID is required' }, { status: 400 })
    }

    const db = await getDatabase()
    const result = await db
      .collection<Contact>(COLLECTIONS.CONTACTS)
      .deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete lead error:', error)
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json(
        { error: 'Lead ID and status are required' },
        { status: 400 }
      )
    }

    const db = await getDatabase()
    const result = await db
      .collection<Contact>(COLLECTIONS.CONTACTS)
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Update lead error:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}
