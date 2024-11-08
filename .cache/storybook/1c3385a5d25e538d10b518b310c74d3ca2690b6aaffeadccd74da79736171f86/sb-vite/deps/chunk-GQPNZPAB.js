import { require_global } from "./chunk-CYHXIIKI.js"
import { renderElement, unmountElement } from "./chunk-JWMAGIS2.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import { __export } from "./chunk-S4A62HXS.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/@storybook+react@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pre_7mirf7asnmawksgyi6qfk3htdi/node_modules/@storybook/react/dist/chunk-SXKPGB5T.mjs
var import_react = __toESM(require_react(), 1)
var import_global = __toESM(require_global(), 1)
var entry_preview_exports = {}
__export(entry_preview_exports, {
  mount: () => mount,
  parameters: () => parameters,
  render: () => render,
  renderToCanvas: () => renderToCanvas
})
var render = (args, context) => {
  let { id, component: Component2 } = context
  if (!Component2)
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
    )
  return import_react.default.createElement(Component2, { ...args })
}
var { FRAMEWORK_OPTIONS } = import_global.global
var ErrorBoundary = class extends import_react.Component {
  constructor() {
    super(...arguments)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidMount() {
    let { hasError } = this.state,
      { showMain } = this.props
    hasError || showMain()
  }
  componentDidCatch(err) {
    let { showException } = this.props
    showException(err)
  }
  render() {
    let { hasError } = this.state,
      { children } = this.props
    return hasError ? null : children
  }
}
var Wrapper = (
  FRAMEWORK_OPTIONS == null ? void 0 : FRAMEWORK_OPTIONS.strictMode
)
  ? import_react.StrictMode
  : import_react.Fragment
async function renderToCanvas(
  { storyContext, unboundStoryFn, showMain, showException, forceRemount },
  canvasElement
) {
  var _a, _b
  let content = import_react.default.createElement(
      ErrorBoundary,
      { showMain, showException },
      import_react.default.createElement(unboundStoryFn, { ...storyContext })
    ),
    element = Wrapper
      ? import_react.default.createElement(Wrapper, null, content)
      : content
  return (
    forceRemount && unmountElement(canvasElement),
    await renderElement(
      element,
      canvasElement,
      (_b =
        (_a = storyContext == null ? void 0 : storyContext.parameters) == null
          ? void 0
          : _a.react) == null
        ? void 0
        : _b.rootOptions
    ),
    () => unmountElement(canvasElement)
  )
}
var mount = (context) => async (ui) => (
  ui != null && (context.originalStoryFn = () => ui),
  await context.renderToCanvas(),
  context.canvas
)
var parameters = { renderer: "react" }

export { entry_preview_exports, render, renderToCanvas, mount, parameters }
//# sourceMappingURL=chunk-GQPNZPAB.js.map
