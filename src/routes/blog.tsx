import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, User } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import ctaBalloon from "@/assets/cta-balloon.jpg";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Blog & Safari Tips — Bluelilac Tours" },
      { name: "description", content: "Read our latest safari guides, destination deep-dives and travel tips for Kenya, Tanzania, Uganda and Rwanda." },
      { property: "og:title", content: "Travel Blog — Bluelilac Tours" },
      { property: "og:description", content: "Safari guides, destination deep-dives and travel tips from East Africa's specialists." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative flex h-[50vh] min-h-[380px] w-full items-center overflow-hidden">
        <img src={ctaBalloon} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
            From the journal
          </span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
            Safari guides &amp; travel tips
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Destination deep-dives, conservation stories, and practical advice from the people who plan East Africa's best safaris.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((p) => (
              <article key={p.slug} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {p.author}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl leading-snug">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-black">{p.excerpt}</p>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
