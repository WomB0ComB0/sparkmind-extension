import { dedent } from "./chunk-7L5JYPT4.js"
import { require_global } from "./chunk-CYHXIIKI.js"
import { require_preview_api } from "./chunk-JQ2GWK6M.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import { require_client_logger } from "./chunk-UHU3NK7Q.js"

// node_modules/.pnpm/@storybook+addon-backgrounds@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-backgrounds/dist/preview.mjs
var import_preview_api = __toESM(require_preview_api(), 1)
var import_global = __toESM(require_global(), 1)
var import_client_logger = __toESM(require_client_logger(), 1)
var PARAM_KEY = "backgrounds"
var { document, window } = import_global.global
var isReduceMotionEnabled = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
var getBackgroundColorByName = (
  currentSelectedValue,
  backgrounds = [],
  defaultName
) => {
  if (currentSelectedValue === "transparent") return "transparent"
  if (
    backgrounds.find((background) => background.value === currentSelectedValue)
  )
    return currentSelectedValue
  let defaultBackground = backgrounds.find(
    (background) => background.name === defaultName
  )
  if (defaultBackground) return defaultBackground.value
  if (defaultName) {
    let availableColors = backgrounds
      .map((background) => background.name)
      .join(", ")
    import_client_logger.logger.warn(dedent`
        Backgrounds Addon: could not find the default color "${defaultName}".
        These are the available colors for your story based on your configuration:
        ${availableColors}.
      `)
  }
  return "transparent"
}
var clearStyles = (selector) => {
  ;(Array.isArray(selector) ? selector : [selector]).forEach(clearStyle)
}
var clearStyle = (selector) => {
  var _a
  let element = document.getElementById(selector)
  element &&
    ((_a = element.parentElement) == null ? void 0 : _a.removeChild(element))
}
var addGridStyle = (selector, css) => {
  let existingStyle = document.getElementById(selector)
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css)
  else {
    let style = document.createElement("style")
    style.setAttribute("id", selector),
      (style.innerHTML = css),
      document.head.appendChild(style)
  }
}
var addBackgroundStyle = (selector, css, storyId) => {
  var _a
  let existingStyle = document.getElementById(selector)
  if (existingStyle)
    existingStyle.innerHTML !== css && (existingStyle.innerHTML = css)
  else {
    let style = document.createElement("style")
    style.setAttribute("id", selector), (style.innerHTML = css)
    let gridStyleSelector = `addon-backgrounds-grid${storyId ? `-docs-${storyId}` : ""}`,
      existingGridStyle = document.getElementById(gridStyleSelector)
    existingGridStyle
      ? (_a = existingGridStyle.parentElement) == null
        ? void 0
        : _a.insertBefore(style, existingGridStyle)
      : document.head.appendChild(style)
  }
}
var withBackground = (StoryFn, context) => {
  var _a
  let { globals, parameters: parameters2 } = context,
    globalsBackgroundColor =
      (_a = globals[PARAM_KEY]) == null ? void 0 : _a.value,
    backgroundsConfig = parameters2[PARAM_KEY],
    selectedBackgroundColor = (0, import_preview_api.useMemo)(
      () =>
        backgroundsConfig.disable
          ? "transparent"
          : getBackgroundColorByName(
              globalsBackgroundColor,
              backgroundsConfig.values,
              backgroundsConfig.default
            ),
      [backgroundsConfig, globalsBackgroundColor]
    ),
    isActive = (0, import_preview_api.useMemo)(
      () =>
        selectedBackgroundColor && selectedBackgroundColor !== "transparent",
      [selectedBackgroundColor]
    ),
    selector =
      context.viewMode === "docs"
        ? `#anchor--${context.id} .docs-story`
        : ".sb-show-main",
    backgroundStyles = (0, import_preview_api.useMemo)(
      () => `
      ${selector} {
        background: ${selectedBackgroundColor} !important;
        ${isReduceMotionEnabled() ? "" : "transition: background-color 0.3s;"}
      }
    `,
      [selectedBackgroundColor, selector]
    )
  return (
    (0, import_preview_api.useEffect)(() => {
      let selectorId =
        context.viewMode === "docs"
          ? `addon-backgrounds-docs-${context.id}`
          : "addon-backgrounds-color"
      if (!isActive) {
        clearStyles(selectorId)
        return
      }
      addBackgroundStyle(
        selectorId,
        backgroundStyles,
        context.viewMode === "docs" ? context.id : null
      )
    }, [isActive, backgroundStyles, context]),
    StoryFn()
  )
}
var withGrid = (StoryFn, context) => {
  var _a
  let { globals, parameters: parameters2 } = context,
    gridParameters = parameters2[PARAM_KEY].grid,
    isActive =
      ((_a = globals[PARAM_KEY]) == null ? void 0 : _a.grid) === true &&
      gridParameters.disable !== true,
    { cellAmount, cellSize, opacity } = gridParameters,
    isInDocs = context.viewMode === "docs",
    defaultOffset =
      parameters2.layout === void 0 || parameters2.layout === "padded" ? 16 : 0,
    offsetX = gridParameters.offsetX ?? (isInDocs ? 20 : defaultOffset),
    offsetY = gridParameters.offsetY ?? (isInDocs ? 20 : defaultOffset),
    gridStyles = (0, import_preview_api.useMemo)(() => {
      let selector =
          context.viewMode === "docs"
            ? `#anchor--${context.id} .docs-story`
            : ".sb-show-main",
        backgroundSize = [
          `${cellSize * cellAmount}px ${cellSize * cellAmount}px`,
          `${cellSize * cellAmount}px ${cellSize * cellAmount}px`,
          `${cellSize}px ${cellSize}px`,
          `${cellSize}px ${cellSize}px`
        ].join(", ")
      return `
      ${selector} {
        background-size: ${backgroundSize} !important;
        background-position: ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px, ${offsetX}px ${offsetY}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${opacity / 2}) 1px, transparent 1px) !important;
      }
    `
    }, [cellSize])
  return (
    (0, import_preview_api.useEffect)(() => {
      let selectorId =
        context.viewMode === "docs"
          ? `addon-backgrounds-grid-docs-${context.id}`
          : "addon-backgrounds-grid"
      if (!isActive) {
        clearStyles(selectorId)
        return
      }
      addGridStyle(selectorId, gridStyles)
    }, [isActive, gridStyles, context]),
    StoryFn()
  )
}
var decorators = [withGrid, withBackground]
var parameters = {
  [PARAM_KEY]: {
    grid: { cellSize: 20, opacity: 0.5, cellAmount: 5 },
    values: [
      { name: "light", value: "#F8F8F8" },
      { name: "dark", value: "#333333" }
    ]
  }
}
var initialGlobals = { [PARAM_KEY]: null }
export { decorators, initialGlobals, parameters }
//# sourceMappingURL=@storybook_addon-essentials_backgrounds_preview.js.map
