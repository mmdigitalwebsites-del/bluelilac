import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Star,
  Mail,
  Phone,
  Check,
  X,
  CalendarDays,
  BedDouble,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TOURS, getTour, type ItineraryDay } from "@/data/tours";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ params, loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tour.title} — Bluelilac Tours` },
          { name: "description", content: loaderData.tour.overview[0] },
          { property: "og:title", content: loaderData.tour.title },
          { property: "og:description", content: loaderData.tour.overview[0] },
          { property: "og:image", content: loaderData.tour.img },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/tours/${params.slug}` },
          { name: "twitter:image", content: loaderData.tour.img },
        ]
      : [],
    links: [{ rel: "canonical", href: `/tours/${params.slug}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristTrip",
              name: loaderData.tour.title,
              description: loaderData.tour.overview[0],
              image: loaderData.tour.img,
              touristType: "Safari travelers",
              provider: { "@type": "TravelAgency", name: "Bluelilac Tours" },
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Tour not found</h1>
        <Link to="/tours" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to all tours
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
  component: TourDetailPage,
});

function buildItinerary(
  explicit: ItineraryDay[] | undefined,
  highlights: string,
  durationDays: number,
): ItineraryDay[] {
  if (explicit && explicit.length) return explicit;
  const stops = highlights
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!stops.length) return [];
  const days: ItineraryDay[] = [];
  const perStop = Math.max(1, Math.floor(durationDays / stops.length));
  let dayCounter = 1;
  stops.forEach((stop, idx) => {
    const isLast = idx === stops.length - 1;
    const span = isLast ? Math.max(1, durationDays - dayCounter + 1) : perStop;
    const label = span === 1 ? `Day ${dayCounter}` : `Day ${dayCounter}–${dayCounter + span - 1}`;
    const isArrival = idx === 0;
    const isDeparture = isLast && durationDays > stops.length;
    days.push({
      day: label,
      title: isArrival
        ? `Arrival — ${stop}`
        : isDeparture
          ? `${stop} & Departure`
          : `Explore ${stop}`,
      bullets: isArrival
        ? [
            `Arrive in ${stop} and meet your Bluelilac driver-guide.`,
            "Transfer to your lodge, briefing on the days ahead.",
            "Dinner and overnight.",
          ]
        : [
            `Game drives and guided activities around ${stop}.`,
            "Picnic or lodge lunch, with afternoon wildlife viewing.",
            "Return to lodge for dinner and overnight.",
          ],
      stay: isDeparture ? undefined : `${span} ${span === 1 ? "night" : "nights"} in ${stop}`,
    });
    dayCounter += span;
  });
  return days;
}

function TourDetailPage() {
  const { tour } = Route.useLoaderData();
  const related = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[460px] w-full items-end overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-10">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All tours
          </Link>
          <span className="mt-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {tour.destination}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl">
            {tour.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> {tour.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4" /> {tour.group} guests
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {tour.highlights}
            </span>
            <span className="inline-flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < tour.rating ? "fill-current" : "opacity-30"}`}
                />
              ))}
              <span className="ml-1 text-white/90">
                {tour.rating}.0 ({tour.reviews})
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            <div className="space-y-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Overview</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">About this trip</h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-black md:text-lg">
                  {tour.overview.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Highlights</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">What you'll see</h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tour.highlights
                    .split("·")
                    .map((h: string) => h.trim())
                    .filter(Boolean)
                    .map((h: string) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-black"
                      >
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Itinerary</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">Day-by-day journey</h2>
                <ol className="mt-8 relative space-y-6 border-l border-border pl-6 md:pl-8">
                  {buildItinerary(tour.itinerary, tour.highlights, tour.durationDays).map(
                    (d, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -left-[34px] md:-left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                          {i + 1}
                        </span>
                        <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                              <CalendarDays className="h-3.5 w-3.5" /> {d.day}
                            </span>
                            {d.stay && (
                              <span className="inline-flex items-center gap-1.5 text-xs text-black/70">
                                <BedDouble className="h-3.5 w-3.5 text-primary" /> {d.stay}
                              </span>
                            )}
                          </div>
                          <h3 className="mt-3 font-display text-xl text-foreground">{d.title}</h3>
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black">
                            {d.bullets.map((b, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ),
                  )}
                </ol>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">Included</p>
                  <h3 className="mt-3 font-display text-2xl">What's included</h3>
                  <ul className="mt-5 space-y-3 text-sm text-black">
                    {tour.included.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">Excluded</p>
                  <h3 className="mt-3 font-display text-2xl">What's not included</h3>
                  <ul className="mt-5 space-y-3 text-sm text-black">
                    {tour.excluded.map((item: string) => (
                      <li key={item} className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Cancellation</p>
                <h3 className="mt-3 font-display text-2xl">Flexible booking</h3>
                <p className="mt-4 text-sm leading-relaxed text-black md:text-base">
                  You can cancel up to 24 hours in advance of the experience for a full refund. For
                  tailor-made private trips, our team will share the specific terms with your quote.
                </p>
              </div>
            </div>

            {/* Sticky booking card */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-black/60">from</span>
                  <span className="font-display text-4xl text-primary">
                    ${tour.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-black/60">/person</span>
                </div>
                <div className="mt-5 space-y-3 border-t border-border pt-5 text-sm text-black">
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Duration</span>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Group size</span>
                    <span>{tour.group} guests</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Tour type</span>
                    <span>{tour.type}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-black/60">Language</span>
                    <span>English</span>
                  </div>
                </div>
                <a
                  href={`mailto:info@bluelilactours.com?subject=Enquiry:%20${encodeURIComponent(tour.title)}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> Make an enquiry
                </a>
                <a
                  href="tel:+254715405641"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  <Phone className="h-4 w-4" /> +254 715 405641
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-display text-3xl md:text-4xl">You might also like</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <article
                key={r.slug}
                className="group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1"
              >
                <Link to="/tours/$slug" params={{ slug: r.slug }} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md">
                      {r.destination}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg leading-snug group-hover:text-primary">
                      {r.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                      <span className="text-black">{r.duration}</span>
                      <span className="font-display text-lg text-primary">
                        ${r.price.toLocaleString()}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View trip <ArrowRight className="h-4 w-4" />
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
