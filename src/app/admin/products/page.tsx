"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { products } from "@/lib/mock-data"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== id))
    } else {
      setSelectedProducts([...selectedProducts, id])
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>All Categories</option>
              <option>Wall Tiles</option>
              <option>Floor Tiles</option>
              <option>Outdoor Tiles</option>
              <option>PVC Panels</option>
              <option>SPC Flooring</option>
              <option>Accessories</option>
            </select>
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>All Stock</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More
            </Button>
          </div>
        </div>

        {selectedProducts.length > 0 && (
          <div className="flex items-center gap-4 mt-4 pt-4 border-t">
            <span className="text-sm text-muted-foreground">
              {selectedProducts.length} selected
            </span>
            <Button variant="outline" size="sm">
              Bulk Edit
            </Button>
            <Button variant="destructive" size="sm">
              Delete Selected
            </Button>
          </div>
        )}
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="p-4 w-12">
                  <Checkbox
                    checked={selectedProducts.length === filteredProducts.length}
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th className="text-left p-4 text-sm font-medium">Product</th>
                <th className="text-left p-4 text-sm font-medium">SKU</th>
                <th className="text-left p-4 text-sm font-medium">Category</th>
                <th className="text-left p-4 text-sm font-medium">Price</th>
                <th className="text-left p-4 text-sm font-medium">Stock</th>
                <th className="text-left p-4 text-sm font-medium">Status</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b last:border-0 hover:bg-muted/20">
                  <td className="p-4">
                    <Checkbox
                      checked={selectedProducts.includes(product.id)}
                      onCheckedChange={() => toggleSelect(product.id)}
                    />
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="font-medium text-sm hover:text-primary line-clamp-1"
                        >
                          {product.name}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {product.sku}
                  </td>
                  <td className="p-4 text-sm">{product.categoryName}</td>
                  <td className="p-4">
                    <p className="font-medium">£{product.price.toFixed(2)}</p>
                    {product.compareAtPrice && (
                      <p className="text-xs text-muted-foreground line-through">
                        £{product.compareAtPrice.toFixed(2)}
                      </p>
                    )}
                  </td>
                  <td className="p-4">
                    <p className="text-sm">{product.stock} m²</p>
                  </td>
                  <td className="p-4">
                    {product.stock > 10 ? (
                      <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                    ) : product.stock > 0 ? (
                      <Badge className="bg-orange-100 text-orange-800">Low Stock</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
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
            Showing 1-{filteredProducts.length} of {products.length} products
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
