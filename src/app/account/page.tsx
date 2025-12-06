"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
  Truck,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mock-data"

// Mock user data
const user = {
  firstName: "John",
  lastName: "Smith",
  email: "john.smith@example.com",
  phone: "+44 7931 123456",
  memberSince: "November 2024",
}

// Mock orders
const orders = [
  {
    id: "TEC-2024-001234",
    date: "Nov 28, 2024",
    status: "delivered",
    total: 847.95,
    items: [products[0], products[4]],
  },
  {
    id: "TEC-2024-001189",
    date: "Nov 15, 2024",
    status: "shipped",
    total: 459.9,
    items: [products[2]],
  },
  {
    id: "TEC-2024-001102",
    date: "Oct 30, 2024",
    status: "processing",
    total: 1299.0,
    items: [products[6], products[8], products[1]],
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "delivered":
      return <CheckCircle2 className="h-4 w-4 text-green-600" />
    case "shipped":
      return <Truck className="h-4 w-4 text-blue-600" />
    default:
      return <Clock className="h-4 w-4 text-orange-600" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "delivered":
      return (
        <Badge variant="outline" className="text-green-600 border-green-600">
          Delivered
        </Badge>
      )
    case "shipped":
      return (
        <Badge variant="outline" className="text-blue-600 border-blue-600">
          Shipped
        </Badge>
      )
    default:
      return (
        <Badge variant="outline" className="text-orange-600 border-orange-600">
          Processing
        </Badge>
      )
  }
}

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("orders")

  const sidebarItems = [
    { id: "orders", label: "My Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "settings", label: "Account Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <Separator className="mb-4" />

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              <Separator className="my-4" />

              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="h-4 w-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "orders" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Order History</h2>
                  <p className="text-sm text-muted-foreground">
                    {orders.length} orders
                  </p>
                </div>

                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="font-bold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          Placed on {order.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {getStatusBadge(order.status)}
                        <p className="font-bold">£{order.total.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {order.items.map((item) => (
                        <Link
                          key={item.id}
                          href={`/product/${item.slug}`}
                          className="relative w-16 h-16 rounded-md overflow-hidden"
                        >
                          <Image
                            src={item.images[0]}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        {getStatusIcon(order.status)}
                        <span>
                          {order.status === "delivered"
                            ? "Delivered successfully"
                            : order.status === "shipped"
                            ? "On the way"
                            : "Being prepared"}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">My Wishlist</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {products.slice(0, 6).map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-square rounded-md overflow-hidden mb-2">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-sm font-medium line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-sm text-primary font-bold">
                        £{product.price.toFixed(2)}/m²
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "addresses" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Saved Addresses</h2>
                  <Button>Add New Address</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-6 border-2 border-primary">
                    <div className="flex items-center justify-between mb-3">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <p className="font-medium">Home</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      John Smith
                      <br />
                      123 Example Street
                      <br />
                      London, Greater London
                      <br />
                      SW1A 1AA
                      <br />
                      United Kingdom
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">
                        Billing
                      </span>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      John Smith
                      <br />
                      456 Business Park
                      <br />
                      Milton Keynes, Buckinghamshire
                      <br />
                      MK9 1AB
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Payment Methods</h2>
                  <Button>Add New Card</Button>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-primary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">
                          Expires 12/26
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground">
                          First Name
                        </label>
                        <p className="font-medium">{user.firstName}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Last Name
                        </label>
                        <p className="font-medium">{user.lastName}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Email
                        </label>
                        <p className="font-medium">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">
                          Phone
                        </label>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4">
                      Edit Profile
                    </Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Password</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Last changed: Never
                    </p>
                    <Button variant="outline">Change Password</Button>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about your orders
                          </p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          Enabled
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotional Emails</p>
                          <p className="text-sm text-muted-foreground">
                            Receive deals and offers
                          </p>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          Enabled
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium text-red-600 mb-4">Danger Zone</h3>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
