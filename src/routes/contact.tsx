import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  Clock,
  Send,
  MessageCircle,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import heroSafari from "@/assets/experience.jpg";
import tourLodge from "@/assets/understars.png";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Bluelilac Tours & Travel" },
      {
        name: "description",
        content:
          "Get in touch with Bluelilac Tours. Plan your East African safari, ask questions, or request a tailor-made itinerary. We're here 24/7.",
      },
      { property: "og:title", content: "Contact Bluelilac Tours" },
      {
        property: "og:description",
        content:
          "Plan your East African safari with our team. Contact us for tailor-made itineraries and expert advice.",
      },
      { property: "og:image", content: heroSafari },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <ContactCards />
      <ContactFormSection />
      <Location />
      <QuickHelp />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="/" className="font-display text-2xl font-semibold text-white md:text-3xl">
          Bluelilac
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/10 px-2 py-2 backdrop-blur-md lg:flex">
          {[
            { label: "Home", href: "/" },
            { label: "Explore", href: "/destinations" },
            { label: "Trips", href: "/tours" },
            { label: "About Us", href: "/about" },
            { label: "Contact Us", href: "/contact" },
            { label: "Explore Our Tours", href: "/tours" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.label === "Contact Us"
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
    <section className="relative flex h-[60vh] min-h-[480px] w-full items-center overflow-hidden">
      <img
        src={heroSafari}
        alt="Sunset over the East African savannah"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 mt-44 text-sm text-white backdrop-blur-md">
          Contact Us
        </span>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
          Let's plan your African adventure.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Have a question, a dream destination, or just curious about safaris? Our team is here to
          help — reach out any time.
        </p>
      </div>
    </section>
  );
}

const CONTACT_DETAILS = [
  {
    icon: Phone,
    title: "Call us",
    lines: ["+254 715 405641", "+254 719 234041"],
    action: { label: "Call now", href: "tel:+254715405641" },
  },
  {
    icon: Mail,
    title: "Email us",
    lines: ["info@bluelilactours.com", "bookings@bluelilactours.com"],
    action: { label: "Send email", href: "mailto:info@bluelilactours.com" },
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["Rosslyn Square Mall", "Redhill Road, Nairobi, Kenya"],
    action: { label: "Get directions", href: "https://maps.app.goo.gl/apxoEcNJwKD7K1ECA" },
  },
  {
    icon: Clock,
    title: "Office hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat – Sun: 9:00 AM – 4:00 PM"],
    action: null,
  },
];

function ContactCards() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Reach out</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">We're here to help.</h2>
          <p className="mt-4 text-black">
            Whether you're ready to book or just exploring ideas, our safari designers are available
            across phone, email and WhatsApp.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_DETAILS.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A40A09]/10 text-[#A40A09]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-[#A40A09]">{c.title}</h3>
              <div className="mt-3 space-y-1 text-sm text-black">
                {c.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              {c.action && (
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#A40A09] transition hover:text-[#0C5DFF] hover:underline"
                >
                  {c.action.label} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Send an enquiry</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Tell us about your dream trip.
            </h2>
            <p className="mt-4 text-black">
              Fill in the form and one of our safari designers will reply within 24 hours with a
              tailor-made proposal.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Free itinerary design</h4>
                <p className="mt-1 text-sm text-black">
                  No obligation — we craft a bespoke plan based on your dates and interests.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Expert advice within 24 hours</h4>
                <p className="mt-1 text-sm text-black">
                  Our Nairobi-based team knows every park, lodge and seasonal secret.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Flexible booking & support</h4>
                <p className="mt-1 text-sm text-black">
                  We adjust dates, camps and routes until it's perfect for you.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={tourLodge}
              alt="Safari lodge in East Africa"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-6 font-display text-2xl">Message sent!</h3>
              <p className="mt-2 text-black">
                Thank you for reaching out. We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label htmlFor="travelDate" className="block text-sm font-medium text-foreground">
                    Preferred travel date
                  </label>
                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    value={form.travelDate}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="travellers" className="block text-sm font-medium text-foreground">
                  Number of travellers
                </label>
                <select
                  id="travellers"
                  name="travellers"
                  value={form.travellers}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select number of travellers</option>
                  <option value="1">1 traveller</option>
                  <option value="2">2 travellers</option>
                  <option value="3-5">3 – 5 travellers</option>
                  <option value="6-10">6 – 10 travellers</option>
                  <option value="10+">10+ travellers</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your dream safari, preferred destinations, budget, or any special requests..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-[#0C5DFF] hover:text-white"
              >
                <Send className="h-4 w-4" /> Send enquiry
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We respect your privacy. Your details are never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Find us</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Our home is Nairobi.</h2>
          <p className="mt-4 text-black">
            Drop by our office at Rosslyn Square Mall, or simply reach out — we work with travellers
            from every corner of the world.
          </p>
        </div>
        <div className="mt-14 overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            title="Bluelilac Tours Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891906813!2d36.7208769!3d-1.3028613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11724b53d399%3A0xe442cfdb1fdb8d2c!2sRosslyn%20Square%20Mall!5e0!3m2!1sen!2ske!4v1718880000000!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[30%]"
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
            <Globe className="mx-auto h-6 w-6 text-primary" />
            <h4 className="mt-4 font-display text-lg">Based in Nairobi</h4>
            <p className="mt-2 text-sm text-black">
              At the heart of East Africa, with teams on the ground in Kenya, Tanzania, Uganda and
              Rwanda.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
            <MessageCircle className="mx-auto h-6 w-6 text-primary" />
            <h4 className="mt-4 font-display text-lg">WhatsApp Support</h4>
            <p className="mt-2 text-sm text-black">
              Message us anytime on WhatsApp for quick questions, itinerary tweaks or last-minute
              bookings.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 text-center shadow-sm">
            <Phone className="mx-auto h-6 w-6 text-primary" />
            <h4 className="mt-4 font-display text-lg">24/7 On-Trip Support</h4>
            <p className="mt-2 text-sm text-black">
              A dedicated support line for every traveller, from the moment you land to your
              departure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickHelp() {
  const items = [
    {
      q: "How quickly will you respond?",
      a: "We reply to all enquiries within 24 hours — usually much sooner. For urgent requests, call or WhatsApp us directly.",
    },
    {
      q: "Do I need to pay anything to get a proposal?",
      a: "No. Your first itinerary is completely free and comes with no obligation to book.",
    },
    {
      q: "Can you design a trip for a large group?",
      a: "Absolutely. We regularly organise safaris for families, corporate groups, and friends travelling together.",
    },
    {
      q: "What if I need to change my dates later?",
      a: "We offer flexible booking terms and will work with camps and lodges to reschedule where possible.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#e5f2fe" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#0C5DFF]">Quick help</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-foreground">
            Common questions.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.q} className="rounded-2xl border border-[#0C5DFF]/15 bg-white/70 p-6">
              <h4 className="font-display text-lg text-foreground">{item.q}</h4>
              <p className="mt-3 text-sm text-black/80">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <SiteFooter />;
}
