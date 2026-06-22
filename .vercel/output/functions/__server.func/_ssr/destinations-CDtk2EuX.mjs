import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { m as maasaiMara, n as nakuru, t as tourSerengeti, o as olpejeta, d as tourBunyonyi, e as tourBeach, f as nairobi, h as heroSafari$2 } from "./router-DuwUHfAO.mjs";
import { c as ctaBalloon } from "./cta-balloon-COKT0Jd4.mjs";
import { t as tourTanzania, a as tourUganda } from "./blt 2-B9CMnGHM.mjs";
import { A as ArrowRight, C as Compass, b as Sparkles, d as MapPin, S as Search, f as Mail, P as Phone } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const amboseli = "/assets/blt%2013-D9MnhD8y.jpg";
const naivasha = "/assets/naivasha-ByGBxzc9.png";
const crator = "/assets/crater-D-6MQkLQ.png";
const tourPark = "/assets/nationalpark-CnhS0Hmx.png";
const tourLake = "/assets/lake-uB_NXHtf.png";
const arusha = "/assets/arusha-Cq3oMER3.png";
const tourForest = "/assets/forest-DwgG1vsE.png";
const tourElizabeth = "/assets/queen-tcLHFx0q.png";
const kigali = "/assets/blt%206-bsNYV7Qb.jpg";
const stoneTown = "/assets/stonetown-OL-6iJfa.png";
const COUNTRIES = [{
  name: "Kenya",
  blurb: "Birthplace of the safari — the Mara, the Rift Valley and ancient coastlines."
}, {
  name: "Tanzania",
  blurb: "Endless Serengeti plains, Ngorongoro's crater and Kilimanjaro's snows."
}, {
  name: "Uganda",
  blurb: "Mountain gorillas, chimpanzees and the source of the Nile."
}, {
  name: "Rwanda",
  blurb: "Land of a thousand hills and golden monkeys in volcanic forests."
}, {
  name: "Zanzibar",
  blurb: "Spice-scented Stone Town and turquoise Indian Ocean shores."
}];
const DESTINATIONS = [
  // Kenya
  {
    name: "Maasai Mara",
    country: "Kenya",
    tagline: "The Great Migration's stage",
    description: "Kenya's flagship reserve and the northern theatre of the Great Migration. Open savannah, huge predator densities and unrivalled big-cat sightings.",
    highlights: ["Great Migration (Jul–Oct)", "Big Five", "Hot-air balloon safaris", "Maasai cultural visits"],
    bestTime: "Jul – Oct",
    img: maasaiMara,
    featured: true
  },
  {
    name: "Amboseli National Park",
    country: "Kenya",
    tagline: "Elephants beneath Kilimanjaro",
    description: "Iconic views of Mt. Kilimanjaro framing some of Africa's largest elephant herds, set across swamps and dusty plains.",
    highlights: ["Tusker elephants", "Kilimanjaro backdrop", "Birdlife in the swamps"],
    bestTime: "Jun – Oct, Jan – Feb",
    img: amboseli
  },
  {
    name: "Lake Nakuru National Park",
    country: "Kenya",
    tagline: "Flamingo-rimmed Rift Valley jewel",
    description: "A compact Rift Valley park famed for flamingos, white and black rhino, Rothschild's giraffe and leopard along yellow-fever forests.",
    highlights: ["Black & white rhino", "Pelicans & flamingos", "Baboon Cliff viewpoint"],
    bestTime: "Year-round",
    img: nakuru
  },
  {
    name: "Lake Naivasha",
    country: "Kenya",
    tagline: "Freshwater haven on the Rift",
    description: "A serene freshwater lake of hippos, fish eagles and acacia woodlands — perfect for boat rides and walking safaris at Crescent Island.",
    highlights: ["Boat safaris", "Hells Gate cycling", "Crescent Island walks"],
    bestTime: "Year-round",
    img: naivasha
  },
  {
    name: "Samburu National Reserve",
    country: "Kenya",
    tagline: "Wild north of the equator",
    description: "Rugged semi-arid landscapes home to the 'Samburu Special Five' — reticulated giraffe, Grevy's zebra, Somali ostrich, gerenuk and beisa oryx.",
    highlights: ["Samburu Special Five", "Ewaso Nyiro river", "Samburu culture"],
    bestTime: "Jun – Oct",
    img: tourSerengeti
  },
  {
    name: "Ol Pejeta Conservancy",
    country: "Kenya",
    tagline: "Home of the last northern white rhinos",
    description: "East Africa's largest black rhino sanctuary and home of the world's last two northern white rhinos. Big Five plus a chimpanzee sanctuary.",
    highlights: ["Last northern white rhinos", "Chimp sanctuary", "Night game drives"],
    bestTime: "Year-round",
    img: olpejeta
  },
  {
    name: "Tsavo East & West",
    country: "Kenya",
    tagline: "Red elephants & vast wilderness",
    description: "Kenya's largest protected wilderness — Tsavo's red-dust elephants, Mzima Springs and the Yatta Plateau across two vast parks.",
    highlights: ["Red elephants", "Mzima Springs", "Lugard's Falls"],
    bestTime: "Jun – Oct, Jan – Feb",
    img: tourBunyonyi
  },
  {
    name: "Diani Beach",
    country: "Kenya",
    tagline: "Powder-white sands on the Indian Ocean",
    description: "Kenya's most beautiful stretch of coast — coral reefs, kite-surf swells and colobus monkeys in the coastal forest.",
    highlights: ["Snorkel & dive", "Kitesurfing", "Colobus monkey trails"],
    bestTime: "Dec – Mar, Jul – Oct",
    img: tourBeach
  },
  {
    name: "Nairobi",
    country: "Kenya",
    tagline: "The only city with a national park",
    description: "Your gateway to Kenya — Nairobi National Park, the Giraffe Centre, Sheldrick Elephant Orphanage and a buzzing food scene.",
    highlights: ["Nairobi National Park", "Sheldrick elephants", "Giraffe Centre", "Karen Blixen Museum"],
    bestTime: "Year-round",
    img: nairobi
  },
  // Tanzania
  {
    name: "Serengeti National Park",
    country: "Tanzania",
    tagline: "Endless plains of the Migration",
    description: "1.5 million wildebeest, vast plains, kopjes full of lions and the heart of the Great Migration year-round across the southern and western corridors.",
    highlights: ["Great Migration", "Calving season (Jan–Feb)", "Predator action", "Hot-air balloon"],
    bestTime: "Year-round (Migration varies)",
    img: tourTanzania,
    featured: true
  },
  {
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline: "Africa's Garden of Eden",
    description: "A collapsed volcanic caldera teeming with 25,000+ large animals — the most reliable Big Five sighting on the continent.",
    highlights: ["Big Five in one day", "Black rhino", "Maasai homesteads"],
    bestTime: "Year-round",
    img: crator
  },
  {
    name: "Tarangire National Park",
    country: "Tanzania",
    tagline: "Land of giants and baobabs",
    description: "Massive elephant herds, ancient baobab trees and the Tarangire River — a dry-season magnet for wildlife.",
    highlights: ["Huge elephant herds", "Baobab forests", "Tree-climbing pythons"],
    bestTime: "Jun – Oct",
    img: tourPark
  },
  {
    name: "Lake Manyara",
    country: "Tanzania",
    tagline: "Tree-climbing lions & soda lake",
    description: "Groundwater forest, flamingo-pink shores and famously tree-climbing lions tucked beneath the Rift escarpment.",
    highlights: ["Tree-climbing lions", "Flamingos", "Forest walks"],
    bestTime: "Jul – Oct",
    img: tourLake
  },
  {
    name: "Arusha",
    country: "Tanzania",
    tagline: "Gateway to the northern circuit",
    description: "Tanzania's safari capital nestled below Mt. Meru — your start and finish point for the northern parks.",
    highlights: ["Mt. Meru views", "Coffee tours", "Cultural villages"],
    bestTime: "Year-round",
    img: arusha
  },
  // Uganda
  {
    name: "Bwindi Impenetrable Forest",
    country: "Uganda",
    tagline: "Mountain gorillas in the mist",
    description: "Half the world's mountain gorillas live in Bwindi's ancient rainforest. Permits required — we handle every detail.",
    highlights: ["Mountain gorilla trekking", "Batwa cultural experience", "100+ butterfly species"],
    bestTime: "Jun – Aug, Dec – Feb",
    img: tourForest,
    featured: true
  },
  {
    name: "Queen Elizabeth NP",
    country: "Uganda",
    tagline: "Tree-climbing lions of Ishasha",
    description: "Savannah, crater lakes and the Kazinga Channel — plus the famous tree-climbing lions of the Ishasha sector.",
    highlights: ["Kazinga boat cruise", "Tree-climbing lions", "Chimpanzee tracking"],
    bestTime: "Jan – Feb, Jun – Sep",
    img: tourElizabeth
  },
  {
    name: "Lake Bunyonyi",
    country: "Uganda",
    tagline: "Africa's most beautiful lake",
    description: "29 emerald islands on a deep crater lake — the perfect unwind after gorilla trekking.",
    highlights: ["Island canoeing", "Birding", "Terraced hill views"],
    bestTime: "Year-round",
    img: tourBunyonyi
  },
  // Rwanda
  {
    name: "Volcanoes National Park",
    country: "Rwanda",
    tagline: "Gorillas, golden monkeys, volcanoes",
    description: "Trek mountain gorillas through the Virunga volcanoes — Rwanda's flagship experience, made famous by Dian Fossey.",
    highlights: ["Gorilla trekking", "Golden monkeys", "Dian Fossey hike"],
    bestTime: "Jun – Sep, Dec – Feb",
    img: tourUganda
  },
  {
    name: "Kigali",
    country: "Rwanda",
    tagline: "Clean, calm capital of a thousand hills",
    description: "One of Africa's cleanest and safest cities — moving genocide memorial, vibrant arts and excellent coffee.",
    highlights: ["Kigali Genocide Memorial", "Café culture", "Inema Arts Center"],
    bestTime: "Year-round",
    img: kigali
  },
  // Zanzibar
  {
    name: "Stone Town",
    country: "Zanzibar",
    tagline: "Spice islands' UNESCO heart",
    description: "A labyrinth of Swahili-Arab heritage — carved doors, spice markets and the freshly grilled seafood of Forodhani Gardens.",
    highlights: ["UNESCO old town", "Spice tour", "Prison Island turtles"],
    bestTime: "Jun – Oct, Dec – Feb",
    img: stoneTown
  },
  {
    name: "Nungwi & Kendwa",
    country: "Zanzibar",
    tagline: "Powder beaches & turquoise water",
    description: "The island's most picture-perfect beaches — long white sands, sunset dhows and excellent diving on the northern reefs.",
    highlights: ["Dhow sunset sails", "Snorkel & dive", "Mnemba Atoll"],
    bestTime: "Jun – Oct, Dec – Mar",
    img: tourBeach,
    featured: true
  }
];
const COUNTRY_FILTERS = ["All", ...COUNTRIES.map((c) => c.name)];
function DestinationsPage() {
  const [filter, setFilter] = reactExports.useState("All");
  const [query, setQuery] = reactExports.useState("");
  const list = reactExports.useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesFilter = filter === "All" || d.country === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.country.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);
  const featured = DESTINATIONS.filter((d) => d.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { query, setQuery }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Where we go" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Five countries. One continent of wonder." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-black", children: "From the wildebeest-thundered plains of the Serengeti to the misty gorilla forests of Bwindi, we craft journeys across East Africa's most extraordinary places — and the Indian Ocean and Arabian add-ons that pair beautifully with them." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/tours", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: [
          "Browse tours ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilter(c.name), className: "group rounded-3xl border border-border bg-card p-8 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: c.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-black", children: c.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100", children: [
          "Explore ",
          c.name,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }, c.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Bluelilac favourites" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Iconic experiences" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "hidden h-8 w-8 text-primary md:block" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: featured.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl bg-card shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            " ",
            d.country
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/85", children: d.tagline })
        ] })
      ] }, d.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Every place we love" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
            list.length,
            " ",
            list.length === 1 ? "destination" : "destinations"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: COUNTRY_FILTERS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `rounded-full border px-4 py-2 text-sm transition ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-secondary"}`, children: f }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: list.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: d.name, className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            " ",
            d.country
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm italic text-black/70", children: d.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-black", children: d.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: d.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full bg-secondary px-3 py-1 text-xs text-foreground", children: h }, h)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border pt-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "Best time: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: d.bestTime })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/tours", className: "inline-flex items-center gap-1 font-medium text-primary hover:opacity-80", children: [
              "Tours ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          ] })
        ] })
      ] }, d.name)) }),
      list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center text-black", children: "No destinations match your search. Try a different filter." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaPlan, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Hero({
  query,
  setQuery
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[72vh] min-h-[540px] w-full items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroSafari$2, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md", children: "Kenya · Tanzania · Uganda · Rwanda · Zanzibar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl", children: "Destinations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85", children: "The wild places, ancient towns and ocean shores that shape an East African journey." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex max-w-2xl items-center gap-2 rounded-full bg-white/95 p-2 shadow-2xl backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search a country, park, beach or city…", className: "w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90", children: "Search" })
      ] })
    ] })
  ] });
}
function CtaPlan() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-foreground py-20 md:py-28 text-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaBalloon, alt: "", className: "absolute inset-0 h-full w-full object-cover opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-white", children: "Not sure where to start?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl text-white", children: "We'll build the journey around you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-white/75", children: "Tell us your dates, interests and budget — we'll suggest the perfect mix of countries and experiences." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@bluelilactours.com", className: "inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#0C5DFF] hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
          " info@bluelilactours.com"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+254715405641", className: "inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3 text-sm font-medium text-background transition hover:bg-[#D0E0FF] hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " +254 715 405641"
        ] })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {});
}
export {
  DestinationsPage as component
};
