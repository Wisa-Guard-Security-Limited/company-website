import React from "react";
import Image from "next/image";

const ProffesionalSection = ({ data }) => {
  if (!data) return null;

  return (
    <section id="professional-overview" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-125 rounded-3xl overflow-hidden shadow-soft border border-gray-100">
            <Image
              src={data.image?.asset?.url}
              alt={data.title}
              fill
              className="object-cover"
              unoptimized
            />

            <div className="absolute inset-0 bg-brand-navy/10" />

            {/* OVERLAY CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl shadow-lg">
                  <i className={`fa-solid ${data.highlightCard?.icon}`} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">
                    {data.highlightCard?.title}
                  </h4>
                  <p className="text-sm text-brand-gray">
                    {data.highlightCard?.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              {data.eyebrow}
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              {data.title}
            </h3>

            <div className="text-brand-gray space-y-6 mb-8">
              <p className="leading-relaxed">{data.description1}</p>
              <p className="leading-relaxed">{data.description2}</p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {data.stats?.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 bg-brand-light rounded-xl border border-gray-100"
                >
                  <div className="text-3xl font-bold text-brand-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-brand-gray">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProffesionalSection;