import { NextResponse } from 'next/server'
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

    // Convert to CSV
    const headers = ['Name', 'Email', 'Phone', 'Company', 'Service', 'Budget', 'Message', 'Status', 'Date']
    const csvRows = [headers.join(',')]

    for (const lead of leads) {
      const row = [
        `"${lead.name.replace(/"/g, '""')}"`,
        `"${lead.email}"`,
        `"${lead.phone || ''}"`,
        `"${(lead.company || '').replace(/"/g, '""')}"`,
        `"${lead.service || ''}"`,
        `"${lead.budget || ''}"`,
        `"${lead.message.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        `"${lead.status}"`,
        `"${new Date(lead.createdAt).toISOString()}"`,
      ]
      csvRows.push(row.join(','))
    }

    const csv = csvRows.join('\n')

    return new NextResponse(csv, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error('Export leads error:', error)
    return NextResponse.json(
      { error: 'Failed to export leads' },
      { status: 500 }
    )
  }
}
