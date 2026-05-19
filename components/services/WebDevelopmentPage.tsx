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
      <section className="relative py-20 md:py-24 overflow-hidden bg-white">

        {/* BG */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_30%)]"></div>

        <div className="container mx-auto px-6 relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-flex px-5 py-2 rounded-full border border-[#dbe7ff] bg-[#EEF4FF] text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Smart Digital Services
              <span className="block text-[#3B82F6]">
                Designed For Growth
              </span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              High-converting digital experiences crafted with strategy,
              creativity, and modern technologies.
            </p>

          </motion.div>

          {/* SERVICES */}
          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: <Globe size={34} />,
                title: "Business Websites",
                image: "/images/service-1.jpg",
              },
              {
                icon: <ShoppingCart size={34} />,
                title: "E-Commerce Solutions",
                image: "/images/service-2.jpg",
              },
              {
                icon: <MonitorSmartphone size={34} />,
                title: "Responsive Design",
                image: "/images/service-3.jpg",
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
                className="group relative overflow-hidden rounded-[36px] bg-[#0F172A]"
              >

                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent"></div>

                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-8">

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="mt-6 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[#dbe7ff] leading-relaxed">
                    Premium scalable solutions tailored for modern business growth and conversions.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-white font-medium">
                    Explore Service
                    <ArrowRight size={18} />
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR SOLUTIONS */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#F8FAFF]">

        {/* BG */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:26px_26px]"></div>

        <div className="container mx-auto px-6 relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >

            <p className="inline-flex px-5 py-2 rounded-full border border-[#dbe7ff] bg-white text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our Solutions
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Powerful Solutions
              <span className="block text-[#3B82F6]">
                For Modern Brands
              </span>
            </h2>

          </motion.div>

          {/* SOLUTION ROW */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {[
              {
                title: "Custom Web Platforms",
                text: "Scalable custom platforms designed for performance, speed, and conversions.",
                image: "/images/solution-1.jpg",
              },
              {
                title: "Growth Focused UI/UX",
                text: "Premium user experiences optimized for engagement and business growth.",
                image: "/images/solution-2.jpg",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[36px] bg-white border border-[#dbe7ff] shadow-[0_20px_60px_rgba(43,76,154,0.08)]"
              >

                <div className="grid md:grid-cols-2 items-center">

                  {/* IMAGE */}
                  <div className="overflow-hidden h-full">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-10">

                    <h3 className="text-3xl font-bold text-[#1a2e5e] leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-gray-500 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 text-[#3B82F6] font-semibold">
                      Learn More
                      <ArrowRight size={18} />
                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#071739]">

        {/* BG */}
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

            <p className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em]">
              Why Choose Us
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Built For Performance
              <span className="block text-[#6EA8FF]">
                And Long-Term Growth
              </span>
            </h2>

          </motion.div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: <ShieldCheck size={34} />,
                title: "Secure Architecture",
              },
              {
                icon: <Rocket size={34} />,
                title: "Fast Performance",
              },
              {
                icon: <LineChart size={34} />,
                title: "Growth Focused",
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
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

                </div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 text-[#6EA8FF] flex items-center justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[#B7C2D8] leading-relaxed">
                    Modern technologies and premium strategies focused on scaling your brand online.
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR PROCESS */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-white">

        <div className="container mx-auto px-6 relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >

            <p className="inline-flex px-5 py-2 rounded-full border border-[#dbe7ff] bg-[#EEF4FF] text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our Process
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e]">
              Simple Process
              <span className="block text-[#3B82F6]">
                Exceptional Results
              </span>
            </h2>

          </motion.div>

          {/* TIMELINE */}
          <div className="relative mt-24">

            <div className="absolute hidden lg:block top-1/2 left-0 w-full border-t border-dashed border-[#c8d8ff]"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

              {[
                {
                  step: "01",
                  title: "Research",
                  icon: <Search size={28} />,
                },
                {
                  step: "02",
                  title: "Strategy",
                  icon: <PenTool size={28} />,
                },
                {
                  step: "03",
                  title: "Development",
                  icon: <Code2 size={28} />,
                },
                {
                  step: "04",
                  title: "Launch",
                  icon: <Rocket size={28} />,
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="relative bg-white rounded-[30px] border border-[#dbe7ff] p-8 shadow-[0_20px_60px_rgba(43,76,154,0.08)]"
                >

                  <div className="absolute top-5 right-6 text-6xl font-bold text-[#EEF4FF]">
                    {item.step}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center relative z-10">
                    {item.icon}
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#1a2e5e]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-500 leading-relaxed">
                    A premium workflow designed to deliver scalable and high-performing digital products.
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES WE USE */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-[#F8FAFF]">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:26px_26px]"></div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="inline-flex px-5 py-2 rounded-full border border-[#dbe7ff] bg-white text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                Technologies We Use
              </p>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
                Modern Stack
                <span className="block text-[#3B82F6]">
                  For Modern Brands
                </span>
              </h2>

              <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                We use modern frameworks and scalable technologies to build premium digital experiences.
              </p>

            </motion.div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">

              {[
                "React",
                "Next.js",
                "Tailwind",
                "Node.js",
                "WordPress",
                "MongoDB",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group bg-white border border-[#dbe7ff] rounded-[30px] p-10 text-center shadow-[0_20px_60px_rgba(43,76,154,0.06)] hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)] transition-all duration-500"
                >

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EEF4FF] flex items-center justify-center text-[#2b4c9a] font-bold text-xl">
                    {item.charAt(0)}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                    {item}
                  </h3>

                </motion.div>

              ))}

            </div>

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