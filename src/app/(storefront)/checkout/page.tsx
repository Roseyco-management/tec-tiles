"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CreditCard, Lock, Truck, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { products } from "@/lib/mock-data"

// Mock cart items matching cart page
const cartItems = [
  { ...products[0], quantity: 5 },
  { ...products[4], quantity: 3 },
  { ...products[8], quantity: 2 },
]

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment">("shipping")
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [deliveryMethod, setDeliveryMethod] = useState("standard")

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal >= 599 ? 0 : deliveryMethod === "express" ? 79.99 : 49.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/cart" className="hover:text-foreground">
              Cart
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Checkout</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`flex items-center gap-2 ${
                  step === "shipping" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === "shipping"
                      ? "bg-primary text-white"
                      : "bg-primary/20 text-primary"
                  }`}
                >
                  1
                </div>
                <span className="font-medium">Shipping</span>
              </div>
              <div className="flex-1 h-px bg-border" />
              <div
                className={`flex items-center gap-2 ${
                  step === "payment" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === "payment"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <span className="font-medium">Payment</span>
              </div>
            </div>

            {step === "shipping" ? (
              <>
                {/* Contact Information */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+44 7XXX XXX XXX"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-muted-foreground"
                      >
                        Keep me updated with news and exclusive offers
                      </label>
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Company name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address1">Address Line 1</Label>
                      <Input
                        id="address1"
                        placeholder="123 Main Street"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                      <Input
                        id="address2"
                        placeholder="Apartment, suite, etc."
                        className="mt-1"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="London" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="county">County</Label>
                        <Input
                          id="county"
                          placeholder="Greater London"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postcode">Postcode</Label>
                        <Input id="postcode" placeholder="SW1A 1AA" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Method */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Delivery Method</h2>
                  <RadioGroup
                    value={deliveryMethod}
                    onValueChange={setDeliveryMethod}
                    className="space-y-3"
                  >
                    <div
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                        deliveryMethod === "standard"
                          ? "border-primary bg-primary/5"
                          : ""
                      }`}
                      onClick={() => setDeliveryMethod("standard")}
                    >
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value="standard" id="standard" />
                        <div>
                          <Label htmlFor="standard" className="font-medium cursor-pointer">
                            Standard Delivery
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            5-7 business days
                          </p>
                        </div>
                      </div>
                      <span className="font-medium">
                        {subtotal >= 599 ? "FREE" : "£49.99"}
                      </span>
                    </div>
                    <div
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                        deliveryMethod === "express"
                          ? "border-primary bg-primary/5"
                          : ""
                      }`}
                      onClick={() => setDeliveryMethod("express")}
                    >
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value="express" id="express" />
                        <div>
                          <Label htmlFor="express" className="font-medium cursor-pointer">
                            Express Delivery
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            2-3 business days
                          </p>
                        </div>
                      </div>
                      <span className="font-medium">£79.99</span>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/cart">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Back to Cart
                    </Link>
                  </Button>
                  <Button onClick={() => setStep("payment")}>
                    Continue to Payment
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Billing Address */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Billing Address</h2>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="sameAsShipping"
                      checked={sameAsShipping}
                      onCheckedChange={(checked) =>
                        setSameAsShipping(checked as boolean)
                      }
                    />
                    <label htmlFor="sameAsShipping" className="text-sm">
                      Same as shipping address
                    </label>
                  </div>
                  {!sameAsShipping && (
                    <div className="grid gap-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="billingFirstName">First Name</Label>
                          <Input
                            id="billingFirstName"
                            placeholder="John"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingLastName">Last Name</Label>
                          <Input
                            id="billingLastName"
                            placeholder="Smith"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="billingAddress1">Address Line 1</Label>
                        <Input
                          id="billingAddress1"
                          placeholder="123 Main Street"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="billingCity">City</Label>
                          <Input
                            id="billingCity"
                            placeholder="London"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingCounty">County</Label>
                          <Input
                            id="billingCounty"
                            placeholder="Greater London"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="billingPostcode">Postcode</Label>
                          <Input
                            id="billingPostcode"
                            placeholder="SW1A 1AA"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <span className="font-medium">Credit / Debit Card</span>
                    </div>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM / YY" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          placeholder="John Smith"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep("shipping")}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back to Shipping
                  </Button>
                  <Button size="lg">
                    <Lock className="h-4 w-4 mr-2" />
                    Place Order - £{total.toFixed(2)}
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} m² × £{item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      £{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? "FREE" : `£${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">£{total.toFixed(2)}</span>
              </div>

              <p className="text-xs text-muted-foreground mt-2">
                Including VAT where applicable
              </p>

              {/* Trust Signals */}
              <div className="mt-6 pt-4 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>
                    {subtotal >= 599
                      ? "Free delivery on this order"
                      : "Free delivery over £599"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
