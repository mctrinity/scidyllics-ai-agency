import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ShapeDivider from "@/components/common/ShapeDivider"; // Import Shape Divider

export default function HomePage() {
  return (
    <div className="bg-white text-white relative">
      <Hero />
      <ShapeDivider /> {/* ✅ Now it extends full width without Hero container restrictions */}
      <Services />
      <ShapeDivider /> {/* ✅ Now it extends full width without Hero container restrictions */}
      <WhyChooseUs />
      <ShapeDivider /> {/* ✅ Now it extends full width without Hero container restrictions */}
      <Testimonials />
      <ShapeDivider /> {/* ✅ Now it extends full width without Hero container restrictions */}
      <CTA />
    </div>
  );
}
