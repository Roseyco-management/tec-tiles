"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Minus, Plus, ShoppingCart, Truck, Shield, RotateCcw, Heart } from "lucide-react"
import { getProductBySlug, getProductsByCategory, products } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product/ProductCard"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Unwrap params - in a real app this would use React.use() or be a server component
  const slug = (params as unknown as { slug: string }).slug
  const product = products.find(p => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price
  const discount = isOnSale
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-foreground">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/shop/${product.category}`} className="hover:text-foreground">
              {product.categoryName}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {isOnSale && (
                <Badge className="absolute top-4 left-4 bg-primary text-lg px-3 py-1">
                  -{discount}% OFF
                </Badge>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === idx ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Link
                href={`/shop/${product.category}`}
                className="text-sm text-primary hover:underline"
              >
                {product.categoryName}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">£{product.price.toFixed(2)}</span>
              {isOnSale && (
                <span className="text-xl text-muted-foreground line-through">
                  £{product.compareAtPrice?.toFixed(2)}
                </span>
              )}
              <span className="text-muted-foreground">/m²</span>
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <Separator className="my-6" />

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Quantity (m²)</label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center border rounded-md py-2"
                    min="1"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Total:</span>
                <span className="font-bold text-foreground text-lg">
                  £{(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Stock status */}
            <p className="text-sm mb-6">
              {product.stock > 10 ? (
                <span className="text-green-600">✓ In stock - ready to ship</span>
              ) : product.stock > 0 ? (
                <span className="text-orange-600">Only {product.stock} left in stock</span>
              ) : (
                <span className="text-red-600">Out of stock</span>
              )}
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Free Delivery</p>
                <p className="text-xs text-muted-foreground">Over £599</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Price Match</p>
                <p className="text-xs text-muted-foreground">Guaranteed</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30 days</p>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Specifications */}
            <div>
              <h3 className="font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
