import { getAllBlogPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/blog",
    "/contact",
    "/portfolio",
    "/services",
    "/services/bespoke-carpentry",
    "/services/sash-windows",
    "/services/built-in-furniture",
    "/services/repairs-restoration",
    "/areas-we-cover",
    "/areas-we-cover/bath",
    "/areas-we-cover/bradford-on-avon",
    "/areas-we-cover/keynsham",
    "/areas-we-cover/frome",
    "/thank-you",
  ];

  const blogRoutes = getAllBlogPosts().map((post) => `/blog/${post.slug}`);
  const allRoutes = [...routes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
