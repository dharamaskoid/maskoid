"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';
import { motion,  useScroll, useTransform } from "framer-motion";
import ProcessChart from "@/components/VariableProcessChart";
import {
  ShieldCheck,
  Mail,
} from "lucide-react";

import {
  FaPrint,
  FaNetworkWired,
  FaFileAlt,
  FaStar,
  FaMobileAlt,
  FaSmile,
} from "react-icons/fa";

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

const features = [
  {
    icon: <FaPrint />,
    title: "A4 To A0 Size",
    sub: "A4 to A0 Size Black & White Print",
    tag: "+ Printing Software",
  },
  {
    icon: <FaNetworkWired />,
    title: "Copier / Network Printer / Scanner",
    sub: "Printing Software",
  },
  {
    icon: <FaFileAlt />,
    title: "Plain Copier / Printer / Scanner",
    sub: "Printing Software",
  },
  {
    icon: <FaStar />,
    title: "Excellent Service",
    sub: "Excellent Service Supports",
    tag: "Service & Manuals",
  },
  {
    icon: <FaMobileAlt />,
    title: "Also Use In Small Printing",
    sub: "Printing Software",
  },
  {
    icon: <FaSmile />,
    title: "User Friendly Software",
    sub: "Software",
  },
];

export default function VariableDataPrintingSoftwarePage() {


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
                Smart Printing • Dynamic Data • Enterprise Ready
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Variable Data
                <span className="block text-[#6EA8FF]">
                  Printing Software
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
              className="relative flex items-center justify-center min-h-[320px]"
            >

              {/* Glow Background */}
              <div className="absolute w-[320px] h-[320px] bg-[#2b4c9a]/20 blur-[120px] rounded-full" />

              {/* Floating Dots */}
              {[
                { w: 8, h: 8, t: "12%", l: "5%" },
                { w: 6, h: 6, t: "40%", l: "2%" },
                { w: 10, h: 10, b: "18%", l: "6%" },
                { w: 8, h: 8, t: "8%", r: "4%" },
                { w: 10, h: 10, b: "25%", r: "3%" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/40"
                  style={{
                    width: d.w,
                    height: d.h,
                    top: d.t,
                    left: d.l,
                    right: d.r,
                    bottom: d.b,
                  }}
                />
              ))}

              {/* Main Circle Wrapper */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex items-center justify-center"
              >


                {/* Rings */}
                <div className="absolute w-[280px] h-[280px] border border-white/10 rounded-full" />
                <div className="absolute w-[320px] h-[320px] border border-white/10 rounded-full" />
                

                {/* Printer Image */}
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/images/variable.png"
                  alt="Variable Data Printing Software"
                  className="relative z-20 w-[320px] lg:w-[380px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>      
      

        <ProcessChart/>

      {/* FEATURES SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">

        {/* Background Blobs */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[260px] h-[260px] bg-pink-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">


        {/* HEADER */}
         <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase">
            Variable Data Printing Software
          </p>

          <h2 className="mt-6 text-4xl md:text-4xl font-black text-[#1a2e5e] leading-tight">
            Variable Data Printing 
            <span className="text-[#2b4c9a]"> Software</span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-[#5c6b8a]">
            Powerful variable data printing solution for personalized printing,
              barcode generation, QR codes, invoices, labels, and production workflows.
          </p>
        </div>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* LEFT FEATURES */}
            <div className="space-y-6">
              {features.slice(0, 3).map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                  "
                >
                  <div className="flex gap-4 items-start">
                    <div className="
                      w-14 h-14
                      rounded-xl
                      bg-[#EEF4FF]
                      text-[#2b4c9a]
                      flex items-center justify-center
                      text-xl
                    ">
                      {f.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#1a2e5e]">
                        {f.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {f.sub}
                      </p>

                      {f.tag && (
                        <span className="
                          inline-block
                          mt-3
                          px-3 py-1
                          rounded-full
                          bg-blue-50
                          text-[#2b4c9a]
                          text-xs
                          font-medium
                        ">
                          {f.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CENTER IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              {/* Glow */}
              <div className="
                absolute

                bg-blue-500/10
                rounded-full
                blur-3xl
              " />

              

              <motion.img
                
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/images/variable.png"
                alt="Variable Data Printer"
                className="
                  relative
                  z-10
                  object-contain
                "
              />
            </motion.div>

            {/* RIGHT FEATURES */}
            <div className="space-y-6">
              {features.slice(3).map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                  "
                >
                  <div className="flex gap-4 items-start">
                    <div className="
                      w-14 h-14
                      rounded-xl
                      bg-[#EEF4FF]
                      text-[#2b4c9a]
                      flex items-center justify-center
                      text-xl
                    ">
                      {f.icon}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#1a2e5e]">
                        {f.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {f.sub}
                      </p>

                      {f.tag && (
                        <span className="
                          inline-block
                          mt-3
                          px-3 py-1
                          rounded-full
                          bg-blue-50
                          text-[#2b4c9a]
                          text-xs
                          font-medium
                        ">
                          {f.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

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

      {/*Contact us */}            
      <section className="relative py-16 bg-white overflow-hidden">

        {/* BACKGROUND GRADIENT BLOBS */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-100/40 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-100/40 blur-[120px] rounded-full"
        />

        <div className="container px-6 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{
              y: -5,
            }}
            className="
              relative
              bg-[#1a2e5e]
              border border-[#EEF2FF]/10
              rounded-2xl
              p-10
              lg:p-16
              overflow-hidden
              shadow-[0_30px_80px_rgba(26,46,94,0.18)]
              transition-all duration-500
            "
          >

            {/* TOP LIGHT */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {/* FLOATING GLOW */}
            <motion.div
              animate={{
                rotate: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                {/* ICON */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="
                    relative
                    w-28 h-28 rounded-xl
                    bg-[#EEF4FF]
                    text-[#2b4c9a]
                    flex items-center justify-center
                    overflow-hidden
                    shadow-[0_20px_50px_rgba(255,255,255,0.12)]
                  "
                >

                  {/* ICON SHINE */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-white/50
                      to-transparent
                      skew-x-12
                    "
                  />

                  <Mail size={48} className="relative z-10" />
                </motion.div>

                {/* HEADING */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mt-8 text-5xl font-black leading-tight text-white"
                >
                  Have Questions?
                  <span className="text-[#6EA8FF]">
                    {" "}We’re Here To Help!
                  </span>
                </motion.h2>

                {/* TEXT */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  className="mt-6 text-lg text-[#B7C2D8] leading-relaxed max-w-lg"
                >
                  Reach out to our team for licensing management solutions,
                  integrations, and enterprise support.
                </motion.p>

              </motion.div>

              {/* FORM */}
              <motion.form
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-5"
              >
                  {/* Hidden Fields */}
                <input
                  type="hidden"
                  name="project"
                  value="Variable Data Printing Software"
                />

                <input
                  type="hidden"
                  name="page"
                  value={
                    typeof window !== "undefined"
                      ? window.location.pathname
                      : ""
                  }
                />

                <input
                  type="hidden"
                  name="url"
                  value={
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  }
                />

                {[
                  "Your Name",
                  "Your Email",
                  "Phone Number",
                ].map((item, i) => (
                  <motion.input
                    key={i}
                    type="text"
                    placeholder={item}
                    whileFocus={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileHover={{
                      scale: 1.01,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      w-full py-3 px-6 rounded-xl
                      border border-[#dce7ff]
                      bg-white outline-none
                      focus:ring-2 focus:ring-[#6EA8FF]
                      transition-all duration-300
                    "
                  />
                ))}

                <motion.textarea
                  rows={3}
                  placeholder="Your Message"
                  whileFocus={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileHover={{
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    w-full p-5 rounded-xl
                    border border-[#dce7ff]
                    bg-white outline-none
                    focus:ring-2 focus:ring-[#6EA8FF]
                    transition-all duration-300
                  "
                />

                {/* BUTTON */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    relative
                    overflow-hidden
                    w-full py-3 px-6 rounded-xl
                    bg-[#2b4c9a]
                    text-white font-semibold
                    hover:bg-[#1f3d84]
                    transition-all duration-500
                    hover:shadow-[0_15px_40px_rgba(43,76,154,0.35)]
                  "
                >

                  <span className="relative z-10">
                    Send Message
                  </span>

                  {/* BUTTON SHINE */}
                  <motion.div
                    animate={{
                      x: ["-120%", "150%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "linear",
                    }}
                    className="
                      absolute top-0 left-0
                      w-full h-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                      skew-x-12
                    "
                  />
                </motion.button>

              </motion.form>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

