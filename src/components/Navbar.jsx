import Link from "next/link";

const Navbar = () => {
  return (
    <header
      id="header"
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-[80px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
            <i className="fa-solid fa-shield-halved text-xl"></i>
          </div>
          <span className="text-xl font-bold text-brand-navy tracking-tight">
            Wisa Guard
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#"
            className="nav-link active text-sm font-medium text-brand-navy"
          >
            Home
          </a>
          <a
            href="#"
            className="nav-link text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors"
          >
            About us
          </a>
          <a
            href="#"
            className="nav-link text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="nav-link text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors"
          >
            Investigations
          </a>
          <a
            href="#"
            className="nav-link text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors"
          >
            Gallery
          </a>
          <a
            href="#"
            className="nav-link text-sm font-medium text-brand-gray hover:text-brand-navy transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+254700000000"
            className="text-sm font-medium text-brand-navy flex items-center gap-2"
          >
            <i className="fa-solid fa-phone text-brand-red"></i>
            <span>Emergency: 911</span>
          </a>
          <button className="px-6 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20">
            Request Quote
          </button>
        </div>

        <button className="lg:hidden text-brand-navy text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
