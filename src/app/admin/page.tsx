"use client"

import Link from "next/link"
import {
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock stats
const stats = [
  {
    label: "Total Revenue",
    value: "£45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    label: "Orders",
    value: "356",
    change: "+12.5%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    value: "2,103",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    label: "Products",
    value: "142",
    change: "-2.4%",
    trend: "down",
    icon: Package,
  },
]

// Mock recent orders
const recentOrders = [
  {
    id: "TEC-2024-001234",
    customer: "John Smith",
    email: "john@example.com",
    total: "£847.95",
    status: "processing",
    date: "2 mins ago",
  },
  {
    id: "TEC-2024-001233",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    total: "£1,249.00",
    status: "shipped",
    date: "15 mins ago",
  },
  {
    id: "TEC-2024-001232",
    customer: "Mike Johnson",
    email: "mike@example.com",
    total: "£459.90",
    status: "delivered",
    date: "1 hour ago",
  },
  {
    id: "TEC-2024-001231",
    customer: "Emma Brown",
    email: "emma@example.com",
    total: "£2,150.00",
    status: "processing",
    date: "2 hours ago",
  },
  {
    id: "TEC-2024-001230",
    customer: "David Lee",
    email: "david@example.com",
    total: "£675.50",
    status: "pending",
    date: "3 hours ago",
  },
]

// Mock top products
const topProducts = [
  { name: "Carrara White Marble Effect Wall Tile", sales: 45, revenue: "£2,025" },
  { name: "Victorian Pattern Floor Tile", sales: 38, revenue: "£1,862" },
  { name: "Grey Oak SPC Flooring", sales: 32, revenue: "£1,248" },
  { name: "White Marble PVC Panel", sales: 28, revenue: "£700" },
  { name: "Grey Slate Effect Outdoor Tile", sales: 24, revenue: "£696" },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return <Badge className="bg-green-100 text-green-800">Delivered</Badge>
    case "shipped":
      return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>
    case "processing":
      return <Badge className="bg-orange-100 text-orange-800">Processing</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
  }
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s what&apos;s happening with your store.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>Add Product</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div
                className={`flex items-center gap-1 text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {stat.change}
              </div>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg border">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left p-3 text-sm font-medium">Order</th>
                  <th className="text-left p-3 text-sm font-medium">Customer</th>
                  <th className="text-left p-3 text-sm font-medium">Status</th>
                  <th className="text-left p-3 text-sm font-medium">Total</th>
                  <th className="text-left p-3 text-sm font-medium">Time</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="p-3">
                      <p className="font-medium text-sm">{order.id}</p>
                    </td>
                    <td className="p-3">
                      <p className="text-sm">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">
                        {order.email}
                      </p>
                    </td>
                    <td className="p-3">{getStatusBadge(order.status)}</td>
                    <td className="p-3 font-medium">{order.total}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {order.date}
                      </div>
                    </td>
                    <td className="p-3">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-lg border">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">Top Products</h2>
            <Link
              href="/admin/products"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="p-4 space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={product.name}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.sales} sales
                  </p>
                </div>
                <p className="text-sm font-medium">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/admin/products/new"
            className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <Package className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Add Product</p>
          </Link>
          <Link
            href="/admin/orders"
            className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <ShoppingCart className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">View Orders</p>
          </Link>
          <Link
            href="/admin/customers"
            className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Manage Customers</p>
          </Link>
          <Link
            href="/admin/analytics"
            className="p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <TrendingUp className="h-6 w-6 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">View Analytics</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
