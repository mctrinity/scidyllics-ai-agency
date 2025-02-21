export default function Testimonials() {
    return (
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 mt-4">
            Hear from businesses that transformed with AI.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            
            {/* Testimonial 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "SciDyllics automated our lead generation process, increasing conversions by 40%!"
              </p>
              <h3 className="mt-4 font-semibold text-cyan-500">John Doe, CEO at TechCorp</h3>
            </div>
  
            {/* Testimonial 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "Their AI chatbots saved us thousands in customer support costs!"
              </p>
              <h3 className="mt-4 font-semibold text-cyan-500">Sarah Johnson, Founder of E-Shop</h3>
            </div>
  
            {/* Testimonial 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-gray-300">
                "AI-driven content marketing boosted our SEO rankings in just three months."
              </p>
              <h3 className="mt-4 font-semibold text-cyan-500">Michael Lee, Marketing Director</h3>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  