"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {

  // 🔥 Animation Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

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

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  return (
    <section className="bg-[#f8f9fb] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="container mx-auto">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-[40%] space-y-6"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              OUR STORY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              We Started With A Simple Idea
              <br />
              To Drive <span className="text-[#2b4c9a]">Real Growth</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Maskoid began with a simple belief — businesses deserve more than just a website.
              They deserve a digital growth system that attracts, engages, and converts.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From SEO and paid ads to web design and performance marketing,
              we build everything in-house with strategy, creativity, and data.
            </p>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-6"
          >

            {/* CARD 1 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-sm
              shadow-[0_10px_40px_rgba(59,89,152,0.08)]
              hover:shadow-[0_20px_60px_rgba(59,89,152,0.16)]
              transition-all duration-300"
            >

              <div className="mb-4">
                {/* SVG */}
              </div>

              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                Our Mission
              </h3>

              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>

              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver result-driven digital solutions that help businesses
                grow and scale with measurable impact.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-sm
              shadow-[0_10px_40px_rgba(59,89,152,0.08)]
              hover:shadow-[0_20px_60px_rgba(59,89,152,0.16)]
              transition-all duration-300"
            >

              <div className="mb-4">
                {/* SVG */}
              </div>

              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                Our Vision
              </h3>

              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>

              <p className="text-sm text-gray-600 leading-relaxed">
                To become a global digital growth partner known for innovation,
                transparency, and long-term success.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-sm
              shadow-[0_10px_40px_rgba(59,89,152,0.08)]
              hover:shadow-[0_20px_60px_rgba(59,89,152,0.16)]
              transition-all duration-300"
            >

              <div className="mb-4">
                {/* SVG */}
              </div>

              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                Our Approach
              </h3>

              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Strategy-first, data-driven, and focused on ROI.
                We combine creativity with technology to deliver results that matter.
              </p>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}