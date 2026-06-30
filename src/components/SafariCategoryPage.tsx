import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Mail, Phone, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export type SafariCategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImg: string;
  ctaImg: string;
  highlights: { icon: LucideIcon; title: string; body: string }[];
  inclusions: string[];
  itinerary: { day: string; title: string; body: string }[];
  exploreHref?: string;
  exploreLabel?: string;
};

export function SafariCategoryPage({
  eyebrow,
  title,
  intro,
  heroImg,
  ctaImg,
  highlights,
  inclusions,
  itinerary,
  exploreHref = "/tours",
  exploreLabel = "Browse all trips",
}: SafariCategoryPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero — fills 3/4 of the viewport on landing */}
      <section className="relative flex h-[75vh] min-h-[600px] w-full items-center overflow-hidden">
        <img src={heroImg} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
            {eyebrow}
          </span>
          <h1 className="max-w-4xl font-display text-6xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-md">{intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:info@bluelilactours.com?subject=Enquiry"
              className="inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-[#0C5DFF] transition hover:bg-[#0C5DFF] hover:text-white"
            >
              <Mail className="h-4 w-4" /> Plan this trip
            </a>
            <Link
              to={exploreHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-foreground"
            >
              {exploreLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Quiet word strip */}
      <section className="border-b border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">A quiet word</p>
          <p className="mt-3 font-display text-xl italic leading-relaxed text-foreground md:text-xl">
            {intro}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Why this journey</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Crafted with intention, respect and depth.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#A40A09]/10 text-[#A40A09]">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-[#A40A09]">{h.title}</h3>
                <p className="mt-2 text-sm text-black/70">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative z-10 flex h-full items-end px-6 pb-10 md:px-10">
          <p className="max-w-xl font-display text-2xl text-white md:text-3xl">
            Every journey can become the beginning of something longer.
          </p>
        </div>
      </section>

      {/* Inclusions + Itinerary */}
      <section className="bg-[#e5f2fe] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#0C5DFF]">What's included</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              Done properly, from arrival to farewell.
            </h2>
            <ul className="mt-8 space-y-3">
              {inclusions.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-[#0C5DFF] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#0C5DFF]">Sample rhythm</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">A taste of the days ahead</h2>
            <div className="mt-8 space-y-4">
              {itinerary.map((d) => (
                <article
                  key={d.day}
                  className="rounded-2xl border border-white bg-white/70 p-6 backdrop-blur-sm transition hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#A40A09] px-3 py-1 text-xs font-medium text-white">
                      {d.day}
                    </span>
                    <h3 className="font-display text-lg">{d.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-black/75">{d.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
          <Sparkles className="mx-auto h-8 w-8 text-[#D0E0FF]" />
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/80">
            Ready when you are
          </p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
            Tell us your dream — we'll shape the rest.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Share your dates, pace and the moments you'd love to live. We'll build it around you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@bluelilactours.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-[#0C5DFF] transition hover:bg-[#0C5DFF] hover:text-white"
            >
              <Mail className="h-4 w-4" /> info@bluelilactours.com
            </a>
            <a
              href="tel:+254715405641"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
            >
              <Phone className="h-4 w-4" /> +254 715 405641
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SafariCategoryPage;