"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Users,
  Target,
} from "lucide-react";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <main className="bg-[#EEF4FF] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#06142E] text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>

          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl">
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
                Let’s create a premium digital experience that drives
                growth and delivers results.
              </p>

              {/* FEATURES */}
              <div className="mt-10 grid sm:grid-cols-3 gap-5">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Clock3 size={20} className="text-[#6EA8FF]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      Quick Reply
                    </h4>

                    <p className="text-xs text-[#B7C2D8]">
                      Within 24 Hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Users size={20} className="text-[#6EA8FF]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      Expert Team
                    </h4>

                    <p className="text-xs text-[#B7C2D8]">
                      Growth Focused
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Target size={20} className="text-[#6EA8FF]" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm">
                      Results Driven
                    </h4>

                    <p className="text-xs text-[#B7C2D8]">
                      ROI Focused
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >

              <div className="absolute -inset-4 bg-gradient-to-r from-[#2b4c9a]/30 to-blue-500/10 blur-3xl rounded-[40px]"></div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >

                <img
                  src="/images/contact-hero.jpg"
                  alt="Contact"
                  className="w-full h-[320px] sm:h-[400px] lg:h-[500px] object-cover"
                />

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-20 px-6 md:px-10 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* FORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-[#dbe7ff] shadow-[0_20px_60px_rgba(59,89,152,0.08)]"
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
                Send Message
              </p>

              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#102347]">
                We’d Love To Hear From You
              </h2>

              <p className="mt-4 text-[#5B6475] leading-relaxed">
                Fill out the form and our team will get back to you soon.
              </p>

              <form className="mt-10 space-y-5">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 px-5 rounded-xl border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 px-5 rounded-xl border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 px-5 rounded-xl border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="text"
                    placeholder="Project Type"
                    className="h-14 px-5 rounded-xl border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />
                </div>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-5 rounded-xl border border-[#dbe7ff] outline-none focus:border-[#2b4c9a] resize-none"
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
                  Your information is safe with us.
                </div>

              </form>

            </motion.div>

            {/* INFO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >

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
                  text: "Vadodara, Gujarat, India",
                },
                {
                  icon: Headphones,
                  title: "Support",
                  text: "Mon - Fri, 10AM - 7PM",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                  }}
                  className="bg-white rounded-[28px] p-7 border border-[#dbe7ff] shadow-[0_20px_60px_rgba(59,89,152,0.08)]"
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

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="pb-20 px-6 md:px-10 lg:px-16">

        <div className="max-w-7xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] bg-[#071B3B] px-8 md:px-14 py-14"
          >

            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

              <div>
                <p className="text-[#6EA8FF] uppercase tracking-[0.2em] text-xs font-semibold">
                  Ready To Grow?
                </p>

                <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-white">
                  Let’s Create Something Incredible
                </h2>
              </div>

              <button className="h-14 px-8 rounded-xl bg-white text-[#1a2e5e] font-semibold hover:scale-[1.03] transition-all duration-300">
                Book Free Consultation
              </button>

            </div>

          </motion.div>

        </div>

      </section>
    </main>
  );
}