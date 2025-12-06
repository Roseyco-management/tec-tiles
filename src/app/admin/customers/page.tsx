"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Mail,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock customers data
const customers = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+44 7911 123456",
    orders: 12,
    spent: "£4,523.00",
    status: "active",
    joined: "Jan 15, 2024",
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    phone: "+44 7922 234567",
    orders: 8,
    spent: "£2,890.00",
    status: "active",
    joined: "Feb 22, 2024",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+44 7933 345678",
    orders: 5,
    spent: "£1,450.00",
    status: "active",
    joined: "Mar 10, 2024",
  },
  {
    id: "4",
    name: "Emma Brown",
    email: "emma@example.com",
    phone: "+44 7944 456789",
    orders: 15,
    spent: "£6,780.00",
    status: "vip",
    joined: "Dec 5, 2023",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david@example.com",
    phone: "+44 7955 567890",
    orders: 3,
    spent: "£890.00",
    status: "active",
    joined: "Apr 18, 2024",
  },
  {
    id: "6",
    name: "Lisa Chen",
    email: "lisa@example.com",
    phone: "+44 7966 678901",
    orders: 0,
    spent: "£0.00",
    status: "inactive",
    joined: "May 1, 2024",
  },
  {
    id: "7",
    name: "Tom Harris",
    email: "tom@example.com",
    phone: "+44 7977 789012",
    orders: 22,
    spent: "£8,950.00",
    status: "vip",
    joined: "Oct 20, 2023",
  },
  {
    id: "8",
    name: "Amy Taylor",
    email: "amy@example.com",
    phone: "+44 7988 890123",
    orders: 7,
    spent: "£2,340.00",
    status: "active",
    joined: "Jun 12, 2024",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "vip":
      return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>
    case "active":
      return <Badge className="bg-green-100 text-green-800">Active</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
  }
}

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Customers</h1>
          <p className="text-muted-foreground">
            Manage your customer database
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Total Customers</p>
          <p className="text-2xl font-bold">2,103</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Active</p>
          <p className="text-2xl font-bold text-green-600">1,892</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">VIP Members</p>
          <p className="text-2xl font-bold text-purple-600">156</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">New This Month</p>
          <p className="text-2xl font-bold text-blue-600">87</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="vip">VIP</option>
              <option value="inactive">Inactive</option>
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left p-4 text-sm font-medium">Customer</th>
                <th className="text-left p-4 text-sm font-medium">Contact</th>
                <th className="text-left p-4 text-sm font-medium">Orders</th>
                <th className="text-left p-4 text-sm font-medium">Total Spent</th>
                <th className="text-left p-4 text-sm font-medium">Status</th>
                <th className="text-left p-4 text-sm font-medium">Joined</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <p className="font-medium">{customer.name}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm">{customer.email}</p>
                    <p className="text-xs text-muted-foreground">{customer.phone}</p>
                  </td>
                  <td className="p-4 text-sm">{customer.orders} orders</td>
                  <td className="p-4 font-medium">{customer.spent}</td>
                  <td className="p-4">{getStatusBadge(customer.status)}</td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {customer.joined}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-muted-foreground">
            Showing 1-{filteredCustomers.length} of {customers.length} customers
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
