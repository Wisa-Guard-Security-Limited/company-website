const WhyUsSection = () => {
  return (
    <section
      id="features"
      className="py-24 bg-brand-light relative -mt-10 rounded-t-[40px] z-30"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Uncompromising Protection
          </h3>
          <p className="text-brand-gray text-lg">
            We deliver industry-leading security standards tailored to your
            specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Feature 1 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-navy">
              <i className="fa-solid fa-bolt text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Fast Response
            </h4>
            <p className="text-brand-gray leading-relaxed">
              Rapid deployment and emergency response teams ready at a moments
              notice.
            </p>
          </div>

          {/* <!-- Feature 2 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-navy">
              <i className="fa-solid fa-handshake-angle text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">Reliable</h4>
            <p className="text-brand-gray leading-relaxed">
              Vetted, highly trained professionals you can trust with your
              assets and safety.
            </p>
          </div>

          {/* <!-- Feature 3 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-navy">
              <i className="fa-solid fa-clock text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Available 24/7
            </h4>
            <p className="text-brand-gray leading-relaxed">
              Round-the-clock monitoring and support to ensure continuous
              protection.
            </p>
          </div>

          {/* <!-- Feature 4 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100 group">
            <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors text-brand-navy">
              <i className="fa-solid fa-map-location-dot text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-brand-navy mb-3">
              Nationwide
            </h4>
            <p className="text-brand-gray leading-relaxed">
              Extensive coverage across Kenya with local expertise in every
              region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
