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
  Code2,
  Database,
  Activity,
  CheckCircle2,
} from "lucide-react";

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
  ];

  return (
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* ================= HERO ================= */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div variants={fadeUp} initial="hidden" animate="show">

              <p className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs uppercase">
                SEO Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl font-bold">
                Rank Higher &
                <span className="block text-[#6EA8FF]">Grow Faster</span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] max-w-xl">
                Powerful SEO strategies to increase traffic, ranking and conversions.
              </p>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS (SAME SWIPER) ================= */}
      <section className="py-16 border-y border-[#dbe7ff]">
        <div className="container mx-auto px-6 relative">

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 pointer-events-none">

            <button className="logos-prev w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto">
              <ChevronLeft />
            </button>

            <button className="logos-next w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto">
              <ChevronRight />
            </button>

          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".logos-prev",
              nextEl: ".logos-next",
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
                <div className="flex justify-center items-center h-16">
                  <img src={logo} className="h-12 opacity-70" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      {/* ================= SEO SERVICES GRID ================= */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1a2e5e]">
              SEO Solutions That Drive Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              { icon: <Search />, title: "Keyword Research" },
              { icon: <Globe />, title: "On Page SEO" },
              { icon: <Database />, title: "Technical SEO" },
              { icon: <TrendingUp />, title: "Growth Strategy" },
              { icon: <BarChart3 />, title: "Analytics" },
              { icon: <Rocket />, title: "Ranking Boost" },
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-2xl hover:-translate-y-2 transition">
                <div className="text-[#2b4c9a]">{item.icon}</div>
                <h3 className="mt-4 font-bold text-xl">{item.title}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#1a2e5e]">
            Why Choose Our SEO?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              { icon: <Target />, title: "Targeted Traffic" },
              { icon: <LineChart />, title: "Ranking Growth" },
              { icon: <ShieldCheck />, title: "White Hat SEO" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl">
                {item.icon}
                <h3 className="mt-4 font-bold">{item.title}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-24 pt-10 px-6">
        <div className="container mx-auto bg-[#1a2e5e] rounded-2xl p-12 text-white flex justify-between items-center">

          <h2 className="text-3xl font-bold">
            Ready to Rank Higher?
          </h2>

          <Link href="/contact-us" className="px-6 py-3 bg-white text-black rounded-xl">
            Start Project
          </Link>

        </div>
      </section>

    </main>
  );
}