"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Testimonials from "@/components/Testimonials";
import BrandMarquee from "@/components/TrustSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import {
  Monitor,
  BarChart3,
  Users,
  Target,
  Rocket,
  LineChart,
  ShieldCheck,
  BadgeCheck,
  Search,
  Megaphone,
  Code2,
  BriefcaseBusiness,
  Wrench,
  ChevronLeft, 
  ChevronRight,
} from "lucide-react";

import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};



export default function Home() {
const [activeTab, setActiveTab] = useState("all");



 const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error sending message");
    }

    setLoading(false);
  };
  // ✅ MOVE EVERYTHING HERE INSIDE

// ================= DATA =================
type CounterItem = {
  value: number;
  suffix: string;
  label: string;
  icon: ReactNode;
};

const counterData: CounterItem[] = [

  {
    value: 1000,
    suffix: "+",
    label: "Growth Systems Built",
    icon: <BriefcaseBusiness size={30} strokeWidth={2} />,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Driving Results",
    icon: <Wrench size={30} strokeWidth={2} />,
  },
  {
    value: 300,
    suffix: "+",
    label: "Campaigns That Convert",
    icon: <Users size={30} strokeWidth={2} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    icon: <BadgeCheck size={30} strokeWidth={2} />,
  },
];

  

const formatNumber = (num: number, suffix: string) => {
  if (suffix === "K+" && num >= 1000) {
    return Math.floor(num / 1000);
  }
  return num;
};

  // ================= STATE =================
  const [counts, setCounts] = useState(counterData.map(() => 0));
  const [startCount, setStartCount] = useState(false);

  // ================= REF =================
 const sectionRef = useRef<HTMLDivElement>(null);

  // ================= DETECT VISIBILITY =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ================= SMOOTH COUNT =================
  useEffect(() => {
    if (!startCount) return;

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        counterData.map((item) =>
          Math.floor(item.value * ease)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [startCount]);




  return (
    <main className="bg-[#0B0F1A] text-white">

              {/* HERO SECTION */}
              <section className="relative overflow-hidden min-h-[800px] flex items-start md:items-center px-6 md:px-12 lg:px-24 pt-32 md:pt-0 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff]">
              {/* BACKGROUND GLOW */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/10 blur-3xl rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6ea8ff]/10 blur-3xl rounded-full"></div>
                <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                  {/* LEFT CONTENT */}
                  <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.15,
                        },
                      },
                    }}
                    className="max-w-xl text-center md:text-left"
                  >

                    {/* HEADING */}
                    <motion.h1
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#1a2e5e]"
                    >
                    <div>
                        <p className="inline-block w-auto px-5 py-1.5 mb-5 rounded-full text-xs font-medium border border-[#dbe4ff] bg-white text-[#2b4c9a] shadow-sm uppercase tracking-wider hover:bg-blue-500/20 transition">
                          Growth-Driven Digital Agency
                      </p>
                    </div>
                      We Don’t Just Build Websites{" "}
                      <span className="text-[#2b4c9a]">
                        We Build Growth Systems
                      </span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="mt-5 md:mt-6 text-slate-600 leading-relaxed text-base md:text-lg"
                    >
                      We design high-performance websites and execute data-driven digital marketing strategies that help businesses attract, engage, and convert more customers.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                    >

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg cursor-pointer bg-gradient-to-r bg-[#2b4c9a] hover:bg-[#1f3d84] text-white shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
                      >
                        Book Strategy Call
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 cursor-pointer rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm"
                      >
                        View Work
                      </motion.button>

                    </motion.div>

                    {/* STATS */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-5 md:mt-6 text-sm text-slate-600 font-medium"
                    >
                      ✔ 120+ Projects • ✔ ROI-Focused • ✔ Fast Delivery
                    </motion.p>

                  </motion.div>


                  {/* RIGHT SIDE */}
                  <div className="flex justify-center md:justify-end">

                    <div className="relative w-full max-w-md md:max-w-none">

                      {/* HERO IMAGE */}
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Image
                            src="/images/hero.png"
                            alt="Hero image"
                            width={900}
                            height={500}
                            className="relative z-10 drop-shadow-[0_25px_60px_rgba(43,76,154,0.18)] w-full h-auto"
                          />
                        </motion.div>
                      </motion.div>

                      {/* FLOATING CARD */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-10 md:bottom-5 flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-xl md:rounded-2xl border border-[#e5ecff] p-3 md:p-4 shadow-[0_20px_60px_rgba(43,76,154,0.12)]"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >

                        <img
                          src="/images/google-rating.png"
                          alt="Google rating"
                          className="w-20 md:w-24 h-10 md:h-12 object-contain"
                        />

                        <div>
                          <div className="flex text-yellow-400 text-xs md:text-sm">
                            ★ ★ ★ ★ ★
                          </div>

                          <div className="flex items-center gap-1 text-xs md:text-sm mt-1">
                            <span className="text-[#1a2e5e] font-semibold">4.7</span>
                            <span className="text-gray-500">(107 Reviews)</span>
                          </div>
                        </div>

                      </motion.div>

                    </div>

                  </div>

                </div>
              </section>

             {/* PREMIUM MARQUEE SECTION */}

              <section className="relative overflow-hidden py-5 bg-white border-y border-[#e5ecff]">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* MARQUEE */}
                <div className="flex items-center whitespace-nowrap animate-marquee gap-10">

                  {[
                    {
                      icon: <Monitor size={22} strokeWidth={2} />,
                      text: "Web Design",
                    },
                    {
                      icon: <BarChart3 size={22} strokeWidth={2} />,
                      text: "SEO Growth",
                    },
                    {
                      icon: <Users size={22} strokeWidth={2} />,
                      text: "Lead Generation",
                    },
                    {
                      icon: <Target size={22} strokeWidth={2} />,
                      text: "Conversion Design",
                    },
                    {
                      icon: <Rocket size={22} strokeWidth={2} />,
                      text: "Performance Marketing",
                    },
                    {
                      icon: <LineChart size={22} strokeWidth={2} />,
                      text: "Analytics & Reporting",
                    },
                  ]
                    .concat([
                      {
                        icon: <Monitor size={22} strokeWidth={2} />,
                        text: "Web Design",
                      },
                      {
                        icon: <BarChart3 size={22} strokeWidth={2} />,
                        text: "SEO Growth",
                      },
                      {
                        icon: <Users size={22} strokeWidth={2} />,
                        text: "Lead Generation",
                      },
                      {
                        icon: <Target size={22} strokeWidth={2} />,
                        text: "Conversion Design",
                      },
                      {
                        icon: <Rocket size={22} strokeWidth={2} />,
                        text: "Performance Marketing",
                      },
                      {
                        icon: <LineChart size={22} strokeWidth={2} />,
                        text: "Analytics & Reporting",
                      },
                    ])
                    .map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-10"
                      >

                        {/* ITEM */}
                        <div className="flex items-center gap-3">

                          <div className="text-[#4c74e6]">
                            {item.icon}
                          </div>

                          <span className="text-[#1a2e5e] text-sm md:text-base font-semibold">
                            {item.text}
                          </span>

                        </div>

                        {/* SEPARATOR */}
                        <div className="w-px h-6 bg-[#dbe4ff]"></div>

                      </div>
                    ))}

                </div>
              </section>


              {/* About US section*/}
              <section className="relative py-28 overflow-hidden bg-[#1a2e5e] text-white">

                {/* BACKGROUND GLOW */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1e3a8a]/20 blur-3xl rounded-full"></div>

                {/* GRID DOTS */}
                <div className="absolute left-20 top-40 opacity-20">
                  <div className="grid grid-cols-6 gap-3">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#4c74e6]"
                      />
                    ))}
                  </div>
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">

                  {/* LEFT SIDE */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >

                    <div className="relative w-full max-w-[620px]">

                      {/* TOP SMALL IMAGES */}
                      <div className="grid grid-cols-2 gap-5 mb-5">

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                        >

                          <img
                            src="/images/about2.jpg"
                            alt=""
                            className="h-[180px] w-full object-cover"
                          />

                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="overflow-hidden rounded-[28px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                        >

                          <img
                            src="/images/about3.jpg"
                            alt=""
                            className="h-[180px] w-full object-cover"
                          />

                        </motion.div>

                      </div>

                      {/* MAIN IMAGE */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden rounded-[34px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                      >

                        <img
                          src="/images/about1.jpg"
                          alt=""
                          className="w-full h-[430px] object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/40 to-transparent"></div>

                      </motion.div>

                      {/* FLOATING STATS CARD */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute bottom-8 -left-8 md:-left-14 bg-white rounded-[28px] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] max-w-[260px]"
                      >

                        <div className="flex items-center gap-4">

                          {/* ICON */}
                          <div className="w-14 h-14 rounded-2xl bg-[#eef4ff] flex items-center justify-center">

                            <Users
                              size={28}
                              strokeWidth={2}
                              className="text-[#2b4c9a]"
                            />

                          </div>

                          {/* CONTENT */}
                          <div>

                            <h4 className="text-3xl font-bold text-[#1a2e5e]">
                              1000+
                            </h4>

                            <p className="text-sm font-semibold text-[#42526b]">
                              Projects Completed
                            </p>

                          </div>

                        </div>

                        <p className="text-[#6b7280] text-sm mt-4 leading-relaxed">
                          Delivering real business growth for brands worldwide.
                        </p>

                        {/* BOTTOM LINE */}
                        <div className="mt-5 h-1.5 w-full rounded-full bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff]"></div>

                      </motion.div>

                    </div>

                  </motion.div>

                  {/* RIGHT SIDE */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >

                    {/* BADGE */}
                    <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#102347] border border-[#1f3d84] text-[#6ea8ff] text-xs font-semibold uppercase">
                      About Maskoid
                    </span>

                    {/* HEADING */}
                    <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight tracking-tight">

                      Crafting Digital Experiences That Drive{" "}

                      <span className="text-[#3f6ee8]">
                        Growth & Revenue
                      </span>

                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-lg leading-relaxed text-[#b7c2d8] max-w-xl">
                      We help healthcare clinics, local businesses, and growing brands build premium websites and marketing systems that drive measurable growth.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-10 space-y-5">

                      {[
                        {
                          icon: <ShieldCheck size={24} strokeWidth={2} />,
                          title: "Conversion-Focused Design",
                          desc: "We design websites that turn visitors into paying customers.",
                        },
                        {
                          icon: <BarChart3 size={24} strokeWidth={2} />,
                          title: "SEO & Performance Optimized",
                          desc: "Built for speed, search visibility, and long-term growth.",
                        },
                        {
                          icon: <BadgeCheck size={24} strokeWidth={2} />,
                          title: "Trusted by Growing Businesses",
                          desc: "1000+ businesses trust us to grow their online presence.",
                        },
                        {
                          icon: <Target size={24} strokeWidth={2} />,
                          title: "Designed for Real Business Results",
                          desc: "Our strategies are built to deliver measurable ROI.",
                        },
                      ].map((item, i) => (

                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-4 group"
                        >

                          {/* ICON */}
                          <div className="w-14 h-14 rounded-2xl bg-[#102347] border border-[#1f3d84] flex items-center justify-center flex-shrink-0 group-hover:bg-[#16356b] transition-all duration-300">

                            <div className="text-[#6ea8ff]">
                              {item.icon}
                            </div>

                          </div>

                          {/* CONTENT */}
                          <div>

                            <h4 className="text-xl font-semibold text-white">
                              {item.title}
                            </h4>

                            <p className="mt-1 text-[#b7c2d8] leading-relaxed">
                              {item.desc}
                            </p>

                          </div>

                        </motion.div>

                      ))}

                    </div>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-wrap gap-4">

                      <button className="inline-flex cursor-pointer items-center gap-2 mt-8 px-6 py-3 px-8 py-4 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] transition-all duration-300 font-semibold shadow-[0_10px_40px_rgba(43,76,154,0.35)]">
                        Work With Us →
                      </button>

                      <button className="inline-flex cursor-pointer items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm">
                        View Case Studies →
                      </button>

                    </div>

                  </motion.div>

                </div>

              </section>

              {/* ================= Service SECTION ================= */}
                <motion.section
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={stagger}
                      className="relative py-24 bg-[#EEF2FF] text-black overflow-hidden"
                    >
                    {/* 🌊 SEO WAVE BACKGROUND */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

                      {/* LEFT WAVE */}
                      <div className="absolute -left-20 top-0 opacity-80 animate-waveAutoX">
                        <Image
                          src="/images/wave-left.png"
                          alt="wave-left"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-auto object-contain"
                        />
                      </div>

                      {/* RIGHT WAVE */}
                      <div className="absolute -right-20 top-0 opacity-50 animate-waveAutoY">
                        <Image
                          src="/images/wave-right.png"
                          alt="wave-right"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-auto object-contain"
                        />
                      </div>

                    </div>
                      <div className="max-w-6xl mx-auto px-6">

                        {/* ROW 1 - TITLE LEFT + CONTENT RIGHT */}

                        <motion.div
                          variants={fadeUp}
                          className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start"
                        >

                          {/* LEFT CONTENT */}
                          <div className="max-w-md">

                            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-blue-400 uppercase tracking-wider hover:bg-blue-500/20 transition">
                              Services
                            </p>

                            <h2 className="text-4xl md:text-3xl font-bold mt-5 leading-tight text-[#1a2e5e]">

                              We Build Digital Systems That{" "}

                              <span className="text-[#2b4c9a]">
                                Generate Growth & Revenue
                              </span>

                            </h2>

                            <p className="mt-6 text-[#5b6475] leading-relaxed">
                              We help businesses grow using websites, SEO, ads, and performance marketing strategies designed to convert visitors into customers.
                            </p>

                            {/* BUTTON */}
                            <a
                              href="/services"
                              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm"
                            >
                              Explore All Services →
                            </a>

                          </div>

                          {/* RIGHT SERVICES GRID */}
                          <Swiper
                            modules={[Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            breakpoints={{
                              640: {
                                slidesPerView: 2,
                              },
                              1024: {
                                slidesPerView: 3,
                              },
                            }}
                            className="w-full"
                          >

                            {[
                              {
                                num: "01",
                                title: "Web Design",
                                desc: "Beautiful, conversion-focused UI/UX designs.",
                                icon: <Monitor size={24} strokeWidth={2} />,
                              },
                              {
                                num: "02",
                                title: "SEO Optimization",
                                desc: "Rank higher on Google and drive organic traffic.",
                                icon: <Search size={24} strokeWidth={2} />,
                              },
                              {
                                num: "03",
                                title: "PPC Advertising",
                                desc: "High-converting ads that bring instant leads.",
                                icon: <Target size={24} strokeWidth={2} />,
                              },
                              {
                                num: "04",
                                title: "Social Media Marketing",
                                desc: "Grow your brand and engage ideal customers.",
                                icon: <Megaphone size={24} strokeWidth={2} />,
                              },
                              {
                                num: "05",
                                title: "Web Development",
                                desc: "Fast, scalable and SEO-friendly websites.",
                                icon: <Code2 size={24} strokeWidth={2} />,
                              },
                            ].map((item, i) => (

                              <SwiperSlide key={i}>

                                <motion.div
                                  variants={fadeUp}
                                  whileHover={{ y: -8 }}
                                  transition={{ duration: 0.25 }}
                                  className="group relative bg-white border border-[#e8ecf5] rounded-2xl p-6 min-h-[250px] shadow-sm hover:shadow-[0_20px_60px_rgba(43,76,154,0.12)] transition-all duration-300"
                                >

                                  {/* TOP */}
                                  <div className="flex items-start justify-between">

                                    {/* ICON */}
                                    <div className="w-12 h-12 rounded-xl bg-[#eef4ff] border border-[#dbe7ff] flex items-center justify-center text-[#2b4c9a] group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-300">
                                      {item.icon}
                                    </div>

                                    {/* NUMBER */}
                                    {/*<span className="text-sm font-bold text-[#2b4c9a]">
                                      {item.num}
                                    </span>*/}

                                  </div>

                                  {/* CONTENT */}
                                  <div className="mt-5">

                                    <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#2b4c9a] transition">
                                      {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                                      {item.desc}
                                    </p>

                                  </div>

                                </motion.div>

                              </SwiperSlide>

                            ))}

                          </Swiper>

                        </motion.div>
                                                

                    </div>
                  </motion.section>


              {/* ================= COUNTER SECTION ================= */}
              <section
                ref={sectionRef}
                className="relative py-10 bg-[#EEF4FF] overflow-hidden z-20 border-y border-[#dbe7ff]"
              >

              {/* 🌌 MOVING BACKGROUND ELEMENTS */} 
              <div className="absolute inset-0 overflow-hidden pointer-events-none z-0"> 
                
                {/* BIG BLUE DRIFT */} 
                <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-drift1"></div> 
                
                {/* PURPLE DRIFT */} 
                <div className="absolute w-[600px] h-[600px] bg-[#1a2e5e]-500/10 rounded-full blur-3xl animate-drift2"></div> 
                
                {/* CYAN SMALL ORBIT */} 
                <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-2xl animate-drift3"></div> 
                
                {/* DOT GRID MOTION */} 
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#3b82f6_1px,transparent_1px)] [background-size:40px_40px] animate-gridMove"></div>
              </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                  <div className="grid md:grid-cols-4 grid-cols-1">

                    {counterData.map((item, i) => (
                      <div
                        key={i}
                        className={`relative flex items-center gap-4 px-6 py-4
                        ${i !== counterData.length - 1 ? "md:border-r border-[#dbe7ff]" : ""}
                        `}
                      >

                        {/* ICON */}
                        <div className="w-16 h-16 rounded-2xl bg-[#eef4ff] border border-[#dbe7ff] flex items-center justify-center text-[#2b4c9a] shadow-sm">

                          {item.icon}

                        </div>

                        {/* CONTENT */}
                        <div>

                          {/* NUMBER */}
                          <div className="flex items-end gap-1 leading-none">

                            <span className="text-3xl md:text-4xl font-bold text-[#2b4c9a]">
                              {formatNumber(counts[i], item.suffix)}
                            </span>

                            <span className="text-2xl font-bold text-[#2b4c9a]">
                              {item.suffix}
                            </span>

                          </div>

                          {/* LABEL */}
                          <p className="mt-1 text-sm text-[#6b7280] font-medium">
                            {item.label}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </section>
        
              {/*  RECENT LIVE PROJECTS (PREMIUM LAYOUT) */}
              <section className="relative py-28 bg-[#EEF2FF] text-white overflow-hidden">

              {/*  BACKGROUND GLOW */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-10">
                  <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-blue-400 uppercase tracking-wider hover:bg-blue-500/20 transition">
                      Recent Work
                  </p>


                  <h2 className="text-4xl font-bold text-[#1a2e5e] mt-3">
                    Latest Completed <span className="text-blue-500">Projects</span>
                  </h2>

                  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    We design and develop high-performance websites and marketing systems.
                  </p>
                </div>

                {/* 🔥 TABS */}
                 <div className="flex justify-center gap-4 mb-12 flex-wrap">

                  {["all", "web", "seo"].map((tab) => (

                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 rounded-xl text-sm border transition-all duration-300 font-semibold ${
                        activeTab === tab
                          ? "bg-[#2b4c9a] text-white border-[#2b4c9a] shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
                          : "bg-white text-[#5b6475] border-[#dbe4ff] hover:bg-[#2b4c9a] hover:text-white"
                      }`}
                    >

                      {tab.toUpperCase()}

                    </button>

                  ))}

                </div>

                {/* GRID */}
                {/* SLIDER WRAPPER */}
                <div className="relative">

                  {/* CUSTOM NAVIGATION */}
                  <div className="absolute -top-20 right-0 flex gap-3 z-20">

                    <button className="projects-prev w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#2b4c9a] transition flex items-center justify-center">

                      <ChevronLeft size={20} />

                    </button>

                    <button className="projects-next w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#2b4c9a] transition flex items-center justify-center">

                      <ChevronRight size={20} />

                    </button>

                  </div>

                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: ".projects-prev",
                      nextEl: ".projects-next",
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                    className="projects-slider"
                  >

                    {/* ================= CATER SPOON ================= */}
                    {(activeTab === "all" || activeTab === "web") && (
                      <SwiperSlide>

                        <a
                          href="https://caterspoonmumbai.com/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/caterspoon-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/caterspoon-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/caterspoon-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Cater Spoon Mumbai
                            </h3>

                            <p className="text-gray-400 text-sm mt-2">
                              Luxury catering website with premium UI & SEO system.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                    {/* ================= PAKHTOONS ================= */}
                    {(activeTab === "all" || activeTab === "seo") && (
                      <SwiperSlide>

                        <a
                          href="https://pakhtoons.development-site.maskoid.net/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/pakhtoons-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/pakhtoons-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/pakhtoons-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Pakhtoons
                            </h3>

                            <p className="text-gray-400 text-sm mt-2">
                              SEO optimized business website with performance focus.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                    {/* ================= VAYORAA ================= */}
                    {(activeTab === "all" || activeTab === "web") && (
                      <SwiperSlide>

                        <a
                          href="https://vayoraa.in/"
                          rel="noopener noreferrer"
                          className="group relative rounded-2xl overflow-hidden hover:scale-[1.02] transition block"
                        >

                          <div className="relative h-[320px] flex items-center justify-center">

                            <img
                              src="/images/Vayoraa-about.png"
                              className="absolute left-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[-5deg]"
                            />

                            <img
                              src="/images/Vayoraa-home.png"
                              className="relative z-20 w-52 h-[230px] object-cover object-top rounded-xl shadow-2xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                            />

                            <img
                              src="/images/Vayoraa-contact.png"
                              className="absolute right-10 w-40 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-0 transition-all duration-500 group-hover:translate-y-4 group-hover:rotate-[5deg]"
                            />

                          </div>

                          <div className="p-6 text-center">
                            <h3 className="text-xl text-[#1a2e5e] font-semibold">
                              Vayoraa
                            </h3>

                            <p className="text-gray-400 text-sm mt-2">
                              Conversion-focused modern website with branding & SEO.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                  </Swiper>

                </div>
              </div>
              <div className="text-center">

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm"
                >
                  View More Projects
                  <span className="text-lg">→</span>
                </a>


              </div>
              </section>

              {/* Testimonial */}
              <Testimonials />

              {/* Trust section client logo */}
              <BrandMarquee />

              {/* contact */}
              <section className="relative py-32 bg-[#071120] text-white overflow-hidden">

                {/* 🌌 BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/20 blur-[140px] rounded-full"></div>
                  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:34px_34px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                  {/* GRID */}
                  <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT SIDE (TITLE SECTION) */}
                    <div>

                      <p className="inline-flex items-center px-5 py-2 rounded-full bg-[#102347] border border-[#1f3d84] text-[#6ea8ff] text-xs font-semibold uppercase tracking-[0.2em]">
                        Contact Us
                      </p>

                      <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                        Let’s Build Something{" "}
                        <span className="text-[#6EA8FF]">Amazing Together</span>
                      </h2>

                      <p className="mt-5 text-[#B7C2D8] text-lg leading-relaxed max-w-md">
                        Have a project in mind? Let’s create a premium digital experience
                        designed to generate real business growth.
                      </p>

                    </div>

                    {/* RIGHT SIDE (FORM + CONTENT) */}
                    <div className="relative">

                      {/* FORM GLOW */}
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#2b4c9a]/30 to-purple-500/20 blur-xl"></div>

                      {/* FORM CARD */}
                      <div className="relative bg-[#EEF2FF] border border-white/10 rounded-xl px-8 md:px-10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">



                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="mt-8 mb-8 space-y-5">

                          <div className="grid md:grid-cols-2 gap-5">
                            <input
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              className="h-14 px-5 rounded-xl bg-[#ffffff] border border-white/10 focus:border-[#2b4c9a] outline-none text-[#1a2e5e]"
                              required
                            />

                            <input
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              className="h-14 px-5 rounded-xl bg-[#ffffff] border border-white/10 focus:border-[#2b4c9a] outline-none text-[#1a2e5e]"
                              required
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-5">
                            <input
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                              className="h-14 px-5 rounded-xl bg-[#ffffff] border border-white/10 focus:border-[#2b4c9a] outline-none text-[#1a2e5e]"
                              required
                            />

                            <input
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              placeholder="Project Type"
                              className="h-14 px-5 rounded-xl bg-[#ffffff] border border-white/10 focus:border-[#2b4c9a] outline-none text-[#1a2e5e]"
                            />
                          </div>

                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Tell us about your project..."
                            className="w-full p-5 rounded-xl bg-[#ffffff] border border-white/10 focus:border-[#2b4c9a] outline-none text-[#1a2e5e] resize-none"
                            required
                          />

                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-14 rounded-xl bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff] hover:scale-[1.02] transition font-semibold"
                          >
                            {loading ? "Sending..." : "Send Message →"}
                          </button>

                        </form>

                      </div>
                    </div>

                  </div>
                </div>
              </section>    

</main>
  );
}

