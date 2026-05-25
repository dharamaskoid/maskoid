"use client";

import Image from "next/image";

import { blogs } from "../../../.next/data/blogs";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {

  // FIND CURRENT BLOG
  const blog = blogs.find(
    (item) => item.slug === params.slug
  );

  // IF BLOG NOT FOUND
  if (!blog) {
    return (
      <div className="py-40 text-center text-2xl font-semibold">
        Blog not found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] min-h-screen py-20">

      <div className="max-w-4xl mx-auto px-6">

        {/* BLOG IMAGE */}
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={700}
          className="w-full h-auto rounded-3xl object-cover"
        />

        {/* CATEGORY */}
        <div className="mt-10">

          <span className="bg-blue-100 text-blue-700 text-sm font-medium px-5 py-2 rounded-full">

            {blog.category}

          </span>

        </div>

        {/* TITLE */}
        <h1 className="text-5xl font-bold text-[#1a2e5e] mt-6 leading-tight">

          {blog.title}

        </h1>

        {/* META */}
        <div className="flex items-center gap-4 mt-6 text-gray-500">

          <span>{blog.author}</span>

          <span>•</span>

          <span>{blog.date}</span>

        </div>

        {/* CONTENT */}
        <div className="mt-12 text-lg leading-9 text-gray-700 whitespace-pre-line">

          {blog.content}

        </div>

      </div>

    </section>
  );
}