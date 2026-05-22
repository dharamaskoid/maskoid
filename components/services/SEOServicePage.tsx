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
      <section className="relative py-20 px-6 md:px-10 lg:px-16 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="container mx-auto relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
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
      <section className="relative py-20 bg-[#EEF2FF] overflow-hidden">

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

            <p className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              SEO Solutions
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1a2e5e]">
              Results Driven
              <span className="text-[#2b4c9a]"> SEO Services</span>
            </h2>

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
                  scale: 1.02,
                }}
                className="group relative bg-white border border-[#e8efff] rounded-[28px] p-8 text-center overflow-hidden shadow-[0_10px_30px_rgba(43,76,154,0.04)] hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#6EA8FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-20 right-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="relative z-10 w-20 h-20 mx-auto rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center group-hover:bg-[#2b4c9a] group-hover:text-white transition-all duration-500"
                >
                  {item.icon}
                </motion.div>

                <h3 className="relative z-10 mt-7 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

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

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

        </div>

        <div className="container px-6 mx-auto relative z-10">

          <div className="text-center max-w-4xl mx-auto">

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white">
              Features of Our
              <span className="text-[#6EA8FF]"> SEO Services</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {[
              {
                icon: <Target size={30} />,
                title: "Targeted SEO Strategy",
                text: "SEO strategies tailored to your audience and business goals.",
              },
              {
                icon: <LineChart size={30} />,
                title: "Performance Tracking",
                text: "Detailed reporting and analytics to measure SEO growth.",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "Long-Term Growth",
                text: "Sustainable SEO techniques that improve rankings over time.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-[#6EA8FF] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-[#B7C2D8] leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* OUR SEO PROCESS */}
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
              SEO Optimization 
              <span className="text-[#2b4c9a]"> Process</span>
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed">
              Our proven SEO strategy helps improve rankings,
              increase organic traffic, and grow your online visibility.
            </p>

          </motion.div>

          {/* PROCESS STEPS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20 relative">

            {[
              {
                step: "01",
                title: "SEO Audit & Research",
                icon: <Search size={26} />,
                text: "We analyze your website, competitors, and keywords to create a strong SEO strategy.",
              },

              {
                step: "02",
                title: "On-Page Optimization",
                icon: <PenTool size={26} />,
                text: "We optimize content, meta tags, structure, and internal linking for better rankings.",
              },

              {
                step: "03",
                title: "Technical SEO",
                icon: <MonitorSmartphone size={26} />,
                text: "We improve website speed, mobile responsiveness, indexing, and technical performance.",
              },

              {
                step: "04",
                title: "Growth & Reporting",
                icon: <Rocket size={26} />,
                text: "We monitor rankings, track traffic, and continuously optimize for long-term growth.",
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