"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users,
  BadgeCheck,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react";

import type { ReactNode } from "react";

export default function StatsSection() {
// ================= DATA =================
type CounterItem = {
  value: number;
  suffix: string;
  label: string;
  icon: ReactNode;
};

const counterData: CounterItem[] = [

  {
    value: 1000,
    suffix: "+",
    label: "Growth Systems Built",
    icon: <BriefcaseBusiness size={30} strokeWidth={2} />,
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Driving Results",
    icon: <Wrench size={30} strokeWidth={2} />,
  },
  {
    value: 300,
    suffix: "+",
    label: "Campaigns That Convert",
    icon: <Users size={30} strokeWidth={2} />,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    icon: <BadgeCheck size={30} strokeWidth={2} />,
  },
];

  

const formatNumber = (num: number, suffix: string) => {
  if (suffix === "K+" && num >= 1000) {
    return Math.floor(num / 1000);
  }
  return num;
};

  // ================= STATE =================
  const [counts, setCounts] = useState(counterData.map(() => 0));
  const [startCount, setStartCount] = useState(false);

  // ================= REF =================
 const sectionRef = useRef<HTMLDivElement>(null);

  // ================= DETECT VISIBILITY =================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ================= SMOOTH COUNT =================
  useEffect(() => {
    if (!startCount) return;

    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts(
        counterData.map((item) =>
          Math.floor(item.value * ease)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [startCount]);

  return (
          <section
          ref={sectionRef}
                className="relative py-10 bg-[#EEF4FF] overflow-hidden z-20 border-y border-[#dbe7ff]"
              >

                <div className="container bg-[#1a2e5e] rounded-xl mx-auto px-6 py-6 relative z-10">

                  <div className="grid md:grid-cols-4 grid-cols-1">

                    {counterData.map((item, i) => (
                      <div
                        key={i}
                        className={`relative flex items-center gap-4 px-6 py-4
                        ${i !== counterData.length - 1 ? "md:border-r border-[#dbe7ff]" : ""}
                        `}
                      >

                        {/* ICON */}
                        <div className="w-16 h-16 rounded-2xl bg-[#eef4ff] border border-[#dbe7ff] flex items-center justify-center text-[#2b4c9a] shadow-sm">

                          {item.icon}

                        </div>

                        {/* CONTENT */}
                        <div>

                          {/* NUMBER */}
                          <div className="flex items-end gap-1 leading-none">

                            <span className="text-3xl md:text-4xl font-bold text-[#ffffff]">
                              {formatNumber(counts[i], item.suffix)}
                            </span>

                            <span className="text-2xl font-bold text-[#ffffff]">
                              {item.suffix}
                            </span>

                          </div>

                          {/* LABEL */}
                          <p className="mt-1 text-sm text-[#ffffff] font-medium">
                            {item.label}
                          </p>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </section>            
              
  )
}
