export default function HomePage() {
  return (
    <div className="bg-black min-h-screen w-full text-white font-serif">
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
          <img src="/assets/images/arcjet-light.svg" alt="Logo" className="w-24 h-24 mb-4" />
          <nav className="flex space-x-8 mb-8 text-lg font-medium">
            <span className="text-orange-400 border-b-2 border-orange-400">Home</span>
            <span className="hover:text-orange-400 cursor-pointer">Services</span>
            <span className="hover:text-orange-400 cursor-pointer">Contact</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-4 drop-shadow-lg">
            Custom Websites for
            <br />
            Small Businesses
          </h1>
          <p className="text-lg text-center mb-6 max-w-xl">Tailored solutions to elevate your online presence.</p>
          <button className="bg-black/80 hover:bg-black text-white px-8 py-3 rounded-full text-lg font-semibold transition mb-4">Get Quote</button>
          <div className="flex justify-center mt-2">
            <span className="text-2xl">★★★★★</span>
          </div>
        </div>
      </div>

      {/* Section: Crafting Unique Websites for You */}
      <section className="py-16 flex flex-col items-center min-h-[40vh]">
        <img src="/assets/images/arcjet-light.svg" alt="Logo" className="w-20 h-20 mb-4" />
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Crafting Unique Websites for You</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-6xl mb-12">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Your Vision, Our Expertise</h3>
            <p className="text-lg">At Websites With Toni, we specialize in creating tailored websites for small businesses, ensuring your online presence reflects your brand's identity and attracts loyal customers through intuitive design and user-friendly navigation.</p>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Empowering Small Businesses Online</h3>
            <p className="text-lg">We understand the unique needs of each business, whether a local shop or a small business, and provide solutions from simple landing pages to fully functional sites that drive results.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
