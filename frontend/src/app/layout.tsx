"use client";

import "./globals.css";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget"; // ✅ Import Chatbot Widget

export default function RootLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body className="bg-white text-white">
        <Header />
        <main>{children}</main>
        <Footer />

        {/* ✅ Chatbot will now appear on all pages */}
        <ChatbotWidget />
      </body>
    </html>
  );
}
