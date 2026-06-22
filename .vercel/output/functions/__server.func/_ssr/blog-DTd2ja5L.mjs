import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { c as ctaBalloon } from "./cta-balloon-COKT0Jd4.mjs";
import { B as BLOG_POSTS } from "./router-DuwUHfAO.mjs";
import { j as Calendar, U as User, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function BlogIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex h-[50vh] min-h-[380px] w-full items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaBalloon, alt: "", className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-6 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md", children: "From the journal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-7xl", children: "Safari guides & travel tips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-white/85", children: "Destination deep-dives, conservation stories, and practical advice from the people who plan East Africa's best safaris." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: BLOG_POSTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-md", children: p.category })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
            " ",
            p.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5" }),
            " ",
            p.author
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-xl leading-snug", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "hover:text-primary", children: p.title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-black", children: p.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary", children: [
          "Read more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }, p.slug)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BlogIndex as component
};
