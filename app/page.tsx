"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Testimonials from "@/components/Testimonials";
import BrandMarquee from "@/components/TrustSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <main className="bg-[#ffffff] text-white pt-[81.5px] lg:pt-[81.5px]">

              {/* HERO SECTION */}
              <section className="relative overflow-hidden flex items-center px-6 md:px-12 lg:px-24 py-10 md:py-10 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef4ff]">

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
                      className="mt-6 md:mt-8 flex flex-row flex-wrap justify-center md:justify-start gap-4"
                    >

                      {/* PRIMARY BUTTON */}
                      <Link href="/contact-us">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl cursor-pointer bg-[#2b4c9a] hover:bg-[#1f3d84] text-white font-semibold shadow-[0_10px_30px_rgba(43,76,154,0.25)] transition-all duration-300"
                        >
                          Book Strategy Call
                        </motion.button>
                      </Link>

                      {/* SECONDARY BUTTON */}
                      <Link href="/projects">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm cursor-pointer"
                        >
                          View Work
                        </motion.button>
                      </Link>

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

              <section className="relative overflow-hidden py-10 bg-white border-y border-[#e5ecff]">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                {/* MARQUEE */}
                <div className="flex items-center whitespace-nowrap animate-marquee gap-10">

                  {[
                    {
                      icon: <Monitor size={30} strokeWidth={2} />,
                      text: "Web Design",
                    },
                    {
                      icon: <BarChart3 size={30} strokeWidth={2} />,
                      text: "SEO Growth",
                    },
                    {
                      icon: <Users size={30} strokeWidth={2} />,
                      text: "Lead Generation",
                    },
                    {
                      icon: <Target size={30} strokeWidth={2} />,
                      text: "Conversion Design",
                    },
                    {
                      icon: <Rocket size={30} strokeWidth={2} />,
                      text: "Performance Marketing",
                    },
                    {
                      icon: <LineChart size={30} strokeWidth={2} />,
                      text: "Analytics & Reporting",
                    },
                  ]
                    .concat([
                      {
                        icon: <Monitor size={30} strokeWidth={2} />,
                        text: "Web Design",
                      },
                      {
                        icon: <BarChart3 size={30} strokeWidth={2} />,
                        text: "SEO Growth",
                      },
                      {
                        icon: <Users size={30} strokeWidth={2} />,
                        text: "Lead Generation",
                      },
                      {
                        icon: <Target size={30} strokeWidth={2} />,
                        text: "Conversion Design",
                      },
                      {
                        icon: <Rocket size={30} strokeWidth={2} />,
                        text: "Performance Marketing",
                      },
                      {
                        icon: <LineChart size={30} strokeWidth={2} />,
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

                          <div className="text-[#2b4c9a]">
                            {item.icon}
                          </div>

                          <span className="text-[#2b4c9a] text-2xl md:text-2xl font-semibold">
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
              <section className="relative py-16 overflow-hidden bg-[#1a2e5e] text-white">

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
                    <p className="inline-flex items-center px-5 py-2 rounded-full bg-[#102347] border border-[#1f3d84] text-[#3B82F6] text-xs font-semibold uppercase">
                      About Maskoid
                    </p>

                    {/* HEADING */}
                    <h2 className="mt-6 text-4xl md:text-4xl font-bold leading-tight tracking-tight">

                      Crafting Digital Experiences That Drive{" "}

                      <span className="text-[#6ea8ff]">
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
                    <div className="mt-10 flex flex-nowrap justify-center md:justify-start gap-3 sm:gap-4">

                      {/* PRIMARY BUTTON */}
                      <Link href="/contact-us">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl cursor-pointer bg-[#2b4c9a] hover:bg-[#1f3d84] text-white font-semibold shadow-[0_10px_30px_rgba(43,76,154,0.25)] transition-all duration-300">
                          Start Your Project
                        </button>
                      </Link>

                      {/* SECONDARY BUTTON */}
                      <Link href="/projects">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-white hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 text-[#2b4c9a] font-semibold shadow-sm cursor-pointer">
                          See Our Results
                        </button>
                      </Link>

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
                      className="relative py-16 bg-[#EEF2FF] text-black overflow-hidden"
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
                          className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-center"
                        >

                          {/* LEFT CONTENT */}
                          <div className="max-w-md">

                            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
                              Services
                            </p>

                            <h2 className="text-4xl md:text-4xl font-bold mt-5 leading-tight text-[#1a2e5e]">

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
                              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-[#2b4c9a] hover:bg-white hover:text-[#2b4c9a] transition-all duration-300 text-white font-semibold shadow-sm"
                            >
                              Explore All Services
                            </a>

                          </div>

                          {/* RIGHT SERVICES GRID */}
                            <Swiper
                              modules={[Autoplay, Pagination]}
                              pagination={{
                                clickable: true,
                              }}
                              spaceBetween={24}
                              slidesPerView={1}
                              centeredSlides={false}
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
                              loop={true}
                              grabCursor={true}
                              className="servicesSwiper w-full !pb-20 !pt-10"
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
                className="relative py-16 bg-[#EEF4FF] overflow-hidden z-20 border-y border-[#dbe7ff]"
              >

                {/* SUBTLE PREMIUM BACKGROUND GLOW */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.15,
                        },
                      },
                    }}
                    className="grid md:grid-cols-4 grid-cols-1"
                  >

                    {counterData.map((item, i) => (

                      <motion.div
                        key={i}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 50,
                          },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.7,
                              ease: [0.25, 1, 0.5, 1],
                            },
                          },
                        }}
                        whileHover={{
                          y: -8,
                          transition: {
                            duration: 0.3,
                          },
                        }}
                        className={`
                          relative flex items-center gap-4 px-6 py-6
                          rounded-2xl
                          transition-all duration-500
                          hover:bg-white/50
                          hover:shadow-[0_10px_35px_rgba(43,76,154,0.12)]
                          group
                          ${i !== counterData.length - 1
                            ? "md:border-r border-[#dbe7ff]"
                            : ""}
                        `}
                      >

                        {/* HOVER GLOW */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                        {/* ICON */}
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                          }}
                          className="
                            relative
                            w-16 h-16 rounded-2xl
                            bg-[#eef4ff]
                            border border-[#dbe7ff]
                            flex items-center justify-center
                            text-[#2b4c9a]
                            shadow-sm
                          "
                        >

                          {/* ICON INNER GLOW */}
                          <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                          {item.icon}

                        </motion.div>

                        {/* CONTENT */}
                        <div className="relative z-10">

                          {/* NUMBER */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: i * 0.15,
                              duration: 0.5,
                            }}
                            className="flex items-end gap-1 leading-none"
                          >

                            <span className="text-3xl md:text-4xl font-bold text-[#2b4c9a] tracking-tight">
                              {formatNumber(counts[i], item.suffix)}
                            </span>

                            <span className="text-2xl font-bold text-[#2b4c9a]">
                              {item.suffix}
                            </span>

                          </motion.div>

                          {/* LABEL */}
                          <p className="mt-1 text-sm text-[#5b6475] font-medium transition-all duration-300 group-hover:text-[#2b4c9a]">
                            {item.label}
                          </p>

                        </div>

                      </motion.div>

                    ))}

                  </motion.div>

                </div>

              </section>
        
              {/*  RECENT LIVE PROJECTS (PREMIUM LAYOUT) */}
              <section className="relative py-16 bg-[#EEF2FF] text-white overflow-hidden">

              {/*  BACKGROUND GLOW */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="max-w-6xl mx-auto px-6">

              {/* HEADER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >

                <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
                  Recent Work
                </p>

                <h2 className="text-4xl font-bold text-[#1a2e5e] mt-3">
                  Latest Completed <span className="text-[#2b4c9a]">Projects</span>
                </h2>

                <p className="text-[#5b6475] mt-4 max-w-2xl mx-auto">
                  We design and develop high-performance websites and marketing systems.
                </p>

              </motion.div>

              {/* 🔥 TABS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mb-12 flex-wrap"
              >

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

              </motion.div>


                {/* SLIDER WRAPPER */}
                <div className="relative">

                  {/* CUSTOM NAVIGATION */}
                  <div className="absolute inset-y-0 -left-6 -right-6 flex items-center justify-between z-30 pointer-events-none">

                    <button className="projects-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                      <ChevronLeft size={20} />

                    </button>

                    <button className="projects-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

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

                            <p className="text-[#5b6475] text-sm mt-2">
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

                            <p className="text-[#5b6475] text-sm mt-2">
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

                            <p className="text-[#5b6475] text-sm mt-2">
                              Conversion-focused modern website with branding & SEO.
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

                            <p className="text-[#5b6475] text-sm mt-2">
                              Conversion-focused modern website with branding & SEO.
                            </p>
                          </div>

                        </a>

                      </SwiperSlide>
                    )}

                  </Swiper>

                </div>
              </div>
              
              {/* BOTTOM BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative z-10"
              >

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-[#2b4c9a]/20 bg-[#2b4c9a] hover:bg-white hover:text-[#2b4c9a] transition-all duration-300 text-white font-semibold shadow-sm"
                >
                  View More Projects
                </a>

              </motion.div>
              </section>

              {/* Testimonial */}
              <Testimonials />

              {/* Trust section client logo */}
              <BrandMarquee />

              {/* contact */}
              <section className="relative py-12 sm:py-16 lg:py-16 px-4 sm:px-6 bg-[#EEF2FF] overflow-hidden">

                {/* 🌌 BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                  {/* LEFT GLOW */}
                  <motion.div
                    animate={{
                      x: [0, 30, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-40 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#2b4c9a]/20 blur-[120px] rounded-full"
                  />

                  {/* RIGHT GLOW */}
                  <motion.div
                    animate={{
                      x: [0, -20, 0],
                      y: [0, 30, 0],
                    }}
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#1a2e5e]/10 blur-[120px] rounded-full"
                  />

                  {/* GRID */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:34px_34px]"></div>

                  {/* CENTER LIGHT */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 blur-3xl rounded-full"
                  />

                </div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-7xl mx-auto bg-[#1a2e5e] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 rounded-2xl relative z-10 overflow-hidden"
                >

                  {/* INNER TOP LIGHT */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                  {/* GRID */}
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center lg:text-left"
                    >

                      <motion.p
                        whileHover={{ scale: 1.03 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-[#102347] border border-[#1f3d84] text-[#6ea8ff] text-[10px] sm:text-xs font-semibold uppercase"
                      >
                        Contact Us
                      </motion.p>

                      <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Let’s Build Something{" "}
                        <span className="text-[#6EA8FF] block sm:inline">
                          Amazing Together
                        </span>
                      </h2>

                      <p className="mt-5 text-[#B7C2D8] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Have a project in mind? Let’s create a premium digital experience
                        designed to generate real business growth.
                      </p>

                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className="relative w-full"
                    >

                      {/* FORM GLOW */}
                      <motion.div
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2b4c9a]/30 to-blue-500/20 blur-xl"
                      />

                      {/* FORM CARD */}
                      <motion.div
                        whileHover={{
                          y: -4,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="relative bg-[#EEF2FF] border border-white/10 rounded-2xl p-5 sm:p-7 lg:p-8 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden"
                      >

                        {/* SHINE EFFECT */}
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-1000 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-100%] hover:translate-x-[100%]"></div>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">

                          {/* INPUTS */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                            <motion.input
                              whileFocus={{
                                scale: 1.01,
                              }}
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              className="h-11 sm:h-12 px-4 rounded-lg bg-white border border-[#dbe4ff] focus:border-[#2b4c9a] outline-none text-[#1a2e5e] text-sm sm:text-base transition-all duration-300"
                              required
                            />

                            <motion.input
                              whileFocus={{
                                scale: 1.01,
                              }}
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Email Address"
                              className="h-11 sm:h-12 px-4 rounded-lg bg-white border border-[#dbe4ff] focus:border-[#2b4c9a] outline-none text-[#1a2e5e] text-sm sm:text-base transition-all duration-300"
                              required
                            />

                          </div>

                          {/* INPUTS */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                            <motion.input
                              whileFocus={{
                                scale: 1.01,
                              }}
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                              className="h-11 sm:h-12 px-4 rounded-lg bg-white border border-[#dbe4ff] focus:border-[#2b4c9a] outline-none text-[#1a2e5e] text-sm sm:text-base transition-all duration-300"
                              required
                            />

                            <motion.input
                              whileFocus={{
                                scale: 1.01,
                              }}
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              placeholder="Project Type"
                              className="h-11 sm:h-12 px-4 rounded-lg bg-white border border-[#dbe4ff] focus:border-[#2b4c9a] outline-none text-[#1a2e5e] text-sm sm:text-base transition-all duration-300"
                            />

                          </div>

                          {/* TEXTAREA */}
                          <motion.textarea
                            whileFocus={{
                              scale: 1.01,
                            }}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="w-full p-4 rounded-lg bg-white border border-[#dbe4ff] focus:border-[#2b4c9a] outline-none text-[#1a2e5e] resize-none text-sm sm:text-base transition-all duration-300"
                            required
                          />

                          {/* BUTTON */}
                          <motion.button
                            whileHover={{
                              scale: 1.02,
                              y: -2,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            type="submit"
                            disabled={loading}
                            className="w-full h-11 sm:h-12 cursor-pointer rounded-lg bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff] transition-all duration-300 font-semibold text-sm sm:text-base text-white shadow-lg"
                          >
                            {loading ? "Sending..." : "Send Message →"}
                          </motion.button>

                        </form>

                      </motion.div>

                    </motion.div>

                  </div>

                </motion.div>

              </section>

</main>
 
);
}

