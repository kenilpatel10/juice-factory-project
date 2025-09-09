"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface IntersectionObserverProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function IntersectionObserver({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px",
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      },
      { threshold, rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  )
}
