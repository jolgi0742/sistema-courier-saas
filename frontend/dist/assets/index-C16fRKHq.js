function o0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var a0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qf={exports:{}},ka={},Kf={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),l0=Symbol.for("react.portal"),c0=Symbol.for("react.fragment"),u0=Symbol.for("react.strict_mode"),d0=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),f0=Symbol.for("react.forward_ref"),g0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),x0=Symbol.for("react.lazy"),Ah=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=Ah&&e[Ah]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Yf={};function ci(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Gf}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jf(){}Jf.prototype=ci.prototype;function mu(e,t,n){this.props=e,this.context=t,this.refs=Yf,this.updater=n||Gf}var xu=mu.prototype=new Jf;xu.constructor=mu;Xf(xu,ci.prototype);xu.isPureReactComponent=!0;var Dh=Array.isArray,Qf=Object.prototype.hasOwnProperty,vu={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,s={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Qf.call(t,r)&&!Zf.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];s.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:Es,type:e,key:o,ref:l,props:s,_owner:vu.current}}function y0(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function yu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lh=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function wo(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Es:case l0:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+yl(l,0):r,Dh(s)?(n="",e!=null&&(n=e.replace(Lh,"$&/")+"/"),wo(s,t,n,"",function(h){return h})):s!=null&&(yu(s)&&(s=y0(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Lh,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",Dh(e))for(var c=0;c<e.length;c++){o=e[c];var u=r+yl(o,c);l+=wo(o,t,n,u,s)}else if(u=v0(e),typeof u=="function")for(e=u.call(e),c=0;!(o=e.next()).done;)o=o.value,u=r+yl(o,c++),l+=wo(o,t,n,u,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function eo(e,t,n){if(e==null)return e;var r=[],s=0;return wo(e,r,"","",function(o){return t.call(n,o,s++)}),r}function w0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},_o={transition:null},_0={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:_o,ReactCurrentOwner:vu};function tg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:eo,forEach:function(e,t,n){eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return eo(e,function(){t++}),t},toArray:function(e){return eo(e,function(t){return t})||[]},only:function(e){if(!yu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ci;q.Fragment=c0;q.Profiler=d0;q.PureComponent=mu;q.StrictMode=u0;q.Suspense=g0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;q.act=tg;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xf({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=vu.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Qf.call(t,u)&&!Zf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:Es,type:e.type,key:s,ref:o,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:p0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h0,_context:e},e.Consumer=e};q.createElement=eg;q.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:f0,render:e}};q.isValidElement=yu;q.lazy=function(e){return{$$typeof:x0,_payload:{_status:-1,_result:e},_init:w0}};q.memo=function(e,t){return{$$typeof:m0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=_o.transition;_o.transition={};try{e()}finally{_o.transition=t}};q.unstable_act=tg;q.useCallback=function(e,t){return Be.current.useCallback(e,t)};q.useContext=function(e){return Be.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};q.useEffect=function(e,t){return Be.current.useEffect(e,t)};q.useId=function(){return Be.current.useId()};q.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Be.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};q.useRef=function(e){return Be.current.useRef(e)};q.useState=function(e){return Be.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Be.current.useTransition()};q.version="18.3.1";Kf.exports=q;var I=Kf.exports;const bu=gu(I),j0=o0({__proto__:null,default:bu},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=I,E0=Symbol.for("react.element"),N0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,C0=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,s={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S0.call(t,r)&&!T0.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:E0,type:e,key:o,ref:l,props:s,_owner:C0.current}}ka.Fragment=N0;ka.jsx=ng;ka.jsxs=ng;qf.exports=ka;var i=qf.exports,rc={},rg={exports:{}},it={},ig={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var ae=W-1>>>1,Q=F[ae];if(0<s(Q,H))F[ae]=H,F[W]=Q,W=ae;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var ae=0,Q=F.length,he=Q>>>1;ae<he;){var Ft=2*(ae+1)-1,$t=F[Ft],Bt=Ft+1,Vt=F[Bt];if(0>s($t,W))Bt<Q&&0>s(Vt,$t)?(F[ae]=Vt,F[Bt]=W,ae=Bt):(F[ae]=$t,F[Ft]=W,ae=Ft);else if(Bt<Q&&0>s(Vt,W))F[ae]=Vt,F[Bt]=W,ae=Bt;else break e}}return H}function s(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],h=[],g=1,m=null,w=3,j=!1,_=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(h)}}function T(F){if(P=!1,x(F),!_)if(n(u)!==null)_=!0,gi(E);else{var H=n(h);H!==null&&Ut(T,H.startTime-F)}}function E(F,H){_=!1,P&&(P=!1,y(b),b=-1),j=!0;var W=w;try{for(x(H),m=n(u);m!==null&&(!(m.expirationTime>H)||F&&!A());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,w=m.priorityLevel;var Q=ae(m.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?m.callback=Q:m===n(u)&&r(u),x(H)}else r(u);m=n(u)}if(m!==null)var he=!0;else{var Ft=n(h);Ft!==null&&Ut(T,Ft.startTime-H),he=!1}return he}finally{m=null,w=W,j=!1}}var O=!1,k=null,b=-1,N=5,C=-1;function A(){return!(e.unstable_now()-C<N)}function R(){if(k!==null){var F=e.unstable_now();C=F;var H=!0;try{H=k(!0,F)}finally{H?S():(O=!1,k=null)}}else O=!1}var S;if(typeof f=="function")S=function(){f(R)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Yn=xe.port2;xe.port1.onmessage=R,S=function(){Yn.postMessage(null)}}else S=function(){D(R,0)};function gi(F){k=F,O||(O=!0,S())}function Ut(F,H){b=D(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){_||j||(_=!0,gi(E))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var W=w;w=H;try{return F()}finally{w=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=w;w=F;try{return H()}finally{w=W}},e.unstable_scheduleCallback=function(F,H,W){var ae=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ae+W:ae):W=ae,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:g++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>ae?(F.sortIndex=W,t(h,F),n(u)===null&&F===n(h)&&(P?(y(b),b=-1):P=!0,Ut(T,W-ae))):(F.sortIndex=Q,t(u,F),_||j||(_=!0,gi(E))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var H=w;return function(){var W=w;w=H;try{return F.apply(this,arguments)}finally{w=W}}}})(sg);ig.exports=sg;var I0=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=I,rt=I0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var og=new Set,ns={};function br(e,t){Qr(e,t),Qr(e+"Capture",t)}function Qr(e,t){for(ns[e]=t,e=0;e<t.length;e++)og.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zh={},Oh={};function A0(e){return ic.call(Oh,e)?!0:ic.call(zh,e)?!1:R0.test(e)?Oh[e]=!0:(zh[e]=!0,!1)}function D0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function L0(e,t,n,r){if(t===null||typeof t>"u"||D0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function _u(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wu,_u);Se[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wu,_u);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wu,_u);Se[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ju(e,t,n,r){var s=Se.hasOwnProperty(t)?Se[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(L0(t,n,s,r)&&(n=null),r||s===null?A0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),Tr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),ku=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),ag=Symbol.for("react.provider"),lg=Symbol.for("react.context"),Eu=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),ac=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),xn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),Mh=Symbol.iterator;function Ti(e){return e===null||typeof e!="object"?null:(e=Mh&&e[Mh]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,bl;function Mi(e){if(bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bl=t&&t[1]||""}return`
`+bl+e}var wl=!1;function _l(e,t){if(!e||wl)return"";wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,c=o.length-1;1<=l&&0<=c&&s[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(s[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||s[l]!==o[c]){var u=`
`+s[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mi(e):""}function z0(e){switch(e.tag){case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function lc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ir:return"Fragment";case Tr:return"Portal";case sc:return"Profiler";case ku:return"StrictMode";case oc:return"Suspense";case ac:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lg:return(e.displayName||"Context")+".Consumer";case ag:return(e._context.displayName||"Context")+".Provider";case Eu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nu:return t=e.displayName||null,t!==null?t:lc(e.type)||"Memo";case xn:t=e._payload,e=e._init;try{return lc(e(t))}catch{}}return null}function O0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lc(t);case 8:return t===ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ug(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function M0(e){var t=ug(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=M0(e))}function dg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ug(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cc(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Uh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hg(e,t){t=t.checked,t!=null&&ju(e,"checked",t,!1)}function uc(e,t){hg(e,t);var n=Fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dc(e,t.type,n):t.hasOwnProperty("defaultValue")&&dc(e,t.type,Fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dc(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ui=Array.isArray;function Br(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $h(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ui(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Fn(n)}}function pg(e,t){var n=Fn(t.value),r=Fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ro,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function rs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(e){U0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hi[t]=Hi[e]})});function mg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hi.hasOwnProperty(e)&&Hi[e]?(""+t).trim():t+"px"}function xg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=mg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var F0=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(e,t){if(t){if(F0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function gc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xc=null,Vr=null,Hr=null;function Vh(e){if(e=Cs(e)){if(typeof xc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ta(t),xc(e.stateNode,e.type,t))}}function vg(e){Vr?Hr?Hr.push(e):Hr=[e]:Vr=e}function yg(){if(Vr){var e=Vr,t=Hr;if(Hr=Vr=null,Vh(e),t)for(e=0;e<t.length;e++)Vh(t[e])}}function bg(e,t){return e(t)}function wg(){}var jl=!1;function _g(e,t,n){if(jl)return e(t,n);jl=!0;try{return bg(e,t,n)}finally{jl=!1,(Vr!==null||Hr!==null)&&(wg(),yg())}}function is(e,t){var n=e.stateNode;if(n===null)return null;var r=Ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var vc=!1;if(tn)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{vc=!1}function $0(e,t,n,r,s,o,l,c,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(g){this.onError(g)}}var Wi=!1,Uo=null,Fo=!1,yc=null,B0={onError:function(e){Wi=!0,Uo=e}};function V0(e,t,n,r,s,o,l,c,u){Wi=!1,Uo=null,$0.apply(B0,arguments)}function H0(e,t,n,r,s,o,l,c,u){if(V0.apply(this,arguments),Wi){if(Wi){var h=Uo;Wi=!1,Uo=null}else throw Error(M(198));Fo||(Fo=!0,yc=h)}}function wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hh(e){if(wr(e)!==e)throw Error(M(188))}function W0(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Hh(s),e;if(o===r)return Hh(s),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=s,r=o;else{for(var l=!1,c=s.child;c;){if(c===n){l=!0,n=s,r=o;break}if(c===r){l=!0,r=s,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=s;break}if(c===r){l=!0,r=o,n=s;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function kg(e){return e=W0(e),e!==null?Eg(e):null}function Eg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Eg(e);if(t!==null)return t;e=e.sibling}return null}var Ng=rt.unstable_scheduleCallback,Wh=rt.unstable_cancelCallback,q0=rt.unstable_shouldYield,K0=rt.unstable_requestPaint,fe=rt.unstable_now,G0=rt.unstable_getCurrentPriorityLevel,Cu=rt.unstable_ImmediatePriority,Sg=rt.unstable_UserBlockingPriority,$o=rt.unstable_NormalPriority,X0=rt.unstable_LowPriority,Cg=rt.unstable_IdlePriority,Ea=null,It=null;function Y0(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Z0,J0=Math.log,Q0=Math.LN2;function Z0(e){return e>>>=0,e===0?32:31-(J0(e)/Q0|0)|0}var io=64,so=4194304;function Fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~s;c!==0?r=Fi(c):(o&=l,o!==0&&(r=Fi(o)))}else l=n&~s,l!==0?r=Fi(l):o!==0&&(r=Fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),s=1<<n,r|=e[n],t&=~s;return r}function ey(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ty(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-bt(o),c=1<<l,u=s[l];u===-1?(!(c&n)||c&r)&&(s[l]=ey(c,t)):u<=t&&(e.expiredLanes|=c),o&=~c}}function bc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tg(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ns(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function ny(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-bt(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var J=0;function Ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,Iu,Rg,Ag,Dg,wc=!1,oo=[],Tn=null,In=null,Pn=null,ss=new Map,os=new Map,yn=[],ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":In=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":ss.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(t.pointerId)}}function Pi(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Cs(t),t!==null&&Iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function iy(e,t,n,r,s){switch(t){case"focusin":return Tn=Pi(Tn,e,t,n,r,s),!0;case"dragenter":return In=Pi(In,e,t,n,r,s),!0;case"mouseover":return Pn=Pi(Pn,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return ss.set(o,Pi(ss.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,os.set(o,Pi(os.get(o)||null,e,t,n,r,s)),!0}return!1}function Lg(e){var t=rr(e.target);if(t!==null){var n=wr(t);if(n!==null){if(t=n.tag,t===13){if(t=jg(n),t!==null){e.blockedOn=t,Dg(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_c(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mc=r,n.target.dispatchEvent(r),mc=null}else return t=Cs(n),t!==null&&Iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Kh(e,t,n){jo(e)&&n.delete(t)}function sy(){wc=!1,Tn!==null&&jo(Tn)&&(Tn=null),In!==null&&jo(In)&&(In=null),Pn!==null&&jo(Pn)&&(Pn=null),ss.forEach(Kh),os.forEach(Kh)}function Ri(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,sy)))}function as(e){function t(s){return Ri(s,e)}if(0<oo.length){Ri(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ri(Tn,e),In!==null&&Ri(In,e),Pn!==null&&Ri(Pn,e),ss.forEach(t),os.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Lg(n),n.blockedOn===null&&yn.shift()}var Wr=ln.ReactCurrentBatchConfig,Vo=!0;function oy(e,t,n,r){var s=J,o=Wr.transition;Wr.transition=null;try{J=1,Pu(e,t,n,r)}finally{J=s,Wr.transition=o}}function ay(e,t,n,r){var s=J,o=Wr.transition;Wr.transition=null;try{J=4,Pu(e,t,n,r)}finally{J=s,Wr.transition=o}}function Pu(e,t,n,r){if(Vo){var s=_c(e,t,n,r);if(s===null)Dl(e,t,r,Ho,n),qh(e,r);else if(iy(s,e,t,n,r))r.stopPropagation();else if(qh(e,r),t&4&&-1<ry.indexOf(e)){for(;s!==null;){var o=Cs(s);if(o!==null&&Pg(o),o=_c(e,t,n,r),o===null&&Dl(e,t,r,Ho,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Ho=null;function _c(e,t,n,r){if(Ho=null,e=Su(r),e=rr(e),e!==null)if(t=wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function zg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G0()){case Cu:return 1;case Sg:return 4;case $o:case X0:return 16;case Cg:return 536870912;default:return 16}default:return 16}}var En=null,Ru=null,ko=null;function Og(){if(ko)return ko;var e,t=Ru,n=t.length,r,s="value"in En?En.value:En.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[o-r];r++);return ko=s.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Gh(){return!1}function st(e){function t(n,r,s,o,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ao:Gh,this.isPropagationStopped=Gh,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=st(ui),Ss=ue({},ui,{view:0,detail:0}),ly=st(Ss),El,Nl,Ai,Na=ue({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(El=e.screenX-Ai.screenX,Nl=e.screenY-Ai.screenY):Nl=El=0,Ai=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),Xh=st(Na),cy=ue({},Na,{dataTransfer:0}),uy=st(cy),dy=ue({},Ss,{relatedTarget:0}),Sl=st(dy),hy=ue({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),py=st(hy),fy=ue({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=st(fy),my=ue({},ui,{data:0}),Yh=st(my),xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yy[e])?!!t[e]:!1}function Du(){return by}var wy=ue({},Ss,{key:function(e){if(e.key){var t=xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=st(wy),jy=ue({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=st(jy),ky=ue({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),Ey=st(ky),Ny=ue({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sy=st(Ny),Cy=ue({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=st(Cy),Iy=[9,13,27,32],Lu=tn&&"CompositionEvent"in window,qi=null;tn&&"documentMode"in document&&(qi=document.documentMode);var Py=tn&&"TextEvent"in window&&!qi,Mg=tn&&(!Lu||qi&&8<qi&&11>=qi),Qh=" ",Zh=!1;function Ug(e,t){switch(e){case"keyup":return Iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function Ry(e,t){switch(e){case"compositionend":return Fg(t);case"keypress":return t.which!==32?null:(Zh=!0,Qh);case"textInput":return e=t.data,e===Qh&&Zh?null:e;default:return null}}function Ay(e,t){if(Pr)return e==="compositionend"||!Lu&&Ug(e,t)?(e=Og(),ko=Ru=En=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mg&&t.locale!=="ko"?null:t.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dy[e.type]:t==="textarea"}function $g(e,t,n,r){vg(r),t=Wo(t,"onChange"),0<t.length&&(n=new Au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ki=null,ls=null;function Ly(e){Qg(e,0)}function Sa(e){var t=Dr(e);if(dg(t))return e}function zy(e,t){if(e==="change")return t}var Bg=!1;if(tn){var Cl;if(tn){var Tl="oninput"in document;if(!Tl){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Tl=typeof tp.oninput=="function"}Cl=Tl}else Cl=!1;Bg=Cl&&(!document.documentMode||9<document.documentMode)}function np(){Ki&&(Ki.detachEvent("onpropertychange",Vg),ls=Ki=null)}function Vg(e){if(e.propertyName==="value"&&Sa(ls)){var t=[];$g(t,ls,e,Su(e)),_g(Ly,t)}}function Oy(e,t,n){e==="focusin"?(np(),Ki=t,ls=n,Ki.attachEvent("onpropertychange",Vg)):e==="focusout"&&np()}function My(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sa(ls)}function Uy(e,t){if(e==="click")return Sa(t)}function Fy(e,t){if(e==="input"||e==="change")return Sa(t)}function $y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:$y;function cs(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ic.call(t,s)||!_t(e[s],t[s]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ip(e,t){var n=rp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function By(e){var t=Wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&zu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=ip(n,o);var l=ip(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vy=tn&&"documentMode"in document&&11>=document.documentMode,Rr=null,jc=null,Gi=null,kc=!1;function sp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||Rr==null||Rr!==Mo(r)||(r=Rr,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gi&&cs(Gi,r)||(Gi=r,r=Wo(jc,"onSelect"),0<r.length&&(t=new Au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Il={},qg={};tn&&(qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ca(e){if(Il[e])return Il[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qg)return Il[e]=t[n];return e}var Kg=Ca("animationend"),Gg=Ca("animationiteration"),Xg=Ca("animationstart"),Yg=Ca("transitionend"),Jg=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,t){Jg.set(e,t),br(t,[e])}for(var Pl=0;Pl<op.length;Pl++){var Rl=op[Pl],Hy=Rl.toLowerCase(),Wy=Rl[0].toUpperCase()+Rl.slice(1);Wn(Hy,"on"+Wy)}Wn(Kg,"onAnimationEnd");Wn(Gg,"onAnimationIteration");Wn(Xg,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(Yg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qy=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function ap(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,H0(r,t,void 0,e),e.currentTarget=null}function Qg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==o&&s.isPropagationStopped())break e;ap(s,c,h),o=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,h=c.currentTarget,c=c.listener,u!==o&&s.isPropagationStopped())break e;ap(s,c,h),o=u}}}if(Fo)throw e=yc,Fo=!1,yc=null,e}function ie(e,t){var n=t[Tc];n===void 0&&(n=t[Tc]=new Set);var r=e+"__bubble";n.has(r)||(Zg(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),Zg(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function us(e){if(!e[co]){e[co]=!0,og.forEach(function(n){n!=="selectionchange"&&(qy.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Al("selectionchange",!1,t))}}function Zg(e,t,n,r){switch(zg(t)){case 1:var s=oy;break;case 4:s=ay;break;default:s=Pu}n=s.bind(null,t,n,e),s=void 0,!vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;l=l.return}for(;c!==null;){if(l=rr(c),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}c=c.parentNode}}r=r.return}_g(function(){var h=o,g=Su(n),m=[];e:{var w=Jg.get(e);if(w!==void 0){var j=Au,_=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":j=_y;break;case"focusin":_="focus",j=Sl;break;case"focusout":_="blur",j=Sl;break;case"beforeblur":case"afterblur":j=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Ey;break;case Kg:case Gg:case Xg:j=py;break;case Yg:j=Sy;break;case"scroll":j=ly;break;case"wheel":j=Ty;break;case"copy":case"cut":case"paste":j=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Jh}var P=(t&4)!==0,D=!P&&e==="scroll",y=P?w!==null?w+"Capture":null:w;P=[];for(var f=h,x;f!==null;){x=f;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,y!==null&&(T=is(f,y),T!=null&&P.push(ds(f,T,x)))),D)break;f=f.return}0<P.length&&(w=new j(w,_,null,n,g),m.push({event:w,listeners:P}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",w&&n!==mc&&(_=n.relatedTarget||n.fromElement)&&(rr(_)||_[nn]))break e;if((j||w)&&(w=g.window===g?g:(w=g.ownerDocument)?w.defaultView||w.parentWindow:window,j?(_=n.relatedTarget||n.toElement,j=h,_=_?rr(_):null,_!==null&&(D=wr(_),_!==D||_.tag!==5&&_.tag!==6)&&(_=null)):(j=null,_=h),j!==_)){if(P=Xh,T="onMouseLeave",y="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(P=Jh,T="onPointerLeave",y="onPointerEnter",f="pointer"),D=j==null?w:Dr(j),x=_==null?w:Dr(_),w=new P(T,f+"leave",j,n,g),w.target=D,w.relatedTarget=x,T=null,rr(g)===h&&(P=new P(y,f+"enter",_,n,g),P.target=x,P.relatedTarget=D,T=P),D=T,j&&_)t:{for(P=j,y=_,f=0,x=P;x;x=Cr(x))f++;for(x=0,T=y;T;T=Cr(T))x++;for(;0<f-x;)P=Cr(P),f--;for(;0<x-f;)y=Cr(y),x--;for(;f--;){if(P===y||y!==null&&P===y.alternate)break t;P=Cr(P),y=Cr(y)}P=null}else P=null;j!==null&&lp(m,w,j,P,!1),_!==null&&D!==null&&lp(m,D,_,P,!0)}}e:{if(w=h?Dr(h):window,j=w.nodeName&&w.nodeName.toLowerCase(),j==="select"||j==="input"&&w.type==="file")var E=zy;else if(ep(w))if(Bg)E=Fy;else{E=My;var O=Oy}else(j=w.nodeName)&&j.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(E=Uy);if(E&&(E=E(e,h))){$g(m,E,n,g);break e}O&&O(e,w,h),e==="focusout"&&(O=w._wrapperState)&&O.controlled&&w.type==="number"&&dc(w,"number",w.value)}switch(O=h?Dr(h):window,e){case"focusin":(ep(O)||O.contentEditable==="true")&&(Rr=O,jc=h,Gi=null);break;case"focusout":Gi=jc=Rr=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,sp(m,n,g);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":sp(m,n,g)}var k;if(Lu)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Pr?Ug(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Mg&&n.locale!=="ko"&&(Pr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Pr&&(k=Og()):(En=g,Ru="value"in En?En.value:En.textContent,Pr=!0)),O=Wo(h,b),0<O.length&&(b=new Yh(b,e,null,n,g),m.push({event:b,listeners:O}),k?b.data=k:(k=Fg(n),k!==null&&(b.data=k)))),(k=Py?Ry(e,n):Ay(e,n))&&(h=Wo(h,"onBeforeInput"),0<h.length&&(g=new Yh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:h}),g.data=k))}Qg(m,t)})}function ds(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=is(e,n),o!=null&&r.unshift(ds(e,o,s)),o=is(e,t),o!=null&&r.push(ds(e,o,s))),e=e.return}return r}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function lp(e,t,n,r,s){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,s?(u=is(n,o),u!=null&&l.unshift(ds(n,u,c))):s||(u=is(n,o),u!=null&&l.push(ds(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ky=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(Ky,`
`).replace(Gy,"")}function uo(e,t,n){if(t=cp(t),cp(e)!==t&&n)throw Error(M(425))}function qo(){}var Ec=null,Nc=null;function Sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(e){return up.resolve(null).then(e).catch(Jy)}:Cc;function Jy(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),as(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);as(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),Ct="__reactFiber$"+di,hs="__reactProps$"+di,nn="__reactContainer$"+di,Tc="__reactEvents$"+di,Qy="__reactListeners$"+di,Zy="__reactHandles$"+di;function rr(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dp(e);e!==null;){if(n=e[Ct])return n;e=dp(e)}return t}e=n,n=e.parentNode}return null}function Cs(e){return e=e[Ct]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ta(e){return e[hs]||null}var Ic=[],Lr=-1;function qn(e){return{current:e}}function se(e){0>Lr||(e.current=Ic[Lr],Ic[Lr]=null,Lr--)}function ne(e,t){Lr++,Ic[Lr]=e.current,e.current=t}var $n={},Le=qn($n),Ge=qn(!1),lr=$n;function Zr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(e){return e=e.childContextTypes,e!=null}function Ko(){se(Ge),se(Le)}function hp(e,t,n){if(Le.current!==$n)throw Error(M(168));ne(Le,t),ne(Ge,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(M(108,O0(e)||"Unknown",s));return ue({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,lr=Le.current,ne(Le,e),ne(Ge,Ge.current),!0}function pp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=em(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,se(Ge),se(Le),ne(Le,e)):se(Ge),ne(Ge,n)}var Kt=null,Ia=!1,zl=!1;function tm(e){Kt===null?Kt=[e]:Kt.push(e)}function e1(e){Ia=!0,tm(e)}function Kn(){if(!zl&&Kt!==null){zl=!0;var e=0,t=J;try{var n=Kt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Ia=!1}catch(s){throw Kt!==null&&(Kt=Kt.slice(e+1)),Ng(Cu,Kn),s}finally{J=t,zl=!1}}return null}var zr=[],Or=0,Xo=null,Yo=0,at=[],lt=0,cr=null,Gt=1,Xt="";function er(e,t){zr[Or++]=Yo,zr[Or++]=Xo,Xo=e,Yo=t}function nm(e,t,n){at[lt++]=Gt,at[lt++]=Xt,at[lt++]=cr,cr=e;var r=Gt;e=Xt;var s=32-bt(r)-1;r&=~(1<<s),n+=1;var o=32-bt(t)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Gt=1<<32-bt(t)+s|n<<s|r,Xt=o+e}else Gt=1<<o|n<<s|r,Xt=e}function Ou(e){e.return!==null&&(er(e,1),nm(e,1,0))}function Mu(e){for(;e===Xo;)Xo=zr[--Or],zr[Or]=null,Yo=zr[--Or],zr[Or]=null;for(;e===cr;)cr=at[--lt],at[lt]=null,Xt=at[--lt],at[lt]=null,Gt=at[--lt],at[lt]=null}var tt=null,et=null,oe=!1,xt=null;function rm(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:Gt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Pc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rc(e){if(oe){var t=et;if(t){var n=t;if(!fp(e,t)){if(Pc(e))throw Error(M(418));t=Rn(n.nextSibling);var r=tt;t&&fp(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,oe=!1,tt=e)}}else{if(Pc(e))throw Error(M(418));e.flags=e.flags&-4097|2,oe=!1,tt=e}}}function gp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function ho(e){if(e!==tt)return!1;if(!oe)return gp(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sc(e.type,e.memoizedProps)),t&&(t=et)){if(Pc(e))throw im(),Error(M(418));for(;t;)rm(e,t),t=Rn(t.nextSibling)}if(gp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?Rn(e.stateNode.nextSibling):null;return!0}function im(){for(var e=et;e;)e=Rn(e.nextSibling)}function ei(){et=tt=null,oe=!1}function Uu(e){xt===null?xt=[e]:xt.push(e)}var t1=ln.ReactCurrentBatchConfig;function Di(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=s.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mp(e){var t=e._init;return t(e._payload)}function sm(e){function t(y,f){if(e){var x=y.deletions;x===null?(y.deletions=[f],y.flags|=16):x.push(f)}}function n(y,f){if(!e)return null;for(;f!==null;)t(y,f),f=f.sibling;return null}function r(y,f){for(y=new Map;f!==null;)f.key!==null?y.set(f.key,f):y.set(f.index,f),f=f.sibling;return y}function s(y,f){return y=zn(y,f),y.index=0,y.sibling=null,y}function o(y,f,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<f?(y.flags|=2,f):x):(y.flags|=2,f)):(y.flags|=1048576,f)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,f,x,T){return f===null||f.tag!==6?(f=Vl(x,y.mode,T),f.return=y,f):(f=s(f,x),f.return=y,f)}function u(y,f,x,T){var E=x.type;return E===Ir?g(y,f,x.props.children,T,x.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xn&&mp(E)===f.type)?(T=s(f,x.props),T.ref=Di(y,f,x),T.return=y,T):(T=Ro(x.type,x.key,x.props,null,y.mode,T),T.ref=Di(y,f,x),T.return=y,T)}function h(y,f,x,T){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Hl(x,y.mode,T),f.return=y,f):(f=s(f,x.children||[]),f.return=y,f)}function g(y,f,x,T,E){return f===null||f.tag!==7?(f=ar(x,y.mode,T,E),f.return=y,f):(f=s(f,x),f.return=y,f)}function m(y,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Vl(""+f,y.mode,x),f.return=y,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case to:return x=Ro(f.type,f.key,f.props,null,y.mode,x),x.ref=Di(y,null,f),x.return=y,x;case Tr:return f=Hl(f,y.mode,x),f.return=y,f;case xn:var T=f._init;return m(y,T(f._payload),x)}if(Ui(f)||Ti(f))return f=ar(f,y.mode,x,null),f.return=y,f;po(y,f)}return null}function w(y,f,x,T){var E=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:c(y,f,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case to:return x.key===E?u(y,f,x,T):null;case Tr:return x.key===E?h(y,f,x,T):null;case xn:return E=x._init,w(y,f,E(x._payload),T)}if(Ui(x)||Ti(x))return E!==null?null:g(y,f,x,T,null);po(y,x)}return null}function j(y,f,x,T,E){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(x)||null,c(f,y,""+T,E);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case to:return y=y.get(T.key===null?x:T.key)||null,u(f,y,T,E);case Tr:return y=y.get(T.key===null?x:T.key)||null,h(f,y,T,E);case xn:var O=T._init;return j(y,f,x,O(T._payload),E)}if(Ui(T)||Ti(T))return y=y.get(x)||null,g(f,y,T,E,null);po(f,T)}return null}function _(y,f,x,T){for(var E=null,O=null,k=f,b=f=0,N=null;k!==null&&b<x.length;b++){k.index>b?(N=k,k=null):N=k.sibling;var C=w(y,k,x[b],T);if(C===null){k===null&&(k=N);break}e&&k&&C.alternate===null&&t(y,k),f=o(C,f,b),O===null?E=C:O.sibling=C,O=C,k=N}if(b===x.length)return n(y,k),oe&&er(y,b),E;if(k===null){for(;b<x.length;b++)k=m(y,x[b],T),k!==null&&(f=o(k,f,b),O===null?E=k:O.sibling=k,O=k);return oe&&er(y,b),E}for(k=r(y,k);b<x.length;b++)N=j(k,y,b,x[b],T),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?b:N.key),f=o(N,f,b),O===null?E=N:O.sibling=N,O=N);return e&&k.forEach(function(A){return t(y,A)}),oe&&er(y,b),E}function P(y,f,x,T){var E=Ti(x);if(typeof E!="function")throw Error(M(150));if(x=E.call(x),x==null)throw Error(M(151));for(var O=E=null,k=f,b=f=0,N=null,C=x.next();k!==null&&!C.done;b++,C=x.next()){k.index>b?(N=k,k=null):N=k.sibling;var A=w(y,k,C.value,T);if(A===null){k===null&&(k=N);break}e&&k&&A.alternate===null&&t(y,k),f=o(A,f,b),O===null?E=A:O.sibling=A,O=A,k=N}if(C.done)return n(y,k),oe&&er(y,b),E;if(k===null){for(;!C.done;b++,C=x.next())C=m(y,C.value,T),C!==null&&(f=o(C,f,b),O===null?E=C:O.sibling=C,O=C);return oe&&er(y,b),E}for(k=r(y,k);!C.done;b++,C=x.next())C=j(k,y,b,C.value,T),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?b:C.key),f=o(C,f,b),O===null?E=C:O.sibling=C,O=C);return e&&k.forEach(function(R){return t(y,R)}),oe&&er(y,b),E}function D(y,f,x,T){if(typeof x=="object"&&x!==null&&x.type===Ir&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case to:e:{for(var E=x.key,O=f;O!==null;){if(O.key===E){if(E=x.type,E===Ir){if(O.tag===7){n(y,O.sibling),f=s(O,x.props.children),f.return=y,y=f;break e}}else if(O.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xn&&mp(E)===O.type){n(y,O.sibling),f=s(O,x.props),f.ref=Di(y,O,x),f.return=y,y=f;break e}n(y,O);break}else t(y,O);O=O.sibling}x.type===Ir?(f=ar(x.props.children,y.mode,T,x.key),f.return=y,y=f):(T=Ro(x.type,x.key,x.props,null,y.mode,T),T.ref=Di(y,f,x),T.return=y,y=T)}return l(y);case Tr:e:{for(O=x.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(y,f.sibling),f=s(f,x.children||[]),f.return=y,y=f;break e}else{n(y,f);break}else t(y,f);f=f.sibling}f=Hl(x,y.mode,T),f.return=y,y=f}return l(y);case xn:return O=x._init,D(y,f,O(x._payload),T)}if(Ui(x))return _(y,f,x,T);if(Ti(x))return P(y,f,x,T);po(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(y,f.sibling),f=s(f,x),f.return=y,y=f):(n(y,f),f=Vl(x,y.mode,T),f.return=y,y=f),l(y)):n(y,f)}return D}var ti=sm(!0),om=sm(!1),Jo=qn(null),Qo=null,Mr=null,Fu=null;function $u(){Fu=Mr=Qo=null}function Bu(e){var t=Jo.current;se(Jo),e._currentValue=t}function Ac(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qr(e,t){Qo=e,Fu=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Fu!==e)if(e={context:e,memoizedValue:t,next:null},Mr===null){if(Qo===null)throw Error(M(308));Mr=e,Qo.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return t}var ir=null;function Vu(e){ir===null?ir=[e]:ir.push(e)}function am(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Vu(t)):(n.next=s.next,s.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,rn(e,n)}return s=r.interleaved,s===null?(t.next=t,Vu(r)):(t.next=s.next,s.next=t),r.interleaved=t,rn(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function xp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zo(e,t,n,r){var s=e.updateQueue;vn=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,h=u.next;u.next=null,l===null?o=h:l.next=h,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=h:c.next=h,g.lastBaseUpdate=u))}if(o!==null){var m=s.baseState;l=0,g=h=u=null,c=o;do{var w=c.lane,j=c.eventTime;if((r&w)===w){g!==null&&(g=g.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var _=e,P=c;switch(w=t,j=n,P.tag){case 1:if(_=P.payload,typeof _=="function"){m=_.call(j,m,w);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=P.payload,w=typeof _=="function"?_.call(j,m,w):_,w==null)break e;m=ue({},m,w);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=s.effects,w===null?s.effects=[c]:w.push(c))}else j={eventTime:j,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(h=g=j,u=m):g=g.next=j,l|=w;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;w=c,c=w.next,w.next=null,s.lastBaseUpdate=w,s.shared.pending=null}}while(!0);if(g===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);dr|=l,e.lanes=l,e.memoizedState=m}}function vp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(M(191,s));s.call(r)}}}var Ts={},Pt=qn(Ts),ps=qn(Ts),fs=qn(Ts);function sr(e){if(e===Ts)throw Error(M(174));return e}function Wu(e,t){switch(ne(fs,t),ne(ps,e),ne(Pt,Ts),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pc(t,e)}se(Pt),ne(Pt,t)}function ni(){se(Pt),se(ps),se(fs)}function cm(e){sr(fs.current);var t=sr(Pt.current),n=pc(t,e.type);t!==n&&(ne(ps,e),ne(Pt,n))}function qu(e){ps.current===e&&(se(Pt),se(ps))}var le=qn(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Ku(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var So=ln.ReactCurrentDispatcher,Ml=ln.ReactCurrentBatchConfig,ur=0,ce=null,ye=null,_e=null,ta=!1,Xi=!1,gs=0,n1=0;function Pe(){throw Error(M(321))}function Gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Xu(e,t,n,r,s,o){if(ur=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,So.current=e===null||e.memoizedState===null?o1:a1,e=n(r,s),Xi){o=0;do{if(Xi=!1,gs=0,25<=o)throw Error(M(301));o+=1,_e=ye=null,t.updateQueue=null,So.current=l1,e=n(r,s)}while(Xi)}if(So.current=na,t=ye!==null&&ye.next!==null,ur=0,_e=ye=ce=null,ta=!1,t)throw Error(M(300));return e}function Yu(){var e=gs!==0;return gs=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ce.memoizedState=_e=e:_e=_e.next=e,_e}function ht(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=_e===null?ce.memoizedState:_e.next;if(t!==null)_e=t,ye=e;else{if(e===null)throw Error(M(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},_e===null?ce.memoizedState=_e=e:_e=_e.next=e}return _e}function ms(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ye,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var c=l=null,u=null,h=o;do{var g=h.lane;if((ur&g)===g)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var m={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=m,l=r):u=u.next=m,ce.lanes|=g,dr|=g}h=h.next}while(h!==null&&h!==o);u===null?l=r:u.next=c,_t(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,ce.lanes|=o,dr|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=ht(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);_t(o,t.memoizedState)||(Ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function um(){}function dm(e,t){var n=ce,r=ht(),s=t(),o=!_t(r.memoizedState,s);if(o&&(r.memoizedState=s,Ke=!0),r=r.queue,Ju(fm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,xs(9,pm.bind(null,n,r,s,t),void 0,null),je===null)throw Error(M(349));ur&30||hm(n,t,s)}return s}function hm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pm(e,t,n,r){t.value=n,t.getSnapshot=r,gm(t)&&mm(e)}function fm(e,t,n){return n(function(){gm(t)&&mm(e)})}function gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function mm(e){var t=rn(e,1);t!==null&&wt(t,e,1,-1)}function yp(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:e},t.queue=e,e=e.dispatch=s1.bind(null,ce,e),[t.memoizedState,e]}function xs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return ht().memoizedState}function Co(e,t,n,r){var s=St();ce.flags|=e,s.memoizedState=xs(1|t,n,void 0,r===void 0?null:r)}function Pa(e,t,n,r){var s=ht();r=r===void 0?null:r;var o=void 0;if(ye!==null){var l=ye.memoizedState;if(o=l.destroy,r!==null&&Gu(r,l.deps)){s.memoizedState=xs(t,n,o,r);return}}ce.flags|=e,s.memoizedState=xs(1|t,n,o,r)}function bp(e,t){return Co(8390656,8,e,t)}function Ju(e,t){return Pa(2048,8,e,t)}function vm(e,t){return Pa(4,2,e,t)}function ym(e,t){return Pa(4,4,e,t)}function bm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wm(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4,4,bm.bind(null,t,e),n)}function Qu(){}function _m(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jm(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function km(e,t,n){return ur&21?(_t(n,t)||(n=Tg(),ce.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function r1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Ml.transition;Ml.transition={};try{e(!1),t()}finally{J=n,Ml.transition=r}}function Em(){return ht().memoizedState}function i1(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nm(e))Sm(t,n);else if(n=am(e,t,n,r),n!==null){var s=Fe();wt(n,e,r,s),Cm(n,t,r)}}function s1(e,t,n){var r=Ln(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nm(e))Sm(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(s.hasEagerState=!0,s.eagerState=c,_t(c,l)){var u=t.interleaved;u===null?(s.next=s,Vu(t)):(s.next=u.next,u.next=s),t.interleaved=s;return}}catch{}finally{}n=am(e,t,s,r),n!==null&&(s=Fe(),wt(n,e,r,s),Cm(n,t,r))}}function Nm(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Sm(e,t){Xi=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var na={readContext:dt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},o1={readContext:dt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:bp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,bm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i1.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:yp,useDebugValue:Qu,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=yp(!1),t=e[0];return e=r1.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,s=St();if(oe){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),je===null)throw Error(M(349));ur&30||hm(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,bp(fm.bind(null,r,o,e),[e]),r.flags|=2048,xs(9,pm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=St(),t=je.identifierPrefix;if(oe){var n=Xt,r=Gt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=n1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},a1={readContext:dt,useCallback:_m,useContext:dt,useEffect:Ju,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:jm,useReducer:Ul,useRef:xm,useState:function(){return Ul(ms)},useDebugValue:Qu,useDeferredValue:function(e){var t=ht();return km(t,ye.memoizedState,e)},useTransition:function(){var e=Ul(ms)[0],t=ht().memoizedState;return[e,t]},useMutableSource:um,useSyncExternalStore:dm,useId:Em,unstable_isNewReconciler:!1},l1={readContext:dt,useCallback:_m,useContext:dt,useEffect:Ju,useImperativeHandle:wm,useInsertionEffect:vm,useLayoutEffect:ym,useMemo:jm,useReducer:Fl,useRef:xm,useState:function(){return Fl(ms)},useDebugValue:Qu,useDeferredValue:function(e){var t=ht();return ye===null?t.memoizedState=e:km(t,ye.memoizedState,e)},useTransition:function(){var e=Fl(ms)[0],t=ht().memoizedState;return[e,t]},useMutableSource:um,useSyncExternalStore:dm,useId:Em,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),s=Ln(e),o=Zt(r,s);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,s),t!==null&&(wt(t,e,s,r),No(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),s=Ln(e),o=Zt(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,s),t!==null&&(wt(t,e,s,r),No(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Ln(e),s=Zt(n,r);s.tag=2,t!=null&&(s.callback=t),t=An(e,s,r),t!==null&&(wt(t,e,r,n),No(t,e,r))}};function wp(e,t,n,r,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!cs(n,r)||!cs(s,o):!0}function Tm(e,t,n){var r=!1,s=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=dt(o):(s=Xe(t)?lr:Le.current,r=t.contextTypes,o=(r=r!=null)?Zr(e,s):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function _p(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ra.enqueueReplaceState(t,t.state,null)}function Lc(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Hu(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=dt(o):(o=Xe(t)?lr:Le.current,s.context=Zr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Dc(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ra.enqueueReplaceState(s,s.state,null),Zo(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ri(e,t){try{var n="",r=t;do n+=z0(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ia||(ia=!0,qc=r),zc(e,t)},n}function Pm(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){zc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zc(e,t),typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function jp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new c1;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=j1.bind(null,e,t,n),t.then(e,e))}function kp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ep(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var u1=ln.ReactCurrentOwner,Ke=!1;function Me(e,t,n,r){t.child=e===null?om(t,null,n,r):ti(t,e.child,n,r)}function Np(e,t,n,r,s){n=n.render;var o=t.ref;return qr(t,s),r=Xu(e,t,n,r,o,s),n=Yu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,sn(e,t,s)):(oe&&n&&Ou(t),t.flags|=1,Me(e,t,r,s),t.child)}function Sp(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!od(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Rm(e,t,o,r,s)):(e=Ro(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:cs,n(l,r)&&e.ref===t.ref)return sn(e,t,s)}return t.flags|=1,e=zn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Rm(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(cs(o,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,sn(e,t,s)}return Oc(e,t,n,r,s)}function Am(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Fr,Ze),Ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Fr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ne(Fr,Ze),Ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ne(Fr,Ze),Ze|=r;return Me(e,t,s,n),t.child}function Dm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oc(e,t,n,r,s){var o=Xe(n)?lr:Le.current;return o=Zr(t,o),qr(t,s),n=Xu(e,t,n,r,o,s),r=Yu(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,sn(e,t,s)):(oe&&r&&Ou(t),t.flags|=1,Me(e,t,n,s),t.child)}function Cp(e,t,n,r,s){if(Xe(n)){var o=!0;Go(t)}else o=!1;if(qr(t,s),t.stateNode===null)To(e,t),Tm(t,n,r),Lc(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=dt(h):(h=Xe(n)?lr:Le.current,h=Zr(t,h));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==h)&&_p(t,l,r,h),vn=!1;var w=t.memoizedState;l.state=w,Zo(t,r,l,s),u=t.memoizedState,c!==r||w!==u||Ge.current||vn?(typeof g=="function"&&(Dc(t,n,g,r),u=t.memoizedState),(c=vn||wp(t,n,c,r,w,u,h))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lm(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:gt(t.type,c),l.props=h,m=t.pendingProps,w=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=dt(u):(u=Xe(n)?lr:Le.current,u=Zr(t,u));var j=n.getDerivedStateFromProps;(g=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||w!==u)&&_p(t,l,r,u),vn=!1,w=t.memoizedState,l.state=w,Zo(t,r,l,s);var _=t.memoizedState;c!==m||w!==_||Ge.current||vn?(typeof j=="function"&&(Dc(t,n,j,r),_=t.memoizedState),(h=vn||wp(t,n,h,r,w,_,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),l.props=r,l.state=_,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Mc(e,t,n,r,o,s)}function Mc(e,t,n,r,s,o){Dm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&pp(t,n,!1),sn(e,t,o);r=t.stateNode,u1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ti(t,e.child,null,o),t.child=ti(t,null,c,o)):Me(e,t,c,o),t.memoizedState=r.state,s&&pp(t,n,!0),t.child}function Lm(e){var t=e.stateNode;t.pendingContext?hp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hp(e,t.context,!1),Wu(e,t.containerInfo)}function Tp(e,t,n,r,s){return ei(),Uu(s),t.flags|=256,Me(e,t,n,r),t.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Fc(e){return{baseLanes:e,cachePool:null,transitions:null}}function zm(e,t,n){var r=t.pendingProps,s=le.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(s&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ne(le,s&1),e===null)return Rc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=La(l,r,0,null),e=ar(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fc(n),t.memoizedState=Uc,e):Zu(t,l));if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return d1(e,t,l,r,c,s,n);if(o){o=r.fallback,l=t.mode,s=e.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zn(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?o=zn(c,o):(o=ar(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Fc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Uc,r}return o=e.child,e=o.sibling,r=zn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zu(e,t){return t=La({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Uu(r),ti(t,e.child,null,n),e=Zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function d1(e,t,n,r,s,o,l){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(M(422))),fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=La({mode:"visible",children:r.children},s,0,null),o=ar(o,s,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ti(t,e.child,null,l),t.child.memoizedState=Fc(l),t.memoizedState=Uc,o);if(!(t.mode&1))return fo(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(M(419)),r=$l(o,r,void 0),fo(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ke||c){if(r=je,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,rn(e,s),wt(r,e,s,-1))}return sd(),r=$l(Error(M(421))),fo(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=k1.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,et=Rn(s.nextSibling),tt=t,oe=!0,xt=null,e!==null&&(at[lt++]=Gt,at[lt++]=Xt,at[lt++]=cr,Gt=e.id,Xt=e.overflow,cr=t),t=Zu(t,r.children),t.flags|=4096,t)}function Ip(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ac(e.return,t,n)}function Bl(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function Om(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(le,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Bl(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ea(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=zn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:Lm(t),ei();break;case 5:cm(t);break;case 1:Xe(t.type)&&Go(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;ne(Jo,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?zm(e,t,n):(ne(le,le.current&1),e=sn(e,t,n),e!==null?e.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Om(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,Am(e,t,n)}return sn(e,t,n)}var Mm,$c,Um,Fm;Mm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$c=function(){};Um=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,sr(Pt.current);var o=null;switch(n){case"input":s=cc(e,s),r=cc(e,r),o=[];break;case"select":s=ue({},s,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":s=hc(e,s),r=hc(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}fc(n,r);var l;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var c=s[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ns.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var u=r[h];if(c=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(o=o||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ns.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ie("scroll",e),o||c===u||(o=[])):(o=o||[]).push(h,u))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};Fm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Li(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p1(e,t,n){var r=t.pendingProps;switch(Mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&Ko(),Re(t),null;case 3:return r=t.stateNode,ni(),se(Ge),se(Le),Ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Xc(xt),xt=null))),$c(e,t),Re(t),null;case 5:qu(t);var s=sr(fs.current);if(n=t.type,e!==null&&t.stateNode!=null)Um(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Re(t),null}if(e=sr(Pt.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[hs]=o,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(s=0;s<$i.length;s++)ie($i[s],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Uh(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":$h(r,o),ie("invalid",r)}fc(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,c,e),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,c,e),s=["children",""+c]):ns.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":no(r),Fh(r,o,!0);break;case"textarea":no(r),Bh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=qo)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[hs]=r,Mm(e,t,!1,!1),t.stateNode=e;e:{switch(l=gc(n,r),n){case"dialog":ie("cancel",e),ie("close",e),s=r;break;case"iframe":case"object":case"embed":ie("load",e),s=r;break;case"video":case"audio":for(s=0;s<$i.length;s++)ie($i[s],e);s=r;break;case"source":ie("error",e),s=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),s=r;break;case"details":ie("toggle",e),s=r;break;case"input":Uh(e,r),s=cc(e,r),ie("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=ue({},r,{value:void 0}),ie("invalid",e);break;case"textarea":$h(e,r),s=hc(e,r),ie("invalid",e);break;default:s=r}fc(n,s),c=s;for(o in c)if(c.hasOwnProperty(o)){var u=c[o];o==="style"?xg(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gg(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&rs(e,u):typeof u=="number"&&rs(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ns.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ie("scroll",e):u!=null&&ju(e,o,u,l))}switch(n){case"input":no(e),Fh(e,r,!1);break;case"textarea":no(e),Bh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Br(e,!!r.multiple,o,!1):r.defaultValue!=null&&Br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=sr(fs.current),sr(Pt.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return Re(t),null;case 13:if(se(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&et!==null&&t.mode&1&&!(t.flags&128))im(),ei(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[Ct]=t}else ei(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else xt!==null&&(Xc(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?be===0&&(be=3):sd())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return ni(),$c(e,t),e===null&&us(t.stateNode.containerInfo),Re(t),null;case 10:return Bu(t.type._context),Re(t),null;case 17:return Xe(t.type)&&Ko(),Re(t),null;case 19:if(se(le),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Li(o,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ea(e),l!==null){for(t.flags|=128,Li(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&fe()>ii&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304)}else{if(!r)if(e=ea(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return Re(t),null}else 2*fe()-o.renderingStartTime>ii&&n!==1073741824&&(t.flags|=128,r=!0,Li(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=fe(),t.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return id(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function f1(e,t){switch(Mu(t),t.tag){case 1:return Xe(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ni(),se(Ge),se(Le),Ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return qu(t),null;case 13:if(se(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));ei()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(le),null;case 4:return ni(),null;case 10:return Bu(t.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var go=!1,Ae=!1,g1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Bc(e,t,n){try{n()}catch(r){de(e,t,r)}}var Pp=!1;function m1(e,t){if(Ec=Vo,e=Wg(),zu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,h=0,g=0,m=e,w=null;t:for(;;){for(var j;m!==n||s!==0&&m.nodeType!==3||(c=l+s),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(j=m.firstChild)!==null;)w=m,m=j;for(;;){if(m===e)break t;if(w===n&&++h===s&&(c=l),w===o&&++g===r&&(u=l),(j=m.nextSibling)!==null)break;m=w,w=m.parentNode}m=j}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:e,selectionRange:n},Vo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var P=_.memoizedProps,D=_.memoizedState,y=t.stateNode,f=y.getSnapshotBeforeUpdate(t.elementType===t.type?P:gt(t.type,P),D);y.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(T){de(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return _=Pp,Pp=!1,_}function Yi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Bc(t,n,o)}s=s.next}while(s!==r)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $m(e){var t=e.alternate;t!==null&&(e.alternate=null,$m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[hs],delete t[Tc],delete t[Qy],delete t[Zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Rp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(Hc(e,t,n),e=e.sibling;e!==null;)Hc(e,t,n),e=e.sibling}function Wc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wc(e,t,n),e=e.sibling;e!==null;)Wc(e,t,n),e=e.sibling}var Ee=null,mt=!1;function gn(e,t,n){for(n=n.child;n!==null;)Vm(e,t,n),n=n.sibling}function Vm(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:Ae||Ur(n,t);case 6:var r=Ee,s=mt;Ee=null,gn(e,t,n),Ee=r,mt=s,Ee!==null&&(mt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(mt?(e=Ee,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),as(e)):Ll(Ee,n.stateNode));break;case 4:r=Ee,s=mt,Ee=n.stateNode.containerInfo,mt=!0,gn(e,t,n),Ee=r,mt=s;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Bc(n,t,l),s=s.next}while(s!==r)}gn(e,t,n);break;case 1:if(!Ae&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){de(n,t,c)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,gn(e,t,n),Ae=r):gn(e,t,n);break;default:gn(e,t,n)}}function Ap(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g1),t.forEach(function(r){var s=E1.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Ee=c.stateNode,mt=!1;break e;case 3:Ee=c.stateNode.containerInfo,mt=!0;break e;case 4:Ee=c.stateNode.containerInfo,mt=!0;break e}c=c.return}if(Ee===null)throw Error(M(160));Vm(o,l,s),Ee=null,mt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){de(s,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hm(t,e),t=t.sibling}function Hm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),Nt(e),r&4){try{Yi(3,e,e.return),Aa(3,e)}catch(P){de(e,e.return,P)}try{Yi(5,e,e.return)}catch(P){de(e,e.return,P)}}break;case 1:ft(t,e),Nt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(ft(t,e),Nt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var s=e.stateNode;try{rs(s,"")}catch(P){de(e,e.return,P)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&hg(s,o),gc(c,l);var h=gc(c,o);for(l=0;l<u.length;l+=2){var g=u[l],m=u[l+1];g==="style"?xg(s,m):g==="dangerouslySetInnerHTML"?gg(s,m):g==="children"?rs(s,m):ju(s,g,m,h)}switch(c){case"input":uc(s,o);break;case"textarea":pg(s,o);break;case"select":var w=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var j=o.value;j!=null?Br(s,!!o.multiple,j,!1):w!==!!o.multiple&&(o.defaultValue!=null?Br(s,!!o.multiple,o.defaultValue,!0):Br(s,!!o.multiple,o.multiple?[]:"",!1))}s[hs]=o}catch(P){de(e,e.return,P)}}break;case 6:if(ft(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(M(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(P){de(e,e.return,P)}}break;case 3:if(ft(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{as(t.containerInfo)}catch(P){de(e,e.return,P)}break;case 4:ft(t,e),Nt(e);break;case 13:ft(t,e),Nt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(nd=fe())),r&4&&Ap(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(h=Ae)||g,ft(t,e),Ae=h):ft(t,e),Nt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for($=e,g=e.child;g!==null;){for(m=$=g;$!==null;){switch(w=$,j=w.child,w.tag){case 0:case 11:case 14:case 15:Yi(4,w,w.return);break;case 1:Ur(w,w.return);var _=w.stateNode;if(typeof _.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(P){de(r,n,P)}}break;case 5:Ur(w,w.return);break;case 22:if(w.memoizedState!==null){Lp(m);continue}}j!==null?(j.return=w,$=j):Lp(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{s=m.stateNode,h?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=mg("display",l))}catch(P){de(e,e.return,P)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){de(e,e.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ft(t,e),Nt(e),r&4&&Ap(e);break;case 21:break;default:ft(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(rs(s,""),r.flags&=-33);var o=Rp(e);Wc(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Rp(e);Hc(e,c,l);break;default:throw Error(M(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,n){$=e,Wm(e)}function Wm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var s=$,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||go;if(!l){var c=s.alternate,u=c!==null&&c.memoizedState!==null||Ae;c=go;var h=Ae;if(go=l,(Ae=u)&&!h)for($=s;$!==null;)l=$,u=l.child,l.tag===22&&l.memoizedState!==null?zp(s):u!==null?(u.return=l,$=u):zp(s);for(;o!==null;)$=o,Wm(o),o=o.sibling;$=s,go=c,Ae=h}Dp(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,$=o):Dp(e)}}function Dp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vp(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&as(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ae||t.flags&512&&Vc(t)}catch(w){de(t,t.return,w)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Lp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function zp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Aa(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(u){de(t,s,u)}}var o=t.return;try{Vc(t)}catch(u){de(t,o,u)}break;case 5:var l=t.return;try{Vc(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var v1=Math.ceil,ra=ln.ReactCurrentDispatcher,ed=ln.ReactCurrentOwner,ut=ln.ReactCurrentBatchConfig,G=0,je=null,me=null,Ne=0,Ze=0,Fr=qn(0),be=0,vs=null,dr=0,Da=0,td=0,Ji=null,He=null,nd=0,ii=1/0,qt=null,ia=!1,qc=null,Dn=null,mo=!1,Nn=null,sa=0,Qi=0,Kc=null,Io=-1,Po=0;function Fe(){return G&6?fe():Io!==-1?Io:Io=fe()}function Ln(e){return e.mode&1?G&2&&Ne!==0?Ne&-Ne:t1.transition!==null?(Po===0&&(Po=Tg()),Po):(e=J,e!==0||(e=window.event,e=e===void 0?16:zg(e.type)),e):1}function wt(e,t,n,r){if(50<Qi)throw Qi=0,Kc=null,Error(M(185));Ns(e,n,r),(!(G&2)||e!==je)&&(e===je&&(!(G&2)&&(Da|=n),be===4&&bn(e,Ne)),Ye(e,r),n===1&&G===0&&!(t.mode&1)&&(ii=fe()+500,Ia&&Kn()))}function Ye(e,t){var n=e.callbackNode;ty(e,t);var r=Bo(e,e===je?Ne:0);if(r===0)n!==null&&Wh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wh(n),t===1)e.tag===0?e1(Op.bind(null,e)):tm(Op.bind(null,e)),Yy(function(){!(G&6)&&Kn()}),n=null;else{switch(Ig(r)){case 1:n=Cu;break;case 4:n=Sg;break;case 16:n=$o;break;case 536870912:n=Cg;break;default:n=$o}n=Zm(n,qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qm(e,t){if(Io=-1,Po=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var r=Bo(e,e===je?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oa(e,r);else{t=r;var s=G;G|=2;var o=Gm();(je!==e||Ne!==t)&&(qt=null,ii=fe()+500,or(e,t));do try{w1();break}catch(c){Km(e,c)}while(!0);$u(),ra.current=o,G=s,me!==null?t=0:(je=null,Ne=0,t=be)}if(t!==0){if(t===2&&(s=bc(e),s!==0&&(r=s,t=Gc(e,s))),t===1)throw n=vs,or(e,0),bn(e,r),Ye(e,fe()),n;if(t===6)bn(e,r);else{if(s=e.current.alternate,!(r&30)&&!y1(s)&&(t=oa(e,r),t===2&&(o=bc(e),o!==0&&(r=o,t=Gc(e,o))),t===1))throw n=vs,or(e,0),bn(e,r),Ye(e,fe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:tr(e,He,qt);break;case 3:if(bn(e,r),(r&130023424)===r&&(t=nd+500-fe(),10<t)){if(Bo(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Cc(tr.bind(null,e,He,qt),t);break}tr(e,He,qt);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-bt(r);o=1<<l,l=t[l],l>s&&(s=l),r&=~o}if(r=s,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v1(r/1960))-r,10<r){e.timeoutHandle=Cc(tr.bind(null,e,He,qt),r);break}tr(e,He,qt);break;case 5:tr(e,He,qt);break;default:throw Error(M(329))}}}return Ye(e,fe()),e.callbackNode===n?qm.bind(null,e):null}function Gc(e,t){var n=Ji;return e.current.memoizedState.isDehydrated&&(or(e,t).flags|=256),e=oa(e,t),e!==2&&(t=He,He=n,t!==null&&Xc(t)),e}function Xc(e){He===null?He=e:He.push.apply(He,e)}function y1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!_t(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~td,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function Op(e){if(G&6)throw Error(M(327));Kr();var t=Bo(e,0);if(!(t&1))return Ye(e,fe()),null;var n=oa(e,t);if(e.tag!==0&&n===2){var r=bc(e);r!==0&&(t=r,n=Gc(e,r))}if(n===1)throw n=vs,or(e,0),bn(e,t),Ye(e,fe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,He,qt),Ye(e,fe()),null}function rd(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(ii=fe()+500,Ia&&Kn())}}function hr(e){Nn!==null&&Nn.tag===0&&!(G&6)&&Kr();var t=G;G|=1;var n=ut.transition,r=J;try{if(ut.transition=null,J=1,e)return e()}finally{J=r,ut.transition=n,G=t,!(G&6)&&Kn()}}function id(){Ze=Fr.current,se(Fr)}function or(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xy(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:ni(),se(Ge),se(Le),Ku();break;case 5:qu(r);break;case 4:ni();break;case 13:se(le);break;case 19:se(le);break;case 10:Bu(r.type._context);break;case 22:case 23:id()}n=n.return}if(je=e,me=e=zn(e.current,null),Ne=Ze=t,be=0,vs=null,td=Da=dr=0,He=Ji=null,ir!==null){for(t=0;t<ir.length;t++)if(n=ir[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}n.pending=r}ir=null}return e}function Km(e,t){do{var n=me;try{if($u(),So.current=na,ta){for(var r=ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ta=!1}if(ur=0,_e=ye=ce=null,Xi=!1,gs=0,ed.current=null,n===null||n.return===null){be=1,vs=t,me=null;break}e:{var o=e,l=n.return,c=n,u=t;if(t=Ne,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var w=g.alternate;w?(g.updateQueue=w.updateQueue,g.memoizedState=w.memoizedState,g.lanes=w.lanes):(g.updateQueue=null,g.memoizedState=null)}var j=kp(l);if(j!==null){j.flags&=-257,Ep(j,l,c,o,t),j.mode&1&&jp(o,h,t),t=j,u=h;var _=t.updateQueue;if(_===null){var P=new Set;P.add(u),t.updateQueue=P}else _.add(u);break e}else{if(!(t&1)){jp(o,h,t),sd();break e}u=Error(M(426))}}else if(oe&&c.mode&1){var D=kp(l);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ep(D,l,c,o,t),Uu(ri(u,c));break e}}o=u=ri(u,c),be!==4&&(be=2),Ji===null?Ji=[o]:Ji.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Im(o,u,t);xp(o,y);break e;case 1:c=u;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dn===null||!Dn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Pm(o,c,t);xp(o,T);break e}}o=o.return}while(o!==null)}Ym(n)}catch(E){t=E,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Gm(){var e=ra.current;return ra.current=na,e===null?na:e}function sd(){(be===0||be===3||be===2)&&(be=4),je===null||!(dr&268435455)&&!(Da&268435455)||bn(je,Ne)}function oa(e,t){var n=G;G|=2;var r=Gm();(je!==e||Ne!==t)&&(qt=null,or(e,t));do try{b1();break}catch(s){Km(e,s)}while(!0);if($u(),G=n,ra.current=r,me!==null)throw Error(M(261));return je=null,Ne=0,be}function b1(){for(;me!==null;)Xm(me)}function w1(){for(;me!==null&&!q0();)Xm(me)}function Xm(e){var t=Qm(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Ym(e):me=t,ed.current=null}function Ym(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f1(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,me=null;return}}else if(n=p1(n,t,Ze),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);be===0&&(be=5)}function tr(e,t,n){var r=J,s=ut.transition;try{ut.transition=null,J=1,_1(e,t,n,r)}finally{ut.transition=s,J=r}return null}function _1(e,t,n,r){do Kr();while(Nn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ny(e,o),e===je&&(me=je=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Zm($o,function(){return Kr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ut.transition,ut.transition=null;var l=J;J=1;var c=G;G|=4,ed.current=null,m1(e,n),Hm(n,e),By(Nc),Vo=!!Ec,Nc=Ec=null,e.current=n,x1(n),K0(),G=c,J=l,ut.transition=o}else e.current=n;if(mo&&(mo=!1,Nn=e,sa=s),o=e.pendingLanes,o===0&&(Dn=null),Y0(n.stateNode),Ye(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ia)throw ia=!1,e=qc,qc=null,e;return sa&1&&e.tag!==0&&Kr(),o=e.pendingLanes,o&1?e===Kc?Qi++:(Qi=0,Kc=e):Qi=0,Kn(),null}function Kr(){if(Nn!==null){var e=Ig(sa),t=ut.transition,n=J;try{if(ut.transition=null,J=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,sa=0,G&6)throw Error(M(331));var s=G;for(G|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var c=o.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for($=h;$!==null;){var g=$;switch(g.tag){case 0:case 11:case 15:Yi(8,g,o)}var m=g.child;if(m!==null)m.return=g,$=m;else for(;$!==null;){g=$;var w=g.sibling,j=g.return;if($m(g),g===h){$=null;break}if(w!==null){w.return=j,$=w;break}$=j}}}var _=o.alternate;if(_!==null){var P=_.child;if(P!==null){_.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Yi(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,$=y;break e}$=o.return}}var f=e.current;for($=f;$!==null;){l=$;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,$=x;else e:for(l=f;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Aa(9,c)}}catch(E){de(c,c.return,E)}if(c===l){$=null;break e}var T=c.sibling;if(T!==null){T.return=c.return,$=T;break e}$=c.return}}if(G=s,Kn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{J=n,ut.transition=t}}return!1}function Mp(e,t,n){t=ri(n,t),t=Im(e,t,1),e=An(e,t,1),t=Fe(),e!==null&&(Ns(e,1,t),Ye(e,t))}function de(e,t,n){if(e.tag===3)Mp(e,e,n);else for(;t!==null;){if(t.tag===3){Mp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){e=ri(n,e),e=Pm(t,e,1),t=An(t,e,1),e=Fe(),t!==null&&(Ns(t,1,e),Ye(t,e));break}}t=t.return}}function j1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Ne&n)===n&&(be===4||be===3&&(Ne&130023424)===Ne&&500>fe()-nd?or(e,0):td|=n),Ye(e,t)}function Jm(e,t){t===0&&(e.mode&1?(t=so,so<<=1,!(so&130023424)&&(so=4194304)):t=1);var n=Fe();e=rn(e,t),e!==null&&(Ns(e,t,n),Ye(e,n))}function k1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function E1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Jm(e,n)}var Qm;Qm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,h1(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,oe&&t.flags&1048576&&nm(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;To(e,t),e=t.pendingProps;var s=Zr(t,Le.current);qr(t,n),s=Xu(null,t,r,e,s,n);var o=Yu();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,Go(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Hu(t),s.updater=Ra,t.stateNode=s,s._reactInternals=t,Lc(t,r,e,n),t=Mc(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Ou(t),Me(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(To(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=S1(r),e=gt(r,e),s){case 0:t=Oc(null,t,r,e,n);break e;case 1:t=Cp(null,t,r,e,n);break e;case 11:t=Np(null,t,r,e,n);break e;case 14:t=Sp(null,t,r,gt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Oc(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Cp(e,t,r,s,n);case 3:e:{if(Lm(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,s=o.element,lm(e,t),Zo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=ri(Error(M(423)),t),t=Tp(e,t,r,n,s);break e}else if(r!==s){s=ri(Error(M(424)),t),t=Tp(e,t,r,n,s);break e}else for(et=Rn(t.stateNode.containerInfo.firstChild),tt=t,oe=!0,xt=null,n=om(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===s){t=sn(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return cm(t),e===null&&Rc(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,Sc(r,s)?l=null:o!==null&&Sc(r,o)&&(t.flags|=32),Dm(e,t),Me(e,t,l,n),t.child;case 6:return e===null&&Rc(t),null;case 13:return zm(e,t,n);case 4:return Wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ti(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),Np(e,t,r,s,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,ne(Jo,r._currentValue),r._currentValue=l,o!==null)if(_t(o.value,l)){if(o.children===s.children&&!Ge.current){t=sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Zt(-1,n&-n),u.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?u.next=u:(u.next=g.next,g.next=u),h.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ac(o.return,n,t),c.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ac(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,qr(t,n),s=dt(s),r=r(s),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,s=gt(r,t.pendingProps),s=gt(r.type,s),Sp(e,t,r,s,n);case 15:return Rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:gt(r,s),To(e,t),t.tag=1,Xe(r)?(e=!0,Go(t)):e=!1,qr(t,n),Tm(t,r,s),Lc(t,r,s,n),Mc(null,t,r,!0,e,n);case 19:return Om(e,t,n);case 22:return Am(e,t,n)}throw Error(M(156,t.tag))};function Zm(e,t){return Ng(e,t)}function N1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new N1(e,t,n,r)}function od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S1(e){if(typeof e=="function")return od(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Eu)return 11;if(e===Nu)return 14}return 2}function zn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,s,o){var l=2;if(r=e,typeof e=="function")od(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ir:return ar(n.children,s,o,t);case ku:l=8,s|=8;break;case sc:return e=ct(12,n,t,s|2),e.elementType=sc,e.lanes=o,e;case oc:return e=ct(13,n,t,s),e.elementType=oc,e.lanes=o,e;case ac:return e=ct(19,n,t,s),e.elementType=ac,e.lanes=o,e;case cg:return La(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ag:l=10;break e;case lg:l=9;break e;case Eu:l=11;break e;case Nu:l=14;break e;case xn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ct(l,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function ar(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function La(e,t,n,r){return e=ct(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C1(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ad(e,t,n,r,s,o,l,c,u){return e=new C1(e,t,n,c,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hu(o),e}function T1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ex(e){if(!e)return $n;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Xe(n))return em(e,n,t)}return t}function tx(e,t,n,r,s,o,l,c,u){return e=ad(n,r,!0,e,s,o,l,c,u),e.context=ex(null),n=e.current,r=Fe(),s=Ln(n),o=Zt(r,s),o.callback=t??null,An(n,o,s),e.current.lanes=s,Ns(e,s,r),Ye(e,r),e}function za(e,t,n,r){var s=t.current,o=Fe(),l=Ln(s);return n=ex(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(s,t,l),e!==null&&(wt(e,s,l,o),No(e,s,l)),l}function aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ld(e,t){Up(e,t),(e=e.alternate)&&Up(e,t)}function I1(){return null}var nx=typeof reportError=="function"?reportError:function(e){console.error(e)};function cd(e){this._internalRoot=e}Oa.prototype.render=cd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));za(e,t,null,null)};Oa.prototype.unmount=cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hr(function(){za(null,e,null,null)}),t[nn]=null}};function Oa(e){this._internalRoot=e}Oa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Lg(e)}};function ud(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function P1(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var h=aa(l);o.call(h)}}var l=tx(t,r,e,0,null,!1,!1,"",Fp);return e._reactRootContainer=l,e[nn]=l.current,us(e.nodeType===8?e.parentNode:e),hr(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var h=aa(u);c.call(h)}}var u=ad(e,0,!1,null,null,!1,!1,"",Fp);return e._reactRootContainer=u,e[nn]=u.current,us(e.nodeType===8?e.parentNode:e),hr(function(){za(t,u,n,r)}),u}function Ua(e,t,n,r,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var c=s;s=function(){var u=aa(l);c.call(u)}}za(t,l,e,s)}else l=P1(n,t,e,s,r);return aa(l)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fi(t.pendingLanes);n!==0&&(Tu(t,n|1),Ye(t,fe()),!(G&6)&&(ii=fe()+500,Kn()))}break;case 13:hr(function(){var r=rn(e,1);if(r!==null){var s=Fe();wt(r,e,1,s)}}),ld(e,1)}};Iu=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}ld(e,134217728)}};Rg=function(e){if(e.tag===13){var t=Ln(e),n=rn(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}ld(e,t)}};Ag=function(){return J};Dg=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};xc=function(e,t,n){switch(t){case"input":if(uc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Ta(r);if(!s)throw Error(M(90));dg(r),uc(r,s)}}}break;case"textarea":pg(e,n);break;case"select":t=n.value,t!=null&&Br(e,!!n.multiple,t,!1)}};bg=rd;wg=hr;var R1={usingClientEntryPoint:!1,Events:[Cs,Dr,Ta,vg,yg,rd]},zi={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kg(e),e===null?null:e.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ea=xo.inject(A1),It=xo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(t))throw Error(M(200));return T1(e,t,null,n)};it.createRoot=function(e,t){if(!ud(e))throw Error(M(299));var n=!1,r="",s=nx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ad(e,1,!1,null,null,n,!1,r,s),e[nn]=t.current,us(e.nodeType===8?e.parentNode:e),new cd(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=kg(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return hr(e)};it.hydrate=function(e,t,n){if(!Ma(t))throw Error(M(200));return Ua(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!ud(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",l=nx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tx(t,null,e,1,n??null,s,!1,o,l),e[nn]=t.current,us(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Oa(t)};it.render=function(e,t,n){if(!Ma(t))throw Error(M(200));return Ua(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(M(40));return e._reactRootContainer?(hr(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};it.unstable_batchedUpdates=rd;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Ua(e,t,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(e){console.error(e)}}rx(),rg.exports=it;var D1=rg.exports,$p=D1;rc.createRoot=$p.createRoot,rc.hydrateRoot=$p.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}var Sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sn||(Sn={}));const Bp="popstate";function L1(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:l,hash:c}=r.location;return Yc("",{pathname:o,search:l,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:la(s)}return O1(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function z1(){return Math.random().toString(36).substr(2,8)}function Vp(e,t){return{usr:e.state,key:e.key,idx:t}}function Yc(e,t,n,r){return n===void 0&&(n=null),ys({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hi(t):t,{state:n,key:t&&t.key||r||z1()})}function la(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function O1(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,l=s.history,c=Sn.Pop,u=null,h=g();h==null&&(h=0,l.replaceState(ys({},l.state,{idx:h}),""));function g(){return(l.state||{idx:null}).idx}function m(){c=Sn.Pop;let D=g(),y=D==null?null:D-h;h=D,u&&u({action:c,location:P.location,delta:y})}function w(D,y){c=Sn.Push;let f=Yc(P.location,D,y);h=g()+1;let x=Vp(f,h),T=P.createHref(f);try{l.pushState(x,"",T)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;s.location.assign(T)}o&&u&&u({action:c,location:P.location,delta:1})}function j(D,y){c=Sn.Replace;let f=Yc(P.location,D,y);h=g();let x=Vp(f,h),T=P.createHref(f);l.replaceState(x,"",T),o&&u&&u({action:c,location:P.location,delta:0})}function _(D){let y=s.location.origin!=="null"?s.location.origin:s.location.href,f=typeof D=="string"?D:la(D);return f=f.replace(/ $/,"%20"),ge(y,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,y)}let P={get action(){return c},get location(){return e(s,l)},listen(D){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(Bp,m),u=D,()=>{s.removeEventListener(Bp,m),u=null}},createHref(D){return t(s,D)},createURL:_,encodeLocation(D){let y=_(D);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:w,replace:j,go(D){return l.go(D)}};return P}var Hp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hp||(Hp={}));function M1(e,t,n){return n===void 0&&(n="/"),U1(e,t,n)}function U1(e,t,n,r){let s=typeof t=="string"?hi(t):t,o=hd(s.pathname||"/",n);if(o==null)return null;let l=ix(e);F1(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let h=Q1(o);c=X1(l[u],h)}return c}function ix(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,l,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(ge(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=On([r,u.relativePath]),g=n.concat(u);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),ix(o.children,t,g,h)),!(o.path==null&&!o.index)&&t.push({path:h,score:K1(h,o.index),routesMeta:g})};return e.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))s(o,l);else for(let u of sx(o.path))s(o,l,u)}),t}function sx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let l=sx(r.join("/")),c=[];return c.push(...l.map(u=>u===""?o:[o,u].join("/"))),s&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function F1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $1=/^:[\w-]+$/,B1=3,V1=2,H1=1,W1=10,q1=-2,Wp=e=>e==="*";function K1(e,t){let n=e.split("/"),r=n.length;return n.some(Wp)&&(r+=q1),t&&(r+=V1),n.filter(s=>!Wp(s)).reduce((s,o)=>s+($1.test(o)?B1:o===""?H1:W1),r)}function G1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function X1(e,t,n){let{routesMeta:r}=e,s={},o="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=Y1({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},g),w=u.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:On([o,m.pathname]),pathnameBase:r2(On([o,m.pathnameBase])),route:w}),m.pathnameBase!=="/"&&(o=On([o,m.pathnameBase]))}return l}function Y1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J1(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((h,g,m)=>{let{paramName:w,isOptional:j}=g;if(w==="*"){let P=c[m]||"";l=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const _=c[m];return j&&!_?h[w]=void 0:h[w]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:l,pattern:e}}function J1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),dd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Q1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return dd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function hd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,e2=e=>Z1.test(e);function t2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?hi(e):e,o;if(n)if(e2(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),dd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=qp(n.substring(1),"/"):o=qp(n,t)}else o=t;return{pathname:o,search:i2(r),hash:s2(s)}}function qp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function n2(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pd(e,t){let n=n2(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fd(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=hi(e):(s=ys({},e),ge(!s.pathname||!s.pathname.includes("?"),Wl("?","pathname","search",s)),ge(!s.pathname||!s.pathname.includes("#"),Wl("#","pathname","hash",s)),ge(!s.search||!s.search.includes("#"),Wl("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,c;if(l==null)c=n;else{let m=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),m-=1;s.pathname=w.join("/")}c=m>=0?t[m]:"/"}let u=t2(s,c),h=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||g)&&(u.pathname+="/"),u}const On=e=>e.join("/").replace(/\/\/+/g,"/"),r2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ox=["post","put","patch","delete"];new Set(ox);const a2=["get",...ox];new Set(a2);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bs(){return bs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bs.apply(this,arguments)}const gd=I.createContext(null),l2=I.createContext(null),Gn=I.createContext(null),Fa=I.createContext(null),cn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),ax=I.createContext(null);function c2(e,t){let{relative:n}=t===void 0?{}:t;pi()||ge(!1);let{basename:r,navigator:s}=I.useContext(Gn),{hash:o,pathname:l,search:c}=ux(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:On([r,l])),s.createHref({pathname:u,search:c,hash:o})}function pi(){return I.useContext(Fa)!=null}function un(){return pi()||ge(!1),I.useContext(Fa).location}function lx(e){I.useContext(Gn).static||I.useLayoutEffect(e)}function kt(){let{isDataRoute:e}=I.useContext(cn);return e?_2():u2()}function u2(){pi()||ge(!1);let e=I.useContext(gd),{basename:t,future:n,navigator:r}=I.useContext(Gn),{matches:s}=I.useContext(cn),{pathname:o}=un(),l=JSON.stringify(pd(s,n.v7_relativeSplatPath)),c=I.useRef(!1);return lx(()=>{c.current=!0}),I.useCallback(function(h,g){if(g===void 0&&(g={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let m=fd(h,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:On([t,m.pathname])),(g.replace?r.replace:r.push)(m,g.state,g)},[t,r,l,o,e])}function cx(){let{matches:e}=I.useContext(cn),t=e[e.length-1];return t?t.params:{}}function ux(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=I.useContext(Gn),{matches:s}=I.useContext(cn),{pathname:o}=un(),l=JSON.stringify(pd(s,r.v7_relativeSplatPath));return I.useMemo(()=>fd(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function d2(e,t){return h2(e,t)}function h2(e,t,n,r){pi()||ge(!1);let{navigator:s}=I.useContext(Gn),{matches:o}=I.useContext(cn),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let h=un(),g;if(t){var m;let D=typeof t=="string"?hi(t):t;u==="/"||(m=D.pathname)!=null&&m.startsWith(u)||ge(!1),g=D}else g=h;let w=g.pathname||"/",j=w;if(u!=="/"){let D=u.replace(/^\//,"").split("/");j="/"+w.replace(/^\//,"").split("/").slice(D.length).join("/")}let _=M1(e,{pathname:j}),P=x2(_&&_.map(D=>Object.assign({},D,{params:Object.assign({},c,D.params),pathname:On([u,s.encodeLocation?s.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?u:On([u,s.encodeLocation?s.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,n,r);return t&&P?I.createElement(Fa.Provider,{value:{location:bs({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Sn.Pop}},P):P}function p2(){let e=w2(),t=o2(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:s},n):null,null)}const f2=I.createElement(p2,null);class g2 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(cn.Provider,{value:this.props.routeContext},I.createElement(ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(e){let{routeContext:t,match:n,children:r}=e,s=I.useContext(gd);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(cn.Provider,{value:t},r)}function x2(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(s=n)==null?void 0:s.errors;if(c!=null){let g=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);g>=0||ge(!1),l=l.slice(0,Math.min(l.length,g+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=g),m.route.id){let{loaderData:w,errors:j}=n,_=m.route.loader&&w[m.route.id]===void 0&&(!j||j[m.route.id]===void 0);if(m.route.lazy||_){u=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((g,m,w)=>{let j,_=!1,P=null,D=null;n&&(j=c&&m.route.id?c[m.route.id]:void 0,P=m.route.errorElement||f2,u&&(h<0&&w===0?(j2("route-fallback"),_=!0,D=null):h===w&&(_=!0,D=m.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,w+1)),f=()=>{let x;return j?x=P:_?x=D:m.route.Component?x=I.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=g,I.createElement(m2,{match:m,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?I.createElement(g2,{location:n.location,revalidation:n.revalidation,component:P,error:j,children:f(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):f()},null)}var dx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dx||{}),hx=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hx||{});function v2(e){let t=I.useContext(gd);return t||ge(!1),t}function y2(e){let t=I.useContext(l2);return t||ge(!1),t}function b2(e){let t=I.useContext(cn);return t||ge(!1),t}function px(e){let t=b2(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function w2(){var e;let t=I.useContext(ax),n=y2(),r=px();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _2(){let{router:e}=v2(dx.UseNavigateStable),t=px(hx.UseNavigateStable),n=I.useRef(!1);return lx(()=>{n.current=!0}),I.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,bs({fromRouteId:t},o)))},[e,t])}const Kp={};function j2(e,t,n){Kp[e]||(Kp[e]=!0)}function k2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ao(e){let{to:t,replace:n,state:r,relative:s}=e;pi()||ge(!1);let{future:o,static:l}=I.useContext(Gn),{matches:c}=I.useContext(cn),{pathname:u}=un(),h=kt(),g=fd(t,pd(c,o.v7_relativeSplatPath),u,s==="path"),m=JSON.stringify(g);return I.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:s}),[h,m,s,n,r]),null}function ee(e){ge(!1)}function E2(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Sn.Pop,navigator:o,static:l=!1,future:c}=e;pi()&&ge(!1);let u=t.replace(/^\/*/,"/"),h=I.useMemo(()=>({basename:u,navigator:o,static:l,future:bs({v7_relativeSplatPath:!1},c)}),[u,c,o,l]);typeof r=="string"&&(r=hi(r));let{pathname:g="/",search:m="",hash:w="",state:j=null,key:_="default"}=r,P=I.useMemo(()=>{let D=hd(g,u);return D==null?null:{location:{pathname:D,search:m,hash:w,state:j,key:_},navigationType:s}},[u,g,m,w,j,_,s]);return P==null?null:I.createElement(Gn.Provider,{value:h},I.createElement(Fa.Provider,{children:n,value:P}))}function Gp(e){let{children:t,location:n}=e;return d2(Jc(t),n)}new Promise(()=>{});function Jc(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(r,s)=>{if(!I.isValidElement(r))return;let o=[...t,s];if(r.type===I.Fragment){n.push.apply(n,Jc(r.props.children,o));return}r.type!==ee&&ge(!1),!r.props.index||!r.props.children||ge(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Jc(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qc.apply(this,arguments)}function N2(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function S2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C2(e,t){return e.button===0&&(!t||t==="_self")&&!S2(e)}function Zc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function T2(e,t){let n=Zc(e);return t&&t.forEach((r,s)=>{n.has(s)||t.getAll(s).forEach(o=>{n.append(s,o)})}),n}const I2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P2="6";try{window.__reactRouterVersion=P2}catch{}const R2="startTransition",Xp=j0[R2];function A2(e){let{basename:t,children:n,future:r,window:s}=e,o=I.useRef();o.current==null&&(o.current=L1({window:s,v5Compat:!0}));let l=o.current,[c,u]=I.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},g=I.useCallback(m=>{h&&Xp?Xp(()=>u(m)):u(m)},[u,h]);return I.useLayoutEffect(()=>l.listen(g),[l,g]),I.useEffect(()=>k2(r),[r]),I.createElement(E2,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const D2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=I.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:o,replace:l,state:c,target:u,to:h,preventScrollReset:g,viewTransition:m}=t,w=N2(t,I2),{basename:j}=I.useContext(Gn),_,P=!1;if(typeof h=="string"&&L2.test(h)&&(_=h,D2))try{let x=new URL(window.location.href),T=h.startsWith("//")?new URL(x.protocol+h):new URL(h),E=hd(T.pathname,j);T.origin===x.origin&&E!=null?h=E+T.search+T.hash:P=!0}catch{}let D=c2(h,{relative:s}),y=z2(h,{replace:l,state:c,target:u,preventScrollReset:g,relative:s,viewTransition:m});function f(x){r&&r(x),x.defaultPrevented||y(x)}return I.createElement("a",Qc({},w,{href:_||D,onClick:P||o?r:f,ref:n,target:u}))});var Yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Yp||(Yp={}));var Jp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));function z2(e,t){let{target:n,replace:r,state:s,preventScrollReset:o,relative:l,viewTransition:c}=t===void 0?{}:t,u=kt(),h=un(),g=ux(e,{relative:l});return I.useCallback(m=>{if(C2(m,n)){m.preventDefault();let w=r!==void 0?r:la(h)===la(g);u(e,{replace:w,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[h,u,g,r,s,n,e,o,l,c])}function O2(e){let t=I.useRef(Zc(e)),n=I.useRef(!1),r=un(),s=I.useMemo(()=>T2(r.search,n.current?null:t.current),[r.search]),o=kt(),l=I.useCallback((c,u)=>{const h=Zc(typeof c=="function"?c(s):c);n.current=!0,o("?"+h,u)},[o,s]);return[s,l]}const fx=I.createContext(void 0),we=()=>{const e=I.useContext(fx);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},M2=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},U2=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},F2=({children:e})=>{const[t,n]=I.useState(null),[r,s]=I.useState(!0),[o,l]=I.useState(null),c=async()=>{try{s(!0),l(null);const{type:h,value:g}=U2(),m=h==="subdomain"?`/api/tenants/by-subdomain/${g}`:`/api/tenants/by-domain/${encodeURIComponent(g)}`,w=await fetch(`http://localhost:3001${m}`);if(!w.ok)throw w.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const j=await w.json();if(j.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(j.status==="cancelled")throw new Error("Cuenta cancelada.");n(j),M2(j.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{s(!1)}};I.useEffect(()=>{c()},[]);const u=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return i.jsx(fx.Provider,{value:{tenant:t,loading:r,error:o,isWhiteLabel:u,refreshTenant:c},children:e})};var Qp={};/**
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
 */const gx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},$2=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],l=e[n++],c=e[n++],u=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},mx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],l=s+1<e.length,c=l?e[s+1]:0,u=s+2<e.length,h=u?e[s+2]:0,g=o>>2,m=(o&3)<<4|c>>4;let w=(c&15)<<2|h>>6,j=h&63;u||(j=64,l||(w=64)),r.push(n[g],n[m],n[w],n[j])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gx(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$2(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const m=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||c==null||h==null||m==null)throw new B2;const w=o<<2|c>>4;if(r.push(w),h!==64){const j=c<<4&240|h>>2;if(r.push(j),m!==64){const _=h<<6&192|m;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class B2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const V2=function(e){const t=gx(e);return mx.encodeByteArray(t,!0)},ca=function(e){return V2(e).replace(/\./g,"")},xx=function(e){try{return mx.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function H2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W2=()=>H2().__FIREBASE_DEFAULTS__,q2=()=>{if(typeof process>"u"||typeof Qp>"u")return;const e=Qp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},K2=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xx(e[1]);return t&&JSON.parse(t)},md=()=>{try{return W2()||q2()||K2()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},vx=e=>{var t,n;return(n=(t=md())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yx=e=>{const t=vx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},bx=()=>{var e;return(e=md())===null||e===void 0?void 0:e.config},wx=e=>{var t;return(t=md())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class G2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function _x(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ca(JSON.stringify(n)),ca(JSON.stringify(l)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Y2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function J2(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Q2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Z2(){const e=$e();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function eb(){try{return typeof indexedDB=="object"}catch{return!1}}function tb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const nb="FirebaseError";class zt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=nb,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?rb(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new zt(s,c,r)}}function rb(e,t){return e.replace(ib,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const ib=/\{\$([^}]+)}/g;function sb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ua(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],l=t[s];if(Zp(o)&&Zp(l)){if(!ua(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(e){return e!==null&&typeof e=="object"}/**
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
 */function Ps(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Bi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function Vi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ob(e,t){const n=new ab(e,t);return n.subscribe.bind(n)}class ab{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lb(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=ql),s.error===void 0&&(s.error=ql),s.complete===void 0&&(s.complete=ql);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ql(){}/**
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
 */function Et(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class cb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new G2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(db(t))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=nr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=nr){return this.instances.has(t)}getOptions(t=nr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ub(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=nr){return this.component?this.component.multipleInstances?t:nr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ub(e){return e===nr?void 0:e}function db(e){return e.instantiationMode==="EAGER"}/**
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
 */class hb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const pb={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},fb=Y.INFO,gb={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},mb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=gb[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xd{constructor(t){this.name=t,this._logLevel=fb,this._logHandler=mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const xb=(e,t)=>t.some(n=>e instanceof n);let ef,tf;function vb(){return ef||(ef=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yb(){return tf||(tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jx=new WeakMap,eu=new WeakMap,kx=new WeakMap,Kl=new WeakMap,vd=new WeakMap;function bb(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(Mn(e.result)),s()},l=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&jx.set(n,e)}).catch(()=>{}),vd.set(t,e),t}function wb(e){if(eu.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),s()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});eu.set(e,t)}let tu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return eu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kx.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _b(e){tu=e(tu)}function jb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Gl(this),t,...n);return kx.set(r,t.sort?t.sort():[t]),Mn(r)}:yb().includes(e)?function(...t){return e.apply(Gl(this),t),Mn(jx.get(this))}:function(...t){return Mn(e.apply(Gl(this),t))}}function kb(e){return typeof e=="function"?jb(e):(e instanceof IDBTransaction&&wb(e),xb(e,vb())?new Proxy(e,tu):e)}function Mn(e){if(e instanceof IDBRequest)return bb(e);if(Kl.has(e))return Kl.get(e);const t=kb(e);return t!==e&&(Kl.set(e,t),vd.set(t,e)),t}const Gl=e=>vd.get(e);function Eb(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(e,t),c=Mn(l);return r&&l.addEventListener("upgradeneeded",u=>{r(Mn(l.result),u.oldVersion,u.newVersion,Mn(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Nb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Xl=new Map;function nf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xl.get(t))return Xl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Sb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Nb.includes(n)))return;const o=async function(l,...c){const u=this.transaction(l,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&u.done]))[0]};return Xl.set(t,o),o}_b(e=>({...e,get:(t,n,r)=>nf(t,n)||e.get(t,n,r),has:(t,n)=>!!nf(t,n)||e.has(t,n)}));/**
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
 */class Cb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nu="@firebase/app",rf="0.10.13";/**
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
 */const on=new xd("@firebase/app"),Ib="@firebase/app-compat",Pb="@firebase/analytics-compat",Rb="@firebase/analytics",Ab="@firebase/app-check-compat",Db="@firebase/app-check",Lb="@firebase/auth",zb="@firebase/auth-compat",Ob="@firebase/database",Mb="@firebase/data-connect",Ub="@firebase/database-compat",Fb="@firebase/functions",$b="@firebase/functions-compat",Bb="@firebase/installations",Vb="@firebase/installations-compat",Hb="@firebase/messaging",Wb="@firebase/messaging-compat",qb="@firebase/performance",Kb="@firebase/performance-compat",Gb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Yb="@firebase/storage",Jb="@firebase/storage-compat",Qb="@firebase/firestore",Zb="@firebase/vertexai-preview",ew="@firebase/firestore-compat",tw="firebase",nw="10.14.1";/**
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
 */const ru="[DEFAULT]",rw={[nu]:"fire-core",[Ib]:"fire-core-compat",[Rb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Db]:"fire-app-check",[Ab]:"fire-app-check-compat",[Lb]:"fire-auth",[zb]:"fire-auth-compat",[Ob]:"fire-rtdb",[Mb]:"fire-data-connect",[Ub]:"fire-rtdb-compat",[Fb]:"fire-fn",[$b]:"fire-fn-compat",[Bb]:"fire-iid",[Vb]:"fire-iid-compat",[Hb]:"fire-fcm",[Wb]:"fire-fcm-compat",[qb]:"fire-perf",[Kb]:"fire-perf-compat",[Gb]:"fire-rc",[Xb]:"fire-rc-compat",[Yb]:"fire-gcs",[Jb]:"fire-gcs-compat",[Qb]:"fire-fst",[ew]:"fire-fst-compat",[Zb]:"fire-vertex","fire-js":"fire-js",[tw]:"fire-js-all"};/**
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
 */const da=new Map,iw=new Map,iu=new Map;function sf(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pr(e){const t=e.name;if(iu.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;iu.set(t,e);for(const n of da.values())sf(n,e);for(const n of iw.values())sf(n,e);return!0}function $a(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Tt(e){return e.settings!==void 0}/**
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
 */const sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new Is("app","Firebase",sw);/**
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
 */class ow{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=nw;function Ex(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=bx()),!n)throw Un.create("no-options");const o=da.get(s);if(o){if(ua(n,o.options)&&ua(r,o.config))return o;throw Un.create("duplicate-app",{appName:s})}const l=new hb(s);for(const u of iu.values())l.addComponent(u);const c=new ow(n,r,l);return da.set(s,c),c}function yd(e=ru){const t=da.get(e);if(!t&&e===ru&&bx())return Ex();if(!t)throw Un.create("no-app",{appName:e});return t}function Rt(e,t,n){var r;let s=(r=rw[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(c.join(" "));return}pr(new Bn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const aw="firebase-heartbeat-database",lw=1,ws="firebase-heartbeat-store";let Yl=null;function Nx(){return Yl||(Yl=Eb(aw,lw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ws)}catch(n){console.warn(n)}}}}).catch(e=>{throw Un.create("idb-open",{originalErrorMessage:e.message})})),Yl}async function cw(e){try{const n=(await Nx()).transaction(ws),r=await n.objectStore(ws).get(Sx(e));return await n.done,r}catch(t){if(t instanceof zt)on.warn(t.message);else{const n=Un.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function of(e,t){try{const r=(await Nx()).transaction(ws,"readwrite");await r.objectStore(ws).put(t,Sx(e)),await r.done}catch(n){if(n instanceof zt)on.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function Sx(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uw=1024,dw=30*24*60*60*1e3;class hw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=af();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=dw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){on.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:s}=pw(this._heartbeatsCache.heartbeats),o=ca(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return on.warn(n),""}}}function af(){return new Date().toISOString().substring(0,10)}function pw(e,t=uw){const n=[];let r=e.slice();for(const s of e){const o=n.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),lf(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eb()?tb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function lf(e){return ca(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function gw(e){pr(new Bn("platform-logger",t=>new Cb(t),"PRIVATE")),pr(new Bn("heartbeat",t=>new hw(t),"PRIVATE")),Rt(nu,rf,e),Rt(nu,rf,"esm2017"),Rt("fire-js","")}gw("");function bd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Cx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mw=Cx,Tx=new Is("auth","Firebase",Cx());/**
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
 */const ha=new xd("@firebase/auth");function xw(e,...t){ha.logLevel<=Y.WARN&&ha.warn(`Auth (${_r}): ${e}`,...t)}function Do(e,...t){ha.logLevel<=Y.ERROR&&ha.error(`Auth (${_r}): ${e}`,...t)}/**
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
 */function jt(e,...t){throw wd(e,...t)}function At(e,...t){return wd(e,...t)}function Ix(e,t,n){const r=Object.assign(Object.assign({},mw()),{[t]:n});return new Is("auth","Firebase",r).create(t,{appName:e.name})}function en(e){return Ix(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tx.create(e,...t)}function V(e,t,...n){if(!e)throw wd(t,...n)}function Yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Do(t),new Error(t)}function an(e,t){e||Yt(t)}/**
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
 */function su(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function vw(){return cf()==="http:"||cf()==="https:"}function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vw()||J2()||"connection"in navigator)?navigator.onLine:!0}function bw(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Rs{constructor(t,n){this.shortDelay=t,this.longDelay=n,an(n>t,"Short delay should be less than long delay!"),this.isMobile=X2()||Q2()}get(){return yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _d(e,t){an(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Px{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ww={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _w=new Rs(3e4,6e4);function dn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,s={}){return Rx(e,s,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const c=Ps(Object.assign({key:e.config.apiKey},l)).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:u},o);return Y2()||(h.referrerPolicy="no-referrer"),Px.fetch()(Ax(e,e.config.apiHost,n,c),h)})}async function Rx(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ww),t);try{const s=new kw(e),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw vo(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vo(e,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw vo(e,"email-already-in-use",l);if(u==="USER_DISABLED")throw vo(e,"user-disabled",l);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ix(e,g,h);jt(e,g)}}catch(s){if(s instanceof zt)throw s;jt(e,"network-request-failed",{message:String(s)})}}async function As(e,t,n,r,s={}){const o=await Ot(e,t,n,r,s);return"mfaPendingCredential"in o&&jt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Ax(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?_d(e.config,s):`${e.config.apiScheme}://${s}`}function jw(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kw{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(At(this.auth,"network-request-failed")),_w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=At(e,t,r);return s.customData._tokenResponse=n,s}function uf(e){return e!==void 0&&e.enterprise!==void 0}class Ew{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return jw(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Nw(e,t){return Ot(e,"GET","/v2/recaptchaConfig",dn(e,t))}/**
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
 */async function Sw(e,t){return Ot(e,"POST","/v1/accounts:delete",t)}async function Dx(e,t){return Ot(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Zi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Cw(e,t=!1){const n=Et(e),r=await n.getIdToken(t),s=jd(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:s,token:r,authTime:Zi(Jl(s.auth_time)),issuedAtTime:Zi(Jl(s.iat)),expirationTime:Zi(Jl(s.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Jl(e){return Number(e)*1e3}function jd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=xx(n);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(e){const t=jd(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function si(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof zt&&Tw(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Tw({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Iw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ou{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zi(this.lastLoginAt),this.creationTime=Zi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(e){var t;const n=e.auth,r=await e.getIdToken(),s=await si(e,Dx(n,{idToken:r}));V(s==null?void 0:s.users.length,n,"internal-error");const o=s.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Lx(o.providerUserInfo):[],c=Rw(e.providerData,l),u=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!(c!=null&&c.length),g=u?h:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ou(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(e,m)}async function Pw(e){const t=Et(e);await pa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rw(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Lx(e){return e.map(t=>{var{providerId:n}=t,r=bd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Aw(e,t){const n=await Rx(e,{},async()=>{const r=Ps({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:o}=e.config,l=Ax(e,s,"/v1/token",`key=${o}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Px.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dw(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",dn(e,t))}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):df(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=df(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:o}=await Aw(t,n);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:o}=n,l=new Gr;return r&&(V(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),l.accessToken=s),o&&(V(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function mn(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Jt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,o=bd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ou(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await si(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Cw(this,t)}reload(){return Pw(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await si(this,Sw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,o,l,c,u,h,g;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(s=n.email)!==null&&s!==void 0?s:void 0,j=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(l=n.photoURL)!==null&&l!==void 0?l:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(h=n.createdAt)!==null&&h!==void 0?h:void 0,f=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:x,emailVerified:T,isAnonymous:E,providerData:O,stsTokenManager:k}=n;V(x&&k,t,"internal-error");const b=Gr.fromJSON(this.name,k);V(typeof x=="string",t,"internal-error"),mn(m,t.name),mn(w,t.name),V(typeof T=="boolean",t,"internal-error"),V(typeof E=="boolean",t,"internal-error"),mn(j,t.name),mn(_,t.name),mn(P,t.name),mn(D,t.name),mn(y,t.name),mn(f,t.name);const N=new Jt({uid:x,auth:t,email:w,emailVerified:T,displayName:m,isAnonymous:E,photoURL:_,phoneNumber:j,tenantId:P,stsTokenManager:b,createdAt:y,lastLoginAt:f});return O&&Array.isArray(O)&&(N.providerData=O.map(C=>Object.assign({},C))),D&&(N._redirectEventId=D),N}static async _fromIdTokenResponse(t,n,r=!1){const s=new Gr;s.updateFromServerResponse(n);const o=new Jt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await pa(o),o}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Lx(s.providerUserInfo):[],l=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new Gr;c.updateFromIdToken(r);const u=new Jt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ou(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,h),u}}/**
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
 */const hf=new Map;function Qt(e){an(e instanceof Function,"Expected a class definition");let t=hf.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hf.set(e,t),t)}/**
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
 */class zx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zx.type="NONE";const pf=zx;/**
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
 */function Lo(e,t,n){return`firebase:${e}:${t}:${n}`}class Xr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Lo(this.userKey,s.apiKey,o),this.fullPersistenceKey=Lo("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Jt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Xr(Qt(pf),t,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Qt(pf);const l=Lo(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const g=await h._get(l);if(g){const m=Jt._fromJSON(t,g);h!==o&&(c=m),o=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Xr(o,t,r):(o=u[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(l)}catch{}})),new Xr(o,t,r))}}/**
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
 */function ff(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fx(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ox(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Bx(t))return"Blackberry";if(Vx(t))return"Webos";if(Mx(t))return"Safari";if((t.includes("chrome/")||Ux(t))&&!t.includes("edge/"))return"Chrome";if($x(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ox(e=$e()){return/firefox\//i.test(e)}function Mx(e=$e()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ux(e=$e()){return/crios\//i.test(e)}function Fx(e=$e()){return/iemobile/i.test(e)}function $x(e=$e()){return/android/i.test(e)}function Bx(e=$e()){return/blackberry/i.test(e)}function Vx(e=$e()){return/webos/i.test(e)}function kd(e=$e()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lw(e=$e()){var t;return kd(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function zw(){return Z2()&&document.documentMode===10}function Hx(e=$e()){return kd(e)||$x(e)||Vx(e)||Bx(e)||/windows phone/i.test(e)||Fx(e)}/**
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
 */function Wx(e,t=[]){let n;switch(e){case"Browser":n=ff($e());break;case"Worker":n=`${ff($e())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
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
 */class Ow{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,c)=>{try{const u=t(o);l(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mw(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",dn(e,t))}/**
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
 */const Uw=6;class Fw{constructor(t){var n,r,s,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:Uw,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,o,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class $w{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gf(this),this.idTokenSubscription=new gf(this),this.beforeStateQueue=new Ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Dx(this,{idToken:t}),r=await Jt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Tt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(t);(!l||l===c)&&(u!=null&&u.user)&&(s=u.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await pa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=bw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Tt(this.app))return Promise.reject(en(this));const n=t?Et(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Tt(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Mw(this),n=new Fw(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Is("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(c,this,"internal-error"),c.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,s);return()=>{l=!0,u()}}else{const u=t.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&xw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(e){return Et(e)}class gf{constructor(t){this.auth=t,this.observer=null,this.addObserver=ob(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bw(e){Ba=e}function qx(e){return Ba.loadJS(e)}function Vw(){return Ba.recaptchaEnterpriseScript}function Hw(){return Ba.gapiScript}function Ww(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const qw="recaptcha-enterprise",Kw="NO_RECAPTCHA";class Gw{constructor(t){this.type=qw,this.auth=Xn(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,c)=>{Nw(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ew(u);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,l(h.siteKey)}}).catch(u=>{c(u)})})}function s(o,l,c){const u=window.grecaptcha;uf(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:t}).then(h=>{l(h)}).catch(()=>{l(Kw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(c=>{if(!n&&uf(window.grecaptcha))s(c,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Vw();u.length!==0&&(u+=c),qx(u).then(()=>{s(c,o,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function mf(e,t,n,r=!1){const s=new Gw(e);let o;try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function fa(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(o)})}/**
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
 */function Xw(e,t){const n=$a(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(ua(o,t??{}))return s;jt(s,"already-initialized")}return n.initialize({options:t})}function Yw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Jw(e,t,n){const r=Xn(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,o=Kx(t),{host:l,port:c}=Qw(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${o}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})}),Zw()}function Kx(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Qw(e){const t=Kx(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:xf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:xf(l)}}}function xf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Zw(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ed{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(t){return Yt("not implemented")}_linkToIdToken(t,n){return Yt("not implemented")}_getReauthenticationResolver(t){return Yt("not implemented")}}async function e_(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function t_(e,t){return As(e,"POST","/v1/accounts:signInWithPassword",dn(e,t))}async function n_(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",dn(e,t))}async function r_(e,t){return n_(e,t)}/**
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
 */async function i_(e,t){return As(e,"POST","/v1/accounts:signInWithEmailLink",dn(e,t))}async function s_(e,t){return As(e,"POST","/v1/accounts:signInWithEmailLink",dn(e,t))}/**
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
 */class _s extends Ed{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new _s(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new _s(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(t,n,"signInWithPassword",t_);case"emailLink":return i_(t,{email:this._email,oobCode:this._password});default:jt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(t,r,"signUpPassword",e_);case"emailLink":return s_(t,{idToken:n,email:this._email,oobCode:this._password});default:jt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Yr(e,t){return As(e,"POST","/v1/accounts:signInWithIdp",dn(e,t))}/**
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
 */const o_="http://localhost";class fr extends Ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,o=bd(n,["providerId","signInMethod"]);if(!r||!s)return null;const l=new fr(r,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return Yr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Yr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Yr(t,n)}buildRequest(){const t={requestUri:o_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ps(n)}return t}}/**
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
 */function a_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function l_(e){const t=Bi(Vi(e)).link,n=t?Bi(Vi(t)).deep_link_id:null,r=Bi(Vi(e)).deep_link_id;return(r?Bi(Vi(r)).link:null)||r||n||t||e}class Nd{constructor(t){var n,r,s,o,l,c;const u=Bi(Vi(t)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,m=a_((s=u.mode)!==null&&s!==void 0?s:null);V(h&&g&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=g,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=l_(t);try{return new Nd(n)}catch{return null}}}/**
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
 */class fi{constructor(){this.providerId=fi.PROVIDER_ID}static credential(t,n){return _s._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Nd.parseLink(n);return V(r,"argument-error"),_s._fromEmailAndCode(t,r.code,r.tenantId)}}fi.PROVIDER_ID="password";fi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gx{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Gx{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Ds{constructor(){super("facebook.com")}static credential(t){return fr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class jn extends Ds{constructor(){super("github.com")}static credential(t){return fr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jn.credentialFromTaggedObject(t)}static credentialFromError(t){return jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jn.credential(t.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class kn extends Ds{constructor(){super("twitter.com")}static credential(t,n){return fr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function c_(e,t){return As(e,"POST","/v1/accounts:signUp",dn(e,t))}/**
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
 */class gr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const o=await Jt._fromIdTokenResponse(t,r,s),l=vf(r);return new gr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=vf(r);return new gr({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function vf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ga extends zt{constructor(t,n,r,s){var o;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new ga(t,n,r,s)}}function Xx(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(e,o,t,r):o})}async function u_(e,t,n=!1){const r=await si(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gr._forOperation(e,"link",r)}/**
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
 */async function d_(e,t,n=!1){const{auth:r}=e;if(Tt(r.app))return Promise.reject(en(r));const s="reauthenticate";try{const o=await si(e,Xx(r,s,t,e),n);V(o.idToken,r,"internal-error");const l=jd(o.idToken);V(l,r,"internal-error");const{sub:c}=l;return V(e.uid===c,r,"user-mismatch"),gr._forOperation(e,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),o}}/**
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
 */async function Yx(e,t,n=!1){if(Tt(e.app))return Promise.reject(en(e));const r="signIn",s=await Xx(e,r,t),o=await gr._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(o.user),o}async function h_(e,t){return Yx(Xn(e),t)}/**
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
 */async function Jx(e){const t=Xn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function p_(e,t,n){const r=Xn(e);await fa(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",r_)}async function f_(e,t,n){if(Tt(e.app))return Promise.reject(en(e));const r=Xn(e),l=await fa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",c_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Jx(e),u}),c=await gr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function g_(e,t,n){return Tt(e.app)?Promise.reject(en(e)):h_(Et(e),fi.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jx(e),r})}/**
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
 */async function m_(e,t){return Ot(e,"POST","/v1/accounts:update",t)}/**
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
 */async function x_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Et(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await si(r,m_(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function v_(e,t,n,r){return Et(e).onIdTokenChanged(t,n,r)}function y_(e,t,n){return Et(e).beforeAuthStateChanged(t,n)}function b_(e,t,n,r){return Et(e).onAuthStateChanged(t,n,r)}function w_(e){return Et(e).signOut()}const ma="__sak";/**
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
 */class Qx{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const __=1e3,j_=10;class Zx extends Qx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);zw()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,j_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zx.type="LOCAL";const k_=Zx;/**
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
 */class ev extends Qx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ev.type="SESSION";const tv=ev;/**
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
 */function E_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Va{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new Va(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:o}=n.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(l).map(async h=>h(n.origin,o)),u=await E_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
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
 */class N_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,l;return new Promise((c,u)=>{const h=Sd("",20);s.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:s,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(g),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Dt(){return window}function S_(e){Dt().location.href=e}/**
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
 */function nv(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function C_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function I_(){return nv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",P_=1,xa="firebaseLocalStorage",iv="fbase_key";class Ls{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ha(e,t){return e.transaction([xa],t?"readwrite":"readonly").objectStore(xa)}function R_(){const e=indexedDB.deleteDatabase(rv);return new Ls(e).toPromise()}function au(){const e=indexedDB.open(rv,P_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(xa,{keyPath:iv})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(xa)?t(r):(r.close(),await R_(),t(await au()))})})}async function yf(e,t,n){const r=Ha(e,!0).put({[iv]:t,value:n});return new Ls(r).toPromise()}async function A_(e,t){const n=Ha(e,!1).get(t),r=await new Ls(n).toPromise();return r===void 0?null:r.value}function bf(e,t){const n=Ha(e,!0).delete(t);return new Ls(n).toPromise()}const D_=800,L_=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await au(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>L_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(I_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await C_(),!this.activeServiceWorker)return;this.sender=new N_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||T_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await au();return await yf(t,ma,"1"),await bf(t,ma),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>A_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const o=Ha(s,!1).getAll();return new Ls(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:o}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const z_=sv;new Rs(3e4,6e4);/**
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
 */function O_(e,t){return t?Qt(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Cd extends Ed{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Yr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Yr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Yr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function M_(e){return Yx(e.auth,new Cd(e),e.bypassAuthState)}function U_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),d_(n,new Cd(e),e.bypassAuthState)}async function F_(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),u_(n,new Cd(e),e.bypassAuthState)}/**
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
 */class ov{constructor(t,n,r,s,o=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:o,error:l,type:c}=t;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return M_;case"linkViaPopup":case"linkViaRedirect":return F_;case"reauthViaPopup":case"reauthViaRedirect":return U_;default:jt(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $_=new Rs(2e3,1e4);class $r extends ov{constructor(t,n,r,s,o){super(t,n,s,o),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const t=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,$_.get())};t()}}$r.currentPopupAction=null;/**
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
 */const B_="pendingRedirect",zo=new Map;class V_ extends ov{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=zo.get(this.auth._key());if(!t){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}zo.set(this.auth._key(),t)}return this.bypassAuthState||zo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(e,t){const n=K_(t),r=q_(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function W_(e,t){zo.set(e._key(),t)}function q_(e){return Qt(e._redirectPersistence)}function K_(e){return Lo(B_,e.config.apiKey,e.name)}async function G_(e,t,n=!1){if(Tt(e.app))return Promise.reject(en(e));const r=Xn(e),s=O_(r,t),l=await new V_(r,s,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
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
 */const X_=10*60*1e3;class Y_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!J_(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!av(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(At(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=X_&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(t))}saveEventToCache(t){this.cachedEventUids.add(wf(t)),this.lastProcessedEventTime=Date.now()}}function wf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function av({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function J_(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return av(e);default:return!1}}/**
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
 */async function Q_(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
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
 */const Z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ej=/^https?/;async function tj(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Q_(e);for(const n of t)try{if(nj(n))return}catch{}jt(e,"unauthorized-domain")}function nj(e){const t=su(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!ej.test(n))return!1;if(Z_.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rj=new Rs(3e4,6e4);function _f(){const e=Dt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ij(e){return new Promise((t,n)=>{var r,s,o;function l(){_f(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_f(),n(At(e,"network-request-failed"))},timeout:rj.get()})}if(!((s=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((o=Dt().gapi)===null||o===void 0)&&o.load)l();else{const c=Ww("iframefcb");return Dt()[c]=()=>{gapi.load?l():n(At(e,"network-request-failed"))},qx(`${Hw()}?onload=${c}`).catch(u=>n(u))}}).catch(t=>{throw Oo=null,t})}let Oo=null;function sj(e){return Oo=Oo||ij(e),Oo}/**
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
 */const oj=new Rs(5e3,15e3),aj="__/auth/iframe",lj="emulator/auth/iframe",cj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dj(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?_d(t,lj):`https://${e.config.authDomain}/${aj}`,r={apiKey:t.apiKey,appName:e.name,v:_r},s=uj.get(e.config.apiHost);s&&(r.eid=s);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ps(r).slice(1)}`}async function hj(e){const t=await sj(e),n=Dt().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:dj(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cj,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const l=At(e,"network-request-failed"),c=Dt().setTimeout(()=>{o(l)},oj.get());function u(){Dt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{o(l)})}))}/**
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
 */const pj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fj=500,gj=600,mj="_blank",xj="http://localhost";class jf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vj(e,t,n,r=fj,s=gj){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},pj),{width:r.toString(),height:s.toString(),top:o,left:l}),h=$e().toLowerCase();n&&(c=Ux(h)?mj:n),Ox(h)&&(t=t||xj,u.scrollbars="yes");const g=Object.entries(u).reduce((w,[j,_])=>`${w}${j}=${_},`,"");if(Lw(h)&&c!=="_self")return yj(t||"",c),new jf(null);const m=window.open(t||"",c,g);V(m,e,"popup-blocked");try{m.focus()}catch{}return new jf(m)}function yj(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bj="__/auth/handler",wj="emulator/auth/handler",_j=encodeURIComponent("fac");async function kf(e,t,n,r,s,o){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_r,eventId:s};if(t instanceof Gx){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",sb(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,m]of Object.entries({}))l[g]=m}if(t instanceof Ds){const g=t.getScopes().filter(m=>m!=="");g.length>0&&(l.scopes=g.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await e._getAppCheckToken(),h=u?`#${_j}=${encodeURIComponent(u)}`:"";return`${jj(e)}?${Ps(c).slice(1)}${h}`}function jj({config:e}){return e.emulator?_d(e,wj):`https://${e.authDomain}/${bj}`}/**
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
 */const Ql="webStorageSupport";class kj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=G_,this._overrideRedirectResult=W_}async _openPopup(t,n,r,s){var o;an((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await kf(t,n,r,su(),s);return vj(t,l,Sd())}async _openRedirect(t,n,r,s){await this._originValidation(t);const o=await kf(t,n,r,su(),s);return S_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(an(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await hj(t),r=new Y_(t);return n.register("authEvent",s=>(V(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ql,{type:Ql},s=>{var o;const l=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Ql];l!==void 0&&n(!!l),jt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tj(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Mx()||kd()}}const Ej=kj;var Ef="@firebase/auth",Nf="1.7.9";/**
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
 */class Nj{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sj(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cj(e){pr(new Bn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wx(e)},h=new $w(r,s,o,u);return Yw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),pr(new Bn("auth-internal",t=>{const n=Xn(t.getProvider("auth").getImmediate());return(r=>new Nj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(Ef,Nf,Sj(e)),Rt(Ef,Nf,"esm2017")}/**
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
 */const Tj=5*60,Ij=wx("authIdTokenMaxAge")||Tj;let Sf=null;const Pj=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ij)return;const s=n==null?void 0:n.token;Sf!==s&&(Sf=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Rj(e=yd()){const t=$a(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Xw(e,{popupRedirectResolver:Ej,persistence:[z_,k_,tv]}),r=wx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=Pj(o.toString());y_(n,l,()=>l(n.currentUser)),v_(n,c=>l(c))}}const s=vx("auth");return s&&Jw(n,`http://${s}`),n}function Aj(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Bw({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const o=At("internal-error");o.customData=s,n(o)},r.type="text/javascript",r.charset="UTF-8",Aj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cj("Browser");var Dj="firebase",Lj="10.14.1";/**
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
 */Rt(Dj,Lj,"app");var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,b){function N(){}N.prototype=b.prototype,k.D=b.prototype,k.prototype=new N,k.prototype.constructor=k,k.C=function(C,A,R){for(var S=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)S[xe-2]=arguments[xe];return b.prototype[A].apply(C,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,b,N){N||(N=0);var C=Array(16);if(typeof b=="string")for(var A=0;16>A;++A)C[A]=b.charCodeAt(N++)|b.charCodeAt(N++)<<8|b.charCodeAt(N++)<<16|b.charCodeAt(N++)<<24;else for(A=0;16>A;++A)C[A]=b[N++]|b[N++]<<8|b[N++]<<16|b[N++]<<24;b=k.g[0],N=k.g[1],A=k.g[2];var R=k.g[3],S=b+(R^N&(A^R))+C[0]+3614090360&4294967295;b=N+(S<<7&4294967295|S>>>25),S=R+(A^b&(N^A))+C[1]+3905402710&4294967295,R=b+(S<<12&4294967295|S>>>20),S=A+(N^R&(b^N))+C[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=N+(b^A&(R^b))+C[3]+3250441966&4294967295,N=A+(S<<22&4294967295|S>>>10),S=b+(R^N&(A^R))+C[4]+4118548399&4294967295,b=N+(S<<7&4294967295|S>>>25),S=R+(A^b&(N^A))+C[5]+1200080426&4294967295,R=b+(S<<12&4294967295|S>>>20),S=A+(N^R&(b^N))+C[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=N+(b^A&(R^b))+C[7]+4249261313&4294967295,N=A+(S<<22&4294967295|S>>>10),S=b+(R^N&(A^R))+C[8]+1770035416&4294967295,b=N+(S<<7&4294967295|S>>>25),S=R+(A^b&(N^A))+C[9]+2336552879&4294967295,R=b+(S<<12&4294967295|S>>>20),S=A+(N^R&(b^N))+C[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=N+(b^A&(R^b))+C[11]+2304563134&4294967295,N=A+(S<<22&4294967295|S>>>10),S=b+(R^N&(A^R))+C[12]+1804603682&4294967295,b=N+(S<<7&4294967295|S>>>25),S=R+(A^b&(N^A))+C[13]+4254626195&4294967295,R=b+(S<<12&4294967295|S>>>20),S=A+(N^R&(b^N))+C[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=N+(b^A&(R^b))+C[15]+1236535329&4294967295,N=A+(S<<22&4294967295|S>>>10),S=b+(A^R&(N^A))+C[1]+4129170786&4294967295,b=N+(S<<5&4294967295|S>>>27),S=R+(N^A&(b^N))+C[6]+3225465664&4294967295,R=b+(S<<9&4294967295|S>>>23),S=A+(b^N&(R^b))+C[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=N+(R^b&(A^R))+C[0]+3921069994&4294967295,N=A+(S<<20&4294967295|S>>>12),S=b+(A^R&(N^A))+C[5]+3593408605&4294967295,b=N+(S<<5&4294967295|S>>>27),S=R+(N^A&(b^N))+C[10]+38016083&4294967295,R=b+(S<<9&4294967295|S>>>23),S=A+(b^N&(R^b))+C[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=N+(R^b&(A^R))+C[4]+3889429448&4294967295,N=A+(S<<20&4294967295|S>>>12),S=b+(A^R&(N^A))+C[9]+568446438&4294967295,b=N+(S<<5&4294967295|S>>>27),S=R+(N^A&(b^N))+C[14]+3275163606&4294967295,R=b+(S<<9&4294967295|S>>>23),S=A+(b^N&(R^b))+C[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=N+(R^b&(A^R))+C[8]+1163531501&4294967295,N=A+(S<<20&4294967295|S>>>12),S=b+(A^R&(N^A))+C[13]+2850285829&4294967295,b=N+(S<<5&4294967295|S>>>27),S=R+(N^A&(b^N))+C[2]+4243563512&4294967295,R=b+(S<<9&4294967295|S>>>23),S=A+(b^N&(R^b))+C[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=N+(R^b&(A^R))+C[12]+2368359562&4294967295,N=A+(S<<20&4294967295|S>>>12),S=b+(N^A^R)+C[5]+4294588738&4294967295,b=N+(S<<4&4294967295|S>>>28),S=R+(b^N^A)+C[8]+2272392833&4294967295,R=b+(S<<11&4294967295|S>>>21),S=A+(R^b^N)+C[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=N+(A^R^b)+C[14]+4259657740&4294967295,N=A+(S<<23&4294967295|S>>>9),S=b+(N^A^R)+C[1]+2763975236&4294967295,b=N+(S<<4&4294967295|S>>>28),S=R+(b^N^A)+C[4]+1272893353&4294967295,R=b+(S<<11&4294967295|S>>>21),S=A+(R^b^N)+C[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=N+(A^R^b)+C[10]+3200236656&4294967295,N=A+(S<<23&4294967295|S>>>9),S=b+(N^A^R)+C[13]+681279174&4294967295,b=N+(S<<4&4294967295|S>>>28),S=R+(b^N^A)+C[0]+3936430074&4294967295,R=b+(S<<11&4294967295|S>>>21),S=A+(R^b^N)+C[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=N+(A^R^b)+C[6]+76029189&4294967295,N=A+(S<<23&4294967295|S>>>9),S=b+(N^A^R)+C[9]+3654602809&4294967295,b=N+(S<<4&4294967295|S>>>28),S=R+(b^N^A)+C[12]+3873151461&4294967295,R=b+(S<<11&4294967295|S>>>21),S=A+(R^b^N)+C[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=N+(A^R^b)+C[2]+3299628645&4294967295,N=A+(S<<23&4294967295|S>>>9),S=b+(A^(N|~R))+C[0]+4096336452&4294967295,b=N+(S<<6&4294967295|S>>>26),S=R+(N^(b|~A))+C[7]+1126891415&4294967295,R=b+(S<<10&4294967295|S>>>22),S=A+(b^(R|~N))+C[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=N+(R^(A|~b))+C[5]+4237533241&4294967295,N=A+(S<<21&4294967295|S>>>11),S=b+(A^(N|~R))+C[12]+1700485571&4294967295,b=N+(S<<6&4294967295|S>>>26),S=R+(N^(b|~A))+C[3]+2399980690&4294967295,R=b+(S<<10&4294967295|S>>>22),S=A+(b^(R|~N))+C[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=N+(R^(A|~b))+C[1]+2240044497&4294967295,N=A+(S<<21&4294967295|S>>>11),S=b+(A^(N|~R))+C[8]+1873313359&4294967295,b=N+(S<<6&4294967295|S>>>26),S=R+(N^(b|~A))+C[15]+4264355552&4294967295,R=b+(S<<10&4294967295|S>>>22),S=A+(b^(R|~N))+C[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=N+(R^(A|~b))+C[13]+1309151649&4294967295,N=A+(S<<21&4294967295|S>>>11),S=b+(A^(N|~R))+C[4]+4149444226&4294967295,b=N+(S<<6&4294967295|S>>>26),S=R+(N^(b|~A))+C[11]+3174756917&4294967295,R=b+(S<<10&4294967295|S>>>22),S=A+(b^(R|~N))+C[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=N+(R^(A|~b))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+b&4294967295,k.g[1]=k.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+A&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.u=function(k,b){b===void 0&&(b=k.length);for(var N=b-this.blockSize,C=this.B,A=this.h,R=0;R<b;){if(A==0)for(;R<=N;)s(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<b;)if(C[A++]=k.charCodeAt(R++),A==this.blockSize){s(this,C),A=0;break}}else for(;R<b;)if(C[A++]=k[R++],A==this.blockSize){s(this,C),A=0;break}}this.h=A,this.o+=b},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var b=1;b<k.length-8;++b)k[b]=0;var N=8*this.o;for(b=k.length-8;b<k.length;++b)k[b]=N&255,N/=256;for(this.u(k),k=Array(16),b=N=0;4>b;++b)for(var C=0;32>C;C+=8)k[N++]=this.g[b]>>>C&255;return k};function o(k,b){var N=c;return Object.prototype.hasOwnProperty.call(N,k)?N[k]:N[k]=b(k)}function l(k,b){this.h=b;for(var N=[],C=!0,A=k.length-1;0<=A;A--){var R=k[A]|0;C&&R==b||(N[A]=R,C=!1)}this.g=N}var c={};function u(k){return-128<=k&&128>k?o(k,function(b){return new l([b|0],0>b?-1:0)}):new l([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return m;if(0>k)return D(h(-k));for(var b=[],N=1,C=0;k>=N;C++)b[C]=k/N|0,N*=4294967296;return new l(b,0)}function g(k,b){if(k.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k.charAt(0)=="-")return D(g(k.substring(1),b));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=h(Math.pow(b,8)),C=m,A=0;A<k.length;A+=8){var R=Math.min(8,k.length-A),S=parseInt(k.substring(A,A+R),b);8>R?(R=h(Math.pow(b,R)),C=C.j(R).add(h(S))):(C=C.j(N),C=C.add(h(S)))}return C}var m=u(0),w=u(1),j=u(16777216);e=l.prototype,e.m=function(){if(P(this))return-D(this).m();for(var k=0,b=1,N=0;N<this.g.length;N++){var C=this.i(N);k+=(0<=C?C:4294967296+C)*b,b*=4294967296}return k},e.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(_(this))return"0";if(P(this))return"-"+D(this).toString(k);for(var b=h(Math.pow(k,6)),N=this,C="";;){var A=T(N,b).g;N=y(N,A.j(b));var R=((0<N.g.length?N.g[0]:N.h)>>>0).toString(k);if(N=A,_(N))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},e.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function _(k){if(k.h!=0)return!1;for(var b=0;b<k.g.length;b++)if(k.g[b]!=0)return!1;return!0}function P(k){return k.h==-1}e.l=function(k){return k=y(this,k),P(k)?-1:_(k)?0:1};function D(k){for(var b=k.g.length,N=[],C=0;C<b;C++)N[C]=~k.g[C];return new l(N,~k.h).add(w)}e.abs=function(){return P(this)?D(this):this},e.add=function(k){for(var b=Math.max(this.g.length,k.g.length),N=[],C=0,A=0;A<=b;A++){var R=C+(this.i(A)&65535)+(k.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(k.i(A)>>>16);C=S>>>16,R&=65535,S&=65535,N[A]=S<<16|R}return new l(N,N[N.length-1]&-2147483648?-1:0)};function y(k,b){return k.add(D(b))}e.j=function(k){if(_(this)||_(k))return m;if(P(this))return P(k)?D(this).j(D(k)):D(D(this).j(k));if(P(k))return D(this.j(D(k)));if(0>this.l(j)&&0>k.l(j))return h(this.m()*k.m());for(var b=this.g.length+k.g.length,N=[],C=0;C<2*b;C++)N[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<k.g.length;A++){var R=this.i(C)>>>16,S=this.i(C)&65535,xe=k.i(A)>>>16,Yn=k.i(A)&65535;N[2*C+2*A]+=S*Yn,f(N,2*C+2*A),N[2*C+2*A+1]+=R*Yn,f(N,2*C+2*A+1),N[2*C+2*A+1]+=S*xe,f(N,2*C+2*A+1),N[2*C+2*A+2]+=R*xe,f(N,2*C+2*A+2)}for(C=0;C<b;C++)N[C]=N[2*C+1]<<16|N[2*C];for(C=b;C<2*b;C++)N[C]=0;return new l(N,0)};function f(k,b){for(;(k[b]&65535)!=k[b];)k[b+1]+=k[b]>>>16,k[b]&=65535,b++}function x(k,b){this.g=k,this.h=b}function T(k,b){if(_(b))throw Error("division by zero");if(_(k))return new x(m,m);if(P(k))return b=T(D(k),b),new x(D(b.g),D(b.h));if(P(b))return b=T(k,D(b)),new x(D(b.g),b.h);if(30<k.g.length){if(P(k)||P(b))throw Error("slowDivide_ only works with positive integers.");for(var N=w,C=b;0>=C.l(k);)N=E(N),C=E(C);var A=O(N,1),R=O(C,1);for(C=O(C,2),N=O(N,2);!_(C);){var S=R.add(C);0>=S.l(k)&&(A=A.add(N),R=S),C=O(C,1),N=O(N,1)}return b=y(k,A.j(b)),new x(A,b)}for(A=m;0<=k.l(b);){for(N=Math.max(1,Math.floor(k.m()/b.m())),C=Math.ceil(Math.log(N)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=h(N),S=R.j(b);P(S)||0<S.l(k);)N-=C,R=h(N),S=R.j(b);_(R)&&(R=w),A=A.add(R),k=y(k,S)}return new x(A,k)}e.A=function(k){return T(this,k).h},e.and=function(k){for(var b=Math.max(this.g.length,k.g.length),N=[],C=0;C<b;C++)N[C]=this.i(C)&k.i(C);return new l(N,this.h&k.h)},e.or=function(k){for(var b=Math.max(this.g.length,k.g.length),N=[],C=0;C<b;C++)N[C]=this.i(C)|k.i(C);return new l(N,this.h|k.h)},e.xor=function(k){for(var b=Math.max(this.g.length,k.g.length),N=[],C=0;C<b;C++)N[C]=this.i(C)^k.i(C);return new l(N,this.h^k.h)};function E(k){for(var b=k.g.length+1,N=[],C=0;C<b;C++)N[C]=k.i(C)<<1|k.i(C-1)>>>31;return new l(N,k.h)}function O(k,b){var N=b>>5;b%=32;for(var C=k.g.length-N,A=[],R=0;R<C;R++)A[R]=0<b?k.i(R+N)>>>b|k.i(R+N+1)<<32-b:k.i(R+N);return new l(A,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=g,lv=l}).apply(typeof Cf<"u"?Cf:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,p){return a==Array.prototype||a==Object.prototype||(a[d]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var L=a[v];if(!(L in p))break e;p=p[L]}a=a[a.length-1],v=p[a],d=d(v),d!=v&&d!=null&&t(p,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var p=0,v=!1,L={next:function(){if(!v&&p<a.length){var z=p++;return{value:d(z,a[z]),done:!1}}return v=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}s("Array.prototype.values",function(a){return a||function(){return o(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function g(a,d,p){return a.call.apply(a.bind,arguments)}function m(a,d,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,v),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function w(a,d,p){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:m,w.apply(null,arguments)}function j(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function _(a,d){function p(){}p.prototype=d.prototype,a.aa=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,L,z){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return d.prototype[L].apply(v,U)}}function P(a){const d=a.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=a[v];return p}return[]}function D(a,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const L=a.length||0,z=v.length||0;a.length=L+z;for(let U=0;U<z;U++)a[L+U]=v[U]}else a.push(v)}}class y{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function f(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function T(a){return T[" "](a),a}T[" "]=function(){};var E=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function O(a,d,p){for(const v in a)d.call(p,a[v],v,a)}function k(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function b(a){const d={};for(const p in a)d[p]=a[p];return d}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(a,d){let p,v;for(let L=1;L<arguments.length;L++){v=arguments[L];for(p in v)a[p]=v[p];for(let z=0;z<N.length;z++)p=N[z],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function A(a){var d=1;a=a.split(":");const p=[];for(;0<d&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function R(a){c.setTimeout(()=>{throw a},0)}function S(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class xe{constructor(){this.h=this.g=null}add(d,p){const v=Yn.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Yn=new y(()=>new gi,a=>a.reset());class gi{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ut,F=!1,H=new xe,W=()=>{const a=c.Promise.resolve(void 0);Ut=()=>{a.then(ae)}};var ae=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(p){R(p)}var d=Yn;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return a}();function $t(a,d){if(he.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(E){e:{try{T(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&$t.aa.h.call(this)}}_($t,he);var Bt={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),Sv=0;function Cv(a,d,p,v,L){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=L,this.key=++Sv,this.da=this.fa=!1}function Us(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fs(a){this.src=a,this.g={},this.h=0}Fs.prototype.add=function(a,d,p,v,L){var z=a.toString();a=this.g[z],a||(a=this.g[z]=[],this.h++);var U=Xa(a,d,v,L);return-1<U?(d=a[U],p||(d.fa=!1)):(d=new Cv(d,this.src,z,!!v,L),d.fa=p,a.push(d)),d};function Ga(a,d){var p=d.type;if(p in a.g){var v=a.g[p],L=Array.prototype.indexOf.call(v,d,void 0),z;(z=0<=L)&&Array.prototype.splice.call(v,L,1),z&&(Us(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Xa(a,d,p,v){for(var L=0;L<a.length;++L){var z=a[L];if(!z.da&&z.listener==d&&z.capture==!!p&&z.ha==v)return L}return-1}var Ya="closure_lm_"+(1e6*Math.random()|0),Ja={};function zd(a,d,p,v,L){if(Array.isArray(d)){for(var z=0;z<d.length;z++)zd(a,d[z],p,v,L);return null}return p=Ud(p),a&&a[Vt]?a.K(d,p,h(v)?!!v.capture:!1,L):Tv(a,d,p,!1,v,L)}function Tv(a,d,p,v,L,z){if(!d)throw Error("Invalid event type");var U=h(L)?!!L.capture:!!L,Z=Za(a);if(Z||(a[Ya]=Z=new Fs(a)),p=Z.add(d,p,v,U,z),p.proxy)return p;if(v=Iv(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)Ft||(L=U),L===void 0&&(L=!1),a.addEventListener(d.toString(),v,L);else if(a.attachEvent)a.attachEvent(Md(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Iv(){function a(p){return d.call(a.src,a.listener,p)}const d=Pv;return a}function Od(a,d,p,v,L){if(Array.isArray(d))for(var z=0;z<d.length;z++)Od(a,d[z],p,v,L);else v=h(v)?!!v.capture:!!v,p=Ud(p),a&&a[Vt]?(a=a.i,d=String(d).toString(),d in a.g&&(z=a.g[d],p=Xa(z,p,v,L),-1<p&&(Us(z[p]),Array.prototype.splice.call(z,p,1),z.length==0&&(delete a.g[d],a.h--)))):a&&(a=Za(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Xa(d,p,v,L)),(p=-1<a?d[a]:null)&&Qa(p))}function Qa(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Vt])Ga(d.i,a);else{var p=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(p,v,a.capture):d.detachEvent?d.detachEvent(Md(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Za(d))?(Ga(p,a),p.h==0&&(p.src=null,d[Ya]=null)):Us(a)}}}function Md(a){return a in Ja?Ja[a]:Ja[a]="on"+a}function Pv(a,d){if(a.da)a=!0;else{d=new $t(d,this);var p=a.listener,v=a.ha||a.src;a.fa&&Qa(a),a=p.call(v,d)}return a}function Za(a){return a=a[Ya],a instanceof Fs?a:null}var el="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ud(a){return typeof a=="function"?a:(a[el]||(a[el]=function(d){return a.handleEvent(d)}),a[el])}function Ce(){Q.call(this),this.i=new Fs(this),this.M=this,this.F=null}_(Ce,Q),Ce.prototype[Vt]=!0,Ce.prototype.removeEventListener=function(a,d,p,v){Od(this,a,d,p,v)};function ze(a,d){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new he(d,a);else if(d instanceof he)d.target=d.target||a;else{var L=d;d=new he(v,a),C(d,L)}if(L=!0,p)for(var z=p.length-1;0<=z;z--){var U=d.g=p[z];L=$s(U,v,!0,d)&&L}if(U=d.g=a,L=$s(U,v,!0,d)&&L,L=$s(U,v,!1,d)&&L,p)for(z=0;z<p.length;z++)U=d.g=p[z],L=$s(U,v,!1,d)&&L}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var p=a.g[d],v=0;v<p.length;v++)Us(p[v]);delete a.g[d],a.h--}}this.F=null},Ce.prototype.K=function(a,d,p,v){return this.i.add(String(a),d,!1,p,v)},Ce.prototype.L=function(a,d,p,v){return this.i.add(String(a),d,!0,p,v)};function $s(a,d,p,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,z=0;z<d.length;++z){var U=d[z];if(U&&!U.da&&U.capture==p){var Z=U.listener,ke=U.ha||U.src;U.fa&&Ga(a.i,U),L=Z.call(ke,v)!==!1&&L}}return L&&!v.defaultPrevented}function Fd(a,d,p){if(typeof a=="function")p&&(a=w(a,p));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function $d(a){a.g=Fd(()=>{a.g=null,a.i&&(a.i=!1,$d(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Rv extends Q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:$d(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(a){Q.call(this),this.h=a,this.g={}}_(mi,Q);var Bd=[];function Vd(a){O(a.g,function(d,p){this.g.hasOwnProperty(p)&&Qa(d)},a),a.g={}}mi.prototype.N=function(){mi.aa.N.call(this),Vd(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tl=c.JSON.stringify,Av=c.JSON.parse,Dv=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function nl(){}nl.prototype.h=null;function Hd(a){return a.h||(a.h=a.i())}function Lv(){}var xi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rl(){he.call(this,"d")}_(rl,he);function il(){he.call(this,"c")}_(il,he);var jr={},Wd=null;function sl(){return Wd=Wd||new Ce}jr.La="serverreachability";function qd(a){he.call(this,jr.La,a)}_(qd,he);function vi(a){const d=sl();ze(d,new qd(d))}jr.STAT_EVENT="statevent";function Kd(a,d){he.call(this,jr.STAT_EVENT,a),this.stat=d}_(Kd,he);function Oe(a){const d=sl();ze(d,new Kd(d,a))}jr.Ma="timingevent";function Gd(a,d){he.call(this,jr.Ma,a),this.size=d}_(Gd,he);function yi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function zv(a,d,p,v,L,z){a.info(function(){if(a.g)if(z)for(var U="",Z=z.split("&"),ke=0;ke<Z.length;ke++){var X=Z[ke].split("=");if(1<X.length){var Te=X[0];X=X[1];var Ie=Te.split("_");U=2<=Ie.length&&Ie[1]=="type"?U+(Te+"="+X+"&"):U+(Te+"=redacted&")}}else U=null;else U=z;return"XMLHTTP REQ ("+v+") [attempt "+L+"]: "+d+`
`+p+`
`+U})}function Ov(a,d,p,v,L,z,U){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+L+"]: "+d+`
`+p+`
`+z+" "+U})}function kr(a,d,p,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Uv(a,p)+(v?" "+v:"")})}function Mv(a,d){a.info(function(){return"TIMEOUT: "+d})}bi.prototype.info=function(){};function Uv(a,d){if(!a.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var L=v[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var U=1;U<L.length;U++)L[U]=""}}}}return tl(p)}catch{return d}}var ol={NO_ERROR:0,TIMEOUT:8},Fv={},al;function Bs(){}_(Bs,nl),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},al=new Bs;function hn(a,d,p,v){this.j=a,this.i=d,this.l=p,this.R=v||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xd}function Xd(){this.i=null,this.g="",this.h=!1}var Yd={},ll={};function cl(a,d,p){a.L=1,a.v=qs(Ht(d)),a.m=p,a.P=!0,Jd(a,null)}function Jd(a,d){a.F=Date.now(),Vs(a),a.A=Ht(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),dh(p.i,"t",v),a.C=0,p=a.j.J,a.h=new Xd,a.g=Th(a.j,p?d:null,!a.m),0<a.O&&(a.M=new Rv(w(a.Y,a,a.g),a.O)),d=a.U,p=a.g,v=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(Bd[0]=L.toString()),L=Bd);for(var z=0;z<L.length;z++){var U=zd(p,L[z],v||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.H?b(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),vi(),zv(a.i,a.u,a.A,a.l,a.R,a.m)}hn.prototype.ca=function(a){a=a.target;const d=this.M;d&&Wt(a)==3?d.j():this.Y(a)},hn.prototype.Y=function(a){try{if(a==this.g)e:{const Ie=Wt(this.g);var d=this.g.Ba();const Sr=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||vh(this.g)))){this.J||Ie!=4||d==7||(d==8||0>=Sr?vi(3):vi(2)),ul(this);var p=this.g.Z();this.X=p;t:if(Qd(this)){var v=vh(this.g);a="";var L=v.length,z=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),wi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(z&&d==L-1)});v.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,Ov(this.i,this.u,this.A,this.l,this.R,Ie,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ke=this.g;if((Z=ke.g?ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(Z)){var X=Z;break t}}X=null}if(p=X)kr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dl(this,p);else{this.o=!1,this.s=3,Oe(12),Jn(this),wi(this);break e}}if(this.P){p=!0;let pt;for(;!this.J&&this.C<U.length;)if(pt=$v(this,U),pt==ll){Ie==4&&(this.s=4,Oe(14),p=!1),kr(this.i,this.l,null,"[Incomplete Response]");break}else if(pt==Yd){this.s=4,Oe(15),kr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else kr(this.i,this.l,pt,null),dl(this,pt);if(Qd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||U.length!=0||this.h.h||(this.s=1,Oe(16),p=!1),this.o=this.o&&p,!p)kr(this.i,this.l,U,"[Invalid Chunked Response]"),Jn(this),wi(this);else if(0<U.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),xl(Te),Te.M=!0,Oe(11))}}else kr(this.i,this.l,U,null),dl(this,U);Ie==4&&Jn(this),this.o&&!this.J&&(Ie==4?Eh(this.j,this):(this.o=!1,Vs(this)))}else i0(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Jn(this),wi(this)}}}catch{}finally{}};function Qd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $v(a,d){var p=a.C,v=d.indexOf(`
`,p);return v==-1?ll:(p=Number(d.substring(p,v)),isNaN(p)?Yd:(v+=1,v+p>d.length?ll:(d=d.slice(v,v+p),a.C=v+p,d)))}hn.prototype.cancel=function(){this.J=!0,Jn(this)};function Vs(a){a.S=Date.now()+a.I,Zd(a,a.I)}function Zd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(w(a.ba,a),d)}function ul(a){a.B&&(c.clearTimeout(a.B),a.B=null)}hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Mv(this.i,this.A),this.L!=2&&(vi(),Oe(17)),Jn(this),this.s=2,wi(this)):Zd(this,this.S-a)};function wi(a){a.j.G==0||a.J||Eh(a.j,a)}function Jn(a){ul(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,Vd(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function dl(a,d){try{var p=a.j;if(p.G!=0&&(p.g==a||hl(p.h,a))){if(!a.K&&hl(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var L=v;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Qs(p),Ys(p);else break e;ml(p),Oe(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=yi(w(p.Za,p),6e3));if(1>=nh(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Zn(p,11)}else if((a.K||p.g==a)&&Qs(p),!f(d))for(L=p.Da.g.parse(d),d=0;d<L.length;d++){let X=L[d];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Te=X[3];Te!=null&&(p.la=Te,p.j.info("VER="+p.la));const Ie=X[4];Ie!=null&&(p.Aa=Ie,p.j.info("SVER="+p.Aa));const Sr=X[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(v=1.5*Sr,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const pt=a.g;if(pt){const Zs=pt.g?pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zs){var z=v.h;z.g||Zs.indexOf("spdy")==-1&&Zs.indexOf("quic")==-1&&Zs.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(pl(z,z.h),z.h=null))}if(v.D){const vl=pt.g?pt.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(v.ya=vl,re(v.I,v.D,vl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var U=a;if(v.qa=Ch(v,v.J?v.ia:null,v.W),U.K){rh(v.h,U);var Z=U,ke=v.L;ke&&(Z.I=ke),Z.B&&(ul(Z),Vs(Z)),v.g=U}else jh(v);0<p.i.length&&Js(p)}else X[0]!="stop"&&X[0]!="close"||Zn(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Zn(p,7):gl(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}vi(4)}catch{}}var Bv=class{constructor(a,d){this.g=a,this.map=d}};function eh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nh(a){return a.h?1:a.g?a.g.size:0}function hl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function pl(a,d){a.g?a.g.add(d):a.h=d}function rh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}eh.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ih(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.D);return d}return P(a.i)}function Vv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var d=[],p=a.length,v=0;v<p;v++)d.push(a[v]);return d}d=[],p=0;for(v in a)d[p++]=a[v];return d}function Hv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var d=[];a=a.length;for(var p=0;p<a;p++)d.push(p);return d}d=[],p=0;for(const v in a)d[p++]=v;return d}}}function sh(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var p=Hv(a),v=Vv(a),L=v.length,z=0;z<L;z++)d.call(void 0,v[z],p&&p[z],a)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wv(a,d){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),L=null;if(0<=v){var z=a[p].substring(0,v);L=a[p].substring(v+1)}else z=a[p];d(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Qn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qn){this.h=a.h,Hs(this,a.j),this.o=a.o,this.g=a.g,Ws(this,a.s),this.l=a.l;var d=a.i,p=new ki;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),ah(this,p),this.m=a.m}else a&&(d=String(a).match(oh))?(this.h=!1,Hs(this,d[1]||"",!0),this.o=_i(d[2]||""),this.g=_i(d[3]||"",!0),Ws(this,d[4]),this.l=_i(d[5]||"",!0),ah(this,d[6]||"",!0),this.m=_i(d[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}Qn.prototype.toString=function(){var a=[],d=this.j;d&&a.push(ji(d,lh,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(ji(d,lh,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ji(p,p.charAt(0)=="/"?Gv:Kv,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ji(p,Yv)),a.join("")};function Ht(a){return new Qn(a)}function Hs(a,d,p){a.j=p?_i(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ws(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function ah(a,d,p){d instanceof ki?(a.i=d,Jv(a.i,a.h)):(p||(d=ji(d,Xv)),a.i=new ki(d,a.h))}function re(a,d,p){a.i.set(d,p)}function qs(a){return re(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ji(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,qv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lh=/[#\/\?@]/g,Kv=/[#\?:]/g,Gv=/[#\?]/g,Xv=/[#\?@]/g,Yv=/#/g;function ki(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function pn(a){a.g||(a.g=new Map,a.h=0,a.i&&Wv(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}e=ki.prototype,e.add=function(a,d){pn(this),this.i=null,a=Er(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function ch(a,d){pn(a),d=Er(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function uh(a,d){return pn(a),d=Er(a,d),a.g.has(d)}e.forEach=function(a,d){pn(this),this.g.forEach(function(p,v){p.forEach(function(L){a.call(d,L,v,this)},this)},this)},e.na=function(){pn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const L=a[v];for(let z=0;z<L.length;z++)p.push(d[v])}return p},e.V=function(a){pn(this);let d=[];if(typeof a=="string")uh(this,a)&&(d=d.concat(this.g.get(Er(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)d=d.concat(a[p])}return d},e.set=function(a,d){return pn(this),this.i=null,a=Er(this,a),uh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function dh(a,d,p){ch(a,d),0<p.length&&(a.i=null,a.g.set(Er(a,d),P(p)),a.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const z=encodeURIComponent(String(v)),U=this.V(v);for(v=0;v<U.length;v++){var L=z;U[v]!==""&&(L+="="+encodeURIComponent(String(U[v]))),a.push(L)}}return this.i=a.join("&")};function Er(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Jv(a,d){d&&!a.j&&(pn(a),a.i=null,a.g.forEach(function(p,v){var L=v.toLowerCase();v!=L&&(ch(this,v),dh(this,L,p))},a)),a.j=d}function Qv(a,d){const p=new bi;if(c.Image){const v=new Image;v.onload=j(fn,p,"TestLoadImage: loaded",!0,d,v),v.onerror=j(fn,p,"TestLoadImage: error",!1,d,v),v.onabort=j(fn,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=j(fn,p,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function Zv(a,d){const p=new bi,v=new AbortController,L=setTimeout(()=>{v.abort(),fn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(z=>{clearTimeout(L),z.ok?fn(p,"TestPingServer: ok",!0,d):fn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),fn(p,"TestPingServer: error",!1,d)})}function fn(a,d,p,v,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),v(p)}catch{}}function e0(){this.g=new Dv}function t0(a,d,p){const v=p||"";try{sh(a,function(L,z){let U=L;h(L)&&(U=tl(L)),d.push(v+z+"="+encodeURIComponent(U))})}catch(L){throw d.push(v+"type="+encodeURIComponent("_badmap")),L}}function Ks(a){this.l=a.Ub||null,this.j=a.eb||!1}_(Ks,nl),Ks.prototype.g=function(){return new Gs(this.l,this.j)},Ks.prototype.i=function(a){return function(){return a}}({});function Gs(a,d){Ce.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Gs,Ce),e=Gs.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ni(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ni(this)),this.g&&(this.readyState=3,Ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;hh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function hh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ei(this):Ni(this),this.readyState==3&&hh(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},e.Qa=function(a){this.g&&(this.response=a,Ei(this))},e.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ni(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ph(a){let d="";return O(a,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function fl(a,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=ph(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):re(a,d,p))}function pe(a){Ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(pe,Ce);var n0=/^https?$/i,r0=["POST","PUT"];e=pe.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():al.g(),this.v=this.o?Hd(this.o):Hd(al),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(z){fh(this,z);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var L in v)p.set(L,v[L]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const z of v.keys())p.set(z,v.get(z));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(z=>z.toLowerCase()=="content-type"),L=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(r0,d,void 0))||v||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,U]of p)this.g.setRequestHeader(z,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xh(this),this.u=!0,this.g.send(a),this.u=!1}catch(z){fh(this,z)}};function fh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,gh(a),Xs(a)}function gh(a){a.A||(a.A=!0,ze(a,"complete"),ze(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ze(this,"complete"),ze(this,"abort"),Xs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xs(this,!0)),pe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?mh(this):this.bb())},e.bb=function(){mh(this)};function mh(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Wt(a)!=4||a.Z()!=2)){if(a.u&&Wt(a)==4)Fd(a.Ea,0,a);else if(ze(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=U===0){var L=String(a.D).match(oh)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),v=!n0.test(L?L.toLowerCase():"")}p=v}if(p)ze(a,"complete"),ze(a,"success");else{a.m=6;try{var z=2<Wt(a)?a.g.statusText:""}catch{z=""}a.l=z+" ["+a.Z()+"]",gh(a)}}finally{Xs(a)}}}}function Xs(a,d){if(a.g){xh(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||ze(a,"ready");try{p.onreadystatechange=v}catch{}}}function xh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Av(d)}};function vh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i0(a){const d={};a=(a.g&&2<=Wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(f(a[v]))continue;var p=A(a[v]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const z=d[L]||[];d[L]=z,z.push(p)}k(d,function(v){return v.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function yh(a){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(a&&a.concurrentRequestLimit),this.Da=new e0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=yh.prototype,e.la=8,e.G=1,e.connect=function(a,d,p,v){Oe(0),this.W=a,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Ch(this,null,this.W),Js(this)};function gl(a){if(bh(a),a.G==3){var d=a.U++,p=Ht(a.I);if(re(p,"SID",a.K),re(p,"RID",d),re(p,"TYPE","terminate"),Ci(a,p),d=new hn(a,a.j,d),d.L=2,d.v=qs(Ht(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=Th(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Vs(d)}Sh(a)}function Ys(a){a.g&&(xl(a),a.g.cancel(),a.g=null)}function bh(a){Ys(a),a.u&&(c.clearTimeout(a.u),a.u=null),Qs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Js(a){if(!th(a.h)&&!a.s){a.s=!0;var d=a.Ga;Ut||W(),F||(Ut(),F=!0),H.add(d,a),a.B=0}}function s0(a,d){return nh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(w(a.Ga,a,d),Nh(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new hn(this,this.j,a);let z=this.o;if(this.S&&(z?(z=b(z),C(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=_h(this,L,d),p=Ht(this.I),re(p,"RID",a),re(p,"CVER",22),this.D&&re(p,"X-HTTP-Session-Id",this.D),Ci(this,p),z&&(this.O?d="headers="+encodeURIComponent(String(ph(z)))+"&"+d:this.m&&fl(p,this.m,z)),pl(this.h,L),this.Ua&&re(p,"TYPE","init"),this.P?(re(p,"$req",d),re(p,"SID","null"),L.T=!0,cl(L,p,null)):cl(L,p,d),this.G=2}}else this.G==3&&(a?wh(this,a):this.i.length==0||th(this.h)||wh(this))};function wh(a,d){var p;d?p=d.l:p=a.U++;const v=Ht(a.I);re(v,"SID",a.K),re(v,"RID",p),re(v,"AID",a.T),Ci(a,v),a.m&&a.o&&fl(v,a.m,a.o),p=new hn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),d&&(a.i=d.D.concat(a.i)),d=_h(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pl(a.h,p),cl(p,v,d)}function Ci(a,d){a.H&&O(a.H,function(p,v){re(d,v,p)}),a.l&&sh({},function(p,v){re(d,v,p)})}function _h(a,d,p){p=Math.min(a.i.length,p);var v=a.l?w(a.l.Na,a.l,a):null;e:{var L=a.i;let z=-1;for(;;){const U=["count="+p];z==-1?0<p?(z=L[0].g,U.push("ofs="+z)):z=0:U.push("ofs="+z);let Z=!0;for(let ke=0;ke<p;ke++){let X=L[ke].g;const Te=L[ke].map;if(X-=z,0>X)z=Math.max(0,L[ke].g-100),Z=!1;else try{t0(Te,U,"req"+X+"_")}catch{v&&v(Te)}}if(Z){v=U.join("&");break e}}}return a=a.i.splice(0,p),d.D=a,v}function jh(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;Ut||W(),F||(Ut(),F=!0),H.add(d,a),a.v=0}}function ml(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(w(a.Fa,a),Nh(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,kh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(w(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Ys(this),kh(this))};function xl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function kh(a){a.g=new hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Ht(a.qa);re(d,"RID","rpc"),re(d,"SID",a.K),re(d,"AID",a.T),re(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&re(d,"TO",a.ja),re(d,"TYPE","xmlhttp"),Ci(a,d),a.m&&a.o&&fl(d,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=qs(Ht(d)),p.m=null,p.P=!0,Jd(p,a)}e.Za=function(){this.C!=null&&(this.C=null,Ys(this),ml(this),Oe(19))};function Qs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Eh(a,d){var p=null;if(a.g==d){Qs(a),xl(a),a.g=null;var v=2}else if(hl(a.h,d))p=d.D,rh(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;v=sl(),ze(v,new Gd(v,p)),Js(a)}else jh(a);else if(L=d.s,L==3||L==0&&0<d.X||!(v==1&&s0(a,d)||v==2&&ml(a)))switch(p&&0<p.length&&(d=a.h,d.i=d.i.concat(p)),L){case 1:Zn(a,5);break;case 4:Zn(a,10);break;case 3:Zn(a,6);break;default:Zn(a,2)}}}function Nh(a,d){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*d}function Zn(a,d){if(a.j.info("Error code "+d),d==2){var p=w(a.fb,a),v=a.Xa;const L=!v;v=new Qn(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hs(v,"https"),qs(v),L?Qv(v.toString(),p):Zv(v.toString(),p)}else Oe(2);a.G=0,a.l&&a.l.sa(d),Sh(a),bh(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Sh(a){if(a.G=0,a.ka=[],a.l){const d=ih(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Ch(a,d,p){var v=p instanceof Qn?Ht(p):new Qn(p);if(v.g!="")d&&(v.g=d+"."+v.g),Ws(v,v.s);else{var L=c.location;v=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var z=new Qn(null);v&&Hs(z,v),d&&(z.g=d),L&&Ws(z,L),p&&(z.l=p),v=z}return p=a.D,d=a.ya,p&&d&&re(v,p,d),re(v,"VER",a.la),Ci(a,v),v}function Th(a,d,p){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new pe(new Ks({eb:p})):new pe(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}e=Ih.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ot(a,d){Ce.call(this),this.g=new yh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!f(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!f(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Nr(this)}_(ot,Ce),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){gl(this.g)},ot.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=tl(a),a=p);d.i.push(new Bv(d.Ya++,a)),d.G==3&&Js(d)},ot.prototype.N=function(){this.g.l=null,delete this.j,gl(this.g),delete this.g,ot.aa.N.call(this)};function Ph(a){rl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}_(Ph,rl);function Rh(){il.call(this),this.status=1}_(Rh,il);function Nr(a){this.g=a}_(Nr,Ih),Nr.prototype.ua=function(){ze(this.g,"a")},Nr.prototype.ta=function(a){ze(this.g,new Ph(a))},Nr.prototype.sa=function(a){ze(this.g,new Rh)},Nr.prototype.ra=function(){ze(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,ol.NO_ERROR=0,ol.TIMEOUT=8,ol.HTTP_ERROR=6,Fv.COMPLETE="complete",Lv.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,pe.prototype.listenOnce=pe.prototype.L,pe.prototype.getLastError=pe.prototype.Ka,pe.prototype.getLastErrorCode=pe.prototype.Ba,pe.prototype.getStatus=pe.prototype.Z,pe.prototype.getResponseJson=pe.prototype.Oa,pe.prototype.getResponseText=pe.prototype.oa,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Ha}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const Tf="@firebase/firestore";/**
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
 */let zs="10.14.0";/**
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
 */const oi=new xd("@firebase/firestore");function vt(e,...t){if(oi.logLevel<=Y.DEBUG){const n=t.map(Td);oi.debug(`Firestore (${zs}): ${e}`,...n)}}function cv(e,...t){if(oi.logLevel<=Y.ERROR){const n=t.map(Td);oi.error(`Firestore (${zs}): ${e}`,...n)}}function zj(e,...t){if(oi.logLevel<=Y.WARN){const n=t.map(Td);oi.warn(`Firestore (${zs}): ${e}`,...n)}}function Td(e){if(typeof e=="string")return e;try{/**
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
 */function Id(e="Unexpected state"){const t=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+e;throw cv(t),new Error(t)}function es(e,t){e||Id()}/**
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
 */const We={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class qe extends zt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ts{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class uv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class Mj{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Uj{constructor(t){this.t=t,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){es(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ts,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const u=o;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ts)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(es(typeof r.accessToken=="string"),new uv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return es(t===null||typeof t=="string"),new Ue(t)}}class Fj{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $j{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Fj(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bj{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vj{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){es(this.o===void 0);const r=o=>{o.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,vt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(es(typeof n.token=="string"),this.R=n.token,new Bj(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Hj(e){return e.name==="IndexedDbTransactionError"}class va{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof va&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var If,K;(K=If||(If={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new lv([4294967295,4294967295],0);function Zl(){return typeof document<"u"?document:null}/**
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
 */class Wj{constructor(t,n,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&vt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Pd{constructor(t,n,r,s,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,o){const l=Date.now()+r,c=new Pd(t,n,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new qe(We.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Pf,Rf;(Rf=Pf||(Pf={})).ea="default",Rf.Cache="cache";/**
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
 */function qj(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Af=new Map;function Kj(e,t,n,r){if(t===!0&&r===!0)throw new qe(We.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gj(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Id()}function Xj(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qe(We.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gj(e);throw new qe(We.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Df{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new qe(We.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new qe(We.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Kj("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qj((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new qe(We.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class dv{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new qe(We.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new qe(We.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oj;switch(r.type){case"firstParty":return new $j(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new qe(We.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Af.get(n);r&&(vt("ComponentProvider","Removing Datastore"),Af.delete(n),r.terminate())}(this),Promise.resolve()}}function Yj(e,t,n,r={}){var s;const o=(e=Xj(e,dv))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&zj("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Ue.MOCK_USER;else{c=_x(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new qe(We.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ue(h)}e._authCredentials=new Mj(new uv(c,u))}}/**
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
 */class Lf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wj(this,"async_queue_retry"),this.Vu=()=>{const r=Zl();r&&vt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Zl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Zl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ts;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Hj(t))throw t;vt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw cv("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const s=Pd.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&Id()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Jj extends dv{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Lf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Lf(t),this._firestoreClient=void 0,await t}}}function Qj(e,t){const n=typeof e=="object"?e:yd(),r=typeof e=="string"?e:"(default)",s=$a(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yx("firestore");o&&Yj(s,...o)}return s}(function(t,n=!0){(function(s){zs=s})(_r),pr(new Bn("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Jj(new Uj(r.getProvider("auth-internal")),new Vj(r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new qe(We.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(h.options.projectId,g)}(l,s),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Rt(Tf,"4.7.3",t),Rt(Tf,"4.7.3","esm2017")})();/**
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
 */const hv="firebasestorage.googleapis.com",Zj="storageBucket",ek=2*60*1e3,tk=10*60*1e3;/**
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
 */class Mt extends zt{constructor(t,n,r=0){super(ec(t),`Firebase Storage: ${n} (${ec(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Mt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ec(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Lt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Lt||(Lt={}));function ec(e){return"storage/"+e}function nk(){const e="An unknown error occurred, please check the error payload for server response.";return new Mt(Lt.UNKNOWN,e)}function rk(){return new Mt(Lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ik(){return new Mt(Lt.CANCELED,"User canceled the upload/download.")}function sk(e){return new Mt(Lt.INVALID_URL,"Invalid URL '"+e+"'.")}function ok(e){return new Mt(Lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function zf(e){return new Mt(Lt.INVALID_ARGUMENT,e)}function pv(){return new Mt(Lt.APP_DELETED,"The Firebase app was deleted.")}function ak(e){return new Mt(Lt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class yt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=yt.makeFromUrl(t,n)}catch{return new yt(t,"")}if(r.path==="")return r;throw ok(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+s+l,"i"),u={bucket:1,path:3};function h(T){T.path_=decodeURIComponent(T.path)}const g="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",j=new RegExp(`^https?://${m}/${g}/b/${s}/o${w}`,"i"),_={bucket:1,path:3},P=n===hv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",y=new RegExp(`^https?://${P}/${s}/${D}`,"i"),x=[{regex:c,indices:u,postModify:o},{regex:j,indices:_,postModify:h},{regex:y,indices:{bucket:1,path:2},postModify:h}];for(let T=0;T<x.length;T++){const E=x[T],O=E.regex.exec(t);if(O){const k=O[E.indices.bucket];let b=O[E.indices.path];b||(b=""),r=new yt(k,b),E.postModify(r);break}}if(r==null)throw sk(t);return r}}class lk{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function ck(e,t,n){let r=1,s=null,o=null,l=!1,c=0;function u(){return c===2}let h=!1;function g(...D){h||(h=!0,t.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,e(j,u())},D)}function w(){o&&clearTimeout(o)}function j(D,...y){if(h){w();return}if(D){w(),g.call(null,D,...y);return}if(u()||l){w(),g.call(null,D,...y);return}r<64&&(r*=2);let x;c===1?(c=2,x=0):x=(r+Math.random())*1e3,m(x)}let _=!1;function P(D){_||(_=!0,w(),!h&&(s!==null?(D||(c=2),clearTimeout(s),m(0)):D||(c=1)))}return m(0),o=setTimeout(()=>{l=!0,P(!0)},n),P}function uk(e){e(!1)}/**
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
 */function dk(e){return e!==void 0}function Of(e,t,n,r){if(r<t)throw zf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw zf(`Invalid value for '${e}'. Expected ${n} or less.`)}function hk(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ya;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ya||(ya={}));/**
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
 */function pk(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,o=t.indexOf(e)!==-1;return n||s||o}/**
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
 */class fk{constructor(t,n,r,s,o,l,c,u,h,g,m,w=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=m,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((j,_)=>{this.resolve_=j,this.reject_=_,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new bo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const c=o.getErrorCode()===ya.NO_ERROR,u=o.getStatus();if(!c||pk(u,this.additionalRetryCodes_)&&this.retry){const g=o.getErrorCode()===ya.ABORT;r(!1,new bo(!1,null,g));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new bo(h,o))})},n=(r,s)=>{const o=this.resolve_,l=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());dk(u)?o(u):o()}catch(u){l(u)}else if(c!==null){const u=nk();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(s.canceled){const u=this.appDelete_?pv():ik();l(u)}else{const u=rk();l(u)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=ck(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&uk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function gk(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function mk(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function xk(e,t){t&&(e["X-Firebase-GMPID"]=t)}function vk(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function yk(e,t,n,r,s,o,l=!0){const c=hk(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return xk(h,t),gk(h,n),mk(h,o),vk(h,r),new fk(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,l)}/**
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
 */function bk(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function wk(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class ba{constructor(t,n){this._service=t,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ba(t,n)}get root(){const t=new yt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wk(this._location.path)}get storage(){return this._service}get parent(){const t=bk(this._location.path);if(t===null)return null;const n=new yt(this._location.bucket,t);return new ba(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw ak(t)}}function Mf(e,t){const n=t==null?void 0:t[Zj];return n==null?null:yt.makeFromBucketSpec(n,e)}function _k(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:_x(s,e.app.options.projectId))}class jk{constructor(t,n,r,s,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=hv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ek,this._maxUploadRetryTime=tk,this._requests=new Set,s!=null?this._bucket=yt.makeFromBucketSpec(s,this._host):this._bucket=Mf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,t):this._bucket=Mf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Of("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ba(this,t)}_makeRequest(t,n,r,s,o=!0){if(this._deleted)return new lk(pv());{const l=yk(t,this._appId,r,s,n,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const Uf="@firebase/storage",Ff="0.13.2";/**
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
 */const fv="storage";function kk(e=yd(),t){e=Et(e);const r=$a(e,fv).getImmediate({identifier:t}),s=yx("storage");return s&&Ek(r,...s),r}function Ek(e,t,n,r={}){_k(e,t,n,r)}function Nk(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new jk(n,r,s,t,_r)}function Sk(){pr(new Bn(fv,Nk,"PUBLIC").setMultipleInstances(!0)),Rt(Uf,Ff,""),Rt(Uf,Ff,"esm2017")}Sk();const Ck={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Rd=Ex(Ck),Oi=Rj(Rd);Qj(Rd);kk(Rd);const gv=I.createContext(void 0),Tk=({children:e})=>{const[t,n]=I.useState(null),[r,s]=I.useState(!0),[o,l]=I.useState(null);I.useEffect(()=>{const j=b_(Oi,_=>{n(_),s(!1)});return()=>j()},[]);const w={user:t,loading:r,error:o,login:async(j,_)=>{try{l(null),s(!0),await g_(Oi,j,_)}catch(P){const D=tc(P.code);throw l(D),new Error(D)}finally{s(!1)}},register:async(j,_,P)=>{try{l(null),s(!0);const{user:D}=await f_(Oi,j,_);P&&await x_(D,{displayName:P})}catch(D){const y=tc(D.code);throw l(y),new Error(y)}finally{s(!1)}},logout:async()=>{try{l(null),await w_(Oi)}catch(j){throw l("Error al cerrar sesión"),j}},resetPassword:async j=>{try{l(null),await p_(Oi,j)}catch(_){const P=tc(_.code);throw l(P),new Error(P)}},clearError:()=>l(null)};return i.jsx(gv.Provider,{value:w,children:e})},mv=()=>{const e=I.useContext(gv);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function tc(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const ve=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=mv(),s=un();return r?i.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[i.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),i.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?i.jsx(i.Fragment,{children:e}):i.jsx(Ao,{to:t,state:{from:s},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ik={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),B=(e,t)=>{const n=I.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:u,...h},g)=>I.createElement("svg",{ref:g,...Ik,width:s,height:s,stroke:r,strokeWidth:l?Number(o)*24/Number(s):o,className:["lucide",`lucide-${Pk(e)}`,c].join(" "),...h},[...t.map(([m,w])=>I.createElement(m,w)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=B("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=B("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=B("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=B("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=B("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=B("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=B("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=B("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=B("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=B("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=B("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=B("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=B("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=B("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=B("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=B("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=B("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=B("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=B("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=B("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=B("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=B("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=B("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=B("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=B("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=B("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=B("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=B("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=B("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=B("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=B("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=B("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=B("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=B("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=B("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=B("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Qk=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:nt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:Hn,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Ms,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ai,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:qk,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:Jk,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return i.jsxs("div",{className:"landing-page",children:[i.jsxs("nav",{className:"navbar",children:[i.jsxs("div",{className:"nav-brand",children:[i.jsx(nt,{size:32}),i.jsx("span",{children:"Sistema Courier"})]}),i.jsxs("div",{className:"nav-links",children:[i.jsx("a",{href:"#features",children:"Características"}),i.jsx("a",{href:"#pricing",children:"Precios"}),i.jsx(De,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),i.jsx(De,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),i.jsxs("section",{className:"hero",children:[i.jsxs("div",{className:"hero-content",children:[i.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),i.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),i.jsxs("div",{className:"hero-buttons",children:[i.jsxs(De,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",i.jsx(wa,{size:20})]}),i.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),i.jsxs("div",{className:"hero-trust",children:[i.jsx("span",{children:"Confiado por +100 empresas de courier"}),i.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>i.jsx(du,{size:16,fill:"#f59e0b"},r))})]})]}),i.jsx("div",{className:"hero-image",children:i.jsxs("div",{className:"dashboard-preview",children:[i.jsx("div",{className:"preview-header",children:i.jsxs("div",{className:"dots",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})}),i.jsxs("div",{className:"preview-content",children:[i.jsx("div",{className:"mock-stat"}),i.jsx("div",{className:"mock-stat"}),i.jsx("div",{className:"mock-stat"}),i.jsx("div",{className:"mock-chart"})]})]})})]}),i.jsxs("section",{id:"features",className:"features",children:[i.jsx("h2",{children:"Todo lo que necesitas para operar"}),i.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),i.jsx("div",{className:"features-grid",children:t.map((n,r)=>i.jsxs("div",{className:"feature-card",children:[i.jsx("div",{className:"feature-icon",children:i.jsx(n.icon,{size:28})}),i.jsx("h3",{children:n.title}),i.jsx("p",{children:n.description})]},r))})]}),i.jsxs("section",{id:"pricing",className:"pricing",children:[i.jsx("h2",{children:"Planes simples y transparentes"}),i.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),i.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>i.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&i.jsx("span",{className:"popular-badge",children:"Más Popular"}),i.jsx("h3",{children:n.name}),i.jsx("p",{className:"plan-description",children:n.description}),i.jsxs("div",{className:"plan-price",children:[n.priceLabel&&i.jsx("span",{className:"price-label",children:n.priceLabel}),i.jsxs("span",{className:"price",children:["$",n.price]}),i.jsx("span",{className:"period",children:"/mes"})]}),i.jsx("ul",{className:"plan-features",children:n.features.map((s,o)=>i.jsxs("li",{children:[i.jsx(Cn,{size:16})," ",s]},o))}),i.jsx(De,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),i.jsxs("section",{className:"cta",children:[i.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),i.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),i.jsxs(De,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",i.jsx(wa,{size:24})]})]}),i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"footer-content",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsx(nt,{size:28}),i.jsx("span",{children:"Sistema Courier"}),i.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Producto"}),i.jsx("a",{href:"#features",children:"Características"}),i.jsx("a",{href:"#pricing",children:"Precios"}),i.jsx("a",{href:"/docs",children:"Documentación"})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Empresa"}),i.jsx("a",{href:"/about",children:"Nosotros"}),i.jsx("a",{href:"/contact",children:"Contacto"}),i.jsx("a",{href:"/blog",children:"Blog"})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Legal"}),i.jsx("a",{href:"/privacy",children:"Privacidad"}),i.jsx("a",{href:"/terms",children:"Términos"})]})]}),i.jsx("div",{className:"footer-bottom",children:i.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),i.jsx("style",{children:`
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
      `})]})},Zk=()=>{const e=kt(),[t,n]=I.useState(1),[r,s]=I.useState(!1),[o,l]=I.useState(""),[c,u]=I.useState("idle"),[h,g]=I.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),m=y=>{const{name:f,value:x}=y.target;if(g({...h,[f]:x}),l(""),f==="company_name"){const T=x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);g(E=>({...E,subdomain:T})),T.length>=3&&w(T)}if(f==="subdomain"){const T=x.toLowerCase().replace(/[^a-z0-9-]/g,"");g(E=>({...E,subdomain:T})),T.length>=3&&w(T)}},w=async y=>{u("checking");try{const x=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:y})})).json();u(x.available?"available":"taken")}catch{u("idle")}},j=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),_=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),P=()=>{t===1&&j()&&n(2)},D=async y=>{if(y.preventDefault(),!!_()){s(!0),l("");try{const f=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),x=await f.json();if(!f.ok)throw new Error(x.error||"Error al crear la cuenta");e(`/onboarding?tenant=${x.tenant.subdomain}`)}catch(f){l(f.message)}finally{s(!1)}}};return i.jsxs("div",{className:"register-page",children:[i.jsxs("div",{className:"register-container",children:[i.jsxs("div",{className:"register-brand",children:[i.jsxs(De,{to:"/",className:"brand-logo",children:[i.jsx(nt,{size:40}),i.jsx("span",{children:"Sistema Courier"})]}),i.jsxs("div",{className:"brand-content",children:[i.jsx("h2",{children:"Comienza tu prueba gratuita"}),i.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),i.jsxs("ul",{className:"brand-features",children:[i.jsxs("li",{children:[i.jsx(Cn,{size:20})," Configuración en minutos"]}),i.jsxs("li",{children:[i.jsx(Cn,{size:20})," Soporte incluido"]}),i.jsxs("li",{children:[i.jsx(Cn,{size:20})," Cancela cuando quieras"]})]})]})]}),i.jsxs("div",{className:"register-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h1",{children:"Crear cuenta"}),i.jsxs("p",{children:["Paso ",t," de 2"]})]}),i.jsxs("div",{className:"progress-bar",children:[i.jsx("div",{className:"progress-step active",children:"1"}),i.jsx("div",{className:"progress-line"}),i.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),o&&i.jsxs("div",{className:"error-message",children:[i.jsx(mr,{size:18}),o]}),i.jsx("form",{onSubmit:D,children:t===1?i.jsxs("div",{className:"form-step",children:[i.jsx("h3",{children:"Información de la empresa"}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Nombre de la empresa"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(_a,{size:20}),i.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:m,placeholder:"Mi Empresa de Courier",required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Tu subdominio"}),i.jsxs("div",{className:"input-wrapper subdomain-input",children:[i.jsx(ai,{size:20}),i.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:m,placeholder:"miempresa",required:!0}),i.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&i.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&i.jsxs("span",{className:"subdomain-status available",children:[i.jsx(Cn,{size:14})," Disponible"]}),c==="taken"&&i.jsxs("span",{className:"subdomain-status taken",children:[i.jsx(mr,{size:14})," No disponible"]})]}),i.jsxs("button",{type:"button",onClick:P,className:"btn-next",children:["Continuar ",i.jsx(wa,{size:20})]})]}):i.jsxs("div",{className:"form-step",children:[i.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[i.jsx(Wa,{size:18})," Atrás"]}),i.jsx("h3",{children:"Tu cuenta de administrador"}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Tu nombre"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Gk,{size:20}),i.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:m,placeholder:"Juan Pérez",required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Email"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(Dd,{size:20}),i.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:m,placeholder:"juan@miempresa.com",required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Contraseña"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(uu,{size:20}),i.jsx("input",{type:"password",name:"password",value:h.password,onChange:m,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Confirmar contraseña"}),i.jsxs("div",{className:"input-wrapper",children:[i.jsx(uu,{size:20}),i.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:m,placeholder:"Repite la contraseña",required:!0})]})]}),i.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),i.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",i.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",i.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),i.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",i.jsx(De,{to:"/login",children:"Iniciar sesión"})]})]})]}),i.jsx("style",{children:`
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
      `})]})},eE=()=>{const e=kt(),[t]=O2();t.get("tenant");const[n,r]=I.useState(1),[s,o]=I.useState(!1),[l,c]=I.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),u=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=w=>{var _;const j=(_=w.target.files)==null?void 0:_[0];j&&c({...l,logo:j,logo_preview:URL.createObjectURL(j)})},g=async()=>{o(!0);try{if(l.logo){const w=new FormData;w.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:w})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(w){console.error("Error saving onboarding:",w)}finally{o(!1)}},m=()=>{e("/dashboard")};return i.jsxs("div",{className:"onboarding-wizard",children:[i.jsxs("div",{className:"wizard-container",children:[i.jsxs("div",{className:"wizard-header",children:[i.jsx(nt,{size:32,color:"#3b82f6"}),i.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),i.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),i.jsx("div",{className:"wizard-progress",children:[1,2,3].map(w=>i.jsx("div",{className:`progress-dot ${n>=w?"active":""}`,children:n>w?i.jsx(Cn,{size:16}):w},w))}),i.jsxs("div",{className:"wizard-content",children:[n===1&&i.jsxs("div",{className:"wizard-step",children:[i.jsx("div",{className:"step-icon",children:i.jsx(Hf,{size:32})}),i.jsx("h2",{children:"Sube tu logo"}),i.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),i.jsx("div",{className:"logo-upload",children:l.logo_preview?i.jsxs("div",{className:"logo-preview",children:[i.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),i.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):i.jsxs("label",{className:"upload-area",children:[i.jsx(Hf,{size:40}),i.jsx("span",{children:"Arrastra o haz clic para subir"}),i.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),i.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&i.jsxs("div",{className:"wizard-step",children:[i.jsx("div",{className:"step-icon",children:i.jsx(Fk,{size:32})}),i.jsx("h2",{children:"Elige tus colores"}),i.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),i.jsx("div",{className:"color-picker",children:u.map(w=>i.jsx("button",{className:`color-option ${l.primary_color===w?"selected":""}`,style:{backgroundColor:w},onClick:()=>c({...l,primary_color:w}),children:l.primary_color===w&&i.jsx(Cn,{size:20})},w))}),i.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:i.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&i.jsxs("div",{className:"wizard-step",children:[i.jsx("div",{className:"step-icon",children:i.jsx(Vf,{size:32})}),i.jsx("h2",{children:"Información de contacto"}),i.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Teléfono (opcional)"}),i.jsx("input",{type:"tel",value:l.company_phone,onChange:w=>c({...l,company_phone:w.target.value}),placeholder:"+1 234 567 8900"})]}),i.jsxs("div",{className:"input-group",children:[i.jsx("label",{children:"Dirección (opcional)"}),i.jsx("input",{type:"text",value:l.company_address,onChange:w=>c({...l,company_address:w.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),i.jsxs("div",{className:"wizard-nav",children:[n>1?i.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[i.jsx(Wa,{size:20})," Atrás"]}):i.jsx("button",{onClick:m,className:"btn-skip",children:"Omitir configuración"}),n<3?i.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",i.jsx(wa,{size:20})]}):i.jsxs("button",{onClick:g,disabled:s,className:"btn-finish",children:[s?"Guardando...":"Finalizar"," ",i.jsx(Vf,{size:20})]})]})]}),i.jsx("style",{children:`
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
      `})]})},tE=()=>{var y,f,x,T,E,O,k,b;const{tenant:e,isWhiteLabel:t}=we(),{login:n,clearError:r}=mv(),s=kt(),o=un(),[l,c]=I.useState(""),[u,h]=I.useState(""),[g,m]=I.useState(!1),[w,j]=I.useState(""),_=((f=(y=o.state)==null?void 0:y.from)==null?void 0:f.pathname)||"/dashboard",P=async N=>{N.preventDefault(),m(!0),j(""),r();try{await n(l,u),s(_,{replace:!0})}catch(C){j(C.message||"Error al iniciar sesión")}finally{m(!1)}},D=((x=e==null?void 0:e.branding)==null?void 0:x.primary_color)||"#3b82f6";return i.jsxs("div",{className:"login-page",children:[i.jsxs("div",{className:"login-container",children:[i.jsx("div",{className:"login-logo",children:(T=e==null?void 0:e.branding)!=null&&T.logo_url?i.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):i.jsx("div",{className:"logo-placeholder",children:((O=(E=e==null?void 0:e.branding)==null?void 0:E.company_name)==null?void 0:O.charAt(0))||"C"})}),i.jsx("h1",{children:((k=e==null?void 0:e.branding)==null?void 0:k.company_name)||"Sistema Courier"}),((b=e==null?void 0:e.branding)==null?void 0:b.tagline)&&i.jsx("p",{className:"tagline",children:e.branding.tagline}),i.jsxs("form",{onSubmit:P,children:[w&&i.jsx("div",{className:"error-message",children:w}),i.jsxs("div",{className:"input-group",children:[i.jsx(Dd,{size:20,className:"input-icon"}),i.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:N=>c(N.target.value),required:!0})]}),i.jsxs("div",{className:"input-group",children:[i.jsx(uu,{size:20,className:"input-icon"}),i.jsx("input",{type:"password",placeholder:"Contraseña",value:u,onChange:N=>h(N.target.value),required:!0})]}),i.jsx("button",{type:"submit",className:"btn-login",disabled:g,style:{backgroundColor:D},children:g?"Iniciando sesión...":i.jsxs(i.Fragment,{children:[i.jsx(Uk,{size:20}),"Iniciar Sesión"]})}),i.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&i.jsx("div",{className:"login-footer",children:i.jsxs("p",{children:["Powered by ",i.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),i.jsx("style",{children:`
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
      `})]})},nE=()=>{var P,D,y;const{tenant:e,isWhiteLabel:t}=we(),n=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6",[r,s]=I.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[o,l]=I.useState([]),[c,u]=I.useState(!0);I.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{u(!0);const f="http://localhost:3001",T=await(await fetch(`${f}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();s(T);const O=await(await fetch(`${f}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(O)}catch(f){console.error("Error fetching dashboard data:",f)}finally{u(!1)}},g=f=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(f),m=f=>{const x=new Date(f),E=new Date().getTime()-x.getTime(),O=Math.floor(E/6e4);if(O<1)return"Hace un momento";if(O<60)return`Hace ${O} min`;const k=Math.floor(O/60);if(k<24)return`Hace ${k} hora${k>1?"s":""}`;const b=Math.floor(k/24);return`Hace ${b} día${b>1?"s":""}`},w=f=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[f]||f,j=f=>{switch(f){case"delivered":return i.jsx(Je,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return i.jsx(Hn,{size:16,className:"status-icon warning"});case"assigned":case"processing":return i.jsx(nt,{size:16,className:"status-icon info"});default:return i.jsx(xr,{size:16,className:"status-icon pending"})}},_=[{icon:nt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:Hn,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Ms,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:js,label:"Ingresos Mes",value:g(r.monthlyRevenue),color:"#f59e0b"}];return i.jsxs("div",{className:"dashboard",children:[i.jsxs("header",{className:"dashboard-header",children:[i.jsx("div",{className:"header-left",children:(D=e==null?void 0:e.branding)!=null&&D.logo_url?i.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):i.jsx("span",{className:"header-title",children:((y=e==null?void 0:e.branding)==null?void 0:y.company_name)||"Sistema Courier"})}),i.jsxs("div",{className:"header-right",children:[i.jsx("span",{className:"user-name",children:"Admin"}),i.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),i.jsxs("main",{className:"dashboard-main",children:[i.jsx("div",{className:"stats-grid",children:_.map((f,x)=>i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{backgroundColor:`${f.color}20`,color:f.color},children:i.jsx(f.icon,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("div",{className:"stat-value",children:c?"...":f.value}),i.jsx("div",{className:"stat-label",children:f.label})]})]},x))}),i.jsxs("div",{className:"dashboard-grid",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("h3",{children:"Paquetes Recientes"}),i.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),i.jsx("div",{className:"card-content",children:c?i.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):o.length===0?i.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):o.slice(0,4).map(f=>i.jsxs("div",{className:"package-item",children:[i.jsxs("div",{className:"package-info",children:[i.jsx("span",{className:"package-id",children:f.tracking_number}),i.jsx("span",{className:"package-client",children:f.client_name||"Sin cliente"})]}),i.jsxs("div",{className:"package-status",children:[j(f.status),i.jsx("span",{children:w(f.status)})]}),i.jsx("span",{className:"package-time",children:m(f.created_at)})]},f.id))})]}),i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("h3",{children:"Rendimiento"}),i.jsx(ks,{size:20,style:{color:"#10b981"}})]}),i.jsxs("div",{className:"card-content performance-grid",children:[i.jsxs("div",{className:"performance-item",children:[i.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),i.jsx("span",{className:"perf-value success",children:"94%"})]}),i.jsxs("div",{className:"performance-item",children:[i.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),i.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),i.jsxs("div",{className:"performance-item",children:[i.jsx("span",{className:"perf-label",children:"Incidentes"}),i.jsx("span",{className:"perf-value warning",children:"3"})]}),i.jsxs("div",{className:"performance-item",children:[i.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),i.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&i.jsxs("div",{className:"trial-notice",children:[i.jsx(mr,{size:20}),i.jsx("span",{children:"Tu período de prueba termina pronto. "}),i.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),i.jsx("style",{children:`
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
      `})]})},rE=()=>{var f,x;const{tenant:e}=we(),t=kt(),[n,r]=I.useState([]),[s,o]=I.useState(!0),[l,c]=I.useState(""),[u,h]=I.useState(""),[g,m]=I.useState(1),[w,j]=I.useState(0),_=20;I.useEffect(()=>{e&&P()},[e,g,l,u]);const P=async()=>{var T;if(e)try{o(!0);const E="http://localhost:3001",O=new URLSearchParams({page:g.toString(),limit:_.toString(),...l&&{search:l},...u&&{status:u}}),b=await(await fetch(`${E}/api/packages?${O}`,{headers:{"X-Tenant-ID":e.id}})).json();r(b.packages||[]),j(((T=b.pagination)==null?void 0:T.total)||0)}catch(E){console.error("Error fetching packages:",E)}finally{o(!1)}},D=T=>{const O={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[T]||{label:T,color:"#6b7280"};return i.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${O.color}20`,color:O.color},children:O.label})},y=T=>new Date(T).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return i.jsxs("div",{className:"packages-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{children:[i.jsx("h1",{children:"Paquetes"}),i.jsxs("p",{children:[w," paquetes en total"]})]}),i.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[i.jsx(li,{size:20}),"Nuevo Paquete"]})]}),i.jsxs("div",{className:"filters-bar",children:[i.jsxs("div",{className:"search-box",children:[i.jsx(Os,{size:20}),i.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:T=>{c(T.target.value),m(1)}})]}),i.jsxs("select",{value:u,onChange:T=>{h(T.target.value),m(1)},className:"status-filter",children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"pending",children:"Pendiente"}),i.jsx("option",{value:"processing",children:"Procesando"}),i.jsx("option",{value:"assigned",children:"Asignado"}),i.jsx("option",{value:"in_transit",children:"En tránsito"}),i.jsx("option",{value:"out_for_delivery",children:"En reparto"}),i.jsx("option",{value:"delivered",children:"Entregado"}),i.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),i.jsx("div",{className:"table-container",children:s?i.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(nt,{size:48}),i.jsx("h3",{children:"No hay paquetes"}),i.jsx("p",{children:"Crea tu primer paquete para comenzar"}),i.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[i.jsx(li,{size:20}),"Crear Paquete"]})]}):i.jsxs("table",{className:"packages-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Tracking"}),i.jsx("th",{children:"Destinatario"}),i.jsx("th",{children:"Dirección"}),i.jsx("th",{children:"Estado"}),i.jsx("th",{children:"Fecha"}),i.jsx("th",{children:"Acciones"})]})}),i.jsx("tbody",{children:n.map(T=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("span",{className:"tracking-number",children:T.tracking_number})}),i.jsx("td",{children:T.recipient_name}),i.jsx("td",{className:"address-cell",children:T.recipient_address}),i.jsx("td",{children:D(T.status)}),i.jsx("td",{children:y(T.created_at)}),i.jsx("td",{children:i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${T.id}`),title:"Ver detalle",children:i.jsx(Lk,{size:16})}),i.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${T.id}/edit`),title:"Editar",children:i.jsx(qa,{size:16})})]})})]},T.id))})]})}),!s&&w>_&&i.jsxs("div",{className:"pagination",children:[i.jsx("button",{disabled:g===1,onClick:()=>m(g-1),children:"Anterior"}),i.jsxs("span",{children:["Página ",g," de ",Math.ceil(w/_)]}),i.jsx("button",{disabled:g>=Math.ceil(w/_),onClick:()=>m(g+1),children:"Siguiente"})]}),i.jsx("style",{children:`
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
            `})]})},iE=()=>{var y,f,x,T;const{tenant:e}=we(),t=kt(),[n,r]=I.useState(!1),[s,o]=I.useState([]),[l,c]=I.useState([]),[u,h]=I.useState(null),[g,m]=I.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",zone:"",service_type:"standard",weight:"",dimensions:"",declared_value:"",notes:""});I.useEffect(()=>{e&&(w(),j())},[e]),I.useEffect(()=>{g.zone&&g.weight&&parseFloat(g.weight)>0?_():h(null)},[g.zone,g.weight,g.service_type]);const w=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();o(k.clients||[])}catch(E){console.error("Error fetching clients:",E)}},j=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/rates/zones",{headers:{"X-Tenant-ID":e.id}})).json();c(k.zones||[])}catch(E){console.error("Error fetching zones:",E)}},_=async()=>{if(!(!e||!g.zone||!g.weight))try{const k=await(await fetch(`http://localhost:3001/api/rates/calculate?zone=${g.zone}&weight=${g.weight}&serviceType=${g.service_type}`,{headers:{"X-Tenant-ID":e.id}})).json();h(k.totalPrice||null)}catch(E){console.error("Error calculating price:",E),h(null)}},P=E=>{const O=s.find(k=>k.id===E);m(O?{...g,client_id:E,sender_name:O.name,sender_phone:O.phone}:{...g,client_id:E})},D=async E=>{if(E.preventDefault(),!!e){if(!g.client_id||!g.recipient_name||!g.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const k=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...g,weight:parseFloat(g.weight)||0,declared_value:parseFloat(g.declared_value)||0})});if(k.ok){const b=await k.json();alert(`Paquete creado exitosamente! Tracking: ${b.tracking_number}`),t("/packages")}else{const b=await k.json();alert(`Error: ${b.error||"No se pudo crear el paquete"}`)}}catch(O){console.error("Error creating package:",O),alert("Error al crear el paquete")}finally{r(!1)}}};return i.jsxs("div",{className:"new-package-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[i.jsx(Wa,{size:20}),"Volver"]}),i.jsx("h1",{children:"Nuevo Paquete"})]}),i.jsxs("form",{onSubmit:D,className:"package-form",children:[i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{children:"Información del Cliente"}),i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Cliente *"}),i.jsxs("select",{value:g.client_id,onChange:E=>P(E.target.value),required:!0,children:[i.jsx("option",{value:"",children:"Seleccionar cliente"}),s.map(E=>i.jsx("option",{value:E.id,children:E.name},E.id))]})]})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{children:"Datos del Remitente"}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Nombre del Remitente"}),i.jsx("input",{type:"text",value:g.sender_name,onChange:E=>m({...g,sender_name:E.target.value}),placeholder:"Nombre completo"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Teléfono del Remitente"}),i.jsx("input",{type:"tel",value:g.sender_phone,onChange:E=>m({...g,sender_phone:E.target.value}),placeholder:"8888-8888"})]})]})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{children:"Datos del Destinatario"}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Nombre del Destinatario *"}),i.jsx("input",{type:"text",value:g.recipient_name,onChange:E=>m({...g,recipient_name:E.target.value}),placeholder:"Nombre completo",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Teléfono del Destinatario *"}),i.jsx("input",{type:"tel",value:g.recipient_phone,onChange:E=>m({...g,recipient_phone:E.target.value}),placeholder:"8888-8888",required:!0})]})]}),i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{children:"Dirección de Entrega *"}),i.jsx("textarea",{value:g.recipient_address,onChange:E=>m({...g,recipient_address:E.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("h2",{children:"Detalles del Paquete"}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Zona de Entrega *"}),i.jsxs("select",{value:g.zone,onChange:E=>m({...g,zone:E.target.value}),required:!0,children:[i.jsx("option",{value:"",children:"Seleccionar zona"}),l.map(E=>i.jsx("option",{value:E,children:E},E))]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Tipo de Servicio *"}),i.jsxs("select",{value:g.service_type,onChange:E=>m({...g,service_type:E.target.value}),required:!0,children:[i.jsx("option",{value:"standard",children:"Estándar"}),i.jsx("option",{value:"express",children:"Express"}),i.jsx("option",{value:"same_day",children:"Mismo Día"}),i.jsx("option",{value:"scheduled",children:"Programado"})]})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Peso (kg) *"}),i.jsx("input",{type:"number",step:"0.01",value:g.weight,onChange:E=>m({...g,weight:E.target.value}),placeholder:"0.00",required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Dimensiones"}),i.jsx("input",{type:"text",value:g.dimensions,onChange:E=>m({...g,dimensions:E.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Valor Declarado (₡)"}),i.jsx("input",{type:"number",step:"0.01",value:g.declared_value,onChange:E=>m({...g,declared_value:E.target.value}),placeholder:"0.00"})]})]}),u!==null&&i.jsxs("div",{className:"price-calculator",children:[i.jsx("div",{className:"price-label",children:"Precio Estimado:"}),i.jsxs("div",{className:"price-value",children:["₡",u.toLocaleString("es-CR",{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),i.jsx("div",{className:"form-row",children:i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{children:"Notas"}),i.jsx("textarea",{value:g.notes,onChange:E=>m({...g,notes:E.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),i.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[i.jsx(bv,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),i.jsx("style",{children:`
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
                    background: ${((T=e==null?void 0:e.branding)==null?void 0:T.primary_color)||"#3b82f6"};
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
            `})]})};function hu(){return hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hu.apply(null,arguments)}function sE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function oE(e,t){if(e==null)return{};var n,r,s=sE(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function pu(e){"@babel/helpers - typeof";return pu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pu(e)}function aE(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function lE(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fu(e,t){return fu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},fu(e,t)}function cE(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fu(e,t)}function ja(e){return ja=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ja(e)}function _v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(_v=function(){return!!e})()}function uE(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dE(e,t){if(t&&(pu(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return uE(e)}function hE(e){var t=_v();return function(){var n,r=ja(e);if(t){var s=ja(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return dE(this,n)}}var jv={exports:{}},pE="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",fE=pE,gE=fE;function kv(){}function Ev(){}Ev.resetWarningCache=kv;var mE=function(){function e(r,s,o,l,c,u){if(u!==gE){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ev,resetWarningCache:kv};return n.PropTypes=n,n};jv.exports=mE();var xE=jv.exports;const Qe=gu(xE);/*!
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
 */function yr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}yr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};yr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};yr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function Ld(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}Ld.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,s=0;s<=e;s+=1){var o=s/e,l=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){var u=l-n,h=c-r;t+=Math.sqrt(u*u+h*h)}n=l,r=c}return t};Ld.prototype._point=function(e,t,n,r,s){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+s*e*e*e};function vE(e,t,n){var r,s,o,l=null,c=0;n||(n={});var u=function(){c=n.leading===!1?0:Date.now(),l=null,o=e.apply(r,s),l||(r=s=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var g=t-(h-c);return r=this,s=arguments,g<=0||g>t?(l&&(clearTimeout(l),l=null),c=h,o=e.apply(r,s),l||(r=s=null)):!l&&n.trailing!==!1&&(l=setTimeout(u,g)),o}}function te(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=vE(te.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=te.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(s){s.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(s))},this._handleMouseMove=function(s){n._mouseButtonDown&&n._strokeMoveUpdate(s)},this._handleMouseUp=function(s){s.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(s))},this._handleTouchStart=function(s){if(s.targetTouches.length===1){var o=s.changedTouches[0];n._strokeBegin(o)}},this._handleTouchMove=function(s){s.preventDefault();var o=s.targetTouches[0];n._strokeMoveUpdate(o)},this._handleTouchEnd=function(s){var o=s.target===n._canvas;o&&(s.preventDefault(),n._strokeEnd(s))},this.on()}te.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};te.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,s=n.ratio||window.devicePixelRatio||1,o=n.width||this._canvas.width/s,l=n.height||this._canvas.height/s;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,o,l)},this._isEmpty=!1};te.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};te.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};te.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};te.prototype.isEmpty=function(){return this._isEmpty};te.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};te.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),s=this._data[this._data.length-1],o=s&&s[s.length-1],l=o&&r.distanceTo(o)<this.minDistance;if(!(o&&l)){var c=this._addPoint(r),u=c.curve,h=c.widths;u&&h&&this._drawCurve(u,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};te.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],s=r[r.length-1];n.equals(s)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};te.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};te.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};te.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};te.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new yr(e-r.left,t-r.top,n||new Date().getTime())};te.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var s=n.c1,o=new Ld(t[1],r,s,t[2]),l=this._calculateCurveWidths(o);return t.shift(),{curve:o,widths:l}}return{}};te.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,s=e.y-t.y,o=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},u={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+s*s),g=Math.sqrt(o*o+l*l),m=c.x-u.x,w=c.y-u.y,j=g/(h+g),_={x:u.x+m*j,y:u.y+w*j},P=t.x-_.x,D=t.y-_.y;return{c1:new yr(c.x+P,c.y+D),c2:new yr(u.x+P,u.y+D)}};te.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},s=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,o=this._strokeWidth(s);return r.start=this._lastWidth,r.end=o,this._lastVelocity=s,this._lastWidth=o,r};te.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};te.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};te.prototype._drawCurve=function(e,t,n){var r=this._ctx,s=n-t,o=Math.floor(e.length());r.beginPath();for(var l=0;l<o;l+=1){var c=l/o,u=c*c,h=u*c,g=1-c,m=g*g,w=m*g,j=w*e.startPoint.x;j+=3*m*c*e.control1.x,j+=3*g*u*e.control2.x,j+=h*e.endPoint.x;var _=w*e.startPoint.y;_+=3*m*c*e.control1.y,_+=3*g*u*e.control2.y,_+=h*e.endPoint.y;var P=t+h*s;this._drawPoint(j,_,P)}r.closePath(),r.fill()};te.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};te.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var s=e[r];if(s.length>1)for(var o=0;o<s.length;o+=1){var l=s[o],c=new yr(l.x,l.y,l.time),u=l.color;if(o===0)this.penColor=u,this._reset(),this._addPoint(c);else if(o!==s.length-1){var h=this._addPoint(c),g=h.curve,m=h.widths;g&&m&&t(g,m,u)}}else{this._reset();var w=s[0];n(w)}}};te.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),s=0,o=0,l=n.width/r,c=n.height/r,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttributeNS(null,"width",n.width),u.setAttributeNS(null,"height",n.height),this._fromData(t,function(y,f,x){var T=document.createElement("path");if(!isNaN(y.control1.x)&&!isNaN(y.control1.y)&&!isNaN(y.control2.x)&&!isNaN(y.control2.y)){var E="M "+y.startPoint.x.toFixed(3)+","+y.startPoint.y.toFixed(3)+" "+("C "+y.control1.x.toFixed(3)+","+y.control1.y.toFixed(3)+" ")+(y.control2.x.toFixed(3)+","+y.control2.y.toFixed(3)+" ")+(y.endPoint.x.toFixed(3)+","+y.endPoint.y.toFixed(3));T.setAttribute("d",E),T.setAttribute("stroke-width",(f.end*2.25).toFixed(3)),T.setAttribute("stroke",x),T.setAttribute("fill","none"),T.setAttribute("stroke-linecap","round"),u.appendChild(T)}},function(y){var f=document.createElement("circle"),x=typeof e.dotSize=="function"?e.dotSize():e.dotSize;f.setAttribute("r",x),f.setAttribute("cx",y.x),f.setAttribute("cy",y.y),f.setAttribute("fill",y.color),u.appendChild(f)});var h="data:image/svg+xml;base64,",g='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+s+" "+o+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",m=u.innerHTML;if(m===void 0){var w=document.createElement("dummy"),j=u.childNodes;w.innerHTML="";for(var _=0;_<j.length;_+=1)w.appendChild(j[_].cloneNode(!0));m=w.innerHTML}var P="</svg>",D=g+m+P;return h+btoa(D)};te.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};te.prototype.toData=function(){return this._data};var Nv={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(a0,function(){return function(n){function r(o){if(s[o])return s[o].exports;var l=s[o]={exports:{},id:o,loaded:!1};return n[o].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var s={};return r.m=n,r.c=s,r.p="",r(0)}([function(n,r){function s(h){var g=h.getContext("2d"),m=h.width,w=h.height,j=g.getImageData(0,0,m,w).data,_=c(!0,m,w,j),P=c(!1,m,w,j),D=u(!0,m,w,j),y=u(!1,m,w,j),f=y-D+1,x=P-_+1,T=g.getImageData(D,_,f,x);return h.width=f,h.height=x,g.clearRect(0,0,f,x),g.putImageData(T,0,0),h}function o(h,g,m,w){return{red:w[4*(m*g+h)],green:w[4*(m*g+h)+1],blue:w[4*(m*g+h)+2],alpha:w[4*(m*g+h)+3]}}function l(h,g,m,w){return o(h,g,m,w).alpha}function c(h,g,m,w){for(var j=h?1:-1,_=h?0:m-1,P=_;h?P<m:P>-1;P+=j)for(var D=0;D<g;D++)if(l(D,P,g,w))return P;return null}function u(h,g,m,w){for(var j=h?1:-1,_=h?0:g-1,P=_;h?P<g:P>-1;P+=j)for(var D=0;D<m;D++)if(l(P,D,g,w))return P;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=s}])})})(Nv);var yE=Nv.exports;const bE=gu(yE);var wE=["canvasProps","clearOnResize"],Ka=function(e){cE(n,e);var t=hE(n);function n(){var r;lE(this,n);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return r=t.call.apply(t,[this].concat(o)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var u=oE(c,wE);return u},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new te(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),u=document.createElement("canvas");return u.width=c.width,u.height=c.height,u.getContext("2d").drawImage(c,0,0),bE(u)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,u,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},g=h.width,m=h.height;if(!(typeof g<"u"&&typeof m<"u")){var w=r.getCanvas(),j=Math.max((u=window.devicePixelRatio)!==null&&u!==void 0?u:1,1);typeof g>"u"&&(w.width=w.offsetWidth*j),typeof m>"u"&&(w.height=w.offsetHeight*j),w.getContext("2d").scale(j,j),r.clear()}},r.render=function(){var c=r.props.canvasProps;return bu.createElement("canvas",hu({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,u){return r.getSignaturePad().fromDataURL(c,u)},r.toDataURL=function(c,u){return r.getSignaturePad().toDataURL(c,u)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return aE(n)}(I.Component);Ka.propTypes={velocityFilterWeight:Qe.number,minWidth:Qe.number,maxWidth:Qe.number,minDistance:Qe.number,dotSize:Qe.oneOfType([Qe.number,Qe.func]),penColor:Qe.string,throttle:Qe.number,onEnd:Qe.func,onBegin:Qe.func,canvasProps:Qe.object,clearOnResize:Qe.bool};Ka.defaultProps={clearOnResize:!0};Ka.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const _E=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:s})=>{var j,_;const{tenant:o}=we(),l=I.useRef(null),[c,u]=I.useState(""),[h,g]=I.useState(!1),m=()=>{var P;(P=l.current)==null||P.clear()},w=async()=>{var P,D;if((P=l.current)!=null&&P.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{g(!0);const y=(D=l.current)==null?void 0:D.toDataURL(),x=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":o.id},body:JSON.stringify({signatureUrl:y,recipientName:n,recipientId:c})});if(x.ok)alert("Entrega confirmada exitosamente"),s();else{const T=await x.json();alert(`Error: ${T.error||"No se pudo confirmar la entrega"}`)}}catch(y){console.error("Error confirmando entrega:",y),alert("Error al confirmar la entrega")}finally{g(!1)}};return i.jsx("div",{className:"modal-overlay",onClick:r,children:i.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{children:"Confirmar Entrega"}),i.jsx("button",{className:"btn-close",onClick:r,children:i.jsx(Yk,{size:24})})]}),i.jsxs("div",{className:"modal-body",children:[i.jsxs("div",{className:"package-info",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Tracking:"})," ",t]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Destinatario:"})," ",n]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"Cédula del Destinatario *"}),i.jsx("input",{type:"text",value:c,onChange:P=>u(P.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),i.jsxs("div",{className:"signature-section",children:[i.jsx("label",{children:"Firma del Destinatario *"}),i.jsx("div",{className:"signature-canvas-container",children:i.jsx(Ka,{ref:l,canvasProps:{className:"signature-canvas"}})}),i.jsxs("button",{className:"btn-clear",onClick:m,disabled:h,children:[i.jsx(Hk,{size:16}),"Limpiar"]})]})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),i.jsxs("button",{className:"btn-primary",onClick:w,disabled:h,children:[i.jsx(Cn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),i.jsx("style",{children:`
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
                        border-color: ${((j=o==null?void 0:o.branding)==null?void 0:j.primary_color)||"#3b82f6"};
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
                `})]})})},jE=()=>{var P,D;const{id:e}=cx(),{tenant:t}=we(),n=kt(),[r,s]=I.useState(null),[o,l]=I.useState([]),[c,u]=I.useState(!0),[h,g]=I.useState(!1);I.useEffect(()=>{t&&e&&m()},[t,e]);const m=async()=>{if(!(!t||!e))try{u(!0);const x=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();s(x)}catch(y){console.error("Error fetching package:",y)}finally{u(!1)}},w=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),T=window.URL.createObjectURL(x),E=document.createElement("a");E.href=T,E.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(E),E.click(),window.URL.revokeObjectURL(T),document.body.removeChild(E)}}catch(y){console.error("Error downloading label:",y),alert("Error al descargar la etiqueta")}},j=async()=>{if(!(!t||!e))try{const f=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(f.ok){const x=await f.blob(),T=window.URL.createObjectURL(x),E=document.createElement("a");E.href=T,E.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(E),E.click(),window.URL.revokeObjectURL(T),document.body.removeChild(E)}}catch(y){console.error("Error downloading delivery note:",y),alert("Error al descargar la nota de entrega")}},_=y=>{const x={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[y]||{label:y,color:"#6b7280"};return i.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${x.color}20`,color:x.color},children:x.label})};return c?i.jsx("div",{className:"loading-page",children:"Cargando..."}):r?i.jsxs("div",{className:"package-detail-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[i.jsx(Wa,{size:20}),"Volver"]}),i.jsxs("div",{className:"header-info",children:[i.jsx("h1",{children:r.tracking_number}),_(r.status)]}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("button",{className:"btn-action",onClick:w,title:"Imprimir Etiqueta",children:[i.jsx(Bk,{size:20}),"Etiqueta"]}),i.jsxs("button",{className:"btn-action",onClick:j,title:"Nota de Entrega",children:[i.jsx(Jr,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&i.jsxs("button",{className:"btn-deliver",onClick:()=>g(!0),title:"Confirmar Entrega",children:[i.jsx(Je,{size:20}),"Confirmar Entrega"]}),i.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[i.jsx(qa,{size:20}),"Editar"]})]})]}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-card",children:[i.jsx("h2",{children:"Información General"}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Cliente:"}),i.jsx("span",{className:"value",children:r.client_name})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Courier:"}),i.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Peso:"}),i.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Dimensiones:"}),i.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Valor Declarado:"}),i.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Fecha Creación:"}),i.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Fecha Entrega:"}),i.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),i.jsxs("div",{className:"detail-card",children:[i.jsx("h2",{children:"Remitente"}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Nombre:"}),i.jsx("span",{className:"value",children:r.sender_name})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Teléfono:"}),i.jsx("span",{className:"value",children:r.sender_phone})]})]}),i.jsxs("div",{className:"detail-card",children:[i.jsx("h2",{children:"Destinatario"}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Nombre:"}),i.jsx("span",{className:"value",children:r.recipient_name})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Teléfono:"}),i.jsx("span",{className:"value",children:r.recipient_phone})]}),i.jsxs("div",{className:"detail-row",children:[i.jsx("span",{className:"label",children:"Dirección:"}),i.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&i.jsxs("div",{className:"detail-card full-width",children:[i.jsx("h2",{children:"Notas"}),i.jsx("p",{children:r.notes})]})]}),h&&i.jsx(_E,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>g(!1),onSuccess:()=>{g(!1),m()}}),i.jsx("style",{children:`
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
                    background: ${((P=t==null?void 0:t.branding)==null?void 0:P.primary_color)||"#3b82f6"};
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
            `})]}):i.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},kE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(!0),[o,l]=I.useState("");I.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{s(!0);const u="http://localhost:3001",h=new URLSearchParams({...o&&{search:o}}),m=await(await fetch(`${u}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(m.clients||[])}catch(u){console.error("Error:",u)}finally{s(!1)}};return i.jsxs("div",{className:"clients-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Clientes"}),i.jsxs("p",{children:[t.length," clientes registrados"]})]}),i.jsxs("div",{className:"search-box",children:[i.jsx(Os,{size:20}),i.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:o,onChange:u=>l(u.target.value)})]}),i.jsx("div",{className:"table-container",children:r?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Ms,{size:48}),i.jsx("h3",{children:"No hay clientes"})]}):i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Nombre"}),i.jsx("th",{children:"Empresa"}),i.jsx("th",{children:"Email"}),i.jsx("th",{children:"Teléfono"}),i.jsx("th",{children:"Paquetes"})]})}),i.jsx("tbody",{children:t.map(u=>i.jsxs("tr",{children:[i.jsx("td",{children:u.name}),i.jsx("td",{children:u.company_name||"-"}),i.jsx("td",{children:u.email}),i.jsx("td",{children:u.phone}),i.jsx("td",{children:u.total_packages})]},u.id))})]})}),i.jsx("style",{children:`
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
            `})]})},EE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(!0),[o,l]=I.useState("");I.useEffect(()=>{e&&c()},[e,o]);const c=async()=>{if(e)try{s(!0);const h="http://localhost:3001",g=new URLSearchParams({...o&&{search:o}}),w=await(await fetch(`${h}/api/couriers?${g}`,{headers:{"X-Tenant-ID":e.id}})).json();n(w.couriers||[])}catch(h){console.error("Error:",h)}finally{s(!1)}},u=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return i.jsxs("div",{className:"couriers-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"Couriers"}),i.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),i.jsxs("div",{className:"search-box",children:[i.jsx(Os,{size:20}),i.jsx("input",{type:"text",placeholder:"Buscar courier...",value:o,onChange:h=>l(h.target.value)})]}),i.jsx("div",{className:"table-container",children:r?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Hn,{size:48}),i.jsx("h3",{children:"No hay couriers"})]}):i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Nombre"}),i.jsx("th",{children:"Teléfono"}),i.jsx("th",{children:"Vehículo"}),i.jsx("th",{children:"Placa"}),i.jsx("th",{children:"Zona"}),i.jsx("th",{children:"Entregas"}),i.jsx("th",{children:"Rating"})]})}),i.jsx("tbody",{children:t.map(h=>i.jsxs("tr",{children:[i.jsx("td",{children:h.name}),i.jsx("td",{children:h.phone}),i.jsx("td",{children:u(h.vehicle_type)}),i.jsx("td",{children:h.vehicle_plate||"-"}),i.jsx("td",{children:h.zone||"-"}),i.jsx("td",{children:h.completed_deliveries}),i.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),i.jsx("style",{children:`
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
            `})]})},NE=()=>{var w;const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(!0),[o,l]=I.useState(!1),[c,u]=I.useState(null);I.useEffect(()=>{e&&h()},[e]);const h=async()=>{if(e)try{s(!0);const P=await(await fetch("http://localhost:3001/api/rates",{headers:{"X-Tenant-ID":e.id}})).json();n(P.rates||[])}catch(j){console.error("Error:",j)}finally{s(!1)}},g=async j=>{if(confirm("¿Eliminar esta tarifa?"))try{(await fetch(`http://localhost:3001/api/rates/${j}`,{method:"DELETE",headers:{"X-Tenant-ID":e.id}})).ok&&h()}catch(_){console.error("Error:",_)}},m=j=>({standard:"Estándar",express:"Express",same_day:"Mismo Día",scheduled:"Programado"})[j]||j;return i.jsxs("div",{className:"rates-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{children:[i.jsx("h1",{children:"Tarifas"}),i.jsxs("p",{children:[t.length," tarifas configuradas"]})]}),i.jsxs("button",{className:"btn-primary",onClick:()=>l(!0),children:[i.jsx(li,{size:20}),"Nueva Tarifa"]})]}),i.jsx("div",{className:"table-container",children:r?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(js,{size:48}),i.jsx("h3",{children:"No hay tarifas configuradas"}),i.jsx("p",{children:"Crea tu primera tarifa para comenzar"})]}):i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Nombre"}),i.jsx("th",{children:"Zona"}),i.jsx("th",{children:"Peso (kg)"}),i.jsx("th",{children:"Precio Base"}),i.jsx("th",{children:"Precio/kg"}),i.jsx("th",{children:"Tipo"}),i.jsx("th",{children:"Estado"}),i.jsx("th",{children:"Acciones"})]})}),i.jsx("tbody",{children:t.map(j=>i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:j.name}),j.description&&i.jsx("div",{className:"description",children:j.description})]}),i.jsx("td",{children:j.zone||"-"}),i.jsxs("td",{children:[j.min_weight," - ",j.max_weight||"∞"]}),i.jsxs("td",{children:["₡",j.base_price.toLocaleString()]}),i.jsxs("td",{children:["₡",j.price_per_kg.toLocaleString()]}),i.jsx("td",{children:m(j.service_type)}),i.jsx("td",{children:i.jsx("span",{className:`status ${j.active?"active":"inactive"}`,children:j.active?"Activa":"Inactiva"})}),i.jsx("td",{children:i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"btn-icon",onClick:()=>{u(j),l(!0)},title:"Editar",children:i.jsx(qa,{size:16})}),i.jsx("button",{className:"btn-icon danger",onClick:()=>g(j.id),title:"Eliminar",children:i.jsx(wv,{size:16})})]})})]},j.id))})]})}),i.jsx("style",{children:`
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
            `})]})},SE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(!0),[o,l]=I.useState(""),[c,u]=I.useState("");I.useEffect(()=>{e&&h()},[e,o,c]);const h=async()=>{if(e)try{s(!0);let P="http://localhost:3001/api/incidents?";o&&(P+=`status=${o}&`),c&&(P+=`priority=${c}`);const y=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(y.incidents||[])}catch(_){console.error("Error:",_)}finally{s(!1)}},g=_=>({delay:"Retraso",damage:"Daño",loss:"Pérdida",client_absent:"Cliente Ausente",address_error:"Error de Dirección",other:"Otro"})[_]||_,m=_=>{switch(_){case"open":return i.jsx(Vn,{size:16});case"investigating":return i.jsx(xr,{size:16});case"resolved":return i.jsx(Je,{size:16});case"closed":return i.jsx(vr,{size:16});default:return null}},w=_=>({open:"Abierta",investigating:"Investigando",resolved:"Resuelta",closed:"Cerrada"})[_]||_,j=_=>({low:"#10b981",medium:"#f59e0b",high:"#ef4444",critical:"#991b1b"})[_]||"#6b7280";return i.jsxs("div",{className:"incidents-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Incidencias"}),i.jsxs("p",{children:[t.length," incidencias registradas"]})]})}),i.jsxs("div",{className:"filters",children:[i.jsxs("select",{value:o,onChange:_=>l(_.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"open",children:"Abierta"}),i.jsx("option",{value:"investigating",children:"Investigando"}),i.jsx("option",{value:"resolved",children:"Resuelta"}),i.jsx("option",{value:"closed",children:"Cerrada"})]}),i.jsxs("select",{value:c,onChange:_=>u(_.target.value),children:[i.jsx("option",{value:"",children:"Todas las prioridades"}),i.jsx("option",{value:"low",children:"Baja"}),i.jsx("option",{value:"medium",children:"Media"}),i.jsx("option",{value:"high",children:"Alta"}),i.jsx("option",{value:"critical",children:"Crítica"})]})]}),i.jsx("div",{className:"incidents-list",children:r?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Vn,{size:48}),i.jsx("h3",{children:"No hay incidencias"}),i.jsx("p",{children:"No se encontraron incidencias con los filtros seleccionados"})]}):t.map(_=>i.jsxs("div",{className:"incident-card",children:[i.jsxs("div",{className:"incident-header",children:[i.jsxs("div",{className:"incident-title",children:[i.jsx("span",{className:"incident-icon",style:{color:j(_.priority)},children:m(_.status)}),i.jsxs("div",{children:[i.jsx("h3",{children:g(_.type)}),i.jsxs("p",{className:"tracking",children:["Paquete: ",_.tracking_number]})]})]}),i.jsxs("div",{className:"incident-badges",children:[i.jsx("span",{className:`status-badge status-${_.status}`,children:w(_.status)}),i.jsx("span",{className:"priority-badge",style:{backgroundColor:`${j(_.priority)}20`,color:j(_.priority)},children:_.priority.toUpperCase()})]})]}),i.jsxs("div",{className:"incident-body",children:[i.jsx("p",{className:"description",children:_.description}),_.resolution&&i.jsxs("div",{className:"resolution",children:[i.jsx("strong",{children:"Resolución:"})," ",_.resolution]})]}),i.jsxs("div",{className:"incident-footer",children:[i.jsx("span",{className:"date",children:new Date(_.created_at).toLocaleDateString("es-CR")}),i.jsx("span",{className:"client",children:_.client_name})]})]},_.id))}),i.jsx("style",{children:`
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
            `})]})},CE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(null),[o,l]=I.useState(!0);I.useEffect(()=>{e&&(c(),u())},[e]);const c=async()=>{if(e)try{l(!0);const m=await(await fetch("http://localhost:3001/api/fuel",{headers:{"X-Tenant-ID":e.id}})).json();n(m.records||[])}catch(h){console.error("Error:",h)}finally{l(!1)}},u=async()=>{if(e)try{const m=await(await fetch("http://localhost:3001/api/fuel/stats",{headers:{"X-Tenant-ID":e.id}})).json();s(m)}catch(h){console.error("Error:",h)}};return i.jsxs("div",{className:"fuel-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Control de Combustible"}),i.jsxs("p",{children:[t.length," registros de combustible"]})]})}),r&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:i.jsx(js,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Costo Total"}),i.jsxs("p",{className:"stat-value",children:["₡",r.totalCost.toLocaleString()]})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Dk,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Litros Totales"}),i.jsxs("p",{className:"stat-value",children:[r.totalLiters.toFixed(2)," L"]})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(ks,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Rendimiento Promedio"}),i.jsxs("p",{className:"stat-value",children:[r.averageEfficiency.toFixed(2)," km/L"]})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(Bf,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Registros"}),i.jsx("p",{className:"stat-value",children:r.recordCount})]})]})]}),i.jsxs("div",{className:"records-list",children:[i.jsx("h2",{children:"Registros de Combustible"}),o?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Bf,{size:48}),i.jsx("h3",{children:"No hay registros"}),i.jsx("p",{children:"No se encontraron registros de combustible"})]}):i.jsx("div",{className:"table-container",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fecha"}),i.jsx("th",{children:"Courier"}),i.jsx("th",{children:"Litros"}),i.jsx("th",{children:"Costo"}),i.jsx("th",{children:"Precio/L"}),i.jsx("th",{children:"Odómetro"}),i.jsx("th",{children:"Distancia"}),i.jsx("th",{children:"Rendimiento"}),i.jsx("th",{children:"Estación"})]})}),i.jsx("tbody",{children:t.map(h=>{var g,m,w;return i.jsxs("tr",{children:[i.jsx("td",{children:new Date(h.created_at).toLocaleDateString("es-CR")}),i.jsx("td",{children:h.courier_name||"-"}),i.jsxs("td",{children:[h.liters.toFixed(2)," L"]}),i.jsxs("td",{children:["₡",h.cost.toLocaleString()]}),i.jsxs("td",{children:["₡",((g=h.price_per_liter)==null?void 0:g.toFixed(2))||"-"]}),i.jsxs("td",{children:[((m=h.odometer_reading)==null?void 0:m.toLocaleString())||"-"," km"]}),i.jsxs("td",{children:[((w=h.distance_traveled)==null?void 0:w.toLocaleString())||"-"," km"]}),i.jsx("td",{children:h.efficiency?i.jsxs("span",{className:"efficiency",children:[h.efficiency.toFixed(2)," km/L"]}):"-"}),i.jsx("td",{children:h.station||"-"})]},h.id)})})]})})]}),i.jsx("style",{children:`
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
            `})]})},TE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(null),[o,l]=I.useState(!0),[c,u]=I.useState("");I.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let P="http://localhost:3001/api/vehicles";c&&(P+=`?status=${c}`);const y=await(await fetch(P,{headers:{"X-Tenant-ID":e.id}})).json();n(y.vehicles||[])}catch(_){console.error("Error:",_)}finally{l(!1)}},g=async()=>{if(e)try{const D=await(await fetch("http://localhost:3001/api/vehicles/stats",{headers:{"X-Tenant-ID":e.id}})).json();s(D)}catch(_){console.error("Error:",_)}},m=_=>{switch(_){case"active":return i.jsx(Je,{size:20});case"maintenance":return i.jsx(mr,{size:20});case"inactive":return i.jsx(vr,{size:20});default:return null}},w=_=>{switch(_){case"active":return"#10b981";case"maintenance":return"#f59e0b";case"inactive":return"#ef4444";default:return"#6b7280"}},j=_=>({active:"Activo",maintenance:"Mantenimiento",inactive:"Inactivo"})[_]||_;return i.jsxs("div",{className:"vehicles-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Vehículos"}),i.jsxs("p",{children:[t.length," vehículos registrados"]})]})}),r&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Activos"}),i.jsx("p",{className:"stat-value",children:r.active})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(mr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"En Mantenimiento"}),i.jsx("p",{className:"stat-value",children:r.maintenance})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:i.jsx(vr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Inactivos"}),i.jsx("p",{className:"stat-value",children:r.inactive})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Hn,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Total"}),i.jsx("p",{className:"stat-value",children:r.total})]})]})]}),i.jsx("div",{className:"filters",children:i.jsxs("select",{value:c,onChange:_=>u(_.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"active",children:"Activos"}),i.jsx("option",{value:"maintenance",children:"En Mantenimiento"}),i.jsx("option",{value:"inactive",children:"Inactivos"})]})}),i.jsx("div",{className:"vehicles-grid",children:o?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Hn,{size:48}),i.jsx("h3",{children:"No hay vehículos"}),i.jsx("p",{children:"No se encontraron vehículos con los filtros seleccionados"})]}):t.map(_=>i.jsxs("div",{className:"vehicle-card",children:[i.jsxs("div",{className:"vehicle-header",children:[i.jsx("div",{className:"vehicle-icon",style:{color:w(_.status)},children:m(_.status)}),i.jsx("div",{className:"vehicle-plate",children:_.plate})]}),i.jsxs("div",{className:"vehicle-body",children:[i.jsxs("h3",{children:[_.brand," ",_.model]}),i.jsxs("div",{className:"vehicle-details",children:[_.year&&i.jsxs("span",{children:["Año: ",_.year]}),_.type&&i.jsxs("span",{children:["Tipo: ",_.type]})]}),_.courier_name&&i.jsxs("div",{className:"vehicle-assigned",children:["Asignado a: ",_.courier_name]})]}),i.jsx("div",{className:"vehicle-footer",children:i.jsx("span",{className:"status-badge",style:{backgroundColor:`${w(_.status)}20`,color:w(_.status)},children:j(_.status)})})]},_.id))}),i.jsx("style",{children:`
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
            `})]})},IE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState([]),[o,l]=I.useState(null),[c,u]=I.useState(!0),[h,g]=I.useState("");I.useEffect(()=>{e&&(m(),w(),j())},[e,h]);const m=async()=>{if(e)try{u(!0);let x="http://localhost:3001/api/maintenance";h&&(x+=`?status=${h}`);const E=await(await fetch(x,{headers:{"X-Tenant-ID":e.id}})).json();n(E.records||[])}catch(f){console.error("Error:",f)}finally{u(!1)}},w=async()=>{if(e)try{const T=await(await fetch("http://localhost:3001/api/maintenance/upcoming?days=30",{headers:{"X-Tenant-ID":e.id}})).json();s(T.records||[])}catch(f){console.error("Error:",f)}},j=async()=>{if(e)try{const T=await(await fetch("http://localhost:3001/api/maintenance/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(T)}catch(f){console.error("Error:",f)}},_=f=>({preventive:"Preventivo",corrective:"Correctivo",inspection:"Inspección"})[f]||f,P=f=>({scheduled:"Programado",in_progress:"En Progreso",completed:"Completado"})[f]||f,D=f=>{switch(f){case"scheduled":return i.jsx(lu,{size:16});case"in_progress":return i.jsx(xr,{size:16});case"completed":return i.jsx(Je,{size:16});default:return null}},y=f=>{const x=new Date,E=new Date(f).getTime()-x.getTime();return Math.ceil(E/(1e3*60*60*24))};return i.jsxs("div",{className:"maintenance-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Mantenimiento de Vehículos"}),i.jsxs("p",{children:[t.length," registros de mantenimiento"]})]})}),o&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(lu,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Programados"}),i.jsx("p",{className:"stat-value",children:o.scheduled})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(xr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"En Progreso"}),i.jsx("p",{className:"stat-value",children:o.inProgress})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Completados"}),i.jsx("p",{className:"stat-value",children:o.completed})]})]}),i.jsxs("div",{className:"stat-card alert",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:i.jsx(Vn,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Próximos 30 días"}),i.jsx("p",{className:"stat-value",children:o.upcoming})]})]})]}),r.length>0&&i.jsxs("div",{className:"upcoming-section",children:[i.jsx("h2",{children:"⚠️ Próximos Servicios (30 días)"}),i.jsx("div",{className:"upcoming-list",children:r.map(f=>{const x=y(f.next_service_date);return i.jsxs("div",{className:`upcoming-card ${x<=7?"urgent":""}`,children:[i.jsxs("div",{className:"upcoming-header",children:[i.jsxs("span",{className:"vehicle-info",children:[f.vehicle_plate," - ",f.vehicle_brand," ",f.vehicle_model]}),i.jsx("span",{className:`days-badge ${x<=7?"urgent":""}`,children:x<=0?"Vencido":`${x} días`})]}),i.jsxs("div",{className:"upcoming-body",children:[i.jsx("p",{children:f.description}),i.jsx("span",{className:"type-badge",children:_(f.type)})]})]},f.id)})})]}),i.jsx("div",{className:"filters",children:i.jsxs("select",{value:h,onChange:f=>g(f.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"scheduled",children:"Programados"}),i.jsx("option",{value:"in_progress",children:"En Progreso"}),i.jsx("option",{value:"completed",children:"Completados"})]})}),i.jsxs("div",{className:"records-list",children:[i.jsx("h2",{children:"Historial de Mantenimientos"}),c?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Xk,{size:48}),i.jsx("h3",{children:"No hay registros"}),i.jsx("p",{children:"No se encontraron mantenimientos con los filtros seleccionados"})]}):i.jsx("div",{className:"table-container",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fecha"}),i.jsx("th",{children:"Vehículo"}),i.jsx("th",{children:"Tipo"}),i.jsx("th",{children:"Descripción"}),i.jsx("th",{children:"Costo"}),i.jsx("th",{children:"Proveedor"}),i.jsx("th",{children:"Próximo Servicio"}),i.jsx("th",{children:"Estado"})]})}),i.jsx("tbody",{children:t.map(f=>i.jsxs("tr",{children:[i.jsx("td",{children:new Date(f.created_at).toLocaleDateString("es-CR")}),i.jsxs("td",{children:[i.jsx("strong",{children:f.vehicle_plate}),i.jsx("br",{}),i.jsxs("small",{children:[f.vehicle_brand," ",f.vehicle_model]})]}),i.jsx("td",{children:_(f.type)}),i.jsx("td",{children:f.description}),i.jsx("td",{children:f.cost?`₡${f.cost.toLocaleString()}`:"-"}),i.jsx("td",{children:f.provider||"-"}),i.jsx("td",{children:f.next_service_date?new Date(f.next_service_date).toLocaleDateString("es-CR"):"-"}),i.jsx("td",{children:i.jsxs("span",{className:`status-badge status-${f.status}`,children:[D(f.status),P(f.status)]})})]},f.id))})]})})]}),i.jsx("style",{children:`
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
            `})]})},PE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState([]),[o,l]=I.useState(null),[c,u]=I.useState(!0),[h,g]=I.useState("");I.useEffect(()=>{e&&(m(),w(),j())},[e,h]);const m=async()=>{if(e)try{u(!0);let f="http://localhost:3001/api/documents";h&&(f+=`?status=${h}`);const T=await(await fetch(f,{headers:{"X-Tenant-ID":e.id}})).json();n(T.documents||[])}catch(y){console.error("Error:",y)}finally{u(!1)}},w=async()=>{if(e)try{const x=await(await fetch("http://localhost:3001/api/documents/expiring?days=30",{headers:{"X-Tenant-ID":e.id}})).json();s(x.documents||[])}catch(y){console.error("Error:",y)}},j=async()=>{if(e)try{const x=await(await fetch("http://localhost:3001/api/documents/stats",{headers:{"X-Tenant-ID":e.id}})).json();l(x)}catch(y){console.error("Error:",y)}},_=y=>{switch(y){case"valid":return i.jsx(Je,{size:16});case"expiring_soon":return i.jsx(Vn,{size:16});case"expired":return i.jsx(vr,{size:16});default:return null}},P=y=>({valid:"Válido",expiring_soon:"Por Vencer",expired:"Vencido"})[y]||y,D=y=>{const f=new Date,T=new Date(y).getTime()-f.getTime();return Math.ceil(T/(1e3*60*60*24))};return i.jsxs("div",{className:"documents-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Gestión de Documentos"}),i.jsxs("p",{children:[t.length," documentos registrados"]})]})}),o&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Válidos"}),i.jsx("p",{className:"stat-value",children:o.valid})]})]}),i.jsxs("div",{className:"stat-card alert",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(Vn,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Por Vencer"}),i.jsx("p",{className:"stat-value",children:o.expiringSoon})]})]}),i.jsxs("div",{className:"stat-card alert-danger",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:i.jsx(vr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Vencidos"}),i.jsx("p",{className:"stat-value",children:o.expired})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Jr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Total"}),i.jsx("p",{className:"stat-value",children:o.total})]})]})]}),r.length>0&&i.jsxs("div",{className:"expiring-section",children:[i.jsx("h2",{children:"⚠️ Documentos por Vencer (30 días)"}),i.jsx("div",{className:"expiring-list",children:r.map(y=>{const f=D(y.expiration_date),x=f<0;return i.jsxs("div",{className:`expiring-card ${x?"expired":""}`,children:[i.jsxs("div",{className:"expiring-header",children:[i.jsxs("div",{className:"doc-info",children:[i.jsx("strong",{children:y.document_type}),i.jsxs("span",{className:"entity-info",children:[y.entity_type==="courier"?"👤":"🚗"," ",y.entity_identifier]})]}),i.jsx("span",{className:`days-badge ${x?"expired":f<=7?"urgent":""}`,children:x?"VENCIDO":`${f} días`})]}),i.jsxs("div",{className:"expiring-body",children:[y.document_number&&i.jsxs("p",{children:["Número: ",y.document_number]}),i.jsxs("p",{children:["Vence: ",new Date(y.expiration_date).toLocaleDateString("es-CR")]})]})]},y.id)})})]}),i.jsx("div",{className:"filters",children:i.jsxs("select",{value:h,onChange:y=>g(y.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"valid",children:"Válidos"}),i.jsx("option",{value:"expiring_soon",children:"Por Vencer"}),i.jsx("option",{value:"expired",children:"Vencidos"})]})}),i.jsxs("div",{className:"documents-list",children:[i.jsx("h2",{children:"Todos los Documentos"}),c?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Jr,{size:48}),i.jsx("h3",{children:"No hay documentos"}),i.jsx("p",{children:"No se encontraron documentos con los filtros seleccionados"})]}):i.jsx("div",{className:"table-container",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Tipo"}),i.jsx("th",{children:"Entidad"}),i.jsx("th",{children:"Número"}),i.jsx("th",{children:"Emisión"}),i.jsx("th",{children:"Vencimiento"}),i.jsx("th",{children:"Estado"}),i.jsx("th",{children:"Notas"})]})}),i.jsx("tbody",{children:t.map(y=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:y.document_type})}),i.jsxs("td",{children:[i.jsx("span",{className:"entity-badge",children:y.entity_type==="courier"?"👤 Courier":"🚗 Vehículo"}),i.jsx("br",{}),i.jsx("small",{children:y.entity_identifier})]}),i.jsx("td",{children:y.document_number||"-"}),i.jsx("td",{children:y.issue_date?new Date(y.issue_date).toLocaleDateString("es-CR"):"-"}),i.jsx("td",{children:y.expiration_date?i.jsx("span",{className:y.status==="expired"?"expired-date":"",children:new Date(y.expiration_date).toLocaleDateString("es-CR")}):"-"}),i.jsx("td",{children:i.jsxs("span",{className:`status-badge status-${y.status}`,children:[_(y.status),P(y.status)]})}),i.jsx("td",{children:y.notes||"-"})]},y.id))})]})})]}),i.jsx("style",{children:`
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
            `})]})},RE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(null),[o,l]=I.useState([]),[c,u]=I.useState(!0),[h,g]=I.useState(""),[m,w]=I.useState(""),[j,_]=I.useState(null);I.useEffect(()=>{e&&(P(),D(),y())},[e,h]);const P=async()=>{if(e)try{u(!0);let O="http://localhost:3001/api/warehouse/locations";h&&(O+=`?zone=${h}`);const b=await(await fetch(O,{headers:{"X-Tenant-ID":e.id}})).json();n(b.locations||[])}catch(E){console.error("Error:",E)}finally{u(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/stats",{headers:{"X-Tenant-ID":e.id}})).json();s(k)}catch(E){console.error("Error:",E)}},y=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/warehouse/zones",{headers:{"X-Tenant-ID":e.id}})).json();l(k.zones||[])}catch(E){console.error("Error:",E)}},f=async()=>{if(!(!e||!m.trim()))try{const O=await fetch(`http://localhost:3001/api/warehouse/search/${m}`,{headers:{"X-Tenant-ID":e.id}});if(O.ok){const k=await O.json();_(k)}else _({error:"Paquete no encontrado en almacén"})}catch(E){console.error("Error:",E),_({error:"Error buscando paquete"})}},x=E=>{switch(E){case"active":return"#10b981";case"full":return"#ef4444";case"inactive":return"#6b7280";default:return"#6b7280"}},T=E=>E>=90?"#ef4444":E>=70?"#f59e0b":"#10b981";return i.jsxs("div",{className:"warehouse-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Gestión de Almacén"}),i.jsxs("p",{children:[t.length," ubicaciones registradas"]})]})}),r&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Mk,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Ubicaciones Activas"}),i.jsxs("p",{className:"stat-value",children:[r.activeLocations," / ",r.totalLocations]})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(nt,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Paquetes en Almacén"}),i.jsx("p",{className:"stat-value",children:r.totalPackages})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(nc,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Capacidad Total"}),i.jsx("p",{className:"stat-value",children:r.totalCapacity})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:`${T(r.utilizationRate)}20`,color:T(r.utilizationRate)},children:i.jsx(ks,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Utilización"}),i.jsxs("p",{className:"stat-value",children:[r.utilizationRate,"%"]})]})]})]}),i.jsxs("div",{className:"search-section",children:[i.jsx("h2",{children:"Búsqueda Rápida"}),i.jsxs("div",{className:"search-box",children:[i.jsx("input",{type:"text",placeholder:"Buscar por tracking number...",value:m,onChange:E=>w(E.target.value),onKeyPress:E=>E.key==="Enter"&&f()}),i.jsxs("button",{onClick:f,children:[i.jsx(Os,{size:20}),"Buscar"]})]}),j&&i.jsx("div",{className:`search-result ${j.error?"error":"success"}`,children:j.error?i.jsx("p",{children:j.error}):i.jsxs("div",{children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Paquete encontrado:"})," ",j.tracking_number]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Ubicación:"})," ",j.location_code," - ",j.location_name]})]})})]}),i.jsx("div",{className:"filters",children:i.jsxs("select",{value:h,onChange:E=>g(E.target.value),children:[i.jsx("option",{value:"",children:"Todas las zonas"}),o.map(E=>i.jsx("option",{value:E,children:E},E))]})}),i.jsxs("div",{className:"locations-section",children:[i.jsx("h2",{children:"Mapa de Ubicaciones"}),c?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(nc,{size:48}),i.jsx("h3",{children:"No hay ubicaciones"}),i.jsx("p",{children:"No se encontraron ubicaciones con los filtros seleccionados"})]}):i.jsx("div",{className:"locations-grid",children:t.map(E=>{const O=E.capacity?E.current_packages/E.capacity*100:0;return i.jsxs("div",{className:"location-card",children:[i.jsxs("div",{className:"location-header",children:[i.jsxs("div",{className:"location-code",style:{color:x(E.status)},children:[i.jsx(nc,{size:20}),E.code]}),i.jsx("span",{className:`status-badge status-${E.status}`,children:E.status==="active"?"Activo":E.status==="full"?"Lleno":"Inactivo"})]}),i.jsxs("div",{className:"location-body",children:[i.jsx("p",{className:"location-name",children:E.name||"-"}),E.zone&&i.jsxs("p",{className:"location-zone",children:["Zona: ",E.zone]}),i.jsxs("div",{className:"capacity-info",children:[i.jsx("div",{className:"capacity-bar",children:i.jsx("div",{className:"capacity-fill",style:{width:`${O}%`,backgroundColor:T(O)}})}),i.jsxs("p",{className:"capacity-text",children:[E.current_packages," / ",E.capacity||0," paquetes",i.jsxs("span",{className:"utilization",children:["(",O.toFixed(0),"%)"]})]})]})]})]},E.id)})})]}),i.jsx("style",{children:`
                .warehouse-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .search-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .search-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .search-box { display: flex; gap: 12px; }
                .search-box input { flex: 1; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; }
                .search-box button { padding: 12px 24px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; }
                .search-box button:hover { background: #1d4ed8; }
                .search-result { margin-top: 16px; padding: 16px; border-radius: 8px; }
                .search-result.success { background: #d1fae5; color: #065f46; }
                .search-result.error { background: #fee2e2; color: #991b1b; }
                .search-result p { margin: 4px 0; }
                
                .filters { margin-bottom: 24px; }
                .filters select { padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; background: white; }
                
                .locations-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .locations-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .locations-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
                .location-card { background: #f9fafb; border-radius: 12px; padding: 16px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .location-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .location-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
                .location-code { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; }
                .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-active { background: #d1fae5; color: #065f46; }
                .status-badge.status-full { background: #fee2e2; color: #991b1b; }
                .status-badge.status-inactive { background: #f3f4f6; color: #6b7280; }
                
                .location-body { }
                .location-name { font-size: 14px; color: #374151; margin: 0 0 4px 0; }
                .location-zone { font-size: 13px; color: #6b7280; margin: 0 0 12px 0; }
                
                .capacity-info { }
                .capacity-bar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
                .capacity-fill { height: 100%; transition: width 0.3s; }
                .capacity-text { font-size: 13px; color: #374151; margin: 0; display: flex; justify-content: space-between; }
                .utilization { color: #6b7280; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},AE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState([]),[o,l]=I.useState(null),[c,u]=I.useState(!0),[h,g]=I.useState(""),[m,w]=I.useState(!1),[j,_]=I.useState(null);I.useEffect(()=>{e&&(P(),D(),y())},[e]);const P=async()=>{if(e)try{u(!0);const k=await(await fetch("http://localhost:3001/api/arrivals",{headers:{"X-Tenant-ID":e.id}})).json();n(k.arrivals||[])}catch(E){console.error("Error:",E)}finally{u(!1)}},D=async()=>{if(e)try{const k=await(await fetch("http://localhost:3001/api/arrivals/today",{headers:{"X-Tenant-ID":e.id}})).json();s(k.arrivals||[])}catch(E){console.error("Error:",E)}},y=async()=>{if(e)try{const E="http://localhost:3001",O=new Date().toISOString().split("T")[0],b=await(await fetch(`${E}/api/arrivals/stats?date=${O}`,{headers:{"X-Tenant-ID":e.id}})).json();l(b)}catch(E){console.error("Error:",E)}},f=async()=>{if(!(!e||!h.trim()))try{w(!0),_(null);const O=await fetch("http://localhost:3001/api/arrivals",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({trackingNumber:h,condition:"good"})});if(O.ok)_({type:"success",text:`Paquete ${h} registrado exitosamente`}),g(""),P(),D(),y();else{const k=await O.json();_({type:"error",text:k.error||"Error registrando llegada"})}}catch(E){console.error("Error:",E),_({type:"error",text:"Error registrando llegada"})}finally{w(!1)}},x=E=>{switch(E){case"good":return i.jsx(Je,{size:16});case"damaged":return i.jsx(Vn,{size:16});case"incomplete":return i.jsx(vr,{size:16});default:return null}},T=E=>({good:"Bueno",damaged:"Dañado",incomplete:"Incompleto"})[E]||E;return i.jsxs("div",{className:"arrivals-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Registro de Llegadas"}),i.jsxs("p",{children:[r.length," llegadas hoy"]})]})}),o&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(nt,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Total Hoy"}),i.jsx("p",{className:"stat-value",children:o.total})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"En Buen Estado"}),i.jsx("p",{className:"stat-value",children:o.good})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(Vn,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Dañados"}),i.jsx("p",{className:"stat-value",children:o.damaged})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#dc2626"},children:i.jsx(vr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Incompletos"}),i.jsx("p",{className:"stat-value",children:o.incomplete})]})]})]}),i.jsxs("div",{className:"register-section",children:[i.jsx("h2",{children:"Registrar Llegada"}),i.jsxs("div",{className:"register-box",children:[i.jsx("div",{className:"scan-icon",children:i.jsx(Wk,{size:32})}),i.jsx("input",{type:"text",placeholder:"Escanear o ingresar tracking number...",value:h,onChange:E=>g(E.target.value),onKeyPress:E=>E.key==="Enter"&&f(),disabled:m,autoFocus:!0}),i.jsx("button",{onClick:f,disabled:m||!h.trim(),children:m?"Registrando...":"Registrar"})]}),j&&i.jsx("div",{className:`message ${j.type}`,children:j.text})]}),i.jsxs("div",{className:"today-section",children:[i.jsxs("h2",{children:["Llegadas de Hoy (",r.length,")"]}),r.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(nt,{size:48}),i.jsx("p",{children:"No hay llegadas registradas hoy"})]}):i.jsx("div",{className:"arrivals-grid",children:r.map(E=>i.jsxs("div",{className:"arrival-card",children:[i.jsxs("div",{className:"arrival-header",children:[i.jsx("span",{className:"tracking",children:E.tracking_number}),i.jsxs("span",{className:`condition-badge condition-${E.condition_status}`,children:[x(E.condition_status),T(E.condition_status)]})]}),i.jsxs("div",{className:"arrival-body",children:[i.jsxs("p",{children:[i.jsx("strong",{children:"De:"})," ",E.sender_name||"-"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Para:"})," ",E.receiver_name||"-"]}),i.jsx("p",{className:"time",children:new Date(E.arrived_at).toLocaleTimeString("es-CR")})]})]},E.id))})]}),i.jsxs("div",{className:"history-section",children:[i.jsx("h2",{children:"Historial de Llegadas"}),c?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(nt,{size:48}),i.jsx("p",{children:"No hay llegadas registradas"})]}):i.jsx("div",{className:"table-container",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Fecha/Hora"}),i.jsx("th",{children:"Tracking"}),i.jsx("th",{children:"Remitente"}),i.jsx("th",{children:"Destinatario"}),i.jsx("th",{children:"Condición"}),i.jsx("th",{children:"Notas"})]})}),i.jsx("tbody",{children:t.map(E=>i.jsxs("tr",{children:[i.jsx("td",{children:new Date(E.arrived_at).toLocaleString("es-CR")}),i.jsx("td",{children:i.jsx("strong",{children:E.tracking_number})}),i.jsx("td",{children:E.sender_name||"-"}),i.jsx("td",{children:E.receiver_name||"-"}),i.jsx("td",{children:i.jsxs("span",{className:`condition-badge condition-${E.condition_status}`,children:[x(E.condition_status),T(E.condition_status)]})}),i.jsx("td",{children:E.notes||"-"})]},E.id))})]})})]}),i.jsx("style",{children:`
                .arrivals-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
                .page-header { margin-bottom: 24px; }
                .page-header h1 { font-size: 28px; font-weight: 700; color: #1f2937; margin: 0 0 4px 0; }
                .page-header p { color: #6b7280; margin: 0; }
                
                .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 24px; }
                .stat-card { background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; gap: 16px; }
                .stat-icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .stat-content { flex: 1; }
                .stat-label { font-size: 13px; color: #6b7280; margin: 0 0 4px 0; }
                .stat-value { font-size: 24px; font-weight: 700; color: #1f2937; margin: 0; }
                
                .register-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .register-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 16px 0; }
                .register-box { display: flex; align-items: center; gap: 12px; }
                .scan-icon { color: #2563eb; display: flex; align-items: center; }
                .register-box input { flex: 1; padding: 12px 16px; border: 2px solid #d1d5db; border-radius: 8px; font-size: 16px; }
                .register-box input:focus { outline: none; border-color: #2563eb; }
                .register-box button { padding: 12px 32px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; }
                .register-box button:hover:not(:disabled) { background: #1d4ed8; }
                .register-box button:disabled { background: #9ca3af; cursor: not-allowed; }
                .message { margin-top: 12px; padding: 12px 16px; border-radius: 8px; font-size: 14px; }
                .message.success { background: #d1fae5; color: #065f46; }
                .message.error { background: #fee2e2; color: #991b1b; }
                
                .today-section, .history-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
                .today-section h2, .history-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .arrivals-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
                .arrival-card { background: #f9fafb; border-radius: 12px; padding: 16px; border: 2px solid #e5e7eb; }
                .arrival-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
                .tracking { font-size: 16px; font-weight: 700; color: #1f2937; }
                .condition-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .condition-badge.condition-good { background: #d1fae5; color: #065f46; }
                .condition-badge.condition-damaged { background: #fef3c7; color: #92400e; }
                .condition-badge.condition-incomplete { background: #fee2e2; color: #991b1b; }
                .arrival-body p { margin: 4px 0; font-size: 14px; color: #374151; }
                .time { color: #6b7280; font-size: 13px; }
                
                .table-container { overflow-x: auto; }
                table { width: 100%; border-collapse: collapse; }
                th { background: #f9fafb; padding: 12px 16px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 1px solid #e5e7eb; }
                td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
                tbody tr:hover { background: #f9fafb; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state p { margin: 0; }
            `})]})},DE=()=>{const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(null),[o,l]=I.useState(!0),[c,u]=I.useState("");I.useEffect(()=>{e&&(h(),g())},[e,c]);const h=async()=>{if(e)try{l(!0);let _="http://localhost:3001/api/manifests";c&&(_+=`?status=${c}`);const D=await(await fetch(_,{headers:{"X-Tenant-ID":e.id}})).json();n(D.manifests||[])}catch(j){console.error("Error:",j)}finally{l(!1)}},g=async()=>{if(e)try{const P=await(await fetch("http://localhost:3001/api/manifests/stats",{headers:{"X-Tenant-ID":e.id}})).json();s(P)}catch(j){console.error("Error:",j)}},m=j=>{switch(j){case"draft":return i.jsx(xr,{size:16});case"active":return i.jsx(Hn,{size:16});case"completed":return i.jsx(Je,{size:16});default:return null}},w=j=>({draft:"Borrador",active:"Activo",completed:"Completado"})[j]||j;return i.jsxs("div",{className:"manifests-page",children:[i.jsx("div",{className:"page-header",children:i.jsxs("div",{children:[i.jsx("h1",{children:"Manifiestos de Carga"}),i.jsxs("p",{children:[t.length," manifiestos registrados"]})]})}),r&&i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Jr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Total"}),i.jsx("p",{className:"stat-value",children:r.total})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#d97706"},children:i.jsx(xr,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Borradores"}),i.jsx("p",{className:"stat-value",children:r.draft})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#2563eb"},children:i.jsx(Hn,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Activos"}),i.jsx("p",{className:"stat-value",children:r.active})]})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("div",{className:"stat-icon",style:{background:"#d1fae5",color:"#059669"},children:i.jsx(Je,{size:24})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("p",{className:"stat-label",children:"Completados"}),i.jsx("p",{className:"stat-value",children:r.completed})]})]})]}),i.jsx("div",{className:"filters",children:i.jsxs("select",{value:c,onChange:j=>u(j.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"draft",children:"Borradores"}),i.jsx("option",{value:"active",children:"Activos"}),i.jsx("option",{value:"completed",children:"Completados"})]})}),i.jsxs("div",{className:"manifests-section",children:[i.jsx("h2",{children:"Manifiestos"}),o?i.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx(Jr,{size:48}),i.jsx("h3",{children:"No hay manifiestos"}),i.jsx("p",{children:"No se encontraron manifiestos con los filtros seleccionados"})]}):i.jsx("div",{className:"manifests-grid",children:t.map(j=>i.jsxs("div",{className:"manifest-card",children:[i.jsxs("div",{className:"manifest-header",children:[i.jsxs("div",{className:"manifest-number",children:[i.jsx(Jr,{size:20}),j.manifest_number]}),i.jsxs("span",{className:`status-badge status-${j.status}`,children:[m(j.status),w(j.status)]})]}),i.jsxs("div",{className:"manifest-body",children:[j.route&&i.jsxs("p",{className:"route",children:[i.jsx("strong",{children:"Ruta:"})," ",j.route]}),j.courier_name&&i.jsxs("p",{children:[i.jsx("strong",{children:"Courier:"})," ",j.courier_name]}),j.date&&i.jsxs("p",{children:[i.jsx("strong",{children:"Fecha:"})," ",new Date(j.date).toLocaleDateString("es-CR")]}),i.jsxs("div",{className:"packages-count",children:[i.jsx("strong",{children:j.total_packages})," paquetes"]})]})]},j.id))})]}),i.jsx("style",{children:`
                .manifests-page { padding: 24px; max-width: 1400px; margin: 0 auto; }
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
                
                .manifests-section { background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .manifests-section h2 { font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 20px 0; }
                
                .manifests-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
                .manifest-card { background: #f9fafb; border-radius: 12px; padding: 20px; border: 2px solid #e5e7eb; transition: transform 0.2s; }
                .manifest-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                
                .manifest-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb; }
                .manifest-number { display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #1f2937; }
                .status-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
                .status-badge.status-draft { background: #fef3c7; color: #92400e; }
                .status-badge.status-active { background: #dbeafe; color: #1e40af; }
                .status-badge.status-completed { background: #d1fae5; color: #065f46; }
                
                .manifest-body { }
                .manifest-body p { margin: 8px 0; font-size: 14px; color: #374151; }
                .route { color: #2563eb; font-weight: 600; }
                .packages-count { margin-top: 12px; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
                .packages-count strong { color: #2563eb; font-size: 20px; }
                
                .loading, .empty-state { padding: 60px 20px; text-align: center; color: #6b7280; }
                .empty-state { display: flex; flex-direction: column; align-items: center; gap: 16px; }
                .empty-state h3 { margin: 0; color: #1f2937; }
                .empty-state p { margin: 0; }
            `})]})},LE=()=>i.jsxs("div",{className:"loading-page",children:[i.jsxs("div",{className:"loading-container",children:[i.jsx("div",{className:"loading-spinner"}),i.jsx("h2",{children:"Cargando..."}),i.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),i.jsx("style",{children:`
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
      `})]}),zE=({message:e})=>i.jsxs("div",{className:"error-page",children:[i.jsxs("div",{className:"error-container",children:[i.jsx("div",{className:"error-icon",children:i.jsx(Vn,{size:64})}),i.jsx("h1",{children:"No se pudo cargar"}),i.jsx("p",{className:"error-message",children:e}),i.jsxs("div",{className:"error-actions",children:[i.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),i.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),i.jsx("style",{children:`
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
      `})]}),OE=()=>{var C,A;const{tenant:e}=we(),[t,n]=I.useState([]),[r,s]=I.useState(!0),[o,l]=I.useState(""),[c,u]=I.useState(!1),[h,g]=I.useState(null),[m,w]=I.useState(null),[j,_]=I.useState(""),[P,D]=I.useState(""),y=((C=e==null?void 0:e.plan)==null?void 0:C.id)==="enterprise",f=((A=e==null?void 0:e.branding)==null?void 0:A.primary_color)||"#3b82f6";I.useEffect(()=>{x()},[]);const x=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(R){console.error("Error fetching domains:",R)}finally{s(!1)}},T=async R=>{if(R.preventDefault(),!!o.trim()){u(!0),_("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:o})}),xe=await S.json();if(!S.ok)throw new Error(xe.error||"Error agregando dominio");n([...t,xe.domain]),g(xe.dns_instructions),l(""),D("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){_(S.message)}finally{u(!1)}}},E=async R=>{w(R),_("");try{const xe=await(await fetch(`/api/domains/${R}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();xe.verified?(D("DNS verificado. El SSL se está configurando."),x()):_(xe.message)}catch{_("Error verificando DNS")}finally{w(null)}},O=async R=>{try{await fetch(`/api/domains/${R}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),D("Dominio establecido como principal"),x()}catch{_("Error estableciendo dominio principal")}},k=async R=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${R}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==R)),D("Dominio eliminado")}catch{_("Error eliminando dominio")}},b=R=>{navigator.clipboard.writeText(R),D("Copiado al portapapeles"),setTimeout(()=>D(""),2e3)},N=R=>{switch(R){case"active":return i.jsxs("span",{className:"badge success",children:[i.jsx(Je,{size:14})," Activo"]});case"provisioning":return i.jsxs("span",{className:"badge warning",children:[i.jsx(xr,{size:14})," Configurando SSL"]});case"pending":return i.jsxs("span",{className:"badge pending",children:[i.jsx(mr,{size:14})," Pendiente verificación"]});case"failed":return i.jsxs("span",{className:"badge danger",children:[i.jsx(mr,{size:14})," Error"]});default:return null}};return y?i.jsxs("div",{className:"white-label-settings",children:[i.jsxs("header",{className:"page-header",children:[i.jsx("h1",{children:"Configuración White Label"}),i.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),j&&i.jsx("div",{className:"alert error",children:j}),P&&i.jsx("div",{className:"alert success",children:P}),i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h3",{children:[i.jsx(ai,{size:20})," Dominios"]})}),i.jsxs("div",{className:"card-content",children:[i.jsx("div",{className:"domains-list",children:t.map(R=>i.jsxs("div",{className:"domain-row",children:[i.jsxs("div",{className:"domain-info",children:[i.jsxs("div",{className:"domain-name",children:[R.is_primary&&i.jsx(du,{size:16,className:"primary-star"}),R.domain,R.domain_type==="subdomain"&&i.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),N(R.ssl_status)]}),i.jsxs("div",{className:"domain-actions",children:[R.ssl_status==="pending"&&i.jsx("button",{onClick:()=>E(R.id),disabled:m===R.id,className:"btn-action",children:m===R.id?i.jsx(Vk,{size:16,className:"spin"}):"Verificar DNS"}),R.ssl_status==="active"&&!R.is_primary&&i.jsxs("button",{onClick:()=>O(R.id),className:"btn-action",children:[i.jsx(du,{size:16})," Hacer principal"]}),R.domain_type==="custom"&&i.jsx("button",{onClick:()=>k(R.id),className:"btn-delete",children:i.jsx(wv,{size:16})}),i.jsx("a",{href:`https://${R.domain}`,target:"_blank",className:"btn-action",children:i.jsx(Ad,{size:16})})]})]},R.id))}),i.jsxs("form",{onSubmit:T,className:"add-domain-form",children:[i.jsx("input",{type:"text",placeholder:"miempresa.com",value:o,onChange:R=>l(R.target.value)}),i.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[i.jsx(li,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&i.jsxs("div",{className:"card instructions-card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Configuración DNS"})}),i.jsxs("div",{className:"card-content",children:[i.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),i.jsxs("div",{className:"dns-record",children:[i.jsxs("div",{className:"dns-field",children:[i.jsx("label",{children:"Tipo"}),i.jsx("span",{children:h.type})]}),i.jsxs("div",{className:"dns-field",children:[i.jsx("label",{children:"Nombre"}),i.jsx("span",{children:h.name}),i.jsx("button",{onClick:()=>b(h.name),className:"copy-btn",children:i.jsx($f,{size:14})})]}),i.jsxs("div",{className:"dns-field wide",children:[i.jsx("label",{children:"Valor"}),i.jsx("span",{children:h.value}),i.jsx("button",{onClick:()=>b(h.value),className:"copy-btn",children:i.jsx($f,{size:14})})]})]}),i.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),i.jsx("style",{children:Wf(f)})]}):i.jsxs("div",{className:"white-label-settings",children:[i.jsxs("div",{className:"upgrade-notice",children:[i.jsx(ai,{size:48}),i.jsx("h2",{children:"White Label disponible en Enterprise"}),i.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),i.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),i.jsx("style",{children:Wf(f)})]})},Wf=e=>`
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
`,ME=()=>{const[e,t]=I.useState(null),[n,r]=I.useState(!0);I.useEffect(()=>{s()},[]);const s=async()=>{try{const u=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(u)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return i.jsx("div",{className:"loading",children:"Cargando dashboard..."});const o=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return i.jsxs("div",{className:"super-admin-dashboard",children:[i.jsxs("header",{className:"dashboard-header",children:[i.jsxs("div",{children:[i.jsx("h1",{children:"Super Admin Dashboard"}),i.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),i.jsx("div",{className:"header-actions",children:i.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[i.jsx(li,{size:20}),"Nuevo Tenant"]})})]}),i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-card primary",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(_a,{size:28})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),i.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),i.jsxs("div",{className:"stat-card success",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(Ms,{size:28})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),i.jsx("div",{className:"stat-label",children:"Activas"}),i.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),i.jsxs("div",{className:"stat-card warning",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(js,{size:28})}),i.jsxs("div",{className:"stat-content",children:[i.jsx("div",{className:"stat-value",children:o((e==null?void 0:e.summary.mrr)||0)}),i.jsx("div",{className:"stat-label",children:"MRR"}),i.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),i.jsxs("div",{className:"stat-card danger",children:[i.jsx("div",{className:"stat-icon",children:i.jsx(Kk,{size:28})}),i.jsxs("div",{className:"stat-content",children:[i.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),i.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),i.jsxs("div",{className:"content-grid",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("h3",{children:"Empresas Recientes"}),i.jsx(De,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),i.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>i.jsxs("div",{className:"tenant-row",children:[i.jsx("div",{className:"tenant-avatar",children:c.logo_url?i.jsx("img",{src:c.logo_url,alt:c.name}):i.jsx("span",{children:c.name.charAt(0)})}),i.jsxs("div",{className:"tenant-info",children:[i.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),i.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),i.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),i.jsx("div",{className:"tenant-plan",children:c.plan_id}),i.jsx(De,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:i.jsx(xv,{size:18})})]},c.id))})]}),i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("h3",{children:"Ingresos Mensuales"}),i.jsx(ks,{size:20,className:"success"})]}),i.jsx("div",{className:"card-content chart-container",children:i.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,u)=>i.jsxs("div",{className:"chart-bar",children:[i.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),i.jsx("span",{className:"bar-label",children:c.month}),i.jsx("span",{className:"bar-value",children:o(c.revenue)})]},u))})})]}),i.jsxs("div",{className:"card small",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Por Plan"})}),i.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,u)=>i.jsxs("div",{className:"distribution-row",children:[i.jsx("span",{className:"dist-label",children:c.plan_id}),i.jsx("div",{className:"dist-bar",children:i.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][u%4]}})}),i.jsx("span",{className:"dist-count",children:c.count})]},u))})]}),i.jsxs("div",{className:"card small",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Acciones Rápidas"})}),i.jsxs("div",{className:"card-content quick-actions",children:[i.jsxs(De,{to:"/super-admin/tenants",className:"quick-action",children:[i.jsx(_a,{size:24}),i.jsx("span",{children:"Gestionar Empresas"})]}),i.jsxs(De,{to:"/super-admin/subscriptions",className:"quick-action",children:[i.jsx(js,{size:24}),i.jsx("span",{children:"Ver Suscripciones"})]}),i.jsxs(De,{to:"/super-admin/plans",className:"quick-action",children:[i.jsx(ks,{size:24}),i.jsx("span",{children:"Configurar Planes"})]})]})]})]}),i.jsx("style",{children:`
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
      `})]})},UE=()=>{const e=kt(),[t,n]=I.useState([]),[r,s]=I.useState({page:1,limit:20,total:0,pages:0}),[o,l]=I.useState(!0),[c,u]=I.useState(""),[h,g]=I.useState(""),[m,w]=I.useState(null);I.useEffect(()=>{j()},[r.page,h]);const j=async()=>{try{l(!0);const x=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),E=await(await fetch(`/api/super-admin/tenants?${x}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(E.tenants),s(E.pagination)}catch(x){console.error("Error fetching tenants:",x)}finally{l(!1)}},_=x=>{x.preventDefault(),s({...r,page:1}),j()},P=async x=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${x}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),j()}catch(T){console.error("Error suspending tenant:",T)}},D=async x=>{try{await fetch(`/api/super-admin/tenants/${x}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),j()}catch(T){console.error("Error activating tenant:",T)}},y=x=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[x]||"bg-blue"}`,f=x=>new Date(x).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return i.jsxs("div",{className:"tenants-management",children:[i.jsxs("header",{className:"page-header",children:[i.jsxs("div",{className:"header-left",children:[i.jsx(De,{to:"/super-admin",className:"back-link",children:i.jsx(cu,{size:20})}),i.jsxs("div",{children:[i.jsx("h1",{children:"Gestión de Empresas"}),i.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),i.jsxs(De,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[i.jsx(li,{size:20}),"Nueva Empresa"]})]}),i.jsxs("div",{className:"filters-bar",children:[i.jsxs("form",{onSubmit:_,className:"search-box",children:[i.jsx(Os,{size:20}),i.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:x=>u(x.target.value)})]}),i.jsxs("div",{className:"filter-group",children:[i.jsx(zk,{size:18}),i.jsxs("select",{value:h,onChange:x=>g(x.target.value),children:[i.jsx("option",{value:"",children:"Todos los estados"}),i.jsx("option",{value:"active",children:"Activos"}),i.jsx("option",{value:"trial",children:"En prueba"}),i.jsx("option",{value:"suspended",children:"Suspendidos"}),i.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),i.jsx("div",{className:"table-container",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Empresa"}),i.jsx("th",{children:"Subdominio"}),i.jsx("th",{children:"Plan"}),i.jsx("th",{children:"Estado"}),i.jsx("th",{children:"Creado"}),i.jsx("th",{children:"Acciones"})]})}),i.jsx("tbody",{children:o?i.jsx("tr",{children:i.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?i.jsx("tr",{children:i.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(x=>{var T,E,O;return i.jsxs("tr",{children:[i.jsx("td",{children:i.jsxs("div",{className:"tenant-cell",children:[i.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((T=x.branding)==null?void 0:T.primary_color)||"#3b82f6"},children:(E=x.branding)!=null&&E.logo_url?i.jsx("img",{src:x.branding.logo_url,alt:""}):x.name.charAt(0)}),i.jsxs("div",{children:[i.jsx("div",{className:"tenant-name",children:((O=x.branding)==null?void 0:O.company_name)||x.name}),i.jsxs("div",{className:"tenant-id",children:[x.id.slice(0,8),"..."]})]})]})}),i.jsx("td",{children:i.jsxs("a",{href:`https://${x.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[x.subdomain,i.jsx(Ad,{size:14})]})}),i.jsx("td",{children:i.jsx("span",{className:"plan-badge",children:x.plan_id})}),i.jsx("td",{children:i.jsx("span",{className:y(x.status),children:x.status})}),i.jsx("td",{children:f(x.created_at)}),i.jsx("td",{children:i.jsxs("div",{className:"actions-cell",children:[i.jsx("button",{onClick:()=>e(`/super-admin/tenants/${x.id}`),className:"action-btn",title:"Ver detalles",children:i.jsx(xv,{size:18})}),x.status==="active"?i.jsx("button",{onClick:()=>P(x.id),className:"action-btn danger",title:"Suspender",children:i.jsx(vv,{size:18})}):x.status==="suspended"&&i.jsx("button",{onClick:()=>D(x.id),className:"action-btn success",title:"Activar",children:i.jsx(yv,{size:18})})]})})]},x.id)})})]})}),r.pages>1&&i.jsxs("div",{className:"pagination",children:[i.jsxs("button",{onClick:()=>s({...r,page:r.page-1}),disabled:r.page===1,children:[i.jsx(cu,{size:18}),"Anterior"]}),i.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),i.jsxs("button",{onClick:()=>s({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",i.jsx(Rk,{size:18})]})]}),i.jsx("style",{children:`
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
      `})]})},FE=()=>{const{id:e}=cx();kt();const[t,n]=I.useState(null),[r,s]=I.useState(!0),[o,l]=I.useState(!1),[c,u]=I.useState({name:"",plan_id:""});I.useEffect(()=>{h()},[e]);const h=async()=>{try{const _=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(_),u({name:_.name,plan_id:_.plan_id})}catch(j){console.error("Error fetching tenant:",j)}finally{s(!1)}},g=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(j){console.error("Error updating tenant:",j)}},m=async j=>{if(confirm(j==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${j}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(P){console.error("Error changing status:",P)}},w=j=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[j]||"#3b82f6";return r?i.jsx("div",{className:"loading-page",children:"Cargando..."}):t?i.jsxs("div",{className:"tenant-detail",children:[i.jsxs("header",{className:"page-header",children:[i.jsxs("div",{className:"header-left",children:[i.jsx(De,{to:"/super-admin/tenants",className:"back-link",children:i.jsx(cu,{size:20})}),i.jsxs("div",{className:"tenant-header",children:[i.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?i.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),i.jsxs("div",{children:[i.jsx("h1",{children:t.branding.company_name||t.name}),i.jsxs("div",{className:"tenant-meta",children:[i.jsx("span",{className:"status-dot",style:{backgroundColor:w(t.status)}}),i.jsx("span",{children:t.status}),i.jsx("span",{className:"separator",children:"•"}),i.jsx("span",{children:t.plan_id})]})]})]})]}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[i.jsx(Ad,{size:18}),"Visitar"]}),t.status==="active"?i.jsxs("button",{onClick:()=>m("suspend"),className:"btn btn-danger",children:[i.jsx(vv,{size:18}),"Suspender"]}):t.status==="suspended"&&i.jsxs("button",{onClick:()=>m("activate"),className:"btn btn-success",children:[i.jsx(yv,{size:18}),"Activar"]})]})]}),i.jsxs("div",{className:"detail-content",children:[i.jsxs("div",{className:"card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("h3",{children:"Información General"}),o?i.jsxs("button",{onClick:g,className:"btn btn-primary btn-sm",children:[i.jsx(bv,{size:16}),"Guardar"]}):i.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:i.jsx(qa,{size:18})})]}),i.jsxs("div",{className:"card-content info-grid",children:[i.jsxs("div",{className:"info-item",children:[i.jsx(_a,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Nombre"}),o?i.jsx("input",{value:c.name,onChange:j=>u({...c,name:j.target.value})}):i.jsx("span",{children:t.name})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx(ai,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Subdominio"}),i.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx(Dd,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Email"}),i.jsx("span",{children:t.branding.contact_email||"-"})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx($k,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Teléfono"}),i.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx(lu,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Creado"}),i.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),i.jsxs("div",{className:"info-item",children:[i.jsx(Ak,{size:18}),i.jsxs("div",{children:[i.jsx("label",{children:"Plan"}),o?i.jsxs("select",{value:c.plan_id,onChange:j=>u({...c,plan_id:j.target.value}),children:[i.jsx("option",{value:"trial",children:"Trial"}),i.jsx("option",{value:"starter",children:"Starter"}),i.jsx("option",{value:"professional",children:"Professional"}),i.jsx("option",{value:"enterprise",children:"Enterprise"})]}):i.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Uso del Servicio"})}),i.jsxs("div",{className:"card-content usage-grid",children:[i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx(Ms,{size:24})}),i.jsx("div",{className:"usage-value",children:t.usage.users}),i.jsx("div",{className:"usage-label",children:"Usuarios"})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx(nt,{size:24})}),i.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),i.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx(Ok,{size:24})}),i.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),i.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Dominios"})}),i.jsx("div",{className:"card-content",children:t.domains.length===0?i.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((j,_)=>i.jsxs("div",{className:"domain-row",children:[i.jsx(ai,{size:16}),i.jsx("span",{children:j.domain}),j.is_primary&&i.jsx("span",{className:"badge primary",children:"Principal"}),i.jsxs("span",{className:`badge ${j.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",j.ssl_status]})]},_))})]}),t.subscription&&i.jsxs("div",{className:"card",children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{children:"Suscripción"})}),i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"subscription-info",children:[i.jsxs("div",{children:[i.jsx("label",{children:"Estado"}),i.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),i.jsxs("div",{children:[i.jsx("label",{children:"Próximo cobro"}),i.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),i.jsx("style",{children:`
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
      `})]}):i.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},$E=()=>{const{tenant:e,loading:t,error:n}=we(),r=un(),o=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&o?i.jsx("div",{className:"app",children:i.jsxs(Gp,{children:[i.jsx(ee,{path:"/",element:i.jsx(Qk,{})}),i.jsx(ee,{path:"/register",element:i.jsx(Zk,{})}),i.jsx(ee,{path:"/onboarding",element:i.jsx(eE,{})}),i.jsx(ee,{path:"*",element:i.jsx(Ao,{to:"/",replace:!0})})]})}):t?i.jsx(LE,{}):n&&!l?i.jsx(zE,{message:n}):i.jsx(Tk,{children:i.jsx("div",{className:"app",children:i.jsxs(Gp,{children:[i.jsx(ee,{path:"/login",element:i.jsx(tE,{})}),i.jsx(ee,{path:"/dashboard",element:i.jsx(ve,{children:i.jsx(nE,{})})}),i.jsx(ee,{path:"/packages",element:i.jsx(ve,{children:i.jsx(rE,{})})}),i.jsx(ee,{path:"/packages/new",element:i.jsx(ve,{children:i.jsx(iE,{})})}),i.jsx(ee,{path:"/packages/:id",element:i.jsx(ve,{children:i.jsx(jE,{})})}),i.jsx(ee,{path:"/clients",element:i.jsx(ve,{children:i.jsx(kE,{})})}),i.jsx(ee,{path:"/couriers",element:i.jsx(ve,{children:i.jsx(EE,{})})}),i.jsx(ee,{path:"/rates",element:i.jsx(ve,{children:i.jsx(NE,{})})}),i.jsx(ee,{path:"/incidents",element:i.jsx(ve,{children:i.jsx(SE,{})})}),i.jsx(ee,{path:"/fuel",element:i.jsx(ve,{children:i.jsx(CE,{})})}),i.jsx(ee,{path:"/vehicles",element:i.jsx(ve,{children:i.jsx(TE,{})})}),i.jsx(ee,{path:"/maintenance",element:i.jsx(ve,{children:i.jsx(IE,{})})}),i.jsx(ee,{path:"/documents",element:i.jsx(ve,{children:i.jsx(PE,{})})}),i.jsx(ee,{path:"/warehouse",element:i.jsx(ve,{children:i.jsx(RE,{})})}),i.jsx(ee,{path:"/arrivals",element:i.jsx(ve,{children:i.jsx(AE,{})})}),i.jsx(ee,{path:"/manifests",element:i.jsx(ve,{children:i.jsx(DE,{})})}),i.jsx(ee,{path:"/account/white-label",element:i.jsx(ve,{children:i.jsx(OE,{})})}),i.jsx(ee,{path:"/super-admin",element:i.jsx(ve,{children:i.jsx(ME,{})})}),i.jsx(ee,{path:"/super-admin/tenants",element:i.jsx(ve,{children:i.jsx(UE,{})})}),i.jsx(ee,{path:"/super-admin/tenants/:id",element:i.jsx(ve,{children:i.jsx(FE,{})})}),i.jsx(ee,{path:"/",element:i.jsx(Ao,{to:"/dashboard",replace:!0})}),i.jsx(ee,{path:"*",element:i.jsx(Ao,{to:"/dashboard",replace:!0})})]})})})};rc.createRoot(document.getElementById("root")).render(i.jsx(bu.StrictMode,{children:i.jsx(A2,{children:i.jsx(F2,{children:i.jsx($E,{})})})}));
//# sourceMappingURL=index-C16fRKHq.js.map
