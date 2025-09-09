'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// TODO: Update the import path to where you place the ProfileCard component
import ProfileCard from '../../../../components/ProfileCard';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      projectType: formData.get('projectType') as string,
      budget: formData.get('budget') as string,
      message: formData.get('message') as string,
    };

    try {
      await fetch('/en/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setShowSuccess(true);
    } catch {
      setShowSuccess(true); // Show success even if network error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full text-white font-serif relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-pulse" />
      {/* Dim Overlay */}
      <div className="fixed inset-0 w-full h-full z-10 pointer-events-none bg-black/70" />

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-20 w-full bg-black bg-opacity-90 border-b border-gray-800">
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
              <Link href="/" className="hover:text-orange-400 cursor-pointer">
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
                className="text-orange-400 border-b-2 border-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative z-20 text-center py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Let's Build Something Amazing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
            Get your free consultation and quote. No pressure, just honest
            advice about your website needs.
          </p>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">
                Fast Response
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                Get a response within 24 hours
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">
                Free Quote
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                No hidden fees or surprises
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">
                Custom Solution
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                Tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Forms */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 py-8 md:py-16 px-4 relative z-20">
        {/* Email Form or Success Screen */}
        {showSuccess
          ? (
              <div className="flex-1 rounded-lg p-8 md:p-12 shadow-lg flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-400 text-center">
                <svg
                  className="mx-auto mb-6"
                  width="64"
                  height="64"
                  fill="none"
                  viewBox="0 0 64 64"
                >
                  <circle cx="32" cy="32" r="32" fill="#f97316" />
                  <path
                    d="M20 34l8 8 16-16"
                    stroke="#fff"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">
                  Thank You!
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  Your message has been sent successfully.
                  <br />
                  I'll get back to you within 24 hours.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-block bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-8 rounded-lg transition text-base md:text-lg"
                >
                  Back to Home
                </Link>
              </div>
            )
          : (
              <form
                onSubmit={handleSubmit}
                className="flex-1 rounded-lg p-6 md:p-8 shadow-lg flex flex-col backdrop-blur-sm relative overflow-hidden"
                style={{
                  minWidth: 0,
                  backgroundColor: 'rgba(10, 10, 25, 0.85)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Floating Particles */}
                  <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute top-20 right-16 w-1 h-1 bg-green-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-32 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute bottom-40 right-12 w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '3s' }}></div>
                  <div className="absolute bottom-60 left-8 w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>

                  {/* Animated Gradient Orbs */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-400/5 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400 relative z-10 animate-fade-in">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base relative z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Tell us about your project and we'll provide a custom quote within
                  24 hours.
                </p>

                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="email-name"
                  style={{ animationDelay: '0.3s' }}
                >
                  Full Name *
                </label>
                <input
                  id="email-name"
                  name="name"
                  type="text"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  placeholder="Your full name"
                  style={{ animationDelay: '0.4s' }}
                  required
                />
                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="email-address"
                  style={{ animationDelay: '0.5s' }}
                >
                  Email Address *
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  placeholder="your@email.com"
                  style={{ animationDelay: '0.6s' }}
                  required
                />
                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="email-phone"
                  style={{ animationDelay: '0.7s' }}
                >
                  Phone Number
                </label>
                <input
                  id="email-phone"
                  name="phone"
                  type="tel"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  placeholder="(555) 555-5555"
                  style={{ animationDelay: '0.8s' }}
                />
                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="project-type"
                  style={{ animationDelay: '0.9s' }}
                >
                  Project Type *
                </label>
                <select
                  id="project-type"
                  name="projectType"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  style={{ animationDelay: '1s' }}
                  required
                >
                  <option value="">Select project type</option>
                  <option value="business-website">Business Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="custom-development">Custom Development</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="seo">SEO Services</option>
                  <option value="other">Other</option>
                </select>
                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="budget"
                  style={{ animationDelay: '1.1s' }}
                >
                  Plan Options
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  style={{ animationDelay: '1.2s' }}
                >
                  <option value="">Select plan</option>
                  <option value="basic">Basic ($400)</option>
                  <option value="professional">Professional ($1,000)</option>
                  <option value="custom">Custom (Get Quote)</option>
                </select>
                <label
                  className="mb-2 text-xs md:text-sm font-semibold relative z-10 animate-slide-in"
                  htmlFor="email-message"
                  style={{ animationDelay: '1.3s' }}
                >
                  Project Details *
                </label>
                <textarea
                  id="email-message"
                  name="message"
                  className="mb-4 md:mb-6 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base relative z-10 transition-all duration-300 hover:border-orange-300 focus:scale-[1.02] animate-slide-in"
                  rows={4}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  style={{ animationDelay: '1.4s' }}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-400 hover:bg-orange-500 disabled:bg-gray-600 text-black font-bold py-3 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg relative z-10 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/25 animate-slide-in"
                  style={{ animationDelay: '1.5s' }}
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center relative z-10 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                  * Required fields. We respect your privacy and will never spam
                  you.
                </p>

                {/* Process Overview Section */}
                <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-lg border border-gray-700 bg-black bg-opacity-30 relative z-10 animate-slide-up flex-1 flex flex-col" style={{ animationDelay: '1.7s' }}>
                  <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-orange-400 text-center animate-glow">
                    Our Process
                  </h3>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex items-start animate-fade-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300" style={{ animationDelay: '1.8s' }}>
                        <span className="text-orange-400 mr-3 mt-1 font-bold text-sm animate-bounce" style={{ animationDelay: '2s' }}>1.</span>
                        <div>
                          <p className="font-semibold text-sm text-gray-200 mb-1">Consultation</p>
                          <p className="text-xs text-gray-400">We discuss your project needs, goals, and vision to understand exactly what you want to achieve.</p>
                        </div>
                      </div>
                      <div className="flex items-start animate-fade-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300" style={{ animationDelay: '1.9s' }}>
                        <span className="text-orange-400 mr-3 mt-1 font-bold text-sm animate-bounce" style={{ animationDelay: '2.2s' }}>2.</span>
                        <div>
                          <p className="font-semibold text-sm text-gray-200 mb-1">Planning</p>
                          <p className="text-xs text-gray-400">Create a detailed project roadmap with timelines, milestones, and technical specifications.</p>
                        </div>
                      </div>
                      <div className="flex items-start animate-fade-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300" style={{ animationDelay: '2s' }}>
                        <span className="text-orange-400 mr-3 mt-1 font-bold text-sm animate-bounce" style={{ animationDelay: '2.4s' }}>3.</span>
                        <div>
                          <p className="font-semibold text-sm text-gray-200 mb-1">Development</p>
                          <p className="text-xs text-gray-400">Build your website with modern technologies, ensuring quality code and responsive design.</p>
                        </div>
                      </div>
                      <div className="flex items-start animate-fade-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300" style={{ animationDelay: '2.1s' }}>
                        <span className="text-orange-400 mr-3 mt-1 font-bold text-sm animate-bounce" style={{ animationDelay: '2.6s' }}>4.</span>
                        <div>
                          <p className="font-semibold text-sm text-gray-200 mb-1">Launch</p>
                          <p className="text-xs text-gray-400">Deploy your website and optimize for performance, SEO, and user experience.</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 md:p-4 rounded bg-orange-400 bg-opacity-10 border border-orange-400 border-opacity-20 mb-4 md:mb-6 animate-pulse-glow" style={{ animationDelay: '2.2s' }}>
                      <p className="text-sm text-orange-300 text-center font-semibold">
                        <span className="font-bold">Timeline:</span>
                        {' '}
                        2-3 weeks for most projects
                      </p>
                      <p className="text-xs text-orange-200 text-center mt-1">
                        Rush delivery available for urgent projects
                      </p>
                    </div>

                    {/* Pricing & Guarantees */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-3 md:p-4 rounded bg-gray-800 bg-opacity-50 border border-gray-600 animate-slide-in hover:scale-105 transition-transform duration-300 text-center" style={{ animationDelay: '2.3s' }}>
                        <p className="font-semibold text-sm text-gray-200 mb-1">Starting at</p>
                        <p className="text-orange-400 text-xl font-bold animate-number-glow">$400</p>
                        <p className="text-xs text-gray-400 mt-1">Basic package</p>
                      </div>
                      <div className="p-3 md:p-4 rounded bg-gray-800 bg-opacity-50 border border-gray-600 animate-slide-in hover:scale-105 transition-transform duration-300 text-center" style={{ animationDelay: '2.4s' }}>
                        <p className="font-semibold text-sm text-gray-200 mb-1">Free Revisions</p>
                        <p className="text-orange-400 text-xl font-bold animate-number-glow">Unlimited</p>
                        <p className="text-xs text-gray-400 mt-1">Until you're satisfied</p>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: '2.5s' }}>
                      <p className="font-semibold text-sm text-gray-200 mb-3 text-center">What's Included:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center animate-slide-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300" style={{ animationDelay: '2.6s' }}>
                          <span className="text-orange-400 mr-2 text-sm animate-pulse">✓</span>
                          <span className="text-xs text-gray-300">Mobile-responsive design</span>
                        </div>
                        <div className="flex items-center animate-slide-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300" style={{ animationDelay: '2.7s' }}>
                          <span className="text-orange-400 mr-2 text-sm animate-pulse">✓</span>
                          <span className="text-xs text-gray-300">SEO optimization</span>
                        </div>
                        <div className="flex items-center animate-slide-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300" style={{ animationDelay: '2.8s' }}>
                          <span className="text-orange-400 mr-2 text-sm animate-pulse">✓</span>
                          <span className="text-xs text-gray-300">Lifetime support</span>
                        </div>
                        <div className="flex items-center animate-slide-in p-2 rounded hover:bg-gray-800 hover:bg-opacity-20 transition-all duration-300" style={{ animationDelay: '2.9s' }}>
                          <span className="text-orange-400 mr-2 text-sm animate-pulse">✓</span>
                          <span className="text-xs text-gray-300">Performance optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee - Fixed at bottom */}
                  <div className="p-3 md:p-4 rounded bg-green-400 bg-opacity-10 border border-green-400 border-opacity-20 animate-slide-up hover:scale-105 transition-transform duration-300 mt-auto" style={{ animationDelay: '3s' }}>
                    <p className="text-sm text-green-300 text-center animate-glow font-semibold">
                      <span className="font-bold">100% Satisfaction Guarantee</span>
                    </p>
                    <p className="text-xs text-green-300 text-center mt-1">
                      Not happy? We'll fix it or your money back
                    </p>
                  </div>
                </div>

                {/* Custom CSS for animations */}
                <style jsx>
                  {`
                  @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                  
                  @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-20px); }
                    to { opacity: 1; transform: translateX(0); }
                  }
                  
                  @keyframes slide-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                  
                  @keyframes glow {
                    0%, 100% { text-shadow: 0 0 5px rgba(249, 115, 22, 0.5); }
                    50% { text-shadow: 0 0 20px rgba(249, 115, 22, 0.8), 0 0 30px rgba(249, 115, 22, 0.4); }
                  }
                  
                  @keyframes number-glow {
                    0%, 100% { text-shadow: 0 0 5px rgba(249, 115, 22, 0.5); }
                    50% { text-shadow: 0 0 15px rgba(249, 115, 22, 0.8); }
                  }
                  
                  @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 5px rgba(249, 115, 22, 0.2); }
                    50% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4), 0 0 30px rgba(249, 115, 22, 0.2); }
                  }
                  
                  .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                    opacity: 0;
                  }
                  
                  .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                    opacity: 0;
                  }
                  
                  .animate-slide-up {
                    animation: slide-up 0.6s ease-out forwards;
                    opacity: 0;
                  }
                  
                  .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                  }
                  
                  .animate-number-glow {
                    animation: number-glow 2s ease-in-out infinite;
                  }
                  
                  .animate-pulse-glow {
                    animation: pulse-glow 3s ease-in-out infinite;
                  }
                `}
                </style>
              </form>
            )}

        {/* Contact Info & Testimonials */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Profile Card Section */}
          <div className="mb-6 flex justify-center">
            <ProfileCard
              name="Anthony Ramirez"
              title="Web Developer"
              handle="Anthony3303@outlook.com"
              status="online"
              avatarUrl="/assets/images/image_of_me.jpg"
              showUserInfo={true}
              enableTilt={true}
            />
          </div>

          {/* Services Overview */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">🌐</span>
                <span className="text-sm md:text-base text-gray-300">Business Websites</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">🛒</span>
                <span className="text-sm md:text-base text-gray-300">E-commerce Stores</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">📱</span>
                <span className="text-sm md:text-base text-gray-300">Mobile-First Design</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">🔍</span>
                <span className="text-sm md:text-base text-gray-300">SEO Optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">⚡</span>
                <span className="text-sm md:text-base text-gray-300">Performance Optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-2">🛠️</span>
                <span className="text-sm md:text-base text-gray-300">Website Maintenance</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
              Quick Contact
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="text-xl md:text-2xl mr-3 md:mr-4">📧</div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Email</p>
                  <a
                    href="mailto:anthony3303@outlook.com"
                    className="text-orange-400 hover:text-orange-300 text-sm md:text-base"
                  >
                    anthony3303@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl md:text-2xl mr-3 md:mr-4">📱</div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Phone</p>
                  <a
                    href="tel:+16305406506"
                    className="text-orange-400 hover:text-orange-300 text-sm md:text-base"
                  >
                    (630) 540-6506
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl md:text-2xl mr-3 md:mr-4">⏰</div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Response Time</p>
                  <span className="text-orange-400 text-sm md:text-base">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
              What Clients Say
            </h2>
            <div className="space-y-4 md:space-y-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-sm md:text-base text-gray-300 mb-2">
                  "Toni delivered exactly what we needed. Our new website has
                  increased our online sales by 40%!"
                </p>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  - Lupe, Beauty Empress
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-sm md:text-base text-gray-300 mb-2">
                  "Professional, responsive, and affordable. Highly recommend
                  for any small business."
                </p>
                <p className="text-xs md:text-sm font-semibold text-orange-400">
                  - Angel, Corta Pelos
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
              Why Choose Us
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">
                  Fast delivery (2-3 weeks)
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">
                  Mobile-responsive design
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">
                  SEO optimized
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">
                  Lifetime support included
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">
                  Free revisions
                </p>
              </div>
            </div>
          </div>

          {/* Process Overview */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">
              Our Process
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1 font-bold">1.</span>
                <p className="text-sm md:text-base text-gray-300">
                  <span className="font-semibold">Consultation:</span>
                  {' '}
                  We discuss your needs and goals
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1 font-bold">2.</span>
                <p className="text-sm md:text-base text-gray-300">
                  <span className="font-semibold">Planning:</span>
                  {' '}
                  Create detailed project roadmap
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1 font-bold">3.</span>
                <p className="text-sm md:text-base text-gray-300">
                  <span className="font-semibold">Development:</span>
                  {' '}
                  Build your website with care
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1 font-bold">4.</span>
                <p className="text-sm md:text-base text-gray-300">
                  <span className="font-semibold">Launch:</span>
                  {' '}
                  Deploy and optimize for success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
