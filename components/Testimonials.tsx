"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="relative bg-[#071120] py-28 px-6 overflow-hidden">

  {/* 🌌 ANIMATED BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* BLUE GLOW */}
    <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#2b4c9a]/20 blur-[160px] rounded-full animate-pulse"></div>

    {/* PURPLE GLOW */}
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6b46c1]/20 blur-[160px] rounded-full animate-pulse"></div>

    {/* FLOATING GRID */}
    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#6EA8FF_1px,transparent_1px)] [background-size:38px_38px] animate-gridMove"></div>

    {/* FLOATING LIGHT */}
    <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-floatSlow"></div>

    <div className="absolute bottom-1/4 right-1/3 w-52 h-52 bg-purple-400/10 rounded-full blur-3xl animate-floatSlow2"></div>

  </div>

  <div className="max-w-7xl mx-auto text-center relative z-10">

    {/* TITLE */}
    <h2 className="text-3xl md:text-5xl font-bold text-white">
      What Our <span className="text-[#6EA8FF]">Clients Say</span>
    </h2>

    <p className="text-[#B7C2D8] mt-4">
      Premium experiences from real businesses
    </p>

    {/* SLIDER */}
    <div className="mt-16">

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        centeredSlides={true}
        className="testimonial-swiper"
      >

        {/* CARD */}
        {[
          {
            name: "Anju Meena",
            letter: "R",
            text: "Thanks to Maskoid Technologies' efforts, the client saw results in their keyword rankings and business growth. Maskoid Technologies responded on time and communicated through in-person and virtual meetings, emails, and messages. Their efficiency in doing their work and offering support stood out.",
            color: "bg-blue-500",
          },
          {
            name: "Panna Seth",
            letter: "A",
            text: "Maskoid Technologies' work yielded positive results for the client within 6–8 months, including an essential improvement in the client's business visibility. Maskoid Technologies was disciplined, responsive, and supportive, and their Google Ads and SEO expertise was impressive.",
            color: "bg-purple-500",
          },
          {
            name: "Dharmesh Patel",
            letter: "V",
            text: "Thanks to Maskoid Technologies, the client almost doubled their sales and ranked on the first page of Google searches. The client also received daily calls from purchase and procurement managers. The service provider's timeliness, expertise, and understanding approach were hallmarks of their work.",
            color: "bg-green-500",
          },
          {
            name: "Subhash Meena",
            letter: "S",
            text: "The client has been satisfied with Maskoid Technologies' services. The team works very efficiently, delivering reliable services without sacrificing quality and punctuality. They also provide excellent customer support. The partners communicate through email, messaging apps, and in-person meetings.",
            color: "bg-emerald-500",
          },
        ].map((item, i) => (
          <SwiperSlide key={i}>

            <div className="group relative transition-all duration-500 scale-95 opacity-80 hover:scale-105 hover:opacity-100">

              {/* 🔥 ANIMATED GLOW */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2b4c9a] via-[#6EA8FF] to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

              {/* CARD */}
              <div className="relative bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl text-left overflow-hidden">

                {/* TOP LIGHT EFFECT */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6EA8FF] to-transparent opacity-50"></div>

                {/* FLOATING SHINE */}
                <div className="absolute -left-20 top-0 w-24 h-full bg-white/10 rotate-12 blur-xl opacity-0 group-hover:opacity-100 group-hover:left-[120%] transition-all duration-1000"></div>

                <div className="text-yellow-400 mb-3 tracking-[2px]">
                  ★★★★★
                </div>

                {/* TEXT */}
                <p className="text-white text-sm leading-relaxed font-medium">
                  “{item.text}”
                </p>

                {/* USER */}
                <div className="mt-6 flex items-center gap-3">

                  <div
                    className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {item.letter}
                  </div>

                  <p className="text-white text-sm font-semibold">
                    {item.name}
                  </p>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>

  </div>

  {/* CUSTOM CSS */}
  <style jsx>{`
    .testimonial-swiper {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    @keyframes gridMove {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(40px);
      }
    }

    .animate-gridMove {
      animation: gridMove 12s linear infinite;
    }

    @keyframes floatSlow {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes floatSlow2 {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(20px);
      }
    }

    .animate-floatSlow {
      animation: floatSlow 8s ease-in-out infinite;
    }

    .animate-floatSlow2 {
      animation: floatSlow2 10s ease-in-out infinite;
    }
  `}</style>

</section>
  );
}