import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ IMPORT COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Website Name",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F1A] text-white">

        {/* ✅ HEADER */}
        <Header />

        {/* ✅ MAIN CONTENT */}
        <main className="flex-grow">
          {children}
           {/* 🔥 FLOATING WHATSAPP BUTTON (GLOBAL) */}
        <a
          href="https://wa.me/917574084008"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300 hover:scale-110"
        >
          {/* WhatsApp Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="white"
            className="w-7 h-7"
          >
            <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.95 2.98 4.73 4.18.66.29 1.17.46 1.57.59.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.18.16-1.28-.07-.11-.25-.18-.52-.32z" />
            <path d="M16 3C9.37 3 4 8.37 4 15c0 2.1.55 4.15 1.59 5.95L4 29l8.28-1.54C14.06 28.5 15.01 28.7 16 28.7c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.7c-.88 0-1.76-.15-2.59-.44l-.37-.13-4.91.91.93-4.79-.15-.39C8.58 18.05 8 16.55 8 15c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8z" />
          </svg>
        </a>

        </main>

        {/* ✅ FOOTER */}
        <Footer />

      </body>
    </html>
  );
}