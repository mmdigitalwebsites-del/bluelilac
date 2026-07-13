import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  Star,
  Menu,
  Plus,
  Calendar,
  User,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useState, useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import tourSerengeti from "@/assets/tour-serengeti.jpg";
import tourKenya from "@/assets/kenya.png";
import tourTanzania from "@/assets/tanzania.jpg";
import tourUganda from "@/assets/gorrila.jpg";
import tourRwanda from "@/assets/rwanda.jpg";
import buffalo from "@/assets/buffalo.png";
import underStars from "@/assets/understars.png";
import tourBeach from "@/assets/beach.png";
import balloon from "@/assets/romance2.jpg";
import maasaiMara from "@/assets/wilderbeast.png";
import homepage from "@/assets/home.jpg";
import homepageOne from "@/assets/homepage8.jpg";
import homepageTwo from "@/assets/homepage5.jpg";
import homepageThree from "@/assets/home2.jpg";
import homepageFour from "@/assets/home3.jpg";
import homepageFive from "@/assets/home6.jpg";
import homepageSix from "@/assets/home7.jpg";
import homepageSeven from "@/assets/homepage1.jpg";
import homepageEight from "@/assets/home2.jpg";
import homepageNine from "@/assets/homepage4.jpg";
import hero from "@/assets/Luxury5.webp";
import hero1 from "@/assets/romantic.jpg";
import hero2 from "@/assets/ultralux.jpg";
import hero3 from "@/assets/honeymoon.jpg";
import hero4 from "@/assets/bird5.jpg";
import hero5 from "@/assets/moon.jpg";
import hero6 from "@/assets/wedding.jpg";
import hero7 from "@/assets/honeymon.jpg";
import trip from "@/assets/tripadvisor-icon.webp";
import kato from "@/assets/kato.jpg";
import tra from "@/assets/tra logo.png";
import safari from "@/assets/sb logo.png";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluelilac Tours — East Africa Safari Specialists" },
      {
        name: "description",
        content:
          "Premier safaris across Kenya, Tanzania, Uganda & Rwanda. Witness the Great Migration, track the Big Five, sleep under African skies.",
      },
      { property: "og:title", content: "Bluelilac Tours — East Africa Safari Specialists" },
      {
        property: "og:description",
        content: "Premier safaris across Kenya, Tanzania, Uganda & Rwanda.",
      },
    ],
  }),
  component: Index,
});

const tours = [
  {
    img: tourSerengeti,
    title: "13 Days Kenya & Tanzania Classic",
    country: "Kenya · Tanzania",
    days: "13 Days",
    price: "$4,250",
    slug: "13-days-kenya-tanzania-safari",
    description:
      "The complete East African circuit — Masai Mara, Amboseli, Ngorongoro Crater and the Serengeti, tracking the Big Five across two countries.",
  },
  {
    img: buffalo,
    title: "7 Days Tanzania Signature Safari",
    country: "Tanzania",
    days: "7 Days",
    price: "$3,950",
    slug: "7-days-tanzania-signature-safari",
    description:
      "Tarangire's baobabs, tree-climbing lions at Lake Manyara, and the Serengeti's endless plains, finishing on the Ngorongoro Crater floor.",
  },
  {
    img: underStars,
    title: "Luxury Serengeti Under the Stars",
    country: "Tanzania",
    days: "7 Days",
    price: "$3,600",
    slug: "5-days-tanzania-classic-safari",
    description:
      "Tanzania's most iconic wildlife circuit in five unhurried days — Serengeti predators and a Ngorongoro Crater descent, perfect for first-time safari travellers.",
  },
  {
    img: tourBeach,
    title: "Safari & Zanzibar Beach Escape",
    country: "Tanzania · Zanzibar",
    days: "10 Days",
    price: "$3,950",
    slug: "10-days-bush-and-beach-kenya",
    description:
      "Kenya's classic wildlife parks paired with the white sand and warm waters of Diani Beach — why choose between safari and the ocean?",
  },
  {
    img: tourKenya,
    title: "7 Days Kenya Classic Safari",
    country: "Kenya",
    days: "7 Days",
    price: "$2,450",
    slug: "7-days-kenya-classic-safari",
    description:
      "The classic week-long Kenyan safari — Amboseli's elephants under Kilimanjaro, Nakuru's flamingos, and the Big Five of the Maasai Mara.",
  },
  {
    img: maasaiMara,
    title: "3 Day Masai Mara at Governor's Camp",
    country: "Kenya",
    days: "3 Days",
    price: "$1,850",
    slug: "3-day-masai-mara-governors-camp",
    description:
      "A premium Mara experience based at the legendary Governor's Camp on the Mara River, with an optional sunrise balloon safari over the plains.",
  },
];

const heroSlides = [
  homepage,
  hero1,
  homepageOne,
  hero4,
  homepageTwo,
  hero3,
  homepageThree,
  hero2,
  homepageFour,
  hero,
  hero5,
  hero6,
  hero7,
];

const socials = [
  { Icon: Facebook, href: "https://www.facebook.com/bluelilactours/", title: "Facebook" },
  { Icon: Instagram, href: "https://www.instagram.com/bluelilactourstravel/", title: "Instagram" },
  { Icon: Twitter, href: "https://x.com/bluelilactours", title: "Twitter" },
];

const destinations = [
  { name: "Kenya", trips: "12 trips" },
  { name: "Tanzania", trips: "9 trips" },
  { name: "Uganda", trips: "6 trips" },
  { name: "Rwanda", trips: "4 trips" },
];

const blogPosts = BLOG_POSTS.slice(0, 3);

const faqs = [
  {
    q: "What is the best time of year to go on safari?",
    a: "June to October is dry season and prime game-viewing, while January–February is great for calving in the Serengeti. We tailor every itinerary to the experience you want most.",
  },
  {
    q: "Do I need a visa to visit Kenya, Tanzania, Uganda or Rwanda?",
    a: "Most travelers need an e-visa, and an East Africa Tourist Visa covers Kenya, Uganda and Rwanda on one document. We send detailed visa guidance after booking.",
  },
  {
    q: "What vaccinations are required?",
    a: "Yellow fever is required when arriving from a yellow-fever country, and routine vaccines plus anti-malarial prophylaxis are recommended. Always confirm with your doctor.",
  },
  {
    q: "Can you customise a private tour for my family or group?",
    a: "Absolutely — every Bluelilac itinerary is bespoke. Tell us your dates, interests and budget and we'll design something that's only yours.",
  },
  {
    q: "Is it safe to travel in East Africa?",
    a: "Yes. We use vetted vehicles, certified guides and 24/7 ground support on every journey. Our safety record is core to how we operate.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Trust />
      <WhyUs />
      <VideoSection />
      <FeaturedTours />
      <Destinations />
      <CtaBalloon />
      <Testimonials />
      <Faq />
      <Blog />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex items-center font-display text-2xl font-semibold text-white md:text-3xl"
        >
          Blue Lilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "#" },
            { label: "Destinations", href: "/destinations" },
            { label: "Tours", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Explore Our Tours", href: "/tours" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                i === 0 ? "bg-white text-foreground" : "text-white/90 hover:bg-white/10"
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
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((img, i) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
        <span className="mb-6 mt-32 xl:mt-0 md:mt-0 lg:mt-36 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
          Feel The Experience
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]">
          Discover East Africa's
          <br />
          Wild Beauty
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Witness the Great Migration. Track the Big Five. Sleep under African skies — with the
          people who know this land best.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/tours"
            className="group inline-flex items-center gap-3 rounded-full bg-accent py-4 pl-7 pr-3 text-sm font-medium text-accent-foreground transition hover:bg-secondary hover:text-secondary-foreground"
          >
            Explore Safaris
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground text-accent transition group-hover:bg-secondary-foreground group-hover:text-secondary">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      {/* social rail */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {socials.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.title}
            aria-label={s.title}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-white transition hover:bg-white/10"
          >
            <s.Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  const recognitions = [
    {
      abbr: "KATO",
      title: "Kenya Association of Tour Operators",
      logo: kato,
    },
    {
      abbr: "TRA",
      title: "Tourism Regulatory Authority",
      logo: tra,
    },
    {
      abbr: "TA",
      title: "TripAdvisor",
      logo: trip,
    },
    {
      abbr: "SB",
      title: "SafariBookings",
      logo: safari,
    },
  ];

  return (
    <section className="border-y border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-[11px] font-light uppercase tracking-[0.35em] text-muted-foreground">
          Recognised by
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {recognitions.map((r) => (
            <div key={r.abbr} className="flex items-center gap-2">
              <img
                src={r.logo}
                alt={r.title}
                className="h-12 w-12 shrink-0 object-contain md:h-16 md:w-16"
              />
              <p className="font-display text-sm text-foreground md:text-base">{r.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      img: homepageFive,
      title: "Crafted by locals",
      text: "Every itinerary is shaped by guides who grew up tracking these landscapes.",
    },
    {
      img: homepageSix,
      title: "Safety first",
      text: "Vetted vehicles, certified guides, 24/7 ground support on every journey.",
    },
    {
      img: homepageSeven,
      title: "Conservation-led",
      text: "A share of every booking funds community and wildlife initiatives.",
    },
    {
      img: homepageEight,
      title: "Award-winning",
      text: "Recognized by travel publications for excellence in East African safari design.",
    },
  ];
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mt-6">Why Blue lilac</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
              Journeys that connect you deeply with Africa.
            </h2>
            <p className="mt-6 max-w-lg text-black">
              Blue lilac Tours is a premier East African safari specialist creating unforgettable
              wildlife and luxury travel experiences across Kenya, Tanzania, Uganda, and Rwanda.
              From the vast plains of the Maasai Mara to the white beaches of Zanzibar, we design
              journeys that connect you deeply with Africa.
            </p>
            <p className="mt-4 max-w-lg text-black">
              Every itinerary is hand-crafted by guides who grew up in these landscapes, paired with
              private 4x4 game drives, boutique camps and tented suites under the stars.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
            >
              See our story <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@bluelilactours.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Contact us
              </a>
              <a
                href="tel:+254715405641"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> +254 715 405641
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ img, title, text }) => (
              <div
                key={title}
                className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-border p-6 transition hover:border-primary/40 hover:shadow-sm"
              >
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="relative flex h-full flex-col justify-end gap-2">
                  <h3 className="font-bold text-2xl text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/90">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedTours() {
  return (
    <section id="tours" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Hand-picked</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl">
              Our best-selling tours
            </h2>
          </div>
          <a
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            View all trips <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((t) => {
            const [dayNumber, ...dayRest] = t.days.split(" ");
            return (
              <article
                key={t.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <a href={`/tours/${t.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden sm:h-64 md:h-72 lg:h-80">
                    <img
                      src={t.img}
                      alt={t.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-primary/50 py-1.5 pl-1.5 pr-4 text-background backdrop-blur-md">
                      <span className="flex h-4 w-6 items-center justify-center text-sm font-semibold">
                        {dayNumber}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-background/80">
                        {dayRest.join(" ") || "Days"}
                      </span>
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg uppercase tracking-wide text-primary">
                      {t.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] uppercase tracking-wide text-black/80">
                      {t.country}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-black/90">{t.description}</p>

                    <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-black/80">From</p>
                        <p className="font-display text-xl text-foreground">{t.price}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                        View safari
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Where we go</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl">
            Four countries. One continent of wonder.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => {
            const imgs = [tourKenya, tourTanzania, tourUganda, tourRwanda];
            return (
              <a
                key={d.name}
                href="/destinations"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img
                  src={imgs[i]}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-3xl text-white">{d.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-sm text-white/80">
                    <span>{d.trips}</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBalloon() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={balloon}
        alt="Hot air balloon over Serengeti at sunrise"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-28 md:px-10 md:py-40">
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Limited dates
        </span>
        <h2 className="max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
          Float above the migration at sunrise.
        </h2>
        <p className="max-w-xl text-white/85">
          Add a sunrise hot-air-balloon flight over the Serengeti to any Tanzania itinerary —
          bookings open for the 2026 season.
        </p>
        <a
          href="/contact"
          className="group inline-flex items-center gap-3 rounded-full bg-accent py-4 pl-7 pr-3 text-sm font-medium text-accent-foreground transition hover:bg-secondary hover:text-secondary-foreground"
        >
          Plan my trip
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground text-accent transition group-hover:bg-secondary-foreground group-hover:text-secondary">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Marco",
      country: "🇳🇱 Netherlands",
      stars: 4,
      tour: "Lake Nakuru & Lake Naivasha Tour",
      date: "May 10, 2026",
      text: "I can really recommend Blue Lilac Tours. We were picked up in Nairobi and went on a tour to Lake Nakuru and Lake Naivasha. It was great to have a personal guide and a car, they were available during the whole period. Great gamedrive, sightseeing and biking tour.",
    },
    {
      name: "Chaida",
      country: "🇸🇳 Senegal",
      stars: 5,
      tour: "East Africa Safari",
      date: "Apr 6, 2026",
      text: "I had an amazing experience with Blue Lilac Tours and Travel. The service was 100% excellent from start to finish. The team was very attentive, responsive, and always ready to help with anything we needed. Everything was well organized, and I felt safe and well taken care of throughout the trip. I highly recommend this agency to anyone looking for a smooth, enjoyable, and memorable safari experience.",
    },
    {
      name: "Melanie R",
      country: "🇺🇸 United States",
      stars: 5,
      tour: "6 Night / 7 Day Private Safari",
      date: "Feb 22, 2026",
      text: "We just returned from a 6 night / 7 day private safari with Blue Lilac Tours, and the entire experience exceeded our expectations from start to finish. From the very first email, Edna was responsive, professional, and so easy to work with. Our guide Boniface was knowledgeable, warm, and truly exceptional at spotting wildlife. He went the extra mile to help us track down the Big Five.",
    },
    {
      name: "HANYONG LEE",
      country: "🇰🇷 South Korea",
      stars: 5,
      tour: "Kenya Safari",
      date: "Feb 19, 2026",
      text: "Blue Lilac Tours and Travel is a reliable, well-organized tour operator that provides professional service, smooth coordination, and a warm, customer-focused travel experience from start to finish.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
      style={{ backgroundImage: `url(${homepageNine})` }}
    >
      <div className="absolute inset-0 bg-background/10" />
      <div className="relative mx-auto max-w-9xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white">Traveler stories</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-primary">
              Our Happy Traveller
            </h2>
          </div>
          <a
            href="https://www.safaribookings.com/p6340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
          >
            Read all reviews <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < r.stars ? "fill-current" : "opacity-30"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-black/50">{r.date}</span>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-black">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium text-black">{r.name}</div>
                <div className="text-xs text-black/60">{r.country}</div>
                <div className="mt-1 text-xs text-primary">{r.tour}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.safaribookings.com/p6340"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-primary hover:text-primary-foreground"
          >
            Read all 16 reviews on SafariBookings <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Google Reviews */}
        <div className="mt-6 pt-6">
          <div className="mt-3">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div
              className="elfsight-app-b76e6c60-5394-4b10-8f9a-6bb82f10ea66"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return _Footer();
}

function VideoSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Watch the journey</p>
          <h2 className="mt-4 font-display text-4xl md:text-4xl lg:text-5xl">
            See East Africa in motion.
          </h2>
        </div>

        <div className="relative mx-auto mt-14 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/mbqCXpmo15A"
            title="East Africa Safari — Bluelilac Tours"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
      style={{ backgroundImage: `url(${homepageNine})` }}
    >
      <div className="absolute inset-0 bg-background/10" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white">FAQ</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl lg:text-5xl text-primary">
              Enjoy Our Best Quality Tour &amp; Experience
            </h2>
            <p className="mt-6 max-w-md text-white">
              Everything you wanted to know before stepping into the wild. Still curious? Reach out
              — we love a good travel question.
            </p>
            <a
              href="mailto:info@bluelilactours.com"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-4 pl-7 pr-3 text-sm font-medium text-accent-foreground transition hover:bg-secondary hover:text-secondary-foreground"
            >
              Ask a question
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground text-accent transition group-hover:bg-secondary-foreground group-hover:text-secondary">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`rounded-2xl border transition ${
                    isOpen ? "border-primary/40 bg-card shadow-sm" : "border-border bg-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-45 bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-black">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section
      id="blog"
      className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
      style={{ backgroundImage: `url(${homepageNine})` }}
    >
      <div className="absolute inset-0 bg-background/10" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white">From the journal</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-primary">
              Read Our Latest Travel Blog &amp; Tips Here
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1 hover:shadow-md"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {p.author}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-primary">
                  <Link to="/blog/$slug" params={{ slug: p.slug }}>
                    {p.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-black">{p.excerpt}</p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function _Footer() {
  return <SiteFooter />;
}
