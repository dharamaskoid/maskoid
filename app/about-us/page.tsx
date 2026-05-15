"use client"

import OurStorySection from "@/components/our-story-section"
import OurValuesSection from "@/components/our-values-section"
import StatsSection from "@/components/stats-section"
import CTASection from "@/components/cta-section"
import { useEffect, useState, useRef } from "react"

export default function AboutUsPage() {

  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
  }
  return (
    <main className="bg-white overflow-hidden text-[#111827] pt-[81.5px] lg:pt-[81.5px]">
      {/* HERO SECTION */}
      <section className="relative bg-[#1a2e5e] text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/30 blur-[140px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 py-10 lg:py-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div>
              <p className="inline-flex px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-[0.2em]">
                About Us
              </p>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                The Story Behind <br />
                <span className="text-[#6EA8FF]">Maskoid</span>
              </h1>

              <p className="mt-6 text-[#B7C2D8] text-lg leading-relaxed max-w-xl">
                We are a digital growth agency helping businesses scale using premium websites, SEO systems, paid marketing, and performance-driven strategies.
              </p>

            </div>

            {/* RIGHT */}
            {/* RIGHT IMAGE - 55% */}
                    <div className="relative w-full lg:w-[55%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
                      {/* Image Container */}
                      <div 
                        className={`relative h-[350px] lg:h-full transition-all duration-1000 delay-300 ${
                          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
                        }`}
                      >
                        <img
                          src="/images/about-us-banner.jpg"
                          alt="About Maskoid - Our Team"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/50 to-transparent lg:via-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent lg:hidden" />
                        
                        {/* Animated Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shine" />
                      </div>

                      {/* Floating Experience Badge */}
                      <div 
                        className={`absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-20 transition-all duration-1000 delay-700 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                      >
                        <div className="bg-white rounded-2xl p-5 shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-gray-900">10+</div>
                            <div className="text-sm text-gray-500">Years of Experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
          50% { transform: translateY(-40px) translateX(-10px); opacity: 0.3; }
          75% { transform: translateY(-20px) translateX(15px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
          </div>
        
      </section>

      {/* STORY SECTION */}

      <OurStorySection />

      <OurValuesSection />

      <StatsSection />

      <CTASection />

      

    </main>
  );
}
