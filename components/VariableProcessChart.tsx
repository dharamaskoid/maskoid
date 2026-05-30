"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  LayoutDashboard,
  BarChart3,
  FileText,
  ArrowRight,
  Layout,
  Move,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

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
    title: "Easy Login",
    subtitle: "Secure Access",
    description:
      "Login securely using your licensed credentials.",
    icon: <User />,
    color: "#2563eb",
    bg: "#DBEAFE",
  },

  {
    id: "02",
    title: "Dashboard",
    subtitle: "Centralized Control",
    description:
      "Manage templates, folders, and print jobs from one place.",
    icon: <LayoutDashboard />,
    color: "#7C3AED",
    bg: "#EDE9FE",
  },

  {
    id: "03",
    title: "Generate PDF",
    subtitle: "Bulk Processing",
    description:
      "Create personalized PDFs instantly from imported data.",
    icon: <FileText />,
    color: "#EC4899",
    bg: "#FCE7F3",
  },

  {
    id: "04",
    title: "Template Placement",
    subtitle: "Layout Customization",
    description:
      "Adjust template elements for perfect print alignment.",
    icon: <Layout />,
    color: "#F97316",
    bg: "#FFEDD5",
  },

  {
    id: "05",
    title: "Data Placement",
    subtitle: "Field Positioning",
    description:
      "Configure text, variables, and alignment with precision.",
    icon: <Move />,
    color: "#10B981",
    bg: "#D1FAE5",
  },

  {
    id: "06",
    title: "Reports & Logs",
    subtitle: "Activity Tracking",
    description:
      "Monitor processing history and generated documents.",
    icon: <BarChart3 />,
    color: "#06B6D4",
    bg: "#CFFAFE",
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

        {/* ICON */}
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mt-3 mb-3 transition-all duration-300"
          style={{
            background: active ? "#ffffff" : "#2b4c9a",
            color: active ? "#2b4c9a" : "#ffffff",
          }}
        >
          <div className="w-6 h-6">{step.icon}</div>
        </div>

        {/* TITLE */}
        <h3
          className="text-xl font-black leading-tight"
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
         <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#2b4c9a] text-xs font-bold uppercase">
            Variable Data Printing Software
          </p>

          <h2 className="mt-6 text-4xl md:text-4xl font-black text-[#1a2e5e] leading-tight">
            Complete Variable Data
            <span className="text-[#2b4c9a]"> Printing Workflow</span>
          </h2>

          <p className="mt-6 text-lg leading-[1.9] text-[#5c6b8a]">
            Here is a step-by-step demonstration of our Variable Data Printing Software.
            Designed for businesses handling large volumes of system-generated transactions,
            it enables bulk printing of dynamic data, customizable layouts, barcodes, QR codes,
            and reports with speed, accuracy, and security.
          </p>
        </div>
        </motion.div>

        {/* PROCESS GRID */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-10 gap-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <StepCard
                  step={step}
                  index={index}
                  active={activeStep === index}
                  onClick={setActiveStep}
                />

                {/* ARROW */}
                {index !== steps.length - 1 && (
                  <div
                    className="
                      hidden xl:block
                      absolute
                      top-1/2
                      -translate-y-1/2
                      -right-[22px]
                      z-20
                    "
                  >
                    <ArrowRight
                      size={20}
                      className={`
                        transition-all duration-500
                        ${
                          activeStep === index
                            ? "text-[#2b4c9a] scale-125"
                            : "text-[#cbd5e1]"
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}