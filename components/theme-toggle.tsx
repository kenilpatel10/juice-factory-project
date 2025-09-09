"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-10">
        <div className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-full transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:scale-110"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-gray-700 dark:text-gray-200 transition-all duration-300" />
      ) : (
        <Sun className="h-4 w-4 text-gray-700 dark:text-gray-200 transition-all duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
