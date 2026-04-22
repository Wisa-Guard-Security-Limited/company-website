"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ hero }) => {
  console.log(hero);
  return (
    <motion.section
      id="services-hero"
      className="relative h-100 w-full flex items-center justify-center overflow-hidden bg-brand-navy"
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.9 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="security guards patrolling"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* SVG */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <svg viewBox="0 0 1440 400" className="w-full h-full">
          <path
            d="M0 200C300 200 400 100 720 100C1040 100 1140 200 1440 200"
            stroke="white"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          {hero?.headline || "Our Services"}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {hero?.subtext ||
            "Explore our comprehensive range of security solutions tailored to meet your unique needs. From on-site guards to advanced surveillance, we have you covered."}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
