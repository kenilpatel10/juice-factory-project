import { type NextRequest, NextResponse } from "next/server"

type Props = {
  params: { id: string }
}

// Mock orders storage (same as in route.ts)
const mockOrders: any[] = []

// GET /api/orders/[id] - Get a single order
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const order = mockOrders.find((o) => o.id === params.id)

    if (!order) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: order,
      message: "Order retrieved successfully",
    })
  } catch (error) {
    console.error("Error fetching order:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch order" }, { status: 500 })
  }
}

// PATCH /api/orders/[id] - Update order status
export async function PATCH(request: NextRequest, { params }: Props) {
  try {
    const body = await request.json()
    const orderIndex = mockOrders.findIndex((o) => o.id === params.id)

    if (orderIndex === -1) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 })
    }

    // Update the order
    mockOrders[orderIndex] = {
      ...mockOrders[orderIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json({
      success: true,
      data: mockOrders[orderIndex],
      message: "Order updated successfully",
    })
  } catch (error) {
    console.error("Error updating order:", error)
    return NextResponse.json({ success: false, message: "Failed to update order" }, { status: 500 })
  }
}
