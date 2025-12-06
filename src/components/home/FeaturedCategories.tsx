import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Wall Tiles",
    slug: "wall-tiles",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    description: "Stylish wall tiles for any room",
  },
  {
    name: "Floor Tiles",
    slug: "floor-tiles",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    description: "Durable flooring solutions",
  },
  {
    name: "Outdoor Tiles",
    slug: "outdoor-tiles",
    image: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&q=80",
    description: "Weather-resistant outdoor tiles",
  },
  {
    name: "PVC Panels",
    slug: "pvc-panels",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    description: "Easy-install wall panels",
  },
  {
    name: "SPC Flooring",
    slug: "spc-flooring",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description: "Waterproof SPC flooring",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80",
    description: "Adhesives, grout & more",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of premium tiles and flooring solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                  {category.name}
                </h3>
                <span className="inline-flex items-center text-white/80 text-xs group-hover:text-primary transition-colors">
                  Shop Now
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
