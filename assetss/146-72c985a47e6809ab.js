"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[146],{9642:function(e,n,t){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function u(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return u},gY:function(){return r},gK:function(){return o}})},6518:function(e,n,t){t.d(n,{V:function(){return Q}});var r,o=t(9642),i=t(7294),u=t(133),a=t(8529);function c(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,i.useRef)(n);return(0,i.useEffect)((function(){r.current=n}),[n]),(0,i.useCallback)((function(e){for(var n,t=(0,o.Ul)(r.current);!(n=t()).done;){var i=n.value;null!=i&&("function"===typeof i?i(e):i.current=e)}}),[r])}function l(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var i=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!i||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&i}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}));var s=t(5989),f=t(2506);function d(e,n,t){var r=(0,i.useRef)(n);r.current=n,(0,i.useEffect)((function(){function n(e){r.current.call(window,e)}return window.addEventListener(e,n,t),function(){return window.removeEventListener(e,n,t)}}),[e,t])}var v,p,m,g,h=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function y(e){null==e||e.focus({preventScroll:!0})}function E(e,n){var t=Array.isArray(e)?e:function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(h))}(e),r=document.activeElement,o=function(){if(n&(v.First|v.Next))return m.Next;if(n&(v.Previous|v.Last))return m.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),i=function(){if(n&v.First)return 0;if(n&v.Previous)return Math.max(0,t.indexOf(r))-1;if(n&v.Next)return Math.max(0,t.indexOf(r))+1;if(n&v.Last)return t.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),u=n&v.NoScroll?{preventScroll:!0}:{},a=0,c=t.length,l=void 0;do{var s;if(a>=c||a+c<=0)return p.Error;var f=i+a;if(n&v.WrapAround)f=(f+c)%c;else{if(f<0)return p.Underflow;if(f>=c)return p.Overflow}null==(s=l=t[f])||s.focus(u),a+=o}while(l!==document.activeElement);return l.hasAttribute("tabindex")||l.setAttribute("tabindex","0"),p.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(v||(v={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(p||(p={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(m||(m={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(g||(g={}));var b,w=t(7933);function C(e,n,t){void 0===n&&(n=b.All);var u=void 0===t?{}:t,a=u.initialFocus,c=u.containers,l=(0,i.useRef)("undefined"!==typeof window?document.activeElement:null),s=(0,i.useRef)(null),f=(0,w.t)(),m=Boolean(n&b.RestoreFocus),g=Boolean(n&b.InitialFocus);(0,i.useEffect)((function(){m&&(l.current=document.activeElement)}),[m]),(0,i.useEffect)((function(){if(m)return function(){y(l.current),l.current=null}}),[m]),(0,i.useEffect)((function(){if(g&&e.current){var n=document.activeElement;if(null==a?void 0:a.current){if((null==a?void 0:a.current)===n)return void(s.current=n)}else if(e.current.contains(n))return void(s.current=n);(null==a?void 0:a.current)?y(a.current):E(e.current,v.First)===p.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.current=document.activeElement}}),[e,a,g]),d("keydown",(function(t){n&b.TabLock&&e.current&&t.key===r.Tab&&(t.preventDefault(),E(e.current,(t.shiftKey?v.Previous:v.Next)|v.WrapAround)===p.Success&&(s.current=document.activeElement))})),d("focus",(function(t){if(n&b.FocusLock){var r=new Set(null==c?void 0:c.current);if(r.add(e),r.size){var i=s.current;if(i&&f.current){var u=t.target;u&&u instanceof HTMLElement?!function(e,n){for(var t,r=(0,o.Ul)(e);!(t=r()).done;){var i;if(null==(i=t.value.current)?void 0:i.contains(n))return!0}return!1}(r,u)?(t.preventDefault(),t.stopPropagation(),y(i)):(s.current=u,y(u)):y(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(b||(b={}));var O=t(852),S=new Set,A=new Map;function T(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function F(e){var n=A.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}var x=(0,i.createContext)(!1);function N(e){return i.createElement(x.Provider,{value:e.force},e.children)}var k=t(3935);function R(){var e=(0,i.useContext)(x),n=(0,i.useContext)(H),t=(0,i.useState)((function(){if(!e&&null!==n)return null;if("undefined"===typeof window)return null;var t=document.getElementById("headlessui-portal-root");if(t)return t;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=t[0],o=t[1];return(0,i.useEffect)((function(){e||null!==n&&o(n.current)}),[n,o,e]),r}var L=i.Fragment;function P(e){var n=e,t=R(),r=(0,i.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=(0,s.H)();return(0,O.e)((function(){if(t&&r)return t.appendChild(r),function(){var e;t&&(r&&(t.removeChild(r),t.childNodes.length<=0&&(null==(e=t.parentElement)||e.removeChild(t))))}}),[t,r]),o&&t&&r?(0,k.createPortal)((0,a.sY)({props:n,defaultTag:L,name:"Portal"}),r):null}var M=i.Fragment,H=(0,i.createContext)(null);P.Group=function(e){var n=e.target,t=(0,o.gK)(e,["target"]);return i.createElement(H.Provider,{value:n},(0,a.sY)({props:t,defaultTag:M,name:"Popover.Group"}))};var j=(0,i.createContext)(null);function D(){var e=(0,i.useContext)(j);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,D),n}return e}var U,Y,I,V,K=t(3980),Z=(0,i.createContext)((function(){}));function q(e){var n=e.children,t=e.onUpdate,r=e.type,o=e.element,u=(0,i.useContext)(Z),a=(0,i.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==t||t.apply(void 0,n),u.apply(void 0,n)}),[u,t]);return(0,O.e)((function(){return a(U.Add,r,o),function(){return a(U.Remove,r,o)}}),[a,r,o]),i.createElement(Z.Provider,{value:a},n)}Z.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(U||(U={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(I||(I={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(V||(V={}));var z=((Y={})[V.SetTitleId]=function(e,n){return e.titleId===n.id?e:(0,o.gY)({},e,{titleId:n.id})},Y),W=(0,i.createContext)(null);function B(e){var n=(0,i.useContext)(W);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+Q.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return n}function _(e,n){return(0,u.E)(n.type,z,e,n)}W.displayName="DialogContext";var J=a.AN.RenderStrategy|a.AN.Static,G=(0,a.yV)((function(e,n){var t,l=e.open,v=e.onClose,p=e.initialFocus,m=(0,o.gK)(e,["open","onClose","initialFocus"]),g=(0,i.useState)(0),h=g[0],y=g[1],E=(0,K.oJ)();void 0===l&&null!==E&&(l=(0,u.E)(E,((t={})[K.ZM.Open]=!0,t[K.ZM.Closed]=!1,t)));var w=(0,i.useRef)(new Set),x=(0,i.useRef)(null),k=c(x,n),R=e.hasOwnProperty("open")||null!==E,L=e.hasOwnProperty("onClose");if(!R&&!L)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!R)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!L)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof l)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+l);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var M=l?I.Open:I.Closed,H=null!==E?E===K.ZM.Open:M===I.Open,D=(0,i.useReducer)(_,{titleId:null,descriptionId:null}),Y=D[0],Z=D[1],z=(0,i.useCallback)((function(){return v(!1)}),[v]),B=(0,i.useCallback)((function(e){return Z({type:V.SetTitleId,id:e})}),[Z]),G=(0,s.H)()&&M===I.Open,$=h>1,Q=null!==(0,i.useContext)(W),X=$?"parent":"leaf";C(x,G?(0,u.E)(X,{parent:b.RestoreFocus,leaf:b.All}):b.None,{initialFocus:p,containers:w}),function(e,n){void 0===n&&(n=!0),(0,O.e)((function(){if(n&&e.current){var t=e.current;S.add(t);for(var r,i=(0,o.Ul)(A.keys());!(r=i()).done;){var u=r.value;u.contains(t)&&(F(u),A.delete(u))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var n,t=(0,o.Ul)(S);!(n=t()).done;){var r=n.value;if(e.contains(r))return}1===S.size&&(A.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),T(e))}})),function(){if(S.delete(t),S.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!A.has(e)){for(var n,t=(0,o.Ul)(S);!(n=t()).done;){var r=n.value;if(e.contains(r))return}A.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),T(e)}}));else for(var e,n=(0,o.Ul)(A.keys());!(e=n()).done;){var r=e.value;F(r),A.delete(r)}}}}),[n])}(x,!!$&&G),d("mousedown",(function(e){var n,t=e.target;M===I.Open&&($||(null==(n=x.current)?void 0:n.contains(t))||z())})),d("keydown",(function(e){e.key===r.Escape&&M===I.Open&&($||(e.preventDefault(),e.stopPropagation(),z()))})),(0,i.useEffect)((function(){if(M===I.Open&&!Q){var e=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=t+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=n}}}),[M,Q]),(0,i.useEffect)((function(){if(M===I.Open&&x.current){var e=new IntersectionObserver((function(e){for(var n,t=(0,o.Ul)(e);!(n=t()).done;){var r=n.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&z()}}));return e.observe(x.current),function(){return e.disconnect()}}}),[M,x,z]);var ee=function(){var e=(0,i.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var n=(0,i.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,i.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return i.createElement(j.Provider,{value:r},e.children)}}),[t])]}(),ne=ee[0],te=ee[1],re="headlessui-dialog-"+(0,f.M)(),oe=(0,i.useMemo)((function(){return[{dialogState:M,close:z,setTitleId:B},Y]}),[M,Y,z,B]),ie=(0,i.useMemo)((function(){return{open:M===I.Open}}),[M]),ue={ref:k,id:re,role:"dialog","aria-modal":M===I.Open||void 0,"aria-labelledby":Y.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},ae=m;return i.createElement(q,{type:"Dialog",element:x,onUpdate:(0,i.useCallback)((function(e,n,t){var r;"Dialog"===n&&(0,u.E)(e,((r={})[U.Add]=function(){w.current.add(t),y((function(e){return e+1}))},r[U.Remove]=function(){w.current.add(t),y((function(e){return e-1}))},r))}),[])},i.createElement(N,{force:!0},i.createElement(P,null,i.createElement(W.Provider,{value:oe},i.createElement(P.Group,{target:x},i.createElement(N,{force:!1},i.createElement(te,{slot:ie,name:"Dialog.Description"},(0,a.sY)({props:(0,o.gY)({},ae,ue),slot:ie,defaultTag:"div",features:J,visible:H,name:"Dialog"}))))))))})),$=(0,a.yV)((function e(n,t){var r=B([Q.displayName,e.name].join("."))[0],u=r.dialogState,s=r.close,d=c(t),v="headlessui-dialog-overlay-"+(0,f.M)(),p=(0,i.useCallback)((function(e){if(e.target===e.currentTarget){if(l(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}),[s]),m=(0,i.useMemo)((function(){return{open:u===I.Open}}),[u]),g={ref:d,id:v,"aria-hidden":!0,onClick:p},h=n;return(0,a.sY)({props:(0,o.gY)({},h,g),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var Q=Object.assign(G,{Overlay:$,Title:function e(n){var t=B([Q.displayName,e.name].join("."))[0],r=t.dialogState,u=t.setTitleId,c="headlessui-dialog-title-"+(0,f.M)();(0,i.useEffect)((function(){return u(c),function(){return u(null)}}),[c,u]);var l=(0,i.useMemo)((function(){return{open:r===I.Open}}),[r]),s={id:c},d=n;return(0,a.sY)({props:(0,o.gY)({},d,s),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var n=D(),t="headlessui-description-"+(0,f.M)();(0,O.e)((function(){return n.register(t)}),[t,n.register]);var r=e,i=(0,o.gY)({},n.props,{id:t});return(0,a.sY)({props:(0,o.gY)({},r,i),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}})},5131:function(e,n,t){t.d(n,{u:function(){return x}});var r,o=t(9642),i=t(7294),u=t(133),a=t(8529),c=t(852),l=t(5989),s=t(2506),f=t(7933),d=t(3980);function v(){var e=[],n={requestAnimationFrame:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=requestAnimationFrame.apply(void 0,arguments);n.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n.requestAnimationFrame((function(){n.requestAnimationFrame.apply(n,t)}))},setTimeout:function(e){function n(){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(){var e=setTimeout.apply(void 0,arguments);n.add((function(){return clearTimeout(e)}))})),add:function(n){e.push(n)},dispose:function(){for(var n,t=(0,o.Ul)(e.splice(0));!(n=t()).done;){var r=n.value;r()}}};return n}function p(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).add.apply(n,r)}function m(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];e&&r.length>0&&(n=e.classList).remove.apply(n,r)}function g(e,n,t,o,i,u){var a=v(),c=void 0!==u?function(e){var n={called:!1};return function(){if(!n.called)return n.called=!0,e.apply(void 0,arguments)}}(u):function(){};return m.apply(void 0,[e].concat(i)),p.apply(void 0,[e].concat(n,t)),a.nextFrame((function(){m.apply(void 0,[e].concat(t)),p.apply(void 0,[e].concat(o)),a.add(function(e,n){var t=v();if(!e)return t.dispose;var o=getComputedStyle(e),i=[o.transitionDuration,o.transitionDelay].map((function(e){var n=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,n){return n-e}))[0];return void 0===n?0:n})),u=i[0],a=i[1];return 0!==u?t.setTimeout((function(){n(r.Finished)}),u+a):n(r.Finished),t.add((function(){return n(r.Cancelled)})),t.dispose}(e,(function(t){return m.apply(void 0,[e].concat(o,n)),p.apply(void 0,[e].concat(i)),c(t)})))})),a.add((function(){return m.apply(void 0,[e].concat(n,t,o,i))})),a.add((function(){return c(r.Cancelled)})),a.dispose}function h(e){return void 0===e&&(e=""),(0,i.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(r||(r={}));var y,E=(0,i.createContext)(null);E.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(y||(y={}));var b=(0,i.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((function(e){return e.state===y.Visible})).length>0}function C(e){var n=(0,i.useRef)(e),t=(0,i.useRef)([]),r=(0,f.t)();(0,i.useEffect)((function(){n.current=e}),[e]);var o=(0,i.useCallback)((function(e,o){var i;void 0===o&&(o=a.l4.Hidden);var c=t.current.findIndex((function(n){return n.id===e}));-1!==c&&((0,u.E)(o,((i={})[a.l4.Unmount]=function(){t.current.splice(c,1)},i[a.l4.Hidden]=function(){t.current[c].state=y.Hidden},i)),!w(t)&&r.current&&(null==n.current||n.current()))}),[n,r,t]),c=(0,i.useCallback)((function(e){var n=t.current.find((function(n){return n.id===e}));return n?n.state!==y.Visible&&(n.state=y.Visible):t.current.push({id:e,state:y.Visible}),function(){return o(e,a.l4.Unmount)}}),[t,o]);return(0,i.useMemo)((function(){return{children:t,register:c,unregister:o}}),[c,o,t])}function O(){}b.displayName="NestingContext";var S=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){for(var n,t={},r=(0,o.Ul)(S);!(n=r()).done;){var i,u=n.value;t[u]=null!=(i=e[u])?i:O}return t}var T=a.AN.RenderStrategy;function F(e){var n,t=e.beforeEnter,f=e.afterEnter,v=e.beforeLeave,p=e.afterLeave,m=e.enter,O=e.enterFrom,S=e.enterTo,F=e.entered,x=e.leave,N=e.leaveFrom,k=e.leaveTo,R=(0,o.gK)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),L=(0,i.useRef)(null),P=(0,i.useState)(y.Visible),M=P[0],H=P[1],j=R.unmount?a.l4.Unmount:a.l4.Hidden,D=function(){var e=(0,i.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),U=D.show,Y=D.appear,I=D.initial,V=function(){var e=(0,i.useContext)(b);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),K=V.register,Z=V.unregister,q=(0,s.M)(),z=(0,i.useRef)(!1),W=C((function(){z.current||(H(y.Hidden),Z(q),ee.current.afterLeave())}));(0,c.e)((function(){if(q)return K(q)}),[K,q]),(0,c.e)((function(){var e;j===a.l4.Hidden&&q&&(U&&M!==y.Visible?H(y.Visible):(0,u.E)(M,((e={})[y.Hidden]=function(){return Z(q)},e[y.Visible]=function(){return K(q)},e)))}),[M,q,K,Z,U,j]);var B=h(m),_=h(O),J=h(S),G=h(F),$=h(x),Q=h(N),X=h(k),ee=function(e){var n=(0,i.useRef)(A(e));return(0,i.useEffect)((function(){n.current=A(e)}),[e]),n}({beforeEnter:t,afterEnter:f,beforeLeave:v,afterLeave:p}),ne=(0,l.H)();(0,i.useEffect)((function(){if(ne&&M===y.Visible&&null===L.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[L,M,ne]);var te=I&&!Y;(0,c.e)((function(){var e=L.current;if(e&&!te)return z.current=!0,U&&ee.current.beforeEnter(),U||ee.current.beforeLeave(),U?g(e,B,_,J,G,(function(e){z.current=!1,e===r.Finished&&ee.current.afterEnter()})):g(e,$,Q,X,G,(function(e){z.current=!1,e===r.Finished&&(w(W)||(H(y.Hidden),Z(q),ee.current.afterLeave()))}))}),[ee,q,z,Z,W,L,te,U,B,_,J,$,Q,X]);var re={ref:L},oe=R;return i.createElement(b.Provider,{value:W},i.createElement(d.up,{value:(0,u.E)(M,(n={},n[y.Visible]=d.ZM.Open,n[y.Hidden]=d.ZM.Closed,n))},(0,a.sY)({props:(0,o.gY)({},oe,re),defaultTag:"div",features:T,visible:M===y.Visible,name:"Transition.Child"})))}function x(e){var n,t=e.show,r=e.appear,c=void 0!==r&&r,l=e.unmount,s=(0,o.gK)(e,["show","appear","unmount"]),f=(0,d.oJ)();void 0===t&&null!==f&&(t=(0,u.E)(f,((n={})[d.ZM.Open]=!0,n[d.ZM.Closed]=!1,n)));if(![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var v=(0,i.useState)(t?y.Visible:y.Hidden),p=v[0],m=v[1],g=C((function(){m(y.Hidden)})),h=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){e.current=!1}),[]),e.current}(),O=(0,i.useMemo)((function(){return{show:t,appear:c||!h,initial:h}}),[t,c,h]);(0,i.useEffect)((function(){t?m(y.Visible):w(g)||m(y.Hidden)}),[t,g]);var S={unmount:l};return i.createElement(b.Provider,{value:g},i.createElement(E.Provider,{value:O},(0,a.sY)({props:(0,o.gY)({},S,{as:i.Fragment,children:i.createElement(F,Object.assign({},S,s))}),defaultTag:i.Fragment,features:T,visible:p===y.Visible,name:"Transition"})))}x.Child=function(e){var n=null!==(0,i.useContext)(E),t=null!==(0,d.oJ)();return!n&&t?i.createElement(x,Object.assign({},e)):i.createElement(F,Object.assign({},e))},x.Root=x},2506:function(e,n,t){t.d(n,{M:function(){return c}});var r=t(7294),o=t(852),i=t(5989),u=0;function a(){return++u}function c(){var e=(0,i.H)(),n=(0,r.useState)(e?a:null),t=n[0],u=n[1];return(0,o.e)((function(){null===t&&u(a())}),[t]),null!=t?""+t:void 0}},7933:function(e,n,t){t.d(n,{t:function(){return o}});var r=t(7294);function o(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},852:function(e,n,t){t.d(n,{e:function(){return o}});var r=t(7294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},5989:function(e,n,t){t.d(n,{H:function(){return i}});var r=t(7294),o={serverHandoffComplete:!1};function i(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},3980:function(e,n,t){t.d(n,{up:function(){return a},ZM:function(){return r},oJ:function(){return u}});var r,o=t(7294),i=(0,o.createContext)(null);function u(){return(0,o.useContext)(i)}function a(e){var n=e.value,t=e.children;return o.createElement(i.Provider,{value:n},t)}i.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},133:function(e,n,t){function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,i=new Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];return"function"===typeof t?t.apply(void 0,i):t}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}t.d(n,{E:function(){return r}})},8529:function(e,n,t){t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return s},sY:function(){return c}});var r,o,i=t(9642),u=t(7294),a=t(133);function c(e){var n=e.props,t=e.slot,u=e.defaultTag,c=e.features,s=e.visible,f=void 0===s||s,d=e.name;if(f)return l(n,t,u,d);var v=null!=c?c:r.None;if(v&r.Static){var p=n.static,m=void 0!==p&&p,g=(0,i.gK)(n,["static"]);if(m)return l(g,t,u,d)}if(v&r.RenderStrategy){var h,y=n.unmount,E=void 0===y||y,b=(0,i.gK)(n,["unmount"]),w=E?o.Unmount:o.Hidden;return(0,a.E)(w,((h={})[o.Unmount]=function(){return null},h[o.Hidden]=function(){return l((0,i.gY)({},b,{hidden:!0,style:{display:"none"}}),t,u,d)},h))}return l(n,t,u,d)}function l(e,n,t,r){var o;void 0===n&&(n={});var a=f(e,["unmount","static"]),c=a.as,l=void 0===c?t:c,s=a.children,d=a.refName,v=void 0===d?"ref":d,p=(0,i.gK)(a,["as","children","refName"]),m=void 0!==e.ref?((o={})[v]=e.ref,o):{},g="function"===typeof s?s(n):s;if(p.className&&"function"===typeof p.className&&(p.className=p.className(n)),l===u.Fragment&&Object.keys(p).length>0){if(!(0,u.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,u.cloneElement)(g,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),u=function(){var t,i=r.value;void 0!==e[i]&&void 0!==n[i]&&Object.assign(o,((t={})[i]=function(t){t.defaultPrevented||e[i](t),t.defaultPrevented||n[i](t)},t))},a=(0,i.Ul)(t);!(r=a()).done;)u();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(p,["ref"])),g.props,["onClick"]),m))}return(0,u.createElement)(l,Object.assign({},f(p,["ref"]),l!==u.Fragment&&m),g)}function s(e){var n;return Object.assign((0,u.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,i.Ul)(n);!(t=o()).done;){var u=t.value;u in r&&delete r[u]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},8357:function(e,n,t){t.d(n,{w_:function(){return l}});var r=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},a=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,u({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return r.createElement(s,u({attr:u({},e.attr)},n),c(e.child))}}function s(e){var n=function(n){var t,o=e.attr,i=e.size,c=e.title,l=a(e,["attr","size","title"]),s=i||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:t,style:u(u({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return n(e)})):n(o)}}}]);