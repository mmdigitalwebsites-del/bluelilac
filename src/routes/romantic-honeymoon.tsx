import { createFileRoute } from "@tanstack/react-router";
import { Heart, Wine, Bed } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/romance.jpg";
import img from "@/assets/romance2.jpg";
import romance from "@/assets/romance1.jpg";
import romanceOne from "@/assets/romance3.jpg";
import romanceTwo from "@/assets/romance4.jpg";

const honeymoonSlugs = [
  "3-day-masai-mara-governors-camp",
  "10-days-bush-and-beach-kenya",
  "zanzibar-full-day-private-tour",
];

const honeymoonTrips = honeymoonSlugs
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

export const Route = createFileRoute("/romantic-honeymoon")({
  head: () => ({
    meta: [
      { title: "Romantic Honeymoon Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Romantic East African honeymoons — private bush dinners, beach hideaways and unforgettable first chapters as newlyweds.",
      },
      { property: "og:title", content: "Romantic Honeymoon Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Bush-and-beach honeymoons across Kenya, Tanzania and Zanzibar.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Just married · Just for two"
      title="Begin together, somewhere wild."
      intro="Star-bathed bush dinners, sunrise balloon flights and the slow hush of waves on white sand. Honeymoons designed for two — quiet, beautiful, and entirely yours."
      heroImg={hero}
      ctaImg={img}
      trips={honeymoonTrips}
      exploreHref="/tours?q=honeymoon"
      exploreLabel="Browse all trips"
      highlights={[
        {
          icon: Heart,
          title: "Just-for-two moments",
          body: "Private bush dinners, candlelit baths and surprise rose petals on turn-down.",
          img: romance,
        },
        {
          icon: Wine,
          title: "Premium wine & dine",
          body: "Sommelier-curated wine pairings and private picnics on a quiet stretch of sand.",
          img: romanceOne,
        },
        {
          icon: Bed,
          title: "Bush-to-beach romance",
          body: "Tented suites under the stars in the bush, then an ocean-front villa to close the trip.",
          img: romanceTwo,
        },
      ]}
      inclusions={[
        "Honeymoon suite upgrades at every property",
        "Champagne on arrival and one couples' spa treatment",
        "Private 4x4 with experienced safari guide",
        "Hot-air balloon flight over the Masai Mara",
        "A private beach day with a sunset dhow cruise",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Nairobi rendezvous",
          body: "A boutique hotel, a slow candlelit dinner, and your first night together as newlyweds in Africa.",
        },
        {
          day: "Day 2–4",
          title: "Masai Mara romance",
          body: "A private riverside suite at Governor's Camp, sundowners on a kopje just for two, and a sunrise balloon flight ending in a bush breakfast.",
        },
        {
          day: "Day 5–8",
          title: "Barefoot beach escape",
          body: "An ocean-front villa, a dhow sunset cruise, and long unhurried beach days to close the honeymoon.",
        },
        {
          day: "Day 9",
          title: "Soft return",
          body: "One last sunrise swim, then an unhurried transfer home — as Mr. & Mrs.",
        },
      ]}
    />
  ),
});
