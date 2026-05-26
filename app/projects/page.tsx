"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

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
        {/*  RECENT LIVE PROJECTS (PREMIUM LAYOUT) */}

              <section className="relative py-16 bg-[#EEF2FF] text-white overflow-hidden">

              {/*  BACKGROUND GLOW */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >

                <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
                  Recent Work
                </p>

                <h2 className="text-4xl font-bold text-[#1a2e5e] mt-3">
                  Latest Completed <span className="text-[#2b4c9a]">Projects</span>
                </h2>

                <p className="text-[#5b6475] mt-4 max-w-2xl mx-auto">
                  We design and develop high-performance websites and marketing systems.
                </p>

              </motion.div>

              {/* 🔥 TABS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mb-12 flex-wrap"
              >

                {["all", "web", "seo"].map((tab) => (

                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-xl text-sm border transition-all duration-300 font-semibold ${
                      activeTab === tab
                        ? "bg-[#2b4c9a] text-white border-[#2b4c9a] shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
                        : "bg-white text-[#5b6475] border-[#dbe4ff] hover:bg-[#2b4c9a] hover:text-white"
                    }`}
                  >

                    {tab.toUpperCase()}

                  </button>

                ))}

              </motion.div>


                {/* SLIDER WRAPPER */}
                <div className="relative">

                  {/* CUSTOM NAVIGATION */}
                  <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between z-30 pointer-events-none">

                    <button className="projects-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                      <ChevronLeft size={20} />

                    </button>

                    <button className="projects-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                      <ChevronRight size={20} />

                    </button>

                  </div>

                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: ".projects-prev",
                      nextEl: ".projects-next",
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                    className="projects-slider"
                  >

                    {/* ================= CATER SPOON ================= */}
                    {(activeTab === "all" || activeTab === "web") && (
                      <SwiperSlide>

                        <a
                          href="https://caterspoonmumbai.com/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/caterspoon-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/caterspoon-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/caterspoon-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Cater Spoon Mumbai
                            </h3>

                            <p className="text-[#5b6475] text-sm mt-2">
                              Luxury catering website with premium UI & SEO system.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                    {/* ================= PAKHTOONS ================= */}
                    {(activeTab === "all" || activeTab === "seo") && (
                      <SwiperSlide>

                        <a
                          href="https://pakhtoons.development-site.maskoid.net/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/pakhtoons-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/pakhtoons-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/pakhtoons-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Pakhtoons
                            </h3>

                            <p className="text-[#5b6475] text-sm mt-2">
                              SEO optimized business website with performance focus.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                    {/* ================= VAYORAA ================= */}
                    {(activeTab === "all" || activeTab === "web") && (
                      <SwiperSlide>

                        <a
                          href="https://vayoraa.in/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/Vayoraa-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/Vayoraa-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/Vayoraa-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Vayoraa
                            </h3>

                            <p className="text-[#5b6475] text-sm mt-2">
                              Conversion-focused modern website with branding & SEO.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                    {/* ================= VAYORAA ================= */}
                    {(activeTab === "all" || activeTab === "web") && (
                      <SwiperSlide>

                        <a
                          href="https://vayoraa.in/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/Vayoraa-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/Vayoraa-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/Vayoraa-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Vayoraa
                            </h3>

                            <p className="text-[#5b6475] text-sm mt-2">
                              Conversion-focused modern website with branding & SEO.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                  </Swiper>

                </div>
              </div>
              
              {/* BOTTOM BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-[#2b4c9a] hover:bg-white hover:text-[#2b4c9a] transition-all duration-300 text-white font-semibold shadow-sm"
                >
                  View More Projects
                </a>

              </motion.div>
              </section>         
    </main>
  );
}