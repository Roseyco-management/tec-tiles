import { Phone, Mail, Truck } from "lucide-react"
import { siteConfig } from "@/config/site"

export function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-sm">
          {/* Promo message */}
          <div className="flex items-center gap-2 font-medium">
            <Truck className="h-4 w-4" />
            <span>{siteConfig.features[0]}</span>
          </div>

          {/* Contact info */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
