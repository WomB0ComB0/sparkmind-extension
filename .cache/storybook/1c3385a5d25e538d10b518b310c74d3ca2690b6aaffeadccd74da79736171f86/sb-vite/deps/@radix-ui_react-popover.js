"use client"

import {
  Combination_default,
  DismissableLayer,
  FocusScope,
  Portal,
  useControllableState,
  useFocusGuards,
  useId
} from "./chunk-5257FRLI.js"
import { Slot, useComposedRefs } from "./chunk-BZVITDLD.js"
import { hideOthers } from "./chunk-HJTRQ57Q.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import {
  composeEventHandlers,
  createContextScope,
  Presence,
  Primitive,
  useCallbackRef,
  useLayoutEffect2
} from "./chunk-VJ57L2ZC.js"
import { require_react } from "./chunk-VMU3GUP3.js"
import { require_react_dom } from "./chunk-YGZ2ZWFG.js"
import { require_jsx_runtime } from "./chunk-YIS5ZZUK.js"

// node_modules/.pnpm/@radix-ui+react-popover@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.mjs
var React5 = __toESM(require_react(), 1)

// node_modules/.pnpm/@radix-ui+react-popper@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.mjs
var React4 = __toESM(require_react(), 1)

// node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"]
var alignments = ["start", "end"]
var placements = sides.reduce(
  (acc, side) =>
    acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]),
  []
)
var min = Math.min
var max = Math.max
var round = Math.round
var floor = Math.floor
var createCoords = (v) => ({
  x: v,
  y: v
})
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
}
function clamp(start, value, end) {
  return max(start, min(value, end))
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value
}
function getSide(placement) {
  return placement.split("-")[0]
}
function getAlignment(placement) {
  return placement.split("-")[1]
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x"
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width"
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x"
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement))
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false
  }
  const alignment = getAlignment(placement)
  const alignmentAxis = getAlignmentAxis(placement)
  const length = getAxisLength(alignmentAxis)
  let mainAlignmentSide =
    alignmentAxis === "x"
      ? alignment === (rtl ? "end" : "start")
        ? "right"
        : "left"
      : alignment === "start"
        ? "bottom"
        : "top"
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide)
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)]
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement)
  return [
    getOppositeAlignmentPlacement(placement),
    oppositePlacement,
    getOppositeAlignmentPlacement(oppositePlacement)
  ]
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(
    /start|end/g,
    (alignment) => oppositeAlignmentMap[alignment]
  )
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"]
  const rl = ["right", "left"]
  const tb = ["top", "bottom"]
  const bt = ["bottom", "top"]
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr
      return isStart ? lr : rl
    case "left":
    case "right":
      return isStart ? tb : bt
    default:
      return []
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement)
  let list = getSideList(getSide(placement), direction === "start", rtl)
  if (alignment) {
    list = list.map((side) => side + "-" + alignment)
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement))
    }
  }
  return list
}
function getOppositePlacement(placement) {
  return placement.replace(
    /left|right|bottom|top/g,
    (side) => oppositeSideMap[side]
  )
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  }
}
function getPaddingObject(padding) {
  return typeof padding !== "number"
    ? expandPaddingObject(padding)
    : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      }
}
function rectToClientRect(rect) {
  const { x, y, width, height } = rect
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  }
}

// node_modules/.pnpm/@floating-ui+core@1.6.7/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  const { reference, floating } = _ref
  const sideAxis = getSideAxis(placement)
  const alignmentAxis = getAlignmentAxis(placement)
  const alignLength = getAxisLength(alignmentAxis)
  const side = getSide(placement)
  const isVertical = sideAxis === "y"
  const commonX = reference.x + reference.width / 2 - floating.width / 2
  const commonY = reference.y + reference.height / 2 - floating.height / 2
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2
  let coords
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      }
      break
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      }
      break
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      }
      break
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      }
      break
    default:
      coords = {
        x: reference.x,
        y: reference.y
      }
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1)
      break
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1)
      break
  }
  return coords
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config
  const validMiddleware = middleware.filter(Boolean)
  const rtl = await (platform2.isRTL == null
    ? void 0
    : platform2.isRTL(floating))
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  })
  let { x, y } = computeCoordsFromPlacement(rects, placement, rtl)
  let statefulPlacement = placement
  let middlewareData = {}
  let resetCount = 0
  for (let i = 0; i < validMiddleware.length; i++) {
    const { name, fn } = validMiddleware[i]
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    })
    x = nextX != null ? nextX : x
    y = nextY != null ? nextY : y
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    }
    if (reset && resetCount <= 50) {
      resetCount++
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement
        }
        if (reset.rects) {
          rects =
            reset.rects === true
              ? await platform2.getElementRects({
                  reference,
                  floating,
                  strategy
                })
              : reset.rects
        }
        ;({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl))
      }
      i = -1
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  }
}
async function detectOverflow(state, options) {
  var _await$platform$isEle
  if (options === void 0) {
    options = {}
  }
  const { x, y, platform: platform2, rects, elements, strategy } = state
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state)
  const paddingObject = getPaddingObject(padding)
  const altContext = elementContext === "floating" ? "reference" : "floating"
  const element = elements[altBoundary ? altContext : elementContext]
  const clippingClientRect = rectToClientRect(
    await platform2.getClippingRect({
      element: (
        (_await$platform$isEle = await (platform2.isElement == null
          ? void 0
          : platform2.isElement(element))) != null
          ? _await$platform$isEle
          : true
      )
        ? element
        : element.contextElement ||
          (await (platform2.getDocumentElement == null
            ? void 0
            : platform2.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    })
  )
  const rect =
    elementContext === "floating"
      ? {
          x,
          y,
          width: rects.floating.width,
          height: rects.floating.height
        }
      : rects.reference
  const offsetParent = await (platform2.getOffsetParent == null
    ? void 0
    : platform2.getOffsetParent(elements.floating))
  const offsetScale = (await (platform2.isElement == null
    ? void 0
    : platform2.isElement(offsetParent)))
    ? (await (platform2.getScale == null
        ? void 0
        : platform2.getScale(offsetParent))) || {
        x: 1,
        y: 1
      }
    : {
        x: 1,
        y: 1
      }
  const elementClientRect = rectToClientRect(
    platform2.convertOffsetParentRelativeRectToViewportRelativeRect
      ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements,
          rect,
          offsetParent,
          strategy
        })
      : rect
  )
  return {
    top:
      (clippingClientRect.top - elementClientRect.top + paddingObject.top) /
      offsetScale.y,
    bottom:
      (elementClientRect.bottom -
        clippingClientRect.bottom +
        paddingObject.bottom) /
      offsetScale.y,
    left:
      (clippingClientRect.left - elementClientRect.left + paddingObject.left) /
      offsetScale.x,
    right:
      (elementClientRect.right -
        clippingClientRect.right +
        paddingObject.right) /
      offsetScale.x
  }
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state
    const { element, padding = 0 } = evaluate(options, state) || {}
    if (element == null) {
      return {}
    }
    const paddingObject = getPaddingObject(padding)
    const coords = {
      x,
      y
    }
    const axis = getAlignmentAxis(placement)
    const length = getAxisLength(axis)
    const arrowDimensions = await platform2.getDimensions(element)
    const isYAxis = axis === "y"
    const minProp = isYAxis ? "top" : "left"
    const maxProp = isYAxis ? "bottom" : "right"
    const clientProp = isYAxis ? "clientHeight" : "clientWidth"
    const endDiff =
      rects.reference[length] +
      rects.reference[axis] -
      coords[axis] -
      rects.floating[length]
    const startDiff = coords[axis] - rects.reference[axis]
    const arrowOffsetParent = await (platform2.getOffsetParent == null
      ? void 0
      : platform2.getOffsetParent(element))
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0
    if (
      !clientSize ||
      !(await (platform2.isElement == null
        ? void 0
        : platform2.isElement(arrowOffsetParent)))
    ) {
      clientSize = elements.floating[clientProp] || rects.floating[length]
    }
    const centerToReference = endDiff / 2 - startDiff / 2
    const largestPossiblePadding =
      clientSize / 2 - arrowDimensions[length] / 2 - 1
    const minPadding = min(paddingObject[minProp], largestPossiblePadding)
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding)
    const min$1 = minPadding
    const max2 = clientSize - arrowDimensions[length] - maxPadding
    const center =
      clientSize / 2 - arrowDimensions[length] / 2 + centerToReference
    const offset4 = clamp(min$1, center, max2)
    const shouldAddOffset =
      !middlewareData.arrow &&
      getAlignment(placement) != null &&
      center !== offset4 &&
      rects.reference[length] / 2 -
        (center < min$1 ? minPadding : maxPadding) -
        arrowDimensions[length] / 2 <
        0
    const alignmentOffset = shouldAddOffset
      ? center < min$1
        ? center - min$1
        : center - max2
      : 0
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    }
  }
})
var flip = (options) => {
  if (options === void 0) {
    options = {}
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state)
      if (
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {}
      }
      const side = getSide(placement)
      const initialSideAxis = getSideAxis(initialPlacement)
      const isBasePlacement = getSide(initialPlacement) === initialPlacement
      const rtl = await (platform2.isRTL == null
        ? void 0
        : platform2.isRTL(elements.floating))
      const fallbackPlacements =
        specifiedFallbackPlacements ||
        (isBasePlacement || !flipAlignment
          ? [getOppositePlacement(initialPlacement)]
          : getExpandedPlacements(initialPlacement))
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none"
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(
          ...getOppositeAxisPlacements(
            initialPlacement,
            flipAlignment,
            fallbackAxisSideDirection,
            rtl
          )
        )
      }
      const placements2 = [initialPlacement, ...fallbackPlacements]
      const overflow = await detectOverflow(state, detectOverflowOptions)
      const overflows = []
      let overflowsData =
        ((_middlewareData$flip = middlewareData.flip) == null
          ? void 0
          : _middlewareData$flip.overflows) || []
      if (checkMainAxis) {
        overflows.push(overflow[side])
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl)
        overflows.push(overflow[sides2[0]], overflow[sides2[1]])
      }
      overflowsData = [
        ...overflowsData,
        {
          placement,
          overflows
        }
      ]
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter
        const nextIndex =
          (((_middlewareData$flip2 = middlewareData.flip) == null
            ? void 0
            : _middlewareData$flip2.index) || 0) + 1
        const nextPlacement = placements2[nextIndex]
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          }
        }
        let resetPlacement =
          (_overflowsData$filter = overflowsData
            .filter((d) => d.overflows[0] <= 0)
            .sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null
            ? void 0
            : _overflowsData$filter.placement
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2
              const placement2 =
                (_overflowsData$filter2 = overflowsData
                  .filter((d) => {
                    if (hasFallbackAxisSideDirection) {
                      const currentSideAxis = getSideAxis(d.placement)
                      return (
                        currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                        // reading directions favoring greater width.
                        currentSideAxis === "y"
                      )
                    }
                    return true
                  })
                  .map((d) => [
                    d.placement,
                    d.overflows
                      .filter((overflow2) => overflow2 > 0)
                      .reduce((acc, overflow2) => acc + overflow2, 0)
                  ])
                  .sort((a, b) => a[1] - b[1])[0]) == null
                  ? void 0
                  : _overflowsData$filter2[0]
              if (placement2) {
                resetPlacement = placement2
              }
              break
            }
            case "initialPlacement":
              resetPlacement = initialPlacement
              break
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          }
        }
      }
      return {}
    }
  }
}
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  }
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0)
}
var hide = (options) => {
  if (options === void 0) {
    options = {}
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const { rects } = state
      const { strategy = "referenceHidden", ...detectOverflowOptions } =
        evaluate(options, state)
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          })
          const offsets = getSideOffsets(overflow, rects.reference)
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          }
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          })
          const offsets = getSideOffsets(overflow, rects.floating)
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          }
        }
        default: {
          return {}
        }
      }
    }
  }
}
async function convertValueToCoords(state, options) {
  const { placement, platform: platform2, elements } = state
  const rtl = await (platform2.isRTL == null
    ? void 0
    : platform2.isRTL(elements.floating))
  const side = getSide(placement)
  const alignment = getAlignment(placement)
  const isVertical = getSideAxis(placement) === "y"
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1
  const crossAxisMulti = rtl && isVertical ? -1 : 1
  const rawValue = evaluate(options, state)
  let { mainAxis, crossAxis, alignmentAxis } =
    typeof rawValue === "number"
      ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null
        }
      : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ...rawValue
        }
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis
  }
  return isVertical
    ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
      }
    : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
      }
}
var offset = (options) => {
  if (options === void 0) {
    options = 0
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow
      const { x, y, placement, middlewareData } = state
      const diffCoords = await convertValueToCoords(state, options)
      if (
        placement ===
          ((_middlewareData$offse = middlewareData.offset) == null
            ? void 0
            : _middlewareData$offse.placement) &&
        (_middlewareData$arrow = middlewareData.arrow) != null &&
        _middlewareData$arrow.alignmentOffset
      ) {
        return {}
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      }
    }
  }
}
var shift = (options) => {
  if (options === void 0) {
    options = {}
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const { x, y, placement } = state
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            const { x: x2, y: y2 } = _ref
            return {
              x: x2,
              y: y2
            }
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state)
      const coords = {
        x,
        y
      }
      const overflow = await detectOverflow(state, detectOverflowOptions)
      const crossAxis = getSideAxis(getSide(placement))
      const mainAxis = getOppositeAxis(crossAxis)
      let mainAxisCoord = coords[mainAxis]
      let crossAxisCoord = coords[crossAxis]
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left"
        const maxSide = mainAxis === "y" ? "bottom" : "right"
        const min2 = mainAxisCoord + overflow[minSide]
        const max2 = mainAxisCoord - overflow[maxSide]
        mainAxisCoord = clamp(min2, mainAxisCoord, max2)
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left"
        const maxSide = crossAxis === "y" ? "bottom" : "right"
        const min2 = crossAxisCoord + overflow[minSide]
        const max2 = crossAxisCoord - overflow[maxSide]
        crossAxisCoord = clamp(min2, crossAxisCoord, max2)
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      })
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      }
    }
  }
}
var limitShift = (options) => {
  if (options === void 0) {
    options = {}
  }
  return {
    options,
    fn(state) {
      const { x, y, placement, rects, middlewareData } = state
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state)
      const coords = {
        x,
        y
      }
      const crossAxis = getSideAxis(placement)
      const mainAxis = getOppositeAxis(crossAxis)
      let mainAxisCoord = coords[mainAxis]
      let crossAxisCoord = coords[crossAxis]
      const rawOffset = evaluate(offset4, state)
      const computedOffset =
        typeof rawOffset === "number"
          ? {
              mainAxis: rawOffset,
              crossAxis: 0
            }
          : {
              mainAxis: 0,
              crossAxis: 0,
              ...rawOffset
            }
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width"
        const limitMin =
          rects.reference[mainAxis] -
          rects.floating[len] +
          computedOffset.mainAxis
        const limitMax =
          rects.reference[mainAxis] +
          rects.reference[len] -
          computedOffset.mainAxis
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2
        const len = mainAxis === "y" ? "width" : "height"
        const isOriginSide = ["top", "left"].includes(getSide(placement))
        const limitMin =
          rects.reference[crossAxis] -
          rects.floating[len] +
          (isOriginSide
            ? ((_middlewareData$offse = middlewareData.offset) == null
                ? void 0
                : _middlewareData$offse[crossAxis]) || 0
            : 0) +
          (isOriginSide ? 0 : computedOffset.crossAxis)
        const limitMax =
          rects.reference[crossAxis] +
          rects.reference[len] +
          (isOriginSide
            ? 0
            : ((_middlewareData$offse2 = middlewareData.offset) == null
                ? void 0
                : _middlewareData$offse2[crossAxis]) || 0) -
          (isOriginSide ? computedOffset.crossAxis : 0)
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      }
    }
  }
}
var size = (options) => {
  if (options === void 0) {
    options = {}
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const { placement, rects, platform: platform2, elements } = state
      const { apply = () => {}, ...detectOverflowOptions } = evaluate(
        options,
        state
      )
      const overflow = await detectOverflow(state, detectOverflowOptions)
      const side = getSide(placement)
      const alignment = getAlignment(placement)
      const isYAxis = getSideAxis(placement) === "y"
      const { width, height } = rects.floating
      let heightSide
      let widthSide
      if (side === "top" || side === "bottom") {
        heightSide = side
        widthSide =
          alignment ===
          ((await (platform2.isRTL == null
            ? void 0
            : platform2.isRTL(elements.floating)))
            ? "start"
            : "end")
            ? "left"
            : "right"
      } else {
        widthSide = side
        heightSide = alignment === "end" ? "top" : "bottom"
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom
      const maximumClippingWidth = width - overflow.left - overflow.right
      const overflowAvailableHeight = min(
        height - overflow[heightSide],
        maximumClippingHeight
      )
      const overflowAvailableWidth = min(
        width - overflow[widthSide],
        maximumClippingWidth
      )
      const noShift = !state.middlewareData.shift
      let availableHeight = overflowAvailableHeight
      let availableWidth = overflowAvailableWidth
      if (isYAxis) {
        availableWidth =
          alignment || noShift
            ? min(overflowAvailableWidth, maximumClippingWidth)
            : maximumClippingWidth
      } else {
        availableHeight =
          alignment || noShift
            ? min(overflowAvailableHeight, maximumClippingHeight)
            : maximumClippingHeight
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0)
        const xMax = max(overflow.right, 0)
        const yMin = max(overflow.top, 0)
        const yMax = max(overflow.bottom, 0)
        if (isYAxis) {
          availableWidth =
            width -
            2 *
              (xMin !== 0 || xMax !== 0
                ? xMin + xMax
                : max(overflow.left, overflow.right))
        } else {
          availableHeight =
            height -
            2 *
              (yMin !== 0 || yMax !== 0
                ? yMin + yMax
                : max(overflow.top, overflow.bottom))
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      })
      const nextDimensions = await platform2.getDimensions(elements.floating)
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        }
      }
      return {}
    }
  }
}

// node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase()
  }
  return "#document"
}
function getWindow(node) {
  var _node$ownerDocument
  return (
    (node == null || (_node$ownerDocument = node.ownerDocument) == null
      ? void 0
      : _node$ownerDocument.defaultView) || window
  )
}
function getDocumentElement(node) {
  var _ref
  return (_ref =
    (isNode(node) ? node.ownerDocument : node.document) || window.document) ==
    null
    ? void 0
    : _ref.documentElement
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element
}
function isHTMLElement(value) {
  return (
    value instanceof HTMLElement ||
    value instanceof getWindow(value).HTMLElement
  )
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false
  }
  return (
    value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot
  )
}
function isOverflowElement(element) {
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element)
  return (
    /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) &&
    !["inline", "contents"].includes(display)
  )
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element))
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector)
    } catch (e) {
      return false
    }
  })
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit()
  const css = isElement(elementOrCss)
    ? getComputedStyle(elementOrCss)
    : elementOrCss
  return (
    css.transform !== "none" ||
    css.perspective !== "none" ||
    (css.containerType ? css.containerType !== "normal" : false) ||
    (!webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false)) ||
    (!webkit && (css.filter ? css.filter !== "none" : false)) ||
    ["transform", "perspective", "filter"].some((value) =>
      (css.willChange || "").includes(value)
    ) ||
    ["paint", "layout", "strict", "content"].some((value) =>
      (css.contain || "").includes(value)
    )
  )
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element)
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode
    } else if (isTopLayer(currentNode)) {
      return null
    }
    currentNode = getParentNode(currentNode)
  }
  return null
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false
  return CSS.supports("-webkit-backdrop-filter", "none")
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node))
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element)
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    }
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  }
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node
  }
  const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    (isShadowRoot(node) && node.host) || // Fallback.
    getDocumentElement(node)
  return isShadowRoot(result) ? result.host : result
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node)
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode
  }
  return getNearestOverflowAncestor(parentNode)
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2
  if (list === void 0) {
    list = []
  }
  if (traverseIframes === void 0) {
    traverseIframes = true
  }
  const scrollableAncestor = getNearestOverflowAncestor(node)
  const isBody =
    scrollableAncestor ===
    ((_node$ownerDocument2 = node.ownerDocument) == null
      ? void 0
      : _node$ownerDocument2.body)
  const win = getWindow(scrollableAncestor)
  if (isBody) {
    const frameElement = getFrameElement(win)
    return list.concat(
      win,
      win.visualViewport || [],
      isOverflowElement(scrollableAncestor) ? scrollableAncestor : [],
      frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []
    )
  }
  return list.concat(
    scrollableAncestor,
    getOverflowAncestors(scrollableAncestor, [], traverseIframes)
  )
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent)
    ? win.frameElement
    : null
}

// node_modules/.pnpm/@floating-ui+dom@1.6.10/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle(element)
  let width = Number.parseFloat(css.width) || 0
  let height = Number.parseFloat(css.height) || 0
  const hasOffset = isHTMLElement(element)
  const offsetWidth = hasOffset ? element.offsetWidth : width
  const offsetHeight = hasOffset ? element.offsetHeight : height
  const shouldFallback =
    round(width) !== offsetWidth || round(height) !== offsetHeight
  if (shouldFallback) {
    width = offsetWidth
    height = offsetHeight
  }
  return {
    width,
    height,
    $: shouldFallback
  }
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element
}
function getScale(element) {
  const domElement = unwrapElement(element)
  if (!isHTMLElement(domElement)) {
    return createCoords(1)
  }
  const rect = domElement.getBoundingClientRect()
  const { width, height, $ } = getCssDimensions(domElement)
  let x = ($ ? round(rect.width) : rect.width) / width
  let y = ($ ? round(rect.height) : rect.height) / height
  if (!x || !Number.isFinite(x)) {
    x = 1
  }
  if (!y || !Number.isFinite(y)) {
    y = 1
  }
  return {
    x,
    y
  }
}
var noOffsets = createCoords(0)
function getVisualOffsets(element) {
  const win = getWindow(element)
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  }
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false
  }
  if (
    !floatingOffsetParent ||
    (isFixed && floatingOffsetParent !== getWindow(element))
  ) {
    return false
  }
  return isFixed
}
function getBoundingClientRect(
  element,
  includeScale,
  isFixedStrategy,
  offsetParent
) {
  if (includeScale === void 0) {
    includeScale = false
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false
  }
  const clientRect = element.getBoundingClientRect()
  const domElement = unwrapElement(element)
  let scale = createCoords(1)
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent)
      }
    } else {
      scale = getScale(element)
    }
  }
  const visualOffsets = shouldAddVisualOffsets(
    domElement,
    isFixedStrategy,
    offsetParent
  )
    ? getVisualOffsets(domElement)
    : createCoords(0)
  let x = (clientRect.left + visualOffsets.x) / scale.x
  let y = (clientRect.top + visualOffsets.y) / scale.y
  let width = clientRect.width / scale.x
  let height = clientRect.height / scale.y
  if (domElement) {
    const win = getWindow(domElement)
    const offsetWin =
      offsetParent && isElement(offsetParent)
        ? getWindow(offsetParent)
        : offsetParent
    let currentWin = win
    let currentIFrame = getFrameElement(currentWin)
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame)
      const iframeRect = currentIFrame.getBoundingClientRect()
      const css = getComputedStyle(currentIFrame)
      const left =
        iframeRect.left +
        (currentIFrame.clientLeft + Number.parseFloat(css.paddingLeft)) *
          iframeScale.x
      const top =
        iframeRect.top +
        (currentIFrame.clientTop + Number.parseFloat(css.paddingTop)) *
          iframeScale.y
      x *= iframeScale.x
      y *= iframeScale.y
      width *= iframeScale.x
      height *= iframeScale.y
      x += left
      y += top
      currentWin = getWindow(currentIFrame)
      currentIFrame = getFrameElement(currentWin)
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  })
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  const { elements, rect, offsetParent, strategy } = _ref
  const isFixed = strategy === "fixed"
  const documentElement = getDocumentElement(offsetParent)
  const topLayer = elements ? isTopLayer(elements.floating) : false
  if (offsetParent === documentElement || (topLayer && isFixed)) {
    return rect
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  }
  let scale = createCoords(1)
  const offsets = createCoords(0)
  const isOffsetParentAnElement = isHTMLElement(offsetParent)
  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent)
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent)
      scale = getScale(offsetParent)
      offsets.x = offsetRect.x + offsetParent.clientLeft
      offsets.y = offsetRect.y + offsetParent.clientTop
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  }
}
function getClientRects(element) {
  return Array.from(element.getClientRects())
}
function getWindowScrollBarX(element) {
  return (
    getBoundingClientRect(getDocumentElement(element)).left +
    getNodeScroll(element).scrollLeft
  )
}
function getDocumentRect(element) {
  const html = getDocumentElement(element)
  const scroll = getNodeScroll(element)
  const body = element.ownerDocument.body
  const width = max(
    html.scrollWidth,
    html.clientWidth,
    body.scrollWidth,
    body.clientWidth
  )
  const height = max(
    html.scrollHeight,
    html.clientHeight,
    body.scrollHeight,
    body.clientHeight
  )
  let x = -scroll.scrollLeft + getWindowScrollBarX(element)
  const y = -scroll.scrollTop
  if (getComputedStyle(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width
  }
  return {
    width,
    height,
    x,
    y
  }
}
function getViewportRect(element, strategy) {
  const win = getWindow(element)
  const html = getDocumentElement(element)
  const visualViewport = win.visualViewport
  let width = html.clientWidth
  let height = html.clientHeight
  let x = 0
  let y = 0
  if (visualViewport) {
    width = visualViewport.width
    height = visualViewport.height
    const visualViewportBased = isWebKit()
    if (!visualViewportBased || (visualViewportBased && strategy === "fixed")) {
      x = visualViewport.offsetLeft
      y = visualViewport.offsetTop
    }
  }
  return {
    width,
    height,
    x,
    y
  }
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed")
  const top = clientRect.top + element.clientTop
  const left = clientRect.left + element.clientLeft
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1)
  const width = element.clientWidth * scale.x
  const height = element.clientHeight * scale.y
  const x = left * scale.x
  const y = top * scale.y
  return {
    width,
    height,
    x,
    y
  }
}
function getClientRectFromClippingAncestor(
  element,
  clippingAncestor,
  strategy
) {
  let rect
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy)
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element))
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy)
  } else {
    const visualOffsets = getVisualOffsets(element)
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    }
  }
  return rectToClientRect(rect)
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element)
  if (
    parentNode === stopNode ||
    !isElement(parentNode) ||
    isLastTraversableNode(parentNode)
  ) {
    return false
  }
  return (
    getComputedStyle(parentNode).position === "fixed" ||
    hasFixedPositionAncestor(parentNode, stopNode)
  )
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element)
  if (cachedResult) {
    return cachedResult
  }
  let result = getOverflowAncestors(element, [], false).filter(
    (el) => isElement(el) && getNodeName(el) !== "body"
  )
  let currentContainingBlockComputedStyle = null
  const elementIsFixed = getComputedStyle(element).position === "fixed"
  let currentNode = elementIsFixed ? getParentNode(element) : element
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle(currentNode)
    const currentNodeIsContaining = isContainingBlock(currentNode)
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null
    }
    const shouldDropCurrentNode = elementIsFixed
      ? !currentNodeIsContaining && !currentContainingBlockComputedStyle
      : (!currentNodeIsContaining &&
          computedStyle.position === "static" &&
          !!currentContainingBlockComputedStyle &&
          ["absolute", "fixed"].includes(
            currentContainingBlockComputedStyle.position
          )) ||
        (isOverflowElement(currentNode) &&
          !currentNodeIsContaining &&
          hasFixedPositionAncestor(element, currentNode))
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode)
    } else {
      currentContainingBlockComputedStyle = computedStyle
    }
    currentNode = getParentNode(currentNode)
  }
  cache.set(element, result)
  return result
}
function getClippingRect(_ref) {
  const { element, boundary, rootBoundary, strategy } = _ref
  const elementClippingAncestors =
    boundary === "clippingAncestors"
      ? isTopLayer(element)
        ? []
        : getClippingElementAncestors(element, this._c)
      : [].concat(boundary)
  const clippingAncestors = [...elementClippingAncestors, rootBoundary]
  const firstClippingAncestor = clippingAncestors[0]
  const clippingRect = clippingAncestors.reduce(
    (accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(
        element,
        clippingAncestor,
        strategy
      )
      accRect.top = max(rect.top, accRect.top)
      accRect.right = min(rect.right, accRect.right)
      accRect.bottom = min(rect.bottom, accRect.bottom)
      accRect.left = max(rect.left, accRect.left)
      return accRect
    },
    getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy)
  )
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  }
}
function getDimensions(element) {
  const { width, height } = getCssDimensions(element)
  return {
    width,
    height
  }
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent)
  const documentElement = getDocumentElement(offsetParent)
  const isFixed = strategy === "fixed"
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent)
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  }
  const offsets = createCoords(0)
  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== "body" ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent)
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(
        offsetParent,
        true,
        isFixed,
        offsetParent
      )
      offsets.x = offsetRect.x + offsetParent.clientLeft
      offsets.y = offsetRect.y + offsetParent.clientTop
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement)
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x
  const y = rect.top + scroll.scrollTop - offsets.y
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  }
}
function isStaticPositioned(element) {
  return getComputedStyle(element).position === "static"
}
function getTrueOffsetParent(element, polyfill) {
  if (
    !isHTMLElement(element) ||
    getComputedStyle(element).position === "fixed"
  ) {
    return null
  }
  if (polyfill) {
    return polyfill(element)
  }
  return element.offsetParent
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element)
  if (isTopLayer(element)) {
    return win
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element)
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent
      }
      svgOffsetParent = getParentNode(svgOffsetParent)
    }
    return win
  }
  let offsetParent = getTrueOffsetParent(element, polyfill)
  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    isStaticPositioned(offsetParent)
  ) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill)
  }
  if (
    offsetParent &&
    isLastTraversableNode(offsetParent) &&
    isStaticPositioned(offsetParent) &&
    !isContainingBlock(offsetParent)
  ) {
    return win
  }
  return offsetParent || getContainingBlock(element) || win
}
var getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent
  const getDimensionsFn = this.getDimensions
  const floatingDimensions = await getDimensionsFn(data.floating)
  return {
    reference: getRectRelativeToOffsetParent(
      data.reference,
      await getOffsetParentFn(data.floating),
      data.strategy
    ),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  }
}
function isRTL(element) {
  return getComputedStyle(element).direction === "rtl"
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
}
function observeMove(element, onMove) {
  let io = null
  let timeoutId
  const root = getDocumentElement(element)
  function cleanup() {
    var _io
    clearTimeout(timeoutId)
    ;(_io = io) == null || _io.disconnect()
    io = null
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false
    }
    if (threshold === void 0) {
      threshold = 1
    }
    cleanup()
    const { left, top, width, height } = element.getBoundingClientRect()
    if (!skip) {
      onMove()
    }
    if (!width || !height) {
      return
    }
    const insetTop = floor(top)
    const insetRight = floor(root.clientWidth - (left + width))
    const insetBottom = floor(root.clientHeight - (top + height))
    const insetLeft = floor(left)
    const rootMargin =
      -insetTop +
      "px " +
      -insetRight +
      "px " +
      -insetBottom +
      "px " +
      -insetLeft +
      "px"
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    }
    let isFirstUpdate = true
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh()
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7)
          }, 1e3)
        } else {
          refresh(false, ratio)
        }
      }
      isFirstUpdate = false
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      })
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options)
    }
    io.observe(element)
  }
  refresh(true)
  return cleanup
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {}
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options
  const referenceEl = unwrapElement(reference)
  const ancestors =
    ancestorScroll || ancestorResize
      ? [
          ...(referenceEl ? getOverflowAncestors(referenceEl) : []),
          ...getOverflowAncestors(floating)
        ]
      : []
  ancestors.forEach((ancestor) => {
    ancestorScroll &&
      ancestor.addEventListener("scroll", update, {
        passive: true
      })
    ancestorResize && ancestor.addEventListener("resize", update)
  })
  const cleanupIo =
    referenceEl && layoutShift ? observeMove(referenceEl, update) : null
  let reobserveFrame = -1
  let resizeObserver = null
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      const [firstEntry] = _ref
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating)
        cancelAnimationFrame(reobserveFrame)
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver
          ;(_resizeObserver = resizeObserver) == null ||
            _resizeObserver.observe(floating)
        })
      }
      update()
    })
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl)
    }
    resizeObserver.observe(floating)
  }
  let frameId
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null
  if (animationFrame) {
    frameLoop()
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference)
    if (
      prevRefRect &&
      (nextRefRect.x !== prevRefRect.x ||
        nextRefRect.y !== prevRefRect.y ||
        nextRefRect.width !== prevRefRect.width ||
        nextRefRect.height !== prevRefRect.height)
    ) {
      update()
    }
    prevRefRect = nextRefRect
    frameId = requestAnimationFrame(frameLoop)
  }
  update()
  return () => {
    var _resizeObserver2
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update)
      ancestorResize && ancestor.removeEventListener("resize", update)
    })
    cleanupIo == null || cleanupIo()
    ;(_resizeObserver2 = resizeObserver) == null ||
      _resizeObserver2.disconnect()
    resizeObserver = null
    if (animationFrame) {
      cancelAnimationFrame(frameId)
    }
  }
}
var offset2 = offset
var shift2 = shift
var flip2 = flip
var size2 = size
var hide2 = hide
var arrow2 = arrow
var limitShift2 = limitShift
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map()
  const mergedOptions = {
    platform,
    ...options
  }
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  }
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  })
}

// node_modules/.pnpm/@floating-ui+react-dom@2.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React = __toESM(require_react(), 1)
var import_react = __toESM(require_react(), 1)
var ReactDOM = __toESM(require_react_dom(), 1)
var index =
  typeof document !== "undefined"
    ? import_react.useLayoutEffect
    : import_react.useEffect
function deepEqual(a, b) {
  if (a === b) {
    return true
  }
  if (typeof a !== typeof b) {
    return false
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true
  }
  let length
  let i
  let keys
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length
      if (length !== b.length) return false
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false
        }
      }
      return true
    }
    keys = Object.keys(a)
    length = keys.length
    if (length !== Object.keys(b).length) {
      return false
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i]
      if (key === "_owner" && a.$$typeof) {
        continue
      }
      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
  return a !== a && b !== b
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1
  }
  const win = element.ownerDocument.defaultView || window
  return win.devicePixelRatio || 1
}
function roundByDPR(element, value) {
  const dpr = getDPR(element)
  return Math.round(value * dpr) / dpr
}
function useLatestRef(value) {
  const ref = React.useRef(value)
  index(() => {
    ref.current = value
  })
  return ref
}
function useFloating(options) {
  if (options === void 0) {
    options = {}
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: { reference: externalReference, floating: externalFloating } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  })
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware)
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware)
  }
  const [_reference, _setReference] = React.useState(null)
  const [_floating, _setFloating] = React.useState(null)
  const setReference = React.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node
      _setReference(node)
    }
  }, [])
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node
      _setFloating(node)
    }
  }, [])
  const referenceEl = externalReference || _reference
  const floatingEl = externalFloating || _floating
  const referenceRef = React.useRef(null)
  const floatingRef = React.useRef(null)
  const dataRef = React.useRef(data)
  const hasWhileElementsMounted = whileElementsMounted != null
  const whileElementsMountedRef = useLatestRef(whileElementsMounted)
  const platformRef = useLatestRef(platform2)
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    }
    if (platformRef.current) {
      config.platform = platformRef.current
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then(
      (data2) => {
        const fullData = {
          ...data2,
          isPositioned: true
        }
        if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
          dataRef.current = fullData
          ReactDOM.flushSync(() => {
            setData(fullData)
          })
        }
      }
    )
  }, [latestMiddleware, placement, strategy, platformRef])
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }))
    }
  }, [open])
  const isMountedRef = React.useRef(false)
  index(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl
    if (floatingEl) floatingRef.current = floatingEl
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update)
      }
      update()
    }
  }, [
    referenceEl,
    floatingEl,
    update,
    whileElementsMountedRef,
    hasWhileElementsMounted
  ])
  const refs = React.useMemo(
    () => ({
      reference: referenceRef,
      floating: floatingRef,
      setReference,
      setFloating
    }),
    [setReference, setFloating]
  )
  const elements = React.useMemo(
    () => ({
      reference: referenceEl,
      floating: floatingEl
    }),
    [referenceEl, floatingEl]
  )
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    }
    if (!elements.floating) {
      return initialStyles
    }
    const x = roundByDPR(elements.floating, data.x)
    const y = roundByDPR(elements.floating, data.y)
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        })
      }
    }
    return {
      position: strategy,
      left: x,
      top: y
    }
  }, [strategy, transform, elements.floating, data.x, data.y])
  return React.useMemo(
    () => ({
      ...data,
      update,
      refs,
      elements,
      floatingStyles
    }),
    [data, update, refs, elements, floatingStyles]
  )
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current")
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const { element, padding } =
        typeof options === "function" ? options(state) : options
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state)
        }
        return {}
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state)
      }
      return {}
    }
  }
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
})
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
})
var limitShift3 = (options, deps) => ({
  ...limitShift2(options),
  options: [options, deps]
})
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
})
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
})
var hide3 = (options, deps) => ({
  ...hide2(options),
  options: [options, deps]
})
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
})

// node_modules/.pnpm/@radix-ui+react-arrow@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-arrow/dist/index.mjs
var React2 = __toESM(require_react(), 1)
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1)
var NAME = "Arrow"
var Arrow = React2.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props
  return (0, import_jsx_runtime.jsx)(Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild
      ? children
      : (0, import_jsx_runtime.jsx)("polygon", { points: "0,0 30,0 15,10" })
  })
})
Arrow.displayName = NAME
var Root = Arrow

// node_modules/.pnpm/@radix-ui+react-use-size@1.1.0_@types+react@18.3.5_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
var React3 = __toESM(require_react(), 1)
function useSize(element) {
  const [size4, setSize] = React3.useState(void 0)
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight })
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return
        }
        if (!entries.length) {
          return
        }
        const entry = entries[0]
        let width
        let height
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"]
          const borderSize = Array.isArray(borderSizeEntry)
            ? borderSizeEntry[0]
            : borderSizeEntry
          width = borderSize["inlineSize"]
          height = borderSize["blockSize"]
        } else {
          width = element.offsetWidth
          height = element.offsetHeight
        }
        setSize({ width, height })
      })
      resizeObserver.observe(element, { box: "border-box" })
      return () => resizeObserver.unobserve(element)
    } else {
      setSize(void 0)
    }
  }, [element])
  return size4
}

// node_modules/.pnpm/@radix-ui+react-popper@1.2.0_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1)
var POPPER_NAME = "Popper"
var [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME)
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME)
var Popper = (props) => {
  const { __scopePopper, children } = props
  const [anchor, setAnchor] = React4.useState(null)
  return (0, import_jsx_runtime2.jsx)(PopperProvider, {
    scope: __scopePopper,
    anchor,
    onAnchorChange: setAnchor,
    children
  })
}
Popper.displayName = POPPER_NAME
var ANCHOR_NAME = "PopperAnchor"
var PopperAnchor = React4.forwardRef((props, forwardedRef) => {
  const { __scopePopper, virtualRef, ...anchorProps } = props
  const context = usePopperContext(ANCHOR_NAME, __scopePopper)
  const ref = React4.useRef(null)
  const composedRefs = useComposedRefs(forwardedRef, ref)
  React4.useEffect(() => {
    context.onAnchorChange(
      (virtualRef == null ? void 0 : virtualRef.current) || ref.current
    )
  })
  return virtualRef
    ? null
    : (0, import_jsx_runtime2.jsx)(Primitive.div, {
        ...anchorProps,
        ref: composedRefs
      })
})
PopperAnchor.displayName = ANCHOR_NAME
var CONTENT_NAME = "PopperContent"
var [PopperContentProvider, useContentContext] =
  createPopperContext(CONTENT_NAME)
var PopperContent = React4.forwardRef((props, forwardedRef) => {
  var _a, _b, _c, _d, _e, _f
  const {
    __scopePopper,
    side = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    arrowPadding = 0,
    avoidCollisions = true,
    collisionBoundary = [],
    collisionPadding: collisionPaddingProp = 0,
    sticky = "partial",
    hideWhenDetached = false,
    updatePositionStrategy = "optimized",
    onPlaced,
    ...contentProps
  } = props
  const context = usePopperContext(CONTENT_NAME, __scopePopper)
  const [content, setContent] = React4.useState(null)
  const composedRefs = useComposedRefs(forwardedRef, (node) => setContent(node))
  const [arrow4, setArrow] = React4.useState(null)
  const arrowSize = useSize(arrow4)
  const arrowWidth = (arrowSize == null ? void 0 : arrowSize.width) ?? 0
  const arrowHeight = (arrowSize == null ? void 0 : arrowSize.height) ?? 0
  const desiredPlacement = side + (align !== "center" ? "-" + align : "")
  const collisionPadding =
    typeof collisionPaddingProp === "number"
      ? collisionPaddingProp
      : { top: 0, right: 0, bottom: 0, left: 0, ...collisionPaddingProp }
  const boundary = Array.isArray(collisionBoundary)
    ? collisionBoundary
    : [collisionBoundary]
  const hasExplicitBoundaries = boundary.length > 0
  const detectOverflowOptions = {
    padding: collisionPadding,
    boundary: boundary.filter(isNotNull),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: hasExplicitBoundaries
  }
  const { refs, floatingStyles, placement, isPositioned, middlewareData } =
    useFloating({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: desiredPlacement,
      whileElementsMounted: (...args) => {
        const cleanup = autoUpdate(...args, {
          animationFrame: updatePositionStrategy === "always"
        })
        return cleanup
      },
      elements: {
        reference: context.anchor
      },
      middleware: [
        offset3({
          mainAxis: sideOffset + arrowHeight,
          alignmentAxis: alignOffset
        }),
        avoidCollisions &&
          shift3({
            mainAxis: true,
            crossAxis: false,
            limiter: sticky === "partial" ? limitShift3() : void 0,
            ...detectOverflowOptions
          }),
        avoidCollisions && flip3({ ...detectOverflowOptions }),
        size3({
          ...detectOverflowOptions,
          apply: ({ elements, rects, availableWidth, availableHeight }) => {
            const { width: anchorWidth, height: anchorHeight } = rects.reference
            const contentStyle = elements.floating.style
            contentStyle.setProperty(
              "--radix-popper-available-width",
              `${availableWidth}px`
            )
            contentStyle.setProperty(
              "--radix-popper-available-height",
              `${availableHeight}px`
            )
            contentStyle.setProperty(
              "--radix-popper-anchor-width",
              `${anchorWidth}px`
            )
            contentStyle.setProperty(
              "--radix-popper-anchor-height",
              `${anchorHeight}px`
            )
          }
        }),
        arrow4 && arrow3({ element: arrow4, padding: arrowPadding }),
        transformOrigin({ arrowWidth, arrowHeight }),
        hideWhenDetached &&
          hide3({ strategy: "referenceHidden", ...detectOverflowOptions })
      ]
    })
  const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement)
  const handlePlaced = useCallbackRef(onPlaced)
  useLayoutEffect2(() => {
    if (isPositioned) {
      handlePlaced == null ? void 0 : handlePlaced()
    }
  }, [isPositioned, handlePlaced])
  const arrowX = (_a = middlewareData.arrow) == null ? void 0 : _a.x
  const arrowY = (_b = middlewareData.arrow) == null ? void 0 : _b.y
  const cannotCenterArrow =
    ((_c = middlewareData.arrow) == null ? void 0 : _c.centerOffset) !== 0
  const [contentZIndex, setContentZIndex] = React4.useState()
  useLayoutEffect2(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex)
  }, [content])
  return (0, import_jsx_runtime2.jsx)("div", {
    ref: refs.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...floatingStyles,
      transform: isPositioned
        ? floatingStyles.transform
        : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: contentZIndex,
      ["--radix-popper-transform-origin"]: [
        (_d = middlewareData.transformOrigin) == null ? void 0 : _d.x,
        (_e = middlewareData.transformOrigin) == null ? void 0 : _e.y
      ].join(" "),
      // hide the content if using the hide middleware and should be hidden
      // set visibility to hidden and disable pointer events so the UI behaves
      // as if the PopperContent isn't there at all
      ...(((_f = middlewareData.hide) == null
        ? void 0
        : _f.referenceHidden) && {
        visibility: "hidden",
        pointerEvents: "none"
      })
    },
    dir: props.dir,
    children: (0, import_jsx_runtime2.jsx)(PopperContentProvider, {
      scope: __scopePopper,
      placedSide,
      onArrowChange: setArrow,
      arrowX,
      arrowY,
      shouldHideArrow: cannotCenterArrow,
      children: (0, import_jsx_runtime2.jsx)(Primitive.div, {
        "data-side": placedSide,
        "data-align": placedAlign,
        ...contentProps,
        ref: composedRefs,
        style: {
          ...contentProps.style,
          // if the PopperContent hasn't been placed yet (not all measurements done)
          // we prevent animations so that users's animation don't kick in too early referring wrong sides
          animation: !isPositioned ? "none" : void 0
        }
      })
    })
  })
})
PopperContent.displayName = CONTENT_NAME
var ARROW_NAME = "PopperArrow"
var OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}
var PopperArrow = React4.forwardRef(function PopperArrow2(props, forwardedRef) {
  const { __scopePopper, ...arrowProps } = props
  const contentContext = useContentContext(ARROW_NAME, __scopePopper)
  const baseSide = OPPOSITE_SIDE[contentContext.placedSide]
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    (0, import_jsx_runtime2.jsx)("span", {
      ref: contentContext.onArrowChange,
      style: {
        position: "absolute",
        left: contentContext.arrowX,
        top: contentContext.arrowY,
        [baseSide]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[contentContext.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: `rotate(180deg)`,
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[contentContext.placedSide],
        visibility: contentContext.shouldHideArrow ? "hidden" : void 0
      },
      children: (0, import_jsx_runtime2.jsx)(Root, {
        ...arrowProps,
        ref: forwardedRef,
        style: {
          ...arrowProps.style,
          // ensures the element can be measured correctly (mostly for if SVG)
          display: "block"
        }
      })
    })
  )
})
PopperArrow.displayName = ARROW_NAME
function isNotNull(value) {
  return value !== null
}
var transformOrigin = (options) => ({
  name: "transformOrigin",
  options,
  fn(data) {
    var _a, _b, _c
    const { placement, rects, middlewareData } = data
    const cannotCenterArrow =
      ((_a = middlewareData.arrow) == null ? void 0 : _a.centerOffset) !== 0
    const isArrowHidden = cannotCenterArrow
    const arrowWidth = isArrowHidden ? 0 : options.arrowWidth
    const arrowHeight = isArrowHidden ? 0 : options.arrowHeight
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement)
    const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[
      placedAlign
    ]
    const arrowXCenter =
      (((_b = middlewareData.arrow) == null ? void 0 : _b.x) ?? 0) +
      arrowWidth / 2
    const arrowYCenter =
      (((_c = middlewareData.arrow) == null ? void 0 : _c.y) ?? 0) +
      arrowHeight / 2
    let x = ""
    let y = ""
    if (placedSide === "bottom") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`
      y = `${-arrowHeight}px`
    } else if (placedSide === "top") {
      x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`
      y = `${rects.floating.height + arrowHeight}px`
    } else if (placedSide === "right") {
      x = `${-arrowHeight}px`
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`
    } else if (placedSide === "left") {
      x = `${rects.floating.width + arrowHeight}px`
      y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`
    }
    return { data: { x, y } }
  }
})
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-")
  return [side, align]
}
var Root2 = Popper
var Anchor = PopperAnchor
var Content = PopperContent
var Arrow2 = PopperArrow

// node_modules/.pnpm/@radix-ui+react-popover@1.1.1_@types+react-dom@18.3.0_@types+react@18.3.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1)
var POPOVER_NAME = "Popover"
var [createPopoverContext, createPopoverScope] = createContextScope(
  POPOVER_NAME,
  [createPopperScope]
)
var usePopperScope = createPopperScope()
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME)
var Popover = (props) => {
  const {
    __scopePopover,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    modal = false
  } = props
  const popperScope = usePopperScope(__scopePopover)
  const triggerRef = React5.useRef(null)
  const [hasCustomAnchor, setHasCustomAnchor] = React5.useState(false)
  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  })
  return (0, import_jsx_runtime3.jsx)(Root2, {
    ...popperScope,
    children: (0, import_jsx_runtime3.jsx)(PopoverProvider, {
      scope: __scopePopover,
      contentId: useId(),
      triggerRef,
      open,
      onOpenChange: setOpen,
      onOpenToggle: React5.useCallback(
        () => setOpen((prevOpen) => !prevOpen),
        [setOpen]
      ),
      hasCustomAnchor,
      onCustomAnchorAdd: React5.useCallback(() => setHasCustomAnchor(true), []),
      onCustomAnchorRemove: React5.useCallback(
        () => setHasCustomAnchor(false),
        []
      ),
      modal,
      children
    })
  })
}
Popover.displayName = POPOVER_NAME
var ANCHOR_NAME2 = "PopoverAnchor"
var PopoverAnchor = React5.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...anchorProps } = props
  const context = usePopoverContext(ANCHOR_NAME2, __scopePopover)
  const popperScope = usePopperScope(__scopePopover)
  const { onCustomAnchorAdd, onCustomAnchorRemove } = context
  React5.useEffect(() => {
    onCustomAnchorAdd()
    return () => onCustomAnchorRemove()
  }, [onCustomAnchorAdd, onCustomAnchorRemove])
  return (0, import_jsx_runtime3.jsx)(Anchor, {
    ...popperScope,
    ...anchorProps,
    ref: forwardedRef
  })
})
PopoverAnchor.displayName = ANCHOR_NAME2
var TRIGGER_NAME = "PopoverTrigger"
var PopoverTrigger = React5.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...triggerProps } = props
  const context = usePopoverContext(TRIGGER_NAME, __scopePopover)
  const popperScope = usePopperScope(__scopePopover)
  const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef)
  const trigger = (0, import_jsx_runtime3.jsx)(Primitive.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": getState(context.open),
    ...triggerProps,
    ref: composedTriggerRef,
    onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
  })
  return context.hasCustomAnchor
    ? trigger
    : (0, import_jsx_runtime3.jsx)(Anchor, {
        asChild: true,
        ...popperScope,
        children: trigger
      })
})
PopoverTrigger.displayName = TRIGGER_NAME
var PORTAL_NAME = "PopoverPortal"
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
  forceMount: void 0
})
var PopoverPortal = (props) => {
  const { __scopePopover, forceMount, children, container } = props
  const context = usePopoverContext(PORTAL_NAME, __scopePopover)
  return (0, import_jsx_runtime3.jsx)(PortalProvider, {
    scope: __scopePopover,
    forceMount,
    children: (0, import_jsx_runtime3.jsx)(Presence, {
      present: forceMount || context.open,
      children: (0, import_jsx_runtime3.jsx)(Portal, {
        asChild: true,
        container,
        children
      })
    })
  })
}
PopoverPortal.displayName = PORTAL_NAME
var CONTENT_NAME2 = "PopoverContent"
var PopoverContent = React5.forwardRef((props, forwardedRef) => {
  const portalContext = usePortalContext(CONTENT_NAME2, props.__scopePopover)
  const { forceMount = portalContext.forceMount, ...contentProps } = props
  const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover)
  return (0, import_jsx_runtime3.jsx)(Presence, {
    present: forceMount || context.open,
    children: context.modal
      ? (0, import_jsx_runtime3.jsx)(PopoverContentModal, {
          ...contentProps,
          ref: forwardedRef
        })
      : (0, import_jsx_runtime3.jsx)(PopoverContentNonModal, {
          ...contentProps,
          ref: forwardedRef
        })
  })
})
PopoverContent.displayName = CONTENT_NAME2
var PopoverContentModal = React5.forwardRef((props, forwardedRef) => {
  const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover)
  const contentRef = React5.useRef(null)
  const composedRefs = useComposedRefs(forwardedRef, contentRef)
  const isRightClickOutsideRef = React5.useRef(false)
  React5.useEffect(() => {
    const content = contentRef.current
    if (content) return hideOthers(content)
  }, [])
  return (0, import_jsx_runtime3.jsx)(Combination_default, {
    as: Slot,
    allowPinchZoom: true,
    children: (0, import_jsx_runtime3.jsx)(PopoverContentImpl, {
      ...props,
      ref: composedRefs,
      trapFocus: context.open,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: composeEventHandlers(
        props.onCloseAutoFocus,
        (event) => {
          var _a
          event.preventDefault()
          if (!isRightClickOutsideRef.current)
            (_a = context.triggerRef.current) == null ? void 0 : _a.focus()
        }
      ),
      onPointerDownOutside: composeEventHandlers(
        props.onPointerDownOutside,
        (event) => {
          const originalEvent = event.detail.originalEvent
          const ctrlLeftClick =
            originalEvent.button === 0 && originalEvent.ctrlKey === true
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick
          isRightClickOutsideRef.current = isRightClick
        },
        { checkForDefaultPrevented: false }
      ),
      onFocusOutside: composeEventHandlers(
        props.onFocusOutside,
        (event) => event.preventDefault(),
        { checkForDefaultPrevented: false }
      )
    })
  })
})
var PopoverContentNonModal = React5.forwardRef((props, forwardedRef) => {
  const context = usePopoverContext(CONTENT_NAME2, props.__scopePopover)
  const hasInteractedOutsideRef = React5.useRef(false)
  const hasPointerDownOutsideRef = React5.useRef(false)
  return (0, import_jsx_runtime3.jsx)(PopoverContentImpl, {
    ...props,
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _a, _b
      ;(_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event)
      if (!event.defaultPrevented) {
        if (!hasInteractedOutsideRef.current)
          (_b = context.triggerRef.current) == null ? void 0 : _b.focus()
        event.preventDefault()
      }
      hasInteractedOutsideRef.current = false
      hasPointerDownOutsideRef.current = false
    },
    onInteractOutside: (event) => {
      var _a, _b
      ;(_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event)
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true
        if (event.detail.originalEvent.type === "pointerdown") {
          hasPointerDownOutsideRef.current = true
        }
      }
      const target = event.target
      const targetIsTrigger =
        (_b = context.triggerRef.current) == null ? void 0 : _b.contains(target)
      if (targetIsTrigger) event.preventDefault()
      if (
        event.detail.originalEvent.type === "focusin" &&
        hasPointerDownOutsideRef.current
      ) {
        event.preventDefault()
      }
    }
  })
})
var PopoverContentImpl = React5.forwardRef((props, forwardedRef) => {
  const {
    __scopePopover,
    trapFocus,
    onOpenAutoFocus,
    onCloseAutoFocus,
    disableOutsidePointerEvents,
    onEscapeKeyDown,
    onPointerDownOutside,
    onFocusOutside,
    onInteractOutside,
    ...contentProps
  } = props
  const context = usePopoverContext(CONTENT_NAME2, __scopePopover)
  const popperScope = usePopperScope(__scopePopover)
  useFocusGuards()
  return (0, import_jsx_runtime3.jsx)(FocusScope, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus,
    children: (0, import_jsx_runtime3.jsx)(DismissableLayer, {
      asChild: true,
      disableOutsidePointerEvents,
      onInteractOutside,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onDismiss: () => context.onOpenChange(false),
      children: (0, import_jsx_runtime3.jsx)(Content, {
        "data-state": getState(context.open),
        role: "dialog",
        id: context.contentId,
        ...popperScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...contentProps.style,
          // re-namespace exposed content custom properties
          ...{
            "--radix-popover-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height":
              "var(--radix-popper-anchor-height)"
          }
        }
      })
    })
  })
})
var CLOSE_NAME = "PopoverClose"
var PopoverClose = React5.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...closeProps } = props
  const context = usePopoverContext(CLOSE_NAME, __scopePopover)
  return (0, import_jsx_runtime3.jsx)(Primitive.button, {
    type: "button",
    ...closeProps,
    ref: forwardedRef,
    onClick: composeEventHandlers(props.onClick, () =>
      context.onOpenChange(false)
    )
  })
})
PopoverClose.displayName = CLOSE_NAME
var ARROW_NAME2 = "PopoverArrow"
var PopoverArrow = React5.forwardRef((props, forwardedRef) => {
  const { __scopePopover, ...arrowProps } = props
  const popperScope = usePopperScope(__scopePopover)
  return (0, import_jsx_runtime3.jsx)(Arrow2, {
    ...popperScope,
    ...arrowProps,
    ref: forwardedRef
  })
})
PopoverArrow.displayName = ARROW_NAME2
function getState(open) {
  return open ? "open" : "closed"
}
var Root22 = Popover
var Anchor2 = PopoverAnchor
var Trigger = PopoverTrigger
var Portal2 = PopoverPortal
var Content2 = PopoverContent
var Close = PopoverClose
var Arrow22 = PopoverArrow
export {
  Anchor2 as Anchor,
  Arrow22 as Arrow,
  Close,
  Content2 as Content,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  Portal2 as Portal,
  Root22 as Root,
  Trigger,
  createPopoverScope
}
//# sourceMappingURL=@radix-ui_react-popover.js.map