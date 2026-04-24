"use client";
import { useRouter } from "next/navigation";

const AboutLocation = ({ data }) => {
  const router = useRouter();

  const displayStats = () => {
    if (!data?.stats) return null;
    return data.stats.map((stat, index) => (
      <div key={index} className="border-l-2 border-brand-red pl-3 sm:pl-4">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">
          {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-gray-400">
          {stat.label}
        </div>
      </div>
    ));
  };

  const displayLocations = () => {
    if (!data?.locations) return null;
    return data.locations.map((location, index) => (
      <div
        key={index}
        className="flex items-center justify-between 
                   p-3 sm:p-4 
                   rounded-xl bg-white/5 hover:bg-white/10 
                   transition-colors cursor-pointer 
                   border border-white/5"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <i className={`fa-solid ${location.icon} text-brand-red text-sm sm:text-base`} />
          <span className="font-medium text-sm sm:text-base">
            {location.name}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <section
      id="about-locations"
      className="py-12 sm:py-16 lg:py-24 
                 bg-brand-navy text-white 
                 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none">
          <circle cx="720" cy="300" r="400" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="720" cy="300" r="600" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* About Preview */}
          <div>
            <h2 className="text-xs sm:text-sm font-bold text-brand-red tracking-wider uppercase mb-2 sm:mb-3">
              {data?.tagline || "About Wisa Guard"}
            </h2>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              {data?.title ||
                "Kenya's Premier Security Provider with Nationwide Coverage"}
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {data?.description ||
                "Wisa Guard is a leading security services provider in Kenya, offering comprehensive solutions for residential, commercial, and event security. With a nationwide presence and a team of highly trained professionals, we are committed to ensuring the safety and peace of mind of our clients across the country."}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
              {displayStats() || (
                <p className="text-gray-400 col-span-2 text-sm sm:text-base">
                  No statistics available at the moment.
                </p>
              )}
            </div>

            <button
              onClick={() => router.push(`${data?.buttonLink || "/"}`)}
              className="px-6 sm:px-8 lg:px-10 
                         py-3 sm:py-4 
                         bg-white text-brand-navy 
                         text-sm sm:text-base lg:text-lg 
                         font-semibold rounded-full 
                         hover:bg-gray-100 transition-colors 
                         shadow-lg flex items-center gap-2"
            >
              {data?.buttonText || "view more"}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* Locations */}
          <div className="bg-white/5 backdrop-blur-lg 
                          border border-white/10 
                          rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                          p-6 sm:p-8 lg:p-10">
            
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                {data?.locationsTitle || "locations"}
              </h3>

              <div className="w-8 h-8 sm:w-10 sm:h-10 
                              rounded-full bg-brand-red/20 
                              flex items-center justify-center text-brand-red">
                <i className="fa-solid fa-location-dot text-sm sm:text-base"></i>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {displayLocations() || (
                <p className="text-gray-400 text-sm sm:text-base">
                  No locations available at the moment. Please check back later.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutLocation;