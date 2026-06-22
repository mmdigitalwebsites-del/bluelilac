import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader } from "./SiteHeader-B3qzV-0i.mjs";
import { S as SiteFooter } from "./SiteFooter-zaBTDBff.mjs";
import { p as ArrowLeft } from "../_libs/lucide-react.mjs";
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
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl", children: "Post not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "mt-6 inline-flex items-center gap-2 text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
      " Back to the blog"
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
