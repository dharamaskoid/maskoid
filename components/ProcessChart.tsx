"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    id: "01",
    title: "Login",
    desc: "Secure authentication with reCAPTCHA protection.",
    color: "#2563eb",
  },
  {
    id: "02",
    title: "Dashboard",
    desc: "Track active, expired and pending license keys.",
    color: "#7c3aed",
  },
  {
    id: "03",
    title: "Create Software",
    desc: "Add and manage software products easily.",
    color: "#ec4899",
  },
  {
    id: "04",
    title: "Generate Keys",
    desc: "Create secure 24-character license keys.",
    color: "#f97316",
  },
  {
    id: "05",
    title: "Verification Logs",
    desc: "Track activation requests and API logs.",
    color: "#10b981",
  },
  {
    id: "06",
    title: "Re-Verification",
    desc: "Monitor software usage and validations.",
    color: "#06b6d4",
  },
  {
    id: "07",
    title: "Users",
    desc: "Manage all registered software users.",
    color: "#6366f1",
  },
  {
    id: "08",
    title: "Reports",
    desc: "View software performance analytics.",
    color: "#8b5cf6",
  },
  {
    id: "09",
    title: "Security",
    desc: "Protect software licenses from misuse.",
    color: "#ef4444",
  },
  {
    id: "10",
    title: "Scale",
    desc: "Grow your software business efficiently.",
    color: "#0ea5e9",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-[#EEF2FF] overflow-hidden">
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 blur-[120px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-black uppercase tracking-[0.2em]">
            Software License Workflow
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#1a2e5e] leading-tight">
            Horizontal Process
            <span className="text-[#2b4c9a]"> Flow</span>
          </h2>

          <p className="mt-6 text-lg text-[#5c6b8a] leading-relaxed">
            A premium modern process flow designed for enterprise software
            license management systems.
          </p>
        </div>

        {/* PROCESS FLOW */}
        <div className="relative">
          {/* CONNECTOR LINE */}
          <div className="hidden lg:block absolute top-[72px] left-0 w-full h-[3px] bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#0ea5e9] rounded-full"></div>

          {/* HORIZONTAL SCROLL */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {steps.map((step, index) => {
              const active = activeStep === index;

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative min-w-[290px] snap-start pt-16 cursor-pointer group"
                >
                  {/* STEP NUMBER */}
                  <div
                    className={`absolute top-0 left-8 z-20 w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black border-[6px] border-[#EEF2FF] transition-all duration-500 ${
                      active
                        ? "scale-110 shadow-[0_15px_40px_rgba(43,76,154,0.35)]"
                        : ""
                    }`}
                    style={{
                      background: step.color,
                    }}
                  >
                    {step.id}
                  </div>

                  {/* CARD */}
                  <div
                    className={`relative h-full rounded-[30px] border border-[#dbe4ff] bg-white p-8 transition-all duration-500 overflow-hidden ${
                      active
                        ? "-translate-y-3 shadow-[0_25px_80px_rgba(43,76,154,0.18)]"
                        : "shadow-[0_10px_40px_rgba(43,76,154,0.06)]"
                    }`}
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

                    {/* TOP ICON */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      }}
                    >
                      ✦
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-black text-[#1a2e5e] relative z-10">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-[15px] leading-[1.8] text-[#5c6b8a] relative z-10">
                      {step.desc}
                    </p>

                    {/* ACTIVE BAR */}
                    <div
                      className={`absolute bottom-0 left-0 h-[4px] transition-all duration-500 ${
                        active ? "w-full" : "w-0"
                      }`}
                      style={{
                        background: `linear-gradient(to right, ${step.color}, ${step.color}90)`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}