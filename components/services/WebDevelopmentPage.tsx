"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MonitorSmartphone,
  Search,
  ShoppingCart,
  Layers3,
  ShieldCheck,
  Rocket,
  Code2,
  BarChart3,
  PenTool,
  Database,
  ChevronDown,
} from "lucide-react";

export default function WebDevelopmentPage() {
    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

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
                src="/images/contact-us-banner(1).png"
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

        <div className="container mx-auto px-6">

          {/* SLIDER WRAPPER */}
          <div className="container mx-auto px-6 relative">

            {/* CUSTOM NAVIGATION */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex items-center justify-between z-30 pointer-events-none">

              {/* PREVIOUS */}
              <button className="logos-prev pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                <ChevronLeft size={20} />

              </button>

              {/* NEXT */}
              <button className="logos-next pointer-events-auto w-12 h-12 rounded-full bg-white shadow-xl border border-[#e8ecf5] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300 flex items-center justify-center text-[#2b4c9a]">

                <ChevronRight size={20} />

              </button>

            </div>

            {/* SWIPER */}
            <Swiper
              className="px-14"
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".logos-prev",
                nextEl: ".logos-next",
              }}
              loop={true}
              speed={2000}
              spaceBetween={10}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
            >

              {logos.map((logo, i) => (
                <SwiperSlide key={i}>

                  <div className="flex items-center justify-center h-16">

                    <img
                      src={logo}
                      alt="brand"
                      className="h-14 md:h-16 object-contain opacity-70 hover:opacity-100 transition duration-300"
                    />

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WHAT WE OFFER */}
      {/* ===================================================== */}
      <section className="py-24 bg-white overflow-hidden">

        <div className="container mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >

              <p className="text-[#3B82F6] font-semibold uppercase tracking-[0.2em] text-sm">
                What We Offer
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#07122B] leading-tight">
                Web Development
                <span className="text-[#2b4c9a] block">
                  Services We Offer
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                We provide scalable web development solutions tailored for
                startups, enterprises, and growing businesses.
              </p>

              {/* SERVICES LIST */}
              <div className="space-y-5 mt-10">

                {[
                  "Custom Website Development",
                  "E-Commerce Development",
                  "Front-End Development",
                  "CMS Development",
                  "Web Applications",
                  "Website Revamp",
                  "Performance Optimization",
                ].map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between border-b border-[#dbe7ff] pb-4"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                        <Check />
                      </div>

                      <h3 className="font-semibold text-[#1a2e5e]">
                        {item}
                      </h3>

                    </div>

                    <ArrowRight className="w-5 h-5 text-[#2b4c9a]" />

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <Image
                src="/images/web-design-laptop.jpg"
                alt=""
                width={700}
                height={600}
                className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
              />

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 right-8 bg-white rounded-3xl p-8 shadow-2xl"
              >

                <h3 className="text-5xl font-bold text-[#2b4c9a]">
                  10+
                </h3>

                <p className="mt-2 text-gray-500">
                  Years Of Experience
                </p>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SOLUTIONS */}
      {/* ===================================================== */}
      <section className="py-24">

        <div className="container mx-auto px-6 md:px-10 lg:px-16">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-[#3B82F6] font-semibold uppercase tracking-[0.2em] text-sm">
              Our Solutions
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#07122B]">
              Web Development Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

            {[
              {
                icon: <Globe size={32} />,
                title: "Custom Websites",
              },
              {
                icon: <ShoppingCart size={32} />,
                title: "E-Commerce",
              },
              {
                icon: <Layers3 size={32} />,
                title: "Web Apps",
              },
              {
                icon: <MonitorSmartphone size={32} />,
                title: "CMS Solutions",
              },
              {
                icon: <Code2 size={32} />,
                title: "API Development",
              },
            ].map((item, i) => (

              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl border border-[#dbe7ff] p-8 text-center shadow-sm hover:shadow-[0_20px_50px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="pb-24 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto bg-[#1a2e5e] rounded-[36px] p-10 md:p-16 relative overflow-hidden">

          {/* BG */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready To Grow
                <span className="text-[#6EA8FF]"> Your Business?</span>
              </h2>

              <p className="mt-5 text-[#B7C2D8] text-lg max-w-2xl">
                Let’s build a premium digital experience designed for conversions and growth.
              </p>

            </div>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:bg-[#dbe7ff] transition-all duration-300 whitespace-nowrap"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}


function Check() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
