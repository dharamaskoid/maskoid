import { ArrowRight } from "lucide-react"


export default function CTASection() {
  return (
    <section className="bg-[#EEF4FF] py-16 px-6 md:px-8 lg:px-16 overflow-hidden">
      <div className="container rounded-xl px-16 py-16 bg-[linear-gradient(90deg,#021B5B_0%,#032B8C_50%,#0B46D8_100%)] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6">

            <p className="inline-block w-auto px-5 py-1.5 rounded-full text-xs font-medium border border-blue-400/20 bg-blue-500/10 text-[#3B82F6] uppercase tracking-wider hover:bg-blue-500/20 transition">
              Let&apos;s Grow Together
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-blue-400">Amazing</span> Together
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Have a project in mind? Let&apos;s create a digital experience that drives growth and sets your business apart.
            </p>
            
            <button 
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="8" width="3" height="6" fill="white"/>
                        <rect x="6.5" y="5" width="3" height="9" fill="white"/>
                        <rect x="11" y="2" width="3" height="12" fill="white"/>
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-800">Analytics</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-end justify-between h-32 gap-2">
                    <div className="w-full flex items-end justify-around gap-1 h-full">
                      <div className="w-6 bg-blue-200 rounded-t" style={{height: '40%'}}></div>
                      <div className="w-6 bg-blue-300 rounded-t" style={{height: '60%'}}></div>
                      <div className="w-6 bg-blue-400 rounded-t" style={{height: '45%'}}></div>
                      <div className="w-6 bg-blue-500 rounded-t" style={{height: '80%'}}></div>
                      <div className="w-6 bg-blue-400 rounded-t" style={{height: '55%'}}></div>
                      <div className="w-6 bg-blue-300 rounded-t" style={{height: '70%'}}></div>
                      <div className="w-6 bg-blue-500 rounded-t" style={{height: '90%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-blue-600">2.4K</div>
                    <div className="text-xs text-gray-500">Visitors</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-green-600">+18%</div>
                    <div className="text-xs text-gray-500">Growth</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-purple-600">$12K</div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2L10 6L14 6.5L11 10L12 14L8 12L4 14L5 10L2 6.5L6 6L8 2Z" fill="#F97316"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Rating</div>
                    <div className="text-sm font-bold text-gray-800">4.9/5</div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 5L6 12L3 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Tasks</div>
                    <div className="text-sm font-bold text-gray-800">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
