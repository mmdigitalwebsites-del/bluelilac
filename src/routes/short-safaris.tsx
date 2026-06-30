import { createFileRoute } from "@tanstack/react-router";
import { Clock, Compass, Plane } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/shortsafari.png";
import img from "@/assets/shortsafari2.png";

export const Route = createFileRoute("/short-safaris")({
  head: () => ({
    meta: [
      { title: "Short Safaris — Bluelilac Tours" },
      {
        name: "description",
        content:
          "1–3 day East African safari getaways — perfect add-ons or quick weekend escapes into the wild.",
      },
      { property: "og:title", content: "Short Safaris — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Quick 1–3 day safari escapes from Nairobi and Arusha.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="1–3 day escapes"
      title="Short on time, long on wonder."
      intro="When a week is too much but a day-trip is too little. Tight, beautifully sequenced safaris designed for layovers, weekend escapes and add-ons to a longer journey."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/tours?duration=1%E2%80%933+days"
      exploreLabel="See short safaris"
      highlights={[
        {
          icon: Clock,
          title: "Time-efficient",
          body: "Hand-picked parks within an easy drive or short flight from Nairobi and Arusha.",
        },
        {
          icon: Compass,
          title: "High density",
          body: "Maximum wildlife per hour — the Mara, Nakuru, Amboseli and Tarangire all deliver fast.",
        },
        {
          icon: Plane,
          title: "Layover-friendly",
          body: "Easy add-ons to a longer trip or a stand-alone reset between meetings.",
        },
      ]}
      inclusions={[
        "Park fees and game drives in a 4x4 Land Cruiser",
        "Mid-range or premium lodge accommodation",
        "All meals on safari and bottled water",
        "Pick-up & drop-off from Nairobi, Arusha or JKIA airport",
      ]}
      itinerary={[
        {
          day: "Day 1",
          title: "Drive in & evening game drive",
          body: "Depart early from the city, arrive in time for lunch and a sunset game drive.",
        },
        {
          day: "Day 2",
          title: "Full-day safari",
          body: "Pre-dawn drive for the big cats, picnic lunch in the bush, second drive at golden hour.",
        },
        {
          day: "Day 3",
          title: "Final drive & return",
          body: "One last morning with the wildlife, then a scenic return to the city by mid-afternoon.",
        },
      ]}
    />
  ),
});
