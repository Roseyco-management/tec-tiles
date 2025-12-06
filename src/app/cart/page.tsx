"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/mock-data"

// Mock cart items for demo
const initialCartItems = [
  { ...products[0], quantity: 5 },
  { ...products[4], quantity: 3 },
  { ...products[8], quantity: 2 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal >= 599 ? 0 : 49.99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">
          Looks like you haven&apos;t added any items yet.
        </p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 md:p-6 flex gap-4"
              >
                <Link href={`/product/${item.slug}`} className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.categoryName}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-12 text-center">{item.quantity} m²</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        £{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        £{item.price.toFixed(2)}/m²
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/shop"
              className="inline-flex items-center text-sm text-primary hover:underline mt-4"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 p-2 rounded">
                    <Truck className="h-4 w-4" />
                    <span>
                      Add £{(599 - subtotal).toFixed(2)} more for FREE delivery
                    </span>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              {/* Promo Code */}
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">£{total.toFixed(2)}</span>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Taxes calculated at checkout
              </p>

              {/* Trust badges */}
              <div className="flex justify-center gap-4 mt-6 pt-4 border-t">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Secure</p>
                  <p className="text-xs font-medium">Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Easy</p>
                  <p className="text-xs font-medium">Returns</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Quality</p>
                  <p className="text-xs font-medium">Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
