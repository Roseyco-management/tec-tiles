"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Truck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

// Mock shipping zones
const shippingZones = [
  {
    id: "1",
    name: "UK Mainland",
    regions: ["England", "Wales", "Scotland"],
    methods: [
      { name: "Standard Delivery", price: 49.99, time: "5-7 business days" },
      { name: "Express Delivery", price: 79.99, time: "2-3 business days" },
    ],
  },
  {
    id: "2",
    name: "Northern Ireland",
    regions: ["Northern Ireland"],
    methods: [
      { name: "Standard Delivery", price: 69.99, time: "7-10 business days" },
    ],
  },
  {
    id: "3",
    name: "Scottish Highlands & Islands",
    regions: ["Scottish Highlands", "Scottish Islands"],
    methods: [
      { name: "Standard Delivery", price: 89.99, time: "10-14 business days" },
    ],
  },
]

export default function ShippingPage() {
  const [freeShippingThreshold, setFreeShippingThreshold] = useState("599")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Shipping</h1>
          <p className="text-muted-foreground">
            Manage shipping zones and rates
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Shipping Zone
        </Button>
      </div>

      {/* Free Shipping Settings */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="font-semibold mb-4">Free Shipping</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="freeShipping" defaultChecked />
            <Label htmlFor="freeShipping">Enable free shipping for orders over</Label>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">£</span>
            <Input
              value={freeShippingThreshold}
              onChange={(e) => setFreeShippingThreshold(e.target.value)}
              className="w-24"
            />
          </div>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Applies to UK Mainland standard delivery only
        </p>
      </div>

      {/* Shipping Zones */}
      <div className="space-y-4">
        <h2 className="font-semibold">Shipping Zones</h2>

        {shippingZones.map((zone) => (
          <div key={zone.id} className="bg-white rounded-lg border overflow-hidden">
            <div className="p-4 bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">{zone.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {zone.regions.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-3">Shipping Methods</p>
              <div className="space-y-2">
                {zone.methods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/20 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Truck className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{method.name}</p>
                        <p className="text-xs text-muted-foreground">{method.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium">£{method.price.toFixed(2)}</span>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="mt-3">
                <Plus className="h-4 w-4 mr-1" />
                Add Method
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Info */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="font-semibold mb-4">Delivery Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="processingTime">Processing Time</Label>
            <select id="processingTime" className="w-full border rounded-md px-3 py-2 mt-1">
              <option>1-2 business days</option>
              <option>2-3 business days</option>
              <option>3-5 business days</option>
            </select>
          </div>
          <div>
            <Label htmlFor="cutoffTime">Same Day Dispatch Cutoff</Label>
            <select id="cutoffTime" className="w-full border rounded-md px-3 py-2 mt-1">
              <option>12:00 PM</option>
              <option>2:00 PM</option>
              <option>4:00 PM</option>
            </select>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center space-x-2">
          <Checkbox id="saturdayDelivery" />
          <Label htmlFor="saturdayDelivery">Offer Saturday delivery (additional charges may apply)</Label>
        </div>
      </div>
    </div>
  )
}
