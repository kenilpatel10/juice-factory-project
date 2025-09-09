"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface AnimatedLogoProps {
  size?: number
  showText?: boolean
  className?: string
  animate?: boolean
}

export default function AnimatedLogo({
  size = 50,
  showText = true,
  className = "",
  animate = false,
}: AnimatedLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`flex items-center space-x-3 group logo-container ${className}`}>
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Juice Factory"
          width={size}
          height={size}
          className={`logo-adaptive transition-all duration-500 rounded-full ${
            animate
              ? `${isLoaded ? "scale-100 rotate-0" : "scale-0 rotate-180"} group-hover:scale-110 group-hover:rotate-12`
              : "group-hover:scale-110"
          } border border-white/30 dark:border-purple-400/30 shadow-lg`}
          priority
        />
        <div className="absolute inset-0 bg-purple-500/20 dark:bg-purple-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Animated ring effect */}
        {animate && (
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 dark:border-purple-300 animate-ping opacity-75"></div>
        )}
      </div>

      {showText && (
        <span
          className={`font-bold transition-all duration-300 text-white ${size > 40 ? "text-2xl" : "text-xl"}`}
        >
          Juice Factory
        </span>
      )}
    </div>
  )
}
