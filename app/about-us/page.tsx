export default function AboutUsPage() {
  const values = [
    {
      title: "Integrity",
      desc: "We believe in honesty, transparency, and building real relationships.",
      icon: "💎",
    },
    {
      title: "Performance",
      desc: "We focus on measurable results and long-term business growth.",
      icon: "🚀",
    },
    {
      title: "Innovation",
      desc: "Creative ideas, modern technology, and smart strategies.",
      icon: "💡",
    },
    {
      title: "Partnership",
      desc: "Your success is our success. We grow together.",
      icon: "🤝",
    },
    {
      title: "Accountability",
      desc: "We stay committed and deliver on our promises.",
      icon: "🎯",
    },
  ];

  const team = [
    {
      name: "Sabbah Memon",
      role: "Founder & CEO",
      image: "/images/team1.jpg",
    },
    {
      name: "Aqsa Memon",
      role: "Head of Growth",
      image: "/images/team2.jpg",
    },
    {
      name: "Usman K.",
      role: "Web Development Lead",
      image: "/images/team3.jpg",
    },
    {
      name: "Hira Memon",
      role: "SEO & Marketing Lead",
      image: "/images/team4.jpg",
    },
  ];

  return (
    <main className="bg-white overflow-hidden text-[#111827] pt-[81.5px] lg:pt-[81.5px]">
      {/* HERO SECTION */}
      <section className="relative bg-[#071120] text-white overflow-hidden">
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
                  src="/images/about-banner.jpg"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            {/* LEFT */}
            <div>
              <p className="inline-flex px-4 py-1 rounded-full bg-[#eef4ff] text-[#2b4c9a] text-xs font-semibold uppercase tracking-wider">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-[#1a2e5e]">
                We Started With A Simple Idea To Drive
                <span className="text-[#2b4c9a]"> Real Growth</span>
              </h2>

              <p className="mt-6 text-[#5b6475] leading-relaxed">
                Maskoid began with one mission — helping businesses grow digitally using premium websites, SEO systems, branding, and modern marketing strategies.
              </p>

              <p className="mt-5 text-[#5b6475] leading-relaxed">
                From startups to growing enterprises, we build scalable digital systems that attract customers, improve visibility, and increase conversions.
              </p>

              <button className="mt-8 px-7 py-4 rounded-xl bg-[#2b4c9a] hover:bg-[#1f3d84] transition-all duration-300 text-white font-semibold shadow-[0_10px_40px_rgba(43,76,154,0.25)]">
                Let's Work Together →
              </button>
            </div>

            {/* RIGHT */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Our Mission",
                  desc: "To deliver measurable digital growth solutions.",
                },
                {
                  title: "Our Vision",
                  desc: "To become a global digital growth partner.",
                },
                {
                  title: "Our Approach",
                  desc: "Data-driven systems focused on ROI.",
                },
                {
                  title: "Why Choose Us",
                  desc: "Premium quality, strategy, and measurable results.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e8ecf5] rounded-3xl p-8 shadow-sm hover:shadow-[0_20px_60px_rgba(43,76,154,0.08)] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#eef4ff] flex items-center justify-center text-2xl">
                    ✨
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#1a2e5e]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[#5b6475] leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="inline-flex px-4 py-1 rounded-full bg-[#eef4ff] text-[#2b4c9a] text-xs font-semibold uppercase tracking-wider">
            Our Values
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#1a2e5e] leading-tight">
            The Principles That Drive
            <span className="text-[#2b4c9a]"> Everything We Do</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
            {values.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-[#eef4ff] flex items-center justify-center text-3xl mx-auto">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#1a2e5e]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#5b6475]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-16 bg-[#071120] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 text-center">
            {[
              ["1000+", "Projects Completed"],
              ["10+", "Years Experience"],
              ["300+", "Happy Clients"],
              ["98%", "Client Retention"],
              ["24/7", "Support Available"],
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-[#6EA8FF]">{item[0]}</h3>
                <p className="mt-2 text-[#B7C2D8] text-sm">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
            {/* CTA */}
      <section className="py-24 bg-[#f8fbff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[36px] bg-[#071120] text-white px-8 md:px-16 py-16">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2b4c9a]/30 blur-[120px] rounded-full"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="inline-flex px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[#6EA8FF] text-xs font-semibold uppercase tracking-wider">
                  Let's Grow Together
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight">
                  Let's Build Something
                  <span className="text-[#6EA8FF]"> Amazing Together</span>
                </h2>

                <p className="mt-5 text-[#B7C2D8] leading-relaxed max-w-xl">
                  Have a project in mind? Let’s create a premium digital experience designed to generate real business growth.
                </p>

                <button className="mt-8 px-8 py-4 rounded-xl bg-[#2b4c9a] hover:bg-[#4f7cff] transition-all duration-300 font-semibold shadow-[0_15px_40px_rgba(43,76,154,0.35)]">
                  Start Your Project →
                </button>
              </div>

              <div>
                <img
                  src="/images/dashboard-preview.png"
                  alt="Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
