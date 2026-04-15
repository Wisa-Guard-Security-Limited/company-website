import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-200 w-full flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* <!-- Background Image with Overlay --> */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/heroImage.jpeg"
            alt="professional security guard standing confidently in a modern corporate building lobby"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* <!-- Abstract Background Network lines inspired by reference --> */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 400C300 400 400 300 720 300C1040 300 1140 400 1440 400"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 500C400 500 500 200 720 200C940 200 1040 500 1440 500"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 300C200 300 300 600 720 600C1140 600 1240 300 1440 300"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="relative z-20 max-w-250 mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <span className="text-sm font-medium text-white/90">
            Nationwide Coverage Available 24/7
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Trusted Security <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
            Experts
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional security solutions across Kenya. We combine advanced
          technology with highly trained personnel to protect what matters most
          to you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-base font-semibold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 group">
            Request a Quote
            <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2">
            Contact Us
          </button>
        </div>
      </div>
      {/* 
            <!-- Floating Elements mimicking reference nodes --> */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-bounce"
          style={{
            animationDuration: "3s",
          }}
        >
          <i className="fa-solid fa-video text-white/80"></i>
        </div>
        <div
          className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-bounce"
          style={{
            animationDelay: "1s",
            animationDuration: "4s",
          }}
        >
          <i className="fa-solid fa-dog text-white/80"></i>
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 w-10 h-10 rounded-full bg-brand-red/20 backdrop-blur-md border border-brand-red/30 flex items-center justify-center animate-bounce"
          style={{
            animationDelay: "0.5s",
            animationDuration: "3.5s",
          }}
        >
          <i className="fa-solid fa-building-shield text-brand-red"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
