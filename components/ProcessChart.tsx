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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: "#FF6B35",
    bg: "#FF6B3515",
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#3B82F6",
    bg: "#3B82F615",
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: "#8B5CF6",
    bg: "#8B5CF615",
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 20l4-4" />
        <path d="M6 22l4-4" />
      </svg>
    ),
    color: "#10B981",
    bg: "#10B98115",
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    color: "#F59E0B",
    bg: "#F59E0B15",
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
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s ease ${index * 0.12}s`,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <div
        style={{
          background: active
            ? `linear-gradient(135deg, ${step.color}18, ${step.color}08)`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${
            active ? step.color + "60" : "rgba(255,255,255,0.08)"
          }`,
          borderRadius: "20px",
          padding: "28px 24px",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.35s ease",
          boxShadow: active
            ? `0 8px 40px ${step.color}20`
            : "0 2px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* WATERMARK */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            bottom: "-8px",
            fontSize: "80px",
            fontWeight: 900,
            color: active
              ? `${step.color}12`
              : "rgba(255,255,255,0.04)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {step.id}
        </div>

        {/* ICON */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: active ? step.bg : "rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            color: active ? step.color : "rgba(255,255,255,0.5)",
          }}
        >
          <div style={{ width: "22px", height: "22px" }}>
            {step.icon}
          </div>
        </div>

        {/* STEP BADGE */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: active
              ? `${step.color}22`
              : "rgba(255,255,255,0.06)",
            border: `1px solid ${
              active ? step.color + "40" : "rgba(255,255,255,0.1)"
            }`,
            borderRadius: "100px",
            padding: "3px 10px",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: active ? step.color : "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            Step {step.id}
          </span>
        </div>

        {/* TITLE */}
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: active ? "#ffffff" : "rgba(255,255,255,0.75)",
            marginBottom: "4px",
          }}
        >
          {step.title}
        </h3>

        {/* SUBTITLE */}
        <p
          style={{
            fontSize: "12px",
            color: active ? step.color : "rgba(255,255,255,0.35)",
            marginBottom: "12px",
          }}
        >
          {step.subtitle}
        </p>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "13.5px",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessChart() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px,5vw,54px)",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "20px",
            }}
          >
            Modern Process Flow
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A premium modern process section with animated active states.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
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