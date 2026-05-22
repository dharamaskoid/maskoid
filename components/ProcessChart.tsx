"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Secure Login",
    subtitle: "Protected User Access",
    description:
      "Users can securely access the license management system using email or username authentication with Google reCAPTCHA protection.",
    icon: "🔐",
  },

  {
    id: "02",
    title: "Dashboard Analytics",
    subtitle: "Real-Time Insights",
    description:
      "Track active licenses, expired keys, unused licenses, and overall software usage statistics from one centralized dashboard.",
    icon: "📊",
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add New Applications",
    description:
      "Register new software applications by adding software name, application ID, and management details into the system.",
    icon: "💻",
  },

  {
    id: "04",
    title: "Software Listing",
    subtitle: "Manage Applications",
    description:
      "View all registered software products with complete license statistics including issued, active, and pending keys.",
    icon: "📁",
  },

  {
    id: "05",
    title: "Generate License Key",
    subtitle: "Instant Key Creation",
    description:
      "Create secure 24-character software license keys assigned to users with custom software access permissions.",
    icon: "🗝️",
  },

  {
    id: "06",
    title: "License Key Management",
    subtitle: "Track Every License",
    description:
      "Monitor active, inactive, and expired software licenses with advanced search and filtering functionality.",
    icon: "📜",
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Monitoring",
    description:
      "Track software activation attempts, API requests, device information, activation dates, and validation history.",
    icon: "✅",
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Tracking",
    description:
      "Monitor how often software is accessed including login time, usage history, and repeated license validations.",
    icon: "🔄",
  },

  {
    id: "09",
    title: "Create Users",
    subtitle: "User Registration",
    description:
      "Add and manage software users with usernames, software assignments, application IDs, and access permissions.",
    icon: "👤",
  },

  {
    id: "10",
    title: "All Users Management",
    subtitle: "Complete User Records",
    description:
      "Access a complete list of active and previous users registered within the software licensing ecosystem.",
    icon: "👥",
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
      className={`
        relative
        cursor-pointer
        transition-all
        duration-700
        ${
          index % 2 === 0
            ? "lg:translate-y-0"
            : "lg:translate-y-16"
        }
      `}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0px)"
          : "translateY(60px)",
      }}
    >
      {/* LINE */}
      <div className="hidden lg:block absolute top-16 -right-10 w-20 h-[2px] bg-gradient-to-r from-[#2b4c9a] to-[#6EA8FF] z-0" />

      <div
        className={`
          relative
          rounded-[28px]
          p-7
          h-full
          overflow-hidden
          border
          backdrop-blur-xl
          transition-all
          duration-500
          ${
            active
              ? "bg-white shadow-[0_25px_80px_rgba(43,76,154,0.18)] border-[#2b4c9a]/20 scale-[1.03]"
              : "bg-white/70 border-white hover:bg-white hover:shadow-[0_20px_60px_rgba(43,76,154,0.10)]"
          }
        `}
      >
        {/* WATERMARK */}
        <div className="absolute right-4 bottom-0 text-[90px] font-black text-[#EEF2FF] leading-none select-none">
          {step.id}
        </div>

        {/* STEP NUMBER */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#2b4c9a] text-lg font-black shadow-sm">
          {step.id}
        </div>

        {/* ICON */}
        <div
          className={`
            mt-6
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-3xl
            transition-all
            duration-500
            ${
              active
                ? "bg-[#2b4c9a] text-white shadow-[0_15px_40px_rgba(43,76,154,0.25)]"
                : "bg-[#EEF2FF] text-[#2b4c9a]"
            }
          `}
        >
          {step.icon}
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <h3 className="mt-6 text-[22px] font-black text-[#1a2e5e] leading-tight">
            {step.title}
          </h3>

          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#2b4c9a]">
            {step.subtitle}
          </p>

          <p className="mt-4 text-[15px] leading-[1.9] text-[#5f6b85]">
            {step.description}
          </p>
        </div>

        {/* ACTIVE BAR */}
        <div
          className={`
            absolute
            left-0
            top-0
            h-full
            bg-gradient-to-b
            from-[#2b4c9a]
            to-[#6EA8FF]
            transition-all
            duration-500
            ${
              active
                ? "w-[6px]"
                : "w-0"
            }
          `}
        />
      </div>
    </div>
  );
}

export default function ProcessChart() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#EEF2FF] overflow-hidden">

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-black uppercase tracking-[0.2em]">
            Software Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2e5e] leading-tight">
            Smart License Key
            <span className="text-[#2b4c9a]"> Management Process</span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-[#5f6b85]">
            A complete premium workflow system for software licensing,
            verification, user management, and analytics — designed for
            enterprise-level control and scalability.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

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