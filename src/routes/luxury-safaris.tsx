import { createFileRoute } from "@tanstack/react-router";
import { Crown, Gem, Leaf } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/luxury.png";
import img from "@/assets/luxury2.png";

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
      exploreHref="/tours?type=Private+tour"
      exploreLabel="Browse luxury trips"
      highlights={[
        {
          icon: Crown,
          title: "Premier camps",
          body: "Relais & Châteaux lodges, private conservancies and tented suites under the stars.",
        },
        {
          icon: Gem,
          title: "Private guiding",
          body: "Senior guides, private 4x4 with pop-up roof, off-the-clock game drives and bush dining.",
        },
        {
          icon: Leaf,
          title: "Conservation first",
          body: "Every booking supports community conservancies that protect the land you came to see.",
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
          title: "Nairobi arrival",
          body: "Met on the tarmac and transferred to Hemingways for an unhurried first night.",
        },
        {
          day: "Day 2–4",
          title: "Masai Mara conservancy",
          body: "Fly to a private conservancy bordering the Mara. Walking safaris, night drives and a hot air balloon at first light.",
        },
        {
          day: "Day 5–7",
          title: "Serengeti under canvas",
          body: "Cross to Tanzania for the Great Migration in a mobile tented camp positioned with the herds.",
        },
        {
          day: "Day 8",
          title: "Quiet farewell",
          body: "A slow morning, a final game drive, and a champagne return to Nairobi.",
        },
      ]}
    />
  ),
});
