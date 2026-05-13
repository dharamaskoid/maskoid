import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Social Media Marketing", link: "/services/social-media-marketing" },
    { name: "SEO Service", link: "/services/seo-service" },
    { name: "PPC Service", link: "/services/ppc-service" },
    { name: "Web Design", link: "/services/web-design" },
    { name: "Web Development", link: "/services/web-development" },
  ];

  const navItems: { label: string; to: string; isServices?: boolean }[] = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services", isServices: true },
    { label: "Projects", to: "/projects" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_8px_30px_rgba(43,76,154,0.08)] border-b border-[#dbe4ff]"
          : "bg-white border-b border-[#e9efff]"
      }`}
    >
      <div className="container mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/Maskoid-Logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain transition hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex gap-6 lg:gap-8 text-[#1a2e5e] text-base font-semibold">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className="relative flex items-center gap-1 hover:text-[#2b4c9a] transition"
              >
                {item.label}
                {item.isServices && (
                  <span className="ml-2 inline-block w-2 h-2 border-r-2 border-b-2 border-[#1a2e5e] rotate-45 transition-transform duration-300 group-hover:rotate-[225deg]"></span>
                )}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#2A4D9B] transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {item.isServices && (
                <div className="absolute left-0 top-full mt-1 w-64 bg-white/95 border border-[#e5ecff] shadow-[0_20px_50px_rgba(43,76,154,0.12)] backdrop-blur-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                  <ul className="py-3">
                    {services.map((service, i) => (
                      <li key={i}>
                        <Link
                          to={service.link}
                          className="block px-5 py-3 text-base text-[#42526b] hover:text-[#2b4c9a] hover:bg-[#f5f8ff] transition"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] transition-all duration-300 text-white shadow-[0_10px_30px_rgba(43,76,154,0.25)]"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1a2e5e] w-11 h-11 flex items-center justify-center rounded-lg border border-[#dbe4ff] bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:bg-[#f5f8ff]"
        >
          <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-5"
          >
            <Link to="/" className="block text-base font-semibold text-[#1a2e5e] hover:text-[#6EA8FF] transition">Home</Link>
            <Link to="/about" className="block text-base font-semibold text-[#1a2e5e] hover:text-[#6EA8FF] transition">About Us</Link>

            <div>
              <div className="flex justify-between items-center">
                <Link to="/services" className="text-base font-semibold text-[#1a2e5e] hover:text-[#6EA8FF] transition">Services</Link>
                <button
                  onClick={(e) => { e.preventDefault(); setOpenServices(!openServices); }}
                  className="text-[#1a2e5e] text-xl ml-2"
                >
                  <span className="ml-2 inline-block w-2 h-2 border-r-2 border-b-2 border-gray-400 rotate-45 transition-transform duration-300"></span>
                </button>
              </div>

              <AnimatePresence>
                {openServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-3 space-y-3 overflow-hidden"
                  >
                    {services.map((service, i) => (
                      <Link key={i} to={service.link} className="block text-base text-[#1a2e5e] hover:text-[#2b4c9a] transition">
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/projects" className="block text-base font-semibold text-[#1a2e5e] hover:text-[#6EA8FF] transition">Projects</Link>
            <Link to="/contact" className="block text-base font-semibold text-[#1a2e5e] hover:text-[#6EA8FF] transition">Contact</Link>

            <Link
              to="/contact"
              className="block text-center px-8 py-3.5 rounded-lg bg-[#2b4c9a] hover:bg-[#1f3d84] hover:scale-105 transition text-white shadow-lg"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
