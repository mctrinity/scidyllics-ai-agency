export default function Services() {
    return (
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our AI-Powered Services</h2>
          <p className="text-lg text-gray-300 mt-4">
            Revolutionize your business with cutting-edge AI solutions.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            
            {/* Service 1 - AI Automation */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">AI Workflow Automation</h3>
              <p className="text-gray-300 mt-2">
                Automate repetitive business tasks and improve efficiency.
              </p>
            </div>
  
            {/* Service 2 - AI Chatbots */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">AI Chatbots</h3>
              <p className="text-gray-300 mt-2">
                Deploy intelligent chatbots to enhance customer engagement.
              </p>
            </div>
  
            {/* Service 3 - AI Data Analytics */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">AI Data & Analytics</h3>
              <p className="text-gray-300 mt-2">
                Leverage AI-powered insights to make better business decisions.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  