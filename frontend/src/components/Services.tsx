export default function Services() {
    return (
      <section className="w-full py-20 bg-gray-900 text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our AI-Powered Services</h2>
          <p className="text-lg text-gray-300 mt-4">
            Revolutionize your business with cutting-edge AI solutions.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold">AI Workflow Automation</h3>
              <p className="text-gray-300 mt-2">Leverage AI to optimize your business.</p>
            </div>
  
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-semibold">AI Chatbots</h3>
              <p className="text-gray-300 mt-2">Enhance customer support with AI.</p>
            </div>
  
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-semibold">AI Data & Analytics</h3>
              <p className="text-gray-300 mt-2">Make better decisions with AI insights.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  