"use client"

import { useState } from "react"
import { Save, Store, Mail, Truck, CreditCard, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

const settingsTabs = [
  { id: "general", label: "General", icon: Store },
  { id: "shipping", label: "Shipping", icon: Truck },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "email", label: "Email", icon: Mail },
  { id: "security", label: "Security", icon: Shield },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your store configuration
          </p>
        </div>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-lg border p-2 space-y-1">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          {activeTab === "general" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Store Information</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input
                      id="storeName"
                      defaultValue="Tec Tiles"
                      className="mt-1"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Contact Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="info@tec-tiles.com"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Contact Phone</Label>
                      <Input
                        id="phone"
                        defaultValue="+44 7931 993010"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Business Address</Label>
                    <Input
                      id="address"
                      defaultValue="Unit 2, Glyn Square, Milton Keynes"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-4">Currency & Region</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <select
                      id="currency"
                      className="w-full border rounded-md px-3 py-2 mt-1"
                      defaultValue="GBP"
                    >
                      <option value="GBP">GBP (£)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <select
                      id="timezone"
                      className="w-full border rounded-md px-3 py-2 mt-1"
                      defaultValue="Europe/London"
                    >
                      <option value="Europe/London">Europe/London (GMT)</option>
                      <option value="Europe/Paris">Europe/Paris (CET)</option>
                      <option value="America/New_York">America/New_York (EST)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Shipping Options</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Standard Delivery</p>
                      <p className="text-sm text-muted-foreground">5-7 business days</p>
                    </div>
                    <Input defaultValue="49.99" className="w-24 text-right" />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Express Delivery</p>
                      <p className="text-sm text-muted-foreground">2-3 business days</p>
                    </div>
                    <Input defaultValue="79.99" className="w-24 text-right" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-4">Free Shipping</h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="freeShipping" defaultChecked />
                    <Label htmlFor="freeShipping">Enable free shipping over</Label>
                  </div>
                  <Input defaultValue="599" className="w-24" />
                  <span className="text-muted-foreground">£</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                        VISA
                      </div>
                      <div>
                        <p className="font-medium">Credit/Debit Cards</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                      </div>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        PP
                      </div>
                      <div>
                        <p className="font-medium">PayPal</p>
                        <p className="text-sm text-muted-foreground">Pay with PayPal account</p>
                      </div>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                        K
                      </div>
                      <div>
                        <p className="font-medium">Klarna</p>
                        <p className="text-sm text-muted-foreground">Buy now, pay later</p>
                      </div>
                    </div>
                    <Checkbox />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Admin Notifications</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Order</p>
                      <p className="text-sm text-muted-foreground">Get notified when a new order is placed</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Low Stock Alert</p>
                      <p className="text-sm text-muted-foreground">Get notified when product stock is low</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Customer</p>
                      <p className="text-sm text-muted-foreground">Get notified when a new customer registers</p>
                    </div>
                    <Checkbox />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Review</p>
                      <p className="text-sm text-muted-foreground">Get notified when a customer leaves a review</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Email Settings</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="fromEmail">From Email</Label>
                    <Input
                      id="fromEmail"
                      type="email"
                      defaultValue="orders@tec-tiles.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fromName">From Name</Label>
                    <Input
                      id="fromName"
                      defaultValue="Tec Tiles"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-4">Customer Emails</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order Confirmation</p>
                      <p className="text-sm text-muted-foreground">Send when order is placed</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Shipping Confirmation</p>
                      <p className="text-sm text-muted-foreground">Send when order is shipped</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Delivery Confirmation</p>
                      <p className="text-sm text-muted-foreground">Send when order is delivered</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Require 2FA for admin login</p>
                    </div>
                    <Checkbox />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Session Timeout</p>
                      <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
                    </div>
                    <select className="border rounded-md px-3 py-2 text-sm">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>4 hours</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-lg font-semibold mb-4">Admin Users</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                        A
                      </div>
                      <div>
                        <p className="font-medium">Admin</p>
                        <p className="text-xs text-muted-foreground">admin@tec-tiles.com</p>
                      </div>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Owner</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-4">
                  Add Admin User
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
