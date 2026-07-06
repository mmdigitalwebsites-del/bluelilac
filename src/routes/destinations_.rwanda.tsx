import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, type Trip } from "@/components/CountryPage";
import rwanda from "@/assets/rwanda.jpg";
import safari from "@/assets/rwanda2.jpg";
import rOne from "@/assets/rwanda1.jpg";
import rTwo from "@/assets/homepage9.jpg";
import rThree from "@/assets/volcano.jpg";
import rFour from "@/assets/kigali.jpg";
import rFive from "@/assets/forest.png";
import rSix from "@/assets/lake.jpg";
import rSeven from "@/assets/kenya.png";

const RWANDA_TRIPS: Trip[] = [
  {
    name: "Volcanoes National Park",
    tagline: "Gorillas, golden monkeys, volcanoes",
    description:
      "Trek mountain gorillas through the Virunga volcanoes — Rwanda's flagship experience, made famous by Dian Fossey.",
    bestTime: "Jun – Sep, Dec – Feb",
    img: rThree,
  },
  {
    name: "Kigali",
    tagline: "Clean, calm capital of a thousand hills",
    description:
      "One of Africa's cleanest and safest cities — moving genocide memorial, vibrant arts and excellent coffee.",
    bestTime: "Year-round",
    img: rFour,
  },
  {
    name: "Nyungwe Forest",
    tagline: "Canopy walks and chimps",
    description:
      "One of Africa's oldest rainforests — chimpanzee tracking, colobus troops and a swaying canopy walkway.",
    bestTime: "Jun – Sep, Dec – Feb",
    img: rFive,
  },
  {
    name: "Lake Kivu",
    tagline: "Rwanda's inland sea",
    description:
      "A vast, calm freshwater lake between rolling hills — kayaks, coffee-boat tours and lakeside sunsets.",
    bestTime: "Year-round",
    img: rSix,
  },
  {
    name: "Akagera National Park",
    tagline: "Big Five on the Tanzanian border",
    description:
      "Rwanda's Big Five park — savannah, papyrus swamps and lion & rhino reintroductions bringing it back to life.",
    bestTime: "Jun – Sep",
    img: rSeven,
  },
];

export const Route = createFileRoute("/destinations_/rwanda")({
  head: () => ({
    meta: [
      { title: "Rwanda — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Mountain gorillas in Volcanoes NP, canopy walks in Nyungwe and the calm capital of Kigali — Rwanda with Bluelilac.",
      },
      { property: "og:title", content: "Rwanda — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Volcanoes, Nyungwe and Kigali — curated Rwandan journeys.",
      },
      { property: "og:image", content: rwanda },
    ],
  }),
  component: () => (
    <CountryPage
      country="Rwanda"
      heroImg={rwanda}
      heroTagline="A thousand hills, gorillas at eye level, and a capital that feels like a deep breath."
      projectHeroImg={rOne}
      projectSecondaryImg={safari}
      bannerImg={rTwo}
      introTitle="The Rwanda Experience"
      introBody="Rwanda is the land of a thousand hills — misty volcanoes, rainforests older than memory, and a capital that ranks among Africa's calmest and cleanest. Home to almost half the world's mountain gorillas, it's a compact country that punches far above its weight."
      intro2ndBody="We handle every gorilla permit and pair trekking days with rest at boutique lodges, canopy walks in Nyungwe and quiet lakeside downtime on Kivu. Small country, huge memories."
      bannerTitle="Welcome to Rwanda — a thousand hills, one unforgettable trek."
      bannerBody="Eye-to-eye with a mountain gorilla is a moment nothing prepares you for. Our Rwanda specialists handle every detail."
      trips={RWANDA_TRIPS}
    />
  ),
});
