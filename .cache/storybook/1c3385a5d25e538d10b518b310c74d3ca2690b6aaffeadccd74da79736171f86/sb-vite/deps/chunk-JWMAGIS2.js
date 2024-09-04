import { require_client } from "./chunk-GDNJB6U6.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/@storybook+react-dom-shim@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@_eyt3ixikr2qw3qx4mimshhb7vq/node_modules/@storybook/react-dom-shim/dist/react-18.mjs
var import_react = __toESM(require_react(), 1)
var import_client = __toESM(require_client(), 1)
var nodes = /* @__PURE__ */ new Map()
var WithCallback = ({ callback, children }) => {
  const once = (0, import_react.useRef)()
  return (
    (0, import_react.useLayoutEffect)(() => {
      once.current !== callback && ((once.current = callback), callback())
    }, [callback]),
    children
  )
}
var renderElement = async (node, el, rootOptions) => {
  const root = await getReactRoot(el, rootOptions)
  return new Promise((resolve) => {
    root.render(
      import_react.default.createElement(
        WithCallback,
        { callback: () => resolve(null) },
        node
      )
    )
  })
}
var unmountElement = (el, shouldUseNewRootApi) => {
  const root = nodes.get(el)
  root && (root.unmount(), nodes.delete(el))
}
var getReactRoot = async (el, rootOptions) => {
  let root = nodes.get(el)
  return (
    root ||
      ((root = import_client.default.createRoot(el, rootOptions)),
      nodes.set(el, root)),
    root
  )
}

export { renderElement, unmountElement }
//# sourceMappingURL=chunk-JWMAGIS2.js.map
