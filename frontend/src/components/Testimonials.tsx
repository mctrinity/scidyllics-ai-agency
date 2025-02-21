export default function Testimonials() {
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
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
        <p
          className="text-lg mt-4"
          style={{ color: "var(--text-color-light)" }} // Ensuring good readability
        >
          Hear from businesses that transformed with AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Testimonial 1 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <p style={{ color: "var(--text-color-light)" }}>
              "SciDyllics automated our lead generation process, increasing conversions by 40%!"
            </p>
            <h3 className="mt-4 font-semibold text-cyan-500">John Doe, CEO at TechCorp</h3>
          </div>

          {/* Testimonial 2 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <p style={{ color: "var(--text-color-light)" }}>
              "Their AI chatbots saved us thousands in customer support costs!"
            </p>
            <h3 className="mt-4 font-semibold text-cyan-500">Sarah Johnson, Founder of E-Shop</h3>
          </div>

          {/* Testimonial 3 */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
          >
            <p style={{ color: "var(--text-color-light)" }}>
              "AI-driven content marketing boosted our SEO rankings in just three months."
            </p>
            <h3 className="mt-4 font-semibold text-cyan-500">Michael Lee, Marketing Director</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
