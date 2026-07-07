import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, User, Mail, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BLOG_POSTS, getBlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Bluelilac Tours` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.img },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/blog/${params.slug}` },
          { name: "twitter:image", content: loaderData.post.img },
        ]
      : [],
    links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.post.title,
              description: loaderData.post.excerpt,
              image: loaderData.post.img,
              datePublished: loaderData.post.date,
              author: { "@type": "Person", name: loaderData.post.author },
              publisher: { "@type": "Organization", name: "Bluelilac Tours" },
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background p-12 text-center">
      <p>Something went wrong: {error.message}</p>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative flex h-[55vh] min-h-[420px] w-full items-end overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-14 md:px-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Posts
          </Link>
          <span className="mt-6 ml-10 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {post.category}
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-white md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" /> {post.author}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="font-display text-xl font-bold leading-relaxed text-orange-700 md:text-2xl">
            {post.excerpt}
          </p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-black md:text-lg">
            {post.content.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {post.stats && (
            <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl bg-primary/5 p-8 md:grid-cols-4">
              {post.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">{s.value}</div>
                  <div className="mt-1 text-xs text-black/70">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {post.quote && (
            <blockquote className="mt-14 border-l-4 border-primary pl-6">
              <p className="font-display text-xl italic leading-relaxed text-black">
                {post.quote.text}
              </p>
              <footer className="mt-3 text-sm text-black/60">— {post.quote.author}</footer>
            </blockquote>
          )}

          {post.experiences && (
            <div className="mt-14">
              <h2 className="font-display text-3xl md:text-4xl">Most Extraordinary Experiences</h2>
              <div className="mt-8 space-y-6">
                {post.experiences.map((e) => (
                  <div
                    key={e.number}
                    className="flex gap-6 rounded-2xl border border-border bg-card p-6"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                      {e.number}
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{e.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-black">{e.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-3xl bg-primary/10 p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl">Plan Your Safari With Us</h2>
            <p className="mt-3 text-sm text-black">
              Tell us your dates and interests — we will design a private safari built around them.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/254715405641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+254715405641"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> +254 715 405641
              </a>
            </div>
          </div>

          {post.faqs && (
            <div className="mt-14">
              <h2 className="font-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
              <div className="mt-8 space-y-4">
                {post.faqs.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-display text-lg">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl">Ready to plan your trip?</h2>
            <p className="mt-3 text-sm text-black md:text-base">
              Tell us your dates and interests — we will design a private safari built around them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:info@bluelilactours.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> info@bluelilactours.com
              </a>
              <a
                href="tel:+254715405641"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> +254 715 405641
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl">More from the journal</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <article
                key={r.slug}
                className="group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1"
              >
                <Link to="/blog/$slug" params={{ slug: r.slug }} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">{r.category}</p>
                    <h3 className="mt-2 font-display text-lg leading-snug group-hover:text-primary">
                      {r.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
