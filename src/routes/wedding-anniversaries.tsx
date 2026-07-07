import { createFileRoute } from "@tanstack/react-router";
import { Cake, Wine, Waves } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/shortsafari.png";
import img from "@/assets/home6.jpg";
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
          title: "A celebration built in",
          body: "A surprise dinner setup, cake and card arranged with your camp on the night that matters.",
          img: hero,
        },
        {
          icon: Wine,
          title: "Toast at golden hour",
          body: "A private sundowner toast overlooking the plains, just the two of you and your guide close by.",
          img: wedding,
        },
        {
          icon: Waves,
          title: "Finish on the beach",
          body: "A closing beach escape to unwind together after the excitement of the bush.",
          img: weddingOne,
        },
      ]}
      inclusions={[
        "A celebration dinner and cake arranged on your anniversary night",
        "A private toast at sunset with your guide",
        "Premium lodge and tented camp upgrades where available",
        "A beach extension day with a private sunset cruise",
        "All park fees, meals and a dedicated guide throughout",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Nairobi welcome",
          body: "Arrival, a relaxed dinner, and a toast to the years already shared before the safari begins.",
        },
        {
          day: "Day 2–5",
          title: "Grand Kenya–Tanzania circuit",
          body: "The Mara, the Serengeti and the Ngorongoro Crater, with a surprise anniversary dinner arranged partway through.",
        },
        {
          day: "Day 6–7",
          title: "Fancy lodge finale",
          body: "A stay at a premier property such as Salt Lick Lodge, with floodlit waterhole views from your room.",
        },
        {
          day: "Day 8",
          title: "Beach celebration day",
          body: "A private Zanzibar day out — Stone Town, a spice tour, sunset on the beach and a seafood BBQ to toast the trip's end.",
        },
      ]}
    />
  ),
});
