"use client";
import { useState } from "react";

export default function Accordion({ services = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (!Array.isArray(services) || services.length === 0) {
    return (
      <div className="text-center text-brand-gray py-6">
        No services available.
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {services.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item?.id || index}
            className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
          >
            {/* HEADER */}
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 
                         flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                {/* ICON */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg 
                                bg-brand-red/10 text-brand-red 
                                flex items-center justify-center shrink-0">
                  {item?.icon && (
                    <i className={`fa-solid ${item.icon} text-sm sm:text-base`} />
                  )}
                </div>

                {/* TITLE */}
                <span className="text-sm sm:text-base lg:text-lg 
                                 font-bold text-brand-navy truncate">
                  {item?.title || "Untitled"}
                </span>
              </div>

              {/* CHEVRON */}
              <i
                className={`fa-solid fa-chevron-down text-xs sm:text-sm 
                            transition-transform duration-300 shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`}
              />
            </button>

            {/* CONTENT */}
            <div
              className={`px-4 sm:px-6 lg:px-8 
                          bg-gray-50/50 border-t border-gray-100 
                          overflow-hidden transition-all duration-300 ${
                            isOpen
                              ? "max-h-[300px] sm:max-h-[400px] py-3 sm:py-4"
                              : "max-h-0"
                          }`}
            >
              <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                {item?.content || "No details available."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}