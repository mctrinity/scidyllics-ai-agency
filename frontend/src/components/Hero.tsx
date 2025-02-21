import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center"
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
            Automate workflows, enhance customer experiences, and drive business growth with intelligent AI.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-cyan-500 text-black font-bold text-lg rounded-lg hover:bg-cyan-400 transition transform hover:scale-105"
          >
            Get a Free AI Consultation
          </a>
        </div>

        {/* Right Side - Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate-scale-in delay-300">
          <Image
            src="/hero-image.png"
            alt="AI Automation"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
