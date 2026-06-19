import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Clock, MapPin, Search, Star, Heart, Mail, Phone, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import heroImg from "@/assets/hero-safari.jpg";
import tourSerengeti from "@/assets/tour-serengeti.jpg";
import tourGorilla from "@/assets/tour-gorilla.jpg";
import tourLodge from "@/assets/tour-lodge.jpg";
import tourZanzibar from "@/assets/tour-zanzibar.jpg";
import ctaBalloon from "@/assets/cta-balloon.jpg";

export const Route = createFileRoute("/explore-our-tours")({
  head: () => ({
    meta: [
      { title: "Explore Our Tours — Bluelilac Tours" },
      { name: "description", content: "Discover handcrafted East African safari experiences — from the Great Migration to gorilla trekking and Zanzibar beach escapes." },
      { property: "og:title", content: "Explore Our Tours — Bluelilac Tours" },
      { property: "og:description", content: "Discover handcrafted East African safari experiences." },
    ],
  }),
  component: ExploreOurToursPage,
});

type Tour = {
  title: string;
  destination: string;
  duration: string;
  category: "Wildlife" | "Beach" | "Adventure" | "Luxury";
  img: string;
  highlights: string;
  price: number;
  rating: number;
  reviews: number;
};

const TOURS: Tour[] = [
  { title: "13 Days Kenya & Tanzania Safari", destination: "Kenya · Tanzania", duration: "13 Days", category: "Wildlife", img: tourSerengeti, highlights: "Masai Mara · Serengeti · Ngorongoro · Amboseli", price: 4850, rating: 5, reviews: 24 },
  { title: "Gorilla Trekking in Bwindi", destination: "Uganda", duration: "5 Days", category: "Adventure", img: tourGorilla, highlights: "Entebbe · Bwindi Impenetrable Forest · Lake Bunyonyi", price: 3950, rating: 5, reviews: 14 },
  { title: "Luxury Serengeti Under the Stars", destination: "Tanzania", duration: "7 Days", category: "Luxury", img: tourLodge, highlights: "Tented camps · Hot air balloon · Private guides", price: 3600, rating: 5, reviews: 18 },
  { title: "Zanzibar Beach Escape", destination: "Zanzibar", duration: "6 Days", category: "Beach", img: tourZanzibar, highlights: "Stone Town · Nungwi · Spice Tour · Snorkeling", price: 1850, rating: 5, reviews: 21 },
  { title: "10 Days Bush & Beach Kenya", destination: "Kenya", duration: "10 Days", category: "Beach", img: tourZanzibar, highlights: "Masai Mara · Amboseli · Diani Beach", price: 3850, rating: 5, reviews: 27 },
  { title: "7 Days Tanzania Signature Safari", destination: "Tanzania", duration: "7 Days", category: "Wildlife", img: tourSerengeti, highlights: "Arusha · Tarangire · Serengeti · Ngorongoro", price: 2950, rating: 5, reviews: 31 },
];

const CATEGORIES = ["All", "Wildlife", "Beach", "Adventure", "Luxury"] as const;
type Category = (typeof CATEGORIES)[number];

function ExploreOurToursPage() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFav = (title: string) =>
    setFavorites((p) => {
      const n = new Set(p);
      n.has(title) ? n.delete(title) : n.add(title);
      return n;
    });

  const list = useMemo(() => {
    return TOURS.filter((t) => {
      const matchesCat = category === "All" || t.category === category;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || t.title.toLowerCase().includes(q) || t.highlights.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [category, query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden">
        <img src={heroImg} alt="Safari landscape" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
            Handcrafted journeys
          </span>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
            Explore Our Tours
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Bush, beach, gorillas and the Great Migration — find the East African experience that calls you.
          </p>

          <div className="mt-10 flex max-w-2xl flex-col gap-2 rounded-3xl bg-white/95 p-2 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full">
            <div className="flex flex-1 items-center gap-2 pl-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by destination, park or experience…"
                className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-[#0C5DFF]"
            >
              Search tours
            </button>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Compass, title: "Local expertise", body: "Born-and-raised guides with decades of safari craft." },
              { icon: ShieldCheck, title: "Fully bonded", body: "Licensed, insured and 24/7 on-trip support." },
              { icon: Sparkles, title: "Tailor-made", body: "Every itinerary is shaped around your dates and pace." },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#A40A09]/10 text-[#A40A09]">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-[#A40A09]">{b.title}</h3>
                <p className="mt-2 text-sm text-black/70">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Curated journeys</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Pick your adventure</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === c
                      ? "bg-primary text-primary-foreground hover:bg-[#0C5DFF]"
                      : "border border-border bg-white text-foreground hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t) => {
              const fav = favorites.has(t.title);
              return (
                <article key={t.title} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={t.img} alt={t.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md">
                      {t.destination}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFav(t.title)}
                      aria-label={fav ? "Remove from favourites" : "Add to favourites"}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 hover:bg-[#A40A09] hover:text-white"
                    >
                      <Heart className={`h-4 w-4 transition ${fav ? "fill-primary text-primary" : "text-foreground"}`} />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "fill-current" : "opacity-30"}`} />
                      ))}
                      <span className="ml-1 text-xs text-black">{t.rating}.0 ({t.reviews})</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl leading-snug">{t.title}</h3>
                    <p className="mt-2 flex items-start gap-2 text-sm text-black/80">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {t.highlights}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-black">
                      <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {t.duration}</span>
                      <span className="font-display text-lg text-primary">${t.price.toLocaleString()}</span>
                    </div>
                    <a
                      href="mailto:info@bluelilactours.com?subject=Tour%20enquiry"
                      className="mt-5 inline-flex w-full items-center justify-between gap-3 rounded-full bg-accent py-3 pl-5 pr-2 text-sm font-medium text-accent-foreground transition hover:bg-[#A40A09] hover:text-white"
                    >
                      Enquire now
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {list.length === 0 && (
            <div className="mt-16 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
              <p className="font-display text-2xl">No tours match your search</p>
              <p className="mt-2 text-sm text-black">Try a different category or clear the search.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
            >
              See all 27+ trips <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <img src={ctaBalloon} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/80">Not sure where to start?</p>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">Let's plan it together.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/85">
            Tell us your dates and dream destinations — we'll craft a bespoke itinerary just for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:info@bluelilactours.com" className="inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-[#0C5DFF] transition hover:bg-[#0C5DFF] hover:text-white">
              <Mail className="h-4 w-4" /> info@bluelilactours.com
            </a>
            <a href="tel:+254715405641" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]">
              <Phone className="h-4 w-4" /> +254 715 405641
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}