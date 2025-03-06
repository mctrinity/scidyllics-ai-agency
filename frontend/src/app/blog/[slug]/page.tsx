"use client"; // ✅ This tells Next.js that this is a Client Component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Sample Blog Data (Replace with API fetching later)
const blogs = [
  {
    id: 1,
    title: "The Future of AI in Business",
    description: "How artificial intelligence is transforming industries.",
    content: "Full blog content goes here...",
    image: "/blog1.webp", // ✅ Reference WebP image
    date: "March 5, 2025",
    slug: "future-of-ai",
  },
  {
    id: 2,
    title: "Understanding Machine Learning",
    description: "A beginner-friendly guide to ML concepts and applications.",
    content: "Full blog content goes here...",
    image: "/blog2.webp", // ✅ Reference WebP image
    date: "March 3, 2025",
    slug: "understanding-ml",
  },
  {
    id: 3,
    title: "Next.js vs React: Which One Should You Use?",
    description: "Comparing Next.js with React to help you decide.",
    content: "Full blog content goes here...",
    image: "/blog3.webp", // ✅ Reference WebP image
    date: "March 1, 2025",
    slug: "nextjs-vs-react",
  },
];

export default function BlogPost() {
    const pathname = usePathname();
    const slug = pathname.split("/").pop(); // Extract slug from URL
    
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-center text-lg text-gray-500">Blog post not found.</p>;
  }

  return (
    <main className="container mx-auto px-6 py-10">
      <Link href="/blog" className="text-[#497D74] mb-4 block">&larr; Back to Blog</Link>

      <h1 className="text-4xl font-bold text-[#497D74]">{blog.title}</h1>
      <p className="text-gray-400 mt-2">{blog.date}</p>

      <div className="relative w-full h-80 my-6 rounded-lg overflow-hidden">
        <Image
          src={blog.image} // ✅ Uses WebP images from public folder
          alt={blog.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">{blog.content}</p>
    </main>
  );
}
