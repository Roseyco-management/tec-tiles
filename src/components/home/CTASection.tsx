import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, BadgePercent, Sparkles } from "lucide-react"

const ctaCards = [
  {
    icon: FileText,
    title: "Request A Catalogue",
    description: "Get our free catalogue delivered to your door",
    href: "/catalogue",
    buttonText: "Request Now",
  },
  {
    icon: BadgePercent,
    title: "Price Match Guarantee",
    description: "Found it cheaper? We'll match the price",
    href: "/price-match",
    buttonText: "Learn More",
  },
  {
    icon: Sparkles,
    title: "New Arrivals",
    description: "Check out our latest tile collections",
    href: "/shop?sort=newest",
    buttonText: "Shop New",
  },
]

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {ctaCards.map((card) => (
            <div
              key={card.title}
              className="bg-muted/50 rounded-lg p-6 text-center hover:bg-muted transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted-foreground mb-4">{card.description}</p>
              <Button variant="outline" asChild>
                <Link href={card.href}>{card.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
