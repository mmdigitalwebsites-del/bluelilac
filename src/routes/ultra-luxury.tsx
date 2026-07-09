import { createFileRoute } from "@tanstack/react-router";
import { Gem, Plane, UtensilsCrossed } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/ultralux.jpg";
import img from "@/assets/lux2.jpg";
import ultra from "@/assets/ultra2.jpg";
import ultraOne from "@/assets/ultra3.jpg";
import ultraTwo from "@/assets/lux.jpg";

const ultraLuxurySlugs = [
  "13-days-kenya-tanzania-safari",
  "10-days-bush-and-beach-kenya",
  "9-days-northern-frontier-classic-kenya",
];

const ultraLuxuryTrips = ultraLuxurySlugs
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

export const Route = createFileRoute("/ultra-luxury")({
  head: () => ({
    meta: [
      { title: "Ultra Luxury Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "The most exclusive East African journeys — private aircraft transfers, rare access and uncompromising luxury from arrival to farewell.",
      },
      { property: "og:title", content: "Ultra Luxury Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Private aircraft, rare access and the finest camps East Africa has to offer.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="The pinnacle · No compromises"
      title="Ultra Luxury Safaris, without limits."
      intro="For travelers who want it all — the finest camps, the rarest access, private aircraft between destinations. This is safari at its most uncompromising, curated for those who refuse to choose between comfort and wilderness."
      heroImg={hero}
      ctaImg={img}
      trips={ultraLuxuryTrips}
      exploreHref="/tours?type=Private+tour"
      exploreLabel="Browse all trips"
      highlights={[
        {
          icon: Gem,
          title: "Exclusive access",
          body: "Stay in exceptional private conservancies and exclusive locations reserved for a more intimate safari experience.",
          img: ultra,
        },
        {
          icon: Plane,
          title: "Seamless travel",
          body: "Enjoy convenient light-aircraft transfers between luxury camps, maximizing your time in comfort throughout your journey.",
          img: ultraOne,
        },
        {
          icon: UtensilsCrossed,
          title: "Personalized service",
          body: "Experience dedicated butler service, private dining, and a carefully curated selection of premium wines during your stay.",
          img: ultraTwo,
        },
      ]}
      inclusions={[
        "2 nights accommodation in Nairobi on Bed & Breakfast",
        "3 nights accommodation in Loisaba on full board",
        "Domestic scheduled flights to and from Loisaba",
        "All airport pick up and drop off in Nairobi and Loisaba",
        "Shared game drives in 4x4 land cruisers",
        "One night game drive during your stay",
        "Guided walking safari with a professional guide",
        "2-hour guided horse or camel back safari",
        "Bush sundowner",
        "Bush breakfast or bush lunch",
        "Dinner at Carnivore Restaurant",
        "Anti-poaching sniffer dogs experience",
        "E-bikes (4 hrs max)",
        "Mountain biking, escorted (4 hrs max)",
        "All taxes",
      ]}
      exclusions={[
        "Extra meals and drinks",
        "International flights",
        "Any other item not mentioned above",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Arrival in Nairobi",
          body: "Met and assisted by our airport representatives on arrival, then transferred to Hemingways Hotel for an overnight stay.",
        },
        {
          day: "Day 2",
          title: "Fly to Loisaba Conservancy",
          body: "Transfer to Wilson Airport for your flight to Loisaba Conservancy. Check in, enjoy lunch, then an afternoon game drive. Dinner and overnight at Loisaba Tented Camp.",
        },
        {
          day: "Day 3",
          title: "Game drive, guided walk & night drive",
          body: "Breakfast followed by a morning game drive. Return to camp for lunch, then a 2-hour guided walk. In the evening, embark on a night game drive. Dinner and overnight at the camp.",
        },
        {
          day: "Day 4",
          title: "Horseback safari, bush lunch & sundowner",
          body: "Breakfast followed by a 2-hour guided horse or camel-back safari. Bush lunch, then an afternoon game drive, capped with an evening sundowner. Dinner and overnight at the camp.",
        },
        {
          day: "Day 5",
          title: "Fly back to Nairobi & Carnivore dinner",
          body: "Transfer to the airstrip for your flight back to Nairobi. Enjoy shopping and a city tour in the afternoon, followed by a sumptuous dinner at the Carnivore Restaurant. Drop-off at Hemingways Hotel for overnight.",
        },
        {
          day: "Day 6",
          title: "Departure",
          body: "After breakfast, check out and transfer to the airport for your flight back home.",
        },
      ]}
    />
  ),
});
