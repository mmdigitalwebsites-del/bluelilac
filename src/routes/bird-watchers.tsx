import { createFileRoute } from "@tanstack/react-router";
import { Binoculars, Feather, TreeDeciduous } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/bird5.jpg";
import img from "@/assets/bird4.jpg";
import bird from "@/assets/game-drive.jpg";
import bird1 from "@/assets/bird3.jpg";
import bird2 from "@/assets/bird6.jpg";

const birdingSlugs = [
  "lake-nakuru-day-tour-from-nairobi",
  "lake-nakuru-private-day-trip",
  "9-days-northern-frontier-classic-kenya",
];

const birdingTrips = birdingSlugs
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
      trips={birdingTrips}
      exploreHref="/tours?q=bird"
      exploreLabel="Browse all trips"
      highlights={[
        {
          icon: Binoculars,
          title: "Specialist guides",
          body: "Ornithologist guides with checklist, scope and Merlin/BirdNet on hand.",
          img: bird,
        },
        {
          icon: Feather,
          title: "1,000+ species",
          body: "Routes built for endemics — shoebill, Hartlaub's turaco, grey-crowned crane and more.",
          img: bird1,
        },
        {
          icon: TreeDeciduous,
          title: "Quiet hides",
          body: "Dawn starts, hushed hides over wetlands and forest canopy walks.",
          img: bird2,
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
          title: "Lake Naivasha at first light",
          body: "Sunrise boat trip past African fish eagles calling from the acacias, jacanas walking on lily pads, and hippo pods stirring at dawn.",
        },
        {
          day: "Day 2–3",
          title: "Kakamega Forest canopy",
          body: "Kenya's last rainforest fragment. Guided pre-dawn walks for the great blue turaco, Ross's turaco and a chorus of hornbills overhead.",
        },
        {
          day: "Day 4–5",
          title: "Lake Baringo & Bogoria",
          body: "Cliff-nesting raptors at Bogoria's escarpment and pelagic birding by boat on Baringo — over 470 species recorded between the two lakes.",
        },
        {
          day: "Day 6–7",
          title: "Masai Mara grassland finale",
          body: "Open-country species — secretary birds, ostrich, bustards — spotted between sightings of the Mara's resident big cats.",
        },
      ]}
    />
  ),
});
