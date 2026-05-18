"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Search, BarChart3, Target, Globe, TrendingUp } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SEOVisualDesignPage() {

  const logos = [
    "/images/Client-1-1.png",
    "/images/Client-1-2.png",
    "/images/Client-1-3.png",
    "/images/Client-1-5.png",
    "/images/Client-1-6.png",
    "/images/Client-1-7.png",
    "/images/Client-1-11.png",
    "/images/Client-1-12.png",
  ];

  const services = [
    {
      icon: <Search size={30} />,
      title: "Keyword Strategy",
      text: "Find high intent keywords that drive conversions.",
    },
    {
      icon: <Target size={30} />,
      title: "On-Page SEO",
      text: "Optimize pages for better ranking and visibility.",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Analytics Tracking",
      text: "Measure traffic, rankings, and performance.",
    },
    {
      icon: <Globe size={30} />,
      title: "Technical SEO",
      text: "Fix indexing, speed, and site structure issues.",
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Growth Strategy",
      text: "Scale organic traffic with proven SEO systems.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* ================= HERO (VISUAL PREMIUM STYLE) ================= */}
      <section className="relative min-h-[780px] flex items-center bg-[#0f1d3d] text-white overflow-hidden">

        {/* BACKGROUND GLOWS */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-10 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">

            <p className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-blue-300 text-xs uppercase">
              SEO Visual Strategy
            </p>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Rank Your Website
              <span className="block text-blue-400">Visually Smarter</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl">
              We design SEO systems that combine data, creativity, and performance to grow your visibility and revenue.
            </p>

            <div className="mt-8 flex gap-4">
              <Link className="px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700" href="/contact-us">
                Get Started
              </Link>

              <Link className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10" href="/portfolio">
                View Work
              </Link>
            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="relative"
          >

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/10 blur-3xl rounded-[40px]"></div>

            <img
              src="/images/seo-dashboard.png"
              className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-white/10"
            />

          </motion.div>

        </div>
      </section>

      {/* ================= LOGO CAROUSEL ================= */}
      <section className="py-14 bg-white border-y border-[#e5eaf7]">

        <div className="container mx-auto px-6 relative">

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none">

            <button className="seo-prev w-12 h-12 rounded-full bg-white shadow flex items-center justify-center pointer-events-auto">
              <ChevronLeft />
            </button>

            <button className="seo-next w-12 h-12 rounded-full bg-white shadow flex items-center justify-center pointer-events-auto">
              <ChevronRight />
            </button>

          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{ prevEl: ".seo-prev", nextEl: ".seo-next" }}
            loop
            speed={2000}
            spaceBetween={10}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 7 },
            }}
          >

            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center h-16">
                  <img src={logo} className="h-12 opacity-70 hover:opacity-100 transition" />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 px-6">

        <div className="container mx-auto">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="text-blue-500 uppercase text-xs font-semibold">
              SEO Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0f1d3d]">
              High Performance SEO Solutions
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition"
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#0f1d3d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6">

        <div className="container mx-auto bg-[#0f1d3d] rounded-3xl p-10 md:p-16 relative overflow-hidden">

          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ready to Boost SEO Growth?
            </h2>

            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-[#0f1d3d] rounded-xl font-semibold hover:bg-blue-100"
            >
              Start Now
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}