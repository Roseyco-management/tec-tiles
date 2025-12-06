"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
            <p className="text-muted-foreground mb-6">
              We&apos;ve sent password reset instructions to your email address.
              Please check your inbox and follow the link.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Didn&apos;t receive the email? Check your spam folder or{" "}
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary hover:underline"
              >
                try again
              </button>
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/account/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-muted/30 py-12">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <Link
            href="/account/login"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Sign In
          </Link>

          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Reset Your Password</h1>
            <p className="text-muted-foreground">
              Enter your email address and we&apos;ll send you instructions to
              reset your password.
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <Label htmlFor="email">Email Address</Label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Send Reset Instructions
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Remember your password?{" "}
            <Link
              href="/account/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
