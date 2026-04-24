"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ hero }) => {
  return (
    <motion.section
      id="about-hero"
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] 
                 w-full flex items-center justify-center 
                 overflow-hidden bg-brand-navy"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.9 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="professional corporate security team"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* SVG lines */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none">
          <path
            d="M0 250C300 250 400 150 720 150C1040 150 1140 250 1440 250"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 350C400 350 500 100 720 100C940 100 1040 350 1440 350"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 
                      text-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 
                     px-3 sm:px-4 py-1.5 sm:py-2 
                     rounded-full glass-panel 
                     mb-6 sm:mb-8"
        >
          <i className="fa-solid fa-shield-halved text-brand-red text-sm sm:text-base" />
          <span className="text-xs sm:text-sm font-medium text-white/90">
            Trusted Security Experts
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl 
                     font-bold text-white 
                     mb-4 sm:mb-6 
                     tracking-tight leading-[1.1]"
        >
          {hero?.headline ||
            "Setting the Standard in Professional Security Solutions"}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg 
                     text-white/80 
                     max-w-xl sm:max-w-2xl mx-auto 
                     leading-relaxed"
        >
          {hero?.subtext ||
            "With decades of experience, we provide top-tier security services tailored to your unique needs."}
        </motion.p>

      </div>
    </motion.section>
  );
};

export default HeroSection;