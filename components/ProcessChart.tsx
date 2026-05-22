"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
}

const steps: Step[] = [
  {
    id: "01",
    title: "Login",
    subtitle: "Secure Access Control",
    description:
      "Users can securely log in using email or username with Google reCAPTCHA protection for enhanced security.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
        <path d="M4 22a8 8 0 0116 0" />
      </svg>
    ),
    color: "#2563eb",
    bg: "#DBEAFE",
  },

  {
    id: "02",
    title: "Dashboard",
    subtitle: "Track Everything",
    description:
      "Monitor active licenses, expired keys, pending activations and overall software statistics in one place.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
    color: "#7C3AED",
    bg: "#EDE9FE",
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add Applications",
    description:
      "Create new software products by entering software name, app ID and other required details.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
    color: "#EC4899",
    bg: "#FCE7F3",
  },

  {
    id: "04",
    title: "Software List",
    subtitle: "Manage Products",
    description:
      "View all registered software with total issued keys, pending licenses and application details.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
    color: "#F97316",
    bg: "#FFEDD5",
  },

  {
    id: "05",
    title: "Create License Key",
    subtitle: "Generate Keys",
    description:
      "Generate secure 24-character license keys and assign them to customers and software products.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 2l-2 2" />
        <path d="M7.5 7.5l9-9" />
        <path d="M14 7l3 3" />
        <path d="M5 13l6 6" />
      </svg>
    ),
    color: "#10B981",
    bg: "#D1FAE5",
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "View All Keys",
    description:
      "Search and filter active, inactive and expired license keys with complete user information.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
    color: "#06B6D4",
    bg: "#CFFAFE",
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Tracking",
    description:
      "Track software activations, API requests, system details and first-time key verification records.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    color: "#6366F1",
    bg: "#E0E7FF",
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Monitoring",
    description:
      "Monitor every login session, software usage activity and recurring license verification requests.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 3v5h5" />
        <path d="M21 21v-5h-5" />
        <path d="M21 8a9 9 0 00-15-5L3 8" />
        <path d="M3 16a9 9 0 0015 5l3-5" />
      </svg>
    ),
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },

  {
    id: "09",
    title: "Create User",
    subtitle: "Add New Members",
    description:
      "Add new users to the system by assigning username, software details and application permissions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
    color: "#EF4444",
    bg: "#FEE2E2",
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "Manage Accounts",
    description:
      "View all current and former users registered in the software licensing management system.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    color: "#0EA5E9",
    bg: "#E0F2FE",
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

interface StepCardProps {
  step: Step;
  index: number;
  active: boolean;
  onClick: (index: number) => void;
}

function StepCard({
  step,
  index,
  active,
  onClick,
}: StepCardProps) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`relative transition-all duration-500 cursor-pointer ${
        active ? "-translate-y-2" : ""
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? active
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(40px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* TOP NUMBER */}
      <div
        className="absolute -top-5 left-6 z-20 w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-lg border-4 border-[#EEF2FF]"
        style={{
          background: step.color,
          color: "#fff",
        }}
      >
        {step.id}
      </div>

      {/* CARD */}
      <div
        className={`relative h-full rounded-[28px] border overflow-hidden p-7 transition-all duration-500 ${
          active
            ? "bg-white shadow-[0_25px_80px_rgba(43,76,154,0.18)]"
            : "bg-white/70 backdrop-blur-xl"
        }`}
        style={{
          borderColor: active ? `${step.color}40` : "#dbe4ff",
        }}
      >
        {/* WATERMARK */}
        <div
          className="absolute right-4 bottom-0 text-[90px] font-black leading-none pointer-events-none"
          style={{
            color: active
              ? `${step.color}15`
              : "rgba(43,76,154,0.05)",
          }}
        >
          {step.id}
        </div>

        {/* ICON */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
          style={{
            background: active ? step.bg : "#f4f7ff",
            color: step.color,
          }}
        >
          <div className="w-7 h-7">{step.icon}</div>
        </div>

        {/* BADGE */}
        <div
          className="inline-flex items-center rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
          style={{
            background: active ? step.bg : "#EEF2FF",
            color: step.color,
          }}
        >
          {step.subtitle}
        </div>

        {/* TITLE */}
        <h3 className="text-[22px] font-black text-[#1a2e5e] leading-tight relative z-10">
          {step.title}
        </h3>

        {/* DESC */}
        <p className="mt-4 text-[15px] leading-[1.8] text-[#5c6b8a] relative z-10">
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
            active ? "w-full" : "w-0"
          }`}
          style={{
            background: `linear-gradient(to right, ${step.color}, ${step.color}80)`,
          }}
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
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-black uppercase tracking-[0.2em]">
            License Key Management Process
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#1a2e5e] leading-tight">
            Complete Software
            <span className="text-[#2b4c9a]"> License Workflow</span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-[#5c6b8a]">
            A premium enterprise-level workflow system designed to manage
            software products, license activations, users, logs and security
            verification in one powerful dashboard.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7">
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