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
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

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
                Contact Us
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
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
                src="/images/contact-us-banner(1).png"
                alt="Contact"
                className="h-[200px] sm:h-[350px] md:h-[320px] lg:h-[320px] w-auto max-w-full object-contain"
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

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3B82F6] text-xs font-semibold uppercase">
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

                <button className="group w-full px-6 py-3 rounded-xl bg-[#2b4c9a] text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-[0_20px_40px_rgba(59,130,246,0.25)]">
                  Send Message
                </button>


              </form>

            </motion.div>

            {/* RIGHT - CONTACT INFO */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#3B82F6] text-xs font-semibold uppercase">
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

                      <div className="w-14 h-14 rounded-xl bg-[#2b4c9a] flex items-center justify-center text-white shadow-lg">
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

      <div className="container mx-auto bg-[#1a2e5e] rounded-2xl border border-[#dbe7ff] p-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {[
            {
              icon: <Clock3 size={30} />,
              title: "Quick Response",
              text: "We respond within 24 hours guaranteed.",
            },
            {
              icon: <Users size={30} />,
              title: "Expert Team",
              text: "Our experts are ready to help you grow.",
            },
            {
              icon: <ShieldCheck size={30} />,
              title: "Secure & Trusted",
              text: "Your data is 100% safe and confidential.",
            },
            {
              icon: <Target size={30} />,
              title: "Results Driven",
              text: "We focus on strategies that deliver results.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >

              {/* ICON */}
              <div className="w-16 h-16 rounded-xl mx-auto bg-white flex items-center justify-center text-[#1a2e5e] shadow-lg">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-5 text-xl font-bold text-[#FFFFFF]">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="mt-3 text-gray-300 leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>

        {/* MAP SECTION */}
        <section className="bg-[#EEF4FF] py-10">

        <div className="container mx-auto overflow-hidden rounded-2xl border border-[#dbe7ff] shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117421.67139215356!2d72.45714186361182!3d23.020497753422073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f66b0d1b93%3A0x3c0d3bdbfbb27417!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            ></iframe>

        </div>

        </section>

        <section className="bg-[#EEF4FF] px-6 md:px-10 lg:px-16 pb-20">

        <div className="container mx-auto">

            <div className="bg-white rounded-3xl overflow-hidden border border-[#dbe7ff] shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

            <div className="grid lg:grid-cols-[70%_30%] items-center">

                {/* LEFT SIDE - MAP */}
                <div className="relative h-full">

                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117421.67139215356!2d72.45714186361182!3d23.020497753422073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f66b0d1b93%3A0x3c0d3bdbfbb27417!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                ></iframe>

                {/* LOCATION PIN */}
                <div className="absolute top-[42%] left-[48%]">

                    {/* PING */}
                    <span className="absolute inset-0 w-10 h-10 rounded-full bg-blue-500/30 animate-ping"></span>

                    {/* PIN */}
                    <div className="relative w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.4)]">

                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                        d="M12 21C12 21 19 13.5 19 8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5C5 13.5 12 21 12 21Z"
                        fill="white"
                        />
                    </svg>

                    </div>

                </div>
                </div>

                {/* RIGHT SIDE - CONTENT */}
                <div className="px-8">

                {/* TAG */}
                <p className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/10 text-[#2563EB] text-xs font-semibold uppercase tracking-[0.2em]">
                    Our Location
                </p>

                {/* HEADING */}
                <h2 className="mt-5 text-3xl md:text-4xl font-bold text-[#1a2e5e] leading-tight">
                    Visit Our <span className="text-[#2563EB]">Office</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                    We'd love to meet you in person! Feel free to visit our office
                    for a coffee and a chat about your project.
                </p>

                {/* FEATURES */}
                <div className="mt-8 space-y-5">

                    {[
                    "Easy to reach location",
                    "Modern & comfortable workspace",
                    "Parking available",
                    "Near metro station",
                    ].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4"
                    >

                        {/* ICON */}
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shrink-0">

                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>

                        </div>

                        <p className="text-gray-700 font-medium">
                        {item}
                        </p>

                    </div>
                    ))}

                </div>

                </div>

            </div>

            </div>

        </div>

        </section>
        

    </main>
  );
}