"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Target,
  MousePointerClick,
  BarChart3,
  Megaphone,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Globe,
  Layers3,
  Code2,
  PenTool,
  Database,
} from "lucide-react";

/* ANIMATIONS (same system as your Web page) */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

/* DATA */
const solutions = [
  {
    icon: <Target size={34} />,
    title: "Google Ads Campaigns",
    text: "High-converting search & display campaigns for instant leads.",
  },
  {
    icon: <MousePointerClick size={34} />,
    title: "Meta Ads (Facebook/Instagram)",
    text: "Targeted social campaigns that increase engagement & sales.",
  },
  {
    icon: <BarChart3 size={34} />,
    title: "Conversion Tracking",
    text: "Track every click, lead, and conversion with precision analytics.",
  },
  {
    icon: <Megaphone size={34} />,
    title: "Ad Copy Optimization",
    text: "High-performing ad creatives that improve CTR & ROI.",
  },
  {
    icon: <TrendingUp size={34} />,
    title: "ROI Optimization",
    text: "Continuous optimization to reduce cost per lead.",
  },
];

export default function PPCServicePage() {
  return (
    <main className="bg-white overflow-hidden pt-[81.5px]">

      {/* HERO */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6EA8FF]/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <p className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 text-[#6EA8FF] text-xs uppercase">
                PPC Advertising Service
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                High-Converting PPC Campaigns
                <span className="block text-[#6EA8FF]">
                  That Drive ROI
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg max-w-xl">
                We create data-driven PPC strategies that generate leads,
                increase sales, and maximize return on ad spend.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-[#2b4c9a] hover:bg-[#1f3d84] rounded-xl">
                  Get Free Audit
                </button>

                <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition">
                  View Case Study
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl rounded-full"></div>

              <motion.img
                src="/images/ppc.png"
                alt="PPC"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-full max-w-md mx-auto"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 mb-6">Trusted Advertising Partners</p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
            {["Google Ads", "Meta", "Shopify", "Amazon", "HubSpot", "Analytics"].map(
              (item, i) => (
                <div key={i} className="font-semibold text-gray-600">
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl font-bold text-[#1a2e5e]">
            What We Offer
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              "Google Ads Management",
              "Meta Ads Campaigns",
              "Keyword Research",
              "Landing Page Optimization",
              "Retargeting Ads",
              "Performance Tracking",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border rounded-2xl bg-white shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#1a2e5e]">
                  {item}
                </h3>
                <p className="text-gray-500 mt-3 text-sm">
                  Performance-driven PPC execution for better ROI.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR SOLUTION */}
      <section className="py-20 bg-[#EEF2FF]">

        <div className="container mx-auto px-6 text-center">

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-bold text-[#1a2e5e]">
              Our PPC Solutions
            </h2>
            <p className="text-gray-500 mt-4">
              We optimize campaigns for maximum conversions & ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 mt-14">

            {solutions.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="text-[#2b4c9a]">{item.icon}</div>
                <h3 className="mt-4 font-semibold text-[#1a2e5e]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.text}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#1a2e5e] text-white">

        <div className="container mx-auto px-6 text-center">

          <motion.h2 className="text-4xl font-bold">
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {[
              "ROI Focused",
              "Certified Experts",
              "Transparent Reports",
              "24/7 Support",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/10 rounded-xl">
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6">

        <div className="container mx-auto text-center">

          <h2 className="text-4xl font-bold text-[#1a2e5e]">
            Our Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">

            {["Research", "Strategy", "Setup", "Optimize", "Scale"].map(
              (step, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border rounded-xl"
                >
                  {step}
                </div>
              )
            )}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a2e5e] text-white text-center">

        <h2 className="text-4xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="text-[#B7C2D8] mt-4">
          Let’s build a high-performance PPC campaign for you.
        </p>

        <Link
          href="/contact-us"
          className="mt-8 inline-block px-6 py-3 bg-white text-[#1a2e5e] rounded-xl font-semibold"
        >
          Start Your Project
        </Link>

      </section>

    </main>
  );
}