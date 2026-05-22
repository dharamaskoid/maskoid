"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Secure Login",
    subtitle: "Protected Authentication",
    description:
      "Users securely log in using email or username with advanced password protection and Google reCAPTCHA verification.",
  },

  {
    id: "02",
    title: "Dashboard Overview",
    subtitle: "Analytics & Insights",
    description:
      "Monitor active licenses, expired keys, pending activations, and overall system performance in real-time.",
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add Applications",
    description:
      "Register software products by entering software names, application IDs, and license configurations.",
  },

  {
    id: "04",
    title: "Software Listing",
    subtitle: "Manage Applications",
    description:
      "View all registered software products along with issued keys, pending licenses, and usage statistics.",
  },

  {
    id: "05",
    title: "Generate License Keys",
    subtitle: "Secure Key Generation",
    description:
      "Generate highly secure 24-character software license keys with user assignment and activation management.",
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "Track All Keys",
    description:
      "Manage active, inactive, expired, and suspended software licenses from one centralized dashboard.",
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Tracking",
    description:
      "Track software activations, API verification requests, device details, and activation timestamps.",
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Monitoring",
    description:
      "Monitor every software login attempt, re-verification process, and user activity in real-time.",
  },

  {
    id: "09",
    title: "Create Users",
    subtitle: "User Management",
    description:
      "Create and assign software users with usernames, application access, and license permissions.",
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "Complete User Database",
    description:
      "View all registered users, active license holders, customer history, and software account details.",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
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

  return [ref, inView];
}

function StepCard({ step, index, active, onClick }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`
        relative transition-all duration-700 cursor-pointer
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-20"}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* CONNECTOR */}
      {index !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-14 -right-10 w-20 h-[2px] bg-gradient-to-r from-[#2b4c9a] to-[#6EA8FF]"></div>
      )}

      {/* CARD */}
      <div
        className={`
          relative rounded-[30px] p-8 overflow-hidden border transition-all duration-500
          ${
            active
              ? "bg-white border-[#2b4c9a]/20 shadow-[0_25px_80px_rgba(43,76,154,0.15)]"
              : "bg-white/70 border-white hover:bg-white hover:shadow-[0_20px_60px_rgba(43,76,154,0.08)]"
          }
        `}
      >
        {/* WATERMARK */}
        <div className="absolute -bottom-6 right-3 text-[90px] font-black text-[#2b4c9a]/[0.04] leading-none">
          {step.id}
        </div>

        {/* STEP BADGE */}
        <div
          className={`
            inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em]
            ${
              active
                ? "bg-[#2b4c9a] text-white"
                : "bg-[#EEF2FF] text-[#2b4c9a]"
            }
          `}
        >
          Step {step.id}
        </div>

        {/* TITLE */}
        <h3 className="mt-6 text-[24px] font-black text-[#1a2e5e] leading-snug">
          {step.title}
        </h3>

        {/* SUBTITLE */}
        <p className="mt-2 text-sm font-semibold text-[#2b4c9a]">
          {step.subtitle}
        </p>

        {/* DESCRIPTION */}
        <p className="mt-5 text-[15px] leading-[1.9] text-gray-500">
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className={`
            absolute left-0 top-0 w-[5px] h-full bg-[#2b4c9a] transition-all duration-500
            ${active ? "opacity-100" : "opacity-0"}
          `}
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
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-[#EEF2FF] overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-blue-300/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-300/20 blur-[120px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.18em]">
            Software License Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2e5e] leading-tight">
            Complete License Key
            <span className="block text-[#2b4c9a]">
              Management Process
            </span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-gray-500">
            Manage software licenses, activations, users, and verification
            systems with a modern enterprise-grade workflow.
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