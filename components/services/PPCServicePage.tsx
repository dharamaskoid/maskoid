"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";

import {
  Target,
  MousePointerClick,
  BarChart3,
  Megaphone,
  TrendingUp,
  Search,
  ShieldCheck,
  Rocket,
  Globe,
  Code2,
  PenTool,
  Layers3,
  Server,
  Atom,
} from "lucide-react";

/* SAME ANIMATIONS (UNCHANGED) */
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

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ONLY PPC DATA (NO STRUCTURE CHANGE) */
const solutions = [
  {
    icon: <Target size={34} />,
    title: "Google Ads Campaigns",
    text: "High-converting search campaigns that bring instant leads.",
  },
  {
    icon: <MousePointerClick size={34} />,
    title: "Meta Ads Management",
    text: "Facebook & Instagram ads designed for conversions.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Conversion Tracking",
    text: "Track every click, lead, and sale with accuracy.",
  },
  {
    icon: <Megaphone size={34} />,
    title: "Ad Copy Optimization",
    text: "High-performing creatives that increase CTR.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "ROI Optimization",
    text: "Reduce cost per lead and maximize returns.",
  },
];

export default function PPCServicePage() {
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

      {/* HERO SECTION (same structure) */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div variants={fadeUp} initial="hidden" animate="show">

              <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase">
                PPC Advertising Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                High-Converting PPC Campaigns
                <span className="block text-[#6EA8FF]">
                  That Drive ROI
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We create data-driven PPC campaigns that generate leads, sales, and measurable ROI.
              </p>

            </motion.div>

            {/* RIGHT (same animation structure) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative"
            >
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
                  src="/images/ppc.png"
                  alt="PPC"
                  className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />
              </motion.div>
            </motion.div>

          </div>
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

      {/* SERVICES (same layout, only data changed) */}
      <section className="py-16 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase">
              Our PPC Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e]">
              PPC Solutions For
              <span className="text-[#2b4c9a]"> Business Growth</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              { icon: <Target size={34} />, title: "Google Ads" },
              { icon: <MousePointerClick size={34} />, title: "Social Ads" },
              { icon: <BarChart3 size={34} />, title: "Analytics" },
              { icon: <Megaphone size={34} />, title: "Ad Creatives" },
              { icon: <TrendingUp size={34} />, title: "Optimization" },
              { icon: <Rocket size={34} />, title: "Scaling Campaigns" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[28px] p-8 border border-[#dbe7ff]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  High performance PPC execution for maximum ROI.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* OUR SOLUTION (same structure) */}
      <section className="py-16 bg-[#EEF2FF] relative overflow-hidden">

        <div className="container px-6 mx-auto relative z-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">

            <p className="inline-block px-5 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-[#3B82F6] uppercase">
              Our Solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#1a2e5e]">
              PPC Marketing
              <span className="text-[#2b4c9a]"> Solutions</span>
            </h2>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

            {solutions.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -12 }}
                className="bg-white p-8 rounded-[28px] border border-[#e8efff] text-center"
              >
                <div className="text-[#2b4c9a] flex justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500 text-sm">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US (same layout unchanged) */}
      <section className="relative py-16 overflow-hidden bg-[#1a2e5e]">

        <div className="container px-6 mx-auto relative z-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-center max-w-4xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Our PPC Services
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              "High ROI Campaigns",
              "Certified Experts",
              "Transparent Reporting",
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[28px] text-white">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA (same structure) */}
      <section className="pb-24 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto bg-[#1a2e5e] rounded-xl p-10 md:p-16 relative overflow-hidden">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Ready For High ROI PPC?
              </h2>

              <p className="mt-5 text-[#B7C2D8]">
                Let’s scale your business with powerful ads.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-[#1a2e5e] rounded-xl font-semibold"
            >
              Get Started
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}