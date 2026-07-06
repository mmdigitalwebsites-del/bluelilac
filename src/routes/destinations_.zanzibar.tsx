import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, type Trip } from "@/components/CountryPage";
import zanzibar from "@/assets/zanzibar.jpg";
import safari from "@/assets/home4.jpg";
import zOne from "@/assets/home5.jpg";
import zTwo from "@/assets/homepage1.jpg";
import zThree from "@/assets/beach.jpg";
import zFour from "@/assets/stonetown.png";
import zFive from "@/assets/diving.jpg";
import zSix from "@/assets/naivasha.jpg";
import zSeven from "@/assets/tours.png";
import zEight from "@/assets/spicefarm.jpg";

const ZANZIBAR_TRIPS: Trip[] = [
  {
    name: "Stone Town",
    tagline: "Spice islands' UNESCO heart",
    description:
      "A labyrinth of Swahili-Arab heritage — carved doors, spice markets and grilled seafood at Forodhani Gardens.",
    bestTime: "Jun – Oct, Dec – Feb",
    img: zFour,
  },
  {
    name: "Nungwi & Kendwa",
    tagline: "Powder beaches & turquoise water",
    description:
      "The island's most picture-perfect beaches — long white sands, sunset dhows and excellent diving on northern reefs.",
    bestTime: "Jun – Oct, Dec – Mar",
    img: zThree,
  },
  {
    name: "Mnemba Atoll",
    tagline: "Snorkel a coral wonderland",
    description:
      "A protected marine reserve off the northeast coast — dolphins, turtles and ribbon-clear water.",
    bestTime: "Jun – Oct, Dec – Mar",
    img: zFive,
  },
  {
    name: "Jozani Forest",
    tagline: "Home of the red colobus",
    description:
      "The island's last stand of indigenous forest, and the only place to see the endemic Zanzibar red colobus.",
    bestTime: "Year-round",
    img: zSix,
  },
  {
    name: "Paje & Jambiani",
    tagline: "Kitesurf capital of the east coast",
    description:
      "Steady trade winds, shallow turquoise lagoons and one of the world's top kitesurfing scenes.",
    bestTime: "Jun – Sep, Dec – Feb",
    img: zSeven,
  },
  {
    name: "Spice Farms",
    tagline: "Taste, smell, and story",
    description:
      "Walk plantations of cloves, nutmeg, vanilla and cardamom — the crops that gave Zanzibar its name.",
    bestTime: "Year-round",
    img: zEight,
  },
];

export const Route = createFileRoute("/destinations_/zanzibar")({
  head: () => ({
    meta: [
      { title: "Zanzibar — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Spice-scented Stone Town, powder-white beaches and the turquoise reefs of Mnemba — Zanzibar with Bluelilac Tours.",
      },
      { property: "og:title", content: "Zanzibar — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Stone Town, Nungwi and Mnemba — curated Zanzibar journeys.",
      },
      { property: "og:image", content: zanzibar },
    ],
  }),
  component: () => (
    <CountryPage
      country="Zanzibar"
      heroImg={zanzibar}
      heroTagline="Spice-scented streets, powder-white beaches, and reefs that glow turquoise."
      projectHeroImg={zOne}
      projectSecondaryImg={safari}
      bannerImg={zTwo}
      introTitle="The Zanzibar Experience"
      introBody="Zanzibar is the softest landing in East Africa — UNESCO Stone Town's carved doors and spice markets giving way to powder-white beaches, dhow-sailed sunsets and coral reefs teeming with life. The perfect finish to any safari, or a destination all its own."
      intro2ndBody="We match beach hotels to your travel style — barefoot luxury on Mnemba, boutique boltholes on the quieter east coast, or spice-farm retreats inland. Add snorkelling, sunset sails and a Stone Town food tour."
      bannerTitle="Welcome to Zanzibar — the spice island."
      bannerBody="From Stone Town's twilight rooftops to the turquoise reefs of Mnemba, our Zanzibar specialists design the perfect wind-down."
      trips={ZANZIBAR_TRIPS}
    />
  ),
});
