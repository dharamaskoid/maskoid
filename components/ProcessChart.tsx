"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    subtitle: "Understanding Your Vision",
    description:
      "We start with a strategy session to understand your business goals, audience, and growth opportunities.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#2b4c9a",
    glow: "rgba(43,76,154,0.22)",
  },

  {
    id: "02",
    title: "Strategy & Planning",
    subtitle: "Roadmap to Growth",
    description:
      "We craft a custom digital roadmap focused on branding, SEO, ads, and scalable marketing growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#4f7cff",
    glow: "rgba(79,124,255,0.22)",
  },

  {
    id: "03",
    title: "Design & Build",
    subtitle: "Crafting Experiences",
    description:
      "We build premium UI/UX experiences with conversion-focused development and smooth interactions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: "#7c4dff",
    glow: "rgba(124,77,255,0.22)",
  },

  {
    id: "04",
    title: "Launch & Optimize",
    subtitle: "Scale Faster",
    description:
      "After launch we monitor analytics, optimize funnels, and improve conversions continuously.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20l4-4" />
        <path d="M6 22l4-4" />
      </svg>
    ),
    color: "#00b894",
    glow: "rgba(0,184,148,0.22)",
  },

  {
    id: "05",
    title: "Report & Scale",
    subtitle: "Data-Driven Growth",
    description:
      "Monthly reports, KPI tracking, and growth-focused strategies that scale your business faster.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.22)",
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
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
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`
        relative group cursor-pointer transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >

      {/* CONNECTOR */}
      {index !== steps.length - 1 && (
        <div className="hidden xl:block absolute top-1/2 -right-6 w-12 h-[2px] z-0">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `linear-gradient(to right, ${step.color}, #dbe5ff)`,
            }}
          />
        </div>
      )}

      {/* CARD */}
      <div
        className="relative h-full overflow-hidden rounded-[30px] border border-[#dbe5ff] bg-white p-8 transition-all duration-500 hover:-translate-y-2"
        style={{
          boxShadow: active
            ? `0 25px 60px ${step.glow}`
            : "0 10px 35px rgba(43,76,154,0.08)",
        }}
      >

        {/* TOP GLOW */}
        <div
          className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20"
          style={{
            background: step.color,
          }}
        />

        {/* WATERMARK */}
        <div
          className="absolute right-4 bottom-0 text-[90px] font-black leading-none select-none"
          style={{
            color: active
              ? `${step.color}12`
              : "rgba(43,76,154,0.05)",
          }}
        >
          {step.id}
        </div>

        {/* ICON */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{
            background: `${step.color}12`,
            color: step.color,
          }}
        >
          <div className="w-7 h-7">
            {step.icon}
          </div>
        </div>

        {/* BADGE */}
        <div
          className="relative z-10 inline-flex items-center px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-[0.15em] mt-6"
          style={{
            background: `${step.color}10`,
            borderColor: `${step.color}30`,
            color: step.color,
          }}
        >
          Step {step.id}
        </div>

        {/* TITLE */}
        <h3 className="relative z-10 mt-5 text-[24px] font-black text-[#10204b] leading-tight">
          {step.title}
        </h3>

        {/* SUBTITLE */}
        <p
          className="relative z-10 mt-2 text-sm font-semibold"
          style={{
            color: step.color,
          }}
        >
          {step.subtitle}
        </p>

        {/* DESCRIPTION */}
        <p className="relative z-10 mt-5 text-[15px] leading-[1.9] text-[#5b6785]">
          {step.description}
        </p>

        {/* ACTIVE BAR */}
        <div
          className="absolute left-0 top-0 h-full w-[5px] rounded-full transition-all duration-500"
          style={{
            background: active
              ? step.color
              : "transparent",
          }}
        />

      </div>
    </div>
  );
}

export default function ProcessChart() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 bg-[#EEF2FF] overflow-hidden">

      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle,#2b4c9a_1px,transparent_1px)] [background-size:26px_26px]"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4f7cff]/10 blur-[140px] rounded-full"></div>

      <div className="relative z-10 container max-w-[1320px] mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-[#dfe7ff] shadow-sm">
            <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#2b4c9a]">
              Our Process
            </span>
          </div>

          <h2 className="mt-7 text-4xl md:text-6xl font-black text-[#10204b] leading-tight">
            From Strategy to
            <span className="text-[#2b4c9a]"> Measurable Growth</span>
          </h2>

          <p className="mt-6 text-[#5b6785] text-lg leading-relaxed">
            A premium growth system designed to scale modern businesses
            with high-converting design, performance marketing, and
            data-driven execution.
          </p>

        </div>

        {/* PROCESS GRID */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              active={active === index}
              onClick={setActive}
            />
          ))}

        </div>

      </div>
    </section>
  );
}