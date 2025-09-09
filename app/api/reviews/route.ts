import { type NextRequest, NextResponse } from "next/server"
import type { Review } from "@/lib/db"

// Mock reviews storage (replace with real database)
const mockReviews: Review[] = [
  {
    id: "review-1",
    productId: "sc-remedy",
    customerName: "Sarah Johnson",
    rating: 5,
    comment: "Amazing taste and I feel so energized after drinking this!",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "review-2",
    productId: "j1-caribbean-crush",
    customerName: "Mike Chen",
    rating: 5,
    comment: "Tastes like vacation in a bottle. Absolutely love it!",
    createdAt: "2024-01-14T15:45:00Z",
  },
]

// GET /api/reviews - Get reviews with optional product filter
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get("productId")
    const limit = searchParams.get("limit")

    let filteredReviews = [...mockReviews]

    // Filter by product
    if (productId) {
      filteredReviews = filteredReviews.filter((review) => review.productId === productId)
    }

    // Apply limit
    if (limit) {
      filteredReviews = filteredReviews.slice(0, Number.parseInt(limit))
    }

    // Sort by date (newest first)
    filteredReviews.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({
      success: true,
      data: filteredReviews,
      message: "Reviews retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch reviews" }, { status: 500 })
  }
}

// POST /api/reviews - Create a new review
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["productId", "customerName", "rating", "comment"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Validate rating
    if (body.rating < 1 || body.rating > 5) {
      return NextResponse.json({ success: false, message: "Rating must be between 1 and 5" }, { status: 400 })
    }

    const newReview: Review = {
      id: `review-${Date.now()}`,
      productId: body.productId,
      customerName: body.customerName,
      rating: body.rating,
      comment: body.comment,
      createdAt: new Date().toISOString(),
    }

    // In a real app, save to database
    mockReviews.push(newReview)

    return NextResponse.json(
      {
        success: true,
        data: newReview,
        message: "Review created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating review:", error)
    return NextResponse.json({ success: false, message: "Failed to create review" }, { status: 500 })
  }
}
