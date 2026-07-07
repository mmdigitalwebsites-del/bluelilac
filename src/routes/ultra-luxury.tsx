import { createFileRoute } from "@tanstack/react-router";
import { Gem, Plane, UtensilsCrossed } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/ultra1.jpg";
import img from "@/assets/homepage2.jpg";
import ultra from "@/assets/ultra2.jpg";
import ultraOne from "@/assets/ultra3.jpg";
import ultraTwo from "@/assets/ultra.jpg";

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
          title: "Rarest access",
          body: "Private conservancies, limited-permit encounters and areas closed to standard safari traffic.",
          img: ultra,
        },
        {
          icon: Plane,
          title: "Fly between camps",
          body: "Light-aircraft transfers replace long road drives, so every hour goes to the bush, not the highway.",
          img: ultraOne,
        },
        {
          icon: UtensilsCrossed,
          title: "Private chef & cellar",
          body: "A dedicated chef, butler and curated wine cellar reserved for your party alone.",
          img: ultraTwo,
        },
      ]}
      inclusions={[
        "Private light-aircraft transfers between every destination",
        "The most exclusive camps and private-use conservancies in East Africa",
        "A dedicated chef, butler and vehicle for your party alone",
        "Rare experiences — private rhino tracking, night drives, off-limits conservancies",
        "24/7 concierge and a dedicated trip designer from first call to farewell",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Private arrival, Nairobi",
          body: "Met planeside and driven straight to a private Nairobi residence for an unhurried first night.",
        },
        {
          day: "Day 2–4",
          title: "Masai Mara, by air",
          body: "A light-aircraft transfer into a private conservancy, exclusive-use camp, and off-the-clock game drives no shared vehicle can access.",
        },
        {
          day: "Day 5–7",
          title: "Serengeti mobile luxury camp",
          body: "A private mobile camp repositioned with the migration, complete with a dedicated chef and your own dining tent.",
        },
        {
          day: "Day 8–9",
          title: "Ngorongoro Crater rim",
          body: "An exclusive crater-rim lodge, a private descent into the crater floor, and uninterrupted views at sunset.",
        },
        {
          day: "Day 10",
          title: "Private charter departure",
          body: "A final morning drive, then a private charter flight home — no queues, no transfers, no compromises.",
        },
      ]}
    />
  ),
});
