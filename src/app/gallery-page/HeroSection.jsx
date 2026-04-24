"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({hero}) => {

  return (
    <section
      id="gallery-hero"
      className="relative min-h-125 w-full flex items-center bg-brand-navy overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="Professional security guards in uniform on patrol at a corporate event"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/90 to-[#111726]/95 z-10"></div>
        <div className="absolute inset-0 grid-bg opacity-20 z-10 pointer-events-none"></div>
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-20 w-full py-20 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red text-sm font-bold mb-6 border border-brand-red/30"
        >
          <i className="fa-solid fa-camera"></i> Visual Portfolio
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          {hero?.headline}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
         { hero?.subtext  }
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
