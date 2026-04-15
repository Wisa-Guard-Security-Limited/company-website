import React from "react";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <section
      id="company-overview"
      className="py-24 bg-white relative -mt-10 rounded-t-[40px] z-30"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Company Overview
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Unwavering Commitment to Your Safety
            </h3>
            <p className="text-brand-gray text-lg mb-6 leading-relaxed">
              Wisa Guard Security Services Limited is a premier provider of
              comprehensive security solutions. With a deep understanding of the
              local and national security landscape, we deliver tailored
              services designed to mitigate risks and protect what matters most.
            </p>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Our team comprises highly trained professionals, from vetted
              ground personnel to seasoned security strategists. We leverage
              advanced technology alongside human expertise to offer a holistic
              approach to security, ensuring peace of mind for our corporate,
              residential, and industrial clients.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-check text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Certified</h4>
                  <p className="text-sm text-brand-gray">Professionals</p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-red">
                  <i className="fa-solid fa-award text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">Award Winning</h4>
                  <p className="text-sm text-brand-gray">Services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-4xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-hover bg-gray-100 h-125">
              <Image
                src="/images/heroImage.jpeg"
                alt="professional security guard interacting with a client in a modern corporate lobby"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[20px] shadow-hover border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white">
                <i className="fa-solid fa-shield-check text-2xl"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-navy">100%</div>
                <div className="text-sm text-brand-gray">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
