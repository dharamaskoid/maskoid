"use client";

import { motion } from "framer-motion";

import { useState } from "react";



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

export default function ProjectsPage() {

const [activeTab, setActiveTab] = useState("all");

    return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">
      {/* HERO SECTION */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>


        </div>

        <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >

              <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase">
                Our Work Speak
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Projects That We're
                <span className="block text-[#6EA8FF]">
                  Proud Of
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We craft High-performing websites, marketing systems and digital solutions that drive real results.
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
                src="/images/project-banner.png"
                alt="Contact"
                className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>


        {/*  RECENT LIVE PROJECTS (PREMIUM GRID LAYOUT) */}
        <section className="relative py-20 bg-[#EEF2FF] overflow-hidden">

            {/* 🌌 BACKGROUND GLOW */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

                {/* GRID */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1a2e5e_1px,transparent_1px),linear-gradient(to_bottom,#1a2e5e_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-14"
                >

                <p className="inline-block px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
                    Recent Work
                </p>

                <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2e5e] mt-4">
                    Latest Completed{" "}
                    <span className="text-[#2b4c9a]">Projects</span>
                </h2>

                <p className="text-[#5b6475] mt-5 max-w-2xl mx-auto text-lg">
                    We design and develop high-performance websites and
                    marketing systems for modern brands.
                </p>

                </motion.div>

                {/* 🔥 FILTER TABS */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mb-14 flex-wrap"
                >

                {["all", "web", "seo"].map((tab) => (

                    <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-xl text-sm border transition-all duration-300 font-semibold ${
                        activeTab === tab
                        ? "bg-[#2b4c9a] text-white border-[#2b4c9a] shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
                        : "bg-white text-[#5b6475] border-[#dbe4ff] hover:bg-[#2b4c9a] hover:text-white"
                    }`}
                    >

                    {tab.toUpperCase()}

                    </button>

                ))}

                </motion.div>

                {/* 🔥 PROJECT GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                {/* ================= CATER SPOON ================= */}
                {(activeTab === "all" || activeTab === "web") && (

                    <motion.a
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    href="https://caterspoonmumbai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-3xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_10px_40px_rgba(43,76,154,0.08)] hover:shadow-[0_20px_60px_rgba(43,76,154,0.15)] transition-all duration-500"
                    >

                    {/* TOP VISUAL */}
                    <div className="relative h-[320px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#eef4ff]">

                        <img
                        src="/images/caterspoon-about.png"
                        className="absolute left-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:-rotate-6 group-hover:translate-y-3"
                        />

                        <img
                        src="/images/caterspoon-home.png"
                        className="relative z-20 w-56 h-[240px] object-cover object-top rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105"
                        />

                        <img
                        src="/images/caterspoon-contact.png"
                        className="absolute right-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:rotate-6 group-hover:translate-y-3"
                        />

                    </div>

                    {/* CONTENT */}
                    <div className="p-7 text-center">

                        <h3 className="text-2xl text-[#1a2e5e] font-bold">
                        Cater Spoon Mumbai
                        </h3>

                        <p className="text-[#5b6475] text-sm mt-3 leading-relaxed">
                        Luxury catering website with premium UI,
                        SEO optimization and high-converting design.
                        </p>

                    </div>

                    </motion.a>
                )}

                {/* ================= PAKHTOONS ================= */}
                {(activeTab === "all" || activeTab === "seo") && (

                    <motion.a
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    href="https://pakhtoons.development-site.maskoid.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-3xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_10px_40px_rgba(43,76,154,0.08)] hover:shadow-[0_20px_60px_rgba(43,76,154,0.15)] transition-all duration-500"
                    >

                    <div className="relative h-[320px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#eef4ff]">

                        <img
                        src="/images/pakhtoons-about.png"
                        className="absolute left-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:-rotate-6 group-hover:translate-y-3"
                        />

                        <img
                        src="/images/pakhtoons-home.png"
                        className="relative z-20 w-56 h-[240px] object-cover object-top rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105"
                        />

                        <img
                        src="/images/pakhtoons-contact.png"
                        className="absolute right-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:rotate-6 group-hover:translate-y-3"
                        />

                    </div>

                    <div className="p-7 text-center">

                        <h3 className="text-2xl text-[#1a2e5e] font-bold">
                        Pakhtoons
                        </h3>

                        <p className="text-[#5b6475] text-sm mt-3 leading-relaxed">
                        SEO optimized business website focused on
                        performance, speed and local visibility.
                        </p>

                    </div>

                    </motion.a>
                )}

                {/* ================= VAYORAA ================= */}
                {(activeTab === "all" || activeTab === "web") && (

                    <motion.a
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    href="https://vayoraa.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-3xl overflow-hidden bg-white border border-[#dbe4ff] shadow-[0_10px_40px_rgba(43,76,154,0.08)] hover:shadow-[0_20px_60px_rgba(43,76,154,0.15)] transition-all duration-500"
                    >

                    <div className="relative h-[320px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8fbff] to-[#eef4ff]">

                        <img
                        src="/images/Vayoraa-about.png"
                        className="absolute left-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:-rotate-6 group-hover:translate-y-3"
                        />

                        <img
                        src="/images/Vayoraa-home.png"
                        className="relative z-20 w-56 h-[240px] object-cover object-top rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:scale-105"
                        />

                        <img
                        src="/images/Vayoraa-contact.png"
                        className="absolute right-6 w-40 h-[210px] object-cover object-top rounded-2xl shadow-2xl opacity-80 transition-all duration-500 group-hover:rotate-6 group-hover:translate-y-3"
                        />

                    </div>

                    <div className="p-7 text-center">

                        <h3 className="text-2xl text-[#1a2e5e] font-bold">
                        Vayoraa
                        </h3>

                        <p className="text-[#5b6475] text-sm mt-3 leading-relaxed">
                        Modern conversion-focused website with
                        branding strategy and SEO architecture.
                        </p>

                    </div>

                    </motion.a>
                )}

                </div>

            </div>
        </section>
    </main>
  );
}