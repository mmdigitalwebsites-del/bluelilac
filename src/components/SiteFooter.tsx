import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/bluelilactours/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/bluelilactourstravel/", Icon: Instagram },
  { label: "Twitter", href: "https://x.com/bluelilactours", Icon: Twitter },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-secondary/95 text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <img src={logo} alt="Bluelilac Tours" className="h-60 w-auto mt-[-16%]" />
            <p className="mt-[-10%] max-w-sm text-sm text-black">
              East African safari specialists crafting unforgettable wildlife and luxury travel
              experiences.
            </p>
            <div className="mt-6 space-y-2 text-sm text-black">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@bluelilactours.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +254 715 405641
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/apxoEcNJwKD7K1ECA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background"
                >
                  Rosslyn Square Mall, Redhill Road, Nairobi, Kenya
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-black">
              <li>
                <a href="/tours" className="hover:text-black">
                  Tours
                </a>
              </li>
              <li>
                <a href="/destinations" className="hover:text-black">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-black">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-black">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold">Newsletter</h4>
            <p className="mt-4 text-sm text-black">Field notes from East Africa, twice a month.</p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-primary">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-black focus:outline-none"
              />
              <button className="bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-xs text-black sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Blue Lilac Tours. All rights reserved.</span>
          <span>Made with care in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
