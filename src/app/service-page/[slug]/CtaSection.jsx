import React from "react";

const CtaSection = () => {
  return (
    <section id="service-cta" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>

      <div className="max-w-200 mx-auto px-6 relative z-10">
        <div className="bg-white p-12 rounded-4xl shadow-hover border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-[100px] -z-10"></div>

          <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mx-auto mb-6">
            <i className="fa-solid fa-file-signature text-2xl"></i>
          </div>

          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Secure Your Premises Today
          </h2>
          <p className="text-brand-gray text-lg mb-8 max-w-xl mx-auto">
            Dont leave your security to chance. Get a customized guarding
            solution tailored to your specific operational needs.
          </p>

          <button className="px-10 py-4 bg-brand-red text-white font-bold text-lg rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 inline-flex items-center gap-3">
            Request This Service <i className="fa-solid fa-arrow-right"></i>
          </button>

          <p className="mt-6 text-sm text-brand-gray">
            Or call us directly at{" "}
            <a
              href="tel:+254700000000"
              className="font-bold text-brand-navy hover:text-brand-red"
            >
              +254 700 000 000
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
