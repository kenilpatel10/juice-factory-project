"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Leaf, Sparkles, Star } from "lucide-react"

interface ProductListItemProps {
  product: {
    id: string
    name: string
    description: string
    image: string
    price: string
    prepTime?: string
    isNew?: boolean
    isOrganic?: boolean
    benefits?: string[]
    rating?: number
  }
}

export default function ProductListItem({ product }: ProductListItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/menu/${product.id}`} className="block group">
      <div
        className="flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:hover:shadow-purple-500/25 transition-all duration-500 border border-white/20 dark:border-gray-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50 overflow-hidden transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glass Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-700/10 dark:via-gray-700/5 dark:to-transparent"></div>

        {/* Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-2xl overflow-hidden m-4">
          <div className="aspect-square relative">
            <Image
              src={product.image || "/placeholder.svg?height=160&width=160"}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {product.isNew && (
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full backdrop-blur-sm border border-white/20 shadow-lg">
                <Sparkles className="h-3 w-3 mr-1" />
                NEW
              </div>
            )}
            {product.isOrganic && (
              <div className="flex items-center bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20 shadow-lg">
                <Leaf className="h-3 w-3 mr-1" />
                ORGANIC
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 leading-tight pr-4">
              {product.name}
            </h3>
            <div className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-full border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
              {product.price}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            {product.prepTime && (
              <div className="flex items-center bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4 mr-2" />
                Ready in {product.prepTime}
              </div>
            )}
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse mr-2"></div>
              <span className="text-purple-600 dark:text-purple-400 font-medium">Available Now</span>
            </div>
          </div>

          {/* Benefits */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.benefits.slice(0, 3).map((benefit, index) => (
                <span
                  key={index}
                  className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs px-3 py-1.5 rounded-full border border-purple-200/50 dark:border-purple-700/50 font-medium backdrop-blur-sm"
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* Inner Ring */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 dark:ring-gray-700/50 group-hover:ring-purple-400/30 transition-all duration-500"></div>
      </div>
    </Link>
  )
}
