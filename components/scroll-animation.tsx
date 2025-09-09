"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade'
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  animationType = 'fade-up',
  delay = 0
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Add initial animation class
    element.classList.add('scroll-animate')
    
    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the in-view class for animation
          entry.target.classList.add('in-view')
          
          // Apply specific animation type
          switch (animationType) {
            case 'fade-left':
              entry.target.classList.add('animate-fade-in-left')
              break
            case 'fade-right':
              entry.target.classList.add('animate-fade-in-right')
              break
            case 'scale':
              entry.target.classList.add('animate-scale-in')
              break
            case 'fade':
              entry.target.classList.add('animate-fade-in')
              break
            default:
              entry.target.classList.add('animate-fade-in-up')
          }
          
          // Unobserve after animation starts
          observer.unobserve(entry.target)
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, animationType, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Additional animation styles for scale and other effects
const additionalStyles = `
  .animate-scale-in {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 1);
    animation: scaleIn 0.6s ease-out forwards;
    will-change: opacity, transform;
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale3d(0.9, 0.9, 1);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`

// Inject styles if not already present
if (typeof document !== 'undefined' && !document.getElementById('scroll-animation-styles')) {
  const style = document.createElement('style')
  style.id = 'scroll-animation-styles'
  style.textContent = additionalStyles
  document.head.appendChild(style)
}
