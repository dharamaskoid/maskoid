"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 bg-[#F8FAFF] overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>

        <div className="container px-6 mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.2em]">
                Secure • Reliable • Scalable
              </p>

              <h1 className="mt-7 text-5xl md:text-6xl font-black leading-tight text-[#10204b]">
                License Key
                <span className="text-[#2b4c9a]"> Management</span>
              </h1>

              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                Powerful software license management system to generate,
                validate, track, and manage software licenses securely.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#2b4c9a] text-white font-semibold shadow-lg hover:scale-[1.03] transition"
                >
                  Request Demo
                  <ChevronRight size={18} />
                </Link>

                <Link
                  href="#features"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-[#dce7ff] text-[#2b4c9a] font-semibold hover:bg-[#EEF4FF] transition"
                >
                  Explore Features
                </Link>

              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-3 gap-6 mt-14">

                {[
                  {
                    title: "Secure",
                    desc: "Encrypted validation",
                    icon: <ShieldCheck size={26} />,
                  },
                  {
                    title: "Easy",
                    desc: "Simple management",
                    icon: <LayoutDashboard size={26} />,
                  },
                  {
                    title: "Analytics",
                    desc: "Realtime tracking",
                    icon: <BarChart3 size={26} />,
                  },
                ].map((item, index) => (
                  <div key={index}>

                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-[#EEF2FF] text-[#2b4c9a] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#1a2e5e]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.desc}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full"></div>

              <Image
                src="/images/license-hero.png"
                alt="License Key"
                width={900}
                height={900}
                className="relative z-10"
              />

            </motion.div>

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