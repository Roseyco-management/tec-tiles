import { Truck, BadgeCheck, Headphones, CreditCard } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free UK delivery on orders over £599",
  },
  {
    icon: BadgeCheck,
    title: "Price Match",
    description: "We'll match any like-for-like price",
  },
  {
    icon: Headphones,
    title: "Expert Advice",
    description: "Free professional guidance",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
]

export function Features() {
  return (
    <section className="py-12 bg-muted/50 border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
