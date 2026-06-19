import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin, Star, Compass, Shield, Heart, Award, Menu, Play, Plus, Calendar, User } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-safari.jpg";
import tourSerengeti from "@/assets/tour-serengeti.jpg";
import tourGorilla from "@/assets/tour-gorilla.jpg";
import tourLodge from "@/assets/tour-lodge.jpg";
import tourZanzibar from "@/assets/tour-zanzibar.jpg";
import ctaBalloon from "@/assets/cta-balloon.jpg";
import { BLOG_POSTS } from "@/data/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bluelilac Tours — East Africa Safari Specialists" },
      { name: "description", content: "Premier safaris across Kenya, Tanzania, Uganda & Rwanda. Witness the Great Migration, track the Big Five, sleep under African skies." },
      { property: "og:title", content: "Bluelilac Tours — East Africa Safari Specialists" },
      { property: "og:description", content: "Premier safaris across Kenya, Tanzania, Uganda & Rwanda." },
    ],
  }),
  component: Index,
});

const tours = [
  { img: tourSerengeti, title: "13 Days Kenya & Tanzania Classic", country: "Kenya · Tanzania", days: "13 Days", price: "$4,250" },
  { img: tourGorilla, title: "Gorilla Trekking in Bwindi", country: "Uganda", days: "5 Days", price: "$2,800" },
  { img: tourLodge, title: "Luxury Serengeti Under the Stars", country: "Tanzania", days: "7 Days", price: "$3,600" },
  { img: tourZanzibar, title: "Safari & Zanzibar Beach Escape", country: "Tanzania · Zanzibar", days: "10 Days", price: "$3,950" },
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
        <a href="#" className="flex items-center font-display text-2xl font-semibold text-white md:text-3xl">
          Bluelilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "#" },
            { label: "Explore", href: "/destinations" },
            { label: "Trips", href: "/tours" },
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
        <button className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md lg:hidden" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/t6JDLYZxHzM?autoplay=1&mute=1&loop=1&playlist=t6JDLYZxHzM&controls=0&rel=0&playsinline=1"
          title="Hero video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '177.78vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
            border: 0,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
          Feel The Experience
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-[5.5rem]">
          Discover East Africa's<br />Wild Beauty
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Witness the Great Migration. Track the Big Five. Sleep under African skies — with the people who know this land best.
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
        {[
          { label: "F", href: "https://www.facebook.com/bluelilactours/", title: "Facebook" },
          { label: "X", href: "https://x.com/bluelilactours", title: "Twitter / X" },
          { label: "I", href: "https://www.instagram.com/bluelilactourstravel/", title: "Instagram" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.title}
            title={s.title}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm text-white backdrop-blur-md transition hover:bg-white hover:text-foreground"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-b border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by global travelers · Featured in
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-display text-2xl text-muted-foreground/70">
          <span>Condé Nast</span>
          <span>National Geographic</span>
          <span>Travel + Leisure</span>
          <span>Lonely Planet</span>
          <span>AFAR</span>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Compass, title: "Crafted by locals", text: "Every itinerary is shaped by guides who grew up tracking these landscapes." },
    { icon: Shield, title: "Safety first", text: "Vetted vehicles, certified guides, 24/7 ground support on every journey." },
    { icon: Heart, title: "Conservation-led", text: "A share of every booking funds community and wildlife initiatives." },
    { icon: Award, title: "Award-winning", text: "Recognized by travel publications for excellence in East African safari design." },
  ];
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Why Bluelilac</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Journeys that connect you deeply with Africa.
            </h2>
            <p className="mt-6 max-w-lg text-black">
              Bluelilac Tours is a premier East African safari specialist creating unforgettable wildlife and luxury travel experiences across Kenya, Tanzania, Uganda and Rwanda — from the vast plains of the Maasai Mara to the white beaches of Zanzibar.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:info@bluelilactours.com" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90">
                <Mail className="h-4 w-4" /> Contact us
              </a>
              <a href="tel:+254715405641" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary">
                <Phone className="h-4 w-4" /> +254 715 405641
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-black">{text}</p>
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
    <section id="tours" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Hand-picked</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">Our best-selling tours</h2>
          </div>
          <a href="/tours" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            View all trips <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((t) => (
            <article key={t.title} className="group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {t.country}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                  <span className="ml-1 text-xs text-black">(24)</span>
                </div>
                <h3 className="mt-2 font-display text-xl leading-snug text-black">{t.title}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-black">{t.days}</span>
                  <span className="font-display text-lg text-primary">{t.price}</span>
                </div>
              </div>
            </article>
          ))}
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">Five countries. One continent of wonder.</h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d, i) => {
            const imgs = [tourSerengeti, tourLodge, tourGorilla, tourZanzibar];
            return (
              <a key={d.name} href="/destinations" className="group relative block aspect-[3/4] overflow-hidden rounded-3xl">
                <img src={imgs[i]} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
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
      <img src={ctaBalloon} alt="Hot air balloon over Serengeti at sunrise" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-28 md:px-10 md:py-40">
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Limited dates
        </span>
        <h2 className="max-w-3xl font-display text-4xl leading-tight text-white md:text-6xl">
          Float above the migration at sunrise.
        </h2>
        <p className="max-w-xl text-white/85">
          Add a sunrise hot-air-balloon flight over the Serengeti to any Tanzania itinerary — bookings open for the 2026 season.
        </p>
        <a href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-accent py-4 pl-7 pr-3 text-sm font-medium text-accent-foreground transition hover:bg-secondary hover:text-secondary-foreground">
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
  const t = [
    { name: "Amelia R.", from: "London, UK", text: "From the moment we landed in Nairobi to our last sunset in Zanzibar, every detail was perfect. The guides spotted things we'd never have seen on our own." },
    { name: "David & Marta", from: "Madrid, ES", text: "The migration in the Mara was life-changing — and Bluelilac's team made the whole 12-day trip feel effortless and personal." },
    { name: "Hiroshi T.", from: "Tokyo, JP", text: "Gorilla trekking in Bwindi was the experience of a lifetime. Excellent planning, exceptional people." },
  ];
  return (
    <section className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Traveler stories</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">Memories worth keeping.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.map((q) => (
            <figure key={q.name} className="rounded-3xl border border-border bg-card p-8">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-black">
                "{q.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-medium text-black">{q.name}</div>
                <div className="text-sm text-black/70">{q.from}</div>
              </figcaption>
            </figure>
          ))}
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
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
            See East Africa in motion.
          </h2>
          <p className="mt-4 text-black">
            A short film from the field — replace with your own video whenever you're ready.
          </p>
        </div>

        <div className="relative mx-auto mt-14 aspect-video w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg">
          {/* Replace the <img> + overlay with a <video> tag or YouTube/Vimeo iframe when ready */}
          <img
            src={ctaBalloon}
            alt="Video placeholder — replace with your own footage"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <button
              type="button"
              aria-label="Play video"
              className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-foreground shadow-2xl transition hover:scale-105 hover:bg-white md:h-24 md:w-24"
            >
              <Play className="h-8 w-8 translate-x-0.5 fill-current md:h-10 md:w-10" />
            </button>
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/80">
              Video placeholder — add yours here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">FAQ</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Enjoy Our Best Quality Tour &amp; Experience
            </h2>
            <p className="mt-6 max-w-md text-black">
              Everything you wanted to know before stepping into the wild. Still curious? Reach out — we love a good travel question.
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
                        isOpen ? "rotate-45 bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-black">
                      {f.a}
                    </div>
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
    <section id="blog" className="bg-secondary/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">From the journal</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl">
              Read Our Latest Travel Blog &amp; Tips Here
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((p) => (
            <article key={p.slug} className="group overflow-hidden rounded-3xl bg-card transition hover:-translate-y-1 hover:shadow-md">
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
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {p.author}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-primary">
                  <Link to="/blog/$slug" params={{ slug: p.slug }}>{p.title}</Link>
                </h3>
                <p className="mt-3 text-sm text-black">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
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
