export default function StatsSection() {
  const stats = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      value: "1000+",
      label: "Projects Completed"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
          <path d="M12 7V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="8" r="4" stroke="white" strokeWidth="2"/>
          <circle cx="17" cy="8" r="3" stroke="white" strokeWidth="2"/>
          <path d="M3 21V19C3 16.79 4.79 15 7 15H11C13.21 15 15 16.79 15 19V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 15C19.21 15 21 16.79 21 19V21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      value: "300+",
      label: "Happy Clients"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      value: "98%",
      label: "Client Retention"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      value: "24/7",
      label: "Support Available"
    }
  ]

  return (
    <section className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 flex-1 min-w-[180px] justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
