/*! Sortable 1.7.0 - MIT | git://github.com/rubaxa/Sortable.git */

!function (t) { "use strict"; "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && void 0 !== module.exports ? module.exports = t() : window.Sortable = t() }(function () { "use strict"; function t(e, n) { if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(e); this.el = e, this.options = n = g({}, n), e[j] = this; var i = { group: null, sort: !0, disabled: !1, store: null, handle: null, scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, draggable: /[uo]l/i.test(e.nodeName) ? "li" : ">*", ghostClass: "sortable-ghost", chosenClass: "sortable-chosen", dragClass: "sortable-drag", ignore: "a, img", filter: null, preventOnFilter: !0, animation: 0, setData: function (t, e) { t.setData("Text", e.textContent) }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: "data-id", delay: 0, forceFallback: !1, fallbackClass: "sortable-fallback", fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: !1 !== t.supportPointer }; for (var r in i) !(r in n) && (n[r] = i[r]); rt(n); for (var a in this) "_" === a.charAt(0) && "function" == typeof this[a] && (this[a] = this[a].bind(this)); this.nativeDraggable = !n.forceFallback && Z, o(e, "mousedown", this._onTapStart), o(e, "touchstart", this._onTapStart), n.supportPointer && o(e, "pointerdown", this._onTapStart), this.nativeDraggable && (o(e, "dragover", this), o(e, "dragenter", this)), nt.push(this._onDragOver), n.store && this.sort(n.store.get(this)) } function e(t, e) { "clone" !== t.lastPullMode && (e = !0), w && w.state !== e && (a(w, "display", e ? "none" : ""), e || w.state && (t.options.group.revertClone ? (T.insertBefore(w, C), t._animate(b, w)) : T.insertBefore(w, b)), w.state = e) } function n(t, e, n) { if (t) { n = n || W; do { if (">*" === e && t.parentNode === n || f(t, e)) return t } while (t = function (t) { var e = t.host; return e && e.nodeType ? e : t.parentNode }(t)) } return null } function o(t, e, n) { t.addEventListener(e, n, Q) } function i(t, e, n) { t.removeEventListener(e, n, Q) } function r(t, e, n) { if (t) if (t.classList) t.classList[n ? "add" : "remove"](e); else { var o = (" " + t.className + " ").replace(F, " ").replace(" " + e + " ", " "); t.className = (o + (n ? " " + e : "")).replace(F, " ") } } function a(t, e, n) { var o = t && t.style; if (o) { if (void 0 === n) return W.defaultView && W.defaultView.getComputedStyle ? n = W.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e]; e in o || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px") } } function l(t, e, n) { if (t) { var o = t.getElementsByTagName(e), i = 0, r = o.length; if (n) for (; i < r; i++)n(o[i], i); return o } return [] } function s(t, e, n, o, i, r, a, l) { t = t || e[j]; var s = W.createEvent("Event"), c = t.options, d = "on" + n.charAt(0).toUpperCase() + n.substr(1); s.initEvent(n, !0, !0), s.to = i || e, s.from = r || e, s.item = o || e, s.clone = w, s.oldIndex = a, s.newIndex = l, e.dispatchEvent(s), c[d] && c[d].call(t, s) } function c(t, e, n, o, i, r, a, l) { var s, c, d = t[j], h = d.options.onMove; return (s = W.createEvent("Event")).initEvent("move", !0, !0), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || e.getBoundingClientRect(), s.willInsertAfter = l, t.dispatchEvent(s), h && (c = h.call(d, s, a)), c } function d(t) { t.draggable = !1 } function h() { K = !1 } function u(t, e) { var n = 0; if (!t || !t.parentNode) return -1; for (; t && (t = t.previousElementSibling);)"TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !f(t, e) || n++; return n } function f(t, e) { if (t) { var n = (e = e.split(".")).shift().toUpperCase(), o = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g"); return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(o) || []).length != e.length) } return !1 } function p(t, e) { var n, o; return function () { void 0 === n && (n = arguments, o = this, q(function () { 1 === n.length ? t.call(o, n[0]) : t.apply(o, n), n = void 0 }, e)) } } function g(t, e) { if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]); return t } function v(t) { return G && G.dom ? G.dom(t).cloneNode(!0) : z ? z(t).clone(!0)[0] : t.cloneNode(!0) } function m(t) { return q(t, 0) } function _(t) { return clearTimeout(t) } if ("undefined" == typeof window || !window.document) return function () { throw new Error("Sortable.js requires a window with a document") }; var b, D, y, w, T, C, S, E, x, N, k, B, P, Y, X, O, I, R, A, M, L = {}, F = /\s+/g, U = /left|right|inline/, j = "Sortable" + (new Date).getTime(), H = window, W = H.document, V = H.parseInt, q = H.setTimeout, z = H.jQuery || H.Zepto, G = H.Polymer, Q = !1, Z = "draggable" in W.createElement("div"), J = function (t) { return !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && (t = W.createElement("x"), t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents) }(), K = !1, $ = Math.abs, tt = Math.min, et = [], nt = [], ot = function () { return !1 }, it = p(function (t, e, n) { if (n && e.scroll) { var o, i, r, a, l, s, c = n[j], d = e.scrollSensitivity, h = e.scrollSpeed, u = t.clientX, f = t.clientY, p = window.innerWidth, g = window.innerHeight; if (x !== n && (E = e.scroll, x = n, N = e.scrollFn, !0 === E)) { E = n; do { if (E.offsetWidth < E.scrollWidth || E.offsetHeight < E.scrollHeight) break } while (E = E.parentNode) } E && (o = E, i = E.getBoundingClientRect(), r = ($(i.right - u) <= d) - ($(i.left - u) <= d), a = ($(i.bottom - f) <= d) - ($(i.top - f) <= d)), r || a || (a = (g - f <= d) - (f <= d), ((r = (p - u <= d) - (u <= d)) || a) && (o = H)), L.vx === r && L.vy === a && L.el === o || (L.el = o, L.vx = r, L.vy = a, clearInterval(L.pid), o && (L.pid = setInterval(function () { if (s = a ? a * h : 0, l = r ? r * h : 0, "function" == typeof N) return N.call(c, l, s, t); o === H ? H.scrollTo(H.pageXOffset + l, H.pageYOffset + s) : (o.scrollTop += s, o.scrollLeft += l) }, 24))) } }, 30), rt = function (t) { function e(t, e) { return null != t && !0 !== t || null != (t = n.name) ? "function" == typeof t ? t : function (n, o) { var i = o.options.group.name; return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t) } : ot } var n = {}, o = t.group; o && "object" == typeof o || (o = { name: o }), n.name = o.name, n.checkPull = e(o.pull, !0), n.checkPut = e(o.put), n.revertClone = o.revertClone, t.group = n }; try { window.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function () { Q = { capture: !1, passive: !1 } } })) } catch (t) { } return t.prototype = { constructor: t, _onTapStart: function (t) { var e, o = this, i = this.el, r = this.options, a = r.preventOnFilter, l = t.type, c = t.touches && t.touches[0], d = (c || t).target, h = t.target.shadowRoot && t.path && t.path[0] || d, f = r.filter; if (function (t) { et.length = 0; for (var e = t.getElementsByTagName("input"), n = e.length; n--;) { var o = e[n]; o.checked && et.push(o) } }(i), !b && !(/mousedown|pointerdown/.test(l) && 0 !== t.button || r.disabled) && !h.isContentEditable && (d = n(d, r.draggable, i)) && S !== d) { if (e = u(d, r.draggable), "function" == typeof f) { if (f.call(this, t, d, this)) return s(o, h, "filter", d, i, i, e), void (a && t.preventDefault()) } else if (f && (f = f.split(",").some(function (t) { if (t = n(h, t.trim(), i)) return s(o, t, "filter", d, i, i, e), !0 }))) return void (a && t.preventDefault()); r.handle && !n(h, r.handle, i) || this._prepareDragStart(t, c, d, e) } }, _prepareDragStart: function (t, e, n, i) { var a, c = this, h = c.el, u = c.options, f = h.ownerDocument; n && !b && n.parentNode === h && (R = t, T = h, D = (b = n).parentNode, C = b.nextSibling, S = n, O = u.group, Y = i, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, b.style["will-change"] = "all", a = function () { c._disableDelayedDrag(), b.draggable = c.nativeDraggable, r(b, u.chosenClass, !0), c._triggerDragStart(t, e), s(c, T, "choose", b, T, T, Y) }, u.ignore.split(",").forEach(function (t) { l(b, t.trim(), d) }), o(f, "mouseup", c._onDrop), o(f, "touchend", c._onDrop), o(f, "touchcancel", c._onDrop), o(f, "selectstart", c), u.supportPointer && o(f, "pointercancel", c._onDrop), u.delay ? (o(f, "mouseup", c._disableDelayedDrag), o(f, "touchend", c._disableDelayedDrag), o(f, "touchcancel", c._disableDelayedDrag), o(f, "mousemove", c._disableDelayedDrag), o(f, "touchmove", c._disableDelayedDrag), u.supportPointer && o(f, "pointermove", c._disableDelayedDrag), c._dragStartTimer = q(a, u.delay)) : a()) }, _disableDelayedDrag: function () { var t = this.el.ownerDocument; clearTimeout(this._dragStartTimer), i(t, "mouseup", this._disableDelayedDrag), i(t, "touchend", this._disableDelayedDrag), i(t, "touchcancel", this._disableDelayedDrag), i(t, "mousemove", this._disableDelayedDrag), i(t, "touchmove", this._disableDelayedDrag), i(t, "pointermove", this._disableDelayedDrag) }, _triggerDragStart: function (t, e) { (e = e || ("touch" == t.pointerType ? t : null)) ? (R = { target: b, clientX: e.clientX, clientY: e.clientY }, this._onDragStart(R, "touch")) : this.nativeDraggable ? (o(b, "dragend", this), o(T, "dragstart", this._onDragStart)) : this._onDragStart(R, !0); try { W.selection ? m(function () { W.selection.empty() }) : window.getSelection().removeAllRanges() } catch (t) { } }, _dragStarted: function () { if (T && b) { var e = this.options; r(b, e.ghostClass, !0), r(b, e.dragClass, !1), t.active = this, s(this, T, "start", b, T, T, Y) } else this._nulling() }, _emulateDragOver: function () { if (A) { if (this._lastX === A.clientX && this._lastY === A.clientY) return; this._lastX = A.clientX, this._lastY = A.clientY, J || a(y, "display", "none"); var t = W.elementFromPoint(A.clientX, A.clientY), e = t, n = nt.length; if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(A.clientX, A.clientY)), e) do { if (e[j]) { for (; n--;)nt[n]({ clientX: A.clientX, clientY: A.clientY, target: t, rootEl: e }); break } t = e } while (e = e.parentNode); J || a(y, "display", "") } }, _onTouchMove: function (e) { if (R) { var n = this.options, o = n.fallbackTolerance, i = n.fallbackOffset, r = e.touches ? e.touches[0] : e, l = r.clientX - R.clientX + i.x, s = r.clientY - R.clientY + i.y, c = e.touches ? "translate3d(" + l + "px," + s + "px,0)" : "translate(" + l + "px," + s + "px)"; if (!t.active) { if (o && tt($(r.clientX - this._lastX), $(r.clientY - this._lastY)) < o) return; this._dragStarted() } this._appendGhost(), M = !0, A = r, a(y, "webkitTransform", c), a(y, "mozTransform", c), a(y, "msTransform", c), a(y, "transform", c), e.preventDefault() } }, _appendGhost: function () { if (!y) { var t, e = b.getBoundingClientRect(), n = a(b), o = this.options; r(y = b.cloneNode(!0), o.ghostClass, !1), r(y, o.fallbackClass, !0), r(y, o.dragClass, !0), a(y, "top", e.top - V(n.marginTop, 10)), a(y, "left", e.left - V(n.marginLeft, 10)), a(y, "width", e.width), a(y, "height", e.height), a(y, "opacity", "0.8"), a(y, "position", "fixed"), a(y, "zIndex", "100000"), a(y, "pointerEvents", "none"), o.fallbackOnBody && W.body.appendChild(y) || T.appendChild(y), t = y.getBoundingClientRect(), a(y, "width", 2 * e.width - t.width), a(y, "height", 2 * e.height - t.height) } }, _onDragStart: function (t, e) { var n = this, i = t.dataTransfer, l = n.options; n._offUpEvents(), O.checkPull(n, n, b, t) && ((w = v(b)).draggable = !1, w.style["will-change"] = "", a(w, "display", "none"), r(w, n.options.chosenClass, !1), n._cloneId = m(function () { T.insertBefore(w, b), s(n, T, "clone", b) })), r(b, l.dragClass, !0), e ? ("touch" === e ? (o(W, "touchmove", n._onTouchMove), o(W, "touchend", n._onDrop), o(W, "touchcancel", n._onDrop), l.supportPointer && (o(W, "pointermove", n._onTouchMove), o(W, "pointerup", n._onDrop))) : (o(W, "mousemove", n._onTouchMove), o(W, "mouseup", n._onDrop)), n._loopId = setInterval(n._emulateDragOver, 50)) : (i && (i.effectAllowed = "move", l.setData && l.setData.call(n, i, b)), o(W, "drop", n), n._dragStartId = m(n._dragStarted)) }, _onDragOver: function (o) { var i, r, l, s, d = this.el, u = this.options, f = u.group, p = t.active, g = O === f, v = !1, m = u.sort; if (void 0 !== o.preventDefault && (o.preventDefault(), !u.dragoverBubble && o.stopPropagation()), !b.animated && (M = !0, p && !u.disabled && (g ? m || (s = !T.contains(b)) : I === this || (p.lastPullMode = O.checkPull(this, p, b, o)) && f.checkPut(this, p, b, o)) && (void 0 === o.rootEl || o.rootEl === this.el))) { if (it(o, u, this.el), K) return; if (i = n(o.target, u.draggable, d), r = b.getBoundingClientRect(), I !== this && (I = this, v = !0), s) return e(p, !0), D = T, void (w || C ? T.insertBefore(b, w || C) : m || T.appendChild(b)); if (0 === d.children.length || d.children[0] === y || d === o.target && function (t, e) { var n = t.lastElementChild.getBoundingClientRect(); return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5 }(d, o)) { if (0 !== d.children.length && d.children[0] !== y && d === o.target && (i = d.lastElementChild), i) { if (i.animated) return; l = i.getBoundingClientRect() } e(p, g), !1 !== c(T, d, b, r, i, l, o) && (b.contains(d) || (d.appendChild(b), D = d), this._animate(r, b), i && this._animate(l, i)) } else if (i && !i.animated && i !== b && void 0 !== i.parentNode[j]) { k !== i && (k = i, B = a(i), P = a(i.parentNode)); var _ = (l = i.getBoundingClientRect()).right - l.left, S = l.bottom - l.top, E = U.test(B.cssFloat + B.display) || "flex" == P.display && 0 === P["flex-direction"].indexOf("row"), x = i.offsetWidth > b.offsetWidth, N = i.offsetHeight > b.offsetHeight, Y = (E ? (o.clientX - l.left) / _ : (o.clientY - l.top) / S) > .5, X = i.nextElementSibling, R = !1; if (E) { var A = b.offsetTop, L = i.offsetTop; R = A === L ? i.previousElementSibling === b && !x || Y && x : i.previousElementSibling === b || b.previousElementSibling === i ? (o.clientY - l.top) / S > .5 : L > A } else v || (R = X !== b && !N || Y && N); var F = c(T, d, b, r, i, l, o, R); !1 !== F && (1 !== F && -1 !== F || (R = 1 === F), K = !0, q(h, 30), e(p, g), b.contains(d) || (R && !X ? d.appendChild(b) : i.parentNode.insertBefore(b, R ? X : i)), D = b.parentNode, this._animate(r, b), this._animate(l, i)) } } }, _animate: function (t, e) { var n = this.options.animation; if (n) { var o = e.getBoundingClientRect(); 1 === t.nodeType && (t = t.getBoundingClientRect()), a(e, "transition", "none"), a(e, "transform", "translate3d(" + (t.left - o.left) + "px," + (t.top - o.top) + "px,0)"), e.offsetWidth, a(e, "transition", "all " + n + "ms"), a(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = q(function () { a(e, "transition", ""), a(e, "transform", ""), e.animated = !1 }, n) } }, _offUpEvents: function () { var t = this.el.ownerDocument; i(W, "touchmove", this._onTouchMove), i(W, "pointermove", this._onTouchMove), i(t, "mouseup", this._onDrop), i(t, "touchend", this._onDrop), i(t, "pointerup", this._onDrop), i(t, "touchcancel", this._onDrop), i(t, "pointercancel", this._onDrop), i(t, "selectstart", this) }, _onDrop: function (e) { var n = this.el, o = this.options; clearInterval(this._loopId), clearInterval(L.pid), clearTimeout(this._dragStartTimer), _(this._cloneId), _(this._dragStartId), i(W, "mouseover", this), i(W, "mousemove", this._onTouchMove), this.nativeDraggable && (i(W, "drop", this), i(n, "dragstart", this._onDragStart)), this._offUpEvents(), e && (M && (e.preventDefault(), !o.dropBubble && e.stopPropagation()), y && y.parentNode && y.parentNode.removeChild(y), T !== D && "clone" === t.active.lastPullMode || w && w.parentNode && w.parentNode.removeChild(w), b && (this.nativeDraggable && i(b, "dragend", this), d(b), b.style["will-change"] = "", r(b, this.options.ghostClass, !1), r(b, this.options.chosenClass, !1), s(this, T, "unchoose", b, D, T, Y), T !== D ? (X = u(b, o.draggable)) >= 0 && (s(null, D, "add", b, D, T, Y, X), s(this, T, "remove", b, D, T, Y, X), s(null, D, "sort", b, D, T, Y, X), s(this, T, "sort", b, D, T, Y, X)) : b.nextSibling !== C && (X = u(b, o.draggable)) >= 0 && (s(this, T, "update", b, D, T, Y, X), s(this, T, "sort", b, D, T, Y, X)), t.active && (null != X && -1 !== X || (X = Y), s(this, T, "end", b, D, T, Y, X), this.save()))), this._nulling() }, _nulling: function () { T = b = D = y = C = w = S = E = x = R = A = M = X = k = B = I = O = t.active = null, et.forEach(function (t) { t.checked = !0 }), et.length = 0 }, handleEvent: function (t) { switch (t.type) { case "drop": case "dragend": this._onDrop(t); break; case "dragover": case "dragenter": b && (this._onDragOver(t), function (t) { t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.preventDefault() }(t)); break; case "mouseover": this._onDrop(t); break; case "selectstart": t.preventDefault() } }, toArray: function () { for (var t, e = [], o = this.el.children, i = 0, r = o.length, a = this.options; i < r; i++)n(t = o[i], a.draggable, this.el) && e.push(t.getAttribute(a.dataIdAttr) || function (t) { for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--;)o += e.charCodeAt(n); return o.toString(36) }(t)); return e }, sort: function (t) { var e = {}, o = this.el; this.toArray().forEach(function (t, i) { var r = o.children[i]; n(r, this.options.draggable, o) && (e[t] = r) }, this), t.forEach(function (t) { e[t] && (o.removeChild(e[t]), o.appendChild(e[t])) }) }, save: function () { var t = this.options.store; t && t.set(this) }, closest: function (t, e) { return n(t, e || this.options.draggable, this.el) }, option: function (t, e) { var n = this.options; if (void 0 === e) return n[t]; n[t] = e, "group" === t && rt(n) }, destroy: function () { var t = this.el; t[j] = null, i(t, "mousedown", this._onTapStart), i(t, "touchstart", this._onTapStart), i(t, "pointerdown", this._onTapStart), this.nativeDraggable && (i(t, "dragover", this), i(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function (t) { t.removeAttribute("draggable") }), nt.splice(nt.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null } }, o(W, "touchmove", function (e) { t.active && e.preventDefault() }), t.utils = { on: o, off: i, css: a, find: l, is: function (t, e) { return !!n(t, e, t) }, extend: g, throttle: p, closest: n, toggleClass: r, clone: v, index: u, nextTick: m, cancelNextTick: _ }, t.create = function (e, n) { return new t(e, n) }, t.version = "1.7.0", t });
var app = app || {};

app.checkAssignmentColor = (assignment) => {
    if(assignment.hasClass('color')) {
        let assignmentId = assignment.attr('data-id'),
            controls = assignment.find('.controls > button'),
            container = assignment.find('.flex-table'),
            items = container.children(),
            activeId = controls.filter(".active").attr('data-id'),
            correctSvg = '<svg focusable="false"><use xlink:href="#svg-checkmark"></use></svg>',
            wrongSvg = '<svg focusable="false"><use xlink:href="#svg-close"></use></svg>';

        let reset = () => {
            controls.filter('.eraser').addClass('active');
            controls.filter(':not(.eraser)').removeClass('active').empty();
            items.removeAttr('data-id');
            assignment.removeClass('validated');
        };

        let getCorrect = () => {
            // this should be retrieved with api call
            if (assignmentId === '1') {
                return [
                    {
                        id: 'blue',
                        value: 3
                    },
                    {
                        id: 'green',
                        value: 2
                    },
                    {
                        id: 'red',
                        value: 4
                    }
                ];
            } else if (assignmentId === '2') {
                return [
                    {
                        id: 'orange',
                        value: 4
                    },
                    {
                        id: 'teal',
                        value: 2
                    }
                ];
            }
        };

        let getItems = (id) => {
            let result = 0;
            items.each((i, data) => {
                let $this = $(data),
                    itemId = $this.attr('data-id');
                if (itemId !== undefined && id === itemId) {
                    result++;
                }
            });
            return result;
        };

        assignment.on('click', 'button[type="submit"]', () => {
            if (!assignment.hasClass('validated')) {
                assignment.addClass('validated');
                let correct = getCorrect();
                $(correct).each((i, data) => {
                    let selected = getItems(data.id),
                        append = (data.value === selected) ? correctSvg : wrongSvg;
                    controls.filter('[data-id="' + data.id + '"]').append(append);
                });
            }
        });

        assignment.on('click', 'button[type="reset"]', () => {
            reset();
        });

        assignment.on('click', 'button.correct', () => {
            reset();
            assignment.addClass('validated');
            let correct = getCorrect();
            $(correct).each((i, data) => {
                for (i = 0; i < data.value; i++) {
                    $(items.filter(':not([data-id])')[0]).attr('data-id', data.id);
                }
                controls.filter('[data-id="' + data.id + '"]').append(correctSvg);
            });
        });

        controls.on('click', (e) => {
            let $this = $(e.currentTarget);
            $this.addClass('active').siblings('.active').removeClass('active');
            activeId = $this.attr('data-id');
        });

        items.on('click', (e) => {
            let $this = $(e.currentTarget);
            $this.attr('data-id', activeId);
        });
    };
};
var app = app || {};

app.checkAssignmentDragAndDrop = (assignment) => {
    if (assignment.hasClass('drag-and-drop')) {
        assignment.attr('data-moving', 0);
        let id = assignment.attr('data-id'),
            from = assignment.find('.from .container'),
            items = assignment.find('.item'),
            checkboxes = items.find('input[type=checkbox]');

        let getChecked = () => {
            return $($.map(checkboxes, (item) => {
                if (item.checked) {
                    return item;
                }
            }));
        };
    
        let reset = () => {
            items.removeClass('valid invalid');
            let checked = getChecked();
            if (checked.length) {
                checked.prop('checked', false);
            }
            from.append(items);
            assignment.removeClass('validated moving');
            items = items.shuffle();
        };

        let getCorrect = () => {
            // this should be retrieved with api call
            if (id === '1') {
                return [
                    {
                        id: '1', // TV
                        items: ['5', '7']
                    },
                    {
                        id: '2', // Games
                        items: ['6', '8']
                    },
                    {
                        id: '3', // Music
                        items: ['2', '4']
                    },
                    {
                        id: '4', // Sport
                        items: ['1', '3']
                    }
                ];
            }
        };
        if (bowser.desktop) {
            assignment.find('.container').each((i, e) => {
                Sortable.create(e, {
                    group: 'container', draggable: ".item",
                    animation: 0,
                    scroll: false,
                    forceFallback: true,
                    fallbackOnBody: true,
                    chosenClass: 'drag-and-drop-sortable-chosen',
                    onAdd: () => {
                        setTimeout(() => {
                            let checked = getChecked();
                            if (checked.length) {
                                checked.prop('checked', false);
                                assignment.removeClass('moving');
                            }
                        });
                    }
                });
            });
        }

        checkboxes.on('click', (e) => {
            let $this = $(e.currentTarget),
                item = $this.parents('.item'),
                moving = parseInt(assignment.attr('data-moving'));
            if ($this.is(':checked')) {
                moving++;
                assignment.attr('data-moving', moving);
                assignment.addClass('moving');
            } else {
                moving--;
                assignment.attr('data-moving', moving);
                if (moving === 0) {
                    assignment.removeClass('moving');
                }
            }
        });

        assignment.on('click', '.place', (e) => {
            let $this = $(e.currentTarget)
            assignment.removeClass('moving');
            let checked = getChecked();
            if (checked.length) {
                checked.prop('checked', false);
                $this.parent('.header').next().children('.container').append(checked.parent());
            }
        });

        assignment.on('click', 'button[type="submit"]', () => {
            if (!assignment.hasClass('validated')) {
                let checked = getChecked();
                if (checked.length) {
                    checked.prop('checked', false);
                }
                assignment.addClass('validated');
                let correct = getCorrect();
                $(correct).each((i, data) => {
                    let container = assignment.find('.to .container[data-id="' + data.id + '"]');
                    container.children().each((i, child) => {
                        let item = $(child);
                        if ($.inArray(item.attr('data-id'), data.items) !== -1) {
                            item.addClass('valid');
                        } else {
                            item.addClass('invalid');
                        }
                    });
                });
            }
        });

        assignment.on('click', 'button[type="reset"]', () => {
            reset();
        });

        assignment.on('click', 'button.correct', () => {
            reset();
            assignment.addClass('validated');
            let correct = getCorrect();
            $(correct).each((i, data) => {
                let container = assignment.find('.to .container[data-id="' + data.id + '"]');
                $(data.items).each((j, id) => {
                    let item = app.getAssignmentItem(items, id);
                    item.addClass('valid');
                    item.appendTo(container);
                });
            });
        });
    }
};
var app = app || {};

app.checkAssignmentSort = (assignment) => {
    if (assignment.hasClass('sort')) {
        let id = assignment.attr('data-id'),
            container = assignment.find('.container'),
            items = assignment.find('.item');
        Sortable.create(container[0], {
            draggable: ".item",
            animation: 0,
            scroll: false,
            forceFallback: true,
            fallbackOnBody: true,
            chosenClass: 'sort-sortable-chosen'
        });

        if (!container.hasClass('wrap')) {
            let checkWidth = () => {
                container.css('height', container.height()).removeClass('row').addClass('column');
                let containerLeft = container[0].getBoundingClientRect().left,
                    firstItem = container.find('> .item:first-child'),
                    firstItemLeft = firstItem[0].getBoundingClientRect().left - parseInt(firstItem.css('margin-left'));
                if (firstItemLeft < containerLeft) {
                    container.removeClass('column').addClass('row');
                }
                container.css('height', '').addClass('checked');
            };

            let awaitCSS = () => {
                setInterval(() => {
                    if (app.cssLoaded()) {
                        clearInterval(awaitCSS);

                        checkWidth();

                        $(window).on("throttledresize.assignment", () => {
                            checkWidth();
                        });
                    }
                }, app.cssInterval);
            }
            awaitCSS();
        }

        let reset = () => {
            items.removeClass('valid invalid');
            assignment.removeClass('validated');
            items = items.shuffle();
        };

        let getCorrect = () => {
            // this should be retrieved with api call
            if (id === '1') {
                return ['3', '1', '2', '5', '4', '7', '6', '8', '9'];
            } else if (id === '2') {
                return ['4', '2', '1', '3'];
            }
        };

        assignment.on('click', 'button[type="submit"]', () => {
            if (!assignment.hasClass('validated')) {
                assignment.addClass('validated');
                let correct = getCorrect();
                $(correct).each((i, id) => {
                    let item = app.getAssignmentItem(items, id);
                    if (item.index() === i) {
                        item.addClass('valid');
                    } else {
                        item.addClass('invalid');
                    }
                });
            }
        });

        assignment.on('click', 'button[type="reset"]', () => {
            reset();
        });

        function insertAtIndex(i, item) {
            if (i === 0) {
                container.prepend(item);
            } else {
                container.find('> .item:nth-child(' + i + ')').after(item);
            }
        };

        assignment.on('click', 'button.correct', () => {
            reset();
            assignment.addClass('validated');
            let correct = getCorrect();
            $(correct).each((i, id) => {
                let item = app.getAssignmentItem(items, id);
                item.addClass('valid');
                insertAtIndex(i, item);
            });
        });
    }
};