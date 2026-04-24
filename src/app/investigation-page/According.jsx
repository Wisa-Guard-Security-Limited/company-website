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
    <div className="space-y-4">
      {services.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item?.id || index}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                  {item?.icon && <i className={`fa-solid ${item.icon}`} />}
                </div>

                <span className="text-lg font-bold text-brand-navy">
                  {item?.title || "Untitled"}
                </span>
              </div>

              <i
                className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-8 bg-gray-50/50 border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 py-4" : "max-h-0"
              }`}
            >
              <p className="text-brand-gray text-sm leading-relaxed">
                {item?.content || "No details available."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}