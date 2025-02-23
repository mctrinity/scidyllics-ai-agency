import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ShapeDivider from "@/components/common/ShapeDivider";

export default function HomePage() {
  return (
    <div className="bg-white text-white relative">
      <Hero />
      <ShapeDivider position="bottom" type="wave" color="#F5F5F5" />

      <Services />
      <ShapeDivider position="top" type="wave2" color="#F5F5F5" />

      <WhyChooseUs />
      <ShapeDivider position="bottom" type="wave" color="#F5F5F5" />

      <Testimonials />
      <ShapeDivider position="top" type="wave2" color="#F5F5F5" />

      <CTA />
    </div>
  );
}
