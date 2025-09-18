"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Users, Heart, Star, Leaf, Shield, Zap, Award } from "lucide-react"
import IngredientsShowcase from "@/components/ingredients-showcase"
import { getProductById } from "@/lib/menu-data"
import ContactButtons from "@/components/contact-buttons"
import ProductDetailSkeleton from "@/components/skeletons/product-detail-skeleton"
import { useProductLoading } from "@/hooks/use-loading"

type Props = {
  params: Promise<{ slug: string }>
}

export default function ProductPage({ params }: Props) {
  const [product, setProduct] = useState<any>(null)
  const [selectedSize, setSelectedSize] = useState("small")
  const [isLiked, setIsLiked] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const { isLoading } = useProductLoading(2000)

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)

    // Resolve params promise and load product data
    params.then((resolvedParams) => {
      const timer = setTimeout(() => {
        const productData = getProductById(resolvedParams.slug)
        setProduct(productData)
      }, 1800) // Load data slightly before loading completes

      return () => clearTimeout(timer)
    })
  }, [params])

  const getCurrentPrice = () => {
    if (!product) return "$0.00"

    switch (selectedSize) {
      case "medium":
        return product.mediumPrice || product.price
      case "large":
        return product.largePrice || product.mediumPrice || product.price
      default:
        return product.price
    }
  }

  if (isLoading) {
    return <ProductDetailSkeleton />
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center animate-fade-in-up max-w-md mx-auto px-6">
          <div className="text-8xl mb-6">🔍</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">The product you're looking for doesn't exist.</p>
          <Link
            href="/menu"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn-primary inline-block"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Modern Header with Breadcrumb */}
      <div className="sticky top-20 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-purple-100 dark:border-purple-800/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/menu"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="btn-back group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                Back to Menu
              </Link>
              <div className="hidden md:flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Menu</span>
                <span className="mx-2">/</span>
                <span className="text-purple-600 dark:text-purple-400 font-medium">{product.name}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-purple-100 dark:border-purple-800/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              >
                <Heart
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-300 ${
                    isLiked ? "text-red-500 fill-current" : "text-gray-600 dark:text-gray-300"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Product Image Section */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left">
            {/* Main Image - Optimized for Portrait */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20">
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl sm:rounded-3xl"
                  priority
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-4 sm:top-8 left-4 sm:left-8 flex flex-col gap-2 sm:gap-3">
                {product.isNew && (
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full animate-pulse-glow shadow-lg">
                    ✨ NEW
                  </div>
                )}
                {false && (
                  <div className="flex items-center bg-green-500 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg">
                    <Leaf className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Freshly Made
                  </div>
                )}
                <div className="flex items-center bg-blue-500 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-2 rounded-full shadow-lg">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                  Premium Quality
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {[
                { icon: Clock, label: "Prep Time", value: product.prepTime, color: "purple" },
                { icon: Users, label: "Serves", value: product.servings, color: "blue" },
                { icon: Star, label: "Rating", value: `${product.rating}/5`, color: "yellow" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center shadow-lg border border-white/20 dark:border-gray-700/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 text-${stat.color}-500`} />
                  <div className="text-sm sm:text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6 sm:space-y-10 animate-fade-in-right">
            {/* Header */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-800 dark:text-purple-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-purple-300 dark:border-purple-700">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent">
                  {getCurrentPrice()}
                </div>
                {(product.mediumPrice || product.largePrice) && (
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 sm:px-3 py-1 rounded-full">
                    Multiple sizes available
                  </div>
                )}
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection - Only show if multiple prices available */}
            {(product.mediumPrice || product.largePrice) && (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Choose Your Size</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    { size: "small", label: "Small", price: product.price },
                    { size: "medium", label: "Medium", price: product.mediumPrice },
                    { size: "large", label: "Large", price: product.largePrice },
                  ]
                    .filter((option) => option.price)
                    .map((option) => (
                      <button
                        key={option.size}
                        onClick={() => setSelectedSize(option.size)}
                        className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                          selectedSize === option.size
                            ? "border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 shadow-lg"
                            : "border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                        }`}
                      >
                        <div className="font-semibold text-base sm:text-lg">{option.label}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{option.price}</div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-500 mr-2" />
                Health Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 text-purple-700 dark:text-purple-300 text-sm font-medium px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-purple-200 dark:border-purple-700 flex items-center hover:shadow-md transition-all duration-300"
                  >
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Order Section */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-purple-100 dark:border-purple-800/30">
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">Starting from</div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent">
                  {product.price}
                </div>
                {(product.mediumPrice || product.largePrice) && (
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Multiple sizes available
                  </div>
                )}
              </div>

              <ContactButtons productName={product.name} productPrice={getCurrentPrice()} />
            </div>

            {/* Allergen Info */}
            {product.allergens && product.allergens.length > 0 && product.allergens[0] !== "None" && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Allergen Information
                </h4>
                <p className="text-yellow-700 dark:text-yellow-400 text-sm sm:text-base">
                  Contains: {product.allergens.join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Modern Tabs Section */}
        <div className="mt-12 sm:mt-20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl border border-purple-100 dark:border-purple-800/30 overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30">
              <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-8 overflow-x-auto">
                {[
                  { id: "overview", label: "Overview", icon: Award },
                  { id: "ingredients", label: "Ingredients", icon: Leaf },
                  { id: "nutrition", label: "Nutrition Facts", icon: Zap },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 sm:py-6 px-2 sm:px-4 border-b-3 font-medium text-sm sm:text-base transition-all duration-300 flex items-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                      activeTab === tab.id
                        ? "border-purple-500 text-purple-600 dark:text-purple-400 bg-white dark:bg-gray-800 rounded-t-xl sm:rounded-t-2xl shadow-lg"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                    }`}
                  >
                    <tab.icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8 lg:p-12">
              {activeTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <Award className="h-6 w-6 sm:h-7 sm:w-7 text-purple-500 mr-3" />
                        Product Details
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          { label: "Category", value: product.category },
                          { label: "Preparation Time", value: product.prepTime },
                          { label: "Servings", value: product.servings },
                          { label: "Rating", value: `${product.rating}/5.0` },
                          { label: "Reviews", value: product.reviews },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 sm:py-3 border-b border-gray-100 dark:border-gray-700"
                          >
                            <span className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                              {item.label}
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
                        <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-purple-500 mr-3" />
                        Why You'll Love It
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        {product.benefits.map((benefit: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-center p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                          >
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full mr-3 sm:mr-4"></div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div>
                  <IngredientsShowcase ingredients={product.ingredients} />
                </div>
              )}

              {activeTab === "nutrition" && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-gray-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
                    <div className="border-b-4 border-gray-900 dark:border-gray-600 pb-4 mb-6">
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Nutrition Facts</h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                        Per serving ({product.servings} serving per container)
                      </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      {Object.entries(product.nutrition).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 sm:py-3 border-b border-gray-300 dark:border-gray-600"
                        >
                          <span className="font-medium capitalize text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                            {key.replace("_", " ")}
                          </span>
                          <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
