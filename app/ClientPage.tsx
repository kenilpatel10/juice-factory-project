"use client"

import { useEffect } from "react"
import { ArrowRight, Leaf, Award, Clock, Heart } from "lucide-react"
import HeroBanner from "@/components/hero-banner"
import TestimonialCarousel from "@/components/testimonial-carousel"
import IngredientsShowcase from "@/components/ingredients-showcase"
import AnimatedCounter from "@/components/animated-counter"
import { getFeaturedProducts } from "@/lib/menu-data"
import ModernProductCard from "@/components/modern-product-card"
import Link from "next/link"


export default function ClientPage() {
  const featuredProducts = getFeaturedProducts()

  // Scroll to top on page load/navigation
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Featured <span className="gradient-text">Fresh Picks</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our most popular and newest creations, carefully crafted with the finest quality ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 mb-8 sm:mb-12 auto-rows-fr">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up flex" style={{ animationDelay: `${index * 0.1}s` }}>
                <ModernProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Link
              href="/menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary text-lg px-8 py-4 group w-full sm:w-auto max-w-xs mx-auto"
              aria-label="Explore our full menu of fresh juices and healthy food"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Why Choose <span className="gradient-text">Juice Factory</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to providing the highest quality, freshest juices and healthy meals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: "Freshly Made",
                description: "All our ingredients are fresh quality and locally sourced when possible",
                color: "from-green-400 to-green-600",
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "We use only the finest ingredients and maintain the highest standards",
                color: "from-purple-400 to-purple-600",
              },
              {
                icon: Clock,
                title: "Fresh Daily",
                description: "Everything is prepared fresh daily to ensure maximum nutrition and taste",
                color: "from-blue-400 to-blue-600",
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every product is crafted with care and passion for your health and wellness",
                color: "from-pink-400 to-pink-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            {[
              { icon: Users, number: 10000, suffix: "+", label: "Happy Customers" },
              { icon: Star, number: 4.9, suffix: "/5", label: "Average Rating" },
              { icon: Zap, number: 50, suffix: "+", label: "Fresh Options" },
              { icon: Award, number: 100, suffix: "%", label: "Quality Ingredients" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <stat.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-90" />
                <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Ingredients Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Premium <span className="gradient-text">Ingredients</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We carefully select the finest quality ingredients to create our nutritious and delicious products
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <IngredientsShowcase
              ingredients={[
                "Apple",
                "Carrot",
                "Ginger",
                "Kale",
                "Lemon",
                "Spinach",
                "Avocado",
                "Berries",
                "Cucumber",
                "Mint",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <TestimonialCarousel />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Healthy Journey?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to healthier living with our premium quality
            juices and meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-secondary bg-white text-purple-600 hover:bg-purple-50 w-full sm:w-auto"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-ghost text-white border-white hover:bg-white/10 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
