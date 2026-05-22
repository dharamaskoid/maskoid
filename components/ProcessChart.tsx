const steps = [
  {
    id: "01",
    title: "Secure Login",
    subtitle: "Protected User Authentication",
    description:
      "Access the platform securely using your email or username with advanced password protection and Google reCAPTCHA verification for enhanced account safety.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M6 10V7a6 6 0 1 1 12 0v3" />
        <rect x="4" y="10" width="16" height="10" rx="2" />
      </svg>
    ),
  },

  {
    id: "02",
    title: "Smart Dashboard",
    subtitle: "Real-Time Analytics Overview",
    description:
      "Monitor active licenses, expired keys, pending activations, and system performance through an intelligent analytics-driven dashboard interface.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },

  {
    id: "03",
    title: "Create Software",
    subtitle: "Add New Applications",
    description:
      "Register and manage your software products effortlessly by adding software names, application IDs, and licensing configurations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },

  {
    id: "04",
    title: "Software Management",
    subtitle: "Track All Applications",
    description:
      "View complete software listings with total license counts, issued keys, pending licenses, and overall software activity status.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    ),
  },

  {
    id: "05",
    title: "Generate License Keys",
    subtitle: "Automated Key Creation",
    description:
      "Instantly generate secure 24-character software license keys with user allocation and advanced activation management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 2l-2 2" />
        <path d="M7.5 7.5l9-9" />
        <path d="M7 14l-5 5v3h3l5-5" />
      </svg>
    ),
  },

  {
    id: "06",
    title: "License Key List",
    subtitle: "Centralized License Tracking",
    description:
      "Manage and filter all software licenses including active, inactive, expired, and suspended license holders in one place.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M8 6h13" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M3 6h.01" />
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
      </svg>
    ),
  },

  {
    id: "07",
    title: "Verification Logs",
    subtitle: "Activation Activity Records",
    description:
      "Track software activations with complete API verification logs including system information, activation time, and first-use records.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },

  {
    id: "08",
    title: "Re-Verification Logs",
    subtitle: "Usage Monitoring System",
    description:
      "Monitor every software login and re-verification attempt with accurate user activity timestamps and usage insights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10" />
        <path d="M20.49 15A9 9 0 0 1 6.36 18.36L1 14" />
      </svg>
    ),
  },

  {
    id: "09",
    title: "Create Users",
    subtitle: "Advanced User Management",
    description:
      "Add and manage software users by assigning usernames, software applications, and application IDs with flexible permissions.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
  },

  {
    id: "10",
    title: "All Users",
    subtitle: "Complete User Database",
    description:
      "View all registered users, previous customers, active license holders, and account history from a centralized management panel.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];