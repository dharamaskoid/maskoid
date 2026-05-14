export default function OurStorySection() {
  return (
    <section className="bg-[#f8f9fb] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-widest text-[#3b5998]">
                OUR STORY
              </span>
              <div className="w-12 h-[2px] bg-[#3b5998]"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight">
              We Started With A Simple Idea
              <br />
              To Drive <span className="text-[#3b5998]">Real Growth</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Maskoid began with a simple belief — businesses deserve more than just a website. They deserve a digital growth system that attracts, engages, and converts.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From SEO and paid ads to web design and performance marketing, we build everything in-house with strategy, creativity, and data.
            </p>

          </div>

          {/* Right Content - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our Mission */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="23" stroke="#3b5998" strokeWidth="2" fill="none" />
                  <path
                    d="M24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16ZM24 29C21.24 29 19 26.76 19 24C19 21.24 21.24 19 24 19C26.76 19 29 21.24 29 24C29 26.76 26.76 29 24 29Z"
                    fill="#3b5998"
                  />
                  <circle cx="24" cy="24" r="3" fill="#3b5998" />
                  <path d="M24 12V14" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 34V36" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 24H14" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                  <path d="M34 24H36" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Our Mission</h3>
              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To deliver result-driven digital solutions that help businesses grow and scale with measurable impact.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="23" stroke="#3b5998" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="24" r="12" stroke="#3b5998" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="24" r="6" stroke="#3b5998" strokeWidth="2" fill="none" />
                  <circle cx="24" cy="24" r="2" fill="#3b5998" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Our Vision</h3>
              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become a global digital growth partner known for innovation, transparency, and long-term success.
              </p>
            </div>

            {/* Our Approach */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="mb-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="23" stroke="#3b5998" strokeWidth="2" fill="none" />
                  <path
                    d="M24 32L20 24L24 16L28 24L24 32Z"
                    stroke="#3b5998"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path d="M24 16V12" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="17" cy="14" r="2" fill="#3b5998" />
                  <circle cx="31" cy="14" r="2" fill="#3b5998" />
                  <path d="M20 24H16" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 24H28" stroke="#3b5998" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">Our Approach</h3>
              <div className="w-8 h-[2px] bg-[#3b5998] mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Strategy-first, data-driven, and focused on ROI. We combine creativity with technology to deliver results that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
