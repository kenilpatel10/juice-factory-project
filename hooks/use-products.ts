"use client"

import { useState, useEffect } from "react"
import { productApi, type ApiError } from "@/lib/api"

export function useProducts(params?: {
  category?: string
  search?: string
  limit?: number
  offset?: number
}) {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchProducts() {
    try {
      setLoading(true)
      setError(null)
      const response = await productApi.getAll(params)
      setProducts((response as any).data)
    } catch (err) {
      const error = err as ApiError
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [JSON.stringify(params)])

  return { products, loading, error, refetch: () => fetchProducts() }
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return

      try {
        setLoading(true)
        setError(null)
        const response = await productApi.getById(id)
        setProduct((response as any).data)
      } catch (err) {
        const error = err as ApiError
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}
