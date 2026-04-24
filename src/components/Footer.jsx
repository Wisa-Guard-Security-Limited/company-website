import { CompanyEmail, Facebook, LinkedIn, TelPhoneContacts } from "@/data";
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { servicePageQuery } from "@/sanity/lib/queries";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Services", href: "/service-page" },
  { name: "Investigations", href: "/investigation-page" },
  { name: "Gallery", href: "/gallery-page" },
  { name: "Contact Us", href: "/contact-us" },
];

const Footer = async () => {
  const page = await client.fetch(servicePageQuery);
  const sections = page?.sections || [];

  console.log(sections)

 const displayNavLinks = () => {
  return navLinks.map((link, index) => {
    return (
       <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
          </li>
    )
  })
 }
const displayServices = () => {
  if (!sections?.length) return null;

  const servicesSection = sections.find(
    (sec) => sec._type === "servicesSection"
  );

  if (!servicesSection?.services?.length) return null;
  console.log(servicesSection)

  return servicesSection.services.slice(0, 6).map((service, index) => (
  
    <li key={service._id || index}>
      <Link
        href={`service-page/${service.slug.current}`}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {service.title || "Guarding Services"}
      </Link>
    </li>
  ));
};

  return (
    <footer
      id="footer"
      className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/10"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* <!-- Brand --> */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center text-white">
                <i className="fa-solid fa-shield-halved text-xl"></i>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Wisa Guard
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional security solutions across Kenya. Ensuring safety,
              reliability, and peace of mind 24/7.
            </p>
            <div className="flex gap-4">
              <Link
               target="_blank"
                href={Facebook}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              
              <Link
                href={LinkedIn}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              
              {
                displayNavLinks()
              }
            </ul>
          </div>

          {/* <!-- Services Links --> */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {displayServices()}
            </ul>
          </div>

          {/* <!-- Contact --> */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-brand-red"></i>
                <span className="text-gray-400">
                  Nairobi HQ, Kenya
                  <br />
                  Coverage Nationwide
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-brand-red"></i>
                <span className="text-gray-400">{TelPhoneContacts}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-brand-red"></i>
                <span className="text-gray-400">{CompanyEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Wisa Guard Security Services Limited. All rights
            reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
