"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Headphones,
  ShieldCheck,
  Users,
  Target,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <main className="bg-[#EEF4FF] overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="relative bg-[#06142E] text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

        </div>

        <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >

              <p className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em]">
                Contact Us
              </p>

              <h1 className="mt-7 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                Let’s Build Something
                <span className="block text-[#6EA8FF]">
                  Amazing Together
                </span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                Have a project in mind? We’d love to hear about it.
                Reach out to us and let’s create something extraordinary
                that drives real growth.
              </p>



            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
            >

            {/* BACKGROUND GRADIENT SHAPES */}
            <div className="absolute inset-0 flex items-center justify-center">

                {/* MAIN SOFT BLOB */}
                <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute w-[420px] h-[420px] bg-gradient-to-br from-[#3B82F6]/20 via-[#6EA8FF]/10 to-transparent rounded-full blur-3xl"
                />

                {/* TOP RIGHT LIGHT */}
                <motion.div
                animate={{
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-10 right-10 w-[220px] h-[220px] bg-[#6EA8FF]/20 rounded-full blur-3xl"
                />

                {/* BOTTOM LEFT LIGHT */}
                <motion.div
                animate={{
                    x: [-8, 8, -8],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-10 left-10 w-[180px] h-[180px] bg-[#2b4c9a]/30 rounded-full blur-3xl"
                />

                {/* DOTTED PATTERN */}
                <motion.div
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-16 right-0 w-32 h-32 opacity-20"
                >
                <div className="w-full h-full bg-[radial-gradient(#6EA8FF_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
                </motion.div>

                {/* CURVE LINE */}
                <motion.div
                animate={{
                    rotate: [0, 8, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-14 right-8 w-40 h-40 border border-dashed border-[#6EA8FF]/30 rounded-full"
                />
            </div>

            {/* IMAGE */}
            <motion.div
                animate={{
                y: [0, -14, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
                }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                }}
                whileHover={{
                scale: 1.03,
                }}
                className="relative z-10"
            >
                <img
                src="/images/contact-envelope.png"
                alt="Contact Illustration"
                className="w-full max-w-[500px] object-contain drop-shadow-[0_30px_80px_rgba(37,99,235,0.35)]"
                />
            </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CONTACT SECTION */}
      {/* ================================================= */}

      <section className="py-20 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT - FORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                Send Us A Message
              </p>

              <h2 className="mt-6 text-4xl font-bold text-[#102347]">
                We’d Love To Hear From You
              </h2>

              <p className="mt-4 text-[#5B6475] leading-relaxed">
                Fill out the form and our team will get back to you
                as soon as possible.
              </p>

              <form className="mt-10 space-y-5">

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 px-5 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 px-5 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 px-5 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="h-14 px-5 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                </div>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-5 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a] resize-none"
                ></textarea>

                <button className="group w-full h-14 rounded-xl bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff] text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(59,130,246,0.25)]">

                  Send Message

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

                <div className="flex items-center gap-2 text-sm text-[#5B6475]">
                  <ShieldCheck size={16} />
                  Your information is safe with us. We don’t share your data.
                </div>

              </form>

            </motion.div>

            {/* RIGHT - CONTACT INFO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                Contact Information
              </p>

              <h2 className="mt-6 text-4xl font-bold text-[#102347]">
                Get In <span className="text-[#2b4c9a]">Touch</span>
              </h2>

              <div className="mt-10 space-y-5">

                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    text: "+91 78747 14688",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    text: "hello@maskoid.com",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    text: "123 Digital Street, Mumbai, India",
                  },
                  {
                    icon: Headphones,
                    title: "Support",
                    text: "Mon - Fri, 10:00 AM - 7:00 PM",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-[#dbe7ff] shadow-[0_10px_40px_rgba(59,89,152,0.06)]"
                  >

                    <div className="flex items-start gap-5">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff] flex items-center justify-center text-white shadow-lg">
                        <item.icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#102347]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[#5B6475] leading-relaxed">
                          {item.text}
                        </p>
                      </div>

                    </div>

                  </motion.div>
                ))}

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="pb-20 px-6 md:px-10 lg:px-16">

        <div className="container mx-auto bg-white rounded-[32px] border border-[#dbe7ff] p-10">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                title: "Quick Response",
                text: "We respond within 24 hours guaranteed.",
              },
              {
                title: "Expert Team",
                text: "Our experts are ready to help you grow.",
              },
              {
                title: "Secure & Trusted",
                text: "Your data is 100% safe and confidential.",
              },
              {
                title: "Results Driven",
                text: "We focus on strategies that deliver results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >

                <div className="w-16 h-16 rounded-2xl mx-auto bg-gradient-to-r from-[#2b4c9a] to-[#4f7cff] flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck size={26} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#102347]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#5B6475] leading-relaxed">
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