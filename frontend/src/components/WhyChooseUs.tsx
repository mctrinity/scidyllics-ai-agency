import { ShieldCheck } from "lucide-react"; // Import an icon for trust & reliability

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-20 transition-all duration-300"
      data-aos="fade-up"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading with Icon */}
        <div className="flex justify-center items-center gap-3">
          <ShieldCheck size={36} className="text-[#497D74]" />
          <h2 className="text-4xl font-bold">Why Choose SciDyllics?</h2>
        </div>

        <p
          className="text-lg mt-4"
          style={{ color: "var(--text-color-light)" }} // Ensures good readability
        >
          We provide cutting-edge AI automation and chatbot solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Feature 1 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-xl font-semibold">Custom AI Solutions</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
              Tailored AI automation for businesses.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
              Works with your existing software.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="600"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-xl font-semibold">Expert AI Consultants</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
              Maximizing efficiency for your company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
