'use client';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import PageLoader from '../../../../components/PageLoader';
import ProgressBar from '../../../../components/ProgressBar';
import SkeletonLoader from '../../../../components/SkeletonLoader';

export default function LoadingDemoPage() {
  const [progress, setProgress] = useState(0);
  const [showPageLoader, setShowPageLoader] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<'fade' | 'slide' | 'scale' | 'typing'>('fade');

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handlePageLoaderDemo = (variant: 'fade' | 'slide' | 'scale' | 'typing') => {
    setCurrentVariant(variant);
    setShowPageLoader(true);
    setTimeout(() => setShowPageLoader(false), 3000);
  };

  const spinnerVariants = ['spin', 'pulse', 'bounce', 'wave', 'dots', 'gradient'];
  const sizes = ['sm', 'md', 'lg', 'xl'];

  return (
    <PageLoader isLoading={showPageLoader} variant={currentVariant}>
      <div className="bg-black min-h-screen w-full text-white font-serif p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">
            Loading Animations Demo
          </h1>

          {/* Loading Spinners */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Loading Spinners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {spinnerVariants.map(variant => (
                <div key={variant} className="text-center p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold mb-3 capitalize">{variant}</h3>
                  <div className="flex justify-center">
                    <LoadingSpinner variant={variant as any} size="md" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Different Sizes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Different Sizes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sizes.map(size => (
                <div key={size} className="text-center p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-sm font-semibold mb-3 capitalize">{size}</h3>
                  <div className="flex justify-center">
                    <LoadingSpinner size={size as any} variant="spin" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skeleton Loaders */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Skeleton Loaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Text</h3>
                <SkeletonLoader variant="text" lines={3} />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Card</h3>
                <SkeletonLoader variant="card" />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Avatar</h3>
                <SkeletonLoader variant="avatar" />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Form</h3>
                <SkeletonLoader variant="form" />
              </div>
            </div>
          </section>

          {/* Progress Bars */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Progress Bars</h2>
            <div className="space-y-6">
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Default</h3>
                <ProgressBar progress={progress} showPercentage />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Gradient</h3>
                <ProgressBar progress={progress} variant="gradient" showPercentage />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Striped</h3>
                <ProgressBar progress={progress} variant="striped" showPercentage />
              </div>
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-sm font-semibold mb-3">Pulse</h3>
                <ProgressBar progress={progress} variant="pulse" showPercentage />
              </div>
            </div>
          </section>

          {/* Page Loader Demo */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Page Loader Demo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button
                onClick={() => handlePageLoaderDemo('fade')}
                className="p-4 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Fade Loader
              </button>
              <button
                onClick={() => handlePageLoaderDemo('slide')}
                className="p-4 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Slide Loader
              </button>
              <button
                onClick={() => handlePageLoaderDemo('scale')}
                className="p-4 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Scale Loader
              </button>
              <button
                onClick={() => handlePageLoaderDemo('typing')}
                className="p-4 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-500 transition"
              >
                Typing Loader
              </button>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Usage Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Button Loading</h3>
                <button className="bg-orange-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center">
                  <LoadingSpinner size="sm" variant="spin" className="mr-2" />
                  Loading...
                </button>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Content Loading</h3>
                <div className="space-y-2">
                  <SkeletonLoader variant="text" lines={2} />
                  <SkeletonLoader variant="button" />
                </div>
              </div>
            </div>
          </section>

          {/* Reset Progress */}
          <div className="text-center">
            <button
              onClick={() => setProgress(0)}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition"
            >
              Reset Progress
            </button>
          </div>
        </div>
      </div>
    </PageLoader>
  );
}
