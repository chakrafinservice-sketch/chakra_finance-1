"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import pb from "@/lib/pb";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await pb.collection("blogs").getFullList({
        filter: "isPublished = true",
        sort: "-created",
      });
      setBlogs(res);
    };

    fetchBlogs();
  }, []);

  return (
    <>

      {/* <div className="relative h-32 lg:h-96">
        <Image
          src="/images/blogs/blogbanner.png"
          alt="blogs"
          fill
          className="object-cover"
        />
      </div> */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 px-6 lg:px-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Our <span className="text-orange-500">Blogs</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Trusted Financial Solutions for Individual & Business.
        </p>
      </section>

      <div className="bg-gray-50 py-12 px-4 md:px-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Blogs & Insights
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore expert articles, financial tips, and business insights.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const imageUrl = pb.files.getURL(blog, blog.featuredImage);

            return (
              <Link key={blog.id} href={`/blog/${blog.slug}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={blog.title}
                      className="h-52 w-full object-cover transform group-hover:scale-110 transition duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>

                    {/* Category Badge (optional) */}
                    <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full font-medium shadow">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Title */}
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                      <div className="flex items-center justify-center gap-2">
                       
                        <span>
                          {new Date(blog.created).toLocaleDateString()}
                        </span>
                      </div>

                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </>
  );
}
