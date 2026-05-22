"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';
import { motion,  useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  LayoutDashboard,
  RefreshCcw,
  Lock,
  List,
  Users,
  UserPlus,
  BarChart3,
  KeyRound,
  ChevronRight,
  Mail,
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
      duration: 0.6,
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Login",
    desc: "Secure access with authentication.",
    icon: <Lock size={30} />,
  },
  {
    number: "02",
    title: "Dashboard",
    desc: "Overview of licenses & analytics.",
    icon: <LayoutDashboard size={30} />,
  },
  {
    number: "03",
    title: "Create Softwares",
    desc: "Add products & generate keys.",
    icon: <ShieldCheck size={30} />,
  },
  {
    number: "04",
    title: "List Softwares",
    desc: "Manage software products easily.",
    icon: <List size={30} />,
  },
  {
    number: "05",
    title: "Create License Key",
    desc: "Generate unique validation keys.",
    icon: <KeyRound size={30} />,
  },
  {
    number: "06",
    title: "License Key List",
    desc: "Track all generated keys.",
    icon: <List size={30} />,
  },
  {
    number: "07",
    title: "Verification Logs",
    desc: "Monitor validations in real-time.",
    icon: <BarChart3 size={30} />,
  },
  {
    number: "08",
    title: "Re-Verification Logs",
    desc: "Review re-validation attempts.",
    icon: <RefreshCcw size={30} />,
  },
  {
    number: "09",
    title: "Create User",
    desc: "Add users with permissions.",
    icon: <UserPlus size={30} />,
  },
  {
    number: "10",
    title: "All Users",
    desc: "Manage all team members.",
    icon: <Users size={30} />,
  },
];

export default function LicenseKeyManagementPage() {

      // Split data into two rows
  const rowOne = steps.slice(0, 5);
  // Reverse the second row visually (10 to 06) so the grid renders from left to right matching the path
  const rowTwo = steps.slice(5, 10).reverse();
  const containerRef = useRef(null);
  
  // Connects page scrolling directly into our background svg line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Controls the drawing path animation of the connecting track dynamically
  const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

  // Splits the data array into layout tiers
  const tierOne = steps.slice(0, 5);
  const tierTwo = steps.slice(5, 10).reverse(); // Reverses visually to close the loop naturally


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
                Secure • Reliable • Scalable
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                License Key
                <span className="block text-[#6EA8FF]">
                  Management
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                Powerful software license management system to generate,
                validate, track, and manage software licenses securely.
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
      
    {/* PROCESS SECTION */}
    <section className="relative py-24 bg-white overflow-hidden">

      <div className="container px-6 mx-auto max-w-[1240px]">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase">
            How It Works
          </p>
          <h2 className="mt-6 text-5xl font-black text-[#10204b]">
            Powerful Features.
            <span className="text-[#2b4c9a]"> Simple Process.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Everything needed to manage software licenses efficiently.
          </p>
        </div>

        {/* Flow Diagram Outer Container */}
        <div className="relative mt-24 flex flex-col gap-24">
          
          {/* SVG Vector Connecting Lines (Hidden on small viewports when cards stack) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" fill="none" xmlns="http://w3.org">
              {/* Row 1 horizontal connector line */}
              <line x1="10%" y1="0px" x2="90%" y2="0px" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Right S-curve drop connector between step 05 and step 06 */}
              <path d="M 90% 0 A 20 20 0 0 1 93.5% 20 L 93.5% 210 A 20 20 0 0 1 90% 230" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Row 2 horizontal connector line */}
              <line x1="90%" y1="230px" x2="10%" y2="230px" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Left outbound tail line dropping down from step 10 */}
              <path d="M 10% 230 A 20 20 0 0 0 6.5% 250 L 6.5% 300" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Row 1 Layout Grid (Steps 01 - 05) */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {rowOne.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="relative bg-white border border-[#EEF2FF] rounded-3xl p-8 shadow-[0_20px_60px_rgba(43,76,154,0.05)] flex flex-col items-start"
              >
                {/* Number Badge with background match ring to cut the connecting line cleanly */}
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#2b4c9a] text-white text-sm font-bold flex items-center justify-center ring-[6px] ring-white">
                  {item.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 Layout Grid (Steps 10 - 06) */}
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {rowTwo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="relative bg-white border border-[#EEF2FF] rounded-3xl p-8 shadow-[0_20px_60px_rgba(43,76,154,0.05)] flex flex-col items-start"
              >
                {/* Number Badge with background match ring */}
                <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-[#2b4c9a] text-white text-sm font-bold flex items-center justify-center ring-[6px] ring-white">
                  {item.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
    {/* PROCESS / TIMELINE SECTION */}
    <section className="relative py-24 bg-white overflow-hidden">

    {/* BG EFFECTS */}
    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]"></div>

    <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

    <div className="container px-6 mx-auto max-w-[1240px] relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

        <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.2em]">
            How It Works
        </p>

        <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#10204b] leading-tight">
            Powerful Features.
            <span className="text-[#2b4c9a]"> Simple Process.</span>
        </h2>

        <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Everything needed to manage software licenses efficiently from creation to validation.
        </p>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

        {/* CENTER LINE */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#2b4c9a] via-[#7c4dff] to-[#2b4c9a]"></div>

        {/* ITEMS */}
        <div className="space-y-16">

            {steps.map((item, index) => {

            const isLeft = index % 2 === 0;

            return (

                <motion.div
                key={index}
                initial={{
                    opacity: 0,
                    y: 60,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                }}
                className={`relative flex flex-col lg:flex-row items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                }`}
                >

                {/* CENTER DOT */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

                    <div className="relative flex items-center justify-center">

                    {/* PULSE */}
                    <div className="absolute w-14 h-14 rounded-full bg-[#2b4c9a]/10 animate-ping"></div>

                    {/* MAIN */}
                    <div className="w-14 h-14 rounded-full bg-[#2b4c9a] border-[6px] border-white shadow-[0_20px_40px_rgba(43,76,154,0.25)] flex items-center justify-center text-white font-bold text-sm">
                        {item.number}
                    </div>

                    </div>

                </div>

                {/* CARD */}
                <motion.div
                    whileHover={{
                    y: -8,
                    }}
                    className={`
                    relative
                    w-full
                    lg:w-[46%]
                    rounded-3xl
                    border border-[#EEF2FF]
                    bg-white/90
                    backdrop-blur-xl
                    p-8
                    shadow-[0_20px_60px_rgba(43,76,154,0.06)]
                    hover:shadow-[0_30px_80px_rgba(43,76,154,0.12)]
                    transition-all duration-500
                    `}
                >

                    {/* MOBILE NUMBER */}
                    <div className="lg:hidden mb-6 w-12 h-12 rounded-full bg-[#2b4c9a] text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {item.number}
                    </div>

                    {/* CONNECTOR */}
                    <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-[#c7d2fe] ${
                        isLeft ? "-right-16" : "-left-16"
                    }`}
                    ></div>

                    {/* ICON */}
                    <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center text-3xl shadow-sm">
                    {item.icon}
                    </div>

                    {/* CONTENT */}
                    <h3 className="mt-6 text-2xl font-bold text-[#1a2e5e]">
                    {item.title}
                    </h3>

                    <p className="mt-4 text-gray-500 leading-relaxed">
                    {item.desc}
                    </p>

                </motion.div>

                </motion.div>

            );

            })}

        </div>

        </div>

    </div>

    </section>

    {/* PREMIUM COMPACT PROCESS SECTION */}
        <section className="relative py-24 bg-white overflow-hidden">

        {/* BG EFFECTS */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:26px_26px]"></div>

        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#4f7cff]/10 blur-[120px] rounded-full"></div>

        <div className="container px-6 mx-auto max-w-[1320px] relative z-10">

            {/* HEADER */}
            <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.2em]">
                How It Works
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#10204b] leading-tight">
                Powerful Features.
                <span className="text-[#2b4c9a]"> Smart Workflow.</span>
            </h2>

            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
                Modern streamlined license management process built for scalability.
            </p>

            </div>

            {/* PROCESS FLOW */}
            <div className="relative mt-20">

            {/* CENTER CONNECTOR */}
            <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#dbe7ff] to-transparent z-0"></div>

            {/* ITEMS */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

                {steps.map((item, index) => (

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
                    delay: index * 0.08,
                    }}
                    whileHover={{
                    y: -10,
                    }}
                    className={`
                    relative
                    group
                    rounded-[28px]
                    border border-[#EEF2FF]
                    bg-white/80
                    backdrop-blur-xl
                    p-6
                    shadow-[0_20px_60px_rgba(43,76,154,0.06)]
                    hover:shadow-[0_30px_80px_rgba(43,76,154,0.14)]
                    transition-all duration-500
                    overflow-hidden
                    min-h-[280px]
                    flex
                    flex-col

                    ${index % 2 === 1 ? "xl:mt-16" : ""}
                    `}
                >

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                    <div className="absolute -top-24 right-0 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full"></div>

                    </div>

                    {/* STEP TOP */}
                    <div className="relative z-10 flex items-start justify-between">

                    {/* ICON */}
                    <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center shadow-inner border border-[#dbe7ff]">
                        {item.icon}
                    </div>

                    {/* NUMBER */}
                    <div className="text-[#2b4c9a] text-sm font-black w-10 h-10 rounded-full bg-[#EEF4FF] border border-[#dbe7ff] flex items-center justify-center">
                        {item.number}
                    </div>

                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-8 flex-1">

                    <h3 className="text-xl font-black text-[#10204b] leading-snug">
                        {item.title}
                    </h3>

                    <p className="mt-4 text-gray-500 leading-relaxed text-sm">
                        {item.desc}
                    </p>

                    </div>

                    {/* BOTTOM LINE */}
                    <div className="relative z-10 mt-6 flex items-center gap-2">

                    <div className="w-2 h-2 rounded-full bg-[#2b4c9a] animate-pulse"></div>

                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#2b4c9a]/40 to-transparent"></div>

                    </div>

                </motion.div>

                ))}

            </div>

            </div>

        </div>

        </section>

<section ref={containerRef} className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* --- CURRENT TREND: ADVANCED ACCENTUATED LAYERING --- */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#6366f1]/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container px-6 mx-auto max-w-[1440px] relative z-10">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm text-slate-800 text-[11px] font-semibold uppercase tracking-[0.25em]"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#2b4c9a] animate-pulse"></span>
            Orchestration Flow
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-[#10204b] leading-[1.1]"
          >
            Powerful Features. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2b4c9a] via-[#4f7cff] to-[#6366f1] bg-clip-text text-transparent">Simple Process.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            Everything needed to provision, audit, and scale native software environments within a high-performance framework.
          </motion.p>
        </div>

        {/* --- BENTO TRACK CONTAINER --- */}
        <div className="relative flex flex-col gap-28 lg:gap-36">
          
          {/* --- CURRENT TREND: INTERACTIVE VECTOR PATH RAILS --- */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" fill="none" xmlns="http://w3.org">
              {/* Static background trace guide */}
              <path d="M 10% 0 L 90% 0 A 32 32 0 0 1 93% 32 L 93% 284 A 32 32 0 0 1 90% 316 L 10% 316" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
              {/* Active scroll-driven animated path overlay */}
              <motion.path 
                style={{ pathLength }}
                d="M 10% 0 L 90% 0 A 32 32 0 0 1 93% 32 L 93% 284 A 32 32 0 0 1 90% 316 L 10% 316" 
                stroke="url(#gradient-line)" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2b4c9a" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#4f7cff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* --- TIER 01 TRACK (01 -> 05) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {tierOne.map((item, idx) => (
              <ProcessCard key={item.number} item={item} index={idx} isTopTier={true} />
            ))}
          </div>

          {/* --- TIER 02 TRACK (10 <- 06) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {tierTwo.map((item, idx) => (
              <ProcessCard key={item.number} item={item} index={idx} isTopTier={false} />
            ))}
          </div>

        </div>

      </div>
    </section>




      {/* PROCESS SECTION */}
      <section className="relative py-24 bg-white">

        <div className="container px-6 mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase">
              How It Works
            </p>

            <h2 className="mt-6 text-5xl font-black text-[#10204b]">
              Powerful Features.
              <span className="text-[#2b4c9a]"> Simple Process.</span>
            </h2>

            <p className="mt-5 text-lg text-gray-500">
              Everything needed to manage software licenses efficiently.
            </p>

          </div>

          <div className="grid md:grid-cols-5 gap-6 mt-20">

            {steps.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="relative bg-white border border-[#EEF2FF] rounded-3xl p-8 shadow-[0_20px_60px_rgba(43,76,154,0.05)]"
              >

                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-[#2b4c9a] text-white text-sm font-bold flex items-center justify-center">
                  {item.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* DASHBOARD SECTION */}
      <section
        id="features"
        className="relative py-24 bg-[#F8FAFF]"
      >

        <div className="container px-6 mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>

              <Image
                src="/images/dashboard-preview.png"
                alt="Dashboard"
                width={1000}
                height={700}
                className="relative z-10 rounded-3xl shadow-[0_30px_80px_rgba(43,76,154,0.12)]"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase">
                Smarter Licensing
              </p>

              <h2 className="mt-6 text-5xl font-black leading-tight text-[#10204b]">
                Everything You Need
                <span className="text-[#2b4c9a]"> For License Control</span>
              </h2>

              <div className="space-y-8 mt-10">

                {[
                  "Advanced encrypted validation system",
                  "Custom key creation with rules",
                  "Realtime monitoring & tracking",
                  "Scalable architecture for enterprise use",
                ].map((item, index) => (
                  <div key={index} className="flex gap-5">

                    <div className="w-14 h-14 rounded-2xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center shrink-0">
                      <ShieldCheck size={26} />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-[#1a2e5e]">
                        {item}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        Premium enterprise-grade licensing management system.
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-24 bg-white">

        <div className="container px-6 mx-auto">

          <div className="bg-[#F8FAFF] border border-[#EEF2FF] rounded-[40px] p-10 lg:p-16">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                <div className="w-28 h-28 rounded-[32px] bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  <Mail size={48} />
                </div>

                <h2 className="mt-8 text-5xl font-black leading-tight text-[#10204b]">
                  Have Questions?
                  <span className="text-[#2b4c9a]"> We’re Here To Help!</span>
                </h2>

                <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                  Reach out to our team for licensing management solutions,
                  integrations, and enterprise support.
                </p>

              </div>

              {/* FORM */}
              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 px-5 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-14 px-5 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-14 px-5 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-5 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <button
                  className="w-full h-14 rounded-xl bg-[#2b4c9a] text-white font-semibold hover:bg-[#1f3d84] transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


interface ProcessCardProps {
  item: { 
    number: string; 
    title: string; 
    desc: string; 
    icon: React.ReactNode; // Changed from 'string' to 'React.ReactNode'
  };
  index: number;
  isTopTier: boolean;
}


function ProcessCard({ item, index, isTopTier }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative bg-white border border-slate-200/70 rounded-2xl p-6 shadow-[0_2px_8px_rgba(15,23,42,0.01),0_16px_48px_-12px_rgba(15,23,42,0.03)] hover:shadow-[0_30px_64px_-12px_rgba(43,76,154,0.1)] hover:border-slate-300/80 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
    >
      <div>
        <div className="flex items-center justify-between w-full">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-sm group-hover:bg-[#EEF4FF] group-hover:border-[#c7d2fe]/40 transition-colors duration-300">
            {item.icon}
          </div>
          
          <div className="text-[10px] tracking-widest font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md group-hover:text-[#2b4c9a] group-hover:bg-[#EEF4FF] transition-colors duration-300">
            STEP_/{item.number}
          </div>
        </div>

        <h3 className="mt-6 text-lg font-bold text-[#10204b] tracking-tight group-hover:text-[#2b4c9a] transition-colors duration-300">
          {item.title}
        </h3>
        
        <p className="mt-2.5 text-xs text-slate-500 leading-relaxed font-normal">
          {item.desc}
        </p>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-50 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4f7cff]"></span>
        <span className="text-[9px] font-mono font-medium tracking-wider text-slate-400 uppercase">Initialize entitlement</span>
      </div>

      <div className={`hidden lg:block absolute left-12 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#2b4c9a] group-hover:scale-110 transition-all duration-300 z-20 ${
        isTopTier ? "-top-1.5" : "-bottom-1.5"
      }`} />
    </motion.div>
  );
}
