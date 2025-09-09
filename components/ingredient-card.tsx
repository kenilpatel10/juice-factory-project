"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, Info } from "lucide-react"

interface IngredientCardProps {
  name: string
  image: string
  benefits?: string[]
  description?: string
  index: number
}

export default function IngredientCard({ name, image, benefits, description, index }: IngredientCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="relative p-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-fade-in-up border border-gray-200 dark:border-gray-700">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Sparkle Effect */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
          <Sparkles className="h-5 w-5 text-purple-500" />
        </div>

        {/* Image Container */}
        <div className="relative h-32 overflow-hidden rounded-t-2xl">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={200}
            height={128}
            className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating Badge */}
          <div className="absolute top-2 left-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-1 transition-transform duration-500">
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Fresh</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 relative">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {name}
            </h4>

            {/* Info Button */}
            {(benefits || description) && (
              <button
                onClick={() => setShowTooltip(!showTooltip)}
                className="w-6 h-6 bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Info className="h-3 w-3 text-purple-600 dark:text-purple-400" />
              </button>
            )}
          </div>

          {/* Progress Bar Animation */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mb-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-1000 ${
                isHovered ? "w-full" : "w-0"
              }`}
            ></div>
          </div>

          {/* Benefits Pills */}
          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {benefits.slice(0, 2).map((benefit, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full border border-purple-200 dark:border-purple-700 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/0 via-purple-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      {/* Tooltip */}
      {showTooltip && (benefits || description) && (
        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 text-xs rounded-lg p-3 shadow-xl animate-fade-in-up border border-gray-700 dark:border-gray-600">
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>

          {description && <p className="mb-2">{description}</p>}

          {benefits && benefits.length > 0 && (
            <div>
              <p className="font-semibold mb-1">Benefits:</p>
              <ul className="space-y-1">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
