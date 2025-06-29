import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
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
            <li><Link href="/" className="hover:text-orange-400 cursor-pointer">Home</Link></li>
            <li><Link href="/services" className="text-orange-400 border-b-2 border-orange-400">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
          <p className="text-xl text-gray-300 mb-8">Comprehensive web solutions designed to grow your business</p>
          <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full text-lg font-semibold transition">
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold mb-4">Business Websites</h3>
            <p className="text-gray-300 mb-6">Professional websites that showcase your business and convert visitors into customers.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Custom Design & Branding</li>
              <li>• Mobile Responsive</li>
              <li>• Contact Forms</li>
              <li>• SEO Optimization</li>
              <li>• Fast Loading Speed</li>
            </ul>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Started
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold mb-4">E-commerce Stores</h3>
            <p className="text-gray-300 mb-6">Complete online stores that help you sell products and grow your revenue.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Product Catalog</li>
              <li>• Secure Payment Processing</li>
              <li>• Inventory Management</li>
              <li>• Order Tracking</li>
              <li>• Customer Accounts</li>
            </ul>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Started
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-4">Landing Pages</h3>
            <p className="text-gray-300 mb-6">High-converting landing pages designed to capture leads and drive sales.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Lead Capture Forms</li>
              <li>• A/B Testing Ready</li>
              <li>• Conversion Optimization</li>
              <li>• Analytics Integration</li>
              <li>• Fast Loading</li>
            </ul>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Started
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-4">Website Maintenance</h3>
            <p className="text-gray-300 mb-6">Keep your website secure, updated, and performing at its best.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Security Updates</li>
              <li>• Performance Optimization</li>
              <li>• Content Updates</li>
              <li>• Backup Management</li>
              <li>• 24/7 Support</li>
            </ul>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Started
            </Link>
          </div>

          {/* Service 5 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
            <p className="text-gray-300 mb-6">Improve your search rankings and drive more organic traffic to your website.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Keyword Research</li>
              <li>• On-Page Optimization</li>
              <li>• Content Strategy</li>
              <li>• Performance Monitoring</li>
              <li>• Monthly Reports</li>
            </ul>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Started
            </Link>
          </div>

          {/* Service 6 */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-orange-400 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">Custom Development</h3>
            <p className="text-gray-300 mb-6">Bespoke web applications and features tailored to your specific needs.</p>
            <ul className="text-sm text-gray-300 mb-6 space-y-2">
              <li>• Custom Features</li>
              <li>• API Integration</li>
              <li>• Database Design</li>
              <li>• Third-Party Integrations</li>
              <li>• Scalable Architecture</li>
            </ul>
            <div className="text-2xl font-bold text-orange-400 mb-4">Custom Quote</div>
            <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300">We understand your business goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-300">Create beautiful, functional designs that convert</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-300">Build your website with modern, clean code</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="text-xl font-bold mb-2">Launch</h3>
              <p className="text-gray-300">Deploy and optimize for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Let's discuss your project and create something amazing together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full text-xl font-semibold transition">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-8 py-4 rounded-full text-xl font-semibold transition">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
