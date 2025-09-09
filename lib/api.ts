// API client utilities
const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://your-domain.vercel.app/api" : "/api"

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json()

    if (!response.ok) {
      throw new ApiError(response.status, data.message || "An error occurred")
    }

    return data
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    throw new ApiError(500, "Network error occurred")
  }
}

// Product API functions
export const productApi = {
  getAll: (params?: {
    category?: string
    search?: string
    limit?: number
    offset?: number
  }) => {
    const searchParams = new URLSearchParams()
    if (params?.category) searchParams.set("category", params.category)
    if (params?.search) searchParams.set("search", params.search)
    if (params?.limit) searchParams.set("limit", params.limit.toString())
    if (params?.offset) searchParams.set("offset", params.offset.toString())

    const query = searchParams.toString()
    return apiRequest(`/products${query ? `?${query}` : ""}`)
  },

  getById: (id: string) => apiRequest(`/products/${id}`),

  create: (product: any) =>
    apiRequest("/products", {
      method: "POST",
      body: JSON.stringify(product),
    }),

  update: (id: string, product: any) =>
    apiRequest(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    }),

  delete: (id: string) =>
    apiRequest(`/products/${id}`, {
      method: "DELETE",
    }),
}

// Category API functions
export const categoryApi = {
  getAll: () => apiRequest("/categories"),
}

// Order API functions
export const orderApi = {
  getAll: (params?: { email?: string; status?: string }) => {
    const searchParams = new URLSearchParams()
    if (params?.email) searchParams.set("email", params.email)
    if (params?.status) searchParams.set("status", params.status)

    const query = searchParams.toString()
    return apiRequest(`/orders${query ? `?${query}` : ""}`)
  },

  getById: (id: string) => apiRequest(`/orders/${id}`),

  create: (order: any) =>
    apiRequest("/orders", {
      method: "POST",
      body: JSON.stringify(order),
    }),

  updateStatus: (id: string, status: string) =>
    apiRequest(`/orders/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
}

// Review API functions
export const reviewApi = {
  getAll: (params?: { productId?: string; limit?: number }) => {
    const searchParams = new URLSearchParams()
    if (params?.productId) searchParams.set("productId", params.productId)
    if (params?.limit) searchParams.set("limit", params.limit.toString())

    const query = searchParams.toString()
    return apiRequest(`/reviews${query ? `?${query}` : ""}`)
  },

  create: (review: any) =>
    apiRequest("/reviews", {
      method: "POST",
      body: JSON.stringify(review),
    }),
}
