import { __esm, __export, __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.5_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
function useMDXComponents(components) {
  const contextComponents = import_react.default.useContext(MDXContext)
  return import_react.default.useMemo(
    function () {
      if (typeof components === "function") {
        return components(contextComponents)
      }
      return { ...contextComponents, ...components }
    },
    [contextComponents, components]
  )
}
function MDXProvider(properties) {
  let allComponents
  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === "function"
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }
  return import_react.default.createElement(
    MDXContext.Provider,
    { value: allComponents },
    properties.children
  )
}
var import_react, emptyComponents, MDXContext
var init_lib = __esm({
  "node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.5_react@18.3.1/node_modules/@mdx-js/react/lib/index.js"() {
    import_react = __toESM(require_react(), 1)
    emptyComponents = {}
    MDXContext = import_react.default.createContext(emptyComponents)
  }
})

// node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.5_react@18.3.1/node_modules/@mdx-js/react/index.js
var react_exports = {}
__export(react_exports, {
  MDXProvider: () => MDXProvider,
  useMDXComponents: () => useMDXComponents
})
var init_react = __esm({
  "node_modules/.pnpm/@mdx-js+react@3.0.1_@types+react@18.3.5_react@18.3.1/node_modules/@mdx-js/react/index.js"() {
    init_lib()
  }
})

export { useMDXComponents, MDXProvider, react_exports, init_react }
//# sourceMappingURL=chunk-2LBHL5OH.js.map
