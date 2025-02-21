export default function WhyChooseUs() {
    return (
      <section className="w-full py-20 bg-black text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Why Choose SciDyllics?</h2>
          <p className="text-lg text-gray-300 mt-4">
            We provide cutting-edge AI automation and chatbot solutions.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-xl font-semibold">Custom AI Solutions</h3>
              <p className="text-gray-300 mt-2">Tailored AI automation for businesses.</p>
            </div>
  
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="400">
              <h3 className="text-xl font-semibold">Seamless Integration</h3>
              <p className="text-gray-300 mt-2">Works with your existing software.</p>
            </div>
  
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="600">
              <h3 className="text-xl font-semibold">Expert AI Consultants</h3>
              <p className="text-gray-300 mt-2">Maximizing efficiency for your company.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  