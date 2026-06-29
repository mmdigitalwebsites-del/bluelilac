import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
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
  Package,
  Globe,
  CheckCircle2,
  Minus,
  Plus,
  ExternalLink,
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-semibold">Tour not found</h1>
        <Link
          to="/tours"
          className="mt-4 text-accent hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all tours
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8">
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-12 text-white">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All tours
          </Link>
          <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs">
            <MapPin className="h-3.5 w-3.5" /> {tour.destination}
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {tour.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> {tour.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4" /> {tour.group} guests
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {tour.highlights}
            </span>
            <span className="inline-flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-white/80">
                {tour.rating}.0 ({tour.reviews})
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview — icon row + description + map */}
            <section>
              <h3 className="text-sm uppercase tracking-widest text-primary">Overview</h3>
              <h2 className="mt-2 text-3xl font-semibold">About this trip</h2>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-black">Duration</div>
                    <div className="text-sm font-medium">{tour.duration}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-black">Travelers</div>
                    <div className="text-sm font-medium">{tour.group} guests</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <Package className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-black">Tour Type</div>
                    <div className="text-sm font-medium">{tour.type}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                  <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-black">Language</div>
                    <div className="text-sm font-medium">English</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-black leading-relaxed">
                {tour.overview.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
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
            </section>

            {/* Itinerary */}
            <section>
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
            </section>

            {/* Included / Excluded */}
            <section className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary">Included</h3>
                <h2 className="mt-2 text-2xl font-semibold">What's included</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {tour.included.map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary">Excluded</h3>
                <h2 className="mt-2 text-2xl font-semibold">What's not included</h2>
                <ul className="mt-4 space-y-2 text-sm">
                  {tour.excluded.map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Cancellation */}
            <section>
              <h3 className="text-sm uppercase tracking-widest text-primary">Cancellation</h3>
              <h2 className="mt-2 text-2xl font-semibold">Flexible booking</h2>
              <p className="mt-3 text-sm text-black leading-relaxed">
                You can cancel up to 24 hours in advance of the experience for a full refund. For
                tailor-made private trips, our team will share the specific terms with your quote.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border">
                <iframe
                  title={`Map of ${tour.destination}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(tour.destination)}&output=embed`}
                  className="w-full h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>

          {/* Sticky booking card */}
          <aside className="lg:sticky lg:top-24 xl:w-[120%] h-fit">
            <BookingCard tour={tour} />
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold">You might also like</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/tours/$slug"
              params={{ slug: r.slug }}
              className="group overflow-hidden rounded-2xl border bg-card transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs">
                  <MapPin className="h-3 w-3" /> {r.destination}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-primary transition">{r.title}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{r.duration}</span>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary font-medium">
                  View trip <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function BookingCard({ tour }: { tour: any }) {
  const [tab, setTab] = useState<"book" | "enquiry">("book");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const Counter = ({
    label,
    sub,
    value,
    setValue,
    min = 0,
  }: {
    label: string;
    sub: string;
    value: number;
    setValue: (n: number) => void;
    min?: number;
  }) => (
    <div className="flex items-center justify-between py-3">
      <div>
        <div className="text-sm font-medium">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setValue(Math.max(min, value - 1))}
          className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-accent/10"
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center text-sm font-medium">{value}</span>
        <button
          type="button"
          onClick={() => setValue(value + 1)}
          className="h-8 w-8 rounded-full border flex items-center justify-center hover:bg-accent/10"
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
      <div className="grid grid-cols-2 border-b">
        <button
          onClick={() => setTab("book")}
          className={`py-3 text-sm font-medium transition ${
            tab === "book" ? "bg-primary text-accent-foreground" : "hover:bg-destructive/30"
          }`}
        >
          BOOK
        </button>
        <button
          onClick={() => setTab("enquiry")}
          className={`py-3 text-sm font-medium transition ${
            tab === "enquiry" ? "bg-primary text-accent-foreground" : "hover:bg-destructive/30"
          }`}
        >
          ENQUIRY
        </button>
      </div>

      {tab === "book" ? (
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs text-muted-foreground">Select date</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border px-3 py-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <div className="divide-y">
            <Counter label="Adults" sub="Age 13+" value={adults} setValue={setAdults} min={1} />
            <Counter label="Children" sub="Age 2–12" value={children} setValue={setChildren} />
            <Counter label="Infants" sub="Under 2" value={infants} setValue={setInfants} />
          </div>

          <a
            href={`mailto:info@bluelilactours.com?subject=Booking:%20${encodeURIComponent(
              tour.title,
            )}&body=Date:%20${date}%0AAdults:%20${adults}%0AChildren:%20${children}%0AInfants:%20${infants}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Book now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <form
          className="p-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = fd.get("name");
            const email = fd.get("email");
            const message = fd.get("message");
            window.location.href = `mailto:info@bluelilactours.com?subject=Enquiry:%20${encodeURIComponent(
              tour.title,
            )}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
          }}
        >
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          <input
            name="phone"
            placeholder="Phone (optional)"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your trip..."
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> Send enquiry
          </button>
        </form>
      )}

      <div className="px-6 pb-6">
        <a
          href="tel:+254715405641"
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <Phone className="h-4 w-4" /> +254 715 405641
        </a>
      </div>
    </div>
  );
}
