"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";
import {
  Rocket,
  BarChart3,
  Target,
  MousePointerClick,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";

/* ANIMATION (UNCHANGED) */
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


/* PPC SOLUTIONS DATA */
const solutions = [
  {
    icon: <Target size={34} />,
    title: "Google Ads Campaigns",
    text: "High-converting search ads that generate instant leads and sales.",
  },
  {
    icon: <MousePointerClick size={34} />,
    title: "Meta Ads Management",
    text: "Facebook & Instagram ads optimized for conversions and ROI.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Conversion Tracking",
    text: "Track every click, lead, and sale with advanced analytics setup.",
  },
  {
    icon: <Megaphone size={34} />,
    title: "Ad Copy Optimization",
    text: "High-performing creatives that improve CTR and reduce CPC.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "ROI Optimization",
    text: "Continuous campaign optimization to maximize return on ad spend.",
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
  
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

      {/* HERO SECTION */}
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
                We create data-driven PPC campaigns that generate instant leads, sales, and maximum ROI for your business.
              </p>

            </motion.div>

            {/* RIGHT */}
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
                  src="/images/webdev.png"
                  alt="PPC Service"
                  className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* CLIENT LOGO SECTION */}
      <section className="py-16 bg-white border-y border-[#dbe7ff]">

        <div className="container mx-auto px-6">

          <div className="container mx-auto px-6 relative">

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between z-30 pointer-events-none">

              <button className="logos-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a]">
                <ChevronLeft size={20} />
              </button>

              <button className="logos-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a]">
                <ChevronRight size={20} />
              </button>

            </div>

            <Swiper
              className="px-14"
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".logos-prev",
                nextEl: ".logos-next",
              }}
              loop
              speed={2000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 7 },
              }}
            >

              {logos.map((logo, i) => (
                <SwiperSlide key={i}>
                  <img src={logo} className="h-14 mx-auto object-contain" />
                </SwiperSlide>
              ))}

            </Swiper>

          </div>

        </div>

      </section>

{/* SERVICES */}
      <section className="relative py-20 px-6 md:px-10 lg:px-16 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="container mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our PPC Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Powerful PPC Solutions For
              <span className="text-[#2b4c9a]"> Modern Businesses</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-16">

            {[
              {
                icon: <Target size={30} />,
                title: "Google Ads",
              },
              {
                icon: <MousePointerClick size={30} />,
                title: "Search Ads",
              },
              {
                icon: <Megaphone size={30} />,
                title: "Display Ads",
              },
              {
                icon: <BarChart3 size={30} />,
                title: "Campaign Audit",
              },
              {
                icon: <Users size={30} />,
                title: "Audience Targeting",
              },
              {
                icon: <Rocket size={30} />,
                title: "Lead Generation",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#dbe7ff] bg-white p-6 shadow-[0_10px_40px_rgba(43,76,154,0.05)] hover:shadow-[0_25px_60px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-20 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

                </div>

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="relative z-10 w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500"
                >
                  {item.icon}
                </motion.div>

                <h3 className="relative z-10 mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-sm">
                  Premium PPC campaigns focused on leads, conversions, and ROI.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR SOLUTION */}
      <section className="py-16 bg-[#EEF2FF] relative overflow-hidden">

        <div className="container px-6 mx-auto relative z-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">

            <p className="inline-block px-5 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-[#3B82F6] uppercase">
              Our PPC Solutions
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#1a2e5e]">
              PPC Strategy
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

      {/* CTA */}
      <section className="pb-24 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto bg-[#1a2e5e] rounded-xl p-10 md:p-16 relative overflow-hidden">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl font-bold text-white">
                Ready To Grow Your Business?
              </h2>

              <p className="mt-5 text-[#B7C2D8]">
                Let’s run high-converting PPC campaigns for your brand.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-[#1a2e5e] rounded-xl font-semibold"
            >
              Start Your Project
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}