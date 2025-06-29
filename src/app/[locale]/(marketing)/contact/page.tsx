'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => 1);

    function draw() {
      if (!ctx) {
        return;
      }
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;
      ctx.shadowColor = '#00ff41';
      ctx.shadowBlur = 8;
      for (let i = 0; i < drops.length; i++) {
        const text = String(letters[Math.floor(Math.random() * letters.length)]);
        ctx.fillStyle = '#00ff41';
        ctx.fillText(text, i * fontSize, (drops[i] ?? 0) * fontSize);
        if (Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] = (drops[i] ?? 0) + 1;
      }
      ctx.shadowBlur = 0;
    }

    let animationFrameId: number;
    let frame = 0;
    function animate() {
      frame++;
      if (frame % 2 === 0) {
        draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!canvas) {
        return;
      }
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen w-full text-white font-serif relative overflow-hidden">
      {/* Matrix Rain Canvas */}
      <canvas id="matrix-canvas" className="fixed inset-0 w-full h-full z-0 pointer-events-none" />
      {/* Dim Overlay */}
      <div className="fixed inset-0 w-full h-full z-10 pointer-events-none bg-black/70" />

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-20 w-full bg-black bg-opacity-90 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-center py-4 relative">
          <Image
            src="/assets/images/computer logo final (maybe).png"
            alt="Logo"
            height={40}
            width={40}
            className="absolute left-0 h-10 w-auto ml-4"
            priority
          />
          <ul className="flex space-x-8 text-lg font-medium mx-auto">
            <li><Link href="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 cursor-pointer">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</Link></li>
            <li><Link href="/contact" className="text-orange-400 border-b-2 border-orange-400">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative z-20 text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Something Amazing</h1>
          <p className="text-xl text-gray-300 mb-8">Get your free consultation and quote. No pressure, just honest advice about your website needs.</p>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">Fast Response</h3>
              <p className="text-sm text-gray-300">Get a response within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-bold mb-2">Free Quote</h3>
              <p className="text-sm text-gray-300">No hidden fees or surprises</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold mb-2">Custom Solution</h3>
              <p className="text-sm text-gray-300">Tailored to your business needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Forms */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 py-16 px-4 relative z-20">
        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 rounded-lg p-8 shadow-lg flex flex-col backdrop-blur-sm"
          style={{
            minWidth: 0,
            backgroundColor: 'rgba(10, 10, 25, 0.85)',
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
          }}
        >
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Get Your Free Quote</h2>
          <p className="text-gray-300 mb-6">Tell us about your project and we'll provide a custom quote within 24 hours.</p>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900 border border-green-400 rounded-lg text-green-300">
              {submitMessage}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900 border border-red-400 rounded-lg text-red-300">
              {submitMessage}
            </div>
          )}

          <label className="mb-2 text-sm font-semibold" htmlFor="email-name">Full Name *</label>
          <input
            id="email-name"
            name="name"
            type="text"
            className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
            placeholder="Your full name"
            required
          />

          <label className="mb-2 text-sm font-semibold" htmlFor="email-address">Email Address *</label>
          <input
            id="email-address"
            name="email"
            type="email"
            className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
            placeholder="your@email.com"
            required
          />

          <label className="mb-2 text-sm font-semibold" htmlFor="email-phone">Phone Number</label>
          <input
            id="email-phone"
            name="phone"
            type="tel"
            className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
            placeholder="(555) 555-5555"
          />

          <label className="mb-2 text-sm font-semibold" htmlFor="project-type">Project Type *</label>
          <select
            id="project-type"
            name="projectType"
            className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
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

          <label className="mb-2 text-sm font-semibold" htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
          >
            <option value="">Select budget range</option>
            <option value="under-500">Under $500</option>
            <option value="500-800">$500 - $800</option>
            <option value="800-1000">$800 - $1,000</option>
            <option value="1000-1300">$1,000 - $1,300</option>
          </select>

          <label className="mb-2 text-sm font-semibold" htmlFor="email-message">Project Details *</label>
          <textarea
            id="email-message"
            name="message"
            className="mb-6 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none"
            rows={5}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-400 hover:bg-orange-500 disabled:bg-gray-600 text-black font-bold py-4 rounded-lg transition text-lg"
          >
            {isSubmitting ? 'Sending...' : 'Get Free Quote'}
          </button>

          <p className="text-xs text-gray-400 mt-3 text-center">
            * Required fields. We respect your privacy and will never spam you.
          </p>
        </form>

        {/* Contact Info & Testimonials */}
        <div className="flex-1 space-y-8">
          {/* Quick Contact */}
          <div
            className="rounded-lg p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Quick Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-2xl mr-4">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:anthony3303@outlook.com" className="text-orange-400 hover:text-orange-300">
                    anthony3303@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-2xl mr-4">📱</div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+16305406506" className="text-orange-400 hover:text-orange-300">
                    (630) 540-6506
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div
            className="rounded-lg p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-orange-400">What Our Clients Say</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-gray-300 mb-2">"Toni delivered exactly what we needed. Our new website has increased our online sales by 40%!"</p>
                <p className="font-semibold text-sm">- Lupe, Beauty Empress</p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <p className="text-gray-300 mb-2">"Professional, responsive, and affordable. Highly recommend for any small business."</p>
                <p className="font-semibold text-sm">- Angel, Corta Pelos</p>
              </div>

            </div>
          </div>

          {/* Why Choose Us */}
          <div
            className="rounded-lg p-8 shadow-lg backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(10, 10, 25, 0.85)',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Why Choose Us</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-orange-400 mr-3">✓</span>
                <span>50+ successful projects completed</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-3">✓</span>
                <span>2-3 week delivery timeline</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-3">✓</span>
                <span>Lifetime support included</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-3">✓</span>
                <span>Mobile-first responsive design</span>
              </div>
              <div className="flex items-center">
                <span className="text-orange-400 mr-3">✓</span>
                <span>SEO optimized for better rankings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
