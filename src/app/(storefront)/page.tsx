import { Hero } from "@/components/home/Hero"
import { FeaturedCategories } from "@/components/home/FeaturedCategories"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import { Features } from "@/components/home/Features"
import { CTASection } from "@/components/home/CTASection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedCategories />
      <FeaturedProducts />
      <CTASection />
    </>
  )
}
