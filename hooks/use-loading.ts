"use client"

import { useState, useEffect } from "react"

interface UseLoadingOptions {
  duration?: number
  initialDelay?: number
  onComplete?: () => void
}

export function useLoading({ 
  duration = 2000, 
  initialDelay = 0,
  onComplete 
}: UseLoadingOptions = {}) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startLoading = () => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const increment = 100 / (duration / 50)
          const newProgress = prev + increment

          if (newProgress >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              setIsLoading(false)
              onComplete?.()
            }, 200)
            return 100
          }
          return newProgress
        })
      }, 50)

      return () => clearInterval(interval)
    }

    if (initialDelay > 0) {
      const delayTimer = setTimeout(startLoading, initialDelay)
      return () => clearTimeout(delayTimer)
    } else {
      return startLoading()
    }
  }, [duration, initialDelay, onComplete])

  return { isLoading, progress, setIsLoading }
}

// Specific loading hooks for different page types
export function usePageLoading(duration = 1500) {
  return useLoading({ duration })
}

export function useProductLoading(duration = 2000) {
  return useLoading({ duration })
}

export function useSearchLoading(duration = 800) {
  return useLoading({ duration })
}

export function useGalleryLoading(duration = 1200) {
  return useLoading({ duration })
}
