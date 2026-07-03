import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Heart,
  Mail,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export type SafariTripCard = {
  slug: string;
  title: string;
  img: string;
  description: string;
  duration: string;
  group: string;
  price: number;
};

export type SafariCategoryPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImg: string;
  ctaImg: string;
  highlights: { icon: LucideIcon; title: string; body: string }[];
  inclusions: string[];
  itinerary: { day: string; title: string; body: string }[];
  trips?: SafariTripCard[];
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
  trips = [],
  exploreHref = "/tours",
  exploreLabel = "Browse all trips",
}: SafariCategoryPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[640px] w-full items-center justify-center overflow-hidden">
        <img src={heroImg} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/80" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center md:px-10">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
            {eyebrow}
          </span>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-md">{intro}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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

      {/* Trips — "Special for you" style cards */}
      {trips.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Curated for you</p>
                <h2 className="mt-4 font-display text-4xl md:text-5xl">Special for you</h2>
              </div>
              <Link
                to={exploreHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
              >
                {exploreLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((t) => (
                <article
                  key={t.slug}
                  className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Link to="/tours/$slug" params={{ slug: t.slug }} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#A40A09] backdrop-blur-md">
                        <Heart className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">
                      <Link
                        to="/tours/$slug"
                        params={{ slug: t.slug }}
                        className="hover:text-primary"
                      >
                        {t.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-black/70">{t.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide text-black/60">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {t.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> {t.group}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">From</p>
                        <p className="font-display text-xl text-[#A40A09]">
                          ${t.price.toLocaleString()}
                        </p>
                      </div>
                      <a
                        href="mailto:info@bluelilactours.com?subject=Tour%20enquiry"
                        className="inline-flex items-center gap-2 rounded-full bg-[#A40A09] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:opacity-90"
                      >
                        Book <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
                className="group relative min-h-[320px] overflow-hidden rounded-3xl border border-border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={h.img}
                  alt={h.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
                <div className="relative flex h-full flex-col justify-end">
                  <h3 className="font-display text-xl text-white">{h.title}</h3>
                  <p className="mt-2 text-sm text-white/85">{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination spotlight + Inclusions/Itinerary — one continuous background */}
      <section className="relative overflow-hidden">
        <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/75" />

        {/* Spotlight block */}
        <div className="relative z-10 flex min-h-[50vh] items-center justify-center px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/80">Get to know</p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">{title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/85">
              Every journey can become the beginning of something longer.
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
              <Link
                to={exploreHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-foreground"
              >
                {exploreLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Inclusions + Itinerary block */}
        <div className="relative z-10 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D0E0FF]">What's included</p>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                Done properly, from arrival to farewell.
              </h2>
              <ul className="mt-8 space-y-3">
                {inclusions.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-white/90">
                    <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-[#0C5DFF] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D0E0FF]">Sample rhythm</p>
              <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                A taste of the days ahead
              </h2>
              <div className="mt-8 space-y-4">
                {itinerary.map((d) => (
                  <article
                    key={d.day}
                    className="rounded-2xl border border-white/20 bg-white/95 p-6 backdrop-blur-sm transition hover:bg-white"
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
        </div>
      </section>
    </div>
  );
}

export default SafariCategoryPage;
