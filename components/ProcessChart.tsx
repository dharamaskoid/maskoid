"use client";

import { useState, useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discovery Call",
    subtitle: "Understanding Your Vision",
    description:
      "We start with a deep-dive strategy session to understand your business goals, target audience, and growth challenges.",
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },

  {
    id: "02",
    title: "Strategy & Planning",
    subtitle: "Roadmap to Growth",
    description:
      "Our team crafts a custom digital growth blueprint aligned with your ROI targets.",
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
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },

  {
    id: "03",
    title: "Design & Build",
    subtitle: "Crafting the Experience",
    description:
      "We design high-performance conversion-focused websites and digital assets.",
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
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },

  {
    id: "04",
    title: "Launch & Optimize",
    subtitle: "Go Live, Grow Faster",
    description:
      "We deploy your digital system and continuously optimize campaigns.",
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
        <path d="M2 20l4-4" />
        <path d="M6 22l4-4" />
      </svg>
    ),
  },

  {
    id: "05",
    title: "Report & Scale",
    subtitle: "Data-Driven Scaling",
    description:
      "Monthly reporting with measurable KPIs and growth-focused scaling.",
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
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
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
      className={`
        relative cursor-pointer transition-all duration-700
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-14"}
      `}
    >
      {/* LINE CONNECTOR */}
      {index !== steps.length - 1 && (
        <div className="hidden lg:block absolute top-14 -right-10 w-20 h-[2px] bg-gradient-to-r from-[#2b4c9a] to-[#9fb4ef] z-0"></div>
      )}

      {/* CARD */}
      <div
        className={`
          relative z-10 rounded-[28px] border overflow-hidden
          p-8 transition-all duration-500 group
          ${
            active
              ? "bg-white border-[#2b4c9a]/20 shadow-[0_20px_60px_rgba(43,76,154,0.15)]"
              : "bg-white/70 border-white hover:bg-white"
          }
        `}
      >
        {/* WATERMARK */}
        <div className="absolute -bottom-5 right-3 text-[90px] font-black text-[#2b4c9a]/[0.05] leading-none select-none">
          {step.id}
        </div>

        {/* TOP */}
        <div className="flex items-center justify-between relative z-10">
          {/* ICON */}
          <div
            className={`
              w-14 h-14 rounded-2xl flex items-center justify-center
              transition-all duration-500
              ${
                active
                  ? "bg-[#2b4c9a] text-white shadow-lg"
                  : "bg-[#EEF2FF] text-[#2b4c9a]"
              }
            `}
          >
            {step.icon}
          </div>

          {/* STEP NUMBER */}
          <div
            className={`
              px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em]
              transition-all duration-500
              ${
                active
                  ? "bg-[#2b4c9a] text-white"
                  : "bg-[#EEF2FF] text-[#2b4c9a]"
              }
            `}
          >
            STEP {step.id}
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mt-7">
          <h3
            className={`
              text-2xl font-black transition-all duration-500
              ${
                active
                  ? "text-[#1a2e5e]"
                  : "text-[#1a2e5e]"
              }
            `}
          >
            {step.title}
          </h3>

          <p
            className={`
              mt-2 text-sm font-semibold transition-all duration-500
              ${
                active
                  ? "text-[#2b4c9a]"
                  : "text-[#4f6db5]"
              }
            `}
          >
            {step.subtitle}
          </p>

          <p className="mt-5 text-[15px] leading-[1.9] text-[#5f6b85]">
            {step.description}
          </p>
        </div>

        {/* ACTIVE GLOW */}
        {active && (
          <div className="absolute inset-0 rounded-[28px] border border-[#2b4c9a]/20 pointer-events-none"></div>
        )}
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

      {/* BLUR BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[140px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#2b4c9a]/10 text-[#2b4c9a] text-xs font-bold uppercase tracking-[0.18em]">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-[#1a2e5e] leading-tight">
            Premium Digital
            <span className="text-[#2b4c9a]"> Growth Process</span>
          </h2>

          <p className="mt-6 text-lg text-[#5f6b85] leading-relaxed">
            A modern enterprise workflow designed to transform brands into
            scalable digital growth machines with strategy, creativity,
            technology, and performance.
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-7 items-start">
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