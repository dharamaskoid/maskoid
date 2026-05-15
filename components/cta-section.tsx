"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {

  // 🔥 ANIMATIONS
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

  return (
    <section className="bg-[#EEF4FF] py-16 px-6 md:px-8 lg:px-16 overflow-hidden">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="container rounded-2xl px-6 md:px-10 lg:px-16 py-16 bg-[#1a2e5e] mx-auto relative overflow-hidden"
      >

        {/* 🌌 BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-1/2 space-y-6"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              Let&apos;s Grow Together
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-blue-400">Amazing</span> Together
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Have a project in mind? Let&apos;s create a digital experience that drives growth and sets your business apart.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group bg-white text-[#2b4c9a] hover:bg-gray-100 rounded-xl px-6 py-3 text-base font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-1/2 relative"
          >

                <img
                src="/images/about-cta1.png"
                alt="Contact"
                className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />

            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}