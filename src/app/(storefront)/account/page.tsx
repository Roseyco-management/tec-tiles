"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
  Truck,
  CheckCircle2,
  FileText,
  Calculator,
  Box,
  Building2,
  Percent,
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

// Mock saved quotes
const savedQuotes = [
  {
    id: "QTE-2024-0045",
    date: "Dec 4, 2024",
    name: "Kitchen Renovation",
    totalArea: 28.5,
    estimatedCost: 1423.50,
    products: [products[0], products[4]],
    status: "active",
    expiresIn: "26 days",
  },
  {
    id: "QTE-2024-0039",
    date: "Nov 28, 2024",
    name: "Bathroom Project",
    totalArea: 12.0,
    estimatedCost: 587.40,
    products: [products[2]],
    status: "active",
    expiresIn: "20 days",
  },
  {
    id: "QTE-2024-0028",
    date: "Nov 10, 2024",
    name: "Hallway Tiles",
    totalArea: 15.5,
    estimatedCost: 698.25,
    products: [products[6]],
    status: "expired",
    expiresIn: null,
  },
]

// Mock calculator history
const calculatorHistory = [
  {
    id: "1",
    date: "Dec 5, 2024",
    roomName: "Kitchen",
    dimensions: { length: 5.2, width: 4.1 },
    area: 21.32,
    wastePercentage: 10,
    totalNeeded: 23.45,
    product: products[0],
  },
  {
    id: "2",
    date: "Dec 3, 2024",
    roomName: "Master Bathroom",
    dimensions: { length: 3.5, width: 2.8 },
    area: 9.8,
    wastePercentage: 15,
    totalNeeded: 11.27,
    product: products[2],
  },
  {
    id: "3",
    date: "Nov 29, 2024",
    roomName: "Entrance Hall",
    dimensions: { length: 4.0, width: 1.8 },
    area: 7.2,
    wastePercentage: 10,
    totalNeeded: 7.92,
    product: null,
  },
]

// Mock sample orders
const sampleOrders = [
  {
    id: "SMP-2024-0089",
    date: "Dec 2, 2024",
    status: "delivered",
    samples: [
      { product: products[0], size: "10x10cm" },
      { product: products[4], size: "10x10cm" },
      { product: products[2], size: "10x10cm" },
    ],
  },
  {
    id: "SMP-2024-0076",
    date: "Nov 18, 2024",
    status: "delivered",
    samples: [
      { product: products[6], size: "10x10cm" },
      { product: products[8], size: "10x10cm" },
    ],
  },
]

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
    { id: "quotes", label: "Saved Quotes", icon: FileText },
    { id: "calculator", label: "Calculator History", icon: Calculator },
    { id: "samples", label: "Sample Orders", icon: Box },
    { id: "trade", label: "Trade Account", icon: Building2 },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
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

            {activeTab === "quotes" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Saved Quotes</h2>
                  <Link href="/calculator">
                    <Button>
                      <Calculator className="h-4 w-4 mr-2" />
                      New Quote
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quotes are valid for 30 days from creation date.
                </p>

                {savedQuotes.map((quote) => (
                  <div key={quote.id} className="bg-white rounded-lg p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold">{quote.name}</p>
                          {quote.status === "active" ? (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              Active
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-500 border-gray-500">
                              Expired
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {quote.id} • Created {quote.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          £{quote.estimatedCost.toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {quote.totalArea} m² total
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {quote.products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                          className="relative w-16 h-16 rounded-md overflow-hidden"
                        >
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      {quote.status === "active" ? (
                        <p className="text-sm text-muted-foreground">
                          Expires in {quote.expiresIn}
                        </p>
                      ) : (
                        <p className="text-sm text-red-600">
                          This quote has expired
                        </p>
                      )}
                      <div className="flex gap-2">
                        {quote.status === "active" && (
                          <Button>
                            Add to Cart
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "calculator" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Calculator History</h2>
                  <Link href="/calculator">
                    <Button>
                      <Calculator className="h-4 w-4 mr-2" />
                      New Calculation
                    </Button>
                  </Link>
                </div>

                <div className="bg-white rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left text-sm font-medium p-4">Room</th>
                        <th className="text-left text-sm font-medium p-4">Dimensions</th>
                        <th className="text-left text-sm font-medium p-4">Area Needed</th>
                        <th className="text-left text-sm font-medium p-4">Product</th>
                        <th className="text-left text-sm font-medium p-4">Date</th>
                        <th className="text-left text-sm font-medium p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculatorHistory.map((calc) => (
                        <tr key={calc.id} className="border-t">
                          <td className="p-4">
                            <p className="font-medium">{calc.roomName}</p>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {calc.dimensions.length}m × {calc.dimensions.width}m
                          </td>
                          <td className="p-4">
                            <p className="font-medium">{calc.totalNeeded} m²</p>
                            <p className="text-xs text-muted-foreground">
                              incl. {calc.wastePercentage}% waste
                            </p>
                          </td>
                          <td className="p-4">
                            {calc.product ? (
                              <div className="flex items-center gap-2">
                                <div className="relative w-10 h-10 rounded overflow-hidden">
                                  <Image
                                    src={calc.product.images[0]}
                                    alt={calc.product.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <span className="text-sm line-clamp-1 max-w-[120px]">
                                  {calc.product.name}
                                </span>
                              </div>
                            ) : (
                              <span className="text-sm text-muted-foreground">
                                No product selected
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {calc.date}
                          </td>
                          <td className="p-4">
                            <Button variant="ghost" size="sm">
                              Use Again
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "samples" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Sample Orders</h2>
                  <Link href="/shop">
                    <Button>
                      <Box className="h-4 w-4 mr-2" />
                      Order Samples
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground">
                  Free samples available on most products. Maximum 5 samples per order.
                </p>

                {sampleOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-bold">{order.id}</p>
                        <p className="text-sm text-muted-foreground">
                          Ordered {order.date}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Delivered
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {order.samples.map((sample, index) => (
                        <Link
                          key={index}
                          href={`/product/${sample.product.slug}`}
                          className="group"
                        >
                          <div className="relative aspect-square rounded-md overflow-hidden mb-2">
                            <Image
                              src={sample.product.images[0]}
                              alt={sample.product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                              {sample.size}
                            </div>
                          </div>
                          <p className="text-xs font-medium line-clamp-2">
                            {sample.product.name}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="flex items-center justify-end mt-4 pt-4 border-t">
                      <Button variant="outline" size="sm">
                        Reorder Samples
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "trade" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold">Trade Account</h2>
                  <p className="text-muted-foreground">
                    Apply for a trade account to access exclusive pricing and benefits
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Percent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Trade Discounts</h3>
                    <p className="text-sm text-muted-foreground">
                      Up to 25% off on all products
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">Priority Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Faster shipping on all orders
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-1">30-Day Credit</h3>
                    <p className="text-sm text-muted-foreground">
                      Pay on account terms available
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-medium mb-4">Apply for Trade Account</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Company Registration Number
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Optional"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Business Type *
                      </label>
                      <select className="w-full border rounded-md px-3 py-2">
                        <option value="">Select business type</option>
                        <option value="contractor">Contractor/Builder</option>
                        <option value="designer">Interior Designer</option>
                        <option value="architect">Architect</option>
                        <option value="retailer">Tile Retailer</option>
                        <option value="developer">Property Developer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Estimated Monthly Spend *
                      </label>
                      <select className="w-full border rounded-md px-3 py-2">
                        <option value="">Select range</option>
                        <option value="1000-5000">£1,000 - £5,000</option>
                        <option value="5000-10000">£5,000 - £10,000</option>
                        <option value="10000-25000">£10,000 - £25,000</option>
                        <option value="25000+">£25,000+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium mb-1 block">
                        Business Address *
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-md px-3 py-2"
                        placeholder="Enter business address"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium mb-1 block">
                        Additional Information
                      </label>
                      <textarea
                        className="w-full border rounded-md px-3 py-2 h-24"
                        placeholder="Tell us about your business and typical projects"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <Button>Submit Application</Button>
                    <p className="text-sm text-muted-foreground">
                      Applications are usually reviewed within 2 business days
                    </p>
                  </div>
                </div>
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
