// Shared country page template. Each destination submenu page passes its
// content in as props so the layout stays consistent across Kenya, Tanzania,
// Zanzibar, Rwanda and Uganda.
import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export type Trip = {
  name: string;
  tagline: string;
  description: string;
  bestTime: string;
  img: string;
};

export type CountryPageProps = {
  country: string;
  heroImg: string;
  heroTagline: string;
  introTitle: string;
  introBody: string;
  intro2ndBody: string;
  bannerImg: string;
  bannerTitle: string;
  bannerBody: string;
  projectHeroImg: string;
  projectSecondaryImg: string;
  trips: Trip[];
};

export function CountryPage(props: CountryPageProps) {
  const {
    country,
    heroImg,
    heroTagline,
    introTitle,
    introBody,
    intro2ndBody,
    bannerImg,
    bannerTitle,
    bannerBody,
    projectHeroImg,
    projectSecondaryImg,
    trips,
  } = props;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO — image only, no overlay card */}
      <section className="relative w-full">
        <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden md:h-[85vh]">
          <img src={heroImg} alt={`${country} landscape`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-10 md:pb-16">
            <div className="mx-auto max-w-7xl">
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md">
                {country}
              </span>
              <p className="mt-4 max-w-xl font-display text-2xl italic leading-snug text-white md:text-3xl">
                {heroTagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN INTRO */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={projectSecondaryImg}
                alt={`${country} scenery`}
                className="h-[380px] w-full object-cover md:h-[460px]"
              />
            </div>
            <div className="mt-10 max-w-md">
              <p className="text-sm leading-relaxed text-muted-foreground">{intro2ndBody}</p>
              <Link
                to="/tours"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:bg-secondary"
              >
                Browse tours <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> {country} Journeys
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              {introTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{introBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 rounded-full bg-[#0C5DFF] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0847c9]"
              >
                Plan {country} trip <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Talk to a specialist
              </a>
            </div>

            <div className="mt-14 overflow-hidden rounded-2xl">
              <img
                src={projectHeroImg}
                alt={`${country} lodge`}
                className="h-[320px] w-full object-cover md:h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GREEN BANNER */}
      <section className="relative w-full">
        <div className="relative">
          <img src={bannerImg} alt="" className="h-[420px] w-full object-cover md:h-[480px]" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto flex w-full max-w-7xl justify-end px-6">
              <div className="max-w-xl rounded-2xl bg-[#1F4B3F] p-10 text-white shadow-2xl md:p-12">
                <h3 className="text-3xl font-semibold leading-tight md:text-4xl">{bannerTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/80">{bannerBody}</p>
                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1F4B3F] transition hover:bg-[#D0E0FF]"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIPS GRID */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Blue Lilac favourites
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {country} Trips
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <article
                key={t.name}
                className="group overflow-hidden rounded-2xl bg-card transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {country}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{t.name}</h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{t.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">Best time: {t.bestTime}</span>
                    <a
                      href="/tours"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#0C5DFF] transition hover:gap-2"
                    >
                      Tours <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="relative overflow-hidden py-14">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold text-white">Ready to see {country}?</h3>
            <p className="mt-1 text-sm text-white/75">
              Tell us your dates and interests — we'll craft the perfect itinerary.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:info@bluelilactours.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> info@bluelilactours.com
            </a>
            <a
              href="tel:+254715405641"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-foreground"
            >
              <Phone className="h-4 w-4" /> +254 715 405641
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
