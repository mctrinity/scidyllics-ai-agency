"use client";

import "./globals.css";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        {/* ✅ Removed 'container mx-auto' from <main> to avoid restricting Shape Divider */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
