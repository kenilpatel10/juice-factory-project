"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import FloatingElements from "@/components/floating-elements"

export default function ModernHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90 dark:from-purple-800/90 dark:to-pink-800/90"></div>

        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-8 h-8 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-pulse-glow">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            <span className="text-sm sm:text-base font-medium">Freshly Squeezed • Natural • Healthy</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-text font-extrabold mb-4 sm:mb-6 text-shadow leading-tight">
            Freshly Squeezed Juice
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Factory
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Experience the perfect blend of taste and nutrition with our premium cold-pressed juices, smoothies, and
            healthy meals made from quality ingredients.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/menu"
              className="group inline-flex items-center bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <span>Explore Menu</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </Link>

            <button className="group inline-flex items-center bg-transparent border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center">
              <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              <span>Watch Story</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">100+</div>
              <div className="text-purple-200 text-sm sm:text-base">Daily Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">50K+</div>
              <div className="text-purple-200 text-sm sm:text-base">Happy Customers</div>
            </div>
            <div className="text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">Daily</div>
              <div className="text-purple-200 text-sm sm:text-base">Made Fresh</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
