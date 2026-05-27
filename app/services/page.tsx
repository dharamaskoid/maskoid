
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

        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#1a2e5e]">
                Our Services
            </h1>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                We build premium digital experiences that help brands
                grow, scale, and dominate online.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-[#EEF2FF] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                <div className="relative overflow-hidden">
                    <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                    />
                </div>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-[#1a2e5e] mb-4">
                    {service.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                    {service.description}
                    </p>

                    <div className="mt-6 text-[#2b4c9a] font-semibold">
                    Explore Service →
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