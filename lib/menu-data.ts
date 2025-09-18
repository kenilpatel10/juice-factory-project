import menuData from "@/data/menu-data.json"
import type { Product, Category } from "@/lib/db"

// Type-safe access to menu data
export const categories: Category[] = menuData.categories.map((cat) => ({
  ...cat,
  count: menuData.products.filter((product) => product.category === cat.id).length,
}))

export const products: Product[] = menuData.products.map((product) => ({
  ...product,
  // Ensure all required fields are present
  servings: product.servings || 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}))

// Helper functions for filtering and searching
export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "all") {
    return products
  }
  return products.filter((product) => product.category === categoryId)
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm)) ||
      product.benefits.some((benefit) => benefit.toLowerCase().includes(searchTerm)),
  )
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isNew).slice(0, 6)
}

export function getProductsByIds(ids: string[]): Product[] {
  return products.filter((product) => ids.includes(product.id))
}

// Price utilities
export function getProductPrice(product: Product, size = "small"): number {
  let priceStr: string | undefined

  if (size === "medium" && product.mediumPrice) {
    priceStr = product.mediumPrice
  } else if (size === "large" && product.largePrice) {
    priceStr = product.largePrice
  } else {
    priceStr = product.price
  }

  return Number.parseFloat(priceStr?.replace("$", "") || "0")
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

// Category mapping for better organization
export const categoryMapping = {
  fruits: "Fresh Fruit Juices",
  greens: "Green Juices",
  detox: "Detox Juices",
  supercharger: "JF Super Charger",
  milkshakes: "Milkshakes",
  smoothies: "Smoothies",
  acai: "Acai Frappes",
  wraps: "Healthy Wraps",
  salads: "Gourmet Salads",
}

// Ingredients data
export const ingredientsData = [
  {
    id: 1,
    name: "Quality Kale",
    description: "Nutrient-dense superfood packed with vitamins A, C, and K",
    benefits: ["High in antioxidants", "Supports immune system", "Rich in iron"],
    image: "/images/ingredients/kale.webp",
    category: "Leafy Greens",
  },
  {
    id: 2,
    name: "Fresh Ginger",
    description: "Anti-inflammatory root with digestive benefits",
    benefits: ["Reduces inflammation", "Aids digestion", "Boosts immunity"],
    image: "/images/ingredients/ginger.webp",
    category: "Roots & Spices",
  },
  {
    id: 3,
    name: "Quality Spinach",
    description: "Iron-rich leafy green with folate and vitamins",
    benefits: ["High in iron", "Rich in folate", "Supports eye health"],
    image: "/images/ingredients/spinach.webp",
    category: "Leafy Greens",
  },
  {
    id: 4,
    name: "Fresh Lemon",
    description: "Vitamin C powerhouse with detoxifying properties",
    benefits: ["High in vitamin C", "Supports detox", "Alkalizing effect"],
    image: "/images/ingredients/lemon.webp",
    category: "Citrus",
  },
  {
    id: 5,
    name: "Quality Apple",
    description: "Fiber-rich fruit with natural sweetness",
    benefits: ["High in fiber", "Natural energy", "Supports heart health"],
    image: "/images/ingredients/apple.webp",
    category: "Fruits",
  },
  {
    id: 6,
    name: "Fresh Cucumber",
    description: "Hydrating vegetable with cooling properties",
    benefits: ["Hydrating", "Low calorie", "Anti-inflammatory"],
    image: "/images/ingredients/cucumber.webp",
    category: "Vegetables",
  },
]

// Debug function to check data
export function debugProducts() {
  console.log("Total products:", products.length)
  console.log(
    "Categories:",
    categories.map((c) => `${c.id}: ${c.count} products`),
  )
  console.log(
    "Sample product IDs:",
    products.slice(0, 5).map((p) => p.id),
  )
}
