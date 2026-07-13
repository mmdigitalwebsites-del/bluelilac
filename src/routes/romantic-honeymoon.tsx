import { createFileRoute } from "@tanstack/react-router";
import { Heart, Wine, Bed } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import { getTour } from "@/data/tours";
import hero from "@/assets/romance.jpeg";
import img from "@/assets/moon.jpg";
import romance from "@/assets/romance1.jpg";
import romanceOne from "@/assets/romance3.jpg";
import romanceTwo from "@/assets/ultra3.jpg";

const honeymoonSlugs = ["5-days-honeymoon-nairobi-samburu-ol-pejeta"];

const honeymoonTrips = honeymoonSlugs
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

export const Route = createFileRoute("/romantic-honeymoon")({
  head: () => ({
    meta: [
      { title: "Romantic Honeymoon Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Romantic East African honeymoons — private bush dinners, beach hideaways and unforgettable first chapters as newlyweds.",
      },
      { property: "og:title", content: "Romantic Honeymoon Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Bush-and-beach honeymoons across Kenya, Tanzania and Zanzibar.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Just married · Just for two"
      title="Begin together, somewhere wild."
      intro="Star-bathed bush dinners, sunrise balloon flights and the slow hush of waves on white sand. Honeymoons designed for two — quiet, beautiful, and entirely yours."
      heroImg={hero}
      ctaImg={img}
      trips={honeymoonTrips}
      exploreHref="/tours?q=honeymoon"
      exploreLabel="Browse all trips"
      highlights={[
        {
          icon: Heart,
          title: "Romantic inclusions",
          body: "Celebrate with curated touches designed for couples, from beautifully prepared suites to intimate evenings.",
          img: romance,
        },
        {
          icon: Wine,
          title: "Gourmet dining",
          body: "Enjoy exceptional cuisine, premium wines, and memorable dining throughout your stay.",
          img: romanceOne,
        },
        {
          icon: Bed,
          title: "Handpicked accommodation",
          body: "A seamless blend of luxury safari lodges and elegant beachfront retreats for an unforgettable honeymoon.",
          img: romanceTwo,
        },
      ]}
      inclusions={[
        "1 night accommodation in Nairobi",
        "2 nights accommodation in Samburu",
        "1 night accommodation in Ol Pejeta",
        "Meals on full board basis",
        "Return airport transfers",
        "Transport in a private 4x4 Land Cruiser",
        "Service of a professional safari guide",
        "Park entrance fees",
        "Unlimited game drives",
        "A celebratory private sundowner experience at Samburu",
        "Complimentary 30-minute spa treatment at Samburu",
        "À la carte dining experience at Ol Pejeta",
        "Special room décor arrangement at Ol Pejeta",
        "One premium complimentary bottle of wine at each hotel",
      ]}
      exclusions={["International flights", "Personal items"]}
      itinerary={[
        {
          day: "Day 1",
          title: "Arrival in Nairobi",
          body: "Warmly welcomed at JKIA and transferred to your hotel. Spend the rest of the day at leisure, relaxing or exploring the city at your own pace as you prepare for your romantic safari adventure.",
        },
        {
          day: "Day 2",
          title: "Nairobi – Samburu National Reserve",
          body: "After breakfast, depart in a private 4x4 Land Cruiser northward through Kenya's highlands to Samburu. Afternoon game drive to spot the Samburu Special Five — Grevy's zebra, reticulated giraffe, Somali ostrich, Beisa oryx and gerenuk. As the sun sets, enjoy a private celebratory sundowner created just for the two of you, followed by a complimentary 30-minute spa treatment.",
        },
        {
          day: "Day 3",
          title: "Full Day Samburu National Reserve",
          body: "A full day of unlimited game drives along the Ewaso Nyiro River, tracking elephants, lions, leopards, cheetahs and rare bird species. Relax at the lodge between drives and immerse yourselves in the beauty and tranquility of northern Kenya.",
        },
        {
          day: "Day 4",
          title: "Samburu – Ol Pejeta Conservancy",
          body: "After breakfast, travel to Ol Pejeta Conservancy — home to the Big Five and the last northern white rhinos on Earth. Your room will be dressed with a special romantic décor arrangement. In the evening, savour an exclusive à la carte dining experience and a complimentary bottle of premium wine.",
        },
        {
          day: "Day 5",
          title: "Ol Pejeta – Nairobi – Departure",
          body: "After breakfast, enjoy a final morning at leisure or an optional early game drive before the scenic drive back to Nairobi. Transfer to JKIA for your departure — the end of your unforgettable honeymoon safari.",
        },
      ]}
    />
  ),
});
