"use client"

import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  Eye,
  MousePointer,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock analytics data
const stats = [
  { label: "Total Revenue", value: "£45,231.89", change: "+20.1%", trend: "up" },
  { label: "Orders", value: "356", change: "+12.5%", trend: "up" },
  { label: "Conversion Rate", value: "3.2%", change: "+0.4%", trend: "up" },
  { label: "Avg. Order Value", value: "£127.06", change: "-2.3%", trend: "down" },
]

const trafficSources = [
  { source: "Direct", visits: 12453, percentage: 35 },
  { source: "Organic Search", visits: 9234, percentage: 26 },
  { source: "Social Media", visits: 6123, percentage: 17 },
  { source: "Paid Ads", visits: 4567, percentage: 13 },
  { source: "Referral", visits: 3210, percentage: 9 },
]

const topPages = [
  { page: "/", views: 15234, title: "Homepage" },
  { page: "/shop", views: 8934, title: "Shop All" },
  { page: "/shop/floor-tiles", views: 5623, title: "Floor Tiles" },
  { page: "/shop/wall-tiles", views: 4521, title: "Wall Tiles" },
  { page: "/calculator", views: 3245, title: "Tile Calculator" },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Track your store performance
          </p>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <div
              className={`flex items-center gap-1 mt-2 text-sm ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {stat.trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {stat.change} vs last period
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-semibold mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center text-muted-foreground">
              <TrendingUp className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Revenue chart will be displayed here</p>
              <p className="text-sm">Connect analytics to see data</p>
            </div>
          </div>
        </div>

        {/* Orders Chart Placeholder */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-semibold mb-4">Orders Overview</h2>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <div className="text-center text-muted-foreground">
              <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>Orders chart will be displayed here</p>
              <p className="text-sm">Connect analytics to see data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-semibold mb-4">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">{source.source}</span>
                  <span className="text-sm text-muted-foreground">
                    {source.visits.toLocaleString()} visits
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="font-semibold mb-4">Top Pages</h2>
          <div className="space-y-3">
            {topPages.map((page, index) => (
              <div
                key={page.page}
                className="flex items-center justify-between py-2 border-b last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium">{page.title}</p>
                    <p className="text-xs text-muted-foreground">{page.page}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Eye className="h-4 w-4" />
                  {page.views.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
