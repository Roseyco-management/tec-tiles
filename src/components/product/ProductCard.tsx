"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    price: number
    compareAtPrice: number | null
    images: string[]
    categoryName: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <div className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.slug}`} className="block relative aspect-square">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isOnSale && (
          <Badge className="absolute top-2 left-2 bg-primary">Sale</Badge>
        )}
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.categoryName}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-medium text-sm md:text-base line-clamp-2 hover:text-primary transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-lg">£{product.price.toFixed(2)}</span>
          {isOnSale && (
            <span className="text-sm text-muted-foreground line-through">
              £{product.compareAtPrice?.toFixed(2)}
            </span>
          )}
          <span className="text-xs text-muted-foreground">/m²</span>
        </div>
        <Button size="sm" className="w-full mt-3">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
