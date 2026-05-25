"use client";

import { useEffect, useRef, useState } from "react";
import {
  User,
  LayoutDashboard,
  Plus,
  List,
  Key,
  Search,
  CheckCircle2,
  RefreshCw,
  UserPlus,
  Users,
} from "lucide-react";

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
    icon: <User />,
    color: "#2563eb",
    bg: "#DBEAFE",
  },

  {
    id: "02",
    title: "Dashboard",
    subtitle: "Track Everything",
    description:
      "Monitor active licenses, expired keys, pending activations and overall software statistics in one place.",
    icon: <LayoutDashboard />,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add Applications",
    description:
      "Create new software products by entering software name, app ID and other required details.",
    icon: <Plus />,
    color: "#EC4899",
    bg: "#FCE7F3",
  },

  {
    id: "04",
    title: "Software List",
    subtitle: "Manage Products",
    description:
      "View all registered software with total issued keys, pending licenses and application details.",
    icon: <List />,
    color: "#F97316",
    bg: "#FFEDD5",
  },

  {
    id: "05",
    title: "Create License Key",
    subtitle: "Generate Keys",
    description:
      "Generate secure 24-character license keys and assign them to customers and software products.",
    icon: <Key />,
    color: "#10B981",
    bg: "#D1FAE5",
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "View All Keys",
    description:
      "Search and filter active, inactive and expired license keys with complete user information.",
    icon: <Search />,
    color: "#06B6D4",
    bg: "#CFFAFE",
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Tracking",
    description:
      "Track software activations, API requests, system details and first-time key verification records.",
    icon: <CheckCircle2 />,
    color: "#6366F1",
    bg: "#E0E7FF",
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Monitoring",
    description:
      "Monitor every login session, software usage activity and recurring license verification requests.",
    icon: <RefreshCw />,
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },

  {
    id: "09",
    title: "Create User",
    subtitle: "Add New Members",
    description:
      "Add new users to the system by assigning username, software details and application permissions.",
    icon: <UserPlus />,
    color: "#EF4444",
    bg: "#FEE2E2",
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "Manage Accounts",
    description:
      "View all current and former users registered in the software licensing management system.",
    icon: <Users />,
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
        className="absolute -top-5 left-6 z-20 w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-md border"
        style={{
          background: "#ffffff",
          color: "#2b4c9a",
          borderColor: "#2b4c9a20",
        }}
      >
        {step.id}
      </div>

      {/* CARD */}
      <div
        className="relative h-full rounded-[28px] border overflow-hidden p-7 transition-all duration-500"
        style={{
          background: active ? "#2b4c9a" : "rgba(255,255,255,0.75)",
          borderColor: active ? "#2b4c9a" : "#dbe4ff",
        }}
      >
        {/* WATERMARK */}
        <div
          className="absolute right-4 bottom-0 text-[90px] font-black leading-none pointer-events-none"
          style={{
            color: active
              ? "rgba(255,255,255,0.08)"
              : "rgba(43,76,154,0.05)",
          }}
        >
          {step.id}
        </div>

        {/* ICON (low visible always, even active) */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
          style={{
            background: active
              ? "rgba(255,255,255,0.12)"
              : "#f4f7ff",
            color: active
              ? "rgba(255,255,255,0.6)"
              : "#2b4c9a",
          }}
        >
          <div className="w-6 h-6 opacity-70">{step.icon}</div>
        </div>

        {/* TITLE */}
        <h3
          className="text-[22px] font-black leading-tight"
          style={{
            color: active ? "#ffffff" : "#1a2e5e",
          }}
        >
          {step.title}
        </h3>

        {/* DESC */}
        <p
          className="mt-4 text-[15px] leading-[1.8]"
          style={{
            color: active ? "rgba(255,255,255,0.75)" : "#5c6b8a",
          }}
        >
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className={`absolute bottom-0 left-0 h-1 transition-all duration-500 ${
            active ? "w-full" : "w-0"
          }`}
          style={{
            background: "#ffffff",
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
    <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="inline-flex px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-black uppercase">
            License Key Management Process
          </p>

          <h2 className="mt-6 text-4xl md:text-4xl font-black text-[#1a2e5e] leading-tight">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
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