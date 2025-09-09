import { type NextRequest, NextResponse } from "next/server"
import { categories } from "@/lib/menu-data"

// GET /api/categories - Get all categories with product counts
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: categories,
      message: "Categories retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch categories" }, { status: 500 })
  }
}
