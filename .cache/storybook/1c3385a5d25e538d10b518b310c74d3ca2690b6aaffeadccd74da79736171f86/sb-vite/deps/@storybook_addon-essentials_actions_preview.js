import { require_global } from "./chunk-CYHXIIKI.js"
import { require_preview_api } from "./chunk-JQ2GWK6M.js"
import { __toESM } from "./chunk-LK32TJAX.js"
import { require_preview_errors } from "./chunk-Y6PDBUCS.js"

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues
var rnds8 = new Uint8Array(16)
function rng() {
  if (!getRandomValues) {
    getRandomValues =
      typeof crypto !== "undefined" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)
    if (!getRandomValues) {
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      )
    }
  }
  return getRandomValues(rnds8)
}

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/regex.js
var regex_default =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid)
}
var validate_default = validate

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = []
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1))
}
function unsafeStringify(arr, offset = 0) {
  return (
    byteToHex[arr[offset + 0]] +
    byteToHex[arr[offset + 1]] +
    byteToHex[arr[offset + 2]] +
    byteToHex[arr[offset + 3]] +
    "-" +
    byteToHex[arr[offset + 4]] +
    byteToHex[arr[offset + 5]] +
    "-" +
    byteToHex[arr[offset + 6]] +
    byteToHex[arr[offset + 7]] +
    "-" +
    byteToHex[arr[offset + 8]] +
    byteToHex[arr[offset + 9]] +
    "-" +
    byteToHex[arr[offset + 10]] +
    byteToHex[arr[offset + 11]] +
    byteToHex[arr[offset + 12]] +
    byteToHex[arr[offset + 13]] +
    byteToHex[arr[offset + 14]] +
    byteToHex[arr[offset + 15]]
  )
}

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/parse.js
function parse(uuid) {
  if (!validate_default(uuid)) {
    throw TypeError("Invalid UUID")
  }
  let v
  const arr = new Uint8Array(16)
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24
  arr[1] = (v >>> 16) & 255
  arr[2] = (v >>> 8) & 255
  arr[3] = v & 255
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8
  arr[5] = v & 255
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8
  arr[7] = v & 255
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8
  arr[9] = v & 255
  arr[10] = ((v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776) & 255
  arr[11] = (v / 4294967296) & 255
  arr[12] = (v >>> 24) & 255
  arr[13] = (v >>> 16) & 255
  arr[14] = (v >>> 8) & 255
  arr[15] = v & 255
  return arr
}
var parse_default = parse

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v35.js
function stringToBytes(str) {
  str = unescape(encodeURIComponent(str))
  const bytes = []
  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i))
  }
  return bytes
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
var URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace
    if (typeof value === "string") {
      value = stringToBytes(value)
    }
    if (typeof namespace === "string") {
      namespace = parse_default(namespace)
    }
    if (
      ((_namespace = namespace) === null || _namespace === void 0
        ? void 0
        : _namespace.length) !== 16
    ) {
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      )
    }
    let bytes = new Uint8Array(16 + value.length)
    bytes.set(namespace)
    bytes.set(value, namespace.length)
    bytes = hashfunc(bytes)
    bytes[6] = (bytes[6] & 15) | version
    bytes[8] = (bytes[8] & 63) | 128
    if (buf) {
      offset = offset || 0
      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i]
      }
      return buf
    }
    return unsafeStringify(bytes)
  }
  try {
    generateUUID.name = name
  } catch (err) {}
  generateUUID.DNS = DNS
  generateUUID.URL = URL
  return generateUUID
}

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/md5.js
function md5(bytes) {
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes))
    bytes = new Uint8Array(msg.length)
    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i)
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8))
}
function md5ToHexEncodedArray(input) {
  const output = []
  const length32 = input.length * 32
  const hexTab = "0123456789abcdef"
  for (let i = 0; i < length32; i += 8) {
    const x = (input[i >> 5] >>> i % 32) & 255
    const hex = parseInt(
      hexTab.charAt((x >>> 4) & 15) + hexTab.charAt(x & 15),
      16
    )
    output.push(hex)
  }
  return output
}
function getOutputLength(inputLength8) {
  return (((inputLength8 + 64) >>> 9) << 4) + 14 + 1
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32
  x[getOutputLength(len) - 1] = len
  let a = 1732584193
  let b = -271733879
  let c = -1732584194
  let d = 271733878
  for (let i = 0; i < x.length; i += 16) {
    const olda = a
    const oldb = b
    const oldc = c
    const oldd = d
    a = md5ff(a, b, c, d, x[i], 7, -680876936)
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
    b = md5gg(b, c, d, a, x[i], 20, -373897302)
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
    d = md5hh(d, a, b, c, x[i], 11, -358537222)
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)
    a = md5ii(a, b, c, d, x[i], 6, -198630844)
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)
    a = safeAdd(a, olda)
    b = safeAdd(b, oldb)
    c = safeAdd(c, oldc)
    d = safeAdd(d, oldd)
  }
  return [a, b, c, d]
}
function bytesToWords(input) {
  if (input.length === 0) {
    return []
  }
  const length8 = input.length * 8
  const output = new Uint32Array(getOutputLength(length8))
  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32
  }
  return output
}
function safeAdd(x, y) {
  const lsw = (x & 65535) + (y & 65535)
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16)
  return (msw << 16) | (lsw & 65535)
}
function bitRotateLeft(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt))
}
function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
}
function md5ff(a, b, c, d, x, s, t) {
  return md5cmn((b & c) | (~b & d), a, b, x, s, t)
}
function md5gg(a, b, c, d, x, s, t) {
  return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
}
function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t)
}
function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t)
}
var md5_default = md5

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v3.js
var v3 = v35("v3", 48, md5_default)

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/native.js
var randomUUID =
  typeof crypto !== "undefined" &&
  crypto.randomUUID &&
  crypto.randomUUID.bind(crypto)
var native_default = {
  randomUUID
}

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID()
  }
  options = options || {}
  const rnds = options.random || (options.rng || rng)()
  rnds[6] = (rnds[6] & 15) | 64
  rnds[8] = (rnds[8] & 63) | 128
  if (buf) {
    offset = offset || 0
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i]
    }
    return buf
  }
  return unsafeStringify(rnds)
}
var v4_default = v4

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/sha1.js
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return (x & y) ^ (~x & z)
    case 1:
      return x ^ y ^ z
    case 2:
      return (x & y) ^ (x & z) ^ (y & z)
    case 3:
      return x ^ y ^ z
  }
}
function ROTL(x, n) {
  return (x << n) | (x >>> (32 - n))
}
function sha1(bytes) {
  const K = [1518500249, 1859775393, 2400959708, 3395469782]
  const H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]
  if (typeof bytes === "string") {
    const msg = unescape(encodeURIComponent(bytes))
    bytes = []
    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i))
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes)
  }
  bytes.push(128)
  const l = bytes.length / 4 + 2
  const N = Math.ceil(l / 16)
  const M = new Array(N)
  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16)
    for (let j = 0; j < 16; ++j) {
      arr[j] =
        (bytes[i * 64 + j * 4] << 24) |
        (bytes[i * 64 + j * 4 + 1] << 16) |
        (bytes[i * 64 + j * 4 + 2] << 8) |
        bytes[i * 64 + j * 4 + 3]
    }
    M[i] = arr
  }
  M[N - 1][14] = ((bytes.length - 1) * 8) / Math.pow(2, 32)
  M[N - 1][14] = Math.floor(M[N - 1][14])
  M[N - 1][15] = ((bytes.length - 1) * 8) & 4294967295
  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80)
    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t]
    }
    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1)
    }
    let a = H[0]
    let b = H[1]
    let c = H[2]
    let d = H[3]
    let e = H[4]
    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20)
      const T = (ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t]) >>> 0
      e = d
      d = c
      c = ROTL(b, 30) >>> 0
      b = a
      a = T
    }
    H[0] = (H[0] + a) >>> 0
    H[1] = (H[1] + b) >>> 0
    H[2] = (H[2] + c) >>> 0
    H[3] = (H[3] + d) >>> 0
    H[4] = (H[4] + e) >>> 0
  }
  return [
    (H[0] >> 24) & 255,
    (H[0] >> 16) & 255,
    (H[0] >> 8) & 255,
    H[0] & 255,
    (H[1] >> 24) & 255,
    (H[1] >> 16) & 255,
    (H[1] >> 8) & 255,
    H[1] & 255,
    (H[2] >> 24) & 255,
    (H[2] >> 16) & 255,
    (H[2] >> 8) & 255,
    H[2] & 255,
    (H[3] >> 24) & 255,
    (H[3] >> 16) & 255,
    (H[3] >> 8) & 255,
    H[3] & 255,
    (H[4] >> 24) & 255,
    (H[4] >> 16) & 255,
    (H[4] >> 8) & 255,
    H[4] & 255
  ]
}
var sha1_default = sha1

// node_modules/.pnpm/uuid@9.0.1/node_modules/uuid/dist/esm-browser/v5.js
var v5 = v35("v5", 80, sha1_default)

// node_modules/.pnpm/@storybook+addon-actions@8.2.9_storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2__/node_modules/@storybook/addon-actions/dist/preview.mjs
var import_preview_api = __toESM(require_preview_api(), 1)
var import_global = __toESM(require_global(), 1)
var import_preview_errors = __toESM(require_preview_errors(), 1)
var ADDON_ID = "storybook/actions"
var EVENT_ID = `${ADDON_ID}/action-event`
var config = { depth: 10, clearOnStoryChange: true, limit: 50 }
var findProto = (obj, callback) => {
  let proto = Object.getPrototypeOf(obj)
  return !proto || callback(proto) ? proto : findProto(proto, callback)
}
var isReactSyntheticEvent = (e) =>
  !!(
    typeof e == "object" &&
    e &&
    findProto(e, (proto) =>
      /^Synthetic(?:Base)?Event$/.test(proto.constructor.name)
    ) &&
    typeof e.persist == "function"
  )
var serializeArg = (a) => {
  if (isReactSyntheticEvent(a)) {
    let e = Object.create(
      a.constructor.prototype,
      Object.getOwnPropertyDescriptors(a)
    )
    e.persist()
    let viewDescriptor = Object.getOwnPropertyDescriptor(e, "view"),
      view = viewDescriptor == null ? void 0 : viewDescriptor.value
    return (
      typeof view == "object" &&
        (view == null ? void 0 : view.constructor.name) === "Window" &&
        Object.defineProperty(e, "view", {
          ...viewDescriptor,
          value: Object.create(view.constructor.prototype)
        }),
      e
    )
  }
  return a
}
var generateId = () =>
  typeof crypto == "object" && typeof crypto.getRandomValues == "function"
    ? v4_default()
    : Date.now().toString(36) + Math.random().toString(36).substring(2)
function action(name, options = {}) {
  let actionOptions = { ...config, ...options },
    handler = function (...args) {
      var _a, _b
      if (options.implicit) {
        let storyRenderer =
          (_a =
            "__STORYBOOK_PREVIEW__" in import_global.global
              ? import_global.global.__STORYBOOK_PREVIEW__
              : void 0) == null
            ? void 0
            : _a.storyRenders.find(
                (render) =>
                  render.phase === "playing" || render.phase === "rendering"
              )
        if (storyRenderer) {
          let deprecated = !((_b = window == null ? void 0 : window.FEATURES) ==
            null
              ? void 0
              : _b.disallowImplicitActionsInRenderV8),
            error = new import_preview_errors.ImplicitActionsDuringRendering({
              phase: storyRenderer.phase,
              name,
              deprecated
            })
          if (deprecated) console.warn(error)
          else throw error
        }
      }
      let channel = import_preview_api.addons.getChannel(),
        id = generateId(),
        minDepth = 5,
        serializedArgs = args.map(serializeArg),
        normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0],
        actionDisplayToEmit = {
          id,
          count: 0,
          data: { name, args: normalizedArgs },
          options: {
            ...actionOptions,
            maxDepth: minDepth + (actionOptions.depth || 3),
            allowFunction: actionOptions.allowFunction || false
          }
        }
      channel.emit(EVENT_ID, actionDisplayToEmit)
    }
  return (
    (handler.isAction = true), (handler.implicit = options.implicit), handler
  )
}
var isInInitialArgs = (name, initialArgs) =>
  typeof initialArgs[name] > "u" && !(name in initialArgs)
var inferActionsFromArgTypesRegex = (context) => {
  let {
    initialArgs,
    argTypes,
    id,
    parameters: { actions }
  } = context
  if (!actions || actions.disable || !actions.argTypesRegex || !argTypes)
    return {}
  let argTypesRegex = new RegExp(actions.argTypesRegex)
  return Object.entries(argTypes)
    .filter(([name]) => !!argTypesRegex.test(name))
    .reduce(
      (acc, [name, argType]) => (
        isInInitialArgs(name, initialArgs) &&
          (acc[name] = action(name, { implicit: true, id })),
        acc
      ),
      {}
    )
}
var addActionsFromArgTypes = (context) => {
  let {
    initialArgs,
    argTypes,
    parameters: { actions }
  } = context
  return (actions == null ? void 0 : actions.disable) || !argTypes
    ? {}
    : Object.entries(argTypes)
        .filter(([name, argType]) => !!argType.action)
        .reduce(
          (acc, [name, argType]) => (
            isInInitialArgs(name, initialArgs) &&
              (acc[name] = action(
                typeof argType.action == "string" ? argType.action : name
              )),
            acc
          ),
          {}
        )
}
var argsEnhancers = [addActionsFromArgTypes, inferActionsFromArgTypesRegex]
var subscribed = false
var logActionsWhenMockCalled = (context) => {
  let {
    parameters: { actions }
  } = context
  if (
    !(actions == null ? void 0 : actions.disable) &&
    !subscribed &&
    "__STORYBOOK_TEST_ON_MOCK_CALL__" in import_global.global &&
    typeof import_global.global.__STORYBOOK_TEST_ON_MOCK_CALL__ == "function"
  ) {
    let onMockCall = import_global.global.__STORYBOOK_TEST_ON_MOCK_CALL__
    onMockCall((mock, args) => {
      let name = mock.getMockName()
      name !== "spy" &&
        (!/^next\/.*::/.test(name) ||
          [
            "next/router::useRouter()",
            "next/navigation::useRouter()",
            "next/navigation::redirect",
            "next/cache::",
            "next/headers::cookies().set",
            "next/headers::cookies().delete",
            "next/headers::headers().set",
            "next/headers::headers().delete"
          ].some((prefix) => name.startsWith(prefix))) &&
        action(name)(args)
    }),
      (subscribed = true)
  }
}
var loaders = [logActionsWhenMockCalled]
export { argsEnhancers, loaders }
//# sourceMappingURL=@storybook_addon-essentials_actions_preview.js.map
