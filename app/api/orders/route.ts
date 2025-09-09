import { type NextRequest, NextResponse } from "next/server"
import type { Order } from "@/lib/db"

// Mock orders storage (replace with real database)
const mockOrders: Order[] = []

// GET /api/orders - Get all orders (admin) or user's orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const status = searchParams.get("status")

    let filteredOrders = [...mockOrders]

    // Filter by email (for user's orders)
    if (email) {
      filteredOrders = filteredOrders.filter((order) => order.customerEmail === email)
    }

    // Filter by status
    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    return NextResponse.json({
      success: true,
      data: filteredOrders,
      message: "Orders retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch orders" }, { status: 500 })
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["customerEmail", "customerName", "items", "total"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ success: false, message: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    const newOrder: Order = {
      id: `order-${Date.now()}`,
      customerEmail: body.customerEmail,
      customerName: body.customerName,
      items: body.items,
      total: body.total,
      status: "pending",
      createdAt: new Date().toISOString(),
      deliveryAddress: body.deliveryAddress,
      phone: body.phone,
    }

    // In a real app, save to database
    mockOrders.push(newOrder)

    // Send confirmation email (implement with your email service)
    // await sendOrderConfirmation(newOrder)

    return NextResponse.json(
      {
        success: true,
        data: newOrder,
        message: "Order created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ success: false, message: "Failed to create order" }, { status: 500 })
  }
}
