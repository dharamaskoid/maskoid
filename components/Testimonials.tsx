"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

export default function Testimonials() {
  return (
        <section className="relative bg-[#1a2e5e] py-16 px-6 overflow-hidden">

          {/* 🌊 PREMIUM ANIMATED BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">

            {/* MAIN BLUE GLOW */}
            <motion.div
              animate={{
                x: [0, 40, 0],
                y: [0, -30, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-32 left-0 w-[500px] h-[500px] bg-[#2b4c9a]/20 blur-[140px] rounded-full"
            />

            {/* PURPLE GLOW */}
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 40, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"
            />

            
            {/* FLOATING ORBS */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-32 left-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-1/3 w-52 h-52 bg-cyan-400/10 rounded-full blur-3xl"
            />

            {/* CENTER LIGHT */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/5 blur-3xl rounded-full"
            />

          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">

            {/* BADGE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-[#102347] border border-[#1f3d84] text-[#3B82F6] text-xs font-semibold uppercase"
            >
              About Maskoid
            </motion.p>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl md:text-4xl font-bold text-white"
            >
              What Our <span className="text-[#6EA8FF]">Clients Say</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="text-[#B7C2D8] mt-4"
            >
              Premium experiences from real businesses
            </motion.p>

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

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: i * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -10,
                      }}
                      className="group relative transition-all duration-500 scale-[0.96] opacity-90 hover:scale-100 hover:opacity-100"
                    >

                      {/* GLOW */}
                      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-[#2b4c9a]/40 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

                      {/* CARD */}
                      <div className="relative bg-white/5 border border-white/10 p-7 rounded-3xl backdrop-blur-xl text-left overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.07]">

                        {/* TOP LIGHT */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                        {/* SHINE EFFECT */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                        {/* STARS */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-yellow-400 mb-4 tracking-wider text-lg"
                        >
                          ★★★★★
                        </motion.div>

                        {/* TEXT */}
                        <p className="text-[#D8E1F0] text-sm leading-relaxed font-medium">
                          “{item.text}”
                        </p>

                        {/* USER */}
                        <div className="mt-7 flex items-center gap-3">

                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                            }}
                            className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-white font-bold shadow-lg`}
                          >
                            {item.letter}
                          </motion.div>

                          <p className="text-white text-sm font-semibold">
                            {item.name}
                          </p>

                        </div>

                      </div>

                    </motion.div>

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