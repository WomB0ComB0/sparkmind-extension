import "./chunk-EGRHWZRV.js"

import { require_global } from "./chunk-CYHXIIKI.js"
import { __toESM } from "./chunk-LK32TJAX.js"

// node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/preview.mjs
var import_global = __toESM(require_global(), 1)
var excludeTags = Object.entries(
  import_global.global.TAGS_OPTIONS ?? {}
).reduce((acc, entry) => {
  let [tag, option] = entry
  return option.excludeFromDocsStories && (acc[tag] = true), acc
}, {})
var parameters = {
  docs: {
    renderer: async () => {
      let { DocsRenderer } = await import("./DocsRenderer-PKQXORMH-NDDX43FS.js")
      return new DocsRenderer()
    },
    stories: {
      filter: (story) => {
        var _a
        return (
          (story.tags || []).filter((tag) => excludeTags[tag]).length === 0 &&
          !((_a = story.parameters.docs) == null ? void 0 : _a.disable)
        )
      }
    }
  }
}
export { parameters }
//# sourceMappingURL=@storybook_addon-essentials_docs_preview.js.map
