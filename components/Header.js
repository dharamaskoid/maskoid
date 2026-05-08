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
        <nav className="hidden md:flex gap-6 lg:gap-8 text-gray-300 text-base font-normal">

          {["Home", "About Us", "Services", "Projects", "Contact Us"].map((item) => {

            const isServices = item === "Services";

            return (
              <div key={item} className="relative group">

                {/* MAIN LINK */}
                <a
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative hover:text-white transition"
                >
                  {item}

                  {/* underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2A4D9B] transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* 🔥 DROPDOWN (ONLY FOR SERVICES) */}
                {isServices && (
                  <div className="absolute left-0 top-full mt-4 w-64 bg-[#0B0F1A] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">

                    <ul className="py-3">

                      {[
                        { name: "Social Media Marketing", link: "/services/social-media-marketing" },
                        { name: "SEO Service", link: "/services/seo-service" },
                        { name: "PPC Service", link: "/services/ppc-service" },
                        { name: "Web Design", link: "/services/web-design" },
                        { name: "Web Development", link: "/services/web-development" },
                      ].map((service, i) => (
                        <li key={i}>
                          <a
                            href={service.link}
                            className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}

                    </ul>

                  </div>
                )}

              </div>
            );
          })}

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

            {/* HOME */}
            <a href="/" className="block text-lg hover:text-[#6EA8FF] transition">
              Home
            </a>

            {/* 🔥 SERVICES DROPDOWN */}
            <div>
              <button
                onClick={() => setOpenServices(!openServices)}
                className="flex justify-between items-center w-full text-lg hover:text-[#6EA8FF] transition"
              >
                Services
                <span className={`transition ${openServices ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {openServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-3 space-y-3 overflow-hidden"
                  >
                    {[
                      { name: "Social Media Marketing", link: "/services/social-media-marketing" },
                      { name: "SEO Service", link: "/services/seo-service" },
                      { name: "PPC Service", link: "/services/ppc-service" },
                      { name: "Web Design", link: "/services/web-design" },
                      { name: "Web Development", link: "/services/web-development" },
                    ].map((service, i) => (
                      <a
                        key={i}
                        href={service.link}
                        className="block text-base text-gray-400 hover:text-white transition"
                      >
                        {service.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OTHER LINKS */}
            <a href="/projects" className="block text-lg hover:text-[#6EA8FF] transition">
              Projects
            </a>

            <a href="/contact" className="block text-lg hover:text-[#6EA8FF] transition">
              Contact
            </a>

            {/* CTA */}
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