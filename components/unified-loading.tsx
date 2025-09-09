"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface UnifiedLoadingProps {
  onComplete?: () => void
  duration?: number
  message?: string
  showProgress?: boolean
}

export default function UnifiedLoading({
  onComplete,
  duration = 2000,
  message = "Loading fresh content...",
  showProgress = true,
}: UnifiedLoadingProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (duration / 50)
        const newProgress = prev + increment

        if (newProgress >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => onComplete?.(), 300)
          return 100
        }
        return newProgress
      })
    }, 50)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-gray-900 flex items-center justify-center z-50 transition-all duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="text-center animate-fade-in-up">
        {/* Logo with Consistent Animation */}
        <div className="relative mb-8">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl opacity-60 animate-pulse scale-150"></div>

          {/* Logo container */}
          <div className="relative">
            <Image
              src="/juice-factory-logo-actual.jpeg"
              alt="Juice Factory Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-2xl animate-pulse"
              priority
            />

            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full border-2 border-white/30 animate-pulse"></div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Juice Factory</h1>
          <p className="text-white/80 text-lg">{message}</p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-6">
            <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-white/70 text-sm mt-3" aria-live="polite">
              {Math.round(progress)}%
            </p>
          </div>
        )}

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white/80 rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
