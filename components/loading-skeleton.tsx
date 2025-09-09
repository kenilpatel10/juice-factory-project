export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  )
}
