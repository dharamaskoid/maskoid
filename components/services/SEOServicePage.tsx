"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  ShieldCheck,
  Rocket,
  LineChart,
  Database,
  Activity,
  CheckCircle2,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

  const services = [
    { icon: <Search size={34} />, title: "Keyword Research", text: "Find high converting keywords for growth." },
    { icon: <Globe size={34} />, title: "On Page SEO", text: "Optimize pages for better ranking." },
    { icon: <Database size={34} />, title: "Technical SEO", text: "Fix technical issues for performance." },
    { icon: <TrendingUp size={34} />, title: "SEO Strategy", text: "Growth focused SEO planning." },
    { icon: <BarChart3 size={34} />, title: "Analytics", text: "Track ranking & performance." },
    { icon: <Rocket size={34} />, title: "Growth Boost", text: "Increase traffic & conversions." },
  ];

  return (
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-10 lg:py-12 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div variants={fadeUp} initial="hidden" animate="show">

              <p className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs uppercase">
                SEO Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Rank Higher &
                <span className="block text-[#6EA8FF]">Grow Faster</span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg max-w-xl">
                We deliver powerful SEO strategies to improve rankings, traffic, and conversions.
              </p>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS (SWIPER SAME) ================= */}
      <section className="py-16 border-y border-[#dbe7ff]">

        <div className="container mx-auto px-6 relative">

          {/* NAV */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 pointer-events-none">

            <button className="seo-prev w-12 h-12 bg-white rounded-full shadow flex items-center justify-center pointer-events-auto">
              <ChevronLeft />
            </button>

            <button className="seo-next w-12 h-12 bg-white rounded-full shadow flex items-center justify-center pointer-events-auto">
              <ChevronRight />
            </button>

          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".seo-prev",
              nextEl: ".seo-next",
            }}
            loop
            speed={2000}
            spaceBetween={10}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 7 },
            }}
          >

            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-16">
                  <img
                    src={logo}
                    className="h-12 md:h-14 object-contain opacity-70"
                  />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6">

        <div className="container mx-auto">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#3B82F6] uppercase text-xs font-semibold">
              Our SEO Services
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#1a2e5e]">
              Complete SEO Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {services.map((item, i) => (
              <div
                key={i}
                className="p-8 border border-[#dbe7ff] rounded-2xl hover:-translate-y-2 transition"
              >

                <div className="text-[#2b4c9a]">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-bold text-xl text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-16 bg-[#EEF2FF]">

        <div className="container mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1a2e5e]">
              Why Choose SEO
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              { icon: <Target />, title: "Targeted Traffic" },
              { icon: <LineChart />, title: "Ranking Growth" },
              { icon: <ShieldCheck />, title: "White Hat SEO" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl text-center">
                <div className="text-[#2b4c9a] flex justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24 pt-10 px-6">

        <div className="container mx-auto bg-[#1a2e5e] rounded-xl p-12 flex justify-between items-center">

          <h2 className="text-3xl font-bold text-white">
            Ready to Grow Your SEO?
          </h2>

          <Link
            href="/contact-us"
            className="px-6 py-3 bg-white text-[#1a2e5e] rounded-xl font-semibold"
          >
            Start Project
          </Link>

        </div>

      </section>

    </main>
  );
}