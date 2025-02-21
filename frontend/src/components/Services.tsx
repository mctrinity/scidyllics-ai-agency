import { BrainCircuit } from "lucide-react"; // Importing an AI-related icon

export default function Services() {
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
          <BrainCircuit size={36} className="text-[#497D74]" />
          <h2 className="text-4xl font-bold">Our AI-Powered Services</h2>
        </div>

        <p
          className="text-lg mt-4"
          style={{ color: "var(--text-color-light)" }} // Ensuring readable contrast
        >
          Revolutionize your business with cutting-edge AI solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Service 1 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-2xl font-semibold">Workflow Automation</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
            Leverage cutting-edge technology to optimize your business.
            </p>
          </div>

          {/* Service 2 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-2xl font-semibold">AI Agents & LLMs</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
              Enhance customer interactions with intelligent virtual assistants powered by large language models.
            </p>

          </div>

          {/* Service 3 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <h3 className="text-2xl font-semibold">Data & Analytics</h3>
            <p style={{ color: "var(--text-color-light)" }} className="mt-2">
            Make better decisions with actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
