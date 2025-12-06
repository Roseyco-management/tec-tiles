import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { categories, getAllProducts } from "@/lib/mock-data"
import { ProductCard } from "@/components/product/ProductCard"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Shop All Tiles",
  description: "Browse our complete collection of premium tiles, flooring, and accessories",
}

export default function ShopPage() {
  const allProducts = getAllProducts()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop All Products</h1>
          <p className="text-white/80 max-w-2xl">
            Browse our complete collection of premium tiles, flooring, and accessories.
            Free UK delivery on orders over £599.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/shop/${category.slug}`}
                className="group text-center"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                </div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">{category.productCount} products</p>
              </Link>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
            <p className="text-muted-foreground">{allProducts.length} products</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
