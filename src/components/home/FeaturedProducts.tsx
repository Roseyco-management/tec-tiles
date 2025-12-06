import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

// Temporary mock data - will be replaced with Supabase data
const products = [
  {
    id: "1",
    name: "Mosaica White Marble Effect",
    slug: "mosaica-white-marble-effect",
    price: 24.99,
    compareAtPrice: 29.99,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "Wall Tiles",
  },
  {
    id: "2",
    name: "Oak Wood Effect Floor Tile",
    slug: "oak-wood-effect",
    price: 28.99,
    compareAtPrice: 34.99,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    category: "Floor Tiles",
  },
  {
    id: "3",
    name: "Metro Grey Gloss",
    slug: "metro-grey-gloss",
    price: 18.99,
    compareAtPrice: null,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    category: "Wall Tiles",
  },
  {
    id: "4",
    name: "Porcelain Paving Grey",
    slug: "porcelain-paving-grey",
    price: 34.99,
    compareAtPrice: null,
    image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
    category: "Outdoor Tiles",
  },
  {
    id: "5",
    name: "Slate Grey Matt",
    slug: "slate-grey-matt",
    price: 26.99,
    compareAtPrice: null,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    category: "Floor Tiles",
  },
  {
    id: "6",
    name: "Marble Nero",
    slug: "marble-nero",
    price: 42.99,
    compareAtPrice: 49.99,
    image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&q=80",
    category: "Floor Tiles",
  },
  {
    id: "7",
    name: "Brick White Matt",
    slug: "brick-white-matt",
    price: 21.99,
    compareAtPrice: null,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    category: "Wall Tiles",
  },
  {
    id: "8",
    name: "SPC Oak Natural",
    slug: "spc-oak-natural",
    price: 22.99,
    compareAtPrice: 27.99,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    category: "SPC Flooring",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Our most popular tiles and flooring</p>
          </div>
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <Link href={`/product/${product.slug}`} className="block relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.compareAtPrice && (
                  <Badge className="absolute top-2 left-2 bg-primary">
                    Sale
                  </Badge>
                )}
              </Link>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <Link href={`/product/${product.slug}`}>
                  <h3 className="font-medium text-sm md:text-base line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-lg">£{product.price.toFixed(2)}</span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      £{product.compareAtPrice.toFixed(2)}
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
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild>
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
