// Database configuration and utilities
export interface Product {
  id: string
  name: string
  description: string
  price: string
  mediumPrice?: string
  largePrice?: string
  image: string
  category: string
  ingredients: string[]
  nutrition: {
    calories: number
    protein: string
    carbs: string
    fiber: string
    sugar: string
    fat: string
    sodium: string
    vitamin_c?: string
    vitamin_a?: string
    potassium?: string
    iron?: string
    calcium?: string
    omega_3?: string
    antioxidants?: string
    nitrates?: string
    vitamin_k?: string
    vitamin_e?: string
    folate?: string
  }
  prepTime: string
  servings: number
  rating: number
  reviews: number
  isNew: boolean

  benefits: string[]
  allergens: string[]
  createdAt?: string
  updatedAt?: string
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  count: number
}

export interface Order {
  id: string
  customerEmail: string
  customerName: string
  items: OrderItem[]
  total: number
  status: "pending" | "confirmed" | "preparing" | "ready" | "delivered"
  createdAt: string
  deliveryAddress?: string
  phone?: string
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  size: string
  price: number
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  comment: string
  createdAt: string
}

// Mock data for development (replace with real database)
export const mockProducts: Product[] = [
  {
    id: "sc-remedy",
    name: "SC-Remedy",
    description:
      "Our signature immune-boosting blend that combines the power of turmeric, ginger, and fresh citrus. This golden elixir is designed to support your body's natural defenses and provide sustained energy throughout the day.",
    price: "$7.20",
    mediumPrice: "$8.50",
    largePrice: "$9.00",
    image: "/images/green-juice.jpg",
    category: "JF Super Charger",
    ingredients: ["Lemon", "Turmeric", "Ginger", "Carrot", "Orange"],
    nutrition: {
      calories: 95,
      protein: "2g",
      carbs: "22g",
      fiber: "3g",
      sugar: "18g",
      fat: "0.5g",
      sodium: "35mg",
      vitamin_c: "120mg",
      vitamin_a: "8500IU",
      potassium: "280mg",
    },
    prepTime: "5 minutes",
    servings: 1,
    rating: 4.9,
    reviews: 234,
    isNew: true,

    benefits: ["Immune Support", "Anti-inflammatory", "Energy Boost", "Digestive Health"],
    allergens: ["None"],
  },
  {
    id: "j1-caribbean-crush",
    name: "J1-Caribbean Crush",
    description:
      "Transport yourself to a tropical paradise with this exotic blend of mango, pineapple, and dragon fruit. A refreshing escape that's packed with vitamins and natural enzymes.",
    price: "$7.20",
    mediumPrice: "$8.50",
    largePrice: "$9.00",
    image: "/images/tropical-juice.jpg",
    category: "Fruits",
    ingredients: ["Mango", "Pineapple", "Dragon Fruit", "Orange"],
    nutrition: {
      calories: 140,
      protein: "2g",
      carbs: "35g",
      fiber: "4g",
      sugar: "28g",
      fat: "0.8g",
      sodium: "10mg",
      vitamin_c: "95mg",
      vitamin_a: "1200IU",
      potassium: "350mg",
    },
    prepTime: "5 minutes",
    servings: 1,
    rating: 4.8,
    reviews: 312,
    isNew: false,

    benefits: ["Tropical Vitamins", "Digestive Enzymes", "Antioxidant Rich", "Natural Energy"],
    allergens: ["None"],
  },
  // Add more products as needed
]

export const mockCategories: Category[] = [
  { id: "all", name: "All Items", description: "All our products", image: "", count: 20 },
  { id: "juices", name: "Fresh Juices", description: "Cold-pressed fresh juices", image: "", count: 8 },
  { id: "greens", name: "Green Juices", description: "Nutrient-packed green juices", image: "", count: 3 },
  { id: "smoothies", name: "Smoothies", description: "Creamy and delicious smoothies", image: "", count: 3 },
  { id: "wraps", name: "Wraps", description: "Healthy and filling wraps", image: "", count: 3 },
  { id: "salads", name: "Salads", description: "Fresh and nutritious salads", image: "", count: 3 },
]
