import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Clock,
  Users,
  MapPin,
  Search,
  Phone,
  Mail,
  Menu,
  Star,
  Heart,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import background from "@/assets/destinations.png";
import bird from "@/assets/bird3.jpg";
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
    ],
  }),
  component: ToursPage,
});

const FILTERS = ["All", "Kenya", "Tanzania", "Zanzibar", "Singapore", "South Africa"] as const;
type Filter = (typeof FILTERS)[number];

const TYPE_OPTIONS = ["Daily tour", "Group tour", "Package tour", "Private tour"] as const;
const DURATION_OPTIONS = [
  { label: "1–3 days", min: 1, max: 3 },
  { label: "4–7 days", min: 4, max: 7 },
  { label: "8–12 days", min: 8, max: 12 },
  { label: "13+ days", min: 13, max: 999 },
] as const;

const PAGE_SIZE = 6;

function ToursPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);

  const toggleFavorite = (title: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  const toggleType = (t: string) =>
    setSelectedTypes((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));
  const toggleDuration = (t: string) =>
    setSelectedDurations((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const list = useMemo(() => {
    return TOURS.filter((t) => {
      const matchesFilter =
        filter === "All" || t.destination.toLowerCase().includes(filter.toLowerCase());
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || t.title.toLowerCase().includes(q) || t.highlights.toLowerCase().includes(q);
      const matchesPrice = t.price <= maxPrice;
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(t.type);
      const matchesDuration =
        selectedDurations.length === 0 ||
        selectedDurations.some((label) => {
          const d = DURATION_OPTIONS.find((x) => x.label === label);
          return d && t.durationDays >= d.min && t.durationDays <= d.max;
        });
      return matchesFilter && matchesQuery && matchesPrice && matchesType && matchesDuration;
    });
  }, [filter, query, maxPrice, selectedTypes, selectedDurations]);

  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [filter, query, maxPrice, selectedTypes, selectedDurations]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero query={query} setQuery={setQuery} />

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
            {/* Sidebar Filters */}
            <aside className="space-y-8">
              <FilterBlock title="Price range">
                <div className="space-y-4">
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={50}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-black/60">Min. price</label>
                      <div className="mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-black">
                        $ 0
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-black/60">Max. price</label>
                      <div className="mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-black">
                        $ {maxPrice.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </FilterBlock>

              <FilterBlock title="Types">
                <div className="space-y-3">
                  {TYPE_OPTIONS.map((t) => (
                    <CheckRow
                      key={t}
                      label={t}
                      checked={selectedTypes.includes(t)}
                      onChange={() => toggleType(t)}
                    />
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title="Destination">
                <div className="space-y-3">
                  {FILTERS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                        filter === f
                          ? "bg-primary text-primary-foreground hover:bg-[#0C5DFF]"
                          : "text-black hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title="Durations">
                <div className="space-y-3">
                  {DURATION_OPTIONS.map((d) => (
                    <CheckRow
                      key={d.label}
                      label={d.label}
                      checked={selectedDurations.includes(d.label)}
                      onChange={() => toggleDuration(d.label)}
                    />
                  ))}
                </div>
              </FilterBlock>
            </aside>

            {/* Results */}
            <div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-primary">All journeys</p>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl">
                    {list.length} {list.length === 1 ? "tour" : "tours"} found
                  </h2>
                </div>
                {favorites.size > 0 && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground">
                    <Heart className="h-4 w-4 fill-primary text-primary" /> {favorites.size} saved
                  </span>
                )}
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {paged.map((t) => {
                  const fav = favorites.has(t.title);
                  return (
                    <article
                      key={t.title}
                      className="group w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={t.img}
                          alt={t.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md">
                          {t.destination}
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(t.title)}
                          aria-label={fav ? "Remove from favourites" : "Add to favourites"}
                          className="absolute right-4 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-md transition hover:bg-white/80"
                        >
                          <Heart
                            className={`h-6 w-5 transition ${fav ? "fill-primary text-primary" : "text-secondary-foreground"}`}
                          />
                        </button>
                      </div>
                      <div className="p-5">
                        <h3 className="mt-2 font-bold text-lg uppercase tracking-wide text-primary">
                          <Link
                            to="/tours/$slug"
                            params={{ slug: t.slug }}
                            className="hover:text-secondary-foreground transition"
                          >
                            {t.title}
                          </Link>
                        </h3>
                        <p className="mt-1.5 flex items-start gap-1.5 text-[11px] uppercase tracking-wide text-black/70">
                          <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                          {t.highlights}
                        </p>
                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-black/80">
                          {t.overview[0]}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-xs uppercase tracking-wide text-black/70">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" /> {t.duration}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5" /> {t.group}
                          </span>
                        </div>
                        <div className="mt-4 flex items-baseline gap-1">
                          <span className="text-xs text-black/90">from</span>
                          <span className="font-display text-2xl text-foreground">
                            ${t.price.toLocaleString()}
                          </span>
                          <span className="text-xs text-black/90">/person</span>
                        </div>
                        <a
                          href="mailto:info@bluelilactours.com?subject=Tour%20enquiry"
                          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-secondary-foreground/80 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-secondary-foreground transition group-hover:bg-secondary-foreground group-hover:text-white"
                        >
                          Enquire now <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              {list.length === 0 && (
                <div className="mt-16 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
                  <p className="font-display text-2xl">No tours match your search</p>
                  <p className="mt-2 text-sm text-black">
                    Try a different destination or clear the filters.
                  </p>
                </div>
              )}

              {totalPages > 1 && (
                <nav
                  className="mt-12 flex items-center justify-center gap-2"
                  aria-label="Pagination"
                >
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const n = i + 1;
                    const active = n === currentPage;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setPage(n)}
                        aria-current={active ? "page" : undefined}
                        className={`h-10 w-10 rounded-full text-sm font-medium transition ${
                          active
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-background text-foreground hover:bg-secondary"
                        }`}
                      >
                        {n}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaPlan />
      <Footer />
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <h3 className="font-display text-lg text-foreground">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-black">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-border accent-primary"
      />
      {label}
    </label>
  );
}

function TopBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="font-display text-2xl font-semibold text-white md:text-3xl">
          Blue Lilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Explore", href: "/destinations" },
            { label: "Tours", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Explore Our Tours", href: "/tours" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.label === "Tours"
                  ? "bg-white text-foreground"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+254715405641"
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:scale-105 lg:flex"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <button
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md lg:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

function Hero({ query, setQuery }: { query: string; setQuery: (v: string) => void }) {
  return (
    <section className="relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden">
      <img src={background} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <span className="mb-6 mt-32 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
          25 curated journeys
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
          Tours &amp; Safaris
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          From the Masai Mara to the white sands of Zanzibar — pick the journey that calls you.
        </p>
        <div className="mt-10 flex max-w-2xl items-center gap-2 rounded-full bg-white/95 p-2 shadow-2xl backdrop-blur-md">
          <div className="flex flex-1 items-center gap-2 pl-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations, parks, experiences…"
              className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-[#0C5DFF]"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

function CtaPlan() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <img src={bird} alt="balloon" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          Can't find what you're looking for?
        </p>
        <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
          Let's design a private safari just for you.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/80">
          Every Blue Lilac itinerary is bespoke. Share your dates, interests and budget — we'll
          craft something only yours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@bluelilactours.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-[#A40A09] hover:text-white"
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

function Footer() {
  return <SiteFooter />;
}
