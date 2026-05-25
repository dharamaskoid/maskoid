"use client";

import Link from "next/link";
import Image from "next/image";

import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="bg-[#f8fafc] min-h-screen py-16">

      <div className="container mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20">

          <h1 className="text-6xl font-bold text-[#1a2e5e]">

            Insights & Articles

          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">

            Discover the latest insights about web design,
            SEO, branding and digital growth.

          </p>

        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogs.map((blog) => (

            <Link
              href={`/blog/${blog.slug}`}
              key={blog.id}
            >

              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500 hover:-translate-y-2">

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  {/* CATEGORY */}
                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full">

                    {blog.category}

                  </span>

                  {/* TITLE */}
                  <h2 className="text-2xl font-bold text-[#1a2e5e] mt-5 leading-tight group-hover:text-blue-600 transition">

                    {blog.title}

                  </h2>

                  {/* EXCERPT */}
                  <p className="text-gray-600 mt-4 leading-7 line-clamp-3">

                    {blog.excerpt}

                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-8">

                    <span className="text-sm text-gray-500">

                      {blog.date}

                    </span>

                    <span className="text-blue-600 font-semibold">

                      Read More →

                    </span>

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}