"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  BarChart3,
  Users,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Rocket,
  PenTool,
  Search,
  Globe,
  Layers3,
  Smartphone,
  Camera,
  MessageCircle,

} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

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

const solutions = [
  {
    icon: <FaInstagram size={34} />,
    title: "Instagram Marketing",
    text: "Build a strong Instagram presence with engaging content and growth strategies.",
  },
  {
    icon: <FaFacebookF size={34} />,
    title: "Facebook Marketing",
    text: "Reach your audience effectively through targeted Facebook campaigns.",
  },
  {
    icon: <FaYoutube size={34} />,
    title: "YouTube Marketing",
    text: "Grow your brand visibility through high-performing video marketing.",
  },
  {
    icon: <FaLinkedinIn size={34} />,
    title: "LinkedIn Marketing",
    text: "Generate B2B leads and establish authority on LinkedIn.",
  },
  {
    icon: <MessageCircle size={34} />,
    title: "Content Strategy",
    text: "Creative social media content designed to engage and convert.",
  },
];

export default function SocialMediaMarketingPage() {
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
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* HERO SECTION */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

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
                Social Media Marketing
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Grow Your Brand With
                <span className="block text-[#6EA8FF]">
                  Social Media Marketing
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We create powerful social media strategies that increase engagement,
                boost visibility, generate leads, and grow your business online.
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
                  src="/images/social-media-marketing.png"
                  alt="Social Media Marketing"
                  className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* CLIENT LOGOS */}
        <section className="py-8 bg-white border-y border-[#dbe7ff]">
            <div className="container mx-auto px-6 relative">

                {/* NAV BUTTONS */}
                <button
                className="client-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition"
                >
                <ChevronLeft size={20} />
                </button>

                <button
                className="client-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition"
                >
                <ChevronRight size={20} />
                </button>

                {/* SWIPER */}
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
                    prevEl: ".client-prev",
                    nextEl: ".client-next",
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
                        className="h-14 md:h-16 object-contain transition"
                        />
                    </div>
                    </SwiperSlide>
                ))}

                </Swiper>

            </div>
        </section>

      {/* SERVICES */}
        <section className="relative bg-[#EEF2FF] py-16 overflow-hidden">

        {/* BG PATTERN */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/5 blur-[100px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/10 blur-[100px] rounded-full"></div>

        <div className="container mx-auto relative z-10">

            {/* HEADER */}
            <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
            >

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase">
                Social Media Services
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                Social Media Marketing
                <span className="text-[#2b4c9a]"> Services</span>
            </h2>

            </motion.div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-16">

            {[
                {
                icon: <FaInstagram size={30} />,
                title: "Instagram Growth",
                },
                {
                icon: <FaFacebookF size={30} />,
                title: "Facebook Ads",
                },
                {
                icon: <FaYoutube size={30} />,
                title: "YouTube Marketing",
                },
                {
                icon: <Camera size={30} />,
                title: "Content Creation",
                },
                {
                icon: <BarChart3 size={30} />,
                title: "Analytics & Reporting",
                },
                {
                icon: <TrendingUp size={30} />,
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
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border border-[#dbe7ff]
                    bg-white
                    p-6
                    shadow-[0_10px_40px_rgba(43,76,154,0.05)]
                    hover:shadow-[0_25px_60px_rgba(43,76,154,0.12)]
                    transition-all duration-500
                "
                >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="absolute -top-20 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

                </div>

                {/* ICON */}
                <motion.div
                    whileHover={{
                    scale: 1.08,
                    rotate: 5,
                    }}
                    transition={{
                    type: "spring",
                    stiffness: 220,
                    }}
                    className="
                    relative z-10
                    w-16 h-16
                    rounded-2xl
                    bg-[#EEF4FF]
                    text-[#2b4c9a]
                    flex items-center justify-center
                    group-hover:bg-[#2b4c9a]
                    group-hover:text-white
                    transition-all duration-500
                    "
                >
                    {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-6 text-xl font-bold text-[#1a2e5e] leading-snug">
                    {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-sm">
                    Premium social media marketing strategies designed for engagement, reach, and business growth.
                </p>

                </motion.div>

            ))}

            </div>

        </div>

        </section>

      {/* OUR SOLUTIONS */}
      <section className="relative bg-[#F8FAFF] py-16 overflow-hidden">

        {/* BACKGROUND BLUR */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="container px-6 mx-auto relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider">
              Our Solutions
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Social Media Marketing
              <span className="text-[#2b4c9a]"> Solutions</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              We create high-performing social media campaigns that connect your
              brand with the right audience.
            </p>

          </motion.div>

          {/* SOLUTIONS LIST */}
          <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-x-12 lg:gap-x-16 w-full items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col w-full">

              {solutions.slice(0, 3).map((item, index) => (

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    relative
                    flex items-start
                    gap-6
                    py-7
                    border-b border-gray-200/70
                    transition-all duration-300
                    hover:pl-4
                    cursor-pointer
                  "
                >

                  {/* ICON */}
                  <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-white
                    border border-gray-100
                    shadow-[0_10px_30px_rgba(43,76,154,0.06)]
                    text-[#2b4c9a]
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:bg-[#2b4c9a]
                    group-hover:text-white
                  ">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-[#1a2e5e] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-500 leading-relaxed text-[15px]">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col w-full">

              {solutions.slice(3, 5).map((item, index) => (

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    relative
                    flex items-start
                    gap-6
                    py-7
                    border-b border-gray-200/70
                    transition-all duration-300
                    hover:pl-4
                    cursor-pointer
                  "
                >

                  {/* ICON */}
                  <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-white
                    border border-gray-100
                    shadow-[0_10px_30px_rgba(43,76,154,0.06)]
                    text-[#2b4c9a]
                    flex items-center justify-center
                    shrink-0
                    transition-all duration-300
                    group-hover:bg-[#2b4c9a]
                    group-hover:text-white
                  ">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">

                    <h3 className="text-xl font-bold text-[#1a2e5e] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-500 leading-relaxed text-[15px]">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-16 bg-[#1a2e5e] overflow-hidden">

        {/* BACKGROUND EFFECTS */}
        <div className="absolute inset-0 pointer-events-none">

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full"
          />

          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/20 blur-[100px] rounded-full"
          />

        </div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl">
                Why Choose Us
              </p>

              <h2 className="mt-6 text-4xl md:text-4xl font-bold text-white leading-tight">
                Social Media Marketing
                <span className="text-[#6EA8FF]"> That Builds Real Brand Growth</span>
              </h2>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We help businesses grow through strategic social media marketing,
                engaging content, paid campaigns, and data-driven audience targeting
                designed to increase visibility, engagement, and conversions.
              </p>

            </motion.div>

            {/* RIGHT POINTS */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >

              {[
                {
                  number: "01",
                  title: "Platform-Specific Marketing Strategies",
                  text: "We create customized social media strategies for Instagram, Facebook, LinkedIn, and other platforms based on your audience and business goals.",
                },
                {
                  number: "02",
                  title: "Creative Content & Brand Engagement",
                  text: "Our team designs engaging visuals, reels, stories, and social content that strengthen brand identity and increase audience interaction.",
                },
                {
                  number: "03",
                  title: "Performance-Driven Paid Campaigns",
                  text: "We run optimized social media advertising campaigns focused on reach, lead generation, conversions, and measurable business growth.",
                },
                {
                  number: "04",
                  title: "Analytics, Optimization & Scaling",
                  text: "Using real-time analytics and performance tracking, we continuously optimize campaigns to improve engagement, ROI, and long-term growth.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    x: 12,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group flex items-start gap-6 pb-8 border-b border-white/10"
                >

                  {/* NUMBER */}
                  <div className="flex-shrink-0">

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                      }}
                      className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center group-hover:bg-[#2b4c9a] transition-all duration-500"
                    >

                      <span className="text-xl font-bold text-[#6EA8FF] group-hover:text-white transition-all duration-500">
                        {item.number}
                      </span>

                    </motion.div>

                  </div>

                  {/* CONTENT */}
                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[#B7C2D8] leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>

      {/* OUR PROCESS */}
      <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">

        <div className="container px-6 mx-auto relative z-10">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
              Our Process
            </p>

            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Social Media Marketing
              <span className="text-[#2b4c9a]"> Process</span>
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20 relative">

            {[
              {
                step: "01",
                title: "Research & Strategy",
                icon: <Search size={26} />,
                text: "We analyze your market, audience, and competitors.",
              },
              {
                step: "02",
                title: "Content Planning",
                icon: <PenTool size={26} />,
                text: "We create engaging content calendars and creative concepts.",
              },
              {
                step: "03",
                title: "Campaign Execution",
                icon: <Megaphone size={26} />,
                text: "We launch targeted campaigns across social platforms.",
              },
              {
                step: "04",
                title: "Optimization & Growth",
                icon: <Rocket size={26} />,
                text: "We monitor and optimize campaigns for better results.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.12 }}
                className="relative bg-white border border-[#e8efff] rounded-[30px] p-8 shadow-[0_10px_40px_rgba(43,76,154,0.05)] hover:shadow-[0_25px_60px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="absolute top-6 right-6 text-6xl font-bold text-[#EEF4FF]">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1a2e5e] leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-500 leading-relaxed">
                  {item.text}
                </p>

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
                Platforms We Use
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
                Powerful Social Platforms
                <span className="text-[#2b4c9a]"> For Brand Growth</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                We use the latest social media tools and platforms to maximize
                engagement, leads, and ROI.
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
                  name: "Instagram",
                  icon: <FaInstagram size={42} />,
                },
                {
                  name: "Facebook",
                  icon: <FaFacebookF size={42} />,
                },
                {
                  name: "LinkedIn",
                  icon: <FaLinkedinIn size={42} />,
                },
                {
                  name: "YouTube",
                  icon: <FaYoutube size={42} />,
                },
                {
                  name: "WhatsApp",
                  icon: <MessageCircle size={42} />,
                },
                {
                  name: "Google Ads",
                  icon: <Globe size={42} />,
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

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready To Grow
                <span className="text-[#6EA8FF]"> Your Brand Online?</span>
              </h2>

              <p className="mt-5 text-[#B7C2D8] text-lg max-w-2xl">
                Let’s create powerful social media campaigns that generate real business growth.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:bg-[#dbe7ff] transition-all duration-300 whitespace-nowrap"
            >
              Start Your Campaign
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}