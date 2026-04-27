"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      id="contact-hero"
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] 
                 w-full flex items-center bg-brand-navy overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy to-[#111726] z-10" />
        <div className="absolute inset-0 grid-bg opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 
                      relative z-20 w-full 
                      py-16 sm:py-20 lg:py-24 
                      text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 
                     px-3 sm:px-4 py-1.5 sm:py-2 
                     rounded-full 
                     bg-brand-red/20 text-brand-red 
                     text-xs sm:text-sm font-bold 
                     mb-5 sm:mb-6 
                     border border-brand-red/30"
        >
          <i className="fa-solid fa-headset text-xs sm:text-sm" />
          24/7 Support Available
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl 
                     font-bold text-white 
                     mb-4 sm:mb-6 
                     tracking-tight leading-[1.1]"
        >
          Get in Touch
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg 
                     text-gray-400 
                     mb-8 sm:mb-10 
                     max-w-xl sm:max-w-2xl mx-auto 
                     leading-relaxed"
        >
          Whether you need immediate emergency response, a comprehensive
          security consultation, or have general inquiries, our team is ready to
          assist you.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;