import { createFileRoute } from "@tanstack/react-router";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/luxury.jpg";
import img from "@/assets/luxury2.jpg";
import luxury from "@/assets/luxury4.jpg";
import luxuryOne from "@/assets/luxury3.jpg";
import luxuryTwo from "@/assets/homepage9.jpg";

// Curated by hand, not by `type` field alone — these are the trips that
// actually read as luxury: named premium properties, flights over road
// transfers, small groups, and top-of-catalogue pricing.
const luxurySlugs = [
  "3-day-masai-mara-governors-camp",
  "13-days-kenya-tanzania-safari",
  "10-days-ultimate-kenya-explorer",
];

const luxuryTrips = luxurySlugs
  .map((slug) => getTour(slug))
  .filter((t): t is NonNullable<typeof t> => Boolean(t))
  .map((t) => ({
    slug: t.slug,
    title: t.title,
    img: t.img,
    description: t.overview[0],
    duration: t.duration,
    group: t.group,
    price: t.price,
  }));

export const Route = createFileRoute("/luxury-safaris")({
  head: () => ({
    meta: [
      { title: "Luxury Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Bespoke luxury safaris across Kenya, Tanzania and beyond — private guides, exclusive camps and quiet moments where Africa speaks.",
      },
      { property: "og:title", content: "Luxury Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Private guides, exclusive camps and bespoke East African journeys.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Private · Exclusive · Bespoke"
      title="Luxury Safaris, done properly."
      intro="True luxury in Africa is not about excess. It is access — to the right places, the right people, the right moments. Private vehicles, premier camps and guides who read the bush like a story."
      heroImg={hero}
      ctaImg={img}
      trips={luxuryTrips}
      exploreHref="/tours?type=Private+tour"
      exploreLabel="Browse all trips"
      highlights={[
        {
          title: "Premier camps",
          body: "Relais & Châteaux lodges, private conservancies and tented suites under the stars.",
          img: luxury,
        },
        {
          title: "Private guiding",
          body: "Senior guides, private 4x4 with pop-up roof, off-the-clock game drives and bush dining.",
          img: luxuryOne,
        },
        {
          title: "Conservation first",
          body: "Every booking supports community conservancies that protect the land you came to see.",
          img: luxuryTwo,
        },
      ]}
      inclusions={[
        "Private 4x4 Land Cruiser with guaranteed window seat",
        "Award-winning silver/gold-rated lodges and tented camps",
        "All park & conservancy fees, internal flights where appropriate",
        "Sundowners, bush breakfasts and a dedicated host throughout",
        "24/7 concierge support and travel insurance assistance",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Nairobi arrival, in style",
          body: "Met on the tarmac by your personal safari host and driven straight to Hemingways Nairobi. Champagne on arrival, a quiet first night, no rush to the bush yet.",
        },
        {
          day: "Day 2–4",
          title: "Fly in to a private Masai Mara conservancy",
          body: "A scheduled flight replaces the long road transfer. Settle into a riverside tented suite at Governor's Camp with a private butler, then walking safaris, night drives off-limits to standard park vehicles, and a sunrise hot-air balloon with a champagne breakfast on landing.",
        },
        {
          day: "Day 5–7",
          title: "Serengeti, under private canvas",
          body: "Cross to Tanzania into a mobile tented camp repositioned with the migrating herds — your own dining tent, hot bucket showers under the stars, and a dedicated guide who moves camp to keep the game drives short and the sightings close.",
        },
        {
          day: "Day 8",
          title: "A slow, quiet farewell",
          body: "One final unhurried game drive at first light, a bush breakfast with the vehicle parked and engine off, then a private charter flight back to Nairobi in time for your onward connection.",
        },
      ]}
    />
  ),
});
