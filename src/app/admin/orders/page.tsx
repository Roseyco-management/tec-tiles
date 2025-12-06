"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreHorizontal,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Mock orders data
const orders = [
  {
    id: "TEC-2024-001234",
    customer: "John Smith",
    email: "john@example.com",
    items: 3,
    total: "£847.95",
    status: "processing",
    payment: "paid",
    date: "Dec 6, 2024",
    time: "12:45 PM",
  },
  {
    id: "TEC-2024-001233",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    items: 5,
    total: "£1,249.00",
    status: "shipped",
    payment: "paid",
    date: "Dec 6, 2024",
    time: "11:30 AM",
  },
  {
    id: "TEC-2024-001232",
    customer: "Mike Johnson",
    email: "mike@example.com",
    items: 2,
    total: "£459.90",
    status: "delivered",
    payment: "paid",
    date: "Dec 5, 2024",
    time: "4:15 PM",
  },
  {
    id: "TEC-2024-001231",
    customer: "Emma Brown",
    email: "emma@example.com",
    items: 8,
    total: "£2,150.00",
    status: "processing",
    payment: "paid",
    date: "Dec 5, 2024",
    time: "2:00 PM",
  },
  {
    id: "TEC-2024-001230",
    customer: "David Lee",
    email: "david@example.com",
    items: 1,
    total: "£675.50",
    status: "pending",
    payment: "pending",
    date: "Dec 5, 2024",
    time: "10:20 AM",
  },
  {
    id: "TEC-2024-001229",
    customer: "Lisa Chen",
    email: "lisa@example.com",
    items: 4,
    total: "£920.00",
    status: "shipped",
    payment: "paid",
    date: "Dec 4, 2024",
    time: "3:45 PM",
  },
  {
    id: "TEC-2024-001228",
    customer: "Tom Harris",
    email: "tom@example.com",
    items: 2,
    total: "£385.00",
    status: "delivered",
    payment: "paid",
    date: "Dec 4, 2024",
    time: "11:00 AM",
  },
  {
    id: "TEC-2024-001227",
    customer: "Amy Taylor",
    email: "amy@example.com",
    items: 6,
    total: "£1,580.00",
    status: "cancelled",
    payment: "refunded",
    date: "Dec 3, 2024",
    time: "5:30 PM",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-green-100 text-green-800">Delivered</Badge>
    case "shipped":
      return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>
    case "processing":
      return <Badge className="bg-orange-100 text-orange-800">Processing</Badge>
    case "cancelled":
      return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
  }
}

const getPaymentBadge = (payment: string) => {
  switch (payment) {
    case "paid":
      return <Badge variant="outline" className="text-green-600 border-green-600">Paid</Badge>
    case "refunded":
      return <Badge variant="outline" className="text-red-600 border-red-600">Refunded</Badge>
    default:
      return <Badge variant="outline" className="text-orange-600 border-orange-600">Pending</Badge>
  }
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-muted-foreground">
            Manage and track customer orders
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
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
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left p-4 text-sm font-medium">Order</th>
                <th className="text-left p-4 text-sm font-medium">Customer</th>
                <th className="text-left p-4 text-sm font-medium">Items</th>
                <th className="text-left p-4 text-sm font-medium">Total</th>
                <th className="text-left p-4 text-sm font-medium">Status</th>
                <th className="text-left p-4 text-sm font-medium">Payment</th>
                <th className="text-left p-4 text-sm font-medium">Date</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="p-4">
                    <p className="font-medium text-sm">{order.id}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm font-medium">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.email}</p>
                  </td>
                  <td className="p-4 text-sm">{order.items} items</td>
                  <td className="p-4 font-medium">{order.total}</td>
                  <td className="p-4">{getStatusBadge(order.status)}</td>
                  <td className="p-4">{getPaymentBadge(order.payment)}</td>
                  <td className="p-4">
                    <p className="text-sm">{order.date}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {order.time}
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
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
            Showing 1-{filteredOrders.length} of {orders.length} orders
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
              3
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
