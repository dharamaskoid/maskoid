"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

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

         <div className="container mx-auto px-14 relative">

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={true}
            loop={true}
            speed={3000}
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
                slidesPerView: 3,
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
                    className="h-14 md:h-16 object-contain opacity-70 transition duration-300"
                  />

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
              Our Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Web Development Solutions For
              <span className="text-[#2b4c9a]"> Modern Businesses</span>
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                icon: <Globe size={34} />,
                title: "Business Websites",
              },
              {
                icon: <ShoppingCart size={34} />,
                title: "E-Commerce",
              },
              {
                icon: <MonitorSmartphone size={34} />,
                title: "Responsive Design",
              },
              {
                icon: <Code2 size={34} />,
                title: "Custom Development",
              },
              {
                icon: <Search size={34} />,
                title: "SEO Optimized",
              },
              {
                icon: <Rocket size={34} />,
                title: "Performance Focused",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[28px] p-8 border border-[#dbe7ff] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)] transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Premium scalable digital solutions tailored for your business goals.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-[#1a2e5e] py-24 overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4f7cff]/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Businesses Choose
              <span className="text-[#6EA8FF]"> Maskoid</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                icon: <Search size={28} />,
                title: "SEO Ready",
              },
              {
                icon: <ShieldCheck size={28} />,
                title: "Secure",
              },
              {
                icon: <Rocket size={28} />,
                title: "Fast Performance",
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Conversion Focused",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >

                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-[#6EA8FF]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-[#B7C2D8] leading-relaxed">
                  High-end development focused on real business growth.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto">

          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e5e]">
              Our Development Process
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                step: "01",
                title: "Research",
                icon: <Search size={28} />,
              },
              {
                step: "02",
                title: "UI/UX Design",
                icon: <PenTool size={28} />,
              },
              {
                step: "03",
                title: "Development",
                icon: <Database size={28} />,
              },
              {
                step: "04",
                title: "Launch",
                icon: <Rocket size={28} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-[#dbe7ff] p-8 relative hover:-translate-y-2 transition-all duration-500"
              >

                <div className="absolute top-6 right-6 text-5xl font-bold text-[#EEF4FF]">
                  {item.step}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center relative z-10">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Strategic process focused on quality and scalable growth.
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white px-6 md:px-10 lg:px-16">

        <div className="container mx-auto">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <div>

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                FAQ
              </p>

              <h2 className="mt-6 text-4xl font-bold text-[#1a2e5e] leading-tight">
                Frequently Asked Questions
              </h2>

            </div>

            {/* RIGHT */}
            <div className="space-y-5">

              {[
                "How long does a website take?",
                "Do you provide SEO?",
                "Will my website be responsive?",
                "Can you redesign my website?",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#EEF4FF] rounded-2xl px-6 py-5 flex items-center justify-between"
                >

                  <h3 className="font-semibold text-[#1a2e5e]">
                    {item}
                  </h3>

                  <ChevronDown className="w-5 h-5 text-[#2b4c9a]" />

                </div>
              ))}

            </div>

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