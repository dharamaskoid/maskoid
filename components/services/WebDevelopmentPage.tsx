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
      
      {/* SERVICES */}
      <section className="relative py-16 px-6 overflow-hidden">

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

                <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                  Core Services
                </p>

                <h2 className="mt-6 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                  Premium Digital Experiences
                  <span className="text-[#2b4c9a]"> Built For Growth</span>
                </h2>

              </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-16">

            {[
              {
                icon: <Globe size={30} />,
                title: "Business Websites",
              },
              {
                icon: <ShoppingCart size={30} />,
                title: "E-Commerce",
              },
              {
                icon: <MonitorSmartphone size={30} />,
                title: "Responsive Design",
              },
              {
                icon: <Code2 size={30} />,
                title: "Custom Development",
              },
              {
                icon: <Search size={30} />,
                title: "SEO Optimized",
              },
              {
                icon: <Rocket size={30} />,
                title: "Performance Focused",
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
                  Premium scalable digital solutions tailored for your business goals.
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            
      {/* Our Solution */}
      <section className="py-16 bg-[#EEF2FF] relative overflow-hidden">

        {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
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
                Our Solutions
            </p>

            <h2 className="mt-4 text-4xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
              Web Development 
                   <span className="text-[#2b4c9a]"> Solutions</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              We combine creativity with technology to deliver solutions that are
              fast, scalable, secure, and built to perform.
            </p>

          </motion.div>

          {/* CARDS */}
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
                className="
                  group relative
                  bg-white
                  border border-[#e8efff]
                  rounded-[28px]
                  p-8
                  text-center
                  overflow-hidden
                  shadow-[0_10px_30px_rgba(43,76,154,0.04)]
                  hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)]
                  transition-all duration-500
                "
              >

                {/* TOP GRADIENT LINE */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#6EA8FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
                </div>

                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="
                    relative z-10
                    w-20 h-20 mx-auto rounded-2xl
                    bg-[#EEF4FF]
                    text-[#2b4c9a]
                    flex items-center justify-center
                    shadow-inner
                    group-hover:bg-[#2b4c9a]
                    group-hover:text-white
                    transition-all duration-500
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-7 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-[15px]">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* WHY CHOOSE US */}

      <section className="relative py-16 overflow-hidden bg-[#1a2e5e]">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

        </div>

        <div className="container px-6 mx-auto relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-4xl mx-auto"
          >

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-4xl md:text-4xl font-bold text-white leading-tight">
              Features of Our 
              <span className="jsx-1d499fd48ad2ca04 text-[#6EA8FF]"> Web Development</span> Services
            </h2>

            <p className="mt-5 text-[#B7C2D8] text-lg leading-relaxed">
              We follow industry best practices and use modern technologies
              to build websites that are not only beautiful but also
              high-performing.
            </p>

          </motion.div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: <Search size={30} />,
                title: "Performance & SEO Optimized",
                text: "We build lightning-fast websites optimized for search engines to help you rank higher and attract the right audience.",
              },

              {
                icon: <ShieldCheck size={30} />,
                title: "Secure & Scalable",
                text: "Security and scalability are at the core of our development process to ensure your website grows with your business.",
              },

              {
                icon: <Code2 size={30} />,
                title: "Clean & Modern Code",
                text: "We follow best coding standards to deliver clean, maintainable, and future-ready solutions.",
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
                className="
                  group
                  relative
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  rounded-[28px]
                  p-8
                  overflow-hidden
                  hover:border-[#3B82F6]/30
                  hover:bg-white/[0.07]
                  transition-all duration-500
                "
              >

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                  <div className="absolute -top-10 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

                </div>

                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  className="
                    relative z-10
                    w-20 h-20
                    rounded-2xl
                    bg-white/10
                    border border-white/10
                    text-[#6EA8FF]
                    flex items-center justify-center
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-7 text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="relative z-10 mt-5 text-[#B7C2D8] leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >

            <Link
              href="/contact-us"
              className="
                group inline-flex items-center gap-3
                px-6 py-3 rounded-xl
                bg-[#2b4c9a] hover:bg-[#1f3d84]
                text-white font-semibold
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Discuss Your Project
            </Link>

          </motion.div>

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