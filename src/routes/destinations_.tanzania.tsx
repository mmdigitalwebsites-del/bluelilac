import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, type Trip } from "@/components/CountryPage";
import tanzania from "@/assets/tanzania.jpg";
import safari from "@/assets/tour-serengeti.jpg";
import tanzOne from "@/assets/shortsafari.png";
import tanzTwo from "@/assets/safari2.png";
import tanzThree from "@/assets/crater.png";
import tanzFour from "@/assets/lake.jpg";
import tanzFive from "@/assets/arusha.png";
import tanzSix from "@/assets/luxury2.jpg";
import tanz from "@/assets/shortsafari2.png";

const TANZANIA_TRIPS: Trip[] = [
  {
    name: "Serengeti National Park",
    tagline: "Endless plains of the Migration",
    description:
      "1.5 million wildebeest, vast plains, kopjes full of lions and the heart of the Great Migration year-round.",
    bestTime: "Year-round (Migration varies)",
    img: tanzOne,
  },
  {
    name: "Ngorongoro Crater",
    tagline: "Africa's Garden of Eden",
    description:
      "A collapsed volcanic caldera teeming with 25,000+ large animals — the most reliable Big Five sighting on the continent.",
    bestTime: "Year-round",
    img: tanzThree,
  },
  {
    name: "Tarangire National Park",
    tagline: "Land of giants and baobabs",
    description:
      "Massive elephant herds, ancient baobab trees and the Tarangire River — a dry-season magnet for wildlife.",
    bestTime: "Jun – Oct",
    img: tanzTwo,
  },
  {
    name: "Lake Manyara",
    tagline: "Tree-climbing lions & soda lake",
    description:
      "Groundwater forest, flamingo-pink shores and famously tree-climbing lions beneath the Rift escarpment.",
    bestTime: "Jul – Oct",
    img: tanzFour,
  },
  {
    name: "Arusha",
    tagline: "Gateway to the northern circuit",
    description:
      "Tanzania's safari capital nestled below Mt. Meru — your start and finish point for the northern parks.",
    bestTime: "Year-round",
    img: tanzFive,
  },
  {
    name: "Mount Kilimanjaro",
    tagline: "The Roof of Africa",
    description:
      "Africa's highest peak — 5,895m of trekking through five ecological zones to a snow-capped summit.",
    bestTime: "Jan – Mar, Jun – Oct",
    img: tanzSix,
  },
];

export const Route = createFileRoute("/destinations_/tanzania")({
  head: () => ({
    meta: [
      { title: "Tanzania — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Explore Tanzania with Bluelilac — the Serengeti, Ngorongoro Crater, Tarangire and the roof of Africa on Kilimanjaro.",
      },
      { property: "og:title", content: "Tanzania — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Serengeti, Ngorongoro and Kilimanjaro — curated Tanzanian journeys.",
      },
      { property: "og:image", content: tanzania },
    ],
  }),
  component: () => (
    <CountryPage
      country="Tanzania"
      heroImg={tanzania}
      heroTagline="Endless plains, an ancient crater, and the snow-capped roof of Africa."
      projectHeroImg={tanz}
      projectSecondaryImg={safari}
      bannerImg={tanzOne}
      introTitle="The Tanzania Experience"
      introBody="Tanzania is the beating heart of the safari continent. Endless Serengeti plains, the Ngorongoro Crater teeming with wildlife, ancient baobabs in Tarangire and the snow-capped summit of Kilimanjaro — every itinerary here reads like a greatest-hits album of African wilderness."
      intro2ndBody="We pair the icons with quieter corners — walking safaris in the south, mobile camps that follow the Migration, and cultural time with the Hadzabe and Maasai. Every trip is built around when you go and what makes you tick."
      bannerTitle="Welcome to Tanzania — where the Migration never stops."
      bannerBody="From calving season on the southern plains to river crossings in the Mara, our Tanzania specialists put you in the right camp at the right time."
      trips={TANZANIA_TRIPS}
    />
  ),
});
