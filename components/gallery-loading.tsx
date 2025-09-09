"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface GalleryLoadingProps {
  onComplete?: () => void
  duration?: number
  productName?: string
}

export default function GalleryLoading({ onComplete, duration = 3000, productName }: GalleryLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [loadingText, setLoadingText] = useState("Preparing your experience...")

  const loadingImages = [
    "/images/green-juice.jpg",
    "/images/tropical-juice.jpg",
    "/images/berry-juice.jpg",
    "/images/orange-juice.jpg",
    "/images/smoothie-bowl.jpg",
    "/images/acai-bowl.jpg",
  ]

  const loadingTexts = [
    "Preparing your experience...",
    "Loading fresh ingredients...",
    "Mixing the perfect blend...",
    "Adding natural goodness...",
    "Almost ready to serve...",
    "Finalizing your order...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.5

        // Update image and text based on progress
        const imageIndex = Math.floor((newProgress / 100) * loadingImages.length)
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length)

        setCurrentImageIndex(Math.min(imageIndex, loadingImages.length - 1))
        setLoadingText(loadingTexts[Math.min(textIndex, loadingTexts.length - 1)])

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => onComplete?.(), 800)
          return 100
        }
        return newProgress
      })
    }, duration / 67)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 flex items-center justify-center z-50 transition-all duration-800 ${
        isComplete ? "opacity-0 pointer-events-none scale-110" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        {/* Logo with Enhanced Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse-glow scale-150"></div>
          <Image
            src="/juice-factory-logo.jpeg"
            alt="Juice Factory"
            width={120}
            height={120}
            className="relative z-10 mx-auto rounded-full animate-float shadow-2xl ring-4 ring-white/20"
            priority
          />
        </div>

        {/* Product Name */}
        {productName && (
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">Loading {productName}</h2>
        )}

        {/* Gallery Preview */}
        <div className="relative w-64 h-40 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          {loadingImages.map((image, index) => (
            <Image
              key={index}
              src={image || "/placeholder.svg"}
              alt={`Loading preview ${index + 1}`}
              fill
              className={`object-cover transition-all duration-1000 ${
                index === currentImageIndex
                  ? "opacity-100 scale-100"
                  : index < currentImageIndex
                    ? "opacity-0 scale-110"
                    : "opacity-0 scale-90"
              }`}
            />
          ))}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium z-20">
            {currentImageIndex + 1} / {loadingImages.length}
          </div>
        </div>

        {/* Progress Bar with Gradient */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-4 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading Text with Animation */}
        <p className="text-white/90 text-lg font-medium mb-2 animate-pulse">{loadingText}</p>

        {/* Progress Percentage */}
        <p className="text-white/70 text-sm">{Math.round(progress)}% Complete</p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/50 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
