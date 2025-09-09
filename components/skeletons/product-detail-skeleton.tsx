export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          {/* Back Button Skeleton */}
          <div className="mb-8">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-32"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section Skeleton - Portrait Aspect */}
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 rounded-3xl"></div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
                ))}
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3"></div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
              </div>

              {/* Size Options */}
              <div className="space-y-3">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                <div className="flex gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-20"></div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl flex-1"></div>
                <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl w-14"></div>
              </div>

              {/* Tabs */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-24"></div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mt-16 space-y-8">
            <div className="text-center space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition Info */}
          <div className="mt-16 space-y-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-48"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
