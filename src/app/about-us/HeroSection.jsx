"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      id="about-hero"
      className="relative h-125 w-full flex items-center justify-center overflow-hidden bg-brand-navy"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
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

      {/* SVG lines (fade only) */}
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
      <motion.div
        variants={container}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <i className="fa-solid fa-shield-halved text-brand-red"></i>
          <span className="text-sm font-medium text-white/90">
            Trusted Security Experts
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          About Wisa Guard <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
            Security Services
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Setting the standard in professional security solutions across Kenya
          since our inception.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
