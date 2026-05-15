"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Rocket,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function OurValuesSection() {
  const values = [
    {
      icon: (
        <ShieldCheck
          className="text-[#2b4c9a]"
          size={40}
          strokeWidth={2}
        />
      ),
      title: "Integrity",
      description:
        "We believe in honesty, transparency, and building real relationships.",
    },
    {
      icon: (
        <Rocket
          className="text-[#2b4c9a]"
          size={40}
          strokeWidth={2}
        />
      ),
      title: "Performance",
      description:
        "We focus on measurable results and long-term growth.",
    },
    {
      icon: (
        <Lightbulb
          className="text-[#2b4c9a]"
          size={40}
          strokeWidth={2}
        />
      ),
      title: "Innovation",
      description:
        "We stay ahead with creative ideas and modern technology.",
    },
    {
      icon: (
        <Users
          className="text-[#2b4c9a]"
          size={40}
          strokeWidth={2}
        />
      ),
      title: "Partnership",
      description:
        "We grow when our clients grow.",
    },
    {
      icon: (
        <Target
          className="text-[#2b4c9a]"
          size={40}
          strokeWidth={2}
        />
      ),
      title: "Accountability",
      description:
        "We stay committed and deliver on promises.",
    },
  ];

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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

  return (
    <section className="py-16 px-6 md:px-8 lg:px-16 bg-[#EEF2FF] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-full mb-4">
            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              OUR VALUE
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
            The Principles That {" "}
            <span className="text-[#2b4c9a]">Drive Everything</span> We Do
          </h2>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`text-center relative px-4 py-6 rounded-2xl transition-all duration-300
              hover:bg-white hover:shadow-[0_20px_60px_rgba(43,76,154,0.08)]
              ${
                index !== values.length - 1
                  ? "lg:border-r lg:border-[#dbe7ff]"
                  : ""
              }`}
            >
              {/* ICON */}
              <div className="flex justify-center mb-5">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-[#dbe7ff] flex items-center justify-center"
                >
                  {value.icon}
                </motion.div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}