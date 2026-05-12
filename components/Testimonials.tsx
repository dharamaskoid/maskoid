"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
        <section className="relative bg-[#071120] py-28 px-6 overflow-hidden">

          {/* 🌊 PREMIUM BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none">

            {/* BLUE GLOW */}
            <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/20 blur-[140px] rounded-full animate-pulse"></div>

            {/* PURPLE GLOW */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full animate-pulse"></div>

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

            {/* FLOATING ORBS */}
            <div className="absolute top-32 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-floatSlow"></div>

            <div className="absolute bottom-20 right-1/3 w-52 h-52 bg-cyan-400/10 rounded-full blur-3xl animate-floatSlow2"></div>

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

                {[
                  {
                    name: "Anju Meena",
                    letter: "R",
                    text: "Thanks to Maskoid Technologies' efforts, the client saw results in their keyword rankings and business growth.",
                    color: "bg-blue-500",
                  },
                  {
                    name: "Panna Seth",
                    letter: "A",
                    text: "Maskoid Technologies' work yielded positive results within 6–8 months, improving business visibility significantly.",
                    color: "bg-purple-500",
                  },
                  {
                    name: "Dharmesh Patel",
                    letter: "V",
                    text: "Thanks to Maskoid Technologies, the client almost doubled their sales and ranked on the first page of Google.",
                    color: "bg-green-500",
                  },
                  {
                    name: "Subhash Meena",
                    letter: "S",
                    text: "The team works efficiently, delivering reliable services without sacrificing quality and punctuality.",
                    color: "bg-emerald-500",
                  },
                ].map((item, i) => (
                  <SwiperSlide key={i}>

                    <div className="group relative transition-all duration-500 scale-[0.96] opacity-90 hover:scale-100 hover:opacity-100">

                      {/* GLOW */}
                      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#2b4c9a]/40 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                      {/* CARD */}
                      <div className="relative bg-white/5 border border-white/10 p-7 rounded-3xl backdrop-blur-xl text-left overflow-hidden">

                        {/* TOP LIGHT */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                        {/* STARS */}
                        <div className="text-yellow-400 mb-4 tracking-wider text-lg">
                          ★★★★★
                        </div>

                        {/* TEXT */}
                        <p className="text-[#D8E1F0] text-sm leading-relaxed font-medium">
                          “{item.text}”
                        </p>

                        {/* USER */}
                        <div className="mt-7 flex items-center gap-3">

                          <div
                            className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-white font-bold shadow-lg`}
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

          <style jsx>{`
            .testimonial-swiper {
              padding-top: 40px;
              padding-bottom: 40px;
            }

            @keyframes floatSlow {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
              100% {
                transform: translateY(0px);
              }
            }

            @keyframes floatSlow2 {
              0% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(20px);
              }
              100% {
                transform: translateY(0px);
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