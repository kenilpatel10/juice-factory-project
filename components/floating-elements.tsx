"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-emerald-600/5 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-500/5 rounded-full blur-lg animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/8 to-purple-500/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-red-500/5 rounded-full blur-lg animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-emerald-300/8 to-teal-500/5 rounded-full blur-xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </div>
  )
}
