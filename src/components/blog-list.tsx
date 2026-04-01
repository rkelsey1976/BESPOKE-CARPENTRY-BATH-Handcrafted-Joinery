"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";

type BlogListProps = {
  posts: BlogPost[];
};

export function BlogList({ posts }: BlogListProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts],
  );

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap gap-2" aria-label="Filter blog posts by category">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-[#8C4337] bg-[#8C4337] text-[#F7F8F5]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#A95345] hover:text-[#A95345]"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-slate-600">
        Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
            <Image
              src={post.heroImage}
              alt={post.heroAlt}
              width={1200}
              height={700}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#A95345]">
                {post.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-700">{post.description}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                <span>{post.publishedAt}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-700"
              >
                Read guide
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
