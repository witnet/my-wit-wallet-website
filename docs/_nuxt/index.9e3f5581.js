import {
  i as ot,
  o as R,
  a as D,
  b as k,
  e as it,
  h as De,
  w as Ut,
  N as It,
  f as zt,
  u as g,
  j as P,
  r as ie,
  k as E,
  l as at,
  m as V,
  p as G,
  q as ct,
  s as jt,
  T as Vt,
  c as W,
  t as L,
  F as qt,
  v as _e,
  x as pe,
  y as He,
  z as Wt,
  A as Jt,
  B as Ue,
  C as Gt,
  D as lt,
  E as z,
  G as Ee,
  H as Kt,
  I as Xt,
} from './entry.e8b687ab.js'
function Zt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t]
    r[s[0]] = s[1]
  }
  return r
}
const Qt = (e) => e === void 0,
  Yt = (e) => typeof e == 'number',
  en = (e) => (ot(e) ? !Number.isNaN(Number(e)) : !1)
function tn(e, t = 'px') {
  if (!e) return ''
  if (Yt(e) || en(e)) return `${e}${t}`
  if (ot(e)) return e
}
/*! Element Plus Icons Vue v2.1.0 */ var nn = (e, t) => {
    let n = e.__vccOpts || e
    for (let [r, s] of t) n[r] = s
    return n
  },
  rn = { name: 'Loading' },
  sn = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1024 1024' },
  on = k(
    'path',
    {
      fill: 'currentColor',
      d: 'M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z',
    },
    null,
    -1
  ),
  an = [on]
function cn(e, t, n, r, s, o) {
  return R(), D('svg', sn, an)
}
var ln = nn(rn, [
  ['render', cn],
  ['__file', 'loading.vue'],
])
const ut = '__epPropKey',
  Te = (e) => e,
  un = (e) => it(e) && !!e[ut],
  ft = (e, t) => {
    if (!it(e) || un(e)) return e
    const { values: n, required: r, default: s, type: o, validator: i } = e,
      f = {
        type: o,
        required: !!r,
        validator:
          n || i
            ? (l) => {
                let d = !1,
                  p = []
                if (
                  (n &&
                    ((p = Array.from(n)),
                    De(e, 'default') && p.push(s),
                    d || (d = p.includes(l))),
                  i && (d || (d = i(l))),
                  !d && p.length > 0)
                ) {
                  const w = [...new Set(p)]
                    .map((m) => JSON.stringify(m))
                    .join(', ')
                  Ut(
                    `Invalid prop: validation failed${
                      t ? ` for prop "${t}"` : ''
                    }. Expected one of [${w}], got value ${JSON.stringify(l)}.`
                  )
                }
                return d
              }
            : void 0,
        [ut]: !0,
      }
    return De(e, 'default') && (f.default = s), f
  },
  dt = (e) => Zt(Object.entries(e).map(([t, n]) => [t, ft(n, t)])),
  Ie = Te([String, Object, Function]),
  ht = (e, t) => {
    if (
      ((e.install = (n) => {
        for (const r of [e, ...Object.values(t ?? {})]) n.component(r.name, r)
      }),
      t)
    )
      for (const [n, r] of Object.entries(t)) e[n] = r
    return e
  },
  fn = (e) => ((e.install = It), e),
  dn = ['', 'default', 'small', 'large'],
  hn = (
    { from: e, replacement: t, scope: n, version: r, ref: s, type: o = 'API' },
    i
  ) => {
    zt(
      () => g(i),
      (a) => {},
      { immediate: !0 }
    )
  },
  ze = 'el',
  pn = 'is-',
  H = (e, t, n, r, s) => {
    let o = `${e}-${t}`
    return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o
  },
  mn = Symbol('namespaceContextKey'),
  bn = (e) => {
    const t = e || P(mn, ie(ze))
    return E(() => g(t) || ze)
  },
  ae = (e, t) => {
    const n = bn(t)
    return {
      namespace: n,
      b: (u = '') => H(n.value, e, u, '', ''),
      e: (u) => (u ? H(n.value, e, '', u, '') : ''),
      m: (u) => (u ? H(n.value, e, '', '', u) : ''),
      be: (u, b) => (u && b ? H(n.value, e, u, b, '') : ''),
      em: (u, b) => (u && b ? H(n.value, e, '', u, b) : ''),
      bm: (u, b) => (u && b ? H(n.value, e, u, '', b) : ''),
      bem: (u, b, v) => (u && b && v ? H(n.value, e, u, b, v) : ''),
      is: (u, ...b) => {
        const v = b.length >= 1 ? b[0] : !0
        return u && v ? `${pn}${u}` : ''
      },
      cssVar: (u) => {
        const b = {}
        for (const v in u) u[v] && (b[`--${n.value}-${v}`] = u[v])
        return b
      },
      cssVarName: (u) => `--${n.value}-${u}`,
      cssVarBlock: (u) => {
        const b = {}
        for (const v in u) u[v] && (b[`--${n.value}-${e}-${v}`] = u[v])
        return b
      },
      cssVarBlockName: (u) => `--${n.value}-${e}-${u}`,
    }
  },
  pt = (e) => {
    const t = at()
    return E(() => {
      var n, r
      return (r =
        (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null
        ? void 0
        : r[e]
    })
  },
  gn = ft({ type: String, values: dn, required: !1 }),
  yn = Symbol('size'),
  vn = () => {
    const e = P(yn, {})
    return E(() => g(e.size) || '')
  },
  wn = dt({ size: { type: Te([Number, String]) }, color: { type: String } })
var Be = (e, t) => {
  const n = e.__vccOpts || e
  for (const [r, s] of t) n[r] = s
  return n
}
const Sn = V({ name: 'ElIcon', inheritAttrs: !1 }),
  _n = V({
    ...Sn,
    props: wn,
    setup(e) {
      const t = e,
        n = ae('icon'),
        r = E(() => {
          const { size: s, color: o } = t
          return !s && !o
            ? {}
            : { fontSize: Qt(s) ? void 0 : tn(s), '--color': o }
        })
      return (s, o) => (
        R(),
        D(
          'i',
          ct({ class: g(n).b(), style: g(r) }, s.$attrs),
          [G(s.$slots, 'default')],
          16
        )
      )
    },
  })
var En = Be(_n, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue',
  ],
])
const je = ht(En),
  Ce = Symbol('formContextKey'),
  mt = Symbol('formItemContextKey'),
  xn = (e, t = {}) => {
    const n = ie(void 0),
      r = t.prop ? n : pt('size'),
      s = t.global ? n : vn(),
      o = t.form ? { size: void 0 } : P(Ce, void 0),
      i = t.formItem ? { size: void 0 } : P(mt, void 0)
    return E(
      () =>
        r.value ||
        g(e) ||
        (i == null ? void 0 : i.size) ||
        (o == null ? void 0 : o.size) ||
        s.value ||
        ''
    )
  },
  bt = (e) => {
    const t = pt('disabled'),
      n = P(Ce, void 0)
    return E(() => t.value || g(e) || (n == null ? void 0 : n.disabled) || !1)
  },
  Rn = () => {
    const e = P(Ce, void 0),
      t = P(mt, void 0)
    return { form: e, formItem: t }
  },
  An = Symbol(),
  Ve = ie()
function On(e, t = void 0) {
  const n = at() ? P(An, Ve) : Ve
  return e
    ? E(() => {
        var r, s
        return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t
      })
    : n
}
const gt = Symbol('buttonGroupContextKey'),
  Nn = (e, t) => {
    hn(
      {
        from: 'type.text',
        replacement: 'link',
        version: '3.0.0',
        scope: 'props',
        ref: 'https://element-plus.org/en-US/component/button.html#button-attributes',
      },
      E(() => e.type === 'text')
    )
    const n = P(gt, void 0),
      r = On('button'),
      { form: s } = Rn(),
      o = xn(E(() => (n == null ? void 0 : n.size))),
      i = bt(),
      a = ie(),
      f = jt(),
      l = E(() => e.type || (n == null ? void 0 : n.type) || ''),
      d = E(() => {
        var h, u, b
        return (b =
          (u = e.autoInsertSpace) != null
            ? u
            : (h = r.value) == null
            ? void 0
            : h.autoInsertSpace) != null
          ? b
          : !1
      }),
      p = E(() =>
        e.tag === 'button'
          ? {
              ariaDisabled: i.value || e.loading,
              disabled: i.value || e.loading,
              autofocus: e.autofocus,
              type: e.nativeType,
            }
          : {}
      ),
      w = E(() => {
        var h
        const u = (h = f.default) == null ? void 0 : h.call(f)
        if (d.value && (u == null ? void 0 : u.length) === 1) {
          const b = u[0]
          if ((b == null ? void 0 : b.type) === Vt) {
            const v = b.children
            return /^\p{Unified_Ideograph}{2}$/u.test(v.trim())
          }
        }
        return !1
      })
    return {
      _disabled: i,
      _size: o,
      _type: l,
      _ref: a,
      _props: p,
      shouldAddSpace: w,
      handleClick: (h) => {
        e.nativeType === 'reset' && (s == null || s.resetFields()),
          t('click', h)
      },
    }
  },
  kn = [
    'default',
    'primary',
    'success',
    'warning',
    'info',
    'danger',
    'text',
    '',
  ],
  Tn = ['button', 'submit', 'reset'],
  xe = dt({
    size: gn,
    disabled: Boolean,
    type: { type: String, values: kn, default: '' },
    icon: { type: Ie },
    nativeType: { type: String, values: Tn, default: 'button' },
    loading: Boolean,
    loadingIcon: { type: Ie, default: () => ln },
    plain: Boolean,
    text: Boolean,
    link: Boolean,
    bg: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    color: String,
    dark: Boolean,
    autoInsertSpace: { type: Boolean, default: void 0 },
    tag: { type: Te([String, Object]), default: 'button' },
  }),
  Bn = { click: (e) => e instanceof MouseEvent }
function _(e, t) {
  Cn(e) && (e = '100%')
  var n = Pn(e)
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  )
}
function Y(e) {
  return Math.min(1, Math.max(0, e))
}
function Cn(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function Pn(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function yt(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function ee(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function U(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function Mn(e, t, n) {
  return { r: _(e, 255) * 255, g: _(t, 255) * 255, b: _(n, 255) * 255 }
}
function qe(e, t, n) {
  ;(e = _(e, 255)), (t = _(t, 255)), (n = _(n, 255))
  var r = Math.max(e, t, n),
    s = Math.min(e, t, n),
    o = 0,
    i = 0,
    a = (r + s) / 2
  if (r === s) (i = 0), (o = 0)
  else {
    var f = r - s
    switch (((i = a > 0.5 ? f / (2 - r - s) : f / (r + s)), r)) {
      case e:
        o = (t - n) / f + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / f + 2
        break
      case n:
        o = (e - t) / f + 4
        break
    }
    o /= 6
  }
  return { h: o, s: i, l: a }
}
function me(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function Fn(e, t, n) {
  var r, s, o
  if (((e = _(e, 360)), (t = _(t, 100)), (n = _(n, 100)), t === 0))
    (s = n), (o = n), (r = n)
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - i
    ;(r = me(a, i, e + 1 / 3)), (s = me(a, i, e)), (o = me(a, i, e - 1 / 3))
  }
  return { r: r * 255, g: s * 255, b: o * 255 }
}
function We(e, t, n) {
  ;(e = _(e, 255)), (t = _(t, 255)), (n = _(n, 255))
  var r = Math.max(e, t, n),
    s = Math.min(e, t, n),
    o = 0,
    i = r,
    a = r - s,
    f = r === 0 ? 0 : a / r
  if (r === s) o = 0
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / a + 2
        break
      case n:
        o = (e - t) / a + 4
        break
    }
    o /= 6
  }
  return { h: o, s: f, v: i }
}
function $n(e, t, n) {
  ;(e = _(e, 360) * 6), (t = _(t, 100)), (n = _(n, 100))
  var r = Math.floor(e),
    s = e - r,
    o = n * (1 - t),
    i = n * (1 - s * t),
    a = n * (1 - (1 - s) * t),
    f = r % 6,
    l = [n, i, o, o, a, n][f],
    d = [a, n, n, i, o, o][f],
    p = [o, o, a, n, n, i][f]
  return { r: l * 255, g: d * 255, b: p * 255 }
}
function Je(e, t, n, r) {
  var s = [
    U(Math.round(e).toString(16)),
    U(Math.round(t).toString(16)),
    U(Math.round(n).toString(16)),
  ]
  return r &&
    s[0].startsWith(s[0].charAt(1)) &&
    s[1].startsWith(s[1].charAt(1)) &&
    s[2].startsWith(s[2].charAt(1))
    ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0)
    : s.join('')
}
function Ln(e, t, n, r, s) {
  var o = [
    U(Math.round(e).toString(16)),
    U(Math.round(t).toString(16)),
    U(Math.round(n).toString(16)),
    U(Dn(r)),
  ]
  return s &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function Dn(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function Ge(e) {
  return x(e) / 255
}
function x(e) {
  return parseInt(e, 16)
}
function Hn(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Re = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}
function Un(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    s = null,
    o = null,
    i = !1,
    a = !1
  return (
    typeof e == 'string' && (e = jn(e)),
    typeof e == 'object' &&
      (B(e.r) && B(e.g) && B(e.b)
        ? ((t = Mn(e.r, e.g, e.b)),
          (i = !0),
          (a = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : B(e.h) && B(e.s) && B(e.v)
        ? ((r = ee(e.s)),
          (s = ee(e.v)),
          (t = $n(e.h, r, s)),
          (i = !0),
          (a = 'hsv'))
        : B(e.h) &&
          B(e.s) &&
          B(e.l) &&
          ((r = ee(e.s)),
          (o = ee(e.l)),
          (t = Fn(e.h, r, o)),
          (i = !0),
          (a = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = yt(n)),
    {
      ok: i,
      format: e.format || a,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  )
}
var In = '[-\\+]?\\d+%?',
  zn = '[-\\+]?\\d*\\.\\d+%?',
  $ = '(?:'.concat(zn, ')|(?:').concat(In, ')'),
  be = '[\\s|\\(]+('
    .concat($, ')[,|\\s]+(')
    .concat($, ')[,|\\s]+(')
    .concat($, ')\\s*\\)?'),
  ge = '[\\s|\\(]+('
    .concat($, ')[,|\\s]+(')
    .concat($, ')[,|\\s]+(')
    .concat($, ')[,|\\s]+(')
    .concat($, ')\\s*\\)?'),
  O = {
    CSS_UNIT: new RegExp($),
    rgb: new RegExp('rgb' + be),
    rgba: new RegExp('rgba' + ge),
    hsl: new RegExp('hsl' + be),
    hsla: new RegExp('hsla' + ge),
    hsv: new RegExp('hsv' + be),
    hsva: new RegExp('hsva' + ge),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  }
function jn(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Re[e]) (e = Re[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = O.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = O.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = O.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = O.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = O.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = O.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = O.hex8.exec(e)),
                          n
                            ? {
                                r: x(n[1]),
                                g: x(n[2]),
                                b: x(n[3]),
                                a: Ge(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = O.hex6.exec(e)),
                              n
                                ? {
                                    r: x(n[1]),
                                    g: x(n[2]),
                                    b: x(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = O.hex4.exec(e)),
                                  n
                                    ? {
                                        r: x(n[1] + n[1]),
                                        g: x(n[2] + n[2]),
                                        b: x(n[3] + n[3]),
                                        a: Ge(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = O.hex3.exec(e)),
                                      n
                                        ? {
                                            r: x(n[1] + n[1]),
                                            g: x(n[2] + n[2]),
                                            b: x(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))))
}
function B(e) {
  return !!O.CSS_UNIT.exec(String(e))
}
var Vn = (function () {
  function e(t, n) {
    t === void 0 && (t = ''), n === void 0 && (n = {})
    var r
    if (t instanceof e) return t
    typeof t == 'number' && (t = Hn(t)), (this.originalInput = t)
    var s = Un(t)
    ;(this.originalInput = t),
      (this.r = s.r),
      (this.g = s.g),
      (this.b = s.b),
      (this.a = s.a),
      (this.roundA = Math.round(100 * this.a) / 100),
      (this.format = (r = n.format) !== null && r !== void 0 ? r : s.format),
      (this.gradientType = n.gradientType),
      this.r < 1 && (this.r = Math.round(this.r)),
      this.g < 1 && (this.g = Math.round(this.g)),
      this.b < 1 && (this.b = Math.round(this.b)),
      (this.isValid = s.ok)
  }
  return (
    (e.prototype.isDark = function () {
      return this.getBrightness() < 128
    }),
    (e.prototype.isLight = function () {
      return !this.isDark()
    }),
    (e.prototype.getBrightness = function () {
      var t = this.toRgb()
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }),
    (e.prototype.getLuminance = function () {
      var t = this.toRgb(),
        n,
        r,
        s,
        o = t.r / 255,
        i = t.g / 255,
        a = t.b / 255
      return (
        o <= 0.03928
          ? (n = o / 12.92)
          : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
        i <= 0.03928
          ? (r = i / 12.92)
          : (r = Math.pow((i + 0.055) / 1.055, 2.4)),
        a <= 0.03928
          ? (s = a / 12.92)
          : (s = Math.pow((a + 0.055) / 1.055, 2.4)),
        0.2126 * n + 0.7152 * r + 0.0722 * s
      )
    }),
    (e.prototype.getAlpha = function () {
      return this.a
    }),
    (e.prototype.setAlpha = function (t) {
      return (
        (this.a = yt(t)), (this.roundA = Math.round(100 * this.a) / 100), this
      )
    }),
    (e.prototype.isMonochrome = function () {
      var t = this.toHsl().s
      return t === 0
    }),
    (e.prototype.toHsv = function () {
      var t = We(this.r, this.g, this.b)
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
    }),
    (e.prototype.toHsvString = function () {
      var t = We(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        s = Math.round(t.v * 100)
      return this.a === 1
        ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(s, '%)')
        : 'hsva('
            .concat(n, ', ')
            .concat(r, '%, ')
            .concat(s, '%, ')
            .concat(this.roundA, ')')
    }),
    (e.prototype.toHsl = function () {
      var t = qe(this.r, this.g, this.b)
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
    }),
    (e.prototype.toHslString = function () {
      var t = qe(this.r, this.g, this.b),
        n = Math.round(t.h * 360),
        r = Math.round(t.s * 100),
        s = Math.round(t.l * 100)
      return this.a === 1
        ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(s, '%)')
        : 'hsla('
            .concat(n, ', ')
            .concat(r, '%, ')
            .concat(s, '%, ')
            .concat(this.roundA, ')')
    }),
    (e.prototype.toHex = function (t) {
      return t === void 0 && (t = !1), Je(this.r, this.g, this.b, t)
    }),
    (e.prototype.toHexString = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex(t)
    }),
    (e.prototype.toHex8 = function (t) {
      return t === void 0 && (t = !1), Ln(this.r, this.g, this.b, this.a, t)
    }),
    (e.prototype.toHex8String = function (t) {
      return t === void 0 && (t = !1), '#' + this.toHex8(t)
    }),
    (e.prototype.toHexShortString = function (t) {
      return (
        t === void 0 && (t = !1),
        this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
      )
    }),
    (e.prototype.toRgb = function () {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a,
      }
    }),
    (e.prototype.toRgbString = function () {
      var t = Math.round(this.r),
        n = Math.round(this.g),
        r = Math.round(this.b)
      return this.a === 1
        ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
        : 'rgba('
            .concat(t, ', ')
            .concat(n, ', ')
            .concat(r, ', ')
            .concat(this.roundA, ')')
    }),
    (e.prototype.toPercentageRgb = function () {
      var t = function (n) {
        return ''.concat(Math.round(_(n, 255) * 100), '%')
      }
      return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
    }),
    (e.prototype.toPercentageRgbString = function () {
      var t = function (n) {
        return Math.round(_(n, 255) * 100)
      }
      return this.a === 1
        ? 'rgb('
            .concat(t(this.r), '%, ')
            .concat(t(this.g), '%, ')
            .concat(t(this.b), '%)')
        : 'rgba('
            .concat(t(this.r), '%, ')
            .concat(t(this.g), '%, ')
            .concat(t(this.b), '%, ')
            .concat(this.roundA, ')')
    }),
    (e.prototype.toName = function () {
      if (this.a === 0) return 'transparent'
      if (this.a < 1) return !1
      for (
        var t = '#' + Je(this.r, this.g, this.b, !1),
          n = 0,
          r = Object.entries(Re);
        n < r.length;
        n++
      ) {
        var s = r[n],
          o = s[0],
          i = s[1]
        if (t === i) return o
      }
      return !1
    }),
    (e.prototype.toString = function (t) {
      var n = !!t
      t = t ?? this.format
      var r = !1,
        s = this.a < 1 && this.a >= 0,
        o = !n && s && (t.startsWith('hex') || t === 'name')
      return o
        ? t === 'name' && this.a === 0
          ? this.toName()
          : this.toRgbString()
        : (t === 'rgb' && (r = this.toRgbString()),
          t === 'prgb' && (r = this.toPercentageRgbString()),
          (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
          t === 'hex3' && (r = this.toHexString(!0)),
          t === 'hex4' && (r = this.toHex8String(!0)),
          t === 'hex8' && (r = this.toHex8String()),
          t === 'name' && (r = this.toName()),
          t === 'hsl' && (r = this.toHslString()),
          t === 'hsv' && (r = this.toHsvString()),
          r || this.toHexString())
    }),
    (e.prototype.toNumber = function () {
      return (
        (Math.round(this.r) << 16) +
        (Math.round(this.g) << 8) +
        Math.round(this.b)
      )
    }),
    (e.prototype.clone = function () {
      return new e(this.toString())
    }),
    (e.prototype.lighten = function (t) {
      t === void 0 && (t = 10)
      var n = this.toHsl()
      return (n.l += t / 100), (n.l = Y(n.l)), new e(n)
    }),
    (e.prototype.brighten = function (t) {
      t === void 0 && (t = 10)
      var n = this.toRgb()
      return (
        (n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100))))),
        (n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100))))),
        (n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100))))),
        new e(n)
      )
    }),
    (e.prototype.darken = function (t) {
      t === void 0 && (t = 10)
      var n = this.toHsl()
      return (n.l -= t / 100), (n.l = Y(n.l)), new e(n)
    }),
    (e.prototype.tint = function (t) {
      return t === void 0 && (t = 10), this.mix('white', t)
    }),
    (e.prototype.shade = function (t) {
      return t === void 0 && (t = 10), this.mix('black', t)
    }),
    (e.prototype.desaturate = function (t) {
      t === void 0 && (t = 10)
      var n = this.toHsl()
      return (n.s -= t / 100), (n.s = Y(n.s)), new e(n)
    }),
    (e.prototype.saturate = function (t) {
      t === void 0 && (t = 10)
      var n = this.toHsl()
      return (n.s += t / 100), (n.s = Y(n.s)), new e(n)
    }),
    (e.prototype.greyscale = function () {
      return this.desaturate(100)
    }),
    (e.prototype.spin = function (t) {
      var n = this.toHsl(),
        r = (n.h + t) % 360
      return (n.h = r < 0 ? 360 + r : r), new e(n)
    }),
    (e.prototype.mix = function (t, n) {
      n === void 0 && (n = 50)
      var r = this.toRgb(),
        s = new e(t).toRgb(),
        o = n / 100,
        i = {
          r: (s.r - r.r) * o + r.r,
          g: (s.g - r.g) * o + r.g,
          b: (s.b - r.b) * o + r.b,
          a: (s.a - r.a) * o + r.a,
        }
      return new e(i)
    }),
    (e.prototype.analogous = function (t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30)
      var r = this.toHsl(),
        s = 360 / n,
        o = [this]
      for (r.h = (r.h - ((s * t) >> 1) + 720) % 360; --t; )
        (r.h = (r.h + s) % 360), o.push(new e(r))
      return o
    }),
    (e.prototype.complement = function () {
      var t = this.toHsl()
      return (t.h = (t.h + 180) % 360), new e(t)
    }),
    (e.prototype.monochromatic = function (t) {
      t === void 0 && (t = 6)
      for (
        var n = this.toHsv(), r = n.h, s = n.s, o = n.v, i = [], a = 1 / t;
        t--;

      )
        i.push(new e({ h: r, s, v: o })), (o = (o + a) % 1)
      return i
    }),
    (e.prototype.splitcomplement = function () {
      var t = this.toHsl(),
        n = t.h
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
      ]
    }),
    (e.prototype.onBackground = function (t) {
      var n = this.toRgb(),
        r = new e(t).toRgb(),
        s = n.a + r.a * (1 - n.a)
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
        a: s,
      })
    }),
    (e.prototype.triad = function () {
      return this.polyad(3)
    }),
    (e.prototype.tetrad = function () {
      return this.polyad(4)
    }),
    (e.prototype.polyad = function (t) {
      for (
        var n = this.toHsl(), r = n.h, s = [this], o = 360 / t, i = 1;
        i < t;
        i++
      )
        s.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }))
      return s
    }),
    (e.prototype.equals = function (t) {
      return this.toRgbString() === new e(t).toRgbString()
    }),
    e
  )
})()
function M(e, t = 20) {
  return e.mix('#141414', t).toString()
}
function qn(e) {
  const t = bt(),
    n = ae('button')
  return E(() => {
    let r = {}
    const s = e.color
    if (s) {
      const o = new Vn(s),
        i = e.dark ? o.tint(20).toString() : M(o, 20)
      if (e.plain)
        (r = n.cssVarBlock({
          'bg-color': e.dark ? M(o, 90) : o.tint(90).toString(),
          'text-color': s,
          'border-color': e.dark ? M(o, 50) : o.tint(50).toString(),
          'hover-text-color': `var(${n.cssVarName('color-white')})`,
          'hover-bg-color': s,
          'hover-border-color': s,
          'active-bg-color': i,
          'active-text-color': `var(${n.cssVarName('color-white')})`,
          'active-border-color': i,
        })),
          t.value &&
            ((r[n.cssVarBlockName('disabled-bg-color')] = e.dark
              ? M(o, 90)
              : o.tint(90).toString()),
            (r[n.cssVarBlockName('disabled-text-color')] = e.dark
              ? M(o, 50)
              : o.tint(50).toString()),
            (r[n.cssVarBlockName('disabled-border-color')] = e.dark
              ? M(o, 80)
              : o.tint(80).toString()))
      else {
        const a = e.dark ? M(o, 30) : o.tint(30).toString(),
          f = o.isDark()
            ? `var(${n.cssVarName('color-white')})`
            : `var(${n.cssVarName('color-black')})`
        if (
          ((r = n.cssVarBlock({
            'bg-color': s,
            'text-color': f,
            'border-color': s,
            'hover-bg-color': a,
            'hover-text-color': f,
            'hover-border-color': a,
            'active-bg-color': i,
            'active-border-color': i,
          })),
          t.value)
        ) {
          const l = e.dark ? M(o, 50) : o.tint(50).toString()
          ;(r[n.cssVarBlockName('disabled-bg-color')] = l),
            (r[n.cssVarBlockName('disabled-text-color')] = e.dark
              ? 'rgba(255, 255, 255, 0.5)'
              : `var(${n.cssVarName('color-white')})`),
            (r[n.cssVarBlockName('disabled-border-color')] = l)
        }
      }
    }
    return r
  })
}
const Wn = V({ name: 'ElButton' }),
  Jn = V({
    ...Wn,
    props: xe,
    emits: Bn,
    setup(e, { expose: t, emit: n }) {
      const r = e,
        s = qn(r),
        o = ae('button'),
        {
          _ref: i,
          _size: a,
          _type: f,
          _disabled: l,
          _props: d,
          shouldAddSpace: p,
          handleClick: w,
        } = Nn(r, n)
      return (
        t({ ref: i, size: a, type: f, disabled: l, shouldAddSpace: p }),
        (m, h) => (
          R(),
          W(
            pe(m.tag),
            ct({ ref_key: '_ref', ref: i }, g(d), {
              class: [
                g(o).b(),
                g(o).m(g(f)),
                g(o).m(g(a)),
                g(o).is('disabled', g(l)),
                g(o).is('loading', m.loading),
                g(o).is('plain', m.plain),
                g(o).is('round', m.round),
                g(o).is('circle', m.circle),
                g(o).is('text', m.text),
                g(o).is('link', m.link),
                g(o).is('has-bg', m.bg),
              ],
              style: g(s),
              onClick: g(w),
            }),
            {
              default: L(() => [
                m.loading
                  ? (R(),
                    D(
                      qt,
                      { key: 0 },
                      [
                        m.$slots.loading
                          ? G(m.$slots, 'loading', { key: 0 })
                          : (R(),
                            W(
                              g(je),
                              { key: 1, class: _e(g(o).is('loading')) },
                              {
                                default: L(() => [(R(), W(pe(m.loadingIcon)))]),
                                _: 1,
                              },
                              8,
                              ['class']
                            )),
                      ],
                      64
                    ))
                  : m.icon || m.$slots.icon
                  ? (R(),
                    W(
                      g(je),
                      { key: 1 },
                      {
                        default: L(() => [
                          m.icon
                            ? (R(), W(pe(m.icon), { key: 0 }))
                            : G(m.$slots, 'icon', { key: 1 }),
                        ]),
                        _: 3,
                      }
                    ))
                  : He('v-if', !0),
                m.$slots.default
                  ? (R(),
                    D(
                      'span',
                      {
                        key: 2,
                        class: _e({ [g(o).em('text', 'expand')]: g(p) }),
                      },
                      [G(m.$slots, 'default')],
                      2
                    ))
                  : He('v-if', !0),
              ]),
              _: 3,
            },
            16,
            ['class', 'style', 'onClick']
          )
        )
      )
    },
  })
var Gn = Be(Jn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue',
  ],
])
const Kn = { size: xe.size, type: xe.type },
  Xn = V({ name: 'ElButtonGroup' }),
  Zn = V({
    ...Xn,
    props: Kn,
    setup(e) {
      const t = e
      Wt(gt, Jt({ size: Ue(t, 'size'), type: Ue(t, 'type') }))
      const n = ae('button')
      return (r, s) => (
        R(),
        D(
          'div',
          { class: _e(`${g(n).b('group')}`) },
          [G(r.$slots, 'default')],
          2
        )
      )
    },
  })
var vt = Be(Zn, [
  [
    '__file',
    '/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue',
  ],
])
const Qn = ht(Gn, { ButtonGroup: vt })
fn(vt)
function wt(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Yn } = Object.prototype,
  { getPrototypeOf: Pe } = Object,
  ce = ((e) => (t) => {
    const n = Yn.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  T = (e) => ((e = e.toLowerCase()), (t) => ce(t) === e),
  le = (e) => (t) => typeof t === e,
  { isArray: q } = Array,
  K = le('undefined')
function er(e) {
  return (
    e !== null &&
    !K(e) &&
    e.constructor !== null &&
    !K(e.constructor) &&
    A(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const St = T('ArrayBuffer')
function tr(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && St(e.buffer)),
    t
  )
}
const nr = le('string'),
  A = le('function'),
  _t = le('number'),
  ue = (e) => e !== null && typeof e == 'object',
  rr = (e) => e === !0 || e === !1,
  te = (e) => {
    if (ce(e) !== 'object') return !1
    const t = Pe(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  sr = T('Date'),
  or = T('File'),
  ir = T('Blob'),
  ar = T('FileList'),
  cr = (e) => ue(e) && A(e.pipe),
  lr = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (A(e.append) &&
          ((t = ce(e)) === 'formdata' ||
            (t === 'object' &&
              A(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  ur = T('URLSearchParams'),
  fr = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function X(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, s
  if ((typeof e != 'object' && (e = [e]), q(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length
    let a
    for (r = 0; r < i; r++) (a = o[r]), t.call(null, e[a], a, e)
  }
}
function Et(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    s
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s
  return null
}
const xt = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Rt = (e) => !K(e) && e !== xt
function Ae() {
  const { caseless: e } = (Rt(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Et(t, s)) || s
      te(t[o]) && te(r)
        ? (t[o] = Ae(t[o], r))
        : te(r)
        ? (t[o] = Ae({}, r))
        : q(r)
        ? (t[o] = r.slice())
        : (t[o] = r)
    }
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && X(arguments[r], n)
  return t
}
const dr = (e, t, n, { allOwnKeys: r } = {}) => (
    X(
      t,
      (s, o) => {
        n && A(s) ? (e[o] = wt(s, n)) : (e[o] = s)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  hr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  pr = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  mr = (e, t, n, r) => {
    let s, o, i
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0))
      e = n !== !1 && Pe(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  br = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  gr = (e) => {
    if (!e) return null
    if (q(e)) return e
    let t = e.length
    if (!_t(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  yr = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Pe(Uint8Array)),
  vr = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let s
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value
      t.call(e, o[0], o[1])
    }
  },
  wr = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  Sr = T('HTMLFormElement'),
  _r = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s
    }),
  Ke = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Er = T('RegExp'),
  At = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    X(n, (s, o) => {
      t(s, o, e) !== !1 && (r[o] = s)
    }),
      Object.defineProperties(e, r)
  },
  xr = (e) => {
    At(e, (t, n) => {
      if (A(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1) return !1
      const r = e[n]
      if (A(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  Rr = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0
        })
      }
    return q(e) ? r(e) : r(String(e).split(t)), n
  },
  Ar = () => {},
  Or = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  ye = 'abcdefghijklmnopqrstuvwxyz',
  Xe = '0123456789',
  Ot = { DIGIT: Xe, ALPHA: ye, ALPHA_DIGIT: ye + ye.toUpperCase() + Xe },
  Nr = (e = 16, t = Ot.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function kr(e) {
  return !!(
    e &&
    A(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const Tr = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (ue(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[s] = r
            const o = q(r) ? [] : {}
            return (
              X(r, (i, a) => {
                const f = n(i, s + 1)
                !K(f) && (o[a] = f)
              }),
              (t[s] = void 0),
              o
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  Br = T('AsyncFunction'),
  Cr = (e) => e && (ue(e) || A(e)) && A(e.then) && A(e.catch),
  c = {
    isArray: q,
    isArrayBuffer: St,
    isBuffer: er,
    isFormData: lr,
    isArrayBufferView: tr,
    isString: nr,
    isNumber: _t,
    isBoolean: rr,
    isObject: ue,
    isPlainObject: te,
    isUndefined: K,
    isDate: sr,
    isFile: or,
    isBlob: ir,
    isRegExp: Er,
    isFunction: A,
    isStream: cr,
    isURLSearchParams: ur,
    isTypedArray: yr,
    isFileList: ar,
    forEach: X,
    merge: Ae,
    extend: dr,
    trim: fr,
    stripBOM: hr,
    inherits: pr,
    toFlatObject: mr,
    kindOf: ce,
    kindOfTest: T,
    endsWith: br,
    toArray: gr,
    forEachEntry: vr,
    matchAll: wr,
    isHTMLForm: Sr,
    hasOwnProperty: Ke,
    hasOwnProp: Ke,
    reduceDescriptors: At,
    freezeMethods: xr,
    toObjectSet: Rr,
    toCamelCase: _r,
    noop: Ar,
    toFiniteNumber: Or,
    findKey: Et,
    global: xt,
    isContextDefined: Rt,
    ALPHABET: Ot,
    generateString: Nr,
    isSpecCompliantForm: kr,
    toJSONObject: Tr,
    isAsyncFn: Br,
    isThenable: Cr,
  }
function y(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s)
}
c.inherits(y, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: c.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Nt = y.prototype,
  kt = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  kt[e] = { value: e }
})
Object.defineProperties(y, kt)
Object.defineProperty(Nt, 'isAxiosError', { value: !0 })
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Nt)
  return (
    c.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype
      },
      (a) => a !== 'isAxiosError'
    ),
    y.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  )
}
const Pr = null
function Oe(e) {
  return c.isPlainObject(e) || c.isArray(e)
}
function Tt(e) {
  return c.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Ze(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Tt(s)), !n && o ? '[' + s + ']' : s
        })
        .join(n ? '.' : '')
    : t
}
function Mr(e) {
  return c.isArray(e) && !e.some(Oe)
}
const Fr = c.toFlatObject(c, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function fe(e, t, n) {
  if (!c.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = c.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (u, b) {
        return !c.isUndefined(b[u])
      }
    ))
  const r = n.metaTokens,
    s = n.visitor || d,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < 'u' && Blob)) && c.isSpecCompliantForm(t)
  if (!c.isFunction(s)) throw new TypeError('visitor must be a function')
  function l(h) {
    if (h === null) return ''
    if (c.isDate(h)) return h.toISOString()
    if (!f && c.isBlob(h))
      throw new y('Blob is not supported. Use a Buffer instead.')
    return c.isArrayBuffer(h) || c.isTypedArray(h)
      ? f && typeof Blob == 'function'
        ? new Blob([h])
        : Buffer.from(h)
      : h
  }
  function d(h, u, b) {
    let v = h
    if (h && !b && typeof h == 'object') {
      if (c.endsWith(u, '{}'))
        (u = r ? u : u.slice(0, -2)), (h = JSON.stringify(h))
      else if (
        (c.isArray(h) && Mr(h)) ||
        ((c.isFileList(h) || c.endsWith(u, '[]')) && (v = c.toArray(h)))
      )
        return (
          (u = Tt(u)),
          v.forEach(function (Q, Ht) {
            !(c.isUndefined(Q) || Q === null) &&
              t.append(
                i === !0 ? Ze([u], Ht, o) : i === null ? u : u + '[]',
                l(Q)
              )
          }),
          !1
        )
    }
    return Oe(h) ? !0 : (t.append(Ze(b, u, o), l(h)), !1)
  }
  const p = [],
    w = Object.assign(Fr, {
      defaultVisitor: d,
      convertValue: l,
      isVisitable: Oe,
    })
  function m(h, u) {
    if (!c.isUndefined(h)) {
      if (p.indexOf(h) !== -1)
        throw Error('Circular reference detected in ' + u.join('.'))
      p.push(h),
        c.forEach(h, function (v, I) {
          ;(!(c.isUndefined(v) || v === null) &&
            s.call(t, v, c.isString(I) ? I.trim() : I, u, w)) === !0 &&
            m(v, u ? u.concat(I) : [I])
        }),
        p.pop()
    }
  }
  if (!c.isObject(e)) throw new TypeError('data must be an object')
  return m(e), t
}
function Qe(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function Me(e, t) {
  ;(this._pairs = []), e && fe(e, this, t)
}
const Bt = Me.prototype
Bt.append = function (t, n) {
  this._pairs.push([t, n])
}
Bt.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Qe)
      }
    : Qe
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1])
    }, '')
    .join('&')
}
function $r(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Ct(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || $r,
    s = n && n.serialize
  let o
  if (
    (s
      ? (o = s(t, n))
      : (o = c.isURLSearchParams(t) ? t.toString() : new Me(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf('#')
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class Lr {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    c.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Ye = Lr,
  Pt = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Dr = typeof URLSearchParams < 'u' ? URLSearchParams : Me,
  Hr = typeof FormData < 'u' ? FormData : null,
  Ur = typeof Blob < 'u' ? Blob : null,
  Ir = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  zr = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  N = {
    isBrowser: !0,
    classes: { URLSearchParams: Dr, FormData: Hr, Blob: Ur },
    isStandardBrowserEnv: Ir,
    isStandardBrowserWebWorkerEnv: zr,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  }
function jr(e, t) {
  return fe(
    e,
    new N.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return N.isNode && c.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function Vr(e) {
  return c
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function qr(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const s = n.length
  let o
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o])
  return t
}
function Mt(e) {
  function t(n, r, s, o) {
    let i = n[o++]
    const a = Number.isFinite(+i),
      f = o >= n.length
    return (
      (i = !i && c.isArray(s) ? s.length : i),
      f
        ? (c.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !a)
        : ((!s[i] || !c.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && c.isArray(s[i]) && (s[i] = qr(s[i])),
          !a)
    )
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {}
    return (
      c.forEachEntry(e, (r, s) => {
        t(Vr(r), s, n, 0)
      }),
      n
    )
  }
  return null
}
const Wr = { 'Content-Type': void 0 }
function Jr(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const de = {
  transitional: Pt,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = c.isObject(t)
      if ((o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)))
        return s && s ? JSON.stringify(Mt(t)) : t
      if (
        c.isArrayBuffer(t) ||
        c.isBuffer(t) ||
        c.isStream(t) ||
        c.isFile(t) ||
        c.isBlob(t)
      )
        return t
      if (c.isArrayBufferView(t)) return t.buffer
      if (c.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let a
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return jr(t, this.formSerializer).toString()
        if ((a = c.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const f = this.env && this.env.FormData
          return fe(a ? { 'files[]': t } : t, f && new f(), this.formSerializer)
        }
      }
      return o || s ? (n.setContentType('application/json', !1), Jr(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || de.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json'
      if (t && c.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s
        try {
          return JSON.parse(t)
        } catch (a) {
          if (i)
            throw a.name === 'SyntaxError'
              ? y.from(a, y.ERR_BAD_RESPONSE, this, null, this.response)
              : a
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: N.classes.FormData, Blob: N.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
c.forEach(['delete', 'get', 'head'], function (t) {
  de.headers[t] = {}
})
c.forEach(['post', 'put', 'patch'], function (t) {
  de.headers[t] = c.merge(Wr)
})
const Fe = de,
  Gr = c.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Kr = (e) => {
    const t = {}
    let n, r, s
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            ;(s = i.indexOf(':')),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Gr[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  et = Symbol('internals')
function J(e) {
  return e && String(e).trim().toLowerCase()
}
function ne(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ne) : String(e)
}
function Xr(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Zr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function ve(e, t, n, r, s) {
  if (c.isFunction(r)) return r.call(this, t, n)
  if ((s && (t = n), !!c.isString(t))) {
    if (c.isString(r)) return t.indexOf(r) !== -1
    if (c.isRegExp(r)) return r.test(t)
  }
}
function Qr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Yr(e, t) {
  const n = c.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i)
      },
      configurable: !0,
    })
  })
}
class he {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const s = this
    function o(a, f, l) {
      const d = J(f)
      if (!d) throw new Error('header name must be a non-empty string')
      const p = c.findKey(s, d)
      ;(!p || s[p] === void 0 || l === !0 || (l === void 0 && s[p] !== !1)) &&
        (s[p || f] = ne(a))
    }
    const i = (a, f) => c.forEach(a, (l, d) => o(l, d, f))
    return (
      c.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : c.isString(t) && (t = t.trim()) && !Zr(t)
        ? i(Kr(t), n)
        : t != null && o(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = J(t)), t)) {
      const r = c.findKey(this, t)
      if (r) {
        const s = this[r]
        if (!n) return s
        if (n === !0) return Xr(s)
        if (c.isFunction(n)) return n.call(this, s, r)
        if (c.isRegExp(n)) return n.exec(s)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = J(t)), t)) {
      const r = c.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || ve(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let s = !1
    function o(i) {
      if (((i = J(i)), i)) {
        const a = c.findKey(r, i)
        a && (!n || ve(r, r[a], a, n)) && (delete r[a], (s = !0))
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), s
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      s = !1
    for (; r--; ) {
      const o = n[r]
      ;(!t || ve(this, this[o], o, t, !0)) && (delete this[o], (s = !0))
    }
    return s
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      c.forEach(this, (s, o) => {
        const i = c.findKey(r, o)
        if (i) {
          ;(n[i] = ne(s)), delete n[o]
          return
        }
        const a = t ? Qr(o) : String(o).trim()
        a !== o && delete n[o], (n[a] = ne(s)), (r[a] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      c.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && c.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((s) => r.set(s)), r
  }
  static accessor(t) {
    const r = (this[et] = this[et] = { accessors: {} }).accessors,
      s = this.prototype
    function o(i) {
      const a = J(i)
      r[a] || (Yr(s, i), (r[a] = !0))
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this
  }
}
he.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
c.freezeMethods(he.prototype)
c.freezeMethods(he)
const C = he
function we(e, t) {
  const n = this || Fe,
    r = t || n,
    s = C.from(r.headers)
  let o = r.data
  return (
    c.forEach(e, function (a) {
      o = a.call(n, o, s.normalize(), t ? t.status : void 0)
    }),
    s.normalize(),
    o
  )
}
function Ft(e) {
  return !!(e && e.__CANCEL__)
}
function Z(e, t, n) {
  y.call(this, e ?? 'canceled', y.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
c.inherits(Z, y, { __CANCEL__: !0 })
function es(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new y(
          'Request failed with status code ' + n.status,
          [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const ts = N.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, s, o, i, a) {
          const f = []
          f.push(n + '=' + encodeURIComponent(r)),
            c.isNumber(s) && f.push('expires=' + new Date(s).toGMTString()),
            c.isString(o) && f.push('path=' + o),
            c.isString(i) && f.push('domain=' + i),
            a === !0 && f.push('secure'),
            (document.cookie = f.join('; '))
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          )
          return r ? decodeURIComponent(r[3]) : null
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function ns(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function rs(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function $t(e, t) {
  return e && !ns(t) ? rs(e, t) : t
}
const ss = N.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function s(o) {
        let i = o
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const a = c.isString(i) ? s(i) : i
          return a.protocol === r.protocol && a.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function os(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function is(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let s = 0,
    o = 0,
    i
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const l = Date.now(),
        d = r[o]
      i || (i = l), (n[s] = f), (r[s] = l)
      let p = o,
        w = 0
      for (; p !== s; ) (w += n[p++]), (p = p % e)
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), l - i < t)) return
      const m = d && l - d
      return m ? Math.round((w * 1e3) / m) : void 0
    }
  )
}
function tt(e, t) {
  let n = 0
  const r = is(50, 250)
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      a = o - n,
      f = r(a),
      l = o <= i
    n = o
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: a,
      rate: f || void 0,
      estimated: f && i && l ? (i - o) / f : void 0,
      event: s,
    }
    ;(d[t ? 'download' : 'upload'] = !0), e(d)
  }
}
const as = typeof XMLHttpRequest < 'u',
  cs =
    as &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data
        const o = C.from(e.headers).normalize(),
          i = e.responseType
        let a
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener('abort', a)
        }
        c.isFormData(s) &&
          (N.isStandardBrowserEnv || N.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType('multipart/form-data;', !1))
        let l = new XMLHttpRequest()
        if (e.auth) {
          const m = e.auth.username || '',
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          o.set('Authorization', 'Basic ' + btoa(m + ':' + h))
        }
        const d = $t(e.baseURL, e.url)
        l.open(e.method.toUpperCase(), Ct(d, e.params, e.paramsSerializer), !0),
          (l.timeout = e.timeout)
        function p() {
          if (!l) return
          const m = C.from(
              'getAllResponseHeaders' in l && l.getAllResponseHeaders()
            ),
            u = {
              data:
                !i || i === 'text' || i === 'json'
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: m,
              config: e,
              request: l,
            }
          es(
            function (v) {
              n(v), f()
            },
            function (v) {
              r(v), f()
            },
            u
          ),
            (l = null)
        }
        if (
          ('onloadend' in l
            ? (l.onloadend = p)
            : (l.onreadystatechange = function () {
                !l ||
                  l.readyState !== 4 ||
                  (l.status === 0 &&
                    !(l.responseURL && l.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(p)
              }),
          (l.onabort = function () {
            l && (r(new y('Request aborted', y.ECONNABORTED, e, l)), (l = null))
          }),
          (l.onerror = function () {
            r(new y('Network Error', y.ERR_NETWORK, e, l)), (l = null)
          }),
          (l.ontimeout = function () {
            let h = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const u = e.transitional || Pt
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage),
              r(
                new y(
                  h,
                  u.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
                  e,
                  l
                )
              ),
              (l = null)
          }),
          N.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || ss(d)) &&
            e.xsrfCookieName &&
            ts.read(e.xsrfCookieName)
          m && o.set(e.xsrfHeaderName, m)
        }
        s === void 0 && o.setContentType(null),
          'setRequestHeader' in l &&
            c.forEach(o.toJSON(), function (h, u) {
              l.setRequestHeader(u, h)
            }),
          c.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          i && i !== 'json' && (l.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            l.addEventListener('progress', tt(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            l.upload &&
            l.upload.addEventListener('progress', tt(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (m) => {
              l &&
                (r(!m || m.type ? new Z(null, e, l) : m), l.abort(), (l = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)))
        const w = os(d)
        if (w && N.protocols.indexOf(w) === -1) {
          r(new y('Unsupported protocol ' + w + ':', y.ERR_BAD_REQUEST, e))
          return
        }
        l.send(s || null)
      })
    },
  re = { http: Pr, xhr: cs }
c.forEach(re, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const ls = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e]
    const { length: t } = e
    let n, r
    for (
      let s = 0;
      s < t && ((n = e[s]), !(r = c.isString(n) ? re[n.toLowerCase()] : n));
      s++
    );
    if (!r)
      throw r === !1
        ? new y(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            c.hasOwnProp(re, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          )
    if (!c.isFunction(r)) throw new TypeError('adapter is not a function')
    return r
  },
  adapters: re,
}
function Se(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Z(null, e)
}
function nt(e) {
  return (
    Se(e),
    (e.headers = C.from(e.headers)),
    (e.data = we.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    ls
      .getAdapter(e.adapter || Fe.adapter)(e)
      .then(
        function (r) {
          return (
            Se(e),
            (r.data = we.call(e, e.transformResponse, r)),
            (r.headers = C.from(r.headers)),
            r
          )
        },
        function (r) {
          return (
            Ft(r) ||
              (Se(e),
              r &&
                r.response &&
                ((r.response.data = we.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = C.from(r.response.headers)))),
            Promise.reject(r)
          )
        }
      )
  )
}
const rt = (e) => (e instanceof C ? e.toJSON() : e)
function j(e, t) {
  t = t || {}
  const n = {}
  function r(l, d, p) {
    return c.isPlainObject(l) && c.isPlainObject(d)
      ? c.merge.call({ caseless: p }, l, d)
      : c.isPlainObject(d)
      ? c.merge({}, d)
      : c.isArray(d)
      ? d.slice()
      : d
  }
  function s(l, d, p) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(l)) return r(void 0, l, p)
    } else return r(l, d, p)
  }
  function o(l, d) {
    if (!c.isUndefined(d)) return r(void 0, d)
  }
  function i(l, d) {
    if (c.isUndefined(d)) {
      if (!c.isUndefined(l)) return r(void 0, l)
    } else return r(void 0, d)
  }
  function a(l, d, p) {
    if (p in t) return r(l, d)
    if (p in e) return r(void 0, l)
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (l, d) => s(rt(l), rt(d), !0),
  }
  return (
    c.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const p = f[d] || s,
        w = p(e[d], t[d], d)
      ;(c.isUndefined(w) && p !== a) || (n[d] = w)
    }),
    n
  )
}
const Lt = '1.4.0',
  $e = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    $e[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const st = {}
$e.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      '[Axios v' +
      Lt +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? '. ' + r : '')
    )
  }
  return (o, i, a) => {
    if (t === !1)
      throw new y(
        s(i, ' has been removed' + (n ? ' in ' + n : '')),
        y.ERR_DEPRECATED
      )
    return (
      n &&
        !st[i] &&
        ((st[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, a) : !0
    )
  }
}
function us(e, t, n) {
  if (typeof e != 'object')
    throw new y('options must be an object', y.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let s = r.length
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o]
    if (i) {
      const a = e[o],
        f = a === void 0 || i(a, o, e)
      if (f !== !0)
        throw new y('option ' + o + ' must be ' + f, y.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new y('Unknown option ' + o, y.ERR_BAD_OPTION)
  }
}
const Ne = { assertOptions: us, validators: $e },
  F = Ne.validators
class oe {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new Ye(), response: new Ye() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = j(this.defaults, n))
    const { transitional: r, paramsSerializer: s, headers: o } = n
    r !== void 0 &&
      Ne.assertOptions(
        r,
        {
          silentJSONParsing: F.transitional(F.boolean),
          forcedJSONParsing: F.transitional(F.boolean),
          clarifyTimeoutError: F.transitional(F.boolean),
        },
        !1
      ),
      s != null &&
        (c.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Ne.assertOptions(
              s,
              { encode: F.function, serialize: F.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let i
    ;(i = o && c.merge(o.common, o[n.method])),
      i &&
        c.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (h) => {
            delete o[h]
          }
        ),
      (n.headers = C.concat(i, o))
    const a = []
    let f = !0
    this.interceptors.request.forEach(function (u) {
      ;(typeof u.runWhen == 'function' && u.runWhen(n) === !1) ||
        ((f = f && u.synchronous), a.unshift(u.fulfilled, u.rejected))
    })
    const l = []
    this.interceptors.response.forEach(function (u) {
      l.push(u.fulfilled, u.rejected)
    })
    let d,
      p = 0,
      w
    if (!f) {
      const h = [nt.bind(this), void 0]
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, l),
          w = h.length,
          d = Promise.resolve(n);
        p < w;

      )
        d = d.then(h[p++], h[p++])
      return d
    }
    w = a.length
    let m = n
    for (p = 0; p < w; ) {
      const h = a[p++],
        u = a[p++]
      try {
        m = h(m)
      } catch (b) {
        u.call(this, b)
        break
      }
    }
    try {
      d = nt.call(this, m)
    } catch (h) {
      return Promise.reject(h)
    }
    for (p = 0, w = l.length; p < w; ) d = d.then(l[p++], l[p++])
    return d
  }
  getUri(t) {
    t = j(this.defaults, t)
    const n = $t(t.baseURL, t.url)
    return Ct(n, t.params, t.paramsSerializer)
  }
}
c.forEach(['delete', 'get', 'head', 'options'], function (t) {
  oe.prototype[t] = function (n, r) {
    return this.request(j(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
c.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        j(a || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      )
    }
  }
  ;(oe.prototype[t] = n()), (oe.prototype[t + 'Form'] = n(!0))
})
const se = oe
class Le {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const r = this
    this.promise.then((s) => {
      if (!r._listeners) return
      let o = r._listeners.length
      for (; o-- > 0; ) r._listeners[o](s)
      r._listeners = null
    }),
      (this.promise.then = (s) => {
        let o
        const i = new Promise((a) => {
          r.subscribe(a), (o = a)
        }).then(s)
        return (
          (i.cancel = function () {
            r.unsubscribe(o)
          }),
          i
        )
      }),
      t(function (o, i, a) {
        r.reason || ((r.reason = new Z(o, i, a)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Le(function (s) {
        t = s
      }),
      cancel: t,
    }
  }
}
const fs = Le
function ds(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function hs(e) {
  return c.isObject(e) && e.isAxiosError === !0
}
const ke = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(ke).forEach(([e, t]) => {
  ke[t] = e
})
const ps = ke
function Dt(e) {
  const t = new se(e),
    n = wt(se.prototype.request, t)
  return (
    c.extend(n, se.prototype, t, { allOwnKeys: !0 }),
    c.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Dt(j(e, s))
    }),
    n
  )
}
const S = Dt(Fe)
S.Axios = se
S.CanceledError = Z
S.CancelToken = fs
S.isCancel = Ft
S.VERSION = Lt
S.toFormData = fe
S.AxiosError = y
S.Cancel = S.CanceledError
S.all = function (t) {
  return Promise.all(t)
}
S.spread = ds
S.isAxiosError = hs
S.mergeConfig = j
S.AxiosHeaders = C
S.formToJSON = (e) => Mt(c.isHTMLForm(e) ? new FormData(e) : e)
S.HttpStatusCode = ps
S.default = S
const ms = S,
  bs = 'Linux',
  gs = 'https://api.github.com/repos/witnet/my-wit-wallet/releases/latest'
function ys(e) {
  const t = ['Win', 'Mac', 'Linux', 'MacIntel'],
    n = e.platform
  return t.find((r) => n.includes(r)) || bs
}
async function vs(e) {
  return await ms.get(gs).then(async (t) => {
    const n = await ys(e).toLowerCase(),
      r = await t.data.assets.find((a) =>
        a.browser_download_url.includes('myWitWallet.dmg')
      ),
      s = await t.data.assets.find((a) =>
        a.browser_download_url.includes('linux.tar.gz')
      ),
      o = await t.data.assets.find((a) =>
        a.browser_download_url.includes('myWitWallet-windows.zip')
      )
    return {
      linux: {
        platform: 'GNU / Linux',
        releaseUrl: s.browser_download_url,
        downloadName: s.name,
      },
      win: {
        platform: 'Windows',
        releaseUrl: o.browser_download_url,
        downloadName: o.name,
      },
      mac: {
        platform: 'Mac OS',
        releaseUrl: r.browser_download_url,
        downloadName: o.name,
      },
    }[n]
  })
}
const ws = ['href', 'download'],
  Ss = {
    key: 1,
    class: 'link',
    href: 'https://github.com/witnet/my-wit-wallet/releases/latest',
  },
  _s = {
    __name: 'DownloadBtn',
    async setup(e) {
      let t, n
      const r = (([t, n] = Gt(() => vs(navigator))), (t = await t), n(), t)
      return (s, o) => {
        const i = lt('i18n-t'),
          a = Qn
        return g(r).platform
          ? (R(),
            D(
              'a',
              {
                key: 0,
                class: 'link',
                href: g(r).releaseUrl,
                download: g(r).downloadName,
              },
              [
                z(
                  a,
                  { class: 'btn', type: 'primary' },
                  {
                    default: L(() => [
                      z(
                        i,
                        { keypath: 'download', tag: 'span' },
                        {
                          platform: L(() => [
                            k('span', null, Ee(g(r).platform), 1),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ),
              ],
              8,
              ws
            ))
          : (R(),
            D('a', Ss, [
              z(
                a,
                { class: 'btn', type: 'primary' },
                { default: L(() => [Kt(Ee(s.$t('head.title')), 1)]), _: 1 }
              ),
            ]))
      }
    },
  },
  Es = '' + new URL('my-wit-wallet-logo.fffe32be.svg', import.meta.url).href,
  xs =
    '' + new URL('my-wit-wallet-app-image.c172fb7d.png', import.meta.url).href
const Rs = {
    head() {
      return {
        name: 'index',
        title: this.$t('head.title'),
        meta: [
          { name: this.$t('head.title'), content: this.$t('description') },
        ],
      }
    },
  },
  As = { class: 'container' },
  Os = { class: 'left-column' },
  Ns = k(
    'div',
    { class: 'header' },
    [k('img', { src: Es, alt: 'myWitWallet logo', class: 'logo' })],
    -1
  ),
  ks = k('br', null, null, -1),
  Ts = { class: 'description' },
  Bs = { class: 'links' },
  Cs = k(
    'a',
    { href: 'https://github.com/witnet/my-wit-wallet', target: '_blanc' },
    ' Github ',
    -1
  ),
  Ps = k('img', { class: 'app-image', src: xs, alt: 'app image' }, null, -1)
function Ms(e, t, n, r, s, o) {
  const i = lt('i18n-t'),
    a = _s
  return (
    R(),
    D('div', As, [
      k('div', Os, [
        Ns,
        z(
          i,
          { keypath: 'title', tag: 'h2', class: 'title' },
          { default: L(() => [ks]), _: 1 }
        ),
        k('p', Ts, Ee(e.$t('description')), 1),
        k('div', Bs, [z(a)]),
        z(
          i,
          { keypath: 'source_code', tag: 'p', class: 'footer' },
          { github: L(() => [Cs]), _: 1 }
        ),
      ]),
      Ps,
    ])
  )
}
const $s = Xt(Rs, [['render', Ms]])
export { $s as default }
