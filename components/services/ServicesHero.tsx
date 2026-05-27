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

        <div className="absolute -top-40 left-0 w-[420px] h-[420px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      </div>

      <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">

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
                className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
              />

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}