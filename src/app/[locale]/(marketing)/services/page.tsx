'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
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
            <li><Link href="/services" className="text-orange-400 border-b-2 border-orange-400">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-400 cursor-pointer">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="py-12 md:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Services</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">Comprehensive web solutions designed to grow your business</p>
          <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold transition">
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: '🌐',
              title: 'Business Websites',
              desc: 'Professional websites that showcase your business and convert visitors into customers.',
              features: [
                'Custom Design & Branding',
                'Mobile Responsive',
                'Contact Forms',
                'SEO Optimization',
                'Fast Loading Speed',
              ],
              button: <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Started</Link>,
            },
            {
              icon: '🛒',
              title: 'E-commerce Stores',
              desc: 'Complete online stores that help you sell products and grow your revenue.',
              features: [
                'Product Catalog',
                'Secure Payment Processing',
                'Inventory Management',
                'Order Tracking',
                'Customer Accounts',
              ],
              button: <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Started</Link>,
            },
            {
              icon: '📱',
              title: 'Landing Pages',
              desc: 'High-converting landing pages designed to capture leads and drive sales.',
              features: [
                'Lead Capture Forms',
                'A/B Testing Ready',
                'Conversion Optimization',
                'Analytics Integration',
                'Fast Loading',
              ],
              button: <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Started</Link>,
            },
            {
              icon: '🔧',
              title: 'Website Maintenance',
              desc: 'Keep your website secure, updated, and performing at its best.',
              features: [
                'Security Updates',
                'Performance Optimization',
                'Content Updates',
                'Backup Management',
                '24/7 Support',
              ],
              button: <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Started</Link>,
            },
            {
              icon: '📈',
              title: 'SEO Optimization',
              desc: 'Improve your search rankings and drive more organic traffic to your website.',
              features: [
                'Keyword Research',
                'On-Page Optimization',
                'Content Strategy',
                'Performance Monitoring',
                'Monthly Reports',
              ],
              button: <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Started</Link>,
            },
            {
              icon: '🎨',
              title: 'Custom Development',
              desc: 'Bespoke web applications and features tailored to your specific needs.',
              features: [
                'Custom Features',
                'API Integration',
                'Database Design',
                'Third-Party Integrations',
                'Scalable Architecture',
              ],
              button: (
                <div>
                  <div className="text-xl md:text-2xl font-bold text-orange-400 mb-4">Custom Quote</div>
                  <Link href="/contact" className="block w-full bg-orange-400 hover:bg-orange-500 text-black py-3 rounded-lg font-semibold transition text-center">Get Quote</Link>
                </div>
              ),
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-gray-900 rounded-lg p-6 md:p-8 border border-gray-700 hover:border-orange-400 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base">{service.desc}</p>
              <ul className="text-xs md:text-sm text-gray-300 mb-6 space-y-2">
                {service.features.map(feature => (
                  <li key={feature}>
                    •
                    {feature}
                  </li>
                ))}
              </ul>
              {service.button}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-4">💡</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm md:text-base">We understand your business goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-4">🧑‍🎨</div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-300 text-sm md:text-base">Create beautiful, functional designs that convert</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-4">
                <span className="inline-block animate-spin" style={{ animationDuration: '3s' }}>⚙️</span>
                <span className="inline-block animate-spin ml-1" style={{ animationDuration: '3s' }}>⚙️</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-300 text-sm md:text-base">Build your website with modern, clean code</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-4">
                <span className="inline-block animate-bounce" style={{ animationDuration: '1s' }}>🚀</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Launch</h3>
              <p className="text-gray-300 text-sm md:text-base">Deploy and optimize for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Let's discuss your project and create something amazing together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
