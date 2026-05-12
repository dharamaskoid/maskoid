"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);

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
        ? "bg-white backdrop-blur-xl shadow-[0_8px_30px_rgba(43,76,154,0.08)] border-b border-[#dbe4ff]"
        : "bg-white backdrop-blur-xl border-b border-[#e9efff]"
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
        <nav className="hidden md:flex gap-6 lg:gap-8 text-[#1a2e5e] text-base font-normal">

          {["Home", "About Us", "Services", "Projects", "Contact Us"].map((item) => {

            const isServices = item === "Services";

            return (
              <div key={item} className="relative group">

                {/* MAIN LINK */}
                <a
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative flex items-center gap-1 hover:text-[#2b4c9a] transition group"
                >
                  {item}

                  {/* 🔥 CLEAN CHEVRON */}
                  {isServices && (
                    <span className="ml-2 inline-block w-2 h-2 border-r-2 border-b-2 border-[#6b7aa5] rotate-45 transition-transform duration-300 group-hover:rotate-[225deg] group-hover:border-white"></span>
                  )}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2A4D9B] transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* 🔥 DROPDOWN (ONLY FOR SERVICES) */}
                {isServices && (
                  <div className="absolute left-0 top-full mt-1 w-64 bg-white/95 border border-[#e5ecff] shadow-[0_20px_50px_rgba(43,76,154,0.12)] backdrop-blur-xl rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">

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
                            className="block px-5 py-3 text-sm text-[#42526b] hover:text-[#2b4c9a] hover:bg-[#f5f8ff] transition"
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
            className="px-8 py-3.5 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] transition-all duration-300 text-white shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
          >
            Get Quote
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#2b4c9a] text-2xl"
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
            className="bg-white/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5"
          >

            {/* HOME */}
            <a href="/" className="block text-lg hover:text-[#6EA8FF] transition">
              Home
            </a>
            <a href="/about" className="block text-lg hover:text-[#6EA8FF] transition">
                About Us
            </a>

            {/* 🔥 SERVICES DROPDOWN */}
            <div>
              <div className="flex justify-between items-center">

                {/* 👉 SAME AS DESKTOP (MAIN LINK) */}
                <a
                  href="/services"
                  className="text-lg hover:text-[#6EA8FF] transition"
                >
                  Services
                </a>



                {/* 👉 DROPDOWN TOGGLE */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenServices(!openServices);
                  }}
                  className="text-white text-xl ml-2"
                >
                <span className="ml-2 inline-block w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45 transition-transform duration-300 group-hover:rotate-[225deg] group-hover:border-white"></span>
                </button>

              </div>

              {/* 🔥 DROPDOWN */}
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
              className="block text-center px-8 py-3.5 rounded-lg bg-[#2b4c9a] hover:bg-[#1f3d84] hover:scale-105 transition text-white shadow-lg"
            >
              Get Quote
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}