function s0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var o0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},_a={},qf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var js=Symbol.for("react.element"),a0=Symbol.for("react.portal"),l0=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),u0=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),f0=Symbol.for("react.suspense"),g0=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),Rh=Symbol.iterator;function x0(e){return e===null||typeof e!="object"?null:(e=Rh&&e[Rh]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Xf={};function oi(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||Kf}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yf(){}Yf.prototype=oi.prototype;function gu(e,t,n){this.props=e,this.context=t,this.refs=Xf,this.updater=n||Kf}var mu=gu.prototype=new Yf;mu.constructor=gu;Gf(mu,oi.prototype);mu.isPureReactComponent=!0;var Ah=Array.isArray,Jf=Object.prototype.hasOwnProperty,xu={current:null},Qf={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Jf.call(t,r)&&!Qf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:js,type:e,key:o,ref:l,props:i,_owner:xu.current}}function v0(e,t){return{$$typeof:js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vu(e){return typeof e=="object"&&e!==null&&e.$$typeof===js}function y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dh=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y0(""+e.key):t.toString(36)}function vo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case js:case a0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vl(l,0):r,Ah(i)?(n="",e!=null&&(n=e.replace(Dh,"$&/")+"/"),vo(i,t,n,"",function(h){return h})):i!=null&&(vu(i)&&(i=v0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Dh,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ah(e))for(var c=0;c<e.length;c++){o=e[c];var u=r+vl(o,c);l+=vo(o,t,n,u,i)}else if(u=x0(e),typeof u=="function")for(e=u.call(e),c=0;!(o=e.next()).done;)o=o.value,u=r+vl(o,c++),l+=vo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Js(e,t,n){if(e==null)return e;var r=[],i=0;return vo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},yo={transition:null},w0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:yo,ReactCurrentOwner:xu};function eg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Js,forEach:function(e,t,n){Js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!vu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=oi;q.Fragment=l0;q.Profiler=u0;q.PureComponent=gu;q.StrictMode=c0;q.Suspense=f0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;q.act=eg;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=xu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Jf.call(t,u)&&!Qf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:js,type:e.type,key:i,ref:o,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:h0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:d0,_context:e},e.Consumer=e};q.createElement=Zf;q.createFactory=function(e){var t=Zf.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:p0,render:e}};q.isValidElement=vu;q.lazy=function(e){return{$$typeof:m0,_payload:{_status:-1,_result:e},_init:b0}};q.memo=function(e,t){return{$$typeof:g0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=yo.transition;yo.transition={};try{e()}finally{yo.transition=t}};q.unstable_act=eg;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";qf.exports=q;var P=qf.exports;const yu=fu(P),_0=s0({__proto__:null,default:yu},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=P,k0=Symbol.for("react.element"),E0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,N0=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C0={key:!0,ref:!0,__self:!0,__source:!0};function tg(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S0.call(t,r)&&!C0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:k0,type:e,key:o,ref:l,props:i,_owner:N0.current}}_a.Fragment=E0;_a.jsx=tg;_a.jsxs=tg;Wf.exports=_a;var s=Wf.exports,tc={},ng={exports:{}},nt={},rg={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var ae=W-1>>>1,Q=F[ae];if(0<i(Q,H))F[ae]=H,F[W]=Q,W=ae;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var ae=0,Q=F.length,he=Q>>>1;ae<he;){var Ut=2*(ae+1)-1,Ft=F[Ut],$t=Ut+1,Bt=F[$t];if(0>i(Ft,W))$t<Q&&0>i(Bt,Ft)?(F[ae]=Bt,F[$t]=W,ae=$t):(F[ae]=Ft,F[Ut]=W,ae=Ut);else if($t<Q&&0>i(Bt,W))F[ae]=Bt,F[$t]=W,ae=$t;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],h=[],g=1,m=null,w=3,E=!1,_=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(h)}}function C(F){if(T=!1,x(F),!_)if(n(u)!==null)_=!0,hi(A);else{var H=n(h);H!==null&&Mt(C,H.startTime-F)}}function A(F,H){_=!1,T&&(T=!1,y(b),b=-1),E=!0;var W=w;try{for(x(H),m=n(u);m!==null&&(!(m.expirationTime>H)||F&&!R());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,w=m.priorityLevel;var Q=ae(m.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),x(H)}else r(u);m=n(u)}if(m!==null)var he=!0;else{var Ut=n(h);Ut!==null&&Mt(C,Ut.startTime-H),he=!1}return he}finally{m=null,w=W,E=!1}}var z=!1,j=null,b=-1,k=5,N=-1;function R(){return!(e.unstable_now()-N<k)}function I(){if(j!==null){var F=e.unstable_now();N=F;var H=!0;try{H=j(!0,F)}finally{H?S():(z=!1,j=null)}}else z=!1}var S;if(typeof f=="function")S=function(){f(I)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Gn=xe.port2;xe.port1.onmessage=I,S=function(){Gn.postMessage(null)}}else S=function(){D(I,0)};function hi(F){j=F,z||(z=!0,S())}function Mt(F,H){b=D(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){_||E||(_=!0,hi(A))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var W=w;w=H;try{return F()}finally{w=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=w;w=F;try{return H()}finally{w=W}},e.unstable_scheduleCallback=function(F,H,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:g++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>ae?(F.sortIndex=W,t(h,F),n(u)===null&&F===n(h)&&(T?(y(b),b=-1):T=!0,Mt(C,W-ae))):(F.sortIndex=Q,t(u,F),_||E||(_=!0,hi(A))),F},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(F){var H=w;return function(){var W=w;w=H;try{return F.apply(this,arguments)}finally{w=W}}}})(ig);rg.exports=ig;var T0=rg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=P,tt=T0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,Zi={};function mr(e,t){Kr(e,t),Kr(e+"Capture",t)}function Kr(e,t){for(Zi[e]=t,e=0;e<t.length;e++)sg.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,P0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Lh={};function R0(e){return nc.call(Lh,e)?!0:nc.call(Oh,e)?!1:P0.test(e)?Lh[e]=!0:(Oh[e]=!0,!1)}function A0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D0(e,t,n,r){if(t===null||typeof t>"u"||A0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var bu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bu,wu);Ee[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bu,wu);Ee[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bu,wu);Ee[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function _u(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D0(t,n,i,r)&&(n=null),r||i===null?R0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qs=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),ju=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),og=Symbol.for("react.provider"),ag=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),Eu=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),lg=Symbol.for("react.offscreen"),zh=Symbol.iterator;function Si(e){return e===null||typeof e!="object"?null:(e=zh&&e[zh]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,yl;function Oi(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var bl=!1;function wl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,c=o.length-1;1<=l&&0<=c&&i[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==o[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oi(e):""}function O0(e){switch(e.tag){case 5:return Oi(e.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function oc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case Er:return"Portal";case rc:return"Profiler";case ju:return"StrictMode";case ic:return"Suspense";case sc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ag:return(e.displayName||"Context")+".Consumer";case og:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eu:return t=e.displayName||null,t!==null?t:oc(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return oc(e(t))}catch{}}return null}function L0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(t);case 8:return t===ju?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e){var t=cg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zs(e){e._valueTracker||(e._valueTracker=z0(e))}function ug(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ac(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dg(e,t){t=t.checked,t!=null&&_u(e,"checked",t,!1)}function lc(e,t){dg(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cc(e,t.type,n):t.hasOwnProperty("defaultValue")&&cc(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cc(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Li=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Li(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function hg(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $h(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,fg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function es(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},M0=["Webkit","ms","Moz","O"];Object.keys($i).forEach(function(e){M0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$i[t]=$i[e]})});function gg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$i.hasOwnProperty(e)&&$i[e]?(""+t).trim():t+"px"}function mg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var U0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hc(e,t){if(t){if(U0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function pc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gc=null,Ur=null,Fr=null;function Bh(e){if(e=Ss(e)){if(typeof gc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Na(t),gc(e.stateNode,e.type,t))}}function xg(e){Ur?Fr?Fr.push(e):Fr=[e]:Ur=e}function vg(){if(Ur){var e=Ur,t=Fr;if(Fr=Ur=null,Bh(e),t)for(e=0;e<t.length;e++)Bh(t[e])}}function yg(e,t){return e(t)}function bg(){}var _l=!1;function wg(e,t,n){if(_l)return e(t,n);_l=!0;try{return yg(e,t,n)}finally{_l=!1,(Ur!==null||Fr!==null)&&(bg(),vg())}}function ts(e,t){var n=e.stateNode;if(n===null)return null;var r=Na(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var mc=!1;if(tn)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){mc=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{mc=!1}function F0(e,t,n,r,i,o,l,c,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var Bi=!1,Lo=null,zo=!1,xc=null,$0={onError:function(e){Bi=!0,Lo=e}};function B0(e,t,n,r,i,o,l,c,u){Bi=!1,Lo=null,F0.apply($0,arguments)}function V0(e,t,n,r,i,o,l,c,u){if(B0.apply(this,arguments),Bi){if(Bi){var h=Lo;Bi=!1,Lo=null}else throw Error(M(198));zo||(zo=!0,xc=h)}}function xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vh(e){if(xr(e)!==e)throw Error(M(188))}function H0(e){var t=e.alternate;if(!t){if(t=xr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vh(i),e;if(o===r)return Vh(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function jg(e){return e=H0(e),e!==null?kg(e):null}function kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kg(e);if(t!==null)return t;e=e.sibling}return null}var Eg=tt.unstable_scheduleCallback,Hh=tt.unstable_cancelCallback,W0=tt.unstable_shouldYield,q0=tt.unstable_requestPaint,fe=tt.unstable_now,K0=tt.unstable_getCurrentPriorityLevel,Nu=tt.unstable_ImmediatePriority,Sg=tt.unstable_UserBlockingPriority,Mo=tt.unstable_NormalPriority,G0=tt.unstable_LowPriority,Ng=tt.unstable_IdlePriority,ja=null,Ct=null;function X0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ja,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Q0,Y0=Math.log,J0=Math.LN2;function Q0(e){return e>>>=0,e===0?32:31-(Y0(e)/J0|0)|0}var to=64,no=4194304;function zi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=zi(c):(o&=l,o!==0&&(r=zi(o)))}else l=n&~i,l!==0?r=zi(l):o!==0&&(r=zi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function Z0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ey(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-vt(o),c=1<<l,u=i[l];u===-1?(!(c&n)||c&r)&&(i[l]=Z0(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}}function vc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cg(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ks(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function ty(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Tg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ig,Tu,Pg,Rg,Ag,yc=!1,ro=[],Tn=null,In=null,Pn=null,ns=new Map,rs=new Map,yn=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(t.pointerId)}}function Ci(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ss(t),t!==null&&Tu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ry(e,t,n,r,i){switch(t){case"focusin":return Tn=Ci(Tn,e,t,n,r,i),!0;case"dragenter":return In=Ci(In,e,t,n,r,i),!0;case"mouseover":return Pn=Ci(Pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ns.set(o,Ci(ns.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,rs.set(o,Ci(rs.get(o)||null,e,t,n,r,i)),!0}return!1}function Dg(e){var t=tr(e.target);if(t!==null){var n=xr(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Ag(e.priority,function(){Pg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fc=r,n.target.dispatchEvent(r),fc=null}else return t=Ss(n),t!==null&&Tu(t),e.blockedOn=n,!1;t.shift()}return!0}function qh(e,t,n){bo(e)&&n.delete(t)}function iy(){yc=!1,Tn!==null&&bo(Tn)&&(Tn=null),In!==null&&bo(In)&&(In=null),Pn!==null&&bo(Pn)&&(Pn=null),ns.forEach(qh),rs.forEach(qh)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,iy)))}function is(e){function t(i){return Ti(i,e)}if(0<ro.length){Ti(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ti(Tn,e),In!==null&&Ti(In,e),Pn!==null&&Ti(Pn,e),ns.forEach(t),rs.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&yn.shift()}var $r=ln.ReactCurrentBatchConfig,Fo=!0;function sy(e,t,n,r){var i=J,o=$r.transition;$r.transition=null;try{J=1,Iu(e,t,n,r)}finally{J=i,$r.transition=o}}function oy(e,t,n,r){var i=J,o=$r.transition;$r.transition=null;try{J=4,Iu(e,t,n,r)}finally{J=i,$r.transition=o}}function Iu(e,t,n,r){if(Fo){var i=bc(e,t,n,r);if(i===null)Al(e,t,r,$o,n),Wh(e,r);else if(ry(i,e,t,n,r))r.stopPropagation();else if(Wh(e,r),t&4&&-1<ny.indexOf(e)){for(;i!==null;){var o=Ss(i);if(o!==null&&Ig(o),o=bc(e,t,n,r),o===null&&Al(e,t,r,$o,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Al(e,t,r,null,n)}}var $o=null;function bc(e,t,n,r){if($o=null,e=Su(r),e=tr(e),e!==null)if(t=xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $o=e,null}function Og(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K0()){case Nu:return 1;case Sg:return 4;case Mo:case G0:return 16;case Ng:return 536870912;default:return 16}default:return 16}}var En=null,Pu=null,wo=null;function Lg(){if(wo)return wo;var e,t=Pu,n=t.length,r,i="value"in En?En.value:En.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return wo=i.slice(e,1<r?1-r:void 0)}function _o(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Kh(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?io:Kh,this.isPropagationStopped=Kh,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=rt(ai),Es=ue({},ai,{view:0,detail:0}),ay=rt(Es),kl,El,Ii,ka=ue({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(kl=e.screenX-Ii.screenX,El=e.screenY-Ii.screenY):El=kl=0,Ii=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),Gh=rt(ka),ly=ue({},ka,{dataTransfer:0}),cy=rt(ly),uy=ue({},Es,{relatedTarget:0}),Sl=rt(uy),dy=ue({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=rt(dy),py=ue({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fy=rt(py),gy=ue({},ai,{data:0}),Xh=rt(gy),my={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vy[e])?!!t[e]:!1}function Au(){return yy}var by=ue({},Es,{key:function(e){if(e.key){var t=my[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?_o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wy=rt(by),_y=ue({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=rt(_y),jy=ue({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),ky=rt(jy),Ey=ue({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=rt(Ey),Ny=ue({},ka,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=rt(Ny),Ty=[9,13,27,32],Du=tn&&"CompositionEvent"in window,Vi=null;tn&&"documentMode"in document&&(Vi=document.documentMode);var Iy=tn&&"TextEvent"in window&&!Vi,zg=tn&&(!Du||Vi&&8<Vi&&11>=Vi),Jh=" ",Qh=!1;function Mg(e,t){switch(e){case"keyup":return Ty.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Py(e,t){switch(e){case"compositionend":return Ug(t);case"keypress":return t.which!==32?null:(Qh=!0,Jh);case"textInput":return e=t.data,e===Jh&&Qh?null:e;default:return null}}function Ry(e,t){if(Nr)return e==="compositionend"||!Du&&Mg(e,t)?(e=Lg(),wo=Pu=En=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zg&&t.locale!=="ko"?null:t.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ay[e.type]:t==="textarea"}function Fg(e,t,n,r){xg(r),t=Bo(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hi=null,ss=null;function Dy(e){Jg(e,0)}function Ea(e){var t=Ir(e);if(ug(t))return e}function Oy(e,t){if(e==="change")return t}var $g=!1;if(tn){var Nl;if(tn){var Cl="oninput"in document;if(!Cl){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Cl=typeof ep.oninput=="function"}Nl=Cl}else Nl=!1;$g=Nl&&(!document.documentMode||9<document.documentMode)}function tp(){Hi&&(Hi.detachEvent("onpropertychange",Bg),ss=Hi=null)}function Bg(e){if(e.propertyName==="value"&&Ea(ss)){var t=[];Fg(t,ss,e,Su(e)),wg(Dy,t)}}function Ly(e,t,n){e==="focusin"?(tp(),Hi=t,ss=n,Hi.attachEvent("onpropertychange",Bg)):e==="focusout"&&tp()}function zy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ea(ss)}function My(e,t){if(e==="click")return Ea(t)}function Uy(e,t){if(e==="input"||e==="change")return Ea(t)}function Fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Fy;function os(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,t){var n=np(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function Vg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hg(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $y(e){var t=Hg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rp(n,o);var l=rp(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var By=tn&&"documentMode"in document&&11>=document.documentMode,Cr=null,wc=null,Wi=null,_c=!1;function ip(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_c||Cr==null||Cr!==Oo(r)||(r=Cr,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wi&&os(Wi,r)||(Wi=r,r=Bo(wc,"onSelect"),0<r.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Tl={},Wg={};tn&&(Wg=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Sa(e){if(Tl[e])return Tl[e];if(!Tr[e])return e;var t=Tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wg)return Tl[e]=t[n];return e}var qg=Sa("animationend"),Kg=Sa("animationiteration"),Gg=Sa("animationstart"),Xg=Sa("transitionend"),Yg=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(e,t){Yg.set(e,t),mr(t,[e])}for(var Il=0;Il<sp.length;Il++){var Pl=sp[Il],Vy=Pl.toLowerCase(),Hy=Pl[0].toUpperCase()+Pl.slice(1);Vn(Vy,"on"+Hy)}Vn(qg,"onAnimationEnd");Vn(Kg,"onAnimationIteration");Vn(Gg,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Xg,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function op(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,V0(r,t,void 0,e),e.currentTarget=null}function Jg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==o&&i.isPropagationStopped())break e;op(i,c,h),o=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,h=c.currentTarget,c=c.listener,u!==o&&i.isPropagationStopped())break e;op(i,c,h),o=u}}}if(zo)throw e=xc,zo=!1,xc=null,e}function re(e,t){var n=t[Nc];n===void 0&&(n=t[Nc]=new Set);var r=e+"__bubble";n.has(r)||(Qg(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Qg(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[oo]){e[oo]=!0,sg.forEach(function(n){n!=="selectionchange"&&(Wy.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Rl("selectionchange",!1,t))}}function Qg(e,t,n,r){switch(Og(t)){case 1:var i=sy;break;case 4:i=oy;break;default:i=Iu}n=i.bind(null,t,n,e),i=void 0,!mc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Al(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=tr(c),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}c=c.parentNode}}r=r.return}wg(function(){var h=o,g=Su(n),m=[];e:{var w=Yg.get(e);if(w!==void 0){var E=Ru,_=e;switch(e){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":E=wy;break;case"focusin":_="focus",E=Sl;break;case"focusout":_="blur",E=Sl;break;case"beforeblur":case"afterblur":E=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=ky;break;case qg:case Kg:case Gg:E=hy;break;case Xg:E=Sy;break;case"scroll":E=ay;break;case"wheel":E=Cy;break;case"copy":case"cut":case"paste":E=fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Yh}var T=(t&4)!==0,D=!T&&e==="scroll",y=T?w!==null?w+"Capture":null:w;T=[];for(var f=h,x;f!==null;){x=f;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,y!==null&&(C=ts(f,y),C!=null&&T.push(ls(f,C,x)))),D)break;f=f.return}0<T.length&&(w=new E(w,_,null,n,g),m.push({event:w,listeners:T}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&n!==fc&&(_=n.relatedTarget||n.fromElement)&&(tr(_)||_[nn]))break e;if((E||w)&&(w=g.window===g?g:(w=g.ownerDocument)?w.defaultView||w.parentWindow:window,E?(_=n.relatedTarget||n.toElement,E=h,_=_?tr(_):null,_!==null&&(D=xr(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(E=null,_=h),E!==_)){if(T=Gh,C="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(T=Yh,C="onPointerLeave",y="onPointerEnter",f="pointer"),D=E==null?w:Ir(E),x=_==null?w:Ir(_),w=new T(C,f+"leave",E,n,g),w.target=D,w.relatedTarget=x,C=null,tr(g)===h&&(T=new T(y,f+"enter",_,n,g),T.target=x,T.relatedTarget=D,C=T),D=C,E&&_)t:{for(T=E,y=_,f=0,x=T;x;x=kr(x))f++;for(x=0,C=y;C;C=kr(C))x++;for(;0<f-x;)T=kr(T),f--;for(;0<x-f;)y=kr(y),x--;for(;f--;){if(T===y||y!==null&&T===y.alternate)break t;T=kr(T),y=kr(y)}T=null}else T=null;E!==null&&ap(m,w,E,T,!1),_!==null&&D!==null&&ap(m,D,_,T,!0)}}e:{if(w=h?Ir(h):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var A=Oy;else if(Zh(w))if($g)A=Uy;else{A=zy;var z=Ly}else(E=w.nodeName)&&E.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(A=My);if(A&&(A=A(e,h))){Fg(m,A,n,g);break e}z&&z(e,w,h),e==="focusout"&&(z=w._wrapperState)&&z.controlled&&w.type==="number"&&cc(w,"number",w.value)}switch(z=h?Ir(h):window,e){case"focusin":(Zh(z)||z.contentEditable==="true")&&(Cr=z,wc=h,Wi=null);break;case"focusout":Wi=wc=Cr=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,ip(m,n,g);break;case"selectionchange":if(By)break;case"keydown":case"keyup":ip(m,n,g)}var j;if(Du)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Nr?Mg(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(zg&&n.locale!=="ko"&&(Nr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Nr&&(j=Lg()):(En=g,Pu="value"in En?En.value:En.textContent,Nr=!0)),z=Bo(h,b),0<z.length&&(b=new Xh(b,e,null,n,g),m.push({event:b,listeners:z}),j?b.data=j:(j=Ug(n),j!==null&&(b.data=j)))),(j=Iy?Py(e,n):Ry(e,n))&&(h=Bo(h,"onBeforeInput"),0<h.length&&(g=new Xh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:h}),g.data=j))}Jg(m,t)})}function ls(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ts(e,n),o!=null&&r.unshift(ls(e,o,i)),o=ts(e,t),o!=null&&r.push(ls(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ap(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,i?(u=ts(n,o),u!=null&&l.unshift(ls(n,u,c))):i||(u=ts(n,o),u!=null&&l.push(ls(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(qy,`
`).replace(Ky,"")}function ao(e,t,n){if(t=lp(t),lp(e)!==t&&n)throw Error(M(425))}function Vo(){}var jc=null,kc=null;function Ec(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(e){return cp.resolve(null).then(e).catch(Yy)}:Sc;function Yy(e){setTimeout(function(){throw e})}function Dl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),is(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);is(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),St="__reactFiber$"+li,cs="__reactProps$"+li,nn="__reactContainer$"+li,Nc="__reactEvents$"+li,Jy="__reactListeners$"+li,Qy="__reactHandles$"+li;function tr(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=up(e);e!==null;){if(n=e[St])return n;e=up(e)}return t}e=n,n=e.parentNode}return null}function Ss(e){return e=e[St]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Na(e){return e[cs]||null}var Cc=[],Pr=-1;function Hn(e){return{current:e}}function ie(e){0>Pr||(e.current=Cc[Pr],Cc[Pr]=null,Pr--)}function te(e,t){Pr++,Cc[Pr]=e.current,e.current=t}var $n={},De=Hn($n),Ge=Hn(!1),or=$n;function Gr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function Ho(){ie(Ge),ie(De)}function dp(e,t,n){if(De.current!==$n)throw Error(M(168));te(De,t),te(Ge,n)}function Zg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,L0(e)||"Unknown",i));return ue({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,or=De.current,te(De,e),te(Ge,Ge.current),!0}function hp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Zg(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,ie(Ge),ie(De),te(De,e)):ie(Ge),te(Ge,n)}var qt=null,Ca=!1,Ol=!1;function em(e){qt===null?qt=[e]:qt.push(e)}function Zy(e){Ca=!0,em(e)}function Wn(){if(!Ol&&qt!==null){Ol=!0;var e=0,t=J;try{var n=qt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Ca=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),Eg(Nu,Wn),i}finally{J=t,Ol=!1}}return null}var Rr=[],Ar=0,qo=null,Ko=0,st=[],ot=0,ar=null,Kt=1,Gt="";function Qn(e,t){Rr[Ar++]=Ko,Rr[Ar++]=qo,qo=e,Ko=t}function tm(e,t,n){st[ot++]=Kt,st[ot++]=Gt,st[ot++]=ar,ar=e;var r=Kt;e=Gt;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var o=32-vt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Kt=1<<32-vt(t)+i|n<<i|r,Gt=o+e}else Kt=1<<o|n<<i|r,Gt=e}function Lu(e){e.return!==null&&(Qn(e,1),tm(e,1,0))}function zu(e){for(;e===qo;)qo=Rr[--Ar],Rr[Ar]=null,Ko=Rr[--Ar],Rr[Ar]=null;for(;e===ar;)ar=st[--ot],st[ot]=null,Gt=st[--ot],st[ot]=null,Kt=st[--ot],st[ot]=null}var et=null,Ze=null,oe=!1,gt=null;function nm(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Ze=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:Kt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Ze=null,!0):!1;default:return!1}}function Tc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ic(e){if(oe){var t=Ze;if(t){var n=t;if(!pp(e,t)){if(Tc(e))throw Error(M(418));t=Rn(n.nextSibling);var r=et;t&&pp(e,t)?nm(r,n):(e.flags=e.flags&-4097|2,oe=!1,et=e)}}else{if(Tc(e))throw Error(M(418));e.flags=e.flags&-4097|2,oe=!1,et=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function lo(e){if(e!==et)return!1;if(!oe)return fp(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ec(e.type,e.memoizedProps)),t&&(t=Ze)){if(Tc(e))throw rm(),Error(M(418));for(;t;)nm(e,t),t=Rn(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=et?Rn(e.stateNode.nextSibling):null;return!0}function rm(){for(var e=Ze;e;)e=Rn(e.nextSibling)}function Xr(){Ze=et=null,oe=!1}function Mu(e){gt===null?gt=[e]:gt.push(e)}var e1=ln.ReactCurrentBatchConfig;function Pi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=i.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gp(e){var t=e._init;return t(e._payload)}function im(e){function t(y,f){if(e){var x=y.deletions;x===null?(y.deletions=[f],y.flags|=16):x.push(f)}}function n(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function r(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function i(y,f){return y=Ln(y,f),y.index=0,y.sibling=null,y}function o(y,f,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<f?(y.flags|=2,f):x):(y.flags|=2,f)):(y.flags|=1048576,f)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,f,x,C){return f===null||f.tag!==6?(f=Bl(x,y.mode,C),f.return=y,f):(f=i(f,x),f.return=y,f)}function u(y,f,x,C){var A=x.type;return A===Sr?g(y,f,x.props.children,C,x.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xn&&gp(A)===f.type)?(C=i(f,x.props),C.ref=Pi(y,f,x),C.return=y,C):(C=To(x.type,x.key,x.props,null,y.mode,C),C.ref=Pi(y,f,x),C.return=y,C)}function h(y,f,x,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Vl(x,y.mode,C),f.return=y,f):(f=i(f,x.children||[]),f.return=y,f)}function g(y,f,x,C,A){return f===null||f.tag!==7?(f=sr(x,y.mode,C,A),f.return=y,f):(f=i(f,x),f.return=y,f)}function m(y,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bl(""+f,y.mode,x),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qs:return x=To(f.type,f.key,f.props,null,y.mode,x),x.ref=Pi(y,null,f),x.return=y,x;case Er:return f=Vl(f,y.mode,x),f.return=y,f;case xn:var C=f._init;return m(y,C(f._payload),x)}if(Li(f)||Si(f))return f=sr(f,y.mode,x,null),f.return=y,f;co(y,f)}return null}function w(y,f,x,C){var A=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:c(y,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qs:return x.key===A?u(y,f,x,C):null;case Er:return x.key===A?h(y,f,x,C):null;case xn:return A=x._init,w(y,f,A(x._payload),C)}if(Li(x)||Si(x))return A!==null?null:g(y,f,x,C,null);co(y,x)}return null}function E(y,f,x,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(x)||null,c(f,y,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Qs:return y=y.get(C.key===null?x:C.key)||null,u(f,y,C,A);case Er:return y=y.get(C.key===null?x:C.key)||null,h(f,y,C,A);case xn:var z=C._init;return E(y,f,x,z(C._payload),A)}if(Li(C)||Si(C))return y=y.get(x)||null,g(f,y,C,A,null);co(f,C)}return null}function _(y,f,x,C){for(var A=null,z=null,j=f,b=f=0,k=null;j!==null&&b<x.length;b++){j.index>b?(k=j,j=null):k=j.sibling;var N=w(y,j,x[b],C);if(N===null){j===null&&(j=k);break}e&&j&&N.alternate===null&&t(y,j),f=o(N,f,b),z===null?A=N:z.sibling=N,z=N,j=k}if(b===x.length)return n(y,j),oe&&Qn(y,b),A;if(j===null){for(;b<x.length;b++)j=m(y,x[b],C),j!==null&&(f=o(j,f,b),z===null?A=j:z.sibling=j,z=j);return oe&&Qn(y,b),A}for(j=r(y,j);b<x.length;b++)k=E(j,y,b,x[b],C),k!==null&&(e&&k.alternate!==null&&j.delete(k.key===null?b:k.key),f=o(k,f,b),z===null?A=k:z.sibling=k,z=k);return e&&j.forEach(function(R){return t(y,R)}),oe&&Qn(y,b),A}function T(y,f,x,C){var A=Si(x);if(typeof A!="function")throw Error(M(150));if(x=A.call(x),x==null)throw Error(M(151));for(var z=A=null,j=f,b=f=0,k=null,N=x.next();j!==null&&!N.done;b++,N=x.next()){j.index>b?(k=j,j=null):k=j.sibling;var R=w(y,j,N.value,C);if(R===null){j===null&&(j=k);break}e&&j&&R.alternate===null&&t(y,j),f=o(R,f,b),z===null?A=R:z.sibling=R,z=R,j=k}if(N.done)return n(y,j),oe&&Qn(y,b),A;if(j===null){for(;!N.done;b++,N=x.next())N=m(y,N.value,C),N!==null&&(f=o(N,f,b),z===null?A=N:z.sibling=N,z=N);return oe&&Qn(y,b),A}for(j=r(y,j);!N.done;b++,N=x.next())N=E(j,y,b,N.value,C),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?b:N.key),f=o(N,f,b),z===null?A=N:z.sibling=N,z=N);return e&&j.forEach(function(I){return t(y,I)}),oe&&Qn(y,b),A}function D(y,f,x,C){if(typeof x=="object"&&x!==null&&x.type===Sr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qs:e:{for(var A=x.key,z=f;z!==null;){if(z.key===A){if(A=x.type,A===Sr){if(z.tag===7){n(y,z.sibling),f=i(z,x.props.children),f.return=y,y=f;break e}}else if(z.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===xn&&gp(A)===z.type){n(y,z.sibling),f=i(z,x.props),f.ref=Pi(y,z,x),f.return=y,y=f;break e}n(y,z);break}else t(y,z);z=z.sibling}x.type===Sr?(f=sr(x.props.children,y.mode,C,x.key),f.return=y,y=f):(C=To(x.type,x.key,x.props,null,y.mode,C),C.ref=Pi(y,f,x),C.return=y,y=C)}return l(y);case Er:e:{for(z=x.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(y,f.sibling),f=i(f,x.children||[]),f.return=y,y=f;break e}else{n(y,f);break}else t(y,f);f=f.sibling}f=Vl(x,y.mode,C),f.return=y,y=f}return l(y);case xn:return z=x._init,D(y,f,z(x._payload),C)}if(Li(x))return _(y,f,x,C);if(Si(x))return T(y,f,x,C);co(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(y,f.sibling),f=i(f,x),f.return=y,y=f):(n(y,f),f=Bl(x,y.mode,C),f.return=y,y=f),l(y)):n(y,f)}return D}var Yr=im(!0),sm=im(!1),Go=Hn(null),Xo=null,Dr=null,Uu=null;function Fu(){Uu=Dr=Xo=null}function $u(e){var t=Go.current;ie(Go),e._currentValue=t}function Pc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){Xo=e,Uu=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(Xo===null)throw Error(M(308));Dr=e,Xo.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var nr=null;function Bu(e){nr===null?nr=[e]:nr.push(e)}function om(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cu(e,n)}}function mp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;vn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,h=u.next;u.next=null,l===null?o=h:l.next=h,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,g=h=u=null,c=o;do{var w=c.lane,E=c.eventTime;if((r&w)===w){g!==null&&(g=g.next={eventTime:E,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var _=e,T=c;switch(w=t,E=n,T.tag){case 1:if(_=T.payload,typeof _=="function"){m=_.call(E,m,w);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,w=typeof _=="function"?_.call(E,m,w):_,w==null)break e;m=ue({},m,w);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[c]:w.push(c))}else E={eventTime:E,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=E,u=m):g=g.next=E,l|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(g===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cr|=l,e.lanes=l,e.memoizedState=m}}function xp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Ns={},Tt=Hn(Ns),us=Hn(Ns),ds=Hn(Ns);function rr(e){if(e===Ns)throw Error(M(174));return e}function Hu(e,t){switch(te(ds,t),te(us,e),te(Tt,Ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dc(t,e)}ie(Tt),te(Tt,t)}function Jr(){ie(Tt),ie(us),ie(ds)}function lm(e){rr(ds.current);var t=rr(Tt.current),n=dc(t,e.type);t!==n&&(te(us,e),te(Tt,n))}function Wu(e){us.current===e&&(ie(Tt),ie(us))}var le=Hn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function qu(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var ko=ln.ReactCurrentDispatcher,zl=ln.ReactCurrentBatchConfig,lr=0,ce=null,ve=null,be=null,Qo=!1,qi=!1,hs=0,t1=0;function Te(){throw Error(M(321))}function Ku(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function Gu(e,t,n,r,i,o){if(lr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?s1:o1,e=n(r,i),qi){o=0;do{if(qi=!1,hs=0,25<=o)throw Error(M(301));o+=1,be=ve=null,t.updateQueue=null,ko.current=a1,e=n(r,i)}while(qi)}if(ko.current=Zo,t=ve!==null&&ve.next!==null,lr=0,be=ve=ce=null,Qo=!1,t)throw Error(M(300));return e}function Xu(){var e=hs!==0;return hs=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ce.memoizedState=be=e:be=be.next=e,be}function ut(){if(ve===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=be===null?ce.memoizedState:be.next;if(t!==null)be=t,ve=e;else{if(e===null)throw Error(M(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},be===null?ce.memoizedState=be=e:be=be.next=e}return be}function ps(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=l=null,u=null,h=o;do{var g=h.lane;if((lr&g)===g)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=m,l=r):u=u.next=m,ce.lanes|=g,cr|=g}h=h.next}while(h!==null&&h!==o);u===null?l=r:u.next=c,bt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,cr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ul(e){var t=ut(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);bt(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cm(){}function um(e,t){var n=ce,r=ut(),i=t(),o=!bt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ke=!0),r=r.queue,Yu(pm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,fs(9,hm.bind(null,n,r,i,t),void 0,null),we===null)throw Error(M(349));lr&30||dm(n,t,i)}return i}function dm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hm(e,t,n,r){t.value=n,t.getSnapshot=r,fm(t)&&gm(e)}function pm(e,t,n){return n(function(){fm(t)&&gm(e)})}function fm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function gm(e){var t=rn(e,1);t!==null&&yt(t,e,1,-1)}function vp(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},t.queue=e,e=e.dispatch=i1.bind(null,ce,e),[t.memoizedState,e]}function fs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mm(){return ut().memoizedState}function Eo(e,t,n,r){var i=Et();ce.flags|=e,i.memoizedState=fs(1|t,n,void 0,r===void 0?null:r)}function Ta(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(ve!==null){var l=ve.memoizedState;if(o=l.destroy,r!==null&&Ku(r,l.deps)){i.memoizedState=fs(t,n,o,r);return}}ce.flags|=e,i.memoizedState=fs(1|t,n,o,r)}function yp(e,t){return Eo(8390656,8,e,t)}function Yu(e,t){return Ta(2048,8,e,t)}function xm(e,t){return Ta(4,2,e,t)}function vm(e,t){return Ta(4,4,e,t)}function ym(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bm(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4,4,ym.bind(null,t,e),n)}function Ju(){}function wm(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _m(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ku(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jm(e,t,n){return lr&21?(bt(n,t)||(n=Cg(),ce.lanes|=n,cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function n1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{J=n,zl.transition=r}}function km(){return ut().memoizedState}function r1(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))Sm(t,n);else if(n=om(e,t,n,r),n!==null){var i=Fe();yt(n,e,r,i),Nm(n,t,r)}}function i1(e,t,n){var r=On(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))Sm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(i.hasEagerState=!0,i.eagerState=c,bt(c,l)){var u=t.interleaved;u===null?(i.next=i,Bu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=om(e,t,i,r),n!==null&&(i=Fe(),yt(n,e,r,i),Nm(n,t,r))}}function Em(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Sm(e,t){qi=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cu(e,n)}}var Zo={readContext:ct,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},s1={readContext:ct,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:yp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4194308,4,ym.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Eo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Eo(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:vp,useDebugValue:Ju,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=vp(!1),t=e[0];return e=n1.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Et();if(oe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),we===null)throw Error(M(349));lr&30||dm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yp(pm.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,hm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=we.identifierPrefix;if(oe){var n=Gt,r=Kt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},o1={readContext:ct,useCallback:wm,useContext:ct,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:xm,useLayoutEffect:vm,useMemo:_m,useReducer:Ml,useRef:mm,useState:function(){return Ml(ps)},useDebugValue:Ju,useDeferredValue:function(e){var t=ut();return jm(t,ve.memoizedState,e)},useTransition:function(){var e=Ml(ps)[0],t=ut().memoizedState;return[e,t]},useMutableSource:cm,useSyncExternalStore:um,useId:km,unstable_isNewReconciler:!1},a1={readContext:ct,useCallback:wm,useContext:ct,useEffect:Yu,useImperativeHandle:bm,useInsertionEffect:xm,useLayoutEffect:vm,useMemo:_m,useReducer:Ul,useRef:mm,useState:function(){return Ul(ps)},useDebugValue:Ju,useDeferredValue:function(e){var t=ut();return ve===null?t.memoizedState=e:jm(t,ve.memoizedState,e)},useTransition:function(){var e=Ul(ps)[0],t=ut().memoizedState;return[e,t]},useMutableSource:cm,useSyncExternalStore:um,useId:km,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ia={isMounted:function(e){return(e=e._reactInternals)?xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=On(e),o=Qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(yt(t,e,i,r),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=On(e),o=Qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(yt(t,e,i,r),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=On(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(yt(t,e,r,n),jo(t,e,r))}};function bp(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!os(n,r)||!os(i,o):!0}function Cm(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Xe(t)?or:De.current,r=t.contextTypes,o=(r=r!=null)?Gr(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ia.enqueueReplaceState(t,t.state,null)}function Ac(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Xe(t)?or:De.current,i.context=Gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ia.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=O0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l1=typeof WeakMap=="function"?WeakMap:Map;function Tm(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ta||(ta=!0,Hc=r),Dc(e,t)},n}function Im(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dc(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_1.bind(null,e,t,n),t.then(e,e))}function jp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var c1=ln.ReactCurrentOwner,Ke=!1;function Me(e,t,n,r){t.child=e===null?sm(t,null,n,r):Yr(t,e.child,n,r)}function Ep(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=Gu(e,t,n,r,o,i),n=Xu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(oe&&n&&Lu(t),t.flags|=1,Me(e,t,r,i),t.child)}function Sp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!sd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Pm(e,t,o,r,i)):(e=To(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:os,n(l,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Pm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(os(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Oc(e,t,n,r,i)}function Rm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Lr,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Lr,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Lr,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Lr,Qe),Qe|=r;return Me(e,t,i,n),t.child}function Am(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oc(e,t,n,r,i){var o=Xe(n)?or:De.current;return o=Gr(t,o),Br(t,i),n=Gu(e,t,n,r,o,i),r=Xu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(oe&&r&&Lu(t),t.flags|=1,Me(e,t,n,i),t.child)}function Np(e,t,n,r,i){if(Xe(n)){var o=!0;Wo(t)}else o=!1;if(Br(t,i),t.stateNode===null)So(e,t),Cm(t,n,r),Ac(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=ct(h):(h=Xe(n)?or:De.current,h=Gr(t,h));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==h)&&wp(t,l,r,h),vn=!1;var w=t.memoizedState;l.state=w,Yo(t,r,l,i),u=t.memoizedState,c!==r||w!==u||Ge.current||vn?(typeof g=="function"&&(Rc(t,n,g,r),u=t.memoizedState),(c=vn||bp(t,n,c,r,w,u,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,am(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:pt(t.type,c),l.props=h,m=t.pendingProps,w=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?or:De.current,u=Gr(t,u));var E=n.getDerivedStateFromProps;(g=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||w!==u)&&wp(t,l,r,u),vn=!1,w=t.memoizedState,l.state=w,Yo(t,r,l,i);var _=t.memoizedState;c!==m||w!==_||Ge.current||vn?(typeof E=="function"&&(Rc(t,n,E,r),_=t.memoizedState),(h=vn||bp(t,n,h,r,w,_,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),l.props=r,l.state=_,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Lc(e,t,n,r,o,i)}function Lc(e,t,n,r,i,o){Am(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&hp(t,n,!1),sn(e,t,o);r=t.stateNode,c1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yr(t,e.child,null,o),t.child=Yr(t,null,c,o)):Me(e,t,c,o),t.memoizedState=r.state,i&&hp(t,n,!0),t.child}function Dm(e){var t=e.stateNode;t.pendingContext?dp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dp(e,t.context,!1),Hu(e,t.containerInfo)}function Cp(e,t,n,r,i){return Xr(),Mu(i),t.flags|=256,Me(e,t,n,r),t.child}var zc={dehydrated:null,treeContext:null,retryLane:0};function Mc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Om(e,t,n){var r=t.pendingProps,i=le.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(le,i&1),e===null)return Ic(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Aa(l,r,0,null),e=sr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mc(n),t.memoizedState=zc,e):Qu(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return u1(e,t,l,r,c,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ln(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=Ln(c,o):(o=sr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Mc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=zc,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qu(e,t){return t=Aa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&Mu(r),Yr(t,e.child,null,n),e=Qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(M(422))),uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Aa({mode:"visible",children:r.children},i,0,null),o=sr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yr(t,e.child,null,l),t.child.memoizedState=Mc(l),t.memoizedState=zc,o);if(!(t.mode&1))return uo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(M(419)),r=Fl(o,r,void 0),uo(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ke||c){if(r=we,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),yt(r,e,i,-1))}return id(),r=Fl(Error(M(421))),uo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=j1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ze=Rn(i.nextSibling),et=t,oe=!0,gt=null,e!==null&&(st[ot++]=Kt,st[ot++]=Gt,st[ot++]=ar,Kt=e.id,Gt=e.overflow,ar=t),t=Qu(t,r.children),t.flags|=4096,t)}function Tp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pc(e.return,t,n)}function $l(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Lm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tp(e,n,t);else if(e.tag===19)Tp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$l(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$l(t,!0,n,null,o);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d1(e,t,n){switch(t.tag){case 3:Dm(t),Xr();break;case 5:lm(t);break;case 1:Xe(t.type)&&Wo(t);break;case 4:Hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Go,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?Om(e,t,n):(te(le,le.current&1),e=sn(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Rm(e,t,n)}return sn(e,t,n)}var zm,Uc,Mm,Um;zm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uc=function(){};Mm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rr(Tt.current);var o=null;switch(n){case"input":i=ac(e,i),r=ac(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=uc(e,i),r=uc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}hc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Zi.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var u=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(o=o||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Zi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&re("scroll",e),o||c===u||(o=[])):(o=o||[]).push(h,u))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Um=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ri(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function h1(e,t,n){var r=t.pendingProps;switch(zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Xe(t.type)&&Ho(),Ie(t),null;case 3:return r=t.stateNode,Jr(),ie(Ge),ie(De),qu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gt!==null&&(Kc(gt),gt=null))),Uc(e,t),Ie(t),null;case 5:Wu(t);var i=rr(ds.current);if(n=t.type,e!==null&&t.stateNode!=null)Mm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ie(t),null}if(e=rr(Tt.current),lo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[cs]=o,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Mi.length;i++)re(Mi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Mh(r,o),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},re("invalid",r);break;case"textarea":Fh(r,o),re("invalid",r)}hc(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&ao(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&ao(r.textContent,c,e),i=["children",""+c]):Zi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Zs(r),Uh(r,o,!0);break;case"textarea":Zs(r),$h(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[cs]=r,zm(e,t,!1,!1),t.stateNode=e;e:{switch(l=pc(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mi.length;i++)re(Mi[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Mh(e,r),i=ac(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":Fh(e,r),i=uc(e,r),re("invalid",e);break;default:i=r}hc(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var u=c[o];o==="style"?mg(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fg(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&es(e,u):typeof u=="number"&&es(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&re("scroll",e):u!=null&&_u(e,o,u,l))}switch(n){case"input":Zs(e),Uh(e,r,!1);break;case"textarea":Zs(e),$h(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Um(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=rr(ds.current),rr(Tt.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ao(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ie(t),null;case 13:if(ie(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ze!==null&&t.mode&1&&!(t.flags&128))rm(),Xr(),t.flags|=98560,o=!1;else if(o=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[St]=t}else Xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else gt!==null&&(Kc(gt),gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?ye===0&&(ye=3):id())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Jr(),Uc(e,t),e===null&&as(t.stateNode.containerInfo),Ie(t),null;case 10:return $u(t.type._context),Ie(t),null;case 17:return Xe(t.type)&&Ho(),Ie(t),null;case 19:if(ie(le),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Ri(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Jo(e),l!==null){for(t.flags|=128,Ri(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>Zr&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Ie(t),null}else 2*fe()-o.renderingStartTime>Zr&&n!==1073741824&&(t.flags|=128,r=!0,Ri(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return rd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function p1(e,t){switch(zu(t),t.tag){case 1:return Xe(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jr(),ie(Ge),ie(De),qu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wu(t),null;case 13:if(ie(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(le),null;case 4:return Jr(),null;case 10:return $u(t.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var ho=!1,Re=!1,f1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Fc(e,t,n){try{n()}catch(r){de(e,t,r)}}var Ip=!1;function g1(e,t){if(jc=Fo,e=Hg(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,h=0,g=0,m=e,w=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(c=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(E=m.firstChild)!==null;)w=m,m=E;for(;;){if(m===e)break t;if(w===n&&++h===i&&(c=l),w===o&&++g===r&&(u=l),(E=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=E}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:e,selectionRange:n},Fo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var T=_.memoizedProps,D=_.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?T:pt(t.type,T),D);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){de(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return _=Ip,Ip=!1,_}function Ki(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fc(t,n,o)}i=i.next}while(i!==r)}}function Pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $c(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fm(e){var t=e.alternate;t!==null&&(e.alternate=null,Fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[cs],delete t[Nc],delete t[Jy],delete t[Qy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $m(e){return e.tag===5||e.tag===3||e.tag===4}function Pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$m(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(Bc(e,t,n),e=e.sibling;e!==null;)Bc(e,t,n),e=e.sibling}function Vc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vc(e,t,n),e=e.sibling;e!==null;)Vc(e,t,n),e=e.sibling}var je=null,ft=!1;function gn(e,t,n){for(n=n.child;n!==null;)Bm(e,t,n),n=n.sibling}function Bm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ja,n)}catch{}switch(n.tag){case 5:Re||Or(n,t);case 6:var r=je,i=ft;je=null,gn(e,t,n),je=r,ft=i,je!==null&&(ft?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(ft?(e=je,n=n.stateNode,e.nodeType===8?Dl(e.parentNode,n):e.nodeType===1&&Dl(e,n),is(e)):Dl(je,n.stateNode));break;case 4:r=je,i=ft,je=n.stateNode.containerInfo,ft=!0,gn(e,t,n),je=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fc(n,t,l),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Re&&(Or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){de(n,t,c)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,gn(e,t,n),Re=r):gn(e,t,n);break;default:gn(e,t,n)}}function Rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new f1),t.forEach(function(r){var i=k1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:je=c.stateNode,ft=!1;break e;case 3:je=c.stateNode.containerInfo,ft=!0;break e;case 4:je=c.stateNode.containerInfo,ft=!0;break e}c=c.return}if(je===null)throw Error(M(160));Bm(o,l,i),je=null,ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){de(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}function Vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),r&4){try{Ki(3,e,e.return),Pa(3,e)}catch(T){de(e,e.return,T)}try{Ki(5,e,e.return)}catch(T){de(e,e.return,T)}}break;case 1:ht(t,e),kt(e),r&512&&n!==null&&Or(n,n.return);break;case 5:if(ht(t,e),kt(e),r&512&&n!==null&&Or(n,n.return),e.flags&32){var i=e.stateNode;try{es(i,"")}catch(T){de(e,e.return,T)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&dg(i,o),pc(c,l);var h=pc(c,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?mg(i,m):g==="dangerouslySetInnerHTML"?fg(i,m):g==="children"?es(i,m):_u(i,g,m,h)}switch(c){case"input":lc(i,o);break;case"textarea":hg(i,o);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Mr(i,!!o.multiple,E,!1):w!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[cs]=o}catch(T){de(e,e.return,T)}}break;case 6:if(ht(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(T){de(e,e.return,T)}}break;case 3:if(ht(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{is(t.containerInfo)}catch(T){de(e,e.return,T)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(td=fe())),r&4&&Rp(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(h=Re)||g,ht(t,e),Re=h):ht(t,e),kt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(m=$=g;$!==null;){switch(w=$,E=w.child,w.tag){case 0:case 11:case 14:case 15:Ki(4,w,w.return);break;case 1:Or(w,w.return);var _=w.stateNode;if(typeof _.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(T){de(r,n,T)}}break;case 5:Or(w,w.return);break;case 22:if(w.memoizedState!==null){Dp(m);continue}}E!==null?(E.return=w,$=E):Dp(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=gg("display",l))}catch(T){de(e,e.return,T)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(T){de(e,e.return,T)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ht(t,e),kt(e),r&4&&Rp(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($m(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(es(i,""),r.flags&=-33);var o=Pp(e);Vc(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Pp(e);Bc(e,c,l);break;default:throw Error(M(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m1(e,t,n){$=e,Hm(e)}function Hm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ho;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Re;c=ho;var h=Re;if(ho=l,(Re=u)&&!h)for($=i;$!==null;)l=$,u=l.child,l.tag===22&&l.memoizedState!==null?Op(i):u!==null?(u.return=l,$=u):Op(i);for(;o!==null;)$=o,Hm(o),o=o.sibling;$=i,ho=c,Re=h}Ap(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):Ap(e)}}function Ap(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&is(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Re||t.flags&512&&$c(t)}catch(w){de(t,t.return,w)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Dp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Op(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pa(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){de(t,i,u)}}var o=t.return;try{$c(t)}catch(u){de(t,o,u)}break;case 5:var l=t.return;try{$c(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var x1=Math.ceil,ea=ln.ReactCurrentDispatcher,Zu=ln.ReactCurrentOwner,lt=ln.ReactCurrentBatchConfig,G=0,we=null,me=null,ke=0,Qe=0,Lr=Hn(0),ye=0,gs=null,cr=0,Ra=0,ed=0,Gi=null,He=null,td=0,Zr=1/0,Wt=null,ta=!1,Hc=null,Dn=null,po=!1,Sn=null,na=0,Xi=0,Wc=null,No=-1,Co=0;function Fe(){return G&6?fe():No!==-1?No:No=fe()}function On(e){return e.mode&1?G&2&&ke!==0?ke&-ke:e1.transition!==null?(Co===0&&(Co=Cg()),Co):(e=J,e!==0||(e=window.event,e=e===void 0?16:Og(e.type)),e):1}function yt(e,t,n,r){if(50<Xi)throw Xi=0,Wc=null,Error(M(185));ks(e,n,r),(!(G&2)||e!==we)&&(e===we&&(!(G&2)&&(Ra|=n),ye===4&&bn(e,ke)),Ye(e,r),n===1&&G===0&&!(t.mode&1)&&(Zr=fe()+500,Ca&&Wn()))}function Ye(e,t){var n=e.callbackNode;ey(e,t);var r=Uo(e,e===we?ke:0);if(r===0)n!==null&&Hh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hh(n),t===1)e.tag===0?Zy(Lp.bind(null,e)):em(Lp.bind(null,e)),Xy(function(){!(G&6)&&Wn()}),n=null;else{switch(Tg(r)){case 1:n=Nu;break;case 4:n=Sg;break;case 16:n=Mo;break;case 536870912:n=Ng;break;default:n=Mo}n=Qm(n,Wm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wm(e,t){if(No=-1,Co=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Vr()&&e.callbackNode!==n)return null;var r=Uo(e,e===we?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ra(e,r);else{t=r;var i=G;G|=2;var o=Km();(we!==e||ke!==t)&&(Wt=null,Zr=fe()+500,ir(e,t));do try{b1();break}catch(c){qm(e,c)}while(!0);Fu(),ea.current=o,G=i,me!==null?t=0:(we=null,ke=0,t=ye)}if(t!==0){if(t===2&&(i=vc(e),i!==0&&(r=i,t=qc(e,i))),t===1)throw n=gs,ir(e,0),bn(e,r),Ye(e,fe()),n;if(t===6)bn(e,r);else{if(i=e.current.alternate,!(r&30)&&!v1(i)&&(t=ra(e,r),t===2&&(o=vc(e),o!==0&&(r=o,t=qc(e,o))),t===1))throw n=gs,ir(e,0),bn(e,r),Ye(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Zn(e,He,Wt);break;case 3:if(bn(e,r),(r&130023424)===r&&(t=td+500-fe(),10<t)){if(Uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sc(Zn.bind(null,e,He,Wt),t);break}Zn(e,He,Wt);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-vt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){e.timeoutHandle=Sc(Zn.bind(null,e,He,Wt),r);break}Zn(e,He,Wt);break;case 5:Zn(e,He,Wt);break;default:throw Error(M(329))}}}return Ye(e,fe()),e.callbackNode===n?Wm.bind(null,e):null}function qc(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=ra(e,t),e!==2&&(t=He,He=n,t!==null&&Kc(t)),e}function Kc(e){He===null?He=e:He.push.apply(He,e)}function v1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!bt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~ed,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Lp(e){if(G&6)throw Error(M(327));Vr();var t=Uo(e,0);if(!(t&1))return Ye(e,fe()),null;var n=ra(e,t);if(e.tag!==0&&n===2){var r=vc(e);r!==0&&(t=r,n=qc(e,r))}if(n===1)throw n=gs,ir(e,0),bn(e,t),Ye(e,fe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zn(e,He,Wt),Ye(e,fe()),null}function nd(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Zr=fe()+500,Ca&&Wn())}}function ur(e){Sn!==null&&Sn.tag===0&&!(G&6)&&Vr();var t=G;G|=1;var n=lt.transition,r=J;try{if(lt.transition=null,J=1,e)return e()}finally{J=r,lt.transition=n,G=t,!(G&6)&&Wn()}}function rd(){Qe=Lr.current,ie(Lr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gy(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:Jr(),ie(Ge),ie(De),qu();break;case 5:Wu(r);break;case 4:Jr();break;case 13:ie(le);break;case 19:ie(le);break;case 10:$u(r.type._context);break;case 22:case 23:rd()}n=n.return}if(we=e,me=e=Ln(e.current,null),ke=Qe=t,ye=0,gs=null,ed=Ra=cr=0,He=Gi=null,nr!==null){for(t=0;t<nr.length;t++)if(n=nr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}nr=null}return e}function qm(e,t){do{var n=me;try{if(Fu(),ko.current=Zo,Qo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(lr=0,be=ve=ce=null,qi=!1,hs=0,Zu.current=null,n===null||n.return===null){ye=1,gs=t,me=null;break}e:{var o=e,l=n.return,c=n,u=t;if(t=ke,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var w=g.alternate;w?(g.updateQueue=w.updateQueue,g.memoizedState=w.memoizedState,g.lanes=w.lanes):(g.updateQueue=null,g.memoizedState=null)}var E=jp(l);if(E!==null){E.flags&=-257,kp(E,l,c,o,t),E.mode&1&&_p(o,h,t),t=E,u=h;var _=t.updateQueue;if(_===null){var T=new Set;T.add(u),t.updateQueue=T}else _.add(u);break e}else{if(!(t&1)){_p(o,h,t),id();break e}u=Error(M(426))}}else if(oe&&c.mode&1){var D=jp(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),kp(D,l,c,o,t),Mu(Qr(u,c));break e}}o=u=Qr(u,c),ye!==4&&(ye=2),Gi===null?Gi=[o]:Gi.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Tm(o,u,t);mp(o,y);break e;case 1:c=u;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dn===null||!Dn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Im(o,c,t);mp(o,C);break e}}o=o.return}while(o!==null)}Xm(n)}catch(A){t=A,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Km(){var e=ea.current;return ea.current=Zo,e===null?Zo:e}function id(){(ye===0||ye===3||ye===2)&&(ye=4),we===null||!(cr&268435455)&&!(Ra&268435455)||bn(we,ke)}function ra(e,t){var n=G;G|=2;var r=Km();(we!==e||ke!==t)&&(Wt=null,ir(e,t));do try{y1();break}catch(i){qm(e,i)}while(!0);if(Fu(),G=n,ea.current=r,me!==null)throw Error(M(261));return we=null,ke=0,ye}function y1(){for(;me!==null;)Gm(me)}function b1(){for(;me!==null&&!W0();)Gm(me)}function Gm(e){var t=Jm(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Xm(e):me=t,Zu.current=null}function Xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=p1(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=h1(n,t,Qe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function Zn(e,t,n){var r=J,i=lt.transition;try{lt.transition=null,J=1,w1(e,t,n,r)}finally{lt.transition=i,J=r}return null}function w1(e,t,n,r){do Vr();while(Sn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ty(e,o),e===we&&(me=we=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,Qm(Mo,function(){return Vr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var l=J;J=1;var c=G;G|=4,Zu.current=null,g1(e,n),Vm(n,e),$y(kc),Fo=!!jc,kc=jc=null,e.current=n,m1(n),q0(),G=c,J=l,lt.transition=o}else e.current=n;if(po&&(po=!1,Sn=e,na=i),o=e.pendingLanes,o===0&&(Dn=null),X0(n.stateNode),Ye(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ta)throw ta=!1,e=Hc,Hc=null,e;return na&1&&e.tag!==0&&Vr(),o=e.pendingLanes,o&1?e===Wc?Xi++:(Xi=0,Wc=e):Xi=0,Wn(),null}function Vr(){if(Sn!==null){var e=Tg(na),t=lt.transition,n=J;try{if(lt.transition=null,J=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,na=0,G&6)throw Error(M(331));var i=G;for(G|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var c=o.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:Ki(8,g,o)}var m=g.child;if(m!==null)m.return=g,$=m;else for(;$!==null;){g=$;var w=g.sibling,E=g.return;if(Fm(g),g===h){$=null;break}if(w!==null){w.return=E,$=w;break}$=E}}}var _=o.alternate;if(_!==null){var T=_.child;if(T!==null){_.child=null;do{var D=T.sibling;T.sibling=null,T=D}while(T!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ki(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,$=y;break e}$=o.return}}var f=e.current;for($=f;$!==null;){l=$;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,$=x;else e:for(l=f;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Pa(9,c)}}catch(A){de(c,c.return,A)}if(c===l){$=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,$=C;break e}$=c.return}}if(G=i,Wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ja,e)}catch{}r=!0}return r}finally{J=n,lt.transition=t}}return!1}function zp(e,t,n){t=Qr(n,t),t=Tm(e,t,1),e=An(e,t,1),t=Fe(),e!==null&&(ks(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)zp(e,e,n);else for(;t!==null;){if(t.tag===3){zp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=Qr(n,e),e=Im(t,e,1),t=An(t,e,1),e=Fe(),t!==null&&(ks(t,1,e),Ye(t,e));break}}t=t.return}}function _1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(ke&n)===n&&(ye===4||ye===3&&(ke&130023424)===ke&&500>fe()-td?ir(e,0):ed|=n),Ye(e,t)}function Ym(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=Fe();e=rn(e,t),e!==null&&(ks(e,t,n),Ye(e,n))}function j1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ym(e,n)}function k1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Ym(e,n)}var Jm;Jm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,d1(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,oe&&t.flags&1048576&&tm(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=Gr(t,De.current);Br(t,n),i=Gu(null,t,r,e,i,n);var o=Xu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Wo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(t),i.updater=Ia,t.stateNode=i,i._reactInternals=t,Ac(t,r,e,n),t=Lc(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Lu(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=S1(r),e=pt(r,e),i){case 0:t=Oc(null,t,r,e,n);break e;case 1:t=Np(null,t,r,e,n);break e;case 11:t=Ep(null,t,r,e,n);break e;case 14:t=Sp(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Oc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Np(e,t,r,i,n);case 3:e:{if(Dm(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,am(e,t),Yo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(M(423)),t),t=Cp(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(M(424)),t),t=Cp(e,t,r,n,i);break e}else for(Ze=Rn(t.stateNode.containerInfo.firstChild),et=t,oe=!0,gt=null,n=sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xr(),r===i){t=sn(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return lm(t),e===null&&Ic(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ec(r,i)?l=null:o!==null&&Ec(r,o)&&(t.flags|=32),Am(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Ic(t),null;case 13:return Om(e,t,n);case 4:return Hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Ep(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,te(Go,r._currentValue),r._currentValue=l,o!==null)if(bt(o.value,l)){if(o.children===i.children&&!Ge.current){t=sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Qt(-1,n&-n),u.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Pc(o.return,n,t),c.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Pc(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=ct(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),Sp(e,t,r,i,n);case 15:return Pm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),So(e,t),t.tag=1,Xe(r)?(e=!0,Wo(t)):e=!1,Br(t,n),Cm(t,r,i),Ac(t,r,i,n),Lc(null,t,r,!0,e,n);case 19:return Lm(e,t,n);case 22:return Rm(e,t,n)}throw Error(M(156,t.tag))};function Qm(e,t){return Eg(e,t)}function E1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new E1(e,t,n,r)}function sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S1(e){if(typeof e=="function")return sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===Eu)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")sd(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sr:return sr(n.children,i,o,t);case ju:l=8,i|=8;break;case rc:return e=at(12,n,t,i|2),e.elementType=rc,e.lanes=o,e;case ic:return e=at(13,n,t,i),e.elementType=ic,e.lanes=o,e;case sc:return e=at(19,n,t,i),e.elementType=sc,e.lanes=o,e;case lg:return Aa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case og:l=10;break e;case ag:l=9;break e;case ku:l=11;break e;case Eu:l=14;break e;case xn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=at(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sr(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Aa(e,t,n,r){return e=at(22,e,r,t),e.elementType=lg,e.lanes=n,e.stateNode={isHidden:!1},e}function Bl(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function N1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(e,t,n,r,i,o,l,c,u){return e=new N1(e,t,n,c,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=at(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(o),e}function C1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zm(e){if(!e)return $n;e=e._reactInternals;e:{if(xr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Zg(e,n,t)}return t}function ex(e,t,n,r,i,o,l,c,u){return e=od(n,r,!0,e,i,o,l,c,u),e.context=Zm(null),n=e.current,r=Fe(),i=On(n),o=Qt(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,ks(e,i,r),Ye(e,r),e}function Da(e,t,n,r){var i=t.current,o=Fe(),l=On(i);return n=Zm(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,l),e!==null&&(yt(e,i,l,o),jo(e,i,l)),l}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ad(e,t){Mp(e,t),(e=e.alternate)&&Mp(e,t)}function T1(){return null}var tx=typeof reportError=="function"?reportError:function(e){console.error(e)};function ld(e){this._internalRoot=e}Oa.prototype.render=ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Da(e,t,null,null)};Oa.prototype.unmount=ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){Da(null,e,null,null)}),t[nn]=null}};function Oa(e){this._internalRoot=e}Oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Dg(e)}};function cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Up(){}function I1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=ia(l);o.call(h)}}var l=ex(t,r,e,0,null,!1,!1,"",Up);return e._reactRootContainer=l,e[nn]=l.current,as(e.nodeType===8?e.parentNode:e),ur(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=ia(u);c.call(h)}}var u=od(e,0,!1,null,null,!1,!1,"",Up);return e._reactRootContainer=u,e[nn]=u.current,as(e.nodeType===8?e.parentNode:e),ur(function(){Da(t,u,n,r)}),u}function za(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var c=i;i=function(){var u=ia(l);c.call(u)}}Da(t,l,e,i)}else l=I1(n,t,e,i,r);return ia(l)}Ig=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zi(t.pendingLanes);n!==0&&(Cu(t,n|1),Ye(t,fe()),!(G&6)&&(Zr=fe()+500,Wn()))}break;case 13:ur(function(){var r=rn(e,1);if(r!==null){var i=Fe();yt(r,e,1,i)}}),ad(e,1)}};Tu=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Fe();yt(t,e,134217728,n)}ad(e,134217728)}};Pg=function(e){if(e.tag===13){var t=On(e),n=rn(e,t);if(n!==null){var r=Fe();yt(n,e,t,r)}ad(e,t)}};Rg=function(){return J};Ag=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};gc=function(e,t,n){switch(t){case"input":if(lc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Na(r);if(!i)throw Error(M(90));ug(r),lc(r,i)}}}break;case"textarea":hg(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};yg=nd;bg=ur;var P1={usingClientEntryPoint:!1,Events:[Ss,Ir,Na,xg,vg,nd]},Ai={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R1={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ja=fo.inject(R1),Ct=fo}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(t))throw Error(M(200));return C1(e,t,null,n)};nt.createRoot=function(e,t){if(!cd(e))throw Error(M(299));var n=!1,r="",i=tx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=od(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,as(e.nodeType===8?e.parentNode:e),new ld(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=jg(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return ur(e)};nt.hydrate=function(e,t,n){if(!La(t))throw Error(M(200));return za(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!cd(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=tx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ex(t,null,e,1,n??null,i,!1,o,l),e[nn]=t.current,as(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Oa(t)};nt.render=function(e,t,n){if(!La(t))throw Error(M(200));return za(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!La(e))throw Error(M(40));return e._reactRootContainer?(ur(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};nt.unstable_batchedUpdates=nd;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!La(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return za(e,t,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(e){console.error(e)}}nx(),ng.exports=nt;var A1=ng.exports,Fp=A1;tc.createRoot=Fp.createRoot,tc.hydrateRoot=Fp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const $p="popstate";function D1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:c}=r.location;return Gc("",{pathname:o,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sa(i)}return L1(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ud(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O1(){return Math.random().toString(36).substr(2,8)}function Bp(e,t){return{usr:e.state,key:e.key,idx:t}}function Gc(e,t,n,r){return n===void 0&&(n=null),ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ci(t):t,{state:n,key:t&&t.key||r||O1()})}function sa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ci(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function L1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,c=Nn.Pop,u=null,h=g();h==null&&(h=0,l.replaceState(ms({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function m(){c=Nn.Pop;let D=g(),y=D==null?null:D-h;h=D,u&&u({action:c,location:T.location,delta:y})}function w(D,y){c=Nn.Push;let f=Gc(T.location,D,y);h=g()+1;let x=Bp(f,h),C=T.createHref(f);try{l.pushState(x,"",C)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(C)}o&&u&&u({action:c,location:T.location,delta:1})}function E(D,y){c=Nn.Replace;let f=Gc(T.location,D,y);h=g();let x=Bp(f,h),C=T.createHref(f);l.replaceState(x,"",C),o&&u&&u({action:c,location:T.location,delta:0})}function _(D){let y=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof D=="string"?D:sa(D);return f=f.replace(/ $/,"%20"),ge(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let T={get action(){return c},get location(){return e(i,l)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener($p,m),u=D,()=>{i.removeEventListener($p,m),u=null}},createHref(D){return t(i,D)},createURL:_,encodeLocation(D){let y=_(D);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:w,replace:E,go(D){return l.go(D)}};return T}var Vp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vp||(Vp={}));function z1(e,t,n){return n===void 0&&(n="/"),M1(e,t,n)}function M1(e,t,n,r){let i=typeof t=="string"?ci(t):t,o=dd(i.pathname||"/",n);if(o==null)return null;let l=rx(e);U1(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let h=J1(o);c=G1(l[u],h)}return c}function rx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=zn([r,u.relativePath]),g=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),rx(o.children,t,g,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:q1(h,o.index),routesMeta:g})};return e.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,l);else for(let u of ix(o.path))i(o,l,u)}),t}function ix(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ix(r.join("/")),c=[];return c.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function U1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F1=/^:[\w-]+$/,$1=3,B1=2,V1=1,H1=10,W1=-2,Hp=e=>e==="*";function q1(e,t){let n=e.split("/"),r=n.length;return n.some(Hp)&&(r+=W1),t&&(r+=B1),n.filter(i=>!Hp(i)).reduce((i,o)=>i+(F1.test(o)?$1:o===""?V1:H1),r)}function K1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G1(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=X1({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},g),w=u.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:zn([o,m.pathname]),pathnameBase:n2(zn([o,m.pathnameBase])),route:w}),m.pathnameBase!=="/"&&(o=zn([o,m.pathnameBase]))}return l}function X1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Y1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,g,m)=>{let{paramName:w,isOptional:E}=g;if(w==="*"){let T=c[m]||"";l=o.slice(0,o.length-T.length).replace(/(.)\/+$/,"$1")}const _=c[m];return E&&!_?h[w]=void 0:h[w]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:l,pattern:e}}function Y1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ud(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function J1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ud(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function dd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z1=e=>Q1.test(e);function e2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ci(e):e,o;if(n)if(Z1(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),ud(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Wp(n.substring(1),"/"):o=Wp(n,t)}else o=t;return{pathname:o,search:r2(r),hash:i2(i)}}function Wp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hd(e,t){let n=t2(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ci(e):(i=ms({},e),ge(!i.pathname||!i.pathname.includes("?"),Hl("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Hl("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Hl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),m-=1;i.pathname=w.join("/")}c=m>=0?t[m]:"/"}let u=e2(i,c),h=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||g)&&(u.pathname+="/"),u}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),n2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),r2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,i2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function s2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sx=["post","put","patch","delete"];new Set(sx);const o2=["get",...sx];new Set(o2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}const fd=P.createContext(null),a2=P.createContext(null),qn=P.createContext(null),Ma=P.createContext(null),cn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),ox=P.createContext(null);function l2(e,t){let{relative:n}=t===void 0?{}:t;ui()||ge(!1);let{basename:r,navigator:i}=P.useContext(qn),{hash:o,pathname:l,search:c}=cx(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:zn([r,l])),i.createHref({pathname:u,search:c,hash:o})}function ui(){return P.useContext(Ma)!=null}function un(){return ui()||ge(!1),P.useContext(Ma).location}function ax(e){P.useContext(qn).static||P.useLayoutEffect(e)}function _t(){let{isDataRoute:e}=P.useContext(cn);return e?w2():c2()}function c2(){ui()||ge(!1);let e=P.useContext(fd),{basename:t,future:n,navigator:r}=P.useContext(qn),{matches:i}=P.useContext(cn),{pathname:o}=un(),l=JSON.stringify(hd(i,n.v7_relativeSplatPath)),c=P.useRef(!1);return ax(()=>{c.current=!0}),P.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=pd(h,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:zn([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,o,e])}function lx(){let{matches:e}=P.useContext(cn),t=e[e.length-1];return t?t.params:{}}function cx(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=P.useContext(qn),{matches:i}=P.useContext(cn),{pathname:o}=un(),l=JSON.stringify(hd(i,r.v7_relativeSplatPath));return P.useMemo(()=>pd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function u2(e,t){return d2(e,t)}function d2(e,t,n,r){ui()||ge(!1);let{navigator:i}=P.useContext(qn),{matches:o}=P.useContext(cn),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let h=un(),g;if(t){var m;let D=typeof t=="string"?ci(t):t;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||ge(!1),g=D}else g=h;let w=g.pathname||"/",E=w;if(u!=="/"){let D=u.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(D.length).join("/")}let _=z1(e,{pathname:E}),T=m2(_&&_.map(D=>Object.assign({},D,{params:Object.assign({},c,D.params),pathname:zn([u,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:zn([u,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,n,r);return t&&T?P.createElement(Ma.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Nn.Pop}},T):T}function h2(){let e=b2(),t=s2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,null)}const p2=P.createElement(h2,null);class f2 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?P.createElement(cn.Provider,{value:this.props.routeContext},P.createElement(ox.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function g2(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(fd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(cn.Provider,{value:t},r)}function m2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let g=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||ge(!1),l=l.slice(0,Math.min(l.length,g+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=g),m.route.id){let{loaderData:w,errors:E}=n,_=m.route.loader&&w[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||_){u=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,m,w)=>{let E,_=!1,T=null,D=null;n&&(E=c&&m.route.id?c[m.route.id]:void 0,T=m.route.errorElement||p2,u&&(h<0&&w===0?(_2("route-fallback"),_=!0,D=null):h===w&&(_=!0,D=m.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,w+1)),f=()=>{let x;return E?x=T:_?x=D:m.route.Component?x=P.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=g,P.createElement(g2,{match:m,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?P.createElement(f2,{location:n.location,revalidation:n.revalidation,component:T,error:E,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var ux=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ux||{}),dx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dx||{});function x2(e){let t=P.useContext(fd);return t||ge(!1),t}function v2(e){let t=P.useContext(a2);return t||ge(!1),t}function y2(e){let t=P.useContext(cn);return t||ge(!1),t}function hx(e){let t=y2(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function b2(){var e;let t=P.useContext(ox),n=v2(),r=hx();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function w2(){let{router:e}=x2(ux.UseNavigateStable),t=hx(dx.UseNavigateStable),n=P.useRef(!1);return ax(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,xs({fromRouteId:t},o)))},[e,t])}const qp={};function _2(e,t,n){qp[e]||(qp[e]=!0)}function j2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Io(e){let{to:t,replace:n,state:r,relative:i}=e;ui()||ge(!1);let{future:o,static:l}=P.useContext(qn),{matches:c}=P.useContext(cn),{pathname:u}=un(),h=_t(),g=pd(t,hd(c,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(g);return P.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function se(e){ge(!1)}function k2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:o,static:l=!1,future:c}=e;ui()&&ge(!1);let u=t.replace(/^\/*/,"/"),h=P.useMemo(()=>({basename:u,navigator:o,static:l,future:xs({v7_relativeSplatPath:!1},c)}),[u,c,o,l]);typeof r=="string"&&(r=ci(r));let{pathname:g="/",search:m="",hash:w="",state:E=null,key:_="default"}=r,T=P.useMemo(()=>{let D=dd(g,u);return D==null?null:{location:{pathname:D,search:m,hash:w,state:E,key:_},navigationType:i}},[u,g,m,w,E,_,i]);return T==null?null:P.createElement(qn.Provider,{value:h},P.createElement(Ma.Provider,{children:n,value:T}))}function Kp(e){let{children:t,location:n}=e;return u2(Xc(t),n)}new Promise(()=>{});function Xc(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;let o=[...t,i];if(r.type===P.Fragment){n.push.apply(n,Xc(r.props.children,o));return}r.type!==se&&ge(!1),!r.props.index||!r.props.children||ge(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yc(){return Yc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yc.apply(this,arguments)}function E2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function S2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N2(e,t){return e.button===0&&(!t||t==="_self")&&!S2(e)}function Jc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function C2(e,t){let n=Jc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const T2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],I2="6";try{window.__reactRouterVersion=I2}catch{}const P2="startTransition",Gp=_0[P2];function R2(e){let{basename:t,children:n,future:r,window:i}=e,o=P.useRef();o.current==null&&(o.current=D1({window:i,v5Compat:!0}));let l=o.current,[c,u]=P.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=P.useCallback(m=>{h&&Gp?Gp(()=>u(m)):u(m)},[u,h]);return P.useLayoutEffect(()=>l.listen(g),[l,g]),P.useEffect(()=>j2(r),[r]),P.createElement(k2,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const A2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ae=P.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:c,target:u,to:h,preventScrollReset:g,viewTransition:m}=t,w=E2(t,T2),{basename:E}=P.useContext(qn),_,T=!1;if(typeof h=="string"&&D2.test(h)&&(_=h,A2))try{let x=new URL(window.location.href),C=h.startsWith("//")?new URL(x.protocol+h):new URL(h),A=dd(C.pathname,E);C.origin===x.origin&&A!=null?h=A+C.search+C.hash:T=!0}catch{}let D=l2(h,{relative:i}),y=O2(h,{replace:l,state:c,target:u,preventScrollReset:g,relative:i,viewTransition:m});function f(x){r&&r(x),x.defaultPrevented||y(x)}return P.createElement("a",Yc({},w,{href:_||D,onClick:T||o?r:f,ref:n,target:u}))});var Xp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Xp||(Xp={}));var Yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yp||(Yp={}));function O2(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:c}=t===void 0?{}:t,u=_t(),h=un(),g=cx(e,{relative:l});return P.useCallback(m=>{if(N2(m,n)){m.preventDefault();let w=r!==void 0?r:sa(h)===sa(g);u(e,{replace:w,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[h,u,g,r,i,n,e,o,l,c])}function L2(e){let t=P.useRef(Jc(e)),n=P.useRef(!1),r=un(),i=P.useMemo(()=>C2(r.search,n.current?null:t.current),[r.search]),o=_t(),l=P.useCallback((c,u)=>{const h=Jc(typeof c=="function"?c(i):c);n.current=!0,o("?"+h,u)},[o,i]);return[i,l]}const px=P.createContext(void 0),Oe=()=>{const e=P.useContext(px);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},z2=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},M2=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},U2=({children:e})=>{const[t,n]=P.useState(null),[r,i]=P.useState(!0),[o,l]=P.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:g}=M2(),m=h==="subdomain"?`/api/tenants/by-subdomain/${g}`:`/api/tenants/by-domain/${encodeURIComponent(g)}`,w=await fetch(`http://localhost:3001${m}`);if(!w.ok)throw w.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const E=await w.json();if(E.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(E.status==="cancelled")throw new Error("Cuenta cancelada.");n(E),z2(E.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};P.useEffect(()=>{c()},[]);const u=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return s.jsx(px.Provider,{value:{tenant:t,loading:r,error:o,isWhiteLabel:u,refreshTenant:c},children:e})};var Jp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},F2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],c=e[n++],u=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},gx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,c=l?e[i+1]:0,u=i+2<e.length,h=u?e[i+2]:0,g=o>>2,m=(o&3)<<4|c>>4;let w=(c&15)<<2|h>>6,E=h&63;u||(E=64,l||(w=64)),r.push(n[g],n[m],n[w],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fx(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):F2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||c==null||h==null||m==null)throw new $2;const w=o<<2|c>>4;if(r.push(w),h!==64){const E=c<<4&240|h>>2;if(r.push(E),m!==64){const _=h<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B2=function(e){const t=fx(e);return gx.encodeByteArray(t,!0)},oa=function(e){return B2(e).replace(/\./g,"")},mx=function(e){try{return gx.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=()=>V2().__FIREBASE_DEFAULTS__,W2=()=>{if(typeof process>"u"||typeof Jp>"u")return;const e=Jp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},q2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mx(e[1]);return t&&JSON.parse(t)},gd=()=>{try{return H2()||W2()||q2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},xx=e=>{var t,n;return(n=(t=gd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},vx=e=>{const t=xx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},yx=()=>{var e;return(e=gd())===null||e===void 0?void 0:e.config},bx=e=>{var t;return(t=gd())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[oa(JSON.stringify(n)),oa(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function X2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function J2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q2(){const e=$e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Z2(){try{return typeof indexedDB=="object"}catch{return!1}}function eb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tb,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?nb(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Ot(i,c,r)}}function nb(e,t){return e.replace(rb,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const rb=/\{\$([^}]+)}/g;function ib(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function aa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],l=t[i];if(Qp(o)&&Qp(l)){if(!aa(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ui(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Fi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function sb(e,t){const n=new ob(e,t);return n.subscribe.bind(n)}class ob{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ab(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Wl),i.error===void 0&&(i.error=Wl),i.complete===void 0&&(i.complete=Wl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ab(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Wl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new K2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ub(t))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=er){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=er){return this.instances.has(t)}getOptions(t=er){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cb(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=er){return this.component?this.component.multipleInstances?t:er:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cb(e){return e===er?void 0:e}function ub(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new lb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const hb={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},pb=Y.INFO,fb={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},gb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=fb[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class md{constructor(t){this.name=t,this._logLevel=pb,this._logHandler=gb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?hb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const mb=(e,t)=>t.some(n=>e instanceof n);let Zp,ef;function xb(){return Zp||(Zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vb(){return ef||(ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _x=new WeakMap,Qc=new WeakMap,jx=new WeakMap,ql=new WeakMap,xd=new WeakMap;function yb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(Mn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&_x.set(n,e)}).catch(()=>{}),xd.set(t,e),t}function bb(e){if(Qc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});Qc.set(e,t)}let Zc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jx.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wb(e){Zc=e(Zc)}function _b(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Kl(this),t,...n);return jx.set(r,t.sort?t.sort():[t]),Mn(r)}:vb().includes(e)?function(...t){return e.apply(Kl(this),t),Mn(_x.get(this))}:function(...t){return Mn(e.apply(Kl(this),t))}}function jb(e){return typeof e=="function"?_b(e):(e instanceof IDBTransaction&&bb(e),mb(e,xb())?new Proxy(e,Zc):e)}function Mn(e){if(e instanceof IDBRequest)return yb(e);if(ql.has(e))return ql.get(e);const t=jb(e);return t!==e&&(ql.set(e,t),xd.set(t,e)),t}const Kl=e=>xd.get(e);function kb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),c=Mn(l);return r&&l.addEventListener("upgradeneeded",u=>{r(Mn(l.result),u.oldVersion,u.newVersion,Mn(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Eb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Gl=new Map;function tf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gl.get(t))return Gl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Eb.includes(n)))return;const o=async function(l,...c){const u=this.transaction(l,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return Gl.set(t,o),o}wb(e=>({...e,get:(t,n,r)=>tf(t,n)||e.get(t,n,r),has:(t,n)=>!!tf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const eu="@firebase/app",nf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new md("@firebase/app"),Tb="@firebase/app-compat",Ib="@firebase/analytics-compat",Pb="@firebase/analytics",Rb="@firebase/app-check-compat",Ab="@firebase/app-check",Db="@firebase/auth",Ob="@firebase/auth-compat",Lb="@firebase/database",zb="@firebase/data-connect",Mb="@firebase/database-compat",Ub="@firebase/functions",Fb="@firebase/functions-compat",$b="@firebase/installations",Bb="@firebase/installations-compat",Vb="@firebase/messaging",Hb="@firebase/messaging-compat",Wb="@firebase/performance",qb="@firebase/performance-compat",Kb="@firebase/remote-config",Gb="@firebase/remote-config-compat",Xb="@firebase/storage",Yb="@firebase/storage-compat",Jb="@firebase/firestore",Qb="@firebase/vertexai-preview",Zb="@firebase/firestore-compat",ew="firebase",tw="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="[DEFAULT]",nw={[eu]:"fire-core",[Tb]:"fire-core-compat",[Pb]:"fire-analytics",[Ib]:"fire-analytics-compat",[Ab]:"fire-app-check",[Rb]:"fire-app-check-compat",[Db]:"fire-auth",[Ob]:"fire-auth-compat",[Lb]:"fire-rtdb",[zb]:"fire-data-connect",[Mb]:"fire-rtdb-compat",[Ub]:"fire-fn",[Fb]:"fire-fn-compat",[$b]:"fire-iid",[Bb]:"fire-iid-compat",[Vb]:"fire-fcm",[Hb]:"fire-fcm-compat",[Wb]:"fire-perf",[qb]:"fire-perf-compat",[Kb]:"fire-rc",[Gb]:"fire-rc-compat",[Xb]:"fire-gcs",[Yb]:"fire-gcs-compat",[Jb]:"fire-fst",[Zb]:"fire-fst-compat",[Qb]:"fire-vertex","fire-js":"fire-js",[ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,rw=new Map,nu=new Map;function rf(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function dr(e){const t=e.name;if(nu.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;nu.set(t,e);for(const n of la.values())rf(n,e);for(const n of rw.values())rf(n,e);return!0}function Ua(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Cs("app","Firebase",iw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=tw;function kx(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=yx()),!n)throw Un.create("no-options");const o=la.get(i);if(o){if(aa(n,o.options)&&aa(r,o.config))return o;throw Un.create("duplicate-app",{appName:i})}const l=new db(i);for(const u of nu.values())l.addComponent(u);const c=new sw(n,r,l);return la.set(i,c),c}function vd(e=tu){const t=la.get(e);if(!t&&e===tu&&yx())return kx();if(!t)throw Un.create("no-app",{appName:e});return t}function It(e,t,n){var r;let i=(r=nw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}dr(new Bn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",aw=1,vs="firebase-heartbeat-store";let Xl=null;function Ex(){return Xl||(Xl=kb(ow,aw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(vs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Un.create("idb-open",{originalErrorMessage:e.message})})),Xl}async function lw(e){try{const n=(await Ex()).transaction(vs),r=await n.objectStore(vs).get(Sx(e));return await n.done,r}catch(t){if(t instanceof Ot)on.warn(t.message);else{const n=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function sf(e,t){try{const r=(await Ex()).transaction(vs,"readwrite");await r.objectStore(vs).put(t,Sx(e)),await r.done}catch(n){if(n instanceof Ot)on.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function Sx(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=1024,uw=30*24*60*60*1e3;class dw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=of();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=uw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=of(),{heartbeatsToSend:r,unsentEntries:i}=hw(this._heartbeatsCache.heartbeats),o=oa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return on.warn(n),""}}}function of(){return new Date().toISOString().substring(0,10)}function hw(e,t=cw){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),af(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),af(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z2()?eb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function af(e){return oa(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(e){dr(new Bn("platform-logger",t=>new Nb(t),"PRIVATE")),dr(new Bn("heartbeat",t=>new dw(t),"PRIVATE")),It(eu,nf,e),It(eu,nf,"esm2017"),It("fire-js","")}fw("");function yd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Nx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gw=Nx,Cx=new Cs("auth","Firebase",Nx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new md("@firebase/auth");function mw(e,...t){ca.logLevel<=Y.WARN&&ca.warn(`Auth (${vr}): ${e}`,...t)}function Po(e,...t){ca.logLevel<=Y.ERROR&&ca.error(`Auth (${vr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,...t){throw bd(e,...t)}function Pt(e,...t){return bd(e,...t)}function Tx(e,t,n){const r=Object.assign(Object.assign({},gw()),{[t]:n});return new Cs("auth","Firebase",r).create(t,{appName:e.name})}function Zt(e){return Tx(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Cx.create(e,...t)}function V(e,t,...n){if(!e)throw bd(t,...n)}function Xt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Po(t),new Error(t)}function an(e,t){e||Xt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function xw(){return lf()==="http:"||lf()==="https:"}function lf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xw()||Y2()||"connection"in navigator)?navigator.onLine:!0}function yw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,n){this.shortDelay=t,this.longDelay=n,an(n>t,"Short delay should be less than long delay!"),this.isMobile=G2()||J2()}get(){return vw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(e,t){an(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Is(3e4,6e4);function dn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,n,r,i={}){return Px(e,i,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const c=Ts(Object.assign({key:e.config.apiKey},l)).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:u},o);return X2()||(h.referrerPolicy="no-referrer"),Ix.fetch()(Rx(e,e.config.apiHost,n,c),h)})}async function Px(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},bw),t);try{const i=new jw(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw go(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(e,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw go(e,"email-already-in-use",l);if(u==="USER_DISABLED")throw go(e,"user-disabled",l);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tx(e,g,h);wt(e,g)}}catch(i){if(i instanceof Ot)throw i;wt(e,"network-request-failed",{message:String(i)})}}async function Ps(e,t,n,r,i={}){const o=await Lt(e,t,n,r,i);return"mfaPendingCredential"in o&&wt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Rx(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?wd(e.config,i):`${e.config.apiScheme}://${i}`}function _w(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"network-request-failed")),ww.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pt(e,t,r);return i.customData._tokenResponse=n,i}function cf(e){return e!==void 0&&e.enterprise!==void 0}class kw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return _w(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Ew(e,t){return Lt(e,"GET","/v2/recaptchaConfig",dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}async function Ax(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Nw(e,t=!1){const n=jt(e),r=await n.getIdToken(t),i=_d(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Yi(Yl(i.auth_time)),issuedAtTime:Yi(Yl(i.iat)),expirationTime:Yi(Yl(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Yl(e){return Number(e)*1e3}function _d(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const i=mx(n);return i?JSON.parse(i):(Po("Failed to decode base64 JWT payload"),null)}catch(i){return Po("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uf(e){const t=_d(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&Cw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Cw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ei(e,Ax(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Dx(o.providerUserInfo):[],c=Pw(e.providerData,l),u=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),g=u?h:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new iu(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(e,m)}async function Iw(e){const t=jt(e);await ua(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Pw(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Dx(e){return e.map(t=>{var{providerId:n}=t,r=yd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(e,t){const n=await Px(e,{},async()=>{const r=Ts({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,l=Rx(e,i,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ix.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Aw(e,t){return Lt(e,"POST","/v2/accounts:revokeToken",dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):uf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=uf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Rw(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Hr;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Yt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=yd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new iu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ei(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Nw(this,t)}reload(){return Iw(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Yt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Zt(this.auth));const t=await this.getIdToken();return await ei(this,Sw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,l,c,u,h,g;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(l=n.photoURL)!==null&&l!==void 0?l:void 0,T=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(h=n.createdAt)!==null&&h!==void 0?h:void 0,f=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:x,emailVerified:C,isAnonymous:A,providerData:z,stsTokenManager:j}=n;V(x&&j,t,"internal-error");const b=Hr.fromJSON(this.name,j);V(typeof x=="string",t,"internal-error"),mn(m,t.name),mn(w,t.name),V(typeof C=="boolean",t,"internal-error"),V(typeof A=="boolean",t,"internal-error"),mn(E,t.name),mn(_,t.name),mn(T,t.name),mn(D,t.name),mn(y,t.name),mn(f,t.name);const k=new Yt({uid:x,auth:t,email:w,emailVerified:C,displayName:m,isAnonymous:A,photoURL:_,phoneNumber:E,tenantId:T,stsTokenManager:b,createdAt:y,lastLoginAt:f});return z&&Array.isArray(z)&&(k.providerData=z.map(N=>Object.assign({},N))),D&&(k._redirectEventId=D),k}static async _fromIdTokenResponse(t,n,r=!1){const i=new Hr;i.updateFromServerResponse(n);const o=new Yt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ua(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Dx(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Hr;c.updateFromIdToken(r);const u=new Yt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new iu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Map;function Jt(e){an(e instanceof Function,"Expected a class definition");let t=df.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,df.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ox.type="NONE";const hf=Ox;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e,t,n){return`firebase:${e}:${t}:${n}`}class Wr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ro(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ro("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Wr(Jt(hf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=i[0]||Jt(hf);const l=Ro(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const g=await h._get(l);if(g){const m=Yt._fromJSON(t,g);h!==o&&(c=m),o=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Wr(o,t,r):(o=u[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(l)}catch{}})),new Wr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ux(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lx(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($x(t))return"Blackberry";if(Bx(t))return"Webos";if(zx(t))return"Safari";if((t.includes("chrome/")||Mx(t))&&!t.includes("edge/"))return"Chrome";if(Fx(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lx(e=$e()){return/firefox\//i.test(e)}function zx(e=$e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mx(e=$e()){return/crios\//i.test(e)}function Ux(e=$e()){return/iemobile/i.test(e)}function Fx(e=$e()){return/android/i.test(e)}function $x(e=$e()){return/blackberry/i.test(e)}function Bx(e=$e()){return/webos/i.test(e)}function jd(e=$e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Dw(e=$e()){var t;return jd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Ow(){return Q2()&&document.documentMode===10}function Vx(e=$e()){return jd(e)||Fx(e)||Bx(e)||$x(e)||/windows phone/i.test(e)||Ux(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(e,t=[]){let n;switch(e){case"Browser":n=pf($e());break;case"Worker":n=`${pf($e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,c)=>{try{const u=t(o);l(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(e,t={}){return Lt(e,"GET","/v2/passwordPolicy",dn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=6;class Uw{constructor(t){var n,r,i,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Mw,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ff(this),this.idTokenSubscription=new ff(this),this.beforeStateQueue=new Lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ax(this,{idToken:t}),r=await Yt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Nt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!l||l===c)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ua(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nt(this.app))return Promise.reject(Zt(this));const n=t?jt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await zw(this),n=new Uw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Cs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Aw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Jt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{l=!0,u()}}else{const u=t.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Hx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&mw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kn(e){return jt(e)}class ff{constructor(t){this.auth=t,this.observer=null,this.addObserver=sb(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $w(e){Fa=e}function Wx(e){return Fa.loadJS(e)}function Bw(){return Fa.recaptchaEnterpriseScript}function Vw(){return Fa.gapiScript}function Hw(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Ww="recaptcha-enterprise",qw="NO_RECAPTCHA";class Kw{constructor(t){this.type=Ww,this.auth=Kn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{Ew(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new kw(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,l(h.siteKey)}}).catch(u=>{c(u)})})}function i(o,l,c){const u=window.grecaptcha;cf(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:t}).then(h=>{l(h)}).catch(()=>{l(qw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(c=>{if(!n&&cf(window.grecaptcha))i(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Bw();u.length!==0&&(u+=c),Wx(u).then(()=>{i(c,o,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function gf(e,t,n,r=!1){const i=new Kw(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function da(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await gf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await gf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(e,t){const n=Ua(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(aa(o,t??{}))return i;wt(i,"already-initialized")}return n.initialize({options:t})}function Xw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Yw(e,t,n){const r=Kn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=qx(t),{host:l,port:c}=Jw(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Qw()}function qx(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Jw(e){const t=qx(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:mf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:mf(l)}}}function mf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Qw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(t){return Xt("not implemented")}_linkToIdToken(t,n){return Xt("not implemented")}_getReauthenticationResolver(t){return Xt("not implemented")}}async function Zw(e,t){return Lt(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(e,t){return Ps(e,"POST","/v1/accounts:signInWithPassword",dn(e,t))}async function t_(e,t){return Lt(e,"POST","/v1/accounts:sendOobCode",dn(e,t))}async function n_(e,t){return t_(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(e,t){return Ps(e,"POST","/v1/accounts:signInWithEmailLink",dn(e,t))}async function i_(e,t){return Ps(e,"POST","/v1/accounts:signInWithEmailLink",dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends kd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ys(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ys(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(t,n,"signInWithPassword",e_);case"emailLink":return r_(t,{email:this._email,oobCode:this._password});default:wt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return da(t,r,"signUpPassword",Zw);case"emailLink":return i_(t,{idToken:n,email:this._email,oobCode:this._password});default:wt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e,t){return Ps(e,"POST","/v1/accounts:signInWithIdp",dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="http://localhost";class hr extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new hr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new hr(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return qr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,qr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,qr(t,n)}buildRequest(){const t={requestUri:s_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ts(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a_(e){const t=Ui(Fi(e)).link,n=t?Ui(Fi(t)).deep_link_id:null,r=Ui(Fi(e)).deep_link_id;return(r?Ui(Fi(r)).link:null)||r||n||t||e}class Ed{constructor(t){var n,r,i,o,l,c;const u=Ui(Fi(t)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,m=o_((i=u.mode)!==null&&i!==void 0?i:null);V(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=a_(t);try{return new Ed(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(t,n){return ys._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Ed.parseLink(n);return V(r,"argument-error"),ys._fromEmailAndCode(t,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Kx{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Rs{constructor(){super("facebook.com")}static credential(t){return hr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return hr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Rs{constructor(){super("github.com")}static credential(t){return hr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jn.credential(t.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Rs{constructor(){super("twitter.com")}static credential(t,n){return hr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e,t){return Ps(e,"POST","/v1/accounts:signUp",dn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Yt._fromIdTokenResponse(t,r,i),l=xf(r);return new pr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=xf(r);return new pr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function xf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Ot{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ha(t,n,r,i)}}function Gx(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(e,o,t,r):o})}async function c_(e,t,n=!1){const r=await ei(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return pr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u_(e,t,n=!1){const{auth:r}=e;if(Nt(r.app))return Promise.reject(Zt(r));const i="reauthenticate";try{const o=await ei(e,Gx(r,i,t,e),n);V(o.idToken,r,"internal-error");const l=_d(o.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),pr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(e,t,n=!1){if(Nt(e.app))return Promise.reject(Zt(e));const r="signIn",i=await Gx(e,r,t),o=await pr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function d_(e,t){return Xx(Kn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yx(e){const t=Kn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function h_(e,t,n){const r=Kn(e);await da(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n_)}async function p_(e,t,n){if(Nt(e.app))return Promise.reject(Zt(e));const r=Kn(e),l=await da(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yx(e),u}),c=await pr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function f_(e,t,n){return Nt(e.app)?Promise.reject(Zt(e)):d_(jt(e),di.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yx(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(e,t){return Lt(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=jt(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await ei(r,g_(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function x_(e,t,n,r){return jt(e).onIdTokenChanged(t,n,r)}function v_(e,t,n){return jt(e).beforeAuthStateChanged(t,n)}function y_(e,t,n,r){return jt(e).onAuthStateChanged(t,n,r)}function b_(e){return jt(e).signOut()}const pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=1e3,__=10;class Qx extends Jx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vx(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);Ow()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,__):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},w_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Qx.type="LOCAL";const j_=Qx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx extends Jx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zx.type="SESSION";const ev=Zx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new $a(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,o)),u=await k_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((c,u)=>{const h=Sd("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(g),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function S_(e){Rt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function N_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function T_(){return tv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv="firebaseLocalStorageDb",I_=1,fa="firebaseLocalStorage",rv="fbase_key";class As{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ba(e,t){return e.transaction([fa],t?"readwrite":"readonly").objectStore(fa)}function P_(){const e=indexedDB.deleteDatabase(nv);return new As(e).toPromise()}function su(){const e=indexedDB.open(nv,I_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(fa,{keyPath:rv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(fa)?t(r):(r.close(),await P_(),t(await su()))})})}async function vf(e,t,n){const r=Ba(e,!0).put({[rv]:t,value:n});return new As(r).toPromise()}async function R_(e,t){const n=Ba(e,!1).get(t),r=await new As(n).toPromise();return r===void 0?null:r.value}function yf(e,t){const n=Ba(e,!0).delete(t);return new As(n).toPromise()}const A_=800,D_=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await su(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>D_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$a._getInstance(T_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await N_(),!this.activeServiceWorker)return;this.sender=new E_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||C_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await su();return await vf(t,pa,"1"),await yf(t,pa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>R_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>yf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ba(i,!1).getAll();return new As(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const O_=iv;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e,t){return t?Jt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends kd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return qr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return qr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function z_(e){return Xx(e.auth,new Nd(e),e.bypassAuthState)}function M_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),u_(n,new Nd(e),e.bypassAuthState)}async function U_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),c_(n,new Nd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:c}=t;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return z_;case"linkViaPopup":case"linkViaRedirect":return U_;case"reauthViaPopup":case"reauthViaRedirect":return M_;default:wt(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Is(2e3,1e4);class zr extends sv{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const t=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,F_.get())};t()}}zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="pendingRedirect",Ao=new Map;class B_ extends sv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ao.get(this.auth._key());if(!t){try{const r=await V_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ao.set(this.auth._key(),t)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V_(e,t){const n=q_(t),r=W_(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function H_(e,t){Ao.set(e._key(),t)}function W_(e){return Jt(e._redirectPersistence)}function q_(e){return Ro($_,e.config.apiKey,e.name)}async function K_(e,t,n=!1){if(Nt(e.app))return Promise.reject(Zt(e));const r=Kn(e),i=L_(r,t),l=await new B_(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=10*60*1e3;class X_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Y_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ov(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=G_&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(t))}saveEventToCache(t){this.cachedEventUids.add(bf(t)),this.lastProcessedEventTime=Date.now()}}function bf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ov({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Y_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ov(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(e,t={}){return Lt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z_=/^https?/;async function ej(e){if(e.config.emulator)return;const{authorizedDomains:t}=await J_(e);for(const n of t)try{if(tj(n))return}catch{}wt(e,"unauthorized-domain")}function tj(e){const t=ru(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Z_.test(n))return!1;if(Q_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=new Is(3e4,6e4);function wf(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function rj(e){return new Promise((t,n)=>{var r,i,o;function l(){wf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wf(),n(Pt(e,"network-request-failed"))},timeout:nj.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Rt().gapi)===null||o===void 0)&&o.load)l();else{const c=Hw("iframefcb");return Rt()[c]=()=>{gapi.load?l():n(Pt(e,"network-request-failed"))},Wx(`${Vw()}?onload=${c}`).catch(u=>n(u))}}).catch(t=>{throw Do=null,t})}let Do=null;function ij(e){return Do=Do||rj(e),Do}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sj=new Is(5e3,15e3),oj="__/auth/iframe",aj="emulator/auth/iframe",lj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uj(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wd(t,aj):`https://${e.config.authDomain}/${oj}`,r={apiKey:t.apiKey,appName:e.name,v:vr},i=cj.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ts(r).slice(1)}`}async function dj(e){const t=await ij(e),n=Rt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:uj(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lj,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Pt(e,"network-request-failed"),c=Rt().setTimeout(()=>{o(l)},sj.get());function u(){Rt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pj=500,fj=600,gj="_blank",mj="http://localhost";class _f{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xj(e,t,n,r=pj,i=fj){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},hj),{width:r.toString(),height:i.toString(),top:o,left:l}),h=$e().toLowerCase();n&&(c=Mx(h)?gj:n),Lx(h)&&(t=t||mj,u.scrollbars="yes");const g=Object.entries(u).reduce((w,[E,_])=>`${w}${E}=${_},`,"");if(Dw(h)&&c!=="_self")return vj(t||"",c),new _f(null);const m=window.open(t||"",c,g);V(m,e,"popup-blocked");try{m.focus()}catch{}return new _f(m)}function vj(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj="__/auth/handler",bj="emulator/auth/handler",wj=encodeURIComponent("fac");async function jf(e,t,n,r,i,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vr,eventId:i};if(t instanceof Kx){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",ib(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))l[g]=m}if(t instanceof Rs){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(l.scopes=g.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await e._getAppCheckToken(),h=u?`#${wj}=${encodeURIComponent(u)}`:"";return`${_j(e)}?${Ts(c).slice(1)}${h}`}function _j({config:e}){return e.emulator?wd(e,bj):`https://${e.authDomain}/${yj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class jj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ev,this._completeRedirectFn=K_,this._overrideRedirectResult=H_}async _openPopup(t,n,r,i){var o;an((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await jf(t,n,r,ru(),i);return xj(t,l,Sd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await jf(t,n,r,ru(),i);return S_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(an(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await dj(t),r=new X_(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Jl,{type:Jl},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Jl];l!==void 0&&n(!!l),wt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ej(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vx()||zx()||jd()}}const kj=jj;var kf="@firebase/auth",Ef="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ej{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sj(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nj(e){dr(new Bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hx(e)},h=new Fw(r,i,o,u);return Xw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),dr(new Bn("auth-internal",t=>{const n=Kn(t.getProvider("auth").getImmediate());return(r=>new Ej(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(kf,Ef,Sj(e)),It(kf,Ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj=5*60,Tj=bx("authIdTokenMaxAge")||Cj;let Sf=null;const Ij=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tj)return;const i=n==null?void 0:n.token;Sf!==i&&(Sf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pj(e=vd()){const t=Ua(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Gw(e,{popupRedirectResolver:kj,persistence:[O_,j_,ev]}),r=bx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=Ij(o.toString());v_(n,l,()=>l(n.currentUser)),x_(n,c=>l(c))}}const i=xx("auth");return i&&Yw(n,`http://${i}`),n}function Rj(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}$w({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Pt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Rj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nj("Browser");var Aj="firebase",Dj="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(Aj,Dj,"app");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var av;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(j,b){function k(){}k.prototype=b.prototype,j.D=b.prototype,j.prototype=new k,j.prototype.constructor=j,j.C=function(N,R,I){for(var S=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)S[xe-2]=arguments[xe];return b.prototype[R].apply(N,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(j,b,k){k||(k=0);var N=Array(16);if(typeof b=="string")for(var R=0;16>R;++R)N[R]=b.charCodeAt(k++)|b.charCodeAt(k++)<<8|b.charCodeAt(k++)<<16|b.charCodeAt(k++)<<24;else for(R=0;16>R;++R)N[R]=b[k++]|b[k++]<<8|b[k++]<<16|b[k++]<<24;b=j.g[0],k=j.g[1],R=j.g[2];var I=j.g[3],S=b+(I^k&(R^I))+N[0]+3614090360&4294967295;b=k+(S<<7&4294967295|S>>>25),S=I+(R^b&(k^R))+N[1]+3905402710&4294967295,I=b+(S<<12&4294967295|S>>>20),S=R+(k^I&(b^k))+N[2]+606105819&4294967295,R=I+(S<<17&4294967295|S>>>15),S=k+(b^R&(I^b))+N[3]+3250441966&4294967295,k=R+(S<<22&4294967295|S>>>10),S=b+(I^k&(R^I))+N[4]+4118548399&4294967295,b=k+(S<<7&4294967295|S>>>25),S=I+(R^b&(k^R))+N[5]+1200080426&4294967295,I=b+(S<<12&4294967295|S>>>20),S=R+(k^I&(b^k))+N[6]+2821735955&4294967295,R=I+(S<<17&4294967295|S>>>15),S=k+(b^R&(I^b))+N[7]+4249261313&4294967295,k=R+(S<<22&4294967295|S>>>10),S=b+(I^k&(R^I))+N[8]+1770035416&4294967295,b=k+(S<<7&4294967295|S>>>25),S=I+(R^b&(k^R))+N[9]+2336552879&4294967295,I=b+(S<<12&4294967295|S>>>20),S=R+(k^I&(b^k))+N[10]+4294925233&4294967295,R=I+(S<<17&4294967295|S>>>15),S=k+(b^R&(I^b))+N[11]+2304563134&4294967295,k=R+(S<<22&4294967295|S>>>10),S=b+(I^k&(R^I))+N[12]+1804603682&4294967295,b=k+(S<<7&4294967295|S>>>25),S=I+(R^b&(k^R))+N[13]+4254626195&4294967295,I=b+(S<<12&4294967295|S>>>20),S=R+(k^I&(b^k))+N[14]+2792965006&4294967295,R=I+(S<<17&4294967295|S>>>15),S=k+(b^R&(I^b))+N[15]+1236535329&4294967295,k=R+(S<<22&4294967295|S>>>10),S=b+(R^I&(k^R))+N[1]+4129170786&4294967295,b=k+(S<<5&4294967295|S>>>27),S=I+(k^R&(b^k))+N[6]+3225465664&4294967295,I=b+(S<<9&4294967295|S>>>23),S=R+(b^k&(I^b))+N[11]+643717713&4294967295,R=I+(S<<14&4294967295|S>>>18),S=k+(I^b&(R^I))+N[0]+3921069994&4294967295,k=R+(S<<20&4294967295|S>>>12),S=b+(R^I&(k^R))+N[5]+3593408605&4294967295,b=k+(S<<5&4294967295|S>>>27),S=I+(k^R&(b^k))+N[10]+38016083&4294967295,I=b+(S<<9&4294967295|S>>>23),S=R+(b^k&(I^b))+N[15]+3634488961&4294967295,R=I+(S<<14&4294967295|S>>>18),S=k+(I^b&(R^I))+N[4]+3889429448&4294967295,k=R+(S<<20&4294967295|S>>>12),S=b+(R^I&(k^R))+N[9]+568446438&4294967295,b=k+(S<<5&4294967295|S>>>27),S=I+(k^R&(b^k))+N[14]+3275163606&4294967295,I=b+(S<<9&4294967295|S>>>23),S=R+(b^k&(I^b))+N[3]+4107603335&4294967295,R=I+(S<<14&4294967295|S>>>18),S=k+(I^b&(R^I))+N[8]+1163531501&4294967295,k=R+(S<<20&4294967295|S>>>12),S=b+(R^I&(k^R))+N[13]+2850285829&4294967295,b=k+(S<<5&4294967295|S>>>27),S=I+(k^R&(b^k))+N[2]+4243563512&4294967295,I=b+(S<<9&4294967295|S>>>23),S=R+(b^k&(I^b))+N[7]+1735328473&4294967295,R=I+(S<<14&4294967295|S>>>18),S=k+(I^b&(R^I))+N[12]+2368359562&4294967295,k=R+(S<<20&4294967295|S>>>12),S=b+(k^R^I)+N[5]+4294588738&4294967295,b=k+(S<<4&4294967295|S>>>28),S=I+(b^k^R)+N[8]+2272392833&4294967295,I=b+(S<<11&4294967295|S>>>21),S=R+(I^b^k)+N[11]+1839030562&4294967295,R=I+(S<<16&4294967295|S>>>16),S=k+(R^I^b)+N[14]+4259657740&4294967295,k=R+(S<<23&4294967295|S>>>9),S=b+(k^R^I)+N[1]+2763975236&4294967295,b=k+(S<<4&4294967295|S>>>28),S=I+(b^k^R)+N[4]+1272893353&4294967295,I=b+(S<<11&4294967295|S>>>21),S=R+(I^b^k)+N[7]+4139469664&4294967295,R=I+(S<<16&4294967295|S>>>16),S=k+(R^I^b)+N[10]+3200236656&4294967295,k=R+(S<<23&4294967295|S>>>9),S=b+(k^R^I)+N[13]+681279174&4294967295,b=k+(S<<4&4294967295|S>>>28),S=I+(b^k^R)+N[0]+3936430074&4294967295,I=b+(S<<11&4294967295|S>>>21),S=R+(I^b^k)+N[3]+3572445317&4294967295,R=I+(S<<16&4294967295|S>>>16),S=k+(R^I^b)+N[6]+76029189&4294967295,k=R+(S<<23&4294967295|S>>>9),S=b+(k^R^I)+N[9]+3654602809&4294967295,b=k+(S<<4&4294967295|S>>>28),S=I+(b^k^R)+N[12]+3873151461&4294967295,I=b+(S<<11&4294967295|S>>>21),S=R+(I^b^k)+N[15]+530742520&4294967295,R=I+(S<<16&4294967295|S>>>16),S=k+(R^I^b)+N[2]+3299628645&4294967295,k=R+(S<<23&4294967295|S>>>9),S=b+(R^(k|~I))+N[0]+4096336452&4294967295,b=k+(S<<6&4294967295|S>>>26),S=I+(k^(b|~R))+N[7]+1126891415&4294967295,I=b+(S<<10&4294967295|S>>>22),S=R+(b^(I|~k))+N[14]+2878612391&4294967295,R=I+(S<<15&4294967295|S>>>17),S=k+(I^(R|~b))+N[5]+4237533241&4294967295,k=R+(S<<21&4294967295|S>>>11),S=b+(R^(k|~I))+N[12]+1700485571&4294967295,b=k+(S<<6&4294967295|S>>>26),S=I+(k^(b|~R))+N[3]+2399980690&4294967295,I=b+(S<<10&4294967295|S>>>22),S=R+(b^(I|~k))+N[10]+4293915773&4294967295,R=I+(S<<15&4294967295|S>>>17),S=k+(I^(R|~b))+N[1]+2240044497&4294967295,k=R+(S<<21&4294967295|S>>>11),S=b+(R^(k|~I))+N[8]+1873313359&4294967295,b=k+(S<<6&4294967295|S>>>26),S=I+(k^(b|~R))+N[15]+4264355552&4294967295,I=b+(S<<10&4294967295|S>>>22),S=R+(b^(I|~k))+N[6]+2734768916&4294967295,R=I+(S<<15&4294967295|S>>>17),S=k+(I^(R|~b))+N[13]+1309151649&4294967295,k=R+(S<<21&4294967295|S>>>11),S=b+(R^(k|~I))+N[4]+4149444226&4294967295,b=k+(S<<6&4294967295|S>>>26),S=I+(k^(b|~R))+N[11]+3174756917&4294967295,I=b+(S<<10&4294967295|S>>>22),S=R+(b^(I|~k))+N[2]+718787259&4294967295,R=I+(S<<15&4294967295|S>>>17),S=k+(I^(R|~b))+N[9]+3951481745&4294967295,j.g[0]=j.g[0]+b&4294967295,j.g[1]=j.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,j.g[2]=j.g[2]+R&4294967295,j.g[3]=j.g[3]+I&4294967295}r.prototype.u=function(j,b){b===void 0&&(b=j.length);for(var k=b-this.blockSize,N=this.B,R=this.h,I=0;I<b;){if(R==0)for(;I<=k;)i(this,j,I),I+=this.blockSize;if(typeof j=="string"){for(;I<b;)if(N[R++]=j.charCodeAt(I++),R==this.blockSize){i(this,N),R=0;break}}else for(;I<b;)if(N[R++]=j[I++],R==this.blockSize){i(this,N),R=0;break}}this.h=R,this.o+=b},r.prototype.v=function(){var j=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);j[0]=128;for(var b=1;b<j.length-8;++b)j[b]=0;var k=8*this.o;for(b=j.length-8;b<j.length;++b)j[b]=k&255,k/=256;for(this.u(j),j=Array(16),b=k=0;4>b;++b)for(var N=0;32>N;N+=8)j[k++]=this.g[b]>>>N&255;return j};function o(j,b){var k=c;return Object.prototype.hasOwnProperty.call(k,j)?k[j]:k[j]=b(j)}function l(j,b){this.h=b;for(var k=[],N=!0,R=j.length-1;0<=R;R--){var I=j[R]|0;N&&I==b||(k[R]=I,N=!1)}this.g=k}var c={};function u(j){return-128<=j&&128>j?o(j,function(b){return new l([b|0],0>b?-1:0)}):new l([j|0],0>j?-1:0)}function h(j){if(isNaN(j)||!isFinite(j))return m;if(0>j)return D(h(-j));for(var b=[],k=1,N=0;j>=k;N++)b[N]=j/k|0,k*=4294967296;return new l(b,0)}function g(j,b){if(j.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(j.charAt(0)=="-")return D(g(j.substring(1),b));if(0<=j.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=h(Math.pow(b,8)),N=m,R=0;R<j.length;R+=8){var I=Math.min(8,j.length-R),S=parseInt(j.substring(R,R+I),b);8>I?(I=h(Math.pow(b,I)),N=N.j(I).add(h(S))):(N=N.j(k),N=N.add(h(S)))}return N}var m=u(0),w=u(1),E=u(16777216);e=l.prototype,e.m=function(){if(T(this))return-D(this).m();for(var j=0,b=1,k=0;k<this.g.length;k++){var N=this.i(k);j+=(0<=N?N:4294967296+N)*b,b*=4294967296}return j},e.toString=function(j){if(j=j||10,2>j||36<j)throw Error("radix out of range: "+j);if(_(this))return"0";if(T(this))return"-"+D(this).toString(j);for(var b=h(Math.pow(j,6)),k=this,N="";;){var R=C(k,b).g;k=y(k,R.j(b));var I=((0<k.g.length?k.g[0]:k.h)>>>0).toString(j);if(k=R,_(k))return I+N;for(;6>I.length;)I="0"+I;N=I+N}},e.i=function(j){return 0>j?0:j<this.g.length?this.g[j]:this.h};function _(j){if(j.h!=0)return!1;for(var b=0;b<j.g.length;b++)if(j.g[b]!=0)return!1;return!0}function T(j){return j.h==-1}e.l=function(j){return j=y(this,j),T(j)?-1:_(j)?0:1};function D(j){for(var b=j.g.length,k=[],N=0;N<b;N++)k[N]=~j.g[N];return new l(k,~j.h).add(w)}e.abs=function(){return T(this)?D(this):this},e.add=function(j){for(var b=Math.max(this.g.length,j.g.length),k=[],N=0,R=0;R<=b;R++){var I=N+(this.i(R)&65535)+(j.i(R)&65535),S=(I>>>16)+(this.i(R)>>>16)+(j.i(R)>>>16);N=S>>>16,I&=65535,S&=65535,k[R]=S<<16|I}return new l(k,k[k.length-1]&-2147483648?-1:0)};function y(j,b){return j.add(D(b))}e.j=function(j){if(_(this)||_(j))return m;if(T(this))return T(j)?D(this).j(D(j)):D(D(this).j(j));if(T(j))return D(this.j(D(j)));if(0>this.l(E)&&0>j.l(E))return h(this.m()*j.m());for(var b=this.g.length+j.g.length,k=[],N=0;N<2*b;N++)k[N]=0;for(N=0;N<this.g.length;N++)for(var R=0;R<j.g.length;R++){var I=this.i(N)>>>16,S=this.i(N)&65535,xe=j.i(R)>>>16,Gn=j.i(R)&65535;k[2*N+2*R]+=S*Gn,f(k,2*N+2*R),k[2*N+2*R+1]+=I*Gn,f(k,2*N+2*R+1),k[2*N+2*R+1]+=S*xe,f(k,2*N+2*R+1),k[2*N+2*R+2]+=I*xe,f(k,2*N+2*R+2)}for(N=0;N<b;N++)k[N]=k[2*N+1]<<16|k[2*N];for(N=b;N<2*b;N++)k[N]=0;return new l(k,0)};function f(j,b){for(;(j[b]&65535)!=j[b];)j[b+1]+=j[b]>>>16,j[b]&=65535,b++}function x(j,b){this.g=j,this.h=b}function C(j,b){if(_(b))throw Error("division by zero");if(_(j))return new x(m,m);if(T(j))return b=C(D(j),b),new x(D(b.g),D(b.h));if(T(b))return b=C(j,D(b)),new x(D(b.g),b.h);if(30<j.g.length){if(T(j)||T(b))throw Error("slowDivide_ only works with positive integers.");for(var k=w,N=b;0>=N.l(j);)k=A(k),N=A(N);var R=z(k,1),I=z(N,1);for(N=z(N,2),k=z(k,2);!_(N);){var S=I.add(N);0>=S.l(j)&&(R=R.add(k),I=S),N=z(N,1),k=z(k,1)}return b=y(j,R.j(b)),new x(R,b)}for(R=m;0<=j.l(b);){for(k=Math.max(1,Math.floor(j.m()/b.m())),N=Math.ceil(Math.log(k)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),I=h(k),S=I.j(b);T(S)||0<S.l(j);)k-=N,I=h(k),S=I.j(b);_(I)&&(I=w),R=R.add(I),j=y(j,S)}return new x(R,j)}e.A=function(j){return C(this,j).h},e.and=function(j){for(var b=Math.max(this.g.length,j.g.length),k=[],N=0;N<b;N++)k[N]=this.i(N)&j.i(N);return new l(k,this.h&j.h)},e.or=function(j){for(var b=Math.max(this.g.length,j.g.length),k=[],N=0;N<b;N++)k[N]=this.i(N)|j.i(N);return new l(k,this.h|j.h)},e.xor=function(j){for(var b=Math.max(this.g.length,j.g.length),k=[],N=0;N<b;N++)k[N]=this.i(N)^j.i(N);return new l(k,this.h^j.h)};function A(j){for(var b=j.g.length+1,k=[],N=0;N<b;N++)k[N]=j.i(N)<<1|j.i(N-1)>>>31;return new l(k,j.h)}function z(j,b){var k=b>>5;b%=32;for(var N=j.g.length-k,R=[],I=0;I<N;I++)R[I]=0<b?j.i(I+k)>>>b|j.i(I+k+1)<<32-b:j.i(I+k);return new l(R,j.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,av=l}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof mo=="object"&&mo];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var O=a[v];if(!(O in p))break e;p=p[O]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&t(p,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var p=0,v=!1,O={next:function(){if(!v&&p<a.length){var L=p++;return{value:d(L,a[L]),done:!1}}return v=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function g(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,v),a.apply(d,O)}}return function(){return a.apply(d,arguments)}}function w(a,d,p){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:m,w.apply(null,arguments)}function E(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function _(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,O,L){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return d.prototype[O].apply(v,U)}}function T(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function D(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const O=a.length||0,L=v.length||0;a.length=O+L;for(let U=0;U<L;U++)a[O+U]=v[U]}else a.push(v)}}class y{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function f(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function C(a){return C[" "](a),a}C[" "]=function(){};var A=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function z(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function j(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function b(a){const d={};for(const p in a)d[p]=a[p];return d}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,d){let p,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(p in v)a[p]=v[p];for(let L=0;L<k.length;L++)p=k[L],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function R(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function I(a){c.setTimeout(()=>{throw a},0)}function S(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class xe{constructor(){this.h=this.g=null}add(d,p){const v=Gn.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Gn=new y(()=>new hi,a=>a.reset());class hi{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Mt,F=!1,H=new xe,W=()=>{const a=c.Promise.resolve(void 0);Mt=()=>{a.then(ae)}};var ae=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){I(p)}var d=Gn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ut=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return a}();function Ft(a,d){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(A){e:{try{C(d.nodeName);var O=!0;break e}catch{}O=!1}O||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}_(Ft,he);var $t={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),Sv=0;function Nv(a,d,p,v,O){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=O,this.key=++Sv,this.da=this.fa=!1}function Ls(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function zs(a){this.src=a,this.g={},this.h=0}zs.prototype.add=function(a,d,p,v,O){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var U=Ga(a,d,v,O);return-1<U?(d=a[U],p||(d.fa=!1)):(d=new Nv(d,this.src,L,!!v,O),d.fa=p,a.push(d)),d};function Ka(a,d){var p=d.type;if(p in a.g){var v=a.g[p],O=Array.prototype.indexOf.call(v,d,void 0),L;(L=0<=O)&&Array.prototype.splice.call(v,O,1),L&&(Ls(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ga(a,d,p,v){for(var O=0;O<a.length;++O){var L=a[O];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==v)return O}return-1}var Xa="closure_lm_"+(1e6*Math.random()|0),Ya={};function Od(a,d,p,v,O){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Od(a,d[L],p,v,O);return null}return p=Md(p),a&&a[Bt]?a.K(d,p,h(v)?!!v.capture:!1,O):Cv(a,d,p,!1,v,O)}function Cv(a,d,p,v,O,L){if(!d)throw Error("Invalid event type");var U=h(O)?!!O.capture:!!O,Z=Qa(a);if(Z||(a[Xa]=Z=new zs(a)),p=Z.add(d,p,v,U,L),p.proxy)return p;if(v=Tv(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)Ut||(O=U),O===void 0&&(O=!1),a.addEventListener(d.toString(),v,O);else if(a.attachEvent)a.attachEvent(zd(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Tv(){function a(p){return d.call(a.src,a.listener,p)}const d=Iv;return a}function Ld(a,d,p,v,O){if(Array.isArray(d))for(var L=0;L<d.length;L++)Ld(a,d[L],p,v,O);else v=h(v)?!!v.capture:!!v,p=Md(p),a&&a[Bt]?(a=a.i,d=String(d).toString(),d in a.g&&(L=a.g[d],p=Ga(L,p,v,O),-1<p&&(Ls(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete a.g[d],a.h--)))):a&&(a=Qa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ga(d,p,v,O)),(p=-1<a?d[a]:null)&&Ja(p))}function Ja(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Bt])Ka(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(zd(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Qa(d))?(Ka(p,a),p.h==0&&(p.src=null,d[Xa]=null)):Ls(a)}}}function zd(a){return a in Ya?Ya[a]:Ya[a]="on"+a}function Iv(a,d){if(a.da)a=!0;else{d=new Ft(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&Ja(a),a=p.call(v,d)}return a}function Qa(a){return a=a[Xa],a instanceof zs?a:null}var Za="__closure_events_fn_"+(1e9*Math.random()>>>0);function Md(a){return typeof a=="function"?a:(a[Za]||(a[Za]=function(d){return a.handleEvent(d)}),a[Za])}function Se(){Q.call(this),this.i=new zs(this),this.M=this,this.F=null}_(Se,Q),Se.prototype[Bt]=!0,Se.prototype.removeEventListener=function(a,d,p,v){Ld(this,a,d,p,v)};function Le(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new he(d,a);else if(d instanceof he)d.target=d.target||a;else{var O=d;d=new he(v,a),N(d,O)}if(O=!0,p)for(var L=p.length-1;0<=L;L--){var U=d.g=p[L];O=Ms(U,v,!0,d)&&O}if(U=d.g=a,O=Ms(U,v,!0,d)&&O,O=Ms(U,v,!1,d)&&O,p)for(L=0;L<p.length;L++)U=d.g=p[L],O=Ms(U,v,!1,d)&&O}Se.prototype.N=function(){if(Se.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)Ls(p[v]);delete a.g[d],a.h--}}this.F=null},Se.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Se.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function Ms(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var O=!0,L=0;L<d.length;++L){var U=d[L];if(U&&!U.da&&U.capture==p){var Z=U.listener,_e=U.ha||U.src;U.fa&&Ka(a.i,U),O=Z.call(_e,v)!==!1&&O}}return O&&!v.defaultPrevented}function Ud(a,d,p){if(typeof a=="function")p&&(a=w(a,p));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Fd(a){a.g=Ud(()=>{a.g=null,a.i&&(a.i=!1,Fd(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Pv extends Q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Fd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(a){Q.call(this),this.h=a,this.g={}}_(pi,Q);var $d=[];function Bd(a){z(a.g,function(d,p){this.g.hasOwnProperty(p)&&Ja(d)},a),a.g={}}pi.prototype.N=function(){pi.aa.N.call(this),Bd(this)},pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=c.JSON.stringify,Rv=c.JSON.parse,Av=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function tl(){}tl.prototype.h=null;function Vd(a){return a.h||(a.h=a.i())}function Dv(){}var fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nl(){he.call(this,"d")}_(nl,he);function rl(){he.call(this,"c")}_(rl,he);var yr={},Hd=null;function il(){return Hd=Hd||new Se}yr.La="serverreachability";function Wd(a){he.call(this,yr.La,a)}_(Wd,he);function gi(a){const d=il();Le(d,new Wd(d))}yr.STAT_EVENT="statevent";function qd(a,d){he.call(this,yr.STAT_EVENT,a),this.stat=d}_(qd,he);function ze(a){const d=il();Le(d,new qd(d,a))}yr.Ma="timingevent";function Kd(a,d){he.call(this,yr.Ma,a),this.size=d}_(Kd,he);function mi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function xi(){this.g=!0}xi.prototype.xa=function(){this.g=!1};function Ov(a,d,p,v,O,L){a.info(function(){if(a.g)if(L)for(var U="",Z=L.split("&"),_e=0;_e<Z.length;_e++){var X=Z[_e].split("=");if(1<X.length){var Ne=X[0];X=X[1];var Ce=Ne.split("_");U=2<=Ce.length&&Ce[1]=="type"?U+(Ne+"="+X+"&"):U+(Ne+"=redacted&")}}else U=null;else U=L;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+d+`
`+p+`
`+U})}function Lv(a,d,p,v,O,L,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+d+`
`+p+`
`+L+" "+U})}function br(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Mv(a,p)+(v?" "+v:"")})}function zv(a,d){a.info(function(){return"TIMEOUT: "+d})}xi.prototype.info=function(){};function Mv(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var O=v[1];if(Array.isArray(O)&&!(1>O.length)){var L=O[0];if(L!="noop"&&L!="stop"&&L!="close")for(var U=1;U<O.length;U++)O[U]=""}}}}return el(p)}catch{return d}}var sl={NO_ERROR:0,TIMEOUT:8},Uv={},ol;function Us(){}_(Us,tl),Us.prototype.g=function(){return new XMLHttpRequest},Us.prototype.i=function(){return{}},ol=new Us;function hn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Gd}function Gd(){this.i=null,this.g="",this.h=!1}var Xd={},al={};function ll(a,d,p){a.L=1,a.v=Vs(Vt(d)),a.m=p,a.P=!0,Yd(a,null)}function Yd(a,d){a.F=Date.now(),Fs(a),a.A=Vt(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),uh(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Gd,a.g=Ch(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Pv(w(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var O="readystatechange";Array.isArray(O)||(O&&($d[0]=O.toString()),O=$d);for(var L=0;L<O.length;L++){var U=Od(p,O[L],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),gi(),Ov(a.i,a.u,a.A,a.l,a.R,a.m)}hn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Ht(a)==3?d.j():this.Y(a)},hn.prototype.Y=function(a){try{if(a==this.g)e:{const Ce=Ht(this.g);var d=this.g.Ba();const jr=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||xh(this.g)))){this.J||Ce!=4||d==7||(d==8||0>=jr?gi(3):gi(2)),cl(this);var p=this.g.Z();this.X=p;t:if(Jd(this)){var v=xh(this.g);a="";var O=v.length,L=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),vi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<O;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(L&&d==O-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,Lv(this.i,this.u,this.A,this.l,this.R,Ce,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,_e=this.g;if((Z=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(Z)){var X=Z;break t}}X=null}if(p=X)br(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,p);else{this.o=!1,this.s=3,ze(12),Xn(this),vi(this);break e}}if(this.P){p=!0;let dt;for(;!this.J&&this.C<U.length;)if(dt=Fv(this,U),dt==al){Ce==4&&(this.s=4,ze(14),p=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(dt==Xd){this.s=4,ze(15),br(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else br(this.i,this.l,dt,null),ul(this,dt);if(Jd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||U.length!=0||this.h.h||(this.s=1,ze(16),p=!1),this.o=this.o&&p,!p)br(this.i,this.l,U,"[Invalid Chunked Response]"),Xn(this),vi(this);else if(0<U.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ml(Ne),Ne.M=!0,ze(11))}}else br(this.i,this.l,U,null),ul(this,U);Ce==4&&Xn(this),this.o&&!this.J&&(Ce==4?kh(this.j,this):(this.o=!1,Fs(this)))}else r0(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,ze(12)):(this.s=0,ze(13)),Xn(this),vi(this)}}}catch{}finally{}};function Jd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Fv(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?al:(p=Number(d.substring(p,v)),isNaN(p)?Xd:(v+=1,v+p>d.length?al:(d=d.slice(v,v+p),a.C=v+p,d)))}hn.prototype.cancel=function(){this.J=!0,Xn(this)};function Fs(a){a.S=Date.now()+a.I,Qd(a,a.I)}function Qd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=mi(w(a.ba,a),d)}function cl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zv(this.i,this.A),this.L!=2&&(gi(),ze(17)),Xn(this),this.s=2,vi(this)):Qd(this,this.S-a)};function vi(a){a.j.G==0||a.J||kh(a.j,a)}function Xn(a){cl(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Bd(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ul(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||dl(p.h,a))){if(!a.K&&dl(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Xs(p),Ks(p);else break e;gl(p),ze(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=mi(w(p.Za,p),6e3));if(1>=th(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Jn(p,11)}else if((a.K||p.g==a)&&Xs(p),!f(d))for(O=p.Da.g.parse(d),d=0;d<O.length;d++){let X=O[d];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ne=X[3];Ne!=null&&(p.la=Ne,p.j.info("VER="+p.la));const Ce=X[4];Ce!=null&&(p.Aa=Ce,p.j.info("SVER="+p.Aa));const jr=X[5];jr!=null&&typeof jr=="number"&&0<jr&&(v=1.5*jr,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const dt=a.g;if(dt){const Ys=dt.g?dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ys){var L=v.h;L.g||Ys.indexOf("spdy")==-1&&Ys.indexOf("quic")==-1&&Ys.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(hl(L,L.h),L.h=null))}if(v.D){const xl=dt.g?dt.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(v.ya=xl,ne(v.I,v.D,xl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var U=a;if(v.qa=Nh(v,v.J?v.ia:null,v.W),U.K){nh(v.h,U);var Z=U,_e=v.L;_e&&(Z.I=_e),Z.B&&(cl(Z),Fs(Z)),v.g=U}else _h(v);0<p.i.length&&Gs(p)}else X[0]!="stop"&&X[0]!="close"||Jn(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Jn(p,7):fl(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}gi(4)}catch{}}var $v=class{constructor(a,d){this.g=a,this.map=d}};function Zd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function th(a){return a.h?1:a.g?a.g.size:0}function dl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function hl(a,d){a.g?a.g.add(d):a.h=d}function nh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Zd.prototype.cancel=function(){if(this.i=rh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return T(a.i)}function Bv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function Vv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function ih(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Vv(a),v=Bv(a),O=v.length,L=0;L<O;L++)d.call(void 0,v[L],p&&p[L],a)}var sh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hv(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),O=null;if(0<=v){var L=a[p].substring(0,v);O=a[p].substring(v+1)}else L=a[p];d(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Yn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Yn){this.h=a.h,$s(this,a.j),this.o=a.o,this.g=a.g,Bs(this,a.s),this.l=a.l;var d=a.i,p=new wi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),oh(this,p),this.m=a.m}else a&&(d=String(a).match(sh))?(this.h=!1,$s(this,d[1]||"",!0),this.o=yi(d[2]||""),this.g=yi(d[3]||"",!0),Bs(this,d[4]),this.l=yi(d[5]||"",!0),oh(this,d[6]||"",!0),this.m=yi(d[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Yn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(bi(d,ah,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(bi(d,ah,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(bi(p,p.charAt(0)=="/"?Kv:qv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",bi(p,Xv)),a.join("")};function Vt(a){return new Yn(a)}function $s(a,d,p){a.j=p?yi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Bs(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function oh(a,d,p){d instanceof wi?(a.i=d,Yv(a.i,a.h)):(p||(d=bi(d,Gv)),a.i=new wi(d,a.h))}function ne(a,d,p){a.i.set(d,p)}function Vs(a){return ne(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function yi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bi(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Wv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Wv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ah=/[#\/\?@]/g,qv=/[#\?:]/g,Kv=/[#\?]/g,Gv=/[#\?@]/g,Xv=/#/g;function wi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function pn(a){a.g||(a.g=new Map,a.h=0,a.i&&Hv(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}e=wi.prototype,e.add=function(a,d){pn(this),this.i=null,a=wr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function lh(a,d){pn(a),d=wr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ch(a,d){return pn(a),d=wr(a,d),a.g.has(d)}e.forEach=function(a,d){pn(this),this.g.forEach(function(p,v){p.forEach(function(O){a.call(d,O,v,this)},this)},this)},e.na=function(){pn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const O=a[v];for(let L=0;L<O.length;L++)p.push(d[v])}return p},e.V=function(a){pn(this);let d=[];if(typeof a=="string")ch(this,a)&&(d=d.concat(this.g.get(wr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},e.set=function(a,d){return pn(this),this.i=null,a=wr(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function uh(a,d,p){lh(a,d),0<p.length&&(a.i=null,a.g.set(wr(a,d),T(p)),a.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const L=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var O=L;U[v]!==""&&(O+="="+encodeURIComponent(String(U[v]))),a.push(O)}}return this.i=a.join("&")};function wr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Yv(a,d){d&&!a.j&&(pn(a),a.i=null,a.g.forEach(function(p,v){var O=v.toLowerCase();v!=O&&(lh(this,v),uh(this,O,p))},a)),a.j=d}function Jv(a,d){const p=new xi;if(c.Image){const v=new Image;v.onload=E(fn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=E(fn,p,"TestLoadImage: error",!1,d,v),v.onabort=E(fn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=E(fn,p,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Qv(a,d){const p=new xi,v=new AbortController,O=setTimeout(()=>{v.abort(),fn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(L=>{clearTimeout(O),L.ok?fn(p,"TestPingServer: ok",!0,d):fn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(O),fn(p,"TestPingServer: error",!1,d)})}function fn(a,d,p,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(p)}catch{}}function Zv(){this.g=new Av}function e0(a,d,p){const v=p||"";try{ih(a,function(O,L){let U=O;h(O)&&(U=el(O)),d.push(v+L+"="+encodeURIComponent(U))})}catch(O){throw d.push(v+"type="+encodeURIComponent("_badmap")),O}}function Hs(a){this.l=a.Ub||null,this.j=a.eb||!1}_(Hs,tl),Hs.prototype.g=function(){return new Ws(this.l,this.j)},Hs.prototype.i=function(a){return function(){return a}}({});function Ws(a,d){Se.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Ws,Se),e=Ws.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ji(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?_i(this):ji(this),this.readyState==3&&dh(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,_i(this))},e.Qa=function(a){this.g&&(this.response=a,_i(this))},e.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ji(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hh(a){let d="";return z(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function pl(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=hh(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ne(a,d,p))}function pe(a){Se.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(pe,Se);var t0=/^https?$/i,n0=["POST","PUT"];e=pe.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ol.g(),this.v=this.o?Vd(this.o):Vd(ol),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(L){ph(this,L);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)p.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())p.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(n0,d,void 0))||v||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,U]of p)this.g.setRequestHeader(L,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mh(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){ph(this,L)}};function ph(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,fh(a),qs(a)}function fh(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),qs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qs(this,!0)),pe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?gh(this):this.bb())},e.bb=function(){gh(this)};function gh(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Ht(a)!=4||a.Z()!=2)){if(a.u&&Ht(a)==4)Ud(a.Ea,0,a);else if(Le(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=U===0){var O=String(a.D).match(sh)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),v=!t0.test(O?O.toLowerCase():"")}p=v}if(p)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var L=2<Ht(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",fh(a)}}finally{qs(a)}}}}function qs(a,d){if(a.g){mh(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Le(a,"ready");try{p.onreadystatechange=v}catch{}}}function mh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Rv(d)}};function xh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function r0(a){const d={};a=(a.g&&2<=Ht(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(f(a[v]))continue;var p=R(a[v]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[O]||[];d[O]=L,L.push(p)}j(d,function(v){return v.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function vh(a){this.Aa=0,this.i=[],this.j=new xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Zd(a&&a.concurrentRequestLimit),this.Da=new Zv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=vh.prototype,e.la=8,e.G=1,e.connect=function(a,d,p,v){ze(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Nh(this,null,this.W),Gs(this)};function fl(a){if(yh(a),a.G==3){var d=a.U++,p=Vt(a.I);if(ne(p,"SID",a.K),ne(p,"RID",d),ne(p,"TYPE","terminate"),Ei(a,p),d=new hn(a,a.j,d),d.L=2,d.v=Vs(Vt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Ch(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fs(d)}Sh(a)}function Ks(a){a.g&&(ml(a),a.g.cancel(),a.g=null)}function yh(a){Ks(a),a.u&&(c.clearTimeout(a.u),a.u=null),Xs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Gs(a){if(!eh(a.h)&&!a.s){a.s=!0;var d=a.Ga;Mt||W(),F||(Mt(),F=!0),H.add(d,a),a.B=0}}function i0(a,d){return th(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=mi(w(a.Ga,a,d),Eh(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new hn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=b(L),N(L,this.S)):L=this.S),this.m!==null||this.O||(O.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=wh(this,O,d),p=Vt(this.I),ne(p,"RID",a),ne(p,"CVER",22),this.D&&ne(p,"X-HTTP-Session-Id",this.D),Ei(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(hh(L)))+"&"+d:this.m&&pl(p,this.m,L)),hl(this.h,O),this.Ua&&ne(p,"TYPE","init"),this.P?(ne(p,"$req",d),ne(p,"SID","null"),O.T=!0,ll(O,p,null)):ll(O,p,d),this.G=2}}else this.G==3&&(a?bh(this,a):this.i.length==0||eh(this.h)||bh(this))};function bh(a,d){var p;d?p=d.l:p=a.U++;const v=Vt(a.I);ne(v,"SID",a.K),ne(v,"RID",p),ne(v,"AID",a.T),Ei(a,v),a.m&&a.o&&pl(v,a.m,a.o),p=new hn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=wh(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),hl(a.h,p),ll(p,v,d)}function Ei(a,d){a.H&&z(a.H,function(p,v){ne(d,v,p)}),a.l&&ih({},function(p,v){ne(d,v,p)})}function wh(a,d,p){p=Math.min(a.i.length,p);var v=a.l?w(a.l.Na,a.l,a):null;e:{var O=a.i;let L=-1;for(;;){const U=["count="+p];L==-1?0<p?(L=O[0].g,U.push("ofs="+L)):L=0:U.push("ofs="+L);let Z=!0;for(let _e=0;_e<p;_e++){let X=O[_e].g;const Ne=O[_e].map;if(X-=L,0>X)L=Math.max(0,O[_e].g-100),Z=!1;else try{e0(Ne,U,"req"+X+"_")}catch{v&&v(Ne)}}if(Z){v=U.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function _h(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Mt||W(),F||(Mt(),F=!0),H.add(d,a),a.v=0}}function gl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=mi(w(a.Fa,a),Eh(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,jh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=mi(w(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ze(10),Ks(this),jh(this))};function ml(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function jh(a){a.g=new hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vt(a.qa);ne(d,"RID","rpc"),ne(d,"SID",a.K),ne(d,"AID",a.T),ne(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ne(d,"TO",a.ja),ne(d,"TYPE","xmlhttp"),Ei(a,d),a.m&&a.o&&pl(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Vs(Vt(d)),p.m=null,p.P=!0,Yd(p,a)}e.Za=function(){this.C!=null&&(this.C=null,Ks(this),gl(this),ze(19))};function Xs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function kh(a,d){var p=null;if(a.g==d){Xs(a),ml(a),a.g=null;var v=2}else if(dl(a.h,d))p=d.D,nh(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var O=a.B;v=il(),Le(v,new Kd(v,p)),Gs(a)}else _h(a);else if(O=d.s,O==3||O==0&&0<d.X||!(v==1&&i0(a,d)||v==2&&gl(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),O){case 1:Jn(a,5);break;case 4:Jn(a,10);break;case 3:Jn(a,6);break;default:Jn(a,2)}}}function Eh(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Jn(a,d){if(a.j.info("Error code "+d),d==2){var p=w(a.fb,a),v=a.Xa;const O=!v;v=new Yn(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||$s(v,"https"),Vs(v),O?Jv(v.toString(),p):Qv(v.toString(),p)}else ze(2);a.G=0,a.l&&a.l.sa(d),Sh(a),yh(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function Sh(a){if(a.G=0,a.ka=[],a.l){const d=rh(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.ra()}}function Nh(a,d,p){var v=p instanceof Yn?Vt(p):new Yn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Bs(v,v.s);else{var O=c.location;v=O.protocol,d=d?d+"."+O.hostname:O.hostname,O=+O.port;var L=new Yn(null);v&&$s(L,v),d&&(L.g=d),O&&Bs(L,O),p&&(L.l=p),v=L}return p=a.D,d=a.ya,p&&d&&ne(v,p,d),ne(v,"VER",a.la),Ei(a,v),v}function Ch(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new pe(new Hs({eb:p})):new pe(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}e=Th.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function it(a,d){Se.call(this),this.g=new vh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!f(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!f(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new _r(this)}_(it,Se),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){fl(this.g)},it.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=el(a),a=p);d.i.push(new $v(d.Ya++,a)),d.G==3&&Gs(d)},it.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,it.aa.N.call(this)};function Ih(a){nl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}_(Ih,nl);function Ph(){rl.call(this),this.status=1}_(Ph,rl);function _r(a){this.g=a}_(_r,Th),_r.prototype.ua=function(){Le(this.g,"a")},_r.prototype.ta=function(a){Le(this.g,new Ih(a))},_r.prototype.sa=function(a){Le(this.g,new Ph)},_r.prototype.ra=function(){Le(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,sl.NO_ERROR=0,sl.TIMEOUT=8,sl.HTTP_ERROR=6,Uv.COMPLETE="complete",Dv.EventType=fi,fi.OPEN="a",fi.CLOSE="b",fi.ERROR="c",fi.MESSAGE="d",Se.prototype.listen=Se.prototype.K,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha}).apply(typeof mo<"u"?mo:typeof self<"u"?self:typeof window<"u"?window:{});const Cf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new md("@firebase/firestore");function mt(e,...t){if(ti.logLevel<=Y.DEBUG){const n=t.map(Cd);ti.debug(`Firestore (${Ds}): ${e}`,...n)}}function lv(e,...t){if(ti.logLevel<=Y.ERROR){const n=t.map(Cd);ti.error(`Firestore (${Ds}): ${e}`,...n)}}function Oj(e,...t){if(ti.logLevel<=Y.WARN){const n=t.map(Cd);ti.warn(`Firestore (${Ds}): ${e}`,...n)}}function Cd(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e="Unexpected state"){const t=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+e;throw lv(t),new Error(t)}function Ji(e,t){e||Td()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class qe extends Ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Lj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class zj{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mj{constructor(t){this.t=t,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ji(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Qi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qi,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qi)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ji(typeof r.accessToken=="string"),new cv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ji(t===null||typeof t=="string"),new Ue(t)}}class Uj{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fj{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Uj(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $j{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bj{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Ji(this.o===void 0);const r=o=>{o.error!=null&&mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,mt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ji(typeof n.token=="string"),this.R=n.token,new $j(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Vj(e){return e.name==="IndexedDbTransactionError"}class ga{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ga("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ga&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tf,K;(K=Tf||(Tf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new av([4294967295,4294967295],0);function Ql(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(t,n,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,c=new Id(t,n,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var If,Pf;(Pf=If||(If={})).ea="default",Pf.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wj(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function qj(e,t,n,r){if(t===!0&&r===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Kj(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Td()}function Gj(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kj(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wj((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class uv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Lj;switch(r.type){case"firstParty":return new Fj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rf.get(n);r&&(mt("ComponentProvider","Removing Datastore"),Rf.delete(n),r.terminate())}(this),Promise.resolve()}}function Xj(e,t,n,r={}){var i;const o=(e=Gj(e,uv))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Oj("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ue.MOCK_USER;else{c=wx(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ue(h)}e._authCredentials=new zj(new cv(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hj(this,"async_queue_retry"),this.Vu=()=>{const r=Ql();r&&mt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Ql();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Vj(t))throw t;mt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw lv("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Id.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&Td()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Yj extends uv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Df,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Df(t),this._firestoreClient=void 0,await t}}}function Jj(e,t){const n=typeof e=="object"?e:vd(),r=typeof e=="string"?e:"(default)",i=Ua(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=vx("firestore");o&&Xj(i,...o)}return i}(function(t,n=!0){(function(i){Ds=i})(vr),dr(new Bn("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Yj(new Mj(r.getProvider("auth-internal")),new Bj(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ga(h.options.projectId,g)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),It(Cf,"4.7.3",t),It(Cf,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebasestorage.googleapis.com",Qj="storageBucket",Zj=2*60*1e3,ek=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ot{constructor(t,n,r=0){super(Zl(t),`Firebase Storage: ${n} (${Zl(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Zl(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Zl(e){return"storage/"+e}function tk(){const e="An unknown error occurred, please check the error payload for server response.";return new zt(At.UNKNOWN,e)}function nk(){return new zt(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rk(){return new zt(At.CANCELED,"User canceled the upload/download.")}function ik(e){return new zt(At.INVALID_URL,"Invalid URL '"+e+"'.")}function sk(e){return new zt(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Of(e){return new zt(At.INVALID_ARGUMENT,e)}function hv(){return new zt(At.APP_DELETED,"The Firebase app was deleted.")}function ok(e){return new zt(At.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=xt.makeFromUrl(t,n)}catch{return new xt(t,"")}if(r.path==="")return r;throw sk(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),u={bucket:1,path:3};function h(C){C.path_=decodeURIComponent(C.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${g}/b/${i}/o${w}`,"i"),_={bucket:1,path:3},T=n===dv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",y=new RegExp(`^https?://${T}/${i}/${D}`,"i"),x=[{regex:c,indices:u,postModify:o},{regex:E,indices:_,postModify:h},{regex:y,indices:{bucket:1,path:2},postModify:h}];for(let C=0;C<x.length;C++){const A=x[C],z=A.regex.exec(t);if(z){const j=z[A.indices.bucket];let b=z[A.indices.path];b||(b=""),r=new xt(j,b),A.postModify(r);break}}if(r==null)throw ik(t);return r}}class ak{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(e,t,n){let r=1,i=null,o=null,l=!1,c=0;function u(){return c===2}let h=!1;function g(...D){h||(h=!0,t.apply(null,D))}function m(D){i=setTimeout(()=>{i=null,e(E,u())},D)}function w(){o&&clearTimeout(o)}function E(D,...y){if(h){w();return}if(D){w(),g.call(null,D,...y);return}if(u()||l){w(),g.call(null,D,...y);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,m(x)}let _=!1;function T(D){_||(_=!0,w(),!h&&(i!==null?(D||(c=2),clearTimeout(i),m(0)):D||(c=1)))}return m(0),o=setTimeout(()=>{l=!0,T(!0)},n),T}function ck(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(e){return e!==void 0}function Lf(e,t,n,r){if(r<t)throw Of(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Of(`Invalid value for '${e}'. Expected ${n} or less.`)}function dk(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ma;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ma||(ma={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(t,n,r,i,o,l,c,u,h,g,m,w=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=m,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,_)=>{this.resolve_=E,this.reject_=_,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new xo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===ma.NO_ERROR,u=o.getStatus();if(!c||hk(u,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===ma.ABORT;r(!1,new xo(!1,null,g));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new xo(h,o))})},n=(r,i)=>{const o=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());uk(u)?o(u):o()}catch(u){l(u)}else if(c!==null){const u=tk();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(i.canceled){const u=this.appDelete_?hv():rk();l(u)}else{const u=nk();l(u)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=lk(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ck(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function fk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function gk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function mk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function xk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function vk(e,t,n,r,i,o,l=!0){const c=dk(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return mk(h,t),fk(h,n),gk(h,o),xk(h,r),new pk(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function bk(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,n){this._service=t,n instanceof xt?this._location=n:this._location=xt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new xa(t,n)}get root(){const t=new xt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bk(this._location.path)}get storage(){return this._service}get parent(){const t=yk(this._location.path);if(t===null)return null;const n=new xt(this._location.bucket,t);return new xa(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ok(t)}}function zf(e,t){const n=t==null?void 0:t[Qj];return n==null?null:xt.makeFromBucketSpec(n,e)}function wk(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:wx(i,e.app.options.projectId))}class _k{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=dv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Zj,this._maxUploadRetryTime=ek,this._requests=new Set,i!=null?this._bucket=xt.makeFromBucketSpec(i,this._host):this._bucket=zf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=xt.makeFromBucketSpec(this._url,t):this._bucket=zf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Lf("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Lf("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new xa(this,t)}_makeRequest(t,n,r,i,o=!0){if(this._deleted)return new ak(hv());{const l=vk(t,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Mf="@firebase/storage",Uf="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="storage";function jk(e=vd(),t){e=jt(e);const r=Ua(e,pv).getImmediate({identifier:t}),i=vx("storage");return i&&kk(r,...i),r}function kk(e,t,n,r={}){wk(e,t,n,r)}function Ek(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new _k(n,r,i,t,vr)}function Sk(){dr(new Bn(pv,Ek,"PUBLIC").setMultipleInstances(!0)),It(Mf,Uf,""),It(Mf,Uf,"esm2017")}Sk();const Nk={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Pd=kx(Nk),Di=Pj(Pd);Jj(Pd);jk(Pd);const fv=P.createContext(void 0),Ck=({children:e})=>{const[t,n]=P.useState(null),[r,i]=P.useState(!0),[o,l]=P.useState(null);P.useEffect(()=>{const E=y_(Di,_=>{n(_),i(!1)});return()=>E()},[]);const w={user:t,loading:r,error:o,login:async(E,_)=>{try{l(null),i(!0),await f_(Di,E,_)}catch(T){const D=ec(T.code);throw l(D),new Error(D)}finally{i(!1)}},register:async(E,_,T)=>{try{l(null),i(!0);const{user:D}=await p_(Di,E,_);T&&await m_(D,{displayName:T})}catch(D){const y=ec(D.code);throw l(y),new Error(y)}finally{i(!1)}},logout:async()=>{try{l(null),await b_(Di)}catch(E){throw l("Error al cerrar sesión"),E}},resetPassword:async E=>{try{l(null),await h_(Di,E)}catch(_){const T=ec(_.code);throw l(T),new Error(T)}},clearError:()=>l(null)};return s.jsx(fv.Provider,{value:w,children:e})},gv=()=>{const e=P.useContext(fv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function ec(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const Pe=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=gv(),i=un();return r?s.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[s.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),s.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?s.jsx(s.Fragment,{children:e}):s.jsx(Io,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=P.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:u,...h},g)=>P.createElement("svg",{ref:g,...Tk,width:i,height:i,stroke:r,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${Ik(e)}`,c].join(" "),...h},[...t.map(([m,w])=>P.createElement(m,w)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=B("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=B("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=B("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=B("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=B("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=B("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=B("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=B("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=B("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Xk=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:en,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:si,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Os,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ri,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:Vk,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:Gk,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return s.jsxs("div",{className:"landing-page",children:[s.jsxs("nav",{className:"navbar",children:[s.jsxs("div",{className:"nav-brand",children:[s.jsx(en,{size:32}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"nav-links",children:[s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx(Ae,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),s.jsx(Ae,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),s.jsxs("section",{className:"hero",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),s.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),s.jsxs("div",{className:"hero-buttons",children:[s.jsxs(Ae,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",s.jsx(va,{size:20})]}),s.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),s.jsxs("div",{className:"hero-trust",children:[s.jsx("span",{children:"Confiado por +100 empresas de courier"}),s.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>s.jsx(uu,{size:16,fill:"#f59e0b"},r))})]})]}),s.jsx("div",{className:"hero-image",children:s.jsxs("div",{className:"dashboard-preview",children:[s.jsx("div",{className:"preview-header",children:s.jsxs("div",{className:"dots",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})}),s.jsxs("div",{className:"preview-content",children:[s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-stat"}),s.jsx("div",{className:"mock-chart"})]})]})})]}),s.jsxs("section",{id:"features",className:"features",children:[s.jsx("h2",{children:"Todo lo que necesitas para operar"}),s.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),s.jsx("div",{className:"features-grid",children:t.map((n,r)=>s.jsxs("div",{className:"feature-card",children:[s.jsx("div",{className:"feature-icon",children:s.jsx(n.icon,{size:28})}),s.jsx("h3",{children:n.title}),s.jsx("p",{children:n.description})]},r))})]}),s.jsxs("section",{id:"pricing",className:"pricing",children:[s.jsx("h2",{children:"Planes simples y transparentes"}),s.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),s.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>s.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&s.jsx("span",{className:"popular-badge",children:"Más Popular"}),s.jsx("h3",{children:n.name}),s.jsx("p",{className:"plan-description",children:n.description}),s.jsxs("div",{className:"plan-price",children:[n.priceLabel&&s.jsx("span",{className:"price-label",children:n.priceLabel}),s.jsxs("span",{className:"price",children:["$",n.price]}),s.jsx("span",{className:"period",children:"/mes"})]}),s.jsx("ul",{className:"plan-features",children:n.features.map((i,o)=>s.jsxs("li",{children:[s.jsx(Cn,{size:16})," ",i]},o))}),s.jsx(Ae,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),s.jsxs("section",{className:"cta",children:[s.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),s.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),s.jsxs(Ae,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",s.jsx(va,{size:24})]})]}),s.jsxs("footer",{className:"footer",children:[s.jsxs("div",{className:"footer-content",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsx(en,{size:28}),s.jsx("span",{children:"Sistema Courier"}),s.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Producto"}),s.jsx("a",{href:"#features",children:"Características"}),s.jsx("a",{href:"#pricing",children:"Precios"}),s.jsx("a",{href:"/docs",children:"Documentación"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Empresa"}),s.jsx("a",{href:"/about",children:"Nosotros"}),s.jsx("a",{href:"/contact",children:"Contacto"}),s.jsx("a",{href:"/blog",children:"Blog"})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Legal"}),s.jsx("a",{href:"/privacy",children:"Privacidad"}),s.jsx("a",{href:"/terms",children:"Términos"})]})]}),s.jsx("div",{className:"footer-bottom",children:s.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),s.jsx("style",{children:`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .landing-page {
          font-family: 'Inter', system-ui, sans-serif;
          color: #1f2937;
          overflow-x: hidden;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          z-index: 100;
          border-bottom: 1px solid #e5e7eb;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          color: #3b82f6;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-links a {
          color: #6b7280;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover { color: #3b82f6; }

        .btn-login {
          padding: 10px 20px;
          border-radius: 8px;
        }

        .btn-cta {
          background: #3b82f6;
          color: white !important;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
        }

        .hero {
          display: flex;
          align-items: center;
          gap: 60px;
          padding: 160px 60px 100px;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
        }

        .hero-content {
          flex: 1;
        }

        .hero-content h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          font-size: 20px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #3b82f6;
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          border: 2px solid #e5e7eb;
          transition: border-color 0.2s;
        }

        .btn-secondary:hover { border-color: #3b82f6; }

        .hero-trust {
          color: #6b7280;
          font-size: 14px;
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-top: 8px;
          color: #f59e0b;
        }

        .hero-image {
          flex: 1;
        }

        .dashboard-preview {
          background: white;
          border-radius: 16px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
          overflow: hidden;
        }

        .preview-header {
          padding: 12px 16px;
          background: #f3f4f6;
          border-bottom: 1px solid #e5e7eb;
        }

        .dots {
          display: flex;
          gap: 8px;
        }

        .dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1d5db;
        }

        .dots span:first-child { background: #ef4444; }
        .dots span:nth-child(2) { background: #f59e0b; }
        .dots span:nth-child(3) { background: #10b981; }

        .preview-content {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .mock-stat {
          height: 80px;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border-radius: 12px;
        }

        .mock-chart {
          grid-column: span 3;
          height: 200px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 12px;
        }

        .features {
          padding: 100px 60px;
          text-align: center;
        }

        h2 {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #6b7280;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          text-align: left;
          padding: 32px;
          border-radius: 16px;
          background: #f9fafb;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .pricing {
          padding: 100px 60px;
          background: #f8fafc;
          text-align: center;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: left;
          border: 2px solid #e5e7eb;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pricing-card.popular {
          border-color: #3b82f6;
          transform: scale(1.05);
        }

        .pricing-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #3b82f6;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .plan-description {
          color: #6b7280;
          margin-bottom: 24px;
        }

        .plan-price {
          margin-bottom: 24px;
        }

        .price-label {
          font-size: 14px;
          color: #6b7280;
          display: block;
        }

        .price {
          font-size: 48px;
          font-weight: 700;
        }

        .period {
          color: #6b7280;
        }

        .plan-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .plan-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          color: #374151;
        }

        .plan-features li svg {
          color: #10b981;
        }

        .btn-plan {
          display: block;
          text-align: center;
          padding: 14px;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          color: #374151;
          background: #f3f4f6;
          transition: background 0.2s;
        }

        .btn-plan:hover { background: #e5e7eb; }

        .btn-plan-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-plan-primary:hover { background: #2563eb; }

        .cta {
          padding: 100px 60px;
          text-align: center;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
        }

        .cta h2 {
          color: white;
          margin-bottom: 16px;
        }

        .cta p {
          opacity: 0.9;
          margin-bottom: 40px;
          font-size: 18px;
        }

        .btn-cta-large {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: white;
          color: #1e40af;
          padding: 18px 40px;
          border-radius: 14px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .btn-cta-large:hover { transform: scale(1.05); }

        .footer {
          background: #0f172a;
          color: #94a3b8;
          padding: 60px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto 40px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: white;
        }

        .footer-brand span {
          font-size: 20px;
          font-weight: 700;
        }

        .footer-brand p {
          color: #64748b;
          max-width: 280px;
        }

        .footer-links h4 {
          color: white;
          margin-bottom: 16px;
        }

        .footer-links a {
          display: block;
          color: #64748b;
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.2s;
        }

        .footer-links a:hover { color: white; }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #1e293b;
        }

        @media (max-width: 1024px) {
          .hero { flex-direction: column; padding: 140px 40px 60px; }
          .hero-content h1 { font-size: 40px; }
          .features-grid, .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card.popular { transform: none; }
          .footer-content { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .navbar { padding: 16px 24px; }
          .nav-links { display: none; }
          .hero { padding: 120px 24px 40px; }
          .hero-content h1 { font-size: 32px; }
          .hero-buttons { flex-direction: column; }
          .features, .pricing, .cta { padding: 60px 24px; }
          h2 { font-size: 28px; }
        }
      `})]})},Yk=()=>{const e=_t(),[t,n]=P.useState(1),[r,i]=P.useState(!1),[o,l]=P.useState(""),[c,u]=P.useState("idle"),[h,g]=P.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=y=>{const{name:f,value:x}=y.target;if(g({...h,[f]:x}),l(""),f==="company_name"){const C=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);g(A=>({...A,subdomain:C})),C.length>=3&&w(C)}if(f==="subdomain"){const C=x.toLowerCase().replace(/[^a-z0-9-]/g,"");g(A=>({...A,subdomain:C})),C.length>=3&&w(C)}},w=async y=>{u("checking");try{const x=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:y})})).json();u(x.available?"available":"taken")}catch{u("idle")}},E=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),_=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),T=()=>{t===1&&E()&&n(2)},D=async y=>{if(y.preventDefault(),!!_()){i(!0),l("");try{const f=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),x=await f.json();if(!f.ok)throw new Error(x.error||"Error al crear la cuenta");e(`/onboarding?tenant=${x.tenant.subdomain}`)}catch(f){l(f.message)}finally{i(!1)}}};return s.jsxs("div",{className:"register-page",children:[s.jsxs("div",{className:"register-container",children:[s.jsxs("div",{className:"register-brand",children:[s.jsxs(Ae,{to:"/",className:"brand-logo",children:[s.jsx(en,{size:40}),s.jsx("span",{children:"Sistema Courier"})]}),s.jsxs("div",{className:"brand-content",children:[s.jsx("h2",{children:"Comienza tu prueba gratuita"}),s.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),s.jsxs("ul",{className:"brand-features",children:[s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Configuración en minutos"]}),s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Soporte incluido"]}),s.jsxs("li",{children:[s.jsx(Cn,{size:20})," Cancela cuando quieras"]})]})]})]}),s.jsxs("div",{className:"register-form-container",children:[s.jsxs("div",{className:"form-header",children:[s.jsx("h1",{children:"Crear cuenta"}),s.jsxs("p",{children:["Paso ",t," de 2"]})]}),s.jsxs("div",{className:"progress-bar",children:[s.jsx("div",{className:"progress-step active",children:"1"}),s.jsx("div",{className:"progress-line"}),s.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),o&&s.jsxs("div",{className:"error-message",children:[s.jsx(fr,{size:18}),o]}),s.jsx("form",{onSubmit:D,children:t===1?s.jsxs("div",{className:"form-step",children:[s.jsx("h3",{children:"Información de la empresa"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Nombre de la empresa"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(ya,{size:20}),s.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu subdominio"}),s.jsxs("div",{className:"input-wrapper subdomain-input",children:[s.jsx(ri,{size:20}),s.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),s.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&s.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&s.jsxs("span",{className:"subdomain-status available",children:[s.jsx(Cn,{size:14})," Disponible"]}),c==="taken"&&s.jsxs("span",{className:"subdomain-status taken",children:[s.jsx(fr,{size:14})," No disponible"]})]}),s.jsxs("button",{type:"button",onClick:T,className:"btn-next",children:["Continuar ",s.jsx(va,{size:20})]})]}):s.jsxs("div",{className:"form-step",children:[s.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[s.jsx(Va,{size:18})," Atrás"]}),s.jsx("h3",{children:"Tu cuenta de administrador"}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Tu nombre"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Wk,{size:20}),s.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Email"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Ad,{size:20}),s.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(cu,{size:20}),s.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Confirmar contraseña"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(cu,{size:20}),s.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),s.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),s.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",s.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",s.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),s.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",s.jsx(Ae,{to:"/login",children:"Iniciar sesión"})]})]})]}),s.jsx("style",{children:`
        .register-page {
          min-height: 100vh;
          background: #f3f4f6;
          font-family: system-ui, sans-serif;
        }

        .register-container {
          display: flex;
          min-height: 100vh;
        }

        .register-brand {
          flex: 1;
          background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
          color: white;
          padding: 60px;
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          color: white;
          text-decoration: none;
          margin-bottom: 80px;
        }

        .brand-content {
          margin-top: auto;
          margin-bottom: auto;
        }

        .brand-content h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .brand-content p {
          font-size: 18px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .brand-features {
          list-style: none;
        }

        .brand-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          padding: 12px 0;
          opacity: 0.9;
        }

        .register-form-container {
          flex: 1;
          background: white;
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .form-header p {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .progress-bar {
          display: flex;
          align-items: center;
          margin-bottom: 32px;
        }

        .progress-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        .progress-step.active {
          background: #3b82f6;
          color: white;
        }

        .progress-line {
          flex: 1;
          height: 2px;
          background: #e5e7eb;
          margin: 0 12px;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #dc2626;
          padding: 12px 16px;
          border-radius: 10px;
          margin-bottom: 24px;
          font-size: 14px;
        }

        .form-step h3 {
          font-size: 20px;
          margin-bottom: 24px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          transition: border-color 0.2s;
        }

        .input-wrapper:focus-within {
          border-color: #3b82f6;
        }

        .input-wrapper svg {
          color: #9ca3af;
        }

        .input-wrapper input {
          flex: 1;
          padding: 14px 0;
          border: none;
          font-size: 16px;
          background: transparent;
        }

        .input-wrapper input:focus {
          outline: none;
        }

        .subdomain-input {
          flex-wrap: wrap;
        }

        .subdomain-suffix {
          color: #6b7280;
          font-size: 14px;
        }

        .subdomain-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          margin-top: 8px;
        }

        .subdomain-status.checking { color: #6b7280; }
        .subdomain-status.available { color: #10b981; }
        .subdomain-status.taken { color: #dc2626; }

        .btn-next, .btn-submit {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          margin-top: 24px;
        }

        .btn-next:hover, .btn-submit:hover {
          background: #2563eb;
        }

        .btn-submit:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .btn-back {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .btn-back:hover {
          color: #374151;
        }

        .terms {
          font-size: 13px;
          color: #6b7280;
          text-align: center;
          margin-top: 16px;
        }

        .terms a {
          color: #3b82f6;
        }

        .login-link {
          text-align: center;
          margin-top: 32px;
          color: #6b7280;
        }

        .login-link a {
          color: #3b82f6;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .register-brand { display: none; }
          .register-form-container { padding: 40px 24px; }
        }
      `})]})},Jk=()=>{const e=_t(),[t]=L2();t.get("tenant");const[n,r]=P.useState(1),[i,o]=P.useState(!1),[l,c]=P.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),u=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=w=>{var _;const E=(_=w.target.files)==null?void 0:_[0];E&&c({...l,logo:E,logo_preview:URL.createObjectURL(E)})},g=async()=>{o(!0);try{if(l.logo){const w=new FormData;w.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:w})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(w){console.error("Error saving onboarding:",w)}finally{o(!1)}},m=()=>{e("/dashboard")};return s.jsxs("div",{className:"onboarding-wizard",children:[s.jsxs("div",{className:"wizard-container",children:[s.jsxs("div",{className:"wizard-header",children:[s.jsx(en,{size:32,color:"#3b82f6"}),s.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),s.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),s.jsx("div",{className:"wizard-progress",children:[1,2,3].map(w=>s.jsx("div",{className:`progress-dot ${n>=w?"active":""}`,children:n>w?s.jsx(Cn,{size:16}):w},w))}),s.jsxs("div",{className:"wizard-content",children:[n===1&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Vf,{size:32})}),s.jsx("h2",{children:"Sube tu logo"}),s.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),s.jsx("div",{className:"logo-upload",children:l.logo_preview?s.jsxs("div",{className:"logo-preview",children:[s.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),s.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):s.jsxs("label",{className:"upload-area",children:[s.jsx(Vf,{size:40}),s.jsx("span",{children:"Arrastra o haz clic para subir"}),s.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),s.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Mk,{size:32})}),s.jsx("h2",{children:"Elige tus colores"}),s.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),s.jsx("div",{className:"color-picker",children:u.map(w=>s.jsx("button",{className:`color-option ${l.primary_color===w?"selected":""}`,style:{backgroundColor:w},onClick:()=>c({...l,primary_color:w}),children:l.primary_color===w&&s.jsx(Cn,{size:20})},w))}),s.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:s.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&s.jsxs("div",{className:"wizard-step",children:[s.jsx("div",{className:"step-icon",children:s.jsx(Bf,{size:32})}),s.jsx("h2",{children:"Información de contacto"}),s.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),s.jsxs("div",{className:"contact-form",children:[s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Teléfono (opcional)"}),s.jsx("input",{type:"tel",value:l.company_phone,onChange:w=>c({...l,company_phone:w.target.value}),placeholder:"+1 234 567 8900"})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("label",{children:"Dirección (opcional)"}),s.jsx("input",{type:"text",value:l.company_address,onChange:w=>c({...l,company_address:w.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),s.jsxs("div",{className:"wizard-nav",children:[n>1?s.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[s.jsx(Va,{size:20})," Atrás"]}):s.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?s.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",s.jsx(va,{size:20})]}):s.jsxs("button",{onClick:g,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",s.jsx(Bf,{size:20})]})]})]}),s.jsx("style",{children:`
        .onboarding-wizard {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          font-family: system-ui, sans-serif;
        }

        .wizard-container {
          background: white;
          border-radius: 24px;
          padding: 48px;
          max-width: 560px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .wizard-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .wizard-header h1 {
          font-size: 28px;
          margin: 16px 0 8px;
        }

        .wizard-header p {
          color: #6b7280;
        }

        .wizard-progress {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-bottom: 40px;
        }

        .progress-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.3s;
        }

        .progress-dot.active {
          background: #3b82f6;
          color: white;
        }

        .wizard-content {
          min-height: 320px;
        }

        .wizard-step {
          text-align: center;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #3b82f6;
        }

        .wizard-step h2 {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .wizard-step p {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .logo-upload {
          margin: 24px 0;
        }

        .upload-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 40px;
          border: 2px dashed #d1d5db;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
        }

        .upload-area:hover {
          border-color: #3b82f6;
          background: #f8fafc;
        }

        .upload-area input {
          display: none;
        }

        .upload-hint {
          font-size: 12px;
          color: #9ca3af;
        }

        .logo-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .logo-preview img {
          max-width: 200px;
          max-height: 100px;
          object-fit: contain;
        }

        .logo-preview button {
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          font-weight: 500;
        }

        .color-picker {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .color-option {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          border: 3px solid transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: transform 0.2s;
        }

        .color-option:hover {
          transform: scale(1.1);
        }

        .color-option.selected {
          border-color: #1f2937;
        }

        .color-preview {
          padding: 20px;
          border-radius: 12px;
          color: white;
          font-weight: 500;
        }

        .contact-form {
          text-align: left;
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          margin-bottom: 8px;
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.2s;
        }

        .input-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .wizard-nav {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .btn-back, .btn-skip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: #6b7280;
          font-size: 15px;
          cursor: pointer;
        }

        .btn-back:hover, .btn-skip:hover {
          color: #374151;
        }

        .btn-next, .btn-finish {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #3b82f6;
          color: white;
          padding: 14px 28px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .btn-next:hover, .btn-finish:hover {
          background: #2563eb;
        }

        .btn-finish:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        @media (max-width: 600px) {
          .onboarding-wizard { padding: 20px; }
          .wizard-container { padding: 32px 24px; }
        }
      `})]})},Qk=()=>{var y,f,x,C,A,z,j,b;const{tenant:e,isWhiteLabel:t}=Oe(),{login:n,clearError:r}=gv(),i=_t(),o=un(),[l,c]=P.useState(""),[u,h]=P.useState(""),[g,m]=P.useState(!1),[w,E]=P.useState(""),_=((f=(y=o.state)==null?void 0:y.from)==null?void 0:f.pathname)||"/dashboard",T=async k=>{k.preventDefault(),m(!0),E(""),r();try{await n(l,u),i(_,{replace:!0})}catch(N){E(N.message||"Error al iniciar sesión")}finally{m(!1)}},D=((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6";return s.jsxs("div",{className:"login-page",children:[s.jsxs("div",{className:"login-container",children:[s.jsx("div",{className:"login-logo",children:(C=e==null?void 0:e.branding)!=null&&C.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):s.jsx("div",{className:"logo-placeholder",children:((z=(A=e==null?void 0:e.branding)==null?void 0:A.company_name)==null?void 0:z.charAt(0))||"C"})}),s.jsx("h1",{children:((j=e==null?void 0:e.branding)==null?void 0:j.company_name)||"Sistema Courier"}),((b=e==null?void 0:e.branding)==null?void 0:b.tagline)&&s.jsx("p",{className:"tagline",children:e.branding.tagline}),s.jsxs("form",{onSubmit:T,children:[w&&s.jsx("div",{className:"error-message",children:w}),s.jsxs("div",{className:"input-group",children:[s.jsx(Ad,{size:20,className:"input-icon"}),s.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:k=>c(k.target.value),required:!0})]}),s.jsxs("div",{className:"input-group",children:[s.jsx(cu,{size:20,className:"input-icon"}),s.jsx("input",{type:"password",placeholder:"Contraseña",value:u,onChange:k=>h(k.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-login",disabled:g,style:{backgroundColor:D},children:g?"Iniciando sesión...":s.jsxs(s.Fragment,{children:[s.jsx(zk,{size:20}),"Iniciar Sesión"]})}),s.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&s.jsx("div",{className:"login-footer",children:s.jsxs("p",{children:["Powered by ",s.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),s.jsx("style",{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${D}22 0%, ${D}44 100%);
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .login-container {
          background: white;
          padding: 48px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 420px;
          text-align: center;
        }
        
        .login-logo img {
          max-width: 180px;
          max-height: 60px;
          margin-bottom: 24px;
        }
        
        .logo-placeholder {
          width: 80px;
          height: 80px;
          background: ${D};
          color: white;
          font-size: 36px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          margin: 0 auto 24px;
        }
        
        h1 {
          font-size: 28px;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .tagline {
          color: #6b7280;
          margin-bottom: 32px;
        }
        
        .error-message {
          background: #fef2f2;
          color: #dc2626;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .input-group {
          position: relative;
          margin-bottom: 16px;
        }
        
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        
        input {
          width: 100%;
          padding: 14px 14px 14px 48px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        
        input:focus {
          outline: none;
          border-color: ${D};
        }
        
        .btn-login {
          width: 100%;
          padding: 14px;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: opacity 0.2s;
        }
        
        .btn-login:hover {
          opacity: 0.9;
        }
        
        .btn-login:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .forgot-password {
          display: block;
          margin-top: 16px;
          color: ${D};
          text-decoration: none;
          font-size: 14px;
        }
        
        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .login-footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
          color: #9ca3af;
          font-size: 14px;
        }
        
        .login-footer a {
          color: ${D};
          text-decoration: none;
        }
      `})]})},Zk=()=>{var T,D,y;const{tenant:e,isWhiteLabel:t}=Oe(),n=((T=e==null?void 0:e.branding)==null?void 0:T.primary_color)||"#3b82f6",[r,i]=P.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[o,l]=P.useState([]),[c,u]=P.useState(!0);P.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{u(!0);const f="http://localhost:3001",C=await(await fetch(`${f}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(C);const z=await(await fetch(`${f}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(z)}catch(f){console.error("Error fetching dashboard data:",f)}finally{u(!1)}},g=f=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(f),m=f=>{const x=new Date(f),A=new Date().getTime()-x.getTime(),z=Math.floor(A/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const j=Math.floor(z/60);if(j<24)return`Hace ${j} hora${j>1?"s":""}`;const b=Math.floor(j/24);return`Hace ${b} día${b>1?"s":""}`},w=f=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[f]||f,E=f=>{switch(f){case"delivered":return s.jsx(Dt,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return s.jsx(si,{size:16,className:"status-icon warning"});case"assigned":case"processing":return s.jsx(en,{size:16,className:"status-icon info"});default:return s.jsx(bs,{size:16,className:"status-icon pending"})}},_=[{icon:en,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:si,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Os,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:ws,label:"Ingresos Mes",value:g(r.monthlyRevenue),color:"#f59e0b"}];return s.jsxs("div",{className:"dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsx("div",{className:"header-left",children:(D=e==null?void 0:e.branding)!=null&&D.logo_url?s.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):s.jsx("span",{className:"header-title",children:((y=e==null?void 0:e.branding)==null?void 0:y.company_name)||"Sistema Courier"})}),s.jsxs("div",{className:"header-right",children:[s.jsx("span",{className:"user-name",children:"Admin"}),s.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),s.jsxs("main",{className:"dashboard-main",children:[s.jsx("div",{className:"stats-grid",children:_.map((f,x)=>s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{backgroundColor:`${f.color}20`,color:f.color},children:s.jsx(f.icon,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:c?"...":f.value}),s.jsx("div",{className:"stat-label",children:f.label})]})]},x))}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Paquetes Recientes"}),s.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),s.jsx("div",{className:"card-content",children:c?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):o.length===0?s.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):o.slice(0,4).map(f=>s.jsxs("div",{className:"package-item",children:[s.jsxs("div",{className:"package-info",children:[s.jsx("span",{className:"package-id",children:f.tracking_number}),s.jsx("span",{className:"package-client",children:f.client_name||"Sin cliente"})]}),s.jsxs("div",{className:"package-status",children:[E(f.status),s.jsx("span",{children:w(f.status)})]}),s.jsx("span",{className:"package-time",children:m(f.created_at)})]},f.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Rendimiento"}),s.jsx(ba,{size:20,style:{color:"#10b981"}})]}),s.jsxs("div",{className:"card-content performance-grid",children:[s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),s.jsx("span",{className:"perf-value success",children:"94%"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),s.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Incidentes"}),s.jsx("span",{className:"perf-value warning",children:"3"})]}),s.jsxs("div",{className:"performance-item",children:[s.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),s.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&s.jsxs("div",{className:"trial-notice",children:[s.jsx(fr,{size:20}),s.jsx("span",{children:"Tu período de prueba termina pronto. "}),s.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),s.jsx("style",{children:`
        .dashboard {
          min-height: 100vh;
          background: #f3f4f6;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          background: white;
          padding: 16px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .header-logo {
          max-height: 40px;
        }

        .header-title {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .user-name {
          color: #6b7280;
        }

        .btn-logout {
          padding: 8px 16px;
          background: #f3f4f6;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: #6b7280;
          transition: background 0.2s;
        }

        .btn-logout:hover {
          background: #e5e7eb;
        }

        .dashboard-main {
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          color: #6b7280;
          font-size: 14px;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        .card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .card-header a {
          font-size: 14px;
          text-decoration: none;
        }

        .card-content {
          padding: 16px 24px;
        }

        .package-item {
          display: flex;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #f3f4f6;
        }

        .package-item:last-child {
          border-bottom: none;
        }

        .package-info {
          flex: 1;
        }

        .package-id {
          font-weight: 600;
          color: #1f2937;
          display: block;
        }

        .package-client {
          font-size: 14px;
          color: #6b7280;
        }

        .package-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #6b7280;
        }

        .status-icon.success { color: #10b981; }
        .status-icon.warning { color: #f59e0b; }
        .status-icon.info { color: #3b82f6; }
        .status-icon.pending { color: #6b7280; }

        .package-time {
          font-size: 12px;
          color: #9ca3af;
          margin-left: 16px;
        }

        .performance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .performance-item {
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
        }

        .perf-label {
          display: block;
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .perf-value {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
        }

        .perf-value.success { color: #10b981; }
        .perf-value.warning { color: #f59e0b; }

        .trial-notice {
          margin-top: 24px;
          padding: 16px 20px;
          background: #fef3c7;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #92400e;
        }

        .trial-notice a {
          font-weight: 600;
        }
      `})]})},eE=()=>{var f,x;const{tenant:e}=Oe(),t=_t(),[n,r]=P.useState([]),[i,o]=P.useState(!0),[l,c]=P.useState(""),[u,h]=P.useState(""),[g,m]=P.useState(1),[w,E]=P.useState(0),_=20;P.useEffect(()=>{e&&T()},[e,g,l,u]);const T=async()=>{var C;if(e)try{o(!0);const A="http://localhost:3001",z=new URLSearchParams({page:g.toString(),limit:_.toString(),...l&&{search:l},...u&&{status:u}}),b=await(await fetch(`${A}/api/packages?${z}`,{headers:{"X-Tenant-ID":e.id}})).json();r(b.packages||[]),E(((C=b.pagination)==null?void 0:C.total)||0)}catch(A){console.error("Error fetching packages:",A)}finally{o(!1)}},D=C=>{const z={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[C]||{label:C,color:"#6b7280"};return s.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${z.color}20`,color:z.color},children:z.label})},y=C=>new Date(C).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return s.jsxs("div",{className:"packages-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Paquetes"}),s.jsxs("p",{children:[w," paquetes en total"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(ii,{size:20}),"Nuevo Paquete"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("div",{className:"search-box",children:[s.jsx(Wa,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:C=>{c(C.target.value),m(1)}})]}),s.jsxs("select",{value:u,onChange:C=>{h(C.target.value),m(1)},className:"status-filter",children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"pending",children:"Pendiente"}),s.jsx("option",{value:"processing",children:"Procesando"}),s.jsx("option",{value:"assigned",children:"Asignado"}),s.jsx("option",{value:"in_transit",children:"En tránsito"}),s.jsx("option",{value:"out_for_delivery",children:"En reparto"}),s.jsx("option",{value:"delivered",children:"Entregado"}),s.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),s.jsx("div",{className:"table-container",children:i?s.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(en,{size:48}),s.jsx("h3",{children:"No hay paquetes"}),s.jsx("p",{children:"Crea tu primer paquete para comenzar"}),s.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[s.jsx(ii,{size:20}),"Crear Paquete"]})]}):s.jsxs("table",{className:"packages-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tracking"}),s.jsx("th",{children:"Destinatario"}),s.jsx("th",{children:"Dirección"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:n.map(C=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"tracking-number",children:C.tracking_number})}),s.jsx("td",{children:C.recipient_name}),s.jsx("td",{className:"address-cell",children:C.recipient_address}),s.jsx("td",{children:D(C.status)}),s.jsx("td",{children:y(C.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}`),title:"Ver detalle",children:s.jsx(Dk,{size:16})}),s.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}/edit`),title:"Editar",children:s.jsx(Ha,{size:16})})]})})]},C.id))})]})}),!i&&w>_&&s.jsxs("div",{className:"pagination",children:[s.jsx("button",{disabled:g===1,onClick:()=>m(g-1),children:"Anterior"}),s.jsxs("span",{children:["Página ",g," de ",Math.ceil(w/_)]}),s.jsx("button",{disabled:g>=Math.ceil(w/_),onClick:()=>m(g+1),children:"Siguiente"})]}),s.jsx("style",{children:`
                .packages-page {
                    padding: 24px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0 0 4px 0;
                }

                .page-header p {
                    color: #6b7280;
                    margin: 0;
                }

                .btn-primary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: ${((f=e==null?void 0:e.branding)==null?void 0:f.primary_color)||"#3b82f6"};
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }

                .btn-primary:hover {
                    opacity: 0.9;
                }

                .filters-bar {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .search-box {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                }

                .search-box input {
                    flex: 1;
                    border: none;
                    outline: none;
                    font-size: 14px;
                }

                .status-filter {
                    padding: 12px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 14px;
                    cursor: pointer;
                }

                .table-container {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    overflow: hidden;
                }

                .packages-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .packages-table th {
                    background: #f9fafb;
                    padding: 12px 16px;
                    text-align: left;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    text-transform: uppercase;
                    border-bottom: 1px solid #e5e7eb;
                }

                .packages-table td {
                    padding: 16px;
                    border-bottom: 1px solid #f3f4f6;
                    font-size: 14px;
                    color: #1f2937;
                }

                .packages-table tbody tr:hover {
                    background: #f9fafb;
                }

                .tracking-number {
                    font-weight: 600;
                    color: ${((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6"};
                }

                .address-cell {
                    max-width: 300px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .actions {
                    display: flex;
                    gap: 8px;
                }

                .btn-icon {
                    padding: 6px;
                    background: transparent;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    cursor: pointer;
                    color: #6b7280;
                    transition: all 0.2s;
                }

                .btn-icon:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .loading, .empty-state {
                    padding: 60px 20px;
                    text-align: center;
                    color: #6b7280;
                }

                .empty-state {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                }

                .empty-state h3 {
                    margin: 0;
                    color: #1f2937;
                }

                .empty-state p {
                    margin: 0;
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 16px;
                    margin-top: 24px;
                }

                .pagination button {
                    padding: 8px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pagination button:hover:not(:disabled) {
                    background: #f3f4f6;
                }

                .pagination button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `})]})},tE=()=>{var y,f,x,C;const{tenant:e}=Oe(),t=_t(),[n,r]=P.useState(!1),[i,o]=P.useState([]),[l,c]=P.useState([]),[u,h]=P.useState(null),[g,m]=P.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});P.useEffect(()=>{e&&(w(),E())},[e]),P.useEffect(()=>{g.zone&&g.weight&&parseFloat(g.weight)>0?_():h(null)},[g.zone,g.weight,g.service_type]);const w=async()=>{if(e)try{const j=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();o(j.clients||[])}catch(A){console.error("Error fetching clients:",A)}},E=async()=>{if(e)try{const j=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(j.zones||[])}catch(A){console.error("Error fetching zones:",A)}},_=async()=>{if(!(!e||!g.zone||!g.weight))try{const j=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${g.zone}&weight=${g.weight}&serviceType=${g.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(j.totalPrice||null)}catch(A){console.error("Error calculating price:",A),h(null)}},T=A=>{const z=i.find(j=>j.id===A);m(z?{...g,client_id:A,sender_name:z.name,sender_phone:z.phone}:{...g,client_id:A})},D=async A=>{if(A.preventDefault(),!!e){if(!g.client_id||!g.recipient_name||!g.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const j=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...g,weight:parseFloat(g.weight)||0,declared_value:parseFloat(g.declared_value)||0})});if(j.ok){const b=await j.json();alert(`Paquete creado exitosamente! Tracking: ${b.tracking_number}`),t("/packages")}else{const b=await j.json();alert(`Error: ${b.error||"No se pudo crear el paquete"}`)}}catch(z){console.error("Error creating package:",z),alert("Error al crear el paquete")}finally{r(!1)}}};return s.jsxs("div",{className:"new-package-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[s.jsx(Va,{size:20}),"Volver"]}),s.jsx("h1",{children:"Nuevo Paquete"})]}),s.jsxs("form",{onSubmit:D,className:"package-form",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Información del Cliente"}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cliente *"}),s.jsxs("select",{value:g.client_id,onChange:A=>T(A.target.value),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(A=>s.jsx("option",{value:A.id,children:A.name},A.id))]})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Remitente"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Remitente"}),s.jsx("input",{type:"text",value:g.sender_name,onChange:A=>m({...g,sender_name:A.target.value}),placeholder:"Nombre completo"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Remitente"}),s.jsx("input",{type:"tel",value:g.sender_phone,onChange:A=>m({...g,sender_phone:A.target.value}),placeholder:"8888-8888"})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Datos del Destinatario"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Nombre del Destinatario *"}),s.jsx("input",{type:"text",value:g.recipient_name,onChange:A=>m({...g,recipient_name:A.target.value}),placeholder:"Nombre completo",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Teléfono del Destinatario *"}),s.jsx("input",{type:"tel",value:g.recipient_phone,onChange:A=>m({...g,recipient_phone:A.target.value}),placeholder:"8888-8888",required:!0})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Dirección de Entrega *"}),s.jsx("textarea",{value:g.recipient_address,onChange:A=>m({...g,recipient_address:A.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h2",{children:"Detalles del Paquete"}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Zona de Entrega *"}),s.jsxs("select",{value:g.zone,onChange:A=>m({...g,zone:A.target.value}),required:!0,children:[s.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(A=>s.jsx("option",{value:A,children:A},A))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Tipo de Servicio *"}),s.jsxs("select",{value:g.service_type,onChange:A=>m({...g,service_type:A.target.value}),required:!0,children:[s.jsx("option",{value:"standard",children:"Estándar"}),s.jsx("option",{value:"express",children:"Express"}),s.jsx("option",{value:"same_day",children:"Mismo Día"}),s.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Peso (kg) *"}),s.jsx("input",{type:"number",step:"0.01",value:g.weight,onChange:A=>m({...g,weight:A.target.value}),placeholder:"0.00",required:!0})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Dimensiones"}),s.jsx("input",{type:"text",value:g.dimensions,onChange:A=>m({...g,dimensions:A.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Valor Declarado (₡)"}),s.jsx("input",{type:"number",step:"0.01",value:g.declared_value,onChange:A=>m({...g,declared_value:A.target.value}),placeholder:"0.00"})]})]}),u!==null&&s.jsxs("div",{className:"price-calculator",children:[s.jsx("div",{className:"price-label",children:"Precio Estimado:"}),s.jsxs("div",{className:"price-value",children:["₡",u.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Notas"}),s.jsx("textarea",{value:g.notes,onChange:A=>m({...g,notes:A.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),s.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[s.jsx(yv,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),s.jsx("style",{children:`
                .new-package-page {
                    padding: 24px;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0;
                }

                .btn-back {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #6b7280;
                    transition: all 0.2s;
                }

                .btn-back:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .package-form {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    padding: 24px;
                }

                .form-section {
                    margin-bottom: 32px;
                    padding-bottom: 32px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .form-section:last-of-type {
                    border-bottom: none;
                }

                .form-section h2 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 16px 0;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 16px;
                    margin-bottom: 16px;
                }

                .form-row:last-child {
                    margin-bottom: 0;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-group label {
                    font-size: 14px;
                    font-weight: 500;
                    color: #374151;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    padding: 10px 12px;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    font-size: 14px;
                    transition: border-color 0.2s;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: ${((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6"};
                }

                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
                }

                .price-calculator {
                    background: linear-gradient(135deg, ${((f=e==null?void 0:e.branding)==null?void 0:f.primary_color)||"#3b82f6"} 0%, ${((x=e==null?void 0:e.branding)==null?void 0:x.secondary_color)||"#8b5cf6"} 100%);
                    padding: 20px;
                    border-radius: 12px;
                    margin: 20px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                .price-label {
                    font-size: 16px;
                    font-weight: 600;
                    color: white;
                }

                .price-value {
                    font-size: 32px;
                    font-weight: 700;
                    color: white;
                }

                .form-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                    margin-top: 24px;
                    padding-top: 24px;
                    border-top: 1px solid #e5e7eb;
                }

                .btn-primary, .btn-secondary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    border: none;
                }

                .btn-primary {
                    background: ${((C=e==null?void 0:e.branding)==null?void 0:C.primary_color)||"#3b82f6"};
                    color: white;
                }

                .btn-primary:hover:not(:disabled) {
                    opacity: 0.9;
                }

                .btn-primary:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .btn-secondary {
                    background: white;
                    color: #6b7280;
                    border: 1px solid #e5e7eb;
                }

                .btn-secondary:hover:not(:disabled) {
                    background: #f3f4f6;
                }

                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})};function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(null,arguments)}function nE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function rE(e,t){if(e==null)return{};var n,r,i=nE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function hu(e){"@babel/helpers - typeof";return hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hu(e)}function iE(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function sE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pu(e,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},pu(e,t)}function oE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function wa(e){return wa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},wa(e)}function wv(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(wv=function(){return!!e})()}function aE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lE(e,t){if(t&&(hu(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return aE(e)}function cE(e){var t=wv();return function(){var n,r=wa(e);if(t){var i=wa(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return lE(this,n)}}var _v={exports:{}},uE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",dE=uE,hE=dE;function jv(){}function kv(){}kv.resetWarningCache=jv;var pE=function(){function e(r,i,o,l,c,u){if(u!==hE){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:kv,resetWarningCache:jv};return n.PropTypes=n,n};_v.exports=pE();var fE=_v.exports;const Je=fu(fE);/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */function gr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}gr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};gr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};gr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function Dd(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}Dd.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var o=i/e,l=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var u=l-n,h=c-r;t+=Math.sqrt(u*u+h*h)}n=l,r=c}return t};Dd.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function gE(e,t,n){var r,i,o,l=null,c=0;n||(n={});var u=function(){c=n.leading===!1?0:Date.now(),l=null,o=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var g=t-(h-c);return r=this,i=arguments,g<=0||g>t?(l&&(clearTimeout(l),l=null),c=h,o=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(u,g)),o}}function ee(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=gE(ee.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=ee.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var o=i.changedTouches[0];n._strokeBegin(o)}},this._handleTouchMove=function(i){i.preventDefault();var o=i.targetTouches[0];n._strokeMoveUpdate(o)},this._handleTouchEnd=function(i){var o=i.target===n._canvas;o&&(i.preventDefault(),n._strokeEnd(i))},this.on()}ee.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};ee.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,o=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,o,l)},this._isEmpty=!1};ee.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};ee.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};ee.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};ee.prototype.isEmpty=function(){return this._isEmpty};ee.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};ee.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],o=i&&i[i.length-1],l=o&&r.distanceTo(o)<this.minDistance;if(!(o&&l)){var c=this._addPoint(r),u=c.curve,h=c.widths;u&&h&&this._drawCurve(u,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};ee.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};ee.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};ee.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};ee.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};ee.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new gr(e-r.left,t-r.top,n||new Date().getTime())};ee.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,o=new Dd(t[1],r,i,t[2]),l=this._calculateCurveWidths(o);return t.shift(),{curve:o,widths:l}}return{}};ee.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,o=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},u={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),g=Math.sqrt(o*o+l*l),m=c.x-u.x,w=c.y-u.y,E=g/(h+g),_={x:u.x+m*E,y:u.y+w*E},T=t.x-_.x,D=t.y-_.y;return{c1:new gr(c.x+T,c.y+D),c2:new gr(u.x+T,u.y+D)}};ee.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(i);return r.start=this._lastWidth,r.end=o,this._lastVelocity=i,this._lastWidth=o,r};ee.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};ee.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};ee.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,o=Math.floor(e.length());r.beginPath();for(var l=0;l<o;l+=1){var c=l/o,u=c*c,h=u*c,g=1-c,m=g*g,w=m*g,E=w*e.startPoint.x;E+=3*m*c*e.control1.x,E+=3*g*u*e.control2.x,E+=h*e.endPoint.x;var _=w*e.startPoint.y;_+=3*m*c*e.control1.y,_+=3*g*u*e.control2.y,_+=h*e.endPoint.y;var T=t+h*i;this._drawPoint(E,_,T)}r.closePath(),r.fill()};ee.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};ee.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var o=0;o<i.length;o+=1){var l=i[o],c=new gr(l.x,l.y,l.time),u=l.color;if(o===0)this.penColor=u,this._reset(),this._addPoint(c);else if(o!==i.length-1){var h=this._addPoint(c),g=h.curve,m=h.widths;g&&m&&t(g,m,u)}}else{this._reset();var w=i[0];n(w)}}};ee.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,o=0,l=n.width/r,c=n.height/r,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttributeNS(null,"width",n.width),u.setAttributeNS(null,"height",n.height),this._fromData(t,function(y,f,x){var C=document.createElement("path");if(!isNaN(y.control1.x)&&!isNaN(y.control1.y)&&!isNaN(y.control2.x)&&!isNaN(y.control2.y)){var A="M "+y.startPoint.x.toFixed(3)+","+y.startPoint.y.toFixed(3)+" "+("C "+y.control1.x.toFixed(3)+","+y.control1.y.toFixed(3)+" ")+(y.control2.x.toFixed(3)+","+y.control2.y.toFixed(3)+" ")+(y.endPoint.x.toFixed(3)+","+y.endPoint.y.toFixed(3));C.setAttribute("d",A),C.setAttribute("stroke-width",(f.end*2.25).toFixed(3)),C.setAttribute("stroke",x),C.setAttribute("fill","none"),C.setAttribute("stroke-linecap","round"),u.appendChild(C)}},function(y){var f=document.createElement("circle"),x=typeof e.dotSize=="function"?e.dotSize():e.dotSize;f.setAttribute("r",x),f.setAttribute("cx",y.x),f.setAttribute("cy",y.y),f.setAttribute("fill",y.color),u.appendChild(f)});var h="data:image/svg+xml;base64,",g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+o+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=u.innerHTML;if(m===void 0){var w=document.createElement("dummy"),E=u.childNodes;w.innerHTML="";for(var _=0;_<E.length;_+=1)w.appendChild(E[_].cloneNode(!0));m=w.innerHTML}var T="</svg>",D=g+m+T;return h+btoa(D)};ee.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};ee.prototype.toData=function(){return this._data};var Ev={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(o0,function(){return function(n){function r(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var g=h.getContext("2d"),m=h.width,w=h.height,E=g.getImageData(0,0,m,w).data,_=c(!0,m,w,E),T=c(!1,m,w,E),D=u(!0,m,w,E),y=u(!1,m,w,E),f=y-D+1,x=T-_+1,C=g.getImageData(D,_,f,x);return h.width=f,h.height=x,g.clearRect(0,0,f,x),g.putImageData(C,0,0),h}function o(h,g,m,w){return{red:w[4*(m*g+h)],green:w[4*(m*g+h)+1],blue:w[4*(m*g+h)+2],alpha:w[4*(m*g+h)+3]}}function l(h,g,m,w){return o(h,g,m,w).alpha}function c(h,g,m,w){for(var E=h?1:-1,_=h?0:m-1,T=_;h?T<m:T>-1;T+=E)for(var D=0;D<g;D++)if(l(D,T,g,w))return T;return null}function u(h,g,m,w){for(var E=h?1:-1,_=h?0:g-1,T=_;h?T<g:T>-1;T+=E)for(var D=0;D<m;D++)if(l(T,D,g,w))return T;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(Ev);var mE=Ev.exports;const xE=fu(mE);var vE=["canvasProps","clearOnResize"],qa=function(e){oE(n,e);var t=cE(n);function n(){var r;sE(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var u=rE(c,vE);return u},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new ee(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),u=document.createElement("canvas");return u.width=c.width,u.height=c.height,u.getContext("2d").drawImage(c,0,0),xE(u)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,u,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},g=h.width,m=h.height;if(!(typeof g<"u"&&typeof m<"u")){var w=r.getCanvas(),E=Math.max((u=window.devicePixelRatio)!==null&&u!==void 0?u:1,1);typeof g>"u"&&(w.width=w.offsetWidth*E),typeof m>"u"&&(w.height=w.offsetHeight*E),w.getContext("2d").scale(E,E),r.clear()}},r.render=function(){var c=r.props.canvasProps;return yu.createElement("canvas",du({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,u){return r.getSignaturePad().fromDataURL(c,u)},r.toDataURL=function(c,u){return r.getSignaturePad().toDataURL(c,u)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return iE(n)}(P.Component);qa.propTypes={velocityFilterWeight:Je.number,minWidth:Je.number,maxWidth:Je.number,minDistance:Je.number,dotSize:Je.oneOfType([Je.number,Je.func]),penColor:Je.string,throttle:Je.number,onEnd:Je.func,onBegin:Je.func,canvasProps:Je.object,clearOnResize:Je.bool};qa.defaultProps={clearOnResize:!0};qa.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const yE=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var E,_;const{tenant:o}=Oe(),l=P.useRef(null),[c,u]=P.useState(""),[h,g]=P.useState(!1),m=()=>{var T;(T=l.current)==null||T.clear()},w=async()=>{var T,D;if((T=l.current)!=null&&T.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{g(!0);const y=(D=l.current)==null?void 0:D.toDataURL(),x=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":o.id},body:JSON.stringify({signatureUrl:y,recipientName:n,recipientId:c})});if(x.ok)alert("Entrega confirmada exitosamente"),i();else{const C=await x.json();alert(`Error: ${C.error||"No se pudo confirmar la entrega"}`)}}catch(y){console.error("Error confirmando entrega:",y),alert("Error al confirmar la entrega")}finally{g(!1)}};return s.jsx("div",{className:"modal-overlay",onClick:r,children:s.jsxs("div",{className:"modal-content",onClick:T=>T.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Confirmar Entrega"}),s.jsx("button",{className:"btn-close",onClick:r,children:s.jsx(Kk,{size:24})})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"package-info",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Tracking:"})," ",t]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Destinatario:"})," ",n]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Cédula del Destinatario *"}),s.jsx("input",{type:"text",value:c,onChange:T=>u(T.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),s.jsxs("div",{className:"signature-section",children:[s.jsx("label",{children:"Firma del Destinatario *"}),s.jsx("div",{className:"signature-canvas-container",children:s.jsx(qa,{ref:l,canvasProps:{className:"signature-canvas"}})}),s.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[s.jsx(Bk,{size:16}),"Limpiar"]})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),s.jsxs("button",{className:"btn-primary",onClick:w,disabled:h,children:[s.jsx(Cn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),s.jsx("style",{children:`
                    .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        padding: 20px;
                    }

                    .modal-content {
                        background: white;
                        border-radius: 12px;
                        max-width: 600px;
                        width: 100%;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                    }

                    .modal-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px 24px;
                        border-bottom: 1px solid #e5e7eb;
                    }

                    .modal-header h2 {
                        margin: 0;
                        font-size: 20px;
                        font-weight: 600;
                        color: #1f2937;
                    }

                    .btn-close {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #6b7280;
                        padding: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 4px;
                        transition: background 0.2s;
                    }

                    .btn-close:hover {
                        background: #f3f4f6;
                    }

                    .modal-body {
                        padding: 24px;
                    }

                    .package-info {
                        background: #f9fafb;
                        padding: 16px;
                        border-radius: 8px;
                        margin-bottom: 20px;
                    }

                    .package-info p {
                        margin: 4px 0;
                        font-size: 14px;
                        color: #374151;
                    }

                    .form-group {
                        margin-bottom: 20px;
                    }

                    .form-group label {
                        display: block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #374151;
                        margin-bottom: 6px;
                    }

                    .form-group input {
                        width: 100%;
                        padding: 10px 12px;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 14px;
                    }

                    .form-group input:focus {
                        outline: none;
                        border-color: ${((E=o==null?void 0:o.branding)==null?void 0:E.primary_color)||"#3b82f6"};
                    }

                    .signature-section {
                        margin-bottom: 20px;
                    }

                    .signature-section label {
                        display: block;
                        font-size: 14px;
                        font-weight: 500;
                        color: #374151;
                        margin-bottom: 8px;
                    }

                    .signature-canvas-container {
                        border: 2px solid #d1d5db;
                        border-radius: 8px;
                        background: white;
                        margin-bottom: 8px;
                    }

                    .signature-canvas {
                        width: 100%;
                        height: 200px;
                        cursor: crosshair;
                    }

                    .btn-clear {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        padding: 6px 12px;
                        background: white;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        cursor: pointer;
                        font-size: 13px;
                        color: #6b7280;
                        transition: all 0.2s;
                    }

                    .btn-clear:hover:not(:disabled) {
                        background: #f3f4f6;
                    }

                    .btn-clear:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .modal-footer {
                        display: flex;
                        justify-content: flex-end;
                        gap: 12px;
                        padding: 20px 24px;
                        border-top: 1px solid #e5e7eb;
                    }

                    .btn-primary, .btn-secondary {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding: 10px 20px;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.2s;
                        border: none;
                        font-size: 14px;
                    }

                    .btn-primary {
                        background: ${((_=o==null?void 0:o.branding)==null?void 0:_.primary_color)||"#3b82f6"};
                        color: white;
                    }

                    .btn-primary:hover:not(:disabled) {
                        opacity: 0.9;
                    }

                    .btn-primary:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .btn-secondary {
                        background: white;
                        color: #6b7280;
                        border: 1px solid #e5e7eb;
                    }

                    .btn-secondary:hover:not(:disabled) {
                        background: #f3f4f6;
                    }

                    .btn-secondary:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                `})]})})},bE=()=>{var T,D;const{id:e}=lx(),{tenant:t}=Oe(),n=_t(),[r,i]=P.useState(null),[o,l]=P.useState([]),[c,u]=P.useState(!0),[h,g]=P.useState(!1);P.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{u(!0);const x=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(x)}catch(y){console.error("Error fetching package:",y)}finally{u(!1)}},w=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),C=window.URL.createObjectURL(x),A=document.createElement("a");A.href=C,A.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(C),document.body.removeChild(A)}}catch(y){console.error("Error downloading label:",y),alert("Error al descargar la etiqueta")}},E=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),C=window.URL.createObjectURL(x),A=document.createElement("a");A.href=C,A.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(A),A.click(),window.URL.revokeObjectURL(C),document.body.removeChild(A)}}catch(y){console.error("Error downloading delivery note:",y),alert("Error al descargar la nota de entrega")}},_=y=>{const x={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[y]||{label:y,color:"#6b7280"};return s.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${x.color}20`,color:x.color},children:x.label})};return c?s.jsx("div",{className:"loading-page",children:"Cargando..."}):r?s.jsxs("div",{className:"package-detail-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[s.jsx(Va,{size:20}),"Volver"]}),s.jsxs("div",{className:"header-info",children:[s.jsx("h1",{children:r.tracking_number}),_(r.status)]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("button",{className:"btn-action",onClick:w,title:"Imprimir Etiqueta",children:[s.jsx(Fk,{size:20}),"Etiqueta"]}),s.jsxs("button",{className:"btn-action",onClick:E,title:"Nota de Entrega",children:[s.jsx(lu,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&s.jsxs("button",{className:"btn-deliver",onClick:()=>g(!0),title:"Confirmar Entrega",children:[s.jsx(Dt,{size:20}),"Confirmar Entrega"]}),s.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[s.jsx(Ha,{size:20}),"Editar"]})]})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Información General"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Cliente:"}),s.jsx("span",{className:"value",children:r.client_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Courier:"}),s.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Peso:"}),s.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dimensiones:"}),s.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Valor Declarado:"}),s.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Creación:"}),s.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Fecha Entrega:"}),s.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Remitente"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.sender_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.sender_phone})]})]}),s.jsxs("div",{className:"detail-card",children:[s.jsx("h2",{children:"Destinatario"}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Nombre:"}),s.jsx("span",{className:"value",children:r.recipient_name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Teléfono:"}),s.jsx("span",{className:"value",children:r.recipient_phone})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"Dirección:"}),s.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&s.jsxs("div",{className:"detail-card full-width",children:[s.jsx("h2",{children:"Notas"}),s.jsx("p",{children:r.notes})]})]}),h&&s.jsx(yE,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>g(!1),onSuccess:()=>{g(!1),m()}}),s.jsx("style",{children:`
                .package-detail-page {
                    padding: 24px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .page-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .header-info {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .page-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #1f2937;
                    margin: 0;
                }

                .btn-back, .btn-edit, .btn-action, .btn-deliver {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 16px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    cursor: pointer;
                    color: #6b7280;
                    font-weight: 500;
                    transition: all 0.2s;
                    font-size: 14px;
                }

                .btn-back:hover, .btn-edit:hover, .btn-action:hover, .btn-deliver:hover {
                    background: #f3f4f6;
                    color: #1f2937;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .btn-deliver {
                    background: #10b981;
                    color: white;
                    border: none;
                }

                .btn-deliver:hover {
                    background: #059669;
                }

                .btn-edit {
                    background: ${((T=t==null?void 0:t.branding)==null?void 0:T.primary_color)||"#3b82f6"};
                    color: white;
                    border: none;
                }

                .btn-edit:hover {
                    opacity: 0.9;
                    background: ${((D=t==null?void 0:t.branding)==null?void 0:D.primary_color)||"#3b82f6"};
                }

                .detail-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 24px;
                }

                .detail-card {
                    background: white;
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                .detail-card.full-width {
                    grid-column: 1 / -1;
                }

                .detail-card h2 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                    margin: 0 0 16px 0;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #f3f4f6;
                }

                .detail-row:last-child {
                    border-bottom: none;
                }

                .detail-row .label {
                    font-weight: 500;
                    color: #6b7280;
                }

                .detail-row .value {
                    color: #1f2937;
                    text-align: right;
                }

                .loading-page, .error-page {
                    padding: 60px 20px;
                    text-align: center;
                    color: #6b7280;
                    font-size: 18px;
                }
            `})]}):s.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},wE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(!0),[o,l]=P.useState("");P.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const u="http://localhost:3001",h=new URLSearchParams({...o&&{search:o}}),m=await(await fetch(`${u}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(u){console.error("Error:",u)}finally{i(!1)}};return s.jsxs("div",{className:"clients-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Clientes"}),s.jsxs("p",{children:[t.length," clientes registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Wa,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:o,onChange:u=>l(u.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Os,{size:48}),s.jsx("h3",{children:"No hay clientes"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Email"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Paquetes"})]})}),s.jsx("tbody",{children:t.map(u=>s.jsxs("tr",{children:[s.jsx("td",{children:u.name}),s.jsx("td",{children:u.company_name||"-"}),s.jsx("td",{children:u.email}),s.jsx("td",{children:u.phone}),s.jsx("td",{children:u.total_packages})]},u.id))})]})}),s.jsx("style",{children:`
                .clients-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .search-box { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 24px; }
                .search-box input { flex: 1; border: none; outline: none; font-size: 14px; }
                .table-container { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
            `})]})},_E=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(!0),[o,l]=P.useState("");P.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",g=new URLSearchParams({...o&&{search:o}}),w=await(await fetch(`${h}/api/couriers?${g}`,{headers:{"X-Tenant-ID":e.id}})).json();n(w.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},u=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return s.jsxs("div",{className:"couriers-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:"Couriers"}),s.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),s.jsxs("div",{className:"search-box",children:[s.jsx(Wa,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar courier...",value:o,onChange:h=>l(h.target.value)})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(si,{size:48}),s.jsx("h3",{children:"No hay couriers"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Teléfono"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Placa"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Entregas"}),s.jsx("th",{children:"Rating"})]})}),s.jsx("tbody",{children:t.map(h=>s.jsxs("tr",{children:[s.jsx("td",{children:h.name}),s.jsx("td",{children:h.phone}),s.jsx("td",{children:u(h.vehicle_type)}),s.jsx("td",{children:h.vehicle_plate||"-"}),s.jsx("td",{children:h.zone||"-"}),s.jsx("td",{children:h.completed_deliveries}),s.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),s.jsx("style",{children:`
                .couriers-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .search-box { display: flex; align-items: center; gap: 12px; padding: 12px 16px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 24px; }
                .search-box input { flex: 1; border: none; outline: none; font-size: 14px; }
                .table-container { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
            `})]})},jE=()=>{var w;const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(!0),[o,l]=P.useState(!1),[c,u]=P.useState(null);P.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{i(!0);const T=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(T.rates||[])}catch(E){console.error("Error:",E)}finally{i(!1)}},g=async E=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${E}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(_){console.error("Error:",_)}},m=E=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[E]||E;return s.jsxs("div",{className:"rates-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Tarifas"}),s.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),s.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[s.jsx(ii,{size:20}),"Nueva Tarifa"]})]}),s.jsx("div",{className:"table-container",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ws,{size:48}),s.jsx("h3",{children:"No hay tarifas configuradas"}),s.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nombre"}),s.jsx("th",{children:"Zona"}),s.jsx("th",{children:"Peso (kg)"}),s.jsx("th",{children:"Precio Base"}),s.jsx("th",{children:"Precio/kg"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:t.map(E=>s.jsxs("tr",{children:[s.jsxs("td",{children:[s.jsx("strong",{children:E.name}),E.description&&s.jsx("div",{className:"description",children:E.description})]}),s.jsx("td",{children:E.zone||"-"}),s.jsxs("td",{children:[E.min_weight," - ",E.max_weight||"∞"]}),s.jsxs("td",{children:["₡",E.base_price.toLocaleString()]}),s.jsxs("td",{children:["₡",E.price_per_kg.toLocaleString()]}),s.jsx("td",{children:m(E.service_type)}),s.jsx("td",{children:s.jsx("span",{className:`status ${E.active?"active":"inactive"}`,children:E.active?"Activa":"Inactiva"})}),s.jsx("td",{children:s.jsxs("div",{className:"actions",children:[s.jsx("button",{className:"btn-icon",onClick:()=>{u(E),l(!0)},title:"Editar",children:s.jsx(Ha,{size:16})}),s.jsx("button",{className:"btn-icon danger",onClick:()=>g(E.id),title:"Eliminar",children:s.jsx(bv,{size:16})})]})})]},E.id))})]})}),s.jsx("style",{children:`
                .rates-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                .btn-primary { display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: ${((w=e==null?void 0:e.branding)==null?void 0:w.primary_color)||"#3b82f6"}; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
                .btn-primary:hover { opacity: 0.9; }
                .table-container { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                .description { font-size: 12px; color: #6b7280; margin-top: 4px; }
                .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status.active { background: #d1fae5; color: #065f46; }
                .status.inactive { background: #fee2e2; color: #991b1b; }
                .actions { display: flex; gap: 8px; }
                .btn-icon { padding: 6px; background: white; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; }
                .btn-icon:hover { background: #f3f4f6; }
                .btn-icon.danger:hover { background: #fee2e2; color: #dc2626; }
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},kE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(!0),[o,l]=P.useState(""),[c,u]=P.useState("");P.useEffect(()=>{e&&h()},[e,o,c]);const h=async()=>{if(e)try{i(!0);let T="http://localhost:3001/api/incidents?";o&&(T+=`status=${o}&`),c&&(T+=`priority=${c}`);const y=await(await fetch(T,{headers:{"X-Tenant-ID":e.id}})).json();n(y.incidents||[])}catch(_){console.error("Error:",_)}finally{i(!1)}},g=_=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[_]||_,m=_=>{switch(_){case"open":return s.jsx(ni,{size:16});case"investigating":return s.jsx(bs,{size:16});case"resolved":return s.jsx(Dt,{size:16});case"closed":return s.jsx(_s,{size:16});default:return null}},w=_=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[_]||_,E=_=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[_]||"#6b7280";return s.jsxs("div",{className:"incidents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Incidencias"}),s.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),s.jsxs("div",{className:"filters",children:[s.jsxs("select",{value:o,onChange:_=>l(_.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"open",children:"Abierta"}),s.jsx("option",{value:"investigating",children:"Investigando"}),s.jsx("option",{value:"resolved",children:"Resuelta"}),s.jsx("option",{value:"closed",children:"Cerrada"})]}),s.jsxs("select",{value:c,onChange:_=>u(_.target.value),children:[s.jsx("option",{value:"",children:"Todas las prioridades"}),s.jsx("option",{value:"low",children:"Baja"}),s.jsx("option",{value:"medium",children:"Media"}),s.jsx("option",{value:"high",children:"Alta"}),s.jsx("option",{value:"critical",children:"Crítica"})]})]}),s.jsx("div",{className:"incidents-list",children:r?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ni,{size:48}),s.jsx("h3",{children:"No hay incidencias"}),s.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(_=>s.jsxs("div",{className:"incident-card",children:[s.jsxs("div",{className:"incident-header",children:[s.jsxs("div",{className:"incident-title",children:[s.jsx("span",{className:"incident-icon",style:{color:E(_.priority)},children:m(_.status)}),s.jsxs("div",{children:[s.jsx("h3",{children:g(_.type)}),s.jsxs("p",{className:"tracking",children:["Paquete: ",_.tracking_number]})]})]}),s.jsxs("div",{className:"incident-badges",children:[s.jsx("span",{className:`status-badge status-${_.status}`,children:w(_.status)}),s.jsx("span",{className:"priority-badge",style:{backgroundColor:`${E(_.priority)}20`,color:E(_.priority)},children:_.priority.toUpperCase()})]})]}),s.jsxs("div",{className:"incident-body",children:[s.jsx("p",{className:"description",children:_.description}),_.resolution&&s.jsxs("div",{className:"resolution",children:[s.jsx("strong",{children:"Resolución:"})," ",_.resolution]})]}),s.jsxs("div",{className:"incident-footer",children:[s.jsx("span",{className:"date",children:new Date(_.created_at).toLocaleDateString("es-CR")}),s.jsx("span",{className:"client",children:_.client_name})]})]},_.id))}),s.jsx("style",{children:`
                .incidents-page { padding: 24px; max-width: 1200px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .filters { display: flex; gap: 12px; margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .incidents-list { display: grid; gap: 16px; }
                .incident-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #e5e7eb; }
                
                .incident-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
                .incident-title { display: flex; gap: 12px; align-items: flex-start; }
                .incident-icon { display: flex; align-items: center; margin-top: 2px; }
                .incident-title h3 { font-size: 16px; font-weight: 600; color: #1f2937; margin: 0; }
                .tracking { font-size: 13px; color: #6b7280; margin: 4px 0 0 0; }
                
                .incident-badges { display: flex; gap: 8px; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-open { background: #fee2e2; color: #991b1b; }
                .status-badge.status-investigating { background: #fef3c7; color: #92400e; }
                .status-badge.status-resolved { background: #d1fae5; color: #065f46; }
                .status-badge.status-closed { background: #f3f4f6; color: #374151; }
                
                .priority-badge { padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; }
                
                .incident-body { margin-bottom: 12px; }
                .description { color: #374151; font-size: 14px; line-height: 1.5; margin: 0; }
                .resolution { margin-top: 12px; padding: 12px; background: #f0fdf4; border-radius: 8px; font-size: 13px; color: #166534; }
                
                .incident-footer { display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #f3f4f6; font-size: 13px; color: #6b7280; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},EE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(null),[o,l]=P.useState(!0);P.useEffect(()=>{e&&(c(),u())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},u=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(m)}catch(h){console.error("Error:",h)}};return s.jsxs("div",{className:"fuel-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Control de Combustible"}),s.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(ws,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Costo Total"}),s.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(Ak,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Litros Totales"}),s.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(ba,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),s.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx($f,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Registros"}),s.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Registros de Combustible"}),o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx($f,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron registros de combustible"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Courier"}),s.jsx("th",{children:"Litros"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Precio/L"}),s.jsx("th",{children:"Odómetro"}),s.jsx("th",{children:"Distancia"}),s.jsx("th",{children:"Rendimiento"}),s.jsx("th",{children:"Estación"})]})}),s.jsx("tbody",{children:t.map(h=>{var g,m,w;return s.jsxs("tr",{children:[s.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),s.jsx("td",{children:h.courier_name||"-"}),s.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),s.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),s.jsxs("td",{children:["₡",((g=h.price_per_liter)==null?void 0:g.toFixed(2))||"-"]}),s.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),s.jsxs("td",{children:[((w=h.distance_traveled)==null?void 0:w.toLocaleString())||"-"," km"]}),s.jsx("td",{children:h.efficiency?s.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),s.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),s.jsx("style",{children:`
                .fuel-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 32px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .records-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .records-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .efficiency { padding: 4px 12px; background: #d1fae5; color: #065f46; border-radius: 12px; font-size: 13px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},SE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(null),[o,l]=P.useState(!0),[c,u]=P.useState("");P.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let T="http://localhost:3001/api/vehicles";c&&(T+=`?status=${c}`);const y=await(await fetch(T,{headers:{"X-Tenant-ID":e.id}})).json();n(y.vehicles||[])}catch(_){console.error("Error:",_)}finally{l(!1)}},g=async()=>{if(e)try{const D=await(await fetch("http://localhost:3001/api/vehicles/stats",{headers:{"X-Tenant-ID":e.id}})).json();i(D)}catch(_){console.error("Error:",_)}},m=_=>{switch(_){case"active":return s.jsx(Dt,{size:20});case"maintenance":return s.jsx(fr,{size:20});case"inactive":return s.jsx(_s,{size:20});default:return null}},w=_=>{switch(_){case"active":return"#10b981";case"maintenance":return"#f59e0b";case"inactive":return"#ef4444";default:return"#6b7280"}},E=_=>({active:"Activo",maintenance:"Mantenimiento",inactive:"Inactivo"})[_]||_;return s.jsxs("div",{className:"vehicles-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Vehículos"}),s.jsxs("p",{children:[t.length," vehículos registrados"]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Dt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Activos"}),s.jsx("p",{className:"stat-value",children:r.active})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(fr,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Mantenimiento"}),s.jsx("p",{className:"stat-value",children:r.maintenance})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(_s,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Inactivos"}),s.jsx("p",{className:"stat-value",children:r.inactive})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(si,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:r.total})]})]})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:c,onChange:_=>u(_.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"maintenance",children:"En Mantenimiento"}),s.jsx("option",{value:"inactive",children:"Inactivos"})]})}),s.jsx("div",{className:"vehicles-grid",children:o?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(si,{size:48}),s.jsx("h3",{children:"No hay vehículos"}),s.jsx("p",{children:"No se encontraron vehículos con los filtros seleccionados"})]}):t.map(_=>s.jsxs("div",{className:"vehicle-card",children:[s.jsxs("div",{className:"vehicle-header",children:[s.jsx("div",{className:"vehicle-icon",style:{color:w(_.status)},children:m(_.status)}),s.jsx("div",{className:"vehicle-plate",children:_.plate})]}),s.jsxs("div",{className:"vehicle-body",children:[s.jsxs("h3",{children:[_.brand," ",_.model]}),s.jsxs("div",{className:"vehicle-details",children:[_.year&&s.jsxs("span",{children:["Año: ",_.year]}),_.type&&s.jsxs("span",{children:["Tipo: ",_.type]})]}),_.courier_name&&s.jsxs("div",{className:"vehicle-assigned",children:["Asignado a: ",_.courier_name]})]}),s.jsx("div",{className:"vehicle-footer",children:s.jsx("span",{className:"status-badge",style:{backgroundColor:`${w(_.status)}20`,color:w(_.status)},children:E(_.status)})})]},_.id))}),s.jsx("style",{children:`
                .vehicles-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .vehicles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
                .vehicle-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.2s; }
                .vehicle-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .vehicle-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
                .vehicle-icon { display: flex; align-items: center; }
                .vehicle-plate { font-size: 20px; font-weight: 700; color: #1f2937; }
                
                .vehicle-body h3 { font-size: 16px; font-weight: 600; color: #374151; margin: 0 0 8px 0; }
                .vehicle-details { display: flex; flex-direction: column; gap: 4px; font-size: 14px; color: #6b7280; margin-bottom: 8px; }
                .vehicle-assigned { font-size: 13px; color: #059669; font-weight: 500; }
                
                .vehicle-footer { margin-top: 16px; padding-top: 16px; border-top: 1px solid #f3f4f6; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; grid-column: 1 / -1; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},NE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState([]),[o,l]=P.useState(null),[c,u]=P.useState(!0),[h,g]=P.useState("");P.useEffect(()=>{e&&(m(),w(),E())},[e,h]);const m=async()=>{if(e)try{u(!0);let x="http://localhost:3001/api/maintenance";h&&(x+=`?status=${h}`);const A=await(await fetch(x,{headers:{"X-Tenant-ID":e.id}})).json();n(A.records||[])}catch(f){console.error("Error:",f)}finally{u(!1)}},w=async()=>{if(e)try{const C=await(await fetch("http://localhost:3001/api/maintenance/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(C.records||[])}catch(f){console.error("Error:",f)}},E=async()=>{if(e)try{const C=await(await fetch("http://localhost:3001/api/maintenance/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(C)}catch(f){console.error("Error:",f)}},_=f=>({preventive:"Preventivo",corrective:"Correctivo",inspection:"Inspección"})[f]||f,T=f=>({scheduled:"Programado",in_progress:"En Progreso",completed:"Completado"})[f]||f,D=f=>{switch(f){case"scheduled":return s.jsx(ou,{size:16});case"in_progress":return s.jsx(bs,{size:16});case"completed":return s.jsx(Dt,{size:16});default:return null}},y=f=>{const x=new Date,A=new Date(f).getTime()-x.getTime();return Math.ceil(A/(1e3*60*60*24))};return s.jsxs("div",{className:"maintenance-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Mantenimiento de Vehículos"}),s.jsxs("p",{children:[t.length," registros de mantenimiento"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(ou,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Programados"}),s.jsx("p",{className:"stat-value",children:o.scheduled})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(bs,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"En Progreso"}),s.jsx("p",{className:"stat-value",children:o.inProgress})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Dt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Completados"}),s.jsx("p",{className:"stat-value",children:o.completed})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(ni,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Próximos 30 días"}),s.jsx("p",{className:"stat-value",children:o.upcoming})]})]})]}),r.length>0&&s.jsxs("div",{className:"upcoming-section",children:[s.jsx("h2",{children:"⚠️ Próximos Servicios (30 días)"}),s.jsx("div",{className:"upcoming-list",children:r.map(f=>{const x=y(f.next_service_date);return s.jsxs("div",{className:`upcoming-card ${x<=7?"urgent":""}`,children:[s.jsxs("div",{className:"upcoming-header",children:[s.jsxs("span",{className:"vehicle-info",children:[f.vehicle_plate," - ",f.vehicle_brand," ",f.vehicle_model]}),s.jsx("span",{className:`days-badge ${x<=7?"urgent":""}`,children:x<=0?"Vencido":`${x} días`})]}),s.jsxs("div",{className:"upcoming-body",children:[s.jsx("p",{children:f.description}),s.jsx("span",{className:"type-badge",children:_(f.type)})]})]},f.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:f=>g(f.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"scheduled",children:"Programados"}),s.jsx("option",{value:"in_progress",children:"En Progreso"}),s.jsx("option",{value:"completed",children:"Completados"})]})}),s.jsxs("div",{className:"records-list",children:[s.jsx("h2",{children:"Historial de Mantenimientos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(qk,{size:48}),s.jsx("h3",{children:"No hay registros"}),s.jsx("p",{children:"No se encontraron mantenimientos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Fecha"}),s.jsx("th",{children:"Vehículo"}),s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Descripción"}),s.jsx("th",{children:"Costo"}),s.jsx("th",{children:"Proveedor"}),s.jsx("th",{children:"Próximo Servicio"}),s.jsx("th",{children:"Estado"})]})}),s.jsx("tbody",{children:t.map(f=>s.jsxs("tr",{children:[s.jsx("td",{children:new Date(f.created_at).toLocaleDateString("es-CR")}),s.jsxs("td",{children:[s.jsx("strong",{children:f.vehicle_plate}),s.jsx("br",{}),s.jsxs("small",{children:[f.vehicle_brand," ",f.vehicle_model]})]}),s.jsx("td",{children:_(f.type)}),s.jsx("td",{children:f.description}),s.jsx("td",{children:f.cost?`₡${f.cost.toLocaleString()}`:"-"}),s.jsx("td",{children:f.provider||"-"}),s.jsx("td",{children:f.next_service_date?new Date(f.next_service_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${f.status}`,children:[D(f.status),T(f.status)]})})]},f.id))})]})})]}),s.jsx("style",{children:`
                .maintenance-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-card.alert { border: 2px solid #fee2e2; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .upcoming-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .upcoming-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .upcoming-list { display: flex; flex-direction: column; gap: 12px; }
                .upcoming-card { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; }
                .upcoming-card.urgent { background: #fee2e2; border-left-color: #dc2626; }
                .upcoming-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .vehicle-info { font-weight: 600; color: #1f2937; }
                .days-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #d97706; }
                .days-badge.urgent { color: #dc2626; }
                .upcoming-body p { margin: 0 0 8px 0; color: #374151; font-size: 14px; }
                .type-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #6b7280; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .records-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .records-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                td small { color: #6b7280; font-size: 12px; }
                tbody tr:hover { background: #f9fafb; }
                
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-scheduled { background: #dbeafe; color: #2563eb; }
                .status-badge.status-in_progress { background: #fef3c7; color: #d97706; }
                .status-badge.status-completed { background: #d1fae5; color: #065f46; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},CE=()=>{const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState([]),[o,l]=P.useState(null),[c,u]=P.useState(!0),[h,g]=P.useState("");P.useEffect(()=>{e&&(m(),w(),E())},[e,h]);const m=async()=>{if(e)try{u(!0);let f="http://localhost:3001/api/documents";h&&(f+=`?status=${h}`);const C=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(C.documents||[])}catch(y){console.error("Error:",y)}finally{u(!1)}},w=async()=>{if(e)try{const x=await(await fetch("http://localhost:3001/api/documents/expiring?days=30",{headers:{"X-Tenant-ID":e.id}})).json();i(x.documents||[])}catch(y){console.error("Error:",y)}},E=async()=>{if(e)try{const x=await(await fetch("http://localhost:3001/api/documents/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(x)}catch(y){console.error("Error:",y)}},_=y=>{switch(y){case"valid":return s.jsx(Dt,{size:16});case"expiring_soon":return s.jsx(ni,{size:16});case"expired":return s.jsx(_s,{size:16});default:return null}},T=y=>({valid:"Válido",expiring_soon:"Por Vencer",expired:"Vencido"})[y]||y,D=y=>{const f=new Date,C=new Date(y).getTime()-f.getTime();return Math.ceil(C/(1e3*60*60*24))};return s.jsxs("div",{className:"documents-page",children:[s.jsx("div",{className:"page-header",children:s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Documentos"}),s.jsxs("p",{children:[t.length," documentos registrados"]})]})}),o&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:s.jsx(Dt,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Válidos"}),s.jsx("p",{className:"stat-value",children:o.valid})]})]}),s.jsxs("div",{className:"stat-card alert",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:s.jsx(ni,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Por Vencer"}),s.jsx("p",{className:"stat-value",children:o.expiringSoon})]})]}),s.jsxs("div",{className:"stat-card alert-danger",children:[s.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:s.jsx(_s,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Vencidos"}),s.jsx("p",{className:"stat-value",children:o.expired})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:s.jsx(lu,{size:24})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("p",{className:"stat-label",children:"Total"}),s.jsx("p",{className:"stat-value",children:o.total})]})]})]}),r.length>0&&s.jsxs("div",{className:"expiring-section",children:[s.jsx("h2",{children:"⚠️ Documentos por Vencer (30 días)"}),s.jsx("div",{className:"expiring-list",children:r.map(y=>{const f=D(y.expiration_date),x=f<0;return s.jsxs("div",{className:`expiring-card ${x?"expired":""}`,children:[s.jsxs("div",{className:"expiring-header",children:[s.jsxs("div",{className:"doc-info",children:[s.jsx("strong",{children:y.document_type}),s.jsxs("span",{className:"entity-info",children:[y.entity_type==="courier"?"👤":"🚗"," ",y.entity_identifier]})]}),s.jsx("span",{className:`days-badge ${x?"expired":f<=7?"urgent":""}`,children:x?"VENCIDO":`${f} días`})]}),s.jsxs("div",{className:"expiring-body",children:[y.document_number&&s.jsxs("p",{children:["Número: ",y.document_number]}),s.jsxs("p",{children:["Vence: ",new Date(y.expiration_date).toLocaleDateString("es-CR")]})]})]},y.id)})})]}),s.jsx("div",{className:"filters",children:s.jsxs("select",{value:h,onChange:y=>g(y.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"valid",children:"Válidos"}),s.jsx("option",{value:"expiring_soon",children:"Por Vencer"}),s.jsx("option",{value:"expired",children:"Vencidos"})]})}),s.jsxs("div",{className:"documents-list",children:[s.jsx("h2",{children:"Todos los Documentos"}),c?s.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(lu,{size:48}),s.jsx("h3",{children:"No hay documentos"}),s.jsx("p",{children:"No se encontraron documentos con los filtros seleccionados"})]}):s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Tipo"}),s.jsx("th",{children:"Entidad"}),s.jsx("th",{children:"Número"}),s.jsx("th",{children:"Emisión"}),s.jsx("th",{children:"Vencimiento"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Notas"})]})}),s.jsx("tbody",{children:t.map(y=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:y.document_type})}),s.jsxs("td",{children:[s.jsx("span",{className:"entity-badge",children:y.entity_type==="courier"?"👤 Courier":"🚗 Vehículo"}),s.jsx("br",{}),s.jsx("small",{children:y.entity_identifier})]}),s.jsx("td",{children:y.document_number||"-"}),s.jsx("td",{children:y.issue_date?new Date(y.issue_date).toLocaleDateString("es-CR"):"-"}),s.jsx("td",{children:y.expiration_date?s.jsx("span",{className:y.status==="expired"?"expired-date":"",children:new Date(y.expiration_date).toLocaleDateString("es-CR")}):"-"}),s.jsx("td",{children:s.jsxs("span",{className:`status-badge status-${y.status}`,children:[_(y.status),T(y.status)]})}),s.jsx("td",{children:y.notes||"-"})]},y.id))})]})})]}),s.jsx("style",{children:`
                .documents-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-card.alert { border: 2px solid #fef3c7; }
                .stat-card.alert-danger { border: 2px solid #fee2e2; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .expiring-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .expiring-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .expiring-list { display: flex; flex-direction: column; gap: 12px; }
                .expiring-card { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; border-radius: 8px; }
                .expiring-card.expired { background: #fee2e2; border-left-color: #dc2626; }
                .expiring-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
                .doc-info { display: flex; flex-direction: column; gap: 4px; }
                .doc-info strong { color: #1f2937; }
                .entity-info { font-size: 13px; color: #6b7280; }
                .days-badge { padding: 4px 12px; background: white; border-radius: 12px; font-size: 12px; font-weight: 600; color: #d97706; }
                .days-badge.urgent { color: #dc2626; }
                .days-badge.expired { background: #dc2626; color: white; }
                .expiring-body p { margin: 4px 0; color: #374151; font-size: 13px; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .documents-list { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .documents-list h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                td small { color: #6b7280; font-size: 12px; }
                tbody tr:hover { background: #f9fafb; }
                
                .entity-badge { padding: 4px 8px; background: #f3f4f6; border-radius: 6px; font-size: 12px; font-weight: 500; }
                .expired-date { color: #dc2626; font-weight: 600; }
                
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-valid { background: #d1fae5; color: #065f46; }
                .status-badge.status-expiring_soon { background: #fef3c7; color: #92400e; }
                .status-badge.status-expired { background: #fee2e2; color: #991b1b; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},TE=()=>s.jsxs("div",{className:"loading-page",children:[s.jsxs("div",{className:"loading-container",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("h2",{children:"Cargando..."}),s.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),s.jsx("style",{children:`
        .loading-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .loading-container {
          text-align: center;
          color: white;
        }
        
        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          margin: 0 auto 20px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        h2 {
          font-size: 24px;
          margin-bottom: 8px;
        }
        
        p {
          opacity: 0.8;
        }
      `})]}),IE=({message:e})=>s.jsxs("div",{className:"error-page",children:[s.jsxs("div",{className:"error-container",children:[s.jsx("div",{className:"error-icon",children:s.jsx(ni,{size:64})}),s.jsx("h1",{children:"No se pudo cargar"}),s.jsx("p",{className:"error-message",children:e}),s.jsxs("div",{className:"error-actions",children:[s.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),s.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),s.jsx("style",{children:`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          font-family: system-ui, -apple-system, sans-serif;
        }
        
        .error-container {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          max-width: 400px;
        }
        
        .error-icon {
          color: #dc2626;
          margin-bottom: 20px;
        }
        
        h1 {
          font-size: 24px;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .error-message {
          color: #6b7280;
          margin-bottom: 24px;
        }
        
        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        
        .btn-retry {
          padding: 10px 20px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background 0.2s;
        }
        
        .btn-retry:hover {
          background: #2563eb;
        }
        
        .btn-home {
          padding: 10px 20px;
          color: #6b7280;
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.2s;
        }
        
        .btn-home:hover {
          background: #f3f4f6;
        }
      `})]}),PE=()=>{var N,R;const{tenant:e}=Oe(),[t,n]=P.useState([]),[r,i]=P.useState(!0),[o,l]=P.useState(""),[c,u]=P.useState(!1),[h,g]=P.useState(null),[m,w]=P.useState(null),[E,_]=P.useState(""),[T,D]=P.useState(""),y=((N=e==null?void 0:e.plan)==null?void 0:N.id)==="enterprise",f=((R=e==null?void 0:e.branding)==null?void 0:R.primary_color)||"#3b82f6";P.useEffect(()=>{x()},[]);const x=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(I){console.error("Error fetching domains:",I)}finally{i(!1)}},C=async I=>{if(I.preventDefault(),!!o.trim()){u(!0),_("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:o})}),xe=await S.json();if(!S.ok)throw new Error(xe.error||"Error agregando dominio");n([...t,xe.domain]),g(xe.dns_instructions),l(""),D("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){_(S.message)}finally{u(!1)}}},A=async I=>{w(I),_("");try{const xe=await(await fetch(`/api/domains/${I}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();xe.verified?(D("DNS verificado. El SSL se está configurando."),x()):_(xe.message)}catch{_("Error verificando DNS")}finally{w(null)}},z=async I=>{try{await fetch(`/api/domains/${I}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),D("Dominio establecido como principal"),x()}catch{_("Error estableciendo dominio principal")}},j=async I=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${I}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==I)),D("Dominio eliminado")}catch{_("Error eliminando dominio")}},b=I=>{navigator.clipboard.writeText(I),D("Copiado al portapapeles"),setTimeout(()=>D(""),2e3)},k=I=>{switch(I){case"active":return s.jsxs("span",{className:"badge success",children:[s.jsx(Dt,{size:14})," Activo"]});case"provisioning":return s.jsxs("span",{className:"badge warning",children:[s.jsx(bs,{size:14})," Configurando SSL"]});case"pending":return s.jsxs("span",{className:"badge pending",children:[s.jsx(fr,{size:14})," Pendiente verificación"]});case"failed":return s.jsxs("span",{className:"badge danger",children:[s.jsx(fr,{size:14})," Error"]});default:return null}};return y?s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("header",{className:"page-header",children:[s.jsx("h1",{children:"Configuración White Label"}),s.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),E&&s.jsx("div",{className:"alert error",children:E}),T&&s.jsx("div",{className:"alert success",children:T}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsxs("h3",{children:[s.jsx(ri,{size:20})," Dominios"]})}),s.jsxs("div",{className:"card-content",children:[s.jsx("div",{className:"domains-list",children:t.map(I=>s.jsxs("div",{className:"domain-row",children:[s.jsxs("div",{className:"domain-info",children:[s.jsxs("div",{className:"domain-name",children:[I.is_primary&&s.jsx(uu,{size:16,className:"primary-star"}),I.domain,I.domain_type==="subdomain"&&s.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),k(I.ssl_status)]}),s.jsxs("div",{className:"domain-actions",children:[I.ssl_status==="pending"&&s.jsx("button",{onClick:()=>A(I.id),disabled:m===I.id,className:"btn-action",children:m===I.id?s.jsx($k,{size:16,className:"spin"}):"Verificar DNS"}),I.ssl_status==="active"&&!I.is_primary&&s.jsxs("button",{onClick:()=>z(I.id),className:"btn-action",children:[s.jsx(uu,{size:16})," Hacer principal"]}),I.domain_type==="custom"&&s.jsx("button",{onClick:()=>j(I.id),className:"btn-delete",children:s.jsx(bv,{size:16})}),s.jsx("a",{href:`https://${I.domain}`,target:"_blank",className:"btn-action",children:s.jsx(Rd,{size:16})})]})]},I.id))}),s.jsxs("form",{onSubmit:C,className:"add-domain-form",children:[s.jsx("input",{type:"text",placeholder:"miempresa.com",value:o,onChange:I=>l(I.target.value)}),s.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[s.jsx(ii,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&s.jsxs("div",{className:"card instructions-card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Configuración DNS"})}),s.jsxs("div",{className:"card-content",children:[s.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),s.jsxs("div",{className:"dns-record",children:[s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Tipo"}),s.jsx("span",{children:h.type})]}),s.jsxs("div",{className:"dns-field",children:[s.jsx("label",{children:"Nombre"}),s.jsx("span",{children:h.name}),s.jsx("button",{onClick:()=>b(h.name),className:"copy-btn",children:s.jsx(Ff,{size:14})})]}),s.jsxs("div",{className:"dns-field wide",children:[s.jsx("label",{children:"Valor"}),s.jsx("span",{children:h.value}),s.jsx("button",{onClick:()=>b(h.value),className:"copy-btn",children:s.jsx(Ff,{size:14})})]})]}),s.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),s.jsx("style",{children:Hf(f)})]}):s.jsxs("div",{className:"white-label-settings",children:[s.jsxs("div",{className:"upgrade-notice",children:[s.jsx(ri,{size:48}),s.jsx("h2",{children:"White Label disponible en Enterprise"}),s.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),s.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),s.jsx("style",{children:Hf(f)})]})},Hf=e=>`
  .white-label-settings {
    padding: 32px;
    max-width: 900px;
    margin: 0 auto;
    font-family: system-ui, sans-serif;
  }

  .page-header {
    margin-bottom: 32px;
  }

  .page-header h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1f2937;
  }

  .page-header p {
    color: #6b7280;
    margin-top: 4px;
  }

  .alert {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 14px;
  }

  .alert.error {
    background: #fef2f2;
    color: #dc2626;
  }

  .alert.success {
    background: #f0fdf4;
    color: #16a34a;
  }

  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    margin-bottom: 24px;
  }

  .card-header {
    padding: 20px 24px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-header h3 {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-content {
    padding: 24px;
  }

  .domains-list {
    margin-bottom: 24px;
  }

  .domain-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .domain-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .domain-name {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .primary-star {
    color: #f59e0b;
  }

  .subdomain-badge {
    font-size: 11px;
    background: #f3f4f6;
    padding: 2px 8px;
    border-radius: 4px;
    color: #6b7280;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 500;
  }

  .badge.success {
    background: #dcfce7;
    color: #16a34a;
  }

  .badge.warning {
    background: #fef3c7;
    color: #d97706;
  }

  .badge.pending {
    background: #f3f4f6;
    color: #6b7280;
  }

  .badge.danger {
    background: #fef2f2;
    color: #dc2626;
  }

  .domain-actions {
    display: flex;
    gap: 8px;
  }

  .btn-action {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: #f3f4f6;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    text-decoration: none;
    color: #374151;
    transition: background 0.2s;
  }

  .btn-action:hover {
    background: #e5e7eb;
  }

  .btn-delete {
    background: none;
    border: none;
    color: #dc2626;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
  }

  .btn-delete:hover {
    background: #fef2f2;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .add-domain-form {
    display: flex;
    gap: 12px;
  }

  .add-domain-form input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 15px;
  }

  .add-domain-form input:focus {
    outline: none;
    border-color: ${e};
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .btn-primary {
    background: ${e};
    color: white;
  }

  .btn-primary:hover {
    opacity: 0.9;
  }

  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .instructions-card .instructions-intro {
    margin-bottom: 16px;
    color: #6b7280;
  }

  .dns-record {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background: #f9fafb;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .dns-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .dns-field.wide {
    flex: 1;
    min-width: 200px;
  }

  .dns-field label {
    font-size: 12px;
    color: #6b7280;
    text-transform: uppercase;
  }

  .dns-field span {
    font-family: monospace;
    background: white;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
  }

  .copy-btn {
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 4px;
    margin-left: 8px;
  }

  .copy-btn:hover {
    color: ${e};
  }

  .dns-note {
    font-size: 13px;
    color: #6b7280;
    font-style: italic;
  }

  .upgrade-notice {
    text-align: center;
    padding: 60px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .upgrade-notice svg {
    color: #9ca3af;
    margin-bottom: 20px;
  }

  .upgrade-notice h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .upgrade-notice p {
    color: #6b7280;
    margin-bottom: 24px;
  }
`,RE=()=>{const[e,t]=P.useState(null),[n,r]=P.useState(!0);P.useEffect(()=>{i()},[]);const i=async()=>{try{const u=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(u)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return s.jsx("div",{className:"loading",children:"Cargando dashboard..."});const o=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return s.jsxs("div",{className:"super-admin-dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsxs("div",{children:[s.jsx("h1",{children:"Super Admin Dashboard"}),s.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),s.jsx("div",{className:"header-actions",children:s.jsxs(Ae,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(ii,{size:20}),"Nuevo Tenant"]})})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card primary",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(ya,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),s.jsxs("div",{className:"stat-card success",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Os,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),s.jsx("div",{className:"stat-label",children:"Activas"}),s.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),s.jsxs("div",{className:"stat-card warning",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(ws,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:o((e==null?void 0:e.summary.mrr)||0)}),s.jsx("div",{className:"stat-label",children:"MRR"}),s.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),s.jsxs("div",{className:"stat-card danger",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(Hk,{size:28})}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),s.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),s.jsxs("div",{className:"content-grid",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Empresas Recientes"}),s.jsx(Ae,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>s.jsxs("div",{className:"tenant-row",children:[s.jsx("div",{className:"tenant-avatar",children:c.logo_url?s.jsx("img",{src:c.logo_url,alt:c.name}):s.jsx("span",{children:c.name.charAt(0)})}),s.jsxs("div",{className:"tenant-info",children:[s.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),s.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),s.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),s.jsx("div",{className:"tenant-plan",children:c.plan_id}),s.jsx(Ae,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:s.jsx(mv,{size:18})})]},c.id))})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Ingresos Mensuales"}),s.jsx(ba,{size:20,className:"success"})]}),s.jsx("div",{className:"card-content chart-container",children:s.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,u)=>s.jsxs("div",{className:"chart-bar",children:[s.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),s.jsx("span",{className:"bar-label",children:c.month}),s.jsx("span",{className:"bar-value",children:o(c.revenue)})]},u))})})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Por Plan"})}),s.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,u)=>s.jsxs("div",{className:"distribution-row",children:[s.jsx("span",{className:"dist-label",children:c.plan_id}),s.jsx("div",{className:"dist-bar",children:s.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][u%4]}})}),s.jsx("span",{className:"dist-count",children:c.count})]},u))})]}),s.jsxs("div",{className:"card small",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Acciones Rápidas"})}),s.jsxs("div",{className:"card-content quick-actions",children:[s.jsxs(Ae,{to:"/super-admin/tenants",className:"quick-action",children:[s.jsx(ya,{size:24}),s.jsx("span",{children:"Gestionar Empresas"})]}),s.jsxs(Ae,{to:"/super-admin/subscriptions",className:"quick-action",children:[s.jsx(ws,{size:24}),s.jsx("span",{children:"Ver Suscripciones"})]}),s.jsxs(Ae,{to:"/super-admin/plans",className:"quick-action",children:[s.jsx(ba,{size:24}),s.jsx("span",{children:"Configurar Planes"})]})]})]})]}),s.jsx("style",{children:`
        .super-admin-dashboard {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #1e293b;
        }

        .dashboard-header h1 {
          font-size: 28px;
          font-weight: 700;
        }

        .dashboard-header p {
          color: #64748b;
          margin-top: 4px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 24px 32px;
        }

        @media (max-width: 1200px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-card {
          background: #1e293b;
          padding: 24px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-card.primary .stat-icon { background: #3b82f620; color: #3b82f6; }
        .stat-card.success .stat-icon { background: #10b98120; color: #10b981; }
        .stat-card.warning .stat-icon { background: #f59e0b20; color: #f59e0b; }
        .stat-card.danger .stat-icon { background: #ef444420; color: #ef4444; }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 14px;
        }

        .stat-sub {
          color: #64748b;
          font-size: 12px;
          margin-top: 2px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
          padding: 0 32px 32px;
        }

        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; }
        }

        .card {
          background: #1e293b;
          border-radius: 16px;
          overflow: hidden;
        }

        .card.small {
          max-height: 300px;
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #334155;
        }

        .card-header h3 {
          font-size: 18px;
          font-weight: 600;
        }

        .link {
          color: #3b82f6;
          font-size: 14px;
          text-decoration: none;
        }

        .success { color: #10b981; }

        .card-content {
          padding: 16px 24px;
        }

        .tenant-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid #334155;
        }

        .tenant-row:last-child {
          border-bottom: none;
        }

        .tenant-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          overflow: hidden;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tenant-info {
          flex: 1;
        }

        .tenant-name {
          font-weight: 500;
        }

        .tenant-subdomain {
          font-size: 12px;
          color: #64748b;
        }

        .tenant-status {
          font-size: 12px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .tenant-plan {
          font-size: 12px;
          color: #94a3b8;
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          text-transform: capitalize;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #334155;
        }

        .chart-container {
          height: 200px;
        }

        .simple-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 100%;
          gap: 8px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          height: 100%;
        }

        .bar {
          width: 100%;
          border-radius: 4px 4px 0 0;
          min-height: 4px;
          margin-top: auto;
        }

        .bar-label {
          font-size: 11px;
          color: #64748b;
          margin-top: 8px;
        }

        .bar-value {
          font-size: 10px;
          color: #94a3b8;
        }

        .distribution-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 0;
        }

        .dist-label {
          width: 80px;
          font-size: 14px;
          text-transform: capitalize;
        }

        .dist-bar {
          flex: 1;
          height: 8px;
          background: #334155;
          border-radius: 4px;
          overflow: hidden;
        }

        .dist-fill {
          height: 100%;
          border-radius: 4px;
        }

        .dist-count {
          width: 30px;
          text-align: right;
          font-weight: 600;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quick-action {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #334155;
          border-radius: 8px;
          color: #f1f5f9;
          text-decoration: none;
          transition: background 0.2s;
        }

        .quick-action:hover {
          background: #475569;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #94a3b8;
        }
      `})]})},AE=()=>{const e=_t(),[t,n]=P.useState([]),[r,i]=P.useState({page:1,limit:20,total:0,pages:0}),[o,l]=P.useState(!0),[c,u]=P.useState(""),[h,g]=P.useState(""),[m,w]=P.useState(null);P.useEffect(()=>{E()},[r.page,h]);const E=async()=>{try{l(!0);const x=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),A=await(await fetch(`/api/super-admin/tenants?${x}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(A.tenants),i(A.pagination)}catch(x){console.error("Error fetching tenants:",x)}finally{l(!1)}},_=x=>{x.preventDefault(),i({...r,page:1}),E()},T=async x=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${x}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),E()}catch(C){console.error("Error suspending tenant:",C)}},D=async x=>{try{await fetch(`/api/super-admin/tenants/${x}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),E()}catch(C){console.error("Error activating tenant:",C)}},y=x=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[x]||"bg-blue"}`,f=x=>new Date(x).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return s.jsxs("div",{className:"tenants-management",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(Ae,{to:"/super-admin",className:"back-link",children:s.jsx(au,{size:20})}),s.jsxs("div",{children:[s.jsx("h1",{children:"Gestión de Empresas"}),s.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),s.jsxs(Ae,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[s.jsx(ii,{size:20}),"Nueva Empresa"]})]}),s.jsxs("div",{className:"filters-bar",children:[s.jsxs("form",{onSubmit:_,className:"search-box",children:[s.jsx(Wa,{size:20}),s.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:x=>u(x.target.value)})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx(Ok,{size:18}),s.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[s.jsx("option",{value:"",children:"Todos los estados"}),s.jsx("option",{value:"active",children:"Activos"}),s.jsx("option",{value:"trial",children:"En prueba"}),s.jsx("option",{value:"suspended",children:"Suspendidos"}),s.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),s.jsx("div",{className:"table-container",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Empresa"}),s.jsx("th",{children:"Subdominio"}),s.jsx("th",{children:"Plan"}),s.jsx("th",{children:"Estado"}),s.jsx("th",{children:"Creado"}),s.jsx("th",{children:"Acciones"})]})}),s.jsx("tbody",{children:o?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(x=>{var C,A,z;return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"tenant-cell",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((C=x.branding)==null?void 0:C.primary_color)||"#3b82f6"},children:(A=x.branding)!=null&&A.logo_url?s.jsx("img",{src:x.branding.logo_url,alt:""}):x.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("div",{className:"tenant-name",children:((z=x.branding)==null?void 0:z.company_name)||x.name}),s.jsxs("div",{className:"tenant-id",children:[x.id.slice(0,8),"..."]})]})]})}),s.jsx("td",{children:s.jsxs("a",{href:`https://${x.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[x.subdomain,s.jsx(Rd,{size:14})]})}),s.jsx("td",{children:s.jsx("span",{className:"plan-badge",children:x.plan_id})}),s.jsx("td",{children:s.jsx("span",{className:y(x.status),children:x.status})}),s.jsx("td",{children:f(x.created_at)}),s.jsx("td",{children:s.jsxs("div",{className:"actions-cell",children:[s.jsx("button",{onClick:()=>e(`/super-admin/tenants/${x.id}`),className:"action-btn",title:"Ver detalles",children:s.jsx(mv,{size:18})}),x.status==="active"?s.jsx("button",{onClick:()=>T(x.id),className:"action-btn danger",title:"Suspender",children:s.jsx(xv,{size:18})}):x.status==="suspended"&&s.jsx("button",{onClick:()=>D(x.id),className:"action-btn success",title:"Activar",children:s.jsx(vv,{size:18})})]})})]},x.id)})})]})}),r.pages>1&&s.jsxs("div",{className:"pagination",children:[s.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[s.jsx(au,{size:18}),"Anterior"]}),s.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),s.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",s.jsx(Pk,{size:18})]})]}),s.jsx("style",{children:`
        .tenants-management {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .page-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #1e293b;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .back-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
          border-radius: 10px;
          color: #94a3b8;
          transition: background 0.2s;
        }

        .back-link:hover {
          background: #334155;
        }

        .page-header h1 {
          font-size: 24px;
          font-weight: 700;
        }

        .page-header p {
          color: #64748b;
          font-size: 14px;
          margin-top: 2px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        .filters-bar {
          padding: 16px 32px;
          display: flex;
          gap: 16px;
          border-bottom: 1px solid #1e293b;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1e293b;
          padding: 0 16px;
          border-radius: 10px;
          max-width: 400px;
        }

        .search-box input {
          flex: 1;
          background: none;
          border: none;
          color: #f1f5f9;
          padding: 12px 0;
          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #64748b;
        }

        .search-box svg {
          color: #64748b;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1e293b;
          padding: 0 16px;
          border-radius: 10px;
        }

        .filter-group svg {
          color: #64748b;
        }

        .filter-group select {
          background: none;
          border: none;
          color: #f1f5f9;
          padding: 12px 0;
          font-size: 14px;
          cursor: pointer;
        }

        .table-container {
          padding: 0 32px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 16px;
          color: #64748b;
          font-weight: 500;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #1e293b;
        }

        td {
          padding: 16px;
          border-bottom: 1px solid #1e293b;
        }

        .loading-cell, .empty-cell {
          text-align: center;
          color: #64748b;
          padding: 48px;
        }

        .tenant-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .tenant-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          overflow: hidden;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tenant-name {
          font-weight: 500;
        }

        .tenant-id {
          font-size: 12px;
          color: #64748b;
          font-family: monospace;
        }

        .subdomain-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #3b82f6;
          text-decoration: none;
        }

        .subdomain-link:hover {
          text-decoration: underline;
        }

        .plan-badge {
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          text-transform: capitalize;
        }

        .status-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .bg-green { background: #10b98120; color: #10b981; }
        .bg-yellow { background: #f59e0b20; color: #f59e0b; }
        .bg-red { background: #ef444420; color: #ef4444; }
        .bg-gray { background: #64748b20; color: #64748b; }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border: none;
          background: #334155;
          border-radius: 6px;
          color: #94a3b8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .action-btn:hover {
          background: #475569;
        }

        .action-btn.danger:hover {
          background: #ef4444;
          color: white;
        }

        .action-btn.success:hover {
          background: #10b981;
          color: white;
        }

        .pagination {
          padding: 24px 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }

        .pagination button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #1e293b;
          border: none;
          border-radius: 8px;
          color: #f1f5f9;
          cursor: pointer;
          transition: background 0.2s;
        }

        .pagination button:hover:not(:disabled) {
          background: #334155;
        }

        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination span {
          color: #64748b;
          font-size: 14px;
        }
      `})]})},DE=()=>{const{id:e}=lx();_t();const[t,n]=P.useState(null),[r,i]=P.useState(!0),[o,l]=P.useState(!1),[c,u]=P.useState({name:"",plan_id:""});P.useEffect(()=>{h()},[e]);const h=async()=>{try{const _=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(_),u({name:_.name,plan_id:_.plan_id})}catch(E){console.error("Error fetching tenant:",E)}finally{i(!1)}},g=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(E){console.error("Error updating tenant:",E)}},m=async E=>{if(confirm(E==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${E}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(T){console.error("Error changing status:",T)}},w=E=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[E]||"#3b82f6";return r?s.jsx("div",{className:"loading-page",children:"Cargando..."}):t?s.jsxs("div",{className:"tenant-detail",children:[s.jsxs("header",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx(Ae,{to:"/super-admin/tenants",className:"back-link",children:s.jsx(au,{size:20})}),s.jsxs("div",{className:"tenant-header",children:[s.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?s.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("h1",{children:t.branding.company_name||t.name}),s.jsxs("div",{className:"tenant-meta",children:[s.jsx("span",{className:"status-dot",style:{backgroundColor:w(t.status)}}),s.jsx("span",{children:t.status}),s.jsx("span",{className:"separator",children:"•"}),s.jsx("span",{children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[s.jsx(Rd,{size:18}),"Visitar"]}),t.status==="active"?s.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[s.jsx(xv,{size:18}),"Suspender"]}):t.status==="suspended"&&s.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[s.jsx(vv,{size:18}),"Activar"]})]})]}),s.jsxs("div",{className:"detail-content",children:[s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("h3",{children:"Información General"}),o?s.jsxs("button",{onClick:g,className:"btn btn-primary btn-sm",children:[s.jsx(yv,{size:16}),"Guardar"]}):s.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:s.jsx(Ha,{size:18})})]}),s.jsxs("div",{className:"card-content info-grid",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(ya,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Nombre"}),o?s.jsx("input",{value:c.name,onChange:E=>u({...c,name:E.target.value})}):s.jsx("span",{children:t.name})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ri,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Subdominio"}),s.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Ad,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Email"}),s.jsx("span",{children:t.branding.contact_email||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Uk,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Teléfono"}),s.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ou,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Creado"}),s.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(Rk,{size:18}),s.jsxs("div",{children:[s.jsx("label",{children:"Plan"}),o?s.jsxs("select",{value:c.plan_id,onChange:E=>u({...c,plan_id:E.target.value}),children:[s.jsx("option",{value:"trial",children:"Trial"}),s.jsx("option",{value:"starter",children:"Starter"}),s.jsx("option",{value:"professional",children:"Professional"}),s.jsx("option",{value:"enterprise",children:"Enterprise"})]}):s.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Uso del Servicio"})}),s.jsxs("div",{className:"card-content usage-grid",children:[s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Os,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.users}),s.jsx("div",{className:"usage-label",children:"Usuarios"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(en,{size:24})}),s.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),s.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),s.jsxs("div",{className:"usage-item",children:[s.jsx("div",{className:"usage-icon",children:s.jsx(Lk,{size:24})}),s.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),s.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Dominios"})}),s.jsx("div",{className:"card-content",children:t.domains.length===0?s.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((E,_)=>s.jsxs("div",{className:"domain-row",children:[s.jsx(ri,{size:16}),s.jsx("span",{children:E.domain}),E.is_primary&&s.jsx("span",{className:"badge primary",children:"Principal"}),s.jsxs("span",{className:`badge ${E.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",E.ssl_status]})]},_))})]}),t.subscription&&s.jsxs("div",{className:"card",children:[s.jsx("div",{className:"card-header",children:s.jsx("h3",{children:"Suscripción"})}),s.jsx("div",{className:"card-content",children:s.jsxs("div",{className:"subscription-info",children:[s.jsxs("div",{children:[s.jsx("label",{children:"Estado"}),s.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),s.jsxs("div",{children:[s.jsx("label",{children:"Próximo cobro"}),s.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),s.jsx("style",{children:`
        .tenant-detail {
          min-height: 100vh;
          background: #0f172a;
          color: #f1f5f9;
          font-family: system-ui, sans-serif;
        }

        .page-header {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #1e293b;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .back-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1e293b;
          border-radius: 10px;
          color: #94a3b8;
        }

        .tenant-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .tenant-avatar {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .tenant-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        h1 { font-size: 24px; }

        .tenant-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 14px;
          margin-top: 4px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .separator { color: #334155; }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-primary { background: #3b82f6; color: white; }
        .btn-secondary { background: #334155; color: #f1f5f9; }
        .btn-danger { background: #ef4444; color: white; }
        .btn-success { background: #10b981; color: white; }
        .btn-sm { padding: 6px 12px; font-size: 14px; }

        .btn-icon {
          width: 36px;
          height: 36px;
          background: #334155;
          border: none;
          border-radius: 8px;
          color: #94a3b8;
          cursor: pointer;
        }

        .detail-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          padding: 32px;
        }

        @media (max-width: 900px) {
          .detail-content { grid-template-columns: 1fr; }
        }

        .card {
          background: #1e293b;
          border-radius: 16px;
        }

        .card-header {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #334155;
        }

        .card-header h3 { font-size: 16px; }

        .card-content { padding: 20px 24px; }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .info-item svg { color: #64748b; margin-top: 2px; }
        .info-item label { display: block; font-size: 12px; color: #64748b; }
        .info-item span { display: block; margin-top: 2px; }
        .info-item input, .info-item select {
          background: #0f172a;
          border: 1px solid #334155;
          padding: 8px;
          border-radius: 6px;
          color: #f1f5f9;
          width: 100%;
          margin-top: 4px;
        }

        .usage-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .usage-item { text-align: center; }
        .usage-icon { color: #3b82f6; margin-bottom: 8px; }
        .usage-value { font-size: 28px; font-weight: 700; }
        .usage-label { font-size: 13px; color: #64748b; }

        .domain-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #334155;
        }

        .domain-row:last-child { border-bottom: none; }

        .badge {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .badge.success { background: #10b98120; color: #10b981; }
        .badge.warning { background: #f59e0b20; color: #f59e0b; }
        .badge.primary { background: #3b82f620; color: #3b82f6; }

        .plan-badge {
          background: #334155;
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          text-transform: capitalize;
        }

        .empty-text { color: #64748b; font-style: italic; }

        .subscription-info {
          display: flex;
          gap: 32px;
        }

        .subscription-info label {
          display: block;
          font-size: 12px;
          color: #64748b;
          margin-bottom: 4px;
        }

        .loading-page, .error-page {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #64748b;
        }
      `})]}):s.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},OE=()=>{const{tenant:e,loading:t,error:n}=Oe(),r=un(),o=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&o?s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(se,{path:"/",element:s.jsx(Xk,{})}),s.jsx(se,{path:"/register",element:s.jsx(Yk,{})}),s.jsx(se,{path:"/onboarding",element:s.jsx(Jk,{})}),s.jsx(se,{path:"*",element:s.jsx(Io,{to:"/",replace:!0})})]})}):t?s.jsx(TE,{}):n&&!l?s.jsx(IE,{message:n}):s.jsx(Ck,{children:s.jsx("div",{className:"app",children:s.jsxs(Kp,{children:[s.jsx(se,{path:"/login",element:s.jsx(Qk,{})}),s.jsx(se,{path:"/dashboard",element:s.jsx(Pe,{children:s.jsx(Zk,{})})}),s.jsx(se,{path:"/packages",element:s.jsx(Pe,{children:s.jsx(eE,{})})}),s.jsx(se,{path:"/packages/new",element:s.jsx(Pe,{children:s.jsx(tE,{})})}),s.jsx(se,{path:"/packages/:id",element:s.jsx(Pe,{children:s.jsx(bE,{})})}),s.jsx(se,{path:"/clients",element:s.jsx(Pe,{children:s.jsx(wE,{})})}),s.jsx(se,{path:"/couriers",element:s.jsx(Pe,{children:s.jsx(_E,{})})}),s.jsx(se,{path:"/rates",element:s.jsx(Pe,{children:s.jsx(jE,{})})}),s.jsx(se,{path:"/incidents",element:s.jsx(Pe,{children:s.jsx(kE,{})})}),s.jsx(se,{path:"/fuel",element:s.jsx(Pe,{children:s.jsx(EE,{})})}),s.jsx(se,{path:"/vehicles",element:s.jsx(Pe,{children:s.jsx(SE,{})})}),s.jsx(se,{path:"/maintenance",element:s.jsx(Pe,{children:s.jsx(NE,{})})}),s.jsx(se,{path:"/documents",element:s.jsx(Pe,{children:s.jsx(CE,{})})}),s.jsx(se,{path:"/account/white-label",element:s.jsx(Pe,{children:s.jsx(PE,{})})}),s.jsx(se,{path:"/super-admin",element:s.jsx(Pe,{children:s.jsx(RE,{})})}),s.jsx(se,{path:"/super-admin/tenants",element:s.jsx(Pe,{children:s.jsx(AE,{})})}),s.jsx(se,{path:"/super-admin/tenants/:id",element:s.jsx(Pe,{children:s.jsx(DE,{})})}),s.jsx(se,{path:"/",element:s.jsx(Io,{to:"/dashboard",replace:!0})}),s.jsx(se,{path:"*",element:s.jsx(Io,{to:"/dashboard",replace:!0})})]})})})};tc.createRoot(document.getElementById("root")).render(s.jsx(yu.StrictMode,{children:s.jsx(R2,{children:s.jsx(U2,{children:s.jsx(OE,{})})})}));
//# sourceMappingURL=index-BgvLh1qs.js.map
