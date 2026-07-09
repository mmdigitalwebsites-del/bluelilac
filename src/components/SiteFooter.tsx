import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/bluelilactours/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/bluelilactourstravel/", Icon: Instagram },
  { label: "Twitter", href: "https://x.com/bluelilactours", Icon: Twitter },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#030464] text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <img
              src={logo}
              alt="Bluelilac Tours"
              className="h-60 w-auto mt-[-16%] brightness-0 invert"
            />
            <p className="mt-[-10%] max-w-sm text-sm text-[#B0C4DE]">
              East African safari specialists crafting unforgettable wildlife and luxury travel
              experiences.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#B0C4DE]">
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
            <h4 className="font-display text-xl font-bold text-[#B0C4DE]">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#B0C4DE]">
              <li>
                <a href="/tours" className="hover:text-white">
                  Our Safaris
                </a>
              </li>
              <li>
                <a href="/explore-our-tours   " className="hover:text-white">
                  Curated Experience
                </a>
              </li>
              <li>
                <a href="/destinations" className="hover:text-white">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-[#B0C4DE]">Connect</h4>
            <ul className="mt-4 space-y-3 text-sm text-[#B0C4DE]">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold text-[#B0C4DE]">Newsletter</h4>
            <p className="mt-4 text-sm text-[#B0C4DE]">
              Field notes from East Africa, twice a month.
            </p>
            <form className="mt-4 flex overflow-hidden rounded-full border border-primary">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-[#B0C4DE] focus:outline-none"
              />
              <button className="bg-primary px-5 text-sm font-medium text-white hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-xs text-[#B0C4DE] sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Blue Lilac Tours. All rights reserved.</span>
          <span>
            Made with care in Nairobi by{" "}
            <a
              href="https://mmdigitalmarketingkenya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#B0C4DE]/40 underline-offset-2 hover:text-white"
            >
              MM Digital Marketing Agency
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
