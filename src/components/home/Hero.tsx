import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-xl">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-full mb-4">
            Premium Collection
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Transform Your Space with Quality Tiles
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Discover our extensive range of wall tiles, floor tiles, and outdoor solutions. Free UK delivery on orders over £599.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/shop">
                Shop All Tiles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-white/10 border-white text-white hover:bg-white hover:text-foreground"
            >
              <Link href="/shop/outdoor-tiles">Outdoor Collection</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Promo banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary">
        <div className="container mx-auto px-4 py-3">
          <p className="text-center text-primary-foreground font-medium">
            🚚 FREE UK DELIVERY on orders over £599 | 💰 PRICE MATCH GUARANTEED
          </p>
        </div>
      </div>
    </section>
  )
}
