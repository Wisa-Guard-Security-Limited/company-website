import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProcessSection = ({ data }) => {
  const displaySteps = () => {
    if (!data?.steps || data?.steps.length === 0) {
      return (
        <p className="text-center text-brand-gray text-sm sm:text-base">
          No steps available at the moment. Please check back later.
        </p>
      );
    }

    return data.steps.map((step, index) => (
      <div className="flex gap-3 sm:gap-4" key={index}>
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 
                     rounded-full bg-brand-navy text-white 
                     flex items-center justify-center 
                     font-bold shrink-0 mt-1
                     text-xs sm:text-sm lg:text-base"
        >
          {step.number}
        </div>

        <div>
          <h4 className="text-base sm:text-lg lg:text-xl 
                         font-bold text-brand-navy mb-1 sm:mb-2">
            {step.title}
          </h4>

          <p className="text-xs sm:text-sm lg:text-base 
                        text-brand-gray leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="service-process"
      className="py-12 sm:py-16 lg:py-24 
                 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 
                        gap-10 sm:gap-12 lg:gap-16 
                        items-center">

          {/* LEFT CONTENT */}
          <div>

            <h2 className="text-xs sm:text-sm 
                           font-bold text-brand-red 
                           tracking-wider uppercase 
                           mb-2 sm:mb-3">
              {data?.tagline || "Process"}
            </h2>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl 
                           font-bold text-brand-navy 
                           mb-4 sm:mb-6">
              {data?.title || "Secure World"}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg 
                          text-brand-gray 
                          mb-6 sm:mb-8 
                          leading-relaxed">
              {data?.description || "Small description"}
            </p>

            <div className="space-y-5 sm:space-y-6">
              {displaySteps()}
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="rounded-2xl sm:rounded-3xl 
                            overflow-hidden 
                            shadow-soft 
                            bg-gray-100 
                            border border-gray-100 
                            h-[260px] sm:h-[340px] lg:h-[420px]">

              {data?.image?.asset?.url ? (
                <Image
                  src={urlFor(data?.image?.asset?.url).url()}
                  alt="security control room with multiple monitors showing cctv footage"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>

            {/* Badge */}
            <div className="absolute 
                            -bottom-4 sm:-bottom-6 lg:-bottom-8 
                            -left-2 sm:-left-4 lg:-left-6 
                            bg-white 
                            p-4 sm:p-5 lg:p-6 
                            rounded-[16px] sm:rounded-[20px] 
                            shadow-hover 
                            border border-gray-100">

              <div className="flex items-center gap-3 sm:gap-4">

                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 
                                rounded-full bg-brand-red/10 
                                flex items-center justify-center 
                                text-brand-red">

                  <i className={`fa-solid ${data?.badge?.icon} text-sm sm:text-base lg:text-xl`} />
                </div>

                <div>
                  <div className="text-sm sm:text-base lg:text-lg 
                                  font-bold text-brand-navy">
                    {data?.badge?.title || "Time"}
                  </div>

                  <div className="text-xs sm:text-sm text-brand-gray">
                    {data?.badge?.subtitle}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;