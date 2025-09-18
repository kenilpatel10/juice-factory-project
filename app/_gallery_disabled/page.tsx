"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Download, Eye, X, Plus, Calendar, Tag } from "lucide-react"
import GallerySkeleton from "@/components/skeletons/gallery-skeleton"
import { useGalleryLoading } from "@/hooks/use-loading"

interface GalleryItem {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  uploadDate: string
  tags: string[]
}

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const { isLoading } = useGalleryLoading(1500)

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockItems: GalleryItem[] = [
      {
        id: "1",
        title: "Summer Fresh Campaign",
        description: "Promotional poster for our summer fresh juice collection",
        imageUrl: "/placeholder.svg?height=600&width=400",
        category: "promotional",
        uploadDate: "2024-01-15",
        tags: ["summer", "fresh", "campaign"],
      },
      {
        id: "2",
        title: "Fresh Ingredients Showcase",
        description: "Visual showcase of our premium fresh ingredients",
        imageUrl: "/placeholder.svg?height=600&width=400",
        category: "ingredients",
        uploadDate: "2024-01-10",
        tags: ["fresh", "ingredients", "quality"],
      },
      {
        id: "3",
        title: "Health Benefits Infographic",
        description: "Educational poster about juice health benefits",
        imageUrl: "/placeholder.svg?height=600&width=400",
        category: "educational",
        uploadDate: "2024-01-05",
        tags: ["health", "benefits", "education"],
      },
    ]

    setTimeout(() => {
      setGalleryItems(mockItems)
    }, 1200)
  }, [])

  const categories = [
    { id: "all", name: "All Items", count: galleryItems.length },
    {
      id: "promotional",
      name: "Promotional",
      count: galleryItems.filter((item) => item.category === "promotional").length,
    },
    {
      id: "ingredients",
      name: "Ingredients",
      count: galleryItems.filter((item) => item.category === "ingredients").length,
    },
    {
      id: "educational",
      name: "Educational",
      count: galleryItems.filter((item) => item.category === "educational").length,
    },
    { id: "events", name: "Events", count: galleryItems.filter((item) => item.category === "events").length },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const handleDownload = (item: GalleryItem) => {
    // In a real app, this would trigger a download
    console.log(`Downloading: ${item.title}`)
  }

  const handleUpload = () => {
    // In a real app, this would open an upload dialog
    console.log("Opening upload dialog")
  }

  if (isLoading) {
    return <GallerySkeleton />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">Juice Factory Gallery</h1>
          <p
            className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Explore our collection of promotional posters, ingredient showcases, and event visuals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Controls Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                    }`}
                  >
                    {category.name}
                    <span
                      className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Upload Button */}
              <button
                onClick={handleUpload}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Upload New
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100 hover:border-purple-300 animate-fade-in-up"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedImage(item)}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 hover:scale-110"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDownload(item)}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-300 hover:scale-110"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(item.uploadDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 mr-1" />
                      {item.tags.length} tags
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="text-6xl mb-6">🖼️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No items found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              No gallery items match your current filter. Try selecting a different category.
            </p>
            <button onClick={() => setSelectedCategory("all")} className="btn-primary">
              View All Items
            </button>
          </div>
        )}
      </div>

      {/* Full-size Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[3/4] max-h-[80vh]">
                <Image
                  src={selectedImage.imageUrl || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span key={index} className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleDownload(selectedImage)}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
