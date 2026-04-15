"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Services", href: "#" },
  { name: "Investigations", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact Us", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      id="header"
      className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Wisa Guard Logo"
            width={70}
            height={60}
            className="object-contain"
          />
          <span className="text-xl font-bold text-brand-navy tracking-tight">
            Wisa Guard
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={i}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors
              ${
                isActive
                  ? "text-brand-navy"
                  : "text-brand-gray hover:text-brand-navy"
              }

              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:h-0.5
              after:w-0
              after:bg-brand-red
              after:transition-all
              after:duration-300

              hover:after:w-full
              ${isActive ? "after:w-full" : ""}
              `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+254700000000"
            className="text-sm font-medium text-brand-navy flex items-center gap-2"
          >
            <i className="fa-solid fa-phone text-brand-red" />
            <span>Emergency: 911</span>
          </a>

          <button className="px-6 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20">
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-brand-navy text-2xl"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-6 py-6 space-y-4">
            {/* Links */}
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-brand-gray hover:text-brand-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Divider */}
            <div className="border-t pt-4 mt-4 space-y-4">
              <a
                href="tel:+254700000000"
                className="flex items-center gap-2 text-brand-navy font-medium"
              >
                <i className="fa-solid fa-phone text-brand-red" />
                Emergency: 911
              </a>

              <button className="w-full px-6 py-3 bg-brand-red text-white font-semibold rounded-full">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
