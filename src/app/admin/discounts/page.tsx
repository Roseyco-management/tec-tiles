"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Copy,
  ChevronLeft,
  ChevronRight,
  Tag,
  Percent,
  Truck,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// Mock discount codes
const discountCodes = [
  {
    id: "1",
    code: "WELCOME10",
    type: "percentage",
    value: 10,
    description: "10% off for new customers",
    usageLimit: 100,
    usageCount: 45,
    minOrder: 50,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active",
  },
  {
    id: "2",
    code: "TILES20",
    type: "percentage",
    value: 20,
    description: "20% off all tiles",
    usageLimit: 50,
    usageCount: 50,
    minOrder: 100,
    startDate: "2024-11-01",
    endDate: "2024-11-30",
    status: "expired",
  },
  {
    id: "3",
    code: "FREESHIP",
    type: "free_shipping",
    value: 0,
    description: "Free shipping on any order",
    usageLimit: null,
    usageCount: 128,
    minOrder: 0,
    startDate: "2024-12-01",
    endDate: "2024-12-25",
    status: "active",
  },
  {
    id: "4",
    code: "SAVE50",
    type: "fixed",
    value: 50,
    description: "£50 off orders over £500",
    usageLimit: 25,
    usageCount: 12,
    minOrder: 500,
    startDate: "2024-12-01",
    endDate: "2025-01-31",
    status: "active",
  },
  {
    id: "5",
    code: "VIP25",
    type: "percentage",
    value: 25,
    description: "VIP customer discount",
    usageLimit: null,
    usageCount: 89,
    minOrder: 200,
    startDate: "2024-01-01",
    endDate: null,
    status: "active",
  },
]

const getTypeBadge = (type: string) => {
  switch (type) {
    case "percentage":
      return (
        <Badge variant="outline" className="text-blue-600 border-blue-600">
          <Percent className="h-3 w-3 mr-1" />
          Percentage
        </Badge>
      )
    case "fixed":
      return (
        <Badge variant="outline" className="text-green-600 border-green-600">
          <Tag className="h-3 w-3 mr-1" />
          Fixed Amount
        </Badge>
      )
    case "free_shipping":
      return (
        <Badge variant="outline" className="text-purple-600 border-purple-600">
          <Truck className="h-3 w-3 mr-1" />
          Free Shipping
        </Badge>
      )
    default:
      return null
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800">Active</Badge>
    case "expired":
      return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>
    case "scheduled":
      return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>
    default:
      return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
  }
}

export default function DiscountsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [newDiscount, setNewDiscount] = useState({
    code: "",
    type: "percentage",
    value: "",
    description: "",
    minOrder: "",
    usageLimit: "",
    startDate: "",
    endDate: "",
  })

  const filteredDiscounts = discountCodes.filter(
    (discount) =>
      discount.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discount.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    // Could add a toast notification here
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Discount Codes</h1>
          <p className="text-muted-foreground">
            Create and manage promotional codes
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Discount
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Active Codes</p>
          <p className="text-2xl font-bold text-green-600">4</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Total Uses</p>
          <p className="text-2xl font-bold">324</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Revenue Saved</p>
          <p className="text-2xl font-bold">£4,521</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Avg. Discount</p>
          <p className="text-2xl font-bold">15%</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search discount codes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Create Discount Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Create Discount Code</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="code">Discount Code</Label>
                  <Input
                    id="code"
                    placeholder="e.g. SUMMER20"
                    value={newDiscount.code}
                    onChange={(e) =>
                      setNewDiscount({ ...newDiscount, code: e.target.value.toUpperCase() })
                    }
                    className="mt-1 uppercase"
                  />
                </div>

                <div>
                  <Label>Discount Type</Label>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {[
                      { value: "percentage", label: "Percentage", icon: Percent },
                      { value: "fixed", label: "Fixed Amount", icon: Tag },
                      { value: "free_shipping", label: "Free Shipping", icon: Truck },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setNewDiscount({ ...newDiscount, type: type.value })}
                        className={`p-3 border rounded-lg text-center transition-colors ${
                          newDiscount.type === type.value
                            ? "border-primary bg-primary/5"
                            : "hover:border-gray-300"
                        }`}
                      >
                        <type.icon className="h-5 w-5 mx-auto mb-1" />
                        <span className="text-xs">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {newDiscount.type !== "free_shipping" && (
                  <div>
                    <Label htmlFor="value">
                      {newDiscount.type === "percentage" ? "Percentage Off" : "Amount Off (£)"}
                    </Label>
                    <Input
                      id="value"
                      type="number"
                      placeholder={newDiscount.type === "percentage" ? "e.g. 20" : "e.g. 50"}
                      value={newDiscount.value}
                      onChange={(e) => setNewDiscount({ ...newDiscount, value: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g. Summer sale discount"
                    value={newDiscount.description}
                    onChange={(e) =>
                      setNewDiscount({ ...newDiscount, description: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="minOrder">Minimum Order (£)</Label>
                    <Input
                      id="minOrder"
                      type="number"
                      placeholder="0"
                      value={newDiscount.minOrder}
                      onChange={(e) =>
                        setNewDiscount({ ...newDiscount, minOrder: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="usageLimit">Usage Limit</Label>
                    <Input
                      id="usageLimit"
                      type="number"
                      placeholder="Unlimited"
                      value={newDiscount.usageLimit}
                      onChange={(e) =>
                        setNewDiscount({ ...newDiscount, usageLimit: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={newDiscount.startDate}
                      onChange={(e) =>
                        setNewDiscount({ ...newDiscount, startDate: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={newDiscount.endDate}
                      onChange={(e) =>
                        setNewDiscount({ ...newDiscount, endDate: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowCreateModal(false)}>
                  Create Discount
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Discounts Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left p-4 text-sm font-medium">Code</th>
                <th className="text-left p-4 text-sm font-medium">Type</th>
                <th className="text-left p-4 text-sm font-medium">Value</th>
                <th className="text-left p-4 text-sm font-medium">Usage</th>
                <th className="text-left p-4 text-sm font-medium">Min. Order</th>
                <th className="text-left p-4 text-sm font-medium">Valid Until</th>
                <th className="text-left p-4 text-sm font-medium">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredDiscounts.map((discount) => (
                <tr key={discount.id} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                        {discount.code}
                      </code>
                      <button
                        onClick={() => copyCode(discount.code)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {discount.description}
                    </p>
                  </td>
                  <td className="p-4">{getTypeBadge(discount.type)}</td>
                  <td className="p-4 font-medium">
                    {discount.type === "percentage"
                      ? `${discount.value}%`
                      : discount.type === "fixed"
                      ? `£${discount.value}`
                      : "Free"}
                  </td>
                  <td className="p-4">
                    <p className="text-sm">
                      {discount.usageCount}
                      {discount.usageLimit && ` / ${discount.usageLimit}`}
                    </p>
                    {discount.usageLimit && (
                      <div className="w-20 h-1.5 bg-muted rounded-full mt-1">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.min(
                              (discount.usageCount / discount.usageLimit) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-sm">
                    {discount.minOrder > 0 ? `£${discount.minOrder}` : "None"}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {discount.endDate || "No expiry"}
                    </div>
                  </td>
                  <td className="p-4">{getStatusBadge(discount.status)}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
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
            Showing {filteredDiscounts.length} discount codes
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">
              1
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
