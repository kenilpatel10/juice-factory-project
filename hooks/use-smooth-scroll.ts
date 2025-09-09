"use client"

import { useEffect, useCallback } from 'react'

interface SmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
}

// Easing functions for smooth animations
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutQuart: (t: number): number => 1 - (--t) * t * t * t,
  easeInOutQuart: (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
}

export function useSmoothScroll() {
  // Enhanced smooth scroll function
  const smoothScrollTo = useCallback((
    targetPosition: number, 
    options: SmoothScrollOptions = {}
  ) => {
    const { duration = 800, easing = easingFunctions.easeInOutCubic } = options
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const startTime = performance.now()

    function animation(currentTime: number) {
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easing(progress)
      
      window.scrollTo(0, startPosition + distance * easedProgress)
      
      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }
    
    requestAnimationFrame(animation)
  }, [])

  // Scroll to element with smooth animation
  const scrollToElement = useCallback((
    elementId: string, 
    options: SmoothScrollOptions & { offset?: number } = {}
  ) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const { offset = 80 } = options
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const targetPosition = elementPosition - offset

    smoothScrollTo(targetPosition, options)
  }, [smoothScrollTo])

  // Scroll to top with smooth animation
  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    smoothScrollTo(0, options)
  }, [smoothScrollTo])

  // Performance optimizations for scroll events
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll event handling can be added here
          ticking = false
        })
        ticking = true
      }
    }

    // Passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    smoothScrollTo,
    scrollToElement,
    scrollToTop
  }
}

// Hook for scroll-based animations with performance optimization
export function useScrollAnimation() {
  useEffect(() => {
    // Enable hardware acceleration for better performance
    const style = document.createElement('style')
    style.textContent = `
      * {
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])
}

// Hook for optimized intersection observer
export function useIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callback, defaultOptions)
    
    return () => {
      observer.disconnect()
    }
  }, [callback, defaultOptions])
}
