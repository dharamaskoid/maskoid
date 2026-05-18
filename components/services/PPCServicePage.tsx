"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function PPCServicePage() {
  return (
    <main className="bg-[#0b0f1a] text-white overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#0b0f1a] to-[#111a2e]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            High-Performance PPC That Drives Real ROI
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-300 text-base md:text-lg"
          >
            Scale your business with data-driven Google Ads & Meta Ads strategies built for conversions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
              Get Free Audit
            </button>
            <button className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-white hover:text-black transition">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* LOGO SECTION */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="py-12 bg-[#0f172a] border-y border-gray-800 text-center"
      >
        <motion.p variants={fadeUp} className="text-gray-400 mb-6">
          Trusted by Growing Businesses
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70 px-6">
          {["Google", "Meta", "Shopify", "Amazon", "HubSpot", "WordPress"].map(
            (logo, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-gray-300 font-semibold"
              >
                {logo}
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* WHAT WE OFFER */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            What We Offer
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 mt-3">
            Complete PPC management solutions
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Google Ads Management",
              "Meta Ads Campaigns",
              "Landing Page Optimization",
              "Keyword Research",
              "Conversion Tracking",
              "Remarketing Ads",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-[#111a2e] rounded-2xl transition"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  ROI-focused PPC execution for maximum conversions.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OUR SOLUTION */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our PPC Strategy
            </h2>

            <p className="text-gray-400 mt-4">
              We optimize every click using smart bidding, audience targeting, and continuous testing.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>✔ Advanced targeting system</li>
              <li>✔ AI-driven bidding strategies</li>
              <li>✔ A/B tested ad creatives</li>
              <li>✔ Conversion-focused optimization</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="h-72 bg-[#111a2e] rounded-2xl flex items-center justify-center text-gray-400"
          >
            Ad Performance Dashboard
          </motion.div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "ROI Focused",
              "Certified Experts",
              "Transparent Reporting",
              "24/7 Support",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="p-6 bg-[#111a2e] rounded-xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-[#0f172a]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {["Research", "Strategy", "Setup", "Optimize", "Scale"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-[#111a2e] rounded-xl"
                >
                  {step}
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            Technologies We Use
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "Google Ads",
              "Meta Ads",
              "Google Analytics",
              "Tag Manager",
              "SEMrush",
              "Ahrefs",
            ].map((tech, i) => (
              <motion.span
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-[#111a2e] rounded-full text-sm text-gray-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-24 px-6 bg-gradient-to-t from-[#0b0f1a] to-[#111a2e]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold">
            Get In Touch
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 mt-3">
            Let’s build high-converting PPC campaigns for your business.
          </motion.p>

          <motion.form variants={container} className="mt-10 grid gap-4">
            <motion.input
              variants={fadeUp}
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#0b0f1a] border border-gray-700"
            />

            <motion.input
              variants={fadeUp}
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-[#0b0f1a] border border-gray-700"
            />

            <motion.textarea
              variants={fadeUp}
              rows={4}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-[#0b0f1a] border border-gray-700"
            />

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

    </main>
  );
}