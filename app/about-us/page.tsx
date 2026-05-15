import OurStorySection from "@/components/our-story-section"
import OurValuesSection from "@/components/our-values-section"
import StatsSection from "@/components/stats-section"
import CTASection from "@/components/cta-section"

export default function AboutUsPage() {

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
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#2b4c9a]/40 to-blue-500/10 blur-2xl rounded-[32px]"></div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img
                  src="/images/about-us-banner.jpg"
                  alt="About"
                  className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[450px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
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
