"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Star, Check, X, MessageSquare, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/mock-data"

// Mock reviews
const reviews = [
  {
    id: "1",
    product: products[0],
    customer: "John Smith",
    email: "john@example.com",
    rating: 5,
    title: "Excellent quality tiles",
    content: "These tiles are absolutely stunning. The quality is exceptional and they look even better in person than in the photos. Installation was straightforward and the finish is perfect.",
    date: "Dec 5, 2024",
    status: "pending",
    verified: true,
  },
  {
    id: "2",
    product: products[2],
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    rating: 4,
    title: "Great tiles, slightly delayed delivery",
    content: "The tiles themselves are great quality and look fantastic in our bathroom. Only reason for 4 stars is the delivery took a bit longer than expected, but customer service kept us informed throughout.",
    date: "Dec 4, 2024",
    status: "pending",
    verified: true,
  },
  {
    id: "3",
    product: products[4],
    customer: "Mike Johnson",
    email: "mike@example.com",
    rating: 5,
    title: "Perfect for our kitchen",
    content: "We ordered these for our kitchen renovation and couldn't be happier. The pattern is beautiful and really adds character to the space.",
    date: "Dec 3, 2024",
    status: "approved",
    verified: true,
  },
  {
    id: "4",
    product: products[1],
    customer: "Emma Brown",
    email: "emma@example.com",
    rating: 3,
    title: "Good but some tiles chipped",
    content: "Overall good quality tiles but a few arrived with small chips on the edges. Customer service offered a replacement which was helpful.",
    date: "Dec 2, 2024",
    status: "pending",
    verified: false,
  },
]

const renderStars = (rating: number) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="bg-green-100 text-green-800">Approved</Badge>
    case "rejected":
      return <Badge className="bg-red-100 text-red-800">Rejected</Badge>
    default:
      return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>
  }
}

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || review.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const pendingCount = reviews.filter((r) => r.status === "pending").length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Reviews</h1>
          <p className="text-muted-foreground">
            Manage customer reviews
          </p>
        </div>
        {pendingCount > 0 && (
          <Badge variant="outline" className="text-orange-600 border-orange-600">
            {pendingCount} pending review{pendingCount !== 1 ? "s" : ""}
          </Badge>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Total Reviews</p>
          <p className="text-2xl font-bold">156</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Average Rating</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">4.6</p>
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">5 Star Reviews</p>
          <p className="text-2xl font-bold text-green-600">89</p>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Response Rate</p>
          <p className="text-2xl font-bold">92%</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg border p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Product Image */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                  <Image
                    src={review.product.images[0]}
                    alt={review.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {review.product.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {renderStars(review.rating)}
                      <span className="text-sm font-medium">{review.title}</span>
                    </div>
                  </div>
                  {getStatusBadge(review.status)}
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  {review.content}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="font-medium">{review.customer}</span>
                  <span className="text-muted-foreground">{review.email}</span>
                  <span className="text-muted-foreground">{review.date}</span>
                  {review.verified && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      Verified Purchase
                    </Badge>
                  )}
                </div>
              </div>

              {/* Actions */}
              {review.status === "pending" && (
                <div className="flex md:flex-col gap-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                </div>
              )}
              {review.status === "approved" && (
                <div className="flex md:flex-col gap-2">
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                  <Button size="sm" variant="ghost" className="text-red-600">
                    <Flag className="h-4 w-4 mr-1" />
                    Flag
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
