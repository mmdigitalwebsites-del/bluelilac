import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { t as tourSerengeti, a as tourGorilla, b as tourLodge, c as tourZanzibar } from "./router-Dfz_60ae.mjs";
import { c as ctaBalloon } from "./hotballon-B-xs5Vi8.mjs";
import { S as Search, C as Compass, a as ShieldCheck, b as Sparkles, H as Heart, c as Star, d as MapPin, e as Clock, A as ArrowRight, f as Mail, P as Phone } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/blt%2017-ByWGB71F.jpg";
const TOURS = [{
  title: "13 Days Kenya & Tanzania Safari",
  destination: "Kenya · Tanzania",
  duration: "13 Days",
  category: "Wildlife",
  img: tourSerengeti,
  highlights: "Masai Mara · Serengeti · Ngorongoro · Amboseli",
  price: 4850,
  rating: 5,
  reviews: 24
}, {
  title: "7 Days Tanzania Signature Safari",
  destination: "Tanzania",
  duration: "7 Days",
  category: "Wildlife",
  img: tourSerengeti,
  highlights: "Arusha · Tarangire · Serengeti · Ngorongoro",
  price: 2950,
  rating: 5,
  reviews: 31
}, {
  title: "Gorilla Trekking in Bwindi",
  destination: "Uganda",
  duration: "5 Days",
  category: "Adventure",
  img: tourGorilla,
  highlights: "Entebbe · Bwindi Impenetrable Forest · Lake Bunyonyi",
  price: 3950,
  rating: 5,
  reviews: 14
}, {
  title: "Luxury Serengeti Under the Stars",
  destination: "Tanzania",
  duration: "7 Days",
  category: "Luxury",
  img: tourLodge,
  highlights: "Tented camps · Hot air balloon · Private guides",
  price: 3600,
  rating: 5,
  reviews: 18
}, {
  title: "Zanzibar Beach Escape",
  destination: "Zanzibar",
  duration: "6 Days",
  category: "Beach",
  img: tourZanzibar,
  highlights: "Stone Town · Nungwi · Spice Tour · Snorkeling",
  price: 1850,
  rating: 5,
  reviews: 21
}, {
  title: "10 Days Bush & Beach Kenya",
  destination: "Kenya",
  duration: "10 Days",
  category: "Beach",
  img: tourZanzibar,
  highlights: "Masai Mara · Amboseli · Diani Beach",
  price: 3850,
  rating: 5,
  reviews: 27
}];
const CATEGORIES = ["All", "Wildlife", "Beach", "Adventure", "Luxury"];
function ExploreOurToursPage() {
  const [category, setCategory] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const [favorites, setFavorites] = reactExports.useState(/* @__PURE__ */ new Set());
  const toggleFav = (title) => setFavorites((p) => {
    const n = new Set(p);
    n.has(title) ? n.delete(title) : n.add(title);
    return n;
  });
  const list = reactExports.useMemo(() => {
    return TOURS.filter((t) => {
      const matchesCat = category === "All" || t.category === category;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || t.title.toLowerCase().includes(q) || t.highlights.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [category, query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Safari landscape", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 mt-32 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md", children: "Handcrafted journeys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl", children: "Explore Our Tours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base text-white/85 md:text-lg", children: "Bush, beach, gorillas and the Great Migration — find the East African experience that calls you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex max-w-2xl flex-col gap-2 rounded-3xl bg-white/95 p-2 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 pl-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search by destination, park or experience…", className: "w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-[#0C5DFF]", children: "Search tours" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: [{
      icon: Compass,
      title: "Local expertise",
      body: "Born-and-raised guides with decades of safari craft."
    }, {
      icon: ShieldCheck,
      title: "Fully bonded",
      body: "Licensed, insured and 24/7 on-trip support."
    }, {
      icon: Sparkles,
      title: "Tailor-made",
      body: "Every itinerary is shaped around your dates and pace."
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[#A40A09]/10 text-[#A40A09]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl text-[#A40A09]", children: b.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black/70", children: b.body })
    ] }, b.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white pb-20 md:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Curated journeys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Pick your adventure" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCategory(c), className: `rounded-full px-4 py-2 text-sm font-medium transition ${category === c ? "bg-primary text-primary-foreground hover:bg-[#0C5DFF]" : "border border-border bg-white text-foreground hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"}`, children: c }, c)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: list.map((t) => {
        const fav = favorites.has(t.title);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md", children: t.destination }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => toggleFav(t.title), "aria-label": fav ? "Remove from favourites" : "Add to favourites", className: "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 hover:bg-[#A40A09] hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-4 w-4 transition ${fav ? "fill-primary text-primary" : "text-foreground"}` }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl leading-snug", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-start gap-2 text-sm text-black/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
              t.highlights
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border pt-4 text-sm text-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
                " ",
                t.duration
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg text-primary", children: [
                "$",
                t.price.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@bluelilactours.com?subject=Tour%20enquiry", className: "mt-5 inline-flex w-full items-center justify-between gap-3 rounded-full bg-accent py-3 pl-5 pr-2 text-sm font-medium text-accent-foreground transition hover:bg-[#A40A09] hover:text-white", children: [
              "Enquire now",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-white text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }, t.title);
      }) }),
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-3xl border border-dashed border-border bg-card p-12 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl", children: "No tours match your search" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black", children: "Try a different category or clear the search." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tours", className: "inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]", children: [
        "See all 25+ trips ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaBalloon, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-white/80", children: "Not sure where to start?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-white md:text-5xl", children: "Let's plan it together." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-white/85", children: "Tell us your dates and dream destinations — we'll craft a bespoke itinerary just for you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@bluelilactours.com", className: "inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-[#0C5DFF] transition hover:bg-[#0C5DFF] hover:text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " info@bluelilactours.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254715405641", className: "inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " +254 715 405641"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  ExploreOurToursPage as component
};
