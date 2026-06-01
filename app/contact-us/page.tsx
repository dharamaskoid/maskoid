"use client";

import { motion, Variants } from "framer-motion";
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

  const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
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

      <section className="py-20 md:px-10 lg:px-16">

        <div className="container px-6 mx-auto">

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

              <h2 className="mt-6 text-4xl font-bold text-[#1a2e5e]">
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
                    className="py-3 px-6 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="py-3 px-6 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="py-3 px-6 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="py-3 px-6 rounded-xl bg-white border border-[#dbe7ff] outline-none focus:border-[#2b4c9a]"
                  />

                </div>

                <textarea
                  rows={3}
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

              <h2 className="mt-6 text-4xl font-bold text-[#1a2e5e]">
                Get In 
                <span className="text-[#2b4c9a]">Touch</span>
              </h2>

              <div className="mt-16 grid lg:grid-cols-2 gap-10">
                {[
                  {
                    icon: Phone,
                    title: "Speak With Our Team",
                    links: [
                      {
                        label: "+91 757 408 4008",
                        href: "tel:+917574084008",
                      },
                      {
                        label: "+91 989 829 2466",
                        href: "tel:+919898292466",
                      },
                    ],
                  },

                  {
                    icon: Mail,
                    title: "Connect By Email",
                    links: [
                      {
                        label: "contact@maskoid.com",
                        href: "mailto:contact@maskoid.com",
                      },
                      {
                        label: "hr@maskoid.com",
                        href: "mailto:hr@maskoid.com",
                      },
                    ],
                  },

                  {
                    icon: MapPin,
                    title: "Our Headquarters",
                    links: [
                      {
                        label:
                          "1008, One Indiabulls Park, Jetalpur Rd, Vadodara, Gujarat 390020, India",
                        href: "https://maps.app.goo.gl/uVC6SBroFSnLynf77",
                      },
                    ],
                  },

                  {
                    icon: Headphones,
                    title: "Client Success Desk",
                    links: [
                      {
                        label: "Monday – Saturday | 10 AM – 7 PM",
                      },
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 border border-[#dbe7ff] shadow-[0_10px_40px_rgba(59,89,152,0.06)]"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#2b4c9a] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <item.icon size={24} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1a2e5e]">
                          {item.title}
                        </h3>

                        <div className="mt-3 space-y-2">
                          {item.links.map((link, i) =>
                            "href" in link ?  (
                              <a
                                key={i}
                                href={link.href}
                                target={
                                  link.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel="noopener noreferrer"
                                className="block text-[#5B6475] hover:text-[#2b4c9a] transition-colors duration-300 leading-relaxed"
                              >
                                {link.label}
                              </a>
                            ) : (
                              <p
                                key={i}
                                className="text-[#5B6475] leading-relaxed"
                              >
                                {link.label}
                              </p>
                            )
                          )}
                        </div>
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
       {/* <section className="bg-[#EEF4FF] py-10">

        <div className="container mx-auto overflow-hidden rounded-2xl border border-[#dbe7ff] shadow-[0_20px_60px_rgba(43,76,154,0.08)]">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6267.920822954264!2d73.17486261049172!3d22.307488551278368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc890c85ccb85%3A0x79f808e425688eb9!2sMaskoid%20Technologies!5e0!3m2!1sen!2sin!4v1778925243270!5m2!1sen!2sin"
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    >
                    </iframe>

        </div>

        </section>*/}

        <section className="bg-[#EEF4FF] px-6 md:px-10 lg:px-16 py-10">
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(43,76,154,0.08)]"></div>
          <div className="container mx-auto">

              <div className="grid lg:grid-cols-[70%_30%] items-center">

                  {/* LEFT SIDE - MAP */}
                  <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative h-full"
                  >

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6267.920822954264!2d73.17486261049172!3d22.307488551278368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc890c85ccb85%3A0x79f808e425688eb9!2sMaskoid%20Technologies!5e0!3m2!1sen!2sin!4v1778925243270!5m2!1sen!2sin"
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    >
                    </iframe>


                  </motion.div>

                  {/* RIGHT SIDE - CONTENT */}
                  <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="px-8"
                  >

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

                </motion.div>

              </div>

            </div>

        </section>       

    </main>
  );
}