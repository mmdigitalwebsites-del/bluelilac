import { createFileRoute } from "@tanstack/react-router";
import { Cake, Wine, Waves } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/honeymoon.jpeg";
import img from "@/assets/wedding.jpg";
import wedding from "@/assets/homepage3.jpg";
import weddingOne from "@/assets/beach.jpg";

const anniversarySlugs = [
  "13-days-kenya-tanzania-safari",
  "10-days-ultimate-kenya-explorer",
  "zanzibar-full-day-private-tour",
];

const anniversaryTrips = anniversarySlugs
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

export const Route = createFileRoute("/wedding-anniversaries")({
  head: () => ({
    meta: [
      { title: "Wedding Anniversary Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Celebrate your years together with a bespoke East African safari — candlelit bush dinners, a golden-hour toast and a beach day to finish.",
      },
      { property: "og:title", content: "Wedding Anniversary Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Milestone anniversary safaris across Kenya, Tanzania and Zanzibar.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Celebrating your years together"
      title="Toast to the years, deep in the wild."
      intro="Whether it's five years or fifty, an anniversary deserves more than a nice dinner. Trade the usual for candlelit bush dinners, a private toast at sunset, and a beach day to close it all out."
      heroImg={hero}
      ctaImg={img}
      trips={anniversaryTrips}
      exploreHref="/tours?q=anniversary"
      exploreLabel="Browse all trips"
      highlights={[
        {
          icon: Cake,
          title: "Thoughtful celebrations",
          body: "Your special occasion is marked with elegant touches, including a beautifully prepared dinner setting and celebratory surprises.",
          img: hero,
        },
        {
          icon: Wine,
          title: "Romantic dining",
          body: "Exceptional cuisine, premium wines, and intimate dining experiences create unforgettable moments together.",
          img: wedding,
        },
        {
          icon: Waves,
          title: "Safari & seaside stays",
          body: "Experience the perfect balance of luxury with handpicked safari lodges and a relaxing beachfront retreat.",
          img: weddingOne,
        },
      ]}
      inclusions={[
        "2 nights accommodation in Nairobi on bed and breakfast",
        "3 nights accommodation in Meru on full board",
        "Domestic scheduled flights to and from Meru",
        "All airport pick up and drop off in Nairobi and Meru",
        "Shared game drives in 4x4 Land Cruisers",
        "One night game drive during your stay",
        "Guided walking safari with a professional guide",
        "Fishing — hand line, catch and release, with guide",
        "Bush sundowner",
        "Dinner at Carnivore Restaurant",
        "All taxes",
      ]}
      exclusions={[
        "Extra meals and drinks",
        "International flights",
        "Any other item not mentioned above",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Arrival in Nairobi",
          body: "Met and assisted by our airport representatives on arrival. Transfer to Hemingways Hotel for overnight.",
        },
        {
          day: "Day 2",
          title: "Nairobi – Meru National Park",
          body: "Transfer to Wilson Airport for your flight to Meru National Park. Check in at Elsa's Kopje, enjoy lunch and head out for an afternoon game drive. Dinner and overnight at the camp.",
        },
        {
          day: "Day 3",
          title: "Full Day Meru — Walk & Night Drive",
          body: "Breakfast followed by a morning game drive. Return to camp for lunch then embark on a 2-hour guided walking safari. In the evening, enjoy a thrilling night game drive. Dinner and overnight at camp.",
        },
        {
          day: "Day 4",
          title: "Game Drive, Fishing & Sundowner",
          body: "Morning game drive after breakfast, then lunch at camp. In the afternoon, enjoy a guided hand-line catch-and-release fishing experience on the river, followed by a bush sundowner as the sun sets over Meru. Dinner and overnight at camp.",
        },
        {
          day: "Day 5",
          title: "Meru – Nairobi City",
          body: "Fly back to Nairobi then enjoy an afternoon of shopping and a city tour. End the evening with a sumptuous dinner at the legendary Carnivore Restaurant. Overnight at Hemingways Hotel.",
        },
        {
          day: "Day 6",
          title: "Departure",
          body: "After breakfast, check out and transfer to the airport for your flight back home.",
        },
      ]}
    />
  ),
});
