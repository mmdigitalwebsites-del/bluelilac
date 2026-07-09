import { createFileRoute } from "@tanstack/react-router";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/Luxury5.webp";
import img from "@/assets/luxury.jpg";
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
        "Return airport transfers in Nairobi",
        "Return flights to Maasai Mara and Malindi",
        "Full-board accommodation in Maasai Mara with selected drinks included",
        "Half-board accommodation in Watamu",
        "Two shared game drives daily in Maasai Mara",
        "One night game drive in the conservancy",
        "Unlimited game drives in Maasai Mara",
        "One bush breakfast in Maasai Mara (weather permitting)",
        "Maasai Mara conservancy fees, park fees and reserve fund fees",
        "All applicable government taxes and levies",
      ]}
      exclusions={["International flights", "Personal items", "Extra meals and drinks"]}
      itinerary={[
        {
          day: "Day 1",
          title: "Arrival in Nairobi",
          body: "Met at JKIA by our representative and transferred to Hemingways Nairobi. Spend the remainder of the day at leisure enjoying the hotel's facilities. Overnight on a bed and breakfast basis.",
        },
        {
          day: "Day 2",
          title: "Nairobi – Maasai Mara",
          body: "After breakfast, fly from Wilson Airport to the Maasai Mara. Met by your safari guide and transferred to your luxury tented camp in a private conservancy. Lunch, time to settle in, then an afternoon shared game drive in search of elephants, lions, cheetahs and giraffes.",
        },
        {
          day: "Day 3",
          title: "Full Day Maasai Mara Safari",
          body: "Two shared game drives through the Mara ecosystem. During July to October you may witness the wildebeest migration. A bush breakfast in the wilderness (weather permitting) and a thrilling night game drive within the conservancy to spot nocturnal wildlife.",
        },
        {
          day: "Day 4",
          title: "Maasai Mara – Watamu Coast",
          body: "After breakfast, fly back to Nairobi and connect to Malindi. Transferred to Hemingways Watamu on the pristine white sandy beaches of the Kenyan coast. Dinner and overnight on a half-board basis.",
        },
        {
          day: "Day 5–6",
          title: "Watamu Beach Leisure",
          body: "Two full days at leisure in Watamu. Swim in the Indian Ocean, relax by the beach, or arrange optional activities — snorkelling, diving, dolphin watching, deep-sea fishing or a visit to Watamu Marine National Park.",
        },
        {
          day: "Day 7",
          title: "Watamu – Nairobi – Departure",
          body: "After breakfast, transfer to Malindi Airport for your flight to Nairobi and connect with your international departure, bringing your Luxury Bush & Beach experience to a close.",
        },
      ]}
    />
  ),
});
