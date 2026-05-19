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
        <section className="py-16 bg-white border-y border-[#dbe7ff]">
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
      <section className="relative py-16 px-6 overflow-hidden">

        {/* BG PATTERN */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-500/5 blur-[100px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ff4fa1]/10 blur-[100px] rounded-full"></div>

        <div className="container mx-auto relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-flex px-5 py-2 rounded-full bg-pink-500/10 text-pink-600 text-xs font-semibold uppercase tracking-[0.2em]">
              Our Services
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Social Media Marketing
              <span className="text-pink-600"> Services</span>
            </h2>

          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

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
                  border border-[#ffd9ec]
                  bg-white
                  p-8
                  shadow-[0_10px_40px_rgba(255,79,161,0.06)]
                  hover:shadow-[0_25px_60px_rgba(255,79,161,0.16)]
                  transition-all duration-500
                "
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-20 right-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full"></div>

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
                    bg-pink-50
                    text-pink-600
                    flex items-center justify-center
                    group-hover:bg-pink-600
                    group-hover:text-white
                    transition-all duration-500
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-6 text-2xl font-bold text-[#1a2e5e] leading-snug">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-sm">
                  Premium social media marketing solutions tailored for brand visibility, engagement, and business growth.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR SOLUTIONS */}
      <section className="py-16 bg-[#EEF2FF] relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

        </div>

        <div className="container px-6 mx-auto relative z-10">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
              Our Solutions
            </p>

            <h2 className="mt-4 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Social Media Marketing
              <span className="text-[#2b4c9a]"> Solutions</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              We create high-performing social media campaigns that connect your
              brand with the right audience.
            </p>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

            {solutions.map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                }}
                className="group relative bg-white border border-[#e8efff] rounded-[28px] p-8 text-center overflow-hidden shadow-[0_10px_30px_rgba(43,76,154,0.04)] hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#6EA8FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="w-20 h-20 mx-auto rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
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

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white leading-tight">
              Features of Our
              <span className="text-[#6EA8FF]"> Social Media Marketing</span>
            </h2>

            <p className="mt-5 text-[#B7C2D8] text-lg leading-relaxed">
              We help businesses build strong social media presence through
              creative strategies and data-driven campaigns.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: <TrendingUp size={30} />,
                title: "Growth Focused Strategies",
                text: "We focus on strategies that increase followers, engagement, and conversions.",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "Brand Building",
                text: "We create a consistent and powerful brand identity across all platforms.",
              },
              {
                icon: <Users size={30} />,
                title: "Audience Engagement",
                text: "We help your business connect and engage with the right audience.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 overflow-hidden hover:border-[#3B82F6]/30 hover:bg-white/[0.07] transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-[#6EA8FF] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="mt-5 text-[#B7C2D8] leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] text-white font-semibold hover:-translate-y-1 transition-all duration-300"
            >
              Discuss Your Project
            </Link>

          </motion.div>

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
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">

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
      <section className="pb-24 px-6 md:px-10 lg:px-16">

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