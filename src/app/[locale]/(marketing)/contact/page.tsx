import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
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
            <li><span className="hover:text-orange-400 cursor-pointer">Services</span></li>
            <li><Link href="/contact" className="text-orange-400 border-b-2 border-orange-400">Contact</Link></li>
          </ul>
        </div>
      </nav>
      {/* Contact Forms */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 py-16 px-4">
        {/* Email Form */}
        <form className="flex-1 bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col" style={{ minWidth: 0 }}>
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Send an Email</h2>
          <label className="mb-2 text-sm font-semibold" htmlFor="email-name">Name</label>
          <input id="email-name" type="text" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" placeholder="Your Name" />
          <label className="mb-2 text-sm font-semibold" htmlFor="email-address">Email</label>
          <input id="email-address" type="email" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" placeholder="you@email.com" />
          <label className="mb-2 text-sm font-semibold" htmlFor="email-message">Message</label>
          <textarea id="email-message" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" rows={5} placeholder="Type your message..." />
          <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 rounded transition">Send Email</button>
        </form>
        {/* Text Message Form */}
        <form className="flex-1 bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col" style={{ minWidth: 0 }}>
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Send a Text Message</h2>
          <label className="mb-2 text-sm font-semibold" htmlFor="text-name">Name</label>
          <input id="text-name" type="text" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" placeholder="Your Name" />
          <label className="mb-2 text-sm font-semibold" htmlFor="text-phone">Phone Number</label>
          <input id="text-phone" type="tel" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" placeholder="(555) 555-5555" />
          <label className="mb-2 text-sm font-semibold" htmlFor="text-message">Message</label>
          <textarea id="text-message" className="mb-4 p-3 rounded bg-black text-white border border-gray-700 focus:border-orange-400 outline-none" rows={5} placeholder="Type your message..." />
          <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 rounded transition">Send Text</button>
        </form>
      </div>
    </div>
  );
}
