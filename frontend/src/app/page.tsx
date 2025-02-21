import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="bg-white text-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  );
}
