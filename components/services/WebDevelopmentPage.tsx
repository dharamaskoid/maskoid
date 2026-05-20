"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import {
  ArrowRight,
  Globe,
  MonitorSmartphone,
  Search,
  ShoppingCart,
  Layers3,
  ShieldCheck,
  Rocket,
  Code2,
  PenTool,
  Database,
  Waypoints,
  Atom,
  Server, 
  Award, 
  Terminal,
  Layers,
} from "lucide-react";



const solutions = [
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Custom Websites",
    text: "Tailored websites designed to reflect your brand and engage your audience.",
  },
  {
    icon: <ShoppingCart size={34} />,
    title: "E-Commerce",
    text: "Powerful online stores that drive sales and customer satisfaction.",
  },
  {
    icon: <Layers3 size={34} />,
    title: "Web Applications",
    text: "Scalable web applications that streamline processes and boost productivity.",
  },
  {
    icon: <Database size={34} />,
    title: "CMS Solutions",
    text: "Easy-to-manage CMS websites that give you full control.",
  },
  {
    icon: <Waypoints size={34} />,
    title: "API Development",
    text: "Secure and reliable APIs to connect your systems seamlessly.",
  },
];

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
const solutionsList = [
  {
    icon: <Globe size={20} />,
    title: "Custom Websites",
    desc: "Tailored websites designed to reflect your brand and engage your audience.",
    img: "/images/web-ui-1.jpg"
  },
  {
    icon: <ShoppingCart size={20} />,
    title: "E-Commerce",
    desc: "Powerful online stores that drive sales and customer satisfaction.",
    img: "/images/web-ui-2.jpg"
  },
  {
    icon: <Layers size={20} />,
    title: "Web Applications",
    desc: "Scalable web applications that streamline processes and boost productivity.",
    img: "/images/web-ui-3.jpg"
  },
  {
    icon: <Code2 size={20} />,
    title: "API Development",
    desc: "Secure and reliable APIs to connect your systems seamlessly.",
    img: "/images/web-ui-4.jpg"
  },
  {
    icon: <Server size={20} />,
    title: "CMS Solutions",
    desc: "Easy-to-manage CMS websites that give you full control.",
    img: "/images/web-ui-5.jpg"
  }
];

export default function WebDevelopmentPage() {


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

        {/* BACKGROUND */}
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
                Web Development Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Premium Websites That
                <span className="block text-[#6EA8FF]">
                  Drive Growth
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We build modern high-converting websites focused on SEO, performance, premium UI/UX, and long-term business growth.
              </p>



            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative"
            >

              {/* GLOW */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2b4c9a]/30 to-blue-500/10 blur-3xl rounded-[40px]"></div>

              {/* IMAGE */}
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
                alt="Contact"
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
      
      {/* OUR SERVICES */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">

          {/* BG LIGHT */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

          <div className="container mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* LEFT */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <p className="inline-flex px-5 py-2 rounded-full bg-[#EEF4FF] border border-[#dbe7ff] text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Services
                </p>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#071739] leading-tight">
                  Creative Solutions
                  <span className="block text-[#3B82F6]">
                    For Modern Brands
                  </span>
                </h2>

                <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
                  We create fast, scalable, and result-driven digital
                  experiences for modern businesses.
                </p>

                {/* PLANT IMAGE */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-16"
                >

                  <img
                    src="/images/plant.png"
                    alt="Plant"
                    className="w-[220px] object-contain"
                  />

                </motion.div>

              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative"
              >

                {/* CENTER CARD */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative z-20 mx-auto w-[280px] md:w-[320px] rounded-[38px] overflow-hidden bg-[#0B1D51] border border-white/10 shadow-[0_30px_80px_rgba(43,76,154,0.25)]"
                >

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_70%)]"></div>

                  <div className="relative z-10 p-10">

                    <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                      <Code2 size={34} />
                    </div>

                    <h3 className="mt-8 text-3xl font-bold text-white leading-snug">
                      Custom
                      <span className="block">
                        Development
                      </span>
                    </h3>

                    <p className="mt-5 text-[#B7C2D8] leading-relaxed">
                      Tailored solutions built with modern technologies for unique business needs.
                    </p>

                  </div>

                </motion.div>

                {/* FLOATING CARDS */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute top-0 right-0 rotate-[10deg]"
                >

                  <div className="w-[220px] rounded-[32px] bg-white border border-[#dbe7ff] p-8 shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                      <ShoppingCart size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#071739]">
                      E-Commerce
                    </h3>

                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                      Powerful online stores that drive sales and customer engagement.
                    </p>

                  </div>

                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-0 left-0 -rotate-[10deg]"
                >

                  <div className="w-[220px] rounded-[32px] bg-white border border-[#dbe7ff] p-8 shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                      <Globe size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#071739]">
                      Business
                      Websites
                    </h3>

                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                      Modern websites tailored for your business growth and branding.
                    </p>

                  </div>

                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-10 right-0 rotate-[8deg]"
                >

                  <div className="w-[220px] rounded-[32px] bg-white border border-[#dbe7ff] p-8 shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                      <Rocket size={28} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-[#071739]">
                      Performance
                      Focused
                    </h3>

                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                      Optimized digital products focused on speed and conversions.
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            </div>

          </div>

        </section>

        <section className="relative w-full min-h-[950px] lg:min-h-[850px] bg-[#060311] text-white overflow-hidden py-24 px-6 md:px-16 font-sans flex items-center">
      
          {/* Background Orbits & Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-12 left-1/3 w-3 h-3 border-l border-b border-indigo-500/30 rotate-45"></div>
            <div className="absolute bottom-16 left-1/2 w-4 h-4 border-t border-r border-purple-500/20 -rotate-12"></div>
            
            {/* Large Decorative Dotted Background Loop Trace */}
            <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-dashed border-indigo-500/10 rounded-full hidden xl:block"></div>
            
            {/* Dynamic Light Blurs */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#1d0e4e]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#281156]/15 blur-[130px] rounded-full"></div>
          </div>

          <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* LEFT COLUMN: Typography Content */}
            <div className="lg:col-span-4 flex flex-col space-y-5 text-left w-full self-center">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-indigo-400 bg-indigo-950/40 border border-indigo-900/30 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm">
                Our Services
              </span>
              <h2 className="text-4xl md:text-[46px] font-bold tracking-tight text-slate-100 leading-[1.2]">
                Creative Solutions <br />
                For <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400">Modern Brands</span>
              </h2>
              <div className="relative pb-6 max-w-sm">
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  We create fast, scalable, and result-driven websites tailored to your business needs.
                </p>
                {/* Custom Painted Neon Splash Underline Effect */}
                <div className="absolute bottom-0 left-0 w-44 h-[3px] bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent opacity-80 blur-[0.5px] rounded-full"></div>
              </div>
            </div>

            {/* RIGHT COLUMN: Precise Interlocking Hex-Asymmetric Cluster Layout */}
            <div className="lg:col-span-8 relative w-full h-[700px] lg:h-[650px] mt-12 lg:mt-0 flex flex-wrap lg:block justify-center gap-6">
              
              {/* Universal Asymmetrical 6-Sided Polygon Shape applied to replicate the image layout exactly */}
              <style dangerouslySetInnerHTML={{__html: `
                .geometric-hex-card {
                  clip-path: polygon(15% 0%, 85% 2%, 100% 75%, 75% 100%, 0% 88%, 5% 18%);
                }
                .hero-hex-card {
                  clip-path: polygon(12% 0%, 88% 5%, 100% 80%, 72% 100%, 0% 85%, 6% 12%);
                }
              `}} />

              {/* CARD 1: Business Websites (Bottom Left Position) */}
              <div className="geometric-hex-card bg-white text-slate-800 p-6 pt-8 w-[215px] h-[235px] flex flex-col justify-start lg:absolute lg:top-[310px] lg:left-[0px] z-10 shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100/50">
                  <Globe size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-bold text-[#071739] tracking-tight mb-2">Business Websites</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-normal">Professional websites that represent your brand perfectly.</p>
              </div>

              {/* CARD 2: Custom Development (Large Deep Gradient Feature Center Card) */}
              <div className="hero-hex-card bg-gradient-to-br from-[#231254] via-[#0f0831] to-[#060316] border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.22)] p-8 pt-10 w-[310px] h-[350px] flex flex-col justify-between group cursor-pointer lg:absolute lg:top-[70px] lg:left-[170px] z-30 transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <div className="text-indigo-400 mb-6 font-mono text-2xl font-bold opacity-90">&lt;/&gt;</div>
                  <h3 className="text-xl font-bold text-slate-100 leading-snug mb-3">Custom<br />Development</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light pr-2">Tailored solutions built with modern technologies for unique business needs.</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-700 group-hover:border-indigo-400 text-slate-500 group-hover:text-indigo-300 flex items-center justify-center transition-colors self-start mt-4">
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* CARD 3: E-Commerce (Top Center Stacked Right Above Hero) */}
              <div className="geometric-hex-card bg-white text-slate-800 p-6 pt-8 w-[215px] h-[235px] flex flex-col justify-start lg:absolute lg:top-[-45px] lg:left-[430px] z-10 shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100/50">
                  <ShoppingCart size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-bold text-[#071739] tracking-tight mb-2">E-Commerce</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-normal">Powerful online stores that drive sales and customer satisfaction.</p>
              </div>

              {/* CARD 4: SEO Optimized (Bottom Center Layout Tucked Right Under Hero) */}
              <div className="geometric-hex-card bg-white text-slate-800 p-6 pt-8 w-[215px] h-[235px] flex flex-col justify-start lg:absolute lg:top-[380px] lg:left-[360px] z-20 shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100/50">
                  <Search size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-bold text-[#071739] tracking-tight mb-2">SEO Optimized</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-normal">Built with best SEO practices to rank higher on search.</p>
              </div>

              {/* CARD 5: Performance Focused (Bottom Right Position Corner) */}
              <div className="geometric-hex-card bg-white text-slate-800 p-6 pt-8 w-[215px] h-[235px] flex flex-col justify-start lg:absolute lg:top-[320px] lg:left-[615px] z-10 shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100/50">
                  <Rocket size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-bold text-[#071739] tracking-tight mb-2">Performance Focused</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-normal">Lightning-fast websites optimized for speed and performance.</p>
              </div>

              {/* CARD 6: Responsive Design (Far Right Upper Hanging Position) */}
              <div className="geometric-hex-card bg-white text-slate-800 p-6 pt-8 w-[215px] h-[235px] flex flex-col justify-start lg:absolute lg:top-[45px] lg:left-[675px] z-10 shadow-[0_25px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100/50">
                  <MonitorSmartphone size={20} strokeWidth={2.5} />
                </div>
                <h4 className="text-sm font-bold text-[#071739] tracking-tight mb-2">Responsive Design</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-normal">Seamless experiences across all devices and screen sizes.</p>
              </div>

            </div>
          </div>
        </section>

      {/* OUR SOLUTIONS */}
        <section className="relative overflow-hidden bg-[#F8FAFF] py-16 md:py-20">

          <div className="container mx-auto px-6 relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
              >

                <p className="inline-flex px-5 py-2 rounded-full bg-white border border-[#dbe7ff] text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Solutions
                </p>

                <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#071739] leading-tight">
                  Digital Solutions That
                  <span className="block text-[#3B82F6]">
                    Create Real Impact
                  </span>
                </h2>

                <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl">
                  We combine creativity with technology to build
                  scalable and future-ready solutions.
                </p>

                <motion.img
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  src="/images/monitor.png"
                  alt="Monitor"
                  className="mt-16 w-full max-w-[420px]"
                />

              </motion.div>

              {/* RIGHT */}
              <div className="space-y-5">

                {[
                  {
                    icon: <Globe size={24} />,
                    title: "Custom Websites",
                    text: "Premium websites optimized for user experience.",
                    image: "/images/ui-1.jpg",
                  },
                  {
                    icon: <ShoppingCart size={24} />,
                    title: "E-Commerce",
                    text: "Scalable online stores for modern brands.",
                    image: "/images/ui-2.jpg",
                  },
                  {
                    icon: <Code2 size={24} />,
                    title: "Web Applications",
                    text: "Advanced web apps with scalable architecture.",
                    image: "/images/ui-3.jpg",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group bg-white rounded-[28px] border border-[#dbe7ff] p-5 flex items-center gap-5 shadow-[0_20px_60px_rgba(43,76,154,0.06)]"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-[#071739]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                        {item.text}
                      </p>

                    </div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="hidden md:block w-[120px] rounded-2xl border border-[#dbe7ff]"
                    />

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>

      {/*demo for solution */}  
      <section className="relative w-full bg-[#FAFAFC] py-20 px-6 md:px-16 font-sans overflow-hidden">
      
        {/* Hand-drawn Purple Loop Arrow Indicator Decoration */}
        <div className="absolute left-[38%] bottom-[12%] z-0 pointer-events-none opacity-80 hidden lg:block">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://w3.org">
            <path d="M2,45 C40,-10 70,80 50,75 C30,70 45,20 110,40 M95,25 L112,42 L90,55" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 1" />
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: Main Typography & Desktop Monitor Asset */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left w-full">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#3B82F6] bg-white border border-[#E4E9F7] px-4 py-1.5 rounded-full w-fit shadow-sm">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-[45px] font-bold tracking-tight text-[#071739] leading-[1.15]">
              Digital Solutions That <br />
              <span className="text-[#3B82F6]">Create Real Impact</span>
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-md font-light leading-relaxed">
              We combine creativity with technology to deliver solutions that are fast, scalable, secure, and built to perform.
            </p>
            
            {/* Main Desktop Monitor Showcase Device Asset */}
            <div className="pt-8 w-full max-w-[480px]">
              <img 
                src="/images/hero-monitor.png" 
                alt="Digital Solution Mockup Showcase Viewport" 
                className="w-full h-auto drop-shadow-[0_30px_50px_rgba(7,23,57,0.12)]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Skewed Service List Cards */}
          <div className="lg:col-span-7 w-full flex flex-col space-y-4">
            {solutionsList.map((item, index) => (
              <div 
                key={index}
                style={{ clipPath: 'polygon(0% 0%, 96% 0%, 100% 100%, 4% 100%)' }}
                className="group bg-white border-y border-[#EAEFFB] hover:border-blue-500/30 transition-all duration-300 py-3.5 pl-10 pr-8 flex items-center justify-between gap-6 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(59,130,246,0.06)] cursor-pointer"
              >
                {/* Left Details block */}
                <div className="flex items-center gap-5 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F4FF] text-[#3B82F6] flex items-center justify-center shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <div className="max-w-xs md:max-w-sm">
                    <h3 className="text-base font-bold text-[#071739] mb-0.5 tracking-tight">{item.title}</h3>
                    <p className="text-[11px] text-gray-400 font-light leading-normal">{item.desc}</p>
                  </div>
                </div>

                {/* Right Interface Snapshot Image Frame & Action Trigger */}
                <div className="flex items-center gap-6 shrink-0">
                  <div className="hidden sm:block w-32 h-16 rounded-lg overflow-hidden border border-slate-100 shadow-sm relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#3B82F6] text-slate-400 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/*why choose us demo */}
      <section className="relative w-full bg-[#03010A] text-white overflow-hidden py-24 px-6 md:px-16 font-sans flex items-center">
      
      {/* BACKGROUND DECORATIVE GLOWS & PURPLE VECTOR SWIRL TRAIL */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Curved neon purple background line tracing behind the cards */}
        <svg className="absolute bottom-[20%] left-[-5%] w-[110%] h-[350px] opacity-60 hidden md:block" viewBox="0 0 1200 350" fill="none" xmlns="http://w3.org">
          <path 
            d="M-50,280 C250,220 400,340 700,160 C900,40 1000,180 1250,50" 
            stroke="#6366F1" 
            strokeWidth="1.5" 
            opacity="0.35" 
            strokeDasharray="5 5" 
          />
          <path 
            d="M-20,250 C280,180 430,310 730,130 C930,10 1030,150 1280,20" 
            stroke="#A855F7" 
            strokeWidth="1" 
            opacity="0.25" 
          />
        </svg>

        {/* Ambient background blur blobs mimicking the design lighting */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[130px] rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-[450px] h-[450px] bg-purple-900/15 blur-[120px] rounded-full"></div>
        
        {/* Subtle mesh background grid details visible on the right */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 [mask-image:radial-gradient(ellipse_at_bottom_right,white,transparent)]"></div>
      </div>

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        
        {/* LEFT COLUMN: Summary Content Block */}
        <div className="lg:col-span-4 flex flex-col space-y-6 text-left w-full">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-indigo-400 bg-indigo-950/40 border border-indigo-900/30 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Why Choose Us
          </span>
          
          <h2 className="text-4xl md:text-[44px] font-bold tracking-tight text-slate-100 leading-[1.2]">
            We Build Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">That Work For You</span>
          </h2>
          
          <p className="text-sm text-slate-400 max-w-sm font-light leading-relaxed">
            We follow industry best practices and use modern technologies to build websites that are not only beautiful but also high-performing.
          </p>
          
          <div className="pt-4">
            <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-white font-medium text-xs tracking-wide px-6 py-4 rounded-xl shadow-[0_12px_30px_rgba(79,70,229,0.3)]">
              Let's Work Together
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: 3 SKEWED PARALLEL STAT CARDS */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6 lg:pt-0">
          
          {/* Style rule to generate matching sharp asymmetrical trapezoid shapes on desktop viewports */}
          <style dangerouslySetInnerHTML={{__html: `
            .skewed-parallel-card {
              clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
            }
            @media (max-width: 768px) {
              .skewed-parallel-card { 
                clip-path: none !important; 
                border-radius: 24px; 
              }
            }
          `}} />

          {/* CARD 1: Client Satisfaction */}
          <div className="skewed-parallel-card bg-gradient-to-b from-[#110C2A]/90 to-[#070414]/95 backdrop-blur-md border border-slate-800/60 hover:border-indigo-500/40 transition-all duration-300 p-8 pl-12 pt-14 min-h-[320px] flex flex-col justify-start text-left group shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-default hover:scale-[1.01]">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-6 shadow-inner group-hover:text-indigo-300 transition-colors">
              <Layers size={19} />
            </div>
            <h3 className="text-4xl md:text-[42px] font-extrabold text-slate-100 tracking-tight mb-1">98%</h3>
            <h4 className="text-[11px] font-bold text-slate-300 tracking-wider uppercase mb-3">Client Satisfaction</h4>
            <p className="text-[11px] md:text-xs text-slate-400 font-light leading-relaxed pr-2">We focus on delivering results that exceed expectations.</p>
          </div>

          {/* CARD 2: Projects Delivered */}
          <div className="skewed-parallel-card bg-gradient-to-b from-[#110C2A]/90 to-[#070414]/95 backdrop-blur-md border border-slate-800/60 hover:border-indigo-500/40 transition-all duration-300 p-8 pl-12 pt-14 min-h-[320px] flex flex-col justify-start text-left group shadow-[0_30px_60px_rgba(0,0,0,0.6)] cursor-default hover:scale-[1.01]">
            <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-6 shadow-inner group-hover:text-indigo-300 transition-colors">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-4xl md:text-[42px] font-extrabold text-slate-100 tracking-tight mb-1">120+</h3>
            <h4 className="text-[11px] font-bold text-slate-300 tracking-wider uppercase mb-3">Projects Delivered</h4>
            <p className="text-[11px] md:text-xs text-slate-400 font-light leading-relaxed pr-2">Successfully completed projects across various industries.</p>
          </div>

          {/* CARD 3: Years Experience (Includes Purple Star Flare asset) */}
          <div className="skewed-parallel-card bg-gradient-to-b from-[#110C2A]/90 to-[#070414]/95 backdrop-blur-md border border-slate-800/60 hover:border-indigo-500/40 transition-all duration-300 p-8 pl-12 pt-14 min-h-[320px] flex flex-col justify-start text-left group shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative cursor-default hover:scale-[1.01]">
            
            {/* Bright Purple Glowing Lens Flare Star in Top Right */}
            <div className="absolute top-4 right-5 text-purple-400 opacity-95 animate-pulse hidden md:block pointer-events-none">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
                <path 
                  d="M12,0 L14.5,9.5 L24,12 L14.5,14.5 L12,24 L9.5,14.5 L0,12 L9.5,9.5 Z" 
                  fill="currentColor" 
                  className="drop-shadow-[0_0_10px_#A855F7] filter brightness-125" 
                />
              </svg>
            </div>

            <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 flex items-center justify-center mb-6 shadow-inner group-hover:text-indigo-300 transition-colors">
              <Code2 size={19} />
            </div>
            <h3 className="text-4xl md:text-[42px] font-extrabold text-slate-100 tracking-tight mb-1">10+</h3>
            <h4 className="text-[11px] font-bold text-slate-300 tracking-wider uppercase mb-3">Years Experience</h4>
            <p className="text-[11px] md:text-xs text-slate-400 font-light leading-relaxed pr-2">Delivering high-quality digital solutions with proven expertise.</p>
          </div>

        </div>

      </div>
    </section>

      {/* WHY CHOOSE US */}
        <section className="relative overflow-hidden bg-[#071739] py-16 md:py-20">

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

          <div className="container mx-auto px-6 relative z-10">

            {/* HEADER */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center max-w-3xl mx-auto"
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em]">
                Why Choose Us
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                We Build Websites
                <span className="block text-[#6EA8FF]">
                  That Work For You
                </span>
              </h2>

            </motion.div>

            {/* STATS */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">

              {[
                {
                  icon: <Layers3 size={32} />,
                  value: "98%",
                  label: "Client Satisfaction",
                },
                {
                  icon: <ShieldCheck size={32} />,
                  value: "120+",
                  label: "Projects Delivered",
                },
                {
                  icon: <Code2 size={32} />,
                  value: "10+",
                  label: "Modern Technologies",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[34px] bg-white/5 border border-white/10 backdrop-blur-xl p-10"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

                  </div>

                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-white/10 text-[#6EA8FF] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="mt-8 text-5xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className="mt-4 text-[#B7C2D8] text-lg">
                      {item.label}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

      {/* OUR PROCESS */}
      <section className="relative w-full bg-[#F8FAFF] py-16 px-6 md:px-16 overflow-hidden font-sans">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

        {/* GRID PATTERN */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT COLUMN: Content */}
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
              Our Process
            </motion.p>

            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              A Simple Process To <br />
              Deliver
              <span className="text-[#2b4c9a]"> Exceptional Results</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Our proven process ensures your project is delivered on time,
              on budget, and exceeds expectations.
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
                title: "Discovery & Planning",
                text: "We understand your goals, audience, and requirements to create a solid plan.",
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
                title: "Design & Prototyping",
                text: "We design intuitive UI/UX prototypes that align with your brand and users.",
              },
              {
                step: "03",
                icon: <Code2 size={30} strokeWidth={2.5} />,
                title: "Development",
                text: "Our developers build scalable, secure, and high-performance solutions.",
              },
              {
                step: "04",
                icon: <Rocket size={30} strokeWidth={2.5} />,
                title: "Testing & Launch",
                text: "We test thoroughly and launch your website with full support.",
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
                  className="relative z-10 w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center shadow-[0_10px_30px_rgba(43,76,154,0.08)] group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500"
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
                <h3 className="relative z-10 mt-2 text-xl font-bold text-[#1a2e5e] leading-snug">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-5 text-gray-500 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES WE USE */}
      <section className="relative w-full bg-[#EEF2FF] text-white overflow-hidden py-16 px-6 flex items-center">

        {/* BG GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#7c4dff]/10 blur-[120px] rounded-full"></div>

        <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">  
          
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
              Technologies We Use
            </motion.p>

            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Modern Technologies For
              <span className="text-[#2b4c9a]"> Modern Solutions</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl">
              We leverage cutting-edge frameworks and tools to build fast, scalable, and future-ready websites.
            </p>

          </motion.div>

          {/* RIGHT TECHNOLOGY STACK */}
          <div className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-6 mt-8 lg:mt-0 z-10 w-full lg:w-auto pr-0 lg:pr-8">

            {[
              {
                icon: <Atom size={30} strokeWidth={2} />,
                title: "React",
                color: "text-cyan-400",
                position: "md:col-start-1 md:row-start-1",
              },
              {
                icon: <Code2 size={30} strokeWidth={2} />,
                title: "Next.js",
                color: "text-white",
                position: "md:col-start-3 md:row-start-1",
              },
              {
                icon: <Layers3 size={30} strokeWidth={2} />,
                title: "TypeScript",
                color: "text-blue-400",
                position: "md:col-start-5 md:row-start-1",
              },
              {
                icon: <Server size={30} strokeWidth={2} />,
                title: "Node.js",
                color: "text-green-400",
                position: "md:col-start-2 md:row-start-2",
              },
              {
                icon: <PenTool size={30} strokeWidth={2} />,
                title: "Tailwind CSS",
                color: "text-sky-400",
                position: "md:col-start-4 md:row-start-2",
              },
              {
                icon: <Database size={30} strokeWidth={2} />,
                title: "MongoDB",
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
                  bg-[#0A0520]/80
                  backdrop-blur-xl
                  border border-slate-800/80
                  hover:border-indigo-500/40
                  rounded-xl
                  px-5 py-3.5
                  w-40 h-14
                  shadow-[0_4px_25px_rgba(0,0,0,0.5)]
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
                <span className="relative z-10 text-sm font-medium text-slate-200 tracking-wide">
                  {item.title}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-16 px-6 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            container mx-auto
            relative
            rounded-[32px]
            p-10 md:p-16
            bg-[#1a2e5e]
            overflow-hidden
            border border-white/10
            shadow-[0_30px_100px_rgba(26,46,94,0.35)]
          "
        >

          {/* GRID PATTERN */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:26px_26px]"></div>

          {/* TOP GLOW */}
          <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          {/* RIGHT GLOW */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4f7cff]/20 blur-[120px] rounded-full"></div>

          {/* FLOATING LIGHT */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-10 right-20
              w-32 h-32
              bg-blue-400/10
              blur-3xl
              rounded-full
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready To Grow
                <span className="text-[#6EA8FF]"> Your Business?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-5 text-[#B7C2D8] text-lg max-w-2xl leading-relaxed"
              >
                Let’s build a premium digital experience designed for conversions and long-term growth.
              </motion.p>

            </div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >

              <Link
                href="/contact-us"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-6 py-3
                  font-semibold
                  text-[#1a2e5e]
                  shadow-[0_10px_40px_rgba(255,255,255,0.12)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_20px_60px_rgba(255,255,255,0.18)]
                "
              >

                {/* BUTTON GLOW */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <span className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-[#6EA8FF]/30 blur-2xl"></span>

                </span>

                <span className="relative z-10">
                  Start Your Project
                </span>

              </Link>

            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}