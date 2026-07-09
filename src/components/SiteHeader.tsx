import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import luxurySafari from "@/assets/Luxury5.webp";
import honeymoonSafari from "@/assets/romantic.jpg";
import weddingSafari from "@/assets/honeymoon.jpg";
import birdWatchers from "@/assets/bird5.jpg";
import ultraLuxury from "@/assets/ultralux.jpg";
import ken from "@/assets/kenya1.jpg";
import tanz from "@/assets/tanzania.jpg";
import rwanda from "@/assets/rwanda.jpg";
import uganda from "@/assets/uganda.jpg";
import zanzibar from "@/assets/zanzibar.jpg";

const TOUR_SUBMENU = [
  {
    label: "Luxury Safaris",
    href: "/luxury-safaris",
    img: luxurySafari,
    subtitle: "Boutique camps · Private guides",
  },
  {
    label: "Romantic Honeymoon Safari",
    href: "/romantic-honeymoon",
    img: honeymoonSafari,
    subtitle: "Sunset dinners · Secluded lodges",
  },
  {
    label: "Wedding Anniversaries",
    href: "/wedding-anniversaries",
    img: weddingSafari,
    subtitle: "Celebrate under African skies",
  },
  {
    label: "Bird Watchers",
    href: "/bird-watchers",
    img: birdWatchers,
    subtitle: "400+ species · Expert guides",
  },
  {
    label: "Ultra Luxury Experiences",
    href: "/ultra-luxury",
    img: ultraLuxury,
    subtitle: "The finest camps in East Africa",
  },
];

const DESTINATIONS_SUBMENU = [
  {
    label: "Kenya",
    href: "/destinations/kenya",
    img: ken,
    subtitle: "Maasai Mara · Amboseli · Samburu",
  },
  {
    label: "Tanzania",
    href: "/destinations/tanzania",
    img: tanz,
    subtitle: "Serengeti · Ngorongoro · Tarangire",
  },
  {
    label: "Uganda",
    href: "/destinations/uganda",
    img: uganda,
    subtitle: "Bwindi · Queen Elizabeth NP",
  },
  {
    label: "Rwanda",
    href: "/destinations/rwanda",
    img: rwanda,
    subtitle: "Volcanoes NP · Kigali",
  },
  {
    label: "Zanzibar",
    href: "/destinations/zanzibar",
    img: zanzibar,
    subtitle: "Stone Town · Nungwi Beaches",
  },
];

const NAV = [
  { label: "Home", href: "/", submenu: null, type: null },
  {
    label: "Destinations",
    href: "/destinations/kenya",
    submenu: DESTINATIONS_SUBMENU,
    type: "mega",
  },
  {
    label: "Curated Experiences",
    href: "/explore-our-tours",
    submenu: TOUR_SUBMENU,
    type: "mega",
  },
  { label: "Our Safaris", href: "/tours", submenu: null, type: null },
  { label: "About Us", href: "/about", submenu: null, type: null },
  { label: "Contact Us", href: "/contact", submenu: null, type: null },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="absolute top-8 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 pt-4 md:px-6">
        <div
          className={`flex h-[60px] items-center justify-between gap-4 rounded-full border backdrop-blur-3xl shadow-lg px-4 py-1 md:px-6 transition-colors duration-300 ${
            scrolled ? "border-white/40 bg-white/70" : "border-white/20 bg-white/10"
          }`}
        >
          {" "}
          {/* Logo — always visible, every screen size */}
          <Link
            to="/"
            aria-label="Blue Lilac Tours — Home"
            className="flex shrink-0 items-center gap-2 -my-16"
          >
            <img
              src={logo}
              alt="Blue Lilac Tours"
              className="h-44 w-auto md:h-40 lg:h-44 sm:h-44 xl:h-56"
            />
          </Link>
          {/* Centered nav links */}
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-white text-foreground"
                      : scrolled
                        ? "text-foreground hover:bg-black/5"
                        : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        openSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.submenu && openSubmenu === item.label && item.type === "list" && (
                  <div className="absolute left-0 top-full z-50 pt-3">
                    <div className="min-w-[200px] overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-5 py-3 text-sm text-foreground transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {item.submenu && openSubmenu === item.label && item.type === "mega" && (
                  <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                    <div className="w-[900px] rounded-2xl border border-border bg-white p-6 shadow-2xl">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        Explore East Africa
                      </p>
                      <div className="mt-4 grid grid-cols-5 gap-3">
                        {item.submenu.map((d) => (
                          <a
                            key={d.label}
                            href={d.href}
                            className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
                          >
                            <img
                              src={d.img}
                              alt={d.label}
                              loading="lazy"
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                            {item.label !== "Curated Experiences" && (
                              <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wide text-foreground">
                                East Africa
                              </span>
                            )}
                            <div className="absolute bottom-0 left-0 right-0 p-2.5">
                              <p className="font-display text-sm font-semibold leading-tight text-white">
                                {d.label}
                              </p>
                              <p className="mt-0.5 text-[8px] uppercase leading-tight tracking-wide text-white/75">
                                {d.subtitle}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                      {item.label !== "Curated Experiences" && (
                        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                          <Link
                            to="/destinations"
                            className="text-xs font-medium uppercase tracking-wide text-primary hover:text-foreground"
                          >
                            All destinations →
                          </Link>
                          <span className="text-xs text-muted-foreground">
                            Bespoke itineraries across East Africa
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href="tel:+254715405641"
            className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:scale-105 hover:bg-[#D0E0FF] hover:text-[#0C5DFF] lg:flex"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-white/10 p-2 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed left-4 right-4 top-20 z-50 max-h-[80vh] overflow-y-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileSubmenu(openMobileSubmenu === item.label ? null : item.label)
                        }
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          isActive(item.href)
                            ? "bg-[#FFFFFF] text-[#0C5DFF]"
                            : "text-foreground hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileSubmenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileSubmenu === item.label && item.type === "mega" && (
                        <div className="mt-1 ml-2 grid grid-cols-3 gap-2 pb-2">
                          {item.submenu.map((d) => (
                            <a
                              key={d.label}
                              href={d.href}
                              onClick={() => setOpen(false)}
                              className="group relative block aspect-[3/4] overflow-hidden rounded-xl"
                            >
                              <img
                                src={d.img}
                                alt={d.label}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                              <span className="absolute bottom-1.5 left-1.5 text-xs font-semibold text-white">
                                {d.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                      {openMobileSubmenu === item.label && item.type === "list" && (
                        <ul className="mt-1 ml-4 flex flex-col gap-1">
                          {item.submenu.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-4 py-2.5 text-sm text-foreground hover:bg-[#D0E0FF] hover:text-[#0C5DFF] transition"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive(item.href)
                          ? "bg-[#D0E0FF] text-[#0C5DFF]"
                          : "text-foreground hover:bg-[#D0E0FF] hover:text-[#0C5DFF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="tel:+254715405641"
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-[#0C5DFF]"
            >
              <Phone className="h-4 w-4" /> +254 715 405641
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
