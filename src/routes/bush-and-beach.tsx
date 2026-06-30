import { createFileRoute } from "@tanstack/react-router";
import { Sun, Waves, Mountain } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/bush.png";
import img from "@/assets/bush2.png";

export const Route = createFileRoute("/bush-and-beach")({
  head: () => ({
    meta: [
      { title: "Bush & Beach Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Combine the wild plains of Kenya and Tanzania with the turquoise waters of Zanzibar or Diani — the classic East African duo.",
      },
      { property: "og:title", content: "Bush & Beach Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "East African safari plus an Indian Ocean beach finale.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Two trips in one"
      title="From dusty plains to turquoise water."
      intro="Start in the heart of the wild — lions, elephants, the Great Migration. Finish with toes in the sand on Zanzibar or Diani. The classic East African duo, one seamless journey."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/tours?q=beach"
      exploreLabel="See bush & beach trips"
      highlights={[
        {
          icon: Mountain,
          title: "Wildlife first half",
          body: "Masai Mara, Serengeti or Amboseli — the headline acts of an East African safari.",
        },
        {
          icon: Waves,
          title: "Indian Ocean finale",
          body: "Decompress in Zanzibar, Diani or Watamu — barefoot luxury on white sand.",
        },
        {
          icon: Sun,
          title: "Seamless logistics",
          body: "Internal flights, transfers and dietary preferences handled door to door.",
        },
      ]}
      inclusions={[
        "5–7 night safari portion with all park fees and game drives",
        "Internal flights between safari and beach",
        "4–6 nights ocean-front resort or boutique villa",
        "Snorkelling trip, dhow sunset cruise and spice tour in Zanzibar",
        "Airport transfers throughout",
      ]}
      itinerary={[
        { day: "Day 1", title: "Arrive Nairobi", body: "Overnight stay before the safari begins." },
        {
          day: "Day 2–5",
          title: "Masai Mara safari",
          body: "Four days tracking the Big Five across the world's most famous savannah.",
        },
        {
          day: "Day 6",
          title: "Fly to the coast",
          body: "Short flight to Zanzibar — sundowners on the beach by evening.",
        },
        {
          day: "Day 7–10",
          title: "Beach days",
          body: "Snorkel Mnemba Atoll, explore Stone Town, sail on a traditional dhow.",
        },
      ]}
    />
  ),
});
