import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">Join Our Newsletter</h3>
              <p className="text-sm text-white/70">
                Get the latest offers and inspiration straight to your inbox
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 max-w-xs"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt={siteConfig.name}
              width={120}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/70 mb-4">
              Premium tiles and flooring for your home. Quality products at competitive prices with expert advice.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop/wall-tiles" className="text-white/70 hover:text-white transition-colors">
                  Wall Tiles
                </Link>
              </li>
              <li>
                <Link href="/shop/floor-tiles" className="text-white/70 hover:text-white transition-colors">
                  Floor Tiles
                </Link>
              </li>
              <li>
                <Link href="/shop/outdoor-tiles" className="text-white/70 hover:text-white transition-colors">
                  Outdoor Tiles
                </Link>
              </li>
              <li>
                <Link href="/shop/pvc-panels" className="text-white/70 hover:text-white transition-colors">
                  PVC Panels
                </Link>
              </li>
              <li>
                <Link href="/shop/spc-flooring" className="text-white/70 hover:text-white transition-colors">
                  SPC Flooring
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="text-white/70 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-white/70 hover:text-white transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/70 hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone}`} className="text-white/70 hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                  <p className="text-white/50 text-xs">Mon-Fri 9am-5pm</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-white/70">
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.city}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
