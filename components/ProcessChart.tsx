"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  LayoutDashboard,
  PlusSquare,
  ListChecks,
  KeyRound,
  SearchCheck,
  BadgeCheck,
  RefreshCcw,
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
    subtitle: "Secure Authentication",
    description:
      "Users securely access the platform using email or username with Google reCAPTCHA verification and protected authentication.",
    icon: <ShieldCheck size={28} strokeWidth={2.2} />,
    color: "#2563eb",
    bg: "#DBEAFE",
  },

  {
    id: "02",
    title: "Dashboard",
    subtitle: "Analytics Overview",
    description:
      "Get a real-time overview of active licenses, expired keys, pending activations and software performance statistics.",
    icon: <LayoutDashboard size={28} strokeWidth={2.2} />,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add New Products",
    description:
      "Create and register software products with unique App IDs and centralized management controls.",
    icon: <PlusSquare size={28} strokeWidth={2.2} />,
    color: "#EC4899",
    bg: "#FCE7F3",
  },

  {
    id: "04",
    title: "Software List",
    subtitle: "Manage Applications",
    description:
      "View all registered applications with issued licenses, pending activations and software information.",
    icon: <ListChecks size={28} strokeWidth={2.2} />,
    color: "#F97316",
    bg: "#FFEDD5",
  },

  {
    id: "05",
    title: "Create License",
    subtitle: "Generate License Keys",
    description:
      "Generate secure 24-character software license keys and assign them to products and customers instantly.",
    icon: <KeyRound size={28} strokeWidth={2.2} />,
    color: "#10B981",
    bg: "#D1FAE5",
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "Track All Licenses",
    description:
      "Search, filter and manage active, inactive and expired software licenses with advanced controls.",
    icon: <SearchCheck size={28} strokeWidth={2.2} />,
    color: "#06B6D4",
    bg: "#CFFAFE",
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Monitoring",
    description:
      "Track software activations, API verification requests and first-time device authentication records.",
    icon: <BadgeCheck size={28} strokeWidth={2.2} />,
    color: "#6366F1",
    bg: "#E0E7FF",
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Tracking",
    description:
      "Monitor every software launch, recurring verification request and user login session activity.",
    icon: <RefreshCcw size={28} strokeWidth={2.2} />,
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },

  {
    id: "09",
    title: "Create User",
    subtitle: "Add Team Members",
    description:
      "Add users, assign software access and configure application permissions within the management system.",
    icon: <UserPlus size={28} strokeWidth={2.2} />,
    color: "#EF4444",
    bg: "#FEE2E2",
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "User Management",
    description:
      "Manage all current and former users registered in the software license management platform.",
    icon: <Users size={28} strokeWidth={2.2} />,
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
      className="relative min-w-[320px] cursor-pointer transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? active
            ? "translateY(-8px)"
            : "translateY(0)"
          : "translateY(50px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* LINE */}
      {index !== steps.length - 1 && (
        <div className="hidden xl:block absolute top-[70px] -right-[55px] w-[110px] h-[2px] bg-gradient-to-r from-[#2b4c9a]/40 to-transparent z-0" />
      )}

      {/* NUMBER */}
      <div
        className="absolute -top-5 left-7 z-20 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-sm border-[5px] border-[#EEF2FF] shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
        }}
      >
        {step.id}
      </div>

      {/* CARD */}
      <div
        className={`relative overflow-hidden rounded-[30px] p-8 h-full border transition-all duration-500 ${
          active
            ? "bg-white shadow-[0_30px_80px_rgba(43,76,154,0.18)]"
            : "bg-white/75 backdrop-blur-xl"
        }`}
        style={{
          borderColor: active ? `${step.color}50` : "#d9e3ff",
        }}
      >
        {/* GLOW */}
        <div
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{
            background: step.color,
          }}
        />

        {/* WATERMARK */}
        <div
          className="absolute bottom-0 right-4 text-[110px] font-black leading-none pointer-events-none"
          style={{
            color: active
              ? `${step.color}14`
              : "rgba(43,76,154,0.04)",
          }}
        >
          {step.id}
        </div>

        {/* ICON */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{
            background: active ? step.bg : "#f5f8ff",
            color: step.color,
          }}
        >
          {step.icon}
        </div>

        {/* SUBTITLE */}
        <div
          className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] mb-4"
          style={{
            background: active ? step.bg : "#EEF2FF",
            color: step.color,
          }}
        >
          {step.subtitle}
        </div>

        {/* TITLE */}
        <h3 className="relative z-10 text-[24px] font-black text-[#1a2e5e] leading-tight">
          {step.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="relative z-10 mt-5 text-[15px] leading-[1.9] text-[#60708f]">
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className={`absolute bottom-0 left-0 h-[4px] transition-all duration-500 ${
            active ? "w-full" : "w-0"
          }`}
          style={{
            background: `linear-gradient(to right, ${step.color}, ${step.color}90)`,
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
      {/* BG BLUR */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-black uppercase tracking-[0.2em]">
            License Key Management Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#1a2e5e] leading-tight">
            Complete Software
            <span className="text-[#2b4c9a]"> License Process</span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-[#60708f]">
            A powerful enterprise workflow system for software licensing,
            activation tracking, user management, verification logs and
            complete product administration.
          </p>
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="overflow-x-auto scrollbar-hide pb-6">
          <div className="flex gap-8 min-w-max px-2">
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
      </div>
    </section>
  );
}