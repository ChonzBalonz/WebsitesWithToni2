'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function CountUp({ end, suffix = '', duration = 1.5 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer && observer.disconnect();
  }, [end, duration, hasAnimated]);

  function startCounting() {
    if (hasAnimated) {
      return;
    }
    setHasAnimated(true);
    const start = 0;
    const endValue = end;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (endValue - start) + start);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    }
    requestAnimationFrame(animate);
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Beauty Empress - Beauty Salon',
      category: 'Business Website',
      description: 'A modern, elegant website for a beauty salon that increased online bookings by 40%.',
      image: '/assets/images/nextjs-boilerplate-sign-in.png',
      video: '/assets/videos/Beautyempressbe website preview.mp4',
      features: ['Online Booking System', 'Service Gallery', 'Customer Reviews', 'Mobile Responsive'],
      results: ['40% increase in online bookings', '25% more website traffic', 'Improved customer engagement'],
      price: '$399',
    },
    {
      id: 2,
      title: 'Corta Pelos - Barbershop',
      category: 'Business Website',
      description: 'A sleek, masculine design for a barbershop that helped increase walk-in customers.',
      image: '/assets/images/nextjs-boilerplate-sign-up.png',
      video: '/assets/videos/cortapelos website preivew .mp4',
      features: ['Service Menu', 'Gallery Showcase', 'Contact Integration', 'Social Media Links'],
      results: ['30% increase in walk-ins', 'Better brand recognition', 'Enhanced online presence'],
      price: '$399',
    },
    {
      id: 3,
      title: 'Plumbing Services - Professional Plumbing',
      category: 'Business Website',
      description: 'A professional plumbing website with service showcase and contact integration.',
      image: '/assets/images/nextjs-boilerplate-sign-in.png',
      video: '/assets/videos/tonis_plumbing_website.mp4',
      features: ['Service Showcase', 'Contact Forms', 'Mobile Responsive', 'Professional Design'],
      results: ['Enhanced online presence', 'Improved lead generation', 'Professional brand image'],
      price: '$650',
    },
  ];

  return (
    <div className="bg-black min-h-screen w-full text-white font-serif">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full bg-black bg-opacity-90 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-center py-4 relative px-4">
          <Image
            src="/assets/images/computer logo final (maybe).png"
            alt="Logo"
            height={40}
            width={40}
            className="absolute left-4 h-10 w-auto"
            priority
          />
          <ul className="flex space-x-4 md:space-x-8 text-base md:text-lg font-medium mx-auto">
            <li><Link href="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 cursor-pointer">Services</Link></li>
            <li><Link href="/portfolio" className="text-orange-400 border-b-2 border-orange-400">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-b from-gray-900 to-black overflow-hidden px-4">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center pt-8 md:pt-12 pb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Discover how we've helped small businesses transform their online presence and drive real results.</p>

          {/* Multiple CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-md sm:max-w-none">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition text-center">
              Get Your Website
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition text-center">
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {portfolioItems.map(item => (
            <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400 transition">
              {/* Project Header */}
              <div className="p-4 md:p-6 border-b border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <span className="inline-block bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl font-bold text-orange-400">{item.price}</div>
                    <div className="text-sm text-gray-400">Project Cost</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
              </div>

              {/* Project Media */}
              <div className="relative h-48 md:h-64 bg-gray-800">
                {item.video
                  ? (
                      <video
                        className="w-full h-full object-cover pointer-events-none select-none"
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        poster={item.image}
                      />
                    )
                  : (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
              </div>

              {/* Project Details */}
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-3 text-orange-400">Features</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-xs md:text-sm">
                          <span className="text-orange-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-bold text-base md:text-lg mb-3 text-orange-400">Results</h4>
                    <ul className="space-y-2">
                      {item.results.map((result, index) => (
                        <li key={index} className="flex items-center text-xs md:text-sm">
                          <span className="text-green-400 mr-2">📈</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700">
                  <Link
                    href="/contact"
                    className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center"
                  >
                    Get Similar Website
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                <CountUp end={100} suffix="%" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                <CountUp end={24} suffix="h" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                <CountUp end={3} />
                <span className="mx-1">-</span>
                <CountUp end={2} />
              </div>
              <p className="text-gray-300 text-sm md:text-base">Weeks Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                <CountUp end={40} suffix="%" />
              </div>
              <p className="text-gray-300 text-sm md:text-base">Average Revenue Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">"Toni delivered exactly what we needed. Our new website has increased our online sales by 40%!"</p>
              <div className="flex items-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3 text-sm md:text-base">
                  L
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Lupe</p>
                  <p className="text-xs md:text-sm text-gray-400">Beauty Empress</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm md:text-base">"Professional, responsive, and affordable. Highly recommend for any small business."</p>
              <div className="flex items-center">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3 text-sm md:text-base">
                  A
                </div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Angel</p>
                  <p className="text-xs md:text-sm text-gray-400">CortaPelos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-gray-900 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Let's create a website that drives results for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition">
              Get Your Free Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
