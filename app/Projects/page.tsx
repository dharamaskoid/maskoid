"use client";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {

  ChevronLeft, 
  ChevronRight,
} from "lucide-react";



const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};



export default function ProjectsPage() {

const [activeTab, setActiveTab] = useState("all");

    return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

        {/*  RECENT LIVE PROJECTS (PREMIUM LAYOUT) */}
        <section className="relative py-16 bg-[#EEF2FF] text-white overflow-hidden">

        {/* 🌌 PREMIUM ANIMATED BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* LEFT GLOW */}
            <motion.div
            animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
            }}
            transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"
            />

            {/* RIGHT GLOW */}
            <motion.div
            animate={{
                x: [0, -20, 0],
                y: [0, 30, 0],
            }}
            transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"
            />

            {/* CENTER LIGHT */}
            <motion.div
            animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.08, 1],
            }}
            transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/5 blur-3xl rounded-full"
            />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#1a2e5e_1px,transparent_1px),linear-gradient(to_bottom,#1a2e5e_1px,transparent_1px)] bg-[size:40px_40px]" />

        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

            {/* HEADER */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
            >

            <motion.p
                whileHover={{
                scale: 1.03,
                }}
                className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider"
            >
                Recent Work
            </motion.p>

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
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
            >

            {["all", "web", "seo"].map((tab) => (

                <motion.button
                whileHover={{
                    y: -2,
                }}
                whileTap={{
                    scale: 0.97,
                }}
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-sm border transition-all duration-500 font-semibold ${
                    activeTab === tab
                    ? "bg-[#2b4c9a] text-white border-[#2b4c9a] shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
                    : "bg-white text-[#5b6475] border-[#dbe4ff] hover:bg-[#2b4c9a] hover:text-white"
                }`}
                >

                {tab.toUpperCase()}

                </motion.button>

            ))}

            </motion.div>

            {/* SLIDER WRAPPER */}
            <div className="relative">

            {/* CUSTOM NAVIGATION */}
            <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between z-30 pointer-events-none">

                <motion.button
                whileHover={{
                    scale: 1.05,
                    y: -2,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="projects-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-500 flex items-center justify-center text-[#2b4c9a]"
                >

                <ChevronLeft size={20} />

                </motion.button>

                <motion.button
                whileHover={{
                    scale: 1.05,
                    y: -2,
                }}
                transition={{
                    duration: 0.3,
                }}
                className="projects-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-500 flex items-center justify-center text-[#2b4c9a]"
                >

                <ChevronRight size={20} />

                </motion.button>

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

                {/* ================= SLIDES ================= */}

                {(activeTab === "all" || activeTab === "web") && (
                <SwiperSlide>

                    <motion.a
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                        y: -8,
                    }}
                    href="https://caterspoonmumbai.com/"
                    rel="noopener noreferrer"
                    className="group relative rounded-2xl overflow-hidden block transition-all duration-700"
                    >

                    {/* CARD LIGHT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none"></div>

                    <div className="relative h-[320px] flex items-center justify-center">

                        <img
                        src="/images/caterspoon-about.png"
                        className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-700 group-hover:translate-y-3 group-hover:rotate-[-4deg]"
                        />

                        <img
                        src="/images/caterspoon-home.png"
                        className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-700 group-hover:scale-[1.04]"
                        />

                        <img
                        src="/images/caterspoon-contact.png"
                        className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-700 group-hover:translate-y-3 group-hover:rotate-[4deg]"
                        />

                    </div>

                    <div className="p-6 text-center">

                        <h3 className="text-xl text-[#1a2e5e] font-semibold transition-all duration-500 group-hover:text-[#2b4c9a]">
                        Cater Spoon Mumbai
                        </h3>

                        <p className="text-[#5b6475] text-sm mt-2">
                        Luxury catering website with premium UI & SEO system.
                        </p>

                    </div>

                    </motion.a>

                </SwiperSlide>
                )}

            </Swiper>

            </div>

        </div>

        {/* BOTTOM BUTTON */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
        >

            <motion.a
            whileHover={{
                y: -2,
                scale: 1.02,
            }}
            whileTap={{
                scale: 0.98,
            }}
            href="/projects"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-[#2b4c9a] hover:bg-white hover:text-[#2b4c9a] transition-all duration-500 text-white font-semibold shadow-sm"
            >
            View More Projects
            </motion.a>

        </motion.div>

        </section>              
        </main>
  );
}