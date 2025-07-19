import React from 'react';

type SkeletonLoaderProps = {
  variant?: 'text' | 'card' | 'avatar' | 'button' | 'form';
  lines?: number;
  className?: string;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  lines = 3,
  className = '',
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className={`bg-gray-800 rounded-lg p-4 animate-pulse ${className}`}>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4" />
                <div className="h-3 bg-gray-700 rounded w-1/2" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-3 bg-gray-700 rounded" />
              <div className="h-3 bg-gray-700 rounded w-5/6" />
              <div className="h-3 bg-gray-700 rounded w-4/6" />
            </div>
          </div>
        );

      case 'avatar':
        return (
          <div className={`animate-pulse ${className}`}>
            <div className="w-16 h-16 bg-gray-700 rounded-full" />
          </div>
        );

      case 'button':
        return (
          <div className={`h-10 bg-gray-700 rounded-lg animate-pulse ${className}`} />
        );

      case 'form':
        return (
          <div className={`space-y-4 animate-pulse ${className}`}>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/4" />
              <div className="h-10 bg-gray-700 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/3" />
              <div className="h-10 bg-gray-700 rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/2" />
              <div className="h-24 bg-gray-700 rounded" />
            </div>
            <div className="h-10 bg-gray-700 rounded w-1/3" />
          </div>
        );

      default:
        return (
          <div className={`space-y-2 animate-pulse ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-gray-700 rounded ${
                  i === lines - 1 ? 'w-3/4' : 'w-full'
                }`}
              />
            ))}
          </div>
        );
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader;
