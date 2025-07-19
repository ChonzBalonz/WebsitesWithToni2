'use client';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

type PageLoaderProps = {
  isLoading?: boolean;
  children: React.ReactNode;
  variant?: 'fade' | 'slide' | 'scale' | 'typing';
};

const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading = false,
  children,
  variant = 'fade',
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Hide loader and show content with animation
      setShowLoader(false);
      setTimeout(() => setShowContent(true), 300);
    } else {
      setShowContent(false);
      setShowLoader(true);
    }
  }, [isLoading]);

  const renderLoader = () => {
    switch (variant) {
      case 'slide':
        return (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="xl" variant="gradient" className="mb-4" />
              <div className="text-orange-400 text-lg font-semibold animate-pulse">
                Loading...
              </div>
            </div>
          </div>
        );

      case 'scale':
        return (
          <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse scale-110" />
                <div className="absolute inset-2 bg-black rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <LoadingSpinner size="lg" variant="spin" />
                </div>
              </div>
              <div className="text-orange-400 text-lg font-semibold mt-4 animate-pulse">
                Preparing your experience...
              </div>
            </div>
          </div>
        );

      case 'typing':
        return (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="text-center">
              <div className="text-orange-400 text-2xl font-mono">
                <span className="animate-pulse">W</span>
                <span className="animate-pulse" style={{ animationDelay: '0.1s' }}>e</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>b</span>
                <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>s</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>i</span>
                <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>t</span>
                <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>e</span>
                <span className="animate-pulse" style={{ animationDelay: '0.7s' }}>s</span>
                <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>.</span>
                <span className="animate-pulse" style={{ animationDelay: '0.9s' }}>.</span>
                <span className="animate-pulse" style={{ animationDelay: '1.0s' }}>.</span>
              </div>
              <LoadingSpinner size="md" variant="dots" className="mt-4" />
            </div>
          </div>
        );

      default:
        return (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="xl" variant="spin" className="mb-4" />
              <div className="text-orange-400 text-lg font-semibold animate-pulse">
                Loading amazing content...
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {showLoader && renderLoader()}
      <div
        className={`transition-all duration-500 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageLoader;
