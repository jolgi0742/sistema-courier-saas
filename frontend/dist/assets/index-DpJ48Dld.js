function Zy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var e0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uf={exports:{}},ma={},Ff={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),Nh=Symbol.iterator;function d0(e){return e===null||typeof e!="object"?null:(e=Nh&&e[Nh]||e["@@iterator"],typeof e=="function"?e:null)}var $f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Vf={};function ti(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||$f}ti.prototype.isReactComponent={};ti.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ti.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hf(){}Hf.prototype=ti.prototype;function lu(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||$f}var cu=lu.prototype=new Hf;cu.constructor=lu;Bf(cu,ti.prototype);cu.isPureReactComponent=!0;var Th=Array.isArray,Wf=Object.prototype.hasOwnProperty,uu={current:null},qf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Wf.call(t,r)&&!qf.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:vs,type:e,key:s,ref:l,props:i,_owner:uu.current}}function h0(e,t){return{$$typeof:vs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function du(e){return typeof e=="object"&&e!==null&&e.$$typeof===vs}function p0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ch=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p0(""+e.key):t.toString(36)}function ho(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case vs:case t0:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+dl(l,0):r,Th(i)?(n="",e!=null&&(n=e.replace(Ch,"$&/")+"/"),ho(i,t,n,"",function(h){return h})):i!=null&&(du(i)&&(i=h0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ch,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Th(e))for(var c=0;c<e.length;c++){s=e[c];var u=r+dl(s,c);l+=ho(s,t,n,u,i)}else if(u=d0(e),typeof u=="function")for(e=u.call(e),c=0;!(s=e.next()).done;)s=s.value,u=r+dl(s,c++),l+=ho(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ws(e,t,n){if(e==null)return e;var r=[],i=0;return ho(e,r,"","",function(s){return t.call(n,s,i++)}),r}function f0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},po={transition:null},g0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:po,ReactCurrentOwner:uu};function Gf(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Ws,forEach:function(e,t,n){Ws(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ws(e,function(){t++}),t},toArray:function(e){return Ws(e,function(t){return t})||[]},only:function(e){if(!du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ti;q.Fragment=n0;q.Profiler=i0;q.PureComponent=lu;q.StrictMode=r0;q.Suspense=l0;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;q.act=Gf;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bf({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=uu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)Wf.call(t,u)&&!qf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&c!==void 0?c[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:vs,type:e.type,key:i,ref:s,props:r,_owner:l}};q.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s0,_context:e},e.Consumer=e};q.createElement=Kf;q.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:a0,render:e}};q.isValidElement=du;q.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:f0}};q.memo=function(e,t){return{$$typeof:c0,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=po.transition;po.transition={};try{e()}finally{po.transition=t}};q.unstable_act=Gf;q.useCallback=function(e,t){return Fe.current.useCallback(e,t)};q.useContext=function(e){return Fe.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};q.useEffect=function(e,t){return Fe.current.useEffect(e,t)};q.useId=function(){return Fe.current.useId()};q.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Fe.current.useMemo(e,t)};q.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};q.useRef=function(e){return Fe.current.useRef(e)};q.useState=function(e){return Fe.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return Fe.current.useTransition()};q.version="18.3.1";Ff.exports=q;var O=Ff.exports;const hu=au(O),m0=Zy({__proto__:null,default:hu},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=O,y0=Symbol.for("react.element"),x0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,_0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b0={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)w0.call(t,r)&&!b0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y0,type:e,key:s,ref:l,props:i,_owner:_0.current}}ma.Fragment=x0;ma.jsx=Xf;ma.jsxs=Xf;Uf.exports=ma;var a=Uf.exports,Gl={},Yf={exports:{}},et={},Jf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var W=F.length;F.push(H);e:for(;0<W;){var oe=W-1>>>1,Q=F[oe];if(0<i(Q,H))F[oe]=H,F[W]=Q,W=oe;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],W=F.pop();if(W!==H){F[0]=W;e:for(var oe=0,Q=F.length,de=Q>>>1;oe<de;){var Mt=2*(oe+1)-1,Ut=F[Mt],Ft=Mt+1,$t=F[Ft];if(0>i(Ut,W))Ft<Q&&0>i($t,Ut)?(F[oe]=$t,F[Ft]=W,oe=Ft):(F[oe]=Ut,F[Mt]=W,oe=Mt);else if(Ft<Q&&0>i($t,W))F[oe]=$t,F[Ft]=W,oe=Ft;else break e}}return H}function i(F,H){var W=F.sortIndex-H.sortIndex;return W!==0?W:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var u=[],h=[],x=1,v=null,w=3,E=!1,N=!1,P=!1,A=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var H=n(h);H!==null;){if(H.callback===null)r(h);else if(H.startTime<=F)r(h),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(h)}}function C(F){if(P=!1,y(F),!N)if(n(u)!==null)N=!0,ai(L);else{var H=n(h);H!==null&&zt(C,H.startTime-F)}}function L(F,H){N=!1,P&&(P=!1,_(g),g=-1),E=!0;var W=w;try{for(y(H),v=n(u);v!==null&&(!(v.expirationTime>H)||F&&!I());){var oe=v.callback;if(typeof oe=="function"){v.callback=null,w=v.priorityLevel;var Q=oe(v.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?v.callback=Q:v===n(u)&&r(u),y(H)}else r(u);v=n(u)}if(v!==null)var de=!0;else{var Mt=n(h);Mt!==null&&zt(C,Mt.startTime-H),de=!1}return de}finally{v=null,w=W,E=!1}}var z=!1,k=null,g=-1,b=5,j=-1;function I(){return!(e.unstable_now()-j<b)}function T(){if(k!==null){var F=e.unstable_now();j=F;var H=!0;try{H=k(!0,F)}finally{H?S():(z=!1,k=null)}}else z=!1}var S;if(typeof m=="function")S=function(){m(T)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Kn=me.port2;me.port1.onmessage=T,S=function(){Kn.postMessage(null)}}else S=function(){A(T,0)};function ai(F){k=F,z||(z=!0,S())}function zt(F,H){g=A(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){N||E||(N=!0,ai(L))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var W=w;w=H;try{return F()}finally{w=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=w;w=F;try{return H()}finally{w=W}},e.unstable_scheduleCallback=function(F,H,W){var oe=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?oe+W:oe):W=oe,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=W+Q,F={id:x++,callback:H,priorityLevel:F,startTime:W,expirationTime:Q,sortIndex:-1},W>oe?(F.sortIndex=W,t(h,F),n(u)===null&&F===n(h)&&(P?(_(g),g=-1):P=!0,zt(C,W-oe))):(F.sortIndex=Q,t(u,F),N||E||(N=!0,ai(L))),F},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(F){var H=w;return function(){var W=w;w=H;try{return F.apply(this,arguments)}finally{w=W}}}})(Qf);Jf.exports=Qf;var k0=Jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=O,Ze=k0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zf=new Set,Gi={};function fr(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Gi[e]=t,e=0;e<t.length;e++)Zf.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ih={},Ph={};function j0(e){return Xl.call(Ph,e)?!0:Xl.call(Ih,e)?!1:S0.test(e)?Ph[e]=!0:(Ih[e]=!0,!1)}function N0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,t,n,r){if(t===null||typeof t>"u"||N0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function fu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pu,fu);Se[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pu,fu);Se[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pu,fu);Se[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function gu(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T0(t,n,i,r)&&(n=null),r||i===null?j0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),kr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),mu=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),Rh=Symbol.iterator;function _i(e){return e===null||typeof e!="object"?null:(e=Rh&&e[Rh]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,hl;function Ii(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var pl=!1;function fl(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=c);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ii(e):""}function C0(e){switch(e.tag){case 5:return Ii(e.type);case 16:return Ii("Lazy");case 13:return Ii("Suspense");case 19:return Ii("SuspenseList");case 0:case 2:case 15:return e=fl(e.type,!1),e;case 11:return e=fl(e.type.render,!1),e;case 1:return e=fl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Er:return"Fragment";case kr:return"Portal";case Yl:return"Profiler";case mu:return"StrictMode";case Jl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tg:return(e.displayName||"Context")+".Consumer";case eg:return(e._context.displayName||"Context")+".Provider";case vu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yu:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function I0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function rg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P0(e){var t=rg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ks(e){e._valueTracker||(e._valueTracker=P0(e))}function ig(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=rg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ec(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sg(e,t){t=t.checked,t!=null&&gu(e,"checked",t,!1)}function tc(e,t){sg(e,t);var n=Un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nc(e,t.type,n):t.hasOwnProperty("defaultValue")&&nc(e,t.type,Un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nc(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pi=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Pi(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Un(n)}}function og(e,t){var n=Un(t.value),r=Un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ag(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ag(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,lg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R0=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){R0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Li[t]=Li[e]})});function cg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Li.hasOwnProperty(e)&&Li[e]?(""+t).trim():t+"px"}function ug(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var A0=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sc(e,t){if(t){if(A0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ac=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lc=null,zr=null,Mr=null;function zh(e){if(e=ws(e)){if(typeof lc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=_a(t),lc(e.stateNode,e.type,t))}}function dg(e){zr?Mr?Mr.push(e):Mr=[e]:zr=e}function hg(){if(zr){var e=zr,t=Mr;if(Mr=zr=null,zh(e),t)for(e=0;e<t.length;e++)zh(t[e])}}function pg(e,t){return e(t)}function fg(){}var gl=!1;function gg(e,t,n){if(gl)return e(t,n);gl=!0;try{return pg(e,t,n)}finally{gl=!1,(zr!==null||Mr!==null)&&(fg(),hg())}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var cc=!1;if(en)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){cc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{cc=!1}function O0(e,t,n,r,i,s,l,c,u){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(x){this.onError(x)}}var zi=!1,Io=null,Po=!1,uc=null,D0={onError:function(e){zi=!0,Io=e}};function L0(e,t,n,r,i,s,l,c,u){zi=!1,Io=null,O0.apply(D0,arguments)}function z0(e,t,n,r,i,s,l,c,u){if(L0.apply(this,arguments),zi){if(zi){var h=Io;zi=!1,Io=null}else throw Error(M(198));Po||(Po=!0,uc=h)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Mh(e){if(gr(e)!==e)throw Error(M(188))}function M0(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mh(i),e;if(s===r)return Mh(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=s;break}if(c===r){l=!0,r=i,n=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===n){l=!0,n=s,r=i;break}if(c===r){l=!0,r=s,n=i;break}c=c.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function vg(e){return e=M0(e),e!==null?yg(e):null}function yg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yg(e);if(t!==null)return t;e=e.sibling}return null}var xg=Ze.unstable_scheduleCallback,Uh=Ze.unstable_cancelCallback,U0=Ze.unstable_shouldYield,F0=Ze.unstable_requestPaint,pe=Ze.unstable_now,$0=Ze.unstable_getCurrentPriorityLevel,wu=Ze.unstable_ImmediatePriority,wg=Ze.unstable_UserBlockingPriority,Ro=Ze.unstable_NormalPriority,B0=Ze.unstable_LowPriority,_g=Ze.unstable_IdlePriority,va=null,Nt=null;function V0(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:q0,H0=Math.log,W0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(H0(e)/W0|0)|0}var Xs=64,Ys=4194304;function Ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=Ri(c):(s&=l,s!==0&&(r=Ri(s)))}else l=n&~i,l!==0?r=Ri(l):s!==0&&(r=Ri(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-mt(t),i=1<<n,r|=e[n],t&=~i;return r}function K0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-mt(s),c=1<<l,u=i[l];u===-1?(!(c&n)||c&r)&&(i[l]=K0(c,t)):u<=t&&(e.expiredLanes|=c),s&=~c}}function dc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bg(){var e=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=n}function X0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function _u(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function kg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Eg,bu,Sg,jg,Ng,hc=!1,Js=[],Tn=null,Cn=null,In=null,Ji=new Map,Qi=new Map,yn=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function ki(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ws(t),t!==null&&bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J0(e,t,n,r,i){switch(t){case"focusin":return Tn=ki(Tn,e,t,n,r,i),!0;case"dragenter":return Cn=ki(Cn,e,t,n,r,i),!0;case"mouseover":return In=ki(In,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,ki(Ji.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,ki(Qi.get(s)||null,e,t,n,r,i)),!0}return!1}function Tg(e){var t=er(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=mg(n),t!==null){e.blockedOn=t,Ng(e.priority,function(){Sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return t=ws(n),t!==null&&bu(t),e.blockedOn=n,!1;t.shift()}return!0}function $h(e,t,n){fo(e)&&n.delete(t)}function Q0(){hc=!1,Tn!==null&&fo(Tn)&&(Tn=null),Cn!==null&&fo(Cn)&&(Cn=null),In!==null&&fo(In)&&(In=null),Ji.forEach($h),Qi.forEach($h)}function Ei(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Q0)))}function Zi(e){function t(i){return Ei(i,e)}if(0<Js.length){Ei(Js[0],e);for(var n=1;n<Js.length;n++){var r=Js[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&Ei(Tn,e),Cn!==null&&Ei(Cn,e),In!==null&&Ei(In,e),Ji.forEach(t),Qi.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&yn.shift()}var Ur=an.ReactCurrentBatchConfig,Oo=!0;function Z0(e,t,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=1,ku(e,t,n,r)}finally{J=i,Ur.transition=s}}function ex(e,t,n,r){var i=J,s=Ur.transition;Ur.transition=null;try{J=4,ku(e,t,n,r)}finally{J=i,Ur.transition=s}}function ku(e,t,n,r){if(Oo){var i=pc(e,t,n,r);if(i===null)jl(e,t,r,Do,n),Fh(e,r);else if(J0(i,e,t,n,r))r.stopPropagation();else if(Fh(e,r),t&4&&-1<Y0.indexOf(e)){for(;i!==null;){var s=ws(i);if(s!==null&&Eg(s),s=pc(e,t,n,r),s===null&&jl(e,t,r,Do,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var Do=null;function pc(e,t,n,r){if(Do=null,e=xu(r),e=er(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function Cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case wu:return 1;case wg:return 4;case Ro:case B0:return 16;case _g:return 536870912;default:return 16}default:return 16}}var En=null,Eu=null,go=null;function Ig(){if(go)return go;var e,t=Eu,n=t.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qs(){return!0}function Bh(){return!1}function tt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qs:Bh,this.isPropagationStopped=Bh,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),t}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=tt(ni),xs=ce({},ni,{view:0,detail:0}),tx=tt(xs),vl,yl,Si,ya=ce({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(vl=e.screenX-Si.screenX,yl=e.screenY-Si.screenY):yl=vl=0,Si=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),Vh=tt(ya),nx=ce({},ya,{dataTransfer:0}),rx=tt(nx),ix=ce({},xs,{relatedTarget:0}),xl=tt(ix),sx=ce({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=tt(sx),ax=ce({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lx=tt(ax),cx=ce({},ni,{data:0}),Hh=tt(cx),ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hx[e])?!!t[e]:!1}function ju(){return px}var fx=ce({},xs,{key:function(e){if(e.key){var t=ux[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gx=tt(fx),mx=ce({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=tt(mx),vx=ce({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),yx=tt(vx),xx=ce({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),wx=tt(xx),_x=ce({},ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=tt(_x),kx=[9,13,27,32],Nu=en&&"CompositionEvent"in window,Mi=null;en&&"documentMode"in document&&(Mi=document.documentMode);var Ex=en&&"TextEvent"in window&&!Mi,Pg=en&&(!Nu||Mi&&8<Mi&&11>=Mi),qh=" ",Kh=!1;function Rg(e,t){switch(e){case"keyup":return kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function Sx(e,t){switch(e){case"compositionend":return Ag(t);case"keypress":return t.which!==32?null:(Kh=!0,qh);case"textInput":return e=t.data,e===qh&&Kh?null:e;default:return null}}function jx(e,t){if(Sr)return e==="compositionend"||!Nu&&Rg(e,t)?(e=Ig(),go=Eu=En=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pg&&t.locale!=="ko"?null:t.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nx[e.type]:t==="textarea"}function Og(e,t,n,r){dg(r),t=Lo(t,"onChange"),0<t.length&&(n=new Su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ui=null,es=null;function Tx(e){Wg(e,0)}function xa(e){var t=Tr(e);if(ig(t))return e}function Cx(e,t){if(e==="change")return t}var Dg=!1;if(en){var wl;if(en){var _l="oninput"in document;if(!_l){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),_l=typeof Xh.oninput=="function"}wl=_l}else wl=!1;Dg=wl&&(!document.documentMode||9<document.documentMode)}function Yh(){Ui&&(Ui.detachEvent("onpropertychange",Lg),es=Ui=null)}function Lg(e){if(e.propertyName==="value"&&xa(es)){var t=[];Og(t,es,e,xu(e)),gg(Tx,t)}}function Ix(e,t,n){e==="focusin"?(Yh(),Ui=t,es=n,Ui.attachEvent("onpropertychange",Lg)):e==="focusout"&&Yh()}function Px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(es)}function Rx(e,t){if(e==="click")return xa(t)}function Ax(e,t){if(e==="input"||e==="change")return xa(t)}function Ox(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Ox;function ts(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xl.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function Jh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qh(e,t){var n=Jh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function zg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mg(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function Tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dx(e){var t=Mg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(r!==null&&Tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Qh(n,s);var l=Qh(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lx=en&&"documentMode"in document&&11>=document.documentMode,jr=null,fc=null,Fi=null,gc=!1;function Zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||jr==null||jr!==Co(r)||(r=jr,"selectionStart"in r&&Tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fi&&ts(Fi,r)||(Fi=r,r=Lo(fc,"onSelect"),0<r.length&&(t=new Su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},bl={},Ug={};en&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function wa(e){if(bl[e])return bl[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ug)return bl[e]=t[n];return e}var Fg=wa("animationend"),$g=wa("animationiteration"),Bg=wa("animationstart"),Vg=wa("transitionend"),Hg=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){Hg.set(e,t),fr(t,[e])}for(var kl=0;kl<ep.length;kl++){var El=ep[kl],zx=El.toLowerCase(),Mx=El[0].toUpperCase()+El.slice(1);Bn(zx,"on"+Mx)}Bn(Fg,"onAnimationEnd");Bn($g,"onAnimationIteration");Bn(Bg,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(Vg,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function tp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,z0(r,t,void 0,e),e.currentTarget=null}function Wg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==s&&i.isPropagationStopped())break e;tp(i,c,h),s=u}else for(l=0;l<r.length;l++){if(c=r[l],u=c.instance,h=c.currentTarget,c=c.listener,u!==s&&i.isPropagationStopped())break e;tp(i,c,h),s=u}}}if(Po)throw e=uc,Po=!1,uc=null,e}function re(e,t){var n=t[wc];n===void 0&&(n=t[wc]=new Set);var r=e+"__bubble";n.has(r)||(qg(t,e,2,!1),n.add(r))}function Sl(e,t,n){var r=0;t&&(r|=4),qg(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[eo]){e[eo]=!0,Zf.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||Sl(n,!1,e),Sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Sl("selectionchange",!1,t))}}function qg(e,t,n,r){switch(Cg(t)){case 1:var i=Z0;break;case 4:i=ex;break;default:i=ku}n=i.bind(null,t,n,e),i=void 0,!cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;c!==null;){if(l=er(c),l===null)return;if(u=l.tag,u===5||u===6){r=s=l;continue e}c=c.parentNode}}r=r.return}gg(function(){var h=s,x=xu(n),v=[];e:{var w=Hg.get(e);if(w!==void 0){var E=Su,N=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":E=gx;break;case"focusin":N="focus",E=xl;break;case"focusout":N="blur",E=xl;break;case"beforeblur":case"afterblur":E=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=yx;break;case Fg:case $g:case Bg:E=ox;break;case Vg:E=wx;break;case"scroll":E=tx;break;case"wheel":E=bx;break;case"copy":case"cut":case"paste":E=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Wh}var P=(t&4)!==0,A=!P&&e==="scroll",_=P?w!==null?w+"Capture":null:w;P=[];for(var m=h,y;m!==null;){y=m;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,_!==null&&(C=Yi(m,_),C!=null&&P.push(rs(m,C,y)))),A)break;m=m.return}0<P.length&&(w=new E(w,N,null,n,x),v.push({event:w,listeners:P}))}}if(!(t&7)){e:{if(w=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",w&&n!==ac&&(N=n.relatedTarget||n.fromElement)&&(er(N)||N[tn]))break e;if((E||w)&&(w=x.window===x?x:(w=x.ownerDocument)?w.defaultView||w.parentWindow:window,E?(N=n.relatedTarget||n.toElement,E=h,N=N?er(N):null,N!==null&&(A=gr(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=h),E!==N)){if(P=Vh,C="onMouseLeave",_="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(P=Wh,C="onPointerLeave",_="onPointerEnter",m="pointer"),A=E==null?w:Tr(E),y=N==null?w:Tr(N),w=new P(C,m+"leave",E,n,x),w.target=A,w.relatedTarget=y,C=null,er(x)===h&&(P=new P(_,m+"enter",N,n,x),P.target=y,P.relatedTarget=A,C=P),A=C,E&&N)t:{for(P=E,_=N,m=0,y=P;y;y=br(y))m++;for(y=0,C=_;C;C=br(C))y++;for(;0<m-y;)P=br(P),m--;for(;0<y-m;)_=br(_),y--;for(;m--;){if(P===_||_!==null&&P===_.alternate)break t;P=br(P),_=br(_)}P=null}else P=null;E!==null&&np(v,w,E,P,!1),N!==null&&A!==null&&np(v,A,N,P,!0)}}e:{if(w=h?Tr(h):window,E=w.nodeName&&w.nodeName.toLowerCase(),E==="select"||E==="input"&&w.type==="file")var L=Cx;else if(Gh(w))if(Dg)L=Ax;else{L=Px;var z=Ix}else(E=w.nodeName)&&E.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(L=Rx);if(L&&(L=L(e,h))){Og(v,L,n,x);break e}z&&z(e,w,h),e==="focusout"&&(z=w._wrapperState)&&z.controlled&&w.type==="number"&&nc(w,"number",w.value)}switch(z=h?Tr(h):window,e){case"focusin":(Gh(z)||z.contentEditable==="true")&&(jr=z,fc=h,Fi=null);break;case"focusout":Fi=fc=jr=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Zh(v,n,x);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":Zh(v,n,x)}var k;if(Nu)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Sr?Rg(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Pg&&n.locale!=="ko"&&(Sr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Sr&&(k=Ig()):(En=x,Eu="value"in En?En.value:En.textContent,Sr=!0)),z=Lo(h,g),0<z.length&&(g=new Hh(g,e,null,n,x),v.push({event:g,listeners:z}),k?g.data=k:(k=Ag(n),k!==null&&(g.data=k)))),(k=Ex?Sx(e,n):jx(e,n))&&(h=Lo(h,"onBeforeInput"),0<h.length&&(x=new Hh("onBeforeInput","beforeinput",null,n,x),v.push({event:x,listeners:h}),x.data=k))}Wg(v,t)})}function rs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yi(e,n),s!=null&&r.unshift(rs(e,s,i)),s=Yi(e,t),s!=null&&r.push(rs(e,s,i))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function np(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,i?(u=Yi(n,s),u!=null&&l.unshift(rs(n,u,c))):i||(u=Yi(n,s),u!=null&&l.push(rs(n,u,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Fx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function rp(e){return(typeof e=="string"?e:""+e).replace(Fx,`
`).replace($x,"")}function to(e,t,n){if(t=rp(t),rp(e)!==t&&n)throw Error(M(425))}function zo(){}var mc=null,vc=null;function yc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xc=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Vx=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(e){return ip.resolve(null).then(e).catch(Hx)}:xc;function Hx(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ri=Math.random().toString(36).slice(2),St="__reactFiber$"+ri,is="__reactProps$"+ri,tn="__reactContainer$"+ri,wc="__reactEvents$"+ri,Wx="__reactListeners$"+ri,qx="__reactHandles$"+ri;function er(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sp(e);e!==null;){if(n=e[St])return n;e=sp(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[St]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function _a(e){return e[is]||null}var _c=[],Cr=-1;function Vn(e){return{current:e}}function ie(e){0>Cr||(e.current=_c[Cr],_c[Cr]=null,Cr--)}function te(e,t){Cr++,_c[Cr]=e.current,e.current=t}var Fn={},Ae=Vn(Fn),qe=Vn(!1),sr=Fn;function qr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Mo(){ie(qe),ie(Ae)}function op(e,t,n){if(Ae.current!==Fn)throw Error(M(168));te(Ae,t),te(qe,n)}function Kg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,I0(e)||"Unknown",i));return ce({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,sr=Ae.current,te(Ae,e),te(qe,qe.current),!0}function ap(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Kg(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,ie(qe),ie(Ae),te(Ae,e)):ie(qe),te(qe,n)}var Wt=null,ba=!1,Tl=!1;function Gg(e){Wt===null?Wt=[e]:Wt.push(e)}function Kx(e){ba=!0,Gg(e)}function Hn(){if(!Tl&&Wt!==null){Tl=!0;var e=0,t=J;try{var n=Wt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,ba=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),xg(wu,Hn),i}finally{J=t,Tl=!1}}return null}var Ir=[],Pr=0,Fo=null,$o=0,rt=[],it=0,or=null,qt=1,Kt="";function Jn(e,t){Ir[Pr++]=$o,Ir[Pr++]=Fo,Fo=e,$o=t}function Xg(e,t,n){rt[it++]=qt,rt[it++]=Kt,rt[it++]=or,or=e;var r=qt;e=Kt;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,qt=1<<32-mt(t)+i|n<<i|r,Kt=s+e}else qt=1<<s|n<<i|r,Kt=e}function Cu(e){e.return!==null&&(Jn(e,1),Xg(e,1,0))}function Iu(e){for(;e===Fo;)Fo=Ir[--Pr],Ir[Pr]=null,$o=Ir[--Pr],Ir[Pr]=null;for(;e===or;)or=rt[--it],rt[it]=null,Kt=rt[--it],rt[it]=null,qt=rt[--it],rt[it]=null}var Qe=null,Je=null,se=!1,pt=null;function Yg(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function lp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Je=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Je=null,!0):!1;default:return!1}}function bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kc(e){if(se){var t=Je;if(t){var n=t;if(!lp(e,t)){if(bc(e))throw Error(M(418));t=Pn(n.nextSibling);var r=Qe;t&&lp(e,t)?Yg(r,n):(e.flags=e.flags&-4097|2,se=!1,Qe=e)}}else{if(bc(e))throw Error(M(418));e.flags=e.flags&-4097|2,se=!1,Qe=e}}}function cp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function no(e){if(e!==Qe)return!1;if(!se)return cp(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yc(e.type,e.memoizedProps)),t&&(t=Je)){if(bc(e))throw Jg(),Error(M(418));for(;t;)Yg(e,t),t=Pn(t.nextSibling)}if(cp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Qe?Pn(e.stateNode.nextSibling):null;return!0}function Jg(){for(var e=Je;e;)e=Pn(e.nextSibling)}function Kr(){Je=Qe=null,se=!1}function Pu(e){pt===null?pt=[e]:pt.push(e)}var Gx=an.ReactCurrentBatchConfig;function ji(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function up(e){var t=e._init;return t(e._payload)}function Qg(e){function t(_,m){if(e){var y=_.deletions;y===null?(_.deletions=[m],_.flags|=16):y.push(m)}}function n(_,m){if(!e)return null;for(;m!==null;)t(_,m),m=m.sibling;return null}function r(_,m){for(_=new Map;m!==null;)m.key!==null?_.set(m.key,m):_.set(m.index,m),m=m.sibling;return _}function i(_,m){return _=Dn(_,m),_.index=0,_.sibling=null,_}function s(_,m,y){return _.index=y,e?(y=_.alternate,y!==null?(y=y.index,y<m?(_.flags|=2,m):y):(_.flags|=2,m)):(_.flags|=1048576,m)}function l(_){return e&&_.alternate===null&&(_.flags|=2),_}function c(_,m,y,C){return m===null||m.tag!==6?(m=Dl(y,_.mode,C),m.return=_,m):(m=i(m,y),m.return=_,m)}function u(_,m,y,C){var L=y.type;return L===Er?x(_,m,y.props.children,C,y.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&up(L)===m.type)?(C=i(m,y.props),C.ref=ji(_,m,y),C.return=_,C):(C=ko(y.type,y.key,y.props,null,_.mode,C),C.ref=ji(_,m,y),C.return=_,C)}function h(_,m,y,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ll(y,_.mode,C),m.return=_,m):(m=i(m,y.children||[]),m.return=_,m)}function x(_,m,y,C,L){return m===null||m.tag!==7?(m=ir(y,_.mode,C,L),m.return=_,m):(m=i(m,y),m.return=_,m)}function v(_,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Dl(""+m,_.mode,y),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qs:return y=ko(m.type,m.key,m.props,null,_.mode,y),y.ref=ji(_,null,m),y.return=_,y;case kr:return m=Ll(m,_.mode,y),m.return=_,m;case mn:var C=m._init;return v(_,C(m._payload),y)}if(Pi(m)||_i(m))return m=ir(m,_.mode,y,null),m.return=_,m;ro(_,m)}return null}function w(_,m,y,C){var L=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:c(_,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qs:return y.key===L?u(_,m,y,C):null;case kr:return y.key===L?h(_,m,y,C):null;case mn:return L=y._init,w(_,m,L(y._payload),C)}if(Pi(y)||_i(y))return L!==null?null:x(_,m,y,C,null);ro(_,y)}return null}function E(_,m,y,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return _=_.get(y)||null,c(m,_,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case qs:return _=_.get(C.key===null?y:C.key)||null,u(m,_,C,L);case kr:return _=_.get(C.key===null?y:C.key)||null,h(m,_,C,L);case mn:var z=C._init;return E(_,m,y,z(C._payload),L)}if(Pi(C)||_i(C))return _=_.get(y)||null,x(m,_,C,L,null);ro(m,C)}return null}function N(_,m,y,C){for(var L=null,z=null,k=m,g=m=0,b=null;k!==null&&g<y.length;g++){k.index>g?(b=k,k=null):b=k.sibling;var j=w(_,k,y[g],C);if(j===null){k===null&&(k=b);break}e&&k&&j.alternate===null&&t(_,k),m=s(j,m,g),z===null?L=j:z.sibling=j,z=j,k=b}if(g===y.length)return n(_,k),se&&Jn(_,g),L;if(k===null){for(;g<y.length;g++)k=v(_,y[g],C),k!==null&&(m=s(k,m,g),z===null?L=k:z.sibling=k,z=k);return se&&Jn(_,g),L}for(k=r(_,k);g<y.length;g++)b=E(k,_,g,y[g],C),b!==null&&(e&&b.alternate!==null&&k.delete(b.key===null?g:b.key),m=s(b,m,g),z===null?L=b:z.sibling=b,z=b);return e&&k.forEach(function(I){return t(_,I)}),se&&Jn(_,g),L}function P(_,m,y,C){var L=_i(y);if(typeof L!="function")throw Error(M(150));if(y=L.call(y),y==null)throw Error(M(151));for(var z=L=null,k=m,g=m=0,b=null,j=y.next();k!==null&&!j.done;g++,j=y.next()){k.index>g?(b=k,k=null):b=k.sibling;var I=w(_,k,j.value,C);if(I===null){k===null&&(k=b);break}e&&k&&I.alternate===null&&t(_,k),m=s(I,m,g),z===null?L=I:z.sibling=I,z=I,k=b}if(j.done)return n(_,k),se&&Jn(_,g),L;if(k===null){for(;!j.done;g++,j=y.next())j=v(_,j.value,C),j!==null&&(m=s(j,m,g),z===null?L=j:z.sibling=j,z=j);return se&&Jn(_,g),L}for(k=r(_,k);!j.done;g++,j=y.next())j=E(k,_,g,j.value,C),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?g:j.key),m=s(j,m,g),z===null?L=j:z.sibling=j,z=j);return e&&k.forEach(function(T){return t(_,T)}),se&&Jn(_,g),L}function A(_,m,y,C){if(typeof y=="object"&&y!==null&&y.type===Er&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qs:e:{for(var L=y.key,z=m;z!==null;){if(z.key===L){if(L=y.type,L===Er){if(z.tag===7){n(_,z.sibling),m=i(z,y.props.children),m.return=_,_=m;break e}}else if(z.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&up(L)===z.type){n(_,z.sibling),m=i(z,y.props),m.ref=ji(_,z,y),m.return=_,_=m;break e}n(_,z);break}else t(_,z);z=z.sibling}y.type===Er?(m=ir(y.props.children,_.mode,C,y.key),m.return=_,_=m):(C=ko(y.type,y.key,y.props,null,_.mode,C),C.ref=ji(_,m,y),C.return=_,_=C)}return l(_);case kr:e:{for(z=y.key;m!==null;){if(m.key===z)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(_,m.sibling),m=i(m,y.children||[]),m.return=_,_=m;break e}else{n(_,m);break}else t(_,m);m=m.sibling}m=Ll(y,_.mode,C),m.return=_,_=m}return l(_);case mn:return z=y._init,A(_,m,z(y._payload),C)}if(Pi(y))return N(_,m,y,C);if(_i(y))return P(_,m,y,C);ro(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(_,m.sibling),m=i(m,y),m.return=_,_=m):(n(_,m),m=Dl(y,_.mode,C),m.return=_,_=m),l(_)):n(_,m)}return A}var Gr=Qg(!0),Zg=Qg(!1),Bo=Vn(null),Vo=null,Rr=null,Ru=null;function Au(){Ru=Rr=Vo=null}function Ou(e){var t=Bo.current;ie(Bo),e._currentValue=t}function Ec(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Vo=e,Ru=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Ru!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Vo===null)throw Error(M(308));Rr=e,Vo.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var tr=null;function Du(e){tr===null?tr=[e]:tr.push(e)}function em(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Du(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Du(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}function dp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var i=e.updateQueue;vn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,h=u.next;u.next=null,l===null?s=h:l.next=h,l=u;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==l&&(c===null?x.firstBaseUpdate=h:c.next=h,x.lastBaseUpdate=u))}if(s!==null){var v=i.baseState;l=0,x=h=u=null,c=s;do{var w=c.lane,E=c.eventTime;if((r&w)===w){x!==null&&(x=x.next={eventTime:E,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var N=e,P=c;switch(w=t,E=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){v=N.call(E,v,w);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,w=typeof N=="function"?N.call(E,v,w):N,w==null)break e;v=ce({},v,w);break e;case 2:vn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,w=i.effects,w===null?i.effects=[c]:w.push(c))}else E={eventTime:E,lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(h=x=E,u=v):x=x.next=E,l|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(x===null&&(u=v),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);lr|=l,e.lanes=l,e.memoizedState=v}}function hp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var _s={},Tt=Vn(_s),ss=Vn(_s),os=Vn(_s);function nr(e){if(e===_s)throw Error(M(174));return e}function zu(e,t){switch(te(os,t),te(ss,e),te(Tt,_s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ic(t,e)}ie(Tt),te(Tt,t)}function Xr(){ie(Tt),ie(ss),ie(os)}function nm(e){nr(os.current);var t=nr(Tt.current),n=ic(t,e.type);t!==n&&(te(ss,e),te(Tt,n))}function Mu(e){ss.current===e&&(ie(Tt),ie(ss))}var ae=Vn(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cl=[];function Uu(){for(var e=0;e<Cl.length;e++)Cl[e]._workInProgressVersionPrimary=null;Cl.length=0}var yo=an.ReactCurrentDispatcher,Il=an.ReactCurrentBatchConfig,ar=0,le=null,ve=null,we=null,qo=!1,$i=!1,as=0,Xx=0;function Ce(){throw Error(M(321))}function Fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function $u(e,t,n,r,i,s){if(ar=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?Zx:e1,e=n(r,i),$i){s=0;do{if($i=!1,as=0,25<=s)throw Error(M(301));s+=1,we=ve=null,t.updateQueue=null,yo.current=t1,e=n(r,i)}while($i)}if(yo.current=Ko,t=ve!==null&&ve.next!==null,ar=0,we=ve=le=null,qo=!1,t)throw Error(M(300));return e}function Bu(){var e=as!==0;return as=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function lt(){if(ve===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ve=e;else{if(e===null)throw Error(M(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function ls(e,t){return typeof t=="function"?t(e):t}function Pl(e){var t=lt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=l=null,u=null,h=s;do{var x=h.lane;if((ar&x)===x)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var v={lane:x,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=v,l=r):u=u.next=v,le.lanes|=x,lr|=x}h=h.next}while(h!==null&&h!==s);u===null?l=r:u.next=c,yt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,le.lanes|=s,lr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=lt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);yt(s,t.memoizedState)||(We=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function rm(){}function im(e,t){var n=le,r=lt(),i=t(),s=!yt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,Vu(am.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,cs(9,om.bind(null,n,r,i,t),void 0,null),_e===null)throw Error(M(349));ar&30||sm(n,t,i)}return i}function sm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function om(e,t,n,r){t.value=n,t.getSnapshot=r,lm(t)&&cm(e)}function am(e,t,n){return n(function(){lm(t)&&cm(e)})}function lm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function cm(e){var t=nn(e,1);t!==null&&vt(t,e,1,-1)}function pp(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t.queue=e,e=e.dispatch=Qx.bind(null,le,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function um(){return lt().memoizedState}function xo(e,t,n,r){var i=Et();le.flags|=e,i.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var i=lt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var l=ve.memoizedState;if(s=l.destroy,r!==null&&Fu(r,l.deps)){i.memoizedState=cs(t,n,s,r);return}}le.flags|=e,i.memoizedState=cs(1|t,n,s,r)}function fp(e,t){return xo(8390656,8,e,t)}function Vu(e,t){return ka(2048,8,e,t)}function dm(e,t){return ka(4,2,e,t)}function hm(e,t){return ka(4,4,e,t)}function pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fm(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,pm.bind(null,t,e),n)}function Hu(){}function gm(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mm(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vm(e,t,n){return ar&21?(yt(n,t)||(n=bg(),le.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function Yx(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{J=n,Il.transition=r}}function ym(){return lt().memoizedState}function Jx(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xm(e))wm(t,n);else if(n=em(e,t,n,r),n!==null){var i=Me();vt(n,e,r,i),_m(n,t,r)}}function Qx(e,t,n){var r=On(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xm(e))wm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,n);if(i.hasEagerState=!0,i.eagerState=c,yt(c,l)){var u=t.interleaved;u===null?(i.next=i,Du(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=em(e,t,i,r),n!==null&&(i=Me(),vt(n,e,r,i),_m(n,t,r))}}function xm(e){var t=e.alternate;return e===le||t!==null&&t===le}function wm(e,t){$i=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _m(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_u(e,n)}}var Ko={readContext:at,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Zx={readContext:at,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:fp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jx.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:pp,useDebugValue:Hu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=pp(!1),t=e[0];return e=Yx.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=Et();if(se){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),_e===null)throw Error(M(349));ar&30||sm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,fp(am.bind(null,r,s,e),[e]),r.flags|=2048,cs(9,om.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Et(),t=_e.identifierPrefix;if(se){var n=Kt,r=qt;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=as++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e1={readContext:at,useCallback:gm,useContext:at,useEffect:Vu,useImperativeHandle:fm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:mm,useReducer:Pl,useRef:um,useState:function(){return Pl(ls)},useDebugValue:Hu,useDeferredValue:function(e){var t=lt();return vm(t,ve.memoizedState,e)},useTransition:function(){var e=Pl(ls)[0],t=lt().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1},t1={readContext:at,useCallback:gm,useContext:at,useEffect:Vu,useImperativeHandle:fm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:mm,useReducer:Rl,useRef:um,useState:function(){return Rl(ls)},useDebugValue:Hu,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:vm(t,ve.memoizedState,e)},useTransition:function(){var e=Rl(ls)[0],t=lt().memoizedState;return[e,t]},useMutableSource:rm,useSyncExternalStore:im,useId:ym,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ea={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),i=On(e),s=Jt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(vt(t,e,i,r),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),i=On(e),s=Jt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(vt(t,e,i,r),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=On(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(vt(t,e,r,n),vo(t,e,r))}};function gp(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ts(n,r)||!ts(i,s):!0}function bm(e,t,n){var r=!1,i=Fn,s=t.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Ke(t)?sr:Ae.current,r=t.contextTypes,s=(r=r!=null)?qr(e,i):Fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ea,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function mp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ea.enqueueReplaceState(t,t.state,null)}function jc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Ke(t)?sr:Ae.current,i.context=qr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Sc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ea.enqueueReplaceState(i,i.state,null),Ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t){try{var n="",r=t;do n+=C0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Al(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function km(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,zc=r),Nc(e,t)},n}function Em(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nc(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function vp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m1.bind(null,e,t,n),t.then(e,e))}function yp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var r1=an.ReactCurrentOwner,We=!1;function Le(e,t,n,r){t.child=e===null?Zg(t,null,n,r):Gr(t,e.child,n,r)}function wp(e,t,n,r,i){n=n.render;var s=t.ref;return Fr(t,i),r=$u(e,t,n,r,s,i),n=Bu(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&n&&Cu(t),t.flags|=1,Le(e,t,r,i),t.child)}function _p(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Qu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Sm(e,t,s,r,i)):(e=ko(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(l,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Dn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Sm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ts(s,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Tc(e,t,n,r,i)}function jm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Or,Ye),Ye|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Or,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Or,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,te(Or,Ye),Ye|=r;return Le(e,t,i,n),t.child}function Nm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tc(e,t,n,r,i){var s=Ke(n)?sr:Ae.current;return s=qr(t,s),Fr(t,i),n=$u(e,t,n,r,s,i),r=Bu(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(se&&r&&Cu(t),t.flags|=1,Le(e,t,n,i),t.child)}function bp(e,t,n,r,i){if(Ke(n)){var s=!0;Uo(t)}else s=!1;if(Fr(t,i),t.stateNode===null)wo(e,t),bm(t,n,r),jc(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var u=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=at(h):(h=Ke(n)?sr:Ae.current,h=qr(t,h));var x=n.getDerivedStateFromProps,v=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||u!==h)&&mp(t,l,r,h),vn=!1;var w=t.memoizedState;l.state=w,Ho(t,r,l,i),u=t.memoizedState,c!==r||w!==u||qe.current||vn?(typeof x=="function"&&(Sc(t,n,x,r),u=t.memoizedState),(c=vn||gp(t,n,c,r,w,u,h))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tm(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:dt(t.type,c),l.props=h,v=t.pendingProps,w=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ke(n)?sr:Ae.current,u=qr(t,u));var E=n.getDerivedStateFromProps;(x=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==v||w!==u)&&mp(t,l,r,u),vn=!1,w=t.memoizedState,l.state=w,Ho(t,r,l,i);var N=t.memoizedState;c!==v||w!==N||qe.current||vn?(typeof E=="function"&&(Sc(t,n,E,r),N=t.memoizedState),(h=vn||gp(t,n,h,r,w,N,u)||!1)?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,N,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,N,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),l.props=r,l.state=N,l.context=u,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return Cc(e,t,n,r,s,i)}function Cc(e,t,n,r,i,s){Nm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&ap(t,n,!1),rn(e,t,s);r=t.stateNode,r1.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gr(t,e.child,null,s),t.child=Gr(t,null,c,s)):Le(e,t,c,s),t.memoizedState=r.state,i&&ap(t,n,!0),t.child}function Tm(e){var t=e.stateNode;t.pendingContext?op(e,t.pendingContext,t.pendingContext!==t.context):t.context&&op(e,t.context,!1),zu(e,t.containerInfo)}function kp(e,t,n,r,i){return Kr(),Pu(i),t.flags|=256,Le(e,t,n,r),t.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Pc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cm(e,t,n){var r=t.pendingProps,i=ae.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ae,i&1),e===null)return kc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Na(l,r,0,null),e=ir(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pc(n),t.memoizedState=Ic,e):Wu(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return i1(e,t,l,r,c,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Dn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Dn(c,s):(s=ir(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Pc(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ic,r}return s=e.child,e=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wu(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function io(e,t,n,r){return r!==null&&Pu(r),Gr(t,e.child,null,n),e=Wu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i1(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Al(Error(M(422))),io(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),s=ir(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Gr(t,e.child,null,l),t.child.memoizedState=Pc(l),t.memoizedState=Ic,s);if(!(t.mode&1))return io(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(M(419)),r=Al(s,r,void 0),io(e,t,l,r)}if(c=(l&e.childLanes)!==0,We||c){if(r=_e,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(e,i),vt(r,e,i,-1))}return Ju(),r=Al(Error(M(421))),io(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=v1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Je=Pn(i.nextSibling),Qe=t,se=!0,pt=null,e!==null&&(rt[it++]=qt,rt[it++]=Kt,rt[it++]=or,qt=e.id,Kt=e.overflow,or=t),t=Wu(t,r.children),t.flags|=4096,t)}function Ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ec(e.return,t,n)}function Ol(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Im(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Le(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ep(e,n,t);else if(e.tag===19)Ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ol(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ol(t,!0,n,null,s);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s1(e,t,n){switch(t.tag){case 3:Tm(t),Kr();break;case 5:nm(t);break;case 1:Ke(t.type)&&Uo(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(Bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Cm(e,t,n):(te(ae,ae.current&1),e=rn(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Im(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,jm(e,t,n)}return rn(e,t,n)}var Pm,Rc,Rm,Am;Pm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rc=function(){};Rm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nr(Tt.current);var s=null;switch(n){case"input":i=ec(e,i),r=ec(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=rc(e,i),r=rc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zo)}sc(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Gi.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&c[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Gi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&re("scroll",e),s||c===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};Am=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ni(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o1(e,t,n){var r=t.pendingProps;switch(Iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Ke(t.type)&&Mo(),Ie(t),null;case 3:return r=t.stateNode,Xr(),ie(qe),ie(Ae),Uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Fc(pt),pt=null))),Rc(e,t),Ie(t),null;case 5:Mu(t);var i=nr(os.current);if(n=t.type,e!==null&&t.stateNode!=null)Rm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ie(t),null}if(e=nr(Tt.current),no(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[St]=t,r[is]=s,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)re(Ai[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Ah(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Dh(r,s),re("invalid",r)}sc(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&to(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&to(r.textContent,c,e),i=["children",""+c]):Gi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Ks(r),Oh(r,s,!0);break;case"textarea":Ks(r),Lh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ag(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[is]=r,Pm(e,t,!1,!1),t.stateNode=e;e:{switch(l=oc(n,r),n){case"dialog":re("cancel",e),re("close",e),i=r;break;case"iframe":case"object":case"embed":re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)re(Ai[i],e);i=r;break;case"source":re("error",e),i=r;break;case"img":case"image":case"link":re("error",e),re("load",e),i=r;break;case"details":re("toggle",e),i=r;break;case"input":Ah(e,r),i=ec(e,r),re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),re("invalid",e);break;case"textarea":Dh(e,r),i=rc(e,r),re("invalid",e);break;default:i=r}sc(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var u=c[s];s==="style"?ug(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lg(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xi(e,u):typeof u=="number"&&Xi(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gi.hasOwnProperty(s)?u!=null&&s==="onScroll"&&re("scroll",e):u!=null&&gu(e,s,u,l))}switch(n){case"input":Ks(e),Oh(e,r,!1);break;case"textarea":Ks(e),Lh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Un(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Lr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Am(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=nr(os.current),nr(Tt.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(s=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ie(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&Je!==null&&t.mode&1&&!(t.flags&128))Jg(),Kr(),t.flags|=98560,s=!1;else if(s=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[St]=t}else Kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),s=!1}else pt!==null&&(Fc(pt),pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):Ju())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Xr(),Rc(e,t),e===null&&ns(t.stateNode.containerInfo),Ie(t),null;case 10:return Ou(t.type._context),Ie(t),null;case 17:return Ke(t.type)&&Mo(),Ie(t),null;case 19:if(ie(ae),s=t.memoizedState,s===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Ni(s,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Wo(e),l!==null){for(t.flags|=128,Ni(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}s.tail!==null&&pe()>Jr&&(t.flags|=128,r=!0,Ni(s,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!se)return Ie(t),null}else 2*pe()-s.renderingStartTime>Jr&&n!==1073741824&&(t.flags|=128,r=!0,Ni(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=pe(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Yu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function a1(e,t){switch(Iu(t),t.tag){case 1:return Ke(t.type)&&Mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),ie(qe),ie(Ae),Uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return Xr(),null;case 10:return Ou(t.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var so=!1,Pe=!1,l1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Ac(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Sp=!1;function c1(e,t){if(mc=Oo,e=Mg(),Tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,c=-1,u=-1,h=0,x=0,v=e,w=null;t:for(;;){for(var E;v!==n||i!==0&&v.nodeType!==3||(c=l+i),v!==s||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(E=v.firstChild)!==null;)w=v,v=E;for(;;){if(v===e)break t;if(w===n&&++h===i&&(c=l),w===s&&++x===r&&(u=l),(E=v.nextSibling)!==null)break;v=w,w=v.parentNode}v=E}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vc={focusedElem:e,selectionRange:n},Oo=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,A=N.memoizedState,_=t.stateNode,m=_.getSnapshotBeforeUpdate(t.elementType===t.type?P:dt(t.type,P),A);_.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){ue(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return N=Sp,Sp=!1,N}function Bi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ac(t,n,s)}i=i.next}while(i!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Om(e){var t=e.alternate;t!==null&&(e.alternate=null,Om(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[is],delete t[wc],delete t[Wx],delete t[qx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dm(e){return e.tag===5||e.tag===3||e.tag===4}function jp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zo));else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function Lc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lc(e,t,n),e=e.sibling;e!==null;)Lc(e,t,n),e=e.sibling}var ke=null,ht=!1;function fn(e,t,n){for(n=n.child;n!==null;)Lm(e,t,n),n=n.sibling}function Lm(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:Pe||Ar(n,t);case 6:var r=ke,i=ht;ke=null,fn(e,t,n),ke=r,ht=i,ke!==null&&(ht?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ht?(e=ke,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),Zi(e)):Nl(ke,n.stateNode));break;case 4:r=ke,i=ht,ke=n.stateNode.containerInfo,ht=!0,fn(e,t,n),ke=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ac(n,t,l),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Pe&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ue(n,t,c)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,fn(e,t,n),Pe=r):fn(e,t,n);break;default:fn(e,t,n)}}function Np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l1),t.forEach(function(r){var i=y1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:ke=c.stateNode,ht=!1;break e;case 3:ke=c.stateNode.containerInfo,ht=!0;break e;case 4:ke=c.stateNode.containerInfo,ht=!0;break e}c=c.return}if(ke===null)throw Error(M(160));Lm(s,l,i),ke=null,ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){ue(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zm(t,e),t=t.sibling}function zm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),bt(e),r&4){try{Bi(3,e,e.return),Sa(3,e)}catch(P){ue(e,e.return,P)}try{Bi(5,e,e.return)}catch(P){ue(e,e.return,P)}}break;case 1:ut(t,e),bt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(ut(t,e),bt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{Xi(i,"")}catch(P){ue(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,c=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&sg(i,s),oc(c,l);var h=oc(c,s);for(l=0;l<u.length;l+=2){var x=u[l],v=u[l+1];x==="style"?ug(i,v):x==="dangerouslySetInnerHTML"?lg(i,v):x==="children"?Xi(i,v):gu(i,x,v,h)}switch(c){case"input":tc(i,s);break;case"textarea":og(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Lr(i,!!s.multiple,E,!1):w!==!!s.multiple&&(s.defaultValue!=null?Lr(i,!!s.multiple,s.defaultValue,!0):Lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[is]=s}catch(P){ue(e,e.return,P)}}break;case 6:if(ut(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(P){ue(e,e.return,P)}}break;case 3:if(ut(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(P){ue(e,e.return,P)}break;case 4:ut(t,e),bt(e);break;case 13:ut(t,e),bt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gu=pe())),r&4&&Np(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(h=Pe)||x,ut(t,e),Pe=h):ut(t,e),bt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!x&&e.mode&1)for($=e,x=e.child;x!==null;){for(v=$=x;$!==null;){switch(w=$,E=w.child,w.tag){case 0:case 11:case 14:case 15:Bi(4,w,w.return);break;case 1:Ar(w,w.return);var N=w.stateNode;if(typeof N.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(P){ue(r,n,P)}}break;case 5:Ar(w,w.return);break;case 22:if(w.memoizedState!==null){Cp(v);continue}}E!==null?(E.return=w,$=E):Cp(v)}x=x.sibling}e:for(x=null,v=e;;){if(v.tag===5){if(x===null){x=v;try{i=v.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=cg("display",l))}catch(P){ue(e,e.return,P)}}}else if(v.tag===6){if(x===null)try{v.stateNode.nodeValue=h?"":v.memoizedProps}catch(P){ue(e,e.return,P)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;x===v&&(x=null),v=v.return}x===v&&(x=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ut(t,e),bt(e),r&4&&Np(e);break;case 21:break;default:ut(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xi(i,""),r.flags&=-33);var s=jp(e);Lc(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=jp(e);Dc(e,c,l);break;default:throw Error(M(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u1(e,t,n){$=e,Mm(e)}function Mm(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||so;if(!l){var c=i.alternate,u=c!==null&&c.memoizedState!==null||Pe;c=so;var h=Pe;if(so=l,(Pe=u)&&!h)for($=i;$!==null;)l=$,u=l.child,l.tag===22&&l.memoizedState!==null?Ip(i):u!==null?(u.return=l,$=u):Ip(i);for(;s!==null;)$=s,Mm(s),s=s.sibling;$=i,so=c,Pe=h}Tp(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Tp(e)}}function Tp(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&hp(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hp(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var x=h.memoizedState;if(x!==null){var v=x.dehydrated;v!==null&&Zi(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Pe||t.flags&512&&Oc(t)}catch(w){ue(t,t.return,w)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Cp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Ip(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ue(t,i,u)}}var s=t.return;try{Oc(t)}catch(u){ue(t,s,u)}break;case 5:var l=t.return;try{Oc(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var d1=Math.ceil,Go=an.ReactCurrentDispatcher,qu=an.ReactCurrentOwner,ot=an.ReactCurrentBatchConfig,G=0,_e=null,ge=null,Ee=0,Ye=0,Or=Vn(0),ye=0,us=null,lr=0,ja=0,Ku=0,Vi=null,Be=null,Gu=0,Jr=1/0,Ht=null,Xo=!1,zc=null,An=null,oo=!1,Sn=null,Yo=0,Hi=0,Mc=null,_o=-1,bo=0;function Me(){return G&6?pe():_o!==-1?_o:_o=pe()}function On(e){return e.mode&1?G&2&&Ee!==0?Ee&-Ee:Gx.transition!==null?(bo===0&&(bo=bg()),bo):(e=J,e!==0||(e=window.event,e=e===void 0?16:Cg(e.type)),e):1}function vt(e,t,n,r){if(50<Hi)throw Hi=0,Mc=null,Error(M(185));ys(e,n,r),(!(G&2)||e!==_e)&&(e===_e&&(!(G&2)&&(ja|=n),ye===4&&xn(e,Ee)),Ge(e,r),n===1&&G===0&&!(t.mode&1)&&(Jr=pe()+500,ba&&Hn()))}function Ge(e,t){var n=e.callbackNode;G0(e,t);var r=Ao(e,e===_e?Ee:0);if(r===0)n!==null&&Uh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uh(n),t===1)e.tag===0?Kx(Pp.bind(null,e)):Gg(Pp.bind(null,e)),Vx(function(){!(G&6)&&Hn()}),n=null;else{switch(kg(r)){case 1:n=wu;break;case 4:n=wg;break;case 16:n=Ro;break;case 536870912:n=_g;break;default:n=Ro}n=qm(n,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Um(e,t){if(_o=-1,bo=0,G&6)throw Error(M(327));var n=e.callbackNode;if($r()&&e.callbackNode!==n)return null;var r=Ao(e,e===_e?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jo(e,r);else{t=r;var i=G;G|=2;var s=$m();(_e!==e||Ee!==t)&&(Ht=null,Jr=pe()+500,rr(e,t));do try{f1();break}catch(c){Fm(e,c)}while(!0);Au(),Go.current=s,G=i,ge!==null?t=0:(_e=null,Ee=0,t=ye)}if(t!==0){if(t===2&&(i=dc(e),i!==0&&(r=i,t=Uc(e,i))),t===1)throw n=us,rr(e,0),xn(e,r),Ge(e,pe()),n;if(t===6)xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!h1(i)&&(t=Jo(e,r),t===2&&(s=dc(e),s!==0&&(r=s,t=Uc(e,s))),t===1))throw n=us,rr(e,0),xn(e,r),Ge(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Qn(e,Be,Ht);break;case 3:if(xn(e,r),(r&130023424)===r&&(t=Gu+500-pe(),10<t)){if(Ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xc(Qn.bind(null,e,Be,Ht),t);break}Qn(e,Be,Ht);break;case 4:if(xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-mt(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){e.timeoutHandle=xc(Qn.bind(null,e,Be,Ht),r);break}Qn(e,Be,Ht);break;case 5:Qn(e,Be,Ht);break;default:throw Error(M(329))}}}return Ge(e,pe()),e.callbackNode===n?Um.bind(null,e):null}function Uc(e,t){var n=Vi;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Jo(e,t),e!==2&&(t=Be,Be=n,t!==null&&Fc(t)),e}function Fc(e){Be===null?Be=e:Be.push.apply(Be,e)}function h1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xn(e,t){for(t&=~Ku,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-mt(t),r=1<<n;e[n]=-1,t&=~r}}function Pp(e){if(G&6)throw Error(M(327));$r();var t=Ao(e,0);if(!(t&1))return Ge(e,pe()),null;var n=Jo(e,t);if(e.tag!==0&&n===2){var r=dc(e);r!==0&&(t=r,n=Uc(e,r))}if(n===1)throw n=us,rr(e,0),xn(e,t),Ge(e,pe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,Be,Ht),Ge(e,pe()),null}function Xu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Jr=pe()+500,ba&&Hn())}}function cr(e){Sn!==null&&Sn.tag===0&&!(G&6)&&$r();var t=G;G|=1;var n=ot.transition,r=J;try{if(ot.transition=null,J=1,e)return e()}finally{J=r,ot.transition=n,G=t,!(G&6)&&Hn()}}function Yu(){Ye=Or.current,ie(Or)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bx(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Iu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Mo();break;case 3:Xr(),ie(qe),ie(Ae),Uu();break;case 5:Mu(r);break;case 4:Xr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:Ou(r.type._context);break;case 22:case 23:Yu()}n=n.return}if(_e=e,ge=e=Dn(e.current,null),Ee=Ye=t,ye=0,us=null,Ku=ja=lr=0,Be=Vi=null,tr!==null){for(t=0;t<tr.length;t++)if(n=tr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}tr=null}return e}function Fm(e,t){do{var n=ge;try{if(Au(),yo.current=Ko,qo){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qo=!1}if(ar=0,we=ve=le=null,$i=!1,as=0,qu.current=null,n===null||n.return===null){ye=1,us=t,ge=null;break}e:{var s=e,l=n.return,c=n,u=t;if(t=Ee,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,x=c,v=x.tag;if(!(x.mode&1)&&(v===0||v===11||v===15)){var w=x.alternate;w?(x.updateQueue=w.updateQueue,x.memoizedState=w.memoizedState,x.lanes=w.lanes):(x.updateQueue=null,x.memoizedState=null)}var E=yp(l);if(E!==null){E.flags&=-257,xp(E,l,c,s,t),E.mode&1&&vp(s,h,t),t=E,u=h;var N=t.updateQueue;if(N===null){var P=new Set;P.add(u),t.updateQueue=P}else N.add(u);break e}else{if(!(t&1)){vp(s,h,t),Ju();break e}u=Error(M(426))}}else if(se&&c.mode&1){var A=yp(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),xp(A,l,c,s,t),Pu(Yr(u,c));break e}}s=u=Yr(u,c),ye!==4&&(ye=2),Vi===null?Vi=[s]:Vi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var _=km(s,u,t);dp(s,_);break e;case 1:c=u;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(An===null||!An.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var C=Em(s,c,t);dp(s,C);break e}}s=s.return}while(s!==null)}Vm(n)}catch(L){t=L,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function $m(){var e=Go.current;return Go.current=Ko,e===null?Ko:e}function Ju(){(ye===0||ye===3||ye===2)&&(ye=4),_e===null||!(lr&268435455)&&!(ja&268435455)||xn(_e,Ee)}function Jo(e,t){var n=G;G|=2;var r=$m();(_e!==e||Ee!==t)&&(Ht=null,rr(e,t));do try{p1();break}catch(i){Fm(e,i)}while(!0);if(Au(),G=n,Go.current=r,ge!==null)throw Error(M(261));return _e=null,Ee=0,ye}function p1(){for(;ge!==null;)Bm(ge)}function f1(){for(;ge!==null&&!U0();)Bm(ge)}function Bm(e){var t=Wm(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?Vm(e):ge=t,qu.current=null}function Vm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a1(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ge=null;return}}else if(n=o1(n,t,Ye),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ye===0&&(ye=5)}function Qn(e,t,n){var r=J,i=ot.transition;try{ot.transition=null,J=1,g1(e,t,n,r)}finally{ot.transition=i,J=r}return null}function g1(e,t,n,r){do $r();while(Sn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(X0(e,s),e===_e&&(ge=_e=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,qm(Ro,function(){return $r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var l=J;J=1;var c=G;G|=4,qu.current=null,c1(e,n),zm(n,e),Dx(vc),Oo=!!mc,vc=mc=null,e.current=n,u1(n),F0(),G=c,J=l,ot.transition=s}else e.current=n;if(oo&&(oo=!1,Sn=e,Yo=i),s=e.pendingLanes,s===0&&(An=null),V0(n.stateNode),Ge(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xo)throw Xo=!1,e=zc,zc=null,e;return Yo&1&&e.tag!==0&&$r(),s=e.pendingLanes,s&1?e===Mc?Hi++:(Hi=0,Mc=e):Hi=0,Hn(),null}function $r(){if(Sn!==null){var e=kg(Yo),t=ot.transition,n=J;try{if(ot.transition=null,J=16>e?16:e,Sn===null)var r=!1;else{if(e=Sn,Sn=null,Yo=0,G&6)throw Error(M(331));var i=G;for(G|=4,$=e.current;$!==null;){var s=$,l=s.child;if($.flags&16){var c=s.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for($=h;$!==null;){var x=$;switch(x.tag){case 0:case 11:case 15:Bi(8,x,s)}var v=x.child;if(v!==null)v.return=x,$=v;else for(;$!==null;){x=$;var w=x.sibling,E=x.return;if(Om(x),x===h){$=null;break}if(w!==null){w.return=E,$=w;break}$=E}}}var N=s.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var A=P.sibling;P.sibling=null,P=A}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,$=l;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bi(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var m=e.current;for($=m;$!==null;){l=$;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,$=y;else e:for(l=m;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Sa(9,c)}}catch(L){ue(c,c.return,L)}if(c===l){$=null;break e}var C=c.sibling;if(C!==null){C.return=c.return,$=C;break e}$=c.return}}if(G=i,Hn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(va,e)}catch{}r=!0}return r}finally{J=n,ot.transition=t}}return!1}function Rp(e,t,n){t=Yr(n,t),t=km(e,t,1),e=Rn(e,t,1),t=Me(),e!==null&&(ys(e,1,t),Ge(e,t))}function ue(e,t,n){if(e.tag===3)Rp(e,e,n);else for(;t!==null;){if(t.tag===3){Rp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=Yr(n,e),e=Em(t,e,1),t=Rn(t,e,1),e=Me(),t!==null&&(ys(t,1,e),Ge(t,e));break}}t=t.return}}function m1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Ee&n)===n&&(ye===4||ye===3&&(Ee&130023424)===Ee&&500>pe()-Gu?rr(e,0):Ku|=n),Ge(e,t)}function Hm(e,t){t===0&&(e.mode&1?(t=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):t=1);var n=Me();e=nn(e,t),e!==null&&(ys(e,t,n),Ge(e,n))}function v1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hm(e,n)}function y1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Hm(e,n)}var Wm;Wm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||qe.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,s1(e,t,n);We=!!(e.flags&131072)}else We=!1,se&&t.flags&1048576&&Xg(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wo(e,t),e=t.pendingProps;var i=qr(t,Ae.current);Fr(t,n),i=$u(null,t,r,e,i,n);var s=Bu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(s=!0,Uo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lu(t),i.updater=Ea,t.stateNode=i,i._reactInternals=t,jc(t,r,e,n),t=Cc(null,t,r,!0,s,n)):(t.tag=0,se&&s&&Cu(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=w1(r),e=dt(r,e),i){case 0:t=Tc(null,t,r,e,n);break e;case 1:t=bp(null,t,r,e,n);break e;case 11:t=wp(null,t,r,e,n);break e;case 14:t=_p(null,t,r,dt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Tc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),bp(e,t,r,i,n);case 3:e:{if(Tm(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,tm(e,t),Ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Yr(Error(M(423)),t),t=kp(e,t,r,n,i);break e}else if(r!==i){i=Yr(Error(M(424)),t),t=kp(e,t,r,n,i);break e}else for(Je=Pn(t.stateNode.containerInfo.firstChild),Qe=t,se=!0,pt=null,n=Zg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){t=rn(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return nm(t),e===null&&kc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,yc(r,i)?l=null:s!==null&&yc(r,s)&&(t.flags|=32),Nm(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&kc(t),null;case 13:return Cm(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gr(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),wp(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,te(Bo,r._currentValue),r._currentValue=l,s!==null)if(yt(s.value,l)){if(s.children===i.children&&!qe.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Jt(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var x=h.pending;x===null?u.next=u:(u.next=x.next,x.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ec(s.return,n,t),c.lanes|=n;break}u=u.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(M(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ec(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=at(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),_p(e,t,r,i,n);case 15:return Sm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),wo(e,t),t.tag=1,Ke(r)?(e=!0,Uo(t)):e=!1,Fr(t,n),bm(t,r,i),jc(t,r,i,n),Cc(null,t,r,!0,e,n);case 19:return Im(e,t,n);case 22:return jm(e,t,n)}throw Error(M(156,t.tag))};function qm(e,t){return xg(e,t)}function x1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new x1(e,t,n,r)}function Qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function w1(e){if(typeof e=="function")return Qu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vu)return 11;if(e===yu)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Qu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Er:return ir(n.children,i,s,t);case mu:l=8,i|=8;break;case Yl:return e=st(12,n,t,i|2),e.elementType=Yl,e.lanes=s,e;case Jl:return e=st(13,n,t,i),e.elementType=Jl,e.lanes=s,e;case Ql:return e=st(19,n,t,i),e.elementType=Ql,e.lanes=s,e;case ng:return Na(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eg:l=10;break e;case tg:l=9;break e;case vu:l=11;break e;case yu:l=14;break e;case mn:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=st(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function ir(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=st(22,e,r,t),e.elementType=ng,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Ll(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zu(e,t,n,r,i,s,l,c,u){return e=new _1(e,t,n,c,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=st(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(s),e}function b1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Km(e){if(!e)return Fn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Kg(e,n,t)}return t}function Gm(e,t,n,r,i,s,l,c,u){return e=Zu(n,r,!0,e,i,s,l,c,u),e.context=Km(null),n=e.current,r=Me(),i=On(n),s=Jt(r,i),s.callback=t??null,Rn(n,s,i),e.current.lanes=i,ys(e,i,r),Ge(e,r),e}function Ta(e,t,n,r){var i=t.current,s=Me(),l=On(i);return n=Km(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,l),e!==null&&(vt(e,i,l,s),vo(e,i,l)),l}function Qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ed(e,t){Ap(e,t),(e=e.alternate)&&Ap(e,t)}function k1(){return null}var Xm=typeof reportError=="function"?reportError:function(e){console.error(e)};function td(e){this._internalRoot=e}Ca.prototype.render=td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ta(e,t,null,null)};Ca.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){Ta(null,e,null,null)}),t[tn]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=jg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Tg(e)}};function nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Op(){}function E1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Qo(l);s.call(h)}}var l=Gm(t,r,e,0,null,!1,!1,"",Op);return e._reactRootContainer=l,e[tn]=l.current,ns(e.nodeType===8?e.parentNode:e),cr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=Qo(u);c.call(h)}}var u=Zu(e,0,!1,null,null,!1,!1,"",Op);return e._reactRootContainer=u,e[tn]=u.current,ns(e.nodeType===8?e.parentNode:e),cr(function(){Ta(t,u,n,r)}),u}function Pa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var u=Qo(l);c.call(u)}}Ta(t,l,e,i)}else l=E1(n,t,e,i,r);return Qo(l)}Eg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ri(t.pendingLanes);n!==0&&(_u(t,n|1),Ge(t,pe()),!(G&6)&&(Jr=pe()+500,Hn()))}break;case 13:cr(function(){var r=nn(e,1);if(r!==null){var i=Me();vt(r,e,1,i)}}),ed(e,1)}};bu=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Me();vt(t,e,134217728,n)}ed(e,134217728)}};Sg=function(e){if(e.tag===13){var t=On(e),n=nn(e,t);if(n!==null){var r=Me();vt(n,e,t,r)}ed(e,t)}};jg=function(){return J};Ng=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};lc=function(e,t,n){switch(t){case"input":if(tc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_a(r);if(!i)throw Error(M(90));ig(r),tc(r,i)}}}break;case"textarea":og(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};pg=Xu;fg=cr;var S1={usingClientEntryPoint:!1,Events:[ws,Tr,_a,dg,hg,Xu]},Ti={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j1={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||k1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{va=ao.inject(j1),Nt=ao}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nd(t))throw Error(M(200));return b1(e,t,null,n)};et.createRoot=function(e,t){if(!nd(e))throw Error(M(299));var n=!1,r="",i=Xm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zu(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,ns(e.nodeType===8?e.parentNode:e),new td(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=vg(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return cr(e)};et.hydrate=function(e,t,n){if(!Ia(t))throw Error(M(200));return Pa(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!nd(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Xm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Gm(t,null,e,1,n??null,i,!1,s,l),e[tn]=t.current,ns(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ca(t)};et.render=function(e,t,n){if(!Ia(t))throw Error(M(200));return Pa(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(M(40));return e._reactRootContainer?(cr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};et.unstable_batchedUpdates=Xu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Pa(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ym)}catch(e){console.error(e)}}Ym(),Yf.exports=et;var N1=Yf.exports,Dp=N1;Gl.createRoot=Dp.createRoot,Gl.hydrateRoot=Dp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const Lp="popstate";function T1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:c}=r.location;return $c("",{pathname:s,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return I1(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C1(){return Math.random().toString(36).substr(2,8)}function zp(e,t){return{usr:e.state,key:e.key,idx:t}}function $c(e,t,n,r){return n===void 0&&(n=null),ds({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ii(t):t,{state:n,key:t&&t.key||r||C1()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ii(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,c=jn.Pop,u=null,h=x();h==null&&(h=0,l.replaceState(ds({},l.state,{idx:h}),""));function x(){return(l.state||{idx:null}).idx}function v(){c=jn.Pop;let A=x(),_=A==null?null:A-h;h=A,u&&u({action:c,location:P.location,delta:_})}function w(A,_){c=jn.Push;let m=$c(P.location,A,_);h=x()+1;let y=zp(m,h),C=P.createHref(m);try{l.pushState(y,"",C)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(C)}s&&u&&u({action:c,location:P.location,delta:1})}function E(A,_){c=jn.Replace;let m=$c(P.location,A,_);h=x();let y=zp(m,h),C=P.createHref(m);l.replaceState(y,"",C),s&&u&&u({action:c,location:P.location,delta:0})}function N(A){let _=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof A=="string"?A:Zo(A);return m=m.replace(/ $/,"%20"),fe(_,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,_)}let P={get action(){return c},get location(){return e(i,l)},listen(A){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Lp,v),u=A,()=>{i.removeEventListener(Lp,v),u=null}},createHref(A){return t(i,A)},createURL:N,encodeLocation(A){let _=N(A);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:w,replace:E,go(A){return l.go(A)}};return P}var Mp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mp||(Mp={}));function P1(e,t,n){return n===void 0&&(n="/"),R1(e,t,n)}function R1(e,t,n,r){let i=typeof t=="string"?ii(t):t,s=id(i.pathname||"/",n);if(s==null)return null;let l=Jm(e);A1(l);let c=null;for(let u=0;c==null&&u<l.length;++u){let h=W1(s);c=B1(l[u],h)}return c}function Jm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,c)=>{let u={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};u.relativePath.startsWith("/")&&(fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Ln([r,u.relativePath]),x=n.concat(u);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Jm(s.children,t,x,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:F1(h,s.index),routesMeta:x})};return e.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,l);else for(let u of Qm(s.path))i(s,l,u)}),t}function Qm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=Qm(r.join("/")),c=[];return c.push(...l.map(u=>u===""?s:[s,u].join("/"))),i&&c.push(...l),c.map(u=>e.startsWith("/")&&u===""?"/":u)}function A1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const O1=/^:[\w-]+$/,D1=3,L1=2,z1=1,M1=10,U1=-2,Up=e=>e==="*";function F1(e,t){let n=e.split("/"),r=n.length;return n.some(Up)&&(r+=U1),t&&(r+=L1),n.filter(i=>!Up(i)).reduce((i,s)=>i+(O1.test(s)?D1:s===""?z1:M1),r)}function $1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function B1(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let c=0;c<r.length;++c){let u=r[c],h=c===r.length-1,x=s==="/"?t:t.slice(s.length)||"/",v=V1({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},x),w=u.route;if(!v)return null;Object.assign(i,v.params),l.push({params:i,pathname:Ln([s,v.pathname]),pathnameBase:Y1(Ln([s,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(s=Ln([s,v.pathnameBase]))}return l}function V1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,x,v)=>{let{paramName:w,isOptional:E}=x;if(w==="*"){let P=c[v]||"";l=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const N=c[v];return E&&!N?h[w]=void 0:h[w]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:l,pattern:e}}function H1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function W1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function id(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K1=e=>q1.test(e);function G1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ii(e):e,s;if(n)if(K1(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),rd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Fp(n.substring(1),"/"):s=Fp(n,t)}else s=t;return{pathname:s,search:J1(r),hash:Q1(i)}}function Fp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function sd(e,t){let n=X1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function od(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ii(e):(i=ds({},e),fe(!i.pathname||!i.pathname.includes("?"),zl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),zl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),zl("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,c;if(l==null)c=n;else{let v=t.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),v-=1;i.pathname=w.join("/")}c=v>=0?t[v]:"/"}let u=G1(i,c),h=l&&l!=="/"&&l.endsWith("/"),x=(s||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||x)&&(u.pathname+="/"),u}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Y1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Q1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Z1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zm=["post","put","patch","delete"];new Set(Zm);const ew=["get",...Zm];new Set(ew);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hs(){return hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hs.apply(this,arguments)}const ad=O.createContext(null),tw=O.createContext(null),Wn=O.createContext(null),Ra=O.createContext(null),ln=O.createContext({outlet:null,matches:[],isDataRoute:!1}),ev=O.createContext(null);function nw(e,t){let{relative:n}=t===void 0?{}:t;si()||fe(!1);let{basename:r,navigator:i}=O.useContext(Wn),{hash:s,pathname:l,search:c}=rv(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Ln([r,l])),i.createHref({pathname:u,search:c,hash:s})}function si(){return O.useContext(Ra)!=null}function cn(){return si()||fe(!1),O.useContext(Ra).location}function tv(e){O.useContext(Wn).static||O.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=O.useContext(ln);return e?gw():rw()}function rw(){si()||fe(!1);let e=O.useContext(ad),{basename:t,future:n,navigator:r}=O.useContext(Wn),{matches:i}=O.useContext(ln),{pathname:s}=cn(),l=JSON.stringify(sd(i,n.v7_relativeSplatPath)),c=O.useRef(!1);return tv(()=>{c.current=!0}),O.useCallback(function(h,x){if(x===void 0&&(x={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let v=od(h,JSON.parse(l),s,x.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:Ln([t,v.pathname])),(x.replace?r.replace:r.push)(v,x.state,x)},[t,r,l,s,e])}function nv(){let{matches:e}=O.useContext(ln),t=e[e.length-1];return t?t.params:{}}function rv(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=O.useContext(Wn),{matches:i}=O.useContext(ln),{pathname:s}=cn(),l=JSON.stringify(sd(i,r.v7_relativeSplatPath));return O.useMemo(()=>od(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function iw(e,t){return sw(e,t)}function sw(e,t,n,r){si()||fe(!1);let{navigator:i}=O.useContext(Wn),{matches:s}=O.useContext(ln),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let h=cn(),x;if(t){var v;let A=typeof t=="string"?ii(t):t;u==="/"||(v=A.pathname)!=null&&v.startsWith(u)||fe(!1),x=A}else x=h;let w=x.pathname||"/",E=w;if(u!=="/"){let A=u.replace(/^\//,"").split("/");E="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=P1(e,{pathname:E}),P=uw(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},c,A.params),pathname:Ln([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:Ln([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r);return t&&P?O.createElement(Ra.Provider,{value:{location:hs({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:jn.Pop}},P):P}function ow(){let e=fw(),t=Z1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:i},n):null,null)}const aw=O.createElement(ow,null);class lw extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(ln.Provider,{value:this.props.routeContext},O.createElement(ev.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cw(e){let{routeContext:t,match:n,children:r}=e,i=O.useContext(ad);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ln.Provider,{value:t},r)}function uw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let x=l.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);x>=0||fe(!1),l=l.slice(0,Math.min(l.length,x+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let x=0;x<l.length;x++){let v=l[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=x),v.route.id){let{loaderData:w,errors:E}=n,N=v.route.loader&&w[v.route.id]===void 0&&(!E||E[v.route.id]===void 0);if(v.route.lazy||N){u=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((x,v,w)=>{let E,N=!1,P=null,A=null;n&&(E=c&&v.route.id?c[v.route.id]:void 0,P=v.route.errorElement||aw,u&&(h<0&&w===0?(mw("route-fallback"),N=!0,A=null):h===w&&(N=!0,A=v.route.hydrateFallbackElement||null)));let _=t.concat(l.slice(0,w+1)),m=()=>{let y;return E?y=P:N?y=A:v.route.Component?y=O.createElement(v.route.Component,null):v.route.element?y=v.route.element:y=x,O.createElement(cw,{match:v,routeContext:{outlet:x,matches:_,isDataRoute:n!=null},children:y})};return n&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?O.createElement(lw,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:m(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):m()},null)}var iv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(iv||{}),sv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sv||{});function dw(e){let t=O.useContext(ad);return t||fe(!1),t}function hw(e){let t=O.useContext(tw);return t||fe(!1),t}function pw(e){let t=O.useContext(ln);return t||fe(!1),t}function ov(e){let t=pw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function fw(){var e;let t=O.useContext(ev),n=hw(),r=ov();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gw(){let{router:e}=dw(iv.UseNavigateStable),t=ov(sv.UseNavigateStable),n=O.useRef(!1);return tv(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,hs({fromRouteId:t},s)))},[e,t])}const $p={};function mw(e,t,n){$p[e]||($p[e]=!0)}function vw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Eo(e){let{to:t,replace:n,state:r,relative:i}=e;si()||fe(!1);let{future:s,static:l}=O.useContext(Wn),{matches:c}=O.useContext(ln),{pathname:u}=cn(),h=wt(),x=od(t,sd(c,s.v7_relativeSplatPath),u,i==="path"),v=JSON.stringify(x);return O.useEffect(()=>h(JSON.parse(v),{replace:n,state:r,relative:i}),[h,v,i,n,r]),null}function xe(e){fe(!1)}function yw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:s,static:l=!1,future:c}=e;si()&&fe(!1);let u=t.replace(/^\/*/,"/"),h=O.useMemo(()=>({basename:u,navigator:s,static:l,future:hs({v7_relativeSplatPath:!1},c)}),[u,c,s,l]);typeof r=="string"&&(r=ii(r));let{pathname:x="/",search:v="",hash:w="",state:E=null,key:N="default"}=r,P=O.useMemo(()=>{let A=id(x,u);return A==null?null:{location:{pathname:A,search:v,hash:w,state:E,key:N},navigationType:i}},[u,x,v,w,E,N,i]);return P==null?null:O.createElement(Wn.Provider,{value:h},O.createElement(Ra.Provider,{children:n,value:P}))}function Bp(e){let{children:t,location:n}=e;return iw(Bc(t),n)}new Promise(()=>{});function Bc(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,i)=>{if(!O.isValidElement(r))return;let s=[...t,i];if(r.type===O.Fragment){n.push.apply(n,Bc(r.props.children,s));return}r.type!==xe&&fe(!1),!r.props.index||!r.props.children||fe(!1);let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Bc(r.props.children,s)),n.push(l)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vc.apply(this,arguments)}function xw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ww(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _w(e,t){return e.button===0&&(!t||t==="_self")&&!ww(e)}function Hc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function bw(e,t){let n=Hc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const kw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ew="6";try{window.__reactRouterVersion=Ew}catch{}const Sw="startTransition",Vp=m0[Sw];function jw(e){let{basename:t,children:n,future:r,window:i}=e,s=O.useRef();s.current==null&&(s.current=T1({window:i,v5Compat:!0}));let l=s.current,[c,u]=O.useState({action:l.action,location:l.location}),{v7_startTransition:h}=r||{},x=O.useCallback(v=>{h&&Vp?Vp(()=>u(v)):u(v)},[u,h]);return O.useLayoutEffect(()=>l.listen(x),[l,x]),O.useEffect(()=>vw(r),[r]),O.createElement(yw,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}const Nw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Re=O.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:c,target:u,to:h,preventScrollReset:x,viewTransition:v}=t,w=xw(t,kw),{basename:E}=O.useContext(Wn),N,P=!1;if(typeof h=="string"&&Tw.test(h)&&(N=h,Nw))try{let y=new URL(window.location.href),C=h.startsWith("//")?new URL(y.protocol+h):new URL(h),L=id(C.pathname,E);C.origin===y.origin&&L!=null?h=L+C.search+C.hash:P=!0}catch{}let A=nw(h,{relative:i}),_=Cw(h,{replace:l,state:c,target:u,preventScrollReset:x,relative:i,viewTransition:v});function m(y){r&&r(y),y.defaultPrevented||_(y)}return O.createElement("a",Vc({},w,{href:N||A,onClick:P||s?r:m,ref:n,target:u}))});var Hp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hp||(Hp={}));var Wp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function Cw(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:c}=t===void 0?{}:t,u=wt(),h=cn(),x=rv(e,{relative:l});return O.useCallback(v=>{if(_w(v,n)){v.preventDefault();let w=r!==void 0?r:Zo(h)===Zo(x);u(e,{replace:w,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[h,u,x,r,i,n,e,s,l,c])}function Iw(e){let t=O.useRef(Hc(e)),n=O.useRef(!1),r=cn(),i=O.useMemo(()=>bw(r.search,n.current?null:t.current),[r.search]),s=wt(),l=O.useCallback((c,u)=>{const h=Hc(typeof c=="function"?c(i):c);n.current=!0,s("?"+h,u)},[s,i]);return[i,l]}const av=O.createContext(void 0),At=()=>{const e=O.useContext(av);if(e===void 0)throw new Error("useTenant must be used within a TenantProvider");return e},Pw=e=>{const t=document.documentElement;if(t.style.setProperty("--primary-color",e.primary_color),t.style.setProperty("--secondary-color",e.secondary_color),t.style.setProperty("--accent-color",e.accent_color),e.favicon_url){const n=document.querySelector('link[rel="icon"]');n&&(n.href=e.favicon_url)}e.company_name&&(document.title=e.company_name)},Rw=()=>{const e=window.location.hostname;if(e==="localhost"||e==="127.0.0.1")return{type:"subdomain",value:new URLSearchParams(window.location.search).get("tenant")||"demo"};const t=/^([^.]+)\.(sistemacourier|itobox)\.(com|local)$/,n=e.match(t);return n?{type:"subdomain",value:n[1]}:{type:"custom",value:e}},Aw=({children:e})=>{const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,l]=O.useState(null),c=async()=>{try{i(!0),l(null);const{type:h,value:x}=Rw(),v=h==="subdomain"?`/api/tenants/by-subdomain/${x}`:`/api/tenants/by-domain/${encodeURIComponent(x)}`,w=await fetch(`http://localhost:3001${v}`);if(!w.ok)throw w.status===404?new Error("Empresa no encontrada"):new Error("Error al cargar la configuración");const E=await w.json();if(E.status==="suspended")throw new Error("Cuenta suspendida. Contacte al administrador.");if(E.status==="cancelled")throw new Error("Cuenta cancelada.");n(E),Pw(E.branding)}catch(h){l(h instanceof Error?h.message:"Error desconocido")}finally{i(!1)}};O.useEffect(()=>{c()},[]);const u=(t==null?void 0:t.plan.id)==="enterprise"&&(t==null?void 0:t.has_custom_domain);return a.jsx(av.Provider,{value:{tenant:t,loading:r,error:s,isWhiteLabel:u,refreshTenant:c},children:e})};var qp={};/**
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
 */const lv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ow=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],l=e[n++],c=e[n++],u=((i&7)<<18|(s&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return t.join("")},cv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],l=i+1<e.length,c=l?e[i+1]:0,u=i+2<e.length,h=u?e[i+2]:0,x=s>>2,v=(s&3)<<4|c>>4;let w=(c&15)<<2|h>>6,E=h&63;u||(E=64,l||(w=64)),r.push(n[x],n[v],n[w],n[E])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ow(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const v=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||h==null||v==null)throw new Dw;const w=s<<2|c>>4;if(r.push(w),h!==64){const E=c<<4&240|h>>2;if(r.push(E),v!==64){const N=h<<6&192|v;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Dw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lw=function(e){const t=lv(e);return cv.encodeByteArray(t,!0)},ea=function(e){return Lw(e).replace(/\./g,"")},uv=function(e){try{return cv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mw=()=>zw().__FIREBASE_DEFAULTS__,Uw=()=>{if(typeof process>"u"||typeof qp>"u")return;const e=qp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&uv(e[1]);return t&&JSON.parse(t)},ld=()=>{try{return Mw()||Uw()||Fw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dv=e=>{var t,n;return(n=(t=ld())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hv=e=>{const t=dv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},pv=()=>{var e;return(e=ld())===null||e===void 0?void 0:e.config},fv=e=>{var t;return(t=ld())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class $w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function gv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ea(JSON.stringify(n)),ea(JSON.stringify(l)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ww(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const e=Ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Gw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Xw="FirebaseError";class Ot extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xw,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bs.prototype.create)}}class bs{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],l=s?Yw(s,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Ot(i,c,r)}}function Yw(e,t){return e.replace(Jw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Jw=/\{\$([^}]+)}/g;function Qw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ta(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],l=t[i];if(Kp(s)&&Kp(l)){if(!ta(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kp(e){return e!==null&&typeof e=="object"}/**
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
 */function ks(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Oi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Di(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Zw(e,t){const n=new e2(e,t);return n.subscribe.bind(n)}class e2{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");t2(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ml),i.error===void 0&&(i.error=Ml),i.complete===void 0&&(i.complete=Ml);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t2(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ml(){}/**
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
 */function _t(e){return e&&e._delegate?e._delegate:e}class $n{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zn="[DEFAULT]";/**
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
 */class n2{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $w;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(i2(t))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zn){return this.instances.has(t)}getOptions(t=Zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&t(l,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r2(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zn){return this.component?this.component.multipleInstances?t:Zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r2(e){return e===Zn?void 0:e}function i2(e){return e.instantiationMode==="EAGER"}/**
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
 */class s2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new n2(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const o2={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},a2=Y.INFO,l2={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},c2=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=l2[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cd{constructor(t){this.name=t,this._logLevel=a2,this._logHandler=c2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?o2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const u2=(e,t)=>t.some(n=>e instanceof n);let Gp,Xp;function d2(){return Gp||(Gp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h2(){return Xp||(Xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,Wc=new WeakMap,vv=new WeakMap,Ul=new WeakMap,ud=new WeakMap;function p2(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",l)},s=()=>{n(zn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&mv.set(n,e)}).catch(()=>{}),ud.set(t,e),t}function f2(e){if(Wc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",l),e.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",l),e.addEventListener("abort",l)});Wc.set(e,t)}let qc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Wc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||vv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function g2(e){qc=e(qc)}function m2(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fl(this),t,...n);return vv.set(r,t.sort?t.sort():[t]),zn(r)}:h2().includes(e)?function(...t){return e.apply(Fl(this),t),zn(mv.get(this))}:function(...t){return zn(e.apply(Fl(this),t))}}function v2(e){return typeof e=="function"?m2(e):(e instanceof IDBTransaction&&f2(e),u2(e,d2())?new Proxy(e,qc):e)}function zn(e){if(e instanceof IDBRequest)return p2(e);if(Ul.has(e))return Ul.get(e);const t=v2(e);return t!==e&&(Ul.set(e,t),ud.set(t,e)),t}const Fl=e=>ud.get(e);function y2(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(e,t),c=zn(l);return r&&l.addEventListener("upgradeneeded",u=>{r(zn(l.result),u.oldVersion,u.newVersion,zn(l.transaction),u)}),n&&l.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const x2=["get","getKey","getAll","getAllKeys","count"],w2=["put","add","delete","clear"],$l=new Map;function Yp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($l.get(t))return $l.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=w2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x2.includes(n)))return;const s=async function(l,...c){const u=this.transaction(l,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return $l.set(t,s),s}g2(e=>({...e,get:(t,n,r)=>Yp(t,n)||e.get(t,n,r),has:(t,n)=>!!Yp(t,n)||e.has(t,n)}));/**
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
 */class _2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kc="@firebase/app",Jp="0.10.13";/**
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
 */const sn=new cd("@firebase/app"),k2="@firebase/app-compat",E2="@firebase/analytics-compat",S2="@firebase/analytics",j2="@firebase/app-check-compat",N2="@firebase/app-check",T2="@firebase/auth",C2="@firebase/auth-compat",I2="@firebase/database",P2="@firebase/data-connect",R2="@firebase/database-compat",A2="@firebase/functions",O2="@firebase/functions-compat",D2="@firebase/installations",L2="@firebase/installations-compat",z2="@firebase/messaging",M2="@firebase/messaging-compat",U2="@firebase/performance",F2="@firebase/performance-compat",$2="@firebase/remote-config",B2="@firebase/remote-config-compat",V2="@firebase/storage",H2="@firebase/storage-compat",W2="@firebase/firestore",q2="@firebase/vertexai-preview",K2="@firebase/firestore-compat",G2="firebase",X2="10.14.1";/**
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
 */const Gc="[DEFAULT]",Y2={[Kc]:"fire-core",[k2]:"fire-core-compat",[S2]:"fire-analytics",[E2]:"fire-analytics-compat",[N2]:"fire-app-check",[j2]:"fire-app-check-compat",[T2]:"fire-auth",[C2]:"fire-auth-compat",[I2]:"fire-rtdb",[P2]:"fire-data-connect",[R2]:"fire-rtdb-compat",[A2]:"fire-fn",[O2]:"fire-fn-compat",[D2]:"fire-iid",[L2]:"fire-iid-compat",[z2]:"fire-fcm",[M2]:"fire-fcm-compat",[U2]:"fire-perf",[F2]:"fire-perf-compat",[$2]:"fire-rc",[B2]:"fire-rc-compat",[V2]:"fire-gcs",[H2]:"fire-gcs-compat",[W2]:"fire-fst",[K2]:"fire-fst-compat",[q2]:"fire-vertex","fire-js":"fire-js",[G2]:"fire-js-all"};/**
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
 */const na=new Map,J2=new Map,Xc=new Map;function Qp(e,t){try{e.container.addComponent(t)}catch(n){sn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ur(e){const t=e.name;if(Xc.has(t))return sn.debug(`There were multiple attempts to register component ${t}.`),!1;Xc.set(t,e);for(const n of na.values())Qp(n,e);for(const n of J2.values())Qp(n,e);return!0}function Aa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function jt(e){return e.settings!==void 0}/**
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
 */const Q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new bs("app","Firebase",Q2);/**
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
 */class Z2{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=X2;function yv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(n||(n=pv()),!n)throw Mn.create("no-options");const s=na.get(i);if(s){if(ta(n,s.options)&&ta(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const l=new s2(i);for(const u of Xc.values())l.addComponent(u);const c=new Z2(n,r,l);return na.set(i,c),c}function dd(e=Gc){const t=na.get(e);if(!t&&e===Gc&&pv())return yv();if(!t)throw Mn.create("no-app",{appName:e});return t}function Ct(e,t,n){var r;let i=(r=Y2[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=t.match(/\s|\//);if(s||l){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),sn.warn(c.join(" "));return}ur(new $n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const e_="firebase-heartbeat-database",t_=1,ps="firebase-heartbeat-store";let Bl=null;function xv(){return Bl||(Bl=y2(e_,t_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(e=>{throw Mn.create("idb-open",{originalErrorMessage:e.message})})),Bl}async function n_(e){try{const n=(await xv()).transaction(ps),r=await n.objectStore(ps).get(wv(e));return await n.done,r}catch(t){if(t instanceof Ot)sn.warn(t.message);else{const n=Mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});sn.warn(n.message)}}}async function Zp(e,t){try{const r=(await xv()).transaction(ps,"readwrite");await r.objectStore(ps).put(t,wv(e)),await r.done}catch(n){if(n instanceof Ot)sn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function wv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const r_=1024,i_=30*24*60*60*1e3;class s_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ef();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=i_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:r,unsentEntries:i}=o_(this._heartbeatsCache.heartbeats),s=ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return sn.warn(n),""}}}function ef(){return new Date().toISOString().substring(0,10)}function o_(e,t=r_){const n=[];let r=e.slice();for(const i of e){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),tf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kw()?Gw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function tf(e){return ea(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function l_(e){ur(new $n("platform-logger",t=>new _2(t),"PRIVATE")),ur(new $n("heartbeat",t=>new s_(t),"PRIVATE")),Ct(Kc,Jp,e),Ct(Kc,Jp,"esm2017"),Ct("fire-js","")}l_("");function hd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function _v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c_=_v,bv=new bs("auth","Firebase",_v());/**
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
 */const ra=new cd("@firebase/auth");function u_(e,...t){ra.logLevel<=Y.WARN&&ra.warn(`Auth (${mr}): ${e}`,...t)}function So(e,...t){ra.logLevel<=Y.ERROR&&ra.error(`Auth (${mr}): ${e}`,...t)}/**
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
 */function xt(e,...t){throw pd(e,...t)}function It(e,...t){return pd(e,...t)}function kv(e,t,n){const r=Object.assign(Object.assign({},c_()),{[t]:n});return new bs("auth","Firebase",r).create(t,{appName:e.name})}function Qt(e){return kv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return bv.create(e,...t)}function B(e,t,...n){if(!e)throw pd(t,...n)}function Gt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw So(t),new Error(t)}function on(e,t){e||Gt(t)}/**
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
 */function Yc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function d_(){return nf()==="http:"||nf()==="https:"}function nf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||Hw()||"connection"in navigator)?navigator.onLine:!0}function p_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Es{constructor(t,n){this.shortDelay=t,this.longDelay=n,on(n>t,"Short delay should be less than long delay!"),this.isMobile=Bw()||Ww()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fd(e,t){on(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ev{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g_=new Es(3e4,6e4);function un(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dt(e,t,n,r,i={}){return Sv(e,i,async()=>{let s={},l={};r&&(t==="GET"?l=r:s={body:JSON.stringify(r)});const c=ks(Object.assign({key:e.config.apiKey},l)).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const h=Object.assign({method:t,headers:u},s);return Vw()||(h.referrerPolicy="no-referrer"),Ev.fetch()(jv(e,e.config.apiHost,n,c),h)})}async function Sv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},f_),t);try{const i=new v_(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw lo(e,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const c=s.ok?l.errorMessage:l.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(e,"credential-already-in-use",l);if(u==="EMAIL_EXISTS")throw lo(e,"email-already-in-use",l);if(u==="USER_DISABLED")throw lo(e,"user-disabled",l);const x=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kv(e,x,h);xt(e,x)}}catch(i){if(i instanceof Ot)throw i;xt(e,"network-request-failed",{message:String(i)})}}async function Ss(e,t,n,r,i={}){const s=await Dt(e,t,n,r,i);return"mfaPendingCredential"in s&&xt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function jv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fd(e.config,i):`${e.config.apiScheme}://${i}`}function m_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class v_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),g_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(e,t,r);return i.customData._tokenResponse=n,i}function rf(e){return e!==void 0&&e.enterprise!==void 0}class y_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return m_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function x_(e,t){return Dt(e,"GET","/v2/recaptchaConfig",un(e,t))}/**
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
 */async function w_(e,t){return Dt(e,"POST","/v1/accounts:delete",t)}async function Nv(e,t){return Dt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Wi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function __(e,t=!1){const n=_t(e),r=await n.getIdToken(t),i=gd(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wi(Vl(i.auth_time)),issuedAtTime:Wi(Vl(i.iat)),expirationTime:Wi(Vl(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vl(e){return Number(e)*1e3}function gd(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=uv(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sf(e){const t=gd(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Qr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ot&&b_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function b_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class k_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Jc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wi(this.lastLoginAt),this.creationTime=Wi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ia(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qr(e,Nv(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const l=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Tv(s.providerUserInfo):[],c=S_(e.providerData,l),u=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),x=u?h:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Jc(s.createdAt,s.lastLoginAt),isAnonymous:x};Object.assign(e,v)}async function E_(e){const t=_t(e);await ia(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function S_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Tv(e){return e.map(t=>{var{providerId:n}=t,r=hd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function j_(e,t){const n=await Sv(e,{},async()=>{const r=ks({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,l=jv(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ev.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function N_(e,t){return Dt(e,"POST","/v2/accounts:revokeToken",un(e,t))}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):sf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=sf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await j_(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new Br;return r&&(B(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:t}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function gn(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Xt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=hd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Qr(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return __(this,t)}reload(){return E_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Xt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Qt(this.auth));const t=await this.getIdToken();return await Qr(this,w_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,l,c,u,h,x;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(l=n.photoURL)!==null&&l!==void 0?l:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,A=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,m=(x=n.lastLoginAt)!==null&&x!==void 0?x:void 0,{uid:y,emailVerified:C,isAnonymous:L,providerData:z,stsTokenManager:k}=n;B(y&&k,t,"internal-error");const g=Br.fromJSON(this.name,k);B(typeof y=="string",t,"internal-error"),gn(v,t.name),gn(w,t.name),B(typeof C=="boolean",t,"internal-error"),B(typeof L=="boolean",t,"internal-error"),gn(E,t.name),gn(N,t.name),gn(P,t.name),gn(A,t.name),gn(_,t.name),gn(m,t.name);const b=new Xt({uid:y,auth:t,email:w,emailVerified:C,displayName:v,isAnonymous:L,photoURL:N,phoneNumber:E,tenantId:P,stsTokenManager:g,createdAt:_,lastLoginAt:m});return z&&Array.isArray(z)&&(b.providerData=z.map(j=>Object.assign({},j))),A&&(b._redirectEventId=A),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Br;i.updateFromServerResponse(n);const s=new Xt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ia(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];B(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tv(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Br;c.updateFromIdToken(r);const u=new Xt({uid:i.localId,auth:t,stsTokenManager:c,isAnonymous:l}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const of=new Map;function Yt(e){on(e instanceof Function,"Expected a class definition");let t=of.get(e);return t?(on(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,of.set(e,t),t)}/**
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
 */class Cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Cv.type="NONE";const af=Cv;/**
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
 */function jo(e,t,n){return`firebase:${e}:${t}:${n}`}class Vr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=jo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Xt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Vr(Yt(af),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Yt(af);const l=jo(r,t.config.apiKey,t.name);let c=null;for(const h of n)try{const x=await h._get(l);if(x){const v=Xt._fromJSON(t,x);h!==s&&(c=v),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vr(s,t,r):(s=u[0],c&&await s._set(l,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(l)}catch{}})),new Vr(s,t,r))}}/**
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
 */function lf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Av(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Iv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dv(t))return"Blackberry";if(Lv(t))return"Webos";if(Pv(t))return"Safari";if((t.includes("chrome/")||Rv(t))&&!t.includes("edge/"))return"Chrome";if(Ov(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iv(e=Ue()){return/firefox\//i.test(e)}function Pv(e=Ue()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rv(e=Ue()){return/crios\//i.test(e)}function Av(e=Ue()){return/iemobile/i.test(e)}function Ov(e=Ue()){return/android/i.test(e)}function Dv(e=Ue()){return/blackberry/i.test(e)}function Lv(e=Ue()){return/webos/i.test(e)}function md(e=Ue()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function T_(e=Ue()){var t;return md(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function C_(){return qw()&&document.documentMode===10}function zv(e=Ue()){return md(e)||Ov(e)||Lv(e)||Dv(e)||/windows phone/i.test(e)||Av(e)}/**
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
 */function Mv(e,t=[]){let n;switch(e){case"Browser":n=lf(Ue());break;case"Worker":n=`${lf(Ue())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
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
 */class I_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((l,c)=>{try{const u=t(s);l(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P_(e,t={}){return Dt(e,"GET","/v2/passwordPolicy",un(e,t))}/**
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
 */const R_=6;class A_{constructor(t){var n,r,i,s;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:R_,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,l,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(l=u.containsNumericCharacter)!==null&&l!==void 0?l:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class O_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cf(this),this.idTokenSubscription=new cf(this),this.beforeStateQueue=new I_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Nv(this,{idToken:t}),r=await Xt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(jt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!l||l===c)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ia(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=p_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(jt(this.app))return Promise.reject(Qt(this));const n=t?_t(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return jt(this.app)?Promise.reject(Qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await P_(this),n=new A_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new bs("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await N_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{l=!0,u()}}else{const u=t.addObserver(n);return()=>{l=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&u_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qn(e){return _t(e)}class cf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D_(e){Oa=e}function Uv(e){return Oa.loadJS(e)}function L_(){return Oa.recaptchaEnterpriseScript}function z_(){return Oa.gapiScript}function M_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const U_="recaptcha-enterprise",F_="NO_RECAPTCHA";class $_{constructor(t){this.type=U_,this.auth=qn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(l,c)=>{x_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new y_(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,l(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,l,c){const u=window.grecaptcha;rf(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(h=>{l(h)}).catch(()=>{l(F_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,l)=>{r(this.auth).then(c=>{if(!n&&rf(window.grecaptcha))i(c,s,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let u=L_();u.length!==0&&(u+=c),Uv(u).then(()=>{i(c,s,l)}).catch(h=>{l(h)})}}).catch(c=>{l(c)})})}}async function uf(e,t,n,r=!1){const i=new $_(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const l=Object.assign({},t);return r?Object.assign(l,{captchaResp:s}):Object.assign(l,{captchaResponse:s}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sa(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await uf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await uf(e,t,n,n==="getOobCode");return r(e,l)}else return Promise.reject(s)})}/**
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
 */function B_(e,t){const n=Aa(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ta(s,t??{}))return i;xt(i,"already-initialized")}return n.initialize({options:t})}function V_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function H_(e,t,n){const r=qn(e);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=Fv(t),{host:l,port:c}=W_(t),u=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${l}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),q_()}function Fv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function W_(e){const t=Fv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:df(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:df(l)}}}function df(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function q_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class vd{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,n){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}async function K_(e,t){return Dt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function G_(e,t){return Ss(e,"POST","/v1/accounts:signInWithPassword",un(e,t))}async function X_(e,t){return Dt(e,"POST","/v1/accounts:sendOobCode",un(e,t))}async function Y_(e,t){return X_(e,t)}/**
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
 */async function J_(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}async function Q_(e,t){return Ss(e,"POST","/v1/accounts:signInWithEmailLink",un(e,t))}/**
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
 */class fs extends vd{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new fs(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new fs(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(t,n,"signInWithPassword",G_);case"emailLink":return J_(t,{email:this._email,oobCode:this._password});default:xt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(t,r,"signUpPassword",K_);case"emailLink":return Q_(t,{idToken:n,email:this._email,oobCode:this._password});default:xt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Hr(e,t){return Ss(e,"POST","/v1/accounts:signInWithIdp",un(e,t))}/**
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
 */const Z_="http://localhost";class dr extends vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new dr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=hd(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new dr(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return Hr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Hr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Hr(t,n)}buildRequest(){const t={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ks(n)}return t}}/**
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
 */function eb(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tb(e){const t=Oi(Di(e)).link,n=t?Oi(Di(t)).deep_link_id:null,r=Oi(Di(e)).deep_link_id;return(r?Oi(Di(r)).link:null)||r||n||t||e}class yd{constructor(t){var n,r,i,s,l,c;const u=Oi(Di(t)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,x=(r=u.oobCode)!==null&&r!==void 0?r:null,v=eb((i=u.mode)!==null&&i!==void 0?i:null);B(h&&x&&v,"argument-error"),this.apiKey=h,this.operation=v,this.code=x,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(l=u.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=tb(t);try{return new yd(n)}catch{return null}}}/**
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
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(t,n){return fs._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=yd.parseLink(n);return B(r,"argument-error"),fs._fromEmailAndCode(t,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $v{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends $v{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends js{constructor(){super("facebook.com")}static credential(t){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return dr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return _n.credentialFromTaggedObject(t)}static credentialFromError(t){return _n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class bn extends js{constructor(){super("github.com")}static credential(t){return dr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class kn extends js{constructor(){super("twitter.com")}static credential(t,n){return dr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */async function nb(e,t){return Ss(e,"POST","/v1/accounts:signUp",un(e,t))}/**
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
 */class hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Xt._fromIdTokenResponse(t,r,i),l=hf(r);return new hr({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=hf(r);return new hr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function hf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class oa extends Ot{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new oa(t,n,r,i)}}function Bv(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(e,s,t,r):s})}async function rb(e,t,n=!1){const r=await Qr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return hr._forOperation(e,"link",r)}/**
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
 */async function ib(e,t,n=!1){const{auth:r}=e;if(jt(r.app))return Promise.reject(Qt(r));const i="reauthenticate";try{const s=await Qr(e,Bv(r,i,t,e),n);B(s.idToken,r,"internal-error");const l=gd(s.idToken);B(l,r,"internal-error");const{sub:c}=l;return B(e.uid===c,r,"user-mismatch"),hr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
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
 */async function Vv(e,t,n=!1){if(jt(e.app))return Promise.reject(Qt(e));const r="signIn",i=await Bv(e,r,t),s=await hr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function sb(e,t){return Vv(qn(e),t)}/**
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
 */async function Hv(e){const t=qn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ob(e,t,n){const r=qn(e);await sa(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Y_)}async function ab(e,t,n){if(jt(e.app))return Promise.reject(Qt(e));const r=qn(e),l=await sa(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nb).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hv(e),u}),c=await hr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function lb(e,t,n){return jt(e.app)?Promise.reject(Qt(e)):sb(_t(e),oi.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hv(e),r})}/**
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
 */async function cb(e,t){return Dt(e,"POST","/v1/accounts:update",t)}/**
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
 */async function ub(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=_t(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},l=await Qr(r,cb(r.auth,s));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function db(e,t,n,r){return _t(e).onIdTokenChanged(t,n,r)}function hb(e,t,n){return _t(e).beforeAuthStateChanged(t,n)}function pb(e,t,n,r){return _t(e).onAuthStateChanged(t,n,r)}function fb(e){return _t(e).signOut()}const aa="__sak";/**
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
 */class Wv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gb=1e3,mb=10;class qv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,c,u)=>{this.notifyListeners(l,u)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);C_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,mb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qv.type="LOCAL";const vb=qv;/**
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
 */class Kv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Kv.type="SESSION";const Gv=Kv;/**
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
 */function yb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Da(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async h=>h(n.origin,s)),u=await yb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
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
 */function xd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class xb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((c,u)=>{const h=xd("",20);i.port1.start();const x=setTimeout(()=>{u(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(v){const w=v;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(x),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(w.data.response);break;default:clearTimeout(x),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Pt(){return window}function wb(e){Pt().location.href=e}/**
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
 */function Xv(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function _b(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function kb(){return Xv()?self:null}/**
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
 */const Yv="firebaseLocalStorageDb",Eb=1,la="firebaseLocalStorage",Jv="fbase_key";class Ns{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function La(e,t){return e.transaction([la],t?"readwrite":"readonly").objectStore(la)}function Sb(){const e=indexedDB.deleteDatabase(Yv);return new Ns(e).toPromise()}function Qc(){const e=indexedDB.open(Yv,Eb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(la,{keyPath:Jv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(la)?t(r):(r.close(),await Sb(),t(await Qc()))})})}async function pf(e,t,n){const r=La(e,!0).put({[Jv]:t,value:n});return new Ns(r).toPromise()}async function jb(e,t){const n=La(e,!1).get(t),r=await new Ns(n).toPromise();return r===void 0?null:r.value}function ff(e,t){const n=La(e,!0).delete(t);return new Ns(n).toPromise()}const Nb=800,Tb=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Tb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(kb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await _b(),!this.activeServiceWorker)return;this.sender=new xb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qc();return await pf(t,aa,"1"),await ff(t,aa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>jb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ff(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=La(i,!1).getAll();return new Ns(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const Cb=Qv;new Es(3e4,6e4);/**
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
 */function Ib(e,t){return t?Yt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class wd extends vd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Pb(e){return Vv(e.auth,new wd(e),e.bypassAuthState)}function Rb(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),ib(n,new wd(e),e.bypassAuthState)}async function Ab(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),rb(n,new wd(e),e.bypassAuthState)}/**
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
 */class Zv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:c}=t;if(l){this.reject(l);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Pb;case"linkViaPopup":case"linkViaRedirect":return Ab;case"reauthViaPopup":case"reauthViaRedirect":return Rb;default:xt(this.auth,"internal-error")}}resolve(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ob=new Es(2e3,1e4);class Dr extends Zv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const t=xd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Ob.get())};t()}}Dr.currentPopupAction=null;/**
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
 */const Db="pendingRedirect",No=new Map;class Lb extends Zv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=No.get(this.auth._key());if(!t){try{const r=await zb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}No.set(this.auth._key(),t)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zb(e,t){const n=Fb(t),r=Ub(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mb(e,t){No.set(e._key(),t)}function Ub(e){return Yt(e._redirectPersistence)}function Fb(e){return jo(Db,e.config.apiKey,e.name)}async function $b(e,t,n=!1){if(jt(e.app))return Promise.reject(Qt(e));const r=qn(e),i=Ib(r,t),l=await new Lb(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
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
 */const Bb=10*60*1e3;class Vb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Hb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ey(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(t))}saveEventToCache(t){this.cachedEventUids.add(gf(t)),this.lastProcessedEventTime=Date.now()}}function gf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ey({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Hb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ey(e);default:return!1}}/**
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
 */async function Wb(e,t={}){return Dt(e,"GET","/v1/projects",t)}/**
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
 */const qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kb=/^https?/;async function Gb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Wb(e);for(const n of t)try{if(Xb(n))return}catch{}xt(e,"unauthorized-domain")}function Xb(e){const t=Yc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Kb.test(n))return!1;if(qb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Yb=new Es(3e4,6e4);function mf(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Jb(e){return new Promise((t,n)=>{var r,i,s;function l(){mf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mf(),n(It(e,"network-request-failed"))},timeout:Yb.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)l();else{const c=M_("iframefcb");return Pt()[c]=()=>{gapi.load?l():n(It(e,"network-request-failed"))},Uv(`${z_()}?onload=${c}`).catch(u=>n(u))}}).catch(t=>{throw To=null,t})}let To=null;function Qb(e){return To=To||Jb(e),To}/**
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
 */const Zb=new Es(5e3,15e3),ek="__/auth/iframe",tk="emulator/auth/iframe",nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fd(t,tk):`https://${e.config.authDomain}/${ek}`,r={apiKey:t.apiKey,appName:e.name,v:mr},i=rk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ks(r).slice(1)}`}async function sk(e){const t=await Qb(e),n=Pt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:ik(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=It(e,"network-request-failed"),c=Pt().setTimeout(()=>{s(l)},Zb.get());function u(){Pt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(l)})}))}/**
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
 */const ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ak=500,lk=600,ck="_blank",uk="http://localhost";class vf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dk(e,t,n,r=ak,i=lk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},ok),{width:r.toString(),height:i.toString(),top:s,left:l}),h=Ue().toLowerCase();n&&(c=Rv(h)?ck:n),Iv(h)&&(t=t||uk,u.scrollbars="yes");const x=Object.entries(u).reduce((w,[E,N])=>`${w}${E}=${N},`,"");if(T_(h)&&c!=="_self")return hk(t||"",c),new vf(null);const v=window.open(t||"",c,x);B(v,e,"popup-blocked");try{v.focus()}catch{}return new vf(v)}function hk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pk="__/auth/handler",fk="emulator/auth/handler",gk=encodeURIComponent("fac");async function yf(e,t,n,r,i,s){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(t instanceof $v){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Qw(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[x,v]of Object.entries({}))l[x]=v}if(t instanceof js){const x=t.getScopes().filter(v=>v!=="");x.length>0&&(l.scopes=x.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const x of Object.keys(c))c[x]===void 0&&delete c[x];const u=await e._getAppCheckToken(),h=u?`#${gk}=${encodeURIComponent(u)}`:"";return`${mk(e)}?${ks(c).slice(1)}${h}`}function mk({config:e}){return e.emulator?fd(e,fk):`https://${e.authDomain}/${pk}`}/**
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
 */const Hl="webStorageSupport";class vk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gv,this._completeRedirectFn=$b,this._overrideRedirectResult=Mb}async _openPopup(t,n,r,i){var s;on((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await yf(t,n,r,Yc(),i);return dk(t,l,xd())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await yf(t,n,r,Yc(),i);return wb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await sk(t),r=new Vb(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hl,{type:Hl},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hl];l!==void 0&&n(!!l),xt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zv()||Pv()||md()}}const yk=vk;var xf="@firebase/auth",wf="1.7.9";/**
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
 */class xk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _k(e){ur(new $n("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;B(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:l,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(e)},h=new O_(r,i,s,u);return V_(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ur(new $n("auth-internal",t=>{const n=qn(t.getProvider("auth").getImmediate());return(r=>new xk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(xf,wf,wk(e)),Ct(xf,wf,"esm2017")}/**
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
 */const bk=5*60,kk=fv("authIdTokenMaxAge")||bk;let _f=null;const Ek=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kk)return;const i=n==null?void 0:n.token;_f!==i&&(_f=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sk(e=dd()){const t=Aa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=B_(e,{popupRedirectResolver:yk,persistence:[Cb,vb,Gv]}),r=fv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=Ek(s.toString());hb(n,l,()=>l(n.currentUser)),db(n,c=>l(c))}}const i=dv("auth");return i&&H_(n,`http://${i}`),n}function jk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}D_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_k("Browser");var Nk="firebase",Tk="10.14.1";/**
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
 */Ct(Nk,Tk,"app");var bf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ty;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,g){function b(){}b.prototype=g.prototype,k.D=g.prototype,k.prototype=new b,k.prototype.constructor=k,k.C=function(j,I,T){for(var S=Array(arguments.length-2),me=2;me<arguments.length;me++)S[me-2]=arguments[me];return g.prototype[I].apply(j,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,g,b){b||(b=0);var j=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)j[I]=g.charCodeAt(b++)|g.charCodeAt(b++)<<8|g.charCodeAt(b++)<<16|g.charCodeAt(b++)<<24;else for(I=0;16>I;++I)j[I]=g[b++]|g[b++]<<8|g[b++]<<16|g[b++]<<24;g=k.g[0],b=k.g[1],I=k.g[2];var T=k.g[3],S=g+(T^b&(I^T))+j[0]+3614090360&4294967295;g=b+(S<<7&4294967295|S>>>25),S=T+(I^g&(b^I))+j[1]+3905402710&4294967295,T=g+(S<<12&4294967295|S>>>20),S=I+(b^T&(g^b))+j[2]+606105819&4294967295,I=T+(S<<17&4294967295|S>>>15),S=b+(g^I&(T^g))+j[3]+3250441966&4294967295,b=I+(S<<22&4294967295|S>>>10),S=g+(T^b&(I^T))+j[4]+4118548399&4294967295,g=b+(S<<7&4294967295|S>>>25),S=T+(I^g&(b^I))+j[5]+1200080426&4294967295,T=g+(S<<12&4294967295|S>>>20),S=I+(b^T&(g^b))+j[6]+2821735955&4294967295,I=T+(S<<17&4294967295|S>>>15),S=b+(g^I&(T^g))+j[7]+4249261313&4294967295,b=I+(S<<22&4294967295|S>>>10),S=g+(T^b&(I^T))+j[8]+1770035416&4294967295,g=b+(S<<7&4294967295|S>>>25),S=T+(I^g&(b^I))+j[9]+2336552879&4294967295,T=g+(S<<12&4294967295|S>>>20),S=I+(b^T&(g^b))+j[10]+4294925233&4294967295,I=T+(S<<17&4294967295|S>>>15),S=b+(g^I&(T^g))+j[11]+2304563134&4294967295,b=I+(S<<22&4294967295|S>>>10),S=g+(T^b&(I^T))+j[12]+1804603682&4294967295,g=b+(S<<7&4294967295|S>>>25),S=T+(I^g&(b^I))+j[13]+4254626195&4294967295,T=g+(S<<12&4294967295|S>>>20),S=I+(b^T&(g^b))+j[14]+2792965006&4294967295,I=T+(S<<17&4294967295|S>>>15),S=b+(g^I&(T^g))+j[15]+1236535329&4294967295,b=I+(S<<22&4294967295|S>>>10),S=g+(I^T&(b^I))+j[1]+4129170786&4294967295,g=b+(S<<5&4294967295|S>>>27),S=T+(b^I&(g^b))+j[6]+3225465664&4294967295,T=g+(S<<9&4294967295|S>>>23),S=I+(g^b&(T^g))+j[11]+643717713&4294967295,I=T+(S<<14&4294967295|S>>>18),S=b+(T^g&(I^T))+j[0]+3921069994&4294967295,b=I+(S<<20&4294967295|S>>>12),S=g+(I^T&(b^I))+j[5]+3593408605&4294967295,g=b+(S<<5&4294967295|S>>>27),S=T+(b^I&(g^b))+j[10]+38016083&4294967295,T=g+(S<<9&4294967295|S>>>23),S=I+(g^b&(T^g))+j[15]+3634488961&4294967295,I=T+(S<<14&4294967295|S>>>18),S=b+(T^g&(I^T))+j[4]+3889429448&4294967295,b=I+(S<<20&4294967295|S>>>12),S=g+(I^T&(b^I))+j[9]+568446438&4294967295,g=b+(S<<5&4294967295|S>>>27),S=T+(b^I&(g^b))+j[14]+3275163606&4294967295,T=g+(S<<9&4294967295|S>>>23),S=I+(g^b&(T^g))+j[3]+4107603335&4294967295,I=T+(S<<14&4294967295|S>>>18),S=b+(T^g&(I^T))+j[8]+1163531501&4294967295,b=I+(S<<20&4294967295|S>>>12),S=g+(I^T&(b^I))+j[13]+2850285829&4294967295,g=b+(S<<5&4294967295|S>>>27),S=T+(b^I&(g^b))+j[2]+4243563512&4294967295,T=g+(S<<9&4294967295|S>>>23),S=I+(g^b&(T^g))+j[7]+1735328473&4294967295,I=T+(S<<14&4294967295|S>>>18),S=b+(T^g&(I^T))+j[12]+2368359562&4294967295,b=I+(S<<20&4294967295|S>>>12),S=g+(b^I^T)+j[5]+4294588738&4294967295,g=b+(S<<4&4294967295|S>>>28),S=T+(g^b^I)+j[8]+2272392833&4294967295,T=g+(S<<11&4294967295|S>>>21),S=I+(T^g^b)+j[11]+1839030562&4294967295,I=T+(S<<16&4294967295|S>>>16),S=b+(I^T^g)+j[14]+4259657740&4294967295,b=I+(S<<23&4294967295|S>>>9),S=g+(b^I^T)+j[1]+2763975236&4294967295,g=b+(S<<4&4294967295|S>>>28),S=T+(g^b^I)+j[4]+1272893353&4294967295,T=g+(S<<11&4294967295|S>>>21),S=I+(T^g^b)+j[7]+4139469664&4294967295,I=T+(S<<16&4294967295|S>>>16),S=b+(I^T^g)+j[10]+3200236656&4294967295,b=I+(S<<23&4294967295|S>>>9),S=g+(b^I^T)+j[13]+681279174&4294967295,g=b+(S<<4&4294967295|S>>>28),S=T+(g^b^I)+j[0]+3936430074&4294967295,T=g+(S<<11&4294967295|S>>>21),S=I+(T^g^b)+j[3]+3572445317&4294967295,I=T+(S<<16&4294967295|S>>>16),S=b+(I^T^g)+j[6]+76029189&4294967295,b=I+(S<<23&4294967295|S>>>9),S=g+(b^I^T)+j[9]+3654602809&4294967295,g=b+(S<<4&4294967295|S>>>28),S=T+(g^b^I)+j[12]+3873151461&4294967295,T=g+(S<<11&4294967295|S>>>21),S=I+(T^g^b)+j[15]+530742520&4294967295,I=T+(S<<16&4294967295|S>>>16),S=b+(I^T^g)+j[2]+3299628645&4294967295,b=I+(S<<23&4294967295|S>>>9),S=g+(I^(b|~T))+j[0]+4096336452&4294967295,g=b+(S<<6&4294967295|S>>>26),S=T+(b^(g|~I))+j[7]+1126891415&4294967295,T=g+(S<<10&4294967295|S>>>22),S=I+(g^(T|~b))+j[14]+2878612391&4294967295,I=T+(S<<15&4294967295|S>>>17),S=b+(T^(I|~g))+j[5]+4237533241&4294967295,b=I+(S<<21&4294967295|S>>>11),S=g+(I^(b|~T))+j[12]+1700485571&4294967295,g=b+(S<<6&4294967295|S>>>26),S=T+(b^(g|~I))+j[3]+2399980690&4294967295,T=g+(S<<10&4294967295|S>>>22),S=I+(g^(T|~b))+j[10]+4293915773&4294967295,I=T+(S<<15&4294967295|S>>>17),S=b+(T^(I|~g))+j[1]+2240044497&4294967295,b=I+(S<<21&4294967295|S>>>11),S=g+(I^(b|~T))+j[8]+1873313359&4294967295,g=b+(S<<6&4294967295|S>>>26),S=T+(b^(g|~I))+j[15]+4264355552&4294967295,T=g+(S<<10&4294967295|S>>>22),S=I+(g^(T|~b))+j[6]+2734768916&4294967295,I=T+(S<<15&4294967295|S>>>17),S=b+(T^(I|~g))+j[13]+1309151649&4294967295,b=I+(S<<21&4294967295|S>>>11),S=g+(I^(b|~T))+j[4]+4149444226&4294967295,g=b+(S<<6&4294967295|S>>>26),S=T+(b^(g|~I))+j[11]+3174756917&4294967295,T=g+(S<<10&4294967295|S>>>22),S=I+(g^(T|~b))+j[2]+718787259&4294967295,I=T+(S<<15&4294967295|S>>>17),S=b+(T^(I|~g))+j[9]+3951481745&4294967295,k.g[0]=k.g[0]+g&4294967295,k.g[1]=k.g[1]+(I+(S<<21&4294967295|S>>>11))&4294967295,k.g[2]=k.g[2]+I&4294967295,k.g[3]=k.g[3]+T&4294967295}r.prototype.u=function(k,g){g===void 0&&(g=k.length);for(var b=g-this.blockSize,j=this.B,I=this.h,T=0;T<g;){if(I==0)for(;T<=b;)i(this,k,T),T+=this.blockSize;if(typeof k=="string"){for(;T<g;)if(j[I++]=k.charCodeAt(T++),I==this.blockSize){i(this,j),I=0;break}}else for(;T<g;)if(j[I++]=k[T++],I==this.blockSize){i(this,j),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var g=1;g<k.length-8;++g)k[g]=0;var b=8*this.o;for(g=k.length-8;g<k.length;++g)k[g]=b&255,b/=256;for(this.u(k),k=Array(16),g=b=0;4>g;++g)for(var j=0;32>j;j+=8)k[b++]=this.g[g]>>>j&255;return k};function s(k,g){var b=c;return Object.prototype.hasOwnProperty.call(b,k)?b[k]:b[k]=g(k)}function l(k,g){this.h=g;for(var b=[],j=!0,I=k.length-1;0<=I;I--){var T=k[I]|0;j&&T==g||(b[I]=T,j=!1)}this.g=b}var c={};function u(k){return-128<=k&&128>k?s(k,function(g){return new l([g|0],0>g?-1:0)}):new l([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return v;if(0>k)return A(h(-k));for(var g=[],b=1,j=0;k>=b;j++)g[j]=k/b|0,b*=4294967296;return new l(g,0)}function x(k,g){if(k.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(k.charAt(0)=="-")return A(x(k.substring(1),g));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=h(Math.pow(g,8)),j=v,I=0;I<k.length;I+=8){var T=Math.min(8,k.length-I),S=parseInt(k.substring(I,I+T),g);8>T?(T=h(Math.pow(g,T)),j=j.j(T).add(h(S))):(j=j.j(b),j=j.add(h(S)))}return j}var v=u(0),w=u(1),E=u(16777216);e=l.prototype,e.m=function(){if(P(this))return-A(this).m();for(var k=0,g=1,b=0;b<this.g.length;b++){var j=this.i(b);k+=(0<=j?j:4294967296+j)*g,g*=4294967296}return k},e.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(P(this))return"-"+A(this).toString(k);for(var g=h(Math.pow(k,6)),b=this,j="";;){var I=C(b,g).g;b=_(b,I.j(g));var T=((0<b.g.length?b.g[0]:b.h)>>>0).toString(k);if(b=I,N(b))return T+j;for(;6>T.length;)T="0"+T;j=T+j}},e.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(var g=0;g<k.g.length;g++)if(k.g[g]!=0)return!1;return!0}function P(k){return k.h==-1}e.l=function(k){return k=_(this,k),P(k)?-1:N(k)?0:1};function A(k){for(var g=k.g.length,b=[],j=0;j<g;j++)b[j]=~k.g[j];return new l(b,~k.h).add(w)}e.abs=function(){return P(this)?A(this):this},e.add=function(k){for(var g=Math.max(this.g.length,k.g.length),b=[],j=0,I=0;I<=g;I++){var T=j+(this.i(I)&65535)+(k.i(I)&65535),S=(T>>>16)+(this.i(I)>>>16)+(k.i(I)>>>16);j=S>>>16,T&=65535,S&=65535,b[I]=S<<16|T}return new l(b,b[b.length-1]&-2147483648?-1:0)};function _(k,g){return k.add(A(g))}e.j=function(k){if(N(this)||N(k))return v;if(P(this))return P(k)?A(this).j(A(k)):A(A(this).j(k));if(P(k))return A(this.j(A(k)));if(0>this.l(E)&&0>k.l(E))return h(this.m()*k.m());for(var g=this.g.length+k.g.length,b=[],j=0;j<2*g;j++)b[j]=0;for(j=0;j<this.g.length;j++)for(var I=0;I<k.g.length;I++){var T=this.i(j)>>>16,S=this.i(j)&65535,me=k.i(I)>>>16,Kn=k.i(I)&65535;b[2*j+2*I]+=S*Kn,m(b,2*j+2*I),b[2*j+2*I+1]+=T*Kn,m(b,2*j+2*I+1),b[2*j+2*I+1]+=S*me,m(b,2*j+2*I+1),b[2*j+2*I+2]+=T*me,m(b,2*j+2*I+2)}for(j=0;j<g;j++)b[j]=b[2*j+1]<<16|b[2*j];for(j=g;j<2*g;j++)b[j]=0;return new l(b,0)};function m(k,g){for(;(k[g]&65535)!=k[g];)k[g+1]+=k[g]>>>16,k[g]&=65535,g++}function y(k,g){this.g=k,this.h=g}function C(k,g){if(N(g))throw Error("division by zero");if(N(k))return new y(v,v);if(P(k))return g=C(A(k),g),new y(A(g.g),A(g.h));if(P(g))return g=C(k,A(g)),new y(A(g.g),g.h);if(30<k.g.length){if(P(k)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var b=w,j=g;0>=j.l(k);)b=L(b),j=L(j);var I=z(b,1),T=z(j,1);for(j=z(j,2),b=z(b,2);!N(j);){var S=T.add(j);0>=S.l(k)&&(I=I.add(b),T=S),j=z(j,1),b=z(b,1)}return g=_(k,I.j(g)),new y(I,g)}for(I=v;0<=k.l(g);){for(b=Math.max(1,Math.floor(k.m()/g.m())),j=Math.ceil(Math.log(b)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),T=h(b),S=T.j(g);P(S)||0<S.l(k);)b-=j,T=h(b),S=T.j(g);N(T)&&(T=w),I=I.add(T),k=_(k,S)}return new y(I,k)}e.A=function(k){return C(this,k).h},e.and=function(k){for(var g=Math.max(this.g.length,k.g.length),b=[],j=0;j<g;j++)b[j]=this.i(j)&k.i(j);return new l(b,this.h&k.h)},e.or=function(k){for(var g=Math.max(this.g.length,k.g.length),b=[],j=0;j<g;j++)b[j]=this.i(j)|k.i(j);return new l(b,this.h|k.h)},e.xor=function(k){for(var g=Math.max(this.g.length,k.g.length),b=[],j=0;j<g;j++)b[j]=this.i(j)^k.i(j);return new l(b,this.h^k.h)};function L(k){for(var g=k.g.length+1,b=[],j=0;j<g;j++)b[j]=k.i(j)<<1|k.i(j-1)>>>31;return new l(b,k.h)}function z(k,g){var b=g>>5;g%=32;for(var j=k.g.length-b,I=[],T=0;T<j;T++)I[T]=0<g?k.i(T+b)>>>g|k.i(T+b+1)<<32-g:k.i(T+b);return new l(I,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=x,ty=l}).apply(typeof bf<"u"?bf:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,d,p){return o==Array.prototype||o==Object.prototype||(o[d]=p.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var d=0;d<o.length;++d){var p=o[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(o,d){if(d)e:{var p=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var R=o[f];if(!(R in p))break e;p=p[R]}o=o[o.length-1],f=p[o],d=d(f),d!=f&&d!=null&&t(p,o,{configurable:!0,writable:!0,value:d})}}function s(o,d){o instanceof String&&(o+="");var p=0,f=!1,R={next:function(){if(!f&&p<o.length){var D=p++;return{value:d(D,o[D]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function u(o){var d=typeof o;return d=d!="object"?d:o?Array.isArray(o)?"array":d:"null",d=="array"||d=="object"&&typeof o.length=="number"}function h(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function x(o,d,p){return o.call.apply(o.bind,arguments)}function v(o,d,p){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),o.apply(d,R)}}return function(){return o.apply(d,arguments)}}function w(o,d,p){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?x:v,w.apply(null,arguments)}function E(o,d){var p=Array.prototype.slice.call(arguments,1);return function(){var f=p.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,d){function p(){}p.prototype=d.prototype,o.aa=d.prototype,o.prototype=new p,o.prototype.constructor=o,o.Qb=function(f,R,D){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return d.prototype[R].apply(f,U)}}function P(o){const d=o.length;if(0<d){const p=Array(d);for(let f=0;f<d;f++)p[f]=o[f];return p}return[]}function A(o,d){for(let p=1;p<arguments.length;p++){const f=arguments[p];if(u(f)){const R=o.length||0,D=f.length||0;o.length=R+D;for(let U=0;U<D;U++)o[R+U]=f[U]}else o.push(f)}}class _{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function m(o){return/^[\s\xa0]*$/.test(o)}function y(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function C(o){return C[" "](o),o}C[" "]=function(){};var L=y().indexOf("Gecko")!=-1&&!(y().toLowerCase().indexOf("webkit")!=-1&&y().indexOf("Edge")==-1)&&!(y().indexOf("Trident")!=-1||y().indexOf("MSIE")!=-1)&&y().indexOf("Edge")==-1;function z(o,d,p){for(const f in o)d.call(p,o[f],f,o)}function k(o,d){for(const p in o)d.call(void 0,o[p],p,o)}function g(o){const d={};for(const p in o)d[p]=o[p];return d}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(o,d){let p,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(p in f)o[p]=f[p];for(let D=0;D<b.length;D++)p=b[D],Object.prototype.hasOwnProperty.call(f,p)&&(o[p]=f[p])}}function I(o){var d=1;o=o.split(":");const p=[];for(;0<d&&o.length;)p.push(o.shift()),d--;return o.length&&p.push(o.join(":")),p}function T(o){c.setTimeout(()=>{throw o},0)}function S(){var o=H;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,p){const f=Kn.get();f.set(d,p),this.h?this.h.next=f:this.g=f,this.h=f}}var Kn=new _(()=>new ai,o=>o.reset());class ai{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,F=!1,H=new me,W=()=>{const o=c.Promise.resolve(void 0);zt=()=>{o.then(oe)}};var oe=()=>{for(var o;o=S();){try{o.h.call(o.g)}catch(p){T(p)}var d=Kn;d.j(o),100>d.h&&(d.h++,o.next=d.g,d.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const p=()=>{};c.addEventListener("test",p,d),c.removeEventListener("test",p,d)}catch{}return o}();function Ut(o,d){if(de.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var p=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget){if(L){e:{try{C(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else p=="mouseover"?d=o.fromElement:p=="mouseout"&&(d=o.toElement);this.relatedTarget=d,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ft[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ut.aa.h.call(this)}}N(Ut,de);var Ft={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),wy=0;function _y(o,d,p,f,R){this.listener=o,this.proxy=null,this.src=d,this.type=p,this.capture=!!f,this.ha=R,this.key=++wy,this.da=this.fa=!1}function Is(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ps(o){this.src=o,this.g={},this.h=0}Ps.prototype.add=function(o,d,p,f,R){var D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);var U=$a(o,d,f,R);return-1<U?(d=o[U],p||(d.fa=!1)):(d=new _y(d,this.src,D,!!f,R),d.fa=p,o.push(d)),d};function Fa(o,d){var p=d.type;if(p in o.g){var f=o.g[p],R=Array.prototype.indexOf.call(f,d,void 0),D;(D=0<=R)&&Array.prototype.splice.call(f,R,1),D&&(Is(d),o.g[p].length==0&&(delete o.g[p],o.h--))}}function $a(o,d,p,f){for(var R=0;R<o.length;++R){var D=o[R];if(!D.da&&D.listener==d&&D.capture==!!p&&D.ha==f)return R}return-1}var Ba="closure_lm_"+(1e6*Math.random()|0),Va={};function Id(o,d,p,f,R){if(Array.isArray(d)){for(var D=0;D<d.length;D++)Id(o,d[D],p,f,R);return null}return p=Ad(p),o&&o[$t]?o.K(d,p,h(f)?!!f.capture:!1,R):by(o,d,p,!1,f,R)}function by(o,d,p,f,R,D){if(!d)throw Error("Invalid event type");var U=h(R)?!!R.capture:!!R,Z=Wa(o);if(Z||(o[Ba]=Z=new Ps(o)),p=Z.add(d,p,f,U,D),p.proxy)return p;if(f=ky(),p.proxy=f,f.src=o,f.listener=p,o.addEventListener)Mt||(R=U),R===void 0&&(R=!1),o.addEventListener(d.toString(),f,R);else if(o.attachEvent)o.attachEvent(Rd(d.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ky(){function o(p){return d.call(o.src,o.listener,p)}const d=Ey;return o}function Pd(o,d,p,f,R){if(Array.isArray(d))for(var D=0;D<d.length;D++)Pd(o,d[D],p,f,R);else f=h(f)?!!f.capture:!!f,p=Ad(p),o&&o[$t]?(o=o.i,d=String(d).toString(),d in o.g&&(D=o.g[d],p=$a(D,p,f,R),-1<p&&(Is(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete o.g[d],o.h--)))):o&&(o=Wa(o))&&(d=o.g[d.toString()],o=-1,d&&(o=$a(d,p,f,R)),(p=-1<o?d[o]:null)&&Ha(p))}function Ha(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[$t])Fa(d.i,o);else{var p=o.type,f=o.proxy;d.removeEventListener?d.removeEventListener(p,f,o.capture):d.detachEvent?d.detachEvent(Rd(p),f):d.addListener&&d.removeListener&&d.removeListener(f),(p=Wa(d))?(Fa(p,o),p.h==0&&(p.src=null,d[Ba]=null)):Is(o)}}}function Rd(o){return o in Va?Va[o]:Va[o]="on"+o}function Ey(o,d){if(o.da)o=!0;else{d=new Ut(d,this);var p=o.listener,f=o.ha||o.src;o.fa&&Ha(o),o=p.call(f,d)}return o}function Wa(o){return o=o[Ba],o instanceof Ps?o:null}var qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ad(o){return typeof o=="function"?o:(o[qa]||(o[qa]=function(d){return o.handleEvent(d)}),o[qa])}function je(){Q.call(this),this.i=new Ps(this),this.M=this,this.F=null}N(je,Q),je.prototype[$t]=!0,je.prototype.removeEventListener=function(o,d,p,f){Pd(this,o,d,p,f)};function Oe(o,d){var p,f=o.F;if(f)for(p=[];f;f=f.F)p.push(f);if(o=o.M,f=d.type||d,typeof d=="string")d=new de(d,o);else if(d instanceof de)d.target=d.target||o;else{var R=d;d=new de(f,o),j(d,R)}if(R=!0,p)for(var D=p.length-1;0<=D;D--){var U=d.g=p[D];R=Rs(U,f,!0,d)&&R}if(U=d.g=o,R=Rs(U,f,!0,d)&&R,R=Rs(U,f,!1,d)&&R,p)for(D=0;D<p.length;D++)U=d.g=p[D],R=Rs(U,f,!1,d)&&R}je.prototype.N=function(){if(je.aa.N.call(this),this.i){var o=this.i,d;for(d in o.g){for(var p=o.g[d],f=0;f<p.length;f++)Is(p[f]);delete o.g[d],o.h--}}this.F=null},je.prototype.K=function(o,d,p,f){return this.i.add(String(o),d,!1,p,f)},je.prototype.L=function(o,d,p,f){return this.i.add(String(o),d,!0,p,f)};function Rs(o,d,p,f){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,D=0;D<d.length;++D){var U=d[D];if(U&&!U.da&&U.capture==p){var Z=U.listener,be=U.ha||U.src;U.fa&&Fa(o.i,U),R=Z.call(be,f)!==!1&&R}}return R&&!f.defaultPrevented}function Od(o,d,p){if(typeof o=="function")p&&(o=w(o,p));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(o,d||0)}function Dd(o){o.g=Od(()=>{o.g=null,o.i&&(o.i=!1,Dd(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class Sy extends Q{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Dd(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(o){Q.call(this),this.h=o,this.g={}}N(li,Q);var Ld=[];function zd(o){z(o.g,function(d,p){this.g.hasOwnProperty(p)&&Ha(d)},o),o.g={}}li.prototype.N=function(){li.aa.N.call(this),zd(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ka=c.JSON.stringify,jy=c.JSON.parse,Ny=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ga(){}Ga.prototype.h=null;function Md(o){return o.h||(o.h=o.i())}function Ty(){}var ci={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xa(){de.call(this,"d")}N(Xa,de);function Ya(){de.call(this,"c")}N(Ya,de);var vr={},Ud=null;function Ja(){return Ud=Ud||new je}vr.La="serverreachability";function Fd(o){de.call(this,vr.La,o)}N(Fd,de);function ui(o){const d=Ja();Oe(d,new Fd(d))}vr.STAT_EVENT="statevent";function $d(o,d){de.call(this,vr.STAT_EVENT,o),this.stat=d}N($d,de);function De(o){const d=Ja();Oe(d,new $d(d,o))}vr.Ma="timingevent";function Bd(o,d){de.call(this,vr.Ma,o),this.size=d}N(Bd,de);function di(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},d)}function hi(){this.g=!0}hi.prototype.xa=function(){this.g=!1};function Cy(o,d,p,f,R,D){o.info(function(){if(o.g)if(D)for(var U="",Z=D.split("&"),be=0;be<Z.length;be++){var X=Z[be].split("=");if(1<X.length){var Ne=X[0];X=X[1];var Te=Ne.split("_");U=2<=Te.length&&Te[1]=="type"?U+(Ne+"="+X+"&"):U+(Ne+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+d+`
`+p+`
`+U})}function Iy(o,d,p,f,R,D,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+d+`
`+p+`
`+D+" "+U})}function yr(o,d,p,f){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ry(o,p)+(f?" "+f:"")})}function Py(o,d){o.info(function(){return"TIMEOUT: "+d})}hi.prototype.info=function(){};function Ry(o,d){if(!o.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(o=0;o<p.length;o++)if(Array.isArray(p[o])){var f=p[o];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return Ka(p)}catch{return d}}var Qa={NO_ERROR:0,TIMEOUT:8},Ay={},Za;function As(){}N(As,Ga),As.prototype.g=function(){return new XMLHttpRequest},As.prototype.i=function(){return{}},Za=new As;function dn(o,d,p,f){this.j=o,this.i=d,this.l=p,this.R=f||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vd}function Vd(){this.i=null,this.g="",this.h=!1}var Hd={},el={};function tl(o,d,p){o.L=1,o.v=zs(Bt(d)),o.m=p,o.P=!0,Wd(o,null)}function Wd(o,d){o.F=Date.now(),Os(o),o.A=Bt(o.v);var p=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),sh(p.i,"t",f),o.C=0,p=o.j.J,o.h=new Vd,o.g=kh(o.j,p?d:null,!o.m),0<o.O&&(o.M=new Sy(w(o.Y,o,o.g),o.O)),d=o.U,p=o.g,f=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ld[0]=R.toString()),R=Ld);for(var D=0;D<R.length;D++){var U=Id(p,R[D],f||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,d)):(o.u="GET",o.g.ea(o.A,o.u,null,d)),ui(),Cy(o.i,o.u,o.A,o.l,o.R,o.m)}dn.prototype.ca=function(o){o=o.target;const d=this.M;d&&Vt(o)==3?d.j():this.Y(o)},dn.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Vt(this.g);var d=this.g.Ba();const _r=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||hh(this.g)))){this.J||Te!=4||d==7||(d==8||0>=_r?ui(3):ui(2)),nl(this);var p=this.g.Z();this.X=p;t:if(qd(this)){var f=hh(this.g);o="";var R=f.length,D=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),pi(this);var U="";break t}this.h.i=new c.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,o+=this.h.i.decode(f[d],{stream:!(D&&d==R-1)});f.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=p==200,Iy(this.i,this.u,this.A,this.l,this.R,Te,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,be=this.g;if((Z=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(Z)){var X=Z;break t}}X=null}if(p=X)yr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,p);else{this.o=!1,this.s=3,De(12),Gn(this),pi(this);break e}}if(this.P){p=!0;let ct;for(;!this.J&&this.C<U.length;)if(ct=Oy(this,U),ct==el){Te==4&&(this.s=4,De(14),p=!1),yr(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Hd){this.s=4,De(15),yr(this.i,this.l,U,"[Invalid Chunk]"),p=!1;break}else yr(this.i,this.l,ct,null),rl(this,ct);if(qd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||U.length!=0||this.h.h||(this.s=1,De(16),p=!1),this.o=this.o&&p,!p)yr(this.i,this.l,U,"[Invalid Chunked Response]"),Gn(this),pi(this);else if(0<U.length&&!this.W){this.W=!0;var Ne=this.j;Ne.g==this&&Ne.ba&&!Ne.M&&(Ne.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),cl(Ne),Ne.M=!0,De(11))}}else yr(this.i,this.l,U,null),rl(this,U);Te==4&&Gn(this),this.o&&!this.J&&(Te==4?xh(this.j,this):(this.o=!1,Os(this)))}else Jy(this.g),p==400&&0<U.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Gn(this),pi(this)}}}catch{}finally{}};function qd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Oy(o,d){var p=o.C,f=d.indexOf(`
`,p);return f==-1?el:(p=Number(d.substring(p,f)),isNaN(p)?Hd:(f+=1,f+p>d.length?el:(d=d.slice(f,f+p),o.C=f+p,d)))}dn.prototype.cancel=function(){this.J=!0,Gn(this)};function Os(o){o.S=Date.now()+o.I,Kd(o,o.I)}function Kd(o,d){if(o.B!=null)throw Error("WatchDog timer not null");o.B=di(w(o.ba,o),d)}function nl(o){o.B&&(c.clearTimeout(o.B),o.B=null)}dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Py(this.i,this.A),this.L!=2&&(ui(),De(17)),Gn(this),this.s=2,pi(this)):Kd(this,this.S-o)};function pi(o){o.j.G==0||o.J||xh(o.j,o)}function Gn(o){nl(o);var d=o.M;d&&typeof d.ma=="function"&&d.ma(),o.M=null,zd(o.U),o.g&&(d=o.g,o.g=null,d.abort(),d.ma())}function rl(o,d){try{var p=o.j;if(p.G!=0&&(p.g==o||il(p.h,o))){if(!o.K&&il(p.h,o)&&p.G==3){try{var f=p.Da.g.parse(d)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<o.F)Vs(p),$s(p);else break e;ll(p),De(18)}}else p.za=R[1],0<p.za-p.T&&37500>R[2]&&p.F&&p.v==0&&!p.C&&(p.C=di(w(p.Za,p),6e3));if(1>=Yd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yn(p,11)}else if((o.K||p.g==o)&&Vs(p),!m(d))for(R=p.Da.g.parse(d),d=0;d<R.length;d++){let X=R[d];if(p.T=X[0],X=X[1],p.G==2)if(X[0]=="c"){p.K=X[1],p.ia=X[2];const Ne=X[3];Ne!=null&&(p.la=Ne,p.j.info("VER="+p.la));const Te=X[4];Te!=null&&(p.Aa=Te,p.j.info("SVER="+p.Aa));const _r=X[5];_r!=null&&typeof _r=="number"&&0<_r&&(f=1.5*_r,p.L=f,p.j.info("backChannelRequestTimeoutMs_="+f)),f=p;const ct=o.g;if(ct){const Hs=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var D=f.h;D.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(sl(D,D.h),D.h=null))}if(f.D){const ul=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(f.ya=ul,ne(f.I,f.D,ul))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-o.F,p.j.info("Handshake RTT: "+p.R+"ms")),f=p;var U=o;if(f.qa=bh(f,f.J?f.ia:null,f.W),U.K){Jd(f.h,U);var Z=U,be=f.L;be&&(Z.I=be),Z.B&&(nl(Z),Os(Z)),f.g=U}else vh(f);0<p.i.length&&Bs(p)}else X[0]!="stop"&&X[0]!="close"||Yn(p,7);else p.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?Yn(p,7):al(p):X[0]!="noop"&&p.l&&p.l.ta(X),p.v=0)}}ui(4)}catch{}}var Dy=class{constructor(o,d){this.g=o,this.map=d}};function Gd(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yd(o){return o.h?1:o.g?o.g.size:0}function il(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function sl(o,d){o.g?o.g.add(d):o.h=d}function Jd(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}Gd.prototype.cancel=function(){if(this.i=Qd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const p of o.g.values())d=d.concat(p.D);return d}return P(o.i)}function Ly(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var d=[],p=o.length,f=0;f<p;f++)d.push(o[f]);return d}d=[],p=0;for(f in o)d[p++]=o[f];return d}function zy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var d=[];o=o.length;for(var p=0;p<o;p++)d.push(p);return d}d=[],p=0;for(const f in o)d[p++]=f;return d}}}function Zd(o,d){if(o.forEach&&typeof o.forEach=="function")o.forEach(d,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,d,void 0);else for(var p=zy(o),f=Ly(o),R=f.length,D=0;D<R;D++)d.call(void 0,f[D],p&&p[D],o)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function My(o,d){if(o){o=o.split("&");for(var p=0;p<o.length;p++){var f=o[p].indexOf("="),R=null;if(0<=f){var D=o[p].substring(0,f);R=o[p].substring(f+1)}else D=o[p];d(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Xn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Xn){this.h=o.h,Ds(this,o.j),this.o=o.o,this.g=o.g,Ls(this,o.s),this.l=o.l;var d=o.i,p=new mi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),th(this,p),this.m=o.m}else o&&(d=String(o).match(eh))?(this.h=!1,Ds(this,d[1]||"",!0),this.o=fi(d[2]||""),this.g=fi(d[3]||"",!0),Ls(this,d[4]),this.l=fi(d[5]||"",!0),th(this,d[6]||"",!0),this.m=fi(d[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}Xn.prototype.toString=function(){var o=[],d=this.j;d&&o.push(gi(d,nh,!0),":");var p=this.g;return(p||d=="file")&&(o.push("//"),(d=this.o)&&o.push(gi(d,nh,!0),"@"),o.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&o.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&o.push("/"),o.push(gi(p,p.charAt(0)=="/"?$y:Fy,!0))),(p=this.i.toString())&&o.push("?",p),(p=this.m)&&o.push("#",gi(p,Vy)),o.join("")};function Bt(o){return new Xn(o)}function Ds(o,d,p){o.j=p?fi(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function Ls(o,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);o.s=d}else o.s=null}function th(o,d,p){d instanceof mi?(o.i=d,Hy(o.i,o.h)):(p||(d=gi(d,By)),o.i=new mi(d,o.h))}function ne(o,d,p){o.i.set(d,p)}function zs(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function fi(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gi(o,d,p){return typeof o=="string"?(o=encodeURI(o).replace(d,Uy),p&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Uy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var nh=/[#\/\?@]/g,Fy=/[#\?:]/g,$y=/[#\?]/g,By=/[#\?@]/g,Vy=/#/g;function mi(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&My(o.i,function(d,p){o.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}e=mi.prototype,e.add=function(o,d){hn(this),this.i=null,o=xr(this,o);var p=this.g.get(o);return p||this.g.set(o,p=[]),p.push(d),this.h+=1,this};function rh(o,d){hn(o),d=xr(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function ih(o,d){return hn(o),d=xr(o,d),o.g.has(d)}e.forEach=function(o,d){hn(this),this.g.forEach(function(p,f){p.forEach(function(R){o.call(d,R,f,this)},this)},this)},e.na=function(){hn(this);const o=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let f=0;f<d.length;f++){const R=o[f];for(let D=0;D<R.length;D++)p.push(d[f])}return p},e.V=function(o){hn(this);let d=[];if(typeof o=="string")ih(this,o)&&(d=d.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let p=0;p<o.length;p++)d=d.concat(o[p])}return d},e.set=function(o,d){return hn(this),this.i=null,o=xr(this,o),ih(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},e.get=function(o,d){return o?(o=this.V(o),0<o.length?String(o[0]):d):d};function sh(o,d,p){rh(o,d),0<p.length&&(o.i=null,o.g.set(xr(o,d),P(p)),o.h+=p.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var f=d[p];const D=encodeURIComponent(String(f)),U=this.V(f);for(f=0;f<U.length;f++){var R=D;U[f]!==""&&(R+="="+encodeURIComponent(String(U[f]))),o.push(R)}}return this.i=o.join("&")};function xr(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function Hy(o,d){d&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(p,f){var R=f.toLowerCase();f!=R&&(rh(this,f),sh(this,R,p))},o)),o.j=d}function Wy(o,d){const p=new hi;if(c.Image){const f=new Image;f.onload=E(pn,p,"TestLoadImage: loaded",!0,d,f),f.onerror=E(pn,p,"TestLoadImage: error",!1,d,f),f.onabort=E(pn,p,"TestLoadImage: abort",!1,d,f),f.ontimeout=E(pn,p,"TestLoadImage: timeout",!1,d,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else d(!1)}function qy(o,d){const p=new hi,f=new AbortController,R=setTimeout(()=>{f.abort(),pn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:f.signal}).then(D=>{clearTimeout(R),D.ok?pn(p,"TestPingServer: ok",!0,d):pn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),pn(p,"TestPingServer: error",!1,d)})}function pn(o,d,p,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(p)}catch{}}function Ky(){this.g=new Ny}function Gy(o,d,p){const f=p||"";try{Zd(o,function(R,D){let U=R;h(R)&&(U=Ka(R)),d.push(f+D+"="+encodeURIComponent(U))})}catch(R){throw d.push(f+"type="+encodeURIComponent("_badmap")),R}}function Ms(o){this.l=o.Ub||null,this.j=o.eb||!1}N(Ms,Ga),Ms.prototype.g=function(){return new Us(this.l,this.j)},Ms.prototype.i=function(o){return function(){return o}}({});function Us(o,d){je.call(this),this.D=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Us,je),e=Us.prototype,e.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=d,this.readyState=1,yi(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(d.body=o),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?vi(this):yi(this),this.readyState==3&&oh(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,vi(this))},e.Qa=function(o){this.g&&(this.response=o,vi(this))},e.ga=function(){this.g&&vi(this)};function vi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,yi(o)}e.setRequestHeader=function(o,d){this.u.append(o,d)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,o.push(p[0]+": "+p[1]),p=d.next();return o.join(`\r
`)};function yi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ah(o){let d="";return z(o,function(p,f){d+=f,d+=":",d+=p,d+=`\r
`}),d}function ol(o,d,p){e:{for(f in p){var f=!1;break e}f=!0}f||(p=ah(p),typeof o=="string"?p!=null&&encodeURIComponent(String(p)):ne(o,d,p))}function he(o){je.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(he,je);var Xy=/^https?$/i,Yy=["POST","PUT"];e=he.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,d,p,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Za.g(),this.v=this.o?Md(this.o):Md(Za),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(D){lh(this,D);return}if(o=p||"",p=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)p.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const D of f.keys())p.set(D,f.get(D));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Yy,d,void 0))||f||R||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of p)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dh(this),this.u=!0,this.g.send(o),this.u=!1}catch(D){lh(this,D)}};function lh(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.m=5,ch(o),Fs(o)}function ch(o){o.A||(o.A=!0,Oe(o,"complete"),Oe(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Oe(this,"complete"),Oe(this,"abort"),Fs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),he.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},e.bb=function(){uh(this)};function uh(o){if(o.h&&typeof l<"u"&&(!o.v[1]||Vt(o)!=4||o.Z()!=2)){if(o.u&&Vt(o)==4)Od(o.Ea,0,o);else if(Oe(o,"readystatechange"),Vt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var f;if(f=U===0){var R=String(o.D).match(eh)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),f=!Xy.test(R?R.toLowerCase():"")}p=f}if(p)Oe(o,"complete"),Oe(o,"success");else{o.m=6;try{var D=2<Vt(o)?o.g.statusText:""}catch{D=""}o.l=D+" ["+o.Z()+"]",ch(o)}}finally{Fs(o)}}}}function Fs(o,d){if(o.g){dh(o);const p=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,d||Oe(o,"ready");try{p.onreadystatechange=f}catch{}}}function dh(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Vt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),jy(d)}};function hh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Jy(o){const d={};o=(o.g&&2<=Vt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(m(o[f]))continue;var p=I(o[f]);const R=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=d[R]||[];d[R]=D,D.push(p)}k(d,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xi(o,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[o]||d}function ph(o){this.Aa=0,this.i=[],this.j=new hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xi("baseRetryDelayMs",5e3,o),this.cb=xi("retryDelaySeedMs",1e4,o),this.Wa=xi("forwardChannelMaxRetries",2,o),this.wa=xi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Gd(o&&o.concurrentRequestLimit),this.Da=new Ky,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=ph.prototype,e.la=8,e.G=1,e.connect=function(o,d,p,f){De(0),this.W=o,this.H=d||{},p&&f!==void 0&&(this.H.OSID=p,this.H.OAID=f),this.F=this.X,this.I=bh(this,null,this.W),Bs(this)};function al(o){if(fh(o),o.G==3){var d=o.U++,p=Bt(o.I);if(ne(p,"SID",o.K),ne(p,"RID",d),ne(p,"TYPE","terminate"),wi(o,p),d=new dn(o,o.j,d),d.L=2,d.v=zs(Bt(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=d.v,p=!0),p||(d.g=kh(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Os(d)}_h(o)}function $s(o){o.g&&(cl(o),o.g.cancel(),o.g=null)}function fh(o){$s(o),o.u&&(c.clearTimeout(o.u),o.u=null),Vs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Bs(o){if(!Xd(o.h)&&!o.s){o.s=!0;var d=o.Ga;zt||W(),F||(zt(),F=!0),H.add(d,o),o.B=0}}function Qy(o,d){return Yd(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=d.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=di(w(o.Ga,o,d),wh(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new dn(this,this.j,o);let D=this.o;if(this.S&&(D?(D=g(D),j(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var f=this.i[p];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(d+=f,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=mh(this,R,d),p=Bt(this.I),ne(p,"RID",o),ne(p,"CVER",22),this.D&&ne(p,"X-HTTP-Session-Id",this.D),wi(this,p),D&&(this.O?d="headers="+encodeURIComponent(String(ah(D)))+"&"+d:this.m&&ol(p,this.m,D)),sl(this.h,R),this.Ua&&ne(p,"TYPE","init"),this.P?(ne(p,"$req",d),ne(p,"SID","null"),R.T=!0,tl(R,p,null)):tl(R,p,d),this.G=2}}else this.G==3&&(o?gh(this,o):this.i.length==0||Xd(this.h)||gh(this))};function gh(o,d){var p;d?p=d.l:p=o.U++;const f=Bt(o.I);ne(f,"SID",o.K),ne(f,"RID",p),ne(f,"AID",o.T),wi(o,f),o.m&&o.o&&ol(f,o.m,o.o),p=new dn(o,o.j,p,o.B+1),o.m===null&&(p.H=o.o),d&&(o.i=d.D.concat(o.i)),d=mh(o,p,1e3),p.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),sl(o.h,p),tl(p,f,d)}function wi(o,d){o.H&&z(o.H,function(p,f){ne(d,f,p)}),o.l&&Zd({},function(p,f){ne(d,f,p)})}function mh(o,d,p){p=Math.min(o.i.length,p);var f=o.l?w(o.l.Na,o.l,o):null;e:{var R=o.i;let D=-1;for(;;){const U=["count="+p];D==-1?0<p?(D=R[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let Z=!0;for(let be=0;be<p;be++){let X=R[be].g;const Ne=R[be].map;if(X-=D,0>X)D=Math.max(0,R[be].g-100),Z=!1;else try{Gy(Ne,U,"req"+X+"_")}catch{f&&f(Ne)}}if(Z){f=U.join("&");break e}}}return o=o.i.splice(0,p),d.D=o,f}function vh(o){if(!o.g&&!o.u){o.Y=1;var d=o.Fa;zt||W(),F||(zt(),F=!0),H.add(d,o),o.v=0}}function ll(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=di(w(o.Fa,o),wh(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=di(w(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),$s(this),yh(this))};function cl(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function yh(o){o.g=new dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var d=Bt(o.qa);ne(d,"RID","rpc"),ne(d,"SID",o.K),ne(d,"AID",o.T),ne(d,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(d,"TO",o.ja),ne(d,"TYPE","xmlhttp"),wi(o,d),o.m&&o.o&&ol(d,o.m,o.o),o.L&&(o.g.I=o.L);var p=o.g;o=o.ia,p.L=1,p.v=zs(Bt(d)),p.m=null,p.P=!0,Wd(p,o)}e.Za=function(){this.C!=null&&(this.C=null,$s(this),ll(this),De(19))};function Vs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function xh(o,d){var p=null;if(o.g==d){Vs(o),cl(o),o.g=null;var f=2}else if(il(o.h,d))p=d.D,Jd(o.h,d),f=1;else return;if(o.G!=0){if(d.o)if(f==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var R=o.B;f=Ja(),Oe(f,new Bd(f,p)),Bs(o)}else vh(o);else if(R=d.s,R==3||R==0&&0<d.X||!(f==1&&Qy(o,d)||f==2&&ll(o)))switch(p&&0<p.length&&(d=o.h,d.i=d.i.concat(p)),R){case 1:Yn(o,5);break;case 4:Yn(o,10);break;case 3:Yn(o,6);break;default:Yn(o,2)}}}function wh(o,d){let p=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(p*=2),p*d}function Yn(o,d){if(o.j.info("Error code "+d),d==2){var p=w(o.fb,o),f=o.Xa;const R=!f;f=new Xn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ds(f,"https"),zs(f),R?Wy(f.toString(),p):qy(f.toString(),p)}else De(2);o.G=0,o.l&&o.l.sa(d),_h(o),fh(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function _h(o){if(o.G=0,o.ka=[],o.l){const d=Qd(o.h);(d.length!=0||o.i.length!=0)&&(A(o.ka,d),A(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function bh(o,d,p){var f=p instanceof Xn?Bt(p):new Xn(p);if(f.g!="")d&&(f.g=d+"."+f.g),Ls(f,f.s);else{var R=c.location;f=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var D=new Xn(null);f&&Ds(D,f),d&&(D.g=d),R&&Ls(D,R),p&&(D.l=p),f=D}return p=o.D,d=o.ya,p&&d&&ne(f,p,d),ne(f,"VER",o.la),wi(o,f),f}function kh(o,d,p){if(d&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Ca&&!o.pa?new he(new Ms({eb:p})):new he(o.pa),d.Ha(o.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}e=Eh.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function nt(o,d){je.call(this),this.g=new ph(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(o?o["X-WebChannel-Client-Profile"]=d.va:o={"X-WebChannel-Client-Profile":d.va}),this.g.S=o,(o=d&&d.Sb)&&!m(o)&&(this.g.m=o),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!m(d)&&(this.g.D=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new wr(this)}N(nt,je),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){al(this.g)},nt.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var p={};p.__data__=o,o=p}else this.u&&(p={},p.__data__=Ka(o),o=p);d.i.push(new Dy(d.Ya++,o)),d.G==3&&Bs(d)},nt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,nt.aa.N.call(this)};function Sh(o){Xa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const p in d){o=p;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}N(Sh,Xa);function jh(){Ya.call(this),this.status=1}N(jh,Ya);function wr(o){this.g=o}N(wr,Eh),wr.prototype.ua=function(){Oe(this.g,"a")},wr.prototype.ta=function(o){Oe(this.g,new Sh(o))},wr.prototype.sa=function(o){Oe(this.g,new jh)},wr.prototype.ra=function(){Oe(this.g,"b")},nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,Qa.NO_ERROR=0,Qa.TIMEOUT=8,Qa.HTTP_ERROR=6,Ay.COMPLETE="complete",Ty.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",je.prototype.listen=je.prototype.K,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const kf="@firebase/firestore";/**
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
 */let ze=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let Ts="10.14.0";/**
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
 */const Zr=new cd("@firebase/firestore");function ft(e,...t){if(Zr.logLevel<=Y.DEBUG){const n=t.map(_d);Zr.debug(`Firestore (${Ts}): ${e}`,...n)}}function ny(e,...t){if(Zr.logLevel<=Y.ERROR){const n=t.map(_d);Zr.error(`Firestore (${Ts}): ${e}`,...n)}}function Ck(e,...t){if(Zr.logLevel<=Y.WARN){const n=t.map(_d);Zr.warn(`Firestore (${Ts}): ${e}`,...n)}}function _d(e){if(typeof e=="string")return e;try{/**
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
 */function bd(e="Unexpected state"){const t=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+e;throw ny(t),new Error(t)}function qi(e,t){e||bd()}/**
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
 */const Ve={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class He extends Ot{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ki{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ry{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ik{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class Pk{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Rk{constructor(t){this.t=t,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qi(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ki,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{ft("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(ft("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ki)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(ft("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qi(typeof r.accessToken=="string"),new ry(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qi(t===null||typeof t=="string"),new ze(t)}}class Ak{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ok{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ak(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){qi(this.o===void 0);const r=s=>{s.error!=null&&ft("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,ft("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{ft("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ft("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(qi(typeof n.token=="string"),this.R=n.token,new Dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function zk(e){return e.name==="IndexedDbTransactionError"}class ca{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ca&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Ef,K;(K=Ef||(Ef={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ty([4294967295,4294967295],0);function Wl(){return typeof document<"u"?document:null}/**
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
 */class Mk{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ft("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const l=Date.now()+r,c=new kd(t,n,l,i,s);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(Ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Sf,jf;(jf=Sf||(Sf={})).ea="default",jf.Cache="cache";/**
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
 */function Uk(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Nf=new Map;function Fk(e,t,n,r){if(t===!0&&r===!0)throw new He(Ve.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function $k(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":bd()}function Bk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new He(Ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$k(e);throw new He(Ve.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Tf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new He(Ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new He(Ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fk("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uk((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new He(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class iy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new He(Ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new He(Ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ik;switch(r.type){case"firstParty":return new Ok(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new He(Ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nf.get(n);r&&(ft("ComponentProvider","Removing Datastore"),Nf.delete(n),r.terminate())}(this),Promise.resolve()}}function Vk(e,t,n,r={}){var i;const s=(e=Bk(e,iy))._getSettings(),l=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==l&&Ck("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:l,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ze.MOCK_USER;else{c=gv(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new He(Ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ze(h)}e._authCredentials=new Pk(new ry(c,u))}}/**
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
 */class Cf{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mk(this,"async_queue_retry"),this.Vu=()=>{const r=Wl();r&&ft("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Wl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Wl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ki;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!zk(t))throw t;ft("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw ny("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=kd.createAndSchedule(this,t,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&bd()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Hk extends iy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Cf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Cf(t),this._firestoreClient=void 0,await t}}}function Wk(e,t){const n=typeof e=="object"?e:dd(),r=typeof e=="string"?e:"(default)",i=Aa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hv("firestore");s&&Vk(i,...s)}return i}(function(t,n=!0){(function(i){Ts=i})(mr),ur(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),c=new Hk(new Rk(r.getProvider("auth-internal")),new Lk(r.getProvider("app-check-internal")),function(h,x){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new He(Ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(h.options.projectId,x)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ct(kf,"4.7.3",t),Ct(kf,"4.7.3","esm2017")})();/**
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
 */const sy="firebasestorage.googleapis.com",qk="storageBucket",Kk=2*60*1e3,Gk=10*60*1e3;/**
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
 */class Lt extends Ot{constructor(t,n,r=0){super(ql(t),`Firebase Storage: ${n} (${ql(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ql(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Rt;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Rt||(Rt={}));function ql(e){return"storage/"+e}function Xk(){const e="An unknown error occurred, please check the error payload for server response.";return new Lt(Rt.UNKNOWN,e)}function Yk(){return new Lt(Rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jk(){return new Lt(Rt.CANCELED,"User canceled the upload/download.")}function Qk(e){return new Lt(Rt.INVALID_URL,"Invalid URL '"+e+"'.")}function Zk(e){return new Lt(Rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function If(e){return new Lt(Rt.INVALID_ARGUMENT,e)}function oy(){return new Lt(Rt.APP_DELETED,"The Firebase app was deleted.")}function eE(e){return new Lt(Rt.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=gt.makeFromUrl(t,n)}catch{return new gt(t,"")}if(r.path==="")return r;throw Zk(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const l="(/(.*))?$",c=new RegExp("^gs://"+i+l,"i"),u={bucket:1,path:3};function h(C){C.path_=decodeURIComponent(C.path)}const x="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${v}/${x}/b/${i}/o${w}`,"i"),N={bucket:1,path:3},P=n===sy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",_=new RegExp(`^https?://${P}/${i}/${A}`,"i"),y=[{regex:c,indices:u,postModify:s},{regex:E,indices:N,postModify:h},{regex:_,indices:{bucket:1,path:2},postModify:h}];for(let C=0;C<y.length;C++){const L=y[C],z=L.regex.exec(t);if(z){const k=z[L.indices.bucket];let g=z[L.indices.path];g||(g=""),r=new gt(k,g),L.postModify(r);break}}if(r==null)throw Qk(t);return r}}class tE{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function nE(e,t,n){let r=1,i=null,s=null,l=!1,c=0;function u(){return c===2}let h=!1;function x(...A){h||(h=!0,t.apply(null,A))}function v(A){i=setTimeout(()=>{i=null,e(E,u())},A)}function w(){s&&clearTimeout(s)}function E(A,..._){if(h){w();return}if(A){w(),x.call(null,A,..._);return}if(u()||l){w(),x.call(null,A,..._);return}r<64&&(r*=2);let y;c===1?(c=2,y=0):y=(r+Math.random())*1e3,v(y)}let N=!1;function P(A){N||(N=!0,w(),!h&&(i!==null?(A||(c=2),clearTimeout(i),v(0)):A||(c=1)))}return v(0),s=setTimeout(()=>{l=!0,P(!0)},n),P}function rE(e){e(!1)}/**
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
 */function iE(e){return e!==void 0}function Pf(e,t,n,r){if(r<t)throw If(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw If(`Invalid value for '${e}'. Expected ${n} or less.`)}function sE(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ua;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ua||(ua={}));/**
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
 */function oE(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
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
 */class aE{constructor(t,n,r,i,s,l,c,u,h,x,v,w=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=x,this.connectionFactory_=v,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,N)=>{this.resolve_=E,this.reject_=N,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new uo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const l=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(l),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(l),this.pendingConnection_=null;const c=s.getErrorCode()===ua.NO_ERROR,u=s.getStatus();if(!c||oE(u,this.additionalRetryCodes_)&&this.retry){const x=s.getErrorCode()===ua.ABORT;r(!1,new uo(!1,null,x));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new uo(h,s))})},n=(r,i)=>{const s=this.resolve_,l=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());iE(u)?s(u):s()}catch(u){l(u)}else if(c!==null){const u=Xk();u.serverResponse=c.getErrorText(),this.errorCallback_?l(this.errorCallback_(c,u)):l(u)}else if(i.canceled){const u=this.appDelete_?oy():Jk();l(u)}else{const u=Yk();l(u)}};this.canceled_?n(!1,new uo(!1,null,!0)):this.backoffId_=nE(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&rE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uo{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function lE(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function cE(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function uE(e,t){t&&(e["X-Firebase-GMPID"]=t)}function dE(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function hE(e,t,n,r,i,s,l=!0){const c=sE(e.urlParams),u=e.url+c,h=Object.assign({},e.headers);return uE(h,t),lE(h,n),cE(h,s),dE(h,r),new aE(u,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,l)}/**
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
 */function pE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function fE(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class da{constructor(t,n){this._service=t,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new da(t,n)}get root(){const t=new gt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fE(this._location.path)}get storage(){return this._service}get parent(){const t=pE(this._location.path);if(t===null)return null;const n=new gt(this._location.bucket,t);return new da(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw eE(t)}}function Rf(e,t){const n=t==null?void 0:t[qk];return n==null?null:gt.makeFromBucketSpec(n,e)}function gE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:gv(i,e.app.options.projectId))}class mE{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=sy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Kk,this._maxUploadRetryTime=Gk,this._requests=new Set,i!=null?this._bucket=gt.makeFromBucketSpec(i,this._host):this._bucket=Rf(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,t):this._bucket=Rf(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Pf("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Pf("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new da(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new tE(oy());{const l=hE(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Af="@firebase/storage",Of="0.13.2";/**
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
 */const ay="storage";function vE(e=dd(),t){e=_t(e);const r=Aa(e,ay).getImmediate({identifier:t}),i=hv("storage");return i&&yE(r,...i),r}function yE(e,t,n,r={}){gE(e,t,n,r)}function xE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new mE(n,r,i,t,mr)}function wE(){ur(new $n(ay,xE,"PUBLIC").setMultipleInstances(!0)),Ct(Af,Of,""),Ct(Af,Of,"esm2017")}wE();const _E={apiKey:"AIzaSyBTkt9ypRouVlqBnQfgEgd5jznJmm_03MU",authDomain:"sistema-courier-saas.firebaseapp.com",projectId:"sistema-courier-saas",storageBucket:"sistema-courier-saas.firebasestorage.app",messagingSenderId:"483089332620",appId:"1:483089332620:web:50356bb56b9ae63b6dbea9"},Ed=yv(_E),Ci=Sk(Ed);Wk(Ed);vE(Ed);const ly=O.createContext(void 0),bE=({children:e})=>{const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,l]=O.useState(null);O.useEffect(()=>{const E=pb(Ci,N=>{n(N),i(!1)});return()=>E()},[]);const w={user:t,loading:r,error:s,login:async(E,N)=>{try{l(null),i(!0),await lb(Ci,E,N)}catch(P){const A=Kl(P.code);throw l(A),new Error(A)}finally{i(!1)}},register:async(E,N,P)=>{try{l(null),i(!0);const{user:A}=await ab(Ci,E,N);P&&await ub(A,{displayName:P})}catch(A){const _=Kl(A.code);throw l(_),new Error(_)}finally{i(!1)}},logout:async()=>{try{l(null),await fb(Ci)}catch(E){throw l("Error al cerrar sesión"),E}},resetPassword:async E=>{try{l(null),await ob(Ci,E)}catch(N){const P=Kl(N.code);throw l(P),new Error(P)}},clearError:()=>l(null)};return a.jsx(ly.Provider,{value:w,children:e})},cy=()=>{const e=O.useContext(ly);if(e===void 0)throw new Error("useAuth debe ser usado dentro de un AuthProvider");return e};function Kl(e){return{"auth/invalid-email":"El correo electrónico no es válido","auth/user-disabled":"Esta cuenta ha sido deshabilitada","auth/user-not-found":"No existe una cuenta con este correo","auth/wrong-password":"Contraseña incorrecta","auth/invalid-credential":"Credenciales inválidas","auth/email-already-in-use":"Este correo ya está registrado","auth/weak-password":"La contraseña debe tener al menos 6 caracteres","auth/too-many-requests":"Demasiados intentos. Intenta más tarde","auth/network-request-failed":"Error de conexión. Verifica tu internet"}[e]||"Error de autenticación"}const kt=({children:e,redirectTo:t="/login"})=>{const{user:n,loading:r}=cy(),i=cn();return r?a.jsxs("div",{className:"loading-container",style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",background:"#f3f4f6"},children:[a.jsx("div",{className:"loading-spinner",style:{width:"48px",height:"48px",border:"4px solid #e5e7eb",borderTopColor:"#3b82f6",borderRadius:"50%",animation:"spin 1s linear infinite"}}),a.jsx("style",{children:`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `})]}):n?a.jsx(a.Fragment,{children:e}):a.jsx(Eo,{to:t,state:{from:i},replace:!0})};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:u,...h},x)=>O.createElement("svg",{ref:x,...kE,width:i,height:i,stroke:r,strokeWidth:l?Number(s)*24/Number(i):s,className:["lucide",`lucide-${EE(e)}`,c].join(" "),...h},[...t.map(([v,w])=>O.createElement(v,w)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=V("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=V("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=V("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=V("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=V("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=V("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=V("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=V("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=V("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=V("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=V("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=V("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=V("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=V("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=V("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=V("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=V("PenSquare",[["path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1qinfi"}],["path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z",key:"w2jsv5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=V("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=V("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=V("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=V("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=V("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=V("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=V("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=V("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=V("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=V("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=V("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=V("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=V("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),WE=()=>{const e=[{name:"Starter",price:49,description:"Para pequeños couriers",features:["10 usuarios","500 paquetes/mes","3 agentes","20 couriers","Subdominio personalizado","Soporte por email"],popular:!1},{name:"Professional",price:149,description:"Para couriers en crecimiento",features:["50 usuarios","5,000 paquetes/mes","10 agentes","100 couriers","Branding personalizado","API Access","Soporte prioritario"],popular:!0},{name:"Enterprise",price:299,priceLabel:"Desde",description:"White Label completo",features:["Usuarios ilimitados","Paquetes ilimitados","Agentes ilimitados","Dominio propio","100% White Label","Emails personalizados","Soporte dedicado + SLA"],popular:!1}],t=[{icon:Zt,title:"Gestión de Paquetes",description:"Tracking en tiempo real, estados automáticos, notificaciones a clientes."},{icon:fa,title:"Red de Couriers",description:"Asigna entregas, monitorea rutas, gestiona comisiones y pagos."},{icon:Cs,title:"Portal de Clientes",description:"Tus clientes rastrean paquetes, reciben alertas y consultan facturas."},{icon:ei,title:"Multi-País",description:"Soporta operaciones internacionales, consolidación y reempaque."},{icon:UE,title:"Seguridad Enterprise",description:"Datos encriptados, backups automáticos, cumplimiento normativo."},{icon:HE,title:"API Completa",description:"Integra con tu e-commerce, ERP o cualquier sistema externo."}];return a.jsxs("div",{className:"landing-page",children:[a.jsxs("nav",{className:"navbar",children:[a.jsxs("div",{className:"nav-brand",children:[a.jsx(Zt,{size:32}),a.jsx("span",{children:"Sistema Courier"})]}),a.jsxs("div",{className:"nav-links",children:[a.jsx("a",{href:"#features",children:"Características"}),a.jsx("a",{href:"#pricing",children:"Precios"}),a.jsx(Re,{to:"/login",className:"btn-login",children:"Iniciar Sesión"}),a.jsx(Re,{to:"/register",className:"btn-cta",children:"Prueba Gratis"})]})]}),a.jsxs("section",{className:"hero",children:[a.jsxs("div",{className:"hero-content",children:[a.jsx("h1",{children:"La plataforma completa para tu empresa de courier"}),a.jsx("p",{children:"Gestiona paquetes, couriers, clientes y operaciones internacionales desde una sola plataforma. Lista para usar en minutos."}),a.jsxs("div",{className:"hero-buttons",children:[a.jsxs(Re,{to:"/register",className:"btn-primary",children:["Empezar Gratis ",a.jsx(ha,{size:20})]}),a.jsx("a",{href:"#demo",className:"btn-secondary",children:"Ver Demo"})]}),a.jsxs("div",{className:"hero-trust",children:[a.jsx("span",{children:"Confiado por +100 empresas de courier"}),a.jsx("div",{className:"stars",children:[...Array(5)].map((n,r)=>a.jsx(nu,{size:16,fill:"#f59e0b"},r))})]})]}),a.jsx("div",{className:"hero-image",children:a.jsxs("div",{className:"dashboard-preview",children:[a.jsx("div",{className:"preview-header",children:a.jsxs("div",{className:"dots",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})}),a.jsxs("div",{className:"preview-content",children:[a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-stat"}),a.jsx("div",{className:"mock-chart"})]})]})})]}),a.jsxs("section",{id:"features",className:"features",children:[a.jsx("h2",{children:"Todo lo que necesitas para operar"}),a.jsx("p",{className:"section-subtitle",children:"Una plataforma completa diseñada específicamente para empresas de courier"}),a.jsx("div",{className:"features-grid",children:t.map((n,r)=>a.jsxs("div",{className:"feature-card",children:[a.jsx("div",{className:"feature-icon",children:a.jsx(n.icon,{size:28})}),a.jsx("h3",{children:n.title}),a.jsx("p",{children:n.description})]},r))})]}),a.jsxs("section",{id:"pricing",className:"pricing",children:[a.jsx("h2",{children:"Planes simples y transparentes"}),a.jsx("p",{className:"section-subtitle",children:"14 días de prueba gratis. Sin tarjeta de crédito."}),a.jsx("div",{className:"pricing-grid",children:e.map((n,r)=>a.jsxs("div",{className:`pricing-card ${n.popular?"popular":""}`,children:[n.popular&&a.jsx("span",{className:"popular-badge",children:"Más Popular"}),a.jsx("h3",{children:n.name}),a.jsx("p",{className:"plan-description",children:n.description}),a.jsxs("div",{className:"plan-price",children:[n.priceLabel&&a.jsx("span",{className:"price-label",children:n.priceLabel}),a.jsxs("span",{className:"price",children:["$",n.price]}),a.jsx("span",{className:"period",children:"/mes"})]}),a.jsx("ul",{className:"plan-features",children:n.features.map((i,s)=>a.jsxs("li",{children:[a.jsx(Nn,{size:16})," ",i]},s))}),a.jsx(Re,{to:"/register",className:`btn-plan ${n.popular?"btn-plan-primary":""}`,children:"Empezar Gratis"})]},r))})]}),a.jsxs("section",{className:"cta",children:[a.jsx("h2",{children:"¿Listo para modernizar tu operación?"}),a.jsx("p",{children:"Únete a cientos de empresas que ya confían en Sistema Courier"}),a.jsxs(Re,{to:"/register",className:"btn-cta-large",children:["Crear Cuenta Gratis ",a.jsx(ha,{size:24})]})]}),a.jsxs("footer",{className:"footer",children:[a.jsxs("div",{className:"footer-content",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(Zt,{size:28}),a.jsx("span",{children:"Sistema Courier"}),a.jsx("p",{children:"La plataforma SaaS para empresas de courier modernas."})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Producto"}),a.jsx("a",{href:"#features",children:"Características"}),a.jsx("a",{href:"#pricing",children:"Precios"}),a.jsx("a",{href:"/docs",children:"Documentación"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Empresa"}),a.jsx("a",{href:"/about",children:"Nosotros"}),a.jsx("a",{href:"/contact",children:"Contacto"}),a.jsx("a",{href:"/blog",children:"Blog"})]}),a.jsxs("div",{className:"footer-links",children:[a.jsx("h4",{children:"Legal"}),a.jsx("a",{href:"/privacy",children:"Privacidad"}),a.jsx("a",{href:"/terms",children:"Términos"})]})]}),a.jsx("div",{className:"footer-bottom",children:a.jsx("p",{children:"© 2024 Sistema Courier. Todos los derechos reservados."})})]}),a.jsx("style",{children:`
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
      `})]})},qE=()=>{const e=wt(),[t,n]=O.useState(1),[r,i]=O.useState(!1),[s,l]=O.useState(""),[c,u]=O.useState("idle"),[h,x]=O.useState({company_name:"",subdomain:"",admin_name:"",admin_email:"",password:"",confirm_password:""}),v=_=>{const{name:m,value:y}=_.target;if(x({...h,[m]:y}),l(""),m==="company_name"){const C=y.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,30);x(L=>({...L,subdomain:C})),C.length>=3&&w(C)}if(m==="subdomain"){const C=y.toLowerCase().replace(/[^a-z0-9-]/g,"");x(L=>({...L,subdomain:C})),C.length>=3&&w(C)}},w=async _=>{u("checking");try{const y=await(await fetch("/api/tenants/check-subdomain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({subdomain:_})})).json();u(y.available?"available":"taken")}catch{u("idle")}},E=()=>h.company_name.trim()?h.subdomain.length<3?(l("El subdominio debe tener al menos 3 caracteres"),!1):c==="taken"?(l("Este subdominio no está disponible"),!1):!0:(l("Ingresa el nombre de tu empresa"),!1),N=()=>h.admin_name.trim()?h.admin_email.includes("@")?h.password.length<8?(l("La contraseña debe tener al menos 8 caracteres"),!1):h.password!==h.confirm_password?(l("Las contraseñas no coinciden"),!1):!0:(l("Ingresa un email válido"),!1):(l("Ingresa tu nombre"),!1),P=()=>{t===1&&E()&&n(2)},A=async _=>{if(_.preventDefault(),!!N()){i(!0),l("");try{const m=await fetch("/api/tenants/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h.company_name,subdomain:h.subdomain,admin_email:h.admin_email,admin_password:h.password,admin_name:h.admin_name})}),y=await m.json();if(!m.ok)throw new Error(y.error||"Error al crear la cuenta");e(`/onboarding?tenant=${y.tenant.subdomain}`)}catch(m){l(m.message)}finally{i(!1)}}};return a.jsxs("div",{className:"register-page",children:[a.jsxs("div",{className:"register-container",children:[a.jsxs("div",{className:"register-brand",children:[a.jsxs(Re,{to:"/",className:"brand-logo",children:[a.jsx(Zt,{size:40}),a.jsx("span",{children:"Sistema Courier"})]}),a.jsxs("div",{className:"brand-content",children:[a.jsx("h2",{children:"Comienza tu prueba gratuita"}),a.jsx("p",{children:"14 días gratis. Sin tarjeta de crédito."}),a.jsxs("ul",{className:"brand-features",children:[a.jsxs("li",{children:[a.jsx(Nn,{size:20})," Configuración en minutos"]}),a.jsxs("li",{children:[a.jsx(Nn,{size:20})," Soporte incluido"]}),a.jsxs("li",{children:[a.jsx(Nn,{size:20})," Cancela cuando quieras"]})]})]})]}),a.jsxs("div",{className:"register-form-container",children:[a.jsxs("div",{className:"form-header",children:[a.jsx("h1",{children:"Crear cuenta"}),a.jsxs("p",{children:["Paso ",t," de 2"]})]}),a.jsxs("div",{className:"progress-bar",children:[a.jsx("div",{className:"progress-step active",children:"1"}),a.jsx("div",{className:"progress-line"}),a.jsx("div",{className:`progress-step ${t===2?"active":""}`,children:"2"})]}),s&&a.jsxs("div",{className:"error-message",children:[a.jsx(gs,{size:18}),s]}),a.jsx("form",{onSubmit:A,children:t===1?a.jsxs("div",{className:"form-step",children:[a.jsx("h3",{children:"Información de la empresa"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Nombre de la empresa"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(pa,{size:20}),a.jsx("input",{type:"text",name:"company_name",value:h.company_name,onChange:v,placeholder:"Mi Empresa de Courier",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Tu subdominio"}),a.jsxs("div",{className:"input-wrapper subdomain-input",children:[a.jsx(ei,{size:20}),a.jsx("input",{type:"text",name:"subdomain",value:h.subdomain,onChange:v,placeholder:"miempresa",required:!0}),a.jsx("span",{className:"subdomain-suffix",children:".sistemacourier.com"})]}),c==="checking"&&a.jsx("span",{className:"subdomain-status checking",children:"Verificando..."}),c==="available"&&a.jsxs("span",{className:"subdomain-status available",children:[a.jsx(Nn,{size:14})," Disponible"]}),c==="taken"&&a.jsxs("span",{className:"subdomain-status taken",children:[a.jsx(gs,{size:14})," No disponible"]})]}),a.jsxs("button",{type:"button",onClick:P,className:"btn-next",children:["Continuar ",a.jsx(ha,{size:20})]})]}):a.jsxs("div",{className:"form-step",children:[a.jsxs("button",{type:"button",onClick:()=>n(1),className:"btn-back",children:[a.jsx(za,{size:18})," Atrás"]}),a.jsx("h3",{children:"Tu cuenta de administrador"}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Tu nombre"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(BE,{size:20}),a.jsx("input",{type:"text",name:"admin_name",value:h.admin_name,onChange:v,placeholder:"Juan Pérez",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Email"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(Nd,{size:20}),a.jsx("input",{type:"email",name:"admin_email",value:h.admin_email,onChange:v,placeholder:"juan@miempresa.com",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Contraseña"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(tu,{size:20}),a.jsx("input",{type:"password",name:"password",value:h.password,onChange:v,placeholder:"Mínimo 8 caracteres",required:!0})]})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Confirmar contraseña"}),a.jsxs("div",{className:"input-wrapper",children:[a.jsx(tu,{size:20}),a.jsx("input",{type:"password",name:"confirm_password",value:h.confirm_password,onChange:v,placeholder:"Repite la contraseña",required:!0})]})]}),a.jsx("button",{type:"submit",disabled:r,className:"btn-submit",children:r?"Creando cuenta...":"Crear Cuenta Gratis"}),a.jsxs("p",{className:"terms",children:["Al crear una cuenta, aceptas nuestros"," ",a.jsx("a",{href:"/terms",children:"Términos de Servicio"})," y"," ",a.jsx("a",{href:"/privacy",children:"Política de Privacidad"}),"."]})]})}),a.jsxs("div",{className:"login-link",children:["¿Ya tienes cuenta? ",a.jsx(Re,{to:"/login",children:"Iniciar sesión"})]})]})]}),a.jsx("style",{children:`
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
      `})]})},KE=()=>{const e=wt(),[t]=Iw();t.get("tenant");const[n,r]=O.useState(1),[i,s]=O.useState(!1),[l,c]=O.useState({logo:null,logo_preview:"",primary_color:"#3b82f6",company_phone:"",company_address:""}),u=["#3b82f6","#10b981","#8b5cf6","#f59e0b","#ef4444","#ec4899","#06b6d4","#1f2937"],h=w=>{var N;const E=(N=w.target.files)==null?void 0:N[0];E&&c({...l,logo:E,logo_preview:URL.createObjectURL(E)})},x=async()=>{s(!0);try{if(l.logo){const w=new FormData;w.append("logo",l.logo),await fetch("/api/tenants/branding/logo",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},body:w})}await fetch("/api/tenants/branding",{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({primary_color:l.primary_color,contact_phone:l.company_phone,address:l.company_address})}),e("/dashboard")}catch(w){console.error("Error saving onboarding:",w)}finally{s(!1)}},v=()=>{e("/dashboard")};return a.jsxs("div",{className:"onboarding-wizard",children:[a.jsxs("div",{className:"wizard-container",children:[a.jsxs("div",{className:"wizard-header",children:[a.jsx(Zt,{size:32,color:"#3b82f6"}),a.jsx("h1",{children:"¡Bienvenido a Sistema Courier!"}),a.jsx("p",{children:"Personaliza tu espacio de trabajo en unos simples pasos"})]}),a.jsx("div",{className:"wizard-progress",children:[1,2,3].map(w=>a.jsx("div",{className:`progress-dot ${n>=w?"active":""}`,children:n>w?a.jsx(Nn,{size:16}):w},w))}),a.jsxs("div",{className:"wizard-content",children:[n===1&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(zf,{size:32})}),a.jsx("h2",{children:"Sube tu logo"}),a.jsx("p",{children:"Tu logo aparecerá en el sistema, PDFs y notificaciones"}),a.jsx("div",{className:"logo-upload",children:l.logo_preview?a.jsxs("div",{className:"logo-preview",children:[a.jsx("img",{src:l.logo_preview,alt:"Logo preview"}),a.jsx("button",{onClick:()=>c({...l,logo:null,logo_preview:""}),children:"Cambiar"})]}):a.jsxs("label",{className:"upload-area",children:[a.jsx(zf,{size:40}),a.jsx("span",{children:"Arrastra o haz clic para subir"}),a.jsx("span",{className:"upload-hint",children:"PNG, JPG hasta 2MB"}),a.jsx("input",{type:"file",accept:"image/*",onChange:h})]})})]}),n===2&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(OE,{size:32})}),a.jsx("h2",{children:"Elige tus colores"}),a.jsx("p",{children:"Personaliza la apariencia de tu plataforma"}),a.jsx("div",{className:"color-picker",children:u.map(w=>a.jsx("button",{className:`color-option ${l.primary_color===w?"selected":""}`,style:{backgroundColor:w},onClick:()=>c({...l,primary_color:w}),children:l.primary_color===w&&a.jsx(Nn,{size:20})},w))}),a.jsx("div",{className:"color-preview",style:{backgroundColor:l.primary_color},children:a.jsx("span",{children:"Vista previa del color primario"})})]}),n===3&&a.jsxs("div",{className:"wizard-step",children:[a.jsx("div",{className:"step-icon",children:a.jsx(Lf,{size:32})}),a.jsx("h2",{children:"Información de contacto"}),a.jsx("p",{children:"Esta información aparecerá en los PDFs y emails"}),a.jsxs("div",{className:"contact-form",children:[a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Teléfono (opcional)"}),a.jsx("input",{type:"tel",value:l.company_phone,onChange:w=>c({...l,company_phone:w.target.value}),placeholder:"+1 234 567 8900"})]}),a.jsxs("div",{className:"input-group",children:[a.jsx("label",{children:"Dirección (opcional)"}),a.jsx("input",{type:"text",value:l.company_address,onChange:w=>c({...l,company_address:w.target.value}),placeholder:"Calle Principal #123, Ciudad"})]})]})]})]}),a.jsxs("div",{className:"wizard-nav",children:[n>1?a.jsxs("button",{onClick:()=>r(n-1),className:"btn-back",children:[a.jsx(za,{size:20})," Atrás"]}):a.jsx("button",{onClick:v,className:"btn-skip",children:"Omitir configuración"}),n<3?a.jsxs("button",{onClick:()=>r(n+1),className:"btn-next",children:["Continuar ",a.jsx(ha,{size:20})]}):a.jsxs("button",{onClick:x,disabled:i,className:"btn-finish",children:[i?"Guardando...":"Finalizar"," ",a.jsx(Lf,{size:20})]})]})]}),a.jsx("style",{children:`
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
      `})]})},GE=()=>{var _,m,y,C,L,z,k,g;const{tenant:e,isWhiteLabel:t}=At(),{login:n,clearError:r}=cy(),i=wt(),s=cn(),[l,c]=O.useState(""),[u,h]=O.useState(""),[x,v]=O.useState(!1),[w,E]=O.useState(""),N=((m=(_=s.state)==null?void 0:_.from)==null?void 0:m.pathname)||"/dashboard",P=async b=>{b.preventDefault(),v(!0),E(""),r();try{await n(l,u),i(N,{replace:!0})}catch(j){E(j.message||"Error al iniciar sesión")}finally{v(!1)}},A=((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6";return a.jsxs("div",{className:"login-page",children:[a.jsxs("div",{className:"login-container",children:[a.jsx("div",{className:"login-logo",children:(C=e==null?void 0:e.branding)!=null&&C.logo_url?a.jsx("img",{src:e.branding.logo_url,alt:e.branding.company_name}):a.jsx("div",{className:"logo-placeholder",children:((z=(L=e==null?void 0:e.branding)==null?void 0:L.company_name)==null?void 0:z.charAt(0))||"C"})}),a.jsx("h1",{children:((k=e==null?void 0:e.branding)==null?void 0:k.company_name)||"Sistema Courier"}),((g=e==null?void 0:e.branding)==null?void 0:g.tagline)&&a.jsx("p",{className:"tagline",children:e.branding.tagline}),a.jsxs("form",{onSubmit:P,children:[w&&a.jsx("div",{className:"error-message",children:w}),a.jsxs("div",{className:"input-group",children:[a.jsx(Nd,{size:20,className:"input-icon"}),a.jsx("input",{type:"email",placeholder:"Correo electrónico",value:l,onChange:b=>c(b.target.value),required:!0})]}),a.jsxs("div",{className:"input-group",children:[a.jsx(tu,{size:20,className:"input-icon"}),a.jsx("input",{type:"password",placeholder:"Contraseña",value:u,onChange:b=>h(b.target.value),required:!0})]}),a.jsx("button",{type:"submit",className:"btn-login",disabled:x,style:{backgroundColor:A},children:x?"Iniciando sesión...":a.jsxs(a.Fragment,{children:[a.jsx(AE,{size:20}),"Iniciar Sesión"]})}),a.jsx("a",{href:"#",className:"forgot-password",children:"¿Olvidaste tu contraseña?"})]}),!t&&a.jsx("div",{className:"login-footer",children:a.jsxs("p",{children:["Powered by ",a.jsx("a",{href:"https://sistemacourier.com",children:"Sistema Courier"})]})})]}),a.jsx("style",{children:`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${A}22 0%, ${A}44 100%);
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
          background: ${A};
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
          border-color: ${A};
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
          color: ${A};
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
          color: ${A};
          text-decoration: none;
        }
      `})]})},XE=()=>{var P,A,_;const{tenant:e,isWhiteLabel:t}=At(),n=((P=e==null?void 0:e.branding)==null?void 0:P.primary_color)||"#3b82f6",[r,i]=O.useState({packagesToday:0,packagesInTransit:0,activeClients:0,monthlyRevenue:0}),[s,l]=O.useState([]),[c,u]=O.useState(!0);O.useEffect(()=>{h()},[e]);const h=async()=>{if(e)try{u(!0);const m="http://localhost:3001",C=await(await fetch(`${m}/api/dashboard/stats`,{headers:{"X-Tenant-ID":e.id}})).json();i(C);const z=await(await fetch(`${m}/api/dashboard/recent-packages`,{headers:{"X-Tenant-ID":e.id}})).json();l(z)}catch(m){console.error("Error fetching dashboard data:",m)}finally{u(!1)}},x=m=>new Intl.NumberFormat("es-CR",{style:"currency",currency:"CRC",minimumFractionDigits:0}).format(m),v=m=>{const y=new Date(m),L=new Date().getTime()-y.getTime(),z=Math.floor(L/6e4);if(z<1)return"Hace un momento";if(z<60)return`Hace ${z} min`;const k=Math.floor(z/60);if(k<24)return`Hace ${k} hora${k>1?"s":""}`;const g=Math.floor(k/24);return`Hace ${g} día${g>1?"s":""}`},w=m=>({pending:"Pendiente",processing:"Procesando",assigned:"Asignado",in_transit:"En tránsito",out_for_delivery:"En reparto",delivered:"Entregado",cancelled:"Cancelado"})[m]||m,E=m=>{switch(m){case"delivered":return a.jsx(Sd,{size:16,className:"status-icon success"});case"in_transit":case"out_for_delivery":return a.jsx(fa,{size:16,className:"status-icon warning"});case"assigned":case"processing":return a.jsx(Zt,{size:16,className:"status-icon info"});default:return a.jsx(uy,{size:16,className:"status-icon pending"})}},N=[{icon:Zt,label:"Paquetes Hoy",value:r.packagesToday.toString(),color:n},{icon:fa,label:"En Tránsito",value:r.packagesInTransit.toString(),color:"#10b981"},{icon:Cs,label:"Clientes Activos",value:r.activeClients.toString(),color:"#8b5cf6"},{icon:eu,label:"Ingresos Mes",value:x(r.monthlyRevenue),color:"#f59e0b"}];return a.jsxs("div",{className:"dashboard",children:[a.jsxs("header",{className:"dashboard-header",children:[a.jsx("div",{className:"header-left",children:(A=e==null?void 0:e.branding)!=null&&A.logo_url?a.jsx("img",{src:e.branding.logo_url,alt:"Logo",className:"header-logo"}):a.jsx("span",{className:"header-title",children:((_=e==null?void 0:e.branding)==null?void 0:_.company_name)||"Sistema Courier"})}),a.jsxs("div",{className:"header-right",children:[a.jsx("span",{className:"user-name",children:"Admin"}),a.jsx("button",{className:"btn-logout",children:"Cerrar Sesión"})]})]}),a.jsxs("main",{className:"dashboard-main",children:[a.jsx("div",{className:"stats-grid",children:N.map((m,y)=>a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",style:{backgroundColor:`${m.color}20`,color:m.color},children:a.jsx(m.icon,{size:24})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:c?"...":m.value}),a.jsx("div",{className:"stat-label",children:m.label})]})]},y))}),a.jsxs("div",{className:"dashboard-grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Paquetes Recientes"}),a.jsx("a",{href:"/packages",style:{color:n},children:"Ver todos"})]}),a.jsx("div",{className:"card-content",children:c?a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"Cargando..."}):s.length===0?a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#6b7280"},children:"No hay paquetes recientes"}):s.slice(0,4).map(m=>a.jsxs("div",{className:"package-item",children:[a.jsxs("div",{className:"package-info",children:[a.jsx("span",{className:"package-id",children:m.tracking_number}),a.jsx("span",{className:"package-client",children:m.client_name||"Sin cliente"})]}),a.jsxs("div",{className:"package-status",children:[E(m.status),a.jsx("span",{children:w(m.status)})]}),a.jsx("span",{className:"package-time",children:v(m.created_at)})]},m.id))})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Rendimiento"}),a.jsx(ru,{size:20,style:{color:"#10b981"}})]}),a.jsxs("div",{className:"card-content performance-grid",children:[a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Entregas a tiempo"}),a.jsx("span",{className:"perf-value success",children:"94%"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Satisfacción cliente"}),a.jsx("span",{className:"perf-value success",children:"4.8/5"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Incidentes"}),a.jsx("span",{className:"perf-value warning",children:"3"})]}),a.jsxs("div",{className:"performance-item",children:[a.jsx("span",{className:"perf-label",children:"Tiempo promedio entrega"}),a.jsx("span",{className:"perf-value",children:"2.3 días"})]})]})]})]}),(e==null?void 0:e.status)==="trial"&&a.jsxs("div",{className:"trial-notice",children:[a.jsx(gs,{size:20}),a.jsx("span",{children:"Tu período de prueba termina pronto. "}),a.jsx("a",{href:"/account/billing",style:{color:n},children:"Actualizar plan"})]})]}),a.jsx("style",{children:`
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
      `})]})},YE=()=>{var m,y;const{tenant:e}=At(),t=wt(),[n,r]=O.useState([]),[i,s]=O.useState(!0),[l,c]=O.useState(""),[u,h]=O.useState(""),[x,v]=O.useState(1),[w,E]=O.useState(0),N=20;O.useEffect(()=>{e&&P()},[e,x,l,u]);const P=async()=>{var C;if(e)try{s(!0);const L="http://localhost:3001",z=new URLSearchParams({page:x.toString(),limit:N.toString(),...l&&{search:l},...u&&{status:u}}),g=await(await fetch(`${L}/api/packages?${z}`,{headers:{"X-Tenant-ID":e.id}})).json();r(g.packages||[]),E(((C=g.pagination)==null?void 0:C.total)||0)}catch(L){console.error("Error fetching packages:",L)}finally{s(!1)}},A=C=>{const z={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[C]||{label:C,color:"#6b7280"};return a.jsx("span",{style:{padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:"500",backgroundColor:`${z.color}20`,color:z.color},children:z.label})},_=C=>new Date(C).toLocaleDateString("es-CR",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return a.jsxs("div",{className:"packages-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Paquetes"}),a.jsxs("p",{children:[w," paquetes en total"]})]}),a.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[a.jsx(ms,{size:20}),"Nuevo Paquete"]})]}),a.jsxs("div",{className:"filters-bar",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(Ma,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar por tracking, destinatario...",value:l,onChange:C=>{c(C.target.value),v(1)}})]}),a.jsxs("select",{value:u,onChange:C=>{h(C.target.value),v(1)},className:"status-filter",children:[a.jsx("option",{value:"",children:"Todos los estados"}),a.jsx("option",{value:"pending",children:"Pendiente"}),a.jsx("option",{value:"processing",children:"Procesando"}),a.jsx("option",{value:"assigned",children:"Asignado"}),a.jsx("option",{value:"in_transit",children:"En tránsito"}),a.jsx("option",{value:"out_for_delivery",children:"En reparto"}),a.jsx("option",{value:"delivered",children:"Entregado"}),a.jsx("option",{value:"cancelled",children:"Cancelado"})]})]}),a.jsx("div",{className:"table-container",children:i?a.jsx("div",{className:"loading",children:"Cargando..."}):n.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Zt,{size:48}),a.jsx("h3",{children:"No hay paquetes"}),a.jsx("p",{children:"Crea tu primer paquete para comenzar"}),a.jsxs("button",{className:"btn-primary",onClick:()=>t("/packages/new"),children:[a.jsx(ms,{size:20}),"Crear Paquete"]})]}):a.jsxs("table",{className:"packages-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Tracking"}),a.jsx("th",{children:"Destinatario"}),a.jsx("th",{children:"Dirección"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Fecha"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:n.map(C=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:"tracking-number",children:C.tracking_number})}),a.jsx("td",{children:C.recipient_name}),a.jsx("td",{className:"address-cell",children:C.recipient_address}),a.jsx("td",{children:A(C.status)}),a.jsx("td",{children:_(C.created_at)}),a.jsx("td",{children:a.jsxs("div",{className:"actions",children:[a.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}`),title:"Ver detalle",children:a.jsx(CE,{size:16})}),a.jsx("button",{className:"btn-icon",onClick:()=>t(`/packages/${C.id}/edit`),title:"Editar",children:a.jsx(Td,{size:16})})]})})]},C.id))})]})}),!i&&w>N&&a.jsxs("div",{className:"pagination",children:[a.jsx("button",{disabled:x===1,onClick:()=>v(x-1),children:"Anterior"}),a.jsxs("span",{children:["Página ",x," de ",Math.ceil(w/N)]}),a.jsx("button",{disabled:x>=Math.ceil(w/N),onClick:()=>v(x+1),children:"Siguiente"})]}),a.jsx("style",{children:`
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
                    background: ${((m=e==null?void 0:e.branding)==null?void 0:m.primary_color)||"#3b82f6"};
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
                    color: ${((y=e==null?void 0:e.branding)==null?void 0:y.primary_color)||"#3b82f6"};
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
            `})]})},JE=()=>{var v,w;const{tenant:e}=At(),t=wt(),[n,r]=O.useState(!1),[i,s]=O.useState([]),[l,c]=O.useState({client_id:"",sender_name:"",sender_phone:"",recipient_name:"",recipient_phone:"",recipient_address:"",weight:"",dimensions:"",declared_value:"",notes:""});O.useEffect(()=>{e&&u()},[e]);const u=async()=>{if(e)try{const P=await(await fetch("http://localhost:3001/api/clients",{headers:{"X-Tenant-ID":e.id}})).json();s(P.clients||[])}catch(E){console.error("Error fetching clients:",E)}},h=E=>{const N=i.find(P=>P.id===E);c(N?{...l,client_id:E,sender_name:N.name,sender_phone:N.phone}:{...l,client_id:E})},x=async E=>{if(E.preventDefault(),!!e){if(!l.client_id||!l.recipient_name||!l.recipient_address){alert("Por favor completa los campos requeridos");return}try{r(!0);const P=await fetch("http://localhost:3001/api/packages",{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":e.id},body:JSON.stringify({...l,weight:parseFloat(l.weight)||0,declared_value:parseFloat(l.declared_value)||0})});if(P.ok){const A=await P.json();alert(`Paquete creado exitosamente! Tracking: ${A.tracking_number}`),t("/packages")}else{const A=await P.json();alert(`Error: ${A.error||"No se pudo crear el paquete"}`)}}catch(N){console.error("Error creating package:",N),alert("Error al crear el paquete")}finally{r(!1)}}};return a.jsxs("div",{className:"new-package-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("button",{className:"btn-back",onClick:()=>t("/packages"),children:[a.jsx(za,{size:20}),"Volver"]}),a.jsx("h1",{children:"Nuevo Paquete"})]}),a.jsxs("form",{onSubmit:x,className:"package-form",children:[a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Información del Cliente"}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Cliente *"}),a.jsxs("select",{value:l.client_id,onChange:E=>h(E.target.value),required:!0,children:[a.jsx("option",{value:"",children:"Seleccionar cliente"}),i.map(E=>a.jsx("option",{value:E.id,children:E.name},E.id))]})]})})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Datos del Remitente"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nombre del Remitente"}),a.jsx("input",{type:"text",value:l.sender_name,onChange:E=>c({...l,sender_name:E.target.value}),placeholder:"Nombre completo"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Teléfono del Remitente"}),a.jsx("input",{type:"tel",value:l.sender_phone,onChange:E=>c({...l,sender_phone:E.target.value}),placeholder:"8888-8888"})]})]})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Datos del Destinatario"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Nombre del Destinatario *"}),a.jsx("input",{type:"text",value:l.recipient_name,onChange:E=>c({...l,recipient_name:E.target.value}),placeholder:"Nombre completo",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Teléfono del Destinatario *"}),a.jsx("input",{type:"tel",value:l.recipient_phone,onChange:E=>c({...l,recipient_phone:E.target.value}),placeholder:"8888-8888",required:!0})]})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Dirección de Entrega *"}),a.jsx("textarea",{value:l.recipient_address,onChange:E=>c({...l,recipient_address:E.target.value}),placeholder:"Dirección completa de entrega",rows:3,required:!0})]})})]}),a.jsxs("div",{className:"form-section",children:[a.jsx("h2",{children:"Detalles del Paquete"}),a.jsxs("div",{className:"form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Peso (kg)"}),a.jsx("input",{type:"number",step:"0.01",value:l.weight,onChange:E=>c({...l,weight:E.target.value}),placeholder:"0.00"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Dimensiones"}),a.jsx("input",{type:"text",value:l.dimensions,onChange:E=>c({...l,dimensions:E.target.value}),placeholder:"Ej: 30x20x15 cm"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Valor Declarado (₡)"}),a.jsx("input",{type:"number",step:"0.01",value:l.declared_value,onChange:E=>c({...l,declared_value:E.target.value}),placeholder:"0.00"})]})]}),a.jsx("div",{className:"form-row",children:a.jsxs("div",{className:"form-group full-width",children:[a.jsx("label",{children:"Notas"}),a.jsx("textarea",{value:l.notes,onChange:E=>c({...l,notes:E.target.value}),placeholder:"Notas adicionales sobre el paquete",rows:3})]})})]}),a.jsxs("div",{className:"form-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>t("/packages"),disabled:n,children:"Cancelar"}),a.jsxs("button",{type:"submit",className:"btn-primary",disabled:n,children:[a.jsx(fy,{size:20}),n?"Creando...":"Crear Paquete"]})]})]}),a.jsx("style",{children:`
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
                    border-color: ${((v=e==null?void 0:e.branding)==null?void 0:v.primary_color)||"#3b82f6"};
                }

                .form-group textarea {
                    resize: vertical;
                    font-family: inherit;
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
                    background: ${((w=e==null?void 0:e.branding)==null?void 0:w.primary_color)||"#3b82f6"};
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
            `})]})};function iu(){return iu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},iu.apply(null,arguments)}function QE(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ZE(e,t){if(e==null)return{};var n,r,i=QE(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function su(e){"@babel/helpers - typeof";return su=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},su(e)}function eS(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function tS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ou(e,t){return ou=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},ou(e,t)}function nS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ou(e,t)}function ga(e){return ga=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ga(e)}function gy(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(gy=function(){return!!e})()}function rS(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function iS(e,t){if(t&&(su(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return rS(e)}function sS(e){var t=gy();return function(){var n,r=ga(e);if(t){var i=ga(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return iS(this,n)}}var my={exports:{}},oS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aS=oS,lS=aS;function vy(){}function yy(){}yy.resetWarningCache=vy;var cS=function(){function e(r,i,s,l,c,u){if(u!==lS){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:yy,resetWarningCache:vy};return n.PropTypes=n,n};my.exports=cS();var uS=my.exports;const Xe=au(uS);/*!
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
 */function pr(e,t,n){this.x=e,this.y=t,this.time=n||new Date().getTime()}pr.prototype.velocityFrom=function(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):1};pr.prototype.distanceTo=function(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))};pr.prototype.equals=function(e){return this.x===e.x&&this.y===e.y&&this.time===e.time};function Cd(e,t,n,r){this.startPoint=e,this.control1=t,this.control2=n,this.endPoint=r}Cd.prototype.length=function(){for(var e=10,t=0,n=void 0,r=void 0,i=0;i<=e;i+=1){var s=i/e,l=this._point(s,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),c=this._point(s,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var u=l-n,h=c-r;t+=Math.sqrt(u*u+h*h)}n=l,r=c}return t};Cd.prototype._point=function(e,t,n,r,i){return t*(1-e)*(1-e)*(1-e)+3*n*(1-e)*(1-e)*e+3*r*(1-e)*e*e+i*e*e*e};function dS(e,t,n){var r,i,s,l=null,c=0;n||(n={});var u=function(){c=n.leading===!1?0:Date.now(),l=null,s=e.apply(r,i),l||(r=i=null)};return function(){var h=Date.now();!c&&n.leading===!1&&(c=h);var x=t-(h-c);return r=this,i=arguments,x<=0||x>t?(l&&(clearTimeout(l),l=null),c=h,s=e.apply(r,i),l||(r=i=null)):!l&&n.trailing!==!1&&(l=setTimeout(u,x)),s}}function ee(e,t){var n=this,r=t||{};this.velocityFilterWeight=r.velocityFilterWeight||.7,this.minWidth=r.minWidth||.5,this.maxWidth=r.maxWidth||2.5,this.throttle="throttle"in r?r.throttle:16,this.minDistance="minDistance"in r?r.minDistance:5,this.throttle?this._strokeMoveUpdate=dS(ee.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=ee.prototype._strokeUpdate,this.dotSize=r.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=r.penColor||"black",this.backgroundColor=r.backgroundColor||"rgba(0,0,0,0)",this.onBegin=r.onBegin,this.onEnd=r.onEnd,this._canvas=e,this._ctx=e.getContext("2d"),this.clear(),this._handleMouseDown=function(i){i.which===1&&(n._mouseButtonDown=!0,n._strokeBegin(i))},this._handleMouseMove=function(i){n._mouseButtonDown&&n._strokeMoveUpdate(i)},this._handleMouseUp=function(i){i.which===1&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(i))},this._handleTouchStart=function(i){if(i.targetTouches.length===1){var s=i.changedTouches[0];n._strokeBegin(s)}},this._handleTouchMove=function(i){i.preventDefault();var s=i.targetTouches[0];n._strokeMoveUpdate(s)},this._handleTouchEnd=function(i){var s=i.target===n._canvas;s&&(i.preventDefault(),n._strokeEnd(i))},this.on()}ee.prototype.clear=function(){var e=this._ctx,t=this._canvas;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(),this._isEmpty=!0};ee.prototype.fromDataURL=function(e){var t=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=new Image,i=n.ratio||window.devicePixelRatio||1,s=n.width||this._canvas.width/i,l=n.height||this._canvas.height/i;this._reset(),r.src=e,r.onload=function(){t._ctx.drawImage(r,0,0,s,l)},this._isEmpty=!1};ee.prototype.toDataURL=function(e){var t;switch(e){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return(t=this._canvas).toDataURL.apply(t,[e].concat(r))}};ee.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()};ee.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)};ee.prototype.isEmpty=function(){return this._isEmpty};ee.prototype._strokeBegin=function(e){this._data.push([]),this._reset(),this._strokeUpdate(e),typeof this.onBegin=="function"&&this.onBegin(e)};ee.prototype._strokeUpdate=function(e){var t=e.clientX,n=e.clientY,r=this._createPoint(t,n),i=this._data[this._data.length-1],s=i&&i[i.length-1],l=s&&r.distanceTo(s)<this.minDistance;if(!(s&&l)){var c=this._addPoint(r),u=c.curve,h=c.widths;u&&h&&this._drawCurve(u,h.start,h.end),this._data[this._data.length-1].push({x:r.x,y:r.y,time:r.time,color:this.penColor})}};ee.prototype._strokeEnd=function(e){var t=this.points.length>2,n=this.points[0];if(!t&&n&&this._drawDot(n),n){var r=this._data[this._data.length-1],i=r[r.length-1];n.equals(i)||r.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}typeof this.onEnd=="function"&&this.onEnd(e)};ee.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)};ee.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)};ee.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor};ee.prototype._createPoint=function(e,t,n){var r=this._canvas.getBoundingClientRect();return new pr(e-r.left,t-r.top,n||new Date().getTime())};ee.prototype._addPoint=function(e){var t=this.points,n=void 0;if(t.push(e),t.length>2){t.length===3&&t.unshift(t[0]),n=this._calculateCurveControlPoints(t[0],t[1],t[2]);var r=n.c2;n=this._calculateCurveControlPoints(t[1],t[2],t[3]);var i=n.c1,s=new Cd(t[1],r,i,t[2]),l=this._calculateCurveWidths(s);return t.shift(),{curve:s,widths:l}}return{}};ee.prototype._calculateCurveControlPoints=function(e,t,n){var r=e.x-t.x,i=e.y-t.y,s=t.x-n.x,l=t.y-n.y,c={x:(e.x+t.x)/2,y:(e.y+t.y)/2},u={x:(t.x+n.x)/2,y:(t.y+n.y)/2},h=Math.sqrt(r*r+i*i),x=Math.sqrt(s*s+l*l),v=c.x-u.x,w=c.y-u.y,E=x/(h+x),N={x:u.x+v*E,y:u.y+w*E},P=t.x-N.x,A=t.y-N.y;return{c1:new pr(c.x+P,c.y+A),c2:new pr(u.x+P,u.y+A)}};ee.prototype._calculateCurveWidths=function(e){var t=e.startPoint,n=e.endPoint,r={start:null,end:null},i=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i);return r.start=this._lastWidth,r.end=s,this._lastVelocity=i,this._lastWidth=s,r};ee.prototype._strokeWidth=function(e){return Math.max(this.maxWidth/(e+1),this.minWidth)};ee.prototype._drawPoint=function(e,t,n){var r=this._ctx;r.moveTo(e,t),r.arc(e,t,n,0,2*Math.PI,!1),this._isEmpty=!1};ee.prototype._drawCurve=function(e,t,n){var r=this._ctx,i=n-t,s=Math.floor(e.length());r.beginPath();for(var l=0;l<s;l+=1){var c=l/s,u=c*c,h=u*c,x=1-c,v=x*x,w=v*x,E=w*e.startPoint.x;E+=3*v*c*e.control1.x,E+=3*x*u*e.control2.x,E+=h*e.endPoint.x;var N=w*e.startPoint.y;N+=3*v*c*e.control1.y,N+=3*x*u*e.control2.y,N+=h*e.endPoint.y;var P=t+h*i;this._drawPoint(E,N,P)}r.closePath(),r.fill()};ee.prototype._drawDot=function(e){var t=this._ctx,n=typeof this.dotSize=="function"?this.dotSize():this.dotSize;t.beginPath(),this._drawPoint(e.x,e.y,n),t.closePath(),t.fill()};ee.prototype._fromData=function(e,t,n){for(var r=0;r<e.length;r+=1){var i=e[r];if(i.length>1)for(var s=0;s<i.length;s+=1){var l=i[s],c=new pr(l.x,l.y,l.time),u=l.color;if(s===0)this.penColor=u,this._reset(),this._addPoint(c);else if(s!==i.length-1){var h=this._addPoint(c),x=h.curve,v=h.widths;x&&v&&t(x,v,u)}}else{this._reset();var w=i[0];n(w)}}};ee.prototype._toSVG=function(){var e=this,t=this._data,n=this._canvas,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,l=n.width/r,c=n.height/r,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttributeNS(null,"width",n.width),u.setAttributeNS(null,"height",n.height),this._fromData(t,function(_,m,y){var C=document.createElement("path");if(!isNaN(_.control1.x)&&!isNaN(_.control1.y)&&!isNaN(_.control2.x)&&!isNaN(_.control2.y)){var L="M "+_.startPoint.x.toFixed(3)+","+_.startPoint.y.toFixed(3)+" "+("C "+_.control1.x.toFixed(3)+","+_.control1.y.toFixed(3)+" ")+(_.control2.x.toFixed(3)+","+_.control2.y.toFixed(3)+" ")+(_.endPoint.x.toFixed(3)+","+_.endPoint.y.toFixed(3));C.setAttribute("d",L),C.setAttribute("stroke-width",(m.end*2.25).toFixed(3)),C.setAttribute("stroke",y),C.setAttribute("fill","none"),C.setAttribute("stroke-linecap","round"),u.appendChild(C)}},function(_){var m=document.createElement("circle"),y=typeof e.dotSize=="function"?e.dotSize():e.dotSize;m.setAttribute("r",y),m.setAttribute("cx",_.x),m.setAttribute("cy",_.y),m.setAttribute("fill",_.color),u.appendChild(m)});var h="data:image/svg+xml;base64,",x='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+(' viewBox="'+i+" "+s+" "+l+" "+c+'"')+(' width="'+l+'"')+(' height="'+c+'"')+">",v=u.innerHTML;if(v===void 0){var w=document.createElement("dummy"),E=u.childNodes;w.innerHTML="";for(var N=0;N<E.length;N+=1)w.appendChild(E[N].cloneNode(!0));v=w.innerHTML}var P="</svg>",A=x+v+P;return h+btoa(A)};ee.prototype.fromData=function(e){var t=this;this.clear(),this._fromData(e,function(n,r){return t._drawCurve(n,r.start,r.end)},function(n){return t._drawDot(n)}),this._data=e};ee.prototype.toData=function(){return this._data};var xy={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(e0,function(){return function(n){function r(s){if(i[s])return i[s].exports;var l=i[s]={exports:{},id:s,loaded:!1};return n[s].call(l.exports,l,l.exports,r),l.loaded=!0,l.exports}var i={};return r.m=n,r.c=i,r.p="",r(0)}([function(n,r){function i(h){var x=h.getContext("2d"),v=h.width,w=h.height,E=x.getImageData(0,0,v,w).data,N=c(!0,v,w,E),P=c(!1,v,w,E),A=u(!0,v,w,E),_=u(!1,v,w,E),m=_-A+1,y=P-N+1,C=x.getImageData(A,N,m,y);return h.width=m,h.height=y,x.clearRect(0,0,m,y),x.putImageData(C,0,0),h}function s(h,x,v,w){return{red:w[4*(v*x+h)],green:w[4*(v*x+h)+1],blue:w[4*(v*x+h)+2],alpha:w[4*(v*x+h)+3]}}function l(h,x,v,w){return s(h,x,v,w).alpha}function c(h,x,v,w){for(var E=h?1:-1,N=h?0:v-1,P=N;h?P<v:P>-1;P+=E)for(var A=0;A<x;A++)if(l(A,P,x,w))return P;return null}function u(h,x,v,w){for(var E=h?1:-1,N=h?0:x-1,P=N;h?P<x:P>-1;P+=E)for(var A=0;A<v;A++)if(l(P,A,x,w))return P;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i}])})})(xy);var hS=xy.exports;const pS=au(hS);var fS=["canvasProps","clearOnResize"],Ua=function(e){nS(n,e);var t=sS(n);function n(){var r;tS(this,n);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return r=t.call.apply(t,[this].concat(s)),r.staticThis=r.constructor,r._sigPad=null,r._canvas=null,r.setRef=function(c){r._canvas=c,r._canvas===null&&(r._sigPad=null)},r._excludeOurProps=function(){var c=r.props;c.canvasProps,c.clearOnResize;var u=ZE(c,fS);return u},r.componentDidMount=function(){var c=r.getCanvas();r._sigPad=new ee(c,r._excludeOurProps()),r._resizeCanvas(),r.on()},r.componentWillUnmount=function(){r.off()},r.componentDidUpdate=function(){Object.assign(r._sigPad,r._excludeOurProps())},r.getCanvas=function(){if(r._canvas===null)throw r.staticThis.refNullError;return r._canvas},r.getTrimmedCanvas=function(){var c=r.getCanvas(),u=document.createElement("canvas");return u.width=c.width,u.height=c.height,u.getContext("2d").drawImage(c,0,0),pS(u)},r.getSignaturePad=function(){if(r._sigPad===null)throw r.staticThis.refNullError;return r._sigPad},r._checkClearOnResize=function(){r.props.clearOnResize&&r._resizeCanvas()},r._resizeCanvas=function(){var c,u,h=(c=r.props.canvasProps)!==null&&c!==void 0?c:{},x=h.width,v=h.height;if(!(typeof x<"u"&&typeof v<"u")){var w=r.getCanvas(),E=Math.max((u=window.devicePixelRatio)!==null&&u!==void 0?u:1,1);typeof x>"u"&&(w.width=w.offsetWidth*E),typeof v>"u"&&(w.height=w.offsetHeight*E),w.getContext("2d").scale(E,E),r.clear()}},r.render=function(){var c=r.props.canvasProps;return hu.createElement("canvas",iu({ref:r.setRef},c))},r.on=function(){return window.addEventListener("resize",r._checkClearOnResize),r.getSignaturePad().on()},r.off=function(){return window.removeEventListener("resize",r._checkClearOnResize),r.getSignaturePad().off()},r.clear=function(){return r.getSignaturePad().clear()},r.isEmpty=function(){return r.getSignaturePad().isEmpty()},r.fromDataURL=function(c,u){return r.getSignaturePad().fromDataURL(c,u)},r.toDataURL=function(c,u){return r.getSignaturePad().toDataURL(c,u)},r.fromData=function(c){return r.getSignaturePad().fromData(c)},r.toData=function(){return r.getSignaturePad().toData()},r}return eS(n)}(O.Component);Ua.propTypes={velocityFilterWeight:Xe.number,minWidth:Xe.number,maxWidth:Xe.number,minDistance:Xe.number,dotSize:Xe.oneOfType([Xe.number,Xe.func]),penColor:Xe.string,throttle:Xe.number,onEnd:Xe.func,onBegin:Xe.func,canvasProps:Xe.object,clearOnResize:Xe.bool};Ua.defaultProps={clearOnResize:!0};Ua.refNullError=new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");const gS=({packageId:e,trackingNumber:t,recipientName:n,onClose:r,onSuccess:i})=>{var E,N;const{tenant:s}=At(),l=O.useRef(null),[c,u]=O.useState(""),[h,x]=O.useState(!1),v=()=>{var P;(P=l.current)==null||P.clear()},w=async()=>{var P,A;if((P=l.current)!=null&&P.isEmpty()){alert("Por favor firme antes de confirmar");return}if(!c.trim()){alert("Por favor ingrese la cédula del destinatario");return}try{x(!0);const _=(A=l.current)==null?void 0:A.toDataURL(),y=await fetch(`http://localhost:3001/api/delivery-signature/${e}`,{method:"POST",headers:{"Content-Type":"application/json","X-Tenant-ID":s.id},body:JSON.stringify({signatureUrl:_,recipientName:n,recipientId:c})});if(y.ok)alert("Entrega confirmada exitosamente"),i();else{const C=await y.json();alert(`Error: ${C.error||"No se pudo confirmar la entrega"}`)}}catch(_){console.error("Error confirmando entrega:",_),alert("Error al confirmar la entrega")}finally{x(!1)}};return a.jsx("div",{className:"modal-overlay",onClick:r,children:a.jsxs("div",{className:"modal-content",onClick:P=>P.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{children:"Confirmar Entrega"}),a.jsx("button",{className:"btn-close",onClick:r,children:a.jsx(VE,{size:24})})]}),a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{className:"package-info",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Tracking:"})," ",t]}),a.jsxs("p",{children:[a.jsx("strong",{children:"Destinatario:"})," ",n]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{children:"Cédula del Destinatario *"}),a.jsx("input",{type:"text",value:c,onChange:P=>u(P.target.value),placeholder:"Ej: 1-2345-6789",disabled:h})]}),a.jsxs("div",{className:"signature-section",children:[a.jsx("label",{children:"Firma del Destinatario *"}),a.jsx("div",{className:"signature-canvas-container",children:a.jsx(Ua,{ref:l,canvasProps:{className:"signature-canvas"}})}),a.jsxs("button",{className:"btn-clear",onClick:v,disabled:h,children:[a.jsx(ME,{size:16}),"Limpiar"]})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{className:"btn-secondary",onClick:r,disabled:h,children:"Cancelar"}),a.jsxs("button",{className:"btn-primary",onClick:w,disabled:h,children:[a.jsx(Nn,{size:20}),h?"Confirmando...":"Confirmar Entrega"]})]}),a.jsx("style",{children:`
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
                        border-color: ${((E=s==null?void 0:s.branding)==null?void 0:E.primary_color)||"#3b82f6"};
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
                        background: ${((N=s==null?void 0:s.branding)==null?void 0:N.primary_color)||"#3b82f6"};
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
                `})]})})},mS=()=>{var P,A;const{id:e}=nv(),{tenant:t}=At(),n=wt(),[r,i]=O.useState(null),[s,l]=O.useState([]),[c,u]=O.useState(!0),[h,x]=O.useState(!1);O.useEffect(()=>{t&&e&&v()},[t,e]);const v=async()=>{if(!(!t||!e))try{u(!0);const y=await(await fetch(`http://localhost:3001/api/packages/${e}`,{headers:{"X-Tenant-ID":t.id}})).json();i(y)}catch(_){console.error("Error fetching package:",_)}finally{u(!1)}},w=async()=>{if(!(!t||!e))try{const m=await fetch(`http://localhost:3001/api/labels/package/${e}`,{headers:{"X-Tenant-ID":t.id}});if(m.ok){const y=await m.blob(),C=window.URL.createObjectURL(y),L=document.createElement("a");L.href=C,L.download=`etiqueta-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(L),L.click(),window.URL.revokeObjectURL(C),document.body.removeChild(L)}}catch(_){console.error("Error downloading label:",_),alert("Error al descargar la etiqueta")}},E=async()=>{if(!(!t||!e))try{const m=await fetch(`http://localhost:3001/api/labels/delivery-note/${e}`,{headers:{"X-Tenant-ID":t.id}});if(m.ok){const y=await m.blob(),C=window.URL.createObjectURL(y),L=document.createElement("a");L.href=C,L.download=`nota-entrega-${r==null?void 0:r.tracking_number}.pdf`,document.body.appendChild(L),L.click(),window.URL.revokeObjectURL(C),document.body.removeChild(L)}}catch(_){console.error("Error downloading delivery note:",_),alert("Error al descargar la nota de entrega")}},N=_=>{const y={pending:{label:"Pendiente",color:"#6b7280"},processing:{label:"Procesando",color:"#3b82f6"},assigned:{label:"Asignado",color:"#8b5cf6"},in_transit:{label:"En tránsito",color:"#f59e0b"},out_for_delivery:{label:"En reparto",color:"#10b981"},delivered:{label:"Entregado",color:"#059669"},cancelled:{label:"Cancelado",color:"#ef4444"}}[_]||{label:_,color:"#6b7280"};return a.jsx("span",{style:{padding:"6px 16px",borderRadius:"12px",fontSize:"14px",fontWeight:"600",backgroundColor:`${y.color}20`,color:y.color},children:y.label})};return c?a.jsx("div",{className:"loading-page",children:"Cargando..."}):r?a.jsxs("div",{className:"package-detail-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsxs("button",{className:"btn-back",onClick:()=>n("/packages"),children:[a.jsx(za,{size:20}),"Volver"]}),a.jsxs("div",{className:"header-info",children:[a.jsx("h1",{children:r.tracking_number}),N(r.status)]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("button",{className:"btn-action",onClick:w,title:"Imprimir Etiqueta",children:[a.jsx(LE,{size:20}),"Etiqueta"]}),a.jsxs("button",{className:"btn-action",onClick:E,title:"Nota de Entrega",children:[a.jsx(IE,{size:20}),"Nota"]}),r.status!=="delivered"&&r.status!=="cancelled"&&a.jsxs("button",{className:"btn-deliver",onClick:()=>x(!0),title:"Confirmar Entrega",children:[a.jsx(Sd,{size:20}),"Confirmar Entrega"]}),a.jsxs("button",{className:"btn-edit",onClick:()=>n(`/packages/${e}/edit`),children:[a.jsx(Td,{size:20}),"Editar"]})]})]}),a.jsxs("div",{className:"detail-grid",children:[a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Información General"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Cliente:"}),a.jsx("span",{className:"value",children:r.client_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Courier:"}),a.jsx("span",{className:"value",children:r.courier_name||"Sin asignar"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Peso:"}),a.jsxs("span",{className:"value",children:[r.weight," kg"]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Dimensiones:"}),a.jsx("span",{className:"value",children:r.dimensions||"N/A"})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Valor Declarado:"}),a.jsxs("span",{className:"value",children:["₡",r.declared_value.toLocaleString()]})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Fecha Creación:"}),a.jsx("span",{className:"value",children:new Date(r.created_at).toLocaleString("es-CR")})]}),r.delivered_at&&a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Fecha Entrega:"}),a.jsx("span",{className:"value",children:new Date(r.delivered_at).toLocaleString("es-CR")})]})]}),a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Remitente"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Nombre:"}),a.jsx("span",{className:"value",children:r.sender_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Teléfono:"}),a.jsx("span",{className:"value",children:r.sender_phone})]})]}),a.jsxs("div",{className:"detail-card",children:[a.jsx("h2",{children:"Destinatario"}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Nombre:"}),a.jsx("span",{className:"value",children:r.recipient_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Teléfono:"}),a.jsx("span",{className:"value",children:r.recipient_phone})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{className:"label",children:"Dirección:"}),a.jsx("span",{className:"value",children:r.recipient_address})]})]}),r.notes&&a.jsxs("div",{className:"detail-card full-width",children:[a.jsx("h2",{children:"Notas"}),a.jsx("p",{children:r.notes})]})]}),h&&a.jsx(gS,{packageId:e,trackingNumber:r.tracking_number,recipientName:r.recipient_name,onClose:()=>x(!1),onSuccess:()=>{x(!1),v()}}),a.jsx("style",{children:`
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
                    background: ${((A=t==null?void 0:t.branding)==null?void 0:A.primary_color)||"#3b82f6"};
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
            `})]}):a.jsx("div",{className:"error-page",children:"Paquete no encontrado"})},vS=()=>{const{tenant:e}=At(),[t,n]=O.useState([]),[r,i]=O.useState(!0),[s,l]=O.useState("");O.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const u="http://localhost:3001",h=new URLSearchParams({...s&&{search:s}}),v=await(await fetch(`${u}/api/clients?${h}`,{headers:{"X-Tenant-ID":e.id}})).json();n(v.clients||[])}catch(u){console.error("Error:",u)}finally{i(!1)}};return a.jsxs("div",{className:"clients-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{children:"Clientes"}),a.jsxs("p",{children:[t.length," clientes registrados"]})]}),a.jsxs("div",{className:"search-box",children:[a.jsx(Ma,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar cliente...",value:s,onChange:u=>l(u.target.value)})]}),a.jsx("div",{className:"table-container",children:r?a.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(Cs,{size:48}),a.jsx("h3",{children:"No hay clientes"})]}):a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Empresa"}),a.jsx("th",{children:"Email"}),a.jsx("th",{children:"Teléfono"}),a.jsx("th",{children:"Paquetes"})]})}),a.jsx("tbody",{children:t.map(u=>a.jsxs("tr",{children:[a.jsx("td",{children:u.name}),a.jsx("td",{children:u.company_name||"-"}),a.jsx("td",{children:u.email}),a.jsx("td",{children:u.phone}),a.jsx("td",{children:u.total_packages})]},u.id))})]})}),a.jsx("style",{children:`
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
            `})]})},yS=()=>{const{tenant:e}=At(),[t,n]=O.useState([]),[r,i]=O.useState(!0),[s,l]=O.useState("");O.useEffect(()=>{e&&c()},[e,s]);const c=async()=>{if(e)try{i(!0);const h="http://localhost:3001",x=new URLSearchParams({...s&&{search:s}}),w=await(await fetch(`${h}/api/couriers?${x}`,{headers:{"X-Tenant-ID":e.id}})).json();n(w.couriers||[])}catch(h){console.error("Error:",h)}finally{i(!1)}},u=h=>({motorcycle:"Motocicleta",bicycle:"Bicicleta",car:"Carro",van:"Van",truck:"Camión",walk:"A pie"})[h]||h;return a.jsxs("div",{className:"couriers-page",children:[a.jsxs("div",{className:"page-header",children:[a.jsx("h1",{children:"Couriers"}),a.jsxs("p",{children:[t.length," mensajeros registrados"]})]}),a.jsxs("div",{className:"search-box",children:[a.jsx(Ma,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar courier...",value:s,onChange:h=>l(h.target.value)})]}),a.jsx("div",{className:"table-container",children:r?a.jsx("div",{className:"loading",children:"Cargando..."}):t.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx(fa,{size:48}),a.jsx("h3",{children:"No hay couriers"})]}):a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nombre"}),a.jsx("th",{children:"Teléfono"}),a.jsx("th",{children:"Vehículo"}),a.jsx("th",{children:"Placa"}),a.jsx("th",{children:"Zona"}),a.jsx("th",{children:"Entregas"}),a.jsx("th",{children:"Rating"})]})}),a.jsx("tbody",{children:t.map(h=>a.jsxs("tr",{children:[a.jsx("td",{children:h.name}),a.jsx("td",{children:h.phone}),a.jsx("td",{children:u(h.vehicle_type)}),a.jsx("td",{children:h.vehicle_plate||"-"}),a.jsx("td",{children:h.zone||"-"}),a.jsx("td",{children:h.completed_deliveries}),a.jsxs("td",{children:["⭐ ",h.rating.toFixed(1)]})]},h.id))})]})}),a.jsx("style",{children:`
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
            `})]})},xS=()=>a.jsxs("div",{className:"loading-page",children:[a.jsxs("div",{className:"loading-container",children:[a.jsx("div",{className:"loading-spinner"}),a.jsx("h2",{children:"Cargando..."}),a.jsx("p",{children:"Preparando tu espacio de trabajo"})]}),a.jsx("style",{children:`
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
      `})]}),wS=({message:e})=>a.jsxs("div",{className:"error-page",children:[a.jsxs("div",{className:"error-container",children:[a.jsx("div",{className:"error-icon",children:a.jsx(SE,{size:64})}),a.jsx("h1",{children:"No se pudo cargar"}),a.jsx("p",{className:"error-message",children:e}),a.jsxs("div",{className:"error-actions",children:[a.jsx("button",{onClick:()=>window.location.reload(),className:"btn-retry",children:"Intentar de nuevo"}),a.jsx("a",{href:"https://sistemacourier.com",className:"btn-home",children:"Ir al inicio"})]})]}),a.jsx("style",{children:`
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
      `})]}),_S=()=>{var j,I;const{tenant:e}=At(),[t,n]=O.useState([]),[r,i]=O.useState(!0),[s,l]=O.useState(""),[c,u]=O.useState(!1),[h,x]=O.useState(null),[v,w]=O.useState(null),[E,N]=O.useState(""),[P,A]=O.useState(""),_=((j=e==null?void 0:e.plan)==null?void 0:j.id)==="enterprise",m=((I=e==null?void 0:e.branding)==null?void 0:I.primary_color)||"#3b82f6";O.useEffect(()=>{y()},[]);const y=async()=>{try{const S=await(await fetch("/api/domains",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(S)}catch(T){console.error("Error fetching domains:",T)}finally{i(!1)}},C=async T=>{if(T.preventDefault(),!!s.trim()){u(!0),N("");try{const S=await fetch("/api/domains",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({domain:s})}),me=await S.json();if(!S.ok)throw new Error(me.error||"Error agregando dominio");n([...t,me.domain]),x(me.dns_instructions),l(""),A("Dominio agregado. Configure el DNS siguiendo las instrucciones.")}catch(S){N(S.message)}finally{u(!1)}}},L=async T=>{w(T),N("");try{const me=await(await fetch(`/api/domains/${T}/verify`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();me.verified?(A("DNS verificado. El SSL se está configurando."),y()):N(me.message)}catch{N("Error verificando DNS")}finally{w(null)}},z=async T=>{try{await fetch(`/api/domains/${T}/set-primary`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),A("Dominio establecido como principal"),y()}catch{N("Error estableciendo dominio principal")}},k=async T=>{if(confirm("¿Eliminar este dominio?"))try{await fetch(`/api/domains/${T}`,{method:"DELETE",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}),n(t.filter(S=>S.id!==T)),A("Dominio eliminado")}catch{N("Error eliminando dominio")}},g=T=>{navigator.clipboard.writeText(T),A("Copiado al portapapeles"),setTimeout(()=>A(""),2e3)},b=T=>{switch(T){case"active":return a.jsxs("span",{className:"badge success",children:[a.jsx(Sd,{size:14})," Activo"]});case"provisioning":return a.jsxs("span",{className:"badge warning",children:[a.jsx(uy,{size:14})," Configurando SSL"]});case"pending":return a.jsxs("span",{className:"badge pending",children:[a.jsx(gs,{size:14})," Pendiente verificación"]});case"failed":return a.jsxs("span",{className:"badge danger",children:[a.jsx(gs,{size:14})," Error"]});default:return null}};return _?a.jsxs("div",{className:"white-label-settings",children:[a.jsxs("header",{className:"page-header",children:[a.jsx("h1",{children:"Configuración White Label"}),a.jsx("p",{children:"Personaliza tu dominio y branding para tus clientes"})]}),E&&a.jsx("div",{className:"alert error",children:E}),P&&a.jsx("div",{className:"alert success",children:P}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsxs("h3",{children:[a.jsx(ei,{size:20})," Dominios"]})}),a.jsxs("div",{className:"card-content",children:[a.jsx("div",{className:"domains-list",children:t.map(T=>a.jsxs("div",{className:"domain-row",children:[a.jsxs("div",{className:"domain-info",children:[a.jsxs("div",{className:"domain-name",children:[T.is_primary&&a.jsx(nu,{size:16,className:"primary-star"}),T.domain,T.domain_type==="subdomain"&&a.jsx("span",{className:"subdomain-badge",children:"Subdominio"})]}),b(T.ssl_status)]}),a.jsxs("div",{className:"domain-actions",children:[T.ssl_status==="pending"&&a.jsx("button",{onClick:()=>L(T.id),disabled:v===T.id,className:"btn-action",children:v===T.id?a.jsx(zE,{size:16,className:"spin"}):"Verificar DNS"}),T.ssl_status==="active"&&!T.is_primary&&a.jsxs("button",{onClick:()=>z(T.id),className:"btn-action",children:[a.jsx(nu,{size:16})," Hacer principal"]}),T.domain_type==="custom"&&a.jsx("button",{onClick:()=>k(T.id),className:"btn-delete",children:a.jsx(FE,{size:16})}),a.jsx("a",{href:`https://${T.domain}`,target:"_blank",className:"btn-action",children:a.jsx(jd,{size:16})})]})]},T.id))}),a.jsxs("form",{onSubmit:C,className:"add-domain-form",children:[a.jsx("input",{type:"text",placeholder:"miempresa.com",value:s,onChange:T=>l(T.target.value)}),a.jsxs("button",{type:"submit",disabled:c,className:"btn btn-primary",children:[a.jsx(ms,{size:18}),c?"Agregando...":"Agregar Dominio"]})]})]})]}),h&&a.jsxs("div",{className:"card instructions-card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Configuración DNS"})}),a.jsxs("div",{className:"card-content",children:[a.jsx("p",{className:"instructions-intro",children:"Configure en su proveedor de dominio:"}),a.jsxs("div",{className:"dns-record",children:[a.jsxs("div",{className:"dns-field",children:[a.jsx("label",{children:"Tipo"}),a.jsx("span",{children:h.type})]}),a.jsxs("div",{className:"dns-field",children:[a.jsx("label",{children:"Nombre"}),a.jsx("span",{children:h.name}),a.jsx("button",{onClick:()=>g(h.name),className:"copy-btn",children:a.jsx(Df,{size:14})})]}),a.jsxs("div",{className:"dns-field wide",children:[a.jsx("label",{children:"Valor"}),a.jsx("span",{children:h.value}),a.jsx("button",{onClick:()=>g(h.value),className:"copy-btn",children:a.jsx(Df,{size:14})})]})]}),a.jsx("p",{className:"dns-note",children:'La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".'})]})]}),a.jsx("style",{children:Mf(m)})]}):a.jsxs("div",{className:"white-label-settings",children:[a.jsxs("div",{className:"upgrade-notice",children:[a.jsx(ei,{size:48}),a.jsx("h2",{children:"White Label disponible en Enterprise"}),a.jsx("p",{children:"Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más."}),a.jsx("a",{href:"/account/billing",className:"btn btn-primary",children:"Ver planes"})]}),a.jsx("style",{children:Mf(m)})]})},Mf=e=>`
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
`,bS=()=>{const[e,t]=O.useState(null),[n,r]=O.useState(!0);O.useEffect(()=>{i()},[]);const i=async()=>{try{const u=await(await fetch("/api/super-admin/dashboard",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();t(u)}catch(c){console.error("Error fetching dashboard:",c)}finally{r(!1)}};if(n)return a.jsx("div",{className:"loading",children:"Cargando dashboard..."});const s=c=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(c),l=c=>{switch(c){case"active":return"#10b981";case"trial":return"#f59e0b";case"suspended":return"#ef4444";case"cancelled":return"#6b7280";default:return"#3b82f6"}};return a.jsxs("div",{className:"super-admin-dashboard",children:[a.jsxs("header",{className:"dashboard-header",children:[a.jsxs("div",{children:[a.jsx("h1",{children:"Super Admin Dashboard"}),a.jsx("p",{children:"Sistema Courier SaaS - Panel de Control"})]}),a.jsx("div",{className:"header-actions",children:a.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[a.jsx(ms,{size:20}),"Nuevo Tenant"]})})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card primary",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(pa,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.total_tenants)||0}),a.jsx("div",{className:"stat-label",children:"Total Empresas"})]})]}),a.jsxs("div",{className:"stat-card success",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(Cs,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:(e==null?void 0:e.summary.active_tenants)||0}),a.jsx("div",{className:"stat-label",children:"Activas"}),a.jsxs("div",{className:"stat-sub",children:[(e==null?void 0:e.summary.trial_tenants)||0," en trial"]})]})]}),a.jsxs("div",{className:"stat-card warning",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(eu,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsx("div",{className:"stat-value",children:s((e==null?void 0:e.summary.mrr)||0)}),a.jsx("div",{className:"stat-label",children:"MRR"}),a.jsxs("div",{className:"stat-sub",children:["+",(e==null?void 0:e.summary.new_this_month)||0," este mes"]})]})]}),a.jsxs("div",{className:"stat-card danger",children:[a.jsx("div",{className:"stat-icon",children:a.jsx($E,{size:28})}),a.jsxs("div",{className:"stat-content",children:[a.jsxs("div",{className:"stat-value",children:[(e==null?void 0:e.summary.churn_rate)||0,"%"]}),a.jsx("div",{className:"stat-label",children:"Churn Rate"})]})]})]}),a.jsxs("div",{className:"content-grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Empresas Recientes"}),a.jsx(Re,{to:"/super-admin/tenants",className:"link",children:"Ver todas"})]}),a.jsx("div",{className:"card-content",children:e==null?void 0:e.recent_tenants.map(c=>a.jsxs("div",{className:"tenant-row",children:[a.jsx("div",{className:"tenant-avatar",children:c.logo_url?a.jsx("img",{src:c.logo_url,alt:c.name}):a.jsx("span",{children:c.name.charAt(0)})}),a.jsxs("div",{className:"tenant-info",children:[a.jsx("div",{className:"tenant-name",children:c.company_name||c.name}),a.jsxs("div",{className:"tenant-subdomain",children:[c.subdomain,".sistemacourier.com"]})]}),a.jsx("div",{className:"tenant-status",style:{color:l(c.status)},children:c.status}),a.jsx("div",{className:"tenant-plan",children:c.plan_id}),a.jsx(Re,{to:`/super-admin/tenants/${c.id}`,className:"btn-icon",children:a.jsx(dy,{size:18})})]},c.id))})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Ingresos Mensuales"}),a.jsx(ru,{size:20,className:"success"})]}),a.jsx("div",{className:"card-content chart-container",children:a.jsx("div",{className:"simple-chart",children:e==null?void 0:e.revenue_by_month.map((c,u)=>a.jsxs("div",{className:"chart-bar",children:[a.jsx("div",{className:"bar",style:{height:`${c.revenue/15e3*100}%`,backgroundColor:"#3b82f6"}}),a.jsx("span",{className:"bar-label",children:c.month}),a.jsx("span",{className:"bar-value",children:s(c.revenue)})]},u))})})]}),a.jsxs("div",{className:"card small",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Por Plan"})}),a.jsx("div",{className:"card-content",children:e==null?void 0:e.by_plan.map((c,u)=>a.jsxs("div",{className:"distribution-row",children:[a.jsx("span",{className:"dist-label",children:c.plan_id}),a.jsx("div",{className:"dist-bar",children:a.jsx("div",{className:"dist-fill",style:{width:`${c.count/((e==null?void 0:e.summary.total_tenants)||1)*100}%`,backgroundColor:["#3b82f6","#10b981","#8b5cf6","#f59e0b"][u%4]}})}),a.jsx("span",{className:"dist-count",children:c.count})]},u))})]}),a.jsxs("div",{className:"card small",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Acciones Rápidas"})}),a.jsxs("div",{className:"card-content quick-actions",children:[a.jsxs(Re,{to:"/super-admin/tenants",className:"quick-action",children:[a.jsx(pa,{size:24}),a.jsx("span",{children:"Gestionar Empresas"})]}),a.jsxs(Re,{to:"/super-admin/subscriptions",className:"quick-action",children:[a.jsx(eu,{size:24}),a.jsx("span",{children:"Ver Suscripciones"})]}),a.jsxs(Re,{to:"/super-admin/plans",className:"quick-action",children:[a.jsx(ru,{size:24}),a.jsx("span",{children:"Configurar Planes"})]})]})]})]}),a.jsx("style",{children:`
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
      `})]})},kS=()=>{const e=wt(),[t,n]=O.useState([]),[r,i]=O.useState({page:1,limit:20,total:0,pages:0}),[s,l]=O.useState(!0),[c,u]=O.useState(""),[h,x]=O.useState(""),[v,w]=O.useState(null);O.useEffect(()=>{E()},[r.page,h]);const E=async()=>{try{l(!0);const y=new URLSearchParams({page:r.page.toString(),limit:r.limit.toString(),...h&&{status:h},...c&&{search:c}}),L=await(await fetch(`/api/super-admin/tenants?${y}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(L.tenants),i(L.pagination)}catch(y){console.error("Error fetching tenants:",y)}finally{l(!1)}},N=y=>{y.preventDefault(),i({...r,page:1}),E()},P=async y=>{if(confirm("¿Seguro que deseas suspender este tenant?"))try{await fetch(`/api/super-admin/tenants/${y}/suspend`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({reason:"Manual suspension"})}),E()}catch(C){console.error("Error suspending tenant:",C)}},A=async y=>{try{await fetch(`/api/super-admin/tenants/${y}/activate`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({plan_id:"starter"})}),E()}catch(C){console.error("Error activating tenant:",C)}},_=y=>`status-badge ${{active:"bg-green",trial:"bg-yellow",suspended:"bg-red",cancelled:"bg-gray"}[y]||"bg-blue"}`,m=y=>new Date(y).toLocaleDateString("es",{day:"2-digit",month:"short",year:"numeric"});return a.jsxs("div",{className:"tenants-management",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx(Re,{to:"/super-admin",className:"back-link",children:a.jsx(Zc,{size:20})}),a.jsxs("div",{children:[a.jsx("h1",{children:"Gestión de Empresas"}),a.jsxs("p",{children:[r.total," empresas registradas"]})]})]}),a.jsxs(Re,{to:"/super-admin/tenants/new",className:"btn btn-primary",children:[a.jsx(ms,{size:20}),"Nueva Empresa"]})]}),a.jsxs("div",{className:"filters-bar",children:[a.jsxs("form",{onSubmit:N,className:"search-box",children:[a.jsx(Ma,{size:20}),a.jsx("input",{type:"text",placeholder:"Buscar por nombre o subdominio...",value:c,onChange:y=>u(y.target.value)})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx(PE,{size:18}),a.jsxs("select",{value:h,onChange:y=>x(y.target.value),children:[a.jsx("option",{value:"",children:"Todos los estados"}),a.jsx("option",{value:"active",children:"Activos"}),a.jsx("option",{value:"trial",children:"En prueba"}),a.jsx("option",{value:"suspended",children:"Suspendidos"}),a.jsx("option",{value:"cancelled",children:"Cancelados"})]})]})]}),a.jsx("div",{className:"table-container",children:a.jsxs("table",{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Empresa"}),a.jsx("th",{children:"Subdominio"}),a.jsx("th",{children:"Plan"}),a.jsx("th",{children:"Estado"}),a.jsx("th",{children:"Creado"}),a.jsx("th",{children:"Acciones"})]})}),a.jsx("tbody",{children:s?a.jsx("tr",{children:a.jsx("td",{colSpan:6,className:"loading-cell",children:"Cargando..."})}):t.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,className:"empty-cell",children:"No hay empresas"})}):t.map(y=>{var C,L,z;return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsxs("div",{className:"tenant-cell",children:[a.jsx("div",{className:"tenant-avatar",style:{backgroundColor:((C=y.branding)==null?void 0:C.primary_color)||"#3b82f6"},children:(L=y.branding)!=null&&L.logo_url?a.jsx("img",{src:y.branding.logo_url,alt:""}):y.name.charAt(0)}),a.jsxs("div",{children:[a.jsx("div",{className:"tenant-name",children:((z=y.branding)==null?void 0:z.company_name)||y.name}),a.jsxs("div",{className:"tenant-id",children:[y.id.slice(0,8),"..."]})]})]})}),a.jsx("td",{children:a.jsxs("a",{href:`https://${y.subdomain}.sistemacourier.com`,target:"_blank",className:"subdomain-link",children:[y.subdomain,a.jsx(jd,{size:14})]})}),a.jsx("td",{children:a.jsx("span",{className:"plan-badge",children:y.plan_id})}),a.jsx("td",{children:a.jsx("span",{className:_(y.status),children:y.status})}),a.jsx("td",{children:m(y.created_at)}),a.jsx("td",{children:a.jsxs("div",{className:"actions-cell",children:[a.jsx("button",{onClick:()=>e(`/super-admin/tenants/${y.id}`),className:"action-btn",title:"Ver detalles",children:a.jsx(dy,{size:18})}),y.status==="active"?a.jsx("button",{onClick:()=>P(y.id),className:"action-btn danger",title:"Suspender",children:a.jsx(hy,{size:18})}):y.status==="suspended"&&a.jsx("button",{onClick:()=>A(y.id),className:"action-btn success",title:"Activar",children:a.jsx(py,{size:18})})]})})]},y.id)})})]})}),r.pages>1&&a.jsxs("div",{className:"pagination",children:[a.jsxs("button",{onClick:()=>i({...r,page:r.page-1}),disabled:r.page===1,children:[a.jsx(Zc,{size:18}),"Anterior"]}),a.jsxs("span",{children:["Página ",r.page," de ",r.pages]}),a.jsxs("button",{onClick:()=>i({...r,page:r.page+1}),disabled:r.page===r.pages,children:["Siguiente",a.jsx(NE,{size:18})]})]}),a.jsx("style",{children:`
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
      `})]})},ES=()=>{const{id:e}=nv();wt();const[t,n]=O.useState(null),[r,i]=O.useState(!0),[s,l]=O.useState(!1),[c,u]=O.useState({name:"",plan_id:""});O.useEffect(()=>{h()},[e]);const h=async()=>{try{const N=await(await fetch(`/api/super-admin/tenants/${e}`,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).json();n(N),u({name:N.name,plan_id:N.plan_id})}catch(E){console.error("Error fetching tenant:",E)}finally{i(!1)}},x=async()=>{try{await fetch(`/api/super-admin/tenants/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify(c)}),l(!1),h()}catch(E){console.error("Error updating tenant:",E)}},v=async E=>{if(confirm(E==="suspend"?"¿Suspender este tenant? Los usuarios no podrán acceder.":"¿Activar este tenant?"))try{await fetch(`/api/super-admin/tenants/${e}/${E}`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`,"Content-Type":"application/json"},body:JSON.stringify({})}),h()}catch(P){console.error("Error changing status:",P)}},w=E=>({active:"#10b981",trial:"#f59e0b",suspended:"#ef4444",cancelled:"#6b7280"})[E]||"#3b82f6";return r?a.jsx("div",{className:"loading-page",children:"Cargando..."}):t?a.jsxs("div",{className:"tenant-detail",children:[a.jsxs("header",{className:"page-header",children:[a.jsxs("div",{className:"header-left",children:[a.jsx(Re,{to:"/super-admin/tenants",className:"back-link",children:a.jsx(Zc,{size:20})}),a.jsxs("div",{className:"tenant-header",children:[a.jsx("div",{className:"tenant-avatar",style:{backgroundColor:t.branding.primary_color},children:t.branding.logo_url?a.jsx("img",{src:t.branding.logo_url,alt:""}):t.name.charAt(0)}),a.jsxs("div",{children:[a.jsx("h1",{children:t.branding.company_name||t.name}),a.jsxs("div",{className:"tenant-meta",children:[a.jsx("span",{className:"status-dot",style:{backgroundColor:w(t.status)}}),a.jsx("span",{children:t.status}),a.jsx("span",{className:"separator",children:"•"}),a.jsx("span",{children:t.plan_id})]})]})]})]}),a.jsxs("div",{className:"header-actions",children:[a.jsxs("a",{href:`https://${t.subdomain}.sistemacourier.com`,target:"_blank",className:"btn btn-secondary",children:[a.jsx(jd,{size:18}),"Visitar"]}),t.status==="active"?a.jsxs("button",{onClick:()=>v("suspend"),className:"btn btn-danger",children:[a.jsx(hy,{size:18}),"Suspender"]}):t.status==="suspended"&&a.jsxs("button",{onClick:()=>v("activate"),className:"btn btn-success",children:[a.jsx(py,{size:18}),"Activar"]})]})]}),a.jsxs("div",{className:"detail-content",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"card-header",children:[a.jsx("h3",{children:"Información General"}),s?a.jsxs("button",{onClick:x,className:"btn btn-primary btn-sm",children:[a.jsx(fy,{size:16}),"Guardar"]}):a.jsx("button",{onClick:()=>l(!0),className:"btn-icon",children:a.jsx(Td,{size:18})})]}),a.jsxs("div",{className:"card-content info-grid",children:[a.jsxs("div",{className:"info-item",children:[a.jsx(pa,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Nombre"}),s?a.jsx("input",{value:c.name,onChange:E=>u({...c,name:E.target.value})}):a.jsx("span",{children:t.name})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(ei,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Subdominio"}),a.jsxs("span",{children:[t.subdomain,".sistemacourier.com"]})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(Nd,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Email"}),a.jsx("span",{children:t.branding.contact_email||"-"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(DE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Teléfono"}),a.jsx("span",{children:t.branding.contact_phone||"-"})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(jE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Creado"}),a.jsx("span",{children:new Date(t.created_at).toLocaleDateString("es")})]})]}),a.jsxs("div",{className:"info-item",children:[a.jsx(TE,{size:18}),a.jsxs("div",{children:[a.jsx("label",{children:"Plan"}),s?a.jsxs("select",{value:c.plan_id,onChange:E=>u({...c,plan_id:E.target.value}),children:[a.jsx("option",{value:"trial",children:"Trial"}),a.jsx("option",{value:"starter",children:"Starter"}),a.jsx("option",{value:"professional",children:"Professional"}),a.jsx("option",{value:"enterprise",children:"Enterprise"})]}):a.jsx("span",{className:"plan-badge",children:t.plan_id})]})]})]})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Uso del Servicio"})}),a.jsxs("div",{className:"card-content usage-grid",children:[a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(Cs,{size:24})}),a.jsx("div",{className:"usage-value",children:t.usage.users}),a.jsx("div",{className:"usage-label",children:"Usuarios"})]}),a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(Zt,{size:24})}),a.jsx("div",{className:"usage-value",children:t.usage.packages_this_month}),a.jsx("div",{className:"usage-label",children:"Paquetes/mes"})]}),a.jsxs("div",{className:"usage-item",children:[a.jsx("div",{className:"usage-icon",children:a.jsx(RE,{size:24})}),a.jsxs("div",{className:"usage-value",children:[t.usage.storage_used_mb," MB"]}),a.jsx("div",{className:"usage-label",children:"Almacenamiento"})]})]})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Dominios"})}),a.jsx("div",{className:"card-content",children:t.domains.length===0?a.jsx("p",{className:"empty-text",children:"No hay dominios configurados"}):t.domains.map((E,N)=>a.jsxs("div",{className:"domain-row",children:[a.jsx(ei,{size:16}),a.jsx("span",{children:E.domain}),E.is_primary&&a.jsx("span",{className:"badge primary",children:"Principal"}),a.jsxs("span",{className:`badge ${E.ssl_status==="active"?"success":"warning"}`,children:["SSL: ",E.ssl_status]})]},N))})]}),t.subscription&&a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"card-header",children:a.jsx("h3",{children:"Suscripción"})}),a.jsx("div",{className:"card-content",children:a.jsxs("div",{className:"subscription-info",children:[a.jsxs("div",{children:[a.jsx("label",{children:"Estado"}),a.jsx("span",{className:`badge ${t.subscription.status==="active"?"success":"warning"}`,children:t.subscription.status})]}),a.jsxs("div",{children:[a.jsx("label",{children:"Próximo cobro"}),a.jsx("span",{children:new Date(t.subscription.current_period_end).toLocaleDateString("es")})]})]})})]})]}),a.jsx("style",{children:`
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
      `})]}):a.jsx("div",{className:"error-page",children:"Tenant no encontrado"})},SS=()=>{const{tenant:e,loading:t,error:n}=At(),r=cn(),s=["/","/register","/onboarding","/pricing","/about"].some(c=>r.pathname===c||r.pathname.startsWith("/onboarding")),l=window.location.hostname==="sistemacourier.com"||window.location.hostname==="www.sistemacourier.com"||window.location.hostname==="localhost";return l&&s?a.jsx("div",{className:"app",children:a.jsxs(Bp,{children:[a.jsx(xe,{path:"/",element:a.jsx(WE,{})}),a.jsx(xe,{path:"/register",element:a.jsx(qE,{})}),a.jsx(xe,{path:"/onboarding",element:a.jsx(KE,{})}),a.jsx(xe,{path:"*",element:a.jsx(Eo,{to:"/",replace:!0})})]})}):t?a.jsx(xS,{}):n&&!l?a.jsx(wS,{message:n}):a.jsx(bE,{children:a.jsx("div",{className:"app",children:a.jsxs(Bp,{children:[a.jsx(xe,{path:"/login",element:a.jsx(GE,{})}),a.jsx(xe,{path:"/dashboard",element:a.jsx(kt,{children:a.jsx(XE,{})})}),a.jsx(xe,{path:"/packages",element:a.jsx(kt,{children:a.jsx(YE,{})})}),a.jsx(xe,{path:"/packages/new",element:a.jsx(kt,{children:a.jsx(JE,{})})}),a.jsx(xe,{path:"/packages/:id",element:a.jsx(kt,{children:a.jsx(mS,{})})}),a.jsx(xe,{path:"/clients",element:a.jsx(kt,{children:a.jsx(vS,{})})}),a.jsx(xe,{path:"/couriers",element:a.jsx(kt,{children:a.jsx(yS,{})})}),a.jsx(xe,{path:"/account/white-label",element:a.jsx(kt,{children:a.jsx(_S,{})})}),a.jsx(xe,{path:"/super-admin",element:a.jsx(kt,{children:a.jsx(bS,{})})}),a.jsx(xe,{path:"/super-admin/tenants",element:a.jsx(kt,{children:a.jsx(kS,{})})}),a.jsx(xe,{path:"/super-admin/tenants/:id",element:a.jsx(kt,{children:a.jsx(ES,{})})}),a.jsx(xe,{path:"/",element:a.jsx(Eo,{to:"/dashboard",replace:!0})}),a.jsx(xe,{path:"*",element:a.jsx(Eo,{to:"/dashboard",replace:!0})})]})})})};Gl.createRoot(document.getElementById("root")).render(a.jsx(hu.StrictMode,{children:a.jsx(jw,{children:a.jsx(Aw,{children:a.jsx(SS,{})})})}));
//# sourceMappingURL=index-DpJ48Dld.js.map
