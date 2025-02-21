import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header"; // Ensure correct casing and path
import Footer from "@/components/Footer"; // Ensure correct casing and path

export const metadata = {
  title: "SciDyllics Consultants | AI Automation & Chatbots",
  description: "AI-powered automation and chatbot solutions for businesses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
