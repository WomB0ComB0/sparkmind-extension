try {
  (() => {
    var dc = Object.create;
    var za = Object.defineProperty;
    var uc = Object.getOwnPropertyDescriptor;
    var mc = Object.getOwnPropertyNames;
    var pc = Object.getPrototypeOf,
      hc = Object.prototype.hasOwnProperty;
    var Jt = ((e) =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(e, { get: (t, n) => (typeof require < 'u' ? require : t)[n] })
          : e)(function (e) {
      if (typeof require < 'u') return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Ua = (e, t) => () => (e && (t = e((e = 0))), t);
    var fc = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      gc = (e, t) => {
        for (var n in t) za(e, n, { get: t[n], enumerable: !0 });
      },
      el = (e, t, n, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let i of mc(t))
            !hc.call(e, i) &&
              i !== n &&
              za(e, i, { get: () => t[i], enumerable: !(r = uc(t, i)) || r.enumerable });
        return e;
      };
    var vc = (e, t, n) => (
        (n = e != null ? dc(pc(e)) : {}),
        el(t || !e || !e.__esModule ? za(n, 'default', { value: e, enumerable: !0 }) : n, e)
      ),
      tl = (e) => el(za({}, '__esModule', { value: !0 }), e);
    var Ee = Ua(() => {});
    var Ke,
      ke = Ua(() => {
        Ke = {
          NODE_ENV: 'development',
          NODE_PATH: [
            'C:\\Users\\airwo\\Documents\\GitHub\\sparkmind-extension\\node_modules\\.pnpm\\storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2_\\node_modules\\storybook\\bin\\node_modules',
            'C:\\Users\\airwo\\Documents\\GitHub\\sparkmind-extension\\node_modules\\.pnpm\\storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2_\\node_modules\\storybook\\node_modules',
            'C:\\Users\\airwo\\Documents\\GitHub\\sparkmind-extension\\node_modules\\.pnpm\\storybook@8.2.9_@babel+preset-env@7.25.4_@babel+core@7.25.2_\\node_modules',
            'C:\\Users\\airwo\\Documents\\GitHub\\sparkmind-extension\\node_modules\\.pnpm\\node_modules',
            'C:\\Users\\airwo\\AppData\\Local\\pnpm\\global\\5\\.pnpm\\pnpm@9.5.0\\node_modules\\pnpm\\bin\\node_modules',
            'C:\\Users\\airwo\\AppData\\Local\\pnpm\\global\\5\\.pnpm\\pnpm@9.5.0\\node_modules\\pnpm\\node_modules',
            'C:\\Users\\airwo\\AppData\\Local\\pnpm\\global\\5\\.pnpm\\pnpm@9.5.0\\node_modules',
            'C:\\Users\\airwo\\AppData\\Local\\pnpm\\global\\5\\.pnpm\\node_modules',
          ],
          STORYBOOK: 'true',
          PUBLIC_URL: '.',
          PLASMO_PUBLIC_GOOGLE_AI_API_KEY: 'AIzaSyCP_h8JXeV8Mw0716hKkFpiu7DLanJi8u4',
          CHROMATIC_BASE_URL: 'https://www.chromatic.com',
        };
      });
    var we = Ua(() => {});
    var $a = {};
    gc($a, {
      Children: () => bc,
      Component: () => Vt,
      Fragment: () => Ec,
      Profiler: () => kc,
      PureComponent: () => wc,
      StrictMode: () => Cc,
      Suspense: () => Sc,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => xc,
      cloneElement: () => Mc,
      createContext: () => Je,
      createElement: () => x,
      createFactory: () => Nc,
      createRef: () => Fc,
      default: () => a,
      forwardRef: () => Q,
      isValidElement: () => si,
      lazy: () => Ac,
      memo: () => Oc,
      startTransition: () => Lc,
      unstable_act: () => Tc,
      useCallback: () => W,
      useContext: () => Xt,
      useDebugValue: () => _c,
      useDeferredValue: () => Zc,
      useEffect: () => oe,
      useId: () => Ic,
      useImperativeHandle: () => Rc,
      useInsertionEffect: () => Bc,
      useLayoutEffect: () => Pc,
      useMemo: () => jt,
      useReducer: () => ci,
      useRef: () => Pe,
      useState: () => Re,
      useSyncExternalStore: () => Vc,
      useTransition: () => jc,
      version: () => Hc,
    });
    var a,
      bc,
      Vt,
      Ec,
      kc,
      wc,
      Cc,
      Sc,
      xc,
      Mc,
      Je,
      x,
      Nc,
      Fc,
      Q,
      si,
      Ac,
      Oc,
      Lc,
      Tc,
      W,
      Xt,
      _c,
      Zc,
      oe,
      Ic,
      Rc,
      Bc,
      Pc,
      jt,
      ci,
      Pe,
      Re,
      Vc,
      jc,
      Hc,
      qn = Ua(() => {
        Ee();
        ke();
        we();
        (a = __REACT__),
          ({
            Children: bc,
            Component: Vt,
            Fragment: Ec,
            Profiler: kc,
            PureComponent: wc,
            StrictMode: Cc,
            Suspense: Sc,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: xc,
            cloneElement: Mc,
            createContext: Je,
            createElement: x,
            createFactory: Nc,
            createRef: Fc,
            forwardRef: Q,
            isValidElement: si,
            lazy: Ac,
            memo: Oc,
            startTransition: Lc,
            unstable_act: Tc,
            useCallback: W,
            useContext: Xt,
            useDebugValue: _c,
            useDeferredValue: Zc,
            useEffect: oe,
            useId: Ic,
            useImperativeHandle: Rc,
            useInsertionEffect: Bc,
            useLayoutEffect: Pc,
            useMemo: jt,
            useReducer: ci,
            useRef: Pe,
            useState: Re,
            useSyncExternalStore: Vc,
            useTransition: jc,
            version: Hc,
          } = __REACT__);
      });
    var vl = fc((Jn, vi) => {
      Ee();
      ke();
      we();
      (function (e, t) {
        typeof Jn == 'object' && typeof vi == 'object'
          ? (vi.exports = t((qn(), tl($a))))
          : typeof define == 'function' && define.amd
            ? define(['react'], t)
            : typeof Jn == 'object'
              ? (Jn.ReactConfetti = t((qn(), tl($a))))
              : (e.ReactConfetti = t(e.React));
      })(typeof self < 'u' ? self : Jn, function (e) {
        return (function (t) {
          var n = {};
          function r(i) {
            if (n[i]) return n[i].exports;
            var o = (n[i] = { i, l: !1, exports: {} });
            return t[i].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
            (r.m = t),
            (r.c = n),
            (r.d = function (i, o, l) {
              r.o(i, o) || Object.defineProperty(i, o, { enumerable: !0, get: l });
            }),
            (r.r = function (i) {
              typeof Symbol < 'u' &&
                Symbol.toStringTag &&
                Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(i, '__esModule', { value: !0 });
            }),
            (r.t = function (i, o) {
              if (
                (1 & o && (i = r(i)), 8 & o || (4 & o && typeof i == 'object' && i && i.__esModule))
              )
                return i;
              var l = Object.create(null);
              if (
                (r.r(l),
                Object.defineProperty(l, 'default', { enumerable: !0, value: i }),
                2 & o && typeof i != 'string')
              )
                for (var s in i)
                  r.d(
                    l,
                    s,
                    function (c) {
                      return i[c];
                    }.bind(null, s),
                  );
              return l;
            }),
            (r.n = function (i) {
              var o =
                i && i.__esModule
                  ? function () {
                      return i.default;
                    }
                  : function () {
                      return i;
                    };
              return r.d(o, 'a', o), o;
            }),
            (r.o = function (i, o) {
              return Object.prototype.hasOwnProperty.call(i, o);
            }),
            (r.p = ''),
            r((r.s = 2))
          );
        })([
          function (t, n) {
            t.exports = e;
          },
          function (t, n, r) {
            'use strict';
            var i = {
              linear: function (o, l, s, c) {
                return ((s - l) * o) / c + l;
              },
              easeInQuad: function (o, l, s, c) {
                return (s - l) * (o /= c) * o + l;
              },
              easeOutQuad: function (o, l, s, c) {
                return -(s - l) * (o /= c) * (o - 2) + l;
              },
              easeInOutQuad: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1 ? (d / 2) * o * o + l : (-d / 2) * (--o * (o - 2) - 1) + l;
              },
              easeInCubic: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o + l;
              },
              easeOutCubic: function (o, l, s, c) {
                return (s - l) * ((o = o / c - 1) * o * o + 1) + l;
              },
              easeInOutCubic: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o + l
                  : (d / 2) * ((o -= 2) * o * o + 2) + l;
              },
              easeInQuart: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o * o + l;
              },
              easeOutQuart: function (o, l, s, c) {
                return -(s - l) * ((o = o / c - 1) * o * o * o - 1) + l;
              },
              easeInOutQuart: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o * o + l
                  : (-d / 2) * ((o -= 2) * o * o * o - 2) + l;
              },
              easeInQuint: function (o, l, s, c) {
                return (s - l) * (o /= c) * o * o * o * o + l;
              },
              easeOutQuint: function (o, l, s, c) {
                return (s - l) * ((o = o / c - 1) * o * o * o * o + 1) + l;
              },
              easeInOutQuint: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (d / 2) * o * o * o * o * o + l
                  : (d / 2) * ((o -= 2) * o * o * o * o + 2) + l;
              },
              easeInSine: function (o, l, s, c) {
                var d = s - l;
                return -d * Math.cos((o / c) * (Math.PI / 2)) + d + l;
              },
              easeOutSine: function (o, l, s, c) {
                return (s - l) * Math.sin((o / c) * (Math.PI / 2)) + l;
              },
              easeInOutSine: function (o, l, s, c) {
                return (-(s - l) / 2) * (Math.cos((Math.PI * o) / c) - 1) + l;
              },
              easeInExpo: function (o, l, s, c) {
                return o == 0 ? l : (s - l) * Math.pow(2, 10 * (o / c - 1)) + l;
              },
              easeOutExpo: function (o, l, s, c) {
                var d = s - l;
                return o == c ? l + d : d * (1 - Math.pow(2, (-10 * o) / c)) + l;
              },
              easeInOutExpo: function (o, l, s, c) {
                var d = s - l;
                return o === 0
                  ? l
                  : o === c
                    ? l + d
                    : (o /= c / 2) < 1
                      ? (d / 2) * Math.pow(2, 10 * (o - 1)) + l
                      : (d / 2) * (2 - Math.pow(2, -10 * --o)) + l;
              },
              easeInCirc: function (o, l, s, c) {
                return -(s - l) * (Math.sqrt(1 - (o /= c) * o) - 1) + l;
              },
              easeOutCirc: function (o, l, s, c) {
                return (s - l) * Math.sqrt(1 - (o = o / c - 1) * o) + l;
              },
              easeInOutCirc: function (o, l, s, c) {
                var d = s - l;
                return (o /= c / 2) < 1
                  ? (-d / 2) * (Math.sqrt(1 - o * o) - 1) + l
                  : (d / 2) * (Math.sqrt(1 - (o -= 2) * o) + 1) + l;
              },
              easeInElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c) == 1
                      ? l + p
                      : ((u = 0) || (u = 0.3 * c),
                        (d = p) < Math.abs(p)
                          ? ((d = p), (m = u / 4))
                          : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                        -d *
                          Math.pow(2, 10 * (o -= 1)) *
                          Math.sin(((o * c - m) * (2 * Math.PI)) / u) +
                          l)
                );
              },
              easeOutElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c) == 1
                      ? l + p
                      : ((u = 0) || (u = 0.3 * c),
                        (d = p) < Math.abs(p)
                          ? ((d = p), (m = u / 4))
                          : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                        d * Math.pow(2, -10 * o) * Math.sin(((o * c - m) * (2 * Math.PI)) / u) +
                          p +
                          l)
                );
              },
              easeInOutElastic: function (o, l, s, c) {
                var d,
                  u,
                  m,
                  p = s - l;
                return (
                  (m = 1.70158),
                  o === 0
                    ? l
                    : (o /= c / 2) == 2
                      ? l + p
                      : ((u = 0) || (u = c * 0.44999999999999996),
                        (d = p) < Math.abs(p)
                          ? ((d = p), (m = u / 4))
                          : (m = (u / (2 * Math.PI)) * Math.asin(p / d)),
                        o < 1
                          ? d *
                              Math.pow(2, 10 * (o -= 1)) *
                              Math.sin(((o * c - m) * (2 * Math.PI)) / u) *
                              -0.5 +
                            l
                          : d *
                              Math.pow(2, -10 * (o -= 1)) *
                              Math.sin(((o * c - m) * (2 * Math.PI)) / u) *
                              0.5 +
                            p +
                            l)
                );
              },
              easeInBack: function (o, l, s, c, d) {
                return (
                  d === void 0 && (d = 1.70158), (s - l) * (o /= c) * o * ((d + 1) * o - d) + l
                );
              },
              easeOutBack: function (o, l, s, c, d) {
                return (
                  d === void 0 && (d = 1.70158),
                  (s - l) * ((o = o / c - 1) * o * ((d + 1) * o + d) + 1) + l
                );
              },
              easeInOutBack: function (o, l, s, c, d) {
                var u = s - l;
                return (
                  d === void 0 && (d = 1.70158),
                  (o /= c / 2) < 1
                    ? (u / 2) * (o * o * ((1 + (d *= 1.525)) * o - d)) + l
                    : (u / 2) * ((o -= 2) * o * ((1 + (d *= 1.525)) * o + d) + 2) + l
                );
              },
              easeInBounce: function (o, l, s, c) {
                var d = s - l;
                return d - i.easeOutBounce(c - o, 0, d, c) + l;
              },
              easeOutBounce: function (o, l, s, c) {
                var d = s - l;
                return (o /= c) < 0.36363636363636365
                  ? d * (7.5625 * o * o) + l
                  : o < 0.7272727272727273
                    ? d * (7.5625 * (o -= 0.5454545454545454) * o + 0.75) + l
                    : o < 0.9090909090909091
                      ? d * (7.5625 * (o -= 0.8181818181818182) * o + 0.9375) + l
                      : d * (7.5625 * (o -= 0.9545454545454546) * o + 0.984375) + l;
              },
              easeInOutBounce: function (o, l, s, c) {
                var d = s - l;
                return o < c / 2
                  ? 0.5 * i.easeInBounce(2 * o, 0, d, c) + l
                  : 0.5 * i.easeOutBounce(2 * o - c, 0, d, c) + 0.5 * d + l;
              },
            };
            t.exports = i;
          },
          function (t, n, r) {
            t.exports = r(3);
          },
          function (t, n, r) {
            'use strict';
            r.r(n),
              r.d(n, 'ReactConfetti', function () {
                return Da;
              });
            var i,
              o,
              l = r(0),
              s = r.n(l),
              c = r(1),
              d = r.n(c);
            function u(C, M) {
              return C + Math.random() * (M - C);
            }
            function m(C, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(C, N.key, N);
              }
            }
            function p(C, M, F) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = F),
                C
              );
            }
            (function (C) {
              (C[(C.Circle = 0)] = 'Circle'),
                (C[(C.Square = 1)] = 'Square'),
                (C[(C.Strip = 2)] = 'Strip');
            })(i || (i = {})),
              (function (C) {
                (C[(C.Positive = 1)] = 'Positive'), (C[(C.Negative = -1)] = 'Negative');
              })(o || (o = {}));
            var g = (function () {
              function C(ie, re, P, ve) {
                (function (ii, $n) {
                  if (!(ii instanceof $n)) throw new TypeError('Cannot call a class as a function');
                })(this, C),
                  p(this, 'context', void 0),
                  p(this, 'radius', void 0),
                  p(this, 'x', void 0),
                  p(this, 'y', void 0),
                  p(this, 'w', void 0),
                  p(this, 'h', void 0),
                  p(this, 'vx', void 0),
                  p(this, 'vy', void 0),
                  p(this, 'shape', void 0),
                  p(this, 'angle', void 0),
                  p(this, 'angularSpin', void 0),
                  p(this, 'color', void 0),
                  p(this, 'rotateY', void 0),
                  p(this, 'rotationDirection', void 0),
                  p(this, 'getOptions', void 0),
                  (this.getOptions = re);
                var be,
                  ge,
                  Ze = this.getOptions(),
                  Pt = Ze.colors,
                  ze = Ze.initialVelocityX,
                  gn = Ze.initialVelocityY;
                (this.context = ie),
                  (this.x = P),
                  (this.y = ve),
                  (this.w = u(5, 20)),
                  (this.h = u(5, 20)),
                  (this.radius = u(5, 10)),
                  (this.vx = typeof ze == 'number' ? u(-ze, ze) : u(ze.min, ze.max)),
                  (this.vy = typeof gn == 'number' ? u(-gn, 0) : u(gn.min, gn.max)),
                  (this.shape =
                    ((be = 0), (ge = 2), Math.floor(be + Math.random() * (ge - be + 1)))),
                  (this.angle = (u(0, 360) * Math.PI) / 180),
                  (this.angularSpin = u(-0.2, 0.2)),
                  (this.color = Pt[Math.floor(Math.random() * Pt.length)]),
                  (this.rotateY = u(0, 1)),
                  (this.rotationDirection = u(0, 1) ? o.Positive : o.Negative);
              }
              var M, F, N;
              return (
                (M = C),
                (F = [
                  {
                    key: 'update',
                    value: function () {
                      var ie = this.getOptions(),
                        re = ie.gravity,
                        P = ie.wind,
                        ve = ie.friction,
                        be = ie.opacity,
                        ge = ie.drawShape;
                      (this.x += this.vx),
                        (this.y += this.vy),
                        (this.vy += re),
                        (this.vx += P),
                        (this.vx *= ve),
                        (this.vy *= ve),
                        this.rotateY >= 1 && this.rotationDirection === o.Positive
                          ? (this.rotationDirection = o.Negative)
                          : this.rotateY <= -1 &&
                            this.rotationDirection === o.Negative &&
                            (this.rotationDirection = o.Positive);
                      var Ze = 0.1 * this.rotationDirection;
                      if (
                        ((this.rotateY += Ze),
                        (this.angle += this.angularSpin),
                        this.context.save(),
                        this.context.translate(this.x, this.y),
                        this.context.rotate(this.angle),
                        this.context.scale(1, this.rotateY),
                        this.context.rotate(this.angle),
                        this.context.beginPath(),
                        (this.context.fillStyle = this.color),
                        (this.context.strokeStyle = this.color),
                        (this.context.globalAlpha = be),
                        (this.context.lineCap = 'round'),
                        (this.context.lineWidth = 2),
                        ge && typeof ge == 'function')
                      )
                        ge.call(this, this.context);
                      else
                        switch (this.shape) {
                          case i.Circle:
                            this.context.beginPath(),
                              this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                              this.context.fill();
                            break;
                          case i.Square:
                            this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                            break;
                          case i.Strip:
                            this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                        }
                      this.context.closePath(), this.context.restore();
                    },
                  },
                ]) && m(M.prototype, F),
                N && m(M, N),
                C
              );
            })();
            function f(C, M, F) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = F),
                C
              );
            }
            var y = function C(M, F) {
              var N = this;
              (function (re, P) {
                if (!(re instanceof P)) throw new TypeError('Cannot call a class as a function');
              })(this, C),
                f(this, 'canvas', void 0),
                f(this, 'context', void 0),
                f(this, 'getOptions', void 0),
                f(this, 'x', 0),
                f(this, 'y', 0),
                f(this, 'w', 0),
                f(this, 'h', 0),
                f(this, 'lastNumberOfPieces', 0),
                f(this, 'tweenInitTime', Date.now()),
                f(this, 'particles', []),
                f(this, 'particlesGenerated', 0),
                f(this, 'removeParticleAt', function (re) {
                  N.particles.splice(re, 1);
                }),
                f(this, 'getParticle', function () {
                  var re = u(N.x, N.w + N.x),
                    P = u(N.y, N.h + N.y);
                  return new g(N.context, N.getOptions, re, P);
                }),
                f(this, 'animate', function () {
                  var re = N.canvas,
                    P = N.context,
                    ve = N.particlesGenerated,
                    be = N.lastNumberOfPieces,
                    ge = N.getOptions(),
                    Ze = ge.run,
                    Pt = ge.recycle,
                    ze = ge.numberOfPieces,
                    gn = ge.debug,
                    ii = ge.tweenFunction,
                    $n = ge.tweenDuration;
                  if (!Ze) return !1;
                  var oi = N.particles.length,
                    Wn = Pt ? oi : ve,
                    li = Date.now();
                  if (Wn < ze) {
                    be !== ze && ((N.tweenInitTime = li), (N.lastNumberOfPieces = ze));
                    for (
                      var Qo = N.tweenInitTime,
                        cc = ii(li - Qo > $n ? $n : Math.max(0, li - Qo), Wn, ze, $n),
                        Ko = Math.round(cc - Wn),
                        Jo = 0;
                      Jo < Ko;
                      Jo++
                    )
                      N.particles.push(N.getParticle());
                    N.particlesGenerated += Ko;
                  }
                  return (
                    gn &&
                      ((P.font = '12px sans-serif'),
                      (P.fillStyle = '#333'),
                      (P.textAlign = 'right'),
                      P.fillText('Particles: '.concat(oi), re.width - 10, re.height - 20)),
                    N.particles.forEach(function (Gn, Xo) {
                      Gn.update(),
                        (Gn.y > re.height || Gn.y < -100 || Gn.x > re.width + 100 || Gn.x < -100) &&
                          (Pt && Wn <= ze
                            ? (N.particles[Xo] = N.getParticle())
                            : N.removeParticleAt(Xo));
                    }),
                    oi > 0 || Wn < ze
                  );
                }),
                (this.canvas = M);
              var ie = this.canvas.getContext('2d');
              if (!ie) throw new Error('Could not get canvas context');
              (this.context = ie), (this.getOptions = F);
            };
            function k(C, M) {
              var F = Object.keys(C);
              if (Object.getOwnPropertySymbols) {
                var N = Object.getOwnPropertySymbols(C);
                M &&
                  (N = N.filter(function (ie) {
                    return Object.getOwnPropertyDescriptor(C, ie).enumerable;
                  })),
                  F.push.apply(F, N);
              }
              return F;
            }
            function b(C) {
              for (var M = 1; M < arguments.length; M++) {
                var F = arguments[M] != null ? arguments[M] : {};
                M % 2
                  ? k(Object(F), !0).forEach(function (N) {
                      v(C, N, F[N]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(F))
                    : k(Object(F)).forEach(function (N) {
                        Object.defineProperty(C, N, Object.getOwnPropertyDescriptor(F, N));
                      });
              }
              return C;
            }
            function h(C, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(C, N.key, N);
              }
            }
            function v(C, M, F) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = F),
                C
              );
            }
            var E = {
                width: typeof window < 'u' ? window.innerWidth : 300,
                height: typeof window < 'u' ? window.innerHeight : 200,
                numberOfPieces: 200,
                friction: 0.99,
                wind: 0,
                gravity: 0.1,
                initialVelocityX: 4,
                initialVelocityY: 10,
                colors: [
                  '#f44336',
                  '#e91e63',
                  '#9c27b0',
                  '#673ab7',
                  '#3f51b5',
                  '#2196f3',
                  '#03a9f4',
                  '#00bcd4',
                  '#009688',
                  '#4CAF50',
                  '#8BC34A',
                  '#CDDC39',
                  '#FFEB3B',
                  '#FFC107',
                  '#FF9800',
                  '#FF5722',
                  '#795548',
                ],
                opacity: 1,
                debug: !1,
                tweenFunction: d.a.easeInOutQuad,
                tweenDuration: 5e3,
                recycle: !0,
                run: !0,
              },
              S = (function () {
                function C(ie, re) {
                  var P = this;
                  (function (be, ge) {
                    if (!(be instanceof ge))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, C),
                    v(this, 'canvas', void 0),
                    v(this, 'context', void 0),
                    v(this, '_options', void 0),
                    v(this, 'generator', void 0),
                    v(this, 'rafId', void 0),
                    v(this, 'setOptionsWithDefaults', function (be) {
                      var ge = { confettiSource: { x: 0, y: 0, w: P.canvas.width, h: 0 } };
                      (P._options = b(b(b({}, ge), E), be)), Object.assign(P, be.confettiSource);
                    }),
                    v(this, 'update', function () {
                      var be = P.options,
                        ge = be.run,
                        Ze = be.onConfettiComplete,
                        Pt = P.canvas,
                        ze = P.context;
                      ge && ((ze.fillStyle = 'white'), ze.clearRect(0, 0, Pt.width, Pt.height)),
                        P.generator.animate()
                          ? (P.rafId = requestAnimationFrame(P.update))
                          : (Ze &&
                              typeof Ze == 'function' &&
                              P.generator.particlesGenerated > 0 &&
                              Ze.call(P, P),
                            (P._options.run = !1));
                    }),
                    v(this, 'reset', function () {
                      P.generator &&
                        P.generator.particlesGenerated > 0 &&
                        ((P.generator.particlesGenerated = 0),
                        (P.generator.particles = []),
                        (P.generator.lastNumberOfPieces = 0));
                    }),
                    v(this, 'stop', function () {
                      (P.options = { run: !1 }),
                        P.rafId && (cancelAnimationFrame(P.rafId), (P.rafId = void 0));
                    }),
                    (this.canvas = ie);
                  var ve = this.canvas.getContext('2d');
                  if (!ve) throw new Error('Could not get canvas context');
                  (this.context = ve),
                    (this.generator = new y(this.canvas, function () {
                      return P.options;
                    })),
                    (this.options = re),
                    this.update();
                }
                var M, F, N;
                return (
                  (M = C),
                  (F = [
                    {
                      key: 'options',
                      get: function () {
                        return this._options;
                      },
                      set: function (ie) {
                        var re = this._options && this._options.run,
                          P = this._options && this._options.recycle;
                        this.setOptionsWithDefaults(ie),
                          this.generator &&
                            (Object.assign(this.generator, this.options.confettiSource),
                            typeof ie.recycle == 'boolean' &&
                              ie.recycle &&
                              P === !1 &&
                              (this.generator.lastNumberOfPieces =
                                this.generator.particles.length)),
                          typeof ie.run == 'boolean' && ie.run && re === !1 && this.update();
                      },
                    },
                  ]) && h(M.prototype, F),
                  N && h(M, N),
                  C
                );
              })();
            function B(C) {
              return (
                (function (M) {
                  if (Array.isArray(M)) return xe(M);
                })(C) ||
                (function (M) {
                  if (typeof Symbol < 'u' && Symbol.iterator in Object(M)) return Array.from(M);
                })(C) ||
                Oe(C) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function j(C) {
              return (j =
                typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                  ? function (M) {
                      return typeof M;
                    }
                  : function (M) {
                      return M &&
                        typeof Symbol == 'function' &&
                        M.constructor === Symbol &&
                        M !== Symbol.prototype
                        ? 'symbol'
                        : typeof M;
                    })(C);
            }
            function Y() {
              return (Y =
                Object.assign ||
                function (C) {
                  for (var M = 1; M < arguments.length; M++) {
                    var F = arguments[M];
                    for (var N in F) Object.prototype.hasOwnProperty.call(F, N) && (C[N] = F[N]);
                  }
                  return C;
                }).apply(this, arguments);
            }
            function J(C, M) {
              var F = Object.keys(C);
              if (Object.getOwnPropertySymbols) {
                var N = Object.getOwnPropertySymbols(C);
                M &&
                  (N = N.filter(function (ie) {
                    return Object.getOwnPropertyDescriptor(C, ie).enumerable;
                  })),
                  F.push.apply(F, N);
              }
              return F;
            }
            function ce(C) {
              for (var M = 1; M < arguments.length; M++) {
                var F = arguments[M] != null ? arguments[M] : {};
                M % 2
                  ? J(Object(F), !0).forEach(function (N) {
                      Kt(C, N, F[N]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(F))
                    : J(Object(F)).forEach(function (N) {
                        Object.defineProperty(C, N, Object.getOwnPropertyDescriptor(F, N));
                      });
              }
              return C;
            }
            function Se(C, M) {
              return (
                (function (F) {
                  if (Array.isArray(F)) return F;
                })(C) ||
                (function (F, N) {
                  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(F)))) {
                    var ie = [],
                      re = !0,
                      P = !1,
                      ve = void 0;
                    try {
                      for (
                        var be, ge = F[Symbol.iterator]();
                        !(re = (be = ge.next()).done) && (ie.push(be.value), !N || ie.length !== N);
                        re = !0
                      );
                    } catch (Ze) {
                      (P = !0), (ve = Ze);
                    } finally {
                      try {
                        re || ge.return == null || ge.return();
                      } finally {
                        if (P) throw ve;
                      }
                    }
                    return ie;
                  }
                })(C, M) ||
                Oe(C, M) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function Oe(C, M) {
              if (C) {
                if (typeof C == 'string') return xe(C, M);
                var F = Object.prototype.toString.call(C).slice(8, -1);
                return (
                  F === 'Object' && C.constructor && (F = C.constructor.name),
                  F === 'Map' || F === 'Set'
                    ? Array.from(C)
                    : F === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)
                      ? xe(C, M)
                      : void 0
                );
              }
            }
            function xe(C, M) {
              (M == null || M > C.length) && (M = C.length);
              for (var F = 0, N = new Array(M); F < M; F++) N[F] = C[F];
              return N;
            }
            function qe(C, M) {
              if (!(C instanceof M)) throw new TypeError('Cannot call a class as a function');
            }
            function pe(C, M) {
              for (var F = 0; F < M.length; F++) {
                var N = M[F];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  'value' in N && (N.writable = !0),
                  Object.defineProperty(C, N.key, N);
              }
            }
            function Fe(C, M) {
              return (Fe =
                Object.setPrototypeOf ||
                function (F, N) {
                  return (F.__proto__ = N), F;
                })(C, M);
            }
            function Bt(C) {
              var M = (function () {
                if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
                if (typeof Proxy == 'function') return !0;
                try {
                  return (
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                  );
                } catch {
                  return !1;
                }
              })();
              return function () {
                var F,
                  N = Dn(C);
                if (M) {
                  var ie = Dn(this).constructor;
                  F = Reflect.construct(N, arguments, ie);
                } else F = N.apply(this, arguments);
                return _e(this, F);
              };
            }
            function _e(C, M) {
              return !M || (j(M) !== 'object' && typeof M != 'function') ? bt(C) : M;
            }
            function bt(C) {
              if (C === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return C;
            }
            function Dn(C) {
              return (Dn = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (M) {
                    return M.__proto__ || Object.getPrototypeOf(M);
                  })(C);
            }
            function Kt(C, M, F) {
              return (
                M in C
                  ? Object.defineProperty(C, M, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (C[M] = F),
                C
              );
            }
            var ri = s.a.createRef(),
              zn = (function (C) {
                (function (P, ve) {
                  if (typeof ve != 'function' && ve !== null)
                    throw new TypeError('Super expression must either be null or a function');
                  (P.prototype = Object.create(ve && ve.prototype, {
                    constructor: { value: P, writable: !0, configurable: !0 },
                  })),
                    ve && Fe(P, ve);
                })(re, C);
                var M,
                  F,
                  N,
                  ie = Bt(re);
                function re(P) {
                  var ve;
                  qe(this, re);
                  for (
                    var be = arguments.length, ge = new Array(be > 1 ? be - 1 : 0), Ze = 1;
                    Ze < be;
                    Ze++
                  )
                    ge[Ze - 1] = arguments[Ze];
                  return (
                    Kt(
                      bt((ve = ie.call.apply(ie, [this, P].concat(ge)))),
                      'canvas',
                      s.a.createRef(),
                    ),
                    Kt(bt(ve), 'confetti', void 0),
                    (ve.canvas = P.canvasRef || ri),
                    ve
                  );
                }
                return (
                  (M = re),
                  (F = [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        if (this.canvas.current) {
                          var P = Un(this.props)[0];
                          this.confetti = new S(this.canvas.current, P);
                        }
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function () {
                        var P = Un(this.props)[0];
                        this.confetti && (this.confetti.options = P);
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        this.confetti && this.confetti.stop(), (this.confetti = void 0);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var P = Se(Un(this.props), 2),
                          ve = P[0],
                          be = P[1],
                          ge = ce(
                            {
                              zIndex: 2,
                              position: 'absolute',
                              pointerEvents: 'none',
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                            },
                            be.style,
                          );
                        return s.a.createElement(
                          'canvas',
                          Y({ width: ve.width, height: ve.height, ref: this.canvas }, be, {
                            style: ge,
                          }),
                        );
                      },
                    },
                  ]) && pe(M.prototype, F),
                  N && pe(M, N),
                  re
                );
              })(l.Component);
            function Un(C) {
              var M = {},
                F = {},
                N = [].concat(B(Object.keys(E)), [
                  'confettiSource',
                  'drawShape',
                  'onConfettiComplete',
                ]),
                ie = ['canvasRef'];
              for (var re in C) {
                var P = C[re];
                N.includes(re) ? (M[re] = P) : ie.includes(re) ? (ie[re] = P) : (F[re] = P);
              }
              return [M, F, {}];
            }
            Kt(zn, 'defaultProps', ce({}, E)), Kt(zn, 'displayName', 'ReactConfetti');
            var Da = s.a.forwardRef(function (C, M) {
              return s.a.createElement(zn, Y({ canvasRef: M }, C));
            });
            n.default = Da;
          },
        ]).default;
      });
    });
    Ee();
    ke();
    we();
    Ee();
    ke();
    we();
    qn();
    qn();
    Ee();
    ke();
    we();
    var mf = __STORYBOOK_API__,
      {
        ActiveTabs: pf,
        Consumer: hf,
        ManagerContext: ff,
        Provider: gf,
        RequestResponseError: vf,
        addons: Yn,
        combineParameters: yf,
        controlOrMetaKey: bf,
        controlOrMetaSymbol: Ef,
        eventMatchesShortcut: kf,
        eventToShortcut: wf,
        experimental_requestResponse: Cf,
        isMacLike: Sf,
        isShortcutTaken: xf,
        keyToSymbol: Mf,
        merge: Nf,
        mockChannel: Ff,
        optionOrAltSymbol: Af,
        shortcutMatchesShortcut: Of,
        shortcutToHumanString: Lf,
        types: Tf,
        useAddonState: nl,
        useArgTypes: _f,
        useArgs: Zf,
        useChannel: di,
        useGlobalTypes: al,
        useGlobals: rl,
        useParameter: il,
        useSharedState: If,
        useStoryPrepared: Rf,
        useStorybookApi: vn,
        useStorybookState: yn,
      } = __STORYBOOK_API__;
    Ee();
    ke();
    we();
    var Hf = __STORYBOOK_THEMING__,
      {
        CacheProvider: Df,
        ClassNames: zf,
        Global: Uf,
        ThemeProvider: $f,
        background: Wf,
        color: Lt,
        convert: Gf,
        create: qf,
        createCache: Yf,
        createGlobal: Qf,
        createReset: Kf,
        css: he,
        darken: Jf,
        ensure: Xf,
        ignoreSsrWarning: e8,
        isPropValid: t8,
        jsx: n8,
        keyframes: Ht,
        lighten: a8,
        styled: w,
        themes: r8,
        typography: i8,
        useTheme: en,
        withTheme: o8,
      } = __STORYBOOK_THEMING__;
    Ee();
    ke();
    we();
    var u8 = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Wa } = __STORYBOOK_TYPES__;
    Ee();
    ke();
    we();
    var g8 = __STORYBOOK_COMPONENTS__,
      {
        A: v8,
        ActionBar: y8,
        AddonPanel: b8,
        Badge: ui,
        Bar: E8,
        Blockquote: k8,
        Button: mi,
        ClipboardCode: w8,
        Code: ol,
        DL: C8,
        Div: S8,
        DocumentWrapper: x8,
        EmptyTabContent: M8,
        ErrorFormatter: N8,
        FlexBar: F8,
        Form: A8,
        H1: O8,
        H2: L8,
        H3: T8,
        H4: _8,
        H5: Z8,
        H6: I8,
        HR: R8,
        IconButton: ll,
        IconButtonSkeleton: B8,
        Icons: P8,
        Img: V8,
        LI: j8,
        Link: bn,
        ListItem: H8,
        Loader: pi,
        Modal: D8,
        OL: z8,
        P: U8,
        Placeholder: $8,
        Pre: W8,
        ResetWrapper: G8,
        ScrollArea: q8,
        Separator: Y8,
        Spaced: Q8,
        Span: K8,
        StorybookIcon: J8,
        StorybookLogo: X8,
        Symbols: e9,
        SyntaxHighlighter: t9,
        TT: n9,
        TabBar: a9,
        TabButton: r9,
        TabWrapper: i9,
        Table: o9,
        Tabs: l9,
        TabsState: s9,
        TooltipLinkList: sl,
        TooltipMessage: cl,
        TooltipNote: dl,
        UL: c9,
        WithTooltip: Le,
        WithTooltipPure: d9,
        Zoom: u9,
        codeCommon: m9,
        components: p9,
        createCopyToClipboardFunction: h9,
        getStoryHref: f9,
        icons: g9,
        interleaveSeparators: v9,
        nameSpaceClassNames: y9,
        resetComponents: b9,
        withReset: E9,
      } = __STORYBOOK_COMPONENTS__;
    Ee();
    ke();
    we();
    var Dc = 'array',
      zc = 'bit',
      ul = 'bits',
      Uc = 'byte',
      ml = 'bytes',
      En = '',
      $c = 'exponent',
      Wc = 'function',
      pl = 'iec',
      Gc = 'Invalid number',
      qc = 'Invalid rounding method',
      hi = 'jedec',
      Yc = 'object',
      hl = '.',
      Qc = 'round',
      Kc = 's',
      Jc = 'si',
      Xc = 'kbit',
      ed = 'kB',
      td = ' ',
      nd = 'string',
      ad = '0',
      fi = {
        symbol: {
          iec: {
            bits: ['bit', 'Kibit', 'Mibit', 'Gibit', 'Tibit', 'Pibit', 'Eibit', 'Zibit', 'Yibit'],
            bytes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
          },
          jedec: {
            bits: ['bit', 'Kbit', 'Mbit', 'Gbit', 'Tbit', 'Pbit', 'Ebit', 'Zbit', 'Ybit'],
            bytes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          },
        },
        fullform: {
          iec: ['', 'kibi', 'mebi', 'gibi', 'tebi', 'pebi', 'exbi', 'zebi', 'yobi'],
          jedec: ['', 'kilo', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta'],
        },
      };
    function gi(
      e,
      {
        bits: t = !1,
        pad: n = !1,
        base: r = -1,
        round: i = 2,
        locale: o = En,
        localeOptions: l = {},
        separator: s = En,
        spacer: c = td,
        symbols: d = {},
        standard: u = En,
        output: m = nd,
        fullform: p = !1,
        fullforms: g = [],
        exponent: f = -1,
        roundingMethod: y = Qc,
        precision: k = 0,
      } = {},
    ) {
      let b = f,
        h = Number(e),
        v = [],
        E = 0,
        S = En;
      u === Jc
        ? ((r = 10), (u = hi))
        : u === pl || u === hi
          ? (r = 2)
          : r === 2
            ? (u = pl)
            : ((r = 10), (u = hi));
      let B = r === 10 ? 1e3 : 1024,
        j = p === !0,
        Y = h < 0,
        J = Math[y];
      if (typeof e != 'bigint' && isNaN(e)) throw new TypeError(Gc);
      if (typeof J !== Wc) throw new TypeError(qc);
      if (
        (Y && (h = -h),
        (b === -1 || isNaN(b)) && ((b = Math.floor(Math.log(h) / Math.log(B))), b < 0 && (b = 0)),
        b > 8 && (k > 0 && (k += 8 - b), (b = 8)),
        m === $c)
      )
        return b;
      if (h === 0) (v[0] = 0), (S = v[1] = fi.symbol[u][t ? ul : ml][b]);
      else {
        (E = h / (r === 2 ? Math.pow(2, b * 10) : Math.pow(1e3, b))),
          t && ((E = E * 8), E >= B && b < 8 && ((E = E / B), b++));
        let ce = Math.pow(10, b > 0 ? i : 0);
        (v[0] = J(E * ce) / ce),
          v[0] === B && b < 8 && f === -1 && ((v[0] = 1), b++),
          (S = v[1] = r === 10 && b === 1 ? (t ? Xc : ed) : fi.symbol[u][t ? ul : ml][b]);
      }
      if (
        (Y && (v[0] = -v[0]),
        k > 0 && (v[0] = v[0].toPrecision(k)),
        (v[1] = d[v[1]] || v[1]),
        o === !0
          ? (v[0] = v[0].toLocaleString())
          : o.length > 0
            ? (v[0] = v[0].toLocaleString(o, l))
            : s.length > 0 && (v[0] = v[0].toString().replace(hl, s)),
        n && i > 0)
      ) {
        let ce = v[0].toString(),
          Se = s || (ce.match(/(\D)/g)?.pop() ?? hl),
          Oe = ce.toString().split(Se),
          xe = Oe[1] || En,
          qe = xe.length,
          pe = i - qe;
        v[0] = `${Oe[0]}${Se}${xe.padEnd(qe + pe, ad)}`;
      }
      return (
        j && (v[1] = g[b] ? g[b] : fi.fullform[u][b] + (t ? zc : Uc) + (v[0] === 1 ? En : Kc)),
        m === Dc ? v : m === Yc ? { value: v[0], symbol: v[1], exponent: b, unit: S } : v.join(c)
      );
    }
    Ee();
    ke();
    we();
    var Qn = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: A9,
        createPortal: Kn,
        createRoot: O9,
        findDOMNode: L9,
        flushSync: T9,
        hydrate: _9,
        hydrateRoot: Z9,
        render: I9,
        unmountComponentAtNode: fl,
        unstable_batchedUpdates: R9,
        unstable_renderSubtreeIntoContainer: gl,
        version: B9,
      } = __REACT_DOM__;
    var es = vc(vl(), 1);
    Ee();
    ke();
    we();
    Ee();
    ke();
    we();
    function yi({ onlyFirst: e = !1 } = {}) {
      let t = [
        '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
        '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
      ].join('|');
      return new RegExp(t, e ? void 0 : 'g');
    }
    var id = yi();
    function bi(e) {
      if (typeof e != 'string') throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(id, '');
    }
    var od = Object.create,
      ts = Object.defineProperty,
      ld = Object.getOwnPropertyDescriptor,
      sd = Object.getOwnPropertyNames,
      cd = Object.getPrototypeOf,
      dd = Object.prototype.hasOwnProperty,
      ud = ((e) =>
        typeof Jt < 'u'
          ? Jt
          : typeof Proxy < 'u'
            ? new Proxy(e, { get: (t, n) => (typeof Jt < 'u' ? Jt : t)[n] })
            : e)(function (e) {
        if (typeof Jt < 'u') return Jt.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported');
      }),
      Qt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      md = (e, t, n, r) => {
        if ((t && typeof t == 'object') || typeof t == 'function')
          for (let i of sd(t))
            !dd.call(e, i) &&
              i !== n &&
              ts(e, i, { get: () => t[i], enumerable: !(r = ld(t, i)) || r.enumerable });
        return e;
      },
      ht = (e, t, n) => (
        (n = e != null ? od(cd(e)) : {}),
        md(t || !e || !e.__esModule ? ts(n, 'default', { value: e, enumerable: !0 }) : n, e)
      ),
      Vr = Qt((e, t) => {
        (function (n, r) {
          typeof ud == 'function' && typeof e == 'object' && typeof t == 'object'
            ? (t.exports = r())
            : typeof define == 'function' && define.amd
              ? define(function () {
                  return r();
                })
              : (n.pluralize = r());
        })(e, function () {
          var n = [],
            r = [],
            i = {},
            o = {},
            l = {};
          function s(y) {
            return typeof y == 'string' ? new RegExp('^' + y + '$', 'i') : y;
          }
          function c(y, k) {
            return y === k
              ? k
              : y === y.toLowerCase()
                ? k.toLowerCase()
                : y === y.toUpperCase()
                  ? k.toUpperCase()
                  : y[0] === y[0].toUpperCase()
                    ? k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()
                    : k.toLowerCase();
          }
          function d(y, k) {
            return y.replace(/\$(\d{1,2})/g, function (b, h) {
              return k[h] || '';
            });
          }
          function u(y, k) {
            return y.replace(k[0], function (b, h) {
              var v = d(k[1], arguments);
              return c(b === '' ? y[h - 1] : b, v);
            });
          }
          function m(y, k, b) {
            if (!y.length || i.hasOwnProperty(y)) return k;
            for (var h = b.length; h--; ) {
              var v = b[h];
              if (v[0].test(k)) return u(k, v);
            }
            return k;
          }
          function p(y, k, b) {
            return function (h) {
              var v = h.toLowerCase();
              return k.hasOwnProperty(v) ? c(h, v) : y.hasOwnProperty(v) ? c(h, y[v]) : m(v, h, b);
            };
          }
          function g(y, k, b, h) {
            return function (v) {
              var E = v.toLowerCase();
              return k.hasOwnProperty(E) ? !0 : y.hasOwnProperty(E) ? !1 : m(E, E, b) === E;
            };
          }
          function f(y, k, b) {
            var h = k === 1 ? f.singular(y) : f.plural(y);
            return (b ? k + ' ' : '') + h;
          }
          return (
            (f.plural = p(l, o, n)),
            (f.isPlural = g(l, o, n)),
            (f.singular = p(o, l, r)),
            (f.isSingular = g(o, l, r)),
            (f.addPluralRule = function (y, k) {
              n.push([s(y), k]);
            }),
            (f.addSingularRule = function (y, k) {
              r.push([s(y), k]);
            }),
            (f.addUncountableRule = function (y) {
              if (typeof y == 'string') {
                i[y.toLowerCase()] = !0;
                return;
              }
              f.addPluralRule(y, '$0'), f.addSingularRule(y, '$0');
            }),
            (f.addIrregularRule = function (y, k) {
              (k = k.toLowerCase()), (y = y.toLowerCase()), (l[y] = k), (o[k] = y);
            }),
            [
              ['I', 'we'],
              ['me', 'us'],
              ['he', 'they'],
              ['she', 'they'],
              ['them', 'them'],
              ['myself', 'ourselves'],
              ['yourself', 'yourselves'],
              ['itself', 'themselves'],
              ['herself', 'themselves'],
              ['himself', 'themselves'],
              ['themself', 'themselves'],
              ['is', 'are'],
              ['was', 'were'],
              ['has', 'have'],
              ['this', 'these'],
              ['that', 'those'],
              ['echo', 'echoes'],
              ['dingo', 'dingoes'],
              ['volcano', 'volcanoes'],
              ['tornado', 'tornadoes'],
              ['torpedo', 'torpedoes'],
              ['genus', 'genera'],
              ['viscus', 'viscera'],
              ['stigma', 'stigmata'],
              ['stoma', 'stomata'],
              ['dogma', 'dogmata'],
              ['lemma', 'lemmata'],
              ['schema', 'schemata'],
              ['anathema', 'anathemata'],
              ['ox', 'oxen'],
              ['axe', 'axes'],
              ['die', 'dice'],
              ['yes', 'yeses'],
              ['foot', 'feet'],
              ['eave', 'eaves'],
              ['goose', 'geese'],
              ['tooth', 'teeth'],
              ['quiz', 'quizzes'],
              ['human', 'humans'],
              ['proof', 'proofs'],
              ['carve', 'carves'],
              ['valve', 'valves'],
              ['looey', 'looies'],
              ['thief', 'thieves'],
              ['groove', 'grooves'],
              ['pickaxe', 'pickaxes'],
              ['passerby', 'passersby'],
            ].forEach(function (y) {
              return f.addIrregularRule(y[0], y[1]);
            }),
            [
              [/s?$/i, 's'],
              [/[^\u0000-\u007F]$/i, '$0'],
              [/([^aeiou]ese)$/i, '$1'],
              [/(ax|test)is$/i, '$1es'],
              [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
              [/(e[mn]u)s?$/i, '$1s'],
              [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1i',
              ],
              [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
              [/(seraph|cherub)(?:im)?$/i, '$1im'],
              [/(her|at|gr)o$/i, '$1oes'],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
                '$1a',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
                '$1a',
              ],
              [/sis$/i, 'ses'],
              [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
              [/([^aeiouy]|qu)y$/i, '$1ies'],
              [/([^ch][ieo][ln])ey$/i, '$1ies'],
              [/(x|ch|ss|sh|zz)$/i, '$1es'],
              [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
              [/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
              [/(pe)(?:rson|ople)$/i, '$1ople'],
              [/(child)(?:ren)?$/i, '$1ren'],
              [/eaux$/i, '$0'],
              [/m[ae]n$/i, 'men'],
              ['thou', 'you'],
            ].forEach(function (y) {
              return f.addPluralRule(y[0], y[1]);
            }),
            [
              [/s$/i, ''],
              [/(ss)$/i, '$1'],
              [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
              [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
              [/ies$/i, 'y'],
              [
                /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
                '$1ie',
              ],
              [/\b(mon|smil)ies$/i, '$1ey'],
              [/\b((?:tit)?m|l)ice$/i, '$1ouse'],
              [/(seraph|cherub)im$/i, '$1'],
              [
                /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
                '$1',
              ],
              [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
              [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
              [/(test)(?:is|es)$/i, '$1is'],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                '$1us',
              ],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
                '$1um',
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
                '$1on',
              ],
              [/(alumn|alg|vertebr)ae$/i, '$1a'],
              [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
              [/(matr|append)ices$/i, '$1ix'],
              [/(pe)(rson|ople)$/i, '$1rson'],
              [/(child)ren$/i, '$1'],
              [/(eau)x?$/i, '$1'],
              [/men$/i, 'man'],
            ].forEach(function (y) {
              return f.addSingularRule(y[0], y[1]);
            }),
            [
              'adulthood',
              'advice',
              'agenda',
              'aid',
              'aircraft',
              'alcohol',
              'ammo',
              'analytics',
              'anime',
              'athletics',
              'audio',
              'bison',
              'blood',
              'bream',
              'buffalo',
              'butter',
              'carp',
              'cash',
              'chassis',
              'chess',
              'clothing',
              'cod',
              'commerce',
              'cooperation',
              'corps',
              'debris',
              'diabetes',
              'digestion',
              'elk',
              'energy',
              'equipment',
              'excretion',
              'expertise',
              'firmware',
              'flounder',
              'fun',
              'gallows',
              'garbage',
              'graffiti',
              'hardware',
              'headquarters',
              'health',
              'herpes',
              'highjinks',
              'homework',
              'housework',
              'information',
              'jeans',
              'justice',
              'kudos',
              'labour',
              'literature',
              'machinery',
              'mackerel',
              'mail',
              'media',
              'mews',
              'moose',
              'music',
              'mud',
              'manga',
              'news',
              'only',
              'personnel',
              'pike',
              'plankton',
              'pliers',
              'police',
              'pollution',
              'premises',
              'rain',
              'research',
              'rice',
              'salmon',
              'scissors',
              'series',
              'sewage',
              'shambles',
              'shrimp',
              'software',
              'species',
              'staff',
              'swine',
              'tennis',
              'traffic',
              'transportation',
              'trout',
              'tuna',
              'wealth',
              'welfare',
              'whiting',
              'wildebeest',
              'wildlife',
              'you',
              /pok[eé]mon$/i,
              /[^aeiou]ese$/i,
              /deer$/i,
              /fish$/i,
              /measles$/i,
              /o[iu]s$/i,
              /pox$/i,
              /sheep$/i,
            ].forEach(f.addUncountableRule),
            f
          );
        });
      }),
      pd = Qt((e, t) => {
        var n = new Error('Element already at target scroll position'),
          r = new Error('Scroll cancelled'),
          i = Math.min,
          o = Date.now;
        t.exports = { left: l('scrollLeft'), top: l('scrollTop') };
        function l(d) {
          return function (u, m, p, g) {
            (p = p || {}),
              typeof p == 'function' && ((g = p), (p = {})),
              typeof g != 'function' && (g = c);
            var f = o(),
              y = u[d],
              k = p.ease || s,
              b = isNaN(p.duration) ? 350 : +p.duration,
              h = !1;
            return y === m ? g(n, u[d]) : requestAnimationFrame(E), v;
            function v() {
              h = !0;
            }
            function E(S) {
              if (h) return g(r, u[d]);
              var B = o(),
                j = i(1, (B - f) / b),
                Y = k(j);
              (u[d] = Y * (m - y) + y),
                j < 1
                  ? requestAnimationFrame(E)
                  : requestAnimationFrame(function () {
                      g(null, u[d]);
                    });
            }
          };
        }
        function s(d) {
          return 0.5 * (1 - Math.cos(Math.PI * d));
        }
        function c() {}
      }),
      hd = Qt((e, t) => {
        (function (n, r) {
          typeof define == 'function' && define.amd
            ? define([], r)
            : typeof t == 'object' && t.exports
              ? (t.exports = r())
              : (n.Scrollparent = r());
        })(e, function () {
          function n(i) {
            var o = getComputedStyle(i, null).getPropertyValue('overflow');
            return o.indexOf('scroll') > -1 || o.indexOf('auto') > -1;
          }
          function r(i) {
            if (i instanceof HTMLElement || i instanceof SVGElement) {
              for (var o = i.parentNode; o.parentNode; ) {
                if (n(o)) return o;
                o = o.parentNode;
              }
              return document.scrollingElement || document.documentElement;
            }
          }
          return r;
        });
      }),
      Eo = Qt((e, t) => {
        var n = function (v) {
          return r(v) && !i(v);
        };
        function r(v) {
          return !!v && typeof v == 'object';
        }
        function i(v) {
          var E = Object.prototype.toString.call(v);
          return E === '[object RegExp]' || E === '[object Date]' || s(v);
        }
        var o = typeof Symbol == 'function' && Symbol.for,
          l = o ? Symbol.for('react.element') : 60103;
        function s(v) {
          return v.$$typeof === l;
        }
        function c(v) {
          return Array.isArray(v) ? [] : {};
        }
        function d(v, E) {
          return E.clone !== !1 && E.isMergeableObject(v) ? b(c(v), v, E) : v;
        }
        function u(v, E, S) {
          return v.concat(E).map(function (B) {
            return d(B, S);
          });
        }
        function m(v, E) {
          if (!E.customMerge) return b;
          var S = E.customMerge(v);
          return typeof S == 'function' ? S : b;
        }
        function p(v) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(v).filter(function (E) {
                return Object.propertyIsEnumerable.call(v, E);
              })
            : [];
        }
        function g(v) {
          return Object.keys(v).concat(p(v));
        }
        function f(v, E) {
          try {
            return E in v;
          } catch {
            return !1;
          }
        }
        function y(v, E) {
          return (
            f(v, E) && !(Object.hasOwnProperty.call(v, E) && Object.propertyIsEnumerable.call(v, E))
          );
        }
        function k(v, E, S) {
          var B = {};
          return (
            S.isMergeableObject(v) &&
              g(v).forEach(function (j) {
                B[j] = d(v[j], S);
              }),
            g(E).forEach(function (j) {
              y(v, j) ||
                (f(v, j) && S.isMergeableObject(E[j])
                  ? (B[j] = m(j, S)(v[j], E[j], S))
                  : (B[j] = d(E[j], S)));
            }),
            B
          );
        }
        function b(v, E, S) {
          (S = S || {}),
            (S.arrayMerge = S.arrayMerge || u),
            (S.isMergeableObject = S.isMergeableObject || n),
            (S.cloneUnlessOtherwiseSpecified = d);
          var B = Array.isArray(E),
            j = Array.isArray(v),
            Y = B === j;
          return Y ? (B ? S.arrayMerge(v, E, S) : k(v, E, S)) : d(E, S);
        }
        b.all = function (v, E) {
          if (!Array.isArray(v)) throw new Error('first argument should be an array');
          return v.reduce(function (S, B) {
            return b(S, B, E);
          }, {});
        };
        var h = b;
        t.exports = h;
      }),
      fd = Qt((e, t) => {
        var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        t.exports = n;
      }),
      gd = Qt((e, t) => {
        var n = fd();
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (t.exports = function () {
            function o(c, d, u, m, p, g) {
              if (g !== n) {
                var f = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((f.name = 'Invariant Violation'), f);
              }
            }
            o.isRequired = o;
            function l() {
              return o;
            }
            var s = {
              array: o,
              bigint: o,
              bool: o,
              func: o,
              number: o,
              object: o,
              string: o,
              symbol: o,
              any: o,
              arrayOf: l,
              element: o,
              elementType: o,
              instanceOf: l,
              node: o,
              objectOf: l,
              oneOf: l,
              oneOfType: l,
              shape: l,
              exact: l,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (s.PropTypes = s), s;
          });
      }),
      vd = Qt((e, t) => {
        t.exports = gd()();
      }),
      yd = Qt((e, t) => {
        var n = function (o) {
            return Object.prototype.hasOwnProperty.call(o, 'props');
          },
          r = function (o, l) {
            return o + i(l);
          },
          i = function (o) {
            return o === null || typeof o == 'boolean' || typeof o > 'u'
              ? ''
              : typeof o == 'number'
                ? o.toString()
                : typeof o == 'string'
                  ? o
                  : Array.isArray(o)
                    ? o.reduce(r, '')
                    : n(o) && Object.prototype.hasOwnProperty.call(o.props, 'children')
                      ? i(o.props.children)
                      : '';
          };
        (i.default = i), (t.exports = i);
      }),
      bd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z',
            fill: e,
          }),
        ),
      ),
      ns = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z',
            fill: e,
          }),
        ),
      ),
      Ed = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z',
            fill: e,
          }),
        ),
      ),
      $t = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z',
            fill: e,
          }),
        ),
      ),
      kd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z',
            fill: e,
          }),
        ),
      ),
      as = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z',
            fill: e,
          }),
        ),
      ),
      wd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z',
            fill: e,
          }),
        ),
      ),
      Cd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z',
            fill: e,
          }),
        ),
      ),
      Sd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z',
            fill: e,
          }),
        ),
      ),
      xd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z',
            fill: e,
          }),
        ),
      ),
      ko = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z',
            fill: e,
          }),
        ),
      ),
      yl = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z',
            fill: e,
          }),
        ),
      ),
      Md = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          }),
        ),
      ),
      wo = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          }),
        ),
      ),
      ji = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z',
            fill: e,
          }),
        ),
      ),
      Nd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z',
            fill: e,
          }),
        ),
      ),
      Wt = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z',
            fill: e,
          }),
        ),
      ),
      rs = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z',
            fill: e,
          }),
        ),
      ),
      Fd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z',
            fill: e,
          }),
        ),
      ),
      is = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z',
            fill: e,
          }),
        ),
      ),
      Ad = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z',
            fill: e,
          }),
        ),
      ),
      Od = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
            fill: e,
          }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z',
            fill: e,
          }),
        ),
      ),
      os = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z',
            fill: e,
          }),
          x('path', {
            d: 'M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z',
            fill: e,
          }),
        ),
      ),
      Ld = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x(
            'g',
            { clipPath: 'url(#prefix__clip0_1449_588)' },
            x('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z',
              fill: e,
            }),
          ),
          x(
            'defs',
            null,
            x(
              'clipPath',
              { id: 'prefix__clip0_1449_588' },
              x('path', { fill: '#fff', d: 'M0 0h14v14H0z' }),
            ),
          ),
        ),
      ),
      ls = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z',
            fill: e,
          }),
        ),
      ),
      Td = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z',
            fill: e,
          }),
        ),
      ),
      _d = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z',
            fill: e,
          }),
        ),
      ),
      Zd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z',
            fill: e,
          }),
        ),
      ),
      Id = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z',
            fill: e,
          }),
        ),
      ),
      Rd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z',
            fill: e,
          }),
        ),
      ),
      Bd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z',
            fill: e,
          }),
        ),
      ),
      ss = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            d: 'M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z',
            fill: e,
          }),
        ),
      ),
      Pd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z',
            fill: e,
          }),
        ),
      ),
      Vd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', { d: 'M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z', fill: e }),
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z',
            fill: e,
          }),
        ),
      ),
      jd = Q(({ color: e = 'currentColor', size: t = 14, ...n }, r) =>
        x(
          'svg',
          {
            width: t,
            height: t,
            viewBox: '0 0 14 14',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ref: r,
            ...n,
          },
          x('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z',
            fill: e,
          }),
        ),
      ),
      {
        CHROMATIC_INDEX_URL: Hd,
        CHROMATIC_BASE_URL: jr = Hd || 'https://www.chromatic.com',
        CHROMATIC_API_URL: Dd = `${jr}/api`,
      } = Ke,
      U = 'chromaui/addon-visual-tests',
      qt = `${U}/panel`,
      zd = `${U}/sidebarTop`,
      Ud = `${U}/sidebarBottom`,
      Hi = `${U}/access-token/${jr}`,
      Co = `${U}/configInfo`,
      bl = `${U}/configInfoDismissed`,
      $d = `${U}/gitInfo`,
      cs = `${U}/gitInfoError`,
      ds = `${U}/projectInfo`,
      us = `${U}/isOffline`,
      Di = `${U}/isOutdated`,
      Wd = `${U}/startBuild`,
      Gd = `${U}/stopBuild`,
      ms = `${U}/localBuildProgress`,
      qd = `${U}/selectedModeName`,
      Yd = `${U}/selectedBrowserId`,
      Qd = `${U}/telemetry`,
      zi = `${U}/enableFilter`,
      ps = `${U}/removeAddon`,
      Kd = 'chromatic',
      Jd = {
        autoAcceptChanges: !1,
        exitOnceUploaded: !1,
        exitZeroOnChanges: !0,
        forceRebuild: !0,
        fromCI: !1,
        interactive: !1,
        isLocalBuild: !0,
        skip: !1,
        skipUpdateCheck: !0,
        storybookBuildDir: void 0,
      },
      hs = 'https://www.chromatic.com/docs/visual-tests-addon',
      Xd = ht(Vr()),
      e5 = (e, t) =>
        (t &&
          { positive: { color: e.color.positiveText }, warning: { color: e.color.warningText } }[
            t
          ]) ||
        {},
      ot = w(ll)(
        ({ active: e, variant: t, theme: n }) => ({
          display: 'inline-flex',
          alignItems: 'center',
          verticalAlign: 'top',
          gap: 6,
          margin: 0,
          color: e || t === 'outline' ? n.color.secondary : n.color.mediumdark,
          fontWeight: 'normal',
          '& > svg': { width: 'auto' },
        }),
        ({ active: e, status: t, theme: n }) => !e && e5(n, t),
        ({ active: e, theme: t }) => {
          let n = t.background.content === t.color.lightest,
            r = n ? 'rgb(241,248,255)' : 'rgb(28,37,45)',
            i = n ? 'rgb(229,243,255)' : 'rgb(29,44,56)';
          return {
            '--bg-color': e ? r : t.background.content,
            '&:hover': { '--bg-color': i, color: t.color.secondary },
          };
        },
      ),
      t5 = w(ui)(({ theme: e }) => ({ padding: '4px 8px', fontSize: e.typography.size.s1 })),
      n5 = w(ot)(
        ({ theme: e }) => ({
          fontSize: e.typography.size.s2,
          '&:hover [data-badge][data-status=warning], [data-badge=true][data-status=warning]': {
            background: '#E3F3FF',
            borderColor: 'rgba(2, 113, 182, 0.1)',
            color: '#0271B6',
          },
          '&:hover [data-badge][data-status=critical], [data-badge=true][data-status=critical]': {
            background: e.background.negative,
            boxShadow: 'inset 0 0 0 1px rgba(182, 2, 2, 0.1)',
            color: e.color.negativeText,
          },
        }),
        ({ active: e, theme: t }) =>
          !e &&
          he({ '&:hover': { color: t.base === 'light' ? t.color.defaultText : t.color.light } }),
      ),
      a5 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.defaultText : e.color.light,
      })),
      El = ({ active: e, count: t, label: n, status: r, ...i }) =>
        a.createElement(
          n5,
          { active: e, ...i },
          a.createElement(t5, { status: r, 'data-badge': e, 'data-status': r }, t),
          a.createElement(a5, null, (0, Xd.default)(n, t)),
        ),
      r5 = () => !0,
      i5 = ({ status: e }) => e?.[U]?.status === 'warn',
      o5 = ({ status: e }) => e?.[U]?.status === 'error',
      l5 = ({ status: e }) => e?.[U]?.status === 'warn' || e?.[U]?.status === 'error',
      s5 = (e = !1, t = !1) => (e && t ? l5 : e ? i5 : t ? o5 : r5),
      c5 = w.div({ display: 'flex', gap: 5 }),
      d5 = ({ api: e, status: t }) => {
        let [n, r] = a.useState(!1),
          [i, o] = a.useState(!1),
          l = Object.values(t).filter((p) => p[U]?.status === 'warn'),
          s = Object.values(t).filter((p) => p[U]?.status === 'error'),
          c = l.length > 0,
          d = s.length > 0,
          u = W(() => r((p) => !p), []),
          m = W(() => o((p) => !p), []);
        return (
          oe(() => {
            let p = s5(c && n, d && i);
            e.experimental_setFilter(U, p), e.emit(zi, p);
          }, [e, c, d, n, i]),
          !c && !d
            ? null
            : a.createElement(
                c5,
                { id: 'sidebar-bottom-wrapper' },
                c &&
                  a.createElement(El, {
                    id: 'warnings-found-filter',
                    active: n,
                    count: l.length,
                    label: 'Change',
                    status: 'warning',
                    onClick: u,
                  }),
                d &&
                  a.createElement(El, {
                    id: 'errors-found-filter',
                    active: i,
                    count: s.length,
                    label: 'Error',
                    status: 'critical',
                    onClick: m,
                  }),
              )
        );
      },
      u5 = (e) => {
        let { status: t } = yn();
        return a.createElement(d5, { ...e, status: t });
      },
      Ei = ht(Vr()),
      So = () => {},
      et = So;
    function ft(e) {
      return { tag: 0, 0: e };
    }
    function _a(e) {
      return { tag: 1, 0: e };
    }
    var kl = () => (typeof Symbol == 'function' && Symbol.asyncIterator) || '@@asyncIterator',
      m5 = (e) => e;
    function Ye(e) {
      return (t) => (n) => {
        var r = et;
        t((i) => {
          i === 0 ? n(0) : i.tag === 0 ? ((r = i[0]), n(i)) : e(i[0]) ? n(i) : r(0);
        });
      };
    }
    function Ui(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 || r.tag === 0 ? n(r) : n(_a(e(r[0])));
        });
    }
    function cr(e) {
      return (t) => (n) => {
        var r = [],
          i = et,
          o = !1,
          l = !1;
        t((s) => {
          l ||
            (s === 0
              ? ((l = !0), r.length || n(0))
              : s.tag === 0
                ? (i = s[0])
                : ((o = !1),
                  (function (c) {
                    var d = et;
                    c((u) => {
                      if (u === 0) {
                        if (r.length) {
                          var m = r.indexOf(d);
                          m > -1 && (r = r.slice()).splice(m, 1),
                            r.length || (l ? n(0) : o || ((o = !0), i(0)));
                        }
                      } else u.tag === 0 ? (r.push((d = u[0])), d(0)) : r.length && (n(u), d(0));
                    });
                  })(e(s[0])),
                  o || ((o = !0), i(0))));
        }),
          n(
            ft((s) => {
              if (s === 1) {
                l || ((l = !0), i(1));
                for (var c = 0, d = r, u = r.length; c < u; c++) d[c](1);
                r.length = 0;
              } else {
                !l && !o ? ((o = !0), i(0)) : (o = !1);
                for (var m = 0, p = r, g = r.length; m < g; m++) p[m](0);
              }
            }),
          );
      };
    }
    function p5(e) {
      return cr(m5)(e);
    }
    function ga(e) {
      return p5(g5(e));
    }
    function xo(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0), e();
            else if (i.tag === 0) {
              var o = i[0];
              n(
                ft((l) => {
                  l === 1 ? ((r = !0), o(1), e()) : o(l);
                }),
              );
            } else n(i);
        });
      };
    }
    function dr(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0);
            else if (i.tag === 0) {
              var o = i[0];
              n(
                ft((l) => {
                  l === 1 && (r = !0), o(l);
                }),
              );
            } else e(i[0]), n(i);
        });
      };
    }
    function $i(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
        });
    }
    function va(e) {
      var t = [],
        n = et,
        r = !1;
      return (i) => {
        t.push(i),
          t.length === 1 &&
            e((o) => {
              if (o === 0) {
                for (var l = 0, s = t, c = t.length; l < c; l++) s[l](0);
                t.length = 0;
              } else if (o.tag === 0) n = o[0];
              else {
                r = !1;
                for (var d = 0, u = t, m = t.length; d < m; d++) u[d](o);
              }
            }),
          i(
            ft((o) => {
              if (o === 1) {
                var l = t.indexOf(i);
                l > -1 && (t = t.slice()).splice(l, 1), t.length || n(1);
              } else r || ((r = !0), n(0));
            }),
          );
      };
    }
    function wl(e) {
      return (t) => (n) => {
        var r = et,
          i = et,
          o = !1,
          l = !1,
          s = !1,
          c = !1;
        t((d) => {
          c ||
            (d === 0
              ? ((c = !0), s || n(0))
              : d.tag === 0
                ? (r = d[0])
                : (s && (i(1), (i = et)),
                  o ? (o = !1) : ((o = !0), r(0)),
                  (function (u) {
                    (s = !0),
                      u((m) => {
                        s &&
                          (m === 0
                            ? ((s = !1), c ? n(0) : o || ((o = !0), r(0)))
                            : m.tag === 0
                              ? ((l = !1), (i = m[0])(0))
                              : (n(m), l ? (l = !1) : i(0)));
                      });
                  })(e(d[0]))));
        }),
          n(
            ft((d) => {
              d === 1
                ? (c || ((c = !0), r(1)), s && ((s = !1), i(1)))
                : (!c && !o && ((o = !0), r(0)), s && !l && ((l = !0), i(0)));
            }),
          );
      };
    }
    function Hr(e) {
      return (t) => (n) => {
        var r = et,
          i = !1,
          o = 0;
        t((l) => {
          i ||
            (l === 0
              ? ((i = !0), n(0))
              : l.tag === 0
                ? e <= 0
                  ? ((i = !0), n(0), l[0](1))
                  : (r = l[0])
                : o++ < e
                  ? (n(l), !i && o >= e && ((i = !0), n(0), r(1)))
                  : n(l));
        }),
          n(
            ft((l) => {
              l === 1 && !i ? ((i = !0), r(1)) : l === 0 && !i && o < e && r(0);
            }),
          );
      };
    }
    function fs(e) {
      return (t) => (n) => {
        var r = et,
          i = et,
          o = !1;
        t((l) => {
          o ||
            (l === 0
              ? ((o = !0), i(1), n(0))
              : l.tag === 0
                ? ((r = l[0]),
                  e((s) => {
                    s === 0 || (s.tag === 0 ? (i = s[0])(0) : ((o = !0), i(1), r(1), n(0)));
                  }))
                : n(l));
        }),
          n(
            ft((l) => {
              l === 1 && !o ? ((o = !0), r(1), i(1)) : o || r(0);
            }),
          );
      };
    }
    function gs(e, t) {
      return (n) => (r) => {
        var i = et,
          o = !1;
        n((l) => {
          o ||
            (l === 0
              ? ((o = !0), r(0))
              : l.tag === 0
                ? ((i = l[0]), r(l))
                : e(l[0])
                  ? r(l)
                  : ((o = !0), t && r(l), r(0), i(1)));
        });
      };
    }
    function h5(e) {
      return (t) => e()(t);
    }
    function vs(e) {
      return (t) => {
        var n = (e[kl()] && e[kl()]()) || e,
          r = !1,
          i = !1,
          o = !1,
          l;
        t(
          ft(async (s) => {
            if (s === 1) (r = !0), n.return && n.return();
            else if (i) o = !0;
            else {
              for (o = i = !0; o && !r; )
                if ((l = await n.next()).done) (r = !0), n.return && (await n.return()), t(0);
                else
                  try {
                    (o = !1), t(_a(l.value));
                  } catch (c) {
                    if (n.throw) (r = !!(await n.throw(c)).done) && t(0);
                    else throw c;
                  }
              i = !1;
            }
          }),
        );
      };
    }
    function f5(e) {
      return e[Symbol.asyncIterator]
        ? vs(e)
        : (t) => {
            var n = e[Symbol.iterator](),
              r = !1,
              i = !1,
              o = !1,
              l;
            t(
              ft((s) => {
                if (s === 1) (r = !0), n.return && n.return();
                else if (i) o = !0;
                else {
                  for (o = i = !0; o && !r; )
                    if ((l = n.next()).done) (r = !0), n.return && n.return(), t(0);
                    else
                      try {
                        (o = !1), t(_a(l.value));
                      } catch (c) {
                        if (n.throw) (r = !!n.throw(c).done) && t(0);
                        else throw c;
                      }
                  i = !1;
                }
              }),
            );
          };
    }
    var g5 = f5;
    function ma(e) {
      return (t) => {
        var n = !1;
        t(
          ft((r) => {
            r === 1 ? (n = !0) : n || ((n = !0), t(_a(e)), t(0));
          }),
        );
      };
    }
    function ys(e) {
      return (t) => {
        var n = !1,
          r = e({
            next(i) {
              n || t(_a(i));
            },
            complete() {
              n || ((n = !0), t(0));
            },
          });
        t(
          ft((i) => {
            i === 1 && !n && ((n = !0), r());
          }),
        );
      };
    }
    function Wi() {
      var e, t;
      return {
        source: va(ys((n) => ((e = n.next), (t = n.complete), So))),
        next(n) {
          e && e(n);
        },
        complete() {
          t && t();
        },
      };
    }
    function Cl(e) {
      return ys(
        (t) => (
          e.then((n) => {
            Promise.resolve(n).then(() => {
              t.next(n), t.complete();
            });
          }),
          So
        ),
      );
    }
    function Fn(e) {
      return (t) => {
        var n = et,
          r = !1;
        return (
          t((i) => {
            i === 0 ? (r = !0) : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
          }),
          {
            unsubscribe() {
              r || ((r = !0), n(1));
            },
          }
        );
      };
    }
    function v5(e) {
      Fn((t) => {})(e);
    }
    function Mo(e) {
      return new Promise((t) => {
        var n = et,
          r;
        e((i) => {
          i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : ((r = i[0]), n(0));
        });
      });
    }
    var y5 = {
        NAME: 'Name',
        DOCUMENT: 'Document',
        OPERATION_DEFINITION: 'OperationDefinition',
        VARIABLE_DEFINITION: 'VariableDefinition',
        SELECTION_SET: 'SelectionSet',
        FIELD: 'Field',
        ARGUMENT: 'Argument',
        FRAGMENT_SPREAD: 'FragmentSpread',
        INLINE_FRAGMENT: 'InlineFragment',
        FRAGMENT_DEFINITION: 'FragmentDefinition',
        VARIABLE: 'Variable',
        INT: 'IntValue',
        FLOAT: 'FloatValue',
        STRING: 'StringValue',
        BOOLEAN: 'BooleanValue',
        NULL: 'NullValue',
        ENUM: 'EnumValue',
        LIST: 'ListValue',
        OBJECT: 'ObjectValue',
        OBJECT_FIELD: 'ObjectField',
        DIRECTIVE: 'Directive',
        NAMED_TYPE: 'NamedType',
        LIST_TYPE: 'ListType',
        NON_NULL_TYPE: 'NonNullType',
      },
      Gi = class extends Error {
        constructor(e, t, n, r, i, o, l) {
          super(e),
            (this.name = 'GraphQLError'),
            (this.message = e),
            i && (this.path = i),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            n && (this.source = n),
            r && (this.positions = r),
            o && (this.originalError = o);
          var s = l;
          if (!s && o) {
            var c = o.extensions;
            c && typeof c == 'object' && (s = c);
          }
          this.extensions = s || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLError';
        }
      },
      Ce,
      ee;
    function Te(e) {
      return new Gi(`Syntax Error: Unexpected token at ${ee} in ${e}`);
    }
    function Xe(e) {
      if (((e.lastIndex = ee), e.test(Ce))) return Ce.slice(ee, (ee = e.lastIndex));
    }
    var Ga = / +(?=[^\s])/y;
    function b5(e) {
      for (
        var t = e.split(`
`),
          n = '',
          r = 0,
          i = 0,
          o = t.length - 1,
          l = 0;
        l < t.length;
        l++
      )
        (Ga.lastIndex = 0),
          Ga.test(t[l]) &&
            (l && (!r || Ga.lastIndex < r) && (r = Ga.lastIndex), (i = i || l), (o = l));
      for (var s = i; s <= o; s++)
        s !== i &&
          (n += `
`),
          (n += t[s].slice(r).replace(/\\"""/g, '"""'));
      return n;
    }
    function ae() {
      for (
        var e = 0 | Ce.charCodeAt(ee++);
        e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
        e = 0 | Ce.charCodeAt(ee++)
      )
        if (e === 35) for (; (e = Ce.charCodeAt(ee++)) !== 10 && e !== 13; );
      ee--;
    }
    var bs = /[_A-Za-z]\w*/y;
    function Nt() {
      var e;
      if ((e = Xe(bs))) return { kind: 'Name', value: e };
    }
    var E5 = /(?:null|true|false)/y,
      Es = /\$[_A-Za-z]\w*/y,
      k5 = /-?\d+/y,
      w5 = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
      C5 = /\\/g,
      S5 = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
      x5 = /"(?:"|[^\r\n]*?[^\\]")/y;
    function ur(e) {
      var t, n;
      if ((n = Xe(E5)))
        t = n === 'null' ? { kind: 'NullValue' } : { kind: 'BooleanValue', value: n === 'true' };
      else if (!e && (n = Xe(Es)))
        t = { kind: 'Variable', name: { kind: 'Name', value: n.slice(1) } };
      else if ((n = Xe(k5))) {
        var r = n;
        (n = Xe(w5))
          ? (t = { kind: 'FloatValue', value: r + n })
          : (t = { kind: 'IntValue', value: r });
      } else if ((n = Xe(bs))) t = { kind: 'EnumValue', value: n };
      else if ((n = Xe(S5))) t = { kind: 'StringValue', value: b5(n.slice(3, -3)), block: !0 };
      else if ((n = Xe(x5)))
        t = { kind: 'StringValue', value: C5.test(n) ? JSON.parse(n) : n.slice(1, -1), block: !1 };
      else if (
        (t =
          (function (i) {
            var o;
            if (Ce.charCodeAt(ee) === 91) {
              ee++, ae();
              for (var l = []; (o = ur(i)); ) l.push(o);
              if (Ce.charCodeAt(ee++) !== 93) throw Te('ListValue');
              return ae(), { kind: 'ListValue', values: l };
            }
          })(e) ||
          (function (i) {
            if (Ce.charCodeAt(ee) === 123) {
              ee++, ae();
              for (var o = [], l; (l = Nt()); ) {
                if ((ae(), Ce.charCodeAt(ee++) !== 58)) throw Te('ObjectField');
                ae();
                var s = ur(i);
                if (!s) throw Te('ObjectField');
                o.push({ kind: 'ObjectField', name: l, value: s });
              }
              if (Ce.charCodeAt(ee++) !== 125) throw Te('ObjectValue');
              return ae(), { kind: 'ObjectValue', fields: o };
            }
          })(e))
      )
        return t;
      return ae(), t;
    }
    function ks(e) {
      var t = [];
      if ((ae(), Ce.charCodeAt(ee) === 40)) {
        ee++, ae();
        for (var n; (n = Nt()); ) {
          if ((ae(), Ce.charCodeAt(ee++) !== 58)) throw Te('Argument');
          ae();
          var r = ur(e);
          if (!r) throw Te('Argument');
          t.push({ kind: 'Argument', name: n, value: r });
        }
        if (!t.length || Ce.charCodeAt(ee++) !== 41) throw Te('Argument');
        ae();
      }
      return t;
    }
    function An(e) {
      var t = [];
      for (ae(); Ce.charCodeAt(ee) === 64; ) {
        ee++;
        var n = Nt();
        if (!n) throw Te('Directive');
        ae(), t.push({ kind: 'Directive', name: n, arguments: ks(e) });
      }
      return t;
    }
    function M5() {
      var e = Nt();
      if (e) {
        ae();
        var t;
        if (Ce.charCodeAt(ee) === 58) {
          if ((ee++, ae(), (t = e), !(e = Nt()))) throw Te('Field');
          ae();
        }
        return {
          kind: 'Field',
          alias: t,
          name: e,
          arguments: ks(!1),
          directives: An(!1),
          selectionSet: Dr(),
        };
      }
    }
    function ws() {
      var e;
      if ((ae(), Ce.charCodeAt(ee) === 91)) {
        ee++, ae();
        var t = ws();
        if (!t || Ce.charCodeAt(ee++) !== 93) throw Te('ListType');
        e = { kind: 'ListType', type: t };
      } else if ((e = Nt())) e = { kind: 'NamedType', name: e };
      else throw Te('NamedType');
      return ae(), Ce.charCodeAt(ee) === 33 ? (ee++, ae(), { kind: 'NonNullType', type: e }) : e;
    }
    var N5 = /on/y;
    function Cs() {
      if (Xe(N5)) {
        ae();
        var e = Nt();
        if (!e) throw Te('NamedType');
        return ae(), { kind: 'NamedType', name: e };
      }
    }
    var F5 = /\.\.\./y;
    function A5() {
      if (Xe(F5)) {
        ae();
        var e = ee,
          t;
        if ((t = Nt()) && t.value !== 'on')
          return { kind: 'FragmentSpread', name: t, directives: An(!1) };
        ee = e;
        var n = Cs(),
          r = An(!1),
          i = Dr();
        if (!i) throw Te('InlineFragment');
        return { kind: 'InlineFragment', typeCondition: n, directives: r, selectionSet: i };
      }
    }
    function Dr() {
      var e;
      if ((ae(), Ce.charCodeAt(ee) === 123)) {
        ee++, ae();
        for (var t = []; (e = A5() || M5()); ) t.push(e);
        if (!t.length || Ce.charCodeAt(ee++) !== 125) throw Te('SelectionSet');
        return ae(), { kind: 'SelectionSet', selections: t };
      }
    }
    var O5 = /fragment/y;
    function L5() {
      if (Xe(O5)) {
        ae();
        var e = Nt();
        if (!e) throw Te('FragmentDefinition');
        ae();
        var t = Cs();
        if (!t) throw Te('FragmentDefinition');
        var n = An(!1),
          r = Dr();
        if (!r) throw Te('FragmentDefinition');
        return {
          kind: 'FragmentDefinition',
          name: e,
          typeCondition: t,
          directives: n,
          selectionSet: r,
        };
      }
    }
    var T5 = /(?:query|mutation|subscription)/y;
    function _5() {
      var e,
        t,
        n = [],
        r = [];
      (e = Xe(T5)) &&
        (ae(),
        (t = Nt()),
        (n = (function () {
          var o,
            l = [];
          if ((ae(), Ce.charCodeAt(ee) === 40)) {
            for (ee++, ae(); (o = Xe(Es)); ) {
              if ((ae(), Ce.charCodeAt(ee++) !== 58)) throw Te('VariableDefinition');
              var s = ws(),
                c = void 0;
              if (Ce.charCodeAt(ee) === 61 && (ee++, ae(), !(c = ur(!0))))
                throw Te('VariableDefinition');
              ae(),
                l.push({
                  kind: 'VariableDefinition',
                  variable: { kind: 'Variable', name: { kind: 'Name', value: o.slice(1) } },
                  type: s,
                  defaultValue: c,
                  directives: An(!0),
                });
            }
            if (Ce.charCodeAt(ee++) !== 41) throw Te('VariableDefinition');
            ae();
          }
          return l;
        })()),
        (r = An(!1)));
      var i = Dr();
      if (i)
        return {
          kind: 'OperationDefinition',
          operation: e || 'query',
          name: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        };
    }
    function Z5(e, t) {
      return (
        (Ce = typeof e.body == 'string' ? e.body : e),
        (ee = 0),
        (function () {
          var n;
          ae();
          for (var r = []; (n = L5() || _5()); ) r.push(n);
          return { kind: 'Document', definitions: r };
        })()
      );
    }
    function I5(e) {
      return JSON.stringify(e);
    }
    function R5(e) {
      return (
        `"""
` +
        e.replace(/"""/g, '\\"""') +
        `
"""`
      );
    }
    var nt = (e) => !(!e || !e.length),
      Ve = {
        OperationDefinition(e) {
          if (e.operation === 'query' && !e.name && !nt(e.variableDefinitions) && !nt(e.directives))
            return Ve.SelectionSet(e.selectionSet);
          var t = e.operation;
          return (
            e.name && (t += ' ' + e.name.value),
            nt(e.variableDefinitions) &&
              (e.name || (t += ' '),
              (t += '(' + e.variableDefinitions.map(Ve.VariableDefinition).join(', ') + ')')),
            nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')),
            t + ' ' + Ve.SelectionSet(e.selectionSet)
          );
        },
        VariableDefinition(e) {
          var t = Ve.Variable(e.variable) + ': ' + at(e.type);
          return (
            e.defaultValue && (t += ' = ' + at(e.defaultValue)),
            nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')),
            t
          );
        },
        Field(e) {
          var t = (e.alias ? e.alias.value + ': ' : '') + e.name.value;
          if (nt(e.arguments)) {
            var n = e.arguments.map(Ve.Argument),
              r = t + '(' + n.join(', ') + ')';
            t =
              r.length > 80
                ? t +
                  `(
  ` +
                  n
                    .join(`
`)
                    .replace(
                      /\n/g,
                      `
  `,
                    ) +
                  `
)`
                : r;
          }
          return (
            nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')),
            e.selectionSet ? t + ' ' + Ve.SelectionSet(e.selectionSet) : t
          );
        },
        StringValue: (e) => (e.block ? R5(e.value) : I5(e.value)),
        BooleanValue: (e) => '' + e.value,
        NullValue: (e) => 'null',
        IntValue: (e) => e.value,
        FloatValue: (e) => e.value,
        EnumValue: (e) => e.value,
        Name: (e) => e.value,
        Variable: (e) => '$' + e.name.value,
        ListValue: (e) => '[' + e.values.map(at).join(', ') + ']',
        ObjectValue: (e) => '{' + e.fields.map(Ve.ObjectField).join(', ') + '}',
        ObjectField: (e) => e.name.value + ': ' + at(e.value),
        Document: (e) =>
          nt(e.definitions)
            ? e.definitions.map(at).join(`

`)
            : '',
        SelectionSet: (e) =>
          `{
  ` +
          e.selections
            .map(at)
            .join(`
`)
            .replace(
              /\n/g,
              `
  `,
            ) +
          `
}`,
        Argument: (e) => e.name.value + ': ' + at(e.value),
        FragmentSpread(e) {
          var t = '...' + e.name.value;
          return nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')), t;
        },
        InlineFragment(e) {
          var t = '...';
          return (
            e.typeCondition && (t += ' on ' + e.typeCondition.name.value),
            nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')),
            t + ' ' + at(e.selectionSet)
          );
        },
        FragmentDefinition(e) {
          var t = 'fragment ' + e.name.value;
          return (
            (t += ' on ' + e.typeCondition.name.value),
            nt(e.directives) && (t += ' ' + e.directives.map(Ve.Directive).join(' ')),
            t + ' ' + at(e.selectionSet)
          );
        },
        Directive(e) {
          var t = '@' + e.name.value;
          return nt(e.arguments) && (t += '(' + e.arguments.map(Ve.Argument).join(', ') + ')'), t;
        },
        NamedType: (e) => e.name.value,
        ListType: (e) => '[' + at(e.type) + ']',
        NonNullType: (e) => at(e.type) + '!',
      };
    function at(e) {
      return Ve[e.kind] ? Ve[e.kind](e) : '';
    }
    var B5 = (e) =>
        e && e.message && (e.extensions || e.name === 'GraphQLError')
          ? e
          : typeof e == 'object' && e.message
            ? new Gi(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
            : new Gi(e),
      No = class extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(B5),
            n = ((r, i) => {
              var o = '';
              if (r) return `[Network] ${r.message}`;
              if (i)
                for (var l of i)
                  o &&
                    (o += `
`),
                    (o += `[GraphQL] ${l.message}`);
              return o;
            })(e.networkError, t);
          super(n),
            (this.name = 'CombinedError'),
            (this.message = n),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      },
      qi = (e, t) => {
        for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
          n = (n << 5) + n + e.charCodeAt(r);
        return n;
      },
      on = new Set(),
      Sl = new WeakMap(),
      wn = (e) => {
        if (e === null || on.has(e)) return 'null';
        if (typeof e != 'object') return JSON.stringify(e) || '';
        if (e.toJSON) return wn(e.toJSON());
        if (Array.isArray(e)) {
          var t = '[';
          for (var n of e) t.length > 1 && (t += ','), (t += wn(n) || 'null');
          return (t += ']');
        } else if ((pr !== On && e instanceof pr) || (hr !== On && e instanceof hr)) return 'null';
        var r = Object.keys(e).sort();
        if (
          !r.length &&
          e.constructor &&
          Object.getPrototypeOf(e).constructor !== Object.prototype.constructor
        ) {
          var i = Sl.get(e) || Math.random().toString(36).slice(2);
          return Sl.set(e, i), wn({ __key: i });
        }
        on.add(e);
        var o = '{';
        for (var l of r) {
          var s = wn(e[l]);
          s && (o.length > 1 && (o += ','), (o += wn(l) + ':' + s));
        }
        return on.delete(e), (o += '}');
      },
      Yi = (e, t, n) => {
        if (!(n == null || typeof n != 'object' || n.toJSON || on.has(n)))
          if (Array.isArray(n)) for (var r = 0, i = n.length; r < i; r++) Yi(e, `${t}.${r}`, n[r]);
          else if (n instanceof pr || n instanceof hr) e.set(t, n);
          else {
            on.add(n);
            for (var o of Object.keys(n)) Yi(e, `${t}.${o}`, n[o]);
          }
      },
      mr = (e) => (on.clear(), wn(e)),
      On = class {},
      pr = typeof File < 'u' ? File : On,
      hr = typeof Blob < 'u' ? Blob : On,
      P5 = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
      V5 = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
      j5 = (e, t) =>
        t % 2 == 0
          ? e.replace(
              V5,
              `
`,
            )
          : e,
      xl = (e) => e.split(P5).map(j5).join('').trim(),
      Ml = new Map(),
      or = new Map(),
      Fo = (e) => {
        var t;
        return (
          typeof e == 'string'
            ? (t = xl(e))
            : e.loc && or.get(e.__key) === e
              ? (t = e.loc.source.body)
              : ((t = Ml.get(e) || xl(at(e))), Ml.set(e, t)),
          typeof e != 'string' &&
            !e.loc &&
            (e.loc = {
              start: 0,
              end: t.length,
              source: { body: t, name: 'gql', locationOffset: { line: 1, column: 1 } },
            }),
          t
        );
      },
      Nl = (e) => {
        var t = qi(Fo(e));
        if (e.definitions) {
          var n = Ss(e);
          n &&
            (t = qi(
              `
# ${n}`,
              t,
            ));
        }
        return t;
      },
      H5 = (e) => {
        var t, n;
        return (
          typeof e == 'string'
            ? ((t = Nl(e)), (n = or.get(t) || Z5(e)))
            : ((t = e.__key || Nl(e)), (n = or.get(t) || e)),
          n.loc || Fo(n),
          (n.__key = t),
          or.set(t, n),
          n
        );
      },
      Mn = (e, t, n) => {
        var r = t || {},
          i = H5(e),
          o = mr(r),
          l = i.__key;
        return o !== '{}' && (l = qi(o, l)), { key: l, query: i, variables: r, extensions: n };
      },
      Ss = (e) => {
        for (var t of e.definitions)
          if (t.kind === y5.OPERATION_DEFINITION) return t.name ? t.name.value : void 0;
      },
      Fl = (e, t, n) => {
        if (!('data' in t || ('errors' in t && Array.isArray(t.errors))))
          throw new Error('No Content');
        var r = e.kind === 'subscription';
        return {
          operation: e,
          data: t.data,
          error: Array.isArray(t.errors)
            ? new No({ graphQLErrors: t.errors, response: n })
            : void 0,
          extensions: t.extensions ? { ...t.extensions } : void 0,
          hasNext: t.hasNext == null ? r : t.hasNext,
          stale: !1,
        };
      },
      Qi = (e, t) => {
        if (
          typeof e == 'object' &&
          e != null &&
          (!e.constructor || e.constructor === Object || Array.isArray(e))
        ) {
          e = Array.isArray(e) ? [...e] : { ...e };
          for (var n of Object.keys(t)) e[n] = Qi(e[n], t[n]);
          return e;
        }
        return t;
      },
      D5 = (e, t, n, r) => {
        var i = e.error ? e.error.graphQLErrors : [],
          o = !!e.extensions || !!t.extensions,
          l = { ...e.extensions, ...t.extensions },
          s = t.incremental;
        'path' in t && (s = [t]);
        var c = { data: e.data };
        if (s) {
          var d = function (m) {
            Array.isArray(m.errors) && i.push(...m.errors),
              m.extensions && (Object.assign(l, m.extensions), (o = !0));
            var p = 'data',
              g = c,
              f = [];
            if (m.path) f = m.path;
            else if (r) {
              var y = r.find((S) => S.id === m.id);
              m.subPath ? (f = [...y.path, ...m.subPath]) : (f = y.path);
            }
            for (var k = 0, b = f.length; k < b; p = f[k++])
              g = g[p] = Array.isArray(g[p]) ? [...g[p]] : { ...g[p] };
            if (m.items)
              for (var h = +p >= 0 ? p : 0, v = 0, E = m.items.length; v < E; v++)
                g[h + v] = Qi(g[h + v], m.items[v]);
            else m.data !== void 0 && (g[p] = Qi(g[p], m.data));
          };
          for (var u of s) d(u);
        } else (c.data = t.data || e.data), (i = t.errors || i);
        return {
          operation: e.operation,
          data: c.data,
          error: i.length ? new No({ graphQLErrors: i, response: n }) : void 0,
          extensions: o ? l : void 0,
          hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
          stale: !1,
        };
      },
      xs = (e, t, n) => ({
        operation: e,
        data: void 0,
        error: new No({ networkError: t, response: n }),
        extensions: void 0,
        hasNext: !1,
        stale: !1,
      });
    function z5(e) {
      return {
        query:
          e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss
            ? void 0
            : Fo(e.query),
        operationName: Ss(e.query),
        variables: e.variables || void 0,
        extensions: e.extensions,
      };
    }
    var U5 = (e, t) => {
        var n = e.kind === 'query' && e.context.preferGetMethod;
        if (!n || !t) return e.context.url;
        var r = new URL(e.context.url);
        for (var i in t) {
          var o = t[i];
          o && r.searchParams.set(i, typeof o == 'object' ? mr(o) : o);
        }
        var l = r.toString();
        return l.length > 2047 && n !== 'force'
          ? ((e.context.preferGetMethod = !1), e.context.url)
          : l;
      },
      $5 = (e, t) => {
        if (t && !(e.kind === 'query' && e.context.preferGetMethod)) {
          var n = mr(t),
            r = ((s) => {
              var c = new Map();
              return (pr !== On || hr !== On) && (on.clear(), Yi(c, 'variables', s)), c;
            })(t.variables);
          if (r.size) {
            var i = new FormData();
            i.append('operations', n), i.append('map', mr({ ...[...r.keys()].map((s) => [s]) }));
            var o = 0;
            for (var l of r.values()) i.append('' + o++, l);
            return i;
          }
          return n;
        }
      },
      W5 = (e, t) => {
        var n = {
            accept:
              e.kind === 'subscription'
                ? 'text/event-stream, multipart/mixed'
                : 'application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed',
          },
          r =
            (typeof e.context.fetchOptions == 'function'
              ? e.context.fetchOptions()
              : e.context.fetchOptions) || {};
        if (r.headers) for (var i in r.headers) n[i.toLowerCase()] = r.headers[i];
        var o = $5(e, t);
        return (
          typeof o == 'string' && !n['content-type'] && (n['content-type'] = 'application/json'),
          { ...r, method: o ? 'POST' : 'GET', body: o, headers: n }
        );
      },
      G5 = typeof TextDecoder < 'u' ? new TextDecoder() : null,
      q5 = /boundary="?([^=";]+)"?/i,
      Y5 = /data: ?([^\n]+)/,
      Al = (e) => (e.constructor.name === 'Buffer' ? e.toString() : G5.decode(e));
    async function* Ol(e) {
      if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield Al(t);
      else {
        var n = e.body.getReader(),
          r;
        try {
          for (; !(r = await n.read()).done; ) yield Al(r.value);
        } finally {
          n.cancel();
        }
      }
    }
    async function* Ll(e, t) {
      var n = '',
        r;
      for await (var i of e)
        for (n += i; (r = n.indexOf(t)) > -1; ) yield n.slice(0, r), (n = n.slice(r + t.length));
    }
    async function* Q5(e, t, n) {
      var r = !0,
        i = null,
        o;
      try {
        yield await Promise.resolve();
        var l = (o = await (e.context.fetch || fetch)(t, n)).headers.get('Content-Type') || '',
          s;
        /multipart\/mixed/i.test(l)
          ? (s = (async function* (u, m) {
              var p = u.match(q5),
                g = '--' + (p ? p[1] : '-'),
                f = !0,
                y;
              for await (var k of Ll(
                Ol(m),
                `\r
` + g,
              )) {
                if (f) {
                  f = !1;
                  var b = k.indexOf(g);
                  if (b > -1) k = k.slice(b + g.length);
                  else continue;
                }
                try {
                  yield (y = JSON.parse(
                    k.slice(
                      k.indexOf(`\r
\r
`) + 4,
                    ),
                  ));
                } catch (h) {
                  if (!y) throw h;
                }
                if (y && y.hasNext === !1) break;
              }
              y && y.hasNext !== !1 && (yield { hasNext: !1 });
            })(l, o))
          : /text\/event-stream/i.test(l)
            ? (s = (async function* (u) {
                var m;
                for await (var p of Ll(
                  Ol(u),
                  `

`,
                )) {
                  var g = p.match(Y5);
                  if (g) {
                    var f = g[1];
                    try {
                      yield (m = JSON.parse(f));
                    } catch (y) {
                      if (!m) throw y;
                    }
                    if (m && m.hasNext === !1) break;
                  }
                }
                m && m.hasNext !== !1 && (yield { hasNext: !1 });
              })(o))
            : /text\//i.test(l)
              ? (s = (async function* (u) {
                  var m = await u.text();
                  try {
                    var p = JSON.parse(m);
                    yield p;
                  } catch {
                    throw new Error(m);
                  }
                })(o))
              : (s = (async function* (u) {
                  yield JSON.parse(await u.text());
                })(o));
        var c;
        for await (var d of s)
          d.pending && !i ? (c = d.pending) : d.pending && (c = [...c, ...d.pending]),
            (i = i ? D5(i, d, o, c) : Fl(e, d, o)),
            (r = !1),
            yield i,
            (r = !0);
        i || (yield (i = Fl(e, {}, o)));
      } catch (u) {
        if (!r) throw u;
        yield xs(
          e,
          o && (o.status < 200 || o.status >= 300) && o.statusText ? new Error(o.statusText) : u,
          o,
        );
      }
    }
    function K5(e, t, n) {
      var r;
      return (
        typeof AbortController < 'u' && (n.signal = (r = new AbortController()).signal),
        xo(() => {
          r && r.abort();
        })(Ye((i) => !!i)(vs(Q5(e, t, n))))
      );
    }
    var Ki = (e, t) => {
      if (!e || typeof e != 'object') return e;
      if (Array.isArray(e)) return e.map((i) => Ki(i));
      if (e && typeof e == 'object' && (t || '__typename' in e)) {
        var n = {};
        for (var r in e)
          r === '__typename'
            ? Object.defineProperty(n, '__typename', { enumerable: !1, value: e.__typename })
            : (n[r] = Ki(e[r]));
        return n;
      } else return e;
    };
    function Tl(e) {
      var t = (n) => e(n);
      return (
        (t.toPromise = () => Mo(Hr(1)(Ye((n) => !n.stale && !n.hasNext)(t)))),
        (t.then = (n, r) => t.toPromise().then(n, r)),
        (t.subscribe = (n) => Fn(n)(t)),
        t
      );
    }
    function fr(e, t, n) {
      return { ...t, kind: e, context: t.context ? { ...t.context, ...n } : n || t.context };
    }
    var J5 = () => {},
      X5 =
        ({ forward: e, dispatchDebug: t }) =>
        (n) => {
          var r = cr((o) => {
              var l = z5(o),
                s = U5(o, l),
                c = W5(o, l),
                d = fs(Ye((u) => u.kind === 'teardown' && u.key === o.key)(n))(K5(o, s, c));
              return d;
            })(
              Ye(
                (o) =>
                  o.kind !== 'teardown' &&
                  (o.kind !== 'subscription' || !!o.context.fetchSubscriptions),
              )(n),
            ),
            i = e(
              Ye(
                (o) =>
                  o.kind === 'teardown' ||
                  (o.kind === 'subscription' && !o.context.fetchSubscriptions),
              )(n),
            );
          return ga([r, i]);
        },
      eu =
        (e) =>
        ({ client: t, forward: n, dispatchDebug: r }) =>
          e.reduceRight(
            (i, o) =>
              o({
                client: t,
                forward(l) {
                  return va(i(va(l)));
                },
                dispatchDebug(l) {},
              }),
            n,
          ),
      tu =
        ({ onOperation: e, onResult: t, onError: n }) =>
        ({ forward: r }) =>
        (i) =>
          cr((o) => {
            n && o.error && n(o.error, o.operation);
            var l = (t && t(o)) || o;
            return 'then' in l ? Cl(l) : ma(l);
          })(
            r(
              cr((o) => {
                var l = (e && e(o)) || o;
                return 'then' in l ? Cl(l) : ma(l);
              })(i),
            ),
          ),
      nu =
        ({ dispatchDebug: e }) =>
        (t) =>
          Ye((n) => !1)(t),
      au = function e(t) {
        var n = 0,
          r = new Map(),
          i = new Map(),
          o = new Set(),
          l = [],
          s = {
            url: t.url,
            fetchSubscriptions: t.fetchSubscriptions,
            fetchOptions: t.fetchOptions,
            fetch: t.fetch,
            preferGetMethod: t.preferGetMethod,
            requestPolicy: t.requestPolicy || 'cache-first',
          },
          c = Wi();
        function d(h) {
          (h.kind === 'mutation' || h.kind === 'teardown' || !o.has(h.key)) &&
            (h.kind === 'teardown' ? o.delete(h.key) : h.kind !== 'mutation' && o.add(h.key),
            c.next(h));
        }
        var u = !1;
        function m(h) {
          if ((h && d(h), !u)) {
            for (u = !0; u && (h = l.shift()); ) d(h);
            u = !1;
          }
        }
        var p = (h) => {
            var v = fs(Ye((E) => E.kind === 'teardown' && E.key === h.key)(c.source))(
              Ye(
                (E) =>
                  E.operation.kind === h.kind &&
                  E.operation.key === h.key &&
                  (!E.operation.context._instance ||
                    E.operation.context._instance === h.context._instance),
              )(b),
            );
            return (
              t.maskTypename && (v = Ui((E) => ({ ...E, data: Ki(E.data, !0) }))(v)),
              h.kind !== 'query'
                ? (v = gs((E) => !!E.hasNext, !0)(v))
                : (v = wl((E) => {
                    var S = ma(E);
                    return E.stale || E.hasNext
                      ? S
                      : ga([
                          S,
                          Ui(() => ((E.stale = !0), E))(
                            Hr(1)(Ye((B) => B.key === h.key)(c.source)),
                          ),
                        ]);
                  })(v)),
              h.kind !== 'mutation'
                ? (v = xo(() => {
                    o.delete(h.key), r.delete(h.key), i.delete(h.key), (u = !1);
                    for (var E = l.length - 1; E >= 0; E--) l[E].key === h.key && l.splice(E, 1);
                    d(fr('teardown', h, h.context));
                  })(
                    dr((E) => {
                      if (E.stale) {
                        for (var S of l)
                          if (S.key === E.operation.key) {
                            o.delete(S.key);
                            break;
                          }
                      } else E.hasNext || o.delete(h.key);
                      r.set(h.key, E);
                    })(v),
                  ))
                : (v = $i(() => {
                    d(h);
                  })(v)),
              va(v)
            );
          },
          g = this instanceof e ? this : Object.create(e.prototype),
          f = Object.assign(g, {
            suspense: !!t.suspense,
            operations$: c.source,
            reexecuteOperation(h) {
              if (h.kind === 'teardown') m(h);
              else if (h.kind === 'mutation' || i.has(h.key)) {
                for (var v = !1, E = 0; E < l.length; E++) v = v || l[E].key === h.key;
                v || o.delete(h.key), l.push(h), Promise.resolve().then(m);
              }
            },
            createRequestOperation(h, v, E) {
              return (
                E || (E = {}),
                fr(h, v, {
                  _instance: h === 'mutation' ? (n = (n + 1) | 0) : void 0,
                  ...s,
                  ...E,
                  requestPolicy: E.requestPolicy || s.requestPolicy,
                  suspense: E.suspense || (E.suspense !== !1 && f.suspense),
                })
              );
            },
            executeRequestOperation(h) {
              return h.kind === 'mutation'
                ? Tl(p(h))
                : Tl(
                    h5(() => {
                      var v = i.get(h.key);
                      v || i.set(h.key, (v = p(h))),
                        (v = $i(() => {
                          m(h);
                        })(v));
                      var E = r.get(h.key);
                      return h.kind === 'query' && E && (E.stale || E.hasNext)
                        ? wl(ma)(ga([v, Ye((S) => S === r.get(h.key))(ma(E))]))
                        : v;
                    }),
                  );
            },
            executeQuery(h, v) {
              var E = f.createRequestOperation('query', h, v);
              return f.executeRequestOperation(E);
            },
            executeSubscription(h, v) {
              var E = f.createRequestOperation('subscription', h, v);
              return f.executeRequestOperation(E);
            },
            executeMutation(h, v) {
              var E = f.createRequestOperation('mutation', h, v);
              return f.executeRequestOperation(E);
            },
            readQuery(h, v, E) {
              var S = null;
              return (
                Fn((B) => {
                  S = B;
                })(f.query(h, v, E)).unsubscribe(),
                S
              );
            },
            query: (h, v, E) => f.executeQuery(Mn(h, v), E),
            subscription: (h, v, E) => f.executeSubscription(Mn(h, v), E),
            mutation: (h, v, E) => f.executeMutation(Mn(h, v), E),
          }),
          y = J5,
          k = eu(t.exchanges),
          b = va(k({ client: f, dispatchDebug: y, forward: nu({ dispatchDebug: y }) })(c.source));
        return v5(b), f;
      },
      ki = (e, t) => fr(e.kind, e, { ...e.context, authAttempt: t });
    function ru(e) {
      return ({ client: t, forward: n }) => {
        var r = new Set(),
          i = Wi(),
          o = Wi(),
          l = new Map();
        function s() {
          d = void 0;
          var m = l;
          (l = new Map()), m.forEach(i.next);
        }
        function c(m) {
          d = void 0;
          var p = l;
          (l = new Map()),
            p.forEach((g) => {
              o.next(xs(g, m));
            });
        }
        var d,
          u = null;
        return (m) => {
          function p() {
            d = Promise.resolve()
              .then(() =>
                e({
                  mutate(b, h, v) {
                    var E = t.createRequestOperation('mutation', Mn(b, h), v);
                    return Mo(
                      Hr(1)(
                        Ye(
                          (S) =>
                            S.operation.key === E.key &&
                            E.context._instance === S.operation.context._instance,
                        )(
                          $i(() => {
                            var S = f(E);
                            r.add(S.context._instance), i.next(S);
                          })(k),
                        ),
                      ),
                    );
                  },
                  appendHeaders(b, h) {
                    var v =
                      typeof b.context.fetchOptions == 'function'
                        ? b.context.fetchOptions()
                        : b.context.fetchOptions || {};
                    return fr(b.kind, b, {
                      ...b.context,
                      fetchOptions: { ...v, headers: { ...v.headers, ...h } },
                    });
                  },
                }),
              )
              .then((b) => {
                b && (u = b), s();
              })
              .catch((b) => {
                c(b);
              });
          }
          p();
          function g(b) {
            l.set(b.key, ki(b, !0)), u && !d && (d = u.refreshAuth().then(s).catch(c));
          }
          function f(b) {
            return u ? u.addAuthToOperation(b) : b;
          }
          var y = Ye(Boolean)(
              Ui((b) =>
                b.kind === 'teardown'
                  ? (l.delete(b.key), b)
                  : b.context._instance && r.has(b.context._instance)
                    ? b
                    : b.context.authAttempt
                      ? f(b)
                      : d || !u
                        ? (d || p(), l.has(b.key) || l.set(b.key, ki(b, !1)), null)
                        : (function (h) {
                              return (
                                !h.context.authAttempt && u && u.willAuthError && u.willAuthError(h)
                              );
                            })(b)
                          ? (g(b), null)
                          : f(ki(b, !1)),
              )(ga([i.source, m])),
            ),
            k = n(y);
          return ga([
            o.source,
            Ye((b) =>
              !r.has(b.operation.context._instance) &&
              b.error &&
              (function (h) {
                return u && u.didAuthError && u.didAuthError(h.error, h.operation);
              })(b) &&
              !b.operation.context.authAttempt
                ? (g(b.operation), !1)
                : (r.has(b.operation.context._instance) && r.delete(b.operation.context._instance),
                  !0),
            )(k),
          ]);
        };
      };
    }
    var iu = {},
      zr = Je(iu),
      ou = zr.Provider;
    zr.Consumer;
    zr.displayName = 'UrqlContext';
    var Ao = () => {
        var e = Xt(zr);
        return e;
      },
      Ji = {
        fetching: !1,
        stale: !1,
        error: void 0,
        data: void 0,
        extensions: void 0,
        operation: void 0,
      },
      lu = (e, t) => e === t || !(!e || !t || e.key !== t.key),
      wi = (e, t) => {
        var n = {
          ...e,
          ...t,
          data: t.data !== void 0 || t.error ? t.data : e.data,
          fetching: !!t.fetching,
          stale: !!t.stale,
        };
        return ((r, i) => {
          for (var o in r) if (!(o in i)) return !0;
          for (var l in i) if (l === 'operation' ? !lu(r[l], i[l]) : r[l] !== i[l]) return !0;
          return !1;
        })(e, n)
          ? n
          : e;
      },
      su = (e, t) => {
        for (var n = 0, r = t.length; n < r; n++) if (e[n] !== t[n]) return !0;
        return !1;
      };
    function gr(e, t) {
      e(t);
    }
    function Ms(e) {
      var t = Pe(!0),
        n = Ao(),
        [r, i] = Re(Ji),
        o = W(
          (l, s) => (
            gr(i, { ...Ji, fetching: !0 }),
            Mo(
              Hr(1)(
                Ye((c) => !c.hasNext)(
                  dr((c) => {
                    t.current &&
                      gr(i, {
                        fetching: !1,
                        stale: c.stale,
                        data: c.data,
                        error: c.error,
                        extensions: c.extensions,
                        operation: c.operation,
                      });
                  })(n.executeMutation(Mn(e, l), s || {})),
                ),
              ),
            )
          ),
          [n, e, i],
        );
      return (
        oe(
          () => (
            (t.current = !0),
            () => {
              t.current = !1;
            }
          ),
          [],
        ),
        [r, o]
      );
    }
    function cu(e, t) {
      var n = Pe(void 0);
      return jt(() => {
        var r = Mn(e, t);
        return n.current !== void 0 && n.current.key === r.key ? n.current : ((n.current = r), r);
      }, [e, t]);
    }
    var du = (e) => {
        if (!e._react) {
          var t = new Set(),
            n = new Map();
          e.operations$ &&
            Fn((r) => {
              r.kind === 'teardown' && t.has(r.key) && (t.delete(r.key), n.delete(r.key));
            })(e.operations$),
            (e._react = {
              get: (r) => n.get(r),
              set(r, i) {
                t.delete(r), n.set(r, i);
              },
              dispose(r) {
                t.add(r);
              },
            });
        }
        return e._react;
      },
      uu = (e, t) => (t && t.suspense !== void 0 ? !!t.suspense : e.suspense);
    function Oo(e) {
      var t = Ao(),
        n = du(t),
        r = uu(t, e.context),
        i = cu(e.query, e.variables),
        o = jt(() => {
          if (e.pause) return null;
          var p = t.executeQuery(i, { requestPolicy: e.requestPolicy, ...e.context });
          return r
            ? dr((g) => {
                n.set(i.key, g);
              })(p)
            : p;
        }, [n, t, i, r, e.pause, e.requestPolicy, e.context]),
        l = W(
          (p, g) => {
            if (!p) return { fetching: !1 };
            var f = n.get(i.key);
            if (f) {
              if (g && f != null && 'then' in f) throw f;
            } else {
              var y,
                k = Fn((h) => {
                  (f = h), y && y(f);
                })(gs(() => (g && !y) || !f)(p));
              if (f == null && g) {
                var b = new Promise((h) => {
                  y = h;
                });
                throw (n.set(i.key, b), b);
              } else k.unsubscribe();
            }
            return f || { fetching: !0 };
          },
          [n, i],
        ),
        s = [t, i, e.requestPolicy, e.context, e.pause],
        [c, d] = Re(() => [o, wi(Ji, l(o, r)), s]),
        u = c[1];
      o !== c[0] && su(c[2], s) && d([o, (u = wi(c[1], l(o, r))), s]),
        oe(() => {
          var p = c[0],
            g = c[2][1],
            f = !1,
            y = (b) => {
              (f = !0),
                gr(d, (h) => {
                  var v = wi(h[1], b);
                  return h[1] !== v ? [h[0], v, h[2]] : h;
                });
            };
          if (p) {
            var k = Fn(y)(
              xo(() => {
                y({ fetching: !1 });
              })(p),
            );
            return (
              f || y({ fetching: !0 }),
              () => {
                n.dispose(g.key), k.unsubscribe();
              }
            );
          } else y({ fetching: !1 });
        }, [n, c[0], c[2][1]]);
      var m = W(
        (p) => {
          var g = { requestPolicy: e.requestPolicy, ...e.context, ...p };
          gr(d, (f) => [
            r
              ? dr((y) => {
                  n.set(i.key, y);
                })(t.executeQuery(i, g))
              : t.executeQuery(i, g),
            f[1],
            s,
          ]);
        },
        [t, n, i, r, e.requestPolicy, e.context, e.pause],
      );
      return [u, m];
    }
    var qa,
      mu = new Uint8Array(16);
    function pu() {
      if (
        !qa &&
        ((qa =
          typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
        !qa)
      )
        throw new Error(
          'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
        );
      return qa(mu);
    }
    var Be = [];
    for (let e = 0; e < 256; ++e) Be.push((e + 256).toString(16).slice(1));
    function hu(e, t = 0) {
      return (
        Be[e[t + 0]] +
        Be[e[t + 1]] +
        Be[e[t + 2]] +
        Be[e[t + 3]] +
        '-' +
        Be[e[t + 4]] +
        Be[e[t + 5]] +
        '-' +
        Be[e[t + 6]] +
        Be[e[t + 7]] +
        '-' +
        Be[e[t + 8]] +
        Be[e[t + 9]] +
        '-' +
        Be[e[t + 10]] +
        Be[e[t + 11]] +
        Be[e[t + 12]] +
        Be[e[t + 13]] +
        Be[e[t + 14]] +
        Be[e[t + 15]]
      );
    }
    var fu = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      _l = { randomUUID: fu };
    function gu(e, t, n) {
      if (_l.randomUUID && !t && !e) return _l.randomUUID();
      e = e || {};
      let r = e.random || (e.rng || pu)();
      if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let i = 0; i < 16; ++i) t[n + i] = r[i];
        return t;
      }
      return hu(r);
    }
    var vu = gu,
      kt,
      pa,
      vr = (e) => {
        try {
          let { exp: t } = e ? JSON.parse(atob(e.split('.')[1])) : { exp: null };
          (kt = e), (pa = t);
        } catch {
          (kt = null), (pa = null);
        }
        kt ? localStorage.setItem(Hi, kt) : localStorage.removeItem(Hi);
      };
    vr(localStorage.getItem(Hi));
    var Ns = () => {
        let [{ token: e }, t] = nl(`${U}/accessToken`, { token: kt }),
          n = a.useCallback(
            (r) => {
              vr(r), t({ token: kt });
            },
            [t],
          );
        return [e, n];
      },
      yu = vu(),
      Fs = (e) => ({
        headers: {
          Accept: '*/*',
          ...(e && { Authorization: `Bearer ${e}` }),
          'X-Chromatic-Session-ID': yu,
        },
      }),
      bu = new au({
        url: Dd,
        exchanges: [
          tu({
            onResult(e) {
              e.data?.viewer === null && vr(null);
            },
          }),
          ru(async (e) => ({
            addAuthToOperation(t) {
              return kt ? e.appendHeaders(t, { Authorization: `Bearer ${kt}` }) : t;
            },
            didAuthError: (t) =>
              t.response.status === 401 ||
              t.graphQLErrors.some((n) => n.message.includes('Must login')),
            async refreshAuth() {
              vr(null);
            },
            willAuthError() {
              if (!kt) return !0;
              try {
                if (!pa) {
                  let { exp: t } = JSON.parse(atob(kt.split('.')[1]));
                  pa = t;
                }
                return Date.now() / 1e3 > (pa || 0);
              } catch {
                return !0;
              }
            },
          })),
          X5,
        ],
        fetchOptions: Fs(),
      }),
      Ot = (e, t) => {
        let n = Xt(e);
        if (n == null) throw new Error(`Missing context value for ${t}`);
        return n;
      },
      Ur = Je(null),
      Eu = ({ children: e, value: t }) => a.createElement(Ur.Provider, { value: t }, e),
      tt = (e, t) => {
        let n = Ot(Ur, 'Telemetry');
        oe(() => n({ location: e, screen: t }), [e, t, n]);
      },
      As = ({ localBuildProgress: e, accessToken: t }) => {
        let n = di({}),
          r = Xt(Ur),
          [i, o] = Re(!1),
          [l, s] = Re(!1),
          c = e ? ['initialize', 'build', 'upload'].includes(e?.currentStep) : !1,
          d = e ? !['aborted', 'complete', 'error', 'limited'].includes(e.currentStep) : i,
          u = W(() => {
            s(!1), o(!0), n(Wd, { accessToken: t }), r?.({ action: 'startBuild' });
          }, [t, n, r]),
          m = W(() => {
            c ? (o(!1), n(Gd), r?.({ action: 'stopBuild' })) : s(!0);
          }, [c, n, r]);
        return (
          oe(() => {
            let p = i && setTimeout(() => o(!1), 5e3);
            return () => {
              p && clearTimeout(p);
            };
          }, [i]),
          { isDisallowed: l, isRunning: d, startBuild: u, stopBuild: m }
        );
      },
      Zl = 'experimental_useSharedState_getValue',
      Ya = 'experimental_useSharedState_setValue',
      Ci = new Map(),
      Os = class {
        constructor(e) {
          (this.channel = e),
            (this.listeners = []),
            (this.state = {}),
            this.channel.on(Ya, (t, n, r) => {
              this.state?.[t]?.index >= r || (this.state[t] = { index: r, value: n });
            }),
            this.channel.on(Zl, (t) => {
              let n = this.state[t]?.index ?? 0,
                r = this.state[t]?.value;
              this.channel.emit(Ya, t, r, n);
            });
        }
        get(e) {
          return this.state[e] || this.channel.emit(Zl, e), this.state[e]?.value;
        }
        set(e, t) {
          let n = (this.state[e]?.index ?? 0) + 1;
          (this.state[e] = { index: n, value: t }), this.channel.emit(Ya, e, t, n);
        }
        static subscribe(e, t) {
          let n = Ci.get(e) || new Os(t);
          return (
            Ci.has(e) ||
              (Ci.set(e, n),
              n.channel.on(Ya, (r, i) => {
                r === e && n.listeners.forEach((o) => o(i));
              })),
            {
              get value() {
                return n.get(e);
              },
              set value(r) {
                n.set(e, r);
              },
              on(r, i) {
                if (r !== 'change') throw new Error('unsupported event');
                n.listeners.push(i);
              },
              off(r, i) {
                if (r !== 'change') throw new Error('unsupported event');
                let o = n.listeners.indexOf(i);
                o >= 0 && n.listeners.splice(o, 1);
              },
            }
          );
        }
      };
    function Ie(e) {
      let t = vn().getChannel();
      if (!t) throw new Error('Channel not available');
      let n = Pe(Os.subscribe(e, t)),
        [r, i] = Re(n.current.value);
      return (
        oe(() => {
          let o = n.current;
          return o.on('change', i), () => o.off('change', i);
        }, [n]),
        [
          r,
          W((o) => {
            i(o), (n.current.value = o);
          }, []),
        ]
      );
    }
    var Ls = () => {
        let [e, t] = Ie(ds),
          { projectId: n, written: r, dismissed: i, configFile: o } = e || {};
        return {
          loading: !e,
          projectId: n,
          configFile: o,
          updateProject: W((l) => t({ ...e, projectId: l, dismissed: !1 }), [e, t]),
          projectUpdatingFailed: !i && r === !1,
          projectIdUpdated: !i && r === !0,
          clearProjectIdUpdated: W(() => t({ ...e, dismissed: !0 }), [e, t]),
        };
      },
      Xi = ['initialize', 'build', 'upload', 'verify', 'snapshot'],
      Ts = {
        initialize: {
          key: 'initialize',
          emoji: '\u{1F680}',
          renderName: () => 'Initialize build',
          renderProgress: () => 'Initializing build...',
          renderComplete: () => 'Initialized',
          estimateDuration: 2e3,
        },
        build: {
          key: 'build',
          emoji: '\u{1F3D7}',
          renderName: () => 'Build Storybook',
          renderProgress: () => 'Building your Storybook...',
          renderComplete: () => 'Storybook built',
          estimateDuration: 2e4,
        },
        upload: {
          key: 'upload',
          emoji: '\u{1F4E1}',
          renderName: () => 'Publish your Storybook',
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.upload;
            if (!n || !t) return 'Uploading files...';
            let { value: r, exponent: i } = gi(n, { output: 'object', round: 1 }),
              { value: o, symbol: l } = gi(t, { exponent: i, output: 'object', round: 1 });
            return `Uploading files (${o}/${r} ${l})...`;
          },
          renderComplete: () => 'Publish complete',
          estimateDuration: 2e4,
        },
        verify: {
          key: 'verify',
          emoji: '\u{1F50D}',
          renderName: () => 'Verify your Storybook',
          renderProgress: () => 'Verifying contents...',
          renderComplete: () => 'Storybook verified',
          estimateDuration: 2e4,
        },
        snapshot: {
          key: 'snapshot',
          emoji: '\u{1F4F8}',
          renderName: () => 'Run visual tests',
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.snapshot;
            return n ? `Running visual tests (${t}/${n})...` : 'Running visual tests...';
          },
          renderComplete: () => 'Tested your stories',
          estimateDuration: 9e4,
        },
        aborted: {
          key: 'aborted',
          emoji: '\u270B',
          renderName: () => 'Build canceled',
          renderProgress: () => 'Build canceled',
          renderComplete: () => 'Build canceled',
          estimateDuration: 0,
        },
        complete: {
          key: 'complete',
          emoji: '\u{1F389}',
          renderName: () => 'Visual tests completed!',
          renderProgress: () => 'Visual tests completed!',
          renderComplete: () => 'Visual tests completed!',
          estimateDuration: 0,
        },
        error: {
          key: 'error',
          emoji: '\u{1F6A8}',
          renderName: () => 'Build failed',
          renderProgress: () => 'Build failed',
          renderComplete: () => 'Build failed',
          estimateDuration: 0,
        },
        limited: {
          key: 'error',
          emoji: '\u{1F6A8}',
          renderName: () => 'Build limited',
          renderProgress: () => 'Build limited',
          renderComplete: () => 'Build limited',
          estimateDuration: 0,
        },
      },
      ku = {
        buildProgressPercentage: 0,
        currentStep: Xi[0],
        stepProgress: Object.fromEntries(Xi.map((e) => [e, {}])),
      };
    JSON.stringify(ku);
    var G = w.div(
        ({ center: e, small: t, block: n, theme: r }) => ({
          display: n ? 'block' : 'inline-block',
          color: r.color.defaultText,
          fontSize: t ? r.typography.size.s1 : r.typography.size.s2,
          lineHeight: t ? '18px' : '20px',
          textAlign: e ? 'center' : 'left',
          textWrap: 'balance',
        }),
        ({ muted: e, theme: t }) => e && { color: t.base === 'light' ? t.color.dark : '#C9CDCF' },
        ({ theme: e }) => ({
          b: { color: e.color.defaultText },
          code: {
            fontSize: e.typography.size.s1,
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: 3,
            padding: 2,
          },
          small: { fontSize: e.typography.size.s1 },
          span: { whiteSpace: 'nowrap' },
          svg: { verticalAlign: 'top' },
        }),
      ),
      Lo = ({ localBuildProgress: e, withEmoji: t = !1, ...n }) => {
        let { emoji: r, renderProgress: i } = Ts[e.currentStep],
          o = i(e);
        return a.createElement(G, { ...n }, t && r, ' ', o);
      };
    function yr() {
      return (
        (yr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        yr.apply(this, arguments)
      );
    }
    function wu(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function ya(e, t) {
      return (
        (ya = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        ya(e, t)
      );
    }
    function Cu(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), ya(e, t);
    }
    function eo(e) {
      return (
        (eo = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        eo(e)
      );
    }
    function Su(e) {
      try {
        return Function.toString.call(e).indexOf('[native code]') !== -1;
      } catch {
        return typeof e == 'function';
      }
    }
    function _s() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      } catch {}
      return (_s = function () {
        return !!e;
      })();
    }
    function xu(e, t, n) {
      if (_s()) return Reflect.construct.apply(null, arguments);
      var r = [null];
      r.push.apply(r, t);
      var i = new (e.bind.apply(e, r))();
      return n && ya(i, n.prototype), i;
    }
    function to(e) {
      var t = typeof Map == 'function' ? new Map() : void 0;
      return (
        (to = function (n) {
          if (n === null || !Su(n)) return n;
          if (typeof n != 'function')
            throw new TypeError('Super expression must either be null or a function');
          if (typeof t < 'u') {
            if (t.has(n)) return t.get(n);
            t.set(n, r);
          }
          function r() {
            return xu(n, arguments, eo(this).constructor);
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            ya(r, n)
          );
        }),
        to(e)
      );
    }
    var wt = (function (e) {
      Cu(t, e);
      function t(n) {
        var r;
        return (
          (r =
            e.call(
              this,
              'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
                n +
                ' for more information.',
            ) || this),
          wu(r)
        );
      }
      return t;
    })(to(Error));
    function Si(e) {
      return Math.round(e * 255);
    }
    function Mu(e, t, n) {
      return Si(e) + ',' + Si(t) + ',' + Si(n);
    }
    function ba(e, t, n, r) {
      if ((r === void 0 && (r = Mu), t === 0)) return r(n, n, n);
      var i = (((e % 360) + 360) % 360) / 60,
        o = (1 - Math.abs(2 * n - 1)) * t,
        l = o * (1 - Math.abs((i % 2) - 1)),
        s = 0,
        c = 0,
        d = 0;
      i >= 0 && i < 1
        ? ((s = o), (c = l))
        : i >= 1 && i < 2
          ? ((s = l), (c = o))
          : i >= 2 && i < 3
            ? ((c = o), (d = l))
            : i >= 3 && i < 4
              ? ((c = l), (d = o))
              : i >= 4 && i < 5
                ? ((s = l), (d = o))
                : i >= 5 && i < 6 && ((s = o), (d = l));
      var u = n - o / 2,
        m = s + u,
        p = c + u,
        g = d + u;
      return r(m, p, g);
    }
    var Il = {
      aliceblue: 'f0f8ff',
      antiquewhite: 'faebd7',
      aqua: '00ffff',
      aquamarine: '7fffd4',
      azure: 'f0ffff',
      beige: 'f5f5dc',
      bisque: 'ffe4c4',
      black: '000',
      blanchedalmond: 'ffebcd',
      blue: '0000ff',
      blueviolet: '8a2be2',
      brown: 'a52a2a',
      burlywood: 'deb887',
      cadetblue: '5f9ea0',
      chartreuse: '7fff00',
      chocolate: 'd2691e',
      coral: 'ff7f50',
      cornflowerblue: '6495ed',
      cornsilk: 'fff8dc',
      crimson: 'dc143c',
      cyan: '00ffff',
      darkblue: '00008b',
      darkcyan: '008b8b',
      darkgoldenrod: 'b8860b',
      darkgray: 'a9a9a9',
      darkgreen: '006400',
      darkgrey: 'a9a9a9',
      darkkhaki: 'bdb76b',
      darkmagenta: '8b008b',
      darkolivegreen: '556b2f',
      darkorange: 'ff8c00',
      darkorchid: '9932cc',
      darkred: '8b0000',
      darksalmon: 'e9967a',
      darkseagreen: '8fbc8f',
      darkslateblue: '483d8b',
      darkslategray: '2f4f4f',
      darkslategrey: '2f4f4f',
      darkturquoise: '00ced1',
      darkviolet: '9400d3',
      deeppink: 'ff1493',
      deepskyblue: '00bfff',
      dimgray: '696969',
      dimgrey: '696969',
      dodgerblue: '1e90ff',
      firebrick: 'b22222',
      floralwhite: 'fffaf0',
      forestgreen: '228b22',
      fuchsia: 'ff00ff',
      gainsboro: 'dcdcdc',
      ghostwhite: 'f8f8ff',
      gold: 'ffd700',
      goldenrod: 'daa520',
      gray: '808080',
      green: '008000',
      greenyellow: 'adff2f',
      grey: '808080',
      honeydew: 'f0fff0',
      hotpink: 'ff69b4',
      indianred: 'cd5c5c',
      indigo: '4b0082',
      ivory: 'fffff0',
      khaki: 'f0e68c',
      lavender: 'e6e6fa',
      lavenderblush: 'fff0f5',
      lawngreen: '7cfc00',
      lemonchiffon: 'fffacd',
      lightblue: 'add8e6',
      lightcoral: 'f08080',
      lightcyan: 'e0ffff',
      lightgoldenrodyellow: 'fafad2',
      lightgray: 'd3d3d3',
      lightgreen: '90ee90',
      lightgrey: 'd3d3d3',
      lightpink: 'ffb6c1',
      lightsalmon: 'ffa07a',
      lightseagreen: '20b2aa',
      lightskyblue: '87cefa',
      lightslategray: '789',
      lightslategrey: '789',
      lightsteelblue: 'b0c4de',
      lightyellow: 'ffffe0',
      lime: '0f0',
      limegreen: '32cd32',
      linen: 'faf0e6',
      magenta: 'f0f',
      maroon: '800000',
      mediumaquamarine: '66cdaa',
      mediumblue: '0000cd',
      mediumorchid: 'ba55d3',
      mediumpurple: '9370db',
      mediumseagreen: '3cb371',
      mediumslateblue: '7b68ee',
      mediumspringgreen: '00fa9a',
      mediumturquoise: '48d1cc',
      mediumvioletred: 'c71585',
      midnightblue: '191970',
      mintcream: 'f5fffa',
      mistyrose: 'ffe4e1',
      moccasin: 'ffe4b5',
      navajowhite: 'ffdead',
      navy: '000080',
      oldlace: 'fdf5e6',
      olive: '808000',
      olivedrab: '6b8e23',
      orange: 'ffa500',
      orangered: 'ff4500',
      orchid: 'da70d6',
      palegoldenrod: 'eee8aa',
      palegreen: '98fb98',
      paleturquoise: 'afeeee',
      palevioletred: 'db7093',
      papayawhip: 'ffefd5',
      peachpuff: 'ffdab9',
      peru: 'cd853f',
      pink: 'ffc0cb',
      plum: 'dda0dd',
      powderblue: 'b0e0e6',
      purple: '800080',
      rebeccapurple: '639',
      red: 'f00',
      rosybrown: 'bc8f8f',
      royalblue: '4169e1',
      saddlebrown: '8b4513',
      salmon: 'fa8072',
      sandybrown: 'f4a460',
      seagreen: '2e8b57',
      seashell: 'fff5ee',
      sienna: 'a0522d',
      silver: 'c0c0c0',
      skyblue: '87ceeb',
      slateblue: '6a5acd',
      slategray: '708090',
      slategrey: '708090',
      snow: 'fffafa',
      springgreen: '00ff7f',
      steelblue: '4682b4',
      tan: 'd2b48c',
      teal: '008080',
      thistle: 'd8bfd8',
      tomato: 'ff6347',
      turquoise: '40e0d0',
      violet: 'ee82ee',
      wheat: 'f5deb3',
      white: 'fff',
      whitesmoke: 'f5f5f5',
      yellow: 'ff0',
      yellowgreen: '9acd32',
    };
    function Nu(e) {
      if (typeof e != 'string') return e;
      var t = e.toLowerCase();
      return Il[t] ? '#' + Il[t] : e;
    }
    var Fu = /^#[a-fA-F0-9]{6}$/,
      Au = /^#[a-fA-F0-9]{8}$/,
      Ou = /^#[a-fA-F0-9]{3}$/,
      Lu = /^#[a-fA-F0-9]{4}$/,
      xi = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      Tu =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      _u =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      Zu =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Zs(e) {
      if (typeof e != 'string') throw new wt(3);
      var t = Nu(e);
      if (t.match(Fu))
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
        };
      if (t.match(Au)) {
        var n = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[2], 16),
          green: parseInt('' + t[3] + t[4], 16),
          blue: parseInt('' + t[5] + t[6], 16),
          alpha: n,
        };
      }
      if (t.match(Ou))
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
        };
      if (t.match(Lu)) {
        var r = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt('' + t[1] + t[1], 16),
          green: parseInt('' + t[2] + t[2], 16),
          blue: parseInt('' + t[3] + t[3], 16),
          alpha: r,
        };
      }
      var i = xi.exec(t);
      if (i)
        return {
          red: parseInt('' + i[1], 10),
          green: parseInt('' + i[2], 10),
          blue: parseInt('' + i[3], 10),
        };
      var o = Tu.exec(t.substring(0, 50));
      if (o)
        return {
          red: parseInt('' + o[1], 10),
          green: parseInt('' + o[2], 10),
          blue: parseInt('' + o[3], 10),
          alpha: parseFloat('' + o[4]) > 1 ? parseFloat('' + o[4]) / 100 : parseFloat('' + o[4]),
        };
      var l = _u.exec(t);
      if (l) {
        var s = parseInt('' + l[1], 10),
          c = parseInt('' + l[2], 10) / 100,
          d = parseInt('' + l[3], 10) / 100,
          u = 'rgb(' + ba(s, c, d) + ')',
          m = xi.exec(u);
        if (!m) throw new wt(4, t, u);
        return {
          red: parseInt('' + m[1], 10),
          green: parseInt('' + m[2], 10),
          blue: parseInt('' + m[3], 10),
        };
      }
      var p = Zu.exec(t.substring(0, 50));
      if (p) {
        var g = parseInt('' + p[1], 10),
          f = parseInt('' + p[2], 10) / 100,
          y = parseInt('' + p[3], 10) / 100,
          k = 'rgb(' + ba(g, f, y) + ')',
          b = xi.exec(k);
        if (!b) throw new wt(4, t, k);
        return {
          red: parseInt('' + b[1], 10),
          green: parseInt('' + b[2], 10),
          blue: parseInt('' + b[3], 10),
          alpha: parseFloat('' + p[4]) > 1 ? parseFloat('' + p[4]) / 100 : parseFloat('' + p[4]),
        };
      }
      throw new wt(5);
    }
    function Iu(e) {
      var t = e.red / 255,
        n = e.green / 255,
        r = e.blue / 255,
        i = Math.max(t, n, r),
        o = Math.min(t, n, r),
        l = (i + o) / 2;
      if (i === o)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: l, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: l };
      var s,
        c = i - o,
        d = l > 0.5 ? c / (2 - i - o) : c / (i + o);
      switch (i) {
        case t:
          s = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          s = (r - t) / c + 2;
          break;
        default:
          s = (t - n) / c + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: d, lightness: l, alpha: e.alpha }
          : { hue: s, saturation: d, lightness: l }
      );
    }
    function Is(e) {
      return Iu(Zs(e));
    }
    var Ru = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? '#' + e[1] + e[3] + e[5]
          : e;
      },
      no = Ru;
    function tn(e) {
      var t = e.toString(16);
      return t.length === 1 ? '0' + t : t;
    }
    function Mi(e) {
      return tn(Math.round(e * 255));
    }
    function Bu(e, t, n) {
      return no('#' + Mi(e) + Mi(t) + Mi(n));
    }
    function br(e, t, n) {
      return ba(e, t, n, Bu);
    }
    function Pu(e, t, n) {
      if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number') return br(e, t, n);
      if (typeof e == 'object' && t === void 0 && n === void 0)
        return br(e.hue, e.saturation, e.lightness);
      throw new wt(1);
    }
    function Vu(e, t, n, r) {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof n == 'number' &&
        typeof r == 'number'
      )
        return r >= 1 ? br(e, t, n) : 'rgba(' + ba(e, t, n) + ',' + r + ')';
      if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
        return e.alpha >= 1
          ? br(e.hue, e.saturation, e.lightness)
          : 'rgba(' + ba(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')';
      throw new wt(2);
    }
    function ao(e, t, n) {
      if (typeof e == 'number' && typeof t == 'number' && typeof n == 'number')
        return no('#' + tn(e) + tn(t) + tn(n));
      if (typeof e == 'object' && t === void 0 && n === void 0)
        return no('#' + tn(e.red) + tn(e.green) + tn(e.blue));
      throw new wt(6);
    }
    function ro(e, t, n, r) {
      if (typeof e == 'string' && typeof t == 'number') {
        var i = Zs(e);
        return 'rgba(' + i.red + ',' + i.green + ',' + i.blue + ',' + t + ')';
      } else {
        if (
          typeof e == 'number' &&
          typeof t == 'number' &&
          typeof n == 'number' &&
          typeof r == 'number'
        )
          return r >= 1 ? ao(e, t, n) : 'rgba(' + e + ',' + t + ',' + n + ',' + r + ')';
        if (typeof e == 'object' && t === void 0 && n === void 0 && r === void 0)
          return e.alpha >= 1
            ? ao(e.red, e.green, e.blue)
            : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')';
      }
      throw new wt(7);
    }
    var ju = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      Hu = function (e) {
        return (
          typeof e.red == 'number' &&
          typeof e.green == 'number' &&
          typeof e.blue == 'number' &&
          typeof e.alpha == 'number'
        );
      },
      Du = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          (typeof e.alpha != 'number' || typeof e.alpha > 'u')
        );
      },
      zu = function (e) {
        return (
          typeof e.hue == 'number' &&
          typeof e.saturation == 'number' &&
          typeof e.lightness == 'number' &&
          typeof e.alpha == 'number'
        );
      };
    function Rs(e) {
      if (typeof e != 'object') throw new wt(8);
      if (Hu(e)) return ro(e);
      if (ju(e)) return ao(e);
      if (zu(e)) return Vu(e);
      if (Du(e)) return Pu(e);
      throw new wt(8);
    }
    function Bs(e, t, n) {
      return function () {
        var r = n.concat(Array.prototype.slice.call(arguments));
        return r.length >= t ? e.apply(this, r) : Bs(e, t, r);
      };
    }
    function Ps(e) {
      return Bs(e, e.length, []);
    }
    function Vs(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }
    function Uu(e, t) {
      if (t === 'transparent') return t;
      var n = Is(t);
      return Rs(yr({}, n, { lightness: Vs(0, 1, n.lightness - parseFloat(e)) }));
    }
    var $u = Ps(Uu),
      nn = $u;
    function Wu(e, t) {
      if (t === 'transparent') return t;
      var n = Is(t);
      return Rs(yr({}, n, { lightness: Vs(0, 1, n.lightness + parseFloat(e)) }));
    }
    var Gu = Ps(Wu),
      lr = Gu,
      z = {
        primary: '#FF4785',
        secondary: '#029CFD',
        tertiary: '#E3E6E8',
        orange: '#FC521F',
        gold: '#FFAE00',
        green: '#66BF3C',
        seafoam: '#37D5D3',
        purple: '#6F2CAC',
        ultraviolet: '#2A0481',
        red: '#ff4400',
        bluelight: '#E3F3FF',
        bluelighter: '#F5FBFF',
        lightest: '#FFFFFF',
        lighter: '#F7FAFC',
        light: '#EEF3F6',
        mediumlight: '#ECF4F9',
        medium: '#D9E8F2',
        mediumdark: '#73828C',
        dark: '#5C6870',
        darker: '#454E54',
        darkest: '#2E3438',
        tr10: 'rgba(0, 0, 0, 0.1)',
        tr5: 'rgba(0, 0, 0, 0.05)',
        border: 'hsla(203, 50%, 30%, 0.15)',
        positive: '#448028',
        negative: '#D43900',
        warning: '#A15C20',
        selected: '#0271B6',
      },
      To = {
        padding: { small: 10, medium: 20, large: 30 },
        borderRadius: { small: 5, default: 10 },
      },
      D = {
        type: {
          primary:
            'var(--nunito-sans, "Nunito Sans"), "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: { regular: '400', bold: '700', extrabold: '800' },
        size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
      },
      Qa = 600,
      Ka = 5.55555;
    he({
      padding: `0 ${To.padding.medium}px`,
      [`@media (min-width: ${Qa * 1}px)`]: { margin: `0 ${Ka * 1}%` },
      [`@media (min-width: ${Qa * 2}px)`]: { margin: `0 ${Ka * 2}%` },
      [`@media (min-width: ${Qa * 3}px)`]: { margin: `0 ${Ka * 3}%` },
      [`@media (min-width: ${Qa * 4}px)`]: { margin: `0 ${Ka * 4}%` },
    });
    he({
      border: `1px solid ${z.border}`,
      borderRadius: `${To.borderRadius.small}px`,
      transition: 'background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out',
      '&:hover, &.__hover': {
        borderColor: `${ro(z.secondary, 0.5)}`,
        transform: 'translate3d(0, -3px, 0)',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0 3px 10px 0',
      },
      '&:active, &.__active': {
        borderColor: `${ro(z.secondary, 1)}`,
        transform: 'translate3d(0, 0, 0)',
      },
    });
    he({ fontSize: D.size.l3, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.l2, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.l1, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.m3, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.m2, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.m1, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.s3, fontWeight: D.weight.bold }),
      he({ fontSize: D.size.s2, fontWeight: D.weight.bold });
    he({
      fontSize: 14,
      fontWeight: D.weight.extrabold,
      lineHeight: '18px',
      letterSpacing: '0.38em',
    }),
      he({
        fontSize: 11,
        fontWeight: D.weight.extrabold,
        lineHeight: '16px',
        letterSpacing: '0.38em',
      });
    he({ fontSize: 14, fontWeight: D.weight.bold, lineHeight: '18px' }),
      he({ fontSize: 14, fontWeight: D.weight.regular, lineHeight: '18px' }),
      he({ fontSize: D.size.s3, fontWeight: D.weight.bold, lineHeight: '24px' }),
      he({ fontSize: D.size.s1, fontWeight: D.weight.regular, lineHeight: '18px' }),
      he({ fontSize: D.size.s2, fontWeight: D.weight.bold, lineHeight: '20px' }),
      he({ fontSize: D.size.s1, fontWeight: D.weight.bold, lineHeight: '18px' }),
      he({ fontSize: D.size.s3, fontWeight: D.weight.regular, lineHeight: '24px' }),
      he({ fontSize: D.size.s2, fontWeight: D.weight.regular, lineHeight: '20px' });
    he({
      fontFamily: D.type.code,
      fontSize: D.size.s2,
      fontWeight: D.weight.regular,
      lineHeight: '17px',
    }),
      he({
        fontFamily: D.type.code,
        fontSize: D.size.s1,
        fontWeight: D.weight.regular,
        lineHeight: '14px',
      });
    var js = Ht({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } }),
      Hs = Ht({ '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.4 } });
    Ht({
      '0%': { transform: 'translateY(1px)' },
      '25%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-3px)' },
      '100%': { transform: 'translateY(1px)' },
    });
    var Ds = Ht({
      '0%, 100%': { transform: 'translate3d(0,0,0)' },
      '12.5%, 62.5%': { transform: 'translate3d(-4px,0,0)' },
      '37.5%, 87.5%': { transform: 'translate3d(4px,0,0)' },
    });
    Ht({
      '0%': { transform: 'rotate(-3deg)' },
      '1.68421%': { transform: 'rotate(3deg)' },
      '2.10526%': { transform: 'rotate(6deg)' },
      '3.78947%': { transform: 'rotate(-6deg)' },
      '4.21053%': { transform: 'rotate(-6deg)' },
      '5.89474%': { transform: 'rotate(6deg)' },
      '6.31579%': { transform: 'rotate(6deg)' },
      '8%': { transform: 'rotate(-6deg)' },
      '8.42105%': { transform: 'rotate(-6deg)' },
      '10.10526%': { transform: 'rotate(6deg)' },
      '10.52632%': { transform: 'rotate(6deg)' },
      '12.21053%': { transform: 'rotate(-6deg)' },
      '12.63158%': { transform: 'rotate(-6deg)' },
      '14.31579%': { transform: 'rotate(6deg)' },
      '15.78947%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(0deg)' },
    });
    var qu = he({
        animation: `${Hs} 1.5s ease-in-out infinite`,
        background: z.tr5,
        color: 'transparent',
        cursor: 'progress',
      }),
      Yu = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'storyId' } }],
                  },
                },
              ],
            },
          },
        ],
      },
      Qu = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
      Ku = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchBuildFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Build' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StatusTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StatusTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'storyId' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
        ],
      },
      Ju = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'backgroundColor' },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorJSError' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorFailedJS' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'globals' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'storyId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Xu = {
        kind: 'Document',
        definitions: [
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'SelectedBuildFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Build' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                { kind: 'Field', name: { kind: 'Name', value: 'commit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uncommittedHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StoryTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StoryTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'backgroundColor' },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorJSError' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorFailedJS' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'globals' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'storyId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      e2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'VisualTestsProjectCountQuery' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'projectCount' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accounts' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'newProjectUrl' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      t2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'SelectProjectsQuery' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'accounts' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'avatarUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'newProjectUrl' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'projects' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'lastBuild' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      n2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ProjectQuery' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'projectId' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'project' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'projectId' } },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastBuild' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      a2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateUserPreferences' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'UserPreferencesInput' },
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'updateUserPreferences' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'input' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedPreferences' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'vtaOnboarding' } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      r2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AddonVisualTestsBuild' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'projectId' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'branch' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'gitUserEmailHash' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'repositoryOwnerName' },
                },
                type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'testStatuses' } },
                type: {
                  kind: 'NonNullType',
                  type: {
                    kind: 'ListType',
                    type: {
                      kind: 'NonNullType',
                      type: { kind: 'NamedType', name: { kind: 'Name', value: 'TestStatus' } },
                    },
                  },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'selectedBuildId' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
                },
              },
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'hasSelectedBuildId' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'project' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'projectId' } },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'manageUrl' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'account' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'billingUrl' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'suspensionReason' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'features' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uiTests' } }],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'lastBuildOnBranch' },
                        name: { kind: 'Name', value: 'lastBuild' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'branches' },
                            value: {
                              kind: 'ListValue',
                              values: [
                                { kind: 'Variable', name: { kind: 'Name', value: 'branch' } },
                              ],
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'repositoryOwnerName' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'repositoryOwnerName' },
                            },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'localBuilds' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'localBuildEmailHash' },
                                  value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'gitUserEmailHash' },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'LastBuildOnBranchBuildFields' },
                            },
                            {
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'SelectedBuildFields' },
                              directives: [
                                {
                                  kind: 'Directive',
                                  name: { kind: 'Name', value: 'skip' },
                                  arguments: [
                                    {
                                      kind: 'Argument',
                                      name: { kind: 'Name', value: 'if' },
                                      value: {
                                        kind: 'Variable',
                                        name: { kind: 'Name', value: 'hasSelectedBuildId' },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastBuild' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'selectedBuild' },
                  name: { kind: 'Name', value: 'build' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'selectedBuildId' } },
                    },
                  ],
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'hasSelectedBuildId' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'SelectedBuildFields' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'viewer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'preferences' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'vtaOnboarding' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'projectMembership' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'projectId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'projectId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              alias: { kind: 'Name', value: 'userCanReview' },
                              name: { kind: 'Name', value: 'meetsAccessLevel' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'minimumAccessLevel' },
                                  value: { kind: 'EnumValue', value: 'REVIEWER' },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StatusTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'storyId' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'StoryTestFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Test' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                { kind: 'Field', name: { kind: 'Name', value: 'webUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'comparisons' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'browser' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'key' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'version' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'captureDiff' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'diffImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'focusImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'headCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'backgroundColor' },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'thumbnailUrl' } },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureError' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: {
                                        kind: 'Name',
                                        value: 'CaptureErrorInteractionFailure',
                                      },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorJSError' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'InlineFragment',
                                    typeCondition: {
                                      kind: 'NamedType',
                                      name: { kind: 'Name', value: 'CaptureErrorFailedJS' },
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'error' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'baseCapture' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'captureImage' },
                              arguments: [
                                {
                                  kind: 'Argument',
                                  name: { kind: 'Name', value: 'signed' },
                                  value: { kind: 'BooleanValue', value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageUrl' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageWidth' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'imageHeight' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mode' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'globals' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'story' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'storyId' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'component' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'LastBuildOnBranchBuildFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Build' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StatusTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'result' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStatus' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'first' },
                            value: { kind: 'IntValue', value: '1000' },
                          },
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'statuses' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'testStatuses' },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StatusTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'LastBuildOnBranchTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'SelectedBuildFields' },
            typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Build' } },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                { kind: 'Field', name: { kind: 'Name', value: 'branch' } },
                { kind: 'Field', name: { kind: 'Name', value: 'commit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'committedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uncommittedHash' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'StartedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StoryTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'CompletedBuild' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'startedAt' } },
                      {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'testsForStory' },
                        name: { kind: 'Name', value: 'tests' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'storyId' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'storyId' } },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nodes' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'FragmentSpread',
                                    name: { kind: 'Name', value: 'StoryTestFields' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      i2 = {
        kind: 'Document',
        definitions: [
          {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'ReviewTest' },
            variableDefinitions: [
              {
                kind: 'VariableDefinition',
                variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                type: {
                  kind: 'NonNullType',
                  type: { kind: 'NamedType', name: { kind: 'Name', value: 'ReviewTestInput' } },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviewTest' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'input' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'updatedTests' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userErrors' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'UserError' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'message' } },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'BuildSupersededError' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'build' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'TestUnreviewableError' },
                              },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'test' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      zs = w.div(
        ({ status: e, theme: t }) => ({
          display: 'inline-block',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background:
            e &&
            {
              IN_PROGRESS: 'transparent',
              PASSED: t.color.positive,
              PENDING: t.color.gold,
              ACCEPTED: t.color.positive,
              DENIED: t.color.positive,
              BROKEN: t.color.negative,
              FAILED: t.color.negative,
              EQUAL: t.color.positive,
              FIXED: t.color.positive,
              ADDED: t.color.gold,
              CHANGED: t.color.gold,
              REMOVED: t.color.gold,
              CAPTURE_ERROR: t.color.negative,
              SYSTEM_ERROR: t.color.negative,
              positive: t.color.positive,
              negative: t.color.negative,
              warning: t.color.gold,
              notification: t.color.secondary,
            }[e],
        }),
        ({ overlay: e, theme: t }) =>
          e &&
          he({
            position: 'absolute',
            top: -1,
            right: -2,
            width: 7,
            height: 7,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: `0 0 0 2px var(--bg-color, ${t.background.bar})`,
            boxSizing: 'border-box',
          }),
      ),
      Us = ({ status: e }) => a.createElement(zs, { status: e }),
      o2 = w.div({
        position: 'relative',
        display: 'inline-flex',
        justifyContent: 'center',
        'img, svg': { verticalAlign: 'top' },
      }),
      Er = ({ status: e, children: t }) =>
        a.createElement(o2, null, t, a.createElement(zs, { overlay: !0, status: e })),
      je = w(dl)(({ theme: e }) => ({ marginBottom: '-4px', marginTop: '-4px', left: -8 })),
      l2 = w.div(({ theme: e }) => ({
        width: 220,
        padding: 3,
        color: e.base === 'light' ? e.color.defaultText : e.color.light,
        '& > div': { margin: 7 },
      })),
      _o = w.div(({ theme: e }) => ({
        height: 5,
        background: e.background.hoverable,
        borderRadius: 5,
        overflow: 'hidden',
      })),
      $s = w(_o)(({ theme: e }) => ({
        background: e.color.secondary,
        transition: 'width 3s ease-out',
      })),
      s2 = Ht({ '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }),
      Ni = w.svg(
        ({ progress: e, theme: t }) => ({
          position: 'absolute',
          width: '24px!important',
          height: '24px!important',
          transform: 'rotate(-90deg)',
          color: t.color.secondary,
          circle: {
            r: '10',
            cx: '12',
            cy: '12',
            fill: 'transparent',
            stroke: e ? 'currentColor' : t.background.hoverable,
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeDasharray: Math.PI * 20,
          },
        }),
        ({ spinner: e, theme: t }) =>
          e && {
            animation: `${s2} 1s linear infinite`,
            circle: { stroke: `${t.color.secondary}33` },
          },
      ),
      c2 = w.div(({ theme: e }) => ({ color: e.color.warningText, '&&': { marginTop: 10 } })),
      Xn = w(ot)(({ isDisallowed: e, theme: t }) => ({
        position: 'relative',
        overflow: 'visible',
        color: t.textMutedColor,
        marginTop: 0,
        zIndex: 1,
        marginRight: 4,
        ...(e && { animation: `${Ds} 700ms ease-out` }),
      })),
      d2 = ({
        isDisabled: e = !1,
        isDisallowed: t = !1,
        isOutdated: n = !1,
        isRunning: r = !1,
        localBuildProgress: i,
        warning: o,
        clickWarning: l,
        startBuild: s,
        stopBuild: c,
      }) => {
        if (e)
          return o
            ? a.createElement(
                Le,
                { tooltip: a.createElement(je, { note: o }), trigger: 'hover', hasChrome: !1 },
                a.createElement(
                  Xn,
                  {
                    id: 'button-run-tests',
                    'aria-label': 'Visual Tests locked',
                    disabled: !l,
                    onClick: l,
                  },
                  a.createElement(Er, { status: 'warning' }, a.createElement($t, null)),
                ),
              )
            : a.createElement(
                Xn,
                { id: 'button-run-tests', 'aria-label': 'Visual Tests locked', disabled: !0 },
                a.createElement($t, null),
              );
        if (r && i) {
          let { buildProgressPercentage: d } = i;
          return a.createElement(
            Le,
            {
              trigger: 'hover',
              tooltip: a.createElement(
                l2,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(Lo, { localBuildProgress: i, small: !0, withEmoji: !0 }),
                ),
                a.createElement(
                  _o,
                  null,
                  typeof d == 'number' && a.createElement($s, { style: { width: `${d}%` } }),
                ),
                t &&
                  a.createElement(
                    c2,
                    null,
                    'This job has already reached the capture cloud and cannot be stopped locally.',
                  ),
              ),
            },
            a.createElement(
              Xn,
              { 'aria-label': 'Stop tests', isDisallowed: t, onClick: () => c() },
              a.createElement(kd, { style: { width: 10, margin: 2 } }),
              a.createElement(
                Ni,
                { xmlns: 'http://www.w3.org/2000/svg' },
                a.createElement('circle', null),
              ),
              a.createElement(
                Ni,
                { xmlns: 'http://www.w3.org/2000/svg', spinner: !0 },
                a.createElement('circle', { strokeDashoffset: Math.PI * 20 * (1 - d / 100) }),
              ),
              typeof d == 'number' &&
                a.createElement(
                  Ni,
                  { xmlns: 'http://www.w3.org/2000/svg', progress: !0 },
                  a.createElement('circle', { strokeDashoffset: Math.PI * 20 * (1 - d / 100) }),
                ),
            ),
          );
        }
        return n
          ? a.createElement(
              Le,
              {
                tooltip: a.createElement(je, { note: 'Code changes detected; click to run tests' }),
                trigger: 'hover',
                hasChrome: !1,
              },
              a.createElement(
                Xn,
                { id: 'button-run-tests', 'aria-label': 'Run tests', onClick: () => s() },
                a.createElement(Er, { status: 'notification' }, a.createElement($t, null)),
              ),
            )
          : a.createElement(
              Le,
              {
                trigger: 'hover',
                hasChrome: !1,
                tooltip: a.createElement(je, {
                  note: 'No code changes detected. Rerun tests to take new snapshots.',
                }),
              },
              a.createElement(
                Xn,
                { id: 'button-run-tests', 'aria-label': 'Run tests', onClick: () => s() },
                a.createElement($t, null),
              ),
            );
      },
      u2 = ({ api: e }) => {
        let {
            addNotification: t,
            clearNotification: n,
            selectStory: r,
            setOptions: i,
            togglePanel: o,
          } = e,
          l = Xt(Ur),
          { projectId: s } = Ls(),
          [c] = Ns(),
          d = !!c,
          [u, m] = Ie(us),
          [p] = Ie(Di),
          [g] = Ie(ms),
          [f] = Ie(Co),
          y = Object.keys(f?.problems || {}).length > 0,
          [k] = Ie(cs),
          b = Pe(g?.currentStep),
          { index: h, status: v, storyId: E, viewMode: S } = yn(),
          B = Object.values(v).filter((pe) => pe[U]?.status === 'warn'),
          j = W(
            (pe) => {
              if ((i({ selectedPanel: qt }), o(!0), h && S !== 'story')) {
                let Fe = Object.keys(h).indexOf(E),
                  Bt = Object.entries(h).slice(Fe > 0 ? Fe : 0),
                  [_e] = Bt.find(([, { type: bt }]) => bt === 'story') || [];
                _e && r(_e);
              }
              pe && l?.({ action: 'openWarning', warning: pe });
            },
            [i, o, l, h, r, E, S],
          ),
          Y = W(
            ({ onDismiss: pe }) => {
              pe(), j();
            },
            [j],
          );
        oe(() => {
          let pe = () => m(!0),
            Fe = () => m(!1);
          return (
            window.addEventListener('offline', pe),
            window.addEventListener('online', Fe),
            () => {
              window.removeEventListener('offline', pe), window.removeEventListener('online', Fe);
            }
          );
        }, [m]),
          oe(() => {
            if (g?.currentStep !== b.current) {
              if (((b.current = g?.currentStep), g?.currentStep === 'initialize')) {
                let pe = `${U}/build-initialize/${Date.now()}`;
                t({
                  id: pe,
                  content: {
                    headline: 'Build started',
                    subHeadline: 'Check the visual test addon to see the progress of your build.',
                  },
                  icon: a.createElement(ji, { color: Lt.positive }),
                  duration: 8e3,
                  onClick: Y,
                }),
                  setTimeout(() => n(pe), 8e3);
              }
              if (g?.currentStep === 'aborted') {
                let pe = `${U}/build-aborted/${Date.now()}`;
                t({
                  id: pe,
                  content: { headline: 'Build canceled', subHeadline: 'Aborted by user.' },
                  icon: a.createElement(Wt, { color: Lt.negative }),
                  duration: 8e3,
                  onClick: Y,
                }),
                  setTimeout(() => n(pe), 8e3);
              }
              if (g?.currentStep === 'complete') {
                let pe = `${U}/build-complete/${Date.now()}`;
                t({
                  id: pe,
                  content: {
                    headline: 'Build complete',
                    subHeadline: g.errorCount
                      ? `Encountered ${(0, Ei.default)('component error', g.errorCount, !0)}`
                      : B.length
                        ? `Found ${(0, Ei.default)('story', B.length, !0)} with ${(0, Ei.default)('change', B.length)}`
                        : 'No visual changes detected',
                  },
                  icon: a.createElement(ji, { color: Lt.positive }),
                  duration: 8e3,
                  onClick: Y,
                }),
                  setTimeout(() => n(pe), 8e3);
              }
              g?.currentStep === 'error' &&
                t({
                  id: `${U}/build-error/${Date.now()}`,
                  content: {
                    headline: 'Build error',
                    subHeadline:
                      'Check the Storybook process on the command line for more details.',
                  },
                  icon: a.createElement(Wt, { color: Lt.negative }),
                  onClick: Y,
                }),
                g?.currentStep === 'limited' &&
                  t({
                    id: `${U}/build-limited/${Date.now()}`,
                    content: {
                      headline: 'Build limited',
                      subHeadline:
                        'Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.',
                    },
                    icon: a.createElement(Wt, { color: Lt.negative }),
                    onClick: Y,
                  });
            }
          }, [t, n, Y, g?.currentStep, g?.errorCount, g?.changeCount, B.length]);
        let {
            isDisallowed: J,
            isRunning: ce,
            startBuild: Se,
            stopBuild: Oe,
          } = As({ localBuildProgress: g, accessToken: c }),
          xe;
        s || (xe = 'Visual tests locked until a project is selected.'),
          d || (xe = 'Visual tests locked until you are logged in.'),
          k && (xe = 'Visual tests locked due to Git synchronization problem.'),
          y && (xe = 'Visual tests locked due to configuration problem.'),
          u && (xe = 'Visual tests locked while offline.');
        let qe = W(() => j(xe), [j, xe]);
        return window.CONFIG_TYPE !== 'DEVELOPMENT'
          ? null
          : a.createElement(d2, {
              isDisabled: !!xe,
              isDisallowed: J,
              isOutdated: p,
              isRunning: ce,
              localBuildProgress: g,
              warning: xe,
              clickWarning: qe,
              startBuild: Se,
              stopBuild: Oe,
            });
      },
      Ws = Je(null),
      m2 = ({ children: e, value: t }) => a.createElement(Ws.Provider, { value: t }, e),
      Gs = () => Ot(Ws, 'AuthState'),
      p2 = {
        user: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z',
          }),
        ),
        useralt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z',
          }),
        ),
        useradd: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z',
          }),
        ),
        users: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z',
          }),
          a.createElement('path', {
            d: 'M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z',
          }),
        ),
        profile: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z',
          }),
        ),
        facehappy: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        faceneutral: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        facesad: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        accessibility: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
          }),
          a.createElement('path', { d: 'M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          }),
        ),
        accessibilityalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z',
          }),
        ),
        arrowup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z',
          }),
        ),
        arrowdown: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z',
          }),
        ),
        arrowleft: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z',
          }),
        ),
        arrowright: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z',
          }),
        ),
        arrowupalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z',
          }),
        ),
        arrowdownalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z',
          }),
        ),
        arrowleftalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z',
          }),
        ),
        arrowrightalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z',
          }),
        ),
        expandalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z',
          }),
        ),
        collapse: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z',
          }),
        ),
        expand: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z',
          }),
        ),
        unfold: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z',
          }),
          a.createElement('path', {
            d: 'M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z',
          }),
          a.createElement('path', {
            d: 'M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z',
          }),
        ),
        transfer: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z',
          }),
        ),
        redirect: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z',
          }),
        ),
        undo: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z',
          }),
        ),
        reply: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z',
          }),
        ),
        sync: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z',
          }),
        ),
        upload: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        download: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z',
          }),
        ),
        back: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z',
          }),
        ),
        proceed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z',
          }),
        ),
        refresh: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z',
          }),
        ),
        globe: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z',
          }),
        ),
        compass: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        location: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z',
          }),
        ),
        pin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z',
          }),
        ),
        time: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          }),
        ),
        dashboard: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z',
          }),
        ),
        timer: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z',
          }),
        ),
        home: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z',
          }),
        ),
        admin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z',
          }),
          a.createElement('path', {
            d: 'M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z',
          }),
        ),
        info: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          }),
        ),
        question: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        support: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
          }),
        ),
        alert: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z',
          }),
        ),
        email: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z',
          }),
        ),
        phone: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z',
          }),
        ),
        link: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z',
          }),
          a.createElement('path', {
            d: 'M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z',
          }),
        ),
        unlink: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          }),
        ),
        bell: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z',
          }),
        ),
        rss: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            d: 'M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
          }),
        ),
        sharealt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z',
          }),
          a.createElement('path', {
            d: 'M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z',
          }),
        ),
        share: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z',
          }),
          a.createElement('path', {
            d: 'M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z',
          }),
        ),
        circlehollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z',
          }),
        ),
        circle: a.createElement('path', { d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z' }),
        bookmarkhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z',
          }),
        ),
        bookmark: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z',
          }),
        ),
        diamond: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.41 1.59a2 2 0 0 0-2.82 0l-4 4a2 2 0 0 0 0 2.82l4 4a2 2 0 0 0 2.82 0l4-4a2 2 0 0 0 0-2.82l-4-4Zm.71-.71a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.24l4 4a3 3 0 0 0 4.24 0l4-4a3 3 0 0 0 0-4.24l-4-4Z',
          }),
        ),
        hearthollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2',
          }),
        ),
        heart: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z',
          }),
        ),
        starhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z',
          }),
        ),
        star: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z',
          }),
        ),
        certificate: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z',
          }),
        ),
        verified: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
          }),
        ),
        thumbsup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          }),
        ),
        shield: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z',
          }),
        ),
        basket: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z' }),
          a.createElement('path', {
            d: 'M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z',
          }),
          a.createElement('path', {
            d: 'M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z',
          }),
        ),
        beaker: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z',
          }),
        ),
        hourglass: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z',
          }),
        ),
        flag: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z',
          }),
        ),
        cloudhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z',
          }),
        ),
        cloud: a.createElement('path', {
          d: 'M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z',
        }),
        edit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z',
          }),
        ),
        cog: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z',
            fill: '#333',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z',
          }),
        ),
        nut: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z',
          }),
        ),
        wrench: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          }),
        ),
        ellipsis: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
          }),
        ),
        check: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z',
          }),
        ),
        form: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z',
          }),
          a.createElement('path', {
            d: 'm6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z',
          }),
        ),
        batchdeny: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
          }),
        ),
        batchaccept: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z',
          }),
        ),
        controls: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z',
          }),
        ),
        plus: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z',
          }),
        ),
        closeAlt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z',
          }),
        ),
        cross: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z',
          }),
        ),
        trash: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z',
          }),
        ),
        pinalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z',
          }),
        ),
        unpin: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          }),
        ),
        add: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          }),
        ),
        subtract: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        close: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z',
          }),
        ),
        delete: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z',
          }),
        ),
        passed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z',
          }),
        ),
        changed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z',
          }),
        ),
        failed: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z',
          }),
        ),
        clear: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z',
          }),
        ),
        comment: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z',
          }),
        ),
        commentadd: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
          }),
        ),
        requestchange: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z',
          }),
        ),
        comments: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z',
          }),
        ),
        lock: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z',
          }),
        ),
        unlock: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z',
          }),
        ),
        key: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z',
          }),
        ),
        outbox: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z',
          }),
          a.createElement('path', {
            d: 'M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z',
          }),
        ),
        credit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z',
          }),
        ),
        button: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z',
          }),
          a.createElement('path', {
            d: 'M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z',
          }),
        ),
        type: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            d: 'M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z',
          }),
        ),
        pointerdefault: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z',
          }),
        ),
        pointerhand: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z',
          }),
        ),
        browser: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          }),
        ),
        tablet: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z',
          }),
        ),
        mobile: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z',
          }),
        ),
        watch: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            key: 'watch',
            fillRule: 'evenodd',
            d: 'M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
          }),
        ),
        sidebar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z',
          }),
        ),
        sidebaralt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z',
          }),
        ),
        sidebaralttoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z',
          }),
        ),
        sidebartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z',
          }),
        ),
        bottombar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z',
          }),
        ),
        bottombartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z',
          }),
        ),
        cpu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z',
          }),
        ),
        database: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z',
          }),
        ),
        memory: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z',
          }),
        ),
        structure: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z',
          }),
        ),
        box: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z',
          }),
        ),
        power: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z' }),
          a.createElement('path', {
            d: 'M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z',
          }),
        ),
        photo: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z',
          }),
        ),
        component: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z',
          }),
        ),
        grid: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z',
          }),
        ),
        outline: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
          }),
        ),
        photodrag: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z',
          }),
          a.createElement('path', {
            d: 'M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z',
          }),
        ),
        search: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
          }),
        ),
        zoom: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
          }),
        ),
        zoomout: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z',
          }),
        ),
        zoomreset: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z',
          }),
        ),
        eye: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'm14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z',
          }),
        ),
        eyeclose: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z',
          }),
          a.createElement('path', {
            d: 'M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z',
          }),
        ),
        lightning: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z',
          }),
        ),
        lightningoff: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z',
          }),
        ),
        contrast: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z',
          }),
        ),
        switchalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z',
          }),
        ),
        mirror: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z',
          }),
        ),
        grow: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z',
          }),
          a.createElement('path', {
            d: 'M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z',
          }),
        ),
        paintbrush: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z',
          }),
        ),
        ruler: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z',
          }),
        ),
        stop: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z',
          }),
        ),
        camera: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z',
          }),
        ),
        video: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z',
          }),
        ),
        speaker: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z',
          }),
          a.createElement('path', {
            d: 'M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z',
          }),
          a.createElement('path', {
            d: 'M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z',
          }),
        ),
        play: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z',
          }),
        ),
        playback: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z',
          }),
        ),
        playnext: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z',
          }),
        ),
        rewind: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z',
          }),
        ),
        fastforward: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z',
          }),
        ),
        stopalt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z',
          }),
        ),
        sidebyside: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z',
          }),
        ),
        stacked: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z',
          }),
        ),
        sun: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', { d: 'M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z' }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
          }),
          a.createElement('path', {
            d: 'M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z',
          }),
        ),
        moon: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z',
          }),
        ),
        book: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z',
          }),
        ),
        document: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z',
          }),
        ),
        copy: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z',
          }),
        ),
        category: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z',
          }),
        ),
        folder: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z',
          }),
        ),
        print: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z',
          }),
        ),
        graphline: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z',
          }),
        ),
        calendar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z',
          }),
        ),
        graphbar: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z',
          }),
        ),
        menu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z',
          }),
        ),
        menualt: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z',
          }),
        ),
        filter: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z',
          }),
        ),
        docchart: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z',
          }),
        ),
        doclist: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z',
          }),
        ),
        markup: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z',
          }),
        ),
        bold: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z',
          }),
        ),
        italic: a.createElement('path', { d: 'M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z' }),
        paperclip: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z',
          }),
        ),
        listordered: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z',
          }),
        ),
        listunordered: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z',
          }),
        ),
        paragraph: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z',
          }),
        ),
        markdown: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z',
          }),
        ),
        repository: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z',
          }),
          a.createElement('path', {
            d: 'M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z',
          }),
          a.createElement('path', {
            d: 'M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z',
          }),
        ),
        commit: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
          }),
        ),
        branch: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          }),
        ),
        pullrequest: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z',
          }),
        ),
        merge: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
          }),
        ),
        apple: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z',
          }),
        ),
        linux: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z',
          }),
        ),
        ubuntu: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z',
          }),
        ),
        windows: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z',
          }),
        ),
        storybook: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z',
          }),
        ),
        azuredevops: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'm0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z',
          }),
        ),
        bitbucket: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z',
          }),
        ),
        chrome: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z',
          }),
        ),
        chromatic: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z',
          }),
        ),
        componentdriven: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z',
          }),
        ),
        discord: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z',
          }),
        ),
        facebook: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z',
          }),
        ),
        figma: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            fillRule: 'evenodd',
            d: 'M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z',
          }),
        ),
        gdrive: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z',
          }),
        ),
        github: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z',
          }),
        ),
        gitlab: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z',
          }),
        ),
        google: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z',
          }),
        ),
        graphql: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z',
          }),
        ),
        medium: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z',
          }),
        ),
        redux: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z',
          }),
        ),
        twitter: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z',
          }),
        ),
        youtube: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z',
          }),
        ),
        linkedin: a.createElement('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13ZM9.55293 11.3333H11.3337V7.67516C11.3337 6.12737 10.4563 5.379 9.23075 5.379C8.00467 5.379 7.48867 6.33378 7.48867 6.33378V5.55552H5.77255V11.3333H7.48867V8.30031C7.48867 7.48764 7.86276 7.00405 8.57878 7.00405C9.23696 7.00405 9.55293 7.46875 9.55293 8.30031V11.3333ZM2.66699 3.73279C2.66699 4.32157 3.14067 4.79896 3.72522 4.79896C4.30977 4.79896 4.78316 4.32157 4.78316 3.73279C4.78316 3.14402 4.30977 2.66663 3.72522 2.66663C3.14067 2.66663 2.66699 3.14402 2.66699 3.73279ZM4.62856 11.3333H2.83908V5.55552H4.62856V11.3333Z',
          fill: '#1EA7FD',
        }),
        vscode: a.createElement(
          a.Fragment,
          null,
          a.createElement('path', {
            d: 'M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z',
          }),
        ),
      },
      h2 = w.svg({
        display: 'inline-block',
        shapeRendering: 'inherit',
        transform: 'translate3d(0, 0, 0)',
        verticalAlign: 'middle',
        path: { fill: 'currentColor' },
      }),
      Zo = ({ icon: e, ...t }) =>
        a.createElement(
          h2,
          { viewBox: '0 0 14 14', width: '14px', height: '14px', ...t },
          a.createElement(a.Fragment, null, p2[e]),
        ),
      an = { large: 40, medium: 28, small: 20, tiny: 16 },
      f2 = w.div(
        {
          background: 'transparent',
          display: 'inline-block',
          verticalAlign: 'top',
          overflow: 'hidden',
          textTransform: 'uppercase',
          img: { width: '100%', height: 'auto', display: 'block' },
        },
        (e) => ({
          borderRadius: e.type === 'user' ? '50%' : 5,
          height: `${an[e.size || 'medium']}px`,
          width: `${an[e.size || 'medium']}px`,
          lineHeight: `${an[e.size || 'medium']}px`,
          ...(e.isLoading && { background: z.light, filter: 'grayscale(1)' }),
          ...(!e.src && !e.isLoading && { background: '#37D5D3' }),
        }),
      ),
      g2 = w(Zo)(
        {
          position: 'relative',
          margin: '0 auto',
          display: 'block',
          verticalAlign: 'top',
          path: { fill: z.medium, animation: `${Hs} 1.5s ease-in-out infinite` },
        },
        (e) => ({
          bottom: `${e.type === 'user' ? -2 : -4}px`,
          height: `${e.type === 'user' ? 100 : 70}%`,
          width: `${e.type === 'user' ? 100 : 70}%`,
        }),
      ),
      v2 = w.div(
        { color: z.lightest, textAlign: 'center' },
        (e) =>
          ({
            tiny: { fontSize: `${D.size.s1 - 2}px`, lineHeight: `${an.tiny}px` },
            small: { fontSize: `${D.size.s1}px`, lineHeight: `${an.small}px` },
            medium: { fontSize: `${D.size.s2}px`, lineHeight: `${an.medium}px` },
            large: { fontSize: `${D.size.s3}px`, lineHeight: `${an.large}px` },
          })[e.size || 'medium'],
      ),
      y2 = ({
        isLoading: e = !1,
        username: t = 'loading',
        src: n = void 0,
        size: r = 'medium',
        type: i = 'user',
        ...o
      }) => {
        let l = a.createElement(g2, { icon: i === 'user' ? 'useralt' : 'repository', type: i }),
          s = {};
        return (
          e
            ? ((s['aria-busy'] = !0), (s['aria-label'] = 'Loading avatar ...'))
            : n
              ? (l = a.createElement('img', { src: n, alt: t }))
              : ((s['aria-label'] = t),
                (l = a.createElement(v2, { size: r, 'aria-hidden': 'true' }, t.substring(0, 1)))),
          a.createElement(f2, { size: r, isLoading: e, src: n, type: i, ...s, ...o }, l)
        );
      },
      b2 = w.span(
        (e) =>
          e.withArrow && {
            '> svg:last-of-type': {
              height: '0.65em',
              width: '0.65em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit',
            },
          },
      ),
      E2 = w.a(
        {
          display: 'inline-block',
          transition: 'transform 150ms ease-out, color 150ms ease-out',
          textDecoration: 'none',
          color: z.secondary,
          '&:hover, &:focus-visible': {
            cursor: 'pointer',
            transform: 'translateY(-1px)',
            color: nn(0.07, z.secondary),
          },
          '&:active': { transform: 'translateY(0)', color: nn(0.1, z.secondary) },
          svg: {
            display: 'inline-block',
            height: '1em',
            width: '1em',
            verticalAlign: 'text-top',
            position: 'relative',
            bottom: '-0.125em',
            marginRight: '0.4em',
          },
        },
        (e) => ({
          ...(e.secondary && {
            color: e.theme.base === 'light' ? z.mediumdark : z.medium,
            '&:hover': { color: e.theme.base === 'light' ? z.dark : z.light },
            '&:active': { color: e.theme.base === 'light' ? z.darker : z.lighter },
          }),
          ...(e.tertiary && {
            color: z.dark,
            '&:hover': { color: z.darkest },
            '&:active': { color: z.mediumdark },
          }),
          ...(e.nochrome && {
            color: 'inherit',
            '&:hover, &:active': { color: 'inherit', textDecoration: 'underline' },
          }),
          ...(e.inverse && {
            color: z.lightest,
            '&:hover': { color: z.lighter },
            '&:active': { color: z.light },
          }),
        }),
      ),
      k2 = w.a({}),
      w2 = w.button({
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
        cursor: 'pointer',
      }),
      qs = Q(
        (
          { inverse: e, isButton: t, LinkWrapper: n, nochrome: r, secondary: i, tertiary: o, ...l },
          s,
        ) =>
          t
            ? a.createElement(w2, { ...l, ref: s })
            : n
              ? a.createElement(n, { ...l, ref: s })
              : a.createElement(k2, { ...l, ref: s }),
      );
    qs.displayName = 'LinkComponentPicker';
    var $e = Q(({ children: e, withArrow: t, ...n }, r) => {
      let i = a.createElement(
        a.Fragment,
        null,
        a.createElement(
          b2,
          { withArrow: !!t },
          e,
          t && a.createElement(Zo, { icon: 'arrowright' }),
        ),
      );
      return a.createElement(E2, { as: qs, ref: r, ...n }, i);
    });
    $e.displayName = 'Link';
    $e.defaultProps = {
      withArrow: !1,
      isButton: !1,
      secondary: !1,
      tertiary: !1,
      nochrome: !1,
      inverse: !1,
    };
    var C2 = w.label((e) => ({
        ...(e.appearance !== 'code' && { fontWeight: D.weight.bold }),
        ...(e.appearance === 'code'
          ? { fontFamily: D.type.code, fontSize: `${D.size.s1 - 1}px`, lineHeight: '16px' }
          : { fontSize: `${D.size.s2}px`, lineHeight: '20px' }),
      })),
      S2 = w.div([
        { marginBottom: 8 },
        (e) =>
          e.hideLabel && {
            border: '0px !important',
            clip: 'rect(0 0 0 0) !important',
            WebkitClipPath: 'inset(100%) !important',
            clipPath: 'inset(100%) !important',
            height: '1px !important',
            overflow: 'hidden !important',
            padding: '0px !important',
            position: 'absolute !important',
            whiteSpace: 'nowrap !important',
            width: '1px !important',
          },
      ]),
      x2 = w.input({
        '&::placeholder': { color: z.mediumdark },
        appearance: 'none',
        border: 'none',
        boxSizing: 'border-box',
        display: 'block',
        outline: 'none',
        width: '100%',
        margin: '0',
        '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
        '&:-webkit-autofill': { WebkitBoxShadow: `0 0 0 3em ${z.lightest} inset` },
      }),
      M2 = (e) => {
        let t = { position: 'relative', ...(e.error && { zIndex: 1 }), '&:focus': { zIndex: 2 } };
        switch (e.stackLevel) {
          case 'top':
            return {
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ...t,
            };
          case 'middle':
            return { borderRadius: 0, marginTop: -1, ...t };
          case 'bottom':
            return {
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: -1,
              ...t,
            };
          default:
            return { borderRadius: '4px' };
        }
      },
      N2 = w.div((e) => ({
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'top',
        width: '100%',
        '.sbds-input-el': {
          position: 'relative',
          ...M2(e),
          background: z.lightest,
          color: z.darkest,
          fontSize: `${D.size.s2}px`,
          lineHeight: '20px',
          padding: '10px 15px',
          boxShadow: `${z.border} 0 0 0 1px inset`,
          '&:focus': { boxShadow: `${z.secondary} 0 0 0 1px inset` },
          ...(e.appearance === 'pill' && {
            fontSize: `${D.size.s1}px`,
            lineHeight: '16px',
            padding: '6px 12px',
            borderRadius: '3em',
            background: 'transparent',
          }),
          ...(e.appearance === 'code' && {
            fontSize: `${D.size.s1 - 1}px`,
            lineHeight: '16px',
            fontFamily: D.type.code,
            borderRadius: `${To.borderRadius.small}px`,
            background: z.lightest,
            padding: '8px 10px',
          }),
          ...(e.startingType === 'password' && { paddingRight: 52 }),
          ...(e.icon && {
            paddingLeft: 40,
            ...((e.appearance === 'pill' || e.appearance === 'code') && { paddingLeft: 30 }),
            '&:focus + svg path': { fill: z.darker },
          }),
          ...(e.error && {
            boxShadow: `${z.red} 0 0 0 1px inset`,
            '&:focus': { boxShadow: `${z.red} 0 0 0 1px inset !important` },
          }),
        },
        '> svg': {
          ...(e.icon && {
            transition: 'all 150ms ease-out',
            position: 'absolute',
            top: '50%',
            zIndex: 3,
            background: 'transparent',
            ...(e.appearance === 'pill' || e.appearance === 'code'
              ? { fontSize: `${D.size.s1}px`, height: 12, marginTop: -6, width: 12, left: 10 }
              : {
                  fontSize: `${D.size.s2}px`,
                  height: 14,
                  marginTop: -7,
                  width: 14,
                  left: e.appearance === 'tertiary' ? 0 : 15,
                }),
            path: { transition: 'all 150ms ease-out', fill: z.mediumdark },
          }),
          ...(e.error && { animation: `${Ds} 700ms ease-out`, path: { fill: z.red } }),
        },
      })),
      F2 = w.div(
        (e) =>
          e.orientation === 'horizontal' && {
            display: 'table-row',
            '.sbds-input-label-wrapper, .sbds-input-input-wrapper': { display: 'table-cell' },
            '.sbds-input-label-wrapper': { width: 1, paddingRight: 20, verticalAlign: 'middle' },
            '.sbds-input-input-wrapper': { width: 'auto' },
          },
      ),
      A2 = w(Le)({ width: '100%' }),
      O2 = w(cl)({ width: 170 }),
      L2 = w.div({
        position: 'absolute',
        right: '0',
        minWidth: 45,
        top: '50%',
        transform: 'translateY(-50%)',
        fontWeight: 'bold',
        fontSize: 11,
        zIndex: 2,
      }),
      Rl = ({ error: e, value: t, lastErrorValue: n }) => {
        let r = typeof e == 'function' ? e(t) : e;
        return n && t !== n && (r = null), r;
      },
      Ys = Q(
        (
          {
            id: e,
            appearance: t = 'default',
            className: n = void 0,
            error: r = null,
            errorTooltipPlacement: i = 'right',
            hideLabel: o = !1,
            icon: l = void 0,
            label: s,
            lastErrorValue: c = void 0,
            onActionClick: d = void 0,
            orientation: u = 'vertical',
            stackLevel: m = void 0,
            startingType: p = 'text',
            suppressErrorMessage: g = !1,
            type: f = 'text',
            value: y = '',
            ...k
          },
          b,
        ) => {
          let [h, v] = Re(Rl({ error: r, value: y, lastErrorValue: c })),
            E = `${e}-error`;
          oe(() => {
            v(Rl({ error: r, value: y, lastErrorValue: c }));
          }, [y, r, c]);
          let S = a.createElement(x2, {
            className: 'sbds-input-el',
            id: e,
            ref: b,
            value: y,
            type: f,
            'aria-describedby': E,
            'aria-invalid': !!r,
            ...k,
          });
          return a.createElement(
            F2,
            { orientation: u, className: n },
            a.createElement(
              S2,
              { className: 'sbds-input-label-wrapper', hideLabel: o },
              a.createElement(C2, { htmlFor: e, appearance: t }, s),
            ),
            a.createElement(
              N2,
              {
                className: 'sbds-input-input-wrapper',
                error: h,
                'data-error': h,
                icon: l,
                appearance: t,
                stackLevel: m,
                startingType: p,
              },
              l && a.createElement(Zo, { icon: l, 'aria-hidden': !0 }),
              a.createElement(
                A2,
                {
                  tabIndex: -1,
                  placement: i,
                  startOpen: !0,
                  hasChrome: !!h && !g,
                  tooltip: h && !g && a.createElement(O2, { desc: h }),
                  role: 'none',
                },
                S,
              ),
              p === 'password' &&
                a.createElement(
                  L2,
                  null,
                  a.createElement(
                    $e,
                    { isButton: !0, tertiary: !0, onClick: d, type: 'button' },
                    f === 'password' ? 'Show' : 'Hide',
                  ),
                ),
            ),
          );
        },
      );
    Ys.displayName = 'PureInput';
    var Qs = Q(({ type: e, startFocused: t, ...n }, r) => {
      let [i, o] = Re(e),
        l = W(
          (u) => {
            if ((u.preventDefault(), u.stopPropagation(), i === 'password')) {
              o('text');
              return;
            }
            o('password');
          },
          [i, o],
        ),
        s = Pe(),
        c = r || s,
        d = Pe(!1);
      return (
        oe(() => {
          c.current && t && !d.current && (c.current.focus(), (d.current = !0));
        }, [c, t, d]),
        a.createElement(Ys, { ref: c, startingType: e, type: i, onActionClick: l, ...n })
      );
    });
    Qs.displayName = 'Input';
    var T2 = w.div(
        {
          borderRadius: '3em',
          cursor: 'progress',
          display: 'inline-block',
          overflow: 'hidden',
          position: ['relative', 'absolute'],
          transition: 'all 200ms ease-out',
          verticalAlign: 'top',
          top: '50%',
          left: '50%',
          marginTop: -16,
          marginLeft: -16,
          height: 32,
          width: 32,
          animation: `${js} 0.7s linear infinite`,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'rgba(0, 0, 0, 0.03)',
          borderTopColor: 'rgba(0, 0, 0, 0.15)',
        },
        (e) => ({
          ...(e.inverse && {
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderTopColor: 'rgba(255, 255, 255, 0.4)',
          }),
          ...(e.inForm && {
            marginTop: -6,
            marginLeft: -6,
            height: 12,
            width: 12,
            border: `1px solid ${z.secondary}`,
            borderBottomColor: 'transparent',
          }),
          ...(e.inline && {
            position: 'relative',
            top: 'initial',
            left: 'initial',
            marginTop: 'initial',
            marginLeft: 'initial',
            verticalAlign: 'middle',
            height: 8,
            width: 8,
            border: '1px solid',
            borderTopColor: z.secondary,
            borderLeftColor: z.secondary,
            borderRightColor: z.secondary,
            borderBottomColor: 'transparent',
            ...(e.positive && {
              borderTopColor: z.positive,
              borderLeftColor: z.positive,
              borderRightColor: z.positive,
            }),
            ...(e.negative && {
              borderTopColor: z.red,
              borderLeftColor: z.red,
              borderRightColor: z.red,
            }),
            ...(e.neutral && {
              borderTopColor: z.dark,
              borderLeftColor: z.dark,
              borderRightColor: z.dark,
            }),
            ...(e.inverse && {
              borderTopColor: z.lightest,
              borderLeftColor: z.lightest,
              borderRightColor: z.lightest,
            }),
          }),
        }),
      ),
      io = (e) =>
        a.createElement(T2, {
          'aria-label': 'Content is loading ...',
          'aria-live': 'polite',
          role: 'status',
          ...e,
        }),
      _2 = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r;
        };
      },
      Z2 = w.span({}),
      I2 = w.span(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      })),
      R2 = w.span({}),
      B2 = w.span({}),
      Bl = w.li(({ theme: e }) => ({
        listStyle: 'none',
        '&:not(:first-of-type)': { borderTop: `1px solid ${e.appBorderColor}` },
      })),
      P2 = w.span({
        lineHeight: '18px',
        padding: '7px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '.sbds-list-item-title': { display: 'block', flex: '0 1 auto', marginRight: 'auto' },
        '.sbds-list-item-left, .sbds-list-item-center, .sbds-list-item-right': {
          display: 'inline-flex',
        },
        '.sbds-list-item-center': { flex: '0 1 auto', marginLeft: 'auto', marginRight: 'auto' },
        '.sbds-list-item-left, .sbds-list-item-right': { flex: '0 1 auto' },
        '.sbds-list-item-right': { flex: 'none', textAlign: 'right', marginLeft: 10 },
      }),
      Io = ({ active: e, activeColor: t, disabled: n, isLoading: r, theme: i }) => ({
        fontSize: `${i.typography.size.s1}px`,
        transition: 'all 150ms ease-out',
        color: i.color.mediumdark,
        textDecoration: 'none',
        display: 'block',
        '.sbds-list-item-title': { color: i.base === 'light' ? i.color.darker : i.color.lighter },
        '.sbds-list-item-right svg': {
          transition: 'all 200ms ease-out',
          opacity: 0,
          height: 12,
          width: 12,
          margin: '3px 0',
          verticalAlign: 'top',
          path: { fill: i.color.mediumdark },
        },
        '&:hover': {
          background: i.background.hoverable,
          cursor: 'pointer',
          '.sbds-list-item-right svg': { opacity: 1 },
        },
        ...(e && {
          '.sbds-list-item-title': { fontWeight: i.typography.weight.bold },
          '.sbds-list-item-title, .sbds-list-item-center': { color: t },
          '.sbds-list-item-right svg': { opacity: 1, path: { fill: t } },
        }),
        ...(r && { '.sbds-list-item-title': { ...qu, flex: '0 1 auto', display: 'inline-block' } }),
        ...(n && {
          cursor: 'not-allowed !important',
          '.sbds-list-item-title, .sbds-list-item-center': { color: i.color.mediumdark },
        }),
      }),
      V2 = w(({ active: e, activeColor: t, isLoading: n, ...r }) => a.createElement('a', { ...r }))(
        Io,
      ),
      j2 = w.span(Io),
      H2 = _2((e) =>
        w(({ active: t, isLoading: n, activeColor: r, ...i }) => a.createElement(e, { ...i }))(Io),
      ),
      dt = ({
        appearance: e = 'primary',
        left: t,
        title: n = a.createElement('span', null, 'Loading'),
        center: r,
        right: i,
        onClick: o,
        LinkWrapper: l,
        isLink: s = !0,
        ...c
      }) => {
        let d = en().color[e],
          u = a.createElement(
            P2,
            { onClick: o, role: 'presentation' },
            t && a.createElement(Z2, { className: 'sbds-list-item-left' }, t),
            n && a.createElement(I2, { className: 'sbds-list-item-title' }, n),
            r && a.createElement(R2, { className: 'sbds-list-item-center' }, r),
            i && a.createElement(B2, { className: 'sbds-list-item-right' }, i),
          );
        if (l) {
          let m = H2(l);
          return a.createElement(Bl, null, a.createElement(m, { activeColor: d, ...c }, u));
        }
        return a.createElement(Bl, null, a.createElement(s ? V2 : j2, { activeColor: d, ...c }, u));
      };
    function da(e) {
      function t(B, j) {
        return (B >>> j) | (B << (32 - j));
      }
      for (
        var n,
          r,
          i = Math.pow,
          o = i(2, 32),
          l = '',
          s = [],
          c = 8 * e.length,
          d = (da.h = da.h || []),
          u = (da.k = da.k || []),
          m = u.length,
          p = {},
          g = 2;
        m < 64;
        g++
      )
        if (!p[g]) {
          for (n = 0; n < 313; n += g) p[n] = g;
          (d[m] = (i(g, 0.5) * o) | 0), (u[m++] = (i(g, 1 / 3) * o) | 0);
        }
      for (e += '\x80'; (e.length % 64) - 56; ) e += '\0';
      for (n = 0; n < e.length; n++) {
        if ((r = e.charCodeAt(n)) >> 8) return;
        s[n >> 2] |= r << (((3 - n) % 4) * 8);
      }
      for (s[s.length] = (c / o) | 0, s[s.length] = c, r = 0; r < s.length; ) {
        var f = s.slice(r, (r += 16)),
          y = d;
        for (d = d.slice(0, 8), n = 0; n < 64; n++) {
          var k = f[n - 15],
            b = f[n - 2],
            h = d[0],
            v = d[4],
            E =
              d[7] +
              (t(v, 6) ^ t(v, 11) ^ t(v, 25)) +
              ((v & d[5]) ^ (~v & d[6])) +
              u[n] +
              (f[n] =
                n < 16
                  ? f[n]
                  : (f[n - 16] +
                      (t(k, 7) ^ t(k, 18) ^ (k >>> 3)) +
                      f[n - 7] +
                      (t(b, 17) ^ t(b, 19) ^ (b >>> 10))) |
                    0);
          (d = [
            (E + ((t(h, 2) ^ t(h, 13) ^ t(h, 22)) + ((h & d[1]) ^ (h & d[2]) ^ (d[1] & d[2])))) | 0,
          ].concat(d))[4] = (d[4] + E) | 0;
        }
        for (n = 0; n < 8; n++) d[n] = (d[n] + y[n]) | 0;
      }
      for (n = 0; n < 8; n++)
        for (r = 3; r + 1; r--) {
          var S = (d[n] >> (8 * r)) & 255;
          l += (S < 16 ? 0 : '') + S.toString(16);
        }
      return l;
    }
    var D2 = (e) => new Uint8Array(e).reduce((t, n) => t + String.fromCharCode(n), ''),
      z2 = (e) => window.btoa(Array.isArray(e) ? D2(e) : e),
      Pl = (e) => z2(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''),
      U2 = (e) => Array.from(e.match(/.{1,2}/g) ?? [], (t) => parseInt(t, 16)),
      $2 = () =>
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10),
      Ks = (e) =>
        Object.entries(e)
          .map(([t, n]) => `${encodeURIComponent(t)}=${encodeURIComponent(n)}`)
          .join('&'),
      W2 = ({ error: e }) => e === 'authorization_pending',
      G2 = ({ error_description: e }) => e === 'Not OAuth beta user',
      q2 = async (e) => {
        let t = Pl($2()),
          n = Pl(U2(da(t))),
          r = await fetch(`${jr}/authorize`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
            body: Ks({ client_id: 'chromaui:addon-visual-tests', code_challenge: n }),
          }),
          {
            device_code: i,
            user_code: o,
            verification_uri_complete: l,
            expires_in: s,
            interval: c,
          } = await r.json(),
          d = e ? l.replace('https://www', `https://${e}`) : l;
        return {
          expires: Date.now() + s * 1e3,
          interval: c * 1e3,
          user_code: o,
          device_code: i,
          verifier: t,
          verificationUrl: d,
        };
      },
      Y2 = async ({ expires: e, device_code: t, verifier: n }) => {
        if (Date.now() >= e) throw new Error('Token exchange expired, please restart sign in.');
        try {
          let r = await (
            await fetch(`${jr}/token`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
              body: Ks({
                client_id: 'chromaui:addon-visual-tests',
                grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
                device_code: t,
                code_verifier: n,
                scope: 'user:read account:read project:read project:write',
              }),
            })
          ).json();
          if (W2(r))
            throw new Error(
              'You have not authorized the Visual Tests addon for Chromatic, please try again',
            );
          if (r.access_token) return r.access_token;
          if (G2(r)) return alert('You must be a beta user to use this addon at this time.'), null;
          throw new Error();
        } catch (r) {
          throw (console.warn(r), r);
        }
      };
    function Js() {
      let e = vn(),
        { addNotification: t, setOptions: n, togglePanel: r } = e,
        i = W(
          ({ onDismiss: o }) => {
            o(), n({ selectedPanel: qt }), r(!0);
          },
          [n, r],
        );
      return W(
        (o, l) => {
          t({
            id: `${U}/error/${Date.now()}`,
            content: { headline: o, subHeadline: l.toString() },
            icon: a.createElement(Wt, { color: Lt.negative }),
            onClick: i,
          });
        },
        [t, i],
      );
    }
    var ea = new Map(),
      Q2 = (e, t, n) => {
        let r = () => {
            window.clearTimeout(ea.get(e)), ea.delete(e);
          },
          i = (...o) => {
            ea.has(e) ? r() : t(...o),
              ea.set(
                e,
                window.setTimeout(() => ea.delete(e) && t(...o), n),
              );
          };
        return (i.cancel = r), i;
      };
    function rt(e, t) {
      let n = W(() => {
          try {
            let s = sessionStorage.getItem(`${U}/state/${e}`);
            if (s != null) return JSON.parse(s);
          } catch {}
          return typeof t == 'function' ? t() : t;
        }, [e, t]),
        [r, i] = Re(n),
        o = jt(
          () =>
            Q2(
              e,
              (s) => {
                let c = new Set(sessionStorage.getItem(`${U}/state`)?.split(';'));
                s == null
                  ? (sessionStorage.removeItem(`${U}/state/${e}`), c.delete(e))
                  : (sessionStorage.setItem(`${U}/state/${e}`, JSON.stringify(s)), c.add(e)),
                  sessionStorage.setItem(`${U}/state`, Array.from(c).join(';')),
                  window.dispatchEvent(new StorageEvent('session-storage', { key: e }));
              },
              1e3,
            ),
          [e],
        );
      oe(() => o.cancel, [o]);
      let l = W(
        (s) => {
          let c = s;
          (!c.key || c.key === e) && i(n());
        },
        [e, n],
      );
      return (
        oe(
          () => (
            window.addEventListener('storage', l),
            window.addEventListener('session-storage', l),
            () => {
              window.removeEventListener('storage', l),
                window.removeEventListener('session-storage', l);
            }
          ),
          [l],
        ),
        [
          r,
          W(
            (s) =>
              i((c) => {
                let d = typeof s == 'function' ? s(c) : s;
                return o(d), d;
              }),
            [o],
          ),
        ]
      );
    }
    function K2(...e) {
      let t = sessionStorage.getItem(`${U}/state`)?.split(';') || [];
      e.length
        ? (e.forEach((n) => sessionStorage.removeItem(`${U}/state/${n}`)),
          sessionStorage.setItem(`${U}/state`, t.filter((n) => !e.includes(n)).join(';')))
        : (t.forEach((n) => sessionStorage.removeItem(`${U}/state/${n}`)),
          sessionStorage.removeItem(`${U}/state`));
    }
    var Xs = Je(void 0),
      J2 = ({ children: e, addonUninstalled: t, setAddonUninstalled: n }) => {
        let r = vn().getChannel();
        if (!r) throw new Error('Channel not available');
        let i = () => {
          r.emit(ps), n(!0);
        };
        return a.createElement(
          Xs.Provider,
          { value: { addonUninstalled: t, uninstallAddon: i } },
          e,
        );
      },
      Ro = () => Ot(Xs, 'Uninstall Addon'),
      ye = w.div({
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }),
      fe = w.h1(({ theme: e }) => ({
        marginTop: 0,
        marginBottom: 4,
        fontSize: '1em',
        fontWeight: 'bold',
        color: e.base === 'light' ? e.color.defaultText : e.color.lightest,
      })),
      e0 = (e) =>
        a.createElement(
          'svg',
          {
            width: '58',
            height: '53',
            viewBox: '0 0 58 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement(
            'g',
            { filter: 'url(#filter0_dd_304_317890)' },
            a.createElement('rect', {
              x: '6',
              y: '2',
              width: '40',
              height: '40',
              rx: '8',
              fill: '#FF4785',
              shapeRendering: 'crispEdges',
            }),
            a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M17.5005 11.0555C16.8471 11.0963 16.3455 11.6508 16.37 12.3051L17.1135 32.1151C17.137 32.7426 17.6379 33.2471 18.2651 33.2753L34.3716 33.9987C34.3896 33.9995 34.4077 33.9999 34.4257 33.9999C35.0921 33.9999 35.6324 33.4597 35.6324 32.7932V11.2067C35.6324 11.1816 35.6316 11.1565 35.63 11.1314C35.5885 10.4663 35.0156 9.96082 34.3505 10.0024L33.0259 10.0853L33.1227 12.8548C33.1261 12.9541 33.0484 13.0375 32.949 13.041C32.9065 13.0424 32.8648 13.0288 32.8314 13.0025L31.939 12.2995L30.8825 13.1009C30.8033 13.161 30.6904 13.1455 30.6303 13.0663C30.605 13.033 30.5921 12.9919 30.5939 12.9501L30.707 10.2302L17.5005 11.0555ZM31.221 19.1936C30.7965 19.5234 27.6343 19.7484 27.6343 19.2789C27.7011 17.4876 26.8991 17.409 26.4536 17.409C26.0303 17.409 25.3174 17.537 25.3174 18.4966C25.3174 19.4746 26.3592 20.0267 27.582 20.6747C29.3191 21.5952 31.4215 22.7093 31.4215 25.5128C31.4215 28.1998 29.2383 29.6842 26.4536 29.6842C23.5797 29.6842 21.0683 28.5215 21.352 24.4904C21.4633 24.0171 25.1169 24.1296 25.1169 24.4904C25.0723 26.1538 25.4511 26.6431 26.409 26.6431C27.1442 26.6431 27.4783 26.2379 27.4783 25.5554C27.4783 24.5227 26.3929 23.9133 25.1442 23.2122C23.4534 22.2629 21.4633 21.1456 21.4633 18.5819C21.4633 16.0229 23.2233 14.3168 26.3645 14.3168C29.5056 14.3168 31.221 15.9967 31.221 19.1936Z',
              fill: 'white',
            }),
          ),
          a.createElement('circle', {
            cx: '46',
            cy: '22',
            r: '2.5',
            fill: 'white',
            stroke: '#FF4785',
          }),
          a.createElement('path', {
            d: 'M57.8536 22.3536C58.0488 22.1583 58.0488 21.8417 57.8536 21.6464L54.6716 18.4645C54.4763 18.2692 54.1597 18.2692 53.9645 18.4645C53.7692 18.6597 53.7692 18.9763 53.9645 19.1716L56.7929 22L53.9645 24.8284C53.7692 25.0237 53.7692 25.3403 53.9645 25.5355C54.1597 25.7308 54.4763 25.7308 54.6716 25.5355L57.8536 22.3536ZM48.5 22.5H57.5V21.5H48.5V22.5Z',
            fill: '#FF4785',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'filter',
              {
                id: 'filter0_dd_304_317890',
                x: '0',
                y: '0',
                width: '52',
                height: '53',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB',
              },
              a.createElement('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '5' }),
              a.createElement('feGaussianBlur', { stdDeviation: '3' }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_304_317890',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '1' }),
              a.createElement('feGaussianBlur', { stdDeviation: '1.5' }),
              a.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'effect1_dropShadow_304_317890',
                result: 'effect2_dropShadow_304_317890',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect2_dropShadow_304_317890',
                result: 'shape',
              }),
            ),
          ),
        ),
      pn = (e) =>
        a.createElement(
          'svg',
          {
            width: '52',
            height: '53',
            viewBox: '0 0 52 53',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement(
            'g',
            { filter: 'url(#filter0_dd_304_317945)' },
            a.createElement(
              'g',
              { clipPath: 'url(#clip0_304_317945)' },
              a.createElement('rect', {
                x: '6',
                y: '2',
                width: '40',
                height: '40',
                rx: '8',
                fill: '#288041',
              }),
              a.createElement(
                'g',
                { clipPath: 'url(#clip1_304_317945)' },
                a.createElement('rect', {
                  x: '14.75',
                  y: '10.75',
                  width: '22.5',
                  height: '22.5',
                  rx: '2',
                  fill: '#215D31',
                }),
                a.createElement('rect', {
                  x: '20.6104',
                  y: '20.1591',
                  width: '20.1485',
                  height: '20.1485',
                  transform: 'rotate(45 20.6104 20.1591)',
                  fill: '#93D4A5',
                }),
                a.createElement('rect', {
                  x: '30.9502',
                  y: '16.59',
                  width: '20.1485',
                  height: '20.1485',
                  transform: 'rotate(45 30.9502 16.59)',
                  fill: '#93D4A5',
                }),
                a.createElement('circle', {
                  cx: '20.435',
                  cy: '16.2246',
                  r: '2.45455',
                  fill: '#93D4A5',
                }),
              ),
              a.createElement('rect', {
                x: '7.05469',
                y: '3',
                width: '53.75',
                height: '32.25',
                transform: 'rotate(45 7.05469 3)',
                fill: '#67B47C',
              }),
              a.createElement(
                'g',
                { clipPath: 'url(#clip2_304_317945)' },
                a.createElement(
                  'g',
                  { clipPath: 'url(#clip3_304_317945)' },
                  a.createElement('rect', {
                    x: '14.75',
                    y: '10.75',
                    width: '22.5',
                    height: '22.5',
                    rx: '2',
                    fill: '#2B733F',
                  }),
                  a.createElement('rect', {
                    x: '21.3604',
                    y: '21.6592',
                    width: '20.1485',
                    height: '20.1485',
                    transform: 'rotate(45 21.3604 21.6592)',
                    fill: '#A9E0B8',
                  }),
                  a.createElement('rect', {
                    x: '32.2012',
                    y: '18.5908',
                    width: '20.1485',
                    height: '20.1485',
                    transform: 'rotate(45 32.2012 18.5908)',
                    fill: '#A9E0B8',
                  }),
                  a.createElement('circle', {
                    cx: '21.685',
                    cy: '17.9746',
                    r: '2.45455',
                    fill: '#A9E0B8',
                  }),
                ),
              ),
            ),
          ),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'filter',
              {
                id: 'filter0_dd_304_317945',
                x: '0',
                y: '0',
                width: '52',
                height: '53',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB',
              },
              a.createElement('feFlood', { floodOpacity: '0', result: 'BackgroundImageFix' }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '5' }),
              a.createElement('feGaussianBlur', { stdDeviation: '3' }),
              a.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_304_317945',
              }),
              a.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha',
              }),
              a.createElement('feOffset', { dy: '1' }),
              a.createElement('feGaussianBlur', { stdDeviation: '1.5' }),
              a.createElement('feComposite', { in2: 'hardAlpha', operator: 'out' }),
              a.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in2: 'effect1_dropShadow_304_317945',
                result: 'effect2_dropShadow_304_317945',
              }),
              a.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect2_dropShadow_304_317945',
                result: 'shape',
              }),
            ),
            a.createElement(
              'clipPath',
              { id: 'clip0_304_317945' },
              a.createElement('rect', {
                x: '6',
                y: '2',
                width: '40',
                height: '40',
                rx: '8',
                fill: 'white',
              }),
            ),
            a.createElement(
              'clipPath',
              { id: 'clip1_304_317945' },
              a.createElement('rect', {
                x: '14.75',
                y: '10.75',
                width: '22.5',
                height: '22.5',
                rx: '2',
                fill: 'white',
              }),
            ),
            a.createElement(
              'clipPath',
              { id: 'clip2_304_317945' },
              a.createElement('rect', {
                width: '60.7428',
                height: '29.9046',
                fill: 'white',
                transform: 'translate(7.20801 3.17212) rotate(45)',
              }),
            ),
            a.createElement(
              'clipPath',
              { id: 'clip3_304_317945' },
              a.createElement('rect', {
                x: '14.75',
                y: '10.75',
                width: '22.5',
                height: '22.5',
                rx: '2',
                fill: 'white',
              }),
            ),
          ),
        ),
      X2 = ht(Vr()),
      t0 = w.div({ display: 'flex', flexDirection: 'column' }),
      oo = w.div(({ theme: e }) => ({
        padding: 15,
        lineHeight: '18px',
        borderBottom: `1px solid ${e.appBorderColor}`,
        p: { margin: '10px 0', '&:last-of-type': { marginBottom: 0 } },
        dl: { display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 10, margin: '10px 0 0 0' },
        dt: { color: e.color.mediumdark, fontWeight: 700 },
        dd: { marginLeft: 0 },
        'button + button': { marginLeft: 10 },
      })),
      kr = w.div({ display: 'flex', fontWeight: 'bold', marginBottom: 15 }),
      Vl = w(Fd)(({ theme: e }) => ({
        width: 12,
        height: 12,
        margin: '3px 6px',
        verticalAlign: 'top',
        color: e.color.mediumdark,
      })),
      $r = { width: 14, height: 14, margin: '2px 6px 2px 0', verticalAlign: 'top' },
      em = w(Vd)($r),
      tm = w(Ed)($r),
      nm = w(ns)($r),
      am = w(wd)($r),
      Bo = w(wo)({ marginLeft: 'auto' }),
      Po = w(ot)({ margin: -5, marginLeft: 'auto' }),
      ue = w(mi)(
        {
          '&&': {
            display: 'inline-flex',
            borderRadius: 4,
            fontSize: 13,
            lineHeight: '14px',
            padding: '9px 12px',
            alignItems: 'center',
            '@container (min-width: 800px)': { padding: '8px 10px' },
          },
        },
        ({ link: e, theme: t }) =>
          e &&
          he({
            '&&': {
              background: 'none',
              boxShadow: 'none',
              padding: 2,
              fontWeight: 'normal',
              color: t.base === 'light' ? t.color.dark : '#C9CDCF',
              opacity: 0.8,
              transition: 'opacity 150ms ease-out',
              '&:hover, &:focus': { opacity: 1 },
              '&:focus:not(:active)': { outline: `1px solid ${t.color.secondary}` },
            },
          }),
        ({ tertiary: e }) => e && he({ '&&:hover': { boxShadow: 'none' } }),
        ({ belowText: e }) => e && { marginTop: 7 },
      ),
      De = w(ol)(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.darker : e.color.lighter,
        border: `1px solid ${e.appBorderColor}`,
        fontSize: '12px',
        padding: '2px 3px',
      })),
      rm = {
        autoAcceptChanges: {
          description: 'Automatically accept visual changes - usually for a specific branch name.',
          type: 'true or branch name',
        },
        buildScriptName: {
          description: 'The package.json script that builds your Storybook.',
          type: 'string',
        },
        cypress: {
          description: 'Run build against `@chromatic-com/cypress` test archives.',
          type: 'boolean',
        },
        debug: { description: 'Output verbose logs and debug information.', type: 'boolean' },
        diagnosticsFile: {
          description: 'Write process information to a JSON file.',
          type: 'string or boolean',
        },
        exitOnceUploaded: {
          description: 'Exit the process as soon as your Storybook is published.',
          type: 'string or boolean',
        },
        exitZeroOnChanges: {
          description: 'Exit the process succesfully even when visual changes are found.',
          type: 'string or boolean',
        },
        externals: {
          description:
            'Disable TurboSnap when any of these files have changed since the baseline build.',
          type: "string: ['public/**']",
        },
        fileHashing: {
          description: 'Apply file hashing to skip uploading unchanged files - default: true',
          type: 'boolean',
        },
        ignoreLastBuildOnBranch: {
          description:
            'Do not use the last build on this branch as a baseline if it is no longer in history (i.e. branch was rebased).',
          type: 'string',
        },
        junitReport: {
          description: 'Write build results to a JUnit XML file.',
          type: 'string or boolean',
        },
        logFile: { description: 'Write Chromatic CLI logs to a file.', type: 'string or boolean' },
        onlyChanged: {
          description:
            'Enables TurboSnap to only run stories affected by files changed since the baseline build.',
          type: 'true or string (branch name)',
          glob: !0,
        },
        onlyStoryFiles: {
          description: 'Only run a single story or a subset of stories by their filename(s).',
          type: 'string[]',
        },
        onlyStoryNames: {
          description: 'Only run a single story or a subset of stories by their name(s).',
          type: 'string[]',
        },
        outputDir: {
          description:
            'Relative path to target directory for building your Storybook, in case you want to preserve it.',
          type: 'string',
        },
        playwright: {
          description: 'Run build against `@chromatic-com/playwright` test archives.',
          type: 'boolean',
        },
        projectId: { description: 'Unique identifier for your project. ', type: 'string' },
        projectToken: {
          description:
            'Secret token for your project. Preferably configured through CHROMATIC_PROJECT_TOKEN.',
          type: 'string',
        },
        skip: {
          description:
            'Skip Chromatic tests, but mark the commit as passing. Avoids blocking PRs due to required merge checks.',
          type: 'string or boolean',
        },
        storybookBaseDir: {
          description: 'Relative path from repository root to Storybook project root.',
          type: 'string',
        },
        storybookBuildDir: {
          description: 'Path to the directory of an already built Storybook.',
          type: 'string',
        },
        storybookConfigDir: {
          description:
            'Relative path from where you run Chromatic to your Storybook config directory.',
          type: 'string',
        },
        storybookLogFile: {
          description: 'Write Storybook build logs to a file.',
          type: 'string or boolean',
        },
        untraced: {
          description:
            'Disregard these files and their dependencies when tracing dependent stories for TurboSnap.',
          type: 'string[]',
        },
        uploadMetadata: {
          description: 'Upload Chromatic metadata files as part of the published Storybook.',
          type: 'boolean',
        },
        zip: {
          description:
            'Publish your Storybook to Chromatic as a single zip file instead of individual content files.',
          type: 'boolean',
        },
      },
      im = w(Po)({ position: 'absolute', right: 16, top: 10 }),
      om = w.div(({ theme: e }) => ({
        backgroundColor: e.background.content,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        overflowY: 'auto',
        padding: 20,
        position: 'relative',
      })),
      lm = w.div({ margin: '0 auto', maxWidth: 600, width: '100%' }),
      jl = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        marginBottom: 20,
        paddingBottom: 20,
        code: { fontSize: '90%' },
      })),
      sm = w(kr)({ marginBottom: 10 }),
      cm = w.div({ display: 'flex', flexDirection: 'column', gap: 20 }),
      Hl = w.div(({ theme: e }) => ({
        alignItems: 'center',
        borderRadius: e.appBorderRadius,
        display: 'flex',
        flexWrap: 'wrap',
        '> div': { width: '100%' },
      })),
      Dl = w.div(({ theme: e }) => ({
        display: 'flex',
        flexGrow: 1,
        flexWrap: 'wrap',
        gap: '5px 10px',
      })),
      zl = w.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        div: { marginLeft: 5, position: 'relative', top: 2 },
      })),
      Ul = w.div({ marginTop: 10 }),
      dm = w.div(({ hideBorderRadius: e, theme: t }) => ({
        background: t.base === 'dark' ? t.color.darkest : t.color.lighter,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: t.appBorderRadius,
        borderBottomLeftRadius: e ? 0 : t.appBorderRadius,
        borderBottomRightRadius: e ? 0 : t.appBorderRadius,
        color: t.base === 'dark' ? t.color.medium : t.color.dark,
        fontFamily: t.typography.fonts.mono,
        fontSize: 13,
        lineHeight: '20px',
        padding: '5px 10px',
        wordWrap: 'break-word',
      })),
      um = w.div(({ theme: e }) => ({ color: e.color.warningText })),
      $l = w.div(({ theme: e }) => ({
        color: e.base === 'dark' ? e.color.medium : e.color.dark,
        marginTop: 2,
      })),
      Wl = w.div(({ warning: e, theme: t }) => ({
        alignItems: 'center',
        display: 'flex',
        backgroundColor: e
          ? t.base === 'dark'
            ? '#342E1A'
            : t.background.warning
          : t.background.hoverable,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0,
        fontSize: t.typography.size.s1,
        gap: 5,
        lineHeight: '20px',
        padding: 5,
        svg: {
          color: e
            ? t.base === 'dark'
              ? t.color.warning
              : t.color.warningText
            : t.color.secondary,
          flexShrink: 0,
        },
        code: { fontSize: '85%' },
      })),
      mm = w.div(({ theme: e }) => ({
        '&:nth-last-of-type(2)': {
          borderBottom: `1px solid ${e.appBorderColor}`,
          paddingBottom: 30,
        },
      })),
      n0 = { height: 12, margin: 2, verticalAlign: 'top', width: 12 },
      pm = w(Od)(n0),
      hm = w(xd)(n0),
      fm = ({ onClose: e }) => {
        let { uninstallAddon: t } = Ro(),
          [n] = Ie(Co),
          { configuration: r = {}, problems: i = {}, suggestions: o = {} } = n || {},
          { configFile: l, ...s } = r,
          c = Object.keys({ ...s, ...i, ...o })
            .sort()
            .map((d) => ({
              key: d,
              value: d in s ? s[d] : void 0,
              problem: i[d],
              suggestion: o[d],
            }));
        return a.createElement(
          om,
          null,
          a.createElement(
            im,
            { onClick: e, style: { marginRight: -8 } },
            a.createElement(Bo, { 'aria-label': 'Close' }),
          ),
          a.createElement(
            lm,
            null,
            a.createElement(sm, null, 'Configuration'),
            l
              ? a.createElement(
                  jl,
                  null,
                  'This is a read-only representation of the Chromatic configuration options found in',
                  ' ',
                  a.createElement(De, null, l),
                  '. Changes to the config file will be reflected here.',
                  ' ',
                  a.createElement(
                    bn,
                    {
                      href: 'https://www.chromatic.com/docs/cli/#configuration-options',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Learn more',
                  ),
                )
              : a.createElement(
                  jl,
                  null,
                  'To configure this addon, create ',
                  a.createElement(De, null, 'chromatic.config.json'),
                  " in your project's root directory.",
                  ' ',
                  a.createElement(
                    bn,
                    {
                      href: 'https://www.chromatic.com/docs/cli/#configuration-options',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Learn more',
                  ),
                ),
            c &&
              a.createElement(
                cm,
                null,
                c.map(({ key: d, value: u, problem: m, suggestion: p }) =>
                  a.createElement(
                    mm,
                    { key: d, id: `${d}-option` },
                    a.createElement(
                      Hl,
                      null,
                      a.createElement(
                        Dl,
                        null,
                        a.createElement(zl, null, d, ' '),
                        d in Jd && a.createElement(um, null, '*Disabled for local builds'),
                      ),
                      a.createElement($l, null, rm[d]?.description),
                      a.createElement(
                        Ul,
                        null,
                        a.createElement(
                          dm,
                          { hideBorderRadius: !!(m || p) },
                          u === void 0 ? 'undefined' : JSON.stringify(u),
                        ),
                      ),
                    ),
                    m !== void 0 &&
                      a.createElement(
                        Wl,
                        { warning: !0 },
                        a.createElement(pm, null),
                        m === null
                          ? a.createElement(
                              'span',
                              null,
                              a.createElement('strong', null, 'Warning: '),
                              'This should be removed.',
                            )
                          : a.createElement(
                              'span',
                              null,
                              a.createElement('strong', null, 'Warning: '),
                              'This should be: ',
                              a.createElement(De, null, JSON.stringify(m)),
                            ),
                      ),
                    p !== void 0 &&
                      a.createElement(
                        Wl,
                        null,
                        a.createElement(hm, null),
                        a.createElement(
                          'span',
                          null,
                          a.createElement('strong', null, 'Hint: '),
                          'Try setting as ',
                          a.createElement(De, null, JSON.stringify(p)),
                        ),
                      ),
                  ),
                ),
                a.createElement(
                  'div',
                  null,
                  a.createElement(
                    Hl,
                    null,
                    a.createElement(Dl, null, a.createElement(zl, null, 'Uninstall addon')),
                    a.createElement(
                      $l,
                      null,
                      'Removing the addon updates your Storybook configuration and uninstalls the dependency.',
                    ),
                    a.createElement(Ul, null, a.createElement(ue, { onClick: t }, 'Uninstall')),
                  ),
                ),
              ),
          ),
        );
      },
      a0 = {
        configVisible: !1,
        settingsVisible: !1,
        warningsVisible: !1,
        baselineImageVisible: !1,
        focusVisible: !1,
        diffVisible: !1,
      },
      kn = (e) => (t, n) => ({ ...t, [e]: typeof n == 'boolean' ? n : !t[e] }),
      gm = {
        toggleDiff: kn('diffVisible'),
        toggleFocus: kn('focusVisible'),
        toggleConfig: kn('configVisible'),
        toggleSettings: kn('settingsVisible'),
        toggleWarnings: kn('warningsVisible'),
        toggleBaselineImage: kn('baselineImageVisible'),
      },
      vm = (e, t) => gm[t.type](e, t.payload),
      r0 = Je(a0),
      i0 = Je(() => {}),
      Wr = () => Ot(r0, 'Controls'),
      Pn = () => {
        let e = Ot(i0, 'ControlsDispatch');
        return jt(
          () => ({
            toggleDiff: (t) => e({ type: 'toggleDiff', payload: t }),
            toggleFocus: (t) => e({ type: 'toggleFocus', payload: t }),
            toggleConfig: (t) => e({ type: 'toggleConfig', payload: t }),
            toggleSettings: (t) => e({ type: 'toggleSettings', payload: t }),
            toggleWarnings: (t) => e({ type: 'toggleWarnings', payload: t }),
            toggleBaselineImage: (t) => e({ type: 'toggleBaselineImage', payload: t }),
          }),
          [e],
        );
      },
      ym = ({ children: e, initialState: t = a0 }) => {
        let [n, r] = ci(vm, t);
        return a.createElement(
          r0.Provider,
          { value: n },
          a.createElement(i0.Provider, { value: r }, e),
        );
      },
      bm = w.div({ '& > div': { minWidth: 120 } }),
      Ea = ({ children: e, links: t, note: n, ...r }) => {
        let [i, o] = a.useState(!1),
          l = a.createElement(
            Le,
            {
              closeOnOutsideClick: !0,
              closeOnTriggerHidden: !0,
              onVisibleChange: (s) => o(s),
              tooltip: ({ onHide: s }) =>
                a.createElement(
                  bm,
                  null,
                  a.createElement(sl, {
                    links: t.map((c) => ({ ...c, onClick: (...d) => (s(), c.onClick?.(...d)) })),
                  }),
                ),
              trigger: 'click',
              ...r,
            },
            typeof e == 'function' ? e(i) : a.createElement(ot, { active: i }, e),
          );
        return n
          ? a.createElement(
              Le,
              { tooltip: a.createElement(je, { note: n }), trigger: 'hover', hasChrome: !1 },
              l,
            )
          : l;
      },
      Gr = () => {
        let { accessToken: e, setAccessToken: t } = Gs(),
          { toggleConfig: n } = Pn(),
          [r] = Ie(ds),
          { projectId: i } = r || {},
          o = [
            {
              id: 'learn',
              title: 'About this addon',
              icon: a.createElement(is, { 'aria-hidden': !0 }),
              href: 'https://www.chromatic.com/docs/visual-testing-addon',
              target: '_blank',
            },
            {
              id: 'configuration',
              title: 'Configuration',
              icon: a.createElement(Cd, { 'aria-hidden': !0 }),
              onClick: () => n(),
            },
            ...(i
              ? [
                  {
                    id: 'visit',
                    title: 'View project on Chromatic',
                    icon: a.createElement(os, { 'aria-hidden': !0 }),
                    href: i
                      ? `https://www.chromatic.com/builds?appId=${i?.split(':')[1]}`
                      : 'https://www.chromatic.com/start',
                    target: '_blank',
                  },
                ]
              : []),
            ...(e
              ? [
                  {
                    id: 'logout',
                    title: 'Log out',
                    icon: a.createElement(jd, { 'aria-hidden': !0 }),
                    onClick: () => t(null),
                  },
                ]
              : []),
          ];
        return a.createElement(Ea, { placement: 'top', links: o }, a.createElement(Sd, null));
      };
    w.div(({ hidden: e, theme: t }) => ({
      background: t.background.app,
      containerType: 'size',
      display: e ? 'none' : 'flex',
      flexDirection: 'column',
      height: '100%',
    }));
    var Em = w.div(
        { display: 'flex', flexDirection: 'column', flexGrow: 1 },
        ({ hidden: e }) => e && { display: 'none' },
      ),
      ha = w.div(({ grow: e }) => e && { flexGrow: e ? 1 : 'auto' }),
      ua = w.div(
        { display: 'flex', flexDirection: 'row', margin: 15 },
        ({ header: e, theme: t }) =>
          e && {
            margin: 0,
            padding: 15,
            borderBottom: `1px solid ${t.appBorderColor}`,
            '@container (min-width: 800px)': {
              height: 40,
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '5px 15px',
            },
          },
      ),
      km = w(ua)({ alignItems: 'center', height: 40, margin: '0 10px' }),
      lt = w.div(
        { display: 'flex', flexDirection: 'column', alignItems: 'center' },
        ({ push: e }) => e && { marginLeft: 'auto' },
      ),
      Gl = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        display: 'flex',
        alignItems: 'center',
        minHeight: 40,
        lineHeight: '20px',
        padding: '5px 15px',
      })),
      wm = w(ha)(({ theme: e }) => ({
        background: e.background.warning,
        color: e.color.warningText,
      })),
      Cm = w(ha)(({ theme: e }) => ({
        background: e.background.hoverable,
        color: e.color.defaultText,
      })),
      Sm = ({ hidden: e, ignoreConfig: t, ignoreSuggestions: n, onOpen: r }) => {
        let [i] = Ie(Co),
          o = Object.keys(i?.problems || {}),
          l = Object.keys(i?.suggestions || {}),
          [s, c] = Re(() => !!localStorage.getItem(bl)),
          d = W(() => {
            c(!0), localStorage.setItem(bl, 'true');
          }, []),
          u = a.createElement(
            $e,
            { isButton: !0, onClick: () => r(o[0] || l[0]), withArrow: !0 },
            'Show details',
          );
        return o.length > 0 && !t
          ? a.createElement(
              wm,
              { hidden: e },
              a.createElement(
                Gl,
                null,
                a.createElement(
                  lt,
                  null,
                  a.createElement(
                    'span',
                    null,
                    'Visual tests locked due to configuration ',
                    (0, X2.default)('problem', o.length),
                    '.',
                    ' ',
                    u,
                  ),
                ),
              ),
            )
          : l.length > 0 && !s && !t && !n
            ? a.createElement(
                Cm,
                { hidden: e },
                a.createElement(
                  Gl,
                  null,
                  a.createElement(
                    lt,
                    null,
                    a.createElement('span', null, 'Configuration could be improved. ', u),
                  ),
                  a.createElement(
                    lt,
                    { push: !0 },
                    a.createElement(ot, { onClick: d }, a.createElement(wo, null)),
                  ),
                ),
              )
            : null;
      },
      xm = w.div({ display: 'flex', flexDirection: 'column', height: '100%' }),
      ql = w.div(({ hidden: e, theme: t }) => ({
        background: t.background.app,
        display: e ? 'none' : 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: '100%',
        overflowY: 'auto',
      })),
      qr = w.div(({ theme: e }) => ({
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 39,
        flexShrink: 0,
        padding: '0 10px',
      })),
      Ne = ({
        children: e,
        footer: t = a.createElement(
          qr,
          null,
          a.createElement(lt, { push: !0 }),
          a.createElement(lt, null, a.createElement(Gr, null)),
        ),
        ignoreConfig: n = !1,
        ignoreSuggestions: r = !t,
      }) => {
        let { configVisible: i } = Wr(),
          { toggleConfig: o } = Pn(),
          l = W(
            (s) => {
              o(!0),
                s &&
                  setTimeout(() => {
                    document
                      .getElementById(`${s}-option`)
                      ?.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
                  }, 200);
            },
            [o],
          );
        return a.createElement(
          xm,
          null,
          a.createElement(Sm, { onOpen: l, hidden: i, ignoreConfig: n, ignoreSuggestions: r }),
          a.createElement(ql, { hidden: i }, e),
          a.createElement(ql, { hidden: !i }, a.createElement(fm, { onClose: () => o(!1) })),
          t,
        );
      },
      Mm = w.div(({ theme: e }) => ({
        position: 'relative',
        '&& input': {
          color: e.input.color || 'inherit',
          background: e.input.background,
          boxShadow: `${e.input.border} 0 0 0 1px inset`,
          fontSize: e.typography.size.s2,
          lineHeight: '20px',
        },
      })),
      Nm = w.div(({ theme: e }) => ({
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 40,
        right: 0,
        zIndex: 2,
        overflow: 'hidden',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        color: e.input.color || 'inherit',
        fontSize: e.typography.size.s2,
        span: { opacity: 0 },
      })),
      Fm = ({ value: e, placeholder: t, suffix: n }) =>
        a.createElement(
          Nm,
          null,
          a.createElement('span', null, e || t),
          a.createElement('b', null, n),
        ),
      Am = ({ id: e, value: t, placeholder: n, suffix: r, ...i }) =>
        a.createElement(
          Mm,
          null,
          a.createElement(Qs, {
            id: e,
            hideLabel: !0,
            label: '',
            value: t,
            placeholder: n,
            crossOrigin: void 0,
            enterKeyHint: void 0,
            ...i,
          }),
          a.createElement(Fm, { value: t, placeholder: n, suffix: r }),
        ),
      Yl = w(ot)(({ theme: e }) => ({
        color: e.base === 'light' ? 'currentColor' : e.color.medium,
        fontSize: e.typography.size.s2,
        fontWeight: e.typography.weight.bold,
      })),
      Yr = ({ onBack: e }) =>
        a.createElement(
          km,
          null,
          e &&
            a.createElement(
              lt,
              null,
              a.createElement(Yl, { onClick: e }, a.createElement(Td, null), 'Back'),
            ),
          a.createElement(
            lt,
            { push: !0 },
            a.createElement(
              Le,
              {
                as: 'div',
                hasChrome: !1,
                trigger: 'hover',
                tooltip: a.createElement(je, { note: 'Learn about Visual Tests' }),
              },
              a.createElement(
                Yl,
                {
                  as: 'a',
                  href: 'https://www.chromatic.com/features/visual-test',
                  target: '_blank',
                },
                a.createElement(is, null),
              ),
            ),
          ),
        ),
      Om = w.form({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 300,
        margin: 10,
      }),
      Lm = w(mi)({
        '&&': {
          fontSize: 13,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        },
      }),
      Tm = ({ onBack: e, onSignIn: t }) => {
        let [n, r] = Re(''),
          [i, o] = Re(null),
          l = W((c) => {
            let d = c.target.value.replace(/[^a-z0-9-]/g, '');
            r(d), o(null);
          }, []),
          s = W(
            (c) => {
              c.preventDefault(), n ? t(n) : o('Please enter a subdomain');
            },
            [n, t],
          );
        return a.createElement(
          Ne,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Yr, { onBack: e }),
          a.createElement(
            ye,
            null,
            a.createElement('div', null, a.createElement(e0, null), a.createElement(pn, null)),
            a.createElement(fe, null, 'Sign in with SSO'),
            a.createElement(G, { muted: !0 }, "Enter your team's Chromatic URL."),
            a.createElement(
              Om,
              { onSubmit: s },
              a.createElement(Am, {
                autoFocus: !0,
                icon: 'users',
                value: n,
                placeholder: 'yourteam',
                suffix: '.chromatic.com',
                onChange: l,
                id: 'subdomain-input',
                stackLevel: 'top',
                error: i,
                errorTooltipPlacement: 'top',
              }),
              a.createElement(Lm, { type: 'submit', variant: 'solid', size: 'medium' }, 'Continue'),
            ),
          ),
        );
      },
      Ft = w.div(() => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        alignItems: 'center',
        textAlign: 'center',
      })),
      de = w.div((e) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        alignItems: e.alignItems ?? 'center',
        textAlign: e.textAlign ?? 'center',
      })),
      _m = ({ onBack: e, onSignIn: t, onSignInWithSSO: n }) =>
        a.createElement(
          Ne,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Yr, { onBack: e }),
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              { alignItems: 'center', textAlign: 'center' },
              a.createElement(
                'div',
                null,
                a.createElement(e0, null),
                a.createElement(pn, null),
                a.createElement(fe, null, 'Sign in to begin visual testing'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Pinpoint bugs instantly by connecting with cloud browsers that run visual tests in parallel.',
                ),
              ),
              a.createElement(
                Ft,
                null,
                a.createElement(
                  ue,
                  { variant: 'solid', size: 'medium', onClick: () => t() },
                  'Sign in with Chromatic',
                ),
                a.createElement(ue, { link: !0, onClick: () => n() }, 'Sign in with SSO'),
              ),
            ),
          ),
        );
    function Nn(e, t) {
      return t;
    }
    var Zm = {
      '\n  query VisualTestsProjectCountQuery {\n    viewer {\n      projectCount\n      accounts {\n        newProjectUrl\n      }\n    }\n  }\n':
        e2,
      '\n  query SelectProjectsQuery {\n    viewer {\n      accounts {\n        id\n        name\n        avatarUrl\n        newProjectUrl\n        projects {\n          id\n          name\n          webUrl\n          lastBuild {\n            branch\n            number\n          }\n        }\n      }\n    }\n  }\n':
        t2,
      '\n  query ProjectQuery($projectId: ID!) {\n    project(id: $projectId) {\n      id\n      name\n      webUrl\n      lastBuild {\n        branch\n        number\n      }\n    }\n  }\n':
        n2,
      '\n  mutation UpdateUserPreferences($input: UserPreferencesInput!) {\n    updateUserPreferences(input: $input) {\n      updatedPreferences {\n        vtaOnboarding\n      }\n    }\n  }\n':
        a2,
      '\n  query AddonVisualTestsBuild(\n    $projectId: ID!\n    $branch: String!\n    $gitUserEmailHash: String!\n    $repositoryOwnerName: String\n    $storyId: String!\n    $testStatuses: [TestStatus!]!\n    $selectedBuildId: ID!\n    $hasSelectedBuildId: Boolean!\n  ) {\n    project(id: $projectId) {\n      name\n      manageUrl\n      account {\n        billingUrl\n        suspensionReason\n      }\n      features {\n        uiTests\n      }\n      lastBuildOnBranch: lastBuild(\n        branches: [$branch]\n        repositoryOwnerName: $repositoryOwnerName\n        localBuilds: { localBuildEmailHash: $gitUserEmailHash }\n      ) {\n        ...LastBuildOnBranchBuildFields\n        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)\n      }\n      lastBuild {\n        id\n        slug\n        branch\n      }\n    }\n    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {\n      ...SelectedBuildFields\n    }\n    viewer {\n      preferences {\n        vtaOnboarding\n      }\n      projectMembership(projectId: $projectId) {\n        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)\n      }\n    }\n  }\n':
        r2,
      '\n  fragment LastBuildOnBranchBuildFields on Build {\n    __typename\n    id\n    status\n    committedAt\n    ... on StartedBuild {\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      result\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n  }\n':
        Ku,
      '\n  fragment SelectedBuildFields on Build {\n    __typename\n    id\n    number\n    branch\n    commit\n    committedAt\n    uncommittedHash\n    status\n    ... on StartedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n  }\n':
        Xu,
      '\n  fragment StatusTestFields on Test {\n    id\n    status\n    result\n    story {\n      storyId\n    }\n  }\n':
        Yu,
      '\n  fragment LastBuildOnBranchTestFields on Test {\n    status\n    result\n  }\n': Qu,
      '\n  fragment StoryTestFields on Test {\n    id\n    status\n    result\n    webUrl\n    comparisons {\n      id\n      result\n      browser {\n        id\n        key\n        name\n        version\n      }\n      captureDiff {\n        diffImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n        focusImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n      }\n      headCapture {\n        captureImage(signed: true) {\n          backgroundColor\n          imageUrl\n          imageWidth\n          imageHeight\n          thumbnailUrl\n        }\n        captureError {\n          kind\n          ... on CaptureErrorInteractionFailure {\n            error\n          }\n          ... on CaptureErrorJSError {\n            error\n          }\n          ... on CaptureErrorFailedJS {\n            error\n          }\n        }\n      }\n      baseCapture {\n        captureImage(signed: true) {\n          imageUrl\n          imageWidth\n          imageHeight\n        }\n      }\n    }\n    mode {\n      name\n      globals\n    }\n    story {\n      storyId\n      name\n      component {\n        name\n      }\n    }\n  }\n':
        Ju,
      '\n  mutation ReviewTest($input: ReviewTestInput!) {\n    reviewTest(input: $input) {\n      updatedTests {\n        id\n        status\n      }\n      userErrors {\n        ... on UserError {\n          __typename\n          message\n        }\n        ... on BuildSupersededError {\n          build {\n            id\n          }\n        }\n        ... on TestUnreviewableError {\n          test {\n            id\n          }\n        }\n      }\n    }\n  }\n':
        i2,
    };
    function gt(e) {
      return Zm[e] ?? {};
    }
    var se;
    (function (e) {
      e.assertEqual = (i) => i;
      function t(i) {}
      e.assertIs = t;
      function n(i) {
        throw new Error();
      }
      (e.assertNever = n),
        (e.arrayToEnum = (i) => {
          let o = {};
          for (let l of i) o[l] = l;
          return o;
        }),
        (e.getValidEnumValues = (i) => {
          let o = e.objectKeys(i).filter((s) => typeof i[i[s]] != 'number'),
            l = {};
          for (let s of o) l[s] = i[s];
          return e.objectValues(l);
        }),
        (e.objectValues = (i) =>
          e.objectKeys(i).map(function (o) {
            return i[o];
          })),
        (e.objectKeys =
          typeof Object.keys == 'function'
            ? (i) => Object.keys(i)
            : (i) => {
                let o = [];
                for (let l in i) Object.prototype.hasOwnProperty.call(i, l) && o.push(l);
                return o;
              }),
        (e.find = (i, o) => {
          for (let l of i) if (o(l)) return l;
        }),
        (e.isInteger =
          typeof Number.isInteger == 'function'
            ? (i) => Number.isInteger(i)
            : (i) => typeof i == 'number' && isFinite(i) && Math.floor(i) === i);
      function r(i, o = ' | ') {
        return i.map((l) => (typeof l == 'string' ? `'${l}'` : l)).join(o);
      }
      (e.joinValues = r),
        (e.jsonStringifyReplacer = (i, o) => (typeof o == 'bigint' ? o.toString() : o));
    })(se || (se = {}));
    var lo;
    (function (e) {
      e.mergeShapes = (t, n) => ({ ...t, ...n });
    })(lo || (lo = {}));
    var L = se.arrayToEnum([
        'string',
        'nan',
        'number',
        'integer',
        'float',
        'boolean',
        'date',
        'bigint',
        'symbol',
        'function',
        'undefined',
        'null',
        'array',
        'object',
        'unknown',
        'promise',
        'void',
        'never',
        'map',
        'set',
      ]),
      Dt = (e) => {
        switch (typeof e) {
          case 'undefined':
            return L.undefined;
          case 'string':
            return L.string;
          case 'number':
            return isNaN(e) ? L.nan : L.number;
          case 'boolean':
            return L.boolean;
          case 'function':
            return L.function;
          case 'bigint':
            return L.bigint;
          case 'symbol':
            return L.symbol;
          case 'object':
            return Array.isArray(e)
              ? L.array
              : e === null
                ? L.null
                : e.then && typeof e.then == 'function' && e.catch && typeof e.catch == 'function'
                  ? L.promise
                  : typeof Map < 'u' && e instanceof Map
                    ? L.map
                    : typeof Set < 'u' && e instanceof Set
                      ? L.set
                      : typeof Date < 'u' && e instanceof Date
                        ? L.date
                        : L.object;
          default:
            return L.unknown;
        }
      },
      A = se.arrayToEnum([
        'invalid_type',
        'invalid_literal',
        'custom',
        'invalid_union',
        'invalid_union_discriminator',
        'invalid_enum_value',
        'unrecognized_keys',
        'invalid_arguments',
        'invalid_return_type',
        'invalid_date',
        'invalid_string',
        'too_small',
        'too_big',
        'invalid_intersection_types',
        'not_multiple_of',
        'not_finite',
      ]),
      Im = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, '$1:'),
      mt = class extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (n) => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
            (this.name = 'ZodError'),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (i) {
                return i.message;
              },
            n = { _errors: [] },
            r = (i) => {
              for (let o of i.issues)
                if (o.code === 'invalid_union') o.unionErrors.map(r);
                else if (o.code === 'invalid_return_type') r(o.returnTypeError);
                else if (o.code === 'invalid_arguments') r(o.argumentsError);
                else if (o.path.length === 0) n._errors.push(t(o));
                else {
                  let l = n,
                    s = 0;
                  for (; s < o.path.length; ) {
                    let c = o.path[s];
                    s === o.path.length - 1
                      ? ((l[c] = l[c] || { _errors: [] }), l[c]._errors.push(t(o)))
                      : (l[c] = l[c] || { _errors: [] }),
                      (l = l[c]),
                      s++;
                  }
                }
            };
          return r(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, se.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = (t) => t.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      };
    mt.create = (e) => new mt(e);
    var ka = (e, t) => {
        let n;
        switch (e.code) {
          case A.invalid_type:
            e.received === L.undefined
              ? (n = 'Required')
              : (n = `Expected ${e.expected}, received ${e.received}`);
            break;
          case A.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, se.jsonStringifyReplacer)}`;
            break;
          case A.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${se.joinValues(e.keys, ', ')}`;
            break;
          case A.invalid_union:
            n = 'Invalid input';
            break;
          case A.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${se.joinValues(e.options)}`;
            break;
          case A.invalid_enum_value:
            n = `Invalid enum value. Expected ${se.joinValues(e.options)}, received '${e.received}'`;
            break;
          case A.invalid_arguments:
            n = 'Invalid function arguments';
            break;
          case A.invalid_return_type:
            n = 'Invalid function return type';
            break;
          case A.invalid_date:
            n = 'Invalid date';
            break;
          case A.invalid_string:
            typeof e.validation == 'object'
              ? 'includes' in e.validation
                ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                  typeof e.validation.position == 'number' &&
                    (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                : 'startsWith' in e.validation
                  ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : 'endsWith' in e.validation
                    ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                    : se.assertNever(e.validation)
              : e.validation !== 'regex'
                ? (n = `Invalid ${e.validation}`)
                : (n = 'Invalid');
            break;
          case A.too_small:
            e.type === 'array'
              ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
              : e.type === 'string'
                ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
                : e.type === 'number'
                  ? (n = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
                  : e.type === 'date'
                    ? (n = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
                    : (n = 'Invalid input');
            break;
          case A.too_big:
            e.type === 'array'
              ? (n = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
              : e.type === 'string'
                ? (n = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
                : e.type === 'number'
                  ? (n = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
                  : e.type === 'bigint'
                    ? (n = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
                    : e.type === 'date'
                      ? (n = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
                      : (n = 'Invalid input');
            break;
          case A.custom:
            n = 'Invalid input';
            break;
          case A.invalid_intersection_types:
            n = 'Intersection results could not be merged';
            break;
          case A.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case A.not_finite:
            n = 'Number must be finite';
            break;
          default:
            (n = t.defaultError), se.assertNever(e);
        }
        return { message: n };
      },
      o0 = ka;
    function Rm(e) {
      o0 = e;
    }
    function wr() {
      return o0;
    }
    var Cr = (e) => {
        let { data: t, path: n, errorMaps: r, issueData: i } = e,
          o = [...n, ...(i.path || [])],
          l = { ...i, path: o },
          s = '',
          c = r
            .filter((d) => !!d)
            .slice()
            .reverse();
        for (let d of c) s = d(l, { data: t, defaultError: s }).message;
        return { ...i, path: o, message: i.message || s };
      },
      Bm = [];
    function Z(e, t) {
      let n = Cr({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, wr(), ka].filter((r) => !!r),
      });
      e.common.issues.push(n);
    }
    var We = class {
        constructor() {
          this.value = 'valid';
        }
        dirty() {
          this.value === 'valid' && (this.value = 'dirty');
        }
        abort() {
          this.value !== 'aborted' && (this.value = 'aborted');
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if (r.status === 'aborted') return q;
            r.status === 'dirty' && e.dirty(), n.push(r.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let r of t) n.push({ key: await r.key, value: await r.value });
          return We.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: i, value: o } = r;
            if (i.status === 'aborted' || o.status === 'aborted') return q;
            i.status === 'dirty' && e.dirty(),
              o.status === 'dirty' && e.dirty(),
              i.value !== '__proto__' &&
                (typeof o.value < 'u' || r.alwaysSet) &&
                (n[i.value] = o.value);
          }
          return { status: e.value, value: n };
        }
      },
      q = Object.freeze({ status: 'aborted' }),
      l0 = (e) => ({ status: 'dirty', value: e }),
      Ge = (e) => ({ status: 'valid', value: e }),
      so = (e) => e.status === 'aborted',
      co = (e) => e.status === 'dirty',
      wa = (e) => e.status === 'valid',
      Sr = (e) => typeof Promise < 'u' && e instanceof Promise,
      H;
    (function (e) {
      (e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
        (e.toString = (t) => (typeof t == 'string' ? t : t?.message));
    })(H || (H = {}));
    var At = class {
        constructor(e, t, n, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      },
      Ql = (e, t) => {
        if (wa(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error('Validation failed but no issues detected.');
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let n = new mt(e.common.issues);
            return (this._error = n), this._error;
          },
        };
      };
    function K(e) {
      if (!e) return {};
      let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
      if (t && (n || r))
        throw new Error(
          `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
        );
      return t
        ? { errorMap: t, description: i }
        : {
            errorMap: (o, l) =>
              o.code !== 'invalid_type'
                ? { message: l.defaultError }
                : typeof l.data > 'u'
                  ? { message: r ?? l.defaultError }
                  : { message: n ?? l.defaultError },
            description: i,
          };
    }
    var te = class {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return Dt(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: Dt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new We(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: Dt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (Sr(t)) throw new Error('Synchronous parse encountered promise.');
          return t;
        }
        _parseAsync(e) {
          let t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          let r = {
              common: {
                issues: [],
                async: (n = t?.async) !== null && n !== void 0 ? n : !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Dt(e),
            },
            i = this._parseSync({ data: e, path: r.path, parent: r });
          return Ql(r, i);
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Dt(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n }),
            i = await (Sr(r) ? r : Promise.resolve(r));
          return Ql(n, i);
        }
        refine(e, t) {
          let n = (r) =>
            typeof t == 'string' || typeof t > 'u'
              ? { message: t }
              : typeof t == 'function'
                ? t(r)
                : t;
          return this._refinement((r, i) => {
            let o = e(r),
              l = () => i.addIssue({ code: A.custom, ...n(r) });
            return typeof Promise < 'u' && o instanceof Promise
              ? o.then((s) => (s ? !0 : (l(), !1)))
              : o
                ? !0
                : (l(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((n, r) =>
            e(n) ? !0 : (r.addIssue(typeof t == 'function' ? t(n, r) : t), !1),
          );
        }
        _refinement(e) {
          return new pt({
            schema: this,
            typeName: $.ZodEffects,
            effect: { type: 'refinement', refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return Zt.create(this, this._def);
        }
        nullable() {
          return un.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return Mt.create(this, this._def);
        }
        promise() {
          return Zn.create(this, this._def);
        }
        or(e) {
          return Ma.create([this, e], this._def);
        }
        and(e) {
          return Na.create(this, e, this._def);
        }
        transform(e) {
          return new pt({
            ...K(this._def),
            schema: this,
            typeName: $.ZodEffects,
            effect: { type: 'transform', transform: e },
          });
        }
        default(e) {
          let t = typeof e == 'function' ? e : () => e;
          return new La({
            ...K(this._def),
            innerType: this,
            defaultValue: t,
            typeName: $.ZodDefault,
          });
        }
        brand() {
          return new c0({ typeName: $.ZodBranded, type: this, ...K(this._def) });
        }
        catch(e) {
          let t = typeof e == 'function' ? e : () => e;
          return new Ar({ ...K(this._def), innerType: this, catchValue: t, typeName: $.ZodCatch });
        }
        describe(e) {
          let t = this.constructor;
          return new t({ ...this._def, description: e });
        }
        pipe(e) {
          return Qr.create(this, e);
        }
        readonly() {
          return Lr.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      },
      Pm = /^c[^\s-]{8,}$/i,
      Vm = /^[a-z][a-z0-9]*$/,
      jm = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Hm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Dm = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
      zm = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
      Fi,
      Um =
        /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      $m =
        /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
      Wm = (e) =>
        e.precision
          ? e.offset
            ? new RegExp(
                `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
              )
            : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`)
          : e.precision === 0
            ? e.offset
              ? new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$')
              : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$')
            : e.offset
              ? new RegExp(
                  '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$',
                )
              : new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$');
    function Gm(e, t) {
      return !!(((t === 'v4' || !t) && Um.test(e)) || ((t === 'v6' || !t) && $m.test(e)));
    }
    var Ct = class extends te {
      _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== L.string)) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_type, expected: L.string, received: r.parsedType }), q;
        }
        let t = new We(),
          n;
        for (let r of this._def.checks)
          if (r.kind === 'min')
            e.data.length < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_small,
                minimum: r.value,
                type: 'string',
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'max')
            e.data.length > r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_big,
                maximum: r.value,
                type: 'string',
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === 'length') {
            let i = e.data.length > r.value,
              o = e.data.length < r.value;
            (i || o) &&
              ((n = this._getOrReturnCtx(e, n)),
              i
                ? Z(n, {
                    code: A.too_big,
                    maximum: r.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  })
                : o &&
                  Z(n, {
                    code: A.too_small,
                    minimum: r.value,
                    type: 'string',
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  }),
              t.dirty());
          } else if (r.kind === 'email')
            Dm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, { validation: 'email', code: A.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === 'emoji')
            Fi || (Fi = new RegExp(zm, 'u')),
              Fi.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, { validation: 'emoji', code: A.invalid_string, message: r.message }),
                t.dirty());
          else if (r.kind === 'uuid')
            Hm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, { validation: 'uuid', code: A.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === 'cuid')
            Pm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, { validation: 'cuid', code: A.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === 'cuid2')
            Vm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, { validation: 'cuid2', code: A.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === 'ulid')
            jm.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, { validation: 'ulid', code: A.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === 'url')
            try {
              new URL(e.data);
            } catch {
              (n = this._getOrReturnCtx(e, n)),
                Z(n, { validation: 'url', code: A.invalid_string, message: r.message }),
                t.dirty();
            }
          else
            r.kind === 'regex'
              ? ((r.regex.lastIndex = 0),
                r.regex.test(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  Z(n, { validation: 'regex', code: A.invalid_string, message: r.message }),
                  t.dirty()))
              : r.kind === 'trim'
                ? (e.data = e.data.trim())
                : r.kind === 'includes'
                  ? e.data.includes(r.value, r.position) ||
                    ((n = this._getOrReturnCtx(e, n)),
                    Z(n, {
                      code: A.invalid_string,
                      validation: { includes: r.value, position: r.position },
                      message: r.message,
                    }),
                    t.dirty())
                  : r.kind === 'toLowerCase'
                    ? (e.data = e.data.toLowerCase())
                    : r.kind === 'toUpperCase'
                      ? (e.data = e.data.toUpperCase())
                      : r.kind === 'startsWith'
                        ? e.data.startsWith(r.value) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          Z(n, {
                            code: A.invalid_string,
                            validation: { startsWith: r.value },
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === 'endsWith'
                          ? e.data.endsWith(r.value) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            Z(n, {
                              code: A.invalid_string,
                              validation: { endsWith: r.value },
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === 'datetime'
                            ? Wm(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              Z(n, {
                                code: A.invalid_string,
                                validation: 'datetime',
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === 'ip'
                              ? Gm(e.data, r.version) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                Z(n, {
                                  validation: 'ip',
                                  code: A.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : se.assertNever(r);
        return { status: t.value, value: e.data };
      }
      _regex(e, t, n) {
        return this.refinement((r) => e.test(r), {
          validation: t,
          code: A.invalid_string,
          ...H.errToObj(n),
        });
      }
      _addCheck(e) {
        return new Ct({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: 'email', ...H.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: 'url', ...H.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: 'emoji', ...H.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: 'uuid', ...H.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: 'cuid', ...H.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: 'cuid2', ...H.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: 'ulid', ...H.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: 'ip', ...H.errToObj(e) });
      }
      datetime(e) {
        var t;
        return typeof e == 'string'
          ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, message: e })
          : this._addCheck({
              kind: 'datetime',
              precision: typeof e?.precision > 'u' ? null : e?.precision,
              offset: (t = e?.offset) !== null && t !== void 0 ? t : !1,
              ...H.errToObj(e?.message),
            });
      }
      regex(e, t) {
        return this._addCheck({ kind: 'regex', regex: e, ...H.errToObj(t) });
      }
      includes(e, t) {
        return this._addCheck({
          kind: 'includes',
          value: e,
          position: t?.position,
          ...H.errToObj(t?.message),
        });
      }
      startsWith(e, t) {
        return this._addCheck({ kind: 'startsWith', value: e, ...H.errToObj(t) });
      }
      endsWith(e, t) {
        return this._addCheck({ kind: 'endsWith', value: e, ...H.errToObj(t) });
      }
      min(e, t) {
        return this._addCheck({ kind: 'min', value: e, ...H.errToObj(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: 'max', value: e, ...H.errToObj(t) });
      }
      length(e, t) {
        return this._addCheck({ kind: 'length', value: e, ...H.errToObj(t) });
      }
      nonempty(e) {
        return this.min(1, H.errToObj(e));
      }
      trim() {
        return new Ct({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
      }
      toLowerCase() {
        return new Ct({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
      }
      toUpperCase() {
        return new Ct({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === 'datetime');
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === 'email');
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === 'url');
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === 'emoji');
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === 'uuid');
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === 'cuid');
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === 'cuid2');
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === 'ulid');
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === 'ip');
      }
      get minLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    Ct.create = (e) => {
      var t;
      return new Ct({
        checks: [],
        typeName: $.ZodString,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...K(e),
      });
    };
    function qm(e, t) {
      let n = (e.toString().split('.')[1] || '').length,
        r = (t.toString().split('.')[1] || '').length,
        i = n > r ? n : r,
        o = parseInt(e.toFixed(i).replace('.', '')),
        l = parseInt(t.toFixed(i).replace('.', ''));
      return (o % l) / Math.pow(10, i);
    }
    var sn = class extends te {
      constructor() {
        super(...arguments),
          (this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== L.number)) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_type, expected: L.number, received: r.parsedType }), q;
        }
        let t,
          n = new We();
        for (let r of this._def.checks)
          r.kind === 'int'
            ? se.isInteger(e.data) ||
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.invalid_type,
                expected: 'integer',
                received: 'float',
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'min'
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                Z(t, {
                  code: A.too_small,
                  minimum: r.value,
                  type: 'number',
                  inclusive: r.inclusive,
                  exact: !1,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === 'max'
                ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  Z(t, {
                    code: A.too_big,
                    maximum: r.value,
                    type: 'number',
                    inclusive: r.inclusive,
                    exact: !1,
                    message: r.message,
                  }),
                  n.dirty())
                : r.kind === 'multipleOf'
                  ? qm(e.data, r.value) !== 0 &&
                    ((t = this._getOrReturnCtx(e, t)),
                    Z(t, { code: A.not_multiple_of, multipleOf: r.value, message: r.message }),
                    n.dirty())
                  : r.kind === 'finite'
                    ? Number.isFinite(e.data) ||
                      ((t = this._getOrReturnCtx(e, t)),
                      Z(t, { code: A.not_finite, message: r.message }),
                      n.dirty())
                    : se.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit('min', e, !0, H.toString(t));
      }
      gt(e, t) {
        return this.setLimit('min', e, !1, H.toString(t));
      }
      lte(e, t) {
        return this.setLimit('max', e, !0, H.toString(t));
      }
      lt(e, t) {
        return this.setLimit('max', e, !1, H.toString(t));
      }
      setLimit(e, t, n, r) {
        return new sn({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: H.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new sn({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: 'int', message: H.toString(e) });
      }
      positive(e) {
        return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: H.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: H.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: H.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: H.toString(e) });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: 'multipleOf', value: e, message: H.toString(t) });
      }
      finite(e) {
        return this._addCheck({ kind: 'finite', message: H.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: 'min',
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: H.toString(e),
        })._addCheck({
          kind: 'max',
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: H.toString(e),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find(
          (e) => e.kind === 'int' || (e.kind === 'multipleOf' && se.isInteger(e.value)),
        );
      }
      get isFinite() {
        let e = null,
          t = null;
        for (let n of this._def.checks) {
          if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf') return !0;
          n.kind === 'min'
            ? (t === null || n.value > t) && (t = n.value)
            : n.kind === 'max' && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
      }
    };
    sn.create = (e) =>
      new sn({ checks: [], typeName: $.ZodNumber, coerce: e?.coerce || !1, ...K(e) });
    var cn = class extends te {
      constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== L.bigint)) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_type, expected: L.bigint, received: r.parsedType }), q;
        }
        let t,
          n = new We();
        for (let r of this._def.checks)
          r.kind === 'min'
            ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              Z(t, {
                code: A.too_small,
                type: 'bigint',
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message,
              }),
              n.dirty())
            : r.kind === 'max'
              ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                Z(t, {
                  code: A.too_big,
                  type: 'bigint',
                  maximum: r.value,
                  inclusive: r.inclusive,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === 'multipleOf'
                ? e.data % r.value !== BigInt(0) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  Z(t, { code: A.not_multiple_of, multipleOf: r.value, message: r.message }),
                  n.dirty())
                : se.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit('min', e, !0, H.toString(t));
      }
      gt(e, t) {
        return this.setLimit('min', e, !1, H.toString(t));
      }
      lte(e, t) {
        return this.setLimit('max', e, !0, H.toString(t));
      }
      lt(e, t) {
        return this.setLimit('max', e, !1, H.toString(t));
      }
      setLimit(e, t, n, r) {
        return new cn({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: H.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new cn({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({
          kind: 'min',
          value: BigInt(0),
          inclusive: !1,
          message: H.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: 'max',
          value: BigInt(0),
          inclusive: !1,
          message: H.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: 'max',
          value: BigInt(0),
          inclusive: !0,
          message: H.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: 'min',
          value: BigInt(0),
          inclusive: !0,
          message: H.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: 'multipleOf', value: e, message: H.toString(t) });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    cn.create = (e) => {
      var t;
      return new cn({
        checks: [],
        typeName: $.ZodBigInt,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...K(e),
      });
    };
    var Ca = class extends te {
      _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== L.boolean)) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.boolean, received: t.parsedType }), q;
        }
        return Ge(e.data);
      }
    };
    Ca.create = (e) => new Ca({ typeName: $.ZodBoolean, coerce: e?.coerce || !1, ...K(e) });
    var Ln = class extends te {
      _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== L.date)) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_type, expected: L.date, received: r.parsedType }), q;
        }
        if (isNaN(e.data.getTime())) {
          let r = this._getOrReturnCtx(e);
          return Z(r, { code: A.invalid_date }), q;
        }
        let t = new We(),
          n;
        for (let r of this._def.checks)
          r.kind === 'min'
            ? e.data.getTime() < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              Z(n, {
                code: A.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: 'date',
              }),
              t.dirty())
            : r.kind === 'max'
              ? e.data.getTime() > r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                Z(n, {
                  code: A.too_big,
                  message: r.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: r.value,
                  type: 'date',
                }),
                t.dirty())
              : se.assertNever(r);
        return { status: t.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new Ln({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, t) {
        return this._addCheck({ kind: 'min', value: e.getTime(), message: H.toString(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: 'max', value: e.getTime(), message: H.toString(t) });
      }
      get minDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
    };
    Ln.create = (e) =>
      new Ln({ checks: [], coerce: e?.coerce || !1, typeName: $.ZodDate, ...K(e) });
    var xr = class extends te {
      _parse(e) {
        if (this._getType(e) !== L.symbol) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.symbol, received: t.parsedType }), q;
        }
        return Ge(e.data);
      }
    };
    xr.create = (e) => new xr({ typeName: $.ZodSymbol, ...K(e) });
    var Sa = class extends te {
      _parse(e) {
        if (this._getType(e) !== L.undefined) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.undefined, received: t.parsedType }), q;
        }
        return Ge(e.data);
      }
    };
    Sa.create = (e) => new Sa({ typeName: $.ZodUndefined, ...K(e) });
    var xa = class extends te {
      _parse(e) {
        if (this._getType(e) !== L.null) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.null, received: t.parsedType }), q;
        }
        return Ge(e.data);
      }
    };
    xa.create = (e) => new xa({ typeName: $.ZodNull, ...K(e) });
    var Tn = class extends te {
      constructor() {
        super(...arguments), (this._any = !0);
      }
      _parse(e) {
        return Ge(e.data);
      }
    };
    Tn.create = (e) => new Tn({ typeName: $.ZodAny, ...K(e) });
    var ln = class extends te {
      constructor() {
        super(...arguments), (this._unknown = !0);
      }
      _parse(e) {
        return Ge(e.data);
      }
    };
    ln.create = (e) => new ln({ typeName: $.ZodUnknown, ...K(e) });
    var It = class extends te {
      _parse(e) {
        let t = this._getOrReturnCtx(e);
        return Z(t, { code: A.invalid_type, expected: L.never, received: t.parsedType }), q;
      }
    };
    It.create = (e) => new It({ typeName: $.ZodNever, ...K(e) });
    var Mr = class extends te {
      _parse(e) {
        if (this._getType(e) !== L.undefined) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.void, received: t.parsedType }), q;
        }
        return Ge(e.data);
      }
    };
    Mr.create = (e) => new Mr({ typeName: $.ZodVoid, ...K(e) });
    var Mt = class extends te {
      _parse(e) {
        let { ctx: t, status: n } = this._processInputParams(e),
          r = this._def;
        if (t.parsedType !== L.array)
          return Z(t, { code: A.invalid_type, expected: L.array, received: t.parsedType }), q;
        if (r.exactLength !== null) {
          let o = t.data.length > r.exactLength.value,
            l = t.data.length < r.exactLength.value;
          (o || l) &&
            (Z(t, {
              code: o ? A.too_big : A.too_small,
              minimum: l ? r.exactLength.value : void 0,
              maximum: o ? r.exactLength.value : void 0,
              type: 'array',
              inclusive: !0,
              exact: !0,
              message: r.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (r.minLength !== null &&
            t.data.length < r.minLength.value &&
            (Z(t, {
              code: A.too_small,
              minimum: r.minLength.value,
              type: 'array',
              inclusive: !0,
              exact: !1,
              message: r.minLength.message,
            }),
            n.dirty()),
          r.maxLength !== null &&
            t.data.length > r.maxLength.value &&
            (Z(t, {
              code: A.too_big,
              maximum: r.maxLength.value,
              type: 'array',
              inclusive: !0,
              exact: !1,
              message: r.maxLength.message,
            }),
            n.dirty()),
          t.common.async)
        )
          return Promise.all(
            [...t.data].map((o, l) => r.type._parseAsync(new At(t, o, t.path, l))),
          ).then((o) => We.mergeArray(n, o));
        let i = [...t.data].map((o, l) => r.type._parseSync(new At(t, o, t.path, l)));
        return We.mergeArray(n, i);
      }
      get element() {
        return this._def.type;
      }
      min(e, t) {
        return new Mt({ ...this._def, minLength: { value: e, message: H.toString(t) } });
      }
      max(e, t) {
        return new Mt({ ...this._def, maxLength: { value: e, message: H.toString(t) } });
      }
      length(e, t) {
        return new Mt({ ...this._def, exactLength: { value: e, message: H.toString(t) } });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    Mt.create = (e, t) =>
      new Mt({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: $.ZodArray,
        ...K(t),
      });
    function Cn(e) {
      if (e instanceof Ae) {
        let t = {};
        for (let n in e.shape) {
          let r = e.shape[n];
          t[n] = Zt.create(Cn(r));
        }
        return new Ae({ ...e._def, shape: () => t });
      } else
        return e instanceof Mt
          ? new Mt({ ...e._def, type: Cn(e.element) })
          : e instanceof Zt
            ? Zt.create(Cn(e.unwrap()))
            : e instanceof un
              ? un.create(Cn(e.unwrap()))
              : e instanceof Rt
                ? Rt.create(e.items.map((t) => Cn(t)))
                : e;
    }
    var Ae = class extends te {
      constructor() {
        super(...arguments),
          (this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend);
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          t = se.objectKeys(e);
        return (this._cached = { shape: e, keys: t });
      }
      _parse(e) {
        if (this._getType(e) !== L.object) {
          let s = this._getOrReturnCtx(e);
          return Z(s, { code: A.invalid_type, expected: L.object, received: s.parsedType }), q;
        }
        let { status: t, ctx: n } = this._processInputParams(e),
          { shape: r, keys: i } = this._getCached(),
          o = [];
        if (!(this._def.catchall instanceof It && this._def.unknownKeys === 'strip'))
          for (let s in n.data) i.includes(s) || o.push(s);
        let l = [];
        for (let s of i) {
          let c = r[s],
            d = n.data[s];
          l.push({
            key: { status: 'valid', value: s },
            value: c._parse(new At(n, d, n.path, s)),
            alwaysSet: s in n.data,
          });
        }
        if (this._def.catchall instanceof It) {
          let s = this._def.unknownKeys;
          if (s === 'passthrough')
            for (let c of o)
              l.push({
                key: { status: 'valid', value: c },
                value: { status: 'valid', value: n.data[c] },
              });
          else if (s === 'strict')
            o.length > 0 && (Z(n, { code: A.unrecognized_keys, keys: o }), t.dirty());
          else if (s !== 'strip')
            throw new Error('Internal ZodObject error: invalid unknownKeys value.');
        } else {
          let s = this._def.catchall;
          for (let c of o) {
            let d = n.data[c];
            l.push({
              key: { status: 'valid', value: c },
              value: s._parse(new At(n, d, n.path, c)),
              alwaysSet: c in n.data,
            });
          }
        }
        return n.common.async
          ? Promise.resolve()
              .then(async () => {
                let s = [];
                for (let c of l) {
                  let d = await c.key;
                  s.push({ key: d, value: await c.value, alwaysSet: c.alwaysSet });
                }
                return s;
              })
              .then((s) => We.mergeObjectSync(t, s))
          : We.mergeObjectSync(t, l);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          H.errToObj,
          new Ae({
            ...this._def,
            unknownKeys: 'strict',
            ...(e !== void 0
              ? {
                  errorMap: (t, n) => {
                    var r, i, o, l;
                    let s =
                      (o =
                        (i = (r = this._def).errorMap) === null || i === void 0
                          ? void 0
                          : i.call(r, t, n).message) !== null && o !== void 0
                        ? o
                        : n.defaultError;
                    return t.code === 'unrecognized_keys'
                      ? { message: (l = H.errToObj(e).message) !== null && l !== void 0 ? l : s }
                      : { message: s };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new Ae({ ...this._def, unknownKeys: 'strip' });
      }
      passthrough() {
        return new Ae({ ...this._def, unknownKeys: 'passthrough' });
      }
      extend(e) {
        return new Ae({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
      }
      merge(e) {
        return new Ae({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: $.ZodObject,
        });
      }
      setKey(e, t) {
        return this.augment({ [e]: t });
      }
      catchall(e) {
        return new Ae({ ...this._def, catchall: e });
      }
      pick(e) {
        let t = {};
        return (
          se.objectKeys(e).forEach((n) => {
            e[n] && this.shape[n] && (t[n] = this.shape[n]);
          }),
          new Ae({ ...this._def, shape: () => t })
        );
      }
      omit(e) {
        let t = {};
        return (
          se.objectKeys(this.shape).forEach((n) => {
            e[n] || (t[n] = this.shape[n]);
          }),
          new Ae({ ...this._def, shape: () => t })
        );
      }
      deepPartial() {
        return Cn(this);
      }
      partial(e) {
        let t = {};
        return (
          se.objectKeys(this.shape).forEach((n) => {
            let r = this.shape[n];
            e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
          }),
          new Ae({ ...this._def, shape: () => t })
        );
      }
      required(e) {
        let t = {};
        return (
          se.objectKeys(this.shape).forEach((n) => {
            if (e && !e[n]) t[n] = this.shape[n];
            else {
              let r = this.shape[n];
              for (; r instanceof Zt; ) r = r._def.innerType;
              t[n] = r;
            }
          }),
          new Ae({ ...this._def, shape: () => t })
        );
      }
      keyof() {
        return s0(se.objectKeys(this.shape));
      }
    };
    Ae.create = (e, t) =>
      new Ae({
        shape: () => e,
        unknownKeys: 'strip',
        catchall: It.create(),
        typeName: $.ZodObject,
        ...K(t),
      });
    Ae.strictCreate = (e, t) =>
      new Ae({
        shape: () => e,
        unknownKeys: 'strict',
        catchall: It.create(),
        typeName: $.ZodObject,
        ...K(t),
      });
    Ae.lazycreate = (e, t) =>
      new Ae({
        shape: e,
        unknownKeys: 'strip',
        catchall: It.create(),
        typeName: $.ZodObject,
        ...K(t),
      });
    var Ma = class extends te {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = this._def.options;
        function r(i) {
          for (let l of i) if (l.result.status === 'valid') return l.result;
          for (let l of i)
            if (l.result.status === 'dirty')
              return t.common.issues.push(...l.ctx.common.issues), l.result;
          let o = i.map((l) => new mt(l.ctx.common.issues));
          return Z(t, { code: A.invalid_union, unionErrors: o }), q;
        }
        if (t.common.async)
          return Promise.all(
            n.map(async (i) => {
              let o = { ...t, common: { ...t.common, issues: [] }, parent: null };
              return {
                result: await i._parseAsync({ data: t.data, path: t.path, parent: o }),
                ctx: o,
              };
            }),
          ).then(r);
        {
          let i,
            o = [];
          for (let s of n) {
            let c = { ...t, common: { ...t.common, issues: [] }, parent: null },
              d = s._parseSync({ data: t.data, path: t.path, parent: c });
            if (d.status === 'valid') return d;
            d.status === 'dirty' && !i && (i = { result: d, ctx: c }),
              c.common.issues.length && o.push(c.common.issues);
          }
          if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
          let l = o.map((s) => new mt(s));
          return Z(t, { code: A.invalid_union, unionErrors: l }), q;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    Ma.create = (e, t) => new Ma({ options: e, typeName: $.ZodUnion, ...K(t) });
    var sr = (e) =>
        e instanceof Fa
          ? sr(e.schema)
          : e instanceof pt
            ? sr(e.innerType())
            : e instanceof Aa
              ? [e.value]
              : e instanceof dn
                ? e.options
                : e instanceof Oa
                  ? Object.keys(e.enum)
                  : e instanceof La
                    ? sr(e._def.innerType)
                    : e instanceof Sa
                      ? [void 0]
                      : e instanceof xa
                        ? [null]
                        : null,
      Vo = class extends te {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== L.object)
            return Z(t, { code: A.invalid_type, expected: L.object, received: t.parsedType }), q;
          let n = this.discriminator,
            r = t.data[n],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (Z(t, {
                code: A.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              q);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let i of t) {
            let o = sr(i.shape[e]);
            if (!o)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
              );
            for (let l of o) {
              if (r.has(l))
                throw new Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(l)}`,
                );
              r.set(l, i);
            }
          }
          return new Vo({
            typeName: $.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...K(n),
          });
        }
      };
    function uo(e, t) {
      let n = Dt(e),
        r = Dt(t);
      if (e === t) return { valid: !0, data: e };
      if (n === L.object && r === L.object) {
        let i = se.objectKeys(t),
          o = se.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
          l = { ...e, ...t };
        for (let s of o) {
          let c = uo(e[s], t[s]);
          if (!c.valid) return { valid: !1 };
          l[s] = c.data;
        }
        return { valid: !0, data: l };
      } else if (n === L.array && r === L.array) {
        if (e.length !== t.length) return { valid: !1 };
        let i = [];
        for (let o = 0; o < e.length; o++) {
          let l = e[o],
            s = t[o],
            c = uo(l, s);
          if (!c.valid) return { valid: !1 };
          i.push(c.data);
        }
        return { valid: !0, data: i };
      } else
        return n === L.date && r === L.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
    }
    var Na = class extends te {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = (i, o) => {
            if (so(i) || so(o)) return q;
            let l = uo(i.value, o.value);
            return l.valid
              ? ((co(i) || co(o)) && t.dirty(), { status: t.value, value: l.data })
              : (Z(n, { code: A.invalid_intersection_types }), q);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
            ]).then(([i, o]) => r(i, o))
          : r(
              this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
            );
      }
    };
    Na.create = (e, t, n) => new Na({ left: e, right: t, typeName: $.ZodIntersection, ...K(n) });
    var Rt = class extends te {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== L.array)
          return Z(n, { code: A.invalid_type, expected: L.array, received: n.parsedType }), q;
        if (n.data.length < this._def.items.length)
          return (
            Z(n, {
              code: A.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: 'array',
            }),
            q
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (Z(n, {
            code: A.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: 'array',
          }),
          t.dirty());
        let r = [...n.data]
          .map((i, o) => {
            let l = this._def.items[o] || this._def.rest;
            return l ? l._parse(new At(n, i, n.path, o)) : null;
          })
          .filter((i) => !!i);
        return n.common.async
          ? Promise.all(r).then((i) => We.mergeArray(t, i))
          : We.mergeArray(t, r);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new Rt({ ...this._def, rest: e });
      }
    };
    Rt.create = (e, t) => {
      if (!Array.isArray(e))
        throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
      return new Rt({ items: e, typeName: $.ZodTuple, rest: null, ...K(t) });
    };
    var Nr = class extends te {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== L.object)
            return Z(n, { code: A.invalid_type, expected: L.object, received: n.parsedType }), q;
          let r = [],
            i = this._def.keyType,
            o = this._def.valueType;
          for (let l in n.data)
            r.push({
              key: i._parse(new At(n, l, n.path, l)),
              value: o._parse(new At(n, n.data[l], n.path, l)),
            });
          return n.common.async ? We.mergeObjectAsync(t, r) : We.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return t instanceof te
            ? new Nr({ keyType: e, valueType: t, typeName: $.ZodRecord, ...K(n) })
            : new Nr({ keyType: Ct.create(), valueType: e, typeName: $.ZodRecord, ...K(t) });
        }
      },
      Fr = class extends te {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== L.map)
            return Z(n, { code: A.invalid_type, expected: L.map, received: n.parsedType }), q;
          let r = this._def.keyType,
            i = this._def.valueType,
            o = [...n.data.entries()].map(([l, s], c) => ({
              key: r._parse(new At(n, l, n.path, [c, 'key'])),
              value: i._parse(new At(n, s, n.path, [c, 'value'])),
            }));
          if (n.common.async) {
            let l = new Map();
            return Promise.resolve().then(async () => {
              for (let s of o) {
                let c = await s.key,
                  d = await s.value;
                if (c.status === 'aborted' || d.status === 'aborted') return q;
                (c.status === 'dirty' || d.status === 'dirty') && t.dirty(),
                  l.set(c.value, d.value);
              }
              return { status: t.value, value: l };
            });
          } else {
            let l = new Map();
            for (let s of o) {
              let c = s.key,
                d = s.value;
              if (c.status === 'aborted' || d.status === 'aborted') return q;
              (c.status === 'dirty' || d.status === 'dirty') && t.dirty(), l.set(c.value, d.value);
            }
            return { status: t.value, value: l };
          }
        }
      };
    Fr.create = (e, t, n) => new Fr({ valueType: t, keyType: e, typeName: $.ZodMap, ...K(n) });
    var _n = class extends te {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== L.set)
          return Z(n, { code: A.invalid_type, expected: L.set, received: n.parsedType }), q;
        let r = this._def;
        r.minSize !== null &&
          n.data.size < r.minSize.value &&
          (Z(n, {
            code: A.too_small,
            minimum: r.minSize.value,
            type: 'set',
            inclusive: !0,
            exact: !1,
            message: r.minSize.message,
          }),
          t.dirty()),
          r.maxSize !== null &&
            n.data.size > r.maxSize.value &&
            (Z(n, {
              code: A.too_big,
              maximum: r.maxSize.value,
              type: 'set',
              inclusive: !0,
              exact: !1,
              message: r.maxSize.message,
            }),
            t.dirty());
        let i = this._def.valueType;
        function o(s) {
          let c = new Set();
          for (let d of s) {
            if (d.status === 'aborted') return q;
            d.status === 'dirty' && t.dirty(), c.add(d.value);
          }
          return { status: t.value, value: c };
        }
        let l = [...n.data.values()].map((s, c) => i._parse(new At(n, s, n.path, c)));
        return n.common.async ? Promise.all(l).then((s) => o(s)) : o(l);
      }
      min(e, t) {
        return new _n({ ...this._def, minSize: { value: e, message: H.toString(t) } });
      }
      max(e, t) {
        return new _n({ ...this._def, maxSize: { value: e, message: H.toString(t) } });
      }
      size(e, t) {
        return this.min(e, t).max(e, t);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    _n.create = (e, t) =>
      new _n({ valueType: e, minSize: null, maxSize: null, typeName: $.ZodSet, ...K(t) });
    var fa = class extends te {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== L.function)
            return Z(t, { code: A.invalid_type, expected: L.function, received: t.parsedType }), q;
          function n(l, s) {
            return Cr({
              data: l,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, wr(), ka].filter(
                (c) => !!c,
              ),
              issueData: { code: A.invalid_arguments, argumentsError: s },
            });
          }
          function r(l, s) {
            return Cr({
              data: l,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, wr(), ka].filter(
                (c) => !!c,
              ),
              issueData: { code: A.invalid_return_type, returnTypeError: s },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            o = t.data;
          if (this._def.returns instanceof Zn) {
            let l = this;
            return Ge(async function (...s) {
              let c = new mt([]),
                d = await l._def.args.parseAsync(s, i).catch((m) => {
                  throw (c.addIssue(n(s, m)), c);
                }),
                u = await Reflect.apply(o, this, d);
              return await l._def.returns._def.type.parseAsync(u, i).catch((m) => {
                throw (c.addIssue(r(u, m)), c);
              });
            });
          } else {
            let l = this;
            return Ge(function (...s) {
              let c = l._def.args.safeParse(s, i);
              if (!c.success) throw new mt([n(s, c.error)]);
              let d = Reflect.apply(o, this, c.data),
                u = l._def.returns.safeParse(d, i);
              if (!u.success) throw new mt([r(d, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new fa({ ...this._def, args: Rt.create(e).rest(ln.create()) });
        }
        returns(e) {
          return new fa({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new fa({
            args: e || Rt.create([]).rest(ln.create()),
            returns: t || ln.create(),
            typeName: $.ZodFunction,
            ...K(n),
          });
        }
      },
      Fa = class extends te {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      };
    Fa.create = (e, t) => new Fa({ getter: e, typeName: $.ZodLazy, ...K(t) });
    var Aa = class extends te {
      _parse(e) {
        if (e.data !== this._def.value) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { received: t.data, code: A.invalid_literal, expected: this._def.value }), q;
        }
        return { status: 'valid', value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    Aa.create = (e, t) => new Aa({ value: e, typeName: $.ZodLiteral, ...K(t) });
    function s0(e, t) {
      return new dn({ values: e, typeName: $.ZodEnum, ...K(t) });
    }
    var dn = class extends te {
      _parse(e) {
        if (typeof e.data != 'string') {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return (
            Z(t, { expected: se.joinValues(n), received: t.parsedType, code: A.invalid_type }), q
          );
        }
        if (this._def.values.indexOf(e.data) === -1) {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return Z(t, { received: t.data, code: A.invalid_enum_value, options: n }), q;
        }
        return Ge(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Values() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      extract(e) {
        return dn.create(e);
      }
      exclude(e) {
        return dn.create(this.options.filter((t) => !e.includes(t)));
      }
    };
    dn.create = s0;
    var Oa = class extends te {
      _parse(e) {
        let t = se.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== L.string && n.parsedType !== L.number) {
          let r = se.objectValues(t);
          return (
            Z(n, { expected: se.joinValues(r), received: n.parsedType, code: A.invalid_type }), q
          );
        }
        if (t.indexOf(e.data) === -1) {
          let r = se.objectValues(t);
          return Z(n, { received: n.data, code: A.invalid_enum_value, options: r }), q;
        }
        return Ge(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    Oa.create = (e, t) => new Oa({ values: e, typeName: $.ZodNativeEnum, ...K(t) });
    var Zn = class extends te {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== L.promise && t.common.async === !1)
          return Z(t, { code: A.invalid_type, expected: L.promise, received: t.parsedType }), q;
        let n = t.parsedType === L.promise ? t.data : Promise.resolve(t.data);
        return Ge(
          n.then((r) =>
            this._def.type.parseAsync(r, { path: t.path, errorMap: t.common.contextualErrorMap }),
          ),
        );
      }
    };
    Zn.create = (e, t) => new Zn({ type: e, typeName: $.ZodPromise, ...K(t) });
    var pt = class extends te {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === $.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = this._def.effect || null,
          i = {
            addIssue: (o) => {
              Z(n, o), o.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            },
          };
        if (((i.addIssue = i.addIssue.bind(i)), r.type === 'preprocess')) {
          let o = r.transform(n.data, i);
          return n.common.issues.length
            ? { status: 'dirty', value: n.data }
            : n.common.async
              ? Promise.resolve(o).then((l) =>
                  this._def.schema._parseAsync({ data: l, path: n.path, parent: n }),
                )
              : this._def.schema._parseSync({ data: o, path: n.path, parent: n });
        }
        if (r.type === 'refinement') {
          let o = (l) => {
            let s = r.refinement(l, i);
            if (n.common.async) return Promise.resolve(s);
            if (s instanceof Promise)
              throw new Error(
                'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
              );
            return l;
          };
          if (n.common.async === !1) {
            let l = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            return l.status === 'aborted'
              ? q
              : (l.status === 'dirty' && t.dirty(),
                o(l.value),
                { status: t.value, value: l.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((l) =>
                l.status === 'aborted'
                  ? q
                  : (l.status === 'dirty' && t.dirty(),
                    o(l.value).then(() => ({ status: t.value, value: l.value }))),
              );
        }
        if (r.type === 'transform')
          if (n.common.async === !1) {
            let o = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            if (!wa(o)) return o;
            let l = r.transform(o.value, i);
            if (l instanceof Promise)
              throw new Error(
                'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
              );
            return { status: t.value, value: l };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((o) =>
                wa(o)
                  ? Promise.resolve(r.transform(o.value, i)).then((l) => ({
                      status: t.value,
                      value: l,
                    }))
                  : o,
              );
        se.assertNever(r);
      }
    };
    pt.create = (e, t, n) => new pt({ schema: e, typeName: $.ZodEffects, effect: t, ...K(n) });
    pt.createWithPreprocess = (e, t, n) =>
      new pt({
        schema: t,
        effect: { type: 'preprocess', transform: e },
        typeName: $.ZodEffects,
        ...K(n),
      });
    var Zt = class extends te {
      _parse(e) {
        return this._getType(e) === L.undefined ? Ge(void 0) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    Zt.create = (e, t) => new Zt({ innerType: e, typeName: $.ZodOptional, ...K(t) });
    var un = class extends te {
      _parse(e) {
        return this._getType(e) === L.null ? Ge(null) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    un.create = (e, t) => new un({ innerType: e, typeName: $.ZodNullable, ...K(t) });
    var La = class extends te {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = t.data;
        return (
          t.parsedType === L.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: t.path, parent: t })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    La.create = (e, t) =>
      new La({
        innerType: e,
        typeName: $.ZodDefault,
        defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
        ...K(t),
      });
    var Ar = class extends te {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = { ...t, common: { ...t.common, issues: [] } },
          r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
        return Sr(r)
          ? r.then((i) => ({
              status: 'valid',
              value:
                i.status === 'valid'
                  ? i.value
                  : this._def.catchValue({
                      get error() {
                        return new mt(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: 'valid',
              value:
                r.status === 'valid'
                  ? r.value
                  : this._def.catchValue({
                      get error() {
                        return new mt(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    Ar.create = (e, t) =>
      new Ar({
        innerType: e,
        typeName: $.ZodCatch,
        catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
        ...K(t),
      });
    var Or = class extends te {
      _parse(e) {
        if (this._getType(e) !== L.nan) {
          let t = this._getOrReturnCtx(e);
          return Z(t, { code: A.invalid_type, expected: L.nan, received: t.parsedType }), q;
        }
        return { status: 'valid', value: e.data };
      }
    };
    Or.create = (e) => new Or({ typeName: $.ZodNaN, ...K(e) });
    var Ym = Symbol('zod_brand'),
      c0 = class extends te {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      },
      Qr = class extends te {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let r = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
              return r.status === 'aborted'
                ? q
                : r.status === 'dirty'
                  ? (t.dirty(), l0(r.value))
                  : this._def.out._parseAsync({ data: r.value, path: n.path, parent: n });
            })();
          {
            let r = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return r.status === 'aborted'
              ? q
              : r.status === 'dirty'
                ? (t.dirty(), { status: 'dirty', value: r.value })
                : this._def.out._parseSync({ data: r.value, path: n.path, parent: n });
          }
        }
        static create(e, t) {
          return new Qr({ in: e, out: t, typeName: $.ZodPipeline });
        }
      },
      Lr = class extends te {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return wa(t) && (t.value = Object.freeze(t.value)), t;
        }
      };
    Lr.create = (e, t) => new Lr({ innerType: e, typeName: $.ZodReadonly, ...K(t) });
    var d0 = (e, t = {}, n) =>
        e
          ? Tn.create().superRefine((r, i) => {
              var o, l;
              if (!e(r)) {
                let s = typeof t == 'function' ? t(r) : typeof t == 'string' ? { message: t } : t,
                  c =
                    (l = (o = s.fatal) !== null && o !== void 0 ? o : n) !== null && l !== void 0
                      ? l
                      : !0,
                  d = typeof s == 'string' ? { message: s } : s;
                i.addIssue({ code: 'custom', ...d, fatal: c });
              }
            })
          : Tn.create(),
      Qm = { object: Ae.lazycreate },
      $;
    (function (e) {
      (e.ZodString = 'ZodString'),
        (e.ZodNumber = 'ZodNumber'),
        (e.ZodNaN = 'ZodNaN'),
        (e.ZodBigInt = 'ZodBigInt'),
        (e.ZodBoolean = 'ZodBoolean'),
        (e.ZodDate = 'ZodDate'),
        (e.ZodSymbol = 'ZodSymbol'),
        (e.ZodUndefined = 'ZodUndefined'),
        (e.ZodNull = 'ZodNull'),
        (e.ZodAny = 'ZodAny'),
        (e.ZodUnknown = 'ZodUnknown'),
        (e.ZodNever = 'ZodNever'),
        (e.ZodVoid = 'ZodVoid'),
        (e.ZodArray = 'ZodArray'),
        (e.ZodObject = 'ZodObject'),
        (e.ZodUnion = 'ZodUnion'),
        (e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
        (e.ZodIntersection = 'ZodIntersection'),
        (e.ZodTuple = 'ZodTuple'),
        (e.ZodRecord = 'ZodRecord'),
        (e.ZodMap = 'ZodMap'),
        (e.ZodSet = 'ZodSet'),
        (e.ZodFunction = 'ZodFunction'),
        (e.ZodLazy = 'ZodLazy'),
        (e.ZodLiteral = 'ZodLiteral'),
        (e.ZodEnum = 'ZodEnum'),
        (e.ZodEffects = 'ZodEffects'),
        (e.ZodNativeEnum = 'ZodNativeEnum'),
        (e.ZodOptional = 'ZodOptional'),
        (e.ZodNullable = 'ZodNullable'),
        (e.ZodDefault = 'ZodDefault'),
        (e.ZodCatch = 'ZodCatch'),
        (e.ZodPromise = 'ZodPromise'),
        (e.ZodBranded = 'ZodBranded'),
        (e.ZodPipeline = 'ZodPipeline'),
        (e.ZodReadonly = 'ZodReadonly');
    })($ || ($ = {}));
    var Km = (e, t = { message: `Input not instance of ${e.name}` }) =>
        d0((n) => n instanceof e, t),
      u0 = Ct.create,
      m0 = sn.create,
      Jm = Or.create,
      Xm = cn.create,
      p0 = Ca.create,
      e4 = Ln.create,
      t4 = xr.create,
      n4 = Sa.create,
      a4 = xa.create,
      r4 = Tn.create,
      i4 = ln.create,
      o4 = It.create,
      l4 = Mr.create,
      s4 = Mt.create,
      c4 = Ae.create,
      d4 = Ae.strictCreate,
      u4 = Ma.create,
      m4 = Vo.create,
      p4 = Na.create,
      h4 = Rt.create,
      f4 = Nr.create,
      g4 = Fr.create,
      v4 = _n.create,
      y4 = fa.create,
      b4 = Fa.create,
      E4 = Aa.create,
      k4 = dn.create,
      w4 = Oa.create,
      C4 = Zn.create,
      Kl = pt.create,
      S4 = Zt.create,
      x4 = un.create,
      M4 = pt.createWithPreprocess,
      N4 = Qr.create,
      F4 = () => u0().optional(),
      A4 = () => m0().optional(),
      O4 = () => p0().optional(),
      L4 = {
        string: (e) => Ct.create({ ...e, coerce: !0 }),
        number: (e) => sn.create({ ...e, coerce: !0 }),
        boolean: (e) => Ca.create({ ...e, coerce: !0 }),
        bigint: (e) => cn.create({ ...e, coerce: !0 }),
        date: (e) => Ln.create({ ...e, coerce: !0 }),
      },
      T4 = q,
      Tt = Object.freeze({
        __proto__: null,
        defaultErrorMap: ka,
        setErrorMap: Rm,
        getErrorMap: wr,
        makeIssue: Cr,
        EMPTY_PATH: Bm,
        addIssueToContext: Z,
        ParseStatus: We,
        INVALID: q,
        DIRTY: l0,
        OK: Ge,
        isAborted: so,
        isDirty: co,
        isValid: wa,
        isAsync: Sr,
        get util() {
          return se;
        },
        get objectUtil() {
          return lo;
        },
        ZodParsedType: L,
        getParsedType: Dt,
        ZodType: te,
        ZodString: Ct,
        ZodNumber: sn,
        ZodBigInt: cn,
        ZodBoolean: Ca,
        ZodDate: Ln,
        ZodSymbol: xr,
        ZodUndefined: Sa,
        ZodNull: xa,
        ZodAny: Tn,
        ZodUnknown: ln,
        ZodNever: It,
        ZodVoid: Mr,
        ZodArray: Mt,
        ZodObject: Ae,
        ZodUnion: Ma,
        ZodDiscriminatedUnion: Vo,
        ZodIntersection: Na,
        ZodTuple: Rt,
        ZodRecord: Nr,
        ZodMap: Fr,
        ZodSet: _n,
        ZodFunction: fa,
        ZodLazy: Fa,
        ZodLiteral: Aa,
        ZodEnum: dn,
        ZodNativeEnum: Oa,
        ZodPromise: Zn,
        ZodEffects: pt,
        ZodTransformer: pt,
        ZodOptional: Zt,
        ZodNullable: un,
        ZodDefault: La,
        ZodCatch: Ar,
        ZodNaN: Or,
        BRAND: Ym,
        ZodBranded: c0,
        ZodPipeline: Qr,
        ZodReadonly: Lr,
        custom: d0,
        Schema: te,
        ZodSchema: te,
        late: Qm,
        get ZodFirstPartyTypeKind() {
          return $;
        },
        coerce: L4,
        any: r4,
        array: s4,
        bigint: Xm,
        boolean: p0,
        date: e4,
        discriminatedUnion: m4,
        effect: Kl,
        enum: k4,
        function: y4,
        instanceof: Km,
        intersection: p4,
        lazy: b4,
        literal: E4,
        map: g4,
        nan: Jm,
        nativeEnum: w4,
        never: o4,
        null: a4,
        nullable: x4,
        number: m0,
        object: c4,
        oboolean: O4,
        onumber: A4,
        optional: S4,
        ostring: F4,
        pipeline: N4,
        preprocess: M4,
        promise: C4,
        record: f4,
        set: v4,
        strictObject: d4,
        string: u0,
        symbol: t4,
        transformer: Kl,
        tuple: h4,
        undefined: n4,
        union: u4,
        unknown: i4,
        void: l4,
        NEVER: T4,
        ZodIssueCode: A,
        quotelessJson: Im,
        ZodError: mt,
      }),
      _4 = Tt.union([
        Tt.object({ message: Tt.literal('login') }),
        Tt.object({ message: Tt.literal('grant'), denied: Tt.boolean() }),
        Tt.object({ message: Tt.literal('createdProject'), projectId: Tt.string() }),
      ]),
      h0 = (e) => {
        let t = Pe(),
          n = Pe();
        return (
          oe(() => {
            let r = ({ origin: i, data: o }) => {
              if (i === n.current) {
                let l;
                try {
                  l = _4.parse(o);
                } catch {
                  return;
                }
                e?.(l);
              }
            };
            return (
              window.addEventListener('message', r), () => window.removeEventListener('message', r)
            );
          }, [e]),
          [
            W((r) => {
              if (window.innerWidth > 800 && window.innerHeight > 800) {
                let o = (window.innerWidth - 800) / 2 + window.screenLeft,
                  l = `scrollbars=yes,width=800,height=800,top=${(window.innerHeight - 800) / 2 + window.screenTop},left=${o}`;
                (t.current = window.open(r, 'chromatic-dialog', l)), t.current?.focus();
              } else t.current = window.open(r, '_blank');
              let { origin: i } = new URL(r);
              n.current = i;
            }, []),
            W(() => t.current?.close(), []),
          ]
        );
      },
      Z4 = w.ol(({ theme: e }) => ({
        display: 'inline-flex',
        listStyle: 'none',
        marginTop: 15,
        marginBottom: 5,
        padding: 0,
        gap: 5,
        'li:not(:empty)': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px dashed ${e.input.border}`,
          borderRadius: 4,
          width: 28,
          height: 32,
        },
      })),
      I4 = gt(`
  query VisualTestsProjectCountQuery {
    viewer {
      projectCount
      accounts {
        newProjectUrl
      }
    }
  }
`),
      R4 = ({
        onBack: e,
        hasProjectId: t,
        setAccessToken: n,
        setCreatedProjectId: r,
        exchangeParameters: i,
      }) => {
        let o = Ao(),
          l = Js(),
          { user_code: s, verificationUrl: c } = i,
          d = Pe(),
          u = Pe(),
          m = Pe(),
          p = W(
            async (y) => {
              if ((y.message === 'login' && u.current?.(c), y.message === 'grant'))
                try {
                  let k = await Y2(i);
                  if (!k) throw new Error('Failed to fetch an access token');
                  d.current = k;
                  let b = Fs(k),
                    { data: h } = await o.query(I4, {}, { fetchOptions: b });
                  if (!h?.viewer) throw new Error('Failed to fetch initial project list');
                  if (h.viewer.projectCount > 0 || t) n(d.current), m.current?.();
                  else {
                    if (!h.viewer.accounts[0]) throw new Error('User has no accounts!');
                    if (!h.viewer.accounts[0].newProjectUrl)
                      throw new Error('Unexpected missing project URL');
                    u.current?.(h.viewer.accounts[0].newProjectUrl);
                  }
                } catch (k) {
                  l('Login Error', k);
                }
              y.message === 'createdProject' &&
                (d.current
                  ? (n(d.current), r(`Project:${y.projectId}`), m.current?.())
                  : l('Unexpected missing access token', new Error()));
            },
            [c, i, o, t, n, l, r],
          ),
          [g, f] = h0(p);
        return (
          (u.current = g),
          (m.current = f),
          a.createElement(
            Ne,
            { footer: null, ignoreConfig: !0 },
            a.createElement(Yr, { onBack: e }),
            a.createElement(
              ye,
              null,
              a.createElement(
                de,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(fe, null, 'Verify your account'),
                  a.createElement(
                    'div',
                    null,
                    a.createElement(
                      G,
                      { center: !0, muted: !0 },
                      'Check this verification code on Chromatic to grant access to your published Storybooks.',
                    ),
                  ),
                  a.createElement(
                    Z4,
                    null,
                    s
                      ?.split('')
                      .map((y, k) =>
                        a.createElement('li', { key: `${k}-${y}` }, y.replace(/[^A-Z0-9]/, '')),
                      ),
                  ),
                ),
                a.createElement(
                  ue,
                  { variant: 'solid', size: 'medium', onClick: () => g(c) },
                  'Go to Chromatic',
                ),
              ),
            ),
          )
        );
      },
      B4 = ({ onNext: e, onUninstall: t }) =>
        a.createElement(
          Ne,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Yr, null),
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(pn, null),
                a.createElement(fe, null, 'Visual tests'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.',
                ),
              ),
              a.createElement(
                Ft,
                null,
                a.createElement(ue, { variant: 'solid', size: 'medium', onClick: e }, 'Enable'),
                a.createElement(ue, { link: !0, onClick: () => t() }, 'Uninstall'),
              ),
            ),
          ),
        ),
      P4 = ({ setAccessToken: e, setCreatedProjectId: t, hasProjectId: n }) => {
        let [r, i] = rt('authenticationScreen', n ? 'signin' : 'welcome'),
          [o, l] = rt('exchangeParameters'),
          s = Js(),
          { uninstallAddon: c } = Ro();
        tt('Authentication', r.charAt(0).toUpperCase() + r.slice(1));
        let d = W(
          async (u) => {
            try {
              l(await q2(u)), i('verify');
            } catch (m) {
              s('Sign in Error', m);
            }
          },
          [s, l, i],
        );
        if (r === 'welcome' && !n)
          return a.createElement(B4, { onNext: () => i('signin'), onUninstall: c });
        if (r === 'signin' || (r === 'welcome' && n))
          return a.createElement(_m, {
            ...(n ? {} : { onBack: () => i('welcome') }),
            onSignIn: d,
            onSignInWithSSO: () => i('subdomain'),
          });
        if (r === 'subdomain')
          return a.createElement(Tm, { onBack: () => i('signin'), onSignIn: d });
        if (r === 'verify') {
          if (!o) throw new Error('Expected to have a `exchangeParameters` if at `verify` step');
          return a.createElement(R4, {
            onBack: () => i('signin'),
            hasProjectId: n,
            setAccessToken: e,
            setCreatedProjectId: t,
            exchangeParameters: o,
          });
        }
        return null;
      },
      f0 = w.div(
        ({ theme: e }) => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: e.appBorderRadius,
          background: e.base === 'light' ? e.color.lightest : e.color.darkest,
          border: `1px solid ${e.appBorderColor}`,
          padding: 15,
          flex: 1,
          gap: 14,
          maxWidth: '500px',
          width: '100%',
        }),
        ({ theme: e, warning: t }) =>
          t && { background: e.base === 'dark' ? '#342e1a' : e.background.warning },
      ),
      V4 = w.b(() => ({ display: 'block', marginBottom: 2 })),
      j4 = () => {
        tt('Errors', 'GitNotFound');
        let { uninstallAddon: e } = Ro();
        return a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(pn, null),
                a.createElement(fe, null, 'Visual tests'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes.',
                ),
              ),
              a.createElement(
                f0,
                null,
                a.createElement(rs, { style: { flexShrink: 0 } }),
                a.createElement(
                  G,
                  null,
                  a.createElement(V4, null, 'Git not detected'),
                  'This addon requires Git to associate test results with commits and branches. Run',
                  ' ',
                  a.createElement(De, null, 'git init'),
                  ' and make your first commit',
                  a.createElement(De, null, 'git commit -m'),
                  ' to get started!',
                ),
              ),
              a.createElement(
                $e,
                {
                  target: '_blank',
                  href: 'https://www.chromatic.com/docs/visual-tests-addon#git-addon',
                  withArrow: !0,
                  secondary: !0,
                },
                'Visual tests requirements',
              ),
              a.createElement($e, { withArrow: !0, onClick: () => e() }, 'Uninstall'),
            ),
          ),
        );
      },
      H4 = w(ko)(({ theme: e }) => ({
        width: 40,
        height: 40,
        padding: 10,
        background: e.color.positive,
        borderRadius: '100%',
        color: 'white',
      })),
      D4 = w($e)(() => ({ marginTop: 5 })),
      z4 = gt(`
  query ProjectQuery($projectId: ID!) {
    project(id: $projectId) {
      id
      name
      webUrl
      lastBuild {
        branch
        number
      }
    }
  }
`),
      U4 = ({ projectId: e, configFile: t, goToNext: n }) => {
        tt('LinkProject', 'LinkedProject');
        let [{ data: r, fetching: i, error: o }] = Oo({ query: z4, variables: { projectId: e } });
        return a.createElement(
          Ne,
          {
            footer: a.createElement(
              qr,
              null,
              a.createElement(
                lt,
                null,
                r?.project?.lastBuild &&
                  a.createElement(
                    G,
                    { style: { marginLeft: 5 } },
                    'Last build: ',
                    r.project.lastBuild.number,
                    ' on branch',
                    ' ',
                    r.project.lastBuild.branch,
                  ),
              ),
              a.createElement(lt, { push: !0 }, a.createElement(Gr, null)),
            ),
          },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              i && a.createElement('p', null, 'Loading...'),
              o && a.createElement('p', null, o.message),
              r?.project &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(H4, null),
                  a.createElement(
                    'div',
                    null,
                    a.createElement(fe, null, 'Project linked!'),
                    a.createElement(
                      G,
                      { center: !0, muted: !0, style: { maxWidth: 500 } },
                      'The ',
                      a.createElement(De, null, 'projectId'),
                      ' for ',
                      a.createElement('strong', null, r.project.name),
                      ' was added in',
                      ' ',
                      a.createElement(De, null, t),
                      ' to sync tests with Chromatic. Please commit this change to continue using this addon.',
                    ),
                  ),
                  a.createElement(
                    Ft,
                    null,
                    a.createElement(
                      ue,
                      { variant: 'solid', size: 'medium', onClick: () => n() },
                      'Catch a UI change',
                    ),
                    a.createElement(
                      D4,
                      {
                        href: 'https://www.chromatic.com/docs/cli',
                        target: '_blank',
                        withArrow: !0,
                        secondary: !0,
                      },
                      "What's a project ID?",
                    ),
                  ),
                ),
            ),
          ),
        );
      };
    function $4(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Array.from(typeof e == 'string' ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
      var i = r.reduce(function (s, c) {
        var d = c.match(/\n([\t ]+|(?!\s).)/g);
        return d
          ? s.concat(
              d.map(function (u) {
                var m, p;
                return (p =
                  (m = u.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null &&
                  p !== void 0
                  ? p
                  : 0;
              }),
            )
          : s;
      }, []);
      if (i.length) {
        var o = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            '}',
          'g',
        );
        r = r.map(function (s) {
          return s.replace(
            o,
            `
`,
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, '');
      var l = r[0];
      return (
        t.forEach(function (s, c) {
          var d = l.match(/(?:^|\n)( *)$/),
            u = d ? d[1] : '',
            m = s;
          typeof s == 'string' &&
            s.includes(`
`) &&
            (m = String(s)
              .split(`
`)
              .map(function (p, g) {
                return g === 0 ? p : '' + u + p;
              })
              .join(`
`)),
            (l += m + r[c + 1]);
        }),
        l
      );
    }
    var W4 = w.div(({ theme: e }) => ({
        '&& > *': { margin: 0 },
        '&& pre': {
          color: e.base === 'light' ? e.color.darker : e.color.lighter,
          background: e.base === 'light' ? e.color.lightest : e.color.darkest,
          fontSize: '12px',
          lineHeight: '16px',
          textAlign: 'left',
          padding: '15px !important',
        },
      })),
      G4 = 'https://www.chromatic.com/docs/visual-tests-addon/#configure';
    function q4({ projectId: e, configFile: t }) {
      return (
        tt('LinkProject', 'LinkingProjectFailed'),
        a.createElement(
          Ne,
          null,
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Add the project ID to your Chromatic config'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'The ',
                  a.createElement(De, null, 'projectId'),
                  ' will be used to sync tests with Chromatic. Please commit this change to continue using the addon. The file should be saved at',
                  ' ',
                  a.createElement(De, null, t),
                  '.',
                ),
              ),
              a.createElement(
                W4,
                null,
                a.createElement(
                  De,
                  null,
                  $4`
                {
                  "projectId": "${e}",
                }
              `,
                ),
              ),
              a.createElement(
                $e,
                { secondary: !0, withArrow: !0, target: '_blank', href: G4 },
                "What's this for?",
              ),
            ),
          ),
        )
      );
    }
    var Y4 = gt(`
  query SelectProjectsQuery {
    viewer {
      accounts {
        id
        name
        avatarUrl
        newProjectUrl
        projects {
          id
          name
          webUrl
          lastBuild {
            branch
            number
          }
        }
      }
    }
  }
`),
      Q4 = ({ createdProjectId: e, setCreatedProjectId: t, onUpdateProject: n }) => {
        let r = a.useCallback(
          async (i) => {
            await n(i);
          },
          [n],
        );
        return a.createElement(X4, {
          createdProjectId: e,
          setCreatedProjectId: t,
          onSelectProjectId: r,
        });
      },
      Ja = w.div(({ theme: e }) => ({
        fontSize: `${e.typography.size.s1 - 1}px`,
        fontWeight: e.typography.weight.bold,
        color: e.base === 'light' ? e.color.dark : e.color.light,
        backgroundColor: 'inherit',
        padding: '7px 15px',
        borderBottom: `1px solid ${e.appBorderColor}`,
        lineHeight: '18px',
        letterSpacing: '0.38em',
        textTransform: 'uppercase',
      })),
      Jl = w.div(({ theme: e }) => ({})),
      Xl = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lighter : e.color.darker,
      })),
      e1 = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lightest : e.color.darkest,
        borderRadius: 5,
        border: `1px solid ${e.appBorderColor}`,
        height: 260,
        maxWidth: 420,
        minWidth: 260,
        width: '100%',
        overflow: 'hidden',
        textAlign: 'left',
        position: 'relative',
        display: 'flex',
        '> *': { flex: 1, display: 'flex', flexDirection: 'column', width: '50%' },
      })),
      Xa = w.div({ height: '100%', overflowY: 'auto' }),
      K4 = w(de)({ width: '100%' }),
      J4 = w(y2)({ marginRight: 10 });
    function X4({ createdProjectId: e, setCreatedProjectId: t, onSelectProjectId: n }) {
      let [{ data: r, fetching: i, error: o }, l] = Oo({ query: Y4 });
      oe(() => {
        let h = setInterval(l, 5e3);
        return () => clearInterval(h);
      }, [l]);
      let [s, c] = rt('selectedAccountId'),
        d = r?.viewer?.accounts.find((h) => h.id === s),
        u = W((h) => c(h.id), [c]);
      oe(() => {
        !s && r?.viewer?.accounts && u(r.viewer.accounts[0]);
      }, [r, s, u]);
      let [m, p] = rt('isSelectingProject', !1),
        g = W(
          (h) => {
            p(!0), n(h.id);
            let v = setTimeout(() => {
              p(!1);
            }, 1e3);
            return () => clearTimeout(v);
          },
          [n, p],
        ),
        f = W(
          async (h) => {
            h.message === 'createdProject' && (l(), t(h.projectId));
          },
          [l, t],
        ),
        [y, k] = h0(f),
        b = e && d?.projects?.find((h) => h?.id.endsWith(e));
      return (
        oe(() => {
          b && (k(), g(b));
        }, [b, g, k]),
        tt('LinkProject', 'LinkProject'),
        a.createElement(
          Ne,
          null,
          a.createElement(
            ye,
            null,
            a.createElement(
              K4,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Select a project'),
                a.createElement(G, { muted: !0 }, 'Your tests will sync with this project.'),
              ),
              o && a.createElement('p', null, o.message),
              !r &&
                i &&
                a.createElement(
                  e1,
                  null,
                  a.createElement(
                    Jl,
                    null,
                    a.createElement(Ja, null, 'Accounts'),
                    a.createElement(
                      Xa,
                      null,
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                    ),
                  ),
                  a.createElement(
                    Xl,
                    null,
                    a.createElement(Ja, null, 'Projects'),
                    a.createElement(
                      Xa,
                      { 'data-testid': 'right-list' },
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                      a.createElement(dt, { appearance: 'secondary', isLoading: !0 }),
                    ),
                  ),
                ),
              r?.viewer?.accounts &&
                a.createElement(
                  e1,
                  null,
                  a.createElement(
                    Jl,
                    null,
                    a.createElement(Ja, null, 'Accounts'),
                    a.createElement(
                      Xa,
                      { 'data-testid': 'left-list' },
                      r.viewer.accounts?.map((h) =>
                        a.createElement(dt, {
                          key: h.id,
                          title: h.name,
                          appearance: 'secondary',
                          left: a.createElement(J4, { src: h.avatarUrl ?? void 0, size: 'tiny' }),
                          onClick: () => u(h),
                          active: s === h.id,
                        }),
                      ),
                    ),
                  ),
                  a.createElement(
                    Xl,
                    null,
                    a.createElement(Ja, null, 'Projects'),
                    a.createElement(
                      Xa,
                      { 'data-testid': 'right-list' },
                      d &&
                        a.createElement(dt, {
                          isLink: !1,
                          onClick: () => {
                            if (!d?.newProjectUrl)
                              throw new Error('Unexpected missing `newProjectUrl` on account');
                            y(d.newProjectUrl);
                          },
                          title: a.createElement(
                            $e,
                            { isButton: !0, withArrow: !0 },
                            'Create new project',
                          ),
                        }),
                      d?.projects?.map(
                        (h) =>
                          h &&
                          a.createElement(dt, {
                            appearance: 'secondary',
                            key: h.id,
                            title: h.name,
                            right: a.createElement(Md, { 'aria-label': h.name }),
                            onClick: () => g(h),
                            disabled: m,
                          }),
                      ),
                    ),
                  ),
                ),
            ),
          ),
        )
      );
    }
    var ep = () =>
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(pn, null),
                a.createElement(fe, null, 'Visual tests'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Visual tests only runs locally. To test this Storybook, clone it to your machine and run ',
                  a.createElement(De, null, 'npx storybook dev'),
                  '.',
                ),
              ),
            ),
          ),
        ),
      tp = ({ offline: e = !1 }) =>
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, "Can't connect to Chromatic"),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  e
                    ? "You're offline. Double check your internet connection."
                    : "We're having trouble connecting to the Chromatic API.",
                ),
              ),
              !e &&
                a.createElement(
                  $e,
                  {
                    href: 'https://status.chromatic.com',
                    target: '_blank',
                    rel: 'noreferrer',
                    withArrow: !0,
                  },
                  'Chromatic API status',
                ),
            ),
          ),
        ),
      np = () => (
        tt('Uninstalled', 'uninstalled'),
        a.createElement(
          Ne,
          { footer: !1 },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(pn, null),
                a.createElement(fe, null, 'Uninstall complete'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Visual Tests will vanish the next time you restart your Storybook.',
                ),
              ),
            ),
          ),
        )
      ),
      g0 = { isRunning: !1, startBuild: () => {}, stopBuild: () => {} },
      v0 = Je(g0),
      Za = () => Ot(v0, 'RunBuild'),
      ap = ({ children: e, watchState: t = g0 }) => a.createElement(v0.Provider, { value: t }, e),
      y0 = { PENDING: 'warn', FAILED: 'error', DENIED: 'error', BROKEN: 'error' },
      Ai = [null, 'unknown', 'pending', 'success', 'warn', 'error'];
    function rp(e, t) {
      return Ai[Math.max(Ai.indexOf(e), Ai.indexOf(t))];
    }
    function ip(e, t) {
      let n = {};
      t.forEach((i) => {
        !i.story ||
          !i.status ||
          (n[i.story.storyId] = rp(y0[i.status] || null, n[i.story.storyId]));
      });
      let r = () => {
        e.setSelectedPanel(qt), e.togglePanel(!0);
      };
      return Object.fromEntries(
        Object.entries(n).map(([i, o]) => [
          i,
          o && {
            status: o,
            title: 'Visual Tests',
            description: 'Chromatic Visual Tests',
            onClick: r,
          },
        ]),
      );
    }
    function op(e, { shouldSwitchToLastBuildOnBranch: t, lastBuildOnBranchId: n, storyId: r }) {
      if (!t) return e ? { ...e, storyId: r } : void 0;
      if (!n) throw new Error('Impossible state');
      return { buildId: n, storyId: r };
    }
    var t1 = {
        EXCEEDED_THRESHOLD: {
          heading: 'Snapshot limit reached',
          message:
            'Your account has reached its monthly snapshot limit. Visual testing is disabled. Upgrade your plan to increase your quota.',
          action: 'Upgrade plan',
        },
        PAYMENT_REQUIRED: {
          heading: 'Payment required',
          message:
            'Your subscription payment is past due. Review or replace your payment method to continue using Chromatic.',
          action: 'Review billing details',
        },
        OTHER: {
          heading: 'Account suspended',
          message: 'Your account has been suspended. Contact customer support for details.',
          action: 'Billing details',
        },
      },
      b0 = ({ children: e, billingUrl: t, suspensionReason: n = 'OTHER' }) => {
        tt('Errors', 'AccountSuspended');
        let { heading: r, message: i, action: o } = t1[n] || t1.OTHER;
        return a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, r),
                a.createElement(G, { center: !0, muted: !0 }, i),
              ),
              t &&
                a.createElement(
                  ue,
                  { asChild: !0, size: 'medium', variant: 'solid' },
                  a.createElement('a', { href: t, target: '_new' }, o),
                ),
              e,
            ),
          ),
        );
      },
      lp = ({ children: e, manageUrl: t }) => (
        tt('Errors', 'VisualTestsDisabled'),
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Visual Tests disabled for your project'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Update your project settings to enable visual testing.',
                ),
              ),
              a.createElement(
                ue,
                { asChild: !0, size: 'medium', variant: 'solid' },
                a.createElement('a', { href: t, target: '_new' }, 'Manage project settings'),
              ),
              e,
            ),
          ),
        )
      );
    function E0(e) {
      return (t) => typeof t === e;
    }
    var sp = E0('function'),
      cp = (e) => e === null,
      n1 = (e) => Object.prototype.toString.call(e).slice(8, -1) === 'RegExp',
      a1 = (e) => !dp(e) && !cp(e) && (sp(e) || typeof e == 'object'),
      dp = E0('undefined');
    function up(e, t) {
      let { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!Ue(e[r], t[r])) return !1;
      return !0;
    }
    function mp(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        i = e.byteLength;
      for (; i--; ) if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function pp(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      for (let n of e.entries()) if (!Ue(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function hp(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function Ue(e, t) {
      if (e === t) return !0;
      if (e && a1(e) && t && a1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return up(e, t);
        if (e instanceof Map && t instanceof Map) return pp(e, t);
        if (e instanceof Set && t instanceof Set) return hp(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return mp(e, t);
        if (n1(e) && n1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (let i = n.length; i-- !== 0; ) {
          let o = n[i];
          if (!(o === '_owner' && e.$$typeof) && !Ue(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    var fp = [
        'Array',
        'ArrayBuffer',
        'AsyncFunction',
        'AsyncGenerator',
        'AsyncGeneratorFunction',
        'Date',
        'Error',
        'Function',
        'Generator',
        'GeneratorFunction',
        'HTMLElement',
        'Map',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'WeakMap',
        'WeakSet',
      ],
      gp = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined'];
    function Kr(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (vp(t)) return t;
    }
    function vt(e) {
      return (t) => Kr(t) === e;
    }
    function vp(e) {
      return fp.includes(e);
    }
    function Vn(e) {
      return (t) => typeof t === e;
    }
    function yp(e) {
      return gp.includes(e);
    }
    var bp = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'];
    function T(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      return T.array(e) ? 'Array' : T.plainFunction(e) ? 'Function' : Kr(e) || 'Object';
    }
    T.array = Array.isArray;
    T.arrayOf = (e, t) => (!T.array(e) && !T.function(t) ? !1 : e.every((n) => t(n)));
    T.asyncGeneratorFunction = (e) => Kr(e) === 'AsyncGeneratorFunction';
    T.asyncFunction = vt('AsyncFunction');
    T.bigint = Vn('bigint');
    T.boolean = (e) => e === !0 || e === !1;
    T.date = vt('Date');
    T.defined = (e) => !T.undefined(e);
    T.domElement = (e) =>
      T.object(e) &&
      !T.plainObject(e) &&
      e.nodeType === 1 &&
      T.string(e.nodeName) &&
      bp.every((t) => t in e);
    T.empty = (e) =>
      (T.string(e) && e.length === 0) ||
      (T.array(e) && e.length === 0) ||
      (T.object(e) && !T.map(e) && !T.set(e) && Object.keys(e).length === 0) ||
      (T.set(e) && e.size === 0) ||
      (T.map(e) && e.size === 0);
    T.error = vt('Error');
    T.function = Vn('function');
    T.generator = (e) => T.iterable(e) && T.function(e.next) && T.function(e.throw);
    T.generatorFunction = vt('GeneratorFunction');
    T.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
    T.iterable = (e) => !T.nullOrUndefined(e) && T.function(e[Symbol.iterator]);
    T.map = vt('Map');
    T.nan = (e) => Number.isNaN(e);
    T.null = (e) => e === null;
    T.nullOrUndefined = (e) => T.null(e) || T.undefined(e);
    T.number = (e) => Vn('number')(e) && !T.nan(e);
    T.numericString = (e) => T.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    T.object = (e) => !T.nullOrUndefined(e) && (T.function(e) || typeof e == 'object');
    T.oneOf = (e, t) => (T.array(e) ? e.indexOf(t) > -1 : !1);
    T.plainFunction = vt('Function');
    T.plainObject = (e) => {
      if (Kr(e) !== 'Object') return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    T.primitive = (e) => T.null(e) || yp(typeof e);
    T.promise = vt('Promise');
    T.propertyOf = (e, t, n) => {
      if (!T.object(e) || !t) return !1;
      let r = e[t];
      return T.function(n) ? n(r) : T.defined(r);
    };
    T.regexp = vt('RegExp');
    T.set = vt('Set');
    T.string = Vn('string');
    T.symbol = Vn('symbol');
    T.undefined = Vn('undefined');
    T.weakMap = vt('WeakMap');
    T.weakSet = vt('WeakSet');
    var I = T;
    function Ep(...e) {
      return e.every((t) => I.string(t) || I.array(t) || I.plainObject(t));
    }
    function kp(e, t, n) {
      return k0(e, t)
        ? [e, t].every(I.array)
          ? !e.some(s1(n)) && t.some(s1(n))
          : [e, t].every(I.plainObject)
            ? !Object.entries(e).some(l1(n)) && Object.entries(t).some(l1(n))
            : t === n
        : !1;
    }
    function r1(e, t, n) {
      let { actual: r, key: i, previous: o, type: l } = n,
        s = St(e, i),
        c = St(t, i),
        d = [s, c].every(I.number) && (l === 'increased' ? s < c : s > c);
      return I.undefined(r) || (d = d && c === r), I.undefined(o) || (d = d && s === o), d;
    }
    function i1(e, t, n) {
      let { key: r, type: i, value: o } = n,
        l = St(e, r),
        s = St(t, r),
        c = i === 'added' ? l : s,
        d = i === 'added' ? s : l;
      if (!I.nullOrUndefined(o)) {
        if (I.defined(c)) {
          if (I.array(c) || I.plainObject(c)) return kp(c, d, o);
        } else return Ue(d, o);
        return !1;
      }
      return [l, s].every(I.array)
        ? !d.every(jo(c))
        : [l, s].every(I.plainObject)
          ? wp(Object.keys(c), Object.keys(d))
          : ![l, s].every((u) => I.primitive(u) && I.defined(u)) &&
            (i === 'added' ? !I.defined(l) && I.defined(s) : I.defined(l) && !I.defined(s));
    }
    function o1(e, t, { key: n } = {}) {
      let r = St(e, n),
        i = St(t, n);
      if (!k0(r, i)) throw new TypeError('Inputs have different types');
      if (!Ep(r, i)) throw new TypeError("Inputs don't have length");
      return [r, i].every(I.plainObject) && ((r = Object.keys(r)), (i = Object.keys(i))), [r, i];
    }
    function l1(e) {
      return ([t, n]) =>
        I.array(e)
          ? Ue(e, n) || e.some((r) => Ue(r, n) || (I.array(n) && jo(n)(r)))
          : I.plainObject(e) && e[t]
            ? !!e[t] && Ue(e[t], n)
            : Ue(e, n);
    }
    function wp(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function s1(e) {
      return (t) => (I.array(e) ? e.some((n) => Ue(n, t) || (I.array(t) && jo(t)(n))) : Ue(e, t));
    }
    function ta(e, t) {
      return I.array(e) ? e.some((n) => Ue(n, t)) : Ue(e, t);
    }
    function jo(e) {
      return (t) => e.some((n) => Ue(n, t));
    }
    function k0(...e) {
      return e.every(I.array) || e.every(I.number) || e.every(I.plainObject) || e.every(I.string);
    }
    function St(e, t) {
      return I.plainObject(e) || I.array(e)
        ? I.string(t)
          ? t.split('.').reduce((n, r) => n && n[r], e)
          : I.number(t)
            ? e[t]
            : e
        : e;
    }
    function Tr(e, t) {
      if ([e, t].some(I.nullOrUndefined)) throw new Error('Missing required parameters');
      if (![e, t].every((n) => I.plainObject(n) || I.array(n)))
        throw new Error('Expected plain objects or array');
      return {
        added: (n, r) => {
          try {
            return i1(e, t, { key: n, type: 'added', value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, i) => {
          try {
            let o = St(e, n),
              l = St(t, n),
              s = I.defined(r),
              c = I.defined(i);
            if (s || c) {
              let d = c ? ta(i, o) : !ta(r, o),
                u = ta(r, l);
              return d && u;
            }
            return [o, l].every(I.array) || [o, l].every(I.plainObject) ? !Ue(o, l) : o !== l;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            let o = St(e, n),
              l = St(t, n),
              s = I.defined(i);
            return ta(r, o) && (s ? ta(i, l) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            return r1(e, t, { key: n, actual: r, previous: i, type: 'decreased' });
          } catch {
            return !1;
          }
        },
        emptied: (n) => {
          try {
            let [r, i] = o1(e, t, { key: n });
            return !!r.length && !i.length;
          } catch {
            return !1;
          }
        },
        filled: (n) => {
          try {
            let [r, i] = o1(e, t, { key: n });
            return !r.length && !!i.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, i) => {
          if (!I.defined(n)) return !1;
          try {
            return r1(e, t, { key: n, actual: r, previous: i, type: 'increased' });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return i1(e, t, { key: n, type: 'removed', value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    var Cp = ht(pd(), 1),
      w0 = ht(hd(), 1);
    function Sp(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function xp(e, ...t) {
      if (!I.plainObject(e)) throw new TypeError('Expected an object');
      if (!t.length) return e;
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    var er = ht(Eo(), 1),
      Oi = ht(Eo(), 1),
      O = ht(vd()),
      Ia = typeof window < 'u' && typeof document < 'u' && typeof navigator < 'u',
      Mp = (function () {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
          if (Ia && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0;
      })();
    function Np(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function Fp(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, Mp));
      };
    }
    var Ap = Ia && window.Promise,
      Op = Ap ? Np : Fp;
    function C0(e) {
      var t = {};
      return e && t.toString.call(e) === '[object Function]';
    }
    function hn(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function Ho(e) {
      return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
    }
    function Ra(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
          return e.ownerDocument.body;
        case '#document':
          return e.body;
      }
      var t = hn(e),
        n = t.overflow,
        r = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + r) ? e : Ra(Ho(e));
    }
    function S0(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    var c1 = Ia && !!(window.MSInputMethodContext && document.documentMode),
      d1 = Ia && /MSIE 10/.test(navigator.userAgent);
    function jn(e) {
      return e === 11 ? c1 : e === 10 ? d1 : c1 || d1;
    }
    function In(e) {
      if (!e) return document.documentElement;
      for (
        var t = jn(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;
      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === 'BODY' || r === 'HTML'
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 && hn(n, 'position') === 'static'
          ? In(n)
          : n;
    }
    function Lp(e) {
      var t = e.nodeName;
      return t === 'BODY' ? !1 : t === 'HTML' || In(e.firstElementChild) === e;
    }
    function mo(e) {
      return e.parentNode !== null ? mo(e.parentNode) : e;
    }
    function _r(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        i = n ? t : e,
        o = document.createRange();
      o.setStart(r, 0), o.setEnd(i, 0);
      var l = o.commonAncestorContainer;
      if ((e !== l && t !== l) || r.contains(i)) return Lp(l) ? l : In(l);
      var s = mo(e);
      return s.host ? _r(s.host, t) : _r(e, mo(t).host);
    }
    function Rn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'top',
        n = t === 'top' ? 'scrollTop' : 'scrollLeft',
        r = e.nodeName;
      if (r === 'BODY' || r === 'HTML') {
        var i = e.ownerDocument.documentElement,
          o = e.ownerDocument.scrollingElement || i;
        return o[n];
      }
      return e[n];
    }
    function Tp(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Rn(t, 'top'),
        i = Rn(t, 'left'),
        o = n ? -1 : 1;
      return (e.top += r * o), (e.bottom += r * o), (e.left += i * o), (e.right += i * o), e;
    }
    function u1(e, t) {
      var n = t === 'x' ? 'Left' : 'Top',
        r = n === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(e['border' + n + 'Width']) + parseFloat(e['border' + r + 'Width']);
    }
    function m1(e, t, n, r) {
      return Math.max(
        t['offset' + e],
        t['scroll' + e],
        n['client' + e],
        n['offset' + e],
        n['scroll' + e],
        jn(10)
          ? parseInt(n['offset' + e]) +
              parseInt(r['margin' + (e === 'Height' ? 'Top' : 'Left')]) +
              parseInt(r['margin' + (e === 'Height' ? 'Bottom' : 'Right')])
          : 0,
      );
    }
    function x0(e) {
      var t = e.body,
        n = e.documentElement,
        r = jn(10) && getComputedStyle(n);
      return { height: m1('Height', t, n, r), width: m1('Width', t, n, r) };
    }
    var _p = function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      },
      Zp = (function () {
        function e(t, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      Bn = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      it =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    function Yt(e) {
      return it({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function po(e) {
      var t = {};
      try {
        if (jn(10)) {
          t = e.getBoundingClientRect();
          var n = Rn(e, 'top'),
            r = Rn(e, 'left');
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = e.nodeName === 'HTML' ? x0(e.ownerDocument) : {},
        l = o.width || e.clientWidth || i.width,
        s = o.height || e.clientHeight || i.height,
        c = e.offsetWidth - l,
        d = e.offsetHeight - s;
      if (c || d) {
        var u = hn(e);
        (c -= u1(u, 'x')), (d -= u1(u, 'y')), (i.width -= c), (i.height -= d);
      }
      return Yt(i);
    }
    function Do(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = jn(10),
        i = t.nodeName === 'HTML',
        o = po(e),
        l = po(t),
        s = Ra(e),
        c = hn(t),
        d = parseFloat(c.borderTopWidth),
        u = parseFloat(c.borderLeftWidth);
      n && i && ((l.top = Math.max(l.top, 0)), (l.left = Math.max(l.left, 0)));
      var m = Yt({
        top: o.top - l.top - d,
        left: o.left - l.left - u,
        width: o.width,
        height: o.height,
      });
      if (((m.marginTop = 0), (m.marginLeft = 0), !r && i)) {
        var p = parseFloat(c.marginTop),
          g = parseFloat(c.marginLeft);
        (m.top -= d - p),
          (m.bottom -= d - p),
          (m.left -= u - g),
          (m.right -= u - g),
          (m.marginTop = p),
          (m.marginLeft = g);
      }
      return (r && !n ? t.contains(s) : t === s && s.nodeName !== 'BODY') && (m = Tp(m, t)), m;
    }
    function Ip(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Do(e, n),
        i = Math.max(n.clientWidth, window.innerWidth || 0),
        o = Math.max(n.clientHeight, window.innerHeight || 0),
        l = t ? 0 : Rn(n),
        s = t ? 0 : Rn(n, 'left'),
        c = { top: l - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: o };
      return Yt(c);
    }
    function M0(e) {
      var t = e.nodeName;
      if (t === 'BODY' || t === 'HTML') return !1;
      if (hn(e, 'position') === 'fixed') return !0;
      var n = Ho(e);
      return n ? M0(n) : !1;
    }
    function N0(e) {
      if (!e || !e.parentElement || jn()) return document.documentElement;
      for (var t = e.parentElement; t && hn(t, 'transform') === 'none'; ) t = t.parentElement;
      return t || document.documentElement;
    }
    function zo(e, t, n, r) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        o = { top: 0, left: 0 },
        l = i ? N0(e) : _r(e, S0(t));
      if (r === 'viewport') o = Ip(l, i);
      else {
        var s = void 0;
        r === 'scrollParent'
          ? ((s = Ra(Ho(t))), s.nodeName === 'BODY' && (s = e.ownerDocument.documentElement))
          : r === 'window'
            ? (s = e.ownerDocument.documentElement)
            : (s = r);
        var c = Do(s, l, i);
        if (s.nodeName === 'HTML' && !M0(l)) {
          var d = x0(e.ownerDocument),
            u = d.height,
            m = d.width;
          (o.top += c.top - c.marginTop),
            (o.bottom = u + c.top),
            (o.left += c.left - c.marginLeft),
            (o.right = m + c.left);
        } else o = c;
      }
      n = n || 0;
      var p = typeof n == 'number';
      return (
        (o.left += p ? n : n.left || 0),
        (o.top += p ? n : n.top || 0),
        (o.right -= p ? n : n.right || 0),
        (o.bottom -= p ? n : n.bottom || 0),
        o
      );
    }
    function Rp(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function F0(e, t, n, r, i) {
      var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf('auto') === -1) return e;
      var l = zo(n, r, o, i),
        s = {
          top: { width: l.width, height: t.top - l.top },
          right: { width: l.right - t.right, height: l.height },
          bottom: { width: l.width, height: l.bottom - t.bottom },
          left: { width: t.left - l.left, height: l.height },
        },
        c = Object.keys(s)
          .map(function (p) {
            return it({ key: p }, s[p], { area: Rp(s[p]) });
          })
          .sort(function (p, g) {
            return g.area - p.area;
          }),
        d = c.filter(function (p) {
          var g = p.width,
            f = p.height;
          return g >= n.clientWidth && f >= n.clientHeight;
        }),
        u = d.length > 0 ? d[0].key : c[0].key,
        m = e.split('-')[1];
      return u + (m ? '-' + m : '');
    }
    function A0(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = r ? N0(t) : _r(t, S0(n));
      return Do(n, i, r);
    }
    function O0(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        o = { width: e.offsetWidth + i, height: e.offsetHeight + r };
      return o;
    }
    function Zr(e) {
      var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n];
      });
    }
    function L0(e, t, n) {
      n = n.split('-')[0];
      var r = O0(e),
        i = { width: r.width, height: r.height },
        o = ['right', 'left'].indexOf(n) !== -1,
        l = o ? 'top' : 'left',
        s = o ? 'left' : 'top',
        c = o ? 'height' : 'width',
        d = o ? 'width' : 'height';
      return (
        (i[l] = t[l] + t[c] / 2 - r[c] / 2), n === s ? (i[s] = t[s] - r[d]) : (i[s] = t[Zr(s)]), i
      );
    }
    function Ba(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function Bp(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (i) {
          return i[t] === n;
        });
      var r = Ba(e, function (i) {
        return i[t] === n;
      });
      return e.indexOf(r);
    }
    function T0(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, Bp(e, 'name', n));
      return (
        r.forEach(function (i) {
          i.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          var o = i.function || i.fn;
          i.enabled &&
            C0(o) &&
            ((t.offsets.popper = Yt(t.offsets.popper)),
            (t.offsets.reference = Yt(t.offsets.reference)),
            (t = o(t, i)));
        }),
        t
      );
    }
    function Pp() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = A0(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed,
        )),
          (e.placement = F0(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding,
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = L0(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
          (e = T0(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function _0(e, t) {
      return e.some(function (n) {
        var r = n.name,
          i = n.enabled;
        return i && r === t;
      });
    }
    function Uo(e) {
      for (
        var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
        r < t.length;
        r++
      ) {
        var i = t[r],
          o = i ? '' + i + n : e;
        if (typeof document.body.style[o] < 'u') return o;
      }
      return null;
    }
    function Vp() {
      return (
        (this.state.isDestroyed = !0),
        _0(this.modifiers, 'applyStyle') &&
          (this.popper.removeAttribute('x-placement'),
          (this.popper.style.position = ''),
          (this.popper.style.top = ''),
          (this.popper.style.left = ''),
          (this.popper.style.right = ''),
          (this.popper.style.bottom = ''),
          (this.popper.style.willChange = ''),
          (this.popper.style[Uo('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function Z0(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function I0(e, t, n, r) {
      var i = e.nodeName === 'BODY',
        o = i ? e.ownerDocument.defaultView : e;
      o.addEventListener(t, n, { passive: !0 }), i || I0(Ra(o.parentNode), t, n, r), r.push(o);
    }
    function jp(e, t, n, r) {
      (n.updateBound = r), Z0(e).addEventListener('resize', n.updateBound, { passive: !0 });
      var i = Ra(e);
      return (
        I0(i, 'scroll', n.updateBound, n.scrollParents),
        (n.scrollElement = i),
        (n.eventsEnabled = !0),
        n
      );
    }
    function Hp() {
      this.state.eventsEnabled ||
        (this.state = jp(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function Dp(e, t) {
      return (
        Z0(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function (n) {
          n.removeEventListener('scroll', t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function zp() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate), (this.state = Dp(this.reference, this.state)));
    }
    function $o(e) {
      return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function ho(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = '';
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1 &&
          $o(t[n]) &&
          (r = 'px'),
          (e.style[n] = t[n] + r);
      });
    }
    function Up(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function $p(e) {
      return (
        ho(e.instance.popper, e.styles),
        Up(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && ho(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function Wp(e, t, n, r, i) {
      var o = A0(i, t, e, n.positionFixed),
        l = F0(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return (
        t.setAttribute('x-placement', l),
        ho(t, { position: n.positionFixed ? 'fixed' : 'absolute' }),
        n
      );
    }
    function Gp(e, t) {
      var n = e.offsets,
        r = n.popper,
        i = n.reference,
        o = Math.round,
        l = Math.floor,
        s = function (k) {
          return k;
        },
        c = o(i.width),
        d = o(r.width),
        u = ['left', 'right'].indexOf(e.placement) !== -1,
        m = e.placement.indexOf('-') !== -1,
        p = c % 2 === d % 2,
        g = c % 2 === 1 && d % 2 === 1,
        f = t ? (u || m || p ? o : l) : s,
        y = t ? o : s;
      return {
        left: f(g && !m && t ? r.left - 1 : r.left),
        top: y(r.top),
        bottom: y(r.bottom),
        right: f(r.right),
      };
    }
    var qp = Ia && /Firefox/i.test(navigator.userAgent);
    function Yp(e, t) {
      var n = t.x,
        r = t.y,
        i = e.offsets.popper,
        o = Ba(e.instance.modifiers, function (v) {
          return v.name === 'applyStyle';
        }).gpuAcceleration;
      o !== void 0 &&
        console.warn(
          'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
        );
      var l = o !== void 0 ? o : t.gpuAcceleration,
        s = In(e.instance.popper),
        c = po(s),
        d = { position: i.position },
        u = Gp(e, window.devicePixelRatio < 2 || !qp),
        m = n === 'bottom' ? 'top' : 'bottom',
        p = r === 'right' ? 'left' : 'right',
        g = Uo('transform'),
        f = void 0,
        y = void 0;
      if (
        (m === 'bottom'
          ? s.nodeName === 'HTML'
            ? (y = -s.clientHeight + u.bottom)
            : (y = -c.height + u.bottom)
          : (y = u.top),
        p === 'right'
          ? s.nodeName === 'HTML'
            ? (f = -s.clientWidth + u.right)
            : (f = -c.width + u.right)
          : (f = u.left),
        l && g)
      )
        (d[g] = 'translate3d(' + f + 'px, ' + y + 'px, 0)'),
          (d[m] = 0),
          (d[p] = 0),
          (d.willChange = 'transform');
      else {
        var k = m === 'bottom' ? -1 : 1,
          b = p === 'right' ? -1 : 1;
        (d[m] = y * k), (d[p] = f * b), (d.willChange = m + ', ' + p);
      }
      var h = { 'x-placement': e.placement };
      return (
        (e.attributes = it({}, h, e.attributes)),
        (e.styles = it({}, d, e.styles)),
        (e.arrowStyles = it({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function R0(e, t, n) {
      var r = Ba(e, function (s) {
          var c = s.name;
          return c === t;
        }),
        i =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!i) {
        var o = '`' + t + '`',
          l = '`' + n + '`';
        console.warn(
          l +
            ' modifier is required by ' +
            o +
            ' modifier in order to work, be sure to include it before ' +
            o +
            '!',
        );
      }
      return i;
    }
    function Qp(e, t) {
      var n;
      if (!R0(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
      var r = t.element;
      if (typeof r == 'string') {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e;
      } else if (!e.instance.popper.contains(r))
        return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
      var i = e.placement.split('-')[0],
        o = e.offsets,
        l = o.popper,
        s = o.reference,
        c = ['left', 'right'].indexOf(i) !== -1,
        d = c ? 'height' : 'width',
        u = c ? 'Top' : 'Left',
        m = u.toLowerCase(),
        p = c ? 'left' : 'top',
        g = c ? 'bottom' : 'right',
        f = O0(r)[d];
      s[g] - f < l[m] && (e.offsets.popper[m] -= l[m] - (s[g] - f)),
        s[m] + f > l[g] && (e.offsets.popper[m] += s[m] + f - l[g]),
        (e.offsets.popper = Yt(e.offsets.popper));
      var y = s[m] + s[d] / 2 - f / 2,
        k = hn(e.instance.popper),
        b = parseFloat(k['margin' + u]),
        h = parseFloat(k['border' + u + 'Width']),
        v = y - e.offsets.popper[m] - b - h;
      return (
        (v = Math.max(Math.min(l[d] - f, v), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow = ((n = {}), Bn(n, m, Math.round(v)), Bn(n, p, ''), n)),
        e
      );
    }
    function Kp(e) {
      return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
    }
    var B0 = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ],
      Li = B0.slice(3);
    function p1(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Li.indexOf(e),
        r = Li.slice(n + 1).concat(Li.slice(0, n));
      return t ? r.reverse() : r;
    }
    var Ti = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' };
    function Jp(e, t) {
      if (_0(e.instance.modifiers, 'inner') || (e.flipped && e.placement === e.originalPlacement))
        return e;
      var n = zo(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed,
        ),
        r = e.placement.split('-')[0],
        i = Zr(r),
        o = e.placement.split('-')[1] || '',
        l = [];
      switch (t.behavior) {
        case Ti.FLIP:
          l = [r, i];
          break;
        case Ti.CLOCKWISE:
          l = p1(r);
          break;
        case Ti.COUNTERCLOCKWISE:
          l = p1(r, !0);
          break;
        default:
          l = t.behavior;
      }
      return (
        l.forEach(function (s, c) {
          if (r !== s || l.length === c + 1) return e;
          (r = e.placement.split('-')[0]), (i = Zr(r));
          var d = e.offsets.popper,
            u = e.offsets.reference,
            m = Math.floor,
            p =
              (r === 'left' && m(d.right) > m(u.left)) ||
              (r === 'right' && m(d.left) < m(u.right)) ||
              (r === 'top' && m(d.bottom) > m(u.top)) ||
              (r === 'bottom' && m(d.top) < m(u.bottom)),
            g = m(d.left) < m(n.left),
            f = m(d.right) > m(n.right),
            y = m(d.top) < m(n.top),
            k = m(d.bottom) > m(n.bottom),
            b =
              (r === 'left' && g) ||
              (r === 'right' && f) ||
              (r === 'top' && y) ||
              (r === 'bottom' && k),
            h = ['top', 'bottom'].indexOf(r) !== -1,
            v =
              !!t.flipVariations &&
              ((h && o === 'start' && g) ||
                (h && o === 'end' && f) ||
                (!h && o === 'start' && y) ||
                (!h && o === 'end' && k)),
            E =
              !!t.flipVariationsByContent &&
              ((h && o === 'start' && f) ||
                (h && o === 'end' && g) ||
                (!h && o === 'start' && k) ||
                (!h && o === 'end' && y)),
            S = v || E;
          (p || b || S) &&
            ((e.flipped = !0),
            (p || b) && (r = l[c + 1]),
            S && (o = Kp(o)),
            (e.placement = r + (o ? '-' + o : '')),
            (e.offsets.popper = it(
              {},
              e.offsets.popper,
              L0(e.instance.popper, e.offsets.reference, e.placement),
            )),
            (e = T0(e.instance.modifiers, e, 'flip')));
        }),
        e
      );
    }
    function Xp(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        i = e.placement.split('-')[0],
        o = Math.floor,
        l = ['top', 'bottom'].indexOf(i) !== -1,
        s = l ? 'right' : 'bottom',
        c = l ? 'left' : 'top',
        d = l ? 'width' : 'height';
      return (
        n[s] < o(r[c]) && (e.offsets.popper[c] = o(r[c]) - n[d]),
        n[c] > o(r[s]) && (e.offsets.popper[c] = o(r[s])),
        e
      );
    }
    function e3(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        o = +i[1],
        l = i[2];
      if (!o) return e;
      if (l.indexOf('%') === 0) {
        var s = void 0;
        switch (l) {
          case '%p':
            s = n;
            break;
          case '%':
          case '%r':
          default:
            s = r;
        }
        var c = Yt(s);
        return (c[t] / 100) * o;
      } else if (l === 'vh' || l === 'vw') {
        var d = void 0;
        return (
          l === 'vh'
            ? (d = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (d = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (d / 100) * o
        );
      } else return o;
    }
    function t3(e, t, n, r) {
      var i = [0, 0],
        o = ['right', 'left'].indexOf(r) !== -1,
        l = e.split(/(\+|\-)/).map(function (u) {
          return u.trim();
        }),
        s = l.indexOf(
          Ba(l, function (u) {
            return u.search(/,|\s/) !== -1;
          }),
        );
      l[s] &&
        l[s].indexOf(',') === -1 &&
        console.warn(
          'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
        );
      var c = /\s*,\s*|\s+/,
        d =
          s !== -1
            ? [l.slice(0, s).concat([l[s].split(c)[0]]), [l[s].split(c)[1]].concat(l.slice(s + 1))]
            : [l];
      return (
        (d = d.map(function (u, m) {
          var p = (m === 1 ? !o : o) ? 'height' : 'width',
            g = !1;
          return u
            .reduce(function (f, y) {
              return f[f.length - 1] === '' && ['+', '-'].indexOf(y) !== -1
                ? ((f[f.length - 1] = y), (g = !0), f)
                : g
                  ? ((f[f.length - 1] += y), (g = !1), f)
                  : f.concat(y);
            }, [])
            .map(function (f) {
              return e3(f, p, t, n);
            });
        })),
        d.forEach(function (u, m) {
          u.forEach(function (p, g) {
            $o(p) && (i[m] += p * (u[g - 1] === '-' ? -1 : 1));
          });
        }),
        i
      );
    }
    function n3(e, t) {
      var n = t.offset,
        r = e.placement,
        i = e.offsets,
        o = i.popper,
        l = i.reference,
        s = r.split('-')[0],
        c = void 0;
      return (
        $o(+n) ? (c = [+n, 0]) : (c = t3(n, o, l, s)),
        s === 'left'
          ? ((o.top += c[0]), (o.left -= c[1]))
          : s === 'right'
            ? ((o.top += c[0]), (o.left += c[1]))
            : s === 'top'
              ? ((o.left += c[0]), (o.top -= c[1]))
              : s === 'bottom' && ((o.left += c[0]), (o.top += c[1])),
        (e.popper = o),
        e
      );
    }
    function a3(e, t) {
      var n = t.boundariesElement || In(e.instance.popper);
      e.instance.reference === n && (n = In(n));
      var r = Uo('transform'),
        i = e.instance.popper.style,
        o = i.top,
        l = i.left,
        s = i[r];
      (i.top = ''), (i.left = ''), (i[r] = '');
      var c = zo(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      (i.top = o), (i.left = l), (i[r] = s), (t.boundaries = c);
      var d = t.priority,
        u = e.offsets.popper,
        m = {
          primary: function (p) {
            var g = u[p];
            return (
              u[p] < c[p] && !t.escapeWithReference && (g = Math.max(u[p], c[p])), Bn({}, p, g)
            );
          },
          secondary: function (p) {
            var g = p === 'right' ? 'left' : 'top',
              f = u[g];
            return (
              u[p] > c[p] &&
                !t.escapeWithReference &&
                (f = Math.min(u[g], c[p] - (p === 'right' ? u.width : u.height))),
              Bn({}, g, f)
            );
          },
        };
      return (
        d.forEach(function (p) {
          var g = ['left', 'top'].indexOf(p) !== -1 ? 'primary' : 'secondary';
          u = it({}, u, m[g](p));
        }),
        (e.offsets.popper = u),
        e
      );
    }
    function r3(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = t.split('-')[1];
      if (r) {
        var i = e.offsets,
          o = i.reference,
          l = i.popper,
          s = ['bottom', 'top'].indexOf(n) !== -1,
          c = s ? 'left' : 'top',
          d = s ? 'width' : 'height',
          u = { start: Bn({}, c, o[c]), end: Bn({}, c, o[c] + o[d] - l[d]) };
        e.offsets.popper = it({}, l, u[r]);
      }
      return e;
    }
    function i3(e) {
      if (!R0(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
      var t = e.offsets.reference,
        n = Ba(e.instance.modifiers, function (r) {
          return r.name === 'preventOverflow';
        }).boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
      }
      return e;
    }
    function o3(e) {
      var t = e.placement,
        n = t.split('-')[0],
        r = e.offsets,
        i = r.popper,
        o = r.reference,
        l = ['left', 'right'].indexOf(n) !== -1,
        s = ['top', 'left'].indexOf(n) === -1;
      return (
        (i[l ? 'left' : 'top'] = o[n] - (s ? i[l ? 'width' : 'height'] : 0)),
        (e.placement = Zr(t)),
        (e.offsets.popper = Yt(i)),
        e
      );
    }
    var l3 = {
        shift: { order: 100, enabled: !0, fn: r3 },
        offset: { order: 200, enabled: !0, fn: n3, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: a3,
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: { order: 400, enabled: !0, fn: Xp },
        arrow: { order: 500, enabled: !0, fn: Qp, element: '[x-arrow]' },
        flip: {
          order: 600,
          enabled: !0,
          fn: Jp,
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: o3 },
        hide: { order: 800, enabled: !0, fn: i3 },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: Yp,
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: { order: 900, enabled: !0, fn: $p, onLoad: Wp, gpuAcceleration: void 0 },
      },
      s3 = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: l3,
      },
      Jr = (function () {
        function e(t, n) {
          var r = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          _p(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = Op(this.update.bind(this))),
            (this.options = it({}, e.Defaults, i)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(it({}, e.Defaults.modifiers, i.modifiers)).forEach(function (l) {
              r.options.modifiers[l] = it(
                {},
                e.Defaults.modifiers[l] || {},
                i.modifiers ? i.modifiers[l] : {},
              );
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (l) {
                return it({ name: l }, r.options.modifiers[l]);
              })
              .sort(function (l, s) {
                return l.order - s.order;
              })),
            this.modifiers.forEach(function (l) {
              l.enabled && C0(l.onLoad) && l.onLoad(r.reference, r.popper, r.options, l, r.state);
            }),
            this.update();
          var o = this.options.eventsEnabled;
          o && this.enableEventListeners(), (this.state.eventsEnabled = o);
        }
        return (
          Zp(e, [
            {
              key: 'update',
              value: function () {
                return Pp.call(this);
              },
            },
            {
              key: 'destroy',
              value: function () {
                return Vp.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return Hp.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return zp.call(this);
              },
            },
          ]),
          e
        );
      })();
    Jr.Utils = window.PopperUtils;
    Jr.placements = B0;
    Jr.Defaults = s3;
    var h1 = Jr,
      fo = ht(Eo()),
      c3 = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue'],
      d3 = [
        'Array',
        'ArrayBuffer',
        'AsyncFunction',
        'AsyncGenerator',
        'AsyncGeneratorFunction',
        'Date',
        'Error',
        'Function',
        'Generator',
        'GeneratorFunction',
        'HTMLElement',
        'Map',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'WeakMap',
        'WeakSet',
      ],
      u3 = ['bigint', 'boolean', 'null', 'number', 'string', 'symbol', 'undefined'];
    function Xr(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return 'HTMLElement';
      if (m3(t)) return t;
    }
    function yt(e) {
      return function (t) {
        return Xr(t) === e;
      };
    }
    function m3(e) {
      return d3.includes(e);
    }
    function Hn(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function p3(e) {
      return u3.includes(e);
    }
    function _(e) {
      if (e === null) return 'null';
      switch (typeof e) {
        case 'bigint':
          return 'bigint';
        case 'boolean':
          return 'boolean';
        case 'number':
          return 'number';
        case 'string':
          return 'string';
        case 'symbol':
          return 'symbol';
        case 'undefined':
          return 'undefined';
      }
      if (_.array(e)) return 'Array';
      if (_.plainFunction(e)) return 'Function';
      var t = Xr(e);
      return t || 'Object';
    }
    _.array = Array.isArray;
    _.arrayOf = function (e, t) {
      return !_.array(e) && !_.function(t)
        ? !1
        : e.every(function (n) {
            return t(n);
          });
    };
    _.asyncGeneratorFunction = function (e) {
      return Xr(e) === 'AsyncGeneratorFunction';
    };
    _.asyncFunction = yt('AsyncFunction');
    _.bigint = Hn('bigint');
    _.boolean = function (e) {
      return e === !0 || e === !1;
    };
    _.date = yt('Date');
    _.defined = function (e) {
      return !_.undefined(e);
    };
    _.domElement = function (e) {
      return (
        _.object(e) &&
        !_.plainObject(e) &&
        e.nodeType === 1 &&
        _.string(e.nodeName) &&
        c3.every(function (t) {
          return t in e;
        })
      );
    };
    _.empty = function (e) {
      return (
        (_.string(e) && e.length === 0) ||
        (_.array(e) && e.length === 0) ||
        (_.object(e) && !_.map(e) && !_.set(e) && Object.keys(e).length === 0) ||
        (_.set(e) && e.size === 0) ||
        (_.map(e) && e.size === 0)
      );
    };
    _.error = yt('Error');
    _.function = Hn('function');
    _.generator = function (e) {
      return _.iterable(e) && _.function(e.next) && _.function(e.throw);
    };
    _.generatorFunction = yt('GeneratorFunction');
    _.instanceOf = function (e, t) {
      return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
    };
    _.iterable = function (e) {
      return !_.nullOrUndefined(e) && _.function(e[Symbol.iterator]);
    };
    _.map = yt('Map');
    _.nan = function (e) {
      return Number.isNaN(e);
    };
    _.null = function (e) {
      return e === null;
    };
    _.nullOrUndefined = function (e) {
      return _.null(e) || _.undefined(e);
    };
    _.number = function (e) {
      return Hn('number')(e) && !_.nan(e);
    };
    _.numericString = function (e) {
      return _.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    };
    _.object = function (e) {
      return !_.nullOrUndefined(e) && (_.function(e) || typeof e == 'object');
    };
    _.oneOf = function (e, t) {
      return _.array(e) ? e.indexOf(t) > -1 : !1;
    };
    _.plainFunction = yt('Function');
    _.plainObject = function (e) {
      if (Xr(e) !== 'Object') return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    _.primitive = function (e) {
      return _.null(e) || p3(typeof e);
    };
    _.promise = yt('Promise');
    _.propertyOf = function (e, t, n) {
      if (!_.object(e) || !t) return !1;
      var r = e[t];
      return _.function(n) ? n(r) : _.defined(r);
    };
    _.regexp = yt('RegExp');
    _.set = yt('Set');
    _.string = Hn('string');
    _.symbol = Hn('symbol');
    _.undefined = Hn('undefined');
    _.weakMap = yt('WeakMap');
    _.weakSet = yt('WeakSet');
    var V = _;
    function P0(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    var h3 = P0('function'),
      f3 = function (e) {
        return e === null;
      },
      f1 = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1) === 'RegExp';
      },
      g1 = function (e) {
        return !g3(e) && !f3(e) && (h3(e) || typeof e == 'object');
      },
      g3 = P0('undefined'),
      go = function (e) {
        var t = typeof Symbol == 'function' && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == 'number')
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      };
    function v3(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!Qe(e[r], t[r])) return !1;
      return !0;
    }
    function y3(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = new DataView(e.buffer), r = new DataView(t.buffer), i = e.byteLength; i--; )
        if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function b3(e, t) {
      var n, r, i, o;
      if (e.size !== t.size) return !1;
      try {
        for (var l = go(e.entries()), s = l.next(); !s.done; s = l.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          s && !s.done && (r = l.return) && r.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var d = go(e.entries()), u = d.next(); !u.done; u = d.next()) {
          var c = u.value;
          if (!Qe(c[1], t.get(c[0]))) return !1;
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          u && !u.done && (o = d.return) && o.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      return !0;
    }
    function E3(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var i = go(e.entries()), o = i.next(); !o.done; o = i.next()) {
          var l = o.value;
          if (!t.has(l[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function Qe(e, t) {
      if (e === t) return !0;
      if (e && g1(e) && t && g1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return v3(e, t);
        if (e instanceof Map && t instanceof Map) return b3(e, t);
        if (e instanceof Set && t instanceof Set) return E3(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return y3(e, t);
        if (f1(e) && f1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (var i = n.length; i-- !== 0; ) {
          var o = n[i];
          if (!(o === '_owner' && e.$$typeof) && !Qe(e[o], t[o])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function k3() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (n) {
        return V.string(n) || V.array(n) || V.plainObject(n);
      });
    }
    function w3(e, t, n) {
      return V0(e, t)
        ? [e, t].every(V.array)
          ? !e.some(k1(n)) && t.some(k1(n))
          : [e, t].every(V.plainObject)
            ? !Object.entries(e).some(E1(n)) && Object.entries(t).some(E1(n))
            : t === n
        : !1;
    }
    function v1(e, t, n) {
      var r = n.actual,
        i = n.key,
        o = n.previous,
        l = n.type,
        s = xt(e, i),
        c = xt(t, i),
        d = [s, c].every(V.number) && (l === 'increased' ? s < c : s > c);
      return V.undefined(r) || (d = d && c === r), V.undefined(o) || (d = d && s === o), d;
    }
    function y1(e, t, n) {
      var r = n.key,
        i = n.type,
        o = n.value,
        l = xt(e, r),
        s = xt(t, r),
        c = i === 'added' ? l : s,
        d = i === 'added' ? s : l;
      if (!V.nullOrUndefined(o)) {
        if (V.defined(c)) {
          if (V.array(c) || V.plainObject(c)) return w3(c, d, o);
        } else return Qe(d, o);
        return !1;
      }
      return [l, s].every(V.array)
        ? !d.every(Wo(c))
        : [l, s].every(V.plainObject)
          ? C3(Object.keys(c), Object.keys(d))
          : ![l, s].every(function (u) {
              return V.primitive(u) && V.defined(u);
            }) && (i === 'added' ? !V.defined(l) && V.defined(s) : V.defined(l) && !V.defined(s));
    }
    function b1(e, t, n) {
      var r = n === void 0 ? {} : n,
        i = r.key,
        o = xt(e, i),
        l = xt(t, i);
      if (!V0(o, l)) throw new TypeError('Inputs have different types');
      if (!k3(o, l)) throw new TypeError("Inputs don't have length");
      return [o, l].every(V.plainObject) && ((o = Object.keys(o)), (l = Object.keys(l))), [o, l];
    }
    function E1(e) {
      return function (t) {
        var n = t[0],
          r = t[1];
        return V.array(e)
          ? Qe(e, r) ||
              e.some(function (i) {
                return Qe(i, r) || (V.array(r) && Wo(r)(i));
              })
          : V.plainObject(e) && e[n]
            ? !!e[n] && Qe(e[n], r)
            : Qe(e, r);
      };
    }
    function C3(e, t) {
      return t.some(function (n) {
        return !e.includes(n);
      });
    }
    function k1(e) {
      return function (t) {
        return V.array(e)
          ? e.some(function (n) {
              return Qe(n, t) || (V.array(t) && Wo(t)(n));
            })
          : Qe(e, t);
      };
    }
    function na(e, t) {
      return V.array(e)
        ? e.some(function (n) {
            return Qe(n, t);
          })
        : Qe(e, t);
    }
    function Wo(e) {
      return function (t) {
        return e.some(function (n) {
          return Qe(n, t);
        });
      };
    }
    function V0() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(V.array) || e.every(V.number) || e.every(V.plainObject) || e.every(V.string);
    }
    function xt(e, t) {
      if (V.plainObject(e) || V.array(e)) {
        if (V.string(t)) {
          var n = t.split('.');
          return n.reduce(function (r, i) {
            return r && r[i];
          }, e);
        }
        return V.number(t) ? e[t] : e;
      }
      return e;
    }
    function S3(e, t) {
      if ([e, t].some(V.nullOrUndefined)) throw new Error('Missing required parameters');
      if (
        ![e, t].every(function (m) {
          return V.plainObject(m) || V.array(m);
        })
      )
        throw new Error('Expected plain objects or array');
      var n = function (m, p) {
          try {
            return y1(e, t, { key: m, type: 'added', value: p });
          } catch {
            return !1;
          }
        },
        r = function (m, p, g) {
          try {
            var f = xt(e, m),
              y = xt(t, m),
              k = V.defined(p),
              b = V.defined(g);
            if (k || b) {
              var h = b ? na(g, f) : !na(p, f),
                v = na(p, y);
              return h && v;
            }
            return [f, y].every(V.array) || [f, y].every(V.plainObject) ? !Qe(f, y) : f !== y;
          } catch {
            return !1;
          }
        },
        i = function (m, p, g) {
          if (!V.defined(m)) return !1;
          try {
            var f = xt(e, m),
              y = xt(t, m),
              k = V.defined(g);
            return na(p, f) && (k ? na(g, y) : !k);
          } catch {
            return !1;
          }
        },
        o = function (m, p) {
          return V.defined(m) ? r(m, p) : !1;
        },
        l = function (m, p, g) {
          if (!V.defined(m)) return !1;
          try {
            return v1(e, t, { key: m, actual: p, previous: g, type: 'decreased' });
          } catch {
            return !1;
          }
        },
        s = function (m) {
          try {
            var p = b1(e, t, { key: m }),
              g = p[0],
              f = p[1];
            return !!g.length && !f.length;
          } catch {
            return !1;
          }
        },
        c = function (m) {
          try {
            var p = b1(e, t, { key: m }),
              g = p[0],
              f = p[1];
            return !g.length && !!f.length;
          } catch {
            return !1;
          }
        },
        d = function (m, p, g) {
          if (!V.defined(m)) return !1;
          try {
            return v1(e, t, { key: m, actual: p, previous: g, type: 'increased' });
          } catch {
            return !1;
          }
        },
        u = function (m, p) {
          try {
            return y1(e, t, { key: m, type: 'removed', value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: i,
        changedTo: o,
        decreased: l,
        emptied: s,
        filled: c,
        increased: d,
        removed: u,
      };
    }
    function w1(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Me(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? w1(Object(n), !0).forEach(function (r) {
              He(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w1(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
      }
      return e;
    }
    function Pa(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function C1(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, H0(r.key), r);
      }
    }
    function Va(e, t, n) {
      return (
        t && C1(e.prototype, t),
        n && C1(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function He(e, t, n) {
      return (
        (t = H0(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ja(e, t) {
      if (typeof t != 'function' && t !== null)
        throw new TypeError('Super expression must either be null or a function');
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && vo(e, t);
    }
    function Ir(e) {
      return (
        (Ir = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Ir(e)
      );
    }
    function vo(e, t) {
      return (
        (vo = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        vo(e, t)
      );
    }
    function x3() {
      if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == 'function') return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch {
        return !1;
      }
    }
    function M3(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        i,
        o;
      for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
      return n;
    }
    function j0(e, t) {
      if (e == null) return {};
      var n = M3(e, t),
        r,
        i;
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
          (r = o[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function _t(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function N3(e, t) {
      if (t && (typeof t == 'object' || typeof t == 'function')) return t;
      if (t !== void 0)
        throw new TypeError('Derived constructors may only return object or undefined');
      return _t(e);
    }
    function Ha(e) {
      var t = x3();
      return function () {
        var n = Ir(e),
          r;
        if (t) {
          var i = Ir(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return N3(this, r);
      };
    }
    function F3(e, t) {
      if (typeof e != 'object' || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || 'default');
        if (typeof r != 'object') return r;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return (t === 'string' ? String : Number)(e);
    }
    function H0(e) {
      var t = F3(e, 'string');
      return typeof t == 'symbol' ? t : String(t);
    }
    var A3 = { flip: { padding: 20 }, preventOverflow: { padding: 10 } },
      O3 =
        'The typeValidator argument must be a function with the signature function(props, propName, componentName).',
      L3 = 'The error message is optional, but must be a string if provided.';
    function T3(e, t, n, r) {
      return typeof e == 'boolean' ? e : typeof e == 'function' ? e(t, n, r) : e ? !!e : !1;
    }
    function _3(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function Z3(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            'Required '.concat(e[t], ' `').concat(t, '` was not specified in `').concat(n, '`.'),
          );
    }
    function I3(e, t) {
      if (typeof e != 'function') throw new TypeError(O3);
      if (t && typeof t != 'string') throw new TypeError(L3);
    }
    function S1(e, t, n) {
      return (
        I3(e, n),
        function (r, i, o) {
          for (var l = arguments.length, s = new Array(l > 3 ? l - 3 : 0), c = 3; c < l; c++)
            s[c - 3] = arguments[c];
          return T3(t, r, i, o)
            ? _3(r, i)
              ? e.apply(void 0, [r, i, o].concat(s))
              : Z3(r, i, o, n)
            : e.apply(void 0, [r, i, o].concat(s));
        }
      );
    }
    var le = {
        INIT: 'init',
        IDLE: 'idle',
        OPENING: 'opening',
        OPEN: 'open',
        CLOSING: 'closing',
        ERROR: 'error',
      },
      aa = Qn.createPortal !== void 0;
    function Et() {
      return !!(typeof window < 'u' && window.document && window.document.createElement);
    }
    function _i() {
      return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
    }
    function tr(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        i = r === void 0 ? !1 : r,
        o = e.debug,
        l = o === void 0 ? !1 : o,
        s = i ? console.warn || console.error : console.log;
      l &&
        t &&
        n &&
        (console.groupCollapsed(
          '%creact-floater: '.concat(t),
          'color: #9b00ff; font-weight: bold; font-size: 12px;',
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              V.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function R3(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function B3(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function P3(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        i;
      (i = function (o) {
        n(o), B3(e, t, i);
      }),
        R3(e, t, i, r);
    }
    function x1() {}
    var D0 = (function (e) {
      ja(n, e);
      var t = Ha(n);
      function n() {
        return Pa(this, n), t.apply(this, arguments);
      }
      return (
        Va(n, [
          {
            key: 'componentDidMount',
            value: function () {
              Et() && (this.node || this.appendNode(), aa || this.renderPortal());
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              Et() && (aa || this.renderPortal());
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              !Et() ||
                !this.node ||
                (aa || Qn.unmountComponentAtNode(this.node),
                this.node &&
                  this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = void 0)));
            },
          },
          {
            key: 'appendNode',
            value: function () {
              var r = this.props,
                i = r.id,
                o = r.zIndex;
              this.node ||
                ((this.node = document.createElement('div')),
                i && (this.node.id = i),
                o && (this.node.style.zIndex = o),
                document.body.appendChild(this.node));
            },
          },
          {
            key: 'renderPortal',
            value: function () {
              if (!Et()) return null;
              var r = this.props,
                i = r.children,
                o = r.setRef;
              if ((this.node || this.appendNode(), aa)) return Qn.createPortal(i, this.node);
              var l = Qn.unstable_renderSubtreeIntoContainer(
                this,
                i.length > 1 ? a.createElement('div', null, i) : i[0],
                this.node,
              );
              return o(l), null;
            },
          },
          {
            key: 'renderReact16',
            value: function () {
              var r = this.props,
                i = r.hasChildren,
                o = r.placement,
                l = r.target;
              return i ? this.renderPortal() : l || o === 'center' ? this.renderPortal() : null;
            },
          },
          {
            key: 'render',
            value: function () {
              return aa ? this.renderReact16() : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    He(D0, 'propTypes', {
      children: O.default.oneOfType([O.default.element, O.default.array]),
      hasChildren: O.default.bool,
      id: O.default.oneOfType([O.default.string, O.default.number]),
      placement: O.default.string,
      setRef: O.default.func.isRequired,
      target: O.default.oneOfType([O.default.object, O.default.string]),
      zIndex: O.default.number,
    });
    var z0 = (function (e) {
      ja(n, e);
      var t = Ha(n);
      function n() {
        return Pa(this, n), t.apply(this, arguments);
      }
      return (
        Va(n, [
          {
            key: 'parentStyle',
            get: function () {
              var r = this.props,
                i = r.placement,
                o = r.styles,
                l = o.arrow.length,
                s = { pointerEvents: 'none', position: 'absolute', width: '100%' };
              return (
                i.startsWith('top')
                  ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = l))
                  : i.startsWith('bottom')
                    ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = l))
                    : i.startsWith('left')
                      ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                      : i.startsWith('right') && ((s.left = 0), (s.top = 0)),
                s
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.placement,
                o = r.setArrowRef,
                l = r.styles,
                s = l.arrow,
                c = s.color,
                d = s.display,
                u = s.length,
                m = s.margin,
                p = s.position,
                g = s.spread,
                f = { display: d, position: p },
                y,
                k = g,
                b = u;
              return (
                i.startsWith('top')
                  ? ((y = '0,0 '
                      .concat(k / 2, ',')
                      .concat(b, ' ')
                      .concat(k, ',0')),
                    (f.bottom = 0),
                    (f.marginLeft = m),
                    (f.marginRight = m))
                  : i.startsWith('bottom')
                    ? ((y = ''
                        .concat(k, ',')
                        .concat(b, ' ')
                        .concat(k / 2, ',0 0,')
                        .concat(b)),
                      (f.top = 0),
                      (f.marginLeft = m),
                      (f.marginRight = m))
                    : i.startsWith('left')
                      ? ((b = g),
                        (k = u),
                        (y = '0,0 '
                          .concat(k, ',')
                          .concat(b / 2, ' 0,')
                          .concat(b)),
                        (f.right = 0),
                        (f.marginTop = m),
                        (f.marginBottom = m))
                      : i.startsWith('right') &&
                        ((b = g),
                        (k = u),
                        (y = ''
                          .concat(k, ',')
                          .concat(b, ' ')
                          .concat(k, ',0 0,')
                          .concat(b / 2)),
                        (f.left = 0),
                        (f.marginTop = m),
                        (f.marginBottom = m)),
                a.createElement(
                  'div',
                  { className: '__floater__arrow', style: this.parentStyle },
                  a.createElement(
                    'span',
                    { ref: o, style: f },
                    a.createElement(
                      'svg',
                      { width: k, height: b, version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
                      a.createElement('polygon', { points: y, fill: c }),
                    ),
                  ),
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    He(z0, 'propTypes', {
      placement: O.default.string.isRequired,
      setArrowRef: O.default.func.isRequired,
      styles: O.default.object.isRequired,
    });
    var V3 = ['color', 'height', 'width'];
    function U0(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        i = n.height,
        o = n.width,
        l = j0(n, V3);
      return a.createElement(
        'button',
        { 'aria-label': 'close', onClick: t, style: l, type: 'button' },
        a.createElement(
          'svg',
          {
            width: ''.concat(o, 'px'),
            height: ''.concat(i, 'px'),
            viewBox: '0 0 18 18',
            version: '1.1',
            xmlns: 'http://www.w3.org/2000/svg',
            preserveAspectRatio: 'xMidYMid',
          },
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: r,
            }),
          ),
        ),
      );
    }
    U0.propTypes = { handleClick: O.default.func.isRequired, styles: O.default.object.isRequired };
    function $0(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        i = e.open,
        o = e.positionWrapper,
        l = e.showCloseButton,
        s = e.title,
        c = e.styles,
        d = {
          content: a.isValidElement(t)
            ? t
            : a.createElement('div', { className: '__floater__content', style: c.content }, t),
        };
      return (
        s &&
          (d.title = a.isValidElement(s)
            ? s
            : a.createElement('div', { className: '__floater__title', style: c.title }, s)),
        n &&
          (d.footer = a.isValidElement(n)
            ? n
            : a.createElement('div', { className: '__floater__footer', style: c.footer }, n)),
        (l || o) &&
          !V.boolean(i) &&
          (d.close = a.createElement(U0, { styles: c.close, handleClick: r })),
        a.createElement(
          'div',
          { className: '__floater__container', style: c.container },
          d.close,
          d.title,
          d.content,
          d.footer,
        )
      );
    }
    $0.propTypes = {
      content: O.default.node.isRequired,
      footer: O.default.node,
      handleClick: O.default.func.isRequired,
      open: O.default.bool,
      positionWrapper: O.default.bool.isRequired,
      showCloseButton: O.default.bool.isRequired,
      styles: O.default.object.isRequired,
      title: O.default.node,
    };
    var W0 = (function (e) {
      ja(n, e);
      var t = Ha(n);
      function n() {
        return Pa(this, n), t.apply(this, arguments);
      }
      return (
        Va(n, [
          {
            key: 'style',
            get: function () {
              var r = this.props,
                i = r.disableAnimation,
                o = r.component,
                l = r.placement,
                s = r.hideArrow,
                c = r.status,
                d = r.styles,
                u = d.arrow.length,
                m = d.floater,
                p = d.floaterCentered,
                g = d.floaterClosing,
                f = d.floaterOpening,
                y = d.floaterWithAnimation,
                k = d.floaterWithComponent,
                b = {};
              return (
                s ||
                  (l.startsWith('top')
                    ? (b.padding = '0 0 '.concat(u, 'px'))
                    : l.startsWith('bottom')
                      ? (b.padding = ''.concat(u, 'px 0 0'))
                      : l.startsWith('left')
                        ? (b.padding = '0 '.concat(u, 'px 0 0'))
                        : l.startsWith('right') && (b.padding = '0 0 0 '.concat(u, 'px'))),
                [le.OPENING, le.OPEN].indexOf(c) !== -1 && (b = Me(Me({}, b), f)),
                c === le.CLOSING && (b = Me(Me({}, b), g)),
                c === le.OPEN && !i && (b = Me(Me({}, b), y)),
                l === 'center' && (b = Me(Me({}, b), p)),
                o && (b = Me(Me({}, b), k)),
                Me(Me({}, m), b)
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.component,
                o = r.handleClick,
                l = r.hideArrow,
                s = r.setFloaterRef,
                c = r.status,
                d = {},
                u = ['__floater'];
              return (
                i
                  ? a.isValidElement(i)
                    ? (d.content = a.cloneElement(i, { closeFn: o }))
                    : (d.content = i({ closeFn: o }))
                  : (d.content = a.createElement($0, this.props)),
                c === le.OPEN && u.push('__floater__open'),
                l || (d.arrow = a.createElement(z0, this.props)),
                a.createElement(
                  'div',
                  { ref: s, className: u.join(' '), style: this.style },
                  a.createElement('div', { className: '__floater__body' }, d.content, d.arrow),
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    He(W0, 'propTypes', {
      component: O.default.oneOfType([O.default.func, O.default.element]),
      content: O.default.node,
      disableAnimation: O.default.bool.isRequired,
      footer: O.default.node,
      handleClick: O.default.func.isRequired,
      hideArrow: O.default.bool.isRequired,
      open: O.default.bool,
      placement: O.default.string.isRequired,
      positionWrapper: O.default.bool.isRequired,
      setArrowRef: O.default.func.isRequired,
      setFloaterRef: O.default.func.isRequired,
      showCloseButton: O.default.bool,
      status: O.default.string.isRequired,
      styles: O.default.object.isRequired,
      title: O.default.node,
    });
    var G0 = (function (e) {
      ja(n, e);
      var t = Ha(n);
      function n() {
        return Pa(this, n), t.apply(this, arguments);
      }
      return (
        Va(n, [
          {
            key: 'render',
            value: function () {
              var r = this.props,
                i = r.children,
                o = r.handleClick,
                l = r.handleMouseEnter,
                s = r.handleMouseLeave,
                c = r.setChildRef,
                d = r.setWrapperRef,
                u = r.style,
                m = r.styles,
                p;
              if (i)
                if (a.Children.count(i) === 1)
                  if (!a.isValidElement(i)) p = a.createElement('span', null, i);
                  else {
                    var g = V.function(i.type) ? 'innerRef' : 'ref';
                    p = a.cloneElement(a.Children.only(i), He({}, g, c));
                  }
                else p = i;
              return p
                ? a.createElement(
                    'span',
                    {
                      ref: d,
                      style: Me(Me({}, m), u),
                      onClick: o,
                      onMouseEnter: l,
                      onMouseLeave: s,
                    },
                    p,
                  )
                : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    He(G0, 'propTypes', {
      children: O.default.node,
      handleClick: O.default.func.isRequired,
      handleMouseEnter: O.default.func.isRequired,
      handleMouseLeave: O.default.func.isRequired,
      setChildRef: O.default.func.isRequired,
      setWrapperRef: O.default.func.isRequired,
      style: O.default.object,
      styles: O.default.object.isRequired,
    });
    var j3 = { zIndex: 100 };
    function H3(e) {
      var t = (0, fo.default)(j3, e.options || {});
      return {
        wrapper: {
          cursor: 'help',
          display: 'inline-flex',
          flexDirection: 'column',
          zIndex: t.zIndex,
        },
        wrapperPosition: { left: -1e3, position: 'absolute', top: -1e3, visibility: 'hidden' },
        floater: {
          display: 'inline-block',
          filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
          maxWidth: 300,
          opacity: 0,
          position: 'relative',
          transition: 'opacity 0.3s',
          visibility: 'hidden',
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: 'visible' },
        floaterWithAnimation: {
          opacity: 1,
          transition: 'opacity 0.3s, transform 0.2s',
          visibility: 'visible',
        },
        floaterWithComponent: { maxWidth: '100%' },
        floaterClosing: { opacity: 0, visibility: 'visible' },
        floaterCentered: {
          left: '50%',
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        },
        container: {
          backgroundColor: '#fff',
          color: '#666',
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: 'relative',
          zIndex: 10,
        },
        title: {
          borderBottom: '1px solid #555',
          color: '#555',
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: 0,
          color: '#555',
          fontSize: 0,
          height: 15,
          outline: 'none',
          padding: 10,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: 'none',
        },
        footer: { borderTop: '1px solid #ccc', fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: {
          color: '#fff',
          display: 'inline-flex',
          length: 16,
          margin: 8,
          position: 'absolute',
          spread: 32,
        },
        options: t,
      };
    }
    var D3 = ['arrow', 'flip', 'offset'],
      z3 = ['position', 'top', 'right', 'bottom', 'left'],
      Go = (function (e) {
        ja(n, e);
        var t = Ha(n);
        function n(r) {
          var i;
          return (
            Pa(this, n),
            (i = t.call(this, r)),
            He(_t(i), 'setArrowRef', function (o) {
              i.arrowRef = o;
            }),
            He(_t(i), 'setChildRef', function (o) {
              i.childRef = o;
            }),
            He(_t(i), 'setFloaterRef', function (o) {
              i.floaterRef = o;
            }),
            He(_t(i), 'setWrapperRef', function (o) {
              i.wrapperRef = o;
            }),
            He(_t(i), 'handleTransitionEnd', function () {
              var o = i.state.status,
                l = i.props.callback;
              i.wrapperPopper && i.wrapperPopper.instance.update(),
                i.setState({ status: o === le.OPENING ? le.OPEN : le.IDLE }, function () {
                  var s = i.state.status;
                  l(s === le.OPEN ? 'open' : 'close', i.props);
                });
            }),
            He(_t(i), 'handleClick', function () {
              var o = i.props,
                l = o.event,
                s = o.open;
              if (!V.boolean(s)) {
                var c = i.state,
                  d = c.positionWrapper,
                  u = c.status;
                (i.event === 'click' || (i.event === 'hover' && d)) &&
                  (tr({
                    title: 'click',
                    data: [{ event: l, status: u === le.OPEN ? 'closing' : 'opening' }],
                    debug: i.debug,
                  }),
                  i.toggle());
              }
            }),
            He(_t(i), 'handleMouseEnter', function () {
              var o = i.props,
                l = o.event,
                s = o.open;
              if (!(V.boolean(s) || _i())) {
                var c = i.state.status;
                i.event === 'hover' &&
                  c === le.IDLE &&
                  (tr({
                    title: 'mouseEnter',
                    data: [{ key: 'originalEvent', value: l }],
                    debug: i.debug,
                  }),
                  clearTimeout(i.eventDelayTimeout),
                  i.toggle());
              }
            }),
            He(_t(i), 'handleMouseLeave', function () {
              var o = i.props,
                l = o.event,
                s = o.eventDelay,
                c = o.open;
              if (!(V.boolean(c) || _i())) {
                var d = i.state,
                  u = d.status,
                  m = d.positionWrapper;
                i.event === 'hover' &&
                  (tr({
                    title: 'mouseLeave',
                    data: [{ key: 'originalEvent', value: l }],
                    debug: i.debug,
                  }),
                  s
                    ? [le.OPENING, le.OPEN].indexOf(u) !== -1 &&
                      !m &&
                      !i.eventDelayTimeout &&
                      (i.eventDelayTimeout = setTimeout(function () {
                        delete i.eventDelayTimeout, i.toggle();
                      }, s * 1e3))
                    : i.toggle(le.IDLE));
              }
            }),
            (i.state = {
              currentPlacement: r.placement,
              needsUpdate: !1,
              positionWrapper: r.wrapperOptions.position && !!r.target,
              status: le.INIT,
              statusWrapper: le.INIT,
            }),
            (i._isMounted = !1),
            (i.hasMounted = !1),
            Et() &&
              window.addEventListener('load', function () {
                i.popper && i.popper.instance.update(),
                  i.wrapperPopper && i.wrapperPopper.instance.update();
              }),
            i
          );
        }
        return (
          Va(n, [
            {
              key: 'componentDidMount',
              value: function () {
                if (Et()) {
                  var r = this.state.positionWrapper,
                    i = this.props,
                    o = i.children,
                    l = i.open,
                    s = i.target;
                  (this._isMounted = !0),
                    tr({
                      title: 'init',
                      data: {
                        hasChildren: !!o,
                        hasTarget: !!s,
                        isControlled: V.boolean(l),
                        positionWrapper: r,
                        target: this.target,
                        floater: this.floaterRef,
                      },
                      debug: this.debug,
                    }),
                    this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                    !o && s && V.boolean(l);
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (r, i) {
                if (Et()) {
                  var o = this.props,
                    l = o.autoOpen,
                    s = o.open,
                    c = o.target,
                    d = o.wrapperOptions,
                    u = S3(i, this.state),
                    m = u.changedFrom,
                    p = u.changed;
                  if (r.open !== s) {
                    var g;
                    V.boolean(s) && (g = s ? le.OPENING : le.CLOSING), this.toggle(g);
                  }
                  (r.wrapperOptions.position !== d.position || r.target !== c) &&
                    this.changeWrapperPosition(this.props),
                    p('status', le.IDLE) && s
                      ? this.toggle(le.OPEN)
                      : m('status', le.INIT, le.IDLE) && l && this.toggle(le.OPEN),
                    this.popper && p('status', le.OPENING) && this.popper.instance.update(),
                    this.floaterRef &&
                      (p('status', le.OPENING) || p('status', le.CLOSING)) &&
                      P3(this.floaterRef, 'transitionend', this.handleTransitionEnd),
                    p('needsUpdate', !0) && this.rebuildPopper();
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                Et() &&
                  ((this._isMounted = !1),
                  this.popper && this.popper.instance.destroy(),
                  this.wrapperPopper && this.wrapperPopper.instance.destroy());
              },
            },
            {
              key: 'initPopper',
              value: function () {
                var r = this,
                  i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target,
                  o = this.state.positionWrapper,
                  l = this.props,
                  s = l.disableFlip,
                  c = l.getPopper,
                  d = l.hideArrow,
                  u = l.offset,
                  m = l.placement,
                  p = l.wrapperOptions,
                  g =
                    m === 'top' || m === 'bottom'
                      ? 'flip'
                      : ['right', 'bottom-end', 'top-end', 'left', 'top-start', 'bottom-start'];
                if (m === 'center') this.setState({ status: le.IDLE });
                else if (i && this.floaterRef) {
                  var f = this.options,
                    y = f.arrow,
                    k = f.flip,
                    b = f.offset,
                    h = j0(f, D3);
                  new h1(i, this.floaterRef, {
                    placement: m,
                    modifiers: Me(
                      {
                        arrow: Me({ enabled: !d, element: this.arrowRef }, y),
                        flip: Me({ enabled: !s, behavior: g }, k),
                        offset: Me({ offset: '0, '.concat(u, 'px') }, b),
                      },
                      h,
                    ),
                    onCreate: function (E) {
                      var S;
                      if (
                        ((r.popper = E),
                        !((S = r.floaterRef) !== null && S !== void 0 && S.isConnected))
                      ) {
                        r.setState({ needsUpdate: !0 });
                        return;
                      }
                      c(E, 'floater'),
                        r._isMounted &&
                          r.setState({ currentPlacement: E.placement, status: le.IDLE }),
                        m !== E.placement &&
                          setTimeout(function () {
                            E.instance.update();
                          }, 1);
                    },
                    onUpdate: function (E) {
                      r.popper = E;
                      var S = r.state.currentPlacement;
                      r._isMounted &&
                        E.placement !== S &&
                        r.setState({ currentPlacement: E.placement });
                    },
                  });
                }
                if (o) {
                  var v = V.undefined(p.offset) ? 0 : p.offset;
                  new h1(this.target, this.wrapperRef, {
                    placement: p.placement || m,
                    modifiers: {
                      arrow: { enabled: !1 },
                      offset: { offset: '0, '.concat(v, 'px') },
                      flip: { enabled: !1 },
                    },
                    onCreate: function (E) {
                      (r.wrapperPopper = E),
                        r._isMounted && r.setState({ statusWrapper: le.IDLE }),
                        c(E, 'wrapper'),
                        m !== E.placement &&
                          setTimeout(function () {
                            E.instance.update();
                          }, 1);
                    },
                  });
                }
              },
            },
            {
              key: 'rebuildPopper',
              value: function () {
                var r = this;
                this.floaterRefInterval = setInterval(function () {
                  var i;
                  (i = r.floaterRef) !== null &&
                    i !== void 0 &&
                    i.isConnected &&
                    (clearInterval(r.floaterRefInterval),
                    r.setState({ needsUpdate: !1 }),
                    r.initPopper());
                }, 50);
              },
            },
            {
              key: 'changeWrapperPosition',
              value: function (r) {
                var i = r.target,
                  o = r.wrapperOptions;
                this.setState({ positionWrapper: o.position && !!i });
              },
            },
            {
              key: 'toggle',
              value: function (r) {
                var i = this.state.status,
                  o = i === le.OPEN ? le.CLOSING : le.OPENING;
                V.undefined(r) || (o = r), this.setState({ status: o });
              },
            },
            {
              key: 'debug',
              get: function () {
                var r = this.props.debug;
                return r || (Et() && 'ReactFloaterDebug' in window && !!window.ReactFloaterDebug);
              },
            },
            {
              key: 'event',
              get: function () {
                var r = this.props,
                  i = r.disableHoverToClick,
                  o = r.event;
                return o === 'hover' && _i() && !i ? 'click' : o;
              },
            },
            {
              key: 'options',
              get: function () {
                var r = this.props.options;
                return (0, fo.default)(A3, r || {});
              },
            },
            {
              key: 'styles',
              get: function () {
                var r = this,
                  i = this.state,
                  o = i.status,
                  l = i.positionWrapper,
                  s = i.statusWrapper,
                  c = this.props.styles,
                  d = (0, fo.default)(H3(c), c);
                if (l) {
                  var u;
                  [le.IDLE].indexOf(o) === -1 || [le.IDLE].indexOf(s) === -1
                    ? (u = d.wrapperPosition)
                    : (u = this.wrapperPopper.styles),
                    (d.wrapper = Me(Me({}, d.wrapper), u));
                }
                if (this.target) {
                  var m = window.getComputedStyle(this.target);
                  this.wrapperStyles
                    ? (d.wrapper = Me(Me({}, d.wrapper), this.wrapperStyles))
                    : ['relative', 'static'].indexOf(m.position) === -1 &&
                      ((this.wrapperStyles = {}),
                      l ||
                        (z3.forEach(function (p) {
                          r.wrapperStyles[p] = m[p];
                        }),
                        (d.wrapper = Me(Me({}, d.wrapper), this.wrapperStyles)),
                        (this.target.style.position = 'relative'),
                        (this.target.style.top = 'auto'),
                        (this.target.style.right = 'auto'),
                        (this.target.style.bottom = 'auto'),
                        (this.target.style.left = 'auto')));
                }
                return d;
              },
            },
            {
              key: 'target',
              get: function () {
                if (!Et()) return null;
                var r = this.props.target;
                return r
                  ? V.domElement(r)
                    ? r
                    : document.querySelector(r)
                  : this.childRef || this.wrapperRef;
              },
            },
            {
              key: 'render',
              value: function () {
                var r = this.state,
                  i = r.currentPlacement,
                  o = r.positionWrapper,
                  l = r.status,
                  s = this.props,
                  c = s.children,
                  d = s.component,
                  u = s.content,
                  m = s.disableAnimation,
                  p = s.footer,
                  g = s.hideArrow,
                  f = s.id,
                  y = s.open,
                  k = s.showCloseButton,
                  b = s.style,
                  h = s.target,
                  v = s.title,
                  E = a.createElement(
                    G0,
                    {
                      handleClick: this.handleClick,
                      handleMouseEnter: this.handleMouseEnter,
                      handleMouseLeave: this.handleMouseLeave,
                      setChildRef: this.setChildRef,
                      setWrapperRef: this.setWrapperRef,
                      style: b,
                      styles: this.styles.wrapper,
                    },
                    c,
                  ),
                  S = {};
                return (
                  o ? (S.wrapperInPortal = E) : (S.wrapperAsChildren = E),
                  a.createElement(
                    'span',
                    null,
                    a.createElement(
                      D0,
                      {
                        hasChildren: !!c,
                        id: f,
                        placement: i,
                        setRef: this.setFloaterRef,
                        target: h,
                        zIndex: this.styles.options.zIndex,
                      },
                      a.createElement(W0, {
                        component: d,
                        content: u,
                        disableAnimation: m,
                        footer: p,
                        handleClick: this.handleClick,
                        hideArrow: g || i === 'center',
                        open: y,
                        placement: i,
                        positionWrapper: o,
                        setArrowRef: this.setArrowRef,
                        setFloaterRef: this.setFloaterRef,
                        showCloseButton: k,
                        status: l,
                        styles: this.styles,
                        title: v,
                      }),
                      S.wrapperInPortal,
                    ),
                    S.wrapperAsChildren,
                  )
                );
              },
            },
          ]),
          n
        );
      })(a.Component);
    He(Go, 'propTypes', {
      autoOpen: O.default.bool,
      callback: O.default.func,
      children: O.default.node,
      component: S1(O.default.oneOfType([O.default.func, O.default.element]), function (e) {
        return !e.content;
      }),
      content: S1(O.default.node, function (e) {
        return !e.component;
      }),
      debug: O.default.bool,
      disableAnimation: O.default.bool,
      disableFlip: O.default.bool,
      disableHoverToClick: O.default.bool,
      event: O.default.oneOf(['hover', 'click']),
      eventDelay: O.default.number,
      footer: O.default.node,
      getPopper: O.default.func,
      hideArrow: O.default.bool,
      id: O.default.oneOfType([O.default.string, O.default.number]),
      offset: O.default.number,
      open: O.default.bool,
      options: O.default.object,
      placement: O.default.oneOf([
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'auto',
        'center',
      ]),
      showCloseButton: O.default.bool,
      style: O.default.object,
      styles: O.default.object,
      target: O.default.oneOfType([O.default.object, O.default.string]),
      title: O.default.node,
      wrapperOptions: O.default.shape({
        offset: O.default.number,
        placement: O.default.oneOf([
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
          'auto',
        ]),
        position: O.default.bool,
      }),
    });
    He(Go, 'defaultProps', {
      autoOpen: !1,
      callback: x1,
      debug: !1,
      disableAnimation: !1,
      disableFlip: !1,
      disableHoverToClick: !1,
      event: 'click',
      eventDelay: 0.4,
      getPopper: x1,
      hideArrow: !1,
      offset: 15,
      placement: 'bottom',
      showCloseButton: !1,
      styles: {},
      target: null,
      wrapperOptions: { position: !1 },
    });
    var U3 = ht(yd(), 1),
      $3 = Object.defineProperty,
      W3 = (e, t, n) =>
        t in e
          ? $3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n),
      R = (e, t, n) => (W3(e, typeof t != 'symbol' ? t + '' : t, n), n),
      me = {
        INIT: 'init',
        START: 'start',
        STOP: 'stop',
        RESET: 'reset',
        PREV: 'prev',
        NEXT: 'next',
        GO: 'go',
        CLOSE: 'close',
        SKIP: 'skip',
        UPDATE: 'update',
      },
      ut = {
        TOUR_START: 'tour:start',
        STEP_BEFORE: 'step:before',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        STEP_AFTER: 'step:after',
        TOUR_END: 'tour:end',
        TOUR_STATUS: 'tour:status',
        TARGET_NOT_FOUND: 'error:target_not_found',
        ERROR: 'error',
      },
      X = {
        INIT: 'init',
        READY: 'ready',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        COMPLETE: 'complete',
        ERROR: 'error',
      },
      ne = {
        IDLE: 'idle',
        READY: 'ready',
        WAITING: 'waiting',
        RUNNING: 'running',
        PAUSED: 'paused',
        SKIPPED: 'skipped',
        FINISHED: 'finished',
        ERROR: 'error',
      };
    function zt() {
      return !!(typeof window < 'u' && window.document && window.document.createElement);
    }
    function q0(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function G3() {
      let { body: e, documentElement: t } = document;
      return !e || !t
        ? 0
        : Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
    }
    function Gt(e) {
      return typeof e == 'string' ? document.querySelector(e) : e;
    }
    function q3(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function ei(e, t, n) {
      if (!e) return rn();
      let r = (0, w0.default)(e);
      if (r) {
        if (r.isSameNode(rn())) return n ? document : rn();
        if (!(r.scrollHeight > r.offsetHeight) && !t) return (r.style.overflow = 'initial'), rn();
      }
      return r;
    }
    function ti(e, t) {
      if (!e) return !1;
      let n = ei(e, t);
      return n ? !n.isSameNode(rn()) : !1;
    }
    function Y3(e) {
      return e.offsetParent !== document.body;
    }
    function Ta(e, t = 'fixed') {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: n } = e,
        r = q3(e);
      return n === 'BODY' || n === 'HTML'
        ? !1
        : r && r.position === t
          ? !0
          : e.parentNode
            ? Ta(e.parentNode, t)
            : !1;
    }
    function Q3(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: i } = getComputedStyle(n);
          if (r === 'none' || i === 'hidden') return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function K3(e, t, n) {
      var r;
      let i = q0(e),
        o = ei(e, n),
        l = ti(e, n),
        s = 0,
        c = (r = i?.top) != null ? r : 0;
      return (
        o instanceof HTMLElement &&
          ((s = o.scrollTop),
          !l && !Ta(e) && (c += s),
          o.isSameNode(rn()) || (c += rn().scrollTop)),
        Math.floor(c - t)
      );
    }
    function J3(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: i = 0, scrollTop: o = 0 } = (r = (0, w0.default)(e)) != null ? r : {},
        l = e.getBoundingClientRect().top + o;
      i && (ti(e, n) || Y3(e)) && (l -= i);
      let s = Math.floor(l - t);
      return s < 0 ? 0 : s;
    }
    function rn() {
      var e;
      return (e = document.scrollingElement) != null ? e : document.documentElement;
    }
    function X3(e, t) {
      let { duration: n, element: r } = t;
      return new Promise((i, o) => {
        let { scrollTop: l } = r,
          s = e > l ? e - l : l - e;
        Cp.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
          c && c.message !== 'Element already at target scroll position' ? o(c) : i(),
        );
      });
    }
    var ra = Kn !== void 0;
    function Y0(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > 'u'
          ? (t = 'node')
          : document.documentMode
            ? (t = 'ie')
            : /Edge/.test(e)
              ? (t = 'edge')
              : window.opera || e.includes(' OPR/')
                ? (t = 'opera')
                : typeof window.InstallTrigger < 'u'
                  ? (t = 'firefox')
                  : window.chrome
                    ? (t = 'chrome')
                    : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
                      (t = 'safari'),
        t
      );
    }
    function Ut(e) {
      let t = [],
        n = (r) => {
          if (typeof r == 'string' || typeof r == 'number') t.push(r);
          else if (Array.isArray(r)) r.forEach((i) => n(i));
          else if (si(r)) {
            let { children: i } = r.props;
            Array.isArray(i) ? i.forEach((o) => n(o)) : n(i);
          }
        };
      return n(e), t.join(' ').trim();
    }
    function eh(e, t) {
      return !I.plainObject(e) || !I.array(t) ? !1 : Object.keys(e).every((n) => t.includes(n));
    }
    function th(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (i, o, l, s) => o + o + l + l + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [];
    }
    function M1(e) {
      return e.disableBeacon || e.placement === 'center';
    }
    function N1() {
      return !['chrome', 'safari', 'firefox', 'opera'].includes(Y0());
    }
    function mn({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let i = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              'color: #ff0044; font-weight: bold; font-size: 12px;',
            ),
            Array.isArray(e)
              ? e.forEach((o) => {
                  I.plainObject(o) && o.key
                    ? i.apply(console, [o.key, o.value])
                    : i.apply(console, [o]);
                })
              : i.apply(console, [e]),
            console.groupEnd())
          : console.error('Missing title or data props'));
    }
    function nh(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: i,
        step: o,
        target: l,
      } = e;
      return (
        !o.disableScrolling &&
        (!t || i || n === X.TOOLTIP) &&
        o.placement !== 'center' &&
        (!o.isFixed || !Ta(l)) &&
        r !== n &&
        [X.BEACON, X.TOOLTIP].includes(n)
      );
    }
    var ah = {
        options: { preventOverflow: { boundariesElement: 'scrollParent' } },
        wrapperOptions: { offset: -18, position: !0 },
      },
      Q0 = {
        back: 'Back',
        close: 'Close',
        last: 'Last',
        next: 'Next',
        open: 'Open the dialog',
        skip: 'Skip',
      },
      rh = {
        event: 'click',
        placement: 'bottom',
        offset: 10,
        disableBeacon: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrollParentFix: !1,
        disableScrolling: !1,
        hideBackButton: !1,
        hideCloseButton: !1,
        hideFooter: !1,
        isFixed: !1,
        locale: Q0,
        showProgress: !1,
        showSkipButton: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
      },
      ih = {
        continuous: !1,
        debug: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrolling: !1,
        disableScrollParentFix: !1,
        getHelpers: void 0,
        hideBackButton: !1,
        run: !0,
        scrollOffset: 20,
        scrollDuration: 300,
        scrollToFirstStep: !1,
        showSkipButton: !1,
        showProgress: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
        steps: [],
      },
      oh = {
        arrowColor: '#fff',
        backgroundColor: '#fff',
        beaconSize: 36,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#f04',
        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        textColor: '#333',
        width: 380,
        zIndex: 100,
      },
      ia = {
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: '#555',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1,
        padding: 8,
        WebkitAppearance: 'none',
      },
      F1 = { borderRadius: 4, position: 'absolute' };
    function lh(e, t) {
      let n = (0, Oi.default)(e ?? {}, t ?? {}),
        r = (0, Oi.default)(oh, n.options || {}),
        { width: i } = r;
      window.innerWidth > 480 && (i = 380),
        'width' in r &&
          (i =
            typeof r.width == 'number' && window.innerWidth < r.width
              ? window.innerWidth - 30
              : r.width);
      let o = {
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: r.zIndex,
        },
        l = {
          beacon: {
            ...ia,
            display: 'inline-block',
            height: r.beaconSize,
            position: 'relative',
            width: r.beaconSize,
            zIndex: r.zIndex,
          },
          beaconInner: {
            animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
            backgroundColor: r.primaryColor,
            borderRadius: '50%',
            display: 'block',
            height: '50%',
            left: '50%',
            opacity: 0.7,
            position: 'absolute',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
          },
          beaconOuter: {
            animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
            backgroundColor: `rgba(${th(r.primaryColor).join(',')}, 0.2)`,
            border: `2px solid ${r.primaryColor}`,
            borderRadius: '50%',
            boxSizing: 'border-box',
            display: 'block',
            height: '100%',
            left: 0,
            opacity: 0.9,
            position: 'absolute',
            top: 0,
            transformOrigin: 'center',
            width: '100%',
          },
          tooltip: {
            backgroundColor: r.backgroundColor,
            borderRadius: 5,
            boxSizing: 'border-box',
            color: r.textColor,
            fontSize: 16,
            maxWidth: '100%',
            padding: 15,
            position: 'relative',
            width: i,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: '20px 10px' },
          tooltipFooter: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...ia, backgroundColor: r.primaryColor, borderRadius: 4, color: '#fff' },
          buttonBack: { ...ia, color: r.primaryColor, marginLeft: 'auto', marginRight: 5 },
          buttonClose: {
            ...ia,
            color: r.textColor,
            height: 14,
            padding: 15,
            position: 'absolute',
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...ia, color: r.textColor, fontSize: 14 },
          overlay: { ...o, backgroundColor: r.overlayColor, mixBlendMode: 'hard-light' },
          overlayLegacy: { ...o },
          overlayLegacyCenter: { ...o, backgroundColor: r.overlayColor },
          spotlight: { ...F1, backgroundColor: 'gray' },
          spotlightLegacy: {
            ...F1,
            boxShadow: `0 0 0 9999px ${r.overlayColor}, ${r.spotlightShadow}`,
          },
          floaterStyles: { arrow: { color: r.arrowColor }, options: { zIndex: r.zIndex + 100 } },
          options: r,
        };
      return (0, Oi.default)(l, n);
    }
    function sh(e) {
      return xp(
        e,
        'beaconComponent',
        'disableCloseOnEsc',
        'disableOverlay',
        'disableOverlayClose',
        'disableScrolling',
        'disableScrollParentFix',
        'floaterProps',
        'hideBackButton',
        'hideCloseButton',
        'locale',
        'showProgress',
        'showSkipButton',
        'spotlightClicks',
        'spotlightPadding',
        'styles',
        'tooltipComponent',
      );
    }
    function oa(e, t) {
      var n, r, i, o, l, s;
      let c = e ?? {},
        d = er.default.all([rh, sh(t), c], { isMergeableObject: I.plainObject }),
        u = lh(t.styles, d.styles),
        m = ti(Gt(d.target), d.disableScrollParentFix),
        p = er.default.all([
          ah,
          (n = t.floaterProps) != null ? n : {},
          (r = d.floaterProps) != null ? r : {},
        ]);
      return (
        (p.offset = d.offset),
        (p.styles = (0, er.default)((i = p.styles) != null ? i : {}, u.floaterStyles)),
        (p.offset +=
          (l = (o = t.spotlightPadding) != null ? o : d.spotlightPadding) != null ? l : 0),
        d.placementBeacon && p.wrapperOptions && (p.wrapperOptions.placement = d.placementBeacon),
        m && p.options.preventOverflow && (p.options.preventOverflow.boundariesElement = 'window'),
        {
          ...d,
          locale: er.default.all([Q0, (s = t.locale) != null ? s : {}, d.locale || {}]),
          floaterProps: p,
          styles: Sp(u, 'floaterStyles'),
        }
      );
    }
    function K0(e, t = !1) {
      return I.plainObject(e)
        ? e.target
          ? !0
          : (mn({
              title: 'validateStep',
              data: 'target is missing from the step',
              warn: !0,
              debug: t,
            }),
            !1)
        : (mn({ title: 'validateStep', data: 'step must be an object', warn: !0, debug: t }), !1);
    }
    function A1(e, t = !1) {
      return I.array(e)
        ? e.every((n) => K0(n, t))
        : (mn({ title: 'validateSteps', data: 'steps must be an array', warn: !0, debug: t }), !1);
    }
    var ch = {
        action: 'init',
        controlled: !1,
        index: 0,
        lifecycle: X.INIT,
        size: 0,
        status: ne.IDLE,
      },
      O1 = ['action', 'index', 'lifecycle', 'status'],
      dh = class {
        constructor(e) {
          R(this, 'beaconPopper'),
            R(this, 'tooltipPopper'),
            R(this, 'data', new Map()),
            R(this, 'listener'),
            R(this, 'store', new Map()),
            R(this, 'addListener', (i) => {
              this.listener = i;
            }),
            R(this, 'setSteps', (i) => {
              let { size: o, status: l } = this.getState(),
                s = { size: i.length, status: l };
              this.data.set('steps', i),
                l === ne.WAITING && !o && i.length && (s.status = ne.RUNNING),
                this.setState(s);
            }),
            R(this, 'getPopper', (i) => (i === 'beacon' ? this.beaconPopper : this.tooltipPopper)),
            R(this, 'setPopper', (i, o) => {
              i === 'beacon' ? (this.beaconPopper = o) : (this.tooltipPopper = o);
            }),
            R(this, 'cleanupPoppers', () => {
              (this.beaconPopper = null), (this.tooltipPopper = null);
            }),
            R(this, 'close', () => {
              let { index: i, status: o } = this.getState();
              o === ne.RUNNING &&
                this.setState({ ...this.getNextState({ action: me.CLOSE, index: i + 1 }) });
            }),
            R(this, 'go', (i) => {
              let { controlled: o, status: l } = this.getState();
              if (o || l !== ne.RUNNING) return;
              let s = this.getSteps()[i];
              this.setState({
                ...this.getNextState({ action: me.GO, index: i }),
                status: s ? l : ne.FINISHED,
              });
            }),
            R(this, 'info', () => this.getState()),
            R(this, 'next', () => {
              let { index: i, status: o } = this.getState();
              o === ne.RUNNING &&
                this.setState(this.getNextState({ action: me.NEXT, index: i + 1 }));
            }),
            R(this, 'open', () => {
              let { status: i } = this.getState();
              i === ne.RUNNING &&
                this.setState({
                  ...this.getNextState({ action: me.UPDATE, lifecycle: X.TOOLTIP }),
                });
            }),
            R(this, 'prev', () => {
              let { index: i, status: o } = this.getState();
              o === ne.RUNNING &&
                this.setState({ ...this.getNextState({ action: me.PREV, index: i - 1 }) });
            }),
            R(this, 'reset', (i = !1) => {
              let { controlled: o } = this.getState();
              o ||
                this.setState({
                  ...this.getNextState({ action: me.RESET, index: 0 }),
                  status: i ? ne.RUNNING : ne.READY,
                });
            }),
            R(this, 'skip', () => {
              let { status: i } = this.getState();
              i === ne.RUNNING &&
                this.setState({ action: me.SKIP, lifecycle: X.INIT, status: ne.SKIPPED });
            }),
            R(this, 'start', (i) => {
              let { index: o, size: l } = this.getState();
              this.setState({
                ...this.getNextState({ action: me.START, index: I.number(i) ? i : o }, !0),
                status: l ? ne.RUNNING : ne.WAITING,
              });
            }),
            R(this, 'stop', (i = !1) => {
              let { index: o, status: l } = this.getState();
              [ne.FINISHED, ne.SKIPPED].includes(l) ||
                this.setState({
                  ...this.getNextState({ action: me.STOP, index: o + (i ? 1 : 0) }),
                  status: ne.PAUSED,
                });
            }),
            R(this, 'update', (i) => {
              var o;
              if (!eh(i, O1)) throw new Error(`State is not valid. Valid keys: ${O1.join(', ')}`);
              this.setState({
                ...this.getNextState(
                  { ...this.getState(), ...i, action: (o = i.action) != null ? o : me.UPDATE },
                  !0,
                ),
              });
            });
          let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
          this.setState(
            {
              action: me.INIT,
              controlled: I.number(n),
              continuous: t,
              index: I.number(n) ? n : 0,
              lifecycle: X.INIT,
              status: r.length ? ne.READY : ne.IDLE,
            },
            !0,
          ),
            (this.beaconPopper = null),
            (this.tooltipPopper = null),
            (this.listener = null),
            this.setSteps(r);
        }
        getState() {
          return this.store.size
            ? {
                action: this.store.get('action') || '',
                controlled: this.store.get('controlled') || !1,
                index: parseInt(this.store.get('index'), 10),
                lifecycle: this.store.get('lifecycle') || '',
                size: this.store.get('size') || 0,
                status: this.store.get('status') || '',
              }
            : { ...ch };
        }
        getNextState(e, t = !1) {
          var n, r, i, o;
          let { action: l, controlled: s, index: c, size: d, status: u } = this.getState(),
            m = I.number(e.index) ? e.index : c,
            p = s && !t ? c : Math.min(Math.max(m, 0), d);
          return {
            action: (n = e.action) != null ? n : l,
            controlled: s,
            index: p,
            lifecycle: (r = e.lifecycle) != null ? r : X.INIT,
            size: (i = e.size) != null ? i : d,
            status: p === d ? ne.FINISHED : (o = e.status) != null ? o : u,
          };
        }
        getSteps() {
          let e = this.data.get('steps');
          return Array.isArray(e) ? e : [];
        }
        hasUpdatedState(e) {
          let t = JSON.stringify(e),
            n = JSON.stringify(this.getState());
          return t !== n;
        }
        setState(e, t = !1) {
          let n = this.getState(),
            { action: r, index: i, lifecycle: o, size: l, status: s } = { ...n, ...e };
          this.store.set('action', r),
            this.store.set('index', i),
            this.store.set('lifecycle', o),
            this.store.set('size', l),
            this.store.set('status', s),
            t &&
              (this.store.set('controlled', e.controlled),
              this.store.set('continuous', e.continuous)),
            this.listener && this.hasUpdatedState(n) && this.listener(this.getState());
        }
        getHelpers() {
          return {
            close: this.close,
            go: this.go,
            info: this.info,
            next: this.next,
            open: this.open,
            prev: this.prev,
            reset: this.reset,
            skip: this.skip,
          };
        }
      };
    function uh(e) {
      return new dh(e);
    }
    var mh = class {
        constructor(e, t) {
          if (
            (R(this, 'element'),
            R(this, 'options'),
            R(this, 'canBeTabbed', (n) => {
              let { tabIndex: r } = n;
              return r === null || r < 0 ? !1 : this.canHaveFocus(n);
            }),
            R(this, 'canHaveFocus', (n) => {
              let r = /input|select|textarea|button|object/,
                i = n.nodeName.toLowerCase();
              return (
                ((r.test(i) && !n.getAttribute('disabled')) ||
                  (i === 'a' && !!n.getAttribute('href'))) &&
                this.isVisible(n)
              );
            }),
            R(this, 'findValidTabElements', () =>
              [].slice.call(this.element.querySelectorAll('*'), 0).filter(this.canBeTabbed),
            ),
            R(this, 'handleKeyDown', (n) => {
              let { code: r = 'Tab' } = this.options;
              n.code === r && this.interceptTab(n);
            }),
            R(this, 'interceptTab', (n) => {
              n.preventDefault();
              let r = this.findValidTabElements(),
                { shiftKey: i } = n;
              if (!r.length) return;
              let o = document.activeElement ? r.indexOf(document.activeElement) : 0;
              o === -1 || (!i && o + 1 === r.length)
                ? (o = 0)
                : i && o === 0
                  ? (o = r.length - 1)
                  : (o += i ? -1 : 1),
                r[o].focus();
            }),
            R(this, 'isHidden', (n) => {
              let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                i = window.getComputedStyle(n);
              return r && !n.innerHTML
                ? !0
                : (r && i.getPropertyValue('overflow') !== 'visible') ||
                    i.getPropertyValue('display') === 'none';
            }),
            R(this, 'isVisible', (n) => {
              let r = n;
              for (; r; )
                if (r instanceof HTMLElement) {
                  if (r === document.body) break;
                  if (this.isHidden(r)) return !1;
                  r = r.parentNode;
                }
              return !0;
            }),
            R(this, 'removeScope', () => {
              window.removeEventListener('keydown', this.handleKeyDown);
            }),
            R(this, 'checkFocus', (n) => {
              document.activeElement !== n &&
                (n.focus(), window.requestAnimationFrame(() => this.checkFocus(n)));
            }),
            R(this, 'setFocus', () => {
              let { selector: n } = this.options;
              if (!n) return;
              let r = this.element.querySelector(n);
              r && window.requestAnimationFrame(() => this.checkFocus(r));
            }),
            !(e instanceof HTMLElement))
          )
            throw new TypeError('Invalid parameter: element must be an HTMLElement');
          (this.element = e),
            (this.options = t),
            window.addEventListener('keydown', this.handleKeyDown, !1),
            this.setFocus();
        }
      },
      ph = class extends Vt {
        constructor(e) {
          if (
            (super(e),
            R(this, 'beacon', null),
            R(this, 'setBeaconRef', (i) => {
              this.beacon = i;
            }),
            e.beaconComponent)
          )
            return;
          let t = document.head || document.getElementsByTagName('head')[0],
            n = document.createElement('style');
          (n.id = 'joyride-beacon-animation'),
            e.nonce && n.setAttribute('nonce', e.nonce),
            n.appendChild(
              document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `),
            ),
            t.appendChild(n);
        }
        componentDidMount() {
          let { shouldFocus: e } = this.props;
          setTimeout(() => {
            I.domElement(this.beacon) && e && this.beacon.focus();
          }, 0);
        }
        componentWillUnmount() {
          let e = document.getElementById('joyride-beacon-animation');
          e?.parentNode && e.parentNode.removeChild(e);
        }
        render() {
          let {
              beaconComponent: e,
              continuous: t,
              index: n,
              isLastStep: r,
              locale: i,
              onClickOrHover: o,
              size: l,
              step: s,
              styles: c,
            } = this.props,
            d = I.string(i.open) ? i.open : (0, U3.default)(i.open),
            u = { 'aria-label': d, onClick: o, onMouseEnter: o, ref: this.setBeaconRef, title: d },
            m;
          return (
            e
              ? (m = x(e, { continuous: t, index: n, isLastStep: r, size: l, step: s, ...u }))
              : (m = x(
                  'button',
                  {
                    key: 'JoyrideBeacon',
                    className: 'react-joyride__beacon',
                    'data-test-id': 'button-beacon',
                    style: c.beacon,
                    type: 'button',
                    ...u,
                  },
                  x('span', { style: c.beaconInner }),
                  x('span', { style: c.beaconOuter }),
                )),
            m
          );
        }
      };
    function hh({ styles: e }) {
      return x('div', {
        key: 'JoyrideSpotlight',
        className: 'react-joyride__spotlight',
        'data-test-id': 'spotlight',
        style: e,
      });
    }
    var fh = hh,
      gh = class extends Vt {
        constructor() {
          super(...arguments),
            R(this, 'isActive', !1),
            R(this, 'resizeTimeout'),
            R(this, 'scrollTimeout'),
            R(this, 'scrollParent'),
            R(this, 'state', { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
            R(this, 'handleMouseMove', (e) => {
              let { mouseOverSpotlight: t } = this.state,
                { height: n, left: r, position: i, top: o, width: l } = this.spotlightStyles,
                s = i === 'fixed' ? e.clientY : e.pageY,
                c = i === 'fixed' ? e.clientX : e.pageX,
                d = s >= o && s <= o + n,
                u = c >= r && c <= r + l && d;
              u !== t && this.updateState({ mouseOverSpotlight: u });
            }),
            R(this, 'handleScroll', () => {
              let { target: e } = this.props,
                t = Gt(e);
              if (this.scrollParent !== document) {
                let { isScrolling: n } = this.state;
                n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                  clearTimeout(this.scrollTimeout),
                  (this.scrollTimeout = window.setTimeout(() => {
                    this.updateState({ isScrolling: !1, showSpotlight: !0 });
                  }, 50));
              } else Ta(t, 'sticky') && this.updateState({});
            }),
            R(this, 'handleResize', () => {
              clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = window.setTimeout(() => {
                  this.isActive && this.forceUpdate();
                }, 100));
            });
        }
        componentDidMount() {
          let {
              debug: e,
              disableScrolling: t,
              disableScrollParentFix: n = !1,
              target: r,
            } = this.props,
            i = Gt(r);
          (this.scrollParent = ei(i ?? document.body, n, !0)),
            (this.isActive = !0),
            window.addEventListener('resize', this.handleResize);
        }
        componentDidUpdate(e) {
          var t;
          let { lifecycle: n, spotlightClicks: r } = this.props,
            { changed: i } = Tr(e, this.props);
          i('lifecycle', X.TOOLTIP) &&
            ((t = this.scrollParent) == null ||
              t.addEventListener('scroll', this.handleScroll, { passive: !0 }),
            setTimeout(() => {
              let { isScrolling: o } = this.state;
              o || this.updateState({ showSpotlight: !0 });
            }, 100)),
            (i('spotlightClicks') || i('disableOverlay') || i('lifecycle')) &&
              (r && n === X.TOOLTIP
                ? window.addEventListener('mousemove', this.handleMouseMove, !1)
                : n !== X.TOOLTIP && window.removeEventListener('mousemove', this.handleMouseMove));
        }
        componentWillUnmount() {
          var e;
          (this.isActive = !1),
            window.removeEventListener('mousemove', this.handleMouseMove),
            window.removeEventListener('resize', this.handleResize),
            clearTimeout(this.resizeTimeout),
            clearTimeout(this.scrollTimeout),
            (e = this.scrollParent) == null || e.removeEventListener('scroll', this.handleScroll);
        }
        get spotlightStyles() {
          var e, t, n;
          let { showSpotlight: r } = this.state,
            {
              disableScrollParentFix: i = !1,
              spotlightClicks: o,
              spotlightPadding: l = 0,
              styles: s,
              target: c,
            } = this.props,
            d = Gt(c),
            u = q0(d),
            m = Ta(d),
            p = K3(d, l, i);
          return {
            ...(N1() ? s.spotlightLegacy : s.spotlight),
            height: Math.round(((e = u?.height) != null ? e : 0) + l * 2),
            left: Math.round(((t = u?.left) != null ? t : 0) - l),
            opacity: r ? 1 : 0,
            pointerEvents: o ? 'none' : 'auto',
            position: m ? 'fixed' : 'absolute',
            top: p,
            transition: 'opacity 0.2s',
            width: Math.round(((n = u?.width) != null ? n : 0) + l * 2),
          };
        }
        updateState(e) {
          this.isActive && this.setState((t) => ({ ...t, ...e }));
        }
        render() {
          let { mouseOverSpotlight: e, showSpotlight: t } = this.state,
            {
              disableOverlay: n,
              disableOverlayClose: r,
              lifecycle: i,
              onClickOverlay: o,
              placement: l,
              styles: s,
            } = this.props;
          if (n || i !== X.TOOLTIP) return null;
          let c = s.overlay;
          N1() && (c = l === 'center' ? s.overlayLegacyCenter : s.overlayLegacy);
          let d = {
              cursor: r ? 'default' : 'pointer',
              height: G3(),
              pointerEvents: e ? 'none' : 'auto',
              ...c,
            },
            u = l !== 'center' && t && x(fh, { styles: this.spotlightStyles });
          if (Y0() === 'safari') {
            let { mixBlendMode: m, zIndex: p, ...g } = d;
            (u = x('div', { style: { ...g } }, u)), delete d.backgroundColor;
          }
          return x(
            'div',
            {
              className: 'react-joyride__overlay',
              'data-test-id': 'overlay',
              onClick: o,
              role: 'presentation',
              style: d,
            },
            u,
          );
        }
      },
      vh = class extends Vt {
        constructor() {
          super(...arguments), R(this, 'node', null);
        }
        componentDidMount() {
          let { id: e } = this.props;
          zt() &&
            ((this.node = document.createElement('div')),
            (this.node.id = e),
            document.body.appendChild(this.node),
            ra || this.renderReact15());
        }
        componentDidUpdate() {
          zt() && (ra || this.renderReact15());
        }
        componentWillUnmount() {
          !zt() ||
            !this.node ||
            (ra || fl(this.node),
            this.node.parentNode === document.body &&
              (document.body.removeChild(this.node), (this.node = null)));
        }
        renderReact15() {
          if (!zt()) return;
          let { children: e } = this.props;
          this.node && gl(this, e, this.node);
        }
        renderReact16() {
          if (!zt() || !ra) return null;
          let { children: e } = this.props;
          return this.node ? Kn(e, this.node) : null;
        }
        render() {
          return ra ? this.renderReact16() : null;
        }
      };
    function yh({ styles: e, ...t }) {
      let { color: n, height: r, width: i, ...o } = e;
      return a.createElement(
        'button',
        { style: o, type: 'button', ...t },
        a.createElement(
          'svg',
          {
            height: typeof r == 'number' ? `${r}px` : r,
            preserveAspectRatio: 'xMidYMid',
            version: '1.1',
            viewBox: '0 0 18 18',
            width: typeof i == 'number' ? `${i}px` : i,
            xmlns: 'http://www.w3.org/2000/svg',
          },
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
              fill: n,
            }),
          ),
        ),
      );
    }
    var bh = yh;
    function Eh(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: i,
          isLastStep: o,
          primaryProps: l,
          size: s,
          skipProps: c,
          step: d,
          tooltipProps: u,
        } = e,
        {
          content: m,
          hideBackButton: p,
          hideCloseButton: g,
          hideFooter: f,
          locale: y,
          showProgress: k,
          showSkipButton: b,
          styles: h,
          title: v,
        } = d,
        { back: E, close: S, last: B, next: j, skip: Y } = y,
        J = { primary: S };
      return (
        r &&
          ((J.primary = o ? B : j),
          k && (J.primary = x('span', null, J.primary, ' (', i + 1, '/', s, ')'))),
        b &&
          !o &&
          (J.skip = x(
            'button',
            {
              'aria-live': 'off',
              'data-test-id': 'button-skip',
              style: h.buttonSkip,
              type: 'button',
              ...c,
            },
            Y,
          )),
        !p &&
          i > 0 &&
          (J.back = x(
            'button',
            { 'data-test-id': 'button-back', style: h.buttonBack, type: 'button', ...t },
            E,
          )),
        (J.close = !g && x(bh, { 'data-test-id': 'button-close', styles: h.buttonClose, ...n })),
        x(
          'div',
          {
            key: 'JoyrideTooltip',
            'aria-label': Ut(v) || Ut(m),
            className: 'react-joyride__tooltip',
            style: h.tooltip,
            ...u,
          },
          x(
            'div',
            { style: h.tooltipContainer },
            v && x('h1', { 'aria-label': Ut(v), style: h.tooltipTitle }, v),
            x('div', { style: h.tooltipContent }, m),
          ),
          !f &&
            x(
              'div',
              { style: h.tooltipFooter },
              x('div', { style: h.tooltipFooterSpacer }, J.skip),
              J.back,
              x(
                'button',
                { 'data-test-id': 'button-primary', style: h.buttonNext, type: 'button', ...l },
                J.primary,
              ),
            ),
          J.close,
        )
      );
    }
    var kh = Eh,
      wh = class extends Vt {
        constructor() {
          super(...arguments),
            R(this, 'handleClickBack', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.prev();
            }),
            R(this, 'handleClickClose', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.close();
            }),
            R(this, 'handleClickPrimary', (e) => {
              e.preventDefault();
              let { continuous: t, helpers: n } = this.props;
              if (!t) {
                n.close();
                return;
              }
              n.next();
            }),
            R(this, 'handleClickSkip', (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.skip();
            }),
            R(this, 'getElementsProps', () => {
              let { continuous: e, isLastStep: t, setTooltipRef: n, step: r } = this.props,
                i = Ut(r.locale.back),
                o = Ut(r.locale.close),
                l = Ut(r.locale.last),
                s = Ut(r.locale.next),
                c = Ut(r.locale.skip),
                d = e ? s : o;
              return (
                t && (d = l),
                {
                  backProps: {
                    'aria-label': i,
                    'data-action': 'back',
                    onClick: this.handleClickBack,
                    role: 'button',
                    title: i,
                  },
                  closeProps: {
                    'aria-label': o,
                    'data-action': 'close',
                    onClick: this.handleClickClose,
                    role: 'button',
                    title: o,
                  },
                  primaryProps: {
                    'aria-label': d,
                    'data-action': 'primary',
                    onClick: this.handleClickPrimary,
                    role: 'button',
                    title: d,
                  },
                  skipProps: {
                    'aria-label': c,
                    'data-action': 'skip',
                    onClick: this.handleClickSkip,
                    role: 'button',
                    title: c,
                  },
                  tooltipProps: { 'aria-modal': !0, ref: n, role: 'alertdialog' },
                }
              );
            });
        }
        render() {
          let {
              continuous: e,
              index: t,
              isLastStep: n,
              setTooltipRef: r,
              size: i,
              step: o,
            } = this.props,
            { beaconComponent: l, tooltipComponent: s, ...c } = o,
            d;
          if (s) {
            let u = {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: c,
              setTooltipRef: r,
            };
            d = x(s, { ...u });
          } else
            d = x(kh, {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: o,
            });
          return d;
        }
      },
      Ch = class extends Vt {
        constructor() {
          super(...arguments),
            R(this, 'scope', null),
            R(this, 'tooltip', null),
            R(this, 'handleClickHoverBeacon', (e) => {
              let { step: t, store: n } = this.props;
              (e.type === 'mouseenter' && t.event !== 'hover') ||
                n.update({ lifecycle: X.TOOLTIP });
            }),
            R(this, 'handleClickOverlay', () => {
              let { helpers: e, step: t } = this.props;
              t.disableOverlayClose || e.close();
            }),
            R(this, 'setTooltipRef', (e) => {
              this.tooltip = e;
            }),
            R(this, 'setPopper', (e, t) => {
              var n;
              let { action: r, step: i, store: o } = this.props;
              t === 'wrapper' ? o.setPopper('beacon', e) : o.setPopper('tooltip', e),
                o.getPopper('beacon') &&
                  o.getPopper('tooltip') &&
                  o.update({ action: r, lifecycle: X.READY }),
                (n = i.floaterProps) != null && n.getPopper && i.floaterProps.getPopper(e, t);
            }),
            R(this, 'renderTooltip', (e) => {
              let { continuous: t, helpers: n, index: r, size: i, step: o } = this.props;
              return x(wh, {
                continuous: t,
                helpers: n,
                index: r,
                isLastStep: r + 1 === i,
                setTooltipRef: this.setTooltipRef,
                size: i,
                step: o,
                ...e,
              });
            });
        }
        componentDidMount() {
          let { debug: e, index: t } = this.props;
          mn({ title: `step:${t}`, data: [{ key: 'props', value: this.props }], debug: e });
        }
        componentDidUpdate(e) {
          var t;
          let {
              action: n,
              callback: r,
              continuous: i,
              controlled: o,
              debug: l,
              index: s,
              lifecycle: c,
              size: d,
              status: u,
              step: m,
              store: p,
            } = this.props,
            { changed: g, changedFrom: f } = Tr(e, this.props),
            y = { action: n, controlled: o, index: s, lifecycle: c, size: d, status: u },
            k = i && n !== me.CLOSE && (s > 0 || n === me.PREV),
            b = g('action') || g('index') || g('lifecycle') || g('status'),
            h = f('lifecycle', [X.TOOLTIP, X.INIT], X.INIT),
            v = g('action', [me.NEXT, me.PREV, me.SKIP, me.CLOSE]),
            E = o && s === e.index;
          if (
            (v &&
              (h || E) &&
              r({ ...y, index: e.index, lifecycle: X.COMPLETE, step: e.step, type: ut.STEP_AFTER }),
            m.placement === 'center' &&
              u === ne.RUNNING &&
              g('index') &&
              n !== me.START &&
              c === X.INIT &&
              p.update({ lifecycle: X.READY }),
            b)
          ) {
            let S = Gt(m.target),
              B = !!S;
            B && Q3(S)
              ? (f('status', ne.READY, ne.RUNNING) || f('lifecycle', X.INIT, X.READY)) &&
                r({ ...y, step: m, type: ut.STEP_BEFORE })
              : (console.warn(B ? 'Target not visible' : 'Target not mounted', m),
                r({ ...y, type: ut.TARGET_NOT_FOUND, step: m }),
                o || p.update({ index: s + (n === me.PREV ? -1 : 1) }));
          }
          f('lifecycle', X.INIT, X.READY) &&
            p.update({ lifecycle: M1(m) || k ? X.TOOLTIP : X.BEACON }),
            g('index') &&
              mn({ title: `step:${c}`, data: [{ key: 'props', value: this.props }], debug: l }),
            g('lifecycle', X.BEACON) && r({ ...y, step: m, type: ut.BEACON }),
            g('lifecycle', X.TOOLTIP) &&
              (r({ ...y, step: m, type: ut.TOOLTIP }),
              this.tooltip &&
                ((this.scope = new mh(this.tooltip, { selector: '[data-action=primary]' })),
                this.scope.setFocus())),
            f('lifecycle', [X.TOOLTIP, X.INIT], X.INIT) &&
              ((t = this.scope) == null || t.removeScope(), p.cleanupPoppers());
        }
        componentWillUnmount() {
          var e;
          (e = this.scope) == null || e.removeScope();
        }
        get open() {
          let { lifecycle: e, step: t } = this.props;
          return M1(t) || e === X.TOOLTIP;
        }
        render() {
          let {
              continuous: e,
              debug: t,
              index: n,
              lifecycle: r,
              nonce: i,
              shouldScroll: o,
              size: l,
              step: s,
            } = this.props,
            c = Gt(s.target);
          return !K0(s) || !I.domElement(c)
            ? null
            : x(
                'div',
                { key: `JoyrideStep-${n}`, className: 'react-joyride__step' },
                x(
                  vh,
                  { id: 'react-joyride-portal' },
                  x(gh, { ...s, debug: t, lifecycle: r, onClickOverlay: this.handleClickOverlay }),
                ),
                x(
                  Go,
                  {
                    ...s.floaterProps,
                    component: this.renderTooltip,
                    debug: t,
                    getPopper: this.setPopper,
                    id: `react-joyride-step-${n}`,
                    open: this.open,
                    placement: s.placement,
                    target: s.target,
                  },
                  x(ph, {
                    beaconComponent: s.beaconComponent,
                    continuous: e,
                    index: n,
                    isLastStep: n + 1 === l,
                    locale: s.locale,
                    nonce: i,
                    onClickOrHover: this.handleClickHoverBeacon,
                    shouldFocus: o,
                    size: l,
                    step: s,
                    styles: s.styles,
                  }),
                ),
              );
        }
      },
      J0 = class extends Vt {
        constructor(e) {
          super(e),
            R(this, 'helpers'),
            R(this, 'store'),
            R(this, 'callback', (l) => {
              let { callback: s } = this.props;
              I.function(s) && s(l);
            }),
            R(this, 'handleKeyboard', (l) => {
              let { index: s, lifecycle: c } = this.state,
                { steps: d } = this.props,
                u = d[s];
              c === X.TOOLTIP &&
                l.code === 'Escape' &&
                u &&
                !u.disableCloseOnEsc &&
                this.store.close();
            }),
            R(this, 'syncState', (l) => {
              this.setState(l);
            });
          let { debug: t, getHelpers: n, run: r, stepIndex: i } = e;
          (this.store = uh({ ...e, controlled: r && I.number(i) })),
            (this.helpers = this.store.getHelpers());
          let { addListener: o } = this.store;
          mn({
            title: 'init',
            data: [
              { key: 'props', value: this.props },
              { key: 'state', value: this.state },
            ],
            debug: t,
          }),
            o(this.syncState),
            n && n(this.helpers),
            (this.state = this.store.getState());
        }
        componentDidMount() {
          if (!zt()) return;
          let { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
            { start: i } = this.store;
          A1(r, e) && n && i(),
            t || document.body.addEventListener('keydown', this.handleKeyboard, { passive: !0 });
        }
        componentDidUpdate(e, t) {
          if (!zt()) return;
          let { action: n, controlled: r, index: i, lifecycle: o, status: l } = this.state,
            { debug: s, run: c, stepIndex: d, steps: u } = this.props,
            { stepIndex: m, steps: p } = e,
            { reset: g, setSteps: f, start: y, stop: k, update: b } = this.store,
            { changed: h } = Tr(e, this.props),
            { changed: v, changedFrom: E } = Tr(t, this.state),
            S = oa(u[i], this.props),
            B = !Ue(p, u),
            j = I.number(d) && h('stepIndex'),
            Y = Gt(S.target);
          if (
            (B && (A1(u, s) ? f(u) : console.warn('Steps are not valid', u)),
            h('run') && (c ? y(d) : k()),
            j)
          ) {
            let ce = I.number(m) && m < d ? me.NEXT : me.PREV;
            n === me.STOP && (ce = me.START),
              [ne.FINISHED, ne.SKIPPED].includes(l) ||
                b({ action: n === me.CLOSE ? me.CLOSE : ce, index: d, lifecycle: X.INIT });
          }
          !r &&
            l === ne.RUNNING &&
            i === 0 &&
            !Y &&
            (this.store.update({ index: i + 1 }),
            this.callback({ ...this.state, type: ut.TARGET_NOT_FOUND, step: S }));
          let J = { ...this.state, index: i, step: S };
          if (v('action', [me.NEXT, me.PREV, me.SKIP, me.CLOSE]) && v('status', ne.PAUSED)) {
            let ce = oa(u[t.index], this.props);
            this.callback({
              ...J,
              index: t.index,
              lifecycle: X.COMPLETE,
              step: ce,
              type: ut.STEP_AFTER,
            });
          }
          if (v('status', [ne.FINISHED, ne.SKIPPED])) {
            let ce = oa(u[t.index], this.props);
            r ||
              this.callback({
                ...J,
                index: t.index,
                lifecycle: X.COMPLETE,
                step: ce,
                type: ut.STEP_AFTER,
              }),
              this.callback({ ...J, type: ut.TOUR_END, step: ce, index: t.index }),
              g();
          } else
            E('status', [ne.IDLE, ne.READY], ne.RUNNING)
              ? this.callback({ ...J, type: ut.TOUR_START })
              : (v('status') || v('action', me.RESET)) &&
                this.callback({ ...J, type: ut.TOUR_STATUS });
          this.scrollToStep(t),
            S.placement === 'center' &&
              l === ne.RUNNING &&
              o === X.INIT &&
              this.store.update({ lifecycle: X.READY });
        }
        componentWillUnmount() {
          let { disableCloseOnEsc: e } = this.props;
          e || document.body.removeEventListener('keydown', this.handleKeyboard);
        }
        scrollToStep(e) {
          let { index: t, lifecycle: n, status: r } = this.state,
            {
              debug: i,
              disableScrollParentFix: o = !1,
              scrollDuration: l,
              scrollOffset: s = 20,
              scrollToFirstStep: c = !1,
              steps: d,
            } = this.props,
            u = oa(d[t], this.props),
            m = Gt(u.target),
            p = nh({
              isFirstStep: t === 0,
              lifecycle: n,
              previousLifecycle: e.lifecycle,
              scrollToFirstStep: c,
              step: u,
              target: m,
            });
          if (r === ne.RUNNING && p) {
            let g = ti(m, o),
              f = ei(m, o),
              y = Math.floor(J3(m, s, o)) || 0;
            mn({
              title: 'scrollToStep',
              data: [
                { key: 'index', value: t },
                { key: 'lifecycle', value: n },
                { key: 'status', value: r },
              ],
              debug: i,
            });
            let k = this.store.getPopper('beacon'),
              b = this.store.getPopper('tooltip');
            if (n === X.BEACON && k) {
              let { offsets: h, placement: v } = k;
              !['bottom'].includes(v) && !g && (y = Math.floor(h.popper.top - s));
            } else if (n === X.TOOLTIP && b) {
              let { flipped: h, offsets: v, placement: E } = b;
              ['top', 'right', 'left'].includes(E) && !h && !g
                ? (y = Math.floor(v.popper.top - s))
                : (y -= u.spotlightPadding);
            }
            (y = y >= 0 ? y : 0),
              r === ne.RUNNING &&
                X3(y, { element: f, duration: l }).then(() => {
                  setTimeout(() => {
                    var h;
                    (h = this.store.getPopper('tooltip')) == null || h.instance.update();
                  }, 10);
                });
          }
        }
        render() {
          if (!zt()) return null;
          let { index: e, status: t } = this.state,
            {
              continuous: n = !1,
              debug: r = !1,
              nonce: i,
              scrollToFirstStep: o = !1,
              steps: l,
            } = this.props,
            s;
          if (t === ne.RUNNING && l[e]) {
            let c = oa(l[e], this.props);
            s = x(Ch, {
              ...this.state,
              callback: this.callback,
              continuous: n,
              debug: r,
              helpers: this.helpers,
              nonce: i,
              shouldScroll: !c.disableScrolling && (e !== 0 || o),
              step: c,
              store: this.store,
            });
          }
          return x('div', { className: 'react-joyride' }, s);
        }
      };
    R(J0, 'defaultProps', ih);
    var Sh = J0,
      L1 = [
        void 0,
        'EQUAL',
        'FIXED',
        'ADDED',
        'CHANGED',
        'REMOVED',
        'CAPTURE_ERROR',
        'SYSTEM_ERROR',
      ],
      Rr = ([e, ...t]) => t.reduce((n, r) => (L1.indexOf(r) > L1.indexOf(n) ? r : n), e);
    function xh(e) {
      return (e.FAILED ?? 0) > 0
        ? 'FAILED'
        : (e.IN_PROGRESS ?? 0) > 0
          ? 'IN_PROGRESS'
          : (e.BROKEN ?? 0) > 0
            ? 'BROKEN'
            : (e.DENIED ?? 0) > 0
              ? 'DENIED'
              : (e.PENDING ?? 0) > 0
                ? 'PENDING'
                : (e.ACCEPTED ?? 0) > 0
                  ? 'ACCEPTED'
                  : 'PASSED';
    }
    function qo(e) {
      let {
          statusCounts: t,
          isInProgress: n,
          changeCount: r,
          brokenCount: i,
          resultsByBrowser: o,
          resultsByMode: l,
          modesByName: s,
        } = e.reduce(
          (m, p) => (
            (m.statusCounts[p.status] = (m.statusCounts[p.status] || 0) + 1),
            p.status === 'IN_PROGRESS' && (m.isInProgress = !0),
            p.result && ['CHANGED', 'ADDED'].includes(p.result) && (m.changeCount += 1),
            p.result &&
              ['CAPTURE_ERROR', 'SYSTEM_ERROR'].includes(p.result) &&
              (m.brokenCount += 1),
            p.comparisons?.forEach(({ browser: g, result: f }) => {
              m.resultsByBrowser[g.id] = Rr([f ?? void 0, m.resultsByBrowser[g.id]]);
            }),
            p.comparisons?.forEach(({ result: g }) => {
              m.resultsByMode[p.mode.name] = Rr([g ?? void 0, m.resultsByMode[p.mode.name]]);
            }),
            (m.modesByName[p.mode.name] = p.mode),
            m
          ),
          {
            statusCounts: {},
            isInProgress: !1,
            changeCount: 0,
            brokenCount: 0,
            resultsByBrowser: {},
            resultsByMode: {},
            modesByName: {},
          },
        ),
        c = e.length
          ? Object.fromEntries(e[0].comparisons.map((m) => [m.browser.id, m.browser]))
          : {},
        d = Object.entries(o).map(([m, p]) => ({ browser: c[m], result: p })),
        u = Object.entries(l).map(([m, p]) => ({ mode: s[m], result: p }));
      return {
        status: xh(t),
        isInProgress: n,
        changeCount: r,
        brokenCount: i,
        browserResults: d,
        modeResults: u,
      };
    }
    var Mh = (e) => {
        try {
          return [rl()[0][e], al()[e]];
        } catch {
          return [null, null];
        }
      },
      X0 = ({ result: e }) => e !== 'EQUAL' && e !== 'FIXED',
      Nh = (e, t) => {
        let n = e.filter((i) => i.comparisons.some(X0)),
          r = n.length ? n : e;
        return r.find((i) => i.mode.name === t) || r[0];
      },
      Fh = (e, t) => {
        let n = e.filter(X0),
          r = n.length ? n : e;
        return r.find((i) => i.browser.id === t) || r[0];
      };
    function Ah(e) {
      let [t, n] = Re(!0),
        r = Mh('theme')[1],
        [i, o] = Ie(qd),
        [l, s] = Ie(Yd),
        c,
        d;
      return (
        e.length &&
          ((c = t ? Nh(e, i) : e.find(({ mode: u }) => u.name === i) || e[0]),
          (d = t
            ? Fh(c.comparisons, l)
            : c?.comparisons.find(({ browser: u }) => u.id === l) || c?.comparisons[0]),
          t &&
            (i !== c?.mode.name && o(c?.mode.name),
            l !== d?.browser.id && s(d?.browser.id),
            n(!1))),
        {
          modeOrder: r?.toolbar?.items?.map((u) => u.title),
          selectedTest: c,
          selectedComparison: d,
          onSelectBrowser: W((u) => s(u.id), [s]),
          onSelectMode: W((u) => o(u.name), [o]),
        }
      );
    }
    var Oh = gt(`
  query AddonVisualTestsBuild(
    $projectId: ID!
    $branch: String!
    $gitUserEmailHash: String!
    $repositoryOwnerName: String
    $storyId: String!
    $testStatuses: [TestStatus!]!
    $selectedBuildId: ID!
    $hasSelectedBuildId: Boolean!
  ) {
    project(id: $projectId) {
      name
      manageUrl
      account {
        billingUrl
        suspensionReason
      }
      features {
        uiTests
      }
      lastBuildOnBranch: lastBuild(
        branches: [$branch]
        repositoryOwnerName: $repositoryOwnerName
        localBuilds: { localBuildEmailHash: $gitUserEmailHash }
      ) {
        ...LastBuildOnBranchBuildFields
        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)
      }
      lastBuild {
        id
        slug
        branch
      }
    }
    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {
      ...SelectedBuildFields
    }
    viewer {
      preferences {
        vtaOnboarding
      }
      projectMembership(projectId: $projectId) {
        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)
      }
    }
  }
`),
      Lh = gt(`
  fragment LastBuildOnBranchBuildFields on Build {
    __typename
    id
    status
    committedAt
    ... on StartedBuild {
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
    ... on CompletedBuild {
      result
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
  }
`),
      Th = gt(`
  fragment SelectedBuildFields on Build {
    __typename
    id
    number
    branch
    commit
    committedAt
    uncommittedHash
    status
    ... on StartedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
    ... on CompletedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
  }
`),
      ec = gt(`
  fragment StatusTestFields on Test {
    id
    status
    result
    story {
      storyId
    }
  }
`),
      _h = gt(`
  fragment LastBuildOnBranchTestFields on Test {
    status
    result
  }
`),
      Zh = gt(`
  fragment StoryTestFields on Test {
    id
    status
    result
    webUrl
    comparisons {
      id
      result
      browser {
        id
        key
        name
        version
      }
      captureDiff {
        diffImage(signed: true) {
          imageUrl
          imageWidth
        }
        focusImage(signed: true) {
          imageUrl
          imageWidth
        }
      }
      headCapture {
        captureImage(signed: true) {
          backgroundColor
          imageUrl
          imageWidth
          imageHeight
          thumbnailUrl
        }
        captureError {
          kind
          ... on CaptureErrorInteractionFailure {
            error
          }
          ... on CaptureErrorJSError {
            error
          }
          ... on CaptureErrorFailedJS {
            error
          }
        }
      }
      baseCapture {
        captureImage(signed: true) {
          imageUrl
          imageWidth
          imageHeight
        }
      }
    }
    mode {
      name
      globals
    }
    story {
      storyId
      name
      component {
        name
      }
    }
  }
`),
      Ih = gt(`
  mutation ReviewTest($input: ReviewTestInput!) {
    reviewTest(input: $input) {
      updatedTests {
        id
        status
      }
      userErrors {
        ... on UserError {
          __typename
          message
        }
        ... on BuildSupersededError {
          build {
            id
          }
        }
        ... on TestUnreviewableError {
          test {
            id
          }
        }
      }
    }
  }
`),
      Rh = ({ projectId: e, storyId: t, gitInfo: n, selectedBuildInfo: r }) => {
        let [{ data: i, error: o, operation: l }, s] = Oo({
          query: Oh,
          variables: {
            projectId: e,
            storyId: t,
            testStatuses: Object.keys(y0),
            branch: n.branch || '',
            ...(n.slug ? { repositoryOwnerName: n.slug.split('/', 1)[0] } : {}),
            gitUserEmailHash: n.userEmailHash,
            selectedBuildId: r?.buildId || '',
            hasSelectedBuildId: !!r,
          },
        });
        oe(() => {
          let y = setInterval(s, 5e3);
          return () => clearInterval(y);
        }, [s]);
        let c = l && t && l.variables.storyId !== t,
          d = Nn(Lh, i?.project?.lastBuildOnBranch),
          u = [
            ...Nn(_h, d && 'testsForStory' in d && d.testsForStory ? d.testsForStory.nodes : []),
          ],
          m = d?.committedAt > n.committedAt,
          p = !!d && !m,
          g = !!d && u.every((y) => y.status !== 'IN_PROGRESS'),
          f = Nn(Th, i?.selectedBuild ?? (g ? i?.project?.lastBuildOnBranch : void 0));
        return {
          account: i?.project?.account,
          features: i?.project?.features,
          manageUrl: i?.project?.manageUrl,
          hasData: !!i && !c,
          hasProject: !!i?.project,
          hasSelectedBuild: f?.branch.split(':').at(-1) === n.branch,
          lastBuildOnBranch: d,
          lastBuildOnBranchIsNewer: m,
          lastBuildOnBranchIsReady: g,
          lastBuildOnBranchIsSelectable: p,
          selectedBuild: f,
          selectedBuildMatchesGit:
            f?.branch.split(':').at(-1) === n.branch &&
            f?.commit === n.commit &&
            f?.uncommittedHash === n.uncommittedHash,
          rerunQuery: s,
          queryError: o,
          userCanReview: !!i?.viewer?.projectMembership?.userCanReview,
          vtaOnboarding: i?.viewer?.preferences?.vtaOnboarding,
        };
      },
      Yo = Je(null),
      tc = Je(null),
      Bh = () => Ot(Yo, 'Build'),
      nc = () => {
        let { selectedBuild: e } = Ot(Yo, 'Build');
        if (!e) throw new Error('No selectedBuild on Build context');
        return e;
      },
      fn = () => Ot(tc, 'Story'),
      Zi = ({ children: e, watchState: t }) => {
        let n = !!t?.selectedBuild && 'testsForStory' in t.selectedBuild,
          r =
            t?.selectedBuild &&
            'testsForStory' in t.selectedBuild &&
            t.selectedBuild.testsForStory?.nodes,
          i = [...Nn(Zh, r || [])],
          o = qo(i),
          { toggleDiff: l } = Pn();
        return (
          oe(() => l(o.changeCount > 0), [l, o.changeCount]),
          a.createElement(
            Yo.Provider,
            { value: jt(() => t, [JSON.stringify(t?.selectedBuild)]) },
            a.createElement(
              tc.Provider,
              { value: { hasTests: n, tests: i, summary: o, ...Ah(i) } },
              e,
            ),
          )
        );
      },
      Ph = w.div(({ width: e, height: t, left: n, top: r }) => ({
        width: `${e}px`,
        height: `${t}px`,
        left: `${n}px`,
        top: `${r}px`,
        position: 'relative',
        overflow: 'hidden',
      }));
    function Vh({
      top: e = 0,
      left: t = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: i = ['#CA90FF', '#FC521F', '#66BF3C', '#FF4785', '#FFAE00', '#1EA7FD'],
      ...o
    }) {
      let [l] = Re(() => {
        let s = document.createElement('div');
        return (
          s.setAttribute('id', 'confetti-container'),
          s.setAttribute(
            'style',
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;',
          ),
          s
        );
      });
      return (
        oe(
          () => (
            document.body.appendChild(l),
            () => {
              document.body.removeChild(l);
            }
          ),
          [l],
        ),
        Kn(
          a.createElement(
            Ph,
            { top: e, left: t, width: n, height: r },
            a.createElement(es.default, { colors: i, drawShape: Hh, ...o }),
          ),
          l,
        )
      );
    }
    function jh(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function Hh(e) {
      let t = this;
      switch (((t.shape = t.shape || jh(1, 6)), t.shape)) {
        case 2: {
          let n = t.w / 2,
            r = t.h / 2;
          e.moveTo(-n + 2, -r),
            e.lineTo(n - 2, -r),
            e.arcTo(n, -r, n, -r + 2, 2),
            e.lineTo(n, r - 2),
            e.arcTo(n, r, n - 2, r, 2),
            e.lineTo(-n + 2, r),
            e.arcTo(-n, r, -n, r - 2, 2),
            e.lineTo(-n, -r + 2),
            e.arcTo(-n, -r, -n + 2, -r, 2);
          break;
        }
        case 3: {
          e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          e.arc(0, 0, t.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
          break;
        }
        case 6: {
          e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
          break;
        }
      }
      e.closePath(), e.fill();
    }
    var Dh = w.div(({ theme: e }) => ({
        background: e.base === 'light' ? e.color.lightest : '#292A2C',
        width: 260,
        padding: 15,
        borderRadius: 5,
        boxShadow: '0px 0px 32px 0px #00000029',
      })),
      zh = w.div({ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }),
      Uh = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: '18px',
        fontWeight: 700,
        color: e.color.defaultText,
      })),
      $h = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: '18px',
        textAlign: 'start',
        color: e.color.defaultText,
        margin: 0,
        marginTop: 5,
      })),
      Wh = w.div({ display: 'flex', justifyContent: 'flex-end', marginTop: 15 }),
      Gh = ({ isLastStep: e, step: t, primaryProps: n, tooltipProps: r }) =>
        a.createElement(
          Dh,
          { ...r },
          a.createElement(
            zh,
            null,
            t.title && a.createElement(Uh, null, t.title),
            a.createElement($h, null, t.content),
          ),
          (t.hideNextButton || t.hideBackButton) &&
            a.createElement(
              Wh,
              { id: 'buttonSkip' },
              !t.hideSkipButton &&
                !e &&
                a.createElement(
                  ue,
                  {
                    size: 'medium',
                    onClick: t.onSkipWalkthroughButtonClick,
                    link: !0,
                    style: { paddingRight: 12, paddingLeft: 12, marginRight: 8 },
                  },
                  'Skip',
                ),
              !t.hideNextButton &&
                a.createElement(
                  ue,
                  {
                    ...n,
                    onClick: n.onClick,
                    variant: 'solid',
                    ...(t.onNextButtonClick ? { onClick: t.onNextButtonClick } : {}),
                  },
                  t.nextButtonText || 'Next',
                ),
            ),
        ),
      T1 = 'setFilter',
      qh = ({ managerApi: e, skipWalkthrough: t, startWalkthrough: n, completeWalkthrough: r }) => {
        let i = en(),
          o = fn(),
          l = o?.selectedTest?.result === 'CHANGED',
          s = o?.selectedTest?.status !== 'ACCEPTED',
          c = JSON.stringify(yn().layout),
          d = Pe(c);
        d.current !== c && (window.dispatchEvent(new Event('resize')), (d.current = c)),
          oe(() => {
            n();
          }),
          oe(() => {
            e.getCurrentStoryData()?.type !== 'story' && e.jumpToStory(1),
              e.togglePanel(!0),
              e.togglePanelPosition('right'),
              e.setSelectedPanel(qt);
          }, [e]);
        let [u, m] = rt('showConfetti', !1),
          [p, g] = rt('stepIndex', 0),
          f = () => g((y = 0) => y + 1);
        return (
          oe(() => {
            let y = document.getElementById('storybook-explorer-tree'),
              k = Array.from(y instanceof HTMLElement ? y.children : [])
                .filter((b) => b instanceof HTMLElement)
                .slice(1);
            return (
              k.forEach((b) => (b.style.display = 'none')),
              () => k.forEach((b) => (b.style.display = ''))
            );
          }, []),
          oe(() => {
            let y = () => {
              g(1),
                setTimeout(() => {
                  window.dispatchEvent(new Event('resize'));
                }, 100);
            };
            return (
              e.on(zi, y),
              e.on(T1, y),
              () => {
                e.off(zi, y), e.off(T1, y);
              }
            );
          }, [e, g]),
          oe(() => {
            o?.selectedTest?.status === 'ACCEPTED' && p === 5 && (m(!0), g(6));
          }, [o?.selectedTest?.status, u, m, p, g]),
          a.createElement(
            a.Fragment,
            null,
            u &&
              a.createElement(Vh, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
                onConfettiComplete: (y) => {
                  y?.reset(), m(!1);
                },
              }),
            a.createElement(Sh, {
              steps: [
                {
                  target: '#sidebar-bottom-wrapper',
                  title: 'Changes found',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'The visual tests addon will detect changes in all of your stories and allow you to review them before opening a pull request.',
                    a.createElement('br', null),
                    a.createElement('br', null),
                    'Click this button to see the changes in the sidebar.',
                  ),
                  floaterProps: {
                    target: '#warnings-found-filter',
                    options: { preventOverflow: { boundariesElement: 'window' } },
                  },
                  placement: 'top',
                  disableBeacon: !0,
                  hideNextButton: !0,
                  spotlightClicks: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                l && s
                  ? {
                      target: '#storybook-explorer-tree > div',
                      title: 'Stories with changes',
                      content: a.createElement(
                        a.Fragment,
                        null,
                        'Here you have a filtered list of only stories with changes.',
                      ),
                      placement: 'right',
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      onNextButtonClick: f,
                      onSkipWalkthroughButtonClick: t,
                    }
                  : {
                      target: '#storybook-explorer-tree > div',
                      title: 'Stories with changes',
                      content: a.createElement(
                        a.Fragment,
                        null,
                        'Here you have a list of all stories in your Storybook.',
                        a.createElement('br', null),
                        a.createElement('br', null),
                        'Select a story with changes to see the exact pixels that changed.',
                      ),
                      placement: 'right',
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      hideNextButton: !0,
                      onSkipWalkthroughButtonClick: t,
                    },
                {
                  target: '#panel-tab-content',
                  title: 'Inspect changes',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'The results of the changes are shown here. The pixels that changed are highlighted in green.',
                  ),
                  disableBeacon: !0,
                  placement: 'left',
                  onNextButtonClick: f,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-diff-visible',
                  title: 'Toggle the diff',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'This button shows or hides the visual diff. Use it to make the visual changes in your stories obvious. Try it out.',
                  ),
                  onNextButtonClick: f,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                },
                {
                  target: '#button-toggle-snapshot',
                  title: 'This is the Switch button',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Switch between the baseline snapshot (old) and the latest snapshot. The info bar will let you know which version you're looking at.",
                  ),
                  onNextButtonClick: f,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                },
                {
                  target: '#button-toggle-accept-story',
                  title: 'Accept changes',
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'If the visual changes are intentional, accept them to update the test baselines. The next time you run visual tests, future changes will be compared to these new baselines. This can be undone.',
                  ),
                  disableBeacon: !0,
                  spotlightClicks: !0,
                  onNextButtonClick: f,
                  hideNextButton: !0,
                  placement: 'bottom',
                  disableOverlay: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-toggle-accept-story',
                  title: 'Perfection!',
                  placement: 'bottom',
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "You've got the basics down! You can always unaccept if you're not happy with the changes.",
                  ),
                  onNextButtonClick: f,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: '#button-run-tests',
                  title: 'You are ready to test',
                  placement: 'bottom',
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    'Any time you want to run tests, tap this button in the sidebar to see exactly what changed across your Storybook.',
                  ),
                  disableBeacon: !0,
                  nextButtonText: 'Done',
                  onNextButtonClick: r,
                },
              ],
              continuous: !0,
              stepIndex: p,
              spotlightPadding: 0,
              hideBackButton: !0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              hideCloseButton: !0,
              showSkipButton: !0,
              floaterProps: {
                options: { offset: { offset: '0, 6' } },
                styles: {
                  floater: {
                    padding: 0,
                    paddingLeft: 8,
                    paddingTop: 8,
                    filter:
                      i.base === 'light'
                        ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                        : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
                  },
                },
              },
              tooltipComponent: Gh,
              styles: {
                overlay: { mixBlendMode: 'unset', backgroundColor: 'none' },
                spotlight: {
                  backgroundColor: 'none',
                  border: `solid 2px ${i.color.secondary}`,
                  boxShadow: '0px 0px 0px 9999px rgba(0,0,0,0.4)',
                },
                options: {
                  zIndex: 1e4,
                  primaryColor: i.color.secondary,
                  arrowColor: i.base === 'light' ? i.color.lightest : '#292A2C',
                },
              },
            }),
          )
        );
      },
      Yh = ({ content: e }) => {
        let t = e.split(/\r?\n/);
        return a.createElement(
          a.Fragment,
          null,
          t.reduce(
            (n, r, i) => n.concat([i && a.createElement('br', null), r].filter(Boolean)),
            [],
          ),
        );
      },
      ac = ({ localBuildProgress: e, title: t }) =>
        a.createElement(
          f0,
          { warning: !0 },
          a.createElement(
            G,
            null,
            a.createElement(
              'span',
              null,
              t && a.createElement('b', null, t, ': '),
              a.createElement(Yh, {
                content: bi(
                  Array.isArray(e.originalError)
                    ? e.originalError[0]?.message
                    : e.originalError?.message || 'Unknown error',
                ),
              }),
            ),
            ' ',
            a.createElement(
              $e,
              {
                target: '_blank',
                href: e.errorDetailsUrl || `${hs}#troubleshooting`,
                withArrow: !0,
              },
              e.errorDetailsUrl ? 'Details' : 'Troubleshoot',
            ),
          ),
        ),
      Qh = ({ children: e, localBuildProgress: t }) => (
        tt('Errors', 'BuildError'),
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Build failed'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Check the Storybook process on the command line for more details.',
                ),
              ),
              a.createElement(ac, { localBuildProgress: t }),
              e,
            ),
          ),
        )
      ),
      Kh = w(G)({ display: 'flex', flexDirection: 'column', gap: 10, width: 200, marginTop: 15 });
    function ni({ localBuildProgress: e }) {
      return a.createElement(
        Kh,
        { center: !0, small: !0 },
        a.createElement(
          _o,
          null,
          typeof e.buildProgressPercentage == 'number' &&
            a.createElement($s, { style: { width: `${e.buildProgressPercentage}%` } }),
        ),
        a.createElement(Lo, { center: !0, muted: !0, small: !0, localBuildProgress: e }),
      );
    }
    var Jh =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZfPTupAFMa/mbb0XkAk6r2516jRnXHlxr0+ib4J+iTqm7Bx5YaVcWPQECUoGiJCpX/mOKcxRo2DILa44Jc0Taad+b45mZkzR+CZaq2+CcsqAWIdoCKSowyFw5WFvwcvLRf1m1Kt0SSv51OkFCVJx+sRa1W1JmuLav16x5Zyf/7PDKQQSAM9RVzd3CH0aUsKEtsz0/nUxBnWmisWAItKkkCbWddF2mQcm1/rEmPiOeJF2/TD+f0pKo0jBKqHUcg5U1ib28ByYfXD78YInDSPRxZnOkE7nogJ2a/jd9FvImNbAz/GgHERZp08pjJ8OA3uMVIh2kELXvAwcB/j6HmnOJQ4Y0kbBW16GGS/wb7CsKYni9AYZ9f6haydhzCEVFGEbtiFH3kYBWMEfts5o3jcUVjIaYOjIvsJfIb4hhQ+WYQTAz/XgDXALuCz4D2ckN7Dt6KhDfzLLcGxMsaORApe2MFbQyrOhq9xpIu12Q3jOMaTcNqdjZ+k0REQLS4UxoXUZ1nFD0KkTffR51dZUhTuNVttpBkF1rq717cmFR3GDdXLxm6tcUudxx4lCRe+XACz1pnWZO2XbMJFKteJXKohMYTeIlRBFO2tLP4vc8sThEpu8pkDBW8AAAAASUVORK5CYII=',
      Xh =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgBvVdLTxNRFP7uUDpSC7Q8rFSLqWJEExOfC1/xHWPiQuPShS50Y/wP6F9wq1HZuTAxMXFlNGzUhWIQDWICLYhSC4XWlj5m2pnjvS20NNDhltB+i870zpnzffece8/cw7CI4FToDBoa+gB2ACAXaocBmOj3b9/yrDgyGZrtmwpHKK3pZJgm1RLJtEaCK8g5BTcLhmZu2RTlqbezDQpjqAf4FDE9O4+cTmcVRuxmW6uzbuQCgqvD1QI0UJ9CoDMOVUW9YW+0icsBG9YDLQNMjIAS0fxf1u4FvH5A3STtYjHiruoEcGL6/Bb07X3ZMImfZjfYnkNgR86jGsgL4LM1Xz3OXys9F+KQiIGdvQ5ZKLKGBefRte1+DoKG30MWcgKmg9zxF8iCBt8W1slGCaDgCKqCIA8FpEzlIjAXQrWgiNw70mugVpDaBczF9/nXvzy03NxmAo4sqEUrN2rls3YUPLIUkOnoQpOEb0sBWVPDp5l3SOqjuDjeVi5KzYG2x0E9KZi7eCVYVoNEXXgY2YpdvOaf38bgtlfmqJiCZDaO15P9CMS/I9xtILzDKDfg0WD7LwHnzpWRC3w0TiBGbgxGgEejhKiO6gW8+f0cC9l/JadXNCRdVDI42QtcPQrFcwHMubM4HCIv3hmlahjlmXoRIFQlQMx6ObnAQivhzY10SQQnLzrxFAh/GHvxJHsbGSoPSSABjFSoYauugV8LY6saCxEv76bgne5Ec5MCj65DIxMxeDBE9xDIeVEJIh373JICotoMrDDevQlz8fIIpRu5d4tch9IicivPHOuqA8Ts2CisKsBpa7F8yWbMrxgzcw2W77jtTF6Ax+GDFexmFIyyZeQ5zToqhzsgL6DXfQR2xfp006oPF++zKYelrShE/mbIC7ArKo51XYYVnLw6qkaYz1xFJu60tL3SzauhWoUAAd/mHpzedg3Oxsrr4ZQaxUGbu+JzMfM7vWzV7bcEy2+BEOHz9+QL01RiDLqZyadms70FPudueJoKa+V4J/AhzM8t6RJxF8/K4XZepdf43LHg9Gy0e2u7q559wRImQrP8dAwM6dkc6o1UJl+1BhQycg8isUS+XaoXBNd8fIHfGP35geCf8P2p8BwlMxrVEqLxFQ2w4BrnnIK7mHjRpIo+UbRqqBlYjBfyIRjGA7+va0CM/AdEDxpHNfo8owAAAABJRU5ErkJggg==',
      e7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VfNblJBFD5z+5e0poXGNqnFRFxoUly0K+vCpG7aFyhrTRofwBcQ6974AIZo1/QFyorEBezsQkhqYqkBSoBaAcWW3+N8dxh+hFJI+Nn0S264d+65c77znXNmGEFVhCPxDRobcxGJVSK20ODgowrt2W2Ln2ojP+IpVyRxxhf5ApcrFR4kchd5hq+w9AnfIhxPvhg3jI93FubJEIKGARkinabOqVTgZ4Zg8Xx+7tbQnAPwddsySzTGLoOJN6anpmjYmJwYx8+qQSNCVXHLyAho3BAY78bo5WemFau6D/0i+vC0fx1zLYFQmmjTJshpV8+BpLrWF6kvuDYFB1GuOQfg+CDG1C90lQIgKKWH8EiFbZooWySanWi18yeRJjbfA7DZkgraZqh3Aoh+a1nl21uNesUqzAk9YaadB/VagMP3X5W9876okYvmVMoyxWZ7jY4pCKSoVnyNQDTZQvOY51g5QIq8kjjIvP2iSG8jhawKuGsCYL5iUYyhxJNFYV6IBkCEWmYAxYpv3EfwJejVI0Gv15RSAFQLprl7AoEknNYnR2S4/Ek1CWTWk5vPdkXWYVV23phKydxk55a9sgYiMprtGRWlzi8Qy9UVaJQUaYENfh0WVXTrUrHoH+qdACK2zYiaI9da+ygQtV4T3N+Y3j0WJlnUQzCtbPDssoreCCDnyCGwL2WO5JrfO+SEm8vKMaJGznW3uI/YJKbbTivXEwENFFVGRqDJaMBJtlhvNbzVXYGxjLyfnVRKOKyda6ClCHXFAyhEHVkjMKnOP2whc6ha4TsPhVknnmNl126xakSLAvsnaD82VzQosG1v/QjSY4PyV1sSZKAS5DadyujniqpjMIe2w73zv/lE+DTJ95YWqF8AGSiCGrhq+dU4iae63wu6RbuVsxNu/hFJAiKNg8LICMgmOywUSzRs/L00Fw6fweXS7ln6Nw1TBfg6z8pNolLeMwfCscSbSOIn5y7zPEjg4IsDMHx9lz7hu7bM4ZCKcyKOajQwCLlF8SGVy7v2u0s+jPwDEeUTfjDhTd4AAAAASUVORK5CYII=',
      t7 =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALVSURBVHgBxZfLbtNAFIb/8TgJCbm2adNUIOiuYpUN+7JiySPAm5Q+CfQBeIcuWYDaVYWEUIQqCLmQpEmaJq7Hw5y4dpOOadwEh0+yZnx8OWfm/HNjuKZ6VtsD5/sAqwAyj+g4goPDnUeb733L91pz/6zekpdjSwrHkVFycTmW5KuqfJJvVq013piG8W57Yw0GY1gFqon42WzDtuQLg0n2ei2XXplzgnwV81mAy31DQu6lEgmsmnjMpKJi4D9x3eN58/YDabdUkmrAuboMDqTXgV4DSOWgkuZei9iEElzyCRDbmvGnBYDmZ6C4rWIr39i8ejy1uI0aN/gKVpgNQE9BtoDIeJDUTHoP2GPVAvfFL708jrtlCMmxCClu4Vm2gd1s1zUM2kBybgCWXz3tbSJtmlicxKQBfgCkiVvoKUiv+dWhiGNZZnpv1Nee683rNWcFeM2lfQzH/oi++IUcL6LvdJAziuiIunsvOsjwAobSQT7+Ui0ruwiD3gOp4HVI2J9UtBIFXlIf8Ylzwr9XQVCZZjE0Rx8C/4EH6RABkAgDGDkNhKXA/zKSSITzA7ACv02yhwgLpSWQ+4pwmgvZQ1i89GgEiFAPgEQYQIaFn6D6Tjv0u6FF2JdDhCXJy8EPlhHheuKVGmISV9LCQA1BKs+dltpdiUlJUO6lGium+TzwH0EivHMmnIbGdSHpjm2vHV7pza5bmMN9RWgygWVJ8aubm/vOhJV8Ta0HJTUlx7AIJnPUP+p3v6NZpkRIi4i/kPwLaGNyCz0FSmiR0dFnU60HWPwpZPdUaSHjqpaE4+WOhtEiNkdpKbMJtl6ZHwDiJbCNklv35D29iVjGFoBKAes6UXb7HAy1OT6xrmysmuFoMt8cGVLYB61uH6vsBfLV7g1IG4cTQ/VH/e1Z/be8GI1llNDBlw7A5Oub8km+/QMhHVLpnEhHNUQGU5OKPIEQBzuPy0dk+QPy8+sGXJtnqwAAAABJRU5ErkJggg==',
      n7 = w.div(({ theme: e }) => ({
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
        padding: '6px 10px',
        fontSize: 13,
        lineHeight: '18px',
      })),
      a7 = w.div(({ theme: e }) => ({
        lineHeight: '18px',
        position: 'relative',
        borderRadius: 5,
        display: 'block',
        minWidth: '80%',
        color: e.color.warningText,
        background: e.background.warning,
        border: `1px solid ${lr(0.5, e.color.warningText)}`,
        padding: 15,
        margin: 0,
      })),
      r7 = w(G)(({ theme: e }) => ({ color: e.color.darkest })),
      i7 = ({ onSkip: e, runningSecondBuild: t }) =>
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Make a change to this story'),
                a.createElement(
                  G,
                  { center: !0, muted: !0, block: !0 },
                  "In your code, adjust the markup, styling, or assets to see how visual testing works. Don't worry, you can undo it later. Here are a few ideas to get you started.",
                ),
              ),
              a.createElement(
                de,
                {
                  style: {
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    margin: '10px 0',
                  },
                },
                a.createElement(
                  ua,
                  { style: { margin: 0, alignItems: 'center', gap: '10px' } },
                  a.createElement('img', {
                    src: Xh,
                    alt: 'Color Palette',
                    style: { width: 32, height: 32 },
                  }),
                  'Shift the color palette',
                ),
                a.createElement(
                  ua,
                  { style: { margin: 0, alignItems: 'center', gap: '10px' } },
                  a.createElement('img', {
                    src: e7,
                    alt: 'Embiggen',
                    style: { width: 32, height: 32 },
                  }),
                  ' ',
                  'Embiggen the type',
                ),
                a.createElement(
                  ua,
                  { style: { margin: 0, alignItems: 'center', gap: '10px' } },
                  a.createElement('img', {
                    src: t7,
                    alt: 'Layout',
                    style: { width: 32, height: 32 },
                  }),
                  'Change the layout',
                ),
                a.createElement(
                  ua,
                  { style: { margin: 0, alignItems: 'center', gap: '10px' } },
                  a.createElement('img', {
                    src: Jh,
                    alt: 'Adjust',
                    style: { width: 32, height: 32 },
                  }),
                  'Adjust the size or scale',
                ),
              ),
              a.createElement(
                Ft,
                null,
                t
                  ? a.createElement(
                      a7,
                      null,
                      a.createElement(
                        r7,
                        null,
                        'No changes found in the Storybook you published. Make a UI tweak and try again to continue.',
                      ),
                    )
                  : a.createElement(n7, null, 'Awaiting changes...'),
                a.createElement(ue, { link: !0, onClick: e }, 'Skip walkthrough'),
              ),
            ),
          ),
        ),
      o7 = ({
        isRunning: e,
        setRunningSecondBuild: t,
        startBuild: n,
        setInitialGitHash: r,
        uncommittedHash: i,
      }) =>
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Changes detected'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  'Time to run your first visual tests to pinpoint the exact changes made to this story.',
                ),
              ),
              a.createElement(
                ue,
                {
                  variant: 'solid',
                  size: 'medium',
                  disabled: e,
                  onClick: () => {
                    t(!0),
                      n(),
                      setTimeout(() => {
                        r(i);
                      }, 1e4);
                  },
                },
                a.createElement($t, null),
                'Run visual tests',
              ),
            ),
          ),
        ),
      l7 = ({ localBuildProgress: e }) =>
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Running your first test'),
                a.createElement(
                  G,
                  { center: !0, muted: !0 },
                  "A new snapshot is being created in a standardized cloud browser. Once complete, you'll be able to pinpoint exactly what changed.",
                ),
              ),
              a.createElement(ni, { localBuildProgress: e }),
            ),
          ),
        ),
      s7 = ({ isUnchanged: e, localBuildProgress: t, ...n }) => (
        tt('Onboarding', 'CatchAChange'),
        n.isRunning && t
          ? a.createElement(l7, { localBuildProgress: t })
          : e
            ? a.createElement(i7, { ...n })
            : a.createElement(o7, { ...n })
      ),
      c7 = w.div(({ status: e, theme: t }) => ({
        position: 'relative',
        display: 'inline-flex',
        border: `1px solid ${e === 'positive' ? t.color.green : t.appBorderColor}`,
        borderRadius: 5,
        margin: '15px 15px 0',
        minHeight: 200,
        minWidth: 200,
        maxWidth: 500,
        img: { display: 'block', maxWidth: '100%' },
        svg: {
          position: 'absolute',
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          padding: 5,
          color: t.color.lightest,
          borderRadius: '50%',
          backgroundColor: t.color.green,
        },
      })),
      d7 = w.div({
        width: '100%',
        margin: 2,
        background: 'white',
        borderRadius: 3,
        overflow: 'hidden',
        div: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        },
      }),
      yo = ({ backgroundColor: e, status: t, thumbnailUrl: n }) =>
        a.createElement(
          c7,
          { status: t },
          a.createElement(
            d7,
            null,
            a.createElement(
              'div',
              { style: e ? { backgroundColor: e } : {} },
              a.createElement('img', { alt: 'Snapshot thumbnail', src: n }),
            ),
          ),
          t === 'positive' && a.createElement(ko, null),
        ),
      _1 = w(G)({ marginBottom: 5 }),
      Z1 = ({ onComplete: e, onSkip: t, ranSecondBuild: n = !1 }) => {
        tt('Onboarding', 'CatchAChangeComplete');
        let r = fn();
        return a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            { style: { overflowY: 'auto' } },
            n
              ? a.createElement(
                  de,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(fe, null, 'Nice. Your stories were saved as test baselines.'),
                    a.createElement(
                      G,
                      { center: !0, muted: !0, block: !0 },
                      'This story was indexed and snapshotted in a standardized cloud browser.',
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(yo, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: 'positive',
                      }),
                  ),
                  a.createElement(
                    Ft,
                    null,
                    a.createElement(_1, null, "You're ready to start testing!"),
                    a.createElement(ue, { variant: 'solid', size: 'medium', onClick: e }, 'Done'),
                    a.createElement(ue, { link: !0, onClick: t }, 'Skip walkthrough'),
                  ),
                )
              : a.createElement(
                  de,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(fe, null, 'Nice. You ran your first tests!'),
                    a.createElement(
                      G,
                      { center: !0, muted: !0, block: !0 },
                      'This story was indexed and snapshotted in a standardized cloud browser and changes were found.',
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(yo, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: 'positive',
                      }),
                  ),
                  a.createElement(
                    Ft,
                    null,
                    a.createElement(_1, null, "It's time to review changes!"),
                    a.createElement(
                      ue,
                      { variant: 'solid', size: 'medium', onClick: e },
                      'Take a tour',
                    ),
                    a.createElement(ue, { link: !0, onClick: t }, 'Skip walkthrough'),
                  ),
                ),
          ),
        );
      },
      I1 = () =>
        a.createElement(
          'div',
          null,
          a.createElement(pn, null),
          a.createElement(fe, null, 'Get started with visual testing'),
          a.createElement(
            G,
            { center: !0, muted: !0 },
            'Take an image snapshot of your stories to save their "last known good state" as test baselines.',
          ),
        ),
      u7 = ({ isRunning: e, localBuildProgress: t, startBuild: n, onSkip: r }) => (
        tt('Onboarding', 'InitialBuild'),
        a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            t
              ? a.createElement(
                  de,
                  null,
                  a.createElement(I1, null),
                  a.createElement(ni, { localBuildProgress: t }),
                )
              : a.createElement(
                  de,
                  null,
                  a.createElement(I1, null),
                  a.createElement(
                    Ft,
                    null,
                    a.createElement(
                      ue,
                      { disabled: e, size: 'medium', variant: 'solid', onClick: n },
                      'Take snapshots',
                    ),
                    a.createElement(ue, { onClick: r, link: !0 }, 'Skip walkthrough'),
                  ),
                ),
          ),
        )
      ),
      m7 = w(G)({ marginBottom: 5 }),
      p7 = ({ onCatchAChange: e, onSkip: t }) => {
        tt('Onboarding', 'InitialBuildComplete');
        let n = fn();
        return a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            ye,
            null,
            a.createElement(
              de,
              null,
              a.createElement(
                'div',
                null,
                a.createElement(fe, null, 'Nice. Your stories were saved as test baselines.'),
                a.createElement(
                  G,
                  { center: !0, muted: !0, block: !0 },
                  'This story was indexed and snapshotted in a standardized cloud browser.',
                ),
                n?.selectedComparison?.headCapture?.captureImage &&
                  a.createElement(yo, {
                    ...n?.selectedComparison?.headCapture.captureImage,
                    status: 'positive',
                  }),
              ),
              a.createElement(
                Ft,
                null,
                a.createElement(
                  m7,
                  { muted: !0 },
                  "Let's see the superpower of catching visual changes.",
                ),
                a.createElement(
                  ue,
                  { variant: 'solid', size: 'medium', onClick: e },
                  'Catch a UI change',
                ),
                a.createElement(ue, { link: !0, onClick: t }, 'Skip walkthrough'),
              ),
            ),
          ),
        );
      },
      h7 = ({
        dismissBuildError: e,
        localBuildProgress: t,
        showInitialBuildScreen: n,
        gitInfo: r,
        lastBuildHasChangesForStory: i,
        onComplete: o,
        onSkip: l,
      }) => {
        let { isRunning: s, startBuild: c } = Za(),
          [d, u] = rt('showInitialBuild', n);
        oe(() => {
          n && u(!0);
        }, [n, u]);
        let [m, p] = rt('showCatchAChange', !d),
          [g, f] = rt('initialGitHash', r.uncommittedHash),
          y = () => {
            f(r.uncommittedHash), p(!0);
          },
          [k, b] = rt('runningSecondBuild', !1);
        return t?.currentStep === 'error'
          ? a.createElement(
              Qh,
              { localBuildProgress: t },
              a.createElement(
                Ft,
                null,
                a.createElement(ue, { variant: 'solid', size: 'medium', onClick: c }, 'Try again'),
                a.createElement(ue, { link: !0, onClick: l }, 'Skip walkthrough'),
              ),
            )
          : t?.currentStep === 'limited'
            ? a.createElement(
                b0,
                { billingUrl: t.errorDetailsUrl, suspensionReason: 'EXCEEDED_THRESHOLD' },
                a.createElement(ue, { link: !0, onClick: e }, 'Continue'),
              )
            : d && (!t || (t && s))
              ? a.createElement(u7, {
                  isRunning: s,
                  localBuildProgress: t,
                  startBuild: c,
                  onSkip: l,
                })
              : t?.currentStep === 'complete' && !m && !k
                ? i
                  ? a.createElement(Z1, { onComplete: o, onSkip: l })
                  : a.createElement(p7, { onCatchAChange: y, onSkip: l })
                : m && !i
                  ? a.createElement(s7, {
                      isRunning: s,
                      isUnchanged: g === r.uncommittedHash,
                      localBuildProgress: t,
                      onSkip: l,
                      runningSecondBuild: k,
                      setInitialGitHash: f,
                      setRunningSecondBuild: b,
                      startBuild: c,
                      uncommittedHash: r.uncommittedHash,
                    })
                  : i
                    ? a.createElement(Z1, { onComplete: o, onSkip: l, ranSecondBuild: m && k })
                    : null;
      },
      f7 = w.div(({ theme: e }) => ({
        background: e.background.app,
        padding: '10px 15px',
        lineHeight: '20px',
        color: e.color.defaultText,
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      g7 = Ht({ from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(359deg)' } }),
      v7 = w(ss)({ animation: `${g7} 1s linear infinite` }),
      nr = { width: 10, marginRight: 8 },
      R1 = w.button(({ isWarning: e, onClick: t, theme: n }) => {
        let r = n.base === 'light' ? n.background.warning : '#2e271a';
        return {
          position: 'relative',
          display: 'flex',
          width: '100%',
          lineHeight: '20px',
          padding: '5px 7px 5px 15px',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: e ? r : n.background.app,
          border: 'none',
          borderBottom: `1px solid ${n.appBorderColor}`,
          color: n.color.defaultText,
          cursor: t ? 'pointer' : 'default',
          textAlign: 'left',
          '& > *': { zIndex: 1 },
          code: { fontFamily: n.typography.fonts.mono, fontSize: '12px' },
        };
      }),
      B1 = w.div(({ isWarning: e, percentage: t, theme: n }) => {
        let r = n.base === 'light' ? '#FFE6B1' : '#43361f';
        return {
          display: 'block',
          position: 'absolute',
          top: '0',
          height: '100%',
          left: '0',
          width: `${t}%`,
          transition: 'width 3s ease-out',
          backgroundColor: e ? r : n.background.hoverable,
          pointerEvents: 'none',
          zIndex: 0,
        };
      }),
      ar = w.div({ padding: '5px 0' }),
      y7 = w.div(({ expanded: e, theme: t }) => ({
        display: 'grid',
        gridTemplateRows: e ? '1fr' : '0fr',
        background: t.background.app,
        borderBottom: e ? `1px solid ${t.appBorderColor}` : 'none',
        transition: 'grid-template-rows 150ms ease-out',
      })),
      b7 = w.div(({ theme: e }) => ({
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: e.base === 'light' ? e.color.dark : e.color.lightest,
      })),
      E7 = w.div(({ isCurrent: e, isFailed: t, isPending: n, theme: r }) => ({
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        opacity: n ? 0.7 : 1,
        color: t ? r.color.negativeText : 'inherit',
        fontWeight: e || t ? 'bold' : 'normal',
        fontFamily: 'Menlo, monospace',
        fontSize: 12,
        lineHeight: '24px',
        margin: '0 15px',
        '&:first-of-type': { marginTop: 10 },
        '&:last-of-type': { marginBottom: 10 },
        '& > div': { display: 'flex', alignItems: 'center' },
      })),
      k7 = ({ localBuildProgress: e, expanded: t = !1 }) => {
        let n = Pe({});
        oe(() => {
          n.current[e.currentStep] = { ...e };
        }, [e]);
        let r = ['aborted', 'error'].includes(e.currentStep),
          i = Xi.map((o) => {
            let { startedAt: l, completedAt: s } = e.stepProgress[o],
              c = !!l && !s,
              d = c && r,
              u = !l,
              m = { ...Ts[o], isCurrent: c, isFailed: d, isPending: u };
            return d
              ? { ...m, icon: a.createElement(Wt, { style: nr }), renderLabel: m.renderProgress }
              : c
                ? { ...m, icon: a.createElement(v7, { style: nr }), renderLabel: m.renderProgress }
                : u
                  ? { ...m, icon: a.createElement(_d, { style: nr }), renderLabel: m.renderName }
                  : {
                      ...m,
                      icon: a.createElement(ko, { style: nr }),
                      renderLabel: m.renderComplete,
                    };
          });
        return a.createElement(
          y7,
          { expanded: t },
          a.createElement(
            b7,
            null,
            i.map(({ icon: o, isCurrent: l, isFailed: s, isPending: c, key: d, renderLabel: u }) =>
              a.createElement(
                E7,
                { isCurrent: l, isFailed: s, isPending: c, key: d },
                a.createElement('div', null, o, u(n.current[d] || e)),
              ),
            ),
          ),
        );
      },
      w7 = ({
        branch: e,
        dismissBuildError: t,
        localBuildProgress: n,
        lastBuildOnBranchInProgress: r,
        switchToLastBuildOnBranch: i,
      }) => {
        let [o, l] = a.useState(!1),
          s = () => {
            l(!o);
          };
        if (n) {
          let d = n.currentStep === 'aborted',
            u = n.currentStep === 'error',
            m = d || u;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              R1,
              { as: u ? 'div' : 'button', onClick: u ? void 0 : s, isWarning: m },
              a.createElement(B1, { percentage: n.buildProgressPercentage, isWarning: m }),
              a.createElement(
                ar,
                null,
                a.createElement(Lo, { localBuildProgress: n, withEmoji: !0 }),
              ),
              u
                ? a.createElement(
                    ot,
                    { onClick: t },
                    a.createElement(wo, { 'aria-label': 'Dismiss' }),
                  )
                : a.createElement(
                    ot,
                    { as: 'div' },
                    o ? a.createElement(Id, null) : a.createElement(Zd, null),
                  ),
            ),
            a.createElement(k7, { localBuildProgress: n, expanded: o || u }),
          );
        }
        function c() {
          return i
            ? r
              ? a.createElement(
                  ar,
                  null,
                  "Reviewing is disabled because there's a newer build in progress on",
                  ' ',
                  a.createElement(De, null, e),
                  '. This can happen when a build runs in CI.',
                )
              : a.createElement(
                  ar,
                  null,
                  "There's a newer snapshot with changes.",
                  ' ',
                  a.createElement(bn, { withArrow: !0, onClick: i }, 'Switch to newer snapshot'),
                )
            : a.createElement(
                ar,
                null,
                "Reviewing is disabled because there's a newer build on ",
                a.createElement(De, null, e),
                '.',
              );
        }
        return a.createElement(R1, { onClick: i }, a.createElement(B1, { percentage: 100 }), c());
      },
      C7 = ({ onClose: e }) =>
        a.createElement(
          t0,
          null,
          a.createElement(
            oo,
            null,
            a.createElement(
              kr,
              null,
              'Render settings',
              a.createElement(Vl, null),
              a.createElement(Po, { onClick: e }, a.createElement(Bo, { 'aria-label': 'Close' })),
            ),
            a.createElement('p', null, a.createElement(em, null), 'Delay: 300ms'),
            a.createElement('p', null, a.createElement(tm, null), 'Animation pause: Ends'),
            a.createElement('p', null, a.createElement(nm, null), 'Threshold: 0.2'),
            a.createElement('p', null, a.createElement(am, null), 'Anti-alias: Included'),
          ),
          a.createElement(
            oo,
            null,
            a.createElement(kr, null, 'Bounding box', a.createElement(Vl, null)),
            a.createElement(
              'dl',
              null,
              a.createElement('dt', null, 'Width:'),
              a.createElement('dd', null, 'Fill viewport'),
              a.createElement('dt', null, 'Height:'),
              a.createElement('dd', null, 'Hug contents'),
            ),
          ),
        ),
      rc = {
        isReviewing: !1,
        userCanReview: !1,
        buildIsReviewable: !1,
        acceptTest: (e, t = 'SPEC') => Promise.resolve(),
        unacceptTest: (e, t = 'SPEC') => Promise.resolve(),
      },
      ic = Je(rc),
      oc = () => Ot(ic, 'ReviewTest'),
      S7 = ({ children: e, watchState: t = rc }) => a.createElement(ic.Provider, { value: t }, e),
      x7 = w.div(
        ({ theme: e }) => ({
          position: 'relative',
          display: 'flex',
          background: 'transparent',
          overflow: 'hidden',
          margin: 2,
          maxWidth: 'calc(100% - 4px)',
          '& > div': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            p: { maxWidth: 380, textAlign: 'center' },
            svg: { width: 24, height: 24 },
          },
          '& > svg': {
            position: 'absolute',
            left: 'calc(50% - 14px)',
            top: 'calc(50% - 14px)',
            width: 20,
            height: 20,
            color: e.color.lightest,
            opacity: 0,
            transition: 'opacity 0.1s ease-in-out',
            pointerEvents: 'none',
          },
        }),
        ({ href: e }) =>
          e && {
            display: 'inline-flex',
            cursor: 'pointer',
            '&:hover': { '& > svg': { opacity: 1 }, img: { filter: 'brightness(85%)' } },
          },
      ),
      P1 = w.div(({ isVisible: e }) => ({
        position: e ? 'static' : 'absolute',
        visibility: e ? 'visible' : 'hidden',
        maxWidth: '100%',
        minHeight: 100,
      })),
      rr = w.img({
        display: 'block',
        width: '100%',
        height: 'auto',
        transition: 'filter 0.1s ease-in-out, opacity 0.1s ease-in-out',
        '&[data-overlay]': {
          position: 'absolute',
          opacity: 0.7,
          pointerEvents: 'none',
          transition: 'opacity 0.1s ease-in-out',
        },
      }),
      M7 = w(de)({ margin: '30px 15px' }),
      N7 = ({ comparisonImageLoaded: e, focusImageLoaded: t, showDiff: n, showFocus: r }) =>
        n && r ? e && t : n ? e : r ? t : !0,
      F7 = ({
        componentName: e,
        storyName: t,
        testUrl: n,
        comparisonResult: r,
        latestImage: i,
        baselineImage: o,
        baselineImageVisible: l,
        diffImage: s,
        focusImage: c,
        diffVisible: d,
        focusVisible: u,
        ...m
      }) => {
        let p = en(),
          g = !!i && !!s && r === 'CHANGED',
          f = r === 'CAPTURE_ERROR',
          y = g && !!c,
          k = g ? { as: 'a', href: n, target: '_blank', title: 'View on Chromatic.com' } : {},
          b = g && d,
          h = y && u,
          [v, E] = a.useState(!1),
          [S, B] = a.useState(!1),
          [j, Y] = a.useState(!1),
          [J, ce] = a.useState(!1),
          Se = l ? S : v,
          Oe = N7({ comparisonImageLoaded: j, focusImageLoaded: J, showDiff: b, showFocus: h });
        return a.createElement(
          x7,
          { ...m, ...k },
          i &&
            a.createElement(
              P1,
              {
                isVisible: !o || !l,
                style: { aspectRatio: `${i.imageWidth} / ${i.imageHeight}`, width: i.imageWidth },
              },
              (!v || !Oe) && a.createElement(io, null),
              a.createElement(rr, {
                alt: `Latest snapshot for the '${t}' story of the '${e}' component`,
                src: i.imageUrl,
                style: { opacity: v ? 1 : 0 },
                onLoad: () => E(!0),
              }),
            ),
          o &&
            a.createElement(
              P1,
              {
                isVisible: l,
                style: { aspectRatio: `${o.imageWidth} / ${o.imageHeight}`, width: o.imageWidth },
              },
              (!S || !Oe) && a.createElement(io, null),
              a.createElement(rr, {
                alt: `Baseline snapshot for the '${t}' story of the '${e}' component`,
                src: o.imageUrl,
                style: { opacity: S ? 1 : 0 },
                onLoad: () => B(!0),
              }),
            ),
          g &&
            Se &&
            a.createElement(rr, {
              alt: '',
              'data-overlay': 'diff',
              src: s.imageUrl,
              style: {
                width: s.imageWidth,
                maxWidth: `${(s.imageWidth / i.imageWidth) * 100}%`,
                opacity: b && j ? 0.7 : 0,
              },
              onLoad: () => Y(!0),
            }),
          y &&
            Se &&
            a.createElement(rr, {
              alt: '',
              'data-overlay': 'focus',
              src: c.imageUrl,
              style: {
                width: c.imageWidth,
                maxWidth: `${(c.imageWidth / i.imageWidth) * 100}%`,
                opacity: h && J ? 0.7 : 0,
                filter: h ? 'blur(2px)' : 'none',
              },
              onLoad: () => ce(!0),
            }),
          g && a.createElement(os, null),
          f &&
            !i &&
            a.createElement(
              M7,
              null,
              a.createElement(bd, { color: p.base === 'light' ? 'currentColor' : p.color.medium }),
              a.createElement(
                G,
                { center: !0, muted: !0 },
                "A snapshot couldn't be captured. This often occurs when a story has a code error. Confirm that this story successfully renders in your local Storybook and run the build again.",
              ),
            ),
        );
      },
      A7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('path', {
            d: 'M5.06982 9.68493L7.99484 4.63927L14.5786 4.62406C14.5252 4.52043 14.4696 4.41742 14.4109 4.31532C12.372 0.768556 7.84405 -0.453864 4.29726 1.58495C3.24614 2.1892 2.39921 3.01211 1.78076 3.96327L5.06982 9.68493Z',
            fill: '#DB4437',
          }),
          a.createElement('path', {
            d: 'M10.9276 9.68457L5.09539 9.6743L1.79036 3.98022C1.72727 4.07822 1.66591 4.17795 1.60682 4.27985C-0.445348 7.81892 0.759985 12.3515 4.29905 14.4037C5.34791 15.0118 6.48403 15.3338 7.617 15.3939L10.9276 9.68457Z',
            fill: '#0F9D58',
          }),
          a.createElement('path', {
            d: 'M7.98649 4.61194L10.9032 9.66241L7.63525 15.3778C7.75167 15.3833 7.86871 15.3863 7.98649 15.3863C12.0775 15.3863 15.3939 12.0699 15.3939 7.97893C15.3939 6.76648 15.1025 5.62211 14.5861 4.61194L7.98649 4.61194Z',
            fill: '#FFCD40',
          }),
          a.createElement('path', {
            d: 'M8.01367 4.6366V6.40005L14.613 4.6366H8.01367Z',
            fill: 'url(#paint0_radial_466_21161)',
          }),
          a.createElement('path', {
            d: 'M1.78198 4.00098L6.60102 8.8192L5.09764 9.687L1.78198 4.00098Z',
            fill: 'url(#paint1_radial_466_21161)',
          }),
          a.createElement('path', {
            d: 'M7.6626 15.4017L9.42689 8.81921L10.9303 9.68702L7.6626 15.4017Z',
            fill: 'url(#paint2_radial_466_21161)',
          }),
          a.createElement('ellipse', {
            cx: '8.01347',
            cy: '8.00358',
            rx: '3.36699',
            ry: '3.36699',
            fill: '#F1F1F1',
          }),
          a.createElement('ellipse', {
            cx: '8.01367',
            cy: '8.00354',
            rx: '2.69361',
            ry: '2.6936',
            fill: '#4285F4',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'radialGradient',
              {
                id: 'paint0_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(7.69229 4.63226) scale(7.07721 1.89116)',
              },
              a.createElement('stop', { stopColor: '#3E2723', stopOpacity: '0.2' }),
              a.createElement('stop', { offset: '1', stopColor: '#3E2723', stopOpacity: '0.01' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(1.77445 4.00677) scale(6.56938 7.75127)',
              },
              a.createElement('stop', { stopColor: '#3E2723', stopOpacity: '0.2' }),
              a.createElement('stop', { offset: '1', stopColor: '#3E2723', stopOpacity: '0.01' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint2_radial_466_21161',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(8.00025 8.01489) scale(7.39644 14.8995)',
              },
              a.createElement('stop', { stopColor: '#263238', stopOpacity: '0.2' }),
              a.createElement('stop', { offset: '1', stopColor: '#263238', stopOpacity: '0.01' }),
            ),
          ),
        ),
      O7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('circle', {
            cx: '8.00009',
            cy: '7.99997',
            r: '7.7037',
            fill: 'url(#paint0_linear_466_21186)',
          }),
          a.createElement('ellipse', {
            cx: '8.00094',
            cy: '8.00094',
            rx: '7.06173',
            ry: '7.06173',
            fill: 'url(#paint1_radial_466_21186)',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z',
            fill: '#EE4444',
          }),
          a.createElement('path', {
            d: 'M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z',
            fill: '#CC0000',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z',
            fill: '#AAAAAA',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21186',
                x1: '0.300303',
                y1: '0.300951',
                x2: '0.300303',
                y2: '15.7084',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { stopColor: '#F8F8F8' }),
              a.createElement('stop', { offset: '1', stopColor: '#CCCCCC' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21186',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(8.00216 8.0046) scale(7.06173)',
              },
              a.createElement('stop', { stopColor: '#00F0FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#0070E0' }),
            ),
          ),
        ),
      L7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('path', {
            d: 'M14.9596 5.19849C14.6332 4.41337 13.9721 3.56574 13.453 3.29783C13.8755 4.12612 14.12 4.95699 14.2134 5.57708C14.2134 5.5783 14.2139 5.58133 14.2149 5.58958C13.3657 3.47293 11.9257 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572865 10.573 0.473553C10.5434 0.422834 10.5159 0.371004 10.4903 0.318178C10.4414 0.223861 10.4038 0.124166 10.378 0.0211155C10.3782 0.0162369 10.3765 0.0114673 10.3734 0.00774353C10.3702 0.0040198 10.3658 0.00161108 10.3609 0.000990505C10.3563 -0.000330168 10.3515 -0.000330168 10.3468 0.000990505C10.3458 0.0013655 10.3442 0.00258425 10.3431 0.00302175C10.3414 0.003678 10.3393 0.005178 10.3376 0.00614675C10.3384 0.00502175 10.3402 0.0024905 10.3407 0.00189675C8.45416 1.10677 7.81416 3.15068 7.75535 4.17327C7.00199 4.22506 6.28171 4.50262 5.68841 4.96977C5.62629 4.9173 5.56135 4.86827 5.49388 4.8229C5.3227 4.22402 5.31543 3.59017 5.47282 2.98752C4.70132 3.3388 4.10126 3.89408 3.66501 4.3844H3.66154C3.36382 4.0073 3.38482 2.76337 3.40179 2.50365C3.39822 2.48755 3.17969 2.61708 3.15107 2.63662C2.88835 2.82414 2.64275 3.03454 2.41713 3.26537C2.16039 3.52573 1.92581 3.80705 1.71582 4.1064C1.71582 4.10677 1.7156 4.10721 1.71547 4.10758C1.71547 4.10718 1.71569 4.10677 1.71582 4.1064C1.23289 4.79075 0.890387 5.56404 0.7081 6.38155C0.704506 6.39783 0.701475 6.41471 0.697975 6.43112C0.68385 6.49724 0.632975 6.82799 0.624068 6.89987C0.623381 6.9054 0.623068 6.91071 0.622412 6.91624C0.556638 7.2582 0.515905 7.60451 0.500537 7.9524C0.500537 7.96521 0.499756 7.9779 0.499756 7.99074C0.499881 12.138 3.86238 15.5 8.01001 15.5C11.7245 15.5 14.8088 12.8035 15.4126 9.26152C15.4253 9.1654 15.4355 9.06877 15.4467 8.9718C15.596 7.68399 15.4301 6.3304 14.9596 5.19849ZM6.30351 11.0764C6.33863 11.0932 6.37163 11.1116 6.40769 11.1276C6.40919 11.1287 6.41126 11.1298 6.41279 11.1308C6.37608 11.1132 6.33965 11.0951 6.30351 11.0764ZM14.2155 5.59143L14.2145 5.58415C14.2149 5.5868 14.2153 5.58958 14.2158 5.59224L14.2155 5.59143Z',
            fill: 'url(#paint0_linear_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z',
            fill: 'url(#paint1_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z',
            fill: 'url(#paint2_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M11.3101 6.08127C11.3265 6.09277 11.3413 6.10421 11.3567 6.11564C11.1683 5.78113 10.9336 5.47487 10.6596 5.20589C8.32502 2.87164 10.0474 0.144581 10.3379 0.00608106C10.3387 0.00495606 10.3405 0.0024248 10.341 0.00183105C8.45443 1.10671 7.81443 3.15061 7.75562 4.17321C7.84312 4.16714 7.93037 4.1598 8.01943 4.1598C9.42727 4.1598 10.6535 4.93386 11.3101 6.08127Z',
            fill: 'url(#paint3_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z',
            fill: 'url(#paint4_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z',
            fill: 'url(#paint5_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M5.3385 4.71992C5.39081 4.75366 5.4427 4.78804 5.49416 4.82305C5.32298 4.22417 5.31571 3.59032 5.4731 2.98767C4.7016 3.33895 4.10153 3.89423 3.66528 4.38455C3.70138 4.38351 4.79072 4.36392 5.3385 4.71992Z',
            fill: 'url(#paint6_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M0.569399 8.16902C1.14887 11.5933 4.25305 14.2078 7.77665 14.3076C11.0379 14.3999 13.1216 12.507 13.9821 10.6602C14.5384 9.46646 14.9245 7.51333 14.2159 5.59224L14.2156 5.59142L14.2146 5.58414C14.2138 5.57858 14.2134 5.57527 14.2135 5.57708C14.2135 5.5783 14.214 5.58133 14.215 5.58958C14.4813 7.32899 13.5965 9.01408 12.2134 10.1535L12.2092 10.1632C9.51406 12.3577 6.93502 11.4872 6.41284 11.1309C6.37613 11.1133 6.33967 11.0951 6.30346 11.0765C4.73215 10.3255 4.08302 8.89402 4.22221 7.66633C2.89543 7.66633 2.44302 6.5473 2.44302 6.5473C2.44302 6.5473 3.63424 5.69796 5.20421 6.43664C6.65827 7.1208 8.02384 6.54736 8.02399 6.5473C8.02121 6.4863 6.71409 5.96636 6.20452 5.4643C5.93224 5.19605 5.80296 5.06671 5.68846 4.96967C5.62634 4.91721 5.5614 4.86817 5.49393 4.8228C5.44241 4.78788 5.39052 4.7535 5.33827 4.71967C4.79052 4.36367 3.70115 4.38327 3.66505 4.38421H3.66159C3.36387 4.00711 3.38487 2.76317 3.40184 2.50346C3.39827 2.48736 3.17974 2.61689 3.15112 2.63642C2.8884 2.82395 2.6428 3.03435 2.41718 3.26517C2.16043 3.5256 1.92585 3.80698 1.71587 4.10639C1.71587 4.10677 1.71565 4.10721 1.71552 4.10758C1.71552 4.10717 1.71574 4.10677 1.71587 4.10639C1.23294 4.79075 0.890436 5.56403 0.708149 6.38155C0.704555 6.39783 0.437836 7.56411 0.569399 8.16902Z',
            fill: 'url(#paint7_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M10.6595 5.2058C10.9335 5.47478 11.1682 5.78104 11.3566 6.11555C11.398 6.14662 11.4366 6.17759 11.4694 6.2078C13.172 7.77655 12.2799 9.9953 12.2134 10.1534C13.5965 9.01405 14.4813 7.32896 14.215 5.58955C13.3657 3.47293 11.9258 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572866 10.573 0.473553C10.5435 0.422834 10.5159 0.371004 10.4903 0.318178C10.4415 0.223861 10.4038 0.124166 10.3781 0.0211155C10.3782 0.0162369 10.3766 0.0114673 10.3734 0.00774353C10.3703 0.0040198 10.3658 0.00161108 10.361 0.000990505C10.3564 -0.000330168 10.3515 -0.000330168 10.3469 0.000990505C10.3458 0.0013655 10.3443 0.00258425 10.3431 0.00302176C10.3415 0.003678 10.3394 0.00517801 10.3376 0.00614676C10.0473 0.144522 8.32493 2.87158 10.6595 5.2058Z',
            fill: 'url(#paint8_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M11.4694 6.20779C11.4366 6.17757 11.398 6.1466 11.3566 6.11554C11.3413 6.10404 11.3263 6.0926 11.31 6.08117C10.909 5.79948 10.1909 5.52126 9.49912 5.64157C12.2004 6.99201 11.4752 11.6424 7.73209 11.4668C7.39876 11.4532 7.06935 11.3897 6.75487 11.2784C6.6805 11.2504 6.60694 11.2203 6.53428 11.1882C6.4919 11.1689 6.44956 11.1493 6.40771 11.1277C6.40921 11.1287 6.41128 11.1299 6.41281 11.1308C6.935 11.4871 9.51403 12.3576 12.2092 10.1631L12.2133 10.1534C12.2799 9.99542 13.1719 7.77657 11.4694 6.20779Z',
            fill: 'url(#paint9_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M4.63871 8.67006C4.63871 8.67006 4.98537 7.37834 7.12096 7.37834C7.35183 7.37834 8.01187 6.73412 8.02408 6.54731C8.0363 6.36049 6.65846 7.12081 5.2043 6.43665C3.63433 5.69796 2.44312 6.54731 2.44312 6.54731C2.44312 6.54731 2.89552 7.66634 4.2223 7.66634C4.08315 8.89402 4.73227 10.3257 6.30355 11.0765C6.33868 11.0932 6.37168 11.1116 6.40774 11.1277C5.49062 10.6537 4.7333 9.75787 4.63871 8.67006Z',
            fill: 'url(#paint10_radial_466_21172)',
          }),
          a.createElement('path', {
            d: 'M14.9597 5.19849C14.6333 4.41337 13.9722 3.56574 13.4531 3.29783C13.8756 4.12612 14.1201 4.95699 14.2136 5.57708C14.2136 5.5783 14.214 5.58133 14.215 5.58958C13.3658 3.47293 11.9258 2.61943 10.75 0.761053C10.6906 0.667084 10.6311 0.572865 10.5731 0.473553C10.5436 0.422834 10.516 0.371004 10.4904 0.318178C10.4416 0.223861 10.4039 0.124166 10.3781 0.0211155C10.3783 0.0162369 10.3767 0.0114673 10.3735 0.00774353C10.3703 0.0040198 10.3659 0.00161108 10.3611 0.000990505C10.3565 -0.000330168 10.3516 -0.000330168 10.347 0.000990505C10.3459 0.0013655 10.3443 0.00258425 10.3432 0.00302175C10.3416 0.003678 10.3395 0.005178 10.3377 0.00614675C10.3386 0.00502175 10.3403 0.0024905 10.3408 0.00189675C8.45428 1.10677 7.81428 3.15068 7.75547 4.17327C7.84297 4.16721 7.93022 4.15987 8.01928 4.15987C9.42719 4.15987 10.6534 4.93393 11.3099 6.08124C10.9089 5.79955 10.1908 5.52133 9.49906 5.64165C12.2003 6.99208 11.4752 11.6425 7.73203 11.4669C7.3987 11.4533 7.06929 11.3898 6.75481 11.2784C6.68044 11.2505 6.60688 11.2204 6.53422 11.1882C6.49184 11.1689 6.4495 11.1494 6.40766 11.1278C6.40916 11.1288 6.41122 11.13 6.41275 11.1309C6.37605 11.1132 6.33958 11.0951 6.30337 11.0764C6.3385 11.0932 6.3715 11.1116 6.40756 11.1276C5.49038 10.6536 4.73306 9.75786 4.63847 8.67005C4.63847 8.67005 4.98513 7.37833 7.12072 7.37833C7.35159 7.37833 8.01162 6.73412 8.02384 6.5473C8.02106 6.4863 6.71394 5.96637 6.20437 5.4643C5.93209 5.19605 5.80281 5.06671 5.68831 4.96968C5.62619 4.91721 5.56125 4.86818 5.49378 4.8228C5.3226 4.22393 5.31533 3.59008 5.47272 2.98743C4.70122 3.33871 4.10116 3.89399 3.66491 4.3843H3.66144C3.36372 4.00721 3.38472 2.76327 3.40169 2.50355C3.39812 2.48746 3.17959 2.61699 3.15097 2.63652C2.88825 2.82404 2.64265 3.03445 2.41703 3.26527C2.16036 3.52567 1.92585 3.80702 1.71594 4.1064C1.71594 4.10677 1.71572 4.10721 1.71559 4.10758C1.71559 4.10718 1.71581 4.10677 1.71594 4.1064C1.23301 4.79075 0.890506 5.56404 0.708219 6.38155C0.704625 6.39783 0.701594 6.41471 0.698094 6.43112C0.683969 6.49724 0.620406 6.83277 0.611531 6.90474C0.610844 6.91027 0.612187 6.89924 0.611531 6.90474C0.553567 7.25147 0.516583 7.60137 0.500781 7.95255C0.500781 7.96537 0.5 7.97805 0.5 7.9909C0.5 12.138 3.8625 15.5 8.01012 15.5C11.7247 15.5 14.8089 12.8035 15.4127 9.26152C15.4254 9.1654 15.4356 9.06877 15.4468 8.9718C15.5961 7.68399 15.4302 6.3304 14.9597 5.19849ZM14.2147 5.58415C14.2151 5.5868 14.2155 5.58958 14.2159 5.59224L14.2157 5.59143L14.2147 5.58415Z',
            fill: 'url(#paint11_linear_466_21172)',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21172',
                x1: '13.5874',
                y1: '2.40249',
                x2: '1.52839',
                y2: '14.0351',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { offset: '0.05', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.37', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.53', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.7', stopColor: '#E31587' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(10.8936 1.72781) scale(15.3601 15.6187)',
              },
              a.createElement('stop', { offset: '0.13', stopColor: '#FFBD4F' }),
              a.createElement('stop', { offset: '0.28', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.47', stopColor: '#FF3750' }),
              a.createElement('stop', { offset: '0.78', stopColor: '#EB0878' }),
              a.createElement('stop', { offset: '0.86', stopColor: '#E50080' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint2_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(6.43979 8.1787) scale(15.7441 15.6187)',
              },
              a.createElement('stop', { offset: '0.3', stopColor: '#960E18' }),
              a.createElement('stop', {
                offset: '0.35',
                stopColor: '#B11927',
                stopOpacity: '0.74',
              }),
              a.createElement('stop', {
                offset: '0.43',
                stopColor: '#DB293D',
                stopOpacity: '0.34',
              }),
              a.createElement('stop', { offset: '0.5', stopColor: '#F5334B', stopOpacity: '0.09' }),
              a.createElement('stop', { offset: '0.53', stopColor: '#FF3750', stopOpacity: '0' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint3_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(9.48415 -0.731827) scale(5.04157 8.55934)',
              },
              a.createElement('stop', { offset: '0.13', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.53', stopColor: '#FF980E' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint4_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(6.15707 12.2109) scale(6.67134 7.31187)',
              },
              a.createElement('stop', { offset: '0.35', stopColor: '#3A8EE6' }),
              a.createElement('stop', { offset: '0.67', stopColor: '#9059FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#C139E6' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint5_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(7.29699 6.57271) scale(3.54248 4.314)',
              },
              a.createElement('stop', { offset: '0.21', stopColor: '#9059FF', stopOpacity: '0' }),
              a.createElement('stop', { offset: '0.97', stopColor: '#6E008B', stopOpacity: '0.6' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint6_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(7.50592 1.1523) scale(5.30374 5.32259)',
              },
              a.createElement('stop', { offset: '0.1', stopColor: '#FFE226' }),
              a.createElement('stop', { offset: '0.79', stopColor: '#FF7139' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint7_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(12.3495 -2.33951) scale(25.3212 21.2557)',
              },
              a.createElement('stop', { offset: '0.11', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.46', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.72', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.9', stopColor: '#E31587' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint8_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform:
                  'translate(2.94576 4.67997) rotate(77.3946) scale(8.03354 34.7519)',
              },
              a.createElement('stop', { stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.3', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.57', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.74', stopColor: '#E31587' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint9_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(7.56027 3.06659) scale(14.5381 14.2827)',
              },
              a.createElement('stop', { offset: '0.14', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.48', stopColor: '#FF980E' }),
              a.createElement('stop', { offset: '0.66', stopColor: '#FF3647' }),
              a.createElement('stop', { offset: '0.9', stopColor: '#E31587' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint10_radial_466_21172',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(11.3337 3.90193) scale(17.4743 15.6328)',
              },
              a.createElement('stop', { offset: '0.09', stopColor: '#FFF44F' }),
              a.createElement('stop', { offset: '0.63', stopColor: '#FF980E' }),
            ),
            a.createElement(
              'linearGradient',
              {
                id: 'paint11_linear_466_21172',
                x1: '12.5',
                y1: '2.16999',
                x2: '2.85701',
                y2: '12.7061',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { offset: '0.17', stopColor: '#FFF44F', stopOpacity: '0.8' }),
              a.createElement('stop', { offset: '0.6', stopColor: '#FFF44F', stopOpacity: '0' }),
            ),
          ),
        ),
      T7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '16',
            height: '16',
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            ...e,
          },
          a.createElement('circle', {
            cx: '8.00009',
            cy: '7.99997',
            r: '7.7037',
            fill: 'url(#paint0_linear_466_21186)',
          }),
          a.createElement('ellipse', {
            cx: '8.00094',
            cy: '8.00094',
            rx: '7.06173',
            ry: '7.06173',
            fill: 'url(#paint1_radial_466_21186)',
          }),
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z',
            fill: '#DDDDDD',
          }),
          a.createElement('path', {
            d: 'M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z',
            fill: '#EE4444',
          }),
          a.createElement('path', {
            d: 'M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z',
            fill: '#CC0000',
          }),
          a.createElement('path', {
            d: 'M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z',
            fill: '#AAAAAA',
          }),
          a.createElement(
            'defs',
            null,
            a.createElement(
              'linearGradient',
              {
                id: 'paint0_linear_466_21186',
                x1: '0.300303',
                y1: '0.300951',
                x2: '0.300303',
                y2: '15.7084',
                gradientUnits: 'userSpaceOnUse',
              },
              a.createElement('stop', { stopColor: '#F8F8F8' }),
              a.createElement('stop', { offset: '1', stopColor: '#CCCCCC' }),
            ),
            a.createElement(
              'radialGradient',
              {
                id: 'paint1_radial_466_21186',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(8.00216 8.0046) scale(7.06173)',
              },
              a.createElement('stop', { stopColor: '#00F0FF' }),
              a.createElement('stop', { offset: '1', stopColor: '#0070E0' }),
            ),
          ),
        ),
      V1 = {
        CHROME: a.createElement(A7, { alt: 'Chrome' }),
        FIREFOX: a.createElement(L7, { alt: 'Firefox' }),
        SAFARI: a.createElement(T7, { alt: 'Safari' }),
        EDGE: a.createElement(O7, { alt: 'Edge' }),
      },
      _7 = w.div(({ theme: e }) => ({
        alignItems: 'center',
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'inline-flex',
        gap: 6,
        height: 16,
        margin: '6px 7px',
        svg: { verticalAlign: 'top' },
      })),
      j1 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'none',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        '@container (min-width: 300px)': { display: 'inline-block' },
        '+ svg': { color: e.base === 'light' ? e.color.dark : e.color.light },
        'button:hover > &, button:hover > & + svg': { color: e.color.secondary },
      })),
      Z7 = ({ isAccepted: e, selectedBrowser: t, browserResults: n, onSelectBrowser: r }) => {
        en();
        let i = Rr(n.map(({ result: s }) => s));
        if (!i) return null;
        let o = V1[t.key];
        !e && i !== 'EQUAL' && n.length >= 2 && (o = a.createElement(Er, { status: i }, o));
        let l =
          n.length > 1 &&
          n.map(({ browser: s, result: c }) => ({
            active: t === s,
            id: s.id,
            onClick: () => r(s),
            right: !e && c !== 'EQUAL' && a.createElement(Us, { status: c }),
            icon: V1[s.key],
            title: s.name,
          }));
        return a.createElement(
          Le,
          {
            key: t.key,
            hasChrome: !1,
            placement: 'top',
            trigger: 'hover',
            tooltip: a.createElement(je, {
              note: l ? 'Switch browser' : `Tested in ${n[0].browser.name}`,
            }),
          },
          l
            ? a.createElement(
                Ea,
                { placement: 'bottom', links: l },
                o,
                a.createElement(j1, null, t.name),
                a.createElement(ls, { size: 10 }),
              )
            : a.createElement(_7, null, o, a.createElement(j1, null, t.name)),
        );
      },
      I7 = w.div(({ theme: e }) => ({
        alignItems: 'center',
        color: e.base === 'light' ? e.color.darkest : e.color.light,
        display: 'inline-flex',
        gap: 6,
        height: 14,
        margin: '7px 7px',
        svg: {
          verticalAlign: 'top',
          path: { fill: e.base === 'light' ? e.color.dark : e.color.light },
        },
      })),
      R7 = w(Ea)(({ theme: e }) => ({
        button: {
          svg: {
            verticalAlign: 'top',
            path: { fill: e.base === 'light' ? e.color.dark : e.color.light },
          },
          '&:hover': { svg: { path: { fill: e.color.secondary } } },
        },
      })),
      H1 = w.span(({ theme: e }) => ({
        color: e.base === 'light' ? e.color.dark : e.color.light,
        display: 'none',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        '@container (min-width: 300px)': { display: 'inline-block' },
        'button:hover > &': { color: e.color.secondary },
      })),
      B7 = ({ isAccepted: e, modeOrder: t, modeResults: n, onSelectMode: r, selectedMode: i }) => {
        en();
        let o = Rr(n.map(({ result: c }) => c));
        if (!o) return null;
        let l = a.createElement(Ld, null);
        !e && o !== 'EQUAL' && n.length >= 2 && (l = a.createElement(Er, { status: o }, l));
        let s =
          n.length > 1 &&
          n
            .map(({ mode: c, result: d }) => ({
              id: c.name,
              title: c.name,
              right: !e && d !== 'EQUAL' && a.createElement(Us, { status: d }),
              onClick: () => r(c),
              active: i.name === c.name,
            }))
            .sort((c, d) => {
              if (!t) return 0;
              let u = t.indexOf(c.title),
                m = t.indexOf(d.title);
              return u !== -1 && m !== -1 ? u - m : 0;
            });
        return a.createElement(
          Le,
          {
            key: i.name,
            hasChrome: !1,
            placement: 'top',
            trigger: 'hover',
            tooltip: a.createElement(je, {
              note: s ? 'Switch mode' : `View mode: ${n[0].mode.name}`,
            }),
          },
          s
            ? a.createElement(
                R7,
                { placement: 'bottom', links: s },
                l,
                a.createElement(H1, null, i.name),
                a.createElement(ls, { size: 10 }),
              )
            : a.createElement(I7, null, l, a.createElement(H1, null, i.name)),
        );
      },
      D1 = () => {
        let e = fn(),
          { browserResults: t, modeResults: n } = e.summary;
        return a.createElement(
          qr,
          null,
          n.length > 0 &&
            e.selectedTest &&
            a.createElement(B7, {
              isAccepted: e.summary.status === 'ACCEPTED',
              modeOrder: e.modeOrder,
              selectedMode: e.selectedTest.mode,
              modeResults: n,
              onSelectMode: e.onSelectMode,
            }),
          t.length > 0 &&
            e.selectedComparison &&
            a.createElement(Z7, {
              isAccepted: e.summary.status === 'ACCEPTED',
              selectedBrowser: e.selectedComparison.browser,
              browserResults: t,
              onSelectBrowser: e.onSelectBrowser,
            }),
          a.createElement(lt, { push: !0 }, a.createElement(Gr, null)),
        );
      },
      P7 = ({ theme: e, status: t, variant: n }) =>
        n === 'outline'
          ? {
              color: e.base === 'light' ? e.color.dark : e.color.medium,
              backgroundColor: e.background.app,
              borderColor: e.base === 'light' ? e.color.medium : e.color.darker,
              '&:hover': {
                color: e.base === 'light' ? e.color.darkest : e.color.lighter,
                backgroundColor: nn(0.03, e.background.app),
              },
            }
          : t === 'positive'
            ? {
                color: e.color.positiveText,
                backgroundColor: e.background.positive,
                borderColor: lr(0.5, e.color.positiveText),
                '&:hover': {
                  color: e.color.positiveText,
                  backgroundColor: nn(0.05, e.background.positive),
                },
              }
            : t === 'warning'
              ? {
                  color: e.color.warningText,
                  backgroundColor: e.background.warning,
                  borderColor: lr(0.5, e.color.warningText),
                  '&:hover': {
                    color: e.color.warningText,
                    backgroundColor: nn(0.05, e.background.warning),
                  },
                }
              : {
                  color: e.color.lightest,
                  backgroundColor: e.color.secondary,
                  borderWidth: 0,
                  borderColor:
                    e.base === 'light' ? lr(0.2, e.color.secondary) : nn(0.1, e.color.secondary),
                  '&:hover': {
                    color: e.color.lightest,
                    backgroundColor: nn(0.05, e.color.secondary),
                  },
                },
      Sn = w(ot)(
        ({ square: e }) => ({
          border: '1px solid transparent',
          boxShadow: 'none',
          fontSize: 12,
          fontWeight: 700,
          height: 28,
          padding: e ? '8px 6px' : 8,
          transition: 'background-color 150ms ease-out',
          '@container (min-width: 300px)': {
            height: 32,
            width: e ? 32 : 'auto',
            padding: e ? '9px 8px' : 9,
          },
          '@container (min-width: 800px)': {
            height: 28,
            fontSize: 12,
            width: e ? 28 : 'auto',
            padding: e ? '8px 6px' : 8,
          },
        }),
        P7,
        ({ side: e }) => ({
          ...(e === 'left' && {
            borderRightWidth: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          ...(e === 'right' && {
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        }),
      ),
      z1 = w.div({ display: 'flex', flexDirection: 'row' }),
      Br = w.div(
        ({ theme: e }) => ({
          width: 12,
          height: 12,
          margin: '3px 6px',
          verticalAlign: 'top',
          display: 'inline-block',
          animation: `${js} 0.7s linear infinite`,
          border: '2px solid transparent',
          borderLeftColor: e.base === 'light' ? '#00aaff' : '#58faf9',
          borderBottomColor: '#25ccfd',
          borderRightColor: e.base === 'light' ? '#58faf9' : '#00aaff',
          borderRadius: '100%',
          transform: 'translate3d(0, 0, 0)',
        }),
        ({ parentComponent: e }) =>
          e &&
          he({
            margin: e === 'IconButton' ? 1 : 0,
            borderWidth: 1,
            borderLeftColor: 'currentcolor',
            borderBottomColor: 'currentcolor',
            borderRightColor: 'currentcolor',
          }),
      ),
      Ii = w.div(
        ({ theme: e, width: t = 14, height: n = 14, marginLeft: r = 7, marginRight: i = 8 }) => ({
          display: 'inline-block',
          backgroundColor: e.appBorderColor,
          borderRadius: 3,
          animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
          height: n,
          width: t,
          margin: 7,
          marginLeft: r,
          marginRight: i,
        }),
      ),
      V7 = w.div(({ theme: e }) => ({
        gridArea: 'label',
        margin: '8px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
        span: { display: 'none', '@container (min-width: 300px)': { display: 'initial' } },
        '@container (min-width: 800px)': {
          borderLeft: `1px solid ${e.appBorderColor}`,
          paddingLeft: 10,
          marginLeft: 0,
        },
      })),
      U1 = w.div({
        gridArea: 'controls',
        margin: '6px 15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 6,
        '@container (min-width: 800px)': { margin: 8 },
      }),
      j7 = w.div(({ theme: e }) => ({
        padding: 9,
        '> svg': { display: 'block' },
        path: { fill: e.color.mediumdark },
      })),
      H7 = w.div(({ theme: e, showDivider: t }) => ({
        gridArea: 'actions',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '0px 15px',
        gap: 6,
        '@container (min-width: 300px)': { alignItems: 'flex-start', margin: '15px 15px 15px 0px' },
        '@container (min-width: 800px)': {
          alignItems: 'center',
          borderLeft: t ? `1px solid ${e.appBorderColor}` : 'none',
          margin: '8px 15px 8px 0px',
          paddingLeft: 8,
        },
      })),
      D7 = ({ isOutdated: e }) => {
        let { baselineImageVisible: t, diffVisible: n, focusVisible: r } = Wr(),
          { toggleBaselineImage: i, toggleDiff: o, toggleFocus: l } = Pn(),
          { isRunning: s, startBuild: c } = Za(),
          { selectedTest: d, selectedComparison: u, summary: m } = fn(),
          { changeCount: p, isInProgress: g } = m,
          {
            isReviewing: f,
            buildIsReviewable: y,
            userCanReview: k,
            acceptTest: b,
            unacceptTest: h,
          } = oc();
        if (g)
          return a.createElement(
            U1,
            null,
            a.createElement(Ii, null),
            a.createElement(Ii, null),
            a.createElement(Ii, null),
          );
        let v = p > 0 && d?.status !== 'ACCEPTED',
          E = p > 0 && d?.status === 'ACCEPTED',
          S = u?.result === 'CHANGED';
        return a.createElement(
          a.Fragment,
          null,
          S &&
            a.createElement(
              V7,
              null,
              a.createElement(
                G,
                null,
                a.createElement(
                  'b',
                  null,
                  t ? 'Baseline' : 'Latest',
                  a.createElement('span', null, ' snapshot'),
                ),
              ),
            ),
          S &&
            a.createElement(
              U1,
              null,
              a.createElement(
                Le,
                {
                  tooltip: a.createElement(je, {
                    note: t ? 'Show latest snapshot' : 'Show baseline snapshot',
                  }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  ot,
                  {
                    id: 'button-toggle-snapshot',
                    'aria-label': t ? 'Show latest snapshot' : 'Show baseline snapshot',
                    onClick: () => i(),
                  },
                  a.createElement(Rd, null),
                ),
              ),
              a.createElement(
                Le,
                {
                  tooltip: a.createElement(je, { note: r ? 'Hide spotlight' : 'Show spotlight' }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  ot,
                  {
                    id: 'button-toggle-spotlight',
                    active: r,
                    'aria-label': r ? 'Hide spotlight' : 'Show spotlight',
                    onClick: () => l(!r),
                  },
                  a.createElement(Pd, null),
                ),
              ),
              a.createElement(
                Le,
                {
                  tooltip: a.createElement(je, { note: n ? 'Hide diff' : 'Show diff' }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  ot,
                  {
                    id: 'button-diff-visible',
                    active: n,
                    'aria-label': n ? 'Hide diff' : 'Show diff',
                    onClick: () => o(!n),
                  },
                  a.createElement(ns, null),
                ),
              ),
            ),
          (v || E) &&
            a.createElement(
              H7,
              { showDivider: S },
              k &&
                y &&
                v &&
                d &&
                a.createElement(
                  z1,
                  null,
                  a.createElement(
                    Le,
                    {
                      tooltip: a.createElement(je, { note: 'Accept this story' }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      Sn,
                      {
                        id: 'button-toggle-accept-story',
                        disabled: f,
                        'aria-label': 'Accept this story',
                        onClick: () => b(d.id, 'SPEC'),
                        side: 'left',
                      },
                      'Accept',
                    ),
                  ),
                  a.createElement(
                    Le,
                    {
                      tooltip: a.createElement(je, { note: 'Batch accept options' }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      Ea,
                      {
                        placement: 'bottom',
                        links: [
                          {
                            id: 'acceptComponent',
                            title: 'Accept component',
                            center: 'Accept all unreviewed changes for this component',
                            onClick: () => b(d.id, 'COMPONENT'),
                            disabled: f,
                            loading: f,
                          },
                          {
                            id: 'acceptBuild',
                            title: 'Accept entire build',
                            center:
                              'Accept all unreviewed changes for every story in the Storybook',
                            onClick: () => b(d.id, 'BUILD'),
                            disabled: f,
                            loading: f,
                          },
                        ],
                      },
                      (B) =>
                        a.createElement(
                          Sn,
                          {
                            square: !0,
                            active: B,
                            disabled: f,
                            'aria-label': 'Batch accept options',
                            side: 'right',
                          },
                          f
                            ? a.createElement(Br, { parentComponent: 'IconButton' })
                            : a.createElement(yl, null),
                        ),
                    ),
                  ),
                ),
              k &&
                y &&
                E &&
                a.createElement(
                  z1,
                  null,
                  a.createElement(
                    Le,
                    {
                      tooltip: a.createElement(je, { note: 'Unaccept this story' }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      Sn,
                      {
                        id: 'button-toggle-accept-story',
                        disabled: f,
                        'aria-label': 'Unaccept this story',
                        onClick: () => h(d.id, 'SPEC'),
                        side: 'left',
                        status: 'positive',
                      },
                      a.createElement(Bd, null),
                      'Unaccept',
                    ),
                  ),
                  a.createElement(
                    Le,
                    {
                      tooltip: a.createElement(je, { note: 'Batch unaccept options' }),
                      trigger: 'hover',
                      hasChrome: !1,
                    },
                    a.createElement(
                      Ea,
                      {
                        placement: 'bottom',
                        links: [
                          {
                            id: 'unacceptComponent',
                            title: 'Unaccept component',
                            center: 'Unaccept all unreviewed changes for this component',
                            onClick: () => h(d.id, 'COMPONENT'),
                            disabled: f,
                            loading: f,
                          },
                          {
                            id: 'unacceptBuild',
                            title: 'Unaccept entire build',
                            center:
                              'Unaccept all unreviewed changes for every story in the Storybook',
                            onClick: () => h(d.id, 'BUILD'),
                            disabled: f,
                            loading: f,
                          },
                        ],
                      },
                      (B) =>
                        a.createElement(
                          Sn,
                          {
                            square: !0,
                            active: B,
                            disabled: f,
                            'aria-label': 'Batch unaccept options',
                            side: 'right',
                            status: 'positive',
                          },
                          f
                            ? a.createElement(Br, { parentComponent: 'IconButton' })
                            : a.createElement(yl, null),
                        ),
                    ),
                  ),
                ),
              !(k && y) &&
                a.createElement(
                  Le,
                  {
                    tooltip: a.createElement(je, { note: 'Reviewing disabled' }),
                    trigger: 'hover',
                    hasChrome: !1,
                  },
                  a.createElement(j7, null, a.createElement(rs, null)),
                ),
              a.createElement(
                Le,
                {
                  tooltip: a.createElement(je, { note: e ? 'Run new tests' : 'Rerun tests' }),
                  trigger: 'hover',
                  hasChrome: !1,
                },
                a.createElement(
                  Sn,
                  {
                    square: !0,
                    'aria-label': e ? 'Run new tests' : 'Rerun tests',
                    onClick: c,
                    disabled: s,
                    variant: 'outline',
                  },
                  e ? a.createElement($t, null) : a.createElement(ss, null),
                ),
              ),
            ),
        );
      },
      ir = ht(Vr()),
      z7 = (e) =>
        a.createElement(
          'svg',
          {
            width: '12',
            height: '12',
            viewBox: '0 0 12 12',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            style: { margin: '3px 6px', verticalAlign: 'top' },
            ...e,
          },
          a.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.57143 6.85714C5.57143 7.09384 5.76331 7.28571 6 7.28571C6.23669 7.28571 6.42857 7.09384 6.42857 6.85714L6.42857 3.42857C6.42857 3.19188 6.23669 3 6 3C5.76331 3 5.57143 3.19188 5.57143 3.42857V6.85714ZM5.35714 8.78572C5.35714 8.43067 5.64496 8.14286 6 8.14286C6.35504 8.14286 6.64286 8.43067 6.64286 8.78571C6.64286 9.14075 6.35504 9.42857 6 9.42857C5.64496 9.42857 5.35714 9.14075 5.35714 8.78572Z',
            fill: '#73828C',
          }),
        ),
      Ri = { width: 12, height: 12, margin: '3px 3px 3px 6px', verticalAlign: 'top' },
      U7 = ({ icon: e }) => {
        let { color: t } = en();
        return {
          passed: a.createElement(ji, { style: { ...Ri, color: t.positive } }),
          changed: a.createElement(Nd, { style: { ...Ri, color: t.warning } }),
          failed: a.createElement(Wt, { style: { ...Ri, color: t.negative } }),
        }[e];
      };
    function bo(e) {
      '@babel/helpers - typeof';
      return (
        (bo =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
        bo(e)
      );
    }
    function ai(e, t) {
      if (t.length < e)
        throw new TypeError(
          e + ' argument' + (e > 1 ? 's' : '') + ' required, but only ' + t.length + ' present',
        );
    }
    function xn(e) {
      ai(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date || (bo(e) === 'object' && t === '[object Date]')
        ? new Date(e.getTime())
        : typeof e == 'number' || t === '[object Number]'
          ? new Date(e)
          : ((typeof e == 'string' || t === '[object String]') &&
              typeof console < 'u' &&
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
    }
    var $7 = {};
    function W7() {
      return $7;
    }
    function $1(e) {
      var t = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
      return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
    }
    function G7(e, t) {
      ai(2, arguments);
      var n = xn(e),
        r = xn(t),
        i = n.getTime() - r.getTime();
      return i < 0 ? -1 : i > 0 ? 1 : i;
    }
    var q7 = {
        lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      },
      Y7 = function (e, t, n) {
        var r,
          i = q7[e];
        return (
          typeof i == 'string'
            ? (r = i)
            : t === 1
              ? (r = i.one)
              : (r = i.other.replace('{{count}}', t.toString())),
          n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
        );
      },
      Q7 = Y7;
    function Bi(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          n = t.width ? String(t.width) : e.defaultWidth,
          r = e.formats[n] || e.formats[e.defaultWidth];
        return r;
      };
    }
    var K7 = {
        full: 'EEEE, MMMM do, y',
        long: 'MMMM do, y',
        medium: 'MMM d, y',
        short: 'MM/dd/yyyy',
      },
      J7 = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
      X7 = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: '{{date}}, {{time}}',
        short: '{{date}}, {{time}}',
      },
      e6 = {
        date: Bi({ formats: K7, defaultWidth: 'full' }),
        time: Bi({ formats: J7, defaultWidth: 'full' }),
        dateTime: Bi({ formats: X7, defaultWidth: 'full' }),
      },
      t6 = e6,
      n6 = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
      },
      a6 = function (e, t, n, r) {
        return n6[e];
      },
      r6 = a6;
    function la(e) {
      return function (t, n) {
        var r = n != null && n.context ? String(n.context) : 'standalone',
          i;
        if (r === 'formatting' && e.formattingValues) {
          var o = e.defaultFormattingWidth || e.defaultWidth,
            l = n != null && n.width ? String(n.width) : o;
          i = e.formattingValues[l] || e.formattingValues[o];
        } else {
          var s = e.defaultWidth,
            c = n != null && n.width ? String(n.width) : e.defaultWidth;
          i = e.values[c] || e.values[s];
        }
        var d = e.argumentCallback ? e.argumentCallback(t) : t;
        return i[d];
      };
    }
    var i6 = {
        narrow: ['B', 'A'],
        abbreviated: ['BC', 'AD'],
        wide: ['Before Christ', 'Anno Domini'],
      },
      o6 = {
        narrow: ['1', '2', '3', '4'],
        abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
        wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
      },
      l6 = {
        narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        abbreviated: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        wide: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
      },
      s6 = {
        narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      },
      c6 = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'morning',
          afternoon: 'afternoon',
          evening: 'evening',
          night: 'night',
        },
      },
      d6 = {
        narrow: {
          am: 'a',
          pm: 'p',
          midnight: 'mi',
          noon: 'n',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        abbreviated: {
          am: 'AM',
          pm: 'PM',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
        wide: {
          am: 'a.m.',
          pm: 'p.m.',
          midnight: 'midnight',
          noon: 'noon',
          morning: 'in the morning',
          afternoon: 'in the afternoon',
          evening: 'in the evening',
          night: 'at night',
        },
      },
      u6 = function (e, t) {
        var n = Number(e),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + 'st';
            case 2:
              return n + 'nd';
            case 3:
              return n + 'rd';
          }
        return n + 'th';
      },
      m6 = {
        ordinalNumber: u6,
        era: la({ values: i6, defaultWidth: 'wide' }),
        quarter: la({
          values: o6,
          defaultWidth: 'wide',
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: la({ values: l6, defaultWidth: 'wide' }),
        day: la({ values: s6, defaultWidth: 'wide' }),
        dayPeriod: la({
          values: c6,
          defaultWidth: 'wide',
          formattingValues: d6,
          defaultFormattingWidth: 'wide',
        }),
      },
      p6 = m6;
    function sa(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = n.width,
          i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          o = t.match(i);
        if (!o) return null;
        var l = o[0],
          s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(s)
            ? f6(s, function (m) {
                return m.test(l);
              })
            : h6(s, function (m) {
                return m.test(l);
              }),
          d;
        (d = e.valueCallback ? e.valueCallback(c) : c),
          (d = n.valueCallback ? n.valueCallback(d) : d);
        var u = t.slice(l.length);
        return { value: d, rest: u };
      };
    }
    function h6(e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
    }
    function f6(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
    }
    function g6(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
          o = t.match(e.parsePattern);
        if (!o) return null;
        var l = e.valueCallback ? e.valueCallback(o[0]) : o[0];
        l = n.valueCallback ? n.valueCallback(l) : l;
        var s = t.slice(i.length);
        return { value: l, rest: s };
      };
    }
    var v6 = /^(\d+)(th|st|nd|rd)?/i,
      y6 = /\d+/i,
      b6 = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      E6 = { any: [/^b/i, /^(a|c)/i] },
      k6 = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
      w6 = { any: [/1/i, /2/i, /3/i, /4/i] },
      C6 = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      S6 = {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      x6 = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      M6 = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      N6 = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      F6 = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      A6 = {
        ordinalNumber: g6({
          matchPattern: v6,
          parsePattern: y6,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        era: sa({
          matchPatterns: b6,
          defaultMatchWidth: 'wide',
          parsePatterns: E6,
          defaultParseWidth: 'any',
        }),
        quarter: sa({
          matchPatterns: k6,
          defaultMatchWidth: 'wide',
          parsePatterns: w6,
          defaultParseWidth: 'any',
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: sa({
          matchPatterns: C6,
          defaultMatchWidth: 'wide',
          parsePatterns: S6,
          defaultParseWidth: 'any',
        }),
        day: sa({
          matchPatterns: x6,
          defaultMatchWidth: 'wide',
          parsePatterns: M6,
          defaultParseWidth: 'any',
        }),
        dayPeriod: sa({
          matchPatterns: N6,
          defaultMatchWidth: 'any',
          parsePatterns: F6,
          defaultParseWidth: 'any',
        }),
      },
      O6 = A6,
      L6 = {
        code: 'en-US',
        formatDistance: Q7,
        formatLong: t6,
        formatRelative: r6,
        localize: p6,
        match: O6,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
      lc = L6,
      T6 = lc;
    function sc(e, t) {
      if (e == null)
        throw new TypeError('assign requires that input parameter not be null or undefined');
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function _6(e) {
      return sc({}, e);
    }
    var W1 = 1e3 * 60,
      Pr = 60 * 24,
      G1 = Pr * 30,
      q1 = Pr * 365;
    function Z6(e, t, n) {
      var r, i, o;
      ai(2, arguments);
      var l = W7(),
        s =
          (r = (i = n?.locale) !== null && i !== void 0 ? i : l.locale) !== null && r !== void 0
            ? r
            : T6;
      if (!s.formatDistance)
        throw new RangeError('locale must contain localize.formatDistance property');
      var c = G7(e, t);
      if (isNaN(c)) throw new RangeError('Invalid time value');
      var d = sc(_6(n), { addSuffix: !!n?.addSuffix, comparison: c }),
        u,
        m;
      c > 0 ? ((u = xn(t)), (m = xn(e))) : ((u = xn(e)), (m = xn(t)));
      var p = String((o = n?.roundingMethod) !== null && o !== void 0 ? o : 'round'),
        g;
      if (p === 'floor') g = Math.floor;
      else if (p === 'ceil') g = Math.ceil;
      else if (p === 'round') g = Math.round;
      else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
      var f = m.getTime() - u.getTime(),
        y = f / W1,
        k = $1(m) - $1(u),
        b = (f - k) / W1,
        h = n?.unit,
        v;
      if (
        (h
          ? (v = String(h))
          : y < 1
            ? (v = 'second')
            : y < 60
              ? (v = 'minute')
              : y < Pr
                ? (v = 'hour')
                : b < G1
                  ? (v = 'day')
                  : b < q1
                    ? (v = 'month')
                    : (v = 'year'),
        v === 'second')
      ) {
        var E = g(f / 1e3);
        return s.formatDistance('xSeconds', E, d);
      } else if (v === 'minute') {
        var S = g(y);
        return s.formatDistance('xMinutes', S, d);
      } else if (v === 'hour') {
        var B = g(y / 60);
        return s.formatDistance('xHours', B, d);
      } else if (v === 'day') {
        var j = g(b / Pr);
        return s.formatDistance('xDays', j, d);
      } else if (v === 'month') {
        var Y = g(b / G1);
        return Y === 12 && h !== 'month'
          ? s.formatDistance('xYears', 1, d)
          : s.formatDistance('xMonths', Y, d);
      } else if (v === 'year') {
        var J = g(b / q1);
        return s.formatDistance('xYears', J, d);
      }
      throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
    }
    function I6(e, t) {
      return ai(1, arguments), Z6(e, Date.now(), t);
    }
    var R6 = {
      lessThanXSeconds: 'just now',
      xSeconds: 'just now',
      halfAMinute: 'just now',
      lessThanXMinutes: '{{count}}m',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXWeeks: '{{count}}w',
      xWeeks: '{{count}}w',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}y',
      xYears: '{{count}}y',
      overXYears: '{{count}}y',
      almostXYears: '{{count}}y',
    };
    function B6(e, t, n = { addSuffix: !1, comparison: 0 }) {
      let r = R6[e].replace('{{count}}', t);
      return ['lessThanXSeconds', 'xSeconds', 'halfAMinute'].includes(e)
        ? `${r}`
        : n.addSuffix
          ? n.comparison > 0
            ? `in ${r}`
            : `${r} ago`
          : r;
    }
    var P6 = (e) => I6(e, { addSuffix: !0, locale: { ...lc, formatDistance: B6 } }),
      ca = w.div(({ theme: e }) => ({
        gridArea: 'info',
        display: 'flex',
        justifySelf: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 15,
        lineHeight: '18px',
        color: e.base === 'light' ? `${e.color.defaultText}99` : `${e.color.light}99`,
        b: { color: e.base === 'light' ? `${e.color.defaultText}` : `${e.color.light}` },
        small: { fontSize: e.typography.size.s1 },
        '@container (min-width: 800px)': {
          margin: '6px 10px 6px 15px',
          alignItems: 'center',
          flexDirection: 'row',
          small: { fontSize: 'inherit' },
          '[data-hidden-large]': { display: 'none' },
          '& > span:first-of-type': {
            display: 'inline-flex',
            alignItems: 'center',
            height: 24,
            marginRight: 6,
          },
        },
      })),
      V6 = w.div({
        gridArea: 'actions',
        display: 'flex',
        justifySelf: 'end',
        justifyContent: 'center',
        alignItems: 'start',
        margin: 15,
        '@container (min-width: 800px)': { margin: '6px 15px 0 0' },
      }),
      j6 = ({
        isStarting: e,
        tests: t,
        startedAt: n,
        isBuildFailed: r,
        isOutdated: i,
        shouldSwitchToLastBuildOnBranch: o,
        switchToLastBuildOnBranch: l,
      }) => {
        let { isRunning: s, startBuild: c } = Za(),
          {
            status: d,
            isInProgress: u,
            changeCount: m,
            brokenCount: p,
            modeResults: g,
            browserResults: f,
          } = qo(t ?? []),
          y = !e && n && P6(new Date(n).getTime()),
          k = e || u,
          b = r || d === 'FAILED',
          h = b || d === 'BROKEN',
          v = (h || i) && !k && !m,
          E;
        return (
          i
            ? (E = a.createElement(
                ca,
                null,
                a.createElement('span', null, a.createElement('b', null, 'Code edits detected')),
                a.createElement(
                  'small',
                  null,
                  a.createElement('span', null, 'Run tests to see what changed'),
                ),
              ))
            : b
              ? (E = a.createElement(
                  ca,
                  null,
                  a.createElement(
                    'span',
                    null,
                    a.createElement('b', null, 'Build failed'),
                    a.createElement(z7, null),
                  ),
                  a.createElement(
                    'small',
                    null,
                    a.createElement('span', null, 'An infrastructure error occured'),
                  ),
                ))
              : k
                ? (E = a.createElement(
                    ca,
                    null,
                    a.createElement(
                      'span',
                      null,
                      a.createElement('b', null, 'Running tests...'),
                      a.createElement(Br, null),
                    ),
                    a.createElement(
                      'small',
                      null,
                      a.createElement('span', null, 'Test in progress...'),
                    ),
                  ))
                : o
                  ? (E = a.createElement(
                      ca,
                      null,
                      a.createElement(
                        'span',
                        null,
                        a.createElement(
                          'b',
                          null,
                          a.createElement(bn, { isButton: !0, onClick: l }, 'View latest snapshot'),
                        ),
                      ),
                      a.createElement(
                        'span',
                        null,
                        'Newer test results are available for this story',
                      ),
                    ))
                  : (E = a.createElement(
                      ca,
                      null,
                      a.createElement(
                        'span',
                        null,
                        a.createElement(
                          'b',
                          null,
                          p
                            ? null
                            : m
                              ? `${(0, ir.default)('change', m, !0)}${d === 'ACCEPTED' ? ' accepted' : ''}`
                              : 'No changes',
                          p ? (0, ir.default)('error', p, !0) : null,
                        ),
                        a.createElement(U7, {
                          icon: p ? 'failed' : d === 'PENDING' ? 'changed' : 'passed',
                        }),
                      ),
                      a.createElement(
                        'small',
                        null,
                        g.length > 0 &&
                          a.createElement(
                            'span',
                            { 'data-hidden-large': !0 },
                            (0, ir.default)('mode', g.length, !0),
                            ', ',
                            (0, ir.default)('browser', f.length, !0),
                          ),
                        g.length > 0 &&
                          a.createElement('span', { 'data-hidden-large': !0 }, ' \u2022 '),
                        u && a.createElement('span', null, 'Test in progress...'),
                        !u &&
                          n &&
                          a.createElement('span', { title: new Date(n).toUTCString() }, 'Ran ', y),
                      ),
                    )),
          a.createElement(
            a.Fragment,
            null,
            E,
            v &&
              a.createElement(
                V6,
                null,
                a.createElement(
                  Sn,
                  { onClick: c, disabled: s },
                  s
                    ? a.createElement(Br, { parentComponent: 'Button' })
                    : a.createElement($t, null),
                  h ? 'Rerun tests' : 'Run tests',
                ),
              ),
          )
        );
      },
      Y1 = w.div(({ theme: e }) => ({
        display: 'grid',
        gridTemplateAreas: `
    "info info"
    "actions actions"
    "label controls"
  `,
        gridTemplateColumns: '1fr fit-content(50%)',
        gridTemplateRows: 'auto auto auto',
        borderBottom: `1px solid ${e.appBorderColor}`,
        '@container (min-width: 300px)': {
          gridTemplateAreas: `
      "info actions"
      "label controls"
    `,
          gridTemplateColumns: '1fr auto',
          gridTemplateRows: 'auto auto',
        },
        '@container (min-width: 800px)': {
          gridTemplateAreas: '"info label controls actions"',
          gridTemplateColumns: 'auto 1fr auto auto',
          gridTemplateRows: 40,
        },
      })),
      Q1 = w.div(({ theme: e }) => ({
        display: 'grid',
        gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `,
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        height: '100%',
        '&[hidden]': { display: 'none' },
      })),
      K1 = w.div(({ theme: e }) => ({
        gridArea: 'header',
        position: 'sticky',
        zIndex: 1,
        top: 0,
        background: e.background.content,
        '@container (min-width: 800px)': { background: e.background.app },
      })),
      H6 = w.div(({ theme: e }) => ({
        gridArea: 'main',
        overflowY: 'auto',
        maxHeight: '100%',
        background: e.background.content,
      })),
      J1 = w.div(({ theme: e }) => ({
        gridArea: 'footer',
        position: 'sticky',
        zIndex: 1,
        bottom: 0,
      })),
      D6 = w.div(({ children: e, theme: t }) => ({
        display: 'flex',
        alignItems: 'center',
        border: `0px solid ${t.appBorderColor}`,
        borderTopWidth: 1,
        borderBottomWidth: e ? 1 : 0,
        height: e ? 40 : 0,
        padding: e ? '0 15px' : 0,
      })),
      z6 = w.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        color: e.color.defaultText,
        lineHeight: '18px',
        padding: 15,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
      })),
      Pi = w.div(({ theme: e }) => ({
        background: e.background.hoverable,
        padding: '10px 15px',
        lineHeight: '18px',
        position: 'relative',
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      U6 = ({
        isOutdated: e,
        isStarting: t,
        isBuildFailed: n,
        shouldSwitchToLastBuildOnBranch: r,
        switchToLastBuildOnBranch: i,
        hidden: o,
        storyId: l,
      }) => {
        let { baselineImageVisible: s, diffVisible: c, focusVisible: d } = Wr(),
          { toggleBaselineImage: u, toggleSettings: m, toggleWarnings: p } = Pn(),
          g = nc(),
          f = 'startedAt' in g && g.startedAt,
          y = fn(),
          { tests: k } = y,
          b = a.useRef(l),
          h = a.useRef(y.selectedComparison?.id),
          v = a.useRef(g.id),
          { selectedTest: E, selectedComparison: S } = y,
          B = k.every(({ result: xe, status: qe }) => xe === 'ADDED' && qe !== 'ACCEPTED'),
          j = !B && E?.result === 'ADDED' && E?.status !== 'ACCEPTED',
          Y = !B && S?.result === 'ADDED' && E?.result !== 'ADDED' && E?.status !== 'ACCEPTED';
        oe(() => {
          (b.current !== l ||
            h.current !== y.selectedComparison?.id ||
            v.current !== g.id ||
            B ||
            j ||
            Y) &&
            (u(!1), m(!1), p(!1)),
            (h.current = y.selectedComparison?.id),
            (b.current = l),
            (v.current = g.id);
        }, [g.id, l, y, u, m, p, B, j, Y]);
        let J = a.createElement(j6, {
          tests: k,
          startedAt: f,
          isStarting: t,
          isBuildFailed: n,
          isOutdated: e,
          shouldSwitchToLastBuildOnBranch: r,
          switchToLastBuildOnBranch: i,
        });
        if (t || !k.length)
          return a.createElement(
            Q1,
            { hidden: o },
            a.createElement(K1, null, a.createElement(Y1, null, J)),
            a.createElement(J1, null, a.createElement(D1, null)),
          );
        let ce = qo(k),
          { isInProgress: Se } = ce,
          Oe =
            S?.headCapture?.captureError &&
            'error' in S?.headCapture?.captureError &&
            S?.headCapture?.captureError?.error;
        return a.createElement(
          Q1,
          { hidden: o },
          a.createElement(
            K1,
            null,
            a.createElement(Y1, null, J, a.createElement(D7, { isOutdated: e })),
          ),
          a.createElement(
            H6,
            null,
            Se && a.createElement(pi, null),
            !Se &&
              B &&
              a.createElement(
                Pi,
                null,
                a.createElement(
                  G,
                  null,
                  'New story found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    $e,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more',
                  ),
                ),
              ),
            !Se &&
              j &&
              a.createElement(
                Pi,
                null,
                a.createElement(
                  G,
                  null,
                  'New mode found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    $e,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more',
                  ),
                ),
              ),
            !Se &&
              Y &&
              a.createElement(
                Pi,
                null,
                a.createElement(
                  G,
                  null,
                  'New browser found. Accept this snapshot as a test baseline.',
                  ' ',
                  a.createElement(
                    $e,
                    {
                      withArrow: !0,
                      href: 'https://www.chromatic.com/docs/branching-and-baselines',
                      target: '_blank',
                    },
                    'Learn more',
                  ),
                ),
              ),
            !Se &&
              S &&
              a.createElement(F7, {
                key: S.id,
                componentName: E?.story?.component?.name,
                storyName: E?.story?.name,
                testUrl: E?.webUrl,
                comparisonResult: S.result ?? void 0,
                latestImage: S.headCapture?.captureImage ?? void 0,
                baselineImage: S.baseCapture?.captureImage ?? void 0,
                baselineImageVisible: s,
                diffImage: S.captureDiff?.diffImage ?? void 0,
                focusImage: S.captureDiff?.focusImage ?? void 0,
                diffVisible: c,
                focusVisible: d,
              }),
            !Se &&
              Oe &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(D6, null, a.createElement('b', null, 'Error stack trace')),
                a.createElement(z6, null, Oe.stack || Oe.message),
              ),
          ),
          a.createElement(J1, null, a.createElement(D1, null)),
        );
      },
      $6 = w(ui)({ padding: '4px 8px', margin: '0 6px' }),
      W6 = ({ onClose: e }) =>
        a.createElement(
          t0,
          null,
          a.createElement(
            oo,
            null,
            a.createElement(
              kr,
              null,
              'Warnings',
              a.createElement($6, { status: 'warning' }, '2'),
              a.createElement(Po, { onClick: e }, a.createElement(Bo, { 'aria-label': 'Close' })),
            ),
            a.createElement(
              'p',
              null,
              "It's essential that your components and stories render in a consistent fashion to prevent false positives. Two issues detected in this story may cause false positives.",
            ),
            a.createElement(
              'p',
              null,
              a.createElement(ue, { variant: 'outline' }, a.createElement(as, null), 'Docs'),
              a.createElement(ue, { variant: 'outline' }, a.createElement(Ad, null), 'Get support'),
            ),
          ),
        );
    w.div(({ theme: e }) => ({
      color: e.color.warning,
      background: e.background.warning,
      padding: 10,
      lineHeight: '18px',
      position: 'relative',
    }));
    var G6 = ({
        branch: e,
        dismissBuildError: t,
        isOutdated: n,
        localBuildProgress: r,
        switchToLastBuildOnBranch: i,
        storyId: o,
      }) => {
        let { settingsVisible: l, warningsVisible: s } = Wr(),
          { toggleSettings: c, toggleWarnings: d } = Pn(),
          { isRunning: u, startBuild: m, stopBuild: p } = Za(),
          {
            lastBuildOnBranch: g,
            lastBuildOnBranchIsReady: f,
            lastBuildOnBranchIsSelectable: y,
          } = Bh(),
          k = nc(),
          b = fn(),
          { buildIsReviewable: h, userCanReview: v } = oc(),
          E = !!(!h && f && y && i),
          S = g?.status === 'IN_PROGRESS',
          B = u || (!h && !E),
          j = r && r?.buildId === g?.id,
          Y =
            B &&
            a.createElement(w7, {
              branch: e,
              dismissBuildError: t,
              localBuildProgress: j || u ? r : void 0,
              lastBuildOnBranchInProgress: S,
              switchToLastBuildOnBranch: i,
            }),
          J = b?.hasTests && b?.tests.length === 0,
          ce = k.id !== `Build:${r?.buildId}`;
        if (J)
          return a.createElement(
            Ne,
            null,
            a.createElement(
              ye,
              null,
              r && ce
                ? a.createElement(
                    de,
                    null,
                    a.createElement(
                      'div',
                      null,
                      a.createElement(fe, null, 'Snapshotting new story'),
                      a.createElement(
                        G,
                        { center: !0, muted: !0 },
                        'A new snapshot is being created in a standardized cloud browser to save its "last known good state" as a test baseline.',
                      ),
                    ),
                    a.createElement(ni, { localBuildProgress: r }),
                  )
                : a.createElement(
                    de,
                    null,
                    a.createElement(
                      'div',
                      null,
                      a.createElement(fe, null, 'New story found'),
                      a.createElement(
                        G,
                        { center: !0, muted: !0 },
                        'Take an image snapshot of this story to save its "last known good state" as a test baseline. This unlocks visual regression testing so you can see exactly what has changed down to the pixel.',
                      ),
                    ),
                    a.createElement(
                      ue,
                      { belowText: !0, size: 'medium', variant: 'solid', onClick: u ? p : m },
                      u ? 'Cancel build' : 'Create visual test',
                    ),
                  ),
            ),
          );
        if (b?.tests?.find((pe) => pe.result === 'SKIPPED'))
          return a.createElement(
            Ne,
            null,
            Y,
            a.createElement(
              ye,
              null,
              a.createElement(
                de,
                null,
                a.createElement(
                  'div',
                  null,
                  a.createElement(fe, null, 'This story was skipped'),
                  a.createElement(
                    G,
                    { center: !0, muted: !0 },
                    'If you would like to resume testing it, comment out or remove',
                    a.createElement(De, null, 'disableSnapshot = true'),
                    ' from the CSF file.',
                  ),
                ),
                a.createElement(
                  ue,
                  { asChild: !0, size: 'medium', variant: 'outline' },
                  a.createElement(
                    'a',
                    {
                      href: 'https://www.chromatic.com/docs/ignoring-elements#ignore-stories',
                      target: '_new',
                    },
                    a.createElement(as, null),
                    'View docs',
                  ),
                ),
              ),
            ),
          );
        let { status: Se } = k,
          Oe = ['ANNOUNCED', 'PUBLISHED', 'PREPARED'].includes(Se),
          xe = Se === 'FAILED',
          qe = Se === 'PENDING' && (!v || !h);
        return a.createElement(
          Ne,
          { footer: null },
          a.createElement(
            Em,
            null,
            Y,
            !Y &&
              qe &&
              a.createElement(
                f7,
                null,
                v
                  ? a.createElement(
                      a.Fragment,
                      null,
                      "Reviewing is disabled because there's a newer build on ",
                      a.createElement(De, null, e),
                      '.',
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      "You don't have permission to accept changes.",
                      ' ',
                      a.createElement(
                        bn,
                        {
                          href: 'https://www.chromatic.com/docs/collaborators#roles',
                          target: '_blank',
                          withArrow: !0,
                        },
                        'Learn about roles',
                      ),
                    ),
              ),
            a.createElement(
              ha,
              { grow: !0, hidden: l || s },
              a.createElement(U6, {
                hidden: l || s,
                isOutdated: n,
                isStarting: Oe,
                isBuildFailed: xe,
                shouldSwitchToLastBuildOnBranch: E,
                switchToLastBuildOnBranch: i,
                selectedBuild: k,
                storyId: o,
              }),
            ),
            a.createElement(
              ha,
              { grow: !0, hidden: !l },
              a.createElement(C7, { onClose: () => c(!1) }),
            ),
            a.createElement(
              ha,
              { grow: !0, hidden: !s },
              a.createElement(W6, { onClose: () => d(!1) }),
            ),
          ),
        );
      },
      Vi = w($e)(() => ({ marginTop: 5 })),
      q6 = ({
        queryError: e,
        hasData: t,
        hasProject: n,
        hasSelectedBuild: r,
        localBuildProgress: i,
        branch: o,
      }) => {
        let { setAccessToken: l } = Gs(),
          { isRunning: s, startBuild: c } = Za(),
          { disable: d, disableSnapshot: u, docsOnly: m } = il('chromatic', {}),
          p = () => {
            let g = a.createElement(
              ue,
              { disabled: s, size: 'medium', variant: 'solid', onClick: c },
              a.createElement($t, null),
              'Take snapshots',
            );
            return i
              ? i.currentStep === 'error'
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(ac, { localBuildProgress: i, title: 'Build failed' }),
                    g,
                  )
                : a.createElement(ni, { localBuildProgress: i })
              : g;
          };
        return a.createElement(
          Ne,
          {
            footer: a.createElement(
              qr,
              null,
              a.createElement(
                lt,
                null,
                t &&
                  !e &&
                  n &&
                  a.createElement(
                    G,
                    { muted: !0, style: { marginLeft: 5 } },
                    'Waiting for build on ',
                    o,
                  ),
              ),
              a.createElement(lt, { push: !0 }, a.createElement(Gr, null)),
            ),
          },
          e?.networkError
            ? a.createElement(
                ye,
                null,
                a.createElement(
                  de,
                  null,
                  a.createElement(
                    'div',
                    null,
                    a.createElement(fe, null, 'Network error'),
                    a.createElement(G, null, e.networkError.message),
                  ),
                  a.createElement(
                    ue,
                    { size: 'medium', variant: 'solid', onClick: () => l(null) },
                    'Log out',
                  ),
                ),
              )
            : e?.graphQLErrors?.length
              ? a.createElement(
                  ye,
                  null,
                  a.createElement(
                    de,
                    null,
                    a.createElement(
                      'div',
                      null,
                      a.createElement(fe, null, e.graphQLErrors[0].message),
                      a.createElement(
                        G,
                        { center: !0, muted: !0 },
                        e.graphQLErrors[0].extensions.code === 'FORBIDDEN'
                          ? 'You may have insufficient permissions. Try logging out and back in again.'
                          : "Try logging out or clear your browser's local storage.",
                      ),
                    ),
                    a.createElement(
                      Ft,
                      null,
                      a.createElement(
                        ue,
                        { size: 'medium', variant: 'solid', onClick: () => l(null) },
                        'Log out',
                      ),
                      a.createElement(
                        Vi,
                        { withArrow: !0, href: `${hs}#troubleshooting`, target: '_blank' },
                        'Troubleshoot',
                      ),
                    ),
                  ),
                )
              : t
                ? n
                  ? d || u || m
                    ? a.createElement(
                        ye,
                        null,
                        a.createElement(
                          de,
                          null,
                          a.createElement(
                            'div',
                            null,
                            a.createElement(fe, null, 'Visual Tests disabled for this story'),
                            a.createElement(
                              G,
                              { center: !0, muted: !0 },
                              'Update ',
                              a.createElement(
                                'code',
                                null,
                                'parameters.chromatic.',
                                d ? 'disable' : u ? 'disableSnapshot' : 'docsOnly',
                              ),
                              ' to enable snapshots for this story.',
                            ),
                          ),
                          a.createElement(
                            Vi,
                            {
                              withArrow: !0,
                              href: 'https://www.chromatic.com/docs/ignoring-elements/#ignore-stories',
                              target: '_blank',
                            },
                            'Read more',
                          ),
                        ),
                      )
                    : r
                      ? null
                      : a.createElement(
                          ye,
                          null,
                          a.createElement(
                            de,
                            null,
                            a.createElement(
                              'div',
                              null,
                              a.createElement(fe, null, 'Create a test baseline'),
                              a.createElement(
                                G,
                                { center: !0, muted: !0 },
                                'Take an image snapshot of your stories to save their "last known good state" as test baselines.',
                              ),
                            ),
                            p(),
                          ),
                        )
                  : a.createElement(
                      ye,
                      null,
                      a.createElement(
                        de,
                        null,
                        a.createElement(
                          'div',
                          null,
                          a.createElement(fe, null, 'Project not found'),
                          a.createElement(
                            G,
                            { center: !0, muted: !0 },
                            'You may not have access to this project or it may not exist.',
                          ),
                        ),
                        a.createElement(
                          Vi,
                          { isButton: !0, onClick: () => l(null), withArrow: !0 },
                          'Switch account',
                        ),
                      ),
                    )
                : a.createElement(pi, null),
        );
      },
      Y6 = (e) => Object.fromEntries(Object.entries(e).map(([t]) => [t, null])),
      Q6 = ({ buildIsReviewable: e, userCanReview: t, onReviewSuccess: n, onReviewError: r }) => {
        let [{ fetching: i }, o] = Ms(Ih),
          l = W(
            async (d) => {
              try {
                if (!e) throw new Error('Build is not reviewable');
                if (!t) throw new Error('No permission to review tests');
                let { error: u } = await o({ input: d });
                if (u) throw u;
                n?.(d);
              } catch (u) {
                r?.(u, d);
              }
            },
            [n, r, o, e, t],
          ),
          s = W((d, u = 'SPEC') => l({ status: 'ACCEPTED', testId: d, batch: u }), [l]),
          c = W((d, u = 'SPEC') => l({ status: 'PENDING', testId: d, batch: u }), [l]);
        return {
          isReviewing: i,
          acceptTest: s,
          unacceptTest: c,
          buildIsReviewable: e,
          userCanReview: t,
        };
      },
      K6 = gt(`
  mutation UpdateUserPreferences($input: UserPreferencesInput!) {
    updateUserPreferences(input: $input) {
      updatedPreferences {
        vtaOnboarding
      }
    }
  }
`),
      J6 = ({ lastBuildOnBranch: e, vtaOnboarding: t }) => {
        let n = vn(),
          { notifications: r, storyId: i } = yn(),
          [o, l] = a.useState(!1),
          s = a.useCallback(() => {
            l(!0), r.forEach(({ id: h }) => n.clearNotification(h));
          }, [n, r]),
          [c, d] = a.useState(!1),
          u = a.useCallback(() => d(!0), []),
          [m, p] = a.useState(!0);
        a.useEffect(() => {
          if (n?.getUrlState?.().queryParams.vtaOnboarding === 'true') {
            p(!1);
            return;
          }
          t && p(t === 'COMPLETED' || t === 'DISMISSED');
        }, [n, t]);
        let [{ fetching: g }, f] = Ms(K6),
          y = a.useCallback(
            async (h) => {
              await f({ input: { vtaOnboarding: h ? 'COMPLETED' : 'DISMISSED' } }), p(!0), d(!1);
              let E = new URL(window.location.href);
              E.searchParams.has('vtaOnboarding') &&
                (E.searchParams.delete('vtaOnboarding'),
                window.history.replaceState({}, '', E.href));
            },
            [f],
          ),
          k = a.useMemo(
            () =>
              (
                (e &&
                  'testsForStatus' in e &&
                  e.testsForStatus?.nodes &&
                  Nn(ec, e.testsForStatus.nodes)) ||
                []
              ).some(
                (h) =>
                  h?.status === 'PENDING' && h?.result === 'CHANGED' && h?.story?.storyId === i,
              ),
            [e, i],
          ),
          b = !o && !m && !c;
        return {
          showOnboarding: b,
          showGuidedTour: !b && !m,
          completeOnboarding: s,
          skipOnboarding: a.useCallback(() => y(!1), [y]),
          completeWalkthrough: a.useCallback(() => y(!0), [y]),
          skipWalkthrough: a.useCallback(() => y(!1), [y]),
          startWalkthrough: u,
          lastBuildHasChangesForStory: k,
          isUpdating: g,
        };
      },
      X6 = ({
        isOutdated: e,
        selectedBuildInfo: t,
        setSelectedBuildInfo: n,
        dismissBuildError: r,
        localBuildProgress: i,
        setOutdated: o,
        updateBuildStatus: l,
        projectId: s,
        gitInfo: c,
        storyId: d,
      }) => {
        let u = vn(),
          { addNotification: m, setOptions: p, togglePanel: g } = u,
          f = Rh({ projectId: s, storyId: d, gitInfo: c, selectedBuildInfo: t }),
          {
            account: y,
            features: k,
            manageUrl: b,
            hasData: h,
            hasProject: v,
            hasSelectedBuild: E,
            lastBuildOnBranch: S,
            lastBuildOnBranchIsReady: B,
            lastBuildOnBranchIsSelectable: j,
            selectedBuild: Y,
            selectedBuildMatchesGit: J,
            queryError: ce,
            rerunQuery: Se,
            userCanReview: Oe,
          } = f,
          xe = W(
            ({ onDismiss: C }) => {
              C(), p({ selectedPanel: qt }), g(!0);
            },
            [p, g],
          ),
          qe = Q6({
            buildIsReviewable: !!Y && Y.id === S?.id,
            userCanReview: Oe,
            onReviewSuccess: Se,
            onReviewError: (C, M) => {
              C instanceof Error &&
                m({
                  id: `${U}/errorAccepting/${Date.now()}`,
                  content: {
                    headline: `Failed to ${M.status === 'ACCEPTED' ? 'accept' : 'unaccept'} changes`,
                    subHeadline: C.message,
                  },
                  icon: a.createElement(Wt, { color: Lt.negative }),
                  duration: 8e3,
                  onClick: xe,
                });
            },
          });
        oe(() => o(!J), [J, o]);
        let pe =
            S && 'testsForStatus' in S && S.testsForStatus?.nodes && Nn(ec, S.testsForStatus.nodes),
          Fe = j && ip(u, pe || []);
        oe(() => {
          l((C) => ({ ...Y6(C), ...Fe }));
        }, [JSON.stringify(Fe), l]),
          oe(() => {
            n((C) =>
              op(C, {
                shouldSwitchToLastBuildOnBranch: j && B,
                lastBuildOnBranchId: S?.id,
                storyId: d,
              }),
            );
          }, [j, B, S?.id, n, d]);
        let Bt = W(() => S?.id && j && n({ buildId: S.id, storyId: d }), [n, j, S?.id, d]),
          {
            showOnboarding: _e,
            showGuidedTour: bt,
            completeOnboarding: Dn,
            completeWalkthrough: Kt,
            skipOnboarding: ri,
            skipWalkthrough: zn,
            startWalkthrough: Un,
            lastBuildHasChangesForStory: Da,
          } = J6(f);
        return k && !k.uiTests
          ? a.createElement(lp, { manageUrl: b })
          : y?.suspensionReason
            ? a.createElement(b0, {
                billingUrl: y.billingUrl,
                suspensionReason: y.suspensionReason,
              })
            : _e && v
              ? a.createElement(
                  a.Fragment,
                  null,
                  !h || ce
                    ? a.createElement(a.Fragment, null)
                    : a.createElement(
                        Zi,
                        { watchState: f },
                        a.createElement(h7, {
                          gitInfo: c,
                          projectId: s,
                          updateBuildStatus: l,
                          dismissBuildError: r,
                          localBuildProgress: i,
                          showInitialBuildScreen: !Y,
                          onComplete: Dn,
                          onSkip: ri,
                          lastBuildHasChangesForStory: Da,
                        }),
                      ),
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  !Y || !E || !h || ce
                    ? a.createElement(q6, {
                        queryError: ce,
                        hasData: h,
                        hasProject: v,
                        hasSelectedBuild: E,
                        branch: c.branch,
                        dismissBuildError: r,
                        isOutdated: e,
                        localBuildProgress: i,
                        ...(j && { switchToLastBuildOnBranch: Bt }),
                      })
                    : a.createElement(
                        S7,
                        { watchState: qe },
                        a.createElement(
                          Zi,
                          { watchState: f },
                          a.createElement(G6, {
                            branch: c.branch,
                            dismissBuildError: r,
                            isOutdated: e,
                            localBuildProgress: i,
                            ...(S && { lastBuildOnBranch: S }),
                            ...(j && { switchToLastBuildOnBranch: Bt }),
                            userCanReview: Oe,
                            storyId: d,
                          }),
                        ),
                      ),
                  bt &&
                    a.createElement(
                      Zi,
                      { watchState: { selectedBuild: Y } },
                      a.createElement(qh, {
                        managerApi: u,
                        skipWalkthrough: zn,
                        startWalkthrough: Un,
                        completeWalkthrough: Kt,
                      }),
                    ),
                );
      },
      ef = (e) => {
        let [t, n] = rt('selectedBuildInfo');
        return a.createElement(X6, { selectedBuildInfo: t, setSelectedBuildInfo: n, ...e });
      },
      tf = ({ active: e, api: t }) => {
        let [n, r] = Ns(),
          i = W(
            (_e) => {
              r(_e), _e || K2('authenticationScreen', 'exchangeParameters');
            },
            [r],
          ),
          { storyId: o } = yn(),
          [l, s] = Re(window.navigator.onLine);
        oe(() => {
          let _e = () => s(!0),
            bt = () => s(!1);
          return (
            window.addEventListener('online', _e),
            window.addEventListener('offline', bt),
            () => {
              window.removeEventListener('online', _e), window.removeEventListener('offline', bt);
            }
          );
        }, []);
        let [c] = Ie($d),
          [d] = Ie(cs),
          [u] = Ie(us),
          [m] = Ie(Di),
          [p, g] = Ie(ms),
          [, f] = Ie(Di),
          y = di({}),
          k = W((_e) => t.experimental_updateStatus(U, _e), [t]),
          {
            loading: b,
            projectId: h,
            configFile: v,
            updateProject: E,
            projectUpdatingFailed: S,
            projectIdUpdated: B,
            clearProjectIdUpdated: j,
          } = Ls(),
          [Y, J] = rt('createdProjectId'),
          [ce, Se] = Ie(ps),
          Oe = W((_e) => y(Qd, _e), [y]),
          {
            isRunning: xe,
            startBuild: qe,
            stopBuild: pe,
          } = As({ localBuildProgress: p, accessToken: n }),
          Fe = (_e) =>
            a.createElement(
              ou,
              { key: qt, value: bu },
              a.createElement(
                Eu,
                { value: Oe },
                a.createElement(
                  m2,
                  { value: { accessToken: n, setAccessToken: i } },
                  a.createElement(
                    J2,
                    { addonUninstalled: ce, setAddonUninstalled: Se },
                    a.createElement(
                      ym,
                      null,
                      a.createElement(
                        ap,
                        { watchState: { isRunning: xe, startBuild: qe, stopBuild: pe } },
                        a.createElement(
                          'div',
                          { hidden: !e, style: { containerType: 'size', height: '100%' } },
                          _e,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
        if (!e) return Fe(null);
        if (window.CONFIG_TYPE !== 'DEVELOPMENT') return Fe(a.createElement(ep, null));
        if (ce) return Fe(a.createElement(np, null));
        if (u) return Fe(a.createElement(tp, { offline: u }));
        if (!n)
          return Fe(
            a.createElement(P4, {
              key: qt,
              setAccessToken: i,
              setCreatedProjectId: J,
              hasProjectId: !!h,
            }),
          );
        if (b) return e ? a.createElement(io, null) : null;
        if (!h)
          return Fe(
            a.createElement(Q4, {
              createdProjectId: Y,
              setCreatedProjectId: J,
              onUpdateProject: E,
            }),
          );
        if (d || !c) return console.error(d), Fe(a.createElement(j4, null));
        if (S) {
          if (!v) throw new Error('Missing config file after configuration failure');
          return Fe(a.createElement(q4, { projectId: h, configFile: v }));
        }
        if (B) {
          if (!v) throw new Error('Missing config file after configuration success');
          return Fe(a.createElement(U4, { projectId: h, configFile: v, goToNext: j }));
        }
        let Bt = c.branch === p?.branch;
        return Fe(
          a.createElement(ef, {
            dismissBuildError: () => g(void 0),
            isOutdated: !!m,
            localBuildProgress: Bt ? p : void 0,
            setOutdated: f,
            updateBuildStatus: k,
            projectId: h,
            gitInfo: c,
            storyId: o,
          }),
        );
      },
      X1;
    Yn.register(U, (e) => {
      Yn.add(qt, {
        type: Wa.PANEL,
        title: 'Visual Tests',
        paramKey: Kd,
        match: ({ viewMode: r }) => r === 'story',
        render: ({ active: r }) => a.createElement(tf, { active: !!r, api: e }),
      }),
        Yn.add(zd, {
          type: Wa.experimental_SIDEBAR_TOP,
          render: () => a.createElement(u2, { api: e }),
        }),
        Yn.add(Ud, {
          type: Wa.experimental_SIDEBAR_BOTTOM,
          render: () => a.createElement(u5, { api: e }),
        });
      let t = e.getChannel();
      if (!t) return;
      let n;
      t.on(`${U}/heartbeat`, () => {
        clearTimeout(X1),
          n && (e.clearNotification(n), (n = void 0)),
          (X1 = setTimeout(() => {
            (n = `${U}/connection-lost/${Date.now()}`),
              e.addNotification({
                id: n,
                content: {
                  headline: 'Connection lost',
                  subHeadline: 'Lost connection to the Storybook server. Try refreshing the page.',
                },
                icon: a.createElement(Wt, { color: Lt.negative }),
                link: void 0,
              });
          }, 3e3));
      });
    });
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
