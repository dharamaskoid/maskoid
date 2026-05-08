"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="relative bg-[#0B0F1A] py-28 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/15 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          What Our <span className="text-[#6EA8FF]">Clients Say</span>
        </h2>

        <p className="text-gray-300 mt-4">
          Premium experiences from real businesses
        </p>

        {/* SLIDER */}
        <div className="mt-16">

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,              // ✅ readable motion
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

                  {/* glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition"></div>

                  {/* CARD */}
                  <div className="relative bg-white/10 border border-white/15 p-6 rounded-2xl backdrop-blur-xl text-left">

                    <div className="text-yellow-400 mb-3">★★★★★</div>

                    {/* 🔥 FIXED READABILITY */}
                    <p className="text-white text-sm leading-relaxed font-medium">
                      “{item.text}”
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
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

      <style jsx>{`
        .testimonial-swiper {
          padding-top: 40px;
          padding-bottom: 40px;
        }
      `}</style>

    </section>
  );
}