import { j as jsxRuntimeExports } from "../_libs/react.mjs";
const SplitErrorComponent = ({
  error
}) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background p-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
  "Something went wrong: ",
  error.message
] }) });
export {
  SplitErrorComponent as errorComponent
};
