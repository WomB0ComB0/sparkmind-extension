import {
  __commonJS as __commonJS2,
  __toESM as __toESM2,
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronSmallDownIcon,
  ChevronSmallUpIcon,
  DocumentIcon,
  EyeCloseIcon,
  EyeIcon,
  getControlId,
  getControlSetterButtonId,
  LinkIcon,
  require_isSymbol,
  SubtractIcon,
  UndoIcon,
  VideoIcon,
  ZoomIcon,
  ZoomOutIcon,
  ZoomResetIcon
} from "./chunk-E2Q2WZ2I.js"
import {
  _m,
  Ao,
  At,
  b1,
  bB,
  Bu,
  Dl,
  du,
  ee,
  gc,
  j,
  JT,
  jt,
  lu,
  Mt,
  Ne,
  Ol,
  pc,
  pu,
  qI,
  qT,
  Tr,
  UI,
  uJ,
  w1,
  wL,
  Xs,
  z5,
  zr
} from "./chunk-SHF2D5Q7.js"

import "./chunk-EGRHWZRV.js"

import { dedent } from "./chunk-7L5JYPT4.js"
import { _extends } from "./chunk-ABAWMZYH.js"
import { require_global } from "./chunk-CYHXIIKI.js"
import { P } from "./chunk-FAY27ZE3.js"
import { require_core_events } from "./chunk-JAV3BEES.js"
import { require_preview_api } from "./chunk-JQ2GWK6M.js"
import { renderElement, unmountElement } from "./chunk-JWMAGIS2.js"
import {
  require_baseGetTag,
  require_freeGlobal,
  require_isObject,
  require_isObjectLike,
  require_root,
  require_Symbol
} from "./chunk-M2SMWPXR.js"
import { require_client_logger } from "./chunk-UHU3NK7Q.js"
import {
  eP,
  require_getPrototype,
  require_isArray,
  require_isFunction,
  require_overArg,
  sT
} from "./chunk-ZW6SQOMU.js"

import "./chunk-GDNJB6U6.js"
import "./chunk-YGZ2ZWFG.js"

import { __commonJS, __require, __toESM } from "./chunk-LK32TJAX.js"
import { require_react } from "./chunk-VMU3GUP3.js"

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayMap.js"(
    exports,
    module
  ) {
    function arrayMap2(array2, iteratee) {
      var index = -1,
        length = array2 == null ? 0 : array2.length,
        result2 = Array(length)
      while (++index < length) {
        result2[index] = iteratee(array2[index], index, array2)
      }
      return result2
    }
    module.exports = arrayMap2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheClear.js"(
    exports,
    module
  ) {
    function listCacheClear2() {
      this.__data__ = []
      this.size = 0
    }
    module.exports = listCacheClear2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/eq.js"(
    exports,
    module
  ) {
    function eq2(value3, other) {
      return value3 === other || (value3 !== value3 && other !== other)
    }
    module.exports = eq2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assocIndexOf.js"(
    exports,
    module
  ) {
    var eq2 = require_eq()
    function assocIndexOf2(array2, key2) {
      var length = array2.length
      while (length--) {
        if (eq2(array2[length][0], key2)) {
          return length
        }
      }
      return -1
    }
    module.exports = assocIndexOf2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheDelete.js"(
    exports,
    module
  ) {
    var assocIndexOf2 = require_assocIndexOf()
    var arrayProto2 = Array.prototype
    var splice2 = arrayProto2.splice
    function listCacheDelete2(key2) {
      var data = this.__data__,
        index = assocIndexOf2(data, key2)
      if (index < 0) {
        return false
      }
      var lastIndex = data.length - 1
      if (index == lastIndex) {
        data.pop()
      } else {
        splice2.call(data, index, 1)
      }
      --this.size
      return true
    }
    module.exports = listCacheDelete2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheGet.js"(
    exports,
    module
  ) {
    var assocIndexOf2 = require_assocIndexOf()
    function listCacheGet2(key2) {
      var data = this.__data__,
        index = assocIndexOf2(data, key2)
      return index < 0 ? void 0 : data[index][1]
    }
    module.exports = listCacheGet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheHas.js"(
    exports,
    module
  ) {
    var assocIndexOf2 = require_assocIndexOf()
    function listCacheHas2(key2) {
      return assocIndexOf2(this.__data__, key2) > -1
    }
    module.exports = listCacheHas2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_listCacheSet.js"(
    exports,
    module
  ) {
    var assocIndexOf2 = require_assocIndexOf()
    function listCacheSet2(key2, value3) {
      var data = this.__data__,
        index = assocIndexOf2(data, key2)
      if (index < 0) {
        ++this.size
        data.push([key2, value3])
      } else {
        data[index][1] = value3
      }
      return this
    }
    module.exports = listCacheSet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_ListCache.js"(
    exports,
    module
  ) {
    var listCacheClear2 = require_listCacheClear()
    var listCacheDelete2 = require_listCacheDelete()
    var listCacheGet2 = require_listCacheGet()
    var listCacheHas2 = require_listCacheHas()
    var listCacheSet2 = require_listCacheSet()
    function ListCache2(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length
      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
    ListCache2.prototype.clear = listCacheClear2
    ListCache2.prototype["delete"] = listCacheDelete2
    ListCache2.prototype.get = listCacheGet2
    ListCache2.prototype.has = listCacheHas2
    ListCache2.prototype.set = listCacheSet2
    module.exports = ListCache2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackClear.js"(
    exports,
    module
  ) {
    var ListCache2 = require_ListCache()
    function stackClear() {
      this.__data__ = new ListCache2()
      this.size = 0
    }
    module.exports = stackClear
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackDelete.js"(
    exports,
    module
  ) {
    function stackDelete(key2) {
      var data = this.__data__,
        result2 = data["delete"](key2)
      this.size = data.size
      return result2
    }
    module.exports = stackDelete
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackGet.js"(
    exports,
    module
  ) {
    function stackGet(key2) {
      return this.__data__.get(key2)
    }
    module.exports = stackGet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackHas.js"(
    exports,
    module
  ) {
    function stackHas(key2) {
      return this.__data__.has(key2)
    }
    module.exports = stackHas
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_coreJsData.js"(
    exports,
    module
  ) {
    var root3 = require_root()
    var coreJsData2 = root3["__core-js_shared__"]
    module.exports = coreJsData2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isMasked.js"(
    exports,
    module
  ) {
    var coreJsData2 = require_coreJsData()
    var maskSrcKey2 = (function () {
      var uid = /[^.]+$/.exec(
        (coreJsData2 && coreJsData2.keys && coreJsData2.keys.IE_PROTO) || ""
      )
      return uid ? "Symbol(src)_1." + uid : ""
    })()
    function isMasked2(func) {
      return !!maskSrcKey2 && maskSrcKey2 in func
    }
    module.exports = isMasked2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toSource.js"(
    exports,
    module
  ) {
    var funcProto3 = Function.prototype
    var funcToString3 = funcProto3.toString
    function toSource2(func) {
      if (func != null) {
        try {
          return funcToString3.call(func)
        } catch (e2) {}
        try {
          return func + ""
        } catch (e2) {}
      }
      return ""
    }
    module.exports = toSource2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNative.js"(
    exports,
    module
  ) {
    var isFunction2 = require_isFunction()
    var isMasked2 = require_isMasked()
    var isObject4 = require_isObject()
    var toSource2 = require_toSource()
    var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g
    var reIsHostCtor2 = /^\[object .+?Constructor\]$/
    var funcProto3 = Function.prototype
    var objectProto6 = Object.prototype
    var funcToString3 = funcProto3.toString
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    var reIsNative2 = RegExp(
      "^" +
        funcToString3
          .call(hasOwnProperty5)
          .replace(reRegExpChar2, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    )
    function baseIsNative2(value3) {
      if (!isObject4(value3) || isMasked2(value3)) {
        return false
      }
      var pattern = isFunction2(value3) ? reIsNative2 : reIsHostCtor2
      return pattern.test(toSource2(value3))
    }
    module.exports = baseIsNative2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getValue.js"(
    exports,
    module
  ) {
    function getValue2(object2, key2) {
      return object2 == null ? void 0 : object2[key2]
    }
    module.exports = getValue2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getNative.js"(
    exports,
    module
  ) {
    var baseIsNative2 = require_baseIsNative()
    var getValue2 = require_getValue()
    function getNative2(object2, key2) {
      var value3 = getValue2(object2, key2)
      return baseIsNative2(value3) ? value3 : void 0
    }
    module.exports = getNative2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Map.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var root3 = require_root()
    var Map3 = getNative2(root3, "Map")
    module.exports = Map3
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeCreate.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var nativeCreate2 = getNative2(Object, "create")
    module.exports = nativeCreate2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashClear.js"(
    exports,
    module
  ) {
    var nativeCreate2 = require_nativeCreate()
    function hashClear2() {
      this.__data__ = nativeCreate2 ? nativeCreate2(null) : {}
      this.size = 0
    }
    module.exports = hashClear2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashDelete.js"(
    exports,
    module
  ) {
    function hashDelete2(key2) {
      var result2 = this.has(key2) && delete this.__data__[key2]
      this.size -= result2 ? 1 : 0
      return result2
    }
    module.exports = hashDelete2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashGet.js"(
    exports,
    module
  ) {
    var nativeCreate2 = require_nativeCreate()
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__"
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function hashGet2(key2) {
      var data = this.__data__
      if (nativeCreate2) {
        var result2 = data[key2]
        return result2 === HASH_UNDEFINED3 ? void 0 : result2
      }
      return hasOwnProperty5.call(data, key2) ? data[key2] : void 0
    }
    module.exports = hashGet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashHas.js"(
    exports,
    module
  ) {
    var nativeCreate2 = require_nativeCreate()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function hashHas2(key2) {
      var data = this.__data__
      return nativeCreate2
        ? data[key2] !== void 0
        : hasOwnProperty5.call(data, key2)
    }
    module.exports = hashHas2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hashSet.js"(
    exports,
    module
  ) {
    var nativeCreate2 = require_nativeCreate()
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__"
    function hashSet2(key2, value3) {
      var data = this.__data__
      this.size += this.has(key2) ? 0 : 1
      data[key2] = nativeCreate2 && value3 === void 0 ? HASH_UNDEFINED3 : value3
      return this
    }
    module.exports = hashSet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Hash.js"(
    exports,
    module
  ) {
    var hashClear2 = require_hashClear()
    var hashDelete2 = require_hashDelete()
    var hashGet2 = require_hashGet()
    var hashHas2 = require_hashHas()
    var hashSet2 = require_hashSet()
    function Hash2(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length
      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
    Hash2.prototype.clear = hashClear2
    Hash2.prototype["delete"] = hashDelete2
    Hash2.prototype.get = hashGet2
    Hash2.prototype.has = hashHas2
    Hash2.prototype.set = hashSet2
    module.exports = Hash2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheClear.js"(
    exports,
    module
  ) {
    var Hash2 = require_Hash()
    var ListCache2 = require_ListCache()
    var Map3 = require_Map()
    function mapCacheClear2() {
      this.size = 0
      this.__data__ = {
        hash: new Hash2(),
        map: new (Map3 || ListCache2)(),
        string: new Hash2()
      }
    }
    module.exports = mapCacheClear2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKeyable.js"(
    exports,
    module
  ) {
    function isKeyable2(value3) {
      var type = typeof value3
      return type == "string" ||
        type == "number" ||
        type == "symbol" ||
        type == "boolean"
        ? value3 !== "__proto__"
        : value3 === null
    }
    module.exports = isKeyable2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMapData.js"(
    exports,
    module
  ) {
    var isKeyable2 = require_isKeyable()
    function getMapData2(map, key2) {
      var data = map.__data__
      return isKeyable2(key2)
        ? data[typeof key2 == "string" ? "string" : "hash"]
        : data.map
    }
    module.exports = getMapData2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheDelete.js"(
    exports,
    module
  ) {
    var getMapData2 = require_getMapData()
    function mapCacheDelete2(key2) {
      var result2 = getMapData2(this, key2)["delete"](key2)
      this.size -= result2 ? 1 : 0
      return result2
    }
    module.exports = mapCacheDelete2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheGet.js"(
    exports,
    module
  ) {
    var getMapData2 = require_getMapData()
    function mapCacheGet2(key2) {
      return getMapData2(this, key2).get(key2)
    }
    module.exports = mapCacheGet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheHas.js"(
    exports,
    module
  ) {
    var getMapData2 = require_getMapData()
    function mapCacheHas2(key2) {
      return getMapData2(this, key2).has(key2)
    }
    module.exports = mapCacheHas2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapCacheSet.js"(
    exports,
    module
  ) {
    var getMapData2 = require_getMapData()
    function mapCacheSet2(key2, value3) {
      var data = getMapData2(this, key2),
        size = data.size
      data.set(key2, value3)
      this.size += data.size == size ? 0 : 1
      return this
    }
    module.exports = mapCacheSet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_MapCache.js"(
    exports,
    module
  ) {
    var mapCacheClear2 = require_mapCacheClear()
    var mapCacheDelete2 = require_mapCacheDelete()
    var mapCacheGet2 = require_mapCacheGet()
    var mapCacheHas2 = require_mapCacheHas()
    var mapCacheSet2 = require_mapCacheSet()
    function MapCache2(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length
      this.clear()
      while (++index < length) {
        var entry = entries[index]
        this.set(entry[0], entry[1])
      }
    }
    MapCache2.prototype.clear = mapCacheClear2
    MapCache2.prototype["delete"] = mapCacheDelete2
    MapCache2.prototype.get = mapCacheGet2
    MapCache2.prototype.has = mapCacheHas2
    MapCache2.prototype.set = mapCacheSet2
    module.exports = MapCache2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stackSet.js"(
    exports,
    module
  ) {
    var ListCache2 = require_ListCache()
    var Map3 = require_Map()
    var MapCache2 = require_MapCache()
    var LARGE_ARRAY_SIZE = 200
    function stackSet(key2, value3) {
      var data = this.__data__
      if (data instanceof ListCache2) {
        var pairs = data.__data__
        if (!Map3 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key2, value3])
          this.size = ++data.size
          return this
        }
        data = this.__data__ = new MapCache2(pairs)
      }
      data.set(key2, value3)
      this.size = data.size
      return this
    }
    module.exports = stackSet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Stack.js"(
    exports,
    module
  ) {
    var ListCache2 = require_ListCache()
    var stackClear = require_stackClear()
    var stackDelete = require_stackDelete()
    var stackGet = require_stackGet()
    var stackHas = require_stackHas()
    var stackSet = require_stackSet()
    function Stack(entries) {
      var data = (this.__data__ = new ListCache2(entries))
      this.size = data.size
    }
    Stack.prototype.clear = stackClear
    Stack.prototype["delete"] = stackDelete
    Stack.prototype.get = stackGet
    Stack.prototype.has = stackHas
    Stack.prototype.set = stackSet
    module.exports = Stack
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheAdd.js"(
    exports,
    module
  ) {
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__"
    function setCacheAdd(value3) {
      this.__data__.set(value3, HASH_UNDEFINED3)
      return this
    }
    module.exports = setCacheAdd
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setCacheHas.js"(
    exports,
    module
  ) {
    function setCacheHas(value3) {
      return this.__data__.has(value3)
    }
    module.exports = setCacheHas
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_SetCache.js"(
    exports,
    module
  ) {
    var MapCache2 = require_MapCache()
    var setCacheAdd = require_setCacheAdd()
    var setCacheHas = require_setCacheHas()
    function SetCache(values) {
      var index = -1,
        length = values == null ? 0 : values.length
      this.__data__ = new MapCache2()
      while (++index < length) {
        this.add(values[index])
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
    SetCache.prototype.has = setCacheHas
    module.exports = SetCache
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arraySome.js"(
    exports,
    module
  ) {
    function arraySome(array2, predicate) {
      var index = -1,
        length = array2 == null ? 0 : array2.length
      while (++index < length) {
        if (predicate(array2[index], index, array2)) {
          return true
        }
      }
      return false
    }
    module.exports = arraySome
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cacheHas.js"(
    exports,
    module
  ) {
    function cacheHas(cache, key2) {
      return cache.has(key2)
    }
    module.exports = cacheHas
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalArrays.js"(
    exports,
    module
  ) {
    var SetCache = require_SetCache()
    var arraySome = require_arraySome()
    var cacheHas = require_cacheHas()
    var COMPARE_PARTIAL_FLAG = 1
    var COMPARE_UNORDERED_FLAG = 2
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        arrLength = array2.length,
        othLength = other.length
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false
      }
      var arrStacked = stack.get(array2)
      var othStacked = stack.get(other)
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array2
      }
      var index = -1,
        result2 = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0
      stack.set(array2, other)
      stack.set(other, array2)
      while (++index < arrLength) {
        var arrValue = array2[index],
          othValue = other[index]
        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array2, stack)
            : customizer(arrValue, othValue, index, array2, other, stack)
        }
        if (compared !== void 0) {
          if (compared) {
            continue
          }
          result2 = false
          break
        }
        if (seen) {
          if (
            !arraySome(other, function (othValue2, othIndex) {
              if (
                !cacheHas(seen, othIndex) &&
                (arrValue === othValue2 ||
                  equalFunc(arrValue, othValue2, bitmask, customizer, stack))
              ) {
                return seen.push(othIndex)
              }
            })
          ) {
            result2 = false
            break
          }
        } else if (
          !(
            arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
          )
        ) {
          result2 = false
          break
        }
      }
      stack["delete"](array2)
      stack["delete"](other)
      return result2
    }
    module.exports = equalArrays
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Uint8Array.js"(
    exports,
    module
  ) {
    var root3 = require_root()
    var Uint8Array2 = root3.Uint8Array
    module.exports = Uint8Array2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_mapToArray.js"(
    exports,
    module
  ) {
    function mapToArray(map) {
      var index = -1,
        result2 = Array(map.size)
      map.forEach(function (value3, key2) {
        result2[++index] = [key2, value3]
      })
      return result2
    }
    module.exports = mapToArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_setToArray.js"(
    exports,
    module
  ) {
    function setToArray(set) {
      var index = -1,
        result2 = Array(set.size)
      set.forEach(function (value3) {
        result2[++index] = value3
      })
      return result2
    }
    module.exports = setToArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalByTag.js"(
    exports,
    module
  ) {
    var Symbol3 = require_Symbol()
    var Uint8Array2 = require_Uint8Array()
    var eq2 = require_eq()
    var equalArrays = require_equalArrays()
    var mapToArray = require_mapToArray()
    var setToArray = require_setToArray()
    var COMPARE_PARTIAL_FLAG = 1
    var COMPARE_UNORDERED_FLAG = 2
    var boolTag = "[object Boolean]"
    var dateTag = "[object Date]"
    var errorTag = "[object Error]"
    var mapTag = "[object Map]"
    var numberTag = "[object Number]"
    var regexpTag = "[object RegExp]"
    var setTag = "[object Set]"
    var stringTag = "[object String]"
    var symbolTag2 = "[object Symbol]"
    var arrayBufferTag = "[object ArrayBuffer]"
    var dataViewTag = "[object DataView]"
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0
    function equalByTag(
      object2,
      other,
      tag,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      switch (tag) {
        case dataViewTag:
          if (
            object2.byteLength != other.byteLength ||
            object2.byteOffset != other.byteOffset
          ) {
            return false
          }
          object2 = object2.buffer
          other = other.buffer
        case arrayBufferTag:
          if (
            object2.byteLength != other.byteLength ||
            !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))
          ) {
            return false
          }
          return true
        case boolTag:
        case dateTag:
        case numberTag:
          return eq2(+object2, +other)
        case errorTag:
          return object2.name == other.name && object2.message == other.message
        case regexpTag:
        case stringTag:
          return object2 == other + ""
        case mapTag:
          var convert = mapToArray
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG
          convert || (convert = setToArray)
          if (object2.size != other.size && !isPartial) {
            return false
          }
          var stacked = stack.get(object2)
          if (stacked) {
            return stacked == other
          }
          bitmask |= COMPARE_UNORDERED_FLAG
          stack.set(object2, other)
          var result2 = equalArrays(
            convert(object2),
            convert(other),
            bitmask,
            customizer,
            equalFunc,
            stack
          )
          stack["delete"](object2)
          return result2
        case symbolTag2:
          if (symbolValueOf) {
            return symbolValueOf.call(object2) == symbolValueOf.call(other)
          }
      }
      return false
    }
    module.exports = equalByTag
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayPush.js"(
    exports,
    module
  ) {
    function arrayPush(array2, values) {
      var index = -1,
        length = values.length,
        offset = array2.length
      while (++index < length) {
        array2[offset + index] = values[index]
      }
      return array2
    }
    module.exports = arrayPush
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGetAllKeys.js"(
    exports,
    module
  ) {
    var arrayPush = require_arrayPush()
    var isArray2 = require_isArray()
    function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
      var result2 = keysFunc(object2)
      return isArray2(object2)
        ? result2
        : arrayPush(result2, symbolsFunc(object2))
    }
    module.exports = baseGetAllKeys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayFilter.js"(
    exports,
    module
  ) {
    function arrayFilter(array2, predicate) {
      var index = -1,
        length = array2 == null ? 0 : array2.length,
        resIndex = 0,
        result2 = []
      while (++index < length) {
        var value3 = array2[index]
        if (predicate(value3, index, array2)) {
          result2[resIndex++] = value3
        }
      }
      return result2
    }
    module.exports = arrayFilter
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubArray.js"(
    exports,
    module
  ) {
    function stubArray() {
      return []
    }
    module.exports = stubArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbols.js"(
    exports,
    module
  ) {
    var arrayFilter = require_arrayFilter()
    var stubArray = require_stubArray()
    var objectProto6 = Object.prototype
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable
    var nativeGetSymbols = Object.getOwnPropertySymbols
    var getSymbols = !nativeGetSymbols
      ? stubArray
      : function (object2) {
          if (object2 == null) {
            return []
          }
          object2 = Object(object2)
          return arrayFilter(nativeGetSymbols(object2), function (symbol) {
            return propertyIsEnumerable.call(object2, symbol)
          })
        }
    module.exports = getSymbols
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTimes.js"(
    exports,
    module
  ) {
    function baseTimes(n2, iteratee) {
      var index = -1,
        result2 = Array(n2)
      while (++index < n2) {
        result2[index] = iteratee(index)
      }
      return result2
    }
    module.exports = baseTimes
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsArguments.js"(
    exports,
    module
  ) {
    var baseGetTag2 = require_baseGetTag()
    var isObjectLike2 = require_isObjectLike()
    var argsTag = "[object Arguments]"
    function baseIsArguments(value3) {
      return isObjectLike2(value3) && baseGetTag2(value3) == argsTag
    }
    module.exports = baseIsArguments
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArguments.js"(
    exports,
    module
  ) {
    var baseIsArguments = require_baseIsArguments()
    var isObjectLike2 = require_isObjectLike()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    var propertyIsEnumerable = objectProto6.propertyIsEnumerable
    var isArguments = baseIsArguments(
      /* @__PURE__ */ (function () {
        return arguments
      })()
    )
      ? baseIsArguments
      : function (value3) {
          return (
            isObjectLike2(value3) &&
            hasOwnProperty5.call(value3, "callee") &&
            !propertyIsEnumerable.call(value3, "callee")
          )
        }
    module.exports = isArguments
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/stubFalse.js"(
    exports,
    module
  ) {
    function stubFalse() {
      return false
    }
    module.exports = stubFalse
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isBuffer.js"(
    exports,
    module
  ) {
    var root3 = require_root()
    var stubFalse = require_stubFalse()
    var freeExports =
      typeof exports == "object" && exports && !exports.nodeType && exports
    var freeModule =
      freeExports &&
      typeof module == "object" &&
      module &&
      !module.nodeType &&
      module
    var moduleExports = freeModule && freeModule.exports === freeExports
    var Buffer = moduleExports ? root3.Buffer : void 0
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0
    var isBuffer = nativeIsBuffer || stubFalse
    module.exports = isBuffer
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isIndex.js"(
    exports,
    module
  ) {
    var MAX_SAFE_INTEGER = 9007199254740991
    var reIsUint = /^(?:0|[1-9]\d*)$/
    function isIndex(value3, length) {
      var type = typeof value3
      length = length == null ? MAX_SAFE_INTEGER : length
      return (
        !!length &&
        (type == "number" || (type != "symbol" && reIsUint.test(value3))) &&
        value3 > -1 &&
        value3 % 1 == 0 &&
        value3 < length
      )
    }
    module.exports = isIndex
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isLength.js"(
    exports,
    module
  ) {
    var MAX_SAFE_INTEGER = 9007199254740991
    function isLength(value3) {
      return (
        typeof value3 == "number" &&
        value3 > -1 &&
        value3 % 1 == 0 &&
        value3 <= MAX_SAFE_INTEGER
      )
    }
    module.exports = isLength
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsTypedArray.js"(
    exports,
    module
  ) {
    var baseGetTag2 = require_baseGetTag()
    var isLength = require_isLength()
    var isObjectLike2 = require_isObjectLike()
    var argsTag = "[object Arguments]"
    var arrayTag = "[object Array]"
    var boolTag = "[object Boolean]"
    var dateTag = "[object Date]"
    var errorTag = "[object Error]"
    var funcTag2 = "[object Function]"
    var mapTag = "[object Map]"
    var numberTag = "[object Number]"
    var objectTag = "[object Object]"
    var regexpTag = "[object RegExp]"
    var setTag = "[object Set]"
    var stringTag = "[object String]"
    var weakMapTag = "[object WeakMap]"
    var arrayBufferTag = "[object ArrayBuffer]"
    var dataViewTag = "[object DataView]"
    var float32Tag = "[object Float32Array]"
    var float64Tag = "[object Float64Array]"
    var int8Tag = "[object Int8Array]"
    var int16Tag = "[object Int16Array]"
    var int32Tag = "[object Int32Array]"
    var uint8Tag = "[object Uint8Array]"
    var uint8ClampedTag = "[object Uint8ClampedArray]"
    var uint16Tag = "[object Uint16Array]"
    var uint32Tag = "[object Uint32Array]"
    var typedArrayTags = {}
    typedArrayTags[float32Tag] =
      typedArrayTags[float64Tag] =
      typedArrayTags[int8Tag] =
      typedArrayTags[int16Tag] =
      typedArrayTags[int32Tag] =
      typedArrayTags[uint8Tag] =
      typedArrayTags[uint8ClampedTag] =
      typedArrayTags[uint16Tag] =
      typedArrayTags[uint32Tag] =
        true
    typedArrayTags[argsTag] =
      typedArrayTags[arrayTag] =
      typedArrayTags[arrayBufferTag] =
      typedArrayTags[boolTag] =
      typedArrayTags[dataViewTag] =
      typedArrayTags[dateTag] =
      typedArrayTags[errorTag] =
      typedArrayTags[funcTag2] =
      typedArrayTags[mapTag] =
      typedArrayTags[numberTag] =
      typedArrayTags[objectTag] =
      typedArrayTags[regexpTag] =
      typedArrayTags[setTag] =
      typedArrayTags[stringTag] =
      typedArrayTags[weakMapTag] =
        false
    function baseIsTypedArray(value3) {
      return (
        isObjectLike2(value3) &&
        isLength(value3.length) &&
        !!typedArrayTags[baseGetTag2(value3)]
      )
    }
    module.exports = baseIsTypedArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUnary.js"(
    exports,
    module
  ) {
    function baseUnary(func) {
      return function (value3) {
        return func(value3)
      }
    }
    module.exports = baseUnary
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nodeUtil.js"(
    exports,
    module
  ) {
    var freeGlobal2 = require_freeGlobal()
    var freeExports =
      typeof exports == "object" && exports && !exports.nodeType && exports
    var freeModule =
      freeExports &&
      typeof module == "object" &&
      module &&
      !module.nodeType &&
      module
    var moduleExports = freeModule && freeModule.exports === freeExports
    var freeProcess = moduleExports && freeGlobal2.process
    var nodeUtil = (function () {
      try {
        var types =
          freeModule && freeModule.require && freeModule.require("util").types
        if (types) {
          return types
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util")
      } catch (e2) {}
    })()
    module.exports = nodeUtil
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isTypedArray.js"(
    exports,
    module
  ) {
    var baseIsTypedArray = require_baseIsTypedArray()
    var baseUnary = require_baseUnary()
    var nodeUtil = require_nodeUtil()
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray
    var isTypedArray = nodeIsTypedArray
      ? baseUnary(nodeIsTypedArray)
      : baseIsTypedArray
    module.exports = isTypedArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayLikeKeys.js"(
    exports,
    module
  ) {
    var baseTimes = require_baseTimes()
    var isArguments = require_isArguments()
    var isArray2 = require_isArray()
    var isBuffer = require_isBuffer()
    var isIndex = require_isIndex()
    var isTypedArray = require_isTypedArray()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function arrayLikeKeys(value3, inherited) {
      var isArr = isArray2(value3),
        isArg = !isArr && isArguments(value3),
        isBuff = !isArr && !isArg && isBuffer(value3),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value3),
        skipIndexes = isArr || isArg || isBuff || isType,
        result2 = skipIndexes ? baseTimes(value3.length, String) : [],
        length = result2.length
      for (var key2 in value3) {
        if (
          (inherited || hasOwnProperty5.call(value3, key2)) &&
          !(
            skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key2 == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
              (isBuff && (key2 == "offset" || key2 == "parent")) || // PhantomJS 2 has enumerable non-index properties on typed arrays.
              (isType &&
                (key2 == "buffer" ||
                  key2 == "byteLength" ||
                  key2 == "byteOffset")) || // Skip index properties.
              isIndex(key2, length))
          )
        ) {
          result2.push(key2)
        }
      }
      return result2
    }
    module.exports = arrayLikeKeys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isPrototype.js"(
    exports,
    module
  ) {
    var objectProto6 = Object.prototype
    function isPrototype(value3) {
      var Ctor = value3 && value3.constructor,
        proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto6
      return value3 === proto
    }
    module.exports = isPrototype
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeys.js"(
    exports,
    module
  ) {
    var overArg = require_overArg()
    var nativeKeys = overArg(Object.keys, Object)
    module.exports = nativeKeys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeys.js"(
    exports,
    module
  ) {
    var isPrototype = require_isPrototype()
    var nativeKeys = require_nativeKeys()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function baseKeys(object2) {
      if (!isPrototype(object2)) {
        return nativeKeys(object2)
      }
      var result2 = []
      for (var key2 in Object(object2)) {
        if (hasOwnProperty5.call(object2, key2) && key2 != "constructor") {
          result2.push(key2)
        }
      }
      return result2
    }
    module.exports = baseKeys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isArrayLike.js"(
    exports,
    module
  ) {
    var isFunction2 = require_isFunction()
    var isLength = require_isLength()
    function isArrayLike(value3) {
      return value3 != null && isLength(value3.length) && !isFunction2(value3)
    }
    module.exports = isArrayLike
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keys.js"(
    exports,
    module
  ) {
    var arrayLikeKeys = require_arrayLikeKeys()
    var baseKeys = require_baseKeys()
    var isArrayLike = require_isArrayLike()
    function keys(object2) {
      return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2)
    }
    module.exports = keys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeys.js"(
    exports,
    module
  ) {
    var baseGetAllKeys = require_baseGetAllKeys()
    var getSymbols = require_getSymbols()
    var keys = require_keys()
    function getAllKeys(object2) {
      return baseGetAllKeys(object2, keys, getSymbols)
    }
    module.exports = getAllKeys
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_equalObjects.js"(
    exports,
    module
  ) {
    var getAllKeys = require_getAllKeys()
    var COMPARE_PARTIAL_FLAG = 1
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function equalObjects(
      object2,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
        objProps = getAllKeys(object2),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length
      if (objLength != othLength && !isPartial) {
        return false
      }
      var index = objLength
      while (index--) {
        var key2 = objProps[index]
        if (!(isPartial ? key2 in other : hasOwnProperty5.call(other, key2))) {
          return false
        }
      }
      var objStacked = stack.get(object2)
      var othStacked = stack.get(other)
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object2
      }
      var result2 = true
      stack.set(object2, other)
      stack.set(other, object2)
      var skipCtor = isPartial
      while (++index < objLength) {
        key2 = objProps[index]
        var objValue = object2[key2],
          othValue = other[key2]
        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key2, other, object2, stack)
            : customizer(objValue, othValue, key2, object2, other, stack)
        }
        if (
          !(compared === void 0
            ? objValue === othValue ||
              equalFunc(objValue, othValue, bitmask, customizer, stack)
            : compared)
        ) {
          result2 = false
          break
        }
        skipCtor || (skipCtor = key2 == "constructor")
      }
      if (result2 && !skipCtor) {
        var objCtor = object2.constructor,
          othCtor = other.constructor
        if (
          objCtor != othCtor &&
          "constructor" in object2 &&
          "constructor" in other &&
          !(
            typeof objCtor == "function" &&
            objCtor instanceof objCtor &&
            typeof othCtor == "function" &&
            othCtor instanceof othCtor
          )
        ) {
          result2 = false
        }
      }
      stack["delete"](object2)
      stack["delete"](other)
      return result2
    }
    module.exports = equalObjects
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_DataView.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var root3 = require_root()
    var DataView2 = getNative2(root3, "DataView")
    module.exports = DataView2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Promise.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var root3 = require_root()
    var Promise2 = getNative2(root3, "Promise")
    module.exports = Promise2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_Set.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var root3 = require_root()
    var Set2 = getNative2(root3, "Set")
    module.exports = Set2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_WeakMap.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var root3 = require_root()
    var WeakMap2 = getNative2(root3, "WeakMap")
    module.exports = WeakMap2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getTag.js"(
    exports,
    module
  ) {
    var DataView2 = require_DataView()
    var Map3 = require_Map()
    var Promise2 = require_Promise()
    var Set2 = require_Set()
    var WeakMap2 = require_WeakMap()
    var baseGetTag2 = require_baseGetTag()
    var toSource2 = require_toSource()
    var mapTag = "[object Map]"
    var objectTag = "[object Object]"
    var promiseTag = "[object Promise]"
    var setTag = "[object Set]"
    var weakMapTag = "[object WeakMap]"
    var dataViewTag = "[object DataView]"
    var dataViewCtorString = toSource2(DataView2)
    var mapCtorString = toSource2(Map3)
    var promiseCtorString = toSource2(Promise2)
    var setCtorString = toSource2(Set2)
    var weakMapCtorString = toSource2(WeakMap2)
    var getTag = baseGetTag2
    if (
      (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag) ||
      (Map3 && getTag(new Map3()) != mapTag) ||
      (Promise2 && getTag(Promise2.resolve()) != promiseTag) ||
      (Set2 && getTag(new Set2()) != setTag) ||
      (WeakMap2 && getTag(new WeakMap2()) != weakMapTag)
    ) {
      getTag = function (value3) {
        var result2 = baseGetTag2(value3),
          Ctor = result2 == objectTag ? value3.constructor : void 0,
          ctorString = Ctor ? toSource2(Ctor) : ""
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag
            case mapCtorString:
              return mapTag
            case promiseCtorString:
              return promiseTag
            case setCtorString:
              return setTag
            case weakMapCtorString:
              return weakMapTag
          }
        }
        return result2
      }
    }
    module.exports = getTag
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqualDeep.js"(
    exports,
    module
  ) {
    var Stack = require_Stack()
    var equalArrays = require_equalArrays()
    var equalByTag = require_equalByTag()
    var equalObjects = require_equalObjects()
    var getTag = require_getTag()
    var isArray2 = require_isArray()
    var isBuffer = require_isBuffer()
    var isTypedArray = require_isTypedArray()
    var COMPARE_PARTIAL_FLAG = 1
    var argsTag = "[object Arguments]"
    var arrayTag = "[object Array]"
    var objectTag = "[object Object]"
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function baseIsEqualDeep(
      object2,
      other,
      bitmask,
      customizer,
      equalFunc,
      stack
    ) {
      var objIsArr = isArray2(object2),
        othIsArr = isArray2(other),
        objTag = objIsArr ? arrayTag : getTag(object2),
        othTag = othIsArr ? arrayTag : getTag(other)
      objTag = objTag == argsTag ? objectTag : objTag
      othTag = othTag == argsTag ? objectTag : othTag
      var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag
      if (isSameTag && isBuffer(object2)) {
        if (!isBuffer(other)) {
          return false
        }
        objIsArr = true
        objIsObj = false
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack())
        return objIsArr || isTypedArray(object2)
          ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(
              object2,
              other,
              objTag,
              bitmask,
              customizer,
              equalFunc,
              stack
            )
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped =
            objIsObj && hasOwnProperty5.call(object2, "__wrapped__"),
          othIsWrapped = othIsObj && hasOwnProperty5.call(other, "__wrapped__")
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object2.value() : object2,
            othUnwrapped = othIsWrapped ? other.value() : other
          stack || (stack = new Stack())
          return equalFunc(
            objUnwrapped,
            othUnwrapped,
            bitmask,
            customizer,
            stack
          )
        }
      }
      if (!isSameTag) {
        return false
      }
      stack || (stack = new Stack())
      return equalObjects(object2, other, bitmask, customizer, equalFunc, stack)
    }
    module.exports = baseIsEqualDeep
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsEqual.js"(
    exports,
    module
  ) {
    var baseIsEqualDeep = require_baseIsEqualDeep()
    var isObjectLike2 = require_isObjectLike()
    function baseIsEqual(value3, other, bitmask, customizer, stack) {
      if (value3 === other) {
        return true
      }
      if (
        value3 == null ||
        other == null ||
        (!isObjectLike2(value3) && !isObjectLike2(other))
      ) {
        return value3 !== value3 && other !== other
      }
      return baseIsEqualDeep(
        value3,
        other,
        bitmask,
        customizer,
        baseIsEqual,
        stack
      )
    }
    module.exports = baseIsEqual
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMatch.js"(
    exports,
    module
  ) {
    var Stack = require_Stack()
    var baseIsEqual = require_baseIsEqual()
    var COMPARE_PARTIAL_FLAG = 1
    var COMPARE_UNORDERED_FLAG = 2
    function baseIsMatch(object2, source2, matchData, customizer) {
      var index = matchData.length,
        length = index,
        noCustomizer = !customizer
      if (object2 == null) {
        return !length
      }
      object2 = Object(object2)
      while (index--) {
        var data = matchData[index]
        if (
          noCustomizer && data[2]
            ? data[1] !== object2[data[0]]
            : !(data[0] in object2)
        ) {
          return false
        }
      }
      while (++index < length) {
        data = matchData[index]
        var key2 = data[0],
          objValue = object2[key2],
          srcValue = data[1]
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key2 in object2)) {
            return false
          }
        } else {
          var stack = new Stack()
          if (customizer) {
            var result2 = customizer(
              objValue,
              srcValue,
              key2,
              object2,
              source2,
              stack
            )
          }
          if (
            !(result2 === void 0
              ? baseIsEqual(
                  srcValue,
                  objValue,
                  COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
                  customizer,
                  stack
                )
              : result2)
          ) {
            return false
          }
        }
      }
      return true
    }
    module.exports = baseIsMatch
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isStrictComparable.js"(
    exports,
    module
  ) {
    var isObject4 = require_isObject()
    function isStrictComparable(value3) {
      return value3 === value3 && !isObject4(value3)
    }
    module.exports = isStrictComparable
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getMatchData.js"(
    exports,
    module
  ) {
    var isStrictComparable = require_isStrictComparable()
    var keys = require_keys()
    function getMatchData(object2) {
      var result2 = keys(object2),
        length = result2.length
      while (length--) {
        var key2 = result2[length],
          value3 = object2[key2]
        result2[length] = [key2, value3, isStrictComparable(value3)]
      }
      return result2
    }
    module.exports = getMatchData
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_matchesStrictComparable.js"(
    exports,
    module
  ) {
    function matchesStrictComparable(key2, srcValue) {
      return function (object2) {
        if (object2 == null) {
          return false
        }
        return (
          object2[key2] === srcValue &&
          (srcValue !== void 0 || key2 in Object(object2))
        )
      }
    }
    module.exports = matchesStrictComparable
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatches.js"(
    exports,
    module
  ) {
    var baseIsMatch = require_baseIsMatch()
    var getMatchData = require_getMatchData()
    var matchesStrictComparable = require_matchesStrictComparable()
    function baseMatches(source2) {
      var matchData = getMatchData(source2)
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1])
      }
      return function (object2) {
        return object2 === source2 || baseIsMatch(object2, source2, matchData)
      }
    }
    module.exports = baseMatches
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_isKey.js"(
    exports,
    module
  ) {
    var isArray2 = require_isArray()
    var isSymbol2 = require_isSymbol()
    var reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
    var reIsPlainProp2 = /^\w*$/
    function isKey2(value3, object2) {
      if (isArray2(value3)) {
        return false
      }
      var type = typeof value3
      if (
        type == "number" ||
        type == "symbol" ||
        type == "boolean" ||
        value3 == null ||
        isSymbol2(value3)
      ) {
        return true
      }
      return (
        reIsPlainProp2.test(value3) ||
        !reIsDeepProp2.test(value3) ||
        (object2 != null && value3 in Object(object2))
      )
    }
    module.exports = isKey2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/memoize.js"(
    exports,
    module
  ) {
    var MapCache2 = require_MapCache()
    var FUNC_ERROR_TEXT2 = "Expected a function"
    function memoize4(func, resolver) {
      if (
        typeof func != "function" ||
        (resolver != null && typeof resolver != "function")
      ) {
        throw new TypeError(FUNC_ERROR_TEXT2)
      }
      var memoized = function () {
        var args2 = arguments,
          key2 = resolver ? resolver.apply(this, args2) : args2[0],
          cache = memoized.cache
        if (cache.has(key2)) {
          return cache.get(key2)
        }
        var result2 = func.apply(this, args2)
        memoized.cache = cache.set(key2, result2) || cache
        return result2
      }
      memoized.cache = new (memoize4.Cache || MapCache2)()
      return memoized
    }
    memoize4.Cache = MapCache2
    module.exports = memoize4
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_memoizeCapped.js"(
    exports,
    module
  ) {
    var memoize4 = require_memoize()
    var MAX_MEMOIZE_SIZE2 = 500
    function memoizeCapped2(func) {
      var result2 = memoize4(func, function (key2) {
        if (cache.size === MAX_MEMOIZE_SIZE2) {
          cache.clear()
        }
        return key2
      })
      var cache = result2.cache
      return result2
    }
    module.exports = memoizeCapped2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_stringToPath.js"(
    exports,
    module
  ) {
    var memoizeCapped2 = require_memoizeCapped()
    var rePropName2 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    var reEscapeChar2 = /\\(\\)?/g
    var stringToPath2 = memoizeCapped2(function (string) {
      var result2 = []
      if (string.charCodeAt(0) === 46) {
        result2.push("")
      }
      string.replace(rePropName2, function (match, number, quote, subString) {
        result2.push(
          quote ? subString.replace(reEscapeChar2, "$1") : number || match
        )
      })
      return result2
    })
    module.exports = stringToPath2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseToString.js"(
    exports,
    module
  ) {
    var Symbol3 = require_Symbol()
    var arrayMap2 = require_arrayMap()
    var isArray2 = require_isArray()
    var isSymbol2 = require_isSymbol()
    var INFINITY3 = 1 / 0
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0
    var symbolToString2 = symbolProto2 ? symbolProto2.toString : void 0
    function baseToString2(value3) {
      if (typeof value3 == "string") {
        return value3
      }
      if (isArray2(value3)) {
        return arrayMap2(value3, baseToString2) + ""
      }
      if (isSymbol2(value3)) {
        return symbolToString2 ? symbolToString2.call(value3) : ""
      }
      var result2 = value3 + ""
      return result2 == "0" && 1 / value3 == -INFINITY3 ? "-0" : result2
    }
    module.exports = baseToString2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js"(
    exports,
    module
  ) {
    var baseToString2 = require_baseToString()
    function toString2(value3) {
      return value3 == null ? "" : baseToString2(value3)
    }
    module.exports = toString2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_castPath.js"(
    exports,
    module
  ) {
    var isArray2 = require_isArray()
    var isKey2 = require_isKey()
    var stringToPath2 = require_stringToPath()
    var toString2 = require_toString()
    function castPath2(value3, object2) {
      if (isArray2(value3)) {
        return value3
      }
      return isKey2(value3, object2)
        ? [value3]
        : stringToPath2(toString2(value3))
    }
    module.exports = castPath2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_toKey.js"(
    exports,
    module
  ) {
    var isSymbol2 = require_isSymbol()
    var INFINITY3 = 1 / 0
    function toKey2(value3) {
      if (typeof value3 == "string" || isSymbol2(value3)) {
        return value3
      }
      var result2 = value3 + ""
      return result2 == "0" && 1 / value3 == -INFINITY3 ? "-0" : result2
    }
    module.exports = toKey2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseGet.js"(
    exports,
    module
  ) {
    var castPath2 = require_castPath()
    var toKey2 = require_toKey()
    function baseGet2(object2, path) {
      path = castPath2(path, object2)
      var index = 0,
        length = path.length
      while (object2 != null && index < length) {
        object2 = object2[toKey2(path[index++])]
      }
      return index && index == length ? object2 : void 0
    }
    module.exports = baseGet2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js"(
    exports,
    module
  ) {
    var baseGet2 = require_baseGet()
    function get2(object2, path, defaultValue) {
      var result2 = object2 == null ? void 0 : baseGet2(object2, path)
      return result2 === void 0 ? defaultValue : result2
    }
    module.exports = get2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseHasIn.js"(
    exports,
    module
  ) {
    function baseHasIn(object2, key2) {
      return object2 != null && key2 in Object(object2)
    }
    module.exports = baseHasIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_hasPath.js"(
    exports,
    module
  ) {
    var castPath2 = require_castPath()
    var isArguments = require_isArguments()
    var isArray2 = require_isArray()
    var isIndex = require_isIndex()
    var isLength = require_isLength()
    var toKey2 = require_toKey()
    function hasPath(object2, path, hasFunc) {
      path = castPath2(path, object2)
      var index = -1,
        length = path.length,
        result2 = false
      while (++index < length) {
        var key2 = toKey2(path[index])
        if (!(result2 = object2 != null && hasFunc(object2, key2))) {
          break
        }
        object2 = object2[key2]
      }
      if (result2 || ++index != length) {
        return result2
      }
      length = object2 == null ? 0 : object2.length
      return (
        !!length &&
        isLength(length) &&
        isIndex(key2, length) &&
        (isArray2(object2) || isArguments(object2))
      )
    }
    module.exports = hasPath
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/hasIn.js"(
    exports,
    module
  ) {
    var baseHasIn = require_baseHasIn()
    var hasPath = require_hasPath()
    function hasIn(object2, path) {
      return object2 != null && hasPath(object2, path, baseHasIn)
    }
    module.exports = hasIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseMatchesProperty.js"(
    exports,
    module
  ) {
    var baseIsEqual = require_baseIsEqual()
    var get2 = require_get()
    var hasIn = require_hasIn()
    var isKey2 = require_isKey()
    var isStrictComparable = require_isStrictComparable()
    var matchesStrictComparable = require_matchesStrictComparable()
    var toKey2 = require_toKey()
    var COMPARE_PARTIAL_FLAG = 1
    var COMPARE_UNORDERED_FLAG = 2
    function baseMatchesProperty(path, srcValue) {
      if (isKey2(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey2(path), srcValue)
      }
      return function (object2) {
        var objValue = get2(object2, path)
        return objValue === void 0 && objValue === srcValue
          ? hasIn(object2, path)
          : baseIsEqual(
              srcValue,
              objValue,
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
            )
      }
    }
    module.exports = baseMatchesProperty
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/identity.js"(
    exports,
    module
  ) {
    function identity(value3) {
      return value3
    }
    module.exports = identity
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseProperty.js"(
    exports,
    module
  ) {
    function baseProperty(key2) {
      return function (object2) {
        return object2 == null ? void 0 : object2[key2]
      }
    }
    module.exports = baseProperty
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePropertyDeep.js"(
    exports,
    module
  ) {
    var baseGet2 = require_baseGet()
    function basePropertyDeep(path) {
      return function (object2) {
        return baseGet2(object2, path)
      }
    }
    module.exports = basePropertyDeep
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/property.js"(
    exports,
    module
  ) {
    var baseProperty = require_baseProperty()
    var basePropertyDeep = require_basePropertyDeep()
    var isKey2 = require_isKey()
    var toKey2 = require_toKey()
    function property(path) {
      return isKey2(path) ? baseProperty(toKey2(path)) : basePropertyDeep(path)
    }
    module.exports = property
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIteratee.js"(
    exports,
    module
  ) {
    var baseMatches = require_baseMatches()
    var baseMatchesProperty = require_baseMatchesProperty()
    var identity = require_identity()
    var isArray2 = require_isArray()
    var property = require_property()
    function baseIteratee(value3) {
      if (typeof value3 == "function") {
        return value3
      }
      if (value3 == null) {
        return identity
      }
      if (typeof value3 == "object") {
        return isArray2(value3)
          ? baseMatchesProperty(value3[0], value3[1])
          : baseMatches(value3)
      }
      return property(value3)
    }
    module.exports = baseIteratee
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_defineProperty.js"(
    exports,
    module
  ) {
    var getNative2 = require_getNative()
    var defineProperty = (function () {
      try {
        var func = getNative2(Object, "defineProperty")
        func({}, "", {})
        return func
      } catch (e2) {}
    })()
    module.exports = defineProperty
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignValue.js"(
    exports,
    module
  ) {
    var defineProperty = require_defineProperty()
    function baseAssignValue(object2, key2, value3) {
      if (key2 == "__proto__" && defineProperty) {
        defineProperty(object2, key2, {
          configurable: true,
          enumerable: true,
          value: value3,
          writable: true
        })
      } else {
        object2[key2] = value3
      }
    }
    module.exports = baseAssignValue
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_assignValue.js"(
    exports,
    module
  ) {
    var baseAssignValue = require_baseAssignValue()
    var eq2 = require_eq()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function assignValue(object2, key2, value3) {
      var objValue = object2[key2]
      if (
        !(hasOwnProperty5.call(object2, key2) && eq2(objValue, value3)) ||
        (value3 === void 0 && !(key2 in object2))
      ) {
        baseAssignValue(object2, key2, value3)
      }
    }
    module.exports = assignValue
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseSet.js"(
    exports,
    module
  ) {
    var assignValue = require_assignValue()
    var castPath2 = require_castPath()
    var isIndex = require_isIndex()
    var isObject4 = require_isObject()
    var toKey2 = require_toKey()
    function baseSet(object2, path, value3, customizer) {
      if (!isObject4(object2)) {
        return object2
      }
      path = castPath2(path, object2)
      var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object2
      while (nested != null && ++index < length) {
        var key2 = toKey2(path[index]),
          newValue = value3
        if (
          key2 === "__proto__" ||
          key2 === "constructor" ||
          key2 === "prototype"
        ) {
          return object2
        }
        if (index != lastIndex) {
          var objValue = nested[key2]
          newValue = customizer ? customizer(objValue, key2, nested) : void 0
          if (newValue === void 0) {
            newValue = isObject4(objValue)
              ? objValue
              : isIndex(path[index + 1])
                ? []
                : {}
          }
        }
        assignValue(nested, key2, newValue)
        nested = nested[key2]
      }
      return object2
    }
    module.exports = baseSet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_basePickBy.js"(
    exports,
    module
  ) {
    var baseGet2 = require_baseGet()
    var baseSet = require_baseSet()
    var castPath2 = require_castPath()
    function basePickBy(object2, paths, predicate) {
      var index = -1,
        length = paths.length,
        result2 = {}
      while (++index < length) {
        var path = paths[index],
          value3 = baseGet2(object2, path)
        if (predicate(value3, path)) {
          baseSet(result2, castPath2(path, object2), value3)
        }
      }
      return result2
    }
    module.exports = basePickBy
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getSymbolsIn.js"(
    exports,
    module
  ) {
    var arrayPush = require_arrayPush()
    var getPrototype = require_getPrototype()
    var getSymbols = require_getSymbols()
    var stubArray = require_stubArray()
    var nativeGetSymbols = Object.getOwnPropertySymbols
    var getSymbolsIn = !nativeGetSymbols
      ? stubArray
      : function (object2) {
          var result2 = []
          while (object2) {
            arrayPush(result2, getSymbols(object2))
            object2 = getPrototype(object2)
          }
          return result2
        }
    module.exports = getSymbolsIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_nativeKeysIn.js"(
    exports,
    module
  ) {
    function nativeKeysIn(object2) {
      var result2 = []
      if (object2 != null) {
        for (var key2 in Object(object2)) {
          result2.push(key2)
        }
      }
      return result2
    }
    module.exports = nativeKeysIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseKeysIn.js"(
    exports,
    module
  ) {
    var isObject4 = require_isObject()
    var isPrototype = require_isPrototype()
    var nativeKeysIn = require_nativeKeysIn()
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function baseKeysIn(object2) {
      if (!isObject4(object2)) {
        return nativeKeysIn(object2)
      }
      var isProto = isPrototype(object2),
        result2 = []
      for (var key2 in object2) {
        if (
          !(
            key2 == "constructor" &&
            (isProto || !hasOwnProperty5.call(object2, key2))
          )
        ) {
          result2.push(key2)
        }
      }
      return result2
    }
    module.exports = baseKeysIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/keysIn.js"(
    exports,
    module
  ) {
    var arrayLikeKeys = require_arrayLikeKeys()
    var baseKeysIn = require_baseKeysIn()
    var isArrayLike = require_isArrayLike()
    function keysIn(object2) {
      return isArrayLike(object2)
        ? arrayLikeKeys(object2, true)
        : baseKeysIn(object2)
    }
    module.exports = keysIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_getAllKeysIn.js"(
    exports,
    module
  ) {
    var baseGetAllKeys = require_baseGetAllKeys()
    var getSymbolsIn = require_getSymbolsIn()
    var keysIn = require_keysIn()
    function getAllKeysIn(object2) {
      return baseGetAllKeys(object2, keysIn, getSymbolsIn)
    }
    module.exports = getAllKeysIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js
var require_pickBy = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/pickBy.js"(
    exports,
    module
  ) {
    var arrayMap2 = require_arrayMap()
    var baseIteratee = require_baseIteratee()
    var basePickBy = require_basePickBy()
    var getAllKeysIn = require_getAllKeysIn()
    function pickBy2(object2, predicate) {
      if (object2 == null) {
        return {}
      }
      var props = arrayMap2(getAllKeysIn(object2), function (prop) {
        return [prop]
      })
      predicate = baseIteratee(predicate)
      return basePickBy(object2, props, function (value3, path) {
        return predicate(value3, path[0])
      })
    }
    module.exports = pickBy2
  }
})

// node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific/memoizerific.js
var require_memoizerific = __commonJS({
  "node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific/memoizerific.js"(
    exports,
    module
  ) {
    ;(function (f3) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f3()
      } else if (typeof define === "function" && define.amd) {
        define([], f3)
      } else {
        var g2
        if (typeof window !== "undefined") {
          g2 = window
        } else if (typeof global !== "undefined") {
          g2 = global
        } else if (typeof self !== "undefined") {
          g2 = self
        } else {
          g2 = this
        }
        g2.memoizerific = f3()
      }
    })(function () {
      var define2, module2, exports2
      return (function e2(t2, n2, r2) {
        function s2(o3, u2) {
          if (!n2[o3]) {
            if (!t2[o3]) {
              var a2 = typeof __require == "function" && __require
              if (!u2 && a2) return a2(o3, true)
              if (i2) return i2(o3, true)
              var f3 = new Error("Cannot find module '" + o3 + "'")
              throw ((f3.code = "MODULE_NOT_FOUND"), f3)
            }
            var l2 = (n2[o3] = { exports: {} })
            t2[o3][0].call(
              l2.exports,
              function (e3) {
                var n3 = t2[o3][1][e3]
                return s2(n3 ? n3 : e3)
              },
              l2,
              l2.exports,
              e2,
              t2,
              n2,
              r2
            )
          }
          return n2[o3].exports
        }
        var i2 = typeof __require == "function" && __require
        for (var o2 = 0; o2 < r2.length; o2++) s2(r2[o2])
        return s2
      })(
        {
          1: [
            function (_dereq_, module3, exports3) {
              module3.exports = function (forceSimilar) {
                if (typeof Map !== "function" || forceSimilar) {
                  var Similar = _dereq_("./similar")
                  return new Similar()
                } else {
                  return /* @__PURE__ */ new Map()
                }
              }
            },
            { "./similar": 2 }
          ],
          2: [
            function (_dereq_, module3, exports3) {
              function Similar() {
                this.list = []
                this.lastItem = void 0
                this.size = 0
                return this
              }
              Similar.prototype.get = function (key2) {
                var index
                if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
                  return this.lastItem.val
                }
                index = this.indexOf(key2)
                if (index >= 0) {
                  this.lastItem = this.list[index]
                  return this.list[index].val
                }
                return void 0
              }
              Similar.prototype.set = function (key2, val) {
                var index
                if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
                  this.lastItem.val = val
                  return this
                }
                index = this.indexOf(key2)
                if (index >= 0) {
                  this.lastItem = this.list[index]
                  this.list[index].val = val
                  return this
                }
                this.lastItem = { key: key2, val }
                this.list.push(this.lastItem)
                this.size++
                return this
              }
              Similar.prototype.delete = function (key2) {
                var index
                if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
                  this.lastItem = void 0
                }
                index = this.indexOf(key2)
                if (index >= 0) {
                  this.size--
                  return this.list.splice(index, 1)[0]
                }
                return void 0
              }
              Similar.prototype.has = function (key2) {
                var index
                if (this.lastItem && this.isEqual(this.lastItem.key, key2)) {
                  return true
                }
                index = this.indexOf(key2)
                if (index >= 0) {
                  this.lastItem = this.list[index]
                  return true
                }
                return false
              }
              Similar.prototype.forEach = function (callback, thisArg) {
                var i2
                for (i2 = 0; i2 < this.size; i2++) {
                  callback.call(
                    thisArg || this,
                    this.list[i2].val,
                    this.list[i2].key,
                    this
                  )
                }
              }
              Similar.prototype.indexOf = function (key2) {
                var i2
                for (i2 = 0; i2 < this.size; i2++) {
                  if (this.isEqual(this.list[i2].key, key2)) {
                    return i2
                  }
                }
                return -1
              }
              Similar.prototype.isEqual = function (val1, val2) {
                return val1 === val2 || (val1 !== val1 && val2 !== val2)
              }
              module3.exports = Similar
            },
            {}
          ],
          3: [
            function (_dereq_, module3, exports3) {
              var MapOrSimilar = _dereq_("map-or-similar")
              module3.exports = function (limit) {
                var cache = new MapOrSimilar(false),
                  lru = []
                return function (fn) {
                  var memoizerific = function () {
                    var currentCache = cache,
                      newMap,
                      fnResult,
                      argsLengthMinusOne = arguments.length - 1,
                      lruPath = Array(argsLengthMinusOne + 1),
                      isMemoized = true,
                      i2
                    if (
                      (memoizerific.numArgs || memoizerific.numArgs === 0) &&
                      memoizerific.numArgs !== argsLengthMinusOne + 1
                    ) {
                      throw new Error(
                        "Memoizerific functions should always be called with the same number of arguments"
                      )
                    }
                    for (i2 = 0; i2 < argsLengthMinusOne; i2++) {
                      lruPath[i2] = {
                        cacheItem: currentCache,
                        arg: arguments[i2]
                      }
                      if (currentCache.has(arguments[i2])) {
                        currentCache = currentCache.get(arguments[i2])
                        continue
                      }
                      isMemoized = false
                      newMap = new MapOrSimilar(false)
                      currentCache.set(arguments[i2], newMap)
                      currentCache = newMap
                    }
                    if (isMemoized) {
                      if (currentCache.has(arguments[argsLengthMinusOne])) {
                        fnResult = currentCache.get(
                          arguments[argsLengthMinusOne]
                        )
                      } else {
                        isMemoized = false
                      }
                    }
                    if (!isMemoized) {
                      fnResult = fn.apply(null, arguments)
                      currentCache.set(arguments[argsLengthMinusOne], fnResult)
                    }
                    if (limit > 0) {
                      lruPath[argsLengthMinusOne] = {
                        cacheItem: currentCache,
                        arg: arguments[argsLengthMinusOne]
                      }
                      if (isMemoized) {
                        moveToMostRecentLru(lru, lruPath)
                      } else {
                        lru.push(lruPath)
                      }
                      if (lru.length > limit) {
                        removeCachedResult(lru.shift())
                      }
                    }
                    memoizerific.wasMemoized = isMemoized
                    memoizerific.numArgs = argsLengthMinusOne + 1
                    return fnResult
                  }
                  memoizerific.limit = limit
                  memoizerific.wasMemoized = false
                  memoizerific.cache = cache
                  memoizerific.lru = lru
                  return memoizerific
                }
              }
              function moveToMostRecentLru(lru, lruPath) {
                var lruLen = lru.length,
                  lruPathLen = lruPath.length,
                  isMatch,
                  i2,
                  ii
                for (i2 = 0; i2 < lruLen; i2++) {
                  isMatch = true
                  for (ii = 0; ii < lruPathLen; ii++) {
                    if (!isEqual(lru[i2][ii].arg, lruPath[ii].arg)) {
                      isMatch = false
                      break
                    }
                  }
                  if (isMatch) {
                    break
                  }
                }
                lru.push(lru.splice(i2, 1)[0])
              }
              function removeCachedResult(removedLru) {
                var removedLruLen = removedLru.length,
                  currentLru = removedLru[removedLruLen - 1],
                  tmp,
                  i2
                currentLru.cacheItem.delete(currentLru.arg)
                for (i2 = removedLruLen - 2; i2 >= 0; i2--) {
                  currentLru = removedLru[i2]
                  tmp = currentLru.cacheItem.get(currentLru.arg)
                  if (!tmp || !tmp.size) {
                    currentLru.cacheItem.delete(currentLru.arg)
                  } else {
                    break
                  }
                }
              }
              function isEqual(val1, val2) {
                return val1 === val2 || (val1 !== val1 && val2 !== val2)
              }
            },
            { "map-or-similar": 1 }
          ]
        },
        {},
        [3]
      )(3)
    })
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseFindIndex.js"(
    exports,
    module
  ) {
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length,
        index = fromIndex + (fromRight ? 1 : -1)
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array2[index], index, array2)) {
          return index
        }
      }
      return -1
    }
    module.exports = baseFindIndex
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsNaN.js"(
    exports,
    module
  ) {
    function baseIsNaN(value3) {
      return value3 !== value3
    }
    module.exports = baseIsNaN
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_strictIndexOf.js"(
    exports,
    module
  ) {
    function strictIndexOf(array2, value3, fromIndex) {
      var index = fromIndex - 1,
        length = array2.length
      while (++index < length) {
        if (array2[index] === value3) {
          return index
        }
      }
      return -1
    }
    module.exports = strictIndexOf
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIndexOf.js"(
    exports,
    module
  ) {
    var baseFindIndex = require_baseFindIndex()
    var baseIsNaN = require_baseIsNaN()
    var strictIndexOf = require_strictIndexOf()
    function baseIndexOf(array2, value3, fromIndex) {
      return value3 === value3
        ? strictIndexOf(array2, value3, fromIndex)
        : baseFindIndex(array2, baseIsNaN, fromIndex)
    }
    module.exports = baseIndexOf
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludes.js"(
    exports,
    module
  ) {
    var baseIndexOf = require_baseIndexOf()
    function arrayIncludes(array2, value3) {
      var length = array2 == null ? 0 : array2.length
      return !!length && baseIndexOf(array2, value3, 0) > -1
    }
    module.exports = arrayIncludes
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayIncludesWith.js"(
    exports,
    module
  ) {
    function arrayIncludesWith(array2, value3, comparator) {
      var index = -1,
        length = array2 == null ? 0 : array2.length
      while (++index < length) {
        if (comparator(value3, array2[index])) {
          return true
        }
      }
      return false
    }
    module.exports = arrayIncludesWith
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/noop.js"(
    exports,
    module
  ) {
    function noop() {}
    module.exports = noop
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_createSet.js"(
    exports,
    module
  ) {
    var Set2 = require_Set()
    var noop = require_noop()
    var setToArray = require_setToArray()
    var INFINITY3 = 1 / 0
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY3)
      ? noop
      : function (values) {
          return new Set2(values)
        }
    module.exports = createSet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseUniq.js"(
    exports,
    module
  ) {
    var SetCache = require_SetCache()
    var arrayIncludes = require_arrayIncludes()
    var arrayIncludesWith = require_arrayIncludesWith()
    var cacheHas = require_cacheHas()
    var createSet = require_createSet()
    var setToArray = require_setToArray()
    var LARGE_ARRAY_SIZE = 200
    function baseUniq(array2, iteratee, comparator) {
      var index = -1,
        includes = arrayIncludes,
        length = array2.length,
        isCommon = true,
        result2 = [],
        seen = result2
      if (comparator) {
        isCommon = false
        includes = arrayIncludesWith
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array2)
        if (set) {
          return setToArray(set)
        }
        isCommon = false
        includes = cacheHas
        seen = new SetCache()
      } else {
        seen = iteratee ? [] : result2
      }
      outer: while (++index < length) {
        var value3 = array2[index],
          computed = iteratee ? iteratee(value3) : value3
        value3 = comparator || value3 !== 0 ? value3 : 0
        if (isCommon && computed === computed) {
          var seenIndex = seen.length
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer
            }
          }
          if (iteratee) {
            seen.push(computed)
          }
          result2.push(value3)
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result2) {
            seen.push(computed)
          }
          result2.push(value3)
        }
      }
      return result2
    }
    module.exports = baseUniq
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniq.js"(
    exports,
    module
  ) {
    var baseUniq = require_baseUniq()
    function uniq2(array2) {
      return array2 && array2.length ? baseUniq(array2) : []
    }
    module.exports = uniq2
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_arrayEach.js"(
    exports,
    module
  ) {
    function arrayEach(array2, iteratee) {
      var index = -1,
        length = array2 == null ? 0 : array2.length
      while (++index < length) {
        if (iteratee(array2[index], index, array2) === false) {
          break
        }
      }
      return array2
    }
    module.exports = arrayEach
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyObject.js"(
    exports,
    module
  ) {
    var assignValue = require_assignValue()
    var baseAssignValue = require_baseAssignValue()
    function copyObject(source2, props, object2, customizer) {
      var isNew = !object2
      object2 || (object2 = {})
      var index = -1,
        length = props.length
      while (++index < length) {
        var key2 = props[index]
        var newValue = customizer
          ? customizer(object2[key2], source2[key2], key2, object2, source2)
          : void 0
        if (newValue === void 0) {
          newValue = source2[key2]
        }
        if (isNew) {
          baseAssignValue(object2, key2, newValue)
        } else {
          assignValue(object2, key2, newValue)
        }
      }
      return object2
    }
    module.exports = copyObject
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssign.js"(
    exports,
    module
  ) {
    var copyObject = require_copyObject()
    var keys = require_keys()
    function baseAssign(object2, source2) {
      return object2 && copyObject(source2, keys(source2), object2)
    }
    module.exports = baseAssign
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseAssignIn.js"(
    exports,
    module
  ) {
    var copyObject = require_copyObject()
    var keysIn = require_keysIn()
    function baseAssignIn(object2, source2) {
      return object2 && copyObject(source2, keysIn(source2), object2)
    }
    module.exports = baseAssignIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneBuffer.js"(
    exports,
    module
  ) {
    var root3 = require_root()
    var freeExports =
      typeof exports == "object" && exports && !exports.nodeType && exports
    var freeModule =
      freeExports &&
      typeof module == "object" &&
      module &&
      !module.nodeType &&
      module
    var moduleExports = freeModule && freeModule.exports === freeExports
    var Buffer = moduleExports ? root3.Buffer : void 0
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice()
      }
      var length = buffer.length,
        result2 = allocUnsafe
          ? allocUnsafe(length)
          : new buffer.constructor(length)
      buffer.copy(result2)
      return result2
    }
    module.exports = cloneBuffer
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copyArray.js"(
    exports,
    module
  ) {
    function copyArray(source2, array2) {
      var index = -1,
        length = source2.length
      array2 || (array2 = Array(length))
      while (++index < length) {
        array2[index] = source2[index]
      }
      return array2
    }
    module.exports = copyArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbols.js"(
    exports,
    module
  ) {
    var copyObject = require_copyObject()
    var getSymbols = require_getSymbols()
    function copySymbols(source2, object2) {
      return copyObject(source2, getSymbols(source2), object2)
    }
    module.exports = copySymbols
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_copySymbolsIn.js"(
    exports,
    module
  ) {
    var copyObject = require_copyObject()
    var getSymbolsIn = require_getSymbolsIn()
    function copySymbolsIn(source2, object2) {
      return copyObject(source2, getSymbolsIn(source2), object2)
    }
    module.exports = copySymbolsIn
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneArray.js"(
    exports,
    module
  ) {
    var objectProto6 = Object.prototype
    var hasOwnProperty5 = objectProto6.hasOwnProperty
    function initCloneArray(array2) {
      var length = array2.length,
        result2 = new array2.constructor(length)
      if (
        length &&
        typeof array2[0] == "string" &&
        hasOwnProperty5.call(array2, "index")
      ) {
        result2.index = array2.index
        result2.input = array2.input
      }
      return result2
    }
    module.exports = initCloneArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneArrayBuffer.js"(
    exports,
    module
  ) {
    var Uint8Array2 = require_Uint8Array()
    function cloneArrayBuffer(arrayBuffer) {
      var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength)
      new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer))
      return result2
    }
    module.exports = cloneArrayBuffer
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneDataView.js"(
    exports,
    module
  ) {
    var cloneArrayBuffer = require_cloneArrayBuffer()
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer
      return new dataView.constructor(
        buffer,
        dataView.byteOffset,
        dataView.byteLength
      )
    }
    module.exports = cloneDataView
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneRegExp.js"(
    exports,
    module
  ) {
    var reFlags = /\w*$/
    function cloneRegExp(regexp) {
      var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp))
      result2.lastIndex = regexp.lastIndex
      return result2
    }
    module.exports = cloneRegExp
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneSymbol.js"(
    exports,
    module
  ) {
    var Symbol3 = require_Symbol()
    var symbolProto2 = Symbol3 ? Symbol3.prototype : void 0
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
    }
    module.exports = cloneSymbol
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_cloneTypedArray.js"(
    exports,
    module
  ) {
    var cloneArrayBuffer = require_cloneArrayBuffer()
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep
        ? cloneArrayBuffer(typedArray.buffer)
        : typedArray.buffer
      return new typedArray.constructor(
        buffer,
        typedArray.byteOffset,
        typedArray.length
      )
    }
    module.exports = cloneTypedArray
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneByTag.js"(
    exports,
    module
  ) {
    var cloneArrayBuffer = require_cloneArrayBuffer()
    var cloneDataView = require_cloneDataView()
    var cloneRegExp = require_cloneRegExp()
    var cloneSymbol = require_cloneSymbol()
    var cloneTypedArray = require_cloneTypedArray()
    var boolTag = "[object Boolean]"
    var dateTag = "[object Date]"
    var mapTag = "[object Map]"
    var numberTag = "[object Number]"
    var regexpTag = "[object RegExp]"
    var setTag = "[object Set]"
    var stringTag = "[object String]"
    var symbolTag2 = "[object Symbol]"
    var arrayBufferTag = "[object ArrayBuffer]"
    var dataViewTag = "[object DataView]"
    var float32Tag = "[object Float32Array]"
    var float64Tag = "[object Float64Array]"
    var int8Tag = "[object Int8Array]"
    var int16Tag = "[object Int16Array]"
    var int32Tag = "[object Int32Array]"
    var uint8Tag = "[object Uint8Array]"
    var uint8ClampedTag = "[object Uint8ClampedArray]"
    var uint16Tag = "[object Uint16Array]"
    var uint32Tag = "[object Uint32Array]"
    function initCloneByTag(object2, tag, isDeep) {
      var Ctor = object2.constructor
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object2)
        case boolTag:
        case dateTag:
          return new Ctor(+object2)
        case dataViewTag:
          return cloneDataView(object2, isDeep)
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object2, isDeep)
        case mapTag:
          return new Ctor()
        case numberTag:
        case stringTag:
          return new Ctor(object2)
        case regexpTag:
          return cloneRegExp(object2)
        case setTag:
          return new Ctor()
        case symbolTag2:
          return cloneSymbol(object2)
      }
    }
    module.exports = initCloneByTag
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseCreate.js"(
    exports,
    module
  ) {
    var isObject4 = require_isObject()
    var objectCreate = Object.create
    var baseCreate = /* @__PURE__ */ (function () {
      function object2() {}
      return function (proto) {
        if (!isObject4(proto)) {
          return {}
        }
        if (objectCreate) {
          return objectCreate(proto)
        }
        object2.prototype = proto
        var result2 = new object2()
        object2.prototype = void 0
        return result2
      }
    })()
    module.exports = baseCreate
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_initCloneObject.js"(
    exports,
    module
  ) {
    var baseCreate = require_baseCreate()
    var getPrototype = require_getPrototype()
    var isPrototype = require_isPrototype()
    function initCloneObject(object2) {
      return typeof object2.constructor == "function" && !isPrototype(object2)
        ? baseCreate(getPrototype(object2))
        : {}
    }
    module.exports = initCloneObject
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsMap.js"(
    exports,
    module
  ) {
    var getTag = require_getTag()
    var isObjectLike2 = require_isObjectLike()
    var mapTag = "[object Map]"
    function baseIsMap(value3) {
      return isObjectLike2(value3) && getTag(value3) == mapTag
    }
    module.exports = baseIsMap
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isMap.js"(
    exports,
    module
  ) {
    var baseIsMap = require_baseIsMap()
    var baseUnary = require_baseUnary()
    var nodeUtil = require_nodeUtil()
    var nodeIsMap = nodeUtil && nodeUtil.isMap
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap
    module.exports = isMap
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseIsSet.js"(
    exports,
    module
  ) {
    var getTag = require_getTag()
    var isObjectLike2 = require_isObjectLike()
    var setTag = "[object Set]"
    function baseIsSet(value3) {
      return isObjectLike2(value3) && getTag(value3) == setTag
    }
    module.exports = baseIsSet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSet.js"(
    exports,
    module
  ) {
    var baseIsSet = require_baseIsSet()
    var baseUnary = require_baseUnary()
    var nodeUtil = require_nodeUtil()
    var nodeIsSet = nodeUtil && nodeUtil.isSet
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet
    module.exports = isSet
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseClone.js"(
    exports,
    module
  ) {
    var Stack = require_Stack()
    var arrayEach = require_arrayEach()
    var assignValue = require_assignValue()
    var baseAssign = require_baseAssign()
    var baseAssignIn = require_baseAssignIn()
    var cloneBuffer = require_cloneBuffer()
    var copyArray = require_copyArray()
    var copySymbols = require_copySymbols()
    var copySymbolsIn = require_copySymbolsIn()
    var getAllKeys = require_getAllKeys()
    var getAllKeysIn = require_getAllKeysIn()
    var getTag = require_getTag()
    var initCloneArray = require_initCloneArray()
    var initCloneByTag = require_initCloneByTag()
    var initCloneObject = require_initCloneObject()
    var isArray2 = require_isArray()
    var isBuffer = require_isBuffer()
    var isMap = require_isMap()
    var isObject4 = require_isObject()
    var isSet = require_isSet()
    var keys = require_keys()
    var keysIn = require_keysIn()
    var CLONE_DEEP_FLAG = 1
    var CLONE_FLAT_FLAG = 2
    var CLONE_SYMBOLS_FLAG = 4
    var argsTag = "[object Arguments]"
    var arrayTag = "[object Array]"
    var boolTag = "[object Boolean]"
    var dateTag = "[object Date]"
    var errorTag = "[object Error]"
    var funcTag2 = "[object Function]"
    var genTag2 = "[object GeneratorFunction]"
    var mapTag = "[object Map]"
    var numberTag = "[object Number]"
    var objectTag = "[object Object]"
    var regexpTag = "[object RegExp]"
    var setTag = "[object Set]"
    var stringTag = "[object String]"
    var symbolTag2 = "[object Symbol]"
    var weakMapTag = "[object WeakMap]"
    var arrayBufferTag = "[object ArrayBuffer]"
    var dataViewTag = "[object DataView]"
    var float32Tag = "[object Float32Array]"
    var float64Tag = "[object Float64Array]"
    var int8Tag = "[object Int8Array]"
    var int16Tag = "[object Int16Array]"
    var int32Tag = "[object Int32Array]"
    var uint8Tag = "[object Uint8Array]"
    var uint8ClampedTag = "[object Uint8ClampedArray]"
    var uint16Tag = "[object Uint16Array]"
    var uint32Tag = "[object Uint32Array]"
    var cloneableTags = {}
    cloneableTags[argsTag] =
      cloneableTags[arrayTag] =
      cloneableTags[arrayBufferTag] =
      cloneableTags[dataViewTag] =
      cloneableTags[boolTag] =
      cloneableTags[dateTag] =
      cloneableTags[float32Tag] =
      cloneableTags[float64Tag] =
      cloneableTags[int8Tag] =
      cloneableTags[int16Tag] =
      cloneableTags[int32Tag] =
      cloneableTags[mapTag] =
      cloneableTags[numberTag] =
      cloneableTags[objectTag] =
      cloneableTags[regexpTag] =
      cloneableTags[setTag] =
      cloneableTags[stringTag] =
      cloneableTags[symbolTag2] =
      cloneableTags[uint8Tag] =
      cloneableTags[uint8ClampedTag] =
      cloneableTags[uint16Tag] =
      cloneableTags[uint32Tag] =
        true
    cloneableTags[errorTag] =
      cloneableTags[funcTag2] =
      cloneableTags[weakMapTag] =
        false
    function baseClone(value3, bitmask, customizer, key2, object2, stack) {
      var result2,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG
      if (customizer) {
        result2 = object2
          ? customizer(value3, key2, object2, stack)
          : customizer(value3)
      }
      if (result2 !== void 0) {
        return result2
      }
      if (!isObject4(value3)) {
        return value3
      }
      var isArr = isArray2(value3)
      if (isArr) {
        result2 = initCloneArray(value3)
        if (!isDeep) {
          return copyArray(value3, result2)
        }
      } else {
        var tag = getTag(value3),
          isFunc = tag == funcTag2 || tag == genTag2
        if (isBuffer(value3)) {
          return cloneBuffer(value3, isDeep)
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object2)) {
          result2 = isFlat || isFunc ? {} : initCloneObject(value3)
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value3, baseAssignIn(result2, value3))
              : copySymbols(value3, baseAssign(result2, value3))
          }
        } else {
          if (!cloneableTags[tag]) {
            return object2 ? value3 : {}
          }
          result2 = initCloneByTag(value3, tag, isDeep)
        }
      }
      stack || (stack = new Stack())
      var stacked = stack.get(value3)
      if (stacked) {
        return stacked
      }
      stack.set(value3, result2)
      if (isSet(value3)) {
        value3.forEach(function (subValue) {
          result2.add(
            baseClone(subValue, bitmask, customizer, subValue, value3, stack)
          )
        })
      } else if (isMap(value3)) {
        value3.forEach(function (subValue, key3) {
          result2.set(
            key3,
            baseClone(subValue, bitmask, customizer, key3, value3, stack)
          )
        })
      }
      var keysFunc = isFull
        ? isFlat
          ? getAllKeysIn
          : getAllKeys
        : isFlat
          ? keysIn
          : keys
      var props = isArr ? void 0 : keysFunc(value3)
      arrayEach(props || value3, function (subValue, key3) {
        if (props) {
          key3 = subValue
          subValue = value3[key3]
        }
        assignValue(
          result2,
          key3,
          baseClone(subValue, bitmask, customizer, key3, value3, stack)
        )
      })
      return result2
    }
    module.exports = baseClone
  }
})

// node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js
var require_cloneDeep = __commonJS({
  "node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/cloneDeep.js"(
    exports,
    module
  ) {
    var baseClone = require_baseClone()
    var CLONE_DEEP_FLAG = 1
    var CLONE_SYMBOLS_FLAG = 4
    function cloneDeep2(value3) {
      return baseClone(value3, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
    }
    module.exports = cloneDeep2
  }
})

// .cache/sb-vite-plugin-externals/storybook/internal/channels.js
var require_channels = __commonJS({
  ".cache/sb-vite-plugin-externals/storybook/internal/channels.js"(
    exports,
    module
  ) {
    module.exports = __STORYBOOK_MODULE_CHANNELS__
  }
})

// node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs
var import_react2 = __toESM(require_react(), 1)

// node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pr_6cc5odt3xmihpgdygh6iolouyi/node_modules/@storybook/blocks/dist/index.mjs
var import_react = __toESM(require_react(), 1)

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e2) {
  if (void 0 === e2)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  return e2
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t2, e2) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t3, e3) {
          return (t3.__proto__ = e3), t3
        }),
    _setPrototypeOf(t2, e2)
  )
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t2, o2) {
  ;(t2.prototype = Object.create(o2.prototype)),
    (t2.prototype.constructor = t2),
    _setPrototypeOf(t2, o2)
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t2) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3)
        }),
    _getPrototypeOf(t2)
  )
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t2) {
  try {
    return -1 !== Function.toString.call(t2).indexOf("[native code]")
  } catch (n2) {
    return "function" == typeof t2
  }
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    )
  } catch (t3) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t2
  })()
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t2, e2, r2) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments)
  var o2 = [null]
  o2.push.apply(o2, e2)
  var p2 = new (t2.bind.apply(t2, o2))()
  return r2 && _setPrototypeOf(p2, r2.prototype), p2
}

// node_modules/.pnpm/@babel+runtime@7.25.6/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t2) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0
  return (
    (_wrapNativeSuper = function _wrapNativeSuper2(t3) {
      if (null === t3 || !_isNativeFunction(t3)) return t3
      if ("function" != typeof t3)
        throw new TypeError(
          "Super expression must either be null or a function"
        )
      if (void 0 !== r2) {
        if (r2.has(t3)) return r2.get(t3)
        r2.set(t3, Wrapper11)
      }
      function Wrapper11() {
        return _construct(t3, arguments, _getPrototypeOf(this).constructor)
      }
      return (
        (Wrapper11.prototype = Object.create(t3.prototype, {
          constructor: {
            value: Wrapper11,
            enumerable: false,
            writable: true,
            configurable: true
          }
        })),
        _setPrototypeOf(Wrapper11, t3)
      )
    }),
    _wrapNativeSuper(t2)
  )
}

// node_modules/.pnpm/polished@4.3.1/node_modules/polished/dist/polished.esm.js
var ERRORS = {
  1: "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  2: "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  3: "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  4: "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  5: "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  6: "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  7: "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  8: "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  9: "Please provide a number of steps to the modularScale helper.\n\n",
  10: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  11: 'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
  12: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
  13: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
  14: 'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  15: 'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
  16: "You must provide a template to this method.\n\n",
  17: "You passed an unsupported selector state to this method.\n\n",
  18: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  19: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  20: "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: "fontFace expects a name of a font-family.\n\n",
  24: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  25: "fontFace expects localFonts to be an array.\n\n",
  26: "fontFace expects fileFormats to be an array.\n\n",
  27: "radialGradient requries at least 2 color-stops to properly render.\n\n",
  28: "Please supply a filename to retinaImage() as the first argument.\n\n",
  29: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  32: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  33: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  34: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  35: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  36: "Property must be a string value.\n\n",
  37: "Syntax Error at %s.\n\n",
  38: "Formula contains a function that needs parentheses at %s.\n\n",
  39: "Formula is missing closing parenthesis at %s.\n\n",
  40: "Formula has too many closing parentheses at %s.\n\n",
  41: "All values in a formula must have the same unit or be unitless.\n\n",
  42: "Please provide a number of steps to the modularScale helper.\n\n",
  43: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  44: "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  45: "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  46: "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  47: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  48: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  49: "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  50: "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  51: "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  52: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  53: "fontFace expects localFonts to be an array.\n\n",
  54: "fontFace expects fileFormats to be an array.\n\n",
  55: "fontFace expects a name of a font-family.\n\n",
  56: "linearGradient requries at least 2 color-stops to properly render.\n\n",
  57: "radialGradient requries at least 2 color-stops to properly render.\n\n",
  58: "Please supply a filename to retinaImage() as the first argument.\n\n",
  59: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: "Property must be a string value.\n\n",
  62: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  63: 'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
  64: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  65: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  66: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  67: "You must provide a template to this method.\n\n",
  68: "You passed an unsupported selector state to this method.\n\n",
  69: 'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
  70: 'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
  71: 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
  72: 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
  73: "Please provide a valid CSS variable.\n\n",
  74: "CSS variable not found and no default was provided.\n\n",
  75: "important requires a valid style object, got a %s instead.\n\n",
  76: "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  77: 'remToPx expects a value in "rem" but you provided it in "%s".\n\n',
  78: 'base must be set in "px" or "%" but you set it in "%s".\n'
}
function format() {
  for (
    var _len = arguments.length, args2 = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args2[_key] = arguments[_key]
  }
  var a2 = args2[0]
  var b2 = []
  var c2
  for (c2 = 1; c2 < args2.length; c2 += 1) {
    b2.push(args2[c2])
  }
  b2.forEach(function (d2) {
    a2 = a2.replace(/%[a-z]/, d2)
  })
  return a2
}
var PolishedError = (function (_Error) {
  _inheritsLoose(PolishedError2, _Error)
  function PolishedError2(code) {
    var _this
    if (false) {
      _this =
        _Error.call(
          this,
          "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
            code +
            " for more information."
        ) || this
    } else {
      for (
        var _len2 = arguments.length,
          args2 = new Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args2[_key2 - 1] = arguments[_key2]
      }
      _this =
        _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args2))) ||
        this
    }
    return _assertThisInitialized(_this)
  }
  return PolishedError2
})(_wrapNativeSuper(Error))
function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix
}
var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
function stripUnit(value3) {
  if (typeof value3 !== "string") return value3
  var matchedValue = value3.match(cssRegex$1)
  return matchedValue ? parseFloat(value3) : value3
}
var pxtoFactory = function pxtoFactory2(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = "16px"
    }
    var newPxval = pxval
    var newBase = base
    if (typeof pxval === "string") {
      if (!endsWith(pxval, "px")) {
        throw new PolishedError(69, to, pxval)
      }
      newPxval = stripUnit(pxval)
    }
    if (typeof base === "string") {
      if (!endsWith(base, "px")) {
        throw new PolishedError(70, to, base)
      }
      newBase = stripUnit(base)
    }
    if (typeof newPxval === "string") {
      throw new PolishedError(71, pxval, to)
    }
    if (typeof newBase === "string") {
      throw new PolishedError(72, base, to)
    }
    return "" + newPxval / newBase + to
  }
}
var pixelsto = pxtoFactory
var em = pixelsto("em")
var rem = pixelsto("rem")
function colorToInt(color) {
  return Math.round(color * 255)
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue)
}
function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt
  }
  if (saturation === 0) {
    return convert(lightness, lightness, lightness)
  }
  var huePrime = (((hue % 360) + 360) % 360) / 60
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))
  var red = 0
  var green = 0
  var blue = 0
  if (huePrime >= 0 && huePrime < 1) {
    red = chroma
    green = secondComponent
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent
    green = chroma
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma
    blue = secondComponent
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent
    blue = chroma
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent
    blue = chroma
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma
    blue = secondComponent
  }
  var lightnessModification = lightness - chroma / 2
  var finalRed = red + lightnessModification
  var finalGreen = green + lightnessModification
  var finalBlue = blue + lightnessModification
  return convert(finalRed, finalGreen, finalBlue)
}
var namedColorMap = {
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
}
function nameToHex(color) {
  if (typeof color !== "string") return color
  var normalizedColorName = color.toLowerCase()
  return namedColorMap[normalizedColorName]
    ? "#" + namedColorMap[normalizedColorName]
    : color
}
var hexRegex = /^#[a-fA-F0-9]{6}$/
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/
var rgbRegex =
  /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i
var rgbaRegex =
  /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
var hslRegex =
  /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i
var hslaRegex =
  /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
function parseToRgb(color) {
  if (typeof color !== "string") {
    throw new PolishedError(3)
  }
  var normalizedColor = nameToHex(color)
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    }
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat(
      (
        parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255
      ).toFixed(2)
    )
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha
    }
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    }
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat(
      (
        parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255
      ).toFixed(2)
    )
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    }
  }
  var rgbMatched = rgbRegex.exec(normalizedColor)
  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    }
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50))
  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha:
        parseFloat("" + rgbaMatched[4]) > 1
          ? parseFloat("" + rgbaMatched[4]) / 100
          : parseFloat("" + rgbaMatched[4])
    }
  }
  var hslMatched = hslRegex.exec(normalizedColor)
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10)
    var saturation = parseInt("" + hslMatched[2], 10) / 100
    var lightness = parseInt("" + hslMatched[3], 10) / 100
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")"
    var hslRgbMatched = rgbRegex.exec(rgbColorString)
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString)
    }
    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    }
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50))
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10)
    var _saturation = parseInt("" + hslaMatched[2], 10) / 100
    var _lightness = parseInt("" + hslaMatched[3], 10) / 100
    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")"
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString)
    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString)
    }
    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha:
        parseFloat("" + hslaMatched[4]) > 1
          ? parseFloat("" + hslaMatched[4]) / 100
          : parseFloat("" + hslaMatched[4])
    }
  }
  throw new PolishedError(5)
}
function rgbToHsl(color) {
  var red = color.red / 255
  var green = color.green / 255
  var blue = color.blue / 255
  var max = Math.max(red, green, blue)
  var min = Math.min(red, green, blue)
  var lightness = (max + min) / 2
  if (max === min) {
    if (color.alpha !== void 0) {
      return {
        hue: 0,
        saturation: 0,
        lightness,
        alpha: color.alpha
      }
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness
      }
    }
  }
  var hue
  var delta = max - min
  var saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0)
      break
    case green:
      hue = (blue - red) / delta + 2
      break
    default:
      hue = (red - green) / delta + 4
      break
  }
  hue *= 60
  if (color.alpha !== void 0) {
    return {
      hue,
      saturation,
      lightness,
      alpha: color.alpha
    }
  }
  return {
    hue,
    saturation,
    lightness
  }
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color))
}
var reduceHexValue = function reduceHexValue2(value3) {
  if (
    value3.length === 7 &&
    value3[1] === value3[2] &&
    value3[3] === value3[4] &&
    value3[5] === value3[6]
  ) {
    return "#" + value3[1] + value3[3] + value3[5]
  }
  return value3
}
var reduceHexValue$1 = reduceHexValue
function numberToHex(value3) {
  var hex = value3.toString(16)
  return hex.length === 1 ? "0" + hex : hex
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255))
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1(
    "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue)
  )
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex)
}
function hsl(value3, saturation, lightness) {
  if (
    typeof value3 === "number" &&
    typeof saturation === "number" &&
    typeof lightness === "number"
  ) {
    return hslToHex(value3, saturation, lightness)
  } else if (
    typeof value3 === "object" &&
    saturation === void 0 &&
    lightness === void 0
  ) {
    return hslToHex(value3.hue, value3.saturation, value3.lightness)
  }
  throw new PolishedError(1)
}
function hsla(value3, saturation, lightness, alpha) {
  if (
    typeof value3 === "number" &&
    typeof saturation === "number" &&
    typeof lightness === "number" &&
    typeof alpha === "number"
  ) {
    return alpha >= 1
      ? hslToHex(value3, saturation, lightness)
      : "rgba(" + hslToRgb(value3, saturation, lightness) + "," + alpha + ")"
  } else if (
    typeof value3 === "object" &&
    saturation === void 0 &&
    lightness === void 0 &&
    alpha === void 0
  ) {
    return value3.alpha >= 1
      ? hslToHex(value3.hue, value3.saturation, value3.lightness)
      : "rgba(" +
          hslToRgb(value3.hue, value3.saturation, value3.lightness) +
          "," +
          value3.alpha +
          ")"
  }
  throw new PolishedError(2)
}
function rgb(value3, green, blue) {
  if (
    typeof value3 === "number" &&
    typeof green === "number" &&
    typeof blue === "number"
  ) {
    return reduceHexValue$1(
      "#" + numberToHex(value3) + numberToHex(green) + numberToHex(blue)
    )
  } else if (
    typeof value3 === "object" &&
    green === void 0 &&
    blue === void 0
  ) {
    return reduceHexValue$1(
      "#" +
        numberToHex(value3.red) +
        numberToHex(value3.green) +
        numberToHex(value3.blue)
    )
  }
  throw new PolishedError(6)
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === "string" && typeof secondValue === "number") {
    var rgbValue = parseToRgb(firstValue)
    return (
      "rgba(" +
      rgbValue.red +
      "," +
      rgbValue.green +
      "," +
      rgbValue.blue +
      "," +
      secondValue +
      ")"
    )
  } else if (
    typeof firstValue === "number" &&
    typeof secondValue === "number" &&
    typeof thirdValue === "number" &&
    typeof fourthValue === "number"
  ) {
    return fourthValue >= 1
      ? rgb(firstValue, secondValue, thirdValue)
      : "rgba(" +
          firstValue +
          "," +
          secondValue +
          "," +
          thirdValue +
          "," +
          fourthValue +
          ")"
  } else if (
    typeof firstValue === "object" &&
    secondValue === void 0 &&
    thirdValue === void 0 &&
    fourthValue === void 0
  ) {
    return firstValue.alpha >= 1
      ? rgb(firstValue.red, firstValue.green, firstValue.blue)
      : "rgba(" +
          firstValue.red +
          "," +
          firstValue.green +
          "," +
          firstValue.blue +
          "," +
          firstValue.alpha +
          ")"
  }
  throw new PolishedError(7)
}
var isRgb = function isRgb2(color) {
  return (
    typeof color.red === "number" &&
    typeof color.green === "number" &&
    typeof color.blue === "number" &&
    (typeof color.alpha !== "number" || typeof color.alpha === "undefined")
  )
}
var isRgba = function isRgba2(color) {
  return (
    typeof color.red === "number" &&
    typeof color.green === "number" &&
    typeof color.blue === "number" &&
    typeof color.alpha === "number"
  )
}
var isHsl = function isHsl2(color) {
  return (
    typeof color.hue === "number" &&
    typeof color.saturation === "number" &&
    typeof color.lightness === "number" &&
    (typeof color.alpha !== "number" || typeof color.alpha === "undefined")
  )
}
var isHsla = function isHsla2(color) {
  return (
    typeof color.hue === "number" &&
    typeof color.saturation === "number" &&
    typeof color.lightness === "number" &&
    typeof color.alpha === "number"
  )
}
function toColorString(color) {
  if (typeof color !== "object") throw new PolishedError(8)
  if (isRgba(color)) return rgba(color)
  if (isRgb(color)) return rgb(color)
  if (isHsla(color)) return hsla(color)
  if (isHsl(color)) return hsl(color)
  throw new PolishedError(8)
}
function curried(f3, length, acc) {
  return function fn() {
    var combined = acc.concat(Array.prototype.slice.call(arguments))
    return combined.length >= length
      ? f3.apply(this, combined)
      : curried(f3, length, combined)
  }
}
function curry(f3) {
  return curried(f3, f3.length, [])
}
function adjustHue(degree, color) {
  if (color === "transparent") return color
  var hslColor = parseToHsl(color)
  return toColorString(
    _extends({}, hslColor, {
      hue: hslColor.hue + parseFloat(degree)
    })
  )
}
var curriedAdjustHue = curry(adjustHue)
function guard(lowerBoundary, upperBoundary, value3) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value3))
}
function darken(amount, color) {
  if (color === "transparent") return color
  var hslColor = parseToHsl(color)
  return toColorString(
    _extends({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
    })
  )
}
var curriedDarken = curry(darken)
var curriedDarken$1 = curriedDarken
function desaturate(amount, color) {
  if (color === "transparent") return color
  var hslColor = parseToHsl(color)
  return toColorString(
    _extends({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
    })
  )
}
var curriedDesaturate = curry(desaturate)
function lighten(amount, color) {
  if (color === "transparent") return color
  var hslColor = parseToHsl(color)
  return toColorString(
    _extends({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
    })
  )
}
var curriedLighten = curry(lighten)
var curriedLighten$1 = curriedLighten
function mix(weight, color, otherColor) {
  if (color === "transparent") return otherColor
  if (otherColor === "transparent") return color
  if (weight === 0) return otherColor
  var parsedColor1 = parseToRgb(color)
  var color1 = _extends({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1
  })
  var parsedColor2 = parseToRgb(otherColor)
  var color2 = _extends({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1
  })
  var alphaDelta = color1.alpha - color2.alpha
  var x2 = parseFloat(weight) * 2 - 1
  var y2 = x2 * alphaDelta === -1 ? x2 : x2 + alphaDelta
  var z2 = 1 + x2 * alphaDelta
  var weight1 = (y2 / z2 + 1) / 2
  var weight2 = 1 - weight1
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha:
      color1.alpha * parseFloat(weight) +
      color2.alpha * (1 - parseFloat(weight))
  }
  return rgba(mixedColor)
}
var curriedMix = curry(mix)
var mix$1 = curriedMix
function opacify(amount, color) {
  if (color === "transparent") return color
  var parsedColor = parseToRgb(color)
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  })
  return rgba(colorWithAlpha)
}
var curriedOpacify = curry(opacify)
var curriedOpacify$1 = curriedOpacify
function saturate(amount, color) {
  if (color === "transparent") return color
  var hslColor = parseToHsl(color)
  return toColorString(
    _extends({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
    })
  )
}
var curriedSaturate = curry(saturate)
function setHue(hue, color) {
  if (color === "transparent") return color
  return toColorString(
    _extends({}, parseToHsl(color), {
      hue: parseFloat(hue)
    })
  )
}
var curriedSetHue = curry(setHue)
function setLightness(lightness, color) {
  if (color === "transparent") return color
  return toColorString(
    _extends({}, parseToHsl(color), {
      lightness: parseFloat(lightness)
    })
  )
}
var curriedSetLightness = curry(setLightness)
function setSaturation(saturation, color) {
  if (color === "transparent") return color
  return toColorString(
    _extends({}, parseToHsl(color), {
      saturation: parseFloat(saturation)
    })
  )
}
var curriedSetSaturation = curry(setSaturation)
function shade(percentage, color) {
  if (color === "transparent") return color
  return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color)
}
var curriedShade = curry(shade)
function tint(percentage, color) {
  if (color === "transparent") return color
  return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color)
}
var curriedTint = curry(tint)
function transparentize(amount, color) {
  if (color === "transparent") return color
  var parsedColor = parseToRgb(color)
  var alpha = typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1
  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: guard(
      0,
      1,
      +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100
    )
  })
  return rgba(colorWithAlpha)
}
var curriedTransparentize = curry(transparentize)
var curriedTransparentize$1 = curriedTransparentize

// node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pr_6cc5odt3xmihpgdygh6iolouyi/node_modules/@storybook/blocks/dist/index.mjs
var import_global = __toESM(require_global(), 1)
var import_pickBy = __toESM(require_pickBy(), 1)
var import_client_logger = __toESM(require_client_logger(), 1)

// node_modules/.pnpm/markdown-to-jsx@7.5.0_react@18.3.1/node_modules/markdown-to-jsx/dist/index.modern.js
var e = __toESM(require_react())
function t() {
  return (
    (t = Object.assign
      ? Object.assign.bind()
      : function (e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2]
            for (var r2 in n2)
              Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2])
          }
          return e2
        }),
    t.apply(this, arguments)
  )
}
var n = ["children", "options"]
var r = {
  blockQuote: "0",
  breakLine: "1",
  breakThematic: "2",
  codeBlock: "3",
  codeFenced: "4",
  codeInline: "5",
  footnote: "6",
  footnoteReference: "7",
  gfmTask: "8",
  heading: "9",
  headingSetext: "10",
  htmlBlock: "11",
  htmlComment: "12",
  htmlSelfClosing: "13",
  image: "14",
  link: "15",
  linkAngleBraceStyleDetector: "16",
  linkBareUrlDetector: "17",
  linkMailtoDetector: "18",
  newlineCoalescer: "19",
  orderedList: "20",
  paragraph: "21",
  ref: "22",
  refImage: "23",
  refLink: "24",
  table: "25",
  tableSeparator: "26",
  text: "27",
  textBolded: "28",
  textEmphasized: "29",
  textEscaped: "30",
  textMarked: "31",
  textStrikethroughed: "32",
  unorderedList: "33"
}
var i
!(function (e2) {
  ;(e2[(e2.MAX = 0)] = "MAX"),
    (e2[(e2.HIGH = 1)] = "HIGH"),
    (e2[(e2.MED = 2)] = "MED"),
    (e2[(e2.LOW = 3)] = "LOW"),
    (e2[(e2.MIN = 4)] = "MIN")
})(i || (i = {}))
var l = [
  "allowFullScreen",
  "allowTransparency",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "charSet",
  "className",
  "classId",
  "colSpan",
  "contentEditable",
  "contextMenu",
  "crossOrigin",
  "encType",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "hrefLang",
  "inputMode",
  "keyParams",
  "keyType",
  "marginHeight",
  "marginWidth",
  "maxLength",
  "mediaGroup",
  "minLength",
  "noValidate",
  "radioGroup",
  "readOnly",
  "rowSpan",
  "spellCheck",
  "srcDoc",
  "srcLang",
  "srcSet",
  "tabIndex",
  "useMap"
].reduce((e2, t2) => ((e2[t2.toLowerCase()] = t2), e2), { for: "htmlFor" })
var a = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }
var o = ["style", "script"]
var c =
  /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi
var s = /mailto:/i
var d = /\n{2,}$/
var u = /^(\s*>[\s\S]*?)(?=\n{2,})/
var p = /^ *> ?/gm
var f2 = /^ {2,}\n/
var h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/
var m = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/
var g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/
var y = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/
var k = /^(?:\n *)*\n/
var x = /\r\n?/g
var b = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/
var v = /^\[\^([^\]]+)]/
var S = /\f/g
var E = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/
var $ = /^\s*?\[(x|\s)\]/
var w = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/
var C = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/
var z = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/
var L =
  /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i
var A = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi
var T = /^<!--[\s\S]*?(?:-->)/
var O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/
var B = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i
var M = /^\{.*\}$/
var R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/
var I = /^<([^ >]+@[^ >]+)>/
var U = /^<([^ >]+:\/[^ >]+)>/
var D = /-([a-z])?/gi
var j2 = /^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/
var N = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/
var H = /^!\[([^\]]*)\] ?\[([^\]]*)\]/
var F = /^\[([^\]]*)\] ?\[([^\]]*)\]/
var P2 = /(\[|\])/g
var _ = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/
var W = /\t/g
var G = /(^ *\||\| *$)/g
var Z = /^ *:-+: *$/
var q = /^ *:-+ *$/
var Q = /^ *-+: *$/
var V =
  "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)"
var X = new RegExp(`^([*_])\\1${V}\\1\\1(?!\\1)`)
var J = new RegExp(`^([*_])${V}\\1(?!\\1|\\w)`)
var K = new RegExp(`^==${V}==`)
var Y = new RegExp(`^~~${V}~~`)
var ee2 = /^\\([^0-9A-Za-z\s])/
var te =
  /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i
var ne = /^\n+/
var re = /^([ \t]*)/
var ie = /\\([^\\])/g
var le = / *\n+$/
var ae = /(?:^|\n)( *)$/
var oe = "(?:\\d+\\.)"
var ce = "(?:[*+-])"
function se(e2) {
  return "( *)(" + (1 === e2 ? oe : ce) + ") +"
}
var de = se(1)
var ue = se(2)
function pe(e2) {
  return new RegExp("^" + (1 === e2 ? de : ue))
}
var fe = pe(1)
var he = pe(2)
function me(e2) {
  return new RegExp(
    "^" +
      (1 === e2 ? de : ue) +
      "[^\\n]*(?:\\n(?!\\1" +
      (1 === e2 ? oe : ce) +
      " )[^\\n]*)*(\\n|$)",
    "gm"
  )
}
var ge = me(1)
var ye = me(2)
function ke(e2) {
  const t2 = 1 === e2 ? oe : ce
  return new RegExp(
    "^( *)(" +
      t2 +
      ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" +
      t2 +
      " (?!" +
      t2 +
      " ))\\n*|\\s*\\n*$)"
  )
}
var xe = ke(1)
var be = ke(2)
function ve(e2, t2) {
  const n2 = 1 === t2,
    i2 = n2 ? xe : be,
    l2 = n2 ? ge : ye,
    a2 = n2 ? fe : he
  return {
    match(e3, t3, n3) {
      const r2 = ae.exec(n3)
      return r2 && (t3.list || (!t3.inline && !t3.simple))
        ? i2.exec((e3 = r2[1] + e3))
        : null
    },
    order: 1,
    parse(e3, t3, r2) {
      const i3 = n2 ? +e3[2] : void 0,
        o2 = e3[0].replace(d, "\n").match(l2)
      let c2 = false
      return {
        items: o2.map(function (e4, n3) {
          const i4 = a2.exec(e4)[0].length,
            l3 = new RegExp("^ {1," + i4 + "}", "gm"),
            s2 = e4.replace(l3, "").replace(a2, ""),
            d2 = n3 === o2.length - 1,
            u2 = -1 !== s2.indexOf("\n\n") || (d2 && c2)
          c2 = u2
          const p2 = r2.inline,
            f3 = r2.list
          let h2
          ;(r2.list = true),
            u2
              ? ((r2.inline = false), (h2 = s2.replace(le, "\n\n")))
              : ((r2.inline = true), (h2 = s2.replace(le, "")))
          const m2 = t3(h2, r2)
          return (r2.inline = p2), (r2.list = f3), m2
        }),
        ordered: n2,
        start: i3
      }
    },
    render: (t3, n3, i3) =>
      e2(
        t3.ordered ? "ol" : "ul",
        { key: i3.key, start: t3.type === r.orderedList ? t3.start : void 0 },
        t3.items.map(function (t4, r2) {
          return e2("li", { key: r2 }, n3(t4, i3))
        })
      )
  }
}
var Se = new RegExp(
  `^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`
)
var Ee = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/
var $e = [u, m, g, w, z, C, T, j2, ge, xe, ye, be]
var we = [...$e, /^[^\n]+(?:  \n|\n{2,})/, L, B]
function Ce(e2) {
  return e2
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase()
}
function ze(e2) {
  return Q.test(e2)
    ? "right"
    : Z.test(e2)
      ? "center"
      : q.test(e2)
        ? "left"
        : null
}
function Le(e2, t2, n2, i2) {
  const l2 = n2.inTable
  n2.inTable = true
  let a2 = e2
    .trim()
    .split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/)
    .reduce(
      (e3, l3) => (
        "|" === l3.trim()
          ? e3.push(
              i2 ? { type: r.tableSeparator } : { type: r.text, text: l3 }
            )
          : "" !== l3 && e3.push.apply(e3, t2(l3, n2)),
        e3
      ),
      []
    )
  n2.inTable = l2
  let o2 = [[]]
  return (
    a2.forEach(function (e3, t3) {
      e3.type === r.tableSeparator
        ? 0 !== t3 && t3 !== a2.length - 1 && o2.push([])
        : (e3.type !== r.text ||
            (null != a2[t3 + 1] && a2[t3 + 1].type !== r.tableSeparator) ||
            (e3.text = e3.text.trimEnd()),
          o2[o2.length - 1].push(e3))
    }),
    o2
  )
}
function Ae(e2, t2, n2) {
  n2.inline = true
  const i2 = e2[2] ? e2[2].replace(G, "").split("|").map(ze) : [],
    l2 = e2[3]
      ? (function (e3, t3, n3) {
          return e3
            .trim()
            .split("\n")
            .map(function (e4) {
              return Le(e4, t3, n3, true)
            })
        })(e2[3], t2, n2)
      : [],
    a2 = Le(e2[1], t2, n2, !!l2.length)
  return (
    (n2.inline = false),
    l2.length
      ? { align: i2, cells: l2, header: a2, type: r.table }
      : { children: a2, type: r.paragraph }
  )
}
function Te(e2, t2) {
  return null == e2.align[t2] ? {} : { textAlign: e2.align[t2] }
}
function Oe(e2) {
  return function (t2, n2) {
    return n2.inline ? e2.exec(t2) : null
  }
}
function Be(e2) {
  return function (t2, n2) {
    return n2.inline || n2.simple ? e2.exec(t2) : null
  }
}
function Me(e2) {
  return function (t2, n2) {
    return n2.inline || n2.simple ? null : e2.exec(t2)
  }
}
function Re(e2) {
  return function (t2) {
    return e2.exec(t2)
  }
}
function Ie(e2, t2, n2) {
  if (t2.inline || t2.simple) return null
  if (n2 && !n2.endsWith("\n")) return null
  let r2 = ""
  e2.split("\n").every(
    (e3) => !$e.some((t3) => t3.test(e3)) && ((r2 += e3 + "\n"), e3.trim())
  )
  const i2 = r2.trimEnd()
  return "" == i2 ? null : [r2, i2]
}
function Ue(e2) {
  try {
    if (
      decodeURIComponent(e2)
        .replace(/[^A-Za-z0-9/:]/g, "")
        .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
    )
      return null
  } catch (e3) {
    return null
  }
  return e2
}
function De(e2) {
  return e2.replace(ie, "$1")
}
function je(e2, t2, n2) {
  const r2 = n2.inline || false,
    i2 = n2.simple || false
  ;(n2.inline = true), (n2.simple = true)
  const l2 = e2(t2, n2)
  return (n2.inline = r2), (n2.simple = i2), l2
}
function Ne2(e2, t2, n2) {
  const r2 = n2.inline || false,
    i2 = n2.simple || false
  ;(n2.inline = false), (n2.simple = true)
  const l2 = e2(t2, n2)
  return (n2.inline = r2), (n2.simple = i2), l2
}
function He(e2, t2, n2) {
  const r2 = n2.inline || false
  n2.inline = false
  const i2 = e2(t2, n2)
  return (n2.inline = r2), i2
}
var Fe = (e2, t2, n2) => ({ children: je(t2, e2[1], n2) })
function Pe() {
  return {}
}
function _e() {
  return null
}
function We(...e2) {
  return e2.filter(Boolean).join(" ")
}
function Ge(e2, t2, n2) {
  let r2 = e2
  const i2 = t2.split(".")
  for (; i2.length && ((r2 = r2[i2[0]]), void 0 !== r2); ) i2.shift()
  return r2 || n2
}
function Ze(n2 = "", i2 = {}) {
  function d2(e2, n3, ...r2) {
    const l2 = Ge(i2.overrides, `${e2}.props`, {})
    return i2.createElement(
      (function (e3, t2) {
        const n4 = Ge(t2, e3)
        return n4
          ? "function" == typeof n4 || ("object" == typeof n4 && "render" in n4)
            ? n4
            : Ge(t2, `${e3}.component`, e3)
          : e3
      })(e2, i2.overrides),
      t({}, n3, l2, {
        className:
          We(null == n3 ? void 0 : n3.className, l2.className) || void 0
      }),
      ...r2
    )
  }
  function G2(t2) {
    t2 = t2.replace(E, "")
    let n3 = false
    i2.forceInline ? (n3 = true) : i2.forceBlock || (n3 = false === _.test(t2))
    const r2 = le2(
      ie2(
        n3
          ? t2
          : `${t2.trimEnd().replace(ne, "")}

`,
        { inline: n3 }
      )
    )
    for (; "string" == typeof r2[r2.length - 1] && !r2[r2.length - 1].trim(); )
      r2.pop()
    if (null === i2.wrapper) return r2
    const l2 = i2.wrapper || (n3 ? "span" : "div")
    let a2
    if (r2.length > 1 || i2.forceWrapper) a2 = r2
    else {
      if (1 === r2.length)
        return (
          (a2 = r2[0]),
          "string" == typeof a2 ? d2("span", { key: "outer" }, a2) : a2
        )
      a2 = null
    }
    return e.createElement(l2, { key: "outer" }, a2)
  }
  function Z2(t2, n3) {
    const r2 = n3.match(c)
    return r2
      ? r2.reduce(function (n4, r3, a2) {
          const o2 = r3.indexOf("=")
          if (-1 !== o2) {
            const c2 = (function (e2) {
                return (
                  -1 !== e2.indexOf("-") &&
                    null === e2.match(O) &&
                    (e2 = e2.replace(D, function (e3, t3) {
                      return t3.toUpperCase()
                    })),
                  e2
                )
              })(r3.slice(0, o2)).trim(),
              s2 = (function (e2) {
                const t3 = e2[0]
                return ('"' === t3 || "'" === t3) &&
                  e2.length >= 2 &&
                  e2[e2.length - 1] === t3
                  ? e2.slice(1, -1)
                  : e2
              })(r3.slice(o2 + 1).trim()),
              d3 = l[c2] || c2,
              u2 = (n4[d3] = (function (e2, t3, n5, r4) {
                return "style" === t3
                  ? n5.split(/;\s?/).reduce(function (e3, t4) {
                      const n6 = t4.slice(0, t4.indexOf(":"))
                      return (
                        (e3[
                          n6
                            .trim()
                            .replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())
                        ] = t4.slice(n6.length + 1).trim()),
                        e3
                      )
                    }, {})
                  : "href" === t3 || "src" === t3
                    ? r4(n5, e2, t3)
                    : (n5.match(M) && (n5 = n5.slice(1, n5.length - 1)),
                      "true" === n5 || ("false" !== n5 && n5))
              })(t2, c2, s2, i2.sanitizer))
            "string" == typeof u2 &&
              (L.test(u2) || B.test(u2)) &&
              (n4[d3] = e.cloneElement(G2(u2.trim()), { key: a2 }))
          } else "style" !== r3 && (n4[l[r3] || r3] = true)
          return n4
        }, {})
      : null
  }
  ;(i2.overrides = i2.overrides || {}),
    (i2.sanitizer = i2.sanitizer || Ue),
    (i2.slugify = i2.slugify || Ce),
    (i2.namedCodesToUnicode = i2.namedCodesToUnicode
      ? t({}, a, i2.namedCodesToUnicode)
      : a),
    (i2.createElement = i2.createElement || e.createElement)
  const q2 = [],
    Q2 = {},
    V2 = {
      [r.blockQuote]: {
        match: Me(u),
        order: 1,
        parse: (e2, t2, n3) => ({ children: t2(e2[0].replace(p, ""), n3) }),
        render: (e2, t2, n3) =>
          d2("blockquote", { key: n3.key }, t2(e2.children, n3))
      },
      [r.breakLine]: {
        match: Re(f2),
        order: 1,
        parse: Pe,
        render: (e2, t2, n3) => d2("br", { key: n3.key })
      },
      [r.breakThematic]: {
        match: Me(h),
        order: 1,
        parse: Pe,
        render: (e2, t2, n3) => d2("hr", { key: n3.key })
      },
      [r.codeBlock]: {
        match: Me(g),
        order: 0,
        parse: (e2) => ({
          lang: void 0,
          text: e2[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
        }),
        render: (e2, n3, r2) =>
          d2(
            "pre",
            { key: r2.key },
            d2(
              "code",
              t({}, e2.attrs, { className: e2.lang ? `lang-${e2.lang}` : "" }),
              e2.text
            )
          )
      },
      [r.codeFenced]: {
        match: Me(m),
        order: 0,
        parse: (e2) => ({
          attrs: Z2("code", e2[3] || ""),
          lang: e2[2] || void 0,
          text: e2[4],
          type: r.codeBlock
        })
      },
      [r.codeInline]: {
        match: Be(y),
        order: 3,
        parse: (e2) => ({ text: e2[2] }),
        render: (e2, t2, n3) => d2("code", { key: n3.key }, e2.text)
      },
      [r.footnote]: {
        match: Me(b),
        order: 0,
        parse: (e2) => (q2.push({ footnote: e2[2], identifier: e2[1] }), {}),
        render: _e
      },
      [r.footnoteReference]: {
        match: Oe(v),
        order: 1,
        parse: (e2) => ({ target: `#${i2.slugify(e2[1], Ce)}`, text: e2[1] }),
        render: (e2, t2, n3) =>
          d2(
            "a",
            { key: n3.key, href: i2.sanitizer(e2.target, "a", "href") },
            d2("sup", { key: n3.key }, e2.text)
          )
      },
      [r.gfmTask]: {
        match: Oe($),
        order: 1,
        parse: (e2) => ({ completed: "x" === e2[1].toLowerCase() }),
        render: (e2, t2, n3) =>
          d2("input", {
            checked: e2.completed,
            key: n3.key,
            readOnly: true,
            type: "checkbox"
          })
      },
      [r.heading]: {
        match: Me(i2.enforceAtxHeadings ? C : w),
        order: 1,
        parse: (e2, t2, n3) => ({
          children: je(t2, e2[2], n3),
          id: i2.slugify(e2[2], Ce),
          level: e2[1].length
        }),
        render: (e2, t2, n3) =>
          d2(`h${e2.level}`, { id: e2.id, key: n3.key }, t2(e2.children, n3))
      },
      [r.headingSetext]: {
        match: Me(z),
        order: 0,
        parse: (e2, t2, n3) => ({
          children: je(t2, e2[1], n3),
          level: "=" === e2[2] ? 1 : 2,
          type: r.heading
        })
      },
      [r.htmlBlock]: {
        match: Re(L),
        order: 1,
        parse(e2, t2, n3) {
          const [, r2] = e2[3].match(re),
            i3 = new RegExp(`^${r2}`, "gm"),
            l2 = e2[3].replace(i3, ""),
            a2 = ((c2 = l2), we.some((e3) => e3.test(c2)) ? He : je)
          var c2
          const s2 = e2[1].toLowerCase(),
            d3 = -1 !== o.indexOf(s2),
            u2 = (d3 ? s2 : e2[1]).trim(),
            p2 = { attrs: Z2(u2, e2[2]), noInnerParse: d3, tag: u2 }
          return (
            (n3.inAnchor = n3.inAnchor || "a" === s2),
            d3 ? (p2.text = e2[3]) : (p2.children = a2(t2, l2, n3)),
            (n3.inAnchor = false),
            p2
          )
        },
        render: (e2, n3, r2) =>
          d2(
            e2.tag,
            t({ key: r2.key }, e2.attrs),
            e2.text || n3(e2.children, r2)
          )
      },
      [r.htmlSelfClosing]: {
        match: Re(B),
        order: 1,
        parse(e2) {
          const t2 = e2[1].trim()
          return { attrs: Z2(t2, e2[2] || ""), tag: t2 }
        },
        render: (e2, n3, r2) => d2(e2.tag, t({}, e2.attrs, { key: r2.key }))
      },
      [r.htmlComment]: {
        match: Re(T),
        order: 1,
        parse: () => ({}),
        render: _e
      },
      [r.image]: {
        match: Be(Ee),
        order: 1,
        parse: (e2) => ({ alt: e2[1], target: De(e2[2]), title: e2[3] }),
        render: (e2, t2, n3) =>
          d2("img", {
            key: n3.key,
            alt: e2.alt || void 0,
            title: e2.title || void 0,
            src: i2.sanitizer(e2.target, "img", "src")
          })
      },
      [r.link]: {
        match: Oe(Se),
        order: 3,
        parse: (e2, t2, n3) => ({
          children: Ne2(t2, e2[1], n3),
          target: De(e2[2]),
          title: e2[3]
        }),
        render: (e2, t2, n3) =>
          d2(
            "a",
            {
              key: n3.key,
              href: i2.sanitizer(e2.target, "a", "href"),
              title: e2.title
            },
            t2(e2.children, n3)
          )
      },
      [r.linkAngleBraceStyleDetector]: {
        match: Oe(U),
        order: 0,
        parse: (e2) => ({
          children: [{ text: e2[1], type: r.text }],
          target: e2[1],
          type: r.link
        })
      },
      [r.linkBareUrlDetector]: {
        match: (e2, t2) => (t2.inAnchor ? null : Oe(R)(e2, t2)),
        order: 0,
        parse: (e2) => ({
          children: [{ text: e2[1], type: r.text }],
          target: e2[1],
          title: void 0,
          type: r.link
        })
      },
      [r.linkMailtoDetector]: {
        match: Oe(I),
        order: 0,
        parse(e2) {
          let t2 = e2[1],
            n3 = e2[1]
          return (
            s.test(n3) || (n3 = "mailto:" + n3),
            {
              children: [{ text: t2.replace("mailto:", ""), type: r.text }],
              target: n3,
              type: r.link
            }
          )
        }
      },
      [r.orderedList]: ve(d2, 1),
      [r.unorderedList]: ve(d2, 2),
      [r.newlineCoalescer]: {
        match: Me(k),
        order: 3,
        parse: Pe,
        render: () => "\n"
      },
      [r.paragraph]: {
        match: Ie,
        order: 3,
        parse: Fe,
        render: (e2, t2, n3) => d2("p", { key: n3.key }, t2(e2.children, n3))
      },
      [r.ref]: {
        match: Oe(N),
        order: 0,
        parse: (e2) => ((Q2[e2[1]] = { target: e2[2], title: e2[4] }), {}),
        render: _e
      },
      [r.refImage]: {
        match: Be(H),
        order: 0,
        parse: (e2) => ({ alt: e2[1] || void 0, ref: e2[2] }),
        render: (e2, t2, n3) =>
          Q2[e2.ref]
            ? d2("img", {
                key: n3.key,
                alt: e2.alt,
                src: i2.sanitizer(Q2[e2.ref].target, "img", "src"),
                title: Q2[e2.ref].title
              })
            : null
      },
      [r.refLink]: {
        match: Oe(F),
        order: 0,
        parse: (e2, t2, n3) => ({
          children: t2(e2[1], n3),
          fallbackChildren: t2(e2[0].replace(P2, "\\$1"), n3),
          ref: e2[2]
        }),
        render: (e2, t2, n3) =>
          Q2[e2.ref]
            ? d2(
                "a",
                {
                  key: n3.key,
                  href: i2.sanitizer(Q2[e2.ref].target, "a", "href"),
                  title: Q2[e2.ref].title
                },
                t2(e2.children, n3)
              )
            : d2("span", { key: n3.key }, t2(e2.fallbackChildren, n3))
      },
      [r.table]: {
        match: Me(j2),
        order: 1,
        parse: Ae,
        render(e2, t2, n3) {
          const r2 = e2
          return d2(
            "table",
            { key: n3.key },
            d2(
              "thead",
              null,
              d2(
                "tr",
                null,
                r2.header.map(function (e3, i3) {
                  return d2("th", { key: i3, style: Te(r2, i3) }, t2(e3, n3))
                })
              )
            ),
            d2(
              "tbody",
              null,
              r2.cells.map(function (e3, i3) {
                return d2(
                  "tr",
                  { key: i3 },
                  e3.map(function (e4, i4) {
                    return d2("td", { key: i4, style: Te(r2, i4) }, t2(e4, n3))
                  })
                )
              })
            )
          )
        }
      },
      [r.text]: {
        match: Re(te),
        order: 4,
        parse: (e2) => ({
          text: e2[0].replace(A, (e3, t2) =>
            i2.namedCodesToUnicode[t2] ? i2.namedCodesToUnicode[t2] : e3
          )
        }),
        render: (e2) => e2.text
      },
      [r.textBolded]: {
        match: Be(X),
        order: 2,
        parse: (e2, t2, n3) => ({ children: t2(e2[2], n3) }),
        render: (e2, t2, n3) =>
          d2("strong", { key: n3.key }, t2(e2.children, n3))
      },
      [r.textEmphasized]: {
        match: Be(J),
        order: 3,
        parse: (e2, t2, n3) => ({ children: t2(e2[2], n3) }),
        render: (e2, t2, n3) => d2("em", { key: n3.key }, t2(e2.children, n3))
      },
      [r.textEscaped]: {
        match: Be(ee2),
        order: 1,
        parse: (e2) => ({ text: e2[1], type: r.text })
      },
      [r.textMarked]: {
        match: Be(K),
        order: 3,
        parse: Fe,
        render: (e2, t2, n3) => d2("mark", { key: n3.key }, t2(e2.children, n3))
      },
      [r.textStrikethroughed]: {
        match: Be(Y),
        order: 3,
        parse: Fe,
        render: (e2, t2, n3) => d2("del", { key: n3.key }, t2(e2.children, n3))
      }
    }
  true === i2.disableParsingRawHTML &&
    (delete V2[r.htmlBlock], delete V2[r.htmlSelfClosing])
  const ie2 = (function (e2) {
      let t2 = Object.keys(e2)
      function n3(r2, i3) {
        let l2 = [],
          a2 = ""
        for (; r2; ) {
          let o2 = 0
          for (; o2 < t2.length; ) {
            const c2 = t2[o2],
              s2 = e2[c2],
              d3 = s2.match(r2, i3, a2)
            if (d3) {
              const e3 = d3[0]
              r2 = r2.substring(e3.length)
              const t3 = s2.parse(d3, n3, i3)
              null == t3.type && (t3.type = c2), l2.push(t3), (a2 = e3)
              break
            }
            o2++
          }
        }
        return l2
      }
      return (
        t2.sort(function (t3, n4) {
          let r2 = e2[t3].order,
            i3 = e2[n4].order
          return r2 !== i3 ? r2 - i3 : t3 < n4 ? -1 : 1
        }),
        function (e3, t3) {
          return n3(
            (function (e4) {
              return e4.replace(x, "\n").replace(S, "").replace(W, "    ")
            })(e3),
            t3
          )
        }
      )
    })(V2),
    le2 =
      ((ae2 = /* @__PURE__ */ (function (e2, t2) {
        return function (n3, r2, i3) {
          const l2 = e2[n3.type].render
          return t2 ? t2(() => l2(n3, r2, i3), n3, r2, i3) : l2(n3, r2, i3)
        }
      })(V2, i2.renderRule)),
      function e2(t2, n3 = {}) {
        if (Array.isArray(t2)) {
          const r2 = n3.key,
            i3 = []
          let l2 = false
          for (let r3 = 0; r3 < t2.length; r3++) {
            n3.key = r3
            const a2 = e2(t2[r3], n3),
              o2 = "string" == typeof a2
            o2 && l2 ? (i3[i3.length - 1] += a2) : null !== a2 && i3.push(a2),
              (l2 = o2)
          }
          return (n3.key = r2), i3
        }
        return ae2(t2, e2, n3)
      })
  var ae2
  const oe2 = G2(n2)
  return q2.length
    ? d2(
        "div",
        null,
        oe2,
        d2(
          "footer",
          { key: "footer" },
          q2.map(function (e2) {
            return d2(
              "div",
              { id: i2.slugify(e2.identifier, Ce), key: e2.identifier },
              e2.identifier,
              le2(ie2(e2.footnote, { inline: true }))
            )
          })
        )
      )
    : oe2
}
var index_modern_default = (t2) => {
  let { children: r2 = "", options: i2 } = t2,
    l2 = (function (e2, t3) {
      if (null == e2) return {}
      var n2,
        r3,
        i3 = {},
        l3 = Object.keys(e2)
      for (r3 = 0; r3 < l3.length; r3++)
        t3.indexOf((n2 = l3[r3])) >= 0 || (i3[n2] = e2[n2])
      return i3
    })(t2, n)
  return e.cloneElement(Ze(r2, i2), l2)
}

// node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pr_6cc5odt3xmihpgdygh6iolouyi/node_modules/@storybook/blocks/dist/index.mjs
var import_memoizerific2 = __toESM(require_memoizerific(), 1)
var import_uniq = __toESM(require_uniq(), 1)
var import_cloneDeep = __toESM(require_cloneDeep(), 1)
var import_preview_api = __toESM(require_preview_api(), 1)

// node_modules/.pnpm/telejson@7.2.0/node_modules/telejson/dist/chunk-465TF3XA.mjs
var __create = Object.create
var __defProp = Object.defineProperty
var __getOwnPropDesc = Object.getOwnPropertyDescriptor
var __getOwnPropNames = Object.getOwnPropertyNames
var __getProtoOf = Object.getPrototypeOf
var __hasOwnProp = Object.prototype.hasOwnProperty
var __commonJS3 = (cb, mod) =>
  function __require2() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    )
  }
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, {
          get: () => from[key2],
          enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable
        })
  }
  return to
}
var __toESM3 = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
)
var eventProperties = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
]
var customEventSpecificProperties = ["detail"]
function extractEventHiddenProperties(event) {
  const rebuildEvent = eventProperties
    .filter((value3) => event[value3] !== void 0)
    .reduce((acc, value3) => {
      return { ...acc, [value3]: event[value3] }
    }, {})
  if (event instanceof CustomEvent) {
    customEventSpecificProperties
      .filter((value3) => event[value3] !== void 0)
      .forEach((value3) => {
        rebuildEvent[value3] = event[value3]
      })
  }
  return rebuildEvent
}

// node_modules/.pnpm/telejson@7.2.0/node_modules/telejson/dist/index.mjs
var import_memoizerific = __toESM(require_memoizerific(), 1)
var require_shams = __commonJS3({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict"
    module.exports = function hasSymbols() {
      if (
        typeof Symbol !== "function" ||
        typeof Object.getOwnPropertySymbols !== "function"
      ) {
        return false
      }
      if (typeof Symbol.iterator === "symbol") {
        return true
      }
      var obj = {}
      var sym = Symbol("test")
      var symObj = Object(sym)
      if (typeof sym === "string") {
        return false
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false
      }
      var symVal = 42
      obj[sym] = symVal
      for (sym in obj) {
        return false
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false
      }
      if (
        typeof Object.getOwnPropertyNames === "function" &&
        Object.getOwnPropertyNames(obj).length !== 0
      ) {
        return false
      }
      var syms = Object.getOwnPropertySymbols(obj)
      if (syms.length !== 1 || syms[0] !== sym) {
        return false
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym)
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false
        }
      }
      return true
    }
  }
})
var require_has_symbols = __commonJS3({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict"
    var origSymbol = typeof Symbol !== "undefined" && Symbol
    var hasSymbolSham = require_shams()
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false
      }
      if (typeof Symbol !== "function") {
        return false
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false
      }
      return hasSymbolSham()
    }
  }
})
var require_implementation = __commonJS3({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict"
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible "
    var slice = Array.prototype.slice
    var toStr = Object.prototype.toString
    var funcType = "[object Function]"
    module.exports = function bind(that) {
      var target = this
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target)
      }
      var args2 = slice.call(arguments, 1)
      var bound
      var binder = function () {
        if (this instanceof bound) {
          var result2 = target.apply(this, args2.concat(slice.call(arguments)))
          if (Object(result2) === result2) {
            return result2
          }
          return this
        } else {
          return target.apply(that, args2.concat(slice.call(arguments)))
        }
      }
      var boundLength = Math.max(0, target.length - args2.length)
      var boundArgs = []
      for (var i2 = 0; i2 < boundLength; i2++) {
        boundArgs.push("$" + i2)
      }
      bound = Function(
        "binder",
        "return function (" +
          boundArgs.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(binder)
      if (target.prototype) {
        var Empty2 = function Empty22() {}
        Empty2.prototype = target.prototype
        bound.prototype = new Empty2()
        Empty2.prototype = null
      }
      return bound
    }
  }
})
var require_function_bind = __commonJS3({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict"
    var implementation = require_implementation()
    module.exports = Function.prototype.bind || implementation
  }
})
var require_src = __commonJS3({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict"
    var bind = require_function_bind()
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty)
  }
})
var require_get_intrinsic = __commonJS3({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict"
    var undefined2
    var $SyntaxError = SyntaxError
    var $Function = Function
    var $TypeError = TypeError
    var getEvalledConstructor = function (expressionSyntax) {
      try {
        return $Function(
          '"use strict"; return (' + expressionSyntax + ").constructor;"
        )()
      } catch (e2) {}
    }
    var $gOPD = Object.getOwnPropertyDescriptor
    if ($gOPD) {
      try {
        $gOPD({}, "")
      } catch (e2) {
        $gOPD = null
      }
    }
    var throwTypeError = function () {
      throw new $TypeError()
    }
    var ThrowTypeError = $gOPD
      ? (function () {
          try {
            arguments.callee
            return throwTypeError
          } catch (calleeThrows) {
            try {
              return $gOPD(arguments, "callee").get
            } catch (gOPDthrows) {
              return throwTypeError
            }
          }
        })()
      : throwTypeError
    var hasSymbols = require_has_symbols()()
    var getProto =
      Object.getPrototypeOf ||
      function (x2) {
        return x2.__proto__
      }
    var needsEval = {}
    var TypedArray =
      typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array)
    var INTRINSICS = {
      "%AggregateError%":
        typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%":
        typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols
        ? getProto([][Symbol.iterator]())
        : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%":
        typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%":
        typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%":
        typeof FinalizationRegistry === "undefined"
          ? undefined2
          : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%":
        typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%":
        typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols
        ? getProto(getProto([][Symbol.iterator]()))
        : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%":
        typeof Map === "undefined" || !hasSymbols
          ? undefined2
          : getProto(/* @__PURE__ */ new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%":
        typeof Set === "undefined" || !hasSymbols
          ? undefined2
          : getProto(/* @__PURE__ */ new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%":
        typeof SharedArrayBuffer === "undefined"
          ? undefined2
          : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols
        ? getProto(""[Symbol.iterator]())
        : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%":
        typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%":
        typeof Uint8ClampedArray === "undefined"
          ? undefined2
          : Uint8ClampedArray,
      "%Uint16Array%":
        typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%":
        typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    }
    var doEval = function doEval2(name2) {
      var value22
      if (name2 === "%AsyncFunction%") {
        value22 = getEvalledConstructor("async function () {}")
      } else if (name2 === "%GeneratorFunction%") {
        value22 = getEvalledConstructor("function* () {}")
      } else if (name2 === "%AsyncGeneratorFunction%") {
        value22 = getEvalledConstructor("async function* () {}")
      } else if (name2 === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%")
        if (fn) {
          value22 = fn.prototype
        }
      } else if (name2 === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%")
        if (gen) {
          value22 = getProto(gen.prototype)
        }
      }
      INTRINSICS[name2] = value22
      return value22
    }
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }
    var bind = require_function_bind()
    var hasOwn = require_src()
    var $concat = bind.call(Function.call, Array.prototype.concat)
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice)
    var $replace = bind.call(Function.call, String.prototype.replace)
    var $strSlice = bind.call(Function.call, String.prototype.slice)
    var $exec = bind.call(Function.call, RegExp.prototype.exec)
    var rePropName2 =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
    var reEscapeChar2 = /\\(\\)?/g
    var stringToPath2 = function stringToPath3(string) {
      var first = $strSlice(string, 0, 1)
      var last = $strSlice(string, -1)
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`")
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`")
      }
      var result2 = []
      $replace(string, rePropName2, function (match, number, quote, subString) {
        result2[result2.length] = quote
          ? $replace(subString, reEscapeChar2, "$1")
          : number || match
      })
      return result2
    }
    var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
      var intrinsicName = name2
      var alias
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName]
        intrinsicName = "%" + alias[0] + "%"
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value22 = INTRINSICS[intrinsicName]
        if (value22 === needsEval) {
          value22 = doEval(intrinsicName)
        }
        if (typeof value22 === "undefined" && !allowMissing) {
          throw new $TypeError(
            "intrinsic " +
              name2 +
              " exists, but is not available. Please file an issue!"
          )
        }
        return {
          alias,
          name: intrinsicName,
          value: value22
        }
      }
      throw new $SyntaxError("intrinsic " + name2 + " does not exist!")
    }
    module.exports = function GetIntrinsic(name2, allowMissing) {
      if (typeof name2 !== "string" || name2.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string")
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean')
      }
      if ($exec(/^%?[^%]*%?$/, name2) === null) {
        throw new $SyntaxError(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        )
      }
      var parts = stringToPath2(name2)
      var intrinsicBaseName = parts.length > 0 ? parts[0] : ""
      var intrinsic = getBaseIntrinsic(
        "%" + intrinsicBaseName + "%",
        allowMissing
      )
      var intrinsicRealName = intrinsic.name
      var value22 = intrinsic.value
      var skipFurtherCaching = false
      var alias = intrinsic.alias
      if (alias) {
        intrinsicBaseName = alias[0]
        $spliceApply(parts, $concat([0, 1], alias))
      }
      for (var i2 = 1, isOwn = true; i2 < parts.length; i2 += 1) {
        var part = parts[i2]
        var first = $strSlice(part, 0, 1)
        var last = $strSlice(part, -1)
        if (
          (first === '"' ||
            first === "'" ||
            first === "`" ||
            last === '"' ||
            last === "'" ||
            last === "`") &&
          first !== last
        ) {
          throw new $SyntaxError(
            "property names with quotes must have matching quotes"
          )
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true
        }
        intrinsicBaseName += "." + part
        intrinsicRealName = "%" + intrinsicBaseName + "%"
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value22 = INTRINSICS[intrinsicRealName]
        } else if (value22 != null) {
          if (!(part in value22)) {
            if (!allowMissing) {
              throw new $TypeError(
                "base intrinsic for " +
                  name2 +
                  " exists, but the property is not available."
              )
            }
            return void 0
          }
          if ($gOPD && i2 + 1 >= parts.length) {
            var desc = $gOPD(value22, part)
            isOwn = !!desc
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value22 = desc.get
            } else {
              value22 = value22[part]
            }
          } else {
            isOwn = hasOwn(value22, part)
            value22 = value22[part]
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value22
          }
        }
      }
      return value22
    }
  }
})
var require_call_bind = __commonJS3({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict"
    var bind = require_function_bind()
    var GetIntrinsic = require_get_intrinsic()
    var $apply = GetIntrinsic("%Function.prototype.apply%")
    var $call = GetIntrinsic("%Function.prototype.call%")
    var $reflectApply =
      GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply)
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true)
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true)
    var $max = GetIntrinsic("%Math.max%")
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 })
      } catch (e2) {
        $defineProperty = null
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments)
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length")
        if (desc.configurable) {
          $defineProperty(func, "length", {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
          })
        }
      }
      return func
    }
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments)
    }
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind })
    } else {
      module.exports.apply = applyBind
    }
  }
})
var require_callBound = __commonJS3({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict"
    var GetIntrinsic = require_get_intrinsic()
    var callBind = require_call_bind()
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"))
    module.exports = function callBoundIntrinsic(name2, allowMissing) {
      var intrinsic = GetIntrinsic(name2, !!allowMissing)
      if (
        typeof intrinsic === "function" &&
        $indexOf(name2, ".prototype.") > -1
      ) {
        return callBind(intrinsic)
      }
      return intrinsic
    }
  }
})
var require_shams2 = __commonJS3({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict"
    var hasSymbols = require_shams()
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag
    }
  }
})
var require_is_regex = __commonJS3({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict"
    var callBound = require_callBound()
    var hasToStringTag = require_shams2()()
    var has
    var $exec
    var isRegexMarker
    var badStringifier
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty")
      $exec = callBound("RegExp.prototype.exec")
      isRegexMarker = {}
      throwRegexMarker = function () {
        throw isRegexMarker
      }
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      }
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker
      }
    }
    var throwRegexMarker
    var $toString = callBound("Object.prototype.toString")
    var gOPD = Object.getOwnPropertyDescriptor
    var regexClass = "[object RegExp]"
    module.exports = hasToStringTag
      ? function isRegex(value22) {
          if (!value22 || typeof value22 !== "object") {
            return false
          }
          var descriptor = gOPD(value22, "lastIndex")
          var hasLastIndexDataProperty = descriptor && has(descriptor, "value")
          if (!hasLastIndexDataProperty) {
            return false
          }
          try {
            $exec(value22, badStringifier)
          } catch (e2) {
            return e2 === isRegexMarker
          }
        }
      : function isRegex(value22) {
          if (
            !value22 ||
            (typeof value22 !== "object" && typeof value22 !== "function")
          ) {
            return false
          }
          return $toString(value22) === regexClass
        }
  }
})
var require_is_function = __commonJS3({
  "node_modules/is-function/index.js"(exports, module) {
    module.exports = isFunction3
    var toString2 = Object.prototype.toString
    function isFunction3(fn) {
      if (!fn) {
        return false
      }
      var string = toString2.call(fn)
      return (
        string === "[object Function]" ||
        (typeof fn === "function" && string !== "[object RegExp]") ||
        (typeof window !== "undefined" &&
          (fn === window.setTimeout ||
            fn === window.alert ||
            fn === window.confirm ||
            fn === window.prompt))
      )
    }
  }
})
var require_is_symbol = __commonJS3({
  "node_modules/is-symbol/index.js"(exports, module) {
    "use strict"
    var toStr = Object.prototype.toString
    var hasSymbols = require_has_symbols()()
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString
      symStringRegex = /^Symbol\(.*\)$/
      isSymbolObject = function isRealSymbolObject(value22) {
        if (typeof value22.valueOf() !== "symbol") {
          return false
        }
        return symStringRegex.test(symToStr.call(value22))
      }
      module.exports = function isSymbol3(value22) {
        if (typeof value22 === "symbol") {
          return true
        }
        if (toStr.call(value22) !== "[object Symbol]") {
          return false
        }
        try {
          return isSymbolObject(value22)
        } catch (e2) {
          return false
        }
      }
    } else {
      module.exports = function isSymbol3(value22) {
        return false
      }
    }
    var symToStr
    var symStringRegex
    var isSymbolObject
  }
})
var import_is_regex = __toESM3(require_is_regex())
var import_is_function = __toESM3(require_is_function())
var import_is_symbol = __toESM3(require_is_symbol())
function isObject(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false
}
var freeGlobal =
  typeof global == "object" && global && global.Object === Object && global
var freeGlobal_default = freeGlobal
var freeSelf = typeof self == "object" && self && self.Object === Object && self
var root2 = freeGlobal_default || freeSelf || Function("return this")()
var root_default = root2
var Symbol2 = root_default.Symbol
var Symbol_default = Symbol2
var objectProto = Object.prototype
var hasOwnProperty = objectProto.hasOwnProperty
var nativeObjectToString = objectProto.toString
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0
function getRawTag(value22) {
  var isOwn = hasOwnProperty.call(value22, symToStringTag),
    tag = value22[symToStringTag]
  try {
    value22[symToStringTag] = void 0
    var unmasked = true
  } catch (e2) {}
  var result2 = nativeObjectToString.call(value22)
  if (unmasked) {
    if (isOwn) {
      value22[symToStringTag] = tag
    } else {
      delete value22[symToStringTag]
    }
  }
  return result2
}
var getRawTag_default = getRawTag
var objectProto2 = Object.prototype
var nativeObjectToString2 = objectProto2.toString
function objectToString(value22) {
  return nativeObjectToString2.call(value22)
}
var objectToString_default = objectToString
var nullTag = "[object Null]"
var undefinedTag = "[object Undefined]"
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0
function baseGetTag(value22) {
  if (value22 == null) {
    return value22 === void 0 ? undefinedTag : nullTag
  }
  return symToStringTag2 && symToStringTag2 in Object(value22)
    ? getRawTag_default(value22)
    : objectToString_default(value22)
}
var baseGetTag_default = baseGetTag
function isObjectLike(value22) {
  return value22 != null && typeof value22 == "object"
}
var isObjectLike_default = isObjectLike
var symbolTag = "[object Symbol]"
function isSymbol(value22) {
  return (
    typeof value22 == "symbol" ||
    (isObjectLike_default(value22) && baseGetTag_default(value22) == symbolTag)
  )
}
var isSymbol_default = isSymbol
function arrayMap(array2, iteratee) {
  var index = -1,
    length = array2 == null ? 0 : array2.length,
    result2 = Array(length)
  while (++index < length) {
    result2[index] = iteratee(array2[index], index, array2)
  }
  return result2
}
var arrayMap_default = arrayMap
var isArray = Array.isArray
var isArray_default = isArray
var INFINITY = 1 / 0
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0
var symbolToString = symbolProto ? symbolProto.toString : void 0
function baseToString(value22) {
  if (typeof value22 == "string") {
    return value22
  }
  if (isArray_default(value22)) {
    return arrayMap_default(value22, baseToString) + ""
  }
  if (isSymbol_default(value22)) {
    return symbolToString ? symbolToString.call(value22) : ""
  }
  var result2 = value22 + ""
  return result2 == "0" && 1 / value22 == -INFINITY ? "-0" : result2
}
var baseToString_default = baseToString
function isObject2(value22) {
  var type = typeof value22
  return value22 != null && (type == "object" || type == "function")
}
var isObject_default = isObject2
var asyncTag = "[object AsyncFunction]"
var funcTag = "[object Function]"
var genTag = "[object GeneratorFunction]"
var proxyTag = "[object Proxy]"
function isFunction(value22) {
  if (!isObject_default(value22)) {
    return false
  }
  var tag = baseGetTag_default(value22)
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
}
var isFunction_default = isFunction
var coreJsData = root_default["__core-js_shared__"]
var coreJsData_default = coreJsData
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData_default &&
      coreJsData_default.keys &&
      coreJsData_default.keys.IE_PROTO) ||
      ""
  )
  return uid ? "Symbol(src)_1." + uid : ""
})()
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func
}
var isMasked_default = isMasked
var funcProto = Function.prototype
var funcToString = funcProto.toString
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func)
    } catch (e2) {}
    try {
      return func + ""
    } catch (e2) {}
  }
  return ""
}
var toSource_default = toSource
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g
var reIsHostCtor = /^\[object .+?Constructor\]$/
var funcProto2 = Function.prototype
var objectProto3 = Object.prototype
var funcToString2 = funcProto2.toString
var hasOwnProperty2 = objectProto3.hasOwnProperty
var reIsNative = RegExp(
  "^" +
    funcToString2
      .call(hasOwnProperty2)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?"
      ) +
    "$"
)
function baseIsNative(value22) {
  if (!isObject_default(value22) || isMasked_default(value22)) {
    return false
  }
  var pattern = isFunction_default(value22) ? reIsNative : reIsHostCtor
  return pattern.test(toSource_default(value22))
}
var baseIsNative_default = baseIsNative
function getValue(object2, key2) {
  return object2 == null ? void 0 : object2[key2]
}
var getValue_default = getValue
function getNative(object2, key2) {
  var value22 = getValue_default(object2, key2)
  return baseIsNative_default(value22) ? value22 : void 0
}
var getNative_default = getNative
function eq(value22, other) {
  return value22 === other || (value22 !== value22 && other !== other)
}
var eq_default = eq
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
var reIsPlainProp = /^\w*$/
function isKey(value22, object2) {
  if (isArray_default(value22)) {
    return false
  }
  var type = typeof value22
  if (
    type == "number" ||
    type == "symbol" ||
    type == "boolean" ||
    value22 == null ||
    isSymbol_default(value22)
  ) {
    return true
  }
  return (
    reIsPlainProp.test(value22) ||
    !reIsDeepProp.test(value22) ||
    (object2 != null && value22 in Object(object2))
  )
}
var isKey_default = isKey
var nativeCreate = getNative_default(Object, "create")
var nativeCreate_default = nativeCreate
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}
  this.size = 0
}
var hashClear_default = hashClear
function hashDelete(key2) {
  var result2 = this.has(key2) && delete this.__data__[key2]
  this.size -= result2 ? 1 : 0
  return result2
}
var hashDelete_default = hashDelete
var HASH_UNDEFINED = "__lodash_hash_undefined__"
var objectProto4 = Object.prototype
var hasOwnProperty3 = objectProto4.hasOwnProperty
function hashGet(key2) {
  var data = this.__data__
  if (nativeCreate_default) {
    var result2 = data[key2]
    return result2 === HASH_UNDEFINED ? void 0 : result2
  }
  return hasOwnProperty3.call(data, key2) ? data[key2] : void 0
}
var hashGet_default = hashGet
var objectProto5 = Object.prototype
var hasOwnProperty4 = objectProto5.hasOwnProperty
function hashHas(key2) {
  var data = this.__data__
  return nativeCreate_default
    ? data[key2] !== void 0
    : hasOwnProperty4.call(data, key2)
}
var hashHas_default = hashHas
var HASH_UNDEFINED2 = "__lodash_hash_undefined__"
function hashSet(key2, value22) {
  var data = this.__data__
  this.size += this.has(key2) ? 0 : 1
  data[key2] =
    nativeCreate_default && value22 === void 0 ? HASH_UNDEFINED2 : value22
  return this
}
var hashSet_default = hashSet
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}
Hash.prototype.clear = hashClear_default
Hash.prototype["delete"] = hashDelete_default
Hash.prototype.get = hashGet_default
Hash.prototype.has = hashHas_default
Hash.prototype.set = hashSet_default
var Hash_default = Hash
function listCacheClear() {
  this.__data__ = []
  this.size = 0
}
var listCacheClear_default = listCacheClear
function assocIndexOf(array2, key2) {
  var length = array2.length
  while (length--) {
    if (eq_default(array2[length][0], key2)) {
      return length
    }
  }
  return -1
}
var assocIndexOf_default = assocIndexOf
var arrayProto = Array.prototype
var splice = arrayProto.splice
function listCacheDelete(key2) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key2)
  if (index < 0) {
    return false
  }
  var lastIndex = data.length - 1
  if (index == lastIndex) {
    data.pop()
  } else {
    splice.call(data, index, 1)
  }
  --this.size
  return true
}
var listCacheDelete_default = listCacheDelete
function listCacheGet(key2) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key2)
  return index < 0 ? void 0 : data[index][1]
}
var listCacheGet_default = listCacheGet
function listCacheHas(key2) {
  return assocIndexOf_default(this.__data__, key2) > -1
}
var listCacheHas_default = listCacheHas
function listCacheSet(key2, value22) {
  var data = this.__data__,
    index = assocIndexOf_default(data, key2)
  if (index < 0) {
    ++this.size
    data.push([key2, value22])
  } else {
    data[index][1] = value22
  }
  return this
}
var listCacheSet_default = listCacheSet
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}
ListCache.prototype.clear = listCacheClear_default
ListCache.prototype["delete"] = listCacheDelete_default
ListCache.prototype.get = listCacheGet_default
ListCache.prototype.has = listCacheHas_default
ListCache.prototype.set = listCacheSet_default
var ListCache_default = ListCache
var Map2 = getNative_default(root_default, "Map")
var Map_default = Map2
function mapCacheClear() {
  this.size = 0
  this.__data__ = {
    hash: new Hash_default(),
    map: new (Map_default || ListCache_default)(),
    string: new Hash_default()
  }
}
var mapCacheClear_default = mapCacheClear
function isKeyable(value22) {
  var type = typeof value22
  return type == "string" ||
    type == "number" ||
    type == "symbol" ||
    type == "boolean"
    ? value22 !== "__proto__"
    : value22 === null
}
var isKeyable_default = isKeyable
function getMapData(map, key2) {
  var data = map.__data__
  return isKeyable_default(key2)
    ? data[typeof key2 == "string" ? "string" : "hash"]
    : data.map
}
var getMapData_default = getMapData
function mapCacheDelete(key2) {
  var result2 = getMapData_default(this, key2)["delete"](key2)
  this.size -= result2 ? 1 : 0
  return result2
}
var mapCacheDelete_default = mapCacheDelete
function mapCacheGet(key2) {
  return getMapData_default(this, key2).get(key2)
}
var mapCacheGet_default = mapCacheGet
function mapCacheHas(key2) {
  return getMapData_default(this, key2).has(key2)
}
var mapCacheHas_default = mapCacheHas
function mapCacheSet(key2, value22) {
  var data = getMapData_default(this, key2),
    size = data.size
  data.set(key2, value22)
  this.size += data.size == size ? 0 : 1
  return this
}
var mapCacheSet_default = mapCacheSet
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entry[0], entry[1])
  }
}
MapCache.prototype.clear = mapCacheClear_default
MapCache.prototype["delete"] = mapCacheDelete_default
MapCache.prototype.get = mapCacheGet_default
MapCache.prototype.has = mapCacheHas_default
MapCache.prototype.set = mapCacheSet_default
var MapCache_default = MapCache
var FUNC_ERROR_TEXT = "Expected a function"
function memoize(func, resolver) {
  if (
    typeof func != "function" ||
    (resolver != null && typeof resolver != "function")
  ) {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  var memoized = function () {
    var args2 = arguments,
      key2 = resolver ? resolver.apply(this, args2) : args2[0],
      cache = memoized.cache
    if (cache.has(key2)) {
      return cache.get(key2)
    }
    var result2 = func.apply(this, args2)
    memoized.cache = cache.set(key2, result2) || cache
    return result2
  }
  memoized.cache = new (memoize.Cache || MapCache_default)()
  return memoized
}
memoize.Cache = MapCache_default
var memoize_default = memoize
var MAX_MEMOIZE_SIZE = 500
function memoizeCapped(func) {
  var result2 = memoize_default(func, function (key2) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear()
    }
    return key2
  })
  var cache = result2.cache
  return result2
}
var memoizeCapped_default = memoizeCapped
var rePropName =
  /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var reEscapeChar = /\\(\\)?/g
var stringToPath = memoizeCapped_default(function (string) {
  var result2 = []
  if (string.charCodeAt(0) === 46) {
    result2.push("")
  }
  string.replace(rePropName, function (match, number, quote, subString) {
    result2.push(
      quote ? subString.replace(reEscapeChar, "$1") : number || match
    )
  })
  return result2
})
var stringToPath_default = stringToPath
function toString(value22) {
  return value22 == null ? "" : baseToString_default(value22)
}
var toString_default = toString
function castPath(value22, object2) {
  if (isArray_default(value22)) {
    return value22
  }
  return isKey_default(value22, object2)
    ? [value22]
    : stringToPath_default(toString_default(value22))
}
var castPath_default = castPath
var INFINITY2 = 1 / 0
function toKey(value22) {
  if (typeof value22 == "string" || isSymbol_default(value22)) {
    return value22
  }
  var result2 = value22 + ""
  return result2 == "0" && 1 / value22 == -INFINITY2 ? "-0" : result2
}
var toKey_default = toKey
function baseGet(object2, path) {
  path = castPath_default(path, object2)
  var index = 0,
    length = path.length
  while (object2 != null && index < length) {
    object2 = object2[toKey_default(path[index++])]
  }
  return index && index == length ? object2 : void 0
}
var baseGet_default = baseGet
function get(object2, path, defaultValue) {
  var result2 = object2 == null ? void 0 : baseGet_default(object2, path)
  return result2 === void 0 ? defaultValue : result2
}
var get_default = get
var isObject3 = isObject
var removeCodeComments = (code) => {
  let inQuoteChar = null
  let inBlockComment = false
  let inLineComment = false
  let inRegexLiteral = false
  let newCode = ""
  if (code.indexOf("//") >= 0 || code.indexOf("/*") >= 0) {
    for (let i2 = 0; i2 < code.length; i2 += 1) {
      if (
        !inQuoteChar &&
        !inBlockComment &&
        !inLineComment &&
        !inRegexLiteral
      ) {
        if (code[i2] === '"' || code[i2] === "'" || code[i2] === "`") {
          inQuoteChar = code[i2]
        } else if (code[i2] === "/" && code[i2 + 1] === "*") {
          inBlockComment = true
        } else if (code[i2] === "/" && code[i2 + 1] === "/") {
          inLineComment = true
        } else if (code[i2] === "/" && code[i2 + 1] !== "/") {
          inRegexLiteral = true
        }
      } else {
        if (
          inQuoteChar &&
          ((code[i2] === inQuoteChar && code[i2 - 1] !== "\\") ||
            (code[i2] === "\n" && inQuoteChar !== "`"))
        ) {
          inQuoteChar = null
        }
        if (
          inRegexLiteral &&
          ((code[i2] === "/" && code[i2 - 1] !== "\\") || code[i2] === "\n")
        ) {
          inRegexLiteral = false
        }
        if (inBlockComment && code[i2 - 1] === "/" && code[i2 - 2] === "*") {
          inBlockComment = false
        }
        if (inLineComment && code[i2] === "\n") {
          inLineComment = false
        }
      }
      if (!inBlockComment && !inLineComment) {
        newCode += code[i2]
      }
    }
  } else {
    newCode = code
  }
  return newCode
}
var cleanCode = (0, import_memoizerific.default)(1e4)((code) =>
  removeCodeComments(code).replace(/\n\s*/g, "").trim()
)
var convertShorthandMethods = function convertShorthandMethods2(
  key2,
  stringified
) {
  const fnHead = stringified.slice(0, stringified.indexOf("{"))
  const fnBody = stringified.slice(stringified.indexOf("{"))
  if (fnHead.includes("=>")) {
    return stringified
  }
  if (fnHead.includes("function")) {
    return stringified
  }
  let modifiedHead = fnHead
  modifiedHead = modifiedHead.replace(key2, "function")
  return modifiedHead + fnBody
}
var dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
var isJSON = (input) => input.match(/^[\[\{\"\}].*[\]\}\"]$/)
function convertUnconventionalData(data) {
  if (!isObject3(data)) {
    return data
  }
  let result2 = data
  let wasMutated = false
  if (typeof Event !== "undefined" && data instanceof Event) {
    result2 = extractEventHiddenProperties(result2)
    wasMutated = true
  }
  result2 = Object.keys(result2).reduce((acc, key2) => {
    try {
      if (result2[key2]) {
        result2[key2].toJSON
      }
      acc[key2] = result2[key2]
    } catch (err) {
      wasMutated = true
    }
    return acc
  }, {})
  return wasMutated ? result2 : data
}
var replacer = function replacer2(options2) {
  let objects
  let map
  let stack
  let keys
  return function replace(key2, value22) {
    try {
      if (key2 === "") {
        keys = []
        objects = /* @__PURE__ */ new Map([[value22, "[]"]])
        map = /* @__PURE__ */ new Map()
        stack = []
        return value22
      }
      const origin = map.get(this) || this
      while (stack.length && origin !== stack[0]) {
        stack.shift()
        keys.pop()
      }
      if (typeof value22 === "boolean") {
        return value22
      }
      if (value22 === void 0) {
        if (!options2.allowUndefined) {
          return void 0
        }
        return "_undefined_"
      }
      if (value22 === null) {
        return null
      }
      if (typeof value22 === "number") {
        if (value22 === -Infinity) {
          return "_-Infinity_"
        }
        if (value22 === Infinity) {
          return "_Infinity_"
        }
        if (Number.isNaN(value22)) {
          return "_NaN_"
        }
        return value22
      }
      if (typeof value22 === "bigint") {
        return `_bigint_${value22.toString()}`
      }
      if (typeof value22 === "string") {
        if (dateFormat.test(value22)) {
          if (!options2.allowDate) {
            return void 0
          }
          return `_date_${value22}`
        }
        return value22
      }
      if ((0, import_is_regex.default)(value22)) {
        if (!options2.allowRegExp) {
          return void 0
        }
        return `_regexp_${value22.flags}|${value22.source}`
      }
      if ((0, import_is_function.default)(value22)) {
        if (!options2.allowFunction) {
          return void 0
        }
        const { name: name2 } = value22
        const stringified = value22.toString()
        if (
          !stringified.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
        ) {
          return `_function_${name2}|${cleanCode(convertShorthandMethods(key2, stringified))}`
        }
        return `_function_${name2}|${(() => {}).toString()}`
      }
      if ((0, import_is_symbol.default)(value22)) {
        if (!options2.allowSymbol) {
          return void 0
        }
        const globalRegistryKey = Symbol.keyFor(value22)
        if (globalRegistryKey !== void 0) {
          return `_gsymbol_${globalRegistryKey}`
        }
        return `_symbol_${value22.toString().slice(7, -1)}`
      }
      if (stack.length >= options2.maxDepth) {
        if (Array.isArray(value22)) {
          return `[Array(${value22.length})]`
        }
        return "[Object]"
      }
      if (value22 === this) {
        return `_duplicate_${JSON.stringify(keys)}`
      }
      if (value22 instanceof Error && options2.allowError) {
        return {
          __isConvertedError__: true,
          errorProperties: {
            ...(value22.cause ? { cause: value22.cause } : {}),
            ...value22,
            name: value22.name,
            message: value22.message,
            stack: value22.stack,
            "_constructor-name_": value22.constructor.name
          }
        }
      }
      if (
        value22.constructor &&
        value22.constructor.name &&
        value22.constructor.name !== "Object" &&
        !Array.isArray(value22) &&
        !options2.allowClass
      ) {
        return void 0
      }
      const found = objects.get(value22)
      if (!found) {
        const converted = Array.isArray(value22)
          ? value22
          : convertUnconventionalData(value22)
        if (
          value22.constructor &&
          value22.constructor.name &&
          value22.constructor.name !== "Object" &&
          !Array.isArray(value22) &&
          options2.allowClass
        ) {
          try {
            Object.assign(converted, {
              "_constructor-name_": value22.constructor.name
            })
          } catch (e2) {}
        }
        keys.push(key2)
        stack.unshift(converted)
        objects.set(value22, JSON.stringify(keys))
        if (value22 !== converted) {
          map.set(value22, converted)
        }
        return converted
      }
      return `_duplicate_${found}`
    } catch (e2) {
      return void 0
    }
  }
}
var reviver2 = function reviver(options) {
  const refs = []
  let root
  return function revive(key, value) {
    if (key === "") {
      root = value
      refs.forEach(({ target, container, replacement }) => {
        const replacementArr = isJSON(replacement)
          ? JSON.parse(replacement)
          : replacement.split(".")
        if (replacementArr.length === 0) {
          container[target] = root
        } else {
          container[target] = get_default(root, replacementArr)
        }
      })
    }
    if (key === "_constructor-name_") {
      return value
    }
    if (isObject3(value) && value.__isConvertedError__) {
      const { message, ...properties } = value.errorProperties
      const error = new Error(message)
      Object.assign(error, properties)
      return error
    }
    if (
      isObject3(value) &&
      value["_constructor-name_"] &&
      options.allowFunction
    ) {
      const name2 = value["_constructor-name_"]
      if (name2 !== "Object") {
        const Fn = new Function(
          `return function ${name2.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`
        )()
        Object.setPrototypeOf(value, new Fn())
      }
      delete value["_constructor-name_"]
      return value
    }
    if (
      typeof value === "string" &&
      value.startsWith("_function_") &&
      options.allowFunction
    ) {
      const [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || []
      const sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "")
      if (!options.lazyEval) {
        return eval(`(${sourceSanitized})`)
      }
      const result = (...args) => {
        const f = eval(`(${sourceSanitized})`)
        return f(...args)
      }
      Object.defineProperty(result, "toString", {
        value: () => sourceSanitized
      })
      Object.defineProperty(result, "name", {
        value: name
      })
      return result
    }
    if (
      typeof value === "string" &&
      value.startsWith("_regexp_") &&
      options.allowRegExp
    ) {
      const [, flags, source2] = value.match(/_regexp_([^|]*)\|(.*)/) || []
      return new RegExp(source2, flags)
    }
    if (
      typeof value === "string" &&
      value.startsWith("_date_") &&
      options.allowDate
    ) {
      return new Date(value.replace("_date_", ""))
    }
    if (typeof value === "string" && value.startsWith("_duplicate_")) {
      refs.push({
        target: key,
        container: this,
        replacement: value.replace(/^_duplicate_/, "")
      })
      return null
    }
    if (
      typeof value === "string" &&
      value.startsWith("_symbol_") &&
      options.allowSymbol
    ) {
      return Symbol(value.replace("_symbol_", ""))
    }
    if (
      typeof value === "string" &&
      value.startsWith("_gsymbol_") &&
      options.allowSymbol
    ) {
      return Symbol.for(value.replace("_gsymbol_", ""))
    }
    if (typeof value === "string" && value === "_-Infinity_") {
      return -Infinity
    }
    if (typeof value === "string" && value === "_Infinity_") {
      return Infinity
    }
    if (typeof value === "string" && value === "_NaN_") {
      return NaN
    }
    if (
      typeof value === "string" &&
      value.startsWith("_bigint_") &&
      typeof BigInt === "function"
    ) {
      return BigInt(value.replace("_bigint_", ""))
    }
    return value
  }
}
var defaultOptions = {
  maxDepth: 10,
  space: void 0,
  allowFunction: true,
  allowRegExp: true,
  allowDate: true,
  allowClass: true,
  allowError: true,
  allowUndefined: true,
  allowSymbol: true,
  lazyEval: true
}
var stringify = (data, options2 = {}) => {
  const mergedOptions = { ...defaultOptions, ...options2 }
  return JSON.stringify(
    convertUnconventionalData(data),
    replacer(mergedOptions),
    options2.space
  )
}
var mutator = () => {
  const mutated = /* @__PURE__ */ new Map()
  return function mutateUndefined(value22) {
    if (isObject3(value22)) {
      Object.entries(value22).forEach(([k2, v2]) => {
        if (v2 === "_undefined_") {
          value22[k2] = void 0
        } else if (!mutated.get(v2)) {
          mutated.set(v2, true)
          mutateUndefined(v2)
        }
      })
    }
    if (Array.isArray(value22)) {
      value22.forEach((v2, index) => {
        if (v2 === "_undefined_") {
          mutated.set(v2, true)
          value22[index] = void 0
        } else if (!mutated.get(v2)) {
          mutated.set(v2, true)
          mutateUndefined(v2)
        }
      })
    }
  }
}
var parse = (data, options2 = {}) => {
  const mergedOptions = { ...defaultOptions, ...options2 }
  const result2 = JSON.parse(data, reviver2(mergedOptions))
  mutator()(result2)
  return result2
}

// node_modules/.pnpm/@storybook+blocks@8.2.9_react-dom@18.3.1_react@18.3.1__react@18.3.1_storybook@8.2.9_@babel+pr_6cc5odt3xmihpgdygh6iolouyi/node_modules/@storybook/blocks/dist/index.mjs
var import_core_events = __toESM(require_core_events(), 1)
var import_channels = __toESM(require_channels(), 1)
var require_default_options = __commonJS2({
  "../../node_modules/tocbot/src/js/default-options.js"(exports, module) {
    module.exports = {
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3",
      ignoreSelector: ".js-toc-ignore",
      hasInnerContainers: false,
      linkClass: "toc-link",
      extraLinkClasses: "",
      activeLinkClass: "is-active-link",
      listClass: "toc-list",
      extraListClasses: "",
      isCollapsedClass: "is-collapsed",
      collapsibleClass: "is-collapsible",
      listItemClass: "toc-list-item",
      activeListItemClass: "is-active-li",
      collapseDepth: 0,
      scrollSmooth: true,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback: function (e2) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: "is-position-fixed",
      fixedSidebarOffset: "auto",
      includeHtml: false,
      includeTitleTags: false,
      onClick: function (e2) {},
      orderedList: true,
      scrollContainer: null,
      skipRendering: false,
      headingLabelCallback: false,
      ignoreHiddenElements: false,
      headingObjectCallback: null,
      basePath: "",
      disableTocScrollSync: false,
      tocScrollOffset: 0
    }
  }
})
var require_build_html = __commonJS2({
  "../../node_modules/tocbot/src/js/build-html.js"(exports, module) {
    module.exports = function (options2) {
      var forEach = [].forEach,
        some = [].some,
        body = document.body,
        tocElement,
        currentlyHighlighting = true,
        SPACE_CHAR = " "
      function createEl(d2, container) {
        var link = container.appendChild(createLink(d2))
        if (d2.children.length) {
          var list = createList(d2.isCollapsed)
          d2.children.forEach(function (child) {
            createEl(child, list)
          }),
            link.appendChild(list)
        }
      }
      function render(parent, data) {
        var collapsed = false,
          container = createList(collapsed)
        if (
          (data.forEach(function (d2) {
            createEl(d2, container)
          }),
          (tocElement = parent || tocElement),
          tocElement !== null)
        )
          return (
            tocElement.firstChild &&
              tocElement.removeChild(tocElement.firstChild),
            data.length === 0 ? tocElement : tocElement.appendChild(container)
          )
      }
      function createLink(data) {
        var item = document.createElement("li"),
          a2 = document.createElement("a")
        return (
          options2.listItemClass &&
            item.setAttribute("class", options2.listItemClass),
          options2.onClick && (a2.onclick = options2.onClick),
          options2.includeTitleTags &&
            a2.setAttribute("title", data.textContent),
          options2.includeHtml && data.childNodes.length
            ? forEach.call(data.childNodes, function (node) {
                a2.appendChild(node.cloneNode(true))
              })
            : (a2.textContent = data.textContent),
          a2.setAttribute("href", options2.basePath + "#" + data.id),
          a2.setAttribute(
            "class",
            options2.linkClass +
              SPACE_CHAR +
              "node-name--" +
              data.nodeName +
              SPACE_CHAR +
              options2.extraLinkClasses
          ),
          item.appendChild(a2),
          item
        )
      }
      function createList(isCollapsed) {
        var listElement = options2.orderedList ? "ol" : "ul",
          list = document.createElement(listElement),
          classes = options2.listClass + SPACE_CHAR + options2.extraListClasses
        return (
          isCollapsed &&
            ((classes = classes + SPACE_CHAR + options2.collapsibleClass),
            (classes = classes + SPACE_CHAR + options2.isCollapsedClass)),
          list.setAttribute("class", classes),
          list
        )
      }
      function updateFixedSidebarClass() {
        if (
          options2.scrollContainer &&
          document.querySelector(options2.scrollContainer)
        ) {
          var top
          top = document.querySelector(options2.scrollContainer).scrollTop
        } else top = document.documentElement.scrollTop || body.scrollTop
        var posFixedEl = document.querySelector(options2.positionFixedSelector)
        options2.fixedSidebarOffset === "auto" &&
          (options2.fixedSidebarOffset = tocElement.offsetTop),
          top > options2.fixedSidebarOffset
            ? posFixedEl.className.indexOf(options2.positionFixedClass) ===
                -1 &&
              (posFixedEl.className += SPACE_CHAR + options2.positionFixedClass)
            : (posFixedEl.className = posFixedEl.className.replace(
                SPACE_CHAR + options2.positionFixedClass,
                ""
              ))
      }
      function getHeadingTopPos(obj) {
        var position = 0
        return (
          obj !== null &&
            ((position = obj.offsetTop),
            options2.hasInnerContainers &&
              (position += getHeadingTopPos(obj.offsetParent))),
          position
        )
      }
      function updateClassname(obj, className) {
        return (
          obj && obj.className !== className && (obj.className = className), obj
        )
      }
      function updateToc(headingsArray) {
        if (
          options2.scrollContainer &&
          document.querySelector(options2.scrollContainer)
        ) {
          var top
          top = document.querySelector(options2.scrollContainer).scrollTop
        } else top = document.documentElement.scrollTop || body.scrollTop
        options2.positionFixedSelector && updateFixedSidebarClass()
        var headings = headingsArray,
          topHeader
        if (
          currentlyHighlighting &&
          tocElement !== null &&
          headings.length > 0
        ) {
          some.call(headings, function (heading, i2) {
            if (
              getHeadingTopPos(heading) >
              top + options2.headingsOffset + 10
            ) {
              var index = i2 === 0 ? i2 : i2 - 1
              return (topHeader = headings[index]), true
            } else if (i2 === headings.length - 1)
              return (topHeader = headings[headings.length - 1]), true
          })
          var oldActiveTocLink = tocElement.querySelector(
              "." + options2.activeLinkClass
            ),
            activeTocLink = tocElement.querySelector(
              "." +
                options2.linkClass +
                ".node-name--" +
                topHeader.nodeName +
                '[href="' +
                options2.basePath +
                "#" +
                topHeader.id.replace(
                  /([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,
                  "\\$1"
                ) +
                '"]'
            )
          if (oldActiveTocLink === activeTocLink) return
          var tocLinks = tocElement.querySelectorAll("." + options2.linkClass)
          forEach.call(tocLinks, function (tocLink) {
            updateClassname(
              tocLink,
              tocLink.className.replace(
                SPACE_CHAR + options2.activeLinkClass,
                ""
              )
            )
          })
          var tocLis = tocElement.querySelectorAll("." + options2.listItemClass)
          forEach.call(tocLis, function (tocLi) {
            updateClassname(
              tocLi,
              tocLi.className.replace(
                SPACE_CHAR + options2.activeListItemClass,
                ""
              )
            )
          }),
            activeTocLink &&
              activeTocLink.className.indexOf(options2.activeLinkClass) ===
                -1 &&
              (activeTocLink.className += SPACE_CHAR + options2.activeLinkClass)
          var li = activeTocLink && activeTocLink.parentNode
          li &&
            li.className.indexOf(options2.activeListItemClass) === -1 &&
            (li.className += SPACE_CHAR + options2.activeListItemClass)
          var tocLists = tocElement.querySelectorAll(
            "." + options2.listClass + "." + options2.collapsibleClass
          )
          forEach.call(tocLists, function (list) {
            list.className.indexOf(options2.isCollapsedClass) === -1 &&
              (list.className += SPACE_CHAR + options2.isCollapsedClass)
          }),
            activeTocLink &&
              activeTocLink.nextSibling &&
              activeTocLink.nextSibling.className.indexOf(
                options2.isCollapsedClass
              ) !== -1 &&
              updateClassname(
                activeTocLink.nextSibling,
                activeTocLink.nextSibling.className.replace(
                  SPACE_CHAR + options2.isCollapsedClass,
                  ""
                )
              ),
            removeCollapsedFromParents(
              activeTocLink && activeTocLink.parentNode.parentNode
            )
        }
      }
      function removeCollapsedFromParents(element) {
        return element &&
          element.className.indexOf(options2.collapsibleClass) !== -1 &&
          element.className.indexOf(options2.isCollapsedClass) !== -1
          ? (updateClassname(
              element,
              element.className.replace(
                SPACE_CHAR + options2.isCollapsedClass,
                ""
              )
            ),
            removeCollapsedFromParents(element.parentNode.parentNode))
          : element
      }
      function disableTocAnimation(event) {
        var target = event.target || event.srcElement
        typeof target.className != "string" ||
          target.className.indexOf(options2.linkClass) === -1 ||
          (currentlyHighlighting = false)
      }
      function enableTocAnimation() {
        currentlyHighlighting = true
      }
      return { enableTocAnimation, disableTocAnimation, render, updateToc }
    }
  }
})
var require_parse_content = __commonJS2({
  "../../node_modules/tocbot/src/js/parse-content.js"(exports, module) {
    module.exports = function (options2) {
      var reduce = [].reduce
      function getLastItem(array2) {
        return array2[array2.length - 1]
      }
      function getHeadingLevel(heading) {
        return +heading.nodeName.toUpperCase().replace("H", "")
      }
      function isHTMLElement(maybeElement) {
        try {
          return (
            maybeElement instanceof window.HTMLElement ||
            maybeElement instanceof window.parent.HTMLElement
          )
        } catch {
          return maybeElement instanceof window.HTMLElement
        }
      }
      function getHeadingObject(heading) {
        if (!isHTMLElement(heading)) return heading
        if (
          options2.ignoreHiddenElements &&
          (!heading.offsetHeight || !heading.offsetParent)
        )
          return null
        let headingLabel =
          heading.getAttribute("data-heading-label") ||
          (options2.headingLabelCallback
            ? String(options2.headingLabelCallback(heading.innerText))
            : (heading.innerText || heading.textContent).trim())
        var obj = {
          id: heading.id,
          children: [],
          nodeName: heading.nodeName,
          headingLevel: getHeadingLevel(heading),
          textContent: headingLabel
        }
        return (
          options2.includeHtml && (obj.childNodes = heading.childNodes),
          options2.headingObjectCallback
            ? options2.headingObjectCallback(obj, heading)
            : obj
        )
      }
      function addNode(node, nest) {
        for (
          var obj = getHeadingObject(node),
            level = obj.headingLevel,
            array2 = nest,
            lastItem = getLastItem(array2),
            lastItemLevel = lastItem ? lastItem.headingLevel : 0,
            counter = level - lastItemLevel;
          counter > 0 &&
          ((lastItem = getLastItem(array2)),
          !(lastItem && level === lastItem.headingLevel));

        )
          lastItem &&
            lastItem.children !== void 0 &&
            (array2 = lastItem.children),
            counter--
        return (
          level >= options2.collapseDepth && (obj.isCollapsed = true),
          array2.push(obj),
          array2
        )
      }
      function selectHeadings(contentElement, headingSelector) {
        var selectors = headingSelector
        options2.ignoreSelector &&
          (selectors = headingSelector.split(",").map(function (selector) {
            return selector.trim() + ":not(" + options2.ignoreSelector + ")"
          }))
        try {
          return contentElement.querySelectorAll(selectors)
        } catch {
          return (
            console.warn("Headers not found with selector: " + selectors), null
          )
        }
      }
      function nestHeadingsArray(headingsArray) {
        return reduce.call(
          headingsArray,
          function (prev, curr) {
            var currentHeading = getHeadingObject(curr)
            return currentHeading && addNode(currentHeading, prev.nest), prev
          },
          { nest: [] }
        )
      }
      return { nestHeadingsArray, selectHeadings }
    }
  }
})
var require_update_toc_scroll = __commonJS2({
  "../../node_modules/tocbot/src/js/update-toc-scroll.js"(exports, module) {
    module.exports = function (options2) {
      var toc =
        options2.tocElement || document.querySelector(options2.tocSelector)
      if (toc && toc.scrollHeight > toc.clientHeight) {
        var activeItem = toc.querySelector("." + options2.activeListItemClass)
        activeItem &&
          (toc.scrollTop = activeItem.offsetTop - options2.tocScrollOffset)
      }
    }
  }
})
var require_scroll_smooth = __commonJS2({
  "../../node_modules/tocbot/src/js/scroll-smooth/index.js"(exports) {
    exports.initSmoothScrolling = initSmoothScrolling
    function initSmoothScrolling(options2) {
      var duration = options2.duration,
        offset = options2.offset,
        pageUrl = location.hash ? stripHash(location.href) : location.href
      delegatedLinkHijacking()
      function delegatedLinkHijacking() {
        document.body.addEventListener("click", onClick, false)
        function onClick(e2) {
          !isInPageLink(e2.target) ||
            e2.target.className.indexOf("no-smooth-scroll") > -1 ||
            (e2.target.href.charAt(e2.target.href.length - 2) === "#" &&
              e2.target.href.charAt(e2.target.href.length - 1) === "!") ||
            e2.target.className.indexOf(options2.linkClass) === -1 ||
            jump(e2.target.hash, {
              duration,
              offset,
              callback: function () {
                setFocus(e2.target.hash)
              }
            })
        }
      }
      function isInPageLink(n2) {
        return (
          n2.tagName.toLowerCase() === "a" &&
          (n2.hash.length > 0 || n2.href.charAt(n2.href.length - 1) === "#") &&
          (stripHash(n2.href) === pageUrl ||
            stripHash(n2.href) + "#" === pageUrl)
        )
      }
      function stripHash(url) {
        return url.slice(0, url.lastIndexOf("#"))
      }
      function setFocus(hash) {
        var element = document.getElementById(hash.substring(1))
        element &&
          (/^(?:a|select|input|button|textarea)$/i.test(element.tagName) ||
            (element.tabIndex = -1),
          element.focus())
      }
    }
    function jump(target, options2) {
      var start = window.pageYOffset,
        opt = {
          duration: options2.duration,
          offset: options2.offset || 0,
          callback: options2.callback,
          easing: options2.easing || easeInOutQuad
        },
        tgt =
          document.querySelector(
            '[id="' + decodeURI(target).split("#").join("") + '"]'
          ) ||
          document.querySelector('[id="' + target.split("#").join("") + '"]'),
        distance =
          typeof target == "string"
            ? opt.offset +
              (target
                ? (tgt && tgt.getBoundingClientRect().top) || 0
                : -(
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                  ))
            : target,
        duration =
          typeof opt.duration == "function"
            ? opt.duration(distance)
            : opt.duration,
        timeStart,
        timeElapsed
      requestAnimationFrame(function (time) {
        ;(timeStart = time), loop(time)
      })
      function loop(time) {
        ;(timeElapsed = time - timeStart),
          window.scrollTo(
            0,
            opt.easing(timeElapsed, start, distance, duration)
          ),
          timeElapsed < duration ? requestAnimationFrame(loop) : end()
      }
      function end() {
        window.scrollTo(0, start + distance),
          typeof opt.callback == "function" && opt.callback()
      }
      function easeInOutQuad(t2, b2, c2, d2) {
        return (
          (t2 /= d2 / 2),
          t2 < 1
            ? (c2 / 2) * t2 * t2 + b2
            : (t2--, (-c2 / 2) * (t2 * (t2 - 2) - 1) + b2)
        )
      }
    }
  }
})
var require_js = __commonJS2({
  "../../node_modules/tocbot/src/js/index.js"(exports, module) {
    ;(function (root3, factory) {
      typeof define == "function" && define.amd
        ? define([], factory(root3))
        : typeof exports == "object"
          ? (module.exports = factory(root3))
          : (root3.tocbot = factory(root3))
    })(typeof global < "u" ? global : window || global, function (root3) {
      var defaultOptions2 = require_default_options(),
        options2 = {},
        tocbot2 = {},
        BuildHtml = require_build_html(),
        ParseContent = require_parse_content(),
        updateTocScroll = require_update_toc_scroll(),
        buildHtml,
        parseContent,
        supports =
          !!root3 &&
          !!root3.document &&
          !!root3.document.querySelector &&
          !!root3.addEventListener
      if (typeof window > "u" && !supports) return
      var headingsArray,
        hasOwnProperty5 = Object.prototype.hasOwnProperty
      function extend() {
        for (var target = {}, i2 = 0; i2 < arguments.length; i2++) {
          var source2 = arguments[i2]
          for (var key2 in source2)
            hasOwnProperty5.call(source2, key2) &&
              (target[key2] = source2[key2])
        }
        return target
      }
      function throttle(fn, threshold, scope) {
        threshold || (threshold = 250)
        var last, deferTimer
        return function () {
          var context = scope || this,
            now = +(/* @__PURE__ */ new Date()),
            args2 = arguments
          last && now < last + threshold
            ? (clearTimeout(deferTimer),
              (deferTimer = setTimeout(function () {
                ;(last = now), fn.apply(context, args2)
              }, threshold)))
            : ((last = now), fn.apply(context, args2))
        }
      }
      function getContentElement(options22) {
        try {
          return (
            options22.contentElement ||
            document.querySelector(options22.contentSelector)
          )
        } catch {
          return (
            console.warn(
              "Contents element not found: " + options22.contentSelector
            ),
            null
          )
        }
      }
      function getTocElement(options22) {
        try {
          return (
            options22.tocElement ||
            document.querySelector(options22.tocSelector)
          )
        } catch {
          return (
            console.warn("TOC element not found: " + options22.tocSelector),
            null
          )
        }
      }
      return (
        (tocbot2.destroy = function () {
          var tocElement = getTocElement(options2)
          tocElement !== null &&
            (options2.skipRendering ||
              (tocElement && (tocElement.innerHTML = "")),
            options2.scrollContainer &&
            document.querySelector(options2.scrollContainer)
              ? (document
                  .querySelector(options2.scrollContainer)
                  .removeEventListener("scroll", this._scrollListener, false),
                document
                  .querySelector(options2.scrollContainer)
                  .removeEventListener("resize", this._scrollListener, false),
                buildHtml &&
                  document
                    .querySelector(options2.scrollContainer)
                    .removeEventListener("click", this._clickListener, false))
              : (document.removeEventListener(
                  "scroll",
                  this._scrollListener,
                  false
                ),
                document.removeEventListener(
                  "resize",
                  this._scrollListener,
                  false
                ),
                buildHtml &&
                  document.removeEventListener(
                    "click",
                    this._clickListener,
                    false
                  )))
        }),
        (tocbot2.init = function (customOptions) {
          if (supports) {
            ;(options2 = extend(defaultOptions2, customOptions || {})),
              (this.options = options2),
              (this.state = {}),
              options2.scrollSmooth &&
                ((options2.duration = options2.scrollSmoothDuration),
                (options2.offset = options2.scrollSmoothOffset),
                (tocbot2.scrollSmooth =
                  require_scroll_smooth().initSmoothScrolling(options2))),
              (buildHtml = BuildHtml(options2)),
              (parseContent = ParseContent(options2)),
              (this._buildHtml = buildHtml),
              (this._parseContent = parseContent),
              (this._headingsArray = headingsArray),
              tocbot2.destroy()
            var contentElement = getContentElement(options2)
            if (contentElement !== null) {
              var tocElement = getTocElement(options2)
              if (
                tocElement !== null &&
                ((headingsArray = parseContent.selectHeadings(
                  contentElement,
                  options2.headingSelector
                )),
                headingsArray !== null)
              ) {
                var nestedHeadingsObj =
                    parseContent.nestHeadingsArray(headingsArray),
                  nestedHeadings = nestedHeadingsObj.nest
                if (!options2.skipRendering)
                  buildHtml.render(tocElement, nestedHeadings)
                else return this
                ;(this._scrollListener = throttle(function (e2) {
                  buildHtml.updateToc(headingsArray),
                    !options2.disableTocScrollSync && updateTocScroll(options2)
                  var isTop =
                    e2 &&
                    e2.target &&
                    e2.target.scrollingElement &&
                    e2.target.scrollingElement.scrollTop === 0
                  ;((e2 &&
                    (e2.eventPhase === 0 || e2.currentTarget === null)) ||
                    isTop) &&
                    (buildHtml.updateToc(headingsArray),
                    options2.scrollEndCallback &&
                      options2.scrollEndCallback(e2))
                }, options2.throttleTimeout)),
                  this._scrollListener(),
                  options2.scrollContainer &&
                  document.querySelector(options2.scrollContainer)
                    ? (document
                        .querySelector(options2.scrollContainer)
                        .addEventListener(
                          "scroll",
                          this._scrollListener,
                          false
                        ),
                      document
                        .querySelector(options2.scrollContainer)
                        .addEventListener(
                          "resize",
                          this._scrollListener,
                          false
                        ))
                    : (document.addEventListener(
                        "scroll",
                        this._scrollListener,
                        false
                      ),
                      document.addEventListener(
                        "resize",
                        this._scrollListener,
                        false
                      ))
                var timeout = null
                return (
                  (this._clickListener = throttle(function (event) {
                    options2.scrollSmooth &&
                      buildHtml.disableTocAnimation(event),
                      buildHtml.updateToc(headingsArray),
                      timeout && clearTimeout(timeout),
                      (timeout = setTimeout(function () {
                        buildHtml.enableTocAnimation()
                      }, options2.scrollSmoothDuration))
                  }, options2.throttleTimeout)),
                  options2.scrollContainer &&
                  document.querySelector(options2.scrollContainer)
                    ? document
                        .querySelector(options2.scrollContainer)
                        .addEventListener("click", this._clickListener, false)
                    : document.addEventListener(
                        "click",
                        this._clickListener,
                        false
                      ),
                  this
                )
              }
            }
          }
        }),
        (tocbot2.refresh = function (customOptions) {
          tocbot2.destroy(), tocbot2.init(customOptions || this.options)
        }),
        (root3.tocbot = tocbot2),
        tocbot2
      )
    })
  }
})
var Wrapper = Tr.div(j, ({ theme }) => ({
  backgroundColor:
    theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)",
  borderRadius: theme.appBorderRadius,
  border: `1px dashed ${theme.appBorderColor}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  margin: "25px 0 40px",
  color: curriedTransparentize$1(0.3, theme.color.defaultText),
  fontSize: theme.typography.size.s2
}))
var EmptyBlock = (props) =>
  import_react.default.createElement(Wrapper, {
    ...props,
    className: "docblock-emptyblock sb-unstyled"
  })
var StyledSyntaxHighlighter = Tr(_m)(({ theme }) => ({
  fontSize: `${theme.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: theme.appBorderRadius,
  boxShadow:
    theme.base === "light"
      ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
      : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": { padding: 20, background: "inherit" }
}))
var SourceSkeletonWrapper = Tr.div(({ theme }) => ({
  background: theme.background.content,
  borderRadius: theme.appBorderRadius,
  border: `1px solid ${theme.appBorderColor}`,
  boxShadow:
    theme.base === "light"
      ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
      : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  margin: "25px 0 40px",
  padding: "20px 20px 20px 22px"
}))
var SourceSkeletonPlaceholder = Tr.div(({ theme }) => ({
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
  background: theme.appBorderColor,
  height: 17,
  marginTop: 1,
  width: "60%",
  [`&:first-child${gc}`]: { margin: 0 }
}))
var SourceSkeleton = () =>
  import_react.default.createElement(
    SourceSkeletonWrapper,
    null,
    import_react.default.createElement(SourceSkeletonPlaceholder, null),
    import_react.default.createElement(SourceSkeletonPlaceholder, {
      style: { width: "80%" }
    }),
    import_react.default.createElement(SourceSkeletonPlaceholder, {
      style: { width: "30%" }
    }),
    import_react.default.createElement(SourceSkeletonPlaceholder, {
      style: { width: "80%" }
    })
  )
var Source = ({
  isLoading,
  error,
  language,
  code,
  dark,
  format: format2 = false,
  ...rest
}) => {
  let { typography } = Mt()
  if (isLoading) return import_react.default.createElement(SourceSkeleton, null)
  if (error) return import_react.default.createElement(EmptyBlock, null, error)
  let syntaxHighlighter = import_react.default.createElement(
    StyledSyntaxHighlighter,
    {
      bordered: true,
      copyable: true,
      format: format2,
      language,
      className: "docblock-source sb-unstyled",
      ...rest
    },
    code
  )
  if (typeof dark > "u") return syntaxHighlighter
  let overrideTheme = dark ? Ne.dark : Ne.light
  return import_react.default.createElement(
    jt,
    {
      theme: zr({
        ...overrideTheme,
        fontCode: typography.fonts.mono,
        fontBase: typography.fonts.base
      })
    },
    syntaxHighlighter
  )
}
var toGlobalSelector = (element) =>
  `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`
var breakpoint = 600
var Title = Tr.h1(j, ({ theme }) => ({
  color: theme.color.defaultText,
  fontSize: theme.typography.size.m3,
  fontWeight: theme.typography.weight.bold,
  lineHeight: "32px",
  [`@media (min-width: ${breakpoint}px)`]: {
    fontSize: theme.typography.size.l1,
    lineHeight: "36px",
    marginBottom: "16px"
  }
}))
var Subtitle = Tr.h2(j, ({ theme }) => ({
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s3,
  lineHeight: "20px",
  borderBottom: "none",
  marginBottom: 15,
  [`@media (min-width: ${breakpoint}px)`]: {
    fontSize: theme.typography.size.m1,
    lineHeight: "28px",
    marginBottom: 24
  },
  color: curriedTransparentize$1(0.25, theme.color.defaultText)
}))
var DocsContent = Tr.div(({ theme }) => {
  let reset = {
      fontFamily: theme.typography.fonts.base,
      fontSize: theme.typography.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    headers = {
      margin: "20px 0 8px",
      padding: 0,
      cursor: "text",
      position: "relative",
      color: theme.color.defaultText,
      "&:first-of-type": { marginTop: 0, paddingTop: 0 },
      "&:hover a.anchor": { textDecoration: "none" },
      "& code": { fontSize: "inherit" }
    },
    code = {
      lineHeight: 1,
      margin: "0 2px",
      padding: "3px 5px",
      whiteSpace: "nowrap",
      borderRadius: 3,
      fontSize: theme.typography.size.s2 - 1,
      border:
        theme.base === "light"
          ? `1px solid ${theme.color.mediumlight}`
          : `1px solid ${theme.color.darker}`,
      color:
        theme.base === "light"
          ? curriedTransparentize$1(0.1, theme.color.defaultText)
          : curriedTransparentize$1(0.3, theme.color.defaultText),
      backgroundColor:
        theme.base === "light" ? theme.color.lighter : theme.color.border
    }
  return {
    maxWidth: 1e3,
    width: "100%",
    [toGlobalSelector("a")]: {
      ...reset,
      fontSize: "inherit",
      lineHeight: "24px",
      color: theme.color.secondary,
      textDecoration: "none",
      "&.absent": { color: "#cc0000" },
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
    },
    [toGlobalSelector("blockquote")]: {
      ...reset,
      margin: "16px 0",
      borderLeft: `4px solid ${theme.color.medium}`,
      padding: "0 15px",
      color: theme.color.dark,
      "& > :first-of-type": { marginTop: 0 },
      "& > :last-child": { marginBottom: 0 }
    },
    [toGlobalSelector("div")]: reset,
    [toGlobalSelector("dl")]: {
      ...reset,
      margin: "16px 0",
      padding: 0,
      "& dt": {
        fontSize: "14px",
        fontWeight: "bold",
        fontStyle: "italic",
        padding: 0,
        margin: "16px 0 4px"
      },
      "& dt:first-of-type": { padding: 0 },
      "& dt > :first-of-type": { marginTop: 0 },
      "& dt > :last-child": { marginBottom: 0 },
      "& dd": { margin: "0 0 16px", padding: "0 15px" },
      "& dd > :first-of-type": { marginTop: 0 },
      "& dd > :last-child": { marginBottom: 0 }
    },
    [toGlobalSelector("h1")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.l1}px`,
      fontWeight: theme.typography.weight.bold
    },
    [toGlobalSelector("h2")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.m2}px`,
      paddingBottom: 4,
      borderBottom: `1px solid ${theme.appBorderColor}`
    },
    [toGlobalSelector("h3")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.m1}px`,
      fontWeight: theme.typography.weight.bold
    },
    [toGlobalSelector("h4")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.s3}px`
    },
    [toGlobalSelector("h5")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.s2}px`
    },
    [toGlobalSelector("h6")]: {
      ...reset,
      ...headers,
      fontSize: `${theme.typography.size.s2}px`,
      color: theme.color.dark
    },
    [toGlobalSelector("hr")]: {
      border: "0 none",
      borderTop: `1px solid ${theme.appBorderColor}`,
      height: 4,
      padding: 0
    },
    [toGlobalSelector("img")]: { maxWidth: "100%" },
    [toGlobalSelector("li")]: {
      ...reset,
      fontSize: theme.typography.size.s2,
      color: theme.color.defaultText,
      lineHeight: "24px",
      "& + li": { marginTop: ".25em" },
      "& ul, & ol": { marginTop: ".25em", marginBottom: 0 },
      "& code": code
    },
    [toGlobalSelector("ol")]: {
      ...reset,
      margin: "16px 0",
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 }
    },
    [toGlobalSelector("p")]: {
      ...reset,
      margin: "16px 0",
      fontSize: theme.typography.size.s2,
      lineHeight: "24px",
      color: theme.color.defaultText,
      "& code": code
    },
    [toGlobalSelector("pre")]: {
      ...reset,
      fontFamily: theme.typography.fonts.mono,
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
        code: { color: "inherit", fontSize: "inherit" }
      },
      "& code": { whiteSpace: "pre" },
      "& code, & tt": { border: "none" }
    },
    [toGlobalSelector("span")]: {
      ...reset,
      "&.frame": {
        display: "block",
        overflow: "hidden",
        "& > span": {
          border: `1px solid ${theme.color.medium}`,
          display: "block",
          float: "left",
          overflow: "hidden",
          margin: "13px 0 0",
          padding: 7,
          width: "auto"
        },
        "& span img": { display: "block", float: "left" },
        "& span span": {
          clear: "both",
          color: theme.color.darkest,
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
        "& span img": { margin: "0 auto", textAlign: "center" }
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
        "& span img": { margin: 0, textAlign: "right" }
      },
      "&.float-left": {
        display: "block",
        marginRight: 13,
        overflow: "hidden",
        float: "left",
        "& span": { margin: "13px 0 0" }
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
    },
    [toGlobalSelector("table")]: {
      ...reset,
      margin: "16px 0",
      fontSize: theme.typography.size.s2,
      lineHeight: "24px",
      padding: 0,
      borderCollapse: "collapse",
      "& tr": {
        borderTop: `1px solid ${theme.appBorderColor}`,
        backgroundColor: theme.appContentBg,
        margin: 0,
        padding: 0
      },
      "& tr:nth-of-type(2n)": {
        backgroundColor:
          theme.base === "dark" ? theme.color.darker : theme.color.lighter
      },
      "& tr th": {
        fontWeight: "bold",
        color: theme.color.defaultText,
        border: `1px solid ${theme.appBorderColor}`,
        margin: 0,
        padding: "6px 13px"
      },
      "& tr td": {
        border: `1px solid ${theme.appBorderColor}`,
        color: theme.color.defaultText,
        margin: 0,
        padding: "6px 13px"
      },
      "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
      "& tr th :last-child, & tr td :last-child": { marginBottom: 0 }
    },
    [toGlobalSelector("ul")]: {
      ...reset,
      margin: "16px 0",
      paddingLeft: 30,
      "& :first-of-type": { marginTop: 0 },
      "& :last-child": { marginBottom: 0 },
      listStyle: "disc"
    }
  }
})
var DocsWrapper = Tr.div(({ theme }) => ({
  background: theme.background.content,
  display: "flex",
  justifyContent: "center",
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
  gap: "3rem",
  [`@media (min-width: ${breakpoint}px)`]: {}
}))
var DocsPageWrapper = ({ children, toc }) =>
  import_react.default.createElement(
    DocsWrapper,
    { className: "sbdocs sbdocs-wrapper" },
    import_react.default.createElement(
      DocsContent,
      { className: "sbdocs sbdocs-content" },
      children
    ),
    toc
  )
var getBlockBackgroundStyle = (theme) => ({
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  boxShadow:
    theme.base === "light"
      ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
      : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  border: `1px solid ${theme.appBorderColor}`
})
var Bar = Tr(Ol)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  transition: "transform .2s linear"
})
var Wrapper2 = Tr.div({ display: "flex", alignItems: "center", gap: 4 })
var IconPlaceholder = Tr.div(({ theme }) => ({
  width: 14,
  height: 14,
  borderRadius: 2,
  margin: "0 7px",
  backgroundColor: theme.appBorderColor,
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`
}))
var Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) =>
  import_react.default.createElement(
    Bar,
    { ...rest },
    import_react.default.createElement(
      Wrapper2,
      { key: "left" },
      isLoading
        ? [1, 2, 3].map((key2) =>
            import_react.default.createElement(IconPlaceholder, { key: key2 })
          )
        : import_react.default.createElement(
            import_react.default.Fragment,
            null,
            import_react.default.createElement(
              Dl,
              {
                key: "zoomin",
                onClick: (e2) => {
                  e2.preventDefault(), zoom(0.8)
                },
                title: "Zoom in"
              },
              import_react.default.createElement(ZoomIcon, null)
            ),
            import_react.default.createElement(
              Dl,
              {
                key: "zoomout",
                onClick: (e2) => {
                  e2.preventDefault(), zoom(1.25)
                },
                title: "Zoom out"
              },
              import_react.default.createElement(ZoomOutIcon, null)
            ),
            import_react.default.createElement(
              Dl,
              {
                key: "zoomreset",
                onClick: (e2) => {
                  e2.preventDefault(), resetZoom()
                },
                title: "Reset zoom"
              },
              import_react.default.createElement(ZoomResetIcon, null)
            )
          )
    )
  )
var ZoomContext = (0, import_react.createContext)({ scale: 1 })
var { window: globalWindow } = import_global.global
var IFrame = class extends import_react.Component {
  constructor() {
    super(...arguments)
    this.iframe = null
  }
  componentDidMount() {
    let { id } = this.props
    this.iframe = globalWindow.document.getElementById(id)
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps
    return (
      scale !== this.props.scale &&
        this.setIframeBodyStyle({
          width: `${scale * 100}%`,
          height: `${scale * 100}%`,
          transform: `scale(${1 / scale})`,
          transformOrigin: "top left"
        }),
      false
    )
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style)
  }
  render() {
    let { id, title, src, allowFullScreen, scale, ...rest } = this.props
    return import_react.default.createElement("iframe", {
      id,
      title,
      src,
      ...(allowFullScreen ? { allow: "fullscreen" } : {}),
      loading: "lazy",
      ...rest
    })
  }
}
var { PREVIEW_URL } = import_global.global
var BASE_URL = PREVIEW_URL || "iframe.html"
var storyBlockIdFromId = ({ story, primary }) =>
  `story--${story.id}${primary ? "--primary" : ""}`
var InlineStory = (props) => {
  let storyRef = (0, import_react.useRef)(),
    [showLoader, setShowLoader] = (0, import_react.useState)(true),
    [error, setError] = (0, import_react.useState)(),
    { story, height, autoplay, forceInitialArgs, renderStoryToElement } = props
  return (
    (0, import_react.useEffect)(() => {
      if (!(story && storyRef.current)) return () => {}
      let element = storyRef.current,
        cleanup = renderStoryToElement(
          story,
          element,
          {
            showMain: () => {},
            showError: ({ title, description }) =>
              setError(new Error(`${title} - ${description}`)),
            showException: (err) => setError(err)
          },
          { autoplay, forceInitialArgs }
        )
      return (
        setShowLoader(false),
        () => {
          Promise.resolve().then(() => cleanup())
        }
      )
    }, [autoplay, renderStoryToElement, story]),
    error
      ? import_react.default.createElement(
          "pre",
          null,
          import_react.default.createElement(JT, { error })
        )
      : import_react.default.createElement(
          import_react.default.Fragment,
          null,
          height
            ? import_react.default.createElement(
                "style",
                null,
                `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`
              )
            : null,
          showLoader && import_react.default.createElement(StorySkeleton, null),
          import_react.default.createElement("div", {
            ref: storyRef,
            id: `${storyBlockIdFromId(props)}-inner`,
            "data-name": story.name
          })
        )
  )
}
var IFrameStory = ({ story, height = "500px" }) =>
  import_react.default.createElement(
    "div",
    { style: { width: "100%", height } },
    import_react.default.createElement(
      ZoomContext.Consumer,
      null,
      ({ scale }) =>
        import_react.default.createElement(IFrame, {
          key: "iframe",
          id: `iframe--${story.id}`,
          title: story.name,
          src: UI(BASE_URL, story.id, { viewMode: "story" }),
          allowFullScreen: true,
          scale,
          style: { width: "100%", height: "100%", border: "0 none" }
        })
    )
  )
var ErrorMessage = Tr.strong(({ theme }) => ({ color: theme.color.orange }))
var Story = (props) => {
  let { inline, story } = props
  return inline && !props.autoplay && story.usesMount
    ? import_react.default.createElement(
        ErrorMessage,
        null,
        "This story mounts inside of play. Set",
        " ",
        import_react.default.createElement(
          "a",
          {
            href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay"
          },
          "autoplay"
        ),
        " ",
        "to true to view this story."
      )
    : import_react.default.createElement(
        "div",
        {
          id: storyBlockIdFromId(props),
          className: "sb-story sb-unstyled",
          "data-story-block": "true"
        },
        inline
          ? import_react.default.createElement(InlineStory, { ...props })
          : import_react.default.createElement(IFrameStory, { ...props })
      )
}
var StorySkeleton = () => import_react.default.createElement(qI, null)
var ChildrenContainer = Tr.div(
  ({ isColumn, columns, layout }) => ({
    display: isColumn || !columns ? "block" : "flex",
    position: "relative",
    flexWrap: "wrap",
    overflow: "auto",
    flexDirection: isColumn ? "column" : "row",
    "& .innerZoomElementWrapper > *": isColumn
      ? {
          width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%",
          display: "block"
        }
      : {
          maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%",
          display: "inline-block"
        }
  }),
  ({ layout = "padded" }) =>
    layout === "centered" || layout === "padded"
      ? {
          padding: "30px 20px",
          "& .innerZoomElementWrapper > *": {
            width: "auto",
            border: "10px solid transparent!important"
          }
        }
      : {},
  ({ layout = "padded" }) =>
    layout === "centered"
      ? {
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center"
        }
      : {},
  ({ columns }) =>
    columns && columns > 1
      ? {
          ".innerZoomElementWrapper > *": {
            minWidth: `calc(100% / ${columns} - 20px)`
          }
        }
      : {}
)
var StyledSource = Tr(Source)(({ theme }) => ({
  margin: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: theme.appBorderRadius,
  borderBottomRightRadius: theme.appBorderRadius,
  border: "none",
  background:
    theme.base === "light"
      ? "rgba(0, 0, 0, 0.85)"
      : curriedDarken$1(0.05, theme.background.content),
  color: theme.color.lightest,
  button: {
    background:
      theme.base === "light"
        ? "rgba(0, 0, 0, 0.85)"
        : curriedDarken$1(0.05, theme.background.content)
  }
}))
var PreviewContainer = Tr.div(
  ({ theme, withSource, isExpanded }) => ({
    position: "relative",
    overflow: "hidden",
    margin: "25px 0 40px",
    ...getBlockBackgroundStyle(theme),
    borderBottomLeftRadius: withSource && isExpanded && 0,
    borderBottomRightRadius: withSource && isExpanded && 0,
    borderBottomWidth: isExpanded && 0,
    "h3 + &": { marginTop: "16px" }
  }),
  ({ withToolbar }) => withToolbar && { paddingTop: 40 }
)
var getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return {
        source: null,
        actionItem: {
          title: "No code available",
          className: "docblock-code-toggle docblock-code-toggle--disabled",
          disabled: true,
          onClick: () => setExpanded(false)
        }
      }
    case expanded:
      return {
        source: import_react.default.createElement(StyledSource, {
          ...withSource,
          dark: true
        }),
        actionItem: {
          title: "Hide code",
          className: "docblock-code-toggle docblock-code-toggle--expanded",
          onClick: () => setExpanded(false)
        }
      }
    default:
      return {
        source: import_react.default.createElement(StyledSource, {
          ...withSource,
          dark: true
        }),
        actionItem: {
          title: "Show code",
          className: "docblock-code-toggle",
          onClick: () => setExpanded(true)
        }
      }
  }
}
function getStoryId(children) {
  if (import_react.Children.count(children) === 1) {
    let elt = children
    if (elt.props) return elt.props.id
  }
  return null
}
var PositionedToolbar = Tr(Toolbar)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 40
})
var Relative = Tr.div({ overflow: "hidden", position: "relative" })
var Preview = ({
  isLoading,
  isColumn,
  columns,
  children,
  withSource,
  withToolbar = false,
  isExpanded = false,
  additionalActions,
  className,
  layout = "padded",
  ...props
}) => {
  let [expanded, setExpanded] = (0, import_react.useState)(isExpanded),
    { source: source2, actionItem } = getSource(
      withSource,
      expanded,
      setExpanded
    ),
    [scale, setScale] = (0, import_react.useState)(1),
    previewClasses = [className].concat([
      "sbdocs",
      "sbdocs-preview",
      "sb-unstyled"
    ]),
    defaultActionItems = withSource ? [actionItem] : [],
    [additionalActionItems, setAdditionalActionItems] = (0,
    import_react.useState)(additionalActions ? [...additionalActions] : []),
    actionItems = [...defaultActionItems, ...additionalActionItems],
    { window: globalWindow4 } = import_global.global,
    copyToClipboard = (0, import_react.useCallback)(async (text) => {
      let { createCopyToClipboardFunction } = await import(
        "./components-H77LBJIO.js"
      )
      createCopyToClipboardFunction()
    }, []),
    onCopyCapture = (e2) => {
      let selection = globalWindow4.getSelection()
      ;(selection && selection.type === "Range") ||
        (e2.preventDefault(),
        additionalActionItems.filter((item) => item.title === "Copied")
          .length === 0 &&
          copyToClipboard(source2.props.code).then(() => {
            setAdditionalActionItems([
              ...additionalActionItems,
              { title: "Copied", onClick: () => {} }
            ]),
              globalWindow4.setTimeout(
                () =>
                  setAdditionalActionItems(
                    additionalActionItems.filter(
                      (item) => item.title !== "Copied"
                    )
                  ),
                1500
              )
          }))
    }
  return import_react.default.createElement(
    PreviewContainer,
    { withSource, withToolbar, ...props, className: previewClasses.join(" ") },
    withToolbar &&
      import_react.default.createElement(PositionedToolbar, {
        isLoading,
        border: true,
        zoom: (z2) => setScale(scale * z2),
        resetZoom: () => setScale(1),
        storyId: getStoryId(children),
        baseUrl: "./iframe.html"
      }),
    import_react.default.createElement(
      ZoomContext.Provider,
      { value: { scale } },
      import_react.default.createElement(
        Relative,
        { className: "docs-story", onCopyCapture: withSource && onCopyCapture },
        import_react.default.createElement(
          ChildrenContainer,
          { isColumn: isColumn || !Array.isArray(children), columns, layout },
          import_react.default.createElement(
            qT.Element,
            { scale },
            Array.isArray(children)
              ? children.map((child, i2) =>
                  import_react.default.createElement("div", { key: i2 }, child)
                )
              : import_react.default.createElement("div", null, children)
          )
        ),
        import_react.default.createElement(Xs, { actionItems })
      )
    ),
    withSource && expanded && source2
  )
}
Tr(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }))
var Table = Tr.table(({ theme }) => ({
  "&&": {
    borderCollapse: "collapse",
    borderSpacing: 0,
    border: "none",
    tr: { border: "none !important", background: "none" },
    "td, th": { padding: 0, border: "none", width: "auto!important" },
    marginTop: 0,
    marginBottom: 0,
    "th:first-of-type, td:first-of-type": { paddingLeft: 0 },
    "th:last-of-type, td:last-of-type": { paddingRight: 0 },
    td: {
      paddingTop: 0,
      paddingBottom: 4,
      "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 }
    },
    tbody: { boxShadow: "none", border: "none" },
    code: At({ theme }),
    div: { span: { fontWeight: "bold" } },
    "& code": {
      margin: 0,
      display: "inline-block",
      fontSize: theme.typography.size.s1
    }
  }
}))
var ArgJsDoc = ({ tags }) => {
  let params = (tags.params || []).filter((x2) => x2.description),
    hasDisplayableParams = params.length !== 0,
    hasDisplayableDeprecated = tags.deprecated != null,
    hasDisplayableReturns =
      tags.returns != null && tags.returns.description != null
  return !hasDisplayableParams &&
    !hasDisplayableReturns &&
    !hasDisplayableDeprecated
    ? null
    : import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement(
          Table,
          null,
          import_react.default.createElement(
            "tbody",
            null,
            hasDisplayableDeprecated &&
              import_react.default.createElement(
                "tr",
                { key: "deprecated" },
                import_react.default.createElement(
                  "td",
                  { colSpan: 2 },
                  import_react.default.createElement(
                    "strong",
                    null,
                    "Deprecated"
                  ),
                  ": ",
                  tags.deprecated.toString()
                )
              ),
            hasDisplayableParams &&
              params.map((x2) =>
                import_react.default.createElement(
                  "tr",
                  { key: x2.name },
                  import_react.default.createElement(
                    "td",
                    null,
                    import_react.default.createElement("code", null, x2.name)
                  ),
                  import_react.default.createElement("td", null, x2.description)
                )
              ),
            hasDisplayableReturns &&
              import_react.default.createElement(
                "tr",
                { key: "returns" },
                import_react.default.createElement(
                  "td",
                  null,
                  import_react.default.createElement("code", null, "Returns")
                ),
                import_react.default.createElement(
                  "td",
                  null,
                  tags.returns.description
                )
              )
          )
        )
      )
}
var ITEMS_BEFORE_EXPANSION = 8
var Summary = Tr.div(({ isExpanded }) => ({
  display: "flex",
  flexDirection: isExpanded ? "column" : "row",
  flexWrap: "wrap",
  alignItems: "flex-start",
  marginBottom: "-4px",
  minWidth: 100
}))
var Text = Tr.span(At, ({ theme, simple = false }) => ({
  flex: "0 0 auto",
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
  wordBreak: "break-word",
  whiteSpace: "normal",
  maxWidth: "100%",
  margin: 0,
  marginRight: "4px",
  marginBottom: "4px",
  paddingTop: "2px",
  paddingBottom: "2px",
  lineHeight: "13px",
  ...(simple && { background: "transparent", border: "0 none", paddingLeft: 0 })
}))
var ExpandButton = Tr.button(({ theme }) => ({
  fontFamily: theme.typography.fonts.mono,
  color: theme.color.secondary,
  marginBottom: "4px",
  background: "none",
  border: "none"
}))
var Expandable = Tr.div(At, ({ theme }) => ({
  fontFamily: theme.typography.fonts.mono,
  color: theme.color.secondary,
  fontSize: theme.typography.size.s1,
  margin: 0,
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center"
}))
var Detail = Tr.div(({ theme, width }) => ({
  width,
  minWidth: 200,
  maxWidth: 800,
  padding: 15,
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
  boxSizing: "content-box",
  "& code": { padding: "0 !important" }
}))
var ChevronUpIcon = Tr(ChevronSmallUpIcon)({ marginLeft: 4 })
var ChevronDownIcon2 = Tr(ChevronSmallDownIcon)({ marginLeft: 4 })
var EmptyArg = () => import_react.default.createElement("span", null, "-")
var ArgText = ({ text, simple }) =>
  import_react.default.createElement(Text, { simple }, text)
var calculateDetailWidth = (0, import_memoizerific2.default)(1e3)((detail) => {
  let lines = detail.split(/\r?\n/)
  return `${Math.max(...lines.map((x2) => x2.length))}ch`
})
var getSummaryItems = (summary) => {
  if (!summary) return [summary]
  let summaryItems = summary.split("|").map((value22) => value22.trim())
  return (0, import_uniq.default)(summaryItems)
}
var renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems
  return (
    isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)),
    items.map((item) =>
      import_react.default.createElement(ArgText, {
        key: item,
        text: item === "" ? '""' : item
      })
    )
  )
}
var ArgSummary = ({ value: value22, initialExpandedArgs }) => {
  let { summary, detail } = value22,
    [isOpen, setIsOpen] = (0, import_react.useState)(false),
    [isExpanded, setIsExpanded] = (0, import_react.useState)(
      initialExpandedArgs || false
    )
  if (summary == null) return null
  let summaryAsString =
    typeof summary.toString == "function" ? summary.toString() : summary
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString))
      return import_react.default.createElement(ArgText, {
        text: summaryAsString
      })
    let summaryItems = getSummaryItems(summaryAsString),
      itemsCount = summaryItems.length
    return itemsCount > ITEMS_BEFORE_EXPANSION
      ? import_react.default.createElement(
          Summary,
          { isExpanded },
          renderSummaryItems(summaryItems, isExpanded),
          import_react.default.createElement(
            ExpandButton,
            { onClick: () => setIsExpanded(!isExpanded) },
            isExpanded
              ? "Show less..."
              : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`
          )
        )
      : import_react.default.createElement(
          Summary,
          null,
          renderSummaryItems(summaryItems)
        )
  }
  return import_react.default.createElement(
    bB,
    {
      closeOnOutsideClick: true,
      placement: "bottom",
      visible: isOpen,
      onVisibleChange: (isVisible) => {
        setIsOpen(isVisible)
      },
      tooltip: import_react.default.createElement(
        Detail,
        { width: calculateDetailWidth(detail) },
        import_react.default.createElement(
          _m,
          { language: "jsx", format: false },
          detail
        )
      )
    },
    import_react.default.createElement(
      Expandable,
      { className: "sbdocs-expandable" },
      import_react.default.createElement("span", null, summaryAsString),
      isOpen
        ? import_react.default.createElement(ChevronUpIcon, null)
        : import_react.default.createElement(ChevronDownIcon2, null)
    )
  )
}
var ArgValue = ({ value: value22, initialExpandedArgs }) =>
  value22 == null
    ? import_react.default.createElement(EmptyArg, null)
    : import_react.default.createElement(ArgSummary, {
        value: value22,
        initialExpandedArgs
      })
var Label = Tr.label(({ theme }) => ({
  lineHeight: "18px",
  alignItems: "center",
  marginBottom: 8,
  display: "inline-block",
  position: "relative",
  whiteSpace: "nowrap",
  background: theme.boolean.background,
  borderRadius: "3em",
  padding: 1,
  '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } },
  input: {
    appearance: "none",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    borderRadius: "3em",
    "&:focus": {
      outline: "none",
      boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important`
    }
  },
  span: {
    textAlign: "center",
    fontSize: theme.typography.size.s1,
    fontWeight: theme.typography.weight.bold,
    lineHeight: "1",
    cursor: "pointer",
    display: "inline-block",
    padding: "7px 15px",
    transition: "all 100ms ease-out",
    userSelect: "none",
    borderRadius: "3em",
    color: curriedTransparentize$1(0.5, theme.color.defaultText),
    background: "transparent",
    "&:hover": {
      boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset`
    },
    "&:active": {
      boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`,
      color: curriedOpacify$1(1, theme.appBorderColor)
    },
    "&:first-of-type": { paddingRight: 8 },
    "&:last-of-type": { paddingLeft: 8 }
  },
  "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type":
    {
      background: theme.boolean.selectedBackground,
      boxShadow:
        theme.base === "light"
          ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px`
          : `${theme.appBorderColor} 0 0 0 1px`,
      color: theme.color.defaultText,
      padding: "7px 15px"
    }
}))
var parse2 = (value22) => value22 === "true"
var BooleanControl = ({
  name: name2,
  value: value22,
  onChange,
  onBlur,
  onFocus,
  argType
}) => {
  var _a
  let onSetFalse = (0, import_react.useCallback)(
      () => onChange(false),
      [onChange]
    ),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  if (value22 === void 0)
    return import_react.default.createElement(
      Ao,
      {
        variant: "outline",
        size: "medium",
        id: getControlSetterButtonId(name2),
        onClick: onSetFalse,
        disabled: readonly
      },
      "Set boolean"
    )
  let controlId = getControlId(name2),
    parsedValue = typeof value22 == "string" ? parse2(value22) : value22
  return import_react.default.createElement(
    Label,
    { "aria-disabled": readonly, htmlFor: controlId, "aria-label": name2 },
    import_react.default.createElement("input", {
      id: controlId,
      type: "checkbox",
      onChange: (e2) => onChange(e2.target.checked),
      checked: parsedValue,
      role: "switch",
      disabled: readonly,
      name: name2,
      onBlur,
      onFocus
    }),
    import_react.default.createElement(
      "span",
      { "aria-hidden": "true" },
      "False"
    ),
    import_react.default.createElement(
      "span",
      { "aria-hidden": "true" },
      "True"
    )
  )
}
var parseDate = (value22) => {
  let [year, month, day] = value22.split("-"),
    result2 = /* @__PURE__ */ new Date()
  return (
    result2.setFullYear(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10)
    ),
    result2
  )
}
var parseTime = (value22) => {
  let [hours, minutes] = value22.split(":"),
    result2 = /* @__PURE__ */ new Date()
  return (
    result2.setHours(parseInt(hours, 10)),
    result2.setMinutes(parseInt(minutes, 10)),
    result2
  )
}
var formatDate = (value22) => {
  let date = new Date(value22),
    year = `000${date.getFullYear()}`.slice(-4),
    month = `0${date.getMonth() + 1}`.slice(-2),
    day = `0${date.getDate()}`.slice(-2)
  return `${year}-${month}-${day}`
}
var formatTime = (value22) => {
  let date = new Date(value22),
    hours = `0${date.getHours()}`.slice(-2),
    minutes = `0${date.getMinutes()}`.slice(-2)
  return `${hours}:${minutes}`
}
var FormInput = Tr(wL.Input)(({ readOnly }) => ({
  opacity: readOnly ? 0.5 : 1
}))
var FlexSpaced = Tr.div(({ theme }) => ({
  flex: 1,
  display: "flex",
  input: {
    marginLeft: 10,
    flex: 1,
    height: 32,
    "&::-webkit-calendar-picker-indicator": {
      opacity: 0.5,
      height: 12,
      filter: theme.base === "light" ? void 0 : "invert(1)"
    }
  },
  "input:first-of-type": { marginLeft: 0, flexGrow: 4 },
  "input:last-of-type": { flexGrow: 3 }
}))
var DateControl = ({
  name: name2,
  value: value22,
  onChange,
  onFocus,
  onBlur,
  argType
}) => {
  var _a
  let [valid, setValid] = (0, import_react.useState)(true),
    dateRef = (0, import_react.useRef)(),
    timeRef = (0, import_react.useRef)(),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  ;(0, import_react.useEffect)(() => {
    valid !== false &&
      (dateRef &&
        dateRef.current &&
        (dateRef.current.value = value22 ? formatDate(value22) : ""),
      timeRef &&
        timeRef.current &&
        (timeRef.current.value = value22 ? formatTime(value22) : ""))
  }, [value22])
  let onDateChange = (e2) => {
      if (!e2.target.value) return onChange()
      let parsed = parseDate(e2.target.value),
        result2 = new Date(value22)
      result2.setFullYear(
        parsed.getFullYear(),
        parsed.getMonth(),
        parsed.getDate()
      )
      let time = result2.getTime()
      time && onChange(time), setValid(!!time)
    },
    onTimeChange = (e2) => {
      if (!e2.target.value) return onChange()
      let parsed = parseTime(e2.target.value),
        result2 = new Date(value22)
      result2.setHours(parsed.getHours()),
        result2.setMinutes(parsed.getMinutes())
      let time = result2.getTime()
      time && onChange(time), setValid(!!time)
    },
    controlId = getControlId(name2)
  return import_react.default.createElement(
    FlexSpaced,
    null,
    import_react.default.createElement(FormInput, {
      type: "date",
      max: "9999-12-31",
      ref: dateRef,
      id: `${controlId}-date`,
      name: `${controlId}-date`,
      readOnly: readonly,
      onChange: onDateChange,
      onFocus,
      onBlur
    }),
    import_react.default.createElement(FormInput, {
      type: "time",
      id: `${controlId}-time`,
      name: `${controlId}-time`,
      ref: timeRef,
      onChange: onTimeChange,
      readOnly: readonly,
      onFocus,
      onBlur
    }),
    valid ? null : import_react.default.createElement("div", null, "invalid")
  )
}
var Wrapper3 = Tr.label({ display: "flex" })
var parse22 = (value22) => {
  let result2 = parseFloat(value22)
  return Number.isNaN(result2) ? void 0 : result2
}
var FormInput2 = Tr(wL.Input)(({ readOnly }) => ({
  opacity: readOnly ? 0.5 : 1
}))
var NumberControl = ({
  name: name2,
  value: value22,
  onChange,
  min,
  max,
  step,
  onBlur,
  onFocus,
  argType
}) => {
  var _a
  let [inputValue, setInputValue] = (0, import_react.useState)(
      typeof value22 == "number" ? value22 : ""
    ),
    [forceVisible, setForceVisible] = (0, import_react.useState)(false),
    [parseError, setParseError] = (0, import_react.useState)(null),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly),
    handleChange = (0, import_react.useCallback)(
      (event) => {
        setInputValue(event.target.value)
        let result2 = parseFloat(event.target.value)
        Number.isNaN(result2)
          ? setParseError(new Error(`'${event.target.value}' is not a number`))
          : (onChange(result2), setParseError(null))
      },
      [onChange, setParseError]
    ),
    onForceVisible = (0, import_react.useCallback)(() => {
      setInputValue("0"), onChange(0), setForceVisible(true)
    }, [setForceVisible]),
    htmlElRef = (0, import_react.useRef)(null)
  return (
    (0, import_react.useEffect)(() => {
      forceVisible && htmlElRef.current && htmlElRef.current.select()
    }, [forceVisible]),
    (0, import_react.useEffect)(() => {
      inputValue !== (typeof value22 == "number" ? value22 : "") &&
        setInputValue(value22)
    }, [value22]),
    value22 === void 0
      ? import_react.default.createElement(
          Ao,
          {
            variant: "outline",
            size: "medium",
            id: getControlSetterButtonId(name2),
            onClick: onForceVisible,
            disabled: readonly
          },
          "Set number"
        )
      : import_react.default.createElement(
          Wrapper3,
          null,
          import_react.default.createElement(FormInput2, {
            ref: htmlElRef,
            id: getControlId(name2),
            type: "number",
            onChange: handleChange,
            size: "flex",
            placeholder: "Edit number...",
            value: inputValue,
            valid: parseError ? "error" : null,
            autoFocus: forceVisible,
            readOnly: readonly,
            name: name2,
            min,
            max,
            step,
            onFocus,
            onBlur
          })
        )
  )
}
var selectedKey = (value22, options2) => {
  let entry =
    options2 && Object.entries(options2).find(([_key, val]) => val === value22)
  return entry ? entry[0] : void 0
}
var selectedKeys = (value22, options2) =>
  value22 && options2
    ? Object.entries(options2)
        .filter((entry) => value22.includes(entry[1]))
        .map((entry) => entry[0])
    : []
var selectedValues = (keys, options2) =>
  keys && options2 && keys.map((key2) => options2[key2])
var Wrapper4 = Tr.div(
  ({ isInline }) =>
    isInline
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 }
        }
      : { label: { display: "flex" } },
  (props) => {
    if (props["aria-readonly"] === "true")
      return { input: { cursor: "not-allowed" } }
  }
)
var Text2 = Tr.span({ "[aria-readonly=true] &": { opacity: 0.5 } })
var Label2 = Tr.label({
  lineHeight: "20px",
  alignItems: "center",
  marginBottom: 8,
  "&:last-child": { marginBottom: 0 },
  input: { margin: 0, marginRight: 6 }
})
var CheckboxControl = ({
  name: name2,
  options: options2,
  value: value22,
  onChange,
  isInline,
  argType
}) => {
  var _a
  if (!options2)
    return (
      import_client_logger.logger.warn(`Checkbox with no options: ${name2}`),
      import_react.default.createElement(
        import_react.default.Fragment,
        null,
        "-"
      )
    )
  let initial = selectedKeys(value22, options2),
    [selected, setSelected] = (0, import_react.useState)(initial),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly),
    handleChange = (e2) => {
      let option = e2.target.value,
        updated = [...selected]
      updated.includes(option)
        ? updated.splice(updated.indexOf(option), 1)
        : updated.push(option),
        onChange(selectedValues(updated, options2)),
        setSelected(updated)
    }
  ;(0, import_react.useEffect)(() => {
    setSelected(selectedKeys(value22, options2))
  }, [value22])
  let controlId = getControlId(name2)
  return import_react.default.createElement(
    Wrapper4,
    { "aria-readonly": readonly, isInline },
    Object.keys(options2).map((key2, index) => {
      let id = `${controlId}-${index}`
      return import_react.default.createElement(
        Label2,
        { key: id, htmlFor: id },
        import_react.default.createElement("input", {
          type: "checkbox",
          disabled: readonly,
          id,
          name: id,
          value: key2,
          onChange: handleChange,
          checked: selected == null ? void 0 : selected.includes(key2)
        }),
        import_react.default.createElement(Text2, null, key2)
      )
    })
  )
}
var Wrapper5 = Tr.div(
  ({ isInline }) =>
    isInline
      ? {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          label: { display: "inline-flex", marginRight: 15 }
        }
      : { label: { display: "flex" } },
  (props) => {
    if (props["aria-readonly"] === "true")
      return { input: { cursor: "not-allowed" } }
  }
)
var Text3 = Tr.span({ "[aria-readonly=true] &": { opacity: 0.5 } })
var Label3 = Tr.label({
  lineHeight: "20px",
  alignItems: "center",
  marginBottom: 8,
  "&:last-child": { marginBottom: 0 },
  input: { margin: 0, marginRight: 6 }
})
var RadioControl = ({
  name: name2,
  options: options2,
  value: value22,
  onChange,
  isInline,
  argType
}) => {
  var _a
  if (!options2)
    return (
      import_client_logger.logger.warn(`Radio with no options: ${name2}`),
      import_react.default.createElement(
        import_react.default.Fragment,
        null,
        "-"
      )
    )
  let selection = selectedKey(value22, options2),
    controlId = getControlId(name2),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  return import_react.default.createElement(
    Wrapper5,
    { "aria-readonly": readonly, isInline },
    Object.keys(options2).map((key2, index) => {
      let id = `${controlId}-${index}`
      return import_react.default.createElement(
        Label3,
        { key: id, htmlFor: id },
        import_react.default.createElement("input", {
          type: "radio",
          id,
          name: controlId,
          disabled: readonly,
          value: key2,
          onChange: (e2) => onChange(options2[e2.currentTarget.value]),
          checked: key2 === selection
        }),
        import_react.default.createElement(Text3, null, key2)
      )
    })
  )
}
var styleResets = {
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
}
var OptionsSelect = Tr.select(styleResets, ({ theme }) => ({
  boxSizing: "border-box",
  position: "relative",
  padding: "6px 10px",
  width: "100%",
  color: theme.input.color || "inherit",
  background: theme.input.background,
  borderRadius: theme.input.borderRadius,
  boxShadow: `${theme.input.border} 0 0 0 1px inset`,
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: "20px",
  "&:focus": {
    boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
    outline: "none"
  },
  "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
  "::placeholder": { color: theme.textMutedColor },
  "&[multiple]": {
    overflow: "auto",
    padding: 0,
    option: {
      display: "block",
      padding: "6px 10px",
      marginLeft: 1,
      marginRight: 1
    }
  }
}))
var SelectWrapper = Tr.span(({ theme }) => ({
  display: "inline-block",
  lineHeight: "normal",
  overflow: "hidden",
  position: "relative",
  verticalAlign: "top",
  width: "100%",
  svg: {
    position: "absolute",
    zIndex: 1,
    pointerEvents: "none",
    height: "12px",
    marginTop: "-6px",
    right: "12px",
    top: "50%",
    fill: theme.textMutedColor,
    path: { fill: theme.textMutedColor }
  }
}))
var NO_SELECTION = "Choose option..."
var SingleSelect = ({
  name: name2,
  value: value22,
  options: options2,
  onChange,
  argType
}) => {
  var _a
  let handleChange = (e2) => {
      onChange(options2[e2.currentTarget.value])
    },
    selection = selectedKey(value22, options2) || NO_SELECTION,
    controlId = getControlId(name2),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  return import_react.default.createElement(
    SelectWrapper,
    null,
    import_react.default.createElement(ChevronSmallDownIcon, null),
    import_react.default.createElement(
      OptionsSelect,
      {
        disabled: readonly,
        id: controlId,
        value: selection,
        onChange: handleChange
      },
      import_react.default.createElement(
        "option",
        { key: "no-selection", disabled: true },
        NO_SELECTION
      ),
      Object.keys(options2).map((key2) =>
        import_react.default.createElement(
          "option",
          { key: key2, value: key2 },
          key2
        )
      )
    )
  )
}
var MultiSelect = ({
  name: name2,
  value: value22,
  options: options2,
  onChange,
  argType
}) => {
  var _a
  let handleChange = (e2) => {
      let selection2 = Array.from(e2.currentTarget.options)
        .filter((option) => option.selected)
        .map((option) => option.value)
      onChange(selectedValues(selection2, options2))
    },
    selection = selectedKeys(value22, options2),
    controlId = getControlId(name2),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  return import_react.default.createElement(
    SelectWrapper,
    null,
    import_react.default.createElement(
      OptionsSelect,
      {
        disabled: readonly,
        id: controlId,
        multiple: true,
        value: selection,
        onChange: handleChange
      },
      Object.keys(options2).map((key2) =>
        import_react.default.createElement(
          "option",
          { key: key2, value: key2 },
          key2
        )
      )
    )
  )
}
var SelectControl = (props) => {
  let { name: name2, options: options2 } = props
  return options2
    ? props.isMulti
      ? import_react.default.createElement(MultiSelect, { ...props })
      : import_react.default.createElement(SingleSelect, { ...props })
    : (import_client_logger.logger.warn(`Select with no options: ${name2}`),
      import_react.default.createElement(
        import_react.default.Fragment,
        null,
        "-"
      ))
}
var normalizeOptions = (options2, labels) =>
  Array.isArray(options2)
    ? options2.reduce(
        (acc, item) => (
          (acc[(labels == null ? void 0 : labels[item]) || String(item)] =
            item),
          acc
        ),
        {}
      )
    : options2
var Controls = {
  check: CheckboxControl,
  "inline-check": CheckboxControl,
  radio: RadioControl,
  "inline-radio": RadioControl,
  select: SelectControl,
  "multi-select": SelectControl
}
var OptionsControl = (props) => {
  let { type = "select", labels, argType } = props,
    normalized = {
      ...props,
      argType,
      options: argType ? normalizeOptions(argType.options, labels) : {},
      isInline: type.includes("inline"),
      isMulti: type.includes("multi")
    },
    Control = Controls[type]
  if (Control)
    return import_react.default.createElement(Control, { ...normalized })
  throw new Error(`Unknown options type: ${type}`)
}
var VALUE = "value"
var KEY = "key"
var ERROR = "Error"
var OBJECT = "Object"
var ARRAY = "Array"
var STRING = "String"
var NUMBER = "Number"
var BOOLEAN = "Boolean"
var DATE = "Date"
var NULL = "Null"
var UNDEFINED = "Undefined"
var FUNCTION = "Function"
var SYMBOL = "Symbol"
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE"
var REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE"
var UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE"
function getObjectType(obj) {
  return obj !== null &&
    typeof obj == "object" &&
    !Array.isArray(obj) &&
    typeof obj[Symbol.iterator] == "function"
    ? "Iterable"
    : Object.prototype.toString.call(obj).slice(8, -1)
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue),
    newType = getObjectType(newValue)
  return (
    (oldType === "Function" || newType === "Function") && newType !== oldType
  )
}
var JsonAddValue = class extends import_react.Component {
  constructor(props) {
    super(props),
      (this.state = { inputRefKey: null, inputRefValue: null }),
      (this.refInputValue = this.refInputValue.bind(this)),
      (this.refInputKey = this.refInputKey.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this)),
      (this.onSubmit = this.onSubmit.bind(this))
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state,
      { onlyValue } = this.props
    inputRefKey &&
      typeof inputRefKey.focus == "function" &&
      inputRefKey.focus(),
      onlyValue &&
        inputRefValue &&
        typeof inputRefValue.focus == "function" &&
        inputRefValue.focus(),
      document.addEventListener("keydown", this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown)
  }
  onKeydown(event) {
    event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.repeat ||
      ((event.code === "Enter" || event.key === "Enter") &&
        (event.preventDefault(), this.onSubmit()),
      (event.code === "Escape" || event.key === "Escape") &&
        (event.preventDefault(), this.props.handleCancel()))
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } =
        this.props,
      { inputRefKey, inputRefValue } = this.state,
      result2 = {}
    if (!onlyValue) {
      if (!inputRefKey.value) return
      result2.key = inputRefKey.value
    }
    ;(result2.newValue = onSubmitValueParser(
      false,
      keyPath,
      deep,
      result2.key,
      inputRefValue.value
    )),
      handleAdd(result2)
  }
  refInputKey(node) {
    this.state.inputRefKey = node
  }
  refInputValue(node) {
    this.state.inputRefValue = node
  }
  render() {
    let {
        handleCancel,
        onlyValue,
        addButtonElement,
        cancelButtonElement,
        inputElementGenerator,
        keyPath,
        deep
      } = this.props,
      addButtonElementLayout = (0, import_react.cloneElement)(
        addButtonElement,
        { onClick: this.onSubmit }
      ),
      cancelButtonElementLayout = (0, import_react.cloneElement)(
        cancelButtonElement,
        { onClick: handleCancel }
      ),
      inputElementValue = inputElementGenerator(VALUE, keyPath, deep),
      inputElementValueLayout = (0, import_react.cloneElement)(
        inputElementValue,
        { placeholder: "Value", ref: this.refInputValue }
      ),
      inputElementKeyLayout = null
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep)
      inputElementKeyLayout = (0, import_react.cloneElement)(inputElementKey, {
        placeholder: "Key",
        ref: this.refInputKey
      })
    }
    return import_react.default.createElement(
      "span",
      { className: "rejt-add-value-node" },
      inputElementKeyLayout,
      inputElementValueLayout,
      cancelButtonElementLayout,
      addButtonElementLayout
    )
  }
}
JsonAddValue.defaultProps = {
  onlyValue: false,
  addButtonElement: import_react.default.createElement("button", null, "+"),
  cancelButtonElement: import_react.default.createElement("button", null, "c")
}
var JsonArray = class extends import_react.Component {
  constructor(props) {
    super(props)
    let keyPath = [...props.keyPath, props.name]
    ;(this.state = {
      data: props.data,
      name: props.name,
      keyPath,
      deep: props.deep,
      nextDeep: props.deep + 1,
      collapsed: props.isCollapsed(keyPath, props.deep, props.data),
      addFormVisible: false
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state
    ;(data[childKey] = childData), this.setState({ data })
    let { onUpdate } = this.props,
      size = keyPath.length
    onUpdate(keyPath[size - 1], data)
  }
  handleAddMode() {
    this.setState({ addFormVisible: true })
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }))
  }
  handleRemoveItem(index) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props,
        { data, keyPath, nextDeep: deep } = this.state,
        oldValue = data[index]
      beforeRemoveAction(index, keyPath, deep, oldValue)
        .then(() => {
          let deltaUpdateResult = {
            keyPath,
            deep,
            key: index,
            oldValue,
            type: REMOVE_DELTA_TYPE
          }
          data.splice(index, 1), this.setState({ data })
          let { onUpdate, onDeltaUpdate } = this.props
          onUpdate(keyPath[keyPath.length - 1], data),
            onDeltaUpdate(deltaUpdateResult)
        })
        .catch(logger4.error)
    }
  }
  handleAddValueAdd({ newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state,
      { beforeAddAction, logger: logger4 } = this.props
    beforeAddAction(data.length, keyPath, deep, newValue)
      .then(() => {
        let newData = [...data, newValue]
        this.setState({ data: newData }), this.handleAddValueCancel()
        let { onUpdate, onDeltaUpdate } = this.props
        onUpdate(keyPath[keyPath.length - 1], newData),
          onDeltaUpdate({
            type: ADD_DELTA_TYPE,
            keyPath,
            deep,
            key: newData.length - 1,
            newValue
          })
      })
      .catch(logger4.error)
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false })
  }
  handleEditValue({ key: key2, value: value22 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props,
        { data, keyPath, nextDeep: deep } = this.state,
        oldValue = data[key2]
      beforeUpdateAction(key2, keyPath, deep, oldValue, value22)
        .then(() => {
          ;(data[key2] = value22), this.setState({ data })
          let { onUpdate, onDeltaUpdate } = this.props
          onUpdate(keyPath[keyPath.length - 1], data),
            onDeltaUpdate({
              type: UPDATE_DELTA_TYPE,
              keyPath,
              deep,
              key: key2,
              newValue: value22,
              oldValue
            }),
            resolve(void 0)
        })
        .catch(reject)
    })
  }
  renderCollapsed() {
    let { name: name2, data, keyPath, deep } = this.state,
      { handleRemove, readOnly, getStyle, dataType, minusMenuElement } =
        this.props,
      { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType),
      isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
      removeItemButton = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: minus
      })
    return import_react.default.createElement(
      "span",
      { className: "rejt-collapsed" },
      import_react.default.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: collapsed,
          onClick: this.handleCollapseMode
        },
        "[...] ",
        data.length,
        " ",
        data.length === 1 ? "item" : "items"
      ),
      !isReadOnly && removeItemButton
    )
  }
  renderNotCollapsed() {
    let {
        name: name2,
        data,
        keyPath,
        deep,
        addFormVisible,
        nextDeep
      } = this.state,
      {
        isCollapsed,
        handleRemove,
        onDeltaUpdate,
        readOnly,
        getStyle,
        dataType,
        addButtonElement,
        cancelButtonElement,
        editButtonElement,
        inputElementGenerator,
        textareaElementGenerator,
        minusMenuElement,
        plusMenuElement,
        beforeRemoveAction,
        beforeAddAction,
        beforeUpdateAction,
        logger: logger4,
        onSubmitValueParser
      } = this.props,
      { minus, plus, delimiter, ul, addForm } = getStyle(
        name2,
        data,
        keyPath,
        deep,
        dataType
      ),
      isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
      addItemButton = (0, import_react.cloneElement)(plusMenuElement, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: plus
      }),
      removeItemButton = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: minus
      })
    return import_react.default.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      import_react.default.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: delimiter },
        "["
      ),
      !addFormVisible && addItemButton,
      import_react.default.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: ul },
        data.map((item, index) =>
          import_react.default.createElement(JsonNode, {
            key: index,
            name: index.toString(),
            data: item,
            keyPath,
            deep: nextDeep,
            isCollapsed,
            handleRemove: this.handleRemoveItem(index),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate,
            readOnly,
            getStyle,
            addButtonElement,
            cancelButtonElement,
            editButtonElement,
            inputElementGenerator,
            textareaElementGenerator,
            minusMenuElement,
            plusMenuElement,
            beforeRemoveAction,
            beforeAddAction,
            beforeUpdateAction,
            logger: logger4,
            onSubmitValueParser
          })
        )
      ),
      !isReadOnly &&
        addFormVisible &&
        import_react.default.createElement(
          "div",
          { className: "rejt-add-form", style: addForm },
          import_react.default.createElement(JsonAddValue, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            onlyValue: true,
            addButtonElement,
            cancelButtonElement,
            inputElementGenerator,
            keyPath,
            deep,
            onSubmitValueParser
          })
        ),
      import_react.default.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: delimiter },
        "]"
      ),
      !isReadOnly && removeItemButton
    )
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state,
      { dataType, getStyle } = this.props,
      value22 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(),
      style = getStyle(name2, data, keyPath, deep, dataType)
    return import_react.default.createElement(
      "div",
      { className: "rejt-array-node" },
      import_react.default.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        import_react.default.createElement(
          "span",
          { className: "rejt-name", style: style.name },
          name2,
          " :",
          " "
        )
      ),
      value22
    )
  }
}
JsonArray.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: import_react.default.createElement("span", null, " - "),
  plusMenuElement: import_react.default.createElement("span", null, " + ")
}
var JsonFunctionValue = class extends import_react.Component {
  constructor(props) {
    super(props)
    let keyPath = [...props.keyPath, props.name]
    ;(this.state = {
      value: props.value,
      name: props.name,
      keyPath,
      deep: props.deep,
      editEnabled: false,
      inputRef: null
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null
  }
  componentDidUpdate() {
    let {
        editEnabled,
        inputRef,
        name: name2,
        value: value22,
        keyPath,
        deep
      } = this.state,
      { readOnly, dataType } = this.props,
      readOnlyResult = readOnly(name2, value22, keyPath, deep, dataType)
    editEnabled &&
      !readOnlyResult &&
      typeof inputRef.focus == "function" &&
      inputRef.focus()
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown)
  }
  onKeydown(event) {
    event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.repeat ||
      ((event.code === "Enter" || event.key === "Enter") &&
        (event.preventDefault(), this.handleEdit()),
      (event.code === "Escape" || event.key === "Escape") &&
        (event.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let {
        handleUpdateValue,
        originalValue,
        logger: logger4,
        onSubmitValueParser,
        keyPath
      } = this.props,
      { inputRef, name: name2, deep } = this.state
    if (!inputRef) return
    let newValue = onSubmitValueParser(
      true,
      keyPath,
      deep,
      name2,
      inputRef.value
    )
    handleUpdateValue({ value: newValue, key: name2 })
      .then(() => {
        isComponentWillChange(originalValue, newValue) ||
          this.handleCancelEdit()
      })
      .catch(logger4.error)
  }
  handleEditMode() {
    this.setState({ editEnabled: true })
  }
  refInput(node) {
    this.state.inputRef = node
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false })
  }
  render() {
    let {
        name: name2,
        value: value22,
        editEnabled,
        keyPath,
        deep
      } = this.state,
      {
        handleRemove,
        originalValue,
        readOnly,
        dataType,
        getStyle,
        editButtonElement,
        cancelButtonElement,
        textareaElementGenerator,
        minusMenuElement,
        keyPath: comeFromKeyPath
      } = this.props,
      style = getStyle(name2, originalValue, keyPath, deep, dataType),
      result2 = null,
      minusElement = null,
      resultOnlyResult = readOnly(name2, originalValue, keyPath, deep, dataType)
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(
          VALUE,
          comeFromKeyPath,
          deep,
          name2,
          originalValue,
          dataType
        ),
        editButtonElementLayout = (0, import_react.cloneElement)(
          editButtonElement,
          { onClick: this.handleEdit }
        ),
        cancelButtonElementLayout = (0, import_react.cloneElement)(
          cancelButtonElement,
          { onClick: this.handleCancelEdit }
        ),
        textareaElementLayout = (0, import_react.cloneElement)(
          textareaElement,
          { ref: this.refInput, defaultValue: originalValue }
        )
      ;(result2 = import_react.default.createElement(
        "span",
        { className: "rejt-edit-form", style: style.editForm },
        textareaElementLayout,
        " ",
        cancelButtonElementLayout,
        editButtonElementLayout
      )),
        (minusElement = null)
    } else {
      result2 = import_react.default.createElement(
        "span",
        {
          className: "rejt-value",
          style: style.value,
          onClick: resultOnlyResult ? null : this.handleEditMode
        },
        value22
      )
      let minusMenuLayout = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: style.minus
      })
      minusElement = resultOnlyResult ? null : minusMenuLayout
    }
    return import_react.default.createElement(
      "li",
      { className: "rejt-function-value-node", style: style.li },
      import_react.default.createElement(
        "span",
        { className: "rejt-name", style: style.name },
        name2,
        " :",
        " "
      ),
      result2,
      minusElement
    )
  }
}
JsonFunctionValue.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => {},
  editButtonElement: import_react.default.createElement("button", null, "e"),
  cancelButtonElement: import_react.default.createElement("button", null, "c"),
  minusMenuElement: import_react.default.createElement("span", null, " - ")
}
var JsonNode = class extends import_react.Component {
  constructor(props) {
    super(props),
      (this.state = {
        data: props.data,
        name: props.name,
        keyPath: props.keyPath,
        deep: props.deep
      })
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null
  }
  render() {
    let { data, name: name2, keyPath, deep } = this.state,
      {
        isCollapsed,
        handleRemove,
        handleUpdateValue,
        onUpdate,
        onDeltaUpdate,
        readOnly,
        getStyle,
        addButtonElement,
        cancelButtonElement,
        editButtonElement,
        inputElementGenerator,
        textareaElementGenerator,
        minusMenuElement,
        plusMenuElement,
        beforeRemoveAction,
        beforeAddAction,
        beforeUpdateAction,
        logger: logger4,
        onSubmitValueParser
      } = this.props,
      readOnlyTrue = () => true,
      dataType = getObjectType(data)
    switch (dataType) {
      case ERROR:
        return import_react.default.createElement(JsonObject, {
          data,
          name: name2,
          isCollapsed,
          keyPath,
          deep,
          handleRemove,
          onUpdate,
          onDeltaUpdate,
          readOnly: readOnlyTrue,
          dataType,
          getStyle,
          addButtonElement,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          textareaElementGenerator,
          minusMenuElement,
          plusMenuElement,
          beforeRemoveAction,
          beforeAddAction,
          beforeUpdateAction,
          logger: logger4,
          onSubmitValueParser
        })
      case OBJECT:
        return import_react.default.createElement(JsonObject, {
          data,
          name: name2,
          isCollapsed,
          keyPath,
          deep,
          handleRemove,
          onUpdate,
          onDeltaUpdate,
          readOnly,
          dataType,
          getStyle,
          addButtonElement,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          textareaElementGenerator,
          minusMenuElement,
          plusMenuElement,
          beforeRemoveAction,
          beforeAddAction,
          beforeUpdateAction,
          logger: logger4,
          onSubmitValueParser
        })
      case ARRAY:
        return import_react.default.createElement(JsonArray, {
          data,
          name: name2,
          isCollapsed,
          keyPath,
          deep,
          handleRemove,
          onUpdate,
          onDeltaUpdate,
          readOnly,
          dataType,
          getStyle,
          addButtonElement,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          textareaElementGenerator,
          minusMenuElement,
          plusMenuElement,
          beforeRemoveAction,
          beforeAddAction,
          beforeUpdateAction,
          logger: logger4,
          onSubmitValueParser
        })
      case STRING:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: `"${data}"`,
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case NUMBER:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: data,
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case BOOLEAN:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: data ? "true" : "false",
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case DATE:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: data.toISOString(),
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly: readOnlyTrue,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case NULL:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: "null",
          originalValue: "null",
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case UNDEFINED:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: "undefined",
          originalValue: "undefined",
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case FUNCTION:
        return import_react.default.createElement(JsonFunctionValue, {
          name: name2,
          value: data.toString(),
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          textareaElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      case SYMBOL:
        return import_react.default.createElement(JsonValue, {
          name: name2,
          value: data.toString(),
          originalValue: data,
          keyPath,
          deep,
          handleRemove,
          handleUpdateValue,
          readOnly: readOnlyTrue,
          dataType,
          getStyle,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          minusMenuElement,
          logger: logger4,
          onSubmitValueParser
        })
      default:
        return null
    }
  }
}
JsonNode.defaultProps = { keyPath: [], deep: 0 }
var JsonObject = class extends import_react.Component {
  constructor(props) {
    super(props)
    let keyPath = props.deep === -1 ? [] : [...props.keyPath, props.name]
    ;(this.state = {
      name: props.name,
      data: props.data,
      keyPath,
      deep: props.deep,
      nextDeep: props.deep + 1,
      collapsed: props.isCollapsed(keyPath, props.deep, props.data),
      addFormVisible: false
    }),
      (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
      (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
      (this.handleAddMode = this.handleAddMode.bind(this)),
      (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
      (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
      (this.handleEditValue = this.handleEditValue.bind(this)),
      (this.onChildUpdate = this.onChildUpdate.bind(this)),
      (this.renderCollapsed = this.renderCollapsed.bind(this)),
      (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath } = this.state
    ;(data[childKey] = childData), this.setState({ data })
    let { onUpdate } = this.props,
      size = keyPath.length
    onUpdate(keyPath[size - 1], data)
  }
  handleAddMode() {
    this.setState({ addFormVisible: true })
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false })
  }
  handleAddValueAdd({ key: key2, newValue }) {
    let { data, keyPath, nextDeep: deep } = this.state,
      { beforeAddAction, logger: logger4 } = this.props
    beforeAddAction(key2, keyPath, deep, newValue)
      .then(() => {
        ;(data[key2] = newValue),
          this.setState({ data }),
          this.handleAddValueCancel()
        let { onUpdate, onDeltaUpdate } = this.props
        onUpdate(keyPath[keyPath.length - 1], data),
          onDeltaUpdate({
            type: ADD_DELTA_TYPE,
            keyPath,
            deep,
            key: key2,
            newValue
          })
      })
      .catch(logger4.error)
  }
  handleRemoveValue(key2) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props,
        { data, keyPath, nextDeep: deep } = this.state,
        oldValue = data[key2]
      beforeRemoveAction(key2, keyPath, deep, oldValue)
        .then(() => {
          let deltaUpdateResult = {
            keyPath,
            deep,
            key: key2,
            oldValue,
            type: REMOVE_DELTA_TYPE
          }
          delete data[key2], this.setState({ data })
          let { onUpdate, onDeltaUpdate } = this.props
          onUpdate(keyPath[keyPath.length - 1], data),
            onDeltaUpdate(deltaUpdateResult)
        })
        .catch(logger4.error)
    }
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }))
  }
  handleEditValue({ key: key2, value: value22 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props,
        { data, keyPath, nextDeep: deep } = this.state,
        oldValue = data[key2]
      beforeUpdateAction(key2, keyPath, deep, oldValue, value22)
        .then(() => {
          ;(data[key2] = value22), this.setState({ data })
          let { onUpdate, onDeltaUpdate } = this.props
          onUpdate(keyPath[keyPath.length - 1], data),
            onDeltaUpdate({
              type: UPDATE_DELTA_TYPE,
              keyPath,
              deep,
              key: key2,
              newValue: value22,
              oldValue
            }),
            resolve()
        })
        .catch(reject)
    })
  }
  renderCollapsed() {
    let { name: name2, keyPath, deep, data } = this.state,
      { handleRemove, readOnly, dataType, getStyle, minusMenuElement } =
        this.props,
      { minus, collapsed } = getStyle(name2, data, keyPath, deep, dataType),
      keyList = Object.getOwnPropertyNames(data),
      isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
      removeItemButton = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: minus
      })
    return import_react.default.createElement(
      "span",
      { className: "rejt-collapsed" },
      import_react.default.createElement(
        "span",
        {
          className: "rejt-collapsed-text",
          style: collapsed,
          onClick: this.handleCollapseMode
        },
        "{...}",
        " ",
        keyList.length,
        " ",
        keyList.length === 1 ? "key" : "keys"
      ),
      !isReadOnly && removeItemButton
    )
  }
  renderNotCollapsed() {
    let {
        name: name2,
        data,
        keyPath,
        deep,
        nextDeep,
        addFormVisible
      } = this.state,
      {
        isCollapsed,
        handleRemove,
        onDeltaUpdate,
        readOnly,
        getStyle,
        dataType,
        addButtonElement,
        cancelButtonElement,
        editButtonElement,
        inputElementGenerator,
        textareaElementGenerator,
        minusMenuElement,
        plusMenuElement,
        beforeRemoveAction,
        beforeAddAction,
        beforeUpdateAction,
        logger: logger4,
        onSubmitValueParser
      } = this.props,
      { minus, plus, addForm, ul, delimiter } = getStyle(
        name2,
        data,
        keyPath,
        deep,
        dataType
      ),
      keyList = Object.getOwnPropertyNames(data),
      isReadOnly = readOnly(name2, data, keyPath, deep, dataType),
      addItemButton = (0, import_react.cloneElement)(plusMenuElement, {
        onClick: this.handleAddMode,
        className: "rejt-plus-menu",
        style: plus
      }),
      removeItemButton = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: minus
      }),
      list = keyList.map((key2) =>
        import_react.default.createElement(JsonNode, {
          key: key2,
          name: key2,
          data: data[key2],
          keyPath,
          deep: nextDeep,
          isCollapsed,
          handleRemove: this.handleRemoveValue(key2),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate,
          readOnly,
          getStyle,
          addButtonElement,
          cancelButtonElement,
          editButtonElement,
          inputElementGenerator,
          textareaElementGenerator,
          minusMenuElement,
          plusMenuElement,
          beforeRemoveAction,
          beforeAddAction,
          beforeUpdateAction,
          logger: logger4,
          onSubmitValueParser
        })
      )
    return import_react.default.createElement(
      "span",
      { className: "rejt-not-collapsed" },
      import_react.default.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: delimiter },
        "{"
      ),
      !isReadOnly && addItemButton,
      import_react.default.createElement(
        "ul",
        { className: "rejt-not-collapsed-list", style: ul },
        list
      ),
      !isReadOnly &&
        addFormVisible &&
        import_react.default.createElement(
          "div",
          { className: "rejt-add-form", style: addForm },
          import_react.default.createElement(JsonAddValue, {
            handleAdd: this.handleAddValueAdd,
            handleCancel: this.handleAddValueCancel,
            addButtonElement,
            cancelButtonElement,
            inputElementGenerator,
            keyPath,
            deep,
            onSubmitValueParser
          })
        ),
      import_react.default.createElement(
        "span",
        { className: "rejt-not-collapsed-delimiter", style: delimiter },
        "}"
      ),
      !isReadOnly && removeItemButton
    )
  }
  render() {
    let { name: name2, collapsed, data, keyPath, deep } = this.state,
      { getStyle, dataType } = this.props,
      value22 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(),
      style = getStyle(name2, data, keyPath, deep, dataType)
    return import_react.default.createElement(
      "div",
      { className: "rejt-object-node" },
      import_react.default.createElement(
        "span",
        { onClick: this.handleCollapseMode },
        import_react.default.createElement(
          "span",
          { className: "rejt-name", style: style.name },
          name2,
          " :",
          " "
        )
      ),
      value22
    )
  }
}
JsonObject.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: import_react.default.createElement("span", null, " - "),
  plusMenuElement: import_react.default.createElement("span", null, " + ")
}
var JsonValue = class extends import_react.Component {
  constructor(props) {
    super(props)
    let keyPath = [...props.keyPath, props.name]
    ;(this.state = {
      value: props.value,
      name: props.name,
      keyPath,
      deep: props.deep,
      editEnabled: false,
      inputRef: null
    }),
      (this.handleEditMode = this.handleEditMode.bind(this)),
      (this.refInput = this.refInput.bind(this)),
      (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
      (this.handleEdit = this.handleEdit.bind(this)),
      (this.onKeydown = this.onKeydown.bind(this))
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null
  }
  componentDidUpdate() {
    let {
        editEnabled,
        inputRef,
        name: name2,
        value: value22,
        keyPath,
        deep
      } = this.state,
      { readOnly, dataType } = this.props,
      isReadOnly = readOnly(name2, value22, keyPath, deep, dataType)
    editEnabled &&
      !isReadOnly &&
      typeof inputRef.focus == "function" &&
      inputRef.focus()
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown)
  }
  onKeydown(event) {
    event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.repeat ||
      ((event.code === "Enter" || event.key === "Enter") &&
        (event.preventDefault(), this.handleEdit()),
      (event.code === "Escape" || event.key === "Escape") &&
        (event.preventDefault(), this.handleCancelEdit()))
  }
  handleEdit() {
    let {
        handleUpdateValue,
        originalValue,
        logger: logger4,
        onSubmitValueParser,
        keyPath
      } = this.props,
      { inputRef, name: name2, deep } = this.state
    if (!inputRef) return
    let newValue = onSubmitValueParser(
      true,
      keyPath,
      deep,
      name2,
      inputRef.value
    )
    handleUpdateValue({ value: newValue, key: name2 })
      .then(() => {
        isComponentWillChange(originalValue, newValue) ||
          this.handleCancelEdit()
      })
      .catch(logger4.error)
  }
  handleEditMode() {
    this.setState({ editEnabled: true })
  }
  refInput(node) {
    this.state.inputRef = node
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false })
  }
  render() {
    let {
        name: name2,
        value: value22,
        editEnabled,
        keyPath,
        deep
      } = this.state,
      {
        handleRemove,
        originalValue,
        readOnly,
        dataType,
        getStyle,
        editButtonElement,
        cancelButtonElement,
        inputElementGenerator,
        minusMenuElement,
        keyPath: comeFromKeyPath
      } = this.props,
      style = getStyle(name2, originalValue, keyPath, deep, dataType),
      isReadOnly = readOnly(name2, originalValue, keyPath, deep, dataType),
      isEditing = editEnabled && !isReadOnly,
      inputElement = inputElementGenerator(
        VALUE,
        comeFromKeyPath,
        deep,
        name2,
        originalValue,
        dataType
      ),
      editButtonElementLayout = (0, import_react.cloneElement)(
        editButtonElement,
        { onClick: this.handleEdit }
      ),
      cancelButtonElementLayout = (0, import_react.cloneElement)(
        cancelButtonElement,
        { onClick: this.handleCancelEdit }
      ),
      inputElementLayout = (0, import_react.cloneElement)(inputElement, {
        ref: this.refInput,
        defaultValue: JSON.stringify(originalValue)
      }),
      minusMenuLayout = (0, import_react.cloneElement)(minusMenuElement, {
        onClick: handleRemove,
        className: "rejt-minus-menu",
        style: style.minus
      })
    return import_react.default.createElement(
      "li",
      { className: "rejt-value-node", style: style.li },
      import_react.default.createElement(
        "span",
        { className: "rejt-name", style: style.name },
        name2,
        " : "
      ),
      isEditing
        ? import_react.default.createElement(
            "span",
            { className: "rejt-edit-form", style: style.editForm },
            inputElementLayout,
            " ",
            cancelButtonElementLayout,
            editButtonElementLayout
          )
        : import_react.default.createElement(
            "span",
            {
              className: "rejt-value",
              style: style.value,
              onClick: isReadOnly ? null : this.handleEditMode
            },
            String(value22)
          ),
      !isReadOnly && !isEditing && minusMenuLayout
    )
  }
}
JsonValue.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: () => Promise.resolve(),
  editButtonElement: import_react.default.createElement("button", null, "e"),
  cancelButtonElement: import_react.default.createElement("button", null, "c"),
  minusMenuElement: import_react.default.createElement("span", null, " - ")
}
var object = {
  minus: { color: "red" },
  plus: { color: "green" },
  collapsed: { color: "grey" },
  delimiter: {},
  ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
  name: { color: "#2287CD" },
  addForm: {}
}
var array = {
  minus: { color: "red" },
  plus: { color: "green" },
  collapsed: { color: "grey" },
  delimiter: {},
  ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" },
  name: { color: "#2287CD" },
  addForm: {}
}
var value2 = {
  minus: { color: "red" },
  editForm: {},
  value: { color: "#7bba3d" },
  li: { minHeight: "22px", lineHeight: "22px", outline: "0px" },
  name: { color: "#2287CD" }
}
function parse3(string) {
  let result2 = string
  if (result2.indexOf("function") === 0) return (0, eval)(`(${result2})`)
  try {
    result2 = JSON.parse(string)
  } catch {}
  return result2
}
var JsonTree = class extends import_react.Component {
  constructor(props) {
    super(props),
      (this.state = { data: props.data, rootName: props.rootName }),
      (this.onUpdate = this.onUpdate.bind(this)),
      (this.removeRoot = this.removeRoot.bind(this))
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName
      ? { data: props.data, rootName: props.rootName }
      : null
  }
  onUpdate(key2, data) {
    this.setState({ data }), this.props.onFullyUpdate(data)
  }
  removeRoot() {
    this.onUpdate(null, null)
  }
  render() {
    let { data, rootName } = this.state,
      {
        isCollapsed,
        onDeltaUpdate,
        readOnly,
        getStyle,
        addButtonElement,
        cancelButtonElement,
        editButtonElement,
        inputElement,
        textareaElement,
        minusMenuElement,
        plusMenuElement,
        beforeRemoveAction,
        beforeAddAction,
        beforeUpdateAction,
        logger: logger4,
        onSubmitValueParser,
        fallback = null
      } = this.props,
      dataType = getObjectType(data),
      readOnlyFunction = readOnly
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly)
    let inputElementFunction = inputElement
    inputElement &&
      getObjectType(inputElement) !== "Function" &&
      (inputElementFunction = () => inputElement)
    let textareaElementFunction = textareaElement
    return (
      textareaElement &&
        getObjectType(textareaElement) !== "Function" &&
        (textareaElementFunction = () => textareaElement),
      dataType === "Object" || dataType === "Array"
        ? import_react.default.createElement(
            "div",
            { className: "rejt-tree" },
            import_react.default.createElement(JsonNode, {
              data,
              name: rootName,
              deep: -1,
              isCollapsed,
              onUpdate: this.onUpdate,
              onDeltaUpdate,
              readOnly: readOnlyFunction,
              getStyle,
              addButtonElement,
              cancelButtonElement,
              editButtonElement,
              inputElementGenerator: inputElementFunction,
              textareaElementGenerator: textareaElementFunction,
              minusMenuElement,
              plusMenuElement,
              handleRemove: this.removeRoot,
              beforeRemoveAction,
              beforeAddAction,
              beforeUpdateAction,
              logger: logger4,
              onSubmitValueParser
            })
          )
        : fallback
    )
  }
}
JsonTree.defaultProps = {
  rootName: "root",
  isCollapsed: (keyPath, deep) => deep !== -1,
  getStyle: (keyName, data, keyPath, deep, dataType) => {
    switch (dataType) {
      case "Object":
      case "Error":
        return object
      case "Array":
        return array
      default:
        return value2
    }
  },
  readOnly: () => false,
  onFullyUpdate: () => {},
  onDeltaUpdate: () => {},
  beforeRemoveAction: () => Promise.resolve(),
  beforeAddAction: () => Promise.resolve(),
  beforeUpdateAction: () => Promise.resolve(),
  logger: { error: () => {} },
  onSubmitValueParser: (isEditMode, keyPath, deep, name2, rawValue) =>
    parse3(rawValue),
  inputElement: () => import_react.default.createElement("input", null),
  textareaElement: () => import_react.default.createElement("textarea", null),
  fallback: null
}
var { window: globalWindow2 } = import_global.global
var Wrapper6 = Tr.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  '&[aria-readonly="true"]': { opacity: 0.5 },
  ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" },
  ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed":
    { "& > svg": { opacity: 0, transition: "opacity 0.2s" } },
  ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed":
    { "& > svg": { opacity: 1 } },
  ".rejt-edit-form button": { display: "none" },
  ".rejt-add-form": { marginLeft: 10 },
  ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" },
  ".rejt-name": { lineHeight: "22px" },
  ".rejt-not-collapsed-delimiter": { lineHeight: "22px" },
  ".rejt-plus-menu": { marginLeft: 5 },
  ".rejt-object-node > span > *, .rejt-array-node > span > *": {
    position: "relative",
    zIndex: 2
  },
  ".rejt-object-node, .rejt-array-node": { position: "relative" },
  ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before":
    {
      content: '""',
      position: "absolute",
      top: 0,
      display: "block",
      width: "100%",
      marginLeft: "-1rem",
      padding: "0 4px 0 1rem",
      height: 22
    },
  ".rejt-collapsed::before, .rejt-not-collapsed::before": {
    zIndex: 1,
    background: "transparent",
    borderRadius: 4,
    transition: "background 0.2s",
    pointerEvents: "none",
    opacity: 0.1
  },
  ".rejt-object-node:hover, .rejt-array-node:hover": {
    "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": {
      background: theme.color.secondary
    }
  },
  ".rejt-collapsed::after, .rejt-not-collapsed::after": {
    content: '""',
    position: "absolute",
    display: "inline-block",
    pointerEvents: "none",
    width: 0,
    height: 0
  },
  ".rejt-collapsed::after": {
    left: -8,
    top: 8,
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    borderLeft: "3px solid rgba(153,153,153,0.6)"
  },
  ".rejt-not-collapsed::after": {
    left: -10,
    top: 10,
    borderTop: "3px solid rgba(153,153,153,0.6)",
    borderLeft: "3px solid transparent",
    borderRight: "3px solid transparent"
  },
  ".rejt-value": {
    display: "inline-block",
    border: "1px solid transparent",
    borderRadius: 4,
    margin: "1px 0",
    padding: "0 4px",
    cursor: "text",
    color: theme.color.defaultText
  },
  ".rejt-value-node:hover > .rejt-value": {
    background: theme.color.lighter,
    borderColor: theme.appBorderColor
  }
}))
var ButtonInline = Tr.button(({ theme, primary }) => ({
  border: 0,
  height: 20,
  margin: 1,
  borderRadius: 4,
  background: primary ? theme.color.secondary : "transparent",
  color: primary ? theme.color.lightest : theme.color.dark,
  fontWeight: primary ? "bold" : "normal",
  cursor: "pointer",
  order: primary ? "initial" : 9
}))
var ActionAddIcon = Tr(AddIcon)(({ theme, disabled }) => ({
  display: "inline-block",
  verticalAlign: "middle",
  width: 15,
  height: 15,
  padding: 3,
  marginLeft: 5,
  cursor: disabled ? "not-allowed" : "pointer",
  color: theme.textMutedColor,
  "&:hover": disabled ? {} : { color: theme.color.ancillary },
  "svg + &": { marginLeft: 0 }
}))
var ActionSubstractIcon = Tr(SubtractIcon)(({ theme, disabled }) => ({
  display: "inline-block",
  verticalAlign: "middle",
  width: 15,
  height: 15,
  padding: 3,
  marginLeft: 5,
  cursor: disabled ? "not-allowed" : "pointer",
  color: theme.textMutedColor,
  "&:hover": disabled ? {} : { color: theme.color.negative },
  "svg + &": { marginLeft: 0 }
}))
var Input = Tr.input(({ theme, placeholder }) => ({
  outline: 0,
  margin: placeholder ? 1 : "1px 0",
  padding: "3px 4px",
  color: theme.color.defaultText,
  background: theme.background.app,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 4,
  lineHeight: "14px",
  width: placeholder === "Key" ? 80 : 120,
  "&:focus": { border: `1px solid ${theme.color.secondary}` }
}))
var RawButton = Tr(Dl)(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: 2,
  right: 2,
  height: 21,
  padding: "0 3px",
  background: theme.background.bar,
  border: `1px solid ${theme.appBorderColor}`,
  borderRadius: 3,
  color: theme.textMutedColor,
  fontSize: "9px",
  fontWeight: "bold",
  textDecoration: "none",
  span: { marginLeft: 3, marginTop: 1 }
}))
var RawInput = Tr(wL.Textarea)(({ theme }) => ({
  flex: 1,
  padding: "7px 6px",
  fontFamily: theme.typography.fonts.mono,
  fontSize: "12px",
  lineHeight: "18px",
  "&::placeholder": {
    fontFamily: theme.typography.fonts.base,
    fontSize: "13px"
  },
  "&:placeholder-shown": { padding: "7px 10px" }
}))
var ENTER_EVENT = {
  bubbles: true,
  cancelable: true,
  key: "Enter",
  code: "Enter",
  keyCode: 13
}
var dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(
    new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT)
  )
}
var selectValue = (event) => {
  event.currentTarget.select()
}
var getCustomStyleFunction = (theme) => () => ({
  name: { color: theme.color.secondary },
  collapsed: { color: theme.color.dark },
  ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 },
  li: { outline: 0 }
})
var ObjectControl = ({ name: name2, value: value22, onChange, argType }) => {
  var _a
  let theme = Mt(),
    data = (0, import_react.useMemo)(
      () => value22 && (0, import_cloneDeep.default)(value22),
      [value22]
    ),
    hasData = data != null,
    [showRaw, setShowRaw] = (0, import_react.useState)(!hasData),
    [parseError, setParseError] = (0, import_react.useState)(null),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly),
    updateRaw = (0, import_react.useCallback)(
      (raw) => {
        try {
          raw && onChange(JSON.parse(raw)), setParseError(void 0)
        } catch (e2) {
          setParseError(e2)
        }
      },
      [onChange]
    ),
    [forceVisible, setForceVisible] = (0, import_react.useState)(false),
    onForceVisible = (0, import_react.useCallback)(() => {
      onChange({}), setForceVisible(true)
    }, [setForceVisible]),
    htmlElRef = (0, import_react.useRef)(null)
  if (
    ((0, import_react.useEffect)(() => {
      forceVisible && htmlElRef.current && htmlElRef.current.select()
    }, [forceVisible]),
    !hasData)
  )
    return import_react.default.createElement(
      Ao,
      {
        disabled: readonly,
        id: getControlSetterButtonId(name2),
        onClick: onForceVisible
      },
      "Set object"
    )
  let rawJSONForm = import_react.default.createElement(RawInput, {
      ref: htmlElRef,
      id: getControlId(name2),
      name: name2,
      defaultValue: value22 === null ? "" : JSON.stringify(value22, null, 2),
      onBlur: (event) => updateRaw(event.target.value),
      placeholder: "Edit JSON string...",
      autoFocus: forceVisible,
      valid: parseError ? "error" : null,
      readOnly: readonly
    }),
    isObjectOrArray =
      Array.isArray(value22) ||
      (typeof value22 == "object" &&
        (value22 == null ? void 0 : value22.constructor) === Object)
  return import_react.default.createElement(
    Wrapper6,
    { "aria-readonly": readonly },
    isObjectOrArray &&
      import_react.default.createElement(
        RawButton,
        {
          onClick: (e2) => {
            e2.preventDefault(), setShowRaw((v2) => !v2)
          }
        },
        showRaw
          ? import_react.default.createElement(EyeCloseIcon, null)
          : import_react.default.createElement(EyeIcon, null),
        import_react.default.createElement("span", null, "RAW")
      ),
    showRaw
      ? rawJSONForm
      : import_react.default.createElement(JsonTree, {
          readOnly: readonly || !isObjectOrArray,
          isCollapsed: isObjectOrArray ? void 0 : () => true,
          data,
          rootName: name2,
          onFullyUpdate: onChange,
          getStyle: getCustomStyleFunction(theme),
          cancelButtonElement: import_react.default.createElement(
            ButtonInline,
            { type: "button" },
            "Cancel"
          ),
          editButtonElement: import_react.default.createElement(
            ButtonInline,
            { type: "submit" },
            "Save"
          ),
          addButtonElement: import_react.default.createElement(
            ButtonInline,
            { type: "submit", primary: true },
            "Save"
          ),
          plusMenuElement: import_react.default.createElement(
            ActionAddIcon,
            null
          ),
          minusMenuElement: import_react.default.createElement(
            ActionSubstractIcon,
            null
          ),
          inputElement: (_2, __, ___, key2) =>
            key2
              ? import_react.default.createElement(Input, {
                  onFocus: selectValue,
                  onBlur: dispatchEnterKey
                })
              : import_react.default.createElement(Input, null),
          fallback: rawJSONForm
        })
  )
}
var RangeInput = Tr.input(({ theme, min, max, value: value22, disabled }) => ({
  "&": { width: "100%", backgroundColor: "transparent", appearance: "none" },
  "&::-webkit-slider-runnable-track": {
    background:
      theme.base === "light"
        ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
    boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
    borderRadius: 6,
    width: "100%",
    height: 6,
    cursor: disabled ? "not-allowed" : "pointer"
  },
  "&::-webkit-slider-thumb": {
    marginTop: "-6px",
    width: 16,
    height: 16,
    border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
    borderRadius: "50px",
    boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`,
    cursor: disabled ? "not-allowed" : "grab",
    appearance: "none",
    background: `${theme.input.background}`,
    transition: "all 150ms ease-out",
    "&:hover": {
      background: `${curriedDarken$1(0.05, theme.input.background)}`,
      transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
      transition: "all 50ms ease-out"
    },
    "&:active": {
      background: `${theme.input.background}`,
      transform: "scale3d(1, 1, 1) translateY(0px)",
      cursor: disabled ? "not-allowed" : "grab"
    }
  },
  "&:focus": {
    outline: "none",
    "&::-webkit-slider-runnable-track": {
      borderColor: rgba(theme.color.secondary, 0.4)
    },
    "&::-webkit-slider-thumb": {
      borderColor: theme.color.secondary,
      boxShadow: `0 0px 5px 0px ${theme.color.secondary}`
    }
  },
  "&::-moz-range-track": {
    background:
      theme.base === "light"
        ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
    boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
    borderRadius: 6,
    width: "100%",
    height: 6,
    cursor: disabled ? "not-allowed" : "pointer",
    outline: "none"
  },
  "&::-moz-range-thumb": {
    width: 16,
    height: 16,
    border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
    borderRadius: "50px",
    boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`,
    cursor: disabled ? "not-allowed" : "grap",
    background: `${theme.input.background}`,
    transition: "all 150ms ease-out",
    "&:hover": {
      background: `${curriedDarken$1(0.05, theme.input.background)}`,
      transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)",
      transition: "all 50ms ease-out"
    },
    "&:active": {
      background: `${theme.input.background}`,
      transform: "scale3d(1, 1, 1) translateY(0px)",
      cursor: "grabbing"
    }
  },
  "&::-ms-track": {
    background:
      theme.base === "light"
        ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)`
        : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${((value22 - min) / (max - min)) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`,
    boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`,
    color: "transparent",
    width: "100%",
    height: "6px",
    cursor: "pointer"
  },
  "&::-ms-fill-lower": { borderRadius: 6 },
  "&::-ms-fill-upper": { borderRadius: 6 },
  "&::-ms-thumb": {
    width: 16,
    height: 16,
    background: `${theme.input.background}`,
    border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`,
    borderRadius: 50,
    cursor: "grab",
    marginTop: 0
  },
  "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } }
}))
var RangeLabel = Tr.span({
  paddingLeft: 5,
  paddingRight: 5,
  fontSize: 12,
  whiteSpace: "nowrap",
  fontFeatureSettings: "tnum",
  fontVariantNumeric: "tabular-nums",
  "[aria-readonly=true] &": { opacity: 0.5 }
})
var RangeCurrentAndMaxLabel = Tr(RangeLabel)(
  ({ numberOFDecimalsPlaces, max }) => ({
    width: `${numberOFDecimalsPlaces + max.toString().length * 2 + 3}ch`,
    textAlign: "right",
    flexShrink: 0
  })
)
var RangeWrapper = Tr.div({
  display: "flex",
  alignItems: "center",
  width: "100%"
})
function getNumberOfDecimalPlaces(number) {
  let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
  return match
    ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0))
    : 0
}
var RangeControl = ({
  name: name2,
  value: value22,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  onBlur,
  onFocus,
  argType
}) => {
  var _a
  let handleChange = (event) => {
      onChange(parse22(event.target.value))
    },
    hasValue = value22 !== void 0,
    numberOFDecimalsPlaces = (0, import_react.useMemo)(
      () => getNumberOfDecimalPlaces(step),
      [step]
    ),
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly)
  return import_react.default.createElement(
    RangeWrapper,
    { "aria-readonly": readonly },
    import_react.default.createElement(RangeLabel, null, min),
    import_react.default.createElement(RangeInput, {
      id: getControlId(name2),
      type: "range",
      disabled: readonly,
      onChange: handleChange,
      name: name2,
      value: value22,
      min,
      max,
      step,
      onFocus,
      onBlur
    }),
    import_react.default.createElement(
      RangeCurrentAndMaxLabel,
      { numberOFDecimalsPlaces, max },
      hasValue ? value22.toFixed(numberOFDecimalsPlaces) : "--",
      " / ",
      max
    )
  )
}
var Wrapper7 = Tr.label({ display: "flex" })
var MaxLength = Tr.div(({ isMaxed }) => ({
  marginLeft: "0.75rem",
  paddingTop: "0.35rem",
  color: isMaxed ? "red" : void 0
}))
var TextControl = ({
  name: name2,
  value: value22,
  onChange,
  onFocus,
  onBlur,
  maxLength,
  argType
}) => {
  var _a
  let handleChange = (event) => {
      onChange(event.target.value)
    },
    readonly = !!((_a = argType == null ? void 0 : argType.table) == null
      ? void 0
      : _a.readonly),
    [forceVisible, setForceVisible] = (0, import_react.useState)(false),
    onForceVisible = (0, import_react.useCallback)(() => {
      onChange(""), setForceVisible(true)
    }, [setForceVisible])
  if (value22 === void 0)
    return import_react.default.createElement(
      Ao,
      {
        variant: "outline",
        size: "medium",
        disabled: readonly,
        id: getControlSetterButtonId(name2),
        onClick: onForceVisible
      },
      "Set string"
    )
  let isValid = typeof value22 == "string"
  return import_react.default.createElement(
    Wrapper7,
    null,
    import_react.default.createElement(wL.Textarea, {
      id: getControlId(name2),
      maxLength,
      onChange: handleChange,
      disabled: readonly,
      size: "flex",
      placeholder: "Edit string...",
      autoFocus: forceVisible,
      valid: isValid ? null : "error",
      name: name2,
      value: isValid ? value22 : "",
      onFocus,
      onBlur
    }),
    maxLength &&
      import_react.default.createElement(
        MaxLength,
        { isMaxed: (value22 == null ? void 0 : value22.length) === maxLength },
        (value22 == null ? void 0 : value22.length) ?? 0,
        " / ",
        maxLength
      )
  )
}
var FileInput = Tr(wL.Input)({ padding: 10 })
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url)
  })
}
var FilesControl = ({
  onChange,
  name: name2,
  accept = "image/*",
  value: value22,
  argType
}) => {
  var _a
  let inputElement = (0, import_react.useRef)(null),
    readonly =
      (_a = argType == null ? void 0 : argType.control) == null
        ? void 0
        : _a.readOnly
  function handleFileChange(e2) {
    if (!e2.target.files) return
    let fileUrls = Array.from(e2.target.files).map((file) =>
      URL.createObjectURL(file)
    )
    onChange(fileUrls), revokeOldUrls(value22)
  }
  return (
    (0, import_react.useEffect)(() => {
      value22 == null &&
        inputElement.current &&
        (inputElement.current.value = null)
    }, [value22, name2]),
    import_react.default.createElement(FileInput, {
      ref: inputElement,
      id: getControlId(name2),
      type: "file",
      name: name2,
      multiple: true,
      disabled: readonly,
      onChange: handleFileChange,
      accept,
      size: "flex"
    })
  )
}
var LazyColorControl = (0, import_react.lazy)(
  () => import("./Color-KGDBMAHA-YALDFIYE.js")
)
var ColorControl = (props) =>
  import_react.default.createElement(
    import_react.Suspense,
    { fallback: import_react.default.createElement("div", null) },
    import_react.default.createElement(LazyColorControl, { ...props })
  )
var Controls2 = {
  array: ObjectControl,
  object: ObjectControl,
  boolean: BooleanControl,
  color: ColorControl,
  date: DateControl,
  number: NumberControl,
  check: OptionsControl,
  "inline-check": OptionsControl,
  radio: OptionsControl,
  "inline-radio": OptionsControl,
  select: OptionsControl,
  "multi-select": OptionsControl,
  range: RangeControl,
  text: TextControl,
  file: FilesControl
}
var NoControl = () =>
  import_react.default.createElement(import_react.default.Fragment, null, "-")
var ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a
  let { key: key2, control } = row,
    [isFocused, setFocused] = (0, import_react.useState)(false),
    [boxedValue, setBoxedValue] = (0, import_react.useState)({ value: arg })
  ;(0, import_react.useEffect)(() => {
    isFocused || setBoxedValue({ value: arg })
  }, [isFocused, arg])
  let onChange = (0, import_react.useCallback)(
      (argVal) => (
        setBoxedValue({ value: argVal }), updateArgs({ [key2]: argVal }), argVal
      ),
      [updateArgs, key2]
    ),
    onBlur = (0, import_react.useCallback)(() => setFocused(false), []),
    onFocus = (0, import_react.useCallback)(() => setFocused(true), [])
  if (!control || control.disable) {
    let canBeSetup =
      (control == null ? void 0 : control.disable) !== true &&
      ((_a = row == null ? void 0 : row.type) == null ? void 0 : _a.name) !==
        "function"
    return isHovered && canBeSetup
      ? import_react.default.createElement(
          Bu,
          {
            href: "https://storybook.js.org/docs/react/essentials/controls",
            target: "_blank",
            withArrow: true
          },
          "Setup controls"
        )
      : import_react.default.createElement(NoControl, null)
  }
  let props = {
      name: key2,
      argType: row,
      value: boxedValue.value,
      onChange,
      onBlur,
      onFocus
    },
    Control = Controls2[control.type] || NoControl
  return import_react.default.createElement(Control, {
    ...props,
    ...control,
    controlType: control.type
  })
}
var Name = Tr.span({ fontWeight: "bold" })
var Required = Tr.span(({ theme }) => ({
  color: theme.color.negative,
  fontFamily: theme.typography.fonts.mono,
  cursor: "help"
}))
var Description = Tr.div(({ theme }) => ({
  "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } },
  code: {
    ...At({ theme }),
    fontSize: 12,
    fontFamily: theme.typography.fonts.mono
  },
  "& code": { margin: 0, display: "inline-block" },
  "& pre > code": { whiteSpace: "pre-wrap" }
}))
var Type = Tr.div(({ theme, hasDescription }) => ({
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.1, theme.color.defaultText)
      : curriedTransparentize$1(0.2, theme.color.defaultText),
  marginTop: hasDescription ? 4 : 0
}))
var TypeWithJsDoc = Tr.div(({ theme, hasDescription }) => ({
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.1, theme.color.defaultText)
      : curriedTransparentize$1(0.2, theme.color.defaultText),
  marginTop: hasDescription ? 12 : 0,
  marginBottom: 12
}))
var StyledTd = Tr.td(({ theme, expandable }) => ({
  paddingLeft: expandable ? "40px !important" : "20px !important"
}))
var toSummary = (value22) =>
  value22 && { summary: typeof value22 == "string" ? value22 : value22.name }
var ArgRow = (props) => {
  var _a
  let [isHovered, setIsHovered] = (0, import_react.useState)(false),
    { row, updateArgs, compact, expandable, initialExpandedArgs } = props,
    { name: name2, description } = row,
    table = row.table || {},
    type = table.type || toSummary(row.type),
    defaultValue = table.defaultValue || row.defaultValue,
    required = (_a = row.type) == null ? void 0 : _a.required,
    hasDescription = description != null && description !== ""
  return import_react.default.createElement(
    "tr",
    {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    },
    import_react.default.createElement(
      StyledTd,
      { expandable },
      import_react.default.createElement(Name, null, name2),
      required
        ? import_react.default.createElement(
            Required,
            { title: "Required" },
            "*"
          )
        : null
    ),
    compact
      ? null
      : import_react.default.createElement(
          "td",
          null,
          hasDescription &&
            import_react.default.createElement(
              Description,
              null,
              import_react.default.createElement(
                index_modern_default,
                null,
                description
              )
            ),
          table.jsDocTags != null
            ? import_react.default.createElement(
                import_react.default.Fragment,
                null,
                import_react.default.createElement(
                  TypeWithJsDoc,
                  { hasDescription },
                  import_react.default.createElement(ArgValue, {
                    value: type,
                    initialExpandedArgs
                  })
                ),
                import_react.default.createElement(ArgJsDoc, {
                  tags: table.jsDocTags
                })
              )
            : import_react.default.createElement(
                Type,
                { hasDescription },
                import_react.default.createElement(ArgValue, {
                  value: type,
                  initialExpandedArgs
                })
              )
        ),
    compact
      ? null
      : import_react.default.createElement(
          "td",
          null,
          import_react.default.createElement(ArgValue, {
            value: defaultValue,
            initialExpandedArgs
          })
        ),
    updateArgs
      ? import_react.default.createElement(
          "td",
          null,
          import_react.default.createElement(ArgControl, {
            ...props,
            isHovered
          })
        )
      : null
  )
}
var ExpanderIconDown = Tr(ChevronDownIcon)(({ theme }) => ({
  marginRight: 8,
  marginLeft: -10,
  marginTop: -2,
  height: 12,
  width: 12,
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.25, theme.color.defaultText)
      : curriedTransparentize$1(0.3, theme.color.defaultText),
  border: "none",
  display: "inline-block"
}))
var ExpanderIconRight = Tr(ChevronRightIcon)(({ theme }) => ({
  marginRight: 8,
  marginLeft: -10,
  marginTop: -2,
  height: 12,
  width: 12,
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.25, theme.color.defaultText)
      : curriedTransparentize$1(0.3, theme.color.defaultText),
  border: "none",
  display: "inline-block"
}))
var FlexWrapper = Tr.span(({ theme }) => ({
  display: "flex",
  lineHeight: "20px",
  alignItems: "center"
}))
var Section = Tr.td(({ theme }) => ({
  position: "relative",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s1 - 1,
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.4, theme.color.defaultText)
      : curriedTransparentize$1(0.6, theme.color.defaultText),
  background: `${theme.background.app} !important`,
  "& ~ td": { background: `${theme.background.app} !important` }
}))
var Subsection = Tr.td(({ theme }) => ({
  position: "relative",
  fontWeight: theme.typography.weight.bold,
  fontSize: theme.typography.size.s2 - 1,
  background: theme.background.app
}))
var StyledTd2 = Tr.td(() => ({ position: "relative" }))
var StyledTr = Tr.tr(({ theme }) => ({
  "&:hover > td": {
    backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`,
    boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`,
    cursor: "row-resize"
  }
}))
var ClickIntercept = Tr.button(() => ({
  background: "none",
  border: "none",
  padding: "0",
  font: "inherit",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  color: "transparent",
  cursor: "row-resize !important"
}))
var SectionRow = ({
  level = "section",
  label,
  children,
  initialExpanded = true,
  colSpan = 3
}) => {
  let [expanded, setExpanded] = (0, import_react.useState)(initialExpanded),
    Level = level === "subsection" ? Subsection : Section,
    itemCount = (children == null ? void 0 : children.length) || 0,
    caption =
      level === "subsection"
        ? `${itemCount} item${itemCount !== 1 ? "s" : ""}`
        : "",
    helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(
      StyledTr,
      { title: helperText },
      import_react.default.createElement(
        Level,
        { colSpan: 1 },
        import_react.default.createElement(
          ClickIntercept,
          { onClick: (e2) => setExpanded(!expanded), tabIndex: 0 },
          helperText
        ),
        import_react.default.createElement(
          FlexWrapper,
          null,
          expanded
            ? import_react.default.createElement(ExpanderIconDown, null)
            : import_react.default.createElement(ExpanderIconRight, null),
          label
        )
      ),
      import_react.default.createElement(
        StyledTd2,
        { colSpan: colSpan - 1 },
        import_react.default.createElement(
          ClickIntercept,
          {
            onClick: (e2) => setExpanded(!expanded),
            tabIndex: -1,
            style: { outline: "none" }
          },
          helperText
        ),
        expanded ? null : caption
      )
    ),
    expanded ? children : null
  )
}
var Row = Tr.div(({ theme }) => ({
  display: "flex",
  gap: 16,
  borderBottom: `1px solid ${theme.appBorderColor}`,
  "&:last-child": { borderBottom: 0 }
}))
var Column = Tr.div(({ numColumn }) => ({
  display: "flex",
  flexDirection: "column",
  flex: numColumn || 1,
  gap: 5,
  padding: "12px 20px"
}))
var SkeletonText = Tr.div(({ theme, width, height }) => ({
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,
  background: theme.appBorderColor,
  width: width || "100%",
  height: height || 16,
  borderRadius: 3
}))
var columnWidth = [2, 4, 2, 2]
var Skeleton = () =>
  import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(
      Row,
      null,
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[0] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[1] },
        import_react.default.createElement(SkeletonText, { width: "30%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[2] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[3] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      )
    ),
    import_react.default.createElement(
      Row,
      null,
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[0] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[1] },
        import_react.default.createElement(SkeletonText, { width: "80%" }),
        import_react.default.createElement(SkeletonText, { width: "30%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[2] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[3] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      )
    ),
    import_react.default.createElement(
      Row,
      null,
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[0] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[1] },
        import_react.default.createElement(SkeletonText, { width: "80%" }),
        import_react.default.createElement(SkeletonText, { width: "30%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[2] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[3] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      )
    ),
    import_react.default.createElement(
      Row,
      null,
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[0] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[1] },
        import_react.default.createElement(SkeletonText, { width: "80%" }),
        import_react.default.createElement(SkeletonText, { width: "30%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[2] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      ),
      import_react.default.createElement(
        Column,
        { numColumn: columnWidth[3] },
        import_react.default.createElement(SkeletonText, { width: "60%" })
      )
    )
  )
var Wrapper8 = Tr.div(({ inAddonPanel, theme }) => ({
  height: inAddonPanel ? "100%" : "auto",
  display: "flex",
  border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`,
  borderRadius: inAddonPanel ? 0 : theme.appBorderRadius,
  padding: inAddonPanel ? 0 : 40,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: theme.background.content,
  boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0"
}))
var Links = Tr.div(({ theme }) => ({
  display: "flex",
  fontSize: theme.typography.size.s2 - 1,
  gap: 25
}))
var Divider = Tr.div(({ theme }) => ({
  width: 1,
  height: 16,
  backgroundColor: theme.appBorderColor
}))
var Empty = ({ inAddonPanel }) => {
  let [isLoading, setIsLoading] = (0, import_react.useState)(true)
  return (
    (0, import_react.useEffect)(() => {
      let load = setTimeout(() => {
        setIsLoading(false)
      }, 100)
      return () => clearTimeout(load)
    }, []),
    isLoading
      ? null
      : import_react.default.createElement(
          Wrapper8,
          { inAddonPanel },
          import_react.default.createElement(b1, {
            title: inAddonPanel
              ? "Interactive story playground"
              : "Args table with interactive controls couldn't be auto-generated",
            description: import_react.default.createElement(
              import_react.default.Fragment,
              null,
              "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
            ),
            footer: import_react.default.createElement(
              Links,
              null,
              inAddonPanel &&
                import_react.default.createElement(
                  import_react.default.Fragment,
                  null,
                  import_react.default.createElement(
                    Bu,
                    {
                      href: "https://youtu.be/0gOfS6K0x0E",
                      target: "_blank",
                      withArrow: true
                    },
                    import_react.default.createElement(VideoIcon, null),
                    " Watch 5m video"
                  ),
                  import_react.default.createElement(Divider, null),
                  import_react.default.createElement(
                    Bu,
                    {
                      href: "https://storybook.js.org/docs/essentials/controls",
                      target: "_blank",
                      withArrow: true
                    },
                    import_react.default.createElement(DocumentIcon, null),
                    " Read docs"
                  )
                ),
              !inAddonPanel &&
                import_react.default.createElement(
                  Bu,
                  {
                    href: "https://storybook.js.org/docs/essentials/controls",
                    target: "_blank",
                    withArrow: true
                  },
                  import_react.default.createElement(DocumentIcon, null),
                  " Learn how to set that up"
                )
            )
          })
        )
  )
}
var TableWrapper = Tr.table(({ theme, compact, inAddonPanel }) => ({
  "&&": {
    borderSpacing: 0,
    color: theme.color.defaultText,
    "td, th": {
      padding: 0,
      border: "none",
      verticalAlign: "top",
      textOverflow: "ellipsis"
    },
    fontSize: theme.typography.size.s2 - 1,
    lineHeight: "20px",
    textAlign: "left",
    width: "100%",
    marginTop: inAddonPanel ? 0 : 25,
    marginBottom: inAddonPanel ? 0 : 40,
    "thead th:first-of-type, td:first-of-type": { width: "25%" },
    "th:first-of-type, td:first-of-type": { paddingLeft: 20 },
    "th:nth-of-type(2), td:nth-of-type(2)": {
      ...(compact ? null : { width: "35%" })
    },
    "td:nth-of-type(3)": { ...(compact ? null : { width: "15%" }) },
    "th:last-of-type, td:last-of-type": {
      paddingRight: 20,
      ...(compact ? null : { width: "25%" })
    },
    th: {
      color:
        theme.base === "light"
          ? curriedTransparentize$1(0.25, theme.color.defaultText)
          : curriedTransparentize$1(0.45, theme.color.defaultText),
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15
    },
    td: {
      paddingTop: "10px",
      paddingBottom: "10px",
      "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 },
      "&:last-of-type": { paddingRight: 20 }
    },
    marginLeft: inAddonPanel ? 0 : 1,
    marginRight: inAddonPanel ? 0 : 1,
    tbody: {
      ...(inAddonPanel
        ? null
        : {
            filter:
              theme.base === "light"
                ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))"
                : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))"
          }),
      "> tr > *": {
        background: theme.background.content,
        borderTop: `1px solid ${theme.appBorderColor}`
      },
      ...(inAddonPanel
        ? null
        : {
            "> tr:first-of-type > *": {
              borderBlockStart: `1px solid ${theme.appBorderColor}`
            },
            "> tr:last-of-type > *": {
              borderBlockEnd: `1px solid ${theme.appBorderColor}`
            },
            "> tr > *:first-of-type": {
              borderInlineStart: `1px solid ${theme.appBorderColor}`
            },
            "> tr > *:last-of-type": {
              borderInlineEnd: `1px solid ${theme.appBorderColor}`
            },
            "> tr:first-of-type > td:first-of-type": {
              borderTopLeftRadius: theme.appBorderRadius
            },
            "> tr:first-of-type > td:last-of-type": {
              borderTopRightRadius: theme.appBorderRadius
            },
            "> tr:last-of-type > td:first-of-type": {
              borderBottomLeftRadius: theme.appBorderRadius
            },
            "> tr:last-of-type > td:last-of-type": {
              borderBottomRightRadius: theme.appBorderRadius
            }
          })
    }
  }
}))
var StyledIconButton = Tr(Dl)(({ theme }) => ({ margin: "-4px -12px -4px 0" }))
var ControlHeadingWrapper = Tr.span({
  display: "flex",
  justifyContent: "space-between"
})
var sortFns = {
  alpha: (a2, b2) => a2.name.localeCompare(b2.name),
  requiredFirst: (a2, b2) => {
    var _a, _b
    return (
      +!!((_a = b2.type) == null ? void 0 : _a.required) -
        +!!((_b = a2.type) == null ? void 0 : _b.required) ||
      a2.name.localeCompare(b2.name)
    )
  },
  none: void 0
}
var groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} }
  if (!rows) return sections
  Object.entries(rows).forEach(([key2, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {}
    if (category) {
      let section = sections.sections[category] || {
        ungrouped: [],
        subsections: {}
      }
      if (!subcategory) section.ungrouped.push({ key: key2, ...row })
      else {
        let subsection = section.subsections[subcategory] || []
        subsection.push({ key: key2, ...row }),
          (section.subsections[subcategory] = subsection)
      }
      sections.sections[category] = section
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || []
      subsection.push({ key: key2, ...row }),
        (sections.ungroupedSubsections[subcategory] = subsection)
    } else sections.ungrouped.push({ key: key2, ...row })
  })
  let sortFn = sortFns[sort],
    sortSubsection = (record) =>
      sortFn
        ? Object.keys(record).reduce(
            (acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }),
            {}
          )
        : record
  return {
    ungrouped: sections.ungrouped.sort(sortFn),
    ungroupedSubsections: sortSubsection(sections.ungroupedSubsections),
    sections: Object.keys(sections.sections).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: {
          ungrouped: sections.sections[cur].ungrouped.sort(sortFn),
          subsections: sortSubsection(sections.sections[cur].subsections)
        }
      }),
      {}
    )
  }
}
var safeIncludeConditionalArg = (row, args2, globals) => {
  try {
    return P(row, args2, globals)
  } catch (err) {
    return import_client_logger.once.warn(err.message), false
  }
}
var ArgsTable = (props) => {
  let {
    updateArgs,
    resetArgs,
    compact,
    inAddonPanel,
    initialExpandedArgs,
    sort = "none",
    isLoading
  } = props
  if ("error" in props) {
    let { error } = props
    return import_react.default.createElement(
      EmptyBlock,
      null,
      error,
      " ",
      import_react.default.createElement(
        Bu,
        {
          href: "http://storybook.js.org/docs/",
          target: "_blank",
          withArrow: true
        },
        import_react.default.createElement(DocumentIcon, null),
        " Read the docs"
      )
    )
  }
  if (isLoading) return import_react.default.createElement(Skeleton, null)
  let { rows, args: args2, globals } = "rows" in props && props,
    groups = groupRows(
      (0, import_pickBy.default)(rows, (row) => {
        var _a
        return (
          !((_a = row == null ? void 0 : row.table) == null
            ? void 0
            : _a.disable) &&
          safeIncludeConditionalArg(row, args2 || {}, globals || {})
        )
      }),
      sort
    ),
    hasNoUngrouped = groups.ungrouped.length === 0,
    hasNoSections = Object.entries(groups.sections).length === 0,
    hasNoUngroupedSubsections =
      Object.entries(groups.ungroupedSubsections).length === 0
  if (hasNoUngrouped && hasNoSections && hasNoUngroupedSubsections)
    return import_react.default.createElement(Empty, { inAddonPanel })
  let colSpan = 1
  updateArgs && (colSpan += 1), compact || (colSpan += 2)
  let expandable = Object.keys(groups.sections).length > 0,
    common = { updateArgs, compact, inAddonPanel, initialExpandedArgs }
  return import_react.default.createElement(
    z5,
    null,
    import_react.default.createElement(
      TableWrapper,
      { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" },
      import_react.default.createElement(
        "thead",
        { className: "docblock-argstable-head" },
        import_react.default.createElement(
          "tr",
          null,
          import_react.default.createElement(
            "th",
            null,
            import_react.default.createElement("span", null, "Name")
          ),
          compact
            ? null
            : import_react.default.createElement(
                "th",
                null,
                import_react.default.createElement("span", null, "Description")
              ),
          compact
            ? null
            : import_react.default.createElement(
                "th",
                null,
                import_react.default.createElement("span", null, "Default")
              ),
          updateArgs
            ? import_react.default.createElement(
                "th",
                null,
                import_react.default.createElement(
                  ControlHeadingWrapper,
                  null,
                  "Control",
                  " ",
                  !isLoading &&
                    resetArgs &&
                    import_react.default.createElement(
                      StyledIconButton,
                      { onClick: () => resetArgs(), title: "Reset controls" },
                      import_react.default.createElement(UndoIcon, {
                        "aria-hidden": true
                      })
                    )
                )
              )
            : null
        )
      ),
      import_react.default.createElement(
        "tbody",
        { className: "docblock-argstable-body" },
        groups.ungrouped.map((row) =>
          import_react.default.createElement(ArgRow, {
            key: row.key,
            row,
            arg: args2 && args2[row.key],
            ...common
          })
        ),
        Object.entries(groups.ungroupedSubsections).map(
          ([subcategory, subsection]) =>
            import_react.default.createElement(
              SectionRow,
              {
                key: subcategory,
                label: subcategory,
                level: "subsection",
                colSpan
              },
              subsection.map((row) =>
                import_react.default.createElement(ArgRow, {
                  key: row.key,
                  row,
                  arg: args2 && args2[row.key],
                  expandable,
                  ...common
                })
              )
            )
        ),
        Object.entries(groups.sections).map(([category, section]) =>
          import_react.default.createElement(
            SectionRow,
            { key: category, label: category, level: "section", colSpan },
            section.ungrouped.map((row) =>
              import_react.default.createElement(ArgRow, {
                key: row.key,
                row,
                arg: args2 && args2[row.key],
                ...common
              })
            ),
            Object.entries(section.subsections).map(
              ([subcategory, subsection]) =>
                import_react.default.createElement(
                  SectionRow,
                  {
                    key: subcategory,
                    label: subcategory,
                    level: "subsection",
                    colSpan
                  },
                  subsection.map((row) =>
                    import_react.default.createElement(ArgRow, {
                      key: row.key,
                      row,
                      arg: args2 && args2[row.key],
                      expandable,
                      ...common
                    })
                  )
                )
            )
          )
        )
      )
    )
  )
}
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs)
  return entries.length === 1
    ? import_react.default.createElement(ArgsTable, {
        ...entries[0][1],
        ...props
      })
    : import_react.default.createElement(
        w1,
        null,
        entries.map((entry, index) => {
          let [label, table] = entry,
            id = `prop_table_div_${label}`,
            Component4 = "div",
            argsTableProps = index === 0 ? props : { sort: props.sort }
          return import_react.default.createElement(
            Component4,
            { key: id, id, title: label },
            ({ active }) =>
              active
                ? import_react.default.createElement(ArgsTable, {
                    key: `prop_table_${label}`,
                    ...table,
                    ...argsTableProps
                  })
                : null
          )
        })
      )
}
var Label4 = Tr.div(({ theme }) => ({
  marginRight: 30,
  fontSize: `${theme.typography.size.s1}px`,
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.4, theme.color.defaultText)
      : curriedTransparentize$1(0.6, theme.color.defaultText)
}))
var Sample = Tr.div({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
})
var TypeSpecimen = Tr.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  "&:not(:last-child)": { marginBottom: "1rem" }
})
var Wrapper9 = Tr.div(j, ({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  margin: "25px 0 40px",
  padding: "30px 20px"
}))
var ItemTitle = Tr.div(({ theme }) => ({
  fontWeight: theme.typography.weight.bold,
  color: theme.color.defaultText
}))
var ItemSubtitle = Tr.div(({ theme }) => ({
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.2, theme.color.defaultText)
      : curriedTransparentize$1(0.6, theme.color.defaultText)
}))
var ItemDescription = Tr.div({
  flex: "0 0 30%",
  lineHeight: "20px",
  marginTop: 5
})
var SwatchLabel = Tr.div(({ theme }) => ({
  flex: 1,
  textAlign: "center",
  fontFamily: theme.typography.fonts.mono,
  fontSize: theme.typography.size.s1,
  lineHeight: 1,
  overflow: "hidden",
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.4, theme.color.defaultText)
      : curriedTransparentize$1(0.6, theme.color.defaultText),
  "> div": {
    display: "inline-block",
    overflow: "hidden",
    maxWidth: "100%",
    textOverflow: "ellipsis"
  },
  span: { display: "block", marginTop: 2 }
}))
var SwatchLabels = Tr.div({ display: "flex", flexDirection: "row" })
var Swatch = Tr.div(({ background }) => ({
  position: "relative",
  flex: 1,
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background,
    content: '""'
  }
}))
var SwatchColors = Tr.div(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  display: "flex",
  flexDirection: "row",
  height: 50,
  marginBottom: 5,
  overflow: "hidden",
  backgroundColor: "white",
  backgroundImage:
    "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)",
  backgroundClip: "padding-box"
}))
var SwatchSpecimen = Tr.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  position: "relative",
  marginBottom: 30
})
var Swatches = Tr.div({ flex: 1, display: "flex", flexDirection: "row" })
var Item = Tr.div({ display: "flex", alignItems: "flex-start" })
var ListName = Tr.div({ flex: "0 0 30%" })
var ListSwatches = Tr.div({ flex: 1 })
var ListHeading = Tr.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: 20,
  fontWeight: theme.typography.weight.bold,
  color:
    theme.base === "light"
      ? curriedTransparentize$1(0.4, theme.color.defaultText)
      : curriedTransparentize$1(0.6, theme.color.defaultText)
}))
var List = Tr.div(({ theme }) => ({
  fontSize: theme.typography.size.s2,
  lineHeight: "20px",
  display: "flex",
  flexDirection: "column"
}))
var ItemLabel = Tr.div(({ theme }) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2
}))
var ItemSpecimen = Tr.div(({ theme }) => ({
  ...getBlockBackgroundStyle(theme),
  overflow: "hidden",
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  "> img, > svg": { width: 20, height: 20 }
}))
var Item2 = Tr.div({
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  flex: "0 1 calc(20% - 10px)",
  minWidth: 120,
  margin: "0px 10px 30px 0"
})
var List2 = Tr.div({ display: "flex", flexFlow: "row wrap" })
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`
var Anchor = ({ storyId, children }) =>
  import_react.default.createElement(
    "div",
    { id: anchorBlockIdFromId(storyId), className: "sb-anchor" },
    children
  )
import_global.global &&
  import_global.global.__DOCS_CONTEXT__ === void 0 &&
  ((import_global.global.__DOCS_CONTEXT__ = (0, import_react.createContext)(
    null
  )),
  (import_global.global.__DOCS_CONTEXT__.displayName = "DocsContext"))
var DocsContext = import_global.global
  ? import_global.global.__DOCS_CONTEXT__
  : (0, import_react.createContext)(null)
var useOf = (moduleExportOrType, validTypes) =>
  (0, import_react.useContext)(DocsContext).resolveOf(
    moduleExportOrType,
    validTypes
  )
var titleCase = (str) =>
  str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
var getComponentName = (component) => {
  if (component)
    return typeof component == "string"
      ? component.includes("-")
        ? titleCase(component)
        : component
      : component.__docgenInfo && component.__docgenInfo.displayName
        ? component.__docgenInfo.displayName
        : component.name
}
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" })
}
function argsHash(args2) {
  return stringify(args2, { allowFunction: false })
}
var SourceContext = (0, import_react.createContext)({ sources: {} })
var UNKNOWN_ARGS_HASH = "--unknown--"
var SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = (0, import_react.useState)({})
  return (
    (0, import_react.useEffect)(() => {
      let handleSnippetRendered = (
        idOrEvent,
        inputSource = null,
        inputFormat = false
      ) => {
        let {
            id,
            args: args2 = void 0,
            source: source2,
            format: format2
          } = typeof idOrEvent == "string"
            ? { id: idOrEvent, source: inputSource, format: inputFormat }
            : idOrEvent,
          hash = args2 ? argsHash(args2) : UNKNOWN_ARGS_HASH
        setSources((current) => ({
          ...current,
          [id]: { ...current[id], [hash]: { code: source2, format: format2 } }
        }))
      }
      return (
        channel.on(eP, handleSnippetRendered),
        () => channel.off(eP, handleSnippetRendered)
      )
    }, []),
    import_react.default.createElement(
      SourceContext.Provider,
      { value: { sources } },
      children
    )
  )
}
var getStorySource = (storyId, args2, sourceContext) => {
  let { sources } = sourceContext,
    sourceMap = sources == null ? void 0 : sources[storyId]
  return (
    (sourceMap == null ? void 0 : sourceMap[argsHash(args2)]) ||
    (sourceMap == null ? void 0 : sourceMap[UNKNOWN_ARGS_HASH]) || { code: "" }
  )
}
var getSnippet = ({
  snippet,
  storyContext,
  typeFromProps,
  transformFromProps
}) => {
  var _a, _b
  let { __isArgsStory: isArgsStory } = storyContext.parameters,
    sourceParameters =
      ((_a = storyContext.parameters.docs) == null ? void 0 : _a.source) || {},
    type = typeFromProps || sourceParameters.type || sT.AUTO
  if (sourceParameters.code !== void 0) return sourceParameters.code
  let code =
    type === sT.DYNAMIC || (type === sT.AUTO && snippet && isArgsStory)
      ? snippet
      : sourceParameters.originalSource || ""
  return (
    ((_b = transformFromProps ?? sourceParameters.transform) == null
      ? void 0
      : _b(code, storyContext)) || code
  )
}
var useSourceProps = (props, docsContext, sourceContext) => {
  var _a, _b, _c, _d
  let story,
    { of } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  if (of) story = docsContext.resolveOf(of, ["story"]).story
  else
    try {
      story = docsContext.storyById()
    } catch {}
  let sourceParameters =
      ((_b =
        (_a = story == null ? void 0 : story.parameters) == null
          ? void 0
          : _a.docs) == null
        ? void 0
        : _b.source) || {},
    { code } = props,
    format2 = props.format ?? sourceParameters.format,
    language = props.language ?? sourceParameters.language ?? "jsx",
    dark = props.dark ?? sourceParameters.dark ?? false
  if (!code && !story) return { error: "Oh no! The source is not available." }
  if (code) return { code, format: format2, language, dark }
  let storyContext = docsContext.getStoryContext(story),
    argsForSource = props.__forceInitialArgs
      ? storyContext.initialArgs
      : storyContext.unmappedArgs,
    source2 = getStorySource(story.id, argsForSource, sourceContext)
  return (
    (format2 =
      source2.format ??
      ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.source) == null
        ? void 0
        : _d.format) ??
      false),
    {
      code: getSnippet({
        snippet: source2.code,
        storyContext: { ...storyContext, args: argsForSource },
        typeFromProps: props.type,
        transformFromProps: props.transform
      }),
      format: format2,
      language,
      dark
    }
  )
}
function useStory(storyId, context) {
  let stories = useStories([storyId], context)
  return stories && stories[0]
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = (0, import_react.useState)({})
  return (
    (0, import_react.useEffect)(() => {
      Promise.all(
        storyIds.map(async (storyId) => {
          let story = await context.loadStory(storyId)
          setStories((current) =>
            current[storyId] === story
              ? current
              : { ...current, [storyId]: story }
          )
        })
      )
    }),
    storyIds.map((storyId) => {
      if (storiesById[storyId]) return storiesById[storyId]
      try {
        return context.storyById(storyId)
      } catch {
        return null
      }
    })
  )
}
var getStoryId2 = (props, context) => {
  let { of, meta } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  return (
    meta && context.referenceMeta(meta, false),
    context.resolveOf(of || "story", ["story"]).story.id
  )
}
var getStoryProps = (props, story, context) => {
  let { parameters = {} } = story || {},
    { docs = {} } = parameters,
    storyParameters = docs.story || {}
  if (docs.disable) return null
  if (props.inline ?? storyParameters.inline ?? false) {
    let height2 = props.height ?? storyParameters.height,
      autoplay = props.autoplay ?? storyParameters.autoplay ?? false
    return {
      story,
      inline: true,
      height: height2,
      autoplay,
      forceInitialArgs: !!props.__forceInitialArgs,
      primary: !!props.__primary,
      renderStoryToElement: context.renderStoryToElement
    }
  }
  let height =
    props.height ??
    storyParameters.height ??
    storyParameters.iframeHeight ??
    "100px"
  return { story, inline: false, height, primary: !!props.__primary }
}
var Story2 = (props = { __forceInitialArgs: false, __primary: false }) => {
  let context = (0, import_react.useContext)(DocsContext),
    storyId = getStoryId2(props, context),
    story = useStory(storyId, context)
  if (!story) return import_react.default.createElement(StorySkeleton, null)
  let storyProps = getStoryProps(props, story, context)
  return storyProps
    ? import_react.default.createElement(Story, { ...storyProps })
    : null
}
var Canvas = (props) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j
  let docsContext = (0, import_react.useContext)(DocsContext),
    sourceContext = (0, import_react.useContext)(SourceContext),
    { of, source: source2 } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let { story } = useOf(of || "story", ["story"]),
    sourceProps = useSourceProps(
      { ...source2, ...(of && { of }) },
      docsContext,
      sourceContext
    ),
    layout =
      props.layout ??
      story.parameters.layout ??
      ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null
        ? void 0
        : _b.layout) ??
      "padded",
    withToolbar =
      props.withToolbar ??
      ((_d = (_c = story.parameters.docs) == null ? void 0 : _c.canvas) == null
        ? void 0
        : _d.withToolbar) ??
      false,
    additionalActions =
      props.additionalActions ??
      ((_f = (_e2 = story.parameters.docs) == null ? void 0 : _e2.canvas) ==
      null
        ? void 0
        : _f.additionalActions),
    sourceState =
      props.sourceState ??
      ((_h = (_g = story.parameters.docs) == null ? void 0 : _g.canvas) == null
        ? void 0
        : _h.sourceState) ??
      "hidden",
    className =
      props.className ??
      ((_j = (_i = story.parameters.docs) == null ? void 0 : _i.canvas) == null
        ? void 0
        : _j.className)
  return import_react.default.createElement(
    Preview,
    {
      withSource: sourceState === "none" ? void 0 : sourceProps,
      isExpanded: sourceState === "shown",
      withToolbar,
      additionalActions,
      className,
      layout
    },
    import_react.default.createElement(Story2, {
      of: of || story.moduleExport,
      meta: props.meta,
      ...props.story
    })
  )
}
var useGlobals = (story, context) => {
  let storyContext = context.getStoryContext(story),
    [globals, setGlobals] = (0, import_react.useState)(storyContext.globals)
  return (
    (0, import_react.useEffect)(() => {
      let onGlobalsUpdated = (changed) => {
        setGlobals(changed.globals)
      }
      return (
        context.channel.on(
          import_core_events.GLOBALS_UPDATED,
          onGlobalsUpdated
        ),
        () =>
          context.channel.off(
            import_core_events.GLOBALS_UPDATED,
            onGlobalsUpdated
          )
      )
    }, [context.channel]),
    [globals]
  )
}
var useArgs = (story, context) => {
  let result2 = useArgsIfDefined(story, context)
  if (!result2) throw new Error("No result when story was defined")
  return result2
}
var useArgsIfDefined = (story, context) => {
  let storyContext = story ? context.getStoryContext(story) : { args: {} },
    { id: storyId } = story || { id: "none" },
    [args2, setArgs] = (0, import_react.useState)(storyContext.args)
  ;(0, import_react.useEffect)(() => {
    let onArgsUpdated = (changed) => {
      changed.storyId === storyId && setArgs(changed.args)
    }
    return (
      context.channel.on(import_core_events.STORY_ARGS_UPDATED, onArgsUpdated),
      () =>
        context.channel.off(
          import_core_events.STORY_ARGS_UPDATED,
          onArgsUpdated
        )
    )
  }, [storyId, context.channel])
  let updateArgs = (0, import_react.useCallback)(
      (updatedArgs) =>
        context.channel.emit(import_core_events.UPDATE_STORY_ARGS, {
          storyId,
          updatedArgs
        }),
      [storyId, context.channel]
    ),
    resetArgs = (0, import_react.useCallback)(
      (argNames) =>
        context.channel.emit(import_core_events.RESET_STORY_ARGS, {
          storyId,
          argNames
        }),
      [storyId, context.channel]
    )
  return story && [args2, updateArgs, resetArgs]
}
function extractComponentArgTypes2(component, parameters) {
  let { extractArgTypes } = parameters.docs || {}
  if (!extractArgTypes)
    throw new Error(
      "Args unsupported. See Args documentation for your framework."
    )
  return extractArgTypes(component)
}
var Controls3 = (props) => {
  var _a
  let { of } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let context = (0, import_react.useContext)(DocsContext),
    { story } = context.resolveOf(of || "story", ["story"]),
    { parameters, argTypes, component, subcomponents } = story,
    controlsParameters =
      ((_a = parameters.docs) == null ? void 0 : _a.controls) || {},
    include = props.include ?? controlsParameters.include,
    exclude = props.exclude ?? controlsParameters.exclude,
    sort = props.sort ?? controlsParameters.sort,
    [args2, updateArgs, resetArgs] = useArgs(story, context),
    [globals] = useGlobals(story, context),
    filteredArgTypes = (0, import_preview_api.filterArgTypes)(
      argTypes,
      include,
      exclude
    )
  if (!(!!subcomponents && Object.keys(subcomponents).length > 0))
    return Object.keys(filteredArgTypes).length > 0 ||
      Object.keys(args2).length > 0
      ? import_react.default.createElement(ArgsTable, {
          rows: filteredArgTypes,
          sort,
          args: args2,
          globals,
          updateArgs,
          resetArgs
        })
      : null
  let mainComponentName = getComponentName(component),
    subcomponentTabs = Object.fromEntries(
      Object.entries(subcomponents).map(([key2, comp]) => [
        key2,
        {
          rows: (0, import_preview_api.filterArgTypes)(
            extractComponentArgTypes2(comp, parameters),
            include,
            exclude
          ),
          sort
        }
      ])
    ),
    tabs = {
      [mainComponentName]: { rows: filteredArgTypes, sort },
      ...subcomponentTabs
    }
  return import_react.default.createElement(TabbedArgsTable, {
    tabs,
    sort,
    args: args2,
    globals,
    updateArgs,
    resetArgs
  })
}
var { document: document2 } = import_global.global
var CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (
    typeof className != "string" &&
    (typeof children != "string" || !children.match(/[\n\r]/g))
  )
    return import_react.default.createElement(lu, null, children)
  let language = className && className.split("-")
  return import_react.default.createElement(Source, {
    language: (language && language[1]) || "text",
    format: false,
    code: children,
    ...rest
  })
}
function navigate(context, url) {
  context.channel.emit(import_core_events.NAVIGATE_URL, url)
}
var A2 = uJ.a
var AnchorInPage = ({ hash, children }) => {
  let context = (0, import_react.useContext)(DocsContext)
  return import_react.default.createElement(
    A2,
    {
      href: hash,
      target: "_self",
      onClick: (event) => {
        let id = hash.substring(1)
        document2.getElementById(id) && navigate(context, hash)
      }
    },
    children
  )
}
var AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props,
    context = (0, import_react.useContext)(DocsContext)
  return !href || target === "_blank" || /^https?:\/\//.test(href)
    ? import_react.default.createElement(A2, { ...props })
    : href.startsWith("#")
      ? import_react.default.createElement(
          AnchorInPage,
          { hash: href },
          children
        )
      : import_react.default.createElement(
          A2,
          {
            href,
            onClick: (event) => {
              event.button === 0 &&
                !event.altKey &&
                !event.ctrlKey &&
                !event.metaKey &&
                !event.shiftKey &&
                (event.preventDefault(),
                navigate(context, event.currentTarget.getAttribute("href")))
            },
            target,
            ...rest
          },
          children
        )
}
var SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"]
var OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(
  (acc, headerType) => ({
    ...acc,
    [headerType]: Tr(headerType)({
      "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" },
      "&:hover svg": { visibility: "visible" }
    })
  }),
  {}
)
var OcticonAnchor = Tr.a(() => ({
  float: "left",
  lineHeight: "inherit",
  paddingRight: "10px",
  marginLeft: "-24px",
  color: "inherit"
}))
var HeaderWithOcticonAnchor = ({ as, id, children, ...rest }) => {
  let context = (0, import_react.useContext)(DocsContext),
    OcticonHeader = OcticonHeaders[as],
    hash = `#${id}`
  return import_react.default.createElement(
    OcticonHeader,
    { id, ...rest },
    import_react.default.createElement(
      OcticonAnchor,
      {
        "aria-hidden": "true",
        href: hash,
        tabIndex: -1,
        target: "_self",
        onClick: (event) => {
          document2.getElementById(id) && navigate(context, hash)
        }
      },
      import_react.default.createElement(LinkIcon, null)
    ),
    children
  )
}
var HeaderMdx = (props) => {
  let { as, id, children, ...rest } = props
  if (id)
    return import_react.default.createElement(
      HeaderWithOcticonAnchor,
      { as, id, ...rest },
      children
    )
  let Component4 = as,
    { as: omittedAs, ...withoutAs } = props
  return import_react.default.createElement(Component4, {
    ...ee(withoutAs, as)
  })
}
var HeadersMdx = SUPPORTED_MDX_HEADERS.reduce(
  (acc, headerType) => ({
    ...acc,
    [headerType]: (props) =>
      import_react.default.createElement(HeaderMdx, {
        as: headerType,
        ...props
      })
  }),
  {}
)
var Markdown2 = (props) => {
  var _a
  if (!props.children) return null
  if (typeof props.children != "string")
    throw new Error(dedent`The Markdown block only accepts children as a single string, but children were of type: '${typeof props.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
  return import_react.default.createElement(index_modern_default, {
    ...props,
    options: {
      forceBlock: true,
      overrides: {
        code: CodeOrSourceMdx,
        a: AnchorMdx,
        ...HeadersMdx,
        ...((_a = props == null ? void 0 : props.options) == null
          ? void 0
          : _a.overrides)
      },
      ...(props == null ? void 0 : props.options)
    }
  })
}
var DescriptionType = ((DescriptionType2) => (
  (DescriptionType2.INFO = "info"),
  (DescriptionType2.NOTES = "notes"),
  (DescriptionType2.DOCGEN = "docgen"),
  (DescriptionType2.AUTO = "auto"),
  DescriptionType2
))(DescriptionType || {})
var getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h
  switch (resolvedOf.type) {
    case "story":
      return (
        ((_b =
          (_a = resolvedOf.story.parameters.docs) == null
            ? void 0
            : _a.description) == null
          ? void 0
          : _b.story) || null
      )
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta,
        metaDescription =
          (_d = (_c = parameters.docs) == null ? void 0 : _c.description) ==
          null
            ? void 0
            : _d.component
      return (
        metaDescription ||
        ((_f =
          (_e2 = parameters.docs) == null
            ? void 0
            : _e2.extractComponentDescription) == null
          ? void 0
          : _f.call(_e2, component, { component, parameters })) ||
        null
      )
    }
    case "component": {
      let {
        component,
        projectAnnotations: { parameters }
      } = resolvedOf
      return (
        ((_h =
          (_g = parameters.docs) == null
            ? void 0
            : _g.extractComponentDescription) == null
          ? void 0
          : _h.call(_g, component, { component, parameters })) || null
      )
    }
    default:
      throw new Error(
        `Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`
      )
  }
}
var DescriptionContainer = (props) => {
  let { of } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let resolvedOf = useOf(of || "meta"),
    markdown = getDescriptionFromResolvedOf(resolvedOf)
  return markdown
    ? import_react.default.createElement(Markdown2, null, markdown)
    : null
}
var tocbot = __toESM2(require_js())
var Wrapper10 = Tr.div(({ theme }) => ({
  width: "10rem",
  "@media (max-width: 768px)": { display: "none" }
}))
var Content = Tr.div(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  top: 0,
  width: "10rem",
  paddingTop: "4rem",
  paddingBottom: "2rem",
  overflowY: "auto",
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s2,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch",
  "& *": { boxSizing: "border-box" },
  "& > .toc-wrapper > .toc-list": {
    paddingLeft: 0,
    borderLeft: `solid 2px ${theme.color.mediumlight}`,
    ".toc-list": {
      paddingLeft: 0,
      borderLeft: `solid 2px ${theme.color.mediumlight}`,
      ".toc-list": {
        paddingLeft: 0,
        borderLeft: `solid 2px ${theme.color.mediumlight}`
      }
    }
  },
  "& .toc-list-item": {
    position: "relative",
    listStyleType: "none",
    marginLeft: 20,
    paddingTop: 3,
    paddingBottom: 3
  },
  "& .toc-list-item::before": {
    content: '""',
    position: "absolute",
    height: "100%",
    top: 0,
    left: 0,
    transform: "translateX(calc(-2px - 20px))",
    borderLeft: `solid 2px ${theme.color.mediumdark}`,
    opacity: 0,
    transition: "opacity 0.2s"
  },
  "& .toc-list-item.is-active-li::before": { opacity: 1 },
  "& .toc-list-item > a": {
    color: theme.color.defaultText,
    textDecoration: "none"
  },
  "& .toc-list-item.is-active-li > a": {
    fontWeight: 600,
    color: theme.color.secondary,
    textDecoration: "none"
  }
}))
var Heading = Tr.p(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.875em",
  color: theme.textColor,
  textTransform: "uppercase",
  marginBottom: 10
}))
var OptionalTitle = ({ title }) =>
  title === null
    ? null
    : typeof title == "string"
      ? import_react.default.createElement(Heading, null, title)
      : title
var TableOfContents = ({
  title,
  disable,
  headingSelector,
  contentsSelector,
  ignoreSelector,
  unsafeTocbotOptions
}) => (
  (0, import_react.useEffect)(() => {
    let configuration = {
        tocSelector: ".toc-wrapper",
        contentSelector: contentsSelector ?? ".sbdocs-content",
        headingSelector: headingSelector ?? "h3",
        ignoreSelector: ignoreSelector ?? ".docs-story *, .skip-toc",
        headingsOffset: 40,
        scrollSmoothOffset: -40,
        orderedList: false,
        onClick: () => false,
        ...unsafeTocbotOptions
      },
      timeout = setTimeout(() => tocbot.init(configuration), 100)
    return () => {
      clearTimeout(timeout), tocbot.destroy()
    }
  }, [disable]),
  import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(
      Wrapper10,
      null,
      disable
        ? null
        : import_react.default.createElement(
            Content,
            null,
            import_react.default.createElement(OptionalTitle, {
              title: title || null
            }),
            import_react.default.createElement("div", {
              className: "toc-wrapper"
            })
          )
    )
  )
)
var { document: document3, window: globalWindow3 } = import_global.global
var DocsContainer = ({ context, theme, children }) => {
  var _a, _b, _c, _d, _e2
  let toc
  try {
    toc =
      (_b =
        (_a = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) ==
        null
          ? void 0
          : _a.docs) == null
        ? void 0
        : _b.toc
  } catch {
    toc =
      (_e2 =
        (_d =
          (_c = context == null ? void 0 : context.projectAnnotations) == null
            ? void 0
            : _c.parameters) == null
          ? void 0
          : _d.docs) == null
        ? void 0
        : _e2.toc
  }
  return (
    (0, import_react.useEffect)(() => {
      let url
      try {
        if (
          ((url = new URL(globalWindow3.parent.location.toString())), url.hash)
        ) {
          let element = document3.getElementById(url.hash.substring(1))
          element &&
            setTimeout(() => {
              scrollToElement(element)
            }, 200)
        }
      } catch {}
    }),
    import_react.default.createElement(
      DocsContext.Provider,
      { value: context },
      import_react.default.createElement(
        SourceContainer,
        { channel: context.channel },
        import_react.default.createElement(
          jt,
          { theme: pc(theme) },
          import_react.default.createElement(
            DocsPageWrapper,
            {
              toc: toc
                ? import_react.default.createElement(TableOfContents, {
                    className: "sbdocs sbdocs-toc--custom",
                    ...toc
                  })
                : null
            },
            children
          )
        )
      )
    )
  )
}
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/
var extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR)
  return (
    (groups == null
      ? void 0
      : groups[(groups == null ? void 0 : groups.length) - 1]) || title
  )
}
var Title2 = (props) => {
  let { children, of } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let preparedMeta
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta
  } catch (error) {
    if (
      children &&
      !error.message.includes("did you forget to use <Meta of={} />?")
    )
      throw error
  }
  let content =
    children || extractTitle(preparedMeta == null ? void 0 : preparedMeta.title)
  return content
    ? import_react.default.createElement(
        Title,
        { className: "sbdocs-title sb-unstyled" },
        content
      )
    : null
}
var DEPRECATION_MIGRATION_LINK =
  "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle"
var Subtitle2 = (props) => {
  let { of, children } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let preparedMeta
  try {
    preparedMeta = useOf(of || "meta", ["meta"]).preparedMeta
  } catch (error) {
    if (
      children &&
      !error.message.includes("did you forget to use <Meta of={} />?")
    )
      throw error
  }
  let { componentSubtitle, docs } =
    (preparedMeta == null ? void 0 : preparedMeta.parameters) || {}
  componentSubtitle &&
    (0, import_client_logger.deprecate)(
      `Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`
    )
  let content =
    children || (docs == null ? void 0 : docs.subtitle) || componentSubtitle
  return content
    ? import_react.default.createElement(
        Subtitle,
        { className: "sbdocs-subtitle sb-unstyled" },
        content
      )
    : null
}
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string")
    return import_react.default.createElement(du, null, children)
  let tagID = globalThis.encodeURIComponent(children.toLowerCase())
  return import_react.default.createElement(
    HeaderMdx,
    { as: "h3", id: tagID },
    children
  )
}
var DocsStory = ({
  of,
  expanded = true,
  withToolbar: withToolbarProp = false,
  __forceInitialArgs = false,
  __primary = false
}) => {
  var _a, _b
  let { story } = useOf(of || "story", ["story"]),
    withToolbar =
      ((_b = (_a = story.parameters.docs) == null ? void 0 : _a.canvas) == null
        ? void 0
        : _b.withToolbar) ?? withToolbarProp
  return import_react.default.createElement(
    Anchor,
    { storyId: story.id },
    expanded &&
      import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement(Subheading, null, story.name),
        import_react.default.createElement(DescriptionContainer, { of })
      ),
    import_react.default.createElement(Canvas, {
      of,
      withToolbar,
      story: { __forceInitialArgs, __primary },
      source: { __forceInitialArgs }
    })
  )
}
var Primary = (props) => {
  let { of } = props
  if ("of" in props && of === void 0)
    throw new Error(
      "Unexpected `of={undefined}`, did you mistype a CSF file reference?"
    )
  let { csfFile } = useOf(of || "meta", ["meta"]),
    primaryStory = (0, import_react.useContext)(
      DocsContext
    ).componentStoriesFromCSFFile(csfFile)[0]
  return primaryStory
    ? import_react.default.createElement(DocsStory, {
        of: primaryStory.moduleExport,
        expanded: false,
        __primary: true,
        withToolbar: true
      })
    : null
}
var Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string")
    return import_react.default.createElement(pu, null, children)
  let tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-")
  return import_react.default.createElement(
    HeaderMdx,
    { as: "h2", id: tagID, ...props },
    children
  )
}
var StyledHeading = Tr(Heading2)(({ theme }) => ({
  fontSize: `${theme.typography.size.s2 - 1}px`,
  fontWeight: theme.typography.weight.bold,
  lineHeight: "16px",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: theme.textMutedColor,
  border: 0,
  marginBottom: "12px",
  "&:first-of-type": { marginTop: "56px" }
}))
var Stories = ({ title = "Stories", includePrimary = true }) => {
  var _a
  let { componentStories, projectAnnotations, getStoryContext } = (0,
    import_react.useContext)(DocsContext),
    stories = componentStories(),
    { stories: { filter } = { filter: void 0 } } =
      ((_a = projectAnnotations.parameters) == null ? void 0 : _a.docs) || {}
  return (
    filter &&
      (stories = stories.filter((story) =>
        filter(story, getStoryContext(story))
      )),
    stories.some((story) => {
      var _a2
      return (_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs")
    }) &&
      (stories = stories.filter((story) => {
        var _a2
        return (
          ((_a2 = story.tags) == null ? void 0 : _a2.includes("autodocs")) &&
          !story.usesMount
        )
      })),
    includePrimary || (stories = stories.slice(1)),
    !stories || stories.length === 0
      ? null
      : import_react.default.createElement(
          import_react.default.Fragment,
          null,
          import_react.default.createElement(StyledHeading, null, title),
          stories.map(
            (story) =>
              story &&
              import_react.default.createElement(DocsStory, {
                key: story.id,
                of: story.moduleExport,
                expanded: true,
                __forceInitialArgs: true
              })
          )
        )
  )
}
var DocsPage = () => {
  let resolvedOf = useOf("meta", ["meta"]),
    { stories } = resolvedOf.csfFile,
    isSingleStory = Object.keys(stories).length === 1
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(Title2, null),
    import_react.default.createElement(Subtitle2, null),
    import_react.default.createElement(DescriptionContainer, { of: "meta" }),
    isSingleStory
      ? import_react.default.createElement(DescriptionContainer, {
          of: "story"
        })
      : null,
    import_react.default.createElement(Primary, null),
    import_react.default.createElement(Controls3, null),
    isSingleStory ? null : import_react.default.createElement(Stories, null)
  )
}
function Docs({ context, docsParameter }) {
  let Container = docsParameter.container || DocsContainer,
    Page = docsParameter.page || DocsPage
  return import_react.default.createElement(
    Container,
    { context, theme: docsParameter.theme },
    import_react.default.createElement(Page, null)
  )
}

// node_modules/.pnpm/@storybook+addon-docs@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }
var ErrorBoundary = class extends import_react2.Component {
  constructor() {
    super(...arguments)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(err) {
    let { showException } = this.props
    showException(err)
  }
  render() {
    let { hasError } = this.state,
      { children } = this.props
    return hasError
      ? null
      : import_react2.default.createElement(
          import_react2.default.Fragment,
          null,
          children
        )
  }
}
var DocsRenderer = class {
  constructor() {
    ;(this.render = async (context, docsParameter, element) => {
      let components = {
          ...defaultComponents,
          ...(docsParameter == null ? void 0 : docsParameter.components)
        },
        TDocs = Docs
      return new Promise((resolve, reject) => {
        import("./react-6AOYWTN2.js")
          .then(({ MDXProvider }) =>
            renderElement(
              import_react2.default.createElement(
                ErrorBoundary,
                { showException: reject, key: Math.random() },
                import_react2.default.createElement(
                  MDXProvider,
                  { components },
                  import_react2.default.createElement(TDocs, {
                    context,
                    docsParameter
                  })
                )
              ),
              element
            )
          )
          .then(() => resolve())
      })
    }),
      (this.unmount = (element) => {
        unmountElement(element)
      })
  }
}
export { DocsRenderer, defaultComponents }
/*! Bundled license information:

telejson/dist/index.mjs:
  (*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=DocsRenderer-PKQXORMH-NDDX43FS.js.map
