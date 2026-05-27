
import Link from "next/link";
import Image from "next/image";

import { services } from "@/lib/services";
import ServicesHero from "@/components/services/ServicesHero";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const metadata = {
  title: "Our Services | Maskoid",
  description:
    "Explore premium digital marketing, web development, SEO, PPC, and branding services by Maskoid.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white overflow-hidden pt-[81.5px] lg:pt-[81.5px]">

        <ServicesHero />

        <section className="py-16 bg-[#EEF2FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">


            {/* CARDS */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => (

                <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative rounded-[32px] overflow-hidden bg-white border border-white/60 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_80px_rgba(43,76,154,0.15)] transition-all duration-500 hover:-translate-y-2"
                >

                {/* CARD GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2b4c9a]/5 via-transparent to-blue-400/10"></div>
                </div>

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e5e]/20 to-transparent z-10"></div>

                    <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={500}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* FLOATING NUMBER */}
                    <div className="absolute top-5 right-5 z-20 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    0{index + 1}
                    </div>

                </div>

                {/* CONTENT */}
                <div className="relative p-8">

                    {/* MINI TAG */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#2b4c9a] text-xs font-semibold uppercase tracking-wide">
                    Premium Service
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-5 text-2xl font-bold text-[#1a2e5e] leading-snug">
                    {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                    {service.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex items-center justify-between">

                    <span className="text-[#2b4c9a] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                        Explore Service
                        <span>→</span>
                    </span>

                    {/* ICON BOX */}
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] group-hover:bg-[#2b4c9a] text-[#2b4c9a] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        ↗
                    </div>

                    </div>

                </div>

                </Link>

            ))}

            </div>

        </div>
        </section>

    </main>
  );
}