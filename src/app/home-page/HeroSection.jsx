"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-200 w-full flex items-center justify-center overflow-hidden bg-brand-navy"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpeg"
          alt="security hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* SVG Lines */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
          <path
            d="M0 400C300 400 400 300 720 300C1040 300 1140 400 1440 400"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 500C400 500 500 200 720 200C940 200 1040 500 1440 500"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 300C200 300 300 600 720 600C1140 600 1240 300 1440 300"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-sm font-medium text-white/90">
            Nationwide Coverage Available 24/7
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Trusted Security <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-red-400">
            Experts
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Professional security solutions across Kenya. We combine advanced
          technology with highly trained personnel to protect what matters most
          to you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-base font-semibold rounded-full shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2"
          >
            Request a Quote
            <i className="fa-solid fa-arrow-right" />
          </motion.button>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-full backdrop-blur-sm border border-white/20"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        <motion.div
          variants={fadeUp}
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <i className="fa-solid fa-video text-white/80" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <i className="fa-solid fa-dog text-white/80" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-10 h-10 rounded-full bg-brand-red/20 backdrop-blur-md border border-brand-red/30 flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
        >
          <i className="fa-solid fa-building-shield text-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
