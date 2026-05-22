"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Secure Login",
    subtitle: "Protected User Authentication",
    description:
      "Access the platform securely using your email or username with advanced password protection and Google reCAPTCHA verification.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M6 10V7a6 6 0 1 1 12 0v3" />
        <rect x="4" y="10" width="16" height="10" rx="2" />
      </svg>
    ),
  },

  {
    id: "02",
    title: "Dashboard Overview",
    subtitle: "Real-Time Analytics",
    description:
      "Track active licenses, expired keys, pending activations, and system performance through a smart dashboard.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Register Applications",
    description:
      "Add and manage software applications easily by entering software names and application IDs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },

  {
    id: "04",
    title: "Software Listings",
    subtitle: "Manage Applications",
    description:
      "View all registered software products with total issued keys, pending licenses, and usage activity.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
  },

  {
    id: "05",
    title: "Generate License Keys",
    subtitle: "Automated Key Creation",
    description:
      "Generate secure 24-character software license keys instantly with complete user allocation management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 2l-2 2" />
        <path d="M7.5 7.5l9-9" />
        <path d="M7 14l-5 5v3h3l5-5" />
      </svg>
    ),
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "Centralized Tracking",
    description:
      "Manage active, inactive, expired, and suspended software license holders from one central panel.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Monitoring",
    description:
      "Track API-based software activations including activation time, device details, and user verification history.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Tracking",
    description:
      "Monitor every software login and re-verification attempt with accurate timestamps and activity logs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10" />
        <path d="M20.49 15A9 9 0 0 1 6.36 18.36L1 14" />
      </svg>
    ),
  },

  {
    id: "09",
    title: "Create Users",
    subtitle: "User Management",
    description:
      "Create and manage users by assigning usernames, software applications, and unique application IDs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "Complete User Database",
    description:
      "View all active users, former customers, registered license holders, and account history in one place.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function StepCard({
  step,
  index,
  active,
  onClick,
}: {
  step: (typeof steps)[0];
  index: number;
  active: boolean;
  onClick: (index: number) => void;
}) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`relative transition-all duration-700 cursor-pointer ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-20"}`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* CONNECTOR LINE */}
      {index !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-14 -right-10 w-20 h-[2px] bg-gradient-to-r from-[#2b4c9a] to-[#6EA8FF] z-0"></div>
      )}

      <div
        className={`relative z-10 rounded-[28px] p-8 border backdrop-blur-xl transition-all duration-500 overflow-hidden group ${
          active
            ? "bg-white border-[#2b4c9a]/20 shadow-[0_20px_60px_rgba(43,76,154,0.15)]"
            : "bg-white/70 border-white hover:bg-white hover:shadow-[0_15px_40px_rgba(43,76,154,0.08)]"
        }`}
      >
        {/* TOP GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#6EA8FF]/5 to-transparent"></div>

        {/* WATERMARK */}
        <div className="absolute -bottom-5 right-4 text-[90px] font-black text-[#2b4c9a]/[0.04] leading-none select-none">
          {step.id}
        </div>

        {/* ICON */}
        <div
          className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
            active
              ? "bg-[#2b4c9a] text-white shadow-lg"
              : "bg-[#EEF2FF] text-[#2b4c9a]"
          }`}
        >
          {step.icon}
        </div>

        {/* STEP BADGE */}
        <div
          className={`inline-flex items-center mt-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
            active
              ? "bg-[#2b4c9a] text-white"
              : "bg-[#EEF2FF] text-[#2b4c9a]"
          }`}
        >
          Step {step.id}
        </div>

        {/* TITLE */}
        <h3 className="mt-5 text-[22px] font-black text-[#1a2e5e] leading-snug">
          {step.title}
        </h3>

        {/* SUBTITLE */}
        <p className="mt-2 text-sm font-semibold text-[#2b4c9a]">
          {step.subtitle}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] leading-[1.8] text-gray-500">
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className={`absolute left-0 top-0 w-1 h-full bg-[#2b4c9a] transition-all duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default function ProcessChart() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#EEF2FF] overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/10 blur-[140px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.18em]">
            Software License Process
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2e5e] leading-tight">
            Complete License Key
            <span className="block text-[#2b4c9a]">
              Management Workflow
            </span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-gray-500">
            Manage software licenses, users, verification logs,
            activations, and secure key generation through a modern
            enterprise-ready workflow system.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-7">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              active={activeStep === index}
              onClick={setActiveStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
}