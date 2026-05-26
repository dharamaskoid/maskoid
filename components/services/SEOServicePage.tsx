"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import GoogleReviews from "@/components/GoogleReviews";

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
  CheckCircle2,
  Plus,
  MessageCircleMore,
  Minus,
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

// SEO CASE STUDIES DATA
const caseStudies = [
  {
    domain: "organicgrowth.io",
    industry: "SEO & DIGITAL MARKETING",
    techStack: ["SEO Audit", "Keyword Research", "On-Page SEO"],
    desc: "We improved organic visibility and search rankings through a strategic SEO campaign focused on technical optimization, content improvements, and keyword targeting.",
    outcomes: [
      "320% increase in organic traffic",
      "Top 3 rankings for competitive keywords",
      "Improved Core Web Vitals performance",
    ],
    image: "/images/case-study-seo-1.jpg",
  },
  {
    domain: "localboostmarketing.com",
    industry: "LOCAL SEO STRATEGY",
    techStack: ["Google Business", "Local SEO", "Content SEO"],
    desc: "Our local SEO strategy helped the business dominate local search results and attract highly targeted nearby customers.",
    outcomes: [
      "180% increase in local search visibility",
      "Higher Google Maps rankings",
      "More qualified local leads generated",
    ],
    image: "/images/case-study-seo-2.jpg",
  },
  {
    domain: "searchscalehub.com",
    industry: "TECHNICAL SEO",
    techStack: ["Technical SEO", "Site Speed", "Analytics"],
    desc: "We optimized the website structure, indexing, and technical performance to improve search engine crawlability and rankings.",
    outcomes: [
      "Faster page load speed",
      "Improved mobile SEO performance",
      "Significant increase in indexed pages",
    ],
    image: "/images/case-study-seo-3.jpg",
  },
];

// Explicitly type your objects to satisfy Framer Motion's strict types
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      staggerChildren: 0.15 
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 100 : -100,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeInOut" }
  })
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

  const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  
   
  
    const handleNext = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
    };
  
    const handlePrev = () => {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };
  
    const active = caseStudies[currentIndex];

     const prevRef = useRef<HTMLButtonElement | null>(null);
     const nextRef = useRef<HTMLButtonElement | null>(null);
    
    const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

    // SEO FAQ DATA
    const faqs = [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term strategy. Most websites start seeing noticeable improvements within 3 to 6 months depending on competition, industry, and website condition.",
      },
      {
        question: "Do you provide local SEO services?",
        answer:
          "Yes, we help businesses improve local search visibility through Google Business optimization, local citations, and location-focused SEO strategies.",
      },
      {
        question: "What is included in your SEO services?",
        answer:
          "Our SEO services include keyword research, on-page SEO, technical SEO, content optimization, SEO audits, competitor analysis, and performance tracking.",
      },
      {
        question: "Will SEO help increase website traffic?",
        answer:
          "Yes, effective SEO improves your search engine rankings, helping attract more organic and targeted traffic to your website.",
      },
      {
        question: "Do you optimize websites for mobile SEO?",
        answer:
          "Absolutely. We optimize websites for mobile responsiveness, page speed, and Core Web Vitals to improve rankings and user experience.",
      },
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

      {/* TECHNOLOGIES WE USE */}
      <section className="relative w-full bg-[#EEF2FF] text-white overflow-hidden py-16 flex items-center">

        {/* BG GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[#1a2e5e] [background-size:28px_28px]"></div>

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#7c4dff]/10 blur-[120px] rounded-full"></div>

        <div className="container px-6 mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">  
          
          {/* Background Decorative Rings */}
          <motion.div
            animate={{
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[320px] opacity-50 pointer-events-none z-0 hidden lg:block"
          >

            <div className="absolute inset-0 border border-purple-500/20 rounded-[50%] rotate-[-12deg] scale-110"></div>

            <div className="absolute inset-0 border border-indigo-500/30 rounded-[50%] rotate-[-7deg]"></div>

            <div className="absolute inset-12 border border-blue-500/15 rounded-[50%] rotate-[-3deg] scale-95"></div>

            {/* Ambient Lights */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-1/4 left-1/4 w-44 h-44 bg-blue-600/20 blur-[70px] rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-purple-600/15 blur-[70px] rounded-full"
            ></motion.div>

            {/* FLOATING STARS */}
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute top-1/3 left-6 w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_12px_#c084fc]"
            ></motion.div>

            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"
            ></motion.div>

            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute top-1/2 right-12 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-[0_0_14px_#818cf8]"
            ></motion.div>

          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative z-10"
          >

            <motion.p
              whileHover={{
                scale: 1.05,
              }}
              className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition"
            >
              SEO Tools & Expertise
            </motion.p>

            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Advanced SEO Strategies For
              <span className="text-[#2b4c9a]"> Higher Search Rankings</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl">
              We use industry-leading SEO tools and proven optimization techniques to
              improve visibility, drive organic traffic, and grow your online presence.
            </p>

          </motion.div>

          {/* RIGHT TECHNOLOGY STACK */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-6 mt-8 lg:mt-0 z-10 w-full lg:w-auto pr-0 lg:pr-8">

            {[
              {
                icon: <Search size={30} strokeWidth={2} />,
                title: "Keyword Research",
                color: "text-cyan-400",
                position: "md:col-start-1 md:row-start-1",
              },
              {
                icon: <TrendingUp size={30} strokeWidth={2} />,
                title: "On-Page SEO",
                color: "text-white",
                position: "md:col-start-3 md:row-start-1",
              },
              {
                icon: <Globe size={30} strokeWidth={2} />,
                title: "Technical SEO",
                color: "text-blue-400",
                position: "md:col-start-5 md:row-start-1",
              },
              {
                icon: <BarChart3 size={30} strokeWidth={2} />,
                title: "SEO Audit",
                color: "text-green-400",
                position: "md:col-start-2 md:row-start-2",
              },
              {
                icon: <Users size={30} strokeWidth={2} />,
                title: "Local SEO",
                color: "text-sky-400",
                position: "md:col-start-4 md:row-start-2",
              },
              {
                icon: <Rocket size={30} strokeWidth={2} />,
                title: "Growth Strategy",
                color: "text-emerald-500",
                position: "md:col-start-6 md:row-start-2",
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  flex items-center gap-3
                  bg-[#1a2e5e]
                  backdrop-blur-xl
                  border border-slate-800/80
                  rounded-xl
                  px-5 py-3.5
                  w-40 h-14
                  transition-all duration-500
                  ${item.position}
                `}
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-10 right-0 w-24 h-24 bg-indigo-500/20 blur-3xl rounded-full"></div>

                </div>

                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                  }}
                  className={`relative z-10 flex items-center justify-center w-6 h-6 shrink-0 ${item.color}`}
                >
                  {item.icon}
                </motion.div>

                {/* TEXT */}
                <span className="relative z-10 text-lg font-medium text-slate-200 tracking-wide">
                  {item.title}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Case Study */}
      <section className="relative w-full bg-[#F8FAFF] overflow-hidden py-16 flex items-center">
            
          <div className="container mx-auto px-6 relative z-10 w-full">
              
              {/* SECTION HEADER BLOCK */}

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center max-w-3xl mx-auto"
              >

                <motion.p
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition"
                >
                  SEO Success Stories
                </motion.p>

                <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                  Our Recent
                  <span className="text-[#2b4c9a]"> SEO Growth</span> Results
                </h2>

                <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                  Real SEO strategies. Real rankings. Real business growth through organic search optimization.
                </p>

              </motion.div>

              {/* INTERACTIVE SPLIT ANCHOR VIEWPORT */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 mt-10 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full"
              >
                
                {/* LEFT INNER PANEL: Dynamic Typography Content (Spans 5 Columns) */}
                <div className="lg:col-span-5 flex flex-col space-y-6 text-left w-full order-2 lg:order-1">
                  
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="space-y-6"
                    >
                      {/* Domain & Sub-Industry */}
                      <div>
                        <h3 className="mt-5 text-3xl md:text-3xl font-bold text-[#1a2e5e] leading-tight">{active.domain}</h3>
                        <p className="text-xs text-[#2b4c9a] font-mono tracking-wider mt-1 uppercase font-semibold">{active.industry}</p>
                      </div>

                      {/* Tech Stack Button Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {active.techStack.map((tech, idx) => (
                          <span key={idx} className="text-[11px] font-semibold text-[#1a2e5e] bg-[#EEF2FF] border border-[#2b4c9a]/10 px-3 py-1 rounded-lg shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Main Muted Paragraph Description */}
                      <p className="text-gray-500 leading-relaxed">
                        {active.desc}
                      </p>

                      {/* Dynamic Outcome Checklist items */}
                      <div className="space-y-2.5 border-t border-gray-200/60">
                        <h4 className="mt-5 text-xl md:text-xl font-bold text-[#1a2e5e] leading-tight">SEO Results:</h4>
                        {active.outcomes.map((outcome, idx) => (
                          <motion.div 
                            key={idx}
                            variants={itemVariants}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 size={16} className="text-[#2b4c9a] shrink-0" />
                            <p className="text-gray-500 leading-relaxed">{outcome}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* LOWER CONTAINER CONTROLLERS: Navigation Buttons & Indicators */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200/60">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#1a2e5e] hover:bg-[#2b4c9a] hover:text-white transition-all shadow-sm flex items-center justify-center active:scale-95"
                      >
                        <ChevronLeft size={18} strokeWidth={2.5} />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-[#1a2e5e] hover:bg-[#2b4c9a] hover:text-white transition-all shadow-sm flex items-center justify-center active:scale-95"
                      >
                        <ChevronRight size={18} strokeWidth={2.5} />
                      </button>
                    </div>

                    {/* Progress Bullet Indicators */}
                    <div className="flex gap-1.5">
                      {caseStudies.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-[#2b4c9a]' : 'w-2 bg-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* RIGHT INNER PANEL: Layered Desktop Viewport Device Asset Mockup (Spans 7 Columns) */}
                <div className="lg:col-span-7 relative w-full flex items-center justify-center min-h-[350px] sm:min-h-[440px] md:min-h-[480px] order-1 lg:order-2">
                  
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div 
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="w-full max-w-[580px] bg-white rounded-2xl border border-gray-200 p-2.5 shadow-[0_30px_70px_rgba(26,46,94,0.08)] relative z-10 group"
                    >
                      {/* Browser Top Window Tool Bar Bar details */}
                      <div className="flex items-center gap-1.5 pb-2.5 px-1.5 border-b border-gray-100">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <div className="w-48 h-3.5 bg-gray-50 rounded-md ml-4 border border-gray-200/60 flex items-center px-2 text-[8px] text-gray-400 font-mono">
                          https://{active.domain}
                        </div>
                      </div>

                      {/* Core Live Image Snapshot Display Box */}
                      <div className="w-full h-[240px] sm:h-[320px] md:h-[350px] rounded-xl overflow-hidden mt-2.5 bg-gray-50 relative border border-gray-100">
                        <img 
                          src={active.image} 
                          alt={`${active.domain} SEO Performance Preview`} 
                          className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Contextual Secondary Widget */}
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-15px] right-[2%] w-[160px] bg-white border border-gray-200/80 rounded-xl p-4 shadow-[0_20px_40px_rgba(26,46,94,0.06)] z-20 hidden sm:block text-left"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#F0F4FF] border border-blue-100 text-[#2b4c9a] flex items-center justify-center mb-2.5 shadow-sm">
                      <TrendingUp size={14} strokeWidth={2.5} />
                    </div>
                    <div className="text-[9px] font-bold tracking-wider text-gray-400 uppercase mb-0.5">SEO Growth</div>
                    <h4 className="text-xs font-black text-[#1a2e5e] flex items-center gap-1.5">
                      Higher Rankings
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    </h4>
                  </motion.div>

                </div>

              </motion.div>
          </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">

        {/* BG EFFECTS */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

        <div className="container px-4 sm:px-6 mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-28"
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase">
                SEO FAQ
              </p>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                Frequently Asked
                <span className="text-[#2b4c9a]"> SEO Questions</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed max-w-xl">
                Everything you need to know about our SEO services, rankings,
                keyword strategies, traffic growth, technical optimization,
                and long-term search visibility.
              </p>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    rounded-xl
                    bg-white/70
                    backdrop-blur-xl
                    border border-white/60
                    p-6
                    shadow-[0_20px_50px_rgba(43,76,154,0.08)]
                  "
                >

                  <h3 className="text-3xl sm:text-4xl font-bold text-[#1a2e5e]">
                    250+
                  </h3>

                  <p className="mt-2 text-gray-500 text-sm sm:text-base">
                    SEO Campaigns Successfully Managed
                  </p>

                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="
                    rounded-xl
                    bg-[#1a2e5e]
                    p-6
                    shadow-[0_20px_50px_rgba(43,76,154,0.12)]
                  "
                >

                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    95%
                  </h3>

                  <p className="mt-2 text-blue-100 text-sm sm:text-base">
                    Client Satisfaction Rate
                  </p>

                </motion.div>

              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="
                  mt-8
                  rounded-xl
                  overflow-hidden
                  border border-white/50
                  bg-white/60
                  backdrop-blur-xl
                  shadow-[0_30px_80px_rgba(43,76,154,0.10)]
                  hover:shadow-[0_35px_100px_rgba(43,76,154,0.16)]
                  transition-all duration-500
                "
              >

                <div className="relative p-6 sm:p-8 overflow-hidden">

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500">

                    <div className="absolute -top-24 right-0 w-60 h-60 bg-blue-500/10 blur-3xl rounded-full"></div>

                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 min-w-0">

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                        }}
                        className="
                          w-14 h-14 sm:w-16 sm:h-16
                          rounded-xl
                          bg-[#EEF4FF]
                          text-[#2b4c9a]
                          flex items-center justify-center
                          flex-shrink-0
                        "
                      >
                        <MessageCircleMore size={28} />
                      </motion.div>

                      <div className="min-w-0">

                        <h4 className="text-xl sm:text-2xl font-bold text-[#1a2e5e] leading-tight">
                          Need SEO Consultation?
                        </h4>

                        <p className="text-gray-500 mt-1 text-sm sm:text-base leading-relaxed">
                          Our SEO experts are ready to help your business grow.
                        </p>

                      </div>

                    </div>

                    {/* BUTTON */}
                    <Link
                      href="/contact-us"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        px-6 py-3
                        rounded-xl
                        bg-[#1a2e5e]
                        text-white
                        font-semibold
                        hover:bg-[#2b4c9a]
                        hover:scale-[1.03]
                        transition-all duration-300
                        whitespace-nowrap
                        w-full sm:w-auto
                      "
                    >
                      Contact Us
                    </Link>

                  </div>

                </div>

              </motion.div>

            </motion.div>

            {/* RIGHT SIDE FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5 sm:space-y-6"
            >

              {faqs.map((faq, index) => {

                const isActive = activeFAQ === index;

                return (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border border-white/60
                      bg-white/70
                      backdrop-blur-2xl
                      shadow-[0_20px_60px_rgba(43,76,154,0.08)]
                      hover:shadow-[0_30px_80px_rgba(43,76,154,0.14)]
                      transition-all duration-500
                    "
                  >

                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                      <div className="absolute -top-20 right-0 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full"></div>

                    </div>

                    {/* FAQ BUTTON */}
                    <button
                      onClick={() =>
                        setActiveFAQ(isActive ? null : index)
                      }
                      className="
                        relative z-10
                        w-full
                        px-6
                        py-3
                        text-left
                        flex items-center justify-between gap-4
                      "
                    >

                      <div className="flex-1">

                        <h3 className="text-lg sm:text-xl font-bold text-[#1a2e5e] leading-snug">
                          {faq.question}
                        </h3>

                      </div>

                      {/* ICON */}
                      <motion.div
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          w-8 h-8
                          rounded-xl
                          bg-[#EEF4FF]
                          text-[#2b4c9a]
                          flex items-center justify-center
                          flex-shrink-0
                        "
                      >

                        {isActive ? (
                          <Minus size={18} strokeWidth={2.5} />
                        ) : (
                          <Plus size={18} strokeWidth={2.5} />
                        )}

                      </motion.div>

                    </button>

                    {/* ANSWER */}
                    <AnimatePresence>

                      {isActive && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                          }}
                          className="overflow-hidden"
                        >

                          <div className="px-5 sm:px-8 pb-6 sm:pr-14">

                            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                              {faq.answer}
                            </p>

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>

                );

              })}

            </motion.div>

          </div>

        </div>

      </section>

       <GoogleReviews />

      {/* CTA */}
      <section className="py-16 px-6 lg:px-16">

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
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}