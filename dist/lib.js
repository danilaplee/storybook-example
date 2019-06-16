!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react-bootstrap')))
    : 'function' == typeof define && define.amd
    ? define(['react-bootstrap'], t)
    : 'object' == typeof exports
    ? (exports['storybook-example'] = t(require('react-bootstrap')))
    : (e['storybook-example'] = t(e['react-bootstrap']));
})(global, function(e) {
  return (function(e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function(e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 17))
    );
  })([
    function(e, t, r) {
      'use strict';
      e.exports = r(7);
    },
    function(e, t, r) {
      e.exports = r(9)();
    },
    function(e, t, r) {
      'use strict';
      var n = function() {};
      e.exports = n;
    },
    function(e, t, r) {
      'use strict';
      e.exports = function(e, t, r, n, o, a, i, c) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var u = [r, n, o, a, i, c],
              l = 0;
            (s = new Error(
              t.replace(/%s/g, function() {
                return u[l++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATxJREFUSA1jYBgFoyEwoCHg5ubGbWpqGo7PEcz4JAnJCQoKLvr//3+DlJTUv+fPnx/Cpp4JmyAxYkCX5wMNj2BkZPwMxKtw6WHEJYFP3MTExBpo+H6gGlag4SFnzpxZi0s9yT4wNzcXBxoOcjErEPfgMxxkKU4LgEGQZWtrKwpSBAMODg4sf//+XQnkSwFdflBJSakCJoeLxmoByPB///5N/f79+35kSz5//twOdL090LBnzMzM4atXr/6Ly2CYONY4ABkKMhxomDbQpVc5OTkdgXw7IH8NUONvoJgjMGiOwgzBR2O1AKQB2RIg9zrQUBmgBbxAdv7Zs2cngdQQA3BaANKMZgkD0JIVQJdHEmMwTA3WOIBJHj58+DUoeIAGXwWKXRMSEkqByVGVBvnE0tJShaqGjho2GgJEhwAADnlyVQBosukAAAAASUVORK5CYII=';
    },
    function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAplJREFUaAXtV79LW1EUzktCoSFih26hS1wFwfxYsmRQ7FJakWAl4lAHQTvU1Qwtiv4Diu3SoWkdChWkaztkjUk0SB0EXRQyZZEEWghJ+h15N1xeYnLfj75QOA8u977zzj3n+7774/A8Hn5YAVaAFWAFWAFWgBVgBYamQCKRGLGT3Gdnst258Xh8otFolEOhULVSqZxaiadZmeTEnGQy+ahWqxURa4ziaZr2MRgMvs7lcn/MxPeacXbKt91ua/V6PYt4d+ApLmzLIPTUbI6hEIjFYhsA/MwAdr9UKh0ZbANfXScA8FMAv2lAlg+Hw+sGm9Krq2cA4J+0Wq0TIHssoat6vd7JQqFwI9mUh66tQCqVegDlvxnAtwB+wSp4YunaNRoIBPZA4LksLcBnAD4r28yOXdlC0Wh0CeA/yeBwbX4H+Bfo27Ld7NjSFgKgcdVEVKzg+8HgfwlCS3bBU0zTBAD+HeaVcSDnKUC/JxKJjDabzUOAfSj8APq33++fw5V5K2x2elMECDzAvEXzoR30I4HvwKp9BrhOsdKBruTz+TM7oOW5ymdA3zZlAi8CAGATLY29/FXYRA9/Klbb4l3v30P5VYPN1qvyChSLxV/ItEigRUYig9a1Enqx2hJ+1GPeMYrVG9nmxFh5BUQyKPsS4y/3rcS/KFYid6/eNAEKch8JfHqFtgZycfLTHypWM9hmP4XByd4SAQJAB5i2j7wSvYBh62Sw/XZ6fXPCZpkAJR9EAuAdKVb9iCof4l5B6PYByDRa52BLfldYHUeKlRSza9i5Eru+KBrwK3iOX8ILuM+i3QkCQlSspkHwWjGMZTfbBCizkQQILAP8D8uohjWRzgRuqN1h5ee8rAArwAqwAqwAK8AKsAL/mQJ/Aaap8zeXeMb4AAAAAElFTkSuQmCC';
    },
    function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAA4NJREFUeAHtmL+rE0EQx/ODRAIBG1MEtPMf0CRKhFTaBIIimPI9Cwt9YmGnKD7T+PRPsLGJhZUovCKNRRBs8uMVFukkhYVgRJQU0RSJ35G34Vh2j8vd7v2AOTj2djY7M/thZm5yqRRfTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMgAkwASZgiEDWkJ7I1NRqtRflcvnnN1w2nMjYUBqWTsC5u1qtHqTT6U/VavWWDbtpG0rD0FmpVC7CzkfceWEPoF4Vi8V7/X7/j5AFHRMJqNFolBaLxdF6vT6tAHAEWWs8HhtJucSlWLvdzgLOGw0c4pXN5/O/FOB8iRJXpAuFwjOcdFdzWgJzZTAYfNesby1OVIqhEF9F5LzHKVV+rzOZzLXhcHi4NQWXDYlJsXq9fhZwuho4KRToA9NwiFsiAAFOYblcvoW/J8lp+QKcD61Wa1+Wm5irQtWEXqM6kFpdRM+OSingfMXaeby1fqjWg8piH0HUDOrg4PBL3DdswSG4sY4gVTNITjuuPcB56Zgbf4wtIMA5hfShZvCM6tRY645Go5uqNZOyWKZYp9PJAAA1g0o4APA5l8vdMQlCp8t4o0id7mQyWesMepHP53NqBnXRQc3gZZPNoJtPRiMIb5vOdDo9bDabJ9yMuq1RM4j1h5rfUDO4i7rzRbNuXGwMEMFBSjzF3ZzNZu/8QPLQDD630Qy6UTUCSMARhvxA8tgMPhE2whoDv8VkOE7HUWh7pVLpeq/X++uUq56hJ7JmUOWPkAWKICrIUHRBKJNHr5GEV/oefrsj7z+eW28GNXb/iwNHENUaqjkEQ2fILZLi0Azq/CZ5YECkxC8kD83gazSDum8/ZNr6FSjFhHdUY6jWUKQImTzK6eaxGbwt6wl7biSChNPbRBLSch/QHom90vgb80qY/Y5kfzM1Coi0eoGEn9GH9XO4VfatfBmELV+XykFfipybPEJybtk8I00PUHcebwQRPxipQfIZvNQkeQ/NAYe+DIbeDKp8ETIrESSUbxNJgGP1y6DwadvRSgQJJ7aIpEibQeGvarQKiAx6hHQfdWegcjBqmdUUcx5Ol25IrcibQaef8rP1CBIGNZFEXwYjbwaFj6oxtAgSxh2RdAmyWDSDwrfYjATp+E9qbHxiR5gAE2ACTIAJMAEmwASYABNgAkyACTABJsAEmAATYAJMwDqBf5weehjKYoxGAAAAAElFTkSuQmCC';
    },
    function(e, t, r) {
      'use strict';
      /** @license React v16.8.4
       * react.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(8),
        o = 'function' == typeof Symbol && Symbol.for,
        a = o ? Symbol.for('react.element') : 60103,
        i = o ? Symbol.for('react.portal') : 60106,
        c = o ? Symbol.for('react.fragment') : 60107,
        s = o ? Symbol.for('react.strict_mode') : 60108,
        u = o ? Symbol.for('react.profiler') : 60114,
        l = o ? Symbol.for('react.provider') : 60109,
        f = o ? Symbol.for('react.context') : 60110,
        p = o ? Symbol.for('react.concurrent_mode') : 60111,
        d = o ? Symbol.for('react.forward_ref') : 60112,
        h = o ? Symbol.for('react.suspense') : 60113,
        y = o ? Symbol.for('react.memo') : 60115,
        m = o ? Symbol.for('react.lazy') : 60116,
        v = 'function' == typeof Symbol && Symbol.iterator;
      function b(e) {
        for (
          var t = arguments.length - 1,
            r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 0;
          n < t;
          n++
        )
          r += '&args[]=' + encodeURIComponent(arguments[n + 1]);
        !(function(e, t, r, n, o, a, i, c) {
          if (!e) {
            if (((e = void 0), void 0 === t))
              e = Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
              );
            else {
              var s = [r, n, o, a, i, c],
                u = 0;
              (e = Error(
                t.replace(/%s/g, function() {
                  return s[u++];
                })
              )).name = 'Invariant Violation';
            }
            throw ((e.framesToPop = 1), e);
          }
        })(
          !1,
          'Minified React error #' +
            e +
            '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
          r
        );
      }
      var A = {
          isMounted: function() {
            return !1;
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        g = {};
      function w(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = r || A);
      }
      function E() {}
      function x(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = r || A);
      }
      (w.prototype.isReactComponent = {}),
        (w.prototype.setState = function(e, t) {
          'object' != typeof e &&
            'function' != typeof e &&
            null != e &&
            b('85'),
            this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (w.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (E.prototype = w.prototype);
      var S = (x.prototype = new E());
      (S.constructor = x), n(S, w.prototype), (S.isPureReactComponent = !0);
      var O = { current: null },
        j = { current: null },
        R = Object.prototype.hasOwnProperty,
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, r) {
        var n = void 0,
          o = {},
          i = null,
          c = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (c = t.ref),
          void 0 !== t.key && (i = '' + t.key),
          t))
            R.call(t, n) && !k.hasOwnProperty(n) && (o[n] = t[n]);
        var s = arguments.length - 2;
        if (1 === s) o.children = r;
        else if (1 < s) {
          for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2];
          o.children = u;
        }
        if (e && e.defaultProps)
          for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: c,
          props: o,
          _owner: j.current
        };
      }
      function P(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === a;
      }
      var U = /\/+/g,
        N = [];
      function T(e, t, r, n) {
        if (N.length) {
          var o = N.pop();
          return (
            (o.result = e),
            (o.keyPrefix = t),
            (o.func = r),
            (o.context = n),
            (o.count = 0),
            o
          );
        }
        return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
      }
      function B(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > N.length && N.push(e);
      }
      function M(e, t, r) {
        return null == e
          ? 0
          : (function e(t, r, n, o) {
              var c = typeof t;
              ('undefined' !== c && 'boolean' !== c) || (t = null);
              var s = !1;
              if (null === t) s = !0;
              else
                switch (c) {
                  case 'string':
                  case 'number':
                    s = !0;
                    break;
                  case 'object':
                    switch (t.$$typeof) {
                      case a:
                      case i:
                        s = !0;
                    }
                }
              if (s) return n(o, t, '' === r ? '.' + I(t, 0) : r), 1;
              if (((s = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(t)))
                for (var u = 0; u < t.length; u++) {
                  var l = r + I((c = t[u]), u);
                  s += e(c, l, n, o);
                }
              else if (
                ((l =
                  null === t || 'object' != typeof t
                    ? null
                    : 'function' == typeof (l = (v && t[v]) || t['@@iterator'])
                    ? l
                    : null),
                'function' == typeof l)
              )
                for (t = l.call(t), u = 0; !(c = t.next()).done; )
                  s += e((c = c.value), (l = r + I(c, u++)), n, o);
              else
                'object' === c &&
                  b(
                    '31',
                    '[object Object]' == (n = '' + t)
                      ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                      : n,
                    ''
                  );
              return s;
            })(e, '', t, r);
      }
      function I(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? (function(e) {
              var t = { '=': '=0', ':': '=2' };
              return (
                '$' +
                ('' + e).replace(/[=:]/g, function(e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function L(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function F(e, t, r) {
        var n = e.result,
          o = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? _(e, n, r, function(e) {
                return e;
              })
            : null != e &&
              (P(e) &&
                (e = (function(e, t) {
                  return {
                    $$typeof: a,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  };
                })(
                  e,
                  o +
                    (!e.key || (t && t.key === e.key)
                      ? ''
                      : ('' + e.key).replace(U, '$&/') + '/') +
                    r
                )),
              n.push(e));
      }
      function _(e, t, r, n, o) {
        var a = '';
        null != r && (a = ('' + r).replace(U, '$&/') + '/'),
          M(e, F, (t = T(t, a, n, o))),
          B(t);
      }
      function q() {
        var e = O.current;
        return null === e && b('307'), e;
      }
      var J = {
          Children: {
            map: function(e, t, r) {
              if (null == e) return e;
              var n = [];
              return _(e, n, null, t, r), n;
            },
            forEach: function(e, t, r) {
              if (null == e) return e;
              M(e, L, (t = T(null, null, t, r))), B(t);
            },
            count: function(e) {
              return M(
                e,
                function() {
                  return null;
                },
                null
              );
            },
            toArray: function(e) {
              var t = [];
              return (
                _(e, t, null, function(e) {
                  return e;
                }),
                t
              );
            },
            only: function(e) {
              return P(e) || b('143'), e;
            }
          },
          createRef: function() {
            return { current: null };
          },
          Component: w,
          PureComponent: x,
          createContext: function(e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function(e) {
            return { $$typeof: d, render: e };
          },
          lazy: function(e) {
            return { $$typeof: m, _ctor: e, _status: -1, _result: null };
          },
          memo: function(e, t) {
            return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
          },
          useCallback: function(e, t) {
            return q().useCallback(e, t);
          },
          useContext: function(e, t) {
            return q().useContext(e, t);
          },
          useEffect: function(e, t) {
            return q().useEffect(e, t);
          },
          useImperativeHandle: function(e, t, r) {
            return q().useImperativeHandle(e, t, r);
          },
          useDebugValue: function() {},
          useLayoutEffect: function(e, t) {
            return q().useLayoutEffect(e, t);
          },
          useMemo: function(e, t) {
            return q().useMemo(e, t);
          },
          useReducer: function(e, t, r) {
            return q().useReducer(e, t, r);
          },
          useRef: function(e) {
            return q().useRef(e);
          },
          useState: function(e) {
            return q().useState(e);
          },
          Fragment: c,
          StrictMode: s,
          Suspense: h,
          createElement: C,
          cloneElement: function(e, t, r) {
            null == e && b('267', e);
            var o = void 0,
              i = n({}, e.props),
              c = e.key,
              s = e.ref,
              u = e._owner;
            if (null != t) {
              void 0 !== t.ref && ((s = t.ref), (u = j.current)),
                void 0 !== t.key && (c = '' + t.key);
              var l = void 0;
              for (o in (e.type &&
                e.type.defaultProps &&
                (l = e.type.defaultProps),
              t))
                R.call(t, o) &&
                  !k.hasOwnProperty(o) &&
                  (i[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o]);
            }
            if (1 === (o = arguments.length - 2)) i.children = r;
            else if (1 < o) {
              l = Array(o);
              for (var f = 0; f < o; f++) l[f] = arguments[f + 2];
              i.children = l;
            }
            return {
              $$typeof: a,
              type: e.type,
              key: c,
              ref: s,
              props: i,
              _owner: u
            };
          },
          createFactory: function(e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: P,
          version: '16.8.4',
          unstable_ConcurrentMode: p,
          unstable_Profiler: u,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: O,
            ReactCurrentOwner: j,
            assign: n
          }
        },
        D = { default: J },
        Q = (D && J) || D;
      e.exports = Q.default || Q;
    },
    function(e, t, r) {
      'use strict';
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n =
          Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      e.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var e = new String('abc');
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t['_' + String.fromCharCode(r)] = r;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(t)
              .map(function(e) {
                return t[e];
              })
              .join('')
          )
            return !1;
          var n = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(e) {
              n[e] = e;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, n)).join('')
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function(e, t) {
            for (
              var r,
                i,
                c = (function(e) {
                  if (null == e)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined'
                    );
                  return Object(e);
                })(e),
                s = 1;
              s < arguments.length;
              s++
            ) {
              for (var u in (r = Object(arguments[s])))
                o.call(r, u) && (c[u] = r[u]);
              if (n) {
                i = n(r);
                for (var l = 0; l < i.length; l++)
                  a.call(r, i[l]) && (c[i[l]] = r[i[l]]);
              }
            }
            return c;
          };
    },
    function(e, t, r) {
      'use strict';
      var n = r(10);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, r, o, a, i) {
            if (i !== n) {
              var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((c.name = 'Invariant Violation'), c);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o
          };
          return (r.PropTypes = r), r;
        });
    },
    function(e, t, r) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(t, r) {
      t.exports = e;
    },
    function(e, t, r) {
      var n;
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function() {
        'use strict';
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var a = typeof n;
              if ('string' === a || 'number' === a) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var i = o.apply(null, n);
                i && e.push(i);
              } else if ('object' === a)
                for (var c in n) r.call(n, c) && n[c] && e.push(c);
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function() {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    function(e, t, r) {
      var n = r(14);
      'string' == typeof n && (n = [[e.i, n, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(15)(n, o);
      n.locals && (e.exports = n.locals);
    },
    function(e, t, r) {},
    function(e, t, r) {
      var n,
        o,
        a = {},
        i = ((n = function() {
          return window && document && document.all && !window.atob;
        }),
        function() {
          return void 0 === o && (o = n.apply(this, arguments)), o;
        }),
        c = (function(e) {
          var t = {};
          return function(e, r) {
            if ('function' == typeof e) return e();
            if (void 0 === t[e]) {
              var n = function(e, t) {
                return t ? t.querySelector(e) : document.querySelector(e);
              }.call(this, e, r);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          };
        })(),
        s = null,
        u = 0,
        l = [],
        f = r(16);
      function p(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r],
            o = a[n.id];
          if (o) {
            o.refs++;
            for (var i = 0; i < o.parts.length; i++) o.parts[i](n.parts[i]);
            for (; i < n.parts.length; i++) o.parts.push(b(n.parts[i], t));
          } else {
            var c = [];
            for (i = 0; i < n.parts.length; i++) c.push(b(n.parts[i], t));
            a[n.id] = { id: n.id, refs: 1, parts: c };
          }
        }
      }
      function d(e, t) {
        for (var r = [], n = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            i = t.base ? a[0] + t.base : a[0],
            c = { css: a[1], media: a[2], sourceMap: a[3] };
          n[i] ? n[i].parts.push(c) : r.push((n[i] = { id: i, parts: [c] }));
        }
        return r;
      }
      function h(e, t) {
        var r = c(e.insertInto);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var n = l[l.length - 1];
        if ('top' === e.insertAt)
          n
            ? n.nextSibling
              ? r.insertBefore(t, n.nextSibling)
              : r.appendChild(t)
            : r.insertBefore(t, r.firstChild),
            l.push(t);
        else if ('bottom' === e.insertAt) r.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var o = c(e.insertAt.before, r);
          r.insertBefore(t, o);
        }
      }
      function y(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = l.indexOf(e);
        t >= 0 && l.splice(t, 1);
      }
      function m(e) {
        var t = document.createElement('style');
        if (
          (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
          void 0 === e.attrs.nonce)
        ) {
          var n = (function() {
            0;
            return r.nc;
          })();
          n && (e.attrs.nonce = n);
        }
        return v(t, e.attrs), h(e, t), t;
      }
      function v(e, t) {
        Object.keys(t).forEach(function(r) {
          e.setAttribute(r, t[r]);
        });
      }
      function b(e, t) {
        var r, n, o, a;
        if (t.transform && e.css) {
          if (
            !(a =
              'function' == typeof t.transform
                ? t.transform(e.css)
                : t.transform.default(e.css))
          )
            return function() {};
          e.css = a;
        }
        if (t.singleton) {
          var i = u++;
          (r = s || (s = m(t))),
            (n = w.bind(null, r, i, !1)),
            (o = w.bind(null, r, i, !0));
        } else
          e.sourceMap &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          'function' == typeof URL.revokeObjectURL &&
          'function' == typeof Blob &&
          'function' == typeof btoa
            ? ((r = (function(e) {
                var t = document.createElement('link');
                return (
                  void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                  (e.attrs.rel = 'stylesheet'),
                  v(t, e.attrs),
                  h(e, t),
                  t
                );
              })(t)),
              (n = function(e, t, r) {
                var n = r.css,
                  o = r.sourceMap,
                  a = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || a) && (n = f(n));
                o &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                    ' */');
                var i = new Blob([n], { type: 'text/css' }),
                  c = e.href;
                (e.href = URL.createObjectURL(i)), c && URL.revokeObjectURL(c);
              }.bind(null, r, t)),
              (o = function() {
                y(r), r.href && URL.revokeObjectURL(r.href);
              }))
            : ((r = m(t)),
              (n = function(e, t) {
                var r = t.css,
                  n = t.media;
                n && e.setAttribute('media', n);
                if (e.styleSheet) e.styleSheet.cssText = r;
                else {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                  e.appendChild(document.createTextNode(r));
                }
              }.bind(null, r)),
              (o = function() {
                y(r);
              }));
        return (
          n(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              n((e = t));
            } else o();
          }
        );
      }
      e.exports = function(e, t) {
        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document)
          throw new Error(
            'The style-loader cannot be used in a non-browser environment'
          );
        ((t = t || {}).attrs = 'object' == typeof t.attrs ? t.attrs : {}),
          t.singleton || 'boolean' == typeof t.singleton || (t.singleton = i()),
          t.insertInto || (t.insertInto = 'head'),
          t.insertAt || (t.insertAt = 'bottom');
        var r = d(e, t);
        return (
          p(r, t),
          function(e) {
            for (var n = [], o = 0; o < r.length; o++) {
              var i = r[o];
              (c = a[i.id]).refs--, n.push(c);
            }
            e && p(d(e, t), t);
            for (o = 0; o < n.length; o++) {
              var c;
              if (0 === (c = n[o]).refs) {
                for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                delete a[c.id];
              }
            }
          }
        );
      };
      var A,
        g = ((A = []),
        function(e, t) {
          return (A[e] = t), A.filter(Boolean).join('\n');
        });
      function w(e, t, r, n) {
        var o = r ? '' : n.css;
        if (e.styleSheet) e.styleSheet.cssText = g(t, o);
        else {
          var a = document.createTextNode(o),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }
    },
    function(e, t) {
      e.exports = function(e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var r = t.protocol + '//' + t.host,
          n = r + t.pathname.replace(/\/[^\/]*$/, '/');
        return e.replace(
          /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
          function(e, t) {
            var o,
              a = t
                .trim()
                .replace(/^"(.*)"$/, function(e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function(e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
              ? e
              : ((o =
                  0 === a.indexOf('//')
                    ? a
                    : 0 === a.indexOf('/')
                    ? r + a
                    : n + a.replace(/^\.\//, '')),
                'url(' + JSON.stringify(o) + ')');
          }
        );
      };
    },
    function(e, t, r) {
      'use strict';
      r.r(t);
      var n = r(0),
        o = r.n(n),
        a = r(1),
        i = r.n(a),
        c = (r(11), r(3)),
        s = r.n(c);
      r(2);
      function u(e) {
        return '/' === e.charAt(0);
      }
      function l(e, t) {
        for (var r = t, n = r + 1, o = e.length; n < o; r += 1, n += 1)
          e[r] = e[n];
        e.pop();
      }
      var f = function(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
          r = (e && e.split('/')) || [],
          n = (t && t.split('/')) || [],
          o = e && u(e),
          a = t && u(t),
          i = o || a;
        if (
          (e && u(e) ? (n = r) : r.length && (n.pop(), (n = n.concat(r))),
          !n.length)
        )
          return '/';
        var c = void 0;
        if (n.length) {
          var s = n[n.length - 1];
          c = '.' === s || '..' === s || '' === s;
        } else c = !1;
        for (var f = 0, p = n.length; p >= 0; p--) {
          var d = n[p];
          '.' === d
            ? l(n, p)
            : '..' === d
            ? (l(n, p), f++)
            : f && (l(n, p), f--);
        }
        if (!i) for (; f--; f) n.unshift('..');
        !i || '' === n[0] || (n[0] && u(n[0])) || n.unshift('');
        var h = n.join('/');
        return c && '/' !== h.substr(-1) && (h += '/'), h;
      };
      'function' == typeof Symbol && Symbol.iterator;
      var p =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        d = function(e, t, r, n) {
          var o = void 0;
          'string' == typeof e
            ? ((o = (function(e) {
                var t = e || '/',
                  r = '',
                  n = '',
                  o = t.indexOf('#');
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o)));
                var a = t.indexOf('?');
                return (
                  -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a))),
                  {
                    pathname: t,
                    search: '?' === r ? '' : r,
                    hash: '#' === n ? '' : n
                  }
                );
              })(e)).state = t)
            : (void 0 === (o = p({}, e)).pathname && (o.pathname = ''),
              o.search
                ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search)
                : (o.search = ''),
              o.hash
                ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash)
                : (o.hash = ''),
              void 0 !== t && void 0 === o.state && (o.state = t));
          try {
            o.pathname = decodeURI(o.pathname);
          } catch (e) {
            throw e instanceof URIError
              ? new URIError(
                  'Pathname "' +
                    o.pathname +
                    '" could not be decoded. This is likely caused by an invalid percent-encoding.'
                )
              : e;
          }
          return (
            r && (o.key = r),
            n
              ? o.pathname
                ? '/' !== o.pathname.charAt(0) &&
                  (o.pathname = f(o.pathname, n.pathname))
                : (o.pathname = n.pathname)
              : o.pathname || (o.pathname = '/'),
            o
          );
        },
        h = ('undefined' == typeof window ||
          !window.document ||
          window.document.createElement,
        'function' == typeof Symbol && Symbol.iterator,
        Object.assign,
        Object.assign,
        'function' == typeof Symbol && Symbol.iterator,
        Object.assign,
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          });
      function y(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var m = function(e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        },
        v = (function(e) {
          function t() {
            var r, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
              a[i] = arguments[i];
            return (
              (r = n = y(this, e.call.apply(e, [this].concat(a)))),
              (n.handleClick = function(e) {
                if (
                  (n.props.onClick && n.props.onClick(e),
                  !e.defaultPrevented &&
                    0 === e.button &&
                    !n.props.target &&
                    !m(e))
                ) {
                  e.preventDefault();
                  var t = n.context.router.history,
                    r = n.props,
                    o = r.replace,
                    a = r.to;
                  o ? t.replace(a) : t.push(a);
                }
              }),
              y(n, r)
            );
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.replace, e.to),
                r = e.innerRef,
                n = (function(e, t) {
                  var r = {};
                  for (var n in e)
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, n) &&
                        (r[n] = e[n]));
                  return r;
                })(e, ['replace', 'to', 'innerRef']);
              s()(
                this.context.router,
                'You should not use <Link> outside a <Router>'
              ),
                s()(void 0 !== t, 'You must specify the "to" property');
              var a = this.context.router.history,
                i = 'string' == typeof t ? d(t, null, null, a.location) : t,
                c = a.createHref(i);
              return o.a.createElement(
                'a',
                h({}, n, { onClick: this.handleClick, href: c, ref: r })
              );
            }),
            t
          );
        })(o.a.Component);
      (v.propTypes = {
        onClick: i.a.func,
        target: i.a.string,
        replace: i.a.bool,
        to: i.a.oneOfType([i.a.string, i.a.object]).isRequired,
        innerRef: i.a.oneOfType([i.a.string, i.a.func])
      }),
        (v.defaultProps = { replace: !1 }),
        (v.contextTypes = {
          router: i.a.shape({
            history: i.a.shape({
              push: i.a.func.isRequired,
              replace: i.a.func.isRequired,
              createHref: i.a.func.isRequired
            }).isRequired
          }).isRequired
        });
      var b,
        A,
        g,
        w = v,
        E = (r(12), r(4)),
        x = r.n(E),
        S = r(5),
        O = r.n(S),
        j = r(6),
        R = r.n(j);
      r(13);
      class k extends o.a.Component {
        renderTick(e, t) {
          if (
            ('member' === e && !1 === t.isMember) ||
            ('user' === e && !0 === t.isMember)
          )
            return o.a.createElement('img', {
              alt: 'tick-check-box',
              src: x.a,
              srcSet: `${O.a}, ${R.a}`,
              className: 'check'
            });
        }
        renderTableBody() {
          const {
            isFetching: e,
            users: t,
            showMinimal: r,
            canDelete: n
          } = this.props;
          return e
            ? o.a.createElement(
                'div',
                { className: 'lds-rolling' },
                o.a.createElement('div', null)
              )
            : o.a.createElement(
                'tbody',
                null,
                t.map((e, t) => {
                  let a = 'users';
                  return (
                    !0 === e.isMember && (a = 'members'),
                    o.a.createElement(
                      'tr',
                      { key: e.phone, className: 'user-item-row' },
                      o.a.createElement(
                        'td',
                        { className: 'user-list-avatar-box' },
                        this.renderProfileImage(e)
                      ),
                      o.a.createElement(
                        'td',
                        null,
                        o.a.createElement(
                          'p',
                          { className: 'user-name' },
                          e.englishName
                        ),
                        o.a.createElement(
                          'p',
                          { className: 'user-role' },
                          e.englishPosition
                        )
                      ),
                      !r &&
                        o.a.createElement(
                          'td',
                          { className: 'tick-box' },
                          this.renderTick('user', e)
                        ),
                      !r &&
                        o.a.createElement(
                          'td',
                          { className: 'tick-box' },
                          this.renderTick('member', e)
                        ),
                      !r &&
                        o.a.createElement(
                          'td',
                          null,
                          o.a.createElement(
                            w,
                            {
                              className: 'user-item-edit',
                              to: `/${a}/${e.id}`
                            },
                            'Edit'
                          )
                        ),
                      n &&
                        o.a.createElement(
                          'td',
                          {
                            className: 'tick-box delete-pointer',
                            onClick: () => this.props.deleteFunc(e.id)
                          },
                          '✖'
                        )
                    )
                  );
                })
              );
        }
        renderProfileImage(e) {
          if (!e.avatarUrl || '' === e.avatarUrl) {
            const t = e.englishName.split(' ');
            let r = '';
            for (let e = 0; e < t.length; e++) r += t[e][0];
            return o.a.createElement(
              'div',
              { className: 'media-left media-middle' },
              o.a.createElement(
                'div',
                {
                  className: 'user__photo',
                  style: {
                    color: 'white',
                    backgroundColor: 'rgb(3,185, 86)',
                    textAlign: 'center',
                    lineHeight: '58px',
                    fontSize: '21px'
                  }
                },
                r.toUpperCase()
              )
            );
          }
          return o.a.createElement(
            'div',
            { className: 'media-left media-middle' },
            o.a.createElement('div', {
              className: 'user__photo',
              style: { backgroundImage: `url(${e.avatarUrl})` }
            })
          );
        }
        render() {
          const { showMinimal: e, canDelete: t } = this.props;
          return o.a.createElement(
            'table',
            { style: { width: '100%' }, className: 'userList' },
            o.a.createElement(
              'thead',
              null,
              o.a.createElement(
                'tr',
                { className: 'user-head-row' },
                o.a.createElement(
                  'th',
                  { style: { width: '50px' }, className: 'invheader' },
                  'Avatar'
                ),
                o.a.createElement('th', null, 'Name, position'),
                !e &&
                  o.a.createElement(
                    'th',
                    { style: { width: '150px', textAlign: 'center' } },
                    'Member'
                  ),
                !e &&
                  o.a.createElement(
                    'th',
                    { style: { width: '150px', textAlign: 'center' } },
                    'User'
                  ),
                !e &&
                  o.a.createElement('th', { className: 'invheader' }, 'Edit'),
                t &&
                  o.a.createElement('th', { className: 'invheader' }, 'Delete')
              )
            ),
            this.renderTableBody()
          );
        }
      }
      (b = k),
        (A = 'propTypes'),
        (g = {
          users: i.a.array,
          isFetching: i.a.bool,
          showMinimal: i.a.bool,
          canDelete: i.a.bool,
          deleteFunc: i.a.func
        }),
        A in b
          ? Object.defineProperty(b, A, {
              value: g,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (b[A] = g),
        r.d(t, 'UsersTable', function() {
          return C;
        });
      const C = k;
    }
  ]);
});
//# sourceMappingURL=lib.js.map
