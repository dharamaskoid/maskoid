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
  ShieldCheck,
  Search,
  PenTool,
  MonitorSmartphone,
  ArrowRight,
  Globe,
  LineChart,
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


const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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

      {/* CLIENT LOGOS */}
      <section className="py-16 bg-white border-y border-[#dbe7ff]">

        <div className="container mx-auto px-6 relative">

          <button className="seo-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300">
            <ChevronLeft size={20} />
          </button>

          <button className="seo-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            className="px-14"
            loop={true}
            speed={800}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".seo-prev",
              nextEl: ".seo-next",
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
                    alt="client logo"
                    className="h-14 md:h-16 object-contain hover:scale-110 transition duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </section>

      {/* SERVICES */}
      <section className="relative py-16 px-6 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="container mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our PPC Services
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
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
      
      {/* WHY CHOOSE US */}
        <section className="relative py-16 overflow-hidden bg-[#1a2e5e]">

          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

          </div>

          <div className="container px-6 mx-auto relative z-10">

            <div className="text-center max-w-4xl mx-auto">

              <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
                Why Choose Us
              </p>

              <h2 className="mt-5 text-4xl md:text-4xl font-bold text-white">
                Features of Our
                <span className="text-[#6EA8FF]"> PPC Services</span>
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

              {[
                {
                  icon: <Target size={30} />,
                  title: "High Conversion Campaigns",
                  text: "We create PPC campaigns optimized to maximize leads, conversions, and ROI.",
                },
                {
                  icon: <BarChart3 size={30} />,
                  title: "Performance Tracking",
                  text: "Real-time analytics and detailed reports help measure campaign performance.",
                },
                {
                  icon: <ShieldCheck size={30} />,
                  title: "Scalable Growth",
                  text: "We continuously optimize campaigns to reduce cost and improve long-term growth.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-500"
                >

                  <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-[#6EA8FF] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[#B7C2D8] leading-relaxed">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* OUR PPC PROCESS */}
        <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">

          {/* BG SHAPES */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/10 blur-[100px] rounded-full"></div>

          </div>

          <div className="container px-6 mx-auto relative z-10">

            {/* HEADER */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto"
            >

              <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
                Our Process
              </p>

              <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                PPC Advertising
                <span className="text-[#2b4c9a]"> Process</span>
              </h2>

              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Our proven PPC process helps generate quality leads,
                improve conversions, and maximize ROI.
              </p>

            </motion.div>

            {/* PROCESS STEPS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20 relative">

              {[
                {
                  step: "01",
                  title: "Research & Strategy",
                  icon: <Search size={26} />,
                  text: "We analyze competitors, audience behavior, and keywords to create a winning PPC strategy.",
                },

                {
                  step: "02",
                  title: "Campaign Setup",
                  icon: <PenTool size={26} />,
                  text: "We build optimized campaigns with compelling ad copy and high-converting targeting.",
                },

                {
                  step: "03",
                  title: "Optimization",
                  icon: <MonitorSmartphone size={26} />,
                  text: "We continuously optimize bids, ads, and targeting for better performance and lower CPC.",
                },

                {
                  step: "04",
                  title: "Reporting & Scaling",
                  icon: <Rocket size={26} />,
                  text: "We track conversions, generate reports, and scale campaigns for maximum ROI.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    relative
                    bg-white
                    border border-[#e8efff]
                    rounded-[30px]
                    p-8
                    shadow-[0_10px_40px_rgba(43,76,154,0.05)]
                    hover:shadow-[0_25px_60px_rgba(43,76,154,0.12)]
                    transition-all duration-500
                  "
                >

                  {/* STEP NUMBER */}
                  <div className="
                    absolute top-6 right-6
                    text-6xl font-bold
                    text-[#EEF4FF]
                  ">
                    {item.step}
                  </div>

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="
                      relative z-10
                      w-16 h-16
                      rounded-2xl
                      bg-[#EEF4FF]
                      text-[#2b4c9a]
                      flex items-center justify-center
                    "
                  >
                    {item.icon}
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="relative z-10 mt-8 text-2xl font-bold text-[#1a2e5e] leading-snug">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="relative z-10 mt-5 text-gray-500 leading-relaxed">
                    {item.text}
                  </p>

                  {/* ARROW LINE */}
                  {index !== 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-20 z-20 items-center">

                      <div className="w-12 border-t-2 border-dashed border-[#c8d8ff]"></div>

                      <ArrowRight className="w-5 h-5 text-[#3B82F6]" />

                    </div>
                  )}

                </motion.div>

              ))}

            </div>

          </div>
        </section>


        {/* TECHNOLOGIES */}
        <section className="relative py-16 bg-white overflow-hidden">

          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute -top-20 -left-20 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-[#2b4c9a]/10 blur-[120px] rounded-full"></div>

          </div>

          <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* LEFT */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >

                <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                  PPC Tools & Platforms
                </p>

                <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                  Advanced PPC
                  <span className="text-[#2b4c9a]"> Technologies</span>
                </h2>

                <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                  We use powerful advertising and analytics platforms to maximize campaign performance and conversions.
                </p>

              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6"
              >

                {[
                  {
                    name: "Google Ads",
                    icon: <Target size={42} />,
                  },
                  {
                    name: "Google Analytics",
                    icon: <BarChart3 size={42} />,
                  },
                  {
                    name: "Meta Ads",
                    icon: <Globe size={42} />,
                  },
                  {
                    name: "Keyword Planner",
                    icon: <Search size={42} />,
                  },
                  {
                    name: "Conversion Tracking",
                    icon: <LineChart size={42} />,
                  },
                  {
                    name: "Campaign Scaling",
                    icon: <TrendingUp size={42} />,
                  },
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                    }}
                    className="group relative bg-white border border-[#dbe7ff] rounded-[28px] p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden shadow-[0_10px_40px_rgba(43,76,154,0.05)] hover:shadow-[0_30px_80px_rgba(43,76,154,0.14)] transition-all duration-500"
                  >

                    <div className="w-20 h-20 rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#2b4c9a] group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>

                    <h3 className="mt-5 text-lg md:text-xl font-semibold text-[#1a2e5e] text-center">
                      {item.name}
                    </h3>

                  </motion.div>

                ))}

              </motion.div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="py-16 px-6">

          <div className="container mx-auto bg-[#1a2e5e] rounded-xl p-10 md:p-16 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

              <div>

                <h2 className="text-4xl md:text-4xl font-bold text-white leading-tight">
                  Ready To Scale
                  <span className="text-[#6EA8FF]"> Your Campaigns?</span>
                </h2>

                <p className="mt-5 text-[#B7C2D8] text-lg max-w-2xl">
                  Let’s create high-performing PPC campaigns focused on leads, conversions, and business growth.
                </p>

              </div>

              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:bg-[#dbe7ff] transition-all duration-300 whitespace-nowrap"
              >
                Start PPC Campaign
              </Link>

            </div>

          </div>

        </section>

    </main>
  );
}