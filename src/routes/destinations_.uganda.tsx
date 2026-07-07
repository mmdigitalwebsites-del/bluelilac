import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, type Trip } from "@/components/CountryPage";
import uganda from "@/assets/uganda.jpg";
import safari from "@/assets/impala.jpg";
import ugandaOne from "@/assets/uganda1.jpg";
import ugandaTwo from "@/assets/gorrila.jpg";
import ugandaThree from "@/assets/forest.png";
import ugandaFour from "@/assets/queen.png";
import ugandaFive from "@/assets/lake.jpg";
import ugandaSix from "@/assets/romance4.jpg";

const UGANDA_TRIPS: Trip[] = [
  {
    name: "Bwindi Impenetrable Forest",
    tagline: "Mountain gorillas in the mist",
    description:
      "Half the world's mountain gorillas live in Bwindi's ancient rainforest. Permits required — we handle every detail.",
    bestTime: "Jun – Aug, Dec – Feb",
    img: ugandaThree,
  },
  {
    name: "Queen Elizabeth NP",
    tagline: "Tree-climbing lions of Ishasha",
    description:
      "Savannah, crater lakes and the Kazinga Channel — plus the famous tree-climbing lions of the Ishasha sector.",
    bestTime: "Jan – Feb, Jun – Sep",
    img: ugandaFour,
  },
  {
    name: "Lake Bunyonyi",
    tagline: "Africa's most beautiful lake",
    description:
      "29 emerald islands on a deep crater lake — the perfect unwind after gorilla trekking.",
    bestTime: "Year-round",
    img: ugandaFive,
  },
  {
    name: "Murchison Falls",
    tagline: "Where the Nile explodes",
    description:
      "The world's most powerful waterfall — the Nile squeezed through a 7m gap — with rich savannah wildlife alongside.",
    bestTime: "Dec – Feb, Jun – Sep",
    img: ugandaOne,
  },
  {
    name: "Kibale Forest",
    tagline: "Primate capital of Africa",
    description:
      "Thirteen primate species including habituated chimpanzees — the best chimp tracking on the continent.",
    bestTime: "Jun – Sep, Dec – Feb",
    img: uganda,
  },
  {
    name: "Jinja & the Nile",
    tagline: "Source of the White Nile",
    description:
      "White-water rafting, kayaking and bungee jumping at the point where the mighty Nile begins its journey north.",
    bestTime: "Year-round",
    img: ugandaSix,
  },
];

export const Route = createFileRoute("/destinations_/uganda")({
  head: () => ({
    meta: [
      { title: "Uganda — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Mountain gorillas in Bwindi, tree-climbing lions in Queen Elizabeth and the source of the Nile at Jinja — Uganda with Bluelilac.",
      },
      { property: "og:title", content: "Uganda — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Bwindi, Queen Elizabeth and Murchison Falls — curated Ugandan journeys.",
      },
      { property: "og:image", content: uganda },
    ],
  }),
  component: () => (
    <CountryPage
      country="Uganda"
      heroImg={uganda}
      heroTagline="Gorillas in the mist, chimps in the canopy, and the Nile exploding to life at Jinja."
      projectHeroImg={ugandaOne}
      projectSecondaryImg={safari}
      bannerImg={ugandaTwo}
      introTitle="The Uganda Experience"
      introBody="Winston Churchill called it 'the Pearl of Africa,' and it still holds up. Uganda packs mountain gorillas, tree-climbing lions, thirteen primate species, the source of the Nile and the snow-topped Rwenzoris into one green, generous country."
      intro2ndBody="We build unhurried Uganda routes that pair gorilla and chimp trekking with savannah drives, boat cruises on the Kazinga Channel and downtime on Lake Bunyonyi's islands. Permits, transfers, everything sorted."
      bannerTitle="Welcome to Uganda — the Pearl of Africa."
      bannerBody="Gorillas, chimps, tree-climbing lions and the source of the Nile — our Uganda specialists weave it into one seamless journey."
      trips={UGANDA_TRIPS}
    />
  ),
});
