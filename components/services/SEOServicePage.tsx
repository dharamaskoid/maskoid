"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";

import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  ShieldCheck,
  Rocket,
  LineChart,
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
    const logos = [
    "/images/Client-1-1.png",
    "/images/Client-1-2.png",
    "/images/Client-1-3.png",
    "/images/Client-1-5.png",
    "/images/Client-1-6.png",
    "/images/Client-1-7.png",
    "/images/Client-1-11.png",
    "/images/Client-1-12.png",
    "/images/Client-1-13.png",
    "/images/Client-1-14.png",
    ];
  return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

      {/* HERO SECTION */}
      {/* ================= HERO SECTION (SAME STRUCTURE) ================= */}
      <section className="relative flex items-center px-6 py-16 bg-[#1a2e5e] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-20 w-96 h-96 bg-[#2b4c9a]/20 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div variants={fadeUp} initial="hidden" animate="show">

            <p className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs uppercase">
              SEO Service
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Rank Higher
              <span className="block text-[#6EA8FF]">Grow Faster</span>
            </h1>

            <p className="mt-6 text-[#B7C2D8] max-w-xl">
              We deliver powerful SEO strategies focused on ranking, traffic, and conversions.
            </p>

          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            <img
              src="/images/seo.png"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* CLIENT LOGOS */}

      <section className="py-16 bg-white border-y border-[#dbe7ff]">

        <div className="container mx-auto px-6">

          {/* SLIDER WRAPPER */}
          <div className="container mx-auto px-6 relative">

            {/* CUSTOM NAVIGATION */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between z-30 pointer-events-none">

              {/* PREVIOUS */}
              <button className="logos-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                <ChevronLeft size={20} />

              </button>

              {/* NEXT */}
              <button className="logos-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                <ChevronRight size={20} />

              </button>

            </div>

            {/* SWIPER */}
            <Swiper
              className="px-14"
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".logos-prev",
                nextEl: ".logos-next",
              }}
              loop={true}
              speed={2000}
              spaceBetween={10}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
            >

              {logos.map((logo, i) => (
                <SwiperSlide key={i}>

                  <div className="flex items-center justify-center h-16">

                    <img
                      src={logo}
                      alt="brand"
                      className="h-14 md:h-16 object-contain transition duration-300"
                    />

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">

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
      <section className="relative py-16 overflow-hidden bg-[#EEF2FF]">

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
      <section className="py-16 px-6">

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


            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}