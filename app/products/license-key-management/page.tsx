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
                src="/images/Banner Web.png"
                alt="Contact"
                className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>      
      

    <ProcessChart/>

      {/* DASHBOARD SECTION */}
      <section id="features" className="relative py-16 bg-[#F8FAFF]">
          <div className="container px-6 mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"
                />

                <motion.div
                  whileHover={{
                    y: -8,
                    rotate: -1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src="/images/license-key2.png"
                    alt="Dashboard"
                    width={1000}
                    height={700}
                    className="relative z-10 rounded-3xl shadow-[0_30px_80px_rgba(43,76,154,0.12)]"
                  />
                </motion.div>

              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2b4c9a] mr-2 animate-pulse" />
                  Smarter Licensing
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="mt-6 text-4xl font-black leading-tight text-[#10204b]"
                >
                  Everything You Need
                  <span className="relative inline-block text-[#2b4c9a]">

                    {" "}For License Control

                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className="absolute left-0 bottom-1 h-[8px] bg-blue-200/50 rounded-full -z-10"
                    />

                  </span>
                </motion.h2>

                <div className="space-y-8 mt-10">

                  {[
                    "Advanced encrypted validation system",
                    "Custom key creation with rules",
                    "Realtime monitoring & tracking",
                    "Scalable architecture for enterprise use",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + index * 0.15,
                        duration: 0.6,
                      }}
                      whileHover={{ x: 8 }}
                      className="flex gap-5"
                    >

                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-14 h-14 rounded-xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center shrink-0 shadow-sm"
                      >
                        <ShieldCheck size={26} />
                      </motion.div>

                      <div>

                        <h3 className="text-xl font-bold text-[#1a2e5e]">
                          {item}
                        </h3>

                        <p className="mt-2 text-gray-500">
                          Premium enterprise-grade licensing management system.
                        </p>

                      </div>

                    </motion.div>
                  ))}

                </div>

              </motion.div>

            </div>

          </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-16 bg-white">

        <div className="container px-6 mx-auto">

          <div className="bg-[#1a2e5e] border border-[#EEF2FF] rounded-2xl p-10 lg:p-16">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                <div className="w-28 h-28 rounded-xl bg-[#EEF4FF] text-[#2b4c9a] flex items-center justify-center">
                  <Mail size={48} />
                </div>

                <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                  Have Questions?
                  <span className="text-[#6EA8FF]"> We’re Here To Help!</span>
                </h2>

                <p className="mt-6 text-lg text-[#B7C2D8] leading-relaxed max-w-lg">
                  Reach out to our team for licensing management solutions,
                  integrations, and enterprise support.
                </p>

              </div>

              {/* FORM */}
              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full py-3 px-6 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full py-3 px-6 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full py-3 px-6 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <textarea
                  rows={3}
                  placeholder="Your Message"
                  className="w-full p-5 rounded-xl border border-[#dce7ff] bg-white outline-none"
                />

                <button
                  className="w-full py-3 px-6 rounded-xl bg-[#2b4c9a] text-white font-semibold hover:bg-[#1f3d84] transition"
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

