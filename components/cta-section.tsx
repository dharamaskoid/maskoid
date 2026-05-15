"use client";

import { motion } from "framer-motion";


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
           
            </motion.button>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            className="w-full lg:w-1/2 relative"
          >

            {/* FLOATING MAIN CARD */}
            <motion.div
              variants={float}
              animate="animate"
              className="relative"
            >

              {/* MAIN DASHBOARD */}
              <div className="bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] p-4 md:p-6">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="8" width="3" height="6" fill="white"/>
                        <rect x="6.5" y="5" width="3" height="9" fill="white"/>
                        <rect x="11" y="2" width="3" height="12" fill="white"/>
                      </svg>
                    </div>

                    <span className="font-semibold text-gray-800">
                      Analytics
                    </span>
                  </div>

                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                </div>

                {/* CHART */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">

                  <div className="flex items-end justify-around gap-2 h-32">

                    {[40, 60, 45, 80, 55, 70, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{
                          duration: 0.7,
                          delay: i * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="w-6 bg-blue-500 rounded-t"
                      />
                    ))}

                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-4">

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-blue-50 rounded-lg p-3 text-center"
                  >
                    <div className="text-xl font-bold text-blue-600">
                      2.4K
                    </div>
                    <div className="text-xs text-gray-500">
                      Visitors
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-green-50 rounded-lg p-3 text-center"
                  >
                    <div className="text-xl font-bold text-green-600">
                      +18%
                    </div>
                    <div className="text-xs text-gray-500">
                      Growth
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-purple-50 rounded-lg p-3 text-center"
                  >
                    <div className="text-xl font-bold text-purple-600">
                      $12K
                    </div>
                    <div className="text-xs text-gray-500">
                      Revenue
                    </div>
                  </motion.div>

                </div>
              </div>

              {/* FLOATING CARD TOP */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 hidden md:block"
              >

                <div className="flex items-center gap-2">

                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    ⭐
                  </div>

                  <div>
                    <div className="text-xs text-gray-500">
                      Rating
                    </div>

                    <div className="text-sm font-bold text-gray-800">
                      4.9/5
                    </div>
                  </div>

                </div>

              </motion.div>

              {/* FLOATING CARD BOTTOM */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 hidden md:block"
              >

                <div className="flex items-center gap-2">

                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <div>
                    <div className="text-xs text-gray-500">
                      Tasks
                    </div>

                    <div className="text-sm font-bold text-gray-800">
                      Completed
                    </div>
                  </div>

                </div>

              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}