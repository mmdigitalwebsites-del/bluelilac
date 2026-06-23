import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-GBmwqhFy.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const WHATSAPP_NUMBER = "254715405641";
const WHATSAPP_TEXT = "Hello Bluelilac Tours, I'd like to enquire about a safari.";
function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat with us on WhatsApp",
      className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-2 ring-white/70 transition hover:scale-110 hover:shadow-2xl md:bottom-7 md:right-7 md:h-16 md:w-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "relative h-7 w-7 md:h-8 md:w-8" })
      ]
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bluelilac Tours — East Africa Safari Specialists" },
      {
        name: "description",
        content: "Bluelilac Tours designs private safaris across Kenya, Tanzania, Uganda, Rwanda and Zanzibar — Great Migration, Big Five, gorilla trekking and beach escapes."
      },
      { name: "author", content: "Bluelilac Tours" },
      {
        name: "keywords",
        content: "Kenya safari, Tanzania safari, Masai Mara, Serengeti, gorilla trekking Uganda, Rwanda safari, Zanzibar beach holiday, East Africa tours, Great Migration safari, Bluelilac Tours"
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bluelilac Tours" },
      { property: "og:title", content: "Bluelilac Tours — East Africa Safari Specialists" },
      {
        property: "og:description",
        content: "Private safaris across Kenya, Tanzania, Uganda, Rwanda & Zanzibar. Great Migration, Big Five and gorilla trekking — curated by Bluelilac."
      },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bluelilac Tours — East Africa Safari Specialists" },
      {
        name: "twitter:description",
        content: "Private safaris across Kenya, Tanzania, Uganda, Rwanda & Zanzibar."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Bluelilac Tours",
          description: "East Africa safari specialists offering private tours across Kenya, Tanzania, Uganda, Rwanda and Zanzibar.",
          url: "/",
          telephone: "+254715405641",
          email: "info@bluelilactours.com",
          areaServed: ["Kenya", "Tanzania", "Uganda", "Rwanda", "Zanzibar"],
          sameAs: [
            "https://www.facebook.com/bluelilactours",
            "https://www.instagram.com/bluelilactours"
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {})
  ] });
}
const tourSerengeti = "/assets/tour-serengeti-Cj8XUR9q.jpg";
const tourGorilla = "/assets/tour-gorilla-Gdf1UJ9G.jpg";
const tourLodge = "/assets/tour-lodge-C_Atlq8T.jpg";
const tourZanzibar = "/assets/tour-zanzibar-Dt7VKFze.jpg";
const DEFAULT_INCLUDED = [
  "Professional English-speaking driver-guide",
  "All park entry fees and government taxes",
  "4x4 Landcruiser with pop-up roof and game-viewing windows",
  "Accommodation as per the itinerary",
  "All meals as specified (breakfast, lunch, dinner)",
  "Bottled drinking water in the vehicle",
  "Airport transfers"
];
const DEFAULT_EXCLUDED = [
  "International flights and visas",
  "Travel and medical insurance",
  "Gratuities for guides and lodge staff",
  "Soft and alcoholic drinks",
  "Personal items, laundry and phone calls",
  "Optional activities (balloon flights, cultural visits)"
];
const DAY_TRIP_INCLUDED = [
  "Professional English-speaking driver-guide",
  "Park entry fees and government taxes",
  "Transport in a comfortable 4x4 or safari van with pop-up roof",
  "Bottled drinking water",
  "Hotel pickup and drop-off (within city limits)"
];
const DAY_TRIP_EXCLUDED = [
  "Meals (unless specified)",
  "Tips and gratuities",
  "Personal expenses, drinks and souvenirs",
  "Optional add-on activities",
  "Travel insurance"
];
const TOURS = [
  {
    slug: "13-days-kenya-tanzania-safari",
    title: "13 Days Kenya & Tanzania Safari",
    destination: "Kenya · Tanzania",
    duration: "13 Days",
    durationDays: 13,
    group: "0–15",
    type: "Package tour",
    img: tourSerengeti,
    highlights: "Nairobi · Masai Mara · Naivasha · Amboseli · Arusha · Ngorongoro · Serengeti",
    price: 4850,
    rating: 5,
    reviews: 24,
    overview: [
      "This 13-day cross-border safari is the complete East African experience — combining Kenya's most iconic parks with Tanzania's legendary Serengeti and Ngorongoro Crater.",
      "Witness the Great Migration, track the Big Five across multiple ecosystems, and end your journey with the panoramic views of the Crater highlands."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Arrival at Jomo Kenyatta International Airport.",
          "Meet & greet by Bluelilac representative and transfer to hotel.",
          "Optional city excursion depending on arrival time.",
          "Dinner & overnight in Nairobi."
        ],
        stay: "Nairobi"
      },
      {
        day: "Day 2–3",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Scenic drive to Masai Mara via the Great Rift Valley.",
          "Afternoon game drive upon arrival.",
          "Full-day game drives on Day 3.",
          "Optional hot air balloon safari.",
          "Opportunity to witness the Big Five and seasonal Great Migration.",
          "Optional Maasai village visit."
        ],
        stay: "2 nights in Masai Mara"
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Naivasha",
        bullets: [
          "Morning game drive.",
          "Drive to Lake Naivasha.",
          "Afternoon boat safari (hippos & birdlife).",
          "Optional walking safari at Crescent Island."
        ],
        stay: "1 night in Naivasha"
      },
      {
        day: "Day 5–6",
        title: "Naivasha → Amboseli",
        bullets: [
          "Drive to Amboseli National Park.",
          "Afternoon game drive.",
          "Full-day wildlife viewing on Day 6.",
          "Spectacular views of Mount Kilimanjaro.",
          "Famous for large elephant herds."
        ],
        stay: "2 nights in Amboseli"
      },
      {
        day: "Day 7",
        title: "Amboseli → Arusha (Tanzania)",
        bullets: [
          "Breakfast and transfer to Namanga border.",
          "Immigration formalities.",
          "Continue to Arusha.",
          "Relaxed evening at lodge."
        ],
        stay: "1 night in Arusha"
      },
      {
        day: "Day 8–9",
        title: "Arusha → Ngorongoro",
        bullets: [
          "Drive to Ngorongoro Highlands.",
          "Full crater descent safari.",
          "Spot black rhino, lions, buffalo and flamingos.",
          "Scenic crater rim lodge stay."
        ],
        stay: "2 nights in Ngorongoro"
      },
      {
        day: "Day 10–11",
        title: "Ngorongoro → Serengeti",
        bullets: [
          "Scenic drive into Serengeti.",
          "Game drive en route.",
          "Full-day safari on Day 11.",
          "Excellent predator sightings.",
          "Optional balloon safari."
        ],
        stay: "2 nights in Serengeti"
      },
      {
        day: "Day 12",
        title: "Serengeti → Nairobi",
        bullets: [
          "Early departure.",
          "Cross-border transfer via Namanga.",
          "Arrive in Nairobi late afternoon.",
          "Farewell dinner (optional)."
        ],
        stay: "1 night in Nairobi"
      },
      {
        day: "Day 13",
        title: "Departure",
        bullets: ["Breakfast at hotel.", "Transfer to airport.", "End of safari."]
      }
    ]
  },
  {
    slug: "9-days-kenya-tanzania-cross-border-safari",
    title: "9 Days Kenya–Tanzania Cross-Border Safari",
    destination: "Kenya · Tanzania",
    duration: "9 Days",
    durationDays: 9,
    group: "0–15",
    type: "Package tour",
    img: tourLodge,
    highlights: "Nairobi · Amboseli · Arusha · Tarangire · Serengeti · Ngorongoro",
    price: 3450,
    rating: 5,
    reviews: 18,
    overview: [
      "Experience the best of East Africa in one efficient nine-day cross-border safari — elephants under Kilimanjaro, baobabs in Tarangire, the endless Serengeti, and the Ngorongoro Crater."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: [
          "Airport pickup and transfer to hotel.",
          "Pre-safari briefing.",
          "Dinner and overnight."
        ],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Amboseli",
        bullets: [
          "Morning drive to Amboseli National Park.",
          "Picnic lunch en route.",
          "Afternoon game drive with Kilimanjaro views."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 3",
        title: "Amboseli full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Large elephant herds, lions, cheetah and buffalo.",
          "Optional Maasai cultural visit."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 4",
        title: "Amboseli → Arusha (Tanzania)",
        bullets: [
          "Breakfast and depart for Namanga border.",
          "Immigration formalities and change of vehicle.",
          "Continue to Arusha for an early arrival."
        ],
        stay: "Arusha"
      },
      {
        day: "Day 5",
        title: "Arusha → Tarangire",
        bullets: [
          "Drive to Tarangire National Park.",
          "Full afternoon game drive.",
          "Famous for baobab trees and huge elephant herds."
        ],
        stay: "Tarangire / Karatu"
      },
      {
        day: "Day 6",
        title: "Tarangire → Serengeti",
        bullets: [
          "Drive through the Ngorongoro Conservation Area.",
          "Descend into the Serengeti plains.",
          "Afternoon game drive en route."
        ],
        stay: "Central Serengeti"
      },
      {
        day: "Day 7",
        title: "Serengeti full day",
        bullets: [
          "Full day exploring the Seronera Valley.",
          "Predator hotspot — lion, leopard, cheetah.",
          "Optional hot air balloon safari at sunrise."
        ],
        stay: "Central Serengeti"
      },
      {
        day: "Day 8",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive in Serengeti.",
          "Descend into Ngorongoro Crater for a half-day safari.",
          "Spot the rare black rhino and the Big Five."
        ],
        stay: "Ngorongoro / Karatu"
      },
      {
        day: "Day 9",
        title: "Ngorongoro → Arusha → Departure",
        bullets: [
          "Drive back to Arusha.",
          "Lunch and transfer to Kilimanjaro Airport or back to Nairobi."
        ]
      }
    ]
  },
  {
    slug: "7-days-tanzania-signature-safari",
    title: "7 Days Tanzania Signature Safari",
    destination: "Tanzania",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Package tour",
    img: tourSerengeti,
    highlights: "Arusha · Tarangire · Serengeti · Ngorongoro",
    price: 2950,
    rating: 5,
    reviews: 31,
    overview: [
      "Discover Tanzania's most iconic wildlife destinations on this seven-day signature safari — tree-climbing lions, the Great Migration herds, and the Ngorongoro Crater floor."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Arusha",
        bullets: [
          "Arrival at Kilimanjaro International Airport.",
          "Transfer to Arusha for a pre-safari briefing.",
          "Dinner and overnight."
        ],
        stay: "Arusha"
      },
      {
        day: "Day 2",
        title: "Arusha → Tarangire",
        bullets: [
          "Morning drive to Tarangire National Park.",
          "Full afternoon game drive among baobabs and elephants."
        ],
        stay: "Tarangire"
      },
      {
        day: "Day 3",
        title: "Tarangire → Lake Manyara → Karatu",
        bullets: [
          "Half-day game drive in Lake Manyara — famous for tree-climbing lions and flamingos.",
          "Continue to Karatu in the highlands."
        ],
        stay: "Karatu"
      },
      {
        day: "Day 4",
        title: "Karatu → Serengeti",
        bullets: [
          "Drive into the Serengeti via the Ngorongoro highlands.",
          "Afternoon game drive in central Serengeti."
        ],
        stay: "Serengeti"
      },
      {
        day: "Day 5",
        title: "Serengeti full day",
        bullets: [
          "Full day game viewing.",
          "Optional hot air balloon safari at dawn.",
          "Search for the Big Five and migration herds."
        ],
        stay: "Serengeti"
      },
      {
        day: "Day 6",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive.",
          "Descend into Ngorongoro Crater for a half-day safari.",
          "Drive up to the crater rim for sunset."
        ],
        stay: "Ngorongoro / Karatu"
      },
      {
        day: "Day 7",
        title: "Ngorongoro → Arusha → Departure",
        bullets: [
          "Return drive to Arusha.",
          "Transfer to Kilimanjaro Airport for your flight home."
        ]
      }
    ]
  },
  {
    slug: "5-days-tanzania-classic-safari",
    title: "5 Days Tanzania Classic Safari",
    destination: "Tanzania",
    duration: "5 Days",
    durationDays: 5,
    group: "0–15",
    type: "Package tour",
    img: tourLodge,
    highlights: "Arusha · Ngorongoro · Serengeti",
    price: 2150,
    rating: 4,
    reviews: 12,
    overview: [
      "Experience the heart of Tanzania's most iconic wildlife circuit in just five days. Perfect for first-time safari travellers or as an add-on to Kilimanjaro or Zanzibar."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Arusha",
        bullets: [
          "Kilimanjaro Airport pickup.",
          "Transfer to Arusha lodge for briefing and overnight."
        ],
        stay: "Arusha"
      },
      {
        day: "Day 2",
        title: "Arusha → Serengeti",
        bullets: [
          "Scenic drive via the Ngorongoro highlands into the Serengeti.",
          "Afternoon game drive in central Serengeti."
        ],
        stay: "Serengeti"
      },
      {
        day: "Day 3",
        title: "Serengeti full day",
        bullets: [
          "Full day exploring the Seronera Valley.",
          "Predator-rich plains and big cat sightings."
        ],
        stay: "Serengeti"
      },
      {
        day: "Day 4",
        title: "Serengeti → Ngorongoro Crater",
        bullets: [
          "Morning game drive in Serengeti.",
          "Crater descent safari in the afternoon.",
          "Big Five viewing on the crater floor."
        ],
        stay: "Karatu"
      },
      {
        day: "Day 5",
        title: "Ngorongoro → Arusha → Departure",
        bullets: ["Breakfast and drive back to Arusha.", "Transfer to airport for departure."]
      }
    ]
  },
  {
    slug: "10-days-bush-and-beach-kenya",
    title: "10 Days Bush & Beach Kenya Experience",
    destination: "Kenya",
    duration: "10 Days",
    durationDays: 10,
    group: "0–15",
    type: "Package tour",
    img: tourZanzibar,
    highlights: "Nairobi · Masai Mara · Naivasha · Amboseli · Diani Beach",
    price: 3850,
    rating: 5,
    reviews: 27,
    overview: [
      "Why choose between safari and the beach? This ten-day journey pairs Kenya's classic wildlife parks with the white sand and warm waters of Diani Beach."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup.", "Transfer to hotel and pre-safari briefing."],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive via the Great Rift Valley.", "Afternoon game drive on arrival."],
        stay: "Masai Mara"
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: [
          "Full-day game drives in the Mara.",
          "Big Five and (seasonal) wildebeest crossings."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Naivasha",
        bullets: ["Morning game drive.", "Drive to Naivasha for an afternoon boat safari."],
        stay: "Naivasha"
      },
      {
        day: "Day 5",
        title: "Naivasha → Amboseli",
        bullets: [
          "Scenic drive to Amboseli.",
          "Afternoon game drive with Mount Kilimanjaro views."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 6",
        title: "Amboseli full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Massive elephant herds and Maasai culture."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 7",
        title: "Amboseli → Diani Beach",
        bullets: [
          "Transfer to Mombasa / Ukunda by road or flight.",
          "Continue to Diani Beach for check-in.",
          "Sunset on the Indian Ocean."
        ],
        stay: "Diani Beach"
      },
      {
        day: "Day 8",
        title: "Diani Beach",
        bullets: [
          "Day at leisure on the beach.",
          "Optional snorkelling, dhow cruise or kite-surfing."
        ],
        stay: "Diani Beach"
      },
      {
        day: "Day 9",
        title: "Diani Beach",
        bullets: ["Full beach day.", "Optional Wasini Island & Kisite Marine Park excursion."],
        stay: "Diani Beach"
      },
      {
        day: "Day 10",
        title: "Diani → Departure",
        bullets: ["Transfer to Mombasa or Ukunda Airport for onward flight."]
      }
    ]
  },
  {
    slug: "10-days-ultimate-kenya-explorer",
    title: "10 Days Ultimate Kenya Explorer Safari",
    destination: "Kenya",
    duration: "10 Days",
    durationDays: 10,
    group: "0–15",
    type: "Package tour",
    img: tourSerengeti,
    highlights: "Nairobi · Masai Mara · Nakuru · Naivasha · Amboseli · Salt Lick · Tsavo East",
    price: 3650,
    rating: 5,
    reviews: 19,
    overview: [
      "If you want to experience Kenya from the Mara plains to the red elephants of Tsavo, this is the trip. Seven distinct ecosystems in ten days."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer to hotel.", "Safari briefing and dinner."],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive to Masai Mara.", "Afternoon game drive."],
        stay: "Masai Mara"
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: ["Morning and afternoon game drives.", "Optional Maasai village visit."],
        stay: "Masai Mara"
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Nakuru",
        bullets: [
          "Drive to Lake Nakuru.",
          "Afternoon game drive — rhino, flamingo, Rothschild's giraffe."
        ],
        stay: "Lake Nakuru"
      },
      {
        day: "Day 5",
        title: "Nakuru → Naivasha",
        bullets: [
          "Short transfer to Lake Naivasha.",
          "Afternoon boat ride and optional Crescent Island walk."
        ],
        stay: "Naivasha"
      },
      {
        day: "Day 6",
        title: "Naivasha → Amboseli",
        bullets: ["Long drive to Amboseli.", "Late afternoon game drive."],
        stay: "Amboseli"
      },
      {
        day: "Day 7",
        title: "Amboseli → Salt Lick (Taita Hills)",
        bullets: [
          "Morning game drive.",
          "Transfer to Salt Lick Lodge.",
          "Stilted lodge with floodlit waterhole game viewing."
        ],
        stay: "Salt Lick"
      },
      {
        day: "Day 8",
        title: "Salt Lick → Tsavo East",
        bullets: [
          "Drive into Tsavo East National Park.",
          "Afternoon game drive — the red elephants of Tsavo."
        ],
        stay: "Tsavo East"
      },
      {
        day: "Day 9",
        title: "Tsavo East full day",
        bullets: ["Full-day game drives.", "Aruba Dam, Mudanda Rock and Yatta Plateau."],
        stay: "Tsavo East"
      },
      {
        day: "Day 10",
        title: "Tsavo East → Nairobi/Mombasa",
        bullets: ["Morning game drive en route.", "Transfer to Nairobi or Mombasa for departure."]
      }
    ]
  },
  {
    slug: "9-days-northern-frontier-classic-kenya",
    title: "9 Days Northern Frontier & Classic Kenya Safari",
    destination: "Kenya",
    duration: "9 Days",
    durationDays: 9,
    group: "0–15",
    type: "Package tour",
    img: tourLodge,
    highlights: "Nairobi · Samburu · Sweetwaters (Ol Pejeta) · Lake Nakuru · Masai Mara",
    price: 3250,
    rating: 5,
    reviews: 15,
    overview: [
      "This is Kenya in its full glory — the Special Five of arid Samburu, the rhinos of Ol Pejeta, the flamingos of Nakuru, and the Big Five of the Maasai Mara."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup.", "Transfer to hotel for briefing."],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Samburu",
        bullets: [
          "Drive north past Mount Kenya.",
          "Afternoon game drive in Samburu National Reserve."
        ],
        stay: "Samburu"
      },
      {
        day: "Day 3",
        title: "Samburu full day",
        bullets: [
          "Morning and afternoon game drives.",
          "Track the Samburu Special Five — gerenuk, reticulated giraffe, Grevy's zebra, beisa oryx, Somali ostrich."
        ],
        stay: "Samburu"
      },
      {
        day: "Day 4",
        title: "Samburu → Sweetwaters (Ol Pejeta)",
        bullets: [
          "Transfer to Ol Pejeta Conservancy.",
          "Visit the chimpanzee sanctuary and the last northern white rhinos.",
          "Afternoon game drive."
        ],
        stay: "Sweetwaters"
      },
      {
        day: "Day 5",
        title: "Sweetwaters → Lake Nakuru",
        bullets: [
          "Drive to Lake Nakuru.",
          "Afternoon game drive — rhino, flamingo, Rothschild giraffe."
        ],
        stay: "Lake Nakuru"
      },
      {
        day: "Day 6",
        title: "Nakuru → Masai Mara",
        bullets: ["Scenic drive to the Mara.", "Afternoon game drive."],
        stay: "Masai Mara"
      },
      {
        day: "Day 7",
        title: "Masai Mara full day",
        bullets: ["Full-day game drive with picnic lunch.", "Optional hot air balloon safari."],
        stay: "Masai Mara"
      },
      {
        day: "Day 8",
        title: "Masai Mara full day",
        bullets: [
          "Morning game drive.",
          "Optional Maasai cultural visit.",
          "Afternoon game drive."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 9",
        title: "Masai Mara → Nairobi → Departure",
        bullets: ["Morning drive back to Nairobi.", "Transfer to JKIA for your flight home."]
      }
    ]
  },
  {
    slug: "8-days-kenya-scenic-wildlife",
    title: "8 Days Kenya Scenic & Wildlife Safari",
    destination: "Kenya",
    duration: "8 Days",
    durationDays: 8,
    group: "0–15",
    type: "Package tour",
    img: tourSerengeti,
    highlights: "Nairobi · Masai Mara · Lake Nakuru · Naivasha · Amboseli",
    price: 2850,
    rating: 4,
    reviews: 22,
    overview: [
      "Eight days. Five iconic destinations. One unforgettable Kenyan journey through the country's most photogenic landscapes."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer to hotel.", "Dinner and overnight."],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Masai Mara",
        bullets: ["Drive via the Great Rift Valley.", "Afternoon game drive."],
        stay: "Masai Mara"
      },
      {
        day: "Day 3",
        title: "Masai Mara full day",
        bullets: ["Morning and afternoon game drives.", "Optional balloon safari."],
        stay: "Masai Mara"
      },
      {
        day: "Day 4",
        title: "Masai Mara → Lake Nakuru",
        bullets: ["Drive to Lake Nakuru.", "Afternoon game drive — rhino and flamingo."],
        stay: "Lake Nakuru"
      },
      {
        day: "Day 5",
        title: "Nakuru → Lake Naivasha",
        bullets: ["Transfer to Naivasha.", "Boat ride and Crescent Island walk."],
        stay: "Naivasha"
      },
      {
        day: "Day 6",
        title: "Naivasha → Amboseli",
        bullets: ["Drive to Amboseli National Park.", "Afternoon game drive."],
        stay: "Amboseli"
      },
      {
        day: "Day 7",
        title: "Amboseli full day",
        bullets: ["Morning and afternoon game drives.", "Kilimanjaro views and elephant herds."],
        stay: "Amboseli"
      },
      {
        day: "Day 8",
        title: "Amboseli → Nairobi → Departure",
        bullets: ["Morning drive to Nairobi.", "Airport transfer."]
      }
    ]
  },
  {
    slug: "7-days-kenya-classic-safari",
    title: "7 Days Kenya Classic Safari",
    destination: "Kenya",
    duration: "7 Days",
    durationDays: 7,
    group: "0–15",
    type: "Package tour",
    img: tourLodge,
    highlights: "Nairobi · Amboseli · Nakuru · Masai Mara",
    price: 2450,
    rating: 5,
    reviews: 28,
    overview: [
      "The classic week-long Kenyan safari — Amboseli's elephants under Kilimanjaro, the flamingos of Nakuru, and the Big Five of the Maasai Mara."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Nairobi",
        bullets: ["Airport pickup and transfer.", "Briefing and overnight."],
        stay: "Nairobi"
      },
      {
        day: "Day 2",
        title: "Nairobi → Amboseli",
        bullets: ["Drive to Amboseli.", "Afternoon game drive."],
        stay: "Amboseli"
      },
      {
        day: "Day 3",
        title: "Amboseli full day",
        bullets: ["Morning and afternoon game drives with Kilimanjaro views."],
        stay: "Amboseli"
      },
      {
        day: "Day 4",
        title: "Amboseli → Lake Nakuru",
        bullets: ["Long scenic drive via Nairobi.", "Late afternoon game drive in Nakuru."],
        stay: "Lake Nakuru"
      },
      {
        day: "Day 5",
        title: "Nakuru → Masai Mara",
        bullets: ["Drive to Masai Mara.", "Afternoon game drive."],
        stay: "Masai Mara"
      },
      {
        day: "Day 6",
        title: "Masai Mara full day",
        bullets: ["Full-day game drive with picnic lunch.", "Optional Maasai village visit."],
        stay: "Masai Mara"
      },
      {
        day: "Day 7",
        title: "Masai Mara → Nairobi → Departure",
        bullets: ["Morning drive back to Nairobi.", "Airport drop-off."]
      }
    ]
  },
  {
    slug: "4-days-landcruiser-masai-mara-lake-nakuru",
    title: "4 Days Landcruiser Safari to Masai Mara & Lake Nakuru",
    destination: "Kenya",
    duration: "4 Days",
    durationDays: 4,
    group: "0–30",
    type: "Group tour",
    img: tourSerengeti,
    highlights: "Masai Mara · Lake Nakuru",
    price: 1450,
    rating: 4,
    reviews: 33,
    overview: [
      "A small-group safari adventure to Masai Mara Game Reserve with big-game concentration and to Lake Nakuru, home to millions of flamingos and an ornithological paradise.",
      "The Masai Mara is named the 8th Wonder of the New World due to the annual wildebeest migration. Lake Nakuru is a birder's haven and home to the critically endangered black and white rhinos."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Morning pickup in Nairobi.",
          "Scenic drive via the Great Rift Valley.",
          "Afternoon game drive in the Masai Mara."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full-day game drive with picnic lunch.",
          "Optional Maasai village visit.",
          "Optional hot air balloon safari."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 3",
        title: "Masai Mara → Lake Nakuru",
        bullets: [
          "Morning game drive in the Mara.",
          "Drive to Lake Nakuru National Park.",
          "Afternoon game drive — flamingos, rhino and Rothschild's giraffe."
        ],
        stay: "Lake Nakuru"
      },
      {
        day: "Day 4",
        title: "Lake Nakuru → Nairobi",
        bullets: ["Morning game drive.", "Drive back to Nairobi, arriving late afternoon."]
      }
    ]
  },
  {
    slug: "3-days-amboseli-from-nairobi",
    title: "3 Days Amboseli National Park trip from Nairobi",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–30",
    type: "Group tour",
    img: tourLodge,
    highlights: "Amboseli · Mount Kilimanjaro · Elephant herds",
    price: 650,
    rating: 5,
    reviews: 26,
    overview: [
      "A short, immersive three-day safari to Amboseli National Park — famous for its enormous elephant herds and the breathtaking backdrop of Mount Kilimanjaro."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Amboseli",
        bullets: [
          "Morning pickup in Nairobi.",
          "Scenic drive to Amboseli (≈4 hrs).",
          "Lunch at lodge.",
          "Afternoon game drive with views of Kilimanjaro."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 2",
        title: "Amboseli full day",
        bullets: [
          "Sunrise game drive.",
          "Breakfast and rest at lodge.",
          "Afternoon game drive at Observation Hill.",
          "Optional Maasai cultural visit."
        ],
        stay: "Amboseli"
      },
      {
        day: "Day 3",
        title: "Amboseli → Nairobi",
        bullets: [
          "Morning game drive en route.",
          "Brunch at lodge.",
          "Drive back to Nairobi, arriving late afternoon."
        ]
      }
    ]
  },
  {
    slug: "3-days-maasai-mara-from-nairobi",
    title: "3 Days Maasai Mara Guided Safari from Nairobi",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–30",
    type: "Group tour",
    img: tourSerengeti,
    highlights: "Masai Mara · Big Five · Great Migration",
    price: 720,
    rating: 5,
    reviews: 41,
    overview: [
      "A guided three-day safari to the world-famous Maasai Mara — home of the Big Five and the seasonal Great Migration across the Mara River."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "Morning departure from Nairobi.",
          "Drive via the Great Rift Valley viewpoint.",
          "Lunch at lodge.",
          "Afternoon game drive in the Mara."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full day in the reserve with picnic lunch.",
          "Track lions, cheetah, leopard and elephant herds.",
          "Optional balloon safari at sunrise.",
          "Optional Maasai village visit."
        ],
        stay: "Masai Mara"
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi",
        bullets: [
          "Early morning game drive.",
          "Breakfast and check-out.",
          "Drive back to Nairobi, arriving late afternoon."
        ]
      }
    ]
  },
  {
    slug: "day-safari-amboseli-from-nairobi",
    title: "Day Safari — Amboseli National Park from Nairobi",
    destination: "Kenya",
    duration: "1 Day",
    durationDays: 1,
    group: "0–30",
    type: "Daily tour",
    img: tourLodge,
    highlights: "Amboseli · Elephants · Kilimanjaro views",
    price: 220,
    rating: 5,
    reviews: 18,
    overview: [
      "A long but rewarding one-day safari to Amboseli National Park from Nairobi — perfect for travellers short on time who still want a real African game-drive experience."
    ],
    included: DAY_TRIP_INCLUDED.concat(["Picnic lunch and bottled water"]),
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Amboseli → Nairobi",
        bullets: [
          "Pickup from Nairobi hotel at 05:30.",
          "Drive to Amboseli (≈4 hrs).",
          "Morning game drive.",
          "Picnic lunch at park.",
          "Afternoon game drive with Kilimanjaro backdrop.",
          "Drive back to Nairobi, arriving late evening."
        ]
      }
    ]
  },
  {
    slug: "lake-nakuru-day-tour-from-nairobi",
    title: "Lake Nakuru National Park Day Tour from Nairobi",
    destination: "Kenya",
    duration: "1 Day",
    durationDays: 1,
    group: "0–30",
    type: "Daily tour",
    img: tourSerengeti,
    highlights: "Lake Nakuru · Flamingos · Rhino sanctuary",
    price: 180,
    rating: 5,
    reviews: 22,
    overview: [
      "A relaxed day-trip from Nairobi to Lake Nakuru National Park — a UNESCO-listed birding paradise and one of the best rhino sanctuaries in Kenya."
    ],
    included: DAY_TRIP_INCLUDED.concat(["Picnic lunch and bottled water"]),
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Lake Nakuru → Nairobi",
        bullets: [
          "Pickup from Nairobi hotel at 06:30.",
          "Drive via the Great Rift Valley viewpoint.",
          "Arrive at Lake Nakuru by mid-morning.",
          "Game drive — flamingos, both black & white rhino, Rothschild's giraffe.",
          "Picnic lunch at Baboon Cliff.",
          "Afternoon game drive.",
          "Return to Nairobi by early evening."
        ]
      }
    ]
  },
  {
    slug: "lake-nakuru-private-day-trip",
    title: "Lake Nakuru Day Trip From Nairobi (Private 4x4)",
    destination: "Kenya",
    duration: "1 Day",
    durationDays: 1,
    group: "0–30",
    type: "Private tour",
    img: tourSerengeti,
    highlights: "Private 4x4 · Lake Nakuru · Birding · Rhino tracking",
    price: 250,
    rating: 5,
    reviews: 14,
    overview: [
      "The same iconic Lake Nakuru day-trip, upgraded to a private 4x4 Landcruiser with a pop-up roof — perfect for photographers, families, and groups who want the park to themselves."
    ],
    included: DAY_TRIP_INCLUDED.concat([
      "Private 4x4 Landcruiser with pop-up roof",
      "Picnic lunch and bottled water"
    ]),
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Lake Nakuru → Nairobi",
        bullets: [
          "Private pickup from your Nairobi hotel at 06:30.",
          "Scenic drive past the Rift Valley.",
          "Full game drive in Lake Nakuru NP.",
          "Picnic lunch with views.",
          "Afternoon birding & rhino tracking.",
          "Return to Nairobi in the evening."
        ]
      }
    ]
  },
  {
    slug: "zanzibar-full-day-private-tour",
    title: "Zanzibar Full Day Private Tour with Sunset Beach & Seafood BBQ",
    destination: "Zanzibar",
    duration: "1 Day",
    durationDays: 1,
    group: "0–20",
    type: "Private tour",
    img: tourZanzibar,
    highlights: "Stone Town · Spice tour · Sunset beach · Seafood BBQ",
    price: 95,
    rating: 5,
    reviews: 29,
    overview: [
      "A full-day private tour of Zanzibar's highlights — the alleys of Stone Town, a spice plantation, a north-coast beach for sunset, and a fresh seafood BBQ to finish."
    ],
    included: [
      "English-speaking guide",
      "Private air-conditioned vehicle",
      "Hotel pickup and drop-off",
      "Stone Town walking tour",
      "Spice farm entrance & tasting",
      "Seafood BBQ dinner"
    ],
    excluded: ["Drinks", "Tips", "Personal expenses"],
    itinerary: [
      {
        day: "Day 1",
        title: "Stone Town · Spices · Sunset",
        bullets: [
          "Morning hotel pickup.",
          "Guided walking tour of Stone Town — House of Wonders, Old Fort, former slave market.",
          "Drive to a working spice plantation for a tasting tour.",
          "Lunch break.",
          "Transfer to a north-coast beach (Kendwa or Nungwi).",
          "Sunset on the beach.",
          "Fresh seafood BBQ dinner.",
          "Return transfer to your hotel."
        ]
      }
    ]
  },
  {
    slug: "private-safari-nairobi-national-park",
    title: "Private Safari Tour: Nairobi National Park",
    destination: "Kenya",
    duration: "Half Day",
    durationDays: 1,
    group: "0–15",
    type: "Private tour",
    img: tourLodge,
    highlights: "Nairobi National Park · Big-city skyline backdrop · Lion & rhino",
    price: 100,
    rating: 5,
    reviews: 36,
    overview: [
      "Africa's only wildlife park inside a capital city. A few hours' game drive in Nairobi National Park rewards you with lion, rhino, buffalo and giraffe — with the city skyline as the backdrop."
    ],
    included: DAY_TRIP_INCLUDED,
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Half day",
        title: "Nairobi National Park game drive",
        bullets: [
          "Hotel pickup at 06:00 (morning) or 13:00 (afternoon).",
          "Drive to the main gate (≈30 min).",
          "3–4 hour game drive.",
          "Look for lion, rhino, buffalo, giraffe, zebra and over 400 bird species.",
          "Return to your hotel."
        ]
      }
    ]
  },
  {
    slug: "elephant-jungle-sanctuary-half-day",
    title: "Elephant Jungle Sanctuary Half-Day Visit with Meal",
    destination: "Kenya",
    duration: "Half Day",
    durationDays: 1,
    group: "0–12",
    type: "Daily tour",
    img: tourGorilla,
    highlights: "Sheldrick Elephant Orphanage · Conservation · Lunch",
    price: 120,
    rating: 5,
    reviews: 20,
    overview: [
      "A half-day, ethical wildlife experience that includes a visit to the David Sheldrick Wildlife Trust's elephant orphanage, where rescued elephant calves are rehabilitated and returned to the wild."
    ],
    included: [
      "Hotel pickup and drop-off",
      "Private vehicle",
      "English-speaking guide",
      "Sanctuary entrance fees",
      "Lunch at a local restaurant"
    ],
    excluded: ["Drinks", "Tips", "Personal expenses"],
    itinerary: [
      {
        day: "Half day",
        title: "Elephant Sanctuary & lunch",
        bullets: [
          "Pickup from your Nairobi hotel at 10:00.",
          "Drive to the Sheldrick elephant orphanage.",
          "11:00 visit — feeding & conservation talk.",
          "Lunch at a nearby restaurant.",
          "Return to your hotel by mid-afternoon."
        ]
      }
    ]
  },
  {
    slug: "nairobi-park-elephant-giraffe-combo",
    title: "Nairobi National Park, Elephant Orphanage & Giraffe Centre",
    destination: "Kenya",
    duration: "1 Day",
    durationDays: 1,
    group: "0–15",
    type: "Daily tour",
    img: tourLodge,
    highlights: "Nairobi NP · Sheldrick Orphanage · Giraffe Centre",
    price: 140,
    rating: 5,
    reviews: 33,
    overview: [
      "Three Nairobi wildlife highlights in one packed day — a morning game drive in Nairobi National Park, an elephant orphanage visit, and a hand-feeding session at the AFEW Giraffe Centre."
    ],
    included: DAY_TRIP_INCLUDED.concat(["All entrance fees (Sheldrick Trust, Giraffe Centre)"]),
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Park · Elephants · Giraffes",
        bullets: [
          "06:00 pickup from your hotel.",
          "Morning game drive in Nairobi National Park.",
          "11:00 Sheldrick Elephant Orphanage visit.",
          "Lunch at the Carnivore Restaurant or similar (own cost).",
          "Afternoon visit to the AFEW Giraffe Centre — hand-feed the Rothschild's giraffes.",
          "Return to your hotel."
        ]
      }
    ]
  },
  {
    slug: "day-tour-amboseli-from-nairobi-budget",
    title: "Day Tour to Amboseli National Park From Nairobi",
    destination: "Kenya",
    duration: "1 Day",
    durationDays: 1,
    group: "0–24",
    type: "Group tour",
    img: tourLodge,
    highlights: "Amboseli · Elephants · Group safari van",
    price: 190,
    rating: 4,
    reviews: 47,
    overview: [
      "A budget-friendly small-group day safari to Amboseli National Park from Nairobi — the same iconic park, with shared safari van transport to keep the price low."
    ],
    included: DAY_TRIP_INCLUDED.concat(["Picnic lunch and bottled water"]),
    excluded: DAY_TRIP_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Amboseli → Nairobi",
        bullets: [
          "05:30 pickup from your hotel in a shared safari van.",
          "Drive to Amboseli (≈4 hrs).",
          "Morning game drive.",
          "Picnic lunch.",
          "Afternoon game drive with Kilimanjaro views.",
          "Return to Nairobi by late evening."
        ]
      }
    ]
  },
  {
    slug: "3-day-masai-mara-governors-camp",
    title: "3 Day Masai Mara Adventure at Governor's Camp",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–7",
    type: "Private tour",
    img: tourSerengeti,
    highlights: "Governor's Camp · Riverside luxury · Big Five",
    price: 1850,
    rating: 5,
    reviews: 11,
    overview: [
      "A premium three-day Mara experience based at the legendary Governor's Camp on the banks of the Mara River — one of the most iconic safari camps in Africa."
    ],
    included: DEFAULT_INCLUDED.concat(["Two-way scheduled flight Nairobi (Wilson) ↔ Masai Mara"]),
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara (fly)",
        bullets: [
          "Morning transfer to Wilson Airport.",
          "Scheduled flight to the Mara.",
          "Camp pickup and lunch.",
          "Afternoon game drive."
        ],
        stay: "Governor's Camp"
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Full day in the reserve.",
          "Optional sunrise hot-air balloon safari with champagne breakfast.",
          "Riverside lunch.",
          "Afternoon game drive."
        ],
        stay: "Governor's Camp"
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi (fly)",
        bullets: [
          "Early morning game drive.",
          "Brunch at camp.",
          "Airstrip transfer.",
          "Flight back to Nairobi."
        ]
      }
    ]
  },
  {
    slug: "3-day-masai-mara-safari-tour",
    title: "3-Day Masai Mara Safari Tour",
    destination: "Kenya",
    duration: "3 Days",
    durationDays: 3,
    group: "0–5",
    type: "Private tour",
    img: tourSerengeti,
    highlights: "Masai Mara · Private 4x4 · Mid-range lodge",
    price: 850,
    rating: 5,
    reviews: 17,
    overview: [
      "A classic private three-day Masai Mara safari with a 4x4 Landcruiser, a dedicated guide and mid-range lodge accommodation — Kenya's most popular short safari."
    ],
    included: DEFAULT_INCLUDED,
    excluded: DEFAULT_EXCLUDED,
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi → Masai Mara",
        bullets: [
          "08:00 pickup from your Nairobi hotel.",
          "Drive via the Great Rift Valley.",
          "Lunch at lodge.",
          "Afternoon game drive."
        ],
        stay: "Masai Mara mid-range lodge"
      },
      {
        day: "Day 2",
        title: "Masai Mara full day",
        bullets: [
          "Sunrise game drive.",
          "Breakfast and rest.",
          "Optional Maasai village visit (additional cost).",
          "Afternoon game drive."
        ],
        stay: "Masai Mara mid-range lodge"
      },
      {
        day: "Day 3",
        title: "Masai Mara → Nairobi",
        bullets: [
          "Morning game drive.",
          "Breakfast and check-out.",
          "Drive back to Nairobi, arriving by late afternoon."
        ]
      }
    ]
  },
  {
    slug: "singapore-river-cruise-night-show",
    title: "Singapore River Cruise, Night Garden Rhapsody & Spectra by CYT",
    destination: "Singapore",
    duration: "Half Day",
    durationDays: 1,
    group: "0–12",
    type: "Daily tour",
    img: tourZanzibar,
    highlights: "Singapore River Cruise · Garden Rhapsody · Spectra light show",
    price: 99,
    rating: 5,
    reviews: 12,
    overview: [
      "An evening sightseeing combo in Singapore — a bumboat cruise along the Singapore River, the Garden Rhapsody light show at Gardens by the Bay, and the Spectra water show at Marina Bay Sands."
    ],
    included: [
      "River cruise ticket",
      "Local guide",
      "Garden Rhapsody admission",
      "Hotel pickup (selected hotels)"
    ],
    excluded: ["Meals and drinks", "Personal expenses", "Tips"],
    itinerary: [
      {
        day: "Evening",
        title: "Singapore by night",
        bullets: [
          "Hotel pickup at 18:00.",
          "Bumboat river cruise — Clarke Quay → Marina Bay.",
          "Walk through Gardens by the Bay.",
          "19:45 Garden Rhapsody light show at the Supertree Grove.",
          "20:00 Spectra water and laser show at Marina Bay Sands.",
          "Return transfer to your hotel."
        ]
      }
    ]
  },
  {
    slug: "johannesburg-hop-on-hop-off-soweto",
    title: "Johannesburg Hop-On Hop-Off City Tour with Soweto Option",
    destination: "South Africa",
    duration: "1 Day",
    durationDays: 1,
    group: "0–7",
    type: "Daily tour",
    img: tourLodge,
    highlights: "Joburg city loop · Apartheid Museum · Soweto add-on",
    price: 218,
    rating: 4,
    reviews: 9,
    overview: [
      "Explore Johannesburg at your own pace with a hop-on hop-off bus that loops the city's main sights, plus an optional add-on tour through Soweto — including Vilakazi Street and the Hector Pieterson Memorial."
    ],
    included: [
      "1-day hop-on hop-off bus pass",
      "Multilingual audio commentary",
      "Optional Soweto extension tour"
    ],
    excluded: ["Meals", "Attraction entrance fees", "Tips", "Hotel transfers"],
    itinerary: [
      {
        day: "Day 1",
        title: "Joburg + Soweto",
        bullets: [
          "Start at any HOHO stop.",
          "Loop the city — Constitution Hill, Gold Reef City, Apartheid Museum, Newtown.",
          "Optional afternoon Soweto add-on.",
          "Visit Mandela House, Hector Pieterson Memorial, Vilakazi Street.",
          "Return to your start point."
        ]
      }
    ]
  },
  {
    slug: "singapore-private-city-tour-with-driver",
    title: "Singapore Private Customized City Tour with Driver",
    destination: "Singapore",
    duration: "Half Day",
    durationDays: 1,
    group: "0–7",
    type: "Private tour",
    img: tourLodge,
    highlights: "Private driver · Custom itinerary · Hotel pickup",
    price: 200,
    rating: 5,
    reviews: 6,
    overview: [
      "A fully customisable private sightseeing day in Singapore with your own English-speaking driver and air-conditioned vehicle — see exactly what you want, at your own pace."
    ],
    included: [
      "Private English-speaking driver",
      "Air-conditioned vehicle",
      "Bottled water",
      "Hotel pickup and drop-off"
    ],
    excluded: ["Attraction tickets", "Meals", "Tips"],
    itinerary: [
      {
        day: "Half day",
        title: "Your Singapore, your way",
        bullets: [
          "Pickup from your hotel at the time you choose.",
          "Suggested route: Marina Bay → Gardens by the Bay → Chinatown → Little India → Orchard Road → Sentosa.",
          "Stop wherever you like for photos, food or shopping.",
          "Drop-off at your hotel."
        ]
      }
    ]
  }
];
function getTour(slug) {
  return TOURS.find((t) => t.slug === slug);
}
const nakuru = "/assets/blt%207-WdhWAvVU.jpg";
const tourBunyonyi = "/assets/blt%2016-xHzuWNnj.jpg";
const olpejeta = "/assets/Rhino-COVX0WZ3.JPG";
const tourBeach = "/assets/beach-C4gZxbSt.png";
const nairobi = "/assets/blt%2015-BITmh3hS.jpg";
const travel = "/assets/view-DnTakQPH.JPG";
const guide = "/assets/game%20drive-BV7ZRgKC.JPG";
const wildlife = "/assets/blt%208-y0jXTFIl.jpg";
const comparison = "/assets/blt%203-X4ATaEBS.jpg";
const maasaiMara = "/assets/wilderbeast-DG4hBM9s.png";
const tourKenya = "/assets/kenya-CvUWmSUw.png";
const BLOG_POSTS = [
  {
    slug: "lake-naivasha-safari-guide",
    title: "Lake Naivasha Safari Guide: Hippos, Boat Safaris & Crescent Island",
    excerpt: "Lake Naivasha delivers Kenya's most serene safari experience — hippos at close range, walking safaris on Crescent Island and Rift Valley sunsets.",
    category: "Destination Guides",
    date: "March 14, 2026",
    author: "Bluelilac Team",
    img: nakuru,
    content: [
      "Lake Naivasha sits high in Kenya's Great Rift Valley and is one of the most relaxed stops on any classic Kenyan safari. Unlike the open plains of the Mara, Naivasha rewards travellers with water-based wildlife — pods of hippos, fish eagles diving for tilapia, and endless flocks of pelicans drifting across the lake.",
      "A boat safari is the headline experience. Most guests head out in the late afternoon when the light softens and hippos surface to feed. Expect to glide within metres of them, with your guide narrating their behaviour and pointing out kingfishers, cormorants, and herons along the shoreline.",
      "Crescent Island, a private game sanctuary on the lake, is one of the only places in Kenya where you can walk freely among giraffes, zebras, wildebeest, and waterbuck — there are no predators. It's a magical add-on for families and photographers.",
      "Most travellers stay one or two nights, often combined with Hell's Gate National Park for cycling or as a stopover between Nairobi and the Maasai Mara. Sunsets over the Rift Valley escarpment are unforgettable."
    ]
  },
  {
    slug: "tsavo-national-park-guide",
    title: "Tsavo National Park Guide: Kenya's Wild, Red-Elephant Wilderness",
    excerpt: "Tsavo is Kenya's largest protected wilderness — home to the famous red elephants, Mzima Springs, and a raw, uncrowded safari feel.",
    category: "Destination Guides",
    date: "March 7, 2026",
    author: "Bluelilac Team",
    img: tourBunyonyi,
    content: [
      "Tsavo National Park is split into Tsavo East and Tsavo West and together they form Kenya's largest protected wilderness — over 22,000 square kilometres of bush, lava flows, and palm-fringed rivers.",
      "The park's signature sight is its red elephants — coloured by the iron-rich dust they bathe in. Tsavo East offers open savannah perfect for spotting big herds, while Tsavo West is more rugged with volcanic landscapes, the crystal-clear Mzima Springs, and the Shetani lava flows.",
      "Game viewing is exceptional but less crowded than the Mara. You'll often have sightings entirely to yourself — a rare gift on a Kenyan safari today.",
      "Tsavo pairs beautifully with a beach extension to Diani or Mombasa, and is best visited during the dry months of June through October or January–February."
    ]
  },
  {
    slug: "ol-pejeta-conservancy-guide",
    title: "Ol Pejeta Conservancy Guide: Rhinos, Chimps & the World's Last Two Northern White Rhinos",
    excerpt: "Ol Pejeta is home to the world's rarest animals — the last two northern white rhinos on Earth — plus chimps, rhinos and the Big Five.",
    category: "Conservation",
    date: "February 28, 2026",
    author: "James K.",
    img: olpejeta,
    content: [
      "Ol Pejeta Conservancy is one of the most important conservation stories on the planet. Set on the Laikipia plateau in the shadow of Mount Kenya, it protects the last two northern white rhinos on Earth — Najin and Fatu — under 24-hour armed guard.",
      "Beyond the rhinos, Ol Pejeta has the highest density of wildlife in Kenya, the only chimpanzee sanctuary in the country (Sweetwaters), and excellent Big Five viewing.",
      "Activities go beyond the standard game drive — lion tracking with researchers, behind-the-scenes rhino visits, and night drives to spot aardvarks and bushbabies.",
      "Two to three nights at Ol Pejeta works beautifully on a northern Kenya itinerary, often combined with Samburu and the Maasai Mara."
    ]
  },
  {
    slug: "samburu-national-reserve-guide",
    title: "Samburu National Reserve: A Deep-Dive into Kenya's Northern Wildlife",
    excerpt: "Samburu is northern Kenya's greatest secret — home to the Special Five and a wilder, drier landscape than the southern parks.",
    category: "Destination Guides",
    date: "February 19, 2026",
    author: "Amina O.",
    img: tourSerengeti,
    content: [
      "Samburu National Reserve lies in Kenya's hot, arid north — a landscape of doum palms, the muddy Ewaso Ng'iro river, and rugged hills. The wildlife here is unlike anywhere else in Kenya.",
      "Samburu is famous for the 'Special Five' — Grevy's zebra, reticulated giraffe, Beisa oryx, gerenuk, and Somali ostrich — species you won't find further south. Leopards, lions, and elephants are common along the river.",
      "It's also a cultural highlight. The Samburu people, cousins of the Maasai, live alongside the reserve and many lodges arrange respectful village visits.",
      "Pair Samburu with Ol Pejeta and the Mara for the most complete Kenyan safari you can build."
    ]
  },
  {
    slug: "diani-beach-kenya-guide",
    title: "Diani Beach Kenya Guide: Africa's Most Beautiful Beach for Safari Travellers",
    excerpt: "Diani Beach is Africa's finest safari-beach combination — 17 km of white sand, warm Indian Ocean water, and easy access from Nairobi.",
    category: "Beach & Coast",
    date: "February 10, 2026",
    author: "Bluelilac Team",
    img: tourBeach,
    content: [
      "Diani Beach stretches for 17 kilometres along Kenya's south coast — talcum-white sand, palm trees, and water in every shade of turquoise. It's been voted Africa's leading beach destination multiple times.",
      "For safari travellers, Diani is the perfect way to end a trip. After a week tracking wildlife in the Mara or Tsavo, a few nights here means snorkelling the reef, kite-surfing, sunset dhow cruises, and excellent seafood.",
      "Direct flights from the Mara, Nairobi, and Tsavo land at Ukunda Airstrip, just minutes from the beach hotels.",
      "Best visited between October and March when the ocean is calm and the diving conditions are excellent."
    ]
  },
  {
    slug: "nairobi-city-guide-for-safari-travellers",
    title: "Nairobi City Guide for Safari Travellers: Elephants, Giraffes & Great Restaurants",
    excerpt: "Nairobi is far more than a transit stop — it's a city with elephants, giraffes, world-class food and a creative cultural scene.",
    category: "Destination Guides",
    date: "January 28, 2026",
    author: "Bluelilac Team",
    img: nairobi,
    content: [
      "Nairobi is one of the only capital cities in the world with a national park inside it. Nairobi National Park sits a 20-minute drive from the city centre and offers genuine Big Five game viewing against a skyline backdrop.",
      "Beyond the park, the David Sheldrick Wildlife Trust lets you meet orphaned elephants during the daily public feeding hour, while the Giraffe Centre in Karen lets you hand-feed endangered Rothschild's giraffes.",
      "The food scene rivals any African capital — try Talisman in Karen, Cultiva, or Mama Oliech for Kenyan classics like ugali and fried tilapia.",
      "We recommend at least one full day in Nairobi at the start or end of any safari — it sets the tone for the journey."
    ]
  },
  {
    slug: "solo-safari-kenya-guide",
    title: "Solo Safari Kenya: The Complete Guide to Travelling Alone in the Bush",
    excerpt: "A solo Kenya safari gives you a private guide, flexible itinerary and the freedom to make the trip entirely your own.",
    category: "Safari Planning",
    date: "January 19, 2026",
    author: "Amina O.",
    img: travel,
    content: [
      "A solo safari in Kenya is one of the most rewarding ways to travel. With a private guide and vehicle, you set the pace — early starts, long lunches, or as many leopard stake-outs as you want.",
      "Safety on a guided safari is excellent. You're never alone in the bush, and the lodges and camps we use are designed with single travellers in mind.",
      "Costs are higher per person than for groups, but a small-group scheduled departure is a great alternative — you meet like-minded travellers and share the vehicle.",
      "Solo travellers often tell us the safari is one of the most transformative trips of their lives. Sunrise on the Mara plains hits differently when you're sharing it only with the silence."
    ]
  },
  {
    slug: "kenya-safari-budget-guide",
    title: "Kenya Safari Budget Guide: How Much Does a Kenya Safari Cost?",
    excerpt: "Kenya safari costs range from $250 to $1,500+ per person per night. Here's how to plan a trip that fits your budget without compromising the experience.",
    category: "Safari Planning",
    date: "January 6, 2026",
    author: "Bluelilac Team",
    img: guide,
    content: [
      "A Kenya safari can cost anywhere from $250 per person per night for a mid-range mobile camping trip to over $1,500 for an ultra-luxury private conservancy stay. Most travellers land between $400 and $700 per night for a high-quality mid-range to upper-mid-range experience.",
      "The biggest cost drivers are the parks you visit, the type of accommodation, and whether you fly between destinations or drive. Park fees alone are $100–$200 per person per day in the Mara and conservancies.",
      "Budget tips: travel during the green season (April–May, November), share a 4x4 with a small group, and stick to one or two parks rather than racing across the country.",
      "Splurge tips: a sunrise hot-air balloon over the Mara, a private conservancy with walking safaris, or a single luxury lodge night to end the trip."
    ]
  },
  {
    slug: "kenya-wildlife-conservation-guide",
    title: "Kenya Wildlife Conservation: The Stories Behind the Safaris",
    excerpt: "Kenya's wildlife didn't survive by accident — it survived because of extraordinary conservation work led by communities, rangers, and conservancies.",
    category: "Conservation",
    date: "December 18, 2025",
    author: "James K.",
    img: wildlife,
    content: [
      "Every safari traveller arriving in Kenya is, knowingly or not, supporting one of the most ambitious conservation experiments on Earth. Community conservancies — land owned and managed by local Maasai, Samburu, and Laikipia communities — now protect more wildlife area than the national parks themselves.",
      "Organisations like the Northern Rangelands Trust, Ol Pejeta Conservancy, and the Mara Conservancies have shown that protecting wildlife only works when local people benefit directly.",
      "When you stay at a conservancy lodge, a share of your nightly fee goes straight to the community — funding schools, clinics, and ranger salaries.",
      "We deliberately weight our itineraries toward conservancies. The wildlife is just as good (often better, with night drives and walking safaris allowed), and your trip supports the people who keep this wilderness alive."
    ]
  },
  {
    slug: "kenya-vs-tanzania-safari",
    title: "Kenya vs Tanzania Safari: Which Country Should You Choose?",
    excerpt: "Kenya vs Tanzania — an honest comparison of East Africa's two greatest safari countries, from the Mara to the Serengeti.",
    category: "Safari Planning",
    date: "December 5, 2025",
    author: "Bluelilac Team",
    img: comparison,
    content: [
      "Both Kenya and Tanzania protect parts of the same Mara-Serengeti ecosystem and both deliver world-class safaris. The right choice depends on the experience you're after.",
      "Choose Kenya if: you want easier logistics, lower costs, more variety in a short trip (Mara, Amboseli, Samburu, the coast), and conservancy-style safaris with walking and night drives.",
      "Choose Tanzania if: you want sheer scale (the Serengeti is six times the size of the Mara), the Ngorongoro Crater, Kilimanjaro, or to combine safari with Zanzibar.",
      "Our most popular itineraries combine both — a cross-border safari that takes in Amboseli, Arusha, Tarangire, the Serengeti, and Ngorongoro. You get the best of East Africa in one trip."
    ]
  },
  {
    slug: "masai-mara-great-migration-guide",
    title: "Masai Mara Great Migration: When, Where & How to Witness It",
    excerpt: "The Great Migration is the greatest wildlife spectacle on Earth. Here's exactly when to go, where to stay, and how to see a river crossing.",
    category: "Safari Planning",
    date: "November 22, 2025",
    author: "Bluelilac Team",
    img: maasaiMara,
    content: [
      "The Great Migration is a year-round movement of over 1.5 million wildebeest, 300,000 zebras, and hundreds of thousands of gazelles between Tanzania's Serengeti and Kenya's Masai Mara — chasing the rain and the fresh grass.",
      "In the Masai Mara, the peak window is July through October. The herds cross the Mara River in dramatic, crocodile-filled spectacles — typically between mid-July and early September, though exact timing shifts every year with the rains.",
      "For the best chance of a river crossing, stay 3–4 nights inside the reserve or in a conservancy bordering the river (Mara North, Olare Motorogi). Conservancy stays mean fewer vehicles at sightings and the option to do walking and night safaris.",
      "Book 9–12 months in advance for July–September — the top camps sell out a year ahead. We can secure lodges, light-aircraft flights from Nairobi and an experienced migration guide as part of any tailor-made itinerary."
    ]
  },
  {
    slug: "what-to-pack-for-a-kenya-safari",
    title: "What to Pack for a Kenya Safari: The Complete Checklist",
    excerpt: "Forget the safari-suit cliché. Here's the practical, tested packing list our guests actually use on Kenya safaris — clothes, gear, and the small things people forget.",
    category: "Safari Planning",
    date: "November 8, 2025",
    author: "Amina O.",
    img: tourKenya,
    content: [
      "Safari packing is all about layers, neutral colours and travelling light — most light-aircraft transfers limit you to 15 kg in a soft duffel bag.",
      "Clothing: 3–4 lightweight long-sleeve shirts (khaki, olive, beige — avoid bright white, dark blue and black), 2 pairs of zip-off trousers, a fleece for dawn drives, a wind/waterproof shell, a wide-brim hat, and comfortable closed-toe shoes. Most camps offer same-day laundry.",
      "Gear that matters: binoculars (8x42 is ideal), a camera with a 200–400mm zoom, a power bank, sunglasses, high-SPF sunscreen and strong insect repellent (DEET or picaridin).",
      "Don't forget: a refillable water bottle (most camps now ban single-use plastic), a small head torch, prescription medication in original packaging, and crisp US dollars for tips. Visas for Kenya are e-Visa only — apply at least a week before travel."
    ]
  }
];
function getBlogPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
const BASE_URL = "";
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/destinations", changefreq: "weekly", priority: "0.9" },
          { path: "/tours", changefreq: "weekly", priority: "0.9" },
          { path: "/explore-our-tours", changefreq: "weekly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.8" }
        ];
        const tourEntries = TOURS.map((t) => ({
          path: `/tours/${t.slug}`,
          changefreq: "monthly",
          priority: "0.8"
        }));
        const blogEntries = BLOG_POSTS.map((p) => ({
          path: `/blog/${p.slug}`,
          changefreq: "monthly",
          priority: "0.7"
        }));
        const entries = [...staticEntries, ...tourEntries, ...blogEntries];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        ).join("\n");
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$8 = () => import("./explore-our-tours-D1llD3v4.mjs");
const Route$8 = createFileRoute("/explore-our-tours")({
  head: () => ({
    meta: [{
      title: "Explore Our Tours — Bluelilac Tours"
    }, {
      name: "description",
      content: "Discover handcrafted East African safari experiences — from the Great Migration to gorilla trekking and Zanzibar beach escapes."
    }, {
      property: "og:title",
      content: "Explore Our Tours — Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Discover handcrafted East African safari experiences."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const tourUganda = "/assets/blt%202-BZbOsIQL.jpg";
const $$splitComponentImporter$7 = () => import("./destinations-Dto7_yGb.mjs");
const Route$7 = createFileRoute("/destinations")({
  head: () => ({
    meta: [{
      title: "Destinations — Bluelilac Tours"
    }, {
      name: "description",
      content: "Explore East Africa's most iconic destinations — Kenya, Tanzania, Uganda, Rwanda and Zanzibar. From the Maasai Mara to gorillas in Bwindi."
    }, {
      property: "og:title",
      content: "Destinations — Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Kenya, Tanzania, Uganda, Rwanda & Zanzibar — curated by Bluelilac."
    }, {
      property: "og:image",
      content: tourUganda
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
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
["All", ...COUNTRIES.map((c) => c.name)];
const heroSafari = "/assets/IMG_8283-pucEZ3cV.JPG";
const $$splitComponentImporter$6 = () => import("./contact-GPk66U_4.mjs");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Bluelilac Tours & Travel"
    }, {
      name: "description",
      content: "Get in touch with Bluelilac Tours. Plan your East African safari, ask questions, or request a tailor-made itinerary. We're here 24/7."
    }, {
      property: "og:title",
      content: "Contact Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Plan your East African safari with our team. Contact us for tailor-made itineraries and expert advice."
    }, {
      property: "og:image",
      content: heroSafari
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./blog-PAKPynYq.mjs");
const Route$5 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Travel Blog & Safari Tips — Bluelilac Tours"
    }, {
      name: "description",
      content: "Read our latest safari guides, destination deep-dives and travel tips for Kenya, Tanzania, Uganda and Rwanda."
    }, {
      property: "og:title",
      content: "Travel Blog — Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Safari guides, destination deep-dives and travel tips from East Africa's specialists."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./about-Pg7dcgUk.mjs");
const Route$4 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Bluelilac Tours & Travel"
    }, {
      name: "description",
      content: "Bluelilac Tours is a premier East African safari specialist crafting unforgettable wildlife and luxury travel experiences across Kenya, Tanzania, Uganda and Rwanda."
    }, {
      property: "og:title",
      content: "About Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Meet the East African safari specialists behind Bluelilac — handcrafted journeys, expert guides, and responsible travel."
    }, {
      property: "og:image",
      content: heroSafari
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-B5Ffr0YB.mjs");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Bluelilac Tours — East Africa Safari Specialists"
    }, {
      name: "description",
      content: "Premier safaris across Kenya, Tanzania, Uganda & Rwanda. Witness the Great Migration, track the Big Five, sleep under African skies."
    }, {
      property: "og:title",
      content: "Bluelilac Tours — East Africa Safari Specialists"
    }, {
      property: "og:description",
      content: "Premier safaris across Kenya, Tanzania, Uganda & Rwanda."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./tours.index-8FH-cNA6.mjs");
const Route$2 = createFileRoute("/tours/")({
  head: () => ({
    meta: [{
      title: "Tours & Safaris — Bluelilac Tours"
    }, {
      name: "description",
      content: "Browse 27+ curated East African safaris across Kenya, Tanzania, Uganda, Rwanda and beyond. Bush, beach, gorillas and the Great Migration."
    }, {
      property: "og:title",
      content: "Tours & Safaris — Bluelilac Tours"
    }, {
      property: "og:description",
      content: "Browse curated East African safaris — Kenya, Tanzania, Uganda, Rwanda & beyond."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./tours._slug-CCBujcSF.mjs");
const $$splitErrorComponentImporter$1 = () => import("./tours._slug-Dgz_li1u.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./tours._slug-CId6pfzH.mjs");
const Route$1 = createFileRoute("/tours/$slug")({
  loader: ({
    params
  }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return {
      tour
    };
  },
  head: ({
    params,
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.tour.title} — Bluelilac Tours`
    }, {
      name: "description",
      content: loaderData.tour.overview[0]
    }, {
      property: "og:title",
      content: loaderData.tour.title
    }, {
      property: "og:description",
      content: loaderData.tour.overview[0]
    }, {
      property: "og:image",
      content: loaderData.tour.img
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `/tours/${params.slug}`
    }, {
      name: "twitter:image",
      content: loaderData.tour.img
    }] : [],
    links: [{
      rel: "canonical",
      href: `/tours/${params.slug}`
    }],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: loaderData.tour.title,
        description: loaderData.tour.overview[0],
        image: loaderData.tour.img,
        touristType: "Safari travelers",
        provider: {
          "@type": "TravelAgency",
          name: "Bluelilac Tours"
        }
      })
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./blog._slug-CQ7R98zI.mjs");
const $$splitErrorComponentImporter = () => import("./blog._slug-Dgz_li1u.mjs");
const $$splitNotFoundComponentImporter = () => import("./blog._slug-RX-HTViU.mjs");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return {
      post
    };
  },
  head: ({
    params,
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: `${loaderData.post.title} — Bluelilac Tours`
    }, {
      name: "description",
      content: loaderData.post.excerpt
    }, {
      property: "og:title",
      content: loaderData.post.title
    }, {
      property: "og:description",
      content: loaderData.post.excerpt
    }, {
      property: "og:image",
      content: loaderData.post.img
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `/blog/${params.slug}`
    }, {
      name: "twitter:image",
      content: loaderData.post.img
    }] : [],
    links: [{
      rel: "canonical",
      href: `/blog/${params.slug}`
    }],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: loaderData.post.title,
        description: loaderData.post.excerpt,
        image: loaderData.post.img,
        datePublished: loaderData.post.date,
        author: {
          "@type": "Person",
          name: loaderData.post.author
        },
        publisher: {
          "@type": "Organization",
          name: "Bluelilac Tours"
        }
      })
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const ExploreOurToursRoute = Route$8.update({
  id: "/explore-our-tours",
  path: "/explore-our-tours",
  getParentRoute: () => Route$a
});
const DestinationsRoute = Route$7.update({
  id: "/destinations",
  path: "/destinations",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const BlogRoute = Route$5.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$4.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ToursIndexRoute = Route$2.update({
  id: "/tours/",
  path: "/tours/",
  getParentRoute: () => Route$a
});
const ToursSlugRoute = Route$1.update({
  id: "/tours/$slug",
  path: "/tours/$slug",
  getParentRoute: () => Route$a
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  ContactRoute,
  DestinationsRoute,
  ExploreOurToursRoute,
  SitemapDotxmlRoute,
  ToursSlugRoute,
  ToursIndexRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BLOG_POSTS as B,
  Route$1 as R,
  TOURS as T,
  tourGorilla as a,
  tourLodge as b,
  tourZanzibar as c,
  tourBunyonyi as d,
  tourBeach as e,
  nairobi as f,
  tourUganda as g,
  heroSafari as h,
  tourKenya as i,
  Route as j,
  maasaiMara as m,
  nakuru as n,
  olpejeta as o,
  router as r,
  tourSerengeti as t
};
