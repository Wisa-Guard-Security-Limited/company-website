import React from "react";
import { CompanyEmail, Facebook, LinkedIn, TelPhoneContacts } from "@/data";
import Form from "./Form";
// --- QUERIES ---
import { client } from "@/sanity/lib/client";
import { servicePageQuery } from "@/sanity/lib/queries";

const ContactForm = async () => {
   const page = await client.fetch(servicePageQuery);
   const sections = page?.sections || [];
  
  return (
    <section
      id="contact-details"
      className="py-16 sm:py-20 lg:py-24 bg-white relative -mt-12 sm:-mt-16 lg:-mt-20 z-30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* CARD */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-hover border border-gray-100 flex items-start gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-location-dot text-lg sm:text-xl lg:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-navy mb-1 sm:mb-2">
                  Office Location
                </h3>
                <p className="text-sm sm:text-base text-brand-gray">Suraj Plaza, Ngara Limuru Road, Opp Jamuhuri Secondary School</p>
                <p className="text-sm sm:text-base text-brand-gray">Nairobi, Kenya</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-hover border border-gray-100 flex items-start gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-phone-volume text-lg sm:text-xl lg:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-navy mb-2">
                  Phone Numbers
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  
                  <a href="tel:+254700000001" className="block text-sm sm:text-base text-brand-red font-bold">
                   {TelPhoneContacts}
                  </a>
                 
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-hover border border-gray-100 flex items-start gap-4 sm:gap-6 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                <i className="fa-solid fa-envelope-open-text text-lg sm:text-xl lg:text-2xl"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-brand-navy mb-2">
                  Email Address
                </h3>
                <div className="space-y-1 sm:space-y-2">
                  <a href="mailto:info@wisaguard.co.ke" className="block text-sm sm:text-base text-brand-gray hover:text-brand-red">
                  { CompanyEmail}
                  </a>
                
                </div>
              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-hover border border-gray-100 relative overflow-hidden h-full">
              
              <div className="absolute top-0 right-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-brand-light rounded-bl-[80px] sm:rounded-bl-[100px] -z-10"></div>

              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-navy mb-2 sm:mb-3">
                  Send us a Message
                </h2>
                <p className="text-sm sm:text-base text-brand-gray">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <Form sections={sections} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;