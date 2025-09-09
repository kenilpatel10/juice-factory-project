"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ModernLoadingProps {
  onComplete?: () => void
  duration?: number
  productName?: string
}

export default function ModernLoading({ onComplete, duration = 2500, productName }: ModernLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => onComplete?.(), 500)
          return 100
        }
        return newProgress
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50 transition-all duration-700 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo with Simple Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-20 animate-pulse scale-150"></div>
          <Image
            src="/juice-factory-logo.jpeg"
            alt="Juice Factory"
            width={100}
            height={100}
            className="relative z-10 mx-auto rounded-full animate-pulse"
            priority
          />
        </div>

        {/* Brand Text */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">
            Juice Factory
          </h1>
          {productName && <p className="text-gray-600 dark:text-gray-400 text-lg">Loading {productName}...</p>}
        </div>

        {/* Modern Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">{Math.round(progress)}%</p>
        </div>

        {/* Simple Loading Dots */}
        <div className="flex justify-center space-x-1 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
