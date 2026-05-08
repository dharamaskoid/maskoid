"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Testimonials from "@/components/Testimonials";
import BrandMarquee from "@/components/TrustSection";


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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
  const counterData = [
    { value: 120, suffix: "+", label: "Digital Growth Systems Built"},
    { value: 10, suffix: "+", label: "Years of Performance Marketing Experience"},
    { value: 300, suffix: "+", label: "High-Converting Campaigns Delivered"},
    { value: 98, suffix: "%", label: "Rating in your local City Network" },
  ];

  

  const formatNumber = (num, suffix) => {
  if (suffix === "K+" && num >= 1000) {
    return Math.floor(num / 1000);
  }
  return num;
};

  // ================= STATE =================
  const [counts, setCounts] = useState(counterData.map(() => 0));
  const [startCount, setStartCount] = useState(false);

  // ================= REF =================
 const sectionRef = useRef<HTMLDivElement | null>(null);

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
              <section className="relative min-h-[800px] md:min-h-[800px] flex items-center px-6 md:px-12 lg:px-24 py-16 md:py-0">

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
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    >
                      We Don’t Just Build Websites{" "}
                      <span className="text-blue-500">
                        We Build Growth Systems
                      </span>
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="mt-5 md:mt-6 text-gray-400 text-base md:text-lg"
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
                        className="px-6 py-3 rounded-lg cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600"
                      >
                        Book Strategy Call
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 rounded-lg border cursor-pointer border-gray-500 hover:bg-white hover:text-black transition"
                      >
                        View Work
                      </motion.button>

                    </motion.div>

                    {/* STATS */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-5 md:mt-6 text-sm text-gray-300"
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
                            className="relative z-10 drop-shadow-2xl w-full h-auto"
                          />
                        </motion.div>
                      </motion.div>

                      {/* FLOATING CARD */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-10 md:bottom-5 flex items-center gap-3 bg-white backdrop-blur-lg rounded-xl md:rounded-2xl border border-white/20 p-3 md:p-4 shadow-lg"
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
                            <span className="text-black font-semibold">4.7</span>
                            <span className="text-gray-500">(107 Reviews)</span>
                          </div>
                        </div>

                      </motion.div>

                    </div>

                  </div>

                </div>
              </section>

              {/* SLIDING TEXT SECTION */}
              <section className="relative overflow-hidden py-12 bg-[#0B0F1A] border-t border-white/10">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0B0F1A] to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10"></div>

              <div className="whitespace-nowrap animate-marquee gap-16 text-2xl md:text-4xl font-semibold text-white/80">

                  {[
                      "Strategy",
                      "Design",
                      "Development",
                      "Marketing",
                      "Growth",
                      "Performance"
                  ]
                    .concat([
                      "Strategy",
                      "Design",
                      "Development",
                      "Marketing",
                      "Growth",
                      "Performance"
                      ])
                    .map((item, i) => (
                      <div key={i} className="flex items-center gap-6 hover:text-white transition">

                        <span>{item}</span>

                        {/* DOT */}
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>

                      </div>
                    ))}

                </div>
              </section>

              {/* About US section*/}
              <section className="py-24 bg-[#0B0F1A] text-white">

                  <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT IMAGE STACK (UPGRADED PREMIUM LAYOUT) */}
                    <div className="relative">

                      {/* Background Glow */}
                      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

                      <div className="relative grid grid-cols-2 gap-4">

                        

                        {/* Small Left Image */}
                        <img
                          src="/images/about2.jpg"
                          className="h-40 w-full object-cover rounded-2xl shadow-lg hover:scale-[1.03] transition"
                        />

                        {/* Small Right Image */}
                        <img
                          src="/images/about3.jpg"
                          className="h-40 w-full object-cover rounded-2xl shadow-lg hover:scale-[1.03] transition"
                        />

                        {/* Large Image */}
                        <img
                          src="/images/about1.jpg"
                          className="col-span-2 h-72 w-full object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition"
                        />

                      </div>

                      {/* Floating Badge 
                      <div className="absolute -bottom-6 -right-6 bg-white text-black px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
                        🚀 10+ Years Experience
                      </div>
                        */}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                      <span className="text-blue-400 text-sm font-medium">
                        About Us
                      </span>

                      <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                        Crafting Digital Experiences That Drive{" "}
                        <span className="text-blue-500">Growth & Revenue</span>
                      </h2>

                      <p className="text-gray-400 mt-6 text-lg">
                        We help businesses build powerful digital systems — websites, SEO, and marketing strategies that turn visitors into paying customers.
                      </p>

                      {/* POINTS */}
                      <ul className="mt-8 space-y-3 text-gray-300">

                        <li>✔ High-converting website design</li>
                        <li>✔ SEO & lead generation systems</li>
                        <li>✔ Performance-focused marketing</li>
                        <li>✔ Fast delivery & proven ROI</li>

                      </ul>

                      {/* CTA */}
                      <div className="mt-8 flex gap-4">

                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer rounded-lg hover:scale-105 transition">
                          Work With Us
                        </button>

                        <button className="px-6 py-3 border border-white/20  cursor-pointer rounded-lg hover:bg-white hover:text-black transition">
                          View Case Studies
                        </button>

                      </div>

                    </div>

                  </div>

              </section>

              {/* ================= Service SECTION ================= */}
                <motion.section
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={stagger}
                      className="relative py-24 pb-40 bg-[#EEF2FF] text-black overflow-hidden"
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
                          className="grid md:grid-cols-2 gap-16 items-end"
                        >

                          {/* LEFT - TITLE */}
                          <div>
                            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
                              Services
                            </p>

                            <h2 className="text-4xl md:text-3xl font-bold mt-3 leading-tight">
                              We Build Digital Systems That <br />
                              <span className="text-blue-600">Generate Growth & Revenue</span>
                            </h2>
                          </div>

                          {/* RIGHT - DESCRIPTION */}
                          <div className="text-gray-600">
                            We help businesses grow using websites, SEO, ads, and performance marketing
                            strategies designed to convert visitors into customers.
                          </div>

                        </motion.div>


                        {/* ROW 2 - IMAGES LEFT + SERVICES RIGHT */}
                        <motion.div
                          variants={fadeUp}
                          className="grid md:grid-cols-2 gap-16 items-center mt-20"
                        >

                          {/* LEFT SIDE - IMAGES */}
                          <motion.div
                            
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="relative flex justify-center h-[450px]"
                          >

                            {/* IMAGE 1 - TOP RIGHT (BACK) */}
                            <motion.div
                              whileHover={{ scale: 1.05, rotate: 2 }}
                              className="absolute top-0 right-0 w-80 h-60 rounded-2xl overflow-hidden shadow-xl z-0"
                            >
                              <Image
                                src="/images/seo.jpg"
                                alt="service"
                                fill
                                className="object-cover"
                              />
                            </motion.div>

                            {/* IMAGE 2 - BOTTOM LEFT (FRONT) */}
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="absolute bottom-0 left-0 w-90 h-[280px] rounded-2xl overflow-hidden shadow-2xl z-10"
                            >
                              <Image
                                src="/images/web-design.jpg"
                                alt="service"
                                fill
                                className="object-cover"
                              />
                            </motion.div>
                            {/* BADGE */} 
                            <div className="absolute bottom-2 right-0 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 z-11">
                              🚀 <span className="font-semibold">ROI Driven Growth</span> 
                              </div>

                          </motion.div>


                          {/* RIGHT SIDE - SERVICES */}
                          <motion.div variants={stagger} className="mt-2 space-y-6">

                            {[
                              {
                                num: "01",
                                title: "Social Media Marketing",
                                desc: "Grow your brand with targeted social media campaigns.",
                                img: "/images/social-media.jpg",
                                link: "/services/social-media-marketing",
                              },
                              {
                                num: "02",
                                title: "SEO Optimization",
                                desc: "Rank higher on Google and get organic traffic daily.",
                                img: "/images/seo.jpg",
                                link: "/services/seo",
                              },
                              {
                                num: "03",
                                title: "PPC Advertising",
                                desc: "High-converting ads that bring instant leads & sales.",
                                img: "/images/ppc.jpg",
                                link: "/services/social-media-marketing",
                              },
                              {
                                num: "04",
                                title: "Web Design",
                                desc: "Modern, clean and conversion-focused UI/UX designs.",
                                img: "/images/web-design.jpg",
                                link: "/services/web-design",
                              },
                              {
                                num: "05",
                                title: "Web Development",
                                desc: "Fast, scalable and SEO-friendly website development.",
                                img: "/images/web-dev.jpg",
                                link: "/services/web-development",
                              },
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ x: 10 }}
                                className="flex gap-6 items-start group cursor-pointer"
                              >

                                {/* NUMBER */}
                                <div className="text-blue-600 font-bold w-10">
                                  {item.num}
                                </div>

                                {/* LINE */}
                                <div className="w-px h-10 bg-gray-300 group-hover:bg-blue-500 transition" />

                                {/* CONTENT */}
                                <div>
                                  <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-500 text-sm mt-1">
                                    {item.desc}
                                  </p>
                                </div>
                              
                                {/* 🔥 IMAGE + BUTTON SIDE BY SIDE */}
                                <div className="absolute left-full top-0 flex items-center gap-3 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition duration-300 z-50">

                                  <div className="relative w-52 h-36 rounded-xl overflow-hidden bg-transparent">

                                    {/* WIPE REVEAL IMAGE */}
                                    <div className="absolute inset-0 
                                      [clip-path:inset(0_100%_0_0)] 
                                      group-hover:[clip-path:inset(0_0%_0_0)] 
                                      transition-all duration-1200 ease-in-out">

                                      <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                      />

                                    </div>

                                  </div>

                                  {/* 🔥 BUTTON ON RIGHT */}
                                  <a
                                  href={item.link}
                                  className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition"
                                >
                                  ➜
                                </a>

                                </div>

                              </motion.div>
                            ))}

                          </motion.div>

                        </motion.div>

                      </div>
                </motion.section>


              {/* ================= COUNTER SECTION ================= */}
              <section
                  ref={sectionRef}
                  className="relative py-12 bg-[#0B0F1A] text-white overflow-hidden z-20"
                >

                {/* 🌌 MOVING BACKGROUND ELEMENTS */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

                  {/* BIG BLUE DRIFT */}
                  <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-drift1"></div>

                  {/* PURPLE DRIFT */}
                  <div className="absolute w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-drift2"></div>

                  {/* CYAN SMALL ORBIT */}
                  <div className="absolute w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-2xl animate-drift3"></div>

                  {/* DOT GRID MOTION */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#3b82f6_1px,transparent_1px)] [background-size:40px_40px] animate-gridMove"></div>

                </div>

                <div className="max-w-6xl mx-auto px-6">

                  <div className="grid md:grid-cols-4 grid-cols-2 gap-10">

                    {counterData.map((item, i) => (
                      <div
                        key={i}
                        className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-blue-500 transition"
                      >

                        {/* 🔥 TOP ICON */}
                        <div className="text-3xl mb-4 opacity-80 group-hover:scale-110 transition">
                          {item.icon}
                        </div>

                        {/* 🔥 NUMBER */}
                        <div className="text-6xl font-bold tracking-tight flex items-center justify-center items-end gap-1">
                          <span>
                            {formatNumber(counts[i], item.suffix)}
                          </span>
                          <span className="text-6xl text-white-400 text-center">
                            {item.suffix}
                          </span>
                        </div>

                        {/* 🔥 LABEL */}
                        <p className="text-sm text-gray-400 mt-3 uppercase tracking-wide text-center">
                          {item.label}
                        </p>

                        {/* 🔥 PROGRESS LINE */}
                        <div className="absolute left-0 bottom-0 h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-700"></div>

                        {/* 🔥 GLOW EFFECT */}
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition"></div>

                      </div>
                    ))}

                  </div>

                </div>
              </section>
        
              {/* 🚀 RECENT LIVE PROJECTS (PREMIUM LAYOUT) */}
              <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">

              {/* 🌊 BACKGROUND GLOW */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
              </div>

              <div className="max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="text-center mb-10">
                  <p className="text-blue-400 uppercase tracking-widest text-sm">
                    Recent Work
                  </p>

                  <h2 className="text-4xl font-bold mt-3">
                    Latest Completed <span className="text-blue-500">Projects</span>
                  </h2>

                  <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    We design and develop high-performance websites and marketing systems.
                  </p>
                </div>

                {/* 🔥 TABS */}
                <div className="flex justify-center gap-4 mb-12">
                  {["all", "web", "seo"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-5 py-2 rounded-lg hover:cursor-pointer text-sm border transition ${
                        activeTab === tab
                          ? "bg-blue-600 text-white border-blue-500"
                          : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-8">

                  {/* ================= CATER SPOON ================= */}
                  {(activeTab === "all" || activeTab === "web") && (
                    <a
                      href="https://caterspoonmumbai.com/"
                      target="_blank"
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
                        <h3 className="text-xl font-semibold">Cater Spoon Mumbai</h3>
                        <p className="text-gray-400 text-sm mt-2">
                          Luxury catering website with premium UI & SEO system.
                        </p>
                      </div>
                    </a>
                  )}

                  {/* ================= PAKHTOONS ================= */}
                  {(activeTab === "all" || activeTab === "seo") && (
                    <a
                      href="https://pakhtoons.development-site.maskoid.net/"
                      target="_blank"
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
                        <h3 className="text-xl font-semibold">Pakhtoons</h3>
                        <p className="text-gray-400 text-sm mt-2">
                          SEO optimized business website with performance focus.
                        </p>
                      </div>
                    </a>
                  )}

                  {/* ================= VAYORAA ================= */}
                  {(activeTab === "all" || activeTab === "web") && (
                    <a
                      href="https://vayoraa.in/"
                      target="_blank"
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
                        <h3 className="text-xl font-semibold">Vayoraa</h3>
                        <p className="text-gray-400 text-sm mt-2">
                          Conversion-focused modern website with branding & SEO.
                        </p>
                      </div>
                    </a>
                  )}

                </div>
              </div>
              <div className="text-center mt-14">

                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 border border-white/10 text-white hover:bg-white/10 transition duration-300"
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
              <section className="relative py-28 bg-[#0B0F1A] text-white overflow-hidden">

                {/* 🌊 BACKGROUND GLOW (same as projects section) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
                  <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6">

                  {/* HEADER (same style as projects) */}
                  <div className="text-center mb-14">

                    <p className="text-blue-400 uppercase tracking-widest text-sm">
                      Contact Us
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                      Let’s Build Something <span className="text-blue-500">Amazing</span>
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                      Have a project in mind? Let’s discuss and turn your idea into a high-performing digital product.
                    </p>

                  </div>

                  {/* GRID (same structure style as projects) */}
                  <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE CARD (same mockup style feel) */}
                    <div className="relative">

                      <div className="relative h-[420px] flex items-center justify-center">

                        

                        <img
                          src="/images/contact-main.jpg"
                          className="absolute z-20 top-0 left-0 w-90 h-[300px] object-cover object-top rounded-xl shadow-2xl border border-white/10"
                        />

                        <img
                          src="/images/contact-2.png"
                          className="absolute right-0 top-60 w-70 h-[200px] object-cover object-top rounded-xl shadow-2xl border border-white/10 opacity-80 z-30"
                        />

                      </div>

                    </div>

                    {/* RIGHT FORM CARD (matches project card style) */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-lg">

                      <form onSubmit={handleSubmit} className="space-y-4">

                        <div className="grid grid-cols-2 gap-4">

                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name*"
                            className="p-3 rounded-lg bg-black/30 border border-white/10 w-full focus:outline-none focus:border-blue-500"
                            required
                          />

                          <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="p-3 rounded-lg bg-black/30 border border-white/10 w-full focus:outline-none focus:border-blue-500"
                            required
                          />

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone*"
                            className="p-3 rounded-lg bg-black/30 border border-white/10 w-full focus:outline-none focus:border-blue-500"
                            required
                          />

                          <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="p-3 rounded-lg bg-black/30 border border-white/10 w-full focus:outline-none focus:border-blue-500"
                          />

                        </div>

                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows="5"
                          placeholder="Write your message..."
                          className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-blue-500"
                          required
                        />

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer hover:bg-blue-700 transition text-white font-medium"
                        >
                          {loading ? "Sending..." : "Send Message →"}
                        </button>

                      </form>

                    </div>

                  </div>

                </div>
              </section>

    </main>
  );
}

