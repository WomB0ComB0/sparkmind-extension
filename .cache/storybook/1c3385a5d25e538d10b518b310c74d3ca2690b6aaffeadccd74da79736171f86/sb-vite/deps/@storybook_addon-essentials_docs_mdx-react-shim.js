import { init_react, react_exports } from "./chunk-2LBHL5OH.js"

import "./chunk-VMU3GUP3.js"

import { __commonJS, __toCommonJS } from "./chunk-LK32TJAX.js"

// node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js
var require_mdx_react_shim = __commonJS({
  "node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"(
    exports,
    module
  ) {
    "use strict"
    var __defProp = Object.defineProperty
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor
    var __getOwnPropNames = Object.getOwnPropertyNames
    var __hasOwnProp = Object.prototype.hasOwnProperty
    var __copyProps = (to, from, except, desc) => {
      if ((from && typeof from == "object") || typeof from == "function")
        for (let key of __getOwnPropNames(from))
          !__hasOwnProp.call(to, key) &&
            key !== except &&
            __defProp(to, key, {
              get: () => from[key],
              enumerable:
                !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            })
      return to
    }
    var __reExport = (target, mod, secondTarget) => (
      __copyProps(target, mod, "default"),
      secondTarget && __copyProps(secondTarget, mod, "default")
    )
    var __toCommonJS2 = (mod) =>
      __copyProps(__defProp({}, "__esModule", { value: true }), mod)
    var mdx_react_shim_exports = {}
    module.exports = __toCommonJS2(mdx_react_shim_exports)
    __reExport(
      mdx_react_shim_exports,
      (init_react(), __toCommonJS(react_exports)),
      module.exports
    )
  }
})

// node_modules/.pnpm/@storybook+addon-essentials@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-essentials/dist/docs/mdx-react-shim.js
var require_mdx_react_shim2 = __commonJS({
  "node_modules/.pnpm/@storybook+addon-essentials@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-essentials/dist/docs/mdx-react-shim.js"(
    exports
  ) {
    var mdxReactShim = require_mdx_react_shim()
    Object.keys(mdxReactShim).forEach(function (k) {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function () {
            return mdxReactShim[k]
          }
        })
    })
  }
})
export default require_mdx_react_shim2()
//# sourceMappingURL=@storybook_addon-essentials_docs_mdx-react-shim.js.map
