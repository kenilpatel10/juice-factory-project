export default function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          {/* Header Skeleton */}
          <div className="text-center mb-12 space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
          </div>

          {/* Filter Buttons Skeleton */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
            ))}
          </div>

          {/* Upload Button Skeleton */}
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-40 mx-auto"></div>
          </div>

          {/* Gallery Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
                {/* Image Skeleton */}
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700"></div>
                
                {/* Content Skeleton */}
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                  
                  {/* Tags Skeleton */}
                  <div className="flex flex-wrap gap-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16"></div>
                    ))}
                  </div>
                  
                  {/* Action Buttons Skeleton */}
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
