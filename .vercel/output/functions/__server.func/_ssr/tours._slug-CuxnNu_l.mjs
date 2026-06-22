import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { R as Route$1, T as TOURS } from "./router-DuwUHfAO.mjs";
import { p as ArrowLeft, e as Clock, k as Users, d as MapPin, c as Star, q as CalendarDays, B as BedDouble, r as Check, X, f as Mail, P as Phone, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function buildItinerary(explicit, highlights, durationDays) {
  if (explicit && explicit.length) return explicit;
  const stops = highlights.split("·").map((s) => s.trim()).filter(Boolean);
  if (!stops.length) return [];
  const days = [];
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
      title: isArrival ? `Arrival — ${stop}` : isDeparture ? `${stop} & Departure` : `Explore ${stop}`,
      bullets: isArrival ? [`Arrive in ${stop} and meet your Bluelilac driver-guide.`, "Transfer to your lodge, briefing on the days ahead.", "Dinner and overnight."] : [`Game drives and guided activities around ${stop}.`, "Picnic or lodge lunch, with afternoon wildlife viewing.", "Return to lodge for dinner and overnight."],
      stay: isDeparture ? void 0 : `${span} ${span === 1 ? "night" : "nights"} in ${stop}`
    });
    dayCounter += span;
  });
  return days;
}
function TourDetailPage() {
  const {
    tour
  } = Route$1.useLoaderData();
  const related = TOURS.filter((t) => t.slug !== tour.slug).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[60vh] min-h-[460px] w-full items-end overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: tour.img, alt: tour.title, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tours", className: "inline-flex items-center gap-2 text-sm text-white/80 hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All tours"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md", children: tour.destination }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl", children: tour.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-5 text-sm text-white/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            " ",
            tour.duration
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
            " ",
            tour.group,
            " guests"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            " ",
            tour.highlights
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-primary", children: [
            Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${i < tour.rating ? "fill-current" : "opacity-30"}` }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-white/90", children: [
              tour.rating,
              ".0 (",
              tour.reviews,
              ")"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_360px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl", children: "About this trip" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-5 text-base leading-relaxed text-black md:text-lg", children: tour.overview.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl", children: "What you'll see" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: tour.highlights.split("·").map((h) => h.trim()).filter(Boolean).map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-black", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            h
          ] }, h)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Itinerary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl", children: "Day-by-day journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-8 relative space-y-6 border-l border-border pl-6 md:pl-8", children: buildItinerary(tour.itinerary, tour.highlights, tour.durationDays).map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] md:-left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 md:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-3.5 w-3.5" }),
                  " ",
                  d.day
                ] }),
                d.stay && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-xs text-black/70", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BedDouble, { className: "h-3.5 w-3.5 text-primary" }),
                  " ",
                  d.stay
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl text-foreground", children: d.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm leading-relaxed text-black", children: d.bullets.map((b, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
              ] }, j)) })
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl", children: "What's included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-black", children: tour.included.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
              item
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Excluded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl", children: "What's not included" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm text-black", children: tour.excluded.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
              item
            ] }, item)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Cancellation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl", children: "Flexible booking" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-black md:text-base", children: "You can cancel up to 24 hours in advance of the experience for a full refund. For tailor-made private trips, our team will share the specific terms with your quote." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-24 lg:self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-black/60", children: "from" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-4xl text-primary", children: [
            "$",
            tour.price.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-black/60", children: "/person" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 border-t border-border pt-5 text-sm text-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black/60", children: "Duration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tour.duration })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black/60", children: "Group size" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              tour.group,
              " guests"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black/60", children: "Tour type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tour.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black/60", children: "Language" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "English" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:info@bluelilactours.com?subject=Enquiry:%20${encodeURIComponent(tour.title)}`, className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          " Make an enquiry"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254715405641", className: "mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " +254 715 405641"
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "You might also like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tours/$slug", params: {
        slug: r.slug
      }, className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: r.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md", children: r.destination })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg leading-snug group-hover:text-primary", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border pt-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: r.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg text-primary", children: [
              "$",
              r.price.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary", children: [
            "View trip ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }, r.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  TourDetailPage as component
};
