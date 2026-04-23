"use client";
import { useState } from "react";

const services = [
  {
    title: "Background Checks",
    icon: "fa-id-card-clip",
    content:
      "Comprehensive vetting of individuals for employment, partnerships, or personal matters.",
  },
  {
    title: "Corporate Due Diligence",
    icon: "fa-building-shield",
    content:
      "Deep-dive investigations into business partners, mergers, or acquisitions.",
  },
  {
    title: "Fraud & Forensic Investigations",
    icon: "fa-file-invoice-dollar",
    content:
      "Investigation of fraud, embezzlement, and financial irregularities.",
  },
  {
    title: "Asset Tracing & Recovery",
    icon: "fa-money-bill-transfer",
    content: "Locating hidden or misappropriated assets across jurisdictions.",
  },
  {
    title: "Home/Office Debugging",
    icon: "fa-bug-slash",
    content:
      "Detection of hidden surveillance devices and eavesdropping equipment.",
  },
  {
    title: "Undercover Operations",
    icon: "fa-user-ninja",
    content: "Placement of operatives to identify internal threats.",
  },
  {
    title: "Intelligence Collection",
    icon: "fa-network-wired",
    content: "Gathering intelligence using OSINT and HUMINT techniques.",
  },
  {
    title: "Motor Vehicle Forensics",
    icon: "fa-car-side",
    content: "Analysis of vehicle systems and incident reconstruction.",
  },
];

export default function Accordion() {
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
