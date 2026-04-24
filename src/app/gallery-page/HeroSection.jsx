"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ hero }) => {
  return (
    <section
      id="gallery-hero"
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] 
                 w-full flex items-center 
                 bg-brand-navy overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="Professional security guards in uniform on patrol at a corporate event"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/90 to-[#111726]/95 z-10" />
        <div className="absolute inset-0 grid-bg opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 
                      relative z-20 w-full 
                      py-12 sm:py-16 lg:py-20 
                      text-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 
                     px-3 sm:px-4 py-1.5 sm:py-2 
                     rounded-full bg-brand-red/20 
                     text-brand-red 
                     text-xs sm:text-sm font-bold 
                     mb-6 sm:mb-8 
                     border border-brand-red/30"
        >
          <i className="fa-solid fa-camera" />
          Visual Portfolio
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl 
                     font-bold text-white 
                     mb-4 sm:mb-6 
                     tracking-tight leading-[1.1]"
        >
          {hero?.headline}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg 
                     text-gray-400 
                     mb-8 sm:mb-10 
                     max-w-xl sm:max-w-2xl mx-auto 
                     leading-relaxed"
        >
          {hero?.subtext}
        </motion.p>

      </div>
    </section>
  );
};

export default HeroSection;