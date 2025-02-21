export default function CTA() {
    return (
      <section className="w-full py-20 bg-cyan-500 text-black text-center" data-aos="fade-up"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold">Ready to Automate Your Business with AI?</h2>
          <p className="text-lg mt-4">Get started today with a free AI consultation.</p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-black text-cyan-500 font-bold text-lg rounded-lg hover:bg-gray-900 transition transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    );
  }
  