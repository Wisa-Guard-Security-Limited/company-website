"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

const CtaSection = ({ data }) => {
  const router = useRouter();

  return (
    <motion.section
      id="cta"
      className="py-12 sm:py-16 lg:py-24 bg-brand-light"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* CTA Card */}
        <motion.div
          variants={scaleIn}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] 
                     p-6 sm:p-10 lg:p-16 
                     text-center shadow-xl shadow-brand-navy/5 
                     border border-gray-100 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-brand-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              variants={fadeUp}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                         mx-auto bg-brand-light rounded-full 
                         flex items-center justify-center 
                         mb-6 sm:mb-8 border border-gray-100"
            >
              <i className={`fa-solid ${data?.icon} text-xl sm:text-2xl lg:text-3xl text-brand-red`} />
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-5xl 
                         font-bold text-brand-navy 
                         mb-4 sm:mb-6"
            >
              {data?.title || "Ready to Secure Your World?"}
            </motion.h2>

            {/* Text */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base lg:text-xl 
                         text-brand-gray 
                         mb-6 sm:mb-8 lg:mb-10 
                         max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
            >
              {data?.description ||
                "Dont leave your security to chance. Contact our experts for a comprehensive risk assessment and tailored protection plan."}
            </motion.p>

            {/* Button */}
            <motion.button
              onClick={() => router.push(`${data?.buttonLink || "/"}`)}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 sm:px-8 lg:px-10 
                         py-3 sm:py-4 lg:py-5 
                         bg-brand-red text-white 
                         text-sm sm:text-base lg:text-lg 
                         font-bold rounded-full 
                         hover:bg-red-700 transition-all 
                         shadow-xl shadow-brand-red/30 
                         flex items-center justify-center 
                         gap-2 sm:gap-3 mx-auto group"
            >
              {data?.buttonText || "Get a Free Quote"}
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;