"use client"

import { useState, useEffect } from "react"
import { Clock, Leaf, Award, Star, Filter } from "lucide-react"
import { categories, products, getProductsByCategory, searchProducts } from "@/lib/menu-data"
import ModernProductCard from "@/components/modern-product-card"
import ProductListItem from "@/components/product-list-item"
import LoadingSkeleton from "@/components/loading-skeleton"
import { SearchResultsSkeleton } from "@/components/skeletons/search-skeleton"
import ModernCategoryFilter from "@/components/modern-category-filter"
import { ViewToggle } from "@/components/view-toggle"
import { usePageLoading, useSearchLoading } from "@/hooks/use-loading"

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isSearching, setIsSearching] = useState(false)
  const { isLoading } = usePageLoading(1200)

  useEffect(() => {
    setIsSearching(true)

    const searchTimer = setTimeout(() => {
      let result = products

      if (selectedCategory !== "all") {
        result = getProductsByCategory(selectedCategory)
      }

      if (searchQuery) {
        result = searchProducts(searchQuery).filter(
          (product) => selectedCategory === "all" || product.category === selectedCategory,
        )
      }

      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case "price":
            return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
          case "name":
          default:
            return a.name.localeCompare(b.name)
        }
      })

      setFilteredProducts(result)
      setIsSearching(false)
    }, searchQuery ? 500 : 100) // Longer delay for search, shorter for category/sort

    return () => clearTimeout(searchTimer)
  }, [selectedCategory, searchQuery, sortBy])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <LoadingSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Fresh Menu</h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto">
              Discover our complete collection of fresh juices, smoothies, wraps, and salads
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-orange-100">
              <div className="flex items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Leaf className="h-6 w-6 mr-2" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Award className="h-6 w-6 mr-2" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Clock className="h-6 w-6 mr-2" />
                <span>Fresh Daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <ModernCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Results Header */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory === "all"
                    ? "All Products"
                    : categories.find((c) => c.id === selectedCategory)?.name}
              </h2>
              <div className="mt-2 flex items-center gap-4">
                <span className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 text-orange-800 dark:text-orange-300 px-4 py-2 rounded-full font-semibold text-sm border border-orange-200 dark:border-orange-700">
                  <Filter className="h-4 w-4 mr-2" />
                  {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                </span>
                {filteredProducts.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span>Avg. 4.8/5 rating</span>
                  </div>
                )}
              </div>
            </div>
            <ViewToggle view={viewMode} onViewChange={setViewMode} />
          </div>
        </div>

        {/* Products Grid/List */}
        {isSearching ? (
          <SearchResultsSkeleton />
        ) : filteredProducts.length > 0 ? (
          <div
            className={`animate-fade-in-up ${
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-16 auto-rows-fr"
                : "space-y-8"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`animate-fade-in-up ${viewMode === "grid" ? "flex" : ""}`}
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                {viewMode === "grid" ? <ModernProductCard product={product} /> : <ProductListItem product={product} />}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No products found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or category filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Category Showcase */}
        {selectedCategory === "all" && !searchQuery && (
          <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories
                .filter((cat) => cat.id !== "all")
                .map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="group card card-hover p-0 overflow-hidden text-left animate-fade-in-up"
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <div
                        className="w-full h-48 bg-gradient-to-br from-orange-400 to-pink-400 group-hover:scale-105 transition-transform duration-300"
                        style={{
                          backgroundImage: category.image ? `url(${category.image})` : undefined,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <p className="text-sm text-gray-200">{category.count} products</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
