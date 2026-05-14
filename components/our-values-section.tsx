export default function OurValuesSection() {
  const values = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L25 15L35 17L28 25L29 35L20 30L11 35L12 25L5 17L15 15L20 5Z" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <path d="M20 12L23 18L29 19L24.5 24L25.5 30L20 27L14.5 30L15.5 24L11 19L17 18L20 12Z" stroke="#3B82F6" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      title: "Integrity",
      description: "We believe in honesty, transparency, and building real relationships."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35V15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 15L12 25H16V35H24V25H28L20 15Z" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <circle cx="20" cy="8" r="3" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <path d="M10 12L8 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 12L32 10" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Performance",
      description: "We focus on measurable results and long-term growth."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5C15 5 12 10 12 15C12 20 15 22 15 25H25C25 22 28 20 28 15C28 10 25 5 20 5Z" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <path d="M15 28H25" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 31H24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 34H22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 5V2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 10L33 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 10L7 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Innovation",
      description: "We stay ahead with creative ideas, smart strategies, and modern technology."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="12" r="5" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <circle cx="26" cy="12" r="5" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <path d="M7 35V30C7 26 10 23 14 23H16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M33 35V30C33 26 30 23 26 23H24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 28H24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Partnership",
      description: "We grow when our clients grow. Your success is our success."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="10" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="20" r="5" stroke="#3B82F6" strokeWidth="2" fill="none"/>
          <path d="M20 20L28 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Accountability",
      description: "We take ownership, stay committed, and deliver on our promises."
    }
  ]

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
