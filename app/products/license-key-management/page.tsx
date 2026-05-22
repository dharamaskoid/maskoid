"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';
import { motion,  useScroll, useTransform } from "framer-motion";
import ProcessChart from "@/components/ProcessChart";
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

<ProcessChart/>

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

