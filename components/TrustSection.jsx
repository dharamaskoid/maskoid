import React from "react";

// ROW 1 LOGOS
const logosRow1 = [
  "/images/Client-1-1.png",
  "/images/Client-1-2.png",
  "/images/Client-1-3.png",
  "/images/Client-1-5.png",
  "/images/Client-1-6.png",
  "/images/Client-1-7.png",
  "/images/Client-1-11.png",
  "/images/Client-1-12.png",
  "/images/Client-1-13.png",
  "/images/Client-1-14.png",
  "/images/Client-1-15.png",
  "/images/Client-1-16.png",
];

// ROW 2 LOGOS (DIFFERENT)
const logosRow2 = [
  "/images/Client-1-17.png",
  "/images/Client-1-19.png",
  "/images/Client-1-20.png",
  "/images/Client-1-21.png",
  "/images/Client-1-22.png",
  "/images/Client-1-23.png",
  "/images/Client-1-24.png",
  "/images/Client-1-25.png",
  "/images/Client-1-26.png",
  "/images/Client-1-27.png",
  "/images/Client-1-28.png",
  "/images/Client-1-29.png",
  "/images/Client-1-30.png",
];

const BrandMarquee = () => {
  return (
    <section className="py-16 bg-[#928D87] overflow-hidden">

        <div className="max-w-6xl mx-auto px-6 text-center mb-12">

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-blue-400 uppercase tracking-wider hover:bg-blue-500/20 transition">
                Trusted by brands
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 animate-titleMain">
                Powering Growth for Modern Businesses
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl mx-auto animate-titleSub">
                We help companies scale with high-performing digital systems.
            </p>

        </div>

      <div className="space-y-10">

        {/* ROW 1 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 items-center">
            {[...logosRow1, ...logosRow1].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-14 md:h-16 object-contain hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-16 items-center">
            {[...logosRow2, ...logosRow2].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-14 md:h-16 object-contain hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default BrandMarquee;