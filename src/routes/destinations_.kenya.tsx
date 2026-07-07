import { createFileRoute } from "@tanstack/react-router";
import { CountryPage, type Trip } from "@/components/CountryPage";
import ken from "@/assets/kenya1.jpg";
import safari from "@/assets/safari.png";
import kenOne from "@/assets/home7.jpg";
import kenTwo from "@/assets/naivasha.jpg";
import kenThree from "@/assets/home.jpg";
import kenFour from "@/assets/homepage6.jpg";
import kenFive from "@/assets/nakuru.jpg";
import kenSix from "@/assets/luxury2.jpg";
import kenSeven from "@/assets/rhino.jpg";
import kenEight from "@/assets/home3.jpg";
import kenNine from "@/assets/homepage2.jpg";
import kenTen from "@/assets/nairobi.jpg";
import kenT from "@/assets/eastafrica.png";

const KENYA_TRIPS: Trip[] = [
  {
    name: "Maasai Mara",
    tagline: "The Great Migration's stage",
    description:
      "Kenya's flagship reserve — open savannah, huge predator densities and unrivalled big-cat sightings.",
    bestTime: "Jul – Oct",
    img: kenThree,
  },
  {
    name: "Amboseli National Park",
    tagline: "Elephants beneath Kilimanjaro",
    description: "Iconic views of Mt. Kilimanjaro framing some of Africa's largest elephant herds.",
    bestTime: "Jun – Oct, Jan – Feb",
    img: kenFour,
  },
  {
    name: "Lake Nakuru National Park",
    tagline: "Flamingo-rimmed Rift Valley jewel",
    description:
      "A compact Rift Valley park famed for flamingos, white and black rhino and Rothschild's giraffe.",
    bestTime: "Year-round",
    img: kenFive,
  },
  {
    name: "Lake Naivasha",
    tagline: "Freshwater haven on the Rift",
    description:
      "Hippos, fish eagles and acacia woodlands — perfect for boat rides and Crescent Island walks.",
    bestTime: "Year-round",
    img: kenTwo,
  },
  {
    name: "Samburu National Reserve",
    tagline: "Wild north of the equator",
    description:
      "Rugged semi-arid landscapes home to the 'Samburu Special Five' along the Ewaso Nyiro river.",
    bestTime: "Jun – Oct",
    img: kenSix,
  },
  {
    name: "Ol Pejeta Conservancy",
    tagline: "Home of the last northern white rhinos",
    description:
      "East Africa's largest black rhino sanctuary, Big Five, plus a chimpanzee sanctuary.",
    bestTime: "Year-round",
    img: kenSeven,
  },
  {
    name: "Tsavo East & West",
    tagline: "Red elephants & vast wilderness",
    description:
      "Kenya's largest protected wilderness — red-dust elephants, Mzima Springs and the Yatta Plateau.",
    bestTime: "Jun – Oct, Jan – Feb",
    img: kenEight,
  },
  {
    name: "Diani Beach",
    tagline: "Powder-white sands on the Indian Ocean",
    description:
      "Kenya's most beautiful stretch of coast — coral reefs, kite-surf swells and coastal forest.",
    bestTime: "Dec – Mar, Jul – Oct",
    img: kenNine,
  },
  {
    name: "Nairobi",
    tagline: "The only city with a national park",
    description:
      "Nairobi National Park, the Giraffe Centre, Sheldrick Elephant Orphanage and a buzzing food scene.",
    bestTime: "Year-round",
    img: kenTen,
  },
];

export const Route = createFileRoute("/destinations_/kenya")({
  head: () => ({
    meta: [
      { title: "Kenya — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Discover Kenya with Bluelilac Tours — the Maasai Mara, Amboseli, Diani beaches and the wild soul of East Africa's original safari.",
      },
      { property: "og:title", content: "Kenya — Bluelilac Tours" },
      {
        property: "og:description",
        content:
          "The Maasai Mara, Amboseli beneath Kilimanjaro, and the Indian Ocean coast — curated Kenyan journeys.",
      },
      { property: "og:image", content: ken },
    ],
  }),
  component: () => (
    <CountryPage
      country="Kenya"
      heroImg={ken}
      heroTagline="Where the safari was born — plains, lakes, and ocean shores in one country."
      projectHeroImg={kenT}
      projectSecondaryImg={kenOne}
      bannerImg={safari}
      introTitle="The Kenya Experience"
      introBody="Kenya is where the safari was born. From the wildebeest-thundered plains of the Maasai Mara to elephants beneath Kilimanjaro, flamingo-rimmed Rift Valley lakes and the white-sand shores of Diani, no other country packs so many landscapes into a single trip. We handcraft itineraries that weave iconic parks with lesser-known conservancies, coastal escapes and cultural encounters."
      intro2ndBody="Every Kenya journey we design begins with your pace and your interests — from intimate migration camps to conservancy walks alongside Maasai guides. We match you with lodges that give back to the wild spaces you came to see."
      bannerTitle="Welcome to Kenya — the birthplace of safari."
      bannerBody="From migration season on the Mara to sunset dhow sails on the Indian Ocean, our Kenya specialists build journeys that stay with you for a lifetime."
      trips={KENYA_TRIPS}
    />
  ),
});
