"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

export default function GoogleReviews() {

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {

    async function fetchReviews() {

      try {

        const res = await fetch("/api/google-reviews");

        const data = await res.json();

        setReviews(data.reviews || []);

      } catch (error) {
        console.error(error);
      }
    }

    fetchReviews();

  }, []);

  return (

    <section className="relative py-16 bg-[#EEF2FF] overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,#1a2e5e_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="inline-flex px-5 py-2 rounded-full bg-blue-500/10 text-[#3B82F6] text-xs font-semibold uppercase tracking-[0.2em]">
            Google Reviews
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#1a2e5e]">
            Trusted By
            <span className="text-[#2b4c9a]"> Happy Clients</span>
          </h2>

        </div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-[32px]
                border border-white/60
                bg-white/70
                backdrop-blur-xl
                p-8
                shadow-[0_20px_60px_rgba(43,76,154,0.08)]
                hover:shadow-[0_30px_80px_rgba(43,76,154,0.14)]
                transition-all duration-500
              "
            >

              {/* USER */}
              <div className="flex items-center gap-4">

                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-14 h-14 rounded-2xl object-cover"
                />

                <div>

                  <h3 className="text-lg font-bold text-[#1a2e5e]">
                    {review.author_name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.relative_time_description}
                  </p>

                </div>

              </div>

              {/* STARS */}
              <div className="flex items-center gap-1 mt-6">

                {[...Array(review.rating)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* REVIEW TEXT */}
              <p className="mt-6 text-gray-500 leading-relaxed">
                {review.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}