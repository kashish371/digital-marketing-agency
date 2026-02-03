"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Users,
  Mail,
  TrendingUp,
  Download,
  LogOut,
  Trash2,
  ChevronDown,
  Search,
  LayoutDashboard,
  FileText,
  Settings,
  Moon,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { toast } from 'sonner'
import type { Contact, User } from '@/lib/types'

interface AdminDashboardProps {
  user: User
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-500',
  contacted: 'bg-yellow-500/10 text-yellow-500',
  converted: 'bg-green-500/10 text-green-500',
  closed: 'bg-gray-500/10 text-gray-500',
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [leads, setLeads] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('leads')

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/admin/leads')
      if (res.ok) {
        const data = await res.json()
        setLeads(data.leads)
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error)
      toast.error('Failed to fetch leads')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
      router.refresh()
    } catch {
      toast.error('Logout failed')
    }
  }

  const handleDeleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return

    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setLeads(leads.filter((lead) => lead._id?.toString() !== id))
        toast.success('Lead deleted successfully')
      } else {
        toast.error('Failed to delete lead')
      }
    } catch {
      toast.error('Failed to delete lead')
    }
  }

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        setLeads(leads.map((lead) =>
          lead._id?.toString() === id ? { ...lead, status: status as Contact['status'] } : lead
        ))
        toast.success('Status updated')
      }
    } catch {
      toast.error('Failed to update status')
    }
  }

  const handleExport = () => {
    window.open('/api/admin/leads/export', '_blank')
  }

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.company?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
  )

  const stats = [
    {
      label: 'Total Leads',
      value: leads.length,
      icon: Users,
      color: 'text-blue-500',
    },
    {
      label: 'New Leads',
      value: leads.filter((l) => l.status === 'new').length,
      icon: Mail,
      color: 'text-green-500',
    },
    {
      label: 'Conversion Rate',
      value: leads.length > 0
        ? `${Math.round((leads.filter((l) => l.status === 'converted').length / leads.length) * 100)}%`
        : '0%',
      icon: TrendingUp,
      color: 'text-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-4 hidden lg:flex flex-col">
        <div className="mb-8">
          <span className="font-serif text-xl font-bold">
            <span className="text-primary">Rites</span> Admin
          </span>
        </div>

        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'leads'
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'blog'
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <FileText className="w-5 h-5" />
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'settings'
                ? 'bg-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </button>
        </nav>

        <div className="pt-4 border-t border-border space-y-2">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 mr-2" />
            ) : (
              <Moon className="w-4 h-4 mr-2" />
            )}
            Toggle Theme
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-destructive hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user.name || user.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">{stat.label}</span>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="font-serif text-3xl font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-card rounded-xl border border-border">
          <div className="p-4 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="font-serif text-lg font-semibold">Recent Leads</h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="hidden md:table-cell">Company</TableHead>
                  <TableHead className="hidden lg:table-cell">Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : filteredLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      No leads found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredLeads.map((lead) => (
                    <TableRow key={lead._id?.toString()}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.email}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        {lead.company || '-'}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {lead.service || '-'}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColors[lead.status]}`}
                            >
                              {lead.status}
                              <ChevronDown className="w-3 h-3" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {['new', 'contacted', 'converted', 'closed'].map((status) => (
                              <DropdownMenuItem
                                key={status}
                                onClick={() => handleUpdateStatus(lead._id!.toString(), status)}
                                className="capitalize"
                              >
                                {status}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteLead(lead._id!.toString())}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}
