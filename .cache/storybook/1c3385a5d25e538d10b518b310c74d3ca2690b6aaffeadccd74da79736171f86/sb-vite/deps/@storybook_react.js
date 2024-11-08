import { entry_preview_exports } from "./chunk-GQPNZPAB.js"
import { require_preview_errors } from "./chunk-Y6PDBUCS.js"

import "./chunk-JWMAGIS2.js"
import "./chunk-S4A62HXS.js"

import { require_global } from "./chunk-CYHXIIKI.js"
import { require_preview_api } from "./chunk-JQ2GWK6M.js"

import "./chunk-GDNJB6U6.js"
import "./chunk-YGZ2ZWFG.js"

import { __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/@storybook+react@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pre_7mirf7asnmawksgyi6qfk3htdi/node_modules/@storybook/react/dist/index.mjs
var import_global = __toESM(require_global(), 1)
var import_preview_api = __toESM(require_preview_api(), 1)
var import_preview_errors = __toESM(require_preview_errors(), 1)
var import_react = __toESM(require_react(), 1)
var { window: globalWindow } = import_global.global
globalWindow && (globalWindow.STORYBOOK_ENV = "react")
function setProjectAnnotations(projectAnnotations) {
  return (0, import_preview_api.setProjectAnnotations)(projectAnnotations)
}
var INTERNAL_DEFAULT_PROJECT_ANNOTATIONS = {
  ...entry_preview_exports,
  renderToCanvas: (renderContext, canvasElement) => {
    if (renderContext.storyContext.testingLibraryRender == null)
      throw new import_preview_errors.TestingLibraryMustBeConfiguredError()
    let {
        storyContext: {
          context,
          unboundStoryFn: Story,
          testingLibraryRender: render
        }
      } = renderContext,
      { unmount } = render(
        import_react.default.createElement(Story, { ...context }),
        { container: context.canvasElement }
      )
    return unmount
  }
}
function composeStory(
  story,
  componentAnnotations,
  projectAnnotations,
  exportsName
) {
  return (0, import_preview_api.composeStory)(
    story,
    componentAnnotations,
    projectAnnotations,
    INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
    exportsName
  )
}
function composeStories(csfExports, projectAnnotations) {
  return (0, import_preview_api.composeStories)(
    csfExports,
    projectAnnotations,
    composeStory
  )
}
var _a
typeof module < "u" &&
  ((_a = module == null ? void 0 : module.hot) == null ? void 0 : _a.decline())
export {
  INTERNAL_DEFAULT_PROJECT_ANNOTATIONS,
  composeStories,
  composeStory,
  setProjectAnnotations
}
//# sourceMappingURL=@storybook_react.js.map
