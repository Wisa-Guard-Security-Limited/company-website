"use client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = ({ hero }) => {
  const router = useRouter();

const getHeroImage = (hero) => {
  if (hero?.backgroundImage?.asset) {
    return hero.backgroundImage;
  }

  return "/images/heroImage.jpeg";
};

const imageSrc = getHeroImage(hero);
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen 
                 w-full flex items-center justify-center 
                 overflow-hidden bg-brand-navy"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
       <Image
          src={
            typeof imageSrc === "string"
              ? imageSrc
              : urlFor(imageSrc).url()
          }
          alt="security hero"
          fill
          className="object-cover opacity-85"
          priority
          unoptimized
        />

        {/* SOFT OVERLAY (replaces dark blue layer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 via-brand-navy/20 to-transparent" />
      </div>

      {/* SVG Lines */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none">
          <path d="M0 400C300 400 400 300 720 300C1040 300 1140 400 1440 400" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M0 500C400 500 500 200 720 200C940 200 1040 500 1440 500" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M0 300C200 300 300 600 720 600C1140 600 1240 300 1440 300" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">

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
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-white/90">
            Nationwide Coverage Available 24/7
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-7xl 
                     font-bold text-white 
                     mb-4 sm:mb-6 
                     tracking-tight leading-[1.1]"
        >
          {hero?.headline || "Your Safety, Our Commitment"}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-xl 
                     text-white
                     mb-8 sm:mb-10 lg:mb-12 
                     max-w-xl sm:max-w-2xl mx-auto 
                     leading-relaxed"
        >
          {hero?.subtext ||
            "Protecting what matters most with our expert security solutions. Your safety is our priority."}
        </motion.p>

        {/* Button */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            onClick={() => router.push(`/contact-us`)}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto 
                       px-6 sm:px-8 
                       py-3 sm:py-4 
                       bg-brand-red text-white 
                       text-sm sm:text-base 
                       font-semibold rounded-full 
                       shadow-lg shadow-brand-red/30 
                       flex items-center justify-center gap-2"
          >
            Request a Quote
            <i className="fa-solid fa-arrow-right" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Icons (unchanged) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
      >
        <motion.div
          variants={fadeUp}
          className="absolute top-1/4 left-1/4 
                     w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 
                     rounded-full bg-white/10 backdrop-blur-md 
                     border border-white/20 
                     flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <i className="fa-solid fa-video text-xs sm:text-sm text-white/80" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 
                     w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                     rounded-full bg-white/10 backdrop-blur-md 
                     border border-white/20 
                     flex items-center justify-center"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <i className="fa-solid fa-dog text-sm sm:text-base text-white/80" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 
                     w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 
                     rounded-full bg-brand-red/20 backdrop-blur-md 
                     border border-brand-red/30 
                     flex items-center justify-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
        >
          <i className="fa-solid fa-building-shield text-xs sm:text-sm text-brand-red" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;