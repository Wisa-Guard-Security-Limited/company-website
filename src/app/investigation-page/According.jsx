"use client";
import { useState } from "react";



export default function Accordion({ services}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {services.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <span className="text-lg font-bold text-brand-navy">
                  {item.title}
                </span>
              </div>

              <i
                className={`fa-solid fa-chevron-down transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            <div
              className={`px-8 bg-gray-50/50 border-t border-gray-100 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 py-4" : "max-h-0"
              }`}
            >
              <p className="text-brand-gray">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
