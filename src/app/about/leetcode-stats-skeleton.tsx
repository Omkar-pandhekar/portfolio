import Skeleton from "@/components/layouts/skeleton";

export default function LeetCodeStatsSkeleton() {
  return (
    <div className="space-y-6 pt-20">
      {/* Header Skeleton */}
      <div className="text-left space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-16" />
              </div>
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Difficulty Breakdown Skeleton */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Skeleton className="w-6 h-6 rounded-full" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="flex items-center space-x-3">
                <Skeleton className="w-32 h-2 rounded-full" />
                <Skeleton className="h-4 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
