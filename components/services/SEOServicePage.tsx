"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  ShieldCheck,
  Rocket,
  LineChart,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Activity,
  Database,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SEOServicePage() {
  return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

      {/* HERO SECTION */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

        </div>

        <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >

              <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase">
                SEO Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Rank Higher &
                <span className="block text-[#6EA8FF]">
                  Grow Faster
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We help businesses dominate search rankings with strategic SEO,
                technical optimization, content growth, and data-driven campaigns.
              </p>

              {/* FEATURES */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                {[
                  "SEO Optimized Strategy",
                  "Technical SEO",
                  "Keyword Research",
                  "Google Ranking Growth",
                ].map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-[#6EA8FF]"
                    />

                    <span className="text-[#dbe7ff]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] text-white font-semibold transition-all duration-300"
                >
                  Get Started

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-semibold transition-all duration-300"
                >
                  View Results
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
                  src="/images/seo-banner.png"
                  alt="SEO Service"
                  className="h-[250px] sm:h-[350px] md:h-[380px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              SEO Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Complete SEO Solutions
              <span className="text-[#2b4c9a]"> For Business Growth</span>
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: <Search size={34} />,
                title: "Keyword Research",
              },
              {
                icon: <Globe size={34} />,
                title: "On-Page SEO",
              },
              {
                icon: <Database size={34} />,
                title: "Technical SEO",
              },
              {
                icon: <TrendingUp size={34} />,
                title: "SEO Strategy",
              },
              {
                icon: <BarChart3 size={34} />,
                title: "Analytics & Reports",
              },
              {
                icon: <Rocket size={34} />,
                title: "Growth Optimization",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="group bg-white rounded-[28px] p-8 border border-[#dbe7ff] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Advanced SEO strategies designed to improve rankings,
                  visibility, and long-term growth.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 overflow-hidden bg-[#EEF2FF]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#2b4c9a]/10 blur-[120px] rounded-full"></div>

        </div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Why Choose Us
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              SEO That Delivers
              <span className="text-[#2b4c9a]"> Real Results</span>
            </h2>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                icon: <LineChart size={30} />,
                title: "Ranking Growth",
              },
              {
                icon: <Target size={30} />,
                title: "Targeted Traffic",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "White Hat SEO",
              },
              {
                icon: <Activity size={30} />,
                title: "Performance Tracking",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[28px] p-8 border border-[#dbe7ff] shadow-[0_10px_40px_rgba(43,76,154,0.05)] hover:shadow-[0_25px_60px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500">

                  {item.icon}

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  We focus on sustainable SEO strategies that help businesses
                  achieve measurable digital growth.
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 pt-10 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto bg-[#1a2e5e] rounded-[32px] p-10 md:p-16 relative overflow-hidden">

          {/* BG */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready To Boost
                <span className="text-[#6EA8FF]"> Your Rankings?</span>
              </h2>

              <p className="mt-5 text-[#B7C2D8] text-lg max-w-2xl">
                Let’s create an SEO strategy that increases traffic,
                rankings, and conversions.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:bg-[#dbe7ff] transition-all duration-300 whitespace-nowrap"
            >
              Start SEO Project

              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}