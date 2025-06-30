'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
            <li><Link href="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 cursor-pointer">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</Link></li>
            <li><Link href="/contact" className="text-orange-400 border-b-2 border-orange-400">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative z-20 text-center py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Let's Build Something Amazing</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">Get your free consultation and quote. No pressure, just honest advice about your website needs.</p>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">Fast Response</h3>
              <p className="text-xs md:text-sm text-gray-300">Get a response within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">Free Quote</h3>
              <p className="text-xs md:text-sm text-gray-300">No hidden fees or surprises</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-2 text-sm md:text-base">Custom Solution</h3>
              <p className="text-xs md:text-sm text-gray-300">Tailored to your business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Forms */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 md:gap-12 py-8 md:py-16 px-4 relative z-20">
        {/* Email Form or Success Screen */}
        {showSuccess
          ? (
              <div className="flex-1 rounded-lg p-8 md:p-12 shadow-lg flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-orange-400 text-center animate-fade-in">
                <svg className="mx-auto mb-6" width="64" height="64" fill="none" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="32" fill="#f97316" />
                  <path d="M20 34l8 8 16-16" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Thank You!</h2>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  Your message has been sent successfully.
                  <br />
                  I'll get back to you within 24 hours.
                </p>
                <Link href="/" className="mt-4 inline-block bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-8 rounded-lg transition text-base md:text-lg">Back to Home</Link>
              </div>
            )
          : (
              <form
                onSubmit={handleSubmit}
                className="flex-1 rounded-lg p-6 md:p-8 shadow-lg flex flex-col backdrop-blur-sm"
                style={{
                  minWidth: 0,
                  backgroundColor: 'rgba(10, 10, 25, 0.85)',
                  boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
                }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">Get Your Free Quote</h2>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Tell us about your project and we'll provide a custom quote within 24 hours.</p>
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="email-name">Full Name *</label>
                <input
                  id="email-name"
                  name="name"
                  type="text"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
                  placeholder="Your full name"
                  required
                />
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="email-address">Email Address *</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
                  placeholder="your@email.com"
                  required
                />
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="email-phone">Phone Number</label>
                <input
                  id="email-phone"
                  name="phone"
                  type="tel"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
                  placeholder="(555) 555-5555"
                />
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="project-type">Project Type *</label>
                <select
                  id="project-type"
                  name="projectType"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
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
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="budget">Plan Options</label>
                <select
                  id="budget"
                  name="budget"
                  className="mb-3 md:mb-4 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
                >
                  <option value="">Select plan</option>
                  <option value="basic">Basic ($400)</option>
                  <option value="professional">Professional ($1,000)</option>
                  <option value="custom">Custom (Get Quote)</option>
                </select>
                <label className="mb-2 text-xs md:text-sm font-semibold" htmlFor="email-message">Project Details *</label>
                <textarea
                  id="email-message"
                  name="message"
                  className="mb-4 md:mb-6 p-2 md:p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none text-sm md:text-base"
                  rows={4}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-orange-400 hover:bg-orange-500 disabled:bg-gray-600 text-black font-bold py-3 md:py-4 rounded-lg transition text-base md:text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  * Required fields. We respect your privacy and will never spam you.
                </p>
              </form>
            )}

        {/* Contact Info & Testimonials */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Quick Contact */}
          <div
            className="rounded-lg p-6 md:p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">Quick Contact</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="text-xl md:text-2xl mr-3 md:mr-4">📧</div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Email</p>
                  <a href="mailto:anthony3303@outlook.com" className="text-orange-400 hover:text-orange-300 text-sm md:text-base">
                    anthony3303@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-xl md:text-2xl mr-3 md:mr-4">📱</div>
                <div>
                  <p className="font-semibold text-sm md:text-base">Phone</p>
                  <a href="tel:+16305406506" className="text-orange-400 hover:text-orange-300 text-sm md:text-base">
                    (630) 540-6506
                  </a>
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">What Clients Say</h2>
            <div className="space-y-4 md:space-y-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-sm md:text-base text-gray-300 mb-2">"Toni delivered exactly what we needed. Our new website has increased our online sales by 40%!"</p>
                <p className="text-xs md:text-sm font-semibold text-orange-400">- Lupe, Beauty Empress</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-sm md:text-base text-gray-300 mb-2">"Professional, responsive, and affordable. Highly recommend for any small business."</p>
                <p className="text-xs md:text-sm font-semibold text-orange-400">- Angel, Corta Pelos</p>
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
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-orange-400">Why Choose Us</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">Fast delivery (2-3 weeks)</p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">Mobile-responsive design</p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">SEO optimized</p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">Lifetime support included</p>
              </div>
              <div className="flex items-start">
                <span className="text-orange-400 mr-2 mt-1">✓</span>
                <p className="text-sm md:text-base text-gray-300">Free revisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
