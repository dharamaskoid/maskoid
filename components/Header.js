"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 Detect scroll (for shadow effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300
        ${scrolled 
          ? "bg-black/70 shadow-lg border-b border-white/10" 
          : "bg-black/40 border-b border-white/10"
        }`}
    >
      
      {/* 🔥 INCREASED HEIGHT */}
      <div className="container mx-auto px-6 py-5 md:py-6 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/Maskoid-Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain transition hover:scale-105"
            priority
          />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-gray-300 text-base md:text-base lg:text-base font-normal">
          {["Home", "About Us", "Services", "Projects", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group hover:text-white transition"
            >
              {item}

              {/* 🔥 Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2A4D9B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition text-white shadow-lg"
          >
            Get Quote
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔥 ANIMATED MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-white/10 px-6 py-6 space-y-5"
          >
            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="block text-lg hover:text-[#6EA8FF] transition"
              >
                {item}
              </a>
            ))}

            <a
              href="/contact"
              className="block text-center bg-gradient-to-r from-[#2A4D9B] to-[#6EA8FF] py-3 rounded-full mt-4"
            >
              Get Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}