import {
  FiShield,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiTarget,
} from "react-icons/fi";


export default function OurValuesSection() {
 const values = [
  {
    icon: <FiShield className="text-[#3B82F6] text-[42px]" />,
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and building real relationships.",
  },
  {
    icon: <FiTrendingUp className="text-[#3B82F6] text-[42px]" />,
    title: "Performance",
    description:
      "We focus on measurable results and long-term growth.",
  },
  {
    icon: <FiZap className="text-[#3B82F6] text-[42px]" />,
    title: "Innovation",
    description:
      "We stay ahead with creative ideas, smart strategies, and modern technology.",
  },
  {
    icon: <FiUsers className="text-[#3B82F6] text-[42px]" />,
    title: "Partnership",
    description:
      "We grow when our clients grow. Your success is our success.",
  },
  {
    icon: <FiTarget className="text-[#3B82F6] text-[42px]" />,
    title: "Accountability",
    description:
      "We take ownership, stay committed, and deliver on our promises.",
  },
];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">

          <div className="w-full mb-4">
            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              OUR Value
            </p>
          </div>  
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Principles That Drive Everything <span className="text-blue-500">We Do</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center relative px-4
                ${index !== values.length - 1 ? "lg:border-r lg:border-[#dbe7ff]" : ""}
                `}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          
      </div>
    </section>
  )
}
