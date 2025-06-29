import Image from 'next/image';
import Link from 'next/link';

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
  ];

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
            <li><Link href="/services" className="hover:text-orange-400 cursor-pointer">Services</Link></li>
            <li><Link href="/portfolio" className="text-orange-400 border-b-2 border-orange-400">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 mb-8">See how we've helped small businesses grow their online presence and increase revenue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-3 rounded-full text-lg font-semibold transition">
              Get Your Website
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-8 py-3 rounded-full text-lg font-semibold transition">
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioItems.map(item => (
            <div key={item.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400 transition">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <span className="inline-block bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-400">{item.price}</div>
                    <div className="text-sm text-gray-400">Project Cost</div>
                  </div>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Project Media */}
              <div className="relative h-64 bg-gray-800">
                {item.video
                  ? (
                      <video
                        className="w-full h-full object-cover"
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        playsInline
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
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-orange-400">Features</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="text-orange-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-orange-400">Results</h4>
                    <ul className="space-y-2">
                      {item.results.map((result, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="text-green-400 mr-2">📈</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-700">
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
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <p className="text-gray-300">Websites Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">2-3</div>
              <p className="text-gray-300">Weeks Average Delivery</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">40%</div>
              <p className="text-gray-300">Average Revenue Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-4">"Toni delivered exactly what we needed. Our new website has increased our online sales by 40%!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">
                  SJ
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-400">Beauty Empress</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-4">"Professional, responsive, and affordable. Highly recommend for any small business."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">
                  MR
                </div>
                <div>
                  <p className="font-semibold">Mike Rodriguez</p>
                  <p className="text-sm text-gray-400">Corta Pelos</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex mb-4">
                <span className="text-2xl text-orange-400">★★★★★</span>
              </div>
              <p className="text-gray-300 mb-4">"The process was smooth from start to finish. Our website looks amazing and works perfectly."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold mr-3">
                  LC
                </div>
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-gray-400">Local Restaurant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8">Let's create a website that drives results for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full text-xl font-semibold transition">
              Get Your Free Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 px-8 py-4 rounded-full text-xl font-semibold transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
