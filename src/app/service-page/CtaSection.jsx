"use client";
import { useRouter } from "next/navigation";

const CtaSection = ({ data }) => {
  const router = useRouter();

  return (
    <section
      id="services-cta"
      className="py-20 bg-brand-navy relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-brand-navy to-brand-navy/90 z-10"></div>
      </div>

      <div className="max-w-250 mx-auto px-6 relative z-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {data?.title}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          {data?.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push(`${data?.buttonLink || "/"}`)}
            className="px-8 cursor-pointer py-4 bg-brand-red text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/20 w-full sm:w-auto"
          >
            {data?.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
