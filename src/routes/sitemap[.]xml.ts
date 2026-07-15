import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TOURS } from "@/data/tours";
import { BLOG_POSTS } from "@/data/blog";

// TODO: replace with your project URL once a custom domain is connected.
const BASE_URL = "https://bluelilactours.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/destinations", changefreq: "weekly", priority: "0.9" },
          { path: "/tours", changefreq: "weekly", priority: "0.9" },
          { path: "/explore-our-tours", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" },
        ];

        const tourEntries: SitemapEntry[] = TOURS.map((t) => ({
          path: `/tours/${t.slug}`,
          changefreq: "monthly",
          priority: "0.8",
        }));

        const blogEntries: SitemapEntry[] = BLOG_POSTS.map((p) => ({
          path: `/blog/${p.slug}`,
          changefreq: "monthly",
          priority: "0.7",
        }));

        const entries = [...staticEntries, ...tourEntries, ...blogEntries];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
