"use client";
import Link from "next/link";

const posts = [
  {
    title: "5 Reasons to Choose Upavan Villa for Your Next Getaway",
    excerpt: "Discover why Upavan Villa is the perfect destination for relaxation, comfort, and memorable experiences.",
    slug: "#"
  },
  {
    title: "A Day at Upavan Villa: Guest Experiences",
    excerpt: "Read about how our guests spend their days enjoying the villa, the amenities, and the beautiful surroundings.",
    slug: "#"
  },
  {
    title: "Nearby Attractions to Explore",
    excerpt: "Explore the best places to visit near Upavan Villa, from nature trails to local cuisine.",
    slug: "#"
  }
];

export default function Blog() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#0F086A]">Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={post.slug} className="text-[#0F086A] font-bold mt-auto hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
} 