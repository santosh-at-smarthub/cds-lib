var Tv = Object.defineProperty;
var Mv = (e, n, t) => n in e ? Tv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Z = (e, n, t) => Mv(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as L, Fragment as Kn, jsxs as ce } from "react/jsx-runtime";
import * as T from "react";
import C, { useRef as H, useCallback as pe, useEffect as Ie, useState as ae, useMemo as U, useLayoutEffect as Gi, createContext as Ve, useContext as ve, forwardRef as Oa, Fragment as ze, isValidElement as Ov, cloneElement as iu, createElement as ou, useId as rt, useReducer as Wr, useSyncExternalStore as kv, createRef as St, Component as tt } from "react";
import * as xi from "react-dom";
import Rv, { createPortal as au, flushSync as nt, unstable_batchedUpdates as Av, findDOMNode as Pv } from "react-dom";
const ip = typeof document < "u" ? C.useLayoutEffect : () => {
};
function Fv(e) {
  const n = H(null);
  return ip(() => {
    n.current = e;
  }, [
    e
  ]), pe((...t) => {
    const r = n.current;
    return r == null ? void 0 : r(...t);
  }, []);
}
const $i = (e) => {
  var n;
  return (n = e == null ? void 0 : e.ownerDocument) !== null && n !== void 0 ? n : document;
}, jn = (e) => e && "window" in e && e.window === e ? e : $i(e).defaultView || window;
function op(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (n = 0; n < i; n++) e[n] && (t = op(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function it() {
  for (var e, n, t = 0, r = "", i = arguments.length; t < i; t++) (e = arguments[t]) && (n = op(e)) && (r && (r += " "), r += n);
  return r;
}
function Nv(e) {
  var n;
  return typeof window > "u" || window.navigator == null ? !1 : ((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function _v(e) {
  var n;
  return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function Lv() {
  return _v(/^Mac/i);
}
function Vv() {
  return Nv(/Android/i);
}
function Wv(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Vv() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Gv {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(n, t) {
    this.nativeEvent = t, this.target = t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget, this.bubbles = t.bubbles, this.cancelable = t.cancelable, this.defaultPrevented = t.defaultPrevented, this.eventPhase = t.eventPhase, this.isTrusted = t.isTrusted, this.timeStamp = t.timeStamp, this.type = n;
  }
}
function ap(e) {
  let n = H({
    isFocused: !1,
    observer: null
  });
  ip(() => {
    const r = n.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let t = Fv((r) => {
    e == null || e(r);
  });
  return pe((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      n.current.isFocused = !0;
      let i = r.target, o = (a) => {
        n.current.isFocused = !1, i.disabled && t(new Gv("blur", a)), n.current.observer && (n.current.observer.disconnect(), n.current.observer = null);
      };
      i.addEventListener("focusout", o, {
        once: !0
      }), n.current.observer = new MutationObserver(() => {
        if (n.current.isFocused && i.disabled) {
          var a;
          (a = n.current.observer) === null || a === void 0 || a.disconnect();
          let s = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
          }));
        }
      }), n.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    t
  ]);
}
function $v(e) {
  let { isDisabled: n, onFocus: t, onBlur: r, onFocusChange: i } = e;
  const o = pe((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), i && i(!1), !0;
  }, [
    r,
    i
  ]), a = ap(o), s = pe((l) => {
    const u = $i(l.target);
    l.target === l.currentTarget && u.activeElement === l.target && (t && t(l), i && i(!0), a(l));
  }, [
    i,
    t,
    a
  ]);
  return {
    focusProps: {
      onFocus: !n && (t || i || r) ? s : void 0,
      onBlur: !n && (r || i) ? o : void 0
    }
  };
}
let Hi = null, vl = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new Map(), ir = !1, bl = !1;
const Hv = {
  Tab: !0,
  Escape: !0
};
function su(e, n) {
  for (let t of vl) t(e, n);
}
function Bv(e) {
  return !(e.metaKey || !Lv() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Zo(e) {
  ir = !0, Bv(e) && (Hi = "keyboard", su("keyboard", e));
}
function Ot(e) {
  Hi = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (ir = !0, su("pointer", e));
}
function sp(e) {
  Wv(e) && (ir = !0, Hi = "virtual");
}
function lp(e) {
  e.target === window || e.target === document || (!ir && !bl && (Hi = "virtual", su("virtual", e)), ir = !1, bl = !1);
}
function up() {
  ir = !1, bl = !0;
}
function yl(e) {
  if (typeof window > "u" || hi.get(jn(e))) return;
  const n = jn(e), t = $i(e);
  let r = n.HTMLElement.prototype.focus;
  n.HTMLElement.prototype.focus = function() {
    ir = !0, r.apply(this, arguments);
  }, t.addEventListener("keydown", Zo, !0), t.addEventListener("keyup", Zo, !0), t.addEventListener("click", sp, !0), n.addEventListener("focus", lp, !0), n.addEventListener("blur", up, !1), typeof PointerEvent < "u" ? (t.addEventListener("pointerdown", Ot, !0), t.addEventListener("pointermove", Ot, !0), t.addEventListener("pointerup", Ot, !0)) : (t.addEventListener("mousedown", Ot, !0), t.addEventListener("mousemove", Ot, !0), t.addEventListener("mouseup", Ot, !0)), n.addEventListener("beforeunload", () => {
    cp(e);
  }, {
    once: !0
  }), hi.set(n, {
    focus: r
  });
}
const cp = (e, n) => {
  const t = jn(e), r = $i(e);
  n && r.removeEventListener("DOMContentLoaded", n), hi.has(t) && (t.HTMLElement.prototype.focus = hi.get(t).focus, r.removeEventListener("keydown", Zo, !0), r.removeEventListener("keyup", Zo, !0), r.removeEventListener("click", sp, !0), t.removeEventListener("focus", lp, !0), t.removeEventListener("blur", up, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Ot, !0), r.removeEventListener("pointermove", Ot, !0), r.removeEventListener("pointerup", Ot, !0)) : (r.removeEventListener("mousedown", Ot, !0), r.removeEventListener("mousemove", Ot, !0), r.removeEventListener("mouseup", Ot, !0)), hi.delete(t));
};
function Yv(e) {
  const n = $i(e);
  let t;
  return n.readyState !== "loading" ? yl(e) : (t = () => {
    yl(e);
  }, n.addEventListener("DOMContentLoaded", t)), () => cp(e, t);
}
typeof document < "u" && Yv();
function dp() {
  return Hi !== "pointer";
}
const Zv = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Xv(e, n, t) {
  var r;
  const i = typeof window < "u" ? jn(t == null ? void 0 : t.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? jn(t == null ? void 0 : t.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? jn(t == null ? void 0 : t.target).HTMLElement : HTMLElement, s = typeof window < "u" ? jn(t == null ? void 0 : t.target).KeyboardEvent : KeyboardEvent;
  return e = e || (t == null ? void 0 : t.target) instanceof i && !Zv.has(t == null || (r = t.target) === null || r === void 0 ? void 0 : r.type) || (t == null ? void 0 : t.target) instanceof o || (t == null ? void 0 : t.target) instanceof a && (t == null ? void 0 : t.target.isContentEditable), !(e && n === "keyboard" && t instanceof s && !Hv[t.key]);
}
function zv(e, n, t) {
  yl(), Ie(() => {
    let r = (i, o) => {
      Xv(!!(t != null && t.isTextInput), i, o) && e(dp());
    };
    return vl.add(r), () => {
      vl.delete(r);
    };
  }, n);
}
function jv(e) {
  let { isDisabled: n, onBlurWithin: t, onFocusWithin: r, onFocusWithinChange: i } = e, o = H({
    isFocusWithin: !1
  }), a = pe((u) => {
    o.current.isFocusWithin && !u.currentTarget.contains(u.relatedTarget) && (o.current.isFocusWithin = !1, t && t(u), i && i(!1));
  }, [
    t,
    i,
    o
  ]), s = ap(a), l = pe((u) => {
    !o.current.isFocusWithin && document.activeElement === u.target && (r && r(u), i && i(!0), o.current.isFocusWithin = !0, s(u));
  }, [
    r,
    i,
    s
  ]);
  return n ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: l,
      onBlur: a
    }
  };
}
let Xo = !1, xs = 0;
function wl() {
  Xo = !0, setTimeout(() => {
    Xo = !1;
  }, 50);
}
function Mc(e) {
  e.pointerType === "touch" && wl();
}
function Uv() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Mc) : document.addEventListener("touchend", wl), xs++, () => {
      xs--, !(xs > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Mc) : document.removeEventListener("touchend", wl));
    };
}
function Bi(e) {
  let { onHoverStart: n, onHoverChange: t, onHoverEnd: r, isDisabled: i } = e, [o, a] = ae(!1), s = H({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Ie(Uv, []);
  let { hoverProps: l, triggerHoverEnd: u } = U(() => {
    let c = (f, m) => {
      if (s.pointerType = m, i || m === "touch" || s.isHovered || !f.currentTarget.contains(f.target)) return;
      s.isHovered = !0;
      let h = f.currentTarget;
      s.target = h, n && n({
        type: "hoverstart",
        target: h,
        pointerType: m
      }), t && t(!0), a(!0);
    }, d = (f, m) => {
      if (s.pointerType = "", s.target = null, m === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let h = f.currentTarget;
      r && r({
        type: "hoverend",
        target: h,
        pointerType: m
      }), t && t(!1), a(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (f) => {
      Xo && f.pointerType === "mouse" || c(f, f.pointerType);
    }, p.onPointerLeave = (f) => {
      !i && f.currentTarget.contains(f.target) && d(f, f.pointerType);
    }) : (p.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (f) => {
      !s.ignoreEmulatedMouseEvents && !Xo && c(f, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (f) => {
      !i && f.currentTarget.contains(f.target) && d(f, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: d
    };
  }, [
    n,
    t,
    r,
    i,
    s
  ]);
  return Ie(() => {
    i && u({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    i
  ]), {
    hoverProps: l,
    isHovered: o
  };
}
function Gr(e = {}) {
  let { autoFocus: n = !1, isTextInput: t, within: r } = e, i = H({
    isFocused: !1,
    isFocusVisible: n || dp()
  }), [o, a] = ae(!1), [s, l] = ae(() => i.current.isFocused && i.current.isFocusVisible), u = pe(() => l(i.current.isFocused && i.current.isFocusVisible), []), c = pe((f) => {
    i.current.isFocused = f, a(f), u();
  }, [
    u
  ]);
  zv((f) => {
    i.current.isFocusVisible = f, u();
  }, [], {
    isTextInput: t
  });
  let { focusProps: d } = $v({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: p } = jv({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: o,
    isFocusVisible: s,
    focusProps: r ? p : d
  };
}
var Jv = Object.defineProperty, Qv = (e, n, t) => n in e ? Jv(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ss = (e, n, t) => (Qv(e, typeof n != "symbol" ? n + "" : n, t), t);
let qv = class {
  constructor() {
    Ss(this, "current", this.detect()), Ss(this, "handoffState", "pending"), Ss(this, "currentId", 0);
  }
  set(n) {
    this.current !== n && (this.handoffState = "pending", this.currentId = 0, this.current = n);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, er = new qv();
function hn(e) {
  return er.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Yi(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((n) => setTimeout(() => {
    throw n;
  }));
}
function Et() {
  let e = [], n = { addEventListener(t, r, i, o) {
    return t.addEventListener(r, i, o), n.add(() => t.removeEventListener(r, i, o));
  }, requestAnimationFrame(...t) {
    let r = requestAnimationFrame(...t);
    return n.add(() => cancelAnimationFrame(r));
  }, nextFrame(...t) {
    return n.requestAnimationFrame(() => n.requestAnimationFrame(...t));
  }, setTimeout(...t) {
    let r = setTimeout(...t);
    return n.add(() => clearTimeout(r));
  }, microTask(...t) {
    let r = { current: !0 };
    return Yi(() => {
      r.current && t[0]();
    }), n.add(() => {
      r.current = !1;
    });
  }, style(t, r, i) {
    let o = t.style.getPropertyValue(r);
    return Object.assign(t.style, { [r]: i }), this.add(() => {
      Object.assign(t.style, { [r]: o });
    });
  }, group(t) {
    let r = Et();
    return t(r), this.add(() => r.dispose());
  }, add(t) {
    return e.includes(t) || e.push(t), () => {
      let r = e.indexOf(t);
      if (r >= 0) for (let i of e.splice(r, 1)) i();
    };
  }, dispose() {
    for (let t of e.splice(0)) t();
  } };
  return n;
}
function on() {
  let [e] = ae(Et);
  return Ie(() => () => e.dispose(), [e]), e;
}
let re = (e, n) => {
  er.isServer ? Ie(e, n) : Gi(e, n);
};
function vt(e) {
  let n = H(e);
  return re(() => {
    n.current = e;
  }, [e]), n;
}
let P = function(e) {
  let n = vt(e);
  return C.useCallback((...t) => n.current(...t), [n]);
};
function Kv(e) {
  let n = e.width / 2, t = e.height / 2;
  return { top: e.clientY - t, right: e.clientX + n, bottom: e.clientY + t, left: e.clientX - n };
}
function e0(e, n) {
  return !(!e || !n || e.right < n.left || e.left > n.right || e.bottom < n.top || e.top > n.bottom);
}
function ka({ disabled: e = !1 } = {}) {
  let n = H(null), [t, r] = ae(!1), i = on(), o = P(() => {
    n.current = null, r(!1), i.dispose();
  }), a = P((s) => {
    if (i.dispose(), n.current === null) {
      n.current = s.currentTarget, r(!0);
      {
        let l = hn(s.currentTarget);
        i.addEventListener(l, "pointerup", o, !1), i.addEventListener(l, "pointermove", (u) => {
          if (n.current) {
            let c = Kv(u);
            r(e0(c, n.current.getBoundingClientRect()));
          }
        }, !1), i.addEventListener(l, "pointercancel", o, !1);
      }
    }
  });
  return { pressed: t, pressProps: e ? {} : { onPointerDown: a, onPointerUp: o, onClick: o } };
}
let t0 = Ve(void 0);
function Ra() {
  return ve(t0);
}
function Cl(...e) {
  return Array.from(new Set(e.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}
function _e(e, n, ...t) {
  if (e in n) {
    let i = n[e];
    return typeof i == "function" ? i(...t) : i;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, _e), r;
}
var Ft = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ft || {}), Dn = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Dn || {});
function he({ ourProps: e, theirProps: n, slot: t, defaultTag: r, features: i, visible: o = !0, name: a, mergeRefs: s }) {
  s = s ?? n0;
  let l = fp(n, e);
  if (o) return lo(l, t, r, a, s);
  let u = i ?? 0;
  if (u & 2) {
    let { static: c = !1, ...d } = l;
    if (c) return lo(d, t, r, a, s);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = l;
    return _e(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return lo({ ...d, hidden: !0, style: { display: "none" } }, t, r, a, s);
    } });
  }
  return lo(l, t, r, a, s);
}
function lo(e, n = {}, t, r, i) {
  let { as: o = t, children: a, refName: s = "ref", ...l } = Es(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [s]: e.ref } : {}, c = typeof a == "function" ? a(n) : a;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(n)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
  let d = {};
  if (n) {
    let p = !1, f = [];
    for (let [m, h] of Object.entries(n)) typeof h == "boolean" && (p = !0), h === !0 && f.push(m.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (p) {
      d["data-headlessui-state"] = f.join(" ");
      for (let m of f) d[`data-${m}`] = "";
    }
  }
  if (o === ze && (Object.keys(xn(l)).length > 0 || Object.keys(xn(d)).length > 0)) if (!Ov(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(xn(l)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(xn(l)).concat(Object.keys(xn(d))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = c.props, f = p == null ? void 0 : p.className, m = typeof f == "function" ? (...v) => Cl(f(...v), l.className) : Cl(f, l.className), h = m ? { className: m } : {}, g = fp(c.props, xn(Es(l, ["ref"])));
    for (let v in d) v in g && delete d[v];
    return iu(c, Object.assign({}, g, d, u, { ref: i(c.ref, u.ref) }, h));
  }
  return ou(o, Object.assign({}, Es(l, ["ref"]), o !== ze && u, o !== ze && d), c);
}
function n0(...e) {
  return e.every((n) => n == null) ? void 0 : (n) => {
    for (let t of e) t != null && (typeof t == "function" ? t(n) : t.current = n);
  };
}
function fp(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, t = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (t[i] != null || (t[i] = []), t[i].push(r[i])) : n[i] = r[i];
  if (n.disabled || n["aria-disabled"]) for (let r in t) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (t[r] = [(i) => {
    var o;
    return (o = i == null ? void 0 : i.preventDefault) == null ? void 0 : o.call(i);
  }]);
  for (let r in t) Object.assign(n, { [r](i, ...o) {
    let a = t[r];
    for (let s of a) {
      if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
      s(i, ...o);
    }
  } });
  return n;
}
function gn(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let n = {}, t = {};
  for (let r of e) for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (t[i] != null || (t[i] = []), t[i].push(r[i])) : n[i] = r[i];
  for (let r in t) Object.assign(n, { [r](...i) {
    let o = t[r];
    for (let a of o) a == null || a(...i);
  } });
  return n;
}
function fe(e) {
  var n;
  return Object.assign(Oa(e), { displayName: (n = e.displayName) != null ? n : e.name });
}
function xn(e) {
  let n = Object.assign({}, e);
  for (let t in n) n[t] === void 0 && delete n[t];
  return n;
}
function Es(e, n = []) {
  let t = Object.assign({}, e);
  for (let r of n) r in t && delete t[r];
  return t;
}
function pp(e, n, t) {
  let [r, i] = ae(t), o = e !== void 0, a = H(o), s = H(!1), l = H(!1);
  return o && !a.current && !s.current ? (s.current = !0, a.current = o, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !o && a.current && !l.current && (l.current = !0, a.current = o, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [o ? e : r, P((u) => (o || i(u), n == null ? void 0 : n(u)))];
}
function mp(e) {
  let [n] = ae(e);
  return n;
}
function hp(e = {}, n = null, t = []) {
  for (let [r, i] of Object.entries(e)) vp(t, gp(n, r), i);
  return t;
}
function gp(e, n) {
  return e ? e + "[" + n + "]" : n;
}
function vp(e, n, t) {
  if (Array.isArray(t)) for (let [r, i] of t.entries()) vp(e, gp(n, r.toString()), i);
  else t instanceof Date ? e.push([n, t.toISOString()]) : typeof t == "boolean" ? e.push([n, t ? "1" : "0"]) : typeof t == "string" ? e.push([n, t]) : typeof t == "number" ? e.push([n, `${t}`]) : t == null ? e.push([n, ""]) : hp(t, n, e);
}
function r0(e) {
  var n, t;
  let r = (n = e == null ? void 0 : e.form) != null ? n : e.closest("form");
  if (r) {
    for (let i of r.elements) if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
      i.click();
      return;
    }
    (t = r.requestSubmit) == null || t.call(r);
  }
}
let i0 = "span";
var or = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(or || {});
function o0(e, n) {
  var t;
  let { features: r = 1, ...i } = e, o = { ref: n, "aria-hidden": (r & 2) === 2 ? !0 : (t = i["aria-hidden"]) != null ? t : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return he({ ourProps: o, theirProps: i, slot: {}, defaultTag: i0, name: "Hidden" });
}
let ar = fe(o0), a0 = Ve(null);
function s0({ children: e }) {
  let n = ve(a0);
  if (!n) return C.createElement(C.Fragment, null, e);
  let { target: t } = n;
  return t ? au(C.createElement(C.Fragment, null, e), t) : null;
}
function bp({ data: e, form: n, disabled: t, onReset: r, overrides: i }) {
  let [o, a] = ae(null), s = on();
  return Ie(() => {
    if (r && o) return s.addEventListener(o, "reset", r);
  }, [o, n, r]), C.createElement(s0, null, C.createElement(l0, { setForm: a, formId: n }), hp(e).map(([l, u]) => C.createElement(ar, { features: or.Hidden, ...xn({ key: l, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: n, disabled: t, name: l, value: u, ...i }) })));
}
function l0({ setForm: e, formId: n }) {
  return Ie(() => {
    if (n) {
      let t = document.getElementById(n);
      t && e(t);
    }
  }, [e, n]), n ? null : C.createElement(ar, { features: or.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (t) => {
    if (!t) return;
    let r = t.closest("form");
    r && e(r);
  } });
}
let u0 = Ve(void 0);
function lu() {
  return ve(u0);
}
function uu(e) {
  let n = e.parentElement, t = null;
  for (; n && !(n instanceof HTMLFieldSetElement); ) n instanceof HTMLLegendElement && (t = n), n = n.parentElement;
  let r = (n == null ? void 0 : n.getAttribute("disabled")) === "";
  return r && c0(t) ? !1 : r;
}
function c0(e) {
  if (!e) return !1;
  let n = e.previousElementSibling;
  for (; n !== null; ) {
    if (n instanceof HTMLLegendElement) return !1;
    n = n.previousElementSibling;
  }
  return !0;
}
let yp = Symbol();
function d0(e, n = !0) {
  return Object.assign(e, { [yp]: n });
}
function Pe(...e) {
  let n = H(e);
  Ie(() => {
    n.current = e;
  }, [e]);
  let t = P((r) => {
    for (let i of n.current) i != null && (typeof i == "function" ? i(r) : i.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[yp])) ? void 0 : t;
}
let Aa = Ve(null);
Aa.displayName = "DescriptionContext";
function wp() {
  let e = ve(Aa);
  if (e === null) {
    let n = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, wp), n;
  }
  return e;
}
function Cp() {
  var e, n;
  return (n = (e = ve(Aa)) == null ? void 0 : e.value) != null ? n : void 0;
}
function Ip() {
  let [e, n] = ae([]);
  return [e.length > 0 ? e.join(" ") : void 0, U(() => function(t) {
    let r = P((o) => (n((a) => [...a, o]), () => n((a) => {
      let s = a.slice(), l = s.indexOf(o);
      return l !== -1 && s.splice(l, 1), s;
    }))), i = U(() => ({ register: r, slot: t.slot, name: t.name, props: t.props, value: t.value }), [r, t.slot, t.name, t.props, t.value]);
    return C.createElement(Aa.Provider, { value: i }, t.children);
  }, [n])];
}
let f0 = "p";
function p0(e, n) {
  let t = rt(), r = Ra(), { id: i = `headlessui-description-${t}`, ...o } = e, a = wp(), s = Pe(n);
  re(() => a.register(i), [i, a.register]);
  let l = r || !1, u = U(() => ({ ...a.slot, disabled: l }), [a.slot, l]), c = { ref: s, ...a.props, id: i };
  return he({ ourProps: c, theirProps: o, slot: u, defaultTag: f0, name: a.name || "Description" });
}
let m0 = fe(p0), xp = Object.assign(m0, {});
var j = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(j || {});
let Pa = Ve(null);
Pa.displayName = "LabelContext";
function cu() {
  let e = ve(Pa);
  if (e === null) {
    let n = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n, cu), n;
  }
  return e;
}
function Zi(e) {
  var n, t, r;
  let i = (t = (n = ve(Pa)) == null ? void 0 : n.value) != null ? t : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [i, ...e].filter(Boolean).join(" ") : i;
}
function Fa({ inherit: e = !1 } = {}) {
  let n = Zi(), [t, r] = ae([]), i = e ? [n, ...t].filter(Boolean) : t;
  return [i.length > 0 ? i.join(" ") : void 0, U(() => function(o) {
    let a = P((l) => (r((u) => [...u, l]), () => r((u) => {
      let c = u.slice(), d = c.indexOf(l);
      return d !== -1 && c.splice(d, 1), c;
    }))), s = U(() => ({ register: a, slot: o.slot, name: o.name, props: o.props, value: o.value }), [a, o.slot, o.name, o.props, o.value]);
    return C.createElement(Pa.Provider, { value: s }, o.children);
  }, [r])];
}
let h0 = "label";
function g0(e, n) {
  var t;
  let r = rt(), i = cu(), o = lu(), a = Ra(), { id: s = `headlessui-label-${r}`, htmlFor: l = o ?? ((t = i.props) == null ? void 0 : t.htmlFor), passive: u = !1, ...c } = e, d = Pe(n);
  re(() => i.register(s), [s, i.register]);
  let p = P((g) => {
    let v = g.currentTarget;
    if (v instanceof HTMLLabelElement && g.preventDefault(), i.props && "onClick" in i.props && typeof i.props.onClick == "function" && i.props.onClick(g), v instanceof HTMLLabelElement) {
      let y = document.getElementById(v.htmlFor);
      if (y) {
        let b = y.getAttribute("disabled");
        if (b === "true" || b === "") return;
        let I = y.getAttribute("aria-disabled");
        if (I === "true" || I === "") return;
        (y instanceof HTMLInputElement && (y.type === "radio" || y.type === "checkbox") || y.role === "radio" || y.role === "checkbox" || y.role === "switch") && y.click(), y.focus({ preventScroll: !0 });
      }
    }
  }), f = a || !1, m = U(() => ({ ...i.slot, disabled: f }), [i.slot, f]), h = { ref: d, ...i.props, id: s, htmlFor: l, onClick: p };
  return u && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in c && delete c.onClick), he({ ourProps: h, theirProps: c, slot: m, defaultTag: l ? h0 : "div", name: i.name || "Label" });
}
let v0 = fe(g0), Sp = Object.assign(v0, {}), b0 = Ve(() => {
});
function y0({ value: e, children: n }) {
  return C.createElement(b0.Provider, { value: e }, n);
}
function Qr(e, n, t) {
  let r = t.initialDeps ?? [], i;
  return () => {
    var o, a, s, l;
    let u;
    t.key && ((o = t.debug) != null && o.call(t)) && (u = Date.now());
    const c = e();
    if (!(c.length !== r.length || c.some((f, m) => r[m] !== f)))
      return i;
    r = c;
    let p;
    if (t.key && ((a = t.debug) != null && a.call(t)) && (p = Date.now()), i = n(...c), t.key && ((s = t.debug) != null && s.call(t))) {
      const f = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, h = m / 16, g = (v, y) => {
        for (v = String(v); v.length < y; )
          v = " " + v;
        return v;
      };
      console.info(
        `%c⏱ ${g(m, 5)} /${g(f, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * h, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return (l = t == null ? void 0 : t.onChange) == null || l.call(t, i), i;
  };
}
function Ds(e, n) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const w0 = (e, n) => Math.abs(e - n) < 1, C0 = (e, n, t) => {
  let r;
  return function(...i) {
    e.clearTimeout(r), r = e.setTimeout(() => n.apply(this, i), t);
  };
}, I0 = (e) => e, x0 = (e) => {
  const n = Math.max(e.startIndex - e.overscan, 0), t = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let i = n; i <= t; i++)
    r.push(i);
  return r;
}, S0 = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const i = (a) => {
    const { width: s, height: l } = a;
    n({ width: Math.round(s), height: Math.round(l) });
  };
  if (i(t.getBoundingClientRect()), !r.ResizeObserver)
    return () => {
    };
  const o = new r.ResizeObserver((a) => {
    const s = a[0];
    if (s != null && s.borderBoxSize) {
      const l = s.borderBoxSize[0];
      if (l) {
        i({ width: l.inlineSize, height: l.blockSize });
        return;
      }
    }
    i(t.getBoundingClientRect());
  });
  return o.observe(t, { box: "border-box" }), () => {
    o.unobserve(t);
  };
}, Oc = {
  passive: !0
}, E0 = typeof window > "u" ? !0 : "onscrollend" in window, D0 = (e, n) => {
  const t = e.scrollElement;
  if (!t)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let i = 0;
  const o = E0 ? () => {
  } : C0(
    r,
    () => {
      n(i, !1);
    },
    e.options.isScrollingResetDelay
  ), a = (u) => () => {
    i = t[e.options.horizontal ? "scrollLeft" : "scrollTop"], o(), n(i, u);
  }, s = a(!0), l = a(!1);
  return l(), t.addEventListener("scroll", s, Oc), t.addEventListener("scrollend", l, Oc), () => {
    t.removeEventListener("scroll", s), t.removeEventListener("scrollend", l);
  };
}, T0 = (e, n, t) => {
  if (n != null && n.borderBoxSize) {
    const r = n.borderBoxSize[0];
    if (r)
      return Math.round(
        r[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[t.options.horizontal ? "width" : "height"]
  );
}, M0 = (e, {
  adjustments: n = 0,
  behavior: t
}, r) => {
  var i, o;
  const a = e + n;
  (o = (i = r.scrollElement) == null ? void 0 : i.scrollTo) == null || o.call(i, {
    [r.options.horizontal ? "left" : "top"]: a,
    behavior: t
  });
};
class O0 {
  constructor(n) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const r = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((i) => {
        i.forEach((o) => {
          this._measureElement(o.target, o);
        });
      }));
      return {
        disconnect: () => {
          var i;
          return (i = r()) == null ? void 0 : i.disconnect();
        },
        observe: (i) => {
          var o;
          return (o = r()) == null ? void 0 : o.observe(i, { box: "border-box" });
        },
        unobserve: (i) => {
          var o;
          return (o = r()) == null ? void 0 : o.unobserve(i);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      Object.entries(t).forEach(([r, i]) => {
        typeof i > "u" && delete t[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: I0,
        rangeExtractor: x0,
        onChange: () => {
        },
        measureElement: T0,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        ...t
      };
    }, this.notify = (t, r) => {
      var i, o;
      const { startIndex: a, endIndex: s } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      }, l = this.calculateRange();
      (t || a !== (l == null ? void 0 : l.startIndex) || s !== (l == null ? void 0 : l.endIndex)) && ((o = (i = this.options).onChange) == null || o.call(i, this, r));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear();
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.notify(!1, !1);
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.notify(!1, !1);
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i;
            const a = this.isScrolling;
            this.isScrolling = o, this.notify(a !== o, o);
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, r) => {
      const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      for (let a = r - 1; a >= 0; a--) {
        const s = t[a];
        if (i.has(s.lane))
          continue;
        const l = o.get(
          s.lane
        );
        if (l == null || s.end > l.end ? o.set(s.lane, s) : s.end < l.end && i.set(s.lane, !0), i.size === this.options.lanes)
          break;
      }
      return o.size === this.options.lanes ? Array.from(o.values()).sort((a, s) => a.end === s.end ? a.index - s.index : a.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = Qr(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (t, r, i, o, a) => (this.pendingMeasuredCacheIndexes = [], {
        count: t,
        paddingStart: r,
        scrollMargin: i,
        getItemKey: o,
        enabled: a
      }),
      {
        key: !1
      }
    ), this.getMeasurements = Qr(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: t, paddingStart: r, scrollMargin: i, getItemKey: o, enabled: a }, s) => {
        var l;
        if (!a)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((d) => {
          this.itemSizeCache.set(d.key, d.size);
        }));
        const u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, u);
        for (let d = u; d < t; d++) {
          let p = (l = this.measurementsCache[d]) == null ? void 0 : l.measureElement;
          p || (p = (I) => {
            const w = o(d), S = this.elementsCache.get(w);
            if (!I) {
              S && (this.observer.unobserve(S), this.elementsCache.delete(w));
              return;
            }
            S !== I && (S && this.observer.unobserve(S), this.observer.observe(I), this.elementsCache.set(w, I)), I.isConnected && this.resizeItem(
              d,
              this.options.measureElement(I, void 0, this)
            );
          });
          const f = o(d), m = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), h = m ? m.end + this.options.gap : r + i, g = s.get(f), v = typeof g == "number" ? g : this.options.estimateSize(d), y = h + v, b = m ? m.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: h,
            size: v,
            end: y,
            key: f,
            lane: b,
            measureElement: p
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = Qr(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (t, r, i) => this.range = t.length > 0 && r > 0 ? k0({
        measurements: t,
        outerSize: r,
        scrollOffset: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = Qr(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (t, r, i, o) => r === null ? [] : t({
        startIndex: r.startIndex,
        endIndex: r.endIndex,
        overscan: i,
        count: o
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const r = this.options.indexAttribute, i = t.getAttribute(r);
      return i ? parseInt(i, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (t, r) => {
      const i = this.indexFromElement(t), o = this.getMeasurements()[i];
      if (!o || !t.isConnected) {
        this.elementsCache.forEach((s, l) => {
          s === t && (this.observer.unobserve(t), this.elementsCache.delete(l));
        });
        return;
      }
      const a = this.elementsCache.get(o.key);
      a !== t && (a && this.observer.unobserve(a), this.observer.observe(t), this.elementsCache.set(o.key, t)), this.resizeItem(i, this.options.measureElement(t, r, this));
    }, this.resizeItem = (t, r) => {
      const i = this.getMeasurements()[t];
      if (!i)
        return;
      const o = this.itemSizeCache.get(i.key) ?? i.size, a = r - o;
      a !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(i, a, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", a), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += a,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(i.index), this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, r)), this.notify(!0, !1));
    }, this.measureElement = (t) => {
      t && this._measureElement(t, void 0);
    }, this.getVirtualItems = Qr(
      () => [this.getIndexes(), this.getMeasurements()],
      (t, r) => {
        const i = [];
        for (let o = 0, a = t.length; o < a; o++) {
          const s = t[o], l = r[s];
          i.push(l);
        }
        return i;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Ds(
          r[Ep(
            0,
            r.length - 1,
            (i) => Ds(r[i]).start,
            t
          )]
        );
    }, this.getOffsetForAlignment = (t, r) => {
      const i = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (t <= o ? r = "start" : t >= o + i ? r = "end" : r = "start"), r === "start" ? t = t : r === "end" ? t = t - i : r === "center" && (t = t - i / 2);
      const a = this.options.horizontal ? "scrollWidth" : "scrollHeight", l = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[a] : this.scrollElement[a] : 0) - i;
      return Math.max(Math.min(l, t), 0);
    }, this.getOffsetForIndex = (t, r = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const i = this.getMeasurements()[t];
      if (!i)
        return;
      const o = this.getSize(), a = this.getScrollOffset();
      if (r === "auto")
        if (i.end >= a + o - this.options.scrollPaddingEnd)
          r = "end";
        else if (i.start <= a + this.options.scrollPaddingStart)
          r = "start";
        else
          return [a, r];
      const s = r === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(s, r), r];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (t, { align: r = "start", behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(t, r), {
        adjustments: void 0,
        behavior: i
      });
    }, this.scrollToIndex = (t, { align: r = "auto", behavior: i } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1)), this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const o = this.getOffsetForIndex(t, r);
      if (!o) return;
      const [a, s] = o;
      this._scrollToOffset(a, { adjustments: void 0, behavior: i }), i !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(t)
        )) {
          const [u] = Ds(
            this.getOffsetForIndex(t, s)
          );
          w0(u, this.getScrollOffset()) || this.scrollToIndex(t, { align: s, behavior: i });
        } else
          this.scrollToIndex(t, { align: s, behavior: i });
      }));
    }, this.scrollBy = (t, { behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + t, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var t;
      const r = this.getMeasurements();
      let i;
      return r.length === 0 ? i = this.options.paddingStart : i = this.options.lanes === 1 ? ((t = r[r.length - 1]) == null ? void 0 : t.end) ?? 0 : Math.max(
        ...r.slice(-this.options.lanes).map((o) => o.end)
      ), i - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (t, {
      adjustments: r,
      behavior: i
    }) => {
      this.options.scrollToFn(t, { behavior: i, adjustments: r }, this);
    }, this.measure = () => {
      var t, r;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (r = (t = this.options).onChange) == null || r.call(t, this, !1);
    }, this.setOptions(n);
  }
}
const Ep = (e, n, t, r) => {
  for (; e <= n; ) {
    const i = (e + n) / 2 | 0, o = t(i);
    if (o < r)
      e = i + 1;
    else if (o > r)
      n = i - 1;
    else
      return i;
  }
  return e > 0 ? e - 1 : 0;
};
function k0({
  measurements: e,
  outerSize: n,
  scrollOffset: t
}) {
  const r = e.length - 1, o = Ep(0, r, (s) => e[s].start, t);
  let a = o;
  for (; a < r && e[a].end < t + n; )
    a++;
  return { startIndex: o, endIndex: a };
}
const R0 = typeof document < "u" ? T.useLayoutEffect : T.useEffect;
function A0(e) {
  const n = T.useReducer(() => ({}), {})[1], t = {
    ...e,
    onChange: (i, o) => {
      var a;
      o ? nt(n) : n(), (a = e.onChange) == null || a.call(e, i, o);
    }
  }, [r] = T.useState(
    () => new O0(t)
  );
  return r.setOptions(t), T.useEffect(() => r._didMount(), []), R0(() => r._willUpdate()), r;
}
function P0(e) {
  return A0({
    observeElementRect: S0,
    observeElementOffset: D0,
    scrollToFn: M0,
    ...e
  });
}
function F0(e, n) {
  return e !== null && n !== null && typeof e == "object" && typeof n == "object" && "id" in e && "id" in n ? e.id === n.id : e === n;
}
function Dp(e = F0) {
  return pe((n, t) => {
    if (typeof e == "string") {
      let r = e;
      return (n == null ? void 0 : n[r]) === (t == null ? void 0 : t[r]);
    }
    return e(n, t);
  }, [e]);
}
function N0(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: n, height: t } = e.getBoundingClientRect();
  return { width: n, height: t };
}
function zo(e, n = !1) {
  let t = e === null ? null : "current" in e ? e.current : e, [r, i] = Wr(() => ({}), {}), o = U(() => N0(t), [t, r]);
  return re(() => {
    if (!t) return;
    let a = new ResizeObserver(i);
    return a.observe(t), () => {
      a.disconnect();
    };
  }, [t]), n ? { width: `${o.width}px`, height: `${o.height}px` } : o;
}
let _0 = class extends Map {
  constructor(n) {
    super(), this.factory = n;
  }
  get(n) {
    let t = super.get(n);
    return t === void 0 && (t = this.factory(n), this.set(n, t)), t;
  }
};
function Tp(e, n) {
  let t = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t;
  }, subscribe(i) {
    return r.add(i), () => r.delete(i);
  }, dispatch(i, ...o) {
    let a = n[i].call(t, ...o);
    a && (t = a, r.forEach((s) => s()));
  } };
}
function Mp(e) {
  return kv(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let L0 = new _0(() => Tp(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let n = this.indexOf(e);
  if (n === -1) return this;
  let t = this.slice();
  return t.splice(n, 1), t;
} }));
function $r(e, n) {
  let t = L0.get(n), r = rt(), i = Mp(t);
  if (re(() => {
    if (e) return t.dispatch("ADD", r), () => t.dispatch("REMOVE", r);
  }, [t, e]), !e) return !1;
  let o = i.indexOf(r), a = i.length;
  return o === -1 && (o = a, a += 1), o === a - 1;
}
let Il = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map();
function kc(e) {
  var n;
  let t = (n = gi.get(e)) != null ? n : 0;
  return gi.set(e, t + 1), t !== 0 ? () => Rc(e) : (Il.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Rc(e));
}
function Rc(e) {
  var n;
  let t = (n = gi.get(e)) != null ? n : 1;
  if (t === 1 ? gi.delete(e) : gi.set(e, t - 1), t !== 1) return;
  let r = Il.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Il.delete(e));
}
function Na(e, { allowed: n, disallowed: t } = {}) {
  let r = $r(e, "inert-others");
  re(() => {
    var i, o;
    if (!r) return;
    let a = Et();
    for (let l of (i = t == null ? void 0 : t()) != null ? i : []) l && a.add(kc(l));
    let s = (o = n == null ? void 0 : n()) != null ? o : [];
    for (let l of s) {
      if (!l) continue;
      let u = hn(l);
      if (!u) continue;
      let c = l.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) s.some((p) => d.contains(p)) || a.add(kc(d));
        c = c.parentElement;
      }
    }
    return a.dispose;
  }, [r, n, t]);
}
function Xi(e, n, t) {
  let r = vt((i) => {
    let o = i.getBoundingClientRect();
    o.x === 0 && o.y === 0 && o.width === 0 && o.height === 0 && t();
  });
  Ie(() => {
    if (!e) return;
    let i = n === null ? null : n instanceof HTMLElement ? n : n.current;
    if (!i) return;
    let o = Et();
    if (typeof ResizeObserver < "u") {
      let a = new ResizeObserver(() => r.current(i));
      a.observe(i), o.add(() => a.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let a = new IntersectionObserver(() => r.current(i));
      a.observe(i), o.add(() => a.disconnect());
    }
    return () => o.dispose();
  }, [n, r, e]);
}
let jo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), V0 = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Be = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Be || {}), Un = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Un || {}), W0 = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(W0 || {});
function Op(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(jo)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function G0(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(V0)).sort((n, t) => Math.sign((n.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var _a = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_a || {});
function La(e, n = 0) {
  var t;
  return e === ((t = hn(e)) == null ? void 0 : t.body) ? !1 : _e(n, { 0() {
    return e.matches(jo);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(jo)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function kp(e) {
  let n = hn(e);
  Et().nextFrame(() => {
    n && !La(n.activeElement, 0) && Kt(e);
  });
}
var $0 = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))($0 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Kt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let H0 = ["textarea", "input"].join(",");
function B0(e) {
  var n, t;
  return (t = (n = e == null ? void 0 : e.matches) == null ? void 0 : n.call(e, H0)) != null ? t : !1;
}
function ln(e, n = (t) => t) {
  return e.slice().sort((t, r) => {
    let i = n(t), o = n(r);
    if (i === null || o === null) return 0;
    let a = i.compareDocumentPosition(o);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Rp(e, n) {
  return kt(Op(), n, { relativeTo: e });
}
function kt(e, n, { sorted: t = !0, relativeTo: r = null, skipElements: i = [] } = {}) {
  let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, a = Array.isArray(e) ? t ? ln(e) : e : n & 64 ? G0(e) : Op(e);
  i.length > 0 && a.length > 1 && (a = a.filter((f) => !i.some((m) => m != null && "current" in m ? (m == null ? void 0 : m.current) === f : m === f))), r = r ?? o.activeElement;
  let s = (() => {
    if (n & 5) return 1;
    if (n & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (n & 1) return 0;
    if (n & 2) return Math.max(0, a.indexOf(r)) - 1;
    if (n & 4) return Math.max(0, a.indexOf(r)) + 1;
    if (n & 8) return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = n & 32 ? { preventScroll: !0 } : {}, c = 0, d = a.length, p;
  do {
    if (c >= d || c + d <= 0) return 0;
    let f = l + c;
    if (n & 16) f = (f + d) % d;
    else {
      if (f < 0) return 3;
      if (f >= d) return 1;
    }
    p = a[f], p == null || p.focus(u), c += s;
  } while (p !== o.activeElement);
  return n & 6 && B0(p) && p.select(), 2;
}
function Ap() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Y0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Pp() {
  return Ap() || Y0();
}
function qr(e, n, t, r) {
  let i = vt(t);
  Ie(() => {
    if (!e) return;
    function o(a) {
      i.current(a);
    }
    return document.addEventListener(n, o, r), () => document.removeEventListener(n, o, r);
  }, [e, n, r]);
}
function Fp(e, n, t, r) {
  let i = vt(t);
  Ie(() => {
    if (!e) return;
    function o(a) {
      i.current(a);
    }
    return window.addEventListener(n, o, r), () => window.removeEventListener(n, o, r);
  }, [e, n, r]);
}
const Ac = 30;
function Va(e, n, t) {
  let r = $r(e, "outside-click"), i = vt(t), o = pe(function(l, u) {
    if (l.defaultPrevented) return;
    let c = u(l);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let d = function p(f) {
      return typeof f == "function" ? p(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(n);
    for (let p of d) {
      if (p === null) continue;
      let f = p instanceof HTMLElement ? p : p.current;
      if (f != null && f.contains(c) || l.composed && l.composedPath().includes(f)) return;
    }
    return !La(c, _a.Loose) && c.tabIndex !== -1 && l.preventDefault(), i.current(l, c);
  }, [i]), a = H(null);
  qr(r, "pointerdown", (l) => {
    var u, c;
    a.current = ((c = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : c[0]) || l.target;
  }, !0), qr(r, "mousedown", (l) => {
    var u, c;
    a.current = ((c = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : c[0]) || l.target;
  }, !0), qr(r, "click", (l) => {
    Pp() || a.current && (o(l, () => a.current), a.current = null);
  }, !0);
  let s = H({ x: 0, y: 0 });
  qr(r, "touchstart", (l) => {
    s.current.x = l.touches[0].clientX, s.current.y = l.touches[0].clientY;
  }, !0), qr(r, "touchend", (l) => {
    let u = { x: l.changedTouches[0].clientX, y: l.changedTouches[0].clientY };
    if (!(Math.abs(u.x - s.current.x) >= Ac || Math.abs(u.y - s.current.y) >= Ac)) return o(l, () => l.target instanceof HTMLElement ? l.target : null);
  }, !0), Fp(r, "blur", (l) => o(l, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function vn(...e) {
  return U(() => hn(...e), [...e]);
}
function du(e, n, t, r) {
  let i = vt(t);
  Ie(() => {
    e = e ?? window;
    function o(a) {
      i.current(a);
    }
    return e.addEventListener(n, o, r), () => e.removeEventListener(n, o, r);
  }, [e, n, r]);
}
function Np(e) {
  let n = H({ value: "", selectionStart: null, selectionEnd: null });
  return du(e.current, "blur", (t) => {
    let r = t.target;
    r instanceof HTMLInputElement && (n.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), P(() => {
    let t = e.current;
    if (document.activeElement !== t && t instanceof HTMLInputElement && t.isConnected) {
      if (t.focus({ preventScroll: !0 }), t.value !== n.current.value) t.setSelectionRange(t.value.length, t.value.length);
      else {
        let { selectionStart: r, selectionEnd: i } = n.current;
        r !== null && i !== null && t.setSelectionRange(r, i);
      }
      n.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Pc(e) {
  var n;
  if (e.type) return e.type;
  let t = (n = e.as) != null ? n : "button";
  if (typeof t == "string" && t.toLowerCase() === "button") return "button";
}
function Wa(e, n) {
  let [t, r] = ae(() => Pc(e));
  return re(() => {
    r(Pc(e));
  }, [e.type, e.as]), re(() => {
    t || n.current && n.current instanceof HTMLButtonElement && !n.current.hasAttribute("type") && r("button");
  }, [t, n]), t;
}
function Z0() {
  let e;
  return { before({ doc: n }) {
    var t;
    let r = n.documentElement, i = (t = n.defaultView) != null ? t : window;
    e = Math.max(0, i.innerWidth - r.clientWidth);
  }, after({ doc: n, d: t }) {
    let r = n.documentElement, i = Math.max(0, r.clientWidth - r.offsetWidth), o = Math.max(0, e - i);
    t.style(r, "paddingRight", `${o}px`);
  } };
}
function X0() {
  return Ap() ? { before({ doc: e, d: n, meta: t }) {
    function r(i) {
      return t.containers.flatMap((o) => o()).some((o) => o.contains(i));
    }
    n.microTask(() => {
      var i;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = Et();
        s.style(e.documentElement, "scrollBehavior", "auto"), n.add(() => n.microTask(() => s.dispose()));
      }
      let o = (i = window.scrollY) != null ? i : window.pageYOffset, a = null;
      n.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let l = s.target.closest("a");
          if (!l) return;
          let { hash: u } = new URL(l.href), c = e.querySelector(u);
          c && !r(c) && (a = c);
        } catch {
        }
      }, !0), n.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let l = s.target;
          for (; l.parentElement && r(l.parentElement); ) l = l.parentElement;
          n.style(l, "overscrollBehavior", "contain");
        } else n.style(s.target, "touchAction", "none");
      }), n.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let l = s.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), n.add(() => {
        var s;
        let l = (s = window.scrollY) != null ? s : window.pageYOffset;
        o !== l && window.scrollTo(0, o), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
      });
    });
  } } : {};
}
function z0() {
  return { before({ doc: e, d: n }) {
    n.style(e.documentElement, "overflow", "hidden");
  } };
}
function j0(e) {
  let n = {};
  for (let t of e) Object.assign(n, t(n));
  return n;
}
let Jn = Tp(() => /* @__PURE__ */ new Map(), { PUSH(e, n) {
  var t;
  let r = (t = this.get(e)) != null ? t : { doc: e, count: 0, d: Et(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(n), this.set(e, r), this;
}, POP(e, n) {
  let t = this.get(e);
  return t && (t.count--, t.meta.delete(n)), this;
}, SCROLL_PREVENT({ doc: e, d: n, meta: t }) {
  let r = { doc: e, d: n, meta: j0(t) }, i = [X0(), Z0(), z0()];
  i.forEach(({ before: o }) => o == null ? void 0 : o(r)), i.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Jn.subscribe(() => {
  let e = Jn.getSnapshot(), n = /* @__PURE__ */ new Map();
  for (let [t] of e) n.set(t, t.documentElement.style.overflow);
  for (let t of e.values()) {
    let r = n.get(t.doc) === "hidden", i = t.count !== 0;
    (i && !r || !i && r) && Jn.dispatch(t.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t), t.count === 0 && Jn.dispatch("TEARDOWN", t);
  }
});
function U0(e, n, t = () => ({ containers: [] })) {
  let r = Mp(Jn), i = n ? r.get(n) : void 0, o = i ? i.count > 0 : !1;
  return re(() => {
    if (!(!n || !e)) return Jn.dispatch("PUSH", n, t), () => Jn.dispatch("POP", n, t);
  }, [e, n]), o;
}
function Ga(e, n, t = () => [document.body]) {
  let r = $r(e, "scroll-lock");
  U0(r, n, (i) => {
    var o;
    return { containers: [...(o = i.containers) != null ? o : [], t] };
  });
}
function Fc(e) {
  return [e.screenX, e.screenY];
}
function fu() {
  let e = H([-1, -1]);
  return { wasMoved(n) {
    let t = Fc(n);
    return e.current[0] === t[0] && e.current[1] === t[1] ? !1 : (e.current = t, !0);
  }, update(n) {
    e.current = Fc(n);
  } };
}
function J0(e) {
  let n = { called: !1 };
  return (...t) => {
    if (!n.called) return n.called = !0, e(...t);
  };
}
function Q0(e = 0) {
  let [n, t] = ae(e), r = pe((l) => t(l), [n]), i = pe((l) => t((u) => u | l), [n]), o = pe((l) => (n & l) === l, [n]), a = pe((l) => t((u) => u & ~l), [t]), s = pe((l) => t((u) => u ^ l), [t]);
  return { flags: n, setFlag: r, addFlag: i, hasFlag: o, removeFlag: a, toggleFlag: s };
}
var q0 = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(q0 || {});
function $a(e) {
  let n = {};
  for (let t in e) e[t] === !0 && (n[`data-${t}`] = "");
  return n;
}
function Ha(e, n, t, r) {
  let [i, o] = ae(t), { hasFlag: a, addFlag: s, removeFlag: l } = Q0(e && i ? 3 : 0), u = H(!1), c = H(!1), d = on();
  return re(function p() {
    var f;
    if (!e) return;
    t && o(!0);
    let m = n.current;
    return m ? ((f = r == null ? void 0 : r.start) == null || f.call(r, t), K0(m, { inFlight: u, prepare() {
      c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (t ? (s(3), l(4)) : (s(4), l(2)));
    }, run() {
      c.current ? t ? (l(3), s(4)) : (l(4), s(3)) : t ? l(1) : s(1);
    }, done() {
      var h;
      c.current && typeof m.getAnimations == "function" && m.getAnimations().length > 0 || (u.current = !1, l(7), t || o(!1), (h = r == null ? void 0 : r.end) == null || h.call(r, t));
    } })) : t ? (s(3), d.nextFrame(() => p())) : void 0;
  }, [e, t, n, d]), e ? [i, { closed: a(1), enter: a(2), leave: a(4), transition: a(2) || a(4) }] : [t, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function K0(e, { prepare: n, run: t, done: r, inFlight: i }) {
  let o = Et();
  return tb(e, { prepare: n, inFlight: i }), o.nextFrame(() => {
    o.add(eb(e, r)), t();
  }), o.dispose;
}
function eb(e, n) {
  let t = J0(n), r = Et();
  if (!e) return r.dispose;
  let { transitionDuration: i, transitionDelay: o } = getComputedStyle(e), [a, s] = [i, o].map((u) => {
    let [c = 0] = u.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, p) => p - d);
    return c;
  }), l = a + s;
  if (l !== 0) {
    let u = r.group((c) => {
      let d = c.setTimeout(() => {
        t(), c.dispose();
      }, l);
      c.addEventListener(e, "transitionrun", (p) => {
        p.target === p.currentTarget && (d(), c.addEventListener(e, "transitioncancel", (f) => {
          f.target === f.currentTarget && (t(), u());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), r.dispose());
    });
  } else t();
  return r.dispose;
}
function tb(e, { inFlight: n, prepare: t }) {
  if (n != null && n.current) {
    t();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", t(), e.offsetHeight, e.style.transition = r;
}
function _p(e, { container: n, accept: t, walk: r }) {
  let i = H(t), o = H(r);
  Ie(() => {
    i.current = t, o.current = r;
  }, [t, r]), re(() => {
    if (!n || !e) return;
    let a = hn(n);
    if (!a) return;
    let s = i.current, l = o.current, u = Object.assign((d) => s(d), { acceptNode: s }), c = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) l(c.currentNode);
  }, [n, e, i, o]);
}
function Si(e, n) {
  let t = H([]), r = P(e);
  Ie(() => {
    let i = [...t.current];
    for (let [o, a] of n.entries()) if (t.current[o] !== a) {
      let s = r(n, i);
      return t.current = n, s;
    }
  }, [r, ...n]);
}
function Hr(e) {
  return Lp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function bn(e) {
  var n;
  return (n = (Lp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Lp(e) {
  return e instanceof Node || e instanceof Ct(e).Node;
}
function ft(e) {
  return e instanceof Element || e instanceof Ct(e).Element;
}
function rn(e) {
  return e instanceof HTMLElement || e instanceof Ct(e).HTMLElement;
}
function Nc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ct(e).ShadowRoot;
}
function zi(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: i
  } = Nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !["inline", "contents"].includes(i);
}
function nb(e) {
  return ["table", "td", "th"].includes(Hr(e));
}
function Ba(e) {
  return [":popover-open", ":modal"].some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
function pu(e) {
  const n = mu(), t = Nt(e);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (t.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (t.contain || "").includes(r));
}
function rb(e) {
  let n = _n(e);
  for (; rn(n) && !Or(n); ) {
    if (Ba(n))
      return null;
    if (pu(n))
      return n;
    n = _n(n);
  }
  return null;
}
function mu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Or(e) {
  return ["html", "body", "#document"].includes(Hr(e));
}
function Nt(e) {
  return Ct(e).getComputedStyle(e);
}
function Ya(e) {
  return ft(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _n(e) {
  if (Hr(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Nc(e) && e.host || // Fallback.
    bn(e)
  );
  return Nc(n) ? n.host : n;
}
function Vp(e) {
  const n = _n(e);
  return Or(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : rn(n) && zi(n) ? n : Vp(n);
}
function Ei(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const i = Vp(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ct(i);
  return o ? n.concat(a, a.visualViewport || [], zi(i) ? i : [], a.frameElement && t ? Ei(a.frameElement) : []) : n.concat(i, Ei(i, [], t));
}
function ib() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((n) => {
    let {
      brand: t,
      version: r
    } = n;
    return t + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const Qt = Math.min, wt = Math.max, Uo = Math.round, uo = Math.floor, Ln = (e) => ({
  x: e,
  y: e
}), ob = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ab = {
  start: "end",
  end: "start"
};
function xl(e, n, t) {
  return wt(e, Qt(n, t));
}
function fr(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Vn(e) {
  return e.split("-")[0];
}
function Br(e) {
  return e.split("-")[1];
}
function Wp(e) {
  return e === "x" ? "y" : "x";
}
function hu(e) {
  return e === "y" ? "height" : "width";
}
function sr(e) {
  return ["top", "bottom"].includes(Vn(e)) ? "y" : "x";
}
function gu(e) {
  return Wp(sr(e));
}
function sb(e, n, t) {
  t === void 0 && (t = !1);
  const r = Br(e), i = gu(e), o = hu(i);
  let a = i === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (a = Jo(a)), [a, Jo(a)];
}
function lb(e) {
  const n = Jo(e);
  return [Sl(e), n, Sl(n)];
}
function Sl(e) {
  return e.replace(/start|end/g, (n) => ab[n]);
}
function ub(e, n, t) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? i : r : n ? r : i;
    case "left":
    case "right":
      return n ? o : a;
    default:
      return [];
  }
}
function cb(e, n, t, r) {
  const i = Br(e);
  let o = ub(Vn(e), t === "start", r);
  return i && (o = o.map((a) => a + "-" + i), n && (o = o.concat(o.map(Sl)))), o;
}
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, (n) => ob[n]);
}
function db(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gp(e) {
  return typeof e != "number" ? db(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Qo(e) {
  const {
    x: n,
    y: t,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: t,
    left: n,
    right: n + r,
    bottom: t + i,
    x: n,
    y: t
  };
}
function _c(e, n, t) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = sr(n), a = gu(n), s = hu(a), l = Vn(n), u = o === "y", c = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: c,
        y: r.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - i.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Br(n)) {
    case "start":
      f[a] -= p * (t && u ? -1 : 1);
      break;
    case "end":
      f[a] += p * (t && u ? -1 : 1);
      break;
  }
  return f;
}
const fb = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = t, s = o.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(n));
  let u = await a.getElementRects({
    reference: e,
    floating: n,
    strategy: i
  }), {
    x: c,
    y: d
  } = _c(u, r, l), p = r, f = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: g,
      fn: v
    } = s[h], {
      x: y,
      y: b,
      data: I,
      reset: w
    } = await v({
      x: c,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: i,
      middlewareData: f,
      rects: u,
      platform: a,
      elements: {
        reference: e,
        floating: n
      }
    });
    c = y ?? c, d = b ?? d, f = {
      ...f,
      [g]: {
        ...f[g],
        ...I
      }
    }, w && m <= 50 && (m++, typeof w == "object" && (w.placement && (p = w.placement), w.rects && (u = w.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: n,
      strategy: i
    }) : w.rects), {
      x: c,
      y: d
    } = _c(u, p, l)), h = -1);
  }
  return {
    x: c,
    y: d,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function Za(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = fr(n, e), m = Gp(f), g = s[p ? d === "floating" ? "reference" : "floating" : d], v = Qo(await o.getClippingRect({
    element: (t = await (o.isElement == null ? void 0 : o.isElement(g))) == null || t ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), y = d === "floating" ? {
    x: r,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), I = await (o.isElement == null ? void 0 : o.isElement(b)) ? await (o.getScale == null ? void 0 : o.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Qo(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (v.top - w.top + m.top) / I.y,
    bottom: (w.bottom - v.bottom + m.bottom) / I.y,
    left: (v.left - w.left + m.left) / I.x,
    right: (w.right - v.right + m.right) / I.x
  };
}
const pb = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: r,
      placement: i,
      rects: o,
      platform: a,
      elements: s,
      middlewareData: l
    } = n, {
      element: u,
      padding: c = 0
    } = fr(e, n) || {};
    if (u == null)
      return {};
    const d = Gp(c), p = {
      x: t,
      y: r
    }, f = gu(i), m = hu(f), h = await a.getDimensions(u), g = f === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", I = o.reference[m] + o.reference[f] - p[f] - o.floating[m], w = p[f] - o.reference[f], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
    let x = S ? S[b] : 0;
    (!x || !await (a.isElement == null ? void 0 : a.isElement(S))) && (x = s.floating[b] || o.floating[m]);
    const E = I / 2 - w / 2, D = x / 2 - h[m] / 2 - 1, _ = Qt(d[v], D), k = Qt(d[y], D), F = _, A = x - h[m] - k, N = x / 2 - h[m] / 2 + E, M = xl(F, N, A), V = !l.arrow && Br(i) != null && N !== M && o.reference[m] / 2 - (N < F ? _ : k) - h[m] / 2 < 0, R = V ? N < F ? N - F : N - A : 0;
    return {
      [f]: p[f] + R,
      data: {
        [f]: M,
        centerOffset: N - M - R,
        ...V && {
          alignmentOffset: R
        }
      },
      reset: V
    };
  }
}), mb = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: i,
        middlewareData: o,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: u
      } = n, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...g
      } = fr(e, n);
      if ((t = o.arrow) != null && t.alignmentOffset)
        return {};
      const v = Vn(i), y = sr(s), b = Vn(s) === s, I = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), w = p || (b || !h ? [Jo(s)] : lb(s)), S = m !== "none";
      !p && S && w.push(...cb(s, h, m, I));
      const x = [s, ...w], E = await Za(n, g), D = [];
      let _ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(E[v]), d) {
        const N = sb(i, a, I);
        D.push(E[N[0]], E[N[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: D
      }], !D.every((N) => N <= 0)) {
        var k, F;
        const N = (((k = o.flip) == null ? void 0 : k.index) || 0) + 1, M = x[N];
        if (M)
          return {
            data: {
              index: N,
              overflows: _
            },
            reset: {
              placement: M
            }
          };
        let V = (F = _.filter((R) => R.overflows[0] <= 0).sort((R, G) => R.overflows[1] - G.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!V)
          switch (f) {
            case "bestFit": {
              var A;
              const R = (A = _.filter((G) => {
                if (S) {
                  const O = sr(G.placement);
                  return O === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((O) => O > 0).reduce((O, z) => O + z, 0)]).sort((G, O) => G[1] - O[1])[0]) == null ? void 0 : A[0];
              R && (V = R);
              break;
            }
            case "initialPlacement":
              V = s;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function hb(e, n) {
  const {
    placement: t,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = Vn(t), s = Br(t), l = sr(t) === "y", u = ["left", "top"].includes(a) ? -1 : 1, c = o && l ? -1 : 1, d = fr(n, e);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), l ? {
    x: f * c,
    y: p * u
  } : {
    x: p * u,
    y: f * c
  };
}
const gb = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, r;
      const {
        x: i,
        y: o,
        placement: a,
        middlewareData: s
      } = n, l = await hb(n, e);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: i + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, vb = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: r,
        placement: i
      } = n, {
        mainAxis: o = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (g) => {
            let {
              x: v,
              y
            } = g;
            return {
              x: v,
              y
            };
          }
        },
        ...l
      } = fr(e, n), u = {
        x: t,
        y: r
      }, c = await Za(n, l), d = sr(Vn(i)), p = Wp(d);
      let f = u[p], m = u[d];
      if (o) {
        const g = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", y = f + c[g], b = f - c[v];
        f = xl(y, f, b);
      }
      if (a) {
        const g = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", y = m + c[g], b = m - c[v];
        m = xl(y, m, b);
      }
      const h = s.fn({
        ...n,
        [p]: f,
        [d]: m
      });
      return {
        ...h,
        data: {
          x: h.x - t,
          y: h.y - r
        }
      };
    }
  };
}, bb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      const {
        placement: t,
        rects: r,
        platform: i,
        elements: o
      } = n, {
        apply: a = () => {
        },
        ...s
      } = fr(e, n), l = await Za(n, s), u = Vn(t), c = Br(t), d = sr(t) === "y", {
        width: p,
        height: f
      } = r.floating;
      let m, h;
      u === "top" || u === "bottom" ? (m = u, h = c === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (h = u, m = c === "end" ? "top" : "bottom");
      const g = f - l.top - l.bottom, v = p - l.left - l.right, y = Qt(f - l[m], g), b = Qt(p - l[h], v), I = !n.middlewareData.shift;
      let w = y, S = b;
      if (d ? S = c || I ? Qt(b, v) : v : w = c || I ? Qt(y, g) : g, I && !c) {
        const E = wt(l.left, 0), D = wt(l.right, 0), _ = wt(l.top, 0), k = wt(l.bottom, 0);
        d ? S = p - 2 * (E !== 0 || D !== 0 ? E + D : wt(l.left, l.right)) : w = f - 2 * (_ !== 0 || k !== 0 ? _ + k : wt(l.top, l.bottom));
      }
      await a({
        ...n,
        availableWidth: S,
        availableHeight: w
      });
      const x = await i.getDimensions(o.floating);
      return p !== x.width || f !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $p(e) {
  const n = Nt(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const i = rn(e), o = i ? e.offsetWidth : t, a = i ? e.offsetHeight : r, s = Uo(t) !== o || Uo(r) !== a;
  return s && (t = o, r = a), {
    width: t,
    height: r,
    $: s
  };
}
function vu(e) {
  return ft(e) ? e : e.contextElement;
}
function xr(e) {
  const n = vu(e);
  if (!rn(n))
    return Ln(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = $p(n);
  let a = (o ? Uo(t.width) : t.width) / r, s = (o ? Uo(t.height) : t.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const yb = /* @__PURE__ */ Ln(0);
function Hp(e) {
  const n = Ct(e);
  return !mu() || !n.visualViewport ? yb : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function wb(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ct(e) ? !1 : n;
}
function lr(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const i = e.getBoundingClientRect(), o = vu(e);
  let a = Ln(1);
  n && (r ? ft(r) && (a = xr(r)) : a = xr(e));
  const s = wb(o, t, r) ? Hp(o) : Ln(0);
  let l = (i.left + s.x) / a.x, u = (i.top + s.y) / a.y, c = i.width / a.x, d = i.height / a.y;
  if (o) {
    const p = Ct(o), f = r && ft(r) ? Ct(r) : r;
    let m = p, h = m.frameElement;
    for (; h && r && f !== m; ) {
      const g = xr(h), v = h.getBoundingClientRect(), y = Nt(h), b = v.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x, I = v.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, d *= g.y, l += b, u += I, m = Ct(h), h = m.frameElement;
    }
  }
  return Qo({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Cb(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = bn(r), s = n ? Ba(n.floating) : !1;
  if (r === a || s && o)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ln(1);
  const c = Ln(0), d = rn(r);
  if ((d || !d && !o) && ((Hr(r) !== "body" || zi(a)) && (l = Ya(r)), rn(r))) {
    const p = lr(r);
    u = xr(r), c.x = p.x + r.clientLeft, c.y = p.y + r.clientTop;
  }
  return {
    width: t.width * u.x,
    height: t.height * u.y,
    x: t.x * u.x - l.scrollLeft * u.x + c.x,
    y: t.y * u.y - l.scrollTop * u.y + c.y
  };
}
function Ib(e) {
  return Array.from(e.getClientRects());
}
function Bp(e) {
  return lr(bn(e)).left + Ya(e).scrollLeft;
}
function xb(e) {
  const n = bn(e), t = Ya(e), r = e.ownerDocument.body, i = wt(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), o = wt(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -t.scrollLeft + Bp(e);
  const s = -t.scrollTop;
  return Nt(r).direction === "rtl" && (a += wt(n.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function Sb(e, n) {
  const t = Ct(e), r = bn(e), i = t.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    const u = mu();
    (!u || u && n === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function Eb(e, n) {
  const t = lr(e, !0, n === "fixed"), r = t.top + e.clientTop, i = t.left + e.clientLeft, o = rn(e) ? xr(e) : Ln(1), a = e.clientWidth * o.x, s = e.clientHeight * o.y, l = i * o.x, u = r * o.y;
  return {
    width: a,
    height: s,
    x: l,
    y: u
  };
}
function Lc(e, n, t) {
  let r;
  if (n === "viewport")
    r = Sb(e, t);
  else if (n === "document")
    r = xb(bn(e));
  else if (ft(n))
    r = Eb(n, t);
  else {
    const i = Hp(e);
    r = {
      ...n,
      x: n.x - i.x,
      y: n.y - i.y
    };
  }
  return Qo(r);
}
function Yp(e, n) {
  const t = _n(e);
  return t === n || !ft(t) || Or(t) ? !1 : Nt(t).position === "fixed" || Yp(t, n);
}
function Db(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = Ei(e, [], !1).filter((s) => ft(s) && Hr(s) !== "body"), i = null;
  const o = Nt(e).position === "fixed";
  let a = o ? _n(e) : e;
  for (; ft(a) && !Or(a); ) {
    const s = Nt(a), l = pu(a);
    !l && s.position === "fixed" && (i = null), (o ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || zi(a) && !l && Yp(e, a)) ? r = r.filter((c) => c !== a) : i = s, a = _n(a);
  }
  return n.set(e, r), r;
}
function Tb(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...t === "clippingAncestors" ? Ba(n) ? [] : Db(n, this._c) : [].concat(t), r], s = a[0], l = a.reduce((u, c) => {
    const d = Lc(n, c, i);
    return u.top = wt(d.top, u.top), u.right = Qt(d.right, u.right), u.bottom = Qt(d.bottom, u.bottom), u.left = wt(d.left, u.left), u;
  }, Lc(n, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Mb(e) {
  const {
    width: n,
    height: t
  } = $p(e);
  return {
    width: n,
    height: t
  };
}
function Ob(e, n, t) {
  const r = rn(n), i = bn(n), o = t === "fixed", a = lr(e, !0, o, n);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ln(0);
  if (r || !r && !o)
    if ((Hr(n) !== "body" || zi(i)) && (s = Ya(n)), r) {
      const d = lr(n, !0, o, n);
      l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
    } else i && (l.x = Bp(i));
  const u = a.left + s.scrollLeft - l.x, c = a.top + s.scrollTop - l.y;
  return {
    x: u,
    y: c,
    width: a.width,
    height: a.height
  };
}
function Ts(e) {
  return Nt(e).position === "static";
}
function Vc(e, n) {
  return !rn(e) || Nt(e).position === "fixed" ? null : n ? n(e) : e.offsetParent;
}
function Zp(e, n) {
  const t = Ct(e);
  if (Ba(e))
    return t;
  if (!rn(e)) {
    let i = _n(e);
    for (; i && !Or(i); ) {
      if (ft(i) && !Ts(i))
        return i;
      i = _n(i);
    }
    return t;
  }
  let r = Vc(e, n);
  for (; r && nb(r) && Ts(r); )
    r = Vc(r, n);
  return r && Or(r) && Ts(r) && !pu(r) ? t : r || rb(e) || t;
}
const kb = async function(e) {
  const n = this.getOffsetParent || Zp, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: Ob(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Rb(e) {
  return Nt(e).direction === "rtl";
}
const Ab = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cb,
  getDocumentElement: bn,
  getClippingRect: Tb,
  getOffsetParent: Zp,
  getElementRects: kb,
  getClientRects: Ib,
  getDimensions: Mb,
  getScale: xr,
  isElement: ft,
  isRTL: Rb
};
function Pb(e, n) {
  let t = null, r;
  const i = bn(e);
  function o() {
    var s;
    clearTimeout(r), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), o();
    const {
      left: u,
      top: c,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (s || n(), !d || !p)
      return;
    const f = uo(c), m = uo(i.clientWidth - (u + d)), h = uo(i.clientHeight - (c + p)), g = uo(u), y = {
      rootMargin: -f + "px " + -m + "px " + -h + "px " + -g + "px",
      threshold: wt(0, Qt(1, l)) || 1
    };
    let b = !0;
    function I(w) {
      const S = w[0].intersectionRatio;
      if (S !== l) {
        if (!b)
          return a();
        S ? a(!1, S) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      t = new IntersectionObserver(I, {
        ...y,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(I, y);
    }
    t.observe(e);
  }
  return a(!0), o;
}
function bu(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = vu(e), c = i || o ? [...u ? Ei(u) : [], ...Ei(n)] : [];
  c.forEach((v) => {
    i && v.addEventListener("scroll", t, {
      passive: !0
    }), o && v.addEventListener("resize", t);
  });
  const d = u && s ? Pb(u, t) : null;
  let p = -1, f = null;
  a && (f = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === u && f && (f.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(n);
    })), t();
  }), u && !l && f.observe(u), f.observe(n));
  let m, h = l ? lr(e) : null;
  l && g();
  function g() {
    const v = lr(e);
    h && (v.x !== h.x || v.y !== h.y || v.width !== h.width || v.height !== h.height) && t(), h = v, m = requestAnimationFrame(g);
  }
  return t(), () => {
    var v;
    c.forEach((y) => {
      i && y.removeEventListener("scroll", t), o && y.removeEventListener("resize", t);
    }), d == null || d(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(m);
  };
}
const Ms = Za, Fb = gb, Nb = vb, _b = mb, Lb = bb, Wc = pb, Vb = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Ab,
    ...t
  }, o = {
    ...i.platform,
    _c: r
  };
  return fb(e, n, {
    ...i,
    platform: o
  });
};
var Ao = typeof document < "u" ? Gi : Ie;
function qo(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, r, i;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t !== n.length) return !1;
      for (r = t; r-- !== 0; )
        if (!qo(e[r], n[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), t = i.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(n, i[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !qo(e[o], n[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function Xp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Gc(e, n) {
  const t = Xp(e);
  return Math.round(n * t) / t;
}
function $c(e) {
  const n = T.useRef(e);
  return Ao(() => {
    n.current = e;
  }), n;
}
function Wb(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: o,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: u
  } = e, [c, d] = T.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [p, f] = T.useState(r);
  qo(p, r) || f(r);
  const [m, h] = T.useState(null), [g, v] = T.useState(null), y = T.useCallback((R) => {
    R !== S.current && (S.current = R, h(R));
  }, []), b = T.useCallback((R) => {
    R !== x.current && (x.current = R, v(R));
  }, []), I = o || m, w = a || g, S = T.useRef(null), x = T.useRef(null), E = T.useRef(c), D = l != null, _ = $c(l), k = $c(i), F = T.useCallback(() => {
    if (!S.current || !x.current)
      return;
    const R = {
      placement: n,
      strategy: t,
      middleware: p
    };
    k.current && (R.platform = k.current), Vb(S.current, x.current, R).then((G) => {
      const O = {
        ...G,
        isPositioned: !0
      };
      A.current && !qo(E.current, O) && (E.current = O, xi.flushSync(() => {
        d(O);
      }));
    });
  }, [p, n, t, k]);
  Ao(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [u]);
  const A = T.useRef(!1);
  Ao(() => (A.current = !0, () => {
    A.current = !1;
  }), []), Ao(() => {
    if (I && (S.current = I), w && (x.current = w), I && w) {
      if (_.current)
        return _.current(I, w, F);
      F();
    }
  }, [I, w, F, _, D]);
  const N = T.useMemo(() => ({
    reference: S,
    floating: x,
    setReference: y,
    setFloating: b
  }), [y, b]), M = T.useMemo(() => ({
    reference: I,
    floating: w
  }), [I, w]), V = T.useMemo(() => {
    const R = {
      position: t,
      left: 0,
      top: 0
    };
    if (!M.floating)
      return R;
    const G = Gc(M.floating, c.x), O = Gc(M.floating, c.y);
    return s ? {
      ...R,
      transform: "translate(" + G + "px, " + O + "px)",
      ...Xp(M.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: G,
      top: O
    };
  }, [t, s, M.floating, c.x, c.y]);
  return T.useMemo(() => ({
    ...c,
    update: F,
    refs: N,
    elements: M,
    floatingStyles: V
  }), [c, F, N, M, V]);
}
const Gb = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: r,
        padding: i
      } = typeof e == "function" ? e(t) : e;
      return r && n(r) ? r.current != null ? Wc({
        element: r.current,
        padding: i
      }).fn(t) : {} : r ? Wc({
        element: r,
        padding: i
      }).fn(t) : {};
    }
  };
}, yu = (e, n) => ({
  ...Fb(e),
  options: [e, n]
}), $b = (e, n) => ({
  ...Nb(e),
  options: [e, n]
}), zp = (e, n) => ({
  ..._b(e),
  options: [e, n]
}), Hb = (e, n) => ({
  ...Lb(e),
  options: [e, n]
}), Bb = (e, n) => ({
  ...Gb(e),
  options: [e, n]
}), jp = {
  ...T
}, Yb = jp.useInsertionEffect, Zb = Yb || ((e) => e());
function Up(e) {
  const n = T.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Zb(() => {
    n.current = e;
  }), T.useCallback(function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return n.current == null ? void 0 : n.current(...r);
  }, []);
}
var Ko = typeof document < "u" ? Gi : Ie;
function El() {
  return El = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, El.apply(this, arguments);
}
let Hc = !1, Xb = 0;
const Bc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Xb++
);
function zb() {
  const [e, n] = T.useState(() => Hc ? Bc() : void 0);
  return Ko(() => {
    e == null && n(Bc());
  }, []), T.useEffect(() => {
    Hc = !0;
  }, []), e;
}
const jb = jp.useId, Jp = jb || zb;
let Di;
process.env.NODE_ENV !== "production" && (Di = /* @__PURE__ */ new Set());
function Qp() {
  for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  const i = "Floating UI: " + t.join(" ");
  if (!((e = Di) != null && e.has(i))) {
    var o;
    (o = Di) == null || o.add(i), console.warn(i);
  }
}
function Ub() {
  for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  const i = "Floating UI: " + t.join(" ");
  if (!((e = Di) != null && e.has(i))) {
    var o;
    (o = Di) == null || o.add(i), console.error(i);
  }
}
const Jb = /* @__PURE__ */ T.forwardRef(function(n, t) {
  const {
    context: {
      placement: r,
      elements: {
        floating: i
      },
      middlewareData: {
        arrow: o
      }
    },
    width: a = 14,
    height: s = 7,
    tipRadius: l = 0,
    strokeWidth: u = 0,
    staticOffset: c,
    stroke: d,
    d: p,
    style: {
      transform: f,
      ...m
    } = {},
    ...h
  } = n;
  process.env.NODE_ENV !== "production" && (t || Qp("The `ref` prop is required for `FloatingArrow`."));
  const g = Jp(), [v, y] = T.useState(!1);
  if (Ko(() => {
    if (!i) return;
    Nt(i).direction === "rtl" && y(!0);
  }, [i]), !i)
    return null;
  const b = u * 2, I = b / 2, w = a / 2 * (l / -8 + 1), S = s / 2 * l / 4, [x, E] = r.split("-"), D = !!p, _ = x === "top" || x === "bottom", k = c && E === "end" ? "bottom" : "top";
  let F = c && E === "end" ? "right" : "left";
  c && v && (F = E === "end" ? "left" : "right");
  const A = (o == null ? void 0 : o.x) != null ? c || o.x : "", N = (o == null ? void 0 : o.y) != null ? c || o.y : "", M = p || "M0,0" + (" H" + a) + (" L" + (a - w) + "," + (s - S)) + (" Q" + a / 2 + "," + s + " " + w + "," + (s - S)) + " Z", V = {
    top: D ? "rotate(180deg)" : "",
    left: D ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: D ? "" : "rotate(180deg)",
    right: D ? "rotate(-90deg)" : "rotate(90deg)"
  }[x];
  return /* @__PURE__ */ T.createElement("svg", El({}, h, {
    "aria-hidden": !0,
    ref: t,
    width: D ? a : a + b,
    height: a,
    viewBox: "0 0 " + a + " " + (s > a ? s : a),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [F]: A,
      [k]: N,
      [x]: _ || D ? "100%" : "calc(100% - " + b / 2 + "px)",
      transform: "" + V + (f ?? ""),
      ...m
    }
  }), b > 0 && /* @__PURE__ */ T.createElement("path", {
    clipPath: "url(#" + g + ")",
    fill: "none",
    stroke: d,
    strokeWidth: b + (p ? 0 : 1),
    d: M
  }), /* @__PURE__ */ T.createElement("path", {
    stroke: b && !p ? h.fill : "none",
    d: M
  }), /* @__PURE__ */ T.createElement("clipPath", {
    id: g
  }, /* @__PURE__ */ T.createElement("rect", {
    x: -I,
    y: I * (D ? -1 : 1),
    width: a + b,
    height: a
  })));
});
function Qb() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(n, t) {
      var r;
      (r = e.get(n)) == null || r.forEach((i) => i(t));
    },
    on(n, t) {
      e.set(n, [...e.get(n) || [], t]);
    },
    off(n, t) {
      var r;
      e.set(n, ((r = e.get(n)) == null ? void 0 : r.filter((i) => i !== t)) || []);
    }
  };
}
const qb = /* @__PURE__ */ T.createContext(null), Kb = /* @__PURE__ */ T.createContext(null), ey = () => {
  var e;
  return ((e = T.useContext(qb)) == null ? void 0 : e.id) || null;
}, ty = () => T.useContext(Kb);
function ny(e) {
  const {
    open: n = !1,
    onOpenChange: t,
    elements: r
  } = e, i = Jp(), o = T.useRef({}), [a] = T.useState(() => Qb()), s = ey() != null;
  if (process.env.NODE_ENV !== "production") {
    const f = r.reference;
    f && !ft(f) && Ub("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = T.useState(r.reference), c = Up((f, m, h) => {
    o.current.openEvent = f ? m : void 0, a.emit("openchange", {
      open: f,
      event: m,
      reason: h,
      nested: s
    }), t == null || t(f, m, h);
  }), d = T.useMemo(() => ({
    setPositionReference: u
  }), []), p = T.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return T.useMemo(() => ({
    dataRef: o,
    open: n,
    onOpenChange: c,
    elements: p,
    events: a,
    floatingId: i,
    refs: d
  }), [n, c, p, a, i, d]);
}
function qp(e) {
  e === void 0 && (e = {});
  const {
    nodeId: n
  } = e, t = ny({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || t, i = r.elements, [o, a] = T.useState(null), [s, l] = T.useState(null), c = (i == null ? void 0 : i.reference) || o, d = T.useRef(null), p = ty();
  Ko(() => {
    c && (d.current = c);
  }, [c]);
  const f = Wb({
    ...e,
    elements: {
      ...i,
      ...s && {
        reference: s
      }
    }
  }), m = T.useCallback((b) => {
    const I = ft(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      contextElement: b
    } : b;
    l(I), f.refs.setReference(I);
  }, [f.refs]), h = T.useCallback((b) => {
    (ft(b) || b === null) && (d.current = b, a(b)), (ft(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !ft(b)) && f.refs.setReference(b);
  }, [f.refs]), g = T.useMemo(() => ({
    ...f.refs,
    setReference: h,
    setPositionReference: m,
    domReference: d
  }), [f.refs, h, m]), v = T.useMemo(() => ({
    ...f.elements,
    domReference: c
  }), [f.elements, c]), y = T.useMemo(() => ({
    ...f,
    ...r,
    refs: g,
    elements: v,
    nodeId: n
  }), [f, g, v, n, r]);
  return Ko(() => {
    r.dataRef.current.floatingContext = y;
    const b = p == null ? void 0 : p.nodesRef.current.find((I) => I.id === n);
    b && (b.context = y);
  }), T.useMemo(() => ({
    ...f,
    context: y,
    refs: g,
    elements: v
  }), [f, g, v, y]);
}
const Yc = "active", Zc = "selected";
function Os(e, n, t) {
  const r = /* @__PURE__ */ new Map(), i = t === "item";
  let o = e;
  if (i && e) {
    const {
      [Yc]: a,
      [Zc]: s,
      ...l
    } = e;
    o = l;
  }
  return {
    ...t === "floating" && {
      tabIndex: -1
    },
    ...o,
    ...n.map((a) => {
      const s = a ? a[t] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((a, s) => (s && Object.entries(s).forEach((l) => {
      let [u, c] = l;
      if (!(i && [Yc, Zc].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var d;
            (d = r.get(u)) == null || d.push(c), a[u] = function() {
              for (var p, f = arguments.length, m = new Array(f), h = 0; h < f; h++)
                m[h] = arguments[h];
              return (p = r.get(u)) == null ? void 0 : p.map((g) => g(...m)).find((g) => g !== void 0);
            };
          }
        } else
          a[u] = c;
    }), a), {})
  };
}
function ry(e) {
  e === void 0 && (e = []);
  const n = e.map((s) => s == null ? void 0 : s.reference), t = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), i = T.useCallback(
    (s) => Os(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = T.useCallback(
    (s) => Os(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), a = T.useCallback(
    (s) => Os(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return T.useMemo(() => ({
    getReferenceProps: i,
    getFloatingProps: o,
    getItemProps: a
  }), [i, o, a]);
}
function Xc(e, n) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: n
      }
    }
  };
}
const iy = (e) => ({
  name: "inner",
  options: e,
  async fn(n) {
    const {
      listRef: t,
      overflowRef: r,
      onFallbackChange: i,
      offset: o = 0,
      index: a = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: l = 0,
      scrollRef: u,
      ...c
    } = fr(e, n), {
      rects: d,
      elements: {
        floating: p
      }
    } = n, f = t.current[a];
    if (process.env.NODE_ENV !== "production" && (n.placement.startsWith("bottom") || Qp('`placement` side must be "bottom" when using the `inner`', "middleware.")), !f)
      return {};
    const m = {
      ...n,
      ...await yu(-f.offsetTop - p.clientTop - d.reference.height / 2 - f.offsetHeight / 2 - o).fn(n)
    }, h = (u == null ? void 0 : u.current) || p, g = await Ms(Xc(m, h.scrollHeight), c), v = await Ms(m, {
      ...c,
      elementContext: "reference"
    }), y = Math.max(0, g.top), b = m.y + y, I = Math.max(0, h.scrollHeight - y - Math.max(0, g.bottom));
    return h.style.maxHeight = I + "px", h.scrollTop = y, i && (h.offsetHeight < f.offsetHeight * Math.min(s, t.current.length - 1) - 1 || v.top >= -l || v.bottom >= -l ? xi.flushSync(() => i(!0)) : xi.flushSync(() => i(!1))), r && (r.current = await Ms(Xc({
      ...m,
      y: b
    }, h.offsetHeight), c)), {
      y: b
    };
  }
});
function oy(e, n) {
  const {
    open: t,
    elements: r
  } = e, {
    enabled: i = !0,
    overflowRef: o,
    scrollRef: a,
    onChange: s
  } = n, l = Up(s), u = T.useRef(!1), c = T.useRef(null), d = T.useRef(null);
  T.useEffect(() => {
    if (!i) return;
    function f(h) {
      if (h.ctrlKey || !m || o.current == null)
        return;
      const g = h.deltaY, v = o.current.top >= -0.5, y = o.current.bottom >= -0.5, b = m.scrollHeight - m.clientHeight, I = g < 0 ? -1 : 1, w = g < 0 ? "max" : "min";
      m.scrollHeight <= m.clientHeight || (!v && g > 0 || !y && g < 0 ? (h.preventDefault(), xi.flushSync(() => {
        l((S) => S + Math[w](g, b * I));
      })) : /firefox/i.test(ib()) && (m.scrollTop += g));
    }
    const m = (a == null ? void 0 : a.current) || r.floating;
    if (t && m)
      return m.addEventListener("wheel", f), requestAnimationFrame(() => {
        c.current = m.scrollTop, o.current != null && (d.current = {
          ...o.current
        });
      }), () => {
        c.current = null, d.current = null, m.removeEventListener("wheel", f);
      };
  }, [i, t, r.floating, o, a, l]);
  const p = T.useMemo(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const f = (a == null ? void 0 : a.current) || r.floating;
      if (!(!o.current || !f || !u.current)) {
        if (c.current !== null) {
          const m = f.scrollTop - c.current;
          (o.current.bottom < -0.5 && m < -1 || o.current.top < -0.5 && m > 1) && xi.flushSync(() => l((h) => h + m));
        }
        requestAnimationFrame(() => {
          c.current = f.scrollTop;
        });
      }
    }
  }), [r.floating, l, o, a]);
  return T.useMemo(() => i ? {
    floating: p
  } : {}, [i, p]);
}
let Yr = Ve({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Yr.displayName = "FloatingContext";
let wu = Ve(null);
wu.displayName = "PlacementContext";
function Cu(e) {
  return U(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Iu() {
  return ve(Yr).setReference;
}
function Kp() {
  return ve(Yr).getReferenceProps;
}
function xu() {
  let { getFloatingProps: e, slot: n } = ve(Yr);
  return pe((...t) => Object.assign({}, e(...t), { "data-anchor": n.anchor }), [e, n]);
}
function Su(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let n = ve(wu), t = U(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (i, o) => o instanceof HTMLElement ? o.outerHTML : o : void 0)]);
  re(() => {
    n == null || n(t ?? null);
  }, [n, t]);
  let r = ve(Yr);
  return U(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let zc = 4;
function Eu({ children: e, enabled: n = !0 }) {
  let [t, r] = ae(null), [i, o] = ae(0), a = H(null), [s, l] = ae(null);
  ay(s);
  let u = n && t !== null && s !== null, { to: c = "bottom", gap: d = 0, offset: p = 0, padding: f = 0, inner: m } = sy(t, s), [h, g = "center"] = c.split(" ");
  re(() => {
    u && o(0);
  }, [u]);
  let { refs: v, floatingStyles: y, context: b } = qp({ open: u, placement: h === "selection" ? g === "center" ? "bottom" : `bottom-${g}` : g === "center" ? `${h}` : `${h}-${g}`, strategy: "absolute", transform: !1, middleware: [yu({ mainAxis: h === "selection" ? 0 : d, crossAxis: p }), $b({ padding: f }), h !== "selection" && zp({ padding: f }), h === "selection" && m ? iy({ ...m, padding: f, overflowRef: a, offset: i, minItemsVisible: zc, referenceOverflowThreshold: f, onFallbackChange(k) {
    var F, A;
    if (!k) return;
    let N = b.elements.floating;
    if (!N) return;
    let M = parseFloat(getComputedStyle(N).scrollPaddingBottom) || 0, V = Math.min(zc, N.childElementCount), R = 0, G = 0;
    for (let O of (A = (F = b.elements.floating) == null ? void 0 : F.childNodes) != null ? A : []) if (O instanceof HTMLElement) {
      let z = O.offsetTop, ue = z + O.clientHeight + M, W = N.scrollTop, se = W + N.clientHeight;
      if (z >= W && ue <= se) V--;
      else {
        G = Math.max(0, Math.min(ue, se) - Math.max(z, W)), R = O.clientHeight;
        break;
      }
    }
    V >= 1 && o((O) => {
      let z = R * V - G + M;
      return O >= z ? O : z;
    });
  } }) : null, Hb({ padding: f, apply({ availableWidth: k, availableHeight: F, elements: A }) {
    Object.assign(A.floating.style, { overflow: "auto", maxWidth: `${k}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${F}px)` });
  } })].filter(Boolean), whileElementsMounted: bu }), [I = h, w = g] = b.placement.split("-");
  h === "selection" && (I = "selection");
  let S = U(() => ({ anchor: [I, w].filter(Boolean).join(" ") }), [I, w]), x = oy(b, { overflowRef: a, onChange: o }), { getReferenceProps: E, getFloatingProps: D } = ry([x]), _ = P((k) => {
    l(k), v.setFloating(k);
  });
  return T.createElement(wu.Provider, { value: r }, T.createElement(Yr.Provider, { value: { setFloating: _, setReference: v.setReference, styles: y, getReferenceProps: E, getFloatingProps: D, slot: S } }, e));
}
function ay(e) {
  re(() => {
    if (!e) return;
    let n = new MutationObserver(() => {
      let t = window.getComputedStyle(e).maxHeight, r = parseFloat(t);
      if (isNaN(r)) return;
      let i = parseInt(t);
      isNaN(i) || r !== i && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return n.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      n.disconnect();
    };
  }, [e]);
}
function sy(e, n) {
  var t, r, i;
  let o = ks((t = e == null ? void 0 : e.gap) != null ? t : "var(--anchor-gap, 0)", n), a = ks((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", n), s = ks((i = e == null ? void 0 : e.padding) != null ? i : "var(--anchor-padding, 0)", n);
  return { ...e, gap: o, offset: a, padding: s };
}
function ks(e, n, t = void 0) {
  let r = on(), i = P((l, u) => {
    if (l == null) return [t, null];
    if (typeof l == "number") return [l, null];
    if (typeof l == "string") {
      if (!u) return [t, null];
      let c = jc(l, u);
      return [c, (d) => {
        let p = em(l);
        {
          let f = p.map((m) => window.getComputedStyle(u).getPropertyValue(m));
          r.requestAnimationFrame(function m() {
            r.nextFrame(m);
            let h = !1;
            for (let [v, y] of p.entries()) {
              let b = window.getComputedStyle(u).getPropertyValue(y);
              if (f[v] !== b) {
                f[v] = b, h = !0;
                break;
              }
            }
            if (!h) return;
            let g = jc(l, u);
            c !== g && (d(g), c = g);
          });
        }
        return r.dispose;
      }];
    }
    return [t, null];
  }), o = U(() => i(e, n)[0], [e, n]), [a = o, s] = ae();
  return re(() => {
    let [l, u] = i(e, n);
    if (s(l), !!u) return u(s);
  }, [e, n]), a;
}
function em(e) {
  let n = /var\((.*)\)/.exec(e);
  if (n) {
    let t = n[1].indexOf(",");
    if (t === -1) return [n[1]];
    let r = n[1].slice(0, t).trim(), i = n[1].slice(t + 1).trim();
    return i ? [r, ...em(i)] : [r];
  }
  return [];
}
function jc(e, n) {
  let t = document.createElement("div");
  n.appendChild(t), t.style.setProperty("margin-top", "0px", "important"), t.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(t).marginTop) || 0;
  return n.removeChild(t), r;
}
function ly({ children: e, freeze: n }) {
  let t = ea(n, e);
  return C.createElement(C.Fragment, null, t);
}
function ea(e, n) {
  let [t, r] = ae(n);
  return !e && t !== n && r(n), e ? t : n;
}
let Xa = Ve(null);
Xa.displayName = "OpenClosedContext";
var Ze = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Ze || {});
function pr() {
  return ve(Xa);
}
function za({ value: e, children: n }) {
  return C.createElement(Xa.Provider, { value: e }, n);
}
function uy({ children: e }) {
  return C.createElement(Xa.Provider, { value: null }, e);
}
function cy(e) {
  function n() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", n));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", n), n());
}
let jt = [];
cy(() => {
  function e(n) {
    if (!(n.target instanceof HTMLElement) || n.target === document.body || jt[0] === n.target) return;
    let t = n.target;
    t = t.closest(jo), jt.unshift(t ?? n.target), jt = jt.filter((r) => r != null && r.isConnected), jt.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function dy(e) {
  throw new Error("Unexpected object: " + e);
}
var J = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(J || {});
function An(e, n) {
  let t = n.resolveItems();
  if (t.length <= 0) return null;
  let r = n.resolveActiveIndex(), i = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < t.length; ++o) if (!n.resolveDisabled(t[o], o, t)) return o;
      return r;
    }
    case 1: {
      i === -1 && (i = t.length);
      for (let o = i - 1; o >= 0; --o) if (!n.resolveDisabled(t[o], o, t)) return o;
      return r;
    }
    case 2: {
      for (let o = i + 1; o < t.length; ++o) if (!n.resolveDisabled(t[o], o, t)) return o;
      return r;
    }
    case 3: {
      for (let o = t.length - 1; o >= 0; --o) if (!n.resolveDisabled(t[o], o, t)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < t.length; ++o) if (n.resolveId(t[o], o, t) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      dy(e);
  }
}
var Du = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Du || {});
function tm(e) {
  let n = P(e), t = H(!1);
  Ie(() => (t.current = !1, () => {
    t.current = !0, Yi(() => {
      t.current && n();
    });
  }), [n]);
}
function fy() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in T ? ((n) => n.useSyncExternalStore)(T)(() => () => {
  }, () => !1, () => !e) : !1;
}
function ji() {
  let e = fy(), [n, t] = T.useState(er.isHandoffComplete);
  return n && er.isHandoffComplete === !1 && t(!1), T.useEffect(() => {
    n !== !0 && t(!0);
  }, [n]), T.useEffect(() => er.handoff(), []), e ? !1 : n;
}
let nm = Ve(!1);
function py() {
  return ve(nm);
}
function Uc(e) {
  return C.createElement(nm.Provider, { value: e.force }, e.children);
}
function my(e) {
  let n = py(), t = ve(im), r = vn(e), [i, o] = ae(() => {
    var a;
    if (!n && t !== null) return (a = t.current) != null ? a : null;
    if (er.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let l = r.createElement("div");
    return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l);
  });
  return Ie(() => {
    i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i));
  }, [i, r]), Ie(() => {
    n || t !== null && o(t.current);
  }, [t, o, n]), i;
}
let rm = ze, hy = fe(function(e, n) {
  let t = e, r = H(null), i = Pe(d0((c) => {
    r.current = c;
  }), n), o = vn(r), a = my(r), [s] = ae(() => {
    var c;
    return er.isServer ? null : (c = o == null ? void 0 : o.createElement("div")) != null ? c : null;
  }), l = ve(Dl), u = ji();
  return re(() => {
    !a || !s || a.contains(s) || (s.setAttribute("data-headlessui-portal", ""), a.appendChild(s));
  }, [a, s]), re(() => {
    if (s && l) return l.register(s);
  }, [l, s]), tm(() => {
    var c;
    !a || !s || (s instanceof Node && a.contains(s) && a.removeChild(s), a.childNodes.length <= 0 && ((c = a.parentElement) == null || c.removeChild(a)));
  }), u ? !a || !s ? null : au(he({ ourProps: { ref: i }, theirProps: t, slot: {}, defaultTag: rm, name: "Portal" }), s) : null;
});
function gy(e, n) {
  let t = Pe(n), { enabled: r = !0, ...i } = e;
  return r ? C.createElement(hy, { ...i, ref: t }) : he({ ourProps: { ref: t }, theirProps: i, slot: {}, defaultTag: rm, name: "Portal" });
}
let vy = ze, im = Ve(null);
function by(e, n) {
  let { target: t, ...r } = e, i = { ref: Pe(n) };
  return C.createElement(im.Provider, { value: t }, he({ ourProps: i, theirProps: r, defaultTag: vy, name: "Popover.Group" }));
}
let Dl = Ve(null);
function yy() {
  let e = ve(Dl), n = H([]), t = P((o) => (n.current.push(o), e && e.register(o), () => r(o))), r = P((o) => {
    let a = n.current.indexOf(o);
    a !== -1 && n.current.splice(a, 1), e && e.unregister(o);
  }), i = U(() => ({ register: t, unregister: r, portals: n }), [t, r, n]);
  return [n, U(() => function({ children: o }) {
    return C.createElement(Dl.Provider, { value: i }, o);
  }, [i])];
}
let wy = fe(gy), om = fe(by), ja = Object.assign(wy, { Group: om });
var Cy = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Cy || {}), Iy = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Iy || {}), xy = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(xy || {}), Sy = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.SetActivationTrigger = 6] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", e))(Sy || {});
function Rs(e, n = (t) => t) {
  let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = n(e.options.slice()), i = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((a, s) => a.dataRef.current.order - s.dataRef.current.order) : ln(r, (a) => a.dataRef.current.domRef.current), o = t ? i.indexOf(t) : null;
  return o === -1 && (o = null), { options: i, activeOptionIndex: o };
}
let Ey = { 1(e) {
  var n;
  return (n = e.dataRef.current) != null && n.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, __demoMode: !1 };
}, 0(e) {
  var n, t;
  if ((n = e.dataRef.current) != null && n.disabled || e.comboboxState === 0) return e;
  if ((t = e.dataRef.current) != null && t.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1 };
  }
  return { ...e, comboboxState: 0, __demoMode: !1 };
}, 3(e, n) {
  return e.isTyping === n.isTyping ? e : { ...e, isTyping: n.isTyping };
}, 2(e, n) {
  var t, r, i, o, a;
  if ((t = e.dataRef.current) != null && t.disabled || (r = e.dataRef.current) != null && r.optionsRef.current && !((i = e.dataRef.current) != null && i.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: c, disabled: d } = e.virtual, p = n.focus === J.Specific ? n.idx : An(n, { resolveItems: () => c, resolveActiveIndex: () => {
      var m, h;
      return (h = (m = e.activeOptionIndex) != null ? m : c.findIndex((g) => !d(g))) != null ? h : null;
    }, resolveDisabled: d, resolveId() {
      throw new Error("Function not implemented.");
    } }), f = (o = n.trigger) != null ? o : 2;
    return e.activeOptionIndex === p && e.activationTrigger === f ? e : { ...e, activeOptionIndex: p, activationTrigger: f, isTyping: !1, __demoMode: !1 };
  }
  let s = Rs(e);
  if (s.activeOptionIndex === null) {
    let c = s.options.findIndex((d) => !d.dataRef.current.disabled);
    c !== -1 && (s.activeOptionIndex = c);
  }
  let l = n.focus === J.Specific ? n.idx : An(n, { resolveItems: () => s.options, resolveActiveIndex: () => s.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled }), u = (a = n.trigger) != null ? a : 2;
  return e.activeOptionIndex === l && e.activationTrigger === u ? e : { ...e, ...s, isTyping: !1, activeOptionIndex: l, activationTrigger: u, __demoMode: !1 };
}, 4: (e, n) => {
  var t, r, i;
  if ((t = e.dataRef.current) != null && t.virtual) return { ...e, options: [...e.options, n.payload] };
  let o = n.payload, a = Rs(e, (l) => (l.push(o), l));
  e.activeOptionIndex === null && (r = e.dataRef.current) != null && r.isSelected(n.payload.dataRef.current.value) && (a.activeOptionIndex = a.options.indexOf(o));
  let s = { ...e, ...a, activationTrigger: 2 };
  return (i = e.dataRef.current) != null && i.__demoMode && e.dataRef.current.value === void 0 && (s.activeOptionIndex = 0), s;
}, 5: (e, n) => {
  var t;
  if ((t = e.dataRef.current) != null && t.virtual) return { ...e, options: e.options.filter((i) => i.id !== n.id) };
  let r = Rs(e, (i) => {
    let o = i.findIndex((a) => a.id === n.id);
    return o !== -1 && i.splice(o, 1), i;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, n) => e.activationTrigger === n.trigger ? e : { ...e, activationTrigger: n.trigger }, 7: (e, n) => {
  var t, r;
  if (e.virtual === null) return { ...e, virtual: { options: n.options, disabled: (t = n.disabled) != null ? t : () => !1 } };
  if (e.virtual.options === n.options && e.virtual.disabled === n.disabled) return e;
  let i = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let o = n.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    o !== -1 ? i = o : i = null;
  }
  return { ...e, activeOptionIndex: i, virtual: { options: n.options, disabled: (r = n.disabled) != null ? r : () => !1 } };
} }, Tu = Ve(null);
Tu.displayName = "ComboboxActionsContext";
function Ui(e) {
  let n = ve(Tu);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ui), t;
  }
  return n;
}
let am = Ve(null);
function Dy(e) {
  let n = Zr("VirtualProvider"), { options: t } = n.virtual, [r, i] = U(() => {
    let u = n.optionsRef.current;
    if (!u) return [0, 0];
    let c = window.getComputedStyle(u);
    return [parseFloat(c.paddingBlockStart || c.paddingTop), parseFloat(c.paddingBlockEnd || c.paddingBottom)];
  }, [n.optionsRef.current]), o = P0({ enabled: t.length !== 0, scrollPaddingStart: r, scrollPaddingEnd: i, count: t.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    var u;
    return (u = n.optionsRef.current) != null ? u : null;
  }, overscan: 12 }), [a, s] = ae(0);
  re(() => {
    s((u) => u + 1);
  }, [t]);
  let l = o.getVirtualItems();
  return l.length === 0 ? null : C.createElement(am.Provider, { value: o }, C.createElement("div", { style: { position: "relative", width: "100%", height: `${o.getTotalSize()}px` }, ref: (u) => {
    if (u) {
      if (typeof process < "u" && process.env.JEST_WORKER_ID !== void 0 || n.activationTrigger === 0) return;
      n.activeOptionIndex !== null && t.length > n.activeOptionIndex && o.scrollToIndex(n.activeOptionIndex);
    }
  } }, l.map((u) => {
    var c;
    return C.createElement(ze, { key: u.key }, C.cloneElement((c = e.children) == null ? void 0 : c.call(e, { ...e.slot, option: t[u.index] }), { key: `${a}-${u.key}`, "data-index": u.index, "aria-setsize": t.length, "aria-posinset": u.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u.start}px)`, overflowAnchor: "none" } }));
  })));
}
let Ti = Ve(null);
Ti.displayName = "ComboboxDataContext";
function Zr(e) {
  let n = ve(Ti);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Zr), t;
  }
  return n;
}
function Ty(e, n) {
  return _e(n.type, Ey, e, n);
}
let My = ze;
function Oy(e, n) {
  var t, r;
  let i = Ra(), { value: o, defaultValue: a, onChange: s, form: l, name: u, by: c, disabled: d = i || !1, onClose: p, __demoMode: f = !1, multiple: m = !1, immediate: h = !1, virtual: g = null, nullable: v, ...y } = e, b = mp(a), [I = m ? [] : void 0, w] = pp(o, s, b), [S, x] = Wr(Ty, { dataRef: St(), comboboxState: f ? 0 : 1, isTyping: !1, options: [], virtual: g ? { options: g.options, disabled: (t = g.disabled) != null ? t : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, __demoMode: f }), E = H(!1), D = H({ static: !1, hold: !1 }), _ = H(null), k = H(null), F = H(null), A = Dp(c), N = P((K) => g ? c === null ? g.options.indexOf(K) : g.options.findIndex((be) => A(be, K)) : S.options.findIndex((be) => A(be.dataRef.current.value, K))), M = pe((K) => _e(R.mode, { 1: () => I.some((be) => A(be, K)), 0: () => A(I, K) }), [I]), V = P((K) => S.activeOptionIndex === N(K)), R = U(() => ({ ...S, immediate: h, optionsPropsRef: D, inputRef: _, buttonRef: k, optionsRef: F, value: I, defaultValue: b, disabled: d, mode: m ? 1 : 0, virtual: g ? S.virtual : null, get activeOptionIndex() {
    if (E.current && S.activeOptionIndex === null && (g ? g.options.length > 0 : S.options.length > 0)) {
      if (g) {
        let be = g.options.findIndex((ct) => {
          var so, Tc;
          return !((Tc = (so = g.disabled) == null ? void 0 : so.call(g, ct)) != null && Tc);
        });
        if (be !== -1) return be;
      }
      let K = S.options.findIndex((be) => !be.dataRef.current.disabled);
      if (K !== -1) return K;
    }
    return S.activeOptionIndex;
  }, calculateIndex: N, compare: A, isSelected: M, isActive: V }), [I, b, d, m, f, S, g]);
  re(() => {
    var K;
    g && x({ type: 7, options: g.options, disabled: (K = g.disabled) != null ? K : null });
  }, [g, g == null ? void 0 : g.options, g == null ? void 0 : g.disabled]), re(() => {
    S.dataRef.current = R;
  }, [R]);
  let G = R.comboboxState === 0;
  Va(G, [R.buttonRef, R.inputRef, R.optionsRef], () => $e.closeCombobox());
  let O = U(() => {
    var K, be, ct;
    return { open: R.comboboxState === 0, disabled: d, activeIndex: R.activeOptionIndex, activeOption: R.activeOptionIndex === null ? null : R.virtual ? R.virtual.options[(K = R.activeOptionIndex) != null ? K : 0] : (ct = (be = R.options[R.activeOptionIndex]) == null ? void 0 : be.dataRef.current.value) != null ? ct : null, value: I };
  }, [R, d, I]), z = P(() => {
    if (R.activeOptionIndex !== null) {
      if ($e.setIsTyping(!1), R.virtual) oe(R.virtual.options[R.activeOptionIndex]);
      else {
        let { dataRef: K } = R.options[R.activeOptionIndex];
        oe(K.current.value);
      }
      $e.goToOption(J.Specific, R.activeOptionIndex);
    }
  }), ue = P(() => {
    x({ type: 0 }), E.current = !0;
  }), W = P(() => {
    x({ type: 1 }), E.current = !1, p == null || p();
  }), se = P((K) => {
    x({ type: 3, isTyping: K });
  }), me = P((K, be, ct) => (E.current = !1, K === J.Specific ? x({ type: 2, focus: J.Specific, idx: be, trigger: ct }) : x({ type: 2, focus: K, trigger: ct }))), Oe = P((K, be) => (x({ type: 4, payload: { id: K, dataRef: be } }), () => {
    R.isActive(be.current.value) && (E.current = !0), x({ type: 5, id: K });
  })), oe = P((K) => _e(R.mode, { 0() {
    return w == null ? void 0 : w(K);
  }, 1() {
    let be = R.value.slice(), ct = be.findIndex((so) => A(so, K));
    return ct === -1 ? be.push(K) : be.splice(ct, 1), w == null ? void 0 : w(be);
  } })), We = P((K) => {
    x({ type: 6, trigger: K });
  }), $e = U(() => ({ onChange: oe, registerOption: Oe, goToOption: me, setIsTyping: se, closeCombobox: W, openCombobox: ue, setActivationTrigger: We, selectActiveOption: z }), []), [Yt, Bn] = Fa(), Ne = n === null ? {} : { ref: n }, $ = pe(() => {
    if (b !== void 0) return w == null ? void 0 : w(b);
  }, [w, b]);
  return C.createElement(Bn, { value: Yt, props: { htmlFor: (r = R.inputRef.current) == null ? void 0 : r.id }, slot: { open: R.comboboxState === 0, disabled: d } }, C.createElement(Eu, null, C.createElement(Tu.Provider, { value: $e }, C.createElement(Ti.Provider, { value: R }, C.createElement(za, { value: _e(R.comboboxState, { 0: Ze.Open, 1: Ze.Closed }) }, u != null && C.createElement(bp, { disabled: d, data: I != null ? { [u]: I } : {}, form: l, onReset: $ }), he({ ourProps: Ne, theirProps: y, slot: O, defaultTag: My, name: "Combobox" }))))));
}
let ky = "input";
function Ry(e, n) {
  var t, r, i, o, a;
  let s = Zr("Combobox.Input"), l = Ui("Combobox.Input"), u = rt(), c = lu(), { id: d = c || `headlessui-combobox-input-${u}`, onChange: p, displayValue: f, disabled: m = s.disabled || !1, autoFocus: h = !1, type: g = "text", ...v } = e, y = Pe(s.inputRef, n, Iu()), b = vn(s.inputRef), I = on(), w = P(() => {
    l.onChange(null), s.optionsRef.current && (s.optionsRef.current.scrollTop = 0), l.goToOption(J.Nothing);
  }), S = U(() => {
    var W;
    return typeof f == "function" && s.value !== void 0 ? (W = f(s.value)) != null ? W : "" : typeof s.value == "string" ? s.value : "";
  }, [s.value, f]);
  Si(([W, se], [me, Oe]) => {
    if (s.isTyping) return;
    let oe = s.inputRef.current;
    oe && ((Oe === 0 && se === 1 || W !== me) && (oe.value = W), requestAnimationFrame(() => {
      if (s.isTyping || !oe || (b == null ? void 0 : b.activeElement) !== oe) return;
      let { selectionStart: We, selectionEnd: $e } = oe;
      Math.abs(($e ?? 0) - (We ?? 0)) === 0 && We === 0 && oe.setSelectionRange(oe.value.length, oe.value.length);
    }));
  }, [S, s.comboboxState, b, s.isTyping]), Si(([W], [se]) => {
    if (W === 0 && se === 1) {
      if (s.isTyping) return;
      let me = s.inputRef.current;
      if (!me) return;
      let Oe = me.value, { selectionStart: oe, selectionEnd: We, selectionDirection: $e } = me;
      me.value = "", me.value = Oe, $e !== null ? me.setSelectionRange(oe, We, $e) : me.setSelectionRange(oe, We);
    }
  }, [s.comboboxState]);
  let x = H(!1), E = P(() => {
    x.current = !0;
  }), D = P(() => {
    I.nextFrame(() => {
      x.current = !1;
    });
  }), _ = P((W) => {
    switch (l.setIsTyping(!0), W.key) {
      case j.Enter:
        if (s.comboboxState !== 0 || x.current) return;
        if (W.preventDefault(), W.stopPropagation(), s.activeOptionIndex === null) {
          l.closeCombobox();
          return;
        }
        l.selectActiveOption(), s.mode === 0 && l.closeCombobox();
        break;
      case j.ArrowDown:
        return W.preventDefault(), W.stopPropagation(), _e(s.comboboxState, { 0: () => l.goToOption(J.Next), 1: () => l.openCombobox() });
      case j.ArrowUp:
        return W.preventDefault(), W.stopPropagation(), _e(s.comboboxState, { 0: () => l.goToOption(J.Previous), 1: () => {
          nt(() => l.openCombobox()), s.value || l.goToOption(J.Last);
        } });
      case j.Home:
        if (W.shiftKey) break;
        return W.preventDefault(), W.stopPropagation(), l.goToOption(J.First);
      case j.PageUp:
        return W.preventDefault(), W.stopPropagation(), l.goToOption(J.First);
      case j.End:
        if (W.shiftKey) break;
        return W.preventDefault(), W.stopPropagation(), l.goToOption(J.Last);
      case j.PageDown:
        return W.preventDefault(), W.stopPropagation(), l.goToOption(J.Last);
      case j.Escape:
        return s.comboboxState !== 0 ? void 0 : (W.preventDefault(), s.optionsRef.current && !s.optionsPropsRef.current.static && W.stopPropagation(), s.mode === 0 && s.value === null && w(), l.closeCombobox());
      case j.Tab:
        if (s.comboboxState !== 0) return;
        s.mode === 0 && s.activationTrigger !== 1 && l.selectActiveOption(), l.closeCombobox();
        break;
    }
  }), k = P((W) => {
    p == null || p(W), s.mode === 0 && W.target.value === "" && w(), l.openCombobox();
  }), F = P((W) => {
    var se, me, Oe;
    let oe = (se = W.relatedTarget) != null ? se : jt.find((We) => We !== W.currentTarget);
    if (!((me = s.optionsRef.current) != null && me.contains(oe)) && !((Oe = s.buttonRef.current) != null && Oe.contains(oe)) && s.comboboxState === 0) return W.preventDefault(), s.mode === 0 && s.value === null && w(), l.closeCombobox();
  }), A = P((W) => {
    var se, me, Oe;
    let oe = (se = W.relatedTarget) != null ? se : jt.find((We) => We !== W.currentTarget);
    (me = s.buttonRef.current) != null && me.contains(oe) || (Oe = s.optionsRef.current) != null && Oe.contains(oe) || s.disabled || s.immediate && s.comboboxState !== 0 && I.microTask(() => {
      nt(() => l.openCombobox()), l.setActivationTrigger(1);
    });
  }), N = Zi(), M = Cp(), { isFocused: V, focusProps: R } = Gr({ autoFocus: h }), { isHovered: G, hoverProps: O } = Bi({ isDisabled: m }), z = U(() => ({ open: s.comboboxState === 0, disabled: m, hover: G, focus: V, autofocus: h }), [s, G, V, h, m]), ue = gn({ ref: y, id: d, role: "combobox", type: g, "aria-controls": (t = s.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": s.comboboxState === 0, "aria-activedescendant": s.activeOptionIndex === null ? void 0 : s.virtual ? (r = s.options.find((W) => !W.dataRef.current.disabled && s.compare(W.dataRef.current.value, s.virtual.options[s.activeOptionIndex]))) == null ? void 0 : r.id : (i = s.options[s.activeOptionIndex]) == null ? void 0 : i.id, "aria-labelledby": N, "aria-describedby": M, "aria-autocomplete": "list", defaultValue: (a = (o = e.defaultValue) != null ? o : s.defaultValue !== void 0 ? f == null ? void 0 : f(s.defaultValue) : null) != null ? a : s.defaultValue, disabled: m || void 0, autoFocus: h, onCompositionStart: E, onCompositionEnd: D, onKeyDown: _, onChange: k, onFocus: A, onBlur: F }, R, O);
  return he({ ourProps: ue, theirProps: v, slot: z, defaultTag: ky, name: "Combobox.Input" });
}
let Ay = "button";
function Py(e, n) {
  var t;
  let r = Zr("Combobox.Button"), i = Ui("Combobox.Button"), o = Pe(r.buttonRef, n), a = rt(), { id: s = `headlessui-combobox-button-${a}`, disabled: l = r.disabled || !1, autoFocus: u = !1, ...c } = e, d = Np(r.inputRef), p = P((x) => {
    switch (x.key) {
      case j.Space:
      case j.Enter:
        x.preventDefault(), x.stopPropagation(), r.comboboxState === 1 && nt(() => i.openCombobox()), d();
        return;
      case j.ArrowDown:
        x.preventDefault(), x.stopPropagation(), r.comboboxState === 1 && (nt(() => i.openCombobox()), r.value || i.goToOption(J.First)), d();
        return;
      case j.ArrowUp:
        x.preventDefault(), x.stopPropagation(), r.comboboxState === 1 && (nt(() => i.openCombobox()), r.value || i.goToOption(J.Last)), d();
        return;
      case j.Escape:
        if (r.comboboxState !== 0) return;
        x.preventDefault(), r.optionsRef.current && !r.optionsPropsRef.current.static && x.stopPropagation(), nt(() => i.closeCombobox()), d();
        return;
      default:
        return;
    }
  }), f = P((x) => {
    x.preventDefault(), !uu(x.currentTarget) && (x.button === Du.Left && (r.comboboxState === 0 ? i.closeCombobox() : i.openCombobox()), d());
  }), m = Zi([s]), { isFocusVisible: h, focusProps: g } = Gr({ autoFocus: u }), { isHovered: v, hoverProps: y } = Bi({ isDisabled: l }), { pressed: b, pressProps: I } = ka({ disabled: l }), w = U(() => ({ open: r.comboboxState === 0, active: b || r.comboboxState === 0, disabled: l, value: r.value, hover: v, focus: h }), [r, v, h, b, l]), S = gn({ ref: o, id: s, type: Wa(e, r.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (t = r.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": r.comboboxState === 0, "aria-labelledby": m, disabled: l || void 0, autoFocus: u, onMouseDown: f, onKeyDown: p }, g, y, I);
  return he({ ourProps: S, theirProps: c, slot: w, defaultTag: Ay, name: "Combobox.Button" });
}
let Fy = "div", Ny = Ft.RenderStrategy | Ft.Static;
function _y(e, n) {
  var t, r, i;
  let o = rt(), { id: a = `headlessui-combobox-options-${o}`, hold: s = !1, anchor: l, portal: u = !1, modal: c = !0, transition: d = !1, ...p } = e, f = Zr("Combobox.Options"), m = Ui("Combobox.Options"), h = Cu(l);
  h && (u = !0);
  let [g, v] = Su(h), y = xu(), b = Pe(f.optionsRef, n, h ? g : null), I = vn(f.optionsRef), w = pr(), [S, x] = Ha(d, f.optionsRef, w !== null ? (w & Ze.Open) === Ze.Open : f.comboboxState === 0);
  Xi(S, f.inputRef, m.closeCombobox);
  let E = f.__demoMode ? !1 : c && f.comboboxState === 0;
  Ga(E, I);
  let D = f.__demoMode ? !1 : c && f.comboboxState === 0;
  Na(D, { allowed: P(() => [f.inputRef.current, f.buttonRef.current, f.optionsRef.current]) }), re(() => {
    var O;
    f.optionsPropsRef.current.static = (O = e.static) != null ? O : !1;
  }, [f.optionsPropsRef, e.static]), re(() => {
    f.optionsPropsRef.current.hold = s;
  }, [f.optionsPropsRef, s]), _p(f.comboboxState === 0, { container: f.optionsRef.current, accept(O) {
    return O.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : O.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(O) {
    O.setAttribute("role", "none");
  } });
  let _ = Zi([(t = f.buttonRef.current) == null ? void 0 : t.id]), k = U(() => ({ open: f.comboboxState === 0, option: void 0 }), [f.comboboxState]), F = P(() => {
    m.setActivationTrigger(0);
  }), A = P((O) => {
    O.preventDefault(), m.setActivationTrigger(0);
  }), N = gn(h ? y() : {}, { "aria-labelledby": _, role: "listbox", "aria-multiselectable": f.mode === 1 ? !0 : void 0, id: a, ref: b, style: { ...p.style, ...v, "--input-width": zo(f.inputRef, !0).width, "--button-width": zo(f.buttonRef, !0).width }, onWheel: f.activationTrigger === 0 ? void 0 : F, onMouseDown: A, ...$a(x) }), M = S && f.comboboxState === 1, V = ea(M, (r = f.virtual) == null ? void 0 : r.options), R = ea(M, f.value), G = P((O) => f.compare(R, O));
  if (f.virtual) {
    if (V === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(p, { children: C.createElement(Ti.Provider, { value: V !== f.virtual.options ? { ...f, virtual: { ...f.virtual, options: V } } : f }, C.createElement(Dy, { slot: k }, p.children)) });
  }
  return C.createElement(ja, { enabled: u ? e.static || S : !1 }, C.createElement(Ti.Provider, { value: f.mode === 1 ? f : { ...f, isSelected: G } }, he({ ourProps: N, theirProps: { ...p, children: C.createElement(ly, { freeze: M }, typeof p.children == "function" ? (i = p.children) == null ? void 0 : i.call(p, k) : p.children) }, slot: k, defaultTag: Fy, features: Ny, visible: S, name: "Combobox.Options" })));
}
let Ly = "div";
function Vy(e, n) {
  var t, r, i, o;
  let a = Zr("Combobox.Option"), s = Ui("Combobox.Option"), l = rt(), { id: u = `headlessui-combobox-option-${l}`, value: c, disabled: d = (i = (r = (t = a.virtual) == null ? void 0 : t.disabled) == null ? void 0 : r.call(t, c)) != null ? i : !1, order: p = null, ...f } = e, m = Np(a.inputRef), h = a.virtual ? a.activeOptionIndex === a.calculateIndex(c) : a.activeOptionIndex === null ? !1 : ((o = a.options[a.activeOptionIndex]) == null ? void 0 : o.id) === u, g = a.isSelected(c), v = H(null), y = vt({ disabled: d, value: c, domRef: v, order: p }), b = ve(am), I = Pe(n, v, b ? b.measureElement : null), w = P(() => {
    s.setIsTyping(!1), s.onChange(c);
  });
  re(() => s.registerOption(u, y), [y, u]);
  let S = H(!(a.virtual || a.__demoMode));
  re(() => {
    if (!a.virtual && !a.__demoMode) return Et().requestAnimationFrame(() => {
      S.current = !0;
    });
  }, [a.virtual, a.__demoMode]), re(() => {
    if (S.current && a.comboboxState === 0 && h && a.activationTrigger !== 0) return Et().requestAnimationFrame(() => {
      var N, M;
      (M = (N = v.current) == null ? void 0 : N.scrollIntoView) == null || M.call(N, { block: "nearest" });
    });
  }, [v, h, a.comboboxState, a.activationTrigger, a.activeOptionIndex]);
  let x = P((N) => {
    N.preventDefault(), N.button === Du.Left && (d || (w(), Pp() || requestAnimationFrame(() => m()), a.mode === 0 && s.closeCombobox()));
  }), E = P(() => {
    if (d) return s.goToOption(J.Nothing);
    let N = a.calculateIndex(c);
    s.goToOption(J.Specific, N);
  }), D = fu(), _ = P((N) => D.update(N)), k = P((N) => {
    if (!D.wasMoved(N) || d || h) return;
    let M = a.calculateIndex(c);
    s.goToOption(J.Specific, M, 0);
  }), F = P((N) => {
    D.wasMoved(N) && (d || h && (a.optionsPropsRef.current.hold || s.goToOption(J.Nothing)));
  }), A = U(() => ({ active: h, focus: h, selected: g, disabled: d }), [h, g, d]);
  return he({ ourProps: { id: u, ref: I, role: "option", tabIndex: d === !0 ? void 0 : -1, "aria-disabled": d === !0 ? !0 : void 0, "aria-selected": g, disabled: void 0, onMouseDown: x, onFocus: E, onPointerEnter: _, onMouseEnter: _, onPointerMove: k, onMouseMove: k, onPointerLeave: F, onMouseLeave: F }, theirProps: f, slot: A, defaultTag: Ly, name: "Combobox.Option" });
}
let Wy = fe(Oy), Gy = fe(Py), sm = fe(Ry), $y = Sp, lm = fe(_y), um = fe(Vy), Hy = Object.assign(Wy, { Input: sm, Button: Gy, Label: $y, Options: lm, Option: um });
function By(e, n = typeof document < "u" ? document.defaultView : null, t) {
  let r = $r(e, "escape");
  du(n, "keydown", (i) => {
    r && (i.defaultPrevented || i.key === j.Escape && t(i));
  });
}
function Yy() {
  var e;
  let [n] = ae(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [t, r] = ae((e = n == null ? void 0 : n.matches) != null ? e : !1);
  return re(() => {
    if (!n) return;
    function i(o) {
      r(o.matches);
    }
    return n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [n]), t;
}
function Zy({ defaultContainers: e = [], portals: n, mainTreeNode: t } = {}) {
  let r = vn(t), i = P(() => {
    var o, a;
    let s = [];
    for (let l of e) l !== null && (l instanceof HTMLElement ? s.push(l) : "current" in l && l.current instanceof HTMLElement && s.push(l.current));
    if (n != null && n.current) for (let l of n.current) s.push(l);
    for (let l of (o = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? o : []) l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (t && (l.contains(t) || l.contains((a = t == null ? void 0 : t.getRootNode()) == null ? void 0 : a.host)) || s.some((u) => l.contains(u)) || s.push(l));
    return s;
  });
  return { resolveContainers: i, contains: P((o) => i().some((a) => a.contains(o))) };
}
let cm = Ve(null);
function Jc({ children: e, node: n }) {
  let [t, r] = ae(null), i = dm(n ?? t);
  return C.createElement(cm.Provider, { value: i }, e, i === null && C.createElement(ar, { features: or.Hidden, ref: (o) => {
    var a, s;
    if (o) {
      for (let l of (s = (a = hn(o)) == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? s : []) if (l !== document.body && l !== document.head && l instanceof HTMLElement && l != null && l.contains(o)) {
        r(l);
        break;
      }
    }
  } }));
}
function dm(e = null) {
  var n;
  return (n = ve(cm)) != null ? n : e;
}
function Ua() {
  let e = H(!1);
  return re(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var li = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(li || {});
function Xy() {
  let e = H(0);
  return Fp(!0, "keydown", (n) => {
    n.key === "Tab" && (e.current = n.shiftKey ? 1 : 0);
  }, !0), e;
}
function fm(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let n = /* @__PURE__ */ new Set();
  for (let t of e.current) t.current instanceof HTMLElement && n.add(t.current);
  return n;
}
let zy = "div";
var zn = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(zn || {});
function jy(e, n) {
  let t = H(null), r = Pe(t, n), { initialFocus: i, initialFocusFallback: o, containers: a, features: s = 15, ...l } = e;
  ji() || (s = 0);
  let u = vn(t);
  qy(s, { ownerDocument: u });
  let c = Ky(s, { ownerDocument: u, container: t, initialFocus: i, initialFocusFallback: o });
  e1(s, { ownerDocument: u, container: t, containers: a, previousActiveElement: c });
  let d = Xy(), p = P((v) => {
    let y = t.current;
    y && ((b) => b())(() => {
      _e(d.current, { [li.Forwards]: () => {
        kt(y, Be.First, { skipElements: [v.relatedTarget, o] });
      }, [li.Backwards]: () => {
        kt(y, Be.Last, { skipElements: [v.relatedTarget, o] });
      } });
    });
  }), f = $r(!!(s & 2), "focus-trap#tab-lock"), m = on(), h = H(!1), g = { ref: r, onKeyDown(v) {
    v.key == "Tab" && (h.current = !0, m.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(v) {
    if (!(s & 4)) return;
    let y = fm(a);
    t.current instanceof HTMLElement && y.add(t.current);
    let b = v.relatedTarget;
    b instanceof HTMLElement && b.dataset.headlessuiFocusGuard !== "true" && (pm(y, b) || (h.current ? kt(t.current, _e(d.current, { [li.Forwards]: () => Be.Next, [li.Backwards]: () => Be.Previous }) | Be.WrapAround, { relativeTo: v.target }) : v.target instanceof HTMLElement && Kt(v.target)));
  } };
  return C.createElement(C.Fragment, null, f && C.createElement(ar, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: or.Focusable }), he({ ourProps: g, theirProps: l, defaultTag: zy, name: "FocusTrap" }), f && C.createElement(ar, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: p, features: or.Focusable }));
}
let Uy = fe(jy), Jy = Object.assign(Uy, { features: zn });
function Qy(e = !0) {
  let n = H(jt.slice());
  return Si(([t], [r]) => {
    r === !0 && t === !1 && Yi(() => {
      n.current.splice(0);
    }), r === !1 && t === !0 && (n.current = jt.slice());
  }, [e, jt, n]), P(() => {
    var t;
    return (t = n.current.find((r) => r != null && r.isConnected)) != null ? t : null;
  });
}
function qy(e, { ownerDocument: n }) {
  let t = !!(e & 8), r = Qy(t);
  Si(() => {
    t || (n == null ? void 0 : n.activeElement) === (n == null ? void 0 : n.body) && Kt(r());
  }, [t]), tm(() => {
    t && Kt(r());
  });
}
function Ky(e, { ownerDocument: n, container: t, initialFocus: r, initialFocusFallback: i }) {
  let o = H(null), a = $r(!!(e & 1), "focus-trap#initial-focus"), s = Ua();
  return Si(() => {
    if (e === 0) return;
    if (!a) {
      i != null && i.current && Kt(i.current);
      return;
    }
    let l = t.current;
    l && Yi(() => {
      if (!s.current) return;
      let u = n == null ? void 0 : n.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          o.current = u;
          return;
        }
      } else if (l.contains(u)) {
        o.current = u;
        return;
      }
      if (r != null && r.current) Kt(r.current);
      else {
        if (e & 16) {
          if (kt(l, Be.First | Be.AutoFocus) !== Un.Error) return;
        } else if (kt(l, Be.First) !== Un.Error) return;
        if (i != null && i.current && (Kt(i.current), (n == null ? void 0 : n.activeElement) === i.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      o.current = n == null ? void 0 : n.activeElement;
    });
  }, [i, a, e]), o;
}
function e1(e, { ownerDocument: n, container: t, containers: r, previousActiveElement: i }) {
  let o = Ua(), a = !!(e & 4);
  du(n == null ? void 0 : n.defaultView, "focus", (s) => {
    if (!a || !o.current) return;
    let l = fm(r);
    t.current instanceof HTMLElement && l.add(t.current);
    let u = i.current;
    if (!u) return;
    let c = s.target;
    c && c instanceof HTMLElement ? pm(l, c) ? (i.current = c, Kt(c)) : (s.preventDefault(), s.stopPropagation(), Kt(u)) : Kt(i.current);
  }, !0);
}
function pm(e, n) {
  for (let t of e) if (t.contains(n)) return !0;
  return !1;
}
function mm(e) {
  var n;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((n = e.as) != null ? n : gm) !== ze || C.Children.count(e.children) === 1;
}
let Ja = Ve(null);
Ja.displayName = "TransitionContext";
var t1 = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(t1 || {});
function n1() {
  let e = ve(Ja);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function r1() {
  let e = ve(Qa);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Qa = Ve(null);
Qa.displayName = "NestingContext";
function qa(e) {
  return "children" in e ? qa(e.children) : e.current.filter(({ el: n }) => n.current !== null).filter(({ state: n }) => n === "visible").length > 0;
}
function hm(e, n) {
  let t = vt(e), r = H([]), i = Ua(), o = on(), a = P((f, m = Dn.Hidden) => {
    let h = r.current.findIndex(({ el: g }) => g === f);
    h !== -1 && (_e(m, { [Dn.Unmount]() {
      r.current.splice(h, 1);
    }, [Dn.Hidden]() {
      r.current[h].state = "hidden";
    } }), o.microTask(() => {
      var g;
      !qa(r) && i.current && ((g = t.current) == null || g.call(t));
    }));
  }), s = P((f) => {
    let m = r.current.find(({ el: h }) => h === f);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: f, state: "visible" }), () => a(f, Dn.Unmount);
  }), l = H([]), u = H(Promise.resolve()), c = H({ enter: [], leave: [] }), d = P((f, m, h) => {
    l.current.splice(0), n && (n.chains.current[m] = n.chains.current[m].filter(([g]) => g !== f)), n == null || n.chains.current[m].push([f, new Promise((g) => {
      l.current.push(g);
    })]), n == null || n.chains.current[m].push([f, new Promise((g) => {
      Promise.all(c.current[m].map(([v, y]) => y)).then(() => g());
    })]), m === "enter" ? u.current = u.current.then(() => n == null ? void 0 : n.wait.current).then(() => h(m)) : h(m);
  }), p = P((f, m, h) => {
    Promise.all(c.current[m].splice(0).map(([g, v]) => v)).then(() => {
      var g;
      (g = l.current.shift()) == null || g();
    }).then(() => h(m));
  });
  return U(() => ({ children: r, register: s, unregister: a, onStart: d, onStop: p, wait: u, chains: c }), [s, a, r, d, p, c, u]);
}
let gm = ze, vm = Ft.RenderStrategy;
function i1(e, n) {
  var t, r;
  let { transition: i = !0, beforeEnter: o, afterEnter: a, beforeLeave: s, afterLeave: l, enter: u, enterFrom: c, enterTo: d, entered: p, leave: f, leaveFrom: m, leaveTo: h, ...g } = e, v = H(null), y = mm(e), b = Pe(...y ? [v, n] : n === null ? [] : [n]), I = (t = g.unmount) == null || t ? Dn.Unmount : Dn.Hidden, { show: w, appear: S, initial: x } = n1(), [E, D] = ae(w ? "visible" : "hidden"), _ = r1(), { register: k, unregister: F } = _;
  re(() => k(v), [k, v]), re(() => {
    if (I === Dn.Hidden && v.current) {
      if (w && E !== "visible") {
        D("visible");
        return;
      }
      return _e(E, { hidden: () => F(v), visible: () => k(v) });
    }
  }, [E, v, k, F, w, I]);
  let A = ji();
  re(() => {
    if (y && A && E === "visible" && v.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [v, E, A, y]);
  let N = x && !S, M = S && w && x, V = H(!1), R = hm(() => {
    V.current || (D("hidden"), F(v));
  }, _), G = P((me) => {
    V.current = !0;
    let Oe = me ? "enter" : "leave";
    R.onStart(v, Oe, (oe) => {
      oe === "enter" ? o == null || o() : oe === "leave" && (s == null || s());
    });
  }), O = P((me) => {
    let Oe = me ? "enter" : "leave";
    V.current = !1, R.onStop(v, Oe, (oe) => {
      oe === "enter" ? a == null || a() : oe === "leave" && (l == null || l());
    }), Oe === "leave" && !qa(R) && (D("hidden"), F(v));
  });
  Ie(() => {
    y && i || (G(w), O(w));
  }, [w, y, i]);
  let z = !(!i || !y || !A || N), [, ue] = Ha(z, v, w, { start: G, end: O }), W = xn({ ref: b, className: ((r = Cl(g.className, M && u, M && c, ue.enter && u, ue.enter && ue.closed && c, ue.enter && !ue.closed && d, ue.leave && f, ue.leave && !ue.closed && m, ue.leave && ue.closed && h, !ue.transition && w && p)) == null ? void 0 : r.trim()) || void 0, ...$a(ue) }), se = 0;
  return E === "visible" && (se |= Ze.Open), E === "hidden" && (se |= Ze.Closed), ue.enter && (se |= Ze.Opening), ue.leave && (se |= Ze.Closing), C.createElement(Qa.Provider, { value: R }, C.createElement(za, { value: se }, he({ ourProps: W, theirProps: g, defaultTag: gm, features: vm, visible: E === "visible", name: "Transition.Child" })));
}
function o1(e, n) {
  let { show: t, appear: r = !1, unmount: i = !0, ...o } = e, a = H(null), s = mm(e), l = Pe(...s ? [a, n] : n === null ? [] : [n]);
  ji();
  let u = pr();
  if (t === void 0 && u !== null && (t = (u & Ze.Open) === Ze.Open), t === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, d] = ae(t ? "visible" : "hidden"), p = hm(() => {
    t || d("hidden");
  }), [f, m] = ae(!0), h = H([t]);
  re(() => {
    f !== !1 && h.current[h.current.length - 1] !== t && (h.current.push(t), m(!1));
  }, [h, t]);
  let g = U(() => ({ show: t, appear: r, initial: f }), [t, r, f]);
  Xi(t, a, () => d("hidden")), re(() => {
    t ? d("visible") : !qa(p) && a.current !== null && d("hidden");
  }, [t, p]);
  let v = { unmount: i }, y = P(() => {
    var I;
    f && m(!1), (I = e.beforeEnter) == null || I.call(e);
  }), b = P(() => {
    var I;
    f && m(!1), (I = e.beforeLeave) == null || I.call(e);
  });
  return C.createElement(Qa.Provider, { value: p }, C.createElement(Ja.Provider, { value: g }, he({ ourProps: { ...v, as: ze, children: C.createElement(bm, { ref: l, ...v, ...o, beforeEnter: y, beforeLeave: b }) }, theirProps: {}, defaultTag: ze, features: vm, visible: c === "visible", name: "Transition" })));
}
function a1(e, n) {
  let t = ve(Ja) !== null, r = pr() !== null;
  return C.createElement(C.Fragment, null, !t && r ? C.createElement(Tl, { ref: n, ...e }) : C.createElement(bm, { ref: n, ...e }));
}
let Tl = fe(o1), bm = fe(i1), Mi = fe(a1), Ji = Object.assign(Tl, { Child: Mi, Root: Tl });
var s1 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(s1 || {}), l1 = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(l1 || {});
let u1 = { 0(e, n) {
  return e.titleId === n.id ? e : { ...e, titleId: n.id };
} }, Mu = Ve(null);
Mu.displayName = "DialogContext";
function Ka(e) {
  let n = ve(Mu);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ka), t;
  }
  return n;
}
function c1(e, n) {
  return _e(n.type, u1, e, n);
}
let Qc = fe(function(e, n) {
  let t = rt(), { id: r = `headlessui-dialog-${t}`, open: i, onClose: o, initialFocus: a, role: s = "dialog", autoFocus: l = !0, __demoMode: u = !1, unmount: c = !1, ...d } = e, p = H(!1);
  s = function() {
    return s === "dialog" || s === "alertdialog" ? s : (p.current || (p.current = !0, console.warn(`Invalid role [${s}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = pr();
  i === void 0 && f !== null && (i = (f & Ze.Open) === Ze.Open);
  let m = H(null), h = Pe(m, n), g = vn(m), v = i ? 0 : 1, [y, b] = Wr(c1, { titleId: null, descriptionId: null, panelRef: St() }), I = P(() => o(!1)), w = P((z) => b({ type: 0, id: z })), S = ji() ? v === 0 : !1, [x, E] = yy(), D = { get current() {
    var z;
    return (z = y.panelRef.current) != null ? z : m.current;
  } }, _ = dm(), { resolveContainers: k } = Zy({ mainTreeNode: _, portals: x, defaultContainers: [D] }), F = f !== null ? (f & Ze.Closing) === Ze.Closing : !1;
  Na(u || F ? !1 : S, { allowed: P(() => {
    var z, ue;
    return [(ue = (z = m.current) == null ? void 0 : z.closest("[data-headlessui-portal]")) != null ? ue : null];
  }), disallowed: P(() => {
    var z;
    return [(z = _ == null ? void 0 : _.closest("body > *:not(#headlessui-portal-root)")) != null ? z : null];
  }) }), Va(S, k, (z) => {
    z.preventDefault(), I();
  }), By(S, g == null ? void 0 : g.defaultView, (z) => {
    z.preventDefault(), z.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), I();
  }), Ga(u || F ? !1 : S, g, k), Xi(S, m, I);
  let [A, N] = Ip(), M = U(() => [{ dialogState: v, close: I, setTitleId: w, unmount: c }, y], [v, y, I, w, c]), V = U(() => ({ open: v === 0 }), [v]), R = { ref: h, id: r, role: s, tabIndex: -1, "aria-modal": u ? void 0 : v === 0 ? !0 : void 0, "aria-labelledby": y.titleId, "aria-describedby": A, unmount: c }, G = !Yy(), O = zn.None;
  return S && !u && (O |= zn.RestoreFocus, O |= zn.TabLock, l && (O |= zn.AutoFocus), G && (O |= zn.InitialFocus)), C.createElement(uy, null, C.createElement(Uc, { force: !0 }, C.createElement(ja, null, C.createElement(Mu.Provider, { value: M }, C.createElement(om, { target: m }, C.createElement(Uc, { force: !1 }, C.createElement(N, { slot: V }, C.createElement(E, null, C.createElement(Jy, { initialFocus: a, initialFocusFallback: m, containers: k, features: O }, C.createElement(y0, { value: I }, he({ ourProps: R, theirProps: d, slot: V, defaultTag: d1, features: f1, visible: v === 0, name: "Dialog" })))))))))));
}), d1 = "div", f1 = Ft.RenderStrategy | Ft.Static;
function p1(e, n) {
  let { transition: t = !1, open: r, ...i } = e, o = pr(), a = e.hasOwnProperty("open") || o !== null, s = e.hasOwnProperty("onClose");
  if (!a && !s) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!a) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!s) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!o && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || t) && !i.static ? C.createElement(Jc, null, C.createElement(Ji, { show: r, transition: t, unmount: i.unmount }, C.createElement(Qc, { ref: n, ...i }))) : C.createElement(Jc, null, C.createElement(Qc, { ref: n, open: r, ...i }));
}
let m1 = "div";
function h1(e, n) {
  let t = rt(), { id: r = `headlessui-dialog-panel-${t}`, transition: i = !1, ...o } = e, [{ dialogState: a, unmount: s }, l] = Ka("Dialog.Panel"), u = Pe(n, l.panelRef), c = U(() => ({ open: a === 0 }), [a]), d = P((f) => {
    f.stopPropagation();
  }), p = { ref: u, id: r, onClick: d };
  return C.createElement(i ? Mi : ze, { ...i ? { unmount: s } : {} }, he({ ourProps: p, theirProps: o, slot: c, defaultTag: m1, name: "Dialog.Panel" }));
}
let g1 = "div";
function v1(e, n) {
  let { transition: t = !1, ...r } = e, [{ dialogState: i, unmount: o }] = Ka("Dialog.Backdrop"), a = U(() => ({ open: i === 0 }), [i]), s = { ref: n, "aria-hidden": !0 };
  return C.createElement(t ? Mi : ze, { ...t ? { unmount: o } : {} }, he({ ourProps: s, theirProps: r, slot: a, defaultTag: g1, name: "Dialog.Backdrop" }));
}
let b1 = "h2";
function y1(e, n) {
  let t = rt(), { id: r = `headlessui-dialog-title-${t}`, ...i } = e, [{ dialogState: o, setTitleId: a }] = Ka("Dialog.Title"), s = Pe(n);
  Ie(() => (a(r), () => a(null)), [r, a]);
  let l = U(() => ({ open: o === 0 }), [o]);
  return he({ ourProps: { ref: s, id: r }, theirProps: i, slot: l, defaultTag: b1, name: "Dialog.Title" });
}
let w1 = fe(p1), ym = fe(h1);
fe(v1);
let wm = fe(y1), C1 = Object.assign(w1, { Panel: ym, Title: wm, Description: xp });
function I1(e, n) {
  let [t, r] = ae(e), i = vt(e);
  return re(() => r(i.current), [i, r, ...n]), t;
}
function Cm(e, n) {
  let t = H({ left: 0, top: 0 });
  if (re(() => {
    let i = n.current;
    if (!i) return;
    let o = i.getBoundingClientRect();
    o && (t.current = o);
  }, [e]), n.current == null || !e || n.current === document.activeElement) return !1;
  let r = n.current.getBoundingClientRect();
  return r.top !== t.current.top || r.left !== t.current.left;
}
let qc = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Kc(e) {
  var n, t;
  let r = (n = e.innerText) != null ? n : "", i = e.cloneNode(!0);
  if (!(i instanceof HTMLElement)) return r;
  let o = !1;
  for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), o = !0;
  let a = o ? (t = i.innerText) != null ? t : "" : r;
  return qc.test(a) && (a = a.replace(qc, "")), a;
}
function x1(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string") return n.trim();
  let t = e.getAttribute("aria-labelledby");
  if (t) {
    let r = t.split(" ").map((i) => {
      let o = document.getElementById(i);
      if (o) {
        let a = o.getAttribute("aria-label");
        return typeof a == "string" ? a.trim() : Kc(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Kc(e).trim();
}
function Im(e) {
  let n = H(""), t = H("");
  return P(() => {
    let r = e.current;
    if (!r) return "";
    let i = r.innerText;
    if (n.current === i) return t.current;
    let o = x1(r).trim().toLowerCase();
    return n.current = i, t.current = o, o;
  });
}
var S1 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(S1 || {}), E1 = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(E1 || {}), D1 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(D1 || {}), T1 = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e))(T1 || {});
function As(e, n = (t) => t) {
  let t = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = ln(n(e.options.slice()), (o) => o.dataRef.current.domRef.current), i = t ? r.indexOf(t) : null;
  return i === -1 && (i = null), { options: r, activeOptionIndex: i };
}
let M1 = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1, __demoMode: !1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let n = e.activeOptionIndex, { isSelected: t } = e.dataRef.current, r = e.options.findIndex((i) => t(i.dataRef.current.value));
  return r !== -1 && (n = r), { ...e, listboxState: 0, activeOptionIndex: n, __demoMode: !1 };
}, 2(e, n) {
  var t, r, i, o, a;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let s = { ...e, searchQuery: "", activationTrigger: (t = n.trigger) != null ? t : 1, __demoMode: !1 };
  if (n.focus === J.Nothing) return { ...s, activeOptionIndex: null };
  if (n.focus === J.Specific) return { ...s, activeOptionIndex: e.options.findIndex((c) => c.id === n.id) };
  if (n.focus === J.Previous) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, p = An(n, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.options[p].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === f.current || ((i = f.current) == null ? void 0 : i.previousElementSibling) === null) return { ...s, activeOptionIndex: p };
      }
    }
  } else if (n.focus === J.Next) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, p = An(n, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.options[p].dataRef.current.domRef;
        if (((o = d.current) == null ? void 0 : o.nextElementSibling) === f.current || ((a = f.current) == null ? void 0 : a.nextElementSibling) === null) return { ...s, activeOptionIndex: p };
      }
    }
  }
  let l = As(e), u = An(n, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...s, ...l, activeOptionIndex: u };
}, 3: (e, n) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let t = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + n.value.toLowerCase(), i = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + t).concat(e.options.slice(0, e.activeOptionIndex + t)) : e.options).find((a) => {
    var s;
    return !a.dataRef.current.disabled && ((s = a.dataRef.current.textValue) == null ? void 0 : s.startsWith(r));
  }), o = i ? e.options.indexOf(i) : -1;
  return o === -1 || o === e.activeOptionIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeOptionIndex: o, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, n) => {
  let t = { id: n.id, dataRef: n.dataRef }, r = As(e, (i) => [...i, t]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(n.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(t)), { ...e, ...r };
}, 6: (e, n) => {
  let t = As(e, (r) => {
    let i = r.findIndex((o) => o.id === n.id);
    return i !== -1 && r.splice(i, 1), r;
  });
  return { ...e, ...t, activationTrigger: 1 };
} }, Ou = Ve(null);
Ou.displayName = "ListboxActionsContext";
function es(e) {
  let n = ve(Ou);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, es), t;
  }
  return n;
}
let ts = Ve(null);
ts.displayName = "ListboxDataContext";
function Qi(e) {
  let n = ve(ts);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Qi), t;
  }
  return n;
}
function O1(e, n) {
  return _e(n.type, M1, e, n);
}
let k1 = ze;
function R1(e, n) {
  var t;
  let r = Ra(), { value: i, defaultValue: o, form: a, name: s, onChange: l, by: u, invalid: c = !1, disabled: d = r || !1, horizontal: p = !1, multiple: f = !1, __demoMode: m = !1, ...h } = e;
  const g = p ? "horizontal" : "vertical";
  let v = Pe(n), y = mp(o), [b = f ? [] : void 0, I] = pp(i, l, y), [w, S] = Wr(O1, { dataRef: St(), listboxState: m ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: !1, __demoMode: m }), x = H({ static: !1, hold: !1 }), E = H(null), D = H(null), _ = H(/* @__PURE__ */ new Map()), k = Dp(u), F = pe((Ne) => _e(A.mode, { 1: () => b.some(($) => k($, Ne)), 0: () => k(b, Ne) }), [b]), A = U(() => ({ ...w, value: b, disabled: d, invalid: c, mode: f ? 1 : 0, orientation: g, compare: k, isSelected: F, optionsPropsRef: x, buttonRef: E, optionsRef: D, listRef: _ }), [b, d, c, f, w, _]);
  re(() => {
    w.dataRef.current = A;
  }, [A]);
  let N = A.listboxState === 0;
  Va(N, [A.buttonRef, A.optionsRef], (Ne, $) => {
    var K;
    S({ type: 1 }), La($, _a.Loose) || (Ne.preventDefault(), (K = A.buttonRef.current) == null || K.focus());
  });
  let M = U(() => ({ open: A.listboxState === 0, disabled: d, invalid: c, value: b }), [A, d, b, c]), V = P((Ne) => {
    let $ = A.options.find((K) => K.id === Ne);
    $ && se($.dataRef.current.value);
  }), R = P(() => {
    if (A.activeOptionIndex !== null) {
      let { dataRef: Ne, id: $ } = A.options[A.activeOptionIndex];
      se(Ne.current.value), S({ type: 2, focus: J.Specific, id: $ });
    }
  }), G = P(() => S({ type: 0 })), O = P(() => S({ type: 1 })), z = on(), ue = P((Ne, $, K) => {
    z.dispose(), z.microTask(() => Ne === J.Specific ? S({ type: 2, focus: J.Specific, id: $, trigger: K }) : S({ type: 2, focus: Ne, trigger: K }));
  }), W = P((Ne, $) => (S({ type: 5, id: Ne, dataRef: $ }), () => S({ type: 6, id: Ne }))), se = P((Ne) => _e(A.mode, { 0() {
    return I == null ? void 0 : I(Ne);
  }, 1() {
    let $ = A.value.slice(), K = $.findIndex((be) => k(be, Ne));
    return K === -1 ? $.push(Ne) : $.splice(K, 1), I == null ? void 0 : I($);
  } })), me = P((Ne) => S({ type: 3, value: Ne })), Oe = P(() => S({ type: 4 })), oe = U(() => ({ onChange: se, registerOption: W, goToOption: ue, closeListbox: O, openListbox: G, selectActiveOption: R, selectOption: V, search: me, clearSearch: Oe }), []), [We, $e] = Fa({ inherit: !0 }), Yt = { ref: v }, Bn = pe(() => {
    if (y !== void 0) return I == null ? void 0 : I(y);
  }, [I, y]);
  return C.createElement($e, { value: We, props: { htmlFor: (t = A.buttonRef.current) == null ? void 0 : t.id }, slot: { open: A.listboxState === 0, disabled: d } }, C.createElement(Eu, null, C.createElement(Ou.Provider, { value: oe }, C.createElement(ts.Provider, { value: A }, C.createElement(za, { value: _e(A.listboxState, { 0: Ze.Open, 1: Ze.Closed }) }, s != null && b != null && C.createElement(bp, { disabled: d, data: { [s]: b }, form: a, onReset: Bn }), he({ ourProps: Yt, theirProps: h, slot: M, defaultTag: k1, name: "Listbox" }))))));
}
let A1 = "button";
function P1(e, n) {
  var t;
  let r = Qi("Listbox.Button"), i = es("Listbox.Button"), o = rt(), a = lu(), { id: s = a || `headlessui-listbox-button-${o}`, disabled: l = r.disabled || !1, autoFocus: u = !1, ...c } = e, d = Pe(r.buttonRef, n, Iu()), p = Kp(), f = P((k) => {
    switch (k.key) {
      case j.Enter:
        r0(k.currentTarget);
        break;
      case j.Space:
      case j.ArrowDown:
        k.preventDefault(), nt(() => i.openListbox()), r.value || i.goToOption(J.First);
        break;
      case j.ArrowUp:
        k.preventDefault(), nt(() => i.openListbox()), r.value || i.goToOption(J.Last);
        break;
    }
  }), m = P((k) => {
    switch (k.key) {
      case j.Space:
        k.preventDefault();
        break;
    }
  }), h = P((k) => {
    var F;
    if (uu(k.currentTarget)) return k.preventDefault();
    r.listboxState === 0 ? (nt(() => i.closeListbox()), (F = r.buttonRef.current) == null || F.focus({ preventScroll: !0 })) : (k.preventDefault(), i.openListbox());
  }), g = P((k) => k.preventDefault()), v = Zi([s]), y = Cp(), { isFocusVisible: b, focusProps: I } = Gr({ autoFocus: u }), { isHovered: w, hoverProps: S } = Bi({ isDisabled: l }), { pressed: x, pressProps: E } = ka({ disabled: l }), D = U(() => ({ open: r.listboxState === 0, active: x || r.listboxState === 0, disabled: l, invalid: r.invalid, value: r.value, hover: w, focus: b, autofocus: u }), [r.listboxState, r.value, l, w, b, x, r.invalid, u]), _ = gn(p(), { ref: d, id: s, type: Wa(e, r.buttonRef), "aria-haspopup": "listbox", "aria-controls": (t = r.optionsRef.current) == null ? void 0 : t.id, "aria-expanded": r.listboxState === 0, "aria-labelledby": v, "aria-describedby": y, disabled: l || void 0, autoFocus: u, onKeyDown: f, onKeyUp: m, onKeyPress: g, onClick: h }, I, S, E);
  return he({ ourProps: _, theirProps: c, slot: D, defaultTag: A1, name: "Listbox.Button" });
}
let xm = Ve(!1), F1 = "div", N1 = Ft.RenderStrategy | Ft.Static;
function _1(e, n) {
  var t;
  let r = rt(), { id: i = `headlessui-listbox-options-${r}`, anchor: o, portal: a = !1, modal: s = !0, transition: l = !1, ...u } = e, c = Cu(o);
  c && (a = !0);
  let d = Qi("Listbox.Options"), p = es("Listbox.Options"), f = vn(d.optionsRef), m = pr(), [h, g] = Ha(l, d.optionsRef, m !== null ? (m & Ze.Open) === Ze.Open : d.listboxState === 0);
  Xi(h, d.buttonRef, p.closeListbox);
  let v = d.__demoMode ? !1 : s && d.listboxState === 0;
  Ga(v, f);
  let y = d.__demoMode ? !1 : s && d.listboxState === 0;
  Na(y, { allowed: P(() => [d.buttonRef.current, d.optionsRef.current]) });
  let b = d.listboxState !== 0, I = Cm(b, d.buttonRef) ? !1 : h, w = h && d.listboxState === 1, S = ea(w, d.value), x = P((O) => d.compare(S, O)), E = U(() => {
    var O;
    if (c == null || !((O = c == null ? void 0 : c.to) != null && O.includes("selection"))) return null;
    let z = d.options.findIndex((ue) => x(ue.dataRef.current.value));
    return z === -1 && (z = 0), z;
  }, [c, d.options]), D = (() => {
    if (c == null) return;
    if (E === null) return { ...c, inner: void 0 };
    let O = Array.from(d.listRef.current.values());
    return { ...c, inner: { listRef: { current: O }, index: E } };
  })(), [_, k] = Su(D), F = xu(), A = Pe(d.optionsRef, n, c ? _ : null), N = on();
  Ie(() => {
    var O;
    let z = d.optionsRef.current;
    z && d.listboxState === 0 && z !== ((O = hn(z)) == null ? void 0 : O.activeElement) && (z == null || z.focus({ preventScroll: !0 }));
  }, [d.listboxState, d.optionsRef, d.optionsRef.current]);
  let M = P((O) => {
    var z, ue;
    switch (N.dispose(), O.key) {
      case j.Space:
        if (d.searchQuery !== "") return O.preventDefault(), O.stopPropagation(), p.search(O.key);
      case j.Enter:
        if (O.preventDefault(), O.stopPropagation(), d.activeOptionIndex !== null) {
          let { dataRef: W } = d.options[d.activeOptionIndex];
          p.onChange(W.current.value);
        }
        d.mode === 0 && (nt(() => p.closeListbox()), (z = d.buttonRef.current) == null || z.focus({ preventScroll: !0 }));
        break;
      case _e(d.orientation, { vertical: j.ArrowDown, horizontal: j.ArrowRight }):
        return O.preventDefault(), O.stopPropagation(), p.goToOption(J.Next);
      case _e(d.orientation, { vertical: j.ArrowUp, horizontal: j.ArrowLeft }):
        return O.preventDefault(), O.stopPropagation(), p.goToOption(J.Previous);
      case j.Home:
      case j.PageUp:
        return O.preventDefault(), O.stopPropagation(), p.goToOption(J.First);
      case j.End:
      case j.PageDown:
        return O.preventDefault(), O.stopPropagation(), p.goToOption(J.Last);
      case j.Escape:
        O.preventDefault(), O.stopPropagation(), nt(() => p.closeListbox()), (ue = d.buttonRef.current) == null || ue.focus({ preventScroll: !0 });
        return;
      case j.Tab:
        O.preventDefault(), O.stopPropagation(), nt(() => p.closeListbox()), Rp(d.buttonRef.current, O.shiftKey ? Be.Previous : Be.Next);
        break;
      default:
        O.key.length === 1 && (p.search(O.key), N.setTimeout(() => p.clearSearch(), 350));
        break;
    }
  }), V = I1(() => {
    var O;
    return (O = d.buttonRef.current) == null ? void 0 : O.id;
  }, [d.buttonRef.current]), R = U(() => ({ open: d.listboxState === 0 }), [d.listboxState]), G = gn(c ? F() : {}, { id: i, ref: A, "aria-activedescendant": d.activeOptionIndex === null || (t = d.options[d.activeOptionIndex]) == null ? void 0 : t.id, "aria-multiselectable": d.mode === 1 ? !0 : void 0, "aria-labelledby": V, "aria-orientation": d.orientation, onKeyDown: M, role: "listbox", tabIndex: d.listboxState === 0 ? 0 : void 0, style: { ...u.style, ...k, "--button-width": zo(d.buttonRef, !0).width }, ...$a(g) });
  return C.createElement(ja, { enabled: a ? e.static || h : !1 }, C.createElement(ts.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: x } }, he({ ourProps: G, theirProps: u, slot: R, defaultTag: F1, features: N1, visible: I, name: "Listbox.Options" })));
}
let L1 = "div";
function V1(e, n) {
  let t = rt(), { id: r = `headlessui-listbox-option-${t}`, disabled: i = !1, value: o, ...a } = e, s = ve(xm) === !0, l = Qi("Listbox.Option"), u = es("Listbox.Option"), c = l.activeOptionIndex !== null ? l.options[l.activeOptionIndex].id === r : !1, d = l.isSelected(o), p = H(null), f = Im(p), m = vt({ disabled: i, value: o, domRef: p, get textValue() {
    return f();
  } }), h = Pe(n, p, (E) => {
    E ? l.listRef.current.set(r, E) : l.listRef.current.delete(r);
  });
  re(() => {
    if (!l.__demoMode && l.listboxState === 0 && c && l.activationTrigger !== 0) return Et().requestAnimationFrame(() => {
      var E, D;
      (D = (E = p.current) == null ? void 0 : E.scrollIntoView) == null || D.call(E, { block: "nearest" });
    });
  }, [p, c, l.__demoMode, l.listboxState, l.activationTrigger, l.activeOptionIndex]), re(() => {
    if (!s) return u.registerOption(r, m);
  }, [m, r, s]);
  let g = P((E) => {
    var D;
    if (i) return E.preventDefault();
    u.onChange(o), l.mode === 0 && (nt(() => u.closeListbox()), (D = l.buttonRef.current) == null || D.focus({ preventScroll: !0 }));
  }), v = P(() => {
    if (i) return u.goToOption(J.Nothing);
    u.goToOption(J.Specific, r);
  }), y = fu(), b = P((E) => {
    y.update(E), !i && (c || u.goToOption(J.Specific, r, 0));
  }), I = P((E) => {
    y.wasMoved(E) && (i || c || u.goToOption(J.Specific, r, 0));
  }), w = P((E) => {
    y.wasMoved(E) && (i || c && u.goToOption(J.Nothing));
  }), S = U(() => ({ active: c, focus: c, selected: d, disabled: i, selectedOption: d && s }), [c, d, i, s]);
  return !d && s ? null : he({ ourProps: s ? {} : { id: r, ref: h, role: "option", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, "aria-selected": d, disabled: void 0, onClick: g, onFocus: v, onPointerEnter: b, onMouseEnter: b, onPointerMove: I, onMouseMove: I, onPointerLeave: w, onMouseLeave: w }, theirProps: a, slot: S, defaultTag: L1, name: "Listbox.Option" });
}
let W1 = ze;
function G1(e, n) {
  let { options: t, placeholder: r, ...i } = e, o = { ref: Pe(n) }, a = Qi("ListboxSelectedOption"), s = U(() => ({}), []), l = a.value === void 0 || a.value === null || a.mode === 1 && Array.isArray(a.value) && a.value.length === 0;
  return C.createElement(xm.Provider, { value: !0 }, he({ ourProps: o, theirProps: { ...i, children: C.createElement(C.Fragment, null, r && l ? r : t) }, slot: s, defaultTag: W1, name: "ListboxSelectedOption" }));
}
let $1 = fe(R1), Sm = fe(P1), H1 = Sp, Em = fe(_1), Dm = fe(V1), B1 = fe(G1), Y1 = Object.assign($1, { Button: Sm, Label: H1, Options: Em, Option: Dm, SelectedOption: B1 });
var Z1 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Z1 || {}), X1 = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(X1 || {}), z1 = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(z1 || {});
function Ps(e, n = (t) => t) {
  let t = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = ln(n(e.items.slice()), (o) => o.dataRef.current.domRef.current), i = t ? r.indexOf(t) : null;
  return i === -1 && (i = null), { items: r, activeItemIndex: i };
}
let j1 = { 1(e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, 0(e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
}, 2: (e, n) => {
  var t, r, i, o, a;
  if (e.menuState === 1) return e;
  let s = { ...e, searchQuery: "", activationTrigger: (t = n.trigger) != null ? t : 1, __demoMode: !1 };
  if (n.focus === J.Nothing) return { ...s, activeItemIndex: null };
  if (n.focus === J.Specific) return { ...s, activeItemIndex: e.items.findIndex((c) => c.id === n.id) };
  if (n.focus === J.Previous) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let d = e.items[c].dataRef.current.domRef, p = An(n, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.items[p].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === f.current || ((i = f.current) == null ? void 0 : i.previousElementSibling) === null) return { ...s, activeItemIndex: p };
      }
    }
  } else if (n.focus === J.Next) {
    let c = e.activeItemIndex;
    if (c !== null) {
      let d = e.items[c].dataRef.current.domRef, p = An(n, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (p !== null) {
        let f = e.items[p].dataRef.current.domRef;
        if (((o = d.current) == null ? void 0 : o.nextElementSibling) === f.current || ((a = f.current) == null ? void 0 : a.nextElementSibling) === null) return { ...s, activeItemIndex: p };
      }
    }
  }
  let l = Ps(e), u = An(n, { resolveItems: () => l.items, resolveActiveIndex: () => l.activeItemIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...s, ...l, activeItemIndex: u };
}, 3: (e, n) => {
  let t = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + n.value.toLowerCase(), i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + t).concat(e.items.slice(0, e.activeItemIndex + t)) : e.items).find((a) => {
    var s;
    return ((s = a.dataRef.current.textValue) == null ? void 0 : s.startsWith(r)) && !a.dataRef.current.disabled;
  }), o = i ? e.items.indexOf(i) : -1;
  return o === -1 || o === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: o, activationTrigger: 1 };
}, 4(e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, 5: (e, n) => {
  let t = Ps(e, (r) => [...r, { id: n.id, dataRef: n.dataRef }]);
  return { ...e, ...t };
}, 6: (e, n) => {
  let t = Ps(e, (r) => {
    let i = r.findIndex((o) => o.id === n.id);
    return i !== -1 && r.splice(i, 1), r;
  });
  return { ...e, ...t, activationTrigger: 1 };
} }, ku = Ve(null);
ku.displayName = "MenuContext";
function ns(e) {
  let n = ve(ku);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, ns), t;
  }
  return n;
}
function U1(e, n) {
  return _e(n.type, j1, e, n);
}
let J1 = ze;
function Q1(e, n) {
  let { __demoMode: t = !1, ...r } = e, i = Wr(U1, { __demoMode: t, menuState: t ? 0 : 1, buttonRef: St(), itemsRef: St(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: o, itemsRef: a, buttonRef: s }, l] = i, u = Pe(n);
  Va(o === 0, [s, a], (f, m) => {
    var h;
    l({ type: 1 }), La(m, _a.Loose) || (f.preventDefault(), (h = s.current) == null || h.focus());
  });
  let c = P(() => {
    l({ type: 1 });
  }), d = U(() => ({ open: o === 0, close: c }), [o, c]), p = { ref: u };
  return C.createElement(Eu, null, C.createElement(ku.Provider, { value: i }, C.createElement(za, { value: _e(o, { 0: Ze.Open, 1: Ze.Closed }) }, he({ ourProps: p, theirProps: r, slot: d, defaultTag: J1, name: "Menu" }))));
}
let q1 = "button";
function K1(e, n) {
  var t;
  let r = rt(), { id: i = `headlessui-menu-button-${r}`, disabled: o = !1, autoFocus: a = !1, ...s } = e, [l, u] = ns("Menu.Button"), c = Kp(), d = Pe(l.buttonRef, n, Iu()), p = P((x) => {
    switch (x.key) {
      case j.Space:
      case j.Enter:
      case j.ArrowDown:
        x.preventDefault(), x.stopPropagation(), nt(() => u({ type: 0 })), u({ type: 2, focus: J.First });
        break;
      case j.ArrowUp:
        x.preventDefault(), x.stopPropagation(), nt(() => u({ type: 0 })), u({ type: 2, focus: J.Last });
        break;
    }
  }), f = P((x) => {
    switch (x.key) {
      case j.Space:
        x.preventDefault();
        break;
    }
  }), m = P((x) => {
    var E;
    if (uu(x.currentTarget)) return x.preventDefault();
    o || (l.menuState === 0 ? (nt(() => u({ type: 1 })), (E = l.buttonRef.current) == null || E.focus({ preventScroll: !0 })) : (x.preventDefault(), u({ type: 0 })));
  }), { isFocusVisible: h, focusProps: g } = Gr({ autoFocus: a }), { isHovered: v, hoverProps: y } = Bi({ isDisabled: o }), { pressed: b, pressProps: I } = ka({ disabled: o }), w = U(() => ({ open: l.menuState === 0, active: b || l.menuState === 0, disabled: o, hover: v, focus: h, autofocus: a }), [l, v, h, b, o, a]), S = gn(c(), { ref: d, id: i, type: Wa(e, l.buttonRef), "aria-haspopup": "menu", "aria-controls": (t = l.itemsRef.current) == null ? void 0 : t.id, "aria-expanded": l.menuState === 0, disabled: o || void 0, autoFocus: a, onKeyDown: p, onKeyUp: f, onClick: m }, g, y, I);
  return he({ ourProps: S, theirProps: s, slot: w, defaultTag: q1, name: "Menu.Button" });
}
let ew = "div", tw = Ft.RenderStrategy | Ft.Static;
function nw(e, n) {
  var t, r;
  let i = rt(), { id: o = `headlessui-menu-items-${i}`, anchor: a, portal: s = !1, modal: l = !0, transition: u = !1, ...c } = e, d = Cu(a), [p, f] = ns("Menu.Items"), [m, h] = Su(d), g = xu(), v = Pe(p.itemsRef, n, d ? m : null), y = vn(p.itemsRef);
  d && (s = !0);
  let b = pr(), [I, w] = Ha(u, p.itemsRef, b !== null ? (b & Ze.Open) === Ze.Open : p.menuState === 0);
  Xi(I, p.buttonRef, () => {
    f({ type: 1 });
  });
  let S = p.__demoMode ? !1 : l && p.menuState === 0;
  Ga(S, y);
  let x = p.__demoMode ? !1 : l && p.menuState === 0;
  Na(x, { allowed: P(() => [p.buttonRef.current, p.itemsRef.current]) });
  let E = p.menuState !== 0, D = Cm(E, p.buttonRef) ? !1 : I;
  Ie(() => {
    let M = p.itemsRef.current;
    M && p.menuState === 0 && M !== (y == null ? void 0 : y.activeElement) && M.focus({ preventScroll: !0 });
  }, [p.menuState, p.itemsRef, y, p.itemsRef.current]), _p(p.menuState === 0, { container: p.itemsRef.current, accept(M) {
    return M.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : M.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(M) {
    M.setAttribute("role", "none");
  } });
  let _ = on(), k = P((M) => {
    var V, R, G;
    switch (_.dispose(), M.key) {
      case j.Space:
        if (p.searchQuery !== "") return M.preventDefault(), M.stopPropagation(), f({ type: 3, value: M.key });
      case j.Enter:
        if (M.preventDefault(), M.stopPropagation(), f({ type: 1 }), p.activeItemIndex !== null) {
          let { dataRef: O } = p.items[p.activeItemIndex];
          (R = (V = O.current) == null ? void 0 : V.domRef.current) == null || R.click();
        }
        kp(p.buttonRef.current);
        break;
      case j.ArrowDown:
        return M.preventDefault(), M.stopPropagation(), f({ type: 2, focus: J.Next });
      case j.ArrowUp:
        return M.preventDefault(), M.stopPropagation(), f({ type: 2, focus: J.Previous });
      case j.Home:
      case j.PageUp:
        return M.preventDefault(), M.stopPropagation(), f({ type: 2, focus: J.First });
      case j.End:
      case j.PageDown:
        return M.preventDefault(), M.stopPropagation(), f({ type: 2, focus: J.Last });
      case j.Escape:
        M.preventDefault(), M.stopPropagation(), nt(() => f({ type: 1 })), (G = p.buttonRef.current) == null || G.focus({ preventScroll: !0 });
        break;
      case j.Tab:
        M.preventDefault(), M.stopPropagation(), nt(() => f({ type: 1 })), Rp(p.buttonRef.current, M.shiftKey ? Be.Previous : Be.Next);
        break;
      default:
        M.key.length === 1 && (f({ type: 3, value: M.key }), _.setTimeout(() => f({ type: 4 }), 350));
        break;
    }
  }), F = P((M) => {
    switch (M.key) {
      case j.Space:
        M.preventDefault();
        break;
    }
  }), A = U(() => ({ open: p.menuState === 0 }), [p.menuState]), N = gn(d ? g() : {}, { "aria-activedescendant": p.activeItemIndex === null || (t = p.items[p.activeItemIndex]) == null ? void 0 : t.id, "aria-labelledby": (r = p.buttonRef.current) == null ? void 0 : r.id, id: o, onKeyDown: k, onKeyUp: F, role: "menu", tabIndex: p.menuState === 0 ? 0 : void 0, ref: v, style: { ...c.style, ...h, "--button-width": zo(p.buttonRef, !0).width }, ...$a(w) });
  return C.createElement(ja, { enabled: s ? e.static || I : !1 }, he({ ourProps: N, theirProps: c, slot: A, defaultTag: ew, features: tw, visible: D, name: "Menu.Items" }));
}
let rw = ze;
function iw(e, n) {
  let t = rt(), { id: r = `headlessui-menu-item-${t}`, disabled: i = !1, ...o } = e, [a, s] = ns("Menu.Item"), l = a.activeItemIndex !== null ? a.items[a.activeItemIndex].id === r : !1, u = H(null), c = Pe(n, u);
  re(() => {
    if (!a.__demoMode && a.menuState === 0 && l && a.activationTrigger !== 0) return Et().requestAnimationFrame(() => {
      var D, _;
      (_ = (D = u.current) == null ? void 0 : D.scrollIntoView) == null || _.call(D, { block: "nearest" });
    });
  }, [a.__demoMode, u, l, a.menuState, a.activationTrigger, a.activeItemIndex]);
  let d = Im(u), p = H({ disabled: i, domRef: u, get textValue() {
    return d();
  } });
  re(() => {
    p.current.disabled = i;
  }, [p, i]), re(() => (s({ type: 5, id: r, dataRef: p }), () => s({ type: 6, id: r })), [p, r]);
  let f = P(() => {
    s({ type: 1 });
  }), m = P((D) => {
    if (i) return D.preventDefault();
    s({ type: 1 }), kp(a.buttonRef.current);
  }), h = P(() => {
    if (i) return s({ type: 2, focus: J.Nothing });
    s({ type: 2, focus: J.Specific, id: r });
  }), g = fu(), v = P((D) => {
    g.update(D), !i && (l || s({ type: 2, focus: J.Specific, id: r, trigger: 0 }));
  }), y = P((D) => {
    g.wasMoved(D) && (i || l || s({ type: 2, focus: J.Specific, id: r, trigger: 0 }));
  }), b = P((D) => {
    g.wasMoved(D) && (i || l && s({ type: 2, focus: J.Nothing }));
  }), [I, w] = Fa(), [S, x] = Ip(), E = U(() => ({ active: l, focus: l, disabled: i, close: f }), [l, i, f]);
  return C.createElement(w, null, C.createElement(x, null, he({ ourProps: { id: r, ref: c, role: "menuitem", tabIndex: i === !0 ? void 0 : -1, "aria-disabled": i === !0 ? !0 : void 0, "aria-labelledby": I, "aria-describedby": S, disabled: void 0, onClick: m, onFocus: h, onPointerEnter: v, onMouseEnter: v, onPointerMove: y, onMouseMove: y, onPointerLeave: b, onMouseLeave: b }, theirProps: o, slot: E, defaultTag: rw, name: "Menu.Item" })));
}
let ow = "div";
function aw(e, n) {
  let [t, r] = Fa();
  return C.createElement(r, null, he({ ourProps: { ref: n, "aria-labelledby": t, role: "group" }, theirProps: e, slot: {}, defaultTag: ow, name: "Menu.Section" }));
}
let sw = "header";
function lw(e, n) {
  let t = rt(), { id: r = `headlessui-menu-heading-${t}`, ...i } = e, o = cu();
  re(() => o.register(r), [r, o.register]);
  let a = { id: r, ref: n, role: "presentation", ...o.props };
  return he({ ourProps: a, theirProps: i, slot: {}, defaultTag: sw, name: "Menu.Heading" });
}
let uw = "div";
function cw(e, n) {
  return he({ ourProps: { ref: n, role: "separator" }, theirProps: e, slot: {}, defaultTag: uw, name: "Menu.Separator" });
}
let dw = fe(Q1), Tm = fe(K1), Mm = fe(nw), Om = fe(iw), fw = fe(aw), pw = fe(lw), mw = fe(cw), hw = Object.assign(dw, { Button: Tm, Items: Mm, Item: Om, Section: fw, Heading: pw, Separator: mw });
function gw({ onFocus: e }) {
  let [n, t] = ae(!0), r = Ua();
  return n ? C.createElement(ar, { as: "button", type: "button", features: or.Focusable, onFocus: (i) => {
    i.preventDefault();
    let o, a = 50;
    function s() {
      if (a-- <= 0) {
        o && cancelAnimationFrame(o);
        return;
      }
      if (e()) {
        if (cancelAnimationFrame(o), !r.current) return;
        t(!1);
        return;
      }
      o = requestAnimationFrame(s);
    }
    o = requestAnimationFrame(s);
  } }) : null;
}
const km = T.createContext(null);
function vw() {
  return { groups: /* @__PURE__ */ new Map(), get(e, n) {
    var t;
    let r = this.groups.get(e);
    r || (r = /* @__PURE__ */ new Map(), this.groups.set(e, r));
    let i = (t = r.get(n)) != null ? t : 0;
    r.set(n, i + 1);
    let o = Array.from(r.keys()).indexOf(n);
    function a() {
      let s = r.get(n);
      s > 1 ? r.set(n, s - 1) : r.delete(n);
    }
    return [o, a];
  } };
}
function bw({ children: e }) {
  let n = T.useRef(vw());
  return T.createElement(km.Provider, { value: n }, e);
}
function Rm(e) {
  let n = T.useContext(km);
  if (!n) throw new Error("You must wrap your component in a <StableCollection>");
  let t = T.useId(), [r, i] = n.current.get(e, t);
  return T.useEffect(() => i, []), r;
}
var yw = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(yw || {}), ww = ((e) => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(ww || {}), Cw = ((e) => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(Cw || {});
let Iw = { 0(e, n) {
  var t;
  let r = ln(e.tabs, (c) => c.current), i = ln(e.panels, (c) => c.current), o = r.filter((c) => {
    var d;
    return !((d = c.current) != null && d.hasAttribute("disabled"));
  }), a = { ...e, tabs: r, panels: i };
  if (n.index < 0 || n.index > r.length - 1) {
    let c = _e(Math.sign(n.index - e.selectedIndex), { [-1]: () => 1, 0: () => _e(Math.sign(n.index), { [-1]: () => 0, 0: () => 0, 1: () => 1 }), 1: () => 0 });
    if (o.length === 0) return a;
    let d = _e(c, { 0: () => r.indexOf(o[0]), 1: () => r.indexOf(o[o.length - 1]) });
    return { ...a, selectedIndex: d === -1 ? e.selectedIndex : d };
  }
  let s = r.slice(0, n.index), l = [...r.slice(n.index), ...s].find((c) => o.includes(c));
  if (!l) return a;
  let u = (t = r.indexOf(l)) != null ? t : e.selectedIndex;
  return u === -1 && (u = e.selectedIndex), { ...a, selectedIndex: u };
}, 1(e, n) {
  if (e.tabs.includes(n.tab)) return e;
  let t = e.tabs[e.selectedIndex], r = ln([...e.tabs, n.tab], (o) => o.current), i = e.selectedIndex;
  return e.info.current.isControlled || (i = r.indexOf(t), i === -1 && (i = e.selectedIndex)), { ...e, tabs: r, selectedIndex: i };
}, 2(e, n) {
  return { ...e, tabs: e.tabs.filter((t) => t !== n.tab) };
}, 3(e, n) {
  return e.panels.includes(n.panel) ? e : { ...e, panels: ln([...e.panels, n.panel], (t) => t.current) };
}, 4(e, n) {
  return { ...e, panels: e.panels.filter((t) => t !== n.panel) };
} }, Ru = Ve(null);
Ru.displayName = "TabsDataContext";
function kr(e) {
  let n = ve(Ru);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, kr), t;
  }
  return n;
}
let Au = Ve(null);
Au.displayName = "TabsActionsContext";
function Pu(e) {
  let n = ve(Au);
  if (n === null) {
    let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Pu), t;
  }
  return n;
}
function xw(e, n) {
  return _e(n.type, Iw, e, n);
}
let Sw = "div";
function Ew(e, n) {
  let { defaultIndex: t = 0, vertical: r = !1, manual: i = !1, onChange: o, selectedIndex: a = null, ...s } = e;
  const l = r ? "vertical" : "horizontal", u = i ? "manual" : "auto";
  let c = a !== null, d = vt({ isControlled: c }), p = Pe(n), [f, m] = Wr(xw, { info: d, selectedIndex: a ?? t, tabs: [], panels: [] }), h = U(() => ({ selectedIndex: f.selectedIndex }), [f.selectedIndex]), g = vt(o || (() => {
  })), v = vt(f.tabs), y = U(() => ({ orientation: l, activation: u, ...f }), [l, u, f]), b = P((D) => (m({ type: 1, tab: D }), () => m({ type: 2, tab: D }))), I = P((D) => (m({ type: 3, panel: D }), () => m({ type: 4, panel: D }))), w = P((D) => {
    S.current !== D && g.current(D), c || m({ type: 0, index: D });
  }), S = vt(c ? e.selectedIndex : f.selectedIndex), x = U(() => ({ registerTab: b, registerPanel: I, change: w }), []);
  re(() => {
    m({ type: 0, index: a ?? t });
  }, [a]), re(() => {
    if (S.current === void 0 || f.tabs.length <= 0) return;
    let D = ln(f.tabs, (_) => _.current);
    D.some((_, k) => f.tabs[k] !== _) && w(D.indexOf(f.tabs[S.current]));
  });
  let E = { ref: p };
  return C.createElement(bw, null, C.createElement(Au.Provider, { value: x }, C.createElement(Ru.Provider, { value: y }, y.tabs.length <= 0 && C.createElement(gw, { onFocus: () => {
    var D, _;
    for (let k of v.current) if (((D = k.current) == null ? void 0 : D.tabIndex) === 0) return (_ = k.current) == null || _.focus(), !0;
    return !1;
  } }), he({ ourProps: E, theirProps: s, slot: h, defaultTag: Sw, name: "Tabs" }))));
}
let Dw = "div";
function Tw(e, n) {
  let { orientation: t, selectedIndex: r } = kr("Tab.List"), i = Pe(n), o = U(() => ({ selectedIndex: r }), [r]);
  return he({ ourProps: { ref: i, role: "tablist", "aria-orientation": t }, theirProps: e, slot: o, defaultTag: Dw, name: "Tabs.List" });
}
let Mw = "button";
function Ow(e, n) {
  var t, r;
  let i = rt(), { id: o = `headlessui-tabs-tab-${i}`, disabled: a = !1, autoFocus: s = !1, ...l } = e, { orientation: u, activation: c, selectedIndex: d, tabs: p, panels: f } = kr("Tab"), m = Pu("Tab"), h = kr("Tab"), g = H(null), v = Pe(g, n);
  re(() => m.registerTab(g), [m, g]);
  let y = Rm("tabs"), b = p.indexOf(g);
  b === -1 && (b = y);
  let I = b === d, w = P((G) => {
    var O;
    let z = G();
    if (z === Un.Success && c === "auto") {
      let ue = (O = hn(g)) == null ? void 0 : O.activeElement, W = h.tabs.findIndex((se) => se.current === ue);
      W !== -1 && m.change(W);
    }
    return z;
  }), S = P((G) => {
    let O = p.map((z) => z.current).filter(Boolean);
    if (G.key === j.Space || G.key === j.Enter) {
      G.preventDefault(), G.stopPropagation(), m.change(b);
      return;
    }
    switch (G.key) {
      case j.Home:
      case j.PageUp:
        return G.preventDefault(), G.stopPropagation(), w(() => kt(O, Be.First));
      case j.End:
      case j.PageDown:
        return G.preventDefault(), G.stopPropagation(), w(() => kt(O, Be.Last));
    }
    if (w(() => _e(u, { vertical() {
      return G.key === j.ArrowUp ? kt(O, Be.Previous | Be.WrapAround) : G.key === j.ArrowDown ? kt(O, Be.Next | Be.WrapAround) : Un.Error;
    }, horizontal() {
      return G.key === j.ArrowLeft ? kt(O, Be.Previous | Be.WrapAround) : G.key === j.ArrowRight ? kt(O, Be.Next | Be.WrapAround) : Un.Error;
    } })) === Un.Success) return G.preventDefault();
  }), x = H(!1), E = P(() => {
    var G;
    x.current || (x.current = !0, (G = g.current) == null || G.focus({ preventScroll: !0 }), m.change(b), Yi(() => {
      x.current = !1;
    }));
  }), D = P((G) => {
    G.preventDefault();
  }), { isFocusVisible: _, focusProps: k } = Gr({ autoFocus: s }), { isHovered: F, hoverProps: A } = Bi({ isDisabled: a }), { pressed: N, pressProps: M } = ka({ disabled: a }), V = U(() => ({ selected: I, hover: F, active: N, focus: _, autofocus: s, disabled: a }), [I, F, _, N, s, a]), R = gn({ ref: v, onKeyDown: S, onMouseDown: D, onClick: E, id: o, role: "tab", type: Wa(e, g), "aria-controls": (r = (t = f[b]) == null ? void 0 : t.current) == null ? void 0 : r.id, "aria-selected": I, tabIndex: I ? 0 : -1, disabled: a || void 0, autoFocus: s }, k, A, M);
  return he({ ourProps: R, theirProps: l, slot: V, defaultTag: Mw, name: "Tabs.Tab" });
}
let kw = "div";
function Rw(e, n) {
  let { selectedIndex: t } = kr("Tab.Panels"), r = Pe(n), i = U(() => ({ selectedIndex: t }), [t]);
  return he({ ourProps: { ref: r }, theirProps: e, slot: i, defaultTag: kw, name: "Tabs.Panels" });
}
let Aw = "div", Pw = Ft.RenderStrategy | Ft.Static;
function Fw(e, n) {
  var t, r, i, o;
  let a = rt(), { id: s = `headlessui-tabs-panel-${a}`, tabIndex: l = 0, ...u } = e, { selectedIndex: c, tabs: d, panels: p } = kr("Tab.Panel"), f = Pu("Tab.Panel"), m = H(null), h = Pe(m, n);
  re(() => f.registerPanel(m), [f, m]);
  let g = Rm("panels"), v = p.indexOf(m);
  v === -1 && (v = g);
  let y = v === c, { isFocusVisible: b, focusProps: I } = Gr(), w = U(() => ({ selected: y, focus: b }), [y, b]), S = gn({ ref: h, id: s, role: "tabpanel", "aria-labelledby": (r = (t = d[v]) == null ? void 0 : t.current) == null ? void 0 : r.id, tabIndex: y ? l : -1 }, I);
  return !y && ((i = u.unmount) == null || i) && !((o = u.static) != null && o) ? C.createElement(ar, { "aria-hidden": "true", ...S }) : he({ ourProps: S, theirProps: u, slot: w, defaultTag: Aw, features: Pw, visible: y, name: "Tabs.Panel" });
}
let Nw = fe(Ow), Am = fe(Ew), Pm = fe(Tw), Fm = fe(Rw), Nm = fe(Fw), _w = Object.assign(Nw, { Group: Am, List: Pm, Panels: Fm, Panel: Nm });
function FR({
  isOpen: e = !1,
  openHandler: n,
  actionHandler: t,
  loader: r = !1,
  title: i = "Confirm",
  description: o = "Are you sure you want to do this action?",
  cancelText: a = "Cancel",
  confirmText: s = "Submit"
}) {
  return /* @__PURE__ */ L(Kn, { children: /* @__PURE__ */ L(Ji, { show: e, children: /* @__PURE__ */ ce(
    C1,
    {
      onClose: () => !r && n(!1),
      className: "relative z-50",
      children: [
        /* @__PURE__ */ L(
          Mi,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ L("div", { className: "fixed inset-0 bg-black/30" })
          }
        ),
        /* @__PURE__ */ L(
          Mi,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ L("div", { className: "fixed inset-0 flex items-center justify-center w-screen p-4 cds-body-md", children: /* @__PURE__ */ ce(ym, { className: "max-w-lg p-8 space-y-6 bg-white rounded-lg", children: [
              /* @__PURE__ */ L(wm, { className: "cds-heading-sm", children: i }),
              /* @__PURE__ */ L(xp, { className: "cds-body-sm", children: o }),
              /* @__PURE__ */ L("div", { className: "flex items-center justify-end gap-4" })
            ] }) })
          }
        )
      ]
    }
  ) }) });
}
function Lw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _m = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var n = {}.hasOwnProperty;
    function t() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (o = i(o, r(s)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return t.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var s in o)
        n.call(o, s) && o[s] && (a = i(a, s));
      return a;
    }
    function i(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
  })();
})(_m);
var Vw = _m.exports;
const He = /* @__PURE__ */ Lw(Vw);
function Ww({
  classname: e = "",
  backdrop: n = !1,
  appearance: t = "grayscale"
}) {
  return /* @__PURE__ */ L(Kn, { children: n ? /* @__PURE__ */ L("div", { className: "absolute inset-0 z-20 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ L(
    "div",
    {
      className: He(
        "!z-50 h-full flex items-center justify-center",
        e
      ),
      children: /* @__PURE__ */ ce(
        "svg",
        {
          role: "status",
          className: He(
            "inline animate-spin mr-2 text-gray-200",
            `fill-${t}-400`,
            "w-14 h-14"
          ),
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ L(
              "path",
              {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
              }
            ),
            /* @__PURE__ */ L(
              "path",
              {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
              }
            )
          ]
        }
      )
    }
  ) }) : /* @__PURE__ */ L(
    "div",
    {
      className: He(
        "!z-50 h-full flex items-center justify-center"
      ),
      children: /* @__PURE__ */ ce(
        "svg",
        {
          role: "status",
          className: He(
            "inline animate-spin mr-2 text-gray-200",
            `fill-${t}-400`,
            "w-4 h-4 md:h-5 md:w-5",
            e
          ),
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ L(
              "path",
              {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor"
              }
            ),
            /* @__PURE__ */ L(
              "path",
              {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill"
              }
            )
          ]
        }
      )
    }
  ) });
}
const Gw = "Not available";
var $w = Object.defineProperty, Hw = (e, n) => {
  for (var t in n)
    $w(e, t, { get: n[t], enumerable: !0 });
}, Rr = {};
Hw(Rr, {
  assign: () => zw,
  colors: () => Pn,
  createStringInterpolator: () => Gu,
  skipAnimation: () => Bm,
  to: () => Hm,
  willAdvance: () => $u
});
var Fu = Ki(), Ce = (e) => qi(e, Fu), Nu = Ki();
Ce.write = (e) => qi(e, Nu);
var rs = Ki();
Ce.onStart = (e) => qi(e, rs);
var _u = Ki();
Ce.onFrame = (e) => qi(e, _u);
var Lu = Ki();
Ce.onFinish = (e) => qi(e, Lu);
var Sr = [];
Ce.setTimeout = (e, n) => {
  const t = Ce.now() + n, r = () => {
    const o = Sr.findIndex((a) => a.cancel == r);
    ~o && Sr.splice(o, 1), Mn -= ~o ? 1 : 0;
  }, i = { time: t, handler: e, cancel: r };
  return Sr.splice(Lm(t), 0, i), Mn += 1, Vm(), i;
};
var Lm = (e) => ~(~Sr.findIndex((n) => n.time > e) || ~Sr.length);
Ce.cancel = (e) => {
  rs.delete(e), _u.delete(e), Lu.delete(e), Fu.delete(e), Nu.delete(e);
};
Ce.sync = (e) => {
  Ml = !0, Ce.batchedUpdates(e), Ml = !1;
};
Ce.throttle = (e) => {
  let n;
  function t() {
    try {
      e(...n);
    } finally {
      n = null;
    }
  }
  function r(...i) {
    n = i, Ce.onStart(t);
  }
  return r.handler = e, r.cancel = () => {
    rs.delete(t), n = null;
  }, r;
};
var Vu = typeof window < "u" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
Ce.use = (e) => Vu = e;
Ce.now = typeof performance < "u" ? () => performance.now() : Date.now;
Ce.batchedUpdates = (e) => e();
Ce.catch = console.error;
Ce.frameLoop = "always";
Ce.advance = () => {
  Ce.frameLoop !== "demand" ? console.warn(
    "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
  ) : Gm();
};
var Tn = -1, Mn = 0, Ml = !1;
function qi(e, n) {
  Ml ? (n.delete(e), e(0)) : (n.add(e), Vm());
}
function Vm() {
  Tn < 0 && (Tn = 0, Ce.frameLoop !== "demand" && Vu(Wm));
}
function Bw() {
  Tn = -1;
}
function Wm() {
  ~Tn && (Vu(Wm), Ce.batchedUpdates(Gm));
}
function Gm() {
  const e = Tn;
  Tn = Ce.now();
  const n = Lm(Tn);
  if (n && ($m(Sr.splice(0, n), (t) => t.handler()), Mn -= n), !Mn) {
    Bw();
    return;
  }
  rs.flush(), Fu.flush(e ? Math.min(64, Tn - e) : 16.667), _u.flush(), Nu.flush(), Lu.flush();
}
function Ki() {
  let e = /* @__PURE__ */ new Set(), n = e;
  return {
    add(t) {
      Mn += n == e && !e.has(t) ? 1 : 0, e.add(t);
    },
    delete(t) {
      return Mn -= n == e && e.has(t) ? 1 : 0, e.delete(t);
    },
    flush(t) {
      n.size && (e = /* @__PURE__ */ new Set(), Mn -= n.size, $m(n, (r) => r(t) && e.add(r)), Mn += e.size, n = e);
    }
  };
}
function $m(e, n) {
  e.forEach((t) => {
    try {
      n(t);
    } catch (r) {
      Ce.catch(r);
    }
  });
}
function Yw() {
}
var Zw = (e, n, t) => Object.defineProperty(e, n, { value: t, writable: !0, configurable: !0 }), Le = {
  arr: Array.isArray,
  obj: (e) => !!e && e.constructor.name === "Object",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0
};
function Xw(e, n) {
  if (Le.arr(e)) {
    if (!Le.arr(n) || e.length !== n.length)
      return !1;
    for (let t = 0; t < e.length; t++)
      if (e[t] !== n[t])
        return !1;
    return !0;
  }
  return e === n;
}
var gt = (e, n) => e.forEach(n);
function ta(e, n, t) {
  if (Le.arr(e)) {
    for (let r = 0; r < e.length; r++)
      n.call(t, e[r], `${r}`);
    return;
  }
  for (const r in e)
    e.hasOwnProperty(r) && n.call(t, e[r], r);
}
var ui = (e) => Le.und(e) ? [] : Le.arr(e) ? e : [e], Wu = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Gu, Hm, Pn = null, Bm = !1, $u = Yw, zw = (e) => {
  e.to && (Hm = e.to), e.now && (Ce.now = e.now), e.colors !== void 0 && (Pn = e.colors), e.skipAnimation != null && (Bm = e.skipAnimation), e.createStringInterpolator && (Gu = e.createStringInterpolator), e.requestAnimationFrame && Ce.use(e.requestAnimationFrame), e.batchedUpdates && (Ce.batchedUpdates = e.batchedUpdates), e.willAdvance && ($u = e.willAdvance), e.frameLoop && (Ce.frameLoop = e.frameLoop);
}, bi = /* @__PURE__ */ new Set(), Rt = [], Fs = [], na = 0, Hu = {
  get idle() {
    return !bi.size && !Rt.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(e) {
    na > e.priority ? (bi.add(e), Ce.onStart(jw)) : (Ym(e), Ce(Ol));
  },
  /** Advance all animations by the given time. */
  advance: Ol,
  /** Call this when an animation's priority changes. */
  sort(e) {
    if (na)
      Ce.onFrame(() => Hu.sort(e));
    else {
      const n = Rt.indexOf(e);
      ~n && (Rt.splice(n, 1), Zm(e));
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    Rt = [], bi.clear();
  }
};
function jw() {
  bi.forEach(Ym), bi.clear(), Ce(Ol);
}
function Ym(e) {
  Rt.includes(e) || Zm(e);
}
function Zm(e) {
  Rt.splice(
    Uw(Rt, (n) => n.priority > e.priority),
    0,
    e
  );
}
function Ol(e) {
  const n = Fs;
  for (let t = 0; t < Rt.length; t++) {
    const r = Rt[t];
    na = r.priority, r.idle || ($u(r), r.advance(e), r.idle || n.push(r));
  }
  return na = 0, Fs = Rt, Fs.length = 0, Rt = n, Rt.length > 0;
}
function Uw(e, n) {
  const t = e.findIndex(n);
  return t < 0 ? e.length : t;
}
var Jw = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Wt = "[-+]?\\d*\\.?\\d+", ra = Wt + "%";
function is(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Qw = new RegExp("rgb" + is(Wt, Wt, Wt)), qw = new RegExp("rgba" + is(Wt, Wt, Wt, Wt)), Kw = new RegExp("hsl" + is(Wt, ra, ra)), eC = new RegExp(
  "hsla" + is(Wt, ra, ra, Wt)
), tC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, nC = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, rC = /^#([0-9a-fA-F]{6})$/, iC = /^#([0-9a-fA-F]{8})$/;
function oC(e) {
  let n;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = rC.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : Pn && Pn[e] !== void 0 ? Pn[e] : (n = Qw.exec(e)) ? (gr(n[1]) << 24 | // r
  gr(n[2]) << 16 | // g
  gr(n[3]) << 8 | // b
  255) >>> // a
  0 : (n = qw.exec(e)) ? (gr(n[1]) << 24 | // r
  gr(n[2]) << 16 | // g
  gr(n[3]) << 8 | // b
  nd(n[4])) >>> // a
  0 : (n = tC.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (n = iC.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = nC.exec(e)) ? parseInt(
    n[1] + n[1] + // r
    n[2] + n[2] + // g
    n[3] + n[3] + // b
    n[4] + n[4],
    // a
    16
  ) >>> 0 : (n = Kw.exec(e)) ? (ed(
    td(n[1]),
    // h
    co(n[2]),
    // s
    co(n[3])
    // l
  ) | 255) >>> // a
  0 : (n = eC.exec(e)) ? (ed(
    td(n[1]),
    // h
    co(n[2]),
    // s
    co(n[3])
    // l
  ) | nd(n[4])) >>> // a
  0 : null;
}
function Ns(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * 6 * t : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function ed(e, n, t) {
  const r = t < 0.5 ? t * (1 + n) : t + n - t * n, i = 2 * t - r, o = Ns(i, r, e + 1 / 3), a = Ns(i, r, e), s = Ns(i, r, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(a * 255) << 16 | Math.round(s * 255) << 8;
}
function gr(e) {
  const n = parseInt(e, 10);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}
function td(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function nd(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 1 ? 255 : Math.round(n * 255);
}
function co(e) {
  const n = parseFloat(e);
  return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
function rd(e) {
  let n = oC(e);
  if (n === null)
    return e;
  n = n || 0;
  const t = (n & 4278190080) >>> 24, r = (n & 16711680) >>> 16, i = (n & 65280) >>> 8, o = (n & 255) / 255;
  return `rgba(${t}, ${r}, ${i}, ${o})`;
}
var Oi = (e, n, t) => {
  if (Le.fun(e))
    return e;
  if (Le.arr(e))
    return Oi({
      range: e,
      output: n,
      extrapolate: t
    });
  if (Le.str(e.output[0]))
    return Gu(e);
  const r = e, i = r.output, o = r.range || [0, 1], a = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", l = r.easing || ((u) => u);
  return (u) => {
    const c = sC(u, o);
    return aC(
      u,
      o[c],
      o[c + 1],
      i[c],
      i[c + 1],
      l,
      a,
      s,
      r.map
    );
  };
};
function aC(e, n, t, r, i, o, a, s, l) {
  let u = l ? l(e) : e;
  if (u < n) {
    if (a === "identity")
      return u;
    a === "clamp" && (u = n);
  }
  if (u > t) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = t);
  }
  return r === i ? r : n === t ? e <= n ? r : i : (n === -1 / 0 ? u = -u : t === 1 / 0 ? u = u - n : u = (u - n) / (t - n), u = o(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + r : u = u * (i - r) + r, u);
}
function sC(e, n) {
  for (var t = 1; t < n.length - 1 && !(n[t] >= e); ++t)
    ;
  return t - 1;
}
var ki = Symbol.for("FluidValue.get"), Ri = Symbol.for("FluidValue.observers"), Ar = (e) => !!(e && e[ki]), Pr = (e) => e && e[ki] ? e[ki]() : e;
function lC(e, n) {
  e.eventObserved ? e.eventObserved(n) : e(n);
}
function ia(e, n) {
  const t = e[Ri];
  t && t.forEach((r) => {
    lC(r, n);
  });
}
var Xm = class {
  constructor(e) {
    if (!e && !(e = this.get))
      throw Error("Unknown getter");
    uC(this, e);
  }
}, uC = (e, n) => zm(e, ki, n);
function Bu(e, n) {
  if (e[ki]) {
    let t = e[Ri];
    t || zm(e, Ri, t = /* @__PURE__ */ new Set()), t.has(n) || (t.add(n), e.observerAdded && e.observerAdded(t.size, n));
  }
  return n;
}
function oa(e, n) {
  const t = e[Ri];
  if (t && t.has(n)) {
    const r = t.size - 1;
    r ? t.delete(n) : e[Ri] = null, e.observerRemoved && e.observerRemoved(r, n);
  }
}
var zm = (e, n, t) => Object.defineProperty(e, n, {
  value: t,
  writable: !0,
  configurable: !0
}), Po = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, cC = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, id = new RegExp(`(${Po.source})(%|[a-z]+)`, "i"), dC = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, os = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, jm = (e) => {
  const [n, t] = fC(e);
  if (!n || Wu())
    return e;
  const r = window.getComputedStyle(document.documentElement).getPropertyValue(n);
  if (r)
    return r.trim();
  if (t && t.startsWith("--")) {
    const i = window.getComputedStyle(document.documentElement).getPropertyValue(t);
    return i || e;
  } else {
    if (t && os.test(t))
      return jm(t);
    if (t)
      return t;
  }
  return e;
}, fC = (e) => {
  const n = os.exec(e);
  if (!n)
    return [,];
  const [, t, r] = n;
  return [t, r];
}, _s, pC = (e, n, t, r, i) => `rgba(${Math.round(n)}, ${Math.round(t)}, ${Math.round(r)}, ${i})`, Um = (e) => {
  _s || (_s = Pn ? (
    // match color names, ignore partial matches
    new RegExp(`(${Object.keys(Pn).join("|")})(?!\\w)`, "g")
  ) : (
    // never match
    /^\b$/
  ));
  const n = e.output.map((o) => Pr(o).replace(os, jm).replace(cC, rd).replace(_s, rd)), t = n.map((o) => o.match(Po).map(Number)), i = t[0].map(
    (o, a) => t.map((s) => {
      if (!(a in s))
        throw Error('The arity of each "output" value must be equal');
      return s[a];
    })
  ).map(
    (o) => Oi({ ...e, output: o })
  );
  return (o) => {
    var l;
    const a = !id.test(n[0]) && ((l = n.find((u) => id.test(u))) == null ? void 0 : l.replace(Po, ""));
    let s = 0;
    return n[0].replace(
      Po,
      () => `${i[s++](o)}${a || ""}`
    ).replace(dC, pC);
  };
}, Jm = "react-spring: ", Qm = (e) => {
  const n = e;
  let t = !1;
  if (typeof n != "function")
    throw new TypeError(`${Jm}once requires a function parameter`);
  return (...r) => {
    t || (n(...r), t = !0);
  };
}, mC = Qm(console.warn);
function hC() {
  mC(
    `${Jm}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
Qm(console.warn);
function qm(e) {
  return Le.str(e) && (e[0] == "#" || /\d/.test(e) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !Wu() && os.test(e) || e in (Pn || {}));
}
var Km = Wu() ? Ie : Gi, gC = () => {
  const e = H(!1);
  return Km(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
};
function vC() {
  const e = ae()[1], n = gC();
  return () => {
    n.current && e(Math.random());
  };
}
function bC(e, n) {
  const [t] = ae(
    () => ({
      inputs: n,
      result: e()
    })
  ), r = H(), i = r.current;
  let o = i;
  return o ? n && o.inputs && yC(n, o.inputs) || (o = {
    inputs: n,
    result: e()
  }) : o = t, Ie(() => {
    r.current = o, i == t && (t.inputs = t.result = void 0);
  }, [o]), o.result;
}
function yC(e, n) {
  if (e.length !== n.length)
    return !1;
  for (let t = 0; t < e.length; t++)
    if (e[t] !== n[t])
      return !1;
  return !0;
}
var wC = (e) => Ie(e, CC), CC = [], Ai = Symbol.for("Animated:node"), IC = (e) => !!e && e[Ai] === e, Yu = (e) => e && e[Ai], eh = (e, n) => Zw(e, Ai, n), Zu = (e) => e && e[Ai] && e[Ai].getPayload(), th = class {
  constructor() {
    eh(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
}, as = class extends th {
  constructor(e) {
    super(), this._value = e, this.done = !0, this.durationProgress = 0, Le.num(this._value) && (this.lastPosition = this._value);
  }
  /** @internal */
  static create(e) {
    return new as(e);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(e, n) {
    return Le.num(e) && (this.lastPosition = e, n && (e = Math.round(e / n) * n, this.done && (this.lastPosition = e))), this._value === e ? !1 : (this._value = e, !0);
  }
  reset() {
    const { done: e } = this;
    this.done = !1, Le.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null);
  }
}, Xu = class extends as {
  constructor(e) {
    super(0), this._string = null, this._toString = Oi({
      output: [e, e]
    });
  }
  /** @internal */
  static create(e) {
    return new Xu(e);
  }
  getValue() {
    const e = this._string;
    return e ?? (this._string = this._toString(this._value));
  }
  setValue(e) {
    if (Le.str(e)) {
      if (e == this._string)
        return !1;
      this._string = e, this._value = 1;
    } else if (super.setValue(e))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(e) {
    e && (this._toString = Oi({
      output: [this.getValue(), e]
    })), this._value = 0, super.reset();
  }
}, aa = { dependencies: null }, ss = class extends th {
  constructor(e) {
    super(), this.source = e, this.setValue(e);
  }
  getValue(e) {
    const n = {};
    return ta(this.source, (t, r) => {
      IC(t) ? n[r] = t.getValue(e) : Ar(t) ? n[r] = Pr(t) : e || (n[r] = t);
    }), n;
  }
  /** Replace the raw object data */
  setValue(e) {
    this.source = e, this.payload = this._makePayload(e);
  }
  reset() {
    this.payload && gt(this.payload, (e) => e.reset());
  }
  /** Create a payload set. */
  _makePayload(e) {
    if (e) {
      const n = /* @__PURE__ */ new Set();
      return ta(e, this._addToPayload, n), Array.from(n);
    }
  }
  /** Add to a payload set. */
  _addToPayload(e) {
    aa.dependencies && Ar(e) && aa.dependencies.add(e);
    const n = Zu(e);
    n && gt(n, (t) => this.add(t));
  }
}, nh = class extends ss {
  constructor(e) {
    super(e);
  }
  /** @internal */
  static create(e) {
    return new nh(e);
  }
  getValue() {
    return this.source.map((e) => e.getValue());
  }
  setValue(e) {
    const n = this.getPayload();
    return e.length == n.length ? n.map((t, r) => t.setValue(e[r])).some(Boolean) : (super.setValue(e.map(xC)), !0);
  }
};
function xC(e) {
  return (qm(e) ? Xu : as).create(e);
}
function SC(e) {
  const n = Yu(e);
  return n ? n.constructor : Le.arr(e) ? nh : qm(e) ? Xu : as;
}
var od = (e, n) => {
  const t = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !Le.fun(e) || e.prototype && e.prototype.isReactComponent
  );
  return Oa((r, i) => {
    const o = H(null), a = t && // eslint-disable-next-line react-hooks/rules-of-hooks
    pe(
      (m) => {
        o.current = TC(i, m);
      },
      [i]
    ), [s, l] = DC(r, n), u = vC(), c = () => {
      const m = o.current;
      if (t && !m)
        return;
      (m ? n.applyAnimatedValues(m, s.getValue(!0)) : !1) === !1 && u();
    }, d = new EC(c, l), p = H();
    Km(() => (p.current = d, gt(l, (m) => Bu(m, d)), () => {
      p.current && (gt(
        p.current.deps,
        (m) => oa(m, p.current)
      ), Ce.cancel(p.current.update));
    })), Ie(c, []), wC(() => () => {
      const m = p.current;
      gt(m.deps, (h) => oa(h, m));
    });
    const f = n.getComponentProps(s.getValue());
    return /* @__PURE__ */ T.createElement(e, { ...f, ref: a });
  });
}, EC = class {
  constructor(e, n) {
    this.update = e, this.deps = n;
  }
  eventObserved(e) {
    e.type == "change" && Ce.write(this.update);
  }
};
function DC(e, n) {
  const t = /* @__PURE__ */ new Set();
  return aa.dependencies = t, e.style && (e = {
    ...e,
    style: n.createAnimatedStyle(e.style)
  }), e = new ss(e), aa.dependencies = null, [e, t];
}
function TC(e, n) {
  return e && (Le.fun(e) ? e(n) : e.current = n), n;
}
var ad = Symbol.for("AnimatedComponent"), MC = (e, {
  applyAnimatedValues: n = () => !1,
  createAnimatedStyle: t = (i) => new ss(i),
  getComponentProps: r = (i) => i
} = {}) => {
  const i = {
    applyAnimatedValues: n,
    createAnimatedStyle: t,
    getComponentProps: r
  }, o = (a) => {
    const s = sd(a) || "Anonymous";
    return Le.str(a) ? a = o[a] || (o[a] = od(a, i)) : a = a[ad] || (a[ad] = od(a, i)), a.displayName = `Animated(${s})`, a;
  };
  return ta(e, (a, s) => {
    Le.arr(e) && (s = sd(a)), o[s] = o(a);
  }), {
    animated: o
  };
}, sd = (e) => Le.str(e) ? e : e && Le.str(e.displayName) ? e.displayName : Le.fun(e) && e.name || null, ld = (e) => e instanceof rh, OC = 1, rh = class extends Xm {
  constructor() {
    super(...arguments), this.id = OC++, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(e) {
    this._priority != e && (this._priority = e, this._onPriorityChange(e));
  }
  /** Get the current value */
  get() {
    const e = Yu(this);
    return e && e.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...e) {
    return Rr.to(this, e);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...e) {
    return hC(), Rr.to(this, e);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(e) {
    e == 1 && this._attach();
  }
  observerRemoved(e) {
    e == 0 && this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(e, n = !1) {
    ia(this, {
      type: "change",
      parent: this,
      value: e,
      idle: n
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(e) {
    this.idle || Hu.sort(this), ia(this, {
      type: "priority",
      parent: this,
      priority: e
    });
  }
}, zu = ({
  children: e,
  ...n
}) => {
  const t = ve(sa), r = n.pause || !!t.pause, i = n.immediate || !!t.immediate;
  n = bC(() => ({ pause: r, immediate: i }), [r, i]);
  const { Provider: o } = sa;
  return /* @__PURE__ */ T.createElement(o, { value: n }, e);
}, sa = kC(zu, {});
zu.Provider = sa.Provider;
zu.Consumer = sa.Consumer;
function kC(e, n) {
  return Object.assign(e, T.createContext(n)), e.Provider._context = e, e.Consumer._context = e, e;
}
var RC = class extends rh {
  constructor(e, n) {
    super(), this.source = e, this.idle = !0, this._active = /* @__PURE__ */ new Set(), this.calc = Oi(...n);
    const t = this._get(), r = SC(t);
    eh(this, r.create(t));
  }
  advance(e) {
    const n = this._get(), t = this.get();
    Xw(n, t) || (Yu(this).setValue(n), this._onChange(n, this.idle)), !this.idle && ud(this._active) && Ls(this);
  }
  _get() {
    const e = Le.arr(this.source) ? this.source.map(Pr) : ui(Pr(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle && !ud(this._active) && (this.idle = !1, gt(Zu(this), (e) => {
      e.done = !1;
    }), Rr.skipAnimation ? (Ce.batchedUpdates(() => this.advance()), Ls(this)) : Hu.start(this));
  }
  // Observe our sources only when we're observed.
  _attach() {
    let e = 1;
    gt(ui(this.source), (n) => {
      Ar(n) && Bu(n, this), ld(n) && (n.idle || this._active.add(n), e = Math.max(e, n.priority + 1));
    }), this.priority = e, this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    gt(ui(this.source), (e) => {
      Ar(e) && oa(e, this);
    }), this._active.clear(), Ls(this);
  }
  /** @internal */
  eventObserved(e) {
    e.type == "change" ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : e.type == "idle" ? this._active.delete(e.parent) : e.type == "priority" && (this.priority = ui(this.source).reduce(
      (n, t) => Math.max(n, (ld(t) ? t.priority : 0) + 1),
      0
    ));
  }
};
function AC(e) {
  return e.idle !== !1;
}
function ud(e) {
  return !e.size || Array.from(e).every(AC);
}
function Ls(e) {
  e.idle || (e.idle = !0, gt(Zu(e), (n) => {
    n.done = !0;
  }), ia(e, {
    type: "idle",
    parent: e
  }));
}
Rr.assign({
  createStringInterpolator: Um,
  to: (e, n) => new RC(e, n)
});
var ih = /^--/;
function PC(e, n) {
  return n == null || typeof n == "boolean" || n === "" ? "" : typeof n == "number" && n !== 0 && !ih.test(e) && !(yi.hasOwnProperty(e) && yi[e]) ? n + "px" : ("" + n).trim();
}
var cd = {};
function FC(e, n) {
  if (!e.nodeType || !e.setAttribute)
    return !1;
  const t = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter", { style: r, children: i, scrollTop: o, scrollLeft: a, viewBox: s, ...l } = n, u = Object.values(l), c = Object.keys(l).map(
    (d) => t || e.hasAttribute(d) ? d : cd[d] || (cd[d] = d.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (p) => "-" + p.toLowerCase()
    ))
  );
  i !== void 0 && (e.textContent = i);
  for (const d in r)
    if (r.hasOwnProperty(d)) {
      const p = PC(d, r[d]);
      ih.test(d) ? e.style.setProperty(d, p) : e.style[d] = p;
    }
  c.forEach((d, p) => {
    e.setAttribute(d, u[p]);
  }), o !== void 0 && (e.scrollTop = o), a !== void 0 && (e.scrollLeft = a), s !== void 0 && e.setAttribute("viewBox", s);
}
var yi = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, NC = (e, n) => e + n.charAt(0).toUpperCase() + n.substring(1), _C = ["Webkit", "Ms", "Moz", "O"];
yi = Object.keys(yi).reduce((e, n) => (_C.forEach((t) => e[NC(t, n)] = e[n]), e), yi);
var LC = /^(matrix|translate|scale|rotate|skew)/, VC = /^(translate)/, WC = /^(rotate|skew)/, Vs = (e, n) => Le.num(e) && e !== 0 ? e + n : e, Fo = (e, n) => Le.arr(e) ? e.every((t) => Fo(t, n)) : Le.num(e) ? e === n : parseFloat(e) === n, GC = class extends ss {
  constructor({ x: e, y: n, z: t, ...r }) {
    const i = [], o = [];
    (e || n || t) && (i.push([e || 0, n || 0, t || 0]), o.push((a) => [
      `translate3d(${a.map((s) => Vs(s, "px")).join(",")})`,
      // prettier-ignore
      Fo(a, 0)
    ])), ta(r, (a, s) => {
      if (s === "transform")
        i.push([a || ""]), o.push((l) => [l, l === ""]);
      else if (LC.test(s)) {
        if (delete r[s], Le.und(a))
          return;
        const l = VC.test(s) ? "px" : WC.test(s) ? "deg" : "";
        i.push(ui(a)), o.push(
          s === "rotate3d" ? ([u, c, d, p]) => [
            `rotate3d(${u},${c},${d},${Vs(p, l)})`,
            Fo(p, 0)
          ] : (u) => [
            `${s}(${u.map((c) => Vs(c, l)).join(",")})`,
            Fo(u, s.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    }), i.length && (r.transform = new $C(i, o)), super(r);
  }
}, $C = class extends Xm {
  constructor(e, n) {
    super(), this.inputs = e, this.transforms = n, this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let e = "", n = !0;
    return gt(this.inputs, (t, r) => {
      const i = Pr(t[0]), [o, a] = this.transforms[r](
        Le.arr(i) ? i : t.map(Pr)
      );
      e += " " + o, n = n && a;
    }), n ? "none" : e;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(e) {
    e == 1 && gt(
      this.inputs,
      (n) => gt(
        n,
        (t) => Ar(t) && Bu(t, this)
      )
    );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(e) {
    e == 0 && gt(
      this.inputs,
      (n) => gt(
        n,
        (t) => Ar(t) && oa(t, this)
      )
    );
  }
  eventObserved(e) {
    e.type == "change" && (this._value = null), ia(this, e);
  }
}, HC = [
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
Rr.assign({
  batchedUpdates: Av,
  createStringInterpolator: Um,
  colors: Jw
});
MC(HC, {
  applyAnimatedValues: FC,
  createAnimatedStyle: (e) => new GC(e),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop: e, scrollLeft: n, ...t }) => t
});
const BC = "data:", YC = ";base64", ZC = (e) => {
  var r, i;
  const n = new RegExp("(\\p{L}{1})\\p{L}+", "gu");
  let t = e ? [...e.matchAll(n)] : [];
  return t = ((((r = t.shift()) == null ? void 0 : r[1]) || "") + (((i = t.pop()) == null ? void 0 : i[1]) || "")).toUpperCase(), t;
}, ci = (e = "") => `${e}_${Math.random().toString(36).substring(2, 11)}`, XC = (e) => e.base64 ? `${BC}${e.type}${YC},${e.base64}` : "";
var oh = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, dd = C.createContext && /* @__PURE__ */ C.createContext(oh), zC = ["attr", "size", "title"];
function jC(e, n) {
  if (e == null) return {};
  var t = UC(e, n), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function UC(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function la() {
  return la = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, la.apply(this, arguments);
}
function fd(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ua(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? fd(Object(t), !0).forEach(function(r) {
      JC(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fd(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function JC(e, n, t) {
  return n = QC(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function QC(e) {
  var n = qC(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function qC(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function ah(e) {
  return e && e.map((n, t) => /* @__PURE__ */ C.createElement(n.tag, ua({
    key: t
  }, n.attr), ah(n.child)));
}
function $n(e) {
  return (n) => /* @__PURE__ */ C.createElement(KC, la({
    attr: ua({}, e.attr)
  }, n), ah(e.child));
}
function KC(e) {
  var n = (t) => {
    var {
      attr: r,
      size: i,
      title: o
    } = e, a = jC(e, zC), s = i || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ C.createElement("svg", la({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, a, {
      className: l,
      style: ua(ua({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ C.createElement("title", null, o), e.children);
  };
  return dd !== void 0 ? /* @__PURE__ */ C.createElement(dd.Consumer, null, (t) => n(t)) : n(oh);
}
function eI(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, child: [] }] })(e);
}
function tI({
  color: e = "primary",
  label: n,
  elementRef: t,
  className: r,
  ...i
}) {
  return /* @__PURE__ */ ce(
    "label",
    {
      className: `${i.disabled ? "pointer-events-none" : "cursor-pointer"} cds-checkbox flex`,
      children: [
        /* @__PURE__ */ ce(
          "div",
          {
            className: He(
              `w-6 h-6 border ${i.disabled ? "opacity-50" : ""} ${`border-${e}-300`} rounded-lg flex justify-center items-center`,
              r
            ),
            children: [
              /* @__PURE__ */ L(
                "input",
                {
                  id: ci(),
                  type: "checkbox",
                  className: He("hidden"),
                  ref: t,
                  ...i
                }
              ),
              /* @__PURE__ */ L(
                eI,
                {
                  className: `${`text-${e}-300`} hidden pointer-events-none`
                }
              )
            ]
          }
        ),
        n ? /* @__PURE__ */ L("span", { className: "ml-2", children: n }) : null
      ]
    }
  );
}
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function On(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Dt(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: On(t, r[e])
    }));
  };
}
function ls(e) {
  return e instanceof Function;
}
function nI(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function rI(e, n) {
  const t = [], r = (i) => {
    i.forEach((o) => {
      t.push(o);
      const a = n(o);
      a != null && a.length && r(a);
    });
  };
  return r(e), t;
}
function te(e, n, t) {
  let r = [], i;
  return (o) => {
    let a;
    t.key && t.debug && (a = Date.now());
    const s = e(o);
    if (!(s.length !== r.length || s.some((c, d) => r[d] !== c)))
      return i;
    r = s;
    let u;
    if (t.key && t.debug && (u = Date.now()), i = n(...s), t == null || t.onChange == null || t.onChange(i), t.key && t.debug && t != null && t.debug()) {
      const c = Math.round((Date.now() - a) * 100) / 100, d = Math.round((Date.now() - u) * 100) / 100, p = d / 16, f = (m, h) => {
        for (m = String(m); m.length < h; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${f(d, 5)} /${f(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return i;
  };
}
function ne(e, n, t, r) {
  return {
    debug: () => {
      var i;
      return (i = e == null ? void 0 : e.debugAll) != null ? i : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function iI(e, n, t, r) {
  const i = () => {
    var a;
    return (a = o.getValue()) != null ? a : e.options.renderFallbackValue;
  }, o = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: i,
    getContext: te(() => [e, t, n, o], (a, s, l, u) => ({
      table: a,
      column: s,
      row: l,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), ne(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((a) => {
    a.createCell == null || a.createCell(o, t, n, e);
  }, {}), o;
}
function oI(e, n, t, r) {
  var i, o;
  const s = {
    ...e._getDefaultColumnDef(),
    ...n
  }, l = s.accessorKey;
  let u = (i = (o = s.id) != null ? o : l ? l.replace(".", "_") : void 0) != null ? i : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : l && (l.includes(".") ? c = (p) => {
    let f = p;
    for (const h of l.split(".")) {
      var m;
      f = (m = f) == null ? void 0 : m[h], process.env.NODE_ENV !== "production" && f === void 0 && console.warn(`"${h}" in deeply nested key "${l}" returned undefined.`);
    }
    return f;
  } : c = (p) => p[s.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(s.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: t,
    columnDef: s,
    columns: [],
    getFlatColumns: te(() => [!0], () => {
      var p;
      return [d, ...(p = d.columns) == null ? void 0 : p.flatMap((f) => f.getFlatColumns())];
    }, ne(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: te(() => [e._getOrderColumnsFn()], (p) => {
      var f;
      if ((f = d.columns) != null && f.length) {
        let m = d.columns.flatMap((h) => h.getLeafColumns());
        return p(m);
      }
      return [d];
    }, ne(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const p of e._features)
    p.createColumn == null || p.createColumn(d, e);
  return d;
}
const st = "debugHeaders";
function pd(e, n, t) {
  var r;
  let o = {
    id: (r = t.id) != null ? r : n.id,
    column: n,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const a = [], s = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(s), a.push(l);
      };
      return s(o), a;
    },
    getContext: () => ({
      table: e,
      header: o,
      column: n
    })
  };
  return e._features.forEach((a) => {
    a.createHeader == null || a.createHeader(o, e);
  }), o;
}
const aI = {
  createTable: (e) => {
    e.getHeaderGroups = te(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, i) => {
      var o, a;
      const s = (o = r == null ? void 0 : r.map((d) => t.find((p) => p.id === d)).filter(Boolean)) != null ? o : [], l = (a = i == null ? void 0 : i.map((d) => t.find((p) => p.id === d)).filter(Boolean)) != null ? a : [], u = t.filter((d) => !(r != null && r.includes(d.id)) && !(i != null && i.includes(d.id)));
      return fo(n, [...s, ...u, ...l], e);
    }, ne(e.options, st, "getHeaderGroups")), e.getCenterHeaderGroups = te(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, i) => (t = t.filter((o) => !(r != null && r.includes(o.id)) && !(i != null && i.includes(o.id))), fo(n, t, e, "center")), ne(e.options, st, "getCenterHeaderGroups")), e.getLeftHeaderGroups = te(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var i;
      const o = (i = r == null ? void 0 : r.map((a) => t.find((s) => s.id === a)).filter(Boolean)) != null ? i : [];
      return fo(n, o, e, "left");
    }, ne(e.options, st, "getLeftHeaderGroups")), e.getRightHeaderGroups = te(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var i;
      const o = (i = r == null ? void 0 : r.map((a) => t.find((s) => s.id === a)).filter(Boolean)) != null ? i : [];
      return fo(n, o, e, "right");
    }, ne(e.options, st, "getRightHeaderGroups")), e.getFooterGroups = te(() => [e.getHeaderGroups()], (n) => [...n].reverse(), ne(e.options, st, "getFooterGroups")), e.getLeftFooterGroups = te(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), ne(e.options, st, "getLeftFooterGroups")), e.getCenterFooterGroups = te(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), ne(e.options, st, "getCenterFooterGroups")), e.getRightFooterGroups = te(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), ne(e.options, st, "getRightFooterGroups")), e.getFlatHeaders = te(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), ne(e.options, st, "getFlatHeaders")), e.getLeftFlatHeaders = te(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), ne(e.options, st, "getLeftFlatHeaders")), e.getCenterFlatHeaders = te(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), ne(e.options, st, "getCenterFlatHeaders")), e.getRightFlatHeaders = te(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), ne(e.options, st, "getRightFlatHeaders")), e.getCenterLeafHeaders = te(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), ne(e.options, st, "getCenterLeafHeaders")), e.getLeftLeafHeaders = te(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), ne(e.options, st, "getLeftLeafHeaders")), e.getRightLeafHeaders = te(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), ne(e.options, st, "getRightLeafHeaders")), e.getLeafHeaders = te(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var i, o, a, s, l, u;
      return [...(i = (o = n[0]) == null ? void 0 : o.headers) != null ? i : [], ...(a = (s = t[0]) == null ? void 0 : s.headers) != null ? a : [], ...(l = (u = r[0]) == null ? void 0 : u.headers) != null ? l : []].map((c) => c.getLeafHeaders()).flat();
    }, ne(e.options, st, "getLeafHeaders"));
  }
};
function fo(e, n, t, r) {
  var i, o;
  let a = 0;
  const s = function(p, f) {
    f === void 0 && (f = 1), a = Math.max(a, f), p.filter((m) => m.getIsVisible()).forEach((m) => {
      var h;
      (h = m.columns) != null && h.length && s(m.columns, f + 1);
    }, 0);
  };
  s(e);
  let l = [];
  const u = (p, f) => {
    const m = {
      depth: f,
      id: [r, `${f}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    p.forEach((g) => {
      const v = [...h].reverse()[0], y = g.column.depth === m.depth;
      let b, I = !1;
      if (y && g.column.parent ? b = g.column.parent : (b = g.column, I = !0), v && (v == null ? void 0 : v.column) === b)
        v.subHeaders.push(g);
      else {
        const w = pd(t, b, {
          id: [r, f, b.id, g == null ? void 0 : g.id].filter(Boolean).join("_"),
          isPlaceholder: I,
          placeholderId: I ? `${h.filter((S) => S.column === b).length}` : void 0,
          depth: f,
          index: h.length
        });
        w.subHeaders.push(g), h.push(w);
      }
      m.headers.push(g), g.headerGroup = m;
    }), l.push(m), f > 0 && u(h, f - 1);
  }, c = n.map((p, f) => pd(t, p, {
    depth: a,
    index: f
  }));
  u(c, a - 1), l.reverse();
  const d = (p) => p.filter((m) => m.column.getIsVisible()).map((m) => {
    let h = 0, g = 0, v = [0];
    m.subHeaders && m.subHeaders.length ? (v = [], d(m.subHeaders).forEach((b) => {
      let {
        colSpan: I,
        rowSpan: w
      } = b;
      h += I, v.push(w);
    })) : h = 1;
    const y = Math.min(...v);
    return g = g + y, m.colSpan = h, m.rowSpan = g, {
      colSpan: h,
      rowSpan: g
    };
  });
  return d((i = (o = l[0]) == null ? void 0 : o.headers) != null ? i : []), l;
}
const sI = (e, n, t, r, i, o, a) => {
  let s = {
    id: n,
    index: r,
    original: t,
    depth: i,
    parentId: a,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (s._valuesCache.hasOwnProperty(l))
        return s._valuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return s._valuesCache[l] = u.accessorFn(s.original, r), s._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (s._uniqueValuesCache.hasOwnProperty(l))
        return s._uniqueValuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (s._uniqueValuesCache[l] = u.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[l]) : (s._uniqueValuesCache[l] = [s.getValue(l)], s._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var u;
      return (u = s.getValue(l)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => rI(s.subRows, (l) => l.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], u = s;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        l.push(c), u = c;
      }
      return l.reverse();
    },
    getAllCells: te(() => [e.getAllLeafColumns()], (l) => l.map((u) => iI(e, s, u, u.id)), ne(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: te(() => [s.getAllCells()], (l) => l.reduce((u, c) => (u[c.column.id] = c, u), {}), ne(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(s, e);
  }
  return s;
}, lI = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, sh = (e, n, t) => {
  var r;
  const i = t.toLowerCase();
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
sh.autoRemove = (e) => $t(e);
const lh = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
lh.autoRemove = (e) => $t(e);
const uh = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
uh.autoRemove = (e) => $t(e);
const ch = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
ch.autoRemove = (e) => $t(e) || !(e != null && e.length);
const dh = (e, n, t) => !t.some((r) => {
  var i;
  return !((i = e.getValue(n)) != null && i.includes(r));
});
dh.autoRemove = (e) => $t(e) || !(e != null && e.length);
const fh = (e, n, t) => t.some((r) => {
  var i;
  return (i = e.getValue(n)) == null ? void 0 : i.includes(r);
});
fh.autoRemove = (e) => $t(e) || !(e != null && e.length);
const ph = (e, n, t) => e.getValue(n) === t;
ph.autoRemove = (e) => $t(e);
const mh = (e, n, t) => e.getValue(n) == t;
mh.autoRemove = (e) => $t(e);
const ju = (e, n, t) => {
  let [r, i] = t;
  const o = e.getValue(n);
  return o >= r && o <= i;
};
ju.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, i = typeof t != "number" ? parseFloat(t) : t, o = n === null || Number.isNaN(r) ? -1 / 0 : r, a = t === null || Number.isNaN(i) ? 1 / 0 : i;
  if (o > a) {
    const s = o;
    o = a, a = s;
  }
  return [o, a];
};
ju.autoRemove = (e) => $t(e) || $t(e[0]) && $t(e[1]);
const an = {
  includesString: sh,
  includesStringSensitive: lh,
  equalsString: uh,
  arrIncludes: ch,
  arrIncludesAll: dh,
  arrIncludesSome: fh,
  equals: ph,
  weakEquals: mh,
  inNumberRange: ju
};
function $t(e) {
  return e == null || e === "";
}
const uI = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Dt("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? an.includesString : typeof r == "number" ? an.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? an.equals : Array.isArray(r) ? an.arrIncludes : an.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return ls(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : an[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, r, i;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((r = n.options.enableColumnFilters) != null ? r : !0) && ((i = n.options.enableFilters) != null ? i : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((r) => r.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, r;
      return (t = (r = n.getState().columnFilters) == null ? void 0 : r.findIndex((i) => i.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((r) => {
        const i = e.getFilterFn(), o = r == null ? void 0 : r.find((c) => c.id === e.id), a = On(t, o ? o.value : void 0);
        if (md(i, a, e)) {
          var s;
          return (s = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? s : [];
        }
        const l = {
          id: e.id,
          value: a
        };
        if (o) {
          var u;
          return (u = r == null ? void 0 : r.map((c) => c.id === e.id ? l : c)) != null ? u : [];
        }
        return r != null && r.length ? [...r, l] : [l];
      });
    };
  },
  createRow: (e, n) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (n) => {
      const t = e.getAllLeafColumns(), r = (i) => {
        var o;
        return (o = On(n, i)) == null ? void 0 : o.filter((a) => {
          const s = t.find((l) => l.id === a.id);
          if (s) {
            const l = s.getFilterFn();
            if (md(l, a.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (n) => {
      var t, r;
      e.setColumnFilters(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function md(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const cI = (e, n, t) => t.reduce((r, i) => {
  const o = i.getValue(e);
  return r + (typeof o == "number" ? o : 0);
}, 0), dI = (e, n, t) => {
  let r;
  return t.forEach((i) => {
    const o = i.getValue(e);
    o != null && (r > o || r === void 0 && o >= o) && (r = o);
  }), r;
}, fI = (e, n, t) => {
  let r;
  return t.forEach((i) => {
    const o = i.getValue(e);
    o != null && (r < o || r === void 0 && o >= o) && (r = o);
  }), r;
}, pI = (e, n, t) => {
  let r, i;
  return t.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r === void 0 ? a >= a && (r = i = a) : (r > a && (r = a), i < a && (i = a)));
  }), [r, i];
}, mI = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((i) => {
    let o = i.getValue(e);
    o != null && (o = +o) >= o && (++t, r += o);
  }), t) return r / t;
}, hI = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((o) => o.getValue(e));
  if (!nI(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), i = t.sort((o, a) => o - a);
  return t.length % 2 !== 0 ? i[r] : (i[r - 1] + i[r]) / 2;
}, gI = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), vI = (e, n) => new Set(n.map((t) => t.getValue(e))).size, bI = (e, n) => n.length, Ws = {
  sum: cI,
  min: dI,
  max: fI,
  extent: pI,
  mean: mI,
  median: hI,
  unique: gI,
  uniqueCount: vI,
  count: bI
}, yI = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var n, t;
      return (n = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? n : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Dt("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, n) => {
    e.toggleGrouping = () => {
      n.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((r) => r !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, r;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((r = n.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      if (typeof r == "number")
        return Ws.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Ws.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ls(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : Ws[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (n) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(n), e.resetGrouping = (n) => {
      var t, r;
      e.setGrouping(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, n) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const r = n.getColumn(t);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, n, t, r) => {
    e.getIsGrouped = () => n.getIsGrouped() && n.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && n.getIsGrouped(), e.getIsAggregated = () => {
      var i;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((i = t.subRows) != null && i.length);
    };
  }
};
function wI(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((o) => !n.includes(o.id));
  return t === "remove" ? r : [...n.map((o) => e.find((a) => a.id === o)).filter(Boolean), ...r];
}
const CI = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Dt("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = te((t) => [wi(n, t)], (t) => t.findIndex((r) => r.id === e.id), ne(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = wi(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const i = wi(n, t);
      return ((r = i[i.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = te(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (i) => {
      let o = [];
      if (!(n != null && n.length))
        o = i;
      else {
        const a = [...n], s = [...i];
        for (; s.length && a.length; ) {
          const l = a.shift(), u = s.findIndex((c) => c.id === l);
          u > -1 && o.push(s.splice(u, 1)[0]);
        }
        o = [...o, ...s];
      }
      return wI(o, t, r);
    }, ne(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Gs = () => ({
  left: [],
  right: []
}), II = {
  getInitialState: (e) => ({
    columnPinning: Gs(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Dt("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const r = e.getLeafColumns().map((i) => i.id).filter(Boolean);
      n.setColumnPinning((i) => {
        var o, a;
        if (t === "right") {
          var s, l;
          return {
            left: ((s = i == null ? void 0 : i.left) != null ? s : []).filter((d) => !(r != null && r.includes(d))),
            right: [...((l = i == null ? void 0 : i.right) != null ? l : []).filter((d) => !(r != null && r.includes(d))), ...r]
          };
        }
        if (t === "left") {
          var u, c;
          return {
            left: [...((u = i == null ? void 0 : i.left) != null ? u : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((c = i == null ? void 0 : i.right) != null ? c : []).filter((d) => !(r != null && r.includes(d)))
          };
        }
        return {
          left: ((o = i == null ? void 0 : i.left) != null ? o : []).filter((d) => !(r != null && r.includes(d))),
          right: ((a = i == null ? void 0 : i.right) != null ? a : []).filter((d) => !(r != null && r.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var i, o, a;
      return ((i = r.columnDef.enablePinning) != null ? i : !0) && ((o = (a = n.options.enableColumnPinning) != null ? a : n.options.enablePinning) != null ? o : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((s) => s.id), {
        left: r,
        right: i
      } = n.getState().columnPinning, o = t.some((s) => r == null ? void 0 : r.includes(s)), a = t.some((s) => i == null ? void 0 : i.includes(s));
      return o ? "left" : a ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const i = e.getIsPinned();
      return i ? (t = (r = n.getState().columnPinning) == null || (r = r[i]) == null ? void 0 : r.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = te(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, i) => {
      const o = [...r ?? [], ...i ?? []];
      return t.filter((a) => !o.includes(a.column.id));
    }, ne(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = te(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "left"
    })), ne(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = te(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((o) => t.find((a) => a.column.id === o)).filter(Boolean).map((o) => ({
      ...o,
      position: "right"
    })), ne(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? Gs() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : Gs());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var i, o;
        return !!((i = r.left) != null && i.length || (o = r.right) != null && o.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = te(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((i) => i.id === r)).filter(Boolean), ne(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = te(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((i) => i.id === r)).filter(Boolean), ne(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = te(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const i = [...t ?? [], ...r ?? []];
      return n.filter((o) => !i.includes(o.id));
    }, ne(e.options, "debugColumns", "getCenterLeafColumns"));
  }
}, po = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, $s = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), xI = {
  getDefaultColumnDef: () => po,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: $s(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Dt("columnSizing", e),
    onColumnSizingInfoChange: Dt("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, i;
      const o = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : po.minSize, (r = o ?? e.columnDef.size) != null ? r : po.size), (i = e.columnDef.maxSize) != null ? i : po.maxSize);
    }, e.getStart = te((t) => [t, wi(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((i, o) => i + o.getSize(), 0), ne(n.options, "debugColumns", "getStart")), e.getAfter = te((t) => [t, wi(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((i, o) => i + o.getSize(), 0), ne(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: r,
          ...i
        } = t;
        return i;
      });
    }, e.getCanResize = () => {
      var t, r;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((r = n.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const r = (i) => {
        if (i.subHeaders.length)
          i.subHeaders.forEach(r);
        else {
          var o;
          t += (o = i.column.getSize()) != null ? o : 0;
        }
      };
      return r(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const r = n.getColumn(e.column.id), i = r == null ? void 0 : r.getCanResize();
      return (o) => {
        if (!r || !i || (o.persist == null || o.persist(), Hs(o) && o.touches && o.touches.length > 1))
          return;
        const a = e.getSize(), s = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], l = Hs(o) ? Math.round(o.touches[0].clientX) : o.clientX, u = {}, c = (v, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((b) => {
            var I, w;
            const S = n.options.columnResizeDirection === "rtl" ? -1 : 1, x = (y - ((I = b == null ? void 0 : b.startOffset) != null ? I : 0)) * S, E = Math.max(x / ((w = b == null ? void 0 : b.startSize) != null ? w : 0), -0.999999);
            return b.columnSizingStart.forEach((D) => {
              let [_, k] = D;
              u[_] = Math.round(Math.max(k + k * E, 0) * 100) / 100;
            }), {
              ...b,
              deltaOffset: x,
              deltaPercentage: E
            };
          }), (n.options.columnResizeMode === "onChange" || v === "end") && n.setColumnSizing((b) => ({
            ...b,
            ...u
          })));
        }, d = (v) => c("move", v), p = (v) => {
          c("end", v), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, f = t || typeof document < "u" ? document : null, m = {
          moveHandler: (v) => d(v.clientX),
          upHandler: (v) => {
            f == null || f.removeEventListener("mousemove", m.moveHandler), f == null || f.removeEventListener("mouseup", m.upHandler), p(v.clientX);
          }
        }, h = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), d(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var y;
            f == null || f.removeEventListener("touchmove", h.moveHandler), f == null || f.removeEventListener("touchend", h.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), p((y = v.touches[0]) == null ? void 0 : y.clientX);
          }
        }, g = SI() ? {
          passive: !1
        } : !1;
        Hs(o) ? (f == null || f.addEventListener("touchmove", h.moveHandler, g), f == null || f.addEventListener("touchend", h.upHandler, g)) : (f == null || f.addEventListener("mousemove", m.moveHandler, g), f == null || f.addEventListener("mouseup", m.upHandler, g)), n.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: l,
          startSize: a,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (n) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(n), e.setColumnSizingInfo = (n) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(n), e.resetColumnSizing = (n) => {
      var t;
      e.setColumnSizing(n ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (n) => {
      var t;
      e.setColumnSizingInfo(n ? $s() : (t = e.initialState.columnSizingInfo) != null ? t : $s());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, i) => r + i.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, i) => r + i.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, i) => r + i.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, i) => r + i.getSize(), 0)) != null ? n : 0;
    };
  }
};
let mo = null;
function SI() {
  if (typeof mo == "boolean") return mo;
  let e = !1;
  try {
    const n = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, n), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return mo = e, mo;
}
function Hs(e) {
  return e.type === "touchstart";
}
const EI = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Dt("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((r) => ({
        ...r,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, r;
      const i = e.columns;
      return (t = i.length ? i.some((o) => o.getIsVisible()) : (r = n.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, r;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((r = n.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = te(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), ne(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = te(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, i) => [...t, ...r, ...i], ne(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => te(() => [r(), r().filter((i) => i.getIsVisible()).map((i) => i.id).join("_")], (i) => i.filter((o) => o.getIsVisible == null ? void 0 : o.getIsVisible()), ne(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var r;
      e.setColumnVisibility(t ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var r;
      t = (r = t) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((i, o) => ({
        ...i,
        [o.id]: t || !(o.getCanHide != null && o.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var r;
      e.toggleAllColumnsVisible((r = t.target) == null ? void 0 : r.checked);
    };
  }
};
function wi(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const DI = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, TI = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Dt("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const r = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, r, i, o;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((r = n.options.enableGlobalFilter) != null ? r : !0) && ((i = n.options.enableFilters) != null ? i : !0) && ((o = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? o : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => an.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return ls(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : an[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, MI = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Dt("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var r, i;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (i = e.options.autoResetAll) != null ? i : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var i, o;
      e.setExpanded(r ? {} : (i = (o = e.initialState) == null ? void 0 : o.expanded) != null ? i : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((i) => !i.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((o) => {
        const a = o.split(".");
        r = Math.max(r, a.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((r) => {
        var i;
        const o = r === !0 ? !0 : !!(r != null && r[e.id]);
        let a = {};
        if (r === !0 ? Object.keys(n.getRowModel().rowsById).forEach((s) => {
          a[s] = !0;
        }) : a = r, t = (i = t) != null ? i : !o, !o && t)
          return {
            ...a,
            [e.id]: !0
          };
        if (o && !t) {
          const {
            [e.id]: s,
            ...l
          } = a;
          return l;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var t;
      const r = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var t, r, i;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((r = n.options.enableExpanding) != null ? r : !0) && !!((i = e.subRows) != null && i.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, r = e;
      for (; t && r.parentId; )
        r = n.getRow(r.parentId, !0), t = r.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, kl = 0, Rl = 10, Bs = () => ({
  pageIndex: kl,
  pageSize: Rl
}), OI = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Bs(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Dt("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var r, i;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (i = e.options.autoResetAll) != null ? i : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (r) => {
      const i = (o) => On(r, o);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(i);
    }, e.resetPagination = (r) => {
      var i;
      e.setPagination(r ? Bs() : (i = e.initialState.pagination) != null ? i : Bs());
    }, e.setPageIndex = (r) => {
      e.setPagination((i) => {
        let o = On(r, i.pageIndex);
        const a = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return o = Math.max(0, Math.min(o, a)), {
          ...i,
          pageIndex: o
        };
      });
    }, e.resetPageIndex = (r) => {
      var i, o;
      e.setPageIndex(r ? kl : (i = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageIndex) != null ? i : kl);
    }, e.resetPageSize = (r) => {
      var i, o;
      e.setPageSize(r ? Rl : (i = (o = e.initialState) == null || (o = o.pagination) == null ? void 0 : o.pageSize) != null ? i : Rl);
    }, e.setPageSize = (r) => {
      e.setPagination((i) => {
        const o = Math.max(1, On(r, i.pageSize)), a = i.pageSize * i.pageIndex, s = Math.floor(a / o);
        return {
          ...i,
          pageIndex: s,
          pageSize: o
        };
      });
    }, e.setPageCount = (r) => e.setPagination((i) => {
      var o;
      let a = On(r, (o = e.options.pageCount) != null ? o : -1);
      return typeof a == "number" && (a = Math.max(-1, a)), {
        ...i,
        pageCount: a
      };
    }), e.getPageOptions = te(() => [e.getPageCount()], (r) => {
      let i = [];
      return r && r > 0 && (i = [...new Array(r)].fill(null).map((o, a) => a)), i;
    }, ne(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, i = e.getPageCount();
      return i === -1 ? !0 : i === 0 ? !1 : r < i - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Ys = () => ({
  top: [],
  bottom: []
}), kI = {
  getInitialState: (e) => ({
    rowPinning: Ys(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Dt("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, i) => {
      const o = r ? e.getLeafRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], a = i ? e.getParentRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], s = /* @__PURE__ */ new Set([...a, e.id, ...o]);
      n.setRowPinning((l) => {
        var u, c;
        if (t === "bottom") {
          var d, p;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((h) => !(s != null && s.has(h))),
            bottom: [...((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)]
          };
        }
        if (t === "top") {
          var f, m;
          return {
            top: [...((f = l == null ? void 0 : l.top) != null ? f : []).filter((h) => !(s != null && s.has(h))), ...Array.from(s)],
            bottom: ((m = l == null ? void 0 : l.bottom) != null ? m : []).filter((h) => !(s != null && s.has(h)))
          };
        }
        return {
          top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((h) => !(s != null && s.has(h))),
          bottom: ((c = l == null ? void 0 : l.bottom) != null ? c : []).filter((h) => !(s != null && s.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: r,
        enablePinning: i
      } = n.options;
      return typeof r == "function" ? r(e) : (t = r ?? i) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: r,
        bottom: i
      } = n.getState().rowPinning, o = t.some((s) => r == null ? void 0 : r.includes(s)), a = t.some((s) => i == null ? void 0 : i.includes(s));
      return o ? "top" : a ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const i = e.getIsPinned();
      if (!i) return -1;
      const o = (t = i === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((a) => {
        let {
          id: s
        } = a;
        return s;
      });
      return (r = o == null ? void 0 : o.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, r;
      return e.setRowPinning(n ? Ys() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : Ys());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const r = e.getState().rowPinning;
      if (!n) {
        var i, o;
        return !!((i = r.top) != null && i.length || (o = r.bottom) != null && o.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, r) => {
      var i;
      return ((i = e.options.keepPinnedRows) == null || i ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((a) => {
          const s = e.getRow(a, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((a) => n.find((s) => s.id === a))
      )).filter(Boolean).map((a) => ({
        ...a,
        position: r
      }));
    }, e.getTopRows = te(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), ne(e.options, "debugRows", "getTopRows")), e.getBottomRows = te(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), ne(e.options, "debugRows", "getBottomRows")), e.getCenterRows = te(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const i = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((o) => !i.has(o.id));
    }, ne(e.options, "debugRows", "getCenterRows"));
  }
}, RI = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Dt("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (n) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(n), e.resetRowSelection = (n) => {
      var t;
      return e.setRowSelection(n ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (n) => {
      e.setRowSelection((t) => {
        n = typeof n < "u" ? n : !e.getIsAllRowsSelected();
        const r = {
          ...t
        }, i = e.getPreGroupedRowModel().flatRows;
        return n ? i.forEach((o) => {
          o.getCanSelect() && (r[o.id] = !0);
        }) : i.forEach((o) => {
          delete r[o.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const r = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), i = {
        ...t
      };
      return e.getRowModel().rows.forEach((o) => {
        Al(i, o.id, r, !0, e);
      }), i;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = te(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Zs(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ne(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = te(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Zs(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ne(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = te(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Zs(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, ne(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let r = !!(n.length && Object.keys(t).length);
      return r && n.some((i) => i.getCanSelect() && !t[i.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((i) => i.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let r = !!n.length;
      return r && n.some((i) => !t[i.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var n;
      const t = Object.keys((n = e.getState().rowSelection) != null ? n : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : n.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (n) => {
      e.toggleAllRowsSelected(n.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (n) => {
      e.toggleAllPageRowsSelected(n.target.checked);
    };
  },
  createRow: (e, n) => {
    e.toggleSelected = (t, r) => {
      const i = e.getIsSelected();
      n.setRowSelection((o) => {
        var a;
        if (t = typeof t < "u" ? t : !i, e.getCanSelect() && i === t)
          return o;
        const s = {
          ...o
        };
        return Al(s, e.id, t, (a = r == null ? void 0 : r.selectChildren) != null ? a : !0, n), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Uu(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Pl(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Pl(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof n.options.enableRowSelection == "function" ? n.options.enableRowSelection(e) : (t = n.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof n.options.enableSubRowSelection == "function" ? n.options.enableSubRowSelection(e) : (t = n.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof n.options.enableMultiRowSelection == "function" ? n.options.enableMultiRowSelection(e) : (t = n.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (r) => {
        var i;
        t && e.toggleSelected((i = r.target) == null ? void 0 : i.checked);
      };
    };
  }
}, Al = (e, n, t, r, i) => {
  var o;
  const a = i.getRow(n, !0);
  t ? (a.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), a.getCanSelect() && (e[n] = !0)) : delete e[n], r && (o = a.subRows) != null && o.length && a.getCanSelectSubRows() && a.subRows.forEach((s) => Al(e, s.id, t, r, i));
};
function Zs(e, n) {
  const t = e.getState().rowSelection, r = [], i = {}, o = function(a, s) {
    return a.map((l) => {
      var u;
      const c = Uu(l, t);
      if (c && (r.push(l), i[l.id] = l), (u = l.subRows) != null && u.length && (l = {
        ...l,
        subRows: o(l.subRows)
      }), c)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: o(n.rows),
    flatRows: r,
    rowsById: i
  };
}
function Uu(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function Pl(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let i = !0, o = !1;
  return e.subRows.forEach((a) => {
    if (!(o && !i) && (a.getCanSelect() && (Uu(a, n) ? o = !0 : i = !1), a.subRows && a.subRows.length)) {
      const s = Pl(a, n);
      s === "all" ? o = !0 : (s === "some" && (o = !0), i = !1);
    }
  }), i ? "all" : o ? "some" : !1;
}
const Fl = /([0-9]+)/gm, AI = (e, n, t) => hh(Wn(e.getValue(t)).toLowerCase(), Wn(n.getValue(t)).toLowerCase()), PI = (e, n, t) => hh(Wn(e.getValue(t)), Wn(n.getValue(t))), FI = (e, n, t) => Ju(Wn(e.getValue(t)).toLowerCase(), Wn(n.getValue(t)).toLowerCase()), NI = (e, n, t) => Ju(Wn(e.getValue(t)), Wn(n.getValue(t))), _I = (e, n, t) => {
  const r = e.getValue(t), i = n.getValue(t);
  return r > i ? 1 : r < i ? -1 : 0;
}, LI = (e, n, t) => Ju(e.getValue(t), n.getValue(t));
function Ju(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function Wn(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function hh(e, n) {
  const t = e.split(Fl).filter(Boolean), r = n.split(Fl).filter(Boolean);
  for (; t.length && r.length; ) {
    const i = t.shift(), o = r.shift(), a = parseInt(i, 10), s = parseInt(o, 10), l = [a, s].sort();
    if (isNaN(l[0])) {
      if (i > o)
        return 1;
      if (o > i)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(a) ? -1 : 1;
    if (a > s)
      return 1;
    if (s > a)
      return -1;
  }
  return t.length - r.length;
}
const Kr = {
  alphanumeric: AI,
  alphanumericCaseSensitive: PI,
  text: FI,
  textCaseSensitive: NI,
  datetime: _I,
  basic: LI
}, VI = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Dt("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const i of t) {
        const o = i == null ? void 0 : i.getValue(e.id);
        if (Object.prototype.toString.call(o) === "[object Date]")
          return Kr.datetime;
        if (typeof o == "string" && (r = !0, o.split(Fl).length > 1))
          return Kr.alphanumeric;
      }
      return r ? Kr.text : Kr.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ls(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : Kr[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const i = e.getNextSortingOrder(), o = typeof t < "u" && t !== null;
      n.setSorting((a) => {
        const s = a == null ? void 0 : a.find((f) => f.id === e.id), l = a == null ? void 0 : a.findIndex((f) => f.id === e.id);
        let u = [], c, d = o ? t : i === "desc";
        if (a != null && a.length && e.getCanMultiSort() && r ? s ? c = "toggle" : c = "add" : a != null && a.length && l !== a.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (o || i || (c = "remove")), c === "add") {
          var p;
          u = [...a, {
            id: e.id,
            desc: d
          }], u.splice(0, u.length - ((p = n.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = a.map((f) => f.id === e.id ? {
          ...f,
          desc: d
        } : f) : c === "remove" ? u = a.filter((f) => f.id !== e.id) : u = [{
          id: e.id,
          desc: d
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var t, r;
      return ((t = (r = e.columnDef.sortDescFirst) != null ? r : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var r, i;
      const o = e.getFirstSortDir(), a = e.getIsSorted();
      return a ? a !== o && ((r = n.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(t && (i = n.options.enableMultiRemove) != null) || i) ? !1 : a === "desc" ? "asc" : "desc" : o;
    }, e.getCanSort = () => {
      var t, r;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((r = n.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, r;
      return (t = (r = e.columnDef.enableMultiSort) != null ? r : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const r = (t = n.getState().sorting) == null ? void 0 : t.find((i) => i.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, r;
      return (t = (r = n.getState().sorting) == null ? void 0 : r.findIndex((i) => i.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      n.setSorting((t) => t != null && t.length ? t.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (r) => {
        t && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? n.options.isMultiSortEvent == null ? void 0 : n.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (n) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(n), e.resetSorting = (n) => {
      var t, r;
      e.setSorting(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, WI = [
  aI,
  EI,
  CI,
  II,
  lI,
  uI,
  DI,
  //depends on ColumnFaceting
  TI,
  //depends on ColumnFiltering
  VI,
  yI,
  //depends on RowSorting
  MI,
  OI,
  kI,
  RI,
  xI
];
function GI(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...WI, ...(n = e._features) != null ? n : []];
  let i = {
    _features: r
  };
  const o = i._features.reduce((p, f) => Object.assign(p, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(i)), {}), a = (p) => i.options.mergeOptions ? i.options.mergeOptions(o, p) : {
    ...o,
    ...p
  };
  let l = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  i._features.forEach((p) => {
    var f;
    l = (f = p.getInitialState == null ? void 0 : p.getInitialState(l)) != null ? f : l;
  });
  const u = [];
  let c = !1;
  const d = {
    _features: r,
    options: {
      ...o,
      ...e
    },
    initialState: l,
    _queue: (p) => {
      u.push(p), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((f) => setTimeout(() => {
        throw f;
      })));
    },
    reset: () => {
      i.setState(i.initialState);
    },
    setOptions: (p) => {
      const f = On(p, i.options);
      i.options = a(f);
    },
    getState: () => i.options.state,
    setState: (p) => {
      i.options.onStateChange == null || i.options.onStateChange(p);
    },
    _getRowId: (p, f, m) => {
      var h;
      return (h = i.options.getRowId == null ? void 0 : i.options.getRowId(p, f, m)) != null ? h : `${m ? [m.id, f].join(".") : f}`;
    },
    getCoreRowModel: () => (i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)), i._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => i.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (p, f) => {
      let m = (f ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[p];
      if (!m && (m = i.getCoreRowModel().rowsById[p], !m))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${p}`) : new Error();
      return m;
    },
    _getDefaultColumnDef: te(() => [i.options.defaultColumn], (p) => {
      var f;
      return p = (f = p) != null ? f : {}, {
        header: (m) => {
          const h = m.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var h, g;
          return (h = (g = m.renderValue()) == null || g.toString == null ? void 0 : g.toString()) != null ? h : null;
        },
        ...i._features.reduce((m, h) => Object.assign(m, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...p
      };
    }, ne(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => i.options.columns,
    getAllColumns: te(() => [i._getColumnDefs()], (p) => {
      const f = function(m, h, g) {
        return g === void 0 && (g = 0), m.map((v) => {
          const y = oI(i, v, g, h), b = v;
          return y.columns = b.columns ? f(b.columns, y, g + 1) : [], y;
        });
      };
      return f(p);
    }, ne(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: te(() => [i.getAllColumns()], (p) => p.flatMap((f) => f.getFlatColumns()), ne(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: te(() => [i.getAllFlatColumns()], (p) => p.reduce((f, m) => (f[m.id] = m, f), {}), ne(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: te(() => [i.getAllColumns(), i._getOrderColumnsFn()], (p, f) => {
      let m = p.flatMap((h) => h.getLeafColumns());
      return f(m);
    }, ne(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (p) => {
      const f = i._getAllFlatColumnsById()[p];
      return process.env.NODE_ENV !== "production" && !f && console.error(`[Table] Column with id '${p}' does not exist.`), f;
    }
  };
  Object.assign(i, d);
  for (let p = 0; p < i._features.length; p++) {
    const f = i._features[p];
    f == null || f.createTable == null || f.createTable(i);
  }
  return i;
}
function $I() {
  return (e) => te(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(i, o, a) {
      o === void 0 && (o = 0);
      const s = [];
      for (let u = 0; u < i.length; u++) {
        const c = sI(e, e._getRowId(i[u], u, a), i[u], u, o, void 0, a == null ? void 0 : a.id);
        if (t.flatRows.push(c), t.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var l;
          c.originalSubRows = e.options.getSubRows(i[u], u), (l = c.originalSubRows) != null && l.length && (c.subRows = r(c.originalSubRows, o + 1, c));
        }
      }
      return s;
    };
    return t.rows = r(n), t;
  }, ne(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function HI(e) {
  const n = [], t = (r) => {
    var i;
    n.push(r), (i = r.subRows) != null && i.length && r.getIsExpanded() && r.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: n,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function BI(e) {
  return (n) => te(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: i,
      pageIndex: o
    } = t;
    let {
      rows: a,
      flatRows: s,
      rowsById: l
    } = r;
    const u = i * o, c = u + i;
    a = a.slice(u, c);
    let d;
    n.options.paginateExpandedRows ? d = {
      rows: a,
      flatRows: s,
      rowsById: l
    } : d = HI({
      rows: a,
      flatRows: s,
      rowsById: l
    }), d.flatRows = [];
    const p = (f) => {
      d.flatRows.push(f), f.subRows.length && f.subRows.forEach(p);
    };
    return d.rows.forEach(p), d;
  }, ne(n.options, "debugTable", "getPaginationRowModel"));
}
function YI() {
  return (e) => te(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, i = [], o = r.filter((l) => {
      var u;
      return (u = e.getColumn(l.id)) == null ? void 0 : u.getCanSort();
    }), a = {};
    o.forEach((l) => {
      const u = e.getColumn(l.id);
      u && (a[l.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const s = (l) => {
      const u = l.map((c) => ({
        ...c
      }));
      return u.sort((c, d) => {
        for (let f = 0; f < o.length; f += 1) {
          var p;
          const m = o[f], h = a[m.id], g = h.sortUndefined, v = (p = m == null ? void 0 : m.desc) != null ? p : !1;
          let y = 0;
          if (g) {
            const b = c.getValue(m.id), I = d.getValue(m.id), w = b === void 0, S = I === void 0;
            if (w || S) {
              if (g === "first") return w ? -1 : 1;
              if (g === "last") return w ? 1 : -1;
              y = w && S ? 0 : w ? g : -g;
            }
          }
          if (y === 0 && (y = h.sortingFn(c, d, m.id)), y !== 0)
            return v && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return c.index - d.index;
      }), u.forEach((c) => {
        var d;
        i.push(c), (d = c.subRows) != null && d.length && (c.subRows = s(c.subRows));
      }), u;
    };
    return {
      rows: s(t.rows),
      flatRows: i,
      rowsById: t.rowsById
    };
  }, ne(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function hd(e, n) {
  return e ? ZI(e) ? /* @__PURE__ */ T.createElement(e, n) : e : null;
}
function ZI(e) {
  return XI(e) || typeof e == "function" || zI(e);
}
function XI(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function zI(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function jI(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = T.useState(() => ({
    current: GI(n)
  })), [r, i] = T.useState(() => t.current.initialState);
  return t.current.setOptions((o) => ({
    ...o,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (a) => {
      i(a), e.onStateChange == null || e.onStateChange(a);
    }
  })), t.current;
}
function UI(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" }, child: [] }] })(e);
}
function JI(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" }, child: [] }] })(e);
}
const NR = ({ getValue: e }) => {
  const n = e(), [t, r] = ae(n);
  return Ie(() => {
    r(n);
  }, [n]), /* @__PURE__ */ L("span", { className: "capitalize cds-body-sm text-grayscale-500", children: t || Gw });
};
function Xs({
  indeterminate: e,
  className: n = "",
  color: t,
  ...r
}) {
  const i = H(null);
  return Ie(() => {
    typeof e == "boolean" && (i.current.indeterminate = !r.checked && e);
  }, [i, e]), /* @__PURE__ */ L(tI, { color: t, className: n, elementRef: i, ...r });
}
function _R({
  data: e,
  columns: n,
  className: t = "",
  totalCount: r = 0,
  centerAlignCols: i = [],
  color: o = "primary",
  rightAlignCols: a = [],
  filterOptions: s = [],
  selectRowsEnabled: l = !1,
  contextFilters: u,
  sortingEnabled: c = !0,
  setContextFilters: d,
  currentPage: p = 1,
  actionComponent: f,
  setCurrentPage: m,
  getRowSelectionStatus: h,
  listLoadingState: g,
  noDataTemplate: v = /* @__PURE__ */ L("div", { className: "flex justify-center cds-body-md mt-9 text-grayscale-200", children: "No data available" })
}) {
  var _, k;
  const [y, b] = C.useState([]), [I, w] = C.useState({}), [S, x] = C.useState({
    pageIndex: 0,
    pageSize: 7
  });
  let E = n;
  l && (E = [
    {
      id: "select",
      header: ({ table: F }) => /* @__PURE__ */ L(
        Xs,
        {
          color: o,
          checked: F.getIsAllRowsSelected(),
          indeterminate: F.getIsSomeRowsSelected(),
          onChange: F.getToggleAllRowsSelectedHandler()
        }
      ),
      cell: ({ row: F }) => /* @__PURE__ */ L(
        Xs,
        {
          color: o,
          checked: F.getIsSelected(),
          disabled: !F.getCanSelect(),
          indeterminate: F.getIsSomeSelected(),
          onChange: F.getToggleSelectedHandler()
        }
      )
    },
    ...n
  ]);
  const D = jI({
    data: e || [],
    columns: E,
    state: {
      sorting: y,
      rowSelection: I,
      pagination: S
    },
    enableRowSelection: (F) => h(F),
    enableSorting: c,
    onRowSelectionChange: w,
    onSortingChange: b,
    getCoreRowModel: $I(),
    getSortedRowModel: YI(),
    getPaginationRowModel: BI(),
    onPaginationChange: x
  });
  return /* @__PURE__ */ ce(Kn, { children: [
    /* @__PURE__ */ L("div", { className: "flex justify-between", children: f ? /* @__PURE__ */ L("div", { children: f({
      selectedRowsLength: (_ = Object.keys(I)) == null ? void 0 : _.length,
      rowSelection: I
    }) }) : null }),
    g ? /* @__PURE__ */ L(Kn, {}) : (
      // <PageLoader content="Fetching rooms..." />
      e && e.length ? /* @__PURE__ */ ce("div", { className: He(t), children: [
        /* @__PURE__ */ ce("table", { className: "w-full mb-6 tstack", children: [
          /* @__PURE__ */ L("thead", { children: D.getHeaderGroups().map((F) => /* @__PURE__ */ L("tr", { children: F.headers.map((A) => {
            const N = i.includes(A.id) ? "text-center w-2/12" : a.includes(A.id) ? "text-right w-2/12" : "text-left";
            return /* @__PURE__ */ L(
              "th",
              {
                className: `${N} py-6 text-[#6C6A80] cds-caption px-6`,
                children: A.isPlaceholder ? null : /* @__PURE__ */ ce(
                  "div",
                  {
                    className: A.column.getCanSort() ? "cursor-pointer select-none flex" : "",
                    onClick: A.column.getToggleSortingHandler(),
                    children: [
                      hd(
                        A.column.columnDef.header,
                        A.getContext()
                      ),
                      {
                        asc: "Up",
                        // <KeyboardArrowUpIcon
                        //   style={{
                        //     color: "#90ceba",
                        //     marginLeft: "6px",
                        //   }}
                        //   fontSize="small"
                        // />
                        desc: "Down"
                        // <KeyboardArrowDownIcon
                        //   style={{
                        //     color: "#90ceba",
                        //     marginLeft: "6px",
                        //   }}
                        //   fontSize="small"
                        // />
                      }[A.column.getIsSorted()] ?? null
                    ]
                  }
                )
              },
              ci()
            );
          }) }, ci())) }),
          /* @__PURE__ */ L("tbody", { children: D.getRowModel().rows.map((F, A) => /* @__PURE__ */ L(
            "tr",
            {
              className: "h-[72px] bg-white border border-[#ededf0]",
              children: F.getVisibleCells().map((N, M) => {
                const V = i.includes(N.column.id) ? "flex justify-center items-center" : a.includes(N.column.id) ? "float-right" : "text-left";
                return /* @__PURE__ */ L(
                  "td",
                  {
                    className: "border-[#ededf0] h-[72px] border-0 text-[#302E3E] cds-body-sm px-6 py-3",
                    children: /* @__PURE__ */ L("div", { className: `${V}`, children: hd(
                      N.column.columnDef.cell,
                      N.getContext()
                    ) })
                  },
                  ci()
                );
              })
            },
            ci()
          )) })
        ] }),
        /* @__PURE__ */ ce("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ L("div", { className: "flex items-center px-6", children: l ? /* @__PURE__ */ ce(Kn, { children: [
            /* @__PURE__ */ L(
              Xs,
              {
                className: "grayscale-item opacity-40",
                color: "neutral",
                checked: !0,
                indeterminate: D.getIsSomePageRowsSelected(),
                onChange: D.getToggleAllPageRowsSelectedHandler()
              }
            ),
            /* @__PURE__ */ L("div", { className: "ml-4 text-grayscale-100 cds-caption", children: `${(k = Object.keys(I)) == null ? void 0 : k.length} rows selected` })
          ] }) : null }),
          /* @__PURE__ */ ce("div", { className: "flex items-center justify-end", children: [
            /* @__PURE__ */ ce("div", { className: "flex items-center gap-2 cds-body-sm", children: [
              /* @__PURE__ */ L(
                "button",
                {
                  className: `
								${`text-${o}-400`}
								${`bg-${o}-50`} w-6 h-6
								disabled:opacity-40 flex items-center justify-center`,
                  onClick: () => D.previousPage(),
                  disabled: !D.getCanPreviousPage(),
                  children: /* @__PURE__ */ L(UI, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ ce("div", { className: "flex items-center px-6", children: [
                /* @__PURE__ */ L(
                  "input",
                  {
                    type: "number",
                    min: 1,
                    max: D.getPageCount().toLocaleString(),
                    value: D.getState().pagination.pageIndex + 1,
                    onChange: (F) => {
                      const A = F.target.value ? Number(F.target.value) - 1 : 0;
                      D.setPageIndex(A);
                    },
                    className: `${`bg-${o}-50`} focus-visible:outline-none text-center
										text-grayscale-500 w-8 h-6 mr-1 rounded-lg font-normal`
                  }
                ),
                /* @__PURE__ */ ce("div", { className: "text-grayscale-100 cds-body-sm", children: [
                  "/ ",
                  D.getPageCount().toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ L(
                "button",
                {
                  className: `
								${`text-${o}-400`}
								${`bg-${o}-50`} w-6 h-6
								disabled:opacity-40 flex items-center justify-center`,
                  onClick: () => D.nextPage(),
                  disabled: !D.getCanNextPage(),
                  children: /* @__PURE__ */ L(JI, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ L("div", { className: "ml-9 cds-caption text-grayscale-75", children: `${D.getRowCount().toLocaleString()} records in total` })
          ] })
        ] })
      ] }) : v
    )
  ] });
}
function LR({
  menuButton: e,
  className: n,
  data: t = [],
  color: r = "primary"
}) {
  return /* @__PURE__ */ L("div", { className: He(n), children: /* @__PURE__ */ ce(hw, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ L("div", { children: /* @__PURE__ */ L(Tm, { className: `hover-text-${r}-300`, children: e }) }),
    /* @__PURE__ */ L(
      Ji,
      {
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
        children: /* @__PURE__ */ L(Mm, { className: "absolute z-[14] left-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg min-w-28 w-max ring-1 ring-black/5 focus:outline-none", children: /* @__PURE__ */ L("div", { className: "px-1 py-1 ", children: t.map((i, o) => {
          const { label: a, disabled: s, clickHandler: l } = i;
          return /* @__PURE__ */ L(Om, { children: ({ active: u }) => /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              onClick: l,
              disabled: s,
              className: `${s ? "pointer-events-none opacity-40" : "pointer-events-auto"} ${u ? `${`bg-${r}-100`} ` : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 cds-body-sm`,
              children: a
            }
          ) }, o);
        }) }) })
      }
    )
  ] }) });
}
function VR({ tabs: e, color: n = "primary", className: t }) {
  return /* @__PURE__ */ L("div", { className: He(t, "max-w-md min-w-full px-0"), children: /* @__PURE__ */ ce(Am, { children: [
    /* @__PURE__ */ L(Pm, { className: "flex border-b border-grayscale-50", children: e.map((r, i) => /* @__PURE__ */ L(
      _w,
      {
        className: ({ selected: o }) => He(
          `min-w-max px-3 py-1.5 mr-5 cds-heading-xs focus-visible:outline-none  ${!o && `hover-text-${n}-400`}`,
          o ? `text-black border-b-4 ${`border-${n}-300`}` : "cds-body-md font-[400]"
        ),
        children: r.name
      },
      i
    )) }),
    /* @__PURE__ */ L(Fm, { className: "mt-2", children: e.map((r, i) => /* @__PURE__ */ L(
      Nm,
      {
        className: He("mt-6  focus:outline-none "),
        children: r.content
      },
      i
    )) })
  ] }) });
}
function QI(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { fillRule: "evenodd", clipRule: "evenodd", d: "M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z" }, child: [] }] })(e);
}
function WR({
  color: e = "primary",
  data: n,
  className: t,
  onChangeHandler: r,
  name: i,
  size: o = "large",
  label: a,
  isRequired: s = !1,
  selected: l,
  variant: u = "solid"
}) {
  return /* @__PURE__ */ ce("div", { className: He(t, "relative"), children: [
    a ? /* @__PURE__ */ L("div", { className: "mb-2", children: /* @__PURE__ */ ce("label", { htmlFor: i, className: "text-gray-600 cds-body-sm", children: [
      a,
      " ",
      s ? "*" : null
    ] }) }) : null,
    /* @__PURE__ */ L(Y1, { value: l, onChange: r, children: /* @__PURE__ */ ce(
      "div",
      {
        className: He("relative", {
          "w-full": u != "outline",
          "min-w-[9rem] w-max": u == "outline",
          className: t
        }),
        children: [
          /* @__PURE__ */ ce(
            Sm,
            {
              className: `relative group w-full h-12 py-2 px-6 cds-body-sm text-grayscale-500 rounded-md shadow-none
            placeholder:text-grayscale-100 focus:outline-none text-left ${o === "large" ? "h-12" : "h-auto"} ${u == "outline" ? "pl-0 ring-0 pr-10 border-0" : `pl-3 ring-1 ring-inset ring-grayscale-100 rounded-lg ${`hover-ring-${e}-300`} ${`focus-ring-${e}-300`}`} sm:text-sm`,
              children: [
                /* @__PURE__ */ L(
                  "span",
                  {
                    className: `block mr-1 truncate ${u === "outline" ? "cds-heading-sm text-[1.5rem]" : "cds-body-sm"} `,
                    children: l == null ? void 0 : l.label
                  }
                ),
                /* @__PURE__ */ L("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ L(
                  QI,
                  {
                    className: "w-6 h-6 text-grayscale-300 group-hover:text-primary-300 ",
                    "aria-hidden": "true"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ L(
            Ji,
            {
              as: ze,
              enter: "transition duration-100 ease-out",
              enterFrom: "transform scale-95 opacity-0",
              enterTo: "transform scale-100 opacity-100",
              leave: "transition duration-75 ease-out",
              leaveFrom: "transform scale-100 opacity-100",
              leaveTo: "transform scale-95 opacity-0",
              children: /* @__PURE__ */ L(Em, { className: "absolute z-[15] w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm", children: n.map((c, d) => /* @__PURE__ */ L(
                Dm,
                {
                  disabled: c.available === void 0 ? !1 : !c.available,
                  className: ({ active: p, selected: f }) => `relative  data-[disabled]:opacity-50 cursor-pointer select-none cds-body-sm py-2 px-4 mb-0.5 ${p ? `${`bg-${e}-75`}` : "text-grayscale-500"} ${f ? `${`bg-${e}-75`}` : "text-grayscale-500"}`,
                  value: c,
                  children: ({ selected: p }) => /* @__PURE__ */ L(Kn, { children: /* @__PURE__ */ L(
                    "span",
                    {
                      className: `block truncate ${p ? `font-medium ${`text-${e}-500`}` : "font-normal"}`,
                      children: c.label
                    }
                  ) })
                },
                d
              )) })
            }
          )
        ]
      }
    ) })
  ] });
}
function qI(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Nl(e, n);
}
function Nl(e, n) {
  return Nl = Object.setPrototypeOf || function(r, i) {
    return r.__proto__ = i, r;
  }, Nl(e, n);
}
function KI(e, n) {
  if (e == null) return {};
  var t = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(n.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function gd(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ex(e, n, t) {
  return e === n ? !0 : e.correspondingElement ? e.correspondingElement.classList.contains(t) : e.classList.contains(t);
}
function tx(e, n, t) {
  if (e === n)
    return !0;
  for (; e.parentNode || e.host; ) {
    if (e.parentNode && ex(e, n, t))
      return !0;
    e = e.parentNode || e.host;
  }
  return e;
}
function nx(e) {
  return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY;
}
var rx = function() {
  if (!(typeof window > "u" || typeof window.addEventListener != "function")) {
    var n = !1, t = Object.defineProperty({}, "passive", {
      get: function() {
        n = !0;
      }
    }), r = function() {
    };
    return window.addEventListener("testPassiveEventSupport", r, t), window.removeEventListener("testPassiveEventSupport", r, t), n;
  }
};
function ix(e) {
  return e === void 0 && (e = 0), function() {
    return ++e;
  };
}
var ox = ix(), _l, ho = {}, zs = {}, ax = ["touchstart", "touchmove"], sx = "ignore-react-onclickoutside";
function vd(e, n) {
  var t = {}, r = ax.indexOf(n) !== -1;
  return r && _l && (t.passive = !e.props.preventDefault), t;
}
function us(e, n) {
  var t, r, i = e.displayName || e.name || "Component";
  return r = t = /* @__PURE__ */ function(o) {
    qI(a, o);
    function a(l) {
      var u;
      return u = o.call(this, l) || this, u.__outsideClickHandler = function(c) {
        if (typeof u.__clickOutsideHandlerProp == "function") {
          u.__clickOutsideHandlerProp(c);
          return;
        }
        var d = u.getInstance();
        if (typeof d.props.handleClickOutside == "function") {
          d.props.handleClickOutside(c);
          return;
        }
        if (typeof d.handleClickOutside == "function") {
          d.handleClickOutside(c);
          return;
        }
        throw new Error("WrappedComponent: " + i + " lacks a handleClickOutside(event) function for processing outside click events.");
      }, u.__getComponentNode = function() {
        var c = u.getInstance();
        return typeof c.setClickOutsideRef == "function" ? c.setClickOutsideRef() : Pv(c);
      }, u.enableOnClickOutside = function() {
        if (!(typeof document > "u" || zs[u._uid])) {
          typeof _l > "u" && (_l = rx()), zs[u._uid] = !0;
          var c = u.props.eventTypes;
          c.forEach || (c = [c]), ho[u._uid] = function(d) {
            if (u.componentNode !== null && !(u.initTimeStamp > d.timeStamp) && (u.props.preventDefault && d.preventDefault(), u.props.stopPropagation && d.stopPropagation(), !(u.props.excludeScrollbar && nx(d)))) {
              var p = d.composed && d.composedPath && d.composedPath().shift() || d.target;
              tx(p, u.componentNode, u.props.outsideClickIgnoreClass) === document && u.__outsideClickHandler(d);
            }
          }, c.forEach(function(d) {
            document.addEventListener(d, ho[u._uid], vd(gd(u), d));
          });
        }
      }, u.disableOnClickOutside = function() {
        delete zs[u._uid];
        var c = ho[u._uid];
        if (c && typeof document < "u") {
          var d = u.props.eventTypes;
          d.forEach || (d = [d]), d.forEach(function(p) {
            return document.removeEventListener(p, c, vd(gd(u), p));
          }), delete ho[u._uid];
        }
      }, u.getRef = function(c) {
        return u.instanceRef = c;
      }, u._uid = ox(), u.initTimeStamp = performance.now(), u;
    }
    var s = a.prototype;
    return s.getInstance = function() {
      if (e.prototype && !e.prototype.isReactComponent)
        return this;
      var u = this.instanceRef;
      return u.getInstance ? u.getInstance() : u;
    }, s.componentDidMount = function() {
      typeof document > "u" || !document.createElement || (this.getInstance(), this.componentNode = this.__getComponentNode(), !this.props.disableOnClickOutside && this.enableOnClickOutside());
    }, s.componentDidUpdate = function() {
      this.componentNode = this.__getComponentNode();
    }, s.componentWillUnmount = function() {
      this.disableOnClickOutside();
    }, s.render = function() {
      var u = this.props;
      u.excludeScrollbar;
      var c = KI(u, ["excludeScrollbar"]);
      return e.prototype && e.prototype.isReactComponent ? c.ref = this.getRef : c.wrappedRef = this.getRef, c.disableOnClickOutside = this.disableOnClickOutside, c.enableOnClickOutside = this.enableOnClickOutside, ou(e, c);
    }, a;
  }(tt), t.displayName = "OnClickOutside(" + i + ")", t.defaultProps = {
    eventTypes: ["mousedown", "touchstart"],
    excludeScrollbar: !1,
    outsideClickIgnoreClass: sx,
    preventDefault: !1,
    stopPropagation: !1
  }, t.getClass = function() {
    return e.getClass ? e.getClass() : e;
  }, r;
}
function X(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Re(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function Hn(e, n) {
  const t = X(e);
  return isNaN(n) ? Re(e, NaN) : (n && t.setDate(t.getDate() + n), t);
}
function Qu(e, n) {
  const t = +X(e);
  return Re(e, t + n);
}
const gh = 6048e5, lx = 864e5, cs = 6e4, ds = 36e5, ux = 1e3;
function cx(e, n) {
  return Qu(e, n * ds);
}
function Ll(e, n) {
  return Qu(e, n * cs);
}
function Ht(e, n) {
  const t = X(e);
  if (isNaN(n)) return Re(e, NaN);
  if (!n)
    return t;
  const r = t.getDate(), i = Re(e, t.getTime());
  i.setMonth(t.getMonth() + n + 1, 0);
  const o = i.getDate();
  return r >= o ? i : (t.setFullYear(
    i.getFullYear(),
    i.getMonth(),
    r
  ), t);
}
function qu(e, n) {
  const t = n * 3;
  return Ht(e, t);
}
function dx(e, n) {
  return Qu(e, n * 1e3);
}
function ca(e, n) {
  const t = n * 7;
  return Hn(e, t);
}
function un(e, n) {
  return Ht(e, n * 12);
}
function ur(e) {
  const n = X(e);
  return n.setHours(0, 0, 0, 0), n;
}
function da(e) {
  const n = X(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function Pi(e, n) {
  const t = ur(e), r = ur(n), i = +t - da(t), o = +r - da(r);
  return Math.round((i - o) / lx);
}
function fa(e, n) {
  const t = X(e), r = X(n), i = t.getFullYear() - r.getFullYear(), o = t.getMonth() - r.getMonth();
  return i * 12 + o;
}
function tr(e) {
  const n = X(e);
  return Math.trunc(n.getMonth() / 3) + 1;
}
function pa(e, n) {
  const t = X(e), r = X(n), i = t.getFullYear() - r.getFullYear(), o = tr(t) - tr(r);
  return i * 4 + o;
}
function ma(e, n) {
  const t = X(e), r = X(n);
  return t.getFullYear() - r.getFullYear();
}
function vh(e) {
  const n = X(e);
  return n.setHours(23, 59, 59, 999), n;
}
function fx(e) {
  const n = X(e), t = n.getMonth();
  return n.setFullYear(n.getFullYear(), t + 1, 0), n.setHours(23, 59, 59, 999), n;
}
let px = {};
function mr() {
  return px;
}
function mx(e, n) {
  var s, l;
  const t = mr(), r = t.weekStartsOn ?? ((l = (s = t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? 0, i = X(e), o = i.getDay(), a = (o < r ? -7 : 0) + 6 - (o - r);
  return i.setDate(i.getDate() + a), i.setHours(23, 59, 59, 999), i;
}
function bh(e) {
  const n = X(e), t = n.getFullYear();
  return n.setFullYear(t + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
const hx = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, gx = (e, n, t) => {
  let r;
  const i = hx[e];
  return typeof i == "string" ? r = i : n === 1 ? r = i.one : r = i.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function js(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const vx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, bx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, yx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wx = {
  date: js({
    formats: vx,
    defaultWidth: "full"
  }),
  time: js({
    formats: bx,
    defaultWidth: "full"
  }),
  dateTime: js({
    formats: yx,
    defaultWidth: "full"
  })
}, Cx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ix = (e, n, t, r) => Cx[e];
function ei(e) {
  return (n, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, s = t != null && t.width ? String(t.width) : a;
      i = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, s = t != null && t.width ? String(t.width) : e.defaultWidth;
      i = e.values[s] || e.values[a];
    }
    const o = e.argumentCallback ? e.argumentCallback(n) : n;
    return i[o];
  };
}
const xx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Sx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ex = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Dx = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Tx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Mx = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ox = (e, n) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, kx = {
  ordinalNumber: Ox,
  era: ei({
    values: xx,
    defaultWidth: "wide"
  }),
  quarter: ei({
    values: Sx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ei({
    values: Ex,
    defaultWidth: "wide"
  }),
  day: ei({
    values: Dx,
    defaultWidth: "wide"
  }),
  dayPeriod: ei({
    values: Tx,
    defaultWidth: "wide",
    formattingValues: Mx,
    defaultFormattingWidth: "wide"
  })
};
function ti(e) {
  return (n, t = {}) => {
    const r = t.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = n.match(i);
    if (!o)
      return null;
    const a = o[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Ax(s, (d) => d.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Rx(s, (d) => d.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(u)
    ) : u;
    const c = n.slice(a.length);
    return { value: u, rest: c };
  };
}
function Rx(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Ax(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Px(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], o = n.match(e.parsePattern);
    if (!o) return null;
    let a = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    a = t.valueCallback ? t.valueCallback(a) : a;
    const s = n.slice(i.length);
    return { value: a, rest: s };
  };
}
const Fx = /^(\d+)(th|st|nd|rd)?/i, Nx = /\d+/i, _x = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Lx = {
  any: [/^b/i, /^(a|c)/i]
}, Vx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Wx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $x = {
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
    /^d/i
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
    /^d/i
  ]
}, Hx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Bx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Yx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Zx = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Xx = {
  ordinalNumber: Px({
    matchPattern: Fx,
    parsePattern: Nx,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ti({
    matchPatterns: _x,
    defaultMatchWidth: "wide",
    parsePatterns: Lx,
    defaultParseWidth: "any"
  }),
  quarter: ti({
    matchPatterns: Vx,
    defaultMatchWidth: "wide",
    parsePatterns: Wx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ti({
    matchPatterns: Gx,
    defaultMatchWidth: "wide",
    parsePatterns: $x,
    defaultParseWidth: "any"
  }),
  day: ti({
    matchPatterns: Hx,
    defaultMatchWidth: "wide",
    parsePatterns: Bx,
    defaultParseWidth: "any"
  }),
  dayPeriod: ti({
    matchPatterns: Yx,
    defaultMatchWidth: "any",
    parsePatterns: Zx,
    defaultParseWidth: "any"
  })
}, yh = {
  code: "en-US",
  formatDistance: gx,
  formatLong: wx,
  formatRelative: Ix,
  localize: kx,
  match: Xx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function fs(e) {
  const n = X(e), t = Re(e, 0);
  return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function zx(e) {
  const n = X(e);
  return Pi(n, fs(n)) + 1;
}
function pn(e, n) {
  var s, l, u, c;
  const t = mr(), r = (n == null ? void 0 : n.weekStartsOn) ?? ((l = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? t.weekStartsOn ?? ((c = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = X(e), o = i.getDay(), a = (o < r ? 7 : 0) + o - r;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function Fr(e) {
  return pn(e, { weekStartsOn: 1 });
}
function wh(e) {
  const n = X(e), t = n.getFullYear(), r = Re(e, 0);
  r.setFullYear(t + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Fr(r), o = Re(e, 0);
  o.setFullYear(t, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Fr(o);
  return n.getTime() >= i.getTime() ? t + 1 : n.getTime() >= a.getTime() ? t : t - 1;
}
function jx(e) {
  const n = wh(e), t = Re(e, 0);
  return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), Fr(t);
}
function Ku(e) {
  const n = X(e), t = +Fr(n) - +jx(n);
  return Math.round(t / gh) + 1;
}
function ec(e, n) {
  var c, d, p, f;
  const t = X(e), r = t.getFullYear(), i = mr(), o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((f = (p = i.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = Re(e, 0);
  a.setFullYear(r + 1, 0, o), a.setHours(0, 0, 0, 0);
  const s = pn(a, n), l = Re(e, 0);
  l.setFullYear(r, 0, o), l.setHours(0, 0, 0, 0);
  const u = pn(l, n);
  return t.getTime() >= s.getTime() ? r + 1 : t.getTime() >= u.getTime() ? r : r - 1;
}
function Ux(e, n) {
  var s, l, u, c;
  const t = mr(), r = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((l = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((c = (u = t.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, i = ec(e, n), o = Re(e, 0);
  return o.setFullYear(i, 0, r), o.setHours(0, 0, 0, 0), pn(o, n);
}
function Ch(e, n) {
  const t = X(e), r = +pn(t, n) - +Ux(t, n);
  return Math.round(r / gh) + 1;
}
function ke(e, n) {
  const t = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(n, "0");
  return t + r;
}
const wn = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), r = t > 0 ? t : 1 - t;
    return ke(n === "yy" ? r % 100 : r, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : ke(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return ke(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return ke(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return ke(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return ke(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return ke(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, t - 3)
    );
    return ke(i, n.length);
  }
}, vr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, bd = {
  // Era
  G: function(e, n, t) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(r, { width: "abbreviated" });
      case "GGGGG":
        return t.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return t.ordinalNumber(i, { unit: "year" });
    }
    return wn.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, r) {
    const i = ec(e, r), o = i > 0 ? i : 1 - i;
    if (n === "YY") {
      const a = o % 100;
      return ke(a, 2);
    }
    return n === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : ke(o, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = wh(e);
    return ke(t, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, n) {
    const t = e.getFullYear();
    return ke(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(r);
      case "QQ":
        return ke(r, 2);
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(r);
      case "qq":
        return ke(r, 2);
      case "qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return t.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return wn.M(e, n);
      case "Mo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return t.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const r = e.getMonth();
    switch (n) {
      case "L":
        return String(r + 1);
      case "LL":
        return ke(r + 1, 2);
      case "Lo":
        return t.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return t.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, r) {
    const i = Ch(e, r);
    return n === "wo" ? t.ordinalNumber(i, { unit: "week" }) : ke(i, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const r = Ku(e);
    return n === "Io" ? t.ordinalNumber(r, { unit: "week" }) : ke(r, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : wn.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const r = zx(e);
    return n === "Do" ? t.ordinalNumber(r, { unit: "dayOfYear" }) : ke(r, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const r = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, r) {
    const i = e.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(o);
      case "ee":
        return ke(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, t, r) {
    const i = e.getDay(), o = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(o);
      case "cc":
        return ke(o, n.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, t) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (n) {
      case "i":
        return String(i);
      case "ii":
        return ke(i, n.length);
      case "io":
        return t.ordinalNumber(i, { unit: "day" });
      case "iii":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, t) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = vr.noon : r === 0 ? i = vr.midnight : i = r / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, t) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = vr.evening : r >= 12 ? i = vr.afternoon : r >= 4 ? i = vr.morning : i = vr.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, t) {
    if (n === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), t.ordinalNumber(r, { unit: "hour" });
    }
    return wn.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : wn.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const r = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(r, { unit: "hour" }) : ke(r, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let r = e.getHours();
    return r === 0 && (r = 24), n === "ko" ? t.ordinalNumber(r, { unit: "hour" }) : ke(r, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : wn.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : wn.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return wn.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (n) {
      case "X":
        return wd(r);
      case "XXXX":
      case "XX":
        return Xn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Xn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return wd(r);
      case "xxxx":
      case "xx":
        return Xn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Xn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + yd(r, ":");
      case "OOOO":
      default:
        return "GMT" + Xn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const r = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + yd(r, ":");
      case "zzzz":
      default:
        return "GMT" + Xn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ke(r, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    const r = e.getTime();
    return ke(r, n.length);
  }
};
function yd(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? t + String(i) : t + String(i) + n + ke(o, 2);
}
function wd(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ke(Math.abs(e) / 60, 2) : Xn(e, n);
}
function Xn(e, n = "") {
  const t = e > 0 ? "-" : "+", r = Math.abs(e), i = ke(Math.trunc(r / 60), 2), o = ke(r % 60, 2);
  return t + i + n + o;
}
const Cd = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Ih = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, Jx = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], r = t[1], i = t[2];
  if (!i)
    return Cd(e, n);
  let o;
  switch (r) {
    case "P":
      o = n.dateTime({ width: "short" });
      break;
    case "PP":
      o = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = n.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", Cd(r, n)).replace("{{time}}", Ih(i, n));
}, ha = {
  p: Ih,
  P: Jx
}, Qx = /^D+$/, qx = /^Y+$/, Kx = ["D", "DD", "YY", "YYYY"];
function xh(e) {
  return Qx.test(e);
}
function Sh(e) {
  return qx.test(e);
}
function Vl(e, n, t) {
  const r = eS(e, n, t);
  if (console.warn(r), Kx.includes(e)) throw new RangeError(r);
}
function eS(e, n, t) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function cn(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ga(e) {
  if (!cn(e) && typeof e != "number")
    return !1;
  const n = X(e);
  return !isNaN(Number(n));
}
const tS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rS = /^'([^]*?)'?$/, iS = /''/g, oS = /[a-zA-Z]/;
function Id(e, n, t) {
  var c, d, p, f, m, h, g, v;
  const r = mr(), i = (t == null ? void 0 : t.locale) ?? r.locale ?? yh, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((f = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, a = (t == null ? void 0 : t.weekStartsOn) ?? ((h = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((v = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = X(e);
  if (!ga(s))
    throw new RangeError("Invalid time value");
  let l = n.match(nS).map((y) => {
    const b = y[0];
    if (b === "p" || b === "P") {
      const I = ha[b];
      return I(y, i.formatLong);
    }
    return y;
  }).join("").match(tS).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const b = y[0];
    if (b === "'")
      return { isToken: !1, value: aS(y) };
    if (bd[b])
      return { isToken: !0, value: y };
    if (b.match(oS))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: y };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: o,
    weekStartsOn: a,
    locale: i
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const b = y.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && Sh(b) || !(t != null && t.useAdditionalDayOfYearTokens) && xh(b)) && Vl(b, n, String(e));
    const I = bd[b[0]];
    return I(s, b, i.localize, u);
  }).join("");
}
function aS(e) {
  const n = e.match(rS);
  return n ? n[1].replace(iS, "'") : e;
}
function xd(e) {
  return X(e).getDate();
}
function sS(e) {
  return X(e).getDay();
}
function en(e) {
  return X(e).getHours();
}
function tn(e) {
  return X(e).getMinutes();
}
function pt(e) {
  return X(e).getMonth();
}
function dn(e) {
  return X(e).getSeconds();
}
function Wl(e) {
  return X(e).getTime();
}
function de(e) {
  return X(e).getFullYear();
}
function Gn(e, n) {
  const t = X(e), r = X(n);
  return t.getTime() > r.getTime();
}
function cr(e, n) {
  const t = X(e), r = X(n);
  return +t < +r;
}
function lS(e, n) {
  const t = X(e), r = X(n);
  return +t == +r;
}
function uS(e, n) {
  const t = ur(e), r = ur(n);
  return +t == +r;
}
function cS(e, n) {
  const t = X(e), r = X(n);
  return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth();
}
function Gl(e) {
  const n = X(e), t = n.getMonth(), r = t - t % 3;
  return n.setMonth(r, 1), n.setHours(0, 0, 0, 0), n;
}
function dS(e, n) {
  const t = Gl(e), r = Gl(n);
  return +t == +r;
}
function fS(e, n) {
  const t = X(e), r = X(n);
  return t.getFullYear() === r.getFullYear();
}
function Fi(e, n) {
  const t = +X(e), [r, i] = [
    +X(n.start),
    +X(n.end)
  ].sort((o, a) => o - a);
  return t >= r && t <= i;
}
function Sd(e) {
  let n;
  return e.forEach(function(t) {
    const r = X(t);
    (n === void 0 || n < r || isNaN(Number(r))) && (n = r);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function Ed(e) {
  let n;
  return e.forEach((t) => {
    const r = X(t);
    (!n || n > r || isNaN(+r)) && (n = r);
  }), n || /* @__PURE__ */ new Date(NaN);
}
function pS() {
  return Object.assign({}, mr());
}
function mS(e, n) {
  const t = n instanceof Date ? Re(n, 0) : new n(0);
  return t.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
const hS = 10;
class Eh {
  constructor() {
    Z(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class gS extends Eh {
  constructor(n, t, r, i, o) {
    super(), this.value = n, this.validateValue = t, this.setValue = r, this.priority = i, o && (this.subPriority = o);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, r) {
    return this.setValue(n, t, this.value, r);
  }
}
class vS extends Eh {
  constructor() {
    super(...arguments);
    Z(this, "priority", hS);
    Z(this, "subPriority", -1);
  }
  set(t, r) {
    return r.timestampIsSet ? t : Re(t, mS(t, Date));
  }
}
class De {
  run(n, t, r, i) {
    const o = this.parse(n, t, r, i);
    return o ? {
      setter: new gS(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(n, t, r) {
    return !0;
  }
}
class bS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 140);
    Z(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return i.era(t, { width: "abbreviated" }) || i.era(t, { width: "narrow" });
      case "GGGGG":
        return i.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return i.era(t, { width: "wide" }) || i.era(t, { width: "abbreviated" }) || i.era(t, { width: "narrow" });
    }
  }
  set(t, r, i) {
    return r.era = i, t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const Qe = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Ut = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function qe(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function Ye(e, n) {
  const t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function Jt(e, n) {
  const t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const r = t[1] === "+" ? 1 : -1, i = t[2] ? parseInt(t[2], 10) : 0, o = t[3] ? parseInt(t[3], 10) : 0, a = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: r * (i * ds + o * cs + a * ux),
    rest: n.slice(t[0].length)
  };
}
function Dh(e) {
  return Ye(Qe.anyDigitsSigned, e);
}
function Ue(e, n) {
  switch (e) {
    case 1:
      return Ye(Qe.singleDigit, n);
    case 2:
      return Ye(Qe.twoDigits, n);
    case 3:
      return Ye(Qe.threeDigits, n);
    case 4:
      return Ye(Qe.fourDigits, n);
    default:
      return Ye(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function va(e, n) {
  switch (e) {
    case 1:
      return Ye(Qe.singleDigitSigned, n);
    case 2:
      return Ye(Qe.twoDigitsSigned, n);
    case 3:
      return Ye(Qe.threeDigitsSigned, n);
    case 4:
      return Ye(Qe.fourDigitsSigned, n);
    default:
      return Ye(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function tc(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Th(e, n) {
  const t = n > 0, r = t ? n : 1 - n;
  let i;
  if (r <= 50)
    i = e || 100;
  else {
    const o = r + 50, a = Math.trunc(o / 100) * 100, s = e >= o % 100;
    i = e + a - (s ? 100 : 0);
  }
  return t ? i : 1 - i;
}
function Mh(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class yS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 130);
    Z(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, r, i) {
    const o = (a) => ({
      year: a,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return qe(Ue(4, t), o);
      case "yo":
        return qe(
          i.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return qe(Ue(r.length, t), o);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, i) {
    const o = t.getFullYear();
    if (i.isTwoDigitYear) {
      const s = Th(
        i.year,
        o
      );
      return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const a = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return t.setFullYear(a, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class wS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 130);
    Z(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    const o = (a) => ({
      year: a,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return qe(Ue(4, t), o);
      case "Yo":
        return qe(
          i.ordinalNumber(t, {
            unit: "year"
          }),
          o
        );
      default:
        return qe(Ue(r.length, t), o);
    }
  }
  validate(t, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(t, r, i, o) {
    const a = ec(t, o);
    if (i.isTwoDigitYear) {
      const l = Th(
        i.year,
        a
      );
      return t.setFullYear(
        l,
        0,
        o.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), pn(t, o);
    }
    const s = !("era" in r) || r.era === 1 ? i.year : 1 - i.year;
    return t.setFullYear(s, 0, o.firstWeekContainsDate), t.setHours(0, 0, 0, 0), pn(t, o);
  }
}
class CS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 130);
    Z(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r) {
    return va(r === "R" ? 4 : r.length, t);
  }
  set(t, r, i) {
    const o = Re(t, 0);
    return o.setFullYear(i, 0, 4), o.setHours(0, 0, 0, 0), Fr(o);
  }
}
class IS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 130);
    Z(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, r) {
    return va(r === "u" ? 4 : r.length, t);
  }
  set(t, r, i) {
    return t.setFullYear(i, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class xS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 120);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "Q":
      case "QQ":
        return Ue(r.length, t);
      case "Qo":
        return i.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return i.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return i.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return i.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || i.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, i) {
    return t.setMonth((i - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class SS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 120);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "q":
      case "qq":
        return Ue(r.length, t);
      case "qo":
        return i.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return i.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return i.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return i.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || i.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 4;
  }
  set(t, r, i) {
    return t.setMonth((i - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ES extends De {
  constructor() {
    super(...arguments);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    Z(this, "priority", 110);
  }
  parse(t, r, i) {
    const o = (a) => a - 1;
    switch (r) {
      case "M":
        return qe(
          Ye(Qe.month, t),
          o
        );
      case "MM":
        return qe(Ue(2, t), o);
      case "Mo":
        return qe(
          i.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return i.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return i.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return i.month(t, { width: "wide", context: "formatting" }) || i.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, i) {
    return t.setMonth(i, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class DS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 110);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    const o = (a) => a - 1;
    switch (r) {
      case "L":
        return qe(
          Ye(Qe.month, t),
          o
        );
      case "LL":
        return qe(Ue(2, t), o);
      case "Lo":
        return qe(
          i.ordinalNumber(t, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return i.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return i.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return i.month(t, { width: "wide", context: "standalone" }) || i.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, i) {
    return t.setMonth(i, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function TS(e, n, t) {
  const r = X(e), i = Ch(r, t) - n;
  return r.setDate(r.getDate() - i * 7), r;
}
class MS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 100);
    Z(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "w":
        return Ye(Qe.week, t);
      case "wo":
        return i.ordinalNumber(t, { unit: "week" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, i, o) {
    return pn(TS(t, i, o), o);
  }
}
function OS(e, n) {
  const t = X(e), r = Ku(t) - n;
  return t.setDate(t.getDate() - r * 7), t;
}
class kS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 100);
    Z(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "I":
        return Ye(Qe.week, t);
      case "Io":
        return i.ordinalNumber(t, { unit: "week" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 53;
  }
  set(t, r, i) {
    return Fr(OS(t, i));
  }
}
const RS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], AS = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class PS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "subPriority", 1);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "d":
        return Ye(Qe.date, t);
      case "do":
        return i.ordinalNumber(t, { unit: "date" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    const i = t.getFullYear(), o = Mh(i), a = t.getMonth();
    return o ? r >= 1 && r <= AS[a] : r >= 1 && r <= RS[a];
  }
  set(t, r, i) {
    return t.setDate(i), t.setHours(0, 0, 0, 0), t;
  }
}
class FS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "subpriority", 1);
    Z(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    switch (r) {
      case "D":
      case "DD":
        return Ye(Qe.dayOfYear, t);
      case "Do":
        return i.ordinalNumber(t, { unit: "date" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    const i = t.getFullYear();
    return Mh(i) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(t, r, i) {
    return t.setMonth(0, i), t.setHours(0, 0, 0, 0), t;
  }
}
function nc(e, n, t) {
  var d, p, f, m;
  const r = mr(), i = (t == null ? void 0 : t.weekStartsOn) ?? ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((m = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : m.weekStartsOn) ?? 0, o = X(e), a = o.getDay(), l = (n % 7 + 7) % 7, u = 7 - i, c = n < 0 || n > 6 ? n - (a + u) % 7 : (l + u) % 7 - (a + u) % 7;
  return Hn(o, c);
}
class NS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return i.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return i.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return i.day(t, { width: "wide", context: "formatting" }) || i.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, i, o) {
    return t = nc(t, i, o), t.setHours(0, 0, 0, 0), t;
  }
}
class _S extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i, o) {
    const a = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return qe(Ue(r.length, t), a);
      case "eo":
        return qe(
          i.ordinalNumber(t, {
            unit: "day"
          }),
          a
        );
      case "eee":
        return i.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return i.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return i.day(t, { width: "wide", context: "formatting" }) || i.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.day(t, { width: "short", context: "formatting" }) || i.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, i, o) {
    return t = nc(t, i, o), t.setHours(0, 0, 0, 0), t;
  }
}
class LS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, r, i, o) {
    const a = (s) => {
      const l = Math.floor((s - 1) / 7) * 7;
      return (s + o.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return qe(Ue(r.length, t), a);
      case "co":
        return qe(
          i.ordinalNumber(t, {
            unit: "day"
          }),
          a
        );
      case "ccc":
        return i.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.day(t, { width: "short", context: "standalone" }) || i.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return i.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return i.day(t, { width: "short", context: "standalone" }) || i.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return i.day(t, { width: "wide", context: "standalone" }) || i.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || i.day(t, { width: "short", context: "standalone" }) || i.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 6;
  }
  set(t, r, i, o) {
    return t = nc(t, i, o), t.setHours(0, 0, 0, 0), t;
  }
}
function VS(e) {
  let t = X(e).getDay();
  return t === 0 && (t = 7), t;
}
function WS(e, n) {
  const t = X(e), r = VS(t), i = n - r;
  return Hn(t, i);
}
class GS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 90);
    Z(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, r, i) {
    const o = (a) => a === 0 ? 7 : a;
    switch (r) {
      case "i":
      case "ii":
        return Ue(r.length, t);
      case "io":
        return i.ordinalNumber(t, { unit: "day" });
      case "iii":
        return qe(
          i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return qe(
          i.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return qe(
          i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return qe(
          i.day(t, {
            width: "wide",
            context: "formatting"
          }) || i.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(t, {
            width: "short",
            context: "formatting"
          }) || i.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 7;
  }
  set(t, r, i) {
    return t = WS(t, i), t.setHours(0, 0, 0, 0), t;
  }
}
class $S extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 80);
    Z(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return i.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, r, i) {
    return t.setHours(tc(i), 0, 0, 0), t;
  }
}
class HS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 80);
    Z(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return i.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, r, i) {
    return t.setHours(tc(i), 0, 0, 0), t;
  }
}
class BS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 80);
    Z(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return i.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || i.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, r, i) {
    return t.setHours(tc(i), 0, 0, 0), t;
  }
}
class YS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 70);
    Z(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "h":
        return Ye(Qe.hour12h, t);
      case "ho":
        return i.ordinalNumber(t, { unit: "hour" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 12;
  }
  set(t, r, i) {
    const o = t.getHours() >= 12;
    return o && i < 12 ? t.setHours(i + 12, 0, 0, 0) : !o && i === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(i, 0, 0, 0), t;
  }
}
class ZS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 70);
    Z(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "H":
        return Ye(Qe.hour23h, t);
      case "Ho":
        return i.ordinalNumber(t, { unit: "hour" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 23;
  }
  set(t, r, i) {
    return t.setHours(i, 0, 0, 0), t;
  }
}
class XS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 70);
    Z(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "K":
        return Ye(Qe.hour11h, t);
      case "Ko":
        return i.ordinalNumber(t, { unit: "hour" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 11;
  }
  set(t, r, i) {
    return t.getHours() >= 12 && i < 12 ? t.setHours(i + 12, 0, 0, 0) : t.setHours(i, 0, 0, 0), t;
  }
}
class zS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 70);
    Z(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "k":
        return Ye(Qe.hour24h, t);
      case "ko":
        return i.ordinalNumber(t, { unit: "hour" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 1 && r <= 24;
  }
  set(t, r, i) {
    const o = i <= 24 ? i % 24 : i;
    return t.setHours(o, 0, 0, 0), t;
  }
}
class jS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 60);
    Z(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "m":
        return Ye(Qe.minute, t);
      case "mo":
        return i.ordinalNumber(t, { unit: "minute" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, i) {
    return t.setMinutes(i, 0, 0), t;
  }
}
class US extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 50);
    Z(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r, i) {
    switch (r) {
      case "s":
        return Ye(Qe.second, t);
      case "so":
        return i.ordinalNumber(t, { unit: "second" });
      default:
        return Ue(r.length, t);
    }
  }
  validate(t, r) {
    return r >= 0 && r <= 59;
  }
  set(t, r, i) {
    return t.setSeconds(i, 0), t;
  }
}
class JS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 30);
    Z(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, r) {
    const i = (o) => Math.trunc(o * Math.pow(10, -r.length + 3));
    return qe(Ue(r.length, t), i);
  }
  set(t, r, i) {
    return t.setMilliseconds(i), t;
  }
}
class QS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 10);
    Z(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, r) {
    switch (r) {
      case "X":
        return Jt(
          Ut.basicOptionalMinutes,
          t
        );
      case "XX":
        return Jt(Ut.basic, t);
      case "XXXX":
        return Jt(
          Ut.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Jt(
          Ut.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Jt(Ut.extended, t);
    }
  }
  set(t, r, i) {
    return r.timestampIsSet ? t : Re(
      t,
      t.getTime() - da(t) - i
    );
  }
}
class qS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 10);
    Z(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, r) {
    switch (r) {
      case "x":
        return Jt(
          Ut.basicOptionalMinutes,
          t
        );
      case "xx":
        return Jt(Ut.basic, t);
      case "xxxx":
        return Jt(
          Ut.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Jt(
          Ut.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Jt(Ut.extended, t);
    }
  }
  set(t, r, i) {
    return r.timestampIsSet ? t : Re(
      t,
      t.getTime() - da(t) - i
    );
  }
}
class KS extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 40);
    Z(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Dh(t);
  }
  set(t, r, i) {
    return [Re(t, i * 1e3), { timestampIsSet: !0 }];
  }
}
class eE extends De {
  constructor() {
    super(...arguments);
    Z(this, "priority", 20);
    Z(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Dh(t);
  }
  set(t, r, i) {
    return [Re(t, i), { timestampIsSet: !0 }];
  }
}
const tE = {
  G: new bS(),
  y: new yS(),
  Y: new wS(),
  R: new CS(),
  u: new IS(),
  Q: new xS(),
  q: new SS(),
  M: new ES(),
  L: new DS(),
  w: new MS(),
  I: new kS(),
  d: new PS(),
  D: new FS(),
  E: new NS(),
  e: new _S(),
  c: new LS(),
  i: new GS(),
  a: new $S(),
  b: new HS(),
  B: new BS(),
  h: new YS(),
  H: new ZS(),
  K: new XS(),
  k: new zS(),
  m: new jS(),
  s: new US(),
  S: new JS(),
  X: new QS(),
  x: new qS(),
  t: new KS(),
  T: new eE()
}, nE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, rE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, iE = /^'([^]*?)'?$/, oE = /''/g, aE = /\S/, sE = /[a-zA-Z]/;
function Us(e, n, t, r) {
  var h, g, v, y, b, I, w, S;
  const i = pS(), o = (r == null ? void 0 : r.locale) ?? i.locale ?? yh, a = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((g = (h = r == null ? void 0 : r.locale) == null ? void 0 : h.options) == null ? void 0 : g.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((y = (v = i.locale) == null ? void 0 : v.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (r == null ? void 0 : r.weekStartsOn) ?? ((I = (b = r == null ? void 0 : r.locale) == null ? void 0 : b.options) == null ? void 0 : I.weekStartsOn) ?? i.weekStartsOn ?? ((S = (w = i.locale) == null ? void 0 : w.options) == null ? void 0 : S.weekStartsOn) ?? 0;
  if (n === "")
    return e === "" ? X(t) : Re(t, NaN);
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  }, u = [new vS()], c = n.match(rE).map((x) => {
    const E = x[0];
    if (E in ha) {
      const D = ha[E];
      return D(x, o.formatLong);
    }
    return x;
  }).join("").match(nE), d = [];
  for (let x of c) {
    !(r != null && r.useAdditionalWeekYearTokens) && Sh(x) && Vl(x, n, e), !(r != null && r.useAdditionalDayOfYearTokens) && xh(x) && Vl(x, n, e);
    const E = x[0], D = tE[E];
    if (D) {
      const { incompatibleTokens: _ } = D;
      if (Array.isArray(_)) {
        const F = d.find(
          (A) => _.includes(A.token) || A.token === E
        );
        if (F)
          throw new RangeError(
            `The format string mustn't contain \`${F.fullToken}\` and \`${x}\` at the same time`
          );
      } else if (D.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${x}\` and any other token at the same time`
        );
      d.push({ token: E, fullToken: x });
      const k = D.run(
        e,
        x,
        o.match,
        l
      );
      if (!k)
        return Re(t, NaN);
      u.push(k.setter), e = k.rest;
    } else {
      if (E.match(sE))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + E + "`"
        );
      if (x === "''" ? x = "'" : E === "'" && (x = lE(x)), e.indexOf(x) === 0)
        e = e.slice(x.length);
      else
        return Re(t, NaN);
    }
  }
  if (e.length > 0 && aE.test(e))
    return Re(t, NaN);
  const p = u.map((x) => x.priority).sort((x, E) => E - x).filter((x, E, D) => D.indexOf(x) === E).map(
    (x) => u.filter((E) => E.priority === x).sort((E, D) => D.subPriority - E.subPriority)
  ).map((x) => x[0]);
  let f = X(t);
  if (isNaN(f.getTime()))
    return Re(t, NaN);
  const m = {};
  for (const x of p) {
    if (!x.validate(f, l))
      return Re(t, NaN);
    const E = x.set(f, m, l);
    Array.isArray(E) ? (f = E[0], Object.assign(m, E[1])) : f = E;
  }
  return Re(t, f);
}
function lE(e) {
  return e.match(iE)[1].replace(oE, "'");
}
function uE(e, n) {
  const r = pE(e);
  let i;
  if (r.date) {
    const l = mE(r.date, 2);
    i = hE(l.restDateString, l.year);
  }
  if (!i || isNaN(i.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const o = i.getTime();
  let a = 0, s;
  if (r.time && (a = gE(r.time), isNaN(a)))
    return /* @__PURE__ */ new Date(NaN);
  if (r.timezone) {
    if (s = vE(r.timezone), isNaN(s))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const l = new Date(o + a), u = /* @__PURE__ */ new Date(0);
    return u.setFullYear(
      l.getUTCFullYear(),
      l.getUTCMonth(),
      l.getUTCDate()
    ), u.setHours(
      l.getUTCHours(),
      l.getUTCMinutes(),
      l.getUTCSeconds(),
      l.getUTCMilliseconds()
    ), u;
  }
  return new Date(o + a + s);
}
const go = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, cE = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, dE = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, fE = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function pE(e) {
  const n = {}, t = e.split(go.dateTimeDelimiter);
  let r;
  if (t.length > 2)
    return n;
  if (/:/.test(t[0]) ? r = t[0] : (n.date = t[0], r = t[1], go.timeZoneDelimiter.test(n.date) && (n.date = e.split(go.timeZoneDelimiter)[0], r = e.substr(
    n.date.length,
    e.length
  ))), r) {
    const i = go.timezone.exec(r);
    i ? (n.time = r.replace(i[1], ""), n.timezone = i[1]) : n.time = r;
  }
  return n;
}
function mE(e, n) {
  const t = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"
  ), r = e.match(t);
  if (!r) return { year: NaN, restDateString: "" };
  const i = r[1] ? parseInt(r[1]) : null, o = r[2] ? parseInt(r[2]) : null;
  return {
    year: o === null ? i : o * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function hE(e, n) {
  if (n === null) return /* @__PURE__ */ new Date(NaN);
  const t = e.match(cE);
  if (!t) return /* @__PURE__ */ new Date(NaN);
  const r = !!t[4], i = ni(t[1]), o = ni(t[2]) - 1, a = ni(t[3]), s = ni(t[4]), l = ni(t[5]) - 1;
  if (r)
    return IE(n, s, l) ? bE(n, s, l) : /* @__PURE__ */ new Date(NaN);
  {
    const u = /* @__PURE__ */ new Date(0);
    return !wE(n, o, a) || !CE(n, i) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(n, o, Math.max(i, a)), u);
  }
}
function ni(e) {
  return e ? parseInt(e) : 1;
}
function gE(e) {
  const n = e.match(dE);
  if (!n) return NaN;
  const t = Js(n[1]), r = Js(n[2]), i = Js(n[3]);
  return xE(t, r, i) ? t * ds + r * cs + i * 1e3 : NaN;
}
function Js(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function vE(e) {
  if (e === "Z") return 0;
  const n = e.match(fE);
  if (!n) return 0;
  const t = n[1] === "+" ? -1 : 1, r = parseInt(n[2]), i = n[3] && parseInt(n[3]) || 0;
  return SE(r, i) ? t * (r * ds + i * cs) : NaN;
}
function bE(e, n, t) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, o = (n - 1) * 7 + t + 1 - i;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
const yE = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Oh(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function wE(e, n, t) {
  return n >= 0 && n <= 11 && t >= 1 && t <= (yE[n] || (Oh(e) ? 29 : 28));
}
function CE(e, n) {
  return n >= 1 && n <= (Oh(e) ? 366 : 365);
}
function IE(e, n, t) {
  return n >= 1 && n <= 53 && t >= 0 && t <= 6;
}
function xE(e, n, t) {
  return e === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function SE(e, n) {
  return n >= 0 && n <= 59;
}
function EE(e) {
  const n = X(e), t = n.getFullYear(), r = n.getMonth(), i = Re(e, 0);
  return i.setFullYear(t, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
}
function yt(e, n) {
  const t = X(e), r = t.getFullYear(), i = t.getDate(), o = Re(e, 0);
  o.setFullYear(r, n, 15), o.setHours(0, 0, 0, 0);
  const a = EE(o);
  return t.setMonth(n, Math.min(i, a)), t;
}
function DE(e, n) {
  let t = X(e);
  return isNaN(+t) ? Re(e, NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = yt(t, n.month)), n.date != null && t.setDate(n.date), n.hours != null && t.setHours(n.hours), n.minutes != null && t.setMinutes(n.minutes), n.seconds != null && t.setSeconds(n.seconds), n.milliseconds != null && t.setMilliseconds(n.milliseconds), t);
}
function No(e, n) {
  const t = X(e);
  return t.setHours(n), t;
}
function _o(e, n) {
  const t = X(e);
  return t.setMinutes(n), t;
}
function Cr(e, n) {
  const t = X(e), r = Math.trunc(t.getMonth() / 3) + 1, i = n - r;
  return yt(t, t.getMonth() + i * 3);
}
function Lo(e, n) {
  const t = X(e);
  return t.setSeconds(n), t;
}
function Zt(e, n) {
  const t = X(e);
  return isNaN(+t) ? Re(e, NaN) : (t.setFullYear(n), t);
}
function kh(e) {
  const n = X(e);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function TE(e, n) {
  return Hn(e, -n);
}
function Nr(e, n) {
  return Ht(e, -n);
}
function Rh(e, n) {
  return qu(e, -n);
}
function Dd(e, n) {
  return ca(e, -n);
}
function _r(e, n) {
  return un(e, -n);
}
/*!
  react-datepicker v7.3.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
var $l = function(n, t) {
  return $l = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
  }, $l(n, t);
};
function ot(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  $l(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var we = function() {
  return we = Object.assign || function(t) {
    for (var r, i = 1, o = arguments.length; i < o; i++) {
      r = arguments[i];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, we.apply(this, arguments);
};
function qt(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, i = n.length, o; r < i; r++)
    (o || !(r in n)) && (o || (o = Array.prototype.slice.call(n, 0, r)), o[r] = n[r]);
  return e.concat(o || Array.prototype.slice.call(n));
}
var ME = function(e) {
  var n = e.showTimeSelectOnly, t = n === void 0 ? !1 : n, r = e.showTime, i = r === void 0 ? !1 : r, o = e.className, a = e.children, s = t ? "Choose Time" : "Choose Date".concat(i ? " and Time" : "");
  return C.createElement("div", { className: o, role: "dialog", "aria-label": s, "aria-modal": "true" }, a);
}, Y;
(function(e) {
  e.ArrowUp = "ArrowUp", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Home = "Home", e.End = "End", e.Enter = "Enter", e.Space = " ", e.Tab = "Tab", e.Escape = "Escape", e.Backspace = "Backspace", e.X = "x";
})(Y || (Y = {}));
function Ah() {
  var e = typeof window < "u" ? window : globalThis;
  return e;
}
var eo = 12, OE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function Ae(e) {
  if (e == null)
    return /* @__PURE__ */ new Date();
  var n = typeof e == "string" ? uE(e) : X(e);
  return sn(n) ? n : /* @__PURE__ */ new Date();
}
function kE(e, n, t, r, i) {
  var o, a = null, s = nr(t) || nr(Ci()), l = !0;
  if (Array.isArray(n))
    return n.forEach(function(c) {
      var d = Us(e, c, /* @__PURE__ */ new Date(), {
        locale: s,
        useAdditionalWeekYearTokens: !0,
        useAdditionalDayOfYearTokens: !0
      });
      r && (l = sn(d, i) && e === Ge(d, c, t)), sn(d, i) && l && (a = d);
    }), a;
  if (a = Us(e, n, /* @__PURE__ */ new Date(), {
    locale: s,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  }), r)
    l = sn(a) && e === Ge(a, n, t);
  else if (!sn(a)) {
    var u = ((o = n.match(OE)) !== null && o !== void 0 ? o : []).map(function(c) {
      var d = c[0];
      if (d === "p" || d === "P") {
        var p = ha[d];
        return s ? p(c, s.formatLong) : d;
      }
      return c;
    }).join("");
    e.length > 0 && (a = Us(e, u.slice(0, e.length), /* @__PURE__ */ new Date(), {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    })), sn(a) || (a = new Date(e));
  }
  return sn(a) && l ? a : null;
}
function sn(e, n) {
  return ga(e) && !cr(e, n ?? /* @__PURE__ */ new Date("1/1/1800"));
}
function Ge(e, n, t) {
  if (t === "en")
    return Id(e, n, {
      useAdditionalWeekYearTokens: !0,
      useAdditionalDayOfYearTokens: !0
    });
  var r = t ? nr(t) : void 0;
  return t && !r && console.warn('A locale object was not found for the provided string ["'.concat(t, '"].')), !r && Ci() && nr(Ci()) && (r = nr(Ci())), Id(e, n, {
    locale: r,
    useAdditionalWeekYearTokens: !0,
    useAdditionalDayOfYearTokens: !0
  });
}
function Mt(e, n) {
  var t = n.dateFormat, r = n.locale, i = Array.isArray(t) && t.length > 0 ? t[0] : t;
  return e && Ge(e, i, r) || "";
}
function RE(e, n, t) {
  if (!e)
    return "";
  var r = Mt(e, t), i = n ? Mt(n, t) : "";
  return "".concat(r, " - ").concat(i);
}
function AE(e, n) {
  if (!(e != null && e.length))
    return "";
  var t = e[0] ? Mt(e[0], n) : "";
  if (e.length === 1)
    return t;
  if (e.length === 2 && e[1]) {
    var r = Mt(e[1], n);
    return "".concat(t, ", ").concat(r);
  }
  var i = e.length - 1;
  return "".concat(t, " (+").concat(i, ")");
}
function Qs(e, n) {
  var t = n.hour, r = t === void 0 ? 0 : t, i = n.minute, o = i === void 0 ? 0 : i, a = n.second, s = a === void 0 ? 0 : a;
  return No(_o(Lo(e, s), o), r);
}
function PE(e) {
  return Ku(e);
}
function FE(e, n) {
  return Ge(e, "ddd", n);
}
function Vo(e) {
  return ur(e);
}
function Fn(e, n, t) {
  var r = nr(n || Ci());
  return pn(e, {
    locale: r,
    weekStartsOn: t
  });
}
function Nn(e) {
  return kh(e);
}
function di(e) {
  return fs(e);
}
function Td(e) {
  return Gl(e);
}
function Md() {
  return ur(Ae());
}
function Od(e) {
  return vh(e);
}
function NE(e) {
  return mx(e);
}
function Xt(e, n) {
  return e && n ? fS(e, n) : !e && !n;
}
function dt(e, n) {
  return e && n ? cS(e, n) : !e && !n;
}
function ba(e, n) {
  return e && n ? dS(e, n) : !e && !n;
}
function ge(e, n) {
  return e && n ? uS(e, n) : !e && !n;
}
function Qn(e, n) {
  return e && n ? lS(e, n) : !e && !n;
}
function fi(e, n, t) {
  var r, i = ur(n), o = vh(t);
  try {
    r = Fi(e, { start: i, end: o });
  } catch {
    r = !1;
  }
  return r;
}
function Ci() {
  var e = Ah();
  return e.__localeId__;
}
function nr(e) {
  if (typeof e == "string") {
    var n = Ah();
    return n.__localeData__ ? n.__localeData__[e] : void 0;
  } else
    return e;
}
function _E(e, n, t) {
  return n(Ge(e, "EEEE", t));
}
function LE(e, n) {
  return Ge(e, "EEEEEE", n);
}
function VE(e, n) {
  return Ge(e, "EEE", n);
}
function rc(e, n) {
  return Ge(yt(Ae(), e), "LLLL", n);
}
function Ph(e, n) {
  return Ge(yt(Ae(), e), "LLL", n);
}
function WE(e, n) {
  return Ge(Cr(Ae(), e), "QQQ", n);
}
function kn(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.maxDate, o = t.excludeDates, a = t.excludeDateIntervals, s = t.includeDates, l = t.includeDateIntervals, u = t.filterDate;
  return to(e, { minDate: r, maxDate: i }) || o && o.some(function(c) {
    var d;
    return c instanceof Date ? ge(e, c) : ge(e, (d = c.date) !== null && d !== void 0 ? d : /* @__PURE__ */ new Date());
  }) || a && a.some(function(c) {
    var d = c.start, p = c.end;
    return Fi(e, { start: d, end: p });
  }) || s && !s.some(function(c) {
    return ge(e, c);
  }) || l && !l.some(function(c) {
    var d = c.start, p = c.end;
    return Fi(e, { start: d, end: p });
  }) || u && !u(Ae(e)) || !1;
}
function ic(e, n) {
  var t = n === void 0 ? {} : n, r = t.excludeDates, i = t.excludeDateIntervals;
  return i && i.length > 0 ? i.some(function(o) {
    var a = o.start, s = o.end;
    return Fi(e, { start: a, end: s });
  }) : r && r.some(function(o) {
    var a;
    return o instanceof Date ? ge(e, o) : ge(e, (a = o.date) !== null && a !== void 0 ? a : /* @__PURE__ */ new Date());
  }) || !1;
}
function Fh(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.maxDate, o = t.excludeDates, a = t.includeDates, s = t.filterDate;
  return to(e, {
    minDate: r ? kh(r) : void 0,
    maxDate: i ? fx(i) : void 0
  }) || (o == null ? void 0 : o.some(function(l) {
    return dt(e, l instanceof Date ? l : l.date);
  })) || a && !a.some(function(l) {
    return dt(e, l);
  }) || s && !s(Ae(e)) || !1;
}
function vo(e, n, t, r) {
  var i = de(e), o = pt(e), a = de(n), s = pt(n), l = de(r);
  return i === a && i === l ? o <= t && t <= s : i < a ? l === i && o <= t || l === a && s >= t || l < a && l > i : !1;
}
function GE(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.maxDate, o = t.excludeDates, a = t.includeDates;
  return to(e, { minDate: r, maxDate: i }) || o && o.some(function(s) {
    return dt(s instanceof Date ? s : s.date, e);
  }) || a && !a.some(function(s) {
    return dt(s, e);
  }) || !1;
}
function qs(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.maxDate, o = t.excludeDates, a = t.includeDates, s = t.filterDate;
  return to(e, { minDate: r, maxDate: i }) || (o == null ? void 0 : o.some(function(l) {
    return ba(e, l instanceof Date ? l : l.date);
  })) || a && !a.some(function(l) {
    return ba(e, l);
  }) || s && !s(Ae(e)) || !1;
}
function bo(e, n, t) {
  if (!n || !t || !ga(n) || !ga(t))
    return !1;
  var r = de(n), i = de(t);
  return r <= e && i >= e;
}
function Hl(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.maxDate, o = t.excludeDates, a = t.includeDates, s = t.filterDate, l = new Date(e, 0, 1);
  return to(l, {
    minDate: r ? fs(r) : void 0,
    maxDate: i ? bh(i) : void 0
  }) || (o == null ? void 0 : o.some(function(u) {
    return Xt(l, u instanceof Date ? u : u.date);
  })) || a && !a.some(function(u) {
    return Xt(l, u);
  }) || s && !s(Ae(l)) || !1;
}
function yo(e, n, t, r) {
  var i = de(e), o = tr(e), a = de(n), s = tr(n), l = de(r);
  return i === a && i === l ? o <= t && t <= s : i < a ? l === i && o <= t || l === a && s >= t || l < a && l > i : !1;
}
function to(e, n) {
  var t, r = n === void 0 ? {} : n, i = r.minDate, o = r.maxDate;
  return (t = i && Pi(e, i) < 0 || o && Pi(e, o) > 0) !== null && t !== void 0 ? t : !1;
}
function kd(e, n) {
  return n.some(function(t) {
    return en(t) === en(e) && tn(t) === tn(e) && dn(t) === dn(e);
  });
}
function Rd(e, n) {
  var t = n === void 0 ? {} : n, r = t.excludeTimes, i = t.includeTimes, o = t.filterTime;
  return r && kd(e, r) || i && !kd(e, i) || o && !o(e) || !1;
}
function Ad(e, n) {
  var t = n.minTime, r = n.maxTime;
  if (!t || !r)
    throw new Error("Both minTime and maxTime props required");
  var i = Ae();
  i = No(i, en(e)), i = _o(i, tn(e)), i = Lo(i, dn(e));
  var o = Ae();
  o = No(o, en(t)), o = _o(o, tn(t)), o = Lo(o, dn(t));
  var a = Ae();
  a = No(a, en(r)), a = _o(a, tn(r)), a = Lo(a, dn(r));
  var s;
  try {
    s = !Fi(i, { start: o, end: a });
  } catch {
    s = !1;
  }
  return s;
}
function Pd(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.includeDates, o = Nr(e, 1);
  return r && fa(r, o) > 0 || i && i.every(function(a) {
    return fa(a, o) > 0;
  }) || !1;
}
function Fd(e, n) {
  var t = n === void 0 ? {} : n, r = t.maxDate, i = t.includeDates, o = Ht(e, 1);
  return r && fa(o, r) > 0 || i && i.every(function(a) {
    return fa(o, a) > 0;
  }) || !1;
}
function $E(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.includeDates, o = fs(e), a = Rh(o, 1);
  return r && pa(r, a) > 0 || i && i.every(function(s) {
    return pa(s, a) > 0;
  }) || !1;
}
function HE(e, n) {
  var t = n === void 0 ? {} : n, r = t.maxDate, i = t.includeDates, o = bh(e), a = qu(o, 1);
  return r && pa(a, r) > 0 || i && i.every(function(s) {
    return pa(a, s) > 0;
  }) || !1;
}
function Nd(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.includeDates, o = _r(e, 1);
  return r && ma(r, o) > 0 || i && i.every(function(a) {
    return ma(a, o) > 0;
  }) || !1;
}
function BE(e, n) {
  var t = n === void 0 ? {} : n, r = t.minDate, i = t.yearItemNumber, o = i === void 0 ? eo : i, a = di(_r(e, o)), s = Rn(a, o).endPeriod, l = r && de(r);
  return l && l > s || !1;
}
function _d(e, n) {
  var t = n === void 0 ? {} : n, r = t.maxDate, i = t.includeDates, o = un(e, 1);
  return r && ma(o, r) > 0 || i && i.every(function(a) {
    return ma(o, a) > 0;
  }) || !1;
}
function YE(e, n) {
  var t = n === void 0 ? {} : n, r = t.maxDate, i = t.yearItemNumber, o = i === void 0 ? eo : i, a = un(e, o), s = Rn(a, o).startPeriod, l = r && de(r);
  return l && l < s || !1;
}
function Nh(e) {
  var n = e.minDate, t = e.includeDates;
  if (t && n) {
    var r = t.filter(function(i) {
      return Pi(i, n) >= 0;
    });
    return Ed(r);
  } else return t ? Ed(t) : n;
}
function _h(e) {
  var n = e.maxDate, t = e.includeDates;
  if (t && n) {
    var r = t.filter(function(i) {
      return Pi(i, n) <= 0;
    });
    return Sd(r);
  } else return t ? Sd(t) : n;
}
function Ld(e, n) {
  var t;
  e === void 0 && (e = []), n === void 0 && (n = "react-datepicker__day--highlighted");
  for (var r = /* @__PURE__ */ new Map(), i = 0, o = e.length; i < o; i++) {
    var a = e[i];
    if (cn(a)) {
      var s = Ge(a, "MM.dd.yyyy"), l = r.get(s) || [];
      l.includes(n) || (l.push(n), r.set(s, l));
    } else if (typeof a == "object") {
      var u = Object.keys(a), c = (t = u[0]) !== null && t !== void 0 ? t : "", d = a[c];
      if (typeof c == "string" && Array.isArray(d))
        for (var p = 0, f = d.length; p < f; p++) {
          var m = d[p];
          if (m) {
            var s = Ge(m, "MM.dd.yyyy"), l = r.get(s) || [];
            l.includes(c) || (l.push(c), r.set(s, l));
          }
        }
    }
  }
  return r;
}
function ZE(e, n) {
  return e.length !== n.length ? !1 : e.every(function(t, r) {
    return t === n[r];
  });
}
function XE(e, n) {
  e === void 0 && (e = []), n === void 0 && (n = "react-datepicker__day--holidays");
  var t = /* @__PURE__ */ new Map();
  return e.forEach(function(r) {
    var i = r.date, o = r.holidayName;
    if (cn(i)) {
      var a = Ge(i, "MM.dd.yyyy"), s = t.get(a) || {
        className: "",
        holidayNames: []
      };
      if (!("className" in s && s.className === n && ZE(s.holidayNames, [o]))) {
        s.className = n;
        var l = s.holidayNames;
        s.holidayNames = l ? qt(qt([], l, !0), [o], !1) : [o], t.set(a, s);
      }
    }
  }), t;
}
function zE(e, n, t, r, i) {
  for (var o = i.length, a = [], s = 0; s < o; s++) {
    var l = e, u = i[s];
    u && (l = cx(l, en(u)), l = Ll(l, tn(u)), l = dx(l, dn(u)));
    var c = Ll(e, (t + 1) * r);
    Gn(l, n) && cr(l, c) && u != null && a.push(u);
  }
  return a;
}
function Vd(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function Rn(e, n) {
  n === void 0 && (n = eo);
  var t = Math.ceil(de(e) / n) * n, r = t - (n - 1);
  return { startPeriod: r, endPeriod: t };
}
function jE(e) {
  var n = new Date(e.getFullYear(), e.getMonth(), e.getDate()), t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 24);
  return Math.round((+t - +n) / 36e5);
}
function Wd(e) {
  var n = e.getSeconds(), t = e.getMilliseconds();
  return X(e.getTime() - n * 1e3 - t);
}
function UE(e, n) {
  return Wd(e).getTime() === Wd(n).getTime();
}
function Gd(e) {
  if (!cn(e))
    throw new Error("Invalid date");
  var n = new Date(e);
  return n.setHours(0, 0, 0, 0), n;
}
function $d(e, n) {
  if (!cn(e) || !cn(n))
    throw new Error("Invalid date received");
  var t = Gd(e), r = Gd(n);
  return cr(t, r);
}
function Lh(e) {
  return e.key === Y.Space;
}
var JE = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.onTimeChange = function(i) {
        var o, a;
        r.setState({ time: i });
        var s = r.props.date, l = s instanceof Date && !isNaN(+s), u = l ? s : /* @__PURE__ */ new Date();
        if (i != null && i.includes(":")) {
          var c = i.split(":"), d = c[0], p = c[1];
          u.setHours(Number(d)), u.setMinutes(Number(p));
        }
        (a = (o = r.props).onChange) === null || a === void 0 || a.call(o, u);
      }, r.renderTimeInput = function() {
        var i = r.state.time, o = r.props, a = o.date, s = o.timeString, l = o.customTimeInput;
        return l ? iu(l, {
          date: a,
          value: i,
          onChange: r.onTimeChange
        }) : C.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", required: !0, value: i, onChange: function(u) {
          r.onTimeChange(u.target.value || s);
        } });
      }, r.state = {
        time: r.props.timeString
      }, r;
    }
    return n.getDerivedStateFromProps = function(t, r) {
      return t.timeString !== r.time ? {
        time: t.timeString
      } : null;
    }, n.prototype.render = function() {
      return C.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        C.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        C.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          C.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    }, n;
  }(tt)
), QE = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.dayEl = St(), t.handleClick = function(r) {
        !t.isDisabled() && t.props.onClick && t.props.onClick(r);
      }, t.handleMouseEnter = function(r) {
        !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(r);
      }, t.handleOnKeyDown = function(r) {
        var i, o, a = r.key;
        a === Y.Space && (r.preventDefault(), r.key = Y.Enter), (o = (i = t.props).handleOnKeyDown) === null || o === void 0 || o.call(i, r);
      }, t.isSameDay = function(r) {
        return ge(t.props.day, r);
      }, t.isKeyboardSelected = function() {
        var r;
        if (t.props.disabledKeyboardNavigation)
          return !1;
        var i = t.props.selectsMultiple ? (r = t.props.selectedDates) === null || r === void 0 ? void 0 : r.some(function(a) {
          return t.isSameDayOrWeek(a);
        }) : t.isSameDayOrWeek(t.props.selected), o = t.props.preSelection && t.isDisabled(t.props.preSelection);
        return !i && t.isSameDayOrWeek(t.props.preSelection) && !o;
      }, t.isDisabled = function(r) {
        return r === void 0 && (r = t.props.day), kn(r, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function() {
        return ic(t.props.day, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.isStartOfWeek = function() {
        return ge(t.props.day, Fn(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameWeek = function(r) {
        return t.props.showWeekPicker && ge(r, Fn(t.props.day, t.props.locale, t.props.calendarStartDay));
      }, t.isSameDayOrWeek = function(r) {
        return t.isSameDay(r) || t.isSameWeek(r);
      }, t.getHighLightedClass = function() {
        var r = t.props, i = r.day, o = r.highlightDates;
        if (!o)
          return !1;
        var a = Ge(i, "MM.dd.yyyy");
        return o.get(a);
      }, t.getHolidaysClass = function() {
        var r, i = t.props, o = i.day, a = i.holidays;
        if (!a)
          return [void 0];
        var s = Ge(o, "MM.dd.yyyy");
        return a.has(s) ? [(r = a.get(s)) === null || r === void 0 ? void 0 : r.className] : [void 0];
      }, t.isInRange = function() {
        var r = t.props, i = r.day, o = r.startDate, a = r.endDate;
        return !o || !a ? !1 : fi(i, o, a);
      }, t.isInSelectingRange = function() {
        var r, i = t.props, o = i.day, a = i.selectsStart, s = i.selectsEnd, l = i.selectsRange, u = i.selectsDisabledDaysInRange, c = i.startDate, d = i.endDate, p = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return !(a || s || l) || !p || !u && t.isDisabled() ? !1 : a && d && (cr(p, d) || Qn(p, d)) ? fi(o, p, d) : s && c && (Gn(p, c) || Qn(p, c)) || l && c && !d && (Gn(p, c) || Qn(p, c)) ? fi(o, c, p) : !1;
      }, t.isSelectingRangeStart = function() {
        var r;
        if (!t.isInSelectingRange())
          return !1;
        var i = t.props, o = i.day, a = i.startDate, s = i.selectsStart, l = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return s ? ge(o, l) : ge(o, a);
      }, t.isSelectingRangeEnd = function() {
        var r;
        if (!t.isInSelectingRange())
          return !1;
        var i = t.props, o = i.day, a = i.endDate, s = i.selectsEnd, l = i.selectsRange, u = (r = t.props.selectingDate) !== null && r !== void 0 ? r : t.props.preSelection;
        return s || l ? ge(o, u) : ge(o, a);
      }, t.isRangeStart = function() {
        var r = t.props, i = r.day, o = r.startDate, a = r.endDate;
        return !o || !a ? !1 : ge(o, i);
      }, t.isRangeEnd = function() {
        var r = t.props, i = r.day, o = r.startDate, a = r.endDate;
        return !o || !a ? !1 : ge(a, i);
      }, t.isWeekend = function() {
        var r = sS(t.props.day);
        return r === 0 || r === 6;
      }, t.isAfterMonth = function() {
        return t.props.month !== void 0 && (t.props.month + 1) % 12 === pt(t.props.day);
      }, t.isBeforeMonth = function() {
        return t.props.month !== void 0 && (pt(t.props.day) + 1) % 12 === t.props.month;
      }, t.isCurrentDay = function() {
        return t.isSameDay(Ae());
      }, t.isSelected = function() {
        var r;
        return t.props.selectsMultiple ? (r = t.props.selectedDates) === null || r === void 0 ? void 0 : r.some(function(i) {
          return t.isSameDayOrWeek(i);
        }) : t.isSameDayOrWeek(t.props.selected);
      }, t.getClassNames = function(r) {
        var i = t.props.dayClassName ? t.props.dayClassName(r) : void 0;
        return it("react-datepicker__day", i, "react-datepicker__day--" + FE(t.props.day), {
          "react-datepicker__day--disabled": t.isDisabled(),
          "react-datepicker__day--excluded": t.isExcluded(),
          "react-datepicker__day--selected": t.isSelected(),
          "react-datepicker__day--keyboard-selected": t.isKeyboardSelected(),
          "react-datepicker__day--range-start": t.isRangeStart(),
          "react-datepicker__day--range-end": t.isRangeEnd(),
          "react-datepicker__day--in-range": t.isInRange(),
          "react-datepicker__day--in-selecting-range": t.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": t.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": t.isSelectingRangeEnd(),
          "react-datepicker__day--today": t.isCurrentDay(),
          "react-datepicker__day--weekend": t.isWeekend(),
          "react-datepicker__day--outside-month": t.isAfterMonth() || t.isBeforeMonth()
        }, t.getHighLightedClass(), t.getHolidaysClass());
      }, t.getAriaLabel = function() {
        var r = t.props, i = r.day, o = r.ariaLabelPrefixWhenEnabled, a = o === void 0 ? "Choose" : o, s = r.ariaLabelPrefixWhenDisabled, l = s === void 0 ? "Not available" : s, u = t.isDisabled() || t.isExcluded() ? l : a;
        return "".concat(u, " ").concat(Ge(i, "PPPP", t.props.locale));
      }, t.getTitle = function() {
        var r = t.props, i = r.day, o = r.holidays, a = o === void 0 ? /* @__PURE__ */ new Map() : o, s = r.excludeDates, l = Ge(i, "MM.dd.yyyy"), u = [];
        return a.has(l) && u.push.apply(u, a.get(l).holidayNames), t.isExcluded() && u.push(s == null ? void 0 : s.filter(function(c) {
          return c instanceof Date ? ge(c, i) : ge(c == null ? void 0 : c.date, i);
        }).map(function(c) {
          if (!(c instanceof Date))
            return c == null ? void 0 : c.message;
        })), u.join(", ");
      }, t.getTabIndex = function() {
        var r = t.props.selected, i = t.props.preSelection, o = !(t.props.showWeekPicker && (t.props.showWeekNumber || !t.isStartOfWeek())) && (t.isKeyboardSelected() || t.isSameDay(r) && ge(i, r)) ? 0 : -1;
        return o;
      }, t.handleFocusDay = function() {
        var r;
        t.shouldFocusDay() && ((r = t.dayEl.current) === null || r === void 0 || r.focus({ preventScroll: !0 }));
      }, t.renderDayContents = function() {
        return t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth() || t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth() ? null : t.props.renderDayContents ? t.props.renderDayContents(xd(t.props.day), t.props.day) : xd(t.props.day);
      }, t.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          C.createElement(
            "div",
            { ref: t.dayEl, className: t.getClassNames(t.props.day), onKeyDown: t.handleOnKeyDown, onClick: t.handleClick, onMouseEnter: t.props.usePointerEvent ? void 0 : t.handleMouseEnter, onPointerEnter: t.props.usePointerEvent ? t.handleMouseEnter : void 0, tabIndex: t.getTabIndex(), "aria-label": t.getAriaLabel(), role: "option", title: t.getTitle(), "aria-disabled": t.isDisabled(), "aria-current": t.isCurrentDay() ? "date" : void 0, "aria-selected": t.isSelected() || t.isInRange() },
            t.renderDayContents(),
            t.getTitle() !== "" && C.createElement("span", { className: "overlay" }, t.getTitle())
          )
        );
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      this.handleFocusDay();
    }, n.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    }, n.prototype.shouldFocusDay = function() {
      var t = !1;
      return this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (t = !0), this.props.inline && !this.props.shouldFocusDayInline && (t = !1), this.isDayActiveElement() && (t = !0), this.isDuplicateDay() && (t = !1)), t;
    }, n.prototype.isDayActiveElement = function() {
      var t, r, i;
      return ((r = (t = this.props.containerRef) === null || t === void 0 ? void 0 : t.current) === null || r === void 0 ? void 0 : r.contains(document.activeElement)) && ((i = document.activeElement) === null || i === void 0 ? void 0 : i.classList.contains("react-datepicker__day"));
    }, n.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    }, n;
  }(tt)
), qE = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.weekNumberEl = St(), t.handleClick = function(r) {
        t.props.onClick && t.props.onClick(r);
      }, t.handleOnKeyDown = function(r) {
        var i, o, a = r.key;
        a === Y.Space && (r.preventDefault(), r.key = Y.Enter), (o = (i = t.props).handleOnKeyDown) === null || o === void 0 || o.call(i, r);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !ge(t.props.date, t.props.selected) && ge(t.props.date, t.props.preSelection);
      }, t.getTabIndex = function() {
        return t.props.showWeekPicker && t.props.showWeekNumber && (t.isKeyboardSelected() || ge(t.props.date, t.props.selected) && ge(t.props.preSelection, t.props.selected)) ? 0 : -1;
      }, t.handleFocusWeekNumber = function(r) {
        var i = !1;
        t.getTabIndex() === 0 && !(r != null && r.isInputFocused) && ge(t.props.date, t.props.preSelection) && ((!document.activeElement || document.activeElement === document.body) && (i = !0), t.props.inline && !t.props.shouldFocusDayInline && (i = !1), t.props.containerRef && t.props.containerRef.current && t.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number") && (i = !0)), i && t.weekNumberEl.current && t.weekNumberEl.current.focus({ preventScroll: !0 });
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    }, n.prototype.componentDidUpdate = function(t) {
      this.handleFocusWeekNumber(t);
    }, n.prototype.render = function() {
      var t = this.props, r = t.weekNumber, i = t.ariaLabelPrefix, o = i === void 0 ? n.defaultProps.ariaLabelPrefix : i, a = t.onClick, s = {
        "react-datepicker__week-number": !0,
        "react-datepicker__week-number--clickable": !!a,
        "react-datepicker__week-number--selected": !!a && ge(this.props.date, this.props.selected),
        "react-datepicker__week-number--keyboard-selected": this.isKeyboardSelected()
      };
      return C.createElement("div", { ref: this.weekNumberEl, className: it(s), "aria-label": "".concat(o, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, r);
    }, n;
  }(tt)
), KE = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.isDisabled = function(r) {
        return kn(r, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.handleDayClick = function(r, i) {
        t.props.onDayClick && t.props.onDayClick(r, i);
      }, t.handleDayMouseEnter = function(r) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(r);
      }, t.handleWeekClick = function(r, i, o) {
        for (var a, s, l, u = new Date(r), c = 0; c < 7; c++) {
          var d = new Date(r);
          d.setDate(d.getDate() + c);
          var p = !t.isDisabled(d);
          if (p) {
            u = d;
            break;
          }
        }
        typeof t.props.onWeekSelect == "function" && t.props.onWeekSelect(u, i, o), t.props.showWeekPicker && t.handleDayClick(u, o), ((a = t.props.shouldCloseOnSelect) !== null && a !== void 0 ? a : n.defaultProps.shouldCloseOnSelect) && ((l = (s = t.props).setOpen) === null || l === void 0 || l.call(s, !1));
      }, t.formatWeekNumber = function(r) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(r) : PE(r);
      }, t.renderDays = function() {
        var r = t.startOfWeek(), i = [], o = t.formatWeekNumber(r);
        if (t.props.showWeekNumber) {
          var a = t.props.onWeekSelect || t.props.showWeekPicker ? t.handleWeekClick.bind(t, r, o) : void 0;
          i.push(C.createElement(qE, we({ key: "W" }, n.defaultProps, t.props, { weekNumber: o, date: r, onClick: a })));
        }
        return i.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = Hn(r, s);
          return C.createElement(QE, we({}, n.defaultProps, t.props, { ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix, key: l.valueOf(), day: l, onClick: t.handleDayClick.bind(t, l), onMouseEnter: t.handleDayMouseEnter.bind(t, l) }));
        }));
      }, t.startOfWeek = function() {
        return Fn(t.props.day, t.props.locale, t.props.calendarStartDay);
      }, t.isKeyboardSelected = function() {
        return !t.props.disabledKeyboardNavigation && !ge(t.startOfWeek(), t.props.selected) && ge(t.startOfWeek(), t.props.preSelection);
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = {
        "react-datepicker__week": !0,
        "react-datepicker__week--selected": ge(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return C.createElement("div", { className: it(t) }, this.renderDays());
    }, n;
  }(tt)
), ri, eD = 6, Er = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
}, Ks = (ri = {}, ri[Er.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, ri[Er.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, ri[Er.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, ri), wo = 1;
function Hd(e, n) {
  return e ? Er.FOUR_COLUMNS : n ? Er.TWO_COLUMNS : Er.THREE_COLUMNS;
}
var tD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.MONTH_REFS = qt([], Array(12), !0).map(function() {
        return St();
      }), t.QUARTER_REFS = qt([], Array(4), !0).map(function() {
        return St();
      }), t.isDisabled = function(r) {
        return kn(r, {
          minDate: t.props.minDate,
          maxDate: t.props.maxDate,
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals,
          includeDateIntervals: t.props.includeDateIntervals,
          includeDates: t.props.includeDates,
          filterDate: t.props.filterDate
        });
      }, t.isExcluded = function(r) {
        return ic(r, {
          excludeDates: t.props.excludeDates,
          excludeDateIntervals: t.props.excludeDateIntervals
        });
      }, t.handleDayClick = function(r, i) {
        var o, a;
        (a = (o = t.props).onDayClick) === null || a === void 0 || a.call(o, r, i, t.props.orderInDisplay);
      }, t.handleDayMouseEnter = function(r) {
        var i, o;
        (o = (i = t.props).onDayMouseEnter) === null || o === void 0 || o.call(i, r);
      }, t.handleMouseLeave = function() {
        var r, i;
        (i = (r = t.props).onMouseLeave) === null || i === void 0 || i.call(r);
      }, t.isRangeStartMonth = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate;
        return !a || !s ? !1 : dt(yt(o, r), a);
      }, t.isRangeStartQuarter = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate;
        return !a || !s ? !1 : ba(Cr(o, r), a);
      }, t.isRangeEndMonth = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate;
        return !a || !s ? !1 : dt(yt(o, r), s);
      }, t.isRangeEndQuarter = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate;
        return !a || !s ? !1 : ba(Cr(o, r), s);
      }, t.isInSelectingRangeMonth = function(r) {
        var i, o = t.props, a = o.day, s = o.selectsStart, l = o.selectsEnd, u = o.selectsRange, c = o.startDate, d = o.endDate, p = (i = t.props.selectingDate) !== null && i !== void 0 ? i : t.props.preSelection;
        return !(s || l || u) || !p ? !1 : s && d ? vo(p, d, r, a) : l && c || u && c && !d ? vo(c, p, r, a) : !1;
      }, t.isSelectingMonthRangeStart = function(r) {
        var i;
        if (!t.isInSelectingRangeMonth(r))
          return !1;
        var o = t.props, a = o.day, s = o.startDate, l = o.selectsStart, u = yt(a, r), c = (i = t.props.selectingDate) !== null && i !== void 0 ? i : t.props.preSelection;
        return l ? dt(u, c) : dt(u, s);
      }, t.isSelectingMonthRangeEnd = function(r) {
        var i;
        if (!t.isInSelectingRangeMonth(r))
          return !1;
        var o = t.props, a = o.day, s = o.endDate, l = o.selectsEnd, u = o.selectsRange, c = yt(a, r), d = (i = t.props.selectingDate) !== null && i !== void 0 ? i : t.props.preSelection;
        return l || u ? dt(c, d) : dt(c, s);
      }, t.isInSelectingRangeQuarter = function(r) {
        var i, o = t.props, a = o.day, s = o.selectsStart, l = o.selectsEnd, u = o.selectsRange, c = o.startDate, d = o.endDate, p = (i = t.props.selectingDate) !== null && i !== void 0 ? i : t.props.preSelection;
        return !(s || l || u) || !p ? !1 : s && d ? yo(p, d, r, a) : l && c || u && c && !d ? yo(c, p, r, a) : !1;
      }, t.isWeekInMonth = function(r) {
        var i = t.props.day, o = Hn(r, 6);
        return dt(r, i) || dt(o, i);
      }, t.isCurrentMonth = function(r, i) {
        return de(r) === de(Ae()) && i === pt(Ae());
      }, t.isCurrentQuarter = function(r, i) {
        return de(r) === de(Ae()) && i === tr(Ae());
      }, t.isSelectedMonth = function(r, i, o) {
        return pt(o) === i && de(r) === de(o);
      }, t.isSelectMonthInList = function(r, i, o) {
        return o.some(function(a) {
          return t.isSelectedMonth(r, i, a);
        });
      }, t.isSelectedQuarter = function(r, i, o) {
        return tr(r) === i && de(r) === de(o);
      }, t.renderWeeks = function() {
        for (var r = [], i = t.props.fixedHeight, o = 0, a = !1, s = Fn(Nn(t.props.day), t.props.locale, t.props.calendarStartDay), l = function(m) {
          return t.props.showWeekPicker ? Fn(m, t.props.locale, t.props.calendarStartDay) : t.props.preSelection;
        }, u = function(m) {
          return t.props.showWeekPicker ? Fn(m, t.props.locale, t.props.calendarStartDay) : t.props.selected;
        }, c = t.props.selected ? u(t.props.selected) : void 0, d = t.props.preSelection ? l(t.props.preSelection) : void 0; r.push(C.createElement(KE, we({}, t.props, { ariaLabelPrefix: t.props.weekAriaLabelPrefix, key: o, day: s, month: pt(t.props.day), onDayClick: t.handleDayClick, onDayMouseEnter: t.handleDayMouseEnter, selected: c, preSelection: d, showWeekNumber: t.props.showWeekNumbers }))), !a; ) {
          o++, s = ca(s, 1);
          var p = i && o >= eD, f = !i && !t.isWeekInMonth(s);
          if (p || f)
            if (t.props.peekNextMonth)
              a = !0;
            else
              break;
        }
        return r;
      }, t.onMonthClick = function(r, i) {
        var o = t.isMonthDisabledForLabelDate(i), a = o.isDisabled, s = o.labelDate;
        a || t.handleDayClick(Nn(s), r);
      }, t.onMonthMouseEnter = function(r) {
        var i = t.isMonthDisabledForLabelDate(r), o = i.isDisabled, a = i.labelDate;
        o || t.handleDayMouseEnter(Nn(a));
      }, t.handleMonthNavigation = function(r, i) {
        var o, a, s, l;
        (a = (o = t.props).setPreSelection) === null || a === void 0 || a.call(o, i), (l = (s = t.MONTH_REFS[r]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus();
      }, t.handleKeyboardNavigation = function(r, i, o) {
        var a, s = t.props, l = s.selected, u = s.preSelection, c = s.setPreSelection, d = s.minDate, p = s.maxDate, f = s.showFourColumnMonthYearPicker, m = s.showTwoColumnMonthYearPicker;
        if (u) {
          var h = Hd(f, m), g = t.getVerticalOffset(h), v = (a = Ks[h]) === null || a === void 0 ? void 0 : a.grid, y = function(x, E, D) {
            var _, k, F = E, A = D;
            switch (x) {
              case Y.ArrowRight:
                F = Ht(E, wo), A = D === 11 ? 0 : D + wo;
                break;
              case Y.ArrowLeft:
                F = Nr(E, wo), A = D === 0 ? 11 : D - wo;
                break;
              case Y.ArrowUp:
                F = Nr(E, g), A = !((_ = v == null ? void 0 : v[0]) === null || _ === void 0) && _.includes(D) ? D + 12 - g : D - g;
                break;
              case Y.ArrowDown:
                F = Ht(E, g), A = !((k = v == null ? void 0 : v[v.length - 1]) === null || k === void 0) && k.includes(D) ? D - 12 + g : D + g;
                break;
            }
            return { newCalculatedDate: F, newCalculatedMonth: A };
          }, b = function(x, E, D) {
            for (var _ = 40, k = x, F = !1, A = 0, N = y(k, E, D), M = N.newCalculatedDate, V = N.newCalculatedMonth; !F; ) {
              if (A >= _) {
                M = E, V = D;
                break;
              }
              if (d && M < d) {
                k = Y.ArrowRight;
                var R = y(k, M, V);
                M = R.newCalculatedDate, V = R.newCalculatedMonth;
              }
              if (p && M > p) {
                k = Y.ArrowLeft;
                var R = y(k, M, V);
                M = R.newCalculatedDate, V = R.newCalculatedMonth;
              }
              if (GE(M, t.props)) {
                var R = y(k, M, V);
                M = R.newCalculatedDate, V = R.newCalculatedMonth;
              } else
                F = !0;
              A++;
            }
            return { newCalculatedDate: M, newCalculatedMonth: V };
          };
          if (i === Y.Enter) {
            t.isMonthDisabled(o) || (t.onMonthClick(r, o), c == null || c(l));
            return;
          }
          var I = b(i, u, o), w = I.newCalculatedDate, S = I.newCalculatedMonth;
          switch (i) {
            case Y.ArrowRight:
            case Y.ArrowLeft:
            case Y.ArrowUp:
            case Y.ArrowDown:
              t.handleMonthNavigation(S, w);
              break;
          }
        }
      }, t.getVerticalOffset = function(r) {
        var i, o;
        return (o = (i = Ks[r]) === null || i === void 0 ? void 0 : i.verticalNavigationOffset) !== null && o !== void 0 ? o : 0;
      }, t.onMonthKeyDown = function(r, i) {
        var o = t.props, a = o.disabledKeyboardNavigation, s = o.handleOnMonthKeyDown, l = r.key;
        l !== Y.Tab && r.preventDefault(), a || t.handleKeyboardNavigation(r, l, i), s && s(r);
      }, t.onQuarterClick = function(r, i) {
        var o = Cr(t.props.day, i);
        qs(o, t.props) || t.handleDayClick(Td(o), r);
      }, t.onQuarterMouseEnter = function(r) {
        var i = Cr(t.props.day, r);
        qs(i, t.props) || t.handleDayMouseEnter(Td(i));
      }, t.handleQuarterNavigation = function(r, i) {
        var o, a, s, l;
        t.isDisabled(i) || t.isExcluded(i) || ((a = (o = t.props).setPreSelection) === null || a === void 0 || a.call(o, i), (l = (s = t.QUARTER_REFS[r - 1]) === null || s === void 0 ? void 0 : s.current) === null || l === void 0 || l.focus());
      }, t.onQuarterKeyDown = function(r, i) {
        var o, a, s = r.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (s) {
            case Y.Enter:
              t.onQuarterClick(r, i), (a = (o = t.props).setPreSelection) === null || a === void 0 || a.call(o, t.props.selected);
              break;
            case Y.ArrowRight:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(i === 4 ? 1 : i + 1, qu(t.props.preSelection, 1));
              break;
            case Y.ArrowLeft:
              if (!t.props.preSelection)
                break;
              t.handleQuarterNavigation(i === 1 ? 4 : i - 1, Rh(t.props.preSelection, 1));
              break;
          }
      }, t.isMonthDisabledForLabelDate = function(r) {
        var i, o = t.props, a = o.day, s = o.minDate, l = o.maxDate, u = o.excludeDates, c = o.includeDates, d = yt(a, r);
        return {
          isDisabled: (i = (s || l || u || c) && Fh(d, t.props)) !== null && i !== void 0 ? i : !1,
          labelDate: d
        };
      }, t.isMonthDisabled = function(r) {
        var i = t.isMonthDisabledForLabelDate(r).isDisabled;
        return i;
      }, t.getMonthClassNames = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate, l = i.preSelection, u = i.monthClassName, c = u ? u(yt(o, r)) : void 0, d = t.getSelection();
        return it("react-datepicker__month-text", "react-datepicker__month-".concat(r), c, {
          "react-datepicker__month-text--disabled": t.isMonthDisabled(r),
          "react-datepicker__month-text--selected": d ? t.isSelectMonthInList(o, r, d) : void 0,
          "react-datepicker__month-text--keyboard-selected": !t.props.disabledKeyboardNavigation && l && t.isSelectedMonth(o, r, l) && !t.isMonthDisabled(r),
          "react-datepicker__month-text--in-selecting-range": t.isInSelectingRangeMonth(r),
          "react-datepicker__month-text--in-range": a && s ? vo(a, s, r, o) : void 0,
          "react-datepicker__month-text--range-start": t.isRangeStartMonth(r),
          "react-datepicker__month-text--range-end": t.isRangeEndMonth(r),
          "react-datepicker__month-text--selecting-range-start": t.isSelectingMonthRangeStart(r),
          "react-datepicker__month-text--selecting-range-end": t.isSelectingMonthRangeEnd(r),
          "react-datepicker__month-text--today": t.isCurrentMonth(o, r)
        });
      }, t.getTabIndex = function(r) {
        if (t.props.preSelection == null)
          return "-1";
        var i = pt(t.props.preSelection), o = !t.props.disabledKeyboardNavigation && r === i ? "0" : "-1";
        return o;
      }, t.getQuarterTabIndex = function(r) {
        if (t.props.preSelection == null)
          return "-1";
        var i = tr(t.props.preSelection), o = !t.props.disabledKeyboardNavigation && r === i ? "0" : "-1";
        return o;
      }, t.getAriaLabel = function(r) {
        var i = t.props, o = i.chooseDayAriaLabelPrefix, a = o === void 0 ? "Choose" : o, s = i.disabledDayAriaLabelPrefix, l = s === void 0 ? "Not available" : s, u = i.day, c = i.locale, d = yt(u, r), p = t.isDisabled(d) || t.isExcluded(d) ? l : a;
        return "".concat(p, " ").concat(Ge(d, "MMMM yyyy", c));
      }, t.getQuarterClassNames = function(r) {
        var i = t.props, o = i.day, a = i.startDate, s = i.endDate, l = i.selected, u = i.minDate, c = i.maxDate, d = i.excludeDates, p = i.includeDates, f = i.filterDate, m = i.preSelection, h = i.disabledKeyboardNavigation, g = (u || c || d || p || f) && qs(Cr(o, r), t.props);
        return it("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(r), {
          "react-datepicker__quarter-text--disabled": g,
          "react-datepicker__quarter-text--selected": l ? t.isSelectedQuarter(o, r, l) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !h && m && t.isSelectedQuarter(o, r, m) && !g,
          "react-datepicker__quarter-text--in-selecting-range": t.isInSelectingRangeQuarter(r),
          "react-datepicker__quarter-text--in-range": a && s ? yo(a, s, r, o) : void 0,
          "react-datepicker__quarter-text--range-start": t.isRangeStartQuarter(r),
          "react-datepicker__quarter-text--range-end": t.isRangeEndQuarter(r)
        });
      }, t.getMonthContent = function(r) {
        var i = t.props, o = i.showFullMonthYearPicker, a = i.renderMonthContent, s = i.locale, l = i.day, u = Ph(r, s), c = rc(r, s);
        return a ? a(r, u, c, l) : o ? c : u;
      }, t.getQuarterContent = function(r) {
        var i, o = t.props, a = o.renderQuarterContent, s = o.locale, l = WE(r, s);
        return (i = a == null ? void 0 : a(r, l)) !== null && i !== void 0 ? i : l;
      }, t.renderMonths = function() {
        var r, i = t.props, o = i.showTwoColumnMonthYearPicker, a = i.showFourColumnMonthYearPicker, s = i.day, l = i.selected, u = (r = Ks[Hd(a, o)]) === null || r === void 0 ? void 0 : r.grid;
        return u == null ? void 0 : u.map(function(c, d) {
          return C.createElement("div", { className: "react-datepicker__month-wrapper", key: d }, c.map(function(p, f) {
            return C.createElement("div", { ref: t.MONTH_REFS[p], key: f, onClick: function(m) {
              t.onMonthClick(m, p);
            }, onKeyDown: function(m) {
              Lh(m) && (m.preventDefault(), m.key = Y.Enter), t.onMonthKeyDown(m, p);
            }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
              return t.onMonthMouseEnter(p);
            }, onPointerEnter: t.props.usePointerEvent ? function() {
              return t.onMonthMouseEnter(p);
            } : void 0, tabIndex: Number(t.getTabIndex(p)), className: t.getMonthClassNames(p), "aria-disabled": t.isMonthDisabled(p), role: "option", "aria-label": t.getAriaLabel(p), "aria-current": t.isCurrentMonth(s, p) ? "date" : void 0, "aria-selected": l ? t.isSelectedMonth(s, p, l) : void 0 }, t.getMonthContent(p));
          }));
        });
      }, t.renderQuarters = function() {
        var r = t.props, i = r.day, o = r.selected, a = [1, 2, 3, 4];
        return C.createElement("div", { className: "react-datepicker__quarter-wrapper" }, a.map(function(s, l) {
          return C.createElement("div", { key: l, ref: t.QUARTER_REFS[l], role: "option", onClick: function(u) {
            t.onQuarterClick(u, s);
          }, onKeyDown: function(u) {
            t.onQuarterKeyDown(u, s);
          }, onMouseEnter: t.props.usePointerEvent ? void 0 : function() {
            return t.onQuarterMouseEnter(s);
          }, onPointerEnter: t.props.usePointerEvent ? function() {
            return t.onQuarterMouseEnter(s);
          } : void 0, className: t.getQuarterClassNames(s), "aria-selected": o ? t.isSelectedQuarter(i, s, o) : void 0, tabIndex: Number(t.getQuarterTabIndex(s)), "aria-current": t.isCurrentQuarter(i, s) ? "date" : void 0 }, t.getQuarterContent(s));
        }));
      }, t.getClassNames = function() {
        var r = t.props, i = r.selectingDate, o = r.selectsStart, a = r.selectsEnd, s = r.showMonthYearPicker, l = r.showQuarterYearPicker, u = r.showWeekPicker;
        return it("react-datepicker__month", {
          "react-datepicker__month--selecting-range": i && (o || a)
        }, { "react-datepicker__monthPicker": s }, { "react-datepicker__quarterPicker": l }, { "react-datepicker__weekPicker": u });
      }, t;
    }
    return n.prototype.getSelection = function() {
      var t = this.props, r = t.selected, i = t.selectedDates, o = t.selectsMultiple;
      if (o)
        return i;
      if (r)
        return [r];
    }, n.prototype.render = function() {
      var t = this.props, r = t.showMonthYearPicker, i = t.showQuarterYearPicker, o = t.day, a = t.ariaLabelPrefix, s = a === void 0 ? "Month " : a, l = s ? s.trim() + " " : "";
      return C.createElement("div", { className: this.getClassNames(), onMouseLeave: this.props.usePointerEvent ? void 0 : this.handleMouseLeave, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(l).concat(Ge(o, "MMMM, yyyy", this.props.locale)), role: "listbox" }, r ? this.renderMonths() : i ? this.renderQuarters() : this.renderWeeks());
    }, n;
  }(tt)
), nD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.isSelectedMonth = function(r) {
        return t.props.month === r;
      }, t.renderOptions = function() {
        return t.props.monthNames.map(function(r, i) {
          return C.createElement(
            "div",
            { className: t.isSelectedMonth(i) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: r, onClick: t.onChange.bind(t, i), "aria-selected": t.isSelectedMonth(i) ? "true" : void 0 },
            t.isSelectedMonth(i) ? C.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            r
          );
        });
      }, t.onChange = function(r) {
        return t.props.onChange(r);
      }, t.handleClickOutside = function() {
        return t.props.onCancel();
      }, t;
    }
    return n.prototype.render = function() {
      return C.createElement("div", { className: "react-datepicker__month-dropdown" }, this.renderOptions());
    }, n;
  }(tt)
), rD = us(nD), iD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function(r) {
        return r.map(function(i, o) {
          return C.createElement("option", { key: i, value: o }, i);
        });
      }, t.renderSelectMode = function(r) {
        return C.createElement("select", { value: t.props.month, className: "react-datepicker__month-select", onChange: function(i) {
          return t.onChange(parseInt(i.target.value));
        } }, t.renderSelectOptions(r));
      }, t.renderReadView = function(r, i) {
        return C.createElement(
          "div",
          { key: "read", style: { visibility: r ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: t.toggleDropdown },
          C.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          C.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, i[t.props.month])
        );
      }, t.renderDropdown = function(r) {
        return C.createElement(rD, we({ key: "dropdown" }, t.props, { monthNames: r, onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function(r) {
        var i = t.state.dropdownVisible, o = [t.renderReadView(!i, r)];
        return i && o.unshift(t.renderDropdown(r)), o;
      }, t.onChange = function(r) {
        t.toggleDropdown(), r !== t.props.month && t.props.onChange(r);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t = this, r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(o) {
        return Ph(o, t.props.locale);
      } : function(o) {
        return rc(o, t.props.locale);
      }), i;
      switch (this.props.dropdownMode) {
        case "scroll":
          i = this.renderScrollMode(r);
          break;
        case "select":
          i = this.renderSelectMode(r);
          break;
      }
      return C.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, i);
    }, n;
  }(tt)
);
function oD(e, n) {
  for (var t = [], r = Nn(e), i = Nn(n); !Gn(r, i); )
    t.push(Ae(r)), r = Ht(r, 1);
  return t;
}
var aD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.renderOptions = function() {
        return r.state.monthYearsList.map(function(i) {
          var o = Wl(i), a = Xt(r.props.date, i) && dt(r.props.date, i);
          return C.createElement(
            "div",
            { className: a ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: o, onClick: r.onChange.bind(r, o), "aria-selected": a ? "true" : void 0 },
            a ? C.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            Ge(i, r.props.dateFormat, r.props.locale)
          );
        });
      }, r.onChange = function(i) {
        return r.props.onChange(i);
      }, r.handleClickOutside = function() {
        r.props.onCancel();
      }, r.state = {
        monthYearsList: oD(r.props.minDate, r.props.maxDate)
      }, r;
    }
    return n.prototype.render = function() {
      var t = it({
        "react-datepicker__month-year-dropdown": !0,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return C.createElement("div", { className: t }, this.renderOptions());
    }, n;
  }(tt)
), sD = us(aD), lD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var r = Nn(t.props.minDate), i = Nn(t.props.maxDate), o = []; !Gn(r, i); ) {
          var a = Wl(r);
          o.push(C.createElement("option", { key: a, value: a }, Ge(r, t.props.dateFormat, t.props.locale))), r = Ht(r, 1);
        }
        return o;
      }, t.onSelectChange = function(r) {
        t.onChange(parseInt(r.target.value));
      }, t.renderSelectMode = function() {
        return C.createElement("select", { value: Wl(Nn(t.props.date)), className: "react-datepicker__month-year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(r) {
        var i = Ge(t.props.date, t.props.dateFormat, t.props.locale);
        return C.createElement(
          "div",
          { key: "read", style: { visibility: r ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: t.toggleDropdown },
          C.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          C.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, i)
        );
      }, t.renderDropdown = function() {
        return C.createElement(sD, we({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var r = t.state.dropdownVisible, i = [t.renderReadView(!r)];
        return r && i.unshift(t.renderDropdown()), i;
      }, t.onChange = function(r) {
        t.toggleDropdown();
        var i = Ae(r);
        Xt(t.props.date, i) && dt(t.props.date, i) || t.props.onChange(i);
      }, t.toggleDropdown = function() {
        return t.setState({
          dropdownVisible: !t.state.dropdownVisible
        });
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return C.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(tt)
), uD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.state = {
        height: null
      }, t.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var r, i, o;
          t.list && (t.list.scrollTop = (o = t.centerLi && n.calcCenterPosition(t.props.monthRef ? t.props.monthRef.clientHeight - ((i = (r = t.header) === null || r === void 0 ? void 0 : r.clientHeight) !== null && i !== void 0 ? i : 0) : t.list.clientHeight, t.centerLi)) !== null && o !== void 0 ? o : 0);
        });
      }, t.handleClick = function(r) {
        var i, o;
        (t.props.minTime || t.props.maxTime) && Ad(r, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Rd(r, t.props) || (o = (i = t.props).onChange) === null || o === void 0 || o.call(i, r);
      }, t.isSelectedTime = function(r) {
        return t.props.selected && UE(t.props.selected, r);
      }, t.isDisabledTime = function(r) {
        return (t.props.minTime || t.props.maxTime) && Ad(r, t.props) || (t.props.excludeTimes || t.props.includeTimes || t.props.filterTime) && Rd(r, t.props);
      }, t.liClasses = function(r) {
        var i, o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(r) : void 0
        ];
        return t.isSelectedTime(r) && o.push("react-datepicker__time-list-item--selected"), t.isDisabledTime(r) && o.push("react-datepicker__time-list-item--disabled"), t.props.injectTimes && (en(r) * 3600 + tn(r) * 60 + dn(r)) % (((i = t.props.intervals) !== null && i !== void 0 ? i : n.defaultProps.intervals) * 60) !== 0 && o.push("react-datepicker__time-list-item--injected"), o.join(" ");
      }, t.handleOnKeyDown = function(r, i) {
        var o, a;
        r.key === Y.Space && (r.preventDefault(), r.key = Y.Enter), (r.key === Y.ArrowUp || r.key === Y.ArrowLeft) && r.target instanceof HTMLElement && r.target.previousSibling && (r.preventDefault(), r.target.previousSibling instanceof HTMLElement && r.target.previousSibling.focus()), (r.key === Y.ArrowDown || r.key === Y.ArrowRight) && r.target instanceof HTMLElement && r.target.nextSibling && (r.preventDefault(), r.target.nextSibling instanceof HTMLElement && r.target.nextSibling.focus()), r.key === Y.Enter && t.handleClick(i), (a = (o = t.props).handleOnKeyDown) === null || a === void 0 || a.call(o, r);
      }, t.renderTimes = function() {
        for (var r, i = [], o = t.props.format ? t.props.format : "p", a = (r = t.props.intervals) !== null && r !== void 0 ? r : n.defaultProps.intervals, s = t.props.selected || t.props.openToDate || Ae(), l = Vo(s), u = t.props.injectTimes && t.props.injectTimes.sort(function(g, v) {
          return g.getTime() - v.getTime();
        }), c = 60 * jE(s), d = c / a, p = 0; p < d; p++) {
          var f = Ll(l, p * a);
          if (i.push(f), u) {
            var m = zE(l, f, p, a, u);
            i = i.concat(m);
          }
        }
        var h = i.reduce(function(g, v) {
          return v.getTime() <= s.getTime() ? v : g;
        }, i[0]);
        return i.map(function(g) {
          return C.createElement("li", { key: g.valueOf(), onClick: t.handleClick.bind(t, g), className: t.liClasses(g), ref: function(v) {
            g === h && (t.centerLi = v);
          }, onKeyDown: function(v) {
            t.handleOnKeyDown(v, g);
          }, tabIndex: g === h ? 0 : -1, role: "option", "aria-selected": t.isSelectedTime(g) ? "true" : void 0, "aria-disabled": t.isDisabledTime(g) ? "true" : void 0 }, Ge(g, o, t.props.locale));
        });
      }, t;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time"
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime(), this.props.monthRef && this.header && this.setState({
        height: this.props.monthRef.clientHeight - this.header.clientHeight
      });
    }, n.prototype.render = function() {
      var t = this, r, i = this.state.height;
      return C.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((r = this.props.todayButton) !== null && r !== void 0 ? r : n.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        C.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(o) {
            t.header = o;
          } },
          C.createElement("div", { className: "react-datepicker-time__header" }, this.props.timeCaption)
        ),
        C.createElement(
          "div",
          { className: "react-datepicker__time" },
          C.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            C.createElement("ul", { className: "react-datepicker__time-list", ref: function(o) {
              t.list = o;
            }, style: i ? { height: i } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    }, n.calcCenterPosition = function(t, r) {
      return r.offsetTop - (t / 2 - r.clientHeight / 2);
    }, n;
  }(tt)
), Bd = 3, cD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.YEAR_REFS = qt([], Array(r.props.yearItemNumber), !0).map(function() {
        return St();
      }), r.isDisabled = function(i) {
        return kn(i, {
          minDate: r.props.minDate,
          maxDate: r.props.maxDate,
          excludeDates: r.props.excludeDates,
          includeDates: r.props.includeDates,
          filterDate: r.props.filterDate
        });
      }, r.isExcluded = function(i) {
        return ic(i, {
          excludeDates: r.props.excludeDates
        });
      }, r.selectingDate = function() {
        var i;
        return (i = r.props.selectingDate) !== null && i !== void 0 ? i : r.props.preSelection;
      }, r.updateFocusOnPaginate = function(i) {
        var o = function() {
          var a, s;
          (s = (a = r.YEAR_REFS[i]) === null || a === void 0 ? void 0 : a.current) === null || s === void 0 || s.focus();
        };
        window.requestAnimationFrame(o);
      }, r.handleYearClick = function(i, o) {
        r.props.onDayClick && r.props.onDayClick(i, o);
      }, r.handleYearNavigation = function(i, o) {
        var a, s, l, u, c = r.props, d = c.date, p = c.yearItemNumber;
        if (!(d === void 0 || p === void 0)) {
          var f = Rn(d, p).startPeriod;
          r.isDisabled(o) || r.isExcluded(o) || ((s = (a = r.props).setPreSelection) === null || s === void 0 || s.call(a, o), i - f < 0 ? r.updateFocusOnPaginate(p - (f - i)) : i - f >= p ? r.updateFocusOnPaginate(Math.abs(p - (i - f))) : (u = (l = r.YEAR_REFS[i - f]) === null || l === void 0 ? void 0 : l.current) === null || u === void 0 || u.focus());
        }
      }, r.isSameDay = function(i, o) {
        return ge(i, o);
      }, r.isCurrentYear = function(i) {
        return i === de(Ae());
      }, r.isRangeStart = function(i) {
        return r.props.startDate && r.props.endDate && Xt(Zt(Ae(), i), r.props.startDate);
      }, r.isRangeEnd = function(i) {
        return r.props.startDate && r.props.endDate && Xt(Zt(Ae(), i), r.props.endDate);
      }, r.isInRange = function(i) {
        return bo(i, r.props.startDate, r.props.endDate);
      }, r.isInSelectingRange = function(i) {
        var o = r.props, a = o.selectsStart, s = o.selectsEnd, l = o.selectsRange, u = o.startDate, c = o.endDate;
        return !(a || s || l) || !r.selectingDate() ? !1 : a && c ? bo(i, r.selectingDate(), c) : s && u || l && u && !c ? bo(i, u, r.selectingDate()) : !1;
      }, r.isSelectingRangeStart = function(i) {
        var o;
        if (!r.isInSelectingRange(i))
          return !1;
        var a = r.props, s = a.startDate, l = a.selectsStart, u = Zt(Ae(), i);
        return l ? Xt(u, (o = r.selectingDate()) !== null && o !== void 0 ? o : null) : Xt(u, s ?? null);
      }, r.isSelectingRangeEnd = function(i) {
        var o;
        if (!r.isInSelectingRange(i))
          return !1;
        var a = r.props, s = a.endDate, l = a.selectsEnd, u = a.selectsRange, c = Zt(Ae(), i);
        return l || u ? Xt(c, (o = r.selectingDate()) !== null && o !== void 0 ? o : null) : Xt(c, s ?? null);
      }, r.isKeyboardSelected = function(i) {
        if (!(r.props.date === void 0 || r.props.selected == null || r.props.preSelection == null)) {
          var o = r.props, a = o.minDate, s = o.maxDate, l = o.excludeDates, u = o.includeDates, c = o.filterDate, d = di(Zt(r.props.date, i)), p = (a || s || l || u || c) && Hl(i, r.props);
          return !r.props.disabledKeyboardNavigation && !r.props.inline && !ge(d, di(r.props.selected)) && ge(d, di(r.props.preSelection)) && !p;
        }
      }, r.onYearClick = function(i, o) {
        var a = r.props.date;
        a !== void 0 && r.handleYearClick(di(Zt(a, o)), i);
      }, r.onYearKeyDown = function(i, o) {
        var a, s, l = i.key, u = r.props, c = u.date, d = u.yearItemNumber, p = u.handleOnKeyDown;
        if (l !== Y.Tab && i.preventDefault(), !r.props.disabledKeyboardNavigation)
          switch (l) {
            case Y.Enter:
              if (r.props.selected == null)
                break;
              r.onYearClick(i, o), (s = (a = r.props).setPreSelection) === null || s === void 0 || s.call(a, r.props.selected);
              break;
            case Y.ArrowRight:
              if (r.props.preSelection == null)
                break;
              r.handleYearNavigation(o + 1, un(r.props.preSelection, 1));
              break;
            case Y.ArrowLeft:
              if (r.props.preSelection == null)
                break;
              r.handleYearNavigation(o - 1, _r(r.props.preSelection, 1));
              break;
            case Y.ArrowUp: {
              if (c === void 0 || d === void 0 || r.props.preSelection == null)
                break;
              var f = Rn(c, d).startPeriod, m = Bd, h = o - m;
              if (h < f) {
                var g = d % m;
                o >= f && o < f + g ? m = g : m += g, h = o - m;
              }
              r.handleYearNavigation(h, _r(r.props.preSelection, m));
              break;
            }
            case Y.ArrowDown: {
              if (c === void 0 || d === void 0 || r.props.preSelection == null)
                break;
              var v = Rn(c, d).endPeriod, m = Bd, h = o + m;
              if (h > v) {
                var g = d % m;
                o <= v && o > v - g ? m = g : m += g, h = o + m;
              }
              r.handleYearNavigation(h, un(r.props.preSelection, m));
              break;
            }
          }
        p && p(i);
      }, r.getYearClassNames = function(i) {
        var o = r.props, a = o.date, s = o.minDate, l = o.maxDate, u = o.selected, c = o.excludeDates, d = o.includeDates, p = o.filterDate, f = o.yearClassName;
        return it("react-datepicker__year-text", "react-datepicker__year-".concat(i), a ? f == null ? void 0 : f(Zt(a, i)) : void 0, {
          "react-datepicker__year-text--selected": u ? i === de(u) : void 0,
          "react-datepicker__year-text--disabled": (s || l || c || d || p) && Hl(i, r.props),
          "react-datepicker__year-text--keyboard-selected": r.isKeyboardSelected(i),
          "react-datepicker__year-text--range-start": r.isRangeStart(i),
          "react-datepicker__year-text--range-end": r.isRangeEnd(i),
          "react-datepicker__year-text--in-range": r.isInRange(i),
          "react-datepicker__year-text--in-selecting-range": r.isInSelectingRange(i),
          "react-datepicker__year-text--selecting-range-start": r.isSelectingRangeStart(i),
          "react-datepicker__year-text--selecting-range-end": r.isSelectingRangeEnd(i),
          "react-datepicker__year-text--today": r.isCurrentYear(i)
        });
      }, r.getYearTabIndex = function(i) {
        if (r.props.disabledKeyboardNavigation || r.props.preSelection == null)
          return "-1";
        var o = de(r.props.preSelection);
        return i === o ? "0" : "-1";
      }, r.getYearContainerClassNames = function() {
        var i = r.props, o = i.selectingDate, a = i.selectsStart, s = i.selectsEnd, l = i.selectsRange;
        return it("react-datepicker__year", {
          "react-datepicker__year--selecting-range": o && (a || s || l)
        });
      }, r.getYearContent = function(i) {
        return r.props.renderYearContent ? r.props.renderYearContent(i) : i;
      }, r;
    }
    return n.prototype.render = function() {
      var t = this, r = [], i = this.props, o = i.date, a = i.yearItemNumber, s = i.onYearMouseEnter, l = i.onYearMouseLeave;
      if (o === void 0)
        return null;
      for (var u = Rn(o, a), c = u.startPeriod, d = u.endPeriod, p = function(h) {
        r.push(C.createElement("div", { ref: f.YEAR_REFS[h - c], onClick: function(g) {
          t.onYearClick(g, h);
        }, onKeyDown: function(g) {
          Lh(g) && (g.preventDefault(), g.key = Y.Enter), t.onYearKeyDown(g, h);
        }, tabIndex: Number(f.getYearTabIndex(h)), className: f.getYearClassNames(h), onMouseEnter: f.props.usePointerEvent ? void 0 : function(g) {
          return s(g, h);
        }, onPointerEnter: f.props.usePointerEvent ? function(g) {
          return s(g, h);
        } : void 0, onMouseLeave: f.props.usePointerEvent ? void 0 : function(g) {
          return l(g, h);
        }, onPointerLeave: f.props.usePointerEvent ? function(g) {
          return l(g, h);
        } : void 0, key: h, "aria-current": f.isCurrentYear(h) ? "date" : void 0 }, f.getYearContent(h)));
      }, f = this, m = c; m <= d; m++)
        p(m);
      return C.createElement(
        "div",
        { className: this.getYearContainerClassNames() },
        C.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: this.props.usePointerEvent ? void 0 : this.props.clearSelectingDate, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, r)
      );
    }, n;
  }(tt)
);
function dD(e, n, t, r) {
  for (var i = [], o = 0; o < 2 * n + 1; o++) {
    var a = e + n - o, s = !0;
    t && (s = de(t) <= a), r && s && (s = de(r) >= a), s && i.push(a);
  }
  return i;
}
var fD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      r.renderOptions = function() {
        var s = r.props.year, l = r.state.yearsList.map(function(d) {
          return C.createElement(
            "div",
            { className: s === d ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: d, onClick: r.onChange.bind(r, d), "aria-selected": s === d ? "true" : void 0 },
            s === d ? C.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            d
          );
        }), u = r.props.minDate ? de(r.props.minDate) : null, c = r.props.maxDate ? de(r.props.maxDate) : null;
        return (!c || !r.state.yearsList.find(function(d) {
          return d === c;
        })) && l.unshift(C.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "upcoming", onClick: r.incrementYears },
          C.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
        )), (!u || !r.state.yearsList.find(function(d) {
          return d === u;
        })) && l.push(C.createElement(
          "div",
          { className: "react-datepicker__year-option", key: "previous", onClick: r.decrementYears },
          C.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
        )), l;
      }, r.onChange = function(s) {
        r.props.onChange(s);
      }, r.handleClickOutside = function() {
        r.props.onCancel();
      }, r.shiftYears = function(s) {
        var l = r.state.yearsList.map(function(u) {
          return u + s;
        });
        r.setState({
          yearsList: l
        });
      }, r.incrementYears = function() {
        return r.shiftYears(1);
      }, r.decrementYears = function() {
        return r.shiftYears(-1);
      };
      var i = t.yearDropdownItemNumber, o = t.scrollableYearDropdown, a = i || (o ? 10 : 5);
      return r.state = {
        yearsList: dD(r.props.year, a, r.props.minDate, r.props.maxDate)
      }, r.dropdownRef = St(), r;
    }
    return n.prototype.componentDidMount = function() {
      var t = this.dropdownRef.current;
      if (t) {
        var r = t.children ? Array.from(t.children) : null, i = r ? r.find(function(o) {
          return o.ariaSelected;
        }) : null;
        t.scrollTop = i && i instanceof HTMLElement ? i.offsetTop + (i.clientHeight - t.clientHeight) / 2 : (t.scrollHeight - t.clientHeight) / 2;
      }
    }, n.prototype.render = function() {
      var t = it({
        "react-datepicker__year-dropdown": !0,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return C.createElement("div", { className: t, ref: this.dropdownRef }, this.renderOptions());
    }, n;
  }(tt)
), pD = us(fD), mD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      var t = e !== null && e.apply(this, arguments) || this;
      return t.state = {
        dropdownVisible: !1
      }, t.renderSelectOptions = function() {
        for (var r = t.props.minDate ? de(t.props.minDate) : 1900, i = t.props.maxDate ? de(t.props.maxDate) : 2100, o = [], a = r; a <= i; a++)
          o.push(C.createElement("option", { key: a, value: a }, a));
        return o;
      }, t.onSelectChange = function(r) {
        t.onChange(parseInt(r.target.value));
      }, t.renderSelectMode = function() {
        return C.createElement("select", { value: t.props.year, className: "react-datepicker__year-select", onChange: t.onSelectChange }, t.renderSelectOptions());
      }, t.renderReadView = function(r) {
        return C.createElement(
          "div",
          { key: "read", style: { visibility: r ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(i) {
            return t.toggleDropdown(i);
          } },
          C.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          C.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, t.props.year)
        );
      }, t.renderDropdown = function() {
        return C.createElement(pD, we({ key: "dropdown" }, t.props, { onChange: t.onChange, onCancel: t.toggleDropdown }));
      }, t.renderScrollMode = function() {
        var r = t.state.dropdownVisible, i = [t.renderReadView(!r)];
        return r && i.unshift(t.renderDropdown()), i;
      }, t.onChange = function(r) {
        t.toggleDropdown(), r !== t.props.year && t.props.onChange(r);
      }, t.toggleDropdown = function(r) {
        t.setState({
          dropdownVisible: !t.state.dropdownVisible
        }, function() {
          t.props.adjustDateOnChange && t.handleYearChange(t.props.date, r);
        });
      }, t.handleYearChange = function(r, i) {
        t.onSelect(r, i), t.setOpen();
      }, t.onSelect = function(r, i) {
        t.props.onSelect && t.props.onSelect(r, i);
      }, t.setOpen = function() {
        t.props.setOpen && t.props.setOpen(!0);
      }, t;
    }
    return n.prototype.render = function() {
      var t;
      switch (this.props.dropdownMode) {
        case "scroll":
          t = this.renderScrollMode();
          break;
        case "select":
          t = this.renderSelectMode();
          break;
      }
      return C.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, t);
    }, n;
  }(tt)
), hD = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
], gD = function(e) {
  var n = (e.className || "").split(/\s+/);
  return hD.some(function(t) {
    return n.indexOf(t) >= 0;
  });
}, vD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.monthContainer = void 0, r.handleClickOutside = function(i) {
        r.props.onClickOutside(i);
      }, r.setClickOutsideRef = function() {
        return r.containerRef.current;
      }, r.handleDropdownFocus = function(i) {
        var o, a;
        gD(i.target) && ((a = (o = r.props).onDropdownFocus) === null || a === void 0 || a.call(o, i));
      }, r.getDateInView = function() {
        var i = r.props, o = i.preSelection, a = i.selected, s = i.openToDate, l = Nh(r.props), u = _h(r.props), c = Ae(), d = s || a || o;
        return d || (l && cr(c, l) ? l : u && Gn(c, u) ? u : c);
      }, r.increaseMonth = function() {
        r.setState(function(i) {
          var o = i.date;
          return {
            date: Ht(o, 1)
          };
        }, function() {
          return r.handleMonthChange(r.state.date);
        });
      }, r.decreaseMonth = function() {
        r.setState(function(i) {
          var o = i.date;
          return {
            date: Nr(o, 1)
          };
        }, function() {
          return r.handleMonthChange(r.state.date);
        });
      }, r.handleDayClick = function(i, o, a) {
        r.props.onSelect(i, o, a), r.props.setPreSelection && r.props.setPreSelection(i);
      }, r.handleDayMouseEnter = function(i) {
        r.setState({ selectingDate: i }), r.props.onDayMouseEnter && r.props.onDayMouseEnter(i);
      }, r.handleMonthMouseLeave = function() {
        r.setState({ selectingDate: void 0 }), r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
      }, r.handleYearMouseEnter = function(i, o) {
        r.setState({ selectingDate: Zt(Ae(), o) }), r.props.onYearMouseEnter && r.props.onYearMouseEnter(i, o);
      }, r.handleYearMouseLeave = function(i, o) {
        r.props.onYearMouseLeave && r.props.onYearMouseLeave(i, o);
      }, r.handleYearChange = function(i) {
        r.props.onYearChange && (r.props.onYearChange(i), r.setState({ isRenderAriaLiveMessage: !0 })), r.props.adjustDateOnChange && (r.props.onSelect && r.props.onSelect(i), r.props.setOpen && r.props.setOpen(!0)), r.props.setPreSelection && r.props.setPreSelection(i);
      }, r.handleMonthChange = function(i) {
        r.handleCustomMonthChange(i), r.props.adjustDateOnChange && (r.props.onSelect && r.props.onSelect(i), r.props.setOpen && r.props.setOpen(!0)), r.props.setPreSelection && r.props.setPreSelection(i);
      }, r.handleCustomMonthChange = function(i) {
        r.props.onMonthChange && (r.props.onMonthChange(i), r.setState({ isRenderAriaLiveMessage: !0 }));
      }, r.handleMonthYearChange = function(i) {
        r.handleYearChange(i), r.handleMonthChange(i);
      }, r.changeYear = function(i) {
        r.setState(function(o) {
          var a = o.date;
          return {
            date: Zt(a, Number(i))
          };
        }, function() {
          return r.handleYearChange(r.state.date);
        });
      }, r.changeMonth = function(i) {
        r.setState(function(o) {
          var a = o.date;
          return {
            date: yt(a, Number(i))
          };
        }, function() {
          return r.handleMonthChange(r.state.date);
        });
      }, r.changeMonthYear = function(i) {
        r.setState(function(o) {
          var a = o.date;
          return {
            date: Zt(yt(a, pt(i)), de(i))
          };
        }, function() {
          return r.handleMonthYearChange(r.state.date);
        });
      }, r.header = function(i) {
        i === void 0 && (i = r.state.date);
        var o = Fn(i, r.props.locale, r.props.calendarStartDay), a = [];
        return r.props.showWeekNumbers && a.push(C.createElement("div", { key: "W", className: "react-datepicker__day-name" }, r.props.weekLabel || "#")), a.concat([0, 1, 2, 3, 4, 5, 6].map(function(s) {
          var l = Hn(o, s), u = r.formatWeekday(l, r.props.locale), c = r.props.weekDayClassName ? r.props.weekDayClassName(l) : void 0;
          return C.createElement("div", { key: s, "aria-label": Ge(l, "EEEE", r.props.locale), className: it("react-datepicker__day-name", c) }, u);
        }));
      }, r.formatWeekday = function(i, o) {
        return r.props.formatWeekDay ? _E(i, r.props.formatWeekDay, o) : r.props.useWeekdaysShort ? VE(i, o) : LE(i, o);
      }, r.decreaseYear = function() {
        r.setState(function(i) {
          var o, a = i.date;
          return {
            date: _r(a, r.props.showYearPicker ? (o = r.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return r.handleYearChange(r.state.date);
        });
      }, r.clearSelectingDate = function() {
        r.setState({ selectingDate: void 0 });
      }, r.renderPreviousButton = function() {
        var i;
        if (!r.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case r.props.showMonthYearPicker:
              o = Nd(r.state.date, r.props);
              break;
            case r.props.showYearPicker:
              o = BE(r.state.date, r.props);
              break;
            case r.props.showQuarterYearPicker:
              o = $E(r.state.date, r.props);
              break;
            default:
              o = Pd(r.state.date, r.props);
              break;
          }
          if (!(!((i = r.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : n.defaultProps.forceShowMonthNavigation) && !r.props.showDisabledMonthNavigation && o || r.props.showTimeSelectOnly)) {
            var a = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--previous"
            ], s = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--previous"
            ], l = r.decreaseMonth;
            (r.props.showMonthYearPicker || r.props.showQuarterYearPicker || r.props.showYearPicker) && (l = r.decreaseYear), o && r.props.showDisabledMonthNavigation && (s.push("react-datepicker__navigation--previous--disabled"), l = void 0);
            var u = r.props.showMonthYearPicker || r.props.showQuarterYearPicker || r.props.showYearPicker, c = r.props, d = c.previousMonthButtonLabel, p = d === void 0 ? n.defaultProps.previousMonthButtonLabel : d, f = c.previousYearButtonLabel, m = f === void 0 ? n.defaultProps.previousYearButtonLabel : f, h = r.props, g = h.previousMonthAriaLabel, v = g === void 0 ? typeof p == "string" ? p : "Previous Month" : g, y = h.previousYearAriaLabel, b = y === void 0 ? typeof m == "string" ? m : "Previous Year" : y;
            return C.createElement(
              "button",
              { type: "button", className: s.join(" "), onClick: l, onKeyDown: r.props.handleOnKeyDown, "aria-label": u ? b : v },
              C.createElement("span", { className: a.join(" ") }, u ? m : p)
            );
          }
        }
      }, r.increaseYear = function() {
        r.setState(function(i) {
          var o, a = i.date;
          return {
            date: un(a, r.props.showYearPicker ? (o = r.props.yearItemNumber) !== null && o !== void 0 ? o : n.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return r.handleYearChange(r.state.date);
        });
      }, r.renderNextButton = function() {
        var i;
        if (!r.props.renderCustomHeader) {
          var o;
          switch (!0) {
            case r.props.showMonthYearPicker:
              o = _d(r.state.date, r.props);
              break;
            case r.props.showYearPicker:
              o = YE(r.state.date, r.props);
              break;
            case r.props.showQuarterYearPicker:
              o = HE(r.state.date, r.props);
              break;
            default:
              o = Fd(r.state.date, r.props);
              break;
          }
          if (!(!((i = r.props.forceShowMonthNavigation) !== null && i !== void 0 ? i : n.defaultProps.forceShowMonthNavigation) && !r.props.showDisabledMonthNavigation && o || r.props.showTimeSelectOnly)) {
            var a = [
              "react-datepicker__navigation",
              "react-datepicker__navigation--next"
            ], s = [
              "react-datepicker__navigation-icon",
              "react-datepicker__navigation-icon--next"
            ];
            r.props.showTimeSelect && a.push("react-datepicker__navigation--next--with-time"), r.props.todayButton && a.push("react-datepicker__navigation--next--with-today-button");
            var l = r.increaseMonth;
            (r.props.showMonthYearPicker || r.props.showQuarterYearPicker || r.props.showYearPicker) && (l = r.increaseYear), o && r.props.showDisabledMonthNavigation && (a.push("react-datepicker__navigation--next--disabled"), l = void 0);
            var u = r.props.showMonthYearPicker || r.props.showQuarterYearPicker || r.props.showYearPicker, c = r.props, d = c.nextMonthButtonLabel, p = d === void 0 ? n.defaultProps.nextMonthButtonLabel : d, f = c.nextYearButtonLabel, m = f === void 0 ? n.defaultProps.nextYearButtonLabel : f, h = r.props, g = h.nextMonthAriaLabel, v = g === void 0 ? typeof p == "string" ? p : "Next Month" : g, y = h.nextYearAriaLabel, b = y === void 0 ? typeof m == "string" ? m : "Next Year" : y;
            return C.createElement(
              "button",
              { type: "button", className: a.join(" "), onClick: l, onKeyDown: r.props.handleOnKeyDown, "aria-label": u ? b : v },
              C.createElement("span", { className: s.join(" ") }, u ? m : p)
            );
          }
        }
      }, r.renderCurrentMonth = function(i) {
        i === void 0 && (i = r.state.date);
        var o = ["react-datepicker__current-month"];
        return r.props.showYearDropdown && o.push("react-datepicker__current-month--hasYearDropdown"), r.props.showMonthDropdown && o.push("react-datepicker__current-month--hasMonthDropdown"), r.props.showMonthYearDropdown && o.push("react-datepicker__current-month--hasMonthYearDropdown"), C.createElement("h2", { className: o.join(" ") }, Ge(i, r.props.dateFormat, r.props.locale));
      }, r.renderYearDropdown = function(i) {
        if (i === void 0 && (i = !1), !(!r.props.showYearDropdown || i))
          return C.createElement(mD, we({}, n.defaultProps, r.props, { date: r.state.date, onChange: r.changeYear, year: de(r.state.date) }));
      }, r.renderMonthDropdown = function(i) {
        if (i === void 0 && (i = !1), !(!r.props.showMonthDropdown || i))
          return C.createElement(iD, we({}, n.defaultProps, r.props, { month: pt(r.state.date), onChange: r.changeMonth }));
      }, r.renderMonthYearDropdown = function(i) {
        if (i === void 0 && (i = !1), !(!r.props.showMonthYearDropdown || i))
          return C.createElement(lD, we({}, n.defaultProps, r.props, { date: r.state.date, onChange: r.changeMonthYear }));
      }, r.handleTodayButtonClick = function(i) {
        r.props.onSelect(Md(), i), r.props.setPreSelection && r.props.setPreSelection(Md());
      }, r.renderTodayButton = function() {
        if (!(!r.props.todayButton || r.props.showTimeSelectOnly))
          return C.createElement("div", { className: "react-datepicker__today-button", onClick: r.handleTodayButtonClick }, r.props.todayButton);
      }, r.renderDefaultHeader = function(i) {
        var o = i.monthDate, a = i.i;
        return C.createElement(
          "div",
          { className: "react-datepicker__header ".concat(r.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          r.renderCurrentMonth(o),
          C.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(r.props.dropdownMode), onFocus: r.handleDropdownFocus },
            r.renderMonthDropdown(a !== 0),
            r.renderMonthYearDropdown(a !== 0),
            r.renderYearDropdown(a !== 0)
          ),
          C.createElement("div", { className: "react-datepicker__day-names" }, r.header(o))
        );
      }, r.renderCustomHeader = function(i) {
        var o, a, s = i.monthDate, l = i.i;
        if (r.props.showTimeSelect && !r.state.monthContainer || r.props.showTimeSelectOnly)
          return null;
        var u = Pd(r.state.date, r.props), c = Fd(r.state.date, r.props), d = Nd(r.state.date, r.props), p = _d(r.state.date, r.props), f = !r.props.showMonthYearPicker && !r.props.showQuarterYearPicker && !r.props.showYearPicker;
        return C.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: r.props.onDropdownFocus },
          (a = (o = r.props).renderCustomHeader) === null || a === void 0 ? void 0 : a.call(o, we(we({}, r.state), { customHeaderCount: l, monthDate: s, changeMonth: r.changeMonth, changeYear: r.changeYear, decreaseMonth: r.decreaseMonth, increaseMonth: r.increaseMonth, decreaseYear: r.decreaseYear, increaseYear: r.increaseYear, prevMonthButtonDisabled: u, nextMonthButtonDisabled: c, prevYearButtonDisabled: d, nextYearButtonDisabled: p })),
          f && C.createElement("div", { className: "react-datepicker__day-names" }, r.header(s))
        );
      }, r.renderYearHeader = function(i) {
        var o = i.monthDate, a = r.props, s = a.showYearPicker, l = a.yearItemNumber, u = l === void 0 ? n.defaultProps.yearItemNumber : l, c = Rn(o, u), d = c.startPeriod, p = c.endPeriod;
        return C.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, s ? "".concat(d, " - ").concat(p) : de(o));
      }, r.renderHeader = function(i) {
        var o = i.monthDate, a = i.i, s = a === void 0 ? 0 : a, l = { monthDate: o, i: s };
        switch (!0) {
          case r.props.renderCustomHeader !== void 0:
            return r.renderCustomHeader(l);
          case (r.props.showMonthYearPicker || r.props.showQuarterYearPicker || r.props.showYearPicker):
            return r.renderYearHeader(l);
          default:
            return r.renderDefaultHeader(l);
        }
      }, r.renderMonths = function() {
        var i, o;
        if (!(r.props.showTimeSelectOnly || r.props.showYearPicker)) {
          for (var a = [], s = (i = r.props.monthsShown) !== null && i !== void 0 ? i : n.defaultProps.monthsShown, l = r.props.showPreviousMonths ? s - 1 : 0, u = r.props.showMonthYearPicker || r.props.showQuarterYearPicker ? un(r.state.date, l) : Nr(r.state.date, l), c = (o = r.props.monthSelectedIn) !== null && o !== void 0 ? o : l, d = 0; d < s; ++d) {
            var p = d - c + l, f = r.props.showMonthYearPicker || r.props.showQuarterYearPicker ? un(u, p) : Ht(u, p), m = "month-".concat(d), h = d < s - 1, g = d > 0;
            a.push(C.createElement(
              "div",
              { key: m, ref: function(v) {
                r.monthContainer = v ?? void 0;
              }, className: "react-datepicker__month-container" },
              r.renderHeader({ monthDate: f, i: d }),
              C.createElement(tD, we({}, n.defaultProps, r.props, { ariaLabelPrefix: r.props.monthAriaLabelPrefix, day: f, onDayClick: r.handleDayClick, handleOnKeyDown: r.props.handleOnDayKeyDown, handleOnMonthKeyDown: r.props.handleOnKeyDown, onDayMouseEnter: r.handleDayMouseEnter, onMouseLeave: r.handleMonthMouseLeave, orderInDisplay: d, selectingDate: r.state.selectingDate, monthShowsDuplicateDaysEnd: h, monthShowsDuplicateDaysStart: g }))
            ));
          }
          return a;
        }
      }, r.renderYears = function() {
        if (!r.props.showTimeSelectOnly && r.props.showYearPicker)
          return C.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            r.renderHeader({ monthDate: r.state.date }),
            C.createElement(cD, we({}, n.defaultProps, r.props, { selectingDate: r.state.selectingDate, date: r.state.date, onDayClick: r.handleDayClick, clearSelectingDate: r.clearSelectingDate, onYearMouseEnter: r.handleYearMouseEnter, onYearMouseLeave: r.handleYearMouseLeave }))
          );
      }, r.renderTimeSection = function() {
        if (r.props.showTimeSelect && (r.state.monthContainer || r.props.showTimeSelectOnly))
          return C.createElement(uD, we({}, n.defaultProps, r.props, { onChange: r.props.onTimeChange, format: r.props.timeFormat, intervals: r.props.timeIntervals, monthRef: r.state.monthContainer }));
      }, r.renderInputTimeSection = function() {
        var i = r.props.selected ? new Date(r.props.selected) : void 0, o = i && sn(i) && !!r.props.selected, a = o ? "".concat(Vd(i.getHours()), ":").concat(Vd(i.getMinutes())) : "";
        if (r.props.showTimeInput)
          return C.createElement(JE, we({}, n.defaultProps, r.props, { date: i, timeString: a, onChange: r.props.onTimeChange }));
      }, r.renderAriaLiveRegion = function() {
        var i, o = Rn(r.state.date, (i = r.props.yearItemNumber) !== null && i !== void 0 ? i : n.defaultProps.yearItemNumber), a = o.startPeriod, s = o.endPeriod, l;
        return r.props.showYearPicker ? l = "".concat(a, " - ").concat(s) : r.props.showMonthYearPicker || r.props.showQuarterYearPicker ? l = de(r.state.date) : l = "".concat(rc(pt(r.state.date), r.props.locale), " ").concat(de(r.state.date)), C.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, r.state.isRenderAriaLiveMessage && l);
      }, r.renderChildren = function() {
        if (r.props.children)
          return C.createElement("div", { className: "react-datepicker__children-container" }, r.props.children);
      }, r.containerRef = St(), r.state = {
        date: r.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: !1
      }, r;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: !1,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: eo
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      var t = this;
      this.props.showTimeSelect && (this.assignMonthContainer = function() {
        t.setState({ monthContainer: t.monthContainer });
      }());
    }, n.prototype.componentDidUpdate = function(t) {
      var r = this;
      if (this.props.preSelection && (!ge(this.props.preSelection, t.preSelection) || this.props.monthSelectedIn !== t.monthSelectedIn)) {
        var i = !dt(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return i && r.handleCustomMonthChange(r.state.date);
        });
      } else this.props.openToDate && !ge(this.props.openToDate, t.openToDate) && this.setState({
        date: this.props.openToDate
      });
    }, n.prototype.render = function() {
      var t = this.props.container || ME;
      return C.createElement(
        "div",
        { style: { display: "contents" }, ref: this.containerRef },
        C.createElement(
          t,
          { className: it("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
          this.renderAriaLiveRegion(),
          this.renderPreviousButton(),
          this.renderNextButton(),
          this.renderMonths(),
          this.renderYears(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.renderInputTimeSection(),
          this.renderChildren()
        )
      );
    }, n;
  }(tt)
), bD = function(e) {
  var n = e.icon, t = e.className, r = t === void 0 ? "" : t, i = e.onClick, o = "react-datepicker__calendar-icon";
  return typeof n == "string" ? C.createElement("i", { className: "".concat(o, " ").concat(n, " ").concat(r), "aria-hidden": "true", onClick: i }) : C.isValidElement(n) ? C.cloneElement(n, {
    className: "".concat(n.props.className || "", " ").concat(o, " ").concat(r),
    onClick: function(a) {
      typeof n.props.onClick == "function" && n.props.onClick(a), typeof i == "function" && i(a);
    }
  }) : C.createElement(
    "svg",
    { className: "".concat(o, " ").concat(r), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick: i },
    C.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
}, Vh = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.portalRoot = null, r.el = document.createElement("div"), r;
    }
    return n.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId), this.portalRoot || (this.portalRoot = document.createElement("div"), this.portalRoot.setAttribute("id", this.props.portalId), (this.props.portalHost || document.body).appendChild(this.portalRoot)), this.portalRoot.appendChild(this.el);
    }, n.prototype.componentWillUnmount = function() {
      this.portalRoot && this.portalRoot.removeChild(this.el);
    }, n.prototype.render = function() {
      return Rv.createPortal(this.props.children, this.el);
    }, n;
  }(tt)
), yD = "[tabindex], a, button, input, select, textarea", wD = function(e) {
  return (e instanceof HTMLAnchorElement || !e.disabled) && e.tabIndex !== -1;
}, Wh = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.getTabChildren = function() {
        var i;
        return Array.prototype.slice.call((i = r.tabLoopRef.current) === null || i === void 0 ? void 0 : i.querySelectorAll(yD), 1, -1).filter(wD);
      }, r.handleFocusStart = function() {
        var i = r.getTabChildren();
        i && i.length > 1 && i[i.length - 1].focus();
      }, r.handleFocusEnd = function() {
        var i = r.getTabChildren();
        i && i.length > 1 && i[0].focus();
      }, r.tabLoopRef = St(), r;
    }
    return n.prototype.render = function() {
      var t;
      return ((t = this.props.enableTabLoop) !== null && t !== void 0 ? t : n.defaultProps.enableTabLoop) ? C.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        C.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        C.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      ) : this.props.children;
    }, n.defaultProps = {
      enableTabLoop: !0
    }, n;
  }(tt)
);
function CD(e) {
  var n = function(t) {
    var r, i = typeof t.hidePopper == "boolean" ? t.hidePopper : !0, o = H(null), a = qp(we({ open: !i, whileElementsMounted: bu, placement: t.popperPlacement, middleware: qt([
      zp({ padding: 15 }),
      yu(10),
      Bb({ element: o })
    ], (r = t.popperModifiers) !== null && r !== void 0 ? r : [], !0) }, t.popperProps)), s = we(we({}, t), { hidePopper: i, popperProps: we(we({}, a), { arrowRef: o }) });
    return C.createElement(e, we({}, s));
  };
  return n;
}
var ID = (
  /** @class */
  function(e) {
    ot(n, e);
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          hidePopper: !0
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.render = function() {
      var t = this.props, r = t.className, i = t.wrapperClassName, o = t.hidePopper, a = o === void 0 ? n.defaultProps.hidePopper : o, s = t.popperComponent, l = t.targetComponent, u = t.enableTabLoop, c = t.popperOnKeyDown, d = t.portalId, p = t.portalHost, f = t.popperProps, m = t.showArrow, h = void 0;
      if (!a) {
        var g = it("react-datepicker-popper", r);
        h = C.createElement(
          Wh,
          { enableTabLoop: u },
          C.createElement(
            "div",
            { ref: f.refs.setFloating, style: f.floatingStyles, className: g, "data-placement": f.placement, onKeyDown: c },
            s,
            m && C.createElement(Jb, { ref: f.arrowRef, context: f.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      this.props.popperContainer && (h = ou(this.props.popperContainer, {}, h)), d && !a && (h = C.createElement(Vh, { portalId: d, portalHost: p }, h));
      var v = it("react-datepicker-wrapper", i);
      return C.createElement(
        C.Fragment,
        null,
        C.createElement("div", { ref: f.refs.setReference, className: v }, l),
        h
      );
    }, n;
  }(tt)
), xD = CD(ID), Yd = "react-datepicker-ignore-onclickoutside", SD = us(vD);
function ED(e, n) {
  return e && n ? pt(e) !== pt(n) || de(e) !== de(n) : e !== n;
}
var el = "Date input not valid.", DD = (
  /** @class */
  function(e) {
    ot(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      return r.calendar = null, r.input = null, r.getPreSelection = function() {
        return r.props.openToDate ? r.props.openToDate : r.props.selectsEnd && r.props.startDate ? r.props.startDate : r.props.selectsStart && r.props.endDate ? r.props.endDate : Ae();
      }, r.modifyHolidays = function() {
        var i;
        return (i = r.props.holidays) === null || i === void 0 ? void 0 : i.reduce(function(o, a) {
          var s = new Date(a.date);
          return sn(s) ? qt(qt([], o, !0), [we(we({}, a), { date: s })], !1) : o;
        }, []);
      }, r.calcInitialState = function() {
        var i, o = r.getPreSelection(), a = Nh(r.props), s = _h(r.props), l = a && cr(o, Vo(a)) ? a : s && Gn(o, Od(s)) ? s : o;
        return {
          open: r.props.startOpen || !1,
          preventFocus: !1,
          inputValue: null,
          preSelection: (i = r.props.selectsRange ? r.props.startDate : r.props.selected) !== null && i !== void 0 ? i : l,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: Ld(r.props.highlightDates),
          focused: !1,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: !1,
          isRenderAriaLiveMessage: !1,
          wasHidden: !1
        };
      }, r.resetHiddenStatus = function() {
        r.setState(we(we({}, r.state), { wasHidden: !1 }));
      }, r.setHiddenStatus = function() {
        r.setState(we(we({}, r.state), { wasHidden: !0 }));
      }, r.setHiddenStateOnVisibilityHidden = function() {
        document.visibilityState === "hidden" && r.setHiddenStatus();
      }, r.clearPreventFocusTimeout = function() {
        r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
      }, r.setFocus = function() {
        r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
      }, r.setBlur = function() {
        r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
      }, r.setOpen = function(i, o) {
        o === void 0 && (o = !1), r.setState({
          open: i,
          preSelection: i && r.state.open ? r.state.preSelection : r.calcInitialState().preSelection,
          lastPreSelectChange: tl
        }, function() {
          i || r.setState(function(a) {
            return {
              focused: o ? a.focused : !1
            };
          }, function() {
            !o && r.setBlur(), r.setState({ inputValue: null });
          });
        });
      }, r.inputOk = function() {
        return cn(r.state.preSelection);
      }, r.isCalendarOpen = function() {
        return r.props.open === void 0 ? r.state.open && !r.props.disabled && !r.props.readOnly : r.props.open;
      }, r.handleFocus = function(i) {
        var o, a, s = r.state.wasHidden, l = s ? r.state.open : !0;
        s && r.resetHiddenStatus(), !r.state.preventFocus && l && ((a = (o = r.props).onFocus) === null || a === void 0 || a.call(o, i), !r.props.preventOpenOnFocus && !r.props.readOnly && r.setOpen(!0)), r.setState({ focused: !0 });
      }, r.sendFocusBackToInput = function() {
        r.preventFocusTimeout && r.clearPreventFocusTimeout(), r.setState({ preventFocus: !0 }, function() {
          r.preventFocusTimeout = setTimeout(function() {
            r.setFocus(), r.setState({ preventFocus: !1 });
          });
        });
      }, r.cancelFocusInput = function() {
        clearTimeout(r.inputFocusTimeout), r.inputFocusTimeout = void 0;
      }, r.deferFocusInput = function() {
        r.cancelFocusInput(), r.inputFocusTimeout = setTimeout(function() {
          return r.setFocus();
        }, 1);
      }, r.handleDropdownFocus = function() {
        r.cancelFocusInput();
      }, r.handleBlur = function(i) {
        var o, a;
        (!r.state.open || r.props.withPortal || r.props.showTimeInput) && ((a = (o = r.props).onBlur) === null || a === void 0 || a.call(o, i)), r.setState({ focused: !1 });
      }, r.handleCalendarClickOutside = function(i) {
        var o, a;
        r.props.inline || r.setOpen(!1), (a = (o = r.props).onClickOutside) === null || a === void 0 || a.call(o, i), r.props.withPortal && i.preventDefault();
      }, r.handleChange = function() {
        for (var i = [], o = 0; o < arguments.length; o++)
          i[o] = arguments[o];
        var a = i[0];
        if (!(r.props.onChangeRaw && (r.props.onChangeRaw.apply(r, i), !a || typeof a.isDefaultPrevented != "function" || a.isDefaultPrevented()))) {
          r.setState({
            inputValue: (a == null ? void 0 : a.target) instanceof HTMLInputElement ? a.target.value : null,
            lastPreSelectChange: TD
          });
          var s = r.props, l = s.dateFormat, u = l === void 0 ? n.defaultProps.dateFormat : l, c = s.strictParsing, d = c === void 0 ? n.defaultProps.strictParsing : c, p = kE((a == null ? void 0 : a.target) instanceof HTMLInputElement ? a.target.value : "", u, r.props.locale, d, r.props.minDate);
          r.props.showTimeSelectOnly && r.props.selected && p && !ge(p, r.props.selected) && (p = DE(r.props.selected, {
            hours: en(p),
            minutes: tn(p),
            seconds: dn(p)
          })), (p || !((a == null ? void 0 : a.target) instanceof HTMLInputElement) || !(a != null && a.target.value)) && r.setSelected(p, a, !0);
        }
      }, r.handleSelect = function(i, o, a) {
        if (r.props.shouldCloseOnSelect && !r.props.showTimeSelect && r.sendFocusBackToInput(), r.props.onChangeRaw && r.props.onChangeRaw(o), r.setSelected(i, o, !1, a), r.props.showDateSelect && r.setState({ isRenderAriaLiveMessage: !0 }), !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
          r.setPreSelection(i);
        else if (!r.props.inline) {
          r.props.selectsRange || r.setOpen(!1);
          var s = r.props, l = s.startDate, u = s.endDate;
          l && !u && (r.props.swapRange || !$d(i, l)) && r.setOpen(!1);
        }
      }, r.setSelected = function(i, o, a, s) {
        var l, u = i;
        if (r.props.showYearPicker) {
          if (u !== null && Hl(de(u), r.props))
            return;
        } else if (r.props.showMonthYearPicker) {
          if (u !== null && Fh(u, r.props))
            return;
        } else if (u !== null && kn(u, r.props))
          return;
        var c = r.props, d = c.onChange, p = c.selectsRange, f = c.startDate, m = c.endDate, h = c.selectsMultiple, g = c.selectedDates, v = c.minTime, y = c.swapRange;
        if (!Qn(r.props.selected, u) || r.props.allowSameDay || p || h)
          if (u !== null && (r.props.selected && (!a || !r.props.showTimeSelect && !r.props.showTimeSelectOnly && !r.props.showTimeInput) && (u = Qs(u, {
            hour: en(r.props.selected),
            minute: tn(r.props.selected),
            second: dn(r.props.selected)
          })), !a && (r.props.showTimeSelect || r.props.showTimeSelectOnly) && v && (u = Qs(u, {
            hour: v.getHours(),
            minute: v.getMinutes(),
            second: v.getSeconds()
          })), r.props.inline || r.setState({
            preSelection: u
          }), r.props.focusSelectedMonth || r.setState({ monthSelectedIn: s })), p) {
            var b = !f && !m, I = f && !m, w = f && m;
            b ? d ? d([u, null], o) : n.defaultProps.onChange : I && (u === null ? d ? d([null, null], o) : n.defaultProps.onChange : $d(u, f) ? y ? d ? d([u, f], o) : n.defaultProps.onChange : d ? d([u, null], o) : n.defaultProps.onChange : d ? d([f, u], o) : n.defaultProps.onChange), w && (d ? d([u, null], o) : n.defaultProps.onChange);
          } else if (h) {
            if (u !== null)
              if (!(g != null && g.length))
                d ? d([u], o) : n.defaultProps.onChange;
              else {
                var S = g.some(function(D) {
                  return ge(D, u);
                });
                if (S) {
                  var x = g.filter(function(D) {
                    return !ge(D, u);
                  });
                  d ? d(x, o) : n.defaultProps.onChange;
                } else
                  d ? d(qt(qt([], g, !0), [u], !1), o) : n.defaultProps.onChange;
              }
          } else
            d ? d(u, o) : n.defaultProps.onChange;
        if (!a) {
          var E = (l = r.props.onSelect) !== null && l !== void 0 ? l : n.defaultProps.onSelect;
          E(u, o), r.setState({ inputValue: null });
        }
      }, r.setPreSelection = function(i) {
        var o = cn(r.props.minDate), a = cn(r.props.maxDate), s = !0;
        if (i) {
          var l = Vo(i);
          if (o && a)
            s = fi(i, r.props.minDate, r.props.maxDate);
          else if (o) {
            var u = Vo(r.props.minDate);
            s = Gn(i, u) || Qn(l, u);
          } else if (a) {
            var c = Od(r.props.maxDate);
            s = cr(i, c) || Qn(l, c);
          }
        }
        s && r.setState({
          preSelection: i
        });
      }, r.toggleCalendar = function() {
        r.setOpen(!r.state.open);
      }, r.handleTimeChange = function(i) {
        var o;
        if (!(r.props.selectsRange || r.props.selectsMultiple)) {
          var a = r.props.selected ? r.props.selected : r.getPreSelection(), s = r.props.selected ? i : Qs(a, {
            hour: en(i),
            minute: tn(i)
          });
          r.setState({
            preSelection: s
          });
          var l = (o = r.props.onChange) !== null && o !== void 0 ? o : n.defaultProps.onChange;
          l(s), r.props.shouldCloseOnSelect && !r.props.showTimeInput && (r.sendFocusBackToInput(), r.setOpen(!1)), r.props.showTimeInput && r.setOpen(!0), (r.props.showTimeSelectOnly || r.props.showTimeSelect) && r.setState({ isRenderAriaLiveMessage: !0 }), r.setState({ inputValue: null });
        }
      }, r.onInputClick = function() {
        var i, o;
        !r.props.disabled && !r.props.readOnly && r.setOpen(!0), (o = (i = r.props).onInputClick) === null || o === void 0 || o.call(i);
      }, r.onInputKeyDown = function(i) {
        var o, a, s, l, u;
        (a = (o = r.props).onKeyDown) === null || a === void 0 || a.call(o, i);
        var c = i.key;
        if (!r.state.open && !r.props.inline && !r.props.preventOpenOnFocus) {
          (c === Y.ArrowDown || c === Y.ArrowUp || c === Y.Enter) && r.onInputClick();
          return;
        }
        if (r.state.open) {
          if (c === Y.ArrowDown || c === Y.ArrowUp) {
            i.preventDefault();
            var d = r.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : r.props.showWeekPicker && r.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : r.props.showFullMonthYearPicker || r.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]', p = ((s = r.calendar) === null || s === void 0 ? void 0 : s.componentNode) instanceof Element && r.calendar.componentNode.querySelector(d);
            p instanceof HTMLElement && p.focus({ preventScroll: !0 });
            return;
          }
          var f = Ae(r.state.preSelection);
          c === Y.Enter ? (i.preventDefault(), r.inputOk() && r.state.lastPreSelectChange === tl ? (r.handleSelect(f, i), !r.props.shouldCloseOnSelect && r.setPreSelection(f)) : r.setOpen(!1)) : c === Y.Escape ? (i.preventDefault(), r.sendFocusBackToInput(), r.setOpen(!1)) : c === Y.Tab && r.setOpen(!1), r.inputOk() || (u = (l = r.props).onInputError) === null || u === void 0 || u.call(l, { code: 1, msg: el });
        }
      }, r.onPortalKeyDown = function(i) {
        var o = i.key;
        o === Y.Escape && (i.preventDefault(), r.setState({
          preventFocus: !0
        }, function() {
          r.setOpen(!1), setTimeout(function() {
            r.setFocus(), r.setState({ preventFocus: !1 });
          });
        }));
      }, r.onDayKeyDown = function(i) {
        var o, a, s, l, u = r.props, c = u.minDate, d = u.maxDate, p = u.disabledKeyboardNavigation, f = u.showWeekPicker, m = u.shouldCloseOnSelect, h = u.locale, g = u.calendarStartDay, v = u.adjustDateOnChange, y = u.inline;
        if ((a = (o = r.props).onKeyDown) === null || a === void 0 || a.call(o, i), !p) {
          var b = i.key, I = i.shiftKey, w = Ae(r.state.preSelection), S = function(A, N) {
            var M = N;
            switch (A) {
              case Y.ArrowRight:
                M = f ? ca(N, 1) : Hn(N, 1);
                break;
              case Y.ArrowLeft:
                M = f ? Dd(N, 1) : TE(N, 1);
                break;
              case Y.ArrowUp:
                M = Dd(N, 1);
                break;
              case Y.ArrowDown:
                M = ca(N, 1);
                break;
              case Y.PageUp:
                M = I ? _r(N, 1) : Nr(N, 1);
                break;
              case Y.PageDown:
                M = I ? un(N, 1) : Ht(N, 1);
                break;
              case Y.Home:
                M = Fn(N, h, g);
                break;
              case Y.End:
                M = NE(N);
                break;
            }
            return M;
          }, x = function(A, N) {
            for (var M = 40, V = A, R = !1, G = 0, O = S(A, N); !R; ) {
              if (G >= M) {
                O = N;
                break;
              }
              c && O < c && (V = Y.ArrowRight, O = kn(c, r.props) ? S(V, O) : c), d && O > d && (V = Y.ArrowLeft, O = kn(d, r.props) ? S(V, O) : d), kn(O, r.props) ? ((V === Y.PageUp || V === Y.Home) && (V = Y.ArrowRight), (V === Y.PageDown || V === Y.End) && (V = Y.ArrowLeft), O = S(V, O)) : R = !0, G++;
            }
            return O;
          };
          if (b === Y.Enter) {
            i.preventDefault(), r.handleSelect(w, i), !m && r.setPreSelection(w);
            return;
          } else if (b === Y.Escape) {
            i.preventDefault(), r.setOpen(!1), r.inputOk() || (l = (s = r.props).onInputError) === null || l === void 0 || l.call(s, { code: 1, msg: el });
            return;
          }
          var E = null;
          switch (b) {
            case Y.ArrowLeft:
            case Y.ArrowRight:
            case Y.ArrowUp:
            case Y.ArrowDown:
            case Y.PageUp:
            case Y.PageDown:
            case Y.Home:
            case Y.End:
              E = x(b, w);
              break;
          }
          if (!E) {
            r.props.onInputError && r.props.onInputError({ code: 1, msg: el });
            return;
          }
          if (i.preventDefault(), r.setState({ lastPreSelectChange: tl }), v && r.setSelected(E), r.setPreSelection(E), y) {
            var D = pt(w), _ = pt(E), k = de(w), F = de(E);
            D !== _ || k !== F ? r.setState({ shouldFocusDayInline: !0 }) : r.setState({ shouldFocusDayInline: !1 });
          }
        }
      }, r.onPopperKeyDown = function(i) {
        var o = i.key;
        o === Y.Escape && (i.preventDefault(), r.sendFocusBackToInput());
      }, r.onClearClick = function(i) {
        i && i.preventDefault && i.preventDefault(), r.sendFocusBackToInput();
        var o = r.props, a = o.selectsRange, s = o.onChange;
        a ? s ? s([null, null], i) : n.defaultProps.onChange() : s ? s(null, i) : n.defaultProps.onChange(), r.setState({ inputValue: null });
      }, r.clear = function() {
        r.onClearClick();
      }, r.onScroll = function(i) {
        typeof r.props.closeOnScroll == "boolean" && r.props.closeOnScroll ? (i.target === document || i.target === document.documentElement || i.target === document.body) && r.setOpen(!1) : typeof r.props.closeOnScroll == "function" && r.props.closeOnScroll(i) && r.setOpen(!1);
      }, r.renderCalendar = function() {
        var i, o;
        return !r.props.inline && !r.isCalendarOpen() ? null : C.createElement(SD, we({ ref: function(a) {
          r.calendar = a;
        } }, r.props, r.state, { setOpen: r.setOpen, dateFormat: (i = r.props.dateFormatCalendar) !== null && i !== void 0 ? i : n.defaultProps.dateFormatCalendar, onSelect: r.handleSelect, onClickOutside: r.handleCalendarClickOutside, holidays: XE(r.modifyHolidays()), outsideClickIgnoreClass: Yd, onDropdownFocus: r.handleDropdownFocus, onTimeChange: r.handleTimeChange, className: r.props.calendarClassName, container: r.props.calendarContainer, handleOnKeyDown: r.props.onKeyDown, handleOnDayKeyDown: r.onDayKeyDown, setPreSelection: r.setPreSelection, dropdownMode: (o = r.props.dropdownMode) !== null && o !== void 0 ? o : n.defaultProps.dropdownMode }), r.props.children);
      }, r.renderAriaLiveRegion = function() {
        var i = r.props, o = i.dateFormat, a = o === void 0 ? n.defaultProps.dateFormat : o, s = i.locale, l = r.props.showTimeInput || r.props.showTimeSelect, u = l ? "PPPPp" : "PPPP", c;
        return r.props.selectsRange ? c = "Selected start date: ".concat(Mt(r.props.startDate, {
          dateFormat: u,
          locale: s
        }), ". ").concat(r.props.endDate ? "End date: " + Mt(r.props.endDate, {
          dateFormat: u,
          locale: s
        }) : "") : r.props.showTimeSelectOnly ? c = "Selected time: ".concat(Mt(r.props.selected, { dateFormat: a, locale: s })) : r.props.showYearPicker ? c = "Selected year: ".concat(Mt(r.props.selected, { dateFormat: "yyyy", locale: s })) : r.props.showMonthYearPicker ? c = "Selected month: ".concat(Mt(r.props.selected, { dateFormat: "MMMM yyyy", locale: s })) : r.props.showQuarterYearPicker ? c = "Selected quarter: ".concat(Mt(r.props.selected, {
          dateFormat: "yyyy, QQQ",
          locale: s
        })) : c = "Selected date: ".concat(Mt(r.props.selected, {
          dateFormat: u,
          locale: s
        })), C.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, c);
      }, r.renderDateInput = function() {
        var i, o, a, s = it(r.props.className, (i = {}, i[Yd] = r.state.open, i)), l = r.props.customInput || C.createElement("input", { type: "text" }), u = r.props.customInputRef || "ref", c = r.props, d = c.dateFormat, p = d === void 0 ? n.defaultProps.dateFormat : d, f = c.locale, m = typeof r.props.value == "string" ? r.props.value : typeof r.state.inputValue == "string" ? r.state.inputValue : r.props.selectsRange ? RE(r.props.startDate, r.props.endDate, {
          dateFormat: p,
          locale: f
        }) : r.props.selectsMultiple ? AE((a = r.props.selectedDates) !== null && a !== void 0 ? a : [], {
          dateFormat: p,
          locale: f
        }) : Mt(r.props.selected, {
          dateFormat: p,
          locale: f
        });
        return iu(l, (o = {}, o[u] = function(h) {
          r.input = h;
        }, o.value = m, o.onBlur = r.handleBlur, o.onChange = r.handleChange, o.onClick = r.onInputClick, o.onFocus = r.handleFocus, o.onKeyDown = r.onInputKeyDown, o.id = r.props.id, o.name = r.props.name, o.form = r.props.form, o.autoFocus = r.props.autoFocus, o.placeholder = r.props.placeholderText, o.disabled = r.props.disabled, o.autoComplete = r.props.autoComplete, o.className = it(l.props.className, s), o.title = r.props.title, o.readOnly = r.props.readOnly, o.required = r.props.required, o.tabIndex = r.props.tabIndex, o["aria-describedby"] = r.props.ariaDescribedBy, o["aria-invalid"] = r.props.ariaInvalid, o["aria-labelledby"] = r.props.ariaLabelledBy, o["aria-required"] = r.props.ariaRequired, o));
      }, r.renderClearButton = function() {
        var i = r.props, o = i.isClearable, a = i.disabled, s = i.selected, l = i.startDate, u = i.endDate, c = i.clearButtonTitle, d = i.clearButtonClassName, p = d === void 0 ? "" : d, f = i.ariaLabelClose, m = f === void 0 ? "Close" : f, h = i.selectedDates;
        return o && (s != null || l != null || u != null || h != null && h.length) ? C.createElement("button", { type: "button", className: it("react-datepicker__close-icon", p, { "react-datepicker__close-icon--disabled": a }), disabled: a, "aria-label": m, onClick: r.onClearClick, title: c, tabIndex: -1 }) : null;
      }, r.state = r.calcInitialState(), r.preventFocusTimeout = void 0, r;
    }
    return Object.defineProperty(n, "defaultProps", {
      get: function() {
        return {
          allowSameDay: !1,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          onChange: function() {
          },
          disabled: !1,
          disabledKeyboardNavigation: !1,
          dropdownMode: "scroll",
          onFocus: function() {
          },
          onBlur: function() {
          },
          onKeyDown: function() {
          },
          onInputClick: function() {
          },
          onSelect: function() {
          },
          onClickOutside: function() {
          },
          onMonthChange: function() {
          },
          onCalendarOpen: function() {
          },
          onCalendarClose: function() {
          },
          preventOpenOnFocus: !1,
          onYearChange: function() {
          },
          onInputError: function() {
          },
          monthsShown: 1,
          readOnly: !1,
          withPortal: !1,
          selectsDisabledDaysInRange: !1,
          shouldCloseOnSelect: !0,
          showTimeSelect: !1,
          showTimeInput: !1,
          showPreviousMonths: !1,
          showMonthYearPicker: !1,
          showFullMonthYearPicker: !1,
          showTwoColumnMonthYearPicker: !1,
          showFourColumnMonthYearPicker: !1,
          showYearPicker: !1,
          showQuarterYearPicker: !1,
          showWeekPicker: !1,
          strictParsing: !1,
          swapRange: !1,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: !0,
          yearItemNumber: eo,
          focusSelectedMonth: !1,
          showPopperArrow: !0,
          excludeScrollbar: !0,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: !1,
          usePointerEvent: !1
        };
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, !0), document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.componentDidUpdate = function(t, r) {
      var i, o, a, s;
      t.inline && ED(t.selected, this.props.selected) && this.setPreSelection(this.props.selected), this.state.monthSelectedIn !== void 0 && t.monthsShown !== this.props.monthsShown && this.setState({ monthSelectedIn: 0 }), t.highlightDates !== this.props.highlightDates && this.setState({
        highlightDates: Ld(this.props.highlightDates)
      }), !r.focused && !Qn(t.selected, this.props.selected) && this.setState({ inputValue: null }), r.open !== this.state.open && (r.open === !1 && this.state.open === !0 && ((o = (i = this.props).onCalendarOpen) === null || o === void 0 || o.call(i)), r.open === !0 && this.state.open === !1 && ((s = (a = this.props).onCalendarClose) === null || s === void 0 || s.call(a)));
    }, n.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout(), window.removeEventListener("scroll", this.onScroll, !0), document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    }, n.prototype.renderInputContainer = function() {
      var t = this.props, r = t.showIcon, i = t.icon, o = t.calendarIconClassname, a = t.calendarIconClassName, s = t.toggleCalendarOnIconClick, l = this.state.open;
      return o && console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props."), C.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(r ? " react-datepicker__view-calendar-icon" : "") },
        r && C.createElement(bD, we({ icon: i, className: it(a, !a && o, l && "react-datepicker-ignore-onclickoutside") }, s ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    }, n.prototype.render = function() {
      var t = this.renderCalendar();
      if (this.props.inline)
        return t;
      if (this.props.withPortal) {
        var r = this.state.open ? C.createElement(
          Wh,
          { enableTabLoop: this.props.enableTabLoop },
          C.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, t)
        ) : null;
        return this.state.open && this.props.portalId && (r = C.createElement(Vh, we({ portalId: this.props.portalId }, this.props), r)), C.createElement(
          "div",
          null,
          this.renderInputContainer(),
          r
        );
      }
      return C.createElement(xD, we({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: t, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    }, n;
  }(tt)
), TD = "input", tl = "navigate";
function MD(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "rect", attr: { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2" }, child: [] }, { tag: "line", attr: { x1: "16", x2: "16", y1: "2", y2: "6" }, child: [] }, { tag: "line", attr: { x1: "8", x2: "8", y1: "2", y2: "6" }, child: [] }, { tag: "line", attr: { x1: "3", x2: "21", y1: "10", y2: "10" }, child: [] }, { tag: "path", attr: { d: "M8 14h.01" }, child: [] }, { tag: "path", attr: { d: "M12 14h.01" }, child: [] }, { tag: "path", attr: { d: "M16 14h.01" }, child: [] }, { tag: "path", attr: { d: "M8 18h.01" }, child: [] }, { tag: "path", attr: { d: "M12 18h.01" }, child: [] }, { tag: "path", attr: { d: "M16 18h.01" }, child: [] }] })(e);
}
class hr extends Error {
}
class OD extends hr {
  constructor(n) {
    super(`Invalid DateTime: ${n.toMessage()}`);
  }
}
class kD extends hr {
  constructor(n) {
    super(`Invalid Interval: ${n.toMessage()}`);
  }
}
class RD extends hr {
  constructor(n) {
    super(`Invalid Duration: ${n.toMessage()}`);
  }
}
class Ir extends hr {
}
class Gh extends hr {
  constructor(n) {
    super(`Invalid unit ${n}`);
  }
}
class ht extends hr {
}
class Cn extends hr {
  constructor() {
    super("Zone is an abstract class");
  }
}
const B = "numeric", Bt = "short", It = "long", ya = {
  year: B,
  month: B,
  day: B
}, $h = {
  year: B,
  month: Bt,
  day: B
}, AD = {
  year: B,
  month: Bt,
  day: B,
  weekday: Bt
}, Hh = {
  year: B,
  month: It,
  day: B
}, Bh = {
  year: B,
  month: It,
  day: B,
  weekday: It
}, Yh = {
  hour: B,
  minute: B
}, Zh = {
  hour: B,
  minute: B,
  second: B
}, Xh = {
  hour: B,
  minute: B,
  second: B,
  timeZoneName: Bt
}, zh = {
  hour: B,
  minute: B,
  second: B,
  timeZoneName: It
}, jh = {
  hour: B,
  minute: B,
  hourCycle: "h23"
}, Uh = {
  hour: B,
  minute: B,
  second: B,
  hourCycle: "h23"
}, Jh = {
  hour: B,
  minute: B,
  second: B,
  hourCycle: "h23",
  timeZoneName: Bt
}, Qh = {
  hour: B,
  minute: B,
  second: B,
  hourCycle: "h23",
  timeZoneName: It
}, qh = {
  year: B,
  month: B,
  day: B,
  hour: B,
  minute: B
}, Kh = {
  year: B,
  month: B,
  day: B,
  hour: B,
  minute: B,
  second: B
}, eg = {
  year: B,
  month: Bt,
  day: B,
  hour: B,
  minute: B
}, tg = {
  year: B,
  month: Bt,
  day: B,
  hour: B,
  minute: B,
  second: B
}, PD = {
  year: B,
  month: Bt,
  day: B,
  weekday: Bt,
  hour: B,
  minute: B
}, ng = {
  year: B,
  month: It,
  day: B,
  hour: B,
  minute: B,
  timeZoneName: Bt
}, rg = {
  year: B,
  month: It,
  day: B,
  hour: B,
  minute: B,
  second: B,
  timeZoneName: Bt
}, ig = {
  year: B,
  month: It,
  day: B,
  weekday: It,
  hour: B,
  minute: B,
  timeZoneName: It
}, og = {
  year: B,
  month: It,
  day: B,
  weekday: It,
  hour: B,
  minute: B,
  second: B,
  timeZoneName: It
};
class no {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Cn();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Cn();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Cn();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(n, t) {
    throw new Cn();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(n, t) {
    throw new Cn();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(n) {
    throw new Cn();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(n) {
    throw new Cn();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Cn();
  }
}
let nl = null;
class ps extends no {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return nl === null && (nl = new ps()), nl;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(n, { format: t, locale: r }) {
    return mg(n, t, r);
  }
  /** @override **/
  formatOffset(n, t) {
    return Ii(this.offset(n), t);
  }
  /** @override **/
  offset(n) {
    return -new Date(n).getTimezoneOffset();
  }
  /** @override **/
  equals(n) {
    return n.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Wo = {};
function FD(e) {
  return Wo[e] || (Wo[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Wo[e];
}
const ND = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function _D(e, n) {
  const t = e.format(n).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, i, o, a, s, l, u, c] = r;
  return [a, i, o, s, l, u, c];
}
function LD(e, n) {
  const t = e.formatToParts(n), r = [];
  for (let i = 0; i < t.length; i++) {
    const { type: o, value: a } = t[i], s = ND[o];
    o === "era" ? r[s] = a : ie(s) || (r[s] = parseInt(a, 10));
  }
  return r;
}
let Co = {};
class mn extends no {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(n) {
    return Co[n] || (Co[n] = new mn(n)), Co[n];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Co = {}, Wo = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(n) {
    return this.isValidZone(n);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(n) {
    if (!n)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: n }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(n) {
    super(), this.zoneName = n, this.valid = mn.isValidZone(n);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(n, { format: t, locale: r }) {
    return mg(n, t, r, this.name);
  }
  /** @override **/
  formatOffset(n, t) {
    return Ii(this.offset(n), t);
  }
  /** @override **/
  offset(n) {
    const t = new Date(n);
    if (isNaN(t)) return NaN;
    const r = FD(this.name);
    let [i, o, a, s, l, u, c] = r.formatToParts ? LD(r, t) : _D(r, t);
    s === "BC" && (i = -Math.abs(i) + 1);
    const p = hs({
      year: i,
      month: o,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: c,
      millisecond: 0
    });
    let f = +t;
    const m = f % 1e3;
    return f -= m >= 0 ? m : 1e3 + m, (p - f) / (60 * 1e3);
  }
  /** @override **/
  equals(n) {
    return n.type === "iana" && n.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let Zd = {};
function VD(e, n = {}) {
  const t = JSON.stringify([e, n]);
  let r = Zd[t];
  return r || (r = new Intl.ListFormat(e, n), Zd[t] = r), r;
}
let Bl = {};
function Yl(e, n = {}) {
  const t = JSON.stringify([e, n]);
  let r = Bl[t];
  return r || (r = new Intl.DateTimeFormat(e, n), Bl[t] = r), r;
}
let Zl = {};
function WD(e, n = {}) {
  const t = JSON.stringify([e, n]);
  let r = Zl[t];
  return r || (r = new Intl.NumberFormat(e, n), Zl[t] = r), r;
}
let Xl = {};
function GD(e, n = {}) {
  const { base: t, ...r } = n, i = JSON.stringify([e, r]);
  let o = Xl[i];
  return o || (o = new Intl.RelativeTimeFormat(e, n), Xl[i] = o), o;
}
let pi = null;
function $D() {
  return pi || (pi = new Intl.DateTimeFormat().resolvedOptions().locale, pi);
}
let Xd = {};
function HD(e) {
  let n = Xd[e];
  if (!n) {
    const t = new Intl.Locale(e);
    n = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, Xd[e] = n;
  }
  return n;
}
function BD(e) {
  const n = e.indexOf("-x-");
  n !== -1 && (e = e.substring(0, n));
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let r, i;
    try {
      r = Yl(e).resolvedOptions(), i = e;
    } catch {
      const l = e.substring(0, t);
      r = Yl(l).resolvedOptions(), i = l;
    }
    const { numberingSystem: o, calendar: a } = r;
    return [i, o, a];
  }
}
function YD(e, n, t) {
  return (t || n) && (e.includes("-u-") || (e += "-u"), t && (e += `-ca-${t}`), n && (e += `-nu-${n}`)), e;
}
function ZD(e) {
  const n = [];
  for (let t = 1; t <= 12; t++) {
    const r = le.utc(2009, t, 1);
    n.push(e(r));
  }
  return n;
}
function XD(e) {
  const n = [];
  for (let t = 1; t <= 7; t++) {
    const r = le.utc(2016, 11, 13 + t);
    n.push(e(r));
  }
  return n;
}
function Io(e, n, t, r) {
  const i = e.listingMode();
  return i === "error" ? null : i === "en" ? t(n) : r(n);
}
function zD(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class jD {
  constructor(n, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: i, floor: o, ...a } = r;
    if (!t || Object.keys(a).length > 0) {
      const s = { useGrouping: !1, ...r };
      r.padTo > 0 && (s.minimumIntegerDigits = r.padTo), this.inf = WD(n, s);
    }
  }
  format(n) {
    if (this.inf) {
      const t = this.floor ? Math.floor(n) : n;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(n) : lc(n, 3);
      return Ke(t, this.padTo);
    }
  }
}
class UD {
  constructor(n, t, r) {
    this.opts = r, this.originalZone = void 0;
    let i;
    if (this.opts.timeZone)
      this.dt = n;
    else if (n.zone.type === "fixed") {
      const a = -1 * (n.offset / 60), s = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      n.offset !== 0 && mn.create(s).valid ? (i = s, this.dt = n) : (i = "UTC", this.dt = n.offset === 0 ? n : n.setZone("UTC").plus({ minutes: n.offset }), this.originalZone = n.zone);
    } else n.zone.type === "system" ? this.dt = n : n.zone.type === "iana" ? (this.dt = n, i = n.zone.name) : (i = "UTC", this.dt = n.setZone("UTC").plus({ minutes: n.offset }), this.originalZone = n.zone);
    const o = { ...this.opts };
    o.timeZone = o.timeZone || i, this.dtf = Yl(t, o);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: n }) => n).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const n = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? n.map((t) => {
      if (t.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: r
        };
      } else
        return t;
    }) : n;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class JD {
  constructor(n, t, r) {
    this.opts = { style: "long", ...r }, !t && fg() && (this.rtf = GD(n, r));
  }
  format(n, t) {
    return this.rtf ? this.rtf.format(n, t) : gT(t, n, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(n, t) {
    return this.rtf ? this.rtf.formatToParts(n, t) : [];
  }
}
const QD = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class Fe {
  static fromOpts(n) {
    return Fe.create(
      n.locale,
      n.numberingSystem,
      n.outputCalendar,
      n.weekSettings,
      n.defaultToEN
    );
  }
  static create(n, t, r, i, o = !1) {
    const a = n || Je.defaultLocale, s = a || (o ? "en-US" : $D()), l = t || Je.defaultNumberingSystem, u = r || Je.defaultOutputCalendar, c = zl(i) || Je.defaultWeekSettings;
    return new Fe(s, l, u, c, a);
  }
  static resetCache() {
    pi = null, Bl = {}, Zl = {}, Xl = {};
  }
  static fromObject({ locale: n, numberingSystem: t, outputCalendar: r, weekSettings: i } = {}) {
    return Fe.create(n, t, r, i);
  }
  constructor(n, t, r, i, o) {
    const [a, s, l] = BD(n);
    this.locale = a, this.numberingSystem = t || s || null, this.outputCalendar = r || l || null, this.weekSettings = i, this.intl = YD(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = o, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = zD(this)), this.fastNumbersCached;
  }
  listingMode() {
    const n = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return n && t ? "en" : "intl";
  }
  clone(n) {
    return !n || Object.getOwnPropertyNames(n).length === 0 ? this : Fe.create(
      n.locale || this.specifiedLocale,
      n.numberingSystem || this.numberingSystem,
      n.outputCalendar || this.outputCalendar,
      zl(n.weekSettings) || this.weekSettings,
      n.defaultToEN || !1
    );
  }
  redefaultToEN(n = {}) {
    return this.clone({ ...n, defaultToEN: !0 });
  }
  redefaultToSystem(n = {}) {
    return this.clone({ ...n, defaultToEN: !1 });
  }
  months(n, t = !1) {
    return Io(this, n, vg, () => {
      const r = t ? { month: n, day: "numeric" } : { month: n }, i = t ? "format" : "standalone";
      return this.monthsCache[i][n] || (this.monthsCache[i][n] = ZD((o) => this.extract(o, r, "month"))), this.monthsCache[i][n];
    });
  }
  weekdays(n, t = !1) {
    return Io(this, n, wg, () => {
      const r = t ? { weekday: n, year: "numeric", month: "long", day: "numeric" } : { weekday: n }, i = t ? "format" : "standalone";
      return this.weekdaysCache[i][n] || (this.weekdaysCache[i][n] = XD(
        (o) => this.extract(o, r, "weekday")
      )), this.weekdaysCache[i][n];
    });
  }
  meridiems() {
    return Io(
      this,
      void 0,
      () => Cg,
      () => {
        if (!this.meridiemCache) {
          const n = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [le.utc(2016, 11, 13, 9), le.utc(2016, 11, 13, 19)].map(
            (t) => this.extract(t, n, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(n) {
    return Io(this, n, Ig, () => {
      const t = { era: n };
      return this.eraCache[n] || (this.eraCache[n] = [le.utc(-40, 1, 1), le.utc(2017, 1, 1)].map(
        (r) => this.extract(r, t, "era")
      )), this.eraCache[n];
    });
  }
  extract(n, t, r) {
    const i = this.dtFormatter(n, t), o = i.formatToParts(), a = o.find((s) => s.type.toLowerCase() === r);
    return a ? a.value : null;
  }
  numberFormatter(n = {}) {
    return new jD(this.intl, n.forceSimple || this.fastNumbers, n);
  }
  dtFormatter(n, t = {}) {
    return new UD(n, this.intl, t);
  }
  relFormatter(n = {}) {
    return new JD(this.intl, this.isEnglish(), n);
  }
  listFormatter(n = {}) {
    return VD(this.intl, n);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : pg() ? HD(this.locale) : QD;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(n) {
    return this.locale === n.locale && this.numberingSystem === n.numberingSystem && this.outputCalendar === n.outputCalendar;
  }
}
let rl = null;
class mt extends no {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return rl === null && (rl = new mt(0)), rl;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(n) {
    return n === 0 ? mt.utcInstance : new mt(n);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(n) {
    if (n) {
      const t = n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new mt(gs(t[1], t[2]));
    }
    return null;
  }
  constructor(n) {
    super(), this.fixed = n;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Ii(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Ii(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(n, t) {
    return Ii(this.fixed, t);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(n) {
    return n.type === "fixed" && n.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class qD extends no {
  constructor(n) {
    super(), this.zoneName = n;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function En(e, n) {
  if (ie(e) || e === null)
    return n;
  if (e instanceof no)
    return e;
  if (tT(e)) {
    const t = e.toLowerCase();
    return t === "default" ? n : t === "local" || t === "system" ? ps.instance : t === "utc" || t === "gmt" ? mt.utcInstance : mt.parseSpecifier(t) || mn.create(e);
  } else return rr(e) ? mt.instance(e) : typeof e == "object" && "offset" in e && typeof e.offset == "function" ? e : new qD(e);
}
let zd = () => Date.now(), jd = "system", Ud = null, Jd = null, Qd = null, qd = 60, Kd, ef = null;
class Je {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return zd;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n) {
    zd = n;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(n) {
    jd = n;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return En(jd, ps.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Ud;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(n) {
    Ud = n;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Jd;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(n) {
    Jd = n;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Qd;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(n) {
    Qd = n;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return ef;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(n) {
    ef = zl(n);
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return qd;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(n) {
    qd = n % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Kd;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(n) {
    Kd = n;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Fe.resetCache(), mn.resetCache();
  }
}
class Gt {
  constructor(n, t) {
    this.reason = n, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const ag = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], sg = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function At(e, n) {
  return new Gt(
    "unit out of range",
    `you specified ${n} (of type ${typeof n}) as a ${e}, which is invalid`
  );
}
function oc(e, n, t) {
  const r = new Date(Date.UTC(e, n - 1, t));
  e < 100 && e >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function lg(e, n, t) {
  return t + (ro(e) ? sg : ag)[n - 1];
}
function ug(e, n) {
  const t = ro(e) ? sg : ag, r = t.findIndex((o) => o < n), i = n - t[r];
  return { month: r + 1, day: i };
}
function ac(e, n) {
  return (e - n + 7) % 7 + 1;
}
function wa(e, n = 4, t = 1) {
  const { year: r, month: i, day: o } = e, a = lg(r, i, o), s = ac(oc(r, i, o), t);
  let l = Math.floor((a - s + 14 - n) / 7), u;
  return l < 1 ? (u = r - 1, l = Ni(u, n, t)) : l > Ni(r, n, t) ? (u = r + 1, l = 1) : u = r, { weekYear: u, weekNumber: l, weekday: s, ...vs(e) };
}
function tf(e, n = 4, t = 1) {
  const { weekYear: r, weekNumber: i, weekday: o } = e, a = ac(oc(r, 1, n), t), s = Dr(r);
  let l = i * 7 + o - a - 7 + n, u;
  l < 1 ? (u = r - 1, l += Dr(u)) : l > s ? (u = r + 1, l -= Dr(r)) : u = r;
  const { month: c, day: d } = ug(u, l);
  return { year: u, month: c, day: d, ...vs(e) };
}
function il(e) {
  const { year: n, month: t, day: r } = e, i = lg(n, t, r);
  return { year: n, ordinal: i, ...vs(e) };
}
function nf(e) {
  const { year: n, ordinal: t } = e, { month: r, day: i } = ug(n, t);
  return { year: n, month: r, day: i, ...vs(e) };
}
function rf(e, n) {
  if (!ie(e.localWeekday) || !ie(e.localWeekNumber) || !ie(e.localWeekYear)) {
    if (!ie(e.weekday) || !ie(e.weekNumber) || !ie(e.weekYear))
      throw new Ir(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return ie(e.localWeekday) || (e.weekday = e.localWeekday), ie(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber), ie(e.localWeekYear) || (e.weekYear = e.localWeekYear), delete e.localWeekday, delete e.localWeekNumber, delete e.localWeekYear, {
      minDaysInFirstWeek: n.getMinDaysInFirstWeek(),
      startOfWeek: n.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function KD(e, n = 4, t = 1) {
  const r = ms(e.weekYear), i = Pt(
    e.weekNumber,
    1,
    Ni(e.weekYear, n, t)
  ), o = Pt(e.weekday, 1, 7);
  return r ? i ? o ? !1 : At("weekday", e.weekday) : At("week", e.weekNumber) : At("weekYear", e.weekYear);
}
function eT(e) {
  const n = ms(e.year), t = Pt(e.ordinal, 1, Dr(e.year));
  return n ? t ? !1 : At("ordinal", e.ordinal) : At("year", e.year);
}
function cg(e) {
  const n = ms(e.year), t = Pt(e.month, 1, 12), r = Pt(e.day, 1, Ca(e.year, e.month));
  return n ? t ? r ? !1 : At("day", e.day) : At("month", e.month) : At("year", e.year);
}
function dg(e) {
  const { hour: n, minute: t, second: r, millisecond: i } = e, o = Pt(n, 0, 23) || n === 24 && t === 0 && r === 0 && i === 0, a = Pt(t, 0, 59), s = Pt(r, 0, 59), l = Pt(i, 0, 999);
  return o ? a ? s ? l ? !1 : At("millisecond", i) : At("second", r) : At("minute", t) : At("hour", n);
}
function ie(e) {
  return typeof e > "u";
}
function rr(e) {
  return typeof e == "number";
}
function ms(e) {
  return typeof e == "number" && e % 1 === 0;
}
function tT(e) {
  return typeof e == "string";
}
function nT(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function fg() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function pg() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function rT(e) {
  return Array.isArray(e) ? e : [e];
}
function of(e, n, t) {
  if (e.length !== 0)
    return e.reduce((r, i) => {
      const o = [n(i), i];
      return r && t(r[0], o[0]) === r[0] ? r : o;
    }, null)[1];
}
function iT(e, n) {
  return n.reduce((t, r) => (t[r] = e[r], t), {});
}
function Lr(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function zl(e) {
  if (e == null)
    return null;
  if (typeof e != "object")
    throw new ht("Week settings must be an object");
  if (!Pt(e.firstDay, 1, 7) || !Pt(e.minimalDays, 1, 7) || !Array.isArray(e.weekend) || e.weekend.some((n) => !Pt(n, 1, 7)))
    throw new ht("Invalid week settings");
  return {
    firstDay: e.firstDay,
    minimalDays: e.minimalDays,
    weekend: Array.from(e.weekend)
  };
}
function Pt(e, n, t) {
  return ms(e) && e >= n && e <= t;
}
function oT(e, n) {
  return e - n * Math.floor(e / n);
}
function Ke(e, n = 2) {
  const t = e < 0;
  let r;
  return t ? r = "-" + ("" + -e).padStart(n, "0") : r = ("" + e).padStart(n, "0"), r;
}
function Sn(e) {
  if (!(ie(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function Yn(e) {
  if (!(ie(e) || e === null || e === ""))
    return parseFloat(e);
}
function sc(e) {
  if (!(ie(e) || e === null || e === "")) {
    const n = parseFloat("0." + e) * 1e3;
    return Math.floor(n);
  }
}
function lc(e, n, t = !1) {
  const r = 10 ** n;
  return (t ? Math.trunc : Math.round)(e * r) / r;
}
function ro(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Dr(e) {
  return ro(e) ? 366 : 365;
}
function Ca(e, n) {
  const t = oT(n - 1, 12) + 1, r = e + (n - t) / 12;
  return t === 2 ? ro(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function hs(e) {
  let n = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return e.year < 100 && e.year >= 0 && (n = new Date(n), n.setUTCFullYear(e.year, e.month - 1, e.day)), +n;
}
function af(e, n, t) {
  return -ac(oc(e, 1, n), t) + n - 1;
}
function Ni(e, n = 4, t = 1) {
  const r = af(e, n, t), i = af(e + 1, n, t);
  return (Dr(e) - r + i) / 7;
}
function jl(e) {
  return e > 99 ? e : e > Je.twoDigitCutoffYear ? 1900 + e : 2e3 + e;
}
function mg(e, n, t, r = null) {
  const i = new Date(e), o = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (o.timeZone = r);
  const a = { timeZoneName: n, ...o }, s = new Intl.DateTimeFormat(t, a).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return s ? s.value : null;
}
function gs(e, n) {
  let t = parseInt(e, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(n, 10) || 0, i = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + i;
}
function hg(e) {
  const n = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(n))
    throw new ht(`Invalid unit value ${e}`);
  return n;
}
function Ia(e, n) {
  const t = {};
  for (const r in e)
    if (Lr(e, r)) {
      const i = e[r];
      if (i == null) continue;
      t[n(r)] = hg(i);
    }
  return t;
}
function Ii(e, n) {
  const t = Math.trunc(Math.abs(e / 60)), r = Math.trunc(Math.abs(e % 60)), i = e >= 0 ? "+" : "-";
  switch (n) {
    case "short":
      return `${i}${Ke(t, 2)}:${Ke(r, 2)}`;
    case "narrow":
      return `${i}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${i}${Ke(t, 2)}${Ke(r, 2)}`;
    default:
      throw new RangeError(`Value format ${n} is out of range for property format`);
  }
}
function vs(e) {
  return iT(e, ["hour", "minute", "second", "millisecond"]);
}
const aT = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], gg = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], sT = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function vg(e) {
  switch (e) {
    case "narrow":
      return [...sT];
    case "short":
      return [...gg];
    case "long":
      return [...aT];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const bg = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], yg = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], lT = ["M", "T", "W", "T", "F", "S", "S"];
function wg(e) {
  switch (e) {
    case "narrow":
      return [...lT];
    case "short":
      return [...yg];
    case "long":
      return [...bg];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Cg = ["AM", "PM"], uT = ["Before Christ", "Anno Domini"], cT = ["BC", "AD"], dT = ["B", "A"];
function Ig(e) {
  switch (e) {
    case "narrow":
      return [...dT];
    case "short":
      return [...cT];
    case "long":
      return [...uT];
    default:
      return null;
  }
}
function fT(e) {
  return Cg[e.hour < 12 ? 0 : 1];
}
function pT(e, n) {
  return wg(n)[e.weekday - 1];
}
function mT(e, n) {
  return vg(n)[e.month - 1];
}
function hT(e, n) {
  return Ig(n)[e.year < 0 ? 0 : 1];
}
function gT(e, n, t = "always", r = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, o = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (t === "auto" && o) {
    const d = e === "days";
    switch (n) {
      case 1:
        return d ? "tomorrow" : `next ${i[e][0]}`;
      case -1:
        return d ? "yesterday" : `last ${i[e][0]}`;
      case 0:
        return d ? "today" : `this ${i[e][0]}`;
    }
  }
  const a = Object.is(n, -0) || n < 0, s = Math.abs(n), l = s === 1, u = i[e], c = r ? l ? u[1] : u[2] || u[1] : l ? i[e][0] : e;
  return a ? `${s} ${c} ago` : `in ${s} ${c}`;
}
function sf(e, n) {
  let t = "";
  for (const r of e)
    r.literal ? t += r.val : t += n(r.val);
  return t;
}
const vT = {
  D: ya,
  DD: $h,
  DDD: Hh,
  DDDD: Bh,
  t: Yh,
  tt: Zh,
  ttt: Xh,
  tttt: zh,
  T: jh,
  TT: Uh,
  TTT: Jh,
  TTTT: Qh,
  f: qh,
  ff: eg,
  fff: ng,
  ffff: ig,
  F: Kh,
  FF: tg,
  FFF: rg,
  FFFF: og
};
class ut {
  static create(n, t = {}) {
    return new ut(n, t);
  }
  static parseFormat(n) {
    let t = null, r = "", i = !1;
    const o = [];
    for (let a = 0; a < n.length; a++) {
      const s = n.charAt(a);
      s === "'" ? (r.length > 0 && o.push({ literal: i || /^\s+$/.test(r), val: r }), t = null, r = "", i = !i) : i || s === t ? r += s : (r.length > 0 && o.push({ literal: /^\s+$/.test(r), val: r }), r = s, t = s);
    }
    return r.length > 0 && o.push({ literal: i || /^\s+$/.test(r), val: r }), o;
  }
  static macroTokenToFormatOpts(n) {
    return vT[n];
  }
  constructor(n, t) {
    this.opts = t, this.loc = n, this.systemLoc = null;
  }
  formatWithSystemDefault(n, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(n, { ...this.opts, ...t }).format();
  }
  dtFormatter(n, t = {}) {
    return this.loc.dtFormatter(n, { ...this.opts, ...t });
  }
  formatDateTime(n, t) {
    return this.dtFormatter(n, t).format();
  }
  formatDateTimeParts(n, t) {
    return this.dtFormatter(n, t).formatToParts();
  }
  formatInterval(n, t) {
    return this.dtFormatter(n.start, t).dtf.formatRange(n.start.toJSDate(), n.end.toJSDate());
  }
  resolvedOptions(n, t) {
    return this.dtFormatter(n, t).resolvedOptions();
  }
  num(n, t = 0) {
    if (this.opts.forceSimple)
      return Ke(n, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(n);
  }
  formatDateTimeFromString(n, t) {
    const r = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", o = (f, m) => this.loc.extract(n, f, m), a = (f) => n.isOffsetFixed && n.offset === 0 && f.allowZ ? "Z" : n.isValid ? n.zone.formatOffset(n.ts, f.format) : "", s = () => r ? fT(n) : o({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (f, m) => r ? mT(n, f) : o(m ? { month: f } : { month: f, day: "numeric" }, "month"), u = (f, m) => r ? pT(n, f) : o(
      m ? { weekday: f } : { weekday: f, month: "long", day: "numeric" },
      "weekday"
    ), c = (f) => {
      const m = ut.macroTokenToFormatOpts(f);
      return m ? this.formatWithSystemDefault(n, m) : f;
    }, d = (f) => r ? hT(n, f) : o({ era: f }, "era"), p = (f) => {
      switch (f) {
        case "S":
          return this.num(n.millisecond);
        case "u":
        case "SSS":
          return this.num(n.millisecond, 3);
        case "s":
          return this.num(n.second);
        case "ss":
          return this.num(n.second, 2);
        case "uu":
          return this.num(Math.floor(n.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(n.millisecond / 100));
        case "m":
          return this.num(n.minute);
        case "mm":
          return this.num(n.minute, 2);
        case "h":
          return this.num(n.hour % 12 === 0 ? 12 : n.hour % 12);
        case "hh":
          return this.num(n.hour % 12 === 0 ? 12 : n.hour % 12, 2);
        case "H":
          return this.num(n.hour);
        case "HH":
          return this.num(n.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return n.zone.offsetName(n.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return n.zone.offsetName(n.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return n.zoneName;
        case "a":
          return s();
        case "d":
          return i ? o({ day: "numeric" }, "day") : this.num(n.day);
        case "dd":
          return i ? o({ day: "2-digit" }, "day") : this.num(n.day, 2);
        case "c":
          return this.num(n.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(n.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return i ? o({ month: "numeric", day: "numeric" }, "month") : this.num(n.month);
        case "LL":
          return i ? o({ month: "2-digit", day: "numeric" }, "month") : this.num(n.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return i ? o({ month: "numeric" }, "month") : this.num(n.month);
        case "MM":
          return i ? o({ month: "2-digit" }, "month") : this.num(n.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return i ? o({ year: "numeric" }, "year") : this.num(n.year);
        case "yy":
          return i ? o({ year: "2-digit" }, "year") : this.num(n.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? o({ year: "numeric" }, "year") : this.num(n.year, 4);
        case "yyyyyy":
          return i ? o({ year: "numeric" }, "year") : this.num(n.year, 6);
        case "G":
          return d("short");
        case "GG":
          return d("long");
        case "GGGGG":
          return d("narrow");
        case "kk":
          return this.num(n.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(n.weekYear, 4);
        case "W":
          return this.num(n.weekNumber);
        case "WW":
          return this.num(n.weekNumber, 2);
        case "n":
          return this.num(n.localWeekNumber);
        case "nn":
          return this.num(n.localWeekNumber, 2);
        case "ii":
          return this.num(n.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(n.localWeekYear, 4);
        case "o":
          return this.num(n.ordinal);
        case "ooo":
          return this.num(n.ordinal, 3);
        case "q":
          return this.num(n.quarter);
        case "qq":
          return this.num(n.quarter, 2);
        case "X":
          return this.num(Math.floor(n.ts / 1e3));
        case "x":
          return this.num(n.ts);
        default:
          return c(f);
      }
    };
    return sf(ut.parseFormat(t), p);
  }
  formatDurationFromString(n, t) {
    const r = (l) => {
      switch (l[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (l) => (u) => {
      const c = r(u);
      return c ? this.num(l.get(c), u.length) : u;
    }, o = ut.parseFormat(t), a = o.reduce(
      (l, { literal: u, val: c }) => u ? l : l.concat(c),
      []
    ), s = n.shiftTo(...a.map(r).filter((l) => l));
    return sf(o, i(s));
  }
}
const xg = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Xr(...e) {
  const n = e.reduce((t, r) => t + r.source, "");
  return RegExp(`^${n}$`);
}
function zr(...e) {
  return (n) => e.reduce(
    ([t, r, i], o) => {
      const [a, s, l] = o(n, i);
      return [{ ...t, ...a }, s || r, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function jr(e, ...n) {
  if (e == null)
    return [null, null];
  for (const [t, r] of n) {
    const i = t.exec(e);
    if (i)
      return r(i);
  }
  return [null, null];
}
function Sg(...e) {
  return (n, t) => {
    const r = {};
    let i;
    for (i = 0; i < e.length; i++)
      r[e[i]] = Sn(n[t + i]);
    return [r, null, t + i];
  };
}
const Eg = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, bT = `(?:${Eg.source}?(?:\\[(${xg.source})\\])?)?`, uc = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Dg = RegExp(`${uc.source}${bT}`), cc = RegExp(`(?:T${Dg.source})?`), yT = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, wT = /(\d{4})-?W(\d\d)(?:-?(\d))?/, CT = /(\d{4})-?(\d{3})/, IT = Sg("weekYear", "weekNumber", "weekDay"), xT = Sg("year", "ordinal"), ST = /(\d{4})-(\d\d)-(\d\d)/, Tg = RegExp(
  `${uc.source} ?(?:${Eg.source}|(${xg.source}))?`
), ET = RegExp(`(?: ${Tg.source})?`);
function Tr(e, n, t) {
  const r = e[n];
  return ie(r) ? t : Sn(r);
}
function DT(e, n) {
  return [{
    year: Tr(e, n),
    month: Tr(e, n + 1, 1),
    day: Tr(e, n + 2, 1)
  }, null, n + 3];
}
function Ur(e, n) {
  return [{
    hours: Tr(e, n, 0),
    minutes: Tr(e, n + 1, 0),
    seconds: Tr(e, n + 2, 0),
    milliseconds: sc(e[n + 3])
  }, null, n + 4];
}
function io(e, n) {
  const t = !e[n] && !e[n + 1], r = gs(e[n + 1], e[n + 2]), i = t ? null : mt.instance(r);
  return [{}, i, n + 3];
}
function oo(e, n) {
  const t = e[n] ? mn.create(e[n]) : null;
  return [{}, t, n + 1];
}
const TT = RegExp(`^T?${uc.source}$`), MT = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function OT(e) {
  const [n, t, r, i, o, a, s, l, u] = e, c = n[0] === "-", d = l && l[0] === "-", p = (f, m = !1) => f !== void 0 && (m || f && c) ? -f : f;
  return [
    {
      years: p(Yn(t)),
      months: p(Yn(r)),
      weeks: p(Yn(i)),
      days: p(Yn(o)),
      hours: p(Yn(a)),
      minutes: p(Yn(s)),
      seconds: p(Yn(l), l === "-0"),
      milliseconds: p(sc(u), d)
    }
  ];
}
const kT = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function dc(e, n, t, r, i, o, a) {
  const s = {
    year: n.length === 2 ? jl(Sn(n)) : Sn(n),
    month: gg.indexOf(t) + 1,
    day: Sn(r),
    hour: Sn(i),
    minute: Sn(o)
  };
  return a && (s.second = Sn(a)), e && (s.weekday = e.length > 3 ? bg.indexOf(e) + 1 : yg.indexOf(e) + 1), s;
}
const RT = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function AT(e) {
  const [
    ,
    n,
    t,
    r,
    i,
    o,
    a,
    s,
    l,
    u,
    c,
    d
  ] = e, p = dc(n, i, r, t, o, a, s);
  let f;
  return l ? f = kT[l] : u ? f = 0 : f = gs(c, d), [p, new mt(f)];
}
function PT(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const FT = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, NT = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, _T = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function lf(e) {
  const [, n, t, r, i, o, a, s] = e;
  return [dc(n, i, r, t, o, a, s), mt.utcInstance];
}
function LT(e) {
  const [, n, t, r, i, o, a, s] = e;
  return [dc(n, s, t, r, i, o, a), mt.utcInstance];
}
const VT = Xr(yT, cc), WT = Xr(wT, cc), GT = Xr(CT, cc), $T = Xr(Dg), Mg = zr(
  DT,
  Ur,
  io,
  oo
), HT = zr(
  IT,
  Ur,
  io,
  oo
), BT = zr(
  xT,
  Ur,
  io,
  oo
), YT = zr(
  Ur,
  io,
  oo
);
function ZT(e) {
  return jr(
    e,
    [VT, Mg],
    [WT, HT],
    [GT, BT],
    [$T, YT]
  );
}
function XT(e) {
  return jr(PT(e), [RT, AT]);
}
function zT(e) {
  return jr(
    e,
    [FT, lf],
    [NT, lf],
    [_T, LT]
  );
}
function jT(e) {
  return jr(e, [MT, OT]);
}
const UT = zr(Ur);
function JT(e) {
  return jr(e, [TT, UT]);
}
const QT = Xr(ST, ET), qT = Xr(Tg), KT = zr(
  Ur,
  io,
  oo
);
function e2(e) {
  return jr(
    e,
    [QT, Mg],
    [qT, KT]
  );
}
const uf = "Invalid Duration", Og = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, t2 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Og
}, Tt = 146097 / 400, br = 146097 / 4800, n2 = {
  years: {
    quarters: 4,
    months: 12,
    weeks: Tt / 7,
    days: Tt,
    hours: Tt * 24,
    minutes: Tt * 24 * 60,
    seconds: Tt * 24 * 60 * 60,
    milliseconds: Tt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: Tt / 28,
    days: Tt / 4,
    hours: Tt * 24 / 4,
    minutes: Tt * 24 * 60 / 4,
    seconds: Tt * 24 * 60 * 60 / 4,
    milliseconds: Tt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: br / 7,
    days: br,
    hours: br * 24,
    minutes: br * 24 * 60,
    seconds: br * 24 * 60 * 60,
    milliseconds: br * 24 * 60 * 60 * 1e3
  },
  ...Og
}, qn = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], r2 = qn.slice(0).reverse();
function In(e, n, t = !1) {
  const r = {
    values: t ? n.values : { ...e.values, ...n.values || {} },
    loc: e.loc.clone(n.loc),
    conversionAccuracy: n.conversionAccuracy || e.conversionAccuracy,
    matrix: n.matrix || e.matrix
  };
  return new ye(r);
}
function kg(e, n) {
  let t = n.milliseconds ?? 0;
  for (const r of r2.slice(1))
    n[r] && (t += n[r] * e[r].milliseconds);
  return t;
}
function cf(e, n) {
  const t = kg(e, n) < 0 ? -1 : 1;
  qn.reduceRight((r, i) => {
    if (ie(n[i]))
      return r;
    if (r) {
      const o = n[r] * t, a = e[i][r], s = Math.floor(o / a);
      n[i] += s * t, n[r] -= s * a * t;
    }
    return i;
  }, null), qn.reduce((r, i) => {
    if (ie(n[i]))
      return r;
    if (r) {
      const o = n[r] % 1;
      n[r] -= o, n[i] += o * e[r][i];
    }
    return i;
  }, null);
}
function i2(e) {
  const n = {};
  for (const [t, r] of Object.entries(e))
    r !== 0 && (n[t] = r);
  return n;
}
class ye {
  /**
   * @private
   */
  constructor(n) {
    const t = n.conversionAccuracy === "longterm" || !1;
    let r = t ? n2 : t2;
    n.matrix && (r = n.matrix), this.values = n.values, this.loc = n.loc || Fe.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = n.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(n, t) {
    return ye.fromObject({ milliseconds: n }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(n, t = {}) {
    if (n == null || typeof n != "object")
      throw new ht(
        `Duration.fromObject: argument expected to be an object, got ${n === null ? "null" : typeof n}`
      );
    return new ye({
      values: Ia(n, ye.normalizeUnit),
      loc: Fe.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(n) {
    if (rr(n))
      return ye.fromMillis(n);
    if (ye.isDuration(n))
      return n;
    if (typeof n == "object")
      return ye.fromObject(n);
    throw new ht(
      `Unknown duration argument ${n} of type ${typeof n}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(n, t) {
    const [r] = jT(n);
    return r ? ye.fromObject(r, t) : ye.invalid("unparsable", `the input "${n}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(n, t) {
    const [r] = JT(n);
    return r ? ye.fromObject(r, t) : ye.invalid("unparsable", `the input "${n}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(n, t = null) {
    if (!n)
      throw new ht("need to specify a reason the Duration is invalid");
    const r = n instanceof Gt ? n : new Gt(n, t);
    if (Je.throwOnInvalid)
      throw new RD(r);
    return new ye({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(n) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[n && n.toLowerCase()];
    if (!t) throw new Gh(n);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(n) {
    return n && n.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(n, t = {}) {
    const r = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? ut.create(this.loc, r).formatDurationFromString(this, n) : uf;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(n = {}) {
    if (!this.isValid) return uf;
    const t = qn.map((r) => {
      const i = this.values[r];
      return ie(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...n, unit: r.slice(0, -1) }).format(i);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: n.listStyle || "narrow", ...n }).format(t);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let n = "P";
    return this.years !== 0 && (n += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (n += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (n += this.weeks + "W"), this.days !== 0 && (n += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (n += "T"), this.hours !== 0 && (n += this.hours + "H"), this.minutes !== 0 && (n += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (n += lc(this.seconds + this.milliseconds / 1e3, 3) + "S"), n === "P" && (n += "T0S"), n;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(n = {}) {
    if (!this.isValid) return null;
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (n = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...n,
      includeOffset: !1
    }, le.fromMillis(t, { zone: "UTC" }).toISOTime(n));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? kg(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(n) {
    if (!this.isValid) return this;
    const t = ye.fromDurationLike(n), r = {};
    for (const i of qn)
      (Lr(t.values, i) || Lr(this.values, i)) && (r[i] = t.get(i) + this.get(i));
    return In(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(n) {
    if (!this.isValid) return this;
    const t = ye.fromDurationLike(n);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(n) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = hg(n(this.values[r], r));
    return In(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(n) {
    return this[ye.normalizeUnit(n)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(n) {
    if (!this.isValid) return this;
    const t = { ...this.values, ...Ia(n, ye.normalizeUnit) };
    return In(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: n, numberingSystem: t, conversionAccuracy: r, matrix: i } = {}) {
    const a = { loc: this.loc.clone({ locale: n, numberingSystem: t }), matrix: i, conversionAccuracy: r };
    return In(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(n) {
    return this.isValid ? this.shiftTo(n).get(n) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const n = this.toObject();
    return cf(this.matrix, n), In(this, { values: n }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const n = i2(this.normalize().shiftToAll().toObject());
    return In(this, { values: n }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...n) {
    if (!this.isValid) return this;
    if (n.length === 0)
      return this;
    n = n.map((a) => ye.normalizeUnit(a));
    const t = {}, r = {}, i = this.toObject();
    let o;
    for (const a of qn)
      if (n.indexOf(a) >= 0) {
        o = a;
        let s = 0;
        for (const u in r)
          s += this.matrix[u][a] * r[u], r[u] = 0;
        rr(i[a]) && (s += i[a]);
        const l = Math.trunc(s);
        t[a] = l, r[a] = (s * 1e3 - l * 1e3) / 1e3;
      } else rr(i[a]) && (r[a] = i[a]);
    for (const a in r)
      r[a] !== 0 && (t[o] += a === o ? r[a] : r[a] / this.matrix[o][a]);
    return cf(this.matrix, t), In(this, { values: t }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const n = {};
    for (const t of Object.keys(this.values))
      n[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return In(this, { values: n }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(n) {
    if (!this.isValid || !n.isValid || !this.loc.equals(n.loc))
      return !1;
    function t(r, i) {
      return r === void 0 || r === 0 ? i === void 0 || i === 0 : r === i;
    }
    for (const r of qn)
      if (!t(this.values[r], n.values[r]))
        return !1;
    return !0;
  }
}
const yr = "Invalid Interval";
function o2(e, n) {
  return !e || !e.isValid ? Xe.invalid("missing or invalid start") : !n || !n.isValid ? Xe.invalid("missing or invalid end") : n < e ? Xe.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${n.toISO()}`
  ) : null;
}
class Xe {
  /**
   * @private
   */
  constructor(n) {
    this.s = n.start, this.e = n.end, this.invalid = n.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(n, t = null) {
    if (!n)
      throw new ht("need to specify a reason the Interval is invalid");
    const r = n instanceof Gt ? n : new Gt(n, t);
    if (Je.throwOnInvalid)
      throw new kD(r);
    return new Xe({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(n, t) {
    const r = oi(n), i = oi(t), o = o2(r, i);
    return o ?? new Xe({
      start: r,
      end: i
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(n, t) {
    const r = ye.fromDurationLike(t), i = oi(n);
    return Xe.fromDateTimes(i, i.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(n, t) {
    const r = ye.fromDurationLike(t), i = oi(n);
    return Xe.fromDateTimes(i.minus(r), i);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(n, t) {
    const [r, i] = (n || "").split("/", 2);
    if (r && i) {
      let o, a;
      try {
        o = le.fromISO(r, t), a = o.isValid;
      } catch {
        a = !1;
      }
      let s, l;
      try {
        s = le.fromISO(i, t), l = s.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return Xe.fromDateTimes(o, s);
      if (a) {
        const u = ye.fromISO(i, t);
        if (u.isValid)
          return Xe.after(o, u);
      } else if (l) {
        const u = ye.fromISO(r, t);
        if (u.isValid)
          return Xe.before(s, u);
      }
    }
    return Xe.invalid("unparsable", `the input "${n}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(n) {
    return n && n.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(n = "milliseconds") {
    return this.isValid ? this.toDuration(n).get(n) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(n = "milliseconds", t) {
    if (!this.isValid) return NaN;
    const r = this.start.startOf(n, t);
    let i;
    return t != null && t.useLocaleWeeks ? i = this.end.reconfigure({ locale: r.locale }) : i = this.end, i = i.startOf(n, t), Math.floor(i.diff(r, n).get(n)) + (i.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(n) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, n) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(n) {
    return this.isValid ? this.s > n : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(n) {
    return this.isValid ? this.e <= n : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(n) {
    return this.isValid ? this.s <= n && this.e > n : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: n, end: t } = {}) {
    return this.isValid ? Xe.fromDateTimes(n || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...n) {
    if (!this.isValid) return [];
    const t = n.map(oi).filter((a) => this.contains(a)).sort((a, s) => a.toMillis() - s.toMillis()), r = [];
    let { s: i } = this, o = 0;
    for (; i < this.e; ) {
      const a = t[o] || this.e, s = +a > +this.e ? this.e : a;
      r.push(Xe.fromDateTimes(i, s)), i = s, o += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(n) {
    const t = ye.fromDurationLike(n);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, i = 1, o;
    const a = [];
    for (; r < this.e; ) {
      const s = this.start.plus(t.mapUnits((l) => l * i));
      o = +s > +this.e ? this.e : s, a.push(Xe.fromDateTimes(r, o)), r = o, i += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(n) {
    return this.isValid ? this.splitBy(this.length() / n).slice(0, n) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(n) {
    return this.e > n.s && this.s < n.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(n) {
    return this.isValid ? +this.e == +n.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(n) {
    return this.isValid ? +n.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(n) {
    return this.isValid ? this.s <= n.s && this.e >= n.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(n) {
    return !this.isValid || !n.isValid ? !1 : this.s.equals(n.s) && this.e.equals(n.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(n) {
    if (!this.isValid) return this;
    const t = this.s > n.s ? this.s : n.s, r = this.e < n.e ? this.e : n.e;
    return t >= r ? null : Xe.fromDateTimes(t, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(n) {
    if (!this.isValid) return this;
    const t = this.s < n.s ? this.s : n.s, r = this.e > n.e ? this.e : n.e;
    return Xe.fromDateTimes(t, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(n) {
    const [t, r] = n.sort((i, o) => i.s - o.s).reduce(
      ([i, o], a) => o ? o.overlaps(a) || o.abutsStart(a) ? [i, o.union(a)] : [i.concat([o]), a] : [i, a],
      [[], null]
    );
    return r && t.push(r), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(n) {
    let t = null, r = 0;
    const i = [], o = n.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...o), s = a.sort((l, u) => l.time - u.time);
    for (const l of s)
      r += l.type === "s" ? 1 : -1, r === 1 ? t = l.time : (t && +t != +l.time && i.push(Xe.fromDateTimes(t, l.time)), t = null);
    return Xe.merge(i);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...n) {
    return Xe.xor([this].concat(n)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : yr;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(n = ya, t = {}) {
    return this.isValid ? ut.create(this.s.loc.clone(t), n).formatInterval(this) : yr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(n) {
    return this.isValid ? `${this.s.toISO(n)}/${this.e.toISO(n)}` : yr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : yr;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(n) {
    return this.isValid ? `${this.s.toISOTime(n)}/${this.e.toISOTime(n)}` : yr;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(n, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(n)}${t}${this.e.toFormat(n)}` : yr;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(n, t) {
    return this.isValid ? this.e.diff(this.s, n, t) : ye.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(n) {
    return Xe.fromDateTimes(n(this.s), n(this.e));
  }
}
class xo {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(n = Je.defaultZone) {
    const t = le.now().setZone(n).set({ month: 12 });
    return !n.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(n) {
    return mn.isValidZone(n);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(n) {
    return En(n, Je.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: n = null, locObj: t = null } = {}) {
    return (t || Fe.create(n)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: n = null, locObj: t = null } = {}) {
    return (t || Fe.create(n)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: n = null, locObj: t = null } = {}) {
    return (t || Fe.create(n)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(n = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null, outputCalendar: o = "gregory" } = {}) {
    return (i || Fe.create(t, r, o)).months(n);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(n = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null, outputCalendar: o = "gregory" } = {}) {
    return (i || Fe.create(t, r, o)).months(n, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(n = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Fe.create(t, r, null)).weekdays(n);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(n = "long", { locale: t = null, numberingSystem: r = null, locObj: i = null } = {}) {
    return (i || Fe.create(t, r, null)).weekdays(n, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: n = null } = {}) {
    return Fe.create(n).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(n = "short", { locale: t = null } = {}) {
    return Fe.create(t, null, "gregory").eras(n);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: fg(), localeWeek: pg() };
  }
}
function df(e, n) {
  const t = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(n) - t(e);
  return Math.floor(ye.fromMillis(r).as("days"));
}
function a2(e, n, t) {
  const r = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const c = df(l, u);
        return (c - c % 7) / 7;
      }
    ],
    ["days", df]
  ], i = {}, o = e;
  let a, s;
  for (const [l, u] of r)
    t.indexOf(l) >= 0 && (a = l, i[l] = u(e, n), s = o.plus(i), s > n ? (i[l]--, e = o.plus(i), e > n && (s = e, i[l]--, e = o.plus(i))) : e = s);
  return [e, i, s, a];
}
function s2(e, n, t, r) {
  let [i, o, a, s] = a2(e, n, t);
  const l = n - i, u = t.filter(
    (d) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(d) >= 0
  );
  u.length === 0 && (a < n && (a = i.plus({ [s]: 1 })), a !== i && (o[s] = (o[s] || 0) + l / (a - i)));
  const c = ye.fromObject(o, r);
  return u.length > 0 ? ye.fromMillis(l, r).shiftTo(...u).plus(c) : c;
}
const fc = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, ff = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, l2 = fc.hanidec.replace(/[\[|\]]/g, "").split("");
function u2(e) {
  let n = parseInt(e, 10);
  if (isNaN(n)) {
    n = "";
    for (let t = 0; t < e.length; t++) {
      const r = e.charCodeAt(t);
      if (e[t].search(fc.hanidec) !== -1)
        n += l2.indexOf(e[t]);
      else
        for (const i in ff) {
          const [o, a] = ff[i];
          r >= o && r <= a && (n += r - o);
        }
    }
    return parseInt(n, 10);
  } else
    return n;
}
function _t({ numberingSystem: e }, n = "") {
  return new RegExp(`${fc[e || "latn"]}${n}`);
}
const c2 = "missing Intl.DateTimeFormat.formatToParts support";
function xe(e, n = (t) => t) {
  return { regex: e, deser: ([t]) => n(u2(t)) };
}
const d2 = " ", Rg = `[ ${d2}]`, Ag = new RegExp(Rg, "g");
function f2(e) {
  return e.replace(/\./g, "\\.?").replace(Ag, Rg);
}
function pf(e) {
  return e.replace(/\./g, "").replace(Ag, " ").toLowerCase();
}
function Lt(e, n) {
  return e === null ? null : {
    regex: RegExp(e.map(f2).join("|")),
    deser: ([t]) => e.findIndex((r) => pf(t) === pf(r)) + n
  };
}
function mf(e, n) {
  return { regex: e, deser: ([, t, r]) => gs(t, r), groups: n };
}
function So(e) {
  return { regex: e, deser: ([n]) => n };
}
function p2(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function m2(e, n) {
  const t = _t(n), r = _t(n, "{2}"), i = _t(n, "{3}"), o = _t(n, "{4}"), a = _t(n, "{6}"), s = _t(n, "{1,2}"), l = _t(n, "{1,3}"), u = _t(n, "{1,6}"), c = _t(n, "{1,9}"), d = _t(n, "{2,4}"), p = _t(n, "{4,6}"), f = (g) => ({ regex: RegExp(p2(g.val)), deser: ([v]) => v, literal: !0 }), h = ((g) => {
    if (e.literal)
      return f(g);
    switch (g.val) {
      case "G":
        return Lt(n.eras("short"), 0);
      case "GG":
        return Lt(n.eras("long"), 0);
      case "y":
        return xe(u);
      case "yy":
        return xe(d, jl);
      case "yyyy":
        return xe(o);
      case "yyyyy":
        return xe(p);
      case "yyyyyy":
        return xe(a);
      case "M":
        return xe(s);
      case "MM":
        return xe(r);
      case "MMM":
        return Lt(n.months("short", !0), 1);
      case "MMMM":
        return Lt(n.months("long", !0), 1);
      case "L":
        return xe(s);
      case "LL":
        return xe(r);
      case "LLL":
        return Lt(n.months("short", !1), 1);
      case "LLLL":
        return Lt(n.months("long", !1), 1);
      case "d":
        return xe(s);
      case "dd":
        return xe(r);
      case "o":
        return xe(l);
      case "ooo":
        return xe(i);
      case "HH":
        return xe(r);
      case "H":
        return xe(s);
      case "hh":
        return xe(r);
      case "h":
        return xe(s);
      case "mm":
        return xe(r);
      case "m":
        return xe(s);
      case "q":
        return xe(s);
      case "qq":
        return xe(r);
      case "s":
        return xe(s);
      case "ss":
        return xe(r);
      case "S":
        return xe(l);
      case "SSS":
        return xe(i);
      case "u":
        return So(c);
      case "uu":
        return So(s);
      case "uuu":
        return xe(t);
      case "a":
        return Lt(n.meridiems(), 0);
      case "kkkk":
        return xe(o);
      case "kk":
        return xe(d, jl);
      case "W":
        return xe(s);
      case "WW":
        return xe(r);
      case "E":
      case "c":
        return xe(t);
      case "EEE":
        return Lt(n.weekdays("short", !1), 1);
      case "EEEE":
        return Lt(n.weekdays("long", !1), 1);
      case "ccc":
        return Lt(n.weekdays("short", !0), 1);
      case "cccc":
        return Lt(n.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return mf(new RegExp(`([+-]${s.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return mf(new RegExp(`([+-]${s.source})(${r.source})?`), 2);
      case "z":
        return So(/[a-z_+-/]{1,256}?/i);
      case " ":
        return So(/[^\S\n\r]/);
      default:
        return f(g);
    }
  })(e) || {
    invalidReason: c2
  };
  return h.token = e, h;
}
const h2 = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function g2(e, n, t) {
  const { type: r, value: i } = e;
  if (r === "literal") {
    const l = /^\s+$/.test(i);
    return {
      literal: !l,
      val: l ? " " : i
    };
  }
  const o = n[r];
  let a = r;
  r === "hour" && (n.hour12 != null ? a = n.hour12 ? "hour12" : "hour24" : n.hourCycle != null ? n.hourCycle === "h11" || n.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
  let s = h2[a];
  if (typeof s == "object" && (s = s[o]), s)
    return {
      literal: !1,
      val: s
    };
}
function v2(e) {
  return [`^${e.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, e];
}
function b2(e, n, t) {
  const r = e.match(n);
  if (r) {
    const i = {};
    let o = 1;
    for (const a in t)
      if (Lr(t, a)) {
        const s = t[a], l = s.groups ? s.groups + 1 : 1;
        !s.literal && s.token && (i[s.token.val[0]] = s.deser(r.slice(o, o + l))), o += l;
      }
    return [r, i];
  } else
    return [r, {}];
}
function y2(e) {
  const n = (o) => {
    switch (o) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, r;
  return ie(e.z) || (t = mn.create(e.z)), ie(e.Z) || (t || (t = new mt(e.Z)), r = e.Z), ie(e.q) || (e.M = (e.q - 1) * 3 + 1), ie(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), ie(e.u) || (e.S = sc(e.u)), [Object.keys(e).reduce((o, a) => {
    const s = n(a);
    return s && (o[s] = e[a]), o;
  }, {}), t, r];
}
let ol = null;
function w2() {
  return ol || (ol = le.fromMillis(1555555555555)), ol;
}
function C2(e, n) {
  if (e.literal)
    return e;
  const t = ut.macroTokenToFormatOpts(e.val), r = Ng(t, n);
  return r == null || r.includes(void 0) ? e : r;
}
function Pg(e, n) {
  return Array.prototype.concat(...e.map((t) => C2(t, n)));
}
function Fg(e, n, t) {
  const r = Pg(ut.parseFormat(t), e), i = r.map((a) => m2(a, e)), o = i.find((a) => a.invalidReason);
  if (o)
    return { input: n, tokens: r, invalidReason: o.invalidReason };
  {
    const [a, s] = v2(i), l = RegExp(a, "i"), [u, c] = b2(n, l, s), [d, p, f] = c ? y2(c) : [null, null, void 0];
    if (Lr(c, "a") && Lr(c, "H"))
      throw new Ir(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: n, tokens: r, regex: l, rawMatches: u, matches: c, result: d, zone: p, specificOffset: f };
  }
}
function I2(e, n, t) {
  const { result: r, zone: i, specificOffset: o, invalidReason: a } = Fg(e, n, t);
  return [r, i, o, a];
}
function Ng(e, n) {
  if (!e)
    return null;
  const r = ut.create(n, e).dtFormatter(w2()), i = r.formatToParts(), o = r.resolvedOptions();
  return i.map((a) => g2(a, e, o));
}
const al = "Invalid DateTime", hf = 864e13;
function Eo(e) {
  return new Gt("unsupported zone", `the zone "${e.name}" is not supported`);
}
function sl(e) {
  return e.weekData === null && (e.weekData = wa(e.c)), e.weekData;
}
function ll(e) {
  return e.localWeekData === null && (e.localWeekData = wa(
    e.c,
    e.loc.getMinDaysInFirstWeek(),
    e.loc.getStartOfWeek()
  )), e.localWeekData;
}
function Zn(e, n) {
  const t = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new le({ ...t, ...n, old: t });
}
function _g(e, n, t) {
  let r = e - n * 60 * 1e3;
  const i = t.offset(r);
  if (n === i)
    return [r, n];
  r -= (i - n) * 60 * 1e3;
  const o = t.offset(r);
  return i === o ? [r, i] : [e - Math.min(i, o) * 60 * 1e3, Math.max(i, o)];
}
function Do(e, n) {
  e += n * 60 * 1e3;
  const t = new Date(e);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function Go(e, n, t) {
  return _g(hs(e), n, t);
}
function gf(e, n) {
  const t = e.o, r = e.c.year + Math.trunc(n.years), i = e.c.month + Math.trunc(n.months) + Math.trunc(n.quarters) * 3, o = {
    ...e.c,
    year: r,
    month: i,
    day: Math.min(e.c.day, Ca(r, i)) + Math.trunc(n.days) + Math.trunc(n.weeks) * 7
  }, a = ye.fromObject({
    years: n.years - Math.trunc(n.years),
    quarters: n.quarters - Math.trunc(n.quarters),
    months: n.months - Math.trunc(n.months),
    weeks: n.weeks - Math.trunc(n.weeks),
    days: n.days - Math.trunc(n.days),
    hours: n.hours,
    minutes: n.minutes,
    seconds: n.seconds,
    milliseconds: n.milliseconds
  }).as("milliseconds"), s = hs(o);
  let [l, u] = _g(s, t, e.zone);
  return a !== 0 && (l += a, u = e.zone.offset(l)), { ts: l, o: u };
}
function ii(e, n, t, r, i, o) {
  const { setZone: a, zone: s } = t;
  if (e && Object.keys(e).length !== 0 || n) {
    const l = n || s, u = le.fromObject(e, {
      ...t,
      zone: l,
      specificOffset: o
    });
    return a ? u : u.setZone(s);
  } else
    return le.invalid(
      new Gt("unparsable", `the input "${i}" can't be parsed as ${r}`)
    );
}
function To(e, n, t = !0) {
  return e.isValid ? ut.create(Fe.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(e, n) : null;
}
function ul(e, n) {
  const t = e.c.year > 9999 || e.c.year < 0;
  let r = "";
  return t && e.c.year >= 0 && (r += "+"), r += Ke(e.c.year, t ? 6 : 4), n ? (r += "-", r += Ke(e.c.month), r += "-", r += Ke(e.c.day)) : (r += Ke(e.c.month), r += Ke(e.c.day)), r;
}
function vf(e, n, t, r, i, o) {
  let a = Ke(e.c.hour);
  return n ? (a += ":", a += Ke(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !t) && (a += ":")) : a += Ke(e.c.minute), (e.c.millisecond !== 0 || e.c.second !== 0 || !t) && (a += Ke(e.c.second), (e.c.millisecond !== 0 || !r) && (a += ".", a += Ke(e.c.millisecond, 3))), i && (e.isOffsetFixed && e.offset === 0 && !o ? a += "Z" : e.o < 0 ? (a += "-", a += Ke(Math.trunc(-e.o / 60)), a += ":", a += Ke(Math.trunc(-e.o % 60))) : (a += "+", a += Ke(Math.trunc(e.o / 60)), a += ":", a += Ke(Math.trunc(e.o % 60)))), o && (a += "[" + e.zone.ianaName + "]"), a;
}
const Lg = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, x2 = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, S2 = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Vg = ["year", "month", "day", "hour", "minute", "second", "millisecond"], E2 = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], D2 = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function T2(e) {
  const n = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[e.toLowerCase()];
  if (!n) throw new Gh(e);
  return n;
}
function bf(e) {
  switch (e.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return T2(e);
  }
}
function yf(e, n) {
  const t = En(n.zone, Je.defaultZone), r = Fe.fromObject(n), i = Je.now();
  let o, a;
  if (ie(e.year))
    o = i;
  else {
    for (const u of Vg)
      ie(e[u]) && (e[u] = Lg[u]);
    const s = cg(e) || dg(e);
    if (s)
      return le.invalid(s);
    const l = t.offset(i);
    [o, a] = Go(e, l, t);
  }
  return new le({ ts: o, zone: t, loc: r, o: a });
}
function wf(e, n, t) {
  const r = ie(t.round) ? !0 : t.round, i = (a, s) => (a = lc(a, r || t.calendary ? 0 : 2, !0), n.loc.clone(t).relFormatter(t).format(a, s)), o = (a) => t.calendary ? n.hasSame(e, a) ? 0 : n.startOf(a).diff(e.startOf(a), a).get(a) : n.diff(e, a).get(a);
  if (t.unit)
    return i(o(t.unit), t.unit);
  for (const a of t.units) {
    const s = o(a);
    if (Math.abs(s) >= 1)
      return i(s, a);
  }
  return i(e > n ? -0 : 0, t.units[t.units.length - 1]);
}
function Cf(e) {
  let n = {}, t;
  return e.length > 0 && typeof e[e.length - 1] == "object" ? (n = e[e.length - 1], t = Array.from(e).slice(0, e.length - 1)) : t = Array.from(e), [n, t];
}
class le {
  /**
   * @access private
   */
  constructor(n) {
    const t = n.zone || Je.defaultZone;
    let r = n.invalid || (Number.isNaN(n.ts) ? new Gt("invalid input") : null) || (t.isValid ? null : Eo(t));
    this.ts = ie(n.ts) ? Je.now() : n.ts;
    let i = null, o = null;
    if (!r)
      if (n.old && n.old.ts === this.ts && n.old.zone.equals(t))
        [i, o] = [n.old.c, n.old.o];
      else {
        const s = t.offset(this.ts);
        i = Do(this.ts, s), r = Number.isNaN(i.year) ? new Gt("invalid input") : null, i = r ? null : i, o = r ? null : s;
      }
    this._zone = t, this.loc = n.loc || Fe.create(), this.invalid = r, this.weekData = null, this.localWeekData = null, this.c = i, this.o = o, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new le({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [n, t] = Cf(arguments), [r, i, o, a, s, l, u] = t;
    return yf({ year: r, month: i, day: o, hour: a, minute: s, second: l, millisecond: u }, n);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [n, t] = Cf(arguments), [r, i, o, a, s, l, u] = t;
    return n.zone = mt.utcInstance, yf({ year: r, month: i, day: o, hour: a, minute: s, second: l, millisecond: u }, n);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(n, t = {}) {
    const r = nT(n) ? n.valueOf() : NaN;
    if (Number.isNaN(r))
      return le.invalid("invalid input");
    const i = En(t.zone, Je.defaultZone);
    return i.isValid ? new le({
      ts: r,
      zone: i,
      loc: Fe.fromObject(t)
    }) : le.invalid(Eo(i));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(n, t = {}) {
    if (rr(n))
      return n < -hf || n > hf ? le.invalid("Timestamp out of range") : new le({
        ts: n,
        zone: En(t.zone, Je.defaultZone),
        loc: Fe.fromObject(t)
      });
    throw new ht(
      `fromMillis requires a numerical input, but received a ${typeof n} with value ${n}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(n, t = {}) {
    if (rr(n))
      return new le({
        ts: n * 1e3,
        zone: En(t.zone, Je.defaultZone),
        loc: Fe.fromObject(t)
      });
    throw new ht("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(n, t = {}) {
    n = n || {};
    const r = En(t.zone, Je.defaultZone);
    if (!r.isValid)
      return le.invalid(Eo(r));
    const i = Fe.fromObject(t), o = Ia(n, bf), { minDaysInFirstWeek: a, startOfWeek: s } = rf(o, i), l = Je.now(), u = ie(t.specificOffset) ? r.offset(l) : t.specificOffset, c = !ie(o.ordinal), d = !ie(o.year), p = !ie(o.month) || !ie(o.day), f = d || p, m = o.weekYear || o.weekNumber;
    if ((f || c) && m)
      throw new Ir(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (p && c)
      throw new Ir("Can't mix ordinal dates with month/day");
    const h = m || o.weekday && !f;
    let g, v, y = Do(l, u);
    h ? (g = E2, v = x2, y = wa(y, a, s)) : c ? (g = D2, v = S2, y = il(y)) : (g = Vg, v = Lg);
    let b = !1;
    for (const _ of g) {
      const k = o[_];
      ie(k) ? b ? o[_] = v[_] : o[_] = y[_] : b = !0;
    }
    const I = h ? KD(o, a, s) : c ? eT(o) : cg(o), w = I || dg(o);
    if (w)
      return le.invalid(w);
    const S = h ? tf(o, a, s) : c ? nf(o) : o, [x, E] = Go(S, u, r), D = new le({
      ts: x,
      zone: r,
      o: E,
      loc: i
    });
    return o.weekday && f && n.weekday !== D.weekday ? le.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${o.weekday} and a date of ${D.toISO()}`
    ) : D;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(n, t = {}) {
    const [r, i] = ZT(n);
    return ii(r, i, t, "ISO 8601", n);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(n, t = {}) {
    const [r, i] = XT(n);
    return ii(r, i, t, "RFC 2822", n);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(n, t = {}) {
    const [r, i] = zT(n);
    return ii(r, i, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(n, t, r = {}) {
    if (ie(n) || ie(t))
      throw new ht("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: o = null } = r, a = Fe.fromOpts({
      locale: i,
      numberingSystem: o,
      defaultToEN: !0
    }), [s, l, u, c] = I2(a, n, t);
    return c ? le.invalid(c) : ii(s, l, r, `format ${t}`, n, u);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(n, t, r = {}) {
    return le.fromFormat(n, t, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(n, t = {}) {
    const [r, i] = e2(n);
    return ii(r, i, t, "SQL", n);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(n, t = null) {
    if (!n)
      throw new ht("need to specify a reason the DateTime is invalid");
    const r = n instanceof Gt ? n : new Gt(n, t);
    if (Je.throwOnInvalid)
      throw new OD(r);
    return new le({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(n) {
    return n && n.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(n, t = {}) {
    const r = Ng(n, Fe.fromObject(t));
    return r ? r.map((i) => i ? i.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(n, t = {}) {
    return Pg(ut.parseFormat(n), Fe.fromObject(t)).map((i) => i.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(n) {
    return this[n];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? sl(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? sl(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? sl(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? ll(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? ll(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? ll(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? il(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? xo.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? xo.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? xo.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? xo.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const n = 864e5, t = 6e4, r = hs(this.c), i = this.zone.offset(r - n), o = this.zone.offset(r + n), a = this.zone.offset(r - i * t), s = this.zone.offset(r - o * t);
    if (a === s)
      return [this];
    const l = r - a * t, u = r - s * t, c = Do(l, a), d = Do(u, s);
    return c.hour === d.hour && c.minute === d.minute && c.second === d.second && c.millisecond === d.millisecond ? [Zn(this, { ts: l }), Zn(this, { ts: u })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ro(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Ca(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Dr(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ni(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ni(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(n = {}) {
    const { locale: t, numberingSystem: r, calendar: i } = ut.create(
      this.loc.clone(n),
      n
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: i };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(n = 0, t = {}) {
    return this.setZone(mt.instance(n), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Je.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(n, { keepLocalTime: t = !1, keepCalendarTime: r = !1 } = {}) {
    if (n = En(n, Je.defaultZone), n.equals(this.zone))
      return this;
    if (n.isValid) {
      let i = this.ts;
      if (t || r) {
        const o = n.offset(this.ts), a = this.toObject();
        [i] = Go(a, o, n);
      }
      return Zn(this, { ts: i, zone: n });
    } else
      return le.invalid(Eo(n));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: n, numberingSystem: t, outputCalendar: r } = {}) {
    const i = this.loc.clone({ locale: n, numberingSystem: t, outputCalendar: r });
    return Zn(this, { loc: i });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(n) {
    return this.reconfigure({ locale: n });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(n) {
    if (!this.isValid) return this;
    const t = Ia(n, bf), { minDaysInFirstWeek: r, startOfWeek: i } = rf(t, this.loc), o = !ie(t.weekYear) || !ie(t.weekNumber) || !ie(t.weekday), a = !ie(t.ordinal), s = !ie(t.year), l = !ie(t.month) || !ie(t.day), u = s || l, c = t.weekYear || t.weekNumber;
    if ((u || a) && c)
      throw new Ir(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new Ir("Can't mix ordinal dates with month/day");
    let d;
    o ? d = tf(
      { ...wa(this.c, r, i), ...t },
      r,
      i
    ) : ie(t.ordinal) ? (d = { ...this.toObject(), ...t }, ie(t.day) && (d.day = Math.min(Ca(d.year, d.month), d.day))) : d = nf({ ...il(this.c), ...t });
    const [p, f] = Go(d, this.o, this.zone);
    return Zn(this, { ts: p, o: f });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(n) {
    if (!this.isValid) return this;
    const t = ye.fromDurationLike(n);
    return Zn(this, gf(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(n) {
    if (!this.isValid) return this;
    const t = ye.fromDurationLike(n).negate();
    return Zn(this, gf(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(n, { useLocaleWeeks: t = !1 } = {}) {
    if (!this.isValid) return this;
    const r = {}, i = ye.normalizeUnit(n);
    switch (i) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (i === "weeks")
      if (t) {
        const o = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < o && (r.weekNumber = this.weekNumber - 1), r.weekday = o;
      } else
        r.weekday = 1;
    if (i === "quarters") {
      const o = Math.ceil(this.month / 3);
      r.month = (o - 1) * 3 + 1;
    }
    return this.set(r);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(n, t) {
    return this.isValid ? this.plus({ [n]: 1 }).startOf(n, t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(n, t = {}) {
    return this.isValid ? ut.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, n) : al;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(n = ya, t = {}) {
    return this.isValid ? ut.create(this.loc.clone(t), n).formatDateTime(this) : al;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(n = {}) {
    return this.isValid ? ut.create(this.loc.clone(n), n).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: n = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: i = !0,
    extendedZone: o = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const a = n === "extended";
    let s = ul(this, a);
    return s += "T", s += vf(this, a, t, r, i, o), s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: n = "extended" } = {}) {
    return this.isValid ? ul(this, n === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return To(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: n = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: i = !1,
    extendedZone: o = !1,
    format: a = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + vf(
      this,
      a === "extended",
      t,
      n,
      r,
      o
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return To(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return To(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? ul(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: n = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (t || n) && (r && (i += " "), t ? i += "z" : n && (i += "ZZ")), To(this, i, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(n = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(n)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : al;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(n = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return n.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(n, t = "milliseconds", r = {}) {
    if (!this.isValid || !n.isValid)
      return ye.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, o = rT(t).map(ye.normalizeUnit), a = n.valueOf() > this.valueOf(), s = a ? this : n, l = a ? n : this, u = s2(s, l, o, i);
    return a ? u.negate() : u;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(n = "milliseconds", t = {}) {
    return this.diff(le.now(), n, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(n) {
    return this.isValid ? Xe.fromDateTimes(this, n) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(n, t, r) {
    if (!this.isValid) return !1;
    const i = n.valueOf(), o = this.setZone(n.zone, { keepLocalTime: !0 });
    return o.startOf(t, r) <= i && i <= o.endOf(t, r);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(n) {
    return this.isValid && n.isValid && this.valueOf() === n.valueOf() && this.zone.equals(n.zone) && this.loc.equals(n.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(n = {}) {
    if (!this.isValid) return null;
    const t = n.base || le.fromObject({}, { zone: this.zone }), r = n.padding ? this < t ? -n.padding : n.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], o = n.unit;
    return Array.isArray(n.unit) && (i = n.unit, o = void 0), wf(t, this.plus(r), {
      ...n,
      numeric: "always",
      units: i,
      unit: o
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(n = {}) {
    return this.isValid ? wf(n.base || le.fromObject({}, { zone: this.zone }), this, {
      ...n,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...n) {
    if (!n.every(le.isDateTime))
      throw new ht("min requires all arguments be DateTimes");
    return of(n, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...n) {
    if (!n.every(le.isDateTime))
      throw new ht("max requires all arguments be DateTimes");
    return of(n, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(n, t, r = {}) {
    const { locale: i = null, numberingSystem: o = null } = r, a = Fe.fromOpts({
      locale: i,
      numberingSystem: o,
      defaultToEN: !0
    });
    return Fg(a, n, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(n, t, r = {}) {
    return le.fromFormatExplain(n, t, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return ya;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return $h;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return AD;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Hh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Bh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Yh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Zh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Xh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return zh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return jh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Uh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Jh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Qh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return qh;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Kh;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return eg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return tg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return PD;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return ng;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return rg;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return ig;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return og;
  }
}
function oi(e) {
  if (le.isDateTime(e))
    return e;
  if (e && e.valueOf && rr(e.valueOf()))
    return le.fromJSDate(e);
  if (e && typeof e == "object")
    return le.fromObject(e);
  throw new ht(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
function GR({
  label: e,
  name: n,
  isRequired: t = !1,
  selectedDate: r,
  onChangeHandler: i,
  disabled: o = !1,
  minDate: a,
  error: s = "",
  color: l = "primary",
  className: u = "",
  ...c
}) {
  const [d, p] = ae(r);
  return Ie(() => {
    d && i(d);
  }, [d]), /* @__PURE__ */ ce("div", { className: He(u), children: [
    e ? /* @__PURE__ */ L("div", { className: "mb-2", children: /* @__PURE__ */ ce("label", { htmlFor: n, className: "text-grayscale-100 cds-body-sm", children: [
      e,
      " ",
      t ? "*" : null
    ] }) }) : null,
    /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ L(
        DD,
        {
          selected: d,
          name: n,
          disabled: o,
          dateFormat: "dd/MM/yyyy",
          id: n,
          minDate: a ? le.fromJSDate(new Date(a)).plus({ days: 1 }).toJSDate() : /* @__PURE__ */ new Date(),
          showIcon: !0,
          dayClassName: (f) => d && f.toDateString() === d.toDateString() ? `!${`bg-${l}-300`} font-medium` : "bg-transparent",
          icon: /* @__PURE__ */ L(
            MD,
            {
              className: "!w-6 !h-6 right-0 top-1 text-grayscale-75"
            }
          ),
          ...c,
          onChange: (f) => {
            p(f);
          },
          className: `w-full h-12 py-3.5 px-6 cds-body-sm text-grayscale-500 border-0 rounded-md shadow-sm ring-1 ring-inset ring-grayscale-100
            placeholder:text-grayscale-100 focus:outline-none ${`hover-ring-${l}-300`} disabled:pointer-events-none ${`focus-ring-${l}-300`} date:disabled:cursor-default date:disabled:pointer-events-none date:disabled:text-grayscale-200 date:cds-body-sm date:text-grayscale-200 date:hover:cursor-pointer date:hover:text-grayscale-500 date:border-none date:bg-slate-100`
        }
      ),
      s && /* @__PURE__ */ L("span", { className: "cds-caption text-danger", children: s })
    ] })
  ] });
}
function M2(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368 144 144m224 0L144 368" }, child: [] }] })(e);
}
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, dr(e);
}
function O2(e, n) {
  if (dr(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n || "default");
    if (dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Wg(e) {
  var n = O2(e, "string");
  return dr(n) == "symbol" ? n : n + "";
}
function mi(e, n, t) {
  return (n = Wg(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function If(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function q(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? If(Object(t), !0).forEach(function(r) {
      mi(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : If(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function k2(e) {
  if (Array.isArray(e)) return e;
}
function R2(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, i, o, a, s = [], l = !0, u = !1;
    try {
      if (o = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t) return;
        l = !1;
      } else for (; !(l = (r = o.call(t)).done) && (s.push(r.value), s.length !== n); l = !0) ;
    } catch (c) {
      u = !0, i = c;
    } finally {
      try {
        if (!l && t.return != null && (a = t.return(), Object(a) !== a)) return;
      } finally {
        if (u) throw i;
      }
    }
    return s;
  }
}
function Ul(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Gg(e, n) {
  if (e) {
    if (typeof e == "string") return Ul(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ul(e, n) : void 0;
  }
}
function A2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fn(e, n) {
  return k2(e) || R2(e, n) || Gg(e, n) || A2();
}
function P2(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) >= 0) continue;
    t[r] = e[r];
  }
  return t;
}
function yn(e, n) {
  if (e == null) return {};
  var t, r, i = P2(e, n);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || {}.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
  }
  return i;
}
var F2 = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function N2(e) {
  var n = e.defaultInputValue, t = n === void 0 ? "" : n, r = e.defaultMenuIsOpen, i = r === void 0 ? !1 : r, o = e.defaultValue, a = o === void 0 ? null : o, s = e.inputValue, l = e.menuIsOpen, u = e.onChange, c = e.onInputChange, d = e.onMenuClose, p = e.onMenuOpen, f = e.value, m = yn(e, F2), h = ae(s !== void 0 ? s : t), g = fn(h, 2), v = g[0], y = g[1], b = ae(l !== void 0 ? l : i), I = fn(b, 2), w = I[0], S = I[1], x = ae(f !== void 0 ? f : a), E = fn(x, 2), D = E[0], _ = E[1], k = pe(function(G, O) {
    typeof u == "function" && u(G, O), _(G);
  }, [u]), F = pe(function(G, O) {
    var z;
    typeof c == "function" && (z = c(G, O)), y(z !== void 0 ? z : G);
  }, [c]), A = pe(function() {
    typeof p == "function" && p(), S(!0);
  }, [p]), N = pe(function() {
    typeof d == "function" && d(), S(!1);
  }, [d]), M = s !== void 0 ? s : v, V = l !== void 0 ? l : w, R = f !== void 0 ? f : D;
  return q(q({}, m), {}, {
    inputValue: M,
    menuIsOpen: V,
    onChange: k,
    onInputChange: F,
    onMenuClose: N,
    onMenuOpen: A,
    value: R
  });
}
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ee.apply(null, arguments);
}
function _2(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function xf(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Wg(r.key), r);
  }
}
function L2(e, n, t) {
  return n && xf(e.prototype, n), t && xf(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Jl(e, n) {
  return Jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
    return t.__proto__ = r, t;
  }, Jl(e, n);
}
function V2(e, n) {
  if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), n && Jl(e, n);
}
function xa(e) {
  return xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, xa(e);
}
function $g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($g = function() {
    return !!e;
  })();
}
function W2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function G2(e, n) {
  if (n && (dr(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return W2(e);
}
function $2(e) {
  var n = $g();
  return function() {
    var t, r = xa(e);
    if (n) {
      var i = xa(this).constructor;
      t = Reflect.construct(r, arguments, i);
    } else t = r.apply(this, arguments);
    return G2(this, t);
  };
}
function H2(e) {
  if (Array.isArray(e)) return Ul(e);
}
function B2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Y2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pc(e) {
  return H2(e) || B2(e) || Gg(e) || Y2();
}
function Z2(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function X2(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var z2 = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    this._insertTag = function(i) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, o), r.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, n.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(X2(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var a = Z2(i);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', s);
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), lt = "-ms-", Sa = "-moz-", Se = "-webkit-", mc = "comm", hc = "rule", gc = "decl", j2 = "@import", Hg = "@keyframes", U2 = "@layer", J2 = Math.abs, bs = String.fromCharCode, Q2 = Object.assign;
function q2(e, n) {
  return at(e, 0) ^ 45 ? (((n << 2 ^ at(e, 0)) << 2 ^ at(e, 1)) << 2 ^ at(e, 2)) << 2 ^ at(e, 3) : 0;
}
function Bg(e) {
  return e.trim();
}
function K2(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Ee(e, n, t) {
  return e.replace(n, t);
}
function Ql(e, n) {
  return e.indexOf(n);
}
function at(e, n) {
  return e.charCodeAt(n) | 0;
}
function _i(e, n, t) {
  return e.slice(n, t);
}
function zt(e) {
  return e.length;
}
function vc(e) {
  return e.length;
}
function Mo(e, n) {
  return n.push(e), e;
}
function eM(e, n) {
  return e.map(n).join("");
}
var ys = 1, Vr = 1, Yg = 0, bt = 0, et = 0, Jr = "";
function ws(e, n, t, r, i, o, a) {
  return { value: e, root: n, parent: t, type: r, props: i, children: o, line: ys, column: Vr, length: a, return: "" };
}
function ai(e, n) {
  return Q2(ws("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function tM() {
  return et;
}
function nM() {
  return et = bt > 0 ? at(Jr, --bt) : 0, Vr--, et === 10 && (Vr = 1, ys--), et;
}
function xt() {
  return et = bt < Yg ? at(Jr, bt++) : 0, Vr++, et === 10 && (Vr = 1, ys++), et;
}
function nn() {
  return at(Jr, bt);
}
function $o() {
  return bt;
}
function ao(e, n) {
  return _i(Jr, e, n);
}
function Li(e) {
  switch (e) {
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
function Zg(e) {
  return ys = Vr = 1, Yg = zt(Jr = e), bt = 0, [];
}
function Xg(e) {
  return Jr = "", e;
}
function Ho(e) {
  return Bg(ao(bt - 1, ql(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rM(e) {
  for (; (et = nn()) && et < 33; )
    xt();
  return Li(e) > 2 || Li(et) > 3 ? "" : " ";
}
function iM(e, n) {
  for (; --n && xt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return ao(e, $o() + (n < 6 && nn() == 32 && xt() == 32));
}
function ql(e) {
  for (; xt(); )
    switch (et) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ql(et);
        break;
      case 40:
        e === 41 && ql(e);
        break;
      case 92:
        xt();
        break;
    }
  return bt;
}
function oM(e, n) {
  for (; xt() && e + et !== 57; )
    if (e + et === 84 && nn() === 47)
      break;
  return "/*" + ao(n, bt - 1) + "*" + bs(e === 47 ? e : xt());
}
function aM(e) {
  for (; !Li(nn()); )
    xt();
  return ao(e, bt);
}
function sM(e) {
  return Xg(Bo("", null, null, null, [""], e = Zg(e), 0, [0], e));
}
function Bo(e, n, t, r, i, o, a, s, l) {
  for (var u = 0, c = 0, d = a, p = 0, f = 0, m = 0, h = 1, g = 1, v = 1, y = 0, b = "", I = i, w = o, S = r, x = b; g; )
    switch (m = y, y = xt()) {
      case 40:
        if (m != 108 && at(x, d - 1) == 58) {
          Ql(x += Ee(Ho(y), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ho(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += rM(m);
        break;
      case 92:
        x += iM($o() - 1, 7);
        continue;
      case 47:
        switch (nn()) {
          case 42:
          case 47:
            Mo(lM(oM(xt(), $o()), n, t), l);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * h:
        s[u++] = zt(x) * v;
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            v == -1 && (x = Ee(x, /\f/g, "")), f > 0 && zt(x) - d && Mo(f > 32 ? Ef(x + ";", r, t, d - 1) : Ef(Ee(x, " ", "") + ";", r, t, d - 2), l);
            break;
          case 59:
            x += ";";
          default:
            if (Mo(S = Sf(x, n, t, u, c, i, s, b, I = [], w = [], d), o), y === 123)
              if (c === 0)
                Bo(x, n, S, S, I, o, d, s, w);
              else
                switch (p === 99 && at(x, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bo(e, S, S, r && Mo(Sf(e, S, S, 0, 0, i, s, b, i, I = [], d), w), i, w, d, s, r ? I : w);
                    break;
                  default:
                    Bo(x, S, S, S, [""], w, 0, s, w);
                }
        }
        u = c = f = 0, h = v = 1, b = x = "", d = a;
        break;
      case 58:
        d = 1 + zt(x), f = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && nM() == 125)
            continue;
        }
        switch (x += bs(y), y * h) {
          case 38:
            v = c > 0 ? 1 : (x += "\f", -1);
            break;
          case 44:
            s[u++] = (zt(x) - 1) * v, v = 1;
            break;
          case 64:
            nn() === 45 && (x += Ho(xt())), p = nn(), c = d = zt(b = x += aM($o())), y++;
            break;
          case 45:
            m === 45 && zt(x) == 2 && (h = 0);
        }
    }
  return o;
}
function Sf(e, n, t, r, i, o, a, s, l, u, c) {
  for (var d = i - 1, p = i === 0 ? o : [""], f = vc(p), m = 0, h = 0, g = 0; m < r; ++m)
    for (var v = 0, y = _i(e, d + 1, d = J2(h = a[m])), b = e; v < f; ++v)
      (b = Bg(h > 0 ? p[v] + " " + y : Ee(y, /&\f/g, p[v]))) && (l[g++] = b);
  return ws(e, n, t, i === 0 ? hc : s, l, u, c);
}
function lM(e, n, t) {
  return ws(e, n, t, mc, bs(tM()), _i(e, 2, -2), 0);
}
function Ef(e, n, t, r) {
  return ws(e, n, t, gc, _i(e, 0, r), _i(e, r + 1, -1), r);
}
function Mr(e, n) {
  for (var t = "", r = vc(e), i = 0; i < r; i++)
    t += n(e[i], i, e, n) || "";
  return t;
}
function uM(e, n, t, r) {
  switch (e.type) {
    case U2:
      if (e.children.length) break;
    case j2:
    case gc:
      return e.return = e.return || e.value;
    case mc:
      return "";
    case Hg:
      return e.return = e.value + "{" + Mr(e.children, r) + "}";
    case hc:
      e.value = e.props.join(",");
  }
  return zt(t = Mr(e.children, r)) ? e.return = e.value + "{" + t + "}" : "";
}
function cM(e) {
  var n = vc(e);
  return function(t, r, i, o) {
    for (var a = "", s = 0; s < n; s++)
      a += e[s](t, r, i, o) || "";
    return a;
  };
}
function dM(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function fM(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var pM = function(n, t, r) {
  for (var i = 0, o = 0; i = o, o = nn(), i === 38 && o === 12 && (t[r] = 1), !Li(o); )
    xt();
  return ao(n, bt);
}, mM = function(n, t) {
  var r = -1, i = 44;
  do
    switch (Li(i)) {
      case 0:
        i === 38 && nn() === 12 && (t[r] = 1), n[r] += pM(bt - 1, t, r);
        break;
      case 2:
        n[r] += Ho(i);
        break;
      case 4:
        if (i === 44) {
          n[++r] = nn() === 58 ? "&\f" : "", t[r] = n[r].length;
          break;
        }
      default:
        n[r] += bs(i);
    }
  while (i = xt());
  return n;
}, hM = function(n, t) {
  return Xg(mM(Zg(n), t));
}, Df = /* @__PURE__ */ new WeakMap(), gM = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var t = n.value, r = n.parent, i = n.column === r.column && n.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(n.props.length === 1 && t.charCodeAt(0) !== 58 && !Df.get(r)) && !i) {
      Df.set(n, !0);
      for (var o = [], a = hM(t, o), s = r.props, l = 0, u = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, u++)
          n.props[u] = o[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, vM = function(n) {
  if (n.type === "decl") {
    var t = n.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
}, bM = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", yM = function(n) {
  return n.type === "comm" && n.children.indexOf(bM) > -1;
}, wM = function(n) {
  return function(t, r, i) {
    if (!(t.type !== "rule" || n.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var a = !!t.parent, s = a ? t.parent.children : (
          // global rule at the root level
          i
        ), l = s.length - 1; l >= 0; l--) {
          var u = s[l];
          if (u.line < t.line)
            break;
          if (u.column < t.column) {
            if (yM(u))
              return;
            break;
          }
        }
        o.forEach(function(c) {
          console.error('The pseudo class "' + c + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + c.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, zg = function(n) {
  return n.type.charCodeAt(1) === 105 && n.type.charCodeAt(0) === 64;
}, CM = function(n, t) {
  for (var r = n - 1; r >= 0; r--)
    if (!zg(t[r]))
      return !0;
  return !1;
}, Tf = function(n) {
  n.type = "", n.value = "", n.return = "", n.children = "", n.props = "";
}, IM = function(n, t, r) {
  zg(n) && (n.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Tf(n)) : CM(t, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Tf(n)));
};
function jg(e, n) {
  switch (q2(e, n)) {
    case 5103:
      return Se + "print-" + e + e;
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
      return Se + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Se + e + Sa + e + lt + e + e;
    case 6828:
    case 4268:
      return Se + e + lt + e + e;
    case 6165:
      return Se + e + lt + "flex-" + e + e;
    case 5187:
      return Se + e + Ee(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + lt + "flex-$1$2") + e;
    case 5443:
      return Se + e + lt + "flex-item-" + Ee(e, /flex-|-self/, "") + e;
    case 4675:
      return Se + e + lt + "flex-line-pack" + Ee(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Se + e + lt + Ee(e, "shrink", "negative") + e;
    case 5292:
      return Se + e + lt + Ee(e, "basis", "preferred-size") + e;
    case 6060:
      return Se + "box-" + Ee(e, "-grow", "") + Se + e + lt + Ee(e, "grow", "positive") + e;
    case 4554:
      return Se + Ee(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
    case 6187:
      return Ee(Ee(Ee(e, /(zoom-|grab)/, Se + "$1"), /(image-set)/, Se + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ee(e, /(image-set\([^]*)/, Se + "$1$`$1");
    case 4968:
      return Ee(Ee(e, /(.+:)(flex-)?(.*)/, Se + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Se + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ee(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
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
      if (zt(e) - 1 - n > 6) switch (at(e, n + 1)) {
        case 109:
          if (at(e, n + 4) !== 45) break;
        case 102:
          return Ee(e, /(.+:)(.+)-([^]+)/, "$1" + Se + "$2-$3$1" + Sa + (at(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Ql(e, "stretch") ? jg(Ee(e, "stretch", "fill-available"), n) + e : e;
      }
      break;
    case 4949:
      if (at(e, n + 1) !== 115) break;
    case 6444:
      switch (at(e, zt(e) - 3 - (~Ql(e, "!important") && 10))) {
        case 107:
          return Ee(e, ":", ":" + Se) + e;
        case 101:
          return Ee(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Se + (at(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Se + "$2$3$1" + lt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (at(e, n + 11)) {
        case 114:
          return Se + e + lt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Se + e + lt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Se + e + lt + Ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Se + e + lt + e + e;
  }
  return e;
}
var xM = function(n, t, r, i) {
  if (n.length > -1 && !n.return) switch (n.type) {
    case gc:
      n.return = jg(n.value, n.length);
      break;
    case Hg:
      return Mr([ai(n, {
        value: Ee(n.value, "@", "@" + Se)
      })], i);
    case hc:
      if (n.length) return eM(n.props, function(o) {
        switch (K2(o, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Mr([ai(n, {
              props: [Ee(o, /:(read-\w+)/, ":" + Sa + "$1")]
            })], i);
          case "::placeholder":
            return Mr([ai(n, {
              props: [Ee(o, /:(plac\w+)/, ":" + Se + "input-$1")]
            }), ai(n, {
              props: [Ee(o, /:(plac\w+)/, ":" + Sa + "$1")]
            }), ai(n, {
              props: [Ee(o, /:(plac\w+)/, lt + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, SM = [xM], EM = function(n) {
  var t = n.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var g = h.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var i = n.stylisPlugins || SM;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, a, s = [];
  a = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(h) {
      for (var g = h.getAttribute("data-emotion").split(" "), v = 1; v < g.length; v++)
        o[g[v]] = !0;
      s.push(h);
    }
  );
  var l, u = [gM, vM];
  process.env.NODE_ENV !== "production" && u.push(wM({
    get compat() {
      return m.compat;
    }
  }), IM);
  {
    var c, d = [uM, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? c.insert(h.return) : h.value && h.type !== mc && c.insert(h.value + "{}"));
    } : dM(function(h) {
      c.insert(h);
    })], p = cM(u.concat(i, d)), f = function(g) {
      return Mr(sM(g), p);
    };
    l = function(g, v, y, b) {
      c = y, process.env.NODE_ENV !== "production" && v.map !== void 0 && (c = {
        insert: function(w) {
          y.insert(w + v.map);
        }
      }), f(g ? g + "{" + v.styles + "}" : v.styles), b && (m.inserted[v.name] = !0);
    };
  }
  var m = {
    key: t,
    sheet: new z2({
      key: t,
      container: a,
      nonce: n.nonce,
      speedy: n.speedy,
      prepend: n.prepend,
      insertionPoint: n.insertionPoint
    }),
    nonce: n.nonce,
    inserted: o,
    registered: {},
    insert: l
  };
  return m.sheet.hydrate(s), m;
}, Kl = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mf;
function DM() {
  if (Mf) return Te;
  Mf = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function b(w) {
    if (typeof w == "object" && w !== null) {
      var S = w.$$typeof;
      switch (S) {
        case n:
          switch (w = w.type, w) {
            case l:
            case u:
            case r:
            case o:
            case i:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case c:
                case m:
                case f:
                case a:
                  return w;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  function I(w) {
    return b(w) === u;
  }
  return Te.AsyncMode = l, Te.ConcurrentMode = u, Te.ContextConsumer = s, Te.ContextProvider = a, Te.Element = n, Te.ForwardRef = c, Te.Fragment = r, Te.Lazy = m, Te.Memo = f, Te.Portal = t, Te.Profiler = o, Te.StrictMode = i, Te.Suspense = d, Te.isAsyncMode = function(w) {
    return I(w) || b(w) === l;
  }, Te.isConcurrentMode = I, Te.isContextConsumer = function(w) {
    return b(w) === s;
  }, Te.isContextProvider = function(w) {
    return b(w) === a;
  }, Te.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === n;
  }, Te.isForwardRef = function(w) {
    return b(w) === c;
  }, Te.isFragment = function(w) {
    return b(w) === r;
  }, Te.isLazy = function(w) {
    return b(w) === m;
  }, Te.isMemo = function(w) {
    return b(w) === f;
  }, Te.isPortal = function(w) {
    return b(w) === t;
  }, Te.isProfiler = function(w) {
    return b(w) === o;
  }, Te.isStrictMode = function(w) {
    return b(w) === i;
  }, Te.isSuspense = function(w) {
    return b(w) === d;
  }, Te.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === u || w === o || w === i || w === d || w === p || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === f || w.$$typeof === a || w.$$typeof === s || w.$$typeof === c || w.$$typeof === g || w.$$typeof === v || w.$$typeof === y || w.$$typeof === h);
  }, Te.typeOf = b, Te;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Of;
function TM() {
  return Of || (Of = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function b($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === u || $ === o || $ === i || $ === d || $ === p || typeof $ == "object" && $ !== null && ($.$$typeof === m || $.$$typeof === f || $.$$typeof === a || $.$$typeof === s || $.$$typeof === c || $.$$typeof === g || $.$$typeof === v || $.$$typeof === y || $.$$typeof === h);
    }
    function I($) {
      if (typeof $ == "object" && $ !== null) {
        var K = $.$$typeof;
        switch (K) {
          case n:
            var be = $.type;
            switch (be) {
              case l:
              case u:
              case r:
              case o:
              case i:
              case d:
                return be;
              default:
                var ct = be && be.$$typeof;
                switch (ct) {
                  case s:
                  case c:
                  case m:
                  case f:
                  case a:
                    return ct;
                  default:
                    return K;
                }
            }
          case t:
            return K;
        }
      }
    }
    var w = l, S = u, x = s, E = a, D = n, _ = c, k = r, F = m, A = f, N = t, M = o, V = i, R = d, G = !1;
    function O($) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), z($) || I($) === l;
    }
    function z($) {
      return I($) === u;
    }
    function ue($) {
      return I($) === s;
    }
    function W($) {
      return I($) === a;
    }
    function se($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === n;
    }
    function me($) {
      return I($) === c;
    }
    function Oe($) {
      return I($) === r;
    }
    function oe($) {
      return I($) === m;
    }
    function We($) {
      return I($) === f;
    }
    function $e($) {
      return I($) === t;
    }
    function Yt($) {
      return I($) === o;
    }
    function Bn($) {
      return I($) === i;
    }
    function Ne($) {
      return I($) === d;
    }
    Me.AsyncMode = w, Me.ConcurrentMode = S, Me.ContextConsumer = x, Me.ContextProvider = E, Me.Element = D, Me.ForwardRef = _, Me.Fragment = k, Me.Lazy = F, Me.Memo = A, Me.Portal = N, Me.Profiler = M, Me.StrictMode = V, Me.Suspense = R, Me.isAsyncMode = O, Me.isConcurrentMode = z, Me.isContextConsumer = ue, Me.isContextProvider = W, Me.isElement = se, Me.isForwardRef = me, Me.isFragment = Oe, Me.isLazy = oe, Me.isMemo = We, Me.isPortal = $e, Me.isProfiler = Yt, Me.isStrictMode = Bn, Me.isSuspense = Ne, Me.isValidElementType = b, Me.typeOf = I;
  }()), Me;
}
process.env.NODE_ENV === "production" ? Kl.exports = DM() : Kl.exports = TM();
var MM = Kl.exports, Ug = MM, OM = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, kM = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jg = {};
Jg[Ug.ForwardRef] = OM;
Jg[Ug.Memo] = kM;
var RM = !0;
function Qg(e, n, t) {
  var r = "";
  return t.split(" ").forEach(function(i) {
    e[i] !== void 0 ? n.push(e[i] + ";") : r += i + " ";
  }), r;
}
var bc = function(n, t, r) {
  var i = n.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  RM === !1) && n.registered[i] === void 0 && (n.registered[i] = t.styles);
}, yc = function(n, t, r) {
  bc(n, t, r);
  var i = n.key + "-" + t.name;
  if (n.inserted[t.name] === void 0) {
    var o = t;
    do
      n.insert(t === o ? "." + i : "", o, n.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function AM(e) {
  for (var n = 0, t, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var PM = {
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
}, kf = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, FM = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", NM = /[A-Z]|^ms/g, qg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wc = function(n) {
  return n.charCodeAt(1) === 45;
}, Rf = function(n) {
  return n != null && typeof n != "boolean";
}, cl = /* @__PURE__ */ fM(function(e) {
  return wc(e) ? e : e.replace(NM, "-$&").toLowerCase();
}), Ea = function(n, t) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(qg, function(r, i, o) {
          return Vt = {
            name: i,
            styles: o,
            next: Vt
          }, i;
        });
  }
  return PM[n] !== 1 && !wc(n) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var _M = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, LM = ["normal", "none", "initial", "inherit", "unset"], VM = Ea, WM = /^-ms-/, GM = /-(.)/g, Af = {};
  Ea = function(n, t) {
    if (n === "content" && (typeof t != "string" || LM.indexOf(t) === -1 && !_M.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var r = VM(n, t);
    return r !== "" && !wc(n) && n.indexOf("-") !== -1 && Af[n] === void 0 && (Af[n] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + n.replace(WM, "ms-").replace(GM, function(i, o) {
      return o.toUpperCase();
    }) + "?")), r;
  };
}
var Kg = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Vi(e, n, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Kg);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Vt = {
          name: t.name,
          styles: t.styles,
          next: Vt
        }, t.name;
      if (t.styles !== void 0) {
        var r = t.next;
        if (r !== void 0)
          for (; r !== void 0; )
            Vt = {
              name: r.name,
              styles: r.styles,
              next: Vt
            }, r = r.next;
        var i = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (i += t.map), i;
      }
      return $M(e, n, t);
    }
    case "function": {
      if (e !== void 0) {
        var o = Vt, a = t(e);
        return Vt = o, Vi(e, n, a);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = t.replace(qg, function(c, d, p) {
          var f = "animation" + s.length;
          return s.push("const " + f + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + f + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (n == null)
    return t;
  var u = n[t];
  return u !== void 0 ? u : t;
}
function $M(e, n, t) {
  var r = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      r += Vi(e, n, t[i]) + ";";
  else
    for (var o in t) {
      var a = t[o];
      if (typeof a != "object")
        n != null && n[a] !== void 0 ? r += o + "{" + n[a] + "}" : Rf(a) && (r += cl(o) + ":" + Ea(o, a) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Kg);
        if (Array.isArray(a) && typeof a[0] == "string" && (n == null || n[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            Rf(a[s]) && (r += cl(o) + ":" + Ea(o, a[s]) + ";");
        else {
          var l = Vi(e, n, a);
          switch (o) {
            case "animation":
            case "animationName": {
              r += cl(o) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(FM), r += o + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var Pf = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ev;
process.env.NODE_ENV !== "production" && (ev = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Vt, Wi = function(n, t, r) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var i = !0, o = "";
  Vt = void 0;
  var a = n[0];
  a == null || a.raw === void 0 ? (i = !1, o += Vi(r, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(kf), o += a[0]);
  for (var s = 1; s < n.length; s++)
    o += Vi(r, t, n[s]), i && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(kf), o += a[s]);
  var l;
  process.env.NODE_ENV !== "production" && (o = o.replace(ev, function(p) {
    return l = p, "";
  })), Pf.lastIndex = 0;
  for (var u = "", c; (c = Pf.exec(o)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    c[1];
  var d = AM(o) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: o,
    map: l,
    next: Vt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: o,
    next: Vt
  };
}, HM = function(n) {
  return n();
}, tv = T.useInsertionEffect ? T.useInsertionEffect : !1, nv = tv || HM, Ff = tv || T.useLayoutEffect, Cc = {}.hasOwnProperty, Ic = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ EM({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ic.displayName = "EmotionCacheContext");
Ic.Provider;
var xc = function(n) {
  return /* @__PURE__ */ Oa(function(t, r) {
    var i = ve(Ic);
    return n(t, i, r);
  });
}, Cs = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Cs.displayName = "EmotionThemeContext");
var Nf = function(n) {
  var t = n.split(".");
  return t[t.length - 1];
}, BM = function(n) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(n);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(n), t)) return Nf(t[1]);
}, YM = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), ZM = function(n) {
  return n.replace(/\$/g, "-");
}, XM = function(n) {
  if (n)
    for (var t = n.split(`
`), r = 0; r < t.length; r++) {
      var i = BM(t[r]);
      if (i) {
        if (YM.has(i)) break;
        if (/^[A-Z]/.test(i)) return ZM(i);
      }
    }
}, eu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", tu = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", zM = function(n, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var r = {};
  for (var i in t)
    Cc.call(t, i) && (r[i] = t[i]);
  if (r[eu] = n, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var o = XM(new Error().stack);
    o && (r[tu] = o);
  }
  return r;
}, jM = function(n) {
  var t = n.cache, r = n.serialized, i = n.isStringTag;
  return bc(t, r, i), nv(function() {
    return yc(t, r, i);
  }), null;
}, rv = /* @__PURE__ */ xc(function(e, n, t) {
  var r = e.css;
  typeof r == "string" && n.registered[r] !== void 0 && (r = n.registered[r]);
  var i = e[eu], o = [r], a = "";
  typeof e.className == "string" ? a = Qg(n.registered, o, e.className) : e.className != null && (a = e.className + " ");
  var s = Wi(o, void 0, T.useContext(Cs));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[tu];
    l && (s = Wi([s, "label:" + l + ";"]));
  }
  a += n.key + "-" + s.name;
  var u = {};
  for (var c in e)
    Cc.call(e, c) && c !== "css" && c !== eu && (process.env.NODE_ENV === "production" || c !== tu) && (u[c] = e[c]);
  return u.ref = t, u.className = a, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(jM, {
    cache: n,
    serialized: s,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ T.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (rv.displayName = "EmotionCssPropInternal");
var UM = rv, JM = {
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
  sideEffects: !1,
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
      optional: !0
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
}, Q = function(n, t) {
  var r = arguments;
  if (t == null || !Cc.call(t, "css"))
    return T.createElement.apply(void 0, r);
  var i = r.length, o = new Array(i);
  o[0] = UM, o[1] = zM(n, t);
  for (var a = 2; a < i; a++)
    o[a] = r[a];
  return T.createElement.apply(null, o);
}, _f = !1, QM = /* @__PURE__ */ xc(function(e, n) {
  process.env.NODE_ENV !== "production" && !_f && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), _f = !0);
  var t = e.styles, r = Wi([t], void 0, T.useContext(Cs)), i = T.useRef();
  return Ff(function() {
    var o = n.key + "-global", a = new n.sheet.constructor({
      key: o,
      nonce: n.sheet.nonce,
      container: n.sheet.container,
      speedy: n.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return n.sheet.tags.length && (a.before = n.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", o), a.hydrate([l])), i.current = [a, s], function() {
      a.flush();
    };
  }, [n]), Ff(function() {
    var o = i.current, a = o[0], s = o[1];
    if (s) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && yc(n, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    n.insert("", r, a, !1);
  }, [n, r.name]), null;
});
process.env.NODE_ENV !== "production" && (QM.displayName = "EmotionGlobal");
function Sc() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return Wi(n);
}
var qM = function() {
  var n = Sc.apply(void 0, arguments), t = "animation-" + n.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + n.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, KM = function e(n) {
  for (var t = n.length, r = 0, i = ""; r < t; r++) {
    var o = n[r];
    if (o != null) {
      var a = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            a = e(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var s in o)
              o[s] && s && (a && (a += " "), a += s);
          }
          break;
        }
        default:
          a = o;
      }
      a && (i && (i += " "), i += a);
    }
  }
  return i;
};
function eO(e, n, t) {
  var r = [], i = Qg(e, r, t);
  return r.length < 2 ? t : i + n(r);
}
var tO = function(n) {
  var t = n.cache, r = n.serializedArr;
  return nv(function() {
    for (var i = 0; i < r.length; i++)
      yc(t, r[i], !1);
  }), null;
}, nO = /* @__PURE__ */ xc(function(e, n) {
  var t = !1, r = [], i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    var p = Wi(c, n.registered);
    return r.push(p), bc(n, p, !1), n.key + "-" + p.name;
  }, o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, c = new Array(u), d = 0; d < u; d++)
      c[d] = arguments[d];
    return eO(n.registered, i, KM(c));
  }, a = {
    css: i,
    cx: o,
    theme: T.useContext(Cs)
  }, s = e.children(a);
  return t = !0, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(tO, {
    cache: n,
    serializedArr: r
  }), s);
});
process.env.NODE_ENV !== "production" && (nO.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Lf = !0, rO = typeof jest < "u" || typeof vi < "u";
  if (Lf && !rO) {
    var Vf = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Lf ? window : global
    ), Wf = "__EMOTION_REACT_" + JM.version.split(".")[0] + "__";
    Vf[Wf] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Vf[Wf] = !0;
  }
}
function iO(e, n) {
  return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(n)
    }
  }));
}
var nu = Gi, oO = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Da = function() {
};
function aO(e, n) {
  return n ? n[0] === "-" ? e + n : e + "__" + n : e;
}
function sO(e, n) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++)
    r[i - 2] = arguments[i];
  var o = [].concat(r);
  if (n && e)
    for (var a in n)
      n.hasOwnProperty(a) && n[a] && o.push("".concat(aO(e, a)));
  return o.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var Gf = function(n) {
  return gO(n) ? n.filter(Boolean) : dr(n) === "object" && n !== null ? [n] : [];
}, iv = function(n) {
  n.className, n.clearValue, n.cx, n.getStyles, n.getClassNames, n.getValue, n.hasValue, n.isMulti, n.isRtl, n.options, n.selectOption, n.selectProps, n.setValue, n.theme;
  var t = yn(n, oO);
  return q({}, t);
}, je = function(n, t, r) {
  var i = n.cx, o = n.getStyles, a = n.getClassNames, s = n.className;
  return {
    css: o(t, n),
    className: i(r ?? {}, a(t, n), s)
  };
};
function Is(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function lO(e) {
  return Is(e) ? window.innerHeight : e.clientHeight;
}
function ov(e) {
  return Is(e) ? window.pageYOffset : e.scrollTop;
}
function Ta(e, n) {
  if (Is(e)) {
    window.scrollTo(0, n);
    return;
  }
  e.scrollTop = n;
}
function uO(e) {
  var n = getComputedStyle(e), t = n.position === "absolute", r = /(auto|scroll)/;
  if (n.position === "fixed") return document.documentElement;
  for (var i = e; i = i.parentElement; )
    if (n = getComputedStyle(i), !(t && n.position === "static") && r.test(n.overflow + n.overflowY + n.overflowX))
      return i;
  return document.documentElement;
}
function cO(e, n, t, r) {
  return t * ((e = e / r - 1) * e * e + 1) + n;
}
function Oo(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Da, i = ov(e), o = n - i, a = 10, s = 0;
  function l() {
    s += a;
    var u = cO(s, i, o, t);
    Ta(e, u), s < t ? window.requestAnimationFrame(l) : r(e);
  }
  l();
}
function $f(e, n) {
  var t = e.getBoundingClientRect(), r = n.getBoundingClientRect(), i = n.offsetHeight / 3;
  r.bottom + i > t.bottom ? Ta(e, Math.min(n.offsetTop + n.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < t.top && Ta(e, Math.max(n.offsetTop - i, 0));
}
function dO(e) {
  var n = e.getBoundingClientRect();
  return {
    bottom: n.bottom,
    height: n.height,
    left: n.left,
    right: n.right,
    top: n.top,
    width: n.width
  };
}
function Hf() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function fO() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var av = !1, pO = {
  get passive() {
    return av = !0;
  }
}, ko = typeof window < "u" ? window : {};
ko.addEventListener && ko.removeEventListener && (ko.addEventListener("p", Da, pO), ko.removeEventListener("p", Da, !1));
var mO = av;
function hO(e) {
  return e != null;
}
function gO(e) {
  return Array.isArray(e);
}
function Ro(e, n, t) {
  return e ? n : t;
}
var vO = function(n) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  var o = Object.entries(n).filter(function(a) {
    var s = fn(a, 1), l = s[0];
    return !r.includes(l);
  });
  return o.reduce(function(a, s) {
    var l = fn(s, 2), u = l[0], c = l[1];
    return a[u] = c, a;
  }, {});
}, bO = ["children", "innerProps"], yO = ["children", "innerProps"];
function wO(e) {
  var n = e.maxHeight, t = e.menuEl, r = e.minHeight, i = e.placement, o = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, l = uO(t), u = {
    placement: "bottom",
    maxHeight: n
  };
  if (!t || !t.offsetParent) return u;
  var c = l.getBoundingClientRect(), d = c.height, p = t.getBoundingClientRect(), f = p.bottom, m = p.height, h = p.top, g = t.offsetParent.getBoundingClientRect(), v = g.top, y = a ? window.innerHeight : lO(l), b = ov(l), I = parseInt(getComputedStyle(t).marginBottom, 10), w = parseInt(getComputedStyle(t).marginTop, 10), S = v - w, x = y - h, E = S + b, D = d - b - h, _ = f - y + b + I, k = b + h - w, F = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (x >= m)
        return {
          placement: "bottom",
          maxHeight: n
        };
      if (D >= m && !a)
        return o && Oo(l, _, F), {
          placement: "bottom",
          maxHeight: n
        };
      if (!a && D >= r || a && x >= r) {
        o && Oo(l, _, F);
        var A = a ? x - I : D - I;
        return {
          placement: "bottom",
          maxHeight: A
        };
      }
      if (i === "auto" || a) {
        var N = n, M = a ? S : E;
        return M >= r && (N = Math.min(M - I - s, n)), {
          placement: "top",
          maxHeight: N
        };
      }
      if (i === "bottom")
        return o && Ta(l, _), {
          placement: "bottom",
          maxHeight: n
        };
      break;
    case "top":
      if (S >= m)
        return {
          placement: "top",
          maxHeight: n
        };
      if (E >= m && !a)
        return o && Oo(l, k, F), {
          placement: "top",
          maxHeight: n
        };
      if (!a && E >= r || a && S >= r) {
        var V = n;
        return (!a && E >= r || a && S >= r) && (V = a ? S - w : E - w), o && Oo(l, k, F), {
          placement: "top",
          maxHeight: V
        };
      }
      return {
        placement: "bottom",
        maxHeight: n
      };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return u;
}
function CO(e) {
  var n = {
    bottom: "top",
    top: "bottom"
  };
  return e ? n[e] : "bottom";
}
var sv = function(n) {
  return n === "auto" ? "bottom" : n;
}, IO = function(n, t) {
  var r, i = n.placement, o = n.theme, a = o.borderRadius, s = o.spacing, l = o.colors;
  return q((r = {
    label: "menu"
  }, mi(r, CO(i), "100%"), mi(r, "position", "absolute"), mi(r, "width", "100%"), mi(r, "zIndex", 1), r), t ? {} : {
    backgroundColor: l.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, lv = /* @__PURE__ */ Ve(null), xO = function(n) {
  var t = n.children, r = n.minMenuHeight, i = n.maxMenuHeight, o = n.menuPlacement, a = n.menuPosition, s = n.menuShouldScrollIntoView, l = n.theme, u = ve(lv) || {}, c = u.setPortalPlacement, d = H(null), p = ae(i), f = fn(p, 2), m = f[0], h = f[1], g = ae(null), v = fn(g, 2), y = v[0], b = v[1], I = l.spacing.controlHeight;
  return nu(function() {
    var w = d.current;
    if (w) {
      var S = a === "fixed", x = s && !S, E = wO({
        maxHeight: i,
        menuEl: w,
        minHeight: r,
        placement: o,
        shouldScroll: x,
        isFixedPosition: S,
        controlHeight: I
      });
      h(E.maxHeight), b(E.placement), c == null || c(E.placement);
    }
  }, [i, o, a, s, r, c, I]), t({
    ref: d,
    placerProps: q(q({}, n), {}, {
      placement: y || sv(o),
      maxHeight: m
    })
  });
}, SO = function(n) {
  var t = n.children, r = n.innerRef, i = n.innerProps;
  return Q("div", ee({}, je(n, "menu", {
    menu: !0
  }), {
    ref: r
  }, i), t);
}, EO = SO, DO = function(n, t) {
  var r = n.maxHeight, i = n.theme.spacing.baseUnit;
  return q({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, t ? {} : {
    paddingBottom: i,
    paddingTop: i
  });
}, TO = function(n) {
  var t = n.children, r = n.innerProps, i = n.innerRef, o = n.isMulti;
  return Q("div", ee({}, je(n, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: i
  }, r), t);
}, uv = function(n, t) {
  var r = n.theme, i = r.spacing.baseUnit, o = r.colors;
  return q({
    textAlign: "center"
  }, t ? {} : {
    color: o.neutral40,
    padding: "".concat(i * 2, "px ").concat(i * 3, "px")
  });
}, MO = uv, OO = uv, kO = function(n) {
  var t = n.children, r = t === void 0 ? "No options" : t, i = n.innerProps, o = yn(n, bO);
  return Q("div", ee({}, je(q(q({}, o), {}, {
    children: r,
    innerProps: i
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), i), r);
}, RO = function(n) {
  var t = n.children, r = t === void 0 ? "Loading..." : t, i = n.innerProps, o = yn(n, yO);
  return Q("div", ee({}, je(q(q({}, o), {}, {
    children: r,
    innerProps: i
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), i), r);
}, AO = function(n) {
  var t = n.rect, r = n.offset, i = n.position;
  return {
    left: t.left,
    position: i,
    top: r,
    width: t.width,
    zIndex: 1
  };
}, PO = function(n) {
  var t = n.appendTo, r = n.children, i = n.controlElement, o = n.innerProps, a = n.menuPlacement, s = n.menuPosition, l = H(null), u = H(null), c = ae(sv(a)), d = fn(c, 2), p = d[0], f = d[1], m = U(function() {
    return {
      setPortalPlacement: f
    };
  }, []), h = ae(null), g = fn(h, 2), v = g[0], y = g[1], b = pe(function() {
    if (i) {
      var x = dO(i), E = s === "fixed" ? 0 : window.pageYOffset, D = x[p] + E;
      (D !== (v == null ? void 0 : v.offset) || x.left !== (v == null ? void 0 : v.rect.left) || x.width !== (v == null ? void 0 : v.rect.width)) && y({
        offset: D,
        rect: x
      });
    }
  }, [i, s, p, v == null ? void 0 : v.offset, v == null ? void 0 : v.rect.left, v == null ? void 0 : v.rect.width]);
  nu(function() {
    b();
  }, [b]);
  var I = pe(function() {
    typeof u.current == "function" && (u.current(), u.current = null), i && l.current && (u.current = bu(i, l.current, b, {
      elementResize: "ResizeObserver" in window
    }));
  }, [i, b]);
  nu(function() {
    I();
  }, [I]);
  var w = pe(function(x) {
    l.current = x, I();
  }, [I]);
  if (!t && s !== "fixed" || !v) return null;
  var S = Q("div", ee({
    ref: w
  }, je(q(q({}, n), {}, {
    offset: v.offset,
    position: s,
    rect: v.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), r);
  return Q(lv.Provider, {
    value: m
  }, t ? /* @__PURE__ */ au(S, t) : S);
}, FO = function(n) {
  var t = n.isDisabled, r = n.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: t ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, NO = function(n) {
  var t = n.children, r = n.innerProps, i = n.isDisabled, o = n.isRtl;
  return Q("div", ee({}, je(n, "container", {
    "--is-disabled": i,
    "--is-rtl": o
  }), r), t);
}, _O = function(n, t) {
  var r = n.theme.spacing, i = n.isMulti, o = n.hasValue, a = n.selectProps.controlShouldRenderValue;
  return q({
    alignItems: "center",
    display: i && o && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, t ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, LO = function(n) {
  var t = n.children, r = n.innerProps, i = n.isMulti, o = n.hasValue;
  return Q("div", ee({}, je(n, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": i,
    "value-container--has-value": o
  }), r), t);
}, VO = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, WO = function(n) {
  var t = n.children, r = n.innerProps;
  return Q("div", ee({}, je(n, "indicatorsContainer", {
    indicators: !0
  }), r), t);
}, Bf, GO = ["size"], $O = ["innerProps", "isRtl", "size"];
function HO() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var BO = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
  toString: HO
}, cv = function(n) {
  var t = n.size, r = yn(n, GO);
  return Q("svg", ee({
    height: t,
    width: t,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: BO
  }, r));
}, Ec = function(n) {
  return Q(cv, ee({
    size: 20
  }, n), Q("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, dv = function(n) {
  return Q(cv, ee({
    size: 20
  }, n), Q("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, fv = function(n, t) {
  var r = n.isFocused, i = n.theme, o = i.spacing.baseUnit, a = i.colors;
  return q({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, t ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: o * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, YO = fv, ZO = function(n) {
  var t = n.children, r = n.innerProps;
  return Q("div", ee({}, je(n, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), t || Q(dv, null));
}, XO = fv, zO = function(n) {
  var t = n.children, r = n.innerProps;
  return Q("div", ee({}, je(n, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), t || Q(Ec, null));
}, jO = function(n, t) {
  var r = n.isDisabled, i = n.theme, o = i.spacing.baseUnit, a = i.colors;
  return q({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, t ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, UO = function(n) {
  var t = n.innerProps;
  return Q("span", ee({}, t, je(n, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, JO = qM(Bf || (Bf = iO([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), QO = function(n, t) {
  var r = n.isFocused, i = n.size, o = n.theme, a = o.colors, s = o.spacing.baseUnit;
  return q({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: i,
    lineHeight: 1,
    marginRight: i,
    textAlign: "center",
    verticalAlign: "middle"
  }, t ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, dl = function(n) {
  var t = n.delay, r = n.offset;
  return Q("span", {
    css: /* @__PURE__ */ Sc({
      animation: "".concat(JO, " 1s ease-in-out ").concat(t, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
  });
}, qO = function(n) {
  var t = n.innerProps, r = n.isRtl, i = n.size, o = i === void 0 ? 4 : i, a = yn(n, $O);
  return Q("div", ee({}, je(q(q({}, a), {}, {
    innerProps: t,
    isRtl: r,
    size: o
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), t), Q(dl, {
    delay: 0,
    offset: r
  }), Q(dl, {
    delay: 160,
    offset: !0
  }), Q(dl, {
    delay: 320,
    offset: !r
  }));
}, KO = function(n, t) {
  var r = n.isDisabled, i = n.isFocused, o = n.theme, a = o.colors, s = o.borderRadius, l = o.spacing;
  return q({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: l.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, t ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : i ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: i ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: i ? a.primary : a.neutral30
    }
  });
}, ek = function(n) {
  var t = n.children, r = n.isDisabled, i = n.isFocused, o = n.innerRef, a = n.innerProps, s = n.menuIsOpen;
  return Q("div", ee({
    ref: o
  }, je(n, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": i,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), t);
}, tk = ek, nk = ["data"], rk = function(n, t) {
  var r = n.theme.spacing;
  return t ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, ik = function(n) {
  var t = n.children, r = n.cx, i = n.getStyles, o = n.getClassNames, a = n.Heading, s = n.headingProps, l = n.innerProps, u = n.label, c = n.theme, d = n.selectProps;
  return Q("div", ee({}, je(n, "group", {
    group: !0
  }), l), Q(a, ee({}, s, {
    selectProps: d,
    theme: c,
    getStyles: i,
    getClassNames: o,
    cx: r
  }), u), Q("div", null, t));
}, ok = function(n, t) {
  var r = n.theme, i = r.colors, o = r.spacing;
  return q({
    label: "group",
    cursor: "default",
    display: "block"
  }, t ? {} : {
    color: i.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: o.baseUnit * 3,
    paddingRight: o.baseUnit * 3,
    textTransform: "uppercase"
  });
}, ak = function(n) {
  var t = iv(n);
  t.data;
  var r = yn(t, nk);
  return Q("div", ee({}, je(n, "groupHeading", {
    "group-heading": !0
  }), r));
}, sk = ik, lk = ["innerRef", "isDisabled", "isHidden", "inputClassName"], uk = function(n, t) {
  var r = n.isDisabled, i = n.value, o = n.theme, a = o.spacing, s = o.colors;
  return q(q({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: i ? "translateZ(0)" : ""
  }, ck), t ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, pv = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, ck = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": q({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, pv)
}, dk = function(n) {
  return q({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: n ? 0 : 1,
    width: "100%"
  }, pv);
}, fk = function(n) {
  var t = n.cx, r = n.value, i = iv(n), o = i.innerRef, a = i.isDisabled, s = i.isHidden, l = i.inputClassName, u = yn(i, lk);
  return Q("div", ee({}, je(n, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), Q("input", ee({
    className: t({
      input: !0
    }, l),
    ref: o,
    style: dk(s),
    disabled: a
  }, u)));
}, pk = fk, mk = function(n, t) {
  var r = n.theme, i = r.spacing, o = r.borderRadius, a = r.colors;
  return q({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, t ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: o / 2,
    margin: i.baseUnit / 2
  });
}, hk = function(n, t) {
  var r = n.theme, i = r.borderRadius, o = r.colors, a = n.cropWithEllipsis;
  return q({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, t ? {} : {
    borderRadius: i / 2,
    color: o.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, gk = function(n, t) {
  var r = n.theme, i = r.spacing, o = r.borderRadius, a = r.colors, s = n.isFocused;
  return q({
    alignItems: "center",
    display: "flex"
  }, t ? {} : {
    borderRadius: o / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: i.baseUnit,
    paddingRight: i.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, mv = function(n) {
  var t = n.children, r = n.innerProps;
  return Q("div", r, t);
}, vk = mv, bk = mv;
function yk(e) {
  var n = e.children, t = e.innerProps;
  return Q("div", ee({
    role: "button"
  }, t), n || Q(Ec, {
    size: 14
  }));
}
var wk = function(n) {
  var t = n.children, r = n.components, i = n.data, o = n.innerProps, a = n.isDisabled, s = n.removeProps, l = n.selectProps, u = r.Container, c = r.Label, d = r.Remove;
  return Q(u, {
    data: i,
    innerProps: q(q({}, je(n, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), o),
    selectProps: l
  }, Q(c, {
    data: i,
    innerProps: q({}, je(n, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: l
  }, t), Q(d, {
    data: i,
    innerProps: q(q({}, je(n, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(t || "option")
    }, s),
    selectProps: l
  }));
}, Ck = wk, Ik = function(n, t) {
  var r = n.isDisabled, i = n.isFocused, o = n.isSelected, a = n.theme, s = a.spacing, l = a.colors;
  return q({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, t ? {} : {
    backgroundColor: o ? l.primary : i ? l.primary25 : "transparent",
    color: r ? l.neutral20 : o ? l.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : o ? l.primary : l.primary50
    }
  });
}, xk = function(n) {
  var t = n.children, r = n.isDisabled, i = n.isFocused, o = n.isSelected, a = n.innerRef, s = n.innerProps;
  return Q("div", ee({}, je(n, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": i,
    "option--is-selected": o
  }), {
    ref: a,
    "aria-disabled": r
  }, s), t);
}, Sk = xk, Ek = function(n, t) {
  var r = n.theme, i = r.spacing, o = r.colors;
  return q({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, t ? {} : {
    color: o.neutral50,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, Dk = function(n) {
  var t = n.children, r = n.innerProps;
  return Q("div", ee({}, je(n, "placeholder", {
    placeholder: !0
  }), r), t);
}, Tk = Dk, Mk = function(n, t) {
  var r = n.isDisabled, i = n.theme, o = i.spacing, a = i.colors;
  return q({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, t ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Ok = function(n) {
  var t = n.children, r = n.isDisabled, i = n.innerProps;
  return Q("div", ee({}, je(n, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), i), t);
}, kk = Ok, hv = {
  ClearIndicator: zO,
  Control: tk,
  DropdownIndicator: ZO,
  DownChevron: dv,
  CrossIcon: Ec,
  Group: sk,
  GroupHeading: ak,
  IndicatorsContainer: WO,
  IndicatorSeparator: UO,
  Input: pk,
  LoadingIndicator: qO,
  Menu: EO,
  MenuList: TO,
  MenuPortal: PO,
  LoadingMessage: RO,
  NoOptionsMessage: kO,
  MultiValue: Ck,
  MultiValueContainer: vk,
  MultiValueLabel: bk,
  MultiValueRemove: yk,
  Option: Sk,
  Placeholder: Tk,
  SelectContainer: NO,
  SingleValue: kk,
  ValueContainer: LO
}, Rk = function(n) {
  return q(q({}, hv), n.components);
}, Yf = Number.isNaN || function(n) {
  return typeof n == "number" && n !== n;
};
function Ak(e, n) {
  return !!(e === n || Yf(e) && Yf(n));
}
function Pk(e, n) {
  if (e.length !== n.length)
    return !1;
  for (var t = 0; t < e.length; t++)
    if (!Ak(e[t], n[t]))
      return !1;
  return !0;
}
function Fk(e, n) {
  n === void 0 && (n = Pk);
  var t = null;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (t && t.lastThis === this && n(i, t.lastArgs))
      return t.lastResult;
    var a = e.apply(this, i);
    return t = {
      lastResult: a,
      lastArgs: i,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    t = null;
  }, r;
}
function Nk() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _k = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Nk
}, Lk = function(n) {
  return Q("span", ee({
    css: _k
  }, n));
}, Zf = Lk, Vk = {
  guidance: function(n) {
    var t = n.isSearchable, r = n.isMulti, i = n.tabSelectsValue, o = n.context, a = n.isInitialFocus;
    switch (o) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return a ? "".concat(n["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(n) {
    var t = n.action, r = n.label, i = r === void 0 ? "" : r, o = n.labels, a = n.isDisabled;
    switch (t) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(i, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(i, " is disabled. Select another option.") : "option ".concat(i, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(n) {
    var t = n.context, r = n.focused, i = n.options, o = n.label, a = o === void 0 ? "" : o, s = n.selectValue, l = n.isDisabled, u = n.isSelected, c = n.isAppleDevice, d = function(h, g) {
      return h && h.length ? "".concat(h.indexOf(g) + 1, " of ").concat(h.length) : "";
    };
    if (t === "value" && s)
      return "value ".concat(a, " focused, ").concat(d(s, r), ".");
    if (t === "menu" && c) {
      var p = l ? " disabled" : "", f = "".concat(u ? " selected" : "").concat(p);
      return "".concat(a).concat(f, ", ").concat(d(i, r), ".");
    }
    return "";
  },
  onFilter: function(n) {
    var t = n.inputValue, r = n.resultsMessage;
    return "".concat(r).concat(t ? " for search term " + t : "", ".");
  }
}, Wk = function(n) {
  var t = n.ariaSelection, r = n.focusedOption, i = n.focusedValue, o = n.focusableOptions, a = n.isFocused, s = n.selectValue, l = n.selectProps, u = n.id, c = n.isAppleDevice, d = l.ariaLiveMessages, p = l.getOptionLabel, f = l.inputValue, m = l.isMulti, h = l.isOptionDisabled, g = l.isSearchable, v = l.menuIsOpen, y = l.options, b = l.screenReaderStatus, I = l.tabSelectsValue, w = l.isLoading, S = l["aria-label"], x = l["aria-live"], E = U(function() {
    return q(q({}, Vk), d || {});
  }, [d]), D = U(function() {
    var M = "";
    if (t && E.onChange) {
      var V = t.option, R = t.options, G = t.removedValue, O = t.removedValues, z = t.value, ue = function($e) {
        return Array.isArray($e) ? null : $e;
      }, W = G || V || ue(z), se = W ? p(W) : "", me = R || O || void 0, Oe = me ? me.map(p) : [], oe = q({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: W && h(W, s),
        label: se,
        labels: Oe
      }, t);
      M = E.onChange(oe);
    }
    return M;
  }, [t, E, h, s, p]), _ = U(function() {
    var M = "", V = r || i, R = !!(r && s && s.includes(r));
    if (V && E.onFocus) {
      var G = {
        focused: V,
        label: p(V),
        isDisabled: h(V, s),
        isSelected: R,
        options: o,
        context: V === r ? "menu" : "value",
        selectValue: s,
        isAppleDevice: c
      };
      M = E.onFocus(G);
    }
    return M;
  }, [r, i, p, h, E, o, s, c]), k = U(function() {
    var M = "";
    if (v && y.length && !w && E.onFilter) {
      var V = b({
        count: o.length
      });
      M = E.onFilter({
        inputValue: f,
        resultsMessage: V
      });
    }
    return M;
  }, [o, f, v, E, y, b, w]), F = (t == null ? void 0 : t.action) === "initial-input-focus", A = U(function() {
    var M = "";
    if (E.guidance) {
      var V = i ? "value" : v ? "menu" : "input";
      M = E.guidance({
        "aria-label": S,
        context: V,
        isDisabled: r && h(r, s),
        isMulti: m,
        isSearchable: g,
        tabSelectsValue: I,
        isInitialFocus: F
      });
    }
    return M;
  }, [S, r, i, m, h, g, v, E, s, I, F]), N = Q(ze, null, Q("span", {
    id: "aria-selection"
  }, D), Q("span", {
    id: "aria-focused"
  }, _), Q("span", {
    id: "aria-results"
  }, k), Q("span", {
    id: "aria-guidance"
  }, A));
  return Q(ze, null, Q(Zf, {
    id: u
  }, F && N), Q(Zf, {
    "aria-live": x,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, a && !F && N));
}, Gk = Wk, ru = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], $k = new RegExp("[" + ru.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), gv = {};
for (var fl = 0; fl < ru.length; fl++)
  for (var pl = ru[fl], ml = 0; ml < pl.letters.length; ml++)
    gv[pl.letters[ml]] = pl.base;
var vv = function(n) {
  return n.replace($k, function(t) {
    return gv[t];
  });
}, Hk = Fk(vv), Xf = function(n) {
  return n.replace(/^\s+|\s+$/g, "");
}, Bk = function(n) {
  return "".concat(n.label, " ").concat(n.value);
}, Yk = function(n) {
  return function(t, r) {
    if (t.data.__isNew__) return !0;
    var i = q({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Bk,
      trim: !0,
      matchFrom: "any"
    }, n), o = i.ignoreCase, a = i.ignoreAccents, s = i.stringify, l = i.trim, u = i.matchFrom, c = l ? Xf(r) : r, d = l ? Xf(s(t)) : s(t);
    return o && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = Hk(c), d = vv(d)), u === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, Zk = ["innerRef"];
function Xk(e) {
  var n = e.innerRef, t = yn(e, Zk), r = vO(t, "onExited", "in", "enter", "exit", "appear");
  return Q("input", ee({
    ref: n
  }, r, {
    css: /* @__PURE__ */ Sc({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var zk = function(n) {
  n.cancelable && n.preventDefault(), n.stopPropagation();
};
function jk(e) {
  var n = e.isEnabled, t = e.onBottomArrive, r = e.onBottomLeave, i = e.onTopArrive, o = e.onTopLeave, a = H(!1), s = H(!1), l = H(0), u = H(null), c = pe(function(g, v) {
    if (u.current !== null) {
      var y = u.current, b = y.scrollTop, I = y.scrollHeight, w = y.clientHeight, S = u.current, x = v > 0, E = I - w - b, D = !1;
      E > v && a.current && (r && r(g), a.current = !1), x && s.current && (o && o(g), s.current = !1), x && v > E ? (t && !a.current && t(g), S.scrollTop = I, D = !0, a.current = !0) : !x && -v > b && (i && !s.current && i(g), S.scrollTop = 0, D = !0, s.current = !0), D && zk(g);
    }
  }, [t, r, i, o]), d = pe(function(g) {
    c(g, g.deltaY);
  }, [c]), p = pe(function(g) {
    l.current = g.changedTouches[0].clientY;
  }, []), f = pe(function(g) {
    var v = l.current - g.changedTouches[0].clientY;
    c(g, v);
  }, [c]), m = pe(function(g) {
    if (g) {
      var v = mO ? {
        passive: !1
      } : !1;
      g.addEventListener("wheel", d, v), g.addEventListener("touchstart", p, v), g.addEventListener("touchmove", f, v);
    }
  }, [f, p, d]), h = pe(function(g) {
    g && (g.removeEventListener("wheel", d, !1), g.removeEventListener("touchstart", p, !1), g.removeEventListener("touchmove", f, !1));
  }, [f, p, d]);
  return Ie(function() {
    if (n) {
      var g = u.current;
      return m(g), function() {
        h(g);
      };
    }
  }, [n, m, h]), function(g) {
    u.current = g;
  };
}
var zf = ["boxSizing", "height", "overflow", "paddingRight", "position"], jf = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Uf(e) {
  e.preventDefault();
}
function Jf(e) {
  e.stopPropagation();
}
function Qf() {
  var e = this.scrollTop, n = this.scrollHeight, t = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : t === n && (this.scrollTop = e - 1);
}
function qf() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Kf = !!(typeof window < "u" && window.document && window.document.createElement), si = 0, wr = {
  capture: !1,
  passive: !1
};
function Uk(e) {
  var n = e.isEnabled, t = e.accountForScrollbars, r = t === void 0 ? !0 : t, i = H({}), o = H(null), a = pe(function(l) {
    if (Kf) {
      var u = document.body, c = u && u.style;
      if (r && zf.forEach(function(m) {
        var h = c && c[m];
        i.current[m] = h;
      }), r && si < 1) {
        var d = parseInt(i.current.paddingRight, 10) || 0, p = document.body ? document.body.clientWidth : 0, f = window.innerWidth - p + d || 0;
        Object.keys(jf).forEach(function(m) {
          var h = jf[m];
          c && (c[m] = h);
        }), c && (c.paddingRight = "".concat(f, "px"));
      }
      u && qf() && (u.addEventListener("touchmove", Uf, wr), l && (l.addEventListener("touchstart", Qf, wr), l.addEventListener("touchmove", Jf, wr))), si += 1;
    }
  }, [r]), s = pe(function(l) {
    if (Kf) {
      var u = document.body, c = u && u.style;
      si = Math.max(si - 1, 0), r && si < 1 && zf.forEach(function(d) {
        var p = i.current[d];
        c && (c[d] = p);
      }), u && qf() && (u.removeEventListener("touchmove", Uf, wr), l && (l.removeEventListener("touchstart", Qf, wr), l.removeEventListener("touchmove", Jf, wr)));
    }
  }, [r]);
  return Ie(function() {
    if (n) {
      var l = o.current;
      return a(l), function() {
        s(l);
      };
    }
  }, [n, a, s]), function(l) {
    o.current = l;
  };
}
function Jk() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Qk = function(n) {
  var t = n.target;
  return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur();
}, qk = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: Jk
};
function Kk(e) {
  var n = e.children, t = e.lockEnabled, r = e.captureEnabled, i = r === void 0 ? !0 : r, o = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, l = e.onTopLeave, u = jk({
    isEnabled: i,
    onBottomArrive: o,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: l
  }), c = Uk({
    isEnabled: t
  }), d = function(f) {
    u(f), c(f);
  };
  return Q(ze, null, t && Q("div", {
    onClick: Qk,
    css: qk
  }), n(d));
}
function eR() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var tR = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: eR
}, nR = function(n) {
  var t = n.name, r = n.onFocus;
  return Q("input", {
    required: !0,
    name: t,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: tR,
    value: "",
    onChange: function() {
    }
  });
}, rR = nR;
function Dc(e) {
  var n;
  return typeof window < "u" && window.navigator != null ? e.test(((n = window.navigator.userAgentData) === null || n === void 0 ? void 0 : n.platform) || window.navigator.platform) : !1;
}
function iR() {
  return Dc(/^iPhone/i);
}
function bv() {
  return Dc(/^Mac/i);
}
function oR() {
  return Dc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  bv() && navigator.maxTouchPoints > 1;
}
function aR() {
  return iR() || oR();
}
function sR() {
  return bv() || aR();
}
var lR = function(n) {
  return n.label;
}, uR = function(n) {
  return n.label;
}, cR = function(n) {
  return n.value;
}, dR = function(n) {
  return !!n.isDisabled;
}, fR = {
  clearIndicator: XO,
  container: FO,
  control: KO,
  dropdownIndicator: YO,
  group: rk,
  groupHeading: ok,
  indicatorsContainer: VO,
  indicatorSeparator: jO,
  input: uk,
  loadingIndicator: QO,
  loadingMessage: OO,
  menu: IO,
  menuList: DO,
  menuPortal: AO,
  multiValue: mk,
  multiValueLabel: hk,
  multiValueRemove: gk,
  noOptionsMessage: MO,
  option: Ik,
  placeholder: Ek,
  singleValue: Mk,
  valueContainer: _O
}, pR = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, mR = 4, yv = 4, hR = 38, gR = yv * 2, vR = {
  baseUnit: yv,
  controlHeight: hR,
  menuGutter: gR
}, hl = {
  borderRadius: mR,
  colors: pR,
  spacing: vR
}, bR = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Hf(),
  captureMenuScroll: !Hf(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Yk(),
  formatGroupLabel: lR,
  getOptionLabel: uR,
  getOptionValue: cR,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: dR,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !fO(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(n) {
    var t = n.count;
    return "".concat(t, " result").concat(t !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function ep(e, n, t, r) {
  var i = Iv(e, n, t), o = xv(e, n, t), a = Cv(e, n), s = Ma(e, n);
  return {
    type: "option",
    data: n,
    isDisabled: i,
    isSelected: o,
    label: a,
    value: s,
    index: r
  };
}
function Yo(e, n) {
  return e.options.map(function(t, r) {
    if ("options" in t) {
      var i = t.options.map(function(a, s) {
        return ep(e, a, n, s);
      }).filter(function(a) {
        return np(e, a);
      });
      return i.length > 0 ? {
        type: "group",
        data: t,
        options: i,
        index: r
      } : void 0;
    }
    var o = ep(e, t, n, r);
    return np(e, o) ? o : void 0;
  }).filter(hO);
}
function wv(e) {
  return e.reduce(function(n, t) {
    return t.type === "group" ? n.push.apply(n, pc(t.options.map(function(r) {
      return r.data;
    }))) : n.push(t.data), n;
  }, []);
}
function tp(e, n) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, pc(r.options.map(function(i) {
      return {
        data: i.data,
        id: "".concat(n, "-").concat(r.index, "-").concat(i.index)
      };
    }))) : t.push({
      data: r.data,
      id: "".concat(n, "-").concat(r.index)
    }), t;
  }, []);
}
function yR(e, n) {
  return wv(Yo(e, n));
}
function np(e, n) {
  var t = e.inputValue, r = t === void 0 ? "" : t, i = n.data, o = n.isSelected, a = n.label, s = n.value;
  return (!Ev(e) || !o) && Sv(e, {
    label: a,
    value: s,
    data: i
  }, r);
}
function wR(e, n) {
  var t = e.focusedValue, r = e.selectValue, i = r.indexOf(t);
  if (i > -1) {
    var o = n.indexOf(t);
    if (o > -1)
      return t;
    if (i < n.length)
      return n[i];
  }
  return null;
}
function CR(e, n) {
  var t = e.focusedOption;
  return t && n.indexOf(t) > -1 ? t : n[0];
}
var gl = function(n, t) {
  var r, i = (r = n.find(function(o) {
    return o.data === t;
  })) === null || r === void 0 ? void 0 : r.id;
  return i || null;
}, Cv = function(n, t) {
  return n.getOptionLabel(t);
}, Ma = function(n, t) {
  return n.getOptionValue(t);
};
function Iv(e, n, t) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(n, t) : !1;
}
function xv(e, n, t) {
  if (t.indexOf(n) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(n, t);
  var r = Ma(e, n);
  return t.some(function(i) {
    return Ma(e, i) === r;
  });
}
function Sv(e, n, t) {
  return e.filterOption ? e.filterOption(n, t) : !0;
}
var Ev = function(n) {
  var t = n.hideSelectedOptions, r = n.isMulti;
  return t === void 0 ? r : t;
}, IR = 1, Dv = /* @__PURE__ */ function(e) {
  V2(t, e);
  var n = $2(t);
  function t(r) {
    var i;
    if (_2(this, t), i = n.call(this, r), i.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, i.blockOptionHover = !1, i.isComposing = !1, i.commonProps = void 0, i.initialTouchX = 0, i.initialTouchY = 0, i.openAfterFocus = !1, i.scrollToFocusedOptionOnUpdate = !1, i.userIsDragging = void 0, i.isAppleDevice = sR(), i.controlRef = null, i.getControlRef = function(l) {
      i.controlRef = l;
    }, i.focusedOptionRef = null, i.getFocusedOptionRef = function(l) {
      i.focusedOptionRef = l;
    }, i.menuListRef = null, i.getMenuListRef = function(l) {
      i.menuListRef = l;
    }, i.inputRef = null, i.getInputRef = function(l) {
      i.inputRef = l;
    }, i.focus = i.focusInput, i.blur = i.blurInput, i.onChange = function(l, u) {
      var c = i.props, d = c.onChange, p = c.name;
      u.name = p, i.ariaOnChange(l, u), d(l, u);
    }, i.setValue = function(l, u, c) {
      var d = i.props, p = d.closeMenuOnSelect, f = d.isMulti, m = d.inputValue;
      i.onInputChange("", {
        action: "set-value",
        prevInputValue: m
      }), p && (i.setState({
        inputIsHiddenAfterUpdate: !f
      }), i.onMenuClose()), i.setState({
        clearFocusValueOnUpdate: !0
      }), i.onChange(l, {
        action: u,
        option: c
      });
    }, i.selectOption = function(l) {
      var u = i.props, c = u.blurInputOnSelect, d = u.isMulti, p = u.name, f = i.state.selectValue, m = d && i.isOptionSelected(l, f), h = i.isOptionDisabled(l, f);
      if (m) {
        var g = i.getOptionValue(l);
        i.setValue(f.filter(function(v) {
          return i.getOptionValue(v) !== g;
        }), "deselect-option", l);
      } else if (!h)
        d ? i.setValue([].concat(pc(f), [l]), "select-option", l) : i.setValue(l, "select-option");
      else {
        i.ariaOnChange(l, {
          action: "select-option",
          option: l,
          name: p
        });
        return;
      }
      c && i.blurInput();
    }, i.removeValue = function(l) {
      var u = i.props.isMulti, c = i.state.selectValue, d = i.getOptionValue(l), p = c.filter(function(m) {
        return i.getOptionValue(m) !== d;
      }), f = Ro(u, p, p[0] || null);
      i.onChange(f, {
        action: "remove-value",
        removedValue: l
      }), i.focusInput();
    }, i.clearValue = function() {
      var l = i.state.selectValue;
      i.onChange(Ro(i.props.isMulti, [], null), {
        action: "clear",
        removedValues: l
      });
    }, i.popValue = function() {
      var l = i.props.isMulti, u = i.state.selectValue, c = u[u.length - 1], d = u.slice(0, u.length - 1), p = Ro(l, d, d[0] || null);
      i.onChange(p, {
        action: "pop-value",
        removedValue: c
      });
    }, i.getFocusedOptionId = function(l) {
      return gl(i.state.focusableOptionsWithIds, l);
    }, i.getFocusableOptionsWithIds = function() {
      return tp(Yo(i.props, i.state.selectValue), i.getElementId("option"));
    }, i.getValue = function() {
      return i.state.selectValue;
    }, i.cx = function() {
      for (var l = arguments.length, u = new Array(l), c = 0; c < l; c++)
        u[c] = arguments[c];
      return sO.apply(void 0, [i.props.classNamePrefix].concat(u));
    }, i.getOptionLabel = function(l) {
      return Cv(i.props, l);
    }, i.getOptionValue = function(l) {
      return Ma(i.props, l);
    }, i.getStyles = function(l, u) {
      var c = i.props.unstyled, d = fR[l](u, c);
      d.boxSizing = "border-box";
      var p = i.props.styles[l];
      return p ? p(d, u) : d;
    }, i.getClassNames = function(l, u) {
      var c, d;
      return (c = (d = i.props.classNames)[l]) === null || c === void 0 ? void 0 : c.call(d, u);
    }, i.getElementId = function(l) {
      return "".concat(i.state.instancePrefix, "-").concat(l);
    }, i.getComponents = function() {
      return Rk(i.props);
    }, i.buildCategorizedOptions = function() {
      return Yo(i.props, i.state.selectValue);
    }, i.getCategorizedOptions = function() {
      return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
    }, i.buildFocusableOptions = function() {
      return wv(i.buildCategorizedOptions());
    }, i.getFocusableOptions = function() {
      return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
    }, i.ariaOnChange = function(l, u) {
      i.setState({
        ariaSelection: q({
          value: l
        }, u)
      });
    }, i.onMenuMouseDown = function(l) {
      l.button === 0 && (l.stopPropagation(), l.preventDefault(), i.focusInput());
    }, i.onMenuMouseMove = function(l) {
      i.blockOptionHover = !1;
    }, i.onControlMouseDown = function(l) {
      if (!l.defaultPrevented) {
        var u = i.props.openMenuOnClick;
        i.state.isFocused ? i.props.menuIsOpen ? l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && i.onMenuClose() : u && i.openMenu("first") : (u && (i.openAfterFocus = !0), i.focusInput()), l.target.tagName !== "INPUT" && l.target.tagName !== "TEXTAREA" && l.preventDefault();
      }
    }, i.onDropdownIndicatorMouseDown = function(l) {
      if (!(l && l.type === "mousedown" && l.button !== 0) && !i.props.isDisabled) {
        var u = i.props, c = u.isMulti, d = u.menuIsOpen;
        i.focusInput(), d ? (i.setState({
          inputIsHiddenAfterUpdate: !c
        }), i.onMenuClose()) : i.openMenu("first"), l.preventDefault();
      }
    }, i.onClearIndicatorMouseDown = function(l) {
      l && l.type === "mousedown" && l.button !== 0 || (i.clearValue(), l.preventDefault(), i.openAfterFocus = !1, l.type === "touchend" ? i.focusInput() : setTimeout(function() {
        return i.focusInput();
      }));
    }, i.onScroll = function(l) {
      typeof i.props.closeMenuOnScroll == "boolean" ? l.target instanceof HTMLElement && Is(l.target) && i.props.onMenuClose() : typeof i.props.closeMenuOnScroll == "function" && i.props.closeMenuOnScroll(l) && i.props.onMenuClose();
    }, i.onCompositionStart = function() {
      i.isComposing = !0;
    }, i.onCompositionEnd = function() {
      i.isComposing = !1;
    }, i.onTouchStart = function(l) {
      var u = l.touches, c = u && u.item(0);
      c && (i.initialTouchX = c.clientX, i.initialTouchY = c.clientY, i.userIsDragging = !1);
    }, i.onTouchMove = function(l) {
      var u = l.touches, c = u && u.item(0);
      if (c) {
        var d = Math.abs(c.clientX - i.initialTouchX), p = Math.abs(c.clientY - i.initialTouchY), f = 5;
        i.userIsDragging = d > f || p > f;
      }
    }, i.onTouchEnd = function(l) {
      i.userIsDragging || (i.controlRef && !i.controlRef.contains(l.target) && i.menuListRef && !i.menuListRef.contains(l.target) && i.blurInput(), i.initialTouchX = 0, i.initialTouchY = 0);
    }, i.onControlTouchEnd = function(l) {
      i.userIsDragging || i.onControlMouseDown(l);
    }, i.onClearIndicatorTouchEnd = function(l) {
      i.userIsDragging || i.onClearIndicatorMouseDown(l);
    }, i.onDropdownIndicatorTouchEnd = function(l) {
      i.userIsDragging || i.onDropdownIndicatorMouseDown(l);
    }, i.handleInputChange = function(l) {
      var u = i.props.inputValue, c = l.currentTarget.value;
      i.setState({
        inputIsHiddenAfterUpdate: !1
      }), i.onInputChange(c, {
        action: "input-change",
        prevInputValue: u
      }), i.props.menuIsOpen || i.onMenuOpen();
    }, i.onInputFocus = function(l) {
      i.props.onFocus && i.props.onFocus(l), i.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (i.openAfterFocus || i.props.openMenuOnFocus) && i.openMenu("first"), i.openAfterFocus = !1;
    }, i.onInputBlur = function(l) {
      var u = i.props.inputValue;
      if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
        i.inputRef.focus();
        return;
      }
      i.props.onBlur && i.props.onBlur(l), i.onInputChange("", {
        action: "input-blur",
        prevInputValue: u
      }), i.onMenuClose(), i.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, i.onOptionHover = function(l) {
      if (!(i.blockOptionHover || i.state.focusedOption === l)) {
        var u = i.getFocusableOptions(), c = u.indexOf(l);
        i.setState({
          focusedOption: l,
          focusedOptionId: c > -1 ? i.getFocusedOptionId(l) : null
        });
      }
    }, i.shouldHideSelectedOptions = function() {
      return Ev(i.props);
    }, i.onValueInputFocus = function(l) {
      l.preventDefault(), l.stopPropagation(), i.focus();
    }, i.onKeyDown = function(l) {
      var u = i.props, c = u.isMulti, d = u.backspaceRemovesValue, p = u.escapeClearsValue, f = u.inputValue, m = u.isClearable, h = u.isDisabled, g = u.menuIsOpen, v = u.onKeyDown, y = u.tabSelectsValue, b = u.openMenuOnFocus, I = i.state, w = I.focusedOption, S = I.focusedValue, x = I.selectValue;
      if (!h && !(typeof v == "function" && (v(l), l.defaultPrevented))) {
        switch (i.blockOptionHover = !0, l.key) {
          case "ArrowLeft":
            if (!c || f) return;
            i.focusValue("previous");
            break;
          case "ArrowRight":
            if (!c || f) return;
            i.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (f) return;
            if (S)
              i.removeValue(S);
            else {
              if (!d) return;
              c ? i.popValue() : m && i.clearValue();
            }
            break;
          case "Tab":
            if (i.isComposing || l.shiftKey || !g || !y || !w || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            b && i.isOptionSelected(w, x))
              return;
            i.selectOption(w);
            break;
          case "Enter":
            if (l.keyCode === 229)
              break;
            if (g) {
              if (!w || i.isComposing) return;
              i.selectOption(w);
              break;
            }
            return;
          case "Escape":
            g ? (i.setState({
              inputIsHiddenAfterUpdate: !1
            }), i.onInputChange("", {
              action: "menu-close",
              prevInputValue: f
            }), i.onMenuClose()) : m && p && i.clearValue();
            break;
          case " ":
            if (f)
              return;
            if (!g) {
              i.openMenu("first");
              break;
            }
            if (!w) return;
            i.selectOption(w);
            break;
          case "ArrowUp":
            g ? i.focusOption("up") : i.openMenu("last");
            break;
          case "ArrowDown":
            g ? i.focusOption("down") : i.openMenu("first");
            break;
          case "PageUp":
            if (!g) return;
            i.focusOption("pageup");
            break;
          case "PageDown":
            if (!g) return;
            i.focusOption("pagedown");
            break;
          case "Home":
            if (!g) return;
            i.focusOption("first");
            break;
          case "End":
            if (!g) return;
            i.focusOption("last");
            break;
          default:
            return;
        }
        l.preventDefault();
      }
    }, i.state.instancePrefix = "react-select-" + (i.props.instanceId || ++IR), i.state.selectValue = Gf(r.value), r.menuIsOpen && i.state.selectValue.length) {
      var o = i.getFocusableOptionsWithIds(), a = i.buildFocusableOptions(), s = a.indexOf(i.state.selectValue[0]);
      i.state.focusableOptionsWithIds = o, i.state.focusedOption = a[s], i.state.focusedOptionId = gl(o, a[s]);
    }
    return i;
  }
  return L2(t, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && $f(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var o = this.props, a = o.isDisabled, s = o.menuIsOpen, l = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (l && !a && i.isDisabled || // ensure focus is on the Input when the menu opens
      l && s && !i.menuIsOpen) && this.focusInput(), l && a && !i.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !l && !a && i.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && ($f(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(i, o) {
      this.props.onInputChange(i, o);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(i) {
      var o = this, a = this.state, s = a.selectValue, l = a.isFocused, u = this.buildFocusableOptions(), c = i === "first" ? 0 : u.length - 1;
      if (!this.props.isMulti) {
        var d = u.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(l && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: u[c],
        focusedOptionId: this.getFocusedOptionId(u[c])
      }, function() {
        return o.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(i) {
      var o = this.state, a = o.selectValue, s = o.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var l = a.indexOf(s);
        s || (l = -1);
        var u = a.length - 1, c = -1;
        if (a.length) {
          switch (i) {
            case "previous":
              l === 0 ? c = 0 : l === -1 ? c = u : c = l - 1;
              break;
            case "next":
              l > -1 && l < u && (c = l + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var l = 0, u = s.indexOf(a);
        a || (u = -1), i === "up" ? l = u > 0 ? u - 1 : s.length - 1 : i === "down" ? l = (u + 1) % s.length : i === "pageup" ? (l = u - o, l < 0 && (l = 0)) : i === "pagedown" ? (l = u + o, l > s.length - 1 && (l = s.length - 1)) : i === "last" && (l = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[l],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(s[l])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(hl) : q(q({}, hl), this.props.theme) : hl;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var i = this.clearValue, o = this.cx, a = this.getStyles, s = this.getClassNames, l = this.getValue, u = this.selectOption, c = this.setValue, d = this.props, p = d.isMulti, f = d.isRtl, m = d.options, h = this.hasValue();
      return {
        clearValue: i,
        cx: o,
        getStyles: a,
        getClassNames: s,
        getValue: l,
        hasValue: h,
        isMulti: p,
        isRtl: f,
        options: m,
        selectOption: u,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var i = this.state.selectValue;
      return i.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var i = this.props, o = i.isClearable, a = i.isMulti;
      return o === void 0 ? a : o;
    }
  }, {
    key: "isOptionDisabled",
    value: function(i, o) {
      return Iv(this.props, i, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(i, o) {
      return xv(this.props, i, o);
    }
  }, {
    key: "filterOption",
    value: function(i, o) {
      return Sv(this.props, i, o);
    }
  }, {
    key: "formatOptionLabel",
    value: function(i, o) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(i, {
          context: o,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(i);
    }
  }, {
    key: "formatGroupLabel",
    value: function(i) {
      return this.props.formatGroupLabel(i);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var i = this.props, o = i.isDisabled, a = i.isSearchable, s = i.inputId, l = i.inputValue, u = i.tabIndex, c = i.form, d = i.menuIsOpen, p = i.required, f = this.getComponents(), m = f.Input, h = this.state, g = h.inputIsHidden, v = h.ariaSelection, y = this.commonProps, b = s || this.getElementId("input"), I = q(q(q({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": p,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (v == null ? void 0 : v.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ T.createElement(m, ee({}, y, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: b,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: g,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: u,
          form: c,
          type: "text",
          value: l
        }, I)) : /* @__PURE__ */ T.createElement(Xk, ee({
          id: b,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Da,
          onFocus: this.onInputFocus,
          disabled: o,
          tabIndex: u,
          inputMode: "none",
          form: c,
          value: ""
        }, I));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var i = this, o = this.getComponents(), a = o.MultiValue, s = o.MultiValueContainer, l = o.MultiValueLabel, u = o.MultiValueRemove, c = o.SingleValue, d = o.Placeholder, p = this.commonProps, f = this.props, m = f.controlShouldRenderValue, h = f.isDisabled, g = f.isMulti, v = f.inputValue, y = f.placeholder, b = this.state, I = b.selectValue, w = b.focusedValue, S = b.isFocused;
      if (!this.hasValue() || !m)
        return v ? null : /* @__PURE__ */ T.createElement(d, ee({}, p, {
          key: "placeholder",
          isDisabled: h,
          isFocused: S,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), y);
      if (g)
        return I.map(function(E, D) {
          var _ = E === w, k = "".concat(i.getOptionLabel(E), "-").concat(i.getOptionValue(E));
          return /* @__PURE__ */ T.createElement(a, ee({}, p, {
            components: {
              Container: s,
              Label: l,
              Remove: u
            },
            isFocused: _,
            isDisabled: h,
            key: k,
            index: D,
            removeProps: {
              onClick: function() {
                return i.removeValue(E);
              },
              onTouchEnd: function() {
                return i.removeValue(E);
              },
              onMouseDown: function(A) {
                A.preventDefault();
              }
            },
            data: E
          }), i.formatOptionLabel(E, "value"));
        });
      if (v)
        return null;
      var x = I[0];
      return /* @__PURE__ */ T.createElement(c, ee({}, p, {
        data: x,
        isDisabled: h
      }), this.formatOptionLabel(x, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var i = this.getComponents(), o = i.ClearIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !o || l || !this.hasValue() || u)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ T.createElement(o, ee({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var i = this.getComponents(), o = i.LoadingIndicator, a = this.commonProps, s = this.props, l = s.isDisabled, u = s.isLoading, c = this.state.isFocused;
      if (!o || !u) return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ T.createElement(o, ee({}, a, {
        innerProps: d,
        isDisabled: l,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator, a = i.IndicatorSeparator;
      if (!o || !a) return null;
      var s = this.commonProps, l = this.props.isDisabled, u = this.state.isFocused;
      return /* @__PURE__ */ T.createElement(a, ee({}, s, {
        isDisabled: l,
        isFocused: u
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator;
      if (!o) return null;
      var a = this.commonProps, s = this.props.isDisabled, l = this.state.isFocused, u = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ T.createElement(o, ee({}, a, {
        innerProps: u,
        isDisabled: s,
        isFocused: l
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var i = this, o = this.getComponents(), a = o.Group, s = o.GroupHeading, l = o.Menu, u = o.MenuList, c = o.MenuPortal, d = o.LoadingMessage, p = o.NoOptionsMessage, f = o.Option, m = this.commonProps, h = this.state.focusedOption, g = this.props, v = g.captureMenuScroll, y = g.inputValue, b = g.isLoading, I = g.loadingMessage, w = g.minMenuHeight, S = g.maxMenuHeight, x = g.menuIsOpen, E = g.menuPlacement, D = g.menuPosition, _ = g.menuPortalTarget, k = g.menuShouldBlockScroll, F = g.menuShouldScrollIntoView, A = g.noOptionsMessage, N = g.onMenuScrollToTop, M = g.onMenuScrollToBottom;
      if (!x) return null;
      var V = function(se, me) {
        var Oe = se.type, oe = se.data, We = se.isDisabled, $e = se.isSelected, Yt = se.label, Bn = se.value, Ne = h === oe, $ = We ? void 0 : function() {
          return i.onOptionHover(oe);
        }, K = We ? void 0 : function() {
          return i.selectOption(oe);
        }, be = "".concat(i.getElementId("option"), "-").concat(me), ct = {
          id: be,
          onClick: K,
          onMouseMove: $,
          onMouseOver: $,
          tabIndex: -1,
          role: "option",
          "aria-selected": i.isAppleDevice ? void 0 : $e
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ T.createElement(f, ee({}, m, {
          innerProps: ct,
          data: oe,
          isDisabled: We,
          isSelected: $e,
          key: be,
          label: Yt,
          type: Oe,
          value: Bn,
          isFocused: Ne,
          innerRef: Ne ? i.getFocusedOptionRef : void 0
        }), i.formatOptionLabel(se.data, "menu"));
      }, R;
      if (this.hasOptions())
        R = this.getCategorizedOptions().map(function(W) {
          if (W.type === "group") {
            var se = W.data, me = W.options, Oe = W.index, oe = "".concat(i.getElementId("group"), "-").concat(Oe), We = "".concat(oe, "-heading");
            return /* @__PURE__ */ T.createElement(a, ee({}, m, {
              key: oe,
              data: se,
              options: me,
              Heading: s,
              headingProps: {
                id: We,
                data: W.data
              },
              label: i.formatGroupLabel(W.data)
            }), W.options.map(function($e) {
              return V($e, "".concat(Oe, "-").concat($e.index));
            }));
          } else if (W.type === "option")
            return V(W, "".concat(W.index));
        });
      else if (b) {
        var G = I({
          inputValue: y
        });
        if (G === null) return null;
        R = /* @__PURE__ */ T.createElement(d, m, G);
      } else {
        var O = A({
          inputValue: y
        });
        if (O === null) return null;
        R = /* @__PURE__ */ T.createElement(p, m, O);
      }
      var z = {
        minMenuHeight: w,
        maxMenuHeight: S,
        menuPlacement: E,
        menuPosition: D,
        menuShouldScrollIntoView: F
      }, ue = /* @__PURE__ */ T.createElement(xO, ee({}, m, z), function(W) {
        var se = W.ref, me = W.placerProps, Oe = me.placement, oe = me.maxHeight;
        return /* @__PURE__ */ T.createElement(l, ee({}, m, z, {
          innerRef: se,
          innerProps: {
            onMouseDown: i.onMenuMouseDown,
            onMouseMove: i.onMenuMouseMove
          },
          isLoading: b,
          placement: Oe
        }), /* @__PURE__ */ T.createElement(Kk, {
          captureEnabled: v,
          onTopArrive: N,
          onBottomArrive: M,
          lockEnabled: k
        }, function(We) {
          return /* @__PURE__ */ T.createElement(u, ee({}, m, {
            innerRef: function(Yt) {
              i.getMenuListRef(Yt), We(Yt);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": m.isMulti,
              id: i.getElementId("listbox")
            },
            isLoading: b,
            maxHeight: oe,
            focusedOption: h
          }), R);
        }));
      });
      return _ || D === "fixed" ? /* @__PURE__ */ T.createElement(c, ee({}, m, {
        appendTo: _,
        controlElement: this.controlRef,
        menuPlacement: E,
        menuPosition: D
      }), ue) : ue;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var i = this, o = this.props, a = o.delimiter, s = o.isDisabled, l = o.isMulti, u = o.name, c = o.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ T.createElement(rR, {
          name: u,
          onFocus: this.onValueInputFocus
        });
      if (!(!u || s))
        if (l)
          if (a) {
            var p = d.map(function(h) {
              return i.getOptionValue(h);
            }).join(a);
            return /* @__PURE__ */ T.createElement("input", {
              name: u,
              type: "hidden",
              value: p
            });
          } else {
            var f = d.length > 0 ? d.map(function(h, g) {
              return /* @__PURE__ */ T.createElement("input", {
                key: "i-".concat(g),
                name: u,
                type: "hidden",
                value: i.getOptionValue(h)
              });
            }) : /* @__PURE__ */ T.createElement("input", {
              name: u,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ T.createElement("div", null, f);
          }
        else {
          var m = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ T.createElement("input", {
            name: u,
            type: "hidden",
            value: m
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var i = this.commonProps, o = this.state, a = o.ariaSelection, s = o.focusedOption, l = o.focusedValue, u = o.isFocused, c = o.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ T.createElement(Gk, ee({}, i, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: l,
        isFocused: u,
        selectValue: c,
        focusableOptions: d,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var i = this.getComponents(), o = i.Control, a = i.IndicatorsContainer, s = i.SelectContainer, l = i.ValueContainer, u = this.props, c = u.className, d = u.id, p = u.isDisabled, f = u.menuIsOpen, m = this.state.isFocused, h = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ T.createElement(s, ee({}, h, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: p,
        isFocused: m
      }), this.renderLiveRegion(), /* @__PURE__ */ T.createElement(o, ee({}, h, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: p,
        isFocused: m,
        menuIsOpen: f
      }), /* @__PURE__ */ T.createElement(l, ee({}, h, {
        isDisabled: p
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ T.createElement(a, ee({}, h, {
        isDisabled: p
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, o) {
      var a = o.prevProps, s = o.clearFocusValueOnUpdate, l = o.inputIsHiddenAfterUpdate, u = o.ariaSelection, c = o.isFocused, d = o.prevWasFocused, p = o.instancePrefix, f = i.options, m = i.value, h = i.menuIsOpen, g = i.inputValue, v = i.isMulti, y = Gf(m), b = {};
      if (a && (m !== a.value || f !== a.options || h !== a.menuIsOpen || g !== a.inputValue)) {
        var I = h ? yR(i, y) : [], w = h ? tp(Yo(i, y), "".concat(p, "-option")) : [], S = s ? wR(o, y) : null, x = CR(o, I), E = gl(w, x);
        b = {
          selectValue: y,
          focusedOption: x,
          focusedOptionId: E,
          focusableOptionsWithIds: w,
          focusedValue: S,
          clearFocusValueOnUpdate: !1
        };
      }
      var D = l != null && i !== a ? {
        inputIsHidden: l,
        inputIsHiddenAfterUpdate: void 0
      } : {}, _ = u, k = c && d;
      return c && !k && (_ = {
        value: Ro(v, y, y[0] || null),
        options: y,
        action: "initial-input-focus"
      }, k = !d), (u == null ? void 0 : u.action) === "initial-input-focus" && (_ = null), q(q(q({}, b), D), {}, {
        prevProps: i,
        ariaSelection: _,
        prevWasFocused: k
      });
    }
  }]), t;
}(tt);
Dv.defaultProps = bR;
var xR = /* @__PURE__ */ Oa(function(e, n) {
  var t = N2(e);
  return /* @__PURE__ */ T.createElement(Dv, ee({
    ref: n
  }, t));
}), SR = xR;
const ER = (e) => /* @__PURE__ */ L(hv.MultiValueRemove, { ...e, children: /* @__PURE__ */ L(M2, {}) });
function $R({
  label: e,
  name: n,
  isRequired: t = !1,
  value: r = [],
  options: i = [],
  onChangeHandler: o,
  disabled: a = !1,
  clearIndicator: s = void 0,
  dropdownIndicator: l = void 0,
  color: u = "primary",
  className: c = "",
  ...d
}) {
  return /* @__PURE__ */ ce("div", { className: He(c), children: [
    e ? /* @__PURE__ */ L("div", { className: "mb-2", children: /* @__PURE__ */ ce(
      "label",
      {
        htmlFor: n,
        className: "text-gray-600 cds-body-sm !text-[.875rem]",
        children: [
          e,
          " ",
          t ? "*" : null
        ]
      }
    ) }) : null,
    /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ L(
        SR,
        {
          ...d,
          isMulti: !0,
          value: r,
          isDisabled: a,
          onChange: o,
          className: "multi-select",
          classNamePrefix: "select",
          options: i,
          components: {
            ClearIndicator: s,
            DropdownIndicator: l,
            MultiValueRemove: ER
          },
          classNames: {
            control: ({ isDisabled: p, isFocused: f, menuIsOpen: m }) => He(
              `w-full h-12 py-[.375rem] px-2 cds-body-sm text-grayscale-500
                placeholder:text-grayscale-100 rounded-md`,
              m ? `${`border-${u}-300`}` : "!border-grayscale-100",
              !p && f && `${`border-${u}-300`}`,
              f && "!shadow-none",
              `${`hover-border-${u}-300`}`
            ),
            option: ({ isDisabled: p, isFocused: f, isSelected: m }) => He(
              "!cds-body-sm text-grayscale-500",
              m && `!${`bg-${u}-300`}`,
              !m && f && (u === "primary" ? "!bg-primary-75" : u === "secondary" ? "!bg-secondary-75" : "!bg-transparent"),
              !p && !m && (u === "primary" ? "active:!bg-primary-300" : u === "secondary" ? "active:!bg-secondary-300" : "active:!bg-transparent")
            ),
            placeholder: (p) => He("cds-body-sm text-grayscale-100"),
            multiValue: () => He(
              `!rounded-md  !${`bg-${u}-75`} pl-[.5rem] text-[1rem]`
            ),
            multiValueLabel: () => He("cds-body-sm !text-grayscale-500"),
            multiValueRemove: () => He(
              "ml-2 !bg-transparent text-grayscale-200 hover:!text-black"
            )
          }
        }
      ),
      !1
    ] })
  ] });
}
function HR({
  label: e,
  name: n,
  type: t = "text",
  id: r,
  isRequired: i = !1,
  value: o = t === "number" ? 0 : "",
  autocomplete: a = "off",
  placeholder: s = "",
  disabled: l = !1,
  onChangeHandler: u,
  onBlurHandler: c,
  color: d = "primary",
  error: p = "",
  className: f = "",
  ...m
}) {
  return /* @__PURE__ */ ce("div", { className: He(f), children: [
    e ? /* @__PURE__ */ L("div", { className: "mb-2", children: /* @__PURE__ */ ce("label", { htmlFor: n, className: "text-gray-600 cds-body-sm", children: [
      e,
      " ",
      i ? "*" : null
    ] }) }) : null,
    /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ L(
        "input",
        {
          type: t,
          name: n,
          disabled: l,
          id: r || n,
          value: o,
          onChange: u,
          onBlur: c,
          autoComplete: a,
          className: `w-full h-12 py-3.5 px-6 cds-body-sm text-grayscale-500 border-0 rounded-md shadow-sm ring-1 ring-inset ring-grayscale-100
            placeholder:text-grayscale-100 focus:outline-none ${`hover-ring-${d}-300`} ${`focus-ring-${d}-300`}`,
          placeholder: s,
          ...m
        }
      ),
      p ? /* @__PURE__ */ L("span", { className: "cds-caption text-danger", children: p }) : null
    ] })
  ] });
}
function BR({
  label: e,
  name: n,
  onChangeHandler: t,
  value: r,
  isRequired: i = !1,
  disabled: o = !1,
  color: a = "primary",
  className: s = "",
  ...l
}) {
  return /* @__PURE__ */ ce("div", { className: He(s), children: [
    e ? /* @__PURE__ */ L("div", { className: "mb-2", children: /* @__PURE__ */ ce("label", { htmlFor: n, className: "text-gray-600 cds-body-sm", children: [
      e,
      " ",
      i ? "*" : null
    ] }) }) : null,
    /* @__PURE__ */ ce("div", { children: [
      /* @__PURE__ */ L(
        "input",
        {
          name: n,
          disabled: o,
          id: n,
          ...l,
          onChange: t,
          className: He(
            `w-full h-12 py-3.5 px-6 cds-body-sm text-grayscale-500 border-0 rounded-md shadow-sm ring-1 ring-inset ring-grayscale-100
          placeholder:text-grayscale-100 focus:outline-none ${`hover-ring-${a}-300`} ${`focus-ring-${a}-300`} file:disabled:cursor-default file:disabled:pointer-events-none file:disabled:text-grayscale-200 file:cds-body-sm file:text-grayscale-200 file:hover:cursor-pointer file:hover:text-grayscale-500 file:border-none file:bg-slate-100`
          ),
          type: "file"
        }
      ),
      r ? /* @__PURE__ */ L(
        "img",
        {
          src: XC(r),
          className: "w-1/4 mt-2 rounded-sm"
        }
      ) : null,
      !1
    ] })
  ] });
}
const YR = ({
  appearance: e = "grayscale",
  size: n = "small",
  loader: t = !1,
  disabled: r = !1,
  variant: i = "outline",
  backgroundColor: o,
  children: a,
  clickHandler: s,
  ...l
}) => {
  const u = `button-base active:bg-${e}-200 hover:bg-${e}-100`, c = o && i !== "link" ? { backgroundColor: o, color: "#fff" } : {}, d = r ? "disabled" : "", p = (() => {
    switch (i) {
      case "outline":
        return `border-${e}-500 hover:text-${e}-500`;
      case "link":
        return `hover:text-${e}-500`;
      case "solid":
      default:
        return `bg-${e}-75 text-${e}-500`;
    }
  })();
  return /* @__PURE__ */ ce(
    "button",
    {
      type: "button",
      onClick: s,
      style: c,
      className: [
        u,
        p,
        d,
        "focus-visible:outline-none",
        `button--${i}`,
        `button--${n}`
      ].join(" "),
      ...l,
      children: [
        t ? /* @__PURE__ */ L(Ww, { appearance: e }) : null,
        a
      ]
    }
  );
};
function DR(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z" }, child: [] }] })(e);
}
function TR(e) {
  return $n({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }, child: [] }] })(e);
}
function ZR({
  color: e = "primary",
  data: n,
  disabled: t = !1,
  placeholder: r = "Search..."
}) {
  const [i, o] = ae({}), [a, s] = ae(""), [l] = ae(n), u = a === "" ? l : l == null ? void 0 : l.filter(
    (c) => c.name.toLowerCase().replace(/\s+/g, "").includes(a.toLowerCase().replace(/\s+/g, ""))
  );
  return /* @__PURE__ */ L("div", { className: "relative z-[12] lg:w-96", children: /* @__PURE__ */ L(Hy, { value: i, onChange: o, disabled: t, children: /* @__PURE__ */ ce("div", { className: "relative mt-1", children: [
    /* @__PURE__ */ ce("div", { className: "flex items-center justify-center h-12 border group rounded-2xl bg-grayscale-50", children: [
      /* @__PURE__ */ L(
        DR,
        {
          className: "ml-4 w-7 h-7 group-focus-within:text-primary-300"
        }
      ),
      /* @__PURE__ */ L(
        sm,
        {
          placeholder: r,
          className: "w-full py-3.5 pl-3 pr-5 cds-body-sm border-none rounded-2xl focus:outline-none bg-grayscale-50",
          displayValue: (c) => c == null ? void 0 : c.name,
          onChange: (c) => s(c.target.value)
        }
      ),
      /* @__PURE__ */ ce(
        "div",
        {
          className: `w-4 h-4 mr-3 cursor-pointer ${i ? "visible" : "invisible"}`,
          onClick: () => o({}),
          children: [
            /* @__PURE__ */ L(
              TR,
              {
                className: "hover:text-primary-300",
                "aria-hidden": "true"
              }
            ),
            " "
          ]
        }
      )
    ] }),
    /* @__PURE__ */ L(
      Ji,
      {
        as: ze,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => s(""),
        children: /* @__PURE__ */ L(lm, { className: "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-65 focus:outline-none sm:text-sm", children: (u == null ? void 0 : u.length) === 0 && a !== "" ? /* @__PURE__ */ L("div", { className: "relative px-4 py-2 text-gray-700 cursor-default select-none", children: "Nothing found." }) : u == null ? void 0 : u.map((c) => /* @__PURE__ */ L(
          um,
          {
            className: ({ active: d }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 text-grayscale-500 ${d ? `bg-${e}-100` : ""}`,
            value: c,
            children: ({ selected: d }) => /* @__PURE__ */ L(Kn, { children: /* @__PURE__ */ L(
              "span",
              {
                className: `block truncate ${d ? "font-medium" : "font-normal"}`,
                children: c.name
              }
            ) })
          },
          c.id
        )) })
      }
    )
  ] }) }) });
}
const rp = {
  small: "h-8 w-8 text-[1rem] font-[600]",
  large: "h-16 w-16 text-[2rem] font-bold"
};
function XR({
  image: e,
  size: n = "small",
  name: t,
  color: r = "primary"
}) {
  const i = ZC(t);
  return /* @__PURE__ */ L("div", { className: "cursor-default", children: e ? /* @__PURE__ */ L(
    "img",
    {
      src: e,
      className: `${rp[n]} rounded-full`,
      alt: "Avatar"
    }
  ) : /* @__PURE__ */ L(
    "div",
    {
      className: `flex items-center justify-center rounded-full
          ${`bg-${r}-75`} ${rp[n]} p-[1.125rem]`,
      children: /* @__PURE__ */ L("span", { className: `${`text-${r}-500`} uppercase`, children: i })
    }
  ) });
}
export {
  ZR as Autocomplete,
  XR as Avatar,
  YR as Button,
  tI as Checkbox,
  GR as Datepicker,
  FR as DialogModal,
  LR as Dropdown,
  BR as FileInput,
  Ww as Loader,
  $R as MultiSelect,
  WR as Select,
  _R as Table,
  NR as TableCell,
  VR as Tabs,
  HR as TextInput
};
