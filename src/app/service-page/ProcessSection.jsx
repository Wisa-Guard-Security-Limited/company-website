import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
const ProcessSection = ({ data }) => {
  const displaySteps = () => {
    if (!data?.steps || data?.steps.length === 0) {
      return (
        <p className="text-center text-brand-gray">
          No steps available at the moment. Please check back later.
        </p>
      );
    }
    return data?.steps.map((step, index) => {
      return (
        <div className="flex gap-4" key={index}>
          <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0 mt-1">
            {step.number}
          </div>
          <div>
            <h4 className="text-xl font-bold text-brand-navy mb-2">
              {step.title}
            </h4>
            <p className="text-brand-gray text-sm">{step.description}</p>
          </div>
        </div>
      );
    });
  };
  
  return (
    <section
      id="service-process"
      className="py-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-red tracking-wider uppercase mb-3">
              {data?.tagline || "Process"}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              {data?.title || "Secure World"}
            </h3>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              {data?.description || "Small description"}
            </p>

            <div className="space-y-6">{displaySteps()}</div>
          </div>

          <div className="relative">
            <div className="rounded-3xl h-100 overflow-hidden shadow-soft bg-gray-100 border border-gray-100">
              {data?.image?.asset?.url ? (
                <Image
                  src={`${urlFor(data?.image?.asset?.url).url()}`}
                  alt="security control room with multiple monitors showing cctv footage, operators working, professional modern setup"
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[20px] shadow-hover border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <i className={`fa-solid ${data?.badge?.icon}  text-xl`}></i>
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-navy">
                    {data?.badge?.title || "Time"}
                  </div>
                  <div className="text-sm text-brand-gray">
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
