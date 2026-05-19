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
              Web Development 
              <span className="text-[#2b4c9a]"> Process</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Our proven process ensures your project is delivered on time,
              on budget, and exceeds expectations.
            </p>

          </motion.div>

          {/* PROCESS STEPS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20 relative">

            {[
              {
                step: "01",
                title: "Discovery & Planning",
                icon: <Search size={26} />,
                text: "We understand your goals, audience, and requirements to create a solid plan.",
              },

              {
                step: "02",
                title: "Design & Prototyping",
                icon: <PenTool size={26} />,
                text: "We design intuitive UI/UX prototypes that align with your brand and users.",
              },

              {
                step: "03",
                title: "Development",
                icon: <MonitorSmartphone size={26} />,
                text: "Our developers build scalable, secure, and high-performance solutions.",
              },

              {
                step: "04",
                title: "Testing & Launch",
                icon: <Rocket size={26} />,
                text: "We test thoroughly and launch your website with full support.",
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



      {/* Technologies we use */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">

          {/* LEFT GLOW */}
          <div className="absolute -top-20 -left-20 w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          {/* RIGHT GLOW */}
          <div className="absolute bottom-0 right-0 w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-[#2b4c9a]/10 blur-[120px] rounded-full"></div>

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                Technologies We Use
              </p>

              <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                Modern Technologies
                <span className="text-[#2b4c9a]"> For Modern Solutions</span>
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                We leverage cutting-edge frameworks and technologies
                to build fast, scalable, secure, and future-ready
                digital experiences.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-5 mt-10">

                {[
                  ["10+", "Technologies"],
                  ["100%", "Scalable Solutions"],
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="
                      bg-white
                      border border-[#dbe7ff]
                      rounded-3xl
                      p-6
                      shadow-[0_10px_40px_rgba(43,76,154,0.06)]
                      hover:shadow-[0_20px_60px_rgba(43,76,154,0.12)]
                      transition-all duration-500
                    "
                  >

                    <h3 className="text-3xl font-bold text-[#1a2e5e]">
                      {item[0]}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {item[1]}
                    </p>

                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT GRID */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6"
            >

              {[
                  {
                    name: "React",
                    icon: <Atom size={42} />,
                  },
                  {
                    name: "Next.js",
                    icon: <Layers3 size={42} />,
                  },
                  {
                    name: "Node.js",
                    icon: <Server size={42} />,
                  },
                  {
                    name: "TypeScript",
                    icon: <Code2 size={42} />,
                  },
                  {
                    name: "Laravel",
                    icon: <Database size={42} />,
                  },
                  {
                    name: "WordPress",
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
                  transition={{ duration: 0.35 }}
                  className="
                    group relative
                    bg-white
                    border border-[#dbe7ff]
                    rounded-[28px]
                    p-6 md:p-8
                    flex flex-col items-center justify-center
                    overflow-hidden
                    shadow-[0_10px_40px_rgba(43,76,154,0.05)]
                    hover:shadow-[0_30px_80px_rgba(43,76,154,0.14)]
                    transition-all duration-500
                  "
                >

                  {/* TOP LIGHT */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                  </div>

                  {/* ICON WRAPPER */}
                  <div className="
                    relative z-10
                    w-20 h-20
                    rounded-2xl
                    bg-[#EEF4FF]
                    flex items-center justify-center
                    text-[#2b4c9a]
                    group-hover:bg-[#2b4c9a]
                    group-hover:text-white
                    transition-all duration-500
                  ">

                  <div className="relative z-10
                        w-20 h-20
                        rounded-xl
                        bg-[#EEF4FF]
                        flex items-center justify-center
                        group-hover:bg-[#2b4c9a]
                        transition-all duration-500">
                    {item.icon}
                  </div>

                  </div>

                  {/* NAME */}
                  <h3 className="relative z-10 mt-5 text-lg md:text-xl font-semibold text-[#1a2e5e] text-center">
                    {item.name}
                  </h3>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6 md:px-10 lg:px-16 overflow-hidden">

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