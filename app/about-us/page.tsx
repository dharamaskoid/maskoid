"use client";

import OurStorySection from "@/components/our-story-section"
import OurValuesSection from "@/components/our-values-section"
import StatsSection from "@/components/stats-section"
import CTASection from "@/components/cta-section"
import { motion } from "framer-motion";

export default function AboutUsPage() {

  return (
    <main className="bg-white overflow-hidden text-[#111827] pt-[81.5px] lg:pt-[81.5px]">
      {/* HERO SECTION */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">


        <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl"
              >
                About Us
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              >
                The Story Behind <br />
                <span className="text-[#6EA8FF]">
                  Maskoid
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl"
              >
                We are a digital growth agency helping businesses scale using
                premium websites, SEO systems, paid marketing, and
                performance-driven strategies.
              </motion.p>


            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow Behind Image */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-3 bg-gradient-to-r from-[#2b4c9a]/40 to-blue-500/10 blur-2xl rounded-[32px]"
              />

              {/* Floating Dots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 opacity-30"
              >
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF]"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <img
                  src="/images/about-us-banner.jpg"
                  alt="About"
                  className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-cover"
                />

                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/80 via-transparent to-transparent" />


              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}

      <OurStorySection />

      <OurValuesSection />

      <StatsSection />

      <CTASection />

      

    </main>
  );
}
