import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { c as ctaBalloon } from "./cta-balloon-COKT0Jd4.mjs";
import { T as TOURS } from "./router-Dfz_60ae.mjs";
import { H as Heart, c as Star, d as MapPin, e as Clock, k as Users, A as ArrowRight, S as Search, f as Mail, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const FILTERS = ["All", "Kenya", "Tanzania", "Zanzibar", "Singapore", "South Africa"];
const TYPE_OPTIONS = ["Daily tour", "Group tour", "Package tour", "Private tour"];
const DURATION_OPTIONS = [{
  label: "1–3 days",
  min: 1,
  max: 3
}, {
  label: "4–7 days",
  min: 4,
  max: 7
}, {
  label: "8–12 days",
  min: 8,
  max: 12
}, {
  label: "13+ days",
  min: 13,
  max: 999
}];
const PAGE_SIZE = 6;
function ToursPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const [maxPrice, setMaxPrice] = reactExports.useState(5e3);
  const [selectedTypes, setSelectedTypes] = reactExports.useState([]);
  const [selectedDurations, setSelectedDurations] = reactExports.useState([]);
  const [favorites, setFavorites] = reactExports.useState(/* @__PURE__ */ new Set());
  const [page, setPage] = reactExports.useState(1);
  const toggleFavorite = (title) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };
  const toggleType = (t) => setSelectedTypes((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t]);
  const toggleDuration = (t) => setSelectedDurations((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t]);
  const list = reactExports.useMemo(() => {
    return TOURS.filter((t) => {
      const matchesFilter = filter === "All" || t.destination.toLowerCase().includes(filter.toLowerCase());
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || t.title.toLowerCase().includes(q) || t.highlights.toLowerCase().includes(q);
      const matchesPrice = t.price <= maxPrice;
      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(t.type);
      const matchesDuration = selectedDurations.length === 0 || selectedDurations.some((label) => {
        const d = DURATION_OPTIONS.find((x) => x.label === label);
        return d && t.durationDays >= d.min && t.durationDays <= d.max;
      });
      return matchesFilter && matchesQuery && matchesPrice && matchesType && matchesDuration;
    });
  }, [filter, query, maxPrice, selectedTypes, selectedDurations]);
  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = list.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  reactExports.useEffect(() => {
    setPage(1);
  }, [filter, query, maxPrice, selectedTypes, selectedDurations]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { query, setQuery }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1440px] px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[300px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBlock, { title: "Price range", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 500, max: 5e3, step: 50, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)), className: "w-full accent-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-black/60", children: "Min. price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-black", children: "$ 0" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs text-black/60", children: "Max. price" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-black", children: [
                "$ ",
                maxPrice.toLocaleString()
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBlock, { title: "Types", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: TYPE_OPTIONS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(CheckRow, { label: t, checked: selectedTypes.includes(t), onChange: () => toggleType(t) }, t)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBlock, { title: "Destination", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(f), className: `block w-full rounded-lg px-3 py-2 text-left text-sm transition ${filter === f ? "bg-primary text-primary-foreground hover:bg-[#0C5DFF]" : "text-black hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"}`, children: f }, f)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FilterBlock, { title: "Durations", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: DURATION_OPTIONS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(CheckRow, { label: d.label, checked: selectedDurations.includes(d.label), onChange: () => toggleDuration(d.label) }, d.label)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "All journeys" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
              list.length,
              " ",
              list.length === 1 ? "tour" : "tours",
              " found"
            ] })
          ] }),
          favorites.size > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 fill-primary text-primary" }),
            " ",
            favorites.size,
            " saved"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: paged.map((t) => {
          const fav = favorites.has(t.title);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group w-full overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md", children: t.destination }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggleFavorite(t.title), "aria-label": fav ? "Remove from favourites" : "Add to favourites", className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 hover:bg-[#A40A09] hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4 w-4 transition ${fav ? "fill-primary text-primary" : "text-foreground"}` }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-primary", children: [
                Array.from({
                  length: 5
                }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-3.5 w-3.5 ${i < t.rating ? "fill-current" : "opacity-30"}` }, i)),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-xs text-black", children: [
                  t.rating,
                  ".0 (",
                  t.reviews,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl leading-snug", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tours/$slug", params: {
                slug: t.slug
              }, className: "hover:text-primary", children: t.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-start gap-2 text-sm text-black", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
                t.highlights
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4 text-sm text-black", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
                  " ",
                  t.duration
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
                  " ",
                  t.group
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-black/60", children: "from" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl text-primary", children: [
                  "$",
                  t.price.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-black/60", children: "/person" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@bluelilactours.com?subject=Tour%20enquiry", className: "mt-5 inline-flex w-full items-center justify-between gap-3 rounded-full bg-accent py-3 pl-5 pr-2 text-sm font-medium text-accent-foreground transition hover:bg-[#A40A09] hover:text-white", children: [
                "Enquire now",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground transition group-hover/inner:bg-[#0C5DFF] group-hover/inner:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
              ] })
            ] })
          ] }, t.title);
        }) }),
        list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl border border-dashed border-border bg-card p-12 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "No tours match your search" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black", children: "Try a different destination or clear the filters." })
        ] }),
        totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-12 flex items-center justify-center gap-2", "aria-label": "Pagination", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: currentPage === 1, className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40", children: "Previous" }),
          Array.from({
            length: totalPages
          }).map((_, i) => {
            const n = i + 1;
            const active = n === currentPage;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPage(n), "aria-current": active ? "page" : void 0, className: `h-10 w-10 rounded-full text-sm font-medium transition ${active ? "bg-primary text-primary-foreground" : "border border-border bg-background text-foreground hover:bg-secondary"}`, children: n }, n);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: currentPage === totalPages, className: "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40", children: "Next" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaPlan, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function FilterBlock({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-white p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children })
  ] });
}
function CheckRow({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center gap-3 text-sm text-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked, onChange, className: "h-4 w-4 rounded border-border accent-primary" }),
    label
  ] });
}
function Hero({
  query,
  setQuery
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaBalloon, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 mt-32 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md", children: "27 curated journeys" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl", children: "Tours & Safaris" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85", children: "From the Masai Mara to the white sands of Zanzibar — pick the journey that calls you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex max-w-2xl items-center gap-2 rounded-full bg-white/95 p-2 shadow-2xl backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search destinations, parks, experiences…", className: "w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-[#0C5DFF]", children: "Search" })
      ] })
    ] })
  ] });
}
function CtaPlan() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/50 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Can't find what you're looking for?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Let's design a private safari just for you." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-black", children: "Every Bluelilac itinerary is bespoke. Share your dates, interests and budget — we'll craft something only yours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@bluelilactours.com", className: "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:bg-[#A40A09] hover:text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
        " info@bluelilactours.com"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254715405641", className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
        " +254 715 405641"
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {});
}
export {
  ToursPage as component
};
