"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():window.Sortable=t()}(function(){function S(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=r({},e),t[W]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==S.supportPointer};for(var a in n)!(a in e)&&(e[a]=n[a]);for(var o in rt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Q,d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart),e.supportPointer&&d(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),at.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function T(t,e){"clone"!==t.lastPullMode&&(e=!0),$&&$.state!==e&&(E($,"display",e?"none":""),e||$.state&&(t.options.group.revertClone?(Y.insertBefore($,O),t._animate(N,$)):Y.insertBefore($,N)),$.state=e)}function x(t,e,n){if(t){n=n||H;do{if(">*"===e&&t.parentNode===n||i(t,e))return t}while(void 0,t=(o=(a=t).host)&&o.nodeType?o:a.parentNode)}var a,o;return null}function d(t,e,n){t.addEventListener(e,n,q)}function a(t,e,n){t.removeEventListener(e,n,q)}function c(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var a=(" "+t.className+" ").replace(k," ").replace(" "+e+" "," ");t.className=(a+(n?" "+e:"")).replace(k," ")}}function E(t,e,n){var a=t&&t.style;if(a){if(void 0===n)return H.defaultView&&H.defaultView.getComputedStyle?n=H.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in a||(e="-webkit-"+e),a[e]=n+("string"==typeof n?"":"px")}}function u(t,e,n){if(t){var a=t.getElementsByTagName(e),o=0,i=a.length;if(n)for(;o<i;o++)n(a[o],o);return a}return[]}function f(t,e,n,a,o,i,r,l){t=t||e[W];var s=H.createEvent("Event"),d=t.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=o||e,s.from=i||e,s.item=a||e,s.clone=$,s.oldIndex=r,s.newIndex=l,e.dispatchEvent(s),d[c]&&d[c].call(t,s)}function I(t,e,n,a,o,i,r,l){var s,d,c=t[W],u=c.options.onMove;return(s=H.createEvent("Event")).initEvent("move",!0,!0),s.to=e,s.from=t,s.dragged=n,s.draggedRect=a,s.related=o||e,s.relatedRect=i||e.getBoundingClientRect(),s.willInsertAfter=l,t.dispatchEvent(s),u&&(d=u.call(c,s,r)),d}function h(t){t.draggable=!1}function P(){J=!1}function p(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!i(t,e)||n++;return n}function i(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),a=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(a)||[]).length!=e.length)}return!1}function t(t,e){var n,a;return function(){void 0===n&&(n=arguments,a=this,K(function(){1===n.length?t.call(a,n[0]):t.apply(a,n),n=void 0},e))}}function r(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function l(t){return V&&V.dom?V.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function s(t){return K(t,0)}function o(t){return clearTimeout(t)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var N,A,B,$,Y,O,v,g,m,b,X,R,M,y,C,z,L,_,D,F,e,w={},k=/\s+/g,U=/left|right|inline/,W="Sortable"+(new Date).getTime(),j=window,H=j.document,G=j.parseInt,K=j.setTimeout,n=j.jQuery||j.Zepto,V=j.Polymer,q=!1,Q="draggable"in H.createElement("div"),Z=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((e=H.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),J=!1,tt=Math.abs,et=Math.min,nt=[],at=[],ot=function(){return!1},it=t(function(t,e,n){if(n&&e.scroll){var a,o,i,r,l,s,d=n[W],c=e.scrollSensitivity,u=e.scrollSpeed,f=t.clientX,h=t.clientY,p=window.innerWidth,v=window.innerHeight;if(m!==n&&(g=e.scroll,m=n,b=e.scrollFn,!0===g)){g=n;do{if(g.offsetWidth<g.scrollWidth||g.offsetHeight<g.scrollHeight)break}while(g=g.parentNode)}g&&(o=(a=g).getBoundingClientRect(),i=(tt(o.right-f)<=c)-(tt(o.left-f)<=c),r=(tt(o.bottom-h)<=c)-(tt(o.top-h)<=c)),i||r||(r=(v-h<=c)-(h<=c),((i=(p-f<=c)-(f<=c))||r)&&(a=j)),w.vx===i&&w.vy===r&&w.el===a||(w.el=a,w.vx=i,w.vy=r,clearInterval(w.pid),a&&(w.pid=setInterval(function(){if(s=r?r*u:0,l=i?i*u:0,"function"==typeof b)return b.call(d,l,s,t);a===j?j.scrollTo(j.pageXOffset+l,j.pageYOffset+s):(a.scrollTop+=s,a.scrollLeft+=l)},24)))}},30),rt=function(t){function e(a,o){return null!=a&&!0!==a||null!=(a=n.name)?"function"==typeof a?a:function(t,e){var n=e.options.group.name;return o?a:a&&(a.join?-1<a.indexOf(n):n==a)}:ot}var n={},a=t.group;a&&"object"==(void 0===a?"undefined":_typeof(a))||(a={name:a}),n.name=a.name,n.checkPull=e(a.pull,!0),n.checkPut=e(a.put),n.revertClone=a.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){q={capture:!1,passive:!1}}}))}catch(S){}return S.prototype={constructor:S,_onTapStart:function(t){var e,n=this,a=this.el,o=this.options,i=o.preventOnFilter,r=t.type,l=t.touches&&t.touches[0],s=(l||t).target,d=t.target.shadowRoot&&t.path&&t.path[0]||s,c=o.filter;if(function(t){nt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var a=e[n];a.checked&&nt.push(a)}}(a),!N&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!d.isContentEditable&&(s=x(s,o.draggable,a))&&v!==s){if(e=p(s,o.draggable),"function"==typeof c){if(c.call(this,t,s,this))return f(n,d,"filter",s,a,a,e),void(i&&t.preventDefault())}else if(c&&(c=c.split(",").some(function(t){if(t=x(d,t.trim(),a))return f(n,t,"filter",s,a,a,e),!0})))return void(i&&t.preventDefault());o.handle&&!x(d,o.handle,a)||this._prepareDragStart(t,l,s,e)}},_prepareDragStart:function(t,e,n,a){var o,i=this,r=i.el,l=i.options,s=r.ownerDocument;n&&!N&&n.parentNode===r&&(_=t,Y=r,A=(N=n).parentNode,O=N.nextSibling,v=n,z=l.group,y=a,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,N.style["will-change"]="all",o=function(){i._disableDelayedDrag(),N.draggable=i.nativeDraggable,c(N,l.chosenClass,!0),i._triggerDragStart(t,e),f(i,Y,"choose",N,Y,Y,y)},l.ignore.split(",").forEach(function(t){u(N,t.trim(),h)}),d(s,"mouseup",i._onDrop),d(s,"touchend",i._onDrop),d(s,"touchcancel",i._onDrop),d(s,"selectstart",i),l.supportPointer&&d(s,"pointercancel",i._onDrop),l.delay?(d(s,"mouseup",i._disableDelayedDrag),d(s,"touchend",i._disableDelayedDrag),d(s,"touchcancel",i._disableDelayedDrag),d(s,"mousemove",i._disableDelayedDrag),d(s,"touchmove",i._disableDelayedDrag),l.supportPointer&&d(s,"pointermove",i._disableDelayedDrag),i._dragStartTimer=K(o,l.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){(e=e||("touch"==t.pointerType?t:null))?(_={target:N,clientX:e.clientX,clientY:e.clientY},this._onDragStart(_,"touch")):this.nativeDraggable?(d(N,"dragend",this),d(Y,"dragstart",this._onDragStart)):this._onDragStart(_,!0);try{H.selection?s(function(){H.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(Y&&N){var t=this.options;c(N,t.ghostClass,!0),c(N,t.dragClass,!1),f(S.active=this,Y,"start",N,Y,Y,y)}else this._nulling()},_emulateDragOver:function(){if(D){if(this._lastX===D.clientX&&this._lastY===D.clientY)return;this._lastX=D.clientX,this._lastY=D.clientY,Z||E(B,"display","none");var t=H.elementFromPoint(D.clientX,D.clientY),e=t,n=at.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(D.clientX,D.clientY)),e)do{if(e[W]){for(;n--;)at[n]({clientX:D.clientX,clientY:D.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);Z||E(B,"display","")}},_onTouchMove:function(t){if(_){var e=this.options,n=e.fallbackTolerance,a=e.fallbackOffset,o=t.touches?t.touches[0]:t,i=o.clientX-_.clientX+a.x,r=o.clientY-_.clientY+a.y,l=t.touches?"translate3d("+i+"px,"+r+"px,0)":"translate("+i+"px,"+r+"px)";if(!S.active){if(n&&et(tt(o.clientX-this._lastX),tt(o.clientY-this._lastY))<n)return;this._dragStarted()}this._appendGhost(),F=!0,D=o,E(B,"webkitTransform",l),E(B,"mozTransform",l),E(B,"msTransform",l),E(B,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!B){var t,e=N.getBoundingClientRect(),n=E(N),a=this.options;c(B=N.cloneNode(!0),a.ghostClass,!1),c(B,a.fallbackClass,!0),c(B,a.dragClass,!0),E(B,"top",e.top-G(n.marginTop,10)),E(B,"left",e.left-G(n.marginLeft,10)),E(B,"width",e.width),E(B,"height",e.height),E(B,"opacity","0.8"),E(B,"position","fixed"),E(B,"zIndex","100000"),E(B,"pointerEvents","none"),a.fallbackOnBody&&H.body.appendChild(B)||Y.appendChild(B),t=B.getBoundingClientRect(),E(B,"width",2*e.width-t.width),E(B,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=this,a=t.dataTransfer,o=n.options;n._offUpEvents(),z.checkPull(n,n,N,t)&&(($=l(N)).draggable=!1,$.style["will-change"]="",E($,"display","none"),c($,n.options.chosenClass,!1),n._cloneId=s(function(){Y.insertBefore($,N),f(n,Y,"clone",N)})),c(N,o.dragClass,!0),e?("touch"===e?(d(H,"touchmove",n._onTouchMove),d(H,"touchend",n._onDrop),d(H,"touchcancel",n._onDrop),o.supportPointer&&(d(H,"pointermove",n._onTouchMove),d(H,"pointerup",n._onDrop))):(d(H,"mousemove",n._onTouchMove),d(H,"mouseup",n._onDrop)),n._loopId=setInterval(n._emulateDragOver,50)):(a&&(a.effectAllowed="move",o.setData&&o.setData.call(n,a,N)),d(H,"drop",n),n._dragStartId=s(n._dragStarted))},_onDragOver:function(t){var e,n,a,o,i,r,l=this.el,s=this.options,d=s.group,c=S.active,u=z===d,f=!1,h=s.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!s.dragoverBubble&&t.stopPropagation()),!N.animated&&(F=!0,c&&!s.disabled&&(u?h||(o=!Y.contains(N)):L===this||(c.lastPullMode=z.checkPull(this,c,N,t))&&d.checkPut(this,c,N,t))&&(void 0===t.rootEl||t.rootEl===this.el))){if(it(t,s,this.el),J)return;if(e=x(t.target,s.draggable,l),n=N.getBoundingClientRect(),L!==this&&(L=this,f=!0),o)return T(c,!0),A=Y,void($||O?Y.insertBefore(N,$||O):h||Y.appendChild(N));if(0===l.children.length||l.children[0]===B||l===t.target&&(i=t,r=l.lastElementChild.getBoundingClientRect(),5<i.clientY-(r.top+r.height)||5<i.clientX-(r.left+r.width))){if(0!==l.children.length&&l.children[0]!==B&&l===t.target&&(e=l.lastElementChild),e){if(e.animated)return;a=e.getBoundingClientRect()}T(c,u),!1!==I(Y,l,N,n,e,a,t)&&(N.contains(l)||(l.appendChild(N),A=l),this._animate(n,N),e&&this._animate(a,e))}else if(e&&!e.animated&&e!==N&&void 0!==e.parentNode[W]){X!==e&&(R=E(X=e),M=E(e.parentNode));var p=(a=e.getBoundingClientRect()).right-a.left,v=a.bottom-a.top,g=U.test(R.cssFloat+R.display)||"flex"==M.display&&0===M["flex-direction"].indexOf("row"),m=e.offsetWidth>N.offsetWidth,b=e.offsetHeight>N.offsetHeight,y=.5<(g?(t.clientX-a.left)/p:(t.clientY-a.top)/v),C=e.nextElementSibling,_=!1;if(g){var D=N.offsetTop,w=e.offsetTop;_=D===w?e.previousElementSibling===N&&!m||y&&m:e.previousElementSibling===N||N.previousElementSibling===e?.5<(t.clientY-a.top)/v:D<w}else f||(_=C!==N&&!b||y&&b);var k=I(Y,l,N,n,e,a,t,_);!1!==k&&(1!==k&&-1!==k||(_=1===k),J=!0,K(P,30),T(c,u),N.contains(l)||(_&&!C?l.appendChild(N):e.parentNode.insertBefore(N,_?C:e)),A=N.parentNode,this._animate(n,N),this._animate(a,e))}}},_animate:function(t,e){var n=this.options.animation;if(n){var a=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),E(e,"transition","none"),E(e,"transform","translate3d("+(t.left-a.left)+"px,"+(t.top-a.top)+"px,0)"),e.offsetWidth,E(e,"transition","all "+n+"ms"),E(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=K(function(){E(e,"transition",""),E(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(H,"touchmove",this._onTouchMove),a(H,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"pointercancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;clearInterval(this._loopId),clearInterval(w.pid),clearTimeout(this._dragStartTimer),o(this._cloneId),o(this._dragStartId),a(H,"mouseover",this),a(H,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(H,"drop",this),a(e,"dragstart",this._onDragStart)),this._offUpEvents(),t&&(F&&(t.preventDefault(),!n.dropBubble&&t.stopPropagation()),B&&B.parentNode&&B.parentNode.removeChild(B),Y!==A&&"clone"===S.active.lastPullMode||$&&$.parentNode&&$.parentNode.removeChild($),N&&(this.nativeDraggable&&a(N,"dragend",this),h(N),N.style["will-change"]="",c(N,this.options.ghostClass,!1),c(N,this.options.chosenClass,!1),f(this,Y,"unchoose",N,A,Y,y),Y!==A?0<=(C=p(N,n.draggable))&&(f(null,A,"add",N,A,Y,y,C),f(this,Y,"remove",N,A,Y,y,C),f(null,A,"sort",N,A,Y,y,C),f(this,Y,"sort",N,A,Y,y,C)):N.nextSibling!==O&&0<=(C=p(N,n.draggable))&&(f(this,Y,"update",N,A,Y,y,C),f(this,Y,"sort",N,A,Y,y,C)),S.active&&(null!=C&&-1!==C||(C=y),f(this,Y,"end",N,A,Y,y,C),this.save()))),this._nulling()},_nulling:function(){Y=N=A=B=O=$=v=g=m=_=D=F=C=X=R=L=z=S.active=null,nt.forEach(function(t){t.checked=!0}),nt.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":N&&(this._onDragOver(t),(e=t).dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault());break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}var e},toArray:function(){for(var t,e=[],n=this.el.children,a=0,o=n.length,i=this.options;a<o;a++)x(t=n[a],i.draggable,this.el)&&e.push(t.getAttribute(i.dataIdAttr)||function(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,a=0;n--;)a+=e.charCodeAt(n);return a.toString(36)}(t));return e},sort:function(t){var a={},o=this.el;this.toArray().forEach(function(t,e){var n=o.children[e];x(n,this.options.draggable,o)&&(a[t]=n)},this),t.forEach(function(t){a[t]&&(o.removeChild(a[t]),o.appendChild(a[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return x(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&rt(n)},destroy:function(){var t=this.el;t[W]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),at.splice(at.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},d(H,"touchmove",function(t){S.active&&t.preventDefault()}),S.utils={on:d,off:a,css:E,find:u,is:function(t,e){return!!x(t,e,t)},extend:r,throttle:t,closest:x,toggleClass:c,clone:l,index:p,nextTick:s,cancelNextTick:o},S.create=function(t,e){return new S(t,e)},S.version="1.7.0",S}),layoutr.checkAssignmentColor=function(e){if(e.hasClass("color")){var t=e.attr("data-id"),r=e.find(".controls > button"),l=e.find(".flex-table").children(),n=r.filter(".active").attr("data-id"),s='<svg focusable="false"><use xlink:href="#svg-checkmark"></use></svg>',a=function(){r.filter(".eraser").addClass("active"),r.filter(":not(.eraser)").removeClass("active").empty(),l.removeAttr("data-id"),e.removeClass("validated")},o=function(){return"1"===t?[{id:"blue",value:3},{id:"green",value:2},{id:"red",value:4}]:"2"===t?[{id:"orange",value:4},{id:"teal",value:2}]:void 0};e.on("click",'button[type="submit"]',function(){if(!e.hasClass("validated")){e.addClass("validated");var t=o();$(t).each(function(t,e){var a,o,n=(a=e.id,o=0,l.each(function(t,e){var n=$(e).attr("data-id");void 0!==n&&a===n&&o++}),o),i=e.value===n?s:'<svg focusable="false"><use xlink:href="#svg-close"></use></svg>';r.filter('[data-id="'+e.id+'"]').append(i)})}}),e.on("click",'button[type="reset"]',function(){a()}),e.on("click","button.correct",function(){a(),e.addClass("validated");var t=o();$(t).each(function(t,e){for(t=0;t<e.value;t++)$(l.filter(":not([data-id])")[0]).attr("data-id",e.id);r.filter('[data-id="'+e.id+'"]').append(s)})}),r.on("click",function(t){var e=$(t.currentTarget);e.addClass("active").siblings(".active").removeClass("active"),n=e.attr("data-id")}),l.on("click",function(t){$(t.currentTarget).attr("data-id",n)})}},layoutr.checkAssignmentDragAndDrop=function(o){if(o.hasClass("drag-and-drop")){o.attr("data-moving",0);var t=o.attr("data-id"),e=o.find(".from .container"),i=o.find(".item"),n=i.find("input[type=checkbox]"),a=function(){return $($.map(n,function(t){if(t.checked)return t}))},r=function(){i.removeClass("valid invalid");var t=a();t.length&&t.prop("checked",!1),e.append(i),o.removeClass("validated moving"),i=i.shuffle()},l=function(){if("1"===t)return[{id:"1",items:["5","7"]},{id:"2",items:["6","8"]},{id:"3",items:["2","4"]},{id:"4",items:["1","3"]}]};bowser.desktop&&o.find(".container").each(function(t,e){Sortable.create(e,{group:"container",draggable:".item",animation:0,scroll:!1,forceFallback:!0,fallbackOnBody:!0,chosenClass:"drag-and-drop-sortable-chosen",onAdd:function(){setTimeout(function(){var t=a();t.length&&(t.prop("checked",!1),o.removeClass("moving"))})}})}),n.on("click",function(t){var e=$(t.currentTarget),n=(e.parents(".item"),parseInt(o.attr("data-moving")));e.is(":checked")?(n++,o.attr("data-moving",n),o.addClass("moving")):(n--,o.attr("data-moving",n),0===n&&o.removeClass("moving"))}),o.on("click",".place",function(t){var e=$(t.currentTarget);o.removeClass("moving");var n=a();n.length&&(n.prop("checked",!1),e.parent(".header").next().children(".container").append(n.parent()))}),o.on("click",'button[type="submit"]',function(){if(!o.hasClass("validated")){var t=a();t.length&&t.prop("checked",!1),o.addClass("validated");var e=l();$(e).each(function(t,a){o.find('.to .container[data-id="'+a.id+'"]').children().each(function(t,e){var n=$(e);-1!==$.inArray(n.attr("data-id"),a.items)?n.addClass("valid"):n.addClass("invalid")})})}}),o.on("click",'button[type="reset"]',function(){r()}),o.on("click","button.correct",function(){r(),o.addClass("validated");var t=l();$(t).each(function(t,e){var a=o.find('.to .container[data-id="'+e.id+'"]');$(e.items).each(function(t,e){var n=layoutr.getAssignmentItem(i,e);n.addClass("valid"),n.appendTo(a)})})})}},layoutr.checkAssignmentSort=function(e){if(e.hasClass("sort")){$(window).unbind("resize.assignmentSort");var t=e.attr("data-id"),i=e.find(".container"),r=e.find(".item");if(Sortable.create(i[0],{draggable:".item",animation:0,scroll:!1,forceFallback:!0,fallbackOnBody:!0,chosenClass:"sort-sortable-chosen"}),!i.hasClass("wrap")){var n=function(){i.css("height",i.height()).removeClass("row").addClass("column");var t=i[0].getBoundingClientRect().left,e=i.find("> .item:first-child");e[0].getBoundingClientRect().left-parseInt(e.css("margin-left"))<t&&i.removeClass("column").addClass("row"),i.css("height","").addClass("checked")};n(),$(window).bind("resize.assignmentSort",$.throttle(layoutr.throttleInterval,!1,function(){n()}))}var a=function(){r.removeClass("valid invalid"),e.removeClass("validated"),r=r.shuffle()},o=function(){return"1"===t?["3","1","2","5","4","7","6","8","9"]:"2"===t?["4","2","1","3"]:void 0};e.on("click",'button[type="submit"]',function(){if(!e.hasClass("validated")){e.addClass("validated");var t=o();$(t).each(function(t,e){var n=layoutr.getAssignmentItem(r,e);n.index()===t?n.addClass("valid"):n.addClass("invalid")})}}),e.on("click",'button[type="reset"]',function(){a()});e.on("click","button.correct",function(){a(),e.addClass("validated");var t=o();$(t).each(function(t,e){var n,a,o=layoutr.getAssignmentItem(r,e);o.addClass("valid"),a=o,0===(n=t)?i.prepend(a):i.find("> .item:nth-child("+n+")").after(a)})})}},layoutr.checkAssignmentPuzzle=function(o){if(o.hasClass("puzzle")){layoutr.body.off("keydown.assignmentPuzzle");o.attr("data-id");var n=o.attr("data-image"),a=layoutr.tryParseInt(o.attr("data-tiles"),0),t=layoutr.tryParseInt(o.attr("data-size"),0),e=layoutr.tryParseInt(o.attr("data-random"),3),i=100/a,r=a*a-1,l=[],s=[],d=!1,c=[],u="up",f="down",h="left",p="right",v=void 0,g=void 0,m=void 0,b=void 0,y=void 0,C=void 0,_=void 0;o.attr("data-state","initial");var D='<div class="content" style="max-width: '+t+"px; max-height: "+t+'px">\n    <div style="background-image: url('+n+')"></div>\n</div>\n<div class="buttons">\n    <div class="flex wrap column gap-2">\n        <button type="submit" class="btn start">Start</button>\n        <button type="button" class="btn theme-secondary give-up">Give up</button>\n    </div>\n</div>';o.append(D),y=o.find(".content > div"),C=o.find("button.start"),_=o.find("button.give-up"),C.click(function(){x()}),_.click(function(){d||E()});var w=function(t){for(var e=t.length-1;0<e;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}return t},k=function(t){var e=v.top,n=v.left;return t===u?e=v.top+1:t===f?e=v.top-1:t===h?n=v.left+1:t===p&&(n=v.left-1),y.find('.item[data-top="'+e+'"][data-left="'+n+'"]')},S=function(n,a){var o=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];return new Promise(function(t,e){d=!0,a===u?n.animate({top:v.top*i+"%"},o?0:100,function(){o||g++,d=!1,n.attr("data-top",parseInt(n.attr("data-top"))-1),v.top++,T(),t()}):a===f?n.animate({top:v.top*i+"%"},o?0:100,function(){o||g++,d=!1,n.attr("data-top",parseInt(n.attr("data-top"))+1),v.top--,T(),t()}):a===h?n.animate({left:v.left*i+"%"},o?0:100,function(){o||g++,d=!1,n.attr("data-left",parseInt(n.attr("data-left"))-1),v.left++,T(),t()}):a===p&&n.animate({left:v.left*i+"%"},o?0:100,function(){o||g++,d=!1,n.attr("data-left",parseInt(n.attr("data-left"))+1),v.left--,T(),t()})})},T=function(){s.removeClass("movable"),0!==v.top&&k(f).addClass("movable"),v.top!==a-1&&k(u).addClass("movable"),0!==v.left&&k(p).addClass("movable"),v.left!==a-1&&k(h).addClass("movable")},x=function(){layoutr.arrowKeyLocked=!0,function(){l=[];for(var t=0,e=0;e<=a-1;e++)for(var n=0;n<=a-1;n++)t++,l.push({id:t,top:e,left:n});w(l)}(),function(){y.empty();for(var t=0;t<r;t++){var e='<div class="item"\n    data-id="'+l[t].id+'" \n    data-top="'+l[t].top+'" \n    data-left="'+l[t].left+'" \n    style="\n    width: '+i+"%; \n    height: "+i+"%; \n    top: "+l[t].top*i+"%; \n    left: "+l[t].left*i+'%; \n">\n    <div style="\n        width: '+100*a+"%; \n        height: "+100*a+"%; \n        background-image: url("+n+"); \n        margin-left: -"+l[t].left*i*a+"%; \n        margin-top: -"+l[t].top*i*a+'%; \n    "></div>\n</div>';y.append(e)}s=y.children()}(),v=l[r],c=[],s.each(function(t,e){var n=$(s[t]);c.push({id:n.attr("data-id"),top:n.attr("data-top"),left:n.attr("data-left")})}),m=void(g=0),b=e,function t(){var e=[];0!==v.top&&m!==u&&e.push(f),v.top!==a-1&&m!==f&&e.push(u),0!==v.left&&m!==h&&e.push(p),v.left!==a-1&&m!==p&&e.push(h),w(e),e=e[0],S(k(m=e),e).then(function(){0<--b&&t()})}(),o.attr("data-state","start")},E=function(){layoutr.arrowKeyLocked=!1,y.empty(),o.attr("data-state","initial")},I=function(){var o=!0;if(s.each(function(t,e){var n={};n.item=$(e),n.id=n.item.attr("data-id"),n.top=n.item.attr("data-top"),n.left=n.item.attr("data-left");var a=$.grep(c,function(t){return t.id===n.id})[0];if(a.top!==n.top||a.left!==n.left)return o=!1}),o){E();var t='<div class="alert theme-success">\n    <div>\n        <h3 class="align-center">You Win</h3>\n        <div class="table">\n            <table>\n                <tbody>\n                    <tr><th>Moves used</th><td>'+g+"</td></tr>\n                    <tr><th>Perfect moves</th><td>"+e+"</td></tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>";y.append(t)}};o.on("click",".item.movable",function(t){if("start"===o.attr("data-state")&&!d){var e=$(t.target),n=parseInt(e.attr("data-top")),a=parseInt(e.attr("data-left"));n===v.top+1&&a===v.left?S(e,u,!1).then(function(){I()}):n===v.top-1&&a===v.left?S(e,f,!1).then(function(){I()}):n===v.top&&a===v.left+1?S(e,h,!1).then(function(){I()}):n===v.top&&a===v.left-1&&S(e,p,!1).then(function(){I()})}}),layoutr.body.on("keydown.assignmentPuzzle",function(t){"start"!==o.attr("data-state")||d||(38===t.keyCode&&v.top!==a-1?(t.preventDefault(),S(k(u),u,!1).then(function(){I()})):40===t.keyCode&&0!==v.top?(t.preventDefault(),S(k(f),f,!1).then(function(){I()})):37===t.keyCode&&v.left!==a-1?(t.preventDefault(),S(k(h),h,!1).then(function(){I()})):39===t.keyCode&&0!==v.left&&(t.preventDefault(),S(k(p),p,!1).then(function(){I()})))})}else layoutr.arrowKeyLocked=!1};