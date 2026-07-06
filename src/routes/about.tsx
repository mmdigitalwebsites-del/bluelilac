import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Phone,
  Menu,
  Compass,
  ShieldCheck,
  Heart,
  Leaf,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import heroSafari from "@/assets/img.jpg";
import tourSerengeti from "@/assets/tour-serengeti.jpg";
import tourLodge from "@/assets/understars.png";
import tourGorilla from "@/assets/buffalo.png";
import ctaBalloon from "@/assets/romance2.jpg";
import on from "@/assets/volcano.jpg";
import drive from "@/assets/game-drives-2.jpg";
import driveC from "@/assets/luxury3.jpg";
import travel from "@/assets/home6.jpg";
import serengeti from "@/assets/blt 2.jpg";
import tour from "@/assets/blt 3.jpg";
import tor from "@/assets/experience.jpg";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Bluelilac Tours & Travel" },
      {
        name: "description",
        content:
          "Bluelilac Tours is a premier East African safari specialist crafting unforgettable wildlife and luxury travel experiences across Kenya, Tanzania, Uganda and Rwanda.",
      },
      { property: "og:title", content: "About Bluelilac Tours" },
      {
        property: "og:description",
        content:
          "Meet the East African safari specialists behind Bluelilac — handcrafted journeys, expert guides, and responsible travel.",
      },
      { property: "og:image", content: heroSafari },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Story />
      <Values />
      <Stats />
      <Team />
      <Testimonials />
      <CtaPlan />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="font-display text-2xl font-semibold text-white md:text-3xl">
          Blue Lilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Explore", href: "/destinations" },
            { label: "Tours", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Explore Our Tours", href: "/tours" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.label === "About Us"
                  ? "bg-white text-foreground"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+254715405641"
          className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:scale-105 lg:flex"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <button
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md lg:hidden"
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex h-[70vh] min-h-[520px] w-full items-center overflow-hidden">
      <img
        src={heroSafari}
        alt="Sunset over the East African savannah"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <span className="mb-6 mt-32 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
          About Blue Lilac Tours
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
          East Africa, the way it was meant to be travelled.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Premier safari specialists creating unforgettable wildlife and luxury journeys across
          Kenya, Tanzania, Uganda and Rwanda.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Our story</p>
          <h2 className="font-display text-4xl md:text-5xl">Born of the bush, built on trust.</h2>
          <p className="text-black">
            Blue Lilac Tours and Travel is a premier East African safari specialist creating
            unforgettable wildlife and luxury travel experiences across Kenya, Tanzania, Uganda and
            Rwanda. From the vast plains of the Maasai Mara to the white beaches of Zanzibar, we
            design journeys that connect you deeply with Africa.
          </p>
          <p className="text-black">
            Every itinerary is hand-crafted by guides who grew up in these landscapes — the people,
            the parks and the pulse of East Africa. We pair private 4x4 game drives with intimate
            boutique camps, river-front lodges and tented suites under the stars.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              View our trips <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Talk to a safari designer
            </a>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={tourSerengeti}
              alt="Lion on the Serengeti plains"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img src={tourGorilla} alt="Gorilla in Bwindi" className="h-56 w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={tourLodge}
                alt="Safari lodge in the savannah"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    icon: Compass,
    title: "Tailor-made by experts",
    body: "Every Blue Lilac journey is bespoke — built around your pace, interests and dream sightings.",
    img: on,
  },
  {
    icon: ShieldCheck,
    title: "Trusted on the ground",
    body: "Licensed guides, private 4x4 vehicles, and 24/7 support from arrival to departure.",
    img: drive,
  },
  {
    icon: Heart,
    title: "Hand-picked stays",
    body: "From intimate tented camps to luxury lodges — only the places we'd send our own family.",
    img: driveC,
  },
  {
    icon: Leaf,
    title: "Travel that gives back",
    body: "We partner with community-owned conservancies that protect wildlife and uplift local communities.",
    img: travel,
  },
];

function Values() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Why book with Blue Lilac
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            A different kind of safari company.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-3xl transition hover:-translate-y-1"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/85">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { k: "10,000+", v: "Happy travellers" },
    { k: "500+", v: "Tours and Activities" },
    { k: "30+", v: "Destinations" },
    { k: "4.9★", v: "Average guest rating" },
  ];
  return (
    <section className="relative overflow-hidden py-20 text-background">
      <img src={on} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 md:px-10">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="font-display text-4xl md:text-5xl">{s.k}</div>
            <div className="mt-2 text-sm text-background/70">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const roles = [
    {
      role: "Safari designers",
      body: "Plan your itinerary to match your dates, pace and interests.",
      img: serengeti,
    },
    {
      role: "Driver-guides",
      body: "KPSGA-certified guides with a lifetime in the parks.",
      img: tour,
    },
    {
      role: "On-trip support",
      body: "A real human on WhatsApp, 24/7, from arrival to departure.",
      img: tor,
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              The people behind the journey
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Locals first. Travellers always.
            </h2>
          </div>
          <Users className="hidden h-10 w-10 text-primary md:block" />
        </div>
        <p className="mt-6 max-w-2xl text-black">
          Our team is based in Nairobi and on the ground across East Africa — safari designers,
          expert driver-guides, camp managers and conservation partners working together so you can
          simply show up and be in awe.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roles.map((t) => (
            <div
              key={t.role}
              className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-border p-8 transition hover:-translate-y-1"
            >
              <img
                src={t.img}
                alt={t.role}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
              <div className="relative flex h-full flex-col justify-end">
                <h3 className="font-display text-2xl text-white">{t.role}</h3>
                <p className="mt-3 text-sm text-white/85">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Loved by travellers</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Stories from the bush.</h2>
        <div className="mt-12">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-b76e6c60-5394-4b10-8f9a-6bb82f10ea66"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

function CtaPlan() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <img
        src={ctaBalloon}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Ready when you are</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Let's design your East African journey.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-black">
          Tell us your dates, interests and budget — we'll come back within 24 hours with a
          tailor-made proposal.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@bluelilactours.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> info@bluelilactours.com
          </a>
          <a
            href="tel:+254715405641"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> +254 715 405641
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
}
