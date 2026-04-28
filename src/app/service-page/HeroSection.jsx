"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ hero }) => {
   const getHeroImage = (hero) => {
  if (hero?.backgroundImage?.asset) {
    return hero.backgroundImage;
  }

  return "/images/heroImage.jpeg";
};

const imageSrc = getHeroImage(hero);

  return (
    <motion.section
      id="services-hero"
      className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]
                 w-full flex items-center justify-center
                 overflow-hidden bg-brand-navy"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
       <Image
          src={
            typeof imageSrc === "string"
              ? imageSrc
              : urlFor(imageSrc).url()
          }
          alt="security hero"
          fill
          className="object-cover"
          priority
          unoptimized
                      />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/25 to-transparent" />
      </div>

      {/* SVG */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
      >
        <svg
          viewBox="0 0 1440 400"
          className="w-full h-full max-w-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200C300 200 400 100 720 100C1040 100 1140 200 1440 200"
            stroke="white"
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div
        className="relative z-20 max-w-6xl mx-auto 
                   px-4 sm:px-6 lg:px-12 
                   text-center"
      >
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
          {hero?.headline || "Our Services"}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg
                     text-white/85
                     max-w-md sm:max-w-2xl mx-auto
                     leading-relaxed px-2 sm:px-0"
        >
          {hero?.subtext ||
            "Explore our comprehensive range of security solutions tailored to meet your unique needs."}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default HeroSection;