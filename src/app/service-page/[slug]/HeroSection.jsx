"use client"
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

const HeroSection = ({data}) => {
  const router = useRouter();

  const getHeroImage = (hero) => {
    if (hero?.image?.asset) {
      return hero.image;
    }

    return "https://storage.googleapis.com/uxpilot-auth.appspot.com/4df6dc4c2f-74e669eab864318461fa.png";
  };

  const imageSrc = getHeroImage(data);
  
  
  return (
    <section
      id="service-detail-hero"
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[85vh]
                 w-full flex items-center 
                 bg-brand-light overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 
                      relative z-20 w-full py-16 sm:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-xl sm:max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 
                            px-3 sm:px-4 py-2 
                            rounded-full 
                            bg-brand-red/10 
                            text-brand-red 
                            text-xs sm:text-sm 
                            font-bold 
                            mb-5 sm:mb-6">
              <i className={`fa-solid ${data?.icon}` }/>
              Premium Service
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl 
                         font-bold text-brand-navy 
                         mb-4 sm:mb-6 
                         tracking-tight leading-[1.1]"
            >
              {data?.title}
             
            </h1>

            {/* Paragraph */}
            <p
              className="text-sm sm:text-base lg:text-lg 
                         text-brand-gray 
                         mb-8 sm:mb-10 
                         leading-relaxed"
            >
              {data?.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
               onClick={() => router.push(`/contact-us`)}
                className="w-full sm:w-auto 
                           px-6 sm:px-8 py-3 sm:py-4 
                           bg-brand-red text-white 
                           font-bold rounded-full 
                           hover:bg-red-700 
                           transition-colors 
                           shadow-lg shadow-brand-red/20 
                           inline-flex items-center justify-center gap-2
                           cursor-pointer
                           "
              >
                Request This Service
                <i className="fa-solid fa-arrow-right" />
              </button>
              <a href="/files/bronchure.pdf" download>
              <button
                className="w-full sm:w-auto 
                           px-6 sm:px-8 py-3 sm:py-4 
                           bg-white text-brand-navy 
                           font-bold rounded-full 
                           hover:bg-gray-50 
                           transition-colors 
                           border border-gray-200 
                           shadow-sm
                           cursor-pointer
                           "
              >
                Download Brochure
              </button>
              </a>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block 
                          h-[420px] xl:h-[500px] 
                          rounded-3xl overflow-hidden 
                          shadow-hover border border-gray-100 
                          bg-white p-6 sm:p-8">

            <div className="absolute inset-0 bg-subtle-gradient" />

           <Image
              src={
                typeof imageSrc === "string"
                  ? imageSrc
                  : urlFor(imageSrc).url()
              }
              alt="security hero"
              fill
              className="object-contain"
              priority
              unoptimized
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;