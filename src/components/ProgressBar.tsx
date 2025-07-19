import React from 'react';

type ProgressBarProps = {
  progress: number; // 0-100
  variant?: 'default' | 'gradient' | 'striped' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'default',
  size = 'md',
  showPercentage = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6',
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const renderProgressBar = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        );

      case 'striped':
        return (
          <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
            <div
              className="h-full bg-orange-400 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${clampedProgress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
            </div>
          </div>
        );

      case 'pulse':
        return (
          <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
            <div
              className="h-full bg-orange-400 rounded-full transition-all duration-500 ease-out animate-pulse"
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        );

      default:
        return (
          <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}>
            <div
              className="h-full bg-orange-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${clampedProgress}%` }}
            />
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {renderProgressBar()}
      {showPercentage && (
        <div className="text-sm text-gray-300 mt-1 text-right">
          {Math.round(clampedProgress)}
          %
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
