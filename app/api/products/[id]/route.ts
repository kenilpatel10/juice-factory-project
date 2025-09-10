import { type NextRequest, NextResponse } from "next/server"
import { getProductById } from "@/lib/menu-data"

// Mock products array (replace with your actual data source)
const mockProducts = [
  {
    id: "1",
    name: "Product 1",
    description: "Description for Product 1",
    price: 10,
    imageUrl: "url1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description for Product 2",
    price: 20,
    imageUrl: "url2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// GET /api/products/[id] - Get a single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const product = getProductById(id)

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: product,
      message: "Product retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch product" }, { status: 500 })
  }
}

// PUT /api/products/[id] - Update a product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const productIndex = mockProducts.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    // Update the product
    mockProducts[productIndex] = {
      ...mockProducts[productIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: mockProducts[productIndex],
      message: "Product updated successfully",
    })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ success: false, message: "Failed to update product" }, { status: 500 })
  }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const productIndex = mockProducts.findIndex((p) => p.id === id)

    if (productIndex === -1) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    // Remove the product
    const deletedProduct = mockProducts.splice(productIndex, 1)[0]

    return NextResponse.json({
      success: true,
      data: deletedProduct,
      message: "Product deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ success: false, message: "Failed to delete product" }, { status: 500 })
  }
}
