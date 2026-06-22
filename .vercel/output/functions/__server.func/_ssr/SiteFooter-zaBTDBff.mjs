import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as Mail, P as Phone, d as MapPin, F as Facebook, I as Instagram, T as Twitter } from "../_libs/lucide-react.mjs";
const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/bluelilactours/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/bluelilactourstravel/", Icon: Instagram },
  { label: "Twitter", href: "https://x.com/bluelilactours", Icon: Twitter }
];
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-4 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-semibold", children: "Bluelilac" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm text-background/70", children: "East African safari specialists crafting unforgettable wildlife and luxury travel experiences." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 text-sm text-background/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " info@bluelilactours.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " +254 715 405641"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://maps.app.goo.gl/apxoEcNJwKD7K1ECA",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-background",
                children: "Rosslyn Square Mall, Redhill Road, Nairobi, Kenya"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-background/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/tours", className: "hover:text-background", children: "Trips" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/destinations", className: "hover:text-background", children: "Destinations" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "hover:text-background", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "hover:text-background", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm text-background/70", children: SOCIALS.map(({ label, href, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 hover:text-background",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
              label
            ]
          }
        ) }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg", children: "Newsletter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-background/70", children: "Field notes from East Africa, twice a month." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-4 flex overflow-hidden rounded-full border border-background/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "Your email",
              className: "w-full bg-transparent px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90", children: "Join" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/60 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Bluelilac Tours. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Made with care in Nairobi." })
    ] })
  ] }) });
}
export {
  SiteFooter as S
};
