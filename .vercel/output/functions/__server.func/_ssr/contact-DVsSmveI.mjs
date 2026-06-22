import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { g as heroSafari$1 } from "./router-DuwUHfAO.mjs";
import { u as underStars } from "./understars-Dqz7xyym.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { P as Phone, f as Mail, d as MapPin, e as Clock, A as ArrowRight, h as CircleCheckBig, i as Send, G as Globe, M as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCards, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactFormSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Location, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickHelp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[60vh] min-h-[480px] w-full items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroSafari$1, alt: "Sunset over the East African savannah", className: "absolute inset-0 h-full w-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-4xl font-display text-5xl leading-[1.05] text-white md:text-7xl", children: "Let's plan your African adventure." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85", children: "Have a question, a dream destination, or just curious about safaris? Our team is here to help — reach out any time." })
    ] })
  ] });
}
const CONTACT_DETAILS = [{
  icon: Phone,
  title: "Call us",
  lines: ["+254 715 405641", "+254 722 876543"],
  action: {
    label: "Call now",
    href: "tel:+254715405641"
  }
}, {
  icon: Mail,
  title: "Email us",
  lines: ["info@bluelilactours.com", "bookings@bluelilactours.com"],
  action: {
    label: "Send email",
    href: "mailto:info@bluelilactours.com"
  }
}, {
  icon: MapPin,
  title: "Visit us",
  lines: ["Rosslyn Square Mall", "Redhill Road, Nairobi, Kenya"],
  action: {
    label: "Get directions",
    href: "https://maps.app.goo.gl/apxoEcNJwKD7K1ECA"
  }
}, {
  icon: Clock,
  title: "Office hours",
  lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat – Sun: 9:00 AM – 4:00 PM"],
  action: null
}];
function ContactCards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Reach out" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "We're here to help." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-black", children: "Whether you're ready to book or just exploring ideas, our safari designers are available across phone, email and WhatsApp." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: CONTACT_DETAILS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-[#A40A09]/10 text-[#A40A09]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl text-[#A40A09]", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-1 text-sm text-black", children: c.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: line }, line)) }),
      c.action && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.action.href, target: c.action.href.startsWith("http") ? "_blank" : void 0, rel: c.action.href.startsWith("http") ? "noopener noreferrer" : void 0, className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#A40A09] transition hover:text-[#0C5DFF] hover:underline", children: [
        c.action.label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }, c.title)) })
  ] }) });
}
function ContactFormSection() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "",
    message: ""
  });
  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Send an enquiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Tell us about your dream trip." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-black", children: "Fill in the form and one of our safari designers will reply within 24 hours with a tailor-made proposal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Free itinerary design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-black", children: "No obligation — we craft a bespoke plan based on your dates and interests." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Expert advice within 24 hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-black", children: "Our Nairobi-based team knows every park, lodge and seasonal secret." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium", children: "Flexible booking & support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-black", children: "We adjust dates, camps and routes until it's perfect for you." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: underStars, alt: "Safari lodge in East Africa", className: "h-72 w-full object-cover" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-center justify-center py-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-8 w-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl", children: "Message sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-black", children: "Thank you for reaching out. We'll be in touch within 24 hours." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-foreground", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", type: "text", required: true, value: form.name, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Your name" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-foreground", children: "Email address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", name: "email", type: "email", required: true, value: form.email, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "you@example.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-foreground", children: "Phone number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", name: "phone", type: "tel", value: form.phone, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "+1 234 567 890" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "travelDate", className: "block text-sm font-medium text-foreground", children: "Preferred travel date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "travelDate", name: "travelDate", type: "date", value: form.travelDate, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "travellers", className: "block text-sm font-medium text-foreground", children: "Number of travellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "travellers", name: "travellers", value: form.travellers, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select number of travellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1", children: "1 traveller" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2", children: "2 travellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "3-5", children: "3 – 5 travellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6-10", children: "6 – 10 travellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "10+", children: "10+ travellers" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-foreground", children: "Your message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 5, required: true, value: form.message, onChange: handleChange, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Tell us about your dream safari, preferred destinations, budget, or any special requests..." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-[#0C5DFF] hover:text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
        " Send enquiry"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "We respect your privacy. Your details are never shared." })
    ] }) })
  ] }) });
}
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Find us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: "Our home is Nairobi." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-black", children: "Drop by our office at Rosslyn Square Mall, or simply reach out — we work with travellers from every corner of the world." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 overflow-hidden rounded-3xl border border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Bluelilac Tours Office Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891906813!2d36.7208769!3d-1.3028613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11724b53d399%3A0xe442cfdb1fdb8d2c!2sRosslyn%20Square%20Mall!5e0!3m2!1sen!2ske!4v1718880000000!5m2!1sen!2ske", width: "100%", height: "450", style: {
      border: 0
    }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "grayscale-[30%]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "mx-auto h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg", children: "Based in Nairobi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black", children: "At the heart of East Africa, with teams on the ground in Kenya, Tanzania, Uganda and Rwanda." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "mx-auto h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg", children: "WhatsApp Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black", children: "Message us anytime on WhatsApp for quick questions, itinerary tweaks or last-minute bookings." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 text-center shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mx-auto h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-lg", children: "24/7 On-Trip Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-black", children: "A dedicated support line for every traveller, from the moment you land to your departure." })
      ] })
    ] })
  ] }) });
}
function QuickHelp() {
  const items = [{
    q: "How quickly will you respond?",
    a: "We reply to all enquiries within 24 hours — usually much sooner. For urgent requests, call or WhatsApp us directly."
  }, {
    q: "Do I need to pay anything to get a proposal?",
    a: "No. Your first itinerary is completely free and comes with no obligation to book."
  }, {
    q: "Can you design a trip for a large group?",
    a: "Absolutely. We regularly organise safaris for families, corporate groups, and friends travelling together."
  }, {
    q: "What if I need to change my dates later?",
    a: "We offer flexible booking terms and will work with camps and lodges to reschedule where possible."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", style: {
    backgroundColor: "#e5f2fe"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-[#0C5DFF]", children: "Quick help" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-5xl text-foreground", children: "Common questions." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-2", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#0C5DFF]/15 bg-white/70 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg text-foreground", children: item.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-black/80", children: item.a })
    ] }, item.q)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {});
}
export {
  ContactPage as component
};
