import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Why Choose SciDyllics?</h2>
        <p className="text-lg text-gray-300 mt-4">
          We provide cutting-edge AI automation and chatbot solutions to scale your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          
          {/* Feature 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-cyan-500" />
            <div>
              <h3 className="text-xl font-semibold">Custom AI Solutions</h3>
              <p className="text-gray-300 mt-2">
                Tailored AI automation to fit your business needs.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-cyan-500" />
            <div>
              <h3 className="text-xl font-semibold">Seamless Integration</h3>
              <p className="text-gray-300 mt-2">
                Works with your existing software, ensuring a smooth transition.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg flex items-center space-x-4">
            <CheckCircleIcon className="h-8 w-8 text-cyan-500" />
            <div>
              <h3 className="text-xl font-semibold">Expert AI Consultants</h3>
              <p className="text-gray-300 mt-2">
                Our AI specialists ensure maximum efficiency for your business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
