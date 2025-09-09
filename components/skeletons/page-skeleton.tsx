interface PageSkeletonProps {
  showHero?: boolean
  showSections?: number
  showTeam?: boolean
  showContact?: boolean
}

export default function PageSkeleton({ 
  showHero = true, 
  showSections = 3, 
  showTeam = false, 
  showContact = false 
}: PageSkeletonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="animate-pulse">
        {/* Hero Section Skeleton */}
        {showHero && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mx-auto"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-4/5 mx-auto"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-40"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-32"></div>
              </div>
            </div>
          </section>
        )}

        {/* Content Sections Skeleton */}
        {[...Array(showSections)].map((_, sectionIndex) => (
          <section key={sectionIndex} className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16 space-y-4">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-96 mx-auto"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center space-y-6">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Team Section Skeleton */}
        {showTeam && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 mx-auto"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="text-center bg-white dark:bg-gray-800 p-8 rounded-3xl space-y-6">
                    <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto"></div>
                    <div className="space-y-3">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section Skeleton */}
        {showContact && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-80 mx-auto"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl space-y-6">
                  <div className="space-y-4">
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
                    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
                    <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
                  </div>
                  <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
