"use client"

import { useState } from "react"
import { ChevronDown, Filter, X } from "lucide-react"

interface Category {
  id: string
  name: string
  count: number
  icon?: string
}

interface ModernCategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export default function ModernCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ModernCategoryFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const clearFilters = () => {
    onCategoryChange("all")
    onSearchChange("")
    onSortChange("name")
  }

  const hasActiveFilters = selectedCategory !== "all" || searchQuery !== "" || sortBy !== "name"

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-purple-100 dark:border-purple-800">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 dark:bg-purple-900 rounded-2xl text-purple-700 dark:text-purple-300 font-medium"
        >
          <span className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Filters & Search
          </span>
          <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`space-y-6 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, ingredients..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-4 pl-12 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-700 dark:hover:text-purple-300"
                }`}
              >
                {category.name}
                <span
                  className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price">Price (Low to High)</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-300 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
