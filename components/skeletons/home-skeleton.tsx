export default function HomeSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="text-center space-y-8 px-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-full w-40 mx-auto"></div>
          <div className="space-y-4">
            <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-lg w-96 mx-auto"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-lg w-80 mx-auto"></div>
          </div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full max-w-2xl mx-auto"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6 max-w-2xl mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-14 bg-gray-300 dark:bg-gray-700 rounded-full w-40"></div>
            <div className="h-14 bg-gray-300 dark:bg-gray-700 rounded-full w-32"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl">
                <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded-2xl mb-6"></div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-20"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-48 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-80 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-3xl space-y-6">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto"></div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mx-auto"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto"></div>
                <div className="h-8 bg-purple-500 rounded w-20 mx-auto"></div>
                <div className="h-5 bg-purple-500 rounded w-24 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-72 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-3xl space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-5 bg-gray-200 dark:bg-gray-600 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-20"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
