"use client"

import { useState, useEffect } from "react"
import AnimatedLogo from "@/components/animated-logo"

interface LoadingScreenProps {
  onComplete?: () => void
  duration?: number
}

export default function LoadingScreen({ onComplete, duration = 2000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsComplete(true)
          setTimeout(() => onComplete?.(), 500)
          return 100
        }
        return prev + 2
      })
    }, duration / 50)

    return () => clearInterval(interval)
  }, [duration, onComplete])

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-gray-900 flex items-center justify-center z-50 transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center relative">
        {/* Add a subtle backdrop for the logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white/5 dark:bg-white/10 rounded-full blur-2xl"></div>

        <AnimatedLogo size={120} showText={true} animate={true} className="mb-8 text-white relative z-10" />

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden mb-4 relative z-10">
          <div
            className="h-full bg-white dark:bg-purple-300 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-white/90 dark:text-white/80 text-lg font-medium relative z-10">
          Loading fresh content... {progress}%
        </p>
      </div>
    </div>
  )
}
