import { createFileRoute } from "@tanstack/react-router";
import { Binoculars, Feather, TreeDeciduous } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/bird.png";
import img from "@/assets/bird2.png";

export const Route = createFileRoute("/bird-watchers")({
  head: () => ({
    meta: [
      { title: "Bird Watching Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Specialist birding safaris across Kenya, Tanzania and Uganda — 1,000+ species, expert guides and quiet hides at dawn.",
      },
      { property: "og:title", content: "Bird Watching Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Specialist birding safaris across East Africa with expert ornithologist guides.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="For the birders"
      title="A continent on the wing."
      intro="East Africa hosts over 1,400 bird species — from the shoebill of the Ugandan swamps to the lilac-breasted roller of the Mara. Trips built around dawn light, quiet hides and guides who know every call."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/tours?q=bird"
      exploreLabel="See birding trips"
      highlights={[
        {
          icon: Binoculars,
          title: "Specialist guides",
          body: "Ornithologist guides with checklist, scope and Merlin/BirdNet on hand.",
        },
        {
          icon: Feather,
          title: "1,000+ species",
          body: "Routes built for endemics — shoebill, Hartlaub's turaco, grey-crowned crane and more.",
        },
        {
          icon: TreeDeciduous,
          title: "Quiet hides",
          body: "Dawn starts, hushed hides over wetlands and forest canopy walks.",
        },
      ]}
      inclusions={[
        "Dedicated birding 4x4 with rooftop hatch and tripod mount",
        "Loan of Swarovski binoculars and a Sibley-style field guide",
        "Hides at Lake Baringo, Bwindi, Mabamba Swamp and beyond",
        "Permits for forest reserves and protected wetlands",
        "Picnic breakfasts at first light",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Lake Naivasha",
          body: "African fish eagles, jacanas and hippos on a sunrise boat trip.",
        },
        {
          day: "Day 2–3",
          title: "Kakamega Forest",
          body: "Last fragment of rainforest in Kenya — turacos, hornbills and the great blue turaco.",
        },
        {
          day: "Day 4–5",
          title: "Lake Baringo",
          body: "Cliff-nesters at Lake Bogoria and pelagic birding on Baringo.",
        },
        {
          day: "Day 6–7",
          title: "Masai Mara finale",
          body: "Open grassland birding paired with the big cats and Mara plains.",
        },
      ]}
    />
  ),
});
