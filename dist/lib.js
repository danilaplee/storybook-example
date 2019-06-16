!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('react'),
        require('react-router-dom'),
        require('react-bootstrap'),
        require('classnames')
      ))
    : 'function' == typeof define && define.amd
    ? define(['react', 'react-router-dom', 'react-bootstrap', 'classnames'], t)
    : 'object' == typeof exports
    ? (exports['storybook-example'] = t(
        require('react'),
        require('react-router-dom'),
        require('react-bootstrap'),
        require('classnames')
      ))
    : (e['storybook-example'] = t(
        e.react,
        e['react-router-dom'],
        e['react-bootstrap'],
        e.classnames
      ));
})(global, function(e, t, r, n) {
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
      r((r.s = 14))
    );
  })([
    function(t, r) {
      t.exports = e;
    },
    function(e, t, r) {
      e.exports = r(6)();
    },
    function(e, r) {
      e.exports = t;
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
      var n = r(7);
      function o() {}
      function a() {}
      (a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, r, o, a, i) {
            if (i !== n) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((s.name = 'Invariant Violation'), s);
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
    function(e, t) {
      e.exports = r;
    },
    function(e, t) {
      e.exports = n;
    },
    function(e, t, r) {
      var n = r(11);
      'string' == typeof n && (n = [[e.i, n, '']]);
      var o = { hmr: !0, transform: void 0, insertInto: void 0 };
      r(12)(n, o);
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
        s = (function(e) {
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
        c = null,
        l = 0,
        u = [],
        f = r(13);
      function A(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r],
            o = a[n.id];
          if (o) {
            o.refs++;
            for (var i = 0; i < o.parts.length; i++) o.parts[i](n.parts[i]);
            for (; i < n.parts.length; i++) o.parts.push(g(n.parts[i], t));
          } else {
            var s = [];
            for (i = 0; i < n.parts.length; i++) s.push(g(n.parts[i], t));
            a[n.id] = { id: n.id, refs: 1, parts: s };
          }
        }
      }
      function d(e, t) {
        for (var r = [], n = {}, o = 0; o < e.length; o++) {
          var a = e[o],
            i = t.base ? a[0] + t.base : a[0],
            s = { css: a[1], media: a[2], sourceMap: a[3] };
          n[i] ? n[i].parts.push(s) : r.push((n[i] = { id: i, parts: [s] }));
        }
        return r;
      }
      function p(e, t) {
        var r = s(e.insertInto);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
          );
        var n = u[u.length - 1];
        if ('top' === e.insertAt)
          n
            ? n.nextSibling
              ? r.insertBefore(t, n.nextSibling)
              : r.appendChild(t)
            : r.insertBefore(t, r.firstChild),
            u.push(t);
        else if ('bottom' === e.insertAt) r.appendChild(t);
        else {
          if ('object' != typeof e.insertAt || !e.insertAt.before)
            throw new Error(
              "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
            );
          var o = s(e.insertAt.before, r);
          r.insertBefore(t, o);
        }
      }
      function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      }
      function h(e) {
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
        return b(t, e.attrs), p(e, t), t;
      }
      function b(e, t) {
        Object.keys(t).forEach(function(r) {
          e.setAttribute(r, t[r]);
        });
      }
      function g(e, t) {
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
          var i = l++;
          (r = c || (c = h(t))),
            (n = E.bind(null, r, i, !1)),
            (o = E.bind(null, r, i, !0));
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
                  b(t, e.attrs),
                  p(e, t),
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
                  s = e.href;
                (e.href = URL.createObjectURL(i)), s && URL.revokeObjectURL(s);
              }.bind(null, r, t)),
              (o = function() {
                m(r), r.href && URL.revokeObjectURL(r.href);
              }))
            : ((r = h(t)),
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
                m(r);
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
          A(r, t),
          function(e) {
            for (var n = [], o = 0; o < r.length; o++) {
              var i = r[o];
              (s = a[i.id]).refs--, n.push(s);
            }
            e && A(d(e, t), t);
            for (o = 0; o < n.length; o++) {
              var s;
              if (0 === (s = n[o]).refs) {
                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                delete a[s.id];
              }
            }
          }
        );
      };
      var v,
        y = ((v = []),
        function(e, t) {
          return (v[e] = t), v.filter(Boolean).join('\n');
        });
      function E(e, t, r, n) {
        var o = r ? '' : n.css;
        if (e.styleSheet) e.styleSheet.cssText = y(t, o);
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
      var n,
        o,
        a,
        i = r(0),
        s = r.n(i),
        c = r(1),
        l = r.n(c),
        u = (r(8), r(2)),
        f = (r(9), r(3)),
        A = r.n(f),
        d = r(4),
        p = r.n(d),
        m = r(5),
        h = r.n(m);
      r(10);
      class b extends s.a.Component {
        renderTick(e, t) {
          if (
            ('member' === e && !1 === t.isMember) ||
            ('user' === e && !0 === t.isMember)
          )
            return s.a.createElement('img', {
              alt: 'tick-check-box',
              src: A.a,
              srcSet: `${p.a}, ${h.a}`,
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
            ? s.a.createElement(
                'div',
                { className: 'lds-rolling' },
                s.a.createElement('div', null)
              )
            : s.a.createElement(
                'tbody',
                null,
                t.map((e, t) => {
                  let o = 'users';
                  return (
                    !0 === e.isMember && (o = 'members'),
                    s.a.createElement(
                      'tr',
                      { key: e.phone, className: 'user-item-row' },
                      s.a.createElement(
                        'td',
                        { className: 'user-list-avatar-box' },
                        this.renderProfileImage(e)
                      ),
                      s.a.createElement(
                        'td',
                        null,
                        s.a.createElement(
                          'p',
                          { className: 'user-name' },
                          e.englishName
                        ),
                        s.a.createElement(
                          'p',
                          { className: 'user-role' },
                          e.englishPosition
                        )
                      ),
                      !r &&
                        s.a.createElement(
                          'td',
                          { className: 'tick-box' },
                          this.renderTick('user', e)
                        ),
                      !r &&
                        s.a.createElement(
                          'td',
                          { className: 'tick-box' },
                          this.renderTick('member', e)
                        ),
                      !r &&
                        s.a.createElement(
                          'td',
                          null,
                          s.a.createElement(
                            u.Link,
                            {
                              className: 'user-item-edit',
                              to: `/${o}/${e.id}`
                            },
                            'Edit'
                          )
                        ),
                      n &&
                        s.a.createElement(
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
            return s.a.createElement(
              'div',
              { className: 'media-left media-middle' },
              s.a.createElement(
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
          return s.a.createElement(
            'div',
            { className: 'media-left media-middle' },
            s.a.createElement('div', {
              className: 'user__photo',
              style: { backgroundImage: `url(${e.avatarUrl})` }
            })
          );
        }
        render() {
          const { showMinimal: e, canDelete: t } = this.props;
          return s.a.createElement(
            'table',
            { style: { width: '100%' }, className: 'userList' },
            s.a.createElement(
              'thead',
              null,
              s.a.createElement(
                'tr',
                { className: 'user-head-row' },
                s.a.createElement(
                  'th',
                  { style: { width: '50px' }, className: 'invheader' },
                  'Avatar'
                ),
                s.a.createElement('th', null, 'Name, position'),
                !e &&
                  s.a.createElement(
                    'th',
                    { style: { width: '150px', textAlign: 'center' } },
                    'Member'
                  ),
                !e &&
                  s.a.createElement(
                    'th',
                    { style: { width: '150px', textAlign: 'center' } },
                    'User'
                  ),
                !e &&
                  s.a.createElement('th', { className: 'invheader' }, 'Edit'),
                t &&
                  s.a.createElement('th', { className: 'invheader' }, 'Delete')
              )
            ),
            this.renderTableBody()
          );
        }
      }
      (n = b),
        (o = 'propTypes'),
        (a = {
          users: l.a.array,
          isFetching: l.a.bool,
          showMinimal: l.a.bool,
          canDelete: l.a.bool,
          deleteFunc: l.a.func
        }),
        o in n
          ? Object.defineProperty(n, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (n[o] = a),
        r.d(t, 'UsersTable', function() {
          return g;
        });
      const g = b;
    }
  ]);
});
