"use client";
import { useRouter } from "next/navigation";

const CtaSection = ({ data }) => {
  const router = useRouter();

  return (
    <section
      id="services-cta"
      className="py-16 sm:py-20 lg:py-24 
                 bg-brand-navy relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy to-brand-navy/90 z-10" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 
                      relative z-20 text-center">

        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl 
                     font-bold text-white 
                     mb-4 sm:mb-6"
        >
          {data?.title}
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base lg:text-lg 
                     text-white/80 
                     mb-8 sm:mb-10 
                     max-w-xl sm:max-w-2xl mx-auto 
                     leading-relaxed"
        >
          {data?.description}
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push(`${data?.buttonLink || "/"}`)}
            className="w-full sm:w-auto 
                       px-6 sm:px-8 
                       py-3 sm:py-4 
                       bg-brand-red text-white 
                       font-bold 
                       rounded-full 
                       hover:bg-red-700 
                       transition-colors 
                       shadow-lg shadow-brand-red/20"
          >
            {data?.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;