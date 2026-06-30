import { createFileRoute } from "@tanstack/react-router";
import { PenTool, MessageCircle, Calendar } from "lucide-react";
import { SafariCategoryPage } from "@/components/SafariCategoryPage";
import hero from "@/assets/safari.png";
import img from "@/assets/safari2.png";

export const Route = createFileRoute("/tailormade-safari")({
  head: () => ({
    meta: [
      { title: "Tailormade Safari — Bluelilac Tours" },
      {
        name: "description",
        content:
          "Your safari, designed around you. Bespoke East African itineraries built one conversation at a time.",
      },
      { property: "og:title", content: "Tailormade Safari — Bluelilac Tours" },
      {
        property: "og:description",
        content: "Bespoke East African safaris designed around your dates, pace and dreams.",
      },
    ],
  }),
  component: () => (
    <SafariCategoryPage
      eyebrow="Designed around you"
      title="A safari, shaped to your story."
      intro="No template. No off-the-shelf. We start with a conversation about how you like to travel — the pace, the people, the moments that matter — and design a journey only you could have taken."
      heroImg={hero}
      ctaImg={img}
      exploreHref="/contact"
      exploreLabel="Start the conversation"
      highlights={[
        {
          icon: MessageCircle,
          title: "We listen first",
          body: "A 30-minute call (or three) to understand the trip you actually want.",
        },
        {
          icon: PenTool,
          title: "We design",
          body: "A bespoke itinerary, drawn from 12+ years of Africa knowledge and trusted partners.",
        },
        {
          icon: Calendar,
          title: "We refine",
          body: "Unlimited revisions until every day feels right. Then we handle the rest.",
        },
      ]}
      inclusions={[
        "Complimentary design consultation by call or video",
        "Bespoke itinerary with photos, route map and detailed day notes",
        "Hand-picked camps, lodges and private villas",
        "Private guide, vehicle and host throughout the trip",
        "24/7 in-country support from arrival to departure",
      ]}
      itinerary={[
        {
          day: "Step 1",
          title: "Discovery call",
          body: "Tell us your dates, dreams, dietary needs and dealbreakers.",
        },
        {
          day: "Step 2",
          title: "First draft",
          body: "Within 72 hours we share a fully costed proposal with route, camps and rhythm.",
        },
        {
          day: "Step 3",
          title: "Refine together",
          body: "Iterate until every day feels like yours. Final quote locked, deposit secures the dates.",
        },
        {
          day: "Step 4",
          title: "Travel",
          body: "We sweat every detail. You arrive, look up at the sky and exhale.",
        },
      ]}
    />
  ),
});
