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

const projects = [
  {
    title: "Cater Spoon Mumbai",
    category: "web",
    url: "https://caterspoonmumbai.com/",
    description: "Luxury catering website with premium UI & SEO system.",
    images: {
      left: "/images/caterspoon-about.png",
      center: "/images/caterspoon-home.png",
      right: "/images/caterspoon-contact.png",
    },
  },

  {
    title: "Pakhtoons",
    category: "seo",
    url: "https://pakhtoons.development-site.maskoid.net/",
    description: "SEO optimized business website with performance focus.",
    images: {
      left: "/images/pakhtoons-about.png",
      center: "/images/pakhtoons-home.png",
      right: "/images/pakhtoons-contact.png",
    },
  },

  {
    title: "Vayoraa",
    category: "web",
    url: "https://vayoraa.in/",
    description: "Conversion-focused modern website with branding & SEO.",
    images: {
      left: "/images/Vayoraa-about.png",
      center: "/images/Vayoraa-home.png",
      right: "/images/Vayoraa-contact.png",
    },
  },
];

export default function ProjectsPage() {

const [activeTab, setActiveTab] = useState("All");

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

                {/* 🔥 TABS */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mb-12 flex-wrap"
                >

                {["All", "Social Media Marketing", "SEO", "PPC", "Web Design", "Web Development"].map((tab) => (

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {projects
                    .filter(
                      (project) =>
                        activeTab === "all" ||
                        project.category === activeTab
                    )
                    .map((project, index) => (
                      <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                      >
                        <div className="relative h-[320px] flex items-center justify-center">

                          <img
                            src={project.images.left}
                            alt={project.title}
                            className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                          />

                          <img
                            src={project.images.center}
                            alt={project.title}
                            className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                          />

                          <img
                            src={project.images.right}
                            alt={project.title}
                            className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                          />

                        </div>

                        <div className="p-6 text-center">
                          <h3 className="text-xl text-[#1a2e5e] font-semibold">
                            {project.title}
                          </h3>

                          <p className="text-[#5b6475] text-sm mt-2">
                            {project.description}
                          </p>
                        </div>
                      </a>
                    ))}

                </div>

            </div>

        </section>      
    </main>
  );
}