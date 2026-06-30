import { createFileRoute } from "@tanstack/react-router";
import { Users, Map, Wallet } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/game-drives-2.jpg";
import img from "@/assets/grouptours.png";

export const Route = createFileRoute("/group-tours")({
  head: () => ({
    meta: [
      { title: "Group Tours — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Small-group East African safaris with fixed departures — shared adventure, shared cost, unforgettable wildlife.",
      },
      { property: "og:title", content: "Group Tours — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Fixed-departure small group safaris across Kenya and Tanzania.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Small groups · Fixed departures"
      title="Shared roads, lasting friendships."
      intro="Travel further for less by joining a small group of like-minded explorers. Maximum 12 guests, guaranteed window seats and the same standard of guiding our private clients enjoy."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/tours?type=Group+tour"
      exploreLabel="See group departures"
      highlights={[
        {
          icon: Users,
          title: "Max 12 guests",
          body: "Small enough to stay nimble, big enough to keep the campfire stories flowing.",
        },
        {
          icon: Map,
          title: "Set itineraries",
          body: "Carefully sequenced routes that hit the icons and the hidden corners in between.",
        },
        {
          icon: Wallet,
          title: "Better value",
          body: "Shared 4x4s and pre-booked camps unlock seriously good prices without trimming quality.",
        },
      ]}
      inclusions={[
        "Shared 4x4 Land Cruiser with pop-up roof (guaranteed window seat)",
        "Mid-range to premium tented camps and lodges",
        "All park fees, meals on safari and bottled water in the vehicle",
        "Professional English-speaking guide",
        "Airport transfers in Nairobi or Arusha",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Meet in Nairobi",
          body: "Welcome briefing and a relaxed group dinner at your boutique city hotel.",
        },
        {
          day: "Day 2–3",
          title: "Masai Mara",
          body: "Two full days of game drives through the rolling savannah of the Mara.",
        },
        {
          day: "Day 4",
          title: "Lake Nakuru",
          body: "Flamingos, rhino tracking and a scenic Rift Valley descent.",
        },
        {
          day: "Day 5–6",
          title: "Amboseli & farewell",
          body: "Elephant herds beneath Kilimanjaro before a final group dinner back in Nairobi.",
        },
      ]}
    />
  ),
});
