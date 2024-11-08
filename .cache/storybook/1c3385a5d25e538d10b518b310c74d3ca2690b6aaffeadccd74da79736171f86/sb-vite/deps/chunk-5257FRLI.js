import { useComposedRefs } from "./chunk-BZVITDLD.js"
import {
  __assign,
  __rest,
  __spreadArray,
  createSidecarMedium,
  exportSidecar,
  fullWidthClassName,
  RemoveScrollBar,
  styleSingleton,
  useMergeRefs,
  zeroRightClassName
} from "./chunk-HJTRQ57Q.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import {
  composeEventHandlers,
  dispatchDiscreteCustomEvent,
  Primitive,
  useCallbackRef,
  useLayoutEffect2
} from "./chunk-VJ57L2ZC.js"
import { require_react } from "./chunk-VMU3GUP3.js"
import { require_react_dom } from "./chunk-YGZ2ZWFG.js"
import { require_jsx_runtime } from "./chunk-YIS5ZZUK.js"

// node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.mjs
var React = __toESM(require_react(), 1)
var useReactId = React["useId".toString()] || (() => void 0)
var count = 0
function useId(deterministicId) {
  const [id, setId] = React.useState(useReactId())
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++))
  }, [deterministicId])
  return deterministicId || (id ? `radix-${id}` : "")
}

// node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React2 = __toESM(require_react(), 1)
function useControllableState({ prop, defaultProp, onChange = () => {} }) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
    defaultProp,
    onChange
  })
  const isControlled = prop !== void 0
  const value = isControlled ? prop : uncontrolledProp
  const handleChange = useCallbackRef(onChange)
  const setValue = React2.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue
        const value2 =
          typeof nextValue === "function" ? setter(prop) : nextValue
        if (value2 !== prop) handleChange(value2)
      } else {
        setUncontrolledProp(nextValue)
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  )
  return [value, setValue]
}
function useUncontrolledState({ defaultProp, onChange }) {
  const uncontrolledState = React2.useState(defaultProp)
  const [value] = uncontrolledState
  const prevValueRef = React2.useRef(value)
  const handleChange = useCallbackRef(onChange)
  React2.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value)
      prevValueRef.current = value
    }
  }, [value, prevValueRef, handleChange])
  return uncontrolledState
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom_7atfotivhqz6c6ko7h2lkndb5i/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var React4 = __toESM(require_react(), 1)

// node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React3 = __toESM(require_react(), 1)
function useEscapeKeydown(
  onEscapeKeyDownProp,
  ownerDocument = globalThis == null ? void 0 : globalThis.document
) {
  const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp)
  React3.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event)
      }
    }
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true })
    return () =>
      ownerDocument.removeEventListener("keydown", handleKeyDown, {
        capture: true
      })
  }, [onEscapeKeyDown, ownerDocument])
}

// node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom_7atfotivhqz6c6ko7h2lkndb5i/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1)
var DISMISSABLE_LAYER_NAME = "DismissableLayer"
var CONTEXT_UPDATE = "dismissableLayer.update"
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside"
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside"
var originalBodyPointerEvents
var DismissableLayerContext = React4.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
})
var DismissableLayer = React4.forwardRef((props, forwardedRef) => {
  const {
    disableOutsidePointerEvents = false,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    onDismiss,
    ...layerProps
  } = props
  const context = React4.useContext(DismissableLayerContext)
  const [node, setNode] = React4.useState(null)
  const ownerDocument =
    (node == null ? void 0 : node.ownerDocument) ??
    (globalThis == null ? void 0 : globalThis.document)
  const [, force] = React4.useState({})
  const composedRefs = useComposedRefs(forwardedRef, (node2) => setNode(node2))
  const layers = Array.from(context.layers)
  const [highestLayerWithOutsidePointerEventsDisabled] = [
    ...context.layersWithOutsidePointerEventsDisabled
  ].slice(-1)
  const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
    highestLayerWithOutsidePointerEventsDisabled
  )
  const index = node ? layers.indexOf(node) : -1
  const isBodyPointerEventsDisabled =
    context.layersWithOutsidePointerEventsDisabled.size > 0
  const isPointerEventsEnabled =
    index >= highestLayerWithOutsidePointerEventsDisabledIndex
  const pointerDownOutside = usePointerDownOutside((event) => {
    const target = event.target
    const isPointerDownOnBranch = [...context.branches].some((branch) =>
      branch.contains(target)
    )
    if (!isPointerEventsEnabled || isPointerDownOnBranch) return
    onPointerDownOutside == null ? void 0 : onPointerDownOutside(event)
    onInteractOutside == null ? void 0 : onInteractOutside(event)
    if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss()
  }, ownerDocument)
  const focusOutside = useFocusOutside((event) => {
    const target = event.target
    const isFocusInBranch = [...context.branches].some((branch) =>
      branch.contains(target)
    )
    if (isFocusInBranch) return
    onFocusOutside == null ? void 0 : onFocusOutside(event)
    onInteractOutside == null ? void 0 : onInteractOutside(event)
    if (!event.defaultPrevented) onDismiss == null ? void 0 : onDismiss()
  }, ownerDocument)
  useEscapeKeydown((event) => {
    const isHighestLayer = index === context.layers.size - 1
    if (!isHighestLayer) return
    onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event)
    if (!event.defaultPrevented && onDismiss) {
      event.preventDefault()
      onDismiss()
    }
  }, ownerDocument)
  React4.useEffect(() => {
    if (!node) return
    if (disableOutsidePointerEvents) {
      if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
        originalBodyPointerEvents = ownerDocument.body.style.pointerEvents
        ownerDocument.body.style.pointerEvents = "none"
      }
      context.layersWithOutsidePointerEventsDisabled.add(node)
    }
    context.layers.add(node)
    dispatchUpdate()
    return () => {
      if (
        disableOutsidePointerEvents &&
        context.layersWithOutsidePointerEventsDisabled.size === 1
      ) {
        ownerDocument.body.style.pointerEvents = originalBodyPointerEvents
      }
    }
  }, [node, ownerDocument, disableOutsidePointerEvents, context])
  React4.useEffect(() => {
    return () => {
      if (!node) return
      context.layers.delete(node)
      context.layersWithOutsidePointerEventsDisabled.delete(node)
      dispatchUpdate()
    }
  }, [node, context])
  React4.useEffect(() => {
    const handleUpdate = () => force({})
    document.addEventListener(CONTEXT_UPDATE, handleUpdate)
    return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate)
  }, [])
  return (0, import_jsx_runtime.jsx)(Primitive.div, {
    ...layerProps,
    ref: composedRefs,
    style: {
      pointerEvents: isBodyPointerEventsDisabled
        ? isPointerEventsEnabled
          ? "auto"
          : "none"
        : void 0,
      ...props.style
    },
    onFocusCapture: composeEventHandlers(
      props.onFocusCapture,
      focusOutside.onFocusCapture
    ),
    onBlurCapture: composeEventHandlers(
      props.onBlurCapture,
      focusOutside.onBlurCapture
    ),
    onPointerDownCapture: composeEventHandlers(
      props.onPointerDownCapture,
      pointerDownOutside.onPointerDownCapture
    )
  })
})
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME
var BRANCH_NAME = "DismissableLayerBranch"
var DismissableLayerBranch = React4.forwardRef((props, forwardedRef) => {
  const context = React4.useContext(DismissableLayerContext)
  const ref = React4.useRef(null)
  const composedRefs = useComposedRefs(forwardedRef, ref)
  React4.useEffect(() => {
    const node = ref.current
    if (node) {
      context.branches.add(node)
      return () => {
        context.branches.delete(node)
      }
    }
  }, [context.branches])
  return (0, import_jsx_runtime.jsx)(Primitive.div, {
    ...props,
    ref: composedRefs
  })
})
DismissableLayerBranch.displayName = BRANCH_NAME
function usePointerDownOutside(
  onPointerDownOutside,
  ownerDocument = globalThis == null ? void 0 : globalThis.document
) {
  const handlePointerDownOutside = useCallbackRef(onPointerDownOutside)
  const isPointerInsideReactTreeRef = React4.useRef(false)
  const handleClickRef = React4.useRef(() => {})
  React4.useEffect(() => {
    const handlePointerDown = (event) => {
      if (event.target && !isPointerInsideReactTreeRef.current) {
        let handleAndDispatchPointerDownOutsideEvent2 = function () {
          handleAndDispatchCustomEvent(
            POINTER_DOWN_OUTSIDE,
            handlePointerDownOutside,
            eventDetail,
            { discrete: true }
          )
        }
        var handleAndDispatchPointerDownOutsideEvent =
          handleAndDispatchPointerDownOutsideEvent2
        const eventDetail = { originalEvent: event }
        if (event.pointerType === "touch") {
          ownerDocument.removeEventListener("click", handleClickRef.current)
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2
          ownerDocument.addEventListener("click", handleClickRef.current, {
            once: true
          })
        } else {
          handleAndDispatchPointerDownOutsideEvent2()
        }
      } else {
        ownerDocument.removeEventListener("click", handleClickRef.current)
      }
      isPointerInsideReactTreeRef.current = false
    }
    const timerId = window.setTimeout(() => {
      ownerDocument.addEventListener("pointerdown", handlePointerDown)
    }, 0)
    return () => {
      window.clearTimeout(timerId)
      ownerDocument.removeEventListener("pointerdown", handlePointerDown)
      ownerDocument.removeEventListener("click", handleClickRef.current)
    }
  }, [ownerDocument, handlePointerDownOutside])
  return {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => (isPointerInsideReactTreeRef.current = true)
  }
}
function useFocusOutside(
  onFocusOutside,
  ownerDocument = globalThis == null ? void 0 : globalThis.document
) {
  const handleFocusOutside = useCallbackRef(onFocusOutside)
  const isFocusInsideReactTreeRef = React4.useRef(false)
  React4.useEffect(() => {
    const handleFocus = (event) => {
      if (event.target && !isFocusInsideReactTreeRef.current) {
        const eventDetail = { originalEvent: event }
        handleAndDispatchCustomEvent(
          FOCUS_OUTSIDE,
          handleFocusOutside,
          eventDetail,
          {
            discrete: false
          }
        )
      }
    }
    ownerDocument.addEventListener("focusin", handleFocus)
    return () => ownerDocument.removeEventListener("focusin", handleFocus)
  }, [ownerDocument, handleFocusOutside])
  return {
    onFocusCapture: () => (isFocusInsideReactTreeRef.current = true),
    onBlurCapture: () => (isFocusInsideReactTreeRef.current = false)
  }
}
function dispatchUpdate() {
  const event = new CustomEvent(CONTEXT_UPDATE)
  document.dispatchEvent(event)
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
  const target = detail.originalEvent.target
  const event = new CustomEvent(name, {
    bubbles: false,
    cancelable: true,
    detail
  })
  if (handler) target.addEventListener(name, handler, { once: true })
  if (discrete) {
    dispatchDiscreteCustomEvent(target, event)
  } else {
    target.dispatchEvent(event)
  }
}

// node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3._3c5wxj7rryhvs74nykyg3cbyci/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var React5 = __toESM(require_react(), 1)
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1)
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount"
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount"
var EVENT_OPTIONS = { bubbles: false, cancelable: true }
var FOCUS_SCOPE_NAME = "FocusScope"
var FocusScope = React5.forwardRef((props, forwardedRef) => {
  const {
    loop = false,
    trapped = false,
    onMountAutoFocus: onMountAutoFocusProp,
    onUnmountAutoFocus: onUnmountAutoFocusProp,
    ...scopeProps
  } = props
  const [container, setContainer] = React5.useState(null)
  const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp)
  const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp)
  const lastFocusedElementRef = React5.useRef(null)
  const composedRefs = useComposedRefs(forwardedRef, (node) =>
    setContainer(node)
  )
  const focusScope = React5.useRef({
    paused: false,
    pause() {
      this.paused = true
    },
    resume() {
      this.paused = false
    }
  }).current
  React5.useEffect(() => {
    if (trapped) {
      let handleFocusIn2 = function (event) {
          if (focusScope.paused || !container) return
          const target = event.target
          if (container.contains(target)) {
            lastFocusedElementRef.current = target
          } else {
            focus(lastFocusedElementRef.current, { select: true })
          }
        },
        handleFocusOut2 = function (event) {
          if (focusScope.paused || !container) return
          const relatedTarget = event.relatedTarget
          if (relatedTarget === null) return
          if (!container.contains(relatedTarget)) {
            focus(lastFocusedElementRef.current, { select: true })
          }
        },
        handleMutations2 = function (mutations) {
          const focusedElement = document.activeElement
          if (focusedElement !== document.body) return
          for (const mutation of mutations) {
            if (mutation.removedNodes.length > 0) focus(container)
          }
        }
      var handleFocusIn = handleFocusIn2,
        handleFocusOut = handleFocusOut2,
        handleMutations = handleMutations2
      document.addEventListener("focusin", handleFocusIn2)
      document.addEventListener("focusout", handleFocusOut2)
      const mutationObserver = new MutationObserver(handleMutations2)
      if (container)
        mutationObserver.observe(container, { childList: true, subtree: true })
      return () => {
        document.removeEventListener("focusin", handleFocusIn2)
        document.removeEventListener("focusout", handleFocusOut2)
        mutationObserver.disconnect()
      }
    }
  }, [trapped, container, focusScope.paused])
  React5.useEffect(() => {
    if (container) {
      focusScopesStack.add(focusScope)
      const previouslyFocusedElement = document.activeElement
      const hasFocusedCandidate = container.contains(previouslyFocusedElement)
      if (!hasFocusedCandidate) {
        const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS)
        container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus)
        container.dispatchEvent(mountEvent)
        if (!mountEvent.defaultPrevented) {
          focusFirst(removeLinks(getTabbableCandidates(container)), {
            select: true
          })
          if (document.activeElement === previouslyFocusedElement) {
            focus(container)
          }
        }
      }
      return () => {
        container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus)
        setTimeout(() => {
          const unmountEvent = new CustomEvent(
            AUTOFOCUS_ON_UNMOUNT,
            EVENT_OPTIONS
          )
          container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus)
          container.dispatchEvent(unmountEvent)
          if (!unmountEvent.defaultPrevented) {
            focus(previouslyFocusedElement ?? document.body, { select: true })
          }
          container.removeEventListener(
            AUTOFOCUS_ON_UNMOUNT,
            onUnmountAutoFocus
          )
          focusScopesStack.remove(focusScope)
        }, 0)
      }
    }
  }, [container, onMountAutoFocus, onUnmountAutoFocus, focusScope])
  const handleKeyDown = React5.useCallback(
    (event) => {
      if (!loop && !trapped) return
      if (focusScope.paused) return
      const isTabKey =
        event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey
      const focusedElement = document.activeElement
      if (isTabKey && focusedElement) {
        const container2 = event.currentTarget
        const [first, last] = getTabbableEdges(container2)
        const hasTabbableElementsInside = first && last
        if (!hasTabbableElementsInside) {
          if (focusedElement === container2) event.preventDefault()
        } else {
          if (!event.shiftKey && focusedElement === last) {
            event.preventDefault()
            if (loop) focus(first, { select: true })
          } else if (event.shiftKey && focusedElement === first) {
            event.preventDefault()
            if (loop) focus(last, { select: true })
          }
        }
      }
    },
    [loop, trapped, focusScope.paused]
  )
  return (0, import_jsx_runtime2.jsx)(Primitive.div, {
    tabIndex: -1,
    ...scopeProps,
    ref: composedRefs,
    onKeyDown: handleKeyDown
  })
})
FocusScope.displayName = FOCUS_SCOPE_NAME
function focusFirst(candidates, { select = false } = {}) {
  const previouslyFocusedElement = document.activeElement
  for (const candidate of candidates) {
    focus(candidate, { select })
    if (document.activeElement !== previouslyFocusedElement) return
  }
}
function getTabbableEdges(container) {
  const candidates = getTabbableCandidates(container)
  const first = findVisible(candidates, container)
  const last = findVisible(candidates.reverse(), container)
  return [first, last]
}
function getTabbableCandidates(container) {
  const nodes = []
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden"
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP
      return node.tabIndex >= 0
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP
    }
  })
  while (walker.nextNode()) nodes.push(walker.currentNode)
  return nodes
}
function findVisible(elements, container) {
  for (const element of elements) {
    if (!isHidden(element, { upTo: container })) return element
  }
}
function isHidden(node, { upTo }) {
  if (getComputedStyle(node).visibility === "hidden") return true
  while (node) {
    if (upTo !== void 0 && node === upTo) return false
    if (getComputedStyle(node).display === "none") return true
    node = node.parentElement
  }
  return false
}
function isSelectableInput(element) {
  return element instanceof HTMLInputElement && "select" in element
}
function focus(element, { select = false } = {}) {
  if (element && element.focus) {
    const previouslyFocusedElement = document.activeElement
    element.focus({ preventScroll: true })
    if (
      element !== previouslyFocusedElement &&
      isSelectableInput(element) &&
      select
    )
      element.select()
  }
}
var focusScopesStack = createFocusScopesStack()
function createFocusScopesStack() {
  let stack = []
  return {
    add(focusScope) {
      const activeFocusScope = stack[0]
      if (focusScope !== activeFocusScope) {
        activeFocusScope == null ? void 0 : activeFocusScope.pause()
      }
      stack = arrayRemove(stack, focusScope)
      stack.unshift(focusScope)
    },
    remove(focusScope) {
      var _a
      stack = arrayRemove(stack, focusScope)
      ;(_a = stack[0]) == null ? void 0 : _a.resume()
    }
  }
}
function arrayRemove(array, item) {
  const updatedArray = [...array]
  const index = updatedArray.indexOf(item)
  if (index !== -1) {
    updatedArray.splice(index, 1)
  }
  return updatedArray
}
function removeLinks(items) {
  return items.filter((item) => item.tagName !== "A")
}

// node_modules/.pnpm/@radix-ui+react-portal@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.mjs
var React6 = __toESM(require_react(), 1)
var import_react_dom = __toESM(require_react_dom(), 1)
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1)
var PORTAL_NAME = "Portal"
var Portal = React6.forwardRef((props, forwardedRef) => {
  var _a
  const { container: containerProp, ...portalProps } = props
  const [mounted, setMounted] = React6.useState(false)
  useLayoutEffect2(() => setMounted(true), [])
  const container =
    containerProp ||
    (mounted &&
      ((_a = globalThis == null ? void 0 : globalThis.document) == null
        ? void 0
        : _a.body))
  return container
    ? import_react_dom.default.createPortal(
        (0, import_jsx_runtime3.jsx)(Primitive.div, {
          ...portalProps,
          ref: forwardedRef
        }),
        container
      )
    : null
})
Portal.displayName = PORTAL_NAME

// node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React7 = __toESM(require_react(), 1)
var count2 = 0
function useFocusGuards() {
  React7.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]")
    document.body.insertAdjacentElement(
      "afterbegin",
      edgeGuards[0] ?? createFocusGuard()
    )
    document.body.insertAdjacentElement(
      "beforeend",
      edgeGuards[1] ?? createFocusGuard()
    )
    count2++
    return () => {
      if (count2 === 1) {
        document
          .querySelectorAll("[data-radix-focus-guard]")
          .forEach((node) => node.remove())
      }
      count2--
    }
  }, [])
}
function createFocusGuard() {
  const element = document.createElement("span")
  element.setAttribute("data-radix-focus-guard", "")
  element.tabIndex = 0
  element.style.cssText =
    "outline: none; opacity: 0; position: fixed; pointer-events: none"
  return element
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var React10 = __toESM(require_react())

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var React8 = __toESM(require_react())

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium()

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function () {
  return
}
var RemoveScroll = React8.forwardRef(function (props, parentRef) {
  var ref = React8.useRef(null)
  var _a = React8.useState({
      onScrollCapture: nothing,
      onWheelCapture: nothing,
      onTouchMoveCapture: nothing
    }),
    callbacks = _a[0],
    setCallbacks = _a[1]
  var forwardProps = props.forwardProps,
    children = props.children,
    className = props.className,
    removeScrollBar = props.removeScrollBar,
    enabled = props.enabled,
    shards = props.shards,
    sideCar = props.sideCar,
    noIsolation = props.noIsolation,
    inert = props.inert,
    allowPinchZoom = props.allowPinchZoom,
    _b = props.as,
    Container = _b === void 0 ? "div" : _b,
    gapMode = props.gapMode,
    rest = __rest(props, [
      "forwardProps",
      "children",
      "className",
      "removeScrollBar",
      "enabled",
      "shards",
      "sideCar",
      "noIsolation",
      "inert",
      "allowPinchZoom",
      "as",
      "gapMode"
    ])
  var SideCar = sideCar
  var containerRef = useMergeRefs([ref, parentRef])
  var containerProps = __assign(__assign({}, rest), callbacks)
  return React8.createElement(
    React8.Fragment,
    null,
    enabled &&
      React8.createElement(SideCar, {
        sideCar: effectCar,
        removeScrollBar,
        shards,
        noIsolation,
        inert,
        setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode
      }),
    forwardProps
      ? React8.cloneElement(
          React8.Children.only(children),
          __assign(__assign({}, containerProps), { ref: containerRef })
        )
      : React8.createElement(
          Container,
          __assign({}, containerProps, { className, ref: containerRef }),
          children
        )
  )
})
RemoveScroll.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
}
RemoveScroll.classNames = {
  fullWidth: fullWidthClassName,
  zeroRight: zeroRightClassName
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var React9 = __toESM(require_react())

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false
if (typeof window !== "undefined") {
  try {
    options = Object.defineProperty({}, "passive", {
      get: function () {
        passiveSupported = true
        return true
      }
    })
    window.addEventListener("test", options, options)
    window.removeEventListener("test", options, options)
  } catch (err) {
    passiveSupported = false
  }
}
var options
var nonPassive = passiveSupported ? { passive: false } : false

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function (node) {
  return node.tagName === "TEXTAREA"
}
var elementCanBeScrolled = function (node, overflow) {
  var styles = window.getComputedStyle(node)
  return (
    // not-not-scrollable
    styles[overflow] !== "hidden" && // contains scroll inside self
    !(
      styles.overflowY === styles.overflowX &&
      !alwaysContainsScroll(node) &&
      styles[overflow] === "visible"
    )
  )
}
var elementCouldBeVScrolled = function (node) {
  return elementCanBeScrolled(node, "overflowY")
}
var elementCouldBeHScrolled = function (node) {
  return elementCanBeScrolled(node, "overflowX")
}
var locationCouldBeScrolled = function (axis, node) {
  var ownerDocument = node.ownerDocument
  var current = node
  do {
    if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
      current = current.host
    }
    var isScrollable = elementCouldBeScrolled(axis, current)
    if (isScrollable) {
      var _a = getScrollVariables(axis, current),
        s = _a[1],
        d = _a[2]
      if (s > d) {
        return true
      }
    }
    current = current.parentNode
  } while (current && current !== ownerDocument.body)
  return false
}
var getVScrollVariables = function (_a) {
  var scrollTop = _a.scrollTop,
    scrollHeight = _a.scrollHeight,
    clientHeight = _a.clientHeight
  return [scrollTop, scrollHeight, clientHeight]
}
var getHScrollVariables = function (_a) {
  var scrollLeft = _a.scrollLeft,
    scrollWidth = _a.scrollWidth,
    clientWidth = _a.clientWidth
  return [scrollLeft, scrollWidth, clientWidth]
}
var elementCouldBeScrolled = function (axis, node) {
  return axis === "v"
    ? elementCouldBeVScrolled(node)
    : elementCouldBeHScrolled(node)
}
var getScrollVariables = function (axis, node) {
  return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node)
}
var getDirectionFactor = function (axis, direction) {
  return axis === "h" && direction === "rtl" ? -1 : 1
}
var handleScroll = function (
  axis,
  endTarget,
  event,
  sourceDelta,
  noOverscroll
) {
  var directionFactor = getDirectionFactor(
    axis,
    window.getComputedStyle(endTarget).direction
  )
  var delta = directionFactor * sourceDelta
  var target = event.target
  var targetInLock = endTarget.contains(target)
  var shouldCancelScroll = false
  var isDeltaPositive = delta > 0
  var availableScroll = 0
  var availableScrollTop = 0
  do {
    var _a = getScrollVariables(axis, target),
      position = _a[0],
      scroll_1 = _a[1],
      capacity = _a[2]
    var elementScroll = scroll_1 - capacity - directionFactor * position
    if (position || elementScroll) {
      if (elementCouldBeScrolled(axis, target)) {
        availableScroll += elementScroll
        availableScrollTop += position
      }
    }
    if (target instanceof ShadowRoot) {
      target = target.host
    } else {
      target = target.parentNode
    }
  } while (
    // portaled content
    (!targetInLock && target !== document.body) || // self content
    (targetInLock && (endTarget.contains(target) || endTarget === target))
  )
  if (
    isDeltaPositive &&
    ((noOverscroll && Math.abs(availableScroll) < 1) ||
      (!noOverscroll && delta > availableScroll))
  ) {
    shouldCancelScroll = true
  } else if (
    !isDeltaPositive &&
    ((noOverscroll && Math.abs(availableScrollTop) < 1) ||
      (!noOverscroll && -delta > availableScrollTop))
  ) {
    shouldCancelScroll = true
  }
  return shouldCancelScroll
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function (event) {
  return "changedTouches" in event
    ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
    : [0, 0]
}
var getDeltaXY = function (event) {
  return [event.deltaX, event.deltaY]
}
var extractRef = function (ref) {
  return ref && "current" in ref ? ref.current : ref
}
var deltaCompare = function (x, y) {
  return x[0] === y[0] && x[1] === y[1]
}
var generateStyle = function (id) {
  return "\n  .block-interactivity-"
    .concat(id, " {pointer-events: none;}\n  .allow-interactivity-")
    .concat(id, " {pointer-events: all;}\n")
}
var idCounter = 0
var lockStack = []
function RemoveScrollSideCar(props) {
  var shouldPreventQueue = React9.useRef([])
  var touchStartRef = React9.useRef([0, 0])
  var activeAxis = React9.useRef()
  var id = React9.useState(idCounter++)[0]
  var Style = React9.useState(styleSingleton)[0]
  var lastProps = React9.useRef(props)
  React9.useEffect(
    function () {
      lastProps.current = props
    },
    [props]
  )
  React9.useEffect(
    function () {
      if (props.inert) {
        document.body.classList.add("block-interactivity-".concat(id))
        var allow_1 = __spreadArray(
          [props.lockRef.current],
          (props.shards || []).map(extractRef),
          true
        ).filter(Boolean)
        allow_1.forEach(function (el) {
          return el.classList.add("allow-interactivity-".concat(id))
        })
        return function () {
          document.body.classList.remove("block-interactivity-".concat(id))
          allow_1.forEach(function (el) {
            return el.classList.remove("allow-interactivity-".concat(id))
          })
        }
      }
      return
    },
    [props.inert, props.lockRef.current, props.shards]
  )
  var shouldCancelEvent = React9.useCallback(function (event, parent) {
    if ("touches" in event && event.touches.length === 2) {
      return !lastProps.current.allowPinchZoom
    }
    var touch = getTouchXY(event)
    var touchStart = touchStartRef.current
    var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0]
    var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1]
    var currentAxis
    var target = event.target
    var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v"
    if (
      "touches" in event &&
      moveDirection === "h" &&
      target.type === "range"
    ) {
      return false
    }
    var canBeScrolledInMainDirection = locationCouldBeScrolled(
      moveDirection,
      target
    )
    if (!canBeScrolledInMainDirection) {
      return true
    }
    if (canBeScrolledInMainDirection) {
      currentAxis = moveDirection
    } else {
      currentAxis = moveDirection === "v" ? "h" : "v"
      canBeScrolledInMainDirection = locationCouldBeScrolled(
        moveDirection,
        target
      )
    }
    if (!canBeScrolledInMainDirection) {
      return false
    }
    if (
      !activeAxis.current &&
      "changedTouches" in event &&
      (deltaX || deltaY)
    ) {
      activeAxis.current = currentAxis
    }
    if (!currentAxis) {
      return true
    }
    var cancelingAxis = activeAxis.current || currentAxis
    return handleScroll(
      cancelingAxis,
      parent,
      event,
      cancelingAxis === "h" ? deltaX : deltaY,
      true
    )
  }, [])
  var shouldPrevent = React9.useCallback(function (_event) {
    var event = _event
    if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
      return
    }
    var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event)
    var sourceEvent = shouldPreventQueue.current.filter(function (e) {
      return (
        e.name === event.type &&
        (e.target === event.target || event.target === e.shadowParent) &&
        deltaCompare(e.delta, delta)
      )
    })[0]
    if (sourceEvent && sourceEvent.should) {
      if (event.cancelable) {
        event.preventDefault()
      }
      return
    }
    if (!sourceEvent) {
      var shardNodes = (lastProps.current.shards || [])
        .map(extractRef)
        .filter(Boolean)
        .filter(function (node) {
          return node.contains(event.target)
        })
      var shouldStop =
        shardNodes.length > 0
          ? shouldCancelEvent(event, shardNodes[0])
          : !lastProps.current.noIsolation
      if (shouldStop) {
        if (event.cancelable) {
          event.preventDefault()
        }
      }
    }
  }, [])
  var shouldCancel = React9.useCallback(function (name, delta, target, should) {
    var event = {
      name,
      delta,
      target,
      should,
      shadowParent: getOutermostShadowParent(target)
    }
    shouldPreventQueue.current.push(event)
    setTimeout(function () {
      shouldPreventQueue.current = shouldPreventQueue.current.filter(
        function (e) {
          return e !== event
        }
      )
    }, 1)
  }, [])
  var scrollTouchStart = React9.useCallback(function (event) {
    touchStartRef.current = getTouchXY(event)
    activeAxis.current = void 0
  }, [])
  var scrollWheel = React9.useCallback(function (event) {
    shouldCancel(
      event.type,
      getDeltaXY(event),
      event.target,
      shouldCancelEvent(event, props.lockRef.current)
    )
  }, [])
  var scrollTouchMove = React9.useCallback(function (event) {
    shouldCancel(
      event.type,
      getTouchXY(event),
      event.target,
      shouldCancelEvent(event, props.lockRef.current)
    )
  }, [])
  React9.useEffect(function () {
    lockStack.push(Style)
    props.setCallbacks({
      onScrollCapture: scrollWheel,
      onWheelCapture: scrollWheel,
      onTouchMoveCapture: scrollTouchMove
    })
    document.addEventListener("wheel", shouldPrevent, nonPassive)
    document.addEventListener("touchmove", shouldPrevent, nonPassive)
    document.addEventListener("touchstart", scrollTouchStart, nonPassive)
    return function () {
      lockStack = lockStack.filter(function (inst) {
        return inst !== Style
      })
      document.removeEventListener("wheel", shouldPrevent, nonPassive)
      document.removeEventListener("touchmove", shouldPrevent, nonPassive)
      document.removeEventListener("touchstart", scrollTouchStart, nonPassive)
    }
  }, [])
  var removeScrollBar = props.removeScrollBar,
    inert = props.inert
  return React9.createElement(
    React9.Fragment,
    null,
    inert ? React9.createElement(Style, { styles: generateStyle(id) }) : null,
    removeScrollBar
      ? React9.createElement(RemoveScrollBar, { gapMode: props.gapMode })
      : null
  )
}
function getOutermostShadowParent(node) {
  var shadowParent = null
  while (node !== null) {
    if (node instanceof ShadowRoot) {
      shadowParent = node.host
      node = node.host
    }
    node = node.parentNode
  }
  return shadowParent
}

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar)

// node_modules/.pnpm/react-remove-scroll@2.5.7_@types+react@18.3.5_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = React10.forwardRef(function (props, ref) {
  return React10.createElement(
    RemoveScroll,
    __assign({}, props, { ref, sideCar: sidecar_default })
  )
})
ReactRemoveScroll.classNames = RemoveScroll.classNames
var Combination_default = ReactRemoveScroll

export {
  useId,
  useControllableState,
  DismissableLayer,
  FocusScope,
  Portal,
  useFocusGuards,
  Combination_default
}
//# sourceMappingURL=chunk-5257FRLI.js.map
