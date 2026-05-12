"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="relative bg-[#1a2e5e] text-white overflow-hidden">

      {/* 🌌 GRADIENT TOP BORDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#2A4D9B] to-transparent"></div>

      {/* 🌊 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 w-80 h-80 bg-[#2A4D9B]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#6EA8FF]/20 blur-3xl rounded-full"></div>
      </div>

      {/* ✨ GLASS CONTAINER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container mx-auto px-6 pt-12 pb-6 relative z-10"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">

          {/* BRAND */}
          <motion.div variants={fadeUp}>
            <a href="/" className="flex items-center">
              <Image
                src="/images/Maskoid-Logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="object-contain transition duration-300 hover:scale-110"
                priority
              />
            </a>

            <p className="text-gray-300 mt-5 text-sm leading-relaxed">
              We build high-performance websites and digital growth systems that drive real business results.
            </p>



            <div className="flex gap-4 py-6">

                    {/* Facebook */}
                    <a
                    href="https://www.facebook.com/profile.php?id=100093908435339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:-translate-y-1 transition"
                    >
                    <FaFacebookF />
                    </a>

                    {/* Twitter / X */}
                    <a
                    href="https://twitter.com/TMaskoid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:-translate-y-1 transition"
                    >
                    <FaXTwitter />
                    </a>

                    {/* Instagram */}
                    <a
                    href="https://www.instagram.com/maskoid_technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:-translate-y-1 transition"
                    >
                    <FaInstagram />
                    </a>

                    {/* LinkedIn */}
                    <a
                    href="https://www.linkedin.com/company/maskoid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:-translate-y-1 transition"
                    >
                    <FaLinkedinIn />
                    </a>

                    {/* WhatsApp */}
                    <a
                    href="https://wa.me/917574084008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:-translate-y-1 transition"
                    >
                    <FaWhatsapp />
                    </a>

            </div>

          </motion.div>

          {/* LINKS */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["Home", "About Us", "Services", "Projects", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="relative inline-block hover:text-white transition"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6EA8FF] transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {["Social Media Marketing", "SEO Service", "PPC Service", "Web Design", "Web Development"].map((item, i) => (
                <li
                key={i}
                className="group cursor-pointer"
                >
                <span className="inline-block group-hover:text-white text-gray-300">
                    {item}
                </span>
                </li>
              ))}
            </ul>
          </motion.div>

        <motion.div variants={fadeUp}>
        <h3 className="font-semibold mb-4 text-white">Get in Touch</h3>

        <div className="space-y-3 text-sm">

            <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-2">
            <span className="text-gray-300">USA</span>
            <div className="text-right text-gray-300 space-x-2">
                <a href="tel:+17867721488" className="hover:text-white">+1 786 772 1488</a>
                <span className="text-gray-600">•</span>
                <a href="tel:+17869612992" className="hover:text-white">961 2992</a>
            </div>
            </div>

            <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-2">
            <span className="text-gray-300">Texas</span>
            <a href="tel:+18722034220" className="text-gray-300 hover:text-white">
                +1 872 203 4220
            </a>
            </div>

            <div className="flex items-start justify-between gap-2 border-b border-white/5 pb-2">
            <span className="text-gray-300">Australia</span>
            <a href="tel:+61420201910" className="text-gray-300 hover:text-white">
                +61 420 201 910
            </a>
            </div>

            <div className="flex items-start justify-between gap-2">
            <span className="text-gray-300">Bahrain</span>
            <a href="tel:+97333232707" className="text-gray-300 hover:text-white">
                +973 3323 2707
            </a>
            </div>

        </div>
        </motion.div>

        <motion.div variants={fadeUp}>
        <h3 className="font-semibold mb-4 text-white">Contact</h3>

        <div className="space-y-3 text-sm">

            <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-300">India</span>
            <div className="text-right text-gray-300 space-x-2">
                <a href="tel:+917574084008" className="hover:text-white">757 408 4008</a>
                <span className="text-gray-600">•</span>
                <a href="tel:+919898292466" className="hover:text-white">989 829 2466</a>
            </div>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-300">Sales</span>
            <a href="tel:+919510566027" className="text-gray-300 hover:text-white">
                951 056 6027
            </a>
            </div>

            <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-300">Careers</span>
            <a href="tel:+16479786476" className="text-gray-300 hover:text-white">
                +1 647 978 6476
            </a>
            </div>

            <div className="flex justify-between">
            <span className="text-gray-300">Email</span>
            <a
                href="mailto:contact@maskoid.com"
                className="text-[#6EA8FF] hover:text-white"
            >
                contact@maskoid.com
            </a>
            </div>

        </div>
        </motion.div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="mt-14 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* BOTTOM */}
        <div className="mt-6 flex justify-center items-center text-gray-300 text-sm text-center">
        <p>© {new Date().getFullYear()} Maskoid Technologies</p>
        </div>

      </motion.div>
    </footer>
  );
}