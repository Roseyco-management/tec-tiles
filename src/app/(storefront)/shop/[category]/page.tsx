import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, SlidersHorizontal } from "lucide-react"
import { categories, getProductsByCategory, getCategoryBySlug } from "@/lib/mock-data"
import { ProductCard } from "@/components/product/ProductCard"
import { Button } from "@/components/ui/button"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return { title: "Category Not Found" }
  }

  return {
    title: category.name,
    description: category.description,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(categorySlug)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative h-64 md:h-80 flex items-center"
        style={{
          backgroundImage: `url('${category.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/shop" className="hover:text-white">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {category.name}
          </h1>
          <p className="text-white/80 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b">
          <p className="text-muted-foreground">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <select className="border rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found in this category.</p>
            <Button asChild>
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Browse Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories
              .filter((c) => c.slug !== categorySlug)
              .slice(0, 6)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop/${cat.slug}`}
                  className="group p-4 border rounded-lg hover:border-primary transition-colors text-center"
                >
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cat.productCount} products</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
