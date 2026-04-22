import React from "react";
import Image from "next/image";

const ProffesionalSection = () => {
  return (
    <section id="professional-overview" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-100 rounded-3xl overflow-hidden shadow-soft border border-gray-100">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ac044f59ec-ed51654825cc563025d2.png"
              alt="professional corporate intelligence team in a modern high-tech office reviewing digital forensics data on multiple screens, serious tone, cinematic lighting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-brand-navy/10"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl shadow-lg shadow-brand-red/20">
                  <i className="fa-solid fa-user-secret"></i>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">
                    Expert Operatives
                  </h4>
                  <p className="text-sm text-brand-gray">
                    Former military and law enforcement professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              Professional Overview
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              Discreet Intelligence Gathering & Analysis
            </h3>

            <div className="prose prose-lg text-brand-gray max-w-none mb-8">
              <p className="mb-6 leading-relaxed">
                Wisa Guards Investigations Division operates at the highest
                levels of confidentiality and professionalism. Our team
                comprises seasoned experts with extensive backgrounds in
                intelligence, law enforcement, and forensic accounting, ensuring
                that every case is handled with the utmost precision.
              </p>
              <p className="leading-relaxed">
                We utilize state-of-the-art technology, advanced surveillance
                techniques, and deep analytical methodologies to gather
                irrefutable evidence. Whether uncovering corporate fraud or
                conducting sensitive background checks, our findings are
                documented meticulously for legal proceedings or executive
                decision-making.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-brand-light rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-brand-navy mb-2">
                  100%
                </div>
                <div className="text-sm font-medium text-brand-gray">
                  Confidentiality Guaranteed
                </div>
              </div>
              <div className="p-6 bg-brand-light rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-brand-navy mb-2">
                  24/7
                </div>
                <div className="text-sm font-medium text-brand-gray">
                  Operational Readiness
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProffesionalSection;
