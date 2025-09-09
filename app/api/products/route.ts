import { NextResponse } from "next/server"
import { products, categories, getProductsByCategory, searchProducts } from "@/lib/menu-data"

// GET /api/products - Get all products with optional filtering
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const limit = searchParams.get("limit")
    const offset = searchParams.get("offset")

    let filteredProducts = products

    // Filter by category
    if (category && category !== "all") {
      filteredProducts = getProductsByCategory(category)
    }

    // Filter by search query
    if (search) {
      filteredProducts = searchProducts(search).filter(
        (product) => !category || category === "all" || product.category === category,
      )
    }

    // Apply pagination
    const limitNum = limit ? Number.parseInt(limit) : undefined
    const offsetNum = offset ? Number.parseInt(offset) : 0

    if (limitNum) {
      filteredProducts = filteredProducts.slice(offsetNum, offsetNum + limitNum)
    }

    return NextResponse.json({
      success: true,
      data: {
        products: filteredProducts,
        categories: categories,
        total: filteredProducts.length,
        pagination: {
          limit: limitNum,
          offset: offsetNum,
          hasMore: limitNum ? offsetNum + limitNum < products.length : false,
        },
      },
      message: "Products retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 })
  }
}
