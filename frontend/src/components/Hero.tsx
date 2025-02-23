"use client";

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
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center pt-16 pb-24 md:pt-20 z-10 overflow-hidden"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Hero Container */}
      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto">
        
        {/* Right Side - Hero Image Carousel */}
        <div className="flex justify-center animate-scale-in delay-300 order-1 lg:order-2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            loop={true}
            className="w-full max-w-md"
          >
            <SwiperSlide>
              <Image
                src="/hero-image1.png"
                alt="AI Automation"
                width={550}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/hero-image2.png"
                alt="AI Chatbots"
                width={550}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/hero-image3.png"
                alt="AI Data Analytics"
                width={550}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left animate-slide-up order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            AI-Powered Solutions for Smart Businesses
          </h1>
          <p className="text-lg mt-4 animate-fade-in delay-200">
            Automate workflows, enhance customer experiences, and drive business growth with AI.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-[#497D74] text-white font-bold text-lg rounded-lg hover:bg-[#3b665e] transition transform hover:scale-105"
          >
            Get a Free AI Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
