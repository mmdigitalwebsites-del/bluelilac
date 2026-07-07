import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Grid3x3,
  Heart,
  List,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import background from "@/assets/destinations.png";
import { TOURS } from "@/data/tours";

export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "Tours & Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Browse 27+ curated East African safaris across Kenya, Tanzania, Uganda, Rwanda and beyond. Bush, beach, gorillas and the Great Migration.",
      },
      { property: "og:title", content: "Tours & Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Browse curated East African safaris — Kenya, Tanzania, Uganda, Rwanda & beyond.",
      },
      { property: "og:url", content: "/tours" },
    ],
    links: [{ rel: "canonical", href: "/tours" }],
  }),
  component: ToursPage,
});

const DESTINATIONS = ["All destinations", "Kenya", "Tanzania", "Zanzibar", "Uganda", "Rwanda"];
const PAGE_SIZE = 6;

function ToursPage() {
  const [destination, setDestination] = useState("All destinations");
  const [date, setDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState<"price" | "name">("price");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);

  const toggleFavorite = (title: string) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });

  const list = useMemo(() => {
    const filtered = TOURS.filter((t: any) => {
      const matchesDest =
        destination === "All destinations" ||
        String(t.destination).toLowerCase().includes(destination.toLowerCase());
      const matchesPrice = Number(t.price) <= maxPrice;
      return matchesDest && matchesPrice;
    });
    return [...filtered].sort((a: any, b: any) =>
      sortBy === "price" ? a.price - b.price : String(a.title).localeCompare(String(b.title)),
    );
  }, [destination, maxPrice, sortBy]);

  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [destination, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <Hero
        destination={destination}
        setDestination={setDestination}
        date={date}
        setDate={setDate}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* Toolbar: sort + view toggle */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <button
              onClick={() => setSortBy("price")}
              className={`inline-flex items-center gap-1 transition hover:text-[#0C5DFF] ${
                sortBy === "price" ? "text-[#0C5DFF]" : ""
              }`}
            >
              Price <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setSortBy("name")}
              className={`inline-flex items-center gap-1 transition hover:text-[#0C5DFF] ${
                sortBy === "name" ? "text-[#0C5DFF]" : ""
              }`}
            >
              Name <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("list")}
              aria-label="List view"
              className={`flex h-9 w-9 items-center justify-center rounded-md border transition ${
                view === "list"
                  ? "border-[#0C5DFF] text-[#0C5DFF]"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className={`flex h-9 w-9 items-center justify-center rounded-md border transition ${
                view === "grid"
                  ? "border-[#0C5DFF] text-[#0C5DFF]"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Results grid */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={
              view === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-6"
            }
          >
            {paged.map((t: any) => {
              const fav = favorites.has(t.title);
              const image = t.image ?? t.img;
              const summary =
                t.highlights ?? (Array.isArray(t.overview) ? t.overview[0] : (t.summary ?? ""));
              const categoryLabel = (t.type ?? t.destination ?? "Safari").toString().toUpperCase();
              return (
                <article
                  key={t.title}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-15px_rgba(15,23,42,0.25)] transition hover:shadow-[0_20px_40px_-15px_rgba(12,93,255,0.35)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={t.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={() => toggleFavorite(t.title)}
                      aria-label={fav ? "Remove favourite" : "Add favourite"}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#0C5DFF] text-white shadow-md transition hover:scale-110"
                    >
                      <Heart className={`h-4 w-4 ${fav ? "fill-white" : ""}`} />
                    </button>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-primary hover:text-secondary-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {t.destination}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-foreground">
                      {summary}
                    </p>
                    <div className="mt-5 border-t border-border pt-4 flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          From
                        </span>
                        <div className="font-display text-2xl font-semibold text-foreground">
                          ${Number(t.price).toLocaleString()}
                        </div>
                      </div>
                      <a
                        href={`/tours/${t.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0C5DFF]/90 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-primary/80"
                      >
                        View Safari
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {list.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border bg-white p-12 text-center">
              <h3 className="text-lg font-semibold text-foreground">No tours match your search</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different destination or raise your max price.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:border-[#0C5DFF] hover:text-[#0C5DFF] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                const active = n === currentPage;
                return (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    aria-current={active ? "page" : undefined}
                    className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition ${
                      active
                        ? "bg-[#0C5DFF] text-white shadow-[0_8px_20px_-8px_rgba(12,93,255,0.7)]"
                        : "border border-border bg-white text-foreground hover:border-[#0C5DFF] hover:text-[#0C5DFF]"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm transition hover:border-[#0C5DFF] hover:text-[#0C5DFF] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}

          {list.length > 0 && (
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Page {currentPage} of {totalPages} · {list.length}{" "}
              {list.length === 1 ? "tour" : "tours"}
            </p>
          )}
        </div>
      </section>

      <CtaPlan />

      <SiteFooter />
    </div>
  );
}

function Hero({
  destination,
  setDestination,
  date,
  setDate,
  maxPrice,
  setMaxPrice,
}: {
  destination: string;
  setDestination: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
}) {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden pb-24 pt-28">
      <div className="absolute inset-0">
        <img src={background} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
          Our Safaris
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Discover East Africa's Wild Beauty
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/85">
          Curated East African safaris — pick the destination, dates and budget that suit you.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-4 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.35)] sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Select your destination
              </span>
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                <MapPin className="h-4 w-4 text-[#0C5DFF]" />
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground focus:outline-none"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Select your date
              </span>
              <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                <Calendar className="h-4 w-4 text-[#0C5DFF]" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground focus:outline-none"
                />
              </div>
            </label>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Max price
                </span>
                <span className="text-sm font-semibold text-foreground">
                  ${maxPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-3 w-full accent-[#0C5DFF]"
              />
              <label className="mt-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                <input type="checkbox" className="accent-[#0C5DFF]" /> Use only promotions
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaPlan() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          Can't find what you're looking for?
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Let's design a private safari just for you.
        </h2>
        <p className="mt-4 text-base text-white/85">
          Every Blue Lilac itinerary is bespoke. Share your dates, interests and budget — we'll
          craft something only yours.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:info@bluelilactours.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary/80 px-6 py-3 text-sm font-medium text-white transition hover:bg-secondary-foreground/80"
          >
            <Mail className="h-4 w-4" /> info@bluelilactours.com
          </a>
          <a
            href="tel:+254715405641"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
          >
            <Phone className="h-4 w-4" /> +254 715 405641
          </a>
        </div>
      </div>
    </section>
  );
}
