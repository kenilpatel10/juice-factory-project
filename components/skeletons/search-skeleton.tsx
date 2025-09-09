export default function SearchSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Search Header */}
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-64"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-96"></div>
      </div>

      {/* Search Filters */}
      <div className="flex flex-wrap gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
        ))}
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-20"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SearchResultsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl">
            <div className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl mb-4"></div>
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
    </div>
  )
}
