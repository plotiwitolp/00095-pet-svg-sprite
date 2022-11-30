!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  function n(e, t, n) {
    var i,
      o = (t = t || se).createElement('script');
    if (((o.text = e), n)) for (i in we) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? pe[fe.call(e)] || 'object' : typeof e;
  }
  function o(e) {
    var t = !!e && 'length' in e && e.length,
      n = i(e);
    return !ye(e) && !be(e) && ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e));
  }
  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, n) {
    return ye(t)
      ? xe.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? xe.grep(e, function (e) {
          return (e === t) !== n;
        })
      : 'string' != typeof t
      ? xe.grep(e, function (e) {
          return de.call(t, e) > -1 !== n;
        })
      : xe.filter(t, e, n);
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      xe.each(e.match(je) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function u(e) {
    return e;
  }
  function c(e) {
    throw e;
  }
  function d(e, t, n, i) {
    var o;
    try {
      e && ye((o = e.promise)) ? o.call(e).done(t).fail(n) : e && ye((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function p() {
    se.removeEventListener('DOMContentLoaded', p), e.removeEventListener('load', p), xe.ready();
  }
  function f(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Le, 'ms-').replace(He, f);
  }
  function g() {
    this.expando = xe.expando + g.uid++;
  }
  function v(e) {
    return 'true' === e || ('false' !== e && ('null' === e ? null : e === +e + '' ? +e : Fe.test(e) ? JSON.parse(e) : e));
  }
  function m(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (((i = 'data-' + t.replace(Re, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(i)))) {
        try {
          n = v(n);
        } catch (e) {}
        We.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function y(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function () {
            return i.cur();
          }
        : function () {
            return xe.css(e, t, '');
          },
      l = a(),
      u = (n && n[3]) || (xe.cssNumber[t] ? '' : 'px'),
      c = (xe.cssNumber[t] || ('px' !== u && +l)) && Be.exec(xe.css(e, t));
    if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--; ) xe.style(e, t, c + u), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (c /= r);
      (c *= 2), xe.style(e, t, c + u), (n = n || []);
    }
    return n && ((c = +c || +l || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = o))), o;
  }
  function b(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = Ye[i];
    return o || ((t = n.body.appendChild(n.createElement(i))), (o = xe.css(t, 'display')), t.parentNode.removeChild(t), 'none' === o && (o = 'block'), (Ye[i] = o), o);
  }
  function w(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display), t ? ('none' === n && ((o[r] = qe.get(i, 'display') || null), o[r] || (i.style.display = '')), '' === i.style.display && Ve(i) && (o[r] = b(i))) : 'none' !== n && ((o[r] = 'none'), qe.set(i, 'display', n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  function x(e, t) {
    var n;
    return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : []), void 0 === t || (t && r(e, t)) ? xe.merge([e], n) : n;
  }
  function k(e, t) {
    for (var n = 0, i = e.length; n < i; n++) qe.set(e[n], 'globalEval', !t || qe.get(t[n], 'globalEval'));
  }
  function T(e, t, n, o, r) {
    for (var s, a, l, u, c, d, p = t.createDocumentFragment(), f = [], h = 0, g = e.length; h < g; h++)
      if ((s = e[h]) || 0 === s)
        if ('object' === i(s)) xe.merge(f, s.nodeType ? [s] : s);
        else if (Ze.test(s)) {
          for (a = a || p.appendChild(t.createElement('div')), l = (Ke.exec(s) || ['', ''])[1].toLowerCase(), u = Je[l] || Je._default, a.innerHTML = u[1] + xe.htmlPrefilter(s) + u[2], d = u[0]; d--; ) a = a.lastChild;
          xe.merge(f, a.childNodes), ((a = p.firstChild).textContent = '');
        } else f.push(t.createTextNode(s));
    for (p.textContent = '', h = 0; (s = f[h++]); )
      if (o && xe.inArray(s, o) > -1) r && r.push(s);
      else if (((c = xe.contains(s.ownerDocument, s)), (a = x(p.appendChild(s), 'script')), c && k(a), n)) for (d = 0; (s = a[d++]); ) Qe.test(s.type || '') && n.push(s);
    return p;
  }
  function C() {
    return !0;
  }
  function S() {
    return !1;
  }
  function _() {
    try {
      return se.activeElement;
    } catch (e) {}
  }
  function A(e, t, n, i, o, r) {
    var s, a;
    if ('object' == typeof t) {
      'string' != typeof n && ((i = i || n), (n = void 0));
      for (a in t) A(e, a, n, i, t[a], r);
      return e;
    }
    if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ('string' == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = S;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function (e) {
          return xe().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = xe.guid++))),
      e.each(function () {
        xe.event.add(this, t, o, i, n);
      })
    );
  }
  function E(e, t) {
    return r(e, 'table') && r(11 !== t.nodeType ? t : t.firstChild, 'tr') ? xe(e).children('tbody')[0] || e : e;
  }
  function $(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function D(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function O(e, t) {
    var n, i, o, r, s, a, l, u;
    if (1 === t.nodeType) {
      if (qe.hasData(e) && ((r = qe.access(e)), (s = qe.set(t, r)), (u = r.events))) {
        delete s.handle, (s.events = {});
        for (o in u) for (n = 0, i = u[o].length; n < i; n++) xe.event.add(t, o, u[o][n]);
      }
      We.hasData(e) && ((a = We.access(e)), (l = xe.extend({}, a)), We.set(t, l));
    }
  }
  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && Ge.test(e.type) ? (t.checked = e.checked) : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue);
  }
  function M(e, t, i, o) {
    t = ue.apply([], t);
    var r,
      s,
      a,
      l,
      u,
      c,
      d = 0,
      p = e.length,
      f = p - 1,
      h = t[0],
      g = ye(h);
    if (g || (p > 1 && 'string' == typeof h && !me.checkClone && st.test(h)))
      return e.each(function (n) {
        var r = e.eq(n);
        g && (t[0] = h.call(this, n, r.html())), M(r, t, i, o);
      });
    if (p && ((r = T(t, e[0].ownerDocument, !1, e, o)), (s = r.firstChild), 1 === r.childNodes.length && (r = s), s || o)) {
      for (l = (a = xe.map(x(r, 'script'), $)).length; d < p; d++) (u = r), d !== f && ((u = xe.clone(u, !0, !0)), l && xe.merge(a, x(u, 'script'))), i.call(e[d], u, d);
      if (l)
        for (c = a[a.length - 1].ownerDocument, xe.map(a, D), d = 0; d < l; d++)
          (u = a[d]), Qe.test(u.type || '') && !qe.access(u, 'globalEval') && xe.contains(c, u) && (u.src && 'module' !== (u.type || '').toLowerCase() ? xe._evalUrl && xe._evalUrl(u.src) : n(u.textContent.replace(at, ''), c, u));
    }
    return e;
  }
  function N(e, t, n) {
    for (var i, o = t ? xe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || xe.cleanData(x(i)), i.parentNode && (n && xe.contains(i.ownerDocument, i) && k(x(i, 'script')), i.parentNode.removeChild(i));
    return e;
  }
  function I(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || ut(e)) &&
        ('' !== (s = n.getPropertyValue(t) || n[t]) || xe.contains(e.ownerDocument, e) || (s = xe.style(e, t)),
        !me.pixelBoxStyles() && lt.test(s) && ct.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
      void 0 !== s ? s + '' : s
    );
  }
  function L(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function H(e) {
    if (e in vt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; ) if ((e = gt[n] + t) in vt) return e;
  }
  function P(e) {
    var t = xe.cssProps[e];
    return t || (t = xe.cssProps[e] = H(e) || e), t;
  }
  function q(e, t, n) {
    var i = Be.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : t;
  }
  function W(e, t, n, i, o, r) {
    var s = 'width' === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? 'border' : 'content')) return 0;
    for (; s < 4; s += 2)
      'margin' === n && (l += xe.css(e, n + Ue[s], !0, o)),
        i
          ? ('content' === n && (l -= xe.css(e, 'padding' + Ue[s], !0, o)), 'margin' !== n && (l -= xe.css(e, 'border' + Ue[s] + 'Width', !0, o)))
          : ((l += xe.css(e, 'padding' + Ue[s], !0, o)), 'padding' !== n ? (l += xe.css(e, 'border' + Ue[s] + 'Width', !0, o)) : (a += xe.css(e, 'border' + Ue[s] + 'Width', !0, o)));
    return !i && r >= 0 && (l += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5))), l;
  }
  function F(e, t, n) {
    var i = ut(e),
      o = I(e, t, i),
      r = 'border-box' === xe.css(e, 'boxSizing', !1, i),
      s = r;
    if (lt.test(o)) {
      if (!n) return o;
      o = 'auto';
    }
    return (
      (s = s && (me.boxSizingReliable() || o === e.style[t])),
      ('auto' === o || (!parseFloat(o) && 'inline' === xe.css(e, 'display', !1, i))) && ((o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) + W(e, t, n || (r ? 'border' : 'content'), s, i, o) + 'px'
    );
  }
  function R(e, t, n, i, o) {
    return new R.prototype.init(e, t, n, i, o);
  }
  function z() {
    yt && (!1 === se.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(z) : e.setTimeout(z, xe.fx.interval), xe.fx.tick());
  }
  function B() {
    return (
      e.setTimeout(function () {
        mt = void 0;
      }),
      (mt = Date.now())
    );
  }
  function U(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t) o['margin' + (n = Ue[i])] = o['padding' + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function V(e, t, n) {
    for (var i, o = (G.tweeners[t] || []).concat(G.tweeners['*']), r = 0, s = o.length; r < s; r++) if ((i = o[r].call(n, t, e))) return i;
  }
  function X(e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      u,
      c,
      d = 'width' in t || 'height' in t,
      p = this,
      f = {},
      h = e.style,
      g = e.nodeType && Ve(e),
      v = qe.get(e, 'fxshow');
    n.queue ||
      (null == (s = xe._queueHooks(e, 'fx')).unqueued &&
        ((s.unqueued = 0),
        (a = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || a();
        })),
      s.unqueued++,
      p.always(function () {
        p.always(function () {
          s.unqueued--, xe.queue(e, 'fx').length || s.empty.fire();
        });
      }));
    for (i in t)
      if (((o = t[i]), bt.test(o))) {
        if ((delete t[i], (r = r || 'toggle' === o), o === (g ? 'hide' : 'show'))) {
          if ('show' !== o || !v || void 0 === v[i]) continue;
          g = !0;
        }
        f[i] = (v && v[i]) || xe.style(e, i);
      }
    if ((l = !xe.isEmptyObject(t)) || !xe.isEmptyObject(f)) {
      d &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (u = v && v.display) && (u = qe.get(e, 'display')),
        'none' === (c = xe.css(e, 'display')) && (u ? (c = u) : (w([e], !0), (u = e.style.display || u), (c = xe.css(e, 'display')), w([e]))),
        ('inline' === c || ('inline-block' === c && null != u)) &&
          'none' === xe.css(e, 'float') &&
          (l ||
            (p.done(function () {
              h.display = u;
            }),
            null == u && ((c = h.display), (u = 'none' === c ? '' : c))),
          (h.display = 'inline-block'))),
        n.overflow &&
          ((h.overflow = 'hidden'),
          p.always(function () {
            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (i in f)
        l ||
          (v ? 'hidden' in v && (g = v.hidden) : (v = qe.access(e, 'fxshow', { display: u })),
          r && (v.hidden = !g),
          g && w([e], !0),
          p.done(function () {
            g || w([e]), qe.remove(e, 'fxshow');
            for (i in f) xe.style(e, i, f[i]);
          })),
          (l = V(g ? v[i] : 0, i, p)),
          i in v || ((v[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
    }
  }
  function Y(e, t) {
    var n, i, o, r, s;
    for (n in e)
      if (((i = h(n)), (o = t[i]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = xe.cssHooks[i]) && 'expand' in s)) {
        (r = s.expand(r)), delete e[i];
        for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
      } else t[i] = o;
  }
  function G(e, t, n) {
    var i,
      o,
      r = 0,
      s = G.prefilters.length,
      a = xe.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (var t = mt || B(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(i);
        return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
      },
      u = a.promise({
        elem: e,
        props: xe.extend({}, t),
        opts: xe.extend(!0, { specialEasing: {}, easing: xe.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: mt || B(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = xe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? u.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) u.tweens[n].run(1);
          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        },
      }),
      c = u.props;
    for (Y(c, u.opts.specialEasing); r < s; r++) if ((i = G.prefilters[r].call(u, e, c, u.opts))) return ye(i.stop) && (xe._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
    return xe.map(c, V, u), ye(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), xe.fx.timer(xe.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u;
  }
  function K(e) {
    return (e.match(je) || []).join(' ');
  }
  function Q(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function J(e) {
    return Array.isArray(e) ? e : 'string' == typeof e ? e.match(je) || [] : [];
  }
  function Z(e, t, n, o) {
    var r;
    if (Array.isArray(t))
      xe.each(t, function (t, i) {
        n || Ot.test(e) ? o(e, i) : Z(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, o);
      });
    else if (n || 'object' !== i(t)) o(e, t);
    else for (r in t) Z(e + '[' + r + ']', t[r], n, o);
  }
  function ee(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var i,
        o = 0,
        r = t.toLowerCase().match(je) || [];
      if (ye(n)) for (; (i = r[o++]); ) '+' === i[0] ? ((i = i.slice(1) || '*'), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
    };
  }
  function te(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        xe.each(e[a] || [], function (e, a) {
          var u = a(t, n, i);
          return 'string' != typeof u || s || r[u] ? (s ? !(l = u) : void 0) : (t.dataTypes.unshift(u), o(u), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === zt;
    return o(t.dataTypes[0]) || (!r['*'] && o('*'));
  }
  function ne(e, t) {
    var n,
      i,
      o = xe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && xe.extend(!0, e, i), e;
  }
  function ie(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; '*' === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + ' ' + l[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }
  function oe(e, t, n, i) {
    var o,
      r,
      s,
      a,
      l,
      u = {},
      c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
    for (r = c.shift(); r; )
      if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = c.shift())))
        if ('*' === r) r = l;
        else if ('*' !== l && l !== r) {
          if (!(s = u[l + ' ' + r] || u['* ' + r]))
            for (o in u)
              if ((a = o.split(' '))[1] === r && (s = u[l + ' ' + a[0]] || u['* ' + a[0]])) {
                !0 === s ? (s = u[o]) : !0 !== u[o] && ((r = a[0]), c.unshift(a[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (e) {
                return { state: 'parsererror', error: s ? e : 'No conversion from ' + l + ' to ' + r };
              }
        }
    return { state: 'success', data: t };
  }
  var re = [],
    se = e.document,
    ae = Object.getPrototypeOf,
    le = re.slice,
    ue = re.concat,
    ce = re.push,
    de = re.indexOf,
    pe = {},
    fe = pe.toString,
    he = pe.hasOwnProperty,
    ge = he.toString,
    ve = ge.call(Object),
    me = {},
    ye = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType;
    },
    be = function (e) {
      return null != e && e === e.window;
    },
    we = { type: !0, src: !0, noModule: !0 },
    xe = function (e, t) {
      return new xe.fn.init(e, t);
    },
    ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (xe.fn = xe.prototype =
    {
      jquery: '3.3.1',
      constructor: xe,
      length: 0,
      toArray: function () {
        return le.call(this);
      },
      get: function (e) {
        return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = xe.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return xe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          xe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(le.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ce,
      sort: re.sort,
      splice: re.splice,
    }),
    (xe.extend = xe.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for ('boolean' == typeof s && ((u = s), (s = arguments[a] || {}), a++), 'object' == typeof s || ye(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                s !== (i = e[t]) &&
                  (u && i && (xe.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? ((o = !1), (r = n && Array.isArray(n) ? n : [])) : (r = n && xe.isPlainObject(n) ? n : {}), (s[t] = xe.extend(u, r, i))) : void 0 !== i && (s[t] = i));
        return s;
      }),
    xe.extend({
      expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || '[object Object]' !== fe.call(e) || ((t = ae(e)) && ('function' != typeof (n = he.call(t, 'constructor') && t.constructor) || ge.call(n) !== ve)));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        n(e);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (o(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(ke, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (o(Object(e)) ? xe.merge(n, 'string' == typeof e ? [e] : e) : ce.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : de.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (o(e)) for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return ue.apply([], a);
      },
      guid: 1,
      support: me,
    }),
    'function' == typeof Symbol && (xe.fn[Symbol.iterator] = re[Symbol.iterator]),
    xe.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
      pe['[object ' + t + ']'] = t.toLowerCase();
    });
  var Te = (function (e) {
    function t(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        u,
        c,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (((n = n || []), 'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))) return n;
      if (!i && ((t ? t.ownerDocument || t : F) !== M && j(t), (t = t || M), I)) {
        if (11 !== h && (l = me.exec(e)))
          if ((o = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (p && (s = p.getElementById(o)) && q(t, s) && s.id === o) return n.push(s), n;
          } else {
            if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if ((o = l[3]) && k.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n;
          }
        if (k.qsa && !V[e + ' '] && (!L || !L.test(e))) {
          if (1 !== h) (p = t), (c = e);
          else if ('object' !== t.nodeName.toLowerCase()) {
            for ((a = t.getAttribute('id')) ? (a = a.replace(xe, ke)) : t.setAttribute('id', (a = W)), r = (u = _(e)).length; r--; ) u[r] = '#' + a + ' ' + f(u[r]);
            (c = u.join(',')), (p = (ye.test(e) && d(t.parentNode)) || t);
          }
          if (c)
            try {
              return J.apply(n, p.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              a === W && t.removeAttribute('id');
            }
        }
      }
      return E(e.replace(ae, '$1'), t, n, i);
    }
    function n() {
      function e(n, i) {
        return t.push(n + ' ') > T.cacheLength && delete e[t.shift()], (e[n + ' '] = i);
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[W] = !0), e;
    }
    function o(e) {
      var t = M.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split('|'), i = n.length; i--; ) T.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        return 'input' === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        return 'form' in t
          ? t.parentNode && !1 === t.disabled
            ? 'label' in t
              ? 'label' in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Ce(t) === e)
            : t.disabled === e
          : 'label' in t && t.disabled === e;
      };
    }
    function c(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; ) n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function d(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function p() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ''; t < n; t++) i += e[t].value;
      return i;
    }
    function h(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && 'parentNode' === r,
        a = z++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function (t, n, l) {
            var u,
              c,
              d,
              p = [R, a];
            if (l) {
              for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (((d = t[W] || (t[W] = {})), (c = d[t.uniqueID] || (d[t.uniqueID] = {})), o && o === t.nodeName.toLowerCase())) t = t[i] || t;
                  else {
                    if ((u = c[r]) && u[0] === R && u[1] === a) return (p[2] = u[2]);
                    if (((c[r] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function g(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function v(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
      return i;
    }
    function m(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), u && t.push(a)));
      return s;
    }
    function y(e, t, n, o, r, s) {
      return (
        o && !o[W] && (o = y(o)),
        r && !r[W] && (r = y(r, s)),
        i(function (i, s, a, l) {
          var u,
            c,
            d,
            p = [],
            f = [],
            h = s.length,
            g = i || v(t || '*', a.nodeType ? [a] : a, []),
            y = !e || (!i && t) ? g : m(g, p, e, a, l),
            b = n ? (r || (i ? e : h || o) ? [] : s) : y;
          if ((n && n(y, b, a, l), o)) for (u = m(b, f), o(u, [], a, l), c = u.length; c--; ) (d = u[c]) && (b[f[c]] = !(y[f[c]] = d));
          if (i) {
            if (r || e) {
              if (r) {
                for (u = [], c = b.length; c--; ) (d = b[c]) && u.push((y[c] = d));
                r(null, (b = []), u, l);
              }
              for (c = b.length; c--; ) (d = b[c]) && (u = r ? ee(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d));
            }
          } else (b = m(b === s ? b.splice(h, b.length) : b)), r ? r(null, s, b, l) : J.apply(s, b);
        })
      );
    }
    function b(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = T.relative[e[0].type],
          s = r || T.relative[' '],
          a = r ? 1 : 0,
          l = h(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          u = h(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          c = [
            function (e, n, i) {
              var o = (!r && (i || n !== $)) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
              return (t = null), o;
            },
          ];
        a < o;
        a++
      )
        if ((n = T.relative[e[a].type])) c = [h(g(c), n)];
        else {
          if ((n = T.filter[e[a].type].apply(null, e[a].matches))[W]) {
            for (i = ++a; i < o && !T.relative[e[i].type]; i++);
            return y(a > 1 && g(c), a > 1 && f(e.slice(0, a - 1).concat({ value: ' ' === e[a - 2].type ? '*' : '' })).replace(ae, '$1'), n, a < i && b(e.slice(a, i)), i < o && b((e = e.slice(i))), i < o && f(e));
          }
          c.push(n);
        }
      return g(c);
    }
    function w(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function (i, s, a, l, u) {
          var c,
            d,
            p,
            f = 0,
            h = '0',
            g = i && [],
            v = [],
            y = $,
            b = i || (r && T.find.TAG('*', u)),
            w = (R += null == y ? 1 : Math.random() || 0.1),
            x = b.length;
          for (u && ($ = s === M || s || u); h !== x && null != (c = b[h]); h++) {
            if (r && c) {
              for (d = 0, s || c.ownerDocument === M || (j(c), (a = !I)); (p = e[d++]); )
                if (p(c, s || M, a)) {
                  l.push(c);
                  break;
                }
              u && (R = w);
            }
            o && ((c = !p && c) && f--, i && g.push(c));
          }
          if (((f += h), o && h !== f)) {
            for (d = 0; (p = n[d++]); ) p(g, v, s, a);
            if (i) {
              if (f > 0) for (; h--; ) g[h] || v[h] || (v[h] = K.call(l));
              v = m(v);
            }
            J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return u && ((R = w), ($ = y)), g;
        };
      return o ? i(s) : s;
    }
    var x,
      k,
      T,
      C,
      S,
      _,
      A,
      E,
      $,
      D,
      O,
      j,
      M,
      N,
      I,
      L,
      H,
      P,
      q,
      W = 'sizzle' + 1 * new Date(),
      F = e.document,
      R = 0,
      z = 0,
      B = n(),
      U = n(),
      V = n(),
      X = function (e, t) {
        return e === t && (O = !0), 0;
      },
      Y = {}.hasOwnProperty,
      G = [],
      K = G.pop,
      Q = G.push,
      J = G.push,
      Z = G.slice,
      ee = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      te = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      ne = '[\\x20\\t\\r\\n\\f]',
      ie = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      oe = '\\[' + ne + '*(' + ie + ')(?:' + ne + '*([*^$|!~]?=)' + ne + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + ie + '))|)' + ne + '*\\]',
      re = ':(' + ie + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + oe + ')*)|.*)\\)|)',
      se = new RegExp(ne + '+', 'g'),
      ae = new RegExp('^' + ne + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ne + '+$', 'g'),
      le = new RegExp('^' + ne + '*,' + ne + '*'),
      ue = new RegExp('^' + ne + '*([>+~]|' + ne + ')' + ne + '*'),
      ce = new RegExp('=' + ne + '*([^\\]\'"]*?)' + ne + '*\\]', 'g'),
      de = new RegExp(re),
      pe = new RegExp('^' + ie + '$'),
      fe = {
        ID: new RegExp('^#(' + ie + ')'),
        CLASS: new RegExp('^\\.(' + ie + ')'),
        TAG: new RegExp('^(' + ie + '|[*])'),
        ATTR: new RegExp('^' + oe),
        PSEUDO: new RegExp('^' + re),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ne + '*(even|odd|(([+-]|)(\\d*)n|)' + ne + '*(?:([+-]|)' + ne + '*(\\d+)|))' + ne + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + te + ')$', 'i'),
        needsContext: new RegExp('^' + ne + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ne + '*((?:-\\d)?\\d*)' + ne + '*\\)|)(?=[^-]|$)', 'i'),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      be = new RegExp('\\\\([\\da-f]{1,6}' + ne + '?|(' + ne + ')|.)', 'ig'),
      we = function (e, t, n) {
        var i = '0x' + t - 65536;
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ke = function (e, t) {
        return t ? ('\0' === e ? 'пїЅ' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ') : '\\' + e;
      },
      Te = function () {
        j();
      },
      Ce = h(
        function (e) {
          return !0 === e.disabled && ('form' in e || 'label' in e);
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      J.apply((G = Z.call(F.childNodes)), F.childNodes), G[F.childNodes.length].nodeType;
    } catch (e) {
      J = {
        apply: G.length
          ? function (e, t) {
              Q.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    (k = t.support = {}),
      (S = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && 'HTML' !== t.nodeName;
        }),
      (j = t.setDocument =
        function (e) {
          var t,
            n,
            i = e ? e.ownerDocument || e : F;
          return i !== M && 9 === i.nodeType && i.documentElement
            ? ((M = i),
              (N = M.documentElement),
              (I = !S(M)),
              F !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', Te, !1) : n.attachEvent && n.attachEvent('onunload', Te)),
              (k.attributes = o(function (e) {
                return (e.className = 'i'), !e.getAttribute('className');
              })),
              (k.getElementsByTagName = o(function (e) {
                return e.appendChild(M.createComment('')), !e.getElementsByTagName('*').length;
              })),
              (k.getElementsByClassName = ve.test(M.getElementsByClassName)),
              (k.getById = o(function (e) {
                return (N.appendChild(e).id = W), !M.getElementsByName || !M.getElementsByName(W).length;
              })),
              k.getById
                ? ((T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      return e.getAttribute('id') === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && I) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                      return n && n.value === t;
                    };
                  }),
                  (T.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && I) {
                      var n,
                        i,
                        o,
                        r = t.getElementById(e);
                      if (r) {
                        if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                        for (o = t.getElementsByName(e), i = 0; (r = o[i++]); ) if ((n = r.getAttributeNode('id')) && n.value === e) return [r];
                      }
                      return [];
                    }
                  })),
              (T.find.TAG = k.getElementsByTagName
                ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ('*' === e) {
                      for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }
                    return r;
                  }),
              (T.find.CLASS =
                k.getElementsByClassName &&
                function (e, t) {
                  if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e);
                }),
              (H = []),
              (L = []),
              (k.qsa = ve.test(M.querySelectorAll)) &&
                (o(function (e) {
                  (N.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length && L.push('[*^$]=' + ne + '*(?:\'\'|"")'),
                    e.querySelectorAll('[selected]').length || L.push('\\[' + ne + '*(?:value|' + te + ')'),
                    e.querySelectorAll('[id~=' + W + '-]').length || L.push('~='),
                    e.querySelectorAll(':checked').length || L.push(':checked'),
                    e.querySelectorAll('a#' + W + '+*').length || L.push('.#.+[+~]');
                }),
                o(function (e) {
                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = M.createElement('input');
                  t.setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    e.querySelectorAll('[name=d]').length && L.push('name' + ne + '*[*^$|!~]?='),
                    2 !== e.querySelectorAll(':enabled').length && L.push(':enabled', ':disabled'),
                    (N.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(':disabled').length && L.push(':enabled', ':disabled'),
                    e.querySelectorAll('*,:x'),
                    L.push(',.*:');
                })),
              (k.matchesSelector = ve.test((P = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector))) &&
                o(function (e) {
                  (k.disconnectedMatch = P.call(e, '*')), P.call(e, "[s!='']:x"), H.push('!=', re);
                }),
              (L = L.length && new RegExp(L.join('|'))),
              (H = H.length && new RegExp(H.join('|'))),
              (t = ve.test(N.compareDocumentPosition)),
              (q =
                t || ve.test(N.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                    }
                  : function (e, t) {
                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (X = t
                ? function (e, t) {
                    if (e === t) return (O = !0), 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!k.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === M || (e.ownerDocument === F && q(F, e))
                          ? -1
                          : t === M || (t.ownerDocument === F && q(F, t))
                          ? 1
                          : D
                          ? ee(D, e) - ee(D, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (O = !0), 0;
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      a = [e],
                      l = [t];
                    if (!o || !r) return e === M ? -1 : t === M ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (o === r) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (; a[i] === l[i]; ) i++;
                    return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0;
                  }),
              M)
            : M;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (((e.ownerDocument || e) !== M && j(e), (n = n.replace(ce, "='$1']")), k.matchesSelector && I && !V[n + ' '] && (!H || !H.test(n)) && (!L || !L.test(n))))
          try {
            var i = P.call(e, n);
            if (i || k.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
          } catch (e) {}
        return t(n, M, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== M && j(e), q(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== M && j(e);
        var n = T.attrHandle[t.toLowerCase()],
          i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
        return void 0 !== i ? i : k.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }),
      (t.escape = function (e) {
        return (e + '').replace(xe, ke);
      }),
      (t.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (((O = !k.detectDuplicates), (D = !k.sortStable && e.slice(0)), e.sort(X), O)) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (D = null), e;
      }),
      (C = t.getText =
        function (e) {
          var t,
            n = '',
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ('string' == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i++]); ) n += C(t);
          return n;
        }),
      ((T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: i,
          match: fe,
          attrHandle: {},
          find: {},
          relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
          preFilter: {
            ATTR: function (e) {
              return (e[1] = e[1].replace(be, we)), (e[3] = (e[3] || e[4] || e[5] || '').replace(be, we)), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] + e[8] || 'odd' === e[3]))) : e[3] && t.error(e[0]), e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return fe.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || '') : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, we).toLowerCase();
              return '*' === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = B[e + ' '];
              return (
                t ||
                ((t = new RegExp('(^|' + ne + ')' + e + '(' + ne + '|$)')) &&
                  B(e, function (e) {
                    return t.test(('string' == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute('class')) || '');
                  }))
              );
            },
            ATTR: function (e, n, i) {
              return function (o) {
                var r = t.attr(o, e);
                return null == r
                  ? '!=' === n
                  : !n ||
                      ((r += ''),
                      '=' === n
                        ? r === i
                        : '!=' === n
                        ? r !== i
                        : '^=' === n
                        ? i && 0 === r.indexOf(i)
                        : '*=' === n
                        ? i && r.indexOf(i) > -1
                        : '$=' === n
                        ? i && r.slice(-i.length) === i
                        : '~=' === n
                        ? (' ' + r.replace(se, ' ') + ' ').indexOf(i) > -1
                        : '|=' === n && (r === i || r.slice(0, i.length + 1) === i + '-'));
              };
            },
            CHILD: function (e, t, n, i, o) {
              var r = 'nth' !== e.slice(0, 3),
                s = 'last' !== e.slice(-4),
                a = 'of-type' === t;
              return 1 === i && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var u,
                      c,
                      d,
                      p,
                      f,
                      h,
                      g = r !== s ? 'nextSibling' : 'previousSibling',
                      v = t.parentNode,
                      m = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (v) {
                      if (r) {
                        for (; g; ) {
                          for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                          h = g = 'only' === e && !h && 'nextSibling';
                        }
                        return !0;
                      }
                      if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                        for (b = (f = (u = (c = (d = (p = v)[W] || (p[W] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === R && u[1]) && u[2], p = f && v.childNodes[f]; (p = (++f && p && p[g]) || (b = f = 0) || h.pop()); )
                          if (1 === p.nodeType && ++b && p === t) {
                            c[e] = [R, f, b];
                            break;
                          }
                      } else if ((y && (b = f = (u = (c = (d = (p = t)[W] || (p[W] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === R && u[1]), !1 === b))
                        for (
                          ;
                          (p = (++f && p && p[g]) || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((c = (d = p[W] || (p[W] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [R, b]), p !== t));

                        );
                      return (b -= o) === i || (b % i == 0 && b / i >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var o,
                r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
              return r[W]
                ? r(n)
                : r.length > 1
                ? ((o = [e, e, '', n]),
                  T.setFilters.hasOwnProperty(e.toLowerCase())
                    ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--; ) e[(i = ee(e, o[s]))] = !(t[i] = o[s]);
                      })
                    : function (e) {
                        return r(e, 0, o);
                      })
                : r;
            },
          },
          pseudos: {
            not: i(function (e) {
              var t = [],
                n = [],
                o = A(e.replace(ae, '$1'));
              return o[W]
                ? i(function (e, t, n, i) {
                    for (var r, s = o(e, null, i, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
                  })
                : function (e, i, r) {
                    return (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop();
                  };
            }),
            has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: i(function (e) {
              return (
                (e = e.replace(be, we)),
                function (t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: i(function (e) {
              return (
                pe.test(e || '') || t.error('unsupported lang: ' + e),
                (e = e.replace(be, we).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if ((n = I ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === N;
            },
            focus: function (e) {
              return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            },
            enabled: u(!1),
            disabled: u(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
            },
            selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ('input' === t && 'button' === e.type) || 'button' === t;
            },
            text: function (e) {
              var t;
              return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
            },
            first: c(function () {
              return [0];
            }),
            last: c(function (e, t) {
              return [t - 1];
            }),
            eq: c(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: c(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: c(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: c(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
              return e;
            }),
            gt: c(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
              return e;
            }),
          },
        }).pseudos.nth = T.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[x] = a(x);
    for (x in { submit: !0, reset: !0 }) T.pseudos[x] = l(x);
    return (
      (p.prototype = T.filters = T.pseudos),
      (T.setFilters = new p()),
      (_ = t.tokenize =
        function (e, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            u,
            c = U[e + ' '];
          if (c) return n ? 0 : c.slice(0);
          for (a = e, l = [], u = T.preFilter; a; ) {
            (i && !(o = le.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((r = []))), (i = !1), (o = ue.exec(a)) && ((i = o.shift()), r.push({ value: i, type: o[0].replace(ae, ' ') }), (a = a.slice(i.length)));
            for (s in T.filter) !(o = fe[s].exec(a)) || (u[s] && !(o = u[s](o))) || ((i = o.shift()), r.push({ value: i, type: s, matches: o }), (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? t.error(e) : U(e, l).slice(0);
        }),
      (A = t.compile =
        function (e, t) {
          var n,
            i = [],
            o = [],
            r = V[e + ' '];
          if (!r) {
            for (t || (t = _(e)), n = t.length; n--; ) (r = b(t[n]))[W] ? i.push(r) : o.push(r);
            (r = V(e, w(o, i))).selector = e;
          }
          return r;
        }),
      (E = t.select =
        function (e, t, n, i) {
          var o,
            r,
            s,
            a,
            l,
            u = 'function' == typeof e && e,
            c = !i && _((e = u.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if ((r = c[0] = c[0].slice(0)).length > 2 && 'ID' === (s = r[0]).type && 9 === t.nodeType && I && T.relative[r[1].type]) {
              if (!(t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
              u && (t = t.parentNode), (e = e.slice(r.shift().value.length));
            }
            for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && ((s = r[o]), !T.relative[(a = s.type)]); )
              if ((l = T.find[a]) && (i = l(s.matches[0].replace(be, we), (ye.test(r[0].type) && d(t.parentNode)) || t))) {
                if ((r.splice(o, 1), !(e = i.length && f(r)))) return J.apply(n, i), n;
                break;
              }
          }
          return (u || A(e, c))(i, t, !I, n, !t || (ye.test(e) && d(t.parentNode)) || t), n;
        }),
      (k.sortStable = W.split('').sort(X).join('') === W),
      (k.detectDuplicates = !!O),
      j(),
      (k.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(M.createElement('fieldset'));
      })),
      o(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        r('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (k.attributes &&
        o(function (e) {
          return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        })) ||
        r('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      o(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        r(te, function (e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
      t
    );
  })(e);
  (xe.find = Te), (xe.expr = Te.selectors), (xe.expr[':'] = xe.expr.pseudos), (xe.uniqueSort = xe.unique = Te.uniqueSort), (xe.text = Te.getText), (xe.isXMLDoc = Te.isXML), (xe.contains = Te.contains), (xe.escapeSelector = Te.escape);
  var Ce = function (e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && xe(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Se = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    _e = xe.expr.match.needsContext,
    Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (xe.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === i.nodeType
        ? xe.find.matchesSelector(i, e)
          ? [i]
          : []
        : xe.find.matches(
            e,
            xe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    xe.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ('string' != typeof e)
          return this.pushStack(
            xe(e).filter(function () {
              for (t = 0; t < i; t++) if (xe.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) xe.find(e, o[t], n);
        return i > 1 ? xe.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function (e) {
        return !!s(this, 'string' == typeof e && _e.test(e) ? xe(e) : e || [], !1).length;
      },
    });
  var Ee,
    $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((xe.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || Ee), 'string' == typeof e)) {
      if (!(i = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (((t = t instanceof xe ? t[0] : t), xe.merge(this, xe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ae.test(i[1]) && xe.isPlainObject(t))) for (i in t) ye(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = se.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : ye(e) ? (void 0 !== n.ready ? n.ready(e) : e(xe)) : xe.makeArray(e, this);
  }).prototype = xe.fn),
    (Ee = xe(se));
  var De = /^(?:parents|prev(?:Until|All))/,
    Oe = { children: !0, contents: !0, next: !0, prev: !0 };
  xe.fn.extend({
    has: function (e) {
      var t = xe(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (xe.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = 'string' != typeof e && xe(e);
      if (!_e.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && xe.find.matchesSelector(n, e))) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? xe.uniqueSort(r) : r);
    },
    index: function (e) {
      return e ? ('string' == typeof e ? de.call(xe(e), this[0]) : de.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    xe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Ce(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return Ce(e, 'parentNode', n);
        },
        next: function (e) {
          return a(e, 'nextSibling');
        },
        prev: function (e) {
          return a(e, 'previousSibling');
        },
        nextAll: function (e) {
          return Ce(e, 'nextSibling');
        },
        prevAll: function (e) {
          return Ce(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return Ce(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return Ce(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return Se((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Se(e.firstChild);
        },
        contents: function (e) {
          return r(e, 'iframe') ? e.contentDocument : (r(e, 'template') && (e = e.content || e), xe.merge([], e.childNodes));
        },
      },
      function (e, t) {
        xe.fn[e] = function (n, i) {
          var o = xe.map(this, t, n);
          return 'Until' !== e.slice(-5) && (i = n), i && 'string' == typeof i && (o = xe.filter(i, o)), this.length > 1 && (Oe[e] || xe.uniqueSort(o), De.test(e) && o.reverse()), this.pushStack(o);
        };
      }
    );
  var je = /[^\x20\t\r\n\f]+/g;
  (xe.Callbacks = function (e) {
    e = 'string' == typeof e ? l(e) : xe.extend({}, e);
    var t,
      n,
      o,
      r,
      s = [],
      a = [],
      u = -1,
      c = function () {
        for (r = r || e.once, o = t = !0; a.length; u = -1) for (n = a.shift(); ++u < s.length; ) !1 === s[u].apply(n[0], n[1]) && e.stopOnFalse && ((u = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (s = n ? [] : '');
      },
      d = {
        add: function () {
          return (
            s &&
              (n && !t && ((u = s.length - 1), a.push(n)),
              (function t(n) {
                xe.each(n, function (n, o) {
                  ye(o) ? (e.unique && d.has(o)) || s.push(o) : o && o.length && 'string' !== i(o) && t(o);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            xe.each(arguments, function (e, t) {
              for (var n; (n = xe.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? xe.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (r = a = []), (s = n = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (r = a = []), n || t || (s = n = ''), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, n) {
          return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || c()), this;
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
    xe.extend({
      Deferred: function (t) {
        var n = [
            ['notify', 'progress', xe.Callbacks('memory'), xe.Callbacks('memory'), 2],
            ['resolve', 'done', xe.Callbacks('once memory'), xe.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', xe.Callbacks('once memory'), xe.Callbacks('once memory'), 1, 'rejected'],
          ],
          i = 'pending',
          o = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return xe
                .Deferred(function (t) {
                  xe.each(n, function (n, i) {
                    var o = ye(e[i[4]]) && e[i[4]];
                    r[i[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + 'With'](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, i, o) {
              function r(t, n, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    d = function () {
                      var e, d;
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise()) throw new TypeError('Thenable self-resolution');
                        (d = e && ('object' == typeof e || 'function' == typeof e) && e.then),
                          ye(d) ? (o ? d.call(e, r(s, n, u, o), r(s, n, c, o)) : (s++, d.call(e, r(s, n, u, o), r(s, n, c, o), r(s, n, u, n.notifyWith)))) : (i !== u && ((a = void 0), (l = [e])), (o || n.resolveWith)(a, l));
                      }
                    },
                    p = o
                      ? d
                      : function () {
                          try {
                            d();
                          } catch (e) {
                            xe.Deferred.exceptionHook && xe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && ((a = void 0), (l = [e])), n.rejectWith(a, l));
                          }
                        };
                  t ? p() : (xe.Deferred.getStackHook && (p.stackTrace = xe.Deferred.getStackHook()), e.setTimeout(p));
                };
              }
              var s = 0;
              return xe
                .Deferred(function (e) {
                  n[0][3].add(r(0, e, ye(o) ? o : u, e.notifyWith)), n[1][3].add(r(0, e, ye(t) ? t : u)), n[2][3].add(r(0, e, ye(i) ? i : c));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? xe.extend(e, o) : o;
            },
          },
          r = {};
        return (
          xe.each(n, function (e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function () {
                return r[t[0] + 'With'](this === r ? void 0 : this, arguments), this;
              }),
              (r[t[0] + 'With'] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = le.call(arguments),
          r = xe.Deferred(),
          s = function (e) {
            return function (n) {
              (i[e] = this), (o[e] = arguments.length > 1 ? le.call(arguments) : n), --t || r.resolveWith(i, o);
            };
          };
        if (t <= 1 && (d(e, r.done(s(n)).resolve, r.reject, !t), 'pending' === r.state() || ye(o[n] && o[n].then))) return r.then();
        for (; n--; ) d(o[n], s(n), r.reject);
        return r.promise();
      },
    });
  var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (xe.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Me.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }),
    (xe.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Ne = xe.Deferred();
  (xe.fn.ready = function (e) {
    return (
      Ne.then(e).catch(function (e) {
        xe.readyException(e);
      }),
      this
    );
  }),
    xe.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --xe.readyWait : xe.isReady) || ((xe.isReady = !0), (!0 !== e && --xe.readyWait > 0) || Ne.resolveWith(se, [xe]));
      },
    }),
    (xe.ready.then = Ne.then),
    'complete' === se.readyState || ('loading' !== se.readyState && !se.documentElement.doScroll) ? e.setTimeout(xe.ready) : (se.addEventListener('DOMContentLoaded', p), e.addEventListener('load', p));
  var Ie = function (e, t, n, o, r, s, a) {
      var l = 0,
        u = e.length,
        c = null == n;
      if ('object' === i(n)) {
        r = !0;
        for (l in n) Ie(e, t, l, n[l], !0, s, a);
      } else if (
        void 0 !== o &&
        ((r = !0),
        ye(o) || (a = !0),
        c &&
          (a
            ? (t.call(e, o), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(xe(e), n);
              }))),
        t)
      )
        for (; l < u; l++) t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
      return r ? e : c ? t.call(e) : u ? t(e[0], n) : s;
    },
    Le = /^-ms-/,
    He = /-([a-z])/g,
    Pe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (g.uid = 1),
    (g.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || ((t = {}), Pe(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var i,
          o = this.cache(e);
        if ('string' == typeof t) o[h(t)] = n;
        else for (i in t) o[h(i)] = t[i];
        return o;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(h) : (t = h(t)) in i ? [t] : t.match(je) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || xe.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !xe.isEmptyObject(t);
      },
    });
  var qe = new g(),
    We = new g(),
    Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Re = /[A-Z]/g;
  xe.extend({
    hasData: function (e) {
      return We.hasData(e) || qe.hasData(e);
    },
    data: function (e, t, n) {
      return We.access(e, t, n);
    },
    removeData: function (e, t) {
      We.remove(e, t);
    },
    _data: function (e, t, n) {
      return qe.access(e, t, n);
    },
    _removeData: function (e, t) {
      qe.remove(e, t);
    },
  }),
    xe.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && ((o = We.get(r)), 1 === r.nodeType && !qe.get(r, 'hasDataAttrs'))) {
            for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = h(i.slice(5))), m(r, i, o[i]));
            qe.set(r, 'hasDataAttrs', !0);
          }
          return o;
        }
        return 'object' == typeof e
          ? this.each(function () {
              We.set(this, e);
            })
          : Ie(
              this,
              function (t) {
                var n;
                if (r && void 0 === t) {
                  if (void 0 !== (n = We.get(r, e))) return n;
                  if (void 0 !== (n = m(r, e))) return n;
                } else
                  this.each(function () {
                    We.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          We.remove(this, e);
        });
      },
    }),
    xe.extend({
      queue: function (e, t, n) {
        var i;
        if (e) return (t = (t || 'fx') + 'queue'), (i = qe.get(e, t)), n && (!i || Array.isArray(n) ? (i = qe.access(e, t, xe.makeArray(n))) : i.push(n)), i || [];
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = xe.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = xe._queueHooks(e, t),
          s = function () {
            xe.dequeue(e, t);
          };
        'inprogress' === o && ((o = n.shift()), i--), o && ('fx' === t && n.unshift('inprogress'), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          qe.get(e, n) ||
          qe.access(e, n, {
            empty: xe.Callbacks('once memory').add(function () {
              qe.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    xe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? xe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = xe.queue(this, e, t);
                xe._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && xe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          xe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = xe.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; s--; ) (n = qe.get(r[s], e + 'queueHooks')) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ze = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Be = new RegExp('^(?:([+-])=|)(' + ze + ')([a-z%]*)$', 'i'),
    Ue = ['Top', 'Right', 'Bottom', 'Left'],
    Ve = function (e, t) {
      return 'none' === (e = t || e).style.display || ('' === e.style.display && xe.contains(e.ownerDocument, e) && 'none' === xe.css(e, 'display'));
    },
    Xe = function (e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o;
    },
    Ye = {};
  xe.fn.extend({
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ve(this) ? xe(this).show() : xe(this).hide();
          });
    },
  });
  var Ge = /^(?:checkbox|radio)$/i,
    Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Qe = /^$|^module$|\/(?:java|ecma)script/i,
    Je = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    };
  (Je.optgroup = Je.option), (Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead), (Je.th = Je.td);
  var Ze = /<|&#?\w+;/;
  !(function () {
    var e = se.createDocumentFragment().appendChild(se.createElement('div')),
      t = se.createElement('input');
    t.setAttribute('type', 'radio'),
      t.setAttribute('checked', 'checked'),
      t.setAttribute('name', 't'),
      e.appendChild(t),
      (me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = se.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    it = /^([^.]*)(?:\.(.+)|)/;
  (xe.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        h,
        g,
        v = qe.get(e);
      if (v)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && xe.find.matchesSelector(et, o),
            n.guid || (n.guid = xe.guid++),
            (l = v.events) || (l = v.events = {}),
            (s = v.handle) ||
              (s = v.handle =
                function (t) {
                  return void 0 !== xe && xe.event.triggered !== t.type ? xe.event.dispatch.apply(e, arguments) : void 0;
                }),
            u = (t = (t || '').match(je) || ['']).length;
          u--;

        )
          (f = g = (a = it.exec(t[u]) || [])[1]),
            (h = (a[2] || '').split('.').sort()),
            f &&
              ((d = xe.event.special[f] || {}),
              (f = (o ? d.delegateType : d.bindType) || f),
              (d = xe.event.special[f] || {}),
              (c = xe.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && xe.expr.match.needsContext.test(o), namespace: h.join('.') }, r)),
              (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, s)) || (e.addEventListener && e.addEventListener(f, s))),
              d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (xe.event.global[f] = !0));
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        d,
        p,
        f,
        h,
        g,
        v = qe.hasData(e) && qe.get(e);
      if (v && (l = v.events)) {
        for (u = (t = (t || '').match(je) || ['']).length; u--; )
          if (((a = it.exec(t[u]) || []), (f = g = a[1]), (h = (a[2] || '').split('.').sort()), f)) {
            for (d = xe.event.special[f] || {}, p = l[(f = (i ? d.delegateType : d.bindType) || f)] || [], a = a[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = r = p.length; r--; )
              (c = p[r]),
                (!o && g !== c.origType) || (n && n.guid !== c.guid) || (a && !a.test(c.namespace)) || (i && i !== c.selector && ('**' !== i || !c.selector)) || (p.splice(r, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
            s && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, v.handle)) || xe.removeEvent(e, f, v.handle), delete l[f]);
          } else for (f in l) xe.event.remove(e, f + t[u], n, i, !0);
        xe.isEmptyObject(l) && qe.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = xe.event.fix(e),
        l = new Array(arguments.length),
        u = (qe.get(this, 'events') || {})[a.type] || [],
        c = xe.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (((a.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, a))) {
        for (s = xe.event.handlers.call(this, a, u), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r), (a.data = r.data), void 0 !== (i = ((xe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        u = e.target;
      if (l && u.nodeType && !('click' === e.type && e.button >= 1))
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && ('click' !== e.type || !0 !== u.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = t[n]).selector + ' ')] && (s[o] = i.needsContext ? xe(o, this).index(u) > -1 : xe.find(o, this, null, [u]).length), s[o] && r.push(i);
            r.length && a.push({ elem: u, handlers: r });
          }
      return (u = this), l < t.length && a.push({ elem: u, handlers: t.slice(l) }), a;
    },
    addProp: function (e, t) {
      Object.defineProperty(xe.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ye(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        },
      });
    },
    fix: function (e) {
      return e[xe.expando] ? e : new xe.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== _() && this.focus) return this.focus(), !1;
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === _() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && r(this, 'input')) return this.click(), !1;
        },
        _default: function (e) {
          return r(e.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (xe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (xe.Event = function (e, t) {
      if (!(this instanceof xe.Event)) return new xe.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? C : S),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && xe.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[xe.expando] = !0);
    }),
    (xe.Event.prototype = {
      constructor: xe.Event,
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = C), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = C), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = C), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      },
    }),
    xe.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && tt.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && nt.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
        },
      },
      xe.event.addProp
    ),
    xe.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, t) {
      xe.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n,
            i = this,
            o = e.relatedTarget,
            r = e.handleObj;
          return (o && (o === i || xe.contains(i, o))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
        },
      };
    }),
    xe.fn.extend({
      on: function (e, t, n, i) {
        return A(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return A(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), xe(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler), this;
        if ('object' == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = S),
          this.each(function () {
            xe.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    rt = /<script|<style|<link/i,
    st = /checked\s*(?:[^=]|=\s*.checked.)/i,
    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  xe.extend({
    htmlPrefilter: function (e) {
      return e.replace(ot, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = xe.contains(e.ownerDocument, e);
      if (!(me.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || xe.isXMLDoc(e))) for (s = x(a), i = 0, o = (r = x(e)).length; i < o; i++) j(r[i], s[i]);
      if (t)
        if (n) for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++) O(r[i], s[i]);
        else O(e, a);
      return (s = x(a, 'script')).length > 0 && k(s, !l && x(e, 'script')), a;
    },
    cleanData: function (e) {
      for (var t, n, i, o = xe.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Pe(n)) {
          if ((t = n[qe.expando])) {
            if (t.events) for (i in t.events) o[i] ? xe.event.remove(n, i) : xe.removeEvent(n, i, t.handle);
            n[qe.expando] = void 0;
          }
          n[We.expando] && (n[We.expando] = void 0);
        }
    },
  }),
    xe.fn.extend({
      detach: function (e) {
        return N(this, e, !0);
      },
      remove: function (e) {
        return N(this, e);
      },
      text: function (e) {
        return Ie(
          this,
          function (e) {
            return void 0 === e
              ? xe.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return M(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || E(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return M(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = E(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return M(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return M(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (xe.cleanData(x(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return xe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Ie(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !rt.test(e) && !Je[(Ke.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = xe.htmlPrefilter(e);
              try {
                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (xe.cleanData(x(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return M(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            xe.inArray(this, e) < 0 && (xe.cleanData(x(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    xe.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, t) {
      xe.fn[e] = function (e) {
        for (var n, i = [], o = xe(e), r = o.length - 1, s = 0; s <= r; s++) (n = s === r ? this : this.clone(!0)), xe(o[s])[t](n), ce.apply(i, n.get());
        return this.pushStack(i);
      };
    });
  var lt = new RegExp('^(' + ze + ')(?!px)[a-z%]+$', 'i'),
    ut = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    ct = new RegExp(Ue.join('|'), 'i');
  !(function () {
    function t() {
      if (u) {
        (l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (u.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          et.appendChild(l).appendChild(u);
        var t = e.getComputedStyle(u);
        (i = '1%' !== t.top), (a = 12 === n(t.marginLeft)), (u.style.right = '60%'), (s = 36 === n(t.right)), (o = 36 === n(t.width)), (u.style.position = 'absolute'), (r = 36 === u.offsetWidth || 'absolute'), et.removeChild(l), (u = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      s,
      a,
      l = se.createElement('div'),
      u = se.createElement('div');
    u.style &&
      ((u.style.backgroundClip = 'content-box'),
      (u.cloneNode(!0).style.backgroundClip = ''),
      (me.clearCloneStyle = 'content-box' === u.style.backgroundClip),
      xe.extend(me, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), a;
        },
        scrollboxSize: function () {
          return t(), r;
        },
      }));
  })();
  var dt = /^(none|table(?!-c[ea]).+)/,
    pt = /^--/,
    ft = { position: 'absolute', visibility: 'hidden', display: 'block' },
    ht = { letterSpacing: '0', fontWeight: '400' },
    gt = ['Webkit', 'Moz', 'ms'],
    vt = se.createElement('div').style;
  xe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = I(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = h(t),
          l = pt.test(t),
          u = e.style;
        if ((l || (t = P(a)), (s = xe.cssHooks[t] || xe.cssHooks[a]), void 0 === n)) return s && 'get' in s && void 0 !== (o = s.get(e, !1, i)) ? o : u[t];
        'string' == (r = typeof n) && (o = Be.exec(n)) && o[1] && ((n = y(e, t, o)), (r = 'number')),
          null != n &&
            n === n &&
            ('number' === r && (n += (o && o[3]) || (xe.cssNumber[a] ? '' : 'px')),
            me.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (u[t] = 'inherit'),
            (s && 'set' in s && void 0 === (n = s.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var o,
        r,
        s,
        a = h(t);
      return (
        pt.test(t) || (t = P(a)),
        (s = xe.cssHooks[t] || xe.cssHooks[a]) && 'get' in s && (o = s.get(e, !0, n)),
        void 0 === o && (o = I(e, t, i)),
        'normal' === o && t in ht && (o = ht[t]),
        '' === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
      );
    },
  }),
    xe.each(['height', 'width'], function (e, t) {
      xe.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !dt.test(xe.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? F(e, t, i)
              : Xe(e, ft, function () {
                  return F(e, t, i);
                });
        },
        set: function (e, n, i) {
          var o,
            r = ut(e),
            s = 'border-box' === xe.css(e, 'boxSizing', !1, r),
            a = i && W(e, t, i, s, r);
          return (
            s && me.scrollboxSize() === r.position && (a -= Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - W(e, t, 'border', !1, r) - 0.5)),
            a && (o = Be.exec(n)) && 'px' !== (o[3] || 'px') && ((e.style[t] = n), (n = xe.css(e, t))),
            q(e, n, a)
          );
        },
      };
    }),
    (xe.cssHooks.marginLeft = L(me.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(I(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Xe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    xe.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
      (xe.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++) o[e + Ue[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        },
      }),
        'margin' !== e && (xe.cssHooks[e + t].set = q);
    }),
    xe.fn.extend({
      css: function (e, t) {
        return Ie(
          this,
          function (e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = ut(e), o = t.length; s < o; s++) r[t[s]] = xe.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (xe.Tween = R),
    (R.prototype = {
      constructor: R,
      init: function (e, t, n, i, o, r) {
        (this.elem = e), (this.prop = n), (this.easing = o || xe.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (xe.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = R.propHooks[this.prop];
        return e && e.get ? e.get(this) : R.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = R.propHooks[this.prop];
        return (
          this.options.duration ? (this.pos = t = xe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : R.propHooks._default.set(this),
          this
        );
      },
    }),
    (R.prototype.init.prototype = R.prototype),
    (R.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = xe.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
        },
        set: function (e) {
          xe.fx.step[e.prop] ? xe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[xe.cssProps[e.prop]] && !xe.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : xe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (R.propHooks.scrollTop = R.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (xe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (xe.fx = R.prototype.init),
    (xe.fx.step = {});
  var mt,
    yt,
    bt = /^(?:toggle|show|hide)$/,
    wt = /queueHooks$/;
  (xe.Animation = xe.extend(G, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return y(n.elem, e, Be.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      ye(e) ? ((t = e), (e = ['*'])) : (e = e.match(je));
      for (var n, i = 0, o = e.length; i < o; i++) (n = e[i]), (G.tweeners[n] = G.tweeners[n] || []), G.tweeners[n].unshift(t);
    },
    prefilters: [X],
    prefilter: function (e, t) {
      t ? G.prefilters.unshift(e) : G.prefilters.push(e);
    },
  })),
    (xe.speed = function (e, t, n) {
      var i = e && 'object' == typeof e ? xe.extend({}, e) : { complete: n || (!n && t) || (ye(e) && e), duration: e, easing: (n && t) || (t && !ye(t) && t) };
      return (
        xe.fx.off ? (i.duration = 0) : 'number' != typeof i.duration && (i.duration in xe.fx.speeds ? (i.duration = xe.fx.speeds[i.duration]) : (i.duration = xe.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          ye(i.old) && i.old.call(this), i.queue && xe.dequeue(this, i.queue);
        }),
        i
      );
    }),
    xe.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Ve).css('opacity', 0).show().end().animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var o = xe.isEmptyObject(e),
          r = xe.speed(t, n, i),
          s = function () {
            var t = G(this, xe.extend({}, e), r);
            (o || qe.get(this, 'finish')) && t.stop(!0);
          };
        return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              o = null != e && e + 'queueHooks',
              r = xe.timers,
              s = qe.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && wt.test(o) && i(s[o]);
            for (o = r.length; o--; ) r[o].elem !== this || (null != e && r[o].queue !== e) || (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || xe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t,
              n = qe.get(this),
              i = n[e + 'queue'],
              o = n[e + 'queueHooks'],
              r = xe.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, xe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    xe.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = xe.fn[t];
      xe.fn[t] = function (e, i, o) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, o);
      };
    }),
    xe.each({ slideDown: U('show'), slideUp: U('hide'), slideToggle: U('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, t) {
      xe.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i);
      };
    }),
    (xe.timers = []),
    (xe.fx.tick = function () {
      var e,
        t = 0,
        n = xe.timers;
      for (mt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || xe.fx.stop(), (mt = void 0);
    }),
    (xe.fx.timer = function (e) {
      xe.timers.push(e), xe.fx.start();
    }),
    (xe.fx.interval = 13),
    (xe.fx.start = function () {
      yt || ((yt = !0), z());
    }),
    (xe.fx.stop = function () {
      yt = null;
    }),
    (xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (xe.fn.delay = function (t, n) {
      return (
        (t = xe.fx ? xe.fx.speeds[t] || t : t),
        (n = n || 'fx'),
        this.queue(n, function (n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function () {
      var e = se.createElement('input'),
        t = se.createElement('select').appendChild(se.createElement('option'));
      (e.type = 'checkbox'), (me.checkOn = '' !== e.value), (me.optSelected = t.selected), ((e = se.createElement('input')).value = 't'), (e.type = 'radio'), (me.radioValue = 't' === e.value);
    })();
  var xt,
    kt = xe.expr.attrHandle;
  xe.fn.extend({
    attr: function (e, t) {
      return Ie(this, xe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        xe.removeAttr(this, e);
      });
    },
  }),
    xe.extend({
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? xe.prop(e, t, n)
            : ((1 === r && xe.isXMLDoc(e)) || (o = xe.attrHooks[t.toLowerCase()] || (xe.expr.match.bool.test(t) ? xt : void 0)),
              void 0 !== n
                ? null === n
                  ? void xe.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ''), n)
                : o && 'get' in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = xe.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!me.radioValue && 'radio' === t && r(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          o = t && t.match(je);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      },
    }),
    (xt = {
      set: function (e, t, n) {
        return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    xe.each(xe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = kt[t] || xe.find.attr;
      kt[t] = function (e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return i || ((r = kt[s]), (kt[s] = o), (o = null != n(e, t, i) ? s : null), (kt[s] = r)), o;
      };
    });
  var Tt = /^(?:input|select|textarea|button)$/i,
    Ct = /^(?:a|area)$/i;
  xe.fn.extend({
    prop: function (e, t) {
      return Ie(this, xe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[xe.propFix[e] || e];
      });
    },
  }),
    xe.extend({
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (1 === r && xe.isXMLDoc(e)) || ((t = xe.propFix[t] || t), (o = xe.propHooks[t])), void 0 !== n ? (o && 'set' in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && 'get' in o && null !== (i = o.get(e, t)) ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = xe.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : Tt.test(e.nodeName) || (Ct.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    me.optSelected ||
      (xe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    xe.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      xe.propFix[this.toLowerCase()] = this;
    }),
    xe.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            xe(this).addClass(e.call(this, t, Q(this)));
          });
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((o = Q(n)), (i = 1 === n.nodeType && ' ' + K(o) + ' '))) {
              for (s = 0; (r = t[s++]); ) i.indexOf(' ' + r + ' ') < 0 && (i += r + ' ');
              o !== (a = K(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (ye(e))
          return this.each(function (t) {
            xe(this).removeClass(e.call(this, t, Q(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((t = J(e)).length)
          for (; (n = this[l++]); )
            if (((o = Q(n)), (i = 1 === n.nodeType && ' ' + K(o) + ' '))) {
              for (s = 0; (r = t[s++]); ) for (; i.indexOf(' ' + r + ' ') > -1; ) i = i.replace(' ' + r + ' ', ' ');
              o !== (a = K(i)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = 'string' === n || Array.isArray(e);
        return 'boolean' == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ye(e)
          ? this.each(function (n) {
              xe(this).toggleClass(e.call(this, n, Q(this), t), t);
            })
          : this.each(function () {
              var t, o, r, s;
              if (i) for (o = 0, r = xe(this), s = J(e); (t = s[o++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else (void 0 !== e && 'boolean' !== n) || ((t = Q(this)) && qe.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : qe.get(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = ' ' + e + ' '; (n = this[i++]); ) if (1 === n.nodeType && (' ' + K(Q(n)) + ' ').indexOf(t) > -1) return !0;
        return !1;
      },
    });
  var St = /\r/g;
  xe.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = ye(e)),
          this.each(function (n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, xe(this).val()) : e)
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : Array.isArray(o) &&
                  (o = xe.map(o, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((t = xe.valHooks[this.type] || xe.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, o, 'value')) || (this.value = o));
          }))
        : o
        ? (t = xe.valHooks[o.type] || xe.valHooks[o.nodeName.toLowerCase()]) && 'get' in t && void 0 !== (n = t.get(o, 'value'))
          ? n
          : 'string' == typeof (n = o.value)
          ? n.replace(St, '')
          : null == n
          ? ''
          : n
        : void 0;
    },
  }),
    xe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = xe.find.attr(e, 'value');
            return null != t ? t : K(xe.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              a = 'select-one' === e.type,
              l = a ? null : [],
              u = a ? s + 1 : o.length;
            for (i = s < 0 ? u : a ? s : 0; i < u; i++)
              if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, 'optgroup'))) {
                if (((t = xe(n).val()), a)) return t;
                l.push(t);
              }
            return l;
          },
          set: function (e, t) {
            for (var n, i, o = e.options, r = xe.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = xe.inArray(xe.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
    }),
    xe.each(['radio', 'checkbox'], function () {
      (xe.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = xe.inArray(xe(e).val(), t) > -1);
        },
      }),
        me.checkOn ||
          (xe.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (me.focusin = 'onfocusin' in e);
  var _t = /^(?:focusinfocus|focusoutblur)$/,
    At = function (e) {
      e.stopPropagation();
    };
  xe.extend(xe.event, {
    trigger: function (t, n, i, o) {
      var r,
        s,
        a,
        l,
        u,
        c,
        d,
        p,
        f = [i || se],
        h = he.call(t, 'type') ? t.type : t,
        g = he.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (
        ((s = p = a = i = i || se),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !_t.test(h + xe.event.triggered) &&
          (h.indexOf('.') > -1 && ((h = (g = h.split('.')).shift()), g.sort()),
          (u = h.indexOf(':') < 0 && 'on' + h),
          (t = t[xe.expando] ? t : new xe.Event(h, 'object' == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = g.join('.')),
          (t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : xe.makeArray(n, [t])),
          (d = xe.event.special[h] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !be(i)) {
          for (l = d.delegateType || h, _t.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), (a = s);
          a === (i.ownerDocument || se) && f.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
          (p = s), (t.type = r > 1 ? l : d.bindType || h), (c = (qe.get(s, 'events') || {})[t.type] && qe.get(s, 'handle')) && c.apply(s, n), (c = u && s[u]) && c.apply && Pe(s) && ((t.result = c.apply(s, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(f.pop(), n)) ||
            !Pe(i) ||
            (u &&
              ye(i[h]) &&
              !be(i) &&
              ((a = i[u]) && (i[u] = null), (xe.event.triggered = h), t.isPropagationStopped() && p.addEventListener(h, At), i[h](), t.isPropagationStopped() && p.removeEventListener(h, At), (xe.event.triggered = void 0), a && (i[u] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = xe.extend(new xe.Event(), n, { type: e, isSimulated: !0 });
      xe.event.trigger(i, null, t);
    },
  }),
    xe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          xe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return xe.event.trigger(e, t, n, !0);
      },
    }),
    me.focusin ||
      xe.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
        var n = function (e) {
          xe.event.simulate(t, e.target, xe.event.fix(e));
        };
        xe.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this,
              o = qe.access(i, t);
            o || i.addEventListener(e, n, !0), qe.access(i, t, (o || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this,
              o = qe.access(i, t) - 1;
            o ? qe.access(i, t, o) : (i.removeEventListener(e, n, !0), qe.remove(i, t));
          },
        };
      });
  var Et = e.location,
    $t = Date.now(),
    Dt = /\?/;
  xe.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName('parsererror').length) || xe.error('Invalid XML: ' + t), n;
  };
  var Ot = /\[\]$/,
    jt = /\r?\n/g,
    Mt = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  (xe.param = function (e, t) {
    var n,
      i = [],
      o = function (e, t) {
        var n = ye(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || (e.jquery && !xe.isPlainObject(e)))
      xe.each(e, function () {
        o(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, o);
    return i.join('&');
  }),
    xe.fn.extend({
      serialize: function () {
        return xe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = xe.prop(this, 'elements');
          return e ? xe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !xe(this).is(':disabled') && Nt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ge.test(e));
          })
          .map(function (e, t) {
            var n = xe(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? xe.map(n, function (e) {
                  return { name: t.name, value: e.replace(jt, '\r\n') };
                })
              : { name: t.name, value: n.replace(jt, '\r\n') };
          })
          .get();
      },
    });
  var It = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Wt = /^(?:GET|HEAD)$/,
    Ft = /^\/\//,
    Rt = {},
    zt = {},
    Bt = '*/'.concat('*'),
    Ut = se.createElement('a');
  (Ut.href = Et.href),
    xe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: 'GET',
        isLocal: qt.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: { '*': Bt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': xe.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
      },
      ajaxPrefilter: ee(Rt),
      ajaxTransport: ee(zt),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var u,
            p,
            f,
            w,
            x,
            k = n;
          c ||
            ((c = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ''),
            (T.readyState = t > 0 ? 4 : 0),
            (u = (t >= 200 && t < 300) || 304 === t),
            i && (w = ie(h, T, i)),
            (w = oe(h, w, T, u)),
            u
              ? (h.ifModified && ((x = T.getResponseHeader('Last-Modified')) && (xe.lastModified[r] = x), (x = T.getResponseHeader('etag')) && (xe.etag[r] = x)),
                204 === t || 'HEAD' === h.type ? (k = 'nocontent') : 304 === t ? (k = 'notmodified') : ((k = w.state), (p = w.data), (u = !(f = w.error))))
              : ((f = k), (!t && k) || ((k = 'error'), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || k) + ''),
            u ? m.resolveWith(g, [p, k, T]) : m.rejectWith(g, [T, k, f]),
            T.statusCode(b),
            (b = void 0),
            d && v.trigger(u ? 'ajaxSuccess' : 'ajaxError', [T, h, u ? p : f]),
            y.fireWith(g, [T, k]),
            d && (v.trigger('ajaxComplete', [T, h]), --xe.active || xe.event.trigger('ajaxStop')));
        }
        'object' == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          u,
          c,
          d,
          p,
          f,
          h = xe.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? xe(g) : xe.event,
          m = xe.Deferred(),
          y = xe.Callbacks('once memory'),
          b = h.statusCode || {},
          w = {},
          x = {},
          k = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!a) for (a = {}; (t = Pt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return null == c && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) T.always(e[T.status]);
                else for (t in e) b[t] = [b[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || k;
              return o && o.abort(t), i(0, t), this;
            },
          };
        if ((m.promise(T), (h.url = ((t || h.url || Et.href) + '').replace(Ft, Et.protocol + '//')), (h.type = n.method || n.type || h.method || h.type), (h.dataTypes = (h.dataType || '*').toLowerCase().match(je) || ['']), null == h.crossDomain)) {
          u = se.createElement('a');
          try {
            (u.href = h.url), (u.href = u.href), (h.crossDomain = Ut.protocol + '//' + Ut.host != u.protocol + '//' + u.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if ((h.data && h.processData && 'string' != typeof h.data && (h.data = xe.param(h.data, h.traditional)), te(Rt, h, n, T), c)) return T;
        (d = xe.event && h.global) && 0 == xe.active++ && xe.event.trigger('ajaxStart'),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Wt.test(h.type)),
          (r = h.url.replace(Lt, '')),
          h.hasContent
            ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(It, '+'))
            : ((f = h.url.slice(r.length)),
              h.data && (h.processData || 'string' == typeof h.data) && ((r += (Dt.test(r) ? '&' : '?') + h.data), delete h.data),
              !1 === h.cache && ((r = r.replace(Ht, '$1')), (f = (Dt.test(r) ? '&' : '?') + '_=' + $t++ + f)),
              (h.url = r + f)),
          h.ifModified && (xe.lastModified[r] && T.setRequestHeader('If-Modified-Since', xe.lastModified[r]), xe.etag[r] && T.setRequestHeader('If-None-Match', xe.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && T.setRequestHeader('Content-Type', h.contentType),
          T.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Bt + '; q=0.01' : '') : h.accepts['*']);
        for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || c)) return T.abort();
        if (((k = 'abort'), y.add(h.complete), T.done(h.success), T.fail(h.error), (o = te(zt, h, n, T)))) {
          if (((T.readyState = 1), d && v.trigger('ajaxSend', [T, h]), c)) return T;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function () {
              T.abort('timeout');
            }, h.timeout));
          try {
            (c = !1), o.send(w, i);
          } catch (e) {
            if (c) throw e;
            i(-1, e);
          }
        } else i(-1, 'No Transport');
        return T;
      },
      getJSON: function (e, t, n) {
        return xe.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return xe.get(e, void 0, t, 'script');
      },
    }),
    xe.each(['get', 'post'], function (e, t) {
      xe[t] = function (e, n, i, o) {
        return ye(n) && ((o = o || i), (i = n), (n = void 0)), xe.ajax(xe.extend({ url: e, type: t, dataType: o, data: n, success: i }, xe.isPlainObject(e) && e));
      };
    }),
    (xe._evalUrl = function (e) {
      return xe.ajax({ url: e, type: 'GET', dataType: 'script', cache: !0, async: !1, global: !1, throws: !0 });
    }),
    xe.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (ye(e) && (e = e.call(this[0])),
            (t = xe(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return ye(e)
          ? this.each(function (t) {
              xe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = xe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ye(e);
        return this.each(function (n) {
          xe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              xe(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (xe.expr.pseudos.hidden = function (e) {
      return !xe.expr.pseudos.visible(e);
    }),
    (xe.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (xe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Xt = xe.ajaxSettings.xhr();
  (me.cors = !!Xt && 'withCredentials' in Xt),
    (me.ajax = Xt = !!Xt),
    xe.ajaxTransport(function (t) {
      var n, i;
      if (me.cors || (Xt && !t.crossDomain))
        return {
          send: function (o, r) {
            var s,
              a = t.xhr();
            if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest');
            for (s in o) a.setRequestHeader(s, o[s]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === e
                    ? a.abort()
                    : 'error' === e
                    ? 'number' != typeof a.status
                      ? r(0, 'error')
                      : r(a.status, a.statusText)
                    : r(Vt[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n('abort'));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    xe.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    xe.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return xe.globalEval(e), e;
        },
      },
    }),
    xe.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    xe.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = xe('<script>')
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                'load error',
                (n = function (e) {
                  t.remove(), (n = null), e && o('error' === e.type ? 404 : 200, e.type);
                })
              )),
              se.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
  xe.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Yt.pop() || xe.expando + '_' + $t++;
      return (this[e] = !0), e;
    },
  }),
    xe.ajaxPrefilter('json jsonp', function (t, n, i) {
      var o,
        r,
        s,
        a = !1 !== t.jsonp && (Gt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Gt.test(t.data) && 'data');
      if (a || 'jsonp' === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a ? (t[a] = t[a].replace(Gt, '$1' + o)) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? '&' : '?') + t.jsonp + '=' + o),
          (t.converters['script json'] = function () {
            return s || xe.error(o + ' was not called'), s[0];
          }),
          (t.dataTypes[0] = 'json'),
          (r = e[o]),
          (e[o] = function () {
            s = arguments;
          }),
          i.always(function () {
            void 0 === r ? xe(e).removeProp(o) : (e[o] = r), t[o] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(o)), s && ye(r) && r(s[0]), (s = r = void 0);
          }),
          'script'
        );
    }),
    (me.createHTMLDocument = (function () {
      var e = se.implementation.createHTMLDocument('').body;
      return (e.innerHTML = '<form></form><form></form>'), 2 === e.childNodes.length;
    })()),
    (xe.parseHTML = function (e, t, n) {
      if ('string' != typeof e) return [];
      'boolean' == typeof t && ((n = t), (t = !1));
      var i, o, r;
      return (
        t || (me.createHTMLDocument ? (((i = (t = se.implementation.createHTMLDocument('')).createElement('base')).href = se.location.href), t.head.appendChild(i)) : (t = se)),
        (o = Ae.exec(e)),
        (r = !n && []),
        o ? [t.createElement(o[1])] : ((o = T([e], t, r)), r && r.length && xe(r).remove(), xe.merge([], o.childNodes))
      );
    }),
    (xe.fn.load = function (e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(' ');
      return (
        a > -1 && ((i = K(e.slice(a))), (e = e.slice(0, a))),
        ye(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (o = 'POST'),
        s.length > 0 &&
          xe
            .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (r = arguments), s.html(i ? xe('<div>').append(xe.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  s.each(function () {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    xe.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      xe.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (xe.expr.pseudos.animated = function (e) {
      return xe.grep(xe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (xe.offset = {
      setOffset: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          u = xe.css(e, 'position'),
          c = xe(e),
          d = {};
        'static' === u && (e.style.position = 'relative'),
          (a = c.offset()),
          (r = xe.css(e, 'top')),
          (l = xe.css(e, 'left')),
          ('absolute' === u || 'fixed' === u) && (r + l).indexOf('auto') > -1 ? ((s = (i = c.position()).top), (o = i.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          ye(t) && (t = t.call(e, n, xe.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + s),
          null != t.left && (d.left = t.left - a.left + o),
          'using' in t ? t.using.call(e, d) : c.css(d);
      },
    }),
    xe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                xe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ('fixed' === xe.css(i, 'position')) t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && 'static' === xe.css(e, 'position'); ) e = e.parentNode;
            e && e !== i && 1 === e.nodeType && (((o = xe(e).offset()).top += xe.css(e, 'borderTopWidth', !0)), (o.left += xe.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - o.top - xe.css(i, 'marginTop', !0), left: t.left - o.left - xe.css(i, 'marginLeft', !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && 'static' === xe.css(e, 'position'); ) e = e.offsetParent;
          return e || et;
        });
      },
    }),
    xe.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
      var n = 'pageYOffset' === t;
      xe.fn[e] = function (i) {
        return Ie(
          this,
          function (e, i, o) {
            var r;
            if ((be(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === o)) return r ? r[t] : e[i];
            r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : (e[i] = o);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    xe.each(['top', 'left'], function (e, t) {
      xe.cssHooks[t] = L(me.pixelPosition, function (e, n) {
        if (n) return (n = I(e, t)), lt.test(n) ? xe(e).position()[t] + 'px' : n;
      });
    }),
    xe.each({ Height: 'height', Width: 'width' }, function (e, t) {
      xe.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, i) {
        xe.fn[i] = function (o, r) {
          var s = arguments.length && (n || 'boolean' != typeof o),
            a = n || (!0 === o || !0 === r ? 'margin' : 'border');
          return Ie(
            this,
            function (t, n, o) {
              var r;
              return be(t)
                ? 0 === i.indexOf('outer')
                  ? t['inner' + e]
                  : t.document.documentElement['client' + e]
                : 9 === t.nodeType
                ? ((r = t.documentElement), Math.max(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e]))
                : void 0 === o
                ? xe.css(t, n, a)
                : xe.style(t, n, o, a);
            },
            t,
            s ? o : void 0,
            s
          );
        };
      });
    }),
    xe.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
      xe.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }),
    xe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    xe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      },
    }),
    (xe.proxy = function (e, t) {
      var n, i, o;
      if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), ye(e)))
        return (
          (i = le.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || xe.guid++),
          o
        );
    }),
    (xe.holdReady = function (e) {
      e ? xe.readyWait++ : xe.ready(!0);
    }),
    (xe.isArray = Array.isArray),
    (xe.parseJSON = JSON.parse),
    (xe.nodeName = r),
    (xe.isFunction = ye),
    (xe.isWindow = be),
    (xe.camelCase = h),
    (xe.type = i),
    (xe.now = Date.now),
    (xe.isNumeric = function (e) {
      var t = xe.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return xe;
      });
  var Kt = e.jQuery,
    Qt = e.$;
  return (
    (xe.noConflict = function (t) {
      return e.$ === xe && (e.$ = Qt), t && e.jQuery === xe && (e.jQuery = Kt), xe;
    }),
    t || (e.jQuery = e.$ = xe),
    xe
  );
}),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e(jQuery);
  })(function (e) {
    (e.ui = e.ui || {}), (e.ui.version = '1.12.1');
    var t,
      n = 0,
      i = Array.prototype.slice;
    (e.cleanData =
      ((t = e.cleanData),
      function (n) {
        for (var i, o, r = 0; null != (o = n[r]); r++)
          try {
            (i = e._data(o, 'events')) && i.remove && e(o).triggerHandler('remove');
          } catch (n) {}
        t(n);
      })),
      (e.widget = function (t, n, i) {
        var o,
          r,
          s,
          a = {},
          l = t.split('.')[0],
          u = l + '-' + (t = t.split('.')[1]);
        return (
          i || ((i = n), (n = e.Widget)),
          e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
          (e.expr[':'][u.toLowerCase()] = function (t) {
            return !!e.data(t, u);
          }),
          (e[l] = e[l] || {}),
          (o = e[l][t]),
          (r = e[l][t] =
            function (e, t) {
              if (!this._createWidget) return new r(e, t);
              arguments.length && this._createWidget(e, t);
            }),
          e.extend(r, o, { version: i.version, _proto: e.extend({}, i), _childConstructors: [] }),
          ((s = new n()).options = e.widget.extend({}, s.options)),
          e.each(i, function (t, i) {
            function o() {
              return n.prototype[t].apply(this, arguments);
            }
            function r(e) {
              return n.prototype[t].apply(this, e);
            }
            e.isFunction(i)
              ? (a[t] = function () {
                  var e,
                    t = this._super,
                    n = this._superApply;
                  return (this._super = o), (this._superApply = r), (e = i.apply(this, arguments)), (this._super = t), (this._superApply = n), e;
                })
              : (a[t] = i);
          }),
          (r.prototype = e.widget.extend(s, { widgetEventPrefix: (o && s.widgetEventPrefix) || t }, a, { constructor: r, namespace: l, widgetName: t, widgetFullName: u })),
          o
            ? (e.each(o._childConstructors, function (t, n) {
                var i = n.prototype;
                e.widget(i.namespace + '.' + i.widgetName, r, n._proto);
              }),
              delete o._childConstructors)
            : n._childConstructors.push(r),
          e.widget.bridge(t, r),
          r
        );
      }),
      (e.widget.extend = function (t) {
        for (var n, o, r = i.call(arguments, 1), s = 0, a = r.length; s < a; s++)
          for (n in r[s]) (o = r[s][n]), r[s].hasOwnProperty(n) && void 0 !== o && (e.isPlainObject(o) ? (t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], o) : e.widget.extend({}, o)) : (t[n] = o));
        return t;
      }),
      (e.widget.bridge = function (t, n) {
        var o = n.prototype.widgetFullName || t;
        e.fn[t] = function (r) {
          var s = 'string' == typeof r,
            a = i.call(arguments, 1),
            l = this;
          return (
            s
              ? this.length || 'instance' !== r
                ? this.each(function () {
                    var n,
                      i = e.data(this, o);
                    return 'instance' === r
                      ? ((l = i), !1)
                      : i
                      ? e.isFunction(i[r]) && '_' !== r.charAt(0)
                        ? (n = i[r].apply(i, a)) !== i && void 0 !== n
                          ? ((l = n && n.jquery ? l.pushStack(n.get()) : n), !1)
                          : void 0
                        : e.error("no such method '" + r + "' for " + t + ' widget instance')
                      : e.error('cannot call methods on ' + t + " prior to initialization; attempted to call method '" + r + "'");
                  })
                : (l = void 0)
              : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))),
                this.each(function () {
                  var t = e.data(this, o);
                  t ? (t.option(r || {}), t._init && t._init()) : e.data(this, o, new n(r, this));
                })),
            l
          );
        };
      }),
      (e.Widget = function () {}),
      (e.Widget._childConstructors = []),
      (e.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (t, i) {
          (i = e(i || this.defaultElement || this)[0]),
            (this.element = e(i)),
            (this.uuid = n++),
            (this.eventNamespace = '.' + this.widgetName + this.uuid),
            (this.bindings = e()),
            (this.hoverable = e()),
            (this.focusable = e()),
            (this.classesElementLookup = {}),
            i !== this &&
              (e.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === i && this.destroy();
                },
              }),
              (this.document = e(i.style ? i.ownerDocument : i.document || i)),
              (this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
            (this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t)),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger('create', null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
          var t = this;
          this._destroy(),
            e.each(this.classesElementLookup, function (e, n) {
              t._removeClass(n, e);
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: e.noop,
        widget: function () {
          return this.element;
        },
        option: function (t, n) {
          var i,
            o,
            r,
            s = t;
          if (0 === arguments.length) return e.widget.extend({}, this.options);
          if ('string' == typeof t)
            if (((s = {}), (t = (i = t.split('.')).shift()), i.length)) {
              for (o = s[t] = e.widget.extend({}, this.options[t]), r = 0; r < i.length - 1; r++) (o[i[r]] = o[i[r]] || {}), (o = o[i[r]]);
              if (((t = i.pop()), 1 === arguments.length)) return void 0 === o[t] ? null : o[t];
              o[t] = n;
            } else {
              if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
              s[t] = n;
            }
          return this._setOptions(s), this;
        },
        _setOptions: function (e) {
          for (var t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function (e, t) {
          return 'classes' === e && this._setOptionClasses(t), (this.options[e] = t), 'disabled' === e && this._setOptionDisabled(t), this;
        },
        _setOptionClasses: function (t) {
          var n, i, o;
          for (n in t) (o = this.classesElementLookup[n]), t[n] !== this.options.classes[n] && o && o.length && ((i = e(o.get())), this._removeClass(o, n), i.addClass(this._classes({ element: i, keys: n, classes: t, add: !0 })));
        },
        _setOptionDisabled: function (e) {
          this._toggleClass(this.widget(), this.widgetFullName + '-disabled', null, !!e), e && (this._removeClass(this.hoverable, null, 'ui-state-hover'), this._removeClass(this.focusable, null, 'ui-state-focus'));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (t) {
          function n(n, r) {
            for (var s, a = 0; a < n.length; a++)
              (s = o.classesElementLookup[n[a]] || e()), (s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get())), (o.classesElementLookup[n[a]] = s), i.push(n[a]), r && t.classes[n[a]] && i.push(t.classes[n[a]]);
          }
          var i = [],
            o = this;
          return (
            (t = e.extend({ element: this.element, classes: this.options.classes || {} }, t)),
            this._on(t.element, { remove: '_untrackClassesElement' }),
            t.keys && n(t.keys.match(/\S+/g) || [], !0),
            t.extra && n(t.extra.match(/\S+/g) || []),
            i.join(' ')
          );
        },
        _untrackClassesElement: function (t) {
          var n = this;
          e.each(n.classesElementLookup, function (i, o) {
            -1 !== e.inArray(t.target, o) && (n.classesElementLookup[i] = e(o.not(t.target).get()));
          });
        },
        _removeClass: function (e, t, n) {
          return this._toggleClass(e, t, n, !1);
        },
        _addClass: function (e, t, n) {
          return this._toggleClass(e, t, n, !0);
        },
        _toggleClass: function (e, t, n, i) {
          var o = 'string' == typeof e || null === e,
            n = { extra: o ? t : n, keys: o ? e : t, element: o ? this.element : e, add: (i = 'boolean' == typeof i ? i : n) };
          return n.element.toggleClass(this._classes(n), i), this;
        },
        _on: function (t, n, i) {
          var o,
            r = this;
          'boolean' != typeof t && ((i = n), (n = t), (t = !1)),
            i ? ((n = o = e(n)), (this.bindings = this.bindings.add(n))) : ((i = n), (n = this.element), (o = this.widget())),
            e.each(i, function (i, s) {
              function a() {
                if (t || (!0 !== r.options.disabled && !e(this).hasClass('ui-state-disabled'))) return ('string' == typeof s ? r[s] : s).apply(r, arguments);
              }
              'string' != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
              var l = i.match(/^([\w:-]*)\s*(.*)$/),
                i = l[1] + r.eventNamespace,
                l = l[2];
              l ? o.on(i, l, a) : n.on(i, a);
            });
        },
        _off: function (t, n) {
          (n = (n || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace),
            t.off(n).off(n),
            (this.bindings = e(this.bindings.not(t).get())),
            (this.focusable = e(this.focusable.not(t).get())),
            (this.hoverable = e(this.hoverable.not(t).get()));
        },
        _delay: function (e, t) {
          var n = this;
          return setTimeout(function () {
            return ('string' == typeof e ? n[e] : e).apply(n, arguments);
          }, t || 0);
        },
        _hoverable: function (t) {
          (this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                this._addClass(e(t.currentTarget), null, 'ui-state-hover');
              },
              mouseleave: function (t) {
                this._removeClass(e(t.currentTarget), null, 'ui-state-hover');
              },
            });
        },
        _focusable: function (t) {
          (this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                this._addClass(e(t.currentTarget), null, 'ui-state-focus');
              },
              focusout: function (t) {
                this._removeClass(e(t.currentTarget), null, 'ui-state-focus');
              },
            });
        },
        _trigger: function (t, n, i) {
          var o,
            r,
            s = this.options[t];
          if (((i = i || {}), ((n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (n.target = this.element[0]), (r = n.originalEvent))) for (o in r) o in n || (n[o] = r[o]);
          return this.element.trigger(n, i), !((e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i))) || n.isDefaultPrevented());
        },
      }),
      e.each({ show: 'fadeIn', hide: 'fadeOut' }, function (t, n) {
        e.Widget.prototype['_' + t] = function (i, o, r) {
          var s = (o = 'string' == typeof o ? { effect: o } : o) ? (!0 !== o && 'number' != typeof o && o.effect) || n : t,
            a = !e.isEmptyObject((o = 'number' == typeof (o = o || {}) ? { duration: o } : o));
          (o.complete = r),
            o.delay && i.delay(o.delay),
            a && e.effects && e.effects.effect[s]
              ? i[t](o)
              : s !== t && i[s]
              ? i[s](o.duration, o.easing, r)
              : i.queue(function (n) {
                  e(this)[t](), r && r.call(i[0]), n();
                });
        };
      }),
      e.widget,
      (e.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }),
      (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var o = !1;
    e(document).on('mouseup', function () {
      o = !1;
    }),
      e.widget('ui.mouse', {
        version: '1.12.1',
        options: { cancel: 'input, textarea, button, select, option', distance: 1, delay: 0 },
        _mouseInit: function () {
          var t = this;
          this.element
            .on('mousedown.' + this.widgetName, function (e) {
              return t._mouseDown(e);
            })
            .on('click.' + this.widgetName, function (n) {
              if (!0 === e.data(n.target, t.widgetName + '.preventClickEvent')) return e.removeData(n.target, t.widgetName + '.preventClickEvent'), n.stopImmediatePropagation(), !1;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.off('.' + this.widgetName), this._mouseMoveDelegate && this.document.off('mousemove.' + this.widgetName, this._mouseMoveDelegate).off('mouseup.' + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (t) {
          if (!o) {
            (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
            var n = this,
              i = 1 === t.which,
              r = !('string' != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
            return (
              !(i && !r && this._mouseCapture(t)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  n.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 === e.data(t.target, this.widgetName + '.preventClickEvent') && e.removeData(t.target, this.widgetName + '.preventClickEvent'),
                  (this._mouseMoveDelegate = function (e) {
                    return n._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return n._mouseUp(e);
                  }),
                  this.document.on('mousemove.' + this.widgetName, this._mouseMoveDelegate).on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (o = !0)))
            );
          }
        },
        _mouseMove: function (t) {
          if (this._mouseMoved) {
            if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
            if (!t.which)
              if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
              else if (!this.ignoreMissingWhich) return this._mouseUp(t);
          }
          return (
            (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(t), t.preventDefault())
              : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
          );
        },
        _mouseUp: function (t) {
          this.document.off('mousemove.' + this.widgetName, this._mouseMoveDelegate).off('mouseup.' + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
            (this.ignoreMissingWhich = !1),
            (o = !1),
            t.preventDefault();
        },
        _mouseDistanceMet: function (e) {
          return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }),
      e.widget('ui.slider', e.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'slide',
        options: {
          animate: !1,
          classes: { 'ui-slider': 'ui-corner-all', 'ui-slider-handle': 'ui-corner-all', 'ui-slider-range': 'ui-corner-all ui-widget-header' },
          distance: 0,
          max: 100,
          min: 0,
          orientation: 'horizontal',
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass('ui-slider ui-slider-' + this.orientation, 'ui-widget ui-widget-content'),
            this._refresh(),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function () {
          var t,
            n = this.options,
            i = this.element.find('.ui-slider-handle'),
            o = [],
            r = (n.values && n.values.length) || 1;
          for (i.length > r && (i.slice(r).remove(), (i = i.slice(0, r))), t = i.length; t < r; t++) o.push("<span tabindex='0'></span>");
          (this.handles = i.add(e(o.join('')).appendTo(this.element))),
            this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default'),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (t) {
              e(this).data('ui-slider-handle-index', t).attr('tabIndex', 0);
            });
        },
        _createRange: function () {
          var t = this.options;
          t.range
            ? (!0 === t.range && (t.values ? (t.values.length && 2 !== t.values.length ? (t.values = [t.values[0], t.values[0]]) : e.isArray(t.values) && (t.values = t.values.slice(0))) : (t.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(this.range, 'ui-slider-range-min ui-slider-range-max'), this.range.css({ left: '', bottom: '' }))
                : ((this.range = e('<div>').appendTo(this.element)), this._addClass(this.range, 'ui-slider-range')),
              ('min' !== t.range && 'max' !== t.range) || this._addClass(this.range, 'ui-slider-range-' + t.range))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function (t) {
          var n,
            i,
            o,
            r,
            s,
            a,
            l = this,
            u = this.options;
          return (
            !u.disabled &&
            ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
            (this.elementOffset = this.element.offset()),
            (a = { x: t.pageX, y: t.pageY }),
            (n = this._normValueFromMouse(a)),
            (i = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (t) {
              var s = Math.abs(n - l.values(t));
              (s < i || (i === s && (t === l._lastChangedValue || l.values(t) === u.min))) && ((i = s), (o = e(this)), (r = t));
            }),
            !1 !== this._start(t, r) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = r),
              this._addClass(o, null, 'ui-state-active'),
              o.trigger('focus'),
              (s = o.offset()),
              (a = !e(t.target).parents().addBack().is('.ui-slider-handle')),
              (this._clickOffset = a
                ? { left: 0, top: 0 }
                : { left: t.pageX - s.left - o.width() / 2, top: t.pageY - s.top - o.height() / 2 - (parseInt(o.css('borderTopWidth'), 10) || 0) - (parseInt(o.css('borderBottomWidth'), 10) || 0) + (parseInt(o.css('marginTop'), 10) || 0) }),
              this.handles.hasClass('ui-state-hover') || this._slide(t, r, n),
              (this._animateOff = !0)))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (e) {
          var t = { x: e.pageX, y: e.pageY },
            t = this._normValueFromMouse(t);
          return this._slide(e, this._handleIndex, t), !1;
        },
        _mouseStop: function (e) {
          return (
            this._removeClass(this.handles, null, 'ui-state-active'), (this._mouseSliding = !1), this._stop(e, this._handleIndex), this._change(e, this._handleIndex), (this._handleIndex = null), (this._clickOffset = null), (this._animateOff = !1)
          );
        },
        _detectOrientation: function () {
          this.orientation = 'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
        },
        _normValueFromMouse: function (e) {
          var t,
            e =
              'horizontal' === this.orientation
                ? ((t = this.elementSize.width), e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0))
                : ((t = this.elementSize.height), e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            e = e / t;
          return (e = 1 < e ? 1 : e) < 0 && (e = 0), 'vertical' === this.orientation && (e = 1 - e), (t = this._valueMax() - this._valueMin()), (t = this._valueMin() + e * t), this._trimAlignValue(t);
        },
        _uiHash: function (e, t, n) {
          var i = { handle: this.handles[e], handleIndex: e, value: void 0 !== t ? t : this.value() };
          return this._hasMultipleValues() && ((i.value = void 0 !== t ? t : this.values(e)), (i.values = n || this.values())), i;
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length;
        },
        _start: function (e, t) {
          return this._trigger('start', e, this._uiHash(t));
        },
        _slide: function (e, t, n) {
          var i,
            o = this.value(),
            r = this.values();
          this._hasMultipleValues() && ((i = this.values(t ? 0 : 1)), (o = this.values(t)), 2 === this.options.values.length && !0 === this.options.range && (n = 0 === t ? Math.min(i, n) : Math.max(i, n)), (r[t] = n)),
            n !== o && !1 !== this._trigger('slide', e, this._uiHash(t, n, r)) && (this._hasMultipleValues() ? this.values(t, n) : this.value(n));
        },
        _stop: function (e, t) {
          this._trigger('stop', e, this._uiHash(t));
        },
        _change: function (e, t) {
          this._keySliding || this._mouseSliding || ((this._lastChangedValue = t), this._trigger('change', e, this._uiHash(t)));
        },
        value: function (e) {
          return arguments.length ? ((this.options.value = this._trimAlignValue(e)), this._refreshValue(), void this._change(null, 0)) : this._value();
        },
        values: function (t, n) {
          var i, o, r;
          if (1 < arguments.length) return (this.options.values[t] = this._trimAlignValue(n)), this._refreshValue(), void this._change(null, t);
          if (!arguments.length) return this._values();
          if (!e.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
          for (i = this.options.values, o = t, r = 0; r < i.length; r += 1) (i[r] = this._trimAlignValue(o[r])), this._change(null, r);
          this._refreshValue();
        },
        _setOption: function (t, n) {
          var i,
            o = 0;
          switch (
            ('range' === t &&
              !0 === this.options.range &&
              ('min' === n ? ((this.options.value = this._values(0)), (this.options.values = null)) : 'max' === n && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
            e.isArray(this.options.values) && (o = this.options.values.length),
            this._super(t, n),
            t)
          ) {
            case 'orientation':
              this._detectOrientation(),
                this._removeClass('ui-slider-horizontal ui-slider-vertical')._addClass('ui-slider-' + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(n),
                this.handles.css('horizontal' === n ? 'bottom' : 'left', '');
              break;
            case 'value':
              (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
              break;
            case 'values':
              for (this._animateOff = !0, this._refreshValue(), i = o - 1; 0 <= i; i--) this._change(null, i);
              this._animateOff = !1;
              break;
            case 'step':
            case 'min':
            case 'max':
              (this._animateOff = !0), this._calculateNewMax(), this._refreshValue(), (this._animateOff = !1);
              break;
            case 'range':
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _setOptionDisabled: function (e) {
          this._super(e), this._toggleClass(null, 'ui-state-disabled', !!e);
        },
        _value: function () {
          var e = this.options.value;
          return (e = this._trimAlignValue(e));
        },
        _values: function (e) {
          var t, n, i;
          if (arguments.length) return (t = this.options.values[e]), this._trimAlignValue(t);
          if (this._hasMultipleValues()) {
            for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
            return n;
          }
          return [];
        },
        _trimAlignValue: function (e) {
          if (e <= this._valueMin()) return this._valueMin();
          if (e >= this._valueMax()) return this._valueMax();
          var t = 0 < this.options.step ? this.options.step : 1,
            n = (e - this._valueMin()) % t,
            e = e - n;
          return 2 * Math.abs(n) >= t && (e += 0 < n ? t : -t), parseFloat(e.toFixed(5));
        },
        _calculateNewMax: function () {
          var e = this.options.max,
            t = this._valueMin(),
            n = this.options.step;
          (e = Math.round((e - t) / n) * n + t) > this.options.max && (e -= n), (this.max = parseFloat(e.toFixed(this._precision())));
        },
        _precision: function () {
          var e = this._precisionOf(this.options.step);
          return (e = null !== this.options.min ? Math.max(e, this._precisionOf(this.options.min)) : e);
        },
        _precisionOf: function (e) {
          var t = e.toString(),
            e = t.indexOf('.');
          return -1 === e ? 0 : t.length - e - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshRange: function (e) {
          'vertical' === e && this.range.css({ width: '', left: '' }), 'horizontal' === e && this.range.css({ height: '', bottom: '' });
        },
        _refreshValue: function () {
          var t,
            n,
            i,
            o,
            r,
            s = this.options.range,
            a = this.options,
            l = this,
            u = !this._animateOff && a.animate,
            c = {};
          this._hasMultipleValues()
            ? this.handles.each(function (i) {
                (n = ((l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin())) * 100),
                  (c['horizontal' === l.orientation ? 'left' : 'bottom'] = n + '%'),
                  e(this).stop(1, 1)[u ? 'animate' : 'css'](c, a.animate),
                  !0 === l.options.range &&
                    ('horizontal' === l.orientation
                      ? (0 === i && l.range.stop(1, 1)[u ? 'animate' : 'css']({ left: n + '%' }, a.animate), 1 === i && l.range[u ? 'animate' : 'css']({ width: n - t + '%' }, { queue: !1, duration: a.animate }))
                      : (0 === i && l.range.stop(1, 1)[u ? 'animate' : 'css']({ bottom: n + '%' }, a.animate), 1 === i && l.range[u ? 'animate' : 'css']({ height: n - t + '%' }, { queue: !1, duration: a.animate }))),
                  (t = n);
              })
            : ((i = this.value()),
              (o = this._valueMin()),
              (r = this._valueMax()),
              (n = r !== o ? ((i - o) / (r - o)) * 100 : 0),
              (c['horizontal' === this.orientation ? 'left' : 'bottom'] = n + '%'),
              this.handle.stop(1, 1)[u ? 'animate' : 'css'](c, a.animate),
              'min' === s && 'horizontal' === this.orientation && this.range.stop(1, 1)[u ? 'animate' : 'css']({ width: n + '%' }, a.animate),
              'max' === s && 'horizontal' === this.orientation && this.range.stop(1, 1)[u ? 'animate' : 'css']({ width: 100 - n + '%' }, a.animate),
              'min' === s && 'vertical' === this.orientation && this.range.stop(1, 1)[u ? 'animate' : 'css']({ height: n + '%' }, a.animate),
              'max' === s && 'vertical' === this.orientation && this.range.stop(1, 1)[u ? 'animate' : 'css']({ height: 100 - n + '%' }, a.animate));
        },
        _handleEvents: {
          keydown: function (t) {
            var n,
              i,
              o,
              r = e(t.target).data('ui-slider-handle-index');
            switch (t.keyCode) {
              case e.ui.keyCode.HOME:
              case e.ui.keyCode.END:
              case e.ui.keyCode.PAGE_UP:
              case e.ui.keyCode.PAGE_DOWN:
              case e.ui.keyCode.UP:
              case e.ui.keyCode.RIGHT:
              case e.ui.keyCode.DOWN:
              case e.ui.keyCode.LEFT:
                if ((t.preventDefault(), !this._keySliding && ((this._keySliding = !0), this._addClass(e(t.target), null, 'ui-state-active'), !1 === this._start(t, r)))) return;
            }
            switch (((o = this.options.step), (n = i = this._hasMultipleValues() ? this.values(r) : this.value()), t.keyCode)) {
              case e.ui.keyCode.HOME:
                i = this._valueMin();
                break;
              case e.ui.keyCode.END:
                i = this._valueMax();
                break;
              case e.ui.keyCode.PAGE_UP:
                i = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                break;
              case e.ui.keyCode.PAGE_DOWN:
                i = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                break;
              case e.ui.keyCode.UP:
              case e.ui.keyCode.RIGHT:
                if (n === this._valueMax()) return;
                i = this._trimAlignValue(n + o);
                break;
              case e.ui.keyCode.DOWN:
              case e.ui.keyCode.LEFT:
                if (n === this._valueMin()) return;
                i = this._trimAlignValue(n - o);
            }
            this._slide(t, r, i);
          },
          keyup: function (t) {
            var n = e(t.target).data('ui-slider-handle-index');
            this._keySliding && ((this._keySliding = !1), this._stop(t, n), this._change(t, n), this._removeClass(e(t.target), null, 'ui-state-active'));
          },
        },
      });
  }),
  (function (e, t, n) {
    function i(e, t) {
      return typeof e === t;
    }
    function o() {
      var e, t, n, o, r, s, a;
      for (var l in b)
        if (b.hasOwnProperty(l)) {
          if (((e = []), (t = b[l]), t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
          for (o = i(t.fn, 'function') ? t.fn() : t.fn, r = 0; r < e.length; r++)
            (s = e[r]), (a = s.split('.')), 1 === a.length ? (x[a[0]] = o) : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), (x[a[0]][a[1]] = o)), y.push((o ? '' : 'no-') + a.join('-'));
        }
    }
    function r(e) {
      var t = k.className,
        n = x._config.classPrefix || '';
      if ((T && (t = t.baseVal), x._config.enableJSClass)) {
        var i = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
        t = t.replace(i, '$1' + n + 'js$2');
      }
      x._config.enableClasses && ((t += ' ' + n + e.join(' ' + n)), T ? (k.className.baseVal = t) : (k.className = t));
    }
    function s(e) {
      return e
        .replace(/([a-z])-([a-z])/g, function (e, t, n) {
          return t + n.toUpperCase();
        })
        .replace(/^-/, '');
    }
    function a() {
      return 'function' != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0]) : t.createElement.apply(t, arguments);
    }
    function l() {
      var e = t.body;
      return e || ((e = a(T ? 'svg' : 'body')), (e.fake = !0)), e;
    }
    function u(e, n, i, o) {
      var r,
        s,
        u,
        c,
        d = 'modernizr',
        p = a('div'),
        f = l();
      if (parseInt(i, 10)) for (; i--; ) (u = a('div')), (u.id = o ? o[i] : d + (i + 1)), p.appendChild(u);
      return (
        (r = a('style')),
        (r.type = 'text/css'),
        (r.id = 's' + d),
        (f.fake ? f : p).appendChild(r),
        f.appendChild(p),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(t.createTextNode(e)),
        (p.id = d),
        f.fake && ((f.style.background = ''), (f.style.overflow = 'hidden'), (c = k.style.overflow), (k.style.overflow = 'hidden'), k.appendChild(f)),
        (s = n(p, e)),
        f.fake ? (f.parentNode.removeChild(f), (k.style.overflow = c), k.offsetHeight) : p.parentNode.removeChild(p),
        !!s
      );
    }
    function c(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    function d(e, t, n) {
      var o;
      for (var r in e) if (e[r] in t) return !1 === n ? e[r] : ((o = t[e[r]]), i(o, 'function') ? c(o, n || t) : o);
      return !1;
    }
    function p(e, t) {
      return !!~('' + e).indexOf(t);
    }
    function f(e) {
      return e
        .replace(/([A-Z])/g, function (e, t) {
          return '-' + t.toLowerCase();
        })
        .replace(/^ms-/, '-ms-');
    }
    function h(t, n, i) {
      var o;
      if ('getComputedStyle' in e) {
        o = getComputedStyle.call(e, t, n);
        var r = e.console;
        if (null !== o) i && (o = o.getPropertyValue(i));
        else if (r) {
          var s = r.error ? 'error' : 'log';
          r[s].call(r, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
        }
      } else o = !n && t.currentStyle && t.currentStyle[i];
      return o;
    }
    function g(t, i) {
      var o = t.length;
      if ('CSS' in e && 'supports' in e.CSS) {
        for (; o--; ) if (e.CSS.supports(f(t[o]), i)) return !0;
        return !1;
      }
      if ('CSSSupportsRule' in e) {
        for (var r = []; o--; ) r.push('(' + f(t[o]) + ':' + i + ')');
        return (
          (r = r.join(' or ')),
          u('@supports (' + r + ') { #modernizr { position: absolute; } }', function (e) {
            return 'absolute' == h(e, null, 'position');
          })
        );
      }
      return n;
    }
    function v(e, t, o, r) {
      function l() {
        c && (delete D.style, delete D.modElem);
      }
      if (((r = !i(r, 'undefined') && r), !i(o, 'undefined'))) {
        var u = g(e, o);
        if (!i(u, 'undefined')) return u;
      }
      for (var c, d, f, h, v, m = ['modernizr', 'tspan', 'samp']; !D.style && m.length; ) (c = !0), (D.modElem = a(m.shift())), (D.style = D.modElem.style);
      for (f = e.length, d = 0; f > d; d++)
        if (((h = e[d]), (v = D.style[h]), p(h, '-') && (h = s(h)), D.style[h] !== n)) {
          if (r || i(o, 'undefined')) return l(), 'pfx' != t || h;
          try {
            D.style[h] = o;
          } catch (e) {}
          if (D.style[h] != v) return l(), 'pfx' != t || h;
        }
      return l(), !1;
    }
    function m(e, t, n, o, r) {
      var s = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + ' ' + _.join(s + ' ') + s).split(' ');
      return i(t, 'string') || i(t, 'undefined') ? v(a, t, o, r) : ((a = (e + ' ' + E.join(s + ' ') + s).split(' ')), d(a, t, n));
    }
    var y = [],
      b = [],
      w = {
        _version: '3.6.0',
        _config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
        _q: [],
        on: function (e, t) {
          var n = this;
          setTimeout(function () {
            t(n[e]);
          }, 0);
        },
        addTest: function (e, t, n) {
          b.push({ name: e, fn: t, options: n });
        },
        addAsyncTest: function (e) {
          b.push({ name: null, fn: e });
        },
      },
      x = function () {};
    (x.prototype = w), (x = new x());
    var k = t.documentElement,
      T = 'svg' === k.nodeName.toLowerCase(),
      C = (function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t
          ? function (e) {
              var n = t(e);
              return (n && n.matches) || !1;
            }
          : function (t) {
              var n = !1;
              return (
                u('@media ' + t + ' { #modernizr { position: absolute; } }', function (t) {
                  n = 'absolute' == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
                }),
                n
              );
            };
      })();
    (w.mq = C), x.addTest('mediaqueries', C('only all'));
    var S = 'Moz O ms Webkit',
      _ = w._config.usePrefixes ? S.split(' ') : [];
    w._cssomPrefixes = _;
    var A = function (t) {
      var i,
        o = prefixes.length,
        r = e.CSSRule;
      if (void 0 === r) return n;
      if (!t) return !1;
      if (((t = t.replace(/^@/, '')), (i = t.replace(/-/g, '_').toUpperCase() + '_RULE') in r)) return '@' + t;
      for (var s = 0; o > s; s++) {
        var a = prefixes[s];
        if (a.toUpperCase() + '_' + i in r) return '@-' + a.toLowerCase() + '-' + t;
      }
      return !1;
    };
    w.atRule = A;
    var E = w._config.usePrefixes ? S.toLowerCase().split(' ') : [];
    w._domPrefixes = E;
    var $ = { elem: a('modernizr') };
    x._q.push(function () {
      delete $.elem;
    });
    var D = { style: $.elem.style };
    x._q.unshift(function () {
      delete D.style;
    }),
      (w.testAllProps = m);
    var O = (w.prefixed = function (e, t, n) {
      return 0 === e.indexOf('@') ? A(e) : (-1 != e.indexOf('-') && (e = s(e)), t ? m(e, t, n) : m(e, 'pfx'));
    });
    x.addTest('matchmedia', !!O('matchMedia', e)), o(), r(y), delete w.addTest, delete w.addAsyncTest;
    for (var j = 0; j < x._q.length; j++) x._q[j]();
    e.Modernizr = x;
  })(window, document),
  function () {
    function e(e) {
      function t(t, n, i, o, r, s) {
        for (; r >= 0 && s > r; r += e) {
          var a = o ? o[r] : r;
          i = n(i, t[a], a, t);
        }
        return i;
      }
      return function (n, i, o, r) {
        i = b(i, r, 4);
        var s = !_(n) && y.keys(n),
          a = (s || n).length,
          l = e > 0 ? 0 : a - 1;
        return arguments.length < 3 && ((o = n[s ? s[l] : l]), (l += e)), t(n, i, o, s, l, a);
      };
    }
    function t(e) {
      return function (t, n, i) {
        n = w(n, i);
        for (var o = S(t), r = e > 0 ? 0 : o - 1; r >= 0 && o > r; r += e) if (n(t[r], r, t)) return r;
        return -1;
      };
    }
    function n(e, t, n) {
      return function (i, o, r) {
        var s = 0,
          a = S(i);
        if ('number' == typeof r) e > 0 ? (s = r >= 0 ? r : Math.max(r + a, s)) : (a = r >= 0 ? Math.min(r + 1, a) : r + a + 1);
        else if (n && r && a) return (r = n(i, o)), i[r] === o ? r : -1;
        if (o !== o) return (r = t(c.call(i, s, a), y.isNaN)), r >= 0 ? r + s : -1;
        for (r = e > 0 ? s : a - 1; r >= 0 && a > r; r += e) if (i[r] === o) return r;
        return -1;
      };
    }
    function i(e, t) {
      var n = O.length,
        i = e.constructor,
        o = (y.isFunction(i) && i.prototype) || a,
        r = 'constructor';
      for (y.has(e, r) && !y.contains(t, r) && t.push(r); n--; ) (r = O[n]) in e && e[r] !== o[r] && !y.contains(t, r) && t.push(r);
    }
    var o = this,
      r = o._,
      s = Array.prototype,
      a = Object.prototype,
      l = Function.prototype,
      u = s.push,
      c = s.slice,
      d = a.toString,
      p = a.hasOwnProperty,
      f = Array.isArray,
      h = Object.keys,
      g = l.bind,
      v = Object.create,
      m = function () {},
      y = function (e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);
      };
    'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = y), (exports._ = y)) : (o._ = y), (y.VERSION = '1.8.3');
    var b = function (e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, i) {
              return e.call(t, n, i);
            };
          case 3:
            return function (n, i, o) {
              return e.call(t, n, i, o);
            };
          case 4:
            return function (n, i, o, r) {
              return e.call(t, n, i, o, r);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      },
      w = function (e, t, n) {
        return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e);
      };
    y.iteratee = function (e, t) {
      return w(e, t, 1 / 0);
    };
    var x = function (e, t) {
        return function (n) {
          var i = arguments.length;
          if (2 > i || null == n) return n;
          for (var o = 1; i > o; o++)
            for (var r = arguments[o], s = e(r), a = s.length, l = 0; a > l; l++) {
              var u = s[l];
              (t && void 0 !== n[u]) || (n[u] = r[u]);
            }
          return n;
        };
      },
      k = function (e) {
        if (!y.isObject(e)) return {};
        if (v) return v(e);
        m.prototype = e;
        var t = new m();
        return (m.prototype = null), t;
      },
      T = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      },
      C = Math.pow(2, 53) - 1,
      S = T('length'),
      _ = function (e) {
        var t = S(e);
        return 'number' == typeof t && t >= 0 && C >= t;
      };
    (y.each = y.forEach =
      function (e, t, n) {
        t = b(t, n);
        var i, o;
        if (_(e)) for (i = 0, o = e.length; o > i; i++) t(e[i], i, e);
        else {
          var r = y.keys(e);
          for (i = 0, o = r.length; o > i; i++) t(e[r[i]], r[i], e);
        }
        return e;
      }),
      (y.map = y.collect =
        function (e, t, n) {
          t = w(t, n);
          for (var i = !_(e) && y.keys(e), o = (i || e).length, r = Array(o), s = 0; o > s; s++) {
            var a = i ? i[s] : s;
            r[s] = t(e[a], a, e);
          }
          return r;
        }),
      (y.reduce = y.foldl = y.inject = e(1)),
      (y.reduceRight = y.foldr = e(-1)),
      (y.find = y.detect =
        function (e, t, n) {
          var i;
          return (i = _(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)), void 0 !== i && -1 !== i ? e[i] : void 0;
        }),
      (y.filter = y.select =
        function (e, t, n) {
          var i = [];
          return (
            (t = w(t, n)),
            y.each(e, function (e, n, o) {
              t(e, n, o) && i.push(e);
            }),
            i
          );
        }),
      (y.reject = function (e, t, n) {
        return y.filter(e, y.negate(w(t)), n);
      }),
      (y.every = y.all =
        function (e, t, n) {
          t = w(t, n);
          for (var i = !_(e) && y.keys(e), o = (i || e).length, r = 0; o > r; r++) {
            var s = i ? i[r] : r;
            if (!t(e[s], s, e)) return !1;
          }
          return !0;
        }),
      (y.some = y.any =
        function (e, t, n) {
          t = w(t, n);
          for (var i = !_(e) && y.keys(e), o = (i || e).length, r = 0; o > r; r++) {
            var s = i ? i[r] : r;
            if (t(e[s], s, e)) return !0;
          }
          return !1;
        }),
      (y.contains =
        y.includes =
        y.include =
          function (e, t, n, i) {
            return _(e) || (e = y.values(e)), ('number' != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0;
          }),
      (y.invoke = function (e, t) {
        var n = c.call(arguments, 2),
          i = y.isFunction(t);
        return y.map(e, function (e) {
          var o = i ? t : e[t];
          return null == o ? o : o.apply(e, n);
        });
      }),
      (y.pluck = function (e, t) {
        return y.map(e, y.property(t));
      }),
      (y.where = function (e, t) {
        return y.filter(e, y.matcher(t));
      }),
      (y.findWhere = function (e, t) {
        return y.find(e, y.matcher(t));
      }),
      (y.max = function (e, t, n) {
        var i,
          o,
          r = -1 / 0,
          s = -1 / 0;
        if (null == t && null != e) {
          e = _(e) ? e : y.values(e);
          for (var a = 0, l = e.length; l > a; a++) (i = e[a]) > r && (r = i);
        } else
          (t = w(t, n)),
            y.each(e, function (e, n, i) {
              ((o = t(e, n, i)) > s || (o === -1 / 0 && r === -1 / 0)) && ((r = e), (s = o));
            });
        return r;
      }),
      (y.min = function (e, t, n) {
        var i,
          o,
          r = 1 / 0,
          s = 1 / 0;
        if (null == t && null != e) {
          e = _(e) ? e : y.values(e);
          for (var a = 0, l = e.length; l > a; a++) (i = e[a]), r > i && (r = i);
        } else
          (t = w(t, n)),
            y.each(e, function (e, n, i) {
              (o = t(e, n, i)), (s > o || (1 / 0 === o && 1 / 0 === r)) && ((r = e), (s = o));
            });
        return r;
      }),
      (y.shuffle = function (e) {
        for (var t, n = _(e) ? e : y.values(e), i = n.length, o = Array(i), r = 0; i > r; r++) (t = y.random(0, r)), t !== r && (o[r] = o[t]), (o[t] = n[r]);
        return o;
      }),
      (y.sample = function (e, t, n) {
        return null == t || n ? (_(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));
      }),
      (y.sortBy = function (e, t, n) {
        return (
          (t = w(t, n)),
          y.pluck(
            y
              .map(e, function (e, n, i) {
                return { value: e, index: n, criteria: t(e, n, i) };
              })
              .sort(function (e, t) {
                var n = e.criteria,
                  i = t.criteria;
                if (n !== i) {
                  if (n > i || void 0 === n) return 1;
                  if (i > n || void 0 === i) return -1;
                }
                return e.index - t.index;
              }),
            'value'
          )
        );
      });
    var A = function (e) {
      return function (t, n, i) {
        var o = {};
        return (
          (n = w(n, i)),
          y.each(t, function (i, r) {
            var s = n(i, r, t);
            e(o, i, s);
          }),
          o
        );
      };
    };
    (y.groupBy = A(function (e, t, n) {
      y.has(e, n) ? e[n].push(t) : (e[n] = [t]);
    })),
      (y.indexBy = A(function (e, t, n) {
        e[n] = t;
      })),
      (y.countBy = A(function (e, t, n) {
        y.has(e, n) ? e[n]++ : (e[n] = 1);
      })),
      (y.toArray = function (e) {
        return e ? (y.isArray(e) ? c.call(e) : _(e) ? y.map(e, y.identity) : y.values(e)) : [];
      }),
      (y.size = function (e) {
        return null == e ? 0 : _(e) ? e.length : y.keys(e).length;
      }),
      (y.partition = function (e, t, n) {
        t = w(t, n);
        var i = [],
          o = [];
        return (
          y.each(e, function (e, n, r) {
            (t(e, n, r) ? i : o).push(e);
          }),
          [i, o]
        );
      }),
      (y.first =
        y.head =
        y.take =
          function (e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : y.initial(e, e.length - t);
          }),
      (y.initial = function (e, t, n) {
        return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
      }),
      (y.last = function (e, t, n) {
        return null == e ? void 0 : null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t));
      }),
      (y.rest =
        y.tail =
        y.drop =
          function (e, t, n) {
            return c.call(e, null == t || n ? 1 : t);
          }),
      (y.compact = function (e) {
        return y.filter(e, y.identity);
      });
    var E = function (e, t, n, i) {
      for (var o = [], r = 0, s = i || 0, a = S(e); a > s; s++) {
        var l = e[s];
        if (_(l) && (y.isArray(l) || y.isArguments(l))) {
          t || (l = E(l, t, n));
          var u = 0,
            c = l.length;
          for (o.length += c; c > u; ) o[r++] = l[u++];
        } else n || (o[r++] = l);
      }
      return o;
    };
    (y.flatten = function (e, t) {
      return E(e, t, !1);
    }),
      (y.without = function (e) {
        return y.difference(e, c.call(arguments, 1));
      }),
      (y.uniq = y.unique =
        function (e, t, n, i) {
          y.isBoolean(t) || ((i = n), (n = t), (t = !1)), null != n && (n = w(n, i));
          for (var o = [], r = [], s = 0, a = S(e); a > s; s++) {
            var l = e[s],
              u = n ? n(l, s, e) : l;
            t ? ((s && r === u) || o.push(l), (r = u)) : n ? y.contains(r, u) || (r.push(u), o.push(l)) : y.contains(o, l) || o.push(l);
          }
          return o;
        }),
      (y.union = function () {
        return y.uniq(E(arguments, !0, !0));
      }),
      (y.intersection = function (e) {
        for (var t = [], n = arguments.length, i = 0, o = S(e); o > i; i++) {
          var r = e[i];
          if (!y.contains(t, r)) {
            for (var s = 1; n > s && y.contains(arguments[s], r); s++);
            s === n && t.push(r);
          }
        }
        return t;
      }),
      (y.difference = function (e) {
        var t = E(arguments, !0, !0, 1);
        return y.filter(e, function (e) {
          return !y.contains(t, e);
        });
      }),
      (y.zip = function () {
        return y.unzip(arguments);
      }),
      (y.unzip = function (e) {
        for (var t = (e && y.max(e, S).length) || 0, n = Array(t), i = 0; t > i; i++) n[i] = y.pluck(e, i);
        return n;
      }),
      (y.object = function (e, t) {
        for (var n = {}, i = 0, o = S(e); o > i; i++) t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
        return n;
      }),
      (y.findIndex = t(1)),
      (y.findLastIndex = t(-1)),
      (y.sortedIndex = function (e, t, n, i) {
        n = w(n, i, 1);
        for (var o = n(t), r = 0, s = S(e); s > r; ) {
          var a = Math.floor((r + s) / 2);
          n(e[a]) < o ? (r = a + 1) : (s = a);
        }
        return r;
      }),
      (y.indexOf = n(1, y.findIndex, y.sortedIndex)),
      (y.lastIndexOf = n(-1, y.findLastIndex)),
      (y.range = function (e, t, n) {
        null == t && ((t = e || 0), (e = 0)), (n = n || 1);
        for (var i = Math.max(Math.ceil((t - e) / n), 0), o = Array(i), r = 0; i > r; r++, e += n) o[r] = e;
        return o;
      });
    var $ = function (e, t, n, i, o) {
      if (!(i instanceof t)) return e.apply(n, o);
      var r = k(e.prototype),
        s = e.apply(r, o);
      return y.isObject(s) ? s : r;
    };
    (y.bind = function (e, t) {
      if (g && e.bind === g) return g.apply(e, c.call(arguments, 1));
      if (!y.isFunction(e)) throw new TypeError('Bind must be called on a function');
      var n = c.call(arguments, 2),
        i = function () {
          return $(e, i, t, this, n.concat(c.call(arguments)));
        };
      return i;
    }),
      (y.partial = function (e) {
        var t = c.call(arguments, 1),
          n = function () {
            for (var i = 0, o = t.length, r = Array(o), s = 0; o > s; s++) r[s] = t[s] === y ? arguments[i++] : t[s];
            for (; i < arguments.length; ) r.push(arguments[i++]);
            return $(e, n, this, this, r);
          };
        return n;
      }),
      (y.bindAll = function (e) {
        var t,
          n,
          i = arguments.length;
        if (1 >= i) throw new Error('bindAll must be passed function names');
        for (t = 1; i > t; t++) (n = arguments[t]), (e[n] = y.bind(e[n], e));
        return e;
      }),
      (y.memoize = function (e, t) {
        var n = function (i) {
          var o = n.cache,
            r = '' + (t ? t.apply(this, arguments) : i);
          return y.has(o, r) || (o[r] = e.apply(this, arguments)), o[r];
        };
        return (n.cache = {}), n;
      }),
      (y.delay = function (e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, n);
        }, t);
      }),
      (y.defer = y.partial(y.delay, y, 1)),
      (y.throttle = function (e, t, n) {
        var i,
          o,
          r,
          s = null,
          a = 0;
        n || (n = {});
        var l = function () {
          (a = !1 === n.leading ? 0 : y.now()), (s = null), (r = e.apply(i, o)), s || (i = o = null);
        };
        return function () {
          var u = y.now();
          a || !1 !== n.leading || (a = u);
          var c = t - (u - a);
          return (i = this), (o = arguments), 0 >= c || c > t ? (s && (clearTimeout(s), (s = null)), (a = u), (r = e.apply(i, o)), s || (i = o = null)) : s || !1 === n.trailing || (s = setTimeout(l, c)), r;
        };
      }),
      (y.debounce = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = function () {
            var u = y.now() - s;
            t > u && u >= 0 ? (i = setTimeout(l, t - u)) : ((i = null), n || ((a = e.apply(r, o)), i || (r = o = null)));
          };
        return function () {
          (r = this), (o = arguments), (s = y.now());
          var u = n && !i;
          return i || (i = setTimeout(l, t)), u && ((a = e.apply(r, o)), (r = o = null)), a;
        };
      }),
      (y.wrap = function (e, t) {
        return y.partial(t, e);
      }),
      (y.negate = function (e) {
        return function () {
          return !e.apply(this, arguments);
        };
      }),
      (y.compose = function () {
        var e = arguments,
          t = e.length - 1;
        return function () {
          for (var n = t, i = e[t].apply(this, arguments); n--; ) i = e[n].call(this, i);
          return i;
        };
      }),
      (y.after = function (e, t) {
        return function () {
          return --e < 1 ? t.apply(this, arguments) : void 0;
        };
      }),
      (y.before = function (e, t) {
        var n;
        return function () {
          return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n;
        };
      }),
      (y.once = y.partial(y.before, 2));
    var D = !{ toString: null }.propertyIsEnumerable('toString'),
      O = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
    (y.keys = function (e) {
      if (!y.isObject(e)) return [];
      if (h) return h(e);
      var t = [];
      for (var n in e) y.has(e, n) && t.push(n);
      return D && i(e, t), t;
    }),
      (y.allKeys = function (e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return D && i(e, t), t;
      }),
      (y.values = function (e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = e[t[o]];
        return i;
      }),
      (y.mapObject = function (e, t, n) {
        t = w(t, n);
        for (var i, o = y.keys(e), r = o.length, s = {}, a = 0; r > a; a++) (i = o[a]), (s[i] = t(e[i], i, e));
        return s;
      }),
      (y.pairs = function (e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), o = 0; n > o; o++) i[o] = [t[o], e[t[o]]];
        return i;
      }),
      (y.invert = function (e) {
        for (var t = {}, n = y.keys(e), i = 0, o = n.length; o > i; i++) t[e[n[i]]] = n[i];
        return t;
      }),
      (y.functions = y.methods =
        function (e) {
          var t = [];
          for (var n in e) y.isFunction(e[n]) && t.push(n);
          return t.sort();
        }),
      (y.extend = x(y.allKeys)),
      (y.extendOwn = y.assign = x(y.keys)),
      (y.findKey = function (e, t, n) {
        t = w(t, n);
        for (var i, o = y.keys(e), r = 0, s = o.length; s > r; r++) if (((i = o[r]), t(e[i], i, e))) return i;
      }),
      (y.pick = function (e, t, n) {
        var i,
          o,
          r = {},
          s = e;
        if (null == s) return r;
        y.isFunction(t)
          ? ((o = y.allKeys(s)), (i = b(t, n)))
          : ((o = E(arguments, !1, !1, 1)),
            (i = function (e, t, n) {
              return t in n;
            }),
            (s = Object(s)));
        for (var a = 0, l = o.length; l > a; a++) {
          var u = o[a],
            c = s[u];
          i(c, u, s) && (r[u] = c);
        }
        return r;
      }),
      (y.omit = function (e, t, n) {
        if (y.isFunction(t)) t = y.negate(t);
        else {
          var i = y.map(E(arguments, !1, !1, 1), String);
          t = function (e, t) {
            return !y.contains(i, t);
          };
        }
        return y.pick(e, t, n);
      }),
      (y.defaults = x(y.allKeys, !0)),
      (y.create = function (e, t) {
        var n = k(e);
        return t && y.extendOwn(n, t), n;
      }),
      (y.clone = function (e) {
        return y.isObject(e) ? (y.isArray(e) ? e.slice() : y.extend({}, e)) : e;
      }),
      (y.tap = function (e, t) {
        return t(e), e;
      }),
      (y.isMatch = function (e, t) {
        var n = y.keys(t),
          i = n.length;
        if (null == e) return !i;
        for (var o = Object(e), r = 0; i > r; r++) {
          var s = n[r];
          if (t[s] !== o[s] || !(s in o)) return !1;
        }
        return !0;
      });
    var j = function (e, t, n, i) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
      var o = d.call(e);
      if (o !== d.call(t)) return !1;
      switch (o) {
        case '[object RegExp]':
        case '[object String]':
          return '' + e == '' + t;
        case '[object Number]':
          return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case '[object Date]':
        case '[object Boolean]':
          return +e == +t;
      }
      var r = '[object Array]' === o;
      if (!r) {
        if ('object' != typeof e || 'object' != typeof t) return !1;
        var s = e.constructor,
          a = t.constructor;
        if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && 'constructor' in e && 'constructor' in t) return !1;
      }
      (n = n || []), (i = i || []);
      for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
      if ((n.push(e), i.push(t), r)) {
        if ((l = e.length) !== t.length) return !1;
        for (; l--; ) if (!j(e[l], t[l], n, i)) return !1;
      } else {
        var u,
          c = y.keys(e);
        if (((l = c.length), y.keys(t).length !== l)) return !1;
        for (; l--; ) if (((u = c[l]), !y.has(t, u) || !j(e[u], t[u], n, i))) return !1;
      }
      return n.pop(), i.pop(), !0;
    };
    (y.isEqual = function (e, t) {
      return j(e, t);
    }),
      (y.isEmpty = function (e) {
        return null == e || (_(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length);
      }),
      (y.isElement = function (e) {
        return !(!e || 1 !== e.nodeType);
      }),
      (y.isArray =
        f ||
        function (e) {
          return '[object Array]' === d.call(e);
        }),
      (y.isObject = function (e) {
        var t = typeof e;
        return 'function' === t || ('object' === t && !!e);
      }),
      y.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (e) {
        y['is' + e] = function (t) {
          return d.call(t) === '[object ' + e + ']';
        };
      }),
      y.isArguments(arguments) ||
        (y.isArguments = function (e) {
          return y.has(e, 'callee');
        }),
      'function' != typeof /./ &&
        'object' != typeof Int8Array &&
        (y.isFunction = function (e) {
          return 'function' == typeof e || !1;
        }),
      (y.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e));
      }),
      (y.isNaN = function (e) {
        return y.isNumber(e) && e !== +e;
      }),
      (y.isBoolean = function (e) {
        return !0 === e || !1 === e || '[object Boolean]' === d.call(e);
      }),
      (y.isNull = function (e) {
        return null === e;
      }),
      (y.isUndefined = function (e) {
        return void 0 === e;
      }),
      (y.has = function (e, t) {
        return null != e && p.call(e, t);
      }),
      (y.noConflict = function () {
        return (o._ = r), this;
      }),
      (y.identity = function (e) {
        return e;
      }),
      (y.constant = function (e) {
        return function () {
          return e;
        };
      }),
      (y.noop = function () {}),
      (y.property = T),
      (y.propertyOf = function (e) {
        return null == e
          ? function () {}
          : function (t) {
              return e[t];
            };
      }),
      (y.matcher = y.matches =
        function (e) {
          return (
            (e = y.extendOwn({}, e)),
            function (t) {
              return y.isMatch(t, e);
            }
          );
        }),
      (y.times = function (e, t, n) {
        var i = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var o = 0; e > o; o++) i[o] = t(o);
        return i;
      }),
      (y.random = function (e, t) {
        return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
      }),
      (y.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var M = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '`': '&#x60;' },
      N = y.invert(M),
      I = function (e) {
        var t = function (t) {
            return e[t];
          },
          n = '(?:' + y.keys(e).join('|') + ')',
          i = RegExp(n),
          o = RegExp(n, 'g');
        return function (e) {
          return (e = null == e ? '' : '' + e), i.test(e) ? e.replace(o, t) : e;
        };
      };
    (y.escape = I(M)),
      (y.unescape = I(N)),
      (y.result = function (e, t, n) {
        var i = null == e ? void 0 : e[t];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i;
      });
    var L = 0;
    (y.uniqueId = function (e) {
      var t = ++L + '';
      return e ? e + t : t;
    }),
      (y.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var H = /(.)^/,
      P = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
      q = /\\|'|\r|\n|\u2028|\u2029/g,
      W = function (e) {
        return '\\' + P[e];
      };
    (y.template = function (e, t, n) {
      !t && n && (t = n), (t = y.defaults({}, t, y.templateSettings));
      var i = RegExp([(t.escape || H).source, (t.interpolate || H).source, (t.evaluate || H).source].join('|') + '|$', 'g'),
        o = 0,
        r = "__p+='";
      e.replace(i, function (t, n, i, s, a) {
        return (r += e.slice(o, a).replace(q, W)), (o = a + t.length), n ? (r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : i ? (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'") : s && (r += "';\n" + s + "\n__p+='"), t;
      }),
        (r += "';\n"),
        t.variable || (r = 'with(obj||{}){\n' + r + '}\n'),
        (r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + 'return __p;\n');
      try {
        var s = new Function(t.variable || 'obj', '_', r);
      } catch (e) {
        throw ((e.source = r), e);
      }
      var a = function (e) {
          return s.call(this, e, y);
        },
        l = t.variable || 'obj';
      return (a.source = 'function(' + l + '){\n' + r + '}'), a;
    }),
      (y.chain = function (e) {
        var t = y(e);
        return (t._chain = !0), t;
      });
    var F = function (e, t) {
      return e._chain ? y(t).chain() : t;
    };
    (y.mixin = function (e) {
      y.each(y.functions(e), function (t) {
        var n = (y[t] = e[t]);
        y.prototype[t] = function () {
          var e = [this._wrapped];
          return u.apply(e, arguments), F(this, n.apply(y, e));
        };
      });
    }),
      y.mixin(y),
      y.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          var n = this._wrapped;
          return t.apply(n, arguments), ('shift' !== e && 'splice' !== e) || 0 !== n.length || delete n[0], F(this, n);
        };
      }),
      y.each(['concat', 'join', 'slice'], function (e) {
        var t = s[e];
        y.prototype[e] = function () {
          return F(this, t.apply(this._wrapped, arguments));
        };
      }),
      (y.prototype.value = function () {
        return this._wrapped;
      }),
      (y.prototype.valueOf = y.prototype.toJSON = y.prototype.value),
      (y.prototype.toString = function () {
        return '' + this._wrapped;
      }),
      'function' == typeof define &&
        define.amd &&
        define('underscore', [], function () {
          return y;
        });
  }.call(this),
  (function (e) {
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'object' == typeof module && module.exports
      ? (module.exports = function (t, n) {
          return void 0 === n && (n = 'undefined' != typeof window ? require('jquery') : require('jquery')(t)), e(n), n;
        })
      : e(jQuery);
  })(function (e) {
    'use strict';
    var t = e(document),
      n = e(window),
      i = 'selectric',
      o = '.sl',
      r = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'],
      s = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
      a = function (t, n) {
        var i = this;
        (i.element = t),
          (i.$element = e(t)),
          (i.state = { multiple: !!i.$element.attr('multiple'), enabled: !1, opened: !1, currValue: -1, selectedIdx: -1, highlightedIdx: -1 }),
          (i.eventTriggers = { open: i.open, close: i.close, destroy: i.destroy, refresh: i.refresh, init: i.init }),
          i.init(n);
      };
    (a.prototype = {
      utils: {
        isMobile: function () {
          return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
        },
        escapeRegExp: function (e) {
          return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        replaceDiacritics: function (e) {
          for (var t = s.length; t--; ) e = e.toLowerCase().replace(s[t], r[t]);
          return e;
        },
        format: function (e) {
          var t = arguments;
          return ('' + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, n, i) {
            return i && t[1] ? t[1][i] : t[n];
          });
        },
        nextEnabledItem: function (e, t) {
          for (; e[(t = (t + 1) % e.length)].disabled; );
          return t;
        },
        previousEnabledItem: function (e, t) {
          for (; e[(t = (t > 0 ? t : e.length) - 1)].disabled; );
          return t;
        },
        toDash: function (e) {
          return e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        },
        triggerCallback: function (t, n) {
          var o = n.element,
            r = n.options['on' + t],
            s = [o].concat([].slice.call(arguments).slice(1));
          e.isFunction(r) && r.apply(o, s), e(o).trigger(i + '-' + this.toDash(t), s);
        },
        arrayToClassname: function (t) {
          var n = e.grep(t, function (e) {
            return !!e;
          });
          return e.trim(n.join(' '));
        },
      },
      init: function (t) {
        var n = this;
        if (((n.options = e.extend(!0, {}, e.fn[i].defaults, n.options, t)), n.utils.triggerCallback('BeforeInit', n), n.destroy(!0), n.options.disableOnMobile && n.utils.isMobile())) return void (n.disableOnMobile = !0);
        n.classes = n.getClassNames();
        var o = e('<input/>', { class: n.classes.input, readonly: n.utils.isMobile() }),
          r = e('<div/>', { class: n.classes.items, tabindex: -1 }),
          s = e('<div/>', { class: n.classes.scroll }),
          a = e('<div/>', { class: n.classes.prefix, html: n.options.arrowButtonMarkup }),
          l = e('<span/>', { class: 'label' }),
          u = n.$element.wrap('<div/>').parent().append(a.prepend(l), r, o),
          c = e('<div/>', { class: n.classes.hideselect });
        (n.elements = { input: o, items: r, itemsScroll: s, wrapper: a, label: l, outerWrapper: u }),
          n.options.nativeOnMobile &&
            n.utils.isMobile() &&
            ((n.elements.input = void 0),
            c.addClass(n.classes.prefix + '-is-native'),
            n.$element.on('change', function () {
              n.refresh();
            })),
          n.$element.on(n.eventTriggers).wrap(c),
          (n.originalTabindex = n.$element.prop('tabindex')),
          n.$element.prop('tabindex', -1),
          n.populate(),
          n.activate(),
          n.utils.triggerCallback('Init', n);
      },
      activate: function () {
        var e = this,
          t = e.elements.items.closest(':visible').children(':hidden').addClass(e.classes.tempshow),
          n = e.$element.width();
        t.removeClass(e.classes.tempshow),
          e.utils.triggerCallback('BeforeActivate', e),
          e.elements.outerWrapper.prop('class', e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop('class').replace(/\S+/g, e.classes.prefix + '-$&'), e.options.responsive ? e.classes.responsive : ''])),
          e.options.inheritOriginalWidth && n > 0 && e.elements.outerWrapper.width(n),
          e.unbindEvents(),
          e.$element.prop('disabled')
            ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop('disabled', !0))
            : ((e.state.enabled = !0), e.elements.outerWrapper.removeClass(e.classes.disabled), (e.$li = e.elements.items.removeAttr('style').find('li')), e.bindEvents()),
          e.utils.triggerCallback('Activate', e);
      },
      getClassNames: function () {
        var t = this,
          n = t.options.customClass,
          i = {};
        return (
          e.each('Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel'.split(' '), function (e, o) {
            var r = n.prefix + o;
            i[o.toLowerCase()] = n.camelCase ? r : t.utils.toDash(r);
          }),
          (i.prefix = n.prefix),
          i
        );
      },
      setLabel: function () {
        var t = this,
          n = t.options.labelBuilder;
        if (t.state.multiple) {
          var i = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
          i = 0 === i.length ? [0] : i;
          var o = e.map(i, function (n) {
            return e.grep(t.lookupItems, function (e) {
              return e.index === n;
            })[0];
          });
          (o = e.grep(o, function (t) {
            return o.length > 1 || 0 === o.length ? '' !== e.trim(t.value) : t;
          })),
            (o = e.map(o, function (i) {
              return e.isFunction(n) ? n(i) : t.utils.format(n, i);
            })),
            t.options.multiple.maxLabelEntries &&
              (o.length >= t.options.multiple.maxLabelEntries + 1 ? ((o = o.slice(0, t.options.multiple.maxLabelEntries)), o.push(e.isFunction(n) ? n({ text: '...' }) : t.utils.format(n, { text: '...' }))) : o.slice(o.length - 1)),
            t.elements.label.html(o.join(t.options.multiple.separator));
        } else {
          var r = t.lookupItems[t.state.currValue];
          t.elements.label.html(e.isFunction(n) ? n(r) : t.utils.format(n, r));
        }
      },
      populate: function () {
        var t = this,
          n = t.$element.children(),
          i = t.$element.find('option'),
          o = i.filter(':selected'),
          r = i.index(o),
          s = 0,
          a = t.state.multiple ? [] : 0;
        o.length > 1 &&
          t.state.multiple &&
          ((r = []),
          o.each(function () {
            r.push(e(this).index());
          })),
          (t.state.currValue = ~r ? r : a),
          (t.state.selectedIdx = t.state.currValue),
          (t.state.highlightedIdx = t.state.currValue),
          (t.items = []),
          (t.lookupItems = []),
          n.length &&
            (n.each(function (n) {
              var i = e(this);
              if (i.is('optgroup')) {
                var o = { element: i, label: i.prop('label'), groupDisabled: i.prop('disabled'), items: [] };
                i.children().each(function (n) {
                  var i = e(this);
                  (o.items[n] = t.getItemData(s, i, o.groupDisabled || i.prop('disabled'))), (t.lookupItems[s] = o.items[n]), s++;
                }),
                  (t.items[n] = o);
              } else (t.items[n] = t.getItemData(s, i, i.prop('disabled'))), (t.lookupItems[s] = t.items[n]), s++;
            }),
            t.setLabel(),
            t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))));
      },
      getItemData: function (t, n, i) {
        var o = this;
        return { index: t, element: n, value: n.val(), className: n.prop('class'), text: n.html(), slug: e.trim(o.utils.replaceDiacritics(n.html())), alt: n.attr('data-alt'), selected: n.prop('selected'), disabled: i };
      },
      getItemsMarkup: function (t) {
        var n = this,
          i = '<ul>';
        return (
          e.isFunction(n.options.listBuilder) && n.options.listBuilder && (t = n.options.listBuilder(t)),
          e.each(t, function (t, o) {
            void 0 !== o.label
              ? ((i += n.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', n.utils.arrayToClassname([n.classes.group, o.groupDisabled ? 'disabled' : '', o.element.prop('class')]), n.classes.grouplabel, o.element.prop('label'))),
                e.each(o.items, function (e, t) {
                  i += n.getItemMarkup(t.index, t);
                }),
                (i += '</ul>'))
              : (i += n.getItemMarkup(o.index, o));
          }),
          i + '</ul>'
        );
      },
      getItemMarkup: function (t, n) {
        var i = this,
          o = i.options.optionsItemBuilder,
          r = { value: n.value, text: n.text, slug: n.slug, index: n.index };
        return i.utils.format(
          '<li data-index="{1}" class="{2}">{3}</li>',
          t,
          i.utils.arrayToClassname([n.className, t === i.items.length - 1 ? 'last' : '', n.disabled ? 'disabled' : '', n.selected ? 'selected' : '']),
          e.isFunction(o) ? i.utils.format(o(n, this.$element, t), n) : i.utils.format(o, r)
        );
      },
      unbindEvents: function () {
        var e = this;
        e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(o);
      },
      bindEvents: function () {
        var t = this;
        t.elements.outerWrapper.on('mouseenter' + o + ' mouseleave' + o, function (n) {
          e(this).toggleClass(t.classes.hover, 'mouseenter' === n.type), t.options.openOnHover && (clearTimeout(t.closeTimer), 'mouseleave' === n.type ? (t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout)) : t.open());
        }),
          t.elements.wrapper.on('click' + o, function (e) {
            t.state.opened ? t.close() : t.open(e);
          }),
          (t.options.nativeOnMobile && t.utils.isMobile()) ||
            (t.$element.on('focus' + o, function () {
              t.elements.input.focus();
            }),
            t.elements.input
              .prop({ tabindex: t.originalTabindex, disabled: !1 })
              .on('keydown' + o, e.proxy(t.handleKeys, t))
              .on('focusin' + o, function (e) {
                t.elements.outerWrapper.addClass(t.classes.focus),
                  t.elements.input.one('blur', function () {
                    t.elements.input.blur();
                  }),
                  t.options.openOnFocus && !t.state.opened && t.open(e);
              })
              .on('focusout' + o, function () {
                t.elements.outerWrapper.removeClass(t.classes.focus);
              })
              .on('input propertychange', function () {
                var n = t.elements.input.val(),
                  i = new RegExp('^' + t.utils.escapeRegExp(n), 'i');
                clearTimeout(t.resetStr),
                  (t.resetStr = setTimeout(function () {
                    t.elements.input.val('');
                  }, t.options.keySearchTimeout)),
                  n.length &&
                    e.each(t.items, function (e, n) {
                      if (!n.disabled) {
                        if (i.test(n.text) || i.test(n.slug)) return void t.highlight(e);
                        if (n.alt) for (var o = n.alt.split('|'), r = 0; r < o.length && o[r]; r++) if (i.test(o[r].trim())) return void t.highlight(e);
                      }
                    });
              })),
          t.$li.on({
            mousedown: function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            click: function () {
              return t.select(e(this).data('index')), !1;
            },
          });
      },
      handleKeys: function (t) {
        var n = this,
          i = t.which,
          o = n.options.keys,
          r = e.inArray(i, o.previous) > -1,
          s = e.inArray(i, o.next) > -1,
          a = e.inArray(i, o.select) > -1,
          l = e.inArray(i, o.open) > -1,
          u = n.state.highlightedIdx,
          c = (r && 0 === u) || (s && u + 1 === n.items.length),
          d = 0;
        if (((13 !== i && 32 !== i) || t.preventDefault(), r || s)) {
          if (!n.options.allowWrap && c) return;
          r && (d = n.utils.previousEnabledItem(n.lookupItems, u)), s && (d = n.utils.nextEnabledItem(n.lookupItems, u)), n.highlight(d);
        }
        if (a && n.state.opened) return n.select(u), void ((n.state.multiple && n.options.multiple.keepMenuOpen) || n.close());
        l && !n.state.opened && n.open();
      },
      refresh: function () {
        var e = this;
        e.populate(), e.activate(), e.utils.triggerCallback('Refresh', e);
      },
      setOptionsDimensions: function () {
        var e = this,
          t = e.elements.items.closest(':visible').children(':hidden').addClass(e.classes.tempshow),
          n = e.options.maxHeight,
          i = e.elements.items.outerWidth(),
          o = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
        !e.options.expandToItemText || o > i
          ? (e.finalWidth = o)
          : (e.elements.items.css('overflow', 'scroll'), e.elements.outerWrapper.width(9e4), (e.finalWidth = e.elements.items.width()), e.elements.items.css('overflow', ''), e.elements.outerWrapper.width('')),
          e.elements.items.width(e.finalWidth).height() > n && e.elements.items.height(n),
          t.removeClass(e.classes.tempshow);
      },
      isInViewport: function () {
        var e = this;
        if (!0 === e.options.forceRenderAbove) e.elements.outerWrapper.addClass(e.classes.above);
        else if (!0 === e.options.forceRenderBelow) e.elements.outerWrapper.addClass(e.classes.below);
        else {
          var t = n.scrollTop(),
            i = n.height(),
            o = e.elements.outerWrapper.offset().top,
            r = e.elements.outerWrapper.outerHeight(),
            s = o + r + e.itemsHeight <= t + i,
            a = o - e.itemsHeight > t,
            l = !s && a,
            u = !l;
          e.elements.outerWrapper.toggleClass(e.classes.above, l), e.elements.outerWrapper.toggleClass(e.classes.below, u);
        }
      },
      detectItemVisibility: function (t) {
        var n = this,
          i = n.$li.filter('[data-index]');
        n.state.multiple && ((t = e.isArray(t) && 0 === t.length ? 0 : t), (t = e.isArray(t) ? Math.min.apply(Math, t) : t));
        var o = i.eq(t).outerHeight(),
          r = i[t].offsetTop,
          s = n.elements.itemsScroll.scrollTop(),
          a = r + 2 * o;
        n.elements.itemsScroll.scrollTop(a > s + n.itemsHeight ? a - n.itemsHeight : r - o < s ? r - o : s);
      },
      open: function (n) {
        var r = this;
        if (r.options.nativeOnMobile && r.utils.isMobile()) return !1;
        r.utils.triggerCallback('BeforeOpen', r),
          n && (n.preventDefault(), r.options.stopPropagation && n.stopPropagation()),
          r.state.enabled &&
            (r.setOptionsDimensions(),
            e('.' + r.classes.hideselect, '.' + r.classes.open)
              .children()
              [i]('close'),
            (r.state.opened = !0),
            (r.itemsHeight = r.elements.items.outerHeight()),
            (r.itemsInnerHeight = r.elements.items.height()),
            r.elements.outerWrapper.addClass(r.classes.open),
            r.elements.input.val(''),
            n && 'focusin' !== n.type && r.elements.input.focus(),
            setTimeout(function () {
              t.on('click' + o, e.proxy(r.close, r)).on('scroll' + o, e.proxy(r.isInViewport, r));
            }, 1),
            r.isInViewport(),
            r.options.preventWindowScroll &&
              t.on('mousewheel' + o + ' DOMMouseScroll' + o, '.' + r.classes.scroll, function (t) {
                var n = t.originalEvent,
                  i = e(this).scrollTop(),
                  o = 0;
                'detail' in n && (o = -1 * n.detail),
                  'wheelDelta' in n && (o = n.wheelDelta),
                  'wheelDeltaY' in n && (o = n.wheelDeltaY),
                  'deltaY' in n && (o = -1 * n.deltaY),
                  ((i === this.scrollHeight - r.itemsInnerHeight && o < 0) || (0 === i && o > 0)) && t.preventDefault();
              }),
            r.detectItemVisibility(r.state.selectedIdx),
            r.highlight(r.state.multiple ? -1 : r.state.selectedIdx),
            r.utils.triggerCallback('Open', r));
      },
      close: function () {
        var e = this;
        e.utils.triggerCallback('BeforeClose', e), t.off(o), e.elements.outerWrapper.removeClass(e.classes.open), (e.state.opened = !1), e.utils.triggerCallback('Close', e);
      },
      change: function () {
        var t = this;
        t.utils.triggerCallback('BeforeChange', t),
          t.state.multiple
            ? (e.each(t.lookupItems, function (e) {
                (t.lookupItems[e].selected = !1), t.$element.find('option').prop('selected', !1);
              }),
              e.each(t.state.selectedIdx, function (e, n) {
                (t.lookupItems[n].selected = !0), t.$element.find('option').eq(n).prop('selected', !0);
              }),
              (t.state.currValue = t.state.selectedIdx),
              t.setLabel(),
              t.utils.triggerCallback('Change', t))
            : t.state.currValue !== t.state.selectedIdx && (t.$element.prop('selectedIndex', (t.state.currValue = t.state.selectedIdx)).data('value', t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback('Change', t));
      },
      highlight: function (e) {
        var t = this,
          n = t.$li.filter('[data-index]').removeClass('highlighted');
        t.utils.triggerCallback('BeforeHighlight', t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (n.eq((t.state.highlightedIdx = e)).addClass('highlighted'), t.detectItemVisibility(e), t.utils.triggerCallback('Highlight', t));
      },
      select: function (t) {
        var n = this,
          i = n.$li.filter('[data-index]');
        if ((n.utils.triggerCallback('BeforeSelect', n, t), void 0 !== t && -1 !== t && !n.lookupItems[t].disabled)) {
          if (n.state.multiple) {
            n.state.selectedIdx = e.isArray(n.state.selectedIdx) ? n.state.selectedIdx : [n.state.selectedIdx];
            var o = e.inArray(t, n.state.selectedIdx);
            -1 !== o ? n.state.selectedIdx.splice(o, 1) : n.state.selectedIdx.push(t),
              i
                .removeClass('selected')
                .filter(function (t) {
                  return -1 !== e.inArray(t, n.state.selectedIdx);
                })
                .addClass('selected');
          } else
            i.removeClass('selected')
              .eq((n.state.selectedIdx = t))
              .addClass('selected');
          (n.state.multiple && n.options.multiple.keepMenuOpen) || n.close(), n.change(), n.utils.triggerCallback('Select', n, t);
        }
      },
      destroy: function (e) {
        var t = this;
        t.state &&
          t.state.enabled &&
          (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),
          e || t.$element.removeData(i).removeData('value'),
          t.$element.prop('tabindex', t.originalTabindex).off(o).off(t.eventTriggers).unwrap().unwrap(),
          (t.state.enabled = !1));
      },
    }),
      (e.fn[i] = function (t) {
        return this.each(function () {
          var n = e.data(this, i);
          n && !n.disableOnMobile ? ('string' == typeof t && n[t] ? n[t]() : n.init(t)) : e.data(this, i, new a(this, t));
        });
      }),
      (e.fn[i].defaults = {
        onChange: function (t) {
          e(t).change();
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button"></b>',
        disableOnMobile: !1,
        nativeOnMobile: !0,
        openOnFocus: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        forceRenderAbove: !1,
        forceRenderBelow: !1,
        stopPropagation: !0,
        optionsItemBuilder: '{text}',
        labelBuilder: '{text}',
        listBuilder: !1,
        keys: { previous: [37, 38], next: [39, 40], select: [9, 13, 27], open: [13, 32, 37, 38, 39, 40], close: [9, 27] },
        customClass: { prefix: i, camelCase: !1 },
        multiple: { separator: ', ', keepMenuOpen: !0, maxLabelEntries: !1 },
      });
  }),
  (function (e) {
    'use strict';
    'function' == typeof define && define.amd ? define(['jquery'], e) : 'undefined' != typeof exports ? (module.exports = e(require('jquery'))) : e(jQuery);
  })(function (e) {
    'use strict';
    var t = window.Slick || {};
    (t = (function () {
      function t(t, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(t),
          appendDots: e(t),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function (t, n) {
            return e('<button type="button" data-role="none" role="button" tabindex="0" />');
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = 'hidden'),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(t)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = 'visibilitychange'),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(t).data('slick') || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden ? ((r.hidden = 'mozHidden'), (r.visibilityChange = 'mozvisibilitychange')) : void 0 !== document.webkitHidden && ((r.hidden = 'webkitHidden'), (r.visibilityChange = 'webkitvisibilitychange')),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = n++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      }
      var n = 0;
      return t;
    })()),
      (t.prototype.activateADA = function () {
        this.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ tabindex: '0' });
      }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, n, i) {
          var o = this;
          if ('boolean' == typeof n) (i = n), (n = null);
          else if (0 > n || n >= o.slideCount) return !1;
          o.unload(),
            'number' == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                ? e(t).insertBefore(o.$slides.eq(n))
                : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr('data-slick-index', t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n)
              : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n)
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)), !1 === o.options.vertical ? ((i[o.animType] = 'translate(' + e + 'px, 0px)'), o.$slideTrack.css(i)) : ((i[o.animType] = 'translate(0px,' + e + 'px)'), o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical ? (i[o.animType] = 'translate3d(' + t + 'px, 0px, 0px)') : (i[o.animType] = 'translate3d(0px,' + t + 'px, 0px)'),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this,
          n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
      }),
      (t.prototype.asNavFor = function (t) {
        var n = this,
          i = n.getNavTarget();
        null !== i &&
          'object' == typeof i &&
          i.each(function () {
            var n = e(this).slick('getSlick');
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade ? (n[t.transitionType] = t.transformType + ' ' + t.options.speed + 'ms ' + t.options.cssEase) : (n[t.transitionType] = 'opacity ' + t.options.speed + 'ms ' + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? (e.direction = 0) : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass('slick-arrow')),
          (t.$nextArrow = e(t.options.nextArrow).addClass('slick-arrow')),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              t.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite && t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
            : t.$prevArrow.add(t.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', tabindex: '-1' }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
          for (i.$slider.addClass('slick-dotted'), n = e('<ul />').addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e('<li />').append(i.options.customPaging.call(this, i, t)));
          (i.$dots = n.appendTo(i.options.appendDots)), i.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider.children(t.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr('data-slick-index', t)
              .data('originalStyling', e(n).attr('style') || '');
          }),
          t.$slider.addClass('slick-slider'),
          (t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
          t.$slideTrack.css('opacity', 0),
          (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1),
          e('img[data-lazy]', t.$slider).not('[src]').addClass('slick-loading'),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0),
          !0 === t.options.draggable && t.$list.addClass('draggable');
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (((i = document.createDocumentFragment()), (r = a.$slider.children()), a.options.rows > 1)) {
          for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
            var l = document.createElement('div');
            for (t = 0; t < a.options.rows; t++) {
              var u = document.createElement('div');
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var c = e * s + (t * a.options.slidesPerRow + n);
                r.get(c) && u.appendChild(r.get(c));
              }
              l.appendChild(u);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({ width: 100 / a.options.slidesPerRow + '%', display: 'inline-block' });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          u = window.innerWidth || e(window).width();
        if (('window' === s.respondTo ? (r = u) : 'slider' === s.respondTo ? (r = l) : 'min' === s.respondTo && (r = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive)) {
          o = null;
          for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o), 'unslick' === s.breakpointSettings[o] ? s.unslick(o) : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), (a = o))
              : ((s.activeBreakpoint = o), 'unslick' === s.breakpointSettings[o] ? s.unslick(o) : ((s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o])), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), (a = o))
            : null !== s.activeBreakpoint && ((s.activeBreakpoint = null), (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), (a = o)),
            t || !1 === a || s.$slider.trigger('breakpoint', [s, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i,
          o,
          r,
          s = this,
          a = e(t.currentTarget);
        switch ((a.is('a') && t.preventDefault(), a.is('li') || (a = a.closest('li')), (r = s.slideCount % s.options.slidesToScroll != 0), (i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll), t.data.message)) {
          case 'previous':
            (o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
            break;
          case 'next':
            (o = 0 === i ? s.options.slidesToScroll : i), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
            break;
          case 'index':
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger('focus');
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n;
        if (((t = this.getNavigableIndexes()), (n = 0), e > t[t.length - 1])) e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && e('li', t.$dots).off('click.slick', t.changeSlide).off('mouseenter.slick', e.proxy(t.interrupt, t, !0)).off('mouseleave.slick', e.proxy(t.interrupt, t, !1)),
          t.$slider.off('focus.slick blur.slick'),
          !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off('click.slick', t.changeSlide), t.$nextArrow && t.$nextArrow.off('click.slick', t.changeSlide)),
          t.$list.off('touchstart.slick mousedown.slick', t.swipeHandler),
          t.$list.off('touchmove.slick mousemove.slick', t.swipeHandler),
          t.$list.off('touchend.slick mouseup.slick', t.swipeHandler),
          t.$list.off('touchcancel.slick mouseleave.slick', t.swipeHandler),
          t.$list.off('click.slick', t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility && t.$list.off('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off('click.slick', t.selectHandler),
          e(window).off('orientationchange.slick.slick-' + t.instanceUid, t.orientationChange),
          e(window).off('resize.slick.slick-' + t.instanceUid, t.resize),
          e('[draggable!=true]', t.$slideTrack).off('dragstart', t.preventDefault),
          e(window).off('load.slick.slick-' + t.instanceUid, t.setPosition),
          e(document).off('ready.slick.slick-' + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.off('mouseleave.slick', e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()), e.removeAttr('style'), t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e('.slick-cloned', n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', ''), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function () {
                e(this).attr('style', e(this).data('originalStyling'));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass('slick-slider'),
          n.$slider.removeClass('slick-initialized'),
          n.$slider.removeClass('slick-dotted'),
          (n.unslicked = !0),
          t || n.$slider.trigger('destroy', [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ''), !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (n) {
          n.stopImmediatePropagation();
          var i = e(this);
          setTimeout(function () {
            t.options.pauseOnFocus && ((t.focussed = i.is(':focus')), t.autoPlay());
          }, 0);
        });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          n,
          i,
          o = this,
          r = 0;
        return (
          (o.slideOffset = 0),
          (n = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow && ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1), (r = n * o.options.slidesToShow * -1)),
              o.slideCount % o.options.slidesToScroll != 0 &&
                e + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (e > o.slideCount
                  ? ((o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1), (r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1))
                  : ((o.slideOffset = (o.slideCount % o.options.slidesToScroll) * o.slideWidth * -1), (r = (o.slideCount % o.options.slidesToScroll) * n * -1))))
            : e + o.options.slidesToShow > o.slideCount && ((o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth), (r = (e + o.options.slidesToShow - o.slideCount) * n)),
          o.slideCount <= o.options.slidesToShow && ((o.slideOffset = 0), (r = 0)),
          !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth)
            : !0 === o.options.centerMode && ((o.slideOffset = 0), (o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r),
          !0 === o.options.variableWidth &&
            ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow)),
            (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
            !0 === o.options.centerMode &&
              ((i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children('.slick-slide').eq(e) : o.$slideTrack.children('.slick-slide').eq(e + o.options.slidesToShow + 1)),
              (t = !0 === o.options.rtl ? (i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
              (t += (o.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (!1 === t.options.infinite ? (e = t.slideCount) : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (e = 2 * t.slideCount)); e > n; )
          o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          n,
          i = this;
        return (
          (n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find('.slick-slide').each(function (o, r) {
                return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft ? ((t = r), !1) : void 0;
              }),
              Math.abs(e(t).attr('data-slick-index') - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide({ data: { message: 'index', index: parseInt(e) } }, t);
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass('slick-initialized') ||
          (e(n.$slider).addClass('slick-initialized'), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()),
          t && n.$slider.trigger('init', [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find('.slick-cloned')).attr({ 'aria-hidden': 'true', tabindex: '-1' }).find('a, input, button, select').attr({ tabindex: '-1' }),
          t.$slideTrack.attr('role', 'listbox'),
          t.$slides.not(t.$slideTrack.find('.slick-cloned')).each(function (n) {
            e(this).attr({ role: 'option', 'aria-describedby': 'slick-slide' + t.instanceUid + n });
          }),
          null !== t.$dots &&
            t.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function (n) {
                e(this).attr({ role: 'presentation', 'aria-selected': 'false', 'aria-controls': 'navigation' + t.instanceUid + n, id: 'slick-slide' + t.instanceUid + n });
              })
              .first()
              .attr('aria-selected', 'true')
              .end()
              .find('button')
              .attr('role', 'button')
              .end()
              .closest('div')
              .attr('role', 'toolbar'),
          t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, e.changeSlide), e.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, e.changeSlide));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e('li', t.$dots).on('click.slick', { message: 'index' }, t.changeSlide),
          !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e('li', t.$dots).on('mouseenter.slick', e.proxy(t.interrupt, t, !0)).on('mouseleave.slick', e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on('mouseenter.slick', e.proxy(t.interrupt, t, !0)), t.$list.on('mouseleave.slick', e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, t.swipeHandler),
          t.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, t.swipeHandler),
          t.$list.on('touchend.slick mouseup.slick', { action: 'end' }, t.swipeHandler),
          t.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, t.swipeHandler),
          t.$list.on('click.slick', t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility && t.$list.on('keydown.slick', t.keyHandler),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler),
          e(window).on('orientationchange.slick.slick-' + t.instanceUid, e.proxy(t.orientationChange, t)),
          e(window).on('resize.slick.slick-' + t.instanceUid, e.proxy(t.resize, t)),
          e('[draggable!=true]', t.$slideTrack).on('dragstart', t.preventDefault),
          e(window).on('load.slick.slick-' + t.instanceUid, t.setPosition),
          e(document).on('ready.slick.slick-' + t.instanceUid, t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({ data: { message: !0 === t.options.rtl ? 'next' : 'previous' } })
            : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? 'previous' : 'next' } }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e('img[data-lazy]', t).each(function () {
            var t = e(this),
              n = e(this).attr('data-lazy'),
              i = document.createElement('img');
            (i.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                t.attr('src', n).animate({ opacity: 1 }, 200, function () {
                  t.removeAttr('data-lazy').removeClass('slick-loading');
                }),
                  s.$slider.trigger('lazyLoaded', [s, t, n]);
              });
            }),
              (i.onerror = function () {
                t.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), s.$slider.trigger('lazyLoadError', [s, t, n]);
              }),
              (i.src = n);
          });
        }
        var n,
          i,
          o,
          r,
          s = this;
        !0 === s.options.centerMode
          ? !0 === s.options.infinite
            ? ((o = s.currentSlide + (s.options.slidesToShow / 2 + 1)), (r = o + s.options.slidesToShow + 2))
            : ((o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))), (r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
          : ((o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide), (r = Math.ceil(o + s.options.slidesToShow)), !0 === s.options.fade && (o > 0 && o--, r <= s.slideCount && r++)),
          (n = s.$slider.find('.slick-slide').slice(o, r)),
          t(n),
          s.slideCount <= s.options.slidesToShow
            ? ((i = s.$slider.find('.slick-slide')), t(i))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? ((i = s.$slider.find('.slick-cloned').slice(0, s.options.slidesToShow)), t(i))
            : 0 === s.currentSlide && ((i = s.$slider.find('.slick-cloned').slice(-1 * s.options.slidesToShow)), t(i));
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass('slick-loading'), e.initUI(), 'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: 'next' } });
        }),
      (t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          var e = this;
          e.autoPlayClear(), (e.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger('afterChange', [t, e]), (t.animating = !1), t.setPosition(), (t.swipeLeft = null), t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA());
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: 'previous' } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n,
          i,
          o,
          r = this,
          s = e('img[data-lazy]', r.$slider);
        s.length
          ? ((n = s.first()),
            (i = n.attr('data-lazy')),
            (o = document.createElement('img')),
            (o.onload = function () {
              n.attr('src', i).removeAttr('data-lazy').removeClass('slick-loading'), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger('lazyLoaded', [r, n, i]), r.progressiveLazyLoad();
            }),
            (o.onerror = function () {
              3 > t
                ? setTimeout(function () {
                    r.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'), r.$slider.trigger('lazyLoadError', [r, n, i]), r.progressiveLazyLoad());
            }),
            (o.src = i))
          : r.$slider.trigger('allImagesLoaded', [r]);
      }),
      (t.prototype.refresh = function (t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: 'index', index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ('array' === e.type(r) && r.length) {
          o.respondTo = o.options.respondTo || 'window';
          for (t in r)
            if (((i = o.breakpoints.length - 1), (n = r[t].breakpoint), r.hasOwnProperty(t))) {
              for (; i >= 0; ) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack.children(t.options.slide).addClass('slick-slide')),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on('click.slick', t.selectHandler),
          t.setSlideClasses('number' == typeof t.currentSlide ? t.currentSlide : 0),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger('reInit', [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          return (
            'boolean' == typeof e ? ((t = e), (e = !0 === t ? 0 : i.slideCount - 1)) : (e = !0 === t ? --e : e),
            !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) &&
              (i.unload(),
              !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
              (i.$slides = i.$slideTrack.children(this.options.slide)),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.append(i.$slides),
              (i.$slidesCache = i.$slides),
              void i.reinit())
          );
        }),
      (t.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = 'left' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (n = 'top' == i.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}), !1 === i.cssTransitions ? ((o[i.animType] = 'translate(' + t + ', ' + n + ')'), i.$slideTrack.css(o)) : ((o[i.animType] = 'translate3d(' + t + ', ' + n + ', 0px)'), i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode && e.$list.css({ padding: '0px ' + e.options.centerPadding })
          : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + ' 0px' })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children('.slick-slide').length)))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          n = this;
        n.$slides.each(function (i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl ? e(o).css({ position: 'relative', right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: 'relative', left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 });
        }),
          n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css('height', t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            n,
            i,
            o,
            r,
            s = this,
            a = !1;
          if (
            ('object' === e.type(arguments[0])
              ? ((i = arguments[0]), (a = arguments[1]), (r = 'multiple'))
              : 'string' === e.type(arguments[0]) && ((i = arguments[0]), (o = arguments[1]), (a = arguments[2]), 'responsive' === arguments[0] && 'array' === e.type(arguments[1]) ? (r = 'responsive') : void 0 !== arguments[1] && (r = 'single')),
            'single' === r)
          )
            s.options[i] = o;
          else if ('multiple' === r)
            e.each(i, function (e, t) {
              s.options[e] = t;
            });
          else if ('responsive' === r)
            for (n in o)
              if ('array' !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
              else {
                for (t = s.options.responsive.length - 1; t >= 0; ) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                s.options.responsive.push(o[n]);
              }
          a && (s.unload(), s.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger('setPosition', [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'),
          (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0),
          e.options.fade && ('number' == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform && ((e.animType = 'OTransform'), (e.transformType = '-o-transform'), (e.transitionType = 'OTransition'), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.MozTransform && ((e.animType = 'MozTransform'), (e.transformType = '-moz-transform'), (e.transitionType = 'MozTransition'), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
          void 0 !== t.webkitTransform && ((e.animType = 'webkitTransform'), (e.transformType = '-webkit-transform'), (e.transitionType = 'webkitTransition'), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.msTransform && ((e.animType = 'msTransform'), (e.transformType = '-ms-transform'), (e.transitionType = 'msTransition'), void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform && !1 !== e.animType && ((e.animType = 'transform'), (e.transformType = 'transform'), (e.transitionType = 'transition')),
          (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o,
          r = this;
        (n = r.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true')),
          r.$slides.eq(e).addClass('slick-current'),
          !0 === r.options.centerMode
            ? ((t = Math.floor(r.options.slidesToShow / 2)),
              !0 === r.options.infinite &&
                (e >= t && e <= r.slideCount - 1 - t
                  ? r.$slides
                      .slice(e - t, e + t + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')
                  : ((i = r.options.slidesToShow + e),
                    n
                      .slice(i - t + 1, i + t + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')),
                0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass('slick-center') : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass('slick-center')),
              r.$slides.eq(e).addClass('slick-center'))
            : e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : n.length <= r.options.slidesToShow
            ? n.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')),
          'ondemand' === r.options.lazyLoad && r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          n,
          i,
          o = this;
        if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((n = null), o.slideCount > o.options.slidesToShow))) {
          for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1)
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass('slick-cloned');
          for (t = 0; i > t; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass('slick-cloned');
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              e(this).attr('id', '');
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is('.slick-slide') ? e(t.target) : e(t.target).parents('.slick-slide'),
          o = parseInt(i.attr('data-slick-index'));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          u = this;
        return (
          (t = t || !1),
          (!0 === u.animating && !0 === u.options.waitForAnimate) || (!0 === u.options.fade && u.currentSlide === e) || u.slideCount <= u.options.slidesToShow
            ? void 0
            : (!1 === t && u.asNavFor(e),
              (i = e),
              (l = u.getLeft(i)),
              (s = u.getLeft(u.currentSlide)),
              (u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft),
              !1 === u.options.infinite && !1 === u.options.centerMode && (0 > e || e > u.getDotCount() * u.options.slidesToScroll)
                ? void (
                    !1 === u.options.fade &&
                    ((i = u.currentSlide),
                    !0 !== n
                      ? u.animateSlide(s, function () {
                          u.postSlide(i);
                        })
                      : u.postSlide(i))
                  )
                : !1 === u.options.infinite && !0 === u.options.centerMode && (0 > e || e > u.slideCount - u.options.slidesToScroll)
                ? void (
                    !1 === u.options.fade &&
                    ((i = u.currentSlide),
                    !0 !== n
                      ? u.animateSlide(s, function () {
                          u.postSlide(i);
                        })
                      : u.postSlide(i))
                  )
                : (u.options.autoplay && clearInterval(u.autoPlayTimer),
                  (o =
                    0 > i ? (u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - (u.slideCount % u.options.slidesToScroll) : u.slideCount + i) : i >= u.slideCount ? (u.slideCount % u.options.slidesToScroll != 0 ? 0 : i - u.slideCount) : i),
                  (u.animating = !0),
                  u.$slider.trigger('beforeChange', [u, u.currentSlide, o]),
                  (r = u.currentSlide),
                  (u.currentSlide = o),
                  u.setSlideClasses(u.currentSlide),
                  u.options.asNavFor && ((a = u.getNavTarget()), (a = a.slick('getSlick')), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)),
                  u.updateDots(),
                  u.updateArrows(),
                  !0 === u.options.fade
                    ? (!0 !== n
                        ? (u.fadeSlideOut(r),
                          u.fadeSlide(o, function () {
                            u.postSlide(o);
                          }))
                        : u.postSlide(o),
                      void u.animateHeight())
                    : void (!0 !== n
                        ? u.animateSlide(l, function () {
                            u.postSlide(o);
                          })
                        : u.postSlide(o))))
        );
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass('slick-loading');
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)),
          0 > i && (i = 360 - Math.abs(i)),
          45 >= i && i >= 0
            ? !1 === o.options.rtl
              ? 'left'
              : 'right'
            : 360 >= i && i >= 315
            ? !1 === o.options.rtl
              ? 'left'
              : 'right'
            : i >= 135 && 225 >= i
            ? !1 === o.options.rtl
              ? 'right'
              : 'left'
            : !0 === o.options.verticalSwiping
            ? i >= 35 && 135 >= i
              ? 'down'
              : 'up'
            : 'vertical'
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.interrupted = !1), (i.shouldClick = !(i.touchObject.swipeLength > 10)), void 0 === i.touchObject.curX)) return !1;
        if ((!0 === i.touchObject.edgeHit && i.$slider.trigger('edge', [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
          switch ((n = i.swipeDirection())) {
            case 'left':
            case 'down':
              (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
              break;
            case 'right':
            case 'up':
              (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
          }
          'vertical' != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger('swipe', [i, n]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || ('ontouchend' in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))))
          switch (
            ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              t.swipeStart(e);
              break;
            case 'move':
              t.swipeMove(e);
              break;
            case 'end':
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          n,
          i,
          o,
          r,
          s = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!s.dragging || (r && 1 !== r.length)) &&
            ((t = s.getLeft(s.currentSlide)),
            (s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2)))),
            !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
            (n = s.swipeDirection()),
            'vertical' !== n
              ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(),
                (o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1)),
                !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
                (i = s.touchObject.swipeLength),
                (s.touchObject.edgeHit = !1),
                !1 === s.options.infinite && ((0 === s.currentSlide && 'right' === n) || (s.currentSlide >= s.getDotCount() && 'left' === n)) && ((i = s.touchObject.swipeLength * s.options.edgeFriction), (s.touchObject.edgeHit = !0)),
                !1 === s.options.vertical ? (s.swipeLeft = t + i * o) : (s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o),
                !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o),
                !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? ((s.swipeLeft = null), !1) : void s.setCSS(s.swipeLeft)))
              : void 0)
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          n = this;
        return (
          (n.interrupted = !0),
          1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow
            ? ((n.touchObject = {}), !1)
            : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
              (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
              (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
              void (n.dragging = !0))
        );
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e('.slick-cloned', t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
          t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
          t.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger('unslick', [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            0 === e.currentSlide
              ? (e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
              ? (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'), e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true'),
          e.$dots
            .find('li')
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass('slick-active')
            .attr('aria-hidden', 'false'));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; s > e; e++) if (('object' == typeof o || void 0 === o ? (i[e].slick = new t(i[e], o)) : (n = i[e].slick[o].apply(i[e].slick, r)), void 0 !== n)) return n;
        return i;
      });
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : e('object' == typeof exports ? require('jquery') : jQuery);
  })(function (e) {
    var t,
      n = navigator.userAgent,
      i = /iphone/i.test(n),
      o = /chrome/i.test(n),
      r = /android/i.test(n);
    (e.mask = { definitions: { 9: '[0-9]', a: '[A-Za-z]', '*': '[A-Za-z0-9]' }, autoclear: !0, dataName: 'rawMaskFn', placeholder: '_' }),
      e.fn.extend({
        caret: function (e, t) {
          var n;
          if (0 !== this.length && !this.is(':hidden') && this.get(0) === document.activeElement)
            return 'number' == typeof e
              ? ((t = 'number' == typeof t ? t : e),
                this.each(function () {
                  this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd('character', t), n.moveStart('character', e), n.select());
                }))
              : (this[0].setSelectionRange
                  ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                  : document.selection && document.selection.createRange && ((n = document.selection.createRange()), (e = 0 - n.duplicate().moveStart('character', -1e5)), (t = e + n.text.length)),
                { begin: e, end: t });
        },
        unmask: function () {
          return this.trigger('unmask');
        },
        mask: function (n, s) {
          var a, l, u, c, d, p, f;
          if (!n && 0 < this.length) {
            var h = e(this[0]).data(e.mask.dataName);
            return h ? h() : void 0;
          }
          return (
            (s = e.extend({ autoclear: e.mask.autoclear, placeholder: e.mask.placeholder, completed: null }, s)),
            (a = e.mask.definitions),
            (l = []),
            (u = p = n.length),
            (c = null),
            (n = String(n)),
            e.each(n.split(''), function (e, t) {
              '?' == t ? (p--, (u = e)) : a[t] ? (l.push(new RegExp(a[t])), null === c && (c = l.length - 1), e < u && (d = l.length - 1)) : l.push(null);
            }),
            this.trigger('unmask').each(function () {
              function h() {
                if (s.completed) {
                  for (var e = c; e <= d; e++) if (l[e] && T[e] === g(e)) return;
                  s.completed.call(k);
                }
              }
              function g(e) {
                return e < s.placeholder.length ? s.placeholder.charAt(e) : s.placeholder.charAt(0);
              }
              function v(e) {
                for (; ++e < p && !l[e]; );
                return e;
              }
              function m(e, t) {
                var n, i;
                if (!(e < 0)) {
                  for (n = e, i = v(t); n < p; n++)
                    if (l[n]) {
                      if (!(i < p && l[n].test(T[i]))) break;
                      (T[n] = T[i]), (T[i] = g(i)), (i = v(i));
                    }
                  w(), k.caret(Math.max(c, e));
                }
              }
              function y(e) {
                x(), k.val() != S && k.change();
              }
              function b(e, t) {
                var n;
                for (n = e; n < t && n < p; n++) l[n] && (T[n] = g(n));
              }
              function w() {
                k.val(T.join(''));
              }
              function x(e) {
                var t,
                  n,
                  i,
                  o = k.val(),
                  r = -1;
                for (i = t = 0; t < p; t++)
                  if (l[t]) {
                    for (T[t] = g(t); i++ < o.length; )
                      if (((n = o.charAt(i - 1)), l[t].test(n))) {
                        (T[t] = n), (r = t);
                        break;
                      }
                    if (i > o.length) {
                      b(t + 1, p);
                      break;
                    }
                  } else T[t] === o.charAt(i) && i++, t < u && (r = t);
                return e ? w() : r + 1 < u ? (s.autoclear || T.join('') === C ? (k.val() && k.val(''), b(0, p)) : w()) : (w(), k.val(k.val().substring(0, r + 1))), u ? t : c;
              }
              var k = e(this),
                T = e.map(n.split(''), function (e, t) {
                  if ('?' != e) return a[e] ? g(t) : e;
                }),
                C = T.join(''),
                S = k.val();
              k.data(e.mask.dataName, function () {
                return e
                  .map(T, function (e, t) {
                    return l[t] && e != g(t) ? e : null;
                  })
                  .join('');
              }),
                k
                  .one('unmask', function () {
                    k.off('.mask').removeData(e.mask.dataName);
                  })
                  .on('focus.mask', function () {
                    var e;
                    k.prop('readonly') ||
                      (clearTimeout(t),
                      (S = k.val()),
                      (e = x()),
                      (t = setTimeout(function () {
                        k.get(0) === document.activeElement && (w(), e == n.replace('?', '').length ? k.caret(0, e) : k.caret(e));
                      }, 10)));
                  })
                  .on('blur.mask', y)
                  .on('keydown.mask', function (e) {
                    if (!k.prop('readonly')) {
                      var t,
                        n,
                        o,
                        r = e.which || e.keyCode;
                      (f = k.val()),
                        8 === r || 46 === r || (i && 127 === r)
                          ? ((n = (t = k.caret()).begin),
                            (o = t.end) - n == 0 &&
                              ((n =
                                46 !== r
                                  ? (function (e) {
                                      for (; 0 <= --e && !l[e]; );
                                      return e;
                                    })(n)
                                  : (o = v(n - 1))),
                              (o = 46 === r ? v(o) : o)),
                            b(n, o),
                            m(n, o - 1),
                            e.preventDefault())
                          : 13 === r
                          ? y.call(this, e)
                          : 27 === r && (k.val(S), k.caret(0, x()), e.preventDefault());
                    }
                  })
                  .on('keypress.mask', function (t) {
                    if (!k.prop('readonly')) {
                      var n,
                        i,
                        o,
                        s = t.which || t.keyCode,
                        a = k.caret();
                      t.ctrlKey ||
                        t.altKey ||
                        t.metaKey ||
                        s < 32 ||
                        !s ||
                        13 === s ||
                        (a.end - a.begin != 0 && (b(a.begin, a.end), m(a.begin, a.end - 1)),
                        (n = v(a.begin - 1)) < p &&
                          ((i = String.fromCharCode(s)), l[n].test(i)) &&
                          ((function (e) {
                            var t, n, i, o;
                            for (n = g((t = e)); t < p; t++)
                              if (l[t]) {
                                if (((i = v(t)), (o = T[t]), (T[t] = n), !(i < p && l[i].test(o)))) break;
                                n = o;
                              }
                          })(n),
                          (T[n] = i),
                          w(),
                          (o = v(n)),
                          r
                            ? setTimeout(function () {
                                e.proxy(e.fn.caret, k, o)();
                              }, 0)
                            : k.caret(o),
                          a.begin <= d && h()),
                        t.preventDefault());
                    }
                  })
                  .on('input.mask paste.mask', function () {
                    k.prop('readonly') ||
                      setTimeout(function () {
                        var e = x(!0);
                        k.caret(e), h();
                      }, 0);
                  }),
                o &&
                  r &&
                  k.off('input.mask').on('input.mask', function (e) {
                    var t = k.val(),
                      n = k.caret();
                    if (f && f.length && f.length > t.length) {
                      for (x(!0); 0 < n.begin && !l[n.begin - 1]; ) n.begin--;
                      if (0 === n.begin) for (; n.begin < c && !l[n.begin]; ) n.begin++;
                      k.caret(n.begin, n.begin);
                    } else {
                      x(!0);
                      var i = t.charAt(n.begin);
                      n.begin < p && (l[n.begin] || n.begin++, l[n.begin].test(i) && n.begin++), k.caret(n.begin, n.begin);
                    }
                    h();
                  }),
                x();
            })
          );
        },
      });
  }),
  (function (e) {
    'function' == typeof define && define.amd ? define(['jquery'], e) : 'object' == typeof exports ? (module.exports = e(require('jquery'))) : e(jQuery);
  })(function (e) {
    function t(e) {
      return a.raw ? e : encodeURIComponent(e);
    }
    function n(e) {
      return a.raw ? e : decodeURIComponent(e);
    }
    function i(e) {
      return t(a.json ? JSON.stringify(e) : String(e));
    }
    function o(e) {
      0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
      try {
        return (e = decodeURIComponent(e.replace(s, ' '))), a.json ? JSON.parse(e) : e;
      } catch (e) {}
    }
    function r(t, n) {
      var i = a.raw ? t : o(t);
      return e.isFunction(n) ? n(i) : i;
    }
    var s = /\+/g,
      a = (e.cookie = function (o, s, l) {
        if (arguments.length > 1 && !e.isFunction(s)) {
          if (((l = e.extend({}, a.defaults, l)), 'number' == typeof l.expires)) {
            var u = l.expires,
              c = (l.expires = new Date());
            c.setMilliseconds(c.getMilliseconds() + 864e5 * u);
          }
          return (document.cookie = [t(o), '=', i(s), l.expires ? '; expires=' + l.expires.toUTCString() : '', l.path ? '; path=' + l.path : '', l.domain ? '; domain=' + l.domain : '', l.secure ? '; secure' : ''].join(''));
        }
        for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split('; ') : [], f = 0, h = p.length; f < h; f++) {
          var g = p[f].split('='),
            v = n(g.shift()),
            m = g.join('=');
          if (o === v) {
            d = r(m, s);
            break;
          }
          o || void 0 === (m = r(m)) || (d[v] = m);
        }
        return d;
      });
    (a.defaults = {}),
      (e.removeCookie = function (t, n) {
        return e.cookie(t, '', e.extend({}, n, { expires: -1 })), !e.cookie(t);
      });
  }),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define([], function () {
          return (e.svg4everybody = t());
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t())
      : (e.svg4everybody = t());
  })(this, function () {
    function e(e, t, n) {
      if (n) {
        var i = document.createDocumentFragment(),
          o = !t.hasAttribute('viewBox') && n.getAttribute('viewBox');
        o && t.setAttribute('viewBox', o);
        for (var r = n.cloneNode(!0); r.childNodes.length; ) i.appendChild(r.firstChild);
        e.appendChild(i);
      }
    }
    function t(t) {
      (t.onreadystatechange = function () {
        if (4 === t.readyState) {
          var n = t._cachedDocument;
          n || ((n = t._cachedDocument = document.implementation.createHTMLDocument('')), (n.body.innerHTML = t.responseText), (t._cachedTarget = {})),
            t._embeds.splice(0).map(function (i) {
              var o = t._cachedTarget[i.id];
              o || (o = t._cachedTarget[i.id] = n.getElementById(i.id)), e(i.parent, i.svg, o);
            });
        }
      }),
        t.onreadystatechange();
    }
    function n(n) {
      function o() {
        for (var n = 0; n < m.length; ) {
          var u = m[n],
            c = u.parentNode,
            d = i(c),
            p = u.getAttribute('xlink:href') || u.getAttribute('href');
          if ((!p && a.attributeName && (p = u.getAttribute(a.attributeName)), d && p)) {
            if (r) {
              var f = document.createElement('img');
              (f.style.cssText = 'display:inline-block;height:100%;width:100%'),
                f.setAttribute('width', d.getAttribute('width') || d.clientWidth),
                f.setAttribute('height', d.getAttribute('height') || d.clientHeight),
                (f.src = s(p, d, u)),
                c.replaceChild(f, u);
            } else if (l)
              if (!a.validate || a.validate(p, d, u)) {
                c.removeChild(u);
                var h = p.split('#'),
                  b = h.shift(),
                  w = h.join('#');
                if (b.length) {
                  var x = g[b];
                  x || ((x = g[b] = new XMLHttpRequest()), x.open('GET', b), x.send(), (x._embeds = [])), x._embeds.push({ parent: c, svg: d, id: w }), t(x);
                } else e(c, d, document.getElementById(w));
              } else ++n, ++y;
          } else ++n;
        }
        (!m.length || m.length - y > 0) && v(o, 67);
      }
      var r,
        s,
        a = Object(n);
      (s =
        a.fallback ||
        function (e) {
          return (
            e
              .replace(/\?[^#]+/, '')
              .replace('#', '.')
              .replace(/^\./, '') +
            '.png' +
            (/\?[^#]+/.exec(e) || [''])[0]
          );
        }),
        (r = 'nosvg' in a ? a.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent)) && (document.createElement('svg'), document.createElement('use'));
      var l,
        u = /\bMSIE [1-8]\.0\b/,
        c = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
        d = /\bAppleWebKit\/(\d+)\b/,
        p = /\bEdge\/12\.(\d+)\b/,
        f = /\bEdge\/.(\d+)\b/,
        h = window.top !== window.self;
      l = 'polyfill' in a ? a.polyfill : u.test(navigator.userAgent) || c.test(navigator.userAgent) || (navigator.userAgent.match(p) || [])[1] < 10547 || (navigator.userAgent.match(d) || [])[1] < 537 || (f.test(navigator.userAgent) && h);
      var g = {},
        v = window.requestAnimationFrame || setTimeout,
        m = document.getElementsByTagName('use'),
        y = 0;
      l && o();
    }
    function i(e) {
      for (var t = e; 'svg' !== t.nodeName.toLowerCase() && (t = t.parentNode); );
      return t;
    }
    return n;
  });
