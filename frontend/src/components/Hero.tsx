"use client"; // Needed if using Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center mt-16" // Added mt-16 for top margin
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-up">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            AI-Powered Solutions for Smart Businesses
          </h1>
          <p
            className="text-lg mt-4 animate-fade-in delay-200"
            style={{ color: "var(--text-color)" }}
          >
            Automate workflows, enhance customer experiences, and drive business growth with AI.          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-[#497D74] text-white font-bold text-lg rounded-lg hover:bg-[#3b665e] transition transform hover:scale-105"
          >
            Get a Free AI Consultation
          </a>
        </div>

        {/* Right Side - Hero Image Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center animate-scale-in delay-300">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true} // Arrows are hidden via CSS
          loop={true} // Enables infinite looping
          className="w-full max-w-lg"
        >
            <SwiperSlide>
              <Image
                src="/hero-image1.png"
                alt="AI Automation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/hero-image2.png"
                alt="AI Chatbots"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/hero-image3.png"
                alt="AI Data Analytics"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
}
