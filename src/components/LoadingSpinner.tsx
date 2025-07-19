import React from 'react';

type LoadingSpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'pulse' | 'spin' | 'bounce' | 'wave' | 'dots' | 'gradient';
  className?: string;
};

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'spin',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-orange-400 rounded-full animate-pulse ${className}`} />
        );

      case 'bounce':
        return (
          <div className={`${sizeClasses[size]} bg-orange-400 rounded-full animate-bounce ${className}`} />
        );

      case 'wave':
        return (
          <div className="flex space-x-1">
            {[...Array.from({ length: 3 })].map((_, i) => (
              <div
                key={i}
                className="w-2 h-8 bg-orange-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[...Array.from({ length: 3 })].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      case 'gradient':
        return (
          <div className={`${sizeClasses[size]} relative ${className}`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-spin" />
            <div className="absolute inset-1 rounded-full bg-black" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-pulse opacity-75" />
          </div>
        );

      default:
        return (
          <div className={`${sizeClasses[size]} relative ${className}`}>
            <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
            <div className="absolute inset-0 rounded-full border-4 border-orange-400 border-t-transparent animate-spin" />
          </div>
        );
    }
  };

  return renderSpinner();
};

export default LoadingSpinner;
