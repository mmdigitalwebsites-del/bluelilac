import { createFileRoute } from "@tanstack/react-router";
import { Heart, Wine, Bed } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/honeymoon.png";
import img from "@/assets/honeymoon2.png";

export const Route = createFileRoute("/honeymoon-packages")({
  head: () => ({
    meta: [
      { title: "Honeymoon Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Romantic East African honeymoons — private bush dinners, beach hideaways and unforgettable first chapters as newlyweds.",
      },
      { property: "og:title", content: "Honeymoon Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Bush-and-beach honeymoons across Kenya, Tanzania and Zanzibar.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Just married"
      title="Begin together, somewhere wild."
      intro="Star-bathed bush dinners, sunrise balloon flights and the slow hush of waves on white sand. Honeymoons designed for two — quiet, beautiful, and entirely yours."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/tours?q=honeymoon"
      exploreLabel="See romantic trips"
      highlights={[
        {
          icon: Heart,
          title: "Just-for-two moments",
          body: "Private bush dinners, candlelit baths and surprise rose petals on turn-down.",
        },
        {
          icon: Wine,
          title: "Premium wine & dine",
          body: "Sommelier-curated wine pairings and beach picnics on private sandbanks.",
        },
        {
          icon: Bed,
          title: "Honeymoon suites",
          body: "Upgraded tented suites, plunge pools and ocean-front villas throughout.",
        },
      ]}
      inclusions={[
        "Honeymoon suite upgrades at every property",
        "Champagne on arrival and one couples' spa treatment",
        "Private 4x4 with experienced safari guide",
        "Hot-air balloon flight over the Masai Mara",
        "Beach extension in Zanzibar or Diani",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Nairobi rendezvous",
          body: "Boutique hotel, slow dinner, soft landing into Africa.",
        },
        {
          day: "Day 2–4",
          title: "Masai Mara romance",
          body: "Sundowners on a private kopje, balloon flight at dawn, bush breakfast for two.",
        },
        {
          day: "Day 5–8",
          title: "Zanzibar barefoot luxury",
          body: "Beach villa, dhow sunset cruise and lazy spice island days.",
        },
        {
          day: "Day 9",
          title: "Soft return",
          body: "A final sunrise swim, then a smooth return home as Mr. & Mrs.",
        },
      ]}
    />
  ),
});
