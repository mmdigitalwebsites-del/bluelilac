import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/destinations" },
  { label: "Trips", href: "/tours" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Explore Our Tours", href: "/explore-our-tours" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-9 xl:py-0 md:px-10">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Blue Lilac Tours"
            className="h-60 w-auto sm:h-8 md:h-10 lg:h-28 xl:h-56"
          />
        </Link>
        {/* <Link to="/" className="font-display text-2xl font-semibold text-white md:text-3xl">
          Blue Lilac
        </Link> */}

        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(item.href) ? "bg-white text-foreground" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
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
          className="rounded-full bg-white/10 p-2 text-white backdrop-blur-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed left-4 right-4 top-20 z-50 rounded-3xl border border-border bg-white p-4 shadow-2xl">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
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
