import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Menu, Search, Compass, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroSafari from "@/assets/hero-safari.jpg";
import tourSerengeti from "@/assets/tour-serengeti.jpg";
import tourGorilla from "@/assets/tour-gorilla.jpg";
import tourLodge from "@/assets/tour-lodge.jpg";
import tourZanzibar from "@/assets/tour-zanzibar.jpg";
import ctaBalloon from "@/assets/cta-balloon.jpg";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Explore East Africa's most iconic destinations — Kenya, Tanzania, Uganda, Rwanda and Zanzibar. From the Maasai Mara to gorillas in Bwindi.",
      },
      { property: "og:title", content: "Destinations — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Kenya, Tanzania, Uganda, Rwanda & Zanzibar — curated by Bluelilac.",
      },
      { property: "og:image", content: heroSafari },
    ],
  }),
  component: DestinationsPage,
});

type Destination = {
  name: string;
  country: Country;
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  img: string;
  featured?: boolean;
};

type Country = "Kenya" | "Tanzania" | "Uganda" | "Rwanda" | "Zanzibar";

const COUNTRIES: { name: Country; blurb: string }[] = [
  {
    name: "Kenya",
    blurb: "Birthplace of the safari — the Mara, the Rift Valley and ancient coastlines.",
  },
  {
    name: "Tanzania",
    blurb: "Endless Serengeti plains, Ngorongoro's crater and Kilimanjaro's snows.",
  },
  { name: "Uganda", blurb: "Mountain gorillas, chimpanzees and the source of the Nile." },
  { name: "Rwanda", blurb: "Land of a thousand hills and golden monkeys in volcanic forests." },
  { name: "Zanzibar", blurb: "Spice-scented Stone Town and turquoise Indian Ocean shores." },
];

const DESTINATIONS: Destination[] = [
  // Kenya
  {
    name: "Maasai Mara",
    country: "Kenya",
    tagline: "The Great Migration's stage",
    description:
      "Kenya's flagship reserve and the northern theatre of the Great Migration. Open savannah, huge predator densities and unrivalled big-cat sightings.",
    highlights: [
      "Great Migration (Jul–Oct)",
      "Big Five",
      "Hot-air balloon safaris",
      "Maasai cultural visits",
    ],
    bestTime: "Jul – Oct",
    img: tourSerengeti,
    featured: true,
  },
  {
    name: "Amboseli National Park",
    country: "Kenya",
    tagline: "Elephants beneath Kilimanjaro",
    description:
      "Iconic views of Mt. Kilimanjaro framing some of Africa's largest elephant herds, set across swamps and dusty plains.",
    highlights: ["Tusker elephants", "Kilimanjaro backdrop", "Birdlife in the swamps"],
    bestTime: "Jun – Oct, Jan – Feb",
    img: tourLodge,
  },
  {
    name: "Lake Nakuru National Park",
    country: "Kenya",
    tagline: "Flamingo-rimmed Rift Valley jewel",
    description:
      "A compact Rift Valley park famed for flamingos, white and black rhino, Rothschild's giraffe and leopard along yellow-fever forests.",
    highlights: ["Black & white rhino", "Pelicans & flamingos", "Baboon Cliff viewpoint"],
    bestTime: "Year-round",
    img: tourSerengeti,
  },
  {
    name: "Lake Naivasha",
    country: "Kenya",
    tagline: "Freshwater haven on the Rift",
    description:
      "A serene freshwater lake of hippos, fish eagles and acacia woodlands — perfect for boat rides and walking safaris at Crescent Island.",
    highlights: ["Boat safaris", "Hells Gate cycling", "Crescent Island walks"],
    bestTime: "Year-round",
    img: tourLodge,
  },
  {
    name: "Samburu National Reserve",
    country: "Kenya",
    tagline: "Wild north of the equator",
    description:
      "Rugged semi-arid landscapes home to the 'Samburu Special Five' — reticulated giraffe, Grevy's zebra, Somali ostrich, gerenuk and beisa oryx.",
    highlights: ["Samburu Special Five", "Ewaso Nyiro river", "Samburu culture"],
    bestTime: "Jun – Oct",
    img: tourSerengeti,
  },
  {
    name: "Ol Pejeta Conservancy",
    country: "Kenya",
    tagline: "Home of the last northern white rhinos",
    description:
      "East Africa's largest black rhino sanctuary and home of the world's last two northern white rhinos. Big Five plus a chimpanzee sanctuary.",
    highlights: ["Last northern white rhinos", "Chimp sanctuary", "Night game drives"],
    bestTime: "Year-round",
    img: tourLodge,
  },
  {
    name: "Tsavo East & West",
    country: "Kenya",
    tagline: "Red elephants & vast wilderness",
    description:
      "Kenya's largest protected wilderness — Tsavo's red-dust elephants, Mzima Springs and the Yatta Plateau across two vast parks.",
    highlights: ["Red elephants", "Mzima Springs", "Lugard's Falls"],
    bestTime: "Jun – Oct, Jan – Feb",
    img: tourSerengeti,
  },
  {
    name: "Diani Beach",
    country: "Kenya",
    tagline: "Powder-white sands on the Indian Ocean",
    description:
      "Kenya's most beautiful stretch of coast — coral reefs, kite-surf swells and colobus monkeys in the coastal forest.",
    highlights: ["Snorkel & dive", "Kitesurfing", "Colobus monkey trails"],
    bestTime: "Dec – Mar, Jul – Oct",
    img: tourZanzibar,
  },
  {
    name: "Nairobi",
    country: "Kenya",
    tagline: "The only city with a national park",
    description:
      "Your gateway to Kenya — Nairobi National Park, the Giraffe Centre, Sheldrick Elephant Orphanage and a buzzing food scene.",
    highlights: [
      "Nairobi National Park",
      "Sheldrick elephants",
      "Giraffe Centre",
      "Karen Blixen Museum",
    ],
    bestTime: "Year-round",
    img: tourLodge,
  },

  // Tanzania
  {
    name: "Serengeti National Park",
    country: "Tanzania",
    tagline: "Endless plains of the Migration",
    description:
      "1.5 million wildebeest, vast plains, kopjes full of lions and the heart of the Great Migration year-round across the southern and western corridors.",
    highlights: [
      "Great Migration",
      "Calving season (Jan–Feb)",
      "Predator action",
      "Hot-air balloon",
    ],
    bestTime: "Year-round (Migration varies)",
    img: tourSerengeti,
    featured: true,
  },
  {
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline: "Africa's Garden of Eden",
    description:
      "A collapsed volcanic caldera teeming with 25,000+ large animals — the most reliable Big Five sighting on the continent.",
    highlights: ["Big Five in one day", "Black rhino", "Maasai homesteads"],
    bestTime: "Year-round",
    img: tourLodge,
  },
  {
    name: "Tarangire National Park",
    country: "Tanzania",
    tagline: "Land of giants and baobabs",
    description:
      "Massive elephant herds, ancient baobab trees and the Tarangire River — a dry-season magnet for wildlife.",
    highlights: ["Huge elephant herds", "Baobab forests", "Tree-climbing pythons"],
    bestTime: "Jun – Oct",
    img: tourSerengeti,
  },
  {
    name: "Lake Manyara",
    country: "Tanzania",
    tagline: "Tree-climbing lions & soda lake",
    description:
      "Groundwater forest, flamingo-pink shores and famously tree-climbing lions tucked beneath the Rift escarpment.",
    highlights: ["Tree-climbing lions", "Flamingos", "Forest walks"],
    bestTime: "Jul – Oct",
    img: tourLodge,
  },
  {
    name: "Arusha",
    country: "Tanzania",
    tagline: "Gateway to the northern circuit",
    description:
      "Tanzania's safari capital nestled below Mt. Meru — your start and finish point for the northern parks.",
    highlights: ["Mt. Meru views", "Coffee tours", "Cultural villages"],
    bestTime: "Year-round",
    img: tourSerengeti,
  },

  // Uganda
  {
    name: "Bwindi Impenetrable Forest",
    country: "Uganda",
    tagline: "Mountain gorillas in the mist",
    description:
      "Half the world's mountain gorillas live in Bwindi's ancient rainforest. Permits required — we handle every detail.",
    highlights: [
      "Mountain gorilla trekking",
      "Batwa cultural experience",
      "100+ butterfly species",
    ],
    bestTime: "Jun – Aug, Dec – Feb",
    img: tourGorilla,
    featured: true,
  },
  {
    name: "Queen Elizabeth NP",
    country: "Uganda",
    tagline: "Tree-climbing lions of Ishasha",
    description:
      "Savannah, crater lakes and the Kazinga Channel — plus the famous tree-climbing lions of the Ishasha sector.",
    highlights: ["Kazinga boat cruise", "Tree-climbing lions", "Chimpanzee tracking"],
    bestTime: "Jan – Feb, Jun – Sep",
    img: tourLodge,
  },
  {
    name: "Lake Bunyonyi",
    country: "Uganda",
    tagline: "Africa's most beautiful lake",
    description:
      "29 emerald islands on a deep crater lake — the perfect unwind after gorilla trekking.",
    highlights: ["Island canoeing", "Birding", "Terraced hill views"],
    bestTime: "Year-round",
    img: tourZanzibar,
  },

  // Rwanda
  {
    name: "Volcanoes National Park",
    country: "Rwanda",
    tagline: "Gorillas, golden monkeys, volcanoes",
    description:
      "Trek mountain gorillas through the Virunga volcanoes — Rwanda's flagship experience, made famous by Dian Fossey.",
    highlights: ["Gorilla trekking", "Golden monkeys", "Dian Fossey hike"],
    bestTime: "Jun – Sep, Dec – Feb",
    img: tourGorilla,
  },
  {
    name: "Kigali",
    country: "Rwanda",
    tagline: "Clean, calm capital of a thousand hills",
    description:
      "One of Africa's cleanest and safest cities — moving genocide memorial, vibrant arts and excellent coffee.",
    highlights: ["Kigali Genocide Memorial", "Café culture", "Inema Arts Center"],
    bestTime: "Year-round",
    img: tourLodge,
  },

  // Zanzibar
  {
    name: "Stone Town",
    country: "Zanzibar",
    tagline: "Spice islands' UNESCO heart",
    description:
      "A labyrinth of Swahili-Arab heritage — carved doors, spice markets and the freshly grilled seafood of Forodhani Gardens.",
    highlights: ["UNESCO old town", "Spice tour", "Prison Island turtles"],
    bestTime: "Jun – Oct, Dec – Feb",
    img: tourZanzibar,
  },
  {
    name: "Nungwi & Kendwa",
    country: "Zanzibar",
    tagline: "Powder beaches & turquoise water",
    description:
      "The island's most picture-perfect beaches — long white sands, sunset dhows and excellent diving on the northern reefs.",
    highlights: ["Dhow sunset sails", "Snorkel & dive", "Mnemba Atoll"],
    bestTime: "Jun – Oct, Dec – Mar",
    img: tourZanzibar,
    featured: true,
  },
];

const COUNTRY_FILTERS = ["All", ...COUNTRIES.map((c) => c.name)] as const;
type Filter = (typeof COUNTRY_FILTERS)[number];

function DestinationsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesFilter = filter === "All" || d.country === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const featured = DESTINATIONS.filter((d) => d.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero query={query} setQuery={setQuery} />

      {/* Country overview */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">Where we go</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Five countries. One continent of wonder.
              </h2>
              <p className="mt-6 text-black">
                From the wildebeest-thundered plains of the Serengeti to the misty gorilla forests
                of Bwindi, we craft journeys across East Africa's most extraordinary places — and
                the Indian Ocean and Arabian add-ons that pair beautifully with them.
              </p>
            </div>
            <a
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Browse tours <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COUNTRIES.map((c) => (
              <button
                key={c.name}
                onClick={() => setFilter(c.name)}
                className="group rounded-3xl border border-border bg-card p-8 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Compass className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                </div>
                <p className="mt-4 text-sm text-black">{c.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                  Explore {c.name} <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Bluelilac favourites
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Iconic experiences</h2>
            </div>
            <Sparkles className="hidden h-8 w-8 text-primary md:block" />
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured.map((d) => (
              <article
                key={d.name}
                className="group relative overflow-hidden rounded-3xl bg-card shadow-sm"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur-md">
                    <MapPin className="h-3 w-3" /> {d.country}
                  </span>
                  <h3 className="mt-4 font-display text-3xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-white/85">{d.tagline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All destinations */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Every place we love
              </p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                {list.length} {list.length === 1 ? "destination" : "destinations"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {COUNTRY_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    filter === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <article
                key={d.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <MapPin className="h-3 w-3" /> {d.country}
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{d.name}</h3>
                  <p className="mt-1 text-sm italic text-black/70">{d.tagline}</p>
                  <p className="mt-4 text-sm text-black">{d.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="text-muted-foreground">
                      Best time: <span className="font-medium text-foreground">{d.bestTime}</span>
                    </span>
                    <a
                      href="/tours"
                      className="inline-flex items-center gap-1 font-medium text-primary hover:opacity-80"
                    >
                      Tours <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-16 text-center text-black">
              No destinations match your search. Try a different filter.
            </p>
          )}
        </div>
      </section>

      <CtaPlan />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="font-display text-2xl font-semibold text-white md:text-3xl">
          Bluelilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Explore", href: "/destinations" },
            { label: "Trips", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Explore Our Tours", href: "/tours" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.label === "Explore"
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
    <section className="relative flex h-[72vh] min-h-[540px] w-full items-center overflow-hidden">
      <img src={heroSafari} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
          Kenya · Tanzania · Uganda · Rwanda · Zanzibar
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
          Destinations
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          The wild places, ancient towns and ocean shores that shape an East African journey.
        </p>
        <div className="mt-10 flex max-w-2xl items-center gap-2 rounded-full bg-white/95 p-2 shadow-2xl backdrop-blur-md">
          <div className="flex flex-1 items-center gap-2 pl-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a country, park, beach or city…"
              className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            type="button"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
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
    <section className="relative overflow-hidden bg-foreground py-20 md:py-28 text-background">
      <img
        src={ctaBalloon}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-white">Not sure where to start?</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">
          We'll build the journey around you.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/75">
          Tell us your dates, interests and budget — we'll suggest the perfect mix of countries and
          experiences.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@bluelilactours.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#D0E0FF] px-6 py-3 text-sm font-medium text-foreground transition hover:bg-[#0C5DFF] hover:text-white"
          >
            <Mail className="h-4 w-4" /> info@bluelilactours.com
          </a>
          <a
            href="tel:+254715405641"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3 text-sm font-medium text-background transition hover:bg-[#D0E0FF] hover:text-foreground"
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
