import Image from "next/image";
import Link from "next/link";

// Blog Data (Replace this with API data later)
const blogs = [
  {
    id: 1,
    title: "The Future of AI in Business",
    description: "How artificial intelligence is transforming industries.",
    image: "/blog1.webp", // ✅ Correct WebP path
    date: "March 5, 2025",
    slug: "future-of-ai",
  },
  {
    id: 2,
    title: "Understanding Machine Learning",
    description: "A beginner-friendly guide to ML concepts and applications.",
    image: "/blog2.webp", // ✅ Correct WebP path
    date: "March 3, 2025",
    slug: "understanding-ml",
  },
  {
    id: 3,
    title: "Next.js vs React: Which One Should You Use?",
    description: "Comparing Next.js with React to help you decide.",
    image: "/blog3.webp", // ✅ Correct WebP path
    date: "March 1, 2025",
    slug: "nextjs-vs-react",
  },
];

export default function Blog() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-[#497D74] mb-8">Our Blog</h1>

      {/* 📝 Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className="block group">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}  // ✅ WebP image from `public/`
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#497D74]">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <span className="text-gray-400 text-sm mt-2 block">{blog.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
