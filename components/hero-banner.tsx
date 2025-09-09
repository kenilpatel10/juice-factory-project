"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Star, Heart, Zap } from "lucide-react"

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/header-main.png"
          alt="Fresh colorful fruits and vegetables"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8 animate-fade-in">
            <Leaf className="h-4 w-4 mr-2 text-green-400" />
            <span className="text-sm font-medium">100% Organic & Fresh</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fresh{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Organic
            </span>{" "}
            Juices
            <br />
            <span className="text-3xl sm:text-4xl lg:text-6xl">Delivered Daily</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Experience premium nutrition with our cold-pressed juices, organic smoothies, and healthy meals made from
            100% organic ingredients.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-4">
            {[
              { icon: Leaf, text: "100% Organic", color: "from-green-400 to-green-600" },
              { icon: Star, text: "Premium Quality", color: "from-purple-400 to-purple-600" },
              { icon: Heart, text: "Made with Love", color: "from-pink-400 to-pink-600" },
              { icon: Zap, text: "Fresh Daily", color: "from-yellow-400 to-orange-500" },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mr-2 sm:mr-3`}
                >
                  <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 max-w-md sm:max-w-none mx-auto">
            <Link
              href="/menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-[56px] touch-manipulation w-full sm:w-auto group animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <span>Explore Menu</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 rounded-full transition-all duration-300 transform hover:scale-105 min-h-[56px] touch-manipulation w-full sm:w-auto animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              Our Story
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "50+", label: "Fresh Options" },
              { number: "100%", label: "Organic" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
