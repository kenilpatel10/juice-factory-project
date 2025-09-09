"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Leaf, Sparkles } from "lucide-react"

interface ProductCardProps {
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
  }
}

export default function ModernProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/menu/${product.id}`} className="block group">
      <div
        className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl hover:shadow-3xl dark:hover:shadow-purple-500/30 transition-all duration-700 transform hover:-translate-y-4 border border-white/30 dark:border-gray-600/30 hover:border-white/50 dark:hover:border-purple-400/50 h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Enhanced Glass Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-gray-600/20 dark:via-gray-700/10 dark:to-gray-800/5"></div>

        {/* Secondary Glass Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 dark:from-transparent dark:via-gray-700/5 dark:to-gray-600/10"></div>

        {/* Image Container - Optimized for Portrait Images */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="aspect-[3/4] relative overflow-hidden flex items-center justify-center p-3">
            {/* Portrait Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={product.image || "/placeholder.svg?height=400&width=300"}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl rounded-xl"
                priority={false}
              />
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isNew && (
              <div className="flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 animate-pulse-glow">
                <Sparkles className="h-3 w-3 mr-1" />
                NEW
              </div>
            )}
            {product.isOrganic && (
              <div className="flex items-center bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                <Leaf className="h-3 w-3 mr-1" />
                ORGANIC
              </div>
            )}
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-purple-700 dark:text-purple-300 font-bold text-lg px-4 py-2 rounded-full shadow-xl border border-purple-200/50 dark:border-purple-700/50 ring-1 ring-white/20">
              {product.price}
            </div>
          </div>

          {/* Hover Content */}
          <div
            className={`absolute bottom-4 left-4 right-4 transform transition-all duration-500 z-10 ${
              isHovered ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {product.prepTime && (
              <div className="flex items-center text-white text-sm font-medium mb-3 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                <Clock className="h-4 w-4 mr-2" />
                Ready in {product.prepTime}
              </div>
            )}
            {product.benefits && product.benefits.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.benefits.slice(0, 2).map((benefit, index) => (
                  <span key={index} className="bg-white/25 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/20 font-medium">
                    {benefit}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-10 flex flex-col flex-grow rounded-b-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed line-clamp-3 mb-8 flex-grow">
            {product.description}
          </p>

          {/* Interactive Elements */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse shadow-lg"></div>
              <span className="text-base text-purple-600 dark:text-purple-400 font-semibold">Available Now</span>
            </div>

            <div className="flex items-center text-purple-600 dark:text-purple-400 font-bold text-base group-hover:translate-x-2 transition-all duration-300 bg-purple-50/80 dark:bg-purple-900/40 backdrop-blur-sm px-4 py-2.5 rounded-full border border-purple-200/50 dark:border-purple-700/50 shadow-lg">
              <span>Explore</span>
              <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Enhanced Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400/0 via-purple-400/15 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Glass Reflection Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Enhanced Inner Glow */}
        <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/20 dark:ring-gray-600/30 group-hover:ring-purple-400/50 dark:group-hover:ring-purple-400/40 transition-all duration-500"></div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-3xl shadow-lg"></div>
      </div>
    </Link>
  )
}
