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
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import heroSafari from "@/assets/img.jpg";
import tourSerengeti from "@/assets/ultra3.jpg";
import tourLodge from "@/assets/spicefarm.jpg";
import tourGorilla from "@/assets/tanzania.jpg";
import ctaBalloon from "@/assets/romance2.jpg";
import on from "@/assets/volcano.jpg";
import drive from "@/assets/game-drives-2.jpg";
import driveC from "@/assets/luxury3.jpg";
import travel from "@/assets/home6.jpg";
import serengeti from "@/assets/blt 2.webp";
import tour from "@/assets/blt 3.webp";
import tor from "@/assets/experience.jpg";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Blue Lilac Tours & Travel" },
      {
        name: "description",
        content:
          "Blue Lilac Tours is a premier East African safari specialist crafting unforgettable wildlife and luxury travel experiences across Kenya, Tanzania, Uganda and Rwanda.",
      },
      { property: "og:title", content: "About Blue Lilac Tours" },
      {
        property: "og:description",
        content:
          "Meet the East African safari specialists behind Blue Lilac — handcrafted journeys, expert guides, and responsible travel.",
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
    <section className="relative flex h-[90vh] min-h-[520px] w-full items-center overflow-hidden">
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

const googleReviews = [
  {
    name: "Andrew King",
    stars: 5,
    tour: "Nairobi National Park Safari",
    text: "Our safari with Blue Lilac Tours and Travel was memorable. Our guide, Boniface, made every game drive exciting with his knowledge and great sense of humor. I recall watching a group of giraffes up close. Boniface shared fascinating facts, including that giraffes have the same number of neck vertebrae as humans, just seven, but each can be over 25 cm long. It is also interesting that the long tongues of giraffes help them reach thorny acacia leaves. Boniface knew exactly where to take us for the best views and patiently waited while we enjoyed the moment. Everything was well organized, from the drives to the accommodation. Blue Lilac gave us an authentic and memorable taste of East Africa. Highly recommended.",
  },
  {
    name: "Ariya Otieno",
    stars: 5,
    tour: "Lake Nakuru National Park Safari",
    text: "Blue Lilac Tours and Travel gave my family those moments you wish you could bottle and take home. Glenn, our driver, took us through Lake Nakuru National Park, where we came across rhinos in the wild. The kids went from excited whispers to sitting quietly with their eyes glued to the animals, intent on not missing any sight. Glenn handled the moment perfectly, keeping a respectful distance and giving us time to watch without rushing us along. What I appreciated most was how relaxed the whole experience felt. No pressure, no chasing sightings, just a beautifully paced family adventure.",
  },
  {
    name: "Martin Oloo",
    stars: 5,
    tour: "10-Day Group Safari",
    text: "I recently joined a 10-day group tour with Blue Lilac Tours and Travel, and it was honestly a memorable experience. The trip was well organized, and travelling as a group made the whole experience even more enjoyable. One of the biggest highlights was visiting Tsavo East National Park. The wildlife experience was incredible, especially getting to see elephants in their natural habitat. A special thank you to Faith, our tour consultant, for keeping everything well coordinated throughout the trip. Our tour guides, Boniface and Glenn, were also very friendly, helpful, and knowledgeable, making the safari comfortable and enjoyable. I would definitely recommend Blue Lilac Tours and Travel to anyone looking for a memorable wildlife and safari experience in Kenya.",
  },
  {
    name: "Hellen Long",
    stars: 5,
    tour: "Lake Naivasha & Tsavo East",
    text: "My experience with Blue Lilac Tours and Travel was honestly a great one. The trip to Lake Naivasha was beautiful, especially getting to see the flamingoes and the amazing scenery around the lake. We also visited Tsavo East National Park, and that was another incredible part of the trip. A big thank you to Edna, our tour consultant, for making the arrangements smooth and keeping everything well organized. Our tour guides, Boniface and Glenn, were also fantastic and made the trip enjoyable from start to finish. I would definitely recommend them to anyone looking to explore Kenya.",
  },
  {
    name: "Angeline Wanja",
    stars: 5,
    tour: "Nairobi National Park & Giraffe Centre",
    text: "We booked a full-day tour with Blue Lilac to Nairobi National Park and the Giraffe Centre, and it exceeded every expectation. At Nairobi National Park, our guide was incredibly knowledgeable — we spotted giraffes, zebras, and even a rhino, all with the city skyline in the background. The Giraffe Centre was the perfect follow-up; hand-feeding the Rothschild giraffes up close was a highlight for the whole family. What stood out most was how attentive and professional the team was throughout. Highly recommend Blue Lilac for a well-run, memorable safari experience!",
  },
  {
    name: "Isaac Biggedi",
    stars: 5,
    tour: "Weekend Safari Getaway",
    text: "I joined this trip saying it was just a weekend getaway. It was therapy disguised as a vacation. The vibes were 10/10 and the people turned into family before the trip was over. It was just laugh after laugh, good food, and great memories. Book that trip — life is not just a job. (Translated from Swahili)",
  },
  {
    name: "mlread22",
    stars: 5,
    tour: "6 Night / 7 Day Private Safari",
    text: "We just returned from a 6 night / 7 day private safari with Blue Lilac Tours, and the entire experience exceeded our expectations from start to finish. Edna was responsive, professional, and so easy to work with, and helped us craft an itinerary that was perfect for us. Once on safari, we were in the capable hands of our guide and driver, Boniface, who was knowledgeable, warm, and truly exceptional at spotting wildlife. Before booking, I received a quote from a 'luxury' safari company that was nearly twice the price, including two of the same lodges on our itinerary. We felt we received an exceptional, high-quality experience without paying an inflated premium simply for a label.",
  },
  {
    name: "Cherono Chepkwony",
    stars: 5,
    tour: "Zanzibar Getaway",
    text: "Such an amazing team you have at Blue Lilac. We enjoyed our stay in Zanzibar thanks to your planning. All the best!",
  },
  {
    name: "LuxeLoop Concierge",
    stars: 5,
    tour: "Nairobi National Park Safari",
    text: "Our experience exploring Nairobi National Park, the only park in the world situated within a city, was epic — an amazing itinerary from their tour consultants and a friendly, knowledgeable guide who ensured we saw all the Big 5 animals within the park. If you're visiting Kenya from outside, just reach out to them and they will help.",
  },
  {
    name: "Kariuki Kamau",
    stars: 5,
    tour: "Private Safari",
    text: "I loved how we were handled professionally throughout our itinerary.",
  },
  {
    name: "Kevin Okoth",
    stars: 5,
    tour: "Safari",
    text: "Amazing services offered from the staffs.",
  },
  {
    name: "Wayne Mugaditsi",
    stars: 5,
    tour: "Safari",
    text: "Obviously a five star review — the best travel agency right now in Kenya. Great customer care, fun destinations. A year of wonders without numbers.",
  },
  {
    name: "Monari Eugine",
    stars: 5,
    tour: "Safari",
    text: "We took so many pictures. It was a fantastic lifetime moment. I highly recommend this company — well organized and highly professional.",
  },
  {
    name: "Esther Muasya",
    stars: 5,
    tour: "Nairobi National Park Safari",
    text: "I had the best experience ever going to the Nairobi National Park with Blue Lilac Tours & Travel. The team was especially informative — I even got to know that we have the special five in addition to the Big Five. The driver maneuvered the trails with ease and expertise, and there were snacks on board to keep our sugar levels okay. I can't wait for my next adventure — indeed my best travel partner!",
  },
  {
    name: "William Mwendia",
    stars: 5,
    tour: "Safari",
    text: "Nice place to be, enjoy your African safaris and explore the world's exciting places with Blue Lilac Tours and Travel.",
  },
  {
    name: "Hilda Vuhasio",
    stars: 5,
    tour: "Nairobi National Park Safari",
    text: "Had an amazing experience visiting the Nairobi National Park courtesy of Blue Lilac Travels! Highly recommend and commend you guys on the good job.",
  },
  {
    name: "Vallary Kandie",
    stars: 5,
    tour: "Safari",
    text: "It was an amazing experience, their services were top notch. The tour guide was so good, making the experience unforgettable. I will definitely do it again.",
  },
  {
    name: "Edward Kinyanjui",
    stars: 5,
    tour: "Mombasa Trip",
    text: "Awesome experience with Blue Lilac Travels on my Mombasa trip.",
  },
  {
    name: "Andrew Oyileh",
    stars: 5,
    tour: "Safari",
    text: "It was nothing less of a beautiful experience.",
  },
  {
    name: "Wilfred Mwangi",
    stars: 5,
    tour: "Safari",
    text: "We had a wonderful experience with Blue Lilac. The team was very attentive to detail and their services were top notch. Looking forward to future expeditions with them.",
  },
  {
    name: "Jenifer Musyoka",
    stars: 5,
    tour: "Safari",
    text: "Loved your services. No inconveniences.",
  },
];

// Duplicate so the marquee loops seamlessly — same technique as the
// homepage's "Recognised by" logo strip and Google reviews marquee.
const marqueeGoogleReviews = [...googleReviews, ...googleReviews];

// This page's background is white and stays white — so instead of plain
// white cards on a white section (no contrast), each card cycles through a
// soft brand-tinted background instead of a single flat color.
const CARD_TINTS = ["bg-primary/5", "bg-accent/10", "bg-secondary"];

function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Loved by travellers</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Stories from the bush.</h2>
          <p className="mt-4 text-black">
            Real stories from travellers who explored East Africa with Blue Lilac Tours.
          </p>
        </div>

        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-marquee-slow items-stretch gap-4 md:gap-6">
            {marqueeGoogleReviews.map((r, i) => (
              <figure
                key={`${r.name}-${i}`}
                className={`flex h-72 w-[260px] shrink-0 flex-col rounded-3xl p-6 shadow-sm sm:w-[320px] md:w-[400px] md:p-8 lg:w-[460px] ${
                  CARD_TINTS[i % CARD_TINTS.length]
                }`}
              >
                <blockquote className="line-clamp-5 flex-1 text-sm leading-relaxed text-black/90">
                  {r.text}
                </blockquote>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-4 w-4 text-[#FBBC04] ${si < r.stars ? "fill-current" : "opacity-30"}`}
                    />
                  ))}
                </div>
                <figcaption className="mt-4 flex shrink-0 items-center gap-3 border-t border-black/10 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-base font-semibold text-primary shadow-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-black">{r.name}</div>
                    {r.tour && <div className="mt-0.5 text-xs text-black/60">{r.tour}</div>}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/CU7mfFq0YTw0EAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Read all our reviews <ArrowRight className="h-4 w-4" />
          </a>
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
