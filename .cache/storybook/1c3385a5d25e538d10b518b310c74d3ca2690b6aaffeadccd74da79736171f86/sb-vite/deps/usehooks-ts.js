import { __commonJS, __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(
    exports,
    module
  ) {
    var FUNC_ERROR_TEXT = "Expected a function"
    var NAN = 0 / 0
    var symbolTag = "[object Symbol]"
    var reTrim = /^\s+|\s+$/g
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i
    var reIsBinary = /^0b[01]+$/i
    var reIsOctal = /^0o[0-7]+$/i
    var freeParseInt = parseInt
    var freeGlobal =
      typeof global == "object" && global && global.Object === Object && global
    var freeSelf =
      typeof self == "object" && self && self.Object === Object && self
    var root = freeGlobal || freeSelf || Function("return this")()
    var objectProto = Object.prototype
    var objectToString = objectProto.toString
    var nativeMax = Math.max
    var nativeMin = Math.min
    var now = function () {
      return root.Date.now()
    }
    function debounce2(func, wait, options) {
      var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT)
      }
      wait = toNumber(wait) || 0
      if (isObject(options)) {
        leading = !!options.leading
        maxing = "maxWait" in options
        maxWait = maxing
          ? nativeMax(toNumber(options.maxWait) || 0, wait)
          : maxWait
        trailing = "trailing" in options ? !!options.trailing : trailing
      }
      function invokeFunc(time) {
        var args = lastArgs,
          thisArg = lastThis
        lastArgs = lastThis = void 0
        lastInvokeTime = time
        result = func.apply(thisArg, args)
        return result
      }
      function leadingEdge(time) {
        lastInvokeTime = time
        timerId = setTimeout(timerExpired, wait)
        return leading ? invokeFunc(time) : result
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result2 = wait - timeSinceLastCall
        return maxing
          ? nativeMin(result2, maxWait - timeSinceLastInvoke)
          : result2
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime
        return (
          lastCallTime === void 0 ||
          timeSinceLastCall >= wait ||
          timeSinceLastCall < 0 ||
          (maxing && timeSinceLastInvoke >= maxWait)
        )
      }
      function timerExpired() {
        var time = now()
        if (shouldInvoke(time)) {
          return trailingEdge(time)
        }
        timerId = setTimeout(timerExpired, remainingWait(time))
      }
      function trailingEdge(time) {
        timerId = void 0
        if (trailing && lastArgs) {
          return invokeFunc(time)
        }
        lastArgs = lastThis = void 0
        return result
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId)
        }
        lastInvokeTime = 0
        lastArgs = lastCallTime = lastThis = timerId = void 0
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now())
      }
      function debounced() {
        var time = now(),
          isInvoking = shouldInvoke(time)
        lastArgs = arguments
        lastThis = this
        lastCallTime = time
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime)
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait)
            return invokeFunc(lastCallTime)
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait)
        }
        return result
      }
      debounced.cancel = cancel
      debounced.flush = flush
      return debounced
    }
    function isObject(value) {
      var type = typeof value
      return !!value && (type == "object" || type == "function")
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object"
    }
    function isSymbol(value) {
      return (
        typeof value == "symbol" ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag)
      )
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value
      }
      if (isSymbol(value)) {
        return NAN
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value
        value = isObject(other) ? other + "" : other
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value
      }
      value = value.replace(reTrim, "")
      var isBinary = reIsBinary.test(value)
      return isBinary || reIsOctal.test(value)
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : reIsBadHex.test(value)
          ? NAN
          : +value
    }
    module.exports = debounce2
  }
})

// node_modules/.pnpm/usehooks-ts@3.1.0_react@18.3.1/node_modules/usehooks-ts/dist/index.js
var import_react = __toESM(require_react())
var import_lodash = __toESM(require_lodash())
function useBoolean(defaultValue = false) {
  if (typeof defaultValue !== "boolean") {
    throw new Error("defaultValue must be `true` or `false`")
  }
  const [value, setValue] = (0, import_react.useState)(defaultValue)
  const setTrue = (0, import_react.useCallback)(() => {
    setValue(true)
  }, [])
  const setFalse = (0, import_react.useCallback)(() => {
    setValue(false)
  }, [])
  const toggle = (0, import_react.useCallback)(() => {
    setValue((x) => !x)
  }, [])
  return { value, setValue, setTrue, setFalse, toggle }
}
var useIsomorphicLayoutEffect =
  typeof window !== "undefined"
    ? import_react.useLayoutEffect
    : import_react.useEffect
function useEventListener(eventName, handler, element, options) {
  const savedHandler = (0, import_react.useRef)(handler)
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])
  ;(0, import_react.useEffect)(() => {
    const targetElement = (element == null ? void 0 : element.current) ?? window
    if (!(targetElement && targetElement.addEventListener)) return
    const listener = (event) => {
      savedHandler.current(event)
    }
    targetElement.addEventListener(eventName, listener, options)
    return () => {
      targetElement.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}
function useClickAnyWhere(handler) {
  useEventListener("click", (event) => {
    handler(event)
  })
}
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = (0, import_react.useState)(null)
  const copy = (0, import_react.useCallback)(async (text) => {
    if (!(navigator == null ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported")
      return false
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.warn("Copy failed", error)
      setCopiedText(null)
      return false
    }
  }, [])
  return [copiedText, copy]
}
function useCounter(initialValue) {
  const [count, setCount] = (0, import_react.useState)(initialValue ?? 0)
  const increment = (0, import_react.useCallback)(() => {
    setCount((x) => x + 1)
  }, [])
  const decrement = (0, import_react.useCallback)(() => {
    setCount((x) => x - 1)
  }, [])
  const reset = (0, import_react.useCallback)(() => {
    setCount(initialValue ?? 0)
  }, [initialValue])
  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  }
}
function useInterval(callback, delay) {
  const savedCallback = (0, import_react.useRef)(callback)
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])
  ;(0, import_react.useEffect)(() => {
    if (delay === null) {
      return
    }
    const id = setInterval(() => {
      savedCallback.current()
    }, delay)
    return () => {
      clearInterval(id)
    }
  }, [delay])
}
function useCountdown({
  countStart,
  countStop = 0,
  intervalMs = 1e3,
  isIncrement = false
}) {
  const {
    count,
    increment,
    decrement,
    reset: resetCounter
  } = useCounter(countStart)
  const {
    value: isCountdownRunning,
    setTrue: startCountdown,
    setFalse: stopCountdown
  } = useBoolean(false)
  const resetCountdown = (0, import_react.useCallback)(() => {
    stopCountdown()
    resetCounter()
  }, [stopCountdown, resetCounter])
  const countdownCallback = (0, import_react.useCallback)(() => {
    if (count === countStop) {
      stopCountdown()
      return
    }
    if (isIncrement) {
      increment()
    } else {
      decrement()
    }
  }, [count, countStop, decrement, increment, isIncrement, stopCountdown])
  useInterval(countdownCallback, isCountdownRunning ? intervalMs : null)
  return [count, { startCountdown, stopCountdown, resetCountdown }]
}
function useEventCallback(fn) {
  const ref = (0, import_react.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.")
  })
  useIsomorphicLayoutEffect(() => {
    ref.current = fn
  }, [fn])
  return (0, import_react.useCallback)(
    (...args) => {
      var _a
      return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args)
    },
    [ref]
  )
}
var IS_SERVER = typeof window === "undefined"
function useLocalStorage(key, initialValue, options = {}) {
  const { initializeWithValue = true } = options
  const serializer = (0, import_react.useCallback)(
    (value) => {
      if (options.serializer) {
        return options.serializer(value)
      }
      return JSON.stringify(value)
    },
    [options]
  )
  const deserializer = (0, import_react.useCallback)(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value)
      }
      if (value === "undefined") {
        return void 0
      }
      const defaultValue =
        initialValue instanceof Function ? initialValue() : initialValue
      let parsed
      try {
        parsed = JSON.parse(value)
      } catch (error) {
        console.error("Error parsing JSON:", error)
        return defaultValue
      }
      return parsed
    },
    [options, initialValue]
  )
  const readValue = (0, import_react.useCallback)(() => {
    const initialValueToUse =
      initialValue instanceof Function ? initialValue() : initialValue
    if (IS_SERVER) {
      return initialValueToUse
    }
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? deserializer(raw) : initialValueToUse
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValueToUse
    }
  }, [initialValue, key, deserializer])
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return readValue()
    }
    return initialValue instanceof Function ? initialValue() : initialValue
  })
  const setValue = useEventCallback((value) => {
    if (IS_SERVER) {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      )
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value
      window.localStorage.setItem(key, serializer(newValue))
      setStoredValue(newValue)
      window.dispatchEvent(new StorageEvent("local-storage", { key }))
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  })
  const removeValue = useEventCallback(() => {
    if (IS_SERVER) {
      console.warn(
        `Tried removing localStorage key “${key}” even though environment is not a client`
      )
    }
    const defaultValue =
      initialValue instanceof Function ? initialValue() : initialValue
    window.localStorage.removeItem(key)
    setStoredValue(defaultValue)
    window.dispatchEvent(new StorageEvent("local-storage", { key }))
  })
  ;(0, import_react.useEffect)(() => {
    setStoredValue(readValue())
  }, [key])
  const handleStorageChange = (0, import_react.useCallback)(
    (event) => {
      if (event.key && event.key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )
  useEventListener("storage", handleStorageChange)
  useEventListener("local-storage", handleStorageChange)
  return [storedValue, setValue, removeValue]
}
var IS_SERVER2 = typeof window === "undefined"
function useMediaQuery(
  query,
  { defaultValue = false, initializeWithValue = true } = {}
) {
  const getMatches = (query2) => {
    if (IS_SERVER2) {
      return defaultValue
    }
    return window.matchMedia(query2).matches
  }
  const [matches, setMatches] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })
  function handleChange() {
    setMatches(getMatches(query))
  }
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener("change", handleChange)
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener("change", handleChange)
      }
    }
  }, [query])
  return matches
}
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode"
function useDarkMode(options = {}) {
  const {
    defaultValue,
    localStorageKey = LOCAL_STORAGE_KEY,
    initializeWithValue = true
  } = options
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue
  })
  const [isDarkMode, setDarkMode] = useLocalStorage(
    localStorageKey,
    defaultValue ?? isDarkOS ?? false,
    { initializeWithValue }
  )
  useIsomorphicLayoutEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(isDarkOS)
    }
  }, [isDarkOS])
  return {
    isDarkMode,
    toggle: () => {
      setDarkMode((prev) => !prev)
    },
    enable: () => {
      setDarkMode(true)
    },
    disable: () => {
      setDarkMode(false)
    },
    set: (value) => {
      setDarkMode(value)
    }
  }
}
function useUnmount(func) {
  const funcRef = (0, import_react.useRef)(func)
  funcRef.current = func
  ;(0, import_react.useEffect)(
    () => () => {
      funcRef.current()
    },
    []
  )
}
function useDebounceCallback(func, delay = 500, options) {
  const debouncedFunc = (0, import_react.useRef)()
  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel()
    }
  })
  const debounced = (0, import_react.useMemo)(() => {
    const debouncedFuncInstance = (0, import_lodash.default)(
      func,
      delay,
      options
    )
    const wrappedFunc = (...args) => {
      return debouncedFuncInstance(...args)
    }
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel()
    }
    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current
    }
    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush()
    }
    return wrappedFunc
  }, [func, delay, options])
  ;(0, import_react.useEffect)(() => {
    debouncedFunc.current = (0, import_lodash.default)(func, delay, options)
  }, [func, delay, options])
  return debounced
}
function useDebounceValue(initialValue, delay, options) {
  const eq =
    (options == null ? void 0 : options.equalityFn) ??
    ((left, right) => left === right)
  const unwrappedInitialValue =
    initialValue instanceof Function ? initialValue() : initialValue
  const [debouncedValue, setDebouncedValue] = (0, import_react.useState)(
    unwrappedInitialValue
  )
  const previousValueRef = (0, import_react.useRef)(unwrappedInitialValue)
  const updateDebouncedValue = useDebounceCallback(
    setDebouncedValue,
    delay,
    options
  )
  if (!eq(previousValueRef.current, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue)
    previousValueRef.current = unwrappedInitialValue
  }
  return [debouncedValue, updateDebouncedValue]
}
function useDocumentTitle(title, options = {}) {
  const { preserveTitleOnUnmount = true } = options
  const defaultTitle = (0, import_react.useRef)(null)
  useIsomorphicLayoutEffect(() => {
    defaultTitle.current = window.document.title
  }, [])
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])
  useUnmount(() => {
    if (!preserveTitleOnUnmount && defaultTitle.current) {
      window.document.title = defaultTitle.current
    }
  })
}
function useHover(elementRef) {
  const [value, setValue] = (0, import_react.useState)(false)
  const handleMouseEnter = () => {
    setValue(true)
  }
  const handleMouseLeave = () => {
    setValue(false)
  }
  useEventListener("mouseenter", handleMouseEnter, elementRef)
  useEventListener("mouseleave", handleMouseLeave, elementRef)
  return value
}
function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = "0%",
  freezeOnceVisible = false,
  initialIsIntersecting = false,
  onChange
} = {}) {
  var _a
  const [ref, setRef] = (0, import_react.useState)(null)
  const [state, setState] = (0, import_react.useState)(() => ({
    isIntersecting: initialIsIntersecting,
    entry: void 0
  }))
  const callbackRef = (0, import_react.useRef)()
  callbackRef.current = onChange
  const frozen =
    ((_a = state.entry) == null ? void 0 : _a.isIntersecting) &&
    freezeOnceVisible
  ;(0, import_react.useEffect)(() => {
    if (!ref) return
    if (!("IntersectionObserver" in window)) return
    if (frozen) return
    let unobserve
    const observer = new IntersectionObserver(
      (entries) => {
        const thresholds = Array.isArray(observer.thresholds)
          ? observer.thresholds
          : [observer.thresholds]
        entries.forEach((entry) => {
          const isIntersecting =
            entry.isIntersecting &&
            thresholds.some(
              (threshold2) => entry.intersectionRatio >= threshold2
            )
          setState({ isIntersecting, entry })
          if (callbackRef.current) {
            callbackRef.current(isIntersecting, entry)
          }
          if (isIntersecting && freezeOnceVisible && unobserve) {
            unobserve()
            unobserve = void 0
          }
        })
      },
      { threshold, root, rootMargin }
    )
    observer.observe(ref)
    return () => {
      observer.disconnect()
    }
  }, [
    ref,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
    freezeOnceVisible
  ])
  const prevRef = (0, import_react.useRef)(null)
  ;(0, import_react.useEffect)(() => {
    var _a2
    if (
      !ref &&
      ((_a2 = state.entry) == null ? void 0 : _a2.target) &&
      !freezeOnceVisible &&
      !frozen &&
      prevRef.current !== state.entry.target
    ) {
      prevRef.current = state.entry.target
      setState({ isIntersecting: initialIsIntersecting, entry: void 0 })
    }
  }, [ref, state.entry, freezeOnceVisible, frozen, initialIsIntersecting])
  const result = [setRef, !!state.isIntersecting, state.entry]
  result.ref = result[0]
  result.isIntersecting = result[1]
  result.entry = result[2]
  return result
}
function useIsClient() {
  const [isClient, setClient] = (0, import_react.useState)(false)
  ;(0, import_react.useEffect)(() => {
    setClient(true)
  }, [])
  return isClient
}
function useIsMounted() {
  const isMounted = (0, import_react.useRef)(false)
  ;(0, import_react.useEffect)(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])
  return (0, import_react.useCallback)(() => isMounted.current, [])
}
function useMap(initialState = /* @__PURE__ */ new Map()) {
  const [map, setMap] = (0, import_react.useState)(new Map(initialState))
  const actions = {
    set: (0, import_react.useCallback)((key, value) => {
      setMap((prev) => {
        const copy = new Map(prev)
        copy.set(key, value)
        return copy
      })
    }, []),
    setAll: (0, import_react.useCallback)((entries) => {
      setMap(() => new Map(entries))
    }, []),
    remove: (0, import_react.useCallback)((key) => {
      setMap((prev) => {
        const copy = new Map(prev)
        copy.delete(key)
        return copy
      })
    }, []),
    reset: (0, import_react.useCallback)(() => {
      setMap(() => /* @__PURE__ */ new Map())
    }, [])
  }
  return [map, actions]
}
function useOnClickOutside(
  ref,
  handler,
  eventType = "mousedown",
  eventListenerOptions = {}
) {
  useEventListener(
    eventType,
    (event) => {
      const target = event.target
      if (!target || !target.isConnected) {
        return
      }
      const isOutside = Array.isArray(ref)
        ? ref
            .filter((r) => Boolean(r.current))
            .every((r) => r.current && !r.current.contains(target))
        : ref.current && !ref.current.contains(target)
      if (isOutside) {
        handler(event)
      }
    },
    void 0,
    eventListenerOptions
  )
}
var IS_SERVER3 = typeof window === "undefined"
function useReadLocalStorage(key, options = {}) {
  let { initializeWithValue = true } = options
  if (IS_SERVER3) {
    initializeWithValue = false
  }
  const deserializer = (0, import_react.useCallback)(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value)
      }
      if (value === "undefined") {
        return void 0
      }
      let parsed
      try {
        parsed = JSON.parse(value)
      } catch (error) {
        console.error("Error parsing JSON:", error)
        return null
      }
      return parsed
    },
    [options]
  )
  const readValue = (0, import_react.useCallback)(() => {
    if (IS_SERVER3) {
      return null
    }
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? deserializer(raw) : null
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return null
    }
  }, [key, deserializer])
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return readValue()
    }
    return void 0
  })
  ;(0, import_react.useEffect)(() => {
    setStoredValue(readValue())
  }, [key])
  const handleStorageChange = (0, import_react.useCallback)(
    (event) => {
      if (event.key && event.key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )
  useEventListener("storage", handleStorageChange)
  useEventListener("local-storage", handleStorageChange)
  return storedValue
}
var initialSize = {
  width: void 0,
  height: void 0
}
function useResizeObserver(options) {
  const { ref, box = "content-box" } = options
  const [{ width, height }, setSize] = (0, import_react.useState)(initialSize)
  const isMounted = useIsMounted()
  const previousSize = (0, import_react.useRef)({ ...initialSize })
  const onResize = (0, import_react.useRef)(void 0)
  onResize.current = options.onResize
  ;(0, import_react.useEffect)(() => {
    if (!ref.current) return
    if (typeof window === "undefined" || !("ResizeObserver" in window)) return
    const observer = new ResizeObserver(([entry]) => {
      const boxProp =
        box === "border-box"
          ? "borderBoxSize"
          : box === "device-pixel-content-box"
            ? "devicePixelContentBoxSize"
            : "contentBoxSize"
      const newWidth = extractSize(entry, boxProp, "inlineSize")
      const newHeight = extractSize(entry, boxProp, "blockSize")
      const hasChanged =
        previousSize.current.width !== newWidth ||
        previousSize.current.height !== newHeight
      if (hasChanged) {
        const newSize = { width: newWidth, height: newHeight }
        previousSize.current.width = newWidth
        previousSize.current.height = newHeight
        if (onResize.current) {
          onResize.current(newSize)
        } else {
          if (isMounted()) {
            setSize(newSize)
          }
        }
      }
    })
    observer.observe(ref.current, { box })
    return () => {
      observer.disconnect()
    }
  }, [box, ref, isMounted])
  return { width, height }
}
function extractSize(entry, box, sizeType) {
  if (!entry[box]) {
    if (box === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"]
    }
    return void 0
  }
  return Array.isArray(entry[box])
    ? entry[box][0][sizeType]
    : // @ts-ignore Support Firefox's non-standard behavior
      entry[box][sizeType]
}
var IS_SERVER4 = typeof window === "undefined"
function useScreen(options = {}) {
  let { initializeWithValue = true } = options
  if (IS_SERVER4) {
    initializeWithValue = false
  }
  const readScreen = () => {
    if (IS_SERVER4) {
      return void 0
    }
    return window.screen
  }
  const [screen, setScreen] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return readScreen()
    }
    return void 0
  })
  const debouncedSetScreen = useDebounceCallback(
    setScreen,
    options.debounceDelay
  )
  function handleSize() {
    const newScreen = readScreen()
    const setSize = options.debounceDelay ? debouncedSetScreen : setScreen
    if (newScreen) {
      const {
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      } = newScreen
      setSize({
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      })
    }
  }
  useEventListener("resize", handleSize)
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])
  return screen
}
var cachedScriptStatuses = /* @__PURE__ */ new Map()
function getScriptNode(src) {
  const node = document.querySelector(`script[src="${src}"]`)
  const status = node == null ? void 0 : node.getAttribute("data-status")
  return {
    node,
    status
  }
}
function useScript(src, options) {
  const [status, setStatus] = (0, import_react.useState)(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return "idle"
    }
    if (typeof window === "undefined") {
      return "loading"
    }
    return cachedScriptStatuses.get(src) ?? "loading"
  })
  ;(0, import_react.useEffect)(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return
    }
    const cachedScriptStatus = cachedScriptStatuses.get(src)
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus)
      return
    }
    const script = getScriptNode(src)
    let scriptNode = script.node
    if (!scriptNode) {
      scriptNode = document.createElement("script")
      scriptNode.src = src
      scriptNode.async = true
      if (options == null ? void 0 : options.id) {
        scriptNode.id = options.id
      }
      scriptNode.setAttribute("data-status", "loading")
      document.body.appendChild(scriptNode)
      const setAttributeFromEvent = (event) => {
        const scriptStatus = event.type === "load" ? "ready" : "error"
        scriptNode == null
          ? void 0
          : scriptNode.setAttribute("data-status", scriptStatus)
      }
      scriptNode.addEventListener("load", setAttributeFromEvent)
      scriptNode.addEventListener("error", setAttributeFromEvent)
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? "loading")
    }
    const setStateFromEvent = (event) => {
      const newStatus = event.type === "load" ? "ready" : "error"
      setStatus(newStatus)
      cachedScriptStatuses.set(src, newStatus)
    }
    scriptNode.addEventListener("load", setStateFromEvent)
    scriptNode.addEventListener("error", setStateFromEvent)
    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener("load", setStateFromEvent)
        scriptNode.removeEventListener("error", setStateFromEvent)
      }
      if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
        scriptNode.remove()
        cachedScriptStatuses.delete(src)
      }
    }
  }, [
    src,
    options == null ? void 0 : options.shouldPreventLoad,
    options == null ? void 0 : options.removeOnUnmount,
    options == null ? void 0 : options.id
  ])
  return status
}
var IS_SERVER5 = typeof window === "undefined"
function useScrollLock(options = {}) {
  const { autoLock = true, lockTarget, widthReflow = true } = options
  const [isLocked, setIsLocked] = (0, import_react.useState)(false)
  const target = (0, import_react.useRef)(null)
  const originalStyle = (0, import_react.useRef)(null)
  const lock = () => {
    if (target.current) {
      const { overflow, paddingRight } = target.current.style
      originalStyle.current = { overflow, paddingRight }
      if (widthReflow) {
        const offsetWidth =
          target.current === document.body
            ? window.innerWidth
            : target.current.offsetWidth
        const currentPaddingRight =
          parseInt(window.getComputedStyle(target.current).paddingRight, 10) ||
          0
        const scrollbarWidth = offsetWidth - target.current.scrollWidth
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`
      }
      target.current.style.overflow = "hidden"
      setIsLocked(true)
    }
  }
  const unlock = () => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow
      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight
      }
    }
    setIsLocked(false)
  }
  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER5) return
    if (lockTarget) {
      target.current =
        typeof lockTarget === "string"
          ? document.querySelector(lockTarget)
          : lockTarget
    }
    if (!target.current) {
      target.current = document.body
    }
    if (autoLock) {
      lock()
    }
    return () => {
      unlock()
    }
  }, [autoLock, lockTarget, widthReflow])
  return { isLocked, lock, unlock }
}
var IS_SERVER6 = typeof window === "undefined"
function useSessionStorage(key, initialValue, options = {}) {
  const { initializeWithValue = true } = options
  const serializer = (0, import_react.useCallback)(
    (value) => {
      if (options.serializer) {
        return options.serializer(value)
      }
      return JSON.stringify(value)
    },
    [options]
  )
  const deserializer = (0, import_react.useCallback)(
    (value) => {
      if (options.deserializer) {
        return options.deserializer(value)
      }
      if (value === "undefined") {
        return void 0
      }
      const defaultValue =
        initialValue instanceof Function ? initialValue() : initialValue
      let parsed
      try {
        parsed = JSON.parse(value)
      } catch (error) {
        console.error("Error parsing JSON:", error)
        return defaultValue
      }
      return parsed
    },
    [options, initialValue]
  )
  const readValue = (0, import_react.useCallback)(() => {
    const initialValueToUse =
      initialValue instanceof Function ? initialValue() : initialValue
    if (IS_SERVER6) {
      return initialValueToUse
    }
    try {
      const raw = window.sessionStorage.getItem(key)
      return raw ? deserializer(raw) : initialValueToUse
    } catch (error) {
      console.warn(`Error reading sessionStorage key “${key}”:`, error)
      return initialValueToUse
    }
  }, [initialValue, key, deserializer])
  const [storedValue, setStoredValue] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return readValue()
    }
    return initialValue instanceof Function ? initialValue() : initialValue
  })
  const setValue = useEventCallback((value) => {
    if (IS_SERVER6) {
      console.warn(
        `Tried setting sessionStorage key “${key}” even though environment is not a client`
      )
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value
      window.sessionStorage.setItem(key, serializer(newValue))
      setStoredValue(newValue)
      window.dispatchEvent(new StorageEvent("session-storage", { key }))
    } catch (error) {
      console.warn(`Error setting sessionStorage key “${key}”:`, error)
    }
  })
  const removeValue = useEventCallback(() => {
    if (IS_SERVER6) {
      console.warn(
        `Tried removing sessionStorage key “${key}” even though environment is not a client`
      )
    }
    const defaultValue =
      initialValue instanceof Function ? initialValue() : initialValue
    window.sessionStorage.removeItem(key)
    setStoredValue(defaultValue)
    window.dispatchEvent(new StorageEvent("session-storage", { key }))
  })
  ;(0, import_react.useEffect)(() => {
    setStoredValue(readValue())
  }, [key])
  const handleStorageChange = (0, import_react.useCallback)(
    (event) => {
      if (event.key && event.key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue]
  )
  useEventListener("storage", handleStorageChange)
  useEventListener("session-storage", handleStorageChange)
  return [storedValue, setValue, removeValue]
}
function useStep(maxStep) {
  const [currentStep, setCurrentStep] = (0, import_react.useState)(1)
  const canGoToNextStep = currentStep + 1 <= maxStep
  const canGoToPrevStep = currentStep - 1 > 0
  const setStep = (0, import_react.useCallback)(
    (step) => {
      const newStep = step instanceof Function ? step(currentStep) : step
      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep)
        return
      }
      throw new Error("Step not valid")
    },
    [maxStep, currentStep]
  )
  const goToNextStep = (0, import_react.useCallback)(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1)
    }
  }, [canGoToNextStep])
  const goToPrevStep = (0, import_react.useCallback)(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1)
    }
  }, [canGoToPrevStep])
  const reset = (0, import_react.useCallback)(() => {
    setCurrentStep(1)
  }, [])
  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset
    }
  ]
}
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)"
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode"
function useTernaryDarkMode({
  defaultValue = "system",
  localStorageKey = LOCAL_STORAGE_KEY2,
  initializeWithValue = true
} = {}) {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, { initializeWithValue })
  const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
    initializeWithValue
  })
  const isDarkMode = mode === "dark" || (mode === "system" && isDarkOS)
  const toggleTernaryDarkMode = () => {
    const modes = ["light", "system", "dark"]
    setMode((prevMode) => {
      const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length
      return modes[nextIndex]
    })
  }
  return {
    isDarkMode,
    ternaryDarkMode: mode,
    setTernaryDarkMode: setMode,
    toggleTernaryDarkMode
  }
}
function useTimeout(callback, delay) {
  const savedCallback = (0, import_react.useRef)(callback)
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])
  ;(0, import_react.useEffect)(() => {
    if (!delay && delay !== 0) {
      return
    }
    const id = setTimeout(() => {
      savedCallback.current()
    }, delay)
    return () => {
      clearTimeout(id)
    }
  }, [delay])
}
function useToggle(defaultValue) {
  const [value, setValue] = (0, import_react.useState)(!!defaultValue)
  const toggle = (0, import_react.useCallback)(() => {
    setValue((x) => !x)
  }, [])
  return [value, toggle, setValue]
}
var IS_SERVER7 = typeof window === "undefined"
function useWindowSize(options = {}) {
  let { initializeWithValue = true } = options
  if (IS_SERVER7) {
    initializeWithValue = false
  }
  const [windowSize, setWindowSize] = (0, import_react.useState)(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    return {
      width: void 0,
      height: void 0
    }
  })
  const debouncedSetWindowSize = useDebounceCallback(
    setWindowSize,
    options.debounceDelay
  )
  function handleSize() {
    const setSize = options.debounceDelay
      ? debouncedSetWindowSize
      : setWindowSize
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  useEventListener("resize", handleSize)
  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, [])
  return windowSize
}
export {
  useBoolean,
  useClickAnyWhere,
  useCopyToClipboard,
  useCountdown,
  useCounter,
  useDarkMode,
  useDebounceCallback,
  useDebounceValue,
  useDocumentTitle,
  useEventCallback,
  useEventListener,
  useHover,
  useIntersectionObserver,
  useInterval,
  useIsClient,
  useIsMounted,
  useIsomorphicLayoutEffect,
  useLocalStorage,
  useMap,
  useMediaQuery,
  useOnClickOutside,
  useReadLocalStorage,
  useResizeObserver,
  useScreen,
  useScript,
  useScrollLock,
  useSessionStorage,
  useStep,
  useTernaryDarkMode,
  useTimeout,
  useToggle,
  useUnmount,
  useWindowSize
}
//# sourceMappingURL=usehooks-ts.js.map
