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
  Target,
  MousePointerClick,
  TrendingUp,
  BarChart3,
  Users,
  Rocket,
  ShieldCheck,
  Search,
  Globe,
  LineChart,
  Layers3,
  MonitorSmartphone,
  PenTool,
  DollarSign,
  Megaphone,
  PieChart,
  Activity,
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
    icon: <Target size={34} />,
    title: "Google Ads",
    text: "High-converting Google Ads campaigns for maximum ROI.",
  },
  {
    icon: <MousePointerClick size={34} />,
    title: "Search Campaigns",
    text: "Target customers actively searching for your services.",
  },
  {
    icon: <Megaphone size={34} />,
    title: "Display Ads",
    text: "Build strong brand awareness with visual ad campaigns.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Performance Tracking",
    text: "Detailed analytics and campaign optimization strategies.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "Conversion Growth",
    text: "Scale your leads and revenue with smart PPC campaigns.",
  },
];

export default function PPCServicePage() {
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
                PPC Service
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Drive Instant Traffic &
                <span className="block text-[#6EA8FF]">
                  Generate More Leads
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We create high-performing PPC campaigns focused on conversions, ROI, lead generation, and scalable business growth.
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
                  src="/images/ppc.png"
                  alt="PPC"
                  className="h-[220px] sm:h-[360px] md:h-[340px] lg:h-[360px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CLIENT LOGOS */}
      <section className="py-16 bg-white border-y border-[#dbe7ff]">

        <div className="container mx-auto px-6 relative">

          <button className="ppc-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300">
            <ChevronLeft size={20} />
          </button>

          <button className="ppc-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white shadow-xl border flex items-center justify-center text-[#2b4c9a] hover:bg-[#2b4c9a] hover:text-white transition-all duration-300">
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
              prevEl: ".ppc-prev",
              nextEl: ".ppc-next",
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
              Our PPC Services
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e] leading-tight">
              Powerful PPC Solutions For
              <span className="text-[#2b4c9a]"> Modern Businesses</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-16">

            {[
              {
                icon: <Target size={30} />,
                title: "Google Ads",
              },
              {
                icon: <MousePointerClick size={30} />,
                title: "Search Ads",
              },
              {
                icon: <Megaphone size={30} />,
                title: "Display Ads",
              },
              {
                icon: <BarChart3 size={30} />,
                title: "Campaign Audit",
              },
              {
                icon: <Users size={30} />,
                title: "Audience Targeting",
              },
              {
                icon: <Rocket size={30} />,
                title: "Lead Generation",
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

                <p className="relative z-10 mt-4 text-gray-500 leading-relaxed text-sm">
                  Premium PPC campaigns focused on leads, conversions, and ROI.
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
              PPC Solutions
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1a2e5e]">
              Results Driven
              <span className="text-[#2b4c9a]"> PPC Services</span>
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
    </main>
  );
}