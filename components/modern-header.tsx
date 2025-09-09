"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", ariaLabel: "Go to homepage" },
    { name: "Menu", href: "/menu", ariaLabel: "View our menu" },
    // { name: "Gallery", href: "/gallery", ariaLabel: "View gallery" },
    { name: "About", href: "/about", ariaLabel: "Learn about us" },
    { name: "Contact", href: "/contact", ariaLabel: "Contact us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen])

  const isActive = (href: string) => pathname === href

  const handleNavClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-purple-200/30 dark:border-gray-700/30 transition-all duration-300"
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group relative rounded-lg p-2"
            aria-label="Juice Factory - Go to homepage"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-400/20 dark:bg-purple-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>

              {/* Logo Image */}
              <Image
                src="/logo.png"
                alt="Juice Factory Logo"
                width={40}
                height={40}
                className="relative z-10 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg sm:w-[50px] sm:h-[50px]"
                priority
              />
            </div>

            {/* Brand Text */}
            <div className="ml-3">
              <div className="text-lg sm:text-xl font-bold gradient-text drop-shadow-sm">Juice Factory</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 -mt-1 hidden sm:block">
                Fresh • Natural • Healthy
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label={item.ariaLabel}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`nav-link group ${
                  isActive(item.href)
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                }`}
              >
                {item.name}

                {/* Active/Hover Underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                ></span>
              </Link>
            ))}

            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/menu"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn-primary"
              aria-label="Order food now"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mt-4 space-y-2 glass rounded-2xl p-4 shadow-lg mx-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.ariaLabel}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`block p-4 rounded-xl font-medium transition-all duration-300 text-center text-lg min-h-[56px] flex items-center justify-center touch-manipulation ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
                }`}
                onClick={handleNavClick}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-purple-200/30 dark:border-gray-700/30">
              <Link
                href="/menu"
                className="btn-primary w-full text-center text-lg py-4 min-h-[56px] flex items-center justify-center touch-manipulation"
                onClick={handleNavClick}
                aria-label="Order food now"
              >
                Order Now
              </Link>
            </div>

            {/* Theme Toggle in Mobile Menu */}
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
