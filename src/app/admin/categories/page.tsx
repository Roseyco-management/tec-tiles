"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Plus, Edit, Trash2, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/mock-data"

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Categories</h1>
          <p className="text-muted-foreground">
            Manage your product categories
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-lg border p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <div
            key={category.slug}
            className="bg-white rounded-lg border overflow-hidden group"
          >
            <div className="relative h-40">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{category.name}</h3>
                <Badge variant="outline">{category.productCount} products</Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {category.description}
              </p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                <span className="text-xs text-muted-foreground">Drag to reorder</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
