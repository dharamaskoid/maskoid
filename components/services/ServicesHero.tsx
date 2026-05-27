"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function ServicesHero() {
  return (
    
    <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      </div>

      <div className="container mx-auto px-6 py-14 lg:py-16 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >

            <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-wider">
              Premium Digital Services
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Services Designed To
              <span className="block text-[#6EA8FF]">
                Scale Your Brand
              </span>
            </h1>

            <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
              From high-performance websites to SEO, PPC, and social media marketing —
              we create premium digital solutions focused on growth, visibility, and conversions.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* PRIMARY */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-xl bg-[#2b4c9a] hover:bg-[#244286] text-white font-semibold shadow-[0_10px_30px_rgba(43,76,154,0.25)] transition-all duration-300"
                >
                  Start Your Project
                </motion.button>
              </Link>

              {/* SECONDARY */}
              <Link href="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300"
                >
                  See Our Results
                </motion.button>
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2b4c9a]/30 to-blue-500/10 blur-3xl rounded-[40px]"></div>

            {/* IMAGE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[32px]"
            >

              <img
                src="/images/services/services-banner.png"
                alt="Services"
                className="h-[240px] sm:h-[350px] md:h-[380px] lg:h-[400px] w-auto max-w-full object-contain mx-auto"
              />

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}