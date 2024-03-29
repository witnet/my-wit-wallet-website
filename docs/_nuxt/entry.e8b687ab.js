function zs(e, t) {
  const n = Object.create(null),
    r = e.split(',')
  for (let s = 0; s < r.length; s++) n[r[s]] = !0
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s]
}
const me = {},
  on = [],
  at = () => {},
  Vc = () => !1,
  Kc = /^on[^a-z]/,
  Qn = (e) => Kc.test(e),
  eo = (e) => e.startsWith('onUpdate:'),
  ke = Object.assign,
  to = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Yc = Object.prototype.hasOwnProperty,
  ae = (e, t) => Yc.call(e, t),
  J = Array.isArray,
  an = (e) => Zn(e) === '[object Map]',
  Nl = (e) => Zn(e) === '[object Set]',
  Gc = (e) => Zn(e) === '[object RegExp]',
  Z = (e) => typeof e == 'function',
  ve = (e) => typeof e == 'string',
  no = (e) => typeof e == 'symbol',
  pe = (e) => e !== null && typeof e == 'object',
  ro = (e) => pe(e) && Z(e.then) && Z(e.catch),
  Ol = Object.prototype.toString,
  Zn = (e) => Ol.call(e),
  Xc = (e) => Zn(e).slice(8, -1),
  Sl = (e) => Zn(e) === '[object Object]',
  so = (e) =>
    ve(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Sn = zs(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Fr = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  qc = /-(\w)/g,
  _t = Fr((e) => e.replace(qc, (t, n) => (n ? n.toUpperCase() : ''))),
  Jc = /\B([A-Z])/g,
  bn = Fr((e) => e.replace(Jc, '-$1').toLowerCase()),
  Mr = Fr((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  zr = Fr((e) => (e ? `on${Mr(e)}` : '')),
  Bn = (e, t) => !Object.is(e, t),
  Fn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  vr = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Qc = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  Fl = (e) => {
    const t = ve(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Wo
const _s = () =>
  Wo ||
  (Wo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function xr(e) {
  if (J(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = ve(r) ? tu(r) : xr(r)
      if (s) for (const o in s) t[o] = s[o]
    }
    return t
  } else {
    if (ve(e)) return e
    if (pe(e)) return e
  }
}
const Zc = /;(?![^(]*\))/g,
  zc = /:([^]+)/,
  eu = new RegExp('\\/\\*.*?\\*\\/', 'gs')
function tu(e) {
  const t = {}
  return (
    e
      .replace(eu, '')
      .split(Zc)
      .forEach((n) => {
        if (n) {
          const r = n.split(zc)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function Dr(e) {
  let t = ''
  if (ve(e)) t = e
  else if (J(e))
    for (let n = 0; n < e.length; n++) {
      const r = Dr(e[n])
      r && (t += r + ' ')
    }
  else if (pe(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
function sy(e) {
  if (!e) return null
  let { class: t, style: n } = e
  return t && !ve(t) && (e.class = Dr(t)), n && (e.style = xr(n)), e
}
const nu =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  ru = zs(nu)
function Ml(e) {
  return !!e || e === ''
}
const oy = (e) =>
    ve(e)
      ? e
      : e == null
      ? ''
      : J(e) || (pe(e) && (e.toString === Ol || !Z(e.toString)))
      ? JSON.stringify(e, xl, 2)
      : String(e),
  xl = (e, t) =>
    t && t.__v_isRef
      ? xl(e, t.value)
      : an(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [r, s]) => ((n[`${r} =>`] = s), n),
            {}
          ),
        }
      : Nl(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : pe(t) && !J(t) && !Sl(t)
      ? String(t)
      : t
let rt
class Dl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = rt),
      !t && rt && (this.index = (rt.scopes || (rt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = rt
      try {
        return (rt = this), t()
      } finally {
        rt = n
      }
    }
  }
  on() {
    rt = this
  }
  off() {
    rt = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, r
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop()
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function su(e) {
  return new Dl(e)
}
function ou(e, t = rt) {
  t && t.active && t.effects.push(e)
}
function au() {
  return rt
}
const oo = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  $l = (e) => (e.w & Dt) > 0,
  Hl = (e) => (e.n & Dt) > 0,
  lu = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Dt
  },
  iu = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let r = 0; r < t.length; r++) {
        const s = t[r]
        $l(s) && !Hl(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~Dt), (s.n &= ~Dt)
      }
      t.length = n
    }
  },
  Er = new WeakMap()
let An = 0,
  Dt = 1
const ys = 30
let st
const Xt = Symbol(''),
  bs = Symbol('')
class ao {
  constructor(t, n = null, r) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ou(this, r)
  }
  run() {
    if (!this.active) return this.fn()
    let t = st,
      n = Ft
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = st),
        (st = this),
        (Ft = !0),
        (Dt = 1 << ++An),
        An <= ys ? lu(this) : jo(this),
        this.fn()
      )
    } finally {
      An <= ys && iu(this),
        (Dt = 1 << --An),
        (st = this.parent),
        (Ft = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    st === this
      ? (this.deferStop = !0)
      : this.active &&
        (jo(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function jo(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let Ft = !0
const Ul = []
function vn() {
  Ul.push(Ft), (Ft = !1)
}
function En() {
  const e = Ul.pop()
  Ft = e === void 0 ? !0 : e
}
function Ye(e, t, n) {
  if (Ft && st) {
    let r = Er.get(e)
    r || Er.set(e, (r = new Map()))
    let s = r.get(n)
    s || r.set(n, (s = oo())), Wl(s)
  }
}
function Wl(e, t) {
  let n = !1
  An <= ys ? Hl(e) || ((e.n |= Dt), (n = !$l(e))) : (n = !e.has(st)),
    n && (e.add(st), st.deps.push(e))
}
function Ct(e, t, n, r, s, o) {
  const a = Er.get(e)
  if (!a) return
  let i = []
  if (t === 'clear') i = [...a.values()]
  else if (n === 'length' && J(e)) {
    const l = Number(r)
    a.forEach((c, d) => {
      ;(d === 'length' || d >= l) && i.push(c)
    })
  } else
    switch ((n !== void 0 && i.push(a.get(n)), t)) {
      case 'add':
        J(e)
          ? so(n) && i.push(a.get('length'))
          : (i.push(a.get(Xt)), an(e) && i.push(a.get(bs)))
        break
      case 'delete':
        J(e) || (i.push(a.get(Xt)), an(e) && i.push(a.get(bs)))
        break
      case 'set':
        an(e) && i.push(a.get(Xt))
        break
    }
  if (i.length === 1) i[0] && vs(i[0])
  else {
    const l = []
    for (const c of i) c && l.push(...c)
    vs(oo(l))
  }
}
function vs(e, t) {
  const n = J(e) ? e : [...e]
  for (const r of n) r.computed && Bo(r)
  for (const r of n) r.computed || Bo(r)
}
function Bo(e, t) {
  ;(e !== st || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
function cu(e, t) {
  var n
  return (n = Er.get(e)) == null ? void 0 : n.get(t)
}
const uu = zs('__proto__,__v_isRef,__isVue'),
  jl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(no)
  ),
  fu = lo(),
  du = lo(!1, !0),
  hu = lo(!0),
  Vo = pu()
function pu() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const r = le(this)
        for (let o = 0, a = this.length; o < a; o++) Ye(r, 'get', o + '')
        const s = r[t](...n)
        return s === -1 || s === !1 ? r[t](...n.map(le)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        vn()
        const r = le(this)[t].apply(this, n)
        return En(), r
      }
    }),
    e
  )
}
function mu(e) {
  const t = le(this)
  return Ye(t, 'has', e), t.hasOwnProperty(e)
}
function lo(e = !1, t = !1) {
  return function (r, s, o) {
    if (s === '__v_isReactive') return !e
    if (s === '__v_isReadonly') return e
    if (s === '__v_isShallow') return t
    if (s === '__v_raw' && o === (e ? (t ? Nu : Gl) : t ? Yl : Kl).get(r))
      return r
    const a = J(r)
    if (!e) {
      if (a && ae(Vo, s)) return Reflect.get(Vo, s, o)
      if (s === 'hasOwnProperty') return mu
    }
    const i = Reflect.get(r, s, o)
    return (no(s) ? jl.has(s) : uu(s)) || (e || Ye(r, 'get', s), t)
      ? i
      : we(i)
      ? a && so(s)
        ? i
        : i.value
      : pe(i)
      ? e
        ? ql(i)
        : it(i)
      : i
  }
}
const gu = Bl(),
  _u = Bl(!0)
function Bl(e = !1) {
  return function (n, r, s, o) {
    let a = n[r]
    if (Jt(a) && we(a) && !we(s)) return !1
    if (
      !e &&
      (!Tr(s) && !Jt(s) && ((a = le(a)), (s = le(s))), !J(n) && we(a) && !we(s))
    )
      return (a.value = s), !0
    const i = J(n) && so(r) ? Number(r) < n.length : ae(n, r),
      l = Reflect.set(n, r, s, o)
    return (
      n === le(o) && (i ? Bn(s, a) && Ct(n, 'set', r, s) : Ct(n, 'add', r, s)),
      l
    )
  }
}
function yu(e, t) {
  const n = ae(e, t)
  e[t]
  const r = Reflect.deleteProperty(e, t)
  return r && n && Ct(e, 'delete', t, void 0), r
}
function bu(e, t) {
  const n = Reflect.has(e, t)
  return (!no(t) || !jl.has(t)) && Ye(e, 'has', t), n
}
function vu(e) {
  return Ye(e, 'iterate', J(e) ? 'length' : Xt), Reflect.ownKeys(e)
}
const Vl = { get: fu, set: gu, deleteProperty: yu, has: bu, ownKeys: vu },
  Eu = {
    get: hu,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  Tu = ke({}, Vl, { get: du, set: _u }),
  io = (e) => e,
  $r = (e) => Reflect.getPrototypeOf(e)
function sr(e, t, n = !1, r = !1) {
  e = e.__v_raw
  const s = le(e),
    o = le(t)
  n || (t !== o && Ye(s, 'get', t), Ye(s, 'get', o))
  const { has: a } = $r(s),
    i = r ? io : n ? fo : Vn
  if (a.call(s, t)) return i(e.get(t))
  if (a.call(s, o)) return i(e.get(o))
  e !== s && e.get(t)
}
function or(e, t = !1) {
  const n = this.__v_raw,
    r = le(n),
    s = le(e)
  return (
    t || (e !== s && Ye(r, 'has', e), Ye(r, 'has', s)),
    e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function ar(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Ye(le(e), 'iterate', Xt), Reflect.get(e, 'size', e)
  )
}
function Ko(e) {
  e = le(e)
  const t = le(this)
  return $r(t).has.call(t, e) || (t.add(e), Ct(t, 'add', e, e)), this
}
function Yo(e, t) {
  t = le(t)
  const n = le(this),
    { has: r, get: s } = $r(n)
  let o = r.call(n, e)
  o || ((e = le(e)), (o = r.call(n, e)))
  const a = s.call(n, e)
  return (
    n.set(e, t), o ? Bn(t, a) && Ct(n, 'set', e, t) : Ct(n, 'add', e, t), this
  )
}
function Go(e) {
  const t = le(this),
    { has: n, get: r } = $r(t)
  let s = n.call(t, e)
  s || ((e = le(e)), (s = n.call(t, e))), r && r.call(t, e)
  const o = t.delete(e)
  return s && Ct(t, 'delete', e, void 0), o
}
function Xo() {
  const e = le(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Ct(e, 'clear', void 0, void 0), n
}
function lr(e, t) {
  return function (r, s) {
    const o = this,
      a = o.__v_raw,
      i = le(a),
      l = t ? io : e ? fo : Vn
    return (
      !e && Ye(i, 'iterate', Xt), a.forEach((c, d) => r.call(s, l(c), l(d), o))
    )
  }
}
function ir(e, t, n) {
  return function (...r) {
    const s = this.__v_raw,
      o = le(s),
      a = an(o),
      i = e === 'entries' || (e === Symbol.iterator && a),
      l = e === 'keys' && a,
      c = s[e](...r),
      d = n ? io : t ? fo : Vn
    return (
      !t && Ye(o, 'iterate', l ? bs : Xt),
      {
        next() {
          const { value: h, done: g } = c.next()
          return g
            ? { value: h, done: g }
            : { value: i ? [d(h[0]), d(h[1])] : d(h), done: g }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Rt(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function Cu() {
  const e = {
      get(o) {
        return sr(this, o)
      },
      get size() {
        return ar(this)
      },
      has: or,
      add: Ko,
      set: Yo,
      delete: Go,
      clear: Xo,
      forEach: lr(!1, !1),
    },
    t = {
      get(o) {
        return sr(this, o, !1, !0)
      },
      get size() {
        return ar(this)
      },
      has: or,
      add: Ko,
      set: Yo,
      delete: Go,
      clear: Xo,
      forEach: lr(!1, !0),
    },
    n = {
      get(o) {
        return sr(this, o, !0)
      },
      get size() {
        return ar(this, !0)
      },
      has(o) {
        return or.call(this, o, !0)
      },
      add: Rt('add'),
      set: Rt('set'),
      delete: Rt('delete'),
      clear: Rt('clear'),
      forEach: lr(!0, !1),
    },
    r = {
      get(o) {
        return sr(this, o, !0, !0)
      },
      get size() {
        return ar(this, !0)
      },
      has(o) {
        return or.call(this, o, !0)
      },
      add: Rt('add'),
      set: Rt('set'),
      delete: Rt('delete'),
      clear: Rt('clear'),
      forEach: lr(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = ir(o, !1, !1)),
        (n[o] = ir(o, !0, !1)),
        (t[o] = ir(o, !1, !0)),
        (r[o] = ir(o, !0, !0))
    }),
    [e, n, t, r]
  )
}
const [wu, Lu, ku, Ru] = Cu()
function co(e, t) {
  const n = t ? (e ? Ru : ku) : e ? Lu : wu
  return (r, s, o) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? r
      : Reflect.get(ae(n, s) && s in r ? n : r, s, o)
}
const Iu = { get: co(!1, !1) },
  Pu = { get: co(!1, !0) },
  Au = { get: co(!0, !1) },
  Kl = new WeakMap(),
  Yl = new WeakMap(),
  Gl = new WeakMap(),
  Nu = new WeakMap()
function Ou(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Su(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ou(Xc(e))
}
function it(e) {
  return Jt(e) ? e : uo(e, !1, Vl, Iu, Kl)
}
function Xl(e) {
  return uo(e, !1, Tu, Pu, Yl)
}
function ql(e) {
  return uo(e, !0, Eu, Au, Gl)
}
function uo(e, t, n, r, s) {
  if (!pe(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = s.get(e)
  if (o) return o
  const a = Su(e)
  if (a === 0) return e
  const i = new Proxy(e, a === 2 ? r : n)
  return s.set(e, i), i
}
function ln(e) {
  return Jt(e) ? ln(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Jt(e) {
  return !!(e && e.__v_isReadonly)
}
function Tr(e) {
  return !!(e && e.__v_isShallow)
}
function Jl(e) {
  return ln(e) || Jt(e)
}
function le(e) {
  const t = e && e.__v_raw
  return t ? le(t) : e
}
function Ql(e) {
  return vr(e, '__v_skip', !0), e
}
const Vn = (e) => (pe(e) ? it(e) : e),
  fo = (e) => (pe(e) ? ql(e) : e)
function Zl(e) {
  Ft && st && ((e = le(e)), Wl(e.dep || (e.dep = oo())))
}
function zl(e, t) {
  e = le(e)
  const n = e.dep
  n && vs(n)
}
function we(e) {
  return !!(e && e.__v_isRef === !0)
}
function Re(e) {
  return ei(e, !1)
}
function dn(e) {
  return ei(e, !0)
}
function ei(e, t) {
  return we(e) ? e : new Fu(e, t)
}
class Fu {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : le(t)),
      (this._value = n ? t : Vn(t))
  }
  get value() {
    return Zl(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || Tr(t) || Jt(t)
    ;(t = n ? t : le(t)),
      Bn(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Vn(t)), zl(this))
  }
}
function Ae(e) {
  return we(e) ? e.value : e
}
const Mu = {
  get: (e, t, n) => Ae(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t]
    return we(s) && !we(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, r)
  },
}
function ti(e) {
  return ln(e) ? e : new Proxy(e, Mu)
}
class xu {
  constructor(t, n, r) {
    ;(this._object = t),
      (this._key = n),
      (this._defaultValue = r),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
  get dep() {
    return cu(le(this._object), this._key)
  }
}
class Du {
  constructor(t) {
    ;(this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0)
  }
  get value() {
    return this._getter()
  }
}
function ni(e, t, n) {
  return we(e)
    ? e
    : Z(e)
    ? new Du(e)
    : pe(e) && arguments.length > 1
    ? $u(e, t, n)
    : Re(e)
}
function $u(e, t, n) {
  const r = e[t]
  return we(r) ? r : new xu(e, t, n)
}
class Hu {
  constructor(t, n, r, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new ao(t, () => {
        this._dirty || ((this._dirty = !0), zl(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = le(this)
    return (
      Zl(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function Uu(e, t, n = !1) {
  let r, s
  const o = Z(e)
  return (
    o ? ((r = e), (s = at)) : ((r = e.get), (s = e.set)),
    new Hu(r, s, o || !s, n)
  )
}
function ay(e, ...t) {}
function Mt(e, t, n, r) {
  let s
  try {
    s = r ? e(...r) : e()
  } catch (o) {
    Tn(o, t, n)
  }
  return s
}
function ze(e, t, n, r) {
  if (Z(e)) {
    const o = Mt(e, t, n, r)
    return (
      o &&
        ro(o) &&
        o.catch((a) => {
          Tn(a, t, n)
        }),
      o
    )
  }
  const s = []
  for (let o = 0; o < e.length; o++) s.push(ze(e[o], t, n, r))
  return s
}
function Tn(e, t, n, r = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const a = t.proxy,
      i = n
    for (; o; ) {
      const c = o.ec
      if (c) {
        for (let d = 0; d < c.length; d++) if (c[d](e, a, i) === !1) return
      }
      o = o.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      Mt(l, null, 10, [e, a, i])
      return
    }
  }
  Wu(e, n, s, r)
}
function Wu(e, t, n, r = !0) {
  console.error(e)
}
let Kn = !1,
  Es = !1
const De = []
let gt = 0
const cn = []
let vt = null,
  Kt = 0
const ri = Promise.resolve()
let ho = null
function Cn(e) {
  const t = ho || ri
  return e ? t.then(this ? e.bind(this) : e) : t
}
function ju(e) {
  let t = gt + 1,
    n = De.length
  for (; t < n; ) {
    const r = (t + n) >>> 1
    Yn(De[r]) < e ? (t = r + 1) : (n = r)
  }
  return t
}
function Hr(e) {
  ;(!De.length || !De.includes(e, Kn && e.allowRecurse ? gt + 1 : gt)) &&
    (e.id == null ? De.push(e) : De.splice(ju(e.id), 0, e), si())
}
function si() {
  !Kn && !Es && ((Es = !0), (ho = ri.then(ai)))
}
function Bu(e) {
  const t = De.indexOf(e)
  t > gt && De.splice(t, 1)
}
function oi(e) {
  J(e)
    ? cn.push(...e)
    : (!vt || !vt.includes(e, e.allowRecurse ? Kt + 1 : Kt)) && cn.push(e),
    si()
}
function qo(e, t = Kn ? gt + 1 : 0) {
  for (; t < De.length; t++) {
    const n = De[t]
    n && n.pre && (De.splice(t, 1), t--, n())
  }
}
function Cr(e) {
  if (cn.length) {
    const t = [...new Set(cn)]
    if (((cn.length = 0), vt)) {
      vt.push(...t)
      return
    }
    for (vt = t, vt.sort((n, r) => Yn(n) - Yn(r)), Kt = 0; Kt < vt.length; Kt++)
      vt[Kt]()
    ;(vt = null), (Kt = 0)
  }
}
const Yn = (e) => (e.id == null ? 1 / 0 : e.id),
  Vu = (e, t) => {
    const n = Yn(e) - Yn(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function ai(e) {
  ;(Es = !1), (Kn = !0), De.sort(Vu)
  const t = at
  try {
    for (gt = 0; gt < De.length; gt++) {
      const n = De[gt]
      n && n.active !== !1 && Mt(n, null, 14)
    }
  } finally {
    ;(gt = 0),
      (De.length = 0),
      Cr(),
      (Kn = !1),
      (ho = null),
      (De.length || cn.length) && ai()
  }
}
function Ku(e, t, ...n) {
  if (e.isUnmounted) return
  const r = e.vnode.props || me
  let s = n
  const o = t.startsWith('update:'),
    a = o && t.slice(7)
  if (a && a in r) {
    const d = `${a === 'modelValue' ? 'model' : a}Modifiers`,
      { number: h, trim: g } = r[d] || me
    g && (s = n.map((v) => (ve(v) ? v.trim() : v))), h && (s = n.map(Qc))
  }
  let i,
    l = r[(i = zr(t))] || r[(i = zr(_t(t)))]
  !l && o && (l = r[(i = zr(bn(t)))]), l && ze(l, e, 6, s)
  const c = r[i + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[i]) return
    ;(e.emitted[i] = !0), ze(c, e, 6, s)
  }
}
function li(e, t, n = !1) {
  const r = t.emitsCache,
    s = r.get(e)
  if (s !== void 0) return s
  const o = e.emits
  let a = {},
    i = !1
  if (!Z(e)) {
    const l = (c) => {
      const d = li(c, t, !0)
      d && ((i = !0), ke(a, d))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !o && !i
    ? (pe(e) && r.set(e, null), null)
    : (J(o) ? o.forEach((l) => (a[l] = null)) : ke(a, o),
      pe(e) && r.set(e, a),
      a)
}
function Ur(e, t) {
  return !e || !Qn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, bn(t)) || ae(e, t))
}
let Fe = null,
  Wr = null
function wr(e) {
  const t = Fe
  return (Fe = e), (Wr = (e && e.type.__scopeId) || null), t
}
function ly(e) {
  Wr = e
}
function iy() {
  Wr = null
}
function ii(e, t = Fe, n) {
  if (!t || e._n) return e
  const r = (...s) => {
    r._d && ia(-1)
    const o = wr(t)
    let a
    try {
      a = e(...s)
    } finally {
      wr(o), r._d && ia(1)
    }
    return a
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function es(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [a],
    slots: i,
    attrs: l,
    emit: c,
    render: d,
    renderCache: h,
    data: g,
    setupState: v,
    ctx: E,
    inheritAttrs: w,
  } = e
  let I, p
  const m = wr(e)
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r
      ;(I = Qe(d.call(_, _, h, o, v, g, E))), (p = l)
    } else {
      const _ = t
      ;(I = Qe(
        _.length > 1 ? _(o, { attrs: l, slots: i, emit: c }) : _(o, null)
      )),
        (p = t.props ? l : Gu(l))
    }
  } catch (_) {
    ;(xn.length = 0), Tn(_, e, 1), (I = _e(We))
  }
  let C = I
  if (p && w !== !1) {
    const _ = Object.keys(p),
      { shapeFlag: T } = C
    _.length && T & 7 && (a && _.some(eo) && (p = Xu(p, a)), (C = wt(C, p)))
  }
  return (
    n.dirs && ((C = wt(C)), (C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (C.transition = n.transition),
    (I = C),
    wr(m),
    I
  )
}
function Yu(e) {
  let t
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    if (pn(r)) {
      if (r.type !== We || r.children === 'v-if') {
        if (t) return
        t = r
      }
    } else return
  }
  return t
}
const Gu = (e) => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Qn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  Xu = (e, t) => {
    const n = {}
    for (const r in e) (!eo(r) || !(r.slice(9) in t)) && (n[r] = e[r])
    return n
  }
function qu(e, t, n) {
  const { props: r, children: s, component: o } = e,
    { props: a, children: i, patchFlag: l } = t,
    c = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? Jo(r, a, c) : !!a
    if (l & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const g = d[h]
        if (a[g] !== r[g] && !Ur(c, g)) return !0
      }
    }
  } else
    return (s || i) && (!i || !i.$stable)
      ? !0
      : r === a
      ? !1
      : r
      ? a
        ? Jo(r, a, c)
        : !0
      : !!a
  return !1
}
function Jo(e, t, n) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let s = 0; s < r.length; s++) {
    const o = r[s]
    if (t[o] !== e[o] && !Ur(n, o)) return !0
  }
  return !1
}
function po({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const ci = (e) => e.__isSuspense,
  Ju = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, n, r, s, o, a, i, l, c) {
      e == null ? Qu(t, n, r, s, o, a, i, l, c) : Zu(e, t, n, r, s, a, i, l, c)
    },
    hydrate: zu,
    create: mo,
    normalize: ef,
  },
  ui = Ju
function Gn(e, t) {
  const n = e.props && e.props[t]
  Z(n) && n()
}
function Qu(e, t, n, r, s, o, a, i, l) {
  const {
      p: c,
      o: { createElement: d },
    } = l,
    h = d('div'),
    g = (e.suspense = mo(e, s, r, t, h, n, o, a, i, l))
  c(null, (g.pendingBranch = e.ssContent), h, null, r, g, o, a),
    g.deps > 0
      ? (Gn(e, 'onPending'),
        Gn(e, 'onFallback'),
        c(null, e.ssFallback, t, n, r, null, o, a),
        un(g, e.ssFallback))
      : g.resolve(!1, !0)
}
function Zu(e, t, n, r, s, o, a, i, { p: l, um: c, o: { createElement: d } }) {
  const h = (t.suspense = e.suspense)
  ;(h.vnode = t), (t.el = e.el)
  const g = t.ssContent,
    v = t.ssFallback,
    { activeBranch: E, pendingBranch: w, isInFallback: I, isHydrating: p } = h
  if (w)
    (h.pendingBranch = g),
      ot(g, w)
        ? (l(w, g, h.hiddenContainer, null, s, h, o, a, i),
          h.deps <= 0
            ? h.resolve()
            : I && (l(E, v, n, r, s, null, o, a, i), un(h, v)))
        : (h.pendingId++,
          p ? ((h.isHydrating = !1), (h.activeBranch = w)) : c(w, s, h),
          (h.deps = 0),
          (h.effects.length = 0),
          (h.hiddenContainer = d('div')),
          I
            ? (l(null, g, h.hiddenContainer, null, s, h, o, a, i),
              h.deps <= 0
                ? h.resolve()
                : (l(E, v, n, r, s, null, o, a, i), un(h, v)))
            : E && ot(g, E)
            ? (l(E, g, n, r, s, h, o, a, i), h.resolve(!0))
            : (l(null, g, h.hiddenContainer, null, s, h, o, a, i),
              h.deps <= 0 && h.resolve()))
  else if (E && ot(g, E)) l(E, g, n, r, s, h, o, a, i), un(h, g)
  else if (
    (Gn(t, 'onPending'),
    (h.pendingBranch = g),
    h.pendingId++,
    l(null, g, h.hiddenContainer, null, s, h, o, a, i),
    h.deps <= 0)
  )
    h.resolve()
  else {
    const { timeout: m, pendingId: C } = h
    m > 0
      ? setTimeout(() => {
          h.pendingId === C && h.fallback(v)
        }, m)
      : m === 0 && h.fallback(v)
  }
}
function mo(e, t, n, r, s, o, a, i, l, c, d = !1) {
  const {
    p: h,
    m: g,
    um: v,
    n: E,
    o: { parentNode: w, remove: I },
  } = c
  let p
  const m = tf(e)
  m && t != null && t.pendingBranch && ((p = t.pendingId), t.deps++)
  const C = e.props ? Fl(e.props.timeout) : void 0,
    _ = {
      vnode: e,
      parent: t,
      parentComponent: n,
      isSVG: a,
      container: r,
      hiddenContainer: s,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof C == 'number' ? C : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: d,
      isUnmounted: !1,
      effects: [],
      resolve(T = !1, A = !1) {
        const {
          vnode: N,
          activeBranch: O,
          pendingBranch: D,
          pendingId: W,
          effects: G,
          parentComponent: U,
          container: X,
        } = _
        if (_.isHydrating) _.isHydrating = !1
        else if (!T) {
          const Q = O && D.transition && D.transition.mode === 'out-in'
          Q &&
            (O.transition.afterLeave = () => {
              W === _.pendingId && g(D, X, ee, 0)
            })
          let { anchor: ee } = _
          O && ((ee = E(O)), v(O, U, _, !0)), Q || g(D, X, ee, 0)
        }
        un(_, D), (_.pendingBranch = null), (_.isInFallback = !1)
        let V = _.parent,
          fe = !1
        for (; V; ) {
          if (V.pendingBranch) {
            V.effects.push(...G), (fe = !0)
            break
          }
          V = V.parent
        }
        fe || oi(G),
          (_.effects = []),
          m &&
            t &&
            t.pendingBranch &&
            p === t.pendingId &&
            (t.deps--, t.deps === 0 && !A && t.resolve()),
          Gn(N, 'onResolve')
      },
      fallback(T) {
        if (!_.pendingBranch) return
        const {
          vnode: A,
          activeBranch: N,
          parentComponent: O,
          container: D,
          isSVG: W,
        } = _
        Gn(A, 'onFallback')
        const G = E(N),
          U = () => {
            _.isInFallback && (h(null, T, D, G, O, null, W, i, l), un(_, T))
          },
          X = T.transition && T.transition.mode === 'out-in'
        X && (N.transition.afterLeave = U),
          (_.isInFallback = !0),
          v(N, O, null, !0),
          X || U()
      },
      move(T, A, N) {
        _.activeBranch && g(_.activeBranch, T, A, N), (_.container = T)
      },
      next() {
        return _.activeBranch && E(_.activeBranch)
      },
      registerDep(T, A) {
        const N = !!_.pendingBranch
        N && _.deps++
        const O = T.vnode.el
        T.asyncDep
          .catch((D) => {
            Tn(D, T, 0)
          })
          .then((D) => {
            if (T.isUnmounted || _.isUnmounted || _.pendingId !== T.suspenseId)
              return
            T.asyncResolved = !0
            const { vnode: W } = T
            Rs(T, D, !1), O && (W.el = O)
            const G = !O && T.subTree.el
            A(T, W, w(O || T.subTree.el), O ? null : E(T.subTree), _, a, l),
              G && I(G),
              po(T, W.el),
              N && --_.deps === 0 && _.resolve()
          })
      },
      unmount(T, A) {
        ;(_.isUnmounted = !0),
          _.activeBranch && v(_.activeBranch, n, T, A),
          _.pendingBranch && v(_.pendingBranch, n, T, A)
      },
    }
  return _
}
function zu(e, t, n, r, s, o, a, i, l) {
  const c = (t.suspense = mo(
      t,
      r,
      n,
      e.parentNode,
      document.createElement('div'),
      null,
      s,
      o,
      a,
      i,
      !0
    )),
    d = l(e, (c.pendingBranch = t.ssContent), n, c, o, a)
  return c.deps === 0 && c.resolve(!1, !0), d
}
function ef(e) {
  const { shapeFlag: t, children: n } = e,
    r = t & 32
  ;(e.ssContent = Qo(r ? n.default : n)),
    (e.ssFallback = r ? Qo(n.fallback) : _e(We))
}
function Qo(e) {
  let t
  if (Z(e)) {
    const n = hn && e._c
    n && ((e._d = !1), Et()), (e = e()), n && ((e._d = !0), (t = Ze), Fi())
  }
  return (
    J(e) && (e = Yu(e)),
    (e = Qe(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)),
    e
  )
}
function fi(e, t) {
  t && t.pendingBranch
    ? J(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : oi(e)
}
function un(e, t) {
  e.activeBranch = t
  const { vnode: n, parentComponent: r } = e,
    s = (n.el = t.el)
  r && r.subTree === n && ((r.vnode.el = s), po(r, s))
}
function tf(e) {
  var t
  return (
    ((t = e.props) == null ? void 0 : t.suspensible) != null &&
    e.props.suspensible !== !1
  )
}
function nf(e, t) {
  return go(e, null, t)
}
const cr = {}
function Tt(e, t, n) {
  return go(e, t, n)
}
function go(
  e,
  t,
  { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: a } = me
) {
  var i
  const l = au() === ((i = Ce) == null ? void 0 : i.scope) ? Ce : null
  let c,
    d = !1,
    h = !1
  if (
    (we(e)
      ? ((c = () => e.value), (d = Tr(e)))
      : ln(e)
      ? ((c = () => e), (r = !0))
      : J(e)
      ? ((h = !0),
        (d = e.some((_) => ln(_) || Tr(_))),
        (c = () =>
          e.map((_) => {
            if (we(_)) return _.value
            if (ln(_)) return tn(_)
            if (Z(_)) return Mt(_, l, 2)
          })))
      : Z(e)
      ? t
        ? (c = () => Mt(e, l, 2))
        : (c = () => {
            if (!(l && l.isUnmounted)) return g && g(), ze(e, l, 3, [v])
          })
      : (c = at),
    t && r)
  ) {
    const _ = c
    c = () => tn(_())
  }
  let g,
    v = (_) => {
      g = m.onStop = () => {
        Mt(_, l, 4)
      }
    },
    E
  if (mn)
    if (
      ((v = at),
      t ? n && ze(t, l, 3, [c(), h ? [] : void 0, v]) : c(),
      s === 'sync')
    ) {
      const _ = qf()
      E = _.__watcherHandles || (_.__watcherHandles = [])
    } else return at
  let w = h ? new Array(e.length).fill(cr) : cr
  const I = () => {
    if (m.active)
      if (t) {
        const _ = m.run()
        ;(r || d || (h ? _.some((T, A) => Bn(T, w[A])) : Bn(_, w))) &&
          (g && g(),
          ze(t, l, 3, [_, w === cr ? void 0 : h && w[0] === cr ? [] : w, v]),
          (w = _))
      } else m.run()
  }
  I.allowRecurse = !!t
  let p
  s === 'sync'
    ? (p = I)
    : s === 'post'
    ? (p = () => Se(I, l && l.suspense))
    : ((I.pre = !0), l && (I.id = l.uid), (p = () => Hr(I)))
  const m = new ao(c, p)
  t
    ? n
      ? I()
      : (w = m.run())
    : s === 'post'
    ? Se(m.run.bind(m), l && l.suspense)
    : m.run()
  const C = () => {
    m.stop(), l && l.scope && to(l.scope.effects, m)
  }
  return E && E.push(C), C
}
function rf(e, t, n) {
  const r = this.proxy,
    s = ve(e) ? (e.includes('.') ? di(r, e) : () => r[e]) : e.bind(r, r)
  let o
  Z(t) ? (o = t) : ((o = t.handler), (n = t))
  const a = Ce
  $t(this)
  const i = go(s, o.bind(r), n)
  return a ? $t(a) : xt(), i
}
function di(e, t) {
  const n = t.split('.')
  return () => {
    let r = e
    for (let s = 0; s < n.length && r; s++) r = r[n[s]]
    return r
  }
}
function tn(e, t) {
  if (!pe(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), we(e))) tn(e.value, t)
  else if (J(e)) for (let n = 0; n < e.length; n++) tn(e[n], t)
  else if (Nl(e) || an(e))
    e.forEach((n) => {
      tn(n, t)
    })
  else if (Sl(e)) for (const n in e) tn(e[n], t)
  return e
}
function pt(e, t, n, r) {
  const s = e.dirs,
    o = t && t.dirs
  for (let a = 0; a < s.length; a++) {
    const i = s[a]
    o && (i.oldValue = o[a].value)
    let l = i.dir[r]
    l && (vn(), ze(l, n, 8, [e.el, i, e, t]), En())
  }
}
function sf() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Br(() => {
      e.isMounted = !0
    }),
    Vr(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Je = [Function, Array],
  hi = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Je,
    onEnter: Je,
    onAfterEnter: Je,
    onEnterCancelled: Je,
    onBeforeLeave: Je,
    onLeave: Je,
    onAfterLeave: Je,
    onLeaveCancelled: Je,
    onBeforeAppear: Je,
    onAppear: Je,
    onAfterAppear: Je,
    onAppearCancelled: Je,
  },
  of = {
    name: 'BaseTransition',
    props: hi,
    setup(e, { slots: t }) {
      const n = tt(),
        r = sf()
      let s
      return () => {
        const o = t.default && mi(t.default(), !0)
        if (!o || !o.length) return
        let a = o[0]
        if (o.length > 1) {
          for (const w of o)
            if (w.type !== We) {
              a = w
              break
            }
        }
        const i = le(e),
          { mode: l } = i
        if (r.isLeaving) return ts(a)
        const c = Zo(a)
        if (!c) return ts(a)
        const d = Ts(c, i, r, n)
        Lr(c, d)
        const h = n.subTree,
          g = h && Zo(h)
        let v = !1
        const { getTransitionKey: E } = c.type
        if (E) {
          const w = E()
          s === void 0 ? (s = w) : w !== s && ((s = w), (v = !0))
        }
        if (g && g.type !== We && (!ot(c, g) || v)) {
          const w = Ts(g, i, r, n)
          if ((Lr(g, w), l === 'out-in'))
            return (
              (r.isLeaving = !0),
              (w.afterLeave = () => {
                ;(r.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              ts(a)
            )
          l === 'in-out' &&
            c.type !== We &&
            (w.delayLeave = (I, p, m) => {
              const C = pi(r, g)
              ;(C[String(g.key)] = g),
                (I._leaveCb = () => {
                  p(), (I._leaveCb = void 0), delete d.delayedLeave
                }),
                (d.delayedLeave = m)
            })
        }
        return a
      }
    },
  },
  af = of
function pi(e, t) {
  const { leavingVNodes: n } = e
  let r = n.get(t.type)
  return r || ((r = Object.create(null)), n.set(t.type, r)), r
}
function Ts(e, t, n, r) {
  const {
      appear: s,
      mode: o,
      persisted: a = !1,
      onBeforeEnter: i,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: d,
      onBeforeLeave: h,
      onLeave: g,
      onAfterLeave: v,
      onLeaveCancelled: E,
      onBeforeAppear: w,
      onAppear: I,
      onAfterAppear: p,
      onAppearCancelled: m,
    } = t,
    C = String(e.key),
    _ = pi(n, e),
    T = (O, D) => {
      O && ze(O, r, 9, D)
    },
    A = (O, D) => {
      const W = D[1]
      T(O, D),
        J(O) ? O.every((G) => G.length <= 1) && W() : O.length <= 1 && W()
    },
    N = {
      mode: o,
      persisted: a,
      beforeEnter(O) {
        let D = i
        if (!n.isMounted)
          if (s) D = w || i
          else return
        O._leaveCb && O._leaveCb(!0)
        const W = _[C]
        W && ot(e, W) && W.el._leaveCb && W.el._leaveCb(), T(D, [O])
      },
      enter(O) {
        let D = l,
          W = c,
          G = d
        if (!n.isMounted)
          if (s) (D = I || l), (W = p || c), (G = m || d)
          else return
        let U = !1
        const X = (O._enterCb = (V) => {
          U ||
            ((U = !0),
            V ? T(G, [O]) : T(W, [O]),
            N.delayedLeave && N.delayedLeave(),
            (O._enterCb = void 0))
        })
        D ? A(D, [O, X]) : X()
      },
      leave(O, D) {
        const W = String(e.key)
        if ((O._enterCb && O._enterCb(!0), n.isUnmounting)) return D()
        T(h, [O])
        let G = !1
        const U = (O._leaveCb = (X) => {
          G ||
            ((G = !0),
            D(),
            X ? T(E, [O]) : T(v, [O]),
            (O._leaveCb = void 0),
            _[W] === e && delete _[W])
        })
        ;(_[W] = e), g ? A(g, [O, U]) : U()
      },
      clone(O) {
        return Ts(O, t, n, r)
      },
    }
  return N
}
function ts(e) {
  if (er(e)) return (e = wt(e)), (e.children = null), e
}
function Zo(e) {
  return er(e) ? (e.children ? e.children[0] : void 0) : e
}
function Lr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Lr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function mi(e, t = !1, n) {
  let r = [],
    s = 0
  for (let o = 0; o < e.length; o++) {
    let a = e[o]
    const i = n == null ? a.key : String(n) + String(a.key != null ? a.key : o)
    a.type === Ue
      ? (a.patchFlag & 128 && s++, (r = r.concat(mi(a.children, t, i))))
      : (t || a.type !== We) && r.push(i != null ? wt(a, { key: i }) : a)
  }
  if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2
  return r
}
function zn(e, t) {
  return Z(e) ? (() => ke({ name: e.name }, t, { setup: e }))() : e
}
const qt = (e) => !!e.type.__asyncLoader
function lf(e) {
  Z(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: r,
    delay: s = 200,
    timeout: o,
    suspensible: a = !0,
    onError: i,
  } = e
  let l = null,
    c,
    d = 0
  const h = () => (d++, (l = null), g()),
    g = () => {
      let v
      return (
        l ||
        (v = l =
          t()
            .catch((E) => {
              if (((E = E instanceof Error ? E : new Error(String(E))), i))
                return new Promise((w, I) => {
                  i(
                    E,
                    () => w(h()),
                    () => I(E),
                    d + 1
                  )
                })
              throw E
            })
            .then((E) =>
              v !== l && l
                ? l
                : (E &&
                    (E.__esModule || E[Symbol.toStringTag] === 'Module') &&
                    (E = E.default),
                  (c = E),
                  E)
            ))
      )
    }
  return zn({
    name: 'AsyncComponentWrapper',
    __asyncLoader: g,
    get __asyncResolved() {
      return c
    },
    setup() {
      const v = Ce
      if (c) return () => ns(c, v)
      const E = (m) => {
        ;(l = null), Tn(m, v, 13, !r)
      }
      if ((a && v.suspense) || mn)
        return g()
          .then((m) => () => ns(m, v))
          .catch((m) => (E(m), () => (r ? _e(r, { error: m }) : null)))
      const w = Re(!1),
        I = Re(),
        p = Re(!!s)
      return (
        s &&
          setTimeout(() => {
            p.value = !1
          }, s),
        o != null &&
          setTimeout(() => {
            if (!w.value && !I.value) {
              const m = new Error(`Async component timed out after ${o}ms.`)
              E(m), (I.value = m)
            }
          }, o),
        g()
          .then(() => {
            ;(w.value = !0),
              v.parent && er(v.parent.vnode) && Hr(v.parent.update)
          })
          .catch((m) => {
            E(m), (I.value = m)
          }),
        () => {
          if (w.value && c) return ns(c, v)
          if (I.value && r) return _e(r, { error: I.value })
          if (n && !p.value) return _e(n)
        }
      )
    },
  })
}
function ns(e, t) {
  const { ref: n, props: r, children: s, ce: o } = t.vnode,
    a = _e(e, r, s)
  return (a.ref = n), (a.ce = o), delete t.vnode.ce, a
}
const er = (e) => e.type.__isKeepAlive,
  cf = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const n = tt(),
        r = n.ctx
      if (!r.renderer)
        return () => {
          const m = t.default && t.default()
          return m && m.length === 1 ? m[0] : m
        }
      const s = new Map(),
        o = new Set()
      let a = null
      const i = n.suspense,
        {
          renderer: {
            p: l,
            m: c,
            um: d,
            o: { createElement: h },
          },
        } = r,
        g = h('div')
      ;(r.activate = (m, C, _, T, A) => {
        const N = m.component
        c(m, C, _, 0, i),
          l(N.vnode, m, C, _, N, i, T, m.slotScopeIds, A),
          Se(() => {
            ;(N.isDeactivated = !1), N.a && Fn(N.a)
            const O = m.props && m.props.onVnodeMounted
            O && Ke(O, N.parent, m)
          }, i)
      }),
        (r.deactivate = (m) => {
          const C = m.component
          c(m, g, null, 1, i),
            Se(() => {
              C.da && Fn(C.da)
              const _ = m.props && m.props.onVnodeUnmounted
              _ && Ke(_, C.parent, m), (C.isDeactivated = !0)
            }, i)
        })
      function v(m) {
        rs(m), d(m, n, i, !0)
      }
      function E(m) {
        s.forEach((C, _) => {
          const T = Is(C.type)
          T && (!m || !m(T)) && w(_)
        })
      }
      function w(m) {
        const C = s.get(m)
        !a || !ot(C, a) ? v(C) : a && rs(a), s.delete(m), o.delete(m)
      }
      Tt(
        () => [e.include, e.exclude],
        ([m, C]) => {
          m && E((_) => Nn(m, _)), C && E((_) => !Nn(C, _))
        },
        { flush: 'post', deep: !0 }
      )
      let I = null
      const p = () => {
        I != null && s.set(I, ss(n.subTree))
      }
      return (
        Br(p),
        vi(p),
        Vr(() => {
          s.forEach((m) => {
            const { subTree: C, suspense: _ } = n,
              T = ss(C)
            if (m.type === T.type && m.key === T.key) {
              rs(T)
              const A = T.component.da
              A && Se(A, _)
              return
            }
            v(m)
          })
        }),
        () => {
          if (((I = null), !t.default)) return null
          const m = t.default(),
            C = m[0]
          if (m.length > 1) return (a = null), m
          if (!pn(C) || (!(C.shapeFlag & 4) && !(C.shapeFlag & 128)))
            return (a = null), C
          let _ = ss(C)
          const T = _.type,
            A = Is(qt(_) ? _.type.__asyncResolved || {} : T),
            { include: N, exclude: O, max: D } = e
          if ((N && (!A || !Nn(N, A))) || (O && A && Nn(O, A)))
            return (a = _), C
          const W = _.key == null ? T : _.key,
            G = s.get(W)
          return (
            _.el && ((_ = wt(_)), C.shapeFlag & 128 && (C.ssContent = _)),
            (I = W),
            G
              ? ((_.el = G.el),
                (_.component = G.component),
                _.transition && Lr(_, _.transition),
                (_.shapeFlag |= 512),
                o.delete(W),
                o.add(W))
              : (o.add(W),
                D && o.size > parseInt(D, 10) && w(o.values().next().value)),
            (_.shapeFlag |= 256),
            (a = _),
            ci(C.type) ? C : _
          )
        }
      )
    },
  },
  uf = cf
function Nn(e, t) {
  return J(e)
    ? e.some((n) => Nn(n, t))
    : ve(e)
    ? e.split(',').includes(t)
    : Gc(e)
    ? e.test(t)
    : !1
}
function gi(e, t) {
  yi(e, 'a', t)
}
function _i(e, t) {
  yi(e, 'da', t)
}
function yi(e, t, n = Ce) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((jr(t, r, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) er(s.parent.vnode) && ff(r, t, n, s), (s = s.parent)
  }
}
function ff(e, t, n, r) {
  const s = jr(t, e, r, !0)
  _o(() => {
    to(r[t], s)
  }, n)
}
function rs(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function ss(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function jr(e, t, n = Ce, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...a) => {
          if (n.isUnmounted) return
          vn(), $t(n)
          const i = ze(t, n, e, a)
          return xt(), En(), i
        })
    return r ? s.unshift(o) : s.push(o), o
  }
}
const Lt =
    (e) =>
    (t, n = Ce) =>
      (!mn || e === 'sp') && jr(e, (...r) => t(...r), n),
  bi = Lt('bm'),
  Br = Lt('m'),
  df = Lt('bu'),
  vi = Lt('u'),
  Vr = Lt('bum'),
  _o = Lt('um'),
  hf = Lt('sp'),
  pf = Lt('rtg'),
  mf = Lt('rtc')
function Ei(e, t = Ce) {
  jr('ec', e, t)
}
const yo = 'components'
function cy(e, t) {
  return Ci(yo, e, !0, t) || e
}
const Ti = Symbol.for('v-ndc')
function gf(e) {
  return ve(e) ? Ci(yo, e, !1) || e : e || Ti
}
function Ci(e, t, n = !0, r = !1) {
  const s = Fe || Ce
  if (s) {
    const o = s.type
    if (e === yo) {
      const i = Is(o, !1)
      if (i && (i === t || i === _t(t) || i === Mr(_t(t)))) return o
    }
    const a = zo(s[e] || o[e], t) || zo(s.appContext[e], t)
    return !a && r ? o : a
  }
}
function zo(e, t) {
  return e && (e[t] || e[_t(t)] || e[Mr(_t(t))])
}
function uy(e, t, n = {}, r, s) {
  if (Fe.isCE || (Fe.parent && qt(Fe.parent) && Fe.parent.isCE))
    return t !== 'default' && (n.name = t), _e('slot', n, r && r())
  let o = e[t]
  o && o._c && (o._d = !1), Et()
  const a = o && wi(o(n)),
    i = Yt(
      Ue,
      { key: n.key || (a && a.key) || `_${t}` },
      a || (r ? r() : []),
      a && e._ === 1 ? 64 : -2
    )
  return (
    !s && i.scopeId && (i.slotScopeIds = [i.scopeId + '-s']),
    o && o._c && (o._d = !0),
    i
  )
}
function wi(e) {
  return e.some((t) =>
    pn(t) ? !(t.type === We || (t.type === Ue && !wi(t.children))) : !0
  )
    ? e
    : null
}
const Cs = (e) => (e ? (Hi(e) ? Co(e) || e.proxy : Cs(e.parent)) : null),
  Mn = ke(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Cs(e.parent),
    $root: (e) => Cs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => Hr(e.update)),
    $nextTick: (e) => e.n || (e.n = Cn.bind(e.proxy)),
    $watch: (e) => rf.bind(e),
  }),
  os = (e, t) => e !== me && !e.__isScriptSetup && ae(e, t),
  _f = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: o,
        accessCache: a,
        type: i,
        appContext: l,
      } = e
      let c
      if (t[0] !== '$') {
        const v = a[t]
        if (v !== void 0)
          switch (v) {
            case 1:
              return r[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (os(r, t)) return (a[t] = 1), r[t]
          if (s !== me && ae(s, t)) return (a[t] = 2), s[t]
          if ((c = e.propsOptions[0]) && ae(c, t)) return (a[t] = 3), o[t]
          if (n !== me && ae(n, t)) return (a[t] = 4), n[t]
          ws && (a[t] = 0)
        }
      }
      const d = Mn[t]
      let h, g
      if (d) return t === '$attrs' && Ye(e, 'get', t), d(e)
      if ((h = i.__cssModules) && (h = h[t])) return h
      if (n !== me && ae(n, t)) return (a[t] = 4), n[t]
      if (((g = l.config.globalProperties), ae(g, t))) return g[t]
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e
      return os(s, t)
        ? ((s[t] = n), !0)
        : r !== me && ae(r, t)
        ? ((r[t] = n), !0)
        : ae(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: o,
        },
      },
      a
    ) {
      let i
      return (
        !!n[a] ||
        (e !== me && ae(e, a)) ||
        os(t, a) ||
        ((i = o[0]) && ae(i, a)) ||
        ae(r, a) ||
        ae(Mn, a) ||
        ae(s.config.globalProperties, a)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ae(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
function fy() {
  return yf().slots
}
function yf() {
  const e = tt()
  return e.setupContext || (e.setupContext = Wi(e))
}
function ea(e) {
  return J(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
function dy(e) {
  const t = tt()
  let n = e()
  return (
    xt(),
    ro(n) &&
      (n = n.catch((r) => {
        throw ($t(t), r)
      })),
    [n, () => $t(t)]
  )
}
let ws = !0
function bf(e) {
  const t = bo(e),
    n = e.proxy,
    r = e.ctx
  ;(ws = !1), t.beforeCreate && ta(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: o,
    methods: a,
    watch: i,
    provide: l,
    inject: c,
    created: d,
    beforeMount: h,
    mounted: g,
    beforeUpdate: v,
    updated: E,
    activated: w,
    deactivated: I,
    beforeDestroy: p,
    beforeUnmount: m,
    destroyed: C,
    unmounted: _,
    render: T,
    renderTracked: A,
    renderTriggered: N,
    errorCaptured: O,
    serverPrefetch: D,
    expose: W,
    inheritAttrs: G,
    components: U,
    directives: X,
    filters: V,
  } = t
  if ((c && vf(c, r, null), a))
    for (const ee in a) {
      const re = a[ee]
      Z(re) && (r[ee] = re.bind(n))
    }
  if (s) {
    const ee = s.call(n, n)
    pe(ee) && (e.data = it(ee))
  }
  if (((ws = !0), o))
    for (const ee in o) {
      const re = o[ee],
        Me = Z(re) ? re.bind(n, n) : Z(re.get) ? re.get.bind(n, n) : at,
        je = !Z(re) && Z(re.set) ? re.set.bind(n) : at,
        xe = ge({ get: Me, set: je })
      Object.defineProperty(r, ee, {
        enumerable: !0,
        configurable: !0,
        get: () => xe.value,
        set: (Te) => (xe.value = Te),
      })
    }
  if (i) for (const ee in i) Li(i[ee], r, n, ee)
  if (l) {
    const ee = Z(l) ? l.call(n) : l
    Reflect.ownKeys(ee).forEach((re) => {
      fn(re, ee[re])
    })
  }
  d && ta(d, e, 'c')
  function Q(ee, re) {
    J(re) ? re.forEach((Me) => ee(Me.bind(n))) : re && ee(re.bind(n))
  }
  if (
    (Q(bi, h),
    Q(Br, g),
    Q(df, v),
    Q(vi, E),
    Q(gi, w),
    Q(_i, I),
    Q(Ei, O),
    Q(mf, A),
    Q(pf, N),
    Q(Vr, m),
    Q(_o, _),
    Q(hf, D),
    J(W))
  )
    if (W.length) {
      const ee = e.exposed || (e.exposed = {})
      W.forEach((re) => {
        Object.defineProperty(ee, re, {
          get: () => n[re],
          set: (Me) => (n[re] = Me),
        })
      })
    } else e.exposed || (e.exposed = {})
  T && e.render === at && (e.render = T),
    G != null && (e.inheritAttrs = G),
    U && (e.components = U),
    X && (e.directives = X)
}
function vf(e, t, n = at) {
  J(e) && (e = Ls(e))
  for (const r in e) {
    const s = e[r]
    let o
    pe(s)
      ? 'default' in s
        ? (o = et(s.from || r, s.default, !0))
        : (o = et(s.from || r))
      : (o = et(s)),
      we(o)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (t[r] = o)
  }
}
function ta(e, t, n) {
  ze(J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Li(e, t, n, r) {
  const s = r.includes('.') ? di(n, r) : () => n[r]
  if (ve(e)) {
    const o = t[e]
    Z(o) && Tt(s, o)
  } else if (Z(e)) Tt(s, e.bind(n))
  else if (pe(e))
    if (J(e)) e.forEach((o) => Li(o, t, n, r))
    else {
      const o = Z(e.handler) ? e.handler.bind(n) : t[e.handler]
      Z(o) && Tt(s, o, e)
    }
}
function bo(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: s,
      optionsCache: o,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    i = o.get(t)
  let l
  return (
    i
      ? (l = i)
      : !s.length && !n && !r
      ? (l = t)
      : ((l = {}), s.length && s.forEach((c) => kr(l, c, a, !0)), kr(l, t, a)),
    pe(t) && o.set(t, l),
    l
  )
}
function kr(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t
  o && kr(e, o, n, !0), s && s.forEach((a) => kr(e, a, n, !0))
  for (const a in t)
    if (!(r && a === 'expose')) {
      const i = Ef[a] || (n && n[a])
      e[a] = i ? i(e[a], t[a]) : t[a]
    }
  return e
}
const Ef = {
  data: na,
  props: ra,
  emits: ra,
  methods: On,
  computed: On,
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  components: On,
  directives: On,
  watch: Cf,
  provide: na,
  inject: Tf,
}
function na(e, t) {
  return t
    ? e
      ? function () {
          return ke(
            Z(e) ? e.call(this, this) : e,
            Z(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Tf(e, t) {
  return On(Ls(e), Ls(t))
}
function Ls(e) {
  if (J(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function $e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function On(e, t) {
  return e ? ke(Object.create(null), e, t) : t
}
function ra(e, t) {
  return e
    ? J(e) && J(t)
      ? [...new Set([...e, ...t])]
      : ke(Object.create(null), ea(e), ea(t ?? {}))
    : t
}
function Cf(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ke(Object.create(null), e)
  for (const r in t) n[r] = $e(e[r], t[r])
  return n
}
function ki() {
  return {
    app: null,
    config: {
      isNativeTag: Vc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let wf = 0
function Lf(e, t) {
  return function (r, s = null) {
    Z(r) || (r = ke({}, r)), s != null && !pe(s) && (s = null)
    const o = ki(),
      a = new Set()
    let i = !1
    const l = (o.app = {
      _uid: wf++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: ji,
      get config() {
        return o.config
      },
      set config(c) {},
      use(c, ...d) {
        return (
          a.has(c) ||
            (c && Z(c.install)
              ? (a.add(c), c.install(l, ...d))
              : Z(c) && (a.add(c), c(l, ...d))),
          l
        )
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), l
      },
      component(c, d) {
        return d ? ((o.components[c] = d), l) : o.components[c]
      },
      directive(c, d) {
        return d ? ((o.directives[c] = d), l) : o.directives[c]
      },
      mount(c, d, h) {
        if (!i) {
          const g = _e(r, s)
          return (
            (g.appContext = o),
            d && t ? t(g, c) : e(g, c, h),
            (i = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            Co(g.component) || g.component.proxy
          )
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(c, d) {
        return (o.provides[c] = d), l
      },
      runWithContext(c) {
        Xn = l
        try {
          return c()
        } finally {
          Xn = null
        }
      },
    })
    return l
  }
}
let Xn = null
function fn(e, t) {
  if (Ce) {
    let n = Ce.provides
    const r = Ce.parent && Ce.parent.provides
    r === n && (n = Ce.provides = Object.create(r)), (n[e] = t)
  }
}
function et(e, t, n = !1) {
  const r = Ce || Fe
  if (r || Xn) {
    const s = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Xn._context.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && Z(t) ? t.call(r && r.proxy) : t
  }
}
function kf() {
  return !!(Ce || Fe || Xn)
}
function Rf(e, t, n, r = !1) {
  const s = {},
    o = {}
  vr(o, Kr, 1), (e.propsDefaults = Object.create(null)), Ri(e, t, s, o)
  for (const a in e.propsOptions[0]) a in s || (s[a] = void 0)
  n ? (e.props = r ? s : Xl(s)) : e.type.props ? (e.props = s) : (e.props = o),
    (e.attrs = o)
}
function If(e, t, n, r) {
  const {
      props: s,
      attrs: o,
      vnode: { patchFlag: a },
    } = e,
    i = le(s),
    [l] = e.propsOptions
  let c = !1
  if ((r || a > 0) && !(a & 16)) {
    if (a & 8) {
      const d = e.vnode.dynamicProps
      for (let h = 0; h < d.length; h++) {
        let g = d[h]
        if (Ur(e.emitsOptions, g)) continue
        const v = t[g]
        if (l)
          if (ae(o, g)) v !== o[g] && ((o[g] = v), (c = !0))
          else {
            const E = _t(g)
            s[E] = ks(l, i, E, v, e, !1)
          }
        else v !== o[g] && ((o[g] = v), (c = !0))
      }
    }
  } else {
    Ri(e, t, s, o) && (c = !0)
    let d
    for (const h in i)
      (!t || (!ae(t, h) && ((d = bn(h)) === h || !ae(t, d)))) &&
        (l
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (s[h] = ks(l, i, h, void 0, e, !0))
          : delete s[h])
    if (o !== i) for (const h in o) (!t || !ae(t, h)) && (delete o[h], (c = !0))
  }
  c && Ct(e, 'set', '$attrs')
}
function Ri(e, t, n, r) {
  const [s, o] = e.propsOptions
  let a = !1,
    i
  if (t)
    for (let l in t) {
      if (Sn(l)) continue
      const c = t[l]
      let d
      s && ae(s, (d = _t(l)))
        ? !o || !o.includes(d)
          ? (n[d] = c)
          : ((i || (i = {}))[d] = c)
        : Ur(e.emitsOptions, l) ||
          ((!(l in r) || c !== r[l]) && ((r[l] = c), (a = !0)))
    }
  if (o) {
    const l = le(n),
      c = i || me
    for (let d = 0; d < o.length; d++) {
      const h = o[d]
      n[h] = ks(s, l, h, c[h], e, !ae(c, h))
    }
  }
  return a
}
function ks(e, t, n, r, s, o) {
  const a = e[n]
  if (a != null) {
    const i = ae(a, 'default')
    if (i && r === void 0) {
      const l = a.default
      if (a.type !== Function && !a.skipFactory && Z(l)) {
        const { propsDefaults: c } = s
        n in c ? (r = c[n]) : ($t(s), (r = c[n] = l.call(null, t)), xt())
      } else r = l
    }
    a[0] && (o && !i ? (r = !1) : a[1] && (r === '' || r === bn(n)) && (r = !0))
  }
  return r
}
function Ii(e, t, n = !1) {
  const r = t.propsCache,
    s = r.get(e)
  if (s) return s
  const o = e.props,
    a = {},
    i = []
  let l = !1
  if (!Z(e)) {
    const d = (h) => {
      l = !0
      const [g, v] = Ii(h, t, !0)
      ke(a, g), v && i.push(...v)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!o && !l) return pe(e) && r.set(e, on), on
  if (J(o))
    for (let d = 0; d < o.length; d++) {
      const h = _t(o[d])
      sa(h) && (a[h] = me)
    }
  else if (o)
    for (const d in o) {
      const h = _t(d)
      if (sa(h)) {
        const g = o[d],
          v = (a[h] = J(g) || Z(g) ? { type: g } : ke({}, g))
        if (v) {
          const E = la(Boolean, v.type),
            w = la(String, v.type)
          ;(v[0] = E > -1),
            (v[1] = w < 0 || E < w),
            (E > -1 || ae(v, 'default')) && i.push(h)
        }
      }
    }
  const c = [a, i]
  return pe(e) && r.set(e, c), c
}
function sa(e) {
  return e[0] !== '$'
}
function oa(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function aa(e, t) {
  return oa(e) === oa(t)
}
function la(e, t) {
  return J(t) ? t.findIndex((n) => aa(n, e)) : Z(t) && aa(t, e) ? 0 : -1
}
const Pi = (e) => e[0] === '_' || e === '$stable',
  vo = (e) => (J(e) ? e.map(Qe) : [Qe(e)]),
  Pf = (e, t, n) => {
    if (t._n) return t
    const r = ii((...s) => vo(t(...s)), n)
    return (r._c = !1), r
  },
  Ai = (e, t, n) => {
    const r = e._ctx
    for (const s in e) {
      if (Pi(s)) continue
      const o = e[s]
      if (Z(o)) t[s] = Pf(s, o, r)
      else if (o != null) {
        const a = vo(o)
        t[s] = () => a
      }
    }
  },
  Ni = (e, t) => {
    const n = vo(t)
    e.slots.default = () => n
  },
  Af = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = le(t)), vr(t, '_', n)) : Ai(t, (e.slots = {}))
    } else (e.slots = {}), t && Ni(e, t)
    vr(e.slots, Kr, 1)
  },
  Nf = (e, t, n) => {
    const { vnode: r, slots: s } = e
    let o = !0,
      a = me
    if (r.shapeFlag & 32) {
      const i = t._
      i
        ? n && i === 1
          ? (o = !1)
          : (ke(s, t), !n && i === 1 && delete s._)
        : ((o = !t.$stable), Ai(t, s)),
        (a = t)
    } else t && (Ni(e, t), (a = { default: 1 }))
    if (o) for (const i in s) !Pi(i) && !(i in a) && delete s[i]
  }
function Rr(e, t, n, r, s = !1) {
  if (J(e)) {
    e.forEach((g, v) => Rr(g, t && (J(t) ? t[v] : t), n, r, s))
    return
  }
  if (qt(r) && !s) return
  const o = r.shapeFlag & 4 ? Co(r.component) || r.component.proxy : r.el,
    a = s ? null : o,
    { i, r: l } = e,
    c = t && t.r,
    d = i.refs === me ? (i.refs = {}) : i.refs,
    h = i.setupState
  if (
    (c != null &&
      c !== l &&
      (ve(c)
        ? ((d[c] = null), ae(h, c) && (h[c] = null))
        : we(c) && (c.value = null)),
    Z(l))
  )
    Mt(l, i, 12, [a, d])
  else {
    const g = ve(l),
      v = we(l)
    if (g || v) {
      const E = () => {
        if (e.f) {
          const w = g ? (ae(h, l) ? h[l] : d[l]) : l.value
          s
            ? J(w) && to(w, o)
            : J(w)
            ? w.includes(o) || w.push(o)
            : g
            ? ((d[l] = [o]), ae(h, l) && (h[l] = d[l]))
            : ((l.value = [o]), e.k && (d[e.k] = l.value))
        } else
          g
            ? ((d[l] = a), ae(h, l) && (h[l] = a))
            : v && ((l.value = a), e.k && (d[e.k] = a))
      }
      a ? ((E.id = -1), Se(E, n)) : E()
    }
  }
}
let It = !1
const ur = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  fr = (e) => e.nodeType === 8
function Of(e) {
  const {
      mt: t,
      p: n,
      o: {
        patchProp: r,
        createText: s,
        nextSibling: o,
        parentNode: a,
        remove: i,
        insert: l,
        createComment: c,
      },
    } = e,
    d = (p, m) => {
      if (!m.hasChildNodes()) {
        n(null, p, m), Cr(), (m._vnode = p)
        return
      }
      ;(It = !1),
        h(m.firstChild, p, null, null, null),
        Cr(),
        (m._vnode = p),
        It && console.error('Hydration completed but contains mismatches.')
    },
    h = (p, m, C, _, T, A = !1) => {
      const N = fr(p) && p.data === '[',
        O = () => w(p, m, C, _, T, N),
        { type: D, ref: W, shapeFlag: G, patchFlag: U } = m
      let X = p.nodeType
      ;(m.el = p), U === -2 && ((A = !1), (m.dynamicChildren = null))
      let V = null
      switch (D) {
        case Qt:
          X !== 3
            ? m.children === ''
              ? (l((m.el = s('')), a(p), p), (V = p))
              : (V = O())
            : (p.data !== m.children && ((It = !0), (p.data = m.children)),
              (V = o(p)))
          break
        case We:
          X !== 8 || N ? (V = O()) : (V = o(p))
          break
        case yr:
          if ((N && ((p = o(p)), (X = p.nodeType)), X === 1 || X === 3)) {
            V = p
            const fe = !m.children.length
            for (let Q = 0; Q < m.staticCount; Q++)
              fe && (m.children += V.nodeType === 1 ? V.outerHTML : V.data),
                Q === m.staticCount - 1 && (m.anchor = V),
                (V = o(V))
            return N ? o(V) : V
          } else O()
          break
        case Ue:
          N ? (V = E(p, m, C, _, T, A)) : (V = O())
          break
        default:
          if (G & 1)
            X !== 1 || m.type.toLowerCase() !== p.tagName.toLowerCase()
              ? (V = O())
              : (V = g(p, m, C, _, T, A))
          else if (G & 6) {
            m.slotScopeIds = T
            const fe = a(p)
            if (
              (t(m, fe, null, C, _, ur(fe), A),
              (V = N ? I(p) : o(p)),
              V && fr(V) && V.data === 'teleport end' && (V = o(V)),
              qt(m))
            ) {
              let Q
              N
                ? ((Q = _e(Ue)),
                  (Q.anchor = V ? V.previousSibling : fe.lastChild))
                : (Q = p.nodeType === 3 ? $i('') : _e('div')),
                (Q.el = p),
                (m.component.subTree = Q)
            }
          } else
            G & 64
              ? X !== 8
                ? (V = O())
                : (V = m.type.hydrate(p, m, C, _, T, A, e, v))
              : G & 128 &&
                (V = m.type.hydrate(p, m, C, _, ur(a(p)), T, A, e, h))
      }
      return W != null && Rr(W, null, _, m), V
    },
    g = (p, m, C, _, T, A) => {
      A = A || !!m.dynamicChildren
      const { type: N, props: O, patchFlag: D, shapeFlag: W, dirs: G } = m,
        U = (N === 'input' && G) || N === 'option'
      if (U || D !== -1) {
        if ((G && pt(m, null, C, 'created'), O))
          if (U || !A || D & 48)
            for (const V in O)
              ((U && V.endsWith('value')) || (Qn(V) && !Sn(V))) &&
                r(p, V, null, O[V], !1, void 0, C)
          else O.onClick && r(p, 'onClick', null, O.onClick, !1, void 0, C)
        let X
        if (
          ((X = O && O.onVnodeBeforeMount) && Ke(X, C, m),
          G && pt(m, null, C, 'beforeMount'),
          ((X = O && O.onVnodeMounted) || G) &&
            fi(() => {
              X && Ke(X, C, m), G && pt(m, null, C, 'mounted')
            }, _),
          W & 16 && !(O && (O.innerHTML || O.textContent)))
        ) {
          let V = v(p.firstChild, m, p, C, _, T, A)
          for (; V; ) {
            It = !0
            const fe = V
            ;(V = V.nextSibling), i(fe)
          }
        } else
          W & 8 &&
            p.textContent !== m.children &&
            ((It = !0), (p.textContent = m.children))
      }
      return p.nextSibling
    },
    v = (p, m, C, _, T, A, N) => {
      N = N || !!m.dynamicChildren
      const O = m.children,
        D = O.length
      for (let W = 0; W < D; W++) {
        const G = N ? O[W] : (O[W] = Qe(O[W]))
        if (p) p = h(p, G, _, T, A, N)
        else {
          if (G.type === Qt && !G.children) continue
          ;(It = !0), n(null, G, C, null, _, T, ur(C), A)
        }
      }
      return p
    },
    E = (p, m, C, _, T, A) => {
      const { slotScopeIds: N } = m
      N && (T = T ? T.concat(N) : N)
      const O = a(p),
        D = v(o(p), m, O, C, _, T, A)
      return D && fr(D) && D.data === ']'
        ? o((m.anchor = D))
        : ((It = !0), l((m.anchor = c(']')), O, D), D)
    },
    w = (p, m, C, _, T, A) => {
      if (((It = !0), (m.el = null), A)) {
        const D = I(p)
        for (;;) {
          const W = o(p)
          if (W && W !== D) i(W)
          else break
        }
      }
      const N = o(p),
        O = a(p)
      return i(p), n(null, m, O, N, C, _, ur(O), T), N
    },
    I = (p) => {
      let m = 0
      for (; p; )
        if (
          ((p = o(p)), p && fr(p) && (p.data === '[' && m++, p.data === ']'))
        ) {
          if (m === 0) return o(p)
          m--
        }
      return p
    }
  return [d, h]
}
const Se = fi
function Sf(e) {
  return Oi(e)
}
function Ff(e) {
  return Oi(e, Of)
}
function Oi(e, t) {
  const n = _s()
  n.__VUE__ = !0
  const {
      insert: r,
      remove: s,
      patchProp: o,
      createElement: a,
      createText: i,
      createComment: l,
      setText: c,
      setElementText: d,
      parentNode: h,
      nextSibling: g,
      setScopeId: v = at,
      insertStaticContent: E,
    } = e,
    w = (
      b,
      u,
      f,
      y = null,
      L = null,
      P = null,
      M = !1,
      x = null,
      $ = !!u.dynamicChildren
    ) => {
      if (b === u) return
      b && !ot(b, u) && ((y = S(b)), Te(b, L, P, !0), (b = null)),
        u.patchFlag === -2 && (($ = !1), (u.dynamicChildren = null))
      const { type: F, ref: k, shapeFlag: R } = u
      switch (F) {
        case Qt:
          I(b, u, f, y)
          break
        case We:
          p(b, u, f, y)
          break
        case yr:
          b == null && m(u, f, y, M)
          break
        case Ue:
          U(b, u, f, y, L, P, M, x, $)
          break
        default:
          R & 1
            ? T(b, u, f, y, L, P, M, x, $)
            : R & 6
            ? X(b, u, f, y, L, P, M, x, $)
            : (R & 64 || R & 128) && F.process(b, u, f, y, L, P, M, x, $, H)
      }
      k != null && L && Rr(k, b && b.ref, P, u || b, !u)
    },
    I = (b, u, f, y) => {
      if (b == null) r((u.el = i(u.children)), f, y)
      else {
        const L = (u.el = b.el)
        u.children !== b.children && c(L, u.children)
      }
    },
    p = (b, u, f, y) => {
      b == null ? r((u.el = l(u.children || '')), f, y) : (u.el = b.el)
    },
    m = (b, u, f, y) => {
      ;[b.el, b.anchor] = E(b.children, u, f, y, b.el, b.anchor)
    },
    C = ({ el: b, anchor: u }, f, y) => {
      let L
      for (; b && b !== u; ) (L = g(b)), r(b, f, y), (b = L)
      r(u, f, y)
    },
    _ = ({ el: b, anchor: u }) => {
      let f
      for (; b && b !== u; ) (f = g(b)), s(b), (b = f)
      s(u)
    },
    T = (b, u, f, y, L, P, M, x, $) => {
      ;(M = M || u.type === 'svg'),
        b == null ? A(u, f, y, L, P, M, x, $) : D(b, u, L, P, M, x, $)
    },
    A = (b, u, f, y, L, P, M, x) => {
      let $, F
      const { type: k, props: R, shapeFlag: Y, transition: q, dirs: te } = b
      if (
        (($ = b.el = a(b.type, P, R && R.is, R)),
        Y & 8
          ? d($, b.children)
          : Y & 16 &&
            O(b.children, $, null, y, L, P && k !== 'foreignObject', M, x),
        te && pt(b, null, y, 'created'),
        N($, b, b.scopeId, M, y),
        R)
      ) {
        for (const se in R)
          se !== 'value' &&
            !Sn(se) &&
            o($, se, null, R[se], P, b.children, y, L, ye)
        'value' in R && o($, 'value', null, R.value),
          (F = R.onVnodeBeforeMount) && Ke(F, y, b)
      }
      te && pt(b, null, y, 'beforeMount')
      const ce = (!L || (L && !L.pendingBranch)) && q && !q.persisted
      ce && q.beforeEnter($),
        r($, u, f),
        ((F = R && R.onVnodeMounted) || ce || te) &&
          Se(() => {
            F && Ke(F, y, b), ce && q.enter($), te && pt(b, null, y, 'mounted')
          }, L)
    },
    N = (b, u, f, y, L) => {
      if ((f && v(b, f), y)) for (let P = 0; P < y.length; P++) v(b, y[P])
      if (L) {
        let P = L.subTree
        if (u === P) {
          const M = L.vnode
          N(b, M, M.scopeId, M.slotScopeIds, L.parent)
        }
      }
    },
    O = (b, u, f, y, L, P, M, x, $ = 0) => {
      for (let F = $; F < b.length; F++) {
        const k = (b[F] = x ? Ot(b[F]) : Qe(b[F]))
        w(null, k, u, f, y, L, P, M, x)
      }
    },
    D = (b, u, f, y, L, P, M) => {
      const x = (u.el = b.el)
      let { patchFlag: $, dynamicChildren: F, dirs: k } = u
      $ |= b.patchFlag & 16
      const R = b.props || me,
        Y = u.props || me
      let q
      f && jt(f, !1),
        (q = Y.onVnodeBeforeUpdate) && Ke(q, f, u, b),
        k && pt(u, b, f, 'beforeUpdate'),
        f && jt(f, !0)
      const te = L && u.type !== 'foreignObject'
      if (
        (F
          ? W(b.dynamicChildren, F, x, f, y, te, P)
          : M || re(b, u, x, null, f, y, te, P, !1),
        $ > 0)
      ) {
        if ($ & 16) G(x, u, R, Y, f, y, L)
        else if (
          ($ & 2 && R.class !== Y.class && o(x, 'class', null, Y.class, L),
          $ & 4 && o(x, 'style', R.style, Y.style, L),
          $ & 8)
        ) {
          const ce = u.dynamicProps
          for (let se = 0; se < ce.length; se++) {
            const be = ce[se],
              qe = R[be],
              Zt = Y[be]
            ;(Zt !== qe || be === 'value') &&
              o(x, be, qe, Zt, L, b.children, f, y, ye)
          }
        }
        $ & 1 && b.children !== u.children && d(x, u.children)
      } else !M && F == null && G(x, u, R, Y, f, y, L)
      ;((q = Y.onVnodeUpdated) || k) &&
        Se(() => {
          q && Ke(q, f, u, b), k && pt(u, b, f, 'updated')
        }, y)
    },
    W = (b, u, f, y, L, P, M) => {
      for (let x = 0; x < u.length; x++) {
        const $ = b[x],
          F = u[x],
          k =
            $.el && ($.type === Ue || !ot($, F) || $.shapeFlag & 70)
              ? h($.el)
              : f
        w($, F, k, null, y, L, P, M, !0)
      }
    },
    G = (b, u, f, y, L, P, M) => {
      if (f !== y) {
        if (f !== me)
          for (const x in f)
            !Sn(x) && !(x in y) && o(b, x, f[x], null, M, u.children, L, P, ye)
        for (const x in y) {
          if (Sn(x)) continue
          const $ = y[x],
            F = f[x]
          $ !== F && x !== 'value' && o(b, x, F, $, M, u.children, L, P, ye)
        }
        'value' in y && o(b, 'value', f.value, y.value)
      }
    },
    U = (b, u, f, y, L, P, M, x, $) => {
      const F = (u.el = b ? b.el : i('')),
        k = (u.anchor = b ? b.anchor : i(''))
      let { patchFlag: R, dynamicChildren: Y, slotScopeIds: q } = u
      q && (x = x ? x.concat(q) : q),
        b == null
          ? (r(F, f, y), r(k, f, y), O(u.children, f, k, L, P, M, x, $))
          : R > 0 && R & 64 && Y && b.dynamicChildren
          ? (W(b.dynamicChildren, Y, f, L, P, M, x),
            (u.key != null || (L && u === L.subTree)) && Si(b, u, !0))
          : re(b, u, f, k, L, P, M, x, $)
    },
    X = (b, u, f, y, L, P, M, x, $) => {
      ;(u.slotScopeIds = x),
        b == null
          ? u.shapeFlag & 512
            ? L.ctx.activate(u, f, y, M, $)
            : V(u, f, y, L, P, M, $)
          : fe(b, u, $)
    },
    V = (b, u, f, y, L, P, M) => {
      const x = (b.component = Bf(b, y, L))
      if ((er(b) && (x.ctx.renderer = H), Vf(x), x.asyncDep)) {
        if ((L && L.registerDep(x, Q), !b.el)) {
          const $ = (x.subTree = _e(We))
          p(null, $, u, f)
        }
        return
      }
      Q(x, b, u, f, L, P, M)
    },
    fe = (b, u, f) => {
      const y = (u.component = b.component)
      if (qu(b, u, f))
        if (y.asyncDep && !y.asyncResolved) {
          ee(y, u, f)
          return
        } else (y.next = u), Bu(y.update), y.update()
      else (u.el = b.el), (y.vnode = u)
    },
    Q = (b, u, f, y, L, P, M) => {
      const x = () => {
          if (b.isMounted) {
            let { next: k, bu: R, u: Y, parent: q, vnode: te } = b,
              ce = k,
              se
            jt(b, !1),
              k ? ((k.el = te.el), ee(b, k, M)) : (k = te),
              R && Fn(R),
              (se = k.props && k.props.onVnodeBeforeUpdate) && Ke(se, q, k, te),
              jt(b, !0)
            const be = es(b),
              qe = b.subTree
            ;(b.subTree = be),
              w(qe, be, h(qe.el), S(qe), b, L, P),
              (k.el = be.el),
              ce === null && po(b, be.el),
              Y && Se(Y, L),
              (se = k.props && k.props.onVnodeUpdated) &&
                Se(() => Ke(se, q, k, te), L)
          } else {
            let k
            const { el: R, props: Y } = u,
              { bm: q, m: te, parent: ce } = b,
              se = qt(u)
            if (
              (jt(b, !1),
              q && Fn(q),
              !se && (k = Y && Y.onVnodeBeforeMount) && Ke(k, ce, u),
              jt(b, !0),
              R && ne)
            ) {
              const be = () => {
                ;(b.subTree = es(b)), ne(R, b.subTree, b, L, null)
              }
              se
                ? u.type.__asyncLoader().then(() => !b.isUnmounted && be())
                : be()
            } else {
              const be = (b.subTree = es(b))
              w(null, be, f, y, b, L, P), (u.el = be.el)
            }
            if ((te && Se(te, L), !se && (k = Y && Y.onVnodeMounted))) {
              const be = u
              Se(() => Ke(k, ce, be), L)
            }
            ;(u.shapeFlag & 256 ||
              (ce && qt(ce.vnode) && ce.vnode.shapeFlag & 256)) &&
              b.a &&
              Se(b.a, L),
              (b.isMounted = !0),
              (u = f = y = null)
          }
        },
        $ = (b.effect = new ao(x, () => Hr(F), b.scope)),
        F = (b.update = () => $.run())
      ;(F.id = b.uid), jt(b, !0), F()
    },
    ee = (b, u, f) => {
      u.component = b
      const y = b.vnode.props
      ;(b.vnode = u),
        (b.next = null),
        If(b, u.props, y, f),
        Nf(b, u.children, f),
        vn(),
        qo(),
        En()
    },
    re = (b, u, f, y, L, P, M, x, $ = !1) => {
      const F = b && b.children,
        k = b ? b.shapeFlag : 0,
        R = u.children,
        { patchFlag: Y, shapeFlag: q } = u
      if (Y > 0) {
        if (Y & 128) {
          je(F, R, f, y, L, P, M, x, $)
          return
        } else if (Y & 256) {
          Me(F, R, f, y, L, P, M, x, $)
          return
        }
      }
      q & 8
        ? (k & 16 && ye(F, L, P), R !== F && d(f, R))
        : k & 16
        ? q & 16
          ? je(F, R, f, y, L, P, M, x, $)
          : ye(F, L, P, !0)
        : (k & 8 && d(f, ''), q & 16 && O(R, f, y, L, P, M, x, $))
    },
    Me = (b, u, f, y, L, P, M, x, $) => {
      ;(b = b || on), (u = u || on)
      const F = b.length,
        k = u.length,
        R = Math.min(F, k)
      let Y
      for (Y = 0; Y < R; Y++) {
        const q = (u[Y] = $ ? Ot(u[Y]) : Qe(u[Y]))
        w(b[Y], q, f, null, L, P, M, x, $)
      }
      F > k ? ye(b, L, P, !0, !1, R) : O(u, f, y, L, P, M, x, $, R)
    },
    je = (b, u, f, y, L, P, M, x, $) => {
      let F = 0
      const k = u.length
      let R = b.length - 1,
        Y = k - 1
      for (; F <= R && F <= Y; ) {
        const q = b[F],
          te = (u[F] = $ ? Ot(u[F]) : Qe(u[F]))
        if (ot(q, te)) w(q, te, f, null, L, P, M, x, $)
        else break
        F++
      }
      for (; F <= R && F <= Y; ) {
        const q = b[R],
          te = (u[Y] = $ ? Ot(u[Y]) : Qe(u[Y]))
        if (ot(q, te)) w(q, te, f, null, L, P, M, x, $)
        else break
        R--, Y--
      }
      if (F > R) {
        if (F <= Y) {
          const q = Y + 1,
            te = q < k ? u[q].el : y
          for (; F <= Y; )
            w(null, (u[F] = $ ? Ot(u[F]) : Qe(u[F])), f, te, L, P, M, x, $), F++
        }
      } else if (F > Y) for (; F <= R; ) Te(b[F], L, P, !0), F++
      else {
        const q = F,
          te = F,
          ce = new Map()
        for (F = te; F <= Y; F++) {
          const Xe = (u[F] = $ ? Ot(u[F]) : Qe(u[F]))
          Xe.key != null && ce.set(Xe.key, F)
        }
        let se,
          be = 0
        const qe = Y - te + 1
        let Zt = !1,
          $o = 0
        const Ln = new Array(qe)
        for (F = 0; F < qe; F++) Ln[F] = 0
        for (F = q; F <= R; F++) {
          const Xe = b[F]
          if (be >= qe) {
            Te(Xe, L, P, !0)
            continue
          }
          let ft
          if (Xe.key != null) ft = ce.get(Xe.key)
          else
            for (se = te; se <= Y; se++)
              if (Ln[se - te] === 0 && ot(Xe, u[se])) {
                ft = se
                break
              }
          ft === void 0
            ? Te(Xe, L, P, !0)
            : ((Ln[ft - te] = F + 1),
              ft >= $o ? ($o = ft) : (Zt = !0),
              w(Xe, u[ft], f, null, L, P, M, x, $),
              be++)
        }
        const Ho = Zt ? Mf(Ln) : on
        for (se = Ho.length - 1, F = qe - 1; F >= 0; F--) {
          const Xe = te + F,
            ft = u[Xe],
            Uo = Xe + 1 < k ? u[Xe + 1].el : y
          Ln[F] === 0
            ? w(null, ft, f, Uo, L, P, M, x, $)
            : Zt && (se < 0 || F !== Ho[se] ? xe(ft, f, Uo, 2) : se--)
        }
      }
    },
    xe = (b, u, f, y, L = null) => {
      const { el: P, type: M, transition: x, children: $, shapeFlag: F } = b
      if (F & 6) {
        xe(b.component.subTree, u, f, y)
        return
      }
      if (F & 128) {
        b.suspense.move(u, f, y)
        return
      }
      if (F & 64) {
        M.move(b, u, f, H)
        return
      }
      if (M === Ue) {
        r(P, u, f)
        for (let R = 0; R < $.length; R++) xe($[R], u, f, y)
        r(b.anchor, u, f)
        return
      }
      if (M === yr) {
        C(b, u, f)
        return
      }
      if (y !== 2 && F & 1 && x)
        if (y === 0) x.beforeEnter(P), r(P, u, f), Se(() => x.enter(P), L)
        else {
          const { leave: R, delayLeave: Y, afterLeave: q } = x,
            te = () => r(P, u, f),
            ce = () => {
              R(P, () => {
                te(), q && q()
              })
            }
          Y ? Y(P, te, ce) : ce()
        }
      else r(P, u, f)
    },
    Te = (b, u, f, y = !1, L = !1) => {
      const {
        type: P,
        props: M,
        ref: x,
        children: $,
        dynamicChildren: F,
        shapeFlag: k,
        patchFlag: R,
        dirs: Y,
      } = b
      if ((x != null && Rr(x, null, f, b, !0), k & 256)) {
        u.ctx.deactivate(b)
        return
      }
      const q = k & 1 && Y,
        te = !qt(b)
      let ce
      if ((te && (ce = M && M.onVnodeBeforeUnmount) && Ke(ce, u, b), k & 6))
        ut(b.component, f, y)
      else {
        if (k & 128) {
          b.suspense.unmount(f, y)
          return
        }
        q && pt(b, null, u, 'beforeUnmount'),
          k & 64
            ? b.type.remove(b, u, f, L, H, y)
            : F && (P !== Ue || (R > 0 && R & 64))
            ? ye(F, u, f, !1, !0)
            : ((P === Ue && R & 384) || (!L && k & 16)) && ye($, u, f),
          y && nt(b)
      }
      ;((te && (ce = M && M.onVnodeUnmounted)) || q) &&
        Se(() => {
          ce && Ke(ce, u, b), q && pt(b, null, u, 'unmounted')
        }, f)
    },
    nt = (b) => {
      const { type: u, el: f, anchor: y, transition: L } = b
      if (u === Ue) {
        Ge(f, y)
        return
      }
      if (u === yr) {
        _(b)
        return
      }
      const P = () => {
        s(f), L && !L.persisted && L.afterLeave && L.afterLeave()
      }
      if (b.shapeFlag & 1 && L && !L.persisted) {
        const { leave: M, delayLeave: x } = L,
          $ = () => M(f, P)
        x ? x(b.el, P, $) : $()
      } else P()
    },
    Ge = (b, u) => {
      let f
      for (; b !== u; ) (f = g(b)), s(b), (b = f)
      s(u)
    },
    ut = (b, u, f) => {
      const { bum: y, scope: L, update: P, subTree: M, um: x } = b
      y && Fn(y),
        L.stop(),
        P && ((P.active = !1), Te(M, b, u, f)),
        x && Se(x, u),
        Se(() => {
          b.isUnmounted = !0
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          b.asyncDep &&
          !b.asyncResolved &&
          b.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve())
    },
    ye = (b, u, f, y = !1, L = !1, P = 0) => {
      for (let M = P; M < b.length; M++) Te(b[M], u, f, y, L)
    },
    S = (b) =>
      b.shapeFlag & 6
        ? S(b.component.subTree)
        : b.shapeFlag & 128
        ? b.suspense.next()
        : g(b.anchor || b.el),
    j = (b, u, f) => {
      b == null
        ? u._vnode && Te(u._vnode, null, null, !0)
        : w(u._vnode || null, b, u, null, null, null, f),
        qo(),
        Cr(),
        (u._vnode = b)
    },
    H = { p: w, um: Te, m: xe, r: nt, mt: V, mc: O, pc: re, pbc: W, n: S, o: e }
  let K, ne
  return t && ([K, ne] = t(H)), { render: j, hydrate: K, createApp: Lf(j, K) }
}
function jt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Si(e, t, n = !1) {
  const r = e.children,
    s = t.children
  if (J(r) && J(s))
    for (let o = 0; o < r.length; o++) {
      const a = r[o]
      let i = s[o]
      i.shapeFlag & 1 &&
        !i.dynamicChildren &&
        ((i.patchFlag <= 0 || i.patchFlag === 32) &&
          ((i = s[o] = Ot(s[o])), (i.el = a.el)),
        n || Si(a, i)),
        i.type === Qt && (i.el = a.el)
    }
}
function Mf(e) {
  const t = e.slice(),
    n = [0]
  let r, s, o, a, i
  const l = e.length
  for (r = 0; r < l; r++) {
    const c = e[r]
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        ;(t[r] = s), n.push(r)
        continue
      }
      for (o = 0, a = n.length - 1; o < a; )
        (i = (o + a) >> 1), e[n[i]] < c ? (o = i + 1) : (a = i)
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), (n[o] = r))
    }
  }
  for (o = n.length, a = n[o - 1]; o-- > 0; ) (n[o] = a), (a = t[a])
  return n
}
const xf = (e) => e.__isTeleport,
  Ue = Symbol.for('v-fgt'),
  Qt = Symbol.for('v-txt'),
  We = Symbol.for('v-cmt'),
  yr = Symbol.for('v-stc'),
  xn = []
let Ze = null
function Et(e = !1) {
  xn.push((Ze = e ? null : []))
}
function Fi() {
  xn.pop(), (Ze = xn[xn.length - 1] || null)
}
let hn = 1
function ia(e) {
  hn += e
}
function Mi(e) {
  return (
    (e.dynamicChildren = hn > 0 ? Ze || on : null),
    Fi(),
    hn > 0 && Ze && Ze.push(e),
    e
  )
}
function Df(e, t, n, r, s, o) {
  return Mi(Di(e, t, n, r, s, o, !0))
}
function Yt(e, t, n, r, s) {
  return Mi(_e(e, t, n, r, s, !0))
}
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key
}
const Kr = '__vInternal',
  xi = ({ key: e }) => e ?? null,
  br = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? ve(e) || we(e) || Z(e)
        ? { i: Fe, r: e, k: t, f: !!n }
        : e
      : null
  )
function Di(
  e,
  t = null,
  n = null,
  r = 0,
  s = null,
  o = e === Ue ? 0 : 1,
  a = !1,
  i = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xi(t),
    ref: t && br(t),
    scopeId: Wr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe,
  }
  return (
    i
      ? (Eo(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= ve(n) ? 8 : 16),
    hn > 0 &&
      !a &&
      Ze &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Ze.push(l),
    l
  )
}
const _e = $f
function $f(e, t = null, n = null, r = 0, s = null, o = !1) {
  if (((!e || e === Ti) && (e = We), pn(e))) {
    const i = wt(e, t, !0)
    return (
      n && Eo(i, n),
      hn > 0 &&
        !o &&
        Ze &&
        (i.shapeFlag & 6 ? (Ze[Ze.indexOf(e)] = i) : Ze.push(i)),
      (i.patchFlag |= -2),
      i
    )
  }
  if ((Gf(e) && (e = e.__vccOpts), t)) {
    t = Hf(t)
    let { class: i, style: l } = t
    i && !ve(i) && (t.class = Dr(i)),
      pe(l) && (Jl(l) && !J(l) && (l = ke({}, l)), (t.style = xr(l)))
  }
  const a = ve(e) ? 1 : ci(e) ? 128 : xf(e) ? 64 : pe(e) ? 4 : Z(e) ? 2 : 0
  return Di(e, t, n, r, s, a, o, !0)
}
function Hf(e) {
  return e ? (Jl(e) || Kr in e ? ke({}, e) : e) : null
}
function wt(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: a } = e,
    i = t ? Uf(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && xi(i),
    ref:
      t && t.ref ? (n && s ? (J(s) ? s.concat(br(t)) : [s, br(t)]) : br(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ue ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function $i(e = ' ', t = 0) {
  return _e(Qt, null, e, t)
}
function hy(e = '', t = !1) {
  return t ? (Et(), Yt(We, null, e)) : _e(We, null, e)
}
function Qe(e) {
  return e == null || typeof e == 'boolean'
    ? _e(We)
    : J(e)
    ? _e(Ue, null, e.slice())
    : typeof e == 'object'
    ? Ot(e)
    : _e(Qt, null, String(e))
}
function Ot(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e)
}
function Eo(e, t) {
  let n = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (J(t)) n = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Eo(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Kr in t)
        ? (t._ctx = Fe)
        : s === 3 &&
          Fe &&
          (Fe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    Z(t)
      ? ((t = { default: t, _ctx: Fe }), (n = 32))
      : ((t = String(t)), r & 64 ? ((n = 16), (t = [$i(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Uf(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const r = e[n]
    for (const s in r)
      if (s === 'class')
        t.class !== r.class && (t.class = Dr([t.class, r.class]))
      else if (s === 'style') t.style = xr([t.style, r.style])
      else if (Qn(s)) {
        const o = t[s],
          a = r[s]
        a &&
          o !== a &&
          !(J(o) && o.includes(a)) &&
          (t[s] = o ? [].concat(o, a) : a)
      } else s !== '' && (t[s] = r[s])
  }
  return t
}
function Ke(e, t, n, r = null) {
  ze(e, t, 7, [n, r])
}
const Wf = ki()
let jf = 0
function Bf(e, t, n) {
  const r = e.type,
    s = (t ? t.appContext : e.appContext) || Wf,
    o = {
      uid: jf++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Dl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ii(r, s),
      emitsOptions: li(r, s),
      emit: null,
      emitted: null,
      propsDefaults: me,
      inheritAttrs: r.inheritAttrs,
      ctx: me,
      data: me,
      props: me,
      attrs: me,
      slots: me,
      refs: me,
      setupState: me,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Ku.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Ce = null
const tt = () => Ce || Fe
let To,
  zt,
  ca = '__VUE_INSTANCE_SETTERS__'
;(zt = _s()[ca]) || (zt = _s()[ca] = []),
  zt.push((e) => (Ce = e)),
  (To = (e) => {
    zt.length > 1 ? zt.forEach((t) => t(e)) : zt[0](e)
  })
const $t = (e) => {
    To(e), e.scope.on()
  },
  xt = () => {
    Ce && Ce.scope.off(), To(null)
  }
function Hi(e) {
  return e.vnode.shapeFlag & 4
}
let mn = !1
function Vf(e, t = !1) {
  mn = t
  const { props: n, children: r } = e.vnode,
    s = Hi(e)
  Rf(e, n, s, t), Af(e, r)
  const o = s ? Kf(e, t) : void 0
  return (mn = !1), o
}
function Kf(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Ql(new Proxy(e.ctx, _f)))
  const { setup: r } = n
  if (r) {
    const s = (e.setupContext = r.length > 1 ? Wi(e) : null)
    $t(e), vn()
    const o = Mt(r, e, 0, [e.props, s])
    if ((En(), xt(), ro(o))) {
      if ((o.then(xt, xt), t))
        return o
          .then((a) => {
            Rs(e, a, t)
          })
          .catch((a) => {
            Tn(a, e, 0)
          })
      e.asyncDep = o
    } else Rs(e, o, t)
  } else Ui(e, t)
}
function Rs(e, t, n) {
  Z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : pe(t) && (e.setupState = ti(t)),
    Ui(e, n)
}
let ua
function Ui(e, t, n) {
  const r = e.type
  if (!e.render) {
    if (!t && ua && !r.render) {
      const s = r.template || bo(e).template
      if (s) {
        const { isCustomElement: o, compilerOptions: a } = e.appContext.config,
          { delimiters: i, compilerOptions: l } = r,
          c = ke(ke({ isCustomElement: o, delimiters: i }, a), l)
        r.render = ua(s, c)
      }
    }
    e.render = r.render || at
  }
  $t(e), vn(), bf(e), En(), xt()
}
function Yf(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return Ye(e, 'get', '$attrs'), t[n]
      },
    }))
  )
}
function Wi(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return Yf(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Co(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ti(Ql(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Mn) return Mn[n](e)
        },
        has(t, n) {
          return n in t || n in Mn
        },
      }))
    )
}
function Is(e, t = !0) {
  return Z(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Gf(e) {
  return Z(e) && '__vccOpts' in e
}
const ge = (e, t) => Uu(e, t, mn)
function lt(e, t, n) {
  const r = arguments.length
  return r === 2
    ? pe(t) && !J(t)
      ? pn(t)
        ? _e(e, null, [t])
        : _e(e, t)
      : _e(e, null, t)
    : (r > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : r === 3 && pn(n) && (n = [n]),
      _e(e, t, n))
}
const Xf = Symbol.for('v-scx'),
  qf = () => et(Xf),
  ji = '3.3.2',
  Jf = 'http://www.w3.org/2000/svg',
  Gt = typeof document < 'u' ? document : null,
  fa = Gt && Gt.createElement('template'),
  Qf = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, r) => {
      const s = t
        ? Gt.createElementNS(Jf, e)
        : Gt.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          r &&
          r.multiple != null &&
          s.setAttribute('multiple', r.multiple),
        s
      )
    },
    createText: (e) => Gt.createTextNode(e),
    createComment: (e) => Gt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Gt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, r, s, o) {
      const a = n ? n.previousSibling : t.lastChild
      if (s && (s === o || s.nextSibling))
        for (
          ;
          t.insertBefore(s.cloneNode(!0), n),
            !(s === o || !(s = s.nextSibling));

        );
      else {
        fa.innerHTML = r ? `<svg>${e}</svg>` : e
        const i = fa.content
        if (r) {
          const l = i.firstChild
          for (; l.firstChild; ) i.appendChild(l.firstChild)
          i.removeChild(l)
        }
        t.insertBefore(i, n)
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ]
    },
  }
function Zf(e, t, n) {
  const r = e._vtc
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function zf(e, t, n) {
  const r = e.style,
    s = ve(n)
  if (n && !s) {
    if (t && !ve(t)) for (const o in t) n[o] == null && Ps(r, o, '')
    for (const o in n) Ps(r, o, n[o])
  } else {
    const o = r.display
    s ? t !== n && (r.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (r.display = o)
  }
}
const da = /\s*!important$/
function Ps(e, t, n) {
  if (J(n)) n.forEach((r) => Ps(e, t, r))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const r = ed(e, t)
    da.test(n)
      ? e.setProperty(bn(r), n.replace(da, ''), 'important')
      : (e[r] = n)
  }
}
const ha = ['Webkit', 'Moz', 'ms'],
  as = {}
function ed(e, t) {
  const n = as[t]
  if (n) return n
  let r = _t(t)
  if (r !== 'filter' && r in e) return (as[t] = r)
  r = Mr(r)
  for (let s = 0; s < ha.length; s++) {
    const o = ha[s] + r
    if (o in e) return (as[t] = o)
  }
  return t
}
const pa = 'http://www.w3.org/1999/xlink'
function td(e, t, n, r, s) {
  if (r && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(pa, t.slice(6, t.length))
      : e.setAttributeNS(pa, t, n)
  else {
    const o = ru(t)
    n == null || (o && !Ml(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function nd(e, t, n, r, s, o, a) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && a(r, s, o), (e[t] = n ?? '')
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    e._value = n
    const c = i === 'OPTION' ? e.getAttribute('value') : e.value,
      d = n ?? ''
    c !== d && (e.value = d), n == null && e.removeAttribute(t)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (n = Ml(n))
      : n == null && c === 'string'
      ? ((n = ''), (l = !0))
      : c === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function rd(e, t, n, r) {
  e.addEventListener(t, n, r)
}
function sd(e, t, n, r) {
  e.removeEventListener(t, n, r)
}
function od(e, t, n, r, s = null) {
  const o = e._vei || (e._vei = {}),
    a = o[t]
  if (r && a) a.value = r
  else {
    const [i, l] = ad(t)
    if (r) {
      const c = (o[t] = cd(r, s))
      rd(e, i, c, l)
    } else a && (sd(e, i, a, l), (o[t] = void 0))
  }
}
const ma = /(?:Once|Passive|Capture)$/
function ad(e) {
  let t
  if (ma.test(e)) {
    t = {}
    let r
    for (; (r = e.match(ma)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : bn(e.slice(2)), t]
}
let ls = 0
const ld = Promise.resolve(),
  id = () => ls || (ld.then(() => (ls = 0)), (ls = Date.now()))
function cd(e, t) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= n.attached) return
    ze(ud(r, n.value), t, 5, [r])
  }
  return (n.value = e), (n.attached = id()), n
}
function ud(e, t) {
  if (J(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((r) => (s) => !s._stopped && r && r(s))
    )
  } else return t
}
const ga = /^on[a-z]/,
  fd = (e, t, n, r, s = !1, o, a, i, l) => {
    t === 'class'
      ? Zf(e, r, s)
      : t === 'style'
      ? zf(e, n, r)
      : Qn(t)
      ? eo(t) || od(e, t, n, r, a)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : dd(e, t, r, s)
        )
      ? nd(e, t, r, o, a, i, l)
      : (t === 'true-value'
          ? (e._trueValue = r)
          : t === 'false-value' && (e._falseValue = r),
        td(e, t, r, s))
  }
function dd(e, t, n, r) {
  return r
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && ga.test(t) && Z(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ga.test(t) && ve(n))
    ? !1
    : t in e
}
const Pt = 'transition',
  kn = 'animation',
  wo = (e, { slots: t }) => lt(af, hd(e), t)
wo.displayName = 'Transition'
const Bi = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
wo.props = ke({}, hi, Bi)
const Bt = (e, t = []) => {
    J(e) ? e.forEach((n) => n(...t)) : e && e(...t)
  },
  _a = (e) => (e ? (J(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function hd(e) {
  const t = {}
  for (const U in e) U in Bi || (t[U] = e[U])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: r,
      duration: s,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: l = o,
      appearActiveClass: c = a,
      appearToClass: d = i,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: g = `${n}-leave-active`,
      leaveToClass: v = `${n}-leave-to`,
    } = e,
    E = pd(s),
    w = E && E[0],
    I = E && E[1],
    {
      onBeforeEnter: p,
      onEnter: m,
      onEnterCancelled: C,
      onLeave: _,
      onLeaveCancelled: T,
      onBeforeAppear: A = p,
      onAppear: N = m,
      onAppearCancelled: O = C,
    } = t,
    D = (U, X, V) => {
      Vt(U, X ? d : i), Vt(U, X ? c : a), V && V()
    },
    W = (U, X) => {
      ;(U._isLeaving = !1), Vt(U, h), Vt(U, v), Vt(U, g), X && X()
    },
    G = (U) => (X, V) => {
      const fe = U ? N : m,
        Q = () => D(X, U, V)
      Bt(fe, [X, Q]),
        ya(() => {
          Vt(X, U ? l : o), At(X, U ? d : i), _a(fe) || ba(X, r, w, Q)
        })
    }
  return ke(t, {
    onBeforeEnter(U) {
      Bt(p, [U]), At(U, o), At(U, a)
    },
    onBeforeAppear(U) {
      Bt(A, [U]), At(U, l), At(U, c)
    },
    onEnter: G(!1),
    onAppear: G(!0),
    onLeave(U, X) {
      U._isLeaving = !0
      const V = () => W(U, X)
      At(U, h),
        _d(),
        At(U, g),
        ya(() => {
          U._isLeaving && (Vt(U, h), At(U, v), _a(_) || ba(U, r, I, V))
        }),
        Bt(_, [U, V])
    },
    onEnterCancelled(U) {
      D(U, !1), Bt(C, [U])
    },
    onAppearCancelled(U) {
      D(U, !0), Bt(O, [U])
    },
    onLeaveCancelled(U) {
      W(U), Bt(T, [U])
    },
  })
}
function pd(e) {
  if (e == null) return null
  if (pe(e)) return [is(e.enter), is(e.leave)]
  {
    const t = is(e)
    return [t, t]
  }
}
function is(e) {
  return Fl(e)
}
function At(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function Vt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function ya(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let md = 0
function ba(e, t, n, r) {
  const s = (e._endId = ++md),
    o = () => {
      s === e._endId && r()
    }
  if (n) return setTimeout(o, n)
  const { type: a, timeout: i, propCount: l } = gd(e, t)
  if (!a) return r()
  const c = a + 'end'
  let d = 0
  const h = () => {
      e.removeEventListener(c, g), o()
    },
    g = (v) => {
      v.target === e && ++d >= l && h()
    }
  setTimeout(() => {
    d < l && h()
  }, i + 1),
    e.addEventListener(c, g)
}
function gd(e, t) {
  const n = window.getComputedStyle(e),
    r = (E) => (n[E] || '').split(', '),
    s = r(`${Pt}Delay`),
    o = r(`${Pt}Duration`),
    a = va(s, o),
    i = r(`${kn}Delay`),
    l = r(`${kn}Duration`),
    c = va(i, l)
  let d = null,
    h = 0,
    g = 0
  t === Pt
    ? a > 0 && ((d = Pt), (h = a), (g = o.length))
    : t === kn
    ? c > 0 && ((d = kn), (h = c), (g = l.length))
    : ((h = Math.max(a, c)),
      (d = h > 0 ? (a > c ? Pt : kn) : null),
      (g = d ? (d === Pt ? o.length : l.length) : 0))
  const v =
    d === Pt && /\b(transform|all)(,|$)/.test(r(`${Pt}Property`).toString())
  return { type: d, timeout: h, propCount: g, hasTransform: v }
}
function va(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, r) => Ea(n) + Ea(e[r])))
}
function Ea(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function _d() {
  return document.body.offsetHeight
}
const Vi = ke({ patchProp: fd }, Qf)
let Dn,
  Ta = !1
function yd() {
  return Dn || (Dn = Sf(Vi))
}
function bd() {
  return (Dn = Ta ? Dn : Ff(Vi)), (Ta = !0), Dn
}
const vd = (...e) => {
    const t = yd().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ki(r)
        if (!s) return
        const o = t._component
        !Z(o) && !o.render && !o.template && (o.template = s.innerHTML),
          (s.innerHTML = '')
        const a = n(s, !1, s instanceof SVGElement)
        return (
          s instanceof Element &&
            (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')),
          a
        )
      }),
      t
    )
  },
  Ed = (...e) => {
    const t = bd().createApp(...e),
      { mount: n } = t
    return (
      (t.mount = (r) => {
        const s = Ki(r)
        if (s) return n(s, !0, s instanceof SVGElement)
      }),
      t
    )
  }
function Ki(e) {
  return ve(e) ? document.querySelector(e) : e
}
const Td =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  Cd =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  wd = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
function Ld(e, t) {
  if (
    e !== '__proto__' &&
    !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)
  )
    return t
}
function kd(e, t = {}) {
  if (typeof e != 'string') return e
  const n = e.toLowerCase().trim()
  if (n === 'true') return !0
  if (n === 'false') return !1
  if (n === 'null') return null
  if (n === 'nan') return Number.NaN
  if (n === 'infinity') return Number.POSITIVE_INFINITY
  if (n !== 'undefined') {
    if (!wd.test(e)) {
      if (t.strict) throw new SyntaxError('Invalid JSON')
      return e
    }
    try {
      return Td.test(e) || Cd.test(e) ? JSON.parse(e, Ld) : JSON.parse(e)
    } catch (r) {
      if (t.strict) throw r
      return e
    }
  }
}
const Rd = /#/g,
  Id = /&/g,
  Pd = /=/g,
  Yi = /\+/g,
  Ad = /%5e/gi,
  Nd = /%60/gi,
  Od = /%7c/gi,
  Sd = /%20/gi
function Fd(e) {
  return encodeURI('' + e).replace(Od, '|')
}
function As(e) {
  return Fd(typeof e == 'string' ? e : JSON.stringify(e))
    .replace(Yi, '%2B')
    .replace(Sd, '+')
    .replace(Rd, '%23')
    .replace(Id, '%26')
    .replace(Nd, '`')
    .replace(Ad, '^')
}
function cs(e) {
  return As(e).replace(Pd, '%3D')
}
function Gi(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function Md(e) {
  return Gi(e.replace(Yi, ' '))
}
function xd(e = '') {
  const t = {}
  e[0] === '?' && (e = e.slice(1))
  for (const n of e.split('&')) {
    const r = n.match(/([^=]+)=?(.*)/) || []
    if (r.length < 2) continue
    const s = Gi(r[1])
    if (s === '__proto__' || s === 'constructor') continue
    const o = Md(r[2] || '')
    typeof t[s] < 'u'
      ? Array.isArray(t[s])
        ? t[s].push(o)
        : (t[s] = [t[s], o])
      : (t[s] = o)
  }
  return t
}
function Dd(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((n) => `${cs(e)}=${As(n)}`).join('&')
        : `${cs(e)}=${As(t)}`
      : cs(e)
  )
}
function $d(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => Dd(t, e[t]))
    .join('&')
}
const Hd = /^\w{2,}:([/\\]{1,2})/,
  Ud = /^\w{2,}:([/\\]{2})?/,
  Wd = /^([/\\]\s*){2,}[^/\\]/
function tr(e, t = {}) {
  return (
    typeof t == 'boolean' && (t = { acceptRelative: t }),
    t.strict ? Hd.test(e) : Ud.test(e) || (t.acceptRelative ? Wd.test(e) : !1)
  )
}
const jd = /\/$|\/\?/
function Ns(e = '', t = !1) {
  return t ? jd.test(e) : e.endsWith('/')
}
function Xi(e = '', t = !1) {
  if (!t) return (Ns(e) ? e.slice(0, -1) : e) || '/'
  if (!Ns(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return (n.slice(0, -1) || '/') + (r.length > 0 ? `?${r.join('?')}` : '')
}
function Bd(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if (Ns(e, !0)) return e || '/'
  const [n, ...r] = e.split('?')
  return n + '/' + (r.length > 0 ? `?${r.join('?')}` : '')
}
function Vd(e = '') {
  return e.startsWith('/')
}
function Kd(e = '') {
  return (Vd(e) ? e.slice(1) : e) || '/'
}
function Yd(e, t) {
  if (qi(t) || tr(e)) return e
  const n = Xi(t)
  return e.startsWith(n) ? e : nr(n, e)
}
function Ca(e, t) {
  if (qi(t)) return e
  const n = Xi(t)
  if (!e.startsWith(n)) return e
  const r = e.slice(n.length)
  return r[0] === '/' ? r : '/' + r
}
function Gd(e, t) {
  const n = Yr(e),
    r = { ...xd(n.search), ...t }
  return (n.search = $d(r)), qd(n)
}
function qi(e) {
  return !e || e === '/'
}
function Xd(e) {
  return e && e !== '/'
}
function nr(e, ...t) {
  let n = e || ''
  for (const r of t.filter((s) => Xd(s))) n = n ? Bd(n) + Kd(r) : r
  return n
}
function Yr(e = '', t) {
  if (!tr(e, { acceptRelative: !0 })) return t ? Yr(t + e) : wa(e)
  const [n = '', r, s = ''] = (
      e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = '', a = ''] = (s.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: i, search: l, hash: c } = wa(a.replace(/\/(?=[A-Za-z]:)/, ''))
  return {
    protocol: n,
    auth: r ? r.slice(0, Math.max(0, r.length - 1)) : '',
    host: o,
    pathname: i,
    search: l,
    hash: c,
  }
}
function wa(e = '') {
  const [t = '', n = '', r = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1)
  return { pathname: t, search: n, hash: r }
}
function qd(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') +
    e.hash
  return e.protocol
    ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t
    : t
}
class Jd extends Error {
  constructor() {
    super(...arguments), (this.name = 'FetchError')
  }
}
function Qd(e, t, n) {
  let r = ''
  t && (r = t.message),
    e && n
      ? (r = `${r} (${n.status} ${n.statusText} (${e.toString()}))`)
      : e && (r = `${r} (${e.toString()})`)
  const s = new Jd(r)
  return (
    Object.defineProperty(s, 'request', {
      get() {
        return e
      },
    }),
    Object.defineProperty(s, 'response', {
      get() {
        return n
      },
    }),
    Object.defineProperty(s, 'data', {
      get() {
        return n && n._data
      },
    }),
    Object.defineProperty(s, 'status', {
      get() {
        return n && n.status
      },
    }),
    Object.defineProperty(s, 'statusText', {
      get() {
        return n && n.statusText
      },
    }),
    Object.defineProperty(s, 'statusCode', {
      get() {
        return n && n.status
      },
    }),
    Object.defineProperty(s, 'statusMessage', {
      get() {
        return n && n.statusText
      },
    }),
    s
  )
}
const Zd = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function La(e = 'GET') {
  return Zd.has(e.toUpperCase())
}
function zd(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === 'Object') ||
      typeof e.toJSON == 'function'
}
const eh = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  th = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function nh(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift() || ''
  return th.test(t)
    ? 'json'
    : eh.has(t) || t.startsWith('text/')
    ? 'text'
    : 'blob'
}
const rh = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function Ji(e) {
  const { fetch: t, Headers: n } = e
  function r(a) {
    const i = (a.error && a.error.name === 'AbortError') || !1
    if (a.options.retry !== !1 && !i) {
      let c
      typeof a.options.retry == 'number'
        ? (c = a.options.retry)
        : (c = La(a.options.method) ? 0 : 1)
      const d = (a.response && a.response.status) || 500
      if (c > 0 && rh.has(d))
        return s(a.request, { ...a.options, retry: c - 1 })
    }
    const l = Qd(a.request, a.error, a.response)
    throw (Error.captureStackTrace && Error.captureStackTrace(l, s), l)
  }
  const s = async function (i, l = {}) {
      const c = {
        request: i,
        options: { ...e.defaults, ...l },
        response: void 0,
        error: void 0,
      }
      c.options.onRequest && (await c.options.onRequest(c)),
        typeof c.request == 'string' &&
          (c.options.baseURL && (c.request = Yd(c.request, c.options.baseURL)),
          (c.options.query || c.options.params) &&
            (c.request = Gd(c.request, {
              ...c.options.params,
              ...c.options.query,
            })),
          c.options.body &&
            La(c.options.method) &&
            zd(c.options.body) &&
            ((c.options.body =
              typeof c.options.body == 'string'
                ? c.options.body
                : JSON.stringify(c.options.body)),
            (c.options.headers = new n(c.options.headers)),
            c.options.headers.has('content-type') ||
              c.options.headers.set('content-type', 'application/json'),
            c.options.headers.has('accept') ||
              c.options.headers.set('accept', 'application/json'))),
        (c.response = await t(c.request, c.options).catch(
          async (h) => (
            (c.error = h),
            c.options.onRequestError && (await c.options.onRequestError(c)),
            r(c)
          )
        ))
      const d =
        (c.options.parseResponse ? 'json' : c.options.responseType) ||
        nh(c.response.headers.get('content-type') || '')
      if (d === 'json') {
        const h = await c.response.text(),
          g = c.options.parseResponse || kd
        c.response._data = g(h)
      } else
        d === 'stream'
          ? (c.response._data = c.response.body)
          : (c.response._data = await c.response[d]())
      return (
        c.options.onResponse && (await c.options.onResponse(c)),
        c.response.status >= 400 && c.response.status < 600
          ? (c.options.onResponseError && (await c.options.onResponseError(c)),
            r(c))
          : c.response
      )
    },
    o = function (i, l) {
      return s(i, l).then((c) => c._data)
    }
  return (
    (o.raw = s),
    (o.native = t),
    (o.create = (a = {}) => Ji({ ...e, defaults: { ...e.defaults, ...a } })),
    o
  )
}
const Qi = (function () {
    if (typeof globalThis < 'u') return globalThis
    if (typeof self < 'u') return self
    if (typeof window < 'u') return window
    if (typeof global < 'u') return global
    throw new Error('unable to locate global object')
  })(),
  sh =
    Qi.fetch ||
    (() =>
      Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  oh = Qi.Headers,
  ah = Ji({ fetch: sh, Headers: oh }),
  lh = ah,
  ih = () => {
    var e
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    )
  },
  Ir = ih().app,
  ch = () => Ir.baseURL,
  uh = () => Ir.buildAssetsDir,
  fh = (...e) => nr(Zi(), uh(), ...e),
  Zi = (...e) => {
    const t = Ir.cdnURL || Ir.baseURL
    return e.length ? nr(t, ...e) : t
  }
;(globalThis.__buildAssetsURL = fh), (globalThis.__publicAssetsURL = Zi)
function Os(e, t = {}, n) {
  for (const r in e) {
    const s = e[r],
      o = n ? `${n}:${r}` : r
    typeof s == 'object' && s !== null
      ? Os(s, t, o)
      : typeof s == 'function' && (t[o] = s)
  }
  return t
}
const dh = { run: (e) => e() },
  hh = () => dh,
  zi = typeof console.createTask < 'u' ? console.createTask : hh
function ph(e, t) {
  const n = t.shift(),
    r = zi(n)
  return e.reduce(
    (s, o) => s.then(() => r.run(() => o(...t))),
    Promise.resolve()
  )
}
function mh(e, t) {
  const n = t.shift(),
    r = zi(n)
  return Promise.all(e.map((s) => r.run(() => s(...t))))
}
function us(e, t) {
  for (const n of [...e]) n(t)
}
class gh {
  constructor() {
    ;(this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != 'function') return () => {}
    const s = t
    let o
    for (; this._deprecatedHooks[t]; )
      (o = this._deprecatedHooks[t]), (t = o.to)
    if (o && !r.allowDeprecated) {
      let a = o.message
      a ||
        (a =
          `${s} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(a) ||
          (console.warn(a), this._deprecatedMessages.add(a))
    }
    if (!n.name)
      try {
        Object.defineProperty(n, 'name', {
          get: () => '_' + t.replace(/\W+/g, '_') + '_hook_cb',
          configurable: !0,
        })
      } catch {}
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(n),
      () => {
        n && (this.removeHook(t, n), (n = void 0))
      }
    )
  }
  hookOnce(t, n) {
    let r,
      s = (...o) => (
        typeof r == 'function' && r(), (r = void 0), (s = void 0), n(...o)
      )
    return (r = this.hook(t, s)), r
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n)
      r !== -1 && this._hooks[t].splice(r, 1),
        this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == 'string' ? { to: n } : n
    const r = this._hooks[t] || []
    delete this._hooks[t]
    for (const s of r) this.hook(t, s)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
    for (const n in t) this.deprecateHook(n, t[n])
  }
  addHooks(t) {
    const n = Os(t),
      r = Object.keys(n).map((s) => this.hook(s, n[s]))
    return () => {
      for (const s of r.splice(0, r.length)) s()
    }
  }
  removeHooks(t) {
    const n = Os(t)
    for (const r in n) this.removeHook(r, n[r])
  }
  removeAllHooks() {
    for (const t in this._hooks) delete this._hooks[t]
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(ph, t, ...n)
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(mh, t, ...n)
  }
  callHookWith(t, n, ...r) {
    const s =
      this._before || this._after ? { name: n, args: r, context: {} } : void 0
    this._before && us(this._before, s)
    const o = t(n in this._hooks ? [...this._hooks[n]] : [], r)
    return o instanceof Promise
      ? o.finally(() => {
          this._after && s && us(this._after, s)
        })
      : (this._after && s && us(this._after, s), o)
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t)
          n !== -1 && this._before.splice(n, 1)
        }
      }
    )
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t)
          n !== -1 && this._after.splice(n, 1)
        }
      }
    )
  }
}
function ec() {
  return new gh()
}
function _h(e = {}) {
  let t,
    n = !1
  const r = (a) => {
    if (t && t !== a) throw new Error('Context conflict')
  }
  let s
  if (e.asyncContext) {
    const a = e.AsyncLocalStorage || globalThis.AsyncLocalStorage
    a
      ? (s = new a())
      : console.warn('[unctx] `AsyncLocalStorage` is not provided.')
  }
  const o = () => {
    if (s && t === void 0) {
      const a = s.getStore()
      if (a !== void 0) return a
    }
    return t
  }
  return {
    use: () => {
      const a = o()
      if (a === void 0) throw new Error('Context is not available')
      return a
    },
    tryUse: () => o(),
    set: (a, i) => {
      i || r(a), (t = a), (n = !0)
    },
    unset: () => {
      ;(t = void 0), (n = !1)
    },
    call: (a, i) => {
      r(a), (t = a)
      try {
        return s ? s.run(a, i) : i()
      } finally {
        n || (t = void 0)
      }
    },
    async callAsync(a, i) {
      t = a
      const l = () => {
          t = a
        },
        c = () => (t === a ? l : void 0)
      Ss.add(c)
      try {
        const d = s ? s.run(a, i) : i()
        return n || (t = void 0), await d
      } finally {
        Ss.delete(c)
      }
    },
  }
}
function yh(e = {}) {
  const t = {}
  return {
    get(n, r = {}) {
      return t[n] || (t[n] = _h({ ...e, ...r })), t[n], t[n]
    },
  }
}
const Pr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof global < 'u'
      ? global
      : typeof window < 'u'
      ? window
      : {},
  ka = '__unctx__',
  bh = Pr[ka] || (Pr[ka] = yh()),
  vh = (e, t = {}) => bh.get(e, t),
  Ra = '__unctx_async_handlers__',
  Ss = Pr[Ra] || (Pr[Ra] = new Set())
function Ar(e) {
  const t = []
  for (const s of Ss) {
    const o = s()
    o && t.push(o)
  }
  const n = () => {
    for (const s of t) s()
  }
  let r = e()
  return (
    r &&
      typeof r == 'object' &&
      'catch' in r &&
      (r = r.catch((s) => {
        throw (n(), s)
      })),
    [r, n]
  )
}
const tc = vh('nuxt-app'),
  Eh = '__nuxt_plugin'
function Th(e) {
  let t = 0
  const n = {
    provide: void 0,
    globalName: 'nuxt',
    versions: {
      get nuxt() {
        return '3.5.0'
      },
      get vue() {
        return n.vueApp.version
      },
    },
    payload: it({
      data: {},
      state: {},
      _errors: {},
      ...(window.__NUXT__ ?? {}),
    }),
    static: { data: {} },
    runWithContext: (s) => kh(n, s),
    isHydrating: !0,
    deferHydration() {
      if (!n.isHydrating) return () => {}
      t++
      let s = !1
      return () => {
        if (!s && ((s = !0), t--, t === 0))
          return (n.isHydrating = !1), n.callHook('app:suspense:resolve')
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...e,
  }
  ;(n.hooks = ec()),
    (n.hook = n.hooks.hook),
    (n.callHook = n.hooks.callHook),
    (n.provide = (s, o) => {
      const a = '$' + s
      dr(n, a, o), dr(n.vueApp.config.globalProperties, a, o)
    }),
    dr(n.vueApp, '$nuxt', n),
    dr(n.vueApp.config.globalProperties, '$nuxt', n)
  {
    window.addEventListener('nuxt.preloadError', (o) => {
      n.callHook('app:chunkError', { error: o.payload })
    })
    const s = n.hook('app:error', (...o) => {
      console.error('[nuxt] error caught during app initialization', ...o)
    })
    n.hook('app:mounted', s)
  }
  const r = it(n.payload.config)
  return n.provide('config', r), n
}
async function Ch(e, t) {
  if (typeof t != 'function') return
  const { provide: n } = (await e.runWithContext(() => t(e))) || {}
  if (n && typeof n == 'object') for (const r in n) e.provide(r, n[r])
}
async function wh(e, t) {
  var s
  const n = [],
    r = []
  for (const o of t) {
    const a = Ch(e, o)
    ;(s = o.meta) != null && s.parallel
      ? n.push(a.catch((i) => r.push(i)))
      : await a
  }
  if ((await Promise.all(n), r.length)) throw r[0]
}
function Lh(e) {
  const t = []
  for (const n of e) {
    if (typeof n != 'function') continue
    let r = n
    n.length > 1 && (r = (s) => n(s, s.provide)), t.push(r)
  }
  return (
    t.sort((n, r) => {
      var s, o
      return (
        (((s = n.meta) == null ? void 0 : s.order) || Nr.default) -
        (((o = r.meta) == null ? void 0 : o.order) || Nr.default)
      )
    }),
    t
  )
}
const Nr = { pre: -20, default: 0, post: 20 }
function kt(e, t) {
  var r
  if (typeof e == 'function') return kt({ setup: e }, t)
  const n = (s) => {
    if ((e.hooks && s.hooks.addHooks(e.hooks), e.setup)) return e.setup(s)
  }
  return (
    (n.meta = {
      name:
        (t == null ? void 0 : t.name) ||
        e.name ||
        ((r = e.setup) == null ? void 0 : r.name),
      parallel: e.parallel,
      order:
        (t == null ? void 0 : t.order) ||
        e.order ||
        Nr[e.enforce || 'default'] ||
        Nr.default,
    }),
    (n[Eh] = !0),
    n
  )
}
function kh(e, t, n) {
  const r = () => (n ? t(...n) : t())
  return tc.set(e), e.vueApp.runWithContext(r)
}
function Oe() {
  const e = tc.tryUse()
  if (!e) {
    const t = tt()
    if (!t) throw new Error('[nuxt] instance unavailable')
    return t.appContext.app.$nuxt
  }
  return e
}
function Lo() {
  return Oe().$config
}
function dr(e, t, n) {
  Object.defineProperty(e, t, { get: () => n })
}
const Rh = 'modulepreload',
  Ih = function (e, t) {
    return e.startsWith('.') ? new URL(e, t).href : e
  },
  Ia = {},
  Ph = function (t, n, r) {
    if (!n || n.length === 0) return t()
    const s = document.getElementsByTagName('link')
    return Promise.all(
      n.map((o) => {
        if (((o = Ih(o, r)), o in Ia)) return
        Ia[o] = !0
        const a = o.endsWith('.css'),
          i = a ? '[rel="stylesheet"]' : ''
        if (!!r)
          for (let d = s.length - 1; d >= 0; d--) {
            const h = s[d]
            if (h.href === o && (!a || h.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${i}`)) return
        const c = document.createElement('link')
        if (
          ((c.rel = a ? 'stylesheet' : Rh),
          a || ((c.as = 'script'), (c.crossOrigin = '')),
          (c.href = o),
          document.head.appendChild(c),
          a)
        )
          return new Promise((d, h) => {
            c.addEventListener('load', d),
              c.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              )
          })
      })
    ).then(() => t())
  },
  ko = (...e) =>
    Ph(...e).catch((t) => {
      const n = new Event('nuxt.preloadError')
      throw ((n.payload = t), window.dispatchEvent(n), t)
    }),
  Ah = -1,
  Nh = -2,
  Oh = -3,
  Sh = -4,
  Fh = -5,
  Mh = -6
function xh(e, t) {
  return Dh(JSON.parse(e), t)
}
function Dh(e, t) {
  if (typeof e == 'number') return s(e, !0)
  if (!Array.isArray(e) || e.length === 0) throw new Error('Invalid input')
  const n = e,
    r = Array(n.length)
  function s(o, a = !1) {
    if (o === Ah) return
    if (o === Oh) return NaN
    if (o === Sh) return 1 / 0
    if (o === Fh) return -1 / 0
    if (o === Mh) return -0
    if (a) throw new Error('Invalid input')
    if (o in r) return r[o]
    const i = n[o]
    if (!i || typeof i != 'object') r[o] = i
    else if (Array.isArray(i))
      if (typeof i[0] == 'string') {
        const l = i[0],
          c = t == null ? void 0 : t[l]
        if (c) return (r[o] = c(s(i[1])))
        switch (l) {
          case 'Date':
            r[o] = new Date(i[1])
            break
          case 'Set':
            const d = new Set()
            r[o] = d
            for (let v = 1; v < i.length; v += 1) d.add(s(i[v]))
            break
          case 'Map':
            const h = new Map()
            r[o] = h
            for (let v = 1; v < i.length; v += 2) h.set(s(i[v]), s(i[v + 1]))
            break
          case 'RegExp':
            r[o] = new RegExp(i[1], i[2])
            break
          case 'Object':
            r[o] = Object(i[1])
            break
          case 'BigInt':
            r[o] = BigInt(i[1])
            break
          case 'null':
            const g = Object.create(null)
            r[o] = g
            for (let v = 1; v < i.length; v += 2) g[i[v]] = s(i[v + 1])
            break
          default:
            throw new Error(`Unknown type ${l}`)
        }
      } else {
        const l = new Array(i.length)
        r[o] = l
        for (let c = 0; c < i.length; c += 1) {
          const d = i[c]
          d !== Nh && (l[c] = s(d))
        }
      }
    else {
      const l = {}
      r[o] = l
      for (const c in i) {
        const d = i[c]
        l[c] = s(d)
      }
    }
    return r[o]
  }
  return s(0)
}
function $h(e) {
  return Array.isArray(e) ? e : [e]
}
const nc = ['title', 'script', 'style', 'noscript'],
  rc = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  Hh = [
    'title',
    'titleTemplate',
    'templateParams',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ],
  Uh = [
    'base',
    'title',
    'titleTemplate',
    'bodyAttrs',
    'htmlAttrs',
    'templateParams',
  ],
  Wh = [
    'tagPosition',
    'tagPriority',
    'tagDuplicateStrategy',
    'innerHTML',
    'textContent',
  ]
function sc(e) {
  let t = 9
  for (let n = 0; n < e.length; ) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function Fs(e) {
  return sc(
    `${e.tag}:${e.textContent || e.innerHTML || ''}:${Object.entries(e.props)
      .map(([t, n]) => `${t}:${String(n)}`)
      .join(',')}`
  )
}
function jh(e) {
  let t = 9
  for (const n of e)
    for (let r = 0; r < n.length; ) t = Math.imul(t ^ n.charCodeAt(r++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
function oc(e, t) {
  const { props: n, tag: r } = e
  if (Uh.includes(r)) return r
  if (r === 'link' && n.rel === 'canonical') return 'canonical'
  if (n.charset) return 'charset'
  const s = ['id']
  r === 'meta' && s.push('name', 'property', 'http-equiv')
  for (const o of s)
    if (typeof n[o] < 'u') {
      const a = String(n[o])
      return t && !t(a) ? !1 : `${r}:${o}:${a}`
    }
  return !1
}
function Pa(e, t) {
  return e == null ? t || null : typeof e == 'function' ? e(t) : e
}
function hr(e, t = !1, n) {
  const { tag: r, $el: s } = e
  s &&
    (Object.entries(r.props).forEach(([o, a]) => {
      a = String(a)
      const i = `attr:${o}`
      if (o === 'class') {
        if (!a) return
        for (const l of a.split(' ')) {
          const c = `${i}:${l}`
          n && n(e, c, () => s.classList.remove(l)),
            s.classList.contains(l) || s.classList.add(l)
        }
        return
      }
      n && !o.startsWith('data-h-') && n(e, i, () => s.removeAttribute(o)),
        (t || s.getAttribute(o) !== a) && s.setAttribute(o, a)
    }),
    nc.includes(r.tag) &&
      (r.textContent && r.textContent !== s.textContent
        ? (s.textContent = r.textContent)
        : r.innerHTML &&
          r.innerHTML !== s.innerHTML &&
          (s.innerHTML = r.innerHTML)))
}
let Rn = !1
async function Bh(e, t = {}) {
  var g, v
  const n = { shouldRender: !0 }
  if ((await e.hooks.callHook('dom:beforeRender', n), !n.shouldRender)) return
  const r = t.document || e.resolvedOptions.document || window.document,
    s = (await e.resolveTags()).map(i)
  if (
    e.resolvedOptions.experimentalHashHydration &&
    ((Rn = Rn || e._hash || !1), Rn)
  ) {
    const E = jh(s.map((w) => w.tag._h))
    if (Rn === E) return
    Rn = E
  }
  const o = e._popSideEffectQueue()
  e.headEntries()
    .map((E) => E._sde)
    .forEach((E) => {
      Object.entries(E).forEach(([w, I]) => {
        o[w] = I
      })
    })
  const a = (E, w, I) => {
    ;(w = `${E.renderId}:${w}`), E.entry && (E.entry._sde[w] = I), delete o[w]
  }
  function i(E) {
    const w = e.headEntries().find((p) => p._i === E._e),
      I = {
        renderId: E._d || Fs(E),
        $el: null,
        shouldRender: !0,
        tag: E,
        entry: w,
        markSideEffect: (p, m) => a(I, p, m),
      }
    return I
  }
  const l = [],
    c = { body: [], head: [] },
    d = (E) => {
      ;(e._elMap[E.renderId] = E.$el),
        l.push(E),
        a(E, 'el', () => {
          var w
          ;(w = E.$el) == null || w.remove(), delete e._elMap[E.renderId]
        })
    }
  for (const E of s) {
    if ((await e.hooks.callHook('dom:beforeRenderTag', E), !E.shouldRender))
      continue
    const { tag: w } = E
    if (w.tag === 'title') {
      ;(r.title = w.textContent || ''), l.push(E)
      continue
    }
    if (w.tag === 'htmlAttrs' || w.tag === 'bodyAttrs') {
      ;(E.$el = r[w.tag === 'htmlAttrs' ? 'documentElement' : 'body']),
        hr(E, !1, a),
        l.push(E)
      continue
    }
    if (
      ((E.$el = e._elMap[E.renderId]),
      !E.$el &&
        w.key &&
        (E.$el = r.querySelector(
          `${
            (g = w.tagPosition) != null && g.startsWith('body')
              ? 'body'
              : 'head'
          } > ${w.tag}[data-h-${w._h}]`
        )),
      E.$el)
    ) {
      E.tag._d && hr(E), d(E)
      continue
    }
    c[
      (v = w.tagPosition) != null && v.startsWith('body') ? 'body' : 'head'
    ].push(E)
  }
  const h = { bodyClose: void 0, bodyOpen: void 0, head: void 0 }
  Object.entries(c).forEach(([E, w]) => {
    var p
    if (!w.length) return
    const I = (p = r == null ? void 0 : r[E]) == null ? void 0 : p.children
    if (I) {
      for (const m of [...I].reverse()) {
        const C = m.tagName.toLowerCase()
        if (!rc.includes(C)) continue
        const _ = m
            .getAttributeNames()
            .reduce((O, D) => ({ ...O, [D]: m.getAttribute(D) }), {}),
          T = { tag: C, props: _ }
        m.innerHTML && (T.innerHTML = m.innerHTML)
        const A = Fs(T)
        let N = w.findIndex((O) => (O == null ? void 0 : O.renderId) === A)
        if (N === -1) {
          const O = oc(T)
          N = w.findIndex(
            (D) => (D == null ? void 0 : D.tag._d) && D.tag._d === O
          )
        }
        if (N !== -1) {
          const O = w[N]
          ;(O.$el = m), hr(O), d(O), delete w[N]
        }
      }
      w.forEach((m) => {
        const C = m.tag.tagPosition || 'head'
        ;(h[C] = h[C] || r.createDocumentFragment()),
          m.$el || ((m.$el = r.createElement(m.tag.tag)), hr(m, !0)),
          h[C].appendChild(m.$el),
          d(m)
      })
    }
  }),
    h.head && r.head.appendChild(h.head),
    h.bodyOpen && r.body.insertBefore(h.bodyOpen, r.body.firstChild),
    h.bodyClose && r.body.appendChild(h.bodyClose)
  for (const E of l) await e.hooks.callHook('dom:renderTag', E)
  Object.values(o).forEach((E) => E())
}
let fs = null
async function Vh(e, t = {}) {
  function n() {
    return (fs = null), Bh(e, t)
  }
  const r = t.delayFn || ((s) => setTimeout(s, 10))
  return (fs = fs || new Promise((s) => r(() => s(n()))))
}
function Kh(e) {
  return {
    hooks: {
      'entries:updated': function (t) {
        if (
          typeof (e == null ? void 0 : e.document) > 'u' &&
          typeof window > 'u'
        )
          return
        let n = e == null ? void 0 : e.delayFn
        !n && typeof requestAnimationFrame < 'u' && (n = requestAnimationFrame),
          Vh(t, {
            document: (e == null ? void 0 : e.document) || window.document,
            delayFn: n,
          })
      },
    },
  }
}
function Yh(e) {
  var t
  return (
    ((t =
      e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) ==
    null
      ? void 0
      : t.getAttribute('content')) || !1
  )
}
const Aa = { critical: 2, high: 9, low: 12, base: -1, title: 1, meta: 10 }
function Na(e) {
  if (typeof e.tagPriority == 'number') return e.tagPriority
  if (e.tag === 'meta') {
    if (e.props.charset) return -2
    if (e.props['http-equiv'] === 'content-security-policy') return 0
  }
  const t = e.tagPriority || e.tag
  return t in Aa ? Aa[t] : 10
}
const Gh = [
  { prefix: 'before:', offset: -1 },
  { prefix: 'after:', offset: 1 },
]
function Xh() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const t = (n) => {
          var r
          return (r = e.tags.find((s) => s._d === n)) == null ? void 0 : r._p
        }
        for (const { prefix: n, offset: r } of Gh)
          for (const s of e.tags.filter(
            (o) =>
              typeof o.tagPriority == 'string' && o.tagPriority.startsWith(n)
          )) {
            const o = t(s.tagPriority.replace(n, ''))
            typeof o < 'u' && (s._p = o + r)
          }
        e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Na(n) - Na(r))
      },
    },
  }
}
function qh() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        const { tags: t } = e
        let n = t.findIndex((s) => s.tag === 'titleTemplate')
        const r = t.findIndex((s) => s.tag === 'title')
        if (r !== -1 && n !== -1) {
          const s = Pa(t[n].textContent, t[r].textContent)
          s !== null ? (t[r].textContent = s || t[r].textContent) : delete t[r]
        } else if (n !== -1) {
          const s = Pa(t[n].textContent)
          s !== null && ((t[n].textContent = s), (t[n].tag = 'title'), (n = -1))
        }
        n !== -1 && delete t[n], (e.tags = t.filter(Boolean))
      },
    },
  }
}
function Jh() {
  return {
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        typeof e.props.body < 'u' &&
          ((e.tagPosition = 'bodyClose'), delete e.props.body)
      },
    },
  }
}
const Qh = ['link', 'style', 'script', 'noscript']
function Zh() {
  return {
    hooks: {
      'tag:normalise': ({ tag: e, resolvedOptions: t }) => {
        t.experimentalHashHydration === !0 && (e._h = Fs(e)),
          e.key &&
            Qh.includes(e.tag) &&
            ((e._h = sc(e.key)), (e.props[`data-h-${e._h}`] = ''))
      },
    },
  }
}
const Oa = ['script', 'link', 'bodyAttrs']
function zh() {
  const e = (t, n) => {
    const r = {},
      s = {}
    Object.entries(n.props).forEach(([a, i]) => {
      a.startsWith('on') && typeof i == 'function' ? (s[a] = i) : (r[a] = i)
    })
    let o
    return (
      t === 'dom' &&
        n.tag === 'script' &&
        typeof r.src == 'string' &&
        typeof s.onload < 'u' &&
        ((o = r.src), delete r.src),
      { props: r, eventHandlers: s, delayedSrc: o }
    )
  }
  return {
    hooks: {
      'ssr:render': function (t) {
        t.tags = t.tags.map(
          (n) => (
            !Oa.includes(n.tag) ||
              !Object.entries(n.props).find(
                ([r, s]) => r.startsWith('on') && typeof s == 'function'
              ) ||
              (n.props = e('ssr', n).props),
            n
          )
        )
      },
      'dom:beforeRenderTag': function (t) {
        if (
          !Oa.includes(t.tag.tag) ||
          !Object.entries(t.tag.props).find(
            ([o, a]) => o.startsWith('on') && typeof a == 'function'
          )
        )
          return
        const { props: n, eventHandlers: r, delayedSrc: s } = e('dom', t.tag)
        Object.keys(r).length &&
          ((t.tag.props = n),
          (t.tag._eventHandlers = r),
          (t.tag._delayedSrc = s))
      },
      'dom:renderTag': function (t) {
        const n = t.$el
        if (!t.tag._eventHandlers || !n) return
        const r = t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : n
        Object.entries(t.tag._eventHandlers).forEach(([s, o]) => {
          const a = `${t.tag._d || t.tag._p}:${s}`,
            i = s.slice(2).toLowerCase(),
            l = `data-h-${i}`
          if ((t.markSideEffect(a, () => {}), n.hasAttribute(l))) return
          const c = o
          n.setAttribute(l, ''),
            r.addEventListener(i, c),
            t.entry &&
              (t.entry._sde[a] = () => {
                r.removeEventListener(i, c), n.removeAttribute(l)
              })
        }),
          t.tag._delayedSrc && n.setAttribute('src', t.tag._delayedSrc)
      },
    },
  }
}
const ep = ['templateParams', 'htmlAttrs', 'bodyAttrs']
function tp() {
  return {
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        ;['hid', 'vmid', 'key'].forEach((r) => {
          e.props[r] && ((e.key = e.props[r]), delete e.props[r])
        })
        const n = oc(e) || (e.key ? `${e.tag}:${e.key}` : !1)
        n && (e._d = n)
      },
      'tags:resolve': function (e) {
        const t = {}
        e.tags.forEach((r) => {
          const s = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
            o = t[s]
          if (o) {
            let i = r == null ? void 0 : r.tagDuplicateStrategy
            if ((!i && ep.includes(r.tag) && (i = 'merge'), i === 'merge')) {
              const l = o.props
              ;['class', 'style'].forEach((c) => {
                r.props[c] &&
                  l[c] &&
                  (c === 'style' && !l[c].endsWith(';') && (l[c] += ';'),
                  (r.props[c] = `${l[c]} ${r.props[c]}`))
              }),
                (t[s].props = { ...l, ...r.props })
              return
            } else if (r._e === o._e) {
              ;(o._duped = o._duped || []),
                (r._d = `${o._d}:${o._duped.length + 1}`),
                o._duped.push(r)
              return
            }
          }
          const a =
            Object.keys(r.props).length +
            (r.innerHTML ? 1 : 0) +
            (r.textContent ? 1 : 0)
          if (rc.includes(r.tag) && a === 0) {
            delete t[s]
            return
          }
          t[s] = r
        })
        const n = []
        Object.values(t).forEach((r) => {
          const s = r._duped
          delete r._duped, n.push(r), s && n.push(...s)
        }),
          (e.tags = n)
      },
    },
  }
}
function pr(e, t) {
  function n(o) {
    if (['s', 'pageTitle'].includes(o)) return t.pageTitle
    let a
    return (
      o.includes('.')
        ? (a = o.split('.').reduce((i, l) => (i && i[l]) || void 0, t))
        : (a = t[o]),
      typeof a < 'u' ? a || '' : !1
    )
  }
  let r = e
  try {
    r = decodeURI(e)
  } catch {}
  return (
    (r.match(/%(\w+\.+\w+)|%(\w+)/g) || [])
      .sort()
      .reverse()
      .forEach((o) => {
        const a = n(o.slice(1))
        typeof a == 'string' &&
          (e = e.replaceAll(new RegExp(`\\${o}(\\W|$)`, 'g'), `${a}$1`).trim())
      }),
    t.separator &&
      (e.endsWith(t.separator) && (e = e.slice(0, -t.separator.length).trim()),
      e.startsWith(t.separator) && (e = e.slice(t.separator.length).trim()),
      (e = e.replace(
        new RegExp(`\\${t.separator}\\s*\\${t.separator}`, 'g'),
        t.separator
      ))),
    e
  )
}
function np() {
  return {
    hooks: {
      'tags:resolve': (e) => {
        var o
        const { tags: t } = e,
          n =
            (o = t.find((a) => a.tag === 'title')) == null
              ? void 0
              : o.textContent,
          r = t.findIndex((a) => a.tag === 'templateParams'),
          s = r !== -1 ? t[r].props : {}
        s.pageTitle = s.pageTitle || n || ''
        for (const a of t)
          if (
            ['titleTemplate', 'title'].includes(a.tag) &&
            typeof a.textContent == 'string'
          )
            a.textContent = pr(a.textContent, s)
          else if (a.tag === 'meta' && typeof a.props.content == 'string')
            a.props.content = pr(a.props.content, s)
          else if (a.tag === 'link' && typeof a.props.href == 'string')
            a.props.href = pr(a.props.href, s)
          else if (
            a.tag === 'script' &&
            ['application/json', 'application/ld+json'].includes(
              a.props.type
            ) &&
            typeof a.innerHTML == 'string'
          )
            try {
              a.innerHTML = JSON.stringify(JSON.parse(a.innerHTML), (i, l) =>
                typeof l == 'string' ? pr(l, s) : l
              )
            } catch {}
        e.tags = t.filter((a) => a.tag !== 'templateParams')
      },
    },
  }
}
const rp = typeof window < 'u'
let ac
function sp(e) {
  return (ac = e)
}
function op() {
  return ac
}
async function ap(e, t) {
  const n = { tag: e, props: {} }
  return e === 'templateParams'
    ? ((n.props = t), n)
    : ['title', 'titleTemplate'].includes(e)
    ? ((n.textContent = t instanceof Promise ? await t : t), n)
    : typeof t == 'string'
    ? ['script', 'noscript', 'style'].includes(e)
      ? (e === 'script' && (/^(https?:)?\/\//.test(t) || t.startsWith('/'))
          ? (n.props.src = t)
          : (n.innerHTML = t),
        n)
      : !1
    : ((n.props = await ip(e, { ...t })),
      n.props.children && (n.props.innerHTML = n.props.children),
      delete n.props.children,
      Object.keys(n.props)
        .filter((r) => Wh.includes(r))
        .forEach((r) => {
          ;(!['innerHTML', 'textContent'].includes(r) || nc.includes(n.tag)) &&
            (n[r] = n.props[r]),
            delete n.props[r]
        }),
      ['innerHTML', 'textContent'].forEach((r) => {
        if (
          n.tag === 'script' &&
          typeof n[r] == 'string' &&
          ['application/ld+json', 'application/json'].includes(n.props.type)
        )
          try {
            n[r] = JSON.parse(n[r])
          } catch {
            n[r] = ''
          }
        typeof n[r] == 'object' && (n[r] = JSON.stringify(n[r]))
      }),
      n.props.class && (n.props.class = lp(n.props.class)),
      n.props.content && Array.isArray(n.props.content)
        ? n.props.content.map((r) => ({
            ...n,
            props: { ...n.props, content: r },
          }))
        : n)
}
function lp(e) {
  return (
    typeof e == 'object' &&
      !Array.isArray(e) &&
      (e = Object.keys(e).filter((t) => e[t])),
    (Array.isArray(e) ? e.join(' ') : e)
      .split(' ')
      .filter((t) => t.trim())
      .filter(Boolean)
      .join(' ')
  )
}
async function ip(e, t) {
  for (const n of Object.keys(t)) {
    const r = n.startsWith('data-')
    t[n] instanceof Promise && (t[n] = await t[n]),
      String(t[n]) === 'true'
        ? (t[n] = r ? 'true' : '')
        : String(t[n]) === 'false' && (r ? (t[n] = 'false') : delete t[n])
  }
  return t
}
const cp = 10
async function up(e) {
  const t = []
  return (
    Object.entries(e.resolvedInput)
      .filter(([n, r]) => typeof r < 'u' && Hh.includes(n))
      .forEach(([n, r]) => {
        const s = $h(r)
        t.push(...s.map((o) => ap(n, o)).flat())
      }),
    (await Promise.all(t))
      .flat()
      .filter(Boolean)
      .map((n, r) => ((n._e = e._i), (n._p = (e._i << cp) + r), n))
  )
}
function fp() {
  return [tp(), Xh(), np(), qh(), Zh(), zh(), Jh()]
}
function dp(e = {}) {
  return [
    Kh({
      document: e == null ? void 0 : e.document,
      delayFn: e == null ? void 0 : e.domDelayFn,
    }),
  ]
}
function hp(e = {}) {
  const t = pp({
    ...e,
    plugins: [...dp(e), ...((e == null ? void 0 : e.plugins) || [])],
  })
  return (
    e.experimentalHashHydration &&
      t.resolvedOptions.document &&
      (t._hash = Yh(t.resolvedOptions.document)),
    sp(t),
    t
  )
}
function pp(e = {}) {
  let t = [],
    n = {},
    r = 0
  const s = ec()
  e != null && e.hooks && s.addHooks(e.hooks),
    (e.plugins = [...fp(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((i) => i.hooks && s.addHooks(i.hooks)),
    (e.document = e.document || (rp ? document : void 0))
  const o = () => s.callHook('entries:updated', a),
    a = {
      resolvedOptions: e,
      headEntries() {
        return t
      },
      get hooks() {
        return s
      },
      use(i) {
        i.hooks && s.addHooks(i.hooks)
      },
      push(i, l) {
        const c = { _i: r++, input: i, _sde: {} }
        return (
          l != null && l.mode && (c._m = l == null ? void 0 : l.mode),
          l != null && l.transform && (c._t = l == null ? void 0 : l.transform),
          t.push(c),
          o(),
          {
            dispose() {
              t = t.filter((d) =>
                d._i !== c._i
                  ? !0
                  : ((n = { ...n, ...(d._sde || {}) }), (d._sde = {}), o(), !1)
              )
            },
            patch(d) {
              t = t.map(
                (h) => (h._i === c._i && ((c.input = h.input = d), o()), h)
              )
            },
          }
        )
      },
      async resolveTags() {
        const i = { tags: [], entries: [...t] }
        await s.callHook('entries:resolve', i)
        for (const l of i.entries) {
          const c = l._t || ((d) => d)
          if (
            ((l.resolvedInput = c(l.resolvedInput || l.input)), l.resolvedInput)
          )
            for (const d of await up(l)) {
              const h = { tag: d, entry: l, resolvedOptions: a.resolvedOptions }
              await s.callHook('tag:normalise', h), i.tags.push(h.tag)
            }
        }
        return await s.callHook('tags:resolve', i), i.tags
      },
      _popSideEffectQueue() {
        const i = { ...n }
        return (n = {}), i
      },
      _elMap: {},
    }
  return a.hooks.callHook('init', a), a
}
function mp(e) {
  return typeof e == 'function' ? e() : Ae(e)
}
function Or(e, t = '') {
  if (e instanceof Promise) return e
  const n = mp(e)
  return !e || !n
    ? n
    : Array.isArray(n)
    ? n.map((r) => Or(r, t))
    : typeof n == 'object'
    ? Object.fromEntries(
        Object.entries(n).map(([r, s]) =>
          r === 'titleTemplate' || r.startsWith('on')
            ? [r, Ae(s)]
            : [r, Or(s, r)]
        )
      )
    : n
}
const gp = ji.startsWith('3'),
  _p = typeof window < 'u',
  lc = 'usehead'
function Ro() {
  return (tt() && et(lc)) || op()
}
function yp(e) {
  return {
    install(n) {
      gp &&
        ((n.config.globalProperties.$unhead = e),
        (n.config.globalProperties.$head = e),
        n.provide(lc, e))
    },
  }.install
}
function bp(e = {}) {
  const t = hp({
    ...e,
    domDelayFn: (n) => setTimeout(() => Cn(() => n()), 10),
    plugins: [vp(), ...((e == null ? void 0 : e.plugins) || [])],
  })
  return (t.install = yp(t)), t
}
function vp() {
  return {
    hooks: {
      'entries:resolve': function (e) {
        for (const t of e.entries) t.resolvedInput = Or(t.input)
      },
    },
  }
}
function Ep(e, t = {}) {
  const n = Ro(),
    r = Re(!1),
    s = Re({})
  nf(() => {
    s.value = r.value ? {} : Or(e)
  })
  const o = n.push(s.value, t)
  return (
    Tt(s, (i) => {
      o.patch(i)
    }),
    tt() &&
      (Vr(() => {
        o.dispose()
      }),
      _i(() => {
        r.value = !0
      }),
      gi(() => {
        r.value = !1
      })),
    o
  )
}
function Tp(e, t = {}) {
  return Ro().push(e, t)
}
function py(e, t = {}) {
  var r
  const n = Ro()
  if (n) {
    const s = _p || !!((r = n.resolvedOptions) != null && r.document)
    return (t.mode === 'server' && s) || (t.mode === 'client' && !s)
      ? void 0
      : s
      ? Ep(e, t)
      : Tp(e, t)
  }
}
const Cp = {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get myWitWallet' },
      { name: 'theme-color', content: '#b566ff' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Get myWitWallet' },
      {
        name: 'og:description',
        content:
          'myWitWallet allows you to send and receive Wit immediately. Bye bye synchronization!',
      },
      { name: 'og:image', content: '/my-wit-wallet.png' },
      { name: 'og:url', content: 'https://myWitWallet.app' },
      { name: 'og:locale:alternate', content: 'es_ES' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap',
      },
    ],
    style: [],
    script: [],
    noscript: [],
    title: 'Get myWitWallet, your Witnet wallet.',
  },
  Ms = !1,
  wp = !1,
  Lp = '__nuxt',
  kp = !0
function Sa(e, t = {}) {
  const n = Rp(e, t),
    r = Oe(),
    s = (r._payloadCache = r._payloadCache || {})
  return s[n] || (s[n] = ic(n).then((o) => o || (delete s[n], null))), s[n]
}
const Fa = 'json'
function Rp(e, t = {}) {
  const n = new URL(e, 'http://localhost')
  if (n.search)
    throw new Error('Payload URL cannot contain search params: ' + e)
  if (n.host !== 'localhost' || tr(n.pathname, { acceptRelative: !0 }))
    throw new Error('Payload URL must not include hostname: ' + e)
  const r = t.hash || (t.fresh ? Date.now() : '')
  return nr(
    Lo().app.baseURL,
    n.pathname,
    r ? `_payload.${r}.${Fa}` : `_payload.${Fa}`
  )
}
async function ic(e) {
  try {
    return kp
      ? cc(await fetch(e).then((t) => t.text()))
      : await ko(() => import(e), [], import.meta.url).then(
          (t) => t.default || t
        )
  } catch (t) {
    console.warn('[nuxt] Cannot load payload ', e, t)
  }
  return null
}
function Ip() {
  return !!Oe().payload.prerenderedAt
}
let mr = null
async function Pp() {
  if (mr) return mr
  const e = document.getElementById('__NUXT_DATA__')
  if (!e) return {}
  const t = cc(e.textContent || ''),
    n = e.dataset.src ? await ic(e.dataset.src) : void 0
  return (mr = { ...t, ...n, ...window.__NUXT__ }), mr
}
function cc(e) {
  return xh(e, Oe()._payloadRevivers)
}
function Ap(e, t) {
  Oe()._payloadRevivers[e] = t
}
function ds(e) {
  return e !== null && typeof e == 'object'
}
function xs(e, t, n = '.', r) {
  if (!ds(t)) return xs(e, {}, n, r)
  const s = Object.assign({}, t)
  for (const o in e) {
    if (o === '__proto__' || o === 'constructor') continue
    const a = e[o]
    a != null &&
      ((r && r(s, o, a, n)) ||
        (Array.isArray(a) && Array.isArray(s[o])
          ? (s[o] = [...a, ...s[o]])
          : ds(a) && ds(s[o])
          ? (s[o] = xs(a, s[o], (n ? `${n}.` : '') + o.toString(), r))
          : (s[o] = a)))
  }
  return s
}
function Np(e) {
  return (...t) => t.reduce((n, r) => xs(n, r, '', e), {})
}
const Op = Np()
class Ds extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0)
  }
  toJSON() {
    const t = { message: this.message, statusCode: Hs(this.statusCode, 500) }
    return (
      this.statusMessage && (t.statusMessage = uc(this.statusMessage)),
      this.data !== void 0 && (t.data = this.data),
      t
    )
  }
}
Ds.__h3_error__ = !0
function $s(e) {
  if (typeof e == 'string') return new Ds(e)
  if (Sp(e)) return e
  const t = new Ds(
    e.message ?? e.statusMessage,
    e.cause ? { cause: e.cause } : void 0
  )
  if ('stack' in e)
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack
        },
      })
    } catch {
      try {
        t.stack = e.stack
      } catch {}
    }
  if (
    (e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = Hs(e.statusCode, t.statusCode))
      : e.status && (t.statusCode = Hs(e.status, t.statusCode)),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    t.statusMessage)
  ) {
    const n = t.statusMessage
    uc(t.statusMessage) !== n &&
      console.warn(
        '[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future `statusMessage` will be sanitized by default.'
      )
  }
  return (
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  )
}
function Sp(e) {
  var t
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  )
}
const Fp = /[^\u0009\u0020-\u007E]/g
function uc(e = '') {
  return e.replace(Fp, '')
}
function Hs(e, t = 200) {
  return !e ||
    (typeof e == 'string' && (e = Number.parseInt(e, 10)), e < 100 || e > 999)
    ? t
    : e
}
function Mp(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  const [n, r] = e
  if (!n || typeof n != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + n)
  if (r !== void 0 && typeof r != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + r)
  const s = '$s' + n,
    o = Oe(),
    a = ni(o.payload.state, s)
  if (a.value === void 0 && r) {
    const i = r()
    if (we(i)) return (o.payload.state[s] = i), i
    a.value = i
  }
  return a
}
const wn = () => {
    var e
    return (e = Oe()) == null ? void 0 : e.$router
  },
  xp = () => (kf() ? et('_route', Oe()._route) : Oe()._route),
  Dp = (e) => e,
  $p = () => {
    try {
      if (Oe()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  my = (e, t) => {
    e || (e = '/')
    const n = typeof e == 'string' ? e : e.path || '/',
      r = (t == null ? void 0 : t.external) || tr(n, { acceptRelative: !0 })
    if (r && !(t != null && t.external))
      throw new Error(
        'Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.'
      )
    if (r && Yr(n).protocol === 'script:')
      throw new Error('Cannot navigate to an URL with script protocol.')
    const s = $p()
    if (!r && s) return e
    const o = wn()
    return r
      ? (t != null && t.replace ? location.replace(n) : (location.href = n),
        Promise.resolve())
      : t != null && t.replace
      ? o.replace(e)
      : o.push(e)
  },
  Gr = () => ni(Oe().payload, 'error'),
  nn = (e) => {
    const t = Io(e)
    try {
      const n = Oe(),
        r = Gr()
      n.hooks.callHook('app:error', t), (r.value = r.value || t)
    } catch {
      throw t
    }
    return t
  },
  Hp = async (e = {}) => {
    const t = Oe(),
      n = Gr()
    t.callHook('app:error:cleared', e),
      e.redirect && (await wn().replace(e.redirect)),
      (n.value = null)
  },
  Up = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
  Io = (e) => {
    const t = $s(e)
    return (t.__nuxt_error = !0), t
  },
  Ma = {
    NuxtError: (e) => Io(e),
    EmptyShallowRef: (e) => dn(e === '_' ? void 0 : JSON.parse(e)),
    EmptyRef: (e) => Re(e === '_' ? void 0 : JSON.parse(e)),
    ShallowRef: (e) => dn(e),
    ShallowReactive: (e) => Xl(e),
    Ref: (e) => Re(e),
    Reactive: (e) => it(e),
  },
  Wp = kt(
    {
      name: 'nuxt:revive-payload:client',
      order: -30,
      async setup(e) {
        let t, n
        for (const r in Ma) Ap(r, Ma[r])
        Object.assign(
          e.payload,
          (([t, n] = Ar(() => e.runWithContext(Pp))), (t = await t), n(), t)
        ),
          (window.__NUXT__ = e.payload)
      },
    },
    1
  ),
  jp = kt({ name: 'nuxt:global-components' }),
  Bp = kt({
    name: 'nuxt:head',
    setup(e) {
      const n = bp()
      n.push(Cp), e.vueApp.use(n)
      {
        let r = !0
        const s = () => {
          ;(r = !1), n.hooks.callHook('entries:updated', n)
        }
        n.hooks.hook('dom:beforeRender', (o) => {
          o.shouldRender = !r
        }),
          e.hooks.hook('page:start', () => {
            r = !0
          }),
          e.hooks.hook('page:finish', s),
          e.hooks.hook('app:suspense:resolve', s)
      }
    },
  })
/*!
 * vue-router v4.2.0
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const en = typeof window < 'u'
function Vp(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const ue = Object.assign
function hs(e, t) {
  const n = {}
  for (const r in t) {
    const s = t[r]
    n[r] = ct(s) ? s.map(e) : e(s)
  }
  return n
}
const $n = () => {},
  ct = Array.isArray,
  Kp = /\/$/,
  Yp = (e) => e.replace(Kp, '')
function ps(e, t, n = '/') {
  let r,
    s = {},
    o = '',
    a = ''
  const i = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    i < l && i >= 0 && (l = -1),
    l > -1 &&
      ((r = t.slice(0, l)),
      (o = t.slice(l + 1, i > -1 ? i : t.length)),
      (s = e(o))),
    i > -1 && ((r = r || t.slice(0, i)), (a = t.slice(i, t.length))),
    (r = Jp(r ?? t, n)),
    { fullPath: r + (o && '?') + o + a, path: r, query: s, hash: a }
  )
}
function Gp(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function xa(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Xp(e, t, n) {
  const r = t.matched.length - 1,
    s = n.matched.length - 1
  return (
    r > -1 &&
    r === s &&
    gn(t.matched[r], n.matched[s]) &&
    fc(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function gn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function fc(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!qp(e[n], t[n])) return !1
  return !0
}
function qp(e, t) {
  return ct(e) ? Da(e, t) : ct(t) ? Da(t, e) : e === t
}
function Da(e, t) {
  return ct(t)
    ? e.length === t.length && e.every((n, r) => n === t[r])
    : e.length === 1 && e[0] === t
}
function Jp(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    r = e.split('/'),
    s = r[r.length - 1]
  ;(s === '..' || s === '.') && r.push('')
  let o = n.length - 1,
    a,
    i
  for (a = 0; a < r.length; a++)
    if (((i = r[a]), i !== '.'))
      if (i === '..') o > 1 && o--
      else break
  return (
    n.slice(0, o).join('/') +
    '/' +
    r.slice(a - (a === r.length ? 1 : 0)).join('/')
  )
}
var qn
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(qn || (qn = {}))
var Hn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Hn || (Hn = {}))
function Qp(e) {
  if (!e)
    if (en) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Yp(e)
}
const Zp = /^[^#]+#/
function zp(e, t) {
  return e.replace(Zp, '#') + t
}
function em(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0),
  }
}
const Xr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function tm(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      r = typeof n == 'string' && n.startsWith('#'),
      s =
        typeof n == 'string'
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!s) return
    t = em(s, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function $a(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Us = new Map()
function nm(e, t) {
  Us.set(e, t)
}
function rm(e) {
  const t = Us.get(e)
  return Us.delete(e), t
}
let sm = () => location.protocol + '//' + location.host
function dc(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let i = s.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = s.slice(i)
    return l[0] !== '/' && (l = '/' + l), xa(l, '')
  }
  return xa(n, e) + r + s
}
function om(e, t, n, r) {
  let s = [],
    o = [],
    a = null
  const i = ({ state: g }) => {
    const v = dc(e, location),
      E = n.value,
      w = t.value
    let I = 0
    if (g) {
      if (((n.value = v), (t.value = g), a && a === E)) {
        a = null
        return
      }
      I = w ? g.position - w.position : 0
    } else r(v)
    s.forEach((p) => {
      p(n.value, E, {
        delta: I,
        type: qn.pop,
        direction: I ? (I > 0 ? Hn.forward : Hn.back) : Hn.unknown,
      })
    })
  }
  function l() {
    a = n.value
  }
  function c(g) {
    s.push(g)
    const v = () => {
      const E = s.indexOf(g)
      E > -1 && s.splice(E, 1)
    }
    return o.push(v), v
  }
  function d() {
    const { history: g } = window
    g.state && g.replaceState(ue({}, g.state, { scroll: Xr() }), '')
  }
  function h() {
    for (const g of o) g()
    ;(o = []),
      window.removeEventListener('popstate', i),
      window.removeEventListener('beforeunload', d)
  }
  return (
    window.addEventListener('popstate', i),
    window.addEventListener('beforeunload', d, { passive: !0 }),
    { pauseListeners: l, listen: c, destroy: h }
  )
}
function Ha(e, t, n, r = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: s ? Xr() : null,
  }
}
function am(e) {
  const { history: t, location: n } = window,
    r = { value: dc(e, n) },
    s = { value: t.state }
  s.value ||
    o(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function o(l, c, d) {
    const h = e.indexOf('#'),
      g =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + l
          : sm() + e + l
    try {
      t[d ? 'replaceState' : 'pushState'](c, '', g), (s.value = c)
    } catch (v) {
      console.error(v), n[d ? 'replace' : 'assign'](g)
    }
  }
  function a(l, c) {
    const d = ue({}, t.state, Ha(s.value.back, l, s.value.forward, !0), c, {
      position: s.value.position,
    })
    o(l, d, !0), (r.value = l)
  }
  function i(l, c) {
    const d = ue({}, s.value, t.state, { forward: l, scroll: Xr() })
    o(d.current, d, !0)
    const h = ue({}, Ha(r.value, l, null), { position: d.position + 1 }, c)
    o(l, h, !1), (r.value = l)
  }
  return { location: r, state: s, push: i, replace: a }
}
function hc(e) {
  e = Qp(e)
  const t = am(e),
    n = om(e, t.state, t.location, t.replace)
  function r(o, a = !0) {
    a || n.pauseListeners(), history.go(o)
  }
  const s = ue(
    { location: '', base: e, go: r, createHref: zp.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(s, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(s, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    s
  )
}
function lm(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    hc(e)
  )
}
function im(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function pc(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const ht = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  mc = Symbol('')
var Ua
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Ua || (Ua = {}))
function _n(e, t) {
  return ue(new Error(), { type: e, [mc]: !0 }, t)
}
function yt(e, t) {
  return e instanceof Error && mc in e && (t == null || !!(e.type & t))
}
const Wa = '[^/]+?',
  cm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  um = /[.+*?^${}()[\]/\\]/g
function fm(e, t) {
  const n = ue({}, cm, t),
    r = []
  let s = n.start ? '^' : ''
  const o = []
  for (const c of e) {
    const d = c.length ? [] : [90]
    n.strict && !c.length && (s += '/')
    for (let h = 0; h < c.length; h++) {
      const g = c[h]
      let v = 40 + (n.sensitive ? 0.25 : 0)
      if (g.type === 0)
        h || (s += '/'), (s += g.value.replace(um, '\\$&')), (v += 40)
      else if (g.type === 1) {
        const { value: E, repeatable: w, optional: I, regexp: p } = g
        o.push({ name: E, repeatable: w, optional: I })
        const m = p || Wa
        if (m !== Wa) {
          v += 10
          try {
            new RegExp(`(${m})`)
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${E}" (${m}): ` + _.message
            )
          }
        }
        let C = w ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`
        h || (C = I && c.length < 2 ? `(?:/${C})` : '/' + C),
          I && (C += '?'),
          (s += C),
          (v += 20),
          I && (v += -8),
          w && (v += -20),
          m === '.*' && (v += -50)
      }
      d.push(v)
    }
    r.push(d)
  }
  if (n.strict && n.end) {
    const c = r.length - 1
    r[c][r[c].length - 1] += 0.7000000000000001
  }
  n.strict || (s += '/?'), n.end ? (s += '$') : n.strict && (s += '(?:/|$)')
  const a = new RegExp(s, n.sensitive ? '' : 'i')
  function i(c) {
    const d = c.match(a),
      h = {}
    if (!d) return null
    for (let g = 1; g < d.length; g++) {
      const v = d[g] || '',
        E = o[g - 1]
      h[E.name] = v && E.repeatable ? v.split('/') : v
    }
    return h
  }
  function l(c) {
    let d = '',
      h = !1
    for (const g of e) {
      ;(!h || !d.endsWith('/')) && (d += '/'), (h = !1)
      for (const v of g)
        if (v.type === 0) d += v.value
        else if (v.type === 1) {
          const { value: E, repeatable: w, optional: I } = v,
            p = E in c ? c[E] : ''
          if (ct(p) && !w)
            throw new Error(
              `Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`
            )
          const m = ct(p) ? p.join('/') : p
          if (!m)
            if (I)
              g.length < 2 &&
                (d.endsWith('/') ? (d = d.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${E}"`)
          d += m
        }
    }
    return d || '/'
  }
  return { re: a, score: r, keys: o, parse: i, stringify: l }
}
function dm(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n]
    if (r) return r
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function hm(e, t) {
  let n = 0
  const r = e.score,
    s = t.score
  for (; n < r.length && n < s.length; ) {
    const o = dm(r[n], s[n])
    if (o) return o
    n++
  }
  if (Math.abs(s.length - r.length) === 1) {
    if (ja(r)) return 1
    if (ja(s)) return -1
  }
  return s.length - r.length
}
function ja(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const pm = { type: 0, value: '' },
  mm = /[a-zA-Z0-9_]/
function gm(e) {
  if (!e) return [[]]
  if (e === '/') return [[pm]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(v) {
    throw new Error(`ERR (${n})/"${c}": ${v}`)
  }
  let n = 0,
    r = n
  const s = []
  let o
  function a() {
    o && s.push(o), (o = [])
  }
  let i = 0,
    l,
    c = '',
    d = ''
  function h() {
    c &&
      (n === 0
        ? o.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === '*' || l === '+') &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: c,
            regexp: d,
            repeatable: l === '*' || l === '+',
            optional: l === '*' || l === '?',
          }))
        : t('Invalid state to consume buffer'),
      (c = ''))
  }
  function g() {
    c += l
  }
  for (; i < e.length; ) {
    if (((l = e[i++]), l === '\\' && n !== 2)) {
      ;(r = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (c && h(), a()) : l === ':' ? (h(), (n = 1)) : g()
        break
      case 4:
        g(), (n = r)
        break
      case 1:
        l === '('
          ? (n = 2)
          : mm.test(l)
          ? g()
          : (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && i--)
        break
      case 2:
        l === ')'
          ? d[d.length - 1] == '\\'
            ? (d = d.slice(0, -1) + l)
            : (n = 3)
          : (d += l)
        break
      case 3:
        h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && i--, (d = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), h(), a(), s
}
function _m(e, t, n) {
  const r = fm(gm(e.path), n),
    s = ue(r, { record: e, parent: t, children: [], alias: [] })
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}
function ym(e, t) {
  const n = [],
    r = new Map()
  t = Ka({ strict: !1, end: !0, sensitive: !1 }, t)
  function s(d) {
    return r.get(d)
  }
  function o(d, h, g) {
    const v = !g,
      E = bm(d)
    E.aliasOf = g && g.record
    const w = Ka(t, d),
      I = [E]
    if ('alias' in d) {
      const C = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const _ of C)
        I.push(
          ue({}, E, {
            components: g ? g.record.components : E.components,
            path: _,
            aliasOf: g ? g.record : E,
          })
        )
    }
    let p, m
    for (const C of I) {
      const { path: _ } = C
      if (h && _[0] !== '/') {
        const T = h.record.path,
          A = T[T.length - 1] === '/' ? '' : '/'
        C.path = h.record.path + (_ && A + _)
      }
      if (
        ((p = _m(C, h, w)),
        g
          ? g.alias.push(p)
          : ((m = m || p),
            m !== p && m.alias.push(p),
            v && d.name && !Va(p) && a(d.name)),
        E.children)
      ) {
        const T = E.children
        for (let A = 0; A < T.length; A++) o(T[A], p, g && g.children[A])
      }
      ;(g = g || p),
        ((p.record.components && Object.keys(p.record.components).length) ||
          p.record.name ||
          p.record.redirect) &&
          l(p)
    }
    return m
      ? () => {
          a(m)
        }
      : $n
  }
  function a(d) {
    if (pc(d)) {
      const h = r.get(d)
      h &&
        (r.delete(d),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(a),
        h.alias.forEach(a))
    } else {
      const h = n.indexOf(d)
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && r.delete(d.record.name),
        d.children.forEach(a),
        d.alias.forEach(a))
    }
  }
  function i() {
    return n
  }
  function l(d) {
    let h = 0
    for (
      ;
      h < n.length &&
      hm(d, n[h]) >= 0 &&
      (d.record.path !== n[h].record.path || !gc(d, n[h]));

    )
      h++
    n.splice(h, 0, d), d.record.name && !Va(d) && r.set(d.record.name, d)
  }
  function c(d, h) {
    let g,
      v = {},
      E,
      w
    if ('name' in d && d.name) {
      if (((g = r.get(d.name)), !g)) throw _n(1, { location: d })
      ;(w = g.record.name),
        (v = ue(
          Ba(
            h.params,
            g.keys.filter((m) => !m.optional).map((m) => m.name)
          ),
          d.params &&
            Ba(
              d.params,
              g.keys.map((m) => m.name)
            )
        )),
        (E = g.stringify(v))
    } else if ('path' in d)
      (E = d.path),
        (g = n.find((m) => m.re.test(E))),
        g && ((v = g.parse(E)), (w = g.record.name))
    else {
      if (((g = h.name ? r.get(h.name) : n.find((m) => m.re.test(h.path))), !g))
        throw _n(1, { location: d, currentLocation: h })
      ;(w = g.record.name),
        (v = ue({}, h.params, d.params)),
        (E = g.stringify(v))
    }
    const I = []
    let p = g
    for (; p; ) I.unshift(p.record), (p = p.parent)
    return { name: w, path: E, params: v, matched: I, meta: Em(I) }
  }
  return (
    e.forEach((d) => o(d)),
    {
      addRoute: o,
      resolve: c,
      removeRoute: a,
      getRoutes: i,
      getRecordMatcher: s,
    }
  )
}
function Ba(e, t) {
  const n = {}
  for (const r of t) r in e && (n[r] = e[r])
  return n
}
function bm(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: vm(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
}
function vm(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const r in e.components) t[r] = typeof n == 'boolean' ? n : n[r]
  return t
}
function Va(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Em(e) {
  return e.reduce((t, n) => ue(t, n.meta), {})
}
function Ka(e, t) {
  const n = {}
  for (const r in e) n[r] = r in t ? t[r] : e[r]
  return n
}
function gc(e, t) {
  return t.children.some((n) => n === e || gc(e, n))
}
const _c = /#/g,
  Tm = /&/g,
  Cm = /\//g,
  wm = /=/g,
  Lm = /\?/g,
  yc = /\+/g,
  km = /%5B/g,
  Rm = /%5D/g,
  bc = /%5E/g,
  Im = /%60/g,
  vc = /%7B/g,
  Pm = /%7C/g,
  Ec = /%7D/g,
  Am = /%20/g
function Po(e) {
  return encodeURI('' + e)
    .replace(Pm, '|')
    .replace(km, '[')
    .replace(Rm, ']')
}
function Nm(e) {
  return Po(e).replace(vc, '{').replace(Ec, '}').replace(bc, '^')
}
function Ws(e) {
  return Po(e)
    .replace(yc, '%2B')
    .replace(Am, '+')
    .replace(_c, '%23')
    .replace(Tm, '%26')
    .replace(Im, '`')
    .replace(vc, '{')
    .replace(Ec, '}')
    .replace(bc, '^')
}
function Om(e) {
  return Ws(e).replace(wm, '%3D')
}
function Sm(e) {
  return Po(e).replace(_c, '%23').replace(Lm, '%3F')
}
function Fm(e) {
  return e == null ? '' : Sm(e).replace(Cm, '%2F')
}
function Sr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Mm(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let s = 0; s < r.length; ++s) {
    const o = r[s].replace(yc, ' '),
      a = o.indexOf('='),
      i = Sr(a < 0 ? o : o.slice(0, a)),
      l = a < 0 ? null : Sr(o.slice(a + 1))
    if (i in t) {
      let c = t[i]
      ct(c) || (c = t[i] = [c]), c.push(l)
    } else t[i] = l
  }
  return t
}
function Ya(e) {
  let t = ''
  for (let n in e) {
    const r = e[n]
    if (((n = Om(n)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(ct(r) ? r.map((o) => o && Ws(o)) : [r && Ws(r)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function xm(e) {
  const t = {}
  for (const n in e) {
    const r = e[n]
    r !== void 0 &&
      (t[n] = ct(r)
        ? r.map((s) => (s == null ? null : '' + s))
        : r == null
        ? r
        : '' + r)
  }
  return t
}
const Dm = Symbol(''),
  Ga = Symbol(''),
  Ao = Symbol(''),
  Tc = Symbol(''),
  js = Symbol('')
function In() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const s = e.indexOf(r)
        s > -1 && e.splice(s, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e, reset: n }
}
function St(e, t, n, r, s) {
  const o = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || [])
  return () =>
    new Promise((a, i) => {
      const l = (h) => {
          h === !1
            ? i(_n(4, { from: n, to: t }))
            : h instanceof Error
            ? i(h)
            : im(h)
            ? i(_n(2, { from: t, to: h }))
            : (o &&
                r.enterCallbacks[s] === o &&
                typeof h == 'function' &&
                o.push(h),
              a())
        },
        c = e.call(r && r.instances[s], t, n, l)
      let d = Promise.resolve(c)
      e.length < 3 && (d = d.then(l)), d.catch((h) => i(h))
    })
}
function ms(e, t, n, r) {
  const s = []
  for (const o of e)
    for (const a in o.components) {
      let i = o.components[a]
      if (!(t !== 'beforeRouteEnter' && !o.instances[a]))
        if ($m(i)) {
          const c = (i.__vccOpts || i)[t]
          c && s.push(St(c, n, r, o, a))
        } else {
          let l = i()
          s.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${a}" at "${o.path}"`)
                )
              const d = Vp(c) ? c.default : c
              o.components[a] = d
              const g = (d.__vccOpts || d)[t]
              return g && St(g, n, r, o, a)()
            })
          )
        }
    }
  return s
}
function $m(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function Xa(e) {
  const t = et(Ao),
    n = et(Tc),
    r = ge(() => t.resolve(Ae(e.to))),
    s = ge(() => {
      const { matched: l } = r.value,
        { length: c } = l,
        d = l[c - 1],
        h = n.matched
      if (!d || !h.length) return -1
      const g = h.findIndex(gn.bind(null, d))
      if (g > -1) return g
      const v = qa(l[c - 2])
      return c > 1 && qa(d) === v && h[h.length - 1].path !== v
        ? h.findIndex(gn.bind(null, l[c - 2]))
        : g
    }),
    o = ge(() => s.value > -1 && jm(n.params, r.value.params)),
    a = ge(
      () =>
        s.value > -1 &&
        s.value === n.matched.length - 1 &&
        fc(n.params, r.value.params)
    )
  function i(l = {}) {
    return Wm(l)
      ? t[Ae(e.replace) ? 'replace' : 'push'](Ae(e.to)).catch($n)
      : Promise.resolve()
  }
  return {
    route: r,
    href: ge(() => r.value.href),
    isActive: o,
    isExactActive: a,
    navigate: i,
  }
}
const Hm = zn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Xa,
    setup(e, { slots: t }) {
      const n = it(Xa(e)),
        { options: r } = et(Ao),
        s = ge(() => ({
          [Ja(e.activeClass, r.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Ja(
            e.exactActiveClass,
            r.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive,
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : lt(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: s.value,
              },
              o
            )
      }
    },
  }),
  Um = Hm
function Wm(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function jm(e, t) {
  for (const n in t) {
    const r = t[n],
      s = e[n]
    if (typeof r == 'string') {
      if (r !== s) return !1
    } else if (!ct(s) || s.length !== r.length || r.some((o, a) => o !== s[a]))
      return !1
  }
  return !0
}
function qa(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Ja = (e, t, n) => e ?? t ?? n,
  Bm = zn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const r = et(js),
        s = ge(() => e.route || r.value),
        o = et(Ga, 0),
        a = ge(() => {
          let c = Ae(o)
          const { matched: d } = s.value
          let h
          for (; (h = d[c]) && !h.components; ) c++
          return c
        }),
        i = ge(() => s.value.matched[a.value])
      fn(
        Ga,
        ge(() => a.value + 1)
      ),
        fn(Dm, i),
        fn(js, s)
      const l = Re()
      return (
        Tt(
          () => [l.value, i.value, e.name],
          ([c, d, h], [g, v, E]) => {
            d &&
              ((d.instances[h] = c),
              v &&
                v !== d &&
                c &&
                c === g &&
                (d.leaveGuards.size || (d.leaveGuards = v.leaveGuards),
                d.updateGuards.size || (d.updateGuards = v.updateGuards))),
              c &&
                d &&
                (!v || !gn(d, v) || !g) &&
                (d.enterCallbacks[h] || []).forEach((w) => w(c))
          },
          { flush: 'post' }
        ),
        () => {
          const c = s.value,
            d = e.name,
            h = i.value,
            g = h && h.components[d]
          if (!g) return Qa(n.default, { Component: g, route: c })
          const v = h.props[d],
            E = v
              ? v === !0
                ? c.params
                : typeof v == 'function'
                ? v(c)
                : v
              : null,
            I = lt(
              g,
              ue({}, E, t, {
                onVnodeUnmounted: (p) => {
                  p.component.isUnmounted && (h.instances[d] = null)
                },
                ref: l,
              })
            )
          return Qa(n.default, { Component: I, route: c }) || I
        }
      )
    },
  })
function Qa(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Cc = Bm
function Vm(e) {
  const t = ym(e.routes, e),
    n = e.parseQuery || Mm,
    r = e.stringifyQuery || Ya,
    s = e.history,
    o = In(),
    a = In(),
    i = In(),
    l = dn(ht)
  let c = ht
  en &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const d = hs.bind(null, (S) => '' + S),
    h = hs.bind(null, Fm),
    g = hs.bind(null, Sr)
  function v(S, j) {
    let H, K
    return (
      pc(S) ? ((H = t.getRecordMatcher(S)), (K = j)) : (K = S), t.addRoute(K, H)
    )
  }
  function E(S) {
    const j = t.getRecordMatcher(S)
    j && t.removeRoute(j)
  }
  function w() {
    return t.getRoutes().map((S) => S.record)
  }
  function I(S) {
    return !!t.getRecordMatcher(S)
  }
  function p(S, j) {
    if (((j = ue({}, j || l.value)), typeof S == 'string')) {
      const f = ps(n, S, j.path),
        y = t.resolve({ path: f.path }, j),
        L = s.createHref(f.fullPath)
      return ue(f, y, {
        params: g(y.params),
        hash: Sr(f.hash),
        redirectedFrom: void 0,
        href: L,
      })
    }
    let H
    if ('path' in S) H = ue({}, S, { path: ps(n, S.path, j.path).path })
    else {
      const f = ue({}, S.params)
      for (const y in f) f[y] == null && delete f[y]
      ;(H = ue({}, S, { params: h(f) })), (j.params = h(j.params))
    }
    const K = t.resolve(H, j),
      ne = S.hash || ''
    K.params = d(g(K.params))
    const b = Gp(r, ue({}, S, { hash: Nm(ne), path: K.path })),
      u = s.createHref(b)
    return ue(
      { fullPath: b, hash: ne, query: r === Ya ? xm(S.query) : S.query || {} },
      K,
      { redirectedFrom: void 0, href: u }
    )
  }
  function m(S) {
    return typeof S == 'string' ? ps(n, S, l.value.path) : ue({}, S)
  }
  function C(S, j) {
    if (c !== S) return _n(8, { from: j, to: S })
  }
  function _(S) {
    return N(S)
  }
  function T(S) {
    return _(ue(m(S), { replace: !0 }))
  }
  function A(S) {
    const j = S.matched[S.matched.length - 1]
    if (j && j.redirect) {
      const { redirect: H } = j
      let K = typeof H == 'function' ? H(S) : H
      return (
        typeof K == 'string' &&
          ((K = K.includes('?') || K.includes('#') ? (K = m(K)) : { path: K }),
          (K.params = {})),
        ue(
          { query: S.query, hash: S.hash, params: 'path' in K ? {} : S.params },
          K
        )
      )
    }
  }
  function N(S, j) {
    const H = (c = p(S)),
      K = l.value,
      ne = S.state,
      b = S.force,
      u = S.replace === !0,
      f = A(H)
    if (f)
      return N(
        ue(m(f), {
          state: typeof f == 'object' ? ue({}, ne, f.state) : ne,
          force: b,
          replace: u,
        }),
        j || H
      )
    const y = H
    y.redirectedFrom = j
    let L
    return (
      !b && Xp(r, K, H) && ((L = _n(16, { to: y, from: K })), xe(K, K, !0, !1)),
      (L ? Promise.resolve(L) : W(y, K))
        .catch((P) => (yt(P) ? (yt(P, 2) ? P : je(P)) : re(P, y, K)))
        .then((P) => {
          if (P) {
            if (yt(P, 2))
              return N(
                ue({ replace: u }, m(P.to), {
                  state: typeof P.to == 'object' ? ue({}, ne, P.to.state) : ne,
                  force: b,
                }),
                j || y
              )
          } else P = U(y, K, !0, u, ne)
          return G(y, K, P), P
        })
    )
  }
  function O(S, j) {
    const H = C(S, j)
    return H ? Promise.reject(H) : Promise.resolve()
  }
  function D(S) {
    const j = Ge.values().next().value
    return j && typeof j.runWithContext == 'function'
      ? j.runWithContext(S)
      : S()
  }
  function W(S, j) {
    let H
    const [K, ne, b] = Km(S, j)
    H = ms(K.reverse(), 'beforeRouteLeave', S, j)
    for (const f of K)
      f.leaveGuards.forEach((y) => {
        H.push(St(y, S, j))
      })
    const u = O.bind(null, S, j)
    return (
      H.push(u),
      ye(H)
        .then(() => {
          H = []
          for (const f of o.list()) H.push(St(f, S, j))
          return H.push(u), ye(H)
        })
        .then(() => {
          H = ms(ne, 'beforeRouteUpdate', S, j)
          for (const f of ne)
            f.updateGuards.forEach((y) => {
              H.push(St(y, S, j))
            })
          return H.push(u), ye(H)
        })
        .then(() => {
          H = []
          for (const f of S.matched)
            if (f.beforeEnter && !j.matched.includes(f))
              if (ct(f.beforeEnter))
                for (const y of f.beforeEnter) H.push(St(y, S, j))
              else H.push(St(f.beforeEnter, S, j))
          return H.push(u), ye(H)
        })
        .then(
          () => (
            S.matched.forEach((f) => (f.enterCallbacks = {})),
            (H = ms(b, 'beforeRouteEnter', S, j)),
            H.push(u),
            ye(H)
          )
        )
        .then(() => {
          H = []
          for (const f of a.list()) H.push(St(f, S, j))
          return H.push(u), ye(H)
        })
        .catch((f) => (yt(f, 8) ? f : Promise.reject(f)))
    )
  }
  function G(S, j, H) {
    for (const K of i.list()) D(() => K(S, j, H))
  }
  function U(S, j, H, K, ne) {
    const b = C(S, j)
    if (b) return b
    const u = j === ht,
      f = en ? history.state : {}
    H &&
      (K || u
        ? s.replace(S.fullPath, ue({ scroll: u && f && f.scroll }, ne))
        : s.push(S.fullPath, ne)),
      (l.value = S),
      xe(S, j, H, u),
      je()
  }
  let X
  function V() {
    X ||
      (X = s.listen((S, j, H) => {
        if (!ut.listening) return
        const K = p(S),
          ne = A(K)
        if (ne) {
          N(ue(ne, { replace: !0 }), K).catch($n)
          return
        }
        c = K
        const b = l.value
        en && nm($a(b.fullPath, H.delta), Xr()),
          W(K, b)
            .catch((u) =>
              yt(u, 12)
                ? u
                : yt(u, 2)
                ? (N(u.to, K)
                    .then((f) => {
                      yt(f, 20) && !H.delta && H.type === qn.pop && s.go(-1, !1)
                    })
                    .catch($n),
                  Promise.reject())
                : (H.delta && s.go(-H.delta, !1), re(u, K, b))
            )
            .then((u) => {
              ;(u = u || U(K, b, !1)),
                u &&
                  (H.delta && !yt(u, 8)
                    ? s.go(-H.delta, !1)
                    : H.type === qn.pop && yt(u, 20) && s.go(-1, !1)),
                G(K, b, u)
            })
            .catch($n)
      }))
  }
  let fe = In(),
    Q = In(),
    ee
  function re(S, j, H) {
    je(S)
    const K = Q.list()
    return (
      K.length ? K.forEach((ne) => ne(S, j, H)) : console.error(S),
      Promise.reject(S)
    )
  }
  function Me() {
    return ee && l.value !== ht
      ? Promise.resolve()
      : new Promise((S, j) => {
          fe.add([S, j])
        })
  }
  function je(S) {
    return (
      ee ||
        ((ee = !S),
        V(),
        fe.list().forEach(([j, H]) => (S ? H(S) : j())),
        fe.reset()),
      S
    )
  }
  function xe(S, j, H, K) {
    const { scrollBehavior: ne } = e
    if (!en || !ne) return Promise.resolve()
    const b =
      (!H && rm($a(S.fullPath, 0))) ||
      ((K || !H) && history.state && history.state.scroll) ||
      null
    return Cn()
      .then(() => ne(S, j, b))
      .then((u) => u && tm(u))
      .catch((u) => re(u, S, j))
  }
  const Te = (S) => s.go(S)
  let nt
  const Ge = new Set(),
    ut = {
      currentRoute: l,
      listening: !0,
      addRoute: v,
      removeRoute: E,
      hasRoute: I,
      getRoutes: w,
      resolve: p,
      options: e,
      push: _,
      replace: T,
      go: Te,
      back: () => Te(-1),
      forward: () => Te(1),
      beforeEach: o.add,
      beforeResolve: a.add,
      afterEach: i.add,
      onError: Q.add,
      isReady: Me,
      install(S) {
        const j = this
        S.component('RouterLink', Um),
          S.component('RouterView', Cc),
          (S.config.globalProperties.$router = j),
          Object.defineProperty(S.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ae(l),
          }),
          en &&
            !nt &&
            l.value === ht &&
            ((nt = !0), _(s.location).catch((ne) => {}))
        const H = {}
        for (const ne in ht) H[ne] = ge(() => l.value[ne])
        S.provide(Ao, j), S.provide(Tc, it(H)), S.provide(js, l)
        const K = S.unmount
        Ge.add(S),
          (S.unmount = function () {
            Ge.delete(S),
              Ge.size < 1 &&
                ((c = ht),
                X && X(),
                (X = null),
                (l.value = ht),
                (nt = !1),
                (ee = !1)),
              K()
          })
      },
    }
  function ye(S) {
    return S.reduce((j, H) => j.then(() => D(H)), Promise.resolve())
  }
  return ut
}
function Km(e, t) {
  const n = [],
    r = [],
    s = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let a = 0; a < o; a++) {
    const i = t.matched[a]
    i && (e.matched.find((c) => gn(c, i)) ? r.push(i) : n.push(i))
    const l = e.matched[a]
    l && (t.matched.find((c) => gn(c, l)) || s.push(l))
  }
  return [n, r, s]
}
const Za = [
    {
      name: 'index',
      path: '/',
      meta: {},
      alias: [],
      redirect: void 0,
      component: () =>
        ko(
          () => import('./index.9e3f5581.js'),
          ['./index.9e3f5581.js', './index.f9254983.css'],
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Ym = {
    scrollBehavior(e, t, n) {
      const r = Oe()
      let s = n || void 0
      if (
        (!s &&
          t &&
          e &&
          e.meta.scrollToTop !== !1 &&
          Gm(t, e) &&
          (s = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 }
        if (e.hash) return { el: e.hash, top: za(e.hash) }
      }
      const o = (i) => !!(i.meta.pageTransition ?? Ms),
        a = o(t) && o(e) ? 'page:transition:finish' : 'page:finish'
      return new Promise((i) => {
        r.hooks.hookOnce(a, async () => {
          await Cn(), e.hash && (s = { el: e.hash, top: za(e.hash) }), i(s)
        })
      })
    },
  }
function za(e) {
  try {
    const t = document.querySelector(e)
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
  } catch {}
  return 0
}
function Gm(e, t) {
  const n = e.matched[0] === t.matched[0]
  return !!(!n || (n && JSON.stringify(e.params) !== JSON.stringify(t.params)))
}
const Xm = {},
  Be = { ...Xm, ...Ym },
  qm = Dp(async (e) => {
    var l
    let t, n
    if (!((l = e.meta) != null && l.validate)) return
    const r = Oe(),
      s = wn()
    if (
      (([t, n] = Ar(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      n(),
      t) === !0
    )
      return
    const a = Io({
        statusCode: 404,
        statusMessage: `Page Not Found: ${e.fullPath}`,
      }),
      i = s.beforeResolve((c) => {
        if ((i(), c === e)) {
          const d = s.afterEach(async () => {
            d(),
              await r.runWithContext(() => nn(a)),
              window.history.pushState({}, '', e.fullPath)
          })
          return !1
        }
      })
  }),
  Jm = [qm],
  Un = {}
function Qm(e, t) {
  const { pathname: n, search: r, hash: s } = t,
    o = e.indexOf('#')
  if (o > -1) {
    const i = s.includes(e.slice(o)) ? e.slice(o).length : 1
    let l = s.slice(i)
    return l[0] !== '/' && (l = '/' + l), Ca(l, '')
  }
  return Ca(n, e) + r + s
}
const Zm = kt(
    {
      name: 'nuxt:router',
      enforce: 'pre',
      async setup(e) {
        var w, I
        let t,
          n,
          r = Lo().app.baseURL
        Be.hashMode && !r.includes('#') && (r += '#')
        const s =
            ((w = Be.history) == null ? void 0 : w.call(Be, r)) ??
            (Be.hashMode ? lm(r) : hc(r)),
          o = ((I = Be.routes) == null ? void 0 : I.call(Be, Za)) ?? Za
        let a
        const i = Qm(r, window.location),
          l = Vm({
            ...Be,
            scrollBehavior: (p, m, C) => {
              var _
              if (m === ht) {
                a = C
                return
              }
              return (
                (l.options.scrollBehavior = Be.scrollBehavior),
                (_ = Be.scrollBehavior) == null
                  ? void 0
                  : _.call(Be, p, ht, a || C)
              )
            },
            history: s,
            routes: o,
          })
        e.vueApp.use(l)
        const c = dn(l.currentRoute.value)
        l.afterEach((p, m) => {
          c.value = m
        }),
          Object.defineProperty(
            e.vueApp.config.globalProperties,
            'previousRoute',
            { get: () => c.value }
          )
        const d = dn(l.resolve(i)),
          h = () => {
            d.value = l.currentRoute.value
          }
        e.hook('page:finish', h),
          l.afterEach((p, m) => {
            var C, _, T, A
            ;((_ = (C = p.matched[0]) == null ? void 0 : C.components) == null
              ? void 0
              : _.default) ===
              ((A = (T = m.matched[0]) == null ? void 0 : T.components) == null
                ? void 0
                : A.default) && h()
          })
        const g = {}
        for (const p in d.value) g[p] = ge(() => d.value[p])
        ;(e._route = it(g)),
          (e._middleware = e._middleware || { global: [], named: {} })
        const v = Gr()
        try {
          ;([t, n] = Ar(() => l.isReady())), await t, n()
        } catch (p) {
          ;([t, n] = Ar(() => e.runWithContext(() => nn(p)))), await t, n()
        }
        const E = Mp('_layout')
        return (
          l.beforeEach(async (p, m) => {
            var _
            ;(p.meta = it(p.meta)),
              e.isHydrating &&
                E.value &&
                !Jt(p.meta.layout) &&
                (p.meta.layout = E.value),
              (e._processingMiddleware = !0)
            const C = new Set([...Jm, ...e._middleware.global])
            for (const T of p.matched) {
              const A = T.meta.middleware
              if (A)
                if (Array.isArray(A)) for (const N of A) C.add(N)
                else C.add(A)
            }
            for (const T of C) {
              const A =
                typeof T == 'string'
                  ? e._middleware.named[T] ||
                    (await ((_ = Un[T]) == null
                      ? void 0
                      : _.call(Un).then((O) => O.default || O)))
                  : T
              if (!A) throw new Error(`Unknown route middleware: '${T}'.`)
              const N = await e.runWithContext(() => A(p, m))
              if (
                !e.payload.serverRendered &&
                e.isHydrating &&
                (N === !1 || N instanceof Error)
              ) {
                const O =
                  N ||
                  $s({ statusCode: 404, statusMessage: `Page Not Found: ${i}` })
                return await e.runWithContext(() => nn(O)), !1
              }
              if (N || N === !1) return N
            }
          }),
          l.onError(() => {
            delete e._processingMiddleware
          }),
          l.afterEach(async (p, m, C) => {
            delete e._processingMiddleware,
              !e.isHydrating && v.value && (await e.runWithContext(Hp)),
              p.matched.length === 0 &&
                (await e.runWithContext(() =>
                  nn(
                    $s({
                      statusCode: 404,
                      fatal: !1,
                      statusMessage: `Page not found: ${p.fullPath}`,
                    })
                  )
                ))
          }),
          e.hooks.hookOnce('app:created', async () => {
            try {
              await l.replace({ ...l.resolve(i), name: void 0, force: !0 }),
                (l.options.scrollBehavior = Be.scrollBehavior)
            } catch (p) {
              await e.runWithContext(() => nn(p))
            }
          }),
          { provide: { router: l } }
        )
      },
    },
    1
  ),
  gr = {},
  zm = kt({
    name: 'nuxt:prefetch',
    setup(e) {
      const t = wn()
      e.hooks.hook('app:mounted', () => {
        t.beforeEach(async (n) => {
          var s
          const r =
            (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout
          r && typeof gr[r] == 'function' && (await gr[r]())
        })
      }),
        e.hooks.hook('link:prefetch', (n) => {
          var a, i, l, c
          if (tr(n)) return
          const r = t.resolve(n)
          if (!r) return
          const s =
            (a = r == null ? void 0 : r.meta) == null ? void 0 : a.layout
          let o = Array.isArray(
            (i = r == null ? void 0 : r.meta) == null ? void 0 : i.middleware
          )
            ? (l = r == null ? void 0 : r.meta) == null
              ? void 0
              : l.middleware
            : [
                (c = r == null ? void 0 : r.meta) == null
                  ? void 0
                  : c.middleware,
              ]
          o = o.filter((d) => typeof d == 'string')
          for (const d of o) typeof Un[d] == 'function' && Un[d]()
          s && typeof gr[s] == 'function' && gr[s]()
        })
    },
  })
function eg(e = {}) {
  const t = e.path || window.location.pathname
  let n = {}
  try {
    n = JSON.parse(sessionStorage.getItem('nuxt:reload') || '{}')
  } catch {}
  if (
    e.force ||
    (n == null ? void 0 : n.path) !== t ||
    (n == null ? void 0 : n.expires) < Date.now()
  ) {
    try {
      sessionStorage.setItem(
        'nuxt:reload',
        JSON.stringify({ path: t, expires: Date.now() + (e.ttl ?? 1e4) })
      )
    } catch {}
    if (e.persistState)
      try {
        sessionStorage.setItem(
          'nuxt:reload:state',
          JSON.stringify({ state: Oe().payload.state })
        )
      } catch {}
    window.location.pathname !== t
      ? (window.location.href = t)
      : window.location.reload()
  }
}
const tg = kt({
    name: 'nuxt:chunk-reload',
    setup(e) {
      const t = wn(),
        n = Lo(),
        r = new Set()
      t.beforeEach(() => {
        r.clear()
      }),
        e.hook('app:chunkError', ({ error: s }) => {
          r.add(s)
        }),
        t.onError((s, o) => {
          if (r.has(s)) {
            const i =
              'href' in o && o.href.startsWith('#')
                ? n.app.baseURL + o.href
                : nr(n.app.baseURL, o.fullPath)
            eg({ path: i, persistState: !0 })
          }
        })
    },
  }),
  ng = kt({
    name: 'nuxt:payload',
    setup(e) {
      Ip() &&
        (e.hooks.hook('link:prefetch', async (t) => {
          Yr(t).protocol || (await Sa(t))
        }),
        wn().beforeResolve(async (t, n) => {
          if (t.path === n.path) return
          const r = await Sa(t.path)
          r && Object.assign(e.static.data, r.data)
        }))
    },
  })
/*!
 * shared v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Bs = typeof window < 'u',
  rg = typeof Symbol == 'function' && typeof Symbol.toStringTag == 'symbol',
  Ut = (e) => (rg ? Symbol(e) : e),
  sg = (e, t, n) => og({ l: e, k: t, s: n }),
  og = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  Ie = (e) => typeof e == 'number' && isFinite(e),
  ag = (e) => Oo(e) === '[object Date]',
  Ht = (e) => Oo(e) === '[object RegExp]',
  qr = (e) => z(e) && Object.keys(e).length === 0
function lg(e, t) {
  typeof console < 'u' &&
    (console.warn('[intlify] ' + e), t && console.warn(t.stack))
}
const Ne = Object.assign
let el
const Wn = () =>
  el ||
  (el =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function tl(e) {
  return e
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
const ig = Object.prototype.hasOwnProperty
function No(e, t) {
  return ig.call(e, t)
}
const de = Array.isArray,
  Ee = (e) => typeof e == 'function',
  B = (e) => typeof e == 'string',
  oe = (e) => typeof e == 'boolean',
  he = (e) => e !== null && typeof e == 'object',
  wc = Object.prototype.toString,
  Oo = (e) => wc.call(e),
  z = (e) => Oo(e) === '[object Object]',
  cg = (e) =>
    e == null
      ? ''
      : de(e) || (z(e) && e.toString === wc)
      ? JSON.stringify(e, null, 2)
      : String(e)
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const ie = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15,
}
function Jr(e, t, n = {}) {
  const { domain: r, messages: s, args: o } = n,
    a = e,
    i = new SyntaxError(String(a))
  return (i.code = e), t && (i.location = t), (i.domain = r), i
}
function ug(e) {
  throw e
}
function fg(e, t, n) {
  return { line: e, column: t, offset: n }
}
function Vs(e, t, n) {
  const r = { start: e, end: t }
  return n != null && (r.source = n), r
}
const bt = ' ',
  dg = '\r',
  He = `
`,
  hg = String.fromCharCode(8232),
  pg = String.fromCharCode(8233)
function mg(e) {
  const t = e
  let n = 0,
    r = 1,
    s = 1,
    o = 0
  const a = (N) => t[N] === dg && t[N + 1] === He,
    i = (N) => t[N] === He,
    l = (N) => t[N] === pg,
    c = (N) => t[N] === hg,
    d = (N) => a(N) || i(N) || l(N) || c(N),
    h = () => n,
    g = () => r,
    v = () => s,
    E = () => o,
    w = (N) => (a(N) || l(N) || c(N) ? He : t[N]),
    I = () => w(n),
    p = () => w(n + o)
  function m() {
    return (o = 0), d(n) && (r++, (s = 0)), a(n) && n++, n++, s++, t[n]
  }
  function C() {
    return a(n + o) && o++, o++, t[n + o]
  }
  function _() {
    ;(n = 0), (r = 1), (s = 1), (o = 0)
  }
  function T(N = 0) {
    o = N
  }
  function A() {
    const N = n + o
    for (; N !== n; ) m()
    o = 0
  }
  return {
    index: h,
    line: g,
    column: v,
    peekOffset: E,
    charAt: w,
    currentChar: I,
    currentPeek: p,
    next: m,
    peek: C,
    reset: _,
    resetPeek: T,
    skipToPeek: A,
  }
}
const Nt = void 0,
  nl = "'",
  gg = 'tokenizer'
function _g(e, t = {}) {
  const n = t.location !== !1,
    r = mg(e),
    s = () => r.index(),
    o = () => fg(r.line(), r.column(), r.index()),
    a = o(),
    i = s(),
    l = {
      currentType: 14,
      offset: i,
      startLoc: a,
      endLoc: a,
      lastType: 14,
      lastOffset: i,
      lastStartLoc: a,
      lastEndLoc: a,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    c = () => l,
    { onError: d } = t
  function h(u, f, y, ...L) {
    const P = c()
    if (((f.column += y), (f.offset += y), d)) {
      const M = Vs(P.startLoc, f),
        x = Jr(u, M, { domain: gg, args: L })
      d(x)
    }
  }
  function g(u, f, y) {
    ;(u.endLoc = o()), (u.currentType = f)
    const L = { type: f }
    return (
      n && (L.loc = Vs(u.startLoc, u.endLoc)), y != null && (L.value = y), L
    )
  }
  const v = (u) => g(u, 14)
  function E(u, f) {
    return u.currentChar() === f
      ? (u.next(), f)
      : (h(ie.EXPECTED_TOKEN, o(), 0, f), '')
  }
  function w(u) {
    let f = ''
    for (; u.currentPeek() === bt || u.currentPeek() === He; )
      (f += u.currentPeek()), u.peek()
    return f
  }
  function I(u) {
    const f = w(u)
    return u.skipToPeek(), f
  }
  function p(u) {
    if (u === Nt) return !1
    const f = u.charCodeAt(0)
    return (f >= 97 && f <= 122) || (f >= 65 && f <= 90) || f === 95
  }
  function m(u) {
    if (u === Nt) return !1
    const f = u.charCodeAt(0)
    return f >= 48 && f <= 57
  }
  function C(u, f) {
    const { currentType: y } = f
    if (y !== 2) return !1
    w(u)
    const L = p(u.currentPeek())
    return u.resetPeek(), L
  }
  function _(u, f) {
    const { currentType: y } = f
    if (y !== 2) return !1
    w(u)
    const L = u.currentPeek() === '-' ? u.peek() : u.currentPeek(),
      P = m(L)
    return u.resetPeek(), P
  }
  function T(u, f) {
    const { currentType: y } = f
    if (y !== 2) return !1
    w(u)
    const L = u.currentPeek() === nl
    return u.resetPeek(), L
  }
  function A(u, f) {
    const { currentType: y } = f
    if (y !== 8) return !1
    w(u)
    const L = u.currentPeek() === '.'
    return u.resetPeek(), L
  }
  function N(u, f) {
    const { currentType: y } = f
    if (y !== 9) return !1
    w(u)
    const L = p(u.currentPeek())
    return u.resetPeek(), L
  }
  function O(u, f) {
    const { currentType: y } = f
    if (!(y === 8 || y === 12)) return !1
    w(u)
    const L = u.currentPeek() === ':'
    return u.resetPeek(), L
  }
  function D(u, f) {
    const { currentType: y } = f
    if (y !== 10) return !1
    const L = () => {
        const M = u.currentPeek()
        return M === '{'
          ? p(u.peek())
          : M === '@' ||
            M === '%' ||
            M === '|' ||
            M === ':' ||
            M === '.' ||
            M === bt ||
            !M
          ? !1
          : M === He
          ? (u.peek(), L())
          : p(M)
      },
      P = L()
    return u.resetPeek(), P
  }
  function W(u) {
    w(u)
    const f = u.currentPeek() === '|'
    return u.resetPeek(), f
  }
  function G(u) {
    const f = w(u),
      y = u.currentPeek() === '%' && u.peek() === '{'
    return u.resetPeek(), { isModulo: y, hasSpace: f.length > 0 }
  }
  function U(u, f = !0) {
    const y = (P = !1, M = '', x = !1) => {
        const $ = u.currentPeek()
        return $ === '{'
          ? M === '%'
            ? !1
            : P
          : $ === '@' || !$
          ? M === '%'
            ? !0
            : P
          : $ === '%'
          ? (u.peek(), y(P, '%', !0))
          : $ === '|'
          ? M === '%' || x
            ? !0
            : !(M === bt || M === He)
          : $ === bt
          ? (u.peek(), y(!0, bt, x))
          : $ === He
          ? (u.peek(), y(!0, He, x))
          : !0
      },
      L = y()
    return f && u.resetPeek(), L
  }
  function X(u, f) {
    const y = u.currentChar()
    return y === Nt ? Nt : f(y) ? (u.next(), y) : null
  }
  function V(u) {
    return X(u, (y) => {
      const L = y.charCodeAt(0)
      return (
        (L >= 97 && L <= 122) ||
        (L >= 65 && L <= 90) ||
        (L >= 48 && L <= 57) ||
        L === 95 ||
        L === 36
      )
    })
  }
  function fe(u) {
    return X(u, (y) => {
      const L = y.charCodeAt(0)
      return L >= 48 && L <= 57
    })
  }
  function Q(u) {
    return X(u, (y) => {
      const L = y.charCodeAt(0)
      return (
        (L >= 48 && L <= 57) || (L >= 65 && L <= 70) || (L >= 97 && L <= 102)
      )
    })
  }
  function ee(u) {
    let f = '',
      y = ''
    for (; (f = fe(u)); ) y += f
    return y
  }
  function re(u) {
    I(u)
    const f = u.currentChar()
    return f !== '%' && h(ie.EXPECTED_TOKEN, o(), 0, f), u.next(), '%'
  }
  function Me(u) {
    let f = ''
    for (;;) {
      const y = u.currentChar()
      if (y === '{' || y === '}' || y === '@' || y === '|' || !y) break
      if (y === '%')
        if (U(u)) (f += y), u.next()
        else break
      else if (y === bt || y === He)
        if (U(u)) (f += y), u.next()
        else {
          if (W(u)) break
          ;(f += y), u.next()
        }
      else (f += y), u.next()
    }
    return f
  }
  function je(u) {
    I(u)
    let f = '',
      y = ''
    for (; (f = V(u)); ) y += f
    return u.currentChar() === Nt && h(ie.UNTERMINATED_CLOSING_BRACE, o(), 0), y
  }
  function xe(u) {
    I(u)
    let f = ''
    return (
      u.currentChar() === '-' ? (u.next(), (f += `-${ee(u)}`)) : (f += ee(u)),
      u.currentChar() === Nt && h(ie.UNTERMINATED_CLOSING_BRACE, o(), 0),
      f
    )
  }
  function Te(u) {
    I(u), E(u, "'")
    let f = '',
      y = ''
    const L = (M) => M !== nl && M !== He
    for (; (f = X(u, L)); ) f === '\\' ? (y += nt(u)) : (y += f)
    const P = u.currentChar()
    return P === He || P === Nt
      ? (h(ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, o(), 0),
        P === He && (u.next(), E(u, "'")),
        y)
      : (E(u, "'"), y)
  }
  function nt(u) {
    const f = u.currentChar()
    switch (f) {
      case '\\':
      case "'":
        return u.next(), `\\${f}`
      case 'u':
        return Ge(u, f, 4)
      case 'U':
        return Ge(u, f, 6)
      default:
        return h(ie.UNKNOWN_ESCAPE_SEQUENCE, o(), 0, f), ''
    }
  }
  function Ge(u, f, y) {
    E(u, f)
    let L = ''
    for (let P = 0; P < y; P++) {
      const M = Q(u)
      if (!M) {
        h(
          ie.INVALID_UNICODE_ESCAPE_SEQUENCE,
          o(),
          0,
          `\\${f}${L}${u.currentChar()}`
        )
        break
      }
      L += M
    }
    return `\\${f}${L}`
  }
  function ut(u) {
    I(u)
    let f = '',
      y = ''
    const L = (P) => P !== '{' && P !== '}' && P !== bt && P !== He
    for (; (f = X(u, L)); ) y += f
    return y
  }
  function ye(u) {
    let f = '',
      y = ''
    for (; (f = V(u)); ) y += f
    return y
  }
  function S(u) {
    const f = (y = !1, L) => {
      const P = u.currentChar()
      return P === '{' || P === '%' || P === '@' || P === '|' || !P || P === bt
        ? L
        : P === He
        ? ((L += P), u.next(), f(y, L))
        : ((L += P), u.next(), f(!0, L))
    }
    return f(!1, '')
  }
  function j(u) {
    I(u)
    const f = E(u, '|')
    return I(u), f
  }
  function H(u, f) {
    let y = null
    switch (u.currentChar()) {
      case '{':
        return (
          f.braceNest >= 1 && h(ie.NOT_ALLOW_NEST_PLACEHOLDER, o(), 0),
          u.next(),
          (y = g(f, 2, '{')),
          I(u),
          f.braceNest++,
          y
        )
      case '}':
        return (
          f.braceNest > 0 &&
            f.currentType === 2 &&
            h(ie.EMPTY_PLACEHOLDER, o(), 0),
          u.next(),
          (y = g(f, 3, '}')),
          f.braceNest--,
          f.braceNest > 0 && I(u),
          f.inLinked && f.braceNest === 0 && (f.inLinked = !1),
          y
        )
      case '@':
        return (
          f.braceNest > 0 && h(ie.UNTERMINATED_CLOSING_BRACE, o(), 0),
          (y = K(u, f) || v(f)),
          (f.braceNest = 0),
          y
        )
      default:
        let P = !0,
          M = !0,
          x = !0
        if (W(u))
          return (
            f.braceNest > 0 && h(ie.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (y = g(f, 1, j(u))),
            (f.braceNest = 0),
            (f.inLinked = !1),
            y
          )
        if (
          f.braceNest > 0 &&
          (f.currentType === 5 || f.currentType === 6 || f.currentType === 7)
        )
          return (
            h(ie.UNTERMINATED_CLOSING_BRACE, o(), 0),
            (f.braceNest = 0),
            ne(u, f)
          )
        if ((P = C(u, f))) return (y = g(f, 5, je(u))), I(u), y
        if ((M = _(u, f))) return (y = g(f, 6, xe(u))), I(u), y
        if ((x = T(u, f))) return (y = g(f, 7, Te(u))), I(u), y
        if (!P && !M && !x)
          return (
            (y = g(f, 13, ut(u))),
            h(ie.INVALID_TOKEN_IN_PLACEHOLDER, o(), 0, y.value),
            I(u),
            y
          )
        break
    }
    return y
  }
  function K(u, f) {
    const { currentType: y } = f
    let L = null
    const P = u.currentChar()
    switch (
      ((y === 8 || y === 9 || y === 12 || y === 10) &&
        (P === He || P === bt) &&
        h(ie.INVALID_LINKED_FORMAT, o(), 0),
      P)
    ) {
      case '@':
        return u.next(), (L = g(f, 8, '@')), (f.inLinked = !0), L
      case '.':
        return I(u), u.next(), g(f, 9, '.')
      case ':':
        return I(u), u.next(), g(f, 10, ':')
      default:
        return W(u)
          ? ((L = g(f, 1, j(u))), (f.braceNest = 0), (f.inLinked = !1), L)
          : A(u, f) || O(u, f)
          ? (I(u), K(u, f))
          : N(u, f)
          ? (I(u), g(f, 12, ye(u)))
          : D(u, f)
          ? (I(u), P === '{' ? H(u, f) || L : g(f, 11, S(u)))
          : (y === 8 && h(ie.INVALID_LINKED_FORMAT, o(), 0),
            (f.braceNest = 0),
            (f.inLinked = !1),
            ne(u, f))
    }
  }
  function ne(u, f) {
    let y = { type: 14 }
    if (f.braceNest > 0) return H(u, f) || v(f)
    if (f.inLinked) return K(u, f) || v(f)
    switch (u.currentChar()) {
      case '{':
        return H(u, f) || v(f)
      case '}':
        return h(ie.UNBALANCED_CLOSING_BRACE, o(), 0), u.next(), g(f, 3, '}')
      case '@':
        return K(u, f) || v(f)
      default:
        if (W(u))
          return (y = g(f, 1, j(u))), (f.braceNest = 0), (f.inLinked = !1), y
        const { isModulo: P, hasSpace: M } = G(u)
        if (P) return M ? g(f, 0, Me(u)) : g(f, 4, re(u))
        if (U(u)) return g(f, 0, Me(u))
        break
    }
    return y
  }
  function b() {
    const { currentType: u, offset: f, startLoc: y, endLoc: L } = l
    return (
      (l.lastType = u),
      (l.lastOffset = f),
      (l.lastStartLoc = y),
      (l.lastEndLoc = L),
      (l.offset = s()),
      (l.startLoc = o()),
      r.currentChar() === Nt ? g(l, 14) : ne(r, l)
    )
  }
  return { nextToken: b, currentOffset: s, currentPosition: o, context: c }
}
const yg = 'parser',
  bg = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g
function vg(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\'
    case "\\'":
      return "'"
    default: {
      const r = parseInt(t || n, 16)
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : '�'
    }
  }
}
function Eg(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e
  function r(p, m, C, _, ...T) {
    const A = p.currentPosition()
    if (((A.offset += _), (A.column += _), n)) {
      const N = Vs(C, A),
        O = Jr(m, N, { domain: yg, args: T })
      n(O)
    }
  }
  function s(p, m, C) {
    const _ = { type: p, start: m, end: m }
    return t && (_.loc = { start: C, end: C }), _
  }
  function o(p, m, C, _) {
    ;(p.end = m), _ && (p.type = _), t && p.loc && (p.loc.end = C)
  }
  function a(p, m) {
    const C = p.context(),
      _ = s(3, C.offset, C.startLoc)
    return (_.value = m), o(_, p.currentOffset(), p.currentPosition()), _
  }
  function i(p, m) {
    const C = p.context(),
      { lastOffset: _, lastStartLoc: T } = C,
      A = s(5, _, T)
    return (
      (A.index = parseInt(m, 10)),
      p.nextToken(),
      o(A, p.currentOffset(), p.currentPosition()),
      A
    )
  }
  function l(p, m) {
    const C = p.context(),
      { lastOffset: _, lastStartLoc: T } = C,
      A = s(4, _, T)
    return (
      (A.key = m),
      p.nextToken(),
      o(A, p.currentOffset(), p.currentPosition()),
      A
    )
  }
  function c(p, m) {
    const C = p.context(),
      { lastOffset: _, lastStartLoc: T } = C,
      A = s(9, _, T)
    return (
      (A.value = m.replace(bg, vg)),
      p.nextToken(),
      o(A, p.currentOffset(), p.currentPosition()),
      A
    )
  }
  function d(p) {
    const m = p.nextToken(),
      C = p.context(),
      { lastOffset: _, lastStartLoc: T } = C,
      A = s(8, _, T)
    return m.type !== 12
      ? (r(p, ie.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0),
        (A.value = ''),
        o(A, _, T),
        { nextConsumeToken: m, node: A })
      : (m.value == null &&
          r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, dt(m)),
        (A.value = m.value || ''),
        o(A, p.currentOffset(), p.currentPosition()),
        { node: A })
  }
  function h(p, m) {
    const C = p.context(),
      _ = s(7, C.offset, C.startLoc)
    return (_.value = m), o(_, p.currentOffset(), p.currentPosition()), _
  }
  function g(p) {
    const m = p.context(),
      C = s(6, m.offset, m.startLoc)
    let _ = p.nextToken()
    if (_.type === 9) {
      const T = d(p)
      ;(C.modifier = T.node), (_ = T.nextConsumeToken || p.nextToken())
    }
    switch (
      (_.type !== 10 &&
        r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(_)),
      (_ = p.nextToken()),
      _.type === 2 && (_ = p.nextToken()),
      _.type)
    ) {
      case 11:
        _.value == null &&
          r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(_)),
          (C.key = h(p, _.value || ''))
        break
      case 5:
        _.value == null &&
          r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(_)),
          (C.key = l(p, _.value || ''))
        break
      case 6:
        _.value == null &&
          r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(_)),
          (C.key = i(p, _.value || ''))
        break
      case 7:
        _.value == null &&
          r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(_)),
          (C.key = c(p, _.value || ''))
        break
      default:
        r(p, ie.UNEXPECTED_EMPTY_LINKED_KEY, m.lastStartLoc, 0)
        const T = p.context(),
          A = s(7, T.offset, T.startLoc)
        return (
          (A.value = ''),
          o(A, T.offset, T.startLoc),
          (C.key = A),
          o(C, T.offset, T.startLoc),
          { nextConsumeToken: _, node: C }
        )
    }
    return o(C, p.currentOffset(), p.currentPosition()), { node: C }
  }
  function v(p) {
    const m = p.context(),
      C = m.currentType === 1 ? p.currentOffset() : m.offset,
      _ = m.currentType === 1 ? m.endLoc : m.startLoc,
      T = s(2, C, _)
    T.items = []
    let A = null
    do {
      const D = A || p.nextToken()
      switch (((A = null), D.type)) {
        case 0:
          D.value == null &&
            r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(D)),
            T.items.push(a(p, D.value || ''))
          break
        case 6:
          D.value == null &&
            r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(D)),
            T.items.push(i(p, D.value || ''))
          break
        case 5:
          D.value == null &&
            r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(D)),
            T.items.push(l(p, D.value || ''))
          break
        case 7:
          D.value == null &&
            r(p, ie.UNEXPECTED_LEXICAL_ANALYSIS, m.lastStartLoc, 0, dt(D)),
            T.items.push(c(p, D.value || ''))
          break
        case 8:
          const W = g(p)
          T.items.push(W.node), (A = W.nextConsumeToken || null)
          break
      }
    } while (m.currentType !== 14 && m.currentType !== 1)
    const N = m.currentType === 1 ? m.lastOffset : p.currentOffset(),
      O = m.currentType === 1 ? m.lastEndLoc : p.currentPosition()
    return o(T, N, O), T
  }
  function E(p, m, C, _) {
    const T = p.context()
    let A = _.items.length === 0
    const N = s(1, m, C)
    ;(N.cases = []), N.cases.push(_)
    do {
      const O = v(p)
      A || (A = O.items.length === 0), N.cases.push(O)
    } while (T.currentType !== 14)
    return (
      A && r(p, ie.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0),
      o(N, p.currentOffset(), p.currentPosition()),
      N
    )
  }
  function w(p) {
    const m = p.context(),
      { offset: C, startLoc: _ } = m,
      T = v(p)
    return m.currentType === 14 ? T : E(p, C, _, T)
  }
  function I(p) {
    const m = _g(p, Ne({}, e)),
      C = m.context(),
      _ = s(0, C.offset, C.startLoc)
    return (
      t && _.loc && (_.loc.source = p),
      (_.body = w(m)),
      C.currentType !== 14 &&
        r(
          m,
          ie.UNEXPECTED_LEXICAL_ANALYSIS,
          C.lastStartLoc,
          0,
          p[C.offset] || ''
        ),
      o(_, m.currentOffset(), m.currentPosition()),
      _
    )
  }
  return { parse: I }
}
function dt(e) {
  if (e.type === 14) return 'EOF'
  const t = (e.value || '').replace(/\r?\n/gu, '\\n')
  return t.length > 10 ? t.slice(0, 9) + '…' : t
}
function Tg(e, t = {}) {
  const n = { ast: e, helpers: new Set() }
  return { context: () => n, helper: (o) => (n.helpers.add(o), o) }
}
function rl(e, t) {
  for (let n = 0; n < e.length; n++) So(e[n], t)
}
function So(e, t) {
  switch (e.type) {
    case 1:
      rl(e.cases, t), t.helper('plural')
      break
    case 2:
      rl(e.items, t)
      break
    case 6:
      So(e.key, t), t.helper('linked'), t.helper('type')
      break
    case 5:
      t.helper('interpolate'), t.helper('list')
      break
    case 4:
      t.helper('interpolate'), t.helper('named')
      break
  }
}
function Cg(e, t = {}) {
  const n = Tg(e)
  n.helper('normalize'), e.body && So(e.body, n)
  const r = n.context()
  e.helpers = Array.from(r.helpers)
}
function wg(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: s, needIndent: o } = t,
    a = {
      source: e.loc.source,
      filename: r,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: s,
      needIndent: o,
      indentLevel: 0,
    },
    i = () => a
  function l(w, I) {
    a.code += w
  }
  function c(w, I = !0) {
    const p = I ? s : ''
    l(o ? p + '  '.repeat(w) : p)
  }
  function d(w = !0) {
    const I = ++a.indentLevel
    w && c(I)
  }
  function h(w = !0) {
    const I = --a.indentLevel
    w && c(I)
  }
  function g() {
    c(a.indentLevel)
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: h,
    newline: g,
    helper: (w) => `_${w}`,
    needIndent: () => a.needIndent,
  }
}
function Lg(e, t) {
  const { helper: n } = e
  e.push(`${n('linked')}(`),
    yn(e, t.key),
    t.modifier
      ? (e.push(', '), yn(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')')
}
function kg(e, t) {
  const { helper: n, needIndent: r } = e
  e.push(`${n('normalize')}([`), e.indent(r())
  const s = t.items.length
  for (let o = 0; o < s && (yn(e, t.items[o]), o !== s - 1); o++) e.push(', ')
  e.deindent(r()), e.push('])')
}
function Rg(e, t) {
  const { helper: n, needIndent: r } = e
  if (t.cases.length > 1) {
    e.push(`${n('plural')}([`), e.indent(r())
    const s = t.cases.length
    for (let o = 0; o < s && (yn(e, t.cases[o]), o !== s - 1); o++) e.push(', ')
    e.deindent(r()), e.push('])')
  }
}
function Ig(e, t) {
  t.body ? yn(e, t.body) : e.push('null')
}
function yn(e, t) {
  const { helper: n } = e
  switch (t.type) {
    case 0:
      Ig(e, t)
      break
    case 1:
      Rg(e, t)
      break
    case 2:
      kg(e, t)
      break
    case 6:
      Lg(e, t)
      break
    case 8:
      e.push(JSON.stringify(t.value), t)
      break
    case 7:
      e.push(JSON.stringify(t.value), t)
      break
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t)
      break
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t)
      break
    case 9:
      e.push(JSON.stringify(t.value), t)
      break
    case 3:
      e.push(JSON.stringify(t.value), t)
      break
  }
}
const Pg = (e, t = {}) => {
  const n = B(t.mode) ? t.mode : 'normal',
    r = B(t.filename) ? t.filename : 'message.intl',
    s = !!t.sourceMap,
    o =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
        ? ';'
        : `
`,
    a = t.needIndent ? t.needIndent : n !== 'arrow',
    i = e.helpers || [],
    l = wg(e, {
      mode: n,
      filename: r,
      sourceMap: s,
      breakLineCode: o,
      needIndent: a,
    })
  l.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    l.indent(a),
    i.length > 0 &&
      (l.push(`const { ${i.map((h) => `${h}: _${h}`).join(', ')} } = ctx`),
      l.newline()),
    l.push('return '),
    yn(l, e),
    l.deindent(a),
    l.push('}')
  const { code: c, map: d } = l.context()
  return { ast: e, code: c, map: d ? d.toJSON() : void 0 }
}
function Ag(e, t = {}) {
  const n = Ne({}, t),
    s = Eg(n).parse(e)
  return Cg(s, n), Pg(s, n)
}
/*!
 * devtools-if v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Lc = {
  I18nInit: 'i18n:init',
  FunctionTranslate: 'function:translate',
}
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const Wt = []
Wt[0] = { w: [0], i: [3, 0], ['[']: [4], o: [7] }
Wt[1] = { w: [1], ['.']: [2], ['[']: [4], o: [7] }
Wt[2] = { w: [2], i: [3, 0], [0]: [3, 0] }
Wt[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ['.']: [2, 1],
  ['[']: [4, 1],
  o: [7, 1],
}
Wt[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ['[']: [4, 2],
  [']']: [1, 3],
  o: 8,
  l: [4, 0],
}
Wt[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] }
Wt[6] = { ['"']: [4, 0], o: 8, l: [6, 0] }
const Ng = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/
function Og(e) {
  return Ng.test(e)
}
function Sg(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1)
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function Fg(e) {
  if (e == null) return 'o'
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e
    case 95:
    case 36:
    case 45:
      return 'i'
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w'
  }
  return 'i'
}
function Mg(e) {
  const t = e.trim()
  return e.charAt(0) === '0' && isNaN(parseInt(e))
    ? !1
    : Og(t)
    ? Sg(t)
    : '*' + t
}
function xg(e) {
  const t = []
  let n = -1,
    r = 0,
    s = 0,
    o,
    a,
    i,
    l,
    c,
    d,
    h
  const g = []
  ;(g[0] = () => {
    a === void 0 ? (a = i) : (a += i)
  }),
    (g[1] = () => {
      a !== void 0 && (t.push(a), (a = void 0))
    }),
    (g[2] = () => {
      g[0](), s++
    }),
    (g[3] = () => {
      if (s > 0) s--, (r = 4), g[0]()
      else {
        if (((s = 0), a === void 0 || ((a = Mg(a)), a === !1))) return !1
        g[1]()
      }
    })
  function v() {
    const E = e[n + 1]
    if ((r === 5 && E === "'") || (r === 6 && E === '"'))
      return n++, (i = '\\' + E), g[0](), !0
  }
  for (; r !== null; )
    if ((n++, (o = e[n]), !(o === '\\' && v()))) {
      if (
        ((l = Fg(o)),
        (h = Wt[r]),
        (c = h[l] || h.l || 8),
        c === 8 ||
          ((r = c[0]),
          c[1] !== void 0 && ((d = g[c[1]]), d && ((i = o), d() === !1))))
      )
        return
      if (r === 7) return t
    }
}
const sl = new Map()
function Dg(e, t) {
  return he(e) ? e[t] : null
}
function $g(e, t) {
  if (!he(e)) return null
  let n = sl.get(t)
  if ((n || ((n = xg(t)), n && sl.set(t, n)), !n)) return null
  const r = n.length
  let s = e,
    o = 0
  for (; o < r; ) {
    const a = s[n[o]]
    if (a === void 0) return null
    ;(s = a), o++
  }
  return s
}
const Hg = (e) => e,
  Ug = (e) => '',
  Wg = 'text',
  jg = (e) => (e.length === 0 ? '' : e.join('')),
  Bg = cg
function ol(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  )
}
function Vg(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1
  return e.named && (Ie(e.named.count) || Ie(e.named.n))
    ? Ie(e.named.count)
      ? e.named.count
      : Ie(e.named.n)
      ? e.named.n
      : t
    : t
}
function Kg(e, t) {
  t.count || (t.count = e), t.n || (t.n = e)
}
function Yg(e = {}) {
  const t = e.locale,
    n = Vg(e),
    r =
      he(e.pluralRules) && B(t) && Ee(e.pluralRules[t]) ? e.pluralRules[t] : ol,
    s = he(e.pluralRules) && B(t) && Ee(e.pluralRules[t]) ? ol : void 0,
    o = (p) => p[r(n, p.length, s)],
    a = e.list || [],
    i = (p) => a[p],
    l = e.named || {}
  Ie(e.pluralIndex) && Kg(n, l)
  const c = (p) => l[p]
  function d(p) {
    const m = Ee(e.messages)
      ? e.messages(p)
      : he(e.messages)
      ? e.messages[p]
      : !1
    return m || (e.parent ? e.parent.message(p) : Ug)
  }
  const h = (p) => (e.modifiers ? e.modifiers[p] : Hg),
    g =
      z(e.processor) && Ee(e.processor.normalize) ? e.processor.normalize : jg,
    v =
      z(e.processor) && Ee(e.processor.interpolate)
        ? e.processor.interpolate
        : Bg,
    E = z(e.processor) && B(e.processor.type) ? e.processor.type : Wg,
    I = {
      list: i,
      named: c,
      plural: o,
      linked: (p, ...m) => {
        const [C, _] = m
        let T = 'text',
          A = ''
        m.length === 1
          ? he(C)
            ? ((A = C.modifier || A), (T = C.type || T))
            : B(C) && (A = C || A)
          : m.length === 2 && (B(C) && (A = C || A), B(_) && (T = _ || T))
        let N = d(p)(I)
        return T === 'vnode' && de(N) && A && (N = N[0]), A ? h(A)(N, T) : N
      },
      message: d,
      type: E,
      interpolate: v,
      normalize: g,
    }
  return I
}
let Jn = null
function Gg(e) {
  Jn = e
}
function Xg(e, t, n) {
  Jn &&
    Jn.emit(Lc.I18nInit, {
      timestamp: Date.now(),
      i18n: e,
      version: t,
      meta: n,
    })
}
const qg = Jg(Lc.FunctionTranslate)
function Jg(e) {
  return (t) => Jn && Jn.emit(e, t)
}
function Qg(e, t, n) {
  return [
    ...new Set([n, ...(de(t) ? t : he(t) ? Object.keys(t) : B(t) ? [t] : [n])]),
  ]
}
function kc(e, t, n) {
  const r = B(n) ? n : rr,
    s = e
  s.__localeChainCache || (s.__localeChainCache = new Map())
  let o = s.__localeChainCache.get(r)
  if (!o) {
    o = []
    let a = [n]
    for (; de(a); ) a = al(o, a, t)
    const i = de(t) || !z(t) ? t : t.default ? t.default : null
    ;(a = B(i) ? [i] : i), de(a) && al(o, a, !1), s.__localeChainCache.set(r, o)
  }
  return o
}
function al(e, t, n) {
  let r = !0
  for (let s = 0; s < t.length && oe(r); s++) {
    const o = t[s]
    B(o) && (r = Zg(e, t[s], n))
  }
  return r
}
function Zg(e, t, n) {
  let r
  const s = t.split('-')
  do {
    const o = s.join('-')
    ;(r = zg(e, o, n)), s.splice(-1, 1)
  } while (s.length && r === !0)
  return r
}
function zg(e, t, n) {
  let r = !1
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== '!'
    const s = t.replace(/!/g, '')
    e.push(s), (de(n) || z(n)) && n[s] && (r = n[s])
  }
  return r
}
const e_ = '9.2.2',
  Qr = -1,
  rr = 'en-US',
  ll = '',
  il = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`
function t_() {
  return {
    upper: (e, t) =>
      t === 'text' && B(e)
        ? e.toUpperCase()
        : t === 'vnode' && he(e) && '__v_isVNode' in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === 'text' && B(e)
        ? e.toLowerCase()
        : t === 'vnode' && he(e) && '__v_isVNode' in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === 'text' && B(e)
        ? il(e)
        : t === 'vnode' && he(e) && '__v_isVNode' in e
        ? il(e.children)
        : e,
  }
}
let Rc
function n_(e) {
  Rc = e
}
let Ic
function r_(e) {
  Ic = e
}
let Pc
function s_(e) {
  Pc = e
}
let Ac = null
const cl = (e) => {
    Ac = e
  },
  o_ = () => Ac
let Nc = null
const ul = (e) => {
    Nc = e
  },
  a_ = () => Nc
let fl = 0
function l_(e = {}) {
  const t = B(e.version) ? e.version : e_,
    n = B(e.locale) ? e.locale : rr,
    r =
      de(e.fallbackLocale) ||
      z(e.fallbackLocale) ||
      B(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : n,
    s = z(e.messages) ? e.messages : { [n]: {} },
    o = z(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} },
    a = z(e.numberFormats) ? e.numberFormats : { [n]: {} },
    i = Ne({}, e.modifiers || {}, t_()),
    l = e.pluralRules || {},
    c = Ee(e.missing) ? e.missing : null,
    d = oe(e.missingWarn) || Ht(e.missingWarn) ? e.missingWarn : !0,
    h = oe(e.fallbackWarn) || Ht(e.fallbackWarn) ? e.fallbackWarn : !0,
    g = !!e.fallbackFormat,
    v = !!e.unresolving,
    E = Ee(e.postTranslation) ? e.postTranslation : null,
    w = z(e.processor) ? e.processor : null,
    I = oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    p = !!e.escapeParameter,
    m = Ee(e.messageCompiler) ? e.messageCompiler : Rc,
    C = Ee(e.messageResolver) ? e.messageResolver : Ic || Dg,
    _ = Ee(e.localeFallbacker) ? e.localeFallbacker : Pc || Qg,
    T = he(e.fallbackContext) ? e.fallbackContext : void 0,
    A = Ee(e.onWarn) ? e.onWarn : lg,
    N = e,
    O = he(N.__datetimeFormatters) ? N.__datetimeFormatters : new Map(),
    D = he(N.__numberFormatters) ? N.__numberFormatters : new Map(),
    W = he(N.__meta) ? N.__meta : {}
  fl++
  const G = {
    version: t,
    cid: fl,
    locale: n,
    fallbackLocale: r,
    messages: s,
    modifiers: i,
    pluralRules: l,
    missing: c,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: E,
    processor: w,
    warnHtmlMessage: I,
    escapeParameter: p,
    messageCompiler: m,
    messageResolver: C,
    localeFallbacker: _,
    fallbackContext: T,
    onWarn: A,
    __meta: W,
  }
  return (
    (G.datetimeFormats = o),
    (G.numberFormats = a),
    (G.__datetimeFormatters = O),
    (G.__numberFormatters = D),
    __INTLIFY_PROD_DEVTOOLS__ && Xg(G, t, W),
    G
  )
}
function Fo(e, t, n, r, s) {
  const { missing: o, onWarn: a } = e
  if (o !== null) {
    const i = o(e, n, t, s)
    return B(i) ? i : t
  } else return t
}
function Pn(e, t, n) {
  const r = e
  ;(r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t)
}
const i_ = (e) => e
let dl = Object.create(null)
function c_(e, t = {}) {
  {
    const r = (t.onCacheKey || i_)(e),
      s = dl[r]
    if (s) return s
    let o = !1
    const a = t.onError || ug
    t.onError = (c) => {
      ;(o = !0), a(c)
    }
    const { code: i } = Ag(e, t),
      l = new Function(`return ${i}`)()
    return o ? l : (dl[r] = l)
  }
}
let Oc = ie.__EXTEND_POINT__
const gs = () => ++Oc,
  rn = {
    INVALID_ARGUMENT: Oc,
    INVALID_DATE_ARGUMENT: gs(),
    INVALID_ISO_DATE_ARGUMENT: gs(),
    __EXTEND_POINT__: gs(),
  }
function sn(e) {
  return Jr(e, null, void 0)
}
const hl = () => '',
  mt = (e) => Ee(e)
function pl(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: s,
      messageCompiler: o,
      fallbackLocale: a,
      messages: i,
    } = e,
    [l, c] = Ks(...t),
    d = oe(c.missingWarn) ? c.missingWarn : e.missingWarn,
    h = oe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn,
    g = oe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter,
    v = !!c.resolvedMessage,
    E =
      B(c.default) || oe(c.default)
        ? oe(c.default)
          ? o
            ? l
            : () => l
          : c.default
        : n
        ? o
          ? l
          : () => l
        : '',
    w = n || E !== '',
    I = B(c.locale) ? c.locale : e.locale
  g && u_(c)
  let [p, m, C] = v ? [l, I, i[I] || {}] : Sc(e, l, I, a, h, d),
    _ = p,
    T = l
  if (
    (!v && !(B(_) || mt(_)) && w && ((_ = E), (T = _)),
    !v && (!(B(_) || mt(_)) || !B(m)))
  )
    return s ? Qr : l
  let A = !1
  const N = () => {
      A = !0
    },
    O = mt(_) ? _ : Fc(e, l, m, _, T, N)
  if (A) return _
  const D = h_(e, m, C, c),
    W = Yg(D),
    G = f_(e, O, W),
    U = r ? r(G, l) : G
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const X = {
      timestamp: Date.now(),
      key: B(l) ? l : mt(_) ? _.key : '',
      locale: m || (mt(_) ? _.locale : ''),
      format: B(_) ? _ : mt(_) ? _.source : '',
      message: U,
    }
    ;(X.meta = Ne({}, e.__meta, o_() || {})), qg(X)
  }
  return U
}
function u_(e) {
  de(e.list)
    ? (e.list = e.list.map((t) => (B(t) ? tl(t) : t)))
    : he(e.named) &&
      Object.keys(e.named).forEach((t) => {
        B(e.named[t]) && (e.named[t] = tl(e.named[t]))
      })
}
function Sc(e, t, n, r, s, o) {
  const { messages: a, onWarn: i, messageResolver: l, localeFallbacker: c } = e,
    d = c(e, r, n)
  let h = {},
    g,
    v = null
  const E = 'translate'
  for (
    let w = 0;
    w < d.length &&
    ((g = d[w]),
    (h = a[g] || {}),
    (v = l(h, t)) === null && (v = h[t]),
    !(B(v) || Ee(v)));
    w++
  ) {
    const I = Fo(e, t, g, o, E)
    I !== t && (v = I)
  }
  return [v, g, h]
}
function Fc(e, t, n, r, s, o) {
  const { messageCompiler: a, warnHtmlMessage: i } = e
  if (mt(r)) {
    const c = r
    return (c.locale = c.locale || n), (c.key = c.key || t), c
  }
  if (a == null) {
    const c = () => r
    return (c.locale = n), (c.key = t), c
  }
  const l = a(r, d_(e, n, s, r, i, o))
  return (l.locale = n), (l.key = t), (l.source = r), l
}
function f_(e, t, n) {
  return t(n)
}
function Ks(...e) {
  const [t, n, r] = e,
    s = {}
  if (!B(t) && !Ie(t) && !mt(t)) throw sn(rn.INVALID_ARGUMENT)
  const o = Ie(t) ? String(t) : (mt(t), t)
  return (
    Ie(n)
      ? (s.plural = n)
      : B(n)
      ? (s.default = n)
      : z(n) && !qr(n)
      ? (s.named = n)
      : de(n) && (s.list = n),
    Ie(r) ? (s.plural = r) : B(r) ? (s.default = r) : z(r) && Ne(s, r),
    [o, s]
  )
}
function d_(e, t, n, r, s, o) {
  return {
    warnHtmlMessage: s,
    onError: (a) => {
      throw (o && o(a), a)
    },
    onCacheKey: (a) => sg(t, n, a),
  }
}
function h_(e, t, n, r) {
  const {
      modifiers: s,
      pluralRules: o,
      messageResolver: a,
      fallbackLocale: i,
      fallbackWarn: l,
      missingWarn: c,
      fallbackContext: d,
    } = e,
    g = {
      locale: t,
      modifiers: s,
      pluralRules: o,
      messages: (v) => {
        let E = a(n, v)
        if (E == null && d) {
          const [, , w] = Sc(d, v, t, i, l, c)
          E = a(w, v)
        }
        if (B(E)) {
          let w = !1
          const p = Fc(e, v, t, E, v, () => {
            w = !0
          })
          return w ? hl : p
        } else return mt(E) ? E : hl
      },
    }
  return (
    e.processor && (g.processor = e.processor),
    r.list && (g.list = r.list),
    r.named && (g.named = r.named),
    Ie(r.plural) && (g.pluralIndex = r.plural),
    g
  )
}
function ml(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: a,
    } = e,
    { __datetimeFormatters: i } = e,
    [l, c, d, h] = Ys(...t),
    g = oe(d.missingWarn) ? d.missingWarn : e.missingWarn
  oe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn
  const v = !!d.part,
    E = B(d.locale) ? d.locale : e.locale,
    w = a(e, s, E)
  if (!B(l) || l === '') return new Intl.DateTimeFormat(E, h).format(c)
  let I = {},
    p,
    m = null
  const C = 'datetime format'
  for (
    let A = 0;
    A < w.length && ((p = w[A]), (I = n[p] || {}), (m = I[l]), !z(m));
    A++
  )
    Fo(e, l, p, g, C)
  if (!z(m) || !B(p)) return r ? Qr : l
  let _ = `${p}__${l}`
  qr(h) || (_ = `${_}__${JSON.stringify(h)}`)
  let T = i.get(_)
  return (
    T || ((T = new Intl.DateTimeFormat(p, Ne({}, m, h))), i.set(_, T)),
    v ? T.formatToParts(c) : T.format(c)
  )
}
const Mc = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
]
function Ys(...e) {
  const [t, n, r, s] = e,
    o = {}
  let a = {},
    i
  if (B(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/)
    if (!l) throw sn(rn.INVALID_ISO_DATE_ARGUMENT)
    const c = l[3]
      ? l[3].trim().startsWith('T')
        ? `${l[1].trim()}${l[3].trim()}`
        : `${l[1].trim()}T${l[3].trim()}`
      : l[1].trim()
    i = new Date(c)
    try {
      i.toISOString()
    } catch {
      throw sn(rn.INVALID_ISO_DATE_ARGUMENT)
    }
  } else if (ag(t)) {
    if (isNaN(t.getTime())) throw sn(rn.INVALID_DATE_ARGUMENT)
    i = t
  } else if (Ie(t)) i = t
  else throw sn(rn.INVALID_ARGUMENT)
  return (
    B(n)
      ? (o.key = n)
      : z(n) &&
        Object.keys(n).forEach((l) => {
          Mc.includes(l) ? (a[l] = n[l]) : (o[l] = n[l])
        }),
    B(r) ? (o.locale = r) : z(r) && (a = r),
    z(s) && (a = s),
    [o.key || '', i, o, a]
  )
}
function gl(e, t, n) {
  const r = e
  for (const s in n) {
    const o = `${t}__${s}`
    r.__datetimeFormatters.has(o) && r.__datetimeFormatters.delete(o)
  }
}
function _l(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: s,
      onWarn: o,
      localeFallbacker: a,
    } = e,
    { __numberFormatters: i } = e,
    [l, c, d, h] = Gs(...t),
    g = oe(d.missingWarn) ? d.missingWarn : e.missingWarn
  oe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn
  const v = !!d.part,
    E = B(d.locale) ? d.locale : e.locale,
    w = a(e, s, E)
  if (!B(l) || l === '') return new Intl.NumberFormat(E, h).format(c)
  let I = {},
    p,
    m = null
  const C = 'number format'
  for (
    let A = 0;
    A < w.length && ((p = w[A]), (I = n[p] || {}), (m = I[l]), !z(m));
    A++
  )
    Fo(e, l, p, g, C)
  if (!z(m) || !B(p)) return r ? Qr : l
  let _ = `${p}__${l}`
  qr(h) || (_ = `${_}__${JSON.stringify(h)}`)
  let T = i.get(_)
  return (
    T || ((T = new Intl.NumberFormat(p, Ne({}, m, h))), i.set(_, T)),
    v ? T.formatToParts(c) : T.format(c)
  )
}
const xc = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
]
function Gs(...e) {
  const [t, n, r, s] = e,
    o = {}
  let a = {}
  if (!Ie(t)) throw sn(rn.INVALID_ARGUMENT)
  const i = t
  return (
    B(n)
      ? (o.key = n)
      : z(n) &&
        Object.keys(n).forEach((l) => {
          xc.includes(l) ? (a[l] = n[l]) : (o[l] = n[l])
        }),
    B(r) ? (o.locale = r) : z(r) && (a = r),
    z(s) && (a = s),
    [o.key || '', i, o, a]
  )
}
function yl(e, t, n) {
  const r = e
  for (const s in n) {
    const o = `${t}__${s}`
    r.__numberFormatters.has(o) && r.__numberFormatters.delete(o)
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
  (Wn().__INTLIFY_PROD_DEVTOOLS__ = !1)
/*!
 * vue-i18n v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */ const p_ = '9.2.2'
function m_() {
  typeof __VUE_I18N_FULL_INSTALL__ != 'boolean' &&
    (Wn().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != 'boolean' &&
      (Wn().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_PROD_DEVTOOLS__ != 'boolean' &&
      (Wn().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
let Dc = ie.__EXTEND_POINT__
const Ve = () => ++Dc,
  Le = {
    UNEXPECTED_RETURN_TYPE: Dc,
    INVALID_ARGUMENT: Ve(),
    MUST_BE_CALL_SETUP_TOP: Ve(),
    NOT_INSLALLED: Ve(),
    NOT_AVAILABLE_IN_LEGACY_MODE: Ve(),
    REQUIRED_VALUE: Ve(),
    INVALID_VALUE: Ve(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ve(),
    NOT_INSLALLED_WITH_PROVIDE: Ve(),
    UNEXPECTED_ERROR: Ve(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: Ve(),
    BRIDGE_SUPPORT_VUE_2_ONLY: Ve(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ve(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ve(),
    __EXTEND_POINT__: Ve(),
  }
function Pe(e, ...t) {
  return Jr(e, null, void 0)
}
const Xs = Ut('__transrateVNode'),
  qs = Ut('__datetimeParts'),
  Js = Ut('__numberParts'),
  $c = Ut('__setPluralRules')
Ut('__intlifyMeta')
const Hc = Ut('__injectWithOption')
function Qs(e) {
  if (!he(e)) return e
  for (const t in e)
    if (No(e, t))
      if (!t.includes('.')) he(e[t]) && Qs(e[t])
      else {
        const n = t.split('.'),
          r = n.length - 1
        let s = e
        for (let o = 0; o < r; o++) n[o] in s || (s[n[o]] = {}), (s = s[n[o]])
        ;(s[n[r]] = e[t]), delete e[t], he(s[n[r]]) && Qs(s[n[r]])
      }
  return e
}
function Zr(e, t) {
  const { messages: n, __i18n: r, messageResolver: s, flatJson: o } = t,
    a = z(n) ? n : de(r) ? {} : { [e]: {} }
  if (
    (de(r) &&
      r.forEach((i) => {
        if ('locale' in i && 'resource' in i) {
          const { locale: l, resource: c } = i
          l ? ((a[l] = a[l] || {}), jn(c, a[l])) : jn(c, a)
        } else B(i) && jn(JSON.parse(i), a)
      }),
    s == null && o)
  )
    for (const i in a) No(a, i) && Qs(a[i])
  return a
}
const _r = (e) => !he(e) || de(e)
function jn(e, t) {
  if (_r(e) || _r(t)) throw Pe(Le.INVALID_VALUE)
  for (const n in e)
    No(e, n) && (_r(e[n]) || _r(t[n]) ? (t[n] = e[n]) : jn(e[n], t[n]))
}
function Uc(e) {
  return e.type
}
function Wc(e, t, n) {
  let r = he(t.messages) ? t.messages : {}
  '__i18nGlobal' in n &&
    (r = Zr(globalThis.locale.value, { messages: r, __i18n: n.__i18nGlobal }))
  const s = Object.keys(r)
  s.length &&
    s.forEach((o) => {
      e.mergeLocaleMessage(o, r[o])
    })
  {
    if (he(t.datetimeFormats)) {
      const o = Object.keys(t.datetimeFormats)
      o.length &&
        o.forEach((a) => {
          e.mergeDateTimeFormat(a, t.datetimeFormats[a])
        })
    }
    if (he(t.numberFormats)) {
      const o = Object.keys(t.numberFormats)
      o.length &&
        o.forEach((a) => {
          e.mergeNumberFormat(a, t.numberFormats[a])
        })
    }
  }
}
function bl(e) {
  return _e(Qt, null, e, 0)
}
const vl = '__INTLIFY_META__'
let El = 0
function Tl(e) {
  return (t, n, r, s) => e(n, r, tt() || void 0, s)
}
const g_ = () => {
  const e = tt()
  let t = null
  return e && (t = Uc(e)[vl]) ? { [vl]: t } : null
}
function Mo(e = {}, t) {
  const { __root: n } = e,
    r = n === void 0
  let s = oe(e.inheritLocale) ? e.inheritLocale : !0
  const o = Re(n && s ? n.locale.value : B(e.locale) ? e.locale : rr),
    a = Re(
      n && s
        ? n.fallbackLocale.value
        : B(e.fallbackLocale) ||
          de(e.fallbackLocale) ||
          z(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : o.value
    ),
    i = Re(Zr(o.value, e)),
    l = Re(z(e.datetimeFormats) ? e.datetimeFormats : { [o.value]: {} }),
    c = Re(z(e.numberFormats) ? e.numberFormats : { [o.value]: {} })
  let d = n
      ? n.missingWarn
      : oe(e.missingWarn) || Ht(e.missingWarn)
      ? e.missingWarn
      : !0,
    h = n
      ? n.fallbackWarn
      : oe(e.fallbackWarn) || Ht(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    g = n ? n.fallbackRoot : oe(e.fallbackRoot) ? e.fallbackRoot : !0,
    v = !!e.fallbackFormat,
    E = Ee(e.missing) ? e.missing : null,
    w = Ee(e.missing) ? Tl(e.missing) : null,
    I = Ee(e.postTranslation) ? e.postTranslation : null,
    p = n ? n.warnHtmlMessage : oe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    m = !!e.escapeParameter
  const C = n ? n.modifiers : z(e.modifiers) ? e.modifiers : {}
  let _ = e.pluralRules || (n && n.pluralRules),
    T
  ;(T = (() => {
    r && ul(null)
    const k = {
      version: p_,
      locale: o.value,
      fallbackLocale: a.value,
      messages: i.value,
      modifiers: C,
      pluralRules: _,
      missing: w === null ? void 0 : w,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: p,
      escapeParameter: m,
      messageResolver: e.messageResolver,
      __meta: { framework: 'vue' },
    }
    ;(k.datetimeFormats = l.value),
      (k.numberFormats = c.value),
      (k.__datetimeFormatters = z(T) ? T.__datetimeFormatters : void 0),
      (k.__numberFormatters = z(T) ? T.__numberFormatters : void 0)
    const R = l_(k)
    return r && ul(R), R
  })()),
    Pn(T, o.value, a.value)
  function N() {
    return [o.value, a.value, i.value, l.value, c.value]
  }
  const O = ge({
      get: () => o.value,
      set: (k) => {
        ;(o.value = k), (T.locale = o.value)
      },
    }),
    D = ge({
      get: () => a.value,
      set: (k) => {
        ;(a.value = k), (T.fallbackLocale = a.value), Pn(T, o.value, k)
      },
    }),
    W = ge(() => i.value),
    G = ge(() => l.value),
    U = ge(() => c.value)
  function X() {
    return Ee(I) ? I : null
  }
  function V(k) {
    ;(I = k), (T.postTranslation = k)
  }
  function fe() {
    return E
  }
  function Q(k) {
    k !== null && (w = Tl(k)), (E = k), (T.missing = w)
  }
  const ee = (k, R, Y, q, te, ce) => {
    N()
    let se
    if (__INTLIFY_PROD_DEVTOOLS__)
      try {
        cl(g_()), r || (T.fallbackContext = n ? a_() : void 0), (se = k(T))
      } finally {
        cl(null), r || (T.fallbackContext = void 0)
      }
    else se = k(T)
    if (Ie(se) && se === Qr) {
      const [be, qe] = R()
      return n && g ? q(n) : te(be)
    } else {
      if (ce(se)) return se
      throw Pe(Le.UNEXPECTED_RETURN_TYPE)
    }
  }
  function re(...k) {
    return ee(
      (R) => Reflect.apply(pl, null, [R, ...k]),
      () => Ks(...k),
      'translate',
      (R) => Reflect.apply(R.t, R, [...k]),
      (R) => R,
      (R) => B(R)
    )
  }
  function Me(...k) {
    const [R, Y, q] = k
    if (q && !he(q)) throw Pe(Le.INVALID_ARGUMENT)
    return re(R, Y, Ne({ resolvedMessage: !0 }, q || {}))
  }
  function je(...k) {
    return ee(
      (R) => Reflect.apply(ml, null, [R, ...k]),
      () => Ys(...k),
      'datetime format',
      (R) => Reflect.apply(R.d, R, [...k]),
      () => ll,
      (R) => B(R)
    )
  }
  function xe(...k) {
    return ee(
      (R) => Reflect.apply(_l, null, [R, ...k]),
      () => Gs(...k),
      'number format',
      (R) => Reflect.apply(R.n, R, [...k]),
      () => ll,
      (R) => B(R)
    )
  }
  function Te(k) {
    return k.map((R) => (B(R) || Ie(R) || oe(R) ? bl(String(R)) : R))
  }
  const Ge = { normalize: Te, interpolate: (k) => k, type: 'vnode' }
  function ut(...k) {
    return ee(
      (R) => {
        let Y
        const q = R
        try {
          ;(q.processor = Ge), (Y = Reflect.apply(pl, null, [q, ...k]))
        } finally {
          q.processor = null
        }
        return Y
      },
      () => Ks(...k),
      'translate',
      (R) => R[Xs](...k),
      (R) => [bl(R)],
      (R) => de(R)
    )
  }
  function ye(...k) {
    return ee(
      (R) => Reflect.apply(_l, null, [R, ...k]),
      () => Gs(...k),
      'number format',
      (R) => R[Js](...k),
      () => [],
      (R) => B(R) || de(R)
    )
  }
  function S(...k) {
    return ee(
      (R) => Reflect.apply(ml, null, [R, ...k]),
      () => Ys(...k),
      'datetime format',
      (R) => R[qs](...k),
      () => [],
      (R) => B(R) || de(R)
    )
  }
  function j(k) {
    ;(_ = k), (T.pluralRules = _)
  }
  function H(k, R) {
    const Y = B(R) ? R : o.value,
      q = b(Y)
    return T.messageResolver(q, k) !== null
  }
  function K(k) {
    let R = null
    const Y = kc(T, a.value, o.value)
    for (let q = 0; q < Y.length; q++) {
      const te = i.value[Y[q]] || {},
        ce = T.messageResolver(te, k)
      if (ce != null) {
        R = ce
        break
      }
    }
    return R
  }
  function ne(k) {
    const R = K(k)
    return R ?? (n ? n.tm(k) || {} : {})
  }
  function b(k) {
    return i.value[k] || {}
  }
  function u(k, R) {
    ;(i.value[k] = R), (T.messages = i.value)
  }
  function f(k, R) {
    ;(i.value[k] = i.value[k] || {}), jn(R, i.value[k]), (T.messages = i.value)
  }
  function y(k) {
    return l.value[k] || {}
  }
  function L(k, R) {
    ;(l.value[k] = R), (T.datetimeFormats = l.value), gl(T, k, R)
  }
  function P(k, R) {
    ;(l.value[k] = Ne(l.value[k] || {}, R)),
      (T.datetimeFormats = l.value),
      gl(T, k, R)
  }
  function M(k) {
    return c.value[k] || {}
  }
  function x(k, R) {
    ;(c.value[k] = R), (T.numberFormats = c.value), yl(T, k, R)
  }
  function $(k, R) {
    ;(c.value[k] = Ne(c.value[k] || {}, R)),
      (T.numberFormats = c.value),
      yl(T, k, R)
  }
  El++,
    n &&
      Bs &&
      (Tt(n.locale, (k) => {
        s && ((o.value = k), (T.locale = k), Pn(T, o.value, a.value))
      }),
      Tt(n.fallbackLocale, (k) => {
        s && ((a.value = k), (T.fallbackLocale = k), Pn(T, o.value, a.value))
      }))
  const F = {
    id: El,
    locale: O,
    fallbackLocale: D,
    get inheritLocale() {
      return s
    },
    set inheritLocale(k) {
      ;(s = k),
        k &&
          n &&
          ((o.value = n.locale.value),
          (a.value = n.fallbackLocale.value),
          Pn(T, o.value, a.value))
    },
    get availableLocales() {
      return Object.keys(i.value).sort()
    },
    messages: W,
    get modifiers() {
      return C
    },
    get pluralRules() {
      return _ || {}
    },
    get isGlobal() {
      return r
    },
    get missingWarn() {
      return d
    },
    set missingWarn(k) {
      ;(d = k), (T.missingWarn = d)
    },
    get fallbackWarn() {
      return h
    },
    set fallbackWarn(k) {
      ;(h = k), (T.fallbackWarn = h)
    },
    get fallbackRoot() {
      return g
    },
    set fallbackRoot(k) {
      g = k
    },
    get fallbackFormat() {
      return v
    },
    set fallbackFormat(k) {
      ;(v = k), (T.fallbackFormat = v)
    },
    get warnHtmlMessage() {
      return p
    },
    set warnHtmlMessage(k) {
      ;(p = k), (T.warnHtmlMessage = k)
    },
    get escapeParameter() {
      return m
    },
    set escapeParameter(k) {
      ;(m = k), (T.escapeParameter = k)
    },
    t: re,
    getLocaleMessage: b,
    setLocaleMessage: u,
    mergeLocaleMessage: f,
    getPostTranslationHandler: X,
    setPostTranslationHandler: V,
    getMissingHandler: fe,
    setMissingHandler: Q,
    [$c]: j,
  }
  return (
    (F.datetimeFormats = G),
    (F.numberFormats = U),
    (F.rt = Me),
    (F.te = H),
    (F.tm = ne),
    (F.d = je),
    (F.n = xe),
    (F.getDateTimeFormat = y),
    (F.setDateTimeFormat = L),
    (F.mergeDateTimeFormat = P),
    (F.getNumberFormat = M),
    (F.setNumberFormat = x),
    (F.mergeNumberFormat = $),
    (F[Hc] = e.__injectWithOption),
    (F[Xs] = ut),
    (F[qs] = S),
    (F[Js] = ye),
    F
  )
}
function __(e) {
  const t = B(e.locale) ? e.locale : rr,
    n =
      B(e.fallbackLocale) ||
      de(e.fallbackLocale) ||
      z(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : t,
    r = Ee(e.missing) ? e.missing : void 0,
    s =
      oe(e.silentTranslationWarn) || Ht(e.silentTranslationWarn)
        ? !e.silentTranslationWarn
        : !0,
    o =
      oe(e.silentFallbackWarn) || Ht(e.silentFallbackWarn)
        ? !e.silentFallbackWarn
        : !0,
    a = oe(e.fallbackRoot) ? e.fallbackRoot : !0,
    i = !!e.formatFallbackMessages,
    l = z(e.modifiers) ? e.modifiers : {},
    c = e.pluralizationRules,
    d = Ee(e.postTranslation) ? e.postTranslation : void 0,
    h = B(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== 'off' : !0,
    g = !!e.escapeParameterHtml,
    v = oe(e.sync) ? e.sync : !0
  let E = e.messages
  if (z(e.sharedMessages)) {
    const T = e.sharedMessages
    E = Object.keys(T).reduce((N, O) => {
      const D = N[O] || (N[O] = {})
      return Ne(D, T[O]), N
    }, E || {})
  }
  const { __i18n: w, __root: I, __injectWithOption: p } = e,
    m = e.datetimeFormats,
    C = e.numberFormats,
    _ = e.flatJson
  return {
    locale: t,
    fallbackLocale: n,
    messages: E,
    flatJson: _,
    datetimeFormats: m,
    numberFormats: C,
    missing: r,
    missingWarn: s,
    fallbackWarn: o,
    fallbackRoot: a,
    fallbackFormat: i,
    modifiers: l,
    pluralRules: c,
    postTranslation: d,
    warnHtmlMessage: h,
    escapeParameter: g,
    messageResolver: e.messageResolver,
    inheritLocale: v,
    __i18n: w,
    __root: I,
    __injectWithOption: p,
  }
}
function Zs(e = {}, t) {
  {
    const n = Mo(__(e)),
      r = {
        id: n.id,
        get locale() {
          return n.locale.value
        },
        set locale(s) {
          n.locale.value = s
        },
        get fallbackLocale() {
          return n.fallbackLocale.value
        },
        set fallbackLocale(s) {
          n.fallbackLocale.value = s
        },
        get messages() {
          return n.messages.value
        },
        get datetimeFormats() {
          return n.datetimeFormats.value
        },
        get numberFormats() {
          return n.numberFormats.value
        },
        get availableLocales() {
          return n.availableLocales
        },
        get formatter() {
          return {
            interpolate() {
              return []
            },
          }
        },
        set formatter(s) {},
        get missing() {
          return n.getMissingHandler()
        },
        set missing(s) {
          n.setMissingHandler(s)
        },
        get silentTranslationWarn() {
          return oe(n.missingWarn) ? !n.missingWarn : n.missingWarn
        },
        set silentTranslationWarn(s) {
          n.missingWarn = oe(s) ? !s : s
        },
        get silentFallbackWarn() {
          return oe(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
        },
        set silentFallbackWarn(s) {
          n.fallbackWarn = oe(s) ? !s : s
        },
        get modifiers() {
          return n.modifiers
        },
        get formatFallbackMessages() {
          return n.fallbackFormat
        },
        set formatFallbackMessages(s) {
          n.fallbackFormat = s
        },
        get postTranslation() {
          return n.getPostTranslationHandler()
        },
        set postTranslation(s) {
          n.setPostTranslationHandler(s)
        },
        get sync() {
          return n.inheritLocale
        },
        set sync(s) {
          n.inheritLocale = s
        },
        get warnHtmlInMessage() {
          return n.warnHtmlMessage ? 'warn' : 'off'
        },
        set warnHtmlInMessage(s) {
          n.warnHtmlMessage = s !== 'off'
        },
        get escapeParameterHtml() {
          return n.escapeParameter
        },
        set escapeParameterHtml(s) {
          n.escapeParameter = s
        },
        get preserveDirectiveContent() {
          return !0
        },
        set preserveDirectiveContent(s) {},
        get pluralizationRules() {
          return n.pluralRules || {}
        },
        __composer: n,
        t(...s) {
          const [o, a, i] = s,
            l = {}
          let c = null,
            d = null
          if (!B(o)) throw Pe(Le.INVALID_ARGUMENT)
          const h = o
          return (
            B(a) ? (l.locale = a) : de(a) ? (c = a) : z(a) && (d = a),
            de(i) ? (c = i) : z(i) && (d = i),
            Reflect.apply(n.t, n, [h, c || d || {}, l])
          )
        },
        rt(...s) {
          return Reflect.apply(n.rt, n, [...s])
        },
        tc(...s) {
          const [o, a, i] = s,
            l = { plural: 1 }
          let c = null,
            d = null
          if (!B(o)) throw Pe(Le.INVALID_ARGUMENT)
          const h = o
          return (
            B(a)
              ? (l.locale = a)
              : Ie(a)
              ? (l.plural = a)
              : de(a)
              ? (c = a)
              : z(a) && (d = a),
            B(i) ? (l.locale = i) : de(i) ? (c = i) : z(i) && (d = i),
            Reflect.apply(n.t, n, [h, c || d || {}, l])
          )
        },
        te(s, o) {
          return n.te(s, o)
        },
        tm(s) {
          return n.tm(s)
        },
        getLocaleMessage(s) {
          return n.getLocaleMessage(s)
        },
        setLocaleMessage(s, o) {
          n.setLocaleMessage(s, o)
        },
        mergeLocaleMessage(s, o) {
          n.mergeLocaleMessage(s, o)
        },
        d(...s) {
          return Reflect.apply(n.d, n, [...s])
        },
        getDateTimeFormat(s) {
          return n.getDateTimeFormat(s)
        },
        setDateTimeFormat(s, o) {
          n.setDateTimeFormat(s, o)
        },
        mergeDateTimeFormat(s, o) {
          n.mergeDateTimeFormat(s, o)
        },
        n(...s) {
          return Reflect.apply(n.n, n, [...s])
        },
        getNumberFormat(s) {
          return n.getNumberFormat(s)
        },
        setNumberFormat(s, o) {
          n.setNumberFormat(s, o)
        },
        mergeNumberFormat(s, o) {
          n.mergeNumberFormat(s, o)
        },
        getChoiceIndex(s, o) {
          return -1
        },
        __onComponentInstanceCreated(s) {
          const { componentInstanceCreatedListener: o } = e
          o && o(s, r)
        },
      }
    return r
  }
}
const xo = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === 'parent' || e === 'global',
    default: 'parent',
  },
  i18n: { type: Object },
}
function y_({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (r, s) => (r = [...r, ...(de(s.children) ? s.children : [s])]),
        []
      )
    : t.reduce((n, r) => {
        const s = e[r]
        return s && (n[r] = s()), n
      }, {})
}
function jc(e) {
  return Ue
}
const Cl = {
  name: 'i18n-t',
  props: Ne(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => Ie(e) || !isNaN(e) },
    },
    xo
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      s = e.i18n || Do({ useScope: e.scope, __useComponent: !0 })
    return () => {
      const o = Object.keys(n).filter((h) => h !== '_'),
        a = {}
      e.locale && (a.locale = e.locale),
        e.plural !== void 0 && (a.plural = B(e.plural) ? +e.plural : e.plural)
      const i = y_(t, o),
        l = s[Xs](e.keypath, i, a),
        c = Ne({}, r),
        d = B(e.tag) || he(e.tag) ? e.tag : jc()
      return lt(d, c, l)
    }
  },
}
function b_(e) {
  return de(e) && !B(e[0])
}
function Bc(e, t, n, r) {
  const { slots: s, attrs: o } = t
  return () => {
    const a = { part: !0 }
    let i = {}
    e.locale && (a.locale = e.locale),
      B(e.format)
        ? (a.key = e.format)
        : he(e.format) &&
          (B(e.format.key) && (a.key = e.format.key),
          (i = Object.keys(e.format).reduce(
            (g, v) => (n.includes(v) ? Ne({}, g, { [v]: e.format[v] }) : g),
            {}
          )))
    const l = r(e.value, a, i)
    let c = [a.key]
    de(l)
      ? (c = l.map((g, v) => {
          const E = s[g.type],
            w = E ? E({ [g.type]: g.value, index: v, parts: l }) : [g.value]
          return b_(w) && (w[0].key = `${g.type}-${v}`), w
        }))
      : B(l) && (c = [l])
    const d = Ne({}, o),
      h = B(e.tag) || he(e.tag) ? e.tag : jc()
    return lt(h, d, c)
  }
}
const wl = {
    name: 'i18n-n',
    props: Ne(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      xo
    ),
    setup(e, t) {
      const n = e.i18n || Do({ useScope: 'parent', __useComponent: !0 })
      return Bc(e, t, xc, (...r) => n[Js](...r))
    },
  },
  Ll = {
    name: 'i18n-d',
    props: Ne(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      xo
    ),
    setup(e, t) {
      const n = e.i18n || Do({ useScope: 'parent', __useComponent: !0 })
      return Bc(e, t, Mc, (...r) => n[qs](...r))
    },
  }
function v_(e, t) {
  const n = e
  if (e.mode === 'composition') return n.__getInstance(t) || e.global
  {
    const r = n.__getInstance(t)
    return r != null ? r.__composer : e.global.__composer
  }
}
function E_(e) {
  const t = (a) => {
    const { instance: i, modifiers: l, value: c } = a
    if (!i || !i.$) throw Pe(Le.UNEXPECTED_ERROR)
    const d = v_(e, i.$),
      h = kl(c)
    return [Reflect.apply(d.t, d, [...Rl(h)]), d]
  }
  return {
    created: (a, i) => {
      const [l, c] = t(i)
      Bs &&
        e.global === c &&
        (a.__i18nWatcher = Tt(c.locale, () => {
          i.instance && i.instance.$forceUpdate()
        })),
        (a.__composer = c),
        (a.textContent = l)
    },
    unmounted: (a) => {
      Bs &&
        a.__i18nWatcher &&
        (a.__i18nWatcher(), (a.__i18nWatcher = void 0), delete a.__i18nWatcher),
        a.__composer && ((a.__composer = void 0), delete a.__composer)
    },
    beforeUpdate: (a, { value: i }) => {
      if (a.__composer) {
        const l = a.__composer,
          c = kl(i)
        a.textContent = Reflect.apply(l.t, l, [...Rl(c)])
      }
    },
    getSSRProps: (a) => {
      const [i] = t(a)
      return { textContent: i }
    },
  }
}
function kl(e) {
  if (B(e)) return { path: e }
  if (z(e)) {
    if (!('path' in e)) throw Pe(Le.REQUIRED_VALUE, 'path')
    return e
  } else throw Pe(Le.INVALID_VALUE)
}
function Rl(e) {
  const { path: t, locale: n, args: r, choice: s, plural: o } = e,
    a = {},
    i = r || {}
  return (
    B(n) && (a.locale = n),
    Ie(s) && (a.plural = s),
    Ie(o) && (a.plural = o),
    [t, i, a]
  )
}
function T_(e, t, ...n) {
  const r = z(n[0]) ? n[0] : {},
    s = !!r.useI18nComponentName
  ;(oe(r.globalInstall) ? r.globalInstall : !0) &&
    (e.component(s ? 'i18n' : Cl.name, Cl),
    e.component(wl.name, wl),
    e.component(Ll.name, Ll)),
    e.directive('t', E_(t))
}
function C_(e, t, n) {
  return {
    beforeCreate() {
      const r = tt()
      if (!r) throw Pe(Le.UNEXPECTED_ERROR)
      const s = this.$options
      if (s.i18n) {
        const o = s.i18n
        s.__i18n && (o.__i18n = s.__i18n),
          (o.__root = t),
          this === this.$root
            ? (this.$i18n = Il(e, o))
            : ((o.__injectWithOption = !0), (this.$i18n = Zs(o)))
      } else
        s.__i18n
          ? this === this.$root
            ? (this.$i18n = Il(e, s))
            : (this.$i18n = Zs({
                __i18n: s.__i18n,
                __injectWithOption: !0,
                __root: t,
              }))
          : (this.$i18n = e)
      s.__i18nGlobal && Wc(t, s, s),
        e.__onComponentInstanceCreated(this.$i18n),
        n.__setInstance(r, this.$i18n),
        (this.$t = (...o) => this.$i18n.t(...o)),
        (this.$rt = (...o) => this.$i18n.rt(...o)),
        (this.$tc = (...o) => this.$i18n.tc(...o)),
        (this.$te = (o, a) => this.$i18n.te(o, a)),
        (this.$d = (...o) => this.$i18n.d(...o)),
        (this.$n = (...o) => this.$i18n.n(...o)),
        (this.$tm = (o) => this.$i18n.tm(o))
    },
    mounted() {},
    unmounted() {
      const r = tt()
      if (!r) throw Pe(Le.UNEXPECTED_ERROR)
      delete this.$t,
        delete this.$rt,
        delete this.$tc,
        delete this.$te,
        delete this.$d,
        delete this.$n,
        delete this.$tm,
        n.__deleteInstance(r),
        delete this.$i18n
    },
  }
}
function Il(e, t) {
  ;(e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[$c](t.pluralizationRules || e.pluralizationRules)
  const n = Zr(e.locale, { messages: t.messages, __i18n: t.__i18n })
  return (
    Object.keys(n).forEach((r) => e.mergeLocaleMessage(r, n[r])),
    t.datetimeFormats &&
      Object.keys(t.datetimeFormats).forEach((r) =>
        e.mergeDateTimeFormat(r, t.datetimeFormats[r])
      ),
    t.numberFormats &&
      Object.keys(t.numberFormats).forEach((r) =>
        e.mergeNumberFormat(r, t.numberFormats[r])
      ),
    e
  )
}
const w_ = Ut('global-vue-i18n')
function L_(e = {}, t) {
  const n =
      __VUE_I18N_LEGACY_API__ && oe(e.legacy)
        ? e.legacy
        : __VUE_I18N_LEGACY_API__,
    r = oe(e.globalInjection) ? e.globalInjection : !0,
    s = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0,
    o = new Map(),
    [a, i] = k_(e, n),
    l = Ut('')
  function c(g) {
    return o.get(g) || null
  }
  function d(g, v) {
    o.set(g, v)
  }
  function h(g) {
    o.delete(g)
  }
  {
    const g = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? 'legacy' : 'composition'
      },
      get allowComposition() {
        return s
      },
      async install(v, ...E) {
        ;(v.__VUE_I18N_SYMBOL__ = l),
          v.provide(v.__VUE_I18N_SYMBOL__, g),
          !n && r && M_(v, g.global),
          __VUE_I18N_FULL_INSTALL__ && T_(v, g, ...E),
          __VUE_I18N_LEGACY_API__ && n && v.mixin(C_(i, i.__composer, g))
        const w = v.unmount
        v.unmount = () => {
          g.dispose(), w()
        }
      },
      get global() {
        return i
      },
      dispose() {
        a.stop()
      },
      __instances: o,
      __getInstance: c,
      __setInstance: d,
      __deleteInstance: h,
    }
    return g
  }
}
function Do(e = {}) {
  const t = tt()
  if (t == null) throw Pe(Le.MUST_BE_CALL_SETUP_TOP)
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw Pe(Le.NOT_INSLALLED)
  const n = R_(t),
    r = P_(n),
    s = Uc(t),
    o = I_(e, s)
  if (__VUE_I18N_LEGACY_API__ && n.mode === 'legacy' && !e.__useComponent) {
    if (!n.allowComposition) throw Pe(Le.NOT_AVAILABLE_IN_LEGACY_MODE)
    return O_(t, o, r, e)
  }
  if (o === 'global') return Wc(r, e, s), r
  if (o === 'parent') {
    let l = A_(n, t, e.__useComponent)
    return l == null && (l = r), l
  }
  const a = n
  let i = a.__getInstance(t)
  if (i == null) {
    const l = Ne({}, e)
    '__i18n' in s && (l.__i18n = s.__i18n),
      r && (l.__root = r),
      (i = Mo(l)),
      N_(a, t),
      a.__setInstance(t, i)
  }
  return i
}
function k_(e, t, n) {
  const r = su()
  {
    const s =
      __VUE_I18N_LEGACY_API__ && t ? r.run(() => Zs(e)) : r.run(() => Mo(e))
    if (s == null) throw Pe(Le.UNEXPECTED_ERROR)
    return [r, s]
  }
}
function R_(e) {
  {
    const t = et(e.isCE ? w_ : e.appContext.app.__VUE_I18N_SYMBOL__)
    if (!t)
      throw Pe(e.isCE ? Le.NOT_INSLALLED_WITH_PROVIDE : Le.UNEXPECTED_ERROR)
    return t
  }
}
function I_(e, t) {
  return qr(e)
    ? '__i18n' in t
      ? 'local'
      : 'global'
    : e.useScope
    ? e.useScope
    : 'local'
}
function P_(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer
}
function A_(e, t, n = !1) {
  let r = null
  const s = t.root
  let o = t.parent
  for (; o != null; ) {
    const a = e
    if (e.mode === 'composition') r = a.__getInstance(o)
    else if (__VUE_I18N_LEGACY_API__) {
      const i = a.__getInstance(o)
      i != null && ((r = i.__composer), n && r && !r[Hc] && (r = null))
    }
    if (r != null || s === o) break
    o = o.parent
  }
  return r
}
function N_(e, t, n) {
  Br(() => {}, t),
    _o(() => {
      e.__deleteInstance(t)
    }, t)
}
function O_(e, t, n, r = {}) {
  const s = t === 'local',
    o = dn(null)
  if (s && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Pe(Le.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION)
  const a = oe(r.inheritLocale) ? r.inheritLocale : !0,
    i = Re(s && a ? n.locale.value : B(r.locale) ? r.locale : rr),
    l = Re(
      s && a
        ? n.fallbackLocale.value
        : B(r.fallbackLocale) ||
          de(r.fallbackLocale) ||
          z(r.fallbackLocale) ||
          r.fallbackLocale === !1
        ? r.fallbackLocale
        : i.value
    ),
    c = Re(Zr(i.value, r)),
    d = Re(z(r.datetimeFormats) ? r.datetimeFormats : { [i.value]: {} }),
    h = Re(z(r.numberFormats) ? r.numberFormats : { [i.value]: {} }),
    g = s
      ? n.missingWarn
      : oe(r.missingWarn) || Ht(r.missingWarn)
      ? r.missingWarn
      : !0,
    v = s
      ? n.fallbackWarn
      : oe(r.fallbackWarn) || Ht(r.fallbackWarn)
      ? r.fallbackWarn
      : !0,
    E = s ? n.fallbackRoot : oe(r.fallbackRoot) ? r.fallbackRoot : !0,
    w = !!r.fallbackFormat,
    I = Ee(r.missing) ? r.missing : null,
    p = Ee(r.postTranslation) ? r.postTranslation : null,
    m = s ? n.warnHtmlMessage : oe(r.warnHtmlMessage) ? r.warnHtmlMessage : !0,
    C = !!r.escapeParameter,
    _ = s ? n.modifiers : z(r.modifiers) ? r.modifiers : {},
    T = r.pluralRules || (s && n.pluralRules)
  function A() {
    return [i.value, l.value, c.value, d.value, h.value]
  }
  const N = ge({
      get: () => (o.value ? o.value.locale.value : i.value),
      set: (f) => {
        o.value && (o.value.locale.value = f), (i.value = f)
      },
    }),
    O = ge({
      get: () => (o.value ? o.value.fallbackLocale.value : l.value),
      set: (f) => {
        o.value && (o.value.fallbackLocale.value = f), (l.value = f)
      },
    }),
    D = ge(() => (o.value ? o.value.messages.value : c.value)),
    W = ge(() => d.value),
    G = ge(() => h.value)
  function U() {
    return o.value ? o.value.getPostTranslationHandler() : p
  }
  function X(f) {
    o.value && o.value.setPostTranslationHandler(f)
  }
  function V() {
    return o.value ? o.value.getMissingHandler() : I
  }
  function fe(f) {
    o.value && o.value.setMissingHandler(f)
  }
  function Q(f) {
    return A(), f()
  }
  function ee(...f) {
    return o.value
      ? Q(() => Reflect.apply(o.value.t, null, [...f]))
      : Q(() => '')
  }
  function re(...f) {
    return o.value ? Reflect.apply(o.value.rt, null, [...f]) : ''
  }
  function Me(...f) {
    return o.value
      ? Q(() => Reflect.apply(o.value.d, null, [...f]))
      : Q(() => '')
  }
  function je(...f) {
    return o.value
      ? Q(() => Reflect.apply(o.value.n, null, [...f]))
      : Q(() => '')
  }
  function xe(f) {
    return o.value ? o.value.tm(f) : {}
  }
  function Te(f, y) {
    return o.value ? o.value.te(f, y) : !1
  }
  function nt(f) {
    return o.value ? o.value.getLocaleMessage(f) : {}
  }
  function Ge(f, y) {
    o.value && (o.value.setLocaleMessage(f, y), (c.value[f] = y))
  }
  function ut(f, y) {
    o.value && o.value.mergeLocaleMessage(f, y)
  }
  function ye(f) {
    return o.value ? o.value.getDateTimeFormat(f) : {}
  }
  function S(f, y) {
    o.value && (o.value.setDateTimeFormat(f, y), (d.value[f] = y))
  }
  function j(f, y) {
    o.value && o.value.mergeDateTimeFormat(f, y)
  }
  function H(f) {
    return o.value ? o.value.getNumberFormat(f) : {}
  }
  function K(f, y) {
    o.value && (o.value.setNumberFormat(f, y), (h.value[f] = y))
  }
  function ne(f, y) {
    o.value && o.value.mergeNumberFormat(f, y)
  }
  const b = {
    get id() {
      return o.value ? o.value.id : -1
    },
    locale: N,
    fallbackLocale: O,
    messages: D,
    datetimeFormats: W,
    numberFormats: G,
    get inheritLocale() {
      return o.value ? o.value.inheritLocale : a
    },
    set inheritLocale(f) {
      o.value && (o.value.inheritLocale = f)
    },
    get availableLocales() {
      return o.value ? o.value.availableLocales : Object.keys(c.value)
    },
    get modifiers() {
      return o.value ? o.value.modifiers : _
    },
    get pluralRules() {
      return o.value ? o.value.pluralRules : T
    },
    get isGlobal() {
      return o.value ? o.value.isGlobal : !1
    },
    get missingWarn() {
      return o.value ? o.value.missingWarn : g
    },
    set missingWarn(f) {
      o.value && (o.value.missingWarn = f)
    },
    get fallbackWarn() {
      return o.value ? o.value.fallbackWarn : v
    },
    set fallbackWarn(f) {
      o.value && (o.value.missingWarn = f)
    },
    get fallbackRoot() {
      return o.value ? o.value.fallbackRoot : E
    },
    set fallbackRoot(f) {
      o.value && (o.value.fallbackRoot = f)
    },
    get fallbackFormat() {
      return o.value ? o.value.fallbackFormat : w
    },
    set fallbackFormat(f) {
      o.value && (o.value.fallbackFormat = f)
    },
    get warnHtmlMessage() {
      return o.value ? o.value.warnHtmlMessage : m
    },
    set warnHtmlMessage(f) {
      o.value && (o.value.warnHtmlMessage = f)
    },
    get escapeParameter() {
      return o.value ? o.value.escapeParameter : C
    },
    set escapeParameter(f) {
      o.value && (o.value.escapeParameter = f)
    },
    t: ee,
    getPostTranslationHandler: U,
    setPostTranslationHandler: X,
    getMissingHandler: V,
    setMissingHandler: fe,
    rt: re,
    d: Me,
    n: je,
    tm: xe,
    te: Te,
    getLocaleMessage: nt,
    setLocaleMessage: Ge,
    mergeLocaleMessage: ut,
    getDateTimeFormat: ye,
    setDateTimeFormat: S,
    mergeDateTimeFormat: j,
    getNumberFormat: H,
    setNumberFormat: K,
    mergeNumberFormat: ne,
  }
  function u(f) {
    ;(f.locale.value = i.value),
      (f.fallbackLocale.value = l.value),
      Object.keys(c.value).forEach((y) => {
        f.mergeLocaleMessage(y, c.value[y])
      }),
      Object.keys(d.value).forEach((y) => {
        f.mergeDateTimeFormat(y, d.value[y])
      }),
      Object.keys(h.value).forEach((y) => {
        f.mergeNumberFormat(y, h.value[y])
      }),
      (f.escapeParameter = C),
      (f.fallbackFormat = w),
      (f.fallbackRoot = E),
      (f.fallbackWarn = v),
      (f.missingWarn = g),
      (f.warnHtmlMessage = m)
  }
  return (
    bi(() => {
      if (e.proxy == null || e.proxy.$i18n == null)
        throw Pe(Le.NOT_AVAILABLE_COMPOSITION_IN_LEGACY)
      const f = (o.value = e.proxy.$i18n.__composer)
      t === 'global'
        ? ((i.value = f.locale.value),
          (l.value = f.fallbackLocale.value),
          (c.value = f.messages.value),
          (d.value = f.datetimeFormats.value),
          (h.value = f.numberFormats.value))
        : s && u(f)
    }),
    b
  )
}
const S_ = ['locale', 'fallbackLocale', 'availableLocales'],
  F_ = ['t', 'rt', 'd', 'n', 'tm']
function M_(e, t) {
  const n = Object.create(null)
  S_.forEach((r) => {
    const s = Object.getOwnPropertyDescriptor(t, r)
    if (!s) throw Pe(Le.UNEXPECTED_ERROR)
    const o = we(s.value)
      ? {
          get() {
            return s.value.value
          },
          set(a) {
            s.value.value = a
          },
        }
      : {
          get() {
            return s.get && s.get()
          },
        }
    Object.defineProperty(n, r, o)
  }),
    (e.config.globalProperties.$i18n = n),
    F_.forEach((r) => {
      const s = Object.getOwnPropertyDescriptor(t, r)
      if (!s || !s.value) throw Pe(Le.UNEXPECTED_ERROR)
      Object.defineProperty(e.config.globalProperties, `$${r}`, s)
    })
}
n_(c_)
r_($g)
s_(kc)
m_()
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Wn()
  ;(e.__INTLIFY__ = !0), Gg(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const x_ = {
    description:
      'myWitWallet allows you to send and receive Wit immediately. Bye bye synchronization!',
    title: 'myWitWallet',
  },
  D_ =
    'myWitWallet allows you to send and receive Wit immediately. Bye bye synchronization!',
  $_ = { my_wit_wallet: 'myWitWallet' },
  H_ = 'Get myWitWallet,{0} your Witnet light wallet',
  U_ = 'Download myWitWallet for {platform}',
  W_ = 'Check out the source code on {github}',
  j_ = {
    head: x_,
    description: D_,
    logo: $_,
    title: H_,
    download: U_,
    source_code: W_,
  },
  B_ = kt(({ vueApp: e }) => {
    const t = L_({
      legacy: !1,
      globalInjection: !0,
      locale: 'en',
      messages: { en: j_ },
    })
    e.use(t)
  }),
  V_ = [Wp, jp, Bp, Zm, zm, tg, ng, B_],
  K_ = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (n) => {
        var r
        return (
          ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ''
        )
      }),
  Y_ = (e, t) => {
    const n = e.route.matched.find((s) => {
        var o
        return (
          ((o = s.components) == null ? void 0 : o.default) === e.Component.type
        )
      }),
      r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && K_(e.route, n))
    return typeof r == 'function' ? r(e.route) : r
  },
  G_ = (e, t) => ({ default: () => (e ? lt(uf, e === !0 ? {} : e, t) : t) }),
  X_ = (e, t, n) => (
    (t = t === !0 ? {} : t),
    {
      default: () => {
        var r
        return t ? lt(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
      },
    }
  ),
  q_ = zn({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t }) {
      const n = Oe()
      return () =>
        lt(
          Cc,
          { name: e.name, route: e.route, ...t },
          {
            default: (r) => {
              if (!r.Component) return
              const s = Y_(r, e.pageKey),
                o = n.deferHydration(),
                a = !!(e.transition ?? r.route.meta.pageTransition ?? Ms),
                i =
                  a &&
                  Q_(
                    [
                      e.transition,
                      r.route.meta.pageTransition,
                      Ms,
                      {
                        onAfterLeave: () => {
                          n.callHook('page:transition:finish', r.Component)
                        },
                      },
                    ].filter(Boolean)
                  )
              return X_(
                wo,
                a && i,
                G_(
                  e.keepalive ?? r.route.meta.keepalive ?? wp,
                  lt(
                    ui,
                    {
                      suspensible: !0,
                      onPending: () => n.callHook('page:start', r.Component),
                      onResolve: () => {
                        Cn(() =>
                          n.callHook('page:finish', r.Component).finally(o)
                        )
                      },
                    },
                    {
                      default: () =>
                        lt(Z_, {
                          key: s,
                          routeProps: r,
                          pageKey: s,
                          hasTransition: a,
                        }),
                    }
                  )
                )
              ).default()
            },
          }
        )
    },
  })
function J_(e) {
  return Array.isArray(e) ? e : e ? [e] : []
}
function Q_(e) {
  const t = e.map((n) => ({ ...n, onAfterLeave: J_(n.onAfterLeave) }))
  return Op(...t)
}
const Z_ = zn({
    name: 'RouteProvider',
    props: ['routeProps', 'pageKey', 'hasTransition'],
    setup(e) {
      const t = e.pageKey,
        n = e.routeProps.route,
        r = {}
      for (const s in e.routeProps.route)
        r[s] = ge(() => (t === e.pageKey ? e.routeProps.route[s] : n[s]))
      return fn('_route', it(r)), () => lt(e.routeProps.Component)
    },
  }),
  z_ = (e, t) => {
    const n = e.__vccOpts || e
    for (const [r, s] of t) n[r] = s
    return n
  },
  ey = {}
function ty(e, t) {
  const n = q_
  return Et(), Df('div', null, [_e(n)])
}
const ny = z_(ey, [['render', ty]]),
  Pl = {
    __name: 'nuxt-root',
    setup(e) {
      const t = lf(() =>
          ko(
            () => import('./error-component.4eca6932.js'),
            [],
            import.meta.url
          ).then((l) => l.default || l)
        ),
        n = () => null,
        r = Oe(),
        s = r.deferHydration(),
        o = !1
      fn('_route', xp()),
        r.hooks.callHookWith((l) => l.map((c) => c()), 'vue:setup')
      const a = Gr()
      Ei((l, c, d) => {
        if (
          (r.hooks
            .callHook('vue:error', l, c, d)
            .catch((h) => console.error('[nuxt] Error in `vue:error` hook', h)),
          Up(l) && (l.fatal || l.unhandled))
        )
          return r.runWithContext(() => nn(l)), !1
      })
      const { islandContext: i } = !1
      return (l, c) => (
        Et(),
        Yt(
          ui,
          { onResolve: Ae(s) },
          {
            default: ii(() => [
              Ae(a)
                ? (Et(),
                  Yt(Ae(t), { key: 0, error: Ae(a) }, null, 8, ['error']))
                : Ae(i)
                ? (Et(),
                  Yt(Ae(n), { key: 1, context: Ae(i) }, null, 8, ['context']))
                : Ae(o)
                ? (Et(), Yt(gf(Ae(o)), { key: 2 }))
                : (Et(), Yt(Ae(ny), { key: 3 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      )
    },
  }
globalThis.$fetch || (globalThis.$fetch = lh.create({ baseURL: ch() }))
let Al
const ry = Lh(V_)
{
  let e
  ;(Al = async function () {
    var o, a
    if (e) return e
    const r = !!(
        ((o = window.__NUXT__) != null && o.serverRendered) ||
        ((a = document.getElementById('__NUXT_DATA__')) == null
          ? void 0
          : a.dataset.ssr) === 'true'
      )
        ? Ed(Pl)
        : vd(Pl),
      s = Th({ vueApp: r })
    try {
      await wh(s, ry)
    } catch (i) {
      await s.callHook('app:error', i), (s.payload.error = s.payload.error || i)
    }
    try {
      await s.hooks.callHook('app:created', r),
        await s.hooks.callHook('app:beforeMount', r),
        r.mount('#' + Lp),
        await s.hooks.callHook('app:mounted', r),
        await Cn()
    } catch (i) {
      await s.callHook('app:error', i), (s.payload.error = s.payload.error || i)
    }
    return r
  }),
    (e = Al().catch((t) => {
      console.error('Error while mounting app:', t)
    }))
}
export {
  it as A,
  ni as B,
  dy as C,
  cy as D,
  _e as E,
  Ue as F,
  oy as G,
  $i as H,
  z_ as I,
  Oe as J,
  wn as K,
  tr as L,
  Br as M,
  at as N,
  Vr as O,
  lt as P,
  Yr as Q,
  xd as R,
  Bd as S,
  Qt as T,
  Xi as U,
  my as V,
  py as W,
  ly as X,
  iy as Y,
  ko as _,
  Df as a,
  Di as b,
  Yt as c,
  lf as d,
  pe as e,
  Tt as f,
  Hf as g,
  ae as h,
  ve as i,
  et as j,
  ge as k,
  tt as l,
  zn as m,
  sy as n,
  Et as o,
  uy as p,
  Uf as q,
  Re as r,
  fy as s,
  ii as t,
  Ae as u,
  Dr as v,
  ay as w,
  gf as x,
  hy as y,
  fn as z,
}
