"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Search,
  Globe,
  BarChart3,
  TrendingUp,
  Users,
  Rocket,
  ShieldCheck,
  LineChart,
  Target,
  Layers3,
  MonitorSmartphone,
  PenTool,
  Atom,
  Database,
  Code2,
  Server,
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
      duration: 0.7,
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
    icon: <Search size={34} />,
    title: "Keyword Research",
    text: "Strategic keyword targeting to attract high-intent traffic.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "On-Page SEO",
    text: "Optimized website structure and content for rankings.",
  },
  {
    icon: <Globe size={34} />,
    title: "Technical SEO",
    text: "Improve speed, indexing, and crawlability.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "SEO Audits",
    text: "Identify growth opportunities with detailed audits.",
  },
  {
    icon: <Users size={34} />,
    title: "Local SEO",
    text: "Boost local visibility and Google rankings.",
  },
];

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
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* HERO */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

        </div>

        <div className="container mx-auto px-6 py-12 lg:py-14 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >

              <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em]">
                SEO Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Rank Higher &
                <span className="block text-[#6EA8FF]">
                  Grow Organically
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We help businesses dominate search engines with powerful SEO strategies focused on rankings, traffic, and conversions.
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
                  src="/images/seo.png"
                  alt="SEO"
                  className="h-[220px] sm:h-[360px] md:h-[340px] lg:h-[360px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CLIENT LOGOS */}
      <section className="py-8 bg-white border-y border-[#dbe7ff]">

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
      <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="container px-6 mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase">
              Our SEO Services
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Powerful SEO Solutions For
              <span className="text-[#2b4c9a]"> Modern Businesses</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-16">

            {[
              {
                icon: <Search size={30} />,
                title: "Keyword Research",
                text:
                  "Find high-performing keywords that attract targeted traffic and improve search visibility."
              },
              {
                icon: <TrendingUp size={30} />,
                title: "On-Page SEO",
                text:
                  "Optimize website content, meta tags, and structure to improve rankings and user experience."
              },
              {
                icon: <Globe size={30} />,
                title: "Technical SEO",
                text:
                  "Fix backend issues like site speed, indexing, and crawlability for better search engine performance."
              },
              {
                icon: <BarChart3 size={30} />,
                title: "SEO Audit",
                text:
                  "Complete analysis of your website to identify SEO issues and improvement opportunities."
              },
              {
                icon: <Users size={30} />,
                title: "Local SEO",
                text:
                  "Improve visibility in local search results and attract nearby customers to your business."
              },
              {
                icon: <Rocket size={30} />,
                title: "Growth Strategy",
                text:
                  "Data-driven SEO strategies designed to increase traffic, leads, and long-term growth."
              }
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

                {/* TEXT */}
                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR SOLUTIONS */}
      <section className="relative bg-[#F8FAFF] py-16 overflow-hidden">

        {/* Soft Light Blur Accents */}
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
            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              SEO Solutions
            </p>

            <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Results Driven
              <span className="text-[#2b4c9a]"> SEO Services</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              We help businesses improve search visibility, increase organic traffic,
              and drive long-term growth through strategic SEO solutions.
            </p>
          </motion.div>

          {/* CONTENT LIST LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 mt-10 w-full items-start">

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
                  className="group flex items-start py-7 border-b border-gray-200/60 transition-all duration-300 hover:bg-gray-50/50 hover:px-4 cursor-pointer gap-6 text-left"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#2b4c9a] flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-2 flex-1">

                    <h3 className="text-xl font-bold text-[#1a2e5e] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col w-full">

              {solutions.slice(3, 6).map((item, index) => (

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start py-7 border-b border-gray-200/60 transition-all duration-300 hover:bg-gray-50/50 hover:px-4 cursor-pointer gap-6 text-left"
                >

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-white text-[#2b4c9a] flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-2 flex-1">

                    <h3 className="text-xl font-bold text-[#1a2e5e] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
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

        {/* BG EFFECTS */}
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
                SEO Strategies That
                <span className="text-[#6EA8FF]"> Deliver Real Results</span>
              </h2>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We help businesses improve online visibility, attract qualified
                traffic, and achieve sustainable growth through data-driven SEO
                strategies tailored to your goals.
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
                  title: "Data-Driven SEO Strategies",
                  text: "We create customized SEO campaigns based on keyword research, competitor analysis, and search trends to maximize organic growth.",
                },
                {
                  number: "02",
                  title: "Technical SEO Expertise",
                  text: "From site speed optimization to indexing and crawlability improvements, we ensure your website performs flawlessly for search engines.",
                },
                {
                  number: "03",
                  title: "Content & On-Page Optimization",
                  text: "We optimize website content, metadata, and page structure to improve rankings, engagement, and user experience.",
                },
                {
                  number: "04",
                  title: "Long-Term Organic Growth",
                  text: "Our SEO solutions focus on sustainable traffic, higher search visibility, and measurable business growth over time.",
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

      {/* OUR SEO PROCESS */}
      <section className="relative w-full bg-[#F8FAFF] py-16 overflow-hidden">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

        <div className="container px-6 mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT COLUMN */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-md"
          >

            <motion.p
              whileHover={{
                scale: 1.04,
              }}
              className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition"
            >
              SEO Process
            </motion.p>

            <h2 className="mt-5 text-4xl sm:text-4xl lg:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Our Proven SEO Strategy
              <span className="text-[#2b4c9a]"> For Sustainable Growth</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
              We follow a structured SEO process focused on improving visibility,
              driving targeted traffic, and delivering measurable long-term results.
            </p>

          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full lg:w-3/5 flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-4 mt-8 lg:mt-0">

            {/* SVG LINE */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-12 h-20 pointer-events-none hidden sm:block z-0"
            >

              <svg
                className="w-full h-full"
                viewBox="0 0 500 40"
                fill="none"
                preserveAspectRatio="none"
              >

                <motion.path
                  d="M 10,20 Q 80,0 150,20 T 290,20 T 430,20"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.25"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                />

              </svg>

            </motion.div>

            {[
              {
                step: "01",
                icon: <Search size={30} strokeWidth={2.5} />,
                title: "SEO Audit & Research",
                text: "We analyze your website, competitors, and keywords to identify growth opportunities and SEO improvements.",
              },
              {
                step: "02",
                icon: (
                  <PenTool
                    size={30}
                    strokeWidth={2.5}
                    className="rotate-90"
                  />
                ),
                title: "On-Page Optimization",
                text: "We optimize content, metadata, internal linking, and website structure for better search visibility.",
              },
              {
                step: "03",
                icon: <Code2 size={30} strokeWidth={2.5} />,
                title: "Technical SEO",
                text: "We improve site speed, mobile performance, indexing, and crawlability to boost overall SEO performance.",
              },
              {
                step: "04",
                icon: <Rocket size={30} strokeWidth={2.5} />,
                title: "Monitoring & Growth",
                text: "We track rankings, traffic, and performance metrics while continuously optimizing for long-term success.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="flex flex-col items-center text-center flex-1 min-w-[120px] z-10 group"
              >

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
                  className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500"
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="absolute -top-4 -right-4 w-14 h-14 bg-blue-500/20 blur-2xl rounded-full"></div>

                  </div>

                  {item.icon}

                </motion.div>

                {/* NUMBER */}
                <motion.span
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-xl mt-4 font-bold text-[#2b4c9a]"
                >
                  {item.step}
                </motion.span>

                {/* TITLE */}
                <h3 className="relative z-10 mt-2 text-lg sm:text-xl font-bold text-[#1a2e5e] leading-snug">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">

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
                SEO Tools & Platforms
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
                Modern SEO
                <span className="text-[#2b4c9a]"> Technologies</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                We use advanced SEO tools and analytics platforms to maximize rankings and organic traffic.
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
                  name: "Google Analytics",
                  icon: <BarChart3 size={42} />,
                },
                {
                  name: "Google Search Console",
                  icon: <Search size={42} />,
                },
                {
                  name: "Ahrefs",
                  icon: <TrendingUp size={42} />,
                },
                {
                  name: "SEMrush",
                  icon: <Globe size={42} />,
                },
                {
                  name: "Technical SEO",
                  icon: <Code2 size={42} />,
                },
                {
                  name: "Content Strategy",
                  icon: <PenTool size={42} />,
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
                Ready To Boost
                <span className="text-[#6EA8FF]"> Your Rankings?</span>
              </h2>

              <p className="mt-5 text-[#B7C2D8] text-lg max-w-2xl">
                Let’s create a powerful SEO strategy that drives organic traffic and business growth.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:bg-[#dbe7ff] transition-all duration-300 whitespace-nowrap"
            >
              Start SEO Project
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}