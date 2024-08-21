import {
  O
} from "./chunk-FAY27ZE3.js";
import {
  require_react_dom
} from "./chunk-YGZ2ZWFG.js";
import {
  require_react
} from "./chunk-VMU3GUP3.js";
import {
  __commonJS,
  __publicField,
  __require,
  __toESM
} from "./chunk-LK32TJAX.js";

// .cache/sb-vite-plugin-externals/@storybook/core/client-logger.js
var require_client_logger = __commonJS({
  ".cache/sb-vite-plugin-externals/@storybook/core/client-logger.js"(exports, module) {
    module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
  }
});

// node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components/index.js
var import_react3 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_react5 = __toESM(require_react());

// node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/theming/index.js
var Z = __toESM(require_react());
var I = __toESM(require_react());
var import_react = __toESM(require_react());
var Re = __toESM(require_react());
var M = __toESM(require_react());
var import_react2 = __toESM(require_react());
var import_client_logger = __toESM(require_client_logger());
var import_client_logger2 = __toESM(require_client_logger());
var Bn = Object.create;
var or = Object.defineProperty;
var $n = Object.getOwnPropertyDescriptor;
var Hn = Object.getOwnPropertyNames;
var Vn = Object.getPrototypeOf;
var Un = Object.prototype.hasOwnProperty;
var a = (e6, r) => or(e6, "name", { value: r, configurable: true });
var Ee = ((e6) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e6, {
  get: (r, t) => (typeof __require < "u" ? __require : r)[t]
}) : e6)(function(e6) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e6 + '" is not supported');
});
var Le = (e6, r) => () => (r || e6((r = { exports: {} }).exports, r), r.exports);
var Wn = (e6, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let o of Hn(r))
      !Un.call(e6, o) && o !== t && or(e6, o, { get: () => r[o], enumerable: !(n = $n(r, o)) || n.enumerable });
  return e6;
};
var ir = (e6, r, t) => (t = e6 != null ? Bn(Vn(e6)) : {}, Wn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e6 || !e6.__esModule ? or(t, "default", { value: e6, enumerable: true }) : t,
  e6
));
var ct = Le((R) => {
  "use strict";
  (function() {
    "use strict";
    var e6 = typeof Symbol == "function" && Symbol.for, r = e6 ? Symbol.for("react.element") : 60103, t = e6 ? Symbol.for("react.portal") : 60106, n = e6 ? Symbol.for("react.fragment") : 60107, o = e6 ? Symbol.for("react.strict_mode") : 60108, i = e6 ? Symbol.for("react.profiler") : 60114, s6 = e6 ? Symbol.for("react.provider") : 60109, u = e6 ? Symbol.for("react.context") : 60110, c = e6 ? Symbol.for("react.async_mode") : 60111, d = e6 ? Symbol.for("react.concurrent_mode") : 60111, f = e6 ? Symbol.for("react.forward_ref") : 60112, l = e6 ? Symbol.for("react.suspense") : 60113, p = e6 ? Symbol.for("react.suspense_list") : 60120, v = e6 ? Symbol.for("react.memo") : 60115, h = e6 ? Symbol.for("react.lazy") : 60116, m = e6 ? Symbol.for("react.block") : 60121, y = e6 ? Symbol.for("react.fundamental") : 60117, x = e6 ? Symbol.for("react.responder") : 60118, E = e6 ? Symbol.for("react.scope") : 60119;
    function A6(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === n || b === d || b === i || b === o || b === l || b === p || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === v || b.$$typeof === s6 || b.$$typeof === u || b.$$typeof === f || b.$$typeof === y || b.$$typeof === x || b.$$typeof === E || b.$$typeof === m);
    }
    a(A6, "isValidElementType");
    function T(b) {
      if (typeof b == "object" && b !== null) {
        var ar2 = b.$$typeof;
        switch (ar2) {
          case r:
            var Pe2 = b.type;
            switch (Pe2) {
              case c:
              case d:
              case n:
              case i:
              case o:
              case l:
                return Pe2;
              default:
                var Br2 = Pe2 && Pe2.$$typeof;
                switch (Br2) {
                  case u:
                  case f:
                  case h:
                  case v:
                  case s6:
                    return Br2;
                  default:
                    return ar2;
                }
            }
          case t:
            return ar2;
        }
      }
    }
    a(T, "typeOf");
    var C = c, N = d, S = u, xe2 = s6, W = r, G = f, er2 = n, rr2 = h, tr2 = v, nr2 = t, Tn2 = i, Cn2 = o, Rn2 = l, jr2 = false;
    function An2(b) {
      return jr2 || (jr2 = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Dr2(b) || T(b) === c;
    }
    a(An2, "isAsyncMode");
    function Dr2(b) {
      return T(b) === d;
    }
    a(Dr2, "isConcurrentMode");
    function _n2(b) {
      return T(b) === u;
    }
    a(_n2, "isContextConsumer");
    function Fn2(b) {
      return T(b) === s6;
    }
    a(Fn2, "isContextProvider");
    function Nn2(b) {
      return typeof b == "object" && b !== null && b.$$typeof === r;
    }
    a(Nn2, "isElement");
    function In2(b) {
      return T(b) === f;
    }
    a(In2, "isForwardRef");
    function kn2(b) {
      return T(b) === n;
    }
    a(kn2, "isFragment");
    function Pn2(b) {
      return T(b) === h;
    }
    a(Pn2, "isLazy");
    function Ln2(b) {
      return T(b) === v;
    }
    a(Ln2, "isMemo");
    function zn2(b) {
      return T(b) === t;
    }
    a(zn2, "isPortal");
    function Mn2(b) {
      return T(b) === i;
    }
    a(Mn2, "isProfiler");
    function jn2(b) {
      return T(b) === o;
    }
    a(jn2, "isStrictMode");
    function Dn2(b) {
      return T(b) === l;
    }
    a(Dn2, "isSuspense"), R.AsyncMode = C, R.ConcurrentMode = N, R.ContextConsumer = S, R.ContextProvider = xe2, R.Element = W, R.ForwardRef = G, R.Fragment = er2, R.Lazy = rr2, R.Memo = tr2, R.Portal = nr2, R.Profiler = Tn2, R.StrictMode = Cn2, R.Suspense = Rn2, R.isAsyncMode = An2, R.isConcurrentMode = Dr2, R.isContextConsumer = _n2, R.isContextProvider = Fn2, R.isElement = Nn2, R.isForwardRef = In2, R.isFragment = kn2, R.isLazy = Pn2, R.isMemo = Ln2, R.isPortal = zn2, R.isProfiler = Mn2, R.isStrictMode = jn2, R.isSuspense = Dn2, R.isValidElementType = A6, R.typeOf = T;
  })();
});
var lt = Le((xi2, ft2) => {
  "use strict";
  ft2.exports = ct();
});
var mr = Le((Ei2, bt2) => {
  "use strict";
  var dr2 = lt(), ua2 = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  }, ca2 = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  }, fa2 = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, ht2 = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, pr2 = {};
  pr2[dr2.ForwardRef] = fa2;
  pr2[dr2.Memo] = ht2;
  function dt2(e6) {
    return dr2.isMemo(e6) ? ht2 : pr2[e6.$$typeof] || ua2;
  }
  a(dt2, "getStatics");
  var la2 = Object.defineProperty, da2 = Object.getOwnPropertyNames, pt2 = Object.getOwnPropertySymbols, pa2 = Object.getOwnPropertyDescriptor, ma2 = Object.getPrototypeOf, mt2 = Object.prototype;
  function gt2(e6, r, t) {
    if (typeof r != "string") {
      if (mt2) {
        var n = ma2(r);
        n && n !== mt2 && gt2(e6, n, t);
      }
      var o = da2(r);
      pt2 && (o = o.concat(pt2(r)));
      for (var i = dt2(e6), s6 = dt2(r), u = 0; u < o.length; ++u) {
        var c = o[u];
        if (!ca2[c] && !(t && t[c]) && !(s6 && s6[c]) && !(i && i[c])) {
          var d = pa2(r, c);
          try {
            la2(e6, c, d);
          } catch {
          }
        }
      }
    }
    return e6;
  }
  a(gt2, "hoistNonReactStatics");
  bt2.exports = gt2;
});
var ln = Le((fn2, Ir2) => {
  (function(e6) {
    if (typeof fn2 == "object" && typeof Ir2 < "u")
      Ir2.exports = e6();
    else if (typeof define == "function" && define.amd)
      define([], e6);
    else {
      var r;
      typeof window < "u" ? r = window : typeof global < "u" ? r = global : typeof self < "u" ? r = self : r = this, r.memoizerific = e6();
    }
  })(function() {
    var e6, r, t;
    return a(function n(o, i, s6) {
      function u(f, l) {
        if (!i[f]) {
          if (!o[f]) {
            var p = typeof Ee == "function" && Ee;
            if (!l && p) return p(f, true);
            if (c) return c(f, true);
            var v = new Error("Cannot find module '" + f + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var h = i[f] = { exports: {} };
          o[f][0].call(h.exports, function(m) {
            var y = o[f][1][m];
            return u(y || m);
          }, h, h.exports, n, o, i, s6);
        }
        return i[f].exports;
      }
      a(u, "s");
      for (var c = typeof Ee == "function" && Ee, d = 0; d < s6.length; d++) u(s6[d]);
      return u;
    }, "e")({ 1: [function(n, o, i) {
      o.exports = function(s6) {
        if (typeof Map != "function" || s6) {
          var u = n("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, o, i) {
      function s6() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(s6, "Similar"), s6.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, s6.prototype.set = function(u, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem = this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, s6.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, s6.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? true : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], true) : false);
      }, s6.prototype.forEach = function(u, c) {
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
      }, s6.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, s6.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, o.exports = s6;
    }, {}], 3: [function(n, o, i) {
      var s6 = n("map-or-similar");
      o.exports = function(f) {
        var l = new s6(false), p = [];
        return function(v) {
          var h = a(function() {
            var m = l, y, x, E = arguments.length - 1, A6 = Array(E + 1), T = true, C;
            if ((h.numArgs || h.numArgs === 0) && h.numArgs !== E + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (C = 0; C < E; C++) {
              if (A6[C] = {
                cacheItem: m,
                arg: arguments[C]
              }, m.has(arguments[C])) {
                m = m.get(arguments[C]);
                continue;
              }
              T = false, y = new s6(false), m.set(arguments[C], y), m = y;
            }
            return T && (m.has(arguments[E]) ? x = m.get(arguments[E]) : T = false), T || (x = v.apply(null, arguments), m.set(arguments[E], x)), f > 0 && (A6[E] = {
              cacheItem: m,
              arg: arguments[E]
            }, T ? u(p, A6) : p.push(A6), p.length > f && c(p.shift())), h.wasMemoized = T, h.numArgs = E + 1, x;
          }, "memoizerific");
          return h.limit = f, h.wasMemoized = false, h.cache = l, h.lru = p, h;
        };
      };
      function u(f, l) {
        var p = f.length, v = l.length, h, m, y;
        for (m = 0; m < p; m++) {
          for (h = true, y = 0; y < v; y++)
            if (!d(f[m][y].arg, l[y].arg)) {
              h = false;
              break;
            }
          if (h)
            break;
        }
        f.push(f.splice(m, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(f) {
        var l = f.length, p = f[l - 1], v, h;
        for (p.cacheItem.delete(p.arg), h = l - 2; h >= 0 && (p = f[h], v = p.cacheItem.get(p.arg), !v || !v.size); h--)
          p.cacheItem.delete(p.arg);
      }
      a(c, "removeCachedResult");
      function d(f, l) {
        return f === l || f !== f && l !== l;
      }
      a(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e6) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e6[n] = t[n]);
    }
    return e6;
  }, j.apply(null, arguments);
}
a(j, "_extends");
function ze(e6) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e6(t)), r[t];
  };
}
a(ze, "memoize");
var Yn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var sr = ze(
  function(e6) {
    return Yn.test(e6) || e6.charCodeAt(0) === 111 && e6.charCodeAt(1) === 110 && e6.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Gn(e6) {
  if (e6.sheet)
    return e6.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e6)
      return document.styleSheets[r];
}
a(Gn, "sheetForTag");
function qn(e6) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e6.key), e6.nonce !== void 0 && r.setAttribute("nonce", e6.nonce), r.appendChild(document.createTextNode(
    ""
  )), r.setAttribute("data-s", ""), r;
}
a(qn, "createStyleElement");
var $r = function() {
  function e6(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? false : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  a(e6, "StyleSheet");
  var r = e6.prototype;
  return r.hydrate = a(function(n) {
    n.forEach(this._insertTag);
  }, "hydrate"), r.insert = a(function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qn(this));
    var o = this.tags[this.tags.length - 1], i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
    if (i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i, this.isSpeedy) {
      var s6 = Gn(o);
      try {
        s6.insertRule(n, s6.cssRules.length);
      } catch (u) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) || console.error('There was a problem inserting the following rule: "' + n + '"', u);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, "insert"), r.flush = a(function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = false;
  }, "flush"), e6;
}();
var k = "-ms-";
var we = "-moz-";
var O2 = "-webkit-";
var ae = "comm";
var oe = "rule";
var ie = "decl";
var Hr = "@import";
var Me = "@keyframes";
var Vr = "@layer";
var Ur = Math.abs;
var X = String.fromCharCode;
var Wr = Object.assign;
function Yr(e6, r) {
  return _(e6, 0) ^ 45 ? (((r << 2 ^ _(e6, 0)) << 2 ^ _(e6, 1)) << 2 ^ _(e6, 2)) << 2 ^ _(e6, 3) : 0;
}
a(Yr, "hash");
function je(e6) {
  return e6.trim();
}
a(je, "trim");
function ur(e6, r) {
  return (e6 = r.exec(e6)) ? e6[0] : e6;
}
a(ur, "match");
function w(e6, r, t) {
  return e6.replace(r, t);
}
a(w, "replace");
function Se(e6, r) {
  return e6.indexOf(r);
}
a(Se, "indexof");
function _(e6, r) {
  return e6.charCodeAt(r) | 0;
}
a(_, "charat");
function q(e6, r, t) {
  return e6.slice(r, t);
}
a(q, "substr");
function P(e6) {
  return e6.length;
}
a(P, "strlen");
function se(e6) {
  return e6.length;
}
a(se, "sizeof");
function ue(e6, r) {
  return r.push(e6), e6;
}
a(ue, "append");
function cr(e6, r) {
  return e6.map(r).join("");
}
a(cr, "combine");
var De = 1;
var ce = 1;
var Gr = 0;
var L = 0;
var F = 0;
var le = "";
function Oe(e6, r, t, n, o, i, s6) {
  return { value: e6, root: r, parent: t, type: n, props: o, children: i, line: De, column: ce, length: s6, return: "" };
}
a(Oe, "node");
function de(e6, r) {
  return Wr(Oe("", null, null, "", null, null, 0), e6, { length: -e6.length }, r);
}
a(de, "copy");
function qr() {
  return F;
}
a(qr, "char");
function Jr() {
  return F = L > 0 ? _(le, --L) : 0, ce--, F === 10 && (ce = 1, De--), F;
}
a(Jr, "prev");
function z() {
  return F = L < Gr ? _(le, L++) : 0, ce++, F === 10 && (ce = 1, De++), F;
}
a(z, "next");
function D() {
  return _(le, L);
}
a(D, "peek");
function Te() {
  return L;
}
a(Te, "caret");
function pe(e6, r) {
  return q(le, e6, r);
}
a(pe, "slice");
function fe(e6) {
  switch (e6) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
a(fe, "token");
function Be(e6) {
  return De = ce = 1, Gr = P(le = e6), L = 0, [];
}
a(Be, "alloc");
function $e(e6) {
  return le = "", e6;
}
a($e, "dealloc");
function me(e6) {
  return je(pe(L - 1, fr(e6 === 91 ? e6 + 2 : e6 === 40 ? e6 + 1 : e6)));
}
a(me, "delimit");
function Zr(e6) {
  for (; (F = D()) && F < 33; )
    z();
  return fe(e6) > 2 || fe(F) > 3 ? "" : " ";
}
a(Zr, "whitespace");
function Kr(e6, r) {
  for (; --r && z() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return pe(e6, Te() + (r < 6 && D() == 32 && z() == 32));
}
a(Kr, "escaping");
function fr(e6) {
  for (; z(); )
    switch (F) {
      case e6:
        return L;
      case 34:
      case 39:
        e6 !== 34 && e6 !== 39 && fr(F);
        break;
      case 40:
        e6 === 41 && fr(e6);
        break;
      case 92:
        z();
        break;
    }
  return L;
}
a(fr, "delimiter");
function Xr(e6, r) {
  for (; z() && e6 + F !== 57; )
    if (e6 + F === 84 && D() === 47)
      break;
  return "/*" + pe(r, L - 1) + "*" + X(e6 === 47 ? e6 : z());
}
a(Xr, "commenter");
function Qr(e6) {
  for (; !fe(D()); )
    z();
  return pe(e6, L);
}
a(Qr, "identifier");
function tt(e6) {
  return $e(He("", null, null, null, [""], e6 = Be(e6), 0, [0], e6));
}
a(tt, "compile");
function He(e6, r, t, n, o, i, s6, u, c) {
  for (var d = 0, f = 0, l = s6, p = 0, v = 0, h = 0, m = 1, y = 1, x = 1, E = 0, A6 = "", T = o, C = i, N = n, S = A6; y; )
    switch (h = E, E = z()) {
      case 40:
        if (h != 108 && _(S, l - 1) == 58) {
          Se(S += w(me(E), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += me(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Zr(h);
        break;
      case 92:
        S += Kr(Te() - 1, 7);
        continue;
      case 47:
        switch (D()) {
          case 42:
          case 47:
            ue(Jn(Xr(z(), Te()), r, t), c);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        u[d++] = P(S) * x;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            x == -1 && (S = w(S, /\f/g, "")), v > 0 && P(S) - l && ue(
              v > 32 ? rt(S + ";", n, t, l - 1) : rt(w(S, " ", "") + ";", n, t, l - 2),
              c
            );
            break;
          case 59:
            S += ";";
          default:
            if (ue(N = et(S, r, t, d, f, o, u, A6, T = [], C = [], l), i), E === 123)
              if (f === 0)
                He(S, r, N, N, T, i, l, u, C);
              else
                switch (p === 99 && _(S, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(e6, N, N, n && ue(et(e6, N, N, 0, 0, o, u, A6, o, T = [], l), C), o, C, l, u, n ? T : C);
                    break;
                  default:
                    He(S, N, N, N, [""], C, 0, u, C);
                }
        }
        d = f = v = 0, m = x = 1, A6 = S = "", l = s6;
        break;
      case 58:
        l = 1 + P(S), v = h;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && Jr() == 125)
            continue;
        }
        switch (S += X(E), E * m) {
          case 38:
            x = f > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            u[d++] = (P(S) - 1) * x, x = 1;
            break;
          case 64:
            D() === 45 && (S += me(z())), p = D(), f = l = P(A6 = S += Qr(Te())), E++;
            break;
          case 45:
            h === 45 && P(S) == 2 && (m = 0);
        }
    }
  return i;
}
a(He, "parse");
function et(e6, r, t, n, o, i, s6, u, c, d, f) {
  for (var l = o - 1, p = o === 0 ? i : [""], v = se(p), h = 0, m = 0, y = 0; h < n; ++h)
    for (var x = 0, E = q(e6, l + 1, l = Ur(m = s6[h])), A6 = e6; x < v; ++x)
      (A6 = je(m > 0 ? p[x] + " " + E : w(E, /&\f/g, p[x]))) && (c[y++] = A6);
  return Oe(e6, r, t, o === 0 ? oe : u, c, d, f);
}
a(et, "ruleset");
function Jn(e6, r, t) {
  return Oe(e6, r, t, ae, X(qr()), q(e6, 2, -2), 0);
}
a(Jn, "comment");
function rt(e6, r, t, n) {
  return Oe(e6, r, t, ie, q(e6, 0, n), q(e6, n + 1, -1), n);
}
a(rt, "declaration");
function Q(e6, r) {
  for (var t = "", n = se(e6), o = 0; o < n; o++)
    t += r(e6[o], o, e6, r) || "";
  return t;
}
a(Q, "serialize");
function nt(e6, r, t, n) {
  switch (e6.type) {
    case Vr:
      if (e6.children.length) break;
    case Hr:
    case ie:
      return e6.return = e6.return || e6.value;
    case ae:
      return "";
    case Me:
      return e6.return = e6.value + "{" + Q(e6.children, n) + "}";
    case oe:
      e6.value = e6.props.join(",");
  }
  return P(t = Q(e6.children, n)) ? e6.return = e6.value + "{" + t + "}" : "";
}
a(nt, "stringify");
function at(e6) {
  var r = se(e6);
  return function(t, n, o, i) {
    for (var s6 = "", u = 0; u < r; u++)
      s6 += e6[u](t, n, o, i) || "";
    return s6;
  };
}
a(at, "middleware");
var lr = a(function(r) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (t.has(n))
      return t.get(n);
    var o = r(n);
    return t.set(n, o), o;
  };
}, "weakMemoize");
var Zn = a(function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = D(), o === 38 && i === 12 && (t[n] = 1), !fe(i); )
    z();
  return pe(r, L);
}, "identifierWithPointTracking");
var Kn = a(function(r, t) {
  var n = -1, o = 44;
  do
    switch (fe(o)) {
      case 0:
        o === 38 && D() === 12 && (t[n] = 1), r[n] += Zn(L - 1, t, n);
        break;
      case 2:
        r[n] += me(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = D() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += X(o);
    }
  while (o = z());
  return r;
}, "toRules");
var Xn = a(function(r, t) {
  return $e(Kn(Be(r), t));
}, "getRules");
var ot = /* @__PURE__ */ new WeakMap();
var Qn = a(function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ot.get(n)) && !o) {
      ot.set(r, true);
      for (var i = [], s6 = Xn(t, i), u = n.props, c = 0, d = 0; c < s6.length; c++)
        for (var f = 0; f < u.length; f++, d++)
          r.props[d] = i[c] ? s6[c].replace(/&\f/g, u[f]) : u[f] + " " + s6[c];
    }
  }
}, "compat");
var ea = a(function(r) {
  if (r.type === "decl") {
    var t = r.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, "removeLabel");
var ra = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var ta = a(
  function(r) {
    return r.type === "comm" && r.children.indexOf(ra) > -1;
  },
  "isIgnoringComment"
);
var na = a(function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s6 = !!t.parent, u = s6 ? t.parent.children : (
          // global rule at the root level
          o
        ), c = u.length - 1; c >= 0; c--) {
          var d = u[c];
          if (d.line < t.line)
            break;
          if (d.column < t.column) {
            if (ta(d))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split(
            "-child"
          )[0] + '-of-type".');
        });
      }
    }
  };
}, "createUnsafeSelectorsAlarm");
var st = a(function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, "isImportRule");
var aa = a(function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!st(t[n]))
      return true;
  return false;
}, "isPrependedWithRegularRules");
var it = a(function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, "nullifyElement");
var oa = a(function(r, t, n) {
  st(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), it(r)) : aa(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), it(r)));
}, "incorrectImportAlarm");
function ut(e6, r) {
  switch (Yr(e6, r)) {
    case 5103:
      return O2 + "print-" + e6 + e6;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return O2 + e6 + e6;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return O2 + e6 + we + e6 + k + e6 + e6;
    case 6828:
    case 4268:
      return O2 + e6 + k + e6 + e6;
    case 6165:
      return O2 + e6 + k + "flex-" + e6 + e6;
    case 5187:
      return O2 + e6 + w(e6, /(\w+).+(:[^]+)/, O2 + "box-$1$2" + k + "flex-$1$2") + e6;
    case 5443:
      return O2 + e6 + k + "flex-item-" + w(e6, /flex-|-self/, "") + e6;
    case 4675:
      return O2 + e6 + k + "flex-line-pack" + w(e6, /align-content|flex-|-self/, "") + e6;
    case 5548:
      return O2 + e6 + k + w(e6, "shrink", "negative") + e6;
    case 5292:
      return O2 + e6 + k + w(e6, "basis", "preferred-size") + e6;
    case 6060:
      return O2 + "box-" + w(e6, "-grow", "") + O2 + e6 + k + w(e6, "grow", "positive") + e6;
    case 4554:
      return O2 + w(e6, /([^-])(transform)/g, "$1" + O2 + "$2") + e6;
    case 6187:
      return w(w(w(e6, /(zoom-|grab)/, O2 + "$1"), /(image-set)/, O2 + "$1"), e6, "") + e6;
    case 5495:
    case 3959:
      return w(e6, /(image-set\([^]*)/, O2 + "$1$`$1");
    case 4968:
      return w(w(e6, /(.+:)(flex-)?(.*)/, O2 + "box-pack:$3" + k + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + O2 + e6 + e6;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(e6, /(.+)-inline(.+)/, O2 + "$1$2") + e6;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (P(e6) - 1 - r > 6) switch (_(e6, r + 1)) {
        case 109:
          if (_(e6, r + 4) !== 45) break;
        case 102:
          return w(e6, /(.+:)(.+)-([^]+)/, "$1" + O2 + "$2-$3$1" + we + (_(e6, r + 3) == 108 ? "$3" : "$2-$3")) + e6;
        case 115:
          return ~Se(e6, "stretch") ? ut(w(e6, "stretch", "fill-available"), r) + e6 : e6;
      }
      break;
    case 4949:
      if (_(e6, r + 1) !== 115) break;
    case 6444:
      switch (_(e6, P(e6) - 3 - (~Se(e6, "!important") && 10))) {
        case 107:
          return w(e6, ":", ":" + O2) + e6;
        case 101:
          return w(e6, /(.+:)([^;!]+)(;|!.+)?/, "$1" + O2 + (_(e6, 14) === 45 ? "inline-" : "") + "box$3$1" + O2 + "$2$3$1" + k + "$2box$3") + e6;
      }
      break;
    case 5936:
      switch (_(e6, r + 11)) {
        case 114:
          return O2 + e6 + k + w(e6, /[svh]\w+-[tblr]{2}/, "tb") + e6;
        case 108:
          return O2 + e6 + k + w(e6, /[svh]\w+-[tblr]{2}/, "tb-rl") + e6;
        case 45:
          return O2 + e6 + k + w(e6, /[svh]\w+-[tblr]{2}/, "lr") + e6;
      }
      return O2 + e6 + k + e6 + e6;
  }
  return e6;
}
a(ut, "prefix");
var ia = a(function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case ie:
      r.return = ut(r.value, r.length);
      break;
    case Me:
      return Q([de(r, {
        value: w(r.value, "@", "@" + O2)
      })], o);
    case oe:
      if (r.length) return cr(r.props, function(i) {
        switch (ur(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Q([de(r, {
              props: [w(i, /:(read-\w+)/, ":" + we + "$1")]
            })], o);
          case "::placeholder":
            return Q([de(r, {
              props: [w(i, /:(plac\w+)/, ":" + O2 + "input-$1")]
            }), de(r, {
              props: [w(i, /:(plac\w+)/, ":" + we + "$1")]
            }), de(r, {
              props: [w(i, /:(plac\w+)/, k + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, "prefixer");
var sa = [ia];
var Ve = a(function(r) {
  var t = r.key;
  if (!t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var y = m.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || sa;
  if (/[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, s6, u = [];
  s6 = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var y = m.getAttribute("data-emotion").split(" "), x = 1; x < y.length; x++)
        i[y[x]] = true;
      u.push(m);
    }
  );
  var c, d = [Qn, ea];
  d.push(na({
    get compat() {
      return h.compat;
    }
  }), oa);
  {
    var f, l = [nt, function(m) {
      m.root || (m.return ? f.insert(m.return) : m.value && m.type !== ae && f.insert(m.value + "{}"));
    }], p = at(d.concat(o, l)), v = a(function(y) {
      return Q(tt(y), p);
    }, "stylis");
    c = a(function(y, x, E, A6) {
      f = E, x.map !== void 0 && (f = {
        insert: a(function(C) {
          E.insert(C + x.map);
        }, "insert")
      }), v(y ? y + "{" + x.styles + "}" : x.styles), A6 && (h.inserted[x.name] = true);
    }, "insert");
  }
  var h = {
    key: t,
    sheet: new $r({
      key: t,
      container: s6,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(u), h;
}, "createCache");
var vt = ir(mr());
var yt = a(function(e6, r) {
  return (0, vt.default)(e6, r);
}, "hoistNonReactStatics");
var ha = true;
function he(e6, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e6[o] !== void 0 ? r.push(e6[o] + ";") : n += o + " ";
  }), n;
}
a(he, "getRegisteredStyles");
var ee = a(function(r, t, n) {
  var o = r.key + "-" + t.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ha === false) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, "registerStyles");
var re = a(function(r, t, n) {
  ee(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, true), i = i.next;
    while (i !== void 0);
  }
}, "insertStyles");
function xt(e6) {
  for (var r = 0, t, n = 0, o = e6.length; o >= 4; ++n, o -= 4)
    t = e6.charCodeAt(n) & 255 | (e6.charCodeAt(++n) & 255) << 8 | (e6.charCodeAt(++n) & 255) << 16 | (e6.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e6.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e6.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e6.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
a(xt, "murmur2");
var Et = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var wt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var ga = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var ba = /[A-Z]|^ms/g;
var Ft = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var br = a(function(r) {
  return r.charCodeAt(1) === 45;
}, "isCustomProperty");
var St = a(function(r) {
  return r != null && typeof r != "boolean";
}, "isProcessableValue");
var hr = ze(function(e6) {
  return br(e6) ? e6 : e6.replace(ba, "-$&").toLowerCase();
});
var Ue = a(function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Ft, function(n, o, i) {
          return $ = {
            name: o,
            styles: i,
            next: $
          }, o;
        });
  }
  return Et[r] !== 1 && !br(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, "processStyleValue");
Ot = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Tt = ["normal", "none", "initial", "inherit", "unset"], Ct = Ue, Rt = /^-ms-/, At = /-(.)/g, gr = {}, Ue = a(function(r, t) {
  if (r === "content" && (typeof t != "string" || Tt.indexOf(t) === -1 && !Ot.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(
    0
  ) !== '"' && t.charAt(0) !== "'")))
    throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
  var n = Ct(r, t);
  return n !== "" && !br(r) && r.indexOf("-") !== -1 && gr[r] === void 0 && (gr[r] = true, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Rt, "ms-").replace(At, function(o, i) {
    return i.toUpperCase();
  }) + "?")), n;
}, "processStyleValue");
var Ot;
var Tt;
var Ct;
var Rt;
var At;
var gr;
var Nt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ce(e6, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Nt);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return $ = {
          name: t.name,
          styles: t.styles,
          next: $
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            $ = {
              name: n.name,
              styles: n.styles,
              next: $
            }, n = n.next;
        var o = t.styles + ";";
        return t.map !== void 0 && (o += t.map), o;
      }
      return va(e6, r, t);
    }
    case "function": {
      if (e6 !== void 0) {
        var i = $, s6 = t(e6);
        return $ = i, Ce(e6, r, s6);
      } else console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      var u = [], c = t.replace(Ft, function(f, l, p) {
        var v = "animation" + u.length;
        return u.push("const " + v + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
      });
      u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      break;
  }
  if (r == null)
    return t;
  var d = r[t];
  return d !== void 0 ? d : t;
}
a(Ce, "handleInterpolation");
function va(e6, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Ce(e6, r, t[o]) + ";";
  else
    for (var i in t) {
      var s6 = t[i];
      if (typeof s6 != "object")
        r != null && r[s6] !== void 0 ? n += i + "{" + r[s6] + "}" : St(s6) && (n += hr(i) + ":" + Ue(i, s6) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR")
          throw new Error(Nt);
        if (Array.isArray(s6) && typeof s6[0] == "string" && (r == null || r[s6[0]] === void 0))
          for (var u = 0; u < s6.length; u++)
            St(s6[u]) && (n += hr(i) + ":" + Ue(i, s6[u]) + ";");
        else {
          var c = Ce(e6, r, s6);
          switch (i) {
            case "animation":
            case "animationName": {
              n += hr(i) + ":" + c + ";";
              break;
            }
            default:
              i === "undefined" && console.error(ga), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
a(va, "createStringFromObject");
var _t = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var It;
It = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var $;
var Y = a(function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = true, i = "";
  $ = void 0;
  var s6 = r[0];
  s6 == null || s6.raw === void 0 ? (o = false, i += Ce(n, t, s6)) : (s6[0] === void 0 && console.error(wt), i += s6[0]);
  for (var u = 1; u < r.length; u++)
    i += Ce(n, t, r[u]), o && (s6[u] === void 0 && console.error(wt), i += s6[u]);
  var c;
  i = i.replace(It, function(p) {
    return c = p, "";
  }), _t.lastIndex = 0;
  for (var d = "", f; (f = _t.exec(i)) !== null; )
    d += "-" + // $FlowFixMe we know it's not null
    f[1];
  var l = xt(i) + d;
  return {
    name: l,
    styles: i,
    map: c,
    next: $,
    toString: a(function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }, "toString")
  };
}, "serializeStyles");
var ya = a(function(r) {
  return r();
}, "syncFallback");
var kt = Re.useInsertionEffect ? Re.useInsertionEffect : false;
var ge = kt || ya;
var vr = kt || Re.useLayoutEffect;
var Er = true;
var We = {}.hasOwnProperty;
var Ae = I.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? Ve({
    key: "css"
  }) : null
);
Ae.displayName = "EmotionCacheContext";
var zt = Ae.Provider;
var J = a(function(r) {
  return (0, import_react.forwardRef)(function(t, n) {
    var o = (0, import_react.useContext)(Ae);
    return r(t, o, n);
  });
}, "withEmotionCache");
Er || (J = a(function(r) {
  return function(t) {
    var n = (0, import_react.useContext)(Ae);
    return n === null ? (n = Ve({
      key: "css"
    }), I.createElement(Ae.Provider, {
      value: n
    }, r(t, n))) : r(t, n);
  };
}, "withEmotionCache"));
var B = I.createContext({});
B.displayName = "EmotionThemeContext";
var Mt = a(function() {
  return I.useContext(B);
}, "useTheme");
var Ea = a(function(r, t) {
  if (typeof t == "function") {
    var n = t(r);
    if (n == null || typeof n != "object" || Array.isArray(n))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (t == null || typeof t != "object" || Array.isArray(t))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return j({}, r, t);
}, "getTheme");
var wa = lr(function(e6) {
  return lr(function(r) {
    return Ea(e6, r);
  });
});
var jt = a(function(r) {
  var t = I.useContext(B);
  return r.theme !== t && (t = wa(t)(r.theme)), I.createElement(B.Provider, {
    value: t
  }, r.children);
}, "ThemeProvider");
function Dt(e6) {
  var r = e6.displayName || e6.name || "Component", t = a(function(i, s6) {
    var u = I.useContext(B);
    return I.createElement(e6, j({
      theme: u,
      ref: s6
    }, i));
  }, "render"), n = I.forwardRef(t);
  return n.displayName = "WithTheme(" + r + ")", yt(n, e6);
}
a(Dt, "withTheme");
var Pt = a(function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, "getLastPart");
var Sa = a(function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t)) return Pt(t[1]);
}, "getFunctionNameFromStackTraceLine");
var Oa = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]);
var Ta = a(function(r) {
  return r.replace(/\$/g, "-");
}, "sanitizeIdentifier");
var Ca = a(function(r) {
  if (r)
    for (var t = r.split(`
`), n = 0; n < t.length; n++) {
      var o = Sa(t[n]);
      if (o) {
        if (Oa.has(o)) break;
        if (/^[A-Z]/.test(o)) return Ta(o);
      }
    }
}, "getLabelFromStackTrace");
var yr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var xr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Bt = a(
  function(r, t) {
    if (typeof t.css == "string" && // check if there is a css declaration
    t.css.indexOf(":") !== -1)
      throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
    var n = {};
    for (var o in t)
      We.call(t, o) && (n[o] = t[o]);
    if (n[yr] = r, t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
      var i = Ca(new Error().stack);
      i && (n[xr] = i);
    }
    return n;
  },
  "createEmotionProps"
);
var Ra = a(function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return ee(t, n, o), ge(function() {
    return re(t, n, o);
  }), null;
}, "Insertion");
var $t = J(function(e6, r, t) {
  var n = e6.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e6[yr], i = [n], s6 = "";
  typeof e6.className == "string" ? s6 = he(r.registered, i, e6.className) : e6.className != null && (s6 = e6.className + " ");
  var u = Y(i, void 0, I.useContext(B));
  if (u.name.indexOf("-") === -1) {
    var c = e6[xr];
    c && (u = Y([u, "label:" + c + ";"]));
  }
  s6 += r.key + "-" + u.name;
  var d = {};
  for (var f in e6)
    We.call(e6, f) && f !== "css" && f !== yr && f !== xr && (d[f] = e6[f]);
  return d.ref = t, d.className = s6, I.createElement(I.Fragment, null, I.createElement(Ra, {
    cache: r,
    serialized: u,
    isStringTag: typeof o == "string"
  }), I.createElement(o, d));
});
$t.displayName = "EmotionCssPropInternal";
var Ht = $t;
var rs = ir(mr());
var Aa = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
};
var _a = a(function(r, t) {
  var n = arguments;
  if (t == null || !We.call(t, "css"))
    return M.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Ht, i[1] = Bt(r, t);
  for (var s6 = 2; s6 < o; s6++)
    i[s6] = n[s6];
  return M.createElement.apply(null, i);
}, "jsx");
var Vt = false;
var Wt = J(function(e6, r) {
  !Vt && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e6.className || e6.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Vt = true);
  var t = e6.styles, n = Y([t], void 0, M.useContext(B));
  if (!Er) {
    for (var o, i = n.name, s6 = n.styles, u = n.next; u !== void 0; )
      i += " " + u.name, s6 += u.styles, u = u.next;
    var c = r.compat === true, d = r.insert("", {
      name: i,
      styles: s6
    }, r.sheet, c);
    return c ? null : M.createElement("style", (o = {}, o["data-emotion"] = r.key + "-global " + i, o.dangerouslySetInnerHTML = {
      __html: d
    }, o.nonce = r.sheet.nonce, o));
  }
  var f = M.useRef();
  return vr(function() {
    var l = r.key + "-global", p = new r.sheet.constructor({
      key: l,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), v = false, h = document.querySelector('style[data-emotion="' + l + " " + n.name + '"]');
    return r.sheet.tags.length && (p.before = r.sheet.tags[0]), h !== null && (v = true, h.setAttribute("data-emotion", l), p.hydrate([h])), f.current = [p, v], function() {
      p.flush();
    };
  }, [r]), vr(function() {
    var l = f.current, p = l[0], v = l[1];
    if (v) {
      l[1] = false;
      return;
    }
    if (n.next !== void 0 && re(r, n.next, true), p.tags.length) {
      var h = p.tags[p.tags.length - 1].nextElementSibling;
      p.before = h, p.flush();
    }
    r.insert("", n, p, false);
  }, [r, n.name]), null;
});
Wt.displayName = "EmotionGlobal";
function _e() {
  for (var e6 = arguments.length, r = new Array(e6), t = 0; t < e6; t++)
    r[t] = arguments[t];
  return Y(r);
}
a(_e, "css");
var be = a(function() {
  var r = _e.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: a(function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }, "toString")
  };
}, "keyframes");
var Fa = a(function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var s6 = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s6 = e(i);
          else {
            i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s6 = "";
            for (var u in i)
              i[u] && u && (s6 && (s6 += " "), s6 += u);
          }
          break;
        }
        default:
          s6 = i;
      }
      s6 && (o && (o += " "), o += s6);
    }
  }
  return o;
}, "classnames");
function Na(e6, r, t) {
  var n = [], o = he(e6, n, t);
  return n.length < 2 ? t : o + r(n);
}
a(Na, "merge");
var Ia = a(function(r) {
  var t = r.cache, n = r.serializedArr;
  return ge(function() {
    for (var o = 0; o < n.length; o++)
      re(t, n[o], false);
  }), null;
}, "Insertion");
var Yt = J(function(e6, r) {
  var t = false, n = [], o = a(function() {
    if (t)
      throw new Error("css can only be used during render");
    for (var d = arguments.length, f = new Array(d), l = 0; l < d; l++)
      f[l] = arguments[l];
    var p = Y(f, r.registered);
    return n.push(p), ee(r, p, false), r.key + "-" + p.name;
  }, "css"), i = a(function() {
    if (t)
      throw new Error("cx can only be used during render");
    for (var d = arguments.length, f = new Array(d), l = 0; l < d; l++)
      f[l] = arguments[l];
    return Na(r.registered, o, Fa(f));
  }, "cx"), s6 = {
    css: o,
    cx: i,
    theme: M.useContext(B)
  }, u = e6.children(s6);
  return t = true, M.createElement(M.Fragment, null, M.createElement(Ia, {
    cache: r,
    serializedArr: n
  }), u);
});
Yt.displayName = "EmotionClassNames";
wr = true, Ut = typeof jest < "u" || typeof vi < "u", wr && !Ut && (Sr = // $FlowIgnore
typeof globalThis < "u" ? globalThis : wr ? window : global, Or = "__EMOTION_REACT_" + Aa.version.split(".")[0] + "__", Sr[Or] && console.warn(
  "You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."
), Sr[Or] = true);
var wr;
var Ut;
var Sr;
var Or;
var ka = sr;
var Pa = a(function(r) {
  return r !== "theme";
}, "testOmitPropsOnComponent");
var Gt = a(function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ka : Pa;
}, "getDefaultShouldForwardProp");
var qt = a(function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(s6) {
      return r.__emotion_forwardProp(s6) && i(s6);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, "composeShouldForwardProps");
var Jt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var La = a(
  function(r) {
    var t = r.cache, n = r.serialized, o = r.isStringTag;
    return ee(t, n, o), ge(function() {
      return re(t, n, o);
    }), null;
  },
  "Insertion"
);
var Zt = a(function e2(r, t) {
  if (r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, s6;
  t !== void 0 && (i = t.label, s6 = t.target);
  var u = qt(r, t, n), c = u || Gt(o), d = !c("as");
  return function() {
    var f = arguments, l = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && l.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      l.push.apply(l, f);
    else {
      f[0][0] === void 0 && console.error(Jt), l.push(f[0][0]);
      for (var p = f.length, v = 1; v < p; v++)
        f[0][v] === void 0 && console.error(Jt), l.push(f[v], f[0][v]);
    }
    var h = J(function(m, y, x) {
      var E = d && m.as || o, A6 = "", T = [], C = m;
      if (m.theme == null) {
        C = {};
        for (var N in m)
          C[N] = m[N];
        C.theme = Z.useContext(B);
      }
      typeof m.className == "string" ? A6 = he(y.registered, T, m.className) : m.className != null && (A6 = m.className + " ");
      var S = Y(l.concat(T), y.registered, C);
      A6 += y.key + "-" + S.name, s6 !== void 0 && (A6 += " " + s6);
      var xe2 = d && u === void 0 ? Gt(E) : c, W = {};
      for (var G in m)
        d && G === "as" || // $FlowFixMe
        xe2(G) && (W[G] = m[G]);
      return W.className = A6, W.ref = x, Z.createElement(Z.Fragment, null, Z.createElement(La, {
        cache: y,
        serialized: S,
        isStringTag: typeof E == "string"
      }), Z.createElement(E, W));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps = r.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = l, h.__emotion_forwardProp = u, Object.defineProperty(
      h,
      "toString",
      {
        value: a(function() {
          return s6 === void 0 ? "NO_COMPONENT_SELECTOR" : "." + s6;
        }, "value")
      }
    ), h.withComponent = function(m, y) {
      return e2(m, j({}, t, y, {
        shouldForwardProp: qt(h, y, true)
      })).apply(void 0, l);
    }, h;
  };
}, "createStyled");
var za = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var Tr = Zt.bind();
za.forEach(function(e6) {
  Tr[e6] = Tr(e6);
});
function Kt(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
a(Kt, "_assertThisInitialized");
function K(e6, r) {
  return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, K(e6, r);
}
a(K, "_setPrototypeOf");
function Xt(e6, r) {
  e6.prototype = Object.create(r.prototype), e6.prototype.constructor = e6, K(e6, r);
}
a(Xt, "_inheritsLoose");
function Ye(e6) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ye(e6);
}
a(Ye, "_getPrototypeOf");
function Qt(e6) {
  try {
    return Function.toString.call(e6).indexOf("[native code]") !== -1;
  } catch {
    return typeof e6 == "function";
  }
}
a(Qt, "_isNativeFunction");
function Cr() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cr = a(function() {
    return !!e6;
  }, "_isNativeReflectConstruct"))();
}
a(Cr, "_isNativeReflectConstruct");
function en(e6, r, t) {
  if (Cr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var o = new (e6.bind.apply(e6, n))();
  return t && K(o, t.prototype), o;
}
a(en, "_construct");
function Ge(e6) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ge = a(function(n) {
    if (n === null || !Qt(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, o);
    }
    function o() {
      return en(n, arguments, Ye(this).constructor);
    }
    return a(o, "Wrapper"), o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), K(o, n);
  }, "_wrapNativeSuper"), Ge(e6);
}
a(Ge, "_wrapNativeSuper");
var Ma = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ja() {
  for (var e6 = arguments.length, r = new Array(e6), t = 0; t < e6; t++)
    r[t] = arguments[t];
  var n = r[0], o = [], i;
  for (i = 1; i < r.length; i += 1)
    o.push(r[i]);
  return o.forEach(function(s6) {
    n = n.replace(/%[a-z]/, s6);
  }), n;
}
a(ja, "format");
var V = function(e6) {
  Xt(r, e6);
  function r(t) {
    for (var n, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s6 = 1; s6 < o; s6++)
      i[s6 - 1] = arguments[s6];
    return n = e6.call(this, ja.apply(void 0, [Ma[t]].concat(i))) || this, Kt(n);
  }
  return a(r, "PolishedError"), r;
}(Ge(Error));
function Rr(e6) {
  return Math.round(e6 * 255);
}
a(Rr, "colorToInt");
function Da(e6, r, t) {
  return Rr(e6) + "," + Rr(r) + "," + Rr(t);
}
a(Da, "convertToInt");
function Fe(e6, r, t, n) {
  if (n === void 0 && (n = Da), r === 0)
    return n(t, t, t);
  var o = (e6 % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * t - 1)) * r, s6 = i * (1 - Math.abs(o % 2 - 1)), u = 0, c = 0, d = 0;
  o >= 0 && o < 1 ? (u = i, c = s6) : o >= 1 && o < 2 ? (u = s6, c = i) : o >= 2 && o < 3 ? (c = i, d = s6) : o >= 3 && o < 4 ? (c = s6, d = i) : o >= 4 && o < 5 ? (u = s6, d = i) : o >= 5 && o < 6 && (u = i, d = s6);
  var f = t - i / 2, l = u + f, p = c + f, v = d + f;
  return n(l, p, v);
}
a(Fe, "hslToRgb");
var rn = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Ba(e6) {
  if (typeof e6 != "string") return e6;
  var r = e6.toLowerCase();
  return rn[r] ? "#" + rn[r] : e6;
}
a(Ba, "nameToHex");
var $a = /^#[a-fA-F0-9]{6}$/;
var Ha = /^#[a-fA-F0-9]{8}$/;
var Va = /^#[a-fA-F0-9]{3}$/;
var Ua = /^#[a-fA-F0-9]{4}$/;
var Ar = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var Wa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var Ya = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var Ga = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Je(e6) {
  if (typeof e6 != "string")
    throw new V(3);
  var r = Ba(e6);
  if (r.match($a))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(Ha)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t
    };
  }
  if (r.match(Va))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(Ua)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var o = Ar.exec(r);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = Wa.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var s6 = Ya.exec(r);
  if (s6) {
    var u = parseInt("" + s6[1], 10), c = parseInt("" + s6[2], 10) / 100, d = parseInt("" + s6[3], 10) / 100, f = "rgb(" + Fe(u, c, d) + ")", l = Ar.exec(f);
    if (!l)
      throw new V(4, r, f);
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10)
    };
  }
  var p = Ga.exec(r.substring(0, 50));
  if (p) {
    var v = parseInt("" + p[1], 10), h = parseInt("" + p[2], 10) / 100, m = parseInt("" + p[3], 10) / 100, y = "rgb(" + Fe(v, h, m) + ")", x = Ar.exec(y);
    if (!x)
      throw new V(4, r, y);
    return {
      red: parseInt("" + x[1], 10),
      green: parseInt("" + x[2], 10),
      blue: parseInt("" + x[3], 10),
      alpha: parseFloat("" + p[4]) > 1 ? parseFloat("" + p[4]) / 100 : parseFloat("" + p[4])
    };
  }
  throw new V(5);
}
a(Je, "parseToRgb");
function qa(e6) {
  var r = e6.red / 255, t = e6.green / 255, n = e6.blue / 255, o = Math.max(r, t, n), i = Math.min(r, t, n), s6 = (o + i) / 2;
  if (o === i)
    return e6.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s6,
      alpha: e6.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s6
    };
  var u, c = o - i, d = s6 > 0.5 ? c / (2 - o - i) : c / (o + i);
  switch (o) {
    case r:
      u = (t - n) / c + (t < n ? 6 : 0);
      break;
    case t:
      u = (n - r) / c + 2;
      break;
    default:
      u = (r - t) / c + 4;
      break;
  }
  return u *= 60, e6.alpha !== void 0 ? {
    hue: u,
    saturation: d,
    lightness: s6,
    alpha: e6.alpha
  } : {
    hue: u,
    saturation: d,
    lightness: s6
  };
}
a(qa, "rgbToHsl");
function tn(e6) {
  return qa(Je(e6));
}
a(tn, "parseToHsl");
var Ja = a(function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, "reduceHexValue");
var Fr = Ja;
function te(e6) {
  var r = e6.toString(16);
  return r.length === 1 ? "0" + r : r;
}
a(te, "numberToHex");
function _r(e6) {
  return te(Math.round(e6 * 255));
}
a(_r, "colorToHex");
function Za(e6, r, t) {
  return Fr("#" + _r(e6) + _r(r) + _r(t));
}
a(Za, "convertToHex");
function qe(e6, r, t) {
  return Fe(e6, r, t, Za);
}
a(qe, "hslToHex");
function Ka(e6, r, t) {
  if (typeof e6 == "number" && typeof r == "number" && typeof t == "number")
    return qe(e6, r, t);
  if (typeof e6 == "object" && r === void 0 && t === void 0)
    return qe(e6.hue, e6.saturation, e6.lightness);
  throw new V(1);
}
a(Ka, "hsl");
function Xa(e6, r, t, n) {
  if (typeof e6 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
    return n >= 1 ? qe(e6, r, t) : "rgba(" + Fe(e6, r, t) + "," + n + ")";
  if (typeof e6 == "object" && r === void 0 && t === void 0 && n === void 0)
    return e6.alpha >= 1 ? qe(e6.hue, e6.saturation, e6.lightness) : "rgba(" + Fe(e6.hue, e6.saturation, e6.lightness) + "," + e6.alpha + ")";
  throw new V(2);
}
a(Xa, "hsla");
function Nr(e6, r, t) {
  if (typeof e6 == "number" && typeof r == "number" && typeof t == "number")
    return Fr("#" + te(e6) + te(r) + te(t));
  if (typeof e6 == "object" && r === void 0 && t === void 0)
    return Fr("#" + te(e6.red) + te(e6.green) + te(e6.blue));
  throw new V(6);
}
a(Nr, "rgb");
function ve(e6, r, t, n) {
  if (typeof e6 == "string" && typeof r == "number") {
    var o = Je(e6);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + r + ")";
  } else {
    if (typeof e6 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
      return n >= 1 ? Nr(e6, r, t) : "rgba(" + e6 + "," + r + "," + t + "," + n + ")";
    if (typeof e6 == "object" && r === void 0 && t === void 0 && n === void 0)
      return e6.alpha >= 1 ? Nr(e6.red, e6.green, e6.blue) : "rgba(" + e6.red + "," + e6.green + "," + e6.blue + "," + e6.alpha + ")";
  }
  throw new V(7);
}
a(ve, "rgba");
var Qa = a(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isRgb");
var eo = a(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, "isRgba");
var ro = a(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isHsl");
var to = a(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
}, "isHsla");
function nn(e6) {
  if (typeof e6 != "object") throw new V(8);
  if (eo(e6)) return ve(e6);
  if (Qa(e6)) return Nr(e6);
  if (to(e6)) return Xa(e6);
  if (ro(e6)) return Ka(e6);
  throw new V(8);
}
a(nn, "toColorString");
function an(e6, r, t) {
  return a(function() {
    var o = t.concat(Array.prototype.slice.call(arguments));
    return o.length >= r ? e6.apply(this, o) : an(e6, r, o);
  }, "fn");
}
a(an, "curried");
function Ze(e6) {
  return an(e6, e6.length, []);
}
a(Ze, "curry");
function Ke(e6, r, t) {
  return Math.max(e6, Math.min(r, t));
}
a(Ke, "guard");
function no(e6, r) {
  if (r === "transparent") return r;
  var t = tn(r);
  return nn(j({}, t, {
    lightness: Ke(0, 1, t.lightness - parseFloat(e6))
  }));
}
a(no, "darken");
var ao = Ze(no);
var on = ao;
function oo(e6, r) {
  if (r === "transparent") return r;
  var t = tn(r);
  return nn(j({}, t, {
    lightness: Ke(0, 1, t.lightness + parseFloat(e6))
  }));
}
a(oo, "lighten");
var io = Ze(oo);
var sn = io;
function so(e6, r) {
  if (r === "transparent") return r;
  var t = Je(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = j({}, t, {
    alpha: Ke(0, 1, (n * 100 + parseFloat(e6) * 100) / 100)
  });
  return ve(o);
}
a(so, "opacify");
var uo = Ze(so);
var un = uo;
function co(e6, r) {
  if (r === "transparent") return r;
  var t = Je(r), n = typeof t.alpha == "number" ? t.alpha : 1, o = j({}, t, {
    alpha: Ke(0, 1, +(n * 100 - parseFloat(e6) * 100).toFixed(2) / 100)
  });
  return ve(o);
}
a(co, "transparentize");
var fo = Ze(co);
var cn = fo;
var g = {
  // Official color palette
  primary: "#FF4785",
  // coral
  secondary: "#029CFD",
  // ocean
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  // Complimentary
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  // For borders
  border: "hsla(203, 50%, 30%, 0.15)",
  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  // Text
  defaultText: "#2E3438",
  inverseText: "#FFFFFF",
  positiveText: "#448028",
  negativeText: "#D43900",
  warningText: "#A15C20"
};
var U = {
  app: "#F6F9FC",
  bar: g.lightest,
  content: g.lightest,
  preview: g.lightest,
  gridCellSize: 10,
  hoverable: cn(0.9, g.secondary),
  // hover state for items in a list
  // Notification, error, and warning backgrounds
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
};
var H = {
  fonts: {
    base: [
      '"Nunito Sans"',
      "-apple-system",
      '".SFNSText-Regular"',
      '"San Francisco"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),
    mono: [
      "ui-monospace",
      "Menlo",
      "Monaco",
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};
var kr = ir(ln(), 1);
var dn = (0, kr.default)(1)(
  ({ typography: e6 }) => ({
    body: {
      fontFamily: e6.fonts.base,
      fontSize: e6.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    "*": {
      boxSizing: "border-box"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: e6.weight.regular,
      margin: 0,
      padding: 0
    },
    "button, input, textarea, select": {
      fontFamily: "inherit",
      fontSize: "inherit",
      boxSizing: "border-box"
    },
    sub: {
      fontSize: "0.8em",
      bottom: "-0.2em"
    },
    sup: {
      fontSize: "0.8em",
      top: "-0.2em"
    },
    "b, strong": {
      fontWeight: e6.weight.bold
    },
    hr: {
      border: "none",
      borderTop: "1px solid silver",
      clear: "both",
      marginBottom: "1.25rem"
    },
    code: {
      fontFamily: e6.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit"
    },
    pre: {
      fontFamily: e6.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0"
    }
  })
);
var lo = (0, kr.default)(1)(({
  color: e6,
  background: r,
  typography: t
}) => {
  let n = dn({ typography: t });
  return {
    ...n,
    body: {
      ...n.body,
      color: e6.defaultText,
      background: r.app,
      overflow: "hidden"
    },
    hr: {
      ...n.hr,
      borderTop: `1px solid ${e6.border}`
    }
  };
});
var po = {
  base: "light",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: U.app,
  appContentBg: g.lightest,
  appPreviewBg: g.lightest,
  appBorderColor: g.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: H.fonts.base,
  fontCode: H.fonts.mono,
  // Text colors
  textColor: g.darkest,
  textInverseColor: g.lightest,
  textMutedColor: g.dark,
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: g.lightest,
  // Form colors
  buttonBg: U.app,
  buttonBorder: g.medium,
  booleanBg: g.mediumlight,
  booleanSelectedBg: g.lightest,
  inputBg: g.lightest,
  inputBorder: g.border,
  inputTextColor: g.darkest,
  inputBorderRadius: 4
};
var ye = po;
var mo = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: "#222425",
  appContentBg: "#1B1C1D",
  appPreviewBg: g.lightest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  // Fonts
  fontBase: H.fonts.base,
  fontCode: H.fonts.mono,
  // Text colors
  textColor: "#C9CDCF",
  textInverseColor: "#222425",
  textMutedColor: "#798186",
  // Toolbar default and active colors
  barTextColor: g.mediumdark,
  barHoverColor: g.secondary,
  barSelectedColor: g.secondary,
  barBg: "#292C2E",
  // Form colors
  buttonBg: "#222425",
  buttonBorder: "rgba(255,255,255,.1)",
  booleanBg: "#222425",
  booleanSelectedBg: "#2E3438",
  inputBg: "#1B1C1D",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: g.lightest,
  inputBorderRadius: 4
};
var pn = mo;
var mn = (() => {
  let e6;
  return typeof window < "u" ? e6 = window : typeof globalThis < "u" ? e6 = globalThis : typeof global < "u" ? e6 = global : typeof self < "u" ? e6 = self : e6 = {}, e6;
})();
var { window: Pr } = mn;
var hn = a((e6) => ({ color: e6 }), "mkColor");
var go = a((e6) => typeof e6 != "string" ? (import_client_logger.logger.warn(
  `Color passed to theme object should be a string. Instead ${e6}(${typeof e6}) was passed.`
), false) : true, "isColorString");
var bo = a((e6) => !/(gradient|var|calc)/.test(e6), "isValidColorForPolished");
var vo = a(
  (e6, r) => e6 === "darken" ? ve(`${on(1, r)}`, 0.95) : e6 === "lighten" ? ve(`${sn(1, r)}`, 0.95) : r,
  "applyPolished"
);
var gn = a(
  (e6) => (r) => {
    if (!go(r) || !bo(r))
      return r;
    try {
      return vo(e6, r);
    } catch {
      return r;
    }
  },
  "colorFactory"
);
var yo = gn("lighten");
var xo = gn("darken");
var Xe = a(() => !Pr || !Pr.matchMedia ? "light" : Pr.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", "getPreferredColorScheme");
var Ne = {
  light: ye,
  dark: pn,
  normal: ye
};
var Lr = Xe();
var bu = a((e6 = { base: Lr }, r) => {
  let t = {
    ...Ne[Lr],
    ...Ne[e6.base] || {},
    ...e6,
    base: Ne[e6.base] ? e6.base : Lr
  };
  return {
    ...r,
    ...t,
    barSelectedColor: e6.barSelectedColor || t.colorSecondary
  };
}, "create");
var bn = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
};
var Eo = be`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var vn = be`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;
var wo = be`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;
var So = be`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`;
var Oo = _e`
  animation: ${vn} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`;
var To = _e`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`;
var yn = {
  rotate360: Eo,
  glow: vn,
  float: wo,
  jiggle: So,
  inlineGlow: Oo,
  hoverable: To
};
var xn = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  // 'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var En = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
};
var Co = a((e6) => Object.entries(e6).reduce((r, [t, n]) => ({ ...r, [t]: hn(n) }), {}), "convertColors");
var wn = a(
  ({ colors: e6, mono: r }) => {
    let t = Co(e6);
    return {
      token: {
        fontFamily: r,
        WebkitFontSmoothing: "antialiased",
        "&.tag": t.red3,
        "&.comment": { ...t.green1, fontStyle: "italic" },
        "&.prolog": { ...t.green1, fontStyle: "italic" },
        "&.doctype": { ...t.green1, fontStyle: "italic" },
        "&.cdata": { ...t.green1, fontStyle: "italic" },
        "&.string": t.red1,
        "&.url": t.cyan1,
        "&.symbol": t.cyan1,
        "&.number": t.cyan1,
        "&.boolean": t.cyan1,
        "&.variable": t.cyan1,
        "&.constant": t.cyan1,
        "&.inserted": t.cyan1,
        "&.atrule": t.blue1,
        "&.keyword": t.blue1,
        "&.attr-value": t.blue1,
        "&.punctuation": t.gray1,
        "&.operator": t.gray1,
        "&.function": t.gray1,
        "&.deleted": t.red2,
        "&.important": {
          fontWeight: "bold"
        },
        "&.bold": {
          fontWeight: "bold"
        },
        "&.italic": {
          fontStyle: "italic"
        },
        "&.class-name": t.cyan2,
        "&.selector": t.red3,
        "&.attr-name": t.red4,
        "&.property": t.red4,
        "&.regex": t.red4,
        "&.entity": t.red4,
        "&.directive.tag .tag": {
          background: "#ffff00",
          ...t.gray1
        }
      },
      "language-json .token.boolean": t.blue1,
      "language-json .token.number": t.blue1,
      "language-json .token.property": t.cyan2,
      namespace: {
        opacity: 0.7
      }
    };
  },
  "create"
);
var Ro = {
  green1: "#008000",
  red1: "#A31515",
  red2: "#9a050f",
  red3: "#800000",
  red4: "#ff0000",
  gray1: "#393A34",
  cyan1: "#36acaa",
  cyan2: "#2B91AF",
  blue1: "#0000ff",
  blue2: "#00009f"
};
var Ao = {
  green1: "#7C7C7C",
  red1: "#92C379",
  red2: "#9a050f",
  red3: "#A8FF60",
  red4: "#96CBFE",
  gray1: "#EDEDED",
  cyan1: "#C6C5FE",
  cyan2: "#FFFFB6",
  blue1: "#B474DD",
  blue2: "#00009f"
};
var _o = a((e6) => ({
  // Changeable colors
  primary: e6.colorPrimary,
  secondary: e6.colorSecondary,
  tertiary: g.tertiary,
  ancillary: g.ancillary,
  // Complimentary
  orange: g.orange,
  gold: g.gold,
  green: g.green,
  seafoam: g.seafoam,
  purple: g.purple,
  ultraviolet: g.ultraviolet,
  // Monochrome
  lightest: g.lightest,
  lighter: g.lighter,
  light: g.light,
  mediumlight: g.mediumlight,
  medium: g.medium,
  mediumdark: g.mediumdark,
  dark: g.dark,
  darker: g.darker,
  darkest: g.darkest,
  // For borders
  border: g.border,
  // Status
  positive: g.positive,
  negative: g.negative,
  warning: g.warning,
  critical: g.critical,
  defaultText: e6.textColor || g.darkest,
  inverseText: e6.textInverseColor || g.lightest,
  positiveText: g.positiveText,
  negativeText: g.negativeText,
  warningText: g.warningText
}), "createColors");
var zr = a((e6 = Ne[Xe()]) => {
  let {
    base: r,
    colorPrimary: t,
    colorSecondary: n,
    appBg: o,
    appContentBg: i,
    appPreviewBg: s6,
    appBorderColor: u,
    appBorderRadius: c,
    fontBase: d,
    fontCode: f,
    textColor: l,
    textInverseColor: p,
    barTextColor: v,
    barHoverColor: h,
    barSelectedColor: m,
    barBg: y,
    buttonBg: x,
    buttonBorder: E,
    booleanBg: A6,
    booleanSelectedBg: T,
    inputBg: C,
    inputBorder: N,
    inputTextColor: S,
    inputBorderRadius: xe2,
    brandTitle: W,
    brandUrl: G,
    brandImage: er2,
    brandTarget: rr2,
    gridCellSize: tr2,
    ...nr2
  } = e6;
  return {
    ...nr2,
    base: r,
    color: _o(e6),
    background: {
      app: o,
      bar: y,
      content: i,
      preview: s6,
      gridCellSize: tr2 || U.gridCellSize,
      hoverable: U.hoverable,
      positive: U.positive,
      negative: U.negative,
      warning: U.warning,
      critical: U.critical
    },
    typography: {
      fonts: {
        base: d,
        mono: f
      },
      weight: H.weight,
      size: H.size
    },
    animation: yn,
    easing: bn,
    input: {
      background: C,
      border: N,
      borderRadius: xe2,
      color: S
    },
    button: {
      background: x || C,
      border: E || N
    },
    boolean: {
      background: A6 || N,
      selectedBackground: T || C
    },
    // UI
    layoutMargin: 10,
    appBorderColor: u,
    appBorderRadius: c,
    // Toolbar default/active colors
    barTextColor: v,
    barHoverColor: h || n,
    barSelectedColor: m || n,
    barBg: y,
    // Brand logo/text
    brand: {
      title: W,
      url: G,
      image: er2 || (W ? null : void 0),
      target: rr2
    },
    code: wn({
      colors: r === "light" ? Ro : Ao,
      mono: f
    }),
    // Addon actions theme
    // API example https://github.com/storybookjs/react-inspector/blob/master/src/styles/themes/chromeLight.tsx
    addonActionsTheme: {
      ...r === "light" ? En : xn,
      BASE_FONT_FAMILY: f,
      BASE_FONT_SIZE: H.size.s2 - 1,
      BASE_LINE_HEIGHT: "18px",
      BASE_BACKGROUND_COLOR: "transparent",
      BASE_COLOR: l,
      ARROW_COLOR: un(0.2, u),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: f,
      TREENODE_FONT_SIZE: H.size.s2 - 1,
      TREENODE_LINE_HEIGHT: "18px",
      TREENODE_PADDING_LEFT: 12
    }
  };
}, "convert");
var Mr = a((e6) => Object.keys(e6).length === 0, "isEmpty");
var ne = a((e6) => e6 != null && typeof e6 == "object", "isObject");
var Ie = a((e6, ...r) => Object.prototype.hasOwnProperty.call(e6, ...r), "hasOwnProperty");
var ke = a(() => /* @__PURE__ */ Object.create(null), "makeObjectWithoutPrototype");
var Sn = a((e6, r) => e6 === r || !ne(e6) || !ne(r) ? {} : Object.keys(e6).reduce((t, n) => {
  if (Ie(r, n)) {
    let o = Sn(e6[n], r[n]);
    return ne(o) && Mr(o) || (t[n] = o), t;
  }
  return t[n] = void 0, t;
}, ke()), "deletedDiff");
var Qe = Sn;
function On(e6) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = Array.from(typeof e6 == "string" ? [e6] : e6);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(u, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? u.concat(d.map(function(f) {
      var l, p;
      return (p = (l = f.match(/[\t ]/g)) === null || l === void 0 ? void 0 : l.length) !== null && p !== void 0 ? p : 0;
    })) : u;
  }, []);
  if (o.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    n = n.map(function(u) {
      return u.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var s6 = n[0];
  return r.forEach(function(u, c) {
    var d = s6.match(/(?:^|\n)( *)$/), f = d ? d[1] : "", l = u;
    typeof u == "string" && u.includes(`
`) && (l = String(u).split(`
`).map(function(p, v) {
      return v === 0 ? p : "" + f + p;
    }).join(`
`)), s6 += l + n[c + 1];
  }), s6;
}
a(On, "dedent");
var pc = a((e6) => {
  if (!e6)
    return zr(ye);
  let r = Qe(ye, e6);
  return Object.keys(r).length && import_client_logger2.logger.warn(
    On`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
    r
  ), zr(e6);
}, "ensure");
var gc = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";

// node_modules/.pnpm/@storybook+core@8.2.9/node_modules/@storybook/core/dist/components/index.js
var import_react6 = __toESM(require_react());
var import_react7 = __toESM(require_react());
var import_react8 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var import_react9 = __toESM(require_react());
var import_react10 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var import_react11 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react14 = __toESM(require_react());
var import_react15 = __toESM(require_react());
var import_react16 = __toESM(require_react());
var import_client_logger3 = __toESM(require_client_logger());
var El = __toESM(require_react());
var pr = __toESM(require_react());
var iv = __toESM(require_react_dom());
var U2 = __toESM(require_react());
var import_react17 = __toESM(require_react());
var import_react18 = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());
var import_react19 = __toESM(require_react());
var import_react20 = __toESM(require_react());
var import_react21 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var import_react23 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var s = __toESM(require_react());
var import_react25 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_react27 = __toESM(require_react());
var cl = __toESM(require_react());
var import_react28 = __toESM(require_react());
var import_react29 = __toESM(require_react());
var import_react30 = __toESM(require_react());
var import_react31 = __toESM(require_react());
var import_react32 = __toESM(require_react());
var import_react_dom4 = __toESM(require_react_dom());
var import_react33 = __toESM(require_react());
var vl = __toESM(require_react());
var Fe2 = __toESM(require_react());
var import_react34 = __toESM(require_react());
var ng = __toESM(require_react());
var og = __toESM(require_react());
var Z2 = __toESM(require_react());
var xo2 = __toESM(require_react());
var sg = __toESM(require_react());
var import_react35 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_client_logger4 = __toESM(require_client_logger());
var import_react38 = __toESM(require_react());
var import_react39 = __toESM(require_react());
var import_react40 = __toESM(require_react());
var import_react41 = __toESM(require_react());
var import_react42 = __toESM(require_react());
var import_react43 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var import_react45 = __toESM(require_react());
var ut2 = __toESM(require_react());
var Yg = __toESM(require_react());
var import_react46 = __toESM(require_react());
var import_react47 = __toESM(require_react());
var import_react48 = __toESM(require_react());
var import_react49 = __toESM(require_react());
var import_react50 = __toESM(require_react());
var import_react51 = __toESM(require_react());
var import_react52 = __toESM(require_react());
var import_react53 = __toESM(require_react());
var import_react54 = __toESM(require_react());
var import_react55 = __toESM(require_react());
var import_react56 = __toESM(require_react());
var import_react57 = __toESM(require_react());
var import_react58 = __toESM(require_react());
var import_react59 = __toESM(require_react());
var import_react60 = __toESM(require_react());
var import_react61 = __toESM(require_react());
var import_client_logger5 = __toESM(require_client_logger());
var import_react62 = __toESM(require_react());
var import_react63 = __toESM(require_react());
var import_react64 = __toESM(require_react());
var import_react65 = __toESM(require_react());
var zv = Object.create;
var Uo = Object.defineProperty;
var Ov = Object.getOwnPropertyDescriptor;
var Nv = Object.getOwnPropertyNames;
var jv = Object.getPrototypeOf;
var Vv = Object.prototype.hasOwnProperty;
var qv = (e6, t, r) => t in e6 ? Uo(e6, t, { enumerable: true, configurable: true, writable: true, value: r }) : e6[t] = r;
var a2 = (e6, t) => Uo(e6, "name", { value: t, configurable: true });
var Go = ((e6) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e6, {
  get: (t, r) => (typeof __require < "u" ? __require : t)[r]
}) : e6)(function(e6) {
  if (typeof __require < "u") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + e6 + '" is not supported');
});
var A = (e6, t) => () => (e6 && (t = e6(e6 = 0)), t);
var M2 = (e6, t) => () => (t || e6((t = { exports: {} }).exports, t), t.exports);
var on2 = (e6, t) => {
  for (var r in t)
    Uo(e6, r, { get: t[r], enumerable: true });
};
var Wv = (e6, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Nv(t))
      !Vv.call(e6, o) && o !== r && Uo(e6, o, { get: () => t[o], enumerable: !(n = Ov(t, o)) || n.enumerable });
  return e6;
};
var ve2 = (e6, t, r) => (r = e6 != null ? zv(jv(e6)) : {}, Wv(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e6 || !e6.__esModule ? Uo(r, "default", { value: e6, enumerable: true }) : r,
  e6
));
var M1 = (e6, t, r) => qv(e6, typeof t != "symbol" ? t + "" : t, r);
function I2() {
  return I2 = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, I2.apply(null, arguments);
}
var Ue2 = A(() => {
  a2(I2, "_extends");
});
function _1(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
var $1 = A(() => {
  a2(_1, "_assertThisInitialized");
});
function Wt2(e6, t) {
  return Wt2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Wt2(e6, t);
}
var Wa2 = A(() => {
  a2(Wt2, "_setPrototypeOf");
});
function Ua2(e6) {
  return Ua2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ua2(e6);
}
var P1 = A(() => {
  a2(Ua2, "_getPrototypeOf");
});
var an2;
var Ya2 = A(() => {
  an2 = (() => {
    let e6;
    return typeof window < "u" ? e6 = window : typeof globalThis < "u" ? e6 = globalThis : typeof global < "u" ? e6 = global : typeof self < "u" ? e6 = self : e6 = {}, e6;
  })();
});
var Ko = M2((U1, is) => {
  (function(e6) {
    if (typeof U1 == "object" && typeof is < "u")
      is.exports = e6();
    else if (typeof define == "function" && define.amd)
      define([], e6);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e6();
    }
  })(function() {
    var e6, t, r;
    return a2(function n(o, i, l) {
      function u(p, h) {
        if (!i[p]) {
          if (!o[p]) {
            var f = typeof Go == "function" && Go;
            if (!h && f) return f(p, true);
            if (c) return c(p, true);
            var g6 = new Error("Cannot find module '" + p + "'");
            throw g6.code = "MODULE_NOT_FOUND", g6;
          }
          var w4 = i[p] = { exports: {} };
          o[p][0].call(w4.exports, function(m) {
            var v = o[p][1][m];
            return u(v || m);
          }, w4, w4.exports, n, o, i, l);
        }
        return i[p].exports;
      }
      a2(u, "s");
      for (var c = typeof Go == "function" && Go, d = 0; d < l.length; d++) u(l[d]);
      return u;
    }, "e")({ 1: [function(n, o, i) {
      o.exports = function(l) {
        if (typeof Map != "function" || l) {
          var u = n("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, o, i) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a2(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem = this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? true : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], true) : false);
      }, l.prototype.forEach = function(u, c) {
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, o.exports = l;
    }, {}], 3: [function(n, o, i) {
      var l = n("map-or-similar");
      o.exports = function(p) {
        var h = new l(false), f = [];
        return function(g6) {
          var w4 = a2(function() {
            var m = h, v, y, b = arguments.length - 1, D4 = Array(b + 1), x = true, C;
            if ((w4.numArgs || w4.numArgs === 0) && w4.numArgs !== b + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (C = 0; C < b; C++) {
              if (D4[C] = {
                cacheItem: m,
                arg: arguments[C]
              }, m.has(arguments[C])) {
                m = m.get(arguments[C]);
                continue;
              }
              x = false, v = new l(false), m.set(arguments[C], v), m = v;
            }
            return x && (m.has(arguments[b]) ? y = m.get(arguments[b]) : x = false), x || (y = g6.apply(null, arguments), m.set(arguments[b], y)), p > 0 && (D4[b] = {
              cacheItem: m,
              arg: arguments[b]
            }, x ? u(f, D4) : f.push(D4), f.length > p && c(f.shift())), w4.wasMemoized = x, w4.numArgs = b + 1, y;
          }, "memoizerific");
          return w4.limit = p, w4.wasMemoized = false, w4.cache = h, w4.lru = f, w4;
        };
      };
      function u(p, h) {
        var f = p.length, g6 = h.length, w4, m, v;
        for (m = 0; m < f; m++) {
          for (w4 = true, v = 0; v < g6; v++)
            if (!d(p[m][v].arg, h[v].arg)) {
              w4 = false;
              break;
            }
          if (w4)
            break;
        }
        p.push(p.splice(m, 1)[0]);
      }
      a2(u, "moveToMostRecentLru");
      function c(p) {
        var h = p.length, f = p[h - 1], g6, w4;
        for (f.cacheItem.delete(f.arg), w4 = h - 2; w4 >= 0 && (f = p[w4], g6 = f.cacheItem.get(f.arg), !g6 || !g6.size); w4--)
          f.cacheItem.delete(f.arg);
      }
      a2(c, "removeCachedResult");
      function d(p, h) {
        return p === h || p !== p && h !== h;
      }
      a2(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
var ss = M2((e_, G1) => {
  "use strict";
  G1.exports = ls;
  ls.displayName = "jsx";
  ls.aliases = [];
  function ls(e6) {
    (function(t) {
      var r = t.util.clone(t.languages.javascript), n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function l(d, p) {
        return d = d.replace(/<S>/g, function() {
          return n;
        }).replace(/<BRACES>/g, function() {
          return o;
        }).replace(/<SPREAD>/g, function() {
          return i;
        }), RegExp(d, p);
      }
      a2(l, "re"), i = l(i).source, t.languages.jsx = t.languages.extend("markup", r), t.languages.jsx.tag.pattern = l(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
      ), t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, t.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, t.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, t.languages.jsx.tag.inside.comment = r.comment, t.languages.insertBefore(
        "inside",
        "attr-name",
        {
          spread: {
            pattern: l(/<SPREAD>/.source),
            inside: t.languages.jsx
          }
        },
        t.languages.jsx.tag
      ), t.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            // Allow for two levels of nesting
            pattern: l(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation"
              },
              rest: t.languages.jsx
            }
          }
        },
        t.languages.jsx.tag
      );
      var u = a2(function(d) {
        return d ? typeof d == "string" ? d : typeof d.content == "string" ? d.content : d.content.map(u).join("") : "";
      }, "stringifyToken"), c = a2(function(d) {
        for (var p = [], h = 0; h < d.length; h++) {
          var f = d[h], g6 = false;
          if (typeof f != "string" && (f.type === "tag" && f.content[0] && f.content[0].type === "tag" ? f.content[0].content[0].content === "</" ? p.length > 0 && p[p.length - 1].tagName === u(f.content[0].content[1]) && p.pop() : f.content[f.content.length - 1].content === "/>" || p.push({
            tagName: u(f.content[0].content[1]),
            openedBraces: 0
          }) : p.length > 0 && f.type === "punctuation" && f.content === "{" ? p[p.length - 1].openedBraces++ : p.length > 0 && p[p.length - 1].openedBraces > 0 && f.type === "punctuation" && f.content === "}" ? p[p.length - 1].openedBraces-- : g6 = true), (g6 || typeof f == "string") && p.length > 0 && p[p.length - 1].openedBraces === 0) {
            var w4 = u(f);
            h < d.length - 1 && (typeof d[h + 1] == "string" || d[h + 1].type === "plain-text") && (w4 += u(d[h + 1]), d.splice(h + 1, 1)), h > 0 && (typeof d[h - 1] == "string" || d[h - 1].type === "plain-text") && (w4 = u(d[h - 1]) + w4, d.splice(h - 1, 1), h--), d[h] = new t.Token(
              "plain-text",
              w4,
              null,
              w4
            );
          }
          f.content && typeof f.content != "string" && c(f.content);
        }
      }, "walkTokens");
      t.hooks.add("after-tokenize", function(d) {
        d.language !== "jsx" && d.language !== "tsx" || c(d.tokens);
      });
    })(e6);
  }
  a2(ls, "jsx");
});
var X1;
var Y1;
var K1 = A(() => {
  X1 = ve2(ss()), Y1 = X1.default;
});
var J1 = M2((n_, Z1) => {
  "use strict";
  Z1.exports = us;
  us.displayName = "bash";
  us.aliases = ["shell"];
  function us(e6) {
    (function(t) {
      var r = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: true,
        alias: "punctuation",
        // this looks reasonably well in all themes
        inside: null
        // see below
      }, o = {
        bash: n,
        environment: {
          pattern: RegExp("\\$" + r),
          alias: "constant"
        },
        variable: [
          // [0]: Arithmetic Environment
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: true,
            inside: {
              // If there is a $ sign at the beginning highlight $(( and )) as variable
              variable: [
                {
                  pattern: /(^\$\(\([\s\S]+)\)\)/,
                  lookbehind: true
                },
                /^\$\(\(/
              ],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              // If there is no $ sign at the beginning highlight (( and )) as punctuation
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          // [1]: Command Substitution
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: true,
            inside: {
              variable: /^\$\(|^`|\)$|`$/
            }
          },
          // [2]: Brace expansion
          {
            pattern: /\$\{[^}]+\}/,
            greedy: true,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp("(\\{)" + r),
                lookbehind: true,
                alias: "constant"
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
      t.languages.bash = {
        shebang: {
          pattern: /^#!\s*\/.*/,
          alias: "important"
        },
        comment: {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        "function-name": [
          // a) function foo {
          // b) foo() {
          // c) function foo() {
          // but not “foo {”
          {
            // a) and c)
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: true,
            alias: "function"
          },
          {
            // b)
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
          }
        ],
        // Highlight variable names as variables in for and select beginnings.
        "for-or-select": {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: "variable",
          lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        "assign-left": {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            environment: {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + r),
              lookbehind: true,
              alias: "constant"
            }
          },
          alias: "variable",
          lookbehind: true
        },
        string: [
          // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: true,
            greedy: true,
            inside: o
          },
          // Here-document with quotes around the tag
          // → No expansion (so no “inside”).
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: true,
            greedy: true,
            inside: {
              bash: n
            }
          },
          // “Normal” string
          {
            // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: true,
            greedy: true,
            inside: o
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: true,
            greedy: true
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: true,
            inside: {
              entity: o.entity
            }
          }
        ],
        environment: {
          pattern: RegExp("\\$?" + r),
          alias: "constant"
        },
        variable: o.variable,
        function: {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        keyword: {
          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        builtin: {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
          lookbehind: true,
          // Alias added to make those easier to distinguish from strings.
          alias: "class-name"
        },
        boolean: {
          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "file-descriptor": {
          pattern: /\B&\d\b/,
          alias: "important"
        },
        operator: {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
          inside: {
            "file-descriptor": {
              pattern: /^\d/,
              alias: "important"
            }
          }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      }, n.inside = t.languages.bash;
      for (var i = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number"
      ], l = o.variable[1].inside, u = 0; u < i.length; u++)
        l[i[u]] = t.languages.bash[i[u]];
      t.languages.shell = t.languages.bash;
    })(e6);
  }
  a2(us, "bash");
});
var Q1;
var ep;
var tp = A(() => {
  Q1 = ve2(J1()), ep = Q1.default;
});
var ps = M2((i_, rp) => {
  "use strict";
  rp.exports = cs;
  cs.displayName = "css";
  cs.aliases = [];
  function cs(e6) {
    (function(t) {
      var r = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      t.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp(
            "\\burl\\((?:" + r.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i"
          ),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + r.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r.source + ")*(?=\\s*\\{)"
          ),
          lookbehind: true
        },
        string: {
          pattern: r,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      }, t.languages.css.atrule.inside.rest = t.languages.css;
      var n = t.languages.markup;
      n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
    })(e6);
  }
  a2(cs, "css");
});
var np;
var op;
var ap = A(() => {
  np = ve2(ps()), op = np.default;
});
var lp = M2((u_, ip) => {
  "use strict";
  ip.exports = ds;
  ds.displayName = "jsExtras";
  ds.aliases = [];
  function ds(e6) {
    (function(t) {
      t.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + t.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: true,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      }), t.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + t.languages.javascript.function.source
          ),
          lookbehind: true,
          alias: ["function", "property-access"]
        }
      }), t.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
          {
            // standard built-ins
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
          },
          {
            // errors
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
          }
        ]
      });
      function r(c, d) {
        return RegExp(
          c.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          d
        );
      }
      a2(r, "withId"), t.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: r(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: true,
          inside: t.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: r(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: true,
          inside: t.languages.javascript
        }
      }), t.languages.javascript.keyword.unshift(
        {
          pattern: /\b(?:as|default|export|from|import)\b/,
          alias: "module"
        },
        {
          pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: "control-flow"
        },
        {
          pattern: /\bnull\b/,
          alias: ["null", "nil"]
        },
        {
          pattern: /\bundefined\b/,
          alias: "nil"
        }
      ), t.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      }), t.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: r(/(\.\s*)#?<ID>/.source),
          lookbehind: true
        },
        "maybe-class-name": {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        dom: {
          // this contains only a few commonly used DOM variables
          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: "variable"
        },
        console: {
          pattern: /\bconsole(?=\s*\.)/,
          alias: "class-name"
        }
      });
      for (var n = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access"
      ], o = 0; o < n.length; o++) {
        var i = n[o], l = t.languages.javascript[i];
        t.util.type(l) === "RegExp" && (l = t.languages.javascript[i] = {
          pattern: l
        });
        var u = l.inside || {};
        l.inside = u, u["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(e6);
  }
  a2(ds, "jsExtras");
});
var sp;
var up;
var cp = A(() => {
  sp = ve2(lp()), up = sp.default;
});
var dp = M2((d_, pp) => {
  "use strict";
  pp.exports = fs;
  fs.displayName = "json";
  fs.aliases = ["webmanifest"];
  function fs(e6) {
    e6.languages.json = {
      property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
      },
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    }, e6.languages.webmanifest = e6.languages.json;
  }
  a2(fs, "json");
});
var fp;
var hp;
var mp = A(() => {
  fp = ve2(dp()), hp = fp.default;
});
var vp = M2((m_, gp) => {
  "use strict";
  gp.exports = hs;
  hs.displayName = "graphql";
  hs.aliases = [];
  function hs(e6) {
    e6.languages.graphql = {
      comment: /#.*/,
      description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: true,
        alias: "string",
        inside: {
          "language-markdown": {
            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: e6.languages.markdown
          }
        }
      },
      string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:false|true)\b/,
      variable: /\$[a-z_]\w*/i,
      directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
      },
      "attr-name": {
        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: true
      },
      "atom-input": {
        pattern: /\b[A-Z]\w*Input\b/,
        alias: "class-name"
      },
      scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
      constant: /\b[A-Z][A-Z_\d]*\b/,
      "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: true
      },
      fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-mutation": {
        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-query": {
        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
      operator: /[!=|&]|\.{3}/,
      "property-query": /\w+(?=\s*\()/,
      object: /\w+(?=\s*\{)/,
      punctuation: /[!(){}\[\]:=,]/,
      property: /\w+/
    }, e6.hooks.add("after-tokenize", a2(function(r) {
      if (r.language !== "graphql")
        return;
      var n = r.tokens.filter(function(v) {
        return typeof v != "string" && v.type !== "comment" && v.type !== "scalar";
      }), o = 0;
      function i(v) {
        return n[o + v];
      }
      a2(i, "getToken");
      function l(v, y) {
        y = y || 0;
        for (var b = 0; b < v.length; b++) {
          var D4 = i(b + y);
          if (!D4 || D4.type !== v[b])
            return false;
        }
        return true;
      }
      a2(l, "isTokenType");
      function u(v, y) {
        for (var b = 1, D4 = o; D4 < n.length; D4++) {
          var x = n[D4], C = x.content;
          if (x.type === "punctuation" && typeof C == "string") {
            if (v.test(C))
              b++;
            else if (y.test(C) && (b--, b === 0))
              return D4;
          }
        }
        return -1;
      }
      a2(u, "findClosingBracket");
      function c(v, y) {
        var b = v.alias;
        b ? Array.isArray(b) || (v.alias = b = [b]) : v.alias = b = [], b.push(y);
      }
      for (a2(c, "addAlias"); o < n.length; ) {
        var d = n[o++];
        if (d.type === "keyword" && d.content === "mutation") {
          var p = [];
          if (l(["definition-mutation", "punctuation"]) && i(1).content === "(") {
            o += 2;
            var h = u(/^\($/, /^\)$/);
            if (h === -1)
              continue;
            for (; o < h; o++) {
              var f = i(0);
              f.type === "variable" && (c(f, "variable-input"), p.push(f.content));
            }
            o = h + 1;
          }
          if (l(["punctuation", "property-query"]) && i(0).content === "{" && (o++, c(i(0), "property-mutation"), p.length > 0)) {
            var g6 = u(/^\{$/, /^\}$/);
            if (g6 === -1)
              continue;
            for (var w4 = o; w4 < g6; w4++) {
              var m = n[w4];
              m.type === "variable" && p.indexOf(m.content) >= 0 && c(m, "variable-input");
            }
          }
        }
      }
    }, "afterTokenizeGraphql"));
  }
  a2(hs, "graphql");
});
var bp;
var wp;
var yp = A(() => {
  bp = ve2(vp()), wp = bp.default;
});
var gs = M2((b_, Dp) => {
  "use strict";
  Dp.exports = ms;
  ms.displayName = "markup";
  ms.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function ms(e6) {
    e6.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, e6.languages.markup.tag.inside["attr-value"].inside.entity = e6.languages.markup.entity, e6.languages.markup.doctype.inside["internal-subset"].inside = e6.languages.markup, e6.hooks.add("wrap", function(t) {
      t.type === "entity" && (t.attributes.title = t.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(e6.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: a2(function(r, n) {
        var o = {};
        o["language-" + n] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: e6.languages[n]
        }, o.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: o
          }
        };
        i["language-" + n] = {
          pattern: /[\s\S]+/,
          inside: e6.languages[n]
        };
        var l = {};
        l[r] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function() {
                return r;
              }
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside: i
        }, e6.languages.insertBefore("markup", "cdata", l);
      }, "addInlined")
    }), Object.defineProperty(e6.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: a2(function(t, r) {
        e6.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + t + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [r, "language-" + r],
                  inside: e6.languages[r]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }, "value")
    }), e6.languages.html = e6.languages.markup, e6.languages.mathml = e6.languages.markup, e6.languages.svg = e6.languages.markup, e6.languages.xml = e6.languages.extend("markup", {}), e6.languages.ssml = e6.languages.xml, e6.languages.atom = e6.languages.xml, e6.languages.rss = e6.languages.xml;
  }
  a2(ms, "markup");
});
var xp;
var Cp;
var Ep = A(() => {
  xp = ve2(gs()), Cp = xp.default;
});
var Rp = M2((D_, Sp) => {
  "use strict";
  Sp.exports = vs;
  vs.displayName = "markdown";
  vs.aliases = ["md"];
  function vs(e6) {
    (function(t) {
      var r = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function n(h) {
        return h = h.replace(/<inner>/g, function() {
          return r;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + h + ")");
      }
      a2(n, "createInline");
      var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return o;
        }
      ), l = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      t.languages.markdown = t.languages.extend("markup", {}), t.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: t.languages.yaml
            }
          }
        },
        blockquote: {
          // > ...
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp(
            "^" + i + l + "(?:" + i + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + i + l + ")(?:" + i + ")*$"
              ),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(o),
                  inside: t.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + i + ")" + l + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + i + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(o),
                  alias: "important",
                  inside: t.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            // Prefixed by 4 spaces or 1 tab and preceded by an empty line
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: true,
            alias: "keyword"
          },
          {
            // ```optional language
            // code block
            // ```
            pattern: /^```[\s\S]*?^```$/m,
            greedy: true,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: true
              },
              "code-language": {
                pattern: /^(```).+/,
                lookbehind: true
              },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            // title 1
            // =======
            // title 2
            // -------
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
              punctuation: /==+$|--+$/
            }
          },
          {
            // # title 1
            // ###### title 6
            pattern: /(^\s*)#.+/m,
            lookbehind: true,
            alias: "important",
            inside: {
              punctuation: /^#+|#+$/
            }
          }
        ],
        hr: {
          // ***
          // ---
          // * * *
          // -----------
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        list: {
          // * item
          // + item
          // - item
          // 1. item
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        "url-reference": {
          // [id]: http://example.com "Optional title"
          // [id]: http://example.com 'Optional title'
          // [id]: http://example.com (Optional title)
          // [id]: <http://example.com> "Optional title"
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: true
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          // **strong**
          // __strong__
          // allow one nested instance of italic text using the same delimiter
          pattern: n(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          // *em*
          // _em_
          // allow one nested instance of bold text using the same delimiter
          pattern: n(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          // ~~strike through~~
          // ~strike~
          // eslint-disable-next-line regexp/strict
          pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          // `code`
          // ``code``
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: true,
          greedy: true,
          alias: ["code", "keyword"]
        },
        url: {
          // [example](http://example.com "Optional title")
          // [example][id]
          // [example] [id]
          pattern: n(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: true,
              inside: {}
              // see below
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: true
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: true
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: true
            }
          }
        }
      }), ["url", "bold", "italic", "strike"].forEach(function(h) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
          h !== f && (t.languages.markdown[h].inside.content.inside[f] = t.languages.markdown[f]);
        });
      }), t.hooks.add("after-tokenize", function(h) {
        if (h.language !== "markdown" && h.language !== "md")
          return;
        function f(g6) {
          if (!(!g6 || typeof g6 == "string"))
            for (var w4 = 0, m = g6.length; w4 < m; w4++) {
              var v = g6[w4];
              if (v.type !== "code") {
                f(v.content);
                continue;
              }
              var y = v.content[1], b = v.content[3];
              if (y && b && y.type === "code-language" && b.type === "code-block" && typeof y.content == "string") {
                var D4 = y.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                D4 = (/[a-z][\w-]*/i.exec(D4) || [""])[0].toLowerCase();
                var x = "language-" + D4;
                b.alias ? typeof b.alias == "string" ? b.alias = [b.alias, x] : b.alias.push(x) : b.alias = [x];
              }
            }
        }
        a2(f, "walkTokens"), f(h.tokens);
      }), t.hooks.add("wrap", function(h) {
        if (h.type === "code-block") {
          for (var f = "", g6 = 0, w4 = h.classes.length; g6 < w4; g6++) {
            var m = h.classes[g6], v = /language-(.+)/.exec(m);
            if (v) {
              f = v[1];
              break;
            }
          }
          var y = t.languages[f];
          if (y)
            h.content = t.highlight(
              p(h.content.value),
              y,
              f
            );
          else if (f && f !== "none" && t.plugins.autoloader) {
            var b = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            h.attributes.id = b, t.plugins.autoloader.loadLanguages(f, function() {
              var D4 = document.getElementById(b);
              D4 && (D4.innerHTML = t.highlight(
                D4.textContent,
                t.languages[f],
                f
              ));
            });
          }
        }
      });
      var u = RegExp(t.languages.markup.tag.pattern.source, "gi"), c = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      }, d = String.fromCodePoint || String.fromCharCode;
      function p(h) {
        var f = h.replace(u, "");
        return f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(g6, w4) {
          if (w4 = w4.toLowerCase(), w4[0] === "#") {
            var m;
            return w4[1] === "x" ? m = parseInt(w4.slice(2), 16) : m = Number(w4.slice(1)), d(m);
          } else {
            var v = c[w4];
            return v || g6;
          }
        }), f;
      }
      a2(p, "textContent"), t.languages.md = t.languages.markdown;
    })(e6);
  }
  a2(vs, "markdown");
});
var Ap;
var Fp;
var kp = A(() => {
  Ap = ve2(Rp()), Fp = Ap.default;
});
var Lp = M2((E_, Tp) => {
  "use strict";
  Tp.exports = bs;
  bs.displayName = "yaml";
  bs.aliases = ["yml"];
  function bs(e6) {
    (function(t) {
      var r = /[*&][^\s[\]{},]+/, n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, o = "(?:" + n.source + "(?:[ 	]+" + r.source + ")?|" + r.source + "(?:[ 	]+" + n.source + ")?)", i = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        }
      ), l = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function u(c, d) {
        d = (d || "").replace(/m/g, "") + "m";
        var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return o;
        }).replace(/<<value>>/g, function() {
          return c;
        });
        return RegExp(p, d);
      }
      a2(u, "createValuePattern"), t.languages.yaml = {
        scalar: {
          pattern: RegExp(
            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
              /<<prop>>/g,
              function() {
                return o;
              }
            )
          ),
          lookbehind: true,
          alias: "string"
        },
        comment: /#.*/,
        key: {
          pattern: RegExp(
            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
              return o;
            }).replace(/<<key>>/g, function() {
              return "(?:" + i + "|" + l + ")";
            })
          ),
          lookbehind: true,
          greedy: true,
          alias: "atrule"
        },
        directive: {
          pattern: /(^[ \t]*)%.+/m,
          lookbehind: true,
          alias: "important"
        },
        datetime: {
          pattern: u(
            /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source
          ),
          lookbehind: true,
          alias: "number"
        },
        boolean: {
          pattern: u(/false|true/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        null: {
          pattern: u(/null|~/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        string: {
          pattern: u(l),
          lookbehind: true,
          greedy: true
        },
        number: {
          pattern: u(
            /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
            "i"
          ),
          lookbehind: true
        },
        tag: n,
        important: r,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
      }, t.languages.yml = t.languages.yaml;
    })(e6);
  }
  a2(bs, "yaml");
});
var Bp;
var Ip;
var Mp = A(() => {
  Bp = ve2(Lp()), Ip = Bp.default;
});
var ys = M2((A_, _p) => {
  "use strict";
  _p.exports = ws;
  ws.displayName = "typescript";
  ws.aliases = ["ts"];
  function ws(e6) {
    (function(t) {
      t.languages.typescript = t.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      }), t.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      ), delete t.languages.typescript.parameter, delete t.languages.typescript["literal-property"];
      var r = t.languages.extend("typescript", {});
      delete r["class-name"], t.languages.typescript["class-name"].inside = r, t.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {
              pattern: /^@/,
              alias: "operator"
            },
            function: /^[\s\S]+/
          }
        },
        "generic-function": {
          // e.g. foo<T extends "bar" | "baz">( ...
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {
              pattern: /<[\s\S]+/,
              // everything after the first <
              alias: "class-name",
              inside: r
            }
          }
        }
      }), t.languages.ts = t.languages.typescript;
    })(e6);
  }
  a2(ws, "typescript");
});
var Hp = M2((k_, $p) => {
  "use strict";
  var D4 = ss(), x4 = ys();
  $p.exports = Ds;
  Ds.displayName = "tsx";
  Ds.aliases = [];
  function Ds(e6) {
    e6.register(D4), e6.register(x4), function(t) {
      var r = t.util.clone(t.languages.typescript);
      t.languages.tsx = t.languages.extend("jsx", r), delete t.languages.tsx.parameter, delete t.languages.tsx["literal-property"];
      var n = t.languages.tsx.tag;
      n.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
        n.pattern.flags
      ), n.lookbehind = true;
    }(e6);
  }
  a2(Ds, "tsx");
});
var Pp;
var zp;
var Op = A(() => {
  Pp = ve2(Hp()), zp = Pp.default;
});
var Np;
var jp;
var Vp = A(() => {
  Np = ve2(ys()), jp = Np.default;
});
function ln2(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if ({}.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
var Ka2 = A(() => {
  a2(ln2, "_objectWithoutPropertiesLoose");
});
function qp(e6, t) {
  if (e6 == null) return {};
  var r, n, o = ln2(e6, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e6);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e6, r) && (o[r] = e6[r]);
  }
  return o;
}
var Wp = A(() => {
  Ka2();
  a2(qp, "_objectWithoutProperties");
});
function Zo(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
var xs = A(() => {
  a2(Zo, "_arrayLikeToArray");
});
function Up(e6) {
  if (Array.isArray(e6)) return Zo(e6);
}
var Gp = A(() => {
  xs();
  a2(Up, "_arrayWithoutHoles");
});
function Xp(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
var Yp = A(() => {
  a2(Xp, "_iterableToArray");
});
function Kp(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Zo(e6, t);
    var r = {}.toString.call(e6).slice(8, -1);
    return r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set" ? Array.from(e6) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Zo(e6, t) : void 0;
  }
}
var Zp = A(() => {
  xs();
  a2(Kp, "_unsupportedIterableToArray");
});
function Jp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Qp = A(() => {
  a2(Jp, "_nonIterableSpread");
});
function ed(e6) {
  return Up(e6) || Xp(e6) || Kp(e6) || Jp();
}
var td = A(() => {
  Gp();
  Yp();
  Zp();
  Qp();
  a2(ed, "_toConsumableArray");
});
function gr2(e6) {
  "@babel/helpers - typeof";
  return gr2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr2(e6);
}
var Cs = A(() => {
  a2(gr2, "_typeof");
});
function rd(e6, t) {
  if (gr2(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (gr2(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var nd = A(() => {
  Cs();
  a2(rd, "toPrimitive");
});
function od(e6) {
  var t = rd(e6, "string");
  return gr2(t) == "symbol" ? t : t + "";
}
var ad = A(() => {
  Cs();
  nd();
  a2(od, "toPropertyKey");
});
function Za2(e6, t, r) {
  return (t = od(t)) in e6 ? Object.defineProperty(e6, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e6[t] = r, e6;
}
var Es = A(() => {
  ad();
  a2(Za2, "_defineProperty");
});
function id(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e6, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sn2(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? id(Object(r), true).forEach(function(n) {
      Za2(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : id(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function E4(e6) {
  var t = e6.length;
  if (t === 0 || t === 1) return e6;
  if (t === 2)
    return [e6[0], e6[1], "".concat(e6[0], ".").concat(e6[1]), "".concat(e6[1], ".").concat(e6[0])];
  if (t === 3)
    return [e6[0], e6[1], e6[2], "".concat(e6[0], ".").concat(e6[1]), "".concat(e6[0], ".").concat(e6[2]), "".concat(e6[1], ".").concat(e6[0]), "".concat(
      e6[1],
      "."
    ).concat(e6[2]), "".concat(e6[2], ".").concat(e6[0]), "".concat(e6[2], ".").concat(e6[1]), "".concat(e6[0], ".").concat(e6[1], ".").concat(
      e6[2]
    ), "".concat(e6[0], ".").concat(e6[2], ".").concat(e6[1]), "".concat(e6[1], ".").concat(e6[0], ".").concat(e6[2]), "".concat(e6[1], ".").concat(
      e6[2],
      "."
    ).concat(e6[0]), "".concat(e6[2], ".").concat(e6[0], ".").concat(e6[1]), "".concat(e6[2], ".").concat(e6[1], ".").concat(e6[0])];
  if (t >= 4)
    return [
      e6[0],
      e6[1],
      e6[2],
      e6[3],
      "".concat(e6[0], ".").concat(e6[1]),
      "".concat(e6[0], ".").concat(e6[2]),
      "".concat(e6[0], ".").concat(e6[3]),
      "".concat(e6[1], ".").concat(e6[0]),
      "".concat(e6[1], ".").concat(e6[2]),
      "".concat(e6[1], ".").concat(e6[3]),
      "".concat(e6[2], ".").concat(e6[0]),
      "".concat(e6[2], ".").concat(e6[1]),
      "".concat(e6[2], ".").concat(e6[3]),
      "".concat(e6[3], ".").concat(e6[0]),
      "".concat(e6[3], ".").concat(e6[1]),
      "".concat(e6[3], ".").concat(e6[2]),
      "".concat(e6[0], ".").concat(e6[1], ".").concat(e6[2]),
      "".concat(e6[0], ".").concat(e6[1], ".").concat(e6[3]),
      "".concat(e6[0], ".").concat(e6[2], ".").concat(e6[1]),
      "".concat(e6[0], ".").concat(e6[2], ".").concat(e6[3]),
      "".concat(e6[0], ".").concat(
        e6[3],
        "."
      ).concat(e6[1]),
      "".concat(e6[0], ".").concat(e6[3], ".").concat(e6[2]),
      "".concat(e6[1], ".").concat(e6[0], ".").concat(e6[2]),
      "".concat(
        e6[1],
        "."
      ).concat(e6[0], ".").concat(e6[3]),
      "".concat(e6[1], ".").concat(e6[2], ".").concat(e6[0]),
      "".concat(e6[1], ".").concat(e6[2], ".").concat(
        e6[3]
      ),
      "".concat(e6[1], ".").concat(e6[3], ".").concat(e6[0]),
      "".concat(e6[1], ".").concat(e6[3], ".").concat(e6[2]),
      "".concat(e6[2], ".").concat(
        e6[0],
        "."
      ).concat(e6[1]),
      "".concat(e6[2], ".").concat(e6[0], ".").concat(e6[3]),
      "".concat(e6[2], ".").concat(e6[1], ".").concat(e6[0]),
      "".concat(
        e6[2],
        "."
      ).concat(e6[1], ".").concat(e6[3]),
      "".concat(e6[2], ".").concat(e6[3], ".").concat(e6[0]),
      "".concat(e6[2], ".").concat(e6[3], ".").concat(
        e6[1]
      ),
      "".concat(e6[3], ".").concat(e6[0], ".").concat(e6[1]),
      "".concat(e6[3], ".").concat(e6[0], ".").concat(e6[2]),
      "".concat(e6[3], ".").concat(
        e6[1],
        "."
      ).concat(e6[0]),
      "".concat(e6[3], ".").concat(e6[1], ".").concat(e6[2]),
      "".concat(e6[3], ".").concat(e6[2], ".").concat(e6[0]),
      "".concat(
        e6[3],
        "."
      ).concat(e6[2], ".").concat(e6[1]),
      "".concat(e6[0], ".").concat(e6[1], ".").concat(e6[2], ".").concat(e6[3]),
      "".concat(e6[0], ".").concat(
        e6[1],
        "."
      ).concat(e6[3], ".").concat(e6[2]),
      "".concat(e6[0], ".").concat(e6[2], ".").concat(e6[1], ".").concat(e6[3]),
      "".concat(e6[0], ".").concat(
        e6[2],
        "."
      ).concat(e6[3], ".").concat(e6[1]),
      "".concat(e6[0], ".").concat(e6[3], ".").concat(e6[1], ".").concat(e6[2]),
      "".concat(e6[0], ".").concat(
        e6[3],
        "."
      ).concat(e6[2], ".").concat(e6[1]),
      "".concat(e6[1], ".").concat(e6[0], ".").concat(e6[2], ".").concat(e6[3]),
      "".concat(e6[1], ".").concat(
        e6[0],
        "."
      ).concat(e6[3], ".").concat(e6[2]),
      "".concat(e6[1], ".").concat(e6[2], ".").concat(e6[0], ".").concat(e6[3]),
      "".concat(e6[1], ".").concat(
        e6[2],
        "."
      ).concat(e6[3], ".").concat(e6[0]),
      "".concat(e6[1], ".").concat(e6[3], ".").concat(e6[0], ".").concat(e6[2]),
      "".concat(e6[1], ".").concat(
        e6[3],
        "."
      ).concat(e6[2], ".").concat(e6[0]),
      "".concat(e6[2], ".").concat(e6[0], ".").concat(e6[1], ".").concat(e6[3]),
      "".concat(e6[2], ".").concat(
        e6[0],
        "."
      ).concat(e6[3], ".").concat(e6[1]),
      "".concat(e6[2], ".").concat(e6[1], ".").concat(e6[0], ".").concat(e6[3]),
      "".concat(e6[2], ".").concat(
        e6[1],
        "."
      ).concat(e6[3], ".").concat(e6[0]),
      "".concat(e6[2], ".").concat(e6[3], ".").concat(e6[0], ".").concat(e6[1]),
      "".concat(e6[2], ".").concat(
        e6[3],
        "."
      ).concat(e6[1], ".").concat(e6[0]),
      "".concat(e6[3], ".").concat(e6[0], ".").concat(e6[1], ".").concat(e6[2]),
      "".concat(e6[3], ".").concat(
        e6[0],
        "."
      ).concat(e6[2], ".").concat(e6[1]),
      "".concat(e6[3], ".").concat(e6[1], ".").concat(e6[0], ".").concat(e6[2]),
      "".concat(e6[3], ".").concat(
        e6[1],
        "."
      ).concat(e6[2], ".").concat(e6[0]),
      "".concat(e6[3], ".").concat(e6[2], ".").concat(e6[0], ".").concat(e6[1]),
      "".concat(e6[3], ".").concat(
        e6[2],
        "."
      ).concat(e6[1], ".").concat(e6[0])
    ];
}
function S4(e6) {
  if (e6.length === 0 || e6.length === 1) return e6;
  var t = e6.join(".");
  return Ss[t] || (Ss[t] = E4(e6)), Ss[t];
}
function R4(e6) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e6.filter(
    function(i) {
      return i !== "token";
    }
  ), o = S4(n);
  return o.reduce(function(i, l) {
    return sn2(sn2({}, i), r[l]);
  }, t);
}
function ld(e6) {
  return e6.join(" ");
}
function A4(e6, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(o, i) {
      return vr2({
        node: o,
        stylesheet: e6,
        useInlineStyles: t,
        key: "code-segment-".concat(r, "-").concat(i)
      });
    });
  };
}
function vr2(e6) {
  var t = e6.node, r = e6.stylesheet, n = e6.style, o = n === void 0 ? {} : n, i = e6.useInlineStyles, l = e6.key, u = t.properties, c = t.type, d = t.tagName, p = t.value;
  if (c === "text")
    return p;
  if (d) {
    var h = A4(r, i), f;
    if (!i)
      f = sn2(sn2({}, u), {}, {
        className: ld(u.className)
      });
    else {
      var g6 = Object.keys(r).reduce(function(y, b) {
        return b.split(".").forEach(function(D4) {
          y.includes(D4) || y.push(D4);
        }), y;
      }, []), w4 = u.className && u.className.includes("token") ? ["token"] : [], m = u.className && w4.concat(u.className.filter(function(y) {
        return !g6.includes(y);
      }));
      f = sn2(sn2({}, u), {}, {
        className: ld(m) || void 0,
        style: R4(u.className, Object.assign({}, u.style, o), r)
      });
    }
    var v = h(t.children);
    return import_react3.default.createElement(d, I2({
      key: l
    }, f), v);
  }
}
var Ss;
var Rs = A(() => {
  Ue2();
  Es();
  a2(id, "ownKeys");
  a2(sn2, "_objectSpread");
  a2(E4, "powerSetPermutations");
  Ss = {};
  a2(S4, "getClassNameCombinations");
  a2(R4, "createStyleObject");
  a2(ld, "createClassNameString");
  a2(A4, "createChildren");
  a2(vr2, "createElement");
});
var sd;
var ud = A(() => {
  sd = a2(function(e6, t) {
    var r = e6.listLanguages();
    return r.indexOf(t) !== -1;
  }, "default");
});
function cd(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e6, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gt(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cd(Object(r), true).forEach(function(n) {
      Za2(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : cd(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function T4(e6) {
  return e6.match(k4);
}
function L4(e6) {
  var t = e6.lines, r = e6.startingLineNumber, n = e6.style;
  return t.map(function(o, i) {
    var l = i + r;
    return import_react4.default.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof n == "function" ? n(l) : n
    }, "".concat(l, `
`));
  });
}
function B4(e6) {
  var t = e6.codeString, r = e6.codeStyle, n = e6.containerStyle, o = n === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n, i = e6.numberStyle, l = i === void 0 ? {} : i, u = e6.startingLineNumber;
  return import_react4.default.createElement("code", {
    style: Object.assign({}, r, o)
  }, L4({
    lines: t.replace(/\n$/, "").split(`
`),
    style: l,
    startingLineNumber: u
  }));
}
function I4(e6) {
  return "".concat(e6.toString().length, ".25em");
}
function pd(e6, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e6),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t
    },
    children: [{
      type: "text",
      value: e6
    }]
  };
}
function dd(e6, t, r) {
  var n = {
    display: "inline-block",
    minWidth: I4(r),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, o = typeof e6 == "function" ? e6(t) : e6, i = gt(gt({}, n), o);
  return i;
}
function Ja2(e6) {
  var t = e6.children, r = e6.lineNumber, n = e6.lineNumberStyle, o = e6.largestLineNumber, i = e6.showInlineLineNumbers, l = e6.lineProps, u = l === void 0 ? {} : l, c = e6.className, d = c === void 0 ? [] : c, p = e6.showLineNumbers, h = e6.wrapLongLines, f = typeof u == "function" ? u(r) : u;
  if (f.className = d, r && i) {
    var g6 = dd(n, r, o);
    t.unshift(pd(r, g6));
  }
  return h & p && (f.style = gt(gt({}, f.style), {}, {
    display: "flex"
  })), {
    type: "element",
    tagName: "span",
    properties: f,
    children: t
  };
}
function fd(e6) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e6.length; n++) {
    var o = e6[n];
    if (o.type === "text")
      r.push(Ja2({
        children: [o],
        className: ed(new Set(t))
      }));
    else if (o.children) {
      var i = t.concat(o.properties.className);
      fd(o.children, i).forEach(function(l) {
        return r.push(l);
      });
    }
  }
  return r;
}
function M4(e6, t, r, n, o, i, l, u, c) {
  var d, p = fd(e6.value), h = [], f = -1, g6 = 0;
  function w4(C, E) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Ja2({
      children: C,
      lineNumber: E,
      lineNumberStyle: u,
      largestLineNumber: l,
      showInlineLineNumbers: o,
      lineProps: r,
      className: S,
      showLineNumbers: n,
      wrapLongLines: c
    });
  }
  a2(w4, "createWrappedLine");
  function m(C, E) {
    if (n && E && o) {
      var S = dd(u, E, l);
      C.unshift(pd(E, S));
    }
    return C;
  }
  a2(m, "createUnwrappedLine");
  function v(C, E) {
    var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || S.length > 0 ? w4(C, E, S) : m(C, E);
  }
  a2(v, "createLine");
  for (var y = a2(function() {
    var E = p[g6], S = E.children[0].value, R = T4(S);
    if (R) {
      var F6 = S.split(`
`);
      F6.forEach(function(k6, T) {
        var _7 = n && h.length + i, $7 = {
          type: "text",
          value: "".concat(k6, `
`)
        };
        if (T === 0) {
          var q4 = p.slice(f + 1, g6).concat(Ja2({
            children: [$7],
            className: E.properties.className
          })), L6 = v(q4, _7);
          h.push(L6);
        } else if (T === F6.length - 1) {
          var B6 = p[g6 + 1] && p[g6 + 1].children && p[g6 + 1].children[0], H4 = {
            type: "text",
            value: "".concat(k6)
          };
          if (B6) {
            var W = Ja2({
              children: [H4],
              className: E.properties.className
            });
            p.splice(g6 + 1, 0, W);
          } else {
            var N = [H4], G = v(N, _7, E.properties.className);
            h.push(G);
          }
        } else {
          var z4 = [$7], Y4 = v(z4, _7, E.properties.className);
          h.push(Y4);
        }
      }), f = g6;
    }
    g6++;
  }, "_loop"); g6 < p.length; )
    y();
  if (f !== p.length - 1) {
    var b = p.slice(f + 1, p.length);
    if (b && b.length) {
      var D4 = n && h.length + i, x = v(b, D4);
      h.push(x);
    }
  }
  return t ? h : (d = []).concat.apply(d, h);
}
function _4(e6) {
  var t = e6.rows, r = e6.stylesheet, n = e6.useInlineStyles;
  return t.map(function(o, i) {
    return vr2({
      node: o,
      stylesheet: r,
      useInlineStyles: n,
      key: "code-segement".concat(i)
    });
  });
}
function hd(e6) {
  return e6 && typeof e6.highlightAuto < "u";
}
function $4(e6) {
  var t = e6.astGenerator, r = e6.language, n = e6.code, o = e6.defaultCodeValue;
  if (hd(t)) {
    var i = sd(t, r);
    return r === "text" ? {
      value: o,
      language: "text"
    } : i ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? {
      value: t.highlight(n, r)
    } : {
      value: o
    };
  } catch {
    return {
      value: o
    };
  }
}
function As(e6, t) {
  return a2(function(n) {
    var o = n.language, i = n.children, l = n.style, u = l === void 0 ? t : l, c = n.customStyle, d = c === void 0 ? {} : c, p = n.codeTagProps, h = p === void 0 ? {
      className: o ? "language-".concat(o) : void 0,
      style: gt(gt({}, u['code[class*="language-"]']), u['code[class*="language-'.concat(o, '"]')])
    } : p, f = n.useInlineStyles, g6 = f === void 0 ? true : f, w4 = n.showLineNumbers, m = w4 === void 0 ? false : w4, v = n.showInlineLineNumbers, y = v === void 0 ? true : v, b = n.startingLineNumber, D4 = b === void 0 ? 1 : b, x = n.lineNumberContainerStyle, C = n.lineNumberStyle, E = C === void 0 ? {} : C, S = n.wrapLines, R = n.wrapLongLines, F6 = R === void 0 ? false : R, k6 = n.lineProps, T = k6 === void 0 ? {} : k6, _7 = n.renderer, $7 = n.PreTag, q4 = $7 === void 0 ? "pre" : $7, L6 = n.CodeTag, B6 = L6 === void 0 ? "code" : L6, H4 = n.code, W = H4 === void 0 ? (Array.isArray(i) ? i[0] : i) || "" : H4, N = n.astGenerator, G = qp(n, F4);
    N = N || e6;
    var z4 = m ? import_react4.default.createElement(B4, {
      containerStyle: x,
      codeStyle: h.style || {},
      numberStyle: E,
      startingLineNumber: D4,
      codeString: W
    }) : null, Y4 = u.hljs || u['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, Be2 = hd(N) ? "hljs" : "prismjs", ge2 = g6 ? Object.assign({}, G, {
      style: Object.assign({}, Y4, d)
    }) : Object.assign({}, G, {
      className: G.className ? "".concat(Be2, " ").concat(G.className) : Be2,
      style: Object.assign({}, d)
    });
    if (F6 ? h.style = gt(gt({}, h.style), {}, {
      whiteSpace: "pre-wrap"
    }) : h.style = gt(gt({}, h.style), {}, {
      whiteSpace: "pre"
    }), !N)
      return import_react4.default.createElement(q4, ge2, z4, import_react4.default.createElement(B6, h, W));
    (S === void 0 && _7 || F6) && (S = true), _7 = _7 || _4;
    var ce2 = [{
      type: "text",
      value: W
    }], Se2 = $4({
      astGenerator: N,
      language: o,
      code: W,
      defaultCodeValue: ce2
    });
    Se2.language === null && (Se2.value = ce2);
    var Ie2 = Se2.value.length + D4, Me2 = M4(Se2, S, T, m, y, D4, Ie2, E, F6);
    return import_react4.default.createElement(q4, ge2, import_react4.default.createElement(B6, h, !y && z4, _7({
      rows: Me2,
      stylesheet: u,
      useInlineStyles: g6
    })));
  }, "SyntaxHighlighter");
}
var F4;
var k4;
var md = A(() => {
  Wp();
  td();
  Es();
  Rs();
  ud();
  F4 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
  a2(cd, "ownKeys");
  a2(gt, "_objectSpread");
  k4 = /\n/g;
  a2(T4, "getNewLines");
  a2(L4, "getAllLineNumbers");
  a2(B4, "AllLineNumbers");
  a2(I4, "getEmWidthOfNumber");
  a2(pd, "getInlineLineNumber");
  a2(dd, "assembleLineNumberStyles");
  a2(Ja2, "createLineElement");
  a2(fd, "flattenCodeTree");
  a2(M4, "processLines");
  a2(_4, "defaultRenderer");
  a2(hd, "isHighlightJs");
  a2($4, "getCodeTree");
  a2(As, "default");
});
var vd = M2((k$, gd) => {
  gd.exports = P4;
  var H4 = Object.prototype.hasOwnProperty;
  function P4() {
    for (var e6 = {}, t = 0; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        H4.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }
  a2(P4, "extend");
});
var ks = M2((L$, wd) => {
  "use strict";
  wd.exports = bd;
  var Fs = bd.prototype;
  Fs.space = null;
  Fs.normal = {};
  Fs.property = {};
  function bd(e6, t, r) {
    this.property = e6, this.normal = t, r && (this.space = r);
  }
  a2(bd, "Schema");
});
var xd = M2((I$, Dd) => {
  "use strict";
  var yd = vd(), z4 = ks();
  Dd.exports = O4;
  function O4(e6) {
    for (var t = e6.length, r = [], n = [], o = -1, i, l; ++o < t; )
      i = e6[o], r.push(i.property), n.push(i.normal), l = i.space;
    return new z4(
      yd.apply(null, r),
      yd.apply(null, n),
      l
    );
  }
  a2(O4, "merge");
});
var Qa2 = M2((_$, Cd) => {
  "use strict";
  Cd.exports = N4;
  function N4(e6) {
    return e6.toLowerCase();
  }
  a2(N4, "normalize");
});
var Ts = M2((H$, Sd) => {
  "use strict";
  Sd.exports = Ed;
  var Xe2 = Ed.prototype;
  Xe2.space = null;
  Xe2.attribute = null;
  Xe2.property = null;
  Xe2.boolean = false;
  Xe2.booleanish = false;
  Xe2.overloadedBoolean = false;
  Xe2.number = false;
  Xe2.commaSeparated = false;
  Xe2.spaceSeparated = false;
  Xe2.commaOrSpaceSeparated = false;
  Xe2.mustUseProperty = false;
  Xe2.defined = false;
  function Ed(e6, t) {
    this.property = e6, this.attribute = t;
  }
  a2(Ed, "Info");
});
var ei = M2((Gt2) => {
  "use strict";
  var j42 = 0;
  Gt2.boolean = wr2();
  Gt2.booleanish = wr2();
  Gt2.overloadedBoolean = wr2();
  Gt2.number = wr2();
  Gt2.spaceSeparated = wr2();
  Gt2.commaSeparated = wr2();
  Gt2.commaOrSpaceSeparated = wr2();
  function wr2() {
    return Math.pow(2, ++j42);
  }
  a2(wr2, "increment");
});
var Bs = M2((N$, Td) => {
  "use strict";
  var Fd = Ts(), Rd = ei();
  Td.exports = Ls;
  Ls.prototype = new Fd();
  Ls.prototype.defined = true;
  var kd = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], V4 = kd.length;
  function Ls(e6, t, r, n) {
    var o = -1, i;
    for (Ad(this, "space", n), Fd.call(this, e6, t); ++o < V4; )
      i = kd[o], Ad(this, i, (r & Rd[i]) === Rd[i]);
  }
  a2(Ls, "DefinedInfo");
  function Ad(e6, t, r) {
    r && (e6[t] = r);
  }
  a2(Ad, "mark");
});
var un2 = M2((V$, Bd) => {
  "use strict";
  var Ld = Qa2(), q4 = ks(), W4 = Bs();
  Bd.exports = U4;
  function U4(e6) {
    var t = e6.space, r = e6.mustUseProperty || [], n = e6.attributes || {}, o = e6.properties, i = e6.transform, l = {}, u = {}, c, d;
    for (c in o)
      d = new W4(
        c,
        i(n, c),
        o[c],
        t
      ), r.indexOf(c) !== -1 && (d.mustUseProperty = true), l[c] = d, u[Ld(c)] = c, u[Ld(d.attribute)] = c;
    return new q4(l, u, t);
  }
  a2(U4, "create");
});
var Md = M2((W$, Id) => {
  "use strict";
  var G4 = un2();
  Id.exports = G4({
    space: "xlink",
    transform: X4,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function X4(e6, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
  a2(X4, "xlinkTransform");
});
var $d = M2((G$, _d) => {
  "use strict";
  var Y4 = un2();
  _d.exports = Y4({
    space: "xml",
    transform: K4,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function K4(e6, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
  a2(K4, "xmlTransform");
});
var Pd = M2((Y$, Hd) => {
  "use strict";
  Hd.exports = Z4;
  function Z4(e6, t) {
    return t in e6 ? e6[t] : t;
  }
  a2(Z4, "caseSensitiveTransform");
});
var Is = M2((Z$, zd) => {
  "use strict";
  var J4 = Pd();
  zd.exports = Q4;
  function Q4(e6, t) {
    return J4(e6, t.toLowerCase());
  }
  a2(Q4, "caseInsensitiveTransform");
});
var Nd = M2((Q$, Od) => {
  "use strict";
  var e7 = un2(), t7 = Is();
  Od.exports = e7({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: t7,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
});
var Vd = M2((eH, jd) => {
  "use strict";
  var Ms = ei(), r7 = un2(), $e2 = Ms.booleanish, Ye2 = Ms.number, yr2 = Ms.spaceSeparated;
  jd.exports = r7({
    transform: n7,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: $e2,
      ariaAutoComplete: null,
      ariaBusy: $e2,
      ariaChecked: $e2,
      ariaColCount: Ye2,
      ariaColIndex: Ye2,
      ariaColSpan: Ye2,
      ariaControls: yr2,
      ariaCurrent: null,
      ariaDescribedBy: yr2,
      ariaDetails: null,
      ariaDisabled: $e2,
      ariaDropEffect: yr2,
      ariaErrorMessage: null,
      ariaExpanded: $e2,
      ariaFlowTo: yr2,
      ariaGrabbed: $e2,
      ariaHasPopup: null,
      ariaHidden: $e2,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: yr2,
      ariaLevel: Ye2,
      ariaLive: null,
      ariaModal: $e2,
      ariaMultiLine: $e2,
      ariaMultiSelectable: $e2,
      ariaOrientation: null,
      ariaOwns: yr2,
      ariaPlaceholder: null,
      ariaPosInSet: Ye2,
      ariaPressed: $e2,
      ariaReadOnly: $e2,
      ariaRelevant: null,
      ariaRequired: $e2,
      ariaRoleDescription: yr2,
      ariaRowCount: Ye2,
      ariaRowIndex: Ye2,
      ariaRowSpan: Ye2,
      ariaSelected: $e2,
      ariaSetSize: Ye2,
      ariaSort: null,
      ariaValueMax: Ye2,
      ariaValueMin: Ye2,
      ariaValueNow: Ye2,
      ariaValueText: null,
      role: null
    }
  });
  function n7(e6, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
  a2(n7, "ariaTransform");
});
var Wd = M2((rH, qd) => {
  "use strict";
  var cn2 = ei(), o7 = un2(), a7 = Is(), O4 = cn2.boolean, i7 = cn2.overloadedBoolean, Jo = cn2.booleanish, K4 = cn2.number, ke2 = cn2.spaceSeparated, ti = cn2.commaSeparated;
  qd.exports = o7({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: a7,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: ti,
      acceptCharset: ke2,
      accessKey: ke2,
      action: null,
      allow: null,
      allowFullScreen: O4,
      allowPaymentRequest: O4,
      allowUserMedia: O4,
      alt: null,
      as: null,
      async: O4,
      autoCapitalize: null,
      autoComplete: ke2,
      autoFocus: O4,
      autoPlay: O4,
      capture: O4,
      charSet: null,
      checked: O4,
      cite: null,
      className: ke2,
      cols: K4,
      colSpan: null,
      content: null,
      contentEditable: Jo,
      controls: O4,
      controlsList: ke2,
      coords: K4 | ti,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: O4,
      defer: O4,
      dir: null,
      dirName: null,
      disabled: O4,
      download: i7,
      draggable: Jo,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: O4,
      formTarget: null,
      headers: ke2,
      height: K4,
      hidden: O4,
      high: K4,
      href: null,
      hrefLang: null,
      htmlFor: ke2,
      httpEquiv: ke2,
      id: null,
      imageSizes: null,
      imageSrcSet: ti,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: O4,
      itemId: null,
      itemProp: ke2,
      itemRef: ke2,
      itemScope: O4,
      itemType: ke2,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: O4,
      low: K4,
      manifest: null,
      max: null,
      maxLength: K4,
      media: null,
      method: null,
      min: null,
      minLength: K4,
      multiple: O4,
      muted: O4,
      name: null,
      nonce: null,
      noModule: O4,
      noValidate: O4,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: O4,
      optimum: K4,
      pattern: null,
      ping: ke2,
      placeholder: null,
      playsInline: O4,
      poster: null,
      preload: null,
      readOnly: O4,
      referrerPolicy: null,
      rel: ke2,
      required: O4,
      reversed: O4,
      rows: K4,
      rowSpan: K4,
      sandbox: ke2,
      scope: null,
      scoped: O4,
      seamless: O4,
      selected: O4,
      shape: null,
      size: K4,
      sizes: null,
      slot: null,
      span: K4,
      spellCheck: Jo,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: ti,
      start: K4,
      step: null,
      style: null,
      tabIndex: K4,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: O4,
      useMap: null,
      value: Jo,
      width: K4,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: ke2,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: K4,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: K4,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: O4,
      // Lists. Use CSS to reduce space between items instead
      declare: O4,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: K4,
      // `<img>` and `<object>`
      leftMargin: K4,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: K4,
      // `<body>`
      marginWidth: K4,
      // `<body>`
      noResize: O4,
      // `<frame>`
      noHref: O4,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: O4,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: O4,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: K4,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: Jo,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: K4,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: K4,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: O4,
      disableRemotePlayback: O4,
      prefix: null,
      property: null,
      results: K4,
      security: null,
      unselectable: null
    }
  });
});
var Gd = M2((nH, Ud) => {
  "use strict";
  var l7 = xd(), s7 = Md(), u7 = $d(), c7 = Nd(), p7 = Vd(), d7 = Wd();
  Ud.exports = l7([u7, s7, c7, p7, d7]);
});
var Kd = M2((oH, Yd) => {
  "use strict";
  var f7 = Qa2(), h7 = Bs(), m7 = Ts(), _s = "data";
  Yd.exports = b7;
  var g7 = /^data[-\w.:]+$/i, Xd = /-[a-z]/g, v7 = /[A-Z]/g;
  function b7(e6, t) {
    var r = f7(t), n = t, o = m7;
    return r in e6.normal ? e6.property[e6.normal[r]] : (r.length > 4 && r.slice(0, 4) === _s && g7.test(t) && (t.charAt(4) === "-" ? n = w7(t) : t = y7(t), o = h7), new o(n, t));
  }
  a2(b7, "find");
  function w7(e6) {
    var t = e6.slice(5).replace(Xd, x7);
    return _s + t.charAt(0).toUpperCase() + t.slice(1);
  }
  a2(w7, "datasetToProperty");
  function y7(e6) {
    var t = e6.slice(4);
    return Xd.test(t) ? e6 : (t = t.replace(v7, D7), t.charAt(0) !== "-" && (t = "-" + t), _s + t);
  }
  a2(y7, "datasetToAttribute");
  function D7(e6) {
    return "-" + e6.toLowerCase();
  }
  a2(D7, "kebab");
  function x7(e6) {
    return e6.charAt(1).toUpperCase();
  }
  a2(x7, "camelcase");
});
var Qd = M2((iH, Jd) => {
  "use strict";
  Jd.exports = C7;
  var Zd = /[#.]/g;
  function C7(e6, t) {
    for (var r = e6 || "", n = t || "div", o = {}, i = 0, l, u, c; i < r.length; )
      Zd.lastIndex = i, c = Zd.exec(r), l = r.slice(i, c ? c.index : r.length), l && (u ? u === "#" ? o.id = l : o.className ? o.className.push(
        l
      ) : o.className = [l] : n = l, i += l.length), c && (u = c[0], i++);
    return { type: "element", tagName: n, properties: o, children: [] };
  }
  a2(C7, "parse");
});
var tf = M2(($s) => {
  "use strict";
  $s.parse = R7;
  $s.stringify = A7;
  var ef = "", E7 = " ", S7 = /[ \t\n\r\f]+/g;
  function R7(e6) {
    var t = String(e6 || ef).trim();
    return t === ef ? [] : t.split(S7);
  }
  a2(R7, "parse");
  function A7(e6) {
    return e6.join(E7).trim();
  }
  a2(A7, "stringify");
});
var nf = M2((Ps) => {
  "use strict";
  Ps.parse = F7;
  Ps.stringify = k7;
  var Hs = ",", rf = " ", Qo = "";
  function F7(e6) {
    for (var t = [], r = String(e6 || Qo), n = r.indexOf(Hs), o = 0, i = false, l; !i; )
      n === -1 && (n = r.length, i = true), l = r.slice(o, n).trim(), (l || !i) && t.push(l), o = n + 1, n = r.indexOf(Hs, o);
    return t;
  }
  a2(F7, "parse");
  function k7(e6, t) {
    var r = t || {}, n = r.padLeft === false ? Qo : rf, o = r.padRight ? rf : Qo;
    return e6[e6.length - 1] === Qo && (e6 = e6.concat(Qo)), e6.join(o + Hs + n).trim();
  }
  a2(k7, "stringify");
});
var pf = M2((dH, cf) => {
  "use strict";
  var T7 = Kd(), of = Qa2(), L7 = Qd(), af = tf().parse, lf = nf().parse;
  cf.exports = I7;
  var B7 = {}.hasOwnProperty;
  function I7(e6, t, r) {
    var n = r ? P7(r) : null;
    return o;
    function o(l, u) {
      var c = L7(l, t), d = Array.prototype.slice.call(arguments, 2), p = c.tagName.toLowerCase(), h;
      if (c.tagName = n && B7.call(n, p) ? n[p] : p, u && M7(u, c) && (d.unshift(u), u = null), u)
        for (h in u)
          i(c.properties, h, u[h]);
      return uf(c.children, d), c.tagName === "template" && (c.content = { type: "root", children: c.children }, c.children = []), c;
    }
    function i(l, u, c) {
      var d, p, h;
      c == null || c !== c || (d = T7(e6, u), p = d.property, h = c, typeof h == "string" && (d.spaceSeparated ? h = af(h) : d.commaSeparated ? h = lf(h) : d.commaOrSpaceSeparated && (h = af(lf(h).join(" ")))), p === "style" && typeof c != "string" && (h = H7(h)), p === "className" && l.className && (h = l.className.concat(h)), l[p] = $7(d, p, h));
    }
  }
  a2(I7, "factory");
  function M7(e6, t) {
    return typeof e6 == "string" || "length" in e6 || _7(t.tagName, e6);
  }
  a2(M7, "isChildren");
  function _7(e6, t) {
    var r = t.type;
    return e6 === "input" || !r || typeof r != "string" ? false : typeof t.children == "object" && "length" in t.children ? true : (r = r.toLowerCase(), e6 === "button" ? r !== "menu" && r !== "submit" && r !== "reset" && r !== "button" : "value" in t);
  }
  a2(_7, "isNode");
  function uf(e6, t) {
    var r, n;
    if (typeof t == "string" || typeof t == "number") {
      e6.push({ type: "text", value: String(t) });
      return;
    }
    if (typeof t == "object" && "length" in t) {
      for (r = -1, n = t.length; ++r < n; )
        uf(e6, t[r]);
      return;
    }
    if (typeof t != "object" || !("type" in t))
      throw new Error("Expected node, nodes, or string, got `" + t + "`");
    e6.push(t);
  }
  a2(uf, "addChild");
  function $7(e6, t, r) {
    var n, o, i;
    if (typeof r != "object" || !("length" in r))
      return sf(e6, t, r);
    for (o = r.length, n = -1, i = []; ++n < o; )
      i[n] = sf(e6, t, r[n]);
    return i;
  }
  a2($7, "parsePrimitives");
  function sf(e6, t, r) {
    var n = r;
    return e6.number || e6.positiveNumber ? !isNaN(n) && n !== "" && (n = Number(n)) : (e6.boolean || e6.overloadedBoolean) && typeof n == "string" && (n === "" || of(r) === of(t)) && (n = true), n;
  }
  a2(sf, "parsePrimitive");
  function H7(e6) {
    var t = [], r;
    for (r in e6)
      t.push([r, e6[r]].join(": "));
    return t.join("; ");
  }
  a2(H7, "style");
  function P7(e6) {
    for (var t = e6.length, r = -1, n = {}, o; ++r < t; )
      o = e6[r], n[o.toLowerCase()] = o;
    return n;
  }
  a2(P7, "createAdjustMap");
});
var hf = M2((hH, ff) => {
  "use strict";
  var z7 = Gd(), O7 = pf(), df = O7(z7, "div");
  df.displayName = "html";
  ff.exports = df;
});
var gf = M2((mH, mf) => {
  "use strict";
  mf.exports = hf();
});
var vf = M2((gH, N7) => {
  N7.exports = {
    AElig: "Æ",
    AMP: "&",
    Aacute: "Á",
    Acirc: "Â",
    Agrave: "À",
    Aring: "Å",
    Atilde: "Ã",
    Auml: "Ä",
    COPY: "©",
    Ccedil: "Ç",
    ETH: "Ð",
    Eacute: "É",
    Ecirc: "Ê",
    Egrave: "È",
    Euml: "Ë",
    GT: ">",
    Iacute: "Í",
    Icirc: "Î",
    Igrave: "Ì",
    Iuml: "Ï",
    LT: "<",
    Ntilde: "Ñ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ograve: "Ò",
    Oslash: "Ø",
    Otilde: "Õ",
    Ouml: "Ö",
    QUOT: '"',
    REG: "®",
    THORN: "Þ",
    Uacute: "Ú",
    Ucirc: "Û",
    Ugrave: "Ù",
    Uuml: "Ü",
    Yacute: "Ý",
    aacute: "á",
    acirc: "â",
    acute: "´",
    aelig: "æ",
    agrave: "à",
    amp: "&",
    aring: "å",
    atilde: "ã",
    auml: "ä",
    brvbar: "¦",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    eacute: "é",
    ecirc: "ê",
    egrave: "è",
    eth: "ð",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    iacute: "í",
    icirc: "î",
    iexcl: "¡",
    igrave: "ì",
    iquest: "¿",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    ntilde: "ñ",
    oacute: "ó",
    ocirc: "ô",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    oslash: "ø",
    otilde: "õ",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    raquo: "»",
    reg: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    thorn: "þ",
    times: "×",
    uacute: "ú",
    ucirc: "û",
    ugrave: "ù",
    uml: "¨",
    uuml: "ü",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
});
var bf = M2((vH, j7) => {
  j7.exports = {
    "0": "�",
    "128": "€",
    "130": "‚",
    "131": "ƒ",
    "132": "„",
    "133": "…",
    "134": "†",
    "135": "‡",
    "136": "ˆ",
    "137": "‰",
    "138": "Š",
    "139": "‹",
    "140": "Œ",
    "142": "Ž",
    "145": "‘",
    "146": "’",
    "147": "“",
    "148": "”",
    "149": "•",
    "150": "–",
    "151": "—",
    "152": "˜",
    "153": "™",
    "154": "š",
    "155": "›",
    "156": "œ",
    "158": "ž",
    "159": "Ÿ"
  };
});
var zs = M2((bH, wf) => {
  "use strict";
  wf.exports = V7;
  function V7(e6) {
    var t = typeof e6 == "string" ? e6.charCodeAt(0) : e6;
    return t >= 48 && t <= 57;
  }
  a2(V7, "decimal");
});
var Df = M2((yH, yf) => {
  "use strict";
  yf.exports = q7;
  function q7(e6) {
    var t = typeof e6 == "string" ? e6.charCodeAt(0) : e6;
    return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
  }
  a2(q7, "hexadecimal");
});
var Cf = M2((xH, xf) => {
  "use strict";
  xf.exports = W7;
  function W7(e6) {
    var t = typeof e6 == "string" ? e6.charCodeAt(0) : e6;
    return t >= 97 && t <= 122 || t >= 65 && t <= 90;
  }
  a2(W7, "alphabetical");
});
var Sf = M2((EH, Ef) => {
  "use strict";
  var U7 = Cf(), G7 = zs();
  Ef.exports = X7;
  function X7(e6) {
    return U7(e6) || G7(e6);
  }
  a2(X7, "alphanumerical");
});
var Af = M2((RH, Rf) => {
  "use strict";
  var ri, Y7 = 59;
  Rf.exports = K7;
  function K7(e6) {
    var t = "&" + e6 + ";", r;
    return ri = ri || document.createElement("i"), ri.innerHTML = t, r = ri.textContent, r.charCodeAt(r.length - 1) === Y7 && e6 !== "semi" || r === t ? false : r;
  }
  a2(K7, "decodeEntity");
});
var Nf = M2((FH, Of) => {
  "use strict";
  var Ff = vf(), kf = bf(), Z7 = zs(), J7 = Df(), If = Sf(), Q7 = Af();
  Of.exports = d6;
  var e6 = {}.hasOwnProperty, pn2 = String.fromCharCode, t6 = Function.prototype, Tf = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: false,
    nonTerminated: true
  }, r6 = 9, Lf = 10, n6 = 12, o6 = 32, Bf = 38, a6 = 59, i6 = 60, l6 = 61, s6 = 35, u6 = 88, c6 = 120, p6 = 65533, dn2 = "named", Ns = "hexadecimal", js = "decimal", Vs = {};
  Vs[Ns] = 16;
  Vs[js] = 10;
  var ni = {};
  ni[dn2] = If;
  ni[js] = Z7;
  ni[Ns] = J7;
  var Mf = 1, _f = 2, $f = 3, Hf = 4, Pf = 5, Os = 6, zf = 7, Xt2 = {};
  Xt2[Mf] = "Named character references must be terminated by a semicolon";
  Xt2[_f] = "Numeric character references must be terminated by a semicolon";
  Xt2[$f] = "Named character references cannot be empty";
  Xt2[Hf] = "Numeric character references cannot be empty";
  Xt2[Pf] = "Named character references must be known";
  Xt2[Os] = "Numeric character references cannot be disallowed";
  Xt2[zf] = "Numeric character references cannot be outside the permissible Unicode range";
  function d6(e7, t) {
    var r = {}, n, o;
    t || (t = {});
    for (o in Tf)
      n = t[o], r[o] = n ?? Tf[o];
    return (r.position.indent || r.position.start) && (r.indent = r.position.indent || [], r.position = r.position.start), f6(e7, r);
  }
  a2(d6, "parseEntities");
  function f6(e7, t) {
    var r = t.additional, n = t.nonTerminated, o = t.text, i = t.reference, l = t.warning, u = t.textContext, c = t.referenceContext, d = t.warningContext, p = t.position, h = t.indent || [], f = e7.length, g6 = 0, w4 = -1, m = p.column || 1, v = p.line || 1, y = "", b = [], D4, x, C, E, S, R, F6, k6, T, _7, $7, q4, L6, B6, H4, W, N, G, z4;
    for (typeof r == "string" && (r = r.charCodeAt(0)), W = Y4(), k6 = l ? Be2 : t6, g6--, f++; ++g6 < f; )
      if (S === Lf && (m = h[w4] || 1), S = e7.charCodeAt(g6), S === Bf) {
        if (F6 = e7.charCodeAt(g6 + 1), F6 === r6 || F6 === Lf || F6 === n6 || F6 === o6 || F6 === Bf || F6 === i6 || F6 !== F6 || r && F6 === r) {
          y += pn2(S), m++;
          continue;
        }
        for (L6 = g6 + 1, q4 = L6, z4 = L6, F6 === s6 ? (z4 = ++q4, F6 = e7.charCodeAt(z4), F6 === u6 || F6 === c6 ? (B6 = Ns, z4 = ++q4) : B6 = js) : B6 = dn2, D4 = "", $7 = "", E = "", H4 = ni[B6], z4--; ++z4 < f && (F6 = e7.charCodeAt(z4), !!H4(F6)); )
          E += pn2(F6), B6 === dn2 && e6.call(Ff, E) && (D4 = E, $7 = Ff[E]);
        C = e7.charCodeAt(z4) === a6, C && (z4++, x = B6 === dn2 ? Q7(E) : false, x && (D4 = E, $7 = x)), G = 1 + z4 - L6, !C && !n || (E ? B6 === dn2 ? (C && !$7 ? k6(Pf, 1) : (D4 !== E && (z4 = q4 + D4.length, G = 1 + z4 - q4, C = false), C || (T = D4 ? Mf : $f, t.attribute ? (F6 = e7.charCodeAt(z4), F6 === l6 ? (k6(T, G), $7 = null) : If(F6) ? $7 = null : k6(T, G)) : k6(T, G))), R = $7) : (C || k6(_f, G), R = parseInt(E, Vs[B6]), h6(R) ? (k6(zf, G), R = pn2(p6)) : R in kf ? (k6(Os, G), R = kf[R]) : (_7 = "", m6(R) && k6(Os, G), R > 65535 && (R -= 65536, _7 += pn2(R >>> 10 | 55296), R = 56320 | R & 1023), R = _7 + pn2(R))) : B6 !== dn2 && k6(Hf, G)), R ? (ge2(), W = Y4(), g6 = z4 - 1, m += z4 - L6 + 1, b.push(R), N = Y4(), N.offset++, i && i.call(
          c,
          R,
          { start: W, end: N },
          e7.slice(L6 - 1, z4)
        ), W = N) : (E = e7.slice(L6 - 1, z4), y += E, m += E.length, g6 = z4 - 1);
      } else
        S === 10 && (v++, w4++, m = 0), S === S ? (y += pn2(S), m++) : ge2();
    return b.join("");
    function Y4() {
      return {
        line: v,
        column: m,
        offset: g6 + (p.offset || 0)
      };
    }
    function Be2(ce2, Se2) {
      var Ie2 = Y4();
      Ie2.column += Se2, Ie2.offset += Se2, l.call(d, Xt2[ce2], Ie2, ce2);
    }
    function ge2() {
      y && (b.push(y), o && o.call(u, y, { start: W, end: Y4() }), y = "");
    }
  }
  a2(f6, "parse");
  function h6(e7) {
    return e7 >= 55296 && e7 <= 57343 || e7 > 1114111;
  }
  a2(h6, "prohibited");
  function m6(e7) {
    return e7 >= 1 && e7 <= 8 || e7 === 11 || e7 >= 13 && e7 <= 31 || e7 >= 127 && e7 <= 159 || e7 >= 64976 && e7 <= 65007 || (e7 & 65535) === 65535 || (e7 & 65535) === 65534;
  }
  a2(m6, "disallowed");
});
var Vf = M2((TH, oi) => {
  var g6 = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var jf = function(e6) {
    var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r = 0, n = {}, o = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: e6.Prism && e6.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: e6.Prism && e6.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: a2(function m(v) {
          return v instanceof i ? new i(v.type, m(v.content), v.alias) : Array.isArray(v) ? v.map(m) : v.replace(/&/g, "&amp;").replace(
            /</g,
            "&lt;"
          ).replace(/\u00a0/g, " ");
        }, "encode"),
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: a2(function(m) {
          return Object.prototype.toString.call(m).slice(8, -1);
        }, "type"),
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: a2(function(m) {
          return m.__id || Object.defineProperty(m, "__id", { value: ++r }), m.__id;
        }, "objId"),
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: a2(function m(v, y) {
          y = y || {};
          var b, D4;
          switch (o.util.type(v)) {
            case "Object":
              if (D4 = o.util.objId(v), y[D4])
                return y[D4];
              b = /** @type {Record<string, any>} */
              {}, y[D4] = b;
              for (var x in v)
                v.hasOwnProperty(x) && (b[x] = m(v[x], y));
              return (
                /** @type {any} */
                b
              );
            case "Array":
              return D4 = o.util.objId(v), y[D4] ? y[D4] : (b = [], y[D4] = b, /** @type {Array} */
              /** @type {any} */
              v.forEach(function(C, E) {
                b[E] = m(C, y);
              }), /** @type {any} */
              b);
            default:
              return v;
          }
        }, "deepClone"),
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: a2(function(m) {
          for (; m; ) {
            var v = t.exec(m.className);
            if (v)
              return v[1].toLowerCase();
            m = m.parentElement;
          }
          return "none";
        }, "getLanguage"),
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: a2(function(m, v) {
          m.className = m.className.replace(RegExp(t, "gi"), ""), m.classList.add("language-" + v);
        }, "setLanguage"),
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: a2(function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (b) {
            var m = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(b.stack) || [])[1];
            if (m) {
              var v = document.getElementsByTagName("script");
              for (var y in v)
                if (v[y].src == m)
                  return v[y];
            }
            return null;
          }
        }, "currentScript"),
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: a2(function(m, v, y) {
          for (var b = "no-" + v; m; ) {
            var D4 = m.classList;
            if (D4.contains(v))
              return true;
            if (D4.contains(b))
              return false;
            m = m.parentElement;
          }
          return !!y;
        }, "isActive")
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: n,
        plaintext: n,
        text: n,
        txt: n,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: a2(function(m, v) {
          var y = o.util.clone(o.languages[m]);
          for (var b in v)
            y[b] = v[b];
          return y;
        }, "extend"),
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: a2(function(m, v, y, b) {
          b = b || /** @type {any} */
          o.languages;
          var D4 = b[m], x = {};
          for (var C in D4)
            if (D4.hasOwnProperty(C)) {
              if (C == v)
                for (var E in y)
                  y.hasOwnProperty(E) && (x[E] = y[E]);
              y.hasOwnProperty(C) || (x[C] = D4[C]);
            }
          var S = b[m];
          return b[m] = x, o.languages.DFS(o.languages, function(R, F6) {
            F6 === S && R != m && (this[R] = x);
          }), x;
        }, "insertBefore"),
        // Traverse a language definition with Depth First Search
        DFS: a2(function m(v, y, b, D4) {
          D4 = D4 || {};
          var x = o.util.objId;
          for (var C in v)
            if (v.hasOwnProperty(C)) {
              y.call(v, C, v[C], b || C);
              var E = v[C], S = o.util.type(E);
              S === "Object" && !D4[x(E)] ? (D4[x(E)] = true, m(E, y, null, D4)) : S === "Array" && !D4[x(E)] && (D4[x(E)] = true, m(E, y, C, D4));
            }
        }, "DFS")
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: a2(function(m, v) {
        o.highlightAllUnder(document, m, v);
      }, "highlightAll"),
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: a2(function(m, v, y) {
        var b = {
          callback: y,
          container: m,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        o.hooks.run("before-highlightall", b), b.elements = Array.prototype.slice.apply(b.container.querySelectorAll(b.selector)), o.hooks.run(
          "before-all-elements-highlight",
          b
        );
        for (var D4 = 0, x; x = b.elements[D4++]; )
          o.highlightElement(x, v === true, b.callback);
      }, "highlightAllUnder"),
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: a2(function(m, v, y) {
        var b = o.util.getLanguage(m), D4 = o.languages[b];
        o.util.setLanguage(m, b);
        var x = m.parentElement;
        x && x.nodeName.toLowerCase() === "pre" && o.util.setLanguage(x, b);
        var C = m.textContent, E = {
          element: m,
          language: b,
          grammar: D4,
          code: C
        };
        function S(F6) {
          E.highlightedCode = F6, o.hooks.run("before-insert", E), E.element.innerHTML = E.highlightedCode, o.hooks.run("after-highlight", E), o.hooks.run("complete", E), y && y.call(E.element);
        }
        if (a2(S, "insertHighlightedCode"), o.hooks.run("before-sanity-check", E), x = E.element.parentElement, x && x.nodeName.toLowerCase() === "pre" && !x.hasAttribute("tabindex") && x.setAttribute("tabindex", "0"), !E.code) {
          o.hooks.run("complete", E), y && y.call(E.element);
          return;
        }
        if (o.hooks.run("before-highlight", E), !E.grammar) {
          S(o.util.encode(E.code));
          return;
        }
        if (v && e6.Worker) {
          var R = new Worker(o.filename);
          R.onmessage = function(F6) {
            S(F6.data);
          }, R.postMessage(JSON.stringify({
            language: E.language,
            code: E.code,
            immediateClose: true
          }));
        } else
          S(o.highlight(E.code, E.grammar, E.language));
      }, "highlightElement"),
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: a2(function(m, v, y) {
        var b = {
          code: m,
          grammar: v,
          language: y
        };
        if (o.hooks.run("before-tokenize", b), !b.grammar)
          throw new Error('The language "' + b.language + '" has no grammar.');
        return b.tokens = o.tokenize(b.code, b.grammar), o.hooks.run("after-tokenize", b), i.stringify(o.util.encode(b.tokens), b.language);
      }, "highlight"),
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: a2(function(m, v) {
        var y = v.rest;
        if (y) {
          for (var b in y)
            v[b] = y[b];
          delete v.rest;
        }
        var D4 = new c();
        return d(D4, D4.head, m), u(m, D4, v, D4.head, 0), h(D4);
      }, "tokenize"),
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: a2(function(m, v) {
          var y = o.hooks.all;
          y[m] = y[m] || [], y[m].push(v);
        }, "add"),
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: a2(function(m, v) {
          var y = o.hooks.all[m];
          if (!(!y || !y.length))
            for (var b = 0, D4; D4 = y[b++]; )
              D4(v);
        }, "run")
      },
      Token: i
    };
    e6.Prism = o;
    function i(m, v, y, b) {
      this.type = m, this.content = v, this.alias = y, this.length = (b || "").length | 0;
    }
    a2(i, "Token"), i.stringify = a2(function m(v, y) {
      if (typeof v == "string")
        return v;
      if (Array.isArray(v)) {
        var b = "";
        return v.forEach(function(S) {
          b += m(S, y);
        }), b;
      }
      var D4 = {
        type: v.type,
        content: m(v.content, y),
        tag: "span",
        classes: ["token", v.type],
        attributes: {},
        language: y
      }, x = v.alias;
      x && (Array.isArray(x) ? Array.prototype.push.apply(D4.classes, x) : D4.classes.push(x)), o.hooks.run("wrap", D4);
      var C = "";
      for (var E in D4.attributes)
        C += " " + E + '="' + (D4.attributes[E] || "").replace(/"/g, "&quot;") + '"';
      return "<" + D4.tag + ' class="' + D4.classes.join(" ") + '"' + C + ">" + D4.content + "</" + D4.tag + ">";
    }, "stringify");
    function l(m, v, y, b) {
      m.lastIndex = v;
      var D4 = m.exec(y);
      if (D4 && b && D4[1]) {
        var x = D4[1].length;
        D4.index += x, D4[0] = D4[0].slice(x);
      }
      return D4;
    }
    a2(l, "matchPattern");
    function u(m, v, y, b, D4, x) {
      for (var C in y)
        if (!(!y.hasOwnProperty(C) || !y[C])) {
          var E = y[C];
          E = Array.isArray(E) ? E : [E];
          for (var S = 0; S < E.length; ++S) {
            if (x && x.cause == C + "," + S)
              return;
            var R = E[S], F6 = R.inside, k6 = !!R.lookbehind, T = !!R.greedy, _7 = R.alias;
            if (T && !R.pattern.global) {
              var $7 = R.pattern.toString().match(/[imsuy]*$/)[0];
              R.pattern = RegExp(R.pattern.source, $7 + "g");
            }
            for (var q4 = R.pattern || R, L6 = b.next, B6 = D4; L6 !== v.tail && !(x && B6 >= x.reach); B6 += L6.value.length, L6 = L6.next) {
              var H4 = L6.value;
              if (v.length > m.length)
                return;
              if (!(H4 instanceof i)) {
                var W = 1, N;
                if (T) {
                  if (N = l(q4, B6, m, k6), !N || N.index >= m.length)
                    break;
                  var Be2 = N.index, G = N.index + N[0].length, z4 = B6;
                  for (z4 += L6.value.length; Be2 >= z4; )
                    L6 = L6.next, z4 += L6.value.length;
                  if (z4 -= L6.value.length, B6 = z4, L6.value instanceof i)
                    continue;
                  for (var Y4 = L6; Y4 !== v.tail && (z4 < G || typeof Y4.value == "string"); Y4 = Y4.next)
                    W++, z4 += Y4.value.length;
                  W--, H4 = m.slice(B6, z4), N.index -= B6;
                } else if (N = l(q4, 0, H4, k6), !N)
                  continue;
                var Be2 = N.index, ge2 = N[0], ce2 = H4.slice(0, Be2), Se2 = H4.slice(Be2 + ge2.length), Ie2 = B6 + H4.length;
                x && Ie2 > x.reach && (x.reach = Ie2);
                var Me2 = L6.prev;
                ce2 && (Me2 = d(v, Me2, ce2), B6 += ce2.length), p(v, Me2, W);
                var qo = new i(C, F6 ? o.tokenize(ge2, F6) : ge2, _7, ge2);
                if (L6 = d(v, Me2, qo), Se2 && d(v, L6, Se2), W > 1) {
                  var Wo = {
                    cause: C + "," + S,
                    reach: Ie2
                  };
                  u(m, v, y, L6.prev, B6, Wo), x && Wo.reach > x.reach && (x.reach = Wo.reach);
                }
              }
            }
          }
        }
    }
    a2(u, "matchGrammar");
    function c() {
      var m = { value: null, prev: null, next: null }, v = { value: null, prev: m, next: null };
      m.next = v, this.head = m, this.tail = v, this.length = 0;
    }
    a2(c, "LinkedList");
    function d(m, v, y) {
      var b = v.next, D4 = { value: y, prev: v, next: b };
      return v.next = D4, b.prev = D4, m.length++, D4;
    }
    a2(d, "addAfter");
    function p(m, v, y) {
      for (var b = v.next, D4 = 0; D4 < y && b !== m.tail; D4++)
        b = b.next;
      v.next = b, b.prev = v, m.length -= D4;
    }
    a2(p, "removeRange");
    function h(m) {
      for (var v = [], y = m.head.next; y !== m.tail; )
        v.push(y.value), y = y.next;
      return v;
    }
    if (a2(h, "toArray"), !e6.document)
      return e6.addEventListener && (o.disableWorkerMessageHandler || e6.addEventListener("message", function(m) {
        var v = JSON.parse(m.data), y = v.language, b = v.code, D4 = v.immediateClose;
        e6.postMessage(o.highlight(b, o.languages[y], y)), D4 && e6.close();
      }, false)), o;
    var f = o.util.currentScript();
    f && (o.filename = f.src, f.hasAttribute("data-manual") && (o.manual = true));
    function g7() {
      o.manual || o.highlightAll();
    }
    if (a2(g7, "highlightAutomaticallyCallback"), !o.manual) {
      var w4 = document.readyState;
      w4 === "loading" || w4 === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", g7) : window.requestAnimationFrame ? window.requestAnimationFrame(g7) : window.setTimeout(g7, 16);
    }
    return o;
  }(g6);
  typeof oi < "u" && oi.exports && (oi.exports = jf);
  typeof global < "u" && (global.Prism = jf);
});
var Wf = M2((BH, qf) => {
  "use strict";
  qf.exports = qs;
  qs.displayName = "clike";
  qs.aliases = [];
  function qs(e6) {
    e6.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
  }
  a2(qs, "clike");
});
var Gf = M2((MH, Uf) => {
  "use strict";
  Uf.exports = Ws;
  Ws.displayName = "javascript";
  Ws.aliases = ["js"];
  function Ws(e6) {
    e6.languages.javascript = e6.languages.extend("clike", {
      "class-name": [
        e6.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: true
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), e6.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e6.languages.insertBefore("javascript", "keyword", {
      regex: {
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: e6.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: e6.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: e6.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: e6.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: e6.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), e6.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: e6.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    }), e6.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    }), e6.languages.markup && (e6.languages.markup.tag.addInlined("script", "javascript"), e6.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), e6.languages.js = e6.languages.javascript;
  }
  a2(Ws, "javascript");
});
var Zf = M2(($H, Kf) => {
  "use strict";
  var ea2 = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, v6 = B6();
  ea2.Prism = { manual: true, disableWorkerMessageHandler: true };
  var b6 = gf(), w6 = Nf(), Xf = Vf(), y6 = gs(), D6 = ps(), x6 = Wf(), C6 = Gf();
  v6();
  var Us = {}.hasOwnProperty;
  function Yf() {
  }
  a2(Yf, "Refractor");
  Yf.prototype = Xf;
  var oe2 = new Yf();
  Kf.exports = oe2;
  oe2.highlight = S6;
  oe2.register = ta2;
  oe2.alias = E6;
  oe2.registered = R6;
  oe2.listLanguages = A6;
  ta2(y6);
  ta2(D6);
  ta2(x6);
  ta2(C6);
  oe2.util.encode = T6;
  oe2.Token.stringify = F6;
  function ta2(e6) {
    if (typeof e6 != "function" || !e6.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + e6 + "`");
    oe2.languages[e6.displayName] === void 0 && e6(oe2);
  }
  a2(ta2, "register");
  function E6(e6, t) {
    var r = oe2.languages, n = e6, o, i, l, u;
    t && (n = {}, n[e6] = t);
    for (o in n)
      for (i = n[o], i = typeof i == "string" ? [i] : i, l = i.length, u = -1; ++u < l; )
        r[i[u]] = r[o];
  }
  a2(E6, "alias");
  function S6(e6, t) {
    var r = Xf.highlight, n;
    if (typeof e6 != "string")
      throw new Error("Expected `string` for `value`, got `" + e6 + "`");
    if (oe2.util.type(t) === "Object")
      n = t, t = null;
    else {
      if (typeof t != "string")
        throw new Error("Expected `string` for `name`, got `" + t + "`");
      if (Us.call(oe2.languages, t))
        n = oe2.languages[t];
      else
        throw new Error("Unknown language: `" + t + "` is not registered");
    }
    return r.call(this, e6, n, t);
  }
  a2(S6, "highlight");
  function R6(e6) {
    if (typeof e6 != "string")
      throw new Error("Expected `string` for `language`, got `" + e6 + "`");
    return Us.call(oe2.languages, e6);
  }
  a2(R6, "registered");
  function A6() {
    var e6 = oe2.languages, t = [], r;
    for (r in e6)
      Us.call(e6, r) && typeof e6[r] == "object" && t.push(r);
    return t;
  }
  a2(A6, "listLanguages");
  function F6(e6, t, r) {
    var n;
    return typeof e6 == "string" ? { type: "text", value: e6 } : oe2.util.type(e6) === "Array" ? k6(e6, t) : (n = {
      type: e6.type,
      content: oe2.Token.stringify(e6.content, t, r),
      tag: "span",
      classes: ["token", e6.type],
      attributes: {},
      language: t,
      parent: r
    }, e6.alias && (n.classes = n.classes.concat(e6.alias)), oe2.hooks.run("wrap", n), b6(
      n.tag + "." + n.classes.join("."),
      L6(n.attributes),
      n.content
    ));
  }
  a2(F6, "stringify");
  function k6(e6, t) {
    for (var r = [], n = e6.length, o = -1, i; ++o < n; )
      i = e6[o], i !== "" && i !== null && i !== void 0 && r.push(i);
    for (o = -1, n = r.length; ++o < n; )
      i = r[o], r[o] = oe2.Token.stringify(i, t, r);
    return r;
  }
  a2(k6, "stringifyAll");
  function T6(e6) {
    return e6;
  }
  a2(T6, "encode");
  function L6(e6) {
    var t;
    for (t in e6)
      e6[t] = w6(e6[t]);
    return e6;
  }
  a2(L6, "attributes");
  function B6() {
    var e6 = "Prism" in ea2, t = e6 ? ea2.Prism : void 0;
    return r;
    function r() {
      e6 ? ea2.Prism = t : delete ea2.Prism, e6 = void 0, t = void 0;
    }
  }
  a2(B6, "capture");
});
var ai;
var Gs;
var ii;
var Jf = A(() => {
  md();
  ai = ve2(Zf()), Gs = As(ai.default, {});
  Gs.registerLanguage = function(e6, t) {
    return ai.default.register(t);
  };
  Gs.alias = function(e6, t) {
    return ai.default.alias(e6, t);
  };
  ii = Gs;
});
var Qf = A(() => {
  Rs();
});
var I6;
var r5;
var Xs;
var Ys = A(() => {
  "use strict";
  I6 = Tr.div(({ theme: e6 }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e6.background.content,
    zIndex: 1
  })), r5 = Tr.button(
    ({ theme: e6 }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e6.color.defaultText,
      background: e6.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e6.typography.fonts.base,
      fontWeight: e6.typography.weight.bold,
      borderTop: `1px solid ${e6.appBorderColor}`,
      borderLeft: `1px solid ${e6.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e6.appBorderColor}` },
      "& + *": {
        borderLeft: `1px solid ${e6.appBorderColor}`,
        borderRadius: 0
      },
      "&:focus": {
        boxShadow: `${e6.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none"
      }
    }),
    ({ disabled: e6 }) => e6 && {
      cursor: "not-allowed",
      opacity: 0.5
    }
  );
  r5.displayName = "ActionButton";
  Xs = a2(({ actionItems: e6, ...t }) => import_react5.default.createElement(I6, { ...t }, e6.map(({
    title: r,
    className: n,
    onClick: o,
    disabled: i
  }, l) => import_react5.default.createElement(r5, { key: l, className: n, onClick: o, disabled: !!i }, r))), "ActionBar");
});
function _6(e6, t) {
  typeof e6 == "function" ? e6(t) : e6 != null && (e6.current = t);
}
function Ks(...e6) {
  return (t) => e6.forEach(
    (r) => _6(r, t)
  );
}
function we2(...e6) {
  return (0, import_react6.useCallback)(Ks(...e6), e6);
}
var Dr = A(() => {
  a2(_6, "$6ed0406888f73fc4$var$setRef");
  a2(Ks, "$6ed0406888f73fc4$export$43e446d32b3d21af");
  a2(we2, "$6ed0406888f73fc4$export$c7b2cbe3552a0d05");
});
function P6(e6) {
  return (0, import_react7.isValidElement)(e6) && e6.type === H6;
}
function z6(e6, t) {
  let r = {
    ...t
  };
  for (let n in t) {
    let o = e6[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...u) => {
      i(...u), o(...u);
    } : o && (r[n] = o) : n === "style" ? r[n] = {
      ...o,
      ...i
    } : n === "className" && (r[n] = [
      o,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e6,
    ...r
  };
}
var xr2;
var Js;
var H6;
var si = A(() => {
  Ue2();
  Dr();
  xr2 = (0, import_react7.forwardRef)((e6, t) => {
    let { children: r, ...n } = e6, o = import_react7.Children.toArray(r), i = o.find(P6);
    if (i) {
      let l = i.props.children, u = o.map((c) => c === i ? import_react7.Children.count(l) > 1 ? import_react7.Children.only(null) : (0, import_react7.isValidElement)(l) ? l.props.children : null : c);
      return (0, import_react7.createElement)(Js, I2({}, n, {
        ref: t
      }), (0, import_react7.isValidElement)(l) ? (0, import_react7.cloneElement)(l, void 0, u) : null);
    }
    return (0, import_react7.createElement)(Js, I2({}, n, {
      ref: t
    }), r);
  });
  xr2.displayName = "Slot";
  Js = (0, import_react7.forwardRef)((e6, t) => {
    let { children: r, ...n } = e6;
    return (0, import_react7.isValidElement)(r) ? (0, import_react7.cloneElement)(r, {
      ...z6(n, r.props),
      ref: t ? Ks(t, r.ref) : r.ref
    }) : import_react7.Children.count(r) > 1 ? import_react7.Children.only(null) : null;
  });
  Js.displayName = "SlotClone";
  H6 = a2(({ children: e6 }) => (0, import_react7.createElement)(import_react7.Fragment, null, e6), "$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");
  a2(P6, "$5e63c961fc1ce211$var$isSlottable");
  a2(z6, "$5e63c961fc1ce211$var$mergeProps");
});
function a5(e6, t) {
  e6 && (0, import_react_dom.flushSync)(
    () => e6.dispatchEvent(t)
  );
}
var q6;
var pe2;
var fn = A(() => {
  Ue2();
  si();
  q6 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ], pe2 = q6.reduce((e6, t) => {
    let r = (0, import_react8.forwardRef)((n, o) => {
      let { asChild: i, ...l } = n, u = i ? xr2 : t;
      return (0, import_react8.useEffect)(() => {
        window[Symbol.for("radix-ui")] = true;
      }, []), (0, import_react8.createElement)(u, I2({}, l, {
        ref: o
      }));
    });
    return r.displayName = `Primitive.${t}`, {
      ...e6,
      [t]: r
    };
  }, {});
  a2(a5, "$8927f6f2acc4f386$export$6d1a0317bde7de7f");
});
var Cr2;
var ui = A(() => {
  Cr2 = (globalThis == null ? void 0 : globalThis.document) ? import_react9.useLayoutEffect : () => {
  };
});
function Q6(e6, t) {
  return (0, import_react10.useReducer)((r, n) => {
    let o = t[r][n];
    return o ?? r;
  }, e6);
}
function eb(e6) {
  let [t, r] = (0, import_react10.useState)(), n = (0, import_react10.useRef)({}), o = (0, import_react10.useRef)(e6), i = (0, import_react10.useRef)("none"), l = e6 ? "mounted" : "unmounted", [u, c] = Q6(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return (0, import_react10.useEffect)(() => {
    let d = ci(n.current);
    i.current = u === "mounted" ? d : "none";
  }, [
    u
  ]), Cr2(() => {
    let d = n.current, p = o.current;
    if (p !== e6) {
      let f = i.current, g6 = ci(d);
      e6 ? c("MOUNT") : g6 === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(p && f !== g6 ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e6;
    }
  }, [
    e6,
    c
  ]), Cr2(() => {
    if (t) {
      let d = a2((h) => {
        let g6 = ci(n.current).includes(h.animationName);
        h.target === t && g6 && (0, import_react_dom2.flushSync)(
          () => c("ANIMATION_END")
        );
      }, "handleAnimationEnd"), p = a2((h) => {
        h.target === t && (i.current = ci(n.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(u),
    ref: (0, import_react10.useCallback)((d) => {
      d && (n.current = getComputedStyle(d)), r(d);
    }, [])
  };
}
function ci(e6) {
  return (e6 == null ? void 0 : e6.animationName) || "none";
}
var vt2;
var eu = A(() => {
  Dr();
  ui();
  a2(Q6, "$fe963b355347cc68$export$3e6543de14f8614f");
  vt2 = a2((e6) => {
    let { present: t, children: r } = e6, n = eb(t), o = typeof r == "function" ? r({
      present: n.isPresent
    }) : import_react10.Children.only(r), i = we2(n.ref, o.ref);
    return typeof r == "function" || n.isPresent ? (0, import_react10.cloneElement)(o, {
      ref: i
    }) : null;
  }, "$921a889cee6df7e8$export$99c2b779aa4e8b8b");
  vt2.displayName = "Presence";
  a2(eb, "$921a889cee6df7e8$var$usePresence");
  a2(ci, "$921a889cee6df7e8$var$getAnimationName");
});
function s5(e6, t) {
  let r = (0, import_react11.createContext)(t);
  function n(i) {
    let { children: l, ...u } = i, c = (0, import_react11.useMemo)(
      () => u,
      Object.values(u)
    );
    return (0, import_react11.createElement)(r.Provider, {
      value: c
    }, l);
  }
  a2(n, "Provider");
  function o(i) {
    let l = (0, import_react11.useContext)(r);
    if (l) return l;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e6}\``);
  }
  return a2(o, "useContext"), n.displayName = e6 + "Provider", [
    n,
    o
  ];
}
function di(e6, t = []) {
  let r = [];
  function n(i, l) {
    let u = (0, import_react11.createContext)(l), c = r.length;
    r = [
      ...r,
      l
    ];
    function d(h) {
      let { scope: f, children: g6, ...w4 } = h, m = (f == null ? void 0 : f[e6][c]) || u, v = (0, import_react11.useMemo)(
        () => w4,
        Object.values(w4)
      );
      return (0, import_react11.createElement)(m.Provider, {
        value: v
      }, g6);
    }
    a2(d, "Provider");
    function p(h, f) {
      let g6 = (f == null ? void 0 : f[e6][c]) || u, w4 = (0, import_react11.useContext)(g6);
      if (w4) return w4;
      if (l !== void 0) return l;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return a2(p, "useContext"), d.displayName = i + "Provider", [
      d,
      p
    ];
  }
  a2(n, "$c512c27ab02ef895$export$fd42f52fd3ae1109");
  let o = a2(() => {
    let i = r.map((l) => (0, import_react11.createContext)(l));
    return a2(function(u) {
      let c = (u == null ? void 0 : u[e6]) || i;
      return (0, import_react11.useMemo)(
        () => ({
          [`__scope${e6}`]: {
            ...u,
            [e6]: c
          }
        }),
        [
          u,
          c
        ]
      );
    }, "useScope");
  }, "createScope");
  return o.scopeName = e6, [
    n,
    tb(o, ...t)
  ];
}
function tb(...e6) {
  let t = e6[0];
  if (e6.length === 1) return t;
  let r = a2(() => {
    let n = e6.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return a2(function(i) {
      let l = n.reduce((u, { useScope: c, scopeName: d }) => {
        let h = c(i)[`__scope${d}`];
        return {
          ...u,
          ...h
        };
      }, {});
      return (0, import_react11.useMemo)(
        () => ({
          [`__scope${t.scopeName}`]: l
        }),
        [
          l
        ]
      );
    }, "useComposedScopes");
  }, "createScope1");
  return r.scopeName = t.scopeName, r;
}
var ru = A(() => {
  a2(s5, "$c512c27ab02ef895$export$fd42f52fd3ae1109");
  a2(di, "$c512c27ab02ef895$export$50c7b4e9d9f19c1");
  a2(tb, "$c512c27ab02ef895$var$composeContextScopes");
});
function le2(e6) {
  let t = (0, import_react12.useRef)(e6);
  return (0, import_react12.useEffect)(() => {
    t.current = e6;
  }), (0, import_react12.useMemo)(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
var hn2 = A(() => {
  a2(le2, "$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");
});
function u5(e6) {
  let t = (0, import_react13.useContext)(lb);
  return e6 || t || "ltr";
}
var lb;
var c5 = A(() => {
  lb = (0, import_react13.createContext)(void 0);
  a2(u5, "$f631663db3294ace$export$b39126d51d94e6f3");
});
function p5(e6, [t, r]) {
  return Math.min(r, Math.max(t, e6));
}
var d5 = A(() => {
  a2(p5, "$ae6933e535247d3d$export$7d15b64cf5a3a4c4");
});
function de2(e6, t, { checkForDefaultPrevented: r = true } = {}) {
  return a2(function(o) {
    if (e6 == null ? void 0 : e6(o), r === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  }, "handleEvent");
}
var fi = A(() => {
  a2(de2, "$e42e1063c40fb3ef$export$b9ecd428b558ff10");
});
function pb(e6, t) {
  return (0, import_react14.useReducer)((r, n) => {
    let o = t[r][n];
    return o ?? r;
  }, e6);
}
function hi(e6) {
  return e6 ? parseInt(e6, 10) : 0;
}
function y5(e6, t) {
  let r = e6 / t;
  return isNaN(r) ? 0 : r;
}
function mi(e6) {
  let t = y5(e6.viewport, e6.content), r = e6.scrollbar.paddingStart + e6.scrollbar.paddingEnd, n = (e6.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Rb(e6, t, r, n = "ltr") {
  let o = mi(r), i = o / 2, l = t || i, u = o - l, c = r.scrollbar.paddingStart + l, d = r.scrollbar.size - r.scrollbar.paddingEnd - u, p = r.content - r.viewport, h = n === "ltr" ? [
    0,
    p
  ] : [
    p * -1,
    0
  ];
  return D5([
    c,
    d
  ], h)(e6);
}
function f5(e6, t, r = "ltr") {
  let n = mi(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, l = t.content - t.viewport, u = i - n, c = r === "ltr" ? [
    0,
    l
  ] : [
    l * -1,
    0
  ], d = p5(e6, c);
  return D5([
    0,
    l
  ], [
    0,
    u
  ])(d);
}
function D5(e6, t) {
  return (r) => {
    if (e6[0] === e6[1] || t[0] === t[1]) return t[0];
    let n = (t[1] - t[0]) / (e6[1] - e6[0]);
    return t[0] + n * (r - e6[0]);
  };
}
function x5(e6, t) {
  return e6 > 0 && e6 < t;
}
function gi(e6, t) {
  let r = le2(e6), n = (0, import_react14.useRef)(0);
  return (0, import_react14.useEffect)(
    () => () => window.clearTimeout(n.current),
    []
  ), (0, import_react14.useCallback)(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function mn2(e6, t) {
  let r = le2(t);
  Cr2(() => {
    let n = 0;
    if (e6) {
      let o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e6), () => {
        window.cancelAnimationFrame(n), o.unobserve(e6);
      };
    }
  }, [
    e6,
    r
  ]);
}
var h5;
var m5;
var zP;
var db;
var Ke2;
var fb;
var hb;
var mb;
var kt2;
var gb;
var vb;
var bb;
var g5;
var ou;
var wb;
var yb;
var Db;
var v5;
var b5;
var nu;
var xb;
var Cb;
var w5;
var Eb;
var Sb;
var Ab;
var C5;
var E5;
var S5;
var R5;
var A5;
var F5 = A(() => {
  Ue2();
  fn();
  eu();
  ru();
  Dr();
  hn2();
  c5();
  ui();
  d5();
  fi();
  a2(pb, "$6c2e24571c90391f$export$3e6543de14f8614f");
  h5 = "ScrollArea", [m5, zP] = di(h5), [db, Ke2] = m5(h5), fb = (0, import_react14.forwardRef)((e6, t) => {
    let { __scopeScrollArea: r, type: n = "hover", dir: o, scrollHideDelay: i = 600, ...l } = e6, [u, c] = (0, import_react14.useState)(null), [d, p] = (0, import_react14.useState)(null), [h, f] = (0, import_react14.useState)(
      null
    ), [g6, w4] = (0, import_react14.useState)(null), [m, v] = (0, import_react14.useState)(null), [y, b] = (0, import_react14.useState)(0), [D4, x] = (0, import_react14.useState)(0), [C, E] = (0, import_react14.useState)(false), [S, R] = (0, import_react14.useState)(false), F6 = we2(
      t,
      (T) => c(T)
    ), k6 = u5(o);
    return (0, import_react14.createElement)(db, {
      scope: r,
      type: n,
      dir: k6,
      scrollHideDelay: i,
      scrollArea: u,
      viewport: d,
      onViewportChange: p,
      content: h,
      onContentChange: f,
      scrollbarX: g6,
      onScrollbarXChange: w4,
      scrollbarXEnabled: C,
      onScrollbarXEnabledChange: E,
      scrollbarY: m,
      onScrollbarYChange: v,
      scrollbarYEnabled: S,
      onScrollbarYEnabledChange: R,
      onCornerWidthChange: b,
      onCornerHeightChange: x
    }, (0, import_react14.createElement)(pe2.div, I2({
      dir: k6
    }, l, {
      ref: F6,
      style: {
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": y + "px",
        "--radix-scroll-area-corner-height": D4 + "px",
        ...e6.style
      }
    })));
  }), hb = "ScrollAreaViewport", mb = (0, import_react14.forwardRef)((e6, t) => {
    let { __scopeScrollArea: r, children: n, ...o } = e6, i = Ke2(hb, r), l = (0, import_react14.useRef)(null), u = we2(t, l, i.onViewportChange);
    return (0, import_react14.createElement)(import_react14.Fragment, null, (0, import_react14.createElement)("style", {
      dangerouslySetInnerHTML: {
        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
      }
    }), (0, import_react14.createElement)(pe2.div, I2({
      "data-radix-scroll-area-viewport": ""
    }, o, {
      ref: u,
      style: {
        /**
        * We don't support `visible` because the intention is to have at least one scrollbar
        * if this component is used and `visible` will behave like `auto` in that case
        * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
        *
        * We don't handle `auto` because the intention is for the native implementation
        * to be hidden if using this component. We just want to ensure the node is scrollable
        * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
        * the browser from having to work out whether to render native scrollbars or not,
        * we tell it to with the intention of hiding them in CSS.
        */
        overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
        overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
        ...e6.style
      }
    }), (0, import_react14.createElement)("div", {
      ref: i.onContentChange,
      style: {
        minWidth: "100%",
        display: "table"
      }
    }, n)));
  }), kt2 = "ScrollAreaScrollbar", gb = (0, import_react14.forwardRef)((e6, t) => {
    let { forceMount: r, ...n } = e6, o = Ke2(kt2, e6.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o, u = e6.orientation === "horizontal";
    return (0, import_react14.useEffect)(() => (u ? i(true) : l(true), () => {
      u ? i(false) : l(false);
    }), [
      u,
      i,
      l
    ]), o.type === "hover" ? (0, import_react14.createElement)(vb, I2({}, n, {
      ref: t,
      forceMount: r
    })) : o.type === "scroll" ? (0, import_react14.createElement)(bb, I2({}, n, {
      ref: t,
      forceMount: r
    })) : o.type === "auto" ? (0, import_react14.createElement)(g5, I2({}, n, {
      ref: t,
      forceMount: r
    })) : o.type === "always" ? (0, import_react14.createElement)(ou, I2({}, n, {
      ref: t
    })) : null;
  }), vb = (0, import_react14.forwardRef)((e6, t) => {
    let { forceMount: r, ...n } = e6, o = Ke2(kt2, e6.__scopeScrollArea), [i, l] = (0, import_react14.useState)(false);
    return (0, import_react14.useEffect)(() => {
      let u = o.scrollArea, c = 0;
      if (u) {
        let d = a2(() => {
          window.clearTimeout(c), l(true);
        }, "handlePointerEnter"), p = a2(() => {
          c = window.setTimeout(
            () => l(false),
            o.scrollHideDelay
          );
        }, "handlePointerLeave");
        return u.addEventListener("pointerenter", d), u.addEventListener("pointerleave", p), () => {
          window.clearTimeout(c), u.removeEventListener("pointerenter", d), u.removeEventListener("pointerleave", p);
        };
      }
    }, [
      o.scrollArea,
      o.scrollHideDelay
    ]), (0, import_react14.createElement)(vt2, {
      present: r || i
    }, (0, import_react14.createElement)(g5, I2({
      "data-state": i ? "visible" : "hidden"
    }, n, {
      ref: t
    })));
  }), bb = (0, import_react14.forwardRef)((e6, t) => {
    let { forceMount: r, ...n } = e6, o = Ke2(kt2, e6.__scopeScrollArea), i = e6.orientation === "horizontal", l = gi(
      () => c("SCROLL_END"),
      100
    ), [u, c] = pb("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    return (0, import_react14.useEffect)(() => {
      if (u === "idle") {
        let d = window.setTimeout(
          () => c("HIDE"),
          o.scrollHideDelay
        );
        return () => window.clearTimeout(d);
      }
    }, [
      u,
      o.scrollHideDelay,
      c
    ]), (0, import_react14.useEffect)(() => {
      let d = o.viewport, p = i ? "scrollLeft" : "scrollTop";
      if (d) {
        let h = d[p], f = a2(() => {
          let g6 = d[p];
          h !== g6 && (c("SCROLL"), l()), h = g6;
        }, "handleScroll");
        return d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
      }
    }, [
      o.viewport,
      i,
      c,
      l
    ]), (0, import_react14.createElement)(vt2, {
      present: r || u !== "hidden"
    }, (0, import_react14.createElement)(ou, I2({
      "data-state": u === "hidden" ? "hidden" : "visible"
    }, n, {
      ref: t,
      onPointerEnter: de2(
        e6.onPointerEnter,
        () => c("POINTER_ENTER")
      ),
      onPointerLeave: de2(
        e6.onPointerLeave,
        () => c("POINTER_LEAVE")
      )
    })));
  }), g5 = (0, import_react14.forwardRef)((e6, t) => {
    let r = Ke2(kt2, e6.__scopeScrollArea), { forceMount: n, ...o } = e6, [i, l] = (0, import_react14.useState)(false), u = e6.orientation === "horizontal", c = gi(() => {
      if (r.viewport) {
        let d = r.viewport.offsetWidth < r.viewport.scrollWidth, p = r.viewport.offsetHeight < r.viewport.scrollHeight;
        l(u ? d : p);
      }
    }, 10);
    return mn2(r.viewport, c), mn2(r.content, c), (0, import_react14.createElement)(vt2, {
      present: n || i
    }, (0, import_react14.createElement)(ou, I2({
      "data-state": i ? "visible" : "hidden"
    }, o, {
      ref: t
    })));
  }), ou = (0, import_react14.forwardRef)((e6, t) => {
    let { orientation: r = "vertical", ...n } = e6, o = Ke2(kt2, e6.__scopeScrollArea), i = (0, import_react14.useRef)(null), l = (0, import_react14.useRef)(0), [u, c] = (0, import_react14.useState)({
      content: 0,
      viewport: 0,
      scrollbar: {
        size: 0,
        paddingStart: 0,
        paddingEnd: 0
      }
    }), d = y5(u.viewport, u.content), p = {
      ...n,
      sizes: u,
      onSizesChange: c,
      hasThumb: d > 0 && d < 1,
      onThumbChange: a2((f) => i.current = f, "onThumbChange"),
      onThumbPointerUp: a2(() => l.current = 0, "onThumbPointerUp"),
      onThumbPointerDown: a2((f) => l.current = f, "onThumbPointerDown")
    };
    function h(f, g6) {
      return Rb(f, l.current, u, g6);
    }
    return a2(h, "getScrollPosition"), r === "horizontal" ? (0, import_react14.createElement)(wb, I2({}, p, {
      ref: t,
      onThumbPositionChange: a2(() => {
        if (o.viewport && i.current) {
          let f = o.viewport.scrollLeft, g6 = f5(f, u, o.dir);
          i.current.style.transform = `translate3d(${g6}px, 0, 0)`;
        }
      }, "onThumbPositionChange"),
      onWheelScroll: a2((f) => {
        o.viewport && (o.viewport.scrollLeft = f);
      }, "onWheelScroll"),
      onDragScroll: a2((f) => {
        o.viewport && (o.viewport.scrollLeft = h(f, o.dir));
      }, "onDragScroll")
    })) : r === "vertical" ? (0, import_react14.createElement)(yb, I2({}, p, {
      ref: t,
      onThumbPositionChange: a2(() => {
        if (o.viewport && i.current) {
          let f = o.viewport.scrollTop, g6 = f5(f, u);
          i.current.style.transform = `translate3d(0, ${g6}px, 0)`;
        }
      }, "onThumbPositionChange"),
      onWheelScroll: a2((f) => {
        o.viewport && (o.viewport.scrollTop = f);
      }, "onWheelScroll"),
      onDragScroll: a2((f) => {
        o.viewport && (o.viewport.scrollTop = h(f));
      }, "onDragScroll")
    })) : null;
  }), wb = (0, import_react14.forwardRef)((e6, t) => {
    let { sizes: r, onSizesChange: n, ...o } = e6, i = Ke2(kt2, e6.__scopeScrollArea), [l, u] = (0, import_react14.useState)(), c = (0, import_react14.useRef)(null), d = we2(t, c, i.onScrollbarXChange);
    return (0, import_react14.useEffect)(() => {
      c.current && u(getComputedStyle(c.current));
    }, [
      c
    ]), (0, import_react14.createElement)(b5, I2({
      "data-orientation": "horizontal"
    }, o, {
      ref: d,
      sizes: r,
      style: {
        bottom: 0,
        left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": mi(r) + "px",
        ...e6.style
      },
      onThumbPointerDown: a2((p) => e6.onThumbPointerDown(p.x), "onThumbPointerDown"),
      onDragScroll: a2((p) => e6.onDragScroll(p.x), "onDragScroll"),
      onWheelScroll: a2((p, h) => {
        if (i.viewport) {
          let f = i.viewport.scrollLeft + p.deltaX;
          e6.onWheelScroll(f), x5(f, h) && p.preventDefault();
        }
      }, "onWheelScroll"),
      onResize: a2(() => {
        c.current && i.viewport && l && n({
          content: i.viewport.scrollWidth,
          viewport: i.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: hi(l.paddingLeft),
            paddingEnd: hi(l.paddingRight)
          }
        });
      }, "onResize")
    }));
  }), yb = (0, import_react14.forwardRef)((e6, t) => {
    let { sizes: r, onSizesChange: n, ...o } = e6, i = Ke2(kt2, e6.__scopeScrollArea), [l, u] = (0, import_react14.useState)(), c = (0, import_react14.useRef)(null), d = we2(t, c, i.onScrollbarYChange);
    return (0, import_react14.useEffect)(() => {
      c.current && u(getComputedStyle(c.current));
    }, [
      c
    ]), (0, import_react14.createElement)(b5, I2({
      "data-orientation": "vertical"
    }, o, {
      ref: d,
      sizes: r,
      style: {
        top: 0,
        right: i.dir === "ltr" ? 0 : void 0,
        left: i.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": mi(r) + "px",
        ...e6.style
      },
      onThumbPointerDown: a2((p) => e6.onThumbPointerDown(p.y), "onThumbPointerDown"),
      onDragScroll: a2((p) => e6.onDragScroll(p.y), "onDragScroll"),
      onWheelScroll: a2((p, h) => {
        if (i.viewport) {
          let f = i.viewport.scrollTop + p.deltaY;
          e6.onWheelScroll(f), x5(f, h) && p.preventDefault();
        }
      }, "onWheelScroll"),
      onResize: a2(() => {
        c.current && i.viewport && l && n({
          content: i.viewport.scrollHeight,
          viewport: i.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: hi(l.paddingTop),
            paddingEnd: hi(l.paddingBottom)
          }
        });
      }, "onResize")
    }));
  }), [Db, v5] = m5(kt2), b5 = (0, import_react14.forwardRef)((e6, t) => {
    let {
      __scopeScrollArea: r,
      sizes: n,
      hasThumb: o,
      onThumbChange: i,
      onThumbPointerUp: l,
      onThumbPointerDown: u,
      onThumbPositionChange: c,
      onDragScroll: d,
      onWheelScroll: p,
      onResize: h,
      ...f
    } = e6, g6 = Ke2(kt2, r), [w4, m] = (0, import_react14.useState)(null), v = we2(
      t,
      (F6) => m(F6)
    ), y = (0, import_react14.useRef)(null), b = (0, import_react14.useRef)(""), D4 = g6.viewport, x = n.content - n.viewport, C = le2(p), E = le2(c), S = gi(h, 10);
    function R(F6) {
      if (y.current) {
        let k6 = F6.clientX - y.current.left, T = F6.clientY - y.current.top;
        d({
          x: k6,
          y: T
        });
      }
    }
    return a2(R, "handleDragScroll"), (0, import_react14.useEffect)(() => {
      let F6 = a2((k6) => {
        let T = k6.target;
        (w4 == null ? void 0 : w4.contains(T)) && C(k6, x);
      }, "handleWheel");
      return document.addEventListener("wheel", F6, {
        passive: false
      }), () => document.removeEventListener("wheel", F6, {
        passive: false
      });
    }, [
      D4,
      w4,
      x,
      C
    ]), (0, import_react14.useEffect)(E, [
      n,
      E
    ]), mn2(w4, S), mn2(g6.content, S), (0, import_react14.createElement)(Db, {
      scope: r,
      scrollbar: w4,
      hasThumb: o,
      onThumbChange: le2(i),
      onThumbPointerUp: le2(l),
      onThumbPositionChange: E,
      onThumbPointerDown: le2(u)
    }, (0, import_react14.createElement)(pe2.div, I2({}, f, {
      ref: v,
      style: {
        position: "absolute",
        ...f.style
      },
      onPointerDown: de2(e6.onPointerDown, (F6) => {
        F6.button === 0 && (F6.target.setPointerCapture(F6.pointerId), y.current = w4.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g6.viewport && (g6.viewport.style.scrollBehavior = "auto"), R(F6));
      }),
      onPointerMove: de2(e6.onPointerMove, R),
      onPointerUp: de2(e6.onPointerUp, (F6) => {
        let k6 = F6.target;
        k6.hasPointerCapture(F6.pointerId) && k6.releasePointerCapture(F6.pointerId), document.body.style.webkitUserSelect = b.current, g6.viewport && (g6.viewport.style.scrollBehavior = ""), y.current = null;
      })
    })));
  }), nu = "ScrollAreaThumb", xb = (0, import_react14.forwardRef)((e6, t) => {
    let { forceMount: r, ...n } = e6, o = v5(nu, e6.__scopeScrollArea);
    return (0, import_react14.createElement)(vt2, {
      present: r || o.hasThumb
    }, (0, import_react14.createElement)(Cb, I2({
      ref: t
    }, n)));
  }), Cb = (0, import_react14.forwardRef)((e6, t) => {
    let { __scopeScrollArea: r, style: n, ...o } = e6, i = Ke2(nu, r), l = v5(nu, r), { onThumbPositionChange: u } = l, c = we2(
      t,
      (h) => l.onThumbChange(h)
    ), d = (0, import_react14.useRef)(), p = gi(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return (0, import_react14.useEffect)(() => {
      let h = i.viewport;
      if (h) {
        let f = a2(() => {
          if (p(), !d.current) {
            let g6 = Ab(h, u);
            d.current = g6, u();
          }
        }, "handleScroll");
        return u(), h.addEventListener("scroll", f), () => h.removeEventListener("scroll", f);
      }
    }, [
      i.viewport,
      p,
      u
    ]), (0, import_react14.createElement)(pe2.div, I2({
      "data-state": l.hasThumb ? "visible" : "hidden"
    }, o, {
      ref: c,
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)",
        ...n
      },
      onPointerDownCapture: de2(e6.onPointerDownCapture, (h) => {
        let g6 = h.target.getBoundingClientRect(), w4 = h.clientX - g6.left, m = h.clientY - g6.top;
        l.onThumbPointerDown({
          x: w4,
          y: m
        });
      }),
      onPointerUp: de2(e6.onPointerUp, l.onThumbPointerUp)
    }));
  }), w5 = "ScrollAreaCorner", Eb = (0, import_react14.forwardRef)((e6, t) => {
    let r = Ke2(w5, e6.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? (0, import_react14.createElement)(Sb, I2({}, e6, {
      ref: t
    })) : null;
  }), Sb = (0, import_react14.forwardRef)((e6, t) => {
    let { __scopeScrollArea: r, ...n } = e6, o = Ke2(w5, r), [i, l] = (0, import_react14.useState)(0), [u, c] = (0, import_react14.useState)(0), d = !!(i && u);
    return mn2(o.scrollbarX, () => {
      var p;
      let h = ((p = o.scrollbarX) === null || p === void 0 ? void 0 : p.offsetHeight) || 0;
      o.onCornerHeightChange(h), c(h);
    }), mn2(o.scrollbarY, () => {
      var p;
      let h = ((p = o.scrollbarY) === null || p === void 0 ? void 0 : p.offsetWidth) || 0;
      o.onCornerWidthChange(h), l(h);
    }), d ? (0, import_react14.createElement)(pe2.div, I2({}, n, {
      ref: t,
      style: {
        width: i,
        height: u,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e6.style
      }
    })) : null;
  });
  a2(hi, "$57acba87d6e25586$var$toInt");
  a2(y5, "$57acba87d6e25586$var$getThumbRatio");
  a2(mi, "$57acba87d6e25586$var$getThumbSize");
  a2(Rb, "$57acba87d6e25586$var$getScrollPositionFromPointer");
  a2(f5, "$57acba87d6e25586$var$getThumbOffsetFromScroll");
  a2(D5, "$57acba87d6e25586$var$linearScale");
  a2(x5, "$57acba87d6e25586$var$isScrollingWithinScrollbarBounds");
  Ab = a2((e6, t = () => {
  }) => {
    let r = {
      left: e6.scrollLeft,
      top: e6.scrollTop
    }, n = 0;
    return a2(function o() {
      let i = {
        left: e6.scrollLeft,
        top: e6.scrollTop
      }, l = r.left !== i.left, u = r.top !== i.top;
      (l || u) && t(), r = i, n = window.requestAnimationFrame(o);
    }, "loop")(), () => window.cancelAnimationFrame(n);
  }, "$57acba87d6e25586$var$addUnlinkedScrollListener");
  a2(gi, "$57acba87d6e25586$var$useDebounceCallback");
  a2(mn2, "$57acba87d6e25586$var$useResizeObserver");
  C5 = fb, E5 = mb, S5 = gb, R5 = xb, A5 = Eb;
});
var Tb;
var Lb;
var k5;
var T5;
var gn2;
var bi = A(() => {
  "use strict";
  F5();
  Tb = Tr(C5)(
    ({ scrollbarsize: e6, offset: t }) => ({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "--scrollbar-size": `${e6 + t}px`,
      "--radix-scroll-area-thumb-width": `${e6}px`
    })
  ), Lb = Tr(E5)({
    width: "100%",
    height: "100%"
  }), k5 = Tr(S5)(({ offset: e6, horizontal: t, vertical: r }) => ({
    display: "flex",
    userSelect: "none",
    // ensures no selection
    touchAction: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e6,
      marginTop: e6,
      marginBottom: t === "true" && r === "true" ? 0 : e6
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e6,
      marginLeft: e6,
      marginRight: t === "true" && r === "true" ? 0 : e6
    }
  })), T5 = Tr(R5)(({ theme: e6 }) => ({
    flex: 1,
    background: e6.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%"
    }
  })), gn2 = (0, import_react15.forwardRef)(
    ({ children: e6, horizontal: t = false, vertical: r = false, offset: n = 2, scrollbarSize: o = 6, className: i }, l) => import_react15.default.createElement(
      Tb,
      { scrollbarsize: o, offset: n, className: i },
      import_react15.default.createElement(Lb, { ref: l }, e6),
      t && import_react15.default.createElement(
        k5,
        {
          orientation: "horizontal",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        import_react15.default.createElement(T5, null)
      ),
      r && import_react15.default.createElement(
        k5,
        {
          orientation: "vertical",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        import_react15.default.createElement(T5, null)
      ),
      t && r && import_react15.default.createElement(A5, null)
    )
  );
  gn2.displayName = "ScrollArea";
});
var iu = {};
on2(iu, {
  SyntaxHighlighter: () => aa2,
  createCopyToClipboardFunction: () => au,
  default: () => Wb,
  supportedLanguages: () => M5
});
function au() {
  return (B5 == null ? void 0 : B5.clipboard) ? (e6) => B5.clipboard.writeText(e6) : async (e6) => {
    let t = na2.createElement("TEXTAREA"), r = na2.activeElement;
    t.value = e6, na2.body.appendChild(t), t.select(), na2.execCommand("copy"), na2.body.removeChild(t), r.focus();
  };
}
var I5;
var B5;
var na2;
var _b;
var M5;
var $b;
var Hb;
var Pb;
var zb;
var Ob;
var Nb;
var jb;
var _5;
var Vb;
var qb;
var aa2;
var Wb;
var ia2 = A(() => {
  "use strict";
  Ya2();
  I5 = ve2(Ko(), 1);
  K1();
  tp();
  ap();
  cp();
  mp();
  yp();
  Ep();
  kp();
  Mp();
  Op();
  Vp();
  Jf();
  Qf();
  Ys();
  bi();
  ({ navigator: B5, document: na2, window: _b } = an2), M5 = {
    jsextra: up,
    jsx: Y1,
    json: hp,
    yml: Ip,
    md: Fp,
    bash: ep,
    css: op,
    html: Cp,
    tsx: zp,
    typescript: jp,
    graphql: wp
  };
  Object.entries(M5).forEach(([e6, t]) => {
    ii.registerLanguage(e6, t);
  });
  $b = (0, I5.default)(2)(
    (e6) => Object.entries(e6.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})
  ), Hb = au();
  a2(au, "createCopyToClipboardFunction");
  Pb = Tr.div(
    ({ theme: e6 }) => ({
      position: "relative",
      overflow: "hidden",
      color: e6.color.defaultText
    }),
    ({ theme: e6, bordered: t }) => t ? {
      border: `1px solid ${e6.appBorderColor}`,
      borderRadius: e6.borderRadius,
      background: e6.background.content
    } : {},
    ({ showLineNumbers: e6 }) => e6 ? {
      // use the before pseudo element to display line numbers
      ".react-syntax-highlighter-line-number::before": {
        content: "attr(data-line-number)"
      }
    } : {}
  ), zb = a2(({ children: e6, className: t }) => import_react16.default.createElement(
    gn2,
    { horizontal: true, vertical: true, className: t },
    e6
  ), "UnstyledScroller"), Ob = Tr(zb)(
    {
      position: "relative"
    },
    ({ theme: e6 }) => $b(e6)
  ), Nb = Tr.pre(({ theme: e6, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e6.layoutMargin : 0
  })), jb = Tr.div(({ theme: e6 }) => ({
    flex: 1,
    paddingLeft: 2,
    // TODO: To match theming/global.ts for now
    paddingRight: e6.layoutMargin,
    opacity: 1,
    fontFamily: e6.typography.fonts.mono
  })), _5 = a2((e6) => {
    let t = [...e6.children], r = t[0], n = r.children[0].value, o = {
      ...r,
      // empty the line-number element
      children: [],
      properties: {
        ...r.properties,
        // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
        "data-line-number": n,
        // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
        style: { ...r.properties.style, userSelect: "auto" }
      }
    };
    return t[0] = o, { ...e6, children: t };
  }, "processLineNumber"), Vb = a2(({ rows: e6, stylesheet: t, useInlineStyles: r }) => e6.map((n, o) => vr2({
    node: _5(n),
    stylesheet: t,
    useInlineStyles: r,
    key: `code-segement${o}`
  })), "defaultRenderer"), qb = a2((e6, t) => t ? e6 ? ({ rows: r, ...n }) => e6({ rows: r.map((o) => _5(o)), ...n }) : Vb : e6, "wrapRenderer"), aa2 = a2(({
    children: e6,
    language: t = "jsx",
    copyable: r = false,
    bordered: n = false,
    padded: o = false,
    format: i = true,
    formatter: l = void 0,
    className: u = void 0,
    showLineNumbers: c = false,
    ...d
  }) => {
    if (typeof e6 != "string" || !e6.trim())
      return null;
    let [p, h] = (0, import_react16.useState)("");
    (0, import_react16.useEffect)(() => {
      l ? l(i, e6).then(h) : h(e6.trim());
    }, [e6, i, l]);
    let [f, g6] = (0, import_react16.useState)(false), w4 = (0, import_react16.useCallback)(
      (v) => {
        v.preventDefault(), Hb(p).then(() => {
          g6(true), _b.setTimeout(() => g6(false), 1500);
        }).catch(import_client_logger3.logger.error);
      },
      [p]
    ), m = qb(d.renderer, c);
    return import_react16.default.createElement(
      Pb,
      {
        bordered: n,
        padded: o,
        showLineNumbers: c,
        className: u
      },
      import_react16.default.createElement(Ob, null, import_react16.default.createElement(
        ii,
        {
          padded: o || n,
          language: t,
          showLineNumbers: c,
          showInlineLineNumbers: c,
          useInlineStyles: false,
          PreTag: Nb,
          CodeTag: jb,
          lineNumberContainerStyle: {},
          ...d,
          renderer: m
        },
        p
      )),
      r ? import_react16.default.createElement(Xs, { actionItems: [{ title: f ? "Copied" : "Copy", onClick: w4 }] }) : null
    );
  }, "SyntaxHighlighter");
  aa2.registerLanguage = (...e6) => ii.registerLanguage(...e6);
  Wb = aa2;
});
function jD(e6) {
  if (typeof e6 == "string") return Vu;
  if (Array.isArray(e6)) return qu;
  if (!e6) return;
  let { type: t } = e6;
  if (wh.has(t)) return t;
}
function qD(e6) {
  let t = e6 === null ? "null" : typeof e6;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Ku(e6)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e6);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = VD([...wh].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e6.type}'.
Expected it to be ${n}.`;
}
function Lt2(e6) {
  return Tr2(e6), { type: Bi, contents: e6 };
}
function xh(e6, t) {
  return Tr2(t), { type: Ii, contents: t, n: e6 };
}
function Ae2(e6, t = {}) {
  return Tr2(e6), Zu(t.expandedStates, true), { type: fa, id: t.id, contents: e6, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function UD(e6) {
  return xh(Number.NEGATIVE_INFINITY, e6);
}
function GD(e6) {
  return xh({ type: "root" }, e6);
}
function Ch(e6) {
  return Zu(e6), { type: Mi, parts: e6 };
}
function Ai(e6, t = "", r = {}) {
  return Tr2(e6), t !== "" && Tr2(t), { type: _i, breakContents: e6, flatContents: t, groupId: r.groupId };
}
function XD(e6, t) {
  return Tr2(e6), { type: $i, contents: e6, groupId: t.groupId, negate: t.negate };
}
function Yn2(e6, t) {
  Tr2(e6), Zu(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e6), r.push(t[n]);
  return r;
}
function Ju(e6, t) {
  if (typeof e6 == "string") return t(e6);
  let r = /* @__PURE__ */ new Map();
  return n(e6);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let l = o(i);
    return r.set(i, l), l;
  }
  function o(i) {
    switch (Ku(i)) {
      case qu:
        return t(i.map(n));
      case Mi:
        return t({ ...i, parts: i.parts.map(n) });
      case _i:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case fa: {
        let { expandedStates: l, contents: u } = i;
        return l ? (l = l.map(n), u = l[0]) : u = n(u), t({ ...i, contents: u, expandedStates: l });
      }
      case Ii:
      case Bi:
      case $i:
      case Yu:
      case Gu:
        return t({ ...i, contents: n(i.contents) });
      case Vu:
      case Wu:
      case Uu:
      case Xu:
      case Mr2:
      case Hi:
        return t(i);
      default:
        throw new yh(i);
    }
  }
}
function QD(e6) {
  switch (Ku(e6)) {
    case Mi:
      if (e6.parts.every((t) => t === "")) return "";
      break;
    case fa:
      if (!e6.contents && !e6.id && !e6.break && !e6.expandedStates) return "";
      if (e6.contents.type === fa && e6.contents.id === e6.id && e6.contents.break === e6.break && e6.contents.expandedStates === e6.expandedStates)
        return e6.contents;
      break;
    case Ii:
    case Bi:
    case $i:
    case Gu:
      if (!e6.contents) return "";
      break;
    case _i:
      if (!e6.flatContents && !e6.breakContents) return "";
      break;
    case qu: {
      let t = [];
      for (let r of e6) {
        if (!r) continue;
        let [n, ...o] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof va2(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Vu:
    case Wu:
    case Uu:
    case Xu:
    case Mr2:
    case Yu:
    case Hi:
      break;
    default:
      throw new yh(e6);
  }
  return e6;
}
function ex(e6) {
  return Ju(e6, (t) => QD(t));
}
function lt2(e6, t = ZD) {
  return Ju(e6, (r) => typeof r == "string" ? Yn2(t, r.split(`
`)) : r);
}
function tx(e6, t) {
  let r = t === true || t === yi ? yi : N5, n = r === yi ? N5 : yi, o = 0, i = 0;
  for (let l of e6) l === r ? o++ : l === n && i++;
  return o > i ? n : r;
}
function nx(e6) {
  if (typeof e6 != "string") throw new TypeError("Expected a string");
  return e6.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function cx(e6) {
  return (e6 == null ? void 0 : e6.type) === "front-matter";
}
function Eh(e6, t) {
  var r;
  if (e6.type === "text" || e6.type === "comment" || Pi(e6) || e6.type === "yaml" || e6.type === "toml") return null;
  if (e6.type === "attribute" && delete t.value, e6.type === "docType" && delete t.value, e6.type === "angularControlFlowBlock" && (r = t.parameters) != null && r.children) for (let n of t.parameters.children) dx.has(e6.name) ? delete n.expression : n.expression = n.expression.trim();
  e6.type === "angularIcuExpression" && (t.switchValue = e6.switchValue.trim());
}
async function hx(e6, t) {
  if (e6.lang === "yaml") {
    let r = e6.value.trim(), n = r ? await t(r, { parser: "yaml" }) : "";
    return GD([e6.startDelimiter, J2, n, n ? J2 : "", e6.endDelimiter]);
  }
}
function zi(e6, t = true) {
  return [Lt2([Re2, e6]), t ? Re2 : ""];
}
function Kn2(e6, t) {
  let r = e6.type === "NGRoot" ? e6.node.type === "NGMicrosyntax" && e6.node.body.length === 1 && e6.node.body[0].type === "NGMicrosyntaxExpression" ? e6.node.body[0].expression : e6.node : e6.type === "JsExpressionRoot" ? e6.node : e6;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function Dt2(e6, t, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let o = true;
  n && (r.__onHtmlBindingRoot = (l, u) => {
    o = n(l, u);
  });
  let i = await t(e6, r, t);
  return o ? Ae2(i) : zi(i);
}
function gx(e6, t, r, n) {
  let { node: o } = r, i = n.originalText.slice(o.sourceSpan.start.offset, o.sourceSpan.end.offset);
  return /^\s*$/.test(i) ? "" : Dt2(i, e6, { parser: "__ng_directive", __isInHtmlAttribute: false, trailingComma: "none" }, Kn2);
}
function j5(e6, t) {
  if (!t) return;
  let r = bx(t).toLowerCase();
  return e6.find(({ filenames: n }) => n == null ? void 0 : n.some((o) => o.toLowerCase() === r)) ?? e6.find(({ extensions: n }) => n == null ? void 0 : n.some((o) => r.endsWith(o)));
}
function wx(e6, t) {
  if (t) return e6.find(({ name: r }) => r.toLowerCase() === t) ?? e6.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e6.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function yx(e6, t) {
  let r = e6.plugins.flatMap((o) => o.languages ?? []), n = wx(r, t.language) ?? j5(r, t.physicalFile) ?? j5(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
function Sx(e6) {
  return e6.type === "element" && !e6.hasExplicitNamespace && !["html", "svg"].includes(e6.namespace);
}
function Rh(e6, t) {
  return !!(e6.type === "ieConditionalComment" && e6.lastChild && !e6.lastChild.isSelfClosing && !e6.lastChild.endSourceSpan || e6.type === "ieConditionalComment" && !e6.complete || Xn2(e6) && e6.children.some((r) => r.type !== "text" && r.type !== "interpolation") || ec(e6, t) && !Tt2(e6) && e6.type !== "interpolation");
}
function Ni(e6) {
  return e6.type === "attribute" || !e6.parent || !e6.prev ? false : Fx(e6.prev);
}
function Fx(e6) {
  return e6.type === "comment" && e6.value.trim() === "prettier-ignore";
}
function Je2(e6) {
  return e6.type === "text" || e6.type === "comment";
}
function Tt2(e6) {
  return e6.type === "element" && (e6.fullName === "script" || e6.fullName === "style" || e6.fullName === "svg:style" || e6.fullName === "svg:script" || ha2(e6) && (e6.name === "script" || e6.name === "style"));
}
function kx(e6) {
  return e6.children && !Tt2(e6);
}
function Tx(e6) {
  return Tt2(e6) || e6.type === "interpolation" || Ah(e6);
}
function Ah(e6) {
  return Mh(e6).startsWith("pre");
}
function Lx(e6, t) {
  var r, n;
  let o = i();
  if (o && !e6.prev && (n = (r = e6.parent) == null ? void 0 : r.tagDefinition) != null && n.ignoreFirstLf) return e6.type === "interpolation";
  return o;
  function i() {
    return Pi(e6) || e6.type === "angularControlFlowBlock" ? false : (e6.type === "text" || e6.type === "interpolation") && e6.prev && (e6.prev.type === "text" || e6.prev.type === "interpolation") ? true : !e6.parent || e6.parent.cssDisplay === "none" ? false : Xn2(e6.parent) ? true : !(!e6.prev && (e6.parent.type === "root" || Xn2(e6) && e6.parent || Tt2(e6.parent) || ji(e6.parent, t) || !Ox(e6.parent.cssDisplay)) || e6.prev && !Vx(e6.prev.cssDisplay));
  }
}
function Bx(e6, t) {
  return Pi(e6) || e6.type === "angularControlFlowBlock" ? false : (e6.type === "text" || e6.type === "interpolation") && e6.next && (e6.next.type === "text" || e6.next.type === "interpolation") ? true : !e6.parent || e6.parent.cssDisplay === "none" ? false : Xn2(e6.parent) ? true : !(!e6.next && (e6.parent.type === "root" || Xn2(e6) && e6.parent || Tt2(e6.parent) || ji(e6.parent, t) || !Nx(e6.parent.cssDisplay)) || e6.next && !jx(e6.next.cssDisplay));
}
function Ix(e6) {
  return qx(e6.cssDisplay) && !Tt2(e6);
}
function Di(e6) {
  return Pi(e6) || e6.next && e6.sourceSpan.end && e6.sourceSpan.end.line + 1 < e6.next.sourceSpan.start.line;
}
function Mx(e6) {
  return Fh(e6) || e6.type === "element" && e6.children.length > 0 && (["body", "script", "style"].includes(e6.name) || e6.children.some((t) => $x(
    t
  ))) || e6.firstChild && e6.firstChild === e6.lastChild && e6.firstChild.type !== "text" && Th(e6.firstChild) && (!e6.lastChild.isTrailingSpaceSensitive || Lh(e6.lastChild));
}
function Fh(e6) {
  return e6.type === "element" && e6.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e6.name) || e6.cssDisplay.startsWith(
    "table"
  ) && e6.cssDisplay !== "table-cell");
}
function Iu(e6) {
  return Bh(e6) || e6.prev && _x(e6.prev) || kh(e6);
}
function _x(e6) {
  return Bh(e6) || e6.type === "element" && e6.fullName === "br" || kh(e6);
}
function kh(e6) {
  return Th(e6) && Lh(e6);
}
function Th(e6) {
  return e6.hasLeadingSpaces && (e6.prev ? e6.prev.sourceSpan.end.line < e6.sourceSpan.start.line : e6.parent.type === "root" || e6.parent.startSourceSpan.end.line < e6.sourceSpan.start.line);
}
function Lh(e6) {
  return e6.hasTrailingSpaces && (e6.next ? e6.next.sourceSpan.start.line > e6.sourceSpan.end.line : e6.parent.type === "root" || e6.parent.endSourceSpan && e6.parent.endSourceSpan.start.line > e6.sourceSpan.end.line);
}
function Bh(e6) {
  switch (e6.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(e6.name);
  }
  return false;
}
function Qu(e6) {
  return e6.lastChild ? Qu(e6.lastChild) : e6;
}
function $x(e6) {
  var t;
  return (t = e6.children) == null ? void 0 : t.some((r) => r.type !== "text");
}
function Ih(e6) {
  if (e6) switch (e6) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (e6.endsWith("json") || e6.endsWith("importmap") || e6 === "speculationrules") return "json";
  }
}
function Hx(e6, t) {
  let { name: r, attrMap: n } = e6;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: o, lang: i } = e6.attrMap;
  return !i && !o ? "babel" : Oi(t, { language: i }) ?? Ih(o);
}
function Px(e6, t) {
  if (!ec(e6, t)) return;
  let { attrMap: r } = e6;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: o } = r;
  return Oi(t, { language: o }) ?? Ih(n);
}
function zx(e6, t) {
  if (e6.name !== "style") return;
  let { lang: r } = e6.attrMap;
  return r ? Oi(t, { language: r }) : "css";
}
function V5(e6, t) {
  return Hx(e6, t) ?? zx(e6, t) ?? Px(e6, t);
}
function ba2(e6) {
  return e6 === "block" || e6 === "list-item" || e6.startsWith("table");
}
function Ox(e6) {
  return !ba2(e6) && e6 !== "inline-block";
}
function Nx(e6) {
  return !ba2(e6) && e6 !== "inline-block";
}
function jx(e6) {
  return !ba2(e6);
}
function Vx(e6) {
  return !ba2(e6);
}
function qx(e6) {
  return !ba2(e6) && e6 !== "inline-block";
}
function Xn2(e6) {
  return Mh(e6).startsWith("pre");
}
function Wx(e6, t) {
  let r = e6;
  for (; r; ) {
    if (t(r)) return true;
    r = r.parent;
  }
  return false;
}
function Ux(e6, t) {
  var r;
  if (Zn2(e6, t)) return "block";
  if (((r = e6.prev) == null ? void 0 : r.type) === "comment") {
    let o = e6.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (o) return o[1];
  }
  let n = false;
  if (e6.type === "element" && e6.namespace === "svg") if (Wx(e6, (o) => o.fullName === "svg:foreignObject")) n = true;
  else return e6.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return e6.type === "element" && (!e6.namespace || n || ha2(e6)) && xx[e6.name] || Dx;
  }
}
function Mh(e6) {
  return e6.type === "element" && (!e6.namespace || ha2(e6)) && Ex[e6.name] || Cx;
}
function Gx(e6) {
  let t = Number.POSITIVE_INFINITY;
  for (let r of e6.split(`
`)) {
    if (r.length === 0) continue;
    let n = yt2.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < t && (t = n);
  }
  return t === Number.POSITIVE_INFINITY ? 0 : t;
}
function _h(e6, t = Gx(e6)) {
  return t === 0 ? e6 : e6.split(`
`).map((r) => r.slice(t)).join(`
`);
}
function $h(e6) {
  return je2(false, je2(false, e6, "&apos;", "'"), "&quot;", '"');
}
function Qt2(e6) {
  return $h(e6.value);
}
function ji(e6, t) {
  return Zn2(e6, t) && !Xx.has(e6.fullName);
}
function Zn2(e6, t) {
  return t.parser === "vue" && e6.type === "element" && e6.parent.type === "root" && e6.fullName.toLowerCase() !== "html";
}
function ec(e6, t) {
  return Zn2(e6, t) && (ji(e6, t) || e6.attrMap.lang && e6.attrMap.lang !== "html");
}
function Yx(e6) {
  let t = e6.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function Kx(e6, t) {
  let r = e6.parent;
  if (!Zn2(r, t)) return false;
  let n = r.fullName, o = e6.fullName;
  return n === "script" && o === "setup" || n === "style" && o === "vars";
}
function Hh(e6, t = e6.value) {
  return e6.parent.isWhitespaceSensitive ? e6.parent.isIndentationSensitive ? lt2(t) : lt2(_h(Sh(t)), J2) : Yn2(xe, yt2.split(t));
}
function Ph(e6, t) {
  return Zn2(e6, t) && e6.name === "script";
}
async function Zx(e6, t) {
  let r = [];
  for (let [n, o] of e6.split(zh).entries()) if (n % 2 === 0) r.push(lt2(o));
  else try {
    r.push(Ae2(["{{", Lt2([xe, await Dt2(o, t, { parser: "__ng_interpolation", __isInHtmlInterpolation: true, trailingComma: "none" })]), xe, "}}"]));
  } catch {
    r.push("{{", lt2(o), "}}");
  }
  return r;
}
function tc({ parser: e6 }) {
  return (t, r, n) => Dt2(Qt2(n.node), t, { parser: e6, trailingComma: "none" }, Kn2);
}
function tC(e6, t) {
  if (t.parser !== "angular") return;
  let { node: r } = e6, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return Jx;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/.test(n) || /^ng-(?:if|show|hide|class|style)$/.test(n)) return Qx;
  if (n.startsWith("*")) return eC;
  let o = Qt2(r);
  if (/^i18n(?:-.+)?$/.test(n)) return () => zi(Ch(Hh(r, o.trim())), !o.includes("@@"));
  if (zh.test(o)) return (i) => Zx(o, i);
}
function nC(e6, t) {
  let { node: r } = e6, n = Qt2(r);
  if (r.fullName === "class" && !t.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/).join(" ");
}
function q5(e6) {
  return e6 === "	" || e6 === `
` || e6 === "\f" || e6 === "\r" || e6 === " ";
}
function cC(e6) {
  let t = e6.length, r, n, o, i, l, u = 0, c;
  function d(g6) {
    let w4, m = g6.exec(e6.substring(u));
    if (m) return [w4] = m, u += w4.length, w4;
  }
  a2(d, "p");
  let p = [];
  for (; ; ) {
    if (d(iC), u >= t) {
      if (p.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return p;
    }
    c = u, r = d(lC), n = [], r.slice(-1) === "," ? (r = r.replace(sC, ""), f()) : h();
  }
  function h() {
    for (d(aC), o = "", i = "in descriptor"; ; ) {
      if (l = e6.charAt(u), i === "in descriptor") if (q5(l)) o && (n.push(o), o = "", i = "after descriptor");
      else if (l === ",") {
        u += 1, o && n.push(o), f();
        return;
      } else if (l === "(") o += l, i = "in parens";
      else if (l === "") {
        o && n.push(o), f();
        return;
      } else o += l;
      else if (i === "in parens") if (l === ")") o += l, i = "in descriptor";
      else if (l === "") {
        n.push(o), f();
        return;
      } else o += l;
      else if (i === "after descriptor" && !q5(l)) if (l === "") {
        f();
        return;
      } else i = "in descriptor", u -= 1;
      u += 1;
    }
  }
  a2(h, "m");
  function f() {
    let g6 = false, w4, m, v, y, b = {}, D4, x, C, E, S;
    for (y = 0; y < n.length; y++) D4 = n[y], x = D4[D4.length - 1], C = D4.substring(0, D4.length - 1), E = parseInt(C, 10), S = parseFloat(C), W5.test(C) && x === "w" ? ((w4 || m) && (g6 = true), E === 0 ? g6 = true : w4 = E) : uC.test(C) && x === "x" ? ((w4 || m || v) && (g6 = true), S < 0 ? g6 = true : m = S) : W5.test(C) && x === "h" ? ((v || m) && (g6 = true), E === 0 ? g6 = true : v = E) : g6 = true;
    if (!g6) b.source = { value: r, startOffset: c }, w4 && (b.width = { value: w4 }), m && (b.density = { value: m }), v && (b.height = { value: v }), p.push(b);
    else throw new Error(`Invalid srcset descriptor found in "${e6}" at "${D4}".`);
  }
  a2(f, "g");
}
function dC(e6) {
  if (e6.node.fullName === "srcset" && (e6.parent.fullName === "img" || e6.parent.fullName === "source")) return () => hC(Qt2(e6.node));
}
function hC(e6) {
  let t = pC(e6), r = fC.filter((p) => t.some((h) => Object.prototype.hasOwnProperty.call(h, p)));
  if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, o = Oh[n], i = t.map((p) => p.source.value), l = Math.max(...i.map((p) => p.length)), u = t.map((p) => p[n] ? String(p[n].value) : ""), c = u.map((p) => {
    let h = p.indexOf(".");
    return h === -1 ? p.length : h;
  }), d = Math.max(...c);
  return zi(Yn2([",", xe], i.map((p, h) => {
    let f = [p], g6 = u[h];
    if (g6) {
      let w4 = l - p.length + 1, m = d - c[h], v = " ".repeat(w4 + m);
      f.push(Ai(v, " "), g6 + o);
    }
    return f;
  })));
}
function gC(e6, t) {
  let { node: r } = e6, n = Qt2(e6.node).trim();
  if (r.fullName === "style" && !t.parentParser && !n.includes("{{")) return async (o) => zi(await o(n, { parser: "css", __isHTMLStyleAttribute: true }));
}
function vC(e6, t) {
  let { root: r } = e6;
  return Mu.has(r) || Mu.set(r, r.children.some((n) => Ph(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))), Mu.get(r);
}
function bC(e6, t, r) {
  let { node: n } = r, o = Qt2(n);
  return Dt2(`type T<${o}> = any`, e6, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, Kn2);
}
function wC(e6, t, { parseWithTs: r }) {
  return Dt2(`function _(${e6}) {}`, t, { parser: r ? "babel-ts" : "babel", __isVueBindings: true });
}
function yC(e6) {
  let t = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i, n = e6.trim();
  return t.test(n) || r.test(n);
}
async function DC(e6, t, r, n) {
  let o = Qt2(r.node), { left: i, operator: l, right: u } = xC(o), c = rc(r, n);
  return [Ae2(await Dt2(`function _(${i}) {}`, e6, { parser: c ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", l, " ", await Dt2(
    u,
    e6,
    { parser: c ? "__ts_expression" : "__js_expression" }
  )];
}
function xC(e6) {
  let t = /(.*?)\s+(in|of)\s+(.*)/s, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/, n = /^\(|\)$/g, o = e6.match(t);
  if (!o) return;
  let i = {};
  if (i.for = o[3].trim(), !i.for) return;
  let l = je2(false, o[1].trim(), n, ""), u = l.match(r);
  u ? (i.alias = l.replace(r, ""), i.iterator1 = u[1].trim(), u[2] && (i.iterator2 = u[2].trim())) : i.alias = l;
  let c = [i.alias, i.iterator1, i.iterator2];
  if (!c.some((d, p) => !d && (p === 0 || c.slice(p + 1).some(Boolean)))) return { left: c.filter(Boolean).join(","), operator: o[2], right: i.for };
}
function CC(e6, t) {
  if (t.parser !== "vue") return;
  let { node: r } = e6, n = r.fullName;
  if (n === "v-for") return DC;
  if (n === "generic" && Ph(r.parent, t)) return bC;
  let o = Qt2(r), i = rc(e6, t);
  if (Yx(r) || Kx(r, t)) return (l) => wC(o, l, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:")) return (l) => EC(o, l, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith("v-bind:")) return (l) => SC(o, l, { parseWithTs: i });
  if (n.startsWith("v-")) return (l) => Nh(o, l, { parseWithTs: i });
}
function EC(e6, t, { parseWithTs: r }) {
  return yC(e6) ? Nh(e6, t, { parseWithTs: r }) : Dt2(e6, t, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, Kn2);
}
function SC(e6, t, { parseWithTs: r }) {
  return Dt2(e6, t, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, Kn2);
}
function Nh(e6, t, { parseWithTs: r }) {
  return Dt2(e6, t, { parser: r ? "__ts_expression" : "__js_expression" }, Kn2);
}
function AC(e6, t) {
  let { node: r } = e6;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || t.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [r.rawName, "=", r.value];
    for (let n of [mC, gC, oC, RC, rC]) {
      let o = n(e6, t);
      if (o) return FC(o);
    }
  }
}
function FC(e6) {
  return async (t, r, n, o) => {
    let i = await e6(t, r, n, o);
    if (i) return i = Ju(i, (l) => typeof l == "string" ? je2(false, l, '"', "&quot;") : l), [n.node.rawName, '="', Ae2(i), '"'];
  };
}
function TC(e6) {
  return Array.isArray(e6) && e6.length > 0;
}
function Vi(e6) {
  return e6.sourceSpan.start.offset;
}
function qi(e6) {
  return e6.sourceSpan.end.offset;
}
function zu(e6, t) {
  return [e6.isSelfClosing ? "" : LC(e6, t), ca(e6, t)];
}
function LC(e6, t) {
  return e6.lastChild && ma(e6.lastChild) ? "" : [BC(e6, t), oc(e6, t)];
}
function ca(e6, t) {
  return (e6.next ? Br(e6.next) : ya2(e6.parent)) ? "" : [wa2(e6, t), Lr2(e6, t)];
}
function BC(e6, t) {
  return ya2(e6) ? wa2(e6.lastChild, t) : "";
}
function Lr2(e6, t) {
  return ma(e6) ? oc(e6.parent, t) : Wi(e6) ? ac(e6.next) : "";
}
function oc(e6, t) {
  if (Vh(!e6.isSelfClosing), qh(e6, t)) return "";
  switch (e6.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e6.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e6.rawName}`;
  }
}
function wa2(e6, t) {
  if (qh(e6, t)) return "";
  switch (e6.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (e6.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function qh(e6, t) {
  return !e6.isSelfClosing && !e6.endSourceSpan && (Ni(e6) || Rh(e6.parent, t));
}
function Br(e6) {
  return e6.prev && e6.prev.type !== "docType" && e6.type !== "angularControlFlowBlock" && !Je2(e6.prev) && e6.isLeadingSpaceSensitive && !e6.hasLeadingSpaces;
}
function ya2(e6) {
  var t;
  return ((t = e6.lastChild) == null ? void 0 : t.isTrailingSpaceSensitive) && !e6.lastChild.hasTrailingSpaces && !Je2(Qu(e6.lastChild)) && !Xn2(
    e6
  );
}
function ma(e6) {
  return !e6.next && !e6.hasTrailingSpaces && e6.isTrailingSpaceSensitive && Je2(Qu(e6));
}
function Wi(e6) {
  return e6.next && !Je2(e6.next) && Je2(e6) && e6.isTrailingSpaceSensitive && !e6.hasTrailingSpaces;
}
function IC(e6) {
  let t = e6.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return t ? t[1] ? t[1].split(/\s+/) : true : false;
}
function Ui(e6) {
  return !e6.prev && e6.isLeadingSpaceSensitive && !e6.hasLeadingSpaces;
}
function MC(e6, t, r) {
  var n;
  let { node: o } = e6;
  if (!nc(o.attrs)) return o.isSelfClosing ? " " : "";
  let i = ((n = o.prev) == null ? void 0 : n.type) === "comment" && IC(o.prev.value), l = typeof i == "boolean" ? () => i : Array.isArray(i) ? (h) => i.includes(h.rawName) : () => false, u = e6.map(({ node: h }) => l(h) ? lt2(t.originalText.slice(Vi(h), qi(h))) : r(), "attrs"), c = o.type === "element" && o.fullName === "script" && o.attrs.length === 1 && o.attrs[0].fullName === "src" && o.children.length === 0, d = t.singleAttributePerLine && o.attrs.length > 1 && !Zn2(o, t) ? J2 : xe, p = [Lt2([c ? " " : xe, Yn2(d, u)])];
  return o.firstChild && Ui(o.firstChild) || o.isSelfClosing && ya2(o.parent) || c ? p.push(o.isSelfClosing ? " " : "") : p.push(t.bracketSameLine ? o.isSelfClosing ? " " : "" : o.isSelfClosing ? xe : Re2), p;
}
function _C(e6) {
  return e6.firstChild && Ui(e6.firstChild) ? "" : ic(e6);
}
function Ou(e6, t, r) {
  let { node: n } = e6;
  return [pa(n, t), MC(e6, t, r), n.isSelfClosing ? "" : _C(n)];
}
function pa(e6, t) {
  return e6.prev && Wi(e6.prev) ? "" : [Ir(e6, t), ac(e6)];
}
function Ir(e6, t) {
  return Ui(e6) ? ic(e6.parent) : Br(e6) ? wa2(e6.prev, t) : "";
}
function ac(e6) {
  switch (e6.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e6.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return e6.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e6.condition) return `<!--[if ${e6.condition}]><!--><${e6.rawName}`;
    default:
      return `<${e6.rawName}`;
  }
}
function ic(e6) {
  switch (Vh(!e6.isSelfClosing), e6.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e6.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function $C(e6, t) {
  if (!e6.endSourceSpan) return "";
  let r = e6.startSourceSpan.end.offset;
  e6.firstChild && Ui(e6.firstChild) && (r -= ic(e6).length);
  let n = e6.endSourceSpan.start.offset;
  return e6.lastChild && ma(e6.lastChild) ? n += oc(e6, t).length : ya2(e6) && (n -= wa2(e6.lastChild, t).length), t.originalText.slice(r, n);
}
function PC(e6, t) {
  let { node: r } = e6;
  switch (r.type) {
    case "element":
      if (Tt2(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && ec(r, t)) {
        let n = V5(r, t);
        return n ? async (o, i) => {
          let l = Wh(r, t), u = /^\s*$/.test(l), c = "";
          return u || (c = await o(Sh(l), { parser: n, __embeddedInHtml: true }), u = c === ""), [Ir(r, t), Ae2(Ou(e6, t, i)), u ? "" : J2, c, u ? "" : J2, zu(r, t), Lr2(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (Tt2(r.parent)) {
        let n = V5(r.parent, t);
        if (n) return async (o) => {
          let i = n === "markdown" ? _h(r.value.replace(/^[^\S\n]*\n/, "")) : r.value, l = { parser: n, __embeddedInHtml: true };
          if (t.parser === "html" && n === "babel") {
            let u = "script", { attrMap: c } = r.parent;
            c && (c.type === "module" || c.type === "text/babel" && c["data-type"] === "module") && (u = "module"), l.__babelSourceType = u;
          }
          return [ga2, Ir(r, t), await o(i, l), Lr2(r, t)];
        };
      } else if (r.parent.type === "interpolation") return async (n) => {
        let o = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return t.parser === "angular" ? (o.parser = "__ng_interpolation", o.trailingComma = "none") : t.parser === "vue" ? o.parser = rc(e6, t) ? "__vue_ts_expression" : "__vue_expression" : o.parser = "__js_expression", [Lt2([xe, await n(r.value, o)]), r.parent.next && Br(r.parent.next) ? " " : xe];
      };
      break;
    case "attribute":
      return kC(e6, t);
    case "front-matter":
      return (n) => mx(r, n);
    case "angularControlFlowBlockParameters":
      return HC.has(e6.parent.name) ? vx : void 0;
  }
}
function da(e6) {
  if (la !== null && typeof la.property) {
    let t = la;
    return la = da.prototype = null, t;
  }
  return la = da.prototype = e6 ?? /* @__PURE__ */ Object.create(null), new da();
}
function NC(e6) {
  return da(e6);
}
function jC(e6, t = "type") {
  NC(e6);
  function r(n) {
    let o = n[t], i = e6[o];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${o}'.`), { node: n });
    return i;
  }
  return a2(r, "r"), r;
}
function XC(e6) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e6);
}
function YC(e6) {
  return `<!-- @format -->

` + e6;
}
function Uh(e6) {
  let t = qi(e6);
  return e6.type === "element" && !e6.endSourceSpan && nc(e6.children) ? Math.max(t, Uh(va2(false, e6.children, -1))) : t;
}
function sa2(e6, t, r) {
  let n = e6.node;
  if (Ni(n)) {
    let o = Uh(n);
    return [Ir(n, t), lt2(yt2.trimEnd(t.originalText.slice(Vi(n) + (n.prev && Wi(n.prev) ? ac(n).length : 0), o - (n.next && Br(n.next) ? wa2(
      n,
      t
    ).length : 0)))), Lr2(n, t)];
  }
  return r();
}
function xi(e6, t) {
  return Je2(e6) && Je2(t) ? e6.isTrailingSpaceSensitive ? e6.hasTrailingSpaces ? Iu(t) ? J2 : xe : "" : Iu(t) ? J2 : Re2 : Wi(e6) && (Ni(t) || t.firstChild || t.isSelfClosing || t.type === "element" && t.attrs.length > 0) || e6.type === "element" && e6.isSelfClosing && Br(t) ? "" : !t.isLeadingSpaceSensitive || Iu(t) || Br(t) && e6.lastChild && ma(e6.lastChild) && e6.lastChild.lastChild && ma(e6.lastChild.lastChild) ? J2 : t.hasLeadingSpaces ? xe : Re2;
}
function lc(e6, t, r) {
  let { node: n } = e6;
  if (Fh(n)) return [ga2, ...e6.map((i) => {
    let l = i.node, u = l.prev ? xi(l.prev, l) : "";
    return [u ? [u, Di(l.prev) ? J2 : ""] : "", sa2(i, t, r)];
  }, "children")];
  let o = n.children.map(() => Symbol(""));
  return e6.map((i, l) => {
    let u = i.node;
    if (Je2(u)) {
      if (u.prev && Je2(u.prev)) {
        let w4 = xi(u.prev, u);
        if (w4) return Di(u.prev) ? [J2, J2, sa2(i, t, r)] : [w4, sa2(i, t, r)];
      }
      return sa2(i, t, r);
    }
    let c = [], d = [], p = [], h = [], f = u.prev ? xi(u.prev, u) : "", g6 = u.next ? xi(u, u.next) : "";
    return f && (Di(u.prev) ? c.push(J2, J2) : f === J2 ? c.push(J2) : Je2(u.prev) ? d.push(f) : d.push(Ai("", Re2, { groupId: o[l - 1] }))), g6 && (Di(u) ? Je2(u.next) && h.push(J2, J2) : g6 === J2 ? Je2(u.next) && h.push(J2) : p.push(g6)), [
      ...c,
      Ae2([...d, Ae2([sa2(i, t, r), ...p], { id: o[l] })]),
      ...h
    ];
  }, "children");
}
function ZC(e6, t, r) {
  let { node: n } = e6, o = [];
  JC(e6) && o.push("} "), o.push("@", n.name), n.parameters && o.push(" (", Ae2(r("parameters")), ")"), o.push(" {");
  let i = Gh(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, o.push(Lt2([J2, lc(e6, t, r)])), i && o.push(J2, "}")) : i && o.push("}"), Ae2(o, { shouldBreak: true });
}
function Gh(e6) {
  var t, r;
  return !(((t = e6.next) == null ? void 0 : t.type) === "angularControlFlowBlock" && (r = KC.get(e6.name)) != null && r.has(e6.next.name));
}
function JC(e6) {
  let { previous: t } = e6;
  return (t == null ? void 0 : t.type) === "angularControlFlowBlock" && !Ni(t) && !Gh(t);
}
function QC(e6, t, r) {
  return [Lt2([Re2, Yn2([";", xe], e6.map(r, "children"))]), Re2];
}
function eE(e6, t, r) {
  let { node: n } = e6;
  return [pa(n, t), Ae2([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", Lt2([xe, Yn2(xe, e6.map(r, "cases"))])] : "", Re2]), ca(
    n,
    t
  )];
}
function tE(e6, t, r) {
  let { node: n } = e6;
  return [n.value, " {", Ae2([Lt2([Re2, e6.map(({ node: o }) => o.type === "text" && !yt2.trim(o.value) ? "" : r(), "expression")]), Re2]), "}"];
}
function rE(e6, t, r) {
  let { node: n } = e6;
  if (Rh(n, t)) return [Ir(n, t), Ae2(Ou(e6, t, r)), lt2(Wh(n, t)), ...zu(n, t), Lr2(n, t)];
  let o = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol(
    "element-attr-group-id"
  ), l = a2((p) => Ae2([Ae2(Ou(e6, t, r), { id: i }), p, zu(n, t)]), "a"), u = a2((p) => o ? XD(p, { groupId: i }) : (Tt2(n) || ji(n, t)) && n.parent.type === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? p : Lt2(p), "o"), c = a2(() => o ? Ai(Re2, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? xe : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? UD(Re2) : Re2, "u"), d = a2(() => (n.next ? Br(n.next) : ya2(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : o ? Ai(Re2, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? xe : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e6.ancestors.length - 1)}}$`).test(n.lastChild.value) ? "" : Re2, "p");
  return n.children.length === 0 ? l(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? xe : "") : l([
    Mx(n) ? ga2 : "",
    u([c(), lc(e6, t, r)]),
    d()
  ]);
}
function sc(e6) {
  return e6 >= 9 && e6 <= 32 || e6 == 160;
}
function Xh(e6) {
  return 48 <= e6 && e6 <= 57;
}
function uc(e6) {
  return e6 >= 97 && e6 <= 122 || e6 >= 65 && e6 <= 90;
}
function nE(e6) {
  return e6 >= 97 && e6 <= 102 || e6 >= 65 && e6 <= 70 || Xh(e6);
}
function Yh(e6) {
  return e6 === 10 || e6 === 13;
}
function U5(e6) {
  return 48 <= e6 && e6 <= 55;
}
function G5(e6) {
  return e6 === 39 || e6 === 34 || e6 === 96;
}
function aE(e6) {
  return e6.replace(oE, (...t) => t[1].toUpperCase());
}
function lE(e6, t) {
  for (let r of iE) r(e6, t);
  return e6;
}
function sE(e6) {
  e6.walk((t) => {
    if (t.type === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].type === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function uE(e6) {
  let t = a2((r) => {
    var n, o;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((o = r.firstChild) == null ? void 0 : o.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  }, "e");
  e6.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let o = r.children[n];
      if (!t(o)) continue;
      let i = o.prev, l = o.firstChild;
      r.removeChild(i), n--;
      let u = new V2(i.sourceSpan.start, l.sourceSpan.end), c = new V2(u.start, o.sourceSpan.end);
      o.condition = i.condition, o.sourceSpan = c, o.startSourceSpan = u, o.removeChild(l);
    }
  });
}
function cE(e6, t, r) {
  e6.walk((n) => {
    if (n.children) for (let o = 0; o < n.children.length; o++) {
      let i = n.children[o];
      if (i.type !== "text" && !t(i)) continue;
      i.type !== "text" && (i.type = "text", i.value = r(i));
      let l = i.prev;
      !l || l.type !== "text" || (l.value += i.value, l.sourceSpan = new V2(l.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), o--);
    }
  });
}
function pE(e6) {
  return cE(e6, (t) => t.type === "cdata", (t) => `<![CDATA[${t.value}]]>`);
}
function dE(e6) {
  let t = a2((r) => {
    var n, o;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !yt2.hasWhitespaceCharacter(
      r.children[0].value
    ) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((o = r.next) == null ? void 0 : o.type) === "text";
  }, "e");
  e6.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let o = r.children[n];
      if (!t(o)) continue;
      let i = o.prev, l = o.next;
      i.value += `<${o.rawName}>` + o.firstChild.value + `</${o.rawName}>` + l.value, i.sourceSpan = new V2(i.sourceSpan.start, l.sourceSpan.end), i.isTrailingSpaceSensitive = l.isTrailingSpaceSensitive, i.hasTrailingSpaces = l.hasTrailingSpaces, r.removeChild(o), n--, r.removeChild(
        l
      );
    }
  });
}
function fE(e6, t) {
  if (t.parser === "html") return;
  let r = /{{(.+?)}}/s;
  e6.walk((n) => {
    if (kx(n)) for (let o of n.children) {
      if (o.type !== "text") continue;
      let i = o.sourceSpan.start, l = null, u = o.value.split(r);
      for (let c = 0; c < u.length; c++, i = l) {
        let d = u[c];
        if (c % 2 === 0) {
          l = i.moveBy(d.length), d.length > 0 && n.insertChildBefore(o, { type: "text", value: d, sourceSpan: new V2(i, l) });
          continue;
        }
        l = i.moveBy(d.length + 4), n.insertChildBefore(o, { type: "interpolation", sourceSpan: new V2(i, l), children: d.length === 0 ? [] : [{ type: "text", value: d, sourceSpan: new V2(i.moveBy(2), l.moveBy(-2)) }] });
      }
      n.removeChild(o);
    }
  });
}
function hE(e6) {
  e6.walk((t) => {
    if (!t.children) return;
    if (t.children.length === 0 || t.children.length === 1 && t.children[0].type === "text" && yt2.trim(t.children[0].value).length === 0) {
      t.hasDanglingSpaces = t.children.length > 0, t.children = [];
      return;
    }
    let r = Tx(t), n = Ah(t);
    if (!r) for (let o = 0; o < t.children.length; o++) {
      let i = t.children[o];
      if (i.type !== "text") continue;
      let { leadingWhitespace: l, text: u, trailingWhitespace: c } = Ax(i.value), d = i.prev, p = i.next;
      u ? (i.value = u, i.sourceSpan = new V2(i.sourceSpan.start.moveBy(l.length), i.sourceSpan.end.moveBy(-c.length)), l && (d && (d.hasTrailingSpaces = true), i.hasLeadingSpaces = true), c && (i.hasTrailingSpaces = true, p && (p.hasLeadingSpaces = true))) : (t.removeChild(i), o--, (l || c) && (d && (d.hasTrailingSpaces = true), p && (p.hasLeadingSpaces = true)));
    }
    t.isWhitespaceSensitive = r, t.isIndentationSensitive = n;
  });
}
function mE(e6) {
  e6.walk((t) => {
    t.isSelfClosing = !t.children || t.type === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function gE(e6, t) {
  e6.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function vE(e6, t) {
  e6.walk((r) => {
    r.cssDisplay = Ux(r, t);
  });
}
function bE(e6, t) {
  e6.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Ix(r);
        return;
      }
      for (let o of n) o.isLeadingSpaceSensitive = Lx(o, t), o.isTrailingSpaceSensitive = Bx(o, t);
      for (let o = 0; o < n.length; o++) {
        let i = n[o];
        i.isLeadingSpaceSensitive = (o === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (o === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
function yE(e6, t, r) {
  let { node: n } = e6;
  switch (n.type) {
    case "front-matter":
      return lt2(n.raw);
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [Ae2(lc(e6, t, r)), J2];
    case "element":
    case "ieConditionalComment":
      return rE(e6, t, r);
    case "angularControlFlowBlock":
      return ZC(e6, t, r);
    case "angularControlFlowBlockParameters":
      return QC(e6, t, r);
    case "angularControlFlowBlockParameter":
      return yt2.trim(n.expression);
    case "angularIcuExpression":
      return eE(e6, t, r);
    case "angularIcuCase":
      return tE(e6, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [pa(n), ca(n)];
    case "interpolation":
      return [pa(n, t), ...e6.map(r, "children"), ca(n, t)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let i = /\n[^\S\n]*$/, l = i.test(n.value), u = l ? n.value.replace(i, "") : n.value;
        return [lt2(u), l ? J2 : ""];
      }
      let o = ex([Ir(n, t), ...Hh(n), Lr2(n, t)]);
      return Array.isArray(o) ? Ch(o) : o;
    }
    case "docType":
      return [Ae2([pa(n, t), " ", je2(false, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), ca(n, t)];
    case "comment":
      return [Ir(n, t), lt2(t.originalText.slice(Vi(n), qi(n))), Lr2(n, t)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let o = $h(n.value), i = rx(o, '"');
      return [n.rawName, "=", i, lt2(i === '"' ? je2(false, o, '"', "&quot;") : je2(false, o, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new ux(n, "HTML");
  }
}
function Gi(e6) {
  if (e6[0] != ":") return [null, e6];
  let t = e6.indexOf(":", 1);
  if (t === -1) throw new Error(`Unsupported format "${e6}" expecting ":namespace:name"`);
  return [e6.slice(1, t), e6.slice(t + 1)];
}
function th(e6) {
  return Gi(e6)[1] === "ng-container";
}
function rh(e6) {
  return Gi(e6)[1] === "ng-content";
}
function Si(e6) {
  return e6 === null ? null : Gi(e6)[0];
}
function ki(e6, t) {
  return e6 ? `:${e6}:${t}` : t;
}
function nh() {
  return Ri || (Ri = {}, Ci(Sr2.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Ci(Sr2.STYLE, ["*|style"]), Ci(Sr2.URL, [
    "*|formAction",
    "area|href",
    "area|ping",
    "audio|src",
    "a|href",
    "a|ping",
    "blockquote|cite",
    "body|background",
    "del|cite",
    "form|action",
    "img|src",
    "input|src",
    "ins|cite",
    "q|cite",
    "source|src",
    "track|src",
    "video|poster",
    "video|src"
  ]), Ci(Sr2.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), Ri;
}
function Ci(e6, t) {
  for (let r of t) Ri[r.toLowerCase()] = e6;
}
function ME(e6) {
  switch (e6) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
function ju(e6) {
  return ua || (oh = new P2({ canSelfClose: true }), ua = Object.assign(/* @__PURE__ */ Object.create(null), {
    base: new P2({ isVoid: true }),
    meta: new P2(
      { isVoid: true }
    ),
    area: new P2({ isVoid: true }),
    embed: new P2({ isVoid: true }),
    link: new P2({ isVoid: true }),
    img: new P2({ isVoid: true }),
    input: new P2(
      { isVoid: true }
    ),
    param: new P2({ isVoid: true }),
    hr: new P2({ isVoid: true }),
    br: new P2({ isVoid: true }),
    source: new P2({ isVoid: true }),
    track: new P2(
      { isVoid: true }
    ),
    wbr: new P2({ isVoid: true }),
    p: new P2({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }),
    thead: new P2({ closedByChildren: ["tbody", "tfoot"] }),
    tbody: new P2({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }),
    tfoot: new P2({ closedByChildren: ["tbody"], closedByParent: true }),
    tr: new P2({ closedByChildren: ["tr"], closedByParent: true }),
    td: new P2(
      { closedByChildren: ["td", "th"], closedByParent: true }
    ),
    th: new P2({ closedByChildren: ["td", "th"], closedByParent: true }),
    col: new P2({ isVoid: true }),
    svg: new P2({ implicitNamespacePrefix: "svg" }),
    foreignObject: new P2({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }),
    math: new P2({ implicitNamespacePrefix: "math" }),
    li: new P2({ closedByChildren: ["li"], closedByParent: true }),
    dt: new P2({ closedByChildren: [
      "dt",
      "dd"
    ] }),
    dd: new P2({ closedByChildren: ["dt", "dd"], closedByParent: true }),
    rb: new P2({
      closedByChildren: ["rb", "rt", "rtc", "rp"],
      closedByParent: true
    }),
    rt: new P2({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }),
    rtc: new P2({ closedByChildren: [
      "rb",
      "rtc",
      "rp"
    ], closedByParent: true }),
    rp: new P2({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }),
    optgroup: new P2({ closedByChildren: [
      "optgroup"
    ], closedByParent: true }),
    option: new P2({ closedByChildren: ["option", "optgroup"], closedByParent: true }),
    pre: new P2({ ignoreFirstLf: true }),
    listing: new P2({ ignoreFirstLf: true }),
    style: new P2({ contentType: it2.RAW_TEXT }),
    script: new P2({ contentType: it2.RAW_TEXT }),
    title: new P2(
      { contentType: { default: it2.ESCAPABLE_RAW_TEXT, svg: it2.PARSABLE_DATA } }
    ),
    textarea: new P2({ contentType: it2.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true })
  }), new IE().allKnownElementNames().forEach((t) => {
    !ua[t] && Si(t) === null && (ua[t] = new P2({ canSelfClose: false }));
  })), ua[e6] ?? oh;
}
function e22(e6, t, r = null) {
  let n = [], o = e6.visit ? (i) => e6.visit(i, r) || i.visit(e6, r) : (i) => i.visit(e6, r);
  return t.forEach((i) => {
    let l = o(i);
    l && n.push(l);
  }), n;
}
function WE(e6, t) {
  if (t != null && !(Array.isArray(t) && t.length == 2)) throw new Error(`Expected '${e6}' to be an array, [start, end].`);
  if (t != null) {
    let r = t[0], n = t[1];
    qE.forEach((o) => {
      if (o.test(r) || o.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
function XE(e6, t, r, n = {}) {
  let o = new ZE(new Kh(e6, t), r, n);
  return o.tokenize(), new GE(nS(o.tokens), o.errors, o.nonNormalizedIcuExpressions);
}
function bn2(e6) {
  return `Unexpected character "${e6 === 0 ? "EOF" : String.fromCharCode(e6)}"`;
}
function ih(e6) {
  return `Unknown entity "${e6}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function KE(e6, t) {
  return `Unable to parse entity "${t}" - ${e6} character reference entities must end with ";"`;
}
function De2(e6) {
  return !sc(e6) || e6 === 0;
}
function lh(e6) {
  return sc(e6) || e6 === 62 || e6 === 60 || e6 === 47 || e6 === 39 || e6 === 34 || e6 === 61 || e6 === 0;
}
function JE(e6) {
  return (e6 < 97 || 122 < e6) && (e6 < 65 || 90 < e6) && (e6 < 48 || e6 > 57);
}
function QE(e6) {
  return e6 === 59 || e6 === 0 || !nE(e6);
}
function eS(e6) {
  return e6 === 59 || e6 === 0 || !uc(e6);
}
function tS(e6) {
  return e6 !== 125;
}
function rS(e6, t) {
  return sh(e6) === sh(t);
}
function sh(e6) {
  return e6 >= 97 && e6 <= 122 ? e6 - 97 + 65 : e6;
}
function uh(e6) {
  return uc(e6) || Xh(e6) || e6 === 95;
}
function ch(e6) {
  return e6 !== 59 && De2(e6);
}
function nS(e6) {
  let t = [], r;
  for (let n = 0; n < e6.length; n++) {
    let o = e6[n];
    r && r.type === 5 && o.type === 5 || r && r.type === 16 && o.type === 16 ? (r.parts[0] += o.parts[0], r.sourceSpan.end = o.sourceSpan.end) : (r = o, t.push(r));
  }
  return t;
}
function ph(e6, t) {
  return e6.length > 0 && e6[e6.length - 1] === t;
}
function dh(e6, t) {
  return Ti[t] !== void 0 ? Ti[t] || e6 : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e6;
}
function fh(e6, t = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: o = false, getTagContentType: i, tokenizeAngularBlocks: l = false } = t;
  return uS().parse(e6, "angular-html-parser", {
    tokenizeExpansionForms: l,
    interpolationConfig: void 0,
    canSelfClose: r,
    allowHtmComponentClosingTags: n,
    tokenizeBlocks: l
  }, o, i);
}
function cS(e6, t) {
  let r = new SyntaxError(e6 + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
function fS(e6) {
  let t = e6.match(dS);
  if (!t) return { content: e6 };
  let { startDelimiter: r, language: n, value: o = "", endDelimiter: i } = t.groups, l = n.trim() || "yaml";
  if (r === "+++" && (l = "toml"), l !== "yaml" && r !== i) return { content: e6 };
  let [u] = t;
  return { frontMatter: { type: "front-matter", lang: l, value: o, startDelimiter: r, endDelimiter: i, raw: u.replace(/\n$/, "") }, content: je2(
    false,
    u,
    /[^\n]/g,
    " "
  ) + e6.slice(u.length) };
}
function gS(e6, t) {
  let r = e6.map(t);
  return r.some((n, o) => n !== e6[o]) ? r : e6;
}
function bS(e6, t) {
  if (e6.value) for (let { regex: r, parse: n } of vS) {
    let o = e6.value.match(r);
    if (o) return n(e6, t, o);
  }
  return null;
}
function wS(e6, t, r) {
  let [, n, o, i] = r, l = 4 + n.length, u = e6.sourceSpan.start.moveBy(l), c = u.moveBy(i.length), [d, p] = (() => {
    try {
      return [true, t(i, u).children];
    } catch {
      return [false, [{ type: "text", value: i, sourceSpan: new V2(u, c) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: d, children: p, condition: je2(false, o.trim(), /\s+/g, " "), sourceSpan: e6.sourceSpan, startSourceSpan: new V2(
    e6.sourceSpan.start,
    u
  ), endSourceSpan: new V2(c, e6.sourceSpan.end) };
}
function yS(e6, t, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: je2(false, n.trim(), /\s+/g, " "), sourceSpan: e6.sourceSpan };
}
function DS(e6) {
  return { type: "ieConditionalEndComment", sourceSpan: e6.sourceSpan };
}
function CS(e6) {
  if (e6.type === "block") {
    if (e6.name = je2(false, e6.name.toLowerCase(), /\s+/g, " ").trim(), e6.type = "angularControlFlowBlock", !nc(e6.parameters)) {
      delete e6.parameters;
      return;
    }
    for (let t of e6.parameters) t.type = "angularControlFlowBlockParameter";
    e6.parameters = { type: "angularControlFlowBlockParameters", children: e6.parameters, sourceSpan: new V2(e6.parameters[0].sourceSpan.start, va2(
      false,
      e6.parameters,
      -1
    ).sourceSpan.end) };
  }
}
function ES(e6) {
  (e6.type === "plural" || e6.type === "select") && (e6.clause = e6.type, e6.type = "angularIcuExpression"), e6.type === "expansionCase" && (e6.type = "angularIcuCase");
}
function n2(e6, t, r) {
  let {
    name: n,
    canSelfClose: o = true,
    normalizeTagName: i = false,
    normalizeAttributeName: l = false,
    allowHtmComponentClosingTags: u = false,
    isTagNameCaseSensitive: c = false,
    shouldParseAsRawText: d
  } = t, { rootNodes: p, errors: h } = fh(e6, {
    canSelfClose: o,
    allowHtmComponentClosingTags: u,
    isTagNameCaseSensitive: c,
    getTagContentType: d ? (...b) => d(...b) ? it2.RAW_TEXT : void 0 : void 0,
    tokenizeAngularBlocks: n === "angular" ? true : void 0
  });
  if (n === "vue") {
    if (p.some((C) => C.type === "docType" && C.value === "html" || C.type === "element" && C.name.toLowerCase() === "html")) return n2(
      e6,
      a22,
      r
    );
    let b, D4 = a2(() => b ?? (b = fh(e6, { canSelfClose: o, allowHtmComponentClosingTags: u, isTagNameCaseSensitive: c })), "y"), x = a2(
      (C) => D4().rootNodes.find(({ startSourceSpan: E }) => E && E.start.offset === C.startSourceSpan.start.offset) ?? C,
      "O"
    );
    for (let [C, E] of p.entries()) {
      let { endSourceSpan: S, startSourceSpan: R } = E;
      if (S === null) h = D4().errors, p[C] = x(E);
      else if (SS(E, r)) {
        let F6 = D4().errors.find((k6) => k6.span.start.offset > R.start.offset && k6.span.start.offset < S.end.offset);
        F6 && mh(F6), p[C] = x(E);
      }
    }
  }
  h.length > 0 && mh(h[0]);
  let f = a2((b) => {
    let D4 = b.name.startsWith(":") ? b.name.slice(1).split(":")[0] : null, x = b.nameSpan.toString(), C = D4 !== null && x.startsWith(`${D4}:`), E = C ? x.slice(D4.length + 1) : x;
    b.name = E, b.namespace = D4, b.hasExplicitNamespace = C;
  }, "g"), g6 = a2((b) => {
    switch (b.type) {
      case "element":
        f(b);
        for (let D4 of b.attrs) f(D4), D4.valueSpan ? (D4.value = D4.valueSpan.toString(), /["']/.test(D4.value[0]) && (D4.value = D4.value.slice(
          1,
          -1
        ))) : D4.value = null;
        break;
      case "comment":
        b.value = b.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        b.value = b.sourceSpan.toString();
        break;
    }
  }, "C"), w4 = a2((b, D4) => {
    let x = b.toLowerCase();
    return D4(x) ? x : b;
  }, "_"), m = a2((b) => {
    if (b.type === "element" && (i && (!b.namespace || b.namespace === b.tagDefinition.implicitNamespacePrefix || ha2(b)) && (b.name = w4(
      b.name,
      (D4) => xS.has(D4)
    )), l)) for (let D4 of b.attrs) D4.namespace || (D4.name = w4(D4.name, (x) => Pu.has(b.name) && (Pu.get("*").has(x) || Pu.get(
      b.name
    ).has(x))));
  }, "D"), v = a2((b) => {
    b.sourceSpan && b.endSourceSpan && (b.sourceSpan = new V2(b.sourceSpan.start, b.endSourceSpan.end));
  }, "I"), y = a2((b) => {
    if (b.type === "element") {
      let D4 = ju(c ? b.name : b.name.toLowerCase());
      !b.namespace || b.namespace === D4.implicitNamespacePrefix || ha2(b) ? b.tagDefinition = D4 : b.tagDefinition = ju("");
    }
  }, "B");
  return e22(new class extends jE {
    visitExpansionCase(b, D4) {
      n === "angular" && this.visitChildren(D4, (x) => {
        x(b.expression);
      });
    }
    visit(b) {
      g6(b), y(b), m(b), v(b);
    }
  }(), p), p;
}
function SS(e6, t) {
  var r;
  if (e6.type !== "element" || e6.name !== "template") return false;
  let n = (r = e6.attrs.find((o) => o.name === "lang")) == null ? void 0 : r.value;
  return !n || Oi(t, { language: n }) === "html";
}
function mh(e6) {
  let { msg: t, span: { start: r, end: n } } = e6;
  throw pS(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e6 });
}
function o2(e6, t, r = {}, n = true) {
  let { frontMatter: o, content: i } = n ? hS(e6) : { frontMatter: null, content: e6 }, l = new Kh(e6, r.filepath), u = new Nu(l, 0, 0, 0), c = u.moveBy(e6.length), d = { type: "root", sourceSpan: new V2(u, c), children: n2(i, t, r) };
  if (o) {
    let f = new Nu(l, 0, 0, 0), g6 = f.moveBy(o.raw.length);
    o.sourceSpan = new V2(f, g6), d.children.unshift(o);
  }
  let p = new mS(d), h = a2((f, g6) => {
    let { offset: w4 } = g6, m = je2(false, e6.slice(0, w4), /[^\n\r]/g, " "), v = o2(m + f, t, r, false);
    v.sourceSpan = new V2(g6, va2(false, v.children, -1).sourceSpan.end);
    let y = v.children[0];
    return y.length === w4 ? v.children.shift() : (y.sourceSpan = new V2(y.sourceSpan.start.moveBy(w4), y.sourceSpan.end), y.value = y.value.slice(
      w4
    )), v;
  }, "m");
  return p.walk((f) => {
    if (f.type === "comment") {
      let g6 = bS(f, h);
      g6 && f.parent.replaceChild(f, g6);
    }
    CS(f), ES(f);
  }), p;
}
function Xi(e6) {
  return { parse: a2((t, r) => o2(t, e6, r), "parse"), hasPragma: XC, astFormat: "html", locStart: Vi, locEnd: qi };
}
var PD;
var gh;
var vh;
var Yt2;
var zD;
var OD;
var bh;
var ND;
var je2;
var Vu;
var qu;
var Wu;
var Bi;
var Ii;
var Uu;
var fa;
var Mi;
var _i;
var $i;
var Gu;
var Xu;
var Mr2;
var Yu;
var Hi;
var wh;
var Ku;
var VD;
var wn2;
var WD;
var yh;
var Dh;
var Tr2;
var Zu;
var ga2;
var YD;
var KD;
var xe;
var Re2;
var J2;
var ZD;
var JD;
var va2;
var yi;
var N5;
var rx;
var at2;
var yn2;
var ox;
var ax;
var ix;
var lx;
var yt2;
var Dn;
var sx;
var ux;
var Pi;
var px;
var dx;
var fx;
var mx;
var vx;
var bx;
var Oi;
var Dx;
var xx;
var Cx;
var Ex;
var ha2;
var Rx;
var Sh;
var Ax;
var Xx;
var zh;
var Jx;
var Qx;
var eC;
var rC;
var oC;
var aC;
var iC;
var lC;
var sC;
var W5;
var uC;
var pC;
var Oh;
var fC;
var mC;
var Mu;
var rc;
var RC;
var kC;
var jh;
var Vh;
var nc;
var Wh;
var HC;
var zC;
var la;
var OC;
var VC;
var qC;
var WC;
var UC;
var GC;
var KC;
var oE;
var Rr2;
var Nu;
var xn2;
var Kh;
var Cn;
var V2;
var Fi;
var En2;
var Zh;
var iE;
var wE;
var DE;
var xE;
var CE;
var X5;
var Y5;
var EE;
var SE;
var Jh;
var oN;
var K5;
var Z5;
var J5;
var Q5;
var Sr2;
var eh;
var it2;
var Ri;
var Sn2;
var RE;
var AE;
var FE;
var kE;
var TE;
var LE;
var Qh;
var BE;
var Rn;
var IE;
var An;
var P2;
var oh;
var ua;
var Fn;
var Da2;
var kn;
var _E;
var Tn;
var $E;
var Ln;
var HE;
var Bn2;
var PE;
var In;
var zE;
var Mn;
var Kt2;
var _n;
var OE;
var $n2;
var NE;
var Hn2;
var vn2;
var Pn;
var ah;
var zn;
var jE;
var Ti;
var VE;
var qE;
var Ar2;
var UE;
var t2;
var On2;
var _u;
var Nn;
var GE;
var YE;
var Li;
var jn;
var $u;
var Vn2;
var ZE;
var Zt2;
var r2;
var Jt2;
var oS;
var qn2;
var cc;
var Fr2;
var Ze2;
var Wn2;
var aS;
var Un2;
var iS;
var kr2;
var lS;
var Gn2;
var sS;
var Hu;
var uS;
var pS;
var dS;
var hS;
var Ei;
var hh;
var wt2;
var mS;
var vS;
var Pu;
var xS;
var a22;
var RS;
var AS;
var FS;
var kS;
var TS;
var i2;
var l2 = A(() => {
  PD = Object.defineProperty, gh = a2((e6, t) => {
    for (var r in t) PD(e6, r, { get: t[r], enumerable: true });
  }, "Yr"), vh = a2((e6, t, r) => {
    if (!t.has(e6)) throw TypeError("Cannot " + r);
  }, "jr"), Yt2 = a2((e6, t, r) => (vh(e6, t, "read from private field"), r ? r.call(e6) : t.get(e6)), "Q"), zD = a2(
    (e6, t, r) => {
      if (t.has(e6)) throw TypeError("Cannot add the same private member more than once");
      t instanceof WeakSet ? t.add(e6) : t.set(e6, r);
    },
    "Kr"
  ), OD = a2((e6, t, r, n) => (vh(e6, t, "write to private field"), n ? n.call(e6, r) : t.set(e6, r), r), "Qr"), bh = {};
  gh(bh, { languages: a2(() => CE, "languages"), options: a2(() => SE, "options"), parsers: a2(
    () => Jh,
    "parsers"
  ), printers: a2(() => TS, "printers") });
  ND = a2((e6, t, r, n) => {
    if (!(e6 && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  }, "Zs"), je2 = ND, Vu = "string", qu = "array", Wu = "cursor", Bi = "indent", Ii = "align", Uu = "trim", fa = "group", Mi = "fill", _i = "if-break", $i = "indent-if-break", Gu = "line-suffix", Xu = "line-suffix-boundary", Mr2 = "line", Yu = "label", Hi = "break-parent", wh = /* @__PURE__ */ new Set(
    [Wu, Bi, Ii, Uu, fa, Mi, _i, $i, Gu, Xu, Mr2, Yu, Hi]
  );
  a2(jD, "ei");
  Ku = jD, VD = a2((e6) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e6), "ti");
  a2(qD, "ri");
  WD = (wn2 = class extends Error {
    constructor(t) {
      super(qD(t));
      __publicField(this, "name", "InvalidDocError");
      this.doc = t;
    }
  }, a2(wn2, "rr"), wn2), yh = WD, Dh = a2(() => {
  }, "Xr"), Tr2 = Dh, Zu = Dh;
  a2(Lt2, "L");
  a2(xh, "Jr");
  a2(Ae2, "E");
  a2(UD, "Zr");
  a2(GD, "en");
  a2(Ch, "Ct");
  a2(Ai, "me");
  a2(XD, "tn");
  ga2 = { type: Hi }, YD = { type: Mr2, hard: true }, KD = { type: Mr2, hard: true, literal: true }, xe = { type: Mr2 }, Re2 = { type: Mr2, soft: true }, J2 = [YD, ga2], ZD = [KD, ga2];
  a2(Yn2, "M");
  JD = a2((e6, t, r) => {
    if (!(e6 && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  }, "ii"), va2 = JD;
  a2(Ju, "St");
  a2(QD, "ai");
  a2(ex, "nn");
  a2(lt2, "T");
  yi = "'", N5 = '"';
  a2(tx, "oi");
  rx = tx;
  a2(nx, "nr");
  ox = (yn2 = class {
    constructor(t) {
      zD(this, at2, void 0), OD(this, at2, new Set(t));
    }
    getLeadingWhitespaceCount(t) {
      let r = Yt2(this, at2), n = 0;
      for (let o = 0; o < t.length && r.has(t.charAt(o)); o++) n++;
      return n;
    }
    getTrailingWhitespaceCount(t) {
      let r = Yt2(this, at2), n = 0;
      for (let o = t.length - 1; o >= 0 && r.has(t.charAt(o)); o--) n++;
      return n;
    }
    getLeadingWhitespace(t) {
      let r = this.getLeadingWhitespaceCount(t);
      return t.slice(0, r);
    }
    getTrailingWhitespace(t) {
      let r = this.getTrailingWhitespaceCount(t);
      return t.slice(t.length - r);
    }
    hasLeadingWhitespace(t) {
      return Yt2(this, at2).has(t.charAt(0));
    }
    hasTrailingWhitespace(t) {
      return Yt2(this, at2).has(va2(false, t, -1));
    }
    trimStart(t) {
      let r = this.getLeadingWhitespaceCount(t);
      return t.slice(r);
    }
    trimEnd(t) {
      let r = this.getTrailingWhitespaceCount(t);
      return t.slice(0, t.length - r);
    }
    trim(t) {
      return this.trimEnd(this.trimStart(t));
    }
    split(t, r = false) {
      let n = `[${nx([...Yt2(this, at2)].join(""))}]+`, o = new RegExp(r ? `(${n})` : n);
      return t.split(o);
    }
    hasWhitespaceCharacter(t) {
      let r = Yt2(this, at2);
      return Array.prototype.some.call(t, (n) => r.has(n));
    }
    hasNonWhitespaceCharacter(t) {
      let r = Yt2(this, at2);
      return Array.prototype.some.call(t, (n) => !r.has(n));
    }
    isWhitespaceOnly(t) {
      let r = Yt2(this, at2);
      return Array.prototype.every.call(t, (n) => r.has(n));
    }
  }, a2(yn2, "sr"), yn2);
  at2 = /* @__PURE__ */ new WeakMap();
  ax = ox, ix = ["	", `
`, "\f", "\r", " "], lx = new ax(ix), yt2 = lx, sx = (Dn = class extends Error {
    constructor(t, r, n = "type") {
      super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`);
      __publicField(this, "name", "UnexpectedNodeError");
      this.node = t;
    }
  }, a2(Dn, "ir"), Dn), ux = sx;
  a2(cx, "ci");
  Pi = cx, px = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]), dx = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
  a2(Eh, "ln");
  Eh.ignoredProperties = px;
  fx = Eh;
  a2(hx, "fi");
  mx = hx;
  a2(zi, "ge");
  a2(Kn2, "j");
  a2(Dt2, "x");
  a2(gx, "mi");
  vx = gx, bx = a2((e6) => String(e6).split(/[/\\]/).pop(), "gi");
  a2(j5, "fn");
  a2(wx, "di");
  a2(yx, "Ci");
  Oi = yx, Dx = "inline", xx = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", marquee: "inline-block", source: "block", track: "block", details: "block", summary: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, Cx = "normal", Ex = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
  a2(Sx, "Si");
  ha2 = Sx, Rx = a2((e6) => je2(false, e6, /^[\t\f\r ]*\n/g, ""), "_i"), Sh = a2((e6) => Rx(yt2.trimEnd(e6)), "ar"), Ax = a2((e6) => {
    let t = e6, r = yt2.getLeadingWhitespace(t);
    r && (t = t.slice(r.length));
    let n = yt2.getTrailingWhitespace(t);
    return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
  }, "Sn");
  a2(Rh, "Et");
  a2(Ni, "Se");
  a2(Fx, "Ei");
  a2(Je2, "R");
  a2(Tt2, "U");
  a2(kx, "_n");
  a2(Tx, "En");
  a2(Ah, "or");
  a2(Lx, "An");
  a2(Bx, "Dn");
  a2(Ix, "vn");
  a2(Di, "Qe");
  a2(Mx, "yn");
  a2(Fh, "ur");
  a2(Iu, "At");
  a2(_x, "Ai");
  a2(kh, "wn");
  a2(Th, "bn");
  a2(Lh, "Tn");
  a2(Bh, "xn");
  a2(Qu, "Dt");
  a2($x, "Di");
  a2(Ih, "kn");
  a2(Hx, "vi");
  a2(Px, "yi");
  a2(zx, "wi");
  a2(V5, "lr");
  a2(ba2, "Xe");
  a2(Ox, "bi");
  a2(Nx, "Ti");
  a2(jx, "xi");
  a2(Vx, "ki");
  a2(qx, "Bi");
  a2(Xn2, "Ce");
  a2(Wx, "Li");
  a2(Ux, "Bn");
  a2(Mh, "Ln");
  a2(Gx, "Fi");
  a2(_h, "cr");
  a2($h, "pr");
  a2(Qt2, "P");
  Xx = /* @__PURE__ */ new Set(["template", "style", "script"]);
  a2(ji, "Je");
  a2(Zn2, "_e");
  a2(ec, "vt");
  a2(Yx, "Fn");
  a2(Kx, "Pn");
  a2(Hh, "yt");
  a2(Ph, "wt");
  zh = /{{(.+?)}}/s;
  a2(Zx, "Nn");
  a2(tc, "fr");
  Jx = tc({ parser: "__ng_action" }), Qx = tc({ parser: "__ng_binding" }), eC = tc({ parser: "__ng_directive" });
  a2(tC, "$i");
  rC = tC;
  a2(nC, "Oi");
  oC = nC;
  a2(q5, "$n");
  aC = /^[ \t\n\r\u000c]+/, iC = /^[, \t\n\r\u000c]+/, lC = /^[^ \t\n\r\u000c]+/, sC = /[,]+$/, W5 = /^\d+$/, uC = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
  a2(cC, "Wi");
  pC = cC;
  a2(dC, "zi");
  Oh = { width: "w", height: "h", density: "x" }, fC = Object.keys(Oh);
  a2(hC, "Yi");
  mC = dC;
  a2(gC, "Vn");
  Mu = /* @__PURE__ */ new WeakMap();
  a2(vC, "ji");
  rc = vC;
  a2(bC, "Un");
  a2(wC, "Wn");
  a2(yC, "zn");
  a2(DC, "Gn");
  a2(xC, "Ki");
  a2(CC, "Qi");
  a2(EC, "Xi");
  a2(SC, "Ji");
  a2(Nh, "Yn");
  RC = CC;
  a2(AC, "Zi");
  a2(FC, "ea");
  kC = AC, jh = new Proxy(() => {
  }, { get: a2(() => jh, "get") }), Vh = jh;
  a2(TC, "ta");
  nc = TC;
  a2(Vi, "se");
  a2(qi, "ie");
  a2(zu, "Ze");
  a2(LC, "ra");
  a2(ca, "Ee");
  a2(BC, "na");
  a2(Lr2, "W");
  a2(oc, "bt");
  a2(wa2, "Ae");
  a2(qh, "Xn");
  a2(Br, "K");
  a2(ya2, "De");
  a2(ma, "ve");
  a2(Wi, "et");
  a2(IC, "sa");
  a2(Ui, "tt");
  a2(MC, "ia");
  a2(_C, "aa");
  a2(Ou, "rt");
  a2(pa, "ye");
  a2(Ir, "z");
  a2(ac, "Tt");
  a2(ic, "xt");
  a2($C, "oa");
  Wh = $C, HC = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
  a2(PC, "la");
  zC = PC, la = null;
  a2(da, "st");
  OC = 10;
  for (let e6 = 0; e6 <= OC; e6++) da();
  a2(NC, "dr");
  a2(jC, "pa");
  VC = jC, qC = {
    "front-matter": [],
    root: ["children"],
    element: ["attrs", "children"],
    ieConditionalComment: ["children"],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ["children"],
    text: ["children"],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: [
      "children",
      "parameters"
    ],
    angularControlFlowBlockParameters: ["children"],
    angularControlFlowBlockParameter: [],
    angularIcuExpression: ["cases"],
    angularIcuCase: ["expression"]
  }, WC = qC, UC = VC(WC), GC = UC;
  a2(XC, "rs");
  a2(YC, "ns");
  KC = /* @__PURE__ */ new Map([
    ["if", /* @__PURE__ */ new Set(["else if", "else"])],
    ["else if", /* @__PURE__ */ new Set(["else if", "else"])],
    ["for", /* @__PURE__ */ new Set(["empty"])],
    ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])],
    ["placeholder", /* @__PURE__ */ new Set(
      ["placeholder", "error", "loading"]
    )],
    ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])],
    ["loading", /* @__PURE__ */ new Set(
      ["placeholder", "error", "loading"]
    )]
  ]);
  a2(Uh, "is");
  a2(sa2, "it");
  a2(xi, "Bt");
  a2(lc, "qe");
  a2(ZC, "as");
  a2(Gh, "os");
  a2(JC, "ma");
  a2(QC, "us");
  a2(eE, "ls");
  a2(tE, "cs");
  a2(rE, "ps");
  a2(sc, "Lt");
  a2(Xh, "Cr");
  a2(uc, "Ft");
  a2(nE, "hs");
  a2(Yh, "Sr");
  a2(U5, "_r");
  a2(G5, "Er");
  oE = /-+([a-z0-9])/g;
  a2(aE, "ms");
  Nu = (Rr2 = class {
    constructor(t, r, n, o) {
      this.file = t, this.offset = r, this.line = n, this.col = o;
    }
    toString() {
      return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(t) {
      let r = this.file.content, n = r.length, o = this.offset, i = this.line, l = this.col;
      for (; o > 0 && t < 0; ) if (o--, t++, r.charCodeAt(o) == 10) {
        i--;
        let u = r.substring(0, o - 1).lastIndexOf(`
`);
        l = u > 0 ? o - u : o;
      } else l--;
      for (; o < n && t > 0; ) {
        let u = r.charCodeAt(o);
        o++, t--, u == 10 ? (i++, l = 0) : l++;
      }
      return new Rr2(this.file, o, i, l);
    }
    getContext(t, r) {
      let n = this.file.content, o = this.offset;
      if (o != null) {
        o > n.length - 1 && (o = n.length - 1);
        let i = o, l = 0, u = 0;
        for (; l < t && o > 0 && (o--, l++, !(n[o] == `
` && ++u == r)); ) ;
        for (l = 0, u = 0; l < t && i < n.length - 1 && (i++, l++, !(n[i] == `
` && ++u == r)); ) ;
        return { before: n.substring(o, this.offset), after: n.substring(this.offset, i + 1) };
      }
      return null;
    }
  }, a2(Rr2, "t"), Rr2), Kh = (xn2 = class {
    constructor(t, r) {
      this.content = t, this.url = r;
    }
  }, a2(xn2, "we"), xn2), V2 = (Cn = class {
    constructor(t, r, n = t, o = null) {
      this.start = t, this.end = r, this.fullStart = n, this.details = o;
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  }, a2(Cn, "f"), Cn);
  (function(e6) {
    e6[e6.WARNING = 0] = "WARNING", e6[e6.ERROR = 1] = "ERROR";
  })(Fi || (Fi = {}));
  Zh = (En2 = class {
    constructor(t, r, n = Fi.ERROR) {
      this.span = t, this.msg = r, this.level = n;
    }
    contextualMessage() {
      let t = this.span.start.getContext(100, 3);
      return t ? `${this.msg} ("${t.before}[${Fi[this.level]} ->]${t.after}")` : this.msg;
    }
    toString() {
      let t = this.span.details ? `, ${this.span.details}` : "";
      return `${this.contextualMessage()}: ${this.span.start}${t}`;
    }
  }, a2(En2, "Ve"), En2), iE = [sE, uE, pE, fE, hE, vE, mE, gE, bE, dE];
  a2(lE, "Ca");
  a2(sE, "Sa");
  a2(uE, "_a");
  a2(cE, "Ea");
  a2(pE, "Aa");
  a2(dE, "Da");
  a2(fE, "va");
  a2(hE, "ya");
  a2(mE, "wa");
  a2(gE, "ba");
  a2(vE, "Ta");
  a2(bE, "xa");
  wE = lE;
  a2(yE, "ka");
  DE = { preprocess: wE, print: yE, insertPragma: YC, massageAstNode: fx, embed: zC, getVisitorKeys: GC }, xE = DE, CE = [
    {
      linguistLanguageId: 146,
      name: "Angular",
      type: "markup",
      tmScope: "text.html.basic",
      aceMode: "html",
      codemirrorMode: "htmlmixed",
      codemirrorMimeType: "text/html",
      color: "#e34c26",
      aliases: ["xhtml"],
      extensions: [".component.html"],
      parsers: ["angular"],
      vscodeLanguageIds: ["html"],
      filenames: []
    },
    { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: [
      "html"
    ], vscodeLanguageIds: ["html"] },
    { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: [
      "lwc"
    ], vscodeLanguageIds: ["html"], filenames: [] },
    { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [
      ".vue"
    ], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }
  ], X5 = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: {
    category: "Common",
    type: "choice",
    default: "preserve",
    description: "How to wrap prose.",
    choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }]
  }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } }, Y5 = "HTML", EE = { bracketSameLine: X5.bracketSameLine, htmlWhitespaceSensitivity: {
    category: Y5,
    type: "choice",
    default: "css",
    description: "How to handle whitespaces in HTML.",
    choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }]
  }, singleAttributePerLine: X5.singleAttributePerLine, vueIndentScriptAndStyle: { category: Y5, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } }, SE = EE, Jh = {};
  gh(Jh, {
    angular: a2(() => AS, "angular"),
    html: a2(() => RS, "html"),
    lwc: a2(() => kS, "lwc"),
    vue: a2(() => FS, "vue")
  });
  oN = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
  (function(e6) {
    e6[e6.Emulated = 0] = "Emulated", e6[e6.None = 2] = "None", e6[e6.ShadowDom = 3] = "ShadowDom";
  })(K5 || (K5 = {}));
  (function(e6) {
    e6[e6.OnPush = 0] = "OnPush", e6[e6.Default = 1] = "Default";
  })(Z5 || (Z5 = {}));
  J5 = { name: "custom-elements" }, Q5 = { name: "no-errors-schema" };
  (function(e6) {
    e6[e6.NONE = 0] = "NONE", e6[e6.HTML = 1] = "HTML", e6[e6.STYLE = 2] = "STYLE", e6[e6.SCRIPT = 3] = "SCRIPT", e6[e6.URL = 4] = "URL", e6[e6.RESOURCE_URL = 5] = "RESOURCE_URL";
  })(Sr2 || (Sr2 = {}));
  (function(e6) {
    e6[e6.Error = 0] = "Error", e6[e6.Warning = 1] = "Warning", e6[e6.Ignore = 2] = "Ignore";
  })(eh || (eh = {}));
  (function(e6) {
    e6[e6.RAW_TEXT = 0] = "RAW_TEXT", e6[e6.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e6[e6.PARSABLE_DATA = 2] = "PARSABLE_DATA";
  })(it2 || (it2 = {}));
  a2(Gi, "at");
  a2(th, "yr");
  a2(rh, "wr");
  a2(Si, "Ue");
  a2(ki, "We");
  a2(nh, "br");
  a2(Ci, "Nt");
  RE = (Sn2 = class {
  }, a2(Sn2, "Rt"), Sn2), AE = "boolean", FE = "number", kE = "string", TE = "object", LE = [
    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":svg:graphics^:svg:|",
    ":svg:animation^:svg:|*begin,*end,*repeat",
    ":svg:geometry^:svg:|",
    ":svg:componentTransferFunction^:svg:|",
    ":svg:gradient^:svg:|",
    ":svg:textContent^:svg:graphics|",
    ":svg:textPositioning^:svg:textContent|",
    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
    "audio^media|",
    "br^[HTMLElement]|clear",
    "base^[HTMLElement]|href,target",
    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
    "canvas^[HTMLElement]|#height,#width",
    "content^[HTMLElement]|select",
    "dl^[HTMLElement]|!compact",
    "data^[HTMLElement]|value",
    "datalist^[HTMLElement]|",
    "details^[HTMLElement]|!open",
    "dialog^[HTMLElement]|!open,returnValue",
    "dir^[HTMLElement]|!compact",
    "div^[HTMLElement]|align",
    "embed^[HTMLElement]|align,height,name,src,type,width",
    "fieldset^[HTMLElement]|!disabled,name",
    "font^[HTMLElement]|color,face,size",
    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
    "hr^[HTMLElement]|align,color,!noShade,size,width",
    "head^[HTMLElement]|",
    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
    "html^[HTMLElement]|version",
    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
    "li^[HTMLElement]|type,#value",
    "label^[HTMLElement]|htmlFor",
    "legend^[HTMLElement]|align",
    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
    "map^[HTMLElement]|name",
    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
    "menu^[HTMLElement]|!compact",
    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
    "ins,del^[HTMLElement]|cite,dateTime",
    "ol^[HTMLElement]|!compact,!reversed,#start,type",
    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
    "optgroup^[HTMLElement]|!disabled,label",
    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
    "p^[HTMLElement]|align",
    "param^[HTMLElement]|name,type,value,valueType",
    "picture^[HTMLElement]|",
    "pre^[HTMLElement]|#width",
    "progress^[HTMLElement]|#max,#value",
    "q,blockquote,cite^[HTMLElement]|",
    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
    "slot^[HTMLElement]|name",
    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
    "span^[HTMLElement]|",
    "style^[HTMLElement]|!disabled,media,type",
    "caption^[HTMLElement]|align",
    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
    "template^[HTMLElement]|",
    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
    "time^[HTMLElement]|dateTime",
    "title^[HTMLElement]|text",
    "track^[HTMLElement]|!default,kind,label,src,srclang",
    "ul^[HTMLElement]|!compact,type",
    "unknown^[HTMLElement]|",
    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
    ":svg:a^:svg:graphics|",
    ":svg:animate^:svg:animation|",
    ":svg:animateMotion^:svg:animation|",
    ":svg:animateTransform^:svg:animation|",
    ":svg:circle^:svg:geometry|",
    ":svg:clipPath^:svg:graphics|",
    ":svg:defs^:svg:graphics|",
    ":svg:desc^:svg:|",
    ":svg:discard^:svg:|",
    ":svg:ellipse^:svg:geometry|",
    ":svg:feBlend^:svg:|",
    ":svg:feColorMatrix^:svg:|",
    ":svg:feComponentTransfer^:svg:|",
    ":svg:feComposite^:svg:|",
    ":svg:feConvolveMatrix^:svg:|",
    ":svg:feDiffuseLighting^:svg:|",
    ":svg:feDisplacementMap^:svg:|",
    ":svg:feDistantLight^:svg:|",
    ":svg:feDropShadow^:svg:|",
    ":svg:feFlood^:svg:|",
    ":svg:feFuncA^:svg:componentTransferFunction|",
    ":svg:feFuncB^:svg:componentTransferFunction|",
    ":svg:feFuncG^:svg:componentTransferFunction|",
    ":svg:feFuncR^:svg:componentTransferFunction|",
    ":svg:feGaussianBlur^:svg:|",
    ":svg:feImage^:svg:|",
    ":svg:feMerge^:svg:|",
    ":svg:feMergeNode^:svg:|",
    ":svg:feMorphology^:svg:|",
    ":svg:feOffset^:svg:|",
    ":svg:fePointLight^:svg:|",
    ":svg:feSpecularLighting^:svg:|",
    ":svg:feSpotLight^:svg:|",
    ":svg:feTile^:svg:|",
    ":svg:feTurbulence^:svg:|",
    ":svg:filter^:svg:|",
    ":svg:foreignObject^:svg:graphics|",
    ":svg:g^:svg:graphics|",
    ":svg:image^:svg:graphics|decoding",
    ":svg:line^:svg:geometry|",
    ":svg:linearGradient^:svg:gradient|",
    ":svg:mpath^:svg:|",
    ":svg:marker^:svg:|",
    ":svg:mask^:svg:|",
    ":svg:metadata^:svg:|",
    ":svg:path^:svg:geometry|",
    ":svg:pattern^:svg:|",
    ":svg:polygon^:svg:geometry|",
    ":svg:polyline^:svg:geometry|",
    ":svg:radialGradient^:svg:gradient|",
    ":svg:rect^:svg:geometry|",
    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
    ":svg:script^:svg:|type",
    ":svg:set^:svg:animation|",
    ":svg:stop^:svg:|",
    ":svg:style^:svg:|!disabled,media,title,type",
    ":svg:switch^:svg:graphics|",
    ":svg:symbol^:svg:|",
    ":svg:tspan^:svg:textPositioning|",
    ":svg:text^:svg:textPositioning|",
    ":svg:textPath^:svg:textContent|",
    ":svg:title^:svg:|",
    ":svg:use^:svg:graphics|",
    ":svg:view^:svg:|#zoomAndPan",
    "data^[HTMLElement]|value",
    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
    "summary^[HTMLElement]|",
    "time^[HTMLElement]|dateTime",
    ":svg:cursor^:svg:|"
  ], Qh = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })), BE = Array.from(Qh).reduce((e6, [
    t,
    r
  ]) => (e6.set(t, r), e6), /* @__PURE__ */ new Map()), IE = (Rn = class extends RE {
    constructor() {
      super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), LE.forEach((t) => {
        let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [o, i] = t.split("|"), l = i.split(","), [u, c] = o.split("^");
        u.split(",").forEach((p) => {
          this._schema.set(p.toLowerCase(), r), this._eventSchema.set(p.toLowerCase(), n);
        });
        let d = c && this._schema.get(c.toLowerCase());
        if (d) {
          for (let [p, h] of d) r.set(p, h);
          for (let p of this._eventSchema.get(c.toLowerCase())) n.add(p);
        }
        l.forEach((p) => {
          if (p.length > 0) switch (p[0]) {
            case "*":
              n.add(p.substring(1));
              break;
            case "!":
              r.set(p.substring(1), AE);
              break;
            case "#":
              r.set(p.substring(1), FE);
              break;
            case "%":
              r.set(p.substring(1), TE);
              break;
            default:
              r.set(p, kE);
          }
        });
      });
    }
    hasProperty(t, r, n) {
      if (n.some((o) => o.name === Q5.name)) return true;
      if (t.indexOf("-") > -1) {
        if (th(t) || rh(t)) return false;
        if (n.some((o) => o.name === J5.name)) return true;
      }
      return (this._schema.get(t.toLowerCase()) || this._schema.get("unknown")).has(r);
    }
    hasElement(t, r) {
      return r.some((n) => n.name === Q5.name) || t.indexOf("-") > -1 && (th(t) || rh(t) || r.some((n) => n.name === J5.name)) ? true : this._schema.has(t.toLowerCase());
    }
    securityContext(t, r, n) {
      n && (r = this.getMappedPropName(r)), t = t.toLowerCase(), r = r.toLowerCase();
      let o = nh()[t + "|" + r];
      return o || (o = nh()["*|" + r], o || Sr2.NONE);
    }
    getMappedPropName(t) {
      return Qh.get(t) ?? t;
    }
    getDefaultComponentElementName() {
      return "ng-component";
    }
    validateProperty(t) {
      return t.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${t}' is disallowed for security reasons, please use (${t.slice(2)})=...
If '${t}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
    }
    validateAttribute(t) {
      return t.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${t}' is disallowed for security reasons, please use (${t.slice(2)})=...` } : { error: false };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(t) {
      let r = this._schema.get(t.toLowerCase()) || this._schema.get("unknown");
      return Array.from(r.keys()).map((n) => BE.get(n) ?? n);
    }
    allKnownEventsOfElement(t) {
      return Array.from(this._eventSchema.get(t.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(t) {
      return aE(t);
    }
    normalizeAnimationStyleValue(t, r, n) {
      let o = "", i = n.toString().trim(), l = null;
      if (ME(t) && n !== 0 && n !== "0") if (typeof n == "number") o = "px";
      else {
        let u = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
        u && u[1].length == 0 && (l = `Please provide a CSS unit value for ${r}:${n}`);
      }
      return { error: l, value: i + o };
    }
  }, a2(Rn, "$t"), Rn);
  a2(ME, "Oa");
  P2 = (An = class {
    constructor({
      closedByChildren: t,
      implicitNamespacePrefix: r,
      contentType: n = it2.PARSABLE_DATA,
      closedByParent: o = false,
      isVoid: i = false,
      ignoreFirstLf: l = false,
      preventNamespaceInheritance: u = false,
      canSelfClose: c = false
    } = {}) {
      this.closedByChildren = {}, this.closedByParent = false, t && t.length > 0 && t.forEach((d) => this.closedByChildren[d] = true), this.isVoid = i, this.closedByParent = o || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = l, this.preventNamespaceInheritance = u, this.canSelfClose = c ?? i;
    }
    isClosedByChild(t) {
      return this.isVoid || t.toLowerCase() in this.closedByChildren;
    }
    getContentType(t) {
      return typeof this.contentType == "object" ? (t === void 0 ? void 0 : this.contentType[t]) ?? this.contentType.default : this.contentType;
    }
  }, a2(An, "h"), An);
  a2(ju, "ze");
  Da2 = (Fn = class {
    constructor(t, r) {
      this.sourceSpan = t, this.i18n = r;
    }
  }, a2(Fn, "be"), Fn), _E = (kn = class extends Da2 {
    constructor(t, r, n, o) {
      super(r, o), this.value = t, this.tokens = n, this.type = "text";
    }
    visit(t, r) {
      return t.visitText(this, r);
    }
  }, a2(kn, "Ot"), kn), $E = (Tn = class extends Da2 {
    constructor(t, r, n, o) {
      super(r, o), this.value = t, this.tokens = n, this.type = "cdata";
    }
    visit(t, r) {
      return t.visitCdata(this, r);
    }
  }, a2(Tn, "Mt"), Tn), HE = (Ln = class extends Da2 {
    constructor(t, r, n, o, i, l) {
      super(o, l), this.switchValue = t, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
    }
    visit(t, r) {
      return t.visitExpansion(this, r);
    }
  }, a2(Ln, "qt"), Ln), PE = (Bn2 = class {
    constructor(t, r, n, o, i) {
      this.value = t, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = o, this.expSourceSpan = i, this.type = "expansionCase";
    }
    visit(t, r) {
      return t.visitExpansionCase(this, r);
    }
  }, a2(Bn2, "Ht"), Bn2), zE = (In = class extends Da2 {
    constructor(t, r, n, o, i, l, u) {
      super(n, u), this.name = t, this.value = r, this.keySpan = o, this.valueSpan = i, this.valueTokens = l, this.type = "attribute";
    }
    visit(t, r) {
      return t.visitAttribute(this, r);
    }
    get nameSpan() {
      return this.keySpan;
    }
  }, a2(In, "Vt"), In), Kt2 = (Mn = class extends Da2 {
    constructor(t, r, n, o, i, l = null, u = null, c) {
      super(o, c), this.name = t, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = l, this.nameSpan = u, this.type = "element";
    }
    visit(t, r) {
      return t.visitElement(this, r);
    }
  }, a2(Mn, "G"), Mn), OE = (_n = class {
    constructor(t, r) {
      this.value = t, this.sourceSpan = r, this.type = "comment";
    }
    visit(t, r) {
      return t.visitComment(this, r);
    }
  }, a2(_n, "Ut"), _n), NE = ($n2 = class {
    constructor(t, r) {
      this.value = t, this.sourceSpan = r, this.type = "docType";
    }
    visit(t, r) {
      return t.visitDocType(this, r);
    }
  }, a2($n2, "Wt"), $n2), vn2 = (Hn2 = class {
    constructor(t, r, n, o, i, l = null) {
      this.name = t, this.parameters = r, this.children = n, this.sourceSpan = o, this.startSourceSpan = i, this.endSourceSpan = l, this.type = "block";
    }
    visit(t, r) {
      return t.visitBlock(this, r);
    }
  }, a2(Hn2, "Z"), Hn2), ah = (Pn = class {
    constructor(t, r) {
      this.expression = t, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
    }
    visit(t, r) {
      return t.visitBlockParameter(this, r);
    }
  }, a2(Pn, "ut"), Pn);
  a2(e22, "zt");
  jE = (zn = class {
    constructor() {
    }
    visitElement(t, r) {
      this.visitChildren(r, (n) => {
        n(t.attrs), n(t.children);
      });
    }
    visitAttribute(t, r) {
    }
    visitText(t, r) {
    }
    visitCdata(t, r) {
    }
    visitComment(t, r) {
    }
    visitDocType(t, r) {
    }
    visitExpansion(t, r) {
      return this.visitChildren(r, (n) => {
        n(t.cases);
      });
    }
    visitExpansionCase(t, r) {
    }
    visitBlock(t, r) {
      this.visitChildren(r, (n) => {
        n(t.parameters), n(t.children);
      });
    }
    visitBlockParameter(t, r) {
    }
    visitChildren(t, r) {
      let n = [], o = this;
      function i(l) {
        l && n.push(e22(o, l, t));
      }
      return a2(i, "i"), r(i), Array.prototype.concat.apply([], n);
    }
  }, a2(zn, "lt"), zn), Ti = {
    AElig: "Æ",
    AMP: "&",
    amp: "&",
    Aacute: "Á",
    Abreve: "Ă",
    Acirc: "Â",
    Acy: "А",
    Afr: "𝔄",
    Agrave: "À",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "𝔸",
    ApplyFunction: "⁡",
    af: "⁡",
    Aring: "Å",
    angst: "Å",
    Ascr: "𝒜",
    Assign: "≔",
    colone: "≔",
    coloneq: "≔",
    Atilde: "Ã",
    Auml: "Ä",
    Backslash: "∖",
    setminus: "∖",
    setmn: "∖",
    smallsetminus: "∖",
    ssetmn: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    doublebarwedge: "⌆",
    Bcy: "Б",
    Because: "∵",
    becaus: "∵",
    because: "∵",
    Bernoullis: "ℬ",
    Bscr: "ℬ",
    bernou: "ℬ",
    Beta: "Β",
    Bfr: "𝔅",
    Bopf: "𝔹",
    Breve: "˘",
    breve: "˘",
    Bumpeq: "≎",
    HumpDownHump: "≎",
    bump: "≎",
    CHcy: "Ч",
    COPY: "©",
    copy: "©",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    DD: "ⅅ",
    Cayleys: "ℭ",
    Cfr: "ℭ",
    Ccaron: "Č",
    Ccedil: "Ç",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "¸",
    cedil: "¸",
    CenterDot: "·",
    centerdot: "·",
    middot: "·",
    Chi: "Χ",
    CircleDot: "⊙",
    odot: "⊙",
    CircleMinus: "⊖",
    ominus: "⊖",
    CirclePlus: "⊕",
    oplus: "⊕",
    CircleTimes: "⊗",
    otimes: "⊗",
    ClockwiseContourIntegral: "∲",
    cwconint: "∲",
    CloseCurlyDoubleQuote: "”",
    rdquo: "”",
    rdquor: "”",
    CloseCurlyQuote: "’",
    rsquo: "’",
    rsquor: "’",
    Colon: "∷",
    Proportion: "∷",
    Colone: "⩴",
    Congruent: "≡",
    equiv: "≡",
    Conint: "∯",
    DoubleContourIntegral: "∯",
    ContourIntegral: "∮",
    conint: "∮",
    oint: "∮",
    Copf: "ℂ",
    complexes: "ℂ",
    Coproduct: "∐",
    coprod: "∐",
    CounterClockwiseContourIntegral: "∳",
    awconint: "∳",
    Cross: "⨯",
    Cscr: "𝒞",
    Cup: "⋓",
    CupCap: "≍",
    asympeq: "≍",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    ddagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    DoubleLeftTee: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    nabla: "∇",
    Delta: "Δ",
    Dfr: "𝔇",
    DiacriticalAcute: "´",
    acute: "´",
    DiacriticalDot: "˙",
    dot: "˙",
    DiacriticalDoubleAcute: "˝",
    dblac: "˝",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "˜",
    tilde: "˜",
    Diamond: "⋄",
    diam: "⋄",
    diamond: "⋄",
    DifferentialD: "ⅆ",
    dd: "ⅆ",
    Dopf: "𝔻",
    Dot: "¨",
    DoubleDot: "¨",
    die: "¨",
    uml: "¨",
    DotDot: "⃜",
    DotEqual: "≐",
    doteq: "≐",
    esdot: "≐",
    DoubleDownArrow: "⇓",
    Downarrow: "⇓",
    dArr: "⇓",
    DoubleLeftArrow: "⇐",
    Leftarrow: "⇐",
    lArr: "⇐",
    DoubleLeftRightArrow: "⇔",
    Leftrightarrow: "⇔",
    hArr: "⇔",
    iff: "⇔",
    DoubleLongLeftArrow: "⟸",
    Longleftarrow: "⟸",
    xlArr: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    Longleftrightarrow: "⟺",
    xhArr: "⟺",
    DoubleLongRightArrow: "⟹",
    Longrightarrow: "⟹",
    xrArr: "⟹",
    DoubleRightArrow: "⇒",
    Implies: "⇒",
    Rightarrow: "⇒",
    rArr: "⇒",
    DoubleRightTee: "⊨",
    vDash: "⊨",
    DoubleUpArrow: "⇑",
    Uparrow: "⇑",
    uArr: "⇑",
    DoubleUpDownArrow: "⇕",
    Updownarrow: "⇕",
    vArr: "⇕",
    DoubleVerticalBar: "∥",
    par: "∥",
    parallel: "∥",
    shortparallel: "∥",
    spar: "∥",
    DownArrow: "↓",
    ShortDownArrow: "↓",
    darr: "↓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    duarr: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    leftharpoondown: "↽",
    lhard: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    rhard: "⇁",
    rightharpoondown: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    top: "⊤",
    DownTeeArrow: "↧",
    mapstodown: "↧",
    Dscr: "𝒟",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "Ð",
    Eacute: "É",
    Ecaron: "Ě",
    Ecirc: "Ê",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "𝔈",
    Egrave: "È",
    Element: "∈",
    in: "∈",
    isin: "∈",
    isinv: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "𝔼",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    eqsim: "≂",
    esim: "≂",
    Equilibrium: "⇌",
    rightleftharpoons: "⇌",
    rlhar: "⇌",
    Escr: "ℰ",
    expectation: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "Ë",
    Exists: "∃",
    exist: "∃",
    ExponentialE: "ⅇ",
    ee: "ⅇ",
    exponentiale: "ⅇ",
    Fcy: "Ф",
    Ffr: "𝔉",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    blacksquare: "▪",
    squarf: "▪",
    squf: "▪",
    Fopf: "𝔽",
    ForAll: "∀",
    forall: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    gt: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "𝔊",
    Gg: "⋙",
    ggg: "⋙",
    Gopf: "𝔾",
    GreaterEqual: "≥",
    ge: "≥",
    geq: "≥",
    GreaterEqualLess: "⋛",
    gel: "⋛",
    gtreqless: "⋛",
    GreaterFullEqual: "≧",
    gE: "≧",
    geqq: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    gl: "≷",
    gtrless: "≷",
    GreaterSlantEqual: "⩾",
    geqslant: "⩾",
    ges: "⩾",
    GreaterTilde: "≳",
    gsim: "≳",
    gtrsim: "≳",
    Gscr: "𝒢",
    Gt: "≫",
    NestedGreaterGreater: "≫",
    gg: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    caron: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    Poincareplane: "ℌ",
    HilbertSpace: "ℋ",
    Hscr: "ℋ",
    hamilt: "ℋ",
    Hopf: "ℍ",
    quaternions: "ℍ",
    HorizontalLine: "─",
    boxh: "─",
    Hstrok: "Ħ",
    HumpEqual: "≏",
    bumpe: "≏",
    bumpeq: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "Í",
    Icirc: "Î",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Im: "ℑ",
    image: "ℑ",
    imagpart: "ℑ",
    Igrave: "Ì",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    ii: "ⅈ",
    Int: "∬",
    Integral: "∫",
    int: "∫",
    Intersection: "⋂",
    bigcap: "⋂",
    xcap: "⋂",
    InvisibleComma: "⁣",
    ic: "⁣",
    InvisibleTimes: "⁢",
    it: "⁢",
    Iogon: "Į",
    Iopf: "𝕀",
    Iota: "Ι",
    Iscr: "ℐ",
    imagline: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "Ï",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "𝔍",
    Jopf: "𝕁",
    Jscr: "𝒥",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "𝔎",
    Kopf: "𝕂",
    Kscr: "𝒦",
    LJcy: "Љ",
    LT: "<",
    lt: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Lscr: "ℒ",
    lagran: "ℒ",
    Larr: "↞",
    twoheadleftarrow: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    lang: "⟨",
    langle: "⟨",
    LeftArrow: "←",
    ShortLeftArrow: "←",
    larr: "←",
    leftarrow: "←",
    slarr: "←",
    LeftArrowBar: "⇤",
    larrb: "⇤",
    LeftArrowRightArrow: "⇆",
    leftrightarrows: "⇆",
    lrarr: "⇆",
    LeftCeiling: "⌈",
    lceil: "⌈",
    LeftDoubleBracket: "⟦",
    lobrk: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    dharl: "⇃",
    downharpoonleft: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    lfloor: "⌊",
    LeftRightArrow: "↔",
    harr: "↔",
    leftrightarrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    dashv: "⊣",
    LeftTeeArrow: "↤",
    mapstoleft: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    vartriangleleft: "⊲",
    vltri: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    ltrie: "⊴",
    trianglelefteq: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    uharl: "↿",
    upharpoonleft: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    leftharpoonup: "↼",
    lharu: "↼",
    LeftVectorBar: "⥒",
    LessEqualGreater: "⋚",
    leg: "⋚",
    lesseqgtr: "⋚",
    LessFullEqual: "≦",
    lE: "≦",
    leqq: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    lg: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    leqslant: "⩽",
    les: "⩽",
    LessTilde: "≲",
    lesssim: "≲",
    lsim: "≲",
    Lfr: "𝔏",
    Ll: "⋘",
    Lleftarrow: "⇚",
    lAarr: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    longleftarrow: "⟵",
    xlarr: "⟵",
    LongLeftRightArrow: "⟷",
    longleftrightarrow: "⟷",
    xharr: "⟷",
    LongRightArrow: "⟶",
    longrightarrow: "⟶",
    xrarr: "⟶",
    Lopf: "𝕃",
    LowerLeftArrow: "↙",
    swarr: "↙",
    swarrow: "↙",
    LowerRightArrow: "↘",
    searr: "↘",
    searrow: "↘",
    Lsh: "↰",
    lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    NestedLessLess: "≪",
    ll: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mscr: "ℳ",
    phmmat: "ℳ",
    Mfr: "𝔐",
    MinusPlus: "∓",
    mnplus: "∓",
    mp: "∓",
    Mopf: "𝕄",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    ZeroWidthSpace: "​",
    NewLine: `
`,
    Nfr: "𝔑",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nbsp: " ",
    Nopf: "ℕ",
    naturals: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    nequiv: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    npar: "∦",
    nparallel: "∦",
    nshortparallel: "∦",
    nspar: "∦",
    NotElement: "∉",
    notin: "∉",
    notinva: "∉",
    NotEqual: "≠",
    ne: "≠",
    NotEqualTilde: "≂̸",
    nesim: "≂̸",
    NotExists: "∄",
    nexist: "∄",
    nexists: "∄",
    NotGreater: "≯",
    ngt: "≯",
    ngtr: "≯",
    NotGreaterEqual: "≱",
    nge: "≱",
    ngeq: "≱",
    NotGreaterFullEqual: "≧̸",
    ngE: "≧̸",
    ngeqq: "≧̸",
    NotGreaterGreater: "≫̸",
    nGtv: "≫̸",
    NotGreaterLess: "≹",
    ntgl: "≹",
    NotGreaterSlantEqual: "⩾̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    NotGreaterTilde: "≵",
    ngsim: "≵",
    NotHumpDownHump: "≎̸",
    nbump: "≎̸",
    NotHumpEqual: "≏̸",
    nbumpe: "≏̸",
    NotLeftTriangle: "⋪",
    nltri: "⋪",
    ntriangleleft: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    nltrie: "⋬",
    ntrianglelefteq: "⋬",
    NotLess: "≮",
    nless: "≮",
    nlt: "≮",
    NotLessEqual: "≰",
    nle: "≰",
    nleq: "≰",
    NotLessGreater: "≸",
    ntlg: "≸",
    NotLessLess: "≪̸",
    nLtv: "≪̸",
    NotLessSlantEqual: "⩽̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    NotLessTilde: "≴",
    nlsim: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    npr: "⊀",
    nprec: "⊀",
    NotPrecedesEqual: "⪯̸",
    npre: "⪯̸",
    npreceq: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    nprcue: "⋠",
    NotReverseElement: "∌",
    notni: "∌",
    notniva: "∌",
    NotRightTriangle: "⋫",
    nrtri: "⋫",
    ntriangleright: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    nrtrie: "⋭",
    ntrianglerighteq: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    nsqsube: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    nsqsupe: "⋣",
    NotSubset: "⊂⃒",
    nsubset: "⊂⃒",
    vnsub: "⊂⃒",
    NotSubsetEqual: "⊈",
    nsube: "⊈",
    nsubseteq: "⊈",
    NotSucceeds: "⊁",
    nsc: "⊁",
    nsucc: "⊁",
    NotSucceedsEqual: "⪰̸",
    nsce: "⪰̸",
    nsucceq: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    nsccue: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    nsupset: "⊃⃒",
    vnsup: "⊃⃒",
    NotSupersetEqual: "⊉",
    nsupe: "⊉",
    nsupseteq: "⊉",
    NotTilde: "≁",
    nsim: "≁",
    NotTildeEqual: "≄",
    nsime: "≄",
    nsimeq: "≄",
    NotTildeFullEqual: "≇",
    ncong: "≇",
    NotTildeTilde: "≉",
    nap: "≉",
    napprox: "≉",
    NotVerticalBar: "∤",
    nmid: "∤",
    nshortmid: "∤",
    nsmid: "∤",
    Nscr: "𝒩",
    Ntilde: "Ñ",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "𝔒",
    Ograve: "Ò",
    Omacr: "Ō",
    Omega: "Ω",
    ohm: "Ω",
    Omicron: "Ο",
    Oopf: "𝕆",
    OpenCurlyDoubleQuote: "“",
    ldquo: "“",
    OpenCurlyQuote: "‘",
    lsquo: "‘",
    Or: "⩔",
    Oscr: "𝒪",
    Oslash: "Ø",
    Otilde: "Õ",
    Otimes: "⨷",
    Ouml: "Ö",
    OverBar: "‾",
    oline: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    tbrk: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    part: "∂",
    Pcy: "П",
    Pfr: "𝔓",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "±",
    plusmn: "±",
    pm: "±",
    Popf: "ℙ",
    primes: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    pr: "≺",
    prec: "≺",
    PrecedesEqual: "⪯",
    pre: "⪯",
    preceq: "⪯",
    PrecedesSlantEqual: "≼",
    prcue: "≼",
    preccurlyeq: "≼",
    PrecedesTilde: "≾",
    precsim: "≾",
    prsim: "≾",
    Prime: "″",
    Product: "∏",
    prod: "∏",
    Proportional: "∝",
    prop: "∝",
    propto: "∝",
    varpropto: "∝",
    vprop: "∝",
    Pscr: "𝒫",
    Psi: "Ψ",
    QUOT: '"',
    quot: '"',
    Qfr: "𝔔",
    Qopf: "ℚ",
    rationals: "ℚ",
    Qscr: "𝒬",
    RBarr: "⤐",
    drbkarow: "⤐",
    REG: "®",
    circledR: "®",
    reg: "®",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    twoheadrightarrow: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    Rfr: "ℜ",
    real: "ℜ",
    realpart: "ℜ",
    ReverseElement: "∋",
    SuchThat: "∋",
    ni: "∋",
    niv: "∋",
    ReverseEquilibrium: "⇋",
    leftrightharpoons: "⇋",
    lrhar: "⇋",
    ReverseUpEquilibrium: "⥯",
    duhar: "⥯",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    rang: "⟩",
    rangle: "⟩",
    RightArrow: "→",
    ShortRightArrow: "→",
    rarr: "→",
    rightarrow: "→",
    srarr: "→",
    RightArrowBar: "⇥",
    rarrb: "⇥",
    RightArrowLeftArrow: "⇄",
    rightleftarrows: "⇄",
    rlarr: "⇄",
    RightCeiling: "⌉",
    rceil: "⌉",
    RightDoubleBracket: "⟧",
    robrk: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    dharr: "⇂",
    downharpoonright: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rfloor: "⌋",
    RightTee: "⊢",
    vdash: "⊢",
    RightTeeArrow: "↦",
    map: "↦",
    mapsto: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    vartriangleright: "⊳",
    vrtri: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    rtrie: "⊵",
    trianglerighteq: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    uharr: "↾",
    upharpoonright: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    rharu: "⇀",
    rightharpoonup: "⇀",
    RightVectorBar: "⥓",
    Ropf: "ℝ",
    reals: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    rAarr: "⇛",
    Rscr: "ℛ",
    realine: "ℛ",
    Rsh: "↱",
    rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "𝔖",
    ShortUpArrow: "↑",
    UpArrow: "↑",
    uarr: "↑",
    uparrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    compfn: "∘",
    Sopf: "𝕊",
    Sqrt: "√",
    radic: "√",
    Square: "□",
    squ: "□",
    square: "□",
    SquareIntersection: "⊓",
    sqcap: "⊓",
    SquareSubset: "⊏",
    sqsub: "⊏",
    sqsubset: "⊏",
    SquareSubsetEqual: "⊑",
    sqsube: "⊑",
    sqsubseteq: "⊑",
    SquareSuperset: "⊐",
    sqsup: "⊐",
    sqsupset: "⊐",
    SquareSupersetEqual: "⊒",
    sqsupe: "⊒",
    sqsupseteq: "⊒",
    SquareUnion: "⊔",
    sqcup: "⊔",
    Sscr: "𝒮",
    Star: "⋆",
    sstarf: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    sube: "⊆",
    subseteq: "⊆",
    Succeeds: "≻",
    sc: "≻",
    succ: "≻",
    SucceedsEqual: "⪰",
    sce: "⪰",
    succeq: "⪰",
    SucceedsSlantEqual: "≽",
    sccue: "≽",
    succcurlyeq: "≽",
    SucceedsTilde: "≿",
    scsim: "≿",
    succsim: "≿",
    Sum: "∑",
    sum: "∑",
    Sup: "⋑",
    Supset: "⋑",
    Superset: "⊃",
    sup: "⊃",
    supset: "⊃",
    SupersetEqual: "⊇",
    supe: "⊇",
    supseteq: "⊇",
    THORN: "Þ",
    TRADE: "™",
    trade: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "𝔗",
    Therefore: "∴",
    there4: "∴",
    therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    Tilde: "∼",
    sim: "∼",
    thicksim: "∼",
    thksim: "∼",
    TildeEqual: "≃",
    sime: "≃",
    simeq: "≃",
    TildeFullEqual: "≅",
    cong: "≅",
    TildeTilde: "≈",
    ap: "≈",
    approx: "≈",
    asymp: "≈",
    thickapprox: "≈",
    thkap: "≈",
    Topf: "𝕋",
    TripleDot: "⃛",
    tdot: "⃛",
    Tscr: "𝒯",
    Tstrok: "Ŧ",
    Uacute: "Ú",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "Û",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "𝔘",
    Ugrave: "Ù",
    Umacr: "Ū",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    bbrk: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    bigcup: "⋃",
    xcup: "⋃",
    UnionPlus: "⊎",
    uplus: "⊎",
    Uogon: "Ų",
    Uopf: "𝕌",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    udarr: "⇅",
    UpDownArrow: "↕",
    updownarrow: "↕",
    varr: "↕",
    UpEquilibrium: "⥮",
    udhar: "⥮",
    UpTee: "⊥",
    bot: "⊥",
    bottom: "⊥",
    perp: "⊥",
    UpTeeArrow: "↥",
    mapstoup: "↥",
    UpperLeftArrow: "↖",
    nwarr: "↖",
    nwarrow: "↖",
    UpperRightArrow: "↗",
    nearr: "↗",
    nearrow: "↗",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "𝒰",
    Utilde: "Ũ",
    Uuml: "Ü",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    bigvee: "⋁",
    xvee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    mid: "∣",
    shortmid: "∣",
    smid: "∣",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    wr: "≀",
    wreath: "≀",
    VeryThinSpace: " ",
    hairsp: " ",
    Vfr: "𝔙",
    Vopf: "𝕍",
    Vscr: "𝒱",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    bigwedge: "⋀",
    xwedge: "⋀",
    Wfr: "𝔚",
    Wopf: "𝕎",
    Wscr: "𝒲",
    Xfr: "𝔛",
    Xi: "Ξ",
    Xopf: "𝕏",
    Xscr: "𝒳",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "Ý",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "𝔜",
    Yopf: "𝕐",
    Yscr: "𝒴",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    Zeta: "Ζ",
    Zfr: "ℨ",
    zeetrf: "ℨ",
    Zopf: "ℤ",
    integers: "ℤ",
    Zscr: "𝒵",
    aacute: "á",
    abreve: "ă",
    ac: "∾",
    mstpos: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "â",
    acy: "а",
    aelig: "æ",
    afr: "𝔞",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    and: "∧",
    wedge: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    angle: "∠",
    ange: "⦤",
    angmsd: "∡",
    measuredangle: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "𝕒",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    approxeq: "≊",
    apid: "≋",
    apos: "'",
    aring: "å",
    ascr: "𝒶",
    ast: "*",
    midast: "*",
    atilde: "ã",
    auml: "ä",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    bcong: "≌",
    backepsilon: "϶",
    bepsi: "϶",
    backprime: "‵",
    bprime: "‵",
    backsim: "∽",
    bsim: "∽",
    backsimeq: "⋍",
    bsime: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrktbrk: "⎶",
    bcy: "б",
    bdquo: "„",
    ldquor: "„",
    bemptyv: "⦰",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    twixt: "≬",
    bfr: "𝔟",
    bigcirc: "◯",
    xcirc: "◯",
    bigodot: "⨀",
    xodot: "⨀",
    bigoplus: "⨁",
    xoplus: "⨁",
    bigotimes: "⨂",
    xotime: "⨂",
    bigsqcup: "⨆",
    xsqcup: "⨆",
    bigstar: "★",
    starf: "★",
    bigtriangledown: "▽",
    xdtri: "▽",
    bigtriangleup: "△",
    xutri: "△",
    biguplus: "⨄",
    xuplus: "⨄",
    bkarow: "⤍",
    rbarr: "⤍",
    blacklozenge: "⧫",
    lozf: "⧫",
    blacktriangle: "▴",
    utrif: "▴",
    blacktriangledown: "▾",
    dtrif: "▾",
    blacktriangleleft: "◂",
    ltrif: "◂",
    blacktriangleright: "▸",
    rtrif: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "𝕓",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    minusb: "⊟",
    boxplus: "⊞",
    plusb: "⊞",
    boxtimes: "⊠",
    timesb: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    brvbar: "¦",
    bscr: "𝒷",
    bsemi: "⁏",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bumpE: "⪮",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "ç",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cemptyv: "⦲",
    cent: "¢",
    cfr: "𝔠",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    cire: "≗",
    circlearrowleft: "↺",
    olarr: "↺",
    circlearrowright: "↻",
    orarr: "↻",
    circledS: "Ⓢ",
    oS: "Ⓢ",
    circledast: "⊛",
    oast: "⊛",
    circledcirc: "⊚",
    ocir: "⊚",
    circleddash: "⊝",
    odash: "⊝",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "∁",
    complement: "∁",
    congdot: "⩭",
    copf: "𝕔",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    curlyeqprec: "⋞",
    cuesc: "⋟",
    curlyeqsucc: "⋟",
    cularr: "↶",
    curvearrowleft: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curvearrowright: "↷",
    curarrm: "⤼",
    curlyvee: "⋎",
    cuvee: "⋎",
    curlywedge: "⋏",
    cuwed: "⋏",
    curren: "¤",
    cwint: "∱",
    cylcty: "⌭",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    dash: "‐",
    hyphen: "‐",
    dbkarow: "⤏",
    rBarr: "⤏",
    dcaron: "ď",
    dcy: "д",
    ddarr: "⇊",
    downdownarrows: "⇊",
    ddotseq: "⩷",
    eDDot: "⩷",
    deg: "°",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "𝔡",
    diamondsuit: "♦",
    diams: "♦",
    digamma: "ϝ",
    gammad: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    llcorner: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "𝕕",
    doteqdot: "≑",
    eDot: "≑",
    dotminus: "∸",
    minusd: "∸",
    dotplus: "∔",
    plusdo: "∔",
    dotsquare: "⊡",
    sdotb: "⊡",
    drcorn: "⌟",
    lrcorner: "⌟",
    drcrop: "⌌",
    dscr: "𝒹",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    triangledown: "▿",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eacute: "é",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    eqcirc: "≖",
    ecirc: "ê",
    ecolon: "≕",
    eqcolon: "≕",
    ecy: "э",
    edot: "ė",
    efDot: "≒",
    fallingdotseq: "≒",
    efr: "𝔢",
    eg: "⪚",
    egrave: "è",
    egs: "⪖",
    eqslantgtr: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    eqslantless: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    varnothing: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    straightepsilon: "ϵ",
    varepsilon: "ϵ",
    equals: "=",
    equest: "≟",
    questeq: "≟",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    risingdotseq: "≓",
    erarr: "⥱",
    escr: "ℯ",
    eta: "η",
    eth: "ð",
    euml: "ë",
    euro: "€",
    excl: "!",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "𝔣",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "𝕗",
    fork: "⋔",
    pitchfork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "½",
    half: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    sfrown: "⌢",
    fscr: "𝒻",
    gEl: "⪌",
    gtreqqless: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gap: "⪆",
    gtrapprox: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "𝔤",
    gimel: "ℷ",
    gjcy: "ѓ",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gneqq: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gnsim: "⋧",
    gopf: "𝕘",
    gscr: "ℊ",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtrdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrarr: "⥸",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hardcy: "ъ",
    harrcir: "⥈",
    harrw: "↭",
    leftrightsquigarrow: "↭",
    hbar: "ℏ",
    hslash: "ℏ",
    planck: "ℏ",
    plankv: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    mldr: "…",
    hercon: "⊹",
    hfr: "𝔥",
    hksearow: "⤥",
    searhk: "⤥",
    hkswarow: "⤦",
    swarhk: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    larrhk: "↩",
    hookrightarrow: "↪",
    rarrhk: "↪",
    hopf: "𝕙",
    horbar: "―",
    hscr: "𝒽",
    hstrok: "ħ",
    hybull: "⁃",
    iacute: "í",
    icirc: "î",
    icy: "и",
    iecy: "е",
    iexcl: "¡",
    ifr: "𝔦",
    igrave: "ì",
    iiiint: "⨌",
    qint: "⨌",
    iiint: "∭",
    tint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    imath: "ı",
    inodot: "ı",
    imof: "⊷",
    imped: "Ƶ",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    intcal: "⊺",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "𝕚",
    iota: "ι",
    iquest: "¿",
    iscr: "𝒾",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "ï",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "𝔧",
    jmath: "ȷ",
    jopf: "𝕛",
    jscr: "𝒿",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    varkappa: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "𝔨",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "𝕜",
    kscr: "𝓀",
    lAtail: "⤛",
    lBarr: "⤎",
    lEg: "⪋",
    lesseqqgtr: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lambda: "λ",
    langd: "⦑",
    lap: "⪅",
    lessapprox: "⪅",
    laquo: "«",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrlp: "↫",
    looparrowleft: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    leftarrowtail: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lcy: "л",
    ldca: "⤶",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leq: "≤",
    leftleftarrows: "⇇",
    llarr: "⇇",
    leftthreetimes: "⋋",
    lthree: "⋋",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessdot: "⋖",
    ltdot: "⋖",
    lfisht: "⥼",
    lfr: "𝔩",
    lgE: "⪑",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lneqq: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    longmapsto: "⟼",
    xmap: "⟼",
    looparrowright: "↬",
    rarrlp: "↬",
    lopar: "⦅",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    loz: "◊",
    lozenge: "◊",
    lpar: "(",
    lparlt: "⦓",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    lsime: "⪍",
    lsimg: "⪏",
    lsquor: "‚",
    sbquo: "‚",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    triangleleft: "◃",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "¯",
    strns: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midcir: "⫰",
    minus: "−",
    minusdu: "⨪",
    mlcp: "⫛",
    models: "⊧",
    mopf: "𝕞",
    mscr: "𝓂",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nLeftarrow: "⇍",
    nlArr: "⇍",
    nLeftrightarrow: "⇎",
    nhArr: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nRightarrow: "⇏",
    nrArr: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nacute: "ń",
    nang: "∠⃒",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    natur: "♮",
    natural: "♮",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    neArr: "⇗",
    nearhk: "⤤",
    nedot: "≐̸",
    nesear: "⤨",
    toea: "⤨",
    nfr: "𝔫",
    nharr: "↮",
    nleftrightarrow: "↮",
    nhpar: "⫲",
    nis: "⋼",
    nisd: "⋺",
    njcy: "њ",
    nlE: "≦̸",
    nleqq: "≦̸",
    nlarr: "↚",
    nleftarrow: "↚",
    nldr: "‥",
    nopf: "𝕟",
    not: "¬",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinvb: "⋷",
    notinvc: "⋶",
    notnivb: "⋾",
    notnivc: "⋽",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    nrarr: "↛",
    nrightarrow: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nscr: "𝓃",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsubseteqq: "⫅̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupseteqq: "⫆̸",
    ntilde: "ñ",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwnear: "⤧",
    oacute: "ó",
    ocirc: "ô",
    ocy: "о",
    odblac: "ő",
    odiv: "⨸",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "𝔬",
    ogon: "˛",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    olcir: "⦾",
    olcross: "⦻",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    oopf: "𝕠",
    opar: "⦷",
    operp: "⦹",
    or: "∨",
    vee: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    oscr: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oslash: "ø",
    osol: "⊘",
    otilde: "õ",
    otimesas: "⨶",
    ouml: "ö",
    ovbar: "⌽",
    para: "¶",
    parsim: "⫳",
    parsl: "⫽",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    pertenk: "‱",
    pfr: "𝔭",
    phi: "φ",
    phiv: "ϕ",
    straightphi: "ϕ",
    varphi: "ϕ",
    phone: "☎",
    pi: "π",
    piv: "ϖ",
    varpi: "ϖ",
    planckh: "ℎ",
    plus: "+",
    plusacir: "⨣",
    pluscir: "⨢",
    plusdu: "⨥",
    pluse: "⩲",
    plussim: "⨦",
    plustwo: "⨧",
    pointint: "⨕",
    popf: "𝕡",
    pound: "£",
    prE: "⪳",
    prap: "⪷",
    precapprox: "⪷",
    precnapprox: "⪹",
    prnap: "⪹",
    precneqq: "⪵",
    prnE: "⪵",
    precnsim: "⋨",
    prnsim: "⋨",
    prime: "′",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prurel: "⊰",
    pscr: "𝓅",
    psi: "ψ",
    puncsp: " ",
    qfr: "𝔮",
    qopf: "𝕢",
    qprime: "⁗",
    qscr: "𝓆",
    quatint: "⨖",
    quest: "?",
    rAtail: "⤜",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    raemptyv: "⦳",
    rangd: "⦒",
    range: "⦥",
    raquo: "»",
    rarrap: "⥵",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rightarrowtail: "↣",
    rarrw: "↝",
    rightsquigarrow: "↝",
    ratail: "⤚",
    ratio: "∶",
    rbbrk: "❳",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdsh: "↳",
    rect: "▭",
    rfisht: "⥽",
    rfr: "𝔯",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    varrho: "ϱ",
    rightrightarrows: "⇉",
    rrarr: "⇉",
    rightthreetimes: "⋌",
    rthree: "⋌",
    ring: "˚",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    ropar: "⦆",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rsaquo: "›",
    rscr: "𝓇",
    rtimes: "⋊",
    rtri: "▹",
    triangleright: "▹",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    scE: "⪴",
    scap: "⪸",
    succapprox: "⪸",
    scaron: "š",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    succneqq: "⪶",
    scnap: "⪺",
    succnapprox: "⪺",
    scnsim: "⋩",
    succnsim: "⋩",
    scpolint: "⨓",
    scy: "с",
    sdot: "⋅",
    sdote: "⩦",
    seArr: "⇘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    tosa: "⤩",
    sext: "✶",
    sfr: "𝔰",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shy: "­",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    varsigma: "ς",
    simdot: "⩪",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    smashp: "⨳",
    smeparsl: "⧤",
    smile: "⌣",
    ssmile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    sqcaps: "⊓︀",
    sqcups: "⊔︀",
    sscr: "𝓈",
    star: "☆",
    sub: "⊂",
    subset: "⊂",
    subE: "⫅",
    subseteqq: "⫅",
    subdot: "⪽",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subsetneqq: "⫋",
    subne: "⊊",
    subsetneq: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supE: "⫆",
    supseteqq: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supsetneqq: "⫌",
    supne: "⊋",
    supsetneq: "⊋",
    supplus: "⫀",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swnwar: "⤪",
    szlig: "ß",
    target: "⌖",
    tau: "τ",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    telrec: "⌕",
    tfr: "𝔱",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    vartheta: "ϑ",
    thorn: "þ",
    times: "×",
    timesbar: "⨱",
    timesd: "⨰",
    topbot: "⌶",
    topcir: "⫱",
    topf: "𝕥",
    topfork: "⫚",
    tprime: "‴",
    triangle: "▵",
    utri: "▵",
    triangleq: "≜",
    trie: "≜",
    tridot: "◬",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "𝓉",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    uHar: "⥣",
    uacute: "ú",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "û",
    ucy: "у",
    udblac: "ű",
    ufisht: "⥾",
    ufr: "𝔲",
    ugrave: "ù",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uogon: "ų",
    uopf: "𝕦",
    upsi: "υ",
    upsilon: "υ",
    upuparrows: "⇈",
    uuarr: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "𝓊",
    utdot: "⋰",
    utilde: "ũ",
    uuml: "ü",
    uwangle: "⦧",
    vBar: "⫨",
    vBarv: "⫩",
    vangrt: "⦜",
    varsubsetneq: "⊊︀",
    vsubne: "⊊︀",
    varsubsetneqq: "⫋︀",
    vsubnE: "⫋︀",
    varsupsetneq: "⊋︀",
    vsupne: "⊋︀",
    varsupsetneqq: "⫌︀",
    vsupnE: "⫌︀",
    vcy: "в",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    vfr: "𝔳",
    vopf: "𝕧",
    vscr: "𝓋",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedgeq: "≙",
    weierp: "℘",
    wp: "℘",
    wfr: "𝔴",
    wopf: "𝕨",
    wscr: "𝓌",
    xfr: "𝔵",
    xi: "ξ",
    xnis: "⋻",
    xopf: "𝕩",
    xscr: "𝓍",
    yacute: "ý",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "¥",
    yfr: "𝔶",
    yicy: "ї",
    yopf: "𝕪",
    yscr: "𝓎",
    yucy: "ю",
    yuml: "ÿ",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeta: "ζ",
    zfr: "𝔷",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }, VE = "";
  Ti.ngsp = VE;
  qE = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
  a2(WE, "ws");
  UE = (Ar2 = class {
    static fromArray(t) {
      return t ? (WE("interpolation", t), new Ar2(t[0], t[1])) : t2;
    }
    constructor(t, r) {
      this.start = t, this.end = r;
    }
  }, a2(Ar2, "t"), Ar2), t2 = new UE("{{", "}}"), _u = (On2 = class extends Zh {
    constructor(t, r, n) {
      super(n, t), this.tokenType = r;
    }
  }, a2(On2, "pt"), On2), GE = (Nn = class {
    constructor(t, r, n) {
      this.tokens = t, this.errors = r, this.nonNormalizedIcuExpressions = n;
    }
  }, a2(Nn, "Pr"), Nn);
  a2(XE, "Ms");
  YE = /\r\n?/g;
  a2(bn2, "Ye");
  a2(ih, "Ls");
  a2(KE, "oo");
  (function(e6) {
    e6.HEX = "hexadecimal", e6.DEC = "decimal";
  })(Li || (Li = {}));
  $u = (jn = class {
    constructor(t) {
      this.error = t;
    }
  }, a2(jn, "ht"), jn), ZE = (Vn2 = class {
    constructor(t, r, n) {
      this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || false, this._interpolationConfig = n.interpolationConfig || t2, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || false, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || false;
      let o = n.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
      this._cursor = n.escapedString ? new oS(t, o) : new r2(t, o), this._preserveLineEndings = n.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n.tokenizeBlocks ?? true;
      try {
        this._cursor.init();
      } catch (i) {
        this.handleError(i);
      }
    }
    _processCarriageReturns(t) {
      return this._preserveLineEndings ? t : t.replace(YE, `
`);
    }
    tokenize() {
      for (; this._cursor.peek() !== 0; ) {
        let t = this._cursor.clone();
        try {
          if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr(
            "--"
          ) ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(
            t
          );
          else if (this._attemptCharCode(47)) this._consumeTagClose(t);
          else {
            let r = this._cursor.clone();
            this._attemptCharCode(63) ? (this._cursor = r, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
          }
          else this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(t) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(t) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
        } catch (r) {
          this.handleError(r);
        }
      }
      this._beginToken(30), this._endToken([]);
    }
    _getBlockName() {
      let t = false, r = this._cursor.clone();
      return this._attemptCharCodeUntilFn((n) => sc(n) ? !t : uh(n) ? (t = true, false) : true), this._cursor.getChars(r).trim();
    }
    _consumeBlockStart(t) {
      this._beginToken(25, t);
      let r = this._endToken([this._getBlockName()]);
      if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(De2), this._attemptCharCode(
        41
      )) this._attemptCharCodeUntilFn(De2);
      else {
        r.type = 29;
        return;
      }
      this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r.type = 29;
    }
    _consumeBlockEnd(t) {
      this._beginToken(27, t), this._endToken([]);
    }
    _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(ch); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
        this._beginToken(28);
        let t = this._cursor.clone(), r = null, n = 0;
        for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r !== null; ) {
          let o = this._cursor.peek();
          if (o === 92) this._cursor.advance();
          else if (o === r) r = null;
          else if (r === null && G5(o)) r = o;
          else if (o === 40 && r === null) n++;
          else if (o === 41 && r === null) {
            if (n === 0) break;
            n > 0 && n--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(t)]), this._attemptCharCodeUntilFn(ch);
      }
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
      if (tS(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
      if (this._cursor.peek() === 125) {
        if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
        if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
      }
      return false;
    }
    _beginToken(t, r = this._cursor.clone()) {
      this._currentTokenStart = r, this._currentTokenType = t;
    }
    _endToken(t, r) {
      if (this._currentTokenStart === null) throw new _u(
        "Programming error - attempted to end a token when there was no start to the token",
        this._currentTokenType,
        this._cursor.getSpan(r)
      );
      if (this._currentTokenType === null) throw new _u("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
      let n = { type: this._currentTokenType, parts: t, sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
      return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
    }
    _createError(t, r) {
      this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let n = new _u(t, this._currentTokenType, r);
      return this._currentTokenStart = null, this._currentTokenType = null, new $u(n);
    }
    handleError(t) {
      if (t instanceof cc && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof $u) this.errors.push(t.error);
      else throw t;
    }
    _attemptCharCode(t) {
      return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
    }
    _attemptCharCodeCaseInsensitive(t) {
      return rS(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
    }
    _requireCharCode(t) {
      let r = this._cursor.clone();
      if (!this._attemptCharCode(t)) throw this._createError(bn2(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptStr(t) {
      let r = t.length;
      if (this._cursor.charsLeft() < r) return false;
      let n = this._cursor.clone();
      for (let o = 0; o < r; o++) if (!this._attemptCharCode(t.charCodeAt(o))) return this._cursor = n, false;
      return true;
    }
    _attemptStrCaseInsensitive(t) {
      for (let r = 0; r < t.length; r++) if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(r))) return false;
      return true;
    }
    _requireStr(t) {
      let r = this._cursor.clone();
      if (!this._attemptStr(t)) throw this._createError(bn2(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _requireStrCaseInsensitive(t) {
      let r = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(t)) throw this._createError(bn2(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptCharCodeUntilFn(t) {
      for (; !t(this._cursor.peek()); ) this._cursor.advance();
    }
    _requireCharCodeUntilFn(t, r) {
      let n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(t), this._cursor.diff(n) < r) throw this._createError(bn2(this._cursor.peek()), this._cursor.getSpan(n));
    }
    _attemptUntilChar(t) {
      for (; this._cursor.peek() !== t; ) this._cursor.advance();
    }
    _readChar() {
      let t = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), t;
    }
    _consumeEntity(t) {
      this._beginToken(9);
      let r = this._cursor.clone();
      if (this._cursor.advance(), this._attemptCharCode(35)) {
        let n = this._attemptCharCode(120) || this._attemptCharCode(88), o = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(QE), this._cursor.peek() != 59) {
          this._cursor.advance();
          let l = n ? Li.HEX : Li.DEC;
          throw this._createError(KE(l, this._cursor.getChars(r)), this._cursor.getSpan());
        }
        let i = this._cursor.getChars(o);
        this._cursor.advance();
        try {
          let l = parseInt(i, n ? 16 : 10);
          this._endToken([String.fromCharCode(l), this._cursor.getChars(r)]);
        } catch {
          throw this._createError(ih(this._cursor.getChars(r)), this._cursor.getSpan());
        }
      } else {
        let n = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(eS), this._cursor.peek() != 59) this._beginToken(t, r), this._cursor = n, this._endToken(["&"]);
        else {
          let o = this._cursor.getChars(n);
          this._cursor.advance();
          let i = Ti[o];
          if (!i) throw this._createError(ih(o), this._cursor.getSpan(r));
          this._endToken([i, `&${o};`]);
        }
      }
    }
    _consumeRawText(t, r) {
      this._beginToken(t ? 6 : 7);
      let n = [];
      for (; ; ) {
        let o = this._cursor.clone(), i = r();
        if (this._cursor = o, i) break;
        t && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(n.join(""))]);
    }
    _consumeComment(t) {
      this._beginToken(10, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr(
        "-->"
      ), this._endToken([]);
    }
    _consumeBogusComment(t) {
      this._beginToken(10, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
    }
    _consumeCdata(t) {
      this._beginToken(12, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr(
        "]]>"
      ), this._endToken([]);
    }
    _consumeDocType(t) {
      this._beginToken(18, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
    }
    _consumePrefixAndName() {
      let t = this._cursor.clone(), r = "";
      for (; this._cursor.peek() !== 58 && !JE(this._cursor.peek()); ) this._cursor.advance();
      let n;
      this._cursor.peek() === 58 ? (r = this._cursor.getChars(t), this._cursor.advance(), n = this._cursor.clone()) : n = t, this._requireCharCodeUntilFn(
        lh,
        r === "" ? 0 : 1
      );
      let o = this._cursor.getChars(n);
      return [r, o];
    }
    _consumeTagOpen(t) {
      let r, n, o, i = [];
      try {
        if (!uc(this._cursor.peek())) throw this._createError(bn2(this._cursor.peek()), this._cursor.getSpan(t));
        for (o = this._consumeTagOpenStart(t), n = o.parts[0], r = o.parts[1], this._attemptCharCodeUntilFn(De2); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
          let [u, c] = this._consumeAttributeName();
          if (this._attemptCharCodeUntilFn(De2), this._attemptCharCode(61)) {
            this._attemptCharCodeUntilFn(De2);
            let d = this._consumeAttributeValue();
            i.push({ prefix: u, name: c, value: d });
          } else i.push({ prefix: u, name: c });
          this._attemptCharCodeUntilFn(De2);
        }
        this._consumeTagOpenEnd();
      } catch (u) {
        if (u instanceof $u) {
          o ? o.type = 4 : (this._beginToken(5, t), this._endToken(["<"]));
          return;
        }
        throw u;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
      let l = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
      this._handleFullNameStackForTagOpen(n, r), l === it2.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, false) : l === it2.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, true);
    }
    _consumeRawTextWithTagClose(t, r, n) {
      this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(De2), !this._attemptStrCaseInsensitive(
        t ? `${t}:${r}` : r
      )) ? false : (this._attemptCharCodeUntilFn(De2), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn(
        (o) => o === 62,
        3
      ), this._cursor.advance(), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
    }
    _consumeTagOpenStart(t) {
      this._beginToken(0, t);
      let r = this._consumePrefixAndName();
      return this._endToken(r);
    }
    _consumeAttributeName() {
      let t = this._cursor.peek();
      if (t === 39 || t === 34) throw this._createError(bn2(t), this._cursor.getSpan());
      this._beginToken(14);
      let r = this._consumePrefixAndName();
      return this._endToken(r), r;
    }
    _consumeAttributeValue() {
      let t;
      if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
        let r = this._cursor.peek();
        this._consumeQuote(r);
        let n = a2(() => this._cursor.peek() === r, "n");
        t = this._consumeWithInterpolation(16, 17, n, n), this._consumeQuote(r);
      } else {
        let r = a2(() => lh(this._cursor.peek()), "r");
        t = this._consumeWithInterpolation(16, 17, r, r);
      }
      return t;
    }
    _consumeQuote(t) {
      this._beginToken(15), this._requireCharCode(t), this._endToken([String.fromCodePoint(t)]);
    }
    _consumeTagOpenEnd() {
      let t = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(t), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(t) {
      if (this._beginToken(3, t), this._attemptCharCodeUntilFn(De2), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(
        De2
      ), this._requireCharCode(62), this._endToken([]);
      else {
        let [r, n] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(De2), this._requireCharCode(62), this._endToken([r, n]), this._handleFullNameStackForTagClose(r, n);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
      let t = this._readUntil(44), r = this._processCarriageReturns(t);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r]);
      else {
        let o = this._endToken([t]);
        r !== t && this.nonNormalizedIcuExpressions.push(o);
      }
      this._requireCharCode(44), this._attemptCharCodeUntilFn(De2), this._beginToken(7);
      let n = this._readUntil(44);
      this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(De2);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let t = this._readUntil(123).trim();
      this._endToken([t]), this._attemptCharCodeUntilFn(De2), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(
        De2
      ), this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(De2), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(t, r, n, o) {
      this._beginToken(t);
      let i = [];
      for (; !n(); ) {
        let u = this._cursor.clone();
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(
          ""
        ))], u), i.length = 0, this._consumeInterpolation(r, u, o), this._beginToken(t)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(t), this._beginToken(t)) : i.push(this._readChar());
      }
      this._inInterpolation = false;
      let l = this._processCarriageReturns(i.join(""));
      return this._endToken([l]), l;
    }
    _consumeInterpolation(t, r, n) {
      let o = [];
      this._beginToken(t, r), o.push(this._interpolationConfig.start);
      let i = this._cursor.clone(), l = null, u = false;
      for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
        let c = this._cursor.clone();
        if (this._isTagStart()) {
          this._cursor = c, o.push(this._getProcessedChars(i, c)), this._endToken(o);
          return;
        }
        if (l === null) if (this._attemptStr(this._interpolationConfig.end)) {
          o.push(this._getProcessedChars(i, c)), o.push(this._interpolationConfig.end), this._endToken(o);
          return;
        } else this._attemptStr("//") && (u = true);
        let d = this._cursor.peek();
        this._cursor.advance(), d === 92 ? this._cursor.advance() : d === l ? l = null : !u && l === null && G5(d) && (l = d);
      }
      o.push(this._getProcessedChars(i, this._cursor)), this._endToken(o);
    }
    _getProcessedChars(t, r) {
      return this._processCarriageReturns(r.getChars(t));
    }
    _isTextEnd() {
      return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 125));
    }
    _isTagStart() {
      if (this._cursor.peek() === 60) {
        let t = this._cursor.clone();
        t.advance();
        let r = t.peek();
        if (97 <= r && r <= 122 || 65 <= r && r <= 90 || r === 47 || r === 33) return true;
      }
      return false;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && this._cursor.peek() === 64) {
        let t = this._cursor.clone();
        if (t.advance(), uh(t.peek())) return true;
      }
      return false;
    }
    _readUntil(t) {
      let r = this._cursor.clone();
      return this._attemptUntilChar(t), this._cursor.getChars(r);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== 123) return false;
      if (this._interpolationConfig) {
        let t = this._cursor.clone(), r = this._attemptStr(this._interpolationConfig.start);
        return this._cursor = t, !r;
      }
      return true;
    }
    _handleFullNameStackForTagOpen(t, r) {
      let n = ki(t, r);
      (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
    }
    _handleFullNameStackForTagClose(t, r) {
      let n = ki(t, r);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
    }
  }, a2(Vn2, "Nr"), Vn2);
  a2(De2, "k");
  a2(lh, "Fs");
  a2(JE, "uo");
  a2(QE, "lo");
  a2(eS, "co");
  a2(tS, "po");
  a2(rS, "ho");
  a2(sh, "Ps");
  a2(uh, "Ns");
  a2(ch, "Is");
  a2(nS, "fo");
  r2 = (Zt2 = class {
    constructor(t, r) {
      if (t instanceof Zt2) {
        this.file = t.file, this.input = t.input, this.end = t.end;
        let n = t.state;
        this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
      } else {
        if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = t, this.input = t.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
      }
    }
    clone() {
      return new Zt2(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(t) {
      return this.state.offset - t.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(t, r) {
      t = t || this;
      let n = t;
      if (r) for (; this.diff(t) > 0 && r.indexOf(t.peek()) !== -1; ) n === t && (t = t.clone()), t.advance();
      let o = this.locationFromCursor(t), i = this.locationFromCursor(this), l = n !== t ? this.locationFromCursor(n) : o;
      return new V2(o, i, l);
    }
    getChars(t) {
      return this.input.substring(t.state.offset, this.state.offset);
    }
    charAt(t) {
      return this.input.charCodeAt(t);
    }
    advanceState(t) {
      if (t.offset >= this.end) throw this.state = t, new cc('Unexpected character "EOF"', this);
      let r = this.charAt(t.offset);
      r === 10 ? (t.line++, t.column = 0) : Yh(r) || t.column++, t.offset++, this.updatePeek(t);
    }
    updatePeek(t) {
      t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
    }
    locationFromCursor(t) {
      return new Nu(t.file, t.state.offset, t.state.line, t.state.column);
    }
  }, a2(Zt2, "t"), Zt2), oS = (Jt2 = class extends r2 {
    constructor(t, r) {
      t instanceof Jt2 ? (super(t), this.internalState = { ...t.internalState }) : (super(t, r), this.internalState = this.state);
    }
    advance() {
      this.state = this.internalState, super.advance(), this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new Jt2(this);
    }
    getChars(t) {
      let r = t.clone(), n = "";
      for (; r.internalState.offset < this.internalState.offset; ) n += String.fromCodePoint(r.peek()), r.advance();
      return n;
    }
    processEscapeSequence() {
      let t = a2(() => this.internalState.peek, "e");
      if (t() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), t() === 110) this.state.peek = 10;
      else if (t() === 114) this.state.peek = 13;
      else if (t() === 118) this.state.peek = 11;
      else if (t() === 116) this.state.peek = 9;
      else if (t() === 98) this.state.peek = 8;
      else if (t() === 102) this.state.peek = 12;
      else if (t() === 117) if (this.advanceState(this.internalState), t() === 123) {
        this.advanceState(this.internalState);
        let r = this.clone(), n = 0;
        for (; t() !== 125; ) this.advanceState(this.internalState), n++;
        this.state.peek = this.decodeHexDigits(r, n);
      } else {
        let r = this.clone();
        this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
      }
      else if (t() === 120) {
        this.advanceState(this.internalState);
        let r = this.clone();
        this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
      } else if (U5(t())) {
        let r = "", n = 0, o = this.clone();
        for (; U5(t()) && n < 3; ) o = this.clone(), r += String.fromCodePoint(t()), this.advanceState(this.internalState), n++;
        this.state.peek = parseInt(r, 8), this.internalState = o.internalState;
      } else Yh(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(t, r) {
      let n = this.input.slice(t.internalState.offset, t.internalState.offset + r), o = parseInt(n, 16);
      if (isNaN(o)) throw t.state = t.internalState, new cc("Invalid hexadecimal escape sequence", t);
      return o;
    }
  }, a2(Jt2, "t"), Jt2), cc = (qn2 = class {
    constructor(t, r) {
      this.msg = t, this.cursor = r;
    }
  }, a2(qn2, "ft"), qn2), Ze2 = (Fr2 = class extends Zh {
    static create(t, r, n) {
      return new Fr2(t, r, n);
    }
    constructor(t, r, n) {
      super(r, n), this.elementName = t;
    }
  }, a2(Fr2, "t"), Fr2), aS = (Wn2 = class {
    constructor(t, r) {
      this.rootNodes = t, this.errors = r;
    }
  }, a2(Wn2, "Or"), Wn2), iS = (Un2 = class {
    constructor(t) {
      this.getTagDefinition = t;
    }
    parse(t, r, n, o = false, i) {
      let l = a2((w4) => (m, ...v) => w4(m.toLowerCase(), ...v), "a"), u = o ? this.getTagDefinition : l(this.getTagDefinition), c = a2((w4) => u(w4).getContentType(), "u"), d = o ? i : l(i), p = XE(t, r, i ? (w4, m, v, y) => {
        let b = d(w4, m, v, y);
        return b !== void 0 ? b : c(w4);
      } : c, n), h = n && n.canSelfClose || false, f = n && n.allowHtmComponentClosingTags || false, g6 = new lS(p.tokens, u, h, f, o);
      return g6.build(), new aS(g6.rootNodes, p.errors.concat(g6.errors));
    }
  }, a2(Un2, "Qt"), Un2), lS = (kr2 = class {
    constructor(t, r, n, o, i) {
      this.tokens = t, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = o, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
    }
    build() {
      for (; this._peek.type !== 30; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._advance();
      for (let t of this._containerStack) t instanceof vn2 && this.errors.push(Ze2.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
    }
    _advance() {
      let t = this._peek;
      return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t;
    }
    _advanceIf(t) {
      return this._peek.type === t ? this._advance() : null;
    }
    _consumeCdata(t) {
      let r = this._advance(), n = this._getText(r), o = this._advanceIf(13);
      this._addToParent(new $E(n, new V2(t.sourceSpan.start, (o || r).sourceSpan.end), [r]));
    }
    _consumeComment(t) {
      let r = this._advanceIf(7), n = this._advanceIf(11), o = r != null ? r.parts[0].trim() : null, i = new V2(t.sourceSpan.start, (n || r || t).sourceSpan.end);
      this._addToParent(new OE(o, i));
    }
    _consumeDocType(t) {
      let r = this._advanceIf(7), n = this._advanceIf(19), o = r != null ? r.parts[0].trim() : null, i = new V2(t.sourceSpan.start, (n || r || t).sourceSpan.end);
      this._addToParent(new NE(o, i));
    }
    _consumeExpansion(t) {
      let r = this._advance(), n = this._advance(), o = [];
      for (; this._peek.type === 21; ) {
        let l = this._parseExpansionCase();
        if (!l) return;
        o.push(l);
      }
      if (this._peek.type !== 24) {
        this.errors.push(Ze2.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
      }
      let i = new V2(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
      this._addToParent(new HE(r.parts[0], n.parts[0], o, i, r.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
      let t = this._advance();
      if (this._peek.type !== 22) return this.errors.push(Ze2.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
      let r = this._advance(), n = this._collectExpansionExpTokens(r);
      if (!n) return null;
      let o = this._advance();
      n.push({ type: 30, parts: [], sourceSpan: o.sourceSpan });
      let i = new kr2(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
      let l = new V2(t.sourceSpan.start, o.sourceSpan.end, t.sourceSpan.fullStart), u = new V2(r.sourceSpan.start, o.sourceSpan.end, r.sourceSpan.fullStart);
      return new PE(t.parts[0], i.rootNodes, l, t.sourceSpan, u);
    }
    _collectExpansionExpTokens(t) {
      let r = [], n = [22];
      for (; ; ) {
        if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23) if (ph(n, 22)) {
          if (n.pop(), n.length === 0) return r;
        } else return this.errors.push(Ze2.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 24) if (ph(n, 20)) n.pop();
        else return this.errors.push(Ze2.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 30) return this.errors.push(Ze2.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        r.push(this._advance());
      }
    }
    _getText(t) {
      let r = t.parts[0];
      if (r.length > 0 && r[0] == `
`) {
        let n = this._getClosestParentElement();
        n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
      }
      return r;
    }
    _consumeText(t) {
      let r = [t], n = t.sourceSpan, o = t.parts[0];
      if (o.length > 0 && o[0] === `
`) {
        let i = this._getContainer();
        i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (o = o.substring(1), r[0] = { type: t.type, sourceSpan: t.sourceSpan, parts: [o] });
      }
      for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) t = this._advance(), r.push(t), t.type === 8 ? o += t.parts.join("").replace(/&([^;]+);/g, dh) : t.type === 9 ? o += t.parts[0] : o += t.parts.join("");
      if (o.length > 0) {
        let i = t.sourceSpan;
        this._addToParent(new _E(o, new V2(n.start, i.end, n.fullStart, n.details), r));
      }
    }
    _closeVoidElement() {
      let t = this._getContainer();
      t instanceof Kt2 && this.getTagDefinition(t.name).isVoid && this._containerStack.pop();
    }
    _consumeStartTag(t) {
      let [r, n] = t.parts, o = [];
      for (; this._peek.type === 14; ) o.push(this._consumeAttr(this._advance()));
      let i = this._getElementFullName(r, n, this._getClosestParentElement()), l = false;
      if (this._peek.type === 2) {
        this._advance(), l = true;
        let g6 = this.getTagDefinition(i);
        this.canSelfClose || g6.canSelfClose || Si(i) !== null || g6.isVoid || this.errors.push(Ze2.create(i, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
      } else this._peek.type === 1 && (this._advance(), l = false);
      let u = this._peek.sourceSpan.fullStart, c = new V2(t.sourceSpan.start, u, t.sourceSpan.fullStart), d = new V2(t.sourceSpan.start, u, t.sourceSpan.fullStart), p = new V2(t.sourceSpan.start.moveBy(1), t.sourceSpan.end), h = new Kt2(i, o, [], c, d, void 0, p), f = this._getContainer();
      this._pushContainer(h, f instanceof Kt2 && this.getTagDefinition(f.name).isClosedByChild(h.name)), l ? this._popContainer(i, Kt2, c) : t.type === 4 && (this._popContainer(i, Kt2, null), this.errors.push(Ze2.create(i, c, `Opening tag "${i}" not terminated.`)));
    }
    _pushContainer(t, r) {
      r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
    }
    _consumeEndTag(t) {
      let r = this.allowHtmComponentClosingTags && t.parts.length === 0 ? null : this._getElementFullName(t.parts[0], t.parts[1], this._getClosestParentElement());
      if (r && this.getTagDefinition(r).isVoid) this.errors.push(Ze2.create(r, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
      else if (!this._popContainer(r, Kt2, t.sourceSpan)) {
        let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(Ze2.create(r, t.sourceSpan, n));
      }
    }
    _popContainer(t, r, n) {
      let o = false;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let l = this._containerStack[i];
        if (Si(l.name) ? l.name === t : (t == null || l.name.toLowerCase() === t.toLowerCase()) && l instanceof r) return l.endSourceSpan = n, l.sourceSpan.end = n !== null ? n.end : l.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !o;
        (l instanceof vn2 || l instanceof Kt2 && !this.getTagDefinition(l.name).closedByParent) && (o = true);
      }
      return false;
    }
    _consumeAttr(t) {
      let r = ki(t.parts[0], t.parts[1]), n = t.sourceSpan.end, o;
      this._peek.type === 15 && (o = this._advance());
      let i = "", l = [], u, c;
      if (this._peek.type === 16) for (u = this._peek.sourceSpan, c = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
        let p = this._advance();
        l.push(p), p.type === 17 ? i += p.parts.join("").replace(/&([^;]+);/g, dh) : p.type === 9 ? i += p.parts[0] : i += p.parts.join(""), c = n = p.sourceSpan.end;
      }
      this._peek.type === 15 && (c = n = this._advance().sourceSpan.end);
      let d = u && c && new V2((o == null ? void 0 : o.sourceSpan.start) ?? u.start, c, (o == null ? void 0 : o.sourceSpan.fullStart) ?? u.fullStart);
      return new zE(r, i, new V2(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, d, l.length > 0 ? l : void 0, void 0);
    }
    _consumeBlockOpen(t) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let u = this._advance();
        r.push(new ah(u.parts[0], u.sourceSpan));
      }
      this._peek.type === 26 && this._advance();
      let n = this._peek.sourceSpan.fullStart, o = new V2(t.sourceSpan.start, n, t.sourceSpan.fullStart), i = new V2(t.sourceSpan.start, n, t.sourceSpan.fullStart), l = new vn2(t.parts[0], r, [], o, i);
      this._pushContainer(l, false);
    }
    _consumeBlockClose(t) {
      this._popContainer(null, vn2, t.sourceSpan) || this.errors.push(Ze2.create(null, t.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
    }
    _consumeIncompleteBlock(t) {
      let r = [];
      for (; this._peek.type === 28; ) {
        let u = this._advance();
        r.push(new ah(u.parts[0], u.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart, o = new V2(t.sourceSpan.start, n, t.sourceSpan.fullStart), i = new V2(t.sourceSpan.start, n, t.sourceSpan.fullStart), l = new vn2(t.parts[0], r, [], o, i);
      this._pushContainer(l, false), this._popContainer(null, vn2, null), this.errors.push(Ze2.create(t.parts[0], o, `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
    }
    _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
    }
    _getClosestParentElement() {
      for (let t = this._containerStack.length - 1; t > -1; t--) if (this._containerStack[t] instanceof Kt2) return this._containerStack[t];
      return null;
    }
    _addToParent(t) {
      let r = this._getContainer();
      r === null ? this.rootNodes.push(t) : r.children.push(t);
    }
    _getElementFullName(t, r, n) {
      if (t === "" && (t = this.getTagDefinition(r).implicitNamespacePrefix || "", t === "" && n != null)) {
        let o = Gi(n.name)[1];
        this.getTagDefinition(o).preventNamespaceInheritance || (t = Si(n.name));
      }
      return ki(t, r);
    }
  }, a2(kr2, "t"), kr2);
  a2(ph, "qs");
  a2(dh, "Hs");
  sS = (Gn2 = class extends iS {
    constructor() {
      super(ju);
    }
    parse(t, r, n, o = false, i) {
      return super.parse(t, r, n, o, i);
    }
  }, a2(Gn2, "Xt"), Gn2), Hu = null, uS = a2(() => (Hu || (Hu = new sS()), Hu), "mo");
  a2(fh, "Hr");
  a2(cS, "go");
  pS = cS, dS = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
  a2(fS, "So");
  hS = fS, Ei = { attrs: true, children: true, cases: true, expression: true }, hh = /* @__PURE__ */ new Set(["parent"]), mS = (wt2 = class {
    constructor(t = {}) {
      for (let r of /* @__PURE__ */ new Set([...hh, ...Object.keys(t)])) this.setProperty(r, t[r]);
    }
    setProperty(t, r) {
      if (this[t] !== r) {
        if (t in Ei && (r = r.map((n) => this.createChild(n))), !hh.has(t)) {
          this[t] = r;
          return;
        }
        Object.defineProperty(this, t, { value: r, enumerable: false, configurable: true });
      }
    }
    map(t) {
      let r;
      for (let n in Ei) {
        let o = this[n];
        if (o) {
          let i = gS(o, (l) => l.map(t));
          r !== o && (r || (r = new wt2({ parent: this.parent })), r.setProperty(n, i));
        }
      }
      if (r) for (let n in this) n in Ei || (r[n] = this[n]);
      return t(r || this);
    }
    walk(t) {
      for (let r in Ei) {
        let n = this[r];
        if (n) for (let o = 0; o < n.length; o++) n[o].walk(t);
      }
      t(this);
    }
    createChild(t) {
      let r = t instanceof wt2 ? t.clone() : new wt2(t);
      return r.setProperty("parent", this), r;
    }
    insertChildBefore(t, r) {
      this.children.splice(this.children.indexOf(t), 0, this.createChild(r));
    }
    removeChild(t) {
      this.children.splice(this.children.indexOf(t), 1);
    }
    replaceChild(t, r) {
      this.children[this.children.indexOf(t)] = this.createChild(r);
    }
    clone() {
      return new wt2(this);
    }
    get firstChild() {
      var t;
      return (t = this.children) == null ? void 0 : t[0];
    }
    get lastChild() {
      var t;
      return (t = this.children) == null ? void 0 : t[this.children.length - 1];
    }
    get prev() {
      var t, r;
      return (r = (t = this.parent) == null ? void 0 : t.children) == null ? void 0 : r[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var t, r;
      return (r = (t = this.parent) == null ? void 0 : t.children) == null ? void 0 : r[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((t) => [t.fullName, t.value]));
    }
  }, a2(wt2, "t"), wt2);
  a2(gS, "_o");
  vS = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: wS }, { regex: /^\[if([^\]]*)]><!$/, parse: yS }, {
    regex: /^<!\s*\[endif]$/,
    parse: DS
  }];
  a2(bS, "zs");
  a2(wS, "Ao");
  a2(yS, "Do");
  a2(DS, "vo");
  Pu = /* @__PURE__ */ new Map([
    ["*", /* @__PURE__ */ new Set([
      "accesskey",
      "autocapitalize",
      "autofocus",
      "class",
      "contenteditable",
      "dir",
      "draggable",
      "enterkeyhint",
      "hidden",
      "id",
      "inert",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "nonce",
      "popover",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate"
    ])],
    ["a", /* @__PURE__ */ new Set([
      "charset",
      "coords",
      "download",
      "href",
      "hreflang",
      "name",
      "ping",
      "referrerpolicy",
      "rel",
      "rev",
      "shape",
      "target",
      "type"
    ])],
    ["applet", /* @__PURE__ */ new Set(
      ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"]
    )],
    ["area", /* @__PURE__ */ new Set(
      ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"]
    )],
    ["audio", /* @__PURE__ */ new Set(
      ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"]
    )],
    ["base", /* @__PURE__ */ new Set(["href", "target"])],
    ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])],
    ["blockquote", /* @__PURE__ */ new Set(["cite"])],
    ["body", /* @__PURE__ */ new Set(
      ["alink", "background", "bgcolor", "link", "text", "vlink"]
    )],
    ["br", /* @__PURE__ */ new Set(["clear"])],
    ["button", /* @__PURE__ */ new Set(
      ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"]
    )],
    ["canvas", /* @__PURE__ */ new Set(["height", "width"])],
    ["caption", /* @__PURE__ */ new Set(["align"])],
    [
      "col",
      /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])
    ],
    ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])],
    ["data", /* @__PURE__ */ new Set(["value"])],
    ["del", /* @__PURE__ */ new Set(["cite", "datetime"])],
    ["details", /* @__PURE__ */ new Set(["name", "open"])],
    ["dialog", /* @__PURE__ */ new Set(["open"])],
    ["dir", /* @__PURE__ */ new Set(["compact"])],
    ["div", /* @__PURE__ */ new Set(["align"])],
    ["dl", /* @__PURE__ */ new Set(["compact"])],
    ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])],
    ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])],
    ["font", /* @__PURE__ */ new Set(["color", "face", "size"])],
    ["form", /* @__PURE__ */ new Set([
      "accept",
      "accept-charset",
      "action",
      "autocomplete",
      "enctype",
      "method",
      "name",
      "novalidate",
      "target"
    ])],
    ["frame", /* @__PURE__ */ new Set([
      "frameborder",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "noresize",
      "scrolling",
      "src"
    ])],
    ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])],
    ["h1", /* @__PURE__ */ new Set(["align"])],
    ["h2", /* @__PURE__ */ new Set(
      ["align"]
    )],
    ["h3", /* @__PURE__ */ new Set(["align"])],
    ["h4", /* @__PURE__ */ new Set(["align"])],
    ["h5", /* @__PURE__ */ new Set(["align"])],
    ["h6", /* @__PURE__ */ new Set(["align"])],
    ["head", /* @__PURE__ */ new Set(["profile"])],
    ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])],
    ["html", /* @__PURE__ */ new Set(["manifest", "version"])],
    ["iframe", /* @__PURE__ */ new Set([
      "align",
      "allow",
      "allowfullscreen",
      "allowpaymentrequest",
      "allowusermedia",
      "frameborder",
      "height",
      "loading",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "referrerpolicy",
      "sandbox",
      "scrolling",
      "src",
      "srcdoc",
      "width"
    ])],
    ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])],
    ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])],
    ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])],
    ["isindex", /* @__PURE__ */ new Set(
      ["prompt"]
    )],
    ["label", /* @__PURE__ */ new Set(["for", "form"])],
    ["legend", /* @__PURE__ */ new Set(["align"])],
    ["li", /* @__PURE__ */ new Set(
      ["type", "value"]
    )],
    ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])],
    ["map", /* @__PURE__ */ new Set(
      ["name"]
    )],
    ["menu", /* @__PURE__ */ new Set(["compact"])],
    ["meta", /* @__PURE__ */ new Set([
      "charset",
      "content",
      "http-equiv",
      "media",
      "name",
      "scheme"
    ])],
    ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])],
    ["object", /* @__PURE__ */ new Set(
      [
        "align",
        "archive",
        "border",
        "classid",
        "codebase",
        "codetype",
        "data",
        "declare",
        "form",
        "height",
        "hspace",
        "name",
        "standby",
        "type",
        "typemustmatch",
        "usemap",
        "vspace",
        "width"
      ]
    )],
    ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])],
    ["optgroup", /* @__PURE__ */ new Set(
      ["disabled", "label"]
    )],
    ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])],
    ["output", /* @__PURE__ */ new Set(
      ["for", "form", "name"]
    )],
    ["p", /* @__PURE__ */ new Set(["align"])],
    ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])],
    ["pre", /* @__PURE__ */ new Set(["width"])],
    ["progress", /* @__PURE__ */ new Set(["max", "value"])],
    ["q", /* @__PURE__ */ new Set(
      ["cite"]
    )],
    ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])],
    ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])],
    ["slot", /* @__PURE__ */ new Set(["name"])],
    ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])],
    ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])],
    ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])],
    ["tbody", /* @__PURE__ */ new Set([
      "align",
      "char",
      "charoff",
      "valign"
    ])],
    ["td", /* @__PURE__ */ new Set([
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width"
    ])],
    ["template", /* @__PURE__ */ new Set(["shadowrootdelegatesfocus", "shadowrootmode"])],
    ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])],
    ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])],
    ["th", /* @__PURE__ */ new Set(
      ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"]
    )],
    ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])],
    ["time", /* @__PURE__ */ new Set(["datetime"])],
    ["tr", /* @__PURE__ */ new Set(
      ["align", "bgcolor", "char", "charoff", "valign"]
    )],
    ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])],
    [
      "ul",
      /* @__PURE__ */ new Set(["compact", "type"])
    ],
    ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]
  ]), xS = /* @__PURE__ */ new Set([
    "a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "content",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "image",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "math",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "multicol",
    "nav",
    "nextid",
    "nobr",
    "noembed",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rb",
    "rbc",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "svg",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp"
  ]);
  a2(CS, "yo");
  a2(ES, "wo");
  a2(n2, "js");
  a2(SS, "bo");
  a2(mh, "Ys");
  a2(o2, "Ks");
  a2(Xi, "tr");
  a22 = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }, RS = Xi(a22), AS = Xi({ name: "angular" }), FS = Xi({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(e6, t, r, n) {
    return e6.toLowerCase() !== "html" && !r && (e6 !== "template" || n.some(({ name: o, value: i }) => o === "lang" && i !== "html" && i !== "" && i !== void 0));
  } }), kS = Xi({ name: "lwc", canSelfClose: false }), TS = { html: xE }, i2 = bh;
});
function WS(e6) {
  let t = e6.indexOf("\r");
  return t >= 0 ? e6.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Sc(e6) {
  switch (e6) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function z2(e6, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/g;
      break;
    case "\r":
      r = /\r/g;
      break;
    case `\r
`:
      r = /\r\n/g;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e6.match(r);
  return n ? n.length : 0;
}
function US(e6) {
  return ol(false, e6, /\r\n?/g, `
`);
}
function GS(e6) {
  if (typeof e6 == "string") return zr2;
  if (Array.isArray(e6)) return tr;
  if (!e6) return;
  let { type: t } = e6;
  if (O22.has(t)) return t;
}
function YS(e6) {
  let t = e6 === null ? "null" : typeof e6;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Nr2(e6)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e6);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = XS([...O22].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e6.type}'.
Expected it to be ${n}.`;
}
function ZS(e6, t, r, n) {
  let o = [e6];
  for (; o.length > 0; ) {
    let i = o.pop();
    if (i === u2) {
      r(o.pop());
      continue;
    }
    r && o.push(i, u2);
    let l = Nr2(i);
    if (!l) throw new vo2(i);
    if ((t == null ? void 0 : t(i)) !== false) switch (l) {
      case tr:
      case Qe2: {
        let u = l === tr ? i : i.parts;
        for (let c = u.length, d = c - 1; d >= 0; --d) o.push(u[d]);
        break;
      }
      case Ve2:
        o.push(i.flatContents, i.breakContents);
        break;
      case ze2:
        if (n && i.expandedStates) for (let u = i.expandedStates.length, c = u - 1; c >= 0; --c) o.push(i.expandedStates[c]);
        else o.push(i.contents);
        break;
      case Mt2:
      case It2:
      case $t2:
      case Et2:
      case Ht2:
        o.push(i.contents);
        break;
      case zr2:
      case Or2:
      case _t2:
      case Pt2:
      case Ce2:
      case et2:
        break;
      default:
        throw new vo2(i);
    }
  }
}
function Qi(e6) {
  return Ct2(e6), { type: It2, contents: e6 };
}
function bo2(e6, t) {
  return Ct2(t), { type: Mt2, contents: t, n: e6 };
}
function j2(e6, t = {}) {
  return Ct2(e6), Ac(t.expandedStates, true), { type: ze2, id: t.id, contents: e6, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function JS(e6) {
  return bo2(Number.NEGATIVE_INFINITY, e6);
}
function QS(e6) {
  return bo2({ type: "root" }, e6);
}
function eR(e6) {
  return bo2(-1, e6);
}
function tR(e6, t) {
  return j2(e6[0], { ...t, expandedStates: e6 });
}
function V22(e6) {
  return Ac(e6), { type: Qe2, parts: e6 };
}
function rR(e6, t = "", r = {}) {
  return Ct2(e6), t !== "" && Ct2(t), { type: Ve2, breakContents: e6, flatContents: t, groupId: r.groupId };
}
function nR(e6, t) {
  return Ct2(e6), { type: $t2, contents: e6, groupId: t.groupId, negate: t.negate };
}
function vc(e6) {
  return Ct2(e6), { type: Ht2, contents: e6 };
}
function G2(e6, t) {
  Ct2(e6), Ac(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e6), r.push(t[n]);
  return r;
}
function X22(e6, t, r) {
  Ct2(e6);
  let n = e6;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / r); ++o) n = Qi(n);
    n = bo2(t % r, n), n = bo2(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function lR(e6, t) {
  return Ct2(t), e6 ? { type: Et2, label: e6, contents: t } : t;
}
function Bt2(e6) {
  var t;
  if (!e6) return "";
  if (Array.isArray(e6)) {
    let r = [];
    for (let n of e6) if (Array.isArray(n)) r.push(...Bt2(n));
    else {
      let o = Bt2(n);
      o !== "" && r.push(o);
    }
    return r;
  }
  return e6.type === Ve2 ? { ...e6, breakContents: Bt2(e6.breakContents), flatContents: Bt2(e6.flatContents) } : e6.type === ze2 ? { ...e6, contents: Bt2(
    e6.contents
  ), expandedStates: (t = e6.expandedStates) == null ? void 0 : t.map(Bt2) } : e6.type === Qe2 ? { type: "fill", parts: e6.parts.map(Bt2) } : e6.contents ? { ...e6, contents: Bt2(e6.contents) } : e6;
}
function sR(e6) {
  let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(Bt2(e6));
  function n(i, l, u) {
    var c, d;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let p = i.map(n).filter(Boolean);
      return p.length === 1 ? p[0] : `[${p.join(", ")}]`;
    }
    if (i.type === Ce2) {
      let p = ((c = u == null ? void 0 : u[l + 1]) == null ? void 0 : c.type) === et2;
      return i.literal ? p ? "literalline" : "literallineWithoutBreakParent" : i.hard ? p ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === et2) return ((d = u == null ? void 0 : u[l - 1]) == null ? void 0 : d.type) === Ce2 && u[l - 1].hard ? void 0 : "breakParent";
    if (i.type === _t2) return "trim";
    if (i.type === It2) return "indent(" + n(i.contents) + ")";
    if (i.type === Mt2) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(i.contents) + ")" : i.n < 0 ? "dedent(" + n(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
    if (i.type === Ve2) return "ifBreak(" + n(i.breakContents) + (i.flatContents ? ", " + n(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${o(i.groupId)} }` : "") + ")";
    if (i.type === $t2) {
      let p = [];
      i.negate && p.push("negate: true"), i.groupId && p.push(`groupId: ${o(i.groupId)}`);
      let h = p.length > 0 ? `, { ${p.join(", ")} }` : "";
      return `indentIfBreak(${n(i.contents)}${h})`;
    }
    if (i.type === ze2) {
      let p = [];
      i.break && i.break !== "propagated" && p.push("shouldBreak: true"), i.id && p.push(`id: ${o(i.id)}`);
      let h = p.length > 0 ? `, { ${p.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => n(f)).join(",")}]${h})` : `group(${n(i.contents)}${h})`;
    }
    if (i.type === Qe2) return `fill([${i.parts.map((p) => n(p)).join(", ")}])`;
    if (i.type === Ht2) return "lineSuffix(" + n(i.contents) + ")";
    if (i.type === Pt2) return "lineSuffixBoundary";
    if (i.type === Et2) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function o(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t) return t[i];
    let l = i.description || "symbol";
    for (let u = 0; ; u++) {
      let c = l + (u > 0 ? ` #${u}` : "");
      if (!r.has(c)) return r.add(c), t[i] = `Symbol.for(${JSON.stringify(c)})`;
    }
  }
}
function pR(e6) {
  return e6 === 12288 || e6 >= 65281 && e6 <= 65376 || e6 >= 65504 && e6 <= 65510;
}
function dR(e6) {
  return e6 >= 4352 && e6 <= 4447 || e6 === 8986 || e6 === 8987 || e6 === 9001 || e6 === 9002 || e6 >= 9193 && e6 <= 9196 || e6 === 9200 || e6 === 9203 || e6 === 9725 || e6 === 9726 || e6 === 9748 || e6 === 9749 || e6 >= 9800 && e6 <= 9811 || e6 === 9855 || e6 === 9875 || e6 === 9889 || e6 === 9898 || e6 === 9899 || e6 === 9917 || e6 === 9918 || e6 === 9924 || e6 === 9925 || e6 === 9934 || e6 === 9940 || e6 === 9962 || e6 === 9970 || e6 === 9971 || e6 === 9973 || e6 === 9978 || e6 === 9981 || e6 === 9989 || e6 === 9994 || e6 === 9995 || e6 === 10024 || e6 === 10060 || e6 === 10062 || e6 >= 10067 && e6 <= 10069 || e6 === 10071 || e6 >= 10133 && e6 <= 10135 || e6 === 10160 || e6 === 10175 || e6 === 11035 || e6 === 11036 || e6 === 11088 || e6 === 11093 || e6 >= 11904 && e6 <= 11929 || e6 >= 11931 && e6 <= 12019 || e6 >= 12032 && e6 <= 12245 || e6 >= 12272 && e6 <= 12287 || e6 >= 12289 && e6 <= 12350 || e6 >= 12353 && e6 <= 12438 || e6 >= 12441 && e6 <= 12543 || e6 >= 12549 && e6 <= 12591 || e6 >= 12593 && e6 <= 12686 || e6 >= 12688 && e6 <= 12771 || e6 >= 12783 && e6 <= 12830 || e6 >= 12832 && e6 <= 12871 || e6 >= 12880 && e6 <= 19903 || e6 >= 19968 && e6 <= 42124 || e6 >= 42128 && e6 <= 42182 || e6 >= 43360 && e6 <= 43388 || e6 >= 44032 && e6 <= 55203 || e6 >= 63744 && e6 <= 64255 || e6 >= 65040 && e6 <= 65049 || e6 >= 65072 && e6 <= 65106 || e6 >= 65108 && e6 <= 65126 || e6 >= 65128 && e6 <= 65131 || e6 >= 94176 && e6 <= 94180 || e6 === 94192 || e6 === 94193 || e6 >= 94208 && e6 <= 100343 || e6 >= 100352 && e6 <= 101589 || e6 >= 101632 && e6 <= 101640 || e6 >= 110576 && e6 <= 110579 || e6 >= 110581 && e6 <= 110587 || e6 === 110589 || e6 === 110590 || e6 >= 110592 && e6 <= 110882 || e6 === 110898 || e6 >= 110928 && e6 <= 110930 || e6 === 110933 || e6 >= 110948 && e6 <= 110951 || e6 >= 110960 && e6 <= 111355 || e6 === 126980 || e6 === 127183 || e6 === 127374 || e6 >= 127377 && e6 <= 127386 || e6 >= 127488 && e6 <= 127490 || e6 >= 127504 && e6 <= 127547 || e6 >= 127552 && e6 <= 127560 || e6 === 127568 || e6 === 127569 || e6 >= 127584 && e6 <= 127589 || e6 >= 127744 && e6 <= 127776 || e6 >= 127789 && e6 <= 127797 || e6 >= 127799 && e6 <= 127868 || e6 >= 127870 && e6 <= 127891 || e6 >= 127904 && e6 <= 127946 || e6 >= 127951 && e6 <= 127955 || e6 >= 127968 && e6 <= 127984 || e6 === 127988 || e6 >= 127992 && e6 <= 128062 || e6 === 128064 || e6 >= 128066 && e6 <= 128252 || e6 >= 128255 && e6 <= 128317 || e6 >= 128331 && e6 <= 128334 || e6 >= 128336 && e6 <= 128359 || e6 === 128378 || e6 === 128405 || e6 === 128406 || e6 === 128420 || e6 >= 128507 && e6 <= 128591 || e6 >= 128640 && e6 <= 128709 || e6 === 128716 || e6 >= 128720 && e6 <= 128722 || e6 >= 128725 && e6 <= 128727 || e6 >= 128732 && e6 <= 128735 || e6 === 128747 || e6 === 128748 || e6 >= 128756 && e6 <= 128764 || e6 >= 128992 && e6 <= 129003 || e6 === 129008 || e6 >= 129292 && e6 <= 129338 || e6 >= 129340 && e6 <= 129349 || e6 >= 129351 && e6 <= 129535 || e6 >= 129648 && e6 <= 129660 || e6 >= 129664 && e6 <= 129672 || e6 >= 129680 && e6 <= 129725 || e6 >= 129727 && e6 <= 129733 || e6 >= 129742 && e6 <= 129755 || e6 >= 129760 && e6 <= 129768 || e6 >= 129776 && e6 <= 129784 || e6 >= 131072 && e6 <= 196605 || e6 >= 196608 && e6 <= 262141;
}
function mR(e6) {
  if (!e6) return 0;
  if (!hR.test(e6)) return e6.length;
  e6 = e6.replace(cR(), "  ");
  let t = 0;
  for (let r of e6) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += fR(n) ? 1 : 2);
  }
  return t;
}
function il(e6, t) {
  if (typeof e6 == "string") return t(e6);
  let r = /* @__PURE__ */ new Map();
  return n(e6);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let l = o(i);
    return r.set(i, l), l;
  }
  function o(i) {
    switch (Nr2(i)) {
      case tr:
        return t(i.map(n));
      case Qe2:
        return t({ ...i, parts: i.parts.map(n) });
      case Ve2:
        return t({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case ze2: {
        let { expandedStates: l, contents: u } = i;
        return l ? (l = l.map(n), u = l[0]) : u = n(u), t({ ...i, contents: u, expandedStates: l });
      }
      case Mt2:
      case It2:
      case $t2:
      case Et2:
      case Ht2:
        return t({ ...i, contents: n(i.contents) });
      case zr2:
      case Or2:
      case _t2:
      case Pt2:
      case Ce2:
      case et2:
        return t(i);
      default:
        throw new vo2(i);
    }
  }
}
function Tc(e6, t, r) {
  let n = r, o = false;
  function i(l) {
    if (o) return false;
    let u = t(l);
    u !== void 0 && (o = true, n = u);
  }
  return a2(i, "u"), Rc(e6, i), n;
}
function vR(e6) {
  if (e6.type === ze2 && e6.break || e6.type === Ce2 && e6.hard || e6.type === et2) return true;
}
function bR(e6) {
  return Tc(e6, vR, false);
}
function c2(e6) {
  if (e6.length > 0) {
    let t = fe2(false, e6, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function wR(e6) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(i) {
    if (i.type === et2 && c2(r), i.type === ze2) {
      if (r.push(i), t.has(i)) return false;
      t.add(i);
    }
  }
  a2(n, "n");
  function o(i) {
    i.type === ze2 && r.pop().break && c2(r);
  }
  a2(o, "o"), Rc(e6, n, o, true);
}
function yR(e6) {
  return e6.type === Ce2 && !e6.hard ? e6.soft ? "" : " " : e6.type === Ve2 ? e6.flatContents : e6;
}
function DR(e6) {
  return il(e6, yR);
}
function p2(e6) {
  for (e6 = [...e6]; e6.length >= 2 && fe2(false, e6, -2).type === Ce2 && fe2(false, e6, -1).type === et2; ) e6.length -= 2;
  if (e6.length > 0) {
    let t = Ea2(fe2(false, e6, -1));
    e6[e6.length - 1] = t;
  }
  return e6;
}
function Ea2(e6) {
  switch (Nr2(e6)) {
    case Mt2:
    case It2:
    case $t2:
    case ze2:
    case Ht2:
    case Et2: {
      let t = Ea2(e6.contents);
      return { ...e6, contents: t };
    }
    case Ve2:
      return { ...e6, breakContents: Ea2(e6.breakContents), flatContents: Ea2(e6.flatContents) };
    case Qe2:
      return { ...e6, parts: p2(e6.parts) };
    case tr:
      return p2(e6);
    case zr2:
      return e6.replace(/[\n\r]*$/, "");
    case Or2:
    case _t2:
    case Pt2:
    case Ce2:
    case et2:
      break;
    default:
      throw new vo2(e6);
  }
  return e6;
}
function Y2(e6) {
  return Ea2(CR(e6));
}
function xR(e6) {
  switch (Nr2(e6)) {
    case Qe2:
      if (e6.parts.every((t) => t === "")) return "";
      break;
    case ze2:
      if (!e6.contents && !e6.id && !e6.break && !e6.expandedStates) return "";
      if (e6.contents.type === ze2 && e6.contents.id === e6.id && e6.contents.break === e6.break && e6.contents.expandedStates === e6.expandedStates)
        return e6.contents;
      break;
    case Mt2:
    case It2:
    case $t2:
    case Ht2:
      if (!e6.contents) return "";
      break;
    case Ve2:
      if (!e6.flatContents && !e6.breakContents) return "";
      break;
    case tr: {
      let t = [];
      for (let r of e6) {
        if (!r) continue;
        let [n, ...o] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof fe2(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case zr2:
    case Or2:
    case _t2:
    case Pt2:
    case Ce2:
    case Et2:
    case et2:
      break;
    default:
      throw new vo2(e6);
  }
  return e6;
}
function CR(e6) {
  return il(e6, (t) => xR(t));
}
function ER(e6, t = U22) {
  return il(e6, (r) => typeof r == "string" ? G2(t, r.split(`
`)) : r);
}
function SR(e6) {
  if (e6.type === Ce2) return true;
}
function RR(e6) {
  return Tc(e6, SR, false);
}
function K2(e6, t) {
  return e6.type === Et2 ? { ...e6, contents: t(e6.contents) } : t(e6);
}
function Z22() {
  return { value: "", length: 0, queue: [] };
}
function AR(e6, t) {
  return wc(e6, { type: "indent" }, t);
}
function FR(e6, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e6.root || Z22() : t < 0 ? wc(e6, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e6, root: e6 } : wc(e6, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e6;
}
function wc(e6, t, r) {
  let n = t.type === "dedent" ? e6.queue.slice(0, -1) : [...e6.queue, t], o = "", i = 0, l = 0, u = 0;
  for (let w4 of n) switch (w4.type) {
    case "indent":
      p(), r.useTabs ? c(1) : d(r.tabWidth);
      break;
    case "stringAlign":
      p(), o += w4.n, i += w4.n.length;
      break;
    case "numberAlign":
      l += 1, u += w4.n;
      break;
    default:
      throw new Error(`Unexpected type '${w4.type}'`);
  }
  return f(), { ...e6, value: o, length: i, queue: n };
  function c(w4) {
    o += "	".repeat(w4), i += r.tabWidth * w4;
  }
  function d(w4) {
    o += " ".repeat(w4), i += w4;
  }
  function p() {
    r.useTabs ? h() : f();
  }
  function h() {
    l > 0 && c(l), g6();
  }
  function f() {
    u > 0 && d(u), g6();
  }
  function g6() {
    l = 0, u = 0;
  }
}
function yc(e6) {
  let t = 0, r = 0, n = e6.length;
  e: for (; n--; ) {
    let o = e6[n];
    if (o === Sa2) {
      r++;
      continue;
    }
    for (let i = o.length - 1; i >= 0; i--) {
      let l = o[i];
      if (l === " " || l === "	") t++;
      else {
        e6[n] = o.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e6.length = n + 1; r-- > 0; ) e6.push(Sa2);
  return t;
}
function Yi(e6, t, r, n, o, i) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let l = t.length, u = [e6], c = [];
  for (; r >= 0; ) {
    if (u.length === 0) {
      if (l === 0) return true;
      u.push(t[--l]);
      continue;
    }
    let { mode: d, doc: p } = u.pop();
    switch (Nr2(p)) {
      case zr2:
        c.push(p), r -= kc(p);
        break;
      case tr:
      case Qe2: {
        let h = gR(p);
        for (let f = h.length - 1; f >= 0; f--) u.push({ mode: d, doc: h[f] });
        break;
      }
      case It2:
      case Mt2:
      case $t2:
      case Et2:
        u.push({ mode: d, doc: p.contents });
        break;
      case _t2:
        r += yc(c);
        break;
      case ze2: {
        if (i && p.break) return false;
        let h = p.break ? Pe : d, f = p.expandedStates && h === Pe ? fe2(false, p.expandedStates, -1) : p.contents;
        u.push({ mode: h, doc: f });
        break;
      }
      case Ve2: {
        let h = (p.groupId ? o[p.groupId] || xt2 : d) === Pe ? p.breakContents : p.flatContents;
        h && u.push({ mode: d, doc: h });
        break;
      }
      case Ce2:
        if (d === Pe || p.hard) return true;
        p.soft || (c.push(" "), r--);
        break;
      case Ht2:
        n = true;
        break;
      case Pt2:
        if (n) return false;
        break;
    }
  }
  return false;
}
function ll(e6, t) {
  let r = {}, n = t.printWidth, o = Sc(t.endOfLine), i = 0, l = [{ ind: Z22(), mode: Pe, doc: e6 }], u = [], c = false, d = [], p = 0;
  for (wR(e6); l.length > 0; ) {
    let { ind: f, mode: g6, doc: w4 } = l.pop();
    switch (Nr2(w4)) {
      case zr2: {
        let m = o !== `
` ? ol(false, w4, `
`, o) : w4;
        u.push(m), l.length > 0 && (i += kc(m));
        break;
      }
      case tr:
        for (let m = w4.length - 1; m >= 0; m--) l.push({ ind: f, mode: g6, doc: w4[m] });
        break;
      case Or2:
        if (p >= 2) throw new Error("There are too many 'cursor' in doc.");
        u.push(Sa2), p++;
        break;
      case It2:
        l.push({ ind: AR(f, t), mode: g6, doc: w4.contents });
        break;
      case Mt2:
        l.push({ ind: FR(f, w4.n, t), mode: g6, doc: w4.contents });
        break;
      case _t2:
        i -= yc(u);
        break;
      case ze2:
        switch (g6) {
          case xt2:
            if (!c) {
              l.push({ ind: f, mode: w4.break ? Pe : xt2, doc: w4.contents });
              break;
            }
          case Pe: {
            c = false;
            let m = { ind: f, mode: xt2, doc: w4.contents }, v = n - i, y = d.length > 0;
            if (!w4.break && Yi(m, l, v, y, r)) l.push(m);
            else if (w4.expandedStates) {
              let b = fe2(false, w4.expandedStates, -1);
              if (w4.break) {
                l.push({ ind: f, mode: Pe, doc: b });
                break;
              } else for (let D4 = 1; D4 < w4.expandedStates.length + 1; D4++) if (D4 >= w4.expandedStates.length) {
                l.push({ ind: f, mode: Pe, doc: b });
                break;
              } else {
                let x = w4.expandedStates[D4], C = { ind: f, mode: xt2, doc: x };
                if (Yi(C, l, v, y, r)) {
                  l.push(C);
                  break;
                }
              }
            } else l.push({ ind: f, mode: Pe, doc: w4.contents });
            break;
          }
        }
        w4.id && (r[w4.id] = fe2(false, l, -1).mode);
        break;
      case Qe2: {
        let m = n - i, { parts: v } = w4;
        if (v.length === 0) break;
        let [y, b] = v, D4 = { ind: f, mode: xt2, doc: y }, x = { ind: f, mode: Pe, doc: y }, C = Yi(D4, [], m, d.length > 0, r, true);
        if (v.length === 1) {
          C ? l.push(D4) : l.push(x);
          break;
        }
        let E = { ind: f, mode: xt2, doc: b }, S = { ind: f, mode: Pe, doc: b };
        if (v.length === 2) {
          C ? l.push(E, D4) : l.push(S, x);
          break;
        }
        v.splice(0, 2);
        let R = { ind: f, mode: g6, doc: V22(v) }, F6 = v[0];
        Yi({ ind: f, mode: xt2, doc: [y, b, F6] }, [], m, d.length > 0, r, true) ? l.push(R, E, D4) : C ? l.push(R, S, D4) : l.push(R, S, x);
        break;
      }
      case Ve2:
      case $t2: {
        let m = w4.groupId ? r[w4.groupId] : g6;
        if (m === Pe) {
          let v = w4.type === Ve2 ? w4.breakContents : w4.negate ? w4.contents : Qi(w4.contents);
          v && l.push({ ind: f, mode: g6, doc: v });
        }
        if (m === xt2) {
          let v = w4.type === Ve2 ? w4.flatContents : w4.negate ? Qi(w4.contents) : w4.contents;
          v && l.push({ ind: f, mode: g6, doc: v });
        }
        break;
      }
      case Ht2:
        d.push({ ind: f, mode: g6, doc: w4.contents });
        break;
      case Pt2:
        d.length > 0 && l.push({ ind: f, mode: g6, doc: Fc });
        break;
      case Ce2:
        switch (g6) {
          case xt2:
            if (w4.hard) c = true;
            else {
              w4.soft || (u.push(" "), i += 1);
              break;
            }
          case Pe:
            if (d.length > 0) {
              l.push({ ind: f, mode: g6, doc: w4 }, ...d.reverse()), d.length = 0;
              break;
            }
            w4.literal ? f.root ? (u.push(o, f.root.value), i = f.root.length) : (u.push(o), i = 0) : (i -= yc(u), u.push(o + f.value), i = f.length);
            break;
        }
        break;
      case Et2:
        l.push({ ind: f, mode: g6, doc: w4.contents });
        break;
      case et2:
        break;
      default:
        throw new vo2(w4);
    }
    l.length === 0 && d.length > 0 && (l.push(...d.reverse()), d.length = 0);
  }
  let h = u.indexOf(Sa2);
  if (h !== -1) {
    let f = u.indexOf(Sa2, h + 1), g6 = u.slice(0, h).join(""), w4 = u.slice(h + 1, f).join(""), m = u.slice(f + 1).join("");
    return { formatted: g6 + w4 + m, cursorNodeStart: g6.length, cursorNodeText: w4 };
  }
  return { formatted: u.join("") };
}
function kR(e6, t, r = 0) {
  let n = 0;
  for (let o = r; o < e6.length; ++o) e6[o] === "	" ? n = n + t - n % t : n++;
  return n;
}
function BR(e6) {
  return e6 !== null && typeof e6 == "object";
}
function* Q2(e6, t) {
  let { getVisitorKeys: r, filter: n = a2(() => true, "n") } = t, o = a2((i) => IR(i) && n(i), "o");
  for (let i of r(e6)) {
    let l = e6[i];
    if (Array.isArray(l)) for (let u of l) o(u) && (yield u);
    else o(l) && (yield l);
  }
}
function* MR(e6, t) {
  let r = [e6];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    for (let i of Q2(o, t)) yield i, r.push(i);
  }
}
function Aa2(e6) {
  return (t, r, n) => {
    let o = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: i } = t, l = r;
    for (; l >= 0 && l < i; ) {
      let u = t.charAt(l);
      if (e6 instanceof RegExp) {
        if (!e6.test(u)) return l;
      } else if (!e6.includes(u)) return l;
      o ? l-- : l++;
    }
    return l === -1 || l === i ? l : false;
  };
}
function $R(e6, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === false) return false;
  let o = e6.charAt(t);
  if (n) {
    if (e6.charAt(t - 1) === "\r" && o === `
`) return t - 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t - 1;
  } else {
    if (o === "\r" && e6.charAt(t + 1) === `
`) return t + 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t + 1;
  }
  return t;
}
function HR(e6, t, r = {}) {
  let n = rr(e6, r.backwards ? t - 1 : t, r), o = Pr2(e6, n, r);
  return n !== o;
}
function PR(e6) {
  return Array.isArray(e6) && e6.length > 0;
}
function NR(e6) {
  return e6 ? (t) => e6(t, rm) : OR;
}
function jR(e6) {
  let t = e6.type || e6.kind || "(unknown type)", r = String(e6.name || e6.id && (typeof e6.id == "object" ? e6.id.name : e6.id) || e6.key && (typeof e6.key == "object" ? e6.key.name : e6.key) || e6.value && (typeof e6.value == "object" ? "" : String(e6.value)) || e6.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Bc(e6, t) {
  (e6.comments ?? (e6.comments = [])).push(t), t.printed = false, t.nodeDescription = jR(e6);
}
function Jn2(e6, t) {
  t.leading = true, t.trailing = false, Bc(e6, t);
}
function _r2(e6, t, r) {
  t.leading = false, t.trailing = false, r && (t.marker = r), Bc(e6, t);
}
function Qn2(e6, t) {
  t.leading = false, t.trailing = true, Bc(e6, t);
}
function Ic(e6, t) {
  if (pc2.has(e6)) return pc2.get(e6);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: o }, locStart: i, locEnd: l } = t;
  if (!n) return [];
  let u = ((r == null ? void 0 : r(e6, t)) ?? [...Q2(e6, { getVisitorKeys: sl(o) })]).flatMap((c) => n(c) ? [c] : Ic(c, t));
  return u.sort((c, d) => i(c) - i(d) || l(c) - l(d)), pc2.set(e6, u), u;
}
function nm(e6, t, r, n) {
  let { locStart: o, locEnd: i } = r, l = o(t), u = i(t), c = Ic(e6, r), d, p, h = 0, f = c.length;
  for (; h < f; ) {
    let g6 = h + f >> 1, w4 = c[g6], m = o(w4), v = i(w4);
    if (m <= l && u <= v) return nm(w4, t, r, w4);
    if (v <= l) {
      d = w4, h = g6 + 1;
      continue;
    }
    if (u <= m) {
      p = w4, f = g6;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: g6 } = n, w4 = fc(g6, t, r);
    d && fc(g6, d, r) !== w4 && (d = null), p && fc(g6, p, r) !== w4 && (p = null);
  }
  return { enclosingNode: n, precedingNode: d, followingNode: p };
}
function VR(e6, t) {
  let { comments: r } = e6;
  if (delete e6.comments, !zR(r) || !t.printer.canAttachComment) return;
  let n = [], { locStart: o, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: l = false } = {}, handleComments: u = {} }, originalText: c } = t, { ownLine: d = dc, endOfLine: p = dc, remaining: h = dc } = u, f = r.map((g6, w4) => ({
    ...nm(e6, g6, t),
    comment: g6,
    text: c,
    options: t,
    ast: e6,
    isLastComment: r.length - 1 === w4
  }));
  for (let [g6, w4] of f.entries()) {
    let { comment: m, precedingNode: v, enclosingNode: y, followingNode: b, text: D4, options: x, ast: C, isLastComment: E } = w4;
    if (x.parser === "json" || x.parser === "json5" || x.parser === "jsonc" || x.parser === "__js_expression" || x.parser === "__ts_expression" || x.parser === "__vue_expression" || x.parser === "__vue_ts_expression") {
      if (o(m) - o(C) <= 0) {
        Jn2(C, m);
        continue;
      }
      if (i(m) - i(C) >= 0) {
        Qn2(C, m);
        continue;
      }
    }
    let S;
    if (l ? S = [w4] : (m.enclosingNode = y, m.precedingNode = v, m.followingNode = b, S = [m, D4, x, C, E]), qR(D4, x, f, g6)) m.placement = "ownLine", d(...S) || (b ? Jn2(b, m) : v ? Qn2(v, m) : _r2(y || C, m));
    else if (WR(D4, x, f, g6)) m.placement = "endOfLine", p(...S) || (v ? Qn2(v, m) : b ? Jn2(b, m) : _r2(y || C, m));
    else if (m.placement = "remaining", !h(...S)) if (v && b) {
      let R = n.length;
      R > 0 && n[R - 1].followingNode !== b && d2(n, x), n.push(w4);
    } else v ? Qn2(v, m) : b ? Jn2(b, m) : _r2(y || C, m);
  }
  if (d2(n, t), !l) for (let g6 of r) delete g6.precedingNode, delete g6.enclosingNode, delete g6.followingNode;
}
function qR(e6, t, r, n) {
  let { comment: o, precedingNode: i } = r[n], { locStart: l, locEnd: u } = t, c = l(o);
  if (i) for (let d = n - 1; d >= 0; d--) {
    let { comment: p, precedingNode: h } = r[d];
    if (h !== i || !om(e6.slice(u(p), c))) break;
    c = l(p);
  }
  return er(e6, c, { backwards: true });
}
function WR(e6, t, r, n) {
  let { comment: o, followingNode: i } = r[n], { locStart: l, locEnd: u } = t, c = u(o);
  if (i) for (let d = n + 1; d < r.length; d++) {
    let { comment: p, followingNode: h } = r[d];
    if (h !== i || !om(e6.slice(c, l(p)))) break;
    c = u(p);
  }
  return er(e6, c);
}
function d2(e6, t) {
  var r, n;
  let o = e6.length;
  if (o === 0) return;
  let { precedingNode: i, followingNode: l } = e6[0], u = t.locStart(l), c;
  for (c = o; c > 0; --c) {
    let { comment: d, precedingNode: p, followingNode: h } = e6[c - 1];
    xc.strictEqual(p, i), xc.strictEqual(h, l);
    let f = t.originalText.slice(t.locEnd(d), u);
    if (((n = (r = t.printer).isGap) == null ? void 0 : n.call(r, f, t)) ?? /^[\s(]*$/.test(f)) u = t.locStart(d);
    else break;
  }
  for (let [d, { comment: p }] of e6.entries()) d < c ? Qn2(i, p) : Jn2(l, p);
  for (let d of [i, l]) d.comments && d.comments.length > 1 && d.comments.sort((p, h) => t.locStart(p) - t.locStart(h));
  e6.length = 0;
}
function fc(e6, t, r) {
  let n = r.locStart(t) - 1;
  for (let o = 1; o < e6.length; ++o) if (n < r.locStart(e6[o])) return o - 1;
  return 0;
}
function UR(e6, t) {
  let r = t - 1;
  r = rr(e6, r, { backwards: true }), r = Pr2(e6, r, { backwards: true }), r = rr(e6, r, { backwards: true });
  let n = Pr2(e6, r, { backwards: true });
  return r !== n;
}
function am(e6, t) {
  let r = e6.node;
  return r.printed = true, t.printer.printComment(e6, t);
}
function GR(e6, t) {
  var r;
  let n = e6.node, o = [am(e6, t)], { printer: i, originalText: l, locStart: u, locEnd: c } = t;
  if ((r = i.isBlockComment) != null && r.call(i, n)) {
    let p = er(l, c(n)) ? er(l, u(n), { backwards: true }) ? Hr2 : W2 : " ";
    o.push(p);
  } else o.push(Hr2);
  let d = Pr2(l, rr(l, c(n)));
  return d !== false && er(l, d) && o.push(Hr2), o;
}
function XR(e6, t, r) {
  var n;
  let o = e6.node, i = am(e6, t), { printer: l, originalText: u, locStart: c } = t, d = (n = l.isBlockComment) == null ? void 0 : n.call(l, o);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || er(u, c(o), { backwards: true })) {
    let p = Mc(u, c(o));
    return { doc: vc([Hr2, p ? Hr2 : "", i]), isBlock: d, hasLineSuffix: true };
  }
  return !d || r != null && r.hasLineSuffix ? { doc: [vc([" ", i]), al], isBlock: d, hasLineSuffix: true } : { doc: [" ", i], isBlock: d, hasLineSuffix: false };
}
function YR(e6, t) {
  let r = e6.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((u) => !n.has(u)).length === 0) return { leading: "", trailing: "" };
  let o = [], i = [], l;
  return e6.each(() => {
    let u = e6.node;
    if (n != null && n.has(u)) return;
    let { leading: c, trailing: d } = u;
    c ? o.push(GR(e6, t)) : d && (l = XR(e6, t, l), i.push(l.doc));
  }, "comments"), { leading: o, trailing: i };
}
function KR(e6, t, r) {
  let { leading: n, trailing: o } = YR(e6, r);
  return !n && !o ? t : K2(t, (i) => [n, i, o]);
}
function ZR(e6) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e6;
  for (let n of t) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
function JR(e6) {
  return () => {
  };
}
function lm({ plugins: e6 = [], showDeprecated: t = false } = {}) {
  let r = e6.flatMap((o) => o.languages ?? []), n = [];
  for (let o of rA(Object.assign({}, ...e6.map(({ options: i }) => i), eA))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((i) => !i.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...tA(o.choices, r, e6)])), o.pluginDefaults = Object.fromEntries(e6.filter((i) => {
    var l;
    return ((l = i.defaultOptions) == null ? void 0 : l[o.name]) !== void 0;
  }).map((i) => [i.name, i.defaultOptions[o.name]])), n.push(o));
  return { languages: r, options: n };
}
function* tA(e6, t, r) {
  let n = new Set(e6.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let i of o.parsers) if (!n.has(i)) {
      n.add(i);
      let l = r.find((c) => c.parsers && Object.prototype.hasOwnProperty.call(c.parsers, i)), u = o.name;
      l != null && l.name && (u += ` (plugin: ${l.name})`), yield { value: i, description: u };
    }
  }
}
function rA(e6) {
  let t = [];
  for (let [r, n] of Object.entries(e6)) {
    let o = { name: r, ...n };
    Array.isArray(o.default) && (o.default = fe2(false, o.default, -1).value), t.push(o);
  }
  return t;
}
function h2(e6, t) {
  if (!t) return;
  let r = nA(t).toLowerCase();
  return e6.find(({ filenames: n }) => n == null ? void 0 : n.some((o) => o.toLowerCase() === r)) ?? e6.find(({ extensions: n }) => n == null ? void 0 : n.some((o) => r.endsWith(o)));
}
function oA(e6, t) {
  if (t) return e6.find(({ name: r }) => r.toLowerCase() === t) ?? e6.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e6.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function aA(e6, t) {
  let r = e6.plugins.flatMap((o) => o.languages ?? []), n = oA(r, t.language) ?? h2(r, t.physicalFile) ?? h2(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
function v2(e6, t, r, n) {
  return [`Invalid ${to2.default.red(n.key(e6))} value.`, `Expected ${to2.default.blue(r)},`, `but received ${t === sm ? to2.default.gray("nothing") : to2.default.red(n.value(t))}.`].join(" ");
}
function um({ text: e6, list: t }, r) {
  let n = [];
  return e6 && n.push(`- ${to2.default.blue(e6)}`), t && n.push([`- ${to2.default.blue(t.title)}:`].concat(t.values.map((o) => um(o, r - g2.length).replace(/^|\n/g, `$&${g2}`))).join(`
`)), cm(n, r);
}
function cm(e6, t) {
  if (e6.length === 1) return e6[0];
  let [r, n] = e6, [o, i] = e6.map((l) => l.split(`
`, 1)[0].length);
  return o > t && o > i ? n : r;
}
function uA(e6, t) {
  if (e6 === t) return 0;
  let r = e6;
  e6.length > t.length && (e6 = t, t = r);
  let n = e6.length, o = t.length;
  for (; n > 0 && e6.charCodeAt(~-n) === t.charCodeAt(~-o); ) n--, o--;
  let i = 0;
  for (; i < n && e6.charCodeAt(i) === t.charCodeAt(i); ) i++;
  if (n -= i, o -= i, n === 0) return o;
  let l, u, c, d, p = 0, h = 0;
  for (; p < n; ) w2[p] = e6.charCodeAt(i + p), hc[p] = ++p;
  for (; h < o; ) for (l = t.charCodeAt(i + h), c = h++, u = h, p = 0; p < n; p++) d = l === w2[p] ? c : c + 1, c = hc[p], u = hc[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
  return u;
}
function pA(e6, t) {
  let r = new e6(t), n = Object.create(r);
  for (let o of cA) o in t && (n[o] = dA(t[o], r, nr.prototype[o].length));
  return n;
}
function dA(e6, t, r) {
  return typeof e6 == "function" ? (...n) => e6(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e6;
}
function y2({ from: e6, to: t }) {
  return { from: [e6], to: t };
}
function vA(e6, t) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e6) {
    let o = n[t];
    if (r[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    r[o] = n;
  }
  return r;
}
function bA(e6, t) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e6) {
    let o = n[t];
    if (r.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    r.set(o, n);
  }
  return r;
}
function wA() {
  let e6 = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let r = JSON.stringify(t);
    return e6[r] ? true : (e6[r] = true, false);
  };
}
function yA(e6, t) {
  let r = [], n = [];
  for (let o of e6) t(o) ? r.push(o) : n.push(o);
  return [r, n];
}
function DA(e6) {
  return e6 === Math.floor(e6);
}
function xA(e6, t) {
  if (e6 === t) return 0;
  let r = typeof e6, n = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(e6) - Number(t) : e6.localeCompare(t);
}
function CA(e6) {
  return (...t) => {
    let r = e6(...t);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function D2(e6) {
  return e6 === void 0 ? {} : e6;
}
function dm(e6) {
  if (typeof e6 == "string") return { text: e6 };
  let { text: t, list: r } = e6;
  return EA((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t, list: {
    title: r.title,
    values: r.values.map(dm)
  } } : { text: t };
}
function x2(e6, t) {
  return e6 === true ? true : e6 === false ? { value: t } : e6;
}
function C2(e6, t, r = false) {
  return e6 === false ? false : e6 === true ? r ? true : [{ value: t }] : "value" in e6 ? [e6] : e6.length === 0 ? false : e6;
}
function E2(e6, t) {
  return typeof e6 == "string" || "key" in e6 ? { from: t, to: e6 } : "from" in e6 ? { from: e6.from, to: e6.to } : { from: t, to: e6.to };
}
function Cc(e6, t) {
  return e6 === void 0 ? [] : Array.isArray(e6) ? e6.map((r) => E2(r, t)) : [E2(e6, t)];
}
function S2(e6, t) {
  let r = Cc(typeof e6 == "object" && "redirect" in e6 ? e6.redirect : e6, t);
  return r.length === 0 ? { remain: t, redirect: r } : typeof e6 == "object" && "remain" in e6 ? { remain: e6.remain, redirect: r } : { redirect: r };
}
function EA(e6, t) {
  if (!e6) throw new Error(t);
}
function IA(e6, t, { logger: r = false, isCLI: n = false, passThrough: o = false, FlagSchema: i, descriptor: l } = {}) {
  if (n) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!l) throw new Error("'descriptor' option is required.");
  } else l = eo2;
  let u = o ? Array.isArray(o) ? (f, g6) => o.includes(f) ? { [f]: g6 } : void 0 : (f, g6) => ({ [f]: g6 }) : (f, g6, w4) => {
    let { _: m, ...v } = w4.schemas;
    return pm(f, g6, { ...w4, schemas: v });
  }, c = MA(t, { isCLI: n, FlagSchema: i }), d = new BA(c, { logger: r, unknown: u, descriptor: l }), p = r !== false;
  p && mc && (d._hasDeprecationWarned = mc);
  let h = d.normalize(e6);
  return p && (mc = d._hasDeprecationWarned), h;
}
function MA(e6, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(hA.create({ name: "_" }));
  for (let o of e6) n.push(_A(o, { isCLI: t, optionInfos: e6, FlagSchema: r })), o.alias && t && n.push(fA.create({ name: o.alias, sourceName: o.name }));
  return n;
}
function _A(e6, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: o } = e6, i = { name: o }, l, u = {};
  switch (e6.type) {
    case "int":
      l = AA, t && (i.preprocess = Number);
      break;
    case "string":
      l = R2;
      break;
    case "choice":
      l = SA, i.choices = e6.choices.map((c) => c != null && c.redirect ? { ...c, redirect: { to: { key: e6.name, value: c.redirect } } } : c);
      break;
    case "boolean":
      l = gA;
      break;
    case "flag":
      l = n, i.flags = r.flatMap((c) => [c.alias, c.description && c.name, c.oppositeDescription && `no-${c.name}`].filter(Boolean));
      break;
    case "path":
      l = R2;
      break;
    default:
      throw new Error(`Unexpected type ${e6.type}`);
  }
  if (e6.exception ? i.validate = (c, d, p) => e6.exception(c) || d.validate(c, p) : i.validate = (c, d, p) => c === void 0 || d.validate(c, p), e6.redirect && (u.redirect = (c) => c ? { to: { key: e6.redirect.option, value: e6.redirect.value } } : void 0), e6.deprecated && (u.deprecated = true), t && !e6.array) {
    let c = i.preprocess || ((d) => d);
    i.preprocess = (d, p, h) => p.preprocess(c(Array.isArray(d) ? fe2(false, d, -1) : d), h);
  }
  return e6.array ? mA.create({ ...t ? { preprocess: a2((c) => Array.isArray(c) ? c : [c], "preprocess") } : {}, ...u, valueSchema: l.create(i) }) : l.create({ ...i, ...u });
}
function hm(e6, t) {
  if (!t) throw new Error("parserName is required.");
  let r = fm(false, e6, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (r) return r;
  let n = `Couldn't resolve parser "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new im(n);
}
function PA(e6, t) {
  if (!t) throw new Error("astFormat is required.");
  let r = fm(false, e6, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new im(n);
}
function mm({ plugins: e6, parser: t }) {
  let r = hm(e6, t);
  return gm(r, t);
}
function gm(e6, t) {
  let r = e6.parsers[t];
  return typeof r == "function" ? r() : r;
}
function zA(e6, t) {
  let r = e6.printers[t];
  return typeof r == "function" ? r() : r;
}
async function OA(e6, t = {}) {
  var r;
  let n = { ...e6 };
  if (!n.parser) if (n.filepath) {
    if (n.parser = iA(n, { physicalFile: n.filepath }), !n.parser) throw new f2(`No parser could be inferred for file "${n.filepath}".`);
  } else throw new f2("No parser and no file path given, couldn't infer a parser.");
  let o = lm({ plugins: e6.plugins, showDeprecated: true }).options, i = { ...A2, ...Object.fromEntries(o.filter((f) => f.default !== void 0).map(
    (f) => [f.name, f.default]
  )) }, l = hm(n.plugins, n.parser), u = await gm(l, n.parser);
  n.astFormat = u.astFormat, n.locEnd = u.locEnd, n.locStart = u.locStart;
  let c = (r = l.printers) != null && r[u.astFormat] ? l : PA(n.plugins, u.astFormat), d = await zA(c, u.astFormat);
  n.printer = d;
  let p = c.defaultOptions ? Object.fromEntries(Object.entries(c.defaultOptions).filter(([, f]) => f !== void 0)) : {}, h = { ...i, ...p };
  for (let [f, g6] of Object.entries(h)) (n[f] === null || n[f] === void 0) && (n[f] = g6);
  return n.parser === "json" && (n.trailingComma = "none"), $A(n, o, { passThrough: Object.keys(A2), ...t });
}
async function jA(e6, t) {
  let r = await mm(t), n = r.preprocess ? r.preprocess(e6, t) : e6;
  t.originalText = n;
  let o;
  try {
    o = await r.parse(n, t, t);
  } catch (i) {
    VA(i, e6);
  }
  return { text: n, ast: o };
}
function VA(e6, t) {
  let { loc: r } = e6;
  if (r) {
    let n = (0, NA.codeFrameColumns)(t, r, { highlightCode: true });
    throw e6.message += `
` + n, e6.codeFrame = n, e6;
  }
  throw e6;
}
async function qA(e6, t, r, n, o) {
  let { embeddedLanguageFormatting: i, printer: { embed: l, hasPrettierIgnore: u = a2(() => false, "s"), getVisitorKeys: c } } = r;
  if (!l || i !== "auto") return;
  if (l.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let d = sl(l.getVisitorKeys ?? c), p = [];
  g6();
  let h = e6.stack;
  for (let { print: w4, node: m, pathStack: v } of p) try {
    e6.stack = v;
    let y = await w4(f, t, e6, r);
    y && o.set(m, y);
  } catch (y) {
    if (globalThis.PRETTIER_DEBUG) throw y;
  }
  e6.stack = h;
  function f(w4, m) {
    return WA(w4, m, r, n);
  }
  a2(f, "f");
  function g6() {
    let { node: w4 } = e6;
    if (w4 === null || typeof w4 != "object" || u(e6)) return;
    for (let v of d(w4)) Array.isArray(w4[v]) ? e6.each(g6, v) : e6.call(g6, v);
    let m = l(e6, r);
    if (m) {
      if (typeof m == "function") {
        p.push({ print: m, node: w4, pathStack: [...e6.stack] });
        return;
      }
      o.set(w4, m);
    }
  }
  a2(g6, "p");
}
async function WA(e6, t, r, n) {
  let o = await wo2({ ...r, ...t, parentParser: r.parser, originalText: e6 }, { passThrough: true }), { ast: i } = await Fa2(e6, o), l = await n(
    i,
    o
  );
  return Y2(l);
}
function UA(e6, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: o, locEnd: i, [Symbol.for("printedComments")]: l } = t, { node: u } = e6, c = o(
    u
  ), d = i(u);
  for (let p of n) o(p) >= c && i(p) <= d && l.add(p);
  return r.slice(c, d);
}
async function ul(e6, t) {
  ({ ast: e6 } = await vm(e6, t));
  let r = /* @__PURE__ */ new Map(), n = new LR(e6), o = QR(t), i = /* @__PURE__ */ new Map();
  await qA(n, u, t, ul, i);
  let l = await F2(n, t, u, void 0, i);
  return ZR(t), l;
  function u(d, p) {
    return d === void 0 || d === n ? c(p) : Array.isArray(d) ? n.call(() => c(p), ...d) : n.call(() => c(p), d);
  }
  function c(d) {
    o(n);
    let p = n.node;
    if (p == null) return "";
    let h = p && typeof p == "object" && d === void 0;
    if (h && r.has(p)) return r.get(p);
    let f = F2(n, t, u, d, i);
    return h && r.set(p, f), f;
  }
}
function F2(e6, t, r, n, o) {
  var i;
  let { node: l } = e6, { printer: u } = t, c;
  return (i = u.hasPrettierIgnore) != null && i.call(u, e6) ? c = GA(e6, t) : o.has(l) ? c = o.get(l) : c = u.print(e6, t, r, n), l === t.cursorNode && (c = K2(c, (d) => [bc, d, bc])), u.printComment && (!u.willPrintOwnComments || !u.willPrintOwnComments(e6, t)) && (c = KR(e6, c, t)), c;
}
async function vm(e6, t) {
  let r = e6.comments ?? [];
  t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e6.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), VR(
    e6,
    t
  );
  let { printer: { preprocess: n } } = t;
  return e6 = n ? await n(e6, t) : e6, { ast: e6, comments: r };
}
function XA(e6, t) {
  let { cursorOffset: r, locStart: n, locEnd: o } = t, i = sl(t.printer.getVisitorKeys), l = a2(
    (c) => n(c) <= r && o(c) >= r,
    "i"
  ), u = e6;
  for (let c of MR(e6, { getVisitorKeys: i, filter: l })) u = c;
  return u;
}
function KA(e6, t) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
  if (!r) return e6;
  let o = sl(n), i = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return l(e6);
  function l(u, c) {
    if (!(u !== null && typeof u == "object")) return u;
    if (Array.isArray(u)) return u.map((f) => l(f, c)).filter(Boolean);
    let d = {}, p = new Set(o(u));
    for (let f in u) !Object.prototype.hasOwnProperty.call(u, f) || i.has(f) || (p.has(f) ? d[f] = l(u[f], u) : d[f] = u[f]);
    let h = r(u, d, c);
    if (h !== null) return h ?? d;
  }
}
function QA(e6, t) {
  let r = [e6.node, ...e6.parentNodes], n = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return r.find((o) => bm.has(o.type) && n.has(o));
}
function k2(e6) {
  let t = e6.length - 1;
  for (; ; ) {
    let r = e6[t];
    if ((r == null ? void 0 : r.type) === "Program" || (r == null ? void 0 : r.type) === "File") t--;
    else break;
  }
  return e6.slice(0, t + 1);
}
function eF(e6, t, { locStart: r, locEnd: n }) {
  let o = e6.node, i = t.node;
  if (o === i) return { startNode: o, endNode: i };
  let l = r(e6.node);
  for (let c of k2(t.parentNodes)) if (r(c) >= l) i = c;
  else break;
  let u = n(t.node);
  for (let c of k2(e6.parentNodes)) {
    if (n(c) <= u) o = c;
    else break;
    if (o === i) break;
  }
  return { startNode: o, endNode: i };
}
function Ec(e6, t, r, n, o = [], i) {
  let { locStart: l, locEnd: u } = r, c = l(e6), d = u(e6);
  if (!(t > d || t < c || i === "rangeEnd" && t === c || i === "rangeStart" && t === d)) {
    for (let p of Ic(e6, r)) {
      let h = Ec(p, t, r, n, [e6, ...o], i);
      if (h) return h;
    }
    if (!n || n(e6, o[0])) return { node: e6, parentNodes: o };
  }
}
function tF(e6, t) {
  return t !== "DeclareExportDeclaration" && e6 !== "TypeParameterDeclaration" && (e6 === "Directive" || e6 === "TypeAlias" || e6 === "TSExportAssignment" || e6.startsWith("Declare") || e6.startsWith("TSDeclare") || e6.endsWith("Statement") || e6.endsWith("Declaration"));
}
function T2(e6, t, r) {
  if (!t) return false;
  switch (e6.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return tF(t.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return bm.has(t.type);
    case "graphql":
      return rF.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return false;
}
function nF(e6, t, r) {
  let { rangeStart: n, rangeEnd: o, locStart: i, locEnd: l } = t;
  xc.ok(o > n);
  let u = e6.slice(n, o).search(/\S/), c = u === -1;
  if (!c) for (n += u; o > n && !/\S/.test(e6[o - 1]); --o) ;
  let d = Ec(r, n, t, (g6, w4) => T2(t, g6, w4), [], "rangeStart"), p = c ? d : Ec(r, o, t, (g6) => T2(t, g6), [], "rangeEnd");
  if (!d || !p) return { rangeStart: 0, rangeEnd: 0 };
  let h, f;
  if (JA(t)) {
    let g6 = QA(d, p);
    h = g6, f = g6;
  } else ({ startNode: h, endNode: f } = eF(d, p, t));
  return { rangeStart: Math.min(i(h), i(f)), rangeEnd: Math.max(l(h), l(f)) };
}
async function ym(e6, t, r = 0) {
  if (!e6 || e6.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: o } = await Fa2(e6, t);
  t.cursorOffset >= 0 && (t.cursorNode = YA(n, t));
  let i = await ul(n, t, r);
  r > 0 && (i = X22([Hr2, i], r, t.tabWidth));
  let l = ll(i, t);
  if (r > 0) {
    let c = l.formatted.trim();
    l.cursorNodeStart !== void 0 && (l.cursorNodeStart -= l.formatted.indexOf(c)), l.formatted = c + Sc(t.endOfLine);
  }
  let u = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let c, d, p, h, f;
    if (t.cursorNode && l.cursorNodeText ? (c = t.locStart(t.cursorNode), d = o.slice(c, t.locEnd(t.cursorNode)), p = t.cursorOffset - c, h = l.cursorNodeStart, f = l.cursorNodeText) : (c = 0, d = o, p = t.cursorOffset, h = 0, f = l.formatted), d === f) return {
      formatted: l.formatted,
      cursorOffset: h + p,
      comments: u
    };
    let g6 = d.split("");
    g6.splice(p, 0, L2);
    let w4 = f.split(""), m = (0, qS.diffArrays)(g6, w4), v = h;
    for (let y of m) if (y.removed) {
      if (y.value.includes(L2)) break;
    } else v += y.count;
    return { formatted: l.formatted, cursorOffset: v, comments: u };
  }
  return { formatted: l.formatted, cursorOffset: -1, comments: u };
}
async function oF(e6, t) {
  let { ast: r, text: n } = await Fa2(e6, t), { rangeStart: o, rangeEnd: i } = nF(n, t, r), l = n.slice(o, i), u = Math.min(o, n.lastIndexOf(`
`, o) + 1), c = n.slice(u, o).match(/^\s*/)[0], d = Lc(c, t.tabWidth), p = await ym(l, {
    ...t,
    rangeStart: 0,
    rangeEnd: Number.POSITIVE_INFINITY,
    cursorOffset: t.cursorOffset > o && t.cursorOffset <= i ? t.cursorOffset - o : -1,
    endOfLine: "lf"
  }, d), h = p.formatted.trimEnd(), { cursorOffset: f } = t;
  f > i ? f += h.length - l.length : p.cursorOffset >= 0 && (f = p.cursorOffset + o);
  let g6 = n.slice(0, o) + h + n.slice(i);
  if (t.endOfLine !== "lf") {
    let w4 = Sc(t.endOfLine);
    f >= 0 && w4 === `\r
` && (f += z2(g6.slice(0, f), `
`)), g6 = ol(false, g6, `
`, w4);
  }
  return { formatted: g6, cursorOffset: f, comments: p.comments };
}
function gc2(e6, t, r) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e6.length ? r : t;
}
function B2(e6, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o } = t;
  return r = gc2(e6, r, -1), n = gc2(e6, n, 0), o = gc2(e6, o, e6.length), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o };
}
function Dm(e6, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: i } = B2(e6, t), l = e6.charAt(0) === wm;
  if (l && (e6 = e6.slice(1), r--, n--, o--), i === "auto" && (i = WS(e6)), e6.includes("\r")) {
    let u = a2((c) => z2(e6.slice(0, Math.max(c, 0)), `\r
`), "s");
    r -= u(r), n -= u(n), o -= u(o), e6 = US(e6);
  }
  return { hasBOM: l, text: e6, options: B2(e6, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: i }) };
}
async function I22(e6, t) {
  let r = await mm(t);
  return !r.hasPragma || r.hasPragma(e6);
}
async function xm(e6, t) {
  let { hasBOM: r, text: n, options: o } = Dm(e6, await wo2(t));
  if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await I22(n, o)) return { formatted: e6, cursorOffset: t.cursorOffset, comments: [] };
  let i;
  return o.rangeStart > 0 || o.rangeEnd < n.length ? i = await oF(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await I22(
    n,
    o
  ) && (n = o.printer.insertPragma(n)), i = await ym(n, o)), r && (i.formatted = wm + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function aF(e6, t, r) {
  let { text: n, options: o } = Dm(e6, await wo2(t)), i = await Fa2(n, o);
  return r && (r.preprocessForPrint && (i.ast = await vm(i.ast, o)), r.massage && (i.ast = ZA(i.ast, o))), i;
}
async function iF(e6, t) {
  t = await wo2(t);
  let r = await ul(e6, t);
  return ll(r, t);
}
async function lF(e6, t) {
  let r = sR(e6), { formatted: n } = await xm(r, { ...t, parser: "__js_expression" });
  return n;
}
async function sF(e6, t) {
  t = await wo2(t);
  let { ast: r } = await Fa2(e6, t);
  return ul(r, t);
}
async function uF(e6, t) {
  return ll(e6, await wo2(t));
}
function hF(e6, t) {
  if (t === false) return false;
  if (e6.charAt(t) === "/" && e6.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e6.length; ++r) if (e6.charAt(r) === "*" && e6.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
function mF(e6, t) {
  return t === false ? false : e6.charAt(t) === "/" && e6.charAt(t + 1) === "/" ? tm(e6, t) : t;
}
function gF(e6, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = rr(e6, n), n = _c(e6, n), n = $c(e6, n), n = Pr2(e6, n);
  return n;
}
function vF(e6, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = em(e6, n), n = _c(e6, n), n = rr(e6, n);
  return n = $c(e6, n), n = Pr2(e6, n), n !== false && er(e6, n);
}
function bF(e6, t) {
  let r = e6.lastIndexOf(`
`);
  return r === -1 ? 0 : Lc(e6.slice(r + 1).match(/^[\t ]*/)[0], t);
}
function yF(e6) {
  if (typeof e6 != "string") throw new TypeError("Expected a string");
  return e6.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function DF(e6, t) {
  let r = e6.match(new RegExp(`(${yF(t)})+`, "g"));
  return r === null ? 0 : r.reduce((n, o) => Math.max(n, o.length / t.length), 0);
}
function CF(e6, t) {
  let r = Hc(e6, t);
  return r === false ? "" : e6.charAt(r);
}
function SF(e6, t, r) {
  for (let n = t; n < r; ++n) if (e6.charAt(n) === `
`) return true;
  return false;
}
function AF(e6, t, r = {}) {
  return rr(e6, r.backwards ? t - 1 : t, r) !== t;
}
function kF(e6, t, r) {
  let n = t === '"' ? "'" : '"', o = ol(false, e6, /\\(.)|(["'])/gs, (i, l, u) => l === n ? l : u === t ? "\\" + u : u || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(l) ? l : "\\" + l));
  return t + o + t;
}
function LF(e6, t, r) {
  return Hc(e6, r(t));
}
function BF(e6, t) {
  return arguments.length === 2 || typeof t == "number" ? Hc(e6, t) : LF(...arguments);
}
function IF(e6, t, r) {
  return Mc(e6, r(t));
}
function MF(e6, t) {
  return arguments.length === 2 || typeof t == "number" ? Mc(e6, t) : IF(...arguments);
}
function _F(e6, t, r) {
  return Pc(e6, r(t));
}
function $F(e6, t) {
  return arguments.length === 2 || typeof t == "number" ? Pc(e6, t) : _F(...arguments);
}
function $r2(e6, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {}, o = n.plugins ?? [];
    return r[t] = { ...n, plugins: Array.isArray(o) ? o : Object.values(o) }, e6(...r);
  };
}
async function Rm(e6, t) {
  let { formatted: r } = await Sm(e6, { ...t, cursorOffset: -1 });
  return r;
}
async function HF(e6, t) {
  return await Rm(e6, t) === e6;
}
var LS;
var el;
var BS;
var IS;
var MS;
var _S;
var $S;
var tl;
var rl;
var M22;
var Ra2;
var HS;
var PS;
var s2;
var xa2;
var zS;
var OS;
var nl;
var _2;
var $2;
var H2;
var NS;
var jS;
var P22;
var VS;
var ol;
var qS;
var zr2;
var tr;
var Or2;
var It2;
var Mt2;
var _t2;
var ze2;
var Qe2;
var Ve2;
var $t2;
var Ht2;
var Pt2;
var Ce2;
var Et2;
var et2;
var O22;
var Nr2;
var XS;
var ro2;
var KS;
var vo2;
var u2;
var Rc;
var N2;
var Ct2;
var Ac;
var oR;
var al;
var aR;
var Fc;
var q2;
var W2;
var iR;
var Hr2;
var U22;
var bc;
var uR;
var fe2;
var cR;
var fR;
var hR;
var kc;
var gR;
var Pe;
var xt2;
var Sa2;
var Lc;
var Ki;
var Dc;
var Ca2;
var Zi;
var no2;
var TR;
var LR;
var J22;
var xc;
var IR;
var _R;
var rr;
var em;
var tm;
var Pr2;
var er;
var zR;
var rm;
var OR;
var sl;
var pc2;
var dc;
var om;
var Mc;
var QR;
var oo2;
var im;
var ao2;
var f2;
var eA;
var nA;
var iA;
var eo2;
var m2;
var lA;
var to2;
var sm;
var Ji;
var g2;
var sA;
var b2;
var hc;
var w2;
var pm;
var cA;
var io2;
var nr;
var lo2;
var fA;
var so2;
var hA;
var uo2;
var mA;
var co2;
var gA;
var po2;
var SA;
var fo2;
var RA;
var ho2;
var AA;
var mo2;
var R2;
var FA;
var kA;
var TA;
var LA;
var go2;
var BA;
var mc;
var $A;
var HA;
var fm;
var A2;
var wo2;
var NA;
var Fa2;
var GA;
var YA;
var ZA;
var JA;
var bm;
var rF;
var wm;
var L2;
var Cm;
var cF;
var pF;
var dF;
var fF;
var Em;
var _c;
var $c;
var Hc;
var Pc;
var wF;
var xF;
var EF;
var RF;
var FF;
var TF;
var Sm;
var PF;
var zF;
var Am;
var Fm = A(() => {
  LS = Object.create, el = Object.defineProperty, BS = Object.getOwnPropertyDescriptor, IS = Object.getOwnPropertyNames, MS = Object.getPrototypeOf, _S = Object.prototype.hasOwnProperty, $S = a2((e6, t) => () => (e6 && (t = e6(e6 = 0)), t), "Eu"), tl = a2((e6, t) => () => (t || e6((t = { exports: {} }).exports, t), t.exports), "Me"), rl = a2((e6, t) => {
    for (var r in t) el(e6, r, { get: t[r], enumerable: true });
  }, "We"), M22 = a2((e6, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") for (let o of IS(t)) !_S.call(e6, o) && o !== r && el(e6, o, { get: a2(
      () => t[o],
      "get"
    ), enumerable: !(n = BS(t, o)) || n.enumerable });
    return e6;
  }, "ur"), Ra2 = a2((e6, t, r) => (r = e6 != null ? LS(MS(e6)) : {}, M22(t || !e6 || !e6.__esModule ? el(r, "default", { value: e6, enumerable: true }) : r, e6)), "he"), HS = a2((e6) => M22(el({}, "__esModule", { value: true }), e6), "Cu"), PS = a2((e6, t, r) => {
    if (!t.has(e6)) throw TypeError("Cannot " + r);
  }, "hu"), s2 = a2((e6, t, r) => {
    if (t.has(e6)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e6) : t.set(e6, r);
  }, "ht"), xa2 = a2((e6, t, r) => (PS(e6, t, "access private method"), r), "ce"), zS = tl((e6) => {
    "use strict";
    Object.defineProperty(e6, "__esModule", { value: true }), e6.default = t;
    function t() {
    }
    a2(t, "or"), t.prototype = { diff: a2(function(o, i) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = l.callback;
      typeof l == "function" && (u = l, l = {}), this.options = l;
      var c = this;
      function d(b) {
        return u ? (setTimeout(function() {
          u(void 0, b);
        }, 0), true) : b;
      }
      a2(d, "i"), o = this.castInput(o), i = this.castInput(i), o = this.removeEmpty(this.tokenize(o)), i = this.removeEmpty(this.tokenize(i));
      var p = i.length, h = o.length, f = 1, g6 = p + h;
      l.maxEditLength && (g6 = Math.min(g6, l.maxEditLength));
      var w4 = [{ newPos: -1, components: [] }], m = this.extractCommon(w4[0], i, o, 0);
      if (w4[0].newPos + 1 >= p && m + 1 >= h) return d([{ value: this.join(i), count: i.length }]);
      function v() {
        for (var b = -1 * f; b <= f; b += 2) {
          var D4 = void 0, x = w4[b - 1], C = w4[b + 1], E = (C ? C.newPos : 0) - b;
          x && (w4[b - 1] = void 0);
          var S = x && x.newPos + 1 < p, R = C && 0 <= E && E < h;
          if (!S && !R) {
            w4[b] = void 0;
            continue;
          }
          if (!S || R && x.newPos < C.newPos ? (D4 = n(C), c.pushComponent(D4.components, void 0, true)) : (D4 = x, D4.newPos++, c.pushComponent(D4.components, true, void 0)), E = c.extractCommon(D4, i, o, b), D4.newPos + 1 >= p && E + 1 >= h) return d(r(c, D4.components, i, o, c.useLongestToken));
          w4[b] = D4;
        }
        f++;
      }
      if (a2(v, "p"), u) a2(function b() {
        setTimeout(function() {
          if (f > g6) return u();
          v() || b();
        }, 0);
      }, "F")();
      else for (; f <= g6; ) {
        var y = v();
        if (y) return y;
      }
    }, "diff"), pushComponent: a2(function(o, i, l) {
      var u = o[o.length - 1];
      u && u.added === i && u.removed === l ? o[o.length - 1] = { count: u.count + 1, added: i, removed: l } : o.push({ count: 1, added: i, removed: l });
    }, "pushComponent"), extractCommon: a2(function(o, i, l, u) {
      for (var c = i.length, d = l.length, p = o.newPos, h = p - u, f = 0; p + 1 < c && h + 1 < d && this.equals(i[p + 1], l[h + 1]); ) p++, h++, f++;
      return f && o.components.push({ count: f }), o.newPos = p, h;
    }, "extractCommon"), equals: a2(function(o, i) {
      return this.options.comparator ? this.options.comparator(o, i) : o === i || this.options.ignoreCase && o.toLowerCase() === i.toLowerCase();
    }, "equals"), removeEmpty: a2(function(o) {
      for (var i = [], l = 0; l < o.length; l++) o[l] && i.push(o[l]);
      return i;
    }, "removeEmpty"), castInput: a2(function(o) {
      return o;
    }, "castInput"), tokenize: a2(function(o) {
      return o.split("");
    }, "tokenize"), join: a2(function(o) {
      return o.join("");
    }, "join") };
    function r(o, i, l, u, c) {
      for (var d = 0, p = i.length, h = 0, f = 0; d < p; d++) {
        var g6 = i[d];
        if (g6.removed) {
          if (g6.value = o.join(u.slice(f, f + g6.count)), f += g6.count, d && i[d - 1].added) {
            var w4 = i[d - 1];
            i[d - 1] = i[d], i[d] = w4;
          }
        } else {
          if (!g6.added && c) {
            var m = l.slice(h, h + g6.count);
            m = m.map(function(y, b) {
              var D4 = u[f + b];
              return D4.length > y.length ? D4 : y;
            }), g6.value = o.join(m);
          } else g6.value = o.join(l.slice(h, h + g6.count));
          h += g6.count, g6.added || (f += g6.count);
        }
      }
      var v = i[p - 1];
      return p > 1 && typeof v.value == "string" && (v.added || v.removed) && o.equals("", v.value) && (i[p - 2].value += v.value, i.pop()), i;
    }
    a2(r, "yu");
    function n(o) {
      return { newPos: o.newPos, components: o.components.slice(0) };
    }
    a2(n, "Au");
  }), OS = tl((e6) => {
    "use strict";
    Object.defineProperty(e6, "__esModule", { value: true }), e6.diffArrays = o, e6.arrayDiff = void 0;
    var t = r(zS());
    function r(i) {
      return i && i.__esModule ? i : { default: i };
    }
    a2(r, "_u");
    var n = new t.default();
    e6.arrayDiff = n, n.tokenize = function(i) {
      return i.slice();
    }, n.join = n.removeEmpty = function(i) {
      return i;
    };
    function o(i, l, u) {
      return n.diff(i, l, u);
    }
    a2(o, "ku");
  }), nl = tl((e6, t) => {
    "use strict";
    var r = new Proxy(String, { get: a2(() => r, "get") });
    t.exports = r;
  }), _2 = {};
  rl(_2, { default: a2(() => H2, "default"), shouldHighlight: a2(() => $2, "shouldHighlight") });
  NS = $S(() => {
    $2 = a2(() => false, "Eo"), H2 = String;
  }), jS = tl((e6) => {
    "use strict";
    Object.defineProperty(e6, "__esModule", { value: true }), e6.codeFrameColumns = h, e6.default = f;
    var t = (NS(), HS(_2)), r = o(nl(), true);
    function n(g6) {
      if (typeof WeakMap != "function") return null;
      var w4 = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
      return (n = a2(function(v) {
        return v ? m : w4;
      }, "Tn"))(g6);
    }
    a2(n, "Tn");
    function o(g6, w4) {
      if (!w4 && g6 && g6.__esModule) return g6;
      if (g6 === null || typeof g6 != "object" && typeof g6 != "function") return { default: g6 };
      var m = n(w4);
      if (m && m.has(g6)) return m.get(g6);
      var v = { __proto__: null }, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var b in g6) if (b !== "default" && Object.prototype.hasOwnProperty.call(g6, b)) {
        var D4 = y ? Object.getOwnPropertyDescriptor(g6, b) : null;
        D4 && (D4.get || D4.set) ? Object.defineProperty(v, b, D4) : v[b] = g6[b];
      }
      return v.default = g6, m && m.set(g6, v), v;
    }
    a2(o, "ho");
    var i;
    function l(g6) {
      if (g6) {
        var w4;
        return (w4 = i) != null || (i = new r.default.constructor({ enabled: true, level: 1 })), i;
      }
      return r.default;
    }
    a2(l, "go");
    var u = false;
    function c(g6) {
      return { gutter: g6.grey, marker: g6.red.bold, message: g6.red.bold };
    }
    a2(c, "yo");
    var d = /\r\n|[\n\r\u2028\u2029]/;
    function p(g6, w4, m) {
      let v = Object.assign({ column: 0, line: -1 }, g6.start), y = Object.assign({}, v, g6.end), { linesAbove: b = 2, linesBelow: D4 = 3 } = m || {}, x = v.line, C = v.column, E = y.line, S = y.column, R = Math.max(x - (b + 1), 0), F6 = Math.min(w4.length, E + D4);
      x === -1 && (R = 0), E === -1 && (F6 = w4.length);
      let k6 = E - x, T = {};
      if (k6) for (let _7 = 0; _7 <= k6; _7++) {
        let $7 = _7 + x;
        if (!C) T[$7] = true;
        else if (_7 === 0) {
          let q4 = w4[$7 - 1].length;
          T[$7] = [C, q4 - C + 1];
        } else if (_7 === k6) T[$7] = [0, S];
        else {
          let q4 = w4[$7 - _7].length;
          T[$7] = [0, q4];
        }
      }
      else C === S ? C ? T[x] = [C, 0] : T[x] = true : T[x] = [C, S - C];
      return { start: R, end: F6, markerLines: T };
    }
    a2(p, "Ao");
    function h(g6, w4, m = {}) {
      let v = (m.highlightCode || m.forceColor) && (0, t.shouldHighlight)(m), y = l(m.forceColor), b = c(y), D4 = a2((T, _7) => v ? T(_7) : _7, "i"), x = g6.split(d), { start: C, end: E, markerLines: S } = p(w4, x, m), R = w4.start && typeof w4.start.column == "number", F6 = String(
        E
      ).length, k6 = (v ? (0, t.default)(g6, m) : g6).split(d, E).slice(C, E).map((T, _7) => {
        let $7 = C + 1 + _7, q4 = ` ${` ${$7}`.slice(-F6)} |`, L6 = S[$7], B6 = !S[$7 + 1];
        if (L6) {
          let H4 = "";
          if (Array.isArray(L6)) {
            let W = T.slice(0, Math.max(L6[0] - 1, 0)).replace(/[^\t]/g, " "), N = L6[1] || 1;
            H4 = [`
 `, D4(b.gutter, q4.replace(/\d/g, " ")), " ", W, D4(b.marker, "^").repeat(N)].join(""), B6 && m.message && (H4 += " " + D4(b.message, m.message));
          }
          return [D4(b.marker, ">"), D4(b.gutter, q4), T.length > 0 ? ` ${T}` : "", H4].join("");
        } else return ` ${D4(b.gutter, q4)}${T.length > 0 ? ` ${T}` : ""}`;
      }).join(`
`);
      return m.message && !R && (k6 = `${" ".repeat(F6 + 1)}${m.message}
${k6}`), v ? y.reset(k6) : k6;
    }
    a2(h, "vn");
    function f(g6, w4, m, v = {}) {
      if (!u) {
        u = true;
        let y = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        {
          let b = new Error(y);
          b.name = "DeprecationWarning", console.warn(new Error(y));
        }
      }
      return m = Math.max(m, 0), h(g6, { start: { column: m, line: w4 } }, v);
    }
    a2(f, "Bo");
  }), P22 = {};
  rl(P22, { __debug: a2(() => zF, "__debug"), check: a2(() => HF, "check"), doc: a2(() => Cm, "doc"), format: a2(() => Rm, "format"), formatWithCursor: a2(() => Sm, "formatWithCursor"), getSupportInfo: a2(
    () => PF,
    "getSupportInfo"
  ), util: a2(() => Em, "util"), version: a2(() => fF, "version") });
  VS = a2((e6, t, r, n) => {
    if (!(e6 && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  }, "gu"), ol = VS, qS = Ra2(OS(), 1);
  a2(WS, "Dr");
  a2(Sc, "Ae");
  a2(z2, "yt");
  a2(US, "ar");
  zr2 = "string", tr = "array", Or2 = "cursor", It2 = "indent", Mt2 = "align", _t2 = "trim", ze2 = "group", Qe2 = "fill", Ve2 = "if-break", $t2 = "indent-if-break", Ht2 = "line-suffix", Pt2 = "line-suffix-boundary", Ce2 = "line", Et2 = "label", et2 = "break-parent", O22 = /* @__PURE__ */ new Set(
    [Or2, It2, Mt2, _t2, ze2, Qe2, Ve2, $t2, Ht2, Pt2, Ce2, Et2, et2]
  );
  a2(GS, "xu");
  Nr2 = GS, XS = a2((e6) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e6), "bu");
  a2(YS, "wu");
  KS = (ro2 = class extends Error {
    constructor(t) {
      super(YS(t));
      __publicField(this, "name", "InvalidDocError");
      this.doc = t;
    }
  }, a2(ro2, "At"), ro2), vo2 = KS, u2 = {};
  a2(ZS, "Ou");
  Rc = ZS, N2 = a2(() => {
  }, "lr"), Ct2 = N2, Ac = N2;
  a2(Qi, "ie");
  a2(bo2, "oe");
  a2(j2, "Bt");
  a2(JS, "fr");
  a2(QS, "Fr");
  a2(eR, "pr");
  a2(tR, "dr");
  a2(V22, "Ge");
  a2(rR, "mr");
  a2(nR, "Er");
  a2(vc, "_e");
  oR = { type: Pt2 }, al = { type: et2 }, aR = { type: _t2 }, Fc = { type: Ce2, hard: true }, q2 = { type: Ce2, hard: true, literal: true }, W2 = { type: Ce2 }, iR = { type: Ce2, soft: true }, Hr2 = [Fc, al], U22 = [q2, al], bc = { type: Or2 };
  a2(G2, "be");
  a2(X22, "qe");
  a2(lR, "yr");
  a2(Bt2, "J");
  a2(sR, "Ar");
  uR = a2((e6, t, r) => {
    if (!(e6 && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  }, "Nu"), fe2 = uR, cR = a2(
    () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
    "Br"
  );
  a2(pR, "_r");
  a2(dR, "kr");
  fR = a2((e6) => !(pR(e6) || dR(e6)), "xr"), hR = /[^\x20-\x7F]/;
  a2(mR, "Tu");
  kc = mR, gR = a2((e6) => {
    if (Array.isArray(e6)) return e6;
    if (e6.type !== Qe2) throw new Error(`Expect doc to be 'array' or '${Qe2}'.`);
    return e6.parts;
  }, "Or");
  a2(il, "Ne");
  a2(Tc, "Je");
  a2(vR, "vu");
  a2(bR, "Nr");
  a2(c2, "br");
  a2(wR, "Sr");
  a2(yR, "Pu");
  a2(DR, "Tr");
  a2(p2, "wr");
  a2(Ea2, "Oe");
  a2(Y2, "Xe");
  a2(xR, "Lu");
  a2(CR, "Iu");
  a2(ER, "vr");
  a2(SR, "Ru");
  a2(RR, "Pr");
  a2(K2, "Ze");
  Pe = Symbol("MODE_BREAK"), xt2 = Symbol("MODE_FLAT"), Sa2 = Symbol("cursor");
  a2(Z22, "Lr");
  a2(AR, "Yu");
  a2(FR, "ju");
  a2(wc, "kt");
  a2(yc, "xt");
  a2(Yi, "Qe");
  a2(ll, "fe");
  a2(kR, "Vu");
  Lc = kR, TR = (no2 = class {
    constructor(t) {
      s2(this, Ki), s2(this, Ca2), this.stack = [t];
    }
    get key() {
      let { stack: t, siblings: r } = this;
      return fe2(false, t, r === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : fe2(false, this.stack, -2);
    }
    get node() {
      return fe2(false, this.stack, -1);
    }
    get parent() {
      return this.getNode(1);
    }
    get grandparent() {
      return this.getNode(2);
    }
    get isInArray() {
      return this.siblings !== null;
    }
    get siblings() {
      let { stack: t } = this, r = fe2(false, t, -3);
      return Array.isArray(r) ? r : null;
    }
    get next() {
      let { siblings: t } = this;
      return t === null ? null : t[this.index + 1];
    }
    get previous() {
      let { siblings: t } = this;
      return t === null ? null : t[this.index - 1];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isLast() {
      let { siblings: t, index: r } = this;
      return t !== null && r === t.length - 1;
    }
    get isRoot() {
      return this.stack.length === 1;
    }
    get root() {
      return this.stack[0];
    }
    get ancestors() {
      return [...xa2(this, Ca2, Zi).call(this)];
    }
    getName() {
      let { stack: t } = this, { length: r } = t;
      return r > 1 ? fe2(false, t, -2) : null;
    }
    getValue() {
      return fe2(false, this.stack, -1);
    }
    getNode(t = 0) {
      let r = xa2(this, Ki, Dc).call(this, t);
      return r === -1 ? null : this.stack[r];
    }
    getParentNode(t = 0) {
      return this.getNode(t + 1);
    }
    call(t, ...r) {
      let { stack: n } = this, { length: o } = n, i = fe2(false, n, -1);
      for (let l of r) i = i[l], n.push(l, i);
      try {
        return t(this);
      } finally {
        n.length = o;
      }
    }
    callParent(t, r = 0) {
      let n = xa2(this, Ki, Dc).call(this, r + 1), o = this.stack.splice(n + 1);
      try {
        return t(this);
      } finally {
        this.stack.push(...o);
      }
    }
    each(t, ...r) {
      let { stack: n } = this, { length: o } = n, i = fe2(false, n, -1);
      for (let l of r) i = i[l], n.push(l, i);
      try {
        for (let l = 0; l < i.length; ++l) n.push(l, i[l]), t(this, l, i), n.length -= 2;
      } finally {
        n.length = o;
      }
    }
    map(t, ...r) {
      let n = [];
      return this.each((o, i, l) => {
        n[i] = t(o, i, l);
      }, ...r), n;
    }
    match(...t) {
      let r = this.stack.length - 1, n = null, o = this.stack[r--];
      for (let i of t) {
        if (o === void 0) return false;
        let l = null;
        if (typeof n == "number" && (l = n, n = this.stack[r--], o = this.stack[r--]), i && !i(o, n, l)) return false;
        n = this.stack[r--], o = this.stack[r--];
      }
      return true;
    }
    findAncestor(t) {
      for (let r of xa2(this, Ca2, Zi).call(this)) if (t(r)) return r;
    }
    hasAncestor(t) {
      for (let r of xa2(this, Ca2, Zi).call(this)) if (t(r)) return true;
      return false;
    }
  }, a2(no2, "bt"), no2);
  Ki = /* @__PURE__ */ new WeakSet(), Dc = a2(function(e6) {
    let { stack: t } = this;
    for (let r = t.length - 1; r >= 0; r -= 2) if (!Array.isArray(t[r]) && --e6 < 0) return r;
    return -1;
  }, "wt"), Ca2 = /* @__PURE__ */ new WeakSet(), Zi = a2(function* () {
    let { stack: e6 } = this;
    for (let t = e6.length - 3; t >= 0; t -= 2) {
      let r = e6[t];
      Array.isArray(r) || (yield r);
    }
  }, "et");
  LR = TR, J22 = new Proxy(() => {
  }, { get: a2(() => J22, "get") }), xc = J22;
  a2(BR, "$u");
  IR = BR;
  a2(Q2, "Ot");
  a2(MR, "jr");
  a2(Aa2, "de");
  _R = Aa2(/\s/), rr = Aa2(" 	"), em = Aa2(",; 	"), tm = Aa2(/[^\n\r]/);
  a2($R, "Mu");
  Pr2 = $R;
  a2(HR, "Wu");
  er = HR;
  a2(PR, "Uu");
  zR = PR, rm = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), OR = a2(
    (e6) => Object.keys(e6).filter((t) => !rm.has(t)),
    "zu"
  );
  a2(NR, "Gu");
  sl = NR;
  a2(jR, "Ku");
  a2(Bc, "St");
  a2(Jn2, "te");
  a2(_r2, "X");
  a2(Qn2, "re");
  pc2 = /* @__PURE__ */ new WeakMap();
  a2(Ic, "nt");
  a2(nm, "Wr");
  dc = a2(() => false, "vt");
  a2(VR, "Ur");
  om = a2((e6) => !/[\S\n\u2028\u2029]/.test(e6), "zr");
  a2(qR, "Hu");
  a2(WR, "qu");
  a2(d2, "Mr");
  a2(fc, "Pt");
  a2(UR, "Ju");
  Mc = UR;
  a2(am, "Gr");
  a2(GR, "Xu");
  a2(XR, "Zu");
  a2(YR, "Qu");
  a2(KR, "Kr");
  a2(ZR, "Hr");
  a2(JR, "eo");
  QR = JR, im = (oo2 = class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "ConfigError");
    }
  }, a2(oo2, "Le"), oo2), f2 = (ao2 = class extends Error {
    constructor() {
      super(...arguments);
      __publicField(this, "name", "UndefinedParserError");
    }
  }, a2(ao2, "Ie"), ao2), eA = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: {
    category: "Special",
    type: "path",
    description: "Specify the input filepath. This will be used to do parser inference.",
    cliName: "stdin-filepath",
    cliCategory: "Other",
    cliDescription: "Path to the file to pretend that stdin comes from."
  }, insertPragma: {
    category: "Special",
    type: "boolean",
    default: false,
    description: "Insert @format pragma into file's first docblock comment.",
    cliCategory: "Other"
  }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: a2((e6) => typeof e6 == "string" || typeof e6 == "function", "exception"), choices: [
    { value: "flow", description: "Flow" },
    { value: "babel", description: "JavaScript" },
    { value: "babel-flow", description: "Flow" },
    { value: "babel-ts", description: "TypeScript" },
    { value: "typescript", description: "TypeScript" },
    { value: "acorn", description: "JavaScript" },
    { value: "espree", description: "JavaScript" },
    { value: "meriyah", description: "JavaScript" },
    { value: "css", description: "CSS" },
    { value: "less", description: "Less" },
    { value: "scss", description: "SCSS" },
    { value: "json", description: "JSON" },
    { value: "json5", description: "JSON5" },
    { value: "jsonc", description: "JSON with Comments" },
    { value: "json-stringify", description: "JSON.stringify" },
    { value: "graphql", description: "GraphQL" },
    { value: "markdown", description: "Markdown" },
    { value: "mdx", description: "MDX" },
    { value: "vue", description: "Vue" },
    { value: "yaml", description: "YAML" },
    { value: "glimmer", description: "Ember / Handlebars" },
    {
      value: "html",
      description: "HTML"
    },
    { value: "angular", description: "Angular" },
    { value: "lwc", description: "Lightning Web Components" }
  ] }, plugins: {
    type: "path",
    array: true,
    default: [{ value: [] }],
    category: "Global",
    description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
    exception: a2((e6) => typeof e6 == "string" || typeof e6 == "object", "exception"),
    cliName: "plugin",
    cliCategory: "Config"
  }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: {
    start: 0,
    end: 1 / 0,
    step: 1
  } }, rangeEnd: {
    category: "Special",
    type: "int",
    default: 1 / 0,
    range: { start: 0, end: 1 / 0, step: 1 },
    description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
    cliCategory: "Editor"
  }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: {
    category: "Special",
    type: "boolean",
    default: false,
    description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
    cliCategory: "Other"
  }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
  a2(lm, "ut");
  a2(tA, "to");
  a2(rA, "ro");
  nA = a2((e6) => String(e6).split(/[/\\]/).pop(), "no");
  a2(h2, "Xr");
  a2(oA, "uo");
  a2(aA, "oo");
  iA = aA, eo2 = { key: a2((e6) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e6) ? e6 : JSON.stringify(e6), "key"), value(e6) {
    if (e6 === null || typeof e6 != "object") return JSON.stringify(e6);
    if (Array.isArray(e6)) return `[${e6.map((r) => eo2.value(r)).join(", ")}]`;
    let t = Object.keys(e6);
    return t.length === 0 ? "{}" : `{ ${t.map((r) => `${eo2.key(r)}: ${eo2.value(e6[r])}`).join(", ")} }`;
  }, pair: a2(({ key: e6, value: t }) => eo2.value({ [e6]: t }), "pair") }, m2 = Ra2(nl(), 1), lA = a2((e6, t, { descriptor: r }) => {
    let n = [`${m2.default.yellow(typeof e6 == "string" ? r.key(e6) : r.pair(e6))} is deprecated`];
    return t && n.push(`we now treat it as ${m2.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
  }, "tn"), to2 = Ra2(nl(), 1), sm = Symbol.for("vnopts.VALUE_NOT_EXIST"), Ji = Symbol.for("vnopts.VALUE_UNCHANGED"), g2 = " ".repeat(2), sA = a2((e6, t, r) => {
    let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[e6].expected(r)), i = [];
    return n && i.push(v2(e6, t, n, r.descriptor)), o && i.push([v2(e6, t, o.title, r.descriptor)].concat(o.values.map((l) => um(l, r.loggerPrintWidth))).join(`
`)), cm(i, r.loggerPrintWidth);
  }, "un");
  a2(v2, "nn");
  a2(um, "on");
  a2(cm, "sn");
  b2 = Ra2(nl(), 1), hc = [], w2 = [];
  a2(uA, "Rt");
  pm = a2((e6, t, { descriptor: r, logger: n, schemas: o }) => {
    let i = [`Ignored unknown option ${b2.default.yellow(r.pair({ key: e6, value: t }))}.`], l = Object.keys(o).sort().find((u) => uA(e6, u) < 3);
    l && i.push(`Did you mean ${b2.default.blue(r.key(l))}?`), n.warn(i.join(" "));
  }, "it"), cA = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
  a2(pA, "so");
  nr = (io2 = class {
    static create(t) {
      return pA(this, t);
    }
    constructor(t) {
      this.name = t.name;
    }
    default(t) {
    }
    expected(t) {
      return "nothing";
    }
    validate(t, r) {
      return false;
    }
    deprecated(t, r) {
      return false;
    }
    forward(t, r) {
    }
    redirect(t, r) {
    }
    overlap(t, r, n) {
      return t;
    }
    preprocess(t, r) {
      return t;
    }
    postprocess(t, r) {
      return Ji;
    }
  }, a2(io2, "w"), io2);
  a2(dA, "Do");
  fA = (lo2 = class extends nr {
    constructor(t) {
      super(t), this._sourceName = t.sourceName;
    }
    expected(t) {
      return t.schemas[this._sourceName].expected(t);
    }
    validate(t, r) {
      return r.schemas[this._sourceName].validate(t, r);
    }
    redirect(t, r) {
      return this._sourceName;
    }
  }, a2(lo2, "st"), lo2), hA = (so2 = class extends nr {
    expected() {
      return "anything";
    }
    validate() {
      return true;
    }
  }, a2(so2, "Dt"), so2), mA = (uo2 = class extends nr {
    constructor({ valueSchema: t, name: r = t.name, ...n }) {
      super({ ...n, name: r }), this._valueSchema = t;
    }
    expected(t) {
      let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
      return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
    }
    validate(t, r) {
      if (!Array.isArray(t)) return false;
      let n = [];
      for (let o of t) {
        let i = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
        i !== true && n.push(i.value);
      }
      return n.length === 0 ? true : { value: n };
    }
    deprecated(t, r) {
      let n = [];
      for (let o of t) {
        let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
        i !== false && n.push(...i.map(({ value: l }) => ({ value: [l] })));
      }
      return n;
    }
    forward(t, r) {
      let n = [];
      for (let o of t) {
        let i = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
        n.push(...i.map(y2));
      }
      return n;
    }
    redirect(t, r) {
      let n = [], o = [];
      for (let i of t) {
        let l = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
        "remain" in l && n.push(l.remain), o.push(...l.redirect.map(y2));
      }
      return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
    }
    overlap(t, r) {
      return t.concat(r);
    }
  }, a2(uo2, "at"), uo2);
  a2(y2, "an");
  gA = (co2 = class extends nr {
    expected() {
      return "true or false";
    }
    validate(t) {
      return typeof t == "boolean";
    }
  }, a2(co2, "ct"), co2);
  a2(vA, "ln");
  a2(bA, "fn");
  a2(wA, "Fn");
  a2(yA, "pn");
  a2(DA, "dn");
  a2(xA, "mn");
  a2(CA, "En");
  a2(D2, "jt");
  a2(dm, "Vt");
  a2(x2, "$t");
  a2(C2, "Mt");
  a2(E2, "cn");
  a2(Cc, "lt");
  a2(S2, "Wt");
  a2(EA, "ao");
  SA = (po2 = class extends nr {
    constructor(t) {
      super(t), this._choices = bA(t.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
    }
    expected({ descriptor: t }) {
      let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(xA).map(
        t.value
      ), n = r.slice(0, -2), o = r.slice(-2);
      return { text: n.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
    }
    validate(t) {
      return this._choices.has(t);
    }
    deprecated(t) {
      let r = this._choices.get(t);
      return r && r.deprecated ? { value: t } : false;
    }
    forward(t) {
      let r = this._choices.get(t);
      return r ? r.forward : void 0;
    }
    redirect(t) {
      let r = this._choices.get(t);
      return r ? r.redirect : void 0;
    }
  }, a2(po2, "ft"), po2), RA = (fo2 = class extends nr {
    expected() {
      return "a number";
    }
    validate(t, r) {
      return typeof t == "number";
    }
  }, a2(fo2, "Ft"), fo2), AA = (ho2 = class extends RA {
    expected() {
      return "an integer";
    }
    validate(t, r) {
      return r.normalizeValidateResult(super.validate(t, r), t) === true && DA(t);
    }
  }, a2(ho2, "pt"), ho2), R2 = (mo2 = class extends nr {
    expected() {
      return "a string";
    }
    validate(t) {
      return typeof t == "string";
    }
  }, a2(mo2, "Ye"), mo2), FA = eo2, kA = pm, TA = sA, LA = lA, BA = (go2 = class {
    constructor(t, r) {
      let { logger: n = console, loggerPrintWidth: o = 80, descriptor: i = FA, unknown: l = kA, invalid: u = TA, deprecated: c = LA, missing: d = a2(
        () => false,
        "a"
      ), required: p = a2(() => false, "c"), preprocess: h = a2((g6) => g6, "d"), postprocess: f = a2(
        () => Ji,
        "f"
      ) } = r || {};
      this._utils = {
        descriptor: i,
        logger: n || { warn: a2(() => {
        }, "warn") },
        loggerPrintWidth: o,
        schemas: vA(t, "name"),
        normalizeDefaultResult: D2,
        normalizeExpectedResult: dm,
        normalizeDeprecatedResult: C2,
        normalizeForwardResult: Cc,
        normalizeRedirectResult: S2,
        normalizeValidateResult: x2
      }, this._unknownHandler = l, this._invalidHandler = CA(u), this._deprecatedHandler = c, this._identifyMissing = (g6, w4) => !(g6 in w4) || d(g6, w4), this._identifyRequired = p, this._preprocess = h, this._postprocess = f, this.cleanHistory();
    }
    cleanHistory() {
      this._hasDeprecationWarned = wA();
    }
    normalize(t) {
      let r = {}, n = [this._preprocess(t, this._utils)], o = a2(() => {
        for (; n.length !== 0; ) {
          let i = n.shift(), l = this._applyNormalization(i, r);
          n.push(...l);
        }
      }, "u");
      o();
      for (let i of Object.keys(this._utils.schemas)) {
        let l = this._utils.schemas[i];
        if (!(i in r)) {
          let u = D2(l.default(this._utils));
          "value" in u && n.push({ [i]: u.value });
        }
      }
      o();
      for (let i of Object.keys(this._utils.schemas)) {
        if (!(i in r)) continue;
        let l = this._utils.schemas[i], u = r[i], c = l.postprocess(u, this._utils);
        c !== Ji && (this._applyValidation(c, i, l), r[i] = c);
      }
      return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
    }
    _applyNormalization(t, r) {
      let n = [], { knownKeys: o, unknownKeys: i } = this._partitionOptionKeys(t);
      for (let l of o) {
        let u = this._utils.schemas[l], c = u.preprocess(t[l], this._utils);
        this._applyValidation(c, l, u);
        let d = a2(({ from: f, to: g6 }) => {
          n.push(typeof g6 == "string" ? { [g6]: f } : { [g6.key]: g6.value });
        }, "a"), p = a2(({ value: f, redirectTo: g6 }) => {
          let w4 = C2(u.deprecated(f, this._utils), c, true);
          if (w4 !== false) if (w4 === true) this._hasDeprecationWarned(l) || this._utils.logger.warn(this._deprecatedHandler(l, g6, this._utils));
          else for (let { value: m } of w4) {
            let v = { key: l, value: m };
            if (!this._hasDeprecationWarned(v)) {
              let y = typeof g6 == "string" ? { key: g6, value: m } : g6;
              this._utils.logger.warn(this._deprecatedHandler(v, y, this._utils));
            }
          }
        }, "c");
        Cc(u.forward(c, this._utils), c).forEach(d);
        let h = S2(u.redirect(c, this._utils), c);
        if (h.redirect.forEach(d), "remain" in h) {
          let f = h.remain;
          r[l] = l in r ? u.overlap(r[l], f, this._utils) : f, p({ value: f });
        }
        for (let { from: f, to: g6 } of h.redirect) p({ value: f, redirectTo: g6 });
      }
      for (let l of i) {
        let u = t[l];
        this._applyUnknownHandler(l, u, r, (c, d) => {
          n.push({ [c]: d });
        });
      }
      return n;
    }
    _applyRequiredCheck(t) {
      for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t) && this._identifyRequired(r)) throw this._invalidHandler(
        r,
        sm,
        this._utils
      );
    }
    _partitionOptionKeys(t) {
      let [r, n] = yA(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
      return { knownKeys: r, unknownKeys: n };
    }
    _applyValidation(t, r, n) {
      let o = x2(n.validate(t, this._utils), t);
      if (o !== true) throw this._invalidHandler(r, o.value, this._utils);
    }
    _applyUnknownHandler(t, r, n, o) {
      let i = this._unknownHandler(t, r, this._utils);
      if (i) for (let l of Object.keys(i)) {
        if (this._identifyMissing(l, i)) continue;
        let u = i[l];
        l in this._utils.schemas ? o(l, u) : n[l] = u;
      }
    }
    _applyPostprocess(t) {
      let r = this._postprocess(t, this._utils);
      if (r !== Ji) {
        if (r.delete) for (let n of r.delete) delete t[n];
        if (r.override) {
          let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
          for (let i of n) {
            let l = r.override[i];
            this._applyValidation(l, i, this._utils.schemas[i]), t[i] = l;
          }
          for (let i of o) {
            let l = r.override[i];
            this._applyUnknownHandler(i, l, t, (u, c) => {
              let d = this._utils.schemas[u];
              this._applyValidation(c, u, d), t[u] = c;
            });
          }
        }
      }
    }
  }, a2(go2, "dt"), go2);
  a2(IA, "lo");
  a2(MA, "fo");
  a2(_A, "Fo");
  $A = IA, HA = a2((e6, t, r) => {
    if (!(e6 && t == null)) {
      if (t.findLast) return t.findLast(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (r(o, n, t)) return o;
      }
    }
  }, "po"), fm = HA;
  a2(hm, "Gt");
  a2(PA, "Bn");
  a2(mm, "mt");
  a2(gm, "Kt");
  a2(zA, "_n");
  A2 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
  a2(OA, "mo");
  wo2 = OA, NA = Ra2(jS(), 1);
  a2(jA, "_o");
  a2(VA, "ko");
  Fa2 = jA;
  a2(qA, "In");
  a2(WA, "xo");
  a2(UA, "bo");
  GA = UA;
  a2(ul, "je");
  a2(F2, "Yn");
  a2(vm, "qt");
  a2(XA, "wo");
  YA = XA;
  a2(KA, "Oo");
  ZA = KA, JA = a2(({ parser: e6 }) => e6 === "json" || e6 === "json5" || e6 === "jsonc" || e6 === "json-stringify", "No");
  a2(QA, "So");
  a2(k2, "$n");
  a2(eF, "To");
  a2(Ec, "Jt");
  a2(tF, "vo");
  bm = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), rF = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
  a2(T2, "Mn");
  a2(nF, "Un");
  wm = "\uFEFF", L2 = Symbol("cursor");
  a2(ym, "Jn");
  a2(oF, "Lo");
  a2(gc2, "Xt");
  a2(B2, "Gn");
  a2(Dm, "Xn");
  a2(I22, "Kn");
  a2(xm, "Zt");
  a2(aF, "Zn");
  a2(iF, "Qn");
  a2(lF, "eu");
  a2(sF, "tu");
  a2(uF, "ru");
  Cm = {};
  rl(Cm, { builders: a2(() => cF, "builders"), printer: a2(() => pF, "printer"), utils: a2(
    () => dF,
    "utils"
  ) });
  cF = {
    join: G2,
    line: W2,
    softline: iR,
    hardline: Hr2,
    literalline: U22,
    group: j2,
    conditionalGroup: tR,
    fill: V22,
    lineSuffix: vc,
    lineSuffixBoundary: oR,
    cursor: bc,
    breakParent: al,
    ifBreak: rR,
    trim: aR,
    indent: Qi,
    indentIfBreak: nR,
    align: bo2,
    addAlignmentToDoc: X22,
    markAsRoot: QS,
    dedentToRoot: JS,
    dedent: eR,
    hardlineWithoutBreakParent: Fc,
    literallineWithoutBreakParent: q2,
    label: lR,
    concat: a2((e6) => e6, "concat")
  }, pF = { printDocToString: ll }, dF = {
    willBreak: bR,
    traverseDoc: Rc,
    findInDoc: Tc,
    mapDoc: il,
    removeLines: DR,
    stripTrailingHardline: Y2,
    replaceEndOfLine: ER,
    canBreak: RR
  }, fF = "3.2.5", Em = {};
  rl(Em, { addDanglingComment: a2(() => _r2, "addDanglingComment"), addLeadingComment: a2(() => Jn2, "addLeadingComment"), addTrailingComment: a2(() => Qn2, "addTrailingComment"), getAlignmentSize: a2(() => Lc, "getAlignmentSize"), getIndentSize: a2(() => wF, "getIndentSize"), getMaxContinuousCount: a2(() => xF, "getMaxContinuousCount"), getNextNonSpaceNonCommentCharacter: a2(() => EF, "getNextNonSpaceNonCommentCharacter"), getNextNonSpaceNonCommentCharacterIndex: a2(
    () => BF,
    "getNextNonSpaceNonCommentCharacterIndex"
  ), getStringWidth: a2(() => kc, "getStringWidth"), hasNewline: a2(
    () => er,
    "hasNewline"
  ), hasNewlineInRange: a2(() => RF, "hasNewlineInRange"), hasSpaces: a2(() => FF, "hasSpaces"), isNextLineEmpty: a2(() => $F, "isNextLineEmpty"), isNextLineEmptyAfterIndex: a2(() => Pc, "isNextLineEmptyAfterIndex"), isPreviousLineEmpty: a2(() => MF, "isPreviousLineEmpty"), makeString: a2(() => TF, "makeString"), skip: a2(() => Aa2, "skip"), skipEverythingButNewLine: a2(() => tm, "skipEverythingButNewLine"), skipInlineComment: a2(
    () => _c,
    "skipInlineComment"
  ), skipNewline: a2(() => Pr2, "skipNewline"), skipSpaces: a2(() => rr, "skipSpaces"), skipToLineEnd: a2(() => em, "skipToLineEnd"), skipTrailingComment: a2(() => $c, "skipTrailingComment"), skipWhitespace: a2(
    () => _R,
    "skipWhitespace"
  ) });
  a2(hF, "Vo");
  _c = hF;
  a2(mF, "$o");
  $c = mF;
  a2(gF, "Mo");
  Hc = gF;
  a2(vF, "Wo");
  Pc = vF;
  a2(bF, "Uo");
  wF = bF;
  a2(yF, "er");
  a2(DF, "zo");
  xF = DF;
  a2(CF, "Go");
  EF = CF;
  a2(SF, "Ko");
  RF = SF;
  a2(AF, "Ho");
  FF = AF;
  a2(kF, "qo");
  TF = kF;
  a2(LF, "Jo");
  a2(BF, "Xo");
  a2(IF, "Zo");
  a2(MF, "Qo");
  a2(_F, "ei");
  a2($F, "ti");
  a2($r2, "ae");
  Sm = $r2(xm);
  a2(Rm, "lu");
  a2(HF, "ri");
  PF = $r2(lm, 0), zF = { parse: $r2(aF), formatAST: $r2(iF), formatDoc: $r2(lF), printToDoc: $r2(sF), printDocToString: $r2(uF) }, Am = P22;
});
function km(e6) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e6 == "string" ? [e6] : e6);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = n.reduce(function(u, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? u.concat(d.map(function(p) {
      var h, f;
      return (f = (h = p.match(/[\t ]/g)) === null || h === void 0 ? void 0 : h.length) !== null && f !== void 0 ? f : 0;
    })) : u;
  }, []);
  if (o.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    n = n.map(function(u) {
      return u.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var l = n[0];
  return t.forEach(function(u, c) {
    var d = l.match(/(?:^|\n)( *)$/), p = d ? d[1] : "", h = u;
    typeof u == "string" && u.includes(`
`) && (h = String(u).split(`
`).map(function(f, g6) {
      return g6 === 0 ? f : "" + p + f;
    }).join(`
`)), l += h + n[c + 1];
  }), l;
}
var Tm = A(() => {
  a2(km, "dedent");
});
var Bm = {};
on2(Bm, {
  formatter: () => OF
});
var Lm;
var OF;
var Im = A(() => {
  "use strict";
  Lm = ve2(Ko(), 1);
  l2();
  Fm();
  Tm();
  OF = (0, Lm.default)(2)(async (e6, t) => e6 === false ? t : e6 === "dedent" || e6 === true ? km(t) : (await Am.format(t, {
    parser: e6,
    plugins: [i2],
    htmlWhitespaceSensitivity: "ignore"
  })).trim());
});
var L0;
var B0;
var u3 = A(() => {
  L0 = a2(function(t) {
    return t.reduce(function(r, n) {
      var o = n[0], i = n[1];
      return r[o] = i, r;
    }, {});
  }, "fromEntries"), B0 = typeof window < "u" && window.document && window.document.createElement ? El.useLayoutEffect : El.useEffect;
});
var re2;
var se2;
var ie2;
var ne2;
var Sl;
var ir2;
var Ot2;
var Gr2;
var c3;
var Rl;
var To2;
var p3;
var I0;
var Al;
var yL;
var DL;
var xL;
var CL;
var EL;
var SL;
var RL;
var AL;
var FL;
var d3;
var qe2 = A(() => {
  re2 = "top", se2 = "bottom", ie2 = "right", ne2 = "left", Sl = "auto", ir2 = [re2, se2, ie2, ne2], Ot2 = "start", Gr2 = "end", c3 = "clippingParents", Rl = "viewport", To2 = "popper", p3 = "reference", I0 = ir2.reduce(function(e6, t) {
    return e6.concat([t + "-" + Ot2, t + "-" + Gr2]);
  }, []), Al = [].concat(ir2, [Sl]).reduce(function(e6, t) {
    return e6.concat([t, t + "-" + Ot2, t + "-" + Gr2]);
  }, []), yL = "beforeRead", DL = "read", xL = "afterRead", CL = "beforeMain", EL = "main", SL = "afterMain", RL = "beforeWrite", AL = "write", FL = "afterWrite", d3 = [yL, DL, xL, CL, EL, SL, RL, AL, FL];
});
function he2(e6) {
  return e6 ? (e6.nodeName || "").toLowerCase() : null;
}
var lr2 = A(() => {
  a2(he2, "getNodeName");
});
function Q3(e6) {
  if (e6 == null)
    return window;
  if (e6.toString() !== "[object Window]") {
    var t = e6.ownerDocument;
    return t && t.defaultView || window;
  }
  return e6;
}
var ct2 = A(() => {
  a2(Q3, "getWindow");
});
function tt2(e6) {
  var t = Q3(e6).Element;
  return e6 instanceof t || e6 instanceof Element;
}
function ue2(e6) {
  var t = Q3(e6).HTMLElement;
  return e6 instanceof t || e6 instanceof HTMLElement;
}
function Lo(e6) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Q3(e6).ShadowRoot;
  return e6 instanceof t || e6 instanceof ShadowRoot;
}
var We2 = A(() => {
  ct2();
  a2(tt2, "isElement");
  a2(ue2, "isHTMLElement");
  a2(Lo, "isShadowRoot");
});
function kL(e6) {
  var t = e6.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, i = t.elements[r];
    !ue2(i) || !he2(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(l) {
      var u = o[l];
      u === false ? i.removeAttribute(l) : i.setAttribute(l, u === true ? "" : u);
    }));
  });
}
function TL(e6) {
  var t = e6.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], i = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = l.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !ue2(o) || !he2(o) || (Object.assign(o.style, u), Object.keys(i).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
var f3;
var h3 = A(() => {
  lr2();
  We2();
  a2(kL, "applyStyles");
  a2(TL, "effect");
  f3 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: kL,
    effect: TL,
    requires: ["computeStyles"]
  };
});
function me2(e6) {
  return e6.split("-")[0];
}
var sr2 = A(() => {
  a2(me2, "getBasePlacement");
});
var pt;
var Xr2;
var Nt2;
var ur2 = A(() => {
  pt = Math.max, Xr2 = Math.min, Nt2 = Math.round;
});
function Bo() {
  var e6 = navigator.userAgentData;
  return e6 != null && e6.brands && Array.isArray(e6.brands) ? e6.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
var M0 = A(() => {
  a2(Bo, "getUAString");
});
function Ia2() {
  return !/^((?!chrome|android).)*safari/i.test(Bo());
}
var _0 = A(() => {
  M0();
  a2(Ia2, "isLayoutViewport");
});
function rt2(e6, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e6.getBoundingClientRect(), o = 1, i = 1;
  t && ue2(e6) && (o = e6.offsetWidth > 0 && Nt2(n.width) / e6.offsetWidth || 1, i = e6.offsetHeight > 0 && Nt2(n.height) / e6.offsetHeight || 1);
  var l = tt2(e6) ? Q3(e6) : window, u = l.visualViewport, c = !Ia2() && r, d = (n.left + (c && u ? u.offsetLeft : 0)) / o, p = (n.top + (c && u ? u.offsetTop : 0)) / i, h = n.width / o, f = n.height / i;
  return {
    width: h,
    height: f,
    top: p,
    right: d + h,
    bottom: p + f,
    left: d,
    x: d,
    y: p
  };
}
var Io = A(() => {
  We2();
  ur2();
  ct2();
  _0();
  a2(rt2, "getBoundingClientRect");
});
function Yr2(e6) {
  var t = rt2(e6), r = e6.offsetWidth, n = e6.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e6.offsetLeft,
    y: e6.offsetTop,
    width: r,
    height: n
  };
}
var Fl = A(() => {
  Io();
  a2(Yr2, "getLayoutRect");
});
function Ma2(e6, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e6.contains(t))
    return true;
  if (r && Lo(r)) {
    var n = t;
    do {
      if (n && e6.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
var $0 = A(() => {
  We2();
  a2(Ma2, "contains");
});
function Le2(e6) {
  return Q3(e6).getComputedStyle(e6);
}
var Mo = A(() => {
  ct2();
  a2(Le2, "getComputedStyle");
});
function H0(e6) {
  return ["table", "td", "th"].indexOf(he2(e6)) >= 0;
}
var m3 = A(() => {
  lr2();
  a2(H0, "isTableElement");
});
function Ee2(e6) {
  return ((tt2(e6) ? e6.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e6.document
  )) || window.document).documentElement;
}
var jt2 = A(() => {
  We2();
  a2(Ee2, "getDocumentElement");
});
function Vt2(e6) {
  return he2(e6) === "html" ? e6 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e6.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e6.parentNode || // DOM Element detected
    (Lo(e6) ? e6.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ee2(e6)
  );
}
var _a2 = A(() => {
  lr2();
  jt2();
  We2();
  a2(Vt2, "getParentNode");
});
function g3(e6) {
  return !ue2(e6) || // https://github.com/popperjs/popper-core/issues/837
  Le2(e6).position === "fixed" ? null : e6.offsetParent;
}
function LL(e6) {
  var t = /firefox/i.test(Bo()), r = /Trident/i.test(Bo());
  if (r && ue2(e6)) {
    var n = Le2(e6);
    if (n.position === "fixed")
      return null;
  }
  var o = Vt2(e6);
  for (Lo(o) && (o = o.host); ue2(o) && ["html", "body"].indexOf(he2(o)) < 0; ) {
    var i = Le2(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function dt(e6) {
  for (var t = Q3(e6), r = g3(e6); r && H0(r) && Le2(r).position === "static"; )
    r = g3(r);
  return r && (he2(r) === "html" || he2(r) === "body" && Le2(r).position === "static") ? t : r || LL(e6) || t;
}
var _o2 = A(() => {
  ct2();
  lr2();
  Mo();
  We2();
  m3();
  _a2();
  M0();
  a2(g3, "getTrueOffsetParent");
  a2(LL, "getContainingBlock");
  a2(dt, "getOffsetParent");
});
function Kr2(e6) {
  return ["top", "bottom"].indexOf(e6) >= 0 ? "x" : "y";
}
var kl = A(() => {
  a2(Kr2, "getMainAxisFromPlacement");
});
function Zr2(e6, t, r) {
  return pt(e6, Xr2(t, r));
}
function v3(e6, t, r) {
  var n = Zr2(e6, t, r);
  return n > r ? r : n;
}
var P0 = A(() => {
  ur2();
  a2(Zr2, "within");
  a2(v3, "withinMaxClamp");
});
function $a2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
var z0 = A(() => {
  a2($a2, "getFreshSideObject");
});
function Ha2(e6) {
  return Object.assign({}, $a2(), e6);
}
var O0 = A(() => {
  z0();
  a2(Ha2, "mergePaddingObject");
});
function Pa2(e6, t) {
  return t.reduce(function(r, n) {
    return r[n] = e6, r;
  }, {});
}
var N0 = A(() => {
  a2(Pa2, "expandToHashMap");
});
function IL(e6) {
  var t, r = e6.state, n = e6.name, o = e6.options, i = r.elements.arrow, l = r.modifiersData.popperOffsets, u = me2(r.placement), c = Kr2(u), d = [
    ne2,
    ie2
  ].indexOf(u) >= 0, p = d ? "height" : "width";
  if (!(!i || !l)) {
    var h = BL(o.padding, r), f = Yr2(i), g6 = c === "y" ? re2 : ne2, w4 = c === "y" ? se2 : ie2, m = r.rects.reference[p] + r.rects.reference[c] - l[c] - r.rects.popper[p], v = l[c] - r.rects.reference[c], y = dt(i), b = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, D4 = m / 2 - v / 2, x = h[g6], C = b - f[p] - h[w4], E = b / 2 - f[p] / 2 + D4, S = Zr2(x, E, C), R = c;
    r.modifiersData[n] = (t = {}, t[R] = S, t.centerOffset = S - E, t);
  }
}
function ML(e6) {
  var t = e6.state, r = e6.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ma2(t.elements.popper, o) && (t.elements.arrow = o));
}
var BL;
var b3;
var w3 = A(() => {
  sr2();
  Fl();
  $0();
  _o2();
  kl();
  P0();
  O0();
  N0();
  qe2();
  BL = a2(function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
      placement: r.placement
    })) : t, Ha2(typeof t != "number" ? t : Pa2(t, ir2));
  }, "toPaddingObject");
  a2(IL, "arrow");
  a2(ML, "effect");
  b3 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: IL,
    effect: ML,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
});
function nt2(e6) {
  return e6.split("-")[1];
}
var $o = A(() => {
  a2(nt2, "getVariation");
});
function $L(e6, t) {
  var r = e6.x, n = e6.y, o = t.devicePixelRatio || 1;
  return {
    x: Nt2(r * o) / o || 0,
    y: Nt2(n * o) / o || 0
  };
}
function y3(e6) {
  var t, r = e6.popper, n = e6.popperRect, o = e6.placement, i = e6.variation, l = e6.offsets, u = e6.position, c = e6.gpuAcceleration, d = e6.adaptive, p = e6.roundOffsets, h = e6.isFixed, f = l.x, g6 = f === void 0 ? 0 : f, w4 = l.y, m = w4 === void 0 ? 0 : w4, v = typeof p == "function" ? p({
    x: g6,
    y: m
  }) : {
    x: g6,
    y: m
  };
  g6 = v.x, m = v.y;
  var y = l.hasOwnProperty("x"), b = l.hasOwnProperty("y"), D4 = ne2, x = re2, C = window;
  if (d) {
    var E = dt(r), S = "clientHeight", R = "clientWidth";
    if (E === Q3(r) && (E = Ee2(r), Le2(E).position !== "static" && u === "absolute" && (S = "scrollHeight", R = "scrollWidth")), E = E, o === re2 || (o === ne2 || o === ie2) && i === Gr2) {
      x = se2;
      var F6 = h && E === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[S]
      );
      m -= F6 - n.height, m *= c ? 1 : -1;
    }
    if (o === ne2 || (o === re2 || o === se2) && i === Gr2) {
      D4 = ie2;
      var k6 = h && E === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[R]
      );
      g6 -= k6 - n.width, g6 *= c ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: u
  }, d && _L), _7 = p === true ? $L({
    x: g6,
    y: m
  }, Q3(r)) : {
    x: g6,
    y: m
  };
  if (g6 = _7.x, m = _7.y, c) {
    var $7;
    return Object.assign({}, T, ($7 = {}, $7[x] = b ? "0" : "", $7[D4] = y ? "0" : "", $7.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g6 + "px, " + m + "px)" : "translate3d(" + g6 + "px, " + m + "px, 0)", $7));
  }
  return Object.assign({}, T, (t = {}, t[x] = b ? m + "px" : "", t[D4] = y ? g6 + "px" : "", t.transform = "", t));
}
function HL(e6) {
  var t = e6.state, r = e6.options, n = r.gpuAcceleration, o = n === void 0 ? true : n, i = r.adaptive, l = i === void 0 ? true : i, u = r.roundOffsets, c = u === void 0 ? true : u, d = {
    placement: me2(t.placement),
    variation: nt2(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, y3(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, y3(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var _L;
var D3;
var x3 = A(() => {
  qe2();
  _o2();
  ct2();
  jt2();
  Mo();
  sr2();
  $o();
  ur2();
  _L = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  a2($L, "roundOffsetsByDPR");
  a2(y3, "mapToStyles");
  a2(HL, "computeStyles");
  D3 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: HL,
    data: {}
  };
});
function PL(e6) {
  var t = e6.state, r = e6.instance, n = e6.options, o = n.scroll, i = o === void 0 ? true : o, l = n.resize, u = l === void 0 ? true : l, c = Q3(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(p) {
    p.addEventListener("scroll", r.update, Tl);
  }), u && c.addEventListener("resize", r.update, Tl), function() {
    i && d.forEach(function(p) {
      p.removeEventListener("scroll", r.update, Tl);
    }), u && c.removeEventListener("resize", r.update, Tl);
  };
}
var Tl;
var C3;
var E3 = A(() => {
  ct2();
  Tl = {
    passive: true
  };
  a2(PL, "effect");
  C3 = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: a2(function() {
    }, "fn"),
    effect: PL,
    data: {}
  };
});
function Ho(e6) {
  return e6.replace(/left|right|bottom|top/g, function(t) {
    return zL[t];
  });
}
var zL;
var S3 = A(() => {
  zL = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  a2(Ho, "getOppositePlacement");
});
function Ll(e6) {
  return e6.replace(/start|end/g, function(t) {
    return OL[t];
  });
}
var OL;
var R3 = A(() => {
  OL = {
    start: "end",
    end: "start"
  };
  a2(Ll, "getOppositeVariationPlacement");
});
function Jr2(e6) {
  var t = Q3(e6), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
var Bl = A(() => {
  ct2();
  a2(Jr2, "getWindowScroll");
});
function Qr2(e6) {
  return rt2(Ee2(e6)).left + Jr2(e6).scrollLeft;
}
var Il = A(() => {
  Io();
  jt2();
  Bl();
  a2(Qr2, "getWindowScrollBarX");
});
function j0(e6, t) {
  var r = Q3(e6), n = Ee2(e6), o = r.visualViewport, i = n.clientWidth, l = n.clientHeight, u = 0, c = 0;
  if (o) {
    i = o.width, l = o.height;
    var d = Ia2();
    (d || !d && t === "fixed") && (u = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: u + Qr2(e6),
    y: c
  };
}
var A3 = A(() => {
  ct2();
  jt2();
  Il();
  _0();
  a2(j0, "getViewportRect");
});
function V0(e6) {
  var t, r = Ee2(e6), n = Jr2(e6), o = (t = e6.ownerDocument) == null ? void 0 : t.body, i = pt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = pt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + Qr2(
    e6
  ), c = -n.scrollTop;
  return Le2(o || r).direction === "rtl" && (u += pt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: l,
    x: u,
    y: c
  };
}
var F3 = A(() => {
  jt2();
  Mo();
  Il();
  Bl();
  ur2();
  a2(V0, "getDocumentRect");
});
function en2(e6) {
  var t = Le2(e6), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
var Ml = A(() => {
  Mo();
  a2(en2, "isScrollParent");
});
function _l(e6) {
  return ["html", "body", "#document"].indexOf(he2(e6)) >= 0 ? e6.ownerDocument.body : ue2(e6) && en2(e6) ? e6 : _l(Vt2(e6));
}
var k3 = A(() => {
  _a2();
  Ml();
  lr2();
  We2();
  a2(_l, "getScrollParent");
});
function cr2(e6, t) {
  var r;
  t === void 0 && (t = []);
  var n = _l(e6), o = n === ((r = e6.ownerDocument) == null ? void 0 : r.body), i = Q3(n), l = o ? [i].concat(i.visualViewport || [], en2(n) ? n : []) : n, u = t.concat(l);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(cr2(Vt2(l)))
  );
}
var q0 = A(() => {
  k3();
  _a2();
  ct2();
  Ml();
  a2(cr2, "listScrollParents");
});
function Po2(e6) {
  return Object.assign({}, e6, {
    left: e6.x,
    top: e6.y,
    right: e6.x + e6.width,
    bottom: e6.y + e6.height
  });
}
var W0 = A(() => {
  a2(Po2, "rectToClientRect");
});
function NL(e6, t) {
  var r = rt2(e6, false, t === "fixed");
  return r.top = r.top + e6.clientTop, r.left = r.left + e6.clientLeft, r.bottom = r.top + e6.clientHeight, r.right = r.left + e6.clientWidth, r.width = e6.clientWidth, r.height = e6.clientHeight, r.x = r.left, r.y = r.top, r;
}
function T3(e6, t, r) {
  return t === Rl ? Po2(j0(e6, r)) : tt2(t) ? NL(t, r) : Po2(V0(Ee2(e6)));
}
function jL(e6) {
  var t = cr2(Vt2(e6)), r = ["absolute", "fixed"].indexOf(Le2(e6).position) >= 0, n = r && ue2(e6) ? dt(e6) : e6;
  return tt2(n) ? t.filter(function(o) {
    return tt2(o) && Ma2(o, n) && he2(o) !== "body";
  }) : [];
}
function U0(e6, t, r, n) {
  var o = t === "clippingParents" ? jL(e6) : [].concat(t), i = [].concat(o, [r]), l = i[0], u = i.reduce(function(c, d) {
    var p = T3(e6, d, n);
    return c.top = pt(p.top, c.top), c.right = Xr2(p.right, c.right), c.bottom = Xr2(p.bottom, c.bottom), c.left = pt(p.left, c.left), c;
  }, T3(e6, l, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
var L3 = A(() => {
  qe2();
  A3();
  F3();
  q0();
  _o2();
  jt2();
  Mo();
  We2();
  Io();
  _a2();
  $0();
  lr2();
  W0();
  ur2();
  a2(NL, "getInnerBoundingClientRect");
  a2(T3, "getClientRectFromMixedType");
  a2(jL, "getClippingParents");
  a2(U0, "getClippingRect");
});
function za2(e6) {
  var t = e6.reference, r = e6.element, n = e6.placement, o = n ? me2(n) : null, i = n ? nt2(n) : null, l = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case re2:
      c = {
        x: l,
        y: t.y - r.height
      };
      break;
    case se2:
      c = {
        x: l,
        y: t.y + t.height
      };
      break;
    case ie2:
      c = {
        x: t.x + t.width,
        y: u
      };
      break;
    case ne2:
      c = {
        x: t.x - r.width,
        y: u
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? Kr2(o) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (i) {
      case Ot2:
        c[d] = c[d] - (t[p] / 2 - r[p] / 2);
        break;
      case Gr2:
        c[d] = c[d] + (t[p] / 2 - r[p] / 2);
        break;
      default:
    }
  }
  return c;
}
var G0 = A(() => {
  sr2();
  $o();
  kl();
  qe2();
  a2(za2, "computeOffsets");
});
function ft(e6, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e6.placement : n, i = r.strategy, l = i === void 0 ? e6.strategy : i, u = r.boundary, c = u === void 0 ? c3 : u, d = r.rootBoundary, p = d === void 0 ? Rl : d, h = r.elementContext, f = h === void 0 ? To2 : h, g6 = r.altBoundary, w4 = g6 === void 0 ? false : g6, m = r.padding, v = m === void 0 ? 0 : m, y = Ha2(typeof v != "number" ? v : Pa2(v, ir2)), b = f === To2 ? p3 : To2, D4 = e6.rects.popper, x = e6.elements[w4 ? b : f], C = U0(tt2(x) ? x : x.contextElement || Ee2(e6.elements.popper), c, p, l), E = rt2(e6.elements.reference), S = za2(
    {
      reference: E,
      element: D4,
      strategy: "absolute",
      placement: o
    }
  ), R = Po2(Object.assign({}, D4, S)), F6 = f === To2 ? R : E, k6 = {
    top: C.top - F6.top + y.top,
    bottom: F6.bottom - C.bottom + y.bottom,
    left: C.left - F6.left + y.left,
    right: F6.right - C.right + y.right
  }, T = e6.modifiersData.offset;
  if (f === To2 && T) {
    var _7 = T[o];
    Object.keys(k6).forEach(function($7) {
      var q4 = [ie2, se2].indexOf($7) >= 0 ? 1 : -1, L6 = [re2, se2].indexOf($7) >= 0 ? "y" : "x";
      k6[$7] += _7[L6] * q4;
    });
  }
  return k6;
}
var Oa2 = A(() => {
  L3();
  jt2();
  Io();
  G0();
  W0();
  qe2();
  We2();
  O0();
  N0();
  a2(ft, "detectOverflow");
});
function X0(e6, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, l = r.padding, u = r.flipVariations, c = r.allowedAutoPlacements, d = c === void 0 ? Al : c, p = nt2(n), h = p ? u ? I0 : I0.filter(function(w4) {
    return nt2(w4) === p;
  }) : ir2, f = h.filter(function(w4) {
    return d.indexOf(w4) >= 0;
  });
  f.length === 0 && (f = h);
  var g6 = f.reduce(function(w4, m) {
    return w4[m] = ft(e6, {
      placement: m,
      boundary: o,
      rootBoundary: i,
      padding: l
    })[me2(m)], w4;
  }, {});
  return Object.keys(g6).sort(function(w4, m) {
    return g6[w4] - g6[m];
  });
}
var B3 = A(() => {
  $o();
  qe2();
  Oa2();
  sr2();
  a2(X0, "computeAutoPlacement");
});
function VL(e6) {
  if (me2(e6) === Sl)
    return [];
  var t = Ho(e6);
  return [Ll(e6), t, Ll(t)];
}
function qL(e6) {
  var t = e6.state, r = e6.options, n = e6.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? true : o, l = r.altAxis, u = l === void 0 ? true : l, c = r.fallbackPlacements, d = r.padding, p = r.boundary, h = r.rootBoundary, f = r.altBoundary, g6 = r.flipVariations, w4 = g6 === void 0 ? true : g6, m = r.allowedAutoPlacements, v = t.options.placement, y = me2(v), b = y === v, D4 = c || (b || !w4 ? [Ho(v)] : VL(v)), x = [v].concat(D4).reduce(function(ge2, ce2) {
      return ge2.concat(me2(ce2) === Sl ? X0(t, {
        placement: ce2,
        boundary: p,
        rootBoundary: h,
        padding: d,
        flipVariations: w4,
        allowedAutoPlacements: m
      }) : ce2);
    }, []), C = t.rects.reference, E = t.rects.popper, S = /* @__PURE__ */ new Map(), R = true, F6 = x[0], k6 = 0; k6 < x.length; k6++) {
      var T = x[k6], _7 = me2(T), $7 = nt2(T) === Ot2, q4 = [re2, se2].indexOf(_7) >= 0, L6 = q4 ? "width" : "height", B6 = ft(t, {
        placement: T,
        boundary: p,
        rootBoundary: h,
        altBoundary: f,
        padding: d
      }), H4 = q4 ? $7 ? ie2 : ne2 : $7 ? se2 : re2;
      C[L6] > E[L6] && (H4 = Ho(H4));
      var W = Ho(H4), N = [];
      if (i && N.push(B6[_7] <= 0), u && N.push(B6[H4] <= 0, B6[W] <= 0), N.every(function(ge2) {
        return ge2;
      })) {
        F6 = T, R = false;
        break;
      }
      S.set(T, N);
    }
    if (R)
      for (var G = w4 ? 3 : 1, z4 = a2(function(ce2) {
        var Se2 = x.find(function(Ie2) {
          var Me2 = S.get(Ie2);
          if (Me2)
            return Me2.slice(0, ce2).every(function(qo) {
              return qo;
            });
        });
        if (Se2)
          return F6 = Se2, "break";
      }, "_loop"), Y4 = G; Y4 > 0; Y4--) {
        var Be2 = z4(Y4);
        if (Be2 === "break") break;
      }
    t.placement !== F6 && (t.modifiersData[n]._skip = true, t.placement = F6, t.reset = true);
  }
}
var I3;
var M3 = A(() => {
  S3();
  sr2();
  R3();
  Oa2();
  B3();
  qe2();
  $o();
  a2(VL, "getExpandedFallbackPlacements");
  a2(qL, "flip");
  I3 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: qL,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
});
function _3(e6, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e6.top - t.height - r.y,
    right: e6.right - t.width + r.x,
    bottom: e6.bottom - t.height + r.y,
    left: e6.left - t.width - r.x
  };
}
function $3(e6) {
  return [re2, ie2, se2, ne2].some(function(t) {
    return e6[t] >= 0;
  });
}
function WL(e6) {
  var t = e6.state, r = e6.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, l = ft(t, {
    elementContext: "reference"
  }), u = ft(t, {
    altBoundary: true
  }), c = _3(l, n), d = _3(u, o, i), p = $3(c), h = $3(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
var H3;
var P3 = A(() => {
  qe2();
  Oa2();
  a2(_3, "getSideOffsets");
  a2($3, "isAnySideFullyClipped");
  a2(WL, "hide");
  H3 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: WL
  };
});
function UL(e6, t, r) {
  var n = me2(e6), o = [ne2, re2].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e6
  })) : r, l = i[0], u = i[1];
  return l = l || 0, u = (u || 0) * o, [ne2, ie2].indexOf(n) >= 0 ? {
    x: u,
    y: l
  } : {
    x: l,
    y: u
  };
}
function GL(e6) {
  var t = e6.state, r = e6.options, n = e6.name, o = r.offset, i = o === void 0 ? [0, 0] : o, l = Al.reduce(function(p, h) {
    return p[h] = UL(h, t.rects, i), p;
  }, {}), u = l[t.placement], c = u.x, d = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = l;
}
var z3;
var O3 = A(() => {
  sr2();
  qe2();
  a2(UL, "distanceAndSkiddingToXY");
  a2(GL, "offset");
  z3 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: GL
  };
});
function XL(e6) {
  var t = e6.state, r = e6.name;
  t.modifiersData[r] = za2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var N3;
var j3 = A(() => {
  G0();
  a2(XL, "popperOffsets");
  N3 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: XL,
    data: {}
  };
});
function Y0(e6) {
  return e6 === "x" ? "y" : "x";
}
var V3 = A(() => {
  a2(Y0, "getAltAxis");
});
function YL(e6) {
  var t = e6.state, r = e6.options, n = e6.name, o = r.mainAxis, i = o === void 0 ? true : o, l = r.altAxis, u = l === void 0 ? false : l, c = r.boundary, d = r.rootBoundary, p = r.altBoundary, h = r.padding, f = r.tether, g6 = f === void 0 ? true : f, w4 = r.tetherOffset, m = w4 === void 0 ? 0 : w4, v = ft(t, {
    boundary: c,
    rootBoundary: d,
    padding: h,
    altBoundary: p
  }), y = me2(t.placement), b = nt2(t.placement), D4 = !b, x = Kr2(y), C = Y0(x), E = t.modifiersData.popperOffsets, S = t.rects.reference, R = t.rects.popper, F6 = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, k6 = typeof F6 == "number" ? {
    mainAxis: F6,
    altAxis: F6
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F6), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _7 = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var $7, q4 = x === "y" ? re2 : ne2, L6 = x === "y" ? se2 : ie2, B6 = x === "y" ? "height" : "width", H4 = E[x], W = H4 + v[q4], N = H4 - v[L6], G = g6 ? -R[B6] / 2 : 0, z4 = b === Ot2 ? S[B6] : R[B6], Y4 = b === Ot2 ? -R[B6] : -S[B6], Be2 = t.elements.arrow, ge2 = g6 && Be2 ? Yr2(Be2) : {
        width: 0,
        height: 0
      }, ce2 = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : $a2(), Se2 = ce2[q4], Ie2 = ce2[L6], Me2 = Zr2(
        0,
        S[B6],
        ge2[B6]
      ), qo = D4 ? S[B6] / 2 - G - Me2 - Se2 - k6.mainAxis : z4 - Me2 - Se2 - k6.mainAxis, Wo = D4 ? -S[B6] / 2 + G + Me2 + Ie2 + k6.mainAxis : Y4 + Me2 + Ie2 + k6.mainAxis, Ul = t.elements.arrow && dt(t.elements.arrow), Mv = Ul ? x === "y" ? Ul.clientTop || 0 : Ul.clientLeft || 0 : 0, S1 = ($7 = T == null ? void 0 : T[x]) != null ? $7 : 0, _v = H4 + qo - S1 - Mv, $v = H4 + Wo - S1, R1 = Zr2(g6 ? Xr2(W, _v) : W, H4, g6 ? pt(N, $v) : N);
      E[x] = R1, _7[x] = R1 - H4;
    }
    if (u) {
      var A1, Hv = x === "x" ? re2 : ne2, Pv = x === "x" ? se2 : ie2, hr2 = E[C], qa2 = C === "y" ? "height" : "width", F1 = hr2 + v[Hv], k1 = hr2 - v[Pv], Gl = [re2, ne2].indexOf(y) !== -1, T1 = (A1 = T == null ? void 0 : T[C]) != null ? A1 : 0, L1 = Gl ? F1 : hr2 - S[qa2] - R[qa2] - T1 + k6.altAxis, B1 = Gl ? hr2 + S[qa2] + R[qa2] - T1 - k6.altAxis : k1, I1 = g6 && Gl ? v3(L1, hr2, B1) : Zr2(g6 ? L1 : F1, hr2, g6 ? B1 : k1);
      E[C] = I1, _7[C] = I1 - hr2;
    }
    t.modifiersData[n] = _7;
  }
}
var q3;
var W3 = A(() => {
  qe2();
  sr2();
  kl();
  V3();
  P0();
  Fl();
  _o2();
  Oa2();
  $o();
  z0();
  ur2();
  a2(YL, "preventOverflow");
  q3 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: YL,
    requiresIfExists: ["offset"]
  };
});
var K0 = A(() => {
});
function Z0(e6) {
  return {
    scrollLeft: e6.scrollLeft,
    scrollTop: e6.scrollTop
  };
}
var U3 = A(() => {
  a2(Z0, "getHTMLElementScroll");
});
function J0(e6) {
  return e6 === Q3(e6) || !ue2(e6) ? Jr2(e6) : Z0(e6);
}
var G3 = A(() => {
  Bl();
  ct2();
  We2();
  U3();
  a2(J0, "getNodeScroll");
});
function KL(e6) {
  var t = e6.getBoundingClientRect(), r = Nt2(t.width) / e6.offsetWidth || 1, n = Nt2(t.height) / e6.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Q0(e6, t, r) {
  r === void 0 && (r = false);
  var n = ue2(t), o = ue2(t) && KL(t), i = Ee2(t), l = rt2(e6, o, r), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((he2(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  en2(i)) && (u = J0(t)), ue2(t) ? (c = rt2(t, true), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = Qr2(i))), {
    x: l.left + u.scrollLeft - c.x,
    y: l.top + u.scrollTop - c.y,
    width: l.width,
    height: l.height
  };
}
var X3 = A(() => {
  Io();
  G3();
  lr2();
  We2();
  Il();
  jt2();
  Ml();
  ur2();
  a2(KL, "isElementScaled");
  a2(Q0, "getCompositeRect");
});
function ZL(e6) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e6.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(u) {
      if (!r.has(u)) {
        var c = t.get(u);
        c && o(c);
      }
    }), n.push(i);
  }
  return a2(o, "sort"), e6.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function e1(e6) {
  var t = ZL(e6);
  return d3.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
var Y3 = A(() => {
  qe2();
  a2(ZL, "order");
  a2(e1, "orderModifiers");
});
function t1(e6) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e6());
      });
    })), t;
  };
}
var K3 = A(() => {
  a2(t1, "debounce");
});
function r1(e6) {
  var t = e6.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Z3 = A(() => {
  a2(r1, "mergeByName");
});
function Q32() {
  for (var e6 = arguments.length, t = new Array(e6), r = 0; r < e6; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function ev(e6) {
  e6 === void 0 && (e6 = {});
  var t = e6, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? J3 : o;
  return a2(function(u, c, d) {
    d === void 0 && (d = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, J3, i),
      modifiersData: {},
      elements: {
        reference: u,
        popper: c
      },
      attributes: {},
      styles: {}
    }, h = [], f = false, g6 = {
      state: p,
      setOptions: a2(function(y) {
        var b = typeof y == "function" ? y(p.options) : y;
        m(), p.options = Object.assign({}, i, p.options, b), p.scrollParents = {
          reference: tt2(u) ? cr2(u) : u.contextElement ? cr2(u.contextElement) : [],
          popper: cr2(c)
        };
        var D4 = e1(r1([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = D4.filter(function(x) {
          return x.enabled;
        }), w4(), g6.update();
      }, "setOptions"),
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: a2(function() {
        if (!f) {
          var y = p.elements, b = y.reference, D4 = y.popper;
          if (Q32(b, D4)) {
            p.rects = {
              reference: Q0(b, dt(D4), p.options.strategy === "fixed"),
              popper: Yr2(D4)
            }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(k6) {
              return p.modifiersData[k6.name] = Object.assign({}, k6.data);
            });
            for (var x = 0; x < p.orderedModifiers.length; x++) {
              if (p.reset === true) {
                p.reset = false, x = -1;
                continue;
              }
              var C = p.orderedModifiers[x], E = C.fn, S = C.options, R = S === void 0 ? {} : S, F6 = C.name;
              typeof E == "function" && (p = E({
                state: p,
                options: R,
                name: F6,
                instance: g6
              }) || p);
            }
          }
        }
      }, "forceUpdate"),
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: t1(function() {
        return new Promise(function(v) {
          g6.forceUpdate(), v(p);
        });
      }),
      destroy: a2(function() {
        m(), f = true;
      }, "destroy")
    };
    if (!Q32(u, c))
      return g6;
    g6.setOptions(d).then(function(v) {
      !f && d.onFirstUpdate && d.onFirstUpdate(v);
    });
    function w4() {
      p.orderedModifiers.forEach(function(v) {
        var y = v.name, b = v.options, D4 = b === void 0 ? {} : b, x = v.effect;
        if (typeof x == "function") {
          var C = x({
            state: p,
            name: y,
            instance: g6,
            options: D4
          }), E = a2(function() {
          }, "noopFn");
          h.push(C || E);
        }
      });
    }
    a2(w4, "runModifierEffects");
    function m() {
      h.forEach(function(v) {
        return v();
      }), h = [];
    }
    return a2(m, "cleanupModifierEffects"), g6;
  }, "createPopper");
}
var J3;
var tv = A(() => {
  X3();
  Fl();
  q0();
  _o2();
  Y3();
  K3();
  Z3();
  We2();
  J3 = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  a2(Q32, "areValidElements");
  a2(ev, "popperGenerator");
});
var JL;
var n1;
var rv = A(() => {
  tv();
  E3();
  j3();
  x3();
  h3();
  O3();
  M3();
  W3();
  w3();
  P3();
  K0();
  JL = [C3, N3, D3, f3, z3, I3, q3, b3, H3], n1 = ev({
    defaultModifiers: JL
  });
});
var nv = A(() => {
  qe2();
  K0();
  rv();
});
var av = M2((rK, ov) => {
  var QL = typeof Element < "u", eB = typeof Map == "function", tB = typeof Set == "function", rB = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function $l(e6, t) {
    if (e6 === t) return true;
    if (e6 && t && typeof e6 == "object" && typeof t == "object") {
      if (e6.constructor !== t.constructor) return false;
      var r, n, o;
      if (Array.isArray(e6)) {
        if (r = e6.length, r != t.length) return false;
        for (n = r; n-- !== 0; )
          if (!$l(e6[n], t[n])) return false;
        return true;
      }
      var i;
      if (eB && e6 instanceof Map && t instanceof Map) {
        if (e6.size !== t.size) return false;
        for (i = e6.entries(); !(n = i.next()).done; )
          if (!t.has(n.value[0])) return false;
        for (i = e6.entries(); !(n = i.next()).done; )
          if (!$l(n.value[1], t.get(n.value[0]))) return false;
        return true;
      }
      if (tB && e6 instanceof Set && t instanceof Set) {
        if (e6.size !== t.size) return false;
        for (i = e6.entries(); !(n = i.next()).done; )
          if (!t.has(n.value[0])) return false;
        return true;
      }
      if (rB && ArrayBuffer.isView(e6) && ArrayBuffer.isView(t)) {
        if (r = e6.length, r != t.length) return false;
        for (n = r; n-- !== 0; )
          if (e6[n] !== t[n]) return false;
        return true;
      }
      if (e6.constructor === RegExp) return e6.source === t.source && e6.flags === t.flags;
      if (e6.valueOf !== Object.prototype.valueOf && typeof e6.valueOf == "function" && typeof t.valueOf == "function") return e6.valueOf() === t.valueOf();
      if (e6.toString !== Object.prototype.toString && typeof e6.toString == "function" && typeof t.toString == "function") return e6.toString() === t.toString();
      if (o = Object.keys(e6), r = o.length, r !== Object.keys(t).length) return false;
      for (n = r; n-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, o[n])) return false;
      if (QL && e6 instanceof Element) return false;
      for (n = r; n-- !== 0; )
        if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e6.$$typeof) && !$l(e6[o[n]], t[o[n]]))
          return false;
      return true;
    }
    return e6 !== e6 && t !== t;
  }
  a2($l, "equal");
  ov.exports = a2(function(t, r) {
    try {
      return $l(t, r);
    } catch (n) {
      if ((n.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw n;
    }
  }, "isEqual");
});
var lv;
var nB;
var o1;
var sv = A(() => {
  nv();
  lv = ve2(av());
  u3();
  nB = [], o1 = a2(function(t, r, n) {
    n === void 0 && (n = {});
    var o = pr.useRef(null), i = {
      onFirstUpdate: n.onFirstUpdate,
      placement: n.placement || "bottom",
      strategy: n.strategy || "absolute",
      modifiers: n.modifiers || nB
    }, l = pr.useState({
      styles: {
        popper: {
          position: i.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }), u = l[0], c = l[1], d = pr.useMemo(function() {
      return {
        name: "updateState",
        enabled: true,
        phase: "write",
        fn: a2(function(g6) {
          var w4 = g6.state, m = Object.keys(w4.elements);
          iv.flushSync(function() {
            c({
              styles: L0(m.map(function(v) {
                return [v, w4.styles[v] || {}];
              })),
              attributes: L0(m.map(function(v) {
                return [v, w4.attributes[v]];
              }))
            });
          });
        }, "fn"),
        requires: ["computeStyles"]
      };
    }, []), p = pr.useMemo(function() {
      var f = {
        onFirstUpdate: i.onFirstUpdate,
        placement: i.placement,
        strategy: i.strategy,
        modifiers: [].concat(i.modifiers, [d, {
          name: "applyStyles",
          enabled: false
        }])
      };
      return (0, lv.default)(o.current, f) ? o.current || f : (o.current = f, f);
    }, [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, d]), h = pr.useRef();
    return B0(function() {
      h.current && h.current.setOptions(p);
    }, [p]), B0(function() {
      if (!(t == null || r == null)) {
        var f = n.createPopper || n1, g6 = f(t, r, p);
        return h.current = g6, function() {
          g6.destroy(), h.current = null;
        };
      }
    }, [t, r, n.createPopper]), {
      state: h.current ? h.current.state : null,
      styles: u.styles,
      attributes: u.attributes,
      update: h.current ? h.current.update : null,
      forceUpdate: h.current ? h.current.forceUpdate : null
    };
  }, "usePopper");
});
var uv = A(() => {
  sv();
});
function dv(e6) {
  var t = U2.useRef(e6);
  return t.current = e6, U2.useCallback(function() {
    return t.current;
  }, []);
}
function aB(e6) {
  var t = e6.initial, r = e6.value, n = e6.onChange, o = n === void 0 ? oB : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var i = U2.useState(t), l = i[0], u = i[1], c = dv(l), d = U2.useCallback(function(h) {
    var f = c(), g6 = typeof h == "function" ? h(f) : h;
    typeof g6.persist == "function" && g6.persist(), u(g6), typeof o == "function" && o(g6);
  }, [c, o]), p = r !== void 0;
  return [p ? r : l, p ? o : d];
}
function fv(e6, t) {
  return e6 === void 0 && (e6 = 0), t === void 0 && (t = 0), function() {
    return {
      width: 0,
      height: 0,
      top: t,
      right: e6,
      bottom: t,
      left: e6,
      x: 0,
      y: 0,
      toJSON: a2(function() {
        return null;
      }, "toJSON")
    };
  };
}
function hv(e6, t) {
  var r, n, o;
  e6 === void 0 && (e6 = {}), t === void 0 && (t = {});
  var i = Object.keys(pv).reduce(function(L6, B6) {
    var H4;
    return I2({}, L6, (H4 = {}, H4[B6] = L6[B6] !== void 0 ? L6[B6] : pv[B6], H4));
  }, e6), l = U2.useMemo(
    function() {
      return [{
        name: "offset",
        options: {
          offset: i.offset
        }
      }];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i.offset) ? i.offset : []
  ), u = I2({}, t, {
    placement: t.placement || i.placement,
    modifiers: t.modifiers || l
  }), c = U2.useState(null), d = c[0], p = c[1], h = U2.useState(null), f = h[0], g6 = h[1], w4 = aB({
    initial: i.defaultVisible,
    value: i.visible,
    onChange: i.onVisibleChange
  }), m = w4[0], v = w4[1], y = U2.useRef();
  U2.useEffect(function() {
    return function() {
      return clearTimeout(y.current);
    };
  }, []);
  var b = o1(i.followCursor ? cv : d, f, u), D4 = b.styles, x = b.attributes, C = ln2(b, iB), E = C.update, S = dv({
    visible: m,
    triggerRef: d,
    tooltipRef: f,
    finalConfig: i
  }), R = U2.useCallback(
    function(L6) {
      return Array.isArray(i.trigger) ? i.trigger.includes(L6) : i.trigger === L6;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i.trigger) ? i.trigger : [i.trigger]
  ), F6 = U2.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return v(false);
    }, i.delayHide);
  }, [i.delayHide, v]), k6 = U2.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return v(true);
    }, i.delayShow);
  }, [i.delayShow, v]), T = U2.useCallback(function() {
    S().visible ? F6() : k6();
  }, [S, F6, k6]);
  U2.useEffect(function() {
    if (S().finalConfig.closeOnOutsideClick) {
      var L6 = a2(function(H4) {
        var W, N = S(), G = N.tooltipRef, z4 = N.triggerRef, Y4 = (H4.composedPath == null || (W = H4.composedPath()) == null ? void 0 : W[0]) || H4.target;
        Y4 instanceof Node && G != null && z4 != null && !G.contains(Y4) && !z4.contains(Y4) && F6();
      }, "handleClickOutside");
      return document.addEventListener("mousedown", L6), function() {
        return document.removeEventListener("mousedown", L6);
      };
    }
  }, [S, F6]), U2.useEffect(function() {
    if (!(d == null || !R("click")))
      return d.addEventListener("click", T), function() {
        return d.removeEventListener("click", T);
      };
  }, [d, R, T]), U2.useEffect(function() {
    if (!(d == null || !R("double-click")))
      return d.addEventListener("dblclick", T), function() {
        return d.removeEventListener("dblclick", T);
      };
  }, [d, R, T]), U2.useEffect(function() {
    if (!(d == null || !R("right-click"))) {
      var L6 = a2(function(H4) {
        H4.preventDefault(), T();
      }, "preventDefaultAndToggle");
      return d.addEventListener("contextmenu", L6), function() {
        return d.removeEventListener("contextmenu", L6);
      };
    }
  }, [d, R, T]), U2.useEffect(function() {
    if (!(d == null || !R("focus")))
      return d.addEventListener("focus", k6), d.addEventListener("blur", F6), function() {
        d.removeEventListener("focus", k6), d.removeEventListener("blur", F6);
      };
  }, [d, R, k6, F6]), U2.useEffect(function() {
    if (!(d == null || !R("hover")))
      return d.addEventListener("mouseenter", k6), d.addEventListener("mouseleave", F6), function() {
        d.removeEventListener("mouseenter", k6), d.removeEventListener("mouseleave", F6);
      };
  }, [d, R, k6, F6]), U2.useEffect(function() {
    if (!(f == null || !R("hover") || !S().finalConfig.interactive))
      return f.addEventListener("mouseenter", k6), f.addEventListener("mouseleave", F6), function() {
        f.removeEventListener("mouseenter", k6), f.removeEventListener("mouseleave", F6);
      };
  }, [f, R, k6, F6, S]);
  var _7 = C == null || (r = C.state) == null || (n = r.modifiersData) == null || (o = n.hide) == null ? void 0 : o.isReferenceHidden;
  U2.useEffect(function() {
    i.closeOnTriggerHidden && _7 && F6();
  }, [i.closeOnTriggerHidden, F6, _7]), U2.useEffect(function() {
    if (!i.followCursor || d == null) return;
    function L6(B6) {
      var H4 = B6.clientX, W = B6.clientY;
      cv.getBoundingClientRect = fv(H4, W), E == null ? void 0 : E();
    }
    return a2(L6, "setMousePosition"), d.addEventListener("mousemove", L6), function() {
      return d.removeEventListener("mousemove", L6);
    };
  }, [i.followCursor, d, E]), U2.useEffect(function() {
    if (!(f == null || E == null || i.mutationObserverOptions == null)) {
      var L6 = new MutationObserver(E);
      return L6.observe(f, i.mutationObserverOptions), function() {
        return L6.disconnect();
      };
    }
  }, [i.mutationObserverOptions, f, E]);
  var $7 = a2(function(B6) {
    return B6 === void 0 && (B6 = {}), I2({}, B6, {
      style: I2({}, B6.style, D4.popper)
    }, x.popper, {
      "data-popper-interactive": i.interactive
    });
  }, "getTooltipProps"), q4 = a2(function(B6) {
    return B6 === void 0 && (B6 = {}), I2({}, B6, x.arrow, {
      style: I2({}, B6.style, D4.arrow),
      "data-popper-arrow": true
    });
  }, "getArrowProps");
  return I2({
    getArrowProps: q4,
    getTooltipProps: $7,
    setTooltipRef: g6,
    setTriggerRef: p,
    tooltipRef: f,
    triggerRef: d,
    visible: m
  }, C);
}
var oB;
var iB;
var cv;
var pv;
var mv = A(() => {
  Ka2();
  Ue2();
  uv();
  a2(dv, "useGetLatest");
  oB = a2(function() {
  }, "noop");
  a2(aB, "useControlledState");
  a2(fv, "generateBoundingClientRect");
  iB = ["styles", "attributes"], cv = {
    getBoundingClientRect: fv()
  }, pv = {
    closeOnOutsideClick: true,
    closeOnTriggerHidden: false,
    defaultVisible: false,
    delayHide: 0,
    delayShow: 0,
    followCursor: false,
    interactive: false,
    mutationObserverOptions: {
      attributes: true,
      childList: true,
      subtree: true
    },
    offset: [0, 6],
    trigger: "hover"
  };
  a2(hv, "usePopperTooltip");
});
var gv;
var ot2;
var dr;
var lB;
var sB;
var i1;
var bv = A(() => {
  "use strict";
  gv = ve2(Ko(), 1), ot2 = (0, gv.default)(1e3)(
    (e6, t, r, n = 0) => t.split("-")[0] === e6 ? r : n
  ), dr = 8, lB = Tr.div(
    {
      position: "absolute",
      borderStyle: "solid"
    },
    ({ placement: e6 }) => {
      let t = 0, r = 0;
      switch (true) {
        case (e6.startsWith("left") || e6.startsWith("right")): {
          r = 8;
          break;
        }
        case (e6.startsWith("top") || e6.startsWith("bottom")): {
          t = 8;
          break;
        }
        default:
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e6, color: t, placement: r }) => ({
      bottom: `${ot2("top", r, `${dr * -1}px`, "auto")}`,
      top: `${ot2("bottom", r, `${dr * -1}px`, "auto")}`,
      right: `${ot2("left", r, `${dr * -1}px`, "auto")}`,
      left: `${ot2("right", r, `${dr * -1}px`, "auto")}`,
      borderBottomWidth: `${ot2("top", r, "0", dr)}px`,
      borderTopWidth: `${ot2("bottom", r, "0", dr)}px`,
      borderRightWidth: `${ot2("left", r, "0", dr)}px`,
      borderLeftWidth: `${ot2("right", r, "0", dr)}px`,
      borderTopColor: ot2(
        "top",
        r,
        e6.color[t] || t || e6.base === "light" ? yo(e6.background.app) : e6.background.app,
        "transparent"
      ),
      borderBottomColor: ot2(
        "bottom",
        r,
        e6.color[t] || t || e6.base === "light" ? yo(e6.background.app) : e6.background.app,
        "transparent"
      ),
      borderLeftColor: ot2(
        "left",
        r,
        e6.color[t] || t || e6.base === "light" ? yo(e6.background.app) : e6.background.app,
        "transparent"
      ),
      borderRightColor: ot2(
        "right",
        r,
        e6.color[t] || t || e6.base === "light" ? yo(e6.background.app) : e6.background.app,
        "transparent"
      )
    })
  ), sB = Tr.div(
    ({ hidden: e6 }) => ({
      display: e6 ? "none" : "inline-block",
      zIndex: 2147483647
    }),
    ({ theme: e6, color: t, hasChrome: r }) => r ? {
      background: t && e6.color[t] || t || e6.base === "light" ? yo(e6.background.app) : e6.background.app,
      filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
      borderRadius: e6.appBorderRadius,
      fontSize: e6.typography.size.s1
    } : {}
  ), i1 = import_react17.default.forwardRef(
    ({
      placement: e6 = "top",
      hasChrome: t = true,
      children: r,
      arrowProps: n = {},
      tooltipRef: o,
      color: i,
      withArrows: l,
      ...u
    }, c) => import_react17.default.createElement(sB, { "data-testid": "tooltip", hasChrome: t, ref: c, ...u, color: i }, t && l && import_react17.default.createElement(lB, { placement: e6, ...n, color: i }), r)
  );
  i1.displayName = "Tooltip";
});
var s1 = {};
on2(s1, {
  WithToolTipState: () => l1,
  WithTooltip: () => l1,
  WithTooltipPure: () => yv
});
var Hl;
var fB;
var hB;
var yv;
var l1;
var Pl = A(() => {
  "use strict";
  Ya2();
  mv();
  bv();
  ({ document: Hl } = an2), fB = Tr.div`
  display: inline-block;
  cursor: ${(e6) => (
    // @ts-expect-error (non strict)
    e6.trigger === "hover" || e6.trigger.includes("hover") ? "default" : "pointer"
  )};
`, hB = Tr.g`
  cursor: ${(e6) => (
    // @ts-expect-error (non strict)
    e6.trigger === "hover" || e6.trigger.includes("hover") ? "default" : "pointer"
  )};
`, yv = a2(({
    svg: e6 = false,
    trigger: t = "click",
    closeOnOutsideClick: r = false,
    placement: n = "top",
    modifiers: o = [
      {
        name: "preventOverflow",
        options: {
          padding: 8
        }
      },
      {
        name: "offset",
        options: {
          offset: [8, 8]
        }
      },
      {
        name: "arrow",
        options: {
          padding: 8
        }
      }
    ],
    hasChrome: i = true,
    defaultVisible: l = false,
    withArrows: u,
    offset: c,
    tooltip: d,
    children: p,
    closeOnTriggerHidden: h,
    mutationObserverOptions: f,
    delayHide: g6,
    visible: w4,
    interactive: m,
    delayShow: v,
    strategy: y,
    followCursor: b,
    onVisibleChange: D4,
    ...x
  }) => {
    let C = e6 ? hB : fB, {
      getArrowProps: E,
      getTooltipProps: S,
      setTooltipRef: R,
      setTriggerRef: F6,
      visible: k6,
      state: T
    } = hv(
      {
        trigger: t,
        placement: n,
        defaultVisible: l,
        delayHide: g6,
        interactive: m,
        closeOnOutsideClick: r,
        closeOnTriggerHidden: h,
        onVisibleChange: D4,
        delayShow: v,
        followCursor: b,
        mutationObserverOptions: f,
        visible: w4,
        offset: c
      },
      {
        modifiers: o,
        strategy: y
      }
    ), _7 = import_react18.default.createElement(
      i1,
      {
        placement: T == null ? void 0 : T.placement,
        ref: R,
        hasChrome: i,
        arrowProps: E(),
        withArrows: u,
        ...S()
      },
      typeof d == "function" ? d({ onHide: a2(() => D4(false), "onHide") }) : d
    );
    return import_react18.default.createElement(import_react18.default.Fragment, null, import_react18.default.createElement(C, { trigger: t, ref: F6, ...x }, p), k6 && import_react_dom3.default.createPortal(_7, Hl.body));
  }, "WithTooltipPure"), l1 = a2(({
    startOpen: e6 = false,
    onVisibleChange: t,
    ...r
  }) => {
    let [n, o] = (0, import_react18.useState)(e6), i = (0, import_react18.useCallback)(
      (l) => {
        t && t(l) === false || o(l);
      },
      [t]
    );
    return (0, import_react18.useEffect)(() => {
      let l = a2(() => i(false), "hide");
      Hl.addEventListener("keydown", l, false);
      let u = Array.from(Hl.getElementsByTagName("iframe")), c = [];
      return u.forEach((d) => {
        let p = a2(() => {
          try {
            d.contentWindow.document && (d.contentWindow.document.addEventListener("click", l), c.push(() => {
              try {
                d.contentWindow.document.removeEventListener("click", l);
              } catch {
              }
            }));
          } catch {
          }
        }, "bind");
        p(), d.addEventListener("load", p), c.push(() => {
          d.removeEventListener("load", p);
        });
      }), () => {
        Hl.removeEventListener("keydown", l), c.forEach((d) => {
          d();
        });
      };
    }), import_react18.default.createElement(yv, { ...r, visible: n, onVisibleChange: i });
  }, "WithToolTipState");
});
var ee2 = a2(({ ...e6 }, t) => {
  let r = [e6.class, e6.className];
  return delete e6.class, e6.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e6;
}, "nameSpaceClassNames");
Ue2();
$1();
Wa2();
function H1(e6, t) {
  e6.prototype = Object.create(t.prototype), e6.prototype.constructor = e6, Wt2(e6, t);
}
a2(H1, "_inheritsLoose");
P1();
Wa2();
function z1(e6) {
  try {
    return Function.toString.call(e6).indexOf("[native code]") !== -1;
  } catch {
    return typeof e6 == "function";
  }
}
a2(z1, "_isNativeFunction");
function Xl() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xl = a2(function() {
    return !!e6;
  }, "_isNativeReflectConstruct"))();
}
a2(Xl, "_isNativeReflectConstruct");
Wa2();
function O1(e6, t, r) {
  if (Xl()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e6.bind.apply(e6, n))();
  return r && Wt2(o, r.prototype), o;
}
a2(O1, "_construct");
function Ga2(e6) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ga2 = a2(function(n) {
    if (n === null || !z1(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return O1(n, arguments, Ua2(this).constructor);
    }
    return a2(o, "Wrapper"), o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), Wt2(o, n);
  }, "_wrapNativeSuper"), Ga2(e6);
}
a2(Ga2, "_wrapNativeSuper");
var Uv = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function Gv() {
  for (var e6 = arguments.length, t = new Array(e6), r = 0; r < e6; r++)
    t[r] = arguments[r];
  var n = t[0], o = [], i;
  for (i = 1; i < t.length; i += 1)
    o.push(t[i]);
  return o.forEach(function(l) {
    n = n.replace(/%[a-z]/, l);
  }), n;
}
a2(Gv, "format");
var mt = function(e6) {
  H1(t, e6);
  function t(r) {
    for (var n, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      i[l - 1] = arguments[l];
    return n = e6.call(this, Gv.apply(void 0, [Uv[r]].concat(i))) || this, _1(n);
  }
  return a2(t, "PolishedError"), t;
}(Ga2(Error));
function Yl(e6) {
  return Math.round(e6 * 255);
}
a2(Yl, "colorToInt");
function Xv(e6, t, r) {
  return Yl(e6) + "," + Yl(t) + "," + Yl(r);
}
a2(Xv, "convertToInt");
function Xo(e6, t, r, n) {
  if (n === void 0 && (n = Xv), t === 0)
    return n(r, r, r);
  var o = (e6 % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * t, l = i * (1 - Math.abs(o % 2 - 1)), u = 0, c = 0, d = 0;
  o >= 0 && o < 1 ? (u = i, c = l) : o >= 1 && o < 2 ? (u = l, c = i) : o >= 2 && o < 3 ? (c = i, d = l) : o >= 3 && o < 4 ? (c = l, d = i) : o >= 4 && o < 5 ? (u = l, d = i) : o >= 5 && o < 6 && (u = i, d = l);
  var p = r - i / 2, h = u + p, f = c + p, g6 = d + p;
  return n(h, f, g6);
}
a2(Xo, "hslToRgb");
var N1 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Yv(e6) {
  if (typeof e6 != "string") return e6;
  var t = e6.toLowerCase();
  return N1[t] ? "#" + N1[t] : e6;
}
a2(Yv, "nameToHex");
var Kv = /^#[a-fA-F0-9]{6}$/;
var Zv = /^#[a-fA-F0-9]{8}$/;
var Jv = /^#[a-fA-F0-9]{3}$/;
var Qv = /^#[a-fA-F0-9]{4}$/;
var Kl = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var e4 = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var t4 = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var r4 = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function es(e6) {
  if (typeof e6 != "string")
    throw new mt(3);
  var t = Yv(e6);
  if (t.match(Kv))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Zv)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(Jv))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Qv)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var o = Kl.exec(t);
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10)
    };
  var i = e4.exec(t.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var l = t4.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, d = parseInt("" + l[3], 10) / 100, p = "rgb(" + Xo(u, c, d) + ")", h = Kl.exec(p);
    if (!h)
      throw new mt(4, t, p);
    return {
      red: parseInt("" + h[1], 10),
      green: parseInt("" + h[2], 10),
      blue: parseInt("" + h[3], 10)
    };
  }
  var f = r4.exec(t.substring(0, 50));
  if (f) {
    var g6 = parseInt("" + f[1], 10), w4 = parseInt("" + f[2], 10) / 100, m = parseInt("" + f[3], 10) / 100, v = "rgb(" + Xo(g6, w4, m) + ")", y = Kl.exec(v);
    if (!y)
      throw new mt(4, t, v);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4])
    };
  }
  throw new mt(5);
}
a2(es, "parseToRgb");
function n4(e6) {
  var t = e6.red / 255, r = e6.green / 255, n = e6.blue / 255, o = Math.max(t, r, n), i = Math.min(t, r, n), l = (o + i) / 2;
  if (o === i)
    return e6.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: l,
      alpha: e6.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: l
    };
  var u, c = o - i, d = l > 0.5 ? c / (2 - o - i) : c / (o + i);
  switch (o) {
    case t:
      u = (r - n) / c + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / c + 2;
      break;
    default:
      u = (t - r) / c + 4;
      break;
  }
  return u *= 60, e6.alpha !== void 0 ? {
    hue: u,
    saturation: d,
    lightness: l,
    alpha: e6.alpha
  } : {
    hue: u,
    saturation: d,
    lightness: l
  };
}
a2(n4, "rgbToHsl");
function j1(e6) {
  return n4(es(e6));
}
a2(j1, "parseToHsl");
var o4 = a2(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue");
var Jl = o4;
function mr2(e6) {
  var t = e6.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a2(mr2, "numberToHex");
function Zl(e6) {
  return mr2(Math.round(e6 * 255));
}
a2(Zl, "colorToHex");
function a4(e6, t, r) {
  return Jl("#" + Zl(e6) + Zl(t) + Zl(r));
}
a2(a4, "convertToHex");
function Xa2(e6, t, r) {
  return Xo(e6, t, r, a4);
}
a2(Xa2, "hslToHex");
function i4(e6, t, r) {
  if (typeof e6 == "number" && typeof t == "number" && typeof r == "number")
    return Xa2(e6, t, r);
  if (typeof e6 == "object" && t === void 0 && r === void 0)
    return Xa2(e6.hue, e6.saturation, e6.lightness);
  throw new mt(1);
}
a2(i4, "hsl");
function l4(e6, t, r, n) {
  if (typeof e6 == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? Xa2(e6, t, r) : "rgba(" + Xo(e6, t, r) + "," + n + ")";
  if (typeof e6 == "object" && t === void 0 && r === void 0 && n === void 0)
    return e6.alpha >= 1 ? Xa2(e6.hue, e6.saturation, e6.lightness) : "rgba(" + Xo(e6.hue, e6.saturation, e6.lightness) + "," + e6.alpha + ")";
  throw new mt(2);
}
a2(l4, "hsla");
function Ql(e6, t, r) {
  if (typeof e6 == "number" && typeof t == "number" && typeof r == "number")
    return Jl("#" + mr2(e6) + mr2(t) + mr2(r));
  if (typeof e6 == "object" && t === void 0 && r === void 0)
    return Jl("#" + mr2(e6.red) + mr2(e6.green) + mr2(e6.blue));
  throw new mt(6);
}
a2(Ql, "rgb");
function Yo(e6, t, r, n) {
  if (typeof e6 == "string" && typeof t == "number") {
    var o = es(e6);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e6 == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? Ql(e6, t, r) : "rgba(" + e6 + "," + t + "," + r + "," + n + ")";
    if (typeof e6 == "object" && t === void 0 && r === void 0 && n === void 0)
      return e6.alpha >= 1 ? Ql(e6.red, e6.green, e6.blue) : "rgba(" + e6.red + "," + e6.green + "," + e6.blue + "," + e6.alpha + ")";
  }
  throw new mt(7);
}
a2(Yo, "rgba");
var s4 = a2(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, "isRgb");
var u4 = a2(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, "isRgba");
var c4 = a2(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.alpha > "u");
}, "isHsl");
var p4 = a2(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
}, "isHsla");
function V1(e6) {
  if (typeof e6 != "object") throw new mt(8);
  if (u4(e6)) return Yo(e6);
  if (s4(e6)) return Ql(e6);
  if (p4(e6)) return l4(e6);
  if (c4(e6)) return i4(e6);
  throw new mt(8);
}
a2(V1, "toColorString");
function q1(e6, t, r) {
  return a2(function() {
    var o = r.concat(Array.prototype.slice.call(arguments));
    return o.length >= t ? e6.apply(this, o) : q1(e6, t, o);
  }, "fn");
}
a2(q1, "curried");
function ts(e6) {
  return q1(e6, e6.length, []);
}
a2(ts, "curry");
function rs2(e6, t, r) {
  return Math.max(e6, Math.min(t, r));
}
a2(rs2, "guard");
function d4(e6, t) {
  if (t === "transparent") return t;
  var r = j1(t);
  return V1(I2({}, r, {
    lightness: rs2(0, 1, r.lightness - parseFloat(e6))
  }));
}
a2(d4, "darken");
var f4 = ts(d4);
var Ut2 = f4;
function h4(e6, t) {
  if (t === "transparent") return t;
  var r = j1(t);
  return V1(I2({}, r, {
    lightness: rs2(0, 1, r.lightness + parseFloat(e6))
  }));
}
a2(h4, "lighten");
var m4 = ts(h4);
var ns = m4;
function g4(e6, t) {
  if (t === "transparent") return t;
  var r = es(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = I2({}, r, {
    alpha: rs2(0, 1, +(n * 100 - parseFloat(e6) * 100).toFixed(2) / 100)
  });
  return Yo(o);
}
a2(g4, "transparentize");
var v4 = ts(g4);
var be2 = v4;
var Ge2 = a2(({ theme: e6 }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: e6.color.defaultText,
  "&:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "&:hover a.anchor": {
    textDecoration: "none"
  },
  "& tt, & code": {
    fontSize: "inherit"
  }
}), "headerCommon");
var At2 = a2(({ theme: e6 }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: e6.typography.size.s2 - 1,
  border: e6.base === "light" ? `1px solid ${e6.color.mediumlight}` : `1px solid ${e6.color.darker}`,
  color: e6.base === "light" ? be2(0.1, e6.color.defaultText) : be2(0.3, e6.color.defaultText),
  backgroundColor: e6.base === "light" ? e6.color.lighter : e6.color.border
}), "codeCommon");
var j4 = a2(({ theme: e6 }) => ({
  fontFamily: e6.typography.fonts.base,
  fontSize: e6.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
}), "withReset");
var _e2 = {
  margin: "16px 0"
};
var W1 = a2(({
  href: e6 = "",
  ...t
}) => {
  let n = /^\//.test(e6) ? `./?path=${e6}` : e6, i = /^#.*/.test(e6) ? "_self" : "_top";
  return import_react21.default.createElement("a", { href: n, target: i, ...t });
}, "Link");
var os = Tr(W1)(j4, ({ theme: e6 }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: e6.color.secondary,
  textDecoration: "none",
  "&.absent": {
    color: "#cc0000"
  },
  "&.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  }
}));
var as = Tr.blockquote(j4, _e2, ({ theme: e6 }) => ({
  borderLeft: `4px solid ${e6.color.medium}`,
  padding: "0 15px",
  color: e6.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
ia2();
var $5 = a2((e6) => typeof e6 == "string", "isReactChildString");
var Gb = /[\n\r]/g;
var Xb = Tr.code(
  ({ theme: e6 }) => ({
    // from reset
    fontFamily: e6.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  At2
);
var Yb = Tr(aa2)(({ theme: e6 }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: e6.typography.fonts.mono,
  fontSize: `${e6.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: e6.appBorderRadius,
  boxShadow: e6.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
}));
var lu = a2(({
  className: e6,
  children: t,
  ...r
}) => {
  let n = (e6 || "").match(/lang-(\S+)/), o = import_react22.Children.toArray(t);
  return o.filter($5).some((l) => l.match(Gb)) ? import_react22.default.createElement(
    Yb,
    {
      bordered: true,
      copyable: true,
      language: (n == null ? void 0 : n[1]) ?? "text",
      format: false,
      ...r
    },
    t
  ) : import_react22.default.createElement(Xb, { ...r, className: e6 }, o);
}, "Code");
var su = Tr.div(j4);
var uu = Tr.dl(j4, _e2, {
  padding: 0,
  "& dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 0,
    margin: "16px 0 4px"
  },
  "& dt:first-of-type": {
    padding: 0
  },
  "& dt > :first-of-type": {
    marginTop: 0
  },
  "& dt > :last-child": {
    marginBottom: 0
  },
  "& dd": {
    margin: "0 0 16px",
    padding: "0 15px"
  },
  "& dd > :first-of-type": {
    marginTop: 0
  },
  "& dd > :last-child": {
    marginBottom: 0
  }
});
var cu = Tr.h1(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.l1}px`,
  fontWeight: e6.typography.weight.bold
}));
var pu = Tr.h2(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${e6.appBorderColor}`
}));
var du = Tr.h3(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.m1}px`
}));
var fu = Tr.h4(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.s3}px`
}));
var hu = Tr.h5(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.s2}px`
}));
var mu = Tr.h6(j4, Ge2, ({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.s2}px`,
  color: e6.color.dark
}));
var gu = Tr.hr(({ theme: e6 }) => ({
  border: "0 none",
  borderTop: `1px solid ${e6.appBorderColor}`,
  height: 4,
  padding: 0
}));
var vu = Tr.img({
  maxWidth: "100%"
});
var bu2 = Tr.li(j4, ({ theme: e6 }) => ({
  fontSize: e6.typography.size.s2,
  color: e6.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": At2({ theme: e6 })
}));
var sw = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var wu = Tr.ol(j4, _e2, sw, {
  listStyle: "decimal"
});
var yu = Tr.p(j4, _e2, ({ theme: e6 }) => ({
  fontSize: e6.typography.size.s2,
  lineHeight: "24px",
  color: e6.color.defaultText,
  "& code": At2({ theme: e6 })
}));
var Du = Tr.pre(j4, _e2, ({ theme: e6 }) => ({
  // reset
  fontFamily: e6.typography.fonts.mono,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "18px",
  padding: "11px 1rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  borderRadius: 3,
  margin: "1rem 0",
  "&:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "& pre, &.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px",
    code: {
      color: "inherit",
      fontSize: "inherit"
    }
  },
  "& code": {
    whiteSpace: "pre"
  },
  "& code, & tt": {
    border: "none"
  }
}));
var xu = Tr.span(j4, ({ theme: e6 }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e6.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e6.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "&.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "&.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "&.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "&.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  }
}));
var Cu = Tr.table(j4, _e2, ({ theme: e6 }) => ({
  fontSize: e6.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${e6.appBorderColor}`,
    backgroundColor: e6.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: e6.base === "dark" ? e6.color.darker : e6.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: e6.color.defaultText,
    border: `1px solid ${e6.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${e6.appBorderColor}`,
    color: e6.color.defaultText,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr th :first-of-type, & tr td :first-of-type": {
    marginTop: 0
  },
  "& tr th :last-child, & tr td :last-child": {
    marginBottom: 0
  }
}));
var Eu = Tr.title(At2);
var mw = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
};
var Su = Tr.ul(j4, _e2, mw, { listStyle: "disc" });
var z5 = Tr.div(j4);
var Ru = {
  h1: a2((e6) => import_react20.default.createElement(cu, { ...ee2(e6, "h1") }), "h1"),
  h2: a2((e6) => import_react20.default.createElement(pu, { ...ee2(e6, "h2") }), "h2"),
  h3: a2((e6) => import_react20.default.createElement(du, { ...ee2(e6, "h3") }), "h3"),
  h4: a2((e6) => import_react20.default.createElement(fu, { ...ee2(e6, "h4") }), "h4"),
  h5: a2((e6) => import_react20.default.createElement(hu, { ...ee2(e6, "h5") }), "h5"),
  h6: a2((e6) => import_react20.default.createElement(mu, { ...ee2(e6, "h6") }), "h6"),
  pre: a2((e6) => import_react20.default.createElement(Du, { ...ee2(e6, "pre") }), "pre"),
  a: a2((e6) => import_react20.default.createElement(os, { ...ee2(e6, "a") }), "a"),
  hr: a2((e6) => import_react20.default.createElement(gu, { ...ee2(e6, "hr") }), "hr"),
  dl: a2((e6) => import_react20.default.createElement(uu, { ...ee2(e6, "dl") }), "dl"),
  blockquote: a2((e6) => import_react20.default.createElement(as, { ...ee2(e6, "blockquote") }), "blockquote"),
  table: a2((e6) => import_react20.default.createElement(Cu, { ...ee2(e6, "table") }), "table"),
  img: a2((e6) => import_react20.default.createElement(vu, { ...ee2(e6, "img") }), "img"),
  div: a2((e6) => import_react20.default.createElement(su, { ...ee2(e6, "div") }), "div"),
  span: a2((e6) => import_react20.default.createElement(xu, { ...ee2(e6, "span") }), "span"),
  li: a2((e6) => import_react20.default.createElement(bu2, { ...ee2(e6, "li") }), "li"),
  ul: a2((e6) => import_react20.default.createElement(Su, { ...ee2(e6, "ul") }), "ul"),
  ol: a2((e6) => import_react20.default.createElement(wu, { ...ee2(e6, "ol") }), "ol"),
  p: a2((e6) => import_react20.default.createElement(yu, { ...ee2(e6, "p") }), "p"),
  code: a2((e6) => import_react20.default.createElement(lu, { ...ee2(e6, "code") }), "code"),
  tt: a2((e6) => import_react20.default.createElement(Eu, { ...ee2(e6, "tt") }), "tt"),
  resetwrapper: a2((e6) => import_react20.default.createElement(z5, { ...ee2(e6, "resetwrapper") }), "resetwrapper")
};
var yw = Tr.div(
  ({ theme: e6 }) => ({
    display: "inline-block",
    fontSize: 11,
    lineHeight: "12px",
    alignSelf: "center",
    padding: "4px 12px",
    borderRadius: "3em",
    fontWeight: e6.typography.weight.bold
  }),
  {
    svg: {
      height: 12,
      width: 12,
      marginRight: 4,
      marginTop: -2,
      path: {
        fill: "currentColor"
      }
    }
  },
  ({ theme: e6, status: t }) => {
    switch (t) {
      case "critical":
        return {
          color: e6.color.critical,
          background: e6.background.critical
        };
      case "negative":
        return {
          color: e6.color.negativeText,
          background: e6.background.negative,
          boxShadow: e6.base === "light" ? `inset 0 0 0 1px ${be2(0.9, e6.color.negativeText)}` : "none"
        };
      case "warning":
        return {
          color: e6.color.warningText,
          background: e6.background.warning,
          boxShadow: e6.base === "light" ? `inset 0 0 0 1px ${be2(0.9, e6.color.warningText)}` : "none"
        };
      case "neutral":
        return {
          color: e6.color.dark,
          background: e6.color.mediumlight,
          boxShadow: e6.base === "light" ? `inset 0 0 0 1px ${be2(0.9, e6.color.dark)}` : "none"
        };
      case "positive":
        return {
          color: e6.color.positiveText,
          background: e6.background.positive,
          boxShadow: e6.base === "light" ? `inset 0 0 0 1px ${be2(0.9, e6.color.positiveText)}` : "none"
        };
      default:
        return {};
    }
  }
);
var Dw = a2(({ ...e6 }) => import_react23.default.createElement(yw, { ...e6 }), "Badge");
var Tu = {};
on2(Tu, {
  AccessibilityAltIcon: () => TD,
  AccessibilityIcon: () => kD,
  AddIcon: () => Iy,
  AdminIcon: () => wD,
  AlertAltIcon: () => i9,
  AlertIcon: () => a9,
  AlignLeftIcon: () => p8,
  AlignRightIcon: () => d8,
  AppleIcon: () => L8,
  ArrowDownIcon: () => q9,
  ArrowLeftIcon: () => W9,
  ArrowRightIcon: () => U9,
  ArrowSolidDownIcon: () => X9,
  ArrowSolidLeftIcon: () => Y9,
  ArrowSolidRightIcon: () => K9,
  ArrowSolidUpIcon: () => G9,
  ArrowUpIcon: () => V9,
  AzureDevOpsIcon: () => H8,
  BackIcon: () => sD,
  BasketIcon: () => k9,
  BatchAcceptIcon: () => Ry,
  BatchDenyIcon: () => Sy,
  BeakerIcon: () => T9,
  BellIcon: () => p9,
  BitbucketIcon: () => P8,
  BoldIcon: () => w8,
  BookIcon: () => r8,
  BookmarkHollowIcon: () => b9,
  BookmarkIcon: () => w9,
  BottomBarIcon: () => uy,
  BottomBarToggleIcon: () => cy,
  BoxIcon: () => my,
  BranchIcon: () => F8,
  BrowserIcon: () => ty,
  ButtonIcon: () => Zy,
  CPUIcon: () => py,
  CalendarIcon: () => u8,
  CameraIcon: () => Vw,
  CategoryIcon: () => a8,
  CertificateIcon: () => S9,
  ChangedIcon: () => Py,
  ChatIcon: () => Wy,
  CheckIcon: () => Cy,
  ChevronDownIcon: () => H9,
  ChevronLeftIcon: () => P9,
  ChevronRightIcon: () => ku,
  ChevronSmallDownIcon: () => O9,
  ChevronSmallLeftIcon: () => N9,
  ChevronSmallRightIcon: () => j9,
  ChevronSmallUpIcon: () => z9,
  ChevronUpIcon: () => $9,
  ChromaticIcon: () => z8,
  ChromeIcon: () => _8,
  CircleHollowIcon: () => g9,
  CircleIcon: () => v9,
  ClearIcon: () => Oy,
  CloseAltIcon: () => ky,
  CloseIcon: () => _y,
  CloudHollowIcon: () => I9,
  CloudIcon: () => M9,
  CogIcon: () => by,
  CollapseIcon: () => J9,
  CommandIcon: () => t9,
  CommentAddIcon: () => jy,
  CommentIcon: () => Ny,
  CommentsIcon: () => qy,
  CommitIcon: () => A8,
  CompassIcon: () => dD,
  ComponentDrivenIcon: () => O8,
  ComponentIcon: () => Ew,
  ContrastIcon: () => $w,
  ControlsIcon: () => Ay,
  CopyIcon: () => o8,
  CreditIcon: () => Ky,
  CrossIcon: () => Fu,
  DashboardIcon: () => gD,
  DatabaseIcon: () => dy,
  DeleteIcon: () => $y,
  DiamondIcon: () => y9,
  DirectionIcon: () => yD,
  DiscordIcon: () => N8,
  DocChartIcon: () => h8,
  DocListIcon: () => m8,
  DocumentIcon: () => n8,
  DownloadIcon: () => lD,
  DragIcon: () => g8,
  EditIcon: () => vy,
  EllipsisIcon: () => Dy,
  EmailIcon: () => l9,
  ExpandAltIcon: () => Z9,
  ExpandIcon: () => Q9,
  EyeCloseIcon: () => Mw,
  EyeIcon: () => Iw,
  FaceHappyIcon: () => RD,
  FaceNeutralIcon: () => AD,
  FaceSadIcon: () => FD,
  FacebookIcon: () => j8,
  FailedIcon: () => zy,
  FastForwardIcon: () => Kw,
  FigmaIcon: () => V8,
  FilterIcon: () => f8,
  FlagIcon: () => B9,
  FolderIcon: () => i8,
  FormIcon: () => Ey,
  GDriveIcon: () => q8,
  GithubIcon: () => W8,
  GitlabIcon: () => U8,
  GlobeIcon: () => pD,
  GoogleIcon: () => G8,
  GraphBarIcon: () => c8,
  GraphLineIcon: () => s8,
  GraphqlIcon: () => X8,
  GridAltIcon: () => Fw,
  GridIcon: () => Sw,
  GrowIcon: () => zw,
  HeartHollowIcon: () => D9,
  HeartIcon: () => x9,
  HomeIcon: () => bD,
  HourglassIcon: () => L9,
  InfoIcon: () => r9,
  ItalicIcon: () => y8,
  JumpToIcon: () => m9,
  KeyIcon: () => Xy,
  LightningIcon: () => _w,
  LightningOffIcon: () => Au,
  LinkBrokenIcon: () => c9,
  LinkIcon: () => u9,
  LinkedinIcon: () => ey,
  LinuxIcon: () => B8,
  ListOrderedIcon: () => x8,
  ListUnorderedIcon: () => C8,
  LocationIcon: () => fD,
  LockIcon: () => Uy,
  MarkdownIcon: () => S8,
  MarkupIcon: () => b8,
  MediumIcon: () => Y8,
  MemoryIcon: () => fy,
  MenuIcon: () => v8,
  MergeIcon: () => T8,
  MirrorIcon: () => Pw,
  MobileIcon: () => ny,
  MoonIcon: () => t8,
  NutIcon: () => wy,
  OutboxIcon: () => Yy,
  OutlineIcon: () => Rw,
  PaintBrushIcon: () => Ow,
  PaperClipIcon: () => D8,
  ParagraphIcon: () => E8,
  PassedIcon: () => Hy,
  PhoneIcon: () => s9,
  PhotoDragIcon: () => Aw,
  PhotoIcon: () => Cw,
  PinAltIcon: () => Ly,
  PinIcon: () => hD,
  PlayBackIcon: () => Gw,
  PlayIcon: () => Uw,
  PlayNextIcon: () => Xw,
  PlusIcon: () => Fy,
  PointerDefaultIcon: () => Qy,
  PointerHandIcon: () => e9,
  PowerIcon: () => gy,
  PrintIcon: () => l8,
  ProceedIcon: () => uD,
  ProfileIcon: () => SD,
  PullRequestIcon: () => k8,
  QuestionIcon: () => n9,
  RSSIcon: () => d9,
  RedirectIcon: () => rD,
  ReduxIcon: () => K8,
  RefreshIcon: () => cD,
  ReplyIcon: () => oD,
  RepoIcon: () => R8,
  RequestChangeIcon: () => Vy,
  RewindIcon: () => Yw,
  RulerIcon: () => Nw,
  SearchIcon: () => kw,
  ShareAltIcon: () => f9,
  ShareIcon: () => h9,
  ShieldIcon: () => F9,
  SideBySideIcon: () => Jw,
  SidebarAltIcon: () => iy,
  SidebarAltToggleIcon: () => ly,
  SidebarIcon: () => ay,
  SidebarToggleIcon: () => sy,
  SpeakerIcon: () => Ww,
  StackedIcon: () => Qw,
  StarHollowIcon: () => C9,
  StarIcon: () => E9,
  StickerIcon: () => _9,
  StopAltIcon: () => Zw,
  StopIcon: () => jw,
  StorybookIcon: () => $8,
  StructureIcon: () => hy,
  SubtractIcon: () => My,
  SunIcon: () => e8,
  SupportIcon: () => o9,
  SwitchAltIcon: () => Hw,
  SyncIcon: () => aD,
  TabletIcon: () => ry,
  ThumbsUpIcon: () => A9,
  TimeIcon: () => mD,
  TimerIcon: () => vD,
  TransferIcon: () => tD,
  TrashIcon: () => Ty,
  TwitterIcon: () => Z8,
  TypeIcon: () => Jy,
  UbuntuIcon: () => I8,
  UndoIcon: () => nD,
  UnfoldIcon: () => eD,
  UnlockIcon: () => Gy,
  UnpinIcon: () => By,
  UploadIcon: () => iD,
  UserAddIcon: () => CD,
  UserAltIcon: () => xD,
  UserIcon: () => DD,
  UsersIcon: () => ED,
  VSCodeIcon: () => Q8,
  VerifiedIcon: () => R9,
  VideoIcon: () => qw,
  WandIcon: () => xy,
  WatchIcon: () => oy,
  WindowsIcon: () => M8,
  WrenchIcon: () => yy,
  YoutubeIcon: () => J8,
  ZoomIcon: () => Tw,
  ZoomOutIcon: () => Lw,
  ZoomResetIcon: () => Bw,
  iconList: () => xw
});
var xw = [
  {
    name: "Images",
    icons: [
      "PhotoIcon",
      "ComponentIcon",
      "GridIcon",
      "OutlineIcon",
      "PhotoDragIcon",
      "GridAltIcon",
      "SearchIcon",
      "ZoomIcon",
      "ZoomOutIcon",
      "ZoomResetIcon",
      "EyeIcon",
      "EyeCloseIcon",
      "LightningIcon",
      "LightningOffIcon",
      "ContrastIcon",
      "SwitchAltIcon",
      "MirrorIcon",
      "GrowIcon",
      "PaintBrushIcon",
      "RulerIcon",
      "StopIcon",
      "CameraIcon",
      "VideoIcon",
      "SpeakerIcon",
      "PlayIcon",
      "PlayBackIcon",
      "PlayNextIcon",
      "RewindIcon",
      "FastForwardIcon",
      "StopAltIcon",
      "SideBySideIcon",
      "StackedIcon",
      "SunIcon",
      "MoonIcon"
    ]
  },
  {
    name: "Documents",
    icons: [
      "BookIcon",
      "DocumentIcon",
      "CopyIcon",
      "CategoryIcon",
      "FolderIcon",
      "PrintIcon",
      "GraphLineIcon",
      "CalendarIcon",
      "GraphBarIcon",
      "AlignLeftIcon",
      "AlignRightIcon",
      "FilterIcon",
      "DocChartIcon",
      "DocListIcon",
      "DragIcon",
      "MenuIcon"
    ]
  },
  {
    name: "Editing",
    icons: [
      "MarkupIcon",
      "BoldIcon",
      "ItalicIcon",
      "PaperClipIcon",
      "ListOrderedIcon",
      "ListUnorderedIcon",
      "ParagraphIcon",
      "MarkdownIcon"
    ]
  },
  {
    name: "Git",
    icons: [
      "RepoIcon",
      "CommitIcon",
      "BranchIcon",
      "PullRequestIcon",
      "MergeIcon"
    ]
  },
  {
    name: "OS",
    icons: [
      "AppleIcon",
      "LinuxIcon",
      "UbuntuIcon",
      "WindowsIcon",
      "ChromeIcon"
    ]
  },
  {
    name: "Logos",
    icons: [
      "StorybookIcon",
      "AzureDevOpsIcon",
      "BitbucketIcon",
      "ChromaticIcon",
      "ComponentDrivenIcon",
      "DiscordIcon",
      "FacebookIcon",
      "FigmaIcon",
      "GDriveIcon",
      "GithubIcon",
      "GitlabIcon",
      "GoogleIcon",
      "GraphqlIcon",
      "MediumIcon",
      "ReduxIcon",
      "TwitterIcon",
      "YoutubeIcon",
      "VSCodeIcon",
      "LinkedinIcon"
    ]
  },
  {
    name: "Devices",
    icons: [
      "BrowserIcon",
      "TabletIcon",
      "MobileIcon",
      "WatchIcon",
      "SidebarIcon",
      "SidebarAltIcon",
      "SidebarAltToggleIcon",
      "SidebarToggleIcon",
      "BottomBarIcon",
      "BottomBarToggleIcon",
      "CPUIcon",
      "DatabaseIcon",
      "MemoryIcon",
      "StructureIcon",
      "BoxIcon",
      "PowerIcon"
    ]
  },
  {
    name: "CRUD",
    icons: [
      "EditIcon",
      "CogIcon",
      "NutIcon",
      "WrenchIcon",
      "EllipsisIcon",
      "WandIcon",
      "CheckIcon",
      "FormIcon",
      "BatchDenyIcon",
      "BatchAcceptIcon",
      "ControlsIcon",
      "PlusIcon",
      "CloseAltIcon",
      "CrossIcon",
      "TrashIcon",
      "PinAltIcon",
      "UnpinIcon",
      "AddIcon",
      "SubtractIcon",
      "CloseIcon",
      "DeleteIcon",
      "PassedIcon",
      "ChangedIcon",
      "FailedIcon",
      "ClearIcon",
      "CommentIcon",
      "CommentAddIcon",
      "RequestChangeIcon",
      "CommentsIcon",
      "ChatIcon",
      "LockIcon",
      "UnlockIcon",
      "KeyIcon",
      "OutboxIcon",
      "CreditIcon",
      "ButtonIcon",
      "TypeIcon",
      "PointerDefaultIcon",
      "PointerHandIcon",
      "CommandIcon"
    ]
  },
  {
    name: "Communicate",
    icons: [
      "InfoIcon",
      "QuestionIcon",
      "SupportIcon",
      "AlertIcon",
      "AlertAltIcon",
      "EmailIcon",
      "PhoneIcon",
      "LinkIcon",
      "LinkBrokenIcon",
      "BellIcon",
      "RSSIcon",
      "ShareAltIcon",
      "ShareIcon",
      "JumpToIcon",
      "CircleHollowIcon",
      "CircleIcon",
      "BookmarkHollowIcon",
      "BookmarkIcon",
      "DiamondIcon",
      "HeartHollowIcon",
      "HeartIcon",
      "StarHollowIcon",
      "StarIcon",
      "CertificateIcon",
      "VerifiedIcon",
      "ThumbsUpIcon",
      "ShieldIcon",
      "BasketIcon",
      "BeakerIcon",
      "HourglassIcon",
      "FlagIcon",
      "CloudHollowIcon",
      "CloudIcon",
      "StickerIcon"
    ]
  },
  {
    name: "Wayfinding",
    icons: [
      "ChevronUpIcon",
      "ChevronDownIcon",
      "ChevronLeftIcon",
      "ChevronRightIcon",
      "ChevronSmallUpIcon",
      "ChevronSmallDownIcon",
      "ChevronSmallLeftIcon",
      "ChevronSmallRightIcon",
      "ArrowUpIcon",
      "ArrowDownIcon",
      "ArrowLeftIcon",
      "ArrowRightIcon",
      "ArrowSolidUpIcon",
      "ArrowSolidDownIcon",
      "ArrowSolidLeftIcon",
      "ArrowSolidRightIcon",
      "ExpandAltIcon",
      "CollapseIcon",
      "ExpandIcon",
      "UnfoldIcon",
      "TransferIcon",
      "RedirectIcon",
      "UndoIcon",
      "ReplyIcon",
      "SyncIcon",
      "UploadIcon",
      "DownloadIcon",
      "BackIcon",
      "ProceedIcon",
      "RefreshIcon",
      "GlobeIcon",
      "CompassIcon",
      "LocationIcon",
      "PinIcon",
      "TimeIcon",
      "DashboardIcon",
      "TimerIcon",
      "HomeIcon",
      "AdminIcon",
      "DirectionIcon"
    ]
  },
  {
    name: "People",
    icons: [
      "UserIcon",
      "UserAltIcon",
      "UserAddIcon",
      "UsersIcon",
      "ProfileIcon",
      "FaceHappyIcon",
      "FaceNeutralIcon",
      "FaceSadIcon",
      "AccessibilityIcon",
      "AccessibilityAltIcon"
    ]
  }
];
var Cw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
      fill: e6
    }
  )
));
var Ew = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
      fill: e6
    }
  )
));
var Sw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
      fill: e6
    }
  )
));
var Rw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
      fill: e6
    }
  )
));
var Aw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
      fill: e6
    }
  )
));
var Fw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
      fill: e6
    }
  )
));
var kw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
      fill: e6
    }
  )
));
var Tw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
      fill: e6
    }
  )
));
var Lw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
      fill: e6
    }
  )
));
var Bw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
      fill: e6
    }
  )
));
var Iw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
      fill: e6
    }
  )
));
var Mw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
      fill: e6
    }
  )
));
var _w = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
      fill: e6
    }
  )
));
var Au = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
      fill: e6
    }
  )
));
var $w = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
      fill: e6
    }
  )
));
var Hw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
      fill: e6
    }
  )
));
var Pw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
      fill: e6
    }
  )
));
var zw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
      fill: e6
    }
  )
));
var Ow = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
      fill: e6
    }
  )
));
var Nw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
      fill: e6
    }
  )
));
var jw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var Vw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
      fill: e6
    }
  )
));
var qw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
      fill: e6
    }
  )
));
var Ww = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
      fill: e6
    }
  )
));
var Uw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
      fill: e6
    }
  )
));
var Gw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
      fill: e6
    }
  )
));
var Xw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
      fill: e6
    }
  )
));
var Yw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
      fill: e6
    }
  )
));
var Kw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
      fill: e6
    }
  )
));
var Zw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
      fill: e6
    }
  )
));
var Jw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
      fill: e6
    }
  )
));
var Qw = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
      fill: e6
    }
  )
));
var e8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3492)", fill: e6 }, s.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z" }), s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
    }
  ), s.createElement("path", { d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z" })),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3492" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var t8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3493)" }, s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z",
      fill: e6
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3493" }, s.createElement(
    "path",
    {
      fill: "#fff",
      transform: "scale(1.07124)",
      d: "M0 0h14.001v14.002H0z"
    }
  )))
));
var r8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
      fill: e6
    }
  )
));
var n8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
      fill: e6
    }
  )
));
var o8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
      fill: e6
    }
  )
));
var a8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
      fill: e6
    }
  )
));
var i8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
      fill: e6
    }
  )
));
var l8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
      fill: e6
    }
  )
));
var s8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
      fill: e6
    }
  )
));
var u8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
      fill: e6
    }
  )
));
var c8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
      fill: e6
    }
  )
));
var p8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
      fill: e6
    }
  )
));
var d8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
      fill: e6
    }
  )
));
var f8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
      fill: e6
    }
  )
));
var h8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
      fill: e6
    }
  )
));
var m8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
      fill: e6
    }
  )
));
var g8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
      fill: e6
    }
  )
));
var v8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
      fill: e6
    }
  )
));
var b8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
      fill: e6
    }
  )
));
var w8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
      fill: e6
    }
  )
));
var y8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z", fill: e6 })
));
var D8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
      fill: e6
    }
  )
));
var x8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
      fill: e6
    }
  )
));
var C8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
      fill: e6
    }
  )
));
var E8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
      fill: e6
    }
  )
));
var S8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
      fill: e6
    }
  )
));
var R8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
      fill: e6
    }
  )
));
var A8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
      fill: e6
    }
  )
));
var F8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e6
    }
  )
));
var k8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e6
    }
  )
));
var T8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e6
    }
  )
));
var L8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
      fill: e6
    }
  )
));
var B8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
      fill: e6
    }
  )
));
var I8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3497)", fill: e6 }, s.createElement("path", { d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" })),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3497" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var M8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
      fill: e6
    }
  )
));
var _8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3496)" }, s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
      fill: e6
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3496" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var $8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
      fill: e6
    }
  )
));
var H8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3503)" }, s.createElement(
    "path",
    {
      d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
      fill: e6
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3503" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var P8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
      fill: e6
    }
  )
));
var z8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
      fill: e6
    }
  )
));
var O8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
      fill: e6
    }
  )
));
var N8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
      fill: e6
    }
  )
));
var j8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
      fill: e6
    }
  )
));
var V8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
      fill: e6
    }
  )
));
var q8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
      fill: e6
    }
  )
));
var W8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
      fill: e6
    }
  )
));
var U8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
      fill: e6
    }
  )
));
var G8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
      fill: e6
    }
  )
));
var X8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
      fill: e6
    }
  )
));
var Y8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
      fill: e6
    }
  )
));
var K8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
      fill: e6
    }
  )
));
var Z8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
      fill: e6
    }
  )
));
var J8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
      fill: e6
    }
  )
));
var Q8 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
      fill: e6
    }
  )
));
var ey = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
      fill: e6
    }
  )
));
var ty = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e6
    }
  )
));
var ry = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
      fill: e6
    }
  )
));
var ny = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
      fill: e6
    }
  )
));
var oy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
      fill: e6
    }
  )
));
var ay = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
      fill: e6
    }
  )
));
var iy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
      fill: e6
    }
  )
));
var ly = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
      fill: e6
    }
  )
));
var sy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
      fill: e6
    }
  )
));
var uy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
      fill: e6
    }
  )
));
var cy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
      fill: e6
    }
  )
));
var py = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
      fill: e6
    }
  )
));
var dy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
      fill: e6
    }
  )
));
var fy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
      fill: e6
    }
  )
));
var hy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
      fill: e6
    }
  )
));
var my = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
      fill: e6
    }
  )
));
var gy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z", fill: e6 }),
  s.createElement(
    "path",
    {
      d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
      fill: e6
    }
  )
));
var vy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
      fill: e6
    }
  )
));
var by = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
      fill: e6
    }
  )
));
var wy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
      fill: e6
    }
  )
));
var yy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e6
    }
  )
));
var Dy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
      fill: e6
    }
  )
));
var xy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
      fill: e6
    }
  )
));
var Cy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
      fill: e6
    }
  )
));
var Ey = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
      fill: e6
    }
  )
));
var Sy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
      fill: e6
    }
  )
));
var Ry = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
      fill: e6
    }
  )
));
var Ay = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
      fill: e6
    }
  )
));
var Fy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.5.5a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6z",
      fill: e6
    }
  )
));
var ky = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
      fill: e6
    }
  )
));
var Fu = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
      fill: e6
    }
  )
));
var Ty = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
      fill: e6
    }
  )
));
var Ly = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3502)" }, s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
      fill: e6
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3502" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var By = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3501)", fill: e6 }, s.createElement("path", { d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z" })),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3501" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var Iy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e6
    }
  )
));
var My = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var _y = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e6
    }
  )
));
var $y = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
      fill: e6
    }
  )
));
var Hy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var Py = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
      fill: e6
    }
  )
));
var zy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var Oy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
      fill: e6
    }
  )
));
var Ny = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
      fill: e6
    }
  )
));
var jy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
      fill: e6
    }
  )
));
var Vy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
      fill: e6
    }
  )
));
var qy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
      fill: e6
    }
  )
));
var Wy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
      fill: e6
    }
  )
));
var Uy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
      fill: e6
    }
  )
));
var Gy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3614)", fill: e6 }, s.createElement("path", { d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" }), s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3614" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var Xy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
      fill: e6
    }
  )
));
var Yy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
      fill: e6
    }
  )
));
var Ky = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
      fill: e6
    }
  )
));
var Zy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
      fill: e6
    }
  )
));
var Jy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
      fill: e6
    }
  )
));
var Qy = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
      fill: e6
    }
  )
));
var e9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
      fill: e6
    }
  )
));
var t9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
      fill: e6
    }
  )
));
var r9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e6
    }
  )
));
var n9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var o9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
      fill: e6
    }
  )
));
var a9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
      fill: e6
    }
  )
));
var i9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
      fill: e6
    }
  )
));
var l9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
      fill: e6
    }
  )
));
var s9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
      fill: e6
    }
  )
));
var u9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
      fill: e6
    }
  )
));
var c9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
      fill: e6
    }
  )
));
var p9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
      fill: e6
    }
  )
));
var d9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
      fill: e6
    }
  )
));
var f9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
      fill: e6
    }
  )
));
var h9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
      fill: e6
    }
  )
));
var m9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
      fill: e6
    }
  )
));
var g9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
      fill: e6
    }
  )
));
var v9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M14 7A7 7 0 110 7a7 7 0 0114 0z", fill: e6 })
));
var b9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
      fill: e6
    }
  )
));
var w9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
      fill: e6
    }
  )
));
var y9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1449_588)" }, s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
      fill: e6
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1449_588" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var D9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
      fill: e6
    }
  )
));
var x9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
      fill: e6
    }
  )
));
var C9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
      fill: e6
    }
  )
));
var E9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
      fill: e6
    }
  )
));
var S9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
      fill: e6
    }
  )
));
var R9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var A9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e6
    }
  )
));
var F9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
      fill: e6
    }
  )
));
var k9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
      fill: e6
    }
  )
));
var T9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
      fill: e6
    }
  )
));
var L9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
      fill: e6
    }
  )
));
var B9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
      fill: e6
    }
  )
));
var I9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
      fill: e6
    }
  )
));
var M9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
      fill: e6
    }
  )
));
var _9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
      fill: e6
    }
  )
));
var $9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var H9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
      fill: e6
    }
  )
));
var P9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
      fill: e6
    }
  )
));
var ku = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
      fill: e6
    }
  )
));
var z9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
      fill: e6
    }
  )
));
var O9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
      fill: e6
    }
  )
));
var N9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
      fill: e6
    }
  )
));
var j9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
      fill: e6
    }
  )
));
var V9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
      fill: e6
    }
  )
));
var q9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
      fill: e6
    }
  )
));
var W9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var U9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
      fill: e6
    }
  )
));
var G9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
      fill: e6
    }
  )
));
var X9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
      fill: e6
    }
  )
));
var Y9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
      fill: e6
    }
  )
));
var K9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
      fill: e6
    }
  )
));
var Z9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var J9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
      fill: e6
    }
  )
));
var Q9 = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
      fill: e6
    }
  )
));
var eD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
      fill: e6
    }
  )
));
var tD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
      fill: e6
    }
  )
));
var rD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
      fill: e6
    }
  )
));
var nD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
      fill: e6
    }
  )
));
var oD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
      fill: e6
    }
  )
));
var aD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
      fill: e6
    }
  )
));
var iD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var lD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
      fill: e6
    }
  )
));
var sD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
      fill: e6
    }
  )
));
var uD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
      fill: e6
    }
  )
));
var cD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
      fill: e6
    }
  )
));
var pD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
      fill: e6
    }
  )
));
var dD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var fD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
      fill: e6
    }
  )
));
var hD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
      fill: e6
    }
  )
));
var mD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e6
    }
  )
));
var gD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
      fill: e6
    }
  )
));
var vD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
      fill: e6
    }
  )
));
var bD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
      fill: e6
    }
  )
));
var wD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
      fill: e6
    }
  )
));
var yD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement("g", { clipPath: "url(#prefix__clip0_1107_3594)" }, s.createElement(
    "path",
    {
      d: "M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z",
      stroke: e6,
      strokeWidth: 1.077
    }
  )),
  s.createElement("defs", null, s.createElement("clipPath", { id: "prefix__clip0_1107_3594" }, s.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
));
var DD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
      fill: e6
    }
  )
));
var xD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
      fill: e6
    }
  )
));
var CD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
      fill: e6
    }
  )
));
var ED = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
      fill: e6
    }
  )
));
var SD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
      fill: e6
    }
  )
));
var RD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var AD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var FD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e6
    }
  ),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e6
    }
  )
));
var kD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
      fill: e6
    }
  ),
  s.createElement("path", { d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z", fill: e6 }),
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e6
    }
  )
));
var TD = s.forwardRef(({ color: e6 = "currentColor", size: t = 14, ...r }, n) => s.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 15 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  s.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
      fill: e6
    }
  )
));
var LD = 0;
var BD = a2((e6) => e6.button === LD && !e6.altKey && !e6.ctrlKey && !e6.metaKey && !e6.shiftKey, "isPlainLeftClick");
var ID = a2(
  (e6, t) => {
    BD(e6) && (e6.preventDefault(), t(e6));
  },
  "cancelled"
);
var MD = Tr.span(
  ({ withArrow: e6 }) => e6 ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon: e6 }) => e6 ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
);
var _D = Tr.a(
  ({ theme: e6 }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: e6.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: Ut2(0.07, e6.color.secondary),
      "svg path:not([fill])": {
        fill: Ut2(0.07, e6.color.secondary)
      }
    },
    "&:active": {
      color: Ut2(0.1, e6.color.secondary),
      "svg path:not([fill])": {
        fill: Ut2(0.1, e6.color.secondary)
      }
    },
    svg: {
      display: "inline-block",
      height: "1em",
      width: "1em",
      verticalAlign: "text-top",
      position: "relative",
      bottom: "-0.125em",
      marginRight: "0.4em",
      "& path": {
        fill: e6.color.secondary
      }
    }
  }),
  ({ theme: e6, secondary: t, tertiary: r }) => {
    let n;
    return t && (n = [e6.textMutedColor, e6.color.dark, e6.color.darker]), r && (n = [e6.color.dark, e6.color.darkest, e6.textMutedColor]), n ? {
      color: n[0],
      "svg path:not([fill])": {
        fill: n[0]
      },
      "&:hover": {
        color: n[1],
        "svg path:not([fill])": {
          fill: n[1]
        }
      },
      "&:active": {
        color: n[2],
        "svg path:not([fill])": {
          fill: n[2]
        }
      }
    } : {};
  },
  ({ nochrome: e6 }) => e6 ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme: e6, inverse: t }) => t ? {
    color: e6.color.lightest,
    ":not([fill])": {
      fill: e6.color.lightest
    },
    "&:hover": {
      color: e6.color.lighter,
      "svg path:not([fill])": {
        fill: e6.color.lighter
      }
    },
    "&:active": {
      color: e6.color.light,
      "svg path:not([fill])": {
        fill: e6.color.light
      }
    }
  } : {},
  ({ isButton: e6 }) => e6 ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
);
var Bu = a2(({
  cancel: e6 = true,
  children: t,
  onClick: r = void 0,
  withArrow: n = false,
  containsIcon: o = false,
  className: i = void 0,
  style: l = void 0,
  ...u
}) => import_react24.default.createElement(
  _D,
  {
    ...u,
    onClick: r && e6 ? (c) => ID(c, r) : r,
    className: i
  },
  import_react24.default.createElement(MD, { withArrow: n, containsIcon: o }, t, n && import_react24.default.createElement(ku, null))
), "Link");
var HD = Tr.div(({ theme: e6 }) => ({
  fontSize: `${e6.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${e6.typography.size.l1}px`,
    fontWeight: e6.typography.weight.bold
  },
  h2: {
    fontSize: `${e6.typography.size.m2}px`,
    borderBottom: `1px solid ${e6.appBorderColor}`
  },
  h3: {
    fontSize: `${e6.typography.size.m1}px`
  },
  h4: {
    fontSize: `${e6.typography.size.s3}px`
  },
  h5: {
    fontSize: `${e6.typography.size.s2}px`
  },
  h6: {
    fontSize: `${e6.typography.size.s2}px`,
    color: e6.color.dark
  },
  "pre:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "pre pre, pre.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px"
  },
  "pre pre code, pre.prismjs code": {
    color: "inherit",
    fontSize: "inherit"
  },
  "pre code": {
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    border: "none",
    background: "transparent"
  },
  "pre code, pre tt": {
    backgroundColor: "transparent",
    border: "none"
  },
  /* GitHub inspired Markdown styles loosely from https://gist.github.com/tuzz/3331384 */
  "body > *:first-of-type": {
    marginTop: "0 !important"
  },
  "body > *:last-child": {
    marginBottom: "0 !important"
  },
  a: {
    color: e6.color.secondary,
    textDecoration: "none"
  },
  "a.absent": {
    color: "#cc0000"
  },
  "a.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "20px 0 10px",
    padding: 0,
    cursor: "text",
    position: "relative",
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0
    },
    "&:hover a.anchor": {
      textDecoration: "none"
    },
    "& tt, & code": {
      fontSize: "inherit"
    }
  },
  "h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "p, blockquote, ul, ol, dl, li, table, pre": {
    margin: "15px 0"
  },
  hr: {
    border: "0 none",
    borderTop: `1px solid ${e6.appBorderColor}`,
    height: 4,
    padding: 0
  },
  "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "body > h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
    marginTop: 0,
    paddingTop: 0
  },
  "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": {
    marginTop: 0
  },
  "li p.first": {
    display: "inline-block"
  },
  "ul, ol": {
    paddingLeft: 30,
    "& :first-of-type": {
      marginTop: 0
    },
    "& :last-child": {
      marginBottom: 0
    }
  },
  dl: {
    padding: 0
  },
  "dl dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: "0 0 15px",
    padding: "0 15px",
    "&:first-of-type": {
      padding: 0
    },
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  blockquote: {
    borderLeft: `4px solid ${e6.color.medium}`,
    padding: "0 15px",
    color: e6.color.dark,
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  table: {
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e6.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${e6.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${e6.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: e6.color.lighter
      },
      "& th :first-of-type, & td :first-of-type": {
        marginTop: 0
      },
      "& th :last-child, & td :last-child": {
        marginBottom: 0
      }
    }
  },
  img: {
    maxWidth: "100%"
  },
  "span.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e6.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e6.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "span.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "span.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  },
  "code, tt": {
    margin: "0 2px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    border: `1px solid ${e6.color.mediumlight}`,
    backgroundColor: e6.color.lighter,
    borderRadius: 3,
    color: e6.base === "dark" ? e6.color.darkest : e6.color.dark
  }
}));
var jr = [];
var Do = null;
var jF = (0, import_react25.lazy)(async () => {
  let { SyntaxHighlighter: e6 } = await Promise.resolve().then(() => (ia2(), iu));
  return jr.length > 0 && (jr.forEach((t) => {
    e6.registerLanguage(...t);
  }), jr = []), Do === null && (Do = e6), {
    default: a2((t) => import_react25.default.createElement(e6, { ...t }), "default")
  };
});
var VF = (0, import_react25.lazy)(async () => {
  let [{ SyntaxHighlighter: e6 }, { formatter: t }] = await Promise.all([
    Promise.resolve().then(() => (ia2(), iu)),
    Promise.resolve().then(() => (Im(), Bm))
  ]);
  return jr.length > 0 && (jr.forEach((r) => {
    e6.registerLanguage(...r);
  }), jr = []), Do === null && (Do = e6), {
    default: a2((r) => import_react25.default.createElement(e6, { ...r, formatter: t }), "default")
  };
});
var _m = a2((e6) => import_react25.default.createElement(import_react25.Suspense, { fallback: import_react25.default.createElement("div", null) }, e6.format !== false ? import_react25.default.createElement(VF, { ...e6 }) : import_react25.default.createElement(jF, { ...e6 })), "SyntaxHighlighter");
_m.registerLanguage = (...e6) => {
  if (Do !== null) {
    Do.registerLanguage(...e6);
    return;
  }
  jr.push(e6);
};
ia2();
Ys();
var yl = {};
on2(yl, {
  Close: () => f0,
  Content: () => c0,
  Description: () => d0,
  Dialog: () => xg,
  DialogClose: () => Ig,
  DialogContent: () => Fg,
  DialogDescription: () => Bg,
  DialogOverlay: () => Ag,
  DialogPortal: () => Rg,
  DialogTitle: () => Lg,
  DialogTrigger: () => Cg,
  Overlay: () => u0,
  Portal: () => s0,
  Root: () => l0,
  Title: () => p0,
  Trigger: () => oT,
  WarningProvider: () => nT,
  createDialogScope: () => Gk
});
Ue2();
fi();
Dr();
ru();
ui();
var qF = cl.useId || (() => {
});
var WF = 0;
function pl(e6) {
  let [t, r] = cl.useState(qF());
  return Cr2(() => {
    e6 || r(
      (n) => n ?? String(WF++)
    );
  }, [
    e6
  ]), e6 || (t ? `radix-${t}` : "");
}
a2(pl, "$1746a345f3d73bb7$export$f680877a34711e37");
hn2();
function $m({ prop: e6, defaultProp: t, onChange: r = a2(() => {
}, "onChange") }) {
  let [n, o] = KF({
    defaultProp: t,
    onChange: r
  }), i = e6 !== void 0, l = i ? e6 : n, u = le2(r), c = (0, import_react28.useCallback)((d) => {
    if (i) {
      let h = typeof d == "function" ? d(e6) : d;
      h !== e6 && u(h);
    } else o(d);
  }, [
    i,
    e6,
    o,
    u
  ]);
  return [
    l,
    c
  ];
}
a2($m, "$71cd76cc60e0454e$export$6f32135080cb4c3");
function KF({ defaultProp: e6, onChange: t }) {
  let r = (0, import_react28.useState)(e6), [n] = r, o = (0, import_react28.useRef)(n), i = le2(t);
  return (0, import_react28.useEffect)(() => {
    o.current !== n && (i(n), o.current = n);
  }, [
    n,
    o,
    i
  ]), r;
}
a2(KF, "$71cd76cc60e0454e$var$useUncontrolledState");
Ue2();
fi();
fn();
Dr();
hn2();
hn2();
function Hm(e6, t = globalThis == null ? void 0 : globalThis.document) {
  let r = le2(e6);
  (0, import_react30.useEffect)(() => {
    let n = a2((o) => {
      o.key === "Escape" && r(o);
    }, "handleKeyDown");
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
a2(Hm, "$addc16e1bbe58fd0$export$3a72a57244d6e765");
var Oc = "dismissableLayer.update";
var rk = "dismissableLayer.pointerDownOutside";
var nk = "dismissableLayer.focusOutside";
var zm;
var ok = (0, import_react29.createContext)(
  {
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }
);
var Nm = (0, import_react29.forwardRef)((e6, t) => {
  var r;
  let {
    disableOutsidePointerEvents: n = false,
    onEscapeKeyDown: o,
    onPointerDownOutside: i,
    onFocusOutside: l,
    onInteractOutside: u,
    onDismiss: c,
    ...d
  } = e6, p = (0, import_react29.useContext)(ok), [h, f] = (0, import_react29.useState)(null), g6 = (r = h == null ? void 0 : h.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, w4] = (0, import_react29.useState)({}), m = we2(
    t,
    (R) => f(R)
  ), v = Array.from(p.layers), [y] = [
    ...p.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = v.indexOf(y), D4 = h ? v.indexOf(h) : -1, x = p.layersWithOutsidePointerEventsDisabled.size > 0, C = D4 >= b, E = ak((R) => {
    let F6 = R.target, k6 = [
      ...p.branches
    ].some(
      (T) => T.contains(F6)
    );
    !C || k6 || (i == null ? void 0 : i(R), u == null ? void 0 : u(R), R.defaultPrevented || (c == null ? void 0 : c()));
  }, g6), S = ik((R) => {
    let F6 = R.target;
    [
      ...p.branches
    ].some(
      (T) => T.contains(F6)
    ) || (l == null ? void 0 : l(R), u == null ? void 0 : u(R), R.defaultPrevented || (c == null ? void 0 : c()));
  }, g6);
  return Hm((R) => {
    D4 === p.layers.size - 1 && (o == null ? void 0 : o(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }, g6), (0, import_react29.useEffect)(() => {
    if (h)
      return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (zm = g6.body.style.pointerEvents, g6.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), Om(), () => {
        n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (g6.body.style.pointerEvents = zm);
      };
  }, [
    h,
    g6,
    n,
    p
  ]), (0, import_react29.useEffect)(() => () => {
    h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), Om());
  }, [
    h,
    p
  ]), (0, import_react29.useEffect)(() => {
    let R = a2(() => w4({}), "handleUpdate");
    return document.addEventListener(Oc, R), () => document.removeEventListener(Oc, R);
  }, []), (0, import_react29.createElement)(pe2.div, I2({}, d, {
    ref: m,
    style: {
      pointerEvents: x ? C ? "auto" : "none" : void 0,
      ...e6.style
    },
    onFocusCapture: de2(e6.onFocusCapture, S.onFocusCapture),
    onBlurCapture: de2(e6.onBlurCapture, S.onBlurCapture),
    onPointerDownCapture: de2(e6.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function ak(e6, t = globalThis == null ? void 0 : globalThis.document) {
  let r = le2(e6), n = (0, import_react29.useRef)(false), o = (0, import_react29.useRef)(() => {
  });
  return (0, import_react29.useEffect)(() => {
    let i = a2((u) => {
      if (u.target && !n.current) {
        let d = function() {
          jm(rk, r, c, {
            discrete: true
          });
        };
        a2(d, "handleAndDispatchPointerDownOutsideEvent");
        let c = {
          originalEvent: u
        };
        u.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, {
          once: true
        })) : d();
      } else
        t.removeEventListener("click", o.current);
      n.current = false;
    }, "handlePointerDown"), l = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: a2(() => n.current = true, "onPointerDownCapture")
  };
}
a2(ak, "$5cb92bef7577960e$var$usePointerDownOutside");
function ik(e6, t = globalThis == null ? void 0 : globalThis.document) {
  let r = le2(e6), n = (0, import_react29.useRef)(false);
  return (0, import_react29.useEffect)(() => {
    let o = a2((i) => {
      i.target && !n.current && jm(nk, r, {
        originalEvent: i
      }, {
        discrete: false
      });
    }, "handleFocus");
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    r
  ]), {
    onFocusCapture: a2(() => n.current = true, "onFocusCapture"),
    onBlurCapture: a2(() => n.current = false, "onBlurCapture")
  };
}
a2(ik, "$5cb92bef7577960e$var$useFocusOutside");
function Om() {
  let e6 = new CustomEvent(Oc);
  document.dispatchEvent(e6);
}
a2(Om, "$5cb92bef7577960e$var$dispatchUpdate");
function jm(e6, t, r, { discrete: n }) {
  let o = r.originalEvent.target, i = new CustomEvent(e6, {
    bubbles: false,
    cancelable: true,
    detail: r
  });
  t && o.addEventListener(e6, t, {
    once: true
  }), n ? a5(o, i) : o.dispatchEvent(i);
}
a2(jm, "$5cb92bef7577960e$var$handleAndDispatchCustomEvent");
Ue2();
Dr();
fn();
hn2();
var Nc = "focusScope.autoFocusOnMount";
var jc = "focusScope.autoFocusOnUnmount";
var Wm = {
  bubbles: false,
  cancelable: true
};
var Ym = (0, import_react31.forwardRef)((e6, t) => {
  let { loop: r = false, trapped: n = false, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l } = e6, [u, c] = (0, import_react31.useState)(null), d = le2(o), p = le2(i), h = (0, import_react31.useRef)(
    null
  ), f = we2(
    t,
    (m) => c(m)
  ), g6 = (0, import_react31.useRef)({
    paused: false,
    pause() {
      this.paused = true;
    },
    resume() {
      this.paused = false;
    }
  }).current;
  (0, import_react31.useEffect)(() => {
    if (n) {
      let m = function(D4) {
        if (g6.paused || !u) return;
        let x = D4.target;
        u.contains(x) ? h.current = x : or2(h.current, {
          select: true
        });
      }, v = function(D4) {
        if (g6.paused || !u) return;
        let x = D4.relatedTarget;
        x !== null && (u.contains(x) || or2(h.current, {
          select: true
        }));
      }, y = function(D4) {
        if (document.activeElement === document.body)
          for (let C of D4) C.removedNodes.length > 0 && or2(u);
      };
      a2(m, "handleFocusIn"), a2(v, "handleFocusOut"), a2(y, "handleMutations"), document.addEventListener("focusin", m), document.addEventListener(
        "focusout",
        v
      );
      let b = new MutationObserver(y);
      return u && b.observe(u, {
        childList: true,
        subtree: true
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), b.disconnect();
      };
    }
  }, [
    n,
    u,
    g6.paused
  ]), (0, import_react31.useEffect)(() => {
    if (u) {
      Gm.add(g6);
      let m = document.activeElement;
      if (!u.contains(m)) {
        let y = new CustomEvent(Nc, Wm);
        u.addEventListener(Nc, d), u.dispatchEvent(y), y.defaultPrevented || (pk(gk(Km(u)), {
          select: true
        }), document.activeElement === m && or2(u));
      }
      return () => {
        u.removeEventListener(Nc, d), setTimeout(() => {
          let y = new CustomEvent(jc, Wm);
          u.addEventListener(jc, p), u.dispatchEvent(y), y.defaultPrevented || or2(m ?? document.body, {
            select: true
          }), u.removeEventListener(jc, p), Gm.remove(g6);
        }, 0);
      };
    }
  }, [
    u,
    d,
    p,
    g6
  ]);
  let w4 = (0, import_react31.useCallback)((m) => {
    if (!r && !n || g6.paused) return;
    let v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, y = document.activeElement;
    if (v && y) {
      let b = m.currentTarget, [D4, x] = dk(b);
      D4 && x ? !m.shiftKey && y === x ? (m.preventDefault(), r && or2(D4, {
        select: true
      })) : m.shiftKey && y === D4 && (m.preventDefault(), r && or2(x, {
        select: true
      })) : y === b && m.preventDefault();
    }
  }, [
    r,
    n,
    g6.paused
  ]);
  return (0, import_react31.createElement)(pe2.div, I2({
    tabIndex: -1
  }, l, {
    ref: f,
    onKeyDown: w4
  }));
});
function pk(e6, { select: t = false } = {}) {
  let r = document.activeElement;
  for (let n of e6)
    if (or2(n, {
      select: t
    }), document.activeElement !== r) return;
}
a2(pk, "$d3863c46a17e8a28$var$focusFirst");
function dk(e6) {
  let t = Km(e6), r = Um(t, e6), n = Um(t.reverse(), e6);
  return [
    r,
    n
  ];
}
a2(dk, "$d3863c46a17e8a28$var$getTabbableEdges");
function Km(e6) {
  let t = [], r = document.createTreeWalker(e6, NodeFilter.SHOW_ELEMENT, {
    acceptNode: a2((n) => {
      let o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
a2(Km, "$d3863c46a17e8a28$var$getTabbableCandidates");
function Um(e6, t) {
  for (let r of e6)
    if (!fk(r, {
      upTo: t
    })) return r;
}
a2(Um, "$d3863c46a17e8a28$var$findVisible");
function fk(e6, { upTo: t }) {
  if (getComputedStyle(e6).visibility === "hidden") return true;
  for (; e6; ) {
    if (t !== void 0 && e6 === t) return false;
    if (getComputedStyle(e6).display === "none") return true;
    e6 = e6.parentElement;
  }
  return false;
}
a2(fk, "$d3863c46a17e8a28$var$isHidden");
function hk(e6) {
  return e6 instanceof HTMLInputElement && "select" in e6;
}
a2(hk, "$d3863c46a17e8a28$var$isSelectableInput");
function or2(e6, { select: t = false } = {}) {
  if (e6 && e6.focus) {
    let r = document.activeElement;
    e6.focus({
      preventScroll: true
    }), e6 !== r && hk(e6) && t && e6.select();
  }
}
a2(or2, "$d3863c46a17e8a28$var$focus");
var Gm = mk();
function mk() {
  let e6 = [];
  return {
    add(t) {
      let r = e6[0];
      t !== r && (r == null ? void 0 : r.pause()), e6 = Xm(e6, t), e6.unshift(t);
    },
    remove(t) {
      var r;
      e6 = Xm(e6, t), (r = e6[0]) === null || r === void 0 || r.resume();
    }
  };
}
a2(mk, "$d3863c46a17e8a28$var$createFocusScopesStack");
function Xm(e6, t) {
  let r = [
    ...e6
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
a2(Xm, "$d3863c46a17e8a28$var$arrayRemove");
function gk(e6) {
  return e6.filter(
    (t) => t.tagName !== "A"
  );
}
a2(gk, "$d3863c46a17e8a28$var$removeLinks");
Ue2();
fn();
var Zm = (0, import_react32.forwardRef)((e6, t) => {
  var r;
  let { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...o } = e6;
  return n ? import_react_dom4.default.createPortal((0, import_react32.createElement)(pe2.div, I2({}, o, {
    ref: t
  })), n) : null;
});
eu();
fn();
var Vc = 0;
function Qm() {
  (0, import_react33.useEffect)(() => {
    var e6, t;
    let r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e6 = r[0]) !== null && e6 !== void 0 ? e6 : Jm()), document.body.insertAdjacentElement(
      "beforeend",
      (t = r[1]) !== null && t !== void 0 ? t : Jm()
    ), Vc++, () => {
      Vc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Vc--;
    };
  }, []);
}
a2(Qm, "$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c");
function Jm() {
  let e6 = document.createElement("span");
  return e6.setAttribute("data-radix-focus-guard", ""), e6.tabIndex = 0, e6.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e6;
}
a2(Jm, "$3db38b7d1fb3fe6a$var$createFocusGuard");
var Oe2 = a2(function() {
  return Oe2 = Object.assign || a2(function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, "__assign"), Oe2.apply(this, arguments);
}, "__assign");
function dl(e6, t) {
  var r = {};
  for (var n in e6) Object.prototype.hasOwnProperty.call(e6, n) && t.indexOf(n) < 0 && (r[n] = e6[n]);
  if (e6 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e6); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, n[o]) && (r[n[o]] = e6[n[o]]);
  return r;
}
a2(dl, "__rest");
function eg(e6, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e6.concat(i || Array.prototype.slice.call(t));
}
a2(eg, "__spreadArray");
var Vr2 = "right-scroll-bar-position";
var qr2 = "width-before-scroll-bar";
var qc = "with-scroll-bars-hidden";
var Wc = "--removed-body-scroll-bar-size";
function fl(e6, t) {
  return typeof e6 == "function" ? e6(t) : e6 && (e6.current = t), e6;
}
a2(fl, "assignRef");
function tg(e6, t) {
  var r = (0, import_react34.useState)(function() {
    return {
      // value
      value: e6,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
a2(tg, "useCallbackRef");
var rg = /* @__PURE__ */ new WeakMap();
function Uc(e6, t) {
  var r = tg(t || null, function(n) {
    return e6.forEach(function(o) {
      return fl(o, n);
    });
  });
  return ng.useLayoutEffect(function() {
    var n = rg.get(r);
    if (n) {
      var o = new Set(n), i = new Set(e6), l = r.current;
      o.forEach(function(u) {
        i.has(u) || fl(u, null);
      }), i.forEach(function(u) {
        o.has(u) || fl(u, l);
      });
    }
    rg.set(r, e6);
  }, [e6]), r;
}
a2(Uc, "useMergeRefs");
function xk(e6) {
  return e6;
}
a2(xk, "ItoI");
function Ck(e6, t) {
  t === void 0 && (t = xk);
  var r = [], n = false, o = {
    read: a2(function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e6;
    }, "read"),
    useMedium: a2(function(i) {
      var l = t(i, n);
      return r.push(l), function() {
        r = r.filter(function(u) {
          return u !== l;
        });
      };
    }, "useMedium"),
    assignSyncMedium: a2(function(i) {
      for (n = true; r.length; ) {
        var l = r;
        r = [], l.forEach(i);
      }
      r = {
        push: a2(function(u) {
          return i(u);
        }, "push"),
        filter: a2(function() {
          return r;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: a2(function(i) {
      n = true;
      var l = [];
      if (r.length) {
        var u = r;
        r = [], u.forEach(i), l = r;
      }
      var c = a2(function() {
        var p = l;
        l = [], p.forEach(i);
      }, "executeQueue"), d = a2(function() {
        return Promise.resolve().then(c);
      }, "cycle");
      d(), r = {
        push: a2(function(p) {
          l.push(p), d();
        }, "push"),
        filter: a2(function(p) {
          return l = l.filter(p), r;
        }, "filter")
      };
    }, "assignMedium")
  };
  return o;
}
a2(Ck, "innerCreateMedium");
function Gc(e6) {
  e6 === void 0 && (e6 = {});
  var t = Ck(null);
  return t.options = Oe2({ async: true, ssr: false }, e6), t;
}
a2(Gc, "createSidecarMedium");
var ag = a2(function(e6) {
  var t = e6.sideCar, r = dl(e6, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return og.createElement(n, Oe2({}, r));
}, "SideCar");
ag.isSideCarExport = true;
function Xc(e6, t) {
  return e6.useMedium(t), ag;
}
a2(Xc, "exportSidecar");
var hl = Gc();
var Yc = a2(function() {
}, "nothing");
var Ta2 = Fe2.forwardRef(function(e6, t) {
  var r = Fe2.useRef(null), n = Fe2.useState({
    onScrollCapture: Yc,
    onWheelCapture: Yc,
    onTouchMoveCapture: Yc
  }), o = n[0], i = n[1], l = e6.forwardProps, u = e6.children, c = e6.className, d = e6.removeScrollBar, p = e6.enabled, h = e6.shards, f = e6.sideCar, g6 = e6.noIsolation, w4 = e6.inert, m = e6.allowPinchZoom, v = e6.as, y = v === void 0 ? "div" : v, b = dl(e6, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), D4 = f, x = Uc([r, t]), C = Oe2(Oe2(
    {},
    b
  ), o);
  return Fe2.createElement(
    Fe2.Fragment,
    null,
    p && Fe2.createElement(D4, { sideCar: hl, removeScrollBar: d, shards: h, noIsolation: g6, inert: w4, setCallbacks: i, allowPinchZoom: !!m, lockRef: r }),
    l ? Fe2.cloneElement(Fe2.Children.only(u), Oe2(Oe2({}, C), { ref: x })) : Fe2.createElement(y, Oe2({}, C, { className: c, ref: x }), u)
  );
});
Ta2.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
Ta2.classNames = {
  fullWidth: qr2,
  zeroRight: Vr2
};
var ig;
var lg = a2(function() {
  if (ig)
    return ig;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
}, "getNonce");
function Ek() {
  if (!document)
    return null;
  var e6 = document.createElement("style");
  e6.type = "text/css";
  var t = lg();
  return t && e6.setAttribute("nonce", t), e6;
}
a2(Ek, "makeStyleTag");
function Sk(e6, t) {
  e6.styleSheet ? e6.styleSheet.cssText = t : e6.appendChild(document.createTextNode(t));
}
a2(Sk, "injectStyles");
function Rk(e6) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e6);
}
a2(Rk, "insertStyleTag");
var Kc = a2(function() {
  var e6 = 0, t = null;
  return {
    add: a2(function(r) {
      e6 == 0 && (t = Ek()) && (Sk(t, r), Rk(t)), e6++;
    }, "add"),
    remove: a2(function() {
      e6--, !e6 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }, "remove")
  };
}, "stylesheetSingleton");
var Zc = a2(function() {
  var e6 = Kc();
  return function(t, r) {
    sg.useEffect(function() {
      return e6.add(t), function() {
        e6.remove();
      };
    }, [t && r]);
  };
}, "styleHookSingleton");
var La2 = a2(function() {
  var e6 = Zc(), t = a2(function(r) {
    var n = r.styles, o = r.dynamic;
    return e6(n, o), null;
  }, "Sheet");
  return t;
}, "styleSingleton");
var Ak = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var Jc = a2(function(e6) {
  return parseInt(e6 || "", 10) || 0;
}, "parse");
var Fk = a2(function(e6) {
  var t = window.getComputedStyle(document.body), r = t[e6 === "padding" ? "paddingLeft" : "marginLeft"], n = t[e6 === "padding" ? "paddingTop" : "marginTop"], o = t[e6 === "padding" ? "paddingRight" : "marginRight"];
  return [Jc(r), Jc(n), Jc(o)];
}, "getOffset");
var Qc = a2(function(e6) {
  if (e6 === void 0 && (e6 = "margin"), typeof window > "u")
    return Ak;
  var t = Fk(e6), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, "getGapWidth");
var kk = La2();
var ml = "data-scroll-locked";
var Tk = a2(function(e6, t, r, n) {
  var o = e6.left, i = e6.top, l = e6.right, u = e6.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(qc, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(u, "px ").concat(n, `;
  }
  body[`).concat(ml, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(u, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Vr2, ` {
    right: `).concat(u, "px ").concat(n, `;
  }
  
  .`).concat(qr2, ` {
    margin-right: `).concat(u, "px ").concat(n, `;
  }
  
  .`).concat(Vr2, " .").concat(Vr2, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(qr2, " .").concat(qr2, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(ml, `] {
    `).concat(Wc, ": ").concat(u, `px;
  }
`);
}, "getStyles");
var e0 = a2(function(e6) {
  var t = e6.noRelative, r = e6.noImportant, n = e6.gapMode, o = n === void 0 ? "margin" : n, i = xo2.useMemo(function() {
    return Qc(o);
  }, [o]);
  return xo2.useEffect(function() {
    return document.body.setAttribute(ml, ""), function() {
      document.body.removeAttribute(ml);
    };
  }, []), xo2.createElement(kk, { styles: Tk(i, !t, o, r ? "" : "!important") });
}, "RemoveScrollBar");
var t0 = false;
if (typeof window < "u")
  try {
    Ba2 = Object.defineProperty({}, "passive", {
      get: a2(function() {
        return t0 = true, true;
      }, "get")
    }), window.addEventListener("test", Ba2, Ba2), window.removeEventListener("test", Ba2, Ba2);
  } catch {
    t0 = false;
  }
var Ba2;
var Wr2 = t0 ? { passive: false } : false;
var Lk = a2(function(e6) {
  return e6.tagName === "TEXTAREA";
}, "alwaysContainsScroll");
var ug = a2(function(e6, t) {
  var r = window.getComputedStyle(e6);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Lk(e6) && r[t] === "visible")
  );
}, "elementCanBeScrolled");
var Bk = a2(function(e6) {
  return ug(e6, "overflowY");
}, "elementCouldBeVScrolled");
var Ik = a2(function(e6) {
  return ug(e6, "overflowX");
}, "elementCouldBeHScrolled");
var r0 = a2(function(e6, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = cg(e6, r);
    if (n) {
      var o = pg(e6, r), i = o[1], l = o[2];
      if (i > l)
        return true;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return false;
}, "locationCouldBeScrolled");
var Mk = a2(function(e6) {
  var t = e6.scrollTop, r = e6.scrollHeight, n = e6.clientHeight;
  return [
    t,
    r,
    n
  ];
}, "getVScrollVariables");
var _k = a2(function(e6) {
  var t = e6.scrollLeft, r = e6.scrollWidth, n = e6.clientWidth;
  return [
    t,
    r,
    n
  ];
}, "getHScrollVariables");
var cg = a2(function(e6, t) {
  return e6 === "v" ? Bk(t) : Ik(t);
}, "elementCouldBeScrolled");
var pg = a2(function(e6, t) {
  return e6 === "v" ? Mk(t) : _k(t);
}, "getScrollVariables");
var $k = a2(function(e6, t) {
  return e6 === "h" && t === "rtl" ? -1 : 1;
}, "getDirectionFactor");
var dg = a2(function(e6, t, r, n, o) {
  var i = $k(e6, window.getComputedStyle(t).direction), l = i * n, u = r.target, c = t.contains(u), d = false, p = l > 0, h = 0, f = 0;
  do {
    var g6 = pg(e6, u), w4 = g6[0], m = g6[1], v = g6[2], y = m - v - i * w4;
    (w4 || y) && cg(e6, u) && (h += y, f += w4), u = u.parentNode;
  } while (
    // portaled content
    !c && u !== document.body || // self content
    c && (t.contains(u) || t === u)
  );
  return (p && (o && h === 0 || !o && l > h) || !p && (o && f === 0 || !o && -l > f)) && (d = true), d;
}, "handleScroll");
var gl = a2(function(e6) {
  return "changedTouches" in e6 ? [e6.changedTouches[0].clientX, e6.changedTouches[0].clientY] : [0, 0];
}, "getTouchXY");
var fg = a2(function(e6) {
  return [e6.deltaX, e6.deltaY];
}, "getDeltaXY");
var hg = a2(function(e6) {
  return e6 && "current" in e6 ? e6.current : e6;
}, "extractRef");
var Hk = a2(function(e6, t) {
  return e6[0] === t[0] && e6[1] === t[1];
}, "deltaCompare");
var Pk = a2(function(e6) {
  return `
  .block-interactivity-`.concat(e6, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e6, ` {pointer-events: all;}
`);
}, "generateStyle");
var zk = 0;
var Co2 = [];
function mg(e6) {
  var t = Z2.useRef([]), r = Z2.useRef([0, 0]), n = Z2.useRef(), o = Z2.useState(zk++)[0], i = Z2.useState(function() {
    return La2();
  })[0], l = Z2.useRef(e6);
  Z2.useEffect(function() {
    l.current = e6;
  }, [e6]), Z2.useEffect(function() {
    if (e6.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = eg([e6.lockRef.current], (e6.shards || []).map(hg), true).filter(Boolean);
      return m.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e6.inert, e6.lockRef.current, e6.shards]);
  var u = Z2.useCallback(function(m, v) {
    if ("touches" in m && m.touches.length === 2)
      return !l.current.allowPinchZoom;
    var y = gl(m), b = r.current, D4 = "deltaX" in m ? m.deltaX : b[0] - y[0], x = "deltaY" in m ? m.deltaY : b[1] - y[1], C, E = m.target, S = Math.abs(D4) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && S === "h" && E.type === "range")
      return false;
    var R = r0(S, E);
    if (!R)
      return true;
    if (R ? C = S : (C = S === "v" ? "h" : "v", R = r0(S, E)), !R)
      return false;
    if (!n.current && "changedTouches" in m && (D4 || x) && (n.current = C), !C)
      return true;
    var F6 = n.current || C;
    return dg(F6, v, m, F6 === "h" ? D4 : x, true);
  }, []), c = Z2.useCallback(function(m) {
    var v = m;
    if (!(!Co2.length || Co2[Co2.length - 1] !== i)) {
      var y = "deltaY" in v ? fg(v) : gl(v), b = t.current.filter(function(C) {
        return C.name === v.type && C.target === v.target && Hk(C.delta, y);
      })[0];
      if (b && b.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!b) {
        var D4 = (l.current.shards || []).map(hg).filter(Boolean).filter(function(C) {
          return C.contains(v.target);
        }), x = D4.length > 0 ? u(v, D4[0]) : !l.current.noIsolation;
        x && v.cancelable && v.preventDefault();
      }
    }
  }, []), d = Z2.useCallback(function(m, v, y, b) {
    var D4 = { name: m, delta: v, target: y, should: b };
    t.current.push(D4), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== D4;
      });
    }, 1);
  }, []), p = Z2.useCallback(function(m) {
    r.current = gl(m), n.current = void 0;
  }, []), h = Z2.useCallback(function(m) {
    d(m.type, fg(m), m.target, u(m, e6.lockRef.current));
  }, []), f = Z2.useCallback(function(m) {
    d(m.type, gl(m), m.target, u(m, e6.lockRef.current));
  }, []);
  Z2.useEffect(function() {
    return Co2.push(i), e6.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, Wr2), document.addEventListener("touchmove", c, Wr2), document.addEventListener(
      "touchstart",
      p,
      Wr2
    ), function() {
      Co2 = Co2.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", c, Wr2), document.removeEventListener("touchmove", c, Wr2), document.removeEventListener("touchstart", p, Wr2);
    };
  }, []);
  var g6 = e6.removeScrollBar, w4 = e6.inert;
  return Z2.createElement(
    Z2.Fragment,
    null,
    w4 ? Z2.createElement(i, { styles: Pk(o) }) : null,
    g6 ? Z2.createElement(e0, { gapMode: "margin" }) : null
  );
}
a2(mg, "RemoveScrollSideCar");
var gg = Xc(hl, mg);
var vg = vl.forwardRef(function(e6, t) {
  return vl.createElement(Ta2, Oe2({}, e6, { ref: t, sideCar: gg }));
});
vg.classNames = Ta2.classNames;
var n0 = vg;
var Ok = a2(function(e6) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e6) ? e6[0] : e6;
  return t.ownerDocument.body;
}, "getDefaultParent");
var Eo2 = /* @__PURE__ */ new WeakMap();
var bl = /* @__PURE__ */ new WeakMap();
var wl = {};
var o0 = 0;
var bg = a2(function(e6) {
  return e6 && (e6.host || bg(e6.parentNode));
}, "unwrapHost");
var Nk = a2(function(e6, t) {
  return t.map(function(r) {
    if (e6.contains(r))
      return r;
    var n = bg(r);
    return n && e6.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e6, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, "correctTargets");
var jk = a2(function(e6, t, r, n) {
  var o = Nk(t, Array.isArray(e6) ? e6 : [e6]);
  wl[r] || (wl[r] = /* @__PURE__ */ new WeakMap());
  var i = wl[r], l = [], u = /* @__PURE__ */ new Set(), c = new Set(o), d = a2(function(h) {
    !h || u.has(h) || (u.add(h), d(h.parentNode));
  }, "keep");
  o.forEach(d);
  var p = a2(function(h) {
    !h || c.has(h) || Array.prototype.forEach.call(h.children, function(f) {
      if (u.has(f))
        p(f);
      else {
        var g6 = f.getAttribute(n), w4 = g6 !== null && g6 !== "false", m = (Eo2.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
        Eo2.set(f, m), i.set(f, v), l.push(f), m === 1 && w4 && bl.set(f, true), v === 1 && f.setAttribute(r, "true"), w4 || f.setAttribute(n, "true");
      }
    });
  }, "deep");
  return p(t), u.clear(), o0++, function() {
    l.forEach(function(h) {
      var f = Eo2.get(h) - 1, g6 = i.get(h) - 1;
      Eo2.set(h, f), i.set(h, g6), f || (bl.has(h) || h.removeAttribute(n), bl.delete(h)), g6 || h.removeAttribute(r);
    }), o0--, o0 || (Eo2 = /* @__PURE__ */ new WeakMap(), Eo2 = /* @__PURE__ */ new WeakMap(), bl = /* @__PURE__ */ new WeakMap(), wl = {});
  };
}, "applyAttributeToOthers");
var wg = a2(function(e6, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e6) ? e6 : [e6]), o = t || Ok(e6);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), jk(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, "hideOthers");
si();
var yg = "Dialog";
var [Dg, Gk] = di(yg);
var [Xk, st2] = Dg(yg);
var xg = a2((e6) => {
  let { __scopeDialog: t, children: r, open: n, defaultOpen: o, onOpenChange: i, modal: l = true } = e6, u = (0, import_react27.useRef)(null), c = (0, import_react27.useRef)(null), [d = false, p] = $m(
    {
      prop: n,
      defaultProp: o,
      onChange: i
    }
  );
  return (0, import_react27.createElement)(Xk, {
    scope: t,
    triggerRef: u,
    contentRef: c,
    contentId: pl(),
    titleId: pl(),
    descriptionId: pl(),
    open: d,
    onOpenChange: p,
    onOpenToggle: (0, import_react27.useCallback)(
      () => p(
        (h) => !h
      ),
      [
        p
      ]
    ),
    modal: l
  }, r);
}, "$5d3850c4d0b4e6c7$export$3ddf2d174ce01153");
var Yk = "DialogTrigger";
var Cg = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, ...n } = e6, o = st2(Yk, r), i = we2(t, o.triggerRef);
  return (0, import_react27.createElement)(pe2.button, I2({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": i0(o.open)
  }, n, {
    ref: i,
    onClick: de2(e6.onClick, o.onOpenToggle)
  }));
});
var Eg = "DialogPortal";
var [Kk, Sg] = Dg(Eg, {
  forceMount: void 0
});
var Rg = a2((e6) => {
  let { __scopeDialog: t, forceMount: r, children: n, container: o } = e6, i = st2(Eg, t);
  return (0, import_react27.createElement)(Kk, {
    scope: t,
    forceMount: r
  }, import_react27.Children.map(
    n,
    (l) => (0, import_react27.createElement)(vt2, {
      present: r || i.open
    }, (0, import_react27.createElement)(Zm, {
      asChild: true,
      container: o
    }, l))
  ));
}, "$5d3850c4d0b4e6c7$export$dad7c95542bacce0");
var a0 = "DialogOverlay";
var Ag = (0, import_react27.forwardRef)((e6, t) => {
  let r = Sg(a0, e6.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e6, i = st2(a0, e6.__scopeDialog);
  return i.modal ? (0, import_react27.createElement)(vt2, {
    present: n || i.open
  }, (0, import_react27.createElement)(Zk, I2({}, o, {
    ref: t
  }))) : null;
});
var Zk = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, ...n } = e6, o = st2(a0, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    (0, import_react27.createElement)(n0, {
      as: xr2,
      allowPinchZoom: true,
      shards: [
        o.contentRef
      ]
    }, (0, import_react27.createElement)(pe2.div, I2({
      "data-state": i0(o.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
});
var Ro2 = "DialogContent";
var Fg = (0, import_react27.forwardRef)((e6, t) => {
  let r = Sg(Ro2, e6.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e6, i = st2(Ro2, e6.__scopeDialog);
  return (0, import_react27.createElement)(vt2, {
    present: n || i.open
  }, i.modal ? (0, import_react27.createElement)(Jk, I2({}, o, {
    ref: t
  })) : (0, import_react27.createElement)(Qk, I2({}, o, {
    ref: t
  })));
});
var Jk = (0, import_react27.forwardRef)((e6, t) => {
  let r = st2(Ro2, e6.__scopeDialog), n = (0, import_react27.useRef)(null), o = we2(t, r.contentRef, n);
  return (0, import_react27.useEffect)(() => {
    let i = n.current;
    if (i) return wg(i);
  }, []), (0, import_react27.createElement)(kg, I2({}, e6, {
    ref: o,
    trapFocus: r.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: de2(e6.onCloseAutoFocus, (i) => {
      var l;
      i.preventDefault(), (l = r.triggerRef.current) === null || l === void 0 || l.focus();
    }),
    onPointerDownOutside: de2(e6.onPointerDownOutside, (i) => {
      let l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === true;
      (l.button === 2 || u) && i.preventDefault();
    }),
    onFocusOutside: de2(
      e6.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
});
var Qk = (0, import_react27.forwardRef)((e6, t) => {
  let r = st2(Ro2, e6.__scopeDialog), n = (0, import_react27.useRef)(false), o = (0, import_react27.useRef)(false);
  return (0, import_react27.createElement)(kg, I2({}, e6, {
    ref: t,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: a2((i) => {
      var l;
      if ((l = e6.onCloseAutoFocus) === null || l === void 0 || l.call(e6, i), !i.defaultPrevented) {
        var u;
        n.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus(), i.preventDefault();
      }
      n.current = false, o.current = false;
    }, "onCloseAutoFocus"),
    onInteractOutside: a2((i) => {
      var l, u;
      (l = e6.onInteractOutside) === null || l === void 0 || l.call(e6, i), i.defaultPrevented || (n.current = true, i.detail.originalEvent.type === "pointerdown" && (o.current = true));
      let c = i.target;
      ((u = r.triggerRef.current) === null || u === void 0 ? void 0 : u.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
    }, "onInteractOutside")
  }));
});
var kg = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e6, u = st2(Ro2, r), c = (0, import_react27.useRef)(null), d = we2(t, c);
  return Qm(), (0, import_react27.createElement)(import_react27.Fragment, null, (0, import_react27.createElement)(Ym, {
    asChild: true,
    loop: true,
    trapped: n,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i
  }, (0, import_react27.createElement)(Nm, I2({
    role: "dialog",
    id: u.contentId,
    "aria-describedby": u.descriptionId,
    "aria-labelledby": u.titleId,
    "data-state": i0(u.open)
  }, l, {
    ref: d,
    onDismiss: a2(() => u.onOpenChange(false), "onDismiss")
  }))), false);
});
var Tg = "DialogTitle";
var Lg = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, ...n } = e6, o = st2(Tg, r);
  return (0, import_react27.createElement)(pe2.h2, I2({
    id: o.titleId
  }, n, {
    ref: t
  }));
});
var eT = "DialogDescription";
var Bg = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, ...n } = e6, o = st2(eT, r);
  return (0, import_react27.createElement)(pe2.p, I2({
    id: o.descriptionId
  }, n, {
    ref: t
  }));
});
var tT = "DialogClose";
var Ig = (0, import_react27.forwardRef)((e6, t) => {
  let { __scopeDialog: r, ...n } = e6, o = st2(tT, r);
  return (0, import_react27.createElement)(pe2.button, I2({
    type: "button"
  }, n, {
    ref: t,
    onClick: de2(
      e6.onClick,
      () => o.onOpenChange(false)
    )
  }));
});
function i0(e6) {
  return e6 ? "open" : "closed";
}
a2(i0, "$5d3850c4d0b4e6c7$var$getState");
var rT = "DialogTitleWarning";
var [nT, jV] = s5(rT, {
  contentName: Ro2,
  titleName: Tg,
  docsSlug: "dialog"
});
var l0 = xg;
var oT = Cg;
var s0 = Rg;
var u0 = Ag;
var c0 = Fg;
var p0 = Lg;
var d0 = Bg;
var f0 = Ig;
var v0 = {};
on2(v0, {
  Actions: () => yT,
  CloseButton: () => $g,
  Col: () => Pg,
  Container: () => g0,
  Content: () => gT,
  Description: () => wT,
  Error: () => DT,
  ErrorWrapper: () => zg,
  Header: () => vT,
  Overlay: () => m0,
  Row: () => Hg,
  Title: () => bT
});
si();
var Ao2 = (0, import_react37.forwardRef)(
  ({
    asChild: e6 = false,
    animation: t = "none",
    size: r = "small",
    variant: n = "outline",
    padding: o = "medium",
    disabled: i = false,
    active: l = false,
    onClick: u,
    ...c
  }, d) => {
    let p = "button";
    c.isLink && (p = "a"), e6 && (p = xr2);
    let h = n, f = r, [g6, w4] = (0, import_react37.useState)(false), m = a2((v) => {
      u && u(v), t !== "none" && w4(true);
    }, "handleClick");
    if ((0, import_react37.useEffect)(() => {
      let v = setTimeout(() => {
        g6 && w4(false);
      }, 1e3);
      return () => clearTimeout(v);
    }, [g6]), c.primary && (h = "solid", f = "medium"), (c.secondary || c.tertiary || c.gray || c.outline || c.inForm) && (h = "outline", f = "medium"), c.small || c.isLink || c.primary || c.secondary || c.tertiary || c.gray || c.outline || c.inForm || c.containsIcon) {
      let v = import_react37.default.Children.toArray(c.children).filter(
        (y) => typeof y == "string" && y !== ""
      );
      (0, import_client_logger4.deprecate)(
        `Use of deprecated props in the button ${v.length > 0 ? `"${v.join(" ")}"` : "component"} detected, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-ui-and-props-for-button-and-iconbutton-components`
      );
    }
    return import_react37.default.createElement(
      pT,
      {
        as: p,
        ref: d,
        variant: h,
        size: f,
        padding: o,
        disabled: i,
        active: l,
        animating: g6,
        animation: t,
        onClick: m,
        ...c
      }
    );
  }
);
Ao2.displayName = "Button";
var pT = Tr("button", {
  shouldForwardProp: a2((e6) => sr(e6), "shouldForwardProp")
})(({ theme: e6, variant: t, size: r, disabled: n, active: o, animating: i, animation: l = "none", padding: u }) => ({
  border: 0,
  cursor: n ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: u === "small" && r === "small" ? "0 7px" : u === "small" && r === "medium" ? "0 9px" : r === "small" ? "0 10px" : r === "medium" ? "0 12px" : 0,
  height: r === "small" ? "28px" : "32px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transitionProperty: "background, box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  userSelect: "none",
  opacity: n ? 0.5 : 1,
  margin: 0,
  fontSize: `${e6.typography.size.s1}px`,
  fontWeight: e6.typography.weight.bold,
  lineHeight: "1",
  background: t === "solid" ? e6.color.secondary : t === "outline" ? e6.button.background : t === "ghost" && o ? e6.background.hoverable : "transparent",
  ...t === "ghost" ? {
    // This is a hack to apply bar styles to the button as soon as it is part of a bar
    // It is a temporary solution until we have implemented Theming 2.0.
    ".sb-bar &": {
      background: o ? be2(0.9, e6.barTextColor) : "transparent",
      color: o ? e6.barSelectedColor : e6.barTextColor,
      "&:hover": {
        color: e6.barHoverColor,
        background: be2(0.86, e6.barHoverColor)
      },
      "&:active": {
        color: e6.barSelectedColor,
        background: be2(0.9, e6.barSelectedColor)
      },
      "&:focus": {
        boxShadow: `${Yo(e6.barHoverColor, 1)} 0 0 0 1px inset`,
        outline: "none"
      }
    }
  } : {},
  color: t === "solid" ? e6.color.lightest : t === "outline" ? e6.input.color : t === "ghost" && o ? e6.color.secondary : t === "ghost" ? e6.color.mediumdark : e6.input.color,
  boxShadow: t === "outline" ? `${e6.button.border} 0 0 0 1px inset` : "none",
  borderRadius: e6.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: t === "ghost" ? e6.color.secondary : void 0,
    background: (() => {
      let c = e6.color.secondary;
      return t === "solid" && (c = e6.color.secondary), t === "outline" && (c = e6.button.background), t === "ghost" ? be2(0.86, e6.color.secondary) : e6.base === "light" ? Ut2(0.02, c) : ns(0.03, c);
    })()
  },
  "&:active": {
    color: t === "ghost" ? e6.color.secondary : void 0,
    background: (() => {
      let c = e6.color.secondary;
      return t === "solid" && (c = e6.color.secondary), t === "outline" && (c = e6.button.background), t === "ghost" ? e6.background.hoverable : e6.base === "light" ? Ut2(0.02, c) : ns(0.03, c);
    })()
  },
  "&:focus": {
    boxShadow: `${Yo(e6.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: i && l !== "none" ? `${e6.animation[l]} 1000ms ease-out` : ""
  }
}));
var Dl = (0, import_react36.forwardRef)(
  ({ padding: e6 = "small", variant: t = "ghost", ...r }, n) => import_react36.default.createElement(Ao2, { padding: e6, variant: t, ref: n, ...r })
);
Dl.displayName = "IconButton";
var _g = be({
  from: { opacity: 0 },
  to: { opacity: 1 }
});
var hT = be({
  from: { maxHeight: 0 },
  to: {}
});
var mT = be({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)"
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
});
var m0 = Tr.div({
  backgroundColor: "rgba(27, 28, 29, 0.2)",
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 10,
  animation: `${_g} 200ms`
});
var g0 = Tr.div(
  ({ theme: e6, width: t, height: r }) => ({
    backgroundColor: e6.background.bar,
    borderRadius: 6,
    boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 38px -10px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: t ?? 740,
    height: r ?? "auto",
    maxWidth: "calc(100% - 40px)",
    maxHeight: "85vh",
    overflow: "hidden",
    zIndex: 11,
    animation: `${mT} 200ms`,
    "&:focus-visible": {
      outline: "none"
    }
  })
);
var $g = a2((e6) => import_react35.default.createElement(f0, { asChild: true }, import_react35.default.createElement(Dl, { ...e6 }, import_react35.default.createElement(Fu, null))), "CloseButton");
var gT = Tr.div({
  display: "flex",
  flexDirection: "column",
  margin: 16,
  gap: 16
});
var Hg = Tr.div({
  display: "flex",
  justifyContent: "space-between",
  gap: 16
});
var Pg = Tr.div({
  display: "flex",
  flexDirection: "column",
  gap: 4
});
var vT = a2((e6) => import_react35.default.createElement(Hg, null, import_react35.default.createElement(Pg, { ...e6 }), import_react35.default.createElement($g, null)), "Header");
var bT = Tr(p0)(({ theme: e6 }) => ({
  margin: 0,
  fontSize: e6.typography.size.s3,
  fontWeight: e6.typography.weight.bold
}));
var wT = Tr(d0)(({ theme: e6 }) => ({
  position: "relative",
  zIndex: 1,
  margin: 0,
  fontSize: e6.typography.size.s2
}));
var yT = Tr.div({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 8
});
var zg = Tr.div(({ theme: e6 }) => ({
  maxHeight: 100,
  overflow: "auto",
  animation: `${hT} 300ms, ${_g} 300ms`,
  backgroundColor: e6.background.critical,
  color: e6.color.lightest,
  fontSize: e6.typography.size.s2,
  "& > div": {
    position: "relative",
    padding: "8px 16px"
  }
}));
var DT = a2(({
  children: e6,
  ...t
}) => import_react35.default.createElement(zg, { ...t }, import_react35.default.createElement("div", null, e6)), "Error");
function xT({
  children: e6,
  width: t,
  height: r,
  onEscapeKeyDown: n,
  onInteractOutside: o = a2((c) => c.preventDefault(), "onInteractOutside"),
  className: i,
  container: l,
  ...u
}) {
  return import_react26.default.createElement(l0, { ...u }, import_react26.default.createElement(s0, { container: l }, import_react26.default.createElement(
    u0,
    { asChild: true },
    import_react26.default.createElement(m0, null)
  ), import_react26.default.createElement(
    c0,
    {
      asChild: true,
      onInteractOutside: o,
      onEscapeKeyDown: n
    },
    import_react26.default.createElement(g0, { className: i, width: t, height: r }, e6)
  )));
}
a2(xT, "BaseModal");
var CT = Object.assign(xT, v0, { Dialog: yl });
var RT = a2((e6) => typeof e6 == "number" ? e6 : Number(e6), "toNumber");
var AT = Tr.div(
  ({ theme: e6, col: t, row: r = 1 }) => t ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: t * e6.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${gc}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: r * e6.layoutMargin
    },
    [`& > *:first-child${gc}`]: {
      marginTop: 0
    }
  },
  ({ theme: e6, outer: t, col: r, row: n }) => {
    switch (true) {
      case !!(t && r):
        return {
          marginLeft: t * e6.layoutMargin,
          marginRight: t * e6.layoutMargin
        };
      case !!(t && n):
        return {
          marginTop: t * e6.layoutMargin,
          marginBottom: t * e6.layoutMargin
        };
      default:
        return {};
    }
  }
);
var FT = a2(({ col: e6, row: t, outer: r, children: n, ...o }) => {
  let i = RT(typeof r == "number" || !r ? r : e6 || t);
  return import_react38.default.createElement(AT, { col: e6, row: t, outer: i, ...o }, n);
}, "Spaced");
var TT = Tr.div(({ theme: e6 }) => ({
  fontWeight: e6.typography.weight.bold
}));
var LT = Tr.div();
var BT = Tr.div(({ theme: e6 }) => ({
  padding: 30,
  textAlign: "center",
  color: e6.color.defaultText,
  fontSize: e6.typography.size.s2 - 1
}));
var IT = a2(({ children: e6, ...t }) => {
  let [r, n] = import_react39.Children.toArray(e6);
  return import_react39.default.createElement(BT, { ...t }, import_react39.default.createElement(TT, null, r), n && import_react39.default.createElement(
    LT,
    null,
    n
  ));
}, "Placeholder");
bi();
function $T(e6, t) {
  var r = (0, import_react41.useRef)(null), n = (0, import_react41.useRef)(null);
  n.current = t;
  var o = (0, import_react41.useRef)(null);
  (0, import_react41.useEffect)(function() {
    i();
  });
  var i = (0, import_react41.useCallback)(function() {
    var l = o.current, u = n.current, c = l || (u ? u instanceof Element ? u : u.current : null);
    r.current && r.current.element === c && r.current.subscriber === e6 || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: c,
      subscriber: e6,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: c ? e6(c) : void 0
    });
  }, [e6]);
  return (0, import_react41.useEffect)(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), (0, import_react41.useCallback)(function(l) {
    o.current = l, i();
  }, [i]);
}
a2($T, "useResolvedElement");
function Ng(e6, t, r) {
  return e6[t] ? e6[t][0] ? e6[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e6[t][r]
  ) : t === "contentBoxSize" ? e6.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
a2(Ng, "extractSize");
function xl(e6) {
  e6 === void 0 && (e6 = {});
  var t = e6.onResize, r = (0, import_react41.useRef)(void 0);
  r.current = t;
  var n = e6.round || Math.round, o = (0, import_react41.useRef)(), i = (0, import_react41.useState)({
    width: void 0,
    height: void 0
  }), l = i[0], u = i[1], c = (0, import_react41.useRef)(false);
  (0, import_react41.useEffect)(function() {
    return c.current = false, function() {
      c.current = true;
    };
  }, []);
  var d = (0, import_react41.useRef)({
    width: void 0,
    height: void 0
  }), p = $T((0, import_react41.useCallback)(function(h) {
    return (!o.current || o.current.box !== e6.box || o.current.round !== n) && (o.current = {
      box: e6.box,
      round: n,
      instance: new ResizeObserver(function(f) {
        var g6 = f[0], w4 = e6.box === "border-box" ? "borderBoxSize" : e6.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", m = Ng(g6, w4, "inlineSize"), v = Ng(g6, w4, "blockSize"), y = m ? n(m) : void 0, b = v ? n(v) : void 0;
        if (d.current.width !== y || d.current.height !== b) {
          var D4 = {
            width: y,
            height: b
          };
          d.current.width = y, d.current.height = b, r.current ? r.current(D4) : c.current || u(D4);
        }
      })
    }), o.current.instance.observe(h, {
      box: e6.box
    }), function() {
      o.current && o.current.instance.unobserve(h);
    };
  }, [e6.box, n]), e6.ref);
  return (0, import_react41.useMemo)(function() {
    return {
      ref: p,
      width: l.width,
      height: l.height
    };
  }, [p, l.width, l.height]);
}
a2(xl, "useResizeObserver");
var jT = Tr.div(
  ({ scale: e6 = 1, elementHeight: t }) => ({
    height: t || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / e6})`
  })
);
function Vg({ scale: e6, children: t }) {
  let r = (0, import_react40.useRef)(null), [n, o] = (0, import_react40.useState)(0), i = (0, import_react40.useCallback)(
    ({ height: l }) => {
      l && o(l / e6);
    },
    [e6]
  );
  return (0, import_react40.useEffect)(() => {
    r.current && o(r.current.getBoundingClientRect().height);
  }, [e6]), xl({
    ref: r,
    onResize: i
  }), import_react40.default.createElement(jT, { scale: e6, elementHeight: n }, import_react40.default.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
a2(Vg, "ZoomElement");
var x0 = class x02 extends import_react42.Component {
  constructor() {
    super(...arguments);
    // @ts-expect-error (non strict)
    __publicField(this, "iframe", null);
  }
  componentDidMount() {
    let { iFrameRef: t } = this.props;
    this.iframe = t.current;
  }
  shouldComponentUpdate(t) {
    let { scale: r, active: n } = this.props;
    return r !== t.scale && this.setIframeInnerZoom(t.scale), n !== t.active && this.iframe.setAttribute("data-is-storybook", t.active ? "true" : "false"), t.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(t) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${t * 100}%`,
        height: `${t * 100}%`,
        transform: `scale(${1 / t})`,
        transformOrigin: "top left"
      });
    } catch {
      this.setIframeZoom(t);
    }
  }
  setIframeZoom(t) {
    Object.assign(this.iframe.style, {
      width: `${t * 100}%`,
      height: `${t * 100}%`,
      transform: `scale(${1 / t})`,
      transformOrigin: "top left"
    });
  }
  render() {
    let { children: t } = this.props;
    return import_react42.default.createElement(import_react42.default.Fragment, null, t);
  }
};
a2(x0, "ZoomIFrame");
var Cl = x0;
var qT = {
  Element: Vg,
  IFrame: Cl
};
Ya2();
var { document: WT } = an2;
var UT = Tr.strong(({ theme: e6 }) => ({
  color: e6.color.orange
}));
var GT = Tr.strong(({ theme: e6 }) => ({
  color: e6.color.ancillary,
  textDecoration: "underline"
}));
var Wg = Tr.em(({ theme: e6 }) => ({
  color: e6.textMutedColor
}));
var XT = /(Error): (.*)\n/;
var YT = /at (?:(.*) )?\(?(.+)\)?/;
var KT = /([^@]+)?(?:\/<)?@(.+)?/;
var ZT = /([^@]+)?@(.+)?/;
var JT = a2(({
  error: e6
}) => {
  if (!e6)
    return import_react43.default.createElement(import_react43.Fragment, null, "This error has no stack or message");
  if (!e6.stack)
    return import_react43.default.createElement(import_react43.Fragment, null, e6.message || "This error has no stack or message");
  let t = e6.stack.toString();
  t && e6.message && !t.includes(e6.message) && (t = `Error: ${e6.message}

${t}`);
  let r = t.match(XT);
  if (!r)
    return import_react43.default.createElement(import_react43.Fragment, null, t);
  let [, n, o] = r, i = t.split(/\n/).slice(1), [, ...l] = i.map((u) => {
    let c = u.match(YT) || u.match(KT) || u.match(ZT);
    return c ? {
      name: (c[1] || "").replace("/<", ""),
      location: c[2].replace(WT.location.origin, "")
    } : null;
  }).filter(Boolean);
  return import_react43.default.createElement(import_react43.Fragment, null, import_react43.default.createElement("span", null, n), ": ", import_react43.default.createElement(
    UT,
    null,
    o
  ), import_react43.default.createElement("br", null), l.map(
    (u, c) => (u == null ? void 0 : u.name) ? import_react43.default.createElement(import_react43.Fragment, { key: c }, "  ", "at ", import_react43.default.createElement(GT, null, u.name), " (", import_react43.default.createElement(Wg, null, u.location), ")", import_react43.default.createElement("br", null)) : import_react43.default.createElement(
      import_react43.Fragment,
      { key: c },
      "  ",
      "at ",
      import_react43.default.createElement(Wg, null, u == null ? void 0 : u.location),
      import_react43.default.createElement("br", null)
    )
  ));
}, "ErrorFormatter");
var QT = Tr.label(({ theme: e6 }) => ({
  display: "flex",
  borderBottom: `1px solid ${e6.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
}));
var eL = Tr.span(({ theme: e6 }) => ({
  minWidth: 100,
  fontWeight: e6.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
}));
var Gg = a2(({ label: e6, children: t, ...r }) => import_react44.default.createElement(QT, { ...r }, e6 ? import_react44.default.createElement(
  eL,
  null,
  import_react44.default.createElement("span", null, e6)
) : null, t), "Field");
Ue2();
Ka2();
var rL = import_react46.useLayoutEffect;
var Xg = rL;
var Kg = a2(function(t) {
  var r = Yg.useRef(t);
  return Xg(function() {
    r.current = t;
  }), r;
}, "useLatest");
var Zg = a2(function(t, r) {
  if (typeof t == "function") {
    t(r);
    return;
  }
  t.current = r;
}, "updateRef");
var aL = a2(function(t, r) {
  var n = (0, import_react47.useRef)();
  return (0, import_react47.useCallback)(function(o) {
    t.current = o, n.current && Zg(n.current, null), n.current = r, r && Zg(r, o);
  }, [r]);
}, "useComposedRef");
var Jg = aL;
var Qg = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var iL = a2(function(t) {
  Object.keys(Qg).forEach(function(r) {
    t.style.setProperty(r, Qg[r], "important");
  });
}, "forceHiddenStyles");
var e3 = iL;
var Te2 = null;
var t3 = a2(function(t, r) {
  var n = t.scrollHeight;
  return r.sizingStyle.boxSizing === "border-box" ? n + r.borderSize : n - r.paddingSize;
}, "getHeight");
function lL(e6, t, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = 1 / 0), Te2 || (Te2 = document.createElement("textarea"), Te2.setAttribute("tabindex", "-1"), Te2.setAttribute("aria-hidden", "true"), e3(Te2)), Te2.parentNode === null && document.body.appendChild(Te2);
  var o = e6.paddingSize, i = e6.borderSize, l = e6.sizingStyle, u = l.boxSizing;
  Object.keys(l).forEach(function(f) {
    var g6 = f;
    Te2.style[g6] = l[g6];
  }), e3(Te2), Te2.value = t;
  var c = t3(Te2, e6);
  Te2.value = t, c = t3(Te2, e6), Te2.value = "x";
  var d = Te2.scrollHeight - o, p = d * r;
  u === "border-box" && (p = p + o + i), c = Math.max(p, c);
  var h = d * n;
  return u === "border-box" && (h = h + o + i), c = Math.min(h, c), [c, d];
}
a2(lL, "calculateNodeHeight");
var r3 = a2(function() {
}, "noop");
var sL = a2(function(t, r) {
  return t.reduce(function(n, o) {
    return n[o] = r[o], n;
  }, {});
}, "pick");
var uL = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var cL = !!document.documentElement.currentStyle;
var pL = a2(function(t) {
  var r = window.getComputedStyle(t);
  if (r === null)
    return null;
  var n = sL(uL, r), o = n.boxSizing;
  if (o === "")
    return null;
  cL && o === "border-box" && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + "px");
  var i = parseFloat(n.paddingBottom) + parseFloat(n.paddingTop), l = parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth);
  return {
    sizingStyle: n,
    paddingSize: i,
    borderSize: l
  };
}, "getSizingData");
var dL = pL;
function n3(e6, t, r) {
  var n = Kg(r);
  ut2.useLayoutEffect(function() {
    var o = a2(function(l) {
      return n.current(l);
    }, "handler");
    if (e6)
      return e6.addEventListener(t, o), function() {
        return e6.removeEventListener(t, o);
      };
  }, []);
}
a2(n3, "useListener");
var fL = a2(function(t) {
  n3(window, "resize", t);
}, "useWindowResizeListener");
var hL = a2(function(t) {
  n3(document.fonts, "loadingdone", t);
}, "useFontsLoadedListener");
var mL = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var gL = a2(function(t, r) {
  var n = t.cacheMeasurements, o = t.maxRows, i = t.minRows, l = t.onChange, u = l === void 0 ? r3 : l, c = t.onHeightChange, d = c === void 0 ? r3 : c, p = ln2(t, mL), h = p.value !== void 0, f = ut2.useRef(null), g6 = Jg(f, r), w4 = ut2.useRef(0), m = ut2.useRef(), v = a2(
    function() {
      var D4 = f.current, x = n && m.current ? m.current : dL(D4);
      if (x) {
        m.current = x;
        var C = lL(x, D4.value || D4.placeholder || "x", i, o), E = C[0], S = C[1];
        w4.current !== E && (w4.current = E, D4.style.setProperty("height", E + "px", "important"), d(E, {
          rowHeight: S
        }));
      }
    },
    "resizeTextarea"
  ), y = a2(function(D4) {
    h || v(), u(D4);
  }, "handleChange");
  return ut2.useLayoutEffect(v), fL(v), hL(v), ut2.createElement("textarea", I2({}, p, {
    onChange: y,
    ref: g6
  }));
}, "TextareaAutosize");
var o3 = ut2.forwardRef(gL);
var vL = {
  // resets
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
};
var F0 = a2(({ theme: e6 }) => ({
  ...vL,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e6.input.color || "inherit",
  background: e6.input.background,
  boxShadow: `${e6.input.border} 0 0 0 1px inset`,
  borderRadius: e6.input.borderRadius,
  fontSize: e6.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${e6.color.secondary} 0 0 0 1px inset`,
    outline: "none"
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e6.color.lightest} inset` },
  "&::placeholder": {
    color: e6.textMutedColor,
    opacity: 1
  }
}), "styles");
var k0 = a2(({ size: e6 }) => {
  switch (e6) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, "sizes");
var a3 = a2(({
  align: e6
}) => {
  switch (e6) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, "alignment");
var T0 = a2(({ valid: e6, theme: t }) => {
  switch (e6) {
    case "valid":
      return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return {
        boxShadow: `${t.color.warning} 0 0 0 1px inset`
      };
    case void 0:
    case null:
    default:
      return {};
  }
}, "validation");
var i3 = Object.assign(
  Tr(
    (0, import_react45.forwardRef)(a2(function({ size: t, valid: r, align: n, ...o }, i) {
      return import_react45.default.createElement("input", { ...o, ref: i });
    }, "Input"))
  )(F0, k0, a3, T0, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
);
var l3 = Object.assign(
  Tr(
    (0, import_react45.forwardRef)(a2(function({ size: t, valid: r, align: n, ...o }, i) {
      return import_react45.default.createElement("select", { ...o, ref: i });
    }, "Select"))
  )(F0, k0, T0, {
    height: 32,
    userSelect: "none",
    paddingRight: 20,
    appearance: "menulist"
  }),
  {
    displayName: "Select"
  }
);
var s3 = Object.assign(
  Tr(
    (0, import_react45.forwardRef)(a2(function({ size: t, valid: r, align: n, ...o }, i) {
      return import_react45.default.createElement(o3, { ...o, ref: i });
    }, "Textarea"))
  )(F0, k0, a3, T0, ({ height: e6 = 400 }) => ({
    overflow: "visible",
    maxHeight: e6
  })),
  {
    displayName: "Textarea"
  }
);
var wL = Object.assign(
  Tr.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field: Gg,
    Input: i3,
    Select: l3,
    Textarea: s3,
    Button: Ao2
  }
);
var mB = (0, import_react48.lazy)(
  () => Promise.resolve().then(() => (Pl(), s1)).then((e6) => ({ default: e6.WithTooltip }))
);
var gB = a2((e6) => import_react48.default.createElement(import_react48.Suspense, { fallback: import_react48.default.createElement("div", null) }, import_react48.default.createElement(mB, { ...e6 })), "WithTooltip");
var vB = (0, import_react48.lazy)(
  () => Promise.resolve().then(() => (Pl(), s1)).then((e6) => ({ default: e6.WithTooltipPure }))
);
var bB = a2((e6) => import_react48.default.createElement(import_react48.Suspense, { fallback: import_react48.default.createElement("div", null) }, import_react48.default.createElement(vB, { ...e6 })), "WithTooltipPure");
var wB = Tr.div(({ theme: e6 }) => ({
  fontWeight: e6.typography.weight.bold
}));
var yB = Tr.span();
var DB = Tr.div(({ theme: e6 }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: e6.typography.weight.bold
  }
}));
var xB = Tr.div(({ theme: e6 }) => ({
  color: e6.color.defaultText,
  lineHeight: "18px"
}));
var CB = Tr.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
});
var EB = a2(({ title: e6, desc: t, links: r }) => import_react49.default.createElement(CB, null, import_react49.default.createElement(
  xB,
  null,
  e6 && import_react49.default.createElement(wB, null, e6),
  t && import_react49.default.createElement(yB, null, t)
), r && import_react49.default.createElement(
  DB,
  null,
  r.map(({ title: n, ...o }) => import_react49.default.createElement(Bu, { ...o, key: n }, n))
)), "TooltipMessage");
var AB = Tr.div(({ theme: e6 }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: e6.typography.weight.bold,
  color: e6.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: e6.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
}));
var FB = a2(({ note: e6, ...t }) => import_react50.default.createElement(AB, { ...t }, e6), "TooltipNote");
var Cv = ve2(Ko(), 1);
var kB = Tr(({ active: e6, loading: t, disabled: r, ...n }) => import_react52.default.createElement("span", { ...n }))(
  ({ theme: e6 }) => ({
    color: e6.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: e6.typography.weight.regular
  }),
  ({ active: e6, theme: t }) => e6 ? {
    color: t.color.secondary,
    fontWeight: t.typography.weight.bold
  } : {},
  ({ loading: e6, theme: t }) => e6 ? {
    display: "inline-block",
    flex: "none",
    ...t.animation.inlineGlow
  } : {},
  ({ disabled: e6, theme: t }) => e6 ? {
    color: be2(0.7, t.color.defaultText)
  } : {}
);
var TB = Tr.span({
  display: "flex",
  "& svg": {
    height: 12,
    width: 12,
    margin: "3px 0",
    verticalAlign: "top"
  },
  "& path": {
    fill: "inherit"
  }
});
var LB = Tr.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented: e6 }) => e6 ? { marginLeft: 24 } : {}
);
var BB = Tr.span(
  ({ theme: e6 }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active: e6, theme: t }) => e6 ? {
    color: t.color.secondary
  } : {},
  ({ theme: e6, disabled: t }) => t ? {
    color: e6.textMutedColor
  } : {}
);
var IB = Tr.span(
  ({ active: e6, theme: t }) => e6 ? {
    color: t.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
);
var MB = Tr.a(
  ({ theme: e6 }) => ({
    fontSize: e6.typography.size.s1,
    transition: "all 150ms ease-out",
    color: e6.color.dark,
    textDecoration: "none",
    cursor: "pointer",
    justifyContent: "space-between",
    lineHeight: "18px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      paddingLeft: 10
    },
    "&:hover": {
      background: e6.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  }),
  ({ disabled: e6 }) => e6 ? {
    cursor: "not-allowed"
  } : {}
);
var _B = (0, Cv.default)(100)((e6, t, r) => {
  let n = {};
  return e6 && Object.assign(n, {
    onClick: e6
  }), t && Object.assign(n, {
    href: t
  }), r && t && Object.assign(n, {
    to: t,
    as: r
  }), n;
});
var $B = a2(({
  loading: e6 = false,
  title: t = import_react52.default.createElement("span", null, "Loading state"),
  center: r = null,
  right: n = null,
  active: o = false,
  disabled: i = false,
  isIndented: l,
  href: u = void 0,
  onClick: c = void 0,
  icon: d,
  LinkWrapper: p = void 0,
  ...h
}) => {
  let f = _B(c, u, p), g6 = { active: o, disabled: i };
  return import_react52.default.createElement(MB, { ...g6, ...h, ...f }, d && import_react52.default.createElement(IB, { ...g6 }, d), t || r ? import_react52.default.createElement(LB, { isIndented: !!(!d && l) }, t && import_react52.default.createElement(kB, { ...g6, loading: e6 }, t), r && import_react52.default.createElement(BB, { ...g6 }, r)) : null, n && import_react52.default.createElement(TB, { ...g6 }, n));
}, "ListItem");
var u1 = $B;
var zB = Tr.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32
    // 11.5 items
  },
  ({ theme: e6 }) => ({
    borderRadius: e6.appBorderRadius
  })
);
var OB = a2((e6) => {
  let { LinkWrapper: t, onClick: r, id: n, isIndented: o, ...i } = e6, { title: l, href: u, active: c } = i, d = (0, import_react51.useCallback)(
    (h) => {
      r(h, i);
    },
    [r]
  ), p = !!r;
  return import_react51.default.createElement(
    u1,
    {
      title: l,
      active: c,
      href: u,
      id: `list-item-${n}`,
      LinkWrapper: t,
      isIndented: o,
      ...i,
      ...p ? { onClick: d } : {}
    }
  );
}, "Item");
var p1 = a2(({ links: e6, LinkWrapper: t = null }) => {
  let r = e6.some((n) => n.icon);
  return import_react51.default.createElement(zB, null, e6.map(({ isGatsby: n, ...o }) => (
    // @ts-expect-error (non strict)
    import_react51.default.createElement(OB, { key: o.id, LinkWrapper: n ? t : null, isIndented: r, ...o })
  )));
}, "TooltipLinkList");
var VB = a2((e6) => typeof e6.props.href == "string", "isLink");
var qB = a2(
  (e6) => typeof e6.props.href != "string",
  "isButton"
);
function WB({ children: e6, ...t }, r) {
  let n = { props: t, ref: r };
  if (VB(n))
    return import_react54.default.createElement("a", { ref: n.ref, ...n.props }, e6);
  if (qB(n))
    return import_react54.default.createElement("button", { ref: n.ref, type: "button", ...n.props }, e6);
  throw new Error("invalid props");
}
a2(WB, "ForwardRefFunction");
var Ev = (0, import_react54.forwardRef)(WB);
Ev.displayName = "ButtonOrLink";
var tn2 = Tr(Ev, { shouldForwardProp: sr })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": {
      display: "none"
    },
    "&[hidden]": {
      display: "none"
    }
  },
  ({ theme: e6 }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": {
      outline: "0 none",
      borderBottomColor: e6.barSelectedColor
    }
  }),
  ({ active: e6, textColor: t, theme: r }) => e6 ? {
    color: t || r.barSelectedColor,
    borderBottomColor: r.barSelectedColor
  } : {
    color: t || r.barTextColor,
    borderBottomColor: "transparent",
    "&:hover": {
      color: r.barHoverColor
    }
  }
);
tn2.displayName = "TabButton";
var UB = Tr.div(({ theme: e6 }) => ({
  width: 14,
  height: 14,
  backgroundColor: e6.appBorderColor,
  animation: `${e6.animation.glow} 1.5s ease-in-out infinite`
}));
var GB = Tr.div(() => ({
  marginTop: 6,
  padding: 7,
  height: 28
}));
var XB = a2(() => import_react54.default.createElement(GB, null, import_react54.default.createElement(UB, null)), "IconButtonSkeleton");
bi();
var f1 = Tr.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 3
  },
  ({ scrollable: e6 }) => e6 ? { flexShrink: 0 } : {},
  ({ left: e6 }) => e6 ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right: e6 }) => e6 ? {
    marginLeft: 30,
    "& > *": {
      marginRight: 4
    }
  } : {}
);
f1.displayName = "Side";
var KB = a2(({ children: e6, className: t, scrollable: r }) => r ? import_react55.default.createElement(
  gn2,
  { vertical: false, className: t },
  e6
) : import_react55.default.createElement("div", { className: t }, e6), "UnstyledBar");
var m1 = Tr(KB)(
  ({ theme: e6, scrollable: t = true }) => ({
    color: e6.barTextColor,
    width: "100%",
    height: 40,
    flexShrink: 0,
    overflow: t ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme: e6, border: t = false }) => t ? {
    boxShadow: `${e6.appBorderColor}  0 -1px 0 0 inset`,
    background: e6.barBg
  } : {}
);
m1.displayName = "Bar";
var ZB = Tr.div(({ bgColor: e6 }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: e6 || ""
}));
var Ol = a2(({ children: e6, backgroundColor: t, className: r, ...n }) => {
  let [o, i] = import_react55.Children.toArray(e6);
  return import_react55.default.createElement(m1, { className: `sb-bar ${r}`, ...n }, import_react55.default.createElement(ZB, { bgColor: t }, import_react55.default.createElement(f1, { scrollable: n.scrollable, left: true }, o), i ? import_react55.default.createElement(f1, { right: true }, i) : null));
}, "FlexBar");
Ol.displayName = "FlexBar";
var g1 = Tr.div(
  ({ active: e6 }) => e6 ? { display: "block" } : { display: "none" }
);
var Sv = a2((e6) => import_react56.Children.toArray(e6).map(
  // @ts-expect-error (non strict)
  ({
    props: { title: t, id: r, color: n, children: o }
  }) => {
    let i = Array.isArray(
      o
    ) ? o[0] : o;
    return {
      title: t,
      id: r,
      ...n ? { color: n } : {},
      render: typeof i == "function" ? i : ({ active: u }) => import_react56.default.createElement(g1, { active: u, role: "tabpanel" }, i)
    };
  }
), "childrenToList");
Pl();
var nI = Tr.span(({ theme: e6, isActive: t }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: t ? e6.color.secondary : e6.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: "3px solid transparent",
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
}));
var oI = Tr(tn2)(({ active: e6, theme: t, preActive: r }) => `
    color: ${r || e6 ? t.barSelectedColor : t.barTextColor};
    .addon-collapsible-icon {
      color: ${r || e6 ? t.barSelectedColor : t.barTextColor};
    }
    &:hover {
      color: ${t.barHoverColor};
      .addon-collapsible-icon {
        color: ${t.barHoverColor};
      }
    }
  `);
function Fv(e6) {
  let t = (0, import_react57.useRef)(), r = (0, import_react57.useRef)(), n = (0, import_react57.useRef)(/* @__PURE__ */ new Map()), { width: o = 1 } = xl({
    // @ts-expect-error (non strict)
    ref: t
  }), [i, l] = (0, import_react57.useState)(e6), [u, c] = (0, import_react57.useState)([]), d = (0, import_react57.useRef)(e6), p = (0, import_react57.useCallback)(
    ({
      menuName: f,
      actions: g6
    }) => {
      let w4 = u.some(({ active: y }) => y), [m, v] = (0, import_react57.useState)(false);
      return import_react57.default.createElement(import_react57.default.Fragment, null, import_react57.default.createElement(
        l1,
        {
          interactive: true,
          visible: m,
          onVisibleChange: v,
          placement: "bottom",
          delayHide: 100,
          tooltip: import_react57.default.createElement(
            p1,
            {
              links: u.map(({ title: y, id: b, color: D4, active: x }) => ({
                id: b,
                title: y,
                color: D4,
                active: x,
                onClick: a2((C) => {
                  C.preventDefault(), g6.onSelect(b);
                }, "onClick")
              }))
            }
          )
        },
        import_react57.default.createElement(
          oI,
          {
            ref: r,
            active: w4,
            preActive: m,
            style: { visibility: u.length ? "visible" : "hidden" },
            "aria-hidden": !u.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          f,
          import_react57.default.createElement(
            nI,
            {
              className: "addon-collapsible-icon",
              isActive: w4 || m
            }
          )
        )
      ), u.map(({ title: y, id: b, color: D4 }, x) => {
        let C = `index-${x}`;
        return import_react57.default.createElement(
          tn2,
          {
            id: `tabbutton-${O(b) ?? C}`,
            style: { visibility: "hidden" },
            "aria-hidden": true,
            tabIndex: -1,
            ref: (E) => {
              n.current.set(b, E);
            },
            className: "tabbutton",
            type: "button",
            key: b,
            textColor: D4,
            role: "tab"
          },
          y
        );
      }));
    },
    [u]
  ), h = (0, import_react57.useCallback)(() => {
    if (!t.current || !r.current)
      return;
    let { x: f, width: g6 } = t.current.getBoundingClientRect(), { width: w4 } = r.current.getBoundingClientRect(), m = u.length ? f + g6 - w4 : f + g6, v = [], y = 0, b = e6.filter((D4) => {
      let { id: x } = D4, C = n.current.get(x), { width: E = 0 } = (C == null ? void 0 : C.getBoundingClientRect()) || {}, S = f + y + E > m;
      return (!S || !C) && v.push(D4), y += E, S;
    });
    (v.length !== i.length || d.current !== e6) && (l(v), c(b), d.current = e6);
  }, [u.length, e6, i]);
  return (0, import_react57.useLayoutEffect)(h, [h, o]), {
    tabRefs: n,
    addonsRef: r,
    tabBarRef: t,
    visibleList: i,
    invisibleList: u,
    AddonTab: p
  };
}
a2(Fv, "useList");
var aI = Tr.div(({ theme: e6 }) => ({
  height: "100%",
  display: "flex",
  padding: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: e6.background.content
}));
var iI = Tr.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  maxWidth: 415
});
var lI = Tr.div(({ theme: e6 }) => ({
  fontWeight: e6.typography.weight.bold,
  fontSize: e6.typography.size.s2 - 1,
  textAlign: "center",
  color: e6.textColor
}));
var sI = Tr.div(({ theme: e6 }) => ({
  fontWeight: e6.typography.weight.regular,
  fontSize: e6.typography.size.s2 - 1,
  textAlign: "center",
  color: e6.textMutedColor
}));
var b1 = a2(({ title: e6, description: t, footer: r }) => import_react58.default.createElement(aI, null, import_react58.default.createElement(
  iI,
  null,
  import_react58.default.createElement(lI, null, e6),
  t && import_react58.default.createElement(sI, null, t)
), r), "EmptyTabContent");
var fI = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
var hI = Tr.div(
  ({ theme: e6, bordered: t }) => t ? {
    backgroundClip: "padding-box",
    border: `1px solid ${e6.appBorderColor}`,
    borderRadius: e6.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute: e6 }) => e6 ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
);
var D1 = Tr.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
D1.displayName = "TabBar";
var mI = Tr.div(
  {
    display: "block",
    position: "relative"
  },
  ({ theme: e6 }) => ({
    fontSize: e6.typography.size.s2 - 1,
    background: e6.background.content
  }),
  ({ bordered: e6, theme: t }) => e6 ? {
    borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px`
  } : {},
  ({ absolute: e6, bordered: t }) => e6 ? {
    height: `calc(100% - ${t ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (t ? 1 : 0),
    right: 0 + (t ? 1 : 0),
    bottom: 0 + (t ? 1 : 0),
    top: 40 + (t ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${fI}`]: {
      position: "absolute",
      left: 0 + (t ? 1 : 0),
      right: 0 + (t ? 1 : 0),
      bottom: 0 + (t ? 1 : 0),
      top: 0 + (t ? 1 : 0),
      height: `calc(100% - ${t ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
);
var gI = a2(({ active: e6, render: t, children: r }) => import_react53.default.createElement(g1, { active: e6 }, t ? t() : r), "TabWrapper");
var x1 = (0, import_react53.memo)(
  ({
    children: e6,
    selected: t = null,
    actions: r,
    absolute: n = false,
    bordered: o = false,
    tools: i = null,
    backgroundColor: l,
    id: u = null,
    menuName: c = "Tabs",
    emptyState: d,
    showToolsWhenEmpty: p
  }) => {
    let h = (0, import_react53.useMemo)(
      () => Sv(e6).map((y, b) => ({
        ...y,
        active: t ? y.id === t : b === 0
      })),
      [e6, t]
    ), { visibleList: f, tabBarRef: g6, tabRefs: w4, AddonTab: m } = Fv(h), v = d ?? import_react53.default.createElement(b1, { title: "Nothing found" });
    return !p && h.length === 0 ? v : (
      // @ts-expect-error (non strict)
      import_react53.default.createElement(hI, { absolute: n, bordered: o, id: u }, import_react53.default.createElement(Ol, {
        scrollable: false,
        border: true,
        backgroundColor: l
      }, import_react53.default.createElement(D1, { style: { whiteSpace: "normal" }, ref: g6, role: "tablist" }, f.map(({
        title: y,
        id: b,
        active: D4,
        color: x
      }, C) => {
        let E = `index-${C}`;
        return import_react53.default.createElement(
          tn2,
          {
            id: `tabbutton-${O(b) ?? E}`,
            ref: (S) => {
              w4.current.set(b, S);
            },
            className: `tabbutton ${D4 ? "tabbutton-active" : ""}`,
            type: "button",
            key: b,
            active: D4,
            textColor: x,
            onClick: (S) => {
              S.preventDefault(), r.onSelect(b);
            },
            role: "tab"
          },
          typeof y == "function" ? import_react53.default.createElement("title", null) : y
        );
      }), import_react53.default.createElement(m, { menuName: c, actions: r })), i), import_react53.default.createElement(mI, { id: "panel-tab-content", bordered: o, absolute: n }, h.length ? h.map(({ id: y, active: b, render: D4 }) => import_react53.default.createElement(D4, { key: y, active: b }, null)) : v))
    );
  }
);
x1.displayName = "Tabs";
var ql = class ql2 extends import_react53.Component {
  constructor(t) {
    super(t);
    __publicField(this, "handlers", {
      onSelect: a2((t) => this.setState({ selected: t }), "onSelect")
    });
    this.state = {
      selected: t.initial
    };
  }
  render() {
    let { bordered: t = false, absolute: r = false, children: n, backgroundColor: o, menuName: i } = this.props, { selected: l } = this.state;
    return import_react53.default.createElement(
      x1,
      {
        bordered: t,
        absolute: r,
        selected: l,
        backgroundColor: o,
        menuName: i,
        actions: this.handlers
      },
      n
    );
  }
};
a2(ql, "TabsState"), M1(ql, "defaultProps", {
  children: [],
  // @ts-expect-error (non strict)
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: "",
  // @ts-expect-error (non strict)
  menuName: void 0
});
var w1 = ql;
var C1 = Tr.span(
  ({ theme: e6 }) => ({
    width: 1,
    height: 20,
    background: e6.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force: e6 }) => e6 ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
C1.displayName = "Separator";
var wI = a2((e6) => e6.reduce(
  (t, r, n) => r ? import_react59.default.createElement(import_react59.Fragment, { key: r.id || r.key || `f-${n}` }, t, n > 0 ? import_react59.default.createElement(C1, {
    key: `s-${n}`
  }) : null, r.render() || r) : t,
  null
), "interleaveSeparators");
var CI = a2((e6) => {
  let t = (0, import_react60.useRef)();
  return (0, import_react60.useEffect)(() => {
    t.current = e6;
  }, [e6]), t.current;
}, "usePrevious");
var EI = a2((e6, t) => {
  let r = CI(t);
  return e6 ? t : r;
}, "useUpdate");
var SI = a2(({ active: e6, children: t }) => (
  // the hidden attribute is an valid html element that's both accessible and works to visually hide content
  import_react60.default.createElement("div", { hidden: !e6 }, EI(e6, t))
), "AddonPanel");
var TI = Tu;
var LI = Tr.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`;
var BI = a2(({
  icon: e6,
  useSymbol: t,
  __suppressDeprecationWarning: r = false,
  ...n
}) => {
  r || (0, import_client_logger5.deprecate)(
    `Use of the deprecated Icons ${`(${e6})` || ""} component detected. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
  );
  let o = Wl[e6] || null;
  if (!o)
    return import_client_logger5.logger.warn(
      `Use of an unknown prop ${`(${e6})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons component directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
    ), null;
  let i = TI[o];
  return import_react61.default.createElement(i, { ...n });
}, "Icons");
var II = (0, import_react61.memo)(a2(function({ icons: t = Object.keys(Wl) }) {
  return import_react61.default.createElement(
    LI,
    {
      viewBox: "0 0 14 14",
      style: { position: "absolute", width: 0, height: 0 },
      "data-chromatic": "ignore"
    },
    t.map((r) => import_react61.default.createElement("symbol", { id: `icon--${r}`, key: r }, Wl[r]))
  );
}, "Symbols"));
var Wl = {
  user: "UserIcon",
  useralt: "UserAltIcon",
  useradd: "UserAddIcon",
  users: "UsersIcon",
  profile: "ProfileIcon",
  facehappy: "FaceHappyIcon",
  faceneutral: "FaceNeutralIcon",
  facesad: "FaceSadIcon",
  accessibility: "AccessibilityIcon",
  accessibilityalt: "AccessibilityAltIcon",
  arrowup: "ChevronUpIcon",
  arrowdown: "ChevronDownIcon",
  arrowleft: "ChevronLeftIcon",
  arrowright: "ChevronRightIcon",
  arrowupalt: "ArrowUpIcon",
  arrowdownalt: "ArrowDownIcon",
  arrowleftalt: "ArrowLeftIcon",
  arrowrightalt: "ArrowRightIcon",
  expandalt: "ExpandAltIcon",
  collapse: "CollapseIcon",
  expand: "ExpandIcon",
  unfold: "UnfoldIcon",
  transfer: "TransferIcon",
  redirect: "RedirectIcon",
  undo: "UndoIcon",
  reply: "ReplyIcon",
  sync: "SyncIcon",
  upload: "UploadIcon",
  download: "DownloadIcon",
  back: "BackIcon",
  proceed: "ProceedIcon",
  refresh: "RefreshIcon",
  globe: "GlobeIcon",
  compass: "CompassIcon",
  location: "LocationIcon",
  pin: "PinIcon",
  time: "TimeIcon",
  dashboard: "DashboardIcon",
  timer: "TimerIcon",
  home: "HomeIcon",
  admin: "AdminIcon",
  info: "InfoIcon",
  question: "QuestionIcon",
  support: "SupportIcon",
  alert: "AlertIcon",
  email: "EmailIcon",
  phone: "PhoneIcon",
  link: "LinkIcon",
  unlink: "LinkBrokenIcon",
  bell: "BellIcon",
  rss: "RSSIcon",
  sharealt: "ShareAltIcon",
  share: "ShareIcon",
  circle: "CircleIcon",
  circlehollow: "CircleHollowIcon",
  bookmarkhollow: "BookmarkHollowIcon",
  bookmark: "BookmarkIcon",
  hearthollow: "HeartHollowIcon",
  heart: "HeartIcon",
  starhollow: "StarHollowIcon",
  star: "StarIcon",
  certificate: "CertificateIcon",
  verified: "VerifiedIcon",
  thumbsup: "ThumbsUpIcon",
  shield: "ShieldIcon",
  basket: "BasketIcon",
  beaker: "BeakerIcon",
  hourglass: "HourglassIcon",
  flag: "FlagIcon",
  cloudhollow: "CloudHollowIcon",
  edit: "EditIcon",
  cog: "CogIcon",
  nut: "NutIcon",
  wrench: "WrenchIcon",
  ellipsis: "EllipsisIcon",
  check: "CheckIcon",
  form: "FormIcon",
  batchdeny: "BatchDenyIcon",
  batchaccept: "BatchAcceptIcon",
  controls: "ControlsIcon",
  plus: "PlusIcon",
  closeAlt: "CloseAltIcon",
  cross: "CrossIcon",
  trash: "TrashIcon",
  pinalt: "PinAltIcon",
  unpin: "UnpinIcon",
  add: "AddIcon",
  subtract: "SubtractIcon",
  close: "CloseIcon",
  delete: "DeleteIcon",
  passed: "PassedIcon",
  changed: "ChangedIcon",
  failed: "FailedIcon",
  clear: "ClearIcon",
  comment: "CommentIcon",
  commentadd: "CommentAddIcon",
  requestchange: "RequestChangeIcon",
  comments: "CommentsIcon",
  lock: "LockIcon",
  unlock: "UnlockIcon",
  key: "KeyIcon",
  outbox: "OutboxIcon",
  credit: "CreditIcon",
  button: "ButtonIcon",
  type: "TypeIcon",
  pointerdefault: "PointerDefaultIcon",
  pointerhand: "PointerHandIcon",
  browser: "BrowserIcon",
  tablet: "TabletIcon",
  mobile: "MobileIcon",
  watch: "WatchIcon",
  sidebar: "SidebarIcon",
  sidebaralt: "SidebarAltIcon",
  sidebaralttoggle: "SidebarAltToggleIcon",
  sidebartoggle: "SidebarToggleIcon",
  bottombar: "BottomBarIcon",
  bottombartoggle: "BottomBarToggleIcon",
  cpu: "CPUIcon",
  database: "DatabaseIcon",
  memory: "MemoryIcon",
  structure: "StructureIcon",
  box: "BoxIcon",
  power: "PowerIcon",
  photo: "PhotoIcon",
  component: "ComponentIcon",
  grid: "GridIcon",
  outline: "OutlineIcon",
  photodrag: "PhotoDragIcon",
  search: "SearchIcon",
  zoom: "ZoomIcon",
  zoomout: "ZoomOutIcon",
  zoomreset: "ZoomResetIcon",
  eye: "EyeIcon",
  eyeclose: "EyeCloseIcon",
  lightning: "LightningIcon",
  lightningoff: "LightningOffIcon",
  contrast: "ContrastIcon",
  switchalt: "SwitchAltIcon",
  mirror: "MirrorIcon",
  grow: "GrowIcon",
  paintbrush: "PaintBrushIcon",
  ruler: "RulerIcon",
  stop: "StopIcon",
  camera: "CameraIcon",
  video: "VideoIcon",
  speaker: "SpeakerIcon",
  play: "PlayIcon",
  playback: "PlayBackIcon",
  playnext: "PlayNextIcon",
  rewind: "RewindIcon",
  fastforward: "FastForwardIcon",
  stopalt: "StopAltIcon",
  sidebyside: "SideBySideIcon",
  stacked: "StackedIcon",
  sun: "SunIcon",
  moon: "MoonIcon",
  book: "BookIcon",
  document: "DocumentIcon",
  copy: "CopyIcon",
  category: "CategoryIcon",
  folder: "FolderIcon",
  print: "PrintIcon",
  graphline: "GraphLineIcon",
  calendar: "CalendarIcon",
  graphbar: "GraphBarIcon",
  menu: "MenuIcon",
  menualt: "MenuIcon",
  filter: "FilterIcon",
  docchart: "DocChartIcon",
  doclist: "DocListIcon",
  markup: "MarkupIcon",
  bold: "BoldIcon",
  paperclip: "PaperClipIcon",
  listordered: "ListOrderedIcon",
  listunordered: "ListUnorderedIcon",
  paragraph: "ParagraphIcon",
  markdown: "MarkdownIcon",
  repository: "RepoIcon",
  commit: "CommitIcon",
  branch: "BranchIcon",
  pullrequest: "PullRequestIcon",
  merge: "MergeIcon",
  apple: "AppleIcon",
  linux: "LinuxIcon",
  ubuntu: "UbuntuIcon",
  windows: "WindowsIcon",
  storybook: "StorybookIcon",
  azuredevops: "AzureDevOpsIcon",
  bitbucket: "BitbucketIcon",
  chrome: "ChromeIcon",
  chromatic: "ChromaticIcon",
  componentdriven: "ComponentDrivenIcon",
  discord: "DiscordIcon",
  facebook: "FacebookIcon",
  figma: "FigmaIcon",
  gdrive: "GDriveIcon",
  github: "GithubIcon",
  gitlab: "GitlabIcon",
  google: "GoogleIcon",
  graphql: "GraphqlIcon",
  medium: "MediumIcon",
  redux: "ReduxIcon",
  twitter: "TwitterIcon",
  youtube: "YoutubeIcon",
  vscode: "VSCodeIcon"
};
var MI = a2(({ alt: e6, ...t }) => import_react62.default.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...t, role: "img" }, e6 ? import_react62.default.createElement("title", null, e6) : null, import_react62.default.createElement("defs", null, import_react62.default.createElement(
  "path",
  {
    d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
    id: "a"
  }
)), import_react62.default.createElement("g", { fill: "none", fillRule: "evenodd" }, import_react62.default.createElement(
  "path",
  {
    d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
    fill: "currentColor"
  }
), import_react62.default.createElement("mask", { id: "b", fill: "#fff" }, import_react62.default.createElement("use", { xlinkHref: "#a" })), import_react62.default.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), import_react62.default.createElement(
  "path",
  {
    d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
    fill: "#FFF",
    fillRule: "nonzero",
    mask: "url(#b)"
  }
))), "StorybookLogo");
var _I = a2((e6) => import_react63.default.createElement("svg", { viewBox: "0 0 64 64", ...e6 }, import_react63.default.createElement("title", null, "Storybook icon"), import_react63.default.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, import_react63.default.createElement(
  "path",
  {
    d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
    id: "path-1",
    fill: "#FF4785",
    fillRule: "nonzero"
  }
), import_react63.default.createElement(
  "path",
  {
    d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
    id: "path9_fill-path",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }
), import_react63.default.createElement(
  "path",
  {
    d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
    id: "Path",
    fill: "#FFFFFF"
  }
))), "StorybookIcon");
var Tv = be`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var PI = Tr.div(({ size: e6 = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(e6 / 2),
  marginLeft: -(e6 / 2),
  height: e6,
  width: e6,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${Tv} 0.7s linear infinite`,
  mixBlendMode: "difference"
}));
var Lv = Tr.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
});
var zI = Tr.div(({ theme: e6 }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: be2(0.8, e6.color.secondary),
  overflow: "hidden",
  cursor: "progress"
}));
var OI = Tr.div(({ theme: e6 }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: e6.color.secondary
}));
var Bv = Tr.div(({ theme: e6 }) => ({
  minHeight: "2em",
  fontSize: `${e6.typography.size.s1}px`,
  color: e6.barTextColor
}));
var NI = Tr(Au)(({ theme: e6 }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: e6.textMutedColor
}));
var jI = be`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`;
var VI = Tr.span({
  "&::after": {
    content: "'...'",
    animation: `${jI} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
});
var qI = a2(({ progress: e6, error: t, size: r, ...n }) => {
  if (t)
    return import_react64.default.createElement(Lv, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, import_react64.default.createElement(NI, null), import_react64.default.createElement(Bv, null, t.message));
  if (e6) {
    let { value: o, modules: i } = e6, { message: l } = e6;
    return i && (l += ` ${i.complete} / ${i.total} modules`), import_react64.default.createElement(
      Lv,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": o * 100,
        "aria-valuetext": l,
        role: "progressbar",
        ...n
      },
      import_react64.default.createElement(zI, null, import_react64.default.createElement(OI, { style: { width: `${o * 100}%` } })),
      import_react64.default.createElement(Bv, null, l, o < 1 && import_react64.default.createElement(VI, { key: l }))
    );
  }
  return import_react64.default.createElement(
    PI,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...n
    }
  );
}, "Loader");
function WI(e6) {
  let t = {}, r = e6.split("&");
  for (let n = 0; n < r.length; n++) {
    let o = r[n].split("=");
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }
  return t;
}
a2(WI, "parseQuery");
var UI = a2((e6, t, r = {}) => {
  let [n, o] = e6.split("?"), i = o ? {
    ...WI(o),
    ...r,
    id: t
  } : {
    ...r,
    id: t
  };
  return `${n}?${Object.entries(i).map((l) => `${l[0]}=${l[1]}`).join("&")}`;
}, "getStoryHref");
var KI = Tr.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${g.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${H.fonts.mono};
  font-size: ${H.size.s2 - 1}px;
`;
var ZI = a2(({ code: e6, ...t }) => import_react65.default.createElement(KI, { id: "clipboard-code", ...t }, e6), "ClipboardCode");
var uJ = Ru;
var eM = {};
Object.keys(Ru).forEach((e6) => {
  eM[e6] = (0, import_react19.forwardRef)((t, r) => (0, import_react19.createElement)(e6, { ...t, ref: r }));
});

export {
  Mt,
  jt,
  Tr,
  Ne,
  zr,
  pc,
  gc,
  Xs,
  gn2 as gn,
  au,
  ee2 as ee,
  At2 as At,
  j4 as j,
  os,
  as,
  lu,
  su,
  uu,
  cu,
  pu,
  du,
  fu,
  hu,
  mu,
  gu,
  vu,
  bu2 as bu,
  wu,
  yu,
  Du,
  xu,
  Cu,
  Eu,
  Su,
  z5,
  Dw,
  Bu,
  HD,
  _m,
  Ao2 as Ao,
  Dl,
  CT,
  FT,
  IT,
  qT,
  JT,
  wL,
  gB,
  bB,
  EB,
  FB,
  u1,
  p1,
  tn2 as tn,
  XB,
  m1,
  Ol,
  b1,
  D1,
  gI,
  x1,
  w1,
  C1,
  wI,
  SI,
  BI,
  II,
  Wl,
  MI,
  _I,
  qI,
  UI,
  ZI,
  uJ,
  eM
};
//# sourceMappingURL=chunk-Z2TXJYCM.js.map
