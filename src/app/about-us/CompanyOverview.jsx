import React, { Fragment } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CompanyOverview = ({ data }) => {
  const displayParagraphs = () => {
    if (!data?.paragraphs || !Array.isArray(data.paragraphs)) return null;
    return data.paragraphs.map((para, index) => (
      <p key={index} className="text-brand-gray text-lg mb-6 leading-relaxed">
        {para}
      </p>
    ));
  };

  const displayHighlights = () => {
    if (!data?.highlights || !Array.isArray(data.highlights)) return null;
    return data.highlights.map((highlight, index) => (
      <Fragment key={index}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-red">
            <i className="fa-solid fa-check text-xl"></i>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy">{highlight.title}</h4>
            <p className="text-sm text-brand-gray">{highlight.subtitle}</p>
          </div>
        </div>
        <div className="w-px h-12 bg-gray-200"></div>
      </Fragment>
    ));
  };

  return (
    <section
      id="company-overview"
      className="py-24 bg-white relative -mt-10 rounded-t-[40px] z-30"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              {data?.tagline || "Company Insight"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              {data?.title || "Who We Are"}
            </h3>
            {displayParagraphs()}

            <div className="flex items-center gap-6">{displayHighlights()}</div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/5 rounded-4xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-hover bg-gray-100 h-125">
              <Image
                src={`${urlFor(data?.image?.asset?.url).url() || "/images/companyOverview.jpeg"}`}
                alt="professional security guard interacting with a client in a modern corporate lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[20px] shadow-hover border border-gray-100 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center text-white">
                <i
                  className={`fa-solid ${data?.badge?.icon} text-2xl text-white`}
                ></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-navy">
                  {data?.badge?.value || 0}
                </div>
                <div className="text-sm text-brand-gray">
                  {data?.badge?.label || "Years of Excellence"}
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
