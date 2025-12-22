"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    text: "The Green Goddess juice has become my daily ritual. The quality is unmatched and the taste is incredible! I've never felt more energized.",
    image: "/placeholder.svg?height=80&width=80",
    location: "New York, NY",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Busy Professional",
    text: "Fast delivery, amazing quality, and the Mediterranean Bowl is absolutely perfect for my lunch breaks. Fresh Juice Co. has changed my eating habits completely.",
    image: "/placeholder.svg?height=80&width=80",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Health Coach",
    text: "I recommend Fresh Juice Co. to all my clients. The variety and freshness are outstanding! Every ingredient tastes like it was just picked.",
    image: "/placeholder.svg?height=80&width=80",
    location: "Austin, TX",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Marathon Runner",
    text: "As an athlete, nutrition is everything. These juices and meals fuel my training perfectly. The Berry Blast is my pre-workout favorite!",
    image: "/placeholder.svg?height=80&width=80",
    location: "Miami, FL",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial */}
      <div className="card-modern p-6 sm:p-12 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-600"></div>
        </div>

        <div className="relative z-10">
          {/* Quote */}
          <blockquote className="text-lg sm:text-2xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed min-h-[100px] sm:min-h-[120px] flex items-center justify-center px-4">
            <span className="animate-fade-in-up">"{testimonials[currentIndex].text}"</span>
          </blockquote>

          {/* Author */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative mb-4 sm:mb-0">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="sm:w-20 sm:h-20 rounded-full sm:mr-6 ring-4 ring-emerald-100"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20"></div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
              <div className="text-emerald-600 font-medium">{testimonials[currentIndex].role}</div>
              <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Improved mobile positioning */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg touch-manipulation"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg touch-manipulation"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
        </button>
      </div>

      {/* Indicators - Improved mobile touch targets */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 touch-manipulation ${index === currentIndex
              ? "w-8 h-4 sm:w-8 sm:h-3 bg-emerald-500 rounded-full"
              : "w-4 h-4 sm:w-3 sm:h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
              }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-emerald-500 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((Date.now() % 5000) / 5000) * 100}%`,
              animation: "progress 5s linear infinite",
            }}
          ></div>
        </div>
      )}
    </div>
  )
}
