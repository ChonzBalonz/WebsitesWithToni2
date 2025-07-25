'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import PageTransition from '../../../components/PageTransition';

export default function HomePage() {
  // Typewriter effect for hero section
  const words = useMemo(() => ['big', 'small', 'any'], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setTyping(false);
      }, 1000); // 1 second pause after typing
    } else if (typing) {
      if (
        typeof words[currentWordIndex] !== 'undefined'
        && displayed.length < words[currentWordIndex].length
      ) {
        timeout = setTimeout(() => {
          setDisplayed(words[currentWordIndex]!.slice(0, displayed.length + 1));
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setIsPaused(true);
        }, 0);
      }
    } else {
      if (
        typeof words[currentWordIndex] !== 'undefined'
        && displayed.length > 0
      ) {
        timeout = setTimeout(() => {
          setDisplayed(words[currentWordIndex]!.slice(0, displayed.length - 1));
        }, 120);
      } else {
        const nextWordTimeout = setTimeout(() => {
          setCurrentWordIndex(i => (i + 1) % words.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(nextWordTimeout);
      }
    }
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [displayed, typing, currentWordIndex, isPaused, words]);

  // useEffect(() => {
  //   setShowModal(false); // Ensure modal is hidden on mount
  //   const timer = setTimeout(() => setShowModal(true), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <PageTransition>
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
              <li>
                <Link
                  href="/"
                  className="text-orange-400 border-b-2 border-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-400 cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-orange-400 cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
            src="/assets/videos/CodingHeroVIDEO.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center pt-8 md:pt-12 pb-8 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-4 drop-shadow-lg">
              Custom Websites for
              <br />
              <span className="text-orange-400">{displayed}</span>
              {' '}
              Businesses
            </h1>
            <p className="text-lg md:text-xl text-center mb-6 max-w-2xl">
              Transform your business with a professional website that converts
              visitors into customers. Starting at $400.
            </p>

            {/* Multiple CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-md sm:max-w-none justify-center items-center">
              <Link
                href="/contact"
                className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition text-center"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition text-center"
              >
                View Portfolio
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col items-center mt-4">
              <div className="flex justify-center mb-2">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-sm text-gray-300 text-center">
                Trusted by 50+ small businesses
              </p>
            </div>
          </div>
        </div>

        {/* Quick Benefits Section */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-300">Your website ready in 2-3 weeks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-gray-300">Starting at $400, no hidden fees</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Support Options</h3>
                <p className="text-gray-300">
                  Affordable support and update plans available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Crafting Unique Websites for You */}
        <section className="py-12 md:py-16 flex flex-col items-center min-h-[40vh] px-4">
          <Image
            src="/assets/images/arcjet-light.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-16 md:w-20 h-16 md:h-20 mb-4"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Crafting Unique Websites for You
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 w-full max-w-6xl mb-12">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Your Vision, Our Expertise
              </h3>
              <p className="text-base md:text-lg mb-4">
                At Websites With Toni, we specialize in creating tailored websites
                for small businesses, ensuring your online presence reflects your
                brand's identity and attracts loyal customers through intuitive
                design and user-friendly navigation.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full font-semibold transition"
              >
                Start Your Project
              </Link>
              <div className="mt-6 relative">
                <video
                  className="w-full max-w-md rounded-lg shadow-lg mx-auto pointer-events-none select-none"
                  src="/assets/videos/cortapelos website preivew .mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  poster="/assets/images/nextjs-boilerplate-sign-in.png"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Empowering Small Businesses Online
              </h3>
              <p className="text-base md:text-lg mb-4">
                We understand the unique needs of each business, whether a local
                shop or a small business, and provide solutions from simple
                landing pages to fully functional sites that drive results.
              </p>
              <Link
                href="/portfolio"
                className="inline-block bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 py-2 rounded-full font-semibold transition"
              >
                See Our Work
              </Link>
              <div className="mt-6 relative">
                <video
                  className="w-full max-w-md rounded-lg shadow-lg mx-auto pointer-events-none select-none"
                  src="/assets/videos/Beautyempressbe website preview.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  poster="/assets/images/nextjs-boilerplate-sign-up.png"
                >
                  <track kind="captions" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  key: 'basic',
                  className:
                    'bg-black border border-gray-700 rounded-lg p-6 md:p-8 text-center',
                  title: 'Basic',
                  price: '$400',
                  features: [
                    '1 Pages',
                    'Mobile Responsive',
                    'Contact Form',
                    'SEO Optimized',
                    '2 Revisions',
                  ],
                  button: (
                    <Link
                      href="/contact"
                      className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition"
                    >
                      Get Started
                    </Link>
                  ),
                },
                {
                  key: 'professional',
                  className:
                    'bg-orange-400 border border-orange-400 rounded-lg p-6 md:p-8 text-center text-black',
                  title: 'Professional',
                  price: '$1,000',
                  features: [
                    '6 Pages',
                    'E-commerce Ready',
                    'Blog Setup',
                    'Google Analytics',
                    '3 Revisions',
                    '1 Month Support',
                  ],
                  button: (
                    <Link
                      href="/contact"
                      className="block w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Most Popular
                    </Link>
                  ),
                },
                {
                  key: 'custom',
                  className:
                    'bg-black border border-gray-700 rounded-lg p-6 md:p-8 text-center',
                  title: 'Custom',
                  price: '$ Get Quote',
                  features: [
                    'Unlimited Pages',
                    'Custom Features',
                    'Advanced SEO',
                    'Content Creation',
                    'Unlimited Revisions',
                    '3 Months Support',
                  ],
                  button: (
                    <Link
                      href="/contact"
                      className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition"
                    >
                      Get Quote
                    </Link>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={card.key}
                  className={`
                    ${card.className}
                    transition-transform duration-300 hover:scale-105
                    ${
                card.key === 'professional'
                  ? 'hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.7)]'
                  : card.key === 'basic'
                    ? 'hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]'
                    : 'hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.3)]'
                }
                  `}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-4${card.key === 'professional' ? ' border-b-4 border-black' : ''}`}
                  >
                    {card.title}
                  </h3>
                  <div className="text-3xl md:text-4xl font-bold mb-4">
                    {card.price}
                  </div>
                  <ul className="text-left mb-6 md:mb-8 space-y-2 text-sm md:text-base">
                    {card.features.map(feature => (
                      <li key={feature}>
                        ✓
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {card.button}
                </motion.div>
              ))}
            </div>
            {/* Down Payment Note */}
            <div className="max-w-2xl mx-auto mt-6 bg-black bg-opacity-80 border border-orange-400 rounded-lg p-4 text-center">
              <span className="text-orange-400 font-semibold text-base md:text-lg">
                A 30% down payment is required for all new clients before project
                work begins.
              </span>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Join 50+ small businesses that have already taken their business
              online with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition"
              >
                Get Your Free Quote Today
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
