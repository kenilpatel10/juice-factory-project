"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface UniversalLoadingProps {
  onComplete?: () => void
  duration?: number
  message?: string
  showProgress?: boolean
}

export default function UniversalLoading({
  onComplete,
  duration = 2000,
  message = "Loading...",
  showProgress = true,
}: UniversalLoadingProps) {
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
      className={`fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50 transition-all duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="text-center animate-fade-in-up">
        {/* Logo with Animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-2xl opacity-60 animate-pulse scale-150"></div>
          <div className="relative">
            <Image
              src="/juice-factory-logo.jpeg"
              alt="Juice Factory Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full animate-pulse shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-full border-4 border-orange-400/30 animate-ping"></div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Juice Factory</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{message}</p>
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-6">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3" aria-live="polite">
              {Math.round(progress)}%
            </p>
          </div>
        )}

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
