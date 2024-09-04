import { __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/aria-hidden@1.2.4/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = (originalTarget) => {
  if (typeof document === "undefined") {
    return null
  }
  var sampleTarget = Array.isArray(originalTarget)
    ? originalTarget[0]
    : originalTarget
  return sampleTarget.ownerDocument.body
}
var counterMap = /* @__PURE__ */ new WeakMap()
var uncontrolledNodes = /* @__PURE__ */ new WeakMap()
var markerMap = {}
var lockCount = 0
var unwrapHost = (node) => node && (node.host || unwrapHost(node.parentNode))
var correctTargets = (parent, targets) =>
  targets
    .map((target) => {
      if (parent.contains(target)) {
        return target
      }
      var correctedTarget = unwrapHost(target)
      if (correctedTarget && parent.contains(correctedTarget)) {
        return correctedTarget
      }
      console.error(
        "aria-hidden",
        target,
        "in not contained inside",
        parent,
        ". Doing nothing"
      )
      return null
    })
    .filter((x) => Boolean(x))
var applyAttributeToOthers = (
  originalTarget,
  parentNode,
  markerName,
  controlAttribute
) => {
  var targets = correctTargets(
    parentNode,
    Array.isArray(originalTarget) ? originalTarget : [originalTarget]
  )
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap()
  }
  var markerCounter = markerMap[markerName]
  var hiddenNodes = []
  var elementsToKeep = /* @__PURE__ */ new Set()
  var elementsToStop = new Set(targets)
  var keep = (el) => {
    if (!el || elementsToKeep.has(el)) {
      return
    }
    elementsToKeep.add(el)
    keep(el.parentNode)
  }
  targets.forEach(keep)
  var deep = (parent) => {
    if (!parent || elementsToStop.has(parent)) {
      return
    }
    Array.prototype.forEach.call(parent.children, (node) => {
      if (elementsToKeep.has(node)) {
        deep(node)
      } else {
        try {
          var attr = node.getAttribute(controlAttribute)
          var alreadyHidden = attr !== null && attr !== "false"
          var counterValue = (counterMap.get(node) || 0) + 1
          var markerValue = (markerCounter.get(node) || 0) + 1
          counterMap.set(node, counterValue)
          markerCounter.set(node, markerValue)
          hiddenNodes.push(node)
          if (counterValue === 1 && alreadyHidden) {
            uncontrolledNodes.set(node, true)
          }
          if (markerValue === 1) {
            node.setAttribute(markerName, "true")
          }
          if (!alreadyHidden) {
            node.setAttribute(controlAttribute, "true")
          }
        } catch (e) {
          console.error("aria-hidden: cannot operate on ", node, e)
        }
      }
    })
  }
  deep(parentNode)
  elementsToKeep.clear()
  lockCount++
  return () => {
    hiddenNodes.forEach((node) => {
      var counterValue = counterMap.get(node) - 1
      var markerValue = markerCounter.get(node) - 1
      counterMap.set(node, counterValue)
      markerCounter.set(node, markerValue)
      if (!counterValue) {
        if (!uncontrolledNodes.has(node)) {
          node.removeAttribute(controlAttribute)
        }
        uncontrolledNodes.delete(node)
      }
      if (!markerValue) {
        node.removeAttribute(markerName)
      }
    })
    lockCount--
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap()
      counterMap = /* @__PURE__ */ new WeakMap()
      uncontrolledNodes = /* @__PURE__ */ new WeakMap()
      markerMap = {}
    }
  }
}
var hideOthers = (originalTarget, parentNode, markerName) => {
  if (markerName === void 0) {
    markerName = "data-aria-hidden"
  }
  var targets = Array.from(
    Array.isArray(originalTarget) ? originalTarget : [originalTarget]
  )
  var activeParentNode = parentNode || getDefaultParent(originalTarget)
  if (!activeParentNode) {
    return () => null
  }
  targets.push.apply(
    targets,
    Array.from(activeParentNode.querySelectorAll("[aria-live]"))
  )
  return applyAttributeToOthers(
    targets,
    activeParentNode,
    markerName,
    "aria-hidden"
  )
}

// node_modules/.pnpm/tslib@2.7.0/node_modules/tslib/tslib.es6.mjs
var __assign = function () {
  __assign =
    Object.assign ||
    function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i]
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
      }
      return t
    }
  return __assign.apply(this, arguments)
}
function __rest(s, e) {
  var t = {}
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p]
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]]
    }
  return t
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i)
        ar[i] = from[i]
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from))
}

// node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position"
var fullWidthClassName = "width-before-scroll-bar"
var noScrollbarsClassName = "with-scroll-bars-hidden"
var removedBarSizeVariable = "--removed-body-scroll-bar-size"

// node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.3.5_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require_react())

// node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.3.5_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value)
  } else if (ref) {
    ref.current = value
  }
  return ref
}

// node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.3.5_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = __toESM(require_react())
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(() => ({
    // value
    value: initialValue,
    // last callback
    callback,
    // "memoized" public interface
    facade: {
      get current() {
        return ref.value
      },
      set current(value) {
        var last = ref.value
        if (last !== value) {
          ref.value = value
          ref.callback(value, last)
        }
      }
    }
  }))[0]
  ref.callback = callback
  return ref.facade
}

// node_modules/.pnpm/use-callback-ref@1.3.2_@types+react@18.3.5_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect
var currentValues = /* @__PURE__ */ new WeakMap()
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, (newValue) =>
    refs.forEach((ref) => assignRef(ref, newValue))
  )
  useIsomorphicLayoutEffect(() => {
    var oldValue = currentValues.get(callbackRef)
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue)
      var nextRefs_1 = new Set(refs)
      var current_1 = callbackRef.current
      prevRefs_1.forEach((ref) => {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null)
        }
      })
      nextRefs_1.forEach((ref) => {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1)
        }
      })
    }
    currentValues.set(callbackRef, refs)
  }, [refs])
  return callbackRef
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.5_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
var React2 = __toESM(require_react())
var SideCar = (_a) => {
  var sideCar = _a.sideCar,
    rest = __rest(_a, ["sideCar"])
  if (!sideCar) {
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    )
  }
  var Target = sideCar.read()
  if (!Target) {
    throw new Error("Sidecar medium not found")
  }
  return React2.createElement(Target, __assign({}, rest))
}
SideCar.isSideCarExport = true
function exportSidecar(medium, exported) {
  medium.useMedium(exported)
  return SideCar
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.5_react@18.3.1/node_modules/use-sidecar/dist/es2015/hoc.js
var React3 = __toESM(require_react())

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.5_react@18.3.1/node_modules/use-sidecar/dist/es2015/hook.js
var import_react2 = __toESM(require_react())

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.5_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
  return a
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI
  }
  var buffer = []
  var assigned = false
  var medium = {
    read: () => {
      if (assigned) {
        throw new Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
        )
      }
      if (buffer.length) {
        return buffer[buffer.length - 1]
      }
      return defaults
    },
    useMedium: (data) => {
      var item = middleware(data, assigned)
      buffer.push(item)
      return () => {
        buffer = buffer.filter((x) => x !== item)
      }
    },
    assignSyncMedium: (cb) => {
      assigned = true
      while (buffer.length) {
        var cbs = buffer
        buffer = []
        cbs.forEach(cb)
      }
      buffer = {
        push: (x) => cb(x),
        filter: () => buffer
      }
    },
    assignMedium: (cb) => {
      assigned = true
      var pendingQueue = []
      if (buffer.length) {
        var cbs = buffer
        buffer = []
        cbs.forEach(cb)
        pendingQueue = buffer
      }
      var executeQueue = () => {
        var cbs2 = pendingQueue
        pendingQueue = []
        cbs2.forEach(cb)
      }
      var cycle = () => Promise.resolve().then(executeQueue)
      cycle()
      buffer = {
        push: (x) => {
          pendingQueue.push(x)
          cycle()
        },
        filter: (filter) => {
          pendingQueue = pendingQueue.filter(filter)
          return buffer
        }
      }
    }
  }
  return medium
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {}
  }
  var medium = innerCreateMedium(null)
  medium.options = __assign({ async: true, ssr: false }, options)
  return medium
}

// node_modules/.pnpm/use-sidecar@1.1.2_@types+react@18.3.5_react@18.3.1/node_modules/use-sidecar/dist/es2015/renderProp.js
var React4 = __toESM(require_react())
var import_react3 = __toESM(require_react())

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.3.5_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
var React5 = __toESM(require_react())

// node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce
var getNonce = () => {
  if (currentNonce) {
    return currentNonce
  }
  if (typeof __webpack_nonce__ !== "undefined") {
    return __webpack_nonce__
  }
  return void 0
}

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.3.5_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
  if (!document) return null
  var tag = document.createElement("style")
  tag.type = "text/css"
  var nonce = getNonce()
  if (nonce) {
    tag.setAttribute("nonce", nonce)
  }
  return tag
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css
  } else {
    tag.appendChild(document.createTextNode(css))
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0]
  head.appendChild(tag)
}
var stylesheetSingleton = () => {
  var counter = 0
  var stylesheet = null
  return {
    add: (style) => {
      if (counter == 0) {
        if ((stylesheet = makeStyleTag())) {
          injectStyles(stylesheet, style)
          insertStyleTag(stylesheet)
        }
      }
      counter++
    },
    remove: () => {
      counter--
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet)
        stylesheet = null
      }
    }
  }
}

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.3.5_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
var styleHookSingleton = () => {
  var sheet = stylesheetSingleton()
  return (styles, isDynamic) => {
    React5.useEffect(() => {
      sheet.add(styles)
      return () => {
        sheet.remove()
      }
    }, [styles && isDynamic])
  }
}

// node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.3.5_react@18.3.1/node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = () => {
  var useStyle = styleHookSingleton()
  var Sheet = (_a) => {
    var styles = _a.styles,
      dynamic = _a.dynamic
    useStyle(styles, dynamic)
    return null
  }
  return Sheet
}

// node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React6 = __toESM(require_react())

// node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}
var parse = (x) => Number.parseInt(x || "", 10) || 0
var getOffset = (gapMode) => {
  var cs = window.getComputedStyle(document.body)
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"]
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"]
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"]
  return [parse(left), parse(top), parse(right)]
}
var getGapWidth = (gapMode) => {
  if (gapMode === void 0) {
    gapMode = "margin"
  }
  if (typeof window === "undefined") {
    return zeroGap
  }
  var offsets = getOffset(gapMode)
  var documentWidth = document.documentElement.clientWidth
  var windowWidth = window.innerWidth
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  }
}

// node_modules/.pnpm/react-remove-scroll-bar@2.3.6_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton()
var lockAttribute = "data-scroll-locked"
var getStyles = (_a, allowRelative, gapMode, important) => {
  var left = _a.left,
    top = _a.top,
    right = _a.right,
    gap = _a.gap
  if (gapMode === void 0) {
    gapMode = "margin"
  }
  return "\n  ."
    .concat(noScrollbarsClassName, " {\n   overflow: hidden ")
    .concat(important, ";\n   padding-right: ")
    .concat(gap, "px ")
    .concat(important, ";\n  }\n  body[")
    .concat(lockAttribute, "] {\n    overflow: hidden ")
    .concat(important, ";\n    overscroll-behavior: contain;\n    ")
    .concat(
      [
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" &&
          "\n    padding-left: "
            .concat(left, "px;\n    padding-top: ")
            .concat(top, "px;\n    padding-right: ")
            .concat(
              right,
              "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
            )
            .concat(gap, "px ")
            .concat(important, ";\n    "),
        gapMode === "padding" &&
          "padding-right: ".concat(gap, "px ").concat(important, ";")
      ]
        .filter(Boolean)
        .join(""),
      "\n  }\n  \n  ."
    )
    .concat(zeroRightClassName, " {\n    right: ")
    .concat(gap, "px ")
    .concat(important, ";\n  }\n  \n  .")
    .concat(fullWidthClassName, " {\n    margin-right: ")
    .concat(gap, "px ")
    .concat(important, ";\n  }\n  \n  .")
    .concat(zeroRightClassName, " .")
    .concat(zeroRightClassName, " {\n    right: 0 ")
    .concat(important, ";\n  }\n  \n  .")
    .concat(fullWidthClassName, " .")
    .concat(fullWidthClassName, " {\n    margin-right: 0 ")
    .concat(important, ";\n  }\n  \n  body[")
    .concat(lockAttribute, "] {\n    ")
    .concat(removedBarSizeVariable, ": ")
    .concat(gap, "px;\n  }\n")
}
var getCurrentUseCounter = () => {
  var counter = Number.parseInt(
    document.body.getAttribute(lockAttribute) || "0",
    10
  )
  return isFinite(counter) ? counter : 0
}
var useLockAttribute = () => {
  React6.useEffect(() => {
    document.body.setAttribute(
      lockAttribute,
      (getCurrentUseCounter() + 1).toString()
    )
    return () => {
      var newCounter = getCurrentUseCounter() - 1
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute)
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString())
      }
    }
  }, [])
}
var RemoveScrollBar = (_a) => {
  var noRelative = _a.noRelative,
    noImportant = _a.noImportant,
    _b = _a.gapMode,
    gapMode = _b === void 0 ? "margin" : _b
  useLockAttribute()
  var gap = React6.useMemo(() => getGapWidth(gapMode), [gapMode])
  return React6.createElement(Style, {
    styles: getStyles(
      gap,
      !noRelative,
      gapMode,
      !noImportant ? "!important" : ""
    )
  })
}

export {
  __assign,
  __rest,
  __spreadArray,
  zeroRightClassName,
  fullWidthClassName,
  useMergeRefs,
  createSidecarMedium,
  exportSidecar,
  styleSingleton,
  RemoveScrollBar,
  hideOthers
}
//# sourceMappingURL=chunk-HJTRQ57Q.js.map