import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen w-full text-white font-serif">
      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full bg-black bg-opacity-90 border-b border-gray-800">
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
            <li><Link href="/" className="text-orange-400 border-b-2 border-orange-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-400 cursor-pointer">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/videos/CodingHeroVIDEO.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex flex-col items-center pt-12 pb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-4 drop-shadow-lg">
            Custom Websites for
            <br />
            Small Businesses
          </h1>
          <p className="text-xl text-center mb-6 max-w-2xl">Transform your business with a professional website that converts visitors into customers. Starting at $999.</p>

          {/* Multiple CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full text-lg font-semibold transition">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-lg font-semibold transition">
              View Portfolio
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center mt-4">
            <div className="flex justify-center mb-2">
              <span className="text-2xl text-orange-400">★★★★★</span>
            </div>
            <p className="text-sm text-gray-300">Trusted by 50+ small businesses</p>
          </div>
        </div>
      </div>

      {/* Quick Benefits Section */}
      <section className="py-16 bg-gray-900">
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
              <p className="text-gray-300">Starting at $999, no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Lifetime Support</h3>
              <p className="text-gray-300">Free updates and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Crafting Unique Websites for You */}
      <section className="py-16 flex flex-col items-center min-h-[40vh]">
        <img src="/assets/images/arcjet-light.svg" alt="Logo" className="w-20 h-20 mb-4" />
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Crafting Unique Websites for You</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-6xl mb-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Your Vision, Our Expertise</h3>
            <p className="text-lg mb-4">At Websites With Toni, we specialize in creating tailored websites for small businesses, ensuring your online presence reflects your brand's identity and attracts loyal customers through intuitive design and user-friendly navigation.</p>
            <Link href="/contact" className="inline-block bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-full font-semibold transition">
              Start Your Project
            </Link>
            <video
              className="mt-6 w-full max-w-md rounded-lg shadow-lg mx-auto"
              src="/assets/videos/cortapelos website preivew .mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/images/nextjs-boilerplate-sign-in.png"
            >
              <track kind="captions" />
            </video>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Empowering Small Businesses Online</h3>
            <p className="text-lg mb-4">We understand the unique needs of each business, whether a local shop or a small business, and provide solutions from simple landing pages to fully functional sites that drive results.</p>
            <Link href="/portfolio" className="inline-block bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 py-2 rounded-full font-semibold transition">
              See Our Work
            </Link>
            <video
              className="mt-6 w-full max-w-md rounded-lg shadow-lg mx-auto"
              src="/assets/videos/Beautyempressbe website preview.mp4"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/images/nextjs-boilerplate-sign-up.png"
            >
              <track kind="captions" />
            </video>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="text-4xl font-bold mb-4">$300</div>
              <ul className="text-left mb-8 space-y-2">
                <li>✓ 1 Pages</li>
                <li>✓ Mobile Responsive</li>
                <li>✓ Contact Form</li>
                <li>✓ SEO Optimized</li>
                <li>✓ 2 Revisions</li>
              </ul>
              <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition">
                Get Started
              </Link>
            </div>
            <div className="bg-orange-400 border border-orange-400 rounded-lg p-8 text-center text-black">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-4">$1,000</div>
              <ul className="text-left mb-8 space-y-2">
                <li>✓ 6 Pages</li>
                <li>✓ E-commerce Ready</li>
                <li>✓ Blog Setup</li>
                <li>✓ Google Analytics</li>
                <li>✓ 3 Revisions</li>
                <li>✓ 1 Month Support</li>
              </ul>
              <Link href="/contact" className="block w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition">
                Most Popular
              </Link>
            </div>
            <div className="bg-black border border-gray-700 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Custom</h3>
              <div className="text-4xl font-bold mb-4">$ Get Quote</div>
              <ul className="text-left mb-8 space-y-2">
                <li>✓ Unlimited Pages</li>
                <li>✓ Custom Features</li>
                <li>✓ Advanced SEO</li>
                <li>✓ Content Creation</li>
                <li>✓ Unlimited Revisions</li>
                <li>✓ 3 Months Support</li>
              </ul>
              <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join 50+ small businesses that have already taken their business online with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full text-xl font-semibold transition">
              Get Your Free Quote Today
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-8 py-4 rounded-full text-xl font-semibold transition">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
